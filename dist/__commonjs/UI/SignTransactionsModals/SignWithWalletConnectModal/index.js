"use strict";var Ga=Object.create;var we=Object.defineProperty,Ha=Object.defineProperties,za=Object.getOwnPropertyDescriptor,ja=Object.getOwnPropertyDescriptors,Va=Object.getOwnPropertyNames,An=Object.getOwnPropertySymbols,qa=Object.getPrototypeOf,In=Object.prototype.hasOwnProperty,Xa=Object.prototype.propertyIsEnumerable;var Cn=(o,e,n)=>e in o?we(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,x=(o,e)=>{for(var n in e||(e={}))In.call(e,n)&&Cn(o,n,e[n]);if(An)for(var n of An(e))Xa.call(e,n)&&Cn(o,n,e[n]);return o},N=(o,e)=>Ha(o,ja(e));var u=(o,e)=>()=>(o&&(e=o(o=0)),e);var Be=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),W=(o,e)=>{for(var n in e)we(o,n,{get:e[n],enumerable:!0})},Ln=(o,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Va(e))!In.call(o,r)&&r!==n&&we(o,r,{get:()=>e[r],enumerable:!(t=za(e,r))||t.enumerable});return o};var y=(o,e,n)=>(n=o!=null?Ga(qa(o)):{},Ln(e||!o||!o.__esModule?we(n,"default",{value:o,enumerable:!0}):n,o)),R=o=>Ln(we({},"__esModule",{value:!0}),o);var C=(o,e,n)=>new Promise((t,r)=>{var i=s=>{try{l(n.next(s))}catch(g){r(g)}},p=s=>{try{l(n.throw(s))}catch(g){r(g)}},l=s=>s.done?t(s.value):Promise.resolve(s.value).then(i,p);l((n=n.apply(o,e)).next())});var Rn=Be(We=>{"use strict";a();We.byteLength=$a;We.toByteArray=Ja;We.fromByteArray=ei;var O=[],P=[],Ka=typeof Uint8Array!="undefined"?Uint8Array:Array,To="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ne=0,En=To.length;ne<En;++ne)O[ne]=To[ne],P[To.charCodeAt(ne)]=ne;var ne,En;P["-".charCodeAt(0)]=62;P["_".charCodeAt(0)]=63;function Nn(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=o.indexOf("=");n===-1&&(n=e);var t=n===e?0:4-n%4;return[n,t]}function $a(o){var e=Nn(o),n=e[0],t=e[1];return(n+t)*3/4-t}function Ya(o,e,n){return(e+n)*3/4-n}function Ja(o){var e,n=Nn(o),t=n[0],r=n[1],i=new Ka(Ya(o,t,r)),p=0,l=r>0?t-4:t,s;for(s=0;s<l;s+=4)e=P[o.charCodeAt(s)]<<18|P[o.charCodeAt(s+1)]<<12|P[o.charCodeAt(s+2)]<<6|P[o.charCodeAt(s+3)],i[p++]=e>>16&255,i[p++]=e>>8&255,i[p++]=e&255;return r===2&&(e=P[o.charCodeAt(s)]<<2|P[o.charCodeAt(s+1)]>>4,i[p++]=e&255),r===1&&(e=P[o.charCodeAt(s)]<<10|P[o.charCodeAt(s+1)]<<4|P[o.charCodeAt(s+2)]>>2,i[p++]=e>>8&255,i[p++]=e&255),i}function Za(o){return O[o>>18&63]+O[o>>12&63]+O[o>>6&63]+O[o&63]}function Qa(o,e,n){for(var t,r=[],i=e;i<n;i+=3)t=(o[i]<<16&16711680)+(o[i+1]<<8&65280)+(o[i+2]&255),r.push(Za(t));return r.join("")}function ei(o){for(var e,n=o.length,t=n%3,r=[],i=16383,p=0,l=n-t;p<l;p+=i)r.push(Qa(o,p,p+i>l?l:p+i));return t===1?(e=o[n-1],r.push(O[e>>2]+O[e<<4&63]+"==")):t===2&&(e=(o[n-2]<<8)+o[n-1],r.push(O[e>>10]+O[e>>4&63]+O[e<<2&63]+"=")),r.join("")}});var Pn=Be(vo=>{a();vo.read=function(o,e,n,t,r){var i,p,l=r*8-t-1,s=(1<<l)-1,g=s>>1,h=-7,f=n?r-1:0,w=n?-1:1,b=o[e+f];for(f+=w,i=b&(1<<-h)-1,b>>=-h,h+=l;h>0;i=i*256+o[e+f],f+=w,h-=8);for(p=i&(1<<-h)-1,i>>=-h,h+=t;h>0;p=p*256+o[e+f],f+=w,h-=8);if(i===0)i=1-g;else{if(i===s)return p?NaN:(b?-1:1)*(1/0);p=p+Math.pow(2,t),i=i-g}return(b?-1:1)*p*Math.pow(2,i-t)};vo.write=function(o,e,n,t,r,i){var p,l,s,g=i*8-r-1,h=(1<<g)-1,f=h>>1,w=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=t?0:i-1,A=t?1:-1,Y=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,p=h):(p=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-p))<1&&(p--,s*=2),p+f>=1?e+=w/s:e+=w*Math.pow(2,1-f),e*s>=2&&(p++,s/=2),p+f>=h?(l=0,p=h):p+f>=1?(l=(e*s-1)*Math.pow(2,r),p=p+f):(l=e*Math.pow(2,f-1)*Math.pow(2,r),p=0));r>=8;o[n+b]=l&255,b+=A,l/=256,r-=8);for(p=p<<r|l,g+=r;g>0;o[n+b]=p&255,b+=A,p/=256,g-=8);o[n+b-A]|=Y*128}});var qn=Be(se=>{"use strict";a();var So=Rn(),de=Pn(),Mn=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;se.Buffer=c;se.SlowBuffer=ii;se.INSPECT_MAX_BYTES=50;var De=2147483647;se.kMaxLength=De;c.TYPED_ARRAY_SUPPORT=oi();!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function oi(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(n){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.buffer}});Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.byteOffset}});function j(o){if(o>De)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,c.prototype),e}function c(o,e,n){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Io(o)}return Dn(o,e,n)}c.poolSize=8192;function Dn(o,e,n){if(typeof o=="string")return ti(o,e);if(ArrayBuffer.isView(o))return ri(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(U(o,ArrayBuffer)||o&&U(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(U(o,SharedArrayBuffer)||o&&U(o.buffer,SharedArrayBuffer)))return Ao(o,e,n);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=o.valueOf&&o.valueOf();if(t!=null&&t!==o)return c.from(t,e,n);var r=ai(o);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return c.from(o[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}c.from=function(o,e,n){return Dn(o,e,n)};Object.setPrototypeOf(c.prototype,Uint8Array.prototype);Object.setPrototypeOf(c,Uint8Array);function Fn(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function ni(o,e,n){return Fn(o),o<=0?j(o):e!==void 0?typeof n=="string"?j(o).fill(e,n):j(o).fill(e):j(o)}c.alloc=function(o,e,n){return ni(o,e,n)};function Io(o){return Fn(o),j(o<0?0:Lo(o)|0)}c.allocUnsafe=function(o){return Io(o)};c.allocUnsafeSlow=function(o){return Io(o)};function ti(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!c.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=On(o,e)|0,t=j(n),r=t.write(o,e);return r!==n&&(t=t.slice(0,r)),t}function ko(o){for(var e=o.length<0?0:Lo(o.length)|0,n=j(e),t=0;t<e;t+=1)n[t]=o[t]&255;return n}function ri(o){if(U(o,Uint8Array)){var e=new Uint8Array(o);return Ao(e.buffer,e.byteOffset,e.byteLength)}return ko(o)}function Ao(o,e,n){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var t;return e===void 0&&n===void 0?t=new Uint8Array(o):n===void 0?t=new Uint8Array(o,e):t=new Uint8Array(o,e,n),Object.setPrototypeOf(t,c.prototype),t}function ai(o){if(c.isBuffer(o)){var e=Lo(o.length)|0,n=j(e);return n.length===0||o.copy(n,0,0,e),n}if(o.length!==void 0)return typeof o.length!="number"||Eo(o.length)?j(0):ko(o);if(o.type==="Buffer"&&Array.isArray(o.data))return ko(o.data)}function Lo(o){if(o>=De)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+De.toString(16)+" bytes");return o|0}function ii(o){return+o!=o&&(o=0),c.alloc(+o)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype};c.compare=function(e,n){if(U(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),U(n,Uint8Array)&&(n=c.from(n,n.offset,n.byteLength)),!c.isBuffer(e)||!c.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;for(var t=e.length,r=n.length,i=0,p=Math.min(t,r);i<p;++i)if(e[i]!==n[i]){t=e[i],r=n[i];break}return t<r?-1:r<t?1:0};c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};c.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<e.length;++t)n+=e[t].length;var r=c.allocUnsafe(n),i=0;for(t=0;t<e.length;++t){var p=e[t];if(U(p,Uint8Array))i+p.length>r.length?c.from(p).copy(r,i):Uint8Array.prototype.set.call(r,p,i);else if(c.isBuffer(p))p.copy(r,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return r};function On(o,e){if(c.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||U(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var n=o.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&n===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Co(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Vn(o).length;default:if(r)return t?-1:Co(o).length;e=(""+e).toLowerCase(),r=!0}}c.byteLength=On;function pi(o,e,n){var t=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return hi(this,e,n);case"utf8":case"utf-8":return Gn(this,e,n);case"ascii":return ui(this,e,n);case"latin1":case"binary":return fi(this,e,n);case"base64":return li(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xi(this,e,n);default:if(t)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),t=!0}}c.prototype._isBuffer=!0;function te(o,e,n){var t=o[e];o[e]=o[n],o[n]=t}c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<e;n+=2)te(this,n,n+1);return this};c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<e;n+=4)te(this,n,n+3),te(this,n+1,n+2);return this};c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<e;n+=8)te(this,n,n+7),te(this,n+1,n+6),te(this,n+2,n+5),te(this,n+3,n+4);return this};c.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Gn(this,0,e):pi.apply(this,arguments)};c.prototype.toLocaleString=c.prototype.toString;c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0};c.prototype.inspect=function(){var e="",n=se.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};Mn&&(c.prototype[Mn]=c.prototype.inspect);c.prototype.compare=function(e,n,t,r,i){if(U(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),i===void 0&&(i=this.length),n<0||t>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&n>=t)return 0;if(r>=i)return-1;if(n>=t)return 1;if(n>>>=0,t>>>=0,r>>>=0,i>>>=0,this===e)return 0;for(var p=i-r,l=t-n,s=Math.min(p,l),g=this.slice(r,i),h=e.slice(n,t),f=0;f<s;++f)if(g[f]!==h[f]){p=g[f],l=h[f];break}return p<l?-1:l<p?1:0};function Un(o,e,n,t,r){if(o.length===0)return-1;if(typeof n=="string"?(t=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Eo(n)&&(n=r?0:o.length-1),n<0&&(n=o.length+n),n>=o.length){if(r)return-1;n=o.length-1}else if(n<0)if(r)n=0;else return-1;if(typeof e=="string"&&(e=c.from(e,t)),c.isBuffer(e))return e.length===0?-1:Bn(o,e,n,t,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(o,e,n):Uint8Array.prototype.lastIndexOf.call(o,e,n):Bn(o,[e],n,t,r);throw new TypeError("val must be string, number or Buffer")}function Bn(o,e,n,t,r){var i=1,p=o.length,l=e.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(o.length<2||e.length<2)return-1;i=2,p/=2,l/=2,n/=2}function s(b,A){return i===1?b[A]:b.readUInt16BE(A*i)}var g;if(r){var h=-1;for(g=n;g<p;g++)if(s(o,g)===s(e,h===-1?0:g-h)){if(h===-1&&(h=g),g-h+1===l)return h*i}else h!==-1&&(g-=g-h),h=-1}else for(n+l>p&&(n=p-l),g=n;g>=0;g--){for(var f=!0,w=0;w<l;w++)if(s(o,g+w)!==s(e,w)){f=!1;break}if(f)return g}return-1}c.prototype.includes=function(e,n,t){return this.indexOf(e,n,t)!==-1};c.prototype.indexOf=function(e,n,t){return Un(this,e,n,t,!0)};c.prototype.lastIndexOf=function(e,n,t){return Un(this,e,n,t,!1)};function ci(o,e,n,t){n=Number(n)||0;var r=o.length-n;t?(t=Number(t),t>r&&(t=r)):t=r;var i=e.length;t>i/2&&(t=i/2);for(var p=0;p<t;++p){var l=parseInt(e.substr(p*2,2),16);if(Eo(l))return p;o[n+p]=l}return p}function _i(o,e,n,t){return Fe(Co(e,o.length-n),o,n,t)}function mi(o,e,n,t){return Fe(wi(e),o,n,t)}function di(o,e,n,t){return Fe(Vn(e),o,n,t)}function si(o,e,n,t){return Fe(Ti(e,o.length-n),o,n,t)}c.prototype.write=function(e,n,t,r){if(n===void 0)r="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")r=n,t=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-n;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return ci(this,e,n,t);case"utf8":case"utf-8":return _i(this,e,n,t);case"ascii":case"latin1":case"binary":return mi(this,e,n,t);case"base64":return di(this,e,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return si(this,e,n,t);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}};c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function li(o,e,n){return e===0&&n===o.length?So.fromByteArray(o):So.fromByteArray(o.slice(e,n))}function Gn(o,e,n){n=Math.min(o.length,n);for(var t=[],r=e;r<n;){var i=o[r],p=null,l=i>239?4:i>223?3:i>191?2:1;if(r+l<=n){var s,g,h,f;switch(l){case 1:i<128&&(p=i);break;case 2:s=o[r+1],(s&192)===128&&(f=(i&31)<<6|s&63,f>127&&(p=f));break;case 3:s=o[r+1],g=o[r+2],(s&192)===128&&(g&192)===128&&(f=(i&15)<<12|(s&63)<<6|g&63,f>2047&&(f<55296||f>57343)&&(p=f));break;case 4:s=o[r+1],g=o[r+2],h=o[r+3],(s&192)===128&&(g&192)===128&&(h&192)===128&&(f=(i&15)<<18|(s&63)<<12|(g&63)<<6|h&63,f>65535&&f<1114112&&(p=f))}}p===null?(p=65533,l=1):p>65535&&(p-=65536,t.push(p>>>10&1023|55296),p=56320|p&1023),t.push(p),r+=l}return gi(t)}var Wn=4096;function gi(o){var e=o.length;if(e<=Wn)return String.fromCharCode.apply(String,o);for(var n="",t=0;t<e;)n+=String.fromCharCode.apply(String,o.slice(t,t+=Wn));return n}function ui(o,e,n){var t="";n=Math.min(o.length,n);for(var r=e;r<n;++r)t+=String.fromCharCode(o[r]&127);return t}function fi(o,e,n){var t="";n=Math.min(o.length,n);for(var r=e;r<n;++r)t+=String.fromCharCode(o[r]);return t}function hi(o,e,n){var t=o.length;(!e||e<0)&&(e=0),(!n||n<0||n>t)&&(n=t);for(var r="",i=e;i<n;++i)r+=vi[o[i]];return r}function xi(o,e,n){for(var t=o.slice(e,n),r="",i=0;i<t.length-1;i+=2)r+=String.fromCharCode(t[i]+t[i+1]*256);return r}c.prototype.slice=function(e,n){var t=this.length;e=~~e,n=n===void 0?t:~~n,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),n<0?(n+=t,n<0&&(n=0)):n>t&&(n=t),n<e&&(n=e);var r=this.subarray(e,n);return Object.setPrototypeOf(r,c.prototype),r};function S(o,e,n){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>n)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,n,t){e=e>>>0,n=n>>>0,t||S(e,n,this.length);for(var r=this[e],i=1,p=0;++p<n&&(i*=256);)r+=this[e+p]*i;return r};c.prototype.readUintBE=c.prototype.readUIntBE=function(e,n,t){e=e>>>0,n=n>>>0,t||S(e,n,this.length);for(var r=this[e+--n],i=1;n>0&&(i*=256);)r+=this[e+--n]*i;return r};c.prototype.readUint8=c.prototype.readUInt8=function(e,n){return e=e>>>0,n||S(e,1,this.length),this[e]};c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||S(e,2,this.length),this[e]|this[e+1]<<8};c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||S(e,2,this.length),this[e]<<8|this[e+1]};c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||S(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||S(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};c.prototype.readIntLE=function(e,n,t){e=e>>>0,n=n>>>0,t||S(e,n,this.length);for(var r=this[e],i=1,p=0;++p<n&&(i*=256);)r+=this[e+p]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*n)),r};c.prototype.readIntBE=function(e,n,t){e=e>>>0,n=n>>>0,t||S(e,n,this.length);for(var r=n,i=1,p=this[e+--r];r>0&&(i*=256);)p+=this[e+--r]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*n)),p};c.prototype.readInt8=function(e,n){return e=e>>>0,n||S(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};c.prototype.readInt16LE=function(e,n){e=e>>>0,n||S(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t};c.prototype.readInt16BE=function(e,n){e=e>>>0,n||S(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t};c.prototype.readInt32LE=function(e,n){return e=e>>>0,n||S(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};c.prototype.readInt32BE=function(e,n){return e=e>>>0,n||S(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};c.prototype.readFloatLE=function(e,n){return e=e>>>0,n||S(e,4,this.length),de.read(this,e,!0,23,4)};c.prototype.readFloatBE=function(e,n){return e=e>>>0,n||S(e,4,this.length),de.read(this,e,!1,23,4)};c.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||S(e,8,this.length),de.read(this,e,!0,52,8)};c.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||S(e,8,this.length),de.read(this,e,!1,52,8)};function I(o,e,n,t,r,i){if(!c.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<i)throw new RangeError('"value" argument is out of bounds');if(n+t>o.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,n,t,r){if(e=+e,n=n>>>0,t=t>>>0,!r){var i=Math.pow(2,8*t)-1;I(this,e,n,t,i,0)}var p=1,l=0;for(this[n]=e&255;++l<t&&(p*=256);)this[n+l]=e/p&255;return n+t};c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,n,t,r){if(e=+e,n=n>>>0,t=t>>>0,!r){var i=Math.pow(2,8*t)-1;I(this,e,n,t,i,0)}var p=t-1,l=1;for(this[n+p]=e&255;--p>=0&&(l*=256);)this[n+p]=e/l&255;return n+t};c.prototype.writeUint8=c.prototype.writeUInt8=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,1,255,0),this[n]=e&255,n+1};c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};c.prototype.writeIntLE=function(e,n,t,r){if(e=+e,n=n>>>0,!r){var i=Math.pow(2,8*t-1);I(this,e,n,t,i-1,-i)}var p=0,l=1,s=0;for(this[n]=e&255;++p<t&&(l*=256);)e<0&&s===0&&this[n+p-1]!==0&&(s=1),this[n+p]=(e/l>>0)-s&255;return n+t};c.prototype.writeIntBE=function(e,n,t,r){if(e=+e,n=n>>>0,!r){var i=Math.pow(2,8*t-1);I(this,e,n,t,i-1,-i)}var p=t-1,l=1,s=0;for(this[n+p]=e&255;--p>=0&&(l*=256);)e<0&&s===0&&this[n+p+1]!==0&&(s=1),this[n+p]=(e/l>>0)-s&255;return n+t};c.prototype.writeInt8=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};c.prototype.writeInt16LE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};c.prototype.writeInt16BE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};c.prototype.writeInt32LE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};c.prototype.writeInt32BE=function(e,n,t){return e=+e,n=n>>>0,t||I(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function Hn(o,e,n,t,r,i){if(n+t>o.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function zn(o,e,n,t,r){return e=+e,n=n>>>0,r||Hn(o,e,n,4,34028234663852886e22,-34028234663852886e22),de.write(o,e,n,t,23,4),n+4}c.prototype.writeFloatLE=function(e,n,t){return zn(this,e,n,!0,t)};c.prototype.writeFloatBE=function(e,n,t){return zn(this,e,n,!1,t)};function jn(o,e,n,t,r){return e=+e,n=n>>>0,r||Hn(o,e,n,8,17976931348623157e292,-17976931348623157e292),de.write(o,e,n,t,52,8),n+8}c.prototype.writeDoubleLE=function(e,n,t){return jn(this,e,n,!0,t)};c.prototype.writeDoubleBE=function(e,n,t){return jn(this,e,n,!1,t)};c.prototype.copy=function(e,n,t,r){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),n>=e.length&&(n=e.length),n||(n=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-n<r-t&&(r=e.length-n+t);var i=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),n),i};c.prototype.fill=function(e,n,t,r){if(typeof e=="string"){if(typeof n=="string"?(r=n,n=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var i=e.charCodeAt(0);(r==="utf8"&&i<128||r==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;n=n>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=n;p<t;++p)this[p]=e;else{var l=c.isBuffer(e)?e:c.from(e,r),s=l.length;if(s===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-n;++p)this[p+n]=l[p%s]}return this};var yi=/[^+/0-9A-Za-z-_]/g;function bi(o){if(o=o.split("=")[0],o=o.trim().replace(yi,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function Co(o,e){e=e||1/0;for(var n,t=o.length,r=null,i=[],p=0;p<t;++p){if(n=o.charCodeAt(p),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(p+1===t){(e-=3)>-1&&i.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),r=n;continue}n=(r-55296<<10|n-56320)+65536}else r&&(e-=3)>-1&&i.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return i}function wi(o){for(var e=[],n=0;n<o.length;++n)e.push(o.charCodeAt(n)&255);return e}function Ti(o,e){for(var n,t,r,i=[],p=0;p<o.length&&!((e-=2)<0);++p)n=o.charCodeAt(p),t=n>>8,r=n%256,i.push(r),i.push(t);return i}function Vn(o){return So.toByteArray(bi(o))}function Fe(o,e,n,t){for(var r=0;r<t&&!(r+n>=e.length||r>=o.length);++r)e[r+n]=o[r];return r}function U(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Eo(o){return o!==o}var vi=function(){for(var o="0123456789abcdef",e=new Array(256),n=0;n<16;++n)for(var t=n*16,r=0;r<16;++r)e[t+r]=o[n]+o[r];return e}()});var Jn=Be((Kp,Yn)=>{a();var T=Yn.exports={},G,H;function No(){throw new Error("setTimeout has not been defined")}function Ro(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?G=setTimeout:G=No}catch(o){G=No}try{typeof clearTimeout=="function"?H=clearTimeout:H=Ro}catch(o){H=Ro}})();function Xn(o){if(G===setTimeout)return setTimeout(o,0);if((G===No||!G)&&setTimeout)return G=setTimeout,setTimeout(o,0);try{return G(o,0)}catch(e){try{return G.call(null,o,0)}catch(n){return G.call(this,o,0)}}}function Si(o){if(H===clearTimeout)return clearTimeout(o);if((H===Ro||!H)&&clearTimeout)return H=clearTimeout,clearTimeout(o);try{return H(o)}catch(e){try{return H.call(null,o)}catch(n){return H.call(this,o)}}}var V=[],le=!1,re,Oe=-1;function ki(){!le||!re||(le=!1,re.length?V=re.concat(V):Oe=-1,V.length&&Kn())}function Kn(){if(!le){var o=Xn(ki);le=!0;for(var e=V.length;e;){for(re=V,V=[];++Oe<e;)re&&re[Oe].run();Oe=-1,e=V.length}re=null,le=!1,Si(o)}}T.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];V.push(new $n(o,e)),V.length===1&&!le&&Xn(Kn)};function $n(o,e){this.fun=o,this.array=e}$n.prototype.run=function(){this.fun.apply(null,this.array)};T.title="browser";T.browser=!0;T.env={};T.argv=[];T.version="";T.versions={};function q(){}T.on=q;T.addListener=q;T.once=q;T.off=q;T.removeListener=q;T.removeAllListeners=q;T.emit=q;T.prependListener=q;T.prependOnceListener=q;T.listeners=function(o){return[]};T.binding=function(o){throw new Error("process.binding is not supported")};T.cwd=function(){return"/"};T.chdir=function(o){throw new Error("process.chdir is not supported")};T.umask=function(){return 0}});var _,m,$p,a=u(()=>{_=y(qn()),m=y(Jn()),$p=function(o){function e(){var t=this||self;return delete o.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var n=__magic__;return n}(Object)});var Zn=u(()=>{"use strict";a()});var Qn,Po=u(()=>{"use strict";a();Qn="Transaction canceled"});var et=u(()=>{"use strict";a()});var ot=u(()=>{"use strict";a()});var nt=u(()=>{"use strict";a()});var Mo=u(()=>{"use strict";a()});var tt=u(()=>{"use strict";a()});var rt=u(()=>{"use strict";a()});var at=u(()=>{"use strict";a()});var it=u(()=>{"use strict";a()});var Bo,ge,Wo=u(()=>{"use strict";a();Bo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),ge=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var pt,pc,ct,cc,J=u(()=>{"use strict";a();Wo();pt=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(pt||{}),pc=x(x({},ge.WindowProviderRequestEnums),pt),ct=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(ct||{}),cc=x(x({},ge.WindowProviderResponseEnums),ct)});var _t=u(()=>{"use strict";a()});var mt=u(()=>{"use strict";a()});var dt=u(()=>{"use strict";a()});var st=u(()=>{"use strict";a()});var lt=u(()=>{"use strict";a()});var gt=u(()=>{"use strict";a()});var Te=u(()=>{"use strict";a();rt();at();it();J();_t();mt();dt();st();lt();gt()});var Do,ut,kc,ft,Ac,ht,Cc,Ic,Lc,xt=u(()=>{"use strict";a();Te();Do={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ut,egldLabel:kc}=Do["devnet"],{chainId:ft,egldLabel:Ac}=Do["testnet"],{chainId:ht,egldLabel:Cc}=Do["mainnet"],Ic={["devnet"]:ut,["testnet"]:ft,["mainnet"]:ht},Lc={[ut]:"devnet",[ft]:"testnet",[ht]:"mainnet"}});var Fo=u(()=>{"use strict";a()});var z,yt=u(()=>{"use strict";a();z=require("@multiversx/sdk-web-wallet-provider")});var Ue,Oo=u(()=>{"use strict";a();Ue=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var bt,wt,Uo,Bc,Wc,Tt=u(()=>{"use strict";a();Oo();Uo=String((wt=(bt=Ue.safeWindow)==null?void 0:bt.navigator)==null?void 0:wt.userAgent),Bc=/^((?!chrome|android).)*safari/i.test(Uo),Wc=/firefox/i.test(Uo)&&/windows/i.test(Uo)});var Ge,vt,St,kt,ae=u(()=>{"use strict";a();Zn();Po();et();ot();nt();Mo();tt();xt();Fo();yt();Tt();Ge="logout",vt="login",St="cancelSignTx",kt="0"});var Go,Ho=u(()=>{"use strict";a();Go=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var zo={};W(zo,{css:()=>Ct,default:()=>Ai});var Ct,Ai,jo=u(()=>{"use strict";a();Ct=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ct));Ai={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ze,Ko=u(()=>{"use strict";a();ze=()=>Date.now()/1e3});var Ft=u(()=>{"use strict";a()});var Ot=u(()=>{"use strict";a()});var Ut=u(()=>{"use strict";a();Ko();Ft();Ot()});var $o={};W($o,{clear:()=>Mi,getItem:()=>Ri,localStorageKeys:()=>ie,removeItem:()=>Pi,setItem:()=>Ni});var ie,je,Ni,Ri,Pi,Mi,ke=u(()=>{"use strict";a();Ut();ie={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},je=typeof localStorage!="undefined",Ni=({key:o,data:e,expires:n})=>{!je||localStorage.setItem(String(o),JSON.stringify({expires:n,data:e}))},Ri=o=>{if(!je)return;let e=localStorage.getItem(String(o));if(!e)return null;let n=JSON.parse(e);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:ze()>=n.expires?(localStorage.removeItem(String(o)),null):n.data},Pi=o=>{!je||localStorage.removeItem(String(o))},Mi=()=>{!je||localStorage.clear()}});var Yo={};W(Yo,{clear:()=>jt,getItem:()=>Ht,removeItem:()=>zt,setItem:()=>Gt,storage:()=>Bi});var Gt,Ht,zt,jt,Bi,Vt=u(()=>{"use strict";a();Gt=({key:o,data:e,expires:n})=>{sessionStorage.setItem(String(o),JSON.stringify({expires:n,data:e}))},Ht=o=>{let e=sessionStorage.getItem(String(o));if(!e)return null;let n=JSON.parse(e);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(o)),null):n.data},zt=o=>sessionStorage.removeItem(String(o)),jt=()=>sessionStorage.clear(),Bi={setItem:Gt,getItem:Ht,removeItem:zt,clear:jt}});var he,Ve=u(()=>{"use strict";a();ke();Vt();he={session:Yo,local:$o}});var Jo,v,qe,F=u(()=>{"use strict";a();Jo=require("@reduxjs/toolkit");ae();v=(0,Jo.createAction)(Ge),qe=(0,Jo.createAction)(vt,o=>({payload:o}))});var Qo,qt,Xt,Kt,Zo,$t,Yt,U_,Jt,G_,H_,z_,j_,V_,q_,X_,K_,Xe,Ke=u(()=>{"use strict";a();Qo=require("@multiversx/sdk-core"),qt=require("@reduxjs/toolkit"),Xt=require("redux-persist");ae();Ve();ke();F();Kt={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:kt},Zo={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Kt},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},$t=(0,qt.createSlice)({name:"accountInfoSlice",initialState:Zo,reducers:{setAddress:(o,e)=>{let n=e.payload;o.address=n,o.publicKey=n?new Qo.Address(n).hex():""},setAccount:(o,e)=>{let n=o.address===e.payload.address;o.accounts={[o.address]:n?e.payload:Kt},o.shard=e.payload.shard,o.isAccountLoading=!1,o.accountLoadingError=null},setAccountNonce:(o,e)=>{let{address:n}=o;o.accounts[n].nonce=e.payload},setAccountShard:(o,e)=>{o.shard=e.payload},setLedgerAccount:(o,e)=>{o.ledgerAccount=e.payload},updateLedgerAccount:(o,e)=>{o.ledgerAccount!=null&&(o.ledgerAccount.index=e.payload.index,o.ledgerAccount.address=e.payload.address)},setWalletConnectAccount:(o,e)=>{o.walletConnectAccount=e.payload},setIsAccountLoading:(o,e)=>{o.isAccountLoading=e.payload,o.accountLoadingError=null},setAccountLoadingError:(o,e)=>{o.accountLoadingError=e.payload,o.isAccountLoading=!1},setWebsocketEvent:(o,e)=>{o.websocketEvent={timestamp:Date.now(),message:e.payload}},setWebsocketBatchEvent:(o,e)=>{o.websocketBatchEvent={timestamp:Date.now(),data:e.payload}}},extraReducers:o=>{o.addCase(v,()=>(he.local.removeItem(ie.loginExpiresAt),Zo)),o.addCase(qe,(e,n)=>{let{address:t}=n.payload;e.address=t,e.publicKey=new Qo.Address(t).hex()}),o.addCase(Xt.REHYDRATE,(e,n)=>{var g;if(!((g=n.payload)!=null&&g.account))return;let{account:t}=n.payload,{address:r,shard:i,accounts:p,publicKey:l}=t;e.address=r,e.shard=i;let s=p&&r in p;e.accounts=s?p:Zo.accounts,e.publicKey=l})}}),{setAccount:Yt,setAddress:U_,setAccountNonce:Jt,setAccountShard:G_,setLedgerAccount:H_,updateLedgerAccount:z_,setWalletConnectAccount:j_,setIsAccountLoading:V_,setAccountLoadingError:q_,setWebsocketEvent:X_,setWebsocketBatchEvent:K_}=$t.actions,Xe=$t.reducer});function Ae(){return new Date().setHours(new Date().getHours()+24)}function Ce(o){he.local.setItem({key:ie.loginExpiresAt,data:o,expires:o})}var en=u(()=>{"use strict";a();Ve();ke()});var Qt,Zt,er,rm,am,im,pm,cm,_m,or,mm,dm,sm,$e,Ye=u(()=>{"use strict";a();Qt=require("@reduxjs/toolkit");en();J();F();Zt={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},er=(0,Qt.createSlice)({name:"loginInfoSlice",initialState:Zt,reducers:{setLoginMethod:(o,e)=>{o.loginMethod=e.payload},setTokenLogin:(o,e)=>{o.tokenLogin=e.payload},setTokenLoginSignature:(o,e)=>{(o==null?void 0:o.tokenLogin)!=null&&(o.tokenLogin.signature=e.payload)},setWalletLogin:(o,e)=>{o.walletLogin=e.payload},setWalletConnectLogin:(o,e)=>{o.walletConnectLogin=e.payload},setLedgerLogin:(o,e)=>{o.ledgerLogin=e.payload},setWebviewLogin:(o,e)=>{o.webviewLogin=e.payload},invalidateLoginSession:o=>{o.isLoginSessionInvalid=!0},setLogoutRoute:(o,e)=>{o.logoutRoute=e.payload},setIsWalletConnectV2Initialized:(o,e)=>{o.isWalletConnectV2Initialized=e.payload}},extraReducers:o=>{o.addCase(v,()=>Zt),o.addCase(qe,(e,n)=>{e.isLoginSessionInvalid=!1,e.loginMethod=n.payload.loginMethod,e.iframeLoginType=n.payload.iframeLoginType,Ce(Ae())})}}),{setLoginMethod:rm,setWalletConnectLogin:am,setLedgerLogin:im,setTokenLogin:pm,setTokenLoginSignature:cm,setWalletLogin:_m,invalidateLoginSession:or,setLogoutRoute:mm,setIsWalletConnectV2Initialized:dm,setWebviewLogin:sm}=er.actions,$e=er.reducer});var tr,nr,rr,fm,hm,xm,ym,Je,Ze=u(()=>{"use strict";a();tr=require("@reduxjs/toolkit");F();nr={},rr=(0,tr.createSlice)({name:"modalsSlice",initialState:nr,reducers:{setTxSubmittedModal:(o,e)=>{o.txSubmittedModal=e.payload},setNotificationModal:(o,e)=>{o.notificationModal=e.payload},clearTxSubmittedModal:o=>{o.txSubmittedModal=void 0},clearNotificationModal:o=>{o.notificationModal=void 0}},extraReducers:o=>{o.addCase(v,()=>nr)}}),{setTxSubmittedModal:fm,setNotificationModal:hm,clearTxSubmittedModal:xm,clearNotificationModal:ym}=rr.actions,Je=rr.reducer});var on=u(()=>{"use strict";a();Ho()});var ar=u(()=>{"use strict";a();on()});var ir=u(()=>{"use strict";a();nn()});var pr=u(()=>{"use strict";a();Oo()});var nn=u(()=>{"use strict";a();ar();ir();on();pr()});var cr=u(()=>{"use strict";a();nn()});var _r=u(()=>{"use strict";a();cr()});function mr(o){return o[Math.floor(Math.random()*o.length)]}var dr=u(()=>{"use strict";a()});var sr=u(()=>{"use strict";a();Mo()});var lr=u(()=>{"use strict";a();_r();dr();sr()});var gr,ur,fr,tn,Fi,hr,Zm,Qm,ed,Qe,eo=u(()=>{"use strict";a();gr=require("@reduxjs/toolkit"),ur=y(require("lodash.omit")),fr=require("redux-persist");Fo();F();lr();tn={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Fi={network:tn},hr=(0,gr.createSlice)({name:"appConfig",initialState:Fi,reducers:{initializeNetworkConfig:(o,e)=>{let n=mr(e.payload.walletConnectV2RelayAddresses),t=(0,ur.default)(e.payload,"walletConnectV2RelayAddresses");o.network=N(x(x({},o.network),t),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(o,e)=>{o.network=x(x({},o.network),e.payload)},setCustomWalletAddress:(o,e)=>{o.network.customWalletAddress=e.payload}},extraReducers:o=>{o.addCase(v,e=>{e.network.customWalletAddress=void 0}),o.addCase(fr.REHYDRATE,(e,n)=>{var r,i;if(!((i=(r=n.payload)==null?void 0:r.network)!=null&&i.customWalletAddress))return;let{network:{customWalletAddress:t}}=n.payload;e.network.customWalletAddress=t})}}),{initializeNetworkConfig:Zm,updateNetworkConfig:Qm,setCustomWalletAddress:ed}=hr.actions,Qe=hr.reducer});var xr,rn,yr,id,pd,cd,oo,no=u(()=>{"use strict";a();xr=require("@reduxjs/toolkit");Te();F();rn={isSigning:!1,signedSessions:{}},yr=(0,xr.createSlice)({name:"signedMessageInfoSliceState",initialState:rn,reducers:{setSignSession:(o,e)=>{let{sessionId:n,signedSession:t,errorMessage:r}=e.payload;r&&(o.errorMessage=r),o.isSigning=t.status==="pending",o.signedSessions[n]=x(x({},o.signedSessions[n]),t)},setSignSessionState:(o,e)=>x(x({},o),e.payload),clearSignedMessageInfo:()=>rn},extraReducers:o=>{o.addCase(v,()=>rn)}}),{setSignSession:id,clearSignedMessageInfo:pd,setSignSessionState:cd}=yr.actions,oo=yr.reducer});var wr,Tr,br,vr,ud,fd,hd,xd,to,ro=u(()=>{"use strict";a();wr=require("@reduxjs/toolkit"),Tr=require("redux-persist");Te();Ko();F();br={customToasts:[],transactionToasts:[]},vr=(0,wr.createSlice)({name:"toastsSlice",initialState:br,reducers:{addCustomToast:(o,e)=>{let n=e.payload.toastId||`custom-toast-${o.customToasts.length+1}`,t=o.customToasts.findIndex(r=>r.toastId===n);if(t!==-1){o.customToasts[t]=N(x(x({},o.customToasts[t]),e.payload),{type:"custom",toastId:n});return}o.customToasts.push(N(x({},e.payload),{type:"custom",toastId:n}))},removeCustomToast:(o,e)=>{o.customToasts=o.customToasts.filter(n=>n.toastId!==e.payload)},addTransactionToast:(o,e)=>{o.transactionToasts.push({type:"transaction",startTimestamp:ze(),toastId:e.payload||`custom-toast-${o.transactionToasts.length+1}`})},removeTransactionToast:(o,e)=>{o.transactionToasts=o.transactionToasts.filter(n=>n.toastId!==e.payload)}},extraReducers:o=>{o.addCase(v,()=>br),o.addCase(Tr.REHYDRATE,(e,n)=>{var r,i;let t=(i=(r=n.customToasts)==null?void 0:r.filter(p=>!("component"in p)))!=null?i:[];e.customToasts=t})}}),{addCustomToast:ud,removeCustomToast:fd,addTransactionToast:hd,removeTransactionToast:xd}=vr.actions,to=vr.reducer});var Sr,Oi,Ui,Gi,Hi,an,kr,Td,vd,Ar,ao,io=u(()=>{"use strict";a();Sr=require("@reduxjs/toolkit");F();Oi="Transaction failed",Ui="Transaction successful",Gi="Processing transaction",Hi="Transaction submitted",an={},kr=(0,Sr.createSlice)({name:"transactionsInfo",initialState:an,reducers:{setTransactionsDisplayInfo(o,e){let{sessionId:n,transactionsDisplayInfo:t}=e.payload;n!=null&&(o[n]={errorMessage:(t==null?void 0:t.errorMessage)||Oi,successMessage:(t==null?void 0:t.successMessage)||Ui,processingMessage:(t==null?void 0:t.processingMessage)||Gi,submittedMessage:(t==null?void 0:t.submittedMessage)||Hi,transactionDuration:t==null?void 0:t.transactionDuration})},clearTransactionsInfoForSessionId(o,e){e.payload!=null&&delete o[e.payload]},clearTransactionsInfo:()=>an},extraReducers:o=>{o.addCase(v,()=>an)}}),{clearTransactionsInfo:Td,setTransactionsDisplayInfo:vd,clearTransactionsInfoForSessionId:Ar}=kr.actions,ao=kr.reducer});function Cr(o){return o!=null&&(Yi(o)||Qi(o))}function Ir(o){return o!=null&&(Ji(o)||ep(o))}function Lr(o){return o!=null&&(Zi(o)||op(o))}function Yi(o){return o!=null&&ji.includes(o)}function Ji(o){return o!=null&&Vi.includes(o)}function Zi(o){return o!=null&&qi.includes(o)}function Qi(o){return o!=null&&Xi.includes(o)}function ep(o){return o!=null&&Ki.includes(o)}function op(o){return o!=null&&$i.includes(o)}var Cd,ji,Vi,qi,Id,Ld,Xi,Ki,$i,Er=u(()=>{"use strict";a();J();Cd=["sent"],ji=["success"],Vi=["fail","cancelled","timedOut"],qi=["invalid"],Id=["timedOut"],Ld=["pending"],Xi=["success"],Ki=["fail","invalid"],$i=["not executed"]});var Nr,Rr,Ie,np,Pr,Wd,Dd,Fd,Mr,Od,Ud,Gd,Hd,Br,zd,jd,po,co=u(()=>{"use strict";a();Nr=require("@reduxjs/toolkit"),Rr=require("redux-persist");J();Er();F();Ie={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},np={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Pr=(0,Nr.createSlice)({name:"transactionsSlice",initialState:Ie,reducers:{moveTransactionsToSignedState:(o,e)=>{var s,g;let{sessionId:n,transactions:t,errorMessage:r,status:i,redirectRoute:p,customTransactionInformation:l}=e.payload;o.customTransactionInformationForSessionId[n]=x(x(x({},np),((s=o.signedTransactions[n])==null?void 0:s.customTransactionInformation)||{}),o.customTransactionInformationForSessionId[n]||{}),o.signedTransactions[n]={transactions:t,status:i,errorMessage:r,redirectRoute:p,customTransactionInformation:x(x({},o.customTransactionInformationForSessionId[n]),l!=null?l:{})},((g=o==null?void 0:o.transactionsToSign)==null?void 0:g.sessionId)===n&&(o.transactionsToSign=Ie.transactionsToSign)},clearSignedTransaction:(o,e)=>{o.signedTransactions[e.payload]&&delete o.signedTransactions[e.payload]},clearTransactionToSign:o=>{o!=null&&o.transactionsToSign&&(o.transactionsToSign=null)},updateSignedTransaction:(o,e)=>{o.signedTransactions=x(x({},o.signedTransactions),e.payload)},updateSignedTransactions:(o,e)=>{let{sessionId:n,status:t,errorMessage:r,transactions:i}=e.payload;o.signedTransactions[n]!=null&&(o.signedTransactions[n].status=t,r!=null&&(o.signedTransactions[n].errorMessage=r),i!=null&&(o.signedTransactions[n].transactions=i))},updateSignedTransactionStatus:(o,e)=>{var g,h,f,w,b,A,Y,me;let{sessionId:n,status:t,errorMessage:r,transactionHash:i,serverTransaction:p,inTransit:l}=e.payload,s=(h=(g=o.signedTransactions)==null?void 0:g[n])==null?void 0:h.transactions;if(s!=null){o.signedTransactions[n].transactions=s.map(B=>B.hash===i?N(x(x({},p!=null?p:{}),B),{status:t,errorMessage:r,inTransit:l}):B);let be=(w=(f=o.signedTransactions[n])==null?void 0:f.transactions)==null?void 0:w.every(B=>Cr(B.status)),bo=(A=(b=o.signedTransactions[n])==null?void 0:b.transactions)==null?void 0:A.some(B=>Ir(B.status)),wo=(me=(Y=o.signedTransactions[n])==null?void 0:Y.transactions)==null?void 0:me.every(B=>Lr(B.status));be&&(o.signedTransactions[n].status="success"),bo&&(o.signedTransactions[n].status="fail"),wo&&(o.signedTransactions[n].status="invalid")}},setTransactionsToSign:(o,e)=>{o.transactionsToSign=e.payload;let{sessionId:n,customTransactionInformation:t}=e.payload;o.customTransactionInformationForSessionId[n]=t,o.signTransactionsError=null},clearAllTransactionsToSign:o=>{o.transactionsToSign=Ie.transactionsToSign,o.signTransactionsError=null},clearAllSignedTransactions:o=>{o.signedTransactions=Ie.signedTransactions},setSignTransactionsError:(o,e)=>{o.signTransactionsError=e.payload},setSignTransactionsCancelMessage:(o,e)=>{o.signTransactionsCancelMessage=e.payload},updateSignedTransactionsCustomTransactionInformation:(o,e)=>{let{sessionId:n,customTransactionInformationOverrides:t}=e.payload;o.signedTransactions[n]!=null&&(o.signedTransactions[n].customTransactionInformation=x(x({},o.signedTransactions[n].customTransactionInformation),t))}},extraReducers:o=>{o.addCase(v,()=>Ie),o.addCase(Rr.REHYDRATE,(e,n)=>{var p;if(e.signTransactionsCancelMessage=null,!((p=n.payload)!=null&&p.transactions))return;let{signedTransactions:t,customTransactionInformationForSessionId:r}=n.payload.transactions,i=Object.entries(t).reduce((l,[s,g])=>{let h=new Date(s),f=new Date;return f.setHours(f.getHours()+5),f-h>0||(l[s]=g),l},{});r!=null&&(e.customTransactionInformationForSessionId=r),t!=null&&(e.signedTransactions=i)})}}),{updateSignedTransactionStatus:Wd,updateSignedTransactions:Dd,setTransactionsToSign:Fd,clearAllTransactionsToSign:Mr,clearAllSignedTransactions:Od,clearSignedTransaction:Ud,clearTransactionToSign:Gd,setSignTransactionsError:Hd,setSignTransactionsCancelMessage:Br,moveTransactionsToSignedState:zd,updateSignedTransactionsCustomTransactionInformation:jd}=Pr.actions,po=Pr.reducer});var Wr,pn,Dr,Kd,$d,Yd,Jd,_o,mo=u(()=>{"use strict";a();Wr=require("@reduxjs/toolkit");F();pn={},Dr=(0,Wr.createSlice)({name:"batchTransactionsSlice",initialState:pn,reducers:{setBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},updateBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},clearBatchTransactions:(o,e)=>{delete o[e.payload.batchId]},clearAllBatchTransactions:()=>pn},extraReducers:o=>{o.addCase(v,()=>pn)}}),{setBatchTransactions:Kd,updateBatchTransactions:$d,clearBatchTransactions:Yd,clearAllBatchTransactions:Jd}=Dr.actions,_o=Dr.reducer});var Or,Fr,Ur,os,Gr,cn=u(()=>{"use strict";a();Or=require("@reduxjs/toolkit");F();Fr={},Ur=(0,Or.createSlice)({name:"dappConfigSlice",initialState:Fr,reducers:{setDappConfig:(o,e)=>e.payload},extraReducers:o=>{o.addCase(v,()=>Fr)}}),{setDappConfig:os}=Ur.actions,Gr=Ur.reducer});var Le=u(()=>{"use strict";a();Ke();Ye();Ze();eo();no();ro();io();co();mo();cn()});var _n=u(()=>{"use strict";a()});var jr,ip,pp,pe,go=u(()=>{"use strict";a();jr=require("@reduxjs/toolkit");_n();Ke();mo();cn();Ye();Ze();eo();no();ro();io();co();ip={["account"]:Xe,["dappConfig"]:Gr,["loginInfo"]:$e,["modals"]:Je,["networkConfig"]:Qe,["signedMessageInfo"]:oo,["toasts"]:to,["transactionsInfo"]:ao,["transactions"]:po,["batchTransactions"]:_o},pp=(o={})=>(0,jr.combineReducers)(x(x({},ip),o)),pe=pp});var Kr={};W(Kr,{default:()=>vp,sessionStorageReducers:()=>mn});function X(o,e=[]){return{key:o,version:1,storage:qr.default,blacklist:e}}var L,Vr,qr,cp,Ee,_p,mp,dp,sp,lp,gp,up,fp,hp,xp,Xr,yp,mn,bp,wp,Tp,vp,$r=u(()=>{"use strict";a();L=require("redux-persist"),Vr=y(require("redux-persist/lib/storage")),qr=y(require("redux-persist/lib/storage/session"));go();Le();Ke();mo();Ye();Ze();eo();no();ro();io();co();_n();cp={persistReducersStorageType:"localStorage"},Ee={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},_p=X(Ee["account"]),mp=X(Ee["loginInfo"]),dp=X(Ee["modals"]),sp=X(Ee["networkConfig"]),lp={2:o=>N(x({},o),{networkConfig:tn})};gp=X("sdk-dapp-transactionsInfo"),up=X("sdk-dapp-transactions",["transactionsToSign"]),fp=X("sdk-dapp-batchTransactions",["batchTransactions"]),hp=X("sdk-dapp-toasts"),xp=X("sdk-dapp-signedMessageInfo"),Xr={key:"sdk-dapp-store",version:2,storage:Vr.default,whitelist:Object.keys(Ee),migrate:(0,L.createMigrate)(lp,{debug:!1})},yp=N(x({},Xr),{whitelist:[]}),mn={["toasts"]:(0,L.persistReducer)(hp,to),["transactions"]:(0,L.persistReducer)(up,po),["transactionsInfo"]:(0,L.persistReducer)(gp,ao),["batchTransactions"]:(0,L.persistReducer)(fp,_o),["signedMessageInfo"]:(0,L.persistReducer)(xp,oo)},bp=N(x({},mn),{["account"]:(0,L.persistReducer)(_p,Xe),["loginInfo"]:(0,L.persistReducer)(mp,$e),["modals"]:(0,L.persistReducer)(dp,Je),["networkConfig"]:(0,L.persistReducer)(sp,Qe)}),wp=cp.persistReducersStorageType==="localStorage",Tp=wp?(0,L.persistReducer)(Xr,pe(mn)):(0,L.persistReducer)(yp,pe(bp)),vp=Tp});var Yr={};W(Yr,{default:()=>Sp});var Sp,Jr=u(()=>{"use strict";a();go();Sp=pe()});var Zr={};W(Zr,{default:()=>Ap});var M,kp,Ap,Qr=u(()=>{"use strict";a();M=require("redux-persist"),kp=[M.FLUSH,M.REHYDRATE,M.PAUSE,M.PERSIST,M.PURGE,M.REGISTER],Ap=kp});var na={};W(na,{default:()=>oa});function oa(o){return(0,ea.persistStore)(o)}var ea,ta=u(()=>{"use strict";a();ea=require("redux-persist")});var K={};W(K,{css:()=>ga,default:()=>Ip});var ga,Ip,$=u(()=>{"use strict";a();ga=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ga));Ip={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var bn={};W(bn,{css:()=>Aa,default:()=>Bp});var Aa,Bp,wn=u(()=>{"use strict";a();Aa=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Aa));Bp={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var vn={};W(vn,{css:()=>Pa,default:()=>Up});var Pa,Up,Sn=u(()=>{"use strict";a();Pa=`.dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal {
  color: inherit;
}

.dapp-core-component__signWithWalletConnectModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithWalletConnectModalStyles__wallet-connect {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pa));Up={"wallet-connect-modal":"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal",walletConnectModal:"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal","modal-container":"dapp-core-component__signWithWalletConnectModalStyles__modal-container",modalContainer:"dapp-core-component__signWithWalletConnectModalStyles__modal-container","wallet-connect":"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect"}});var zp={};W(zp,{SignWithWalletConnectModal:()=>Hp});module.exports=R(zp);a();a();var oe=y(require("react")),Ma=require("@fortawesome/free-solid-svg-icons"),kn=y(require("classnames"));ae();a();var Lt=y(require("react"));a();var ve=y(require("react"));a();Ho();var At=()=>!Go();var Ci=()=>C(void 0,null,function*(){return yield Promise.resolve().then(()=>(jo(),zo))}),Ii=()=>(jo(),R(zo)).default,Vo=At();function It({ssrGlobalImportCallback:o,ssrImportCallback:e,clientImportCallback:n}){let[t,r]=ve.default.useState(Vo?void 0:Ii()),[i,p]=ve.default.useState(Vo||n==null?void 0:n()),l=()=>C(this,null,function*(){(o?o():Ci()).then(s=>r(s.default)),e==null||e().then(s=>p(s.default))});return(0,ve.useEffect)(()=>{Vo&&l()},[]),{globalStyles:t,styles:i}}function k(o,e){return n=>{let{globalStyles:t,styles:r}=It({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return Lt.default.createElement(o,N(x({},n),{globalStyles:t!=null?t:{},styles:r!=null?r:{}}))}}a();a();a();a();var Rt=require("@multiversx/sdk-extension-provider"),Pt=require("@multiversx/sdk-hw-provider"),Mt=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Bt=require("@multiversx/sdk-opera-provider"),Wt=require("@multiversx/sdk-passkey-provider/out"),Dt=require("@multiversx/sdk-web-wallet-provider");ae();Wo();a();var qo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Li=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");J();a();var Et={},Nt=ue;var Z=o=>{switch(o==null?void 0:o.constructor){case Dt.WalletProvider:return"wallet";case Nt:return"walletconnectv2";case Pt.HWProvider:return"ledger";case Rt.ExtensionProvider:return"extension";case Wt.PasskeyProvider:return"passkey";case Mt.MetamaskProvider:return"metamask";case Bt.OperaProvider:return"opera";case Bo.CrossWindowProvider:return"crossWindow";case qo.IframeProvider:return"iframe";case ue:return"";default:return"extra"}};var D=o=>`Unable to perform ${o}, Provider not initialized`,ue=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(D("getAccount"))}setAccount(e){throw new Error(D(`setAccount: ${e}`))}login(e){throw new Error(D(`login with options: ${e}`))}logout(e){throw new Error(D(`logout with options: ${e}`))}getAddress(){throw new Error(D("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(e,n){throw new Error(D(`sendTransaction with transactions: ${e} options: ${n}`))}signTransaction(e,n){throw new Error(D(`signTransaction with transactions: ${e} options: ${n}`))}signTransactions(e,n){throw new Error(D(`signTransactions with transactions: ${e} options: ${n}`))}signMessage(e,n){throw new Error(D(`signTransactions with ${e} and options ${n}`))}sendCustomMessage({method:e,params:n}){throw new Error(D(`sendCustomMessage with method: ${e} params: ${n}`))}sendCustomRequest(e){throw new Error(D(`sendSessionEvent with options: ${e}`))}ping(){return Promise.resolve(!1)}},Xo=new ue;var Ei=Xo;function Se(){return Ei||Xo}var fe=()=>{let o=Se(),e=Z(o);return{provider:o,providerType:e}};a();Po();a();var _a=require("react"),xe=require("react-redux");a();var dn=require("@reduxjs/toolkit"),pa=require("react-redux/lib/utils/Subscription");Le();a();var Hr=y(require("lodash.throttle"));ae();Le();en();Ve();ke();var tp=[Ge],so=!1,rp=(0,Hr.default)(()=>{Ce(Ae())},5e3),zr=o=>e=>n=>{if(tp.includes(n.type))return e(n);let t=o.getState(),r=he.local.getItem(ie.loginExpiresAt);if(!Boolean(t==null?void 0:t.account.address))return e(n);if(r==null)return Ce(Ae());let p=Date.now();return r-p<0&&!so?setTimeout(()=>{so=!0,o.dispatch(or())},1e3):(so&&(so=!1),rp()),e(n)};a();a();function lo(){return typeof sessionStorage!="undefined"}var ra=lo()?($r(),R(Kr)).default:(Jr(),R(Yr)).default,aa=lo()?(Qr(),R(Zr)).default:[],ia=lo()?(ta(),R(na)).default:o=>o;go();var uo=(0,dn.configureStore)({reducer:ra,middleware:o=>o({serializableCheck:{ignoredActions:[...aa,Jt.type,Yt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(zr)}),ca=(0,pa.createSubscription)(uo),Qs=ia(uo),el=(0,dn.configureStore)({reducer:pe});var Cp={store:uo,subscription:ca},sn=(0,_a.createContext)(Cp),rl=(0,xe.createStoreHook)(sn),ma=(0,xe.createDispatchHook)(sn),al=(0,xe.createSelectorHook)(sn);Le();function da(){let o=ma();return e=>{o(Mr()),o(Ar(e)),o(Br(Qn))}}a();Te();a();a();function sa(){let o=Se();return Z(o)}function ln(o){return sa()===o}function la(o){let{provider:e}=fe();function n(){return C(this,null,function*(){!e||ln("walletconnectv2")&&(yield t())})}function t(){return C(this,null,function*(){var r;try{if(!e||!ln("walletconnectv2"))return;yield(r=e==null?void 0:e.sendCustomRequest)==null?void 0:r.call(e,{request:{method:Et.CANCEL_ACTION,params:{action:o}}})}catch(i){console.warn("WalletConnectV2: Unable to send cancelAction event",i)}})}return{cancelActionV2:t,cancelWalletConnectAction:n}}J();a();var Sa=y(require("react"));a();a();a();var Q=y(require("react")),ba=require("react"),wa=require("react"),xn=y(require("classnames")),Ta=require("react-dom");ae();a();var ua=y(require("react")),fa=y(require("classnames"));var Lp=({className:o,children:e,styles:n})=>ua.default.createElement("div",{className:(0,fa.default)(n==null?void 0:n.dappModalBody,o)},e),gn=k(Lp,{ssrStyles:()=>Promise.resolve().then(()=>($(),K)),clientStyles:()=>($(),R(K)).default});a();var un=y(require("react")),ha=y(require("classnames"));var Ep=({visible:o,customFooter:e,className:n,footerText:t,styles:r})=>o?un.default.createElement("div",{className:(0,ha.default)(r==null?void 0:r.dappModalFooter,n)},e!=null?e:un.default.createElement("div",null,t)):null,fn=k(Ep,{ssrStyles:()=>Promise.resolve().then(()=>($(),K)),clientStyles:()=>($(),R(K)).default});a();var ye=y(require("react")),xa=require("@fortawesome/free-solid-svg-icons"),ya=require("@fortawesome/react-fontawesome"),Ne=y(require("classnames"));var Np=({visible:o,headerText:e,customHeader:n,className:t,closeButtonClassName:r,headerTextClassName:i,onHide:p,globalStyles:l,styles:s})=>o?n?ye.default.createElement("div",{className:(0,Ne.default)(s==null?void 0:s.dappModalHeader,t)},n):ye.default.createElement("div",{className:(0,Ne.default)(s==null?void 0:s.dappModalHeader,t)},ye.default.createElement("div",{className:(0,Ne.default)(s==null?void 0:s.dappModalHeaderText,i)},e),ye.default.createElement("button",{onClick:p,className:(0,Ne.default)(s==null?void 0:s.dappModalCloseButton,l==null?void 0:l.btn,l==null?void 0:l.btnLight,r)},ye.default.createElement(ya.FontAwesomeIcon,{size:"lg",icon:xa.faTimes}))):null,hn=k(Np,{ssrStyles:()=>Promise.resolve().then(()=>($(),K)),clientStyles:()=>($(),R(K)).default});var Pp={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Mp=({"data-testid":o="dappModal",children:e,className:n="dapp-modal-dialog-wrapper",closeOnEscape:t,config:r=Pp,id:i="dapp-modal",onHide:p,parentElement:l,visible:s,styles:g})=>{let[h,f]=(0,ba.useState)(!1);if((0,wa.useEffect)(()=>{f(!0)},[]),!s)return null;let{showHeader:w,showFooter:b,headerText:A,footerText:Y,modalDialogClassName:me="dapp-modal-dialog",modalContentClassName:be="dapp-modal-dialog-content",modalHeaderClassName:bo="dapp-modal-dialog-header",modalHeaderTextClassName:wo="dapp-modal-dialog-header-text",modalCloseButtonClassName:B="dapp-modal-dialog-close-button",modalBodyClassName:Ba="dapp-modal-dialog-content-body",modalFooterClassName:Wa="dapp-modal-dialog-footer",customModalHeader:Da,customModalFooter:Fa}=r,Oa=Ua=>{Ua.key==="Escape"&&t&&(p==null||p())};return Q.default.createElement(Q.default.Fragment,null,h&&(0,Ta.createPortal)(Q.default.createElement("div",{id:i,role:"dialog","aria-modal":"true",className:(0,xn.default)(me,g==null?void 0:g.dappModal,n),"data-testid":o,onKeyDown:Oa},Q.default.createElement("div",{className:(0,xn.default)(g==null?void 0:g.dappModalContent,be)},Q.default.createElement(hn,{visible:w,headerText:A,customHeader:Da,className:bo,headerTextClassName:wo,closeButtonClassName:B,onHide:p}),Q.default.createElement(gn,{className:Ba},e),Q.default.createElement(fn,{visible:b,customFooter:Fa,footerText:Y,className:Wa}))),l!=null?l:document==null?void 0:document.body))},yn=k(Mp,{ssrStyles:()=>Promise.resolve().then(()=>($(),K)),clientStyles:()=>($(),R(K)).default});a();a();var fo=require("react"),va=o=>{let[e,n]=(0,fo.useState)(!1),t=()=>{n(!0)},r=()=>{n(!1)};return(0,fo.useEffect)(()=>{(o==null?void 0:o.visible)===!0?t():(o==null?void 0:o.visible)===!1&&r()},[o==null?void 0:o.visible]),{handleShowModal:t,handleHideModal:r,showModal:e}};a();var ka=o=>{let{showModal:e}=va({visible:o.visible}),n=()=>{var t;(t=o.onClose)==null||t.call(o)};return Sa.default.createElement(yn,{className:o.className,closeOnEscape:o.closeOnEscape,config:o.modalConfig,onHide:n,visible:e},o.children)};a();a();var ee=y(require("react")),Ca=require("@fortawesome/react-fontawesome"),Re=y(require("classnames"));var Wp=({icon:o,title:e,action:n,iconClass:t,"data-testid":r,description:i,iconBgClass:p,iconSize:l="5x",className:s="dapp-page-state",globalStyles:g,styles:h})=>{let f=(0,ee.useMemo)(()=>({wrapper:(0,Re.default)(h==null?void 0:h.state,g==null?void 0:g.mAuto,g==null?void 0:g.p4,g==null?void 0:g.textCenter,s),iconContainer:(0,Re.default)(g==null?void 0:g.iconState,g==null?void 0:g.mxAuto,{[p!=null?p:""]:Boolean(p)}),iconClass:(0,Re.default)(t!=null&&t),title:(0,Re.default)(g==null?void 0:g.h4,g==null?void 0:g.my4),description:g==null?void 0:g.mb3}),[g,h,s,p,t]);return ee.default.createElement("div",{className:f.wrapper,"data-testid":r},o&&ee.default.createElement("span",{className:f.iconContainer},ee.default.createElement(Ca.FontAwesomeIcon,{icon:o,className:f.iconClass,size:l})),e&&ee.default.createElement("p",{className:f.title},e),i&&ee.default.createElement("div",{className:f.description},i),n)},Ia=k(Wp,{ssrStyles:()=>Promise.resolve().then(()=>(wn(),bn)),clientStyles:()=>(wn(),R(bn)).default});a();a();var E=y(require("react")),_e=require("@fortawesome/free-solid-svg-icons"),ce=y(require("classnames"));J();a();a();a();var La=(o,e,n)=>C(void 0,null,function*(){let t;return Promise.race([o,new Promise((r,i)=>t=setTimeout(i,e,n))]).finally(()=>clearTimeout(t))});a();var ho=y(require("react")),Ea=require("@fortawesome/react-fontawesome"),xo=y(require("classnames"));var Dp=({icon:o,iconClassName:e,description:n,details:t,className:r,globalStyles:i})=>{let p=(0,xo.default)(i==null?void 0:i.dFlex,i==null?void 0:i.flexColumn,i==null?void 0:i.alignItemsCenter,i==null?void 0:i.justifyContentCenter,i==null?void 0:i.my3,r),l=(0,xo.default)(i==null?void 0:i.dFlex,i==null?void 0:i.alignItemsCenter,i==null?void 0:i.mr2);return ho.default.createElement("div",{className:p},ho.default.createElement("div",{className:l},o&&ho.default.createElement(Ea.FontAwesomeIcon,{icon:o,className:(0,xo.default)(i==null?void 0:i.mr2,e)}),n),t)},Pe=k(Dp,{});a();var Me=y(require("react")),Na=y(require("classnames"));var Fp=({globalStyles:o})=>Me.default.createElement("div",{className:(0,Na.default)(o==null?void 0:o.dFlex,o==null?void 0:o.flexColumn,o==null?void 0:o.alignItemsCenter,o==null?void 0:o.mt2)},Me.default.createElement("small",{className:o==null?void 0:o.textSecondary},"Make sure that the phone is unlocked and the app is opened."),Me.default.createElement("small",null,"Hint:"," ",Me.default.createElement("span",{className:o==null?void 0:o.textSecondary},"Battery saving mode might have an effect on the connection quality."))),Tn=k(Fp,{});var yo=1e4;var Op=({description:o,className:e,globalStyles:n})=>{let{provider:t}=fe(),r=Z(t),[i,p]=(0,E.useState)("pending"),[l,s]=(0,E.useState)(yo),g=r==="walletconnectv2",h=()=>C(void 0,null,function*(){var w;let f=Symbol();try{(yield La((w=t==null?void 0:t.ping)==null?void 0:w.call(t),yo,f))?(p("success"),s(A=>A*1.5)):(p("error"),s(yo))}catch(b){p(b===f?"waiting":"error"),s(yo)}});if((0,E.useEffect)(()=>{h();let f=setInterval(()=>C(void 0,null,function*(){yield h()}),l);return()=>clearInterval(f)},[]),!g)return null;switch(i){case"pending":return E.default.createElement(Pe,{className:e,icon:_e.faCircleNotch,iconClassName:(0,ce.default)(n==null?void 0:n.textPrimary,"fa-spin","slow-spin"),description:"Checking the connection...",details:E.default.createElement("div",{className:(0,ce.default)(n==null?void 0:n.mt3)},o)});case"waiting":return E.default.createElement(Pe,{className:e,icon:_e.faCircleNotch,iconClassName:(0,ce.default)(n==null?void 0:n.textPrimary,"fa-spin","slow-spin"),description:"Checking the connection...",details:E.default.createElement(Tn,null)});case"success":return E.default.createElement(Pe,{className:e,icon:_e.faCheckCircle,iconClassName:(0,ce.default)(n==null?void 0:n.textSuccess),description:"Connected",details:E.default.createElement("div",{className:(0,ce.default)(n==null?void 0:n.mt3)},o)});default:case"error":return E.default.createElement(Pe,{className:e,icon:_e.faTimes,iconClassName:(0,ce.default)(n==null?void 0:n.textDanger),description:"Unable to establish a connection with the device.",details:E.default.createElement(Tn,null)})}},Ra=k(Op,{});var Gp=({error:o,handleClose:e,transactions:n,sessionId:t,className:r="dapp-wallet-connect-modal",modalContentClassName:i,globalStyles:p,styles:l})=>{let s=da(),g={wrapper:(0,kn.default)(l==null?void 0:l.modalContainer,l==null?void 0:l.walletConnect,r),icon:p==null?void 0:p.textWhite,closeBtn:(0,kn.default)(p==null?void 0:p.btn,p==null?void 0:p.btnCloseLink,p==null?void 0:p.btnDark,p==null?void 0:p.textWhite,p==null?void 0:p.mt2)},{provider:h}=fe(),f=Z(h),w=n&&(n==null?void 0:n.length)>1,b=f==="walletconnectv2",A=`Check your phone to sign the transaction${w?"s":""}`,{cancelWalletConnectAction:Y}=la(St),me=()=>C(void 0,null,function*(){s(t),yield Y(),e()}),be=()=>oe.default.createElement(oe.default.Fragment,null,b?oe.default.createElement(Ra,{description:A}):A);return oe.default.createElement(ka,{onClose:e,modalConfig:{modalDialogClassName:g.wrapper},visible:!0},oe.default.createElement(Ia,{icon:o?Ma.faTimes:null,iconClass:g.icon,className:i,iconBgClass:o?p==null?void 0:p.bgDanger:p==null?void 0:p.bgWarning,iconSize:"3x",title:"Confirm on the xPortal App",description:o||oe.default.createElement(be,null),action:oe.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:me,className:g.closeBtn},"Cancel")}))},Hp=k(Gp,{ssrStyles:()=>Promise.resolve().then(()=>(Sn(),vn)),clientStyles:()=>(Sn(),R(vn)).default});0&&(module.exports={SignWithWalletConnectModal});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
