"use strict";var Dm=Object.create;var ho=Object.defineProperty,Rm=Object.defineProperties,Mm=Object.getOwnPropertyDescriptor,Om=Object.getOwnPropertyDescriptors,Fm=Object.getOwnPropertyNames,Go=Object.getOwnPropertySymbols,Bm=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable;var Lr=(e,o,t)=>o in e?ho(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Yn.call(o,t)&&Lr(e,t,o[t]);if(Go)for(var t of Go(o))Er.call(o,t)&&Lr(e,t,o[t]);return e},w=(e,o)=>Rm(e,Om(o));var Pe=(e,o)=>{var t={};for(var r in e)Yn.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Go)for(var r of Go(e))o.indexOf(r)<0&&Er.call(e,r)&&(t[r]=e[r]);return t};var f=(e,o)=>()=>(e&&(o=e(e=0)),o);var x=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),K=(e,o)=>{for(var t in o)ho(e,t,{get:o[t],enumerable:!0})},Pr=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Fm(o))!Yn.call(e,c)&&c!==t&&ho(e,c,{get:()=>o[c],enumerable:!(r=Mm(o,c))||r.enumerable});return e};var T=(e,o,t)=>(t=e!=null?Dm(Bm(e)):{},Pr(o||!e||!e.__esModule?ho(t,"default",{value:e,enumerable:!0}):t,e)),z=e=>Pr(ho({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((r,c)=>{var p=l=>{try{_(t.next(l))}catch(h){c(h)}},m=l=>{try{_(t.throw(l))}catch(h){c(h)}},_=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var Dr=x(Ho=>{"use strict";n();Ho.byteLength=Wm;Ho.toByteArray=Hm;Ho.fromByteArray=zm;var te=[],Q=[],Um=typeof Uint8Array!="undefined"?Uint8Array:Array,Jn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ce=0,Cr=Jn.length;Ce<Cr;++Ce)te[Ce]=Jn[Ce],Q[Jn.charCodeAt(Ce)]=Ce;var Ce,Cr;Q["-".charCodeAt(0)]=62;Q["_".charCodeAt(0)]=63;function Nr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function Wm(e){var o=Nr(e),t=o[0],r=o[1];return(t+r)*3/4-r}function Gm(e,o,t){return(o+t)*3/4-t}function Hm(e){var o,t=Nr(e),r=t[0],c=t[1],p=new Um(Gm(e,r,c)),m=0,_=c>0?r-4:r,l;for(l=0;l<_;l+=4)o=Q[e.charCodeAt(l)]<<18|Q[e.charCodeAt(l+1)]<<12|Q[e.charCodeAt(l+2)]<<6|Q[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Q[e.charCodeAt(l)]<<2|Q[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=Q[e.charCodeAt(l)]<<10|Q[e.charCodeAt(l+1)]<<4|Q[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Vm(e){return te[e>>18&63]+te[e>>12&63]+te[e>>6&63]+te[e&63]}function $m(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Vm(r));return c.join("")}function zm(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,_=t-r;m<_;m+=p)c.push($m(e,m,m+p>_?_:m+p));return r===1?(o=e[t-1],c.push(te[o>>2]+te[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(te[o>>10]+te[o>>4&63]+te[o<<2&63]+"=")),c.join("")}});var Rr=x(Zn=>{n();Zn.read=function(e,o,t,r,c){var p,m,_=c*8-r-1,l=(1<<_)-1,h=l>>1,b=-7,S=t?c-1:0,P=t?-1:1,R=e[o+S];for(S+=P,p=R&(1<<-b)-1,R>>=-b,b+=_;b>0;p=p*256+e[o+S],S+=P,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=r;b>0;m=m*256+e[o+S],S+=P,b-=8);if(p===0)p=1-h;else{if(p===l)return m?NaN:(R?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-h}return(R?-1:1)*m*Math.pow(2,p-r)};Zn.write=function(e,o,t,r,c,p){var m,_,l,h=p*8-c-1,b=(1<<h)-1,S=b>>1,P=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,R=r?0:p-1,Z=r?1:-1,ve=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+S>=1?o+=P/l:o+=P*Math.pow(2,1-S),o*l>=2&&(m++,l/=2),m+S>=b?(_=0,m=b):m+S>=1?(_=(o*l-1)*Math.pow(2,c),m=m+S):(_=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+R]=_&255,R+=Z,_/=256,c-=8);for(m=m<<c|_,h+=c;h>0;e[t+R]=m&255,R+=Z,m/=256,h-=8);e[t+R-Z]|=ve*128}});var jr=x(ze=>{"use strict";n();var Qn=Dr(),$e=Rr(),Mr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ze.Buffer=d;ze.SlowBuffer=Jm;ze.INSPECT_MAX_BYTES=50;var Vo=2147483647;ze.kMaxLength=Vo;d.TYPED_ARRAY_SUPPORT=qm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function qm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function _e(e){if(e>Vo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return tt(e)}return Br(e,o,t)}d.poolSize=8192;function Br(e,o,t){if(typeof e=="string")return Km(e,o);if(ArrayBuffer.isView(e))return Xm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(re(e,ArrayBuffer)||e&&re(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(re(e,SharedArrayBuffer)||e&&re(e.buffer,SharedArrayBuffer)))return ot(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return d.from(r,o,t);var c=Ym(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return Br(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Ur(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function jm(e,o,t){return Ur(e),e<=0?_e(e):o!==void 0?typeof t=="string"?_e(e).fill(o,t):_e(e).fill(o):_e(e)}d.alloc=function(e,o,t){return jm(e,o,t)};function tt(e){return Ur(e),_e(e<0?0:rt(e)|0)}d.allocUnsafe=function(e){return tt(e)};d.allocUnsafeSlow=function(e){return tt(e)};function Km(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Wr(e,o)|0,r=_e(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function et(e){for(var o=e.length<0?0:rt(e.length)|0,t=_e(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function Xm(e){if(re(e,Uint8Array)){var o=new Uint8Array(e);return ot(o.buffer,o.byteOffset,o.byteLength)}return et(e)}function ot(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,d.prototype),r}function Ym(e){if(d.isBuffer(e)){var o=rt(e.length)|0,t=_e(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||at(e.length)?_e(0):et(e);if(e.type==="Buffer"&&Array.isArray(e.data))return et(e.data)}function rt(e){if(e>=Vo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Vo.toString(16)+" bytes");return e|0}function Jm(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(re(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),re(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=d.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(re(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Wr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||re(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return nt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return qr(e).length;default:if(c)return r?-1:nt(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=Wr;function Zm(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return cd(this,o,t);case"utf8":case"utf-8":return Hr(this,o,t);case"ascii":return id(this,o,t);case"latin1":case"binary":return sd(this,o,t);case"base64":return rd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pd(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}d.prototype._isBuffer=!0;function Ne(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ne(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ne(this,t,t+3),Ne(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ne(this,t,t+7),Ne(this,t+1,t+6),Ne(this,t+2,t+5),Ne(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Hr(this,0,o):Zm.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=ze.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Mr&&(d.prototype[Mr]=d.prototype.inspect);d.prototype.compare=function(o,t,r,c,p){if(re(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=r-t,l=Math.min(m,_),h=this.slice(c,p),b=o.slice(t,r),S=0;S<l;++S)if(h[S]!==b[S]){m=h[S],_=b[S];break}return m<_?-1:_<m?1:0};function Gr(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,at(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,r)),d.isBuffer(o))return o.length===0?-1:Or(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Or(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function Or(e,o,t,r,c){var p=1,m=e.length,_=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(R,Z){return p===1?R[Z]:R.readUInt16BE(Z*p)}var h;if(c){var b=-1;for(h=t;h<m;h++)if(l(e,h)===l(o,b===-1?0:h-b)){if(b===-1&&(b=h),h-b+1===_)return b*p}else b!==-1&&(h-=h-b),b=-1}else for(t+_>m&&(t=m-_),h=t;h>=0;h--){for(var S=!0,P=0;P<_;P++)if(l(e,h+P)!==l(o,P)){S=!1;break}if(S)return h}return-1}d.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};d.prototype.indexOf=function(o,t,r){return Gr(this,o,t,r,!0)};d.prototype.lastIndexOf=function(o,t,r){return Gr(this,o,t,r,!1)};function Qm(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var _=parseInt(o.substr(m*2,2),16);if(at(_))return m;e[t+m]=_}return m}function ed(e,o,t,r){return $o(nt(o,e.length-t),e,t,r)}function od(e,o,t,r){return $o(ld(o),e,t,r)}function nd(e,o,t,r){return $o(qr(o),e,t,r)}function td(e,o,t,r){return $o(_d(o,e.length-t),e,t,r)}d.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Qm(this,o,t,r);case"utf8":case"utf-8":return ed(this,o,t,r);case"ascii":case"latin1":case"binary":return od(this,o,t,r);case"base64":return nd(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return td(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function rd(e,o,t){return o===0&&t===e.length?Qn.fromByteArray(e):Qn.fromByteArray(e.slice(o,t))}function Hr(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,h,b,S;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(S=(p&31)<<6|l&63,S>127&&(m=S));break;case 3:l=e[c+1],h=e[c+2],(l&192)===128&&(h&192)===128&&(S=(p&15)<<12|(l&63)<<6|h&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:l=e[c+1],h=e[c+2],b=e[c+3],(l&192)===128&&(h&192)===128&&(b&192)===128&&(S=(p&15)<<18|(l&63)<<12|(h&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=_}return ad(r)}var Fr=4096;function ad(e){var o=e.length;if(o<=Fr)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=Fr));return t}function id(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function sd(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function cd(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=ud[e[p]];return c}function pd(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}d.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||B(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||B(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||B(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||B(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||B(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||B(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||B(o,4,this.length),$e.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||B(o,4,this.length),$e.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||B(o,8,this.length),$e.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||B(o,8,this.length),$e.read(this,o,!1,52,8)};function q(e,o,t,r,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;q(this,o,t,r,p,0)}var m=1,_=0;for(this[t]=o&255;++_<r&&(m*=256);)this[t+_]=o/m&255;return t+r};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;q(this,o,t,r,p,0)}var m=r-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+r};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);q(this,o,t,r,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<r&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+r};d.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);q(this,o,t,r,p-1,-p)}var m=r-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+r};d.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Vr(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function $r(e,o,t,r,c){return o=+o,t=t>>>0,c||Vr(e,o,t,4,34028234663852886e22,-34028234663852886e22),$e.write(e,o,t,r,23,4),t+4}d.prototype.writeFloatLE=function(o,t,r){return $r(this,o,t,!0,r)};d.prototype.writeFloatBE=function(o,t,r){return $r(this,o,t,!1,r)};function zr(e,o,t,r,c){return o=+o,t=t>>>0,c||Vr(e,o,t,8,17976931348623157e292,-17976931348623157e292),$e.write(e,o,t,r,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,r){return zr(this,o,t,!0,r)};d.prototype.writeDoubleBE=function(o,t,r){return zr(this,o,t,!1,r)};d.prototype.copy=function(o,t,r,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};d.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=_[m%l]}return this};var md=/[^+/0-9A-Za-z-_]/g;function dd(e){if(e=e.split("=")[0],e=e.trim().replace(md,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function nt(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function ld(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function _d(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function qr(e){return Qn.toByteArray(dd(e))}function $o(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function re(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function at(e){return e!==e}var ud=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var Zr=x((sy,Jr)=>{n();var M=Jr.exports={},ae,ie;function it(){throw new Error("setTimeout has not been defined")}function st(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ae=setTimeout:ae=it}catch(e){ae=it}try{typeof clearTimeout=="function"?ie=clearTimeout:ie=st}catch(e){ie=st}})();function Kr(e){if(ae===setTimeout)return setTimeout(e,0);if((ae===it||!ae)&&setTimeout)return ae=setTimeout,setTimeout(e,0);try{return ae(e,0)}catch(o){try{return ae.call(null,e,0)}catch(t){return ae.call(this,e,0)}}}function gd(e){if(ie===clearTimeout)return clearTimeout(e);if((ie===st||!ie)&&clearTimeout)return ie=clearTimeout,clearTimeout(e);try{return ie(e)}catch(o){try{return ie.call(null,e)}catch(t){return ie.call(this,e)}}}var ue=[],qe=!1,De,zo=-1;function fd(){!qe||!De||(qe=!1,De.length?ue=De.concat(ue):zo=-1,ue.length&&Xr())}function Xr(){if(!qe){var e=Kr(fd);qe=!0;for(var o=ue.length;o;){for(De=ue,ue=[];++zo<o;)De&&De[zo].run();zo=-1,o=ue.length}De=null,qe=!1,gd(e)}}M.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ue.push(new Yr(e,o)),ue.length===1&&!qe&&Kr(Xr)};function Yr(e,o){this.fun=e,this.array=o}Yr.prototype.run=function(){this.fun.apply(null,this.array)};M.title="browser";M.browser=!0;M.env={};M.argv=[];M.version="";M.versions={};function ge(){}M.on=ge;M.addListener=ge;M.once=ge;M.off=ge;M.removeListener=ge;M.removeAllListeners=ge;M.emit=ge;M.prependListener=ge;M.prependOnceListener=ge;M.listeners=function(e){return[]};M.binding=function(e){throw new Error("process.binding is not supported")};M.cwd=function(){return"/"};M.chdir=function(e){throw new Error("process.chdir is not supported")};M.umask=function(){return 0}});var a,s,hd,i,n=f(()=>{a=T(jr()),s=T(Zr()),hd=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=hd});var fe,Re=f(()=>{"use strict";n();fe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var ct={};K(ct,{css:()=>ea,default:()=>Td});var ea,Td,pt=f(()=>{"use strict";n();ea=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ea));Td={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var dt={};K(dt,{css:()=>ra,default:()=>Sd});var ra,Sd,lt=f(()=>{"use strict";n();ra=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ra));Sd={copy:"dapp-core-component__copyButton-styles__copy"}});var sa=f(()=>{"use strict";n()});var se=f(()=>{"use strict";n()});var ca=f(()=>{"use strict";n()});var ut,pa=f(()=>{"use strict";n();ut=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ut||{})});var ma=f(()=>{"use strict";n()});var gt=f(()=>{"use strict";n()});var da=f(()=>{"use strict";n()});var ft=f(()=>{"use strict";n()});var la=f(()=>{"use strict";n()});var _a=f(()=>{"use strict";n()});var Me,Ke,Ie=f(()=>{"use strict";n();Me=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Ke=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var ua,Oy,ga,Fy,L=f(()=>{"use strict";n();Ie();ua=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ua||{}),Oy=u(u({},Ke.WindowProviderRequestEnums),ua),ga=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ga||{}),Fy=u(u({},Ke.WindowProviderResponseEnums),ga)});var fa=f(()=>{"use strict";n()});var ha=f(()=>{"use strict";n()});var ce,H=f(()=>{"use strict";n();ce=(c=>(c.raw="raw",c.text="text",c.decimal="decimal",c.smart="smart",c))(ce||{})});var Ta=f(()=>{"use strict";n()});var ya=f(()=>{"use strict";n()});var xa=f(()=>{"use strict";n()});var O=f(()=>{"use strict";n();ft();la();_a();L();fa();ha();H();Ta();ya();xa()});var Xe,ba,ex,Sa,ox,wa,nx,tx,vd,Ye=f(()=>{"use strict";n();O();Xe={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ba,egldLabel:ex}=Xe["devnet"],{chainId:Sa,egldLabel:ox}=Xe["testnet"],{chainId:wa,egldLabel:nx}=Xe["mainnet"],tx={["devnet"]:ba,["testnet"]:Sa,["mainnet"]:wa},vd={[ba]:"devnet",[Sa]:"testnet",[wa]:"mainnet"}});var jo=f(()=>{"use strict";n()});var pe,va=f(()=>{"use strict";n();pe=require("@multiversx/sdk-web-wallet-provider")});var Oe,yo=f(()=>{"use strict";n();Oe=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ia,ka,ht,px,mx,Tt=f(()=>{"use strict";n();yo();ht=String((ka=(Ia=Oe.safeWindow)==null?void 0:Ia.navigator)==null?void 0:ka.userAgent),px=/^((?!chrome|android).)*safari/i.test(ht),mx=/firefox/i.test(ht)&&/windows/i.test(ht)});var Ko,Xo,Aa,Yo,La,Ea,Je,Pa,v=f(()=>{"use strict";n();sa();se();ca();pa();ma();gt();da();Ye();jo();va();Tt();Ko=5e4,Xo=1e9,Aa=1,Yo="logout",La="login",Ea="N/A",Je="0",Pa="..."});var xo,Jo=f(()=>{"use strict";n();xo=()=>Date.now()/1e3});var Ca=f(()=>{"use strict";n()});var Na=f(()=>{"use strict";n()});var yt=f(()=>{"use strict";n();Jo();Ca();Na()});var xt={};K(xt,{clear:()=>Ld,getItem:()=>kd,localStorageKeys:()=>ke,removeItem:()=>Ad,setItem:()=>Id});var ke,Zo,Id,kd,Ad,Ld,Ze=f(()=>{"use strict";n();yt();ke={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Zo=typeof localStorage!="undefined",Id=({key:e,data:o,expires:t})=>{!Zo||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},kd=e=>{if(!Zo)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:xo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Ad=e=>{!Zo||localStorage.removeItem(String(e))},Ld=()=>{!Zo||localStorage.clear()}});var bt={};K(bt,{clear:()=>Oa,getItem:()=>Ra,removeItem:()=>Ma,setItem:()=>Da,storage:()=>Ed});var Da,Ra,Ma,Oa,Ed,Fa=f(()=>{"use strict";n();Da=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ra=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ma=e=>sessionStorage.removeItem(String(e)),Oa=()=>sessionStorage.clear(),Ed={setItem:Da,getItem:Ra,removeItem:Ma,clear:Oa}});var Fe,Qe=f(()=>{"use strict";n();Ze();Fa();Fe={session:bt,local:xt}});var St,C,X,N=f(()=>{"use strict";n();St=require("@reduxjs/toolkit");v();C=(0,St.createAction)(Yo),X=(0,St.createAction)(La,e=>({payload:e}))});var vt,Ba,Ua,Qo,wt,Wa,en,Pd,It,Gx,Cd,Nd,Hx,Vx,$x,Dd,Rd,on,nn=f(()=>{"use strict";n();vt=require("@multiversx/sdk-core"),Ba=require("@reduxjs/toolkit"),Ua=require("redux-persist");v();Qe();Ze();N();Qo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Je},wt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Qo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Wa=(0,Ba.createSlice)({name:"accountInfoSlice",initialState:wt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new vt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Qo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(C,()=>(Fe.local.removeItem(ke.loginExpiresAt),wt)),e.addCase(X,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new vt.Address(r).hex()}),e.addCase(Ua.REHYDRATE,(o,t)=>{var h;if(!((h=t.payload)!=null&&h.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:wt.accounts,o.publicKey=_})}}),{setAccount:en,setAddress:Pd,setAccountNonce:It,setAccountShard:Gx,setLedgerAccount:Cd,updateLedgerAccount:Nd,setWalletConnectAccount:Hx,setIsAccountLoading:Vx,setAccountLoadingError:$x,setWebsocketEvent:Dd,setWebsocketBatchEvent:Rd}=Wa.actions,on=Wa.reducer});function bo(){return new Date().setHours(new Date().getHours()+24)}function So(e){Fe.local.setItem({key:ke.loginExpiresAt,data:e,expires:e})}var kt=f(()=>{"use strict";n();Qe();Ze()});var Ha,Ga,Va,eb,Md,Od,$a,ob,Fd,za,nb,tb,rb,tn,rn=f(()=>{"use strict";n();Ha=require("@reduxjs/toolkit");kt();L();N();Ga={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Va=(0,Ha.createSlice)({name:"loginInfoSlice",initialState:Ga,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(C,()=>Ga),e.addCase(X,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,So(bo())})}}),{setLoginMethod:eb,setWalletConnectLogin:Md,setLedgerLogin:Od,setTokenLogin:$a,setTokenLoginSignature:ob,setWalletLogin:Fd,invalidateLoginSession:za,setLogoutRoute:nb,setIsWalletConnectV2Initialized:tb,setWebviewLogin:rb}=Va.actions,tn=Va.reducer});var ja,qa,Ka,cb,Bd,pb,Ud,an,sn=f(()=>{"use strict";n();ja=require("@reduxjs/toolkit");N();qa={},Ka=(0,ja.createSlice)({name:"modalsSlice",initialState:qa,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(C,()=>qa)}}),{setTxSubmittedModal:cb,setNotificationModal:Bd,clearTxSubmittedModal:pb,clearNotificationModal:Ud}=Ka.actions,an=Ka.reducer});var E,U=f(()=>{"use strict";n();Re();E=()=>{if(!fe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var Xa=f(()=>{"use strict";n();U()});var Ya=f(()=>{"use strict";n();V()});var Ja=f(()=>{"use strict";n();yo()});var V=f(()=>{"use strict";n();Xa();Ya();U();Ja()});var wo=f(()=>{"use strict";n();V()});var Qa=f(()=>{"use strict";n();wo()});function ei(e){return e[Math.floor(Math.random()*e.length)]}var oi=f(()=>{"use strict";n()});var At=f(()=>{"use strict";n();gt()});var he=f(()=>{"use strict";n();Qa();oi();At()});var ni,ti,ri,Lt,Gd,ai,Gb,Hb,Hd,cn,pn=f(()=>{"use strict";n();ni=require("@reduxjs/toolkit"),ti=T(require("lodash.omit")),ri=require("redux-persist");jo();N();he();Lt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Gd={network:Lt},ai=(0,ni.createSlice)({name:"appConfig",initialState:Gd,reducers:{initializeNetworkConfig:(e,o)=>{let t=ei(o.payload.walletConnectV2RelayAddresses),r=(0,ti.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(C,o=>{o.network.customWalletAddress=void 0}),e.addCase(ri.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Gb,updateNetworkConfig:Hb,setCustomWalletAddress:Hd}=ai.actions,cn=ai.reducer});var ii,Et,si,Kb,Xb,Yb,mn,dn=f(()=>{"use strict";n();ii=require("@reduxjs/toolkit");O();N();Et={isSigning:!1,signedSessions:{}},si=(0,ii.createSlice)({name:"signedMessageInfoSliceState",initialState:Et,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Et},extraReducers:e=>{e.addCase(C,()=>Et)}}),{setSignSession:Kb,clearSignedMessageInfo:Xb,setSignSessionState:Yb}=si.actions,mn=si.reducer});var pi,mi,ci,di,Vd,$d,tS,zd,ln,_n=f(()=>{"use strict";n();pi=require("@reduxjs/toolkit"),mi=require("redux-persist");O();Jo();N();ci={customToasts:[],transactionToasts:[]},di=(0,pi.createSlice)({name:"toastsSlice",initialState:ci,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=w(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:xo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(C,()=>ci),e.addCase(mi.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Vd,removeCustomToast:$d,addTransactionToast:tS,removeTransactionToast:zd}=di.actions,ln=di.reducer});var li,Ct,Nt,Dt,qd,Pt,_i,sS,jd,Rt,un,gn=f(()=>{"use strict";n();li=require("@reduxjs/toolkit");N();Ct="Transaction failed",Nt="Transaction successful",Dt="Processing transaction",qd="Transaction submitted",Pt={},_i=(0,li.createSlice)({name:"transactionsInfo",initialState:Pt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||Ct,successMessage:(r==null?void 0:r.successMessage)||Nt,processingMessage:(r==null?void 0:r.processingMessage)||Dt,submittedMessage:(r==null?void 0:r.submittedMessage)||qd,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Pt},extraReducers:e=>{e.addCase(C,()=>Pt)}}),{clearTransactionsInfo:sS,setTransactionsDisplayInfo:jd,clearTransactionsInfoForSessionId:Rt}=_i.actions,un=_i.reducer});function oo(e){return e!=null&&(tl(e)||cl(e))}function no(e){return e!=null&&(rl(e)||pl(e))}function to(e){return e!=null&&(al(e)||ml(e))}function ui(e){return e!=null&&(il(e)||dl(e))}function Mt(e){return e!=null&&sl(e)}function tl(e){return e!=null&&Kd.includes(e)}function rl(e){return e!=null&&Xd.includes(e)}function al(e){return e!=null&&Yd.includes(e)}function il(e){return e!=null&&Jd.includes(e)}function sl(e){return e!=null&&Zd.includes(e)}function cl(e){return e!=null&&Qd.includes(e)}function pl(e){return e!=null&&el.includes(e)}function ml(e){return e!=null&&ol.includes(e)}function dl(e){return e!=null&&nl.includes(e)}var Kd,Xd,Yd,Jd,Zd,Qd,el,ol,nl,ro=f(()=>{"use strict";n();L();Kd=["sent"],Xd=["success"],Yd=["fail","cancelled","timedOut"],Jd=["invalid"],Zd=["timedOut"],Qd=["pending"],el=["success"],ol=["fail","invalid"],nl=["not executed"]});var gi,fi,vo,ll,hi,Ti,yi,_l,fn,ul,gl,fS,fl,Io,Ot,hS,hn,Tn=f(()=>{"use strict";n();gi=require("@reduxjs/toolkit"),fi=require("redux-persist");L();ro();N();vo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},ll={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},hi=(0,gi.createSlice)({name:"transactionsSlice",initialState:vo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,h;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},ll),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((h=e==null?void 0:e.transactionsToSign)==null?void 0:h.sessionId)===t&&(e.transactionsToSign=vo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var h,b,S,P,R,Z,ve,Wo;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(b=(h=e.signedTransactions)==null?void 0:h[t])==null?void 0:b.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(oe=>oe.hash===p?w(u(u({},m!=null?m:{}),oe),{status:r,errorMessage:c,inTransit:_}):oe);let jn=(P=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:P.every(oe=>no(oe.status)),Kn=(Z=(R=e.signedTransactions[t])==null?void 0:R.transactions)==null?void 0:Z.some(oe=>to(oe.status)),Xn=(Wo=(ve=e.signedTransactions[t])==null?void 0:ve.transactions)==null?void 0:Wo.every(oe=>ui(oe.status));jn&&(e.signedTransactions[t].status="success"),Kn&&(e.signedTransactions[t].status="fail"),Xn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=vo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=vo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(C,()=>vo),e.addCase(fi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((_,[l,h])=>{let b=new Date(l),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(_[l]=h),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ti,updateSignedTransactions:yi,setTransactionsToSign:_l,clearAllTransactionsToSign:fn,clearAllSignedTransactions:ul,clearSignedTransaction:gl,clearTransactionToSign:fS,setSignTransactionsError:fl,setSignTransactionsCancelMessage:Io,moveTransactionsToSignedState:Ot,updateSignedTransactionsCustomTransactionInformation:hS}=hi.actions,hn=hi.reducer});var xi,Ft,bi,bS,SS,hl,wS,yn,xn=f(()=>{"use strict";n();xi=require("@reduxjs/toolkit");N();Ft={},bi=(0,xi.createSlice)({name:"batchTransactionsSlice",initialState:Ft,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ft},extraReducers:e=>{e.addCase(C,()=>Ft)}}),{setBatchTransactions:bS,updateBatchTransactions:SS,clearBatchTransactions:hl,clearAllBatchTransactions:wS}=bi.actions,yn=bi.reducer});var wi,Si,vi,AS,Ii,Bt=f(()=>{"use strict";n();wi=require("@reduxjs/toolkit");N();Si={},vi=(0,wi.createSlice)({name:"dappConfigSlice",initialState:Si,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(C,()=>Si)}}),{setDappConfig:AS}=vi.actions,Ii=vi.reducer});var A=f(()=>{"use strict";n();nn();rn();sn();pn();dn();_n();gn();Tn();xn();Bt()});var Ut=f(()=>{"use strict";n()});var Li,bl,Sl,Be,wn=f(()=>{"use strict";n();Li=require("@reduxjs/toolkit");Ut();nn();xn();Bt();rn();sn();pn();dn();_n();gn();Tn();bl={["account"]:on,["dappConfig"]:Ii,["loginInfo"]:tn,["modals"]:an,["networkConfig"]:cn,["signedMessageInfo"]:mn,["toasts"]:ln,["transactionsInfo"]:un,["transactions"]:hn,["batchTransactions"]:yn},Sl=(e={})=>(0,Li.combineReducers)(u(u({},bl),e)),Be=Sl});var Ni={};K(Ni,{default:()=>Bl,sessionStorageReducers:()=>Wt});function Te(e,o=[]){return{key:e,version:1,storage:Pi.default,blacklist:o}}var j,Ei,Pi,wl,ko,vl,Il,kl,Al,Ll,El,Pl,Cl,Nl,Dl,Ci,Rl,Wt,Ml,Ol,Fl,Bl,Di=f(()=>{"use strict";n();j=require("redux-persist"),Ei=T(require("redux-persist/lib/storage")),Pi=T(require("redux-persist/lib/storage/session"));wn();A();nn();xn();rn();sn();pn();dn();_n();gn();Tn();Ut();wl={persistReducersStorageType:"localStorage"},ko={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},vl=Te(ko["account"]),Il=Te(ko["loginInfo"]),kl=Te(ko["modals"]),Al=Te(ko["networkConfig"]),Ll={2:e=>w(u({},e),{networkConfig:Lt})};El=Te("sdk-dapp-transactionsInfo"),Pl=Te("sdk-dapp-transactions",["transactionsToSign"]),Cl=Te("sdk-dapp-batchTransactions",["batchTransactions"]),Nl=Te("sdk-dapp-toasts"),Dl=Te("sdk-dapp-signedMessageInfo"),Ci={key:"sdk-dapp-store",version:2,storage:Ei.default,whitelist:Object.keys(ko),migrate:(0,j.createMigrate)(Ll,{debug:!1})},Rl=w(u({},Ci),{whitelist:[]}),Wt={["toasts"]:(0,j.persistReducer)(Nl,ln),["transactions"]:(0,j.persistReducer)(Pl,hn),["transactionsInfo"]:(0,j.persistReducer)(El,un),["batchTransactions"]:(0,j.persistReducer)(Cl,yn),["signedMessageInfo"]:(0,j.persistReducer)(Dl,mn)},Ml=w(u({},Wt),{["account"]:(0,j.persistReducer)(vl,on),["loginInfo"]:(0,j.persistReducer)(Il,tn),["modals"]:(0,j.persistReducer)(kl,an),["networkConfig"]:(0,j.persistReducer)(Al,cn)}),Ol=wl.persistReducersStorageType==="localStorage",Fl=Ol?(0,j.persistReducer)(Ci,Be(Wt)):(0,j.persistReducer)(Rl,Be(Ml)),Bl=Fl});var Ri={};K(Ri,{default:()=>Ul});var Ul,Mi=f(()=>{"use strict";n();wn();Ul=Be()});var Oi={};K(Oi,{default:()=>Gl});var ee,Wl,Gl,Fi=f(()=>{"use strict";n();ee=require("redux-persist"),Wl=[ee.FLUSH,ee.REHYDRATE,ee.PAUSE,ee.PERSIST,ee.PURGE,ee.REGISTER],Gl=Wl});var Wi={};K(Wi,{default:()=>Ui});function Ui(e){return(0,Bi.persistStore)(e)}var Bi,Gi=f(()=>{"use strict";n();Bi=require("redux-persist")});var Ws=x((b2,Us)=>{n();var Ou=typeof i=="object"&&i&&i.Object===Object&&i;Us.exports=Ou});var No=x((S2,Gs)=>{n();var Fu=Ws(),Bu=typeof self=="object"&&self&&self.Object===Object&&self,Uu=Fu||Bu||Function("return this")();Gs.exports=Uu});var ar=x((w2,Hs)=>{n();var Wu=No(),Gu=Wu.Symbol;Hs.exports=Gu});var qs=x((v2,zs)=>{n();var Vs=ar(),$s=Object.prototype,Hu=$s.hasOwnProperty,Vu=$s.toString,Do=Vs?Vs.toStringTag:void 0;function $u(e){var o=Hu.call(e,Do),t=e[Do];try{e[Do]=void 0;var r=!0}catch(p){}var c=Vu.call(e);return r&&(o?e[Do]=t:delete e[Do]),c}zs.exports=$u});var Ks=x((I2,js)=>{n();var zu=Object.prototype,qu=zu.toString;function ju(e){return qu.call(e)}js.exports=ju});var ir=x((k2,Js)=>{n();var Xs=ar(),Ku=qs(),Xu=Ks(),Yu="[object Null]",Ju="[object Undefined]",Ys=Xs?Xs.toStringTag:void 0;function Zu(e){return e==null?e===void 0?Ju:Yu:Ys&&Ys in Object(e)?Ku(e):Xu(e)}Js.exports=Zu});var Qs=x((A2,Zs)=>{n();var Qu=Array.isArray;Zs.exports=Qu});var oc=x((L2,ec)=>{n();function eg(e){return e!=null&&typeof e=="object"}ec.exports=eg});var tc=x((E2,nc)=>{n();var og=ir(),ng=Qs(),tg=oc(),rg="[object String]";function ag(e){return typeof e=="string"||!ng(e)&&tg(e)&&og(e)==rg}nc.exports=ag});var Wn=x((LM,cc)=>{n();function vg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}cc.exports=vg});var mc=x((EM,pc)=>{n();var Ig=ir(),kg=Wn(),Ag="[object AsyncFunction]",Lg="[object Function]",Eg="[object GeneratorFunction]",Pg="[object Proxy]";function Cg(e){if(!kg(e))return!1;var o=Ig(e);return o==Lg||o==Eg||o==Ag||o==Pg}pc.exports=Cg});var lc=x((PM,dc)=>{n();var Ng=No(),Dg=Ng["__core-js_shared__"];dc.exports=Dg});var gc=x((CM,uc)=>{n();var mr=lc(),_c=function(){var e=/[^.]+$/.exec(mr&&mr.keys&&mr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Rg(e){return!!_c&&_c in e}uc.exports=Rg});var hc=x((NM,fc)=>{n();var Mg=Function.prototype,Og=Mg.toString;function Fg(e){if(e!=null){try{return Og.call(e)}catch(o){}try{return e+""}catch(o){}}return""}fc.exports=Fg});var yc=x((DM,Tc)=>{n();var Bg=mc(),Ug=gc(),Wg=Wn(),Gg=hc(),Hg=/[\\^$.*+?()[\]{}|]/g,Vg=/^\[object .+?Constructor\]$/,$g=Function.prototype,zg=Object.prototype,qg=$g.toString,jg=zg.hasOwnProperty,Kg=RegExp("^"+qg.call(jg).replace(Hg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xg(e){if(!Wg(e)||Ug(e))return!1;var o=Bg(e)?Kg:Vg;return o.test(Gg(e))}Tc.exports=Xg});var bc=x((RM,xc)=>{n();function Yg(e,o){return e==null?void 0:e[o]}xc.exports=Yg});var Gn=x((MM,Sc)=>{n();var Jg=yc(),Zg=bc();function Qg(e,o){var t=Zg(e,o);return Jg(t)?t:void 0}Sc.exports=Qg});var Ro=x((OM,wc)=>{n();var ef=Gn(),of=ef(Object,"create");wc.exports=of});var kc=x((FM,Ic)=>{n();var vc=Ro();function nf(){this.__data__=vc?vc(null):{},this.size=0}Ic.exports=nf});var Lc=x((BM,Ac)=>{n();function tf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Ac.exports=tf});var Pc=x((UM,Ec)=>{n();var rf=Ro(),af="__lodash_hash_undefined__",sf=Object.prototype,cf=sf.hasOwnProperty;function pf(e){var o=this.__data__;if(rf){var t=o[e];return t===af?void 0:t}return cf.call(o,e)?o[e]:void 0}Ec.exports=pf});var Nc=x((WM,Cc)=>{n();var mf=Ro(),df=Object.prototype,lf=df.hasOwnProperty;function _f(e){var o=this.__data__;return mf?o[e]!==void 0:lf.call(o,e)}Cc.exports=_f});var Rc=x((GM,Dc)=>{n();var uf=Ro(),gf="__lodash_hash_undefined__";function ff(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=uf&&o===void 0?gf:o,this}Dc.exports=ff});var Oc=x((HM,Mc)=>{n();var hf=kc(),Tf=Lc(),yf=Pc(),xf=Nc(),bf=Rc();function mo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}mo.prototype.clear=hf;mo.prototype.delete=Tf;mo.prototype.get=yf;mo.prototype.has=xf;mo.prototype.set=bf;Mc.exports=mo});var Bc=x((VM,Fc)=>{n();function Sf(){this.__data__=[],this.size=0}Fc.exports=Sf});var Wc=x(($M,Uc)=>{n();function wf(e,o){return e===o||e!==e&&o!==o}Uc.exports=wf});var Mo=x((zM,Gc)=>{n();var vf=Wc();function If(e,o){for(var t=e.length;t--;)if(vf(e[t][0],o))return t;return-1}Gc.exports=If});var Vc=x((qM,Hc)=>{n();var kf=Mo(),Af=Array.prototype,Lf=Af.splice;function Ef(e){var o=this.__data__,t=kf(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():Lf.call(o,t,1),--this.size,!0}Hc.exports=Ef});var zc=x((jM,$c)=>{n();var Pf=Mo();function Cf(e){var o=this.__data__,t=Pf(o,e);return t<0?void 0:o[t][1]}$c.exports=Cf});var jc=x((KM,qc)=>{n();var Nf=Mo();function Df(e){return Nf(this.__data__,e)>-1}qc.exports=Df});var Xc=x((XM,Kc)=>{n();var Rf=Mo();function Mf(e,o){var t=this.__data__,r=Rf(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}Kc.exports=Mf});var Jc=x((YM,Yc)=>{n();var Of=Bc(),Ff=Vc(),Bf=zc(),Uf=jc(),Wf=Xc();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}lo.prototype.clear=Of;lo.prototype.delete=Ff;lo.prototype.get=Bf;lo.prototype.has=Uf;lo.prototype.set=Wf;Yc.exports=lo});var Qc=x((JM,Zc)=>{n();var Gf=Gn(),Hf=No(),Vf=Gf(Hf,"Map");Zc.exports=Vf});var np=x((ZM,op)=>{n();var ep=Oc(),$f=Jc(),zf=Qc();function qf(){this.size=0,this.__data__={hash:new ep,map:new(zf||$f),string:new ep}}op.exports=qf});var rp=x((QM,tp)=>{n();function jf(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}tp.exports=jf});var Oo=x((e5,ap)=>{n();var Kf=rp();function Xf(e,o){var t=e.__data__;return Kf(o)?t[typeof o=="string"?"string":"hash"]:t.map}ap.exports=Xf});var sp=x((o5,ip)=>{n();var Yf=Oo();function Jf(e){var o=Yf(this,e).delete(e);return this.size-=o?1:0,o}ip.exports=Jf});var pp=x((n5,cp)=>{n();var Zf=Oo();function Qf(e){return Zf(this,e).get(e)}cp.exports=Qf});var dp=x((t5,mp)=>{n();var eh=Oo();function oh(e){return eh(this,e).has(e)}mp.exports=oh});var _p=x((r5,lp)=>{n();var nh=Oo();function th(e,o){var t=nh(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}lp.exports=th});var gp=x((a5,up)=>{n();var rh=np(),ah=sp(),ih=pp(),sh=dp(),ch=_p();function _o(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}_o.prototype.clear=rh;_o.prototype.delete=ah;_o.prototype.get=ih;_o.prototype.has=sh;_o.prototype.set=ch;up.exports=_o});var hp=x((i5,fp)=>{n();var ph="__lodash_hash_undefined__";function mh(e){return this.__data__.set(e,ph),this}fp.exports=mh});var yp=x((s5,Tp)=>{n();function dh(e){return this.__data__.has(e)}Tp.exports=dh});var bp=x((c5,xp)=>{n();var lh=gp(),_h=hp(),uh=yp();function Hn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new lh;++o<t;)this.add(e[o])}Hn.prototype.add=Hn.prototype.push=_h;Hn.prototype.has=uh;xp.exports=Hn});var wp=x((p5,Sp)=>{n();function gh(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Sp.exports=gh});var Ip=x((m5,vp)=>{n();function fh(e){return e!==e}vp.exports=fh});var Ap=x((d5,kp)=>{n();function hh(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}kp.exports=hh});var Ep=x((l5,Lp)=>{n();var Th=wp(),yh=Ip(),xh=Ap();function bh(e,o,t){return o===o?xh(e,o,t):Th(e,yh,t)}Lp.exports=bh});var Cp=x((_5,Pp)=>{n();var Sh=Ep();function wh(e,o){var t=e==null?0:e.length;return!!t&&Sh(e,o,0)>-1}Pp.exports=wh});var Dp=x((u5,Np)=>{n();function vh(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}Np.exports=vh});var Mp=x((g5,Rp)=>{n();function Ih(e,o){return e.has(o)}Rp.exports=Ih});var Fp=x((f5,Op)=>{n();var kh=Gn(),Ah=No(),Lh=kh(Ah,"Set");Op.exports=Lh});var Up=x((h5,Bp)=>{n();function Eh(){}Bp.exports=Eh});var dr=x((T5,Wp)=>{n();function Ph(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}Wp.exports=Ph});var Hp=x((y5,Gp)=>{n();var lr=Fp(),Ch=Up(),Nh=dr(),Dh=1/0,Rh=lr&&1/Nh(new lr([,-0]))[1]==Dh?function(e){return new lr(e)}:Ch;Gp.exports=Rh});var $p=x((x5,Vp)=>{n();var Mh=bp(),Oh=Cp(),Fh=Dp(),Bh=Mp(),Uh=Hp(),Wh=dr(),Gh=200;function Hh(e,o,t){var r=-1,c=Oh,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=Fh;else if(p>=Gh){var h=o?null:Uh(e);if(h)return Wh(h);m=!1,c=Bh,l=new Mh}else l=o?[]:_;e:for(;++r<p;){var b=e[r],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var P=l.length;P--;)if(l[P]===S)continue e;o&&l.push(S),_.push(b)}else c(l,S,t)||(l!==_&&l.push(S),_.push(b))}return _}Vp.exports=Hh});var qp=x((b5,zp)=>{n();var Vh=$p();function $h(e){return e&&e.length?Vh(e):[]}zp.exports=$h});var be={};K(be,{css:()=>tm,default:()=>kT});var tm,kT,Se=f(()=>{"use strict";n();tm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tm));kT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var br={};K(br,{css:()=>fm,default:()=>KT});var fm,KT,Sr=f(()=>{"use strict";n();fm=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fm));KT={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var wr={};K(wr,{css:()=>xm,default:()=>YT});var xm,YT,vr=f(()=>{"use strict";n();xm=`.dapp-core-component__styles__decode {
  margin-top: 0.25rem;
  position: relative;
  max-width: 100%;
  flex: 1;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea {
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  border: 1px solid #dee2e6;
  background-color: #fafafa;
  font-size: 0.8125rem;
  min-height: 3.125rem;
  height: 4.5rem;
  overflow: auto;
  padding: 0.375rem 6rem 0.375rem 0.75rem;
  word-wrap: break-word;
  white-space: pre-wrap;
  resize: vertical;
  scrollbar-width: thin;
  overflow-x: hidden;
  width: 100%;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea:hover {
  border: 1px solid #dee2e6;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .dapp-core-component__styles__decode .dapp-core-component__styles__textarea:before {
    background: #fafafa;
    content: "";
    bottom: 1px;
    right: 1px;
    width: 16px;
    height: 16px;
    position: absolute;
    cursor: ns-resize;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .dapp-core-component__styles__decode .dapp-core-component__styles__textarea:after {
    content: "";
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    -webkit-clip-path: polygon(80% 0, 80% 80%, 0 80%);
    clip-path: polygon(80% 0, 80% 80%, 0 80%);
    cursor: ns-resize;
    background: repeating-linear-gradient(135deg, #dee2e6, #dee2e6 1px, transparent 0, transparent 3px);
  }
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar {
  background-color: #fafafa;
  width: 1rem;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-track {
  background-color: #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-track:hover {
  background-color: #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-thumb {
  background-color: #dee2e6;
  border-radius: 1rem;
  border: 5px solid #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a5;
  border: 4px solid #fafafa;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__textarea::-webkit-resizer {
  background-color: transparent;
}
@-moz-document url-prefix() {
  .dapp-core-component__styles__decode:before, .dapp-core-component__styles__decode:after {
    display: none;
  }
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select {
  right: 0.313rem;
  top: 0.313rem;
  position: absolute;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select:after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  top: calc(50% + 1px);
  transform: translateY(-50%);
  left: calc(50% + 0.5rem);
  border-top: 0.25rem solid;
  border-right: 0.25rem solid transparent;
  border-bottom: 0;
  border-left: 0.25rem solid transparent;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown {
  appearance: none;
  text-align: center;
  padding: 0.25rem 0.5rem;
  text-indent: -10px;
  font-size: 0.6875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: transparent;
  border: 1px solid #e4e5e5;
  transition: all 400ms ease;
  cursor: pointer;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown:hover {
  background-color: #eeeeee;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.13);
  background-color: #eeeeee;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__select .dapp-core-component__styles__dropdown:focus {
  outline: none;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__warnings {
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__warnings .dapp-core-component__styles__icon {
  margin-right: 0.25rem;
  color: #f0ad4e;
}
.dapp-core-component__styles__decode .dapp-core-component__styles__warnings .dapp-core-component__styles__warning {
  color: #f0ad4e;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xm));YT={decode:"dapp-core-component__styles__decode",textarea:"dapp-core-component__styles__textarea",select:"dapp-core-component__styles__select",dropdown:"dapp-core-component__styles__dropdown",warnings:"dapp-core-component__styles__warnings",icon:"dapp-core-component__styles__icon",warning:"dapp-core-component__styles__warning"}});var kr={};K(kr,{css:()=>vm,default:()=>ZT});var vm,ZT,Ar=f(()=>{"use strict";n();vm=`.dapp-core-component__styles__events {
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event {
  display: flex;
  border-left: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 1rem;
  margin-left: 1rem;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event:not(:first-child) {
  padding-top: 1rem;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__icon {
  margin-left: -1.1rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  font-size: 0.9375rem;
  text-align: center;
  color: #6c757d;
  width: 2.1875rem;
  height: 2.1875rem;
  min-width: 2.1875rem;
  line-height: 2.1875rem;
  background: #fbfbfb;
  box-shadow: inset 0 0 3px rgba(108, 117, 125, 0.2);
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content {
  flex: 1;
  margin-top: 0.4rem;
  max-width: calc(100% - 1.5875rem);
  width: calc(100% - 1.5875rem);
  display: block;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
@media (min-width: 576px) {
  .dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row {
    flex-direction: row;
  }
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__label {
  color: #6c757d;
}
@media (min-width: 576px) {
  .dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__label {
    text-align: right;
  }
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__data {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__hash {
  font-size: 1rem;
  align-items: flex-end;
  max-width: none;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__hash [class*=left] span,
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__hash [class*=right] span {
  font-size: 1rem;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__explorer {
  color: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__explorer:hover {
  color: #1f43f4;
  text-decoration: none;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__address {
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  width: auto;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__address span {
  max-width: none;
}
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__address span [class*=left] span,
.dapp-core-component__styles__events .dapp-core-component__styles__event .dapp-core-component__styles__content .dapp-core-component__styles__row .dapp-core-component__styles__address span [class*=right] span {
  font-size: 1rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vm));ZT={events:"dapp-core-component__styles__events",event:"dapp-core-component__styles__event",icon:"dapp-core-component__styles__icon",content:"dapp-core-component__styles__content",row:"dapp-core-component__styles__row",label:"dapp-core-component__styles__label",data:"dapp-core-component__styles__data",hash:"dapp-core-component__styles__hash",copy:"dapp-core-component__styles__copy",explorer:"dapp-core-component__styles__explorer",address:"dapp-core-component__styles__address"}});var ny={};K(ny,{EventsList:()=>oy});module.exports=z(ny);n();n();var D=T(require("react")),Im=require("@fortawesome/free-solid-svg-icons"),km=require("@fortawesome/react-fontawesome"),qn=T(require("classnames"));n();var na=T(require("react"));n();var To=T(require("react"));n();Re();var Qr=()=>!fe();var yd=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(pt(),ct))}),xd=()=>(pt(),z(ct)).default,mt=Qr();function oa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=To.default.useState(mt?void 0:xd()),[p,m]=To.default.useState(mt||t==null?void 0:t()),_=()=>g(this,null,function*(){(e?e():yd()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,To.useEffect)(()=>{mt&&_()},[]),{globalStyles:r,styles:p}}function G(e,o){return t=>{let{globalStyles:r,styles:c}=oa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return na.default.createElement(e,w(u({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();n();var je=T(require("react")),qo=require("@fortawesome/free-solid-svg-icons"),_t=require("@fortawesome/react-fontawesome"),aa=T(require("classnames"));n();Re();function bd(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(t),o}function ta(e){return g(this,null,function*(){if(!fe())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=bd(e),o})}var wd=({text:e,className:o="dapp-copy-button",copyIcon:t=qo.faCopy,successIcon:r=qo.faCheck,styles:c})=>{let[p,m]=(0,je.useState)({default:!0,success:!1});return je.default.createElement("a",{href:"/#",onClick:l=>g(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let h=e&&e.trim();m({default:!1,success:yield ta(h)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,aa.default)(c==null?void 0:c.copy,o)},p.default||!p.success?je.default.createElement(_t.FontAwesomeIcon,{icon:t}):je.default.createElement(_t.FontAwesomeIcon,{icon:r}))},ia=G(wd,{ssrStyles:()=>Promise.resolve().then(()=>(lt(),dt)),clientStyles:()=>(lt(),z(dt)).default});n();n();var F=T(require("react")),hm=T(require("classnames"));v();n();n();n();var ji=require("react"),ao=require("react-redux");n();var Gt=require("@reduxjs/toolkit"),zi=require("react-redux/lib/utils/Subscription");A();n();var ki=T(require("lodash.throttle"));v();A();kt();Qe();Ze();var Tl=[Yo],bn=!1,yl=(0,ki.default)(()=>{So(bo())},5e3),Ai=e=>o=>t=>{if(Tl.includes(t.type))return o(t);let r=e.getState(),c=Fe.local.getItem(ke.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return So(bo());let m=Date.now();return c-m<0&&!bn?setTimeout(()=>{bn=!0,e.dispatch(za())},1e3):(bn&&(bn=!1),yl()),o(t)};n();n();function Sn(){return typeof sessionStorage!="undefined"}var Hi=Sn()?(Di(),z(Ni)).default:(Mi(),z(Ri)).default,Vi=Sn()?(Fi(),z(Oi)).default:[],$i=Sn()?(Gi(),z(Wi)).default:e=>e;wn();var I=(0,Gt.configureStore)({reducer:Hi,middleware:e=>e({serializableCheck:{ignoredActions:[...Vi,It.type,en.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ai)}),qi=(0,zi.createSubscription)(I),I0=$i(I),k0=(0,Gt.configureStore)({reducer:Be});var Hl={store:I,subscription:qi},Ht=(0,ji.createContext)(Hl),P0=(0,ao.createStoreHook)(Ht),$=(0,ao.createDispatchHook)(Ht),k=(0,ao.createSelectorHook)(Ht);n();n();A();n();var Ki=T(require("lodash.isequal")),vn=require("reselect"),y=(0,vn.createSelectorCreator)(vn.defaultMemoize,Ki.default);var me=e=>e.account,Ue=y(me,e=>e.address),io=y(me,Ue,(e,o)=>o in e.accounts?e.accounts[o]:Qo),Vl=y(me,io,(e,o)=>{let c=e,{accounts:t}=c,r=Pe(c,["accounts"]);return w(u({},r),{address:o.address,account:o})}),M0=y(io,e=>e.balance),$l=y(io,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),O0=y(me,e=>e.shard),zl=y(me,e=>e.ledgerAccount),F0=y(me,e=>e.walletConnectAccount),B0=y(me,e=>e.isAccountLoading),U0=y(me,e=>e.accountLoadingError),ql=y(me,e=>e.websocketEvent),jl=y(me,e=>e.websocketBatchEvent);n();var Xi=e=>e.dappConfig,H0=y(Xi,e=>e.shouldUseWebViewProvider);n();var Y=e=>e.loginInfo,Kl=y(Y,e=>e.loginMethod),In=y(Y,Ue,(e,o)=>Boolean(o)),q0=y(Y,e=>e.walletConnectLogin),Xl=y(Y,e=>e.ledgerLogin),Yl=y(Y,e=>e.walletLogin),j0=y(Y,e=>e.isLoginSessionInvalid),Vt=y(Y,e=>e.tokenLogin),Yi=y(Y,e=>e.logoutRoute),Jl=y(Y,e=>e.isWalletConnectV2Initialized);n();var Ji=e=>e.modals,Y0=y(Ji,e=>e.txSubmittedModal),Zl=y(Ji,e=>e.notificationModal);n();var de=e=>e.networkConfig,kn=y(de,e=>e.network.chainId),Ql=y(de,e=>e.network.roundDuration),Q0=y(de,e=>e.network.walletConnectBridgeAddress),e_=y(de,e=>e.network.walletConnectV2RelayAddress),o_=y(de,e=>e.network.walletConnectV2ProjectId),n_=y(de,e=>e.network.walletConnectV2Options),t_=y(de,e=>e.network.walletConnectDeepLink),J=y(de,e=>e.network),Zi=y(J,e=>e.apiAddress),Qi=y(J,e=>e.explorerAddress),es=y(J,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),r_=y(J,e=>e.xAliasAddress),os=y(J,e=>e.egldLabel);n();var An=e=>e.signedMessageInfo,nw=y(An,e=>e.isSigning),tw=y(An,e=>e.errorMessage),rw=y(An,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),aw=y(An,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var ns=e=>e.toasts,a_=y(ns,e=>e.customToasts),ts=y(ns,e=>e.transactionToasts);n();A();var rs={errorMessage:Ct,successMessage:Nt,processingMessage:Dt},as=e=>e.transactionsInfo,i_=y(as,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||rs);n();n();var le=require("@multiversx/sdk-core");v();n();var qt=require("@multiversx/sdk-core/out");n();n();function $t(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();function zt(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}n();n();var is=e=>{let o=e!=null?e:"";return $t(o)?qt.TransactionPayload.fromEncoded(o):new qt.TransactionPayload(o)};n();v();var Ao=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ut).some(t=>e.startsWith(t)):!1;function Ln(e){var r,c,p;let o=u({},e);Ao({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:is(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Ko,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Xo,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:Aa)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();v();n();n();n();var p_=require("@multiversx/sdk-core/out");n();v();n();var cs=require("@multiversx/sdk-core");O();n();var ss=require("@multiversx/sdk-core");function m_(e){try{let o=new ss.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Lo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&m_(e)}n();n();n();var d_=require("@multiversx/sdk-core"),l_=T(require("bignumber.js"));L();n();n();n();var jt="blocks";n();n();n();n();H();n();n();H();n();n();n();var x_=T(require("bignumber.js"));v();n();var y_=require("@multiversx/sdk-core"),Xt=T(require("bignumber.js"));v();n();var h_=T(require("bignumber.js"));n();Xt.default.config({ROUNDING_MODE:Xt.default.ROUND_FLOOR});n();n();n();v();n();n();n();n();v();n();v();n();var b_=require("@multiversx/sdk-core");v();n();var Po=require("@multiversx/sdk-core"),v_=T(require("bignumber.js"));v();n();n();var S_=T(require("bignumber.js"));v();n();v();n();n();n();n();n();n();v();n();v();n();v();n();H();var k_=["reDelegateRewards","claimRewards","unBond"],A_=["wrapEgld","unwrapEgld"],L_=["unStake"],E_=["unDelegate"];n();n();n();v();n();var D_=T(require("bignumber.js"));n();n();H();n();var M_=T(require("bignumber.js"));n();n();n();n();var B_=T(require("bignumber.js"));O();n();n();n();n();L();n();var H_=require("@multiversx/sdk-web-wallet-provider");v();n();var W_=T(require("qs"));n();V();Re();n();Re();var WA={search:fe()?window.location.search:"",removeParams:[]};n();n();var us=e=>a.Buffer.from(String(e==null?void 0:e.data),"base64").toString("hex");n();U();var gs=(e,o)=>{var _;let{hash:t}=E(),r=t.split("/"),c=r[0]?r[0].replace("#",""):"",p=(_=r[1])!=null?_:0;return c===o&&e.order===Number(p)};n();H();n();n();U();n();var V_=T(require("linkifyjs"));n();v();n();var $_=T(require("bignumber.js"));n();O();n();n();L();n();L();n();n();n();H();n();H();n();var z_=T(require("bignumber.js"));v();H();n();H();n();var Nn=require("react");O();n();n();H();n();n();var fs=require("@multiversx/sdk-core/out"),Qt=T(require("bignumber.js"));H();var xe=(e,o,t)=>{switch(o){case"text":try{return a.Buffer.from(e,"hex").toString("utf8")}catch(r){}return e;case"decimal":return e!==""?new Qt.default(e,16).toString(10):"";case"smart":try{let r=fs.Address.fromHex(e).toString();if(Lo(r))return r}catch(r){}try{let r=a.Buffer.from(e,"hex").toString("utf8");if(zt(r))return r;{if(t&&[...t.esdts,...t.nfts].some(m=>r.includes(m)))return r;let c=new Qt.default(e,16);return c.isFinite()?c.toString(10):e}}catch(r){}return e;case"raw":default:return e}};n();O();n();var q_=e=>e.toLowerCase().match(/^[0-9a-f]+$/i),j_=e=>e.length%2===0,hs=e=>{let o=[];return e&&!q_(e)&&o.push(`Invalid Hex characters on argument @${e}`),e&&!j_(e)&&o.push(`Odd number of Hex characters on argument @${e}`),o};n();O();var Cn=({parts:e,decodedParts:o,identifier:t})=>{let r=[...o];if(e[0]==="ESDTNFTTransfer"&&e[2]&&(r[2]=xe(e[2],"decimal")),t==="ESDTNFTTransfer"&&e[1]){let c=a.Buffer.from(String(e[1]),"base64");r[1]=xe(c.toString("hex"),"decimal")}return r};var Ts=({parts:e,decodeMethod:o,identifier:t,display:r})=>{let c=e.map((m,_)=>{if(e.length>=2&&(_===0&&m.length<64||_===1&&!e[0]))return/[^a-z0-9]/gi.test(m)?xe(m,o):m;{let l=hs(m);return l.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,...l]))),xe(m,o)}});return o==="smart"?Cn({parts:e,decodedParts:c,identifier:t}):c};var ys=({input:e,decodeMethod:o,identifier:t})=>{let r={displayValue:"",validationWarnings:[]};if(!e.includes("@")&&!e.includes(`
`))return r.displayValue=xe(e,o),r;if(e.includes("@")){let c=e.split("@"),p=Ts({parts:c,identifier:t,decodeMethod:o,display:r});r.displayValue=p.join("@")}if(e.includes(`
`)){let c=e.split(`
`),p=c.map(_=>{let l=a.Buffer.from(_,"base64");return o==="raw"?_:xe(l.toString("hex"),o)}),m=o==="smart"?Cn({parts:c,decodedParts:p,identifier:t}):p;r.displayValue=m.join(`
`)}return r};var K_=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}],xs=({value:e,initialDecodeMethod:o,setDecodeMethod:t,identifier:r})=>{let[c,p]=(0,Nn.useState)(o&&Object.values(ce).includes(o)?o:"raw"),{displayValue:m,validationWarnings:_}=ys({input:e,decodeMethod:c,identifier:r});return(0,Nn.useEffect)(()=>{t&&t(c)},[c]),{displayValue:m,validationWarnings:_,setActiveKey:p,decodeOptions:K_}};n();var bs=require("react");O();U();n();var X_=require("react");H();var M1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];ro();n();var Dn=e=>e.transactions,so=y(Dn,e=>e.signedTransactions),Y_=y(Dn,e=>e.signTransactionsError),Ss=y(Dn,e=>e.signTransactionsCancelMessage),Rn=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),ws=y(so,Rn(oo)),vs=y(so,Rn(no)),Is=y(so,Rn(to)),J_=y(so,Rn(Mt)),ks=y(Dn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Ln(t)))||[]})}),Z_=y(so,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var As=require("react");n();A();n();n();n();n();n();n();n();n();var eu=require("@multiversx/sdk-extension-provider"),ou=require("@multiversx/sdk-hw-provider"),nu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),tu=require("@multiversx/sdk-opera-provider"),ru=require("@multiversx/sdk-passkey-provider/out"),au=require("@multiversx/sdk-web-wallet-provider");v();Ie();n();var co=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Ls=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");L();n();var ne=e=>`Unable to perform ${e}, Provider not initialized`,Mn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ne("getAccount"))}setAccount(o){throw new Error(ne(`setAccount: ${o}`))}login(o){throw new Error(ne(`login with options: ${o}`))}logout(o){throw new Error(ne(`logout with options: ${o}`))}getAddress(){throw new Error(ne("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(ne(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(ne(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(ne(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(ne(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(ne(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(ne(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Es=new Mn;A();n();n();n();n();n();var Ps=require("@lifeomic/axios-fetch"),er=T(require("axios")),or=(0,Ps.buildAxiosFetch)(er.default),nr=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function iu(e,o,t){return g(this,null,function*(){try{let r=yield or(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return nr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function su(e,o){return g(this,null,function*(){try{let t=yield or(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return nr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function cu(e,o,t){return g(this,null,function*(){try{let r=yield or(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return nr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var po=er.default.create();po.get=su;po.post=iu;po.patch=cu;n();n();var pu=T(require("axios"));n();var mu=T(require("swr"));n();L();n();n();n();U();n();ro();n();n();n();var du=T(require("axios"));n();var _u=T(require("axios"));Ye();n();v();n();var uu=T(require("axios"));n();var fu=T(require("axios"));n();n();var hu=T(require("axios"));n();var Tu=T(require("axios"));n();n();A();L();n();n();n();n();U();n();N();O();n();A();n();var Rs=require("@multiversx/sdk-core");O();V();n();ro();n();A();L();n();A();O();n();n();n();O();n();jo();n();n();n();n();var Su=T(require("swr"));n();n();n();n();var Ms=require("react");n();n();var wu=require("react"),vu=require("@multiversx/sdk-web-wallet-provider"),Iu=require("@multiversx/sdk-web-wallet-provider"),ku=T(require("qs"));v();A();L();ft();U();var xR=E();n();var sc=require("react"),pr=require("@multiversx/sdk-core");n();v();At();n();n();n();n();n();n();n();n();n();n();Ye();n();var Pu=T(require("axios"));n();var Nu=T(require("axios"));n();Ye();n();Ye();n();n();n();n();var Ru=require("@multiversx/sdk-opera-provider");n();var Mu=require("@multiversx/sdk-extension-provider");n();Ie();n();n();n();n();var ig=T(tc());n();var mg=require("@multiversx/sdk-native-auth-client");n();var ic=T(require("axios"));n();n();n();function rc(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var ac=(e,o,t,r=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield rc(o.delay)),yield ac(e,o,t,r+1)):null}}),sr=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield ac(e,o,t)});var sg=4;var G2=sr((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield ic.default.get(`${e}/${jt}?from=${sg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();Jo();n();n();U();var J2={origin:E().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var lg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var _g=require("@multiversx/sdk-passkey-provider/out");v();U();n();n();n();var yg=require("react"),xg=require("@multiversx/sdk-hw-provider");n();N();O();n();wo();Qe();Ze();V();n();n();var Yp=require("react"),Jp=require("@multiversx/sdk-core"),cT=require("@multiversx/sdk-extension-provider"),pT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),mT=require("@multiversx/sdk-passkey-provider/out"),dT=T(qp());v();n();n();n();n();n();n();n();n();n();n();var Fo=T(require("react"));var F5=(0,Fo.createContext)({}),B5=I.getState();n();var Kp=T(require("react"));n();var _r=T(require("react")),zh=T(require("axios"));n();n();Ie();n();n();var Jh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Zh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");N();n();N();A();O();n();n();A();n();V();n();A();O();n();n();var jh=require("@multiversx/sdk-core"),Kh=T(require("bignumber.js"));v();n();var Xh=T(require("bignumber.js"));v();A();L();V();U();n();var Xp=require("react"),nT=require("@multiversx/sdk-extension-provider"),tT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),rT=require("@multiversx/sdk-passkey-provider/out");Ie();A();n();A();O();wo();U();n();se();A();n();n();var _T=require("react");n();n();L();ro();n();var $n=require("react"),Zp=(e,o)=>{let[t,r]=(0,$n.useState)(e);return(0,$n.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var gT=require("react"),fT=require("@multiversx/sdk-extension-provider");se();N();L();n();he();V();V();n();n();Ie();O();n();var uT=require("react"),Qp=require("@multiversx/sdk-core");A();n();var hT=require("react"),TT=require("@multiversx/sdk-opera-provider");se();N();L();he();V();U();n();var yT=require("react");Tt();se();Ie();N();A();L();he();U();n();var vT=require("react");se();A();n();n();yt();n();n();var xT=T(require("platform"));Re();n();n();n();n();n();n();n();yo();L();n();n();var bT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();wo();Qe();n();n();n();A();n();n();var ST=T(require("axios"));V();n();n();var wT=T(Wn());yo();var em,om,nm,LW=(nm=(om=(em=Oe.safeWindow)==null?void 0:em.location)==null?void 0:om.origin)==null?void 0:nm.includes("localhost");n();U();n();n();var RT=require("react");v();n();n();v();n();n();n();var IT=T(require("bignumber.js"));n();n();n();var Ee=T(require("react")),pm=require("react"),mm=require("react"),Tr=T(require("classnames")),dm=require("react-dom");v();n();var rm=T(require("react")),am=T(require("classnames"));var AT=({className:e,children:o,styles:t})=>rm.default.createElement("div",{className:(0,am.default)(t==null?void 0:t.dappModalBody,e)},o),ur=G(AT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),z(be)).default});n();var gr=T(require("react")),im=T(require("classnames"));var LT=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?gr.default.createElement("div",{className:(0,im.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:gr.default.createElement("div",null,r)):null,fr=G(LT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),z(be)).default});n();var fo=T(require("react")),sm=require("@fortawesome/free-solid-svg-icons"),cm=require("@fortawesome/react-fontawesome"),Uo=T(require("classnames"));var ET=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?fo.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeader,r)},t):fo.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeader,r)},fo.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeaderText,p)},o),fo.default.createElement("button",{onClick:m,className:(0,Uo.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},fo.default.createElement(cm.FontAwesomeIcon,{size:"lg",icon:sm.faTimes}))):null,hr=G(ET,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),z(be)).default});var CT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},NT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=CT,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:h})=>{let[b,S]=(0,pm.useState)(!1);if((0,mm.useEffect)(()=>{S(!0)},[]),!l)return null;let{showHeader:P,showFooter:R,headerText:Z,footerText:ve,modalDialogClassName:Wo="dapp-modal-dialog",modalContentClassName:jn="dapp-modal-dialog-content",modalHeaderClassName:Kn="dapp-modal-dialog-header",modalHeaderTextClassName:Xn="dapp-modal-dialog-header-text",modalCloseButtonClassName:oe="dapp-modal-dialog-close-button",modalBodyClassName:Am="dapp-modal-dialog-content-body",modalFooterClassName:Lm="dapp-modal-dialog-footer",customModalHeader:Em,customModalFooter:Pm}=c,Cm=Nm=>{Nm.key==="Escape"&&r&&(m==null||m())};return Ee.default.createElement(Ee.default.Fragment,null,b&&(0,dm.createPortal)(Ee.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Tr.default)(Wo,h==null?void 0:h.dappModal,t),"data-testid":e,onKeyDown:Cm},Ee.default.createElement("div",{className:(0,Tr.default)(h==null?void 0:h.dappModalContent,jn)},Ee.default.createElement(hr,{visible:P,headerText:Z,customHeader:Em,className:Kn,headerTextClassName:Xn,closeButtonClassName:oe,onHide:m}),Ee.default.createElement(ur,{className:Am},o),Ee.default.createElement(fr,{visible:R,customFooter:Pm,footerText:ve,className:Lm}))),_!=null?_:document==null?void 0:document.body))},DT=G(NT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),z(be)).default});n();n();var lm=require("react");n();n();var _m=require("react"),OT=require("@multiversx/sdk-hw-provider");se();N();A();L();he();n();var MT=require("react");n();n();var yr=require("react");N();A();L();he();U();n();var BT=require("react"),UT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");se();N();L();he();V();V();n();var WT=require("react"),GT=require("@multiversx/sdk-passkey-provider/out");se();N();L();he();V();V();n();n();var um=require("react");n();var $T=require("react");n();var xr=require("react"),VT=require("socket.io-client");A();n();n();n();var zT=require("react");O();n();n();n();var jT=T(require("swr"));n();n();n();n();var qT=T(require("axios"));n();var XT=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,F.useState)(0),[_,l]=(0,F.useState)(!1),h=(0,F.useRef)(document==null?void 0:document.createElement("span")),b=(0,F.useRef)(document==null?void 0:document.createElement("span")),S=Zp(p,300),P=()=>{if(h.current&&b.current){let ve=b.current.offsetWidth-h.current.offsetWidth;l(ve>1)}},R=()=>{m(p+1)};return(0,F.useEffect)(()=>(window==null||window.addEventListener("resize",R),()=>{window==null||window.removeEventListener("resize",R)})),(0,F.useEffect)(()=>{P()},[S]),F.default.createElement("span",{ref:h,className:(0,hm.default)(c==null?void 0:c.trim,r,o,{overflow:_}),"data-testid":t},F.default.createElement("span",{ref:b,className:c==null?void 0:c.hiddenTextRef},e),_?F.default.createElement(F.default.Fragment,null,F.default.createElement("span",{className:c==null?void 0:c.left},F.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),F.default.createElement("span",{className:c==null?void 0:c.ellipsis},Pa),F.default.createElement("span",{className:c==null?void 0:c.right},F.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):F.default.createElement("span",null,e))},Tm=G(XT,{ssrStyles:()=>Promise.resolve().then(()=>(Sr(),br)),clientStyles:()=>(Sr(),z(br)).default});n();H();U();var ym=()=>{var r;let{hash:e}=E();return(r=e.split("/")[2])!=null?r:"raw"};n();n();var we=T(require("react")),bm=require("@fortawesome/free-solid-svg-icons"),Sm=require("@fortawesome/react-fontawesome"),wm=T(require("classnames"));v();H();var JT=e=>{let{className:o,value:t,styles:r}=e,{displayValue:c,validationWarnings:p,setActiveKey:m,decodeOptions:_}=xs(e),l=t&&t!==Ea,h=b=>b?m(b.target.value):"raw";return we.default.createElement("div",{className:r==null?void 0:r.decode},we.default.createElement("div",{className:(0,wm.default)(r==null?void 0:r.textarea,o)},c),l&&we.default.createElement("div",{className:r==null?void 0:r.select},we.default.createElement("select",{className:r==null?void 0:r.dropdown,onChange:h},_.map(b=>we.default.createElement("option",{key:b.value,value:b.value},b.label)))),p.map((b,S)=>we.default.createElement("div",{key:S,className:r==null?void 0:r.warnings},we.default.createElement(Sm.FontAwesomeIcon,{icon:bm.faExclamationTriangle,className:r==null?void 0:r.icon,size:"xs"}),we.default.createElement("small",{className:r==null?void 0:r.warning},b))))},Ir=G(JT,{ssrStyles:()=>Promise.resolve().then(()=>(vr(),wr)),clientStyles:()=>(vr(),z(wr)).default});var QT=({topics:e,identifier:o})=>{let t=e.filter(r=>r).join(`
`);return D.default.createElement(Ir,{value:t,identifier:o})},zn=({label:e,children:o,globalStyles:t,styles:r})=>D.default.createElement("div",{className:(0,qn.default)(t==null?void 0:t.row,r==null?void 0:r.row)},D.default.createElement("div",{className:(0,qn.default)(t==null?void 0:t.colSm2,r==null?void 0:r.label)},e),D.default.createElement("div",{className:(0,qn.default)(t==null?void 0:t.colSm10,r==null?void 0:r.data)},o)),ey=({events:e,id:o,globalStyles:t,styles:r})=>{let c=(0,D.useRef)(null),p=ym();return(0,D.useEffect)(()=>{c.current&&c.current!==null&&(window==null||window.scrollTo({top:c.current.getBoundingClientRect().top-70,behavior:"smooth"}))},[]),D.default.createElement("div",{className:r==null?void 0:r.events},e.map((m,_)=>{let l=us(m),h=gs(m,o);return D.default.createElement("div",u({key:_,className:r==null?void 0:r.event},h?{ref:c}:{}),D.default.createElement("div",{className:r==null?void 0:r.icon},D.default.createElement(km.FontAwesomeIcon,{icon:Im.faExchange})),D.default.createElement("div",{className:r==null?void 0:r.content},m.address!=null&&D.default.createElement(zn,{label:"Hash",globalStyles:t,styles:r},D.default.createElement(Tm,{text:m.address,className:r==null?void 0:r.hash}),D.default.createElement(ia,{text:m.address,className:r==null?void 0:r.copy})),m.identifier!=null&&D.default.createElement(zn,{label:"Identifier",globalStyles:t,styles:r},m.identifier),m.topics!=null&&m.topics.length>0&&D.default.createElement(zn,{label:"Topics",globalStyles:t,styles:r},D.default.createElement(QT,{topics:m.topics,identifier:m.identifier})),m.data!=null&&D.default.createElement(zn,{label:"Data",globalStyles:t,styles:r},D.default.createElement(Ir,u({value:l},h?{initialDecodeMethod:p}:{})))))}))},oy=G(ey,{ssrStyles:()=>Promise.resolve().then(()=>(Ar(),kr)),clientStyles:()=>(Ar(),z(kr)).default});0&&(module.exports={EventsList});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
