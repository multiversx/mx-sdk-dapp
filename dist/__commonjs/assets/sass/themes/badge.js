"use strict";var Ar=Object.create;var D=Object.defineProperty;var Ur=Object.getOwnPropertyDescriptor;var Tr=Object.getOwnPropertyNames;var Ir=Object.getPrototypeOf,kr=Object.prototype.hasOwnProperty;var Cr=(n,r)=>()=>(n&&(r=n(n=0)),r);var N=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports),Sr=(n,r)=>{for(var e in r)D(n,e,{get:r[e],enumerable:!0})},rr=(n,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Tr(r))!kr.call(n,o)&&o!==e&&D(n,o,{get:()=>r[o],enumerable:!(t=Ur(r,o))||t.enumerable});return n};var er=(n,r,e)=>(e=n!=null?Ar(Ir(n)):{},rr(r||!n||!n.__esModule?D(e,"default",{value:n,enumerable:!0}):e,n)),Lr=n=>rr(D({},"__esModule",{value:!0}),n);var or=N(W=>{"use strict";y();W.byteLength=Mr;W.toByteArray=Nr;W.fromByteArray=qr;var b=[],m=[],Rr=typeof Uint8Array!="undefined"?Uint8Array:Array,z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(U=0,nr=z.length;U<nr;++U)b[U]=z[U],m[z.charCodeAt(U)]=U;var U,nr;m["-".charCodeAt(0)]=62;m["_".charCodeAt(0)]=63;function tr(n){var r=n.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=n.indexOf("=");e===-1&&(e=r);var t=e===r?0:4-e%4;return[e,t]}function Mr(n){var r=tr(n),e=r[0],t=r[1];return(e+t)*3/4-t}function Dr(n,r,e){return(r+e)*3/4-e}function Nr(n){var r,e=tr(n),t=e[0],o=e[1],i=new Rr(Dr(n,t,o)),a=0,u=o>0?t-4:t,c;for(c=0;c<u;c+=4)r=m[n.charCodeAt(c)]<<18|m[n.charCodeAt(c+1)]<<12|m[n.charCodeAt(c+2)]<<6|m[n.charCodeAt(c+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return o===2&&(r=m[n.charCodeAt(c)]<<2|m[n.charCodeAt(c+1)]>>4,i[a++]=r&255),o===1&&(r=m[n.charCodeAt(c)]<<10|m[n.charCodeAt(c+1)]<<4|m[n.charCodeAt(c+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function Wr(n){return b[n>>18&63]+b[n>>12&63]+b[n>>6&63]+b[n&63]}function Yr(n,r,e){for(var t,o=[],i=r;i<e;i+=3)t=(n[i]<<16&16711680)+(n[i+1]<<8&65280)+(n[i+2]&255),o.push(Wr(t));return o.join("")}function qr(n){for(var r,e=n.length,t=e%3,o=[],i=16383,a=0,u=e-t;a<u;a+=i)o.push(Yr(n,a,a+i>u?u:a+i));return t===1?(r=n[e-1],o.push(b[r>>2]+b[r<<4&63]+"==")):t===2&&(r=(n[e-2]<<8)+n[e-1],o.push(b[r>>10]+b[r>>4&63]+b[r<<2&63]+"=")),o.join("")}});var ir=N(G=>{y();G.read=function(n,r,e,t,o){var i,a,u=o*8-t-1,c=(1<<u)-1,h=c>>1,d=-7,f=e?o-1:0,w=e?-1:1,g=n[r+f];for(f+=w,i=g&(1<<-d)-1,g>>=-d,d+=u;d>0;i=i*256+n[r+f],f+=w,d-=8);for(a=i&(1<<-d)-1,i>>=-d,d+=t;d>0;a=a*256+n[r+f],f+=w,d-=8);if(i===0)i=1-h;else{if(i===c)return a?NaN:(g?-1:1)*(1/0);a=a+Math.pow(2,t),i=i-h}return(g?-1:1)*a*Math.pow(2,i-t)};G.write=function(n,r,e,t,o,i){var a,u,c,h=i*8-o-1,d=(1<<h)-1,f=d>>1,w=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=t?0:i-1,k=t?1:-1,Br=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=d):(a=Math.floor(Math.log(r)/Math.LN2),r*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+f>=1?r+=w/c:r+=w*Math.pow(2,1-f),r*c>=2&&(a++,c/=2),a+f>=d?(u=0,a=d):a+f>=1?(u=(r*c-1)*Math.pow(2,o),a=a+f):(u=r*Math.pow(2,f-1)*Math.pow(2,o),a=0));o>=8;n[e+g]=u&255,g+=k,u/=256,o-=8);for(a=a<<o|u,h+=o;h>0;n[e+g]=a&255,g+=k,a/=256,h-=8);n[e+g-k]|=Br*128}});var wr=N(S=>{"use strict";y();var J=or(),C=ir(),ar=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;S.Buffer=p;S.SlowBuffer=Qr;S.INSPECT_MAX_BYTES=50;var q=2147483647;S.kMaxLength=q;p.TYPED_ARRAY_SUPPORT=Hr();!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Hr(){try{var n=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(n,r),n.foo()===42}catch(e){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.buffer}});Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.byteOffset}});function v(n){if(n>q)throw new RangeError('The value "'+n+'" is invalid for option "size"');var r=new Uint8Array(n);return Object.setPrototypeOf(r,p.prototype),r}function p(n,r,e){if(typeof n=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return O(n)}return cr(n,r,e)}p.poolSize=8192;function cr(n,r,e){if(typeof n=="string")return zr(n,r);if(ArrayBuffer.isView(n))return Gr(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(x(n,ArrayBuffer)||n&&x(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(x(n,SharedArrayBuffer)||n&&x(n.buffer,SharedArrayBuffer)))return V(n,r,e);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=n.valueOf&&n.valueOf();if(t!=null&&t!==n)return p.from(t,r,e);var o=Jr(n);if(o)return o;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return p.from(n[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}p.from=function(n,r,e){return cr(n,r,e)};Object.setPrototypeOf(p.prototype,Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function fr(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function Xr(n,r,e){return fr(n),n<=0?v(n):r!==void 0?typeof e=="string"?v(n).fill(r,e):v(n).fill(r):v(n)}p.alloc=function(n,r,e){return Xr(n,r,e)};function O(n){return fr(n),v(n<0?0:Z(n)|0)}p.allocUnsafe=function(n){return O(n)};p.allocUnsafeSlow=function(n){return O(n)};function zr(n,r){if((typeof r!="string"||r==="")&&(r="utf8"),!p.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=hr(n,r)|0,t=v(e),o=t.write(n,r);return o!==e&&(t=t.slice(0,o)),t}function Q(n){for(var r=n.length<0?0:Z(n.length)|0,e=v(r),t=0;t<r;t+=1)e[t]=n[t]&255;return e}function Gr(n){if(x(n,Uint8Array)){var r=new Uint8Array(n);return V(r.buffer,r.byteOffset,r.byteLength)}return Q(n)}function V(n,r,e){if(r<0||n.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var t;return r===void 0&&e===void 0?t=new Uint8Array(n):e===void 0?t=new Uint8Array(n,r):t=new Uint8Array(n,r,e),Object.setPrototypeOf(t,p.prototype),t}function Jr(n){if(p.isBuffer(n)){var r=Z(n.length)|0,e=v(r);return e.length===0||n.copy(e,0,0,r),e}if(n.length!==void 0)return typeof n.length!="number"||$(n.length)?v(0):Q(n);if(n.type==="Buffer"&&Array.isArray(n.data))return Q(n.data)}function Z(n){if(n>=q)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+q.toString(16)+" bytes");return n|0}function Qr(n){return+n!=n&&(n=0),p.alloc(+n)}p.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==p.prototype};p.compare=function(r,e){if(x(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),x(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(r)||!p.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var t=r.length,o=e.length,i=0,a=Math.min(t,o);i<a;++i)if(r[i]!==e[i]){t=r[i],o=e[i];break}return t<o?-1:o<t?1:0};p.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};p.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return p.alloc(0);var t;if(e===void 0)for(e=0,t=0;t<r.length;++t)e+=r[t].length;var o=p.allocUnsafe(e),i=0;for(t=0;t<r.length;++t){var a=r[t];if(x(a,Uint8Array))i+a.length>o.length?p.from(a).copy(o,i):Uint8Array.prototype.set.call(o,a,i);else if(p.isBuffer(a))a.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return o};function hr(n,r){if(p.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||x(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var e=n.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&e===0)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return K(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return mr(n).length;default:if(o)return t?-1:K(n).length;r=(""+r).toLowerCase(),o=!0}}p.byteLength=hr;function Vr(n,r,e){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(n||(n="utf8");;)switch(n){case"hex":return te(this,r,e);case"utf8":case"utf-8":return lr(this,r,e);case"ascii":return ee(this,r,e);case"latin1":case"binary":return ne(this,r,e);case"base64":return jr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oe(this,r,e);default:if(t)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),t=!0}}p.prototype._isBuffer=!0;function T(n,r,e){var t=n[r];n[r]=n[e],n[e]=t}p.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)T(this,e,e+1);return this};p.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)T(this,e,e+3),T(this,e+1,e+2);return this};p.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)T(this,e,e+7),T(this,e+1,e+6),T(this,e+2,e+5),T(this,e+3,e+4);return this};p.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?lr(this,0,r):Vr.apply(this,arguments)};p.prototype.toLocaleString=p.prototype.toString;p.prototype.equals=function(r){if(!p.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:p.compare(this,r)===0};p.prototype.inspect=function(){var r="",e=S.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};ar&&(p.prototype[ar]=p.prototype.inspect);p.prototype.compare=function(r,e,t,o,i){if(x(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),!p.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),t===void 0&&(t=r?r.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),e<0||t>r.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&e>=t)return 0;if(o>=i)return-1;if(e>=t)return 1;if(e>>>=0,t>>>=0,o>>>=0,i>>>=0,this===r)return 0;for(var a=i-o,u=t-e,c=Math.min(a,u),h=this.slice(o,i),d=r.slice(e,t),f=0;f<c;++f)if(h[f]!==d[f]){a=h[f],u=d[f];break}return a<u?-1:u<a?1:0};function dr(n,r,e,t,o){if(n.length===0)return-1;if(typeof e=="string"?(t=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,$(e)&&(e=o?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(o)return-1;e=n.length-1}else if(e<0)if(o)e=0;else return-1;if(typeof r=="string"&&(r=p.from(r,t)),p.isBuffer(r))return r.length===0?-1:pr(n,r,e,t,o);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(n,r,e):Uint8Array.prototype.lastIndexOf.call(n,r,e):pr(n,[r],e,t,o);throw new TypeError("val must be string, number or Buffer")}function pr(n,r,e,t,o){var i=1,a=n.length,u=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(n.length<2||r.length<2)return-1;i=2,a/=2,u/=2,e/=2}function c(g,k){return i===1?g[k]:g.readUInt16BE(k*i)}var h;if(o){var d=-1;for(h=e;h<a;h++)if(c(n,h)===c(r,d===-1?0:h-d)){if(d===-1&&(d=h),h-d+1===u)return d*i}else d!==-1&&(h-=h-d),d=-1}else for(e+u>a&&(e=a-u),h=e;h>=0;h--){for(var f=!0,w=0;w<u;w++)if(c(n,h+w)!==c(r,w)){f=!1;break}if(f)return h}return-1}p.prototype.includes=function(r,e,t){return this.indexOf(r,e,t)!==-1};p.prototype.indexOf=function(r,e,t){return dr(this,r,e,t,!0)};p.prototype.lastIndexOf=function(r,e,t){return dr(this,r,e,t,!1)};function Kr(n,r,e,t){e=Number(e)||0;var o=n.length-e;t?(t=Number(t),t>o&&(t=o)):t=o;var i=r.length;t>i/2&&(t=i/2);for(var a=0;a<t;++a){var u=parseInt(r.substr(a*2,2),16);if($(u))return a;n[e+a]=u}return a}function Or(n,r,e,t){return H(K(r,n.length-e),n,e,t)}function Zr(n,r,e,t){return H(pe(r),n,e,t)}function $r(n,r,e,t){return H(mr(r),n,e,t)}function Pr(n,r,e,t){return H(ue(r,n.length-e),n,e,t)}p.prototype.write=function(r,e,t,o){if(e===void 0)o="utf8",t=this.length,e=0;else if(t===void 0&&typeof e=="string")o=e,t=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((t===void 0||t>i)&&(t=i),r.length>0&&(t<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return Kr(this,r,e,t);case"utf8":case"utf-8":return Or(this,r,e,t);case"ascii":case"latin1":case"binary":return Zr(this,r,e,t);case"base64":return $r(this,r,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pr(this,r,e,t);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}};p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function jr(n,r,e){return r===0&&e===n.length?J.fromByteArray(n):J.fromByteArray(n.slice(r,e))}function lr(n,r,e){e=Math.min(n.length,e);for(var t=[],o=r;o<e;){var i=n[o],a=null,u=i>239?4:i>223?3:i>191?2:1;if(o+u<=e){var c,h,d,f;switch(u){case 1:i<128&&(a=i);break;case 2:c=n[o+1],(c&192)===128&&(f=(i&31)<<6|c&63,f>127&&(a=f));break;case 3:c=n[o+1],h=n[o+2],(c&192)===128&&(h&192)===128&&(f=(i&15)<<12|(c&63)<<6|h&63,f>2047&&(f<55296||f>57343)&&(a=f));break;case 4:c=n[o+1],h=n[o+2],d=n[o+3],(c&192)===128&&(h&192)===128&&(d&192)===128&&(f=(i&15)<<18|(c&63)<<12|(h&63)<<6|d&63,f>65535&&f<1114112&&(a=f))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,t.push(a>>>10&1023|55296),a=56320|a&1023),t.push(a),o+=u}return re(t)}var ur=4096;function re(n){var r=n.length;if(r<=ur)return String.fromCharCode.apply(String,n);for(var e="",t=0;t<r;)e+=String.fromCharCode.apply(String,n.slice(t,t+=ur));return e}function ee(n,r,e){var t="";e=Math.min(n.length,e);for(var o=r;o<e;++o)t+=String.fromCharCode(n[o]&127);return t}function ne(n,r,e){var t="";e=Math.min(n.length,e);for(var o=r;o<e;++o)t+=String.fromCharCode(n[o]);return t}function te(n,r,e){var t=n.length;(!r||r<0)&&(r=0),(!e||e<0||e>t)&&(e=t);for(var o="",i=r;i<e;++i)o+=ce[n[i]];return o}function oe(n,r,e){for(var t=n.slice(r,e),o="",i=0;i<t.length-1;i+=2)o+=String.fromCharCode(t[i]+t[i+1]*256);return o}p.prototype.slice=function(r,e){var t=this.length;r=~~r,e=e===void 0?t:~~e,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),e<r&&(e=r);var o=this.subarray(r,e);return Object.setPrototypeOf(o,p.prototype),o};function s(n,r,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>e)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(r,e,t){r=r>>>0,e=e>>>0,t||s(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return o};p.prototype.readUintBE=p.prototype.readUIntBE=function(r,e,t){r=r>>>0,e=e>>>0,t||s(r,e,this.length);for(var o=this[r+--e],i=1;e>0&&(i*=256);)o+=this[r+--e]*i;return o};p.prototype.readUint8=p.prototype.readUInt8=function(r,e){return r=r>>>0,e||s(r,1,this.length),this[r]};p.prototype.readUint16LE=p.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||s(r,2,this.length),this[r]|this[r+1]<<8};p.prototype.readUint16BE=p.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||s(r,2,this.length),this[r]<<8|this[r+1]};p.prototype.readUint32LE=p.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||s(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};p.prototype.readUint32BE=p.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||s(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};p.prototype.readIntLE=function(r,e,t){r=r>>>0,e=e>>>0,t||s(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o};p.prototype.readIntBE=function(r,e,t){r=r>>>0,e=e>>>0,t||s(r,e,this.length);for(var o=e,i=1,a=this[r+--o];o>0&&(i*=256);)a+=this[r+--o]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};p.prototype.readInt8=function(r,e){return r=r>>>0,e||s(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};p.prototype.readInt16LE=function(r,e){r=r>>>0,e||s(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};p.prototype.readInt16BE=function(r,e){r=r>>>0,e||s(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};p.prototype.readInt32LE=function(r,e){return r=r>>>0,e||s(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};p.prototype.readInt32BE=function(r,e){return r=r>>>0,e||s(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};p.prototype.readFloatLE=function(r,e){return r=r>>>0,e||s(r,4,this.length),C.read(this,r,!0,23,4)};p.prototype.readFloatBE=function(r,e){return r=r>>>0,e||s(r,4,this.length),C.read(this,r,!1,23,4)};p.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||s(r,8,this.length),C.read(this,r,!0,52,8)};p.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||s(r,8,this.length),C.read(this,r,!1,52,8)};function _(n,r,e,t,o,i){if(!p.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+t>n.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(r,e,t,o){if(r=+r,e=e>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;_(this,r,e,t,i,0)}var a=1,u=0;for(this[e]=r&255;++u<t&&(a*=256);)this[e+u]=r/a&255;return e+t};p.prototype.writeUintBE=p.prototype.writeUIntBE=function(r,e,t,o){if(r=+r,e=e>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;_(this,r,e,t,i,0)}var a=t-1,u=1;for(this[e+a]=r&255;--a>=0&&(u*=256);)this[e+a]=r/u&255;return e+t};p.prototype.writeUint8=p.prototype.writeUInt8=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,1,255,0),this[e]=r&255,e+1};p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};p.prototype.writeIntLE=function(r,e,t,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*t-1);_(this,r,e,t,i-1,-i)}var a=0,u=1,c=0;for(this[e]=r&255;++a<t&&(u*=256);)r<0&&c===0&&this[e+a-1]!==0&&(c=1),this[e+a]=(r/u>>0)-c&255;return e+t};p.prototype.writeIntBE=function(r,e,t,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*t-1);_(this,r,e,t,i-1,-i)}var a=t-1,u=1,c=0;for(this[e+a]=r&255;--a>=0&&(u*=256);)r<0&&c===0&&this[e+a+1]!==0&&(c=1),this[e+a]=(r/u>>0)-c&255;return e+t};p.prototype.writeInt8=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};p.prototype.writeInt16LE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeInt16BE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeInt32LE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};p.prototype.writeInt32BE=function(r,e,t){return r=+r,e=e>>>0,t||_(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function sr(n,r,e,t,o,i){if(e+t>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function _r(n,r,e,t,o){return r=+r,e=e>>>0,o||sr(n,r,e,4,34028234663852886e22,-34028234663852886e22),C.write(n,r,e,t,23,4),e+4}p.prototype.writeFloatLE=function(r,e,t){return _r(this,r,e,!0,t)};p.prototype.writeFloatBE=function(r,e,t){return _r(this,r,e,!1,t)};function gr(n,r,e,t,o){return r=+r,e=e>>>0,o||sr(n,r,e,8,17976931348623157e292,-17976931348623157e292),C.write(n,r,e,t,52,8),e+8}p.prototype.writeDoubleLE=function(r,e,t){return gr(this,r,e,!0,t)};p.prototype.writeDoubleBE=function(r,e,t){return gr(this,r,e,!1,t)};p.prototype.copy=function(r,e,t,o){if(!p.isBuffer(r))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),e>=r.length&&(e=r.length),e||(e=0),o>0&&o<t&&(o=t),o===t||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),r.length-e<o-t&&(o=r.length-e+t);var i=o-t;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,t,o):Uint8Array.prototype.set.call(r,this.subarray(t,o),e),i};p.prototype.fill=function(r,e,t,o){if(typeof r=="string"){if(typeof e=="string"?(o=e,e=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!p.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(r.length===1){var i=r.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<t)throw new RangeError("Out of range index");if(t<=e)return this;e=e>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<t;++a)this[a]=r;else{var u=p.isBuffer(r)?r:p.from(r,o),c=u.length;if(c===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<t-e;++a)this[a+e]=u[a%c]}return this};var ie=/[^+/0-9A-Za-z-_]/g;function ae(n){if(n=n.split("=")[0],n=n.trim().replace(ie,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function K(n,r){r=r||1/0;for(var e,t=n.length,o=null,i=[],a=0;a<t;++a){if(e=n.charCodeAt(a),e>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===t){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=(o-55296<<10|e-56320)+65536}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function pe(n){for(var r=[],e=0;e<n.length;++e)r.push(n.charCodeAt(e)&255);return r}function ue(n,r){for(var e,t,o,i=[],a=0;a<n.length&&!((r-=2)<0);++a)e=n.charCodeAt(a),t=e>>8,o=e%256,i.push(o),i.push(t);return i}function mr(n){return J.toByteArray(ae(n))}function H(n,r,e,t){for(var o=0;o<t&&!(o+e>=r.length||o>=n.length);++o)r[o+e]=n[o];return o}function x(n,r){return n instanceof r||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===r.name}function $(n){return n!==n}var ce=function(){for(var n="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var t=e*16,o=0;o<16;++o)r[t+o]=n[e]+n[o];return r}()});var Fr=N((we,Er)=>{y();var l=Er.exports={},E,F;function P(){throw new Error("setTimeout has not been defined")}function j(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?E=setTimeout:E=P}catch(n){E=P}try{typeof clearTimeout=="function"?F=clearTimeout:F=j}catch(n){F=j}})();function yr(n){if(E===setTimeout)return setTimeout(n,0);if((E===P||!E)&&setTimeout)return E=setTimeout,setTimeout(n,0);try{return E(n,0)}catch(r){try{return E.call(null,n,0)}catch(e){return E.call(this,n,0)}}}function fe(n){if(F===clearTimeout)return clearTimeout(n);if((F===j||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(n);try{return F(n)}catch(r){try{return F.call(null,n)}catch(e){return F.call(this,n)}}}var B=[],L=!1,I,X=-1;function he(){!L||!I||(L=!1,I.length?B=I.concat(B):X=-1,B.length&&br())}function br(){if(!L){var n=yr(he);L=!0;for(var r=B.length;r;){for(I=B,B=[];++X<r;)I&&I[X].run();X=-1,r=B.length}I=null,L=!1,fe(n)}}l.nextTick=function(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];B.push(new xr(n,r)),B.length===1&&!L&&yr(br)};function xr(n,r){this.fun=n,this.array=r}xr.prototype.run=function(){this.fun.apply(null,this.array)};l.title="browser";l.browser=!0;l.env={};l.argv=[];l.version="";l.versions={};function A(){}l.on=A;l.addListener=A;l.once=A;l.off=A;l.removeListener=A;l.removeAllListeners=A;l.emit=A;l.prependListener=A;l.prependOnceListener=A;l.listeners=function(n){return[]};l.binding=function(n){throw new Error("process.binding is not supported")};l.cwd=function(){return"/"};l.chdir=function(n){throw new Error("process.chdir is not supported")};l.umask=function(){return 0}});var R,M,ye,y=Cr(()=>{R=er(wr()),M=er(Fr()),ye=function(n){function r(){var t=this||self;return delete n.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return r();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var le={};Sr(le,{css:()=>vr,default:()=>de});module.exports=Lr(le);y();var vr=`.dapp-core-component__badge__badge {
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
  .dapp-core-component__badge__badge {
    transition: none;
  }
}
a.dapp-core-component__badge__badge:hover, a.dapp-core-component__badge__badge:focus {
  text-decoration: none;
}

.dapp-core-component__badge__badge:empty {
  display: none;
}

.dapp-core-component__badge__btn .dapp-core-component__badge__badge {
  position: relative;
  top: -1px;
}

.dapp-core-component__badge__badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.dapp-core-component__badge__badge-primary {
  color: #fff;
  background-color: #007bff;
}

a.dapp-core-component__badge__badge-primary:hover, a.dapp-core-component__badge__badge-primary:focus {
  color: #fff;
  background-color: #0062cc;
}

a.dapp-core-component__badge__badge-primary:focus, a.dapp-core-component__badge__badge-primary.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.dapp-core-component__badge__badge-secondary {
  color: #fff;
  background-color: #6c757d;
}

a.dapp-core-component__badge__badge-secondary:hover, a.dapp-core-component__badge__badge-secondary:focus {
  color: #fff;
  background-color: #545b62;
}

a.dapp-core-component__badge__badge-secondary:focus, a.dapp-core-component__badge__badge-secondary.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.dapp-core-component__badge__badge-success {
  color: #fff;
  background-color: #28a745;
}

a.dapp-core-component__badge__badge-success:hover, a.dapp-core-component__badge__badge-success:focus {
  color: #fff;
  background-color: #1e7e34;
}

a.dapp-core-component__badge__badge-success:focus, a.dapp-core-component__badge__badge-success.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.dapp-core-component__badge__badge-info {
  color: #fff;
  background-color: #17a2b8;
}

a.dapp-core-component__badge__badge-info:hover, a.dapp-core-component__badge__badge-info:focus {
  color: #fff;
  background-color: #117a8b;
}

a.dapp-core-component__badge__badge-info:focus, a.dapp-core-component__badge__badge-info.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.dapp-core-component__badge__badge-warning {
  color: #212529;
  background-color: #ffc107;
}

a.dapp-core-component__badge__badge-warning:hover, a.dapp-core-component__badge__badge-warning:focus {
  color: #212529;
  background-color: #d39e00;
}

a.dapp-core-component__badge__badge-warning:focus, a.dapp-core-component__badge__badge-warning.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.dapp-core-component__badge__badge-danger {
  color: #fff;
  background-color: #dc3545;
}

a.dapp-core-component__badge__badge-danger:hover, a.dapp-core-component__badge__badge-danger:focus {
  color: #fff;
  background-color: #bd2130;
}

a.dapp-core-component__badge__badge-danger:focus, a.dapp-core-component__badge__badge-danger.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.dapp-core-component__badge__badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

a.dapp-core-component__badge__badge-light:hover, a.dapp-core-component__badge__badge-light:focus {
  color: #212529;
  background-color: #dae0e5;
}

a.dapp-core-component__badge__badge-light:focus, a.dapp-core-component__badge__badge-light.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.dapp-core-component__badge__badge-dark {
  color: #fff;
  background-color: #343a40;
}

a.dapp-core-component__badge__badge-dark:hover, a.dapp-core-component__badge__badge-dark:focus {
  color: #fff;
  background-color: #1d2124;
}

a.dapp-core-component__badge__badge-dark:focus, a.dapp-core-component__badge__badge-dark.dapp-core-component__badge__focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vr));var de={badge:"dapp-core-component__badge__badge",btn:"dapp-core-component__badge__btn","badge-pill":"dapp-core-component__badge__badge-pill",badgePill:"dapp-core-component__badge__badge-pill","badge-primary":"dapp-core-component__badge__badge-primary",badgePrimary:"dapp-core-component__badge__badge-primary",focus:"dapp-core-component__badge__focus","badge-secondary":"dapp-core-component__badge__badge-secondary",badgeSecondary:"dapp-core-component__badge__badge-secondary","badge-success":"dapp-core-component__badge__badge-success",badgeSuccess:"dapp-core-component__badge__badge-success","badge-info":"dapp-core-component__badge__badge-info",badgeInfo:"dapp-core-component__badge__badge-info","badge-warning":"dapp-core-component__badge__badge-warning",badgeWarning:"dapp-core-component__badge__badge-warning","badge-danger":"dapp-core-component__badge__badge-danger",badgeDanger:"dapp-core-component__badge__badge-danger","badge-light":"dapp-core-component__badge__badge-light",badgeLight:"dapp-core-component__badge__badge-light","badge-dark":"dapp-core-component__badge__badge-dark",badgeDark:"dapp-core-component__badge__badge-dark"};0&&(module.exports={css});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=badge.js.map
