"use strict";var DI=Object.create;var oa=Object.defineProperty,MI=Object.defineProperties,OI=Object.getOwnPropertyDescriptor,BI=Object.getOwnPropertyDescriptors,FI=Object.getOwnPropertyNames,Ii=Object.getOwnPropertySymbols,WI=Object.getPrototypeOf,tp=Object.prototype.hasOwnProperty,K_=Object.prototype.propertyIsEnumerable;var q_=(n,o,i)=>o in n?oa(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i,E=(n,o)=>{for(var i in o||(o={}))tp.call(o,i)&&q_(n,i,o[i]);if(Ii)for(var i of Ii(o))K_.call(o,i)&&q_(n,i,o[i]);return n},Z=(n,o)=>MI(n,BI(o));var bo=(n,o)=>{var i={};for(var c in n)tp.call(n,c)&&o.indexOf(c)<0&&(i[c]=n[c]);if(n!=null&&Ii)for(var c of Ii(n))o.indexOf(c)<0&&K_.call(n,c)&&(i[c]=n[c]);return i};var F=(n,o)=>()=>(n&&(o=n(n=0)),o);var W=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports),Fe=(n,o)=>{for(var i in o)oa(n,i,{get:o[i],enumerable:!0})},j_=(n,o,i,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of FI(o))!tp.call(n,l)&&l!==i&&oa(n,l,{get:()=>o[l],enumerable:!(c=OI(o,l))||c.enumerable});return n};var O=(n,o,i)=>(i=n!=null?DI(WI(n)):{},j_(o||!n||!n.__esModule?oa(i,"default",{value:n,enumerable:!0}):i,n)),Pe=n=>j_(oa({},"__esModule",{value:!0}),n);var B=(n,o,i)=>new Promise((c,l)=>{var f=x=>{try{w(i.next(x))}catch(S){l(S)}},h=x=>{try{w(i.throw(x))}catch(S){l(S)}},w=x=>x.done?c(x.value):Promise.resolve(x.value).then(f,h);w((i=i.apply(n,o)).next())});var Z_=W(Ci=>{"use strict";r();Ci.byteLength=GI;Ci.toByteArray=$I;Ci.fromByteArray=qI;var Qn=[],Un=[],UI=typeof Uint8Array!="undefined"?Uint8Array:Array,op="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(wo=0,X_=op.length;wo<X_;++wo)Qn[wo]=op[wo],Un[op.charCodeAt(wo)]=wo;var wo,X_;Un["-".charCodeAt(0)]=62;Un["_".charCodeAt(0)]=63;function Y_(n){var o=n.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=n.indexOf("=");i===-1&&(i=o);var c=i===o?0:4-i%4;return[i,c]}function GI(n){var o=Y_(n),i=o[0],c=o[1];return(i+c)*3/4-c}function HI(n,o,i){return(o+i)*3/4-i}function $I(n){var o,i=Y_(n),c=i[0],l=i[1],f=new UI(HI(n,c,l)),h=0,w=l>0?c-4:c,x;for(x=0;x<w;x+=4)o=Un[n.charCodeAt(x)]<<18|Un[n.charCodeAt(x+1)]<<12|Un[n.charCodeAt(x+2)]<<6|Un[n.charCodeAt(x+3)],f[h++]=o>>16&255,f[h++]=o>>8&255,f[h++]=o&255;return l===2&&(o=Un[n.charCodeAt(x)]<<2|Un[n.charCodeAt(x+1)]>>4,f[h++]=o&255),l===1&&(o=Un[n.charCodeAt(x)]<<10|Un[n.charCodeAt(x+1)]<<4|Un[n.charCodeAt(x+2)]>>2,f[h++]=o>>8&255,f[h++]=o&255),f}function zI(n){return Qn[n>>18&63]+Qn[n>>12&63]+Qn[n>>6&63]+Qn[n&63]}function VI(n,o,i){for(var c,l=[],f=o;f<i;f+=3)c=(n[f]<<16&16711680)+(n[f+1]<<8&65280)+(n[f+2]&255),l.push(zI(c));return l.join("")}function qI(n){for(var o,i=n.length,c=i%3,l=[],f=16383,h=0,w=i-c;h<w;h+=f)l.push(VI(n,h,h+f>w?w:h+f));return c===1?(o=n[i-1],l.push(Qn[o>>2]+Qn[o<<4&63]+"==")):c===2&&(o=(n[i-2]<<8)+n[i-1],l.push(Qn[o>>10]+Qn[o>>4&63]+Qn[o<<2&63]+"=")),l.join("")}});var J_=W(rp=>{r();rp.read=function(n,o,i,c,l){var f,h,w=l*8-c-1,x=(1<<w)-1,S=x>>1,N=-7,C=i?l-1:0,D=i?-1:1,H=n[o+C];for(C+=D,f=H&(1<<-N)-1,H>>=-N,N+=w;N>0;f=f*256+n[o+C],C+=D,N-=8);for(h=f&(1<<-N)-1,f>>=-N,N+=c;N>0;h=h*256+n[o+C],C+=D,N-=8);if(f===0)f=1-S;else{if(f===x)return h?NaN:(H?-1:1)*(1/0);h=h+Math.pow(2,c),f=f-S}return(H?-1:1)*h*Math.pow(2,f-c)};rp.write=function(n,o,i,c,l,f){var h,w,x,S=f*8-l-1,N=(1<<S)-1,C=N>>1,D=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,H=c?0:f-1,G=c?1:-1,M=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,h=N):(h=Math.floor(Math.log(o)/Math.LN2),o*(x=Math.pow(2,-h))<1&&(h--,x*=2),h+C>=1?o+=D/x:o+=D*Math.pow(2,1-C),o*x>=2&&(h++,x/=2),h+C>=N?(w=0,h=N):h+C>=1?(w=(o*x-1)*Math.pow(2,l),h=h+C):(w=o*Math.pow(2,C-1)*Math.pow(2,l),h=0));l>=8;n[i+H]=w&255,H+=G,w/=256,l-=8);for(h=h<<l|w,S+=l;S>0;n[i+H]=h&255,H+=G,h/=256,S-=8);n[i+H-G]|=M*128}});var mu=W(rr=>{"use strict";r();var ap=Z_(),or=J_(),Q_=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;rr.Buffer=L;rr.SlowBuffer=JI;rr.INSPECT_MAX_BYTES=50;var Li=2147483647;rr.kMaxLength=Li;L.TYPED_ARRAY_SUPPORT=KI();!L.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function KI(){try{var n=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(n,o),n.foo()===42}catch(i){return!1}}Object.defineProperty(L.prototype,"parent",{enumerable:!0,get:function(){if(!!L.isBuffer(this))return this.buffer}});Object.defineProperty(L.prototype,"offset",{enumerable:!0,get:function(){if(!!L.isBuffer(this))return this.byteOffset}});function At(n){if(n>Li)throw new RangeError('The value "'+n+'" is invalid for option "size"');var o=new Uint8Array(n);return Object.setPrototypeOf(o,L.prototype),o}function L(n,o,i){if(typeof n=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return pp(n)}return tu(n,o,i)}L.poolSize=8192;function tu(n,o,i){if(typeof n=="string")return XI(n,o);if(ArrayBuffer.isView(n))return YI(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(et(n,ArrayBuffer)||n&&et(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(et(n,SharedArrayBuffer)||n&&et(n.buffer,SharedArrayBuffer)))return sp(n,o,i);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=n.valueOf&&n.valueOf();if(c!=null&&c!==n)return L.from(c,o,i);var l=ZI(n);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return L.from(n[Symbol.toPrimitive]("string"),o,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}L.from=function(n,o,i){return tu(n,o,i)};Object.setPrototypeOf(L.prototype,Uint8Array.prototype);Object.setPrototypeOf(L,Uint8Array);function ou(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function jI(n,o,i){return ou(n),n<=0?At(n):o!==void 0?typeof i=="string"?At(n).fill(o,i):At(n).fill(o):At(n)}L.alloc=function(n,o,i){return jI(n,o,i)};function pp(n){return ou(n),At(n<0?0:dp(n)|0)}L.allocUnsafe=function(n){return pp(n)};L.allocUnsafeSlow=function(n){return pp(n)};function XI(n,o){if((typeof o!="string"||o==="")&&(o="utf8"),!L.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var i=ru(n,o)|0,c=At(i),l=c.write(n,o);return l!==i&&(c=c.slice(0,l)),c}function ip(n){for(var o=n.length<0?0:dp(n.length)|0,i=At(o),c=0;c<o;c+=1)i[c]=n[c]&255;return i}function YI(n){if(et(n,Uint8Array)){var o=new Uint8Array(n);return sp(o.buffer,o.byteOffset,o.byteLength)}return ip(n)}function sp(n,o,i){if(o<0||n.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<o+(i||0))throw new RangeError('"length" is outside of buffer bounds');var c;return o===void 0&&i===void 0?c=new Uint8Array(n):i===void 0?c=new Uint8Array(n,o):c=new Uint8Array(n,o,i),Object.setPrototypeOf(c,L.prototype),c}function ZI(n){if(L.isBuffer(n)){var o=dp(n.length)|0,i=At(o);return i.length===0||n.copy(i,0,0,o),i}if(n.length!==void 0)return typeof n.length!="number"||mp(n.length)?At(0):ip(n);if(n.type==="Buffer"&&Array.isArray(n.data))return ip(n.data)}function dp(n){if(n>=Li)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Li.toString(16)+" bytes");return n|0}function JI(n){return+n!=n&&(n=0),L.alloc(+n)}L.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==L.prototype};L.compare=function(o,i){if(et(o,Uint8Array)&&(o=L.from(o,o.offset,o.byteLength)),et(i,Uint8Array)&&(i=L.from(i,i.offset,i.byteLength)),!L.isBuffer(o)||!L.isBuffer(i))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===i)return 0;for(var c=o.length,l=i.length,f=0,h=Math.min(c,l);f<h;++f)if(o[f]!==i[f]){c=o[f],l=i[f];break}return c<l?-1:l<c?1:0};L.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};L.concat=function(o,i){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return L.alloc(0);var c;if(i===void 0)for(i=0,c=0;c<o.length;++c)i+=o[c].length;var l=L.allocUnsafe(i),f=0;for(c=0;c<o.length;++c){var h=o[c];if(et(h,Uint8Array))f+h.length>l.length?L.from(h).copy(l,f):Uint8Array.prototype.set.call(l,h,f);else if(L.isBuffer(h))h.copy(l,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=h.length}return l};function ru(n,o){if(L.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||et(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var i=n.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&i===0)return 0;for(var l=!1;;)switch(o){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return cp(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return du(n).length;default:if(l)return c?-1:cp(n).length;o=(""+o).toLowerCase(),l=!0}}L.byteLength=ru;function QI(n,o,i){var c=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,o>>>=0,i<=o))return"";for(n||(n="utf8");;)switch(n){case"hex":return pC(this,o,i);case"utf8":case"utf-8":return iu(this,o,i);case"ascii":return sC(this,o,i);case"latin1":case"binary":return cC(this,o,i);case"base64":return aC(this,o,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return dC(this,o,i);default:if(c)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),c=!0}}L.prototype._isBuffer=!0;function vo(n,o,i){var c=n[o];n[o]=n[i],n[i]=c}L.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var i=0;i<o;i+=2)vo(this,i,i+1);return this};L.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var i=0;i<o;i+=4)vo(this,i,i+3),vo(this,i+1,i+2);return this};L.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var i=0;i<o;i+=8)vo(this,i,i+7),vo(this,i+1,i+6),vo(this,i+2,i+5),vo(this,i+3,i+4);return this};L.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?iu(this,0,o):QI.apply(this,arguments)};L.prototype.toLocaleString=L.prototype.toString;L.prototype.equals=function(o){if(!L.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:L.compare(this,o)===0};L.prototype.inspect=function(){var o="",i=rr.INSPECT_MAX_BYTES;return o=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(o+=" ... "),"<Buffer "+o+">"};Q_&&(L.prototype[Q_]=L.prototype.inspect);L.prototype.compare=function(o,i,c,l,f){if(et(o,Uint8Array)&&(o=L.from(o,o.offset,o.byteLength)),!L.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(i===void 0&&(i=0),c===void 0&&(c=o?o.length:0),l===void 0&&(l=0),f===void 0&&(f=this.length),i<0||c>o.length||l<0||f>this.length)throw new RangeError("out of range index");if(l>=f&&i>=c)return 0;if(l>=f)return-1;if(i>=c)return 1;if(i>>>=0,c>>>=0,l>>>=0,f>>>=0,this===o)return 0;for(var h=f-l,w=c-i,x=Math.min(h,w),S=this.slice(l,f),N=o.slice(i,c),C=0;C<x;++C)if(S[C]!==N[C]){h=S[C],w=N[C];break}return h<w?-1:w<h?1:0};function au(n,o,i,c,l){if(n.length===0)return-1;if(typeof i=="string"?(c=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,mp(i)&&(i=l?0:n.length-1),i<0&&(i=n.length+i),i>=n.length){if(l)return-1;i=n.length-1}else if(i<0)if(l)i=0;else return-1;if(typeof o=="string"&&(o=L.from(o,c)),L.isBuffer(o))return o.length===0?-1:eu(n,o,i,c,l);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(n,o,i):Uint8Array.prototype.lastIndexOf.call(n,o,i):eu(n,[o],i,c,l);throw new TypeError("val must be string, number or Buffer")}function eu(n,o,i,c,l){var f=1,h=n.length,w=o.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(n.length<2||o.length<2)return-1;f=2,h/=2,w/=2,i/=2}function x(H,G){return f===1?H[G]:H.readUInt16BE(G*f)}var S;if(l){var N=-1;for(S=i;S<h;S++)if(x(n,S)===x(o,N===-1?0:S-N)){if(N===-1&&(N=S),S-N+1===w)return N*f}else N!==-1&&(S-=S-N),N=-1}else for(i+w>h&&(i=h-w),S=i;S>=0;S--){for(var C=!0,D=0;D<w;D++)if(x(n,S+D)!==x(o,D)){C=!1;break}if(C)return S}return-1}L.prototype.includes=function(o,i,c){return this.indexOf(o,i,c)!==-1};L.prototype.indexOf=function(o,i,c){return au(this,o,i,c,!0)};L.prototype.lastIndexOf=function(o,i,c){return au(this,o,i,c,!1)};function eC(n,o,i,c){i=Number(i)||0;var l=n.length-i;c?(c=Number(c),c>l&&(c=l)):c=l;var f=o.length;c>f/2&&(c=f/2);for(var h=0;h<c;++h){var w=parseInt(o.substr(h*2,2),16);if(mp(w))return h;n[i+h]=w}return h}function nC(n,o,i,c){return ki(cp(o,n.length-i),n,i,c)}function tC(n,o,i,c){return ki(_C(o),n,i,c)}function oC(n,o,i,c){return ki(du(o),n,i,c)}function rC(n,o,i,c){return ki(uC(o,n.length-i),n,i,c)}L.prototype.write=function(o,i,c,l){if(i===void 0)l="utf8",c=this.length,i=0;else if(c===void 0&&typeof i=="string")l=i,c=this.length,i=0;else if(isFinite(i))i=i>>>0,isFinite(c)?(c=c>>>0,l===void 0&&(l="utf8")):(l=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var f=this.length-i;if((c===void 0||c>f)&&(c=f),o.length>0&&(c<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");l||(l="utf8");for(var h=!1;;)switch(l){case"hex":return eC(this,o,i,c);case"utf8":case"utf-8":return nC(this,o,i,c);case"ascii":case"latin1":case"binary":return tC(this,o,i,c);case"base64":return oC(this,o,i,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rC(this,o,i,c);default:if(h)throw new TypeError("Unknown encoding: "+l);l=(""+l).toLowerCase(),h=!0}};L.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function aC(n,o,i){return o===0&&i===n.length?ap.fromByteArray(n):ap.fromByteArray(n.slice(o,i))}function iu(n,o,i){i=Math.min(n.length,i);for(var c=[],l=o;l<i;){var f=n[l],h=null,w=f>239?4:f>223?3:f>191?2:1;if(l+w<=i){var x,S,N,C;switch(w){case 1:f<128&&(h=f);break;case 2:x=n[l+1],(x&192)===128&&(C=(f&31)<<6|x&63,C>127&&(h=C));break;case 3:x=n[l+1],S=n[l+2],(x&192)===128&&(S&192)===128&&(C=(f&15)<<12|(x&63)<<6|S&63,C>2047&&(C<55296||C>57343)&&(h=C));break;case 4:x=n[l+1],S=n[l+2],N=n[l+3],(x&192)===128&&(S&192)===128&&(N&192)===128&&(C=(f&15)<<18|(x&63)<<12|(S&63)<<6|N&63,C>65535&&C<1114112&&(h=C))}}h===null?(h=65533,w=1):h>65535&&(h-=65536,c.push(h>>>10&1023|55296),h=56320|h&1023),c.push(h),l+=w}return iC(c)}var nu=4096;function iC(n){var o=n.length;if(o<=nu)return String.fromCharCode.apply(String,n);for(var i="",c=0;c<o;)i+=String.fromCharCode.apply(String,n.slice(c,c+=nu));return i}function sC(n,o,i){var c="";i=Math.min(n.length,i);for(var l=o;l<i;++l)c+=String.fromCharCode(n[l]&127);return c}function cC(n,o,i){var c="";i=Math.min(n.length,i);for(var l=o;l<i;++l)c+=String.fromCharCode(n[l]);return c}function pC(n,o,i){var c=n.length;(!o||o<0)&&(o=0),(!i||i<0||i>c)&&(i=c);for(var l="",f=o;f<i;++f)l+=gC[n[f]];return l}function dC(n,o,i){for(var c=n.slice(o,i),l="",f=0;f<c.length-1;f+=2)l+=String.fromCharCode(c[f]+c[f+1]*256);return l}L.prototype.slice=function(o,i){var c=this.length;o=~~o,i=i===void 0?c:~~i,o<0?(o+=c,o<0&&(o=0)):o>c&&(o=c),i<0?(i+=c,i<0&&(i=0)):i>c&&(i=c),i<o&&(i=o);var l=this.subarray(o,i);return Object.setPrototypeOf(l,L.prototype),l};function je(n,o,i){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+o>i)throw new RangeError("Trying to access beyond buffer length")}L.prototype.readUintLE=L.prototype.readUIntLE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=this[o],f=1,h=0;++h<i&&(f*=256);)l+=this[o+h]*f;return l};L.prototype.readUintBE=L.prototype.readUIntBE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=this[o+--i],f=1;i>0&&(f*=256);)l+=this[o+--i]*f;return l};L.prototype.readUint8=L.prototype.readUInt8=function(o,i){return o=o>>>0,i||je(o,1,this.length),this[o]};L.prototype.readUint16LE=L.prototype.readUInt16LE=function(o,i){return o=o>>>0,i||je(o,2,this.length),this[o]|this[o+1]<<8};L.prototype.readUint16BE=L.prototype.readUInt16BE=function(o,i){return o=o>>>0,i||je(o,2,this.length),this[o]<<8|this[o+1]};L.prototype.readUint32LE=L.prototype.readUInt32LE=function(o,i){return o=o>>>0,i||je(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};L.prototype.readUint32BE=L.prototype.readUInt32BE=function(o,i){return o=o>>>0,i||je(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};L.prototype.readIntLE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=this[o],f=1,h=0;++h<i&&(f*=256);)l+=this[o+h]*f;return f*=128,l>=f&&(l-=Math.pow(2,8*i)),l};L.prototype.readIntBE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=i,f=1,h=this[o+--l];l>0&&(f*=256);)h+=this[o+--l]*f;return f*=128,h>=f&&(h-=Math.pow(2,8*i)),h};L.prototype.readInt8=function(o,i){return o=o>>>0,i||je(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};L.prototype.readInt16LE=function(o,i){o=o>>>0,i||je(o,2,this.length);var c=this[o]|this[o+1]<<8;return c&32768?c|4294901760:c};L.prototype.readInt16BE=function(o,i){o=o>>>0,i||je(o,2,this.length);var c=this[o+1]|this[o]<<8;return c&32768?c|4294901760:c};L.prototype.readInt32LE=function(o,i){return o=o>>>0,i||je(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};L.prototype.readInt32BE=function(o,i){return o=o>>>0,i||je(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};L.prototype.readFloatLE=function(o,i){return o=o>>>0,i||je(o,4,this.length),or.read(this,o,!0,23,4)};L.prototype.readFloatBE=function(o,i){return o=o>>>0,i||je(o,4,this.length),or.read(this,o,!1,23,4)};L.prototype.readDoubleLE=function(o,i){return o=o>>>0,i||je(o,8,this.length),or.read(this,o,!0,52,8)};L.prototype.readDoubleBE=function(o,i){return o=o>>>0,i||je(o,8,this.length),or.read(this,o,!1,52,8)};function fn(n,o,i,c,l,f){if(!L.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>l||o<f)throw new RangeError('"value" argument is out of bounds');if(i+c>n.length)throw new RangeError("Index out of range")}L.prototype.writeUintLE=L.prototype.writeUIntLE=function(o,i,c,l){if(o=+o,i=i>>>0,c=c>>>0,!l){var f=Math.pow(2,8*c)-1;fn(this,o,i,c,f,0)}var h=1,w=0;for(this[i]=o&255;++w<c&&(h*=256);)this[i+w]=o/h&255;return i+c};L.prototype.writeUintBE=L.prototype.writeUIntBE=function(o,i,c,l){if(o=+o,i=i>>>0,c=c>>>0,!l){var f=Math.pow(2,8*c)-1;fn(this,o,i,c,f,0)}var h=c-1,w=1;for(this[i+h]=o&255;--h>=0&&(w*=256);)this[i+h]=o/w&255;return i+c};L.prototype.writeUint8=L.prototype.writeUInt8=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,1,255,0),this[i]=o&255,i+1};L.prototype.writeUint16LE=L.prototype.writeUInt16LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,65535,0),this[i]=o&255,this[i+1]=o>>>8,i+2};L.prototype.writeUint16BE=L.prototype.writeUInt16BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,65535,0),this[i]=o>>>8,this[i+1]=o&255,i+2};L.prototype.writeUint32LE=L.prototype.writeUInt32LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,4294967295,0),this[i+3]=o>>>24,this[i+2]=o>>>16,this[i+1]=o>>>8,this[i]=o&255,i+4};L.prototype.writeUint32BE=L.prototype.writeUInt32BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,4294967295,0),this[i]=o>>>24,this[i+1]=o>>>16,this[i+2]=o>>>8,this[i+3]=o&255,i+4};L.prototype.writeIntLE=function(o,i,c,l){if(o=+o,i=i>>>0,!l){var f=Math.pow(2,8*c-1);fn(this,o,i,c,f-1,-f)}var h=0,w=1,x=0;for(this[i]=o&255;++h<c&&(w*=256);)o<0&&x===0&&this[i+h-1]!==0&&(x=1),this[i+h]=(o/w>>0)-x&255;return i+c};L.prototype.writeIntBE=function(o,i,c,l){if(o=+o,i=i>>>0,!l){var f=Math.pow(2,8*c-1);fn(this,o,i,c,f-1,-f)}var h=c-1,w=1,x=0;for(this[i+h]=o&255;--h>=0&&(w*=256);)o<0&&x===0&&this[i+h+1]!==0&&(x=1),this[i+h]=(o/w>>0)-x&255;return i+c};L.prototype.writeInt8=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,1,127,-128),o<0&&(o=255+o+1),this[i]=o&255,i+1};L.prototype.writeInt16LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,32767,-32768),this[i]=o&255,this[i+1]=o>>>8,i+2};L.prototype.writeInt16BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,32767,-32768),this[i]=o>>>8,this[i+1]=o&255,i+2};L.prototype.writeInt32LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,2147483647,-2147483648),this[i]=o&255,this[i+1]=o>>>8,this[i+2]=o>>>16,this[i+3]=o>>>24,i+4};L.prototype.writeInt32BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[i]=o>>>24,this[i+1]=o>>>16,this[i+2]=o>>>8,this[i+3]=o&255,i+4};function su(n,o,i,c,l,f){if(i+c>n.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function cu(n,o,i,c,l){return o=+o,i=i>>>0,l||su(n,o,i,4,34028234663852886e22,-34028234663852886e22),or.write(n,o,i,c,23,4),i+4}L.prototype.writeFloatLE=function(o,i,c){return cu(this,o,i,!0,c)};L.prototype.writeFloatBE=function(o,i,c){return cu(this,o,i,!1,c)};function pu(n,o,i,c,l){return o=+o,i=i>>>0,l||su(n,o,i,8,17976931348623157e292,-17976931348623157e292),or.write(n,o,i,c,52,8),i+8}L.prototype.writeDoubleLE=function(o,i,c){return pu(this,o,i,!0,c)};L.prototype.writeDoubleBE=function(o,i,c){return pu(this,o,i,!1,c)};L.prototype.copy=function(o,i,c,l){if(!L.isBuffer(o))throw new TypeError("argument should be a Buffer");if(c||(c=0),!l&&l!==0&&(l=this.length),i>=o.length&&(i=o.length),i||(i=0),l>0&&l<c&&(l=c),l===c||o.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(l<0)throw new RangeError("sourceEnd out of bounds");l>this.length&&(l=this.length),o.length-i<l-c&&(l=o.length-i+c);var f=l-c;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(i,c,l):Uint8Array.prototype.set.call(o,this.subarray(c,l),i),f};L.prototype.fill=function(o,i,c,l){if(typeof o=="string"){if(typeof i=="string"?(l=i,i=0,c=this.length):typeof c=="string"&&(l=c,c=this.length),l!==void 0&&typeof l!="string")throw new TypeError("encoding must be a string");if(typeof l=="string"&&!L.isEncoding(l))throw new TypeError("Unknown encoding: "+l);if(o.length===1){var f=o.charCodeAt(0);(l==="utf8"&&f<128||l==="latin1")&&(o=f)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(i<0||this.length<i||this.length<c)throw new RangeError("Out of range index");if(c<=i)return this;i=i>>>0,c=c===void 0?this.length:c>>>0,o||(o=0);var h;if(typeof o=="number")for(h=i;h<c;++h)this[h]=o;else{var w=L.isBuffer(o)?o:L.from(o,l),x=w.length;if(x===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(h=0;h<c-i;++h)this[h+i]=w[h%x]}return this};var mC=/[^+/0-9A-Za-z-_]/g;function lC(n){if(n=n.split("=")[0],n=n.trim().replace(mC,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function cp(n,o){o=o||1/0;for(var i,c=n.length,l=null,f=[],h=0;h<c;++h){if(i=n.charCodeAt(h),i>55295&&i<57344){if(!l){if(i>56319){(o-=3)>-1&&f.push(239,191,189);continue}else if(h+1===c){(o-=3)>-1&&f.push(239,191,189);continue}l=i;continue}if(i<56320){(o-=3)>-1&&f.push(239,191,189),l=i;continue}i=(l-55296<<10|i-56320)+65536}else l&&(o-=3)>-1&&f.push(239,191,189);if(l=null,i<128){if((o-=1)<0)break;f.push(i)}else if(i<2048){if((o-=2)<0)break;f.push(i>>6|192,i&63|128)}else if(i<65536){if((o-=3)<0)break;f.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((o-=4)<0)break;f.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return f}function _C(n){for(var o=[],i=0;i<n.length;++i)o.push(n.charCodeAt(i)&255);return o}function uC(n,o){for(var i,c,l,f=[],h=0;h<n.length&&!((o-=2)<0);++h)i=n.charCodeAt(h),c=i>>8,l=i%256,f.push(l),f.push(c);return f}function du(n){return ap.toByteArray(lC(n))}function ki(n,o,i,c){for(var l=0;l<c&&!(l+i>=o.length||l>=n.length);++l)o[l+i]=n[l];return l}function et(n,o){return n instanceof o||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===o.name}function mp(n){return n!==n}var gC=function(){for(var n="0123456789abcdef",o=new Array(256),i=0;i<16;++i)for(var c=i*16,l=0;l<16;++l)o[c+l]=n[i]+n[l];return o}()});var fu=W((lD,gu)=>{r();var We=gu.exports={},nt,tt;function lp(){throw new Error("setTimeout has not been defined")}function _p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?nt=setTimeout:nt=lp}catch(n){nt=lp}try{typeof clearTimeout=="function"?tt=clearTimeout:tt=_p}catch(n){tt=_p}})();function lu(n){if(nt===setTimeout)return setTimeout(n,0);if((nt===lp||!nt)&&setTimeout)return nt=setTimeout,setTimeout(n,0);try{return nt(n,0)}catch(o){try{return nt.call(null,n,0)}catch(i){return nt.call(this,n,0)}}}function fC(n){if(tt===clearTimeout)return clearTimeout(n);if((tt===_p||!tt)&&clearTimeout)return tt=clearTimeout,clearTimeout(n);try{return tt(n)}catch(o){try{return tt.call(null,n)}catch(i){return tt.call(this,n)}}}var It=[],ar=!1,Ao,Pi=-1;function hC(){!ar||!Ao||(ar=!1,Ao.length?It=Ao.concat(It):Pi=-1,It.length&&_u())}function _u(){if(!ar){var n=lu(hC);ar=!0;for(var o=It.length;o;){for(Ao=It,It=[];++Pi<o;)Ao&&Ao[Pi].run();Pi=-1,o=It.length}Ao=null,ar=!1,fC(n)}}We.nextTick=function(n){var o=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)o[i-1]=arguments[i];It.push(new uu(n,o)),It.length===1&&!ar&&lu(_u)};function uu(n,o){this.fun=n,this.array=o}uu.prototype.run=function(){this.fun.apply(null,this.array)};We.title="browser";We.browser=!0;We.env={};We.argv=[];We.version="";We.versions={};function Ct(){}We.on=Ct;We.addListener=Ct;We.once=Ct;We.off=Ct;We.removeListener=Ct;We.removeAllListeners=Ct;We.emit=Ct;We.prependListener=Ct;We.prependOnceListener=Ct;We.listeners=function(n){return[]};We.binding=function(n){throw new Error("process.binding is not supported")};We.cwd=function(){return"/"};We.chdir=function(n){throw new Error("process.chdir is not supported")};We.umask=function(){return 0}});var d,m,TC,p,r=F(()=>{d=O(mu()),m=O(fu()),TC=function(n){function o(){var c=this||self;return delete n.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return o();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:o});var i=__magic__;return i}(Object),p=TC});var hu=F(()=>{"use strict";r()});var Lt,ot=F(()=>{"use strict";r();Lt="Action not allowed. User is logged in. Call logout() first"});var Tu=F(()=>{"use strict";r()});var up,xu=F(()=>{"use strict";r();up=(c=>(c.SetGuardian="SetGuardian",c.GuardAccount="GuardAccount",c.UnGuardAccount="UnGuardAccount",c))(up||{})});var gp,fp,hp,Tp,xp,yp,yu=F(()=>{"use strict";r();gp="1.0.8",fp="1.0.11",hp="1.0.15",Tp="1.0.17",xp="1.0.22",yp="1.0.23"});var Sp,bp=F(()=>{"use strict";r();Sp={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var Su=F(()=>{"use strict";r()});var wp=F(()=>{"use strict";r()});var bu=F(()=>{"use strict";r()});var wu=F(()=>{"use strict";r()});var Jt,ir,Qt=F(()=>{"use strict";r();Jt=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),ir=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Ge,vu,vD,Au,AD,Ie=F(()=>{"use strict";r();Qt();Ge=(D=>(D.ledger="ledger",D.walletconnect="walletconnect",D.walletconnectv2="walletconnectv2",D.wallet="wallet",D.crossWindow="crossWindow",D.iframe="iframe",D.extension="extension",D.passkey="passkey",D.metamask="metamask",D.opera="opera",D.extra="extra",D.none="",D))(Ge||{}),vu=(i=>(i.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",i.reloginRequest="RELOGIN_REQUEST",i))(vu||{}),vD=E(E({},ir.WindowProviderRequestEnums),vu),Au=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Au||{}),AD=E(E({},ir.WindowProviderResponseEnums),Au)});var Iu=F(()=>{"use strict";r()});var Cu=F(()=>{"use strict";r()});var hn=F(()=>{"use strict";r()});var Lu=F(()=>{"use strict";r()});var ku=F(()=>{"use strict";r()});var Pu=F(()=>{"use strict";r()});var Ue=F(()=>{"use strict";r();wp();bu();wu();Ie();Iu();Cu();hn();Lu();ku();Pu()});var sr,Eu,HD,Nu,$D,Ru,zD,VD,xC,Du,cr=F(()=>{"use strict";r();Ue();sr={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Eu,egldLabel:HD}=sr["devnet"],{chainId:Nu,egldLabel:$D}=sr["testnet"],{chainId:Ru,egldLabel:zD}=sr["mainnet"],VD={["devnet"]:Eu,["testnet"]:Nu,["mainnet"]:Ru},xC={[Eu]:"devnet",[Nu]:"testnet",[Ru]:"mainnet"},Du="multiversx://"});var Ei=F(()=>{"use strict";r()});var rt,Mu=F(()=>{"use strict";r();rt=require("@multiversx/sdk-web-wallet-provider")});var jn,ra=F(()=>{"use strict";r();jn=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ou,Bu,vp,ZD,JD,Ap=F(()=>{"use strict";r();ra();vp=String((Bu=(Ou=jn.safeWindow)==null?void 0:Ou.navigator)==null?void 0:Bu.userAgent),ZD=/^((?!chrome|android).)*safari/i.test(vp),JD=/firefox/i.test(vp)&&/windows/i.test(vp)});var Ni,Ri,kn,Io,Fu,Wu,Di,Uu,at,pr,te=F(()=>{"use strict";r();hu();ot();Tu();xu();yu();bp();Su();cr();Ei();Mu();Ap();Ni=5e4,Ri=1e9,kn=18,Io=4,Fu=1,Wu=1,Di="logout",Uu="login",at="0",pr="..."});var dr,Mi=F(()=>{"use strict";r();dr=()=>Date.now()/1e3});var Gu=F(()=>{"use strict";r()});var Hu=F(()=>{"use strict";r()});var Ip=F(()=>{"use strict";r();Mi();Gu();Hu()});var Cp={};Fe(Cp,{clear:()=>wC,getItem:()=>SC,localStorageKeys:()=>eo,removeItem:()=>bC,setItem:()=>yC});var eo,Oi,yC,SC,bC,wC,mr=F(()=>{"use strict";r();Ip();eo={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Oi=typeof localStorage!="undefined",yC=({key:n,data:o,expires:i})=>{!Oi||localStorage.setItem(String(n),JSON.stringify({expires:i,data:o}))},SC=n=>{if(!Oi)return;let o=localStorage.getItem(String(n));if(!o)return null;let i=JSON.parse(o);return!i||!i.hasOwnProperty("expires")||!i.hasOwnProperty("data")?null:dr()>=i.expires?(localStorage.removeItem(String(n)),null):i.data},bC=n=>{!Oi||localStorage.removeItem(String(n))},wC=()=>{!Oi||localStorage.clear()}});var Lp={};Fe(Lp,{clear:()=>qu,getItem:()=>zu,removeItem:()=>Vu,setItem:()=>$u,storage:()=>vC});var $u,zu,Vu,qu,vC,Ku=F(()=>{"use strict";r();$u=({key:n,data:o,expires:i})=>{sessionStorage.setItem(String(n),JSON.stringify({expires:i,data:o}))},zu=n=>{let o=sessionStorage.getItem(String(n));if(!o)return null;let i=JSON.parse(o);return!i||!i.hasOwnProperty("expires")||!i.hasOwnProperty("data")?null:Date.now()>=i.expires?(sessionStorage.removeItem(String(n)),null):i.data},Vu=n=>sessionStorage.removeItem(String(n)),qu=()=>sessionStorage.clear(),vC={setItem:$u,getItem:zu,removeItem:Vu,clear:qu}});var Co,lr=F(()=>{"use strict";r();mr();Ku();Co={session:Lp,local:Cp}});var kp,Ee,pn,Ne=F(()=>{"use strict";r();kp=require("@reduxjs/toolkit");te();Ee=(0,kp.createAction)(Di),pn=(0,kp.createAction)(Uu,n=>({payload:n}))});var Ep,ju,Xu,Bi,Pp,Yu,Fi,AC,Np,k5,Rp,Zu,P5,E5,N5,IC,CC,Wi,Ui=F(()=>{"use strict";r();Ep=require("@multiversx/sdk-core"),ju=require("@reduxjs/toolkit"),Xu=require("redux-persist");te();lr();mr();Ne();Bi={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:at},Pp={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Bi},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Yu=(0,ju.createSlice)({name:"accountInfoSlice",initialState:Pp,reducers:{setAddress:(n,o)=>{let i=o.payload;n.address=i,n.publicKey=i?new Ep.Address(i).hex():""},setAccount:(n,o)=>{let i=n.address===o.payload.address;n.accounts={[n.address]:i?o.payload:Bi},n.shard=o.payload.shard,n.isAccountLoading=!1,n.accountLoadingError=null},setAccountNonce:(n,o)=>{let{address:i}=n;n.accounts[i].nonce=o.payload},setAccountShard:(n,o)=>{n.shard=o.payload},setLedgerAccount:(n,o)=>{n.ledgerAccount=o.payload},updateLedgerAccount:(n,o)=>{n.ledgerAccount!=null&&(n.ledgerAccount.index=o.payload.index,n.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(n,o)=>{n.walletConnectAccount=o.payload},setIsAccountLoading:(n,o)=>{n.isAccountLoading=o.payload,n.accountLoadingError=null},setAccountLoadingError:(n,o)=>{n.accountLoadingError=o.payload,n.isAccountLoading=!1},setWebsocketEvent:(n,o)=>{n.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(n,o)=>{n.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:n=>{n.addCase(Ee,()=>(Co.local.removeItem(eo.loginExpiresAt),Pp)),n.addCase(pn,(o,i)=>{let{address:c}=i.payload;o.address=c,o.publicKey=new Ep.Address(c).hex()}),n.addCase(Xu.REHYDRATE,(o,i)=>{var S;if(!((S=i.payload)!=null&&S.account))return;let{account:c}=i.payload,{address:l,shard:f,accounts:h,publicKey:w}=c;o.address=l,o.shard=f;let x=h&&l in h;o.accounts=x?h:Pp.accounts,o.publicKey=w})}}),{setAccount:Fi,setAddress:AC,setAccountNonce:Np,setAccountShard:k5,setLedgerAccount:Rp,updateLedgerAccount:Zu,setWalletConnectAccount:P5,setIsAccountLoading:E5,setAccountLoadingError:N5,setWebsocketEvent:IC,setWebsocketBatchEvent:CC}=Yu.actions,Wi=Yu.reducer});function aa(){return new Date().setHours(new Date().getHours()+24)}function ia(n){Co.local.setItem({key:eo.loginExpiresAt,data:n,expires:n})}var Dp=F(()=>{"use strict";r();lr();mr()});var Qu,Ju,eg,H5,LC,ng,sa,$5,kC,tg,z5,V5,q5,Gi,Hi=F(()=>{"use strict";r();Qu=require("@reduxjs/toolkit");Dp();Ie();Ne();Ju={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},eg=(0,Qu.createSlice)({name:"loginInfoSlice",initialState:Ju,reducers:{setLoginMethod:(n,o)=>{n.loginMethod=o.payload},setTokenLogin:(n,o)=>{n.tokenLogin=o.payload},setTokenLoginSignature:(n,o)=>{(n==null?void 0:n.tokenLogin)!=null&&(n.tokenLogin.signature=o.payload)},setWalletLogin:(n,o)=>{n.walletLogin=o.payload},setWalletConnectLogin:(n,o)=>{n.walletConnectLogin=o.payload},setLedgerLogin:(n,o)=>{n.ledgerLogin=o.payload},setWebviewLogin:(n,o)=>{n.webviewLogin=o.payload},invalidateLoginSession:n=>{n.isLoginSessionInvalid=!0},setLogoutRoute:(n,o)=>{n.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(n,o)=>{n.isWalletConnectV2Initialized=o.payload}},extraReducers:n=>{n.addCase(Ee,()=>Ju),n.addCase(pn,(o,i)=>{o.isLoginSessionInvalid=!1,o.loginMethod=i.payload.loginMethod,o.iframeLoginType=i.payload.iframeLoginType,ia(aa())})}}),{setLoginMethod:H5,setWalletConnectLogin:LC,setLedgerLogin:ng,setTokenLogin:sa,setTokenLoginSignature:$5,setWalletLogin:kC,invalidateLoginSession:tg,setLogoutRoute:z5,setIsWalletConnectV2Initialized:V5,setWebviewLogin:q5}=eg.actions,Gi=eg.reducer});var rg,og,ag,Y5,PC,Z5,EC,$i,zi=F(()=>{"use strict";r();rg=require("@reduxjs/toolkit");Ne();og={},ag=(0,rg.createSlice)({name:"modalsSlice",initialState:og,reducers:{setTxSubmittedModal:(n,o)=>{n.txSubmittedModal=o.payload},setNotificationModal:(n,o)=>{n.notificationModal=o.payload},clearTxSubmittedModal:n=>{n.txSubmittedModal=void 0},clearNotificationModal:n=>{n.notificationModal=void 0}},extraReducers:n=>{n.addCase(Ee,()=>og)}}),{setTxSubmittedModal:Y5,setNotificationModal:PC,clearTxSubmittedModal:Z5,clearNotificationModal:EC}=ag.actions,$i=ag.reducer});var Lo,_r=F(()=>{"use strict";r();Lo=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Re,Je=F(()=>{"use strict";r();_r();Re=()=>{if(!Lo())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:i,origin:c,href:l,search:f}}=window;return{pathname:o,hash:i,origin:c,href:l,search:f}}});var ig=F(()=>{"use strict";r();Je()});var sg=F(()=>{"use strict";r();Qe()});var cg,pg=F(()=>{"use strict";r();ra();cg=n=>{if(!jn.safeWindow.location)return;if(!new URL(jn.safeWindow.location.href).protocol.startsWith("http"))return jn.safeWindow.location.reload();jn.safeWindow.location.assign(n)}});var Qe=F(()=>{"use strict";r();ig();sg();Je();pg()});var NC,Vi,ca=F(()=>{"use strict";r();Qe();NC=!1,Vi=({timeout:n=0,url:o})=>{NC||setTimeout(()=>{if(!!window)return cg(o)},n)}});function kt({callbackRoute:n,onLoginRedirect:o,options:i}){let c=Boolean(n),l=typeof o=="function";if(c&&n!=null){if(l)return o(n,i);Vi({url:n,timeout:RC})}}var RC,dg=F(()=>{"use strict";r();ca();RC=200});function mg(n){return n[Math.floor(Math.random()*n.length)]}var lg=F(()=>{"use strict";r()});function Mp(n){let o=null;if((n==null?void 0:n.statusCode)in Sp){let i=n==null?void 0:n.statusCode,{message:c}=Sp[i];o=OC.includes(i)?_g:c}return{errorMessage:o,defaultErrorMessage:_g}}var _g,DC,MC,OC,Op=F(()=>{"use strict";r();bp();_g="Check if the MultiversX app is open on Ledger",DC=28161,MC=28160,OC=[DC,MC]});var Pt=F(()=>{"use strict";r();dg();lg();Op()});var ug,gg,fg,Bp,FC,hg,LM,kM,WC,qi,Ki=F(()=>{"use strict";r();ug=require("@reduxjs/toolkit"),gg=O(require("lodash.omit")),fg=require("redux-persist");Ei();Ne();Pt();Bp={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},FC={network:Bp},hg=(0,ug.createSlice)({name:"appConfig",initialState:FC,reducers:{initializeNetworkConfig:(n,o)=>{let i=mg(o.payload.walletConnectV2RelayAddresses),c=(0,gg.default)(o.payload,"walletConnectV2RelayAddresses");n.network=Z(E(E({},n.network),c),{walletConnectV2RelayAddress:i})},updateNetworkConfig:(n,o)=>{n.network=E(E({},n.network),o.payload)},setCustomWalletAddress:(n,o)=>{n.network.customWalletAddress=o.payload}},extraReducers:n=>{n.addCase(Ee,o=>{o.network.customWalletAddress=void 0}),n.addCase(fg.REHYDRATE,(o,i)=>{var l,f;if(!((f=(l=i.payload)==null?void 0:l.network)!=null&&f.customWalletAddress))return;let{network:{customWalletAddress:c}}=i.payload;o.network.customWalletAddress=c})}}),{initializeNetworkConfig:LM,updateNetworkConfig:kM,setCustomWalletAddress:WC}=hg.actions,qi=hg.reducer});var Tg,Fp,xg,MM,OM,BM,ji,Xi=F(()=>{"use strict";r();Tg=require("@reduxjs/toolkit");Ue();Ne();Fp={isSigning:!1,signedSessions:{}},xg=(0,Tg.createSlice)({name:"signedMessageInfoSliceState",initialState:Fp,reducers:{setSignSession:(n,o)=>{let{sessionId:i,signedSession:c,errorMessage:l}=o.payload;l&&(n.errorMessage=l),n.isSigning=c.status==="pending",n.signedSessions[i]=E(E({},n.signedSessions[i]),c)},setSignSessionState:(n,o)=>E(E({},n),o.payload),clearSignedMessageInfo:()=>Fp},extraReducers:n=>{n.addCase(Ee,()=>Fp)}}),{setSignSession:MM,clearSignedMessageInfo:OM,setSignSessionState:BM}=xg.actions,ji=xg.reducer});var Sg,bg,yg,wg,UC,GC,zM,HC,Yi,Zi=F(()=>{"use strict";r();Sg=require("@reduxjs/toolkit"),bg=require("redux-persist");Ue();Mi();Ne();yg={customToasts:[],transactionToasts:[]},wg=(0,Sg.createSlice)({name:"toastsSlice",initialState:yg,reducers:{addCustomToast:(n,o)=>{let i=o.payload.toastId||`custom-toast-${n.customToasts.length+1}`,c=n.customToasts.findIndex(l=>l.toastId===i);if(c!==-1){n.customToasts[c]=Z(E(E({},n.customToasts[c]),o.payload),{type:"custom",toastId:i});return}n.customToasts.push(Z(E({},o.payload),{type:"custom",toastId:i}))},removeCustomToast:(n,o)=>{n.customToasts=n.customToasts.filter(i=>i.toastId!==o.payload)},addTransactionToast:(n,o)=>{n.transactionToasts.push({type:"transaction",startTimestamp:dr(),toastId:o.payload||`custom-toast-${n.transactionToasts.length+1}`})},removeTransactionToast:(n,o)=>{n.transactionToasts=n.transactionToasts.filter(i=>i.toastId!==o.payload)}},extraReducers:n=>{n.addCase(Ee,()=>yg),n.addCase(bg.REHYDRATE,(o,i)=>{var l,f;let c=(f=(l=i.customToasts)==null?void 0:l.filter(h=>!("component"in h)))!=null?f:[];o.customToasts=c})}}),{addCustomToast:UC,removeCustomToast:GC,addTransactionToast:zM,removeTransactionToast:HC}=wg.actions,Yi=wg.reducer});var vg,Up,Gp,Hp,$C,Wp,Ag,jM,zC,$p,Ji,Qi=F(()=>{"use strict";r();vg=require("@reduxjs/toolkit");Ne();Up="Transaction failed",Gp="Transaction successful",Hp="Processing transaction",$C="Transaction submitted",Wp={},Ag=(0,vg.createSlice)({name:"transactionsInfo",initialState:Wp,reducers:{setTransactionsDisplayInfo(n,o){let{sessionId:i,transactionsDisplayInfo:c}=o.payload;i!=null&&(n[i]={errorMessage:(c==null?void 0:c.errorMessage)||Up,successMessage:(c==null?void 0:c.successMessage)||Gp,processingMessage:(c==null?void 0:c.processingMessage)||Hp,submittedMessage:(c==null?void 0:c.submittedMessage)||$C,transactionDuration:c==null?void 0:c.transactionDuration})},clearTransactionsInfoForSessionId(n,o){o.payload!=null&&delete n[o.payload]},clearTransactionsInfo:()=>Wp},extraReducers:n=>{n.addCase(Ee,()=>Wp)}}),{clearTransactionsInfo:jM,setTransactionsDisplayInfo:zC,clearTransactionsInfoForSessionId:$p}=Ag.actions,Ji=Ag.reducer});function gr(n){return n!=null&&(eL(n)||aL(n))}function fr(n){return n!=null&&(nL(n)||iL(n))}function hr(n){return n!=null&&(tL(n)||sL(n))}function Ig(n){return n!=null&&(oL(n)||cL(n))}function zp(n){return n!=null&&rL(n)}function eL(n){return n!=null&&VC.includes(n)}function nL(n){return n!=null&&qC.includes(n)}function tL(n){return n!=null&&KC.includes(n)}function oL(n){return n!=null&&jC.includes(n)}function rL(n){return n!=null&&XC.includes(n)}function aL(n){return n!=null&&YC.includes(n)}function iL(n){return n!=null&&ZC.includes(n)}function sL(n){return n!=null&&JC.includes(n)}function cL(n){return n!=null&&QC.includes(n)}var VC,qC,KC,jC,XC,YC,ZC,JC,QC,Tr=F(()=>{"use strict";r();Ie();VC=["sent"],qC=["success"],KC=["fail","cancelled","timedOut"],jC=["invalid"],XC=["timedOut"],YC=["pending"],ZC=["success"],JC=["fail","invalid"],QC=["not executed"]});var Cg,Lg,pa,pL,kg,Pg,Eg,dL,es,mL,lL,o6,_L,da,Vp,r6,ns,ts=F(()=>{"use strict";r();Cg=require("@reduxjs/toolkit"),Lg=require("redux-persist");Ie();Tr();Ne();pa={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},pL={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},kg=(0,Cg.createSlice)({name:"transactionsSlice",initialState:pa,reducers:{moveTransactionsToSignedState:(n,o)=>{var x,S;let{sessionId:i,transactions:c,errorMessage:l,status:f,redirectRoute:h,customTransactionInformation:w}=o.payload;n.customTransactionInformationForSessionId[i]=E(E(E({},pL),((x=n.signedTransactions[i])==null?void 0:x.customTransactionInformation)||{}),n.customTransactionInformationForSessionId[i]||{}),n.signedTransactions[i]={transactions:c,status:f,errorMessage:l,redirectRoute:h,customTransactionInformation:E(E({},n.customTransactionInformationForSessionId[i]),w!=null?w:{})},((S=n==null?void 0:n.transactionsToSign)==null?void 0:S.sessionId)===i&&(n.transactionsToSign=pa.transactionsToSign)},clearSignedTransaction:(n,o)=>{n.signedTransactions[o.payload]&&delete n.signedTransactions[o.payload]},clearTransactionToSign:n=>{n!=null&&n.transactionsToSign&&(n.transactionsToSign=null)},updateSignedTransaction:(n,o)=>{n.signedTransactions=E(E({},n.signedTransactions),o.payload)},updateSignedTransactions:(n,o)=>{let{sessionId:i,status:c,errorMessage:l,transactions:f}=o.payload;n.signedTransactions[i]!=null&&(n.signedTransactions[i].status=c,l!=null&&(n.signedTransactions[i].errorMessage=l),f!=null&&(n.signedTransactions[i].transactions=f))},updateSignedTransactionStatus:(n,o)=>{var S,N,C,D,H,G,M,X;let{sessionId:i,status:c,errorMessage:l,transactionHash:f,serverTransaction:h,inTransit:w}=o.payload,x=(N=(S=n.signedTransactions)==null?void 0:S[i])==null?void 0:N.transactions;if(x!=null){n.signedTransactions[i].transactions=x.map(Y=>Y.hash===f?Z(E(E({},h!=null?h:{}),Y),{status:c,errorMessage:l,inTransit:w}):Y);let J=(D=(C=n.signedTransactions[i])==null?void 0:C.transactions)==null?void 0:D.every(Y=>fr(Y.status)),ce=(G=(H=n.signedTransactions[i])==null?void 0:H.transactions)==null?void 0:G.some(Y=>hr(Y.status)),ie=(X=(M=n.signedTransactions[i])==null?void 0:M.transactions)==null?void 0:X.every(Y=>Ig(Y.status));J&&(n.signedTransactions[i].status="success"),ce&&(n.signedTransactions[i].status="fail"),ie&&(n.signedTransactions[i].status="invalid")}},setTransactionsToSign:(n,o)=>{n.transactionsToSign=o.payload;let{sessionId:i,customTransactionInformation:c}=o.payload;n.customTransactionInformationForSessionId[i]=c,n.signTransactionsError=null},clearAllTransactionsToSign:n=>{n.transactionsToSign=pa.transactionsToSign,n.signTransactionsError=null},clearAllSignedTransactions:n=>{n.signedTransactions=pa.signedTransactions},setSignTransactionsError:(n,o)=>{n.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(n,o)=>{n.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(n,o)=>{let{sessionId:i,customTransactionInformationOverrides:c}=o.payload;n.signedTransactions[i]!=null&&(n.signedTransactions[i].customTransactionInformation=E(E({},n.signedTransactions[i].customTransactionInformation),c))}},extraReducers:n=>{n.addCase(Ee,()=>pa),n.addCase(Lg.REHYDRATE,(o,i)=>{var h;if(o.signTransactionsCancelMessage=null,!((h=i.payload)!=null&&h.transactions))return;let{signedTransactions:c,customTransactionInformationForSessionId:l}=i.payload.transactions,f=Object.entries(c).reduce((w,[x,S])=>{let N=new Date(x),C=new Date;return C.setHours(C.getHours()+5),C-N>0||(w[x]=S),w},{});l!=null&&(o.customTransactionInformationForSessionId=l),c!=null&&(o.signedTransactions=f)})}}),{updateSignedTransactionStatus:Pg,updateSignedTransactions:Eg,setTransactionsToSign:dL,clearAllTransactionsToSign:es,clearAllSignedTransactions:mL,clearSignedTransaction:lL,clearTransactionToSign:o6,setSignTransactionsError:_L,setSignTransactionsCancelMessage:da,moveTransactionsToSignedState:Vp,updateSignedTransactionsCustomTransactionInformation:r6}=kg.actions,ns=kg.reducer});var Ng,qp,Rg,c6,p6,uL,d6,os,rs=F(()=>{"use strict";r();Ng=require("@reduxjs/toolkit");Ne();qp={},Rg=(0,Ng.createSlice)({name:"batchTransactionsSlice",initialState:qp,reducers:{setBatchTransactions:(n,o)=>{n[o.payload.id]=o.payload},updateBatchTransactions:(n,o)=>{n[o.payload.id]=o.payload},clearBatchTransactions:(n,o)=>{delete n[o.payload.batchId]},clearAllBatchTransactions:()=>qp},extraReducers:n=>{n.addCase(Ee,()=>qp)}}),{setBatchTransactions:c6,updateBatchTransactions:p6,clearBatchTransactions:uL,clearAllBatchTransactions:d6}=Rg.actions,os=Rg.reducer});var Mg,Dg,Og,u6,Bg,Kp=F(()=>{"use strict";r();Mg=require("@reduxjs/toolkit");Ne();Dg={},Og=(0,Mg.createSlice)({name:"dappConfigSlice",initialState:Dg,reducers:{setDappConfig:(n,o)=>o.payload},extraReducers:n=>{n.addCase(Ee,()=>Dg)}}),{setDappConfig:u6}=Og.actions,Bg=Og.reducer});var ye=F(()=>{"use strict";r();Ui();Hi();zi();Ki();Xi();Zi();Qi();ts();rs();Kp()});var jp=F(()=>{"use strict";r()});var Ug,TL,xL,ko,ss=F(()=>{"use strict";r();Ug=require("@reduxjs/toolkit");jp();Ui();rs();Kp();Hi();zi();Ki();Xi();Zi();Qi();ts();TL={["account"]:Wi,["dappConfig"]:Bg,["loginInfo"]:Gi,["modals"]:$i,["networkConfig"]:qi,["signedMessageInfo"]:ji,["toasts"]:Yi,["transactionsInfo"]:Ji,["transactions"]:ns,["batchTransactions"]:os},xL=(n={})=>(0,Ug.combineReducers)(E(E({},TL),n)),ko=xL});var zg={};Fe(zg,{default:()=>ML,sessionStorageReducers:()=>Xp});function Et(n,o=[]){return{key:n,version:1,storage:Hg.default,blacklist:o}}var Tn,Gg,Hg,yL,ma,SL,bL,wL,vL,AL,IL,CL,LL,kL,PL,$g,EL,Xp,NL,RL,DL,ML,Vg=F(()=>{"use strict";r();Tn=require("redux-persist"),Gg=O(require("redux-persist/lib/storage")),Hg=O(require("redux-persist/lib/storage/session"));ss();ye();Ui();rs();Hi();zi();Ki();Xi();Zi();Qi();ts();jp();yL={persistReducersStorageType:"localStorage"},ma={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},SL=Et(ma["account"]),bL=Et(ma["loginInfo"]),wL=Et(ma["modals"]),vL=Et(ma["networkConfig"]),AL={2:n=>Z(E({},n),{networkConfig:Bp})};IL=Et("sdk-dapp-transactionsInfo"),CL=Et("sdk-dapp-transactions",["transactionsToSign"]),LL=Et("sdk-dapp-batchTransactions",["batchTransactions"]),kL=Et("sdk-dapp-toasts"),PL=Et("sdk-dapp-signedMessageInfo"),$g={key:"sdk-dapp-store",version:2,storage:Gg.default,whitelist:Object.keys(ma),migrate:(0,Tn.createMigrate)(AL,{debug:!1})},EL=Z(E({},$g),{whitelist:[]}),Xp={["toasts"]:(0,Tn.persistReducer)(kL,Yi),["transactions"]:(0,Tn.persistReducer)(CL,ns),["transactionsInfo"]:(0,Tn.persistReducer)(IL,Ji),["batchTransactions"]:(0,Tn.persistReducer)(LL,os),["signedMessageInfo"]:(0,Tn.persistReducer)(PL,ji)},NL=Z(E({},Xp),{["account"]:(0,Tn.persistReducer)(SL,Wi),["loginInfo"]:(0,Tn.persistReducer)(bL,Gi),["modals"]:(0,Tn.persistReducer)(wL,$i),["networkConfig"]:(0,Tn.persistReducer)(vL,qi)}),RL=yL.persistReducersStorageType==="localStorage",DL=RL?(0,Tn.persistReducer)($g,ko(Xp)):(0,Tn.persistReducer)(EL,ko(NL)),ML=DL});var qg={};Fe(qg,{default:()=>OL});var OL,Kg=F(()=>{"use strict";r();ss();OL=ko()});var jg={};Fe(jg,{default:()=>FL});var Gn,BL,FL,Xg=F(()=>{"use strict";r();Gn=require("redux-persist"),BL=[Gn.FLUSH,Gn.REHYDRATE,Gn.PAUSE,Gn.PERSIST,Gn.PURGE,Gn.REGISTER],FL=BL});var Jg={};Fe(Jg,{default:()=>Zg});function Zg(n){return(0,Yg.persistStore)(n)}var Yg,Qg=F(()=>{"use strict";r();Yg=require("redux-persist")});var Zf=W((oq,Yf)=>{r();var NP=typeof p=="object"&&p&&p.Object===Object&&p;Yf.exports=NP});var xa=W((rq,Jf)=>{r();var RP=Zf(),DP=typeof self=="object"&&self&&self.Object===Object&&self,MP=RP||DP||Function("return this")();Jf.exports=MP});var dd=W((aq,Qf)=>{r();var OP=xa(),BP=OP.Symbol;Qf.exports=BP});var oh=W((iq,th)=>{r();var eh=dd(),nh=Object.prototype,FP=nh.hasOwnProperty,WP=nh.toString,ya=eh?eh.toStringTag:void 0;function UP(n){var o=FP.call(n,ya),i=n[ya];try{n[ya]=void 0;var c=!0}catch(f){}var l=WP.call(n);return c&&(o?n[ya]=i:delete n[ya]),l}th.exports=UP});var ah=W((sq,rh)=>{r();var GP=Object.prototype,HP=GP.toString;function $P(n){return HP.call(n)}rh.exports=$P});var Ss=W((cq,ch)=>{r();var ih=dd(),zP=oh(),VP=ah(),qP="[object Null]",KP="[object Undefined]",sh=ih?ih.toStringTag:void 0;function jP(n){return n==null?n===void 0?KP:qP:sh&&sh in Object(n)?zP(n):VP(n)}ch.exports=jP});var dh=W((pq,ph)=>{r();var XP=Array.isArray;ph.exports=XP});var md=W((dq,mh)=>{r();function YP(n){return n!=null&&typeof n=="object"}mh.exports=YP});var _h=W((mq,lh)=>{r();var ZP=Ss(),JP=dh(),QP=md(),e2="[object String]";function n2(n){return typeof n=="string"||!JP(n)&&QP(n)&&ZP(n)==e2}lh.exports=n2});var br=W((ij,bh)=>{r();function f2(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}bh.exports=f2});var fd=W((sj,wh)=>{r();var h2=Ss(),T2=br(),x2="[object AsyncFunction]",y2="[object Function]",S2="[object GeneratorFunction]",b2="[object Proxy]";function w2(n){if(!T2(n))return!1;var o=h2(n);return o==y2||o==S2||o==x2||o==b2}wh.exports=w2});var Ah=W((cj,vh)=>{r();var v2=xa(),A2=v2["__core-js_shared__"];vh.exports=A2});var Lh=W((pj,Ch)=>{r();var hd=Ah(),Ih=function(){var n=/[^.]+$/.exec(hd&&hd.keys&&hd.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function I2(n){return!!Ih&&Ih in n}Ch.exports=I2});var Ph=W((dj,kh)=>{r();var C2=Function.prototype,L2=C2.toString;function k2(n){if(n!=null){try{return L2.call(n)}catch(o){}try{return n+""}catch(o){}}return""}kh.exports=k2});var Nh=W((mj,Eh)=>{r();var P2=fd(),E2=Lh(),N2=br(),R2=Ph(),D2=/[\\^$.*+?()[\]{}|]/g,M2=/^\[object .+?Constructor\]$/,O2=Function.prototype,B2=Object.prototype,F2=O2.toString,W2=B2.hasOwnProperty,U2=RegExp("^"+F2.call(W2).replace(D2,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function G2(n){if(!N2(n)||E2(n))return!1;var o=P2(n)?U2:M2;return o.test(R2(n))}Eh.exports=G2});var Dh=W((lj,Rh)=>{r();function H2(n,o){return n==null?void 0:n[o]}Rh.exports=H2});var As=W((_j,Mh)=>{r();var $2=Nh(),z2=Dh();function V2(n,o){var i=z2(n,o);return $2(i)?i:void 0}Mh.exports=V2});var wa=W((uj,Oh)=>{r();var q2=As(),K2=q2(Object,"create");Oh.exports=K2});var Wh=W((gj,Fh)=>{r();var Bh=wa();function j2(){this.__data__=Bh?Bh(null):{},this.size=0}Fh.exports=j2});var Gh=W((fj,Uh)=>{r();function X2(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}Uh.exports=X2});var $h=W((hj,Hh)=>{r();var Y2=wa(),Z2="__lodash_hash_undefined__",J2=Object.prototype,Q2=J2.hasOwnProperty;function eE(n){var o=this.__data__;if(Y2){var i=o[n];return i===Z2?void 0:i}return Q2.call(o,n)?o[n]:void 0}Hh.exports=eE});var Vh=W((Tj,zh)=>{r();var nE=wa(),tE=Object.prototype,oE=tE.hasOwnProperty;function rE(n){var o=this.__data__;return nE?o[n]!==void 0:oE.call(o,n)}zh.exports=rE});var Kh=W((xj,qh)=>{r();var aE=wa(),iE="__lodash_hash_undefined__";function sE(n,o){var i=this.__data__;return this.size+=this.has(n)?0:1,i[n]=aE&&o===void 0?iE:o,this}qh.exports=sE});var Xh=W((yj,jh)=>{r();var cE=Wh(),pE=Gh(),dE=$h(),mE=Vh(),lE=Kh();function wr(n){var o=-1,i=n==null?0:n.length;for(this.clear();++o<i;){var c=n[o];this.set(c[0],c[1])}}wr.prototype.clear=cE;wr.prototype.delete=pE;wr.prototype.get=dE;wr.prototype.has=mE;wr.prototype.set=lE;jh.exports=wr});var Zh=W((Sj,Yh)=>{r();function _E(){this.__data__=[],this.size=0}Yh.exports=_E});var Td=W((bj,Jh)=>{r();function uE(n,o){return n===o||n!==n&&o!==o}Jh.exports=uE});var va=W((wj,Qh)=>{r();var gE=Td();function fE(n,o){for(var i=n.length;i--;)if(gE(n[i][0],o))return i;return-1}Qh.exports=fE});var nT=W((vj,eT)=>{r();var hE=va(),TE=Array.prototype,xE=TE.splice;function yE(n){var o=this.__data__,i=hE(o,n);if(i<0)return!1;var c=o.length-1;return i==c?o.pop():xE.call(o,i,1),--this.size,!0}eT.exports=yE});var oT=W((Aj,tT)=>{r();var SE=va();function bE(n){var o=this.__data__,i=SE(o,n);return i<0?void 0:o[i][1]}tT.exports=bE});var aT=W((Ij,rT)=>{r();var wE=va();function vE(n){return wE(this.__data__,n)>-1}rT.exports=vE});var sT=W((Cj,iT)=>{r();var AE=va();function IE(n,o){var i=this.__data__,c=AE(i,n);return c<0?(++this.size,i.push([n,o])):i[c][1]=o,this}iT.exports=IE});var pT=W((Lj,cT)=>{r();var CE=Zh(),LE=nT(),kE=oT(),PE=aT(),EE=sT();function vr(n){var o=-1,i=n==null?0:n.length;for(this.clear();++o<i;){var c=n[o];this.set(c[0],c[1])}}vr.prototype.clear=CE;vr.prototype.delete=LE;vr.prototype.get=kE;vr.prototype.has=PE;vr.prototype.set=EE;cT.exports=vr});var mT=W((kj,dT)=>{r();var NE=As(),RE=xa(),DE=NE(RE,"Map");dT.exports=DE});var uT=W((Pj,_T)=>{r();var lT=Xh(),ME=pT(),OE=mT();function BE(){this.size=0,this.__data__={hash:new lT,map:new(OE||ME),string:new lT}}_T.exports=BE});var fT=W((Ej,gT)=>{r();function FE(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}gT.exports=FE});var Aa=W((Nj,hT)=>{r();var WE=fT();function UE(n,o){var i=n.__data__;return WE(o)?i[typeof o=="string"?"string":"hash"]:i.map}hT.exports=UE});var xT=W((Rj,TT)=>{r();var GE=Aa();function HE(n){var o=GE(this,n).delete(n);return this.size-=o?1:0,o}TT.exports=HE});var ST=W((Dj,yT)=>{r();var $E=Aa();function zE(n){return $E(this,n).get(n)}yT.exports=zE});var wT=W((Mj,bT)=>{r();var VE=Aa();function qE(n){return VE(this,n).has(n)}bT.exports=qE});var AT=W((Oj,vT)=>{r();var KE=Aa();function jE(n,o){var i=KE(this,n),c=i.size;return i.set(n,o),this.size+=i.size==c?0:1,this}vT.exports=jE});var CT=W((Bj,IT)=>{r();var XE=uT(),YE=xT(),ZE=ST(),JE=wT(),QE=AT();function Ar(n){var o=-1,i=n==null?0:n.length;for(this.clear();++o<i;){var c=n[o];this.set(c[0],c[1])}}Ar.prototype.clear=XE;Ar.prototype.delete=YE;Ar.prototype.get=ZE;Ar.prototype.has=JE;Ar.prototype.set=QE;IT.exports=Ar});var kT=W((Fj,LT)=>{r();var eN="__lodash_hash_undefined__";function nN(n){return this.__data__.set(n,eN),this}LT.exports=nN});var ET=W((Wj,PT)=>{r();function tN(n){return this.__data__.has(n)}PT.exports=tN});var RT=W((Uj,NT)=>{r();var oN=CT(),rN=kT(),aN=ET();function Is(n){var o=-1,i=n==null?0:n.length;for(this.__data__=new oN;++o<i;)this.add(n[o])}Is.prototype.add=Is.prototype.push=rN;Is.prototype.has=aN;NT.exports=Is});var MT=W((Gj,DT)=>{r();function iN(n,o,i,c){for(var l=n.length,f=i+(c?1:-1);c?f--:++f<l;)if(o(n[f],f,n))return f;return-1}DT.exports=iN});var BT=W((Hj,OT)=>{r();function sN(n){return n!==n}OT.exports=sN});var WT=W(($j,FT)=>{r();function cN(n,o,i){for(var c=i-1,l=n.length;++c<l;)if(n[c]===o)return c;return-1}FT.exports=cN});var GT=W((zj,UT)=>{r();var pN=MT(),dN=BT(),mN=WT();function lN(n,o,i){return o===o?mN(n,o,i):pN(n,dN,i)}UT.exports=lN});var $T=W((Vj,HT)=>{r();var _N=GT();function uN(n,o){var i=n==null?0:n.length;return!!i&&_N(n,o,0)>-1}HT.exports=uN});var VT=W((qj,zT)=>{r();function gN(n,o,i){for(var c=-1,l=n==null?0:n.length;++c<l;)if(i(o,n[c]))return!0;return!1}zT.exports=gN});var KT=W((Kj,qT)=>{r();function fN(n,o){return n.has(o)}qT.exports=fN});var XT=W((jj,jT)=>{r();var hN=As(),TN=xa(),xN=hN(TN,"Set");jT.exports=xN});var ZT=W((Xj,YT)=>{r();function yN(){}YT.exports=yN});var xd=W((Yj,JT)=>{r();function SN(n){var o=-1,i=Array(n.size);return n.forEach(function(c){i[++o]=c}),i}JT.exports=SN});var ex=W((Zj,QT)=>{r();var yd=XT(),bN=ZT(),wN=xd(),vN=1/0,AN=yd&&1/wN(new yd([,-0]))[1]==vN?function(n){return new yd(n)}:bN;QT.exports=AN});var tx=W((Jj,nx)=>{r();var IN=RT(),CN=$T(),LN=VT(),kN=KT(),PN=ex(),EN=xd(),NN=200;function RN(n,o,i){var c=-1,l=CN,f=n.length,h=!0,w=[],x=w;if(i)h=!1,l=LN;else if(f>=NN){var S=o?null:PN(n);if(S)return EN(S);h=!1,l=kN,x=new IN}else x=o?[]:w;e:for(;++c<f;){var N=n[c],C=o?o(N):N;if(N=i||N!==0?N:0,h&&C===C){for(var D=x.length;D--;)if(x[D]===C)continue e;o&&x.push(C),w.push(N)}else l(x,C,i)||(x!==w&&x.push(C),w.push(N))}return w}nx.exports=RN});var rx=W((Qj,ox)=>{r();var DN=tx();function MN(n){return n&&n.length?DN(n):[]}ox.exports=MN});var wd={};Fe(wd,{css:()=>Tx,default:()=>f3});var Tx,f3,vd=F(()=>{"use strict";r();Tx=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tx));f3={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Bt={};Fe(Bt,{css:()=>Sx,default:()=>x3});var Sx,x3,Ft=F(()=>{"use strict";r();Sx=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sx));x3={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Md={};Fe(Md,{css:()=>Dx,default:()=>W3});var Dx,W3,Od=F(()=>{"use strict";r();Dx=`.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
  display: none;
  gap: 8px;
  align-items: center;
  color: #e5e5e5;
  transition: all 200ms ease;
  cursor: pointer;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
    padding: 0;
    margin: 0 4px;
    display: flex;
  }
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button.dapp-core-component__paginationEdgeButtonStyles__inactive {
  color: #737373;
  pointer-events: none;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button.dapp-core-component__paginationEdgeButtonStyles__inactive .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  color: #737373;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button:hover .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  color: #23f7dd;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text {
  display: none;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text.dapp-core-component__paginationEdgeButtonStyles__show {
  display: block;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text {
    display: block;
  }
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  transition: all 200ms ease;
  color: #e5e5e5;
  font-size: 12px;
}
@media (min-width: 375px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
    font-size: 16px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dx));W3={"pagination-edge-button":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",inactive:"dapp-core-component__paginationEdgeButtonStyles__inactive","pagination-edge-button-icon":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon",paginationEdgeButtonIcon:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon","pagination-edge-button-text":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",paginationEdgeButtonText:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",show:"dapp-core-component__paginationEdgeButtonStyles__show"}});var Bx=W((gie,Ox)=>{r();var G3=Math.max,H3=Math.min;function $3(n,o,i){return n>=H3(o,i)&&n<G3(o,i)}Ox.exports=$3});var Wx=W((fie,Fx)=>{r();var z3=/\s/;function V3(n){for(var o=n.length;o--&&z3.test(n.charAt(o)););return o}Fx.exports=V3});var Gx=W((hie,Ux)=>{r();var q3=Wx(),K3=/^\s+/;function j3(n){return n&&n.slice(0,q3(n)+1).replace(K3,"")}Ux.exports=j3});var $x=W((Tie,Hx)=>{r();var X3=Ss(),Y3=md(),Z3="[object Symbol]";function J3(n){return typeof n=="symbol"||Y3(n)&&X3(n)==Z3}Hx.exports=J3});var Wd=W((xie,qx)=>{r();var Q3=Gx(),zx=br(),eR=$x(),Vx=0/0,nR=/^[-+]0x[0-9a-f]+$/i,tR=/^0b[01]+$/i,oR=/^0o[0-7]+$/i,rR=parseInt;function aR(n){if(typeof n=="number")return n;if(eR(n))return Vx;if(zx(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=zx(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=Q3(n);var i=tR.test(n);return i||oR.test(n)?rR(n.slice(2),i?2:8):nR.test(n)?Vx:+n}qx.exports=aR});var Ud=W((yie,jx)=>{r();var iR=Wd(),Kx=1/0,sR=17976931348623157e292;function cR(n){if(!n)return n===0?n:0;if(n=iR(n),n===Kx||n===-Kx){var o=n<0?-1:1;return o*sR}return n===n?n:0}jx.exports=cR});var Zx=W((Sie,Yx)=>{r();var pR=Bx(),Xx=Ud(),dR=Wd();function mR(n,o,i){return o=Xx(o),i===void 0?(i=o,o=0):i=Xx(i),n=dR(n),pR(n,o,i)}Yx.exports=mR});var Qx=W((bie,Jx)=>{r();var lR=Math.ceil,_R=Math.max;function uR(n,o,i,c){for(var l=-1,f=_R(lR((o-n)/(i||1)),0),h=Array(f);f--;)h[c?f:++l]=n,n+=i;return h}Jx.exports=uR});var n0=W((wie,e0)=>{r();var gR=9007199254740991;function fR(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=gR}e0.exports=fR});var o0=W((vie,t0)=>{r();var hR=fd(),TR=n0();function xR(n){return n!=null&&TR(n.length)&&!hR(n)}t0.exports=xR});var a0=W((Aie,r0)=>{r();var yR=9007199254740991,SR=/^(?:0|[1-9]\d*)$/;function bR(n,o){var i=typeof n;return o=o==null?yR:o,!!o&&(i=="number"||i!="symbol"&&SR.test(n))&&n>-1&&n%1==0&&n<o}r0.exports=bR});var s0=W((Iie,i0)=>{r();var wR=Td(),vR=o0(),AR=a0(),IR=br();function CR(n,o,i){if(!IR(i))return!1;var c=typeof o;return(c=="number"?vR(i)&&AR(o,i.length):c=="string"&&o in i)?wR(i[o],n):!1}i0.exports=CR});var p0=W((Cie,c0)=>{r();var LR=Qx(),kR=s0(),Gd=Ud();function PR(n){return function(o,i,c){return c&&typeof c!="number"&&kR(o,i,c)&&(i=c=void 0),o=Gd(o),i===void 0?(i=o,o=0):i=Gd(i),c=c===void 0?o<i?1:-1:Gd(c),LR(o,i,c,n)}}c0.exports=PR});var m0=W((Lie,d0)=>{r();var ER=p0(),NR=ER();d0.exports=NR});var zd={};Fe(zd,{css:()=>g0,default:()=>RR});var g0,RR,Vd=F(()=>{"use strict";r();g0=`.dapp-core-component__paginationStyles__pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  font-family: "Roobert Regular", sans-serif;
  line-height: 1;
  justify-content: center;
  font-size: 16px;
  max-width: 480px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination {
    gap: 16px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle {
  cursor: pointer;
  transition: all 200ms ease;
  display: none;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle {
    display: flex;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle.dapp-core-component__paginationStyles__disabled {
  color: #737373;
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle.dapp-core-component__paginationStyles__disabled .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #737373;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle:hover .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #e5e5e5;
  font-size: 12px;
}
@media (min-width: 375px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle .dapp-core-component__paginationStyles__pagination-angle-icon {
    font-size: 16px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button {
  margin: 0;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button.dapp-core-component__paginationStyles__disabled {
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button.dapp-core-component__paginationStyles__reversed {
  flex-direction: row-reverse;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items {
  display: flex;
  gap: 8px;
  margin: 0 4px;
  align-items: center;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper {
  cursor: pointer;
  text-align: center;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper {
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item {
  color: #e5e5e5;
  transition: color 0.2s ease-out;
  position: relative;
  border-radius: 4px;
  text-align: center;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 28px;
  width: 28px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item {
    font-size: 16px;
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease;
  background-color: #0e0e0e;
  border-radius: 50%;
  height: 28px;
  width: 28px;
  pointer-events: none;
  z-index: 1;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:before {
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:hover:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__hundreds {
  font-size: 8px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__hundreds {
    font-size: 10px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__active {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__active:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__disabled {
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis {
  margin: 0;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis:before {
  background-color: transparent;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis:hover:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item .dapp-core-component__paginationStyles__pagination-item-text {
  position: relative;
  z-index: 2;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(g0));RR={pagination:"dapp-core-component__paginationStyles__pagination","pagination-angle":"dapp-core-component__paginationStyles__pagination-angle",paginationAngle:"dapp-core-component__paginationStyles__pagination-angle",disabled:"dapp-core-component__paginationStyles__disabled","pagination-angle-icon":"dapp-core-component__paginationStyles__pagination-angle-icon",paginationAngleIcon:"dapp-core-component__paginationStyles__pagination-angle-icon","pagination-edge-button":"dapp-core-component__paginationStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationStyles__pagination-edge-button",reversed:"dapp-core-component__paginationStyles__reversed","pagination-items":"dapp-core-component__paginationStyles__pagination-items",paginationItems:"dapp-core-component__paginationStyles__pagination-items","pagination-item-wrapper":"dapp-core-component__paginationStyles__pagination-item-wrapper",paginationItemWrapper:"dapp-core-component__paginationStyles__pagination-item-wrapper","pagination-item":"dapp-core-component__paginationStyles__pagination-item",paginationItem:"dapp-core-component__paginationStyles__pagination-item",hundreds:"dapp-core-component__paginationStyles__hundreds",active:"dapp-core-component__paginationStyles__active",ellipsis:"dapp-core-component__paginationStyles__ellipsis","pagination-item-text":"dapp-core-component__paginationStyles__pagination-item-text",paginationItemText:"dapp-core-component__paginationStyles__pagination-item-text"}});var Kd={};Fe(Kd,{css:()=>h0,default:()=>MR});var h0,MR,jd=F(()=>{"use strict";r();h0=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(h0));MR={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var Xd={};Fe(Xd,{css:()=>y0,default:()=>UR});var y0,UR,Yd=F(()=>{"use strict";r();y0=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(y0));UR={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Zd={};Fe(Zd,{css:()=>w0,default:()=>HR});var w0,HR,Jd=F(()=>{"use strict";r();w0=`.dapp-core-component__addressRowStyles__ledger-address-table-body-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item:not(.dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected) {
  color: #6c757d;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data {
  font-size: 14px;
  line-height: 1;
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
  padding-right: 16px;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data:first-child {
  width: 55%;
  flex-basis: 55%;
  max-width: 55%;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data:last-child {
  width: 32px;
  max-width: 32px;
  flex-basis: 32px;
  text-align: center;
  justify-content: center;
  padding-right: 0;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input {
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  -webkit-appearance: none;
  appearance: none;
  min-height: auto;
}
@media (min-width: 480px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input {
    margin-right: 12px;
  }
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input:before {
  border: 2px solid #adb5bd;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input:checked:before {
  width: 12px;
  height: 12px;
  border: 4px solid #1b46c2;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label {
  margin-bottom: 0;
  flex: 1;
  display: flex;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value {
  flex: 1;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
  max-width: 84px;
  display: flex;
  align-items: flex-end;
}
@media (min-width: 480px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
    max-width: 112px;
  }
}
@media (min-width: 768px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
    max-width: 260px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(w0));HR={"ledger-address-table-body-item":"dapp-core-component__addressRowStyles__ledger-address-table-body-item",ledgerAddressTableBodyItem:"dapp-core-component__addressRowStyles__ledger-address-table-body-item","ledger-address-table-body-item-selected":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected",ledgerAddressTableBodyItemSelected:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected","ledger-address-table-body-item-data":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data",ledgerAddressTableBodyItemData:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data","ledger-address-table-body-item-data-input":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input",ledgerAddressTableBodyItemDataInput:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input","ledger-address-table-body-item-data-label":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label",ledgerAddressTableBodyItemDataLabel:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label","ledger-address-table-body-item-data-value":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value",ledgerAddressTableBodyItemDataValue:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value"}});var em={};Fe(em,{css:()=>A0,default:()=>zR});var A0,zR,nm=F(()=>{"use strict";r();A0=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(A0));zR={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var tm={};Fe(tm,{css:()=>L0,default:()=>qR});var L0,qR,om=F(()=>{"use strict";r();L0=`.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper {
  text-align: center;
  padding: 40px 16px 0;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner {
  margin: 120px 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(L0));qR={"ledger-loading-wrapper":"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper",ledgerLoadingWrapper:"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper","ledger-loading-heading":"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading",ledgerLoadingHeading:"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading","ledger-loading-description":"dapp-core-component__ledgerLoadingStyles__ledger-loading-description",ledgerLoadingDescription:"dapp-core-component__ledgerLoadingStyles__ledger-loading-description","ledger-loading-spinner":"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner",ledgerLoadingSpinner:"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner"}});var rm={};Fe(rm,{css:()=>P0,default:()=>jR});var P0,jR,am=F(()=>{"use strict";r();P0=`.dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
  text-align: center;
  padding: 48px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
    padding: 48px 40px;
  }
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table {
  margin-top: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header {
  display: flex;
  align-items: center;
  background-color: #ced4da;
  line-height: 1;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  border-radius: 8px;
  padding-right: 20px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item {
  flex: 1;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item:first-child {
  width: 55%;
  flex-basis: 55%;
  max-width: 55%;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item:last-child {
  width: 32px;
  max-width: 32px;
  flex-basis: 32px;
  text-align: center;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body {
  overflow-y: scroll;
  overflow-x: hidden;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar {
  width: 4px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-track {
  background-color: transparent;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-thumb {
  background-color: #ced4da;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-thumb:hover {
  background-color: #ced4da;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-pagination {
  margin: 32px auto 0;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-button {
  border-radius: 6px;
  padding: 12px 16px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  margin-top: 40px !important;
  transition: all 200ms ease;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-button {
    width: auto;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(P0));jR={"ledger-address-table-wrapper":"dapp-core-component__addressTableStyles__ledger-address-table-wrapper",ledgerAddressTableWrapper:"dapp-core-component__addressTableStyles__ledger-address-table-wrapper","ledger-address-table-heading":"dapp-core-component__addressTableStyles__ledger-address-table-heading",ledgerAddressTableHeading:"dapp-core-component__addressTableStyles__ledger-address-table-heading","ledger-address-table-description":"dapp-core-component__addressTableStyles__ledger-address-table-description",ledgerAddressTableDescription:"dapp-core-component__addressTableStyles__ledger-address-table-description","ledger-address-table":"dapp-core-component__addressTableStyles__ledger-address-table",ledgerAddressTable:"dapp-core-component__addressTableStyles__ledger-address-table","ledger-address-table-header":"dapp-core-component__addressTableStyles__ledger-address-table-header",ledgerAddressTableHeader:"dapp-core-component__addressTableStyles__ledger-address-table-header","ledger-address-table-header-item":"dapp-core-component__addressTableStyles__ledger-address-table-header-item",ledgerAddressTableHeaderItem:"dapp-core-component__addressTableStyles__ledger-address-table-header-item","ledger-address-table-body":"dapp-core-component__addressTableStyles__ledger-address-table-body",ledgerAddressTableBody:"dapp-core-component__addressTableStyles__ledger-address-table-body","ledger-address-table-pagination":"dapp-core-component__addressTableStyles__ledger-address-table-pagination",ledgerAddressTablePagination:"dapp-core-component__addressTableStyles__ledger-address-table-pagination","ledger-address-table-button":"dapp-core-component__addressTableStyles__ledger-address-table-button",ledgerAddressTableButton:"dapp-core-component__addressTableStyles__ledger-address-table-button"}});var R0=W((Rr,Ra)=>{r();(function(){var n,o="4.17.21",i=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",w=500,x="__lodash_placeholder__",S=1,N=2,C=4,D=1,H=2,G=1,M=2,X=4,J=8,ce=16,ie=32,Y=64,Q=128,Le=256,Sn=512,rn=30,bn="...",_t=800,lo=16,ut=1,Wo=2,Uo=3,Te=1/0,ve=9007199254740991,De=17976931348623157e292,dn=0/0,mn=4294967295,Rs=mn-1,Ds=mn>>>1,Ma=[["ary",Q],["bind",G],["bindKey",M],["curry",J],["curryRight",ce],["flip",Sn],["partial",ie],["partialRight",Y],["rearg",Le]],Ut="[object Arguments]",Go="[object Array]",Or="[object AsyncFunction]",fe="[object Boolean]",Se="[object Date]",Me="[object DOMException]",Gt="[object Error]",Ho="[object Function]",Oa="[object GeneratorFunction]",Hn="[object Map]",Br="[object Number]",Z0="[object Null]",gt="[object Object]",fm="[object Promise]",J0="[object Proxy]",Fr="[object RegExp]",$n="[object Set]",Wr="[object String]",Ba="[object Symbol]",Q0="[object Undefined]",Ur="[object WeakMap]",ey="[object WeakSet]",Gr="[object ArrayBuffer]",$o="[object DataView]",Ms="[object Float32Array]",Os="[object Float64Array]",Bs="[object Int8Array]",Fs="[object Int16Array]",Ws="[object Int32Array]",Us="[object Uint8Array]",Gs="[object Uint8ClampedArray]",Hs="[object Uint16Array]",$s="[object Uint32Array]",ny=/\b__p \+= '';/g,ty=/\b(__p \+=) '' \+/g,oy=/(__e\(.*?\)|\b__t\)) \+\n'';/g,hm=/&(?:amp|lt|gt|quot|#39);/g,Tm=/[&<>"']/g,ry=RegExp(hm.source),ay=RegExp(Tm.source),iy=/<%-([\s\S]+?)%>/g,sy=/<%([\s\S]+?)%>/g,xm=/<%=([\s\S]+?)%>/g,cy=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,py=/^\w*$/,dy=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zs=/[\\^$.*+?()[\]{}|]/g,my=RegExp(zs.source),Vs=/^\s+/,ly=/\s/,_y=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,uy=/\{\n\/\* \[wrapped with (.+)\] \*/,gy=/,? & /,fy=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hy=/[()=,{}\[\]\/\s]/,Ty=/\\(\\)?/g,xy=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ym=/\w*$/,yy=/^[-+]0x[0-9a-f]+$/i,Sy=/^0b[01]+$/i,by=/^\[object .+?Constructor\]$/,wy=/^0o[0-7]+$/i,vy=/^(?:0|[1-9]\d*)$/,Ay=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fa=/($^)/,Iy=/['\n\r\u2028\u2029\\]/g,Wa="\\ud800-\\udfff",Cy="\\u0300-\\u036f",Ly="\\ufe20-\\ufe2f",ky="\\u20d0-\\u20ff",Sm=Cy+Ly+ky,bm="\\u2700-\\u27bf",wm="a-z\\xdf-\\xf6\\xf8-\\xff",Py="\\xac\\xb1\\xd7\\xf7",Ey="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ny="\\u2000-\\u206f",Ry=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",vm="A-Z\\xc0-\\xd6\\xd8-\\xde",Am="\\ufe0e\\ufe0f",Im=Py+Ey+Ny+Ry,qs="['\u2019]",Dy="["+Wa+"]",Cm="["+Im+"]",Ua="["+Sm+"]",Lm="\\d+",My="["+bm+"]",km="["+wm+"]",Pm="[^"+Wa+Im+Lm+bm+wm+vm+"]",Ks="\\ud83c[\\udffb-\\udfff]",Oy="(?:"+Ua+"|"+Ks+")",Em="[^"+Wa+"]",js="(?:\\ud83c[\\udde6-\\uddff]){2}",Xs="[\\ud800-\\udbff][\\udc00-\\udfff]",zo="["+vm+"]",Nm="\\u200d",Rm="(?:"+km+"|"+Pm+")",By="(?:"+zo+"|"+Pm+")",Dm="(?:"+qs+"(?:d|ll|m|re|s|t|ve))?",Mm="(?:"+qs+"(?:D|LL|M|RE|S|T|VE))?",Om=Oy+"?",Bm="["+Am+"]?",Fy="(?:"+Nm+"(?:"+[Em,js,Xs].join("|")+")"+Bm+Om+")*",Wy="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Uy="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fm=Bm+Om+Fy,Gy="(?:"+[My,js,Xs].join("|")+")"+Fm,Hy="(?:"+[Em+Ua+"?",Ua,js,Xs,Dy].join("|")+")",$y=RegExp(qs,"g"),zy=RegExp(Ua,"g"),Ys=RegExp(Ks+"(?="+Ks+")|"+Hy+Fm,"g"),Vy=RegExp([zo+"?"+km+"+"+Dm+"(?="+[Cm,zo,"$"].join("|")+")",By+"+"+Mm+"(?="+[Cm,zo+Rm,"$"].join("|")+")",zo+"?"+Rm+"+"+Dm,zo+"+"+Mm,Uy,Wy,Lm,Gy].join("|"),"g"),qy=RegExp("["+Nm+Wa+Sm+Am+"]"),Ky=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,jy=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Xy=-1,we={};we[Ms]=we[Os]=we[Bs]=we[Fs]=we[Ws]=we[Us]=we[Gs]=we[Hs]=we[$s]=!0,we[Ut]=we[Go]=we[Gr]=we[fe]=we[$o]=we[Se]=we[Gt]=we[Ho]=we[Hn]=we[Br]=we[gt]=we[Fr]=we[$n]=we[Wr]=we[Ur]=!1;var be={};be[Ut]=be[Go]=be[Gr]=be[$o]=be[fe]=be[Se]=be[Ms]=be[Os]=be[Bs]=be[Fs]=be[Ws]=be[Hn]=be[Br]=be[gt]=be[Fr]=be[$n]=be[Wr]=be[Ba]=be[Us]=be[Gs]=be[Hs]=be[$s]=!0,be[Gt]=be[Ho]=be[Ur]=!1;var Yy={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Zy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jy={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qy={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},eS=parseFloat,nS=parseInt,Wm=typeof p=="object"&&p&&p.Object===Object&&p,tS=typeof self=="object"&&self&&self.Object===Object&&self,qe=Wm||tS||Function("return this")(),Zs=typeof Rr=="object"&&Rr&&!Rr.nodeType&&Rr,_o=Zs&&typeof Ra=="object"&&Ra&&!Ra.nodeType&&Ra,Um=_o&&_o.exports===Zs,Js=Um&&Wm.process,Nn=function(){try{var b=_o&&_o.require&&_o.require("util").types;return b||Js&&Js.binding&&Js.binding("util")}catch(I){}}(),Gm=Nn&&Nn.isArrayBuffer,Hm=Nn&&Nn.isDate,$m=Nn&&Nn.isMap,zm=Nn&&Nn.isRegExp,Vm=Nn&&Nn.isSet,qm=Nn&&Nn.isTypedArray;function wn(b,I,A){switch(A.length){case 0:return b.call(I);case 1:return b.call(I,A[0]);case 2:return b.call(I,A[0],A[1]);case 3:return b.call(I,A[0],A[1],A[2])}return b.apply(I,A)}function oS(b,I,A,$){for(var ee=-1,ue=b==null?0:b.length;++ee<ue;){var $e=b[ee];I($,$e,A($e),b)}return $}function Rn(b,I){for(var A=-1,$=b==null?0:b.length;++A<$&&I(b[A],A,b)!==!1;);return b}function rS(b,I){for(var A=b==null?0:b.length;A--&&I(b[A],A,b)!==!1;);return b}function Km(b,I){for(var A=-1,$=b==null?0:b.length;++A<$;)if(!I(b[A],A,b))return!1;return!0}function Ht(b,I){for(var A=-1,$=b==null?0:b.length,ee=0,ue=[];++A<$;){var $e=b[A];I($e,A,b)&&(ue[ee++]=$e)}return ue}function Ga(b,I){var A=b==null?0:b.length;return!!A&&Vo(b,I,0)>-1}function Qs(b,I,A){for(var $=-1,ee=b==null?0:b.length;++$<ee;)if(A(I,b[$]))return!0;return!1}function Ae(b,I){for(var A=-1,$=b==null?0:b.length,ee=Array($);++A<$;)ee[A]=I(b[A],A,b);return ee}function $t(b,I){for(var A=-1,$=I.length,ee=b.length;++A<$;)b[ee+A]=I[A];return b}function ec(b,I,A,$){var ee=-1,ue=b==null?0:b.length;for($&&ue&&(A=b[++ee]);++ee<ue;)A=I(A,b[ee],ee,b);return A}function aS(b,I,A,$){var ee=b==null?0:b.length;for($&&ee&&(A=b[--ee]);ee--;)A=I(A,b[ee],ee,b);return A}function nc(b,I){for(var A=-1,$=b==null?0:b.length;++A<$;)if(I(b[A],A,b))return!0;return!1}var iS=tc("length");function sS(b){return b.split("")}function cS(b){return b.match(fy)||[]}function jm(b,I,A){var $;return A(b,function(ee,ue,$e){if(I(ee,ue,$e))return $=ue,!1}),$}function Ha(b,I,A,$){for(var ee=b.length,ue=A+($?1:-1);$?ue--:++ue<ee;)if(I(b[ue],ue,b))return ue;return-1}function Vo(b,I,A){return I===I?yS(b,I,A):Ha(b,Xm,A)}function pS(b,I,A,$){for(var ee=A-1,ue=b.length;++ee<ue;)if($(b[ee],I))return ee;return-1}function Xm(b){return b!==b}function Ym(b,I){var A=b==null?0:b.length;return A?rc(b,I)/A:dn}function tc(b){return function(I){return I==null?n:I[b]}}function oc(b){return function(I){return b==null?n:b[I]}}function Zm(b,I,A,$,ee){return ee(b,function(ue,$e,xe){A=$?($=!1,ue):I(A,ue,$e,xe)}),A}function dS(b,I){var A=b.length;for(b.sort(I);A--;)b[A]=b[A].value;return b}function rc(b,I){for(var A,$=-1,ee=b.length;++$<ee;){var ue=I(b[$]);ue!==n&&(A=A===n?ue:A+ue)}return A}function ac(b,I){for(var A=-1,$=Array(b);++A<b;)$[A]=I(A);return $}function mS(b,I){return Ae(I,function(A){return[A,b[A]]})}function Jm(b){return b&&b.slice(0,tl(b)+1).replace(Vs,"")}function vn(b){return function(I){return b(I)}}function ic(b,I){return Ae(I,function(A){return b[A]})}function Hr(b,I){return b.has(I)}function Qm(b,I){for(var A=-1,$=b.length;++A<$&&Vo(I,b[A],0)>-1;);return A}function el(b,I){for(var A=b.length;A--&&Vo(I,b[A],0)>-1;);return A}function lS(b,I){for(var A=b.length,$=0;A--;)b[A]===I&&++$;return $}var _S=oc(Yy),uS=oc(Zy);function gS(b){return"\\"+Qy[b]}function fS(b,I){return b==null?n:b[I]}function qo(b){return qy.test(b)}function hS(b){return Ky.test(b)}function TS(b){for(var I,A=[];!(I=b.next()).done;)A.push(I.value);return A}function sc(b){var I=-1,A=Array(b.size);return b.forEach(function($,ee){A[++I]=[ee,$]}),A}function nl(b,I){return function(A){return b(I(A))}}function zt(b,I){for(var A=-1,$=b.length,ee=0,ue=[];++A<$;){var $e=b[A];($e===I||$e===x)&&(b[A]=x,ue[ee++]=A)}return ue}function $a(b){var I=-1,A=Array(b.size);return b.forEach(function($){A[++I]=$}),A}function xS(b){var I=-1,A=Array(b.size);return b.forEach(function($){A[++I]=[$,$]}),A}function yS(b,I,A){for(var $=A-1,ee=b.length;++$<ee;)if(b[$]===I)return $;return-1}function SS(b,I,A){for(var $=A+1;$--;)if(b[$]===I)return $;return $}function Ko(b){return qo(b)?wS(b):iS(b)}function zn(b){return qo(b)?vS(b):sS(b)}function tl(b){for(var I=b.length;I--&&ly.test(b.charAt(I)););return I}var bS=oc(Jy);function wS(b){for(var I=Ys.lastIndex=0;Ys.test(b);)++I;return I}function vS(b){return b.match(Ys)||[]}function AS(b){return b.match(Vy)||[]}var IS=function b(I){I=I==null?qe:Vt.defaults(qe.Object(),I,Vt.pick(qe,jy));var A=I.Array,$=I.Date,ee=I.Error,ue=I.Function,$e=I.Math,xe=I.Object,cc=I.RegExp,CS=I.String,Dn=I.TypeError,za=A.prototype,LS=ue.prototype,jo=xe.prototype,Va=I["__core-js_shared__"],qa=LS.toString,he=jo.hasOwnProperty,kS=0,ol=function(){var e=/[^.]+$/.exec(Va&&Va.keys&&Va.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ka=jo.toString,PS=qa.call(xe),ES=qe._,NS=cc("^"+qa.call(he).replace(zs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ja=Um?I.Buffer:n,qt=I.Symbol,Xa=I.Uint8Array,rl=ja?ja.allocUnsafe:n,Ya=nl(xe.getPrototypeOf,xe),al=xe.create,il=jo.propertyIsEnumerable,Za=za.splice,sl=qt?qt.isConcatSpreadable:n,$r=qt?qt.iterator:n,uo=qt?qt.toStringTag:n,Ja=function(){try{var e=xo(xe,"defineProperty");return e({},"",{}),e}catch(t){}}(),RS=I.clearTimeout!==qe.clearTimeout&&I.clearTimeout,DS=$&&$.now!==qe.Date.now&&$.now,MS=I.setTimeout!==qe.setTimeout&&I.setTimeout,Qa=$e.ceil,ei=$e.floor,pc=xe.getOwnPropertySymbols,OS=ja?ja.isBuffer:n,cl=I.isFinite,BS=za.join,FS=nl(xe.keys,xe),ze=$e.max,tn=$e.min,WS=$.now,US=I.parseInt,pl=$e.random,GS=za.reverse,dc=xo(I,"DataView"),zr=xo(I,"Map"),mc=xo(I,"Promise"),Xo=xo(I,"Set"),Vr=xo(I,"WeakMap"),qr=xo(xe,"create"),ni=Vr&&new Vr,Yo={},HS=yo(dc),$S=yo(zr),zS=yo(mc),VS=yo(Xo),qS=yo(Vr),ti=qt?qt.prototype:n,Kr=ti?ti.valueOf:n,dl=ti?ti.toString:n;function u(e){if(ke(e)&&!ne(e)&&!(e instanceof me)){if(e instanceof Mn)return e;if(he.call(e,"__wrapped__"))return m_(e)}return new Mn(e)}var Zo=function(){function e(){}return function(t){if(!Ce(t))return{};if(al)return al(t);e.prototype=t;var a=new e;return e.prototype=n,a}}();function oi(){}function Mn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}u.templateSettings={escape:iy,evaluate:sy,interpolate:xm,variable:"",imports:{_:u}},u.prototype=oi.prototype,u.prototype.constructor=u,Mn.prototype=Zo(oi.prototype),Mn.prototype.constructor=Mn;function me(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=mn,this.__views__=[]}function KS(){var e=new me(this.__wrapped__);return e.__actions__=ln(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ln(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ln(this.__views__),e}function jS(){if(this.__filtered__){var e=new me(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function XS(){var e=this.__wrapped__.value(),t=this.__dir__,a=ne(e),s=t<0,_=a?e.length:0,g=sw(0,_,this.__views__),T=g.start,y=g.end,v=y-T,k=s?y:T-1,P=this.__iteratees__,R=P.length,U=0,V=tn(v,this.__takeCount__);if(!a||!s&&_==v&&V==v)return Dl(e,this.__actions__);var K=[];e:for(;v--&&U<V;){k+=t;for(var se=-1,j=e[k];++se<R;){var de=P[se],le=de.iteratee,Cn=de.type,cn=le(j);if(Cn==Wo)j=cn;else if(!cn){if(Cn==ut)continue e;break e}}K[U++]=j}return K}me.prototype=Zo(oi.prototype),me.prototype.constructor=me;function go(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}function YS(){this.__data__=qr?qr(null):{},this.size=0}function ZS(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function JS(e){var t=this.__data__;if(qr){var a=t[e];return a===h?n:a}return he.call(t,e)?t[e]:n}function QS(e){var t=this.__data__;return qr?t[e]!==n:he.call(t,e)}function eb(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=qr&&t===n?h:t,this}go.prototype.clear=YS,go.prototype.delete=ZS,go.prototype.get=JS,go.prototype.has=QS,go.prototype.set=eb;function ft(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}function nb(){this.__data__=[],this.size=0}function tb(e){var t=this.__data__,a=ri(t,e);if(a<0)return!1;var s=t.length-1;return a==s?t.pop():Za.call(t,a,1),--this.size,!0}function ob(e){var t=this.__data__,a=ri(t,e);return a<0?n:t[a][1]}function rb(e){return ri(this.__data__,e)>-1}function ab(e,t){var a=this.__data__,s=ri(a,e);return s<0?(++this.size,a.push([e,t])):a[s][1]=t,this}ft.prototype.clear=nb,ft.prototype.delete=tb,ft.prototype.get=ob,ft.prototype.has=rb,ft.prototype.set=ab;function ht(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}function ib(){this.size=0,this.__data__={hash:new go,map:new(zr||ft),string:new go}}function sb(e){var t=fi(this,e).delete(e);return this.size-=t?1:0,t}function cb(e){return fi(this,e).get(e)}function pb(e){return fi(this,e).has(e)}function db(e,t){var a=fi(this,e),s=a.size;return a.set(e,t),this.size+=a.size==s?0:1,this}ht.prototype.clear=ib,ht.prototype.delete=sb,ht.prototype.get=cb,ht.prototype.has=pb,ht.prototype.set=db;function fo(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new ht;++t<a;)this.add(e[t])}function mb(e){return this.__data__.set(e,h),this}function lb(e){return this.__data__.has(e)}fo.prototype.add=fo.prototype.push=mb,fo.prototype.has=lb;function Vn(e){var t=this.__data__=new ft(e);this.size=t.size}function _b(){this.__data__=new ft,this.size=0}function ub(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function gb(e){return this.__data__.get(e)}function fb(e){return this.__data__.has(e)}function hb(e,t){var a=this.__data__;if(a instanceof ft){var s=a.__data__;if(!zr||s.length<i-1)return s.push([e,t]),this.size=++a.size,this;a=this.__data__=new ht(s)}return a.set(e,t),this.size=a.size,this}Vn.prototype.clear=_b,Vn.prototype.delete=ub,Vn.prototype.get=gb,Vn.prototype.has=fb,Vn.prototype.set=hb;function ml(e,t){var a=ne(e),s=!a&&So(e),_=!a&&!s&&Zt(e),g=!a&&!s&&!_&&nr(e),T=a||s||_||g,y=T?ac(e.length,CS):[],v=y.length;for(var k in e)(t||he.call(e,k))&&!(T&&(k=="length"||_&&(k=="offset"||k=="parent")||g&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||St(k,v)))&&y.push(k);return y}function ll(e){var t=e.length;return t?e[bc(0,t-1)]:n}function Tb(e,t){return hi(ln(e),ho(t,0,e.length))}function xb(e){return hi(ln(e))}function lc(e,t,a){(a!==n&&!qn(e[t],a)||a===n&&!(t in e))&&Tt(e,t,a)}function jr(e,t,a){var s=e[t];(!(he.call(e,t)&&qn(s,a))||a===n&&!(t in e))&&Tt(e,t,a)}function ri(e,t){for(var a=e.length;a--;)if(qn(e[a][0],t))return a;return-1}function yb(e,t,a,s){return Kt(e,function(_,g,T){t(s,_,a(_),T)}),s}function _l(e,t){return e&&Zn(t,Ke(t),e)}function Sb(e,t){return e&&Zn(t,un(t),e)}function Tt(e,t,a){t=="__proto__"&&Ja?Ja(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}function _c(e,t){for(var a=-1,s=t.length,_=A(s),g=e==null;++a<s;)_[a]=g?n:Kc(e,t[a]);return _}function ho(e,t,a){return e===e&&(a!==n&&(e=e<=a?e:a),t!==n&&(e=e>=t?e:t)),e}function On(e,t,a,s,_,g){var T,y=t&S,v=t&N,k=t&C;if(a&&(T=_?a(e,s,_,g):a(e)),T!==n)return T;if(!Ce(e))return e;var P=ne(e);if(P){if(T=pw(e),!y)return ln(e,T)}else{var R=on(e),U=R==Ho||R==Oa;if(Zt(e))return Bl(e,y);if(R==gt||R==Ut||U&&!_){if(T=v||U?{}:t_(e),!y)return v?Jb(e,Sb(T,e)):Zb(e,_l(T,e))}else{if(!be[R])return _?e:{};T=dw(e,R,y)}}g||(g=new Vn);var V=g.get(e);if(V)return V;g.set(e,T),E_(e)?e.forEach(function(j){T.add(On(j,t,a,j,e,g))}):k_(e)&&e.forEach(function(j,de){T.set(de,On(j,t,a,de,e,g))});var K=k?v?Rc:Nc:v?un:Ke,se=P?n:K(e);return Rn(se||e,function(j,de){se&&(de=j,j=e[de]),jr(T,de,On(j,t,a,de,e,g))}),T}function bb(e){var t=Ke(e);return function(a){return ul(a,e,t)}}function ul(e,t,a){var s=a.length;if(e==null)return!s;for(e=xe(e);s--;){var _=a[s],g=t[_],T=e[_];if(T===n&&!(_ in e)||!g(T))return!1}return!0}function gl(e,t,a){if(typeof e!="function")throw new Dn(l);return na(function(){e.apply(n,a)},t)}function Xr(e,t,a,s){var _=-1,g=Ga,T=!0,y=e.length,v=[],k=t.length;if(!y)return v;a&&(t=Ae(t,vn(a))),s?(g=Qs,T=!1):t.length>=i&&(g=Hr,T=!1,t=new fo(t));e:for(;++_<y;){var P=e[_],R=a==null?P:a(P);if(P=s||P!==0?P:0,T&&R===R){for(var U=k;U--;)if(t[U]===R)continue e;v.push(P)}else g(t,R,s)||v.push(P)}return v}var Kt=Hl(Yn),fl=Hl(gc,!0);function wb(e,t){var a=!0;return Kt(e,function(s,_,g){return a=!!t(s,_,g),a}),a}function ai(e,t,a){for(var s=-1,_=e.length;++s<_;){var g=e[s],T=t(g);if(T!=null&&(y===n?T===T&&!In(T):a(T,y)))var y=T,v=g}return v}function vb(e,t,a,s){var _=e.length;for(a=re(a),a<0&&(a=-a>_?0:_+a),s=s===n||s>_?_:re(s),s<0&&(s+=_),s=a>s?0:R_(s);a<s;)e[a++]=t;return e}function hl(e,t){var a=[];return Kt(e,function(s,_,g){t(s,_,g)&&a.push(s)}),a}function Ze(e,t,a,s,_){var g=-1,T=e.length;for(a||(a=lw),_||(_=[]);++g<T;){var y=e[g];t>0&&a(y)?t>1?Ze(y,t-1,a,s,_):$t(_,y):s||(_[_.length]=y)}return _}var uc=$l(),Tl=$l(!0);function Yn(e,t){return e&&uc(e,t,Ke)}function gc(e,t){return e&&Tl(e,t,Ke)}function ii(e,t){return Ht(t,function(a){return bt(e[a])})}function To(e,t){t=Xt(t,e);for(var a=0,s=t.length;e!=null&&a<s;)e=e[Jn(t[a++])];return a&&a==s?e:n}function xl(e,t,a){var s=t(e);return ne(e)?s:$t(s,a(e))}function an(e){return e==null?e===n?Q0:Z0:uo&&uo in xe(e)?iw(e):xw(e)}function fc(e,t){return e>t}function Ab(e,t){return e!=null&&he.call(e,t)}function Ib(e,t){return e!=null&&t in xe(e)}function Cb(e,t,a){return e>=tn(t,a)&&e<ze(t,a)}function hc(e,t,a){for(var s=a?Qs:Ga,_=e[0].length,g=e.length,T=g,y=A(g),v=1/0,k=[];T--;){var P=e[T];T&&t&&(P=Ae(P,vn(t))),v=tn(P.length,v),y[T]=!a&&(t||_>=120&&P.length>=120)?new fo(T&&P):n}P=e[0];var R=-1,U=y[0];e:for(;++R<_&&k.length<v;){var V=P[R],K=t?t(V):V;if(V=a||V!==0?V:0,!(U?Hr(U,K):s(k,K,a))){for(T=g;--T;){var se=y[T];if(!(se?Hr(se,K):s(e[T],K,a)))continue e}U&&U.push(K),k.push(V)}}return k}function Lb(e,t,a,s){return Yn(e,function(_,g,T){t(s,a(_),g,T)}),s}function Yr(e,t,a){t=Xt(t,e),e=i_(e,t);var s=e==null?e:e[Jn(Fn(t))];return s==null?n:wn(s,e,a)}function yl(e){return ke(e)&&an(e)==Ut}function kb(e){return ke(e)&&an(e)==Gr}function Pb(e){return ke(e)&&an(e)==Se}function Zr(e,t,a,s,_){return e===t?!0:e==null||t==null||!ke(e)&&!ke(t)?e!==e&&t!==t:Eb(e,t,a,s,Zr,_)}function Eb(e,t,a,s,_,g){var T=ne(e),y=ne(t),v=T?Go:on(e),k=y?Go:on(t);v=v==Ut?gt:v,k=k==Ut?gt:k;var P=v==gt,R=k==gt,U=v==k;if(U&&Zt(e)){if(!Zt(t))return!1;T=!0,P=!1}if(U&&!P)return g||(g=new Vn),T||nr(e)?Ql(e,t,a,s,_,g):rw(e,t,v,a,s,_,g);if(!(a&D)){var V=P&&he.call(e,"__wrapped__"),K=R&&he.call(t,"__wrapped__");if(V||K){var se=V?e.value():e,j=K?t.value():t;return g||(g=new Vn),_(se,j,a,s,g)}}return U?(g||(g=new Vn),aw(e,t,a,s,_,g)):!1}function Nb(e){return ke(e)&&on(e)==Hn}function Tc(e,t,a,s){var _=a.length,g=_,T=!s;if(e==null)return!g;for(e=xe(e);_--;){var y=a[_];if(T&&y[2]?y[1]!==e[y[0]]:!(y[0]in e))return!1}for(;++_<g;){y=a[_];var v=y[0],k=e[v],P=y[1];if(T&&y[2]){if(k===n&&!(v in e))return!1}else{var R=new Vn;if(s)var U=s(k,P,v,e,t,R);if(!(U===n?Zr(P,k,D|H,s,R):U))return!1}}return!0}function Sl(e){if(!Ce(e)||uw(e))return!1;var t=bt(e)?NS:by;return t.test(yo(e))}function Rb(e){return ke(e)&&an(e)==Fr}function Db(e){return ke(e)&&on(e)==$n}function Mb(e){return ke(e)&&wi(e.length)&&!!we[an(e)]}function bl(e){return typeof e=="function"?e:e==null?gn:typeof e=="object"?ne(e)?Al(e[0],e[1]):vl(e):z_(e)}function xc(e){if(!ea(e))return FS(e);var t=[];for(var a in xe(e))he.call(e,a)&&a!="constructor"&&t.push(a);return t}function Ob(e){if(!Ce(e))return Tw(e);var t=ea(e),a=[];for(var s in e)s=="constructor"&&(t||!he.call(e,s))||a.push(s);return a}function yc(e,t){return e<t}function wl(e,t){var a=-1,s=_n(e)?A(e.length):[];return Kt(e,function(_,g,T){s[++a]=t(_,g,T)}),s}function vl(e){var t=Mc(e);return t.length==1&&t[0][2]?r_(t[0][0],t[0][1]):function(a){return a===e||Tc(a,e,t)}}function Al(e,t){return Bc(e)&&o_(t)?r_(Jn(e),t):function(a){var s=Kc(a,e);return s===n&&s===t?jc(a,e):Zr(t,s,D|H)}}function si(e,t,a,s,_){e!==t&&uc(t,function(g,T){if(_||(_=new Vn),Ce(g))Bb(e,t,T,a,si,s,_);else{var y=s?s(Wc(e,T),g,T+"",e,t,_):n;y===n&&(y=g),lc(e,T,y)}},un)}function Bb(e,t,a,s,_,g,T){var y=Wc(e,a),v=Wc(t,a),k=T.get(v);if(k){lc(e,a,k);return}var P=g?g(y,v,a+"",e,t,T):n,R=P===n;if(R){var U=ne(v),V=!U&&Zt(v),K=!U&&!V&&nr(v);P=v,U||V||K?ne(y)?P=y:Oe(y)?P=ln(y):V?(R=!1,P=Bl(v,!0)):K?(R=!1,P=Fl(v,!0)):P=[]:ta(v)||So(v)?(P=y,So(y)?P=D_(y):(!Ce(y)||bt(y))&&(P=t_(v))):R=!1}R&&(T.set(v,P),_(P,v,s,g,T),T.delete(v)),lc(e,a,P)}function Il(e,t){var a=e.length;if(!!a)return t+=t<0?a:0,St(t,a)?e[t]:n}function Cl(e,t,a){t.length?t=Ae(t,function(g){return ne(g)?function(T){return To(T,g.length===1?g[0]:g)}:g}):t=[gn];var s=-1;t=Ae(t,vn(q()));var _=wl(e,function(g,T,y){var v=Ae(t,function(k){return k(g)});return{criteria:v,index:++s,value:g}});return dS(_,function(g,T){return Yb(g,T,a)})}function Fb(e,t){return Ll(e,t,function(a,s){return jc(e,s)})}function Ll(e,t,a){for(var s=-1,_=t.length,g={};++s<_;){var T=t[s],y=To(e,T);a(y,T)&&Jr(g,Xt(T,e),y)}return g}function Wb(e){return function(t){return To(t,e)}}function Sc(e,t,a,s){var _=s?pS:Vo,g=-1,T=t.length,y=e;for(e===t&&(t=ln(t)),a&&(y=Ae(e,vn(a)));++g<T;)for(var v=0,k=t[g],P=a?a(k):k;(v=_(y,P,v,s))>-1;)y!==e&&Za.call(y,v,1),Za.call(e,v,1);return e}function kl(e,t){for(var a=e?t.length:0,s=a-1;a--;){var _=t[a];if(a==s||_!==g){var g=_;St(_)?Za.call(e,_,1):Ac(e,_)}}return e}function bc(e,t){return e+ei(pl()*(t-e+1))}function Ub(e,t,a,s){for(var _=-1,g=ze(Qa((t-e)/(a||1)),0),T=A(g);g--;)T[s?g:++_]=e,e+=a;return T}function wc(e,t){var a="";if(!e||t<1||t>ve)return a;do t%2&&(a+=e),t=ei(t/2),t&&(e+=e);while(t);return a}function pe(e,t){return Uc(a_(e,t,gn),e+"")}function Gb(e){return ll(tr(e))}function Hb(e,t){var a=tr(e);return hi(a,ho(t,0,a.length))}function Jr(e,t,a,s){if(!Ce(e))return e;t=Xt(t,e);for(var _=-1,g=t.length,T=g-1,y=e;y!=null&&++_<g;){var v=Jn(t[_]),k=a;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(_!=T){var P=y[v];k=s?s(P,v,y):n,k===n&&(k=Ce(P)?P:St(t[_+1])?[]:{})}jr(y,v,k),y=y[v]}return e}var Pl=ni?function(e,t){return ni.set(e,t),e}:gn,$b=Ja?function(e,t){return Ja(e,"toString",{configurable:!0,enumerable:!1,value:Yc(t),writable:!0})}:gn;function zb(e){return hi(tr(e))}function Bn(e,t,a){var s=-1,_=e.length;t<0&&(t=-t>_?0:_+t),a=a>_?_:a,a<0&&(a+=_),_=t>a?0:a-t>>>0,t>>>=0;for(var g=A(_);++s<_;)g[s]=e[s+t];return g}function Vb(e,t){var a;return Kt(e,function(s,_,g){return a=t(s,_,g),!a}),!!a}function ci(e,t,a){var s=0,_=e==null?s:e.length;if(typeof t=="number"&&t===t&&_<=Ds){for(;s<_;){var g=s+_>>>1,T=e[g];T!==null&&!In(T)&&(a?T<=t:T<t)?s=g+1:_=g}return _}return vc(e,t,gn,a)}function vc(e,t,a,s){var _=0,g=e==null?0:e.length;if(g===0)return 0;t=a(t);for(var T=t!==t,y=t===null,v=In(t),k=t===n;_<g;){var P=ei((_+g)/2),R=a(e[P]),U=R!==n,V=R===null,K=R===R,se=In(R);if(T)var j=s||K;else k?j=K&&(s||U):y?j=K&&U&&(s||!V):v?j=K&&U&&!V&&(s||!se):V||se?j=!1:j=s?R<=t:R<t;j?_=P+1:g=P}return tn(g,Rs)}function El(e,t){for(var a=-1,s=e.length,_=0,g=[];++a<s;){var T=e[a],y=t?t(T):T;if(!a||!qn(y,v)){var v=y;g[_++]=T===0?0:T}}return g}function Nl(e){return typeof e=="number"?e:In(e)?dn:+e}function An(e){if(typeof e=="string")return e;if(ne(e))return Ae(e,An)+"";if(In(e))return dl?dl.call(e):"";var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function jt(e,t,a){var s=-1,_=Ga,g=e.length,T=!0,y=[],v=y;if(a)T=!1,_=Qs;else if(g>=i){var k=t?null:tw(e);if(k)return $a(k);T=!1,_=Hr,v=new fo}else v=t?[]:y;e:for(;++s<g;){var P=e[s],R=t?t(P):P;if(P=a||P!==0?P:0,T&&R===R){for(var U=v.length;U--;)if(v[U]===R)continue e;t&&v.push(R),y.push(P)}else _(v,R,a)||(v!==y&&v.push(R),y.push(P))}return y}function Ac(e,t){return t=Xt(t,e),e=i_(e,t),e==null||delete e[Jn(Fn(t))]}function Rl(e,t,a,s){return Jr(e,t,a(To(e,t)),s)}function pi(e,t,a,s){for(var _=e.length,g=s?_:-1;(s?g--:++g<_)&&t(e[g],g,e););return a?Bn(e,s?0:g,s?g+1:_):Bn(e,s?g+1:0,s?_:g)}function Dl(e,t){var a=e;return a instanceof me&&(a=a.value()),ec(t,function(s,_){return _.func.apply(_.thisArg,$t([s],_.args))},a)}function Ic(e,t,a){var s=e.length;if(s<2)return s?jt(e[0]):[];for(var _=-1,g=A(s);++_<s;)for(var T=e[_],y=-1;++y<s;)y!=_&&(g[_]=Xr(g[_]||T,e[y],t,a));return jt(Ze(g,1),t,a)}function Ml(e,t,a){for(var s=-1,_=e.length,g=t.length,T={};++s<_;){var y=s<g?t[s]:n;a(T,e[s],y)}return T}function Cc(e){return Oe(e)?e:[]}function Lc(e){return typeof e=="function"?e:gn}function Xt(e,t){return ne(e)?e:Bc(e,t)?[e]:d_(ge(e))}var qb=pe;function Yt(e,t,a){var s=e.length;return a=a===n?s:a,!t&&a>=s?e:Bn(e,t,a)}var Ol=RS||function(e){return qe.clearTimeout(e)};function Bl(e,t){if(t)return e.slice();var a=e.length,s=rl?rl(a):new e.constructor(a);return e.copy(s),s}function kc(e){var t=new e.constructor(e.byteLength);return new Xa(t).set(new Xa(e)),t}function Kb(e,t){var a=t?kc(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function jb(e){var t=new e.constructor(e.source,ym.exec(e));return t.lastIndex=e.lastIndex,t}function Xb(e){return Kr?xe(Kr.call(e)):{}}function Fl(e,t){var a=t?kc(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function Wl(e,t){if(e!==t){var a=e!==n,s=e===null,_=e===e,g=In(e),T=t!==n,y=t===null,v=t===t,k=In(t);if(!y&&!k&&!g&&e>t||g&&T&&v&&!y&&!k||s&&T&&v||!a&&v||!_)return 1;if(!s&&!g&&!k&&e<t||k&&a&&_&&!s&&!g||y&&a&&_||!T&&_||!v)return-1}return 0}function Yb(e,t,a){for(var s=-1,_=e.criteria,g=t.criteria,T=_.length,y=a.length;++s<T;){var v=Wl(_[s],g[s]);if(v){if(s>=y)return v;var k=a[s];return v*(k=="desc"?-1:1)}}return e.index-t.index}function Ul(e,t,a,s){for(var _=-1,g=e.length,T=a.length,y=-1,v=t.length,k=ze(g-T,0),P=A(v+k),R=!s;++y<v;)P[y]=t[y];for(;++_<T;)(R||_<g)&&(P[a[_]]=e[_]);for(;k--;)P[y++]=e[_++];return P}function Gl(e,t,a,s){for(var _=-1,g=e.length,T=-1,y=a.length,v=-1,k=t.length,P=ze(g-y,0),R=A(P+k),U=!s;++_<P;)R[_]=e[_];for(var V=_;++v<k;)R[V+v]=t[v];for(;++T<y;)(U||_<g)&&(R[V+a[T]]=e[_++]);return R}function ln(e,t){var a=-1,s=e.length;for(t||(t=A(s));++a<s;)t[a]=e[a];return t}function Zn(e,t,a,s){var _=!a;a||(a={});for(var g=-1,T=t.length;++g<T;){var y=t[g],v=s?s(a[y],e[y],y,a,e):n;v===n&&(v=e[y]),_?Tt(a,y,v):jr(a,y,v)}return a}function Zb(e,t){return Zn(e,Oc(e),t)}function Jb(e,t){return Zn(e,e_(e),t)}function di(e,t){return function(a,s){var _=ne(a)?oS:yb,g=t?t():{};return _(a,e,q(s,2),g)}}function Jo(e){return pe(function(t,a){var s=-1,_=a.length,g=_>1?a[_-1]:n,T=_>2?a[2]:n;for(g=e.length>3&&typeof g=="function"?(_--,g):n,T&&sn(a[0],a[1],T)&&(g=_<3?n:g,_=1),t=xe(t);++s<_;){var y=a[s];y&&e(t,y,s,g)}return t})}function Hl(e,t){return function(a,s){if(a==null)return a;if(!_n(a))return e(a,s);for(var _=a.length,g=t?_:-1,T=xe(a);(t?g--:++g<_)&&s(T[g],g,T)!==!1;);return a}}function $l(e){return function(t,a,s){for(var _=-1,g=xe(t),T=s(t),y=T.length;y--;){var v=T[e?y:++_];if(a(g[v],v,g)===!1)break}return t}}function Qb(e,t,a){var s=t&G,_=Qr(e);function g(){var T=this&&this!==qe&&this instanceof g?_:e;return T.apply(s?a:this,arguments)}return g}function zl(e){return function(t){t=ge(t);var a=qo(t)?zn(t):n,s=a?a[0]:t.charAt(0),_=a?Yt(a,1).join(""):t.slice(1);return s[e]()+_}}function Qo(e){return function(t){return ec(H_(G_(t).replace($y,"")),e,"")}}function Qr(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var a=Zo(e.prototype),s=e.apply(a,t);return Ce(s)?s:a}}function ew(e,t,a){var s=Qr(e);function _(){for(var g=arguments.length,T=A(g),y=g,v=er(_);y--;)T[y]=arguments[y];var k=g<3&&T[0]!==v&&T[g-1]!==v?[]:zt(T,v);if(g-=k.length,g<a)return Xl(e,t,mi,_.placeholder,n,T,k,n,n,a-g);var P=this&&this!==qe&&this instanceof _?s:e;return wn(P,this,T)}return _}function Vl(e){return function(t,a,s){var _=xe(t);if(!_n(t)){var g=q(a,3);t=Ke(t),a=function(y){return g(_[y],y,_)}}var T=e(t,a,s);return T>-1?_[g?t[T]:T]:n}}function ql(e){return yt(function(t){var a=t.length,s=a,_=Mn.prototype.thru;for(e&&t.reverse();s--;){var g=t[s];if(typeof g!="function")throw new Dn(l);if(_&&!T&&gi(g)=="wrapper")var T=new Mn([],!0)}for(s=T?s:a;++s<a;){g=t[s];var y=gi(g),v=y=="wrapper"?Dc(g):n;v&&Fc(v[0])&&v[1]==(Q|J|ie|Le)&&!v[4].length&&v[9]==1?T=T[gi(v[0])].apply(T,v[3]):T=g.length==1&&Fc(g)?T[y]():T.thru(g)}return function(){var k=arguments,P=k[0];if(T&&k.length==1&&ne(P))return T.plant(P).value();for(var R=0,U=a?t[R].apply(this,k):P;++R<a;)U=t[R].call(this,U);return U}})}function mi(e,t,a,s,_,g,T,y,v,k){var P=t&Q,R=t&G,U=t&M,V=t&(J|ce),K=t&Sn,se=U?n:Qr(e);function j(){for(var de=arguments.length,le=A(de),Cn=de;Cn--;)le[Cn]=arguments[Cn];if(V)var cn=er(j),Ln=lS(le,cn);if(s&&(le=Ul(le,s,_,V)),g&&(le=Gl(le,g,T,V)),de-=Ln,V&&de<k){var Be=zt(le,cn);return Xl(e,t,mi,j.placeholder,a,le,Be,y,v,k-de)}var Kn=R?a:this,vt=U?Kn[e]:e;return de=le.length,y?le=yw(le,y):K&&de>1&&le.reverse(),P&&v<de&&(le.length=v),this&&this!==qe&&this instanceof j&&(vt=se||Qr(vt)),vt.apply(Kn,le)}return j}function Kl(e,t){return function(a,s){return Lb(a,e,t(s),{})}}function li(e,t){return function(a,s){var _;if(a===n&&s===n)return t;if(a!==n&&(_=a),s!==n){if(_===n)return s;typeof a=="string"||typeof s=="string"?(a=An(a),s=An(s)):(a=Nl(a),s=Nl(s)),_=e(a,s)}return _}}function Pc(e){return yt(function(t){return t=Ae(t,vn(q())),pe(function(a){var s=this;return e(t,function(_){return wn(_,s,a)})})})}function _i(e,t){t=t===n?" ":An(t);var a=t.length;if(a<2)return a?wc(t,e):t;var s=wc(t,Qa(e/Ko(t)));return qo(t)?Yt(zn(s),0,e).join(""):s.slice(0,e)}function nw(e,t,a,s){var _=t&G,g=Qr(e);function T(){for(var y=-1,v=arguments.length,k=-1,P=s.length,R=A(P+v),U=this&&this!==qe&&this instanceof T?g:e;++k<P;)R[k]=s[k];for(;v--;)R[k++]=arguments[++y];return wn(U,_?a:this,R)}return T}function jl(e){return function(t,a,s){return s&&typeof s!="number"&&sn(t,a,s)&&(a=s=n),t=wt(t),a===n?(a=t,t=0):a=wt(a),s=s===n?t<a?1:-1:wt(s),Ub(t,a,s,e)}}function ui(e){return function(t,a){return typeof t=="string"&&typeof a=="string"||(t=Wn(t),a=Wn(a)),e(t,a)}}function Xl(e,t,a,s,_,g,T,y,v,k){var P=t&J,R=P?T:n,U=P?n:T,V=P?g:n,K=P?n:g;t|=P?ie:Y,t&=~(P?Y:ie),t&X||(t&=~(G|M));var se=[e,t,_,V,R,K,U,y,v,k],j=a.apply(n,se);return Fc(e)&&s_(j,se),j.placeholder=s,c_(j,e,t)}function Ec(e){var t=$e[e];return function(a,s){if(a=Wn(a),s=s==null?0:tn(re(s),292),s&&cl(a)){var _=(ge(a)+"e").split("e"),g=t(_[0]+"e"+(+_[1]+s));return _=(ge(g)+"e").split("e"),+(_[0]+"e"+(+_[1]-s))}return t(a)}}var tw=Xo&&1/$a(new Xo([,-0]))[1]==Te?function(e){return new Xo(e)}:Qc;function Yl(e){return function(t){var a=on(t);return a==Hn?sc(t):a==$n?xS(t):mS(t,e(t))}}function xt(e,t,a,s,_,g,T,y){var v=t&M;if(!v&&typeof e!="function")throw new Dn(l);var k=s?s.length:0;if(k||(t&=~(ie|Y),s=_=n),T=T===n?T:ze(re(T),0),y=y===n?y:re(y),k-=_?_.length:0,t&Y){var P=s,R=_;s=_=n}var U=v?n:Dc(e),V=[e,t,a,s,_,P,R,g,T,y];if(U&&hw(V,U),e=V[0],t=V[1],a=V[2],s=V[3],_=V[4],y=V[9]=V[9]===n?v?0:e.length:ze(V[9]-k,0),!y&&t&(J|ce)&&(t&=~(J|ce)),!t||t==G)var K=Qb(e,t,a);else t==J||t==ce?K=ew(e,t,y):(t==ie||t==(G|ie))&&!_.length?K=nw(e,t,a,s):K=mi.apply(n,V);var se=U?Pl:s_;return c_(se(K,V),e,t)}function Zl(e,t,a,s){return e===n||qn(e,jo[a])&&!he.call(s,a)?t:e}function Jl(e,t,a,s,_,g){return Ce(e)&&Ce(t)&&(g.set(t,e),si(e,t,n,Jl,g),g.delete(t)),e}function ow(e){return ta(e)?n:e}function Ql(e,t,a,s,_,g){var T=a&D,y=e.length,v=t.length;if(y!=v&&!(T&&v>y))return!1;var k=g.get(e),P=g.get(t);if(k&&P)return k==t&&P==e;var R=-1,U=!0,V=a&H?new fo:n;for(g.set(e,t),g.set(t,e);++R<y;){var K=e[R],se=t[R];if(s)var j=T?s(se,K,R,t,e,g):s(K,se,R,e,t,g);if(j!==n){if(j)continue;U=!1;break}if(V){if(!nc(t,function(de,le){if(!Hr(V,le)&&(K===de||_(K,de,a,s,g)))return V.push(le)})){U=!1;break}}else if(!(K===se||_(K,se,a,s,g))){U=!1;break}}return g.delete(e),g.delete(t),U}function rw(e,t,a,s,_,g,T){switch(a){case $o:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Gr:return!(e.byteLength!=t.byteLength||!g(new Xa(e),new Xa(t)));case fe:case Se:case Br:return qn(+e,+t);case Gt:return e.name==t.name&&e.message==t.message;case Fr:case Wr:return e==t+"";case Hn:var y=sc;case $n:var v=s&D;if(y||(y=$a),e.size!=t.size&&!v)return!1;var k=T.get(e);if(k)return k==t;s|=H,T.set(e,t);var P=Ql(y(e),y(t),s,_,g,T);return T.delete(e),P;case Ba:if(Kr)return Kr.call(e)==Kr.call(t)}return!1}function aw(e,t,a,s,_,g){var T=a&D,y=Nc(e),v=y.length,k=Nc(t),P=k.length;if(v!=P&&!T)return!1;for(var R=v;R--;){var U=y[R];if(!(T?U in t:he.call(t,U)))return!1}var V=g.get(e),K=g.get(t);if(V&&K)return V==t&&K==e;var se=!0;g.set(e,t),g.set(t,e);for(var j=T;++R<v;){U=y[R];var de=e[U],le=t[U];if(s)var Cn=T?s(le,de,U,t,e,g):s(de,le,U,e,t,g);if(!(Cn===n?de===le||_(de,le,a,s,g):Cn)){se=!1;break}j||(j=U=="constructor")}if(se&&!j){var cn=e.constructor,Ln=t.constructor;cn!=Ln&&"constructor"in e&&"constructor"in t&&!(typeof cn=="function"&&cn instanceof cn&&typeof Ln=="function"&&Ln instanceof Ln)&&(se=!1)}return g.delete(e),g.delete(t),se}function yt(e){return Uc(a_(e,n,u_),e+"")}function Nc(e){return xl(e,Ke,Oc)}function Rc(e){return xl(e,un,e_)}var Dc=ni?function(e){return ni.get(e)}:Qc;function gi(e){for(var t=e.name+"",a=Yo[t],s=he.call(Yo,t)?a.length:0;s--;){var _=a[s],g=_.func;if(g==null||g==e)return _.name}return t}function er(e){var t=he.call(u,"placeholder")?u:e;return t.placeholder}function q(){var e=u.iteratee||Zc;return e=e===Zc?bl:e,arguments.length?e(arguments[0],arguments[1]):e}function fi(e,t){var a=e.__data__;return _w(t)?a[typeof t=="string"?"string":"hash"]:a.map}function Mc(e){for(var t=Ke(e),a=t.length;a--;){var s=t[a],_=e[s];t[a]=[s,_,o_(_)]}return t}function xo(e,t){var a=fS(e,t);return Sl(a)?a:n}function iw(e){var t=he.call(e,uo),a=e[uo];try{e[uo]=n;var s=!0}catch(g){}var _=Ka.call(e);return s&&(t?e[uo]=a:delete e[uo]),_}var Oc=pc?function(e){return e==null?[]:(e=xe(e),Ht(pc(e),function(t){return il.call(e,t)}))}:ep,e_=pc?function(e){for(var t=[];e;)$t(t,Oc(e)),e=Ya(e);return t}:ep,on=an;(dc&&on(new dc(new ArrayBuffer(1)))!=$o||zr&&on(new zr)!=Hn||mc&&on(mc.resolve())!=fm||Xo&&on(new Xo)!=$n||Vr&&on(new Vr)!=Ur)&&(on=function(e){var t=an(e),a=t==gt?e.constructor:n,s=a?yo(a):"";if(s)switch(s){case HS:return $o;case $S:return Hn;case zS:return fm;case VS:return $n;case qS:return Ur}return t});function sw(e,t,a){for(var s=-1,_=a.length;++s<_;){var g=a[s],T=g.size;switch(g.type){case"drop":e+=T;break;case"dropRight":t-=T;break;case"take":t=tn(t,e+T);break;case"takeRight":e=ze(e,t-T);break}}return{start:e,end:t}}function cw(e){var t=e.match(uy);return t?t[1].split(gy):[]}function n_(e,t,a){t=Xt(t,e);for(var s=-1,_=t.length,g=!1;++s<_;){var T=Jn(t[s]);if(!(g=e!=null&&a(e,T)))break;e=e[T]}return g||++s!=_?g:(_=e==null?0:e.length,!!_&&wi(_)&&St(T,_)&&(ne(e)||So(e)))}function pw(e){var t=e.length,a=new e.constructor(t);return t&&typeof e[0]=="string"&&he.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function t_(e){return typeof e.constructor=="function"&&!ea(e)?Zo(Ya(e)):{}}function dw(e,t,a){var s=e.constructor;switch(t){case Gr:return kc(e);case fe:case Se:return new s(+e);case $o:return Kb(e,a);case Ms:case Os:case Bs:case Fs:case Ws:case Us:case Gs:case Hs:case $s:return Fl(e,a);case Hn:return new s;case Br:case Wr:return new s(e);case Fr:return jb(e);case $n:return new s;case Ba:return Xb(e)}}function mw(e,t){var a=t.length;if(!a)return e;var s=a-1;return t[s]=(a>1?"& ":"")+t[s],t=t.join(a>2?", ":" "),e.replace(_y,`{
/* [wrapped with `+t+`] */
`)}function lw(e){return ne(e)||So(e)||!!(sl&&e&&e[sl])}function St(e,t){var a=typeof e;return t=t==null?ve:t,!!t&&(a=="number"||a!="symbol"&&vy.test(e))&&e>-1&&e%1==0&&e<t}function sn(e,t,a){if(!Ce(a))return!1;var s=typeof t;return(s=="number"?_n(a)&&St(t,a.length):s=="string"&&t in a)?qn(a[t],e):!1}function Bc(e,t){if(ne(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||In(e)?!0:py.test(e)||!cy.test(e)||t!=null&&e in xe(t)}function _w(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Fc(e){var t=gi(e),a=u[t];if(typeof a!="function"||!(t in me.prototype))return!1;if(e===a)return!0;var s=Dc(a);return!!s&&e===s[0]}function uw(e){return!!ol&&ol in e}var gw=Va?bt:np;function ea(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||jo;return e===a}function o_(e){return e===e&&!Ce(e)}function r_(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==n||e in xe(a))}}function fw(e){var t=Si(e,function(s){return a.size===w&&a.clear(),s}),a=t.cache;return t}function hw(e,t){var a=e[1],s=t[1],_=a|s,g=_<(G|M|Q),T=s==Q&&a==J||s==Q&&a==Le&&e[7].length<=t[8]||s==(Q|Le)&&t[7].length<=t[8]&&a==J;if(!(g||T))return e;s&G&&(e[2]=t[2],_|=a&G?0:X);var y=t[3];if(y){var v=e[3];e[3]=v?Ul(v,y,t[4]):y,e[4]=v?zt(e[3],x):t[4]}return y=t[5],y&&(v=e[5],e[5]=v?Gl(v,y,t[6]):y,e[6]=v?zt(e[5],x):t[6]),y=t[7],y&&(e[7]=y),s&Q&&(e[8]=e[8]==null?t[8]:tn(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=_,e}function Tw(e){var t=[];if(e!=null)for(var a in xe(e))t.push(a);return t}function xw(e){return Ka.call(e)}function a_(e,t,a){return t=ze(t===n?e.length-1:t,0),function(){for(var s=arguments,_=-1,g=ze(s.length-t,0),T=A(g);++_<g;)T[_]=s[t+_];_=-1;for(var y=A(t+1);++_<t;)y[_]=s[_];return y[t]=a(T),wn(e,this,y)}}function i_(e,t){return t.length<2?e:To(e,Bn(t,0,-1))}function yw(e,t){for(var a=e.length,s=tn(t.length,a),_=ln(e);s--;){var g=t[s];e[s]=St(g,a)?_[g]:n}return e}function Wc(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var s_=p_(Pl),na=MS||function(e,t){return qe.setTimeout(e,t)},Uc=p_($b);function c_(e,t,a){var s=t+"";return Uc(e,mw(s,Sw(cw(s),a)))}function p_(e){var t=0,a=0;return function(){var s=WS(),_=lo-(s-a);if(a=s,_>0){if(++t>=_t)return arguments[0]}else t=0;return e.apply(n,arguments)}}function hi(e,t){var a=-1,s=e.length,_=s-1;for(t=t===n?s:t;++a<t;){var g=bc(a,_),T=e[g];e[g]=e[a],e[a]=T}return e.length=t,e}var d_=fw(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(dy,function(a,s,_,g){t.push(_?g.replace(Ty,"$1"):s||a)}),t});function Jn(e){if(typeof e=="string"||In(e))return e;var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function yo(e){if(e!=null){try{return qa.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Sw(e,t){return Rn(Ma,function(a){var s="_."+a[0];t&a[1]&&!Ga(e,s)&&e.push(s)}),e.sort()}function m_(e){if(e instanceof me)return e.clone();var t=new Mn(e.__wrapped__,e.__chain__);return t.__actions__=ln(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function bw(e,t,a){(a?sn(e,t,a):t===n)?t=1:t=ze(re(t),0);var s=e==null?0:e.length;if(!s||t<1)return[];for(var _=0,g=0,T=A(Qa(s/t));_<s;)T[g++]=Bn(e,_,_+=t);return T}function ww(e){for(var t=-1,a=e==null?0:e.length,s=0,_=[];++t<a;){var g=e[t];g&&(_[s++]=g)}return _}function vw(){var e=arguments.length;if(!e)return[];for(var t=A(e-1),a=arguments[0],s=e;s--;)t[s-1]=arguments[s];return $t(ne(a)?ln(a):[a],Ze(t,1))}var Aw=pe(function(e,t){return Oe(e)?Xr(e,Ze(t,1,Oe,!0)):[]}),Iw=pe(function(e,t){var a=Fn(t);return Oe(a)&&(a=n),Oe(e)?Xr(e,Ze(t,1,Oe,!0),q(a,2)):[]}),Cw=pe(function(e,t){var a=Fn(t);return Oe(a)&&(a=n),Oe(e)?Xr(e,Ze(t,1,Oe,!0),n,a):[]});function Lw(e,t,a){var s=e==null?0:e.length;return s?(t=a||t===n?1:re(t),Bn(e,t<0?0:t,s)):[]}function kw(e,t,a){var s=e==null?0:e.length;return s?(t=a||t===n?1:re(t),t=s-t,Bn(e,0,t<0?0:t)):[]}function Pw(e,t){return e&&e.length?pi(e,q(t,3),!0,!0):[]}function Ew(e,t){return e&&e.length?pi(e,q(t,3),!0):[]}function Nw(e,t,a,s){var _=e==null?0:e.length;return _?(a&&typeof a!="number"&&sn(e,t,a)&&(a=0,s=_),vb(e,t,a,s)):[]}function l_(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=a==null?0:re(a);return _<0&&(_=ze(s+_,0)),Ha(e,q(t,3),_)}function __(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=s-1;return a!==n&&(_=re(a),_=a<0?ze(s+_,0):tn(_,s-1)),Ha(e,q(t,3),_,!0)}function u_(e){var t=e==null?0:e.length;return t?Ze(e,1):[]}function Rw(e){var t=e==null?0:e.length;return t?Ze(e,Te):[]}function Dw(e,t){var a=e==null?0:e.length;return a?(t=t===n?1:re(t),Ze(e,t)):[]}function Mw(e){for(var t=-1,a=e==null?0:e.length,s={};++t<a;){var _=e[t];s[_[0]]=_[1]}return s}function g_(e){return e&&e.length?e[0]:n}function Ow(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=a==null?0:re(a);return _<0&&(_=ze(s+_,0)),Vo(e,t,_)}function Bw(e){var t=e==null?0:e.length;return t?Bn(e,0,-1):[]}var Fw=pe(function(e){var t=Ae(e,Cc);return t.length&&t[0]===e[0]?hc(t):[]}),Ww=pe(function(e){var t=Fn(e),a=Ae(e,Cc);return t===Fn(a)?t=n:a.pop(),a.length&&a[0]===e[0]?hc(a,q(t,2)):[]}),Uw=pe(function(e){var t=Fn(e),a=Ae(e,Cc);return t=typeof t=="function"?t:n,t&&a.pop(),a.length&&a[0]===e[0]?hc(a,n,t):[]});function Gw(e,t){return e==null?"":BS.call(e,t)}function Fn(e){var t=e==null?0:e.length;return t?e[t-1]:n}function Hw(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=s;return a!==n&&(_=re(a),_=_<0?ze(s+_,0):tn(_,s-1)),t===t?SS(e,t,_):Ha(e,Xm,_,!0)}function $w(e,t){return e&&e.length?Il(e,re(t)):n}var zw=pe(f_);function f_(e,t){return e&&e.length&&t&&t.length?Sc(e,t):e}function Vw(e,t,a){return e&&e.length&&t&&t.length?Sc(e,t,q(a,2)):e}function qw(e,t,a){return e&&e.length&&t&&t.length?Sc(e,t,n,a):e}var Kw=yt(function(e,t){var a=e==null?0:e.length,s=_c(e,t);return kl(e,Ae(t,function(_){return St(_,a)?+_:_}).sort(Wl)),s});function jw(e,t){var a=[];if(!(e&&e.length))return a;var s=-1,_=[],g=e.length;for(t=q(t,3);++s<g;){var T=e[s];t(T,s,e)&&(a.push(T),_.push(s))}return kl(e,_),a}function Gc(e){return e==null?e:GS.call(e)}function Xw(e,t,a){var s=e==null?0:e.length;return s?(a&&typeof a!="number"&&sn(e,t,a)?(t=0,a=s):(t=t==null?0:re(t),a=a===n?s:re(a)),Bn(e,t,a)):[]}function Yw(e,t){return ci(e,t)}function Zw(e,t,a){return vc(e,t,q(a,2))}function Jw(e,t){var a=e==null?0:e.length;if(a){var s=ci(e,t);if(s<a&&qn(e[s],t))return s}return-1}function Qw(e,t){return ci(e,t,!0)}function ev(e,t,a){return vc(e,t,q(a,2),!0)}function nv(e,t){var a=e==null?0:e.length;if(a){var s=ci(e,t,!0)-1;if(qn(e[s],t))return s}return-1}function tv(e){return e&&e.length?El(e):[]}function ov(e,t){return e&&e.length?El(e,q(t,2)):[]}function rv(e){var t=e==null?0:e.length;return t?Bn(e,1,t):[]}function av(e,t,a){return e&&e.length?(t=a||t===n?1:re(t),Bn(e,0,t<0?0:t)):[]}function iv(e,t,a){var s=e==null?0:e.length;return s?(t=a||t===n?1:re(t),t=s-t,Bn(e,t<0?0:t,s)):[]}function sv(e,t){return e&&e.length?pi(e,q(t,3),!1,!0):[]}function cv(e,t){return e&&e.length?pi(e,q(t,3)):[]}var pv=pe(function(e){return jt(Ze(e,1,Oe,!0))}),dv=pe(function(e){var t=Fn(e);return Oe(t)&&(t=n),jt(Ze(e,1,Oe,!0),q(t,2))}),mv=pe(function(e){var t=Fn(e);return t=typeof t=="function"?t:n,jt(Ze(e,1,Oe,!0),n,t)});function lv(e){return e&&e.length?jt(e):[]}function _v(e,t){return e&&e.length?jt(e,q(t,2)):[]}function uv(e,t){return t=typeof t=="function"?t:n,e&&e.length?jt(e,n,t):[]}function Hc(e){if(!(e&&e.length))return[];var t=0;return e=Ht(e,function(a){if(Oe(a))return t=ze(a.length,t),!0}),ac(t,function(a){return Ae(e,tc(a))})}function h_(e,t){if(!(e&&e.length))return[];var a=Hc(e);return t==null?a:Ae(a,function(s){return wn(t,n,s)})}var gv=pe(function(e,t){return Oe(e)?Xr(e,t):[]}),fv=pe(function(e){return Ic(Ht(e,Oe))}),hv=pe(function(e){var t=Fn(e);return Oe(t)&&(t=n),Ic(Ht(e,Oe),q(t,2))}),Tv=pe(function(e){var t=Fn(e);return t=typeof t=="function"?t:n,Ic(Ht(e,Oe),n,t)}),xv=pe(Hc);function yv(e,t){return Ml(e||[],t||[],jr)}function Sv(e,t){return Ml(e||[],t||[],Jr)}var bv=pe(function(e){var t=e.length,a=t>1?e[t-1]:n;return a=typeof a=="function"?(e.pop(),a):n,h_(e,a)});function T_(e){var t=u(e);return t.__chain__=!0,t}function wv(e,t){return t(e),e}function Ti(e,t){return t(e)}var vv=yt(function(e){var t=e.length,a=t?e[0]:0,s=this.__wrapped__,_=function(g){return _c(g,e)};return t>1||this.__actions__.length||!(s instanceof me)||!St(a)?this.thru(_):(s=s.slice(a,+a+(t?1:0)),s.__actions__.push({func:Ti,args:[_],thisArg:n}),new Mn(s,this.__chain__).thru(function(g){return t&&!g.length&&g.push(n),g}))});function Av(){return T_(this)}function Iv(){return new Mn(this.value(),this.__chain__)}function Cv(){this.__values__===n&&(this.__values__=N_(this.value()));var e=this.__index__>=this.__values__.length,t=e?n:this.__values__[this.__index__++];return{done:e,value:t}}function Lv(){return this}function kv(e){for(var t,a=this;a instanceof oi;){var s=m_(a);s.__index__=0,s.__values__=n,t?_.__wrapped__=s:t=s;var _=s;a=a.__wrapped__}return _.__wrapped__=e,t}function Pv(){var e=this.__wrapped__;if(e instanceof me){var t=e;return this.__actions__.length&&(t=new me(this)),t=t.reverse(),t.__actions__.push({func:Ti,args:[Gc],thisArg:n}),new Mn(t,this.__chain__)}return this.thru(Gc)}function Ev(){return Dl(this.__wrapped__,this.__actions__)}var Nv=di(function(e,t,a){he.call(e,a)?++e[a]:Tt(e,a,1)});function Rv(e,t,a){var s=ne(e)?Km:wb;return a&&sn(e,t,a)&&(t=n),s(e,q(t,3))}function Dv(e,t){var a=ne(e)?Ht:hl;return a(e,q(t,3))}var Mv=Vl(l_),Ov=Vl(__);function Bv(e,t){return Ze(xi(e,t),1)}function Fv(e,t){return Ze(xi(e,t),Te)}function Wv(e,t,a){return a=a===n?1:re(a),Ze(xi(e,t),a)}function x_(e,t){var a=ne(e)?Rn:Kt;return a(e,q(t,3))}function y_(e,t){var a=ne(e)?rS:fl;return a(e,q(t,3))}var Uv=di(function(e,t,a){he.call(e,a)?e[a].push(t):Tt(e,a,[t])});function Gv(e,t,a,s){e=_n(e)?e:tr(e),a=a&&!s?re(a):0;var _=e.length;return a<0&&(a=ze(_+a,0)),vi(e)?a<=_&&e.indexOf(t,a)>-1:!!_&&Vo(e,t,a)>-1}var Hv=pe(function(e,t,a){var s=-1,_=typeof t=="function",g=_n(e)?A(e.length):[];return Kt(e,function(T){g[++s]=_?wn(t,T,a):Yr(T,t,a)}),g}),$v=di(function(e,t,a){Tt(e,a,t)});function xi(e,t){var a=ne(e)?Ae:wl;return a(e,q(t,3))}function zv(e,t,a,s){return e==null?[]:(ne(t)||(t=t==null?[]:[t]),a=s?n:a,ne(a)||(a=a==null?[]:[a]),Cl(e,t,a))}var Vv=di(function(e,t,a){e[a?0:1].push(t)},function(){return[[],[]]});function qv(e,t,a){var s=ne(e)?ec:Zm,_=arguments.length<3;return s(e,q(t,4),a,_,Kt)}function Kv(e,t,a){var s=ne(e)?aS:Zm,_=arguments.length<3;return s(e,q(t,4),a,_,fl)}function jv(e,t){var a=ne(e)?Ht:hl;return a(e,bi(q(t,3)))}function Xv(e){var t=ne(e)?ll:Gb;return t(e)}function Yv(e,t,a){(a?sn(e,t,a):t===n)?t=1:t=re(t);var s=ne(e)?Tb:Hb;return s(e,t)}function Zv(e){var t=ne(e)?xb:zb;return t(e)}function Jv(e){if(e==null)return 0;if(_n(e))return vi(e)?Ko(e):e.length;var t=on(e);return t==Hn||t==$n?e.size:xc(e).length}function Qv(e,t,a){var s=ne(e)?nc:Vb;return a&&sn(e,t,a)&&(t=n),s(e,q(t,3))}var e1=pe(function(e,t){if(e==null)return[];var a=t.length;return a>1&&sn(e,t[0],t[1])?t=[]:a>2&&sn(t[0],t[1],t[2])&&(t=[t[0]]),Cl(e,Ze(t,1),[])}),yi=DS||function(){return qe.Date.now()};function n1(e,t){if(typeof t!="function")throw new Dn(l);return e=re(e),function(){if(--e<1)return t.apply(this,arguments)}}function S_(e,t,a){return t=a?n:t,t=e&&t==null?e.length:t,xt(e,Q,n,n,n,n,t)}function b_(e,t){var a;if(typeof t!="function")throw new Dn(l);return e=re(e),function(){return--e>0&&(a=t.apply(this,arguments)),e<=1&&(t=n),a}}var $c=pe(function(e,t,a){var s=G;if(a.length){var _=zt(a,er($c));s|=ie}return xt(e,s,t,a,_)}),w_=pe(function(e,t,a){var s=G|M;if(a.length){var _=zt(a,er(w_));s|=ie}return xt(t,s,e,a,_)});function v_(e,t,a){t=a?n:t;var s=xt(e,J,n,n,n,n,n,t);return s.placeholder=v_.placeholder,s}function A_(e,t,a){t=a?n:t;var s=xt(e,ce,n,n,n,n,n,t);return s.placeholder=A_.placeholder,s}function I_(e,t,a){var s,_,g,T,y,v,k=0,P=!1,R=!1,U=!0;if(typeof e!="function")throw new Dn(l);t=Wn(t)||0,Ce(a)&&(P=!!a.leading,R="maxWait"in a,g=R?ze(Wn(a.maxWait)||0,t):g,U="trailing"in a?!!a.trailing:U);function V(Be){var Kn=s,vt=_;return s=_=n,k=Be,T=e.apply(vt,Kn),T}function K(Be){return k=Be,y=na(de,t),P?V(Be):T}function se(Be){var Kn=Be-v,vt=Be-k,V_=t-Kn;return R?tn(V_,g-vt):V_}function j(Be){var Kn=Be-v,vt=Be-k;return v===n||Kn>=t||Kn<0||R&&vt>=g}function de(){var Be=yi();if(j(Be))return le(Be);y=na(de,se(Be))}function le(Be){return y=n,U&&s?V(Be):(s=_=n,T)}function Cn(){y!==n&&Ol(y),k=0,s=v=_=y=n}function cn(){return y===n?T:le(yi())}function Ln(){var Be=yi(),Kn=j(Be);if(s=arguments,_=this,v=Be,Kn){if(y===n)return K(v);if(R)return Ol(y),y=na(de,t),V(v)}return y===n&&(y=na(de,t)),T}return Ln.cancel=Cn,Ln.flush=cn,Ln}var t1=pe(function(e,t){return gl(e,1,t)}),o1=pe(function(e,t,a){return gl(e,Wn(t)||0,a)});function r1(e){return xt(e,Sn)}function Si(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Dn(l);var a=function(){var s=arguments,_=t?t.apply(this,s):s[0],g=a.cache;if(g.has(_))return g.get(_);var T=e.apply(this,s);return a.cache=g.set(_,T)||g,T};return a.cache=new(Si.Cache||ht),a}Si.Cache=ht;function bi(e){if(typeof e!="function")throw new Dn(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function a1(e){return b_(2,e)}var i1=qb(function(e,t){t=t.length==1&&ne(t[0])?Ae(t[0],vn(q())):Ae(Ze(t,1),vn(q()));var a=t.length;return pe(function(s){for(var _=-1,g=tn(s.length,a);++_<g;)s[_]=t[_].call(this,s[_]);return wn(e,this,s)})}),zc=pe(function(e,t){var a=zt(t,er(zc));return xt(e,ie,n,t,a)}),C_=pe(function(e,t){var a=zt(t,er(C_));return xt(e,Y,n,t,a)}),s1=yt(function(e,t){return xt(e,Le,n,n,n,t)});function c1(e,t){if(typeof e!="function")throw new Dn(l);return t=t===n?t:re(t),pe(e,t)}function p1(e,t){if(typeof e!="function")throw new Dn(l);return t=t==null?0:ze(re(t),0),pe(function(a){var s=a[t],_=Yt(a,0,t);return s&&$t(_,s),wn(e,this,_)})}function d1(e,t,a){var s=!0,_=!0;if(typeof e!="function")throw new Dn(l);return Ce(a)&&(s="leading"in a?!!a.leading:s,_="trailing"in a?!!a.trailing:_),I_(e,t,{leading:s,maxWait:t,trailing:_})}function m1(e){return S_(e,1)}function l1(e,t){return zc(Lc(t),e)}function _1(){if(!arguments.length)return[];var e=arguments[0];return ne(e)?e:[e]}function u1(e){return On(e,C)}function g1(e,t){return t=typeof t=="function"?t:n,On(e,C,t)}function f1(e){return On(e,S|C)}function h1(e,t){return t=typeof t=="function"?t:n,On(e,S|C,t)}function T1(e,t){return t==null||ul(e,t,Ke(t))}function qn(e,t){return e===t||e!==e&&t!==t}var x1=ui(fc),y1=ui(function(e,t){return e>=t}),So=yl(function(){return arguments}())?yl:function(e){return ke(e)&&he.call(e,"callee")&&!il.call(e,"callee")},ne=A.isArray,S1=Gm?vn(Gm):kb;function _n(e){return e!=null&&wi(e.length)&&!bt(e)}function Oe(e){return ke(e)&&_n(e)}function b1(e){return e===!0||e===!1||ke(e)&&an(e)==fe}var Zt=OS||np,w1=Hm?vn(Hm):Pb;function v1(e){return ke(e)&&e.nodeType===1&&!ta(e)}function A1(e){if(e==null)return!0;if(_n(e)&&(ne(e)||typeof e=="string"||typeof e.splice=="function"||Zt(e)||nr(e)||So(e)))return!e.length;var t=on(e);if(t==Hn||t==$n)return!e.size;if(ea(e))return!xc(e).length;for(var a in e)if(he.call(e,a))return!1;return!0}function I1(e,t){return Zr(e,t)}function C1(e,t,a){a=typeof a=="function"?a:n;var s=a?a(e,t):n;return s===n?Zr(e,t,n,a):!!s}function Vc(e){if(!ke(e))return!1;var t=an(e);return t==Gt||t==Me||typeof e.message=="string"&&typeof e.name=="string"&&!ta(e)}function L1(e){return typeof e=="number"&&cl(e)}function bt(e){if(!Ce(e))return!1;var t=an(e);return t==Ho||t==Oa||t==Or||t==J0}function L_(e){return typeof e=="number"&&e==re(e)}function wi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ve}function Ce(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function ke(e){return e!=null&&typeof e=="object"}var k_=$m?vn($m):Nb;function k1(e,t){return e===t||Tc(e,t,Mc(t))}function P1(e,t,a){return a=typeof a=="function"?a:n,Tc(e,t,Mc(t),a)}function E1(e){return P_(e)&&e!=+e}function N1(e){if(gw(e))throw new ee(c);return Sl(e)}function R1(e){return e===null}function D1(e){return e==null}function P_(e){return typeof e=="number"||ke(e)&&an(e)==Br}function ta(e){if(!ke(e)||an(e)!=gt)return!1;var t=Ya(e);if(t===null)return!0;var a=he.call(t,"constructor")&&t.constructor;return typeof a=="function"&&a instanceof a&&qa.call(a)==PS}var qc=zm?vn(zm):Rb;function M1(e){return L_(e)&&e>=-ve&&e<=ve}var E_=Vm?vn(Vm):Db;function vi(e){return typeof e=="string"||!ne(e)&&ke(e)&&an(e)==Wr}function In(e){return typeof e=="symbol"||ke(e)&&an(e)==Ba}var nr=qm?vn(qm):Mb;function O1(e){return e===n}function B1(e){return ke(e)&&on(e)==Ur}function F1(e){return ke(e)&&an(e)==ey}var W1=ui(yc),U1=ui(function(e,t){return e<=t});function N_(e){if(!e)return[];if(_n(e))return vi(e)?zn(e):ln(e);if($r&&e[$r])return TS(e[$r]());var t=on(e),a=t==Hn?sc:t==$n?$a:tr;return a(e)}function wt(e){if(!e)return e===0?e:0;if(e=Wn(e),e===Te||e===-Te){var t=e<0?-1:1;return t*De}return e===e?e:0}function re(e){var t=wt(e),a=t%1;return t===t?a?t-a:t:0}function R_(e){return e?ho(re(e),0,mn):0}function Wn(e){if(typeof e=="number")return e;if(In(e))return dn;if(Ce(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Jm(e);var a=Sy.test(e);return a||wy.test(e)?nS(e.slice(2),a?2:8):yy.test(e)?dn:+e}function D_(e){return Zn(e,un(e))}function G1(e){return e?ho(re(e),-ve,ve):e===0?e:0}function ge(e){return e==null?"":An(e)}var H1=Jo(function(e,t){if(ea(t)||_n(t)){Zn(t,Ke(t),e);return}for(var a in t)he.call(t,a)&&jr(e,a,t[a])}),M_=Jo(function(e,t){Zn(t,un(t),e)}),Ai=Jo(function(e,t,a,s){Zn(t,un(t),e,s)}),$1=Jo(function(e,t,a,s){Zn(t,Ke(t),e,s)}),z1=yt(_c);function V1(e,t){var a=Zo(e);return t==null?a:_l(a,t)}var q1=pe(function(e,t){e=xe(e);var a=-1,s=t.length,_=s>2?t[2]:n;for(_&&sn(t[0],t[1],_)&&(s=1);++a<s;)for(var g=t[a],T=un(g),y=-1,v=T.length;++y<v;){var k=T[y],P=e[k];(P===n||qn(P,jo[k])&&!he.call(e,k))&&(e[k]=g[k])}return e}),K1=pe(function(e){return e.push(n,Jl),wn(O_,n,e)});function j1(e,t){return jm(e,q(t,3),Yn)}function X1(e,t){return jm(e,q(t,3),gc)}function Y1(e,t){return e==null?e:uc(e,q(t,3),un)}function Z1(e,t){return e==null?e:Tl(e,q(t,3),un)}function J1(e,t){return e&&Yn(e,q(t,3))}function Q1(e,t){return e&&gc(e,q(t,3))}function eA(e){return e==null?[]:ii(e,Ke(e))}function nA(e){return e==null?[]:ii(e,un(e))}function Kc(e,t,a){var s=e==null?n:To(e,t);return s===n?a:s}function tA(e,t){return e!=null&&n_(e,t,Ab)}function jc(e,t){return e!=null&&n_(e,t,Ib)}var oA=Kl(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=Ka.call(t)),e[t]=a},Yc(gn)),rA=Kl(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=Ka.call(t)),he.call(e,t)?e[t].push(a):e[t]=[a]},q),aA=pe(Yr);function Ke(e){return _n(e)?ml(e):xc(e)}function un(e){return _n(e)?ml(e,!0):Ob(e)}function iA(e,t){var a={};return t=q(t,3),Yn(e,function(s,_,g){Tt(a,t(s,_,g),s)}),a}function sA(e,t){var a={};return t=q(t,3),Yn(e,function(s,_,g){Tt(a,_,t(s,_,g))}),a}var cA=Jo(function(e,t,a){si(e,t,a)}),O_=Jo(function(e,t,a,s){si(e,t,a,s)}),pA=yt(function(e,t){var a={};if(e==null)return a;var s=!1;t=Ae(t,function(g){return g=Xt(g,e),s||(s=g.length>1),g}),Zn(e,Rc(e),a),s&&(a=On(a,S|N|C,ow));for(var _=t.length;_--;)Ac(a,t[_]);return a});function dA(e,t){return B_(e,bi(q(t)))}var mA=yt(function(e,t){return e==null?{}:Fb(e,t)});function B_(e,t){if(e==null)return{};var a=Ae(Rc(e),function(s){return[s]});return t=q(t),Ll(e,a,function(s,_){return t(s,_[0])})}function lA(e,t,a){t=Xt(t,e);var s=-1,_=t.length;for(_||(_=1,e=n);++s<_;){var g=e==null?n:e[Jn(t[s])];g===n&&(s=_,g=a),e=bt(g)?g.call(e):g}return e}function _A(e,t,a){return e==null?e:Jr(e,t,a)}function uA(e,t,a,s){return s=typeof s=="function"?s:n,e==null?e:Jr(e,t,a,s)}var F_=Yl(Ke),W_=Yl(un);function gA(e,t,a){var s=ne(e),_=s||Zt(e)||nr(e);if(t=q(t,4),a==null){var g=e&&e.constructor;_?a=s?new g:[]:Ce(e)?a=bt(g)?Zo(Ya(e)):{}:a={}}return(_?Rn:Yn)(e,function(T,y,v){return t(a,T,y,v)}),a}function fA(e,t){return e==null?!0:Ac(e,t)}function hA(e,t,a){return e==null?e:Rl(e,t,Lc(a))}function TA(e,t,a,s){return s=typeof s=="function"?s:n,e==null?e:Rl(e,t,Lc(a),s)}function tr(e){return e==null?[]:ic(e,Ke(e))}function xA(e){return e==null?[]:ic(e,un(e))}function yA(e,t,a){return a===n&&(a=t,t=n),a!==n&&(a=Wn(a),a=a===a?a:0),t!==n&&(t=Wn(t),t=t===t?t:0),ho(Wn(e),t,a)}function SA(e,t,a){return t=wt(t),a===n?(a=t,t=0):a=wt(a),e=Wn(e),Cb(e,t,a)}function bA(e,t,a){if(a&&typeof a!="boolean"&&sn(e,t,a)&&(t=a=n),a===n&&(typeof t=="boolean"?(a=t,t=n):typeof e=="boolean"&&(a=e,e=n)),e===n&&t===n?(e=0,t=1):(e=wt(e),t===n?(t=e,e=0):t=wt(t)),e>t){var s=e;e=t,t=s}if(a||e%1||t%1){var _=pl();return tn(e+_*(t-e+eS("1e-"+((_+"").length-1))),t)}return bc(e,t)}var wA=Qo(function(e,t,a){return t=t.toLowerCase(),e+(a?U_(t):t)});function U_(e){return Xc(ge(e).toLowerCase())}function G_(e){return e=ge(e),e&&e.replace(Ay,_S).replace(zy,"")}function vA(e,t,a){e=ge(e),t=An(t);var s=e.length;a=a===n?s:ho(re(a),0,s);var _=a;return a-=t.length,a>=0&&e.slice(a,_)==t}function AA(e){return e=ge(e),e&&ay.test(e)?e.replace(Tm,uS):e}function IA(e){return e=ge(e),e&&my.test(e)?e.replace(zs,"\\$&"):e}var CA=Qo(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}),LA=Qo(function(e,t,a){return e+(a?" ":"")+t.toLowerCase()}),kA=zl("toLowerCase");function PA(e,t,a){e=ge(e),t=re(t);var s=t?Ko(e):0;if(!t||s>=t)return e;var _=(t-s)/2;return _i(ei(_),a)+e+_i(Qa(_),a)}function EA(e,t,a){e=ge(e),t=re(t);var s=t?Ko(e):0;return t&&s<t?e+_i(t-s,a):e}function NA(e,t,a){e=ge(e),t=re(t);var s=t?Ko(e):0;return t&&s<t?_i(t-s,a)+e:e}function RA(e,t,a){return a||t==null?t=0:t&&(t=+t),US(ge(e).replace(Vs,""),t||0)}function DA(e,t,a){return(a?sn(e,t,a):t===n)?t=1:t=re(t),wc(ge(e),t)}function MA(){var e=arguments,t=ge(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var OA=Qo(function(e,t,a){return e+(a?"_":"")+t.toLowerCase()});function BA(e,t,a){return a&&typeof a!="number"&&sn(e,t,a)&&(t=a=n),a=a===n?mn:a>>>0,a?(e=ge(e),e&&(typeof t=="string"||t!=null&&!qc(t))&&(t=An(t),!t&&qo(e))?Yt(zn(e),0,a):e.split(t,a)):[]}var FA=Qo(function(e,t,a){return e+(a?" ":"")+Xc(t)});function WA(e,t,a){return e=ge(e),a=a==null?0:ho(re(a),0,e.length),t=An(t),e.slice(a,a+t.length)==t}function UA(e,t,a){var s=u.templateSettings;a&&sn(e,t,a)&&(t=n),e=ge(e),t=Ai({},t,s,Zl);var _=Ai({},t.imports,s.imports,Zl),g=Ke(_),T=ic(_,g),y,v,k=0,P=t.interpolate||Fa,R="__p += '",U=cc((t.escape||Fa).source+"|"+P.source+"|"+(P===xm?xy:Fa).source+"|"+(t.evaluate||Fa).source+"|$","g"),V="//# sourceURL="+(he.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Xy+"]")+`
`;e.replace(U,function(j,de,le,Cn,cn,Ln){return le||(le=Cn),R+=e.slice(k,Ln).replace(Iy,gS),de&&(y=!0,R+=`' +
__e(`+de+`) +
'`),cn&&(v=!0,R+=`';
`+cn+`;
__p += '`),le&&(R+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),k=Ln+j.length,j}),R+=`';
`;var K=he.call(t,"variable")&&t.variable;if(!K)R=`with (obj) {
`+R+`
}
`;else if(hy.test(K))throw new ee(f);R=(v?R.replace(ny,""):R).replace(ty,"$1").replace(oy,"$1;"),R="function("+(K||"obj")+`) {
`+(K?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var se=$_(function(){return ue(g,V+"return "+R).apply(n,T)});if(se.source=R,Vc(se))throw se;return se}function GA(e){return ge(e).toLowerCase()}function HA(e){return ge(e).toUpperCase()}function $A(e,t,a){if(e=ge(e),e&&(a||t===n))return Jm(e);if(!e||!(t=An(t)))return e;var s=zn(e),_=zn(t),g=Qm(s,_),T=el(s,_)+1;return Yt(s,g,T).join("")}function zA(e,t,a){if(e=ge(e),e&&(a||t===n))return e.slice(0,tl(e)+1);if(!e||!(t=An(t)))return e;var s=zn(e),_=el(s,zn(t))+1;return Yt(s,0,_).join("")}function VA(e,t,a){if(e=ge(e),e&&(a||t===n))return e.replace(Vs,"");if(!e||!(t=An(t)))return e;var s=zn(e),_=Qm(s,zn(t));return Yt(s,_).join("")}function qA(e,t){var a=rn,s=bn;if(Ce(t)){var _="separator"in t?t.separator:_;a="length"in t?re(t.length):a,s="omission"in t?An(t.omission):s}e=ge(e);var g=e.length;if(qo(e)){var T=zn(e);g=T.length}if(a>=g)return e;var y=a-Ko(s);if(y<1)return s;var v=T?Yt(T,0,y).join(""):e.slice(0,y);if(_===n)return v+s;if(T&&(y+=v.length-y),qc(_)){if(e.slice(y).search(_)){var k,P=v;for(_.global||(_=cc(_.source,ge(ym.exec(_))+"g")),_.lastIndex=0;k=_.exec(P);)var R=k.index;v=v.slice(0,R===n?y:R)}}else if(e.indexOf(An(_),y)!=y){var U=v.lastIndexOf(_);U>-1&&(v=v.slice(0,U))}return v+s}function KA(e){return e=ge(e),e&&ry.test(e)?e.replace(hm,bS):e}var jA=Qo(function(e,t,a){return e+(a?" ":"")+t.toUpperCase()}),Xc=zl("toUpperCase");function H_(e,t,a){return e=ge(e),t=a?n:t,t===n?hS(e)?AS(e):cS(e):e.match(t)||[]}var $_=pe(function(e,t){try{return wn(e,n,t)}catch(a){return Vc(a)?a:new ee(a)}}),XA=yt(function(e,t){return Rn(t,function(a){a=Jn(a),Tt(e,a,$c(e[a],e))}),e});function YA(e){var t=e==null?0:e.length,a=q();return e=t?Ae(e,function(s){if(typeof s[1]!="function")throw new Dn(l);return[a(s[0]),s[1]]}):[],pe(function(s){for(var _=-1;++_<t;){var g=e[_];if(wn(g[0],this,s))return wn(g[1],this,s)}})}function ZA(e){return bb(On(e,S))}function Yc(e){return function(){return e}}function JA(e,t){return e==null||e!==e?t:e}var QA=ql(),eI=ql(!0);function gn(e){return e}function Zc(e){return bl(typeof e=="function"?e:On(e,S))}function nI(e){return vl(On(e,S))}function tI(e,t){return Al(e,On(t,S))}var oI=pe(function(e,t){return function(a){return Yr(a,e,t)}}),rI=pe(function(e,t){return function(a){return Yr(e,a,t)}});function Jc(e,t,a){var s=Ke(t),_=ii(t,s);a==null&&!(Ce(t)&&(_.length||!s.length))&&(a=t,t=e,e=this,_=ii(t,Ke(t)));var g=!(Ce(a)&&"chain"in a)||!!a.chain,T=bt(e);return Rn(_,function(y){var v=t[y];e[y]=v,T&&(e.prototype[y]=function(){var k=this.__chain__;if(g||k){var P=e(this.__wrapped__),R=P.__actions__=ln(this.__actions__);return R.push({func:v,args:arguments,thisArg:e}),P.__chain__=k,P}return v.apply(e,$t([this.value()],arguments))})}),e}function aI(){return qe._===this&&(qe._=ES),this}function Qc(){}function iI(e){return e=re(e),pe(function(t){return Il(t,e)})}var sI=Pc(Ae),cI=Pc(Km),pI=Pc(nc);function z_(e){return Bc(e)?tc(Jn(e)):Wb(e)}function dI(e){return function(t){return e==null?n:To(e,t)}}var mI=jl(),lI=jl(!0);function ep(){return[]}function np(){return!1}function _I(){return{}}function uI(){return""}function gI(){return!0}function fI(e,t){if(e=re(e),e<1||e>ve)return[];var a=mn,s=tn(e,mn);t=q(t),e-=mn;for(var _=ac(s,t);++a<e;)t(a);return _}function hI(e){return ne(e)?Ae(e,Jn):In(e)?[e]:ln(d_(ge(e)))}function TI(e){var t=++kS;return ge(e)+t}var xI=li(function(e,t){return e+t},0),yI=Ec("ceil"),SI=li(function(e,t){return e/t},1),bI=Ec("floor");function wI(e){return e&&e.length?ai(e,gn,fc):n}function vI(e,t){return e&&e.length?ai(e,q(t,2),fc):n}function AI(e){return Ym(e,gn)}function II(e,t){return Ym(e,q(t,2))}function CI(e){return e&&e.length?ai(e,gn,yc):n}function LI(e,t){return e&&e.length?ai(e,q(t,2),yc):n}var kI=li(function(e,t){return e*t},1),PI=Ec("round"),EI=li(function(e,t){return e-t},0);function NI(e){return e&&e.length?rc(e,gn):0}function RI(e,t){return e&&e.length?rc(e,q(t,2)):0}return u.after=n1,u.ary=S_,u.assign=H1,u.assignIn=M_,u.assignInWith=Ai,u.assignWith=$1,u.at=z1,u.before=b_,u.bind=$c,u.bindAll=XA,u.bindKey=w_,u.castArray=_1,u.chain=T_,u.chunk=bw,u.compact=ww,u.concat=vw,u.cond=YA,u.conforms=ZA,u.constant=Yc,u.countBy=Nv,u.create=V1,u.curry=v_,u.curryRight=A_,u.debounce=I_,u.defaults=q1,u.defaultsDeep=K1,u.defer=t1,u.delay=o1,u.difference=Aw,u.differenceBy=Iw,u.differenceWith=Cw,u.drop=Lw,u.dropRight=kw,u.dropRightWhile=Pw,u.dropWhile=Ew,u.fill=Nw,u.filter=Dv,u.flatMap=Bv,u.flatMapDeep=Fv,u.flatMapDepth=Wv,u.flatten=u_,u.flattenDeep=Rw,u.flattenDepth=Dw,u.flip=r1,u.flow=QA,u.flowRight=eI,u.fromPairs=Mw,u.functions=eA,u.functionsIn=nA,u.groupBy=Uv,u.initial=Bw,u.intersection=Fw,u.intersectionBy=Ww,u.intersectionWith=Uw,u.invert=oA,u.invertBy=rA,u.invokeMap=Hv,u.iteratee=Zc,u.keyBy=$v,u.keys=Ke,u.keysIn=un,u.map=xi,u.mapKeys=iA,u.mapValues=sA,u.matches=nI,u.matchesProperty=tI,u.memoize=Si,u.merge=cA,u.mergeWith=O_,u.method=oI,u.methodOf=rI,u.mixin=Jc,u.negate=bi,u.nthArg=iI,u.omit=pA,u.omitBy=dA,u.once=a1,u.orderBy=zv,u.over=sI,u.overArgs=i1,u.overEvery=cI,u.overSome=pI,u.partial=zc,u.partialRight=C_,u.partition=Vv,u.pick=mA,u.pickBy=B_,u.property=z_,u.propertyOf=dI,u.pull=zw,u.pullAll=f_,u.pullAllBy=Vw,u.pullAllWith=qw,u.pullAt=Kw,u.range=mI,u.rangeRight=lI,u.rearg=s1,u.reject=jv,u.remove=jw,u.rest=c1,u.reverse=Gc,u.sampleSize=Yv,u.set=_A,u.setWith=uA,u.shuffle=Zv,u.slice=Xw,u.sortBy=e1,u.sortedUniq=tv,u.sortedUniqBy=ov,u.split=BA,u.spread=p1,u.tail=rv,u.take=av,u.takeRight=iv,u.takeRightWhile=sv,u.takeWhile=cv,u.tap=wv,u.throttle=d1,u.thru=Ti,u.toArray=N_,u.toPairs=F_,u.toPairsIn=W_,u.toPath=hI,u.toPlainObject=D_,u.transform=gA,u.unary=m1,u.union=pv,u.unionBy=dv,u.unionWith=mv,u.uniq=lv,u.uniqBy=_v,u.uniqWith=uv,u.unset=fA,u.unzip=Hc,u.unzipWith=h_,u.update=hA,u.updateWith=TA,u.values=tr,u.valuesIn=xA,u.without=gv,u.words=H_,u.wrap=l1,u.xor=fv,u.xorBy=hv,u.xorWith=Tv,u.zip=xv,u.zipObject=yv,u.zipObjectDeep=Sv,u.zipWith=bv,u.entries=F_,u.entriesIn=W_,u.extend=M_,u.extendWith=Ai,Jc(u,u),u.add=xI,u.attempt=$_,u.camelCase=wA,u.capitalize=U_,u.ceil=yI,u.clamp=yA,u.clone=u1,u.cloneDeep=f1,u.cloneDeepWith=h1,u.cloneWith=g1,u.conformsTo=T1,u.deburr=G_,u.defaultTo=JA,u.divide=SI,u.endsWith=vA,u.eq=qn,u.escape=AA,u.escapeRegExp=IA,u.every=Rv,u.find=Mv,u.findIndex=l_,u.findKey=j1,u.findLast=Ov,u.findLastIndex=__,u.findLastKey=X1,u.floor=bI,u.forEach=x_,u.forEachRight=y_,u.forIn=Y1,u.forInRight=Z1,u.forOwn=J1,u.forOwnRight=Q1,u.get=Kc,u.gt=x1,u.gte=y1,u.has=tA,u.hasIn=jc,u.head=g_,u.identity=gn,u.includes=Gv,u.indexOf=Ow,u.inRange=SA,u.invoke=aA,u.isArguments=So,u.isArray=ne,u.isArrayBuffer=S1,u.isArrayLike=_n,u.isArrayLikeObject=Oe,u.isBoolean=b1,u.isBuffer=Zt,u.isDate=w1,u.isElement=v1,u.isEmpty=A1,u.isEqual=I1,u.isEqualWith=C1,u.isError=Vc,u.isFinite=L1,u.isFunction=bt,u.isInteger=L_,u.isLength=wi,u.isMap=k_,u.isMatch=k1,u.isMatchWith=P1,u.isNaN=E1,u.isNative=N1,u.isNil=D1,u.isNull=R1,u.isNumber=P_,u.isObject=Ce,u.isObjectLike=ke,u.isPlainObject=ta,u.isRegExp=qc,u.isSafeInteger=M1,u.isSet=E_,u.isString=vi,u.isSymbol=In,u.isTypedArray=nr,u.isUndefined=O1,u.isWeakMap=B1,u.isWeakSet=F1,u.join=Gw,u.kebabCase=CA,u.last=Fn,u.lastIndexOf=Hw,u.lowerCase=LA,u.lowerFirst=kA,u.lt=W1,u.lte=U1,u.max=wI,u.maxBy=vI,u.mean=AI,u.meanBy=II,u.min=CI,u.minBy=LI,u.stubArray=ep,u.stubFalse=np,u.stubObject=_I,u.stubString=uI,u.stubTrue=gI,u.multiply=kI,u.nth=$w,u.noConflict=aI,u.noop=Qc,u.now=yi,u.pad=PA,u.padEnd=EA,u.padStart=NA,u.parseInt=RA,u.random=bA,u.reduce=qv,u.reduceRight=Kv,u.repeat=DA,u.replace=MA,u.result=lA,u.round=PI,u.runInContext=b,u.sample=Xv,u.size=Jv,u.snakeCase=OA,u.some=Qv,u.sortedIndex=Yw,u.sortedIndexBy=Zw,u.sortedIndexOf=Jw,u.sortedLastIndex=Qw,u.sortedLastIndexBy=ev,u.sortedLastIndexOf=nv,u.startCase=FA,u.startsWith=WA,u.subtract=EI,u.sum=NI,u.sumBy=RI,u.template=UA,u.times=fI,u.toFinite=wt,u.toInteger=re,u.toLength=R_,u.toLower=GA,u.toNumber=Wn,u.toSafeInteger=G1,u.toString=ge,u.toUpper=HA,u.trim=$A,u.trimEnd=zA,u.trimStart=VA,u.truncate=qA,u.unescape=KA,u.uniqueId=TI,u.upperCase=jA,u.upperFirst=Xc,u.each=x_,u.eachRight=y_,u.first=g_,Jc(u,function(){var e={};return Yn(u,function(t,a){he.call(u.prototype,a)||(e[a]=t)}),e}(),{chain:!1}),u.VERSION=o,Rn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){u[e].placeholder=u}),Rn(["drop","take"],function(e,t){me.prototype[e]=function(a){a=a===n?1:ze(re(a),0);var s=this.__filtered__&&!t?new me(this):this.clone();return s.__filtered__?s.__takeCount__=tn(a,s.__takeCount__):s.__views__.push({size:tn(a,mn),type:e+(s.__dir__<0?"Right":"")}),s},me.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Rn(["filter","map","takeWhile"],function(e,t){var a=t+1,s=a==ut||a==Uo;me.prototype[e]=function(_){var g=this.clone();return g.__iteratees__.push({iteratee:q(_,3),type:a}),g.__filtered__=g.__filtered__||s,g}}),Rn(["head","last"],function(e,t){var a="take"+(t?"Right":"");me.prototype[e]=function(){return this[a](1).value()[0]}}),Rn(["initial","tail"],function(e,t){var a="drop"+(t?"":"Right");me.prototype[e]=function(){return this.__filtered__?new me(this):this[a](1)}}),me.prototype.compact=function(){return this.filter(gn)},me.prototype.find=function(e){return this.filter(e).head()},me.prototype.findLast=function(e){return this.reverse().find(e)},me.prototype.invokeMap=pe(function(e,t){return typeof e=="function"?new me(this):this.map(function(a){return Yr(a,e,t)})}),me.prototype.reject=function(e){return this.filter(bi(q(e)))},me.prototype.slice=function(e,t){e=re(e);var a=this;return a.__filtered__&&(e>0||t<0)?new me(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),t!==n&&(t=re(t),a=t<0?a.dropRight(-t):a.take(t-e)),a)},me.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},me.prototype.toArray=function(){return this.take(mn)},Yn(me.prototype,function(e,t){var a=/^(?:filter|find|map|reject)|While$/.test(t),s=/^(?:head|last)$/.test(t),_=u[s?"take"+(t=="last"?"Right":""):t],g=s||/^find/.test(t);!_||(u.prototype[t]=function(){var T=this.__wrapped__,y=s?[1]:arguments,v=T instanceof me,k=y[0],P=v||ne(T),R=function(de){var le=_.apply(u,$t([de],y));return s&&U?le[0]:le};P&&a&&typeof k=="function"&&k.length!=1&&(v=P=!1);var U=this.__chain__,V=!!this.__actions__.length,K=g&&!U,se=v&&!V;if(!g&&P){T=se?T:new me(this);var j=e.apply(T,y);return j.__actions__.push({func:Ti,args:[R],thisArg:n}),new Mn(j,U)}return K&&se?e.apply(this,y):(j=this.thru(R),K?s?j.value()[0]:j.value():j)})}),Rn(["pop","push","shift","sort","splice","unshift"],function(e){var t=za[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",s=/^(?:pop|shift)$/.test(e);u.prototype[e]=function(){var _=arguments;if(s&&!this.__chain__){var g=this.value();return t.apply(ne(g)?g:[],_)}return this[a](function(T){return t.apply(ne(T)?T:[],_)})}}),Yn(me.prototype,function(e,t){var a=u[t];if(a){var s=a.name+"";he.call(Yo,s)||(Yo[s]=[]),Yo[s].push({name:t,func:a})}}),Yo[mi(n,M).name]=[{name:"wrapper",func:n}],me.prototype.clone=KS,me.prototype.reverse=jS,me.prototype.value=XS,u.prototype.at=vv,u.prototype.chain=Av,u.prototype.commit=Iv,u.prototype.next=Cv,u.prototype.plant=kv,u.prototype.reverse=Pv,u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=Ev,u.prototype.first=u.prototype.head,$r&&(u.prototype[$r]=Lv),u},Vt=IS();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(qe._=Vt,define(function(){return Vt})):_o?((_o.exports=Vt)._=Vt,Zs._=Vt):qe._=Vt}).call(Rr)});var im={};Fe(im,{css:()=>B0,default:()=>ZR});var B0,ZR,sm=F(()=>{"use strict";r();B0=`.dapp-core-component__confirmAddressStyles__ledger-confirm-address {
  text-align: center;
  padding: 48px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__confirmAddressStyles__ledger-confirm-address {
    padding: 48px 40px;
  }
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-section {
  line-height: 1.5;
  margin-top: 40px;
  font-size: 16px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-section .dapp-core-component__confirmAddressStyles__ledger-confirm-address-description {
  color: #495057;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-section .dapp-core-component__confirmAddressStyles__ledger-confirm-address-data {
  color: #000;
  margin: 8px 0;
  word-break: break-word;
  background-color: #adb5bd;
  padding: 12px;
  border-radius: 8px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer {
  font-size: 14px;
  color: #495057;
  line-height: 1.5;
  position: relative;
  margin-top: 40px;
  padding-top: 40px;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer:before {
  height: 1px;
  content: "";
  left: 0;
  bottom: 100%;
  right: 0;
  position: absolute;
  background-color: #495057;
}
.dapp-core-component__confirmAddressStyles__ledger-confirm-address .dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer a {
  color: #1b46c2;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(B0));ZR={"ledger-confirm-address":"dapp-core-component__confirmAddressStyles__ledger-confirm-address",ledgerConfirmAddress:"dapp-core-component__confirmAddressStyles__ledger-confirm-address","ledger-confirm-address-heading":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading",ledgerConfirmAddressHeading:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading","ledger-confirm-address-section":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section",ledgerConfirmAddressSection:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section","ledger-confirm-address-description":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description",ledgerConfirmAddressDescription:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description","ledger-confirm-address-data":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data",ledgerConfirmAddressData:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data","ledger-confirm-address-footer":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer",ledgerConfirmAddressFooter:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer"}});var cm={};Fe(cm,{css:()=>U0,default:()=>eD});var U0,eD,pm=F(()=>{"use strict";r();U0=`.dapp-core-component__ledgerConnectStyles__login-connect-container {
  color: inherit;
  width: 100%;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content {
  text-align: center;
  padding: 40px 16px;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-error {
  color: #d9534f;
  margin-bottom: 0;
  margin-top: 12px;
  line-height: 1;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-icon {
  width: 100%;
  max-width: 288px;
  margin: 48px auto;
}
@media (min-width: 480px) {
  .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-icon {
    margin: 100px auto;
  }
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-button {
  border-radius: 6px;
  padding: 12px 16px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-button {
    width: auto;
  }
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link {
  line-height: 1;
  font-size: 18px;
  margin-top: 32px;
  font-weight: 500;
}
.dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link:hover, .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link:active, .dapp-core-component__ledgerConnectStyles__login-connect-container .dapp-core-component__ledgerConnectStyles__login-connect-container-content .dapp-core-component__ledgerConnectStyles__login-connect-container-footer .dapp-core-component__ledgerConnectStyles__login-connect-container-link:focus {
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U0));eD={"login-connect-container":"dapp-core-component__ledgerConnectStyles__login-connect-container",loginConnectContainer:"dapp-core-component__ledgerConnectStyles__login-connect-container","login-connect-container-content":"dapp-core-component__ledgerConnectStyles__login-connect-container-content",loginConnectContainerContent:"dapp-core-component__ledgerConnectStyles__login-connect-container-content","login-connect-container-heading":"dapp-core-component__ledgerConnectStyles__login-connect-container-heading",loginConnectContainerHeading:"dapp-core-component__ledgerConnectStyles__login-connect-container-heading","login-connect-container-description":"dapp-core-component__ledgerConnectStyles__login-connect-container-description",loginConnectContainerDescription:"dapp-core-component__ledgerConnectStyles__login-connect-container-description","login-connect-container-error":"dapp-core-component__ledgerConnectStyles__login-connect-container-error",loginConnectContainerError:"dapp-core-component__ledgerConnectStyles__login-connect-container-error","login-connect-container-icon":"dapp-core-component__ledgerConnectStyles__login-connect-container-icon",loginConnectContainerIcon:"dapp-core-component__ledgerConnectStyles__login-connect-container-icon","login-connect-container-footer":"dapp-core-component__ledgerConnectStyles__login-connect-container-footer",loginConnectContainerFooter:"dapp-core-component__ledgerConnectStyles__login-connect-container-footer","login-connect-container-button":"dapp-core-component__ledgerConnectStyles__login-connect-container-button",loginConnectContainerButton:"dapp-core-component__ledgerConnectStyles__login-connect-container-button","login-connect-container-link":"dapp-core-component__ledgerConnectStyles__login-connect-container-link",loginConnectContainerLink:"dapp-core-component__ledgerConnectStyles__login-connect-container-link"}});var dm={};Fe(dm,{css:()=>$0,default:()=>tD});var $0,tD,mm=F(()=>{"use strict";r();$0=`.dapp-core-component__progressBarStyles__ledger-progress-bar {
  position: relative;
  margin: 40px auto 0;
}
.dapp-core-component__progressBarStyles__ledger-progress-bar .dapp-core-component__progressBarStyles__ledger-progress-bar-track {
  max-width: 250px;
  width: 60vw;
  height: 4px;
  background-color: #adb5bd;
  border-radius: 2px;
}
.dapp-core-component__progressBarStyles__ledger-progress-bar .dapp-core-component__progressBarStyles__ledger-progress-bar-thumb {
  transition: all 400ms ease;
  height: 4px;
  border-radius: 2px;
  background-color: #495057;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($0));tD={"ledger-progress-bar":"dapp-core-component__progressBarStyles__ledger-progress-bar",ledgerProgressBar:"dapp-core-component__progressBarStyles__ledger-progress-bar","ledger-progress-bar-track":"dapp-core-component__progressBarStyles__ledger-progress-bar-track",ledgerProgressBarTrack:"dapp-core-component__progressBarStyles__ledger-progress-bar-track","ledger-progress-bar-thumb":"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb",ledgerProgressBarThumb:"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb"}});var _m={};Fe(_m,{css:()=>V0,default:()=>rD});var V0,rD,um=F(()=>{"use strict";r();V0=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
  margin: 40px auto 0;
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  width: auto;
  align-items: center;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon {
  color: #1b46c2;
  margin-right: 8px;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text {
  text-align: left;
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text {
    flex-direction: row;
  }
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text strong {
  color: #1b46c2;
}
@media (min-width: 768px) {
  .dapp-core-component__scamPhishingStyles__scam-phishing-alert .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text .dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix {
    margin-left: 4px;
  }
}

.dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization {
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization .dapp-core-component__scamPhishingStyles__scam-phishing-alert-text {
  text-align: center;
  flex-direction: row;
}
.dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization .dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration {
  margin-left: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V0));rD={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var sD={};Fe(sD,{LedgerLoginContent:()=>iD});module.exports=Pe(sD);r();var Mr=O(require("react"));r();r();r();var af=require("react"),xr=require("react-redux");r();var Yp=require("@reduxjs/toolkit"),of=require("react-redux/lib/utils/Subscription");ye();r();var Fg=O(require("lodash.throttle"));te();ye();Dp();lr();mr();var gL=[Di],as=!1,fL=(0,Fg.default)(()=>{ia(aa())},5e3),Wg=n=>o=>i=>{if(gL.includes(i.type))return o(i);let c=n.getState(),l=Co.local.getItem(eo.loginExpiresAt);if(!Boolean(c==null?void 0:c.account.address))return o(i);if(l==null)return ia(aa());let h=Date.now();return l-h<0&&!as?setTimeout(()=>{as=!0,n.dispatch(tg())},1e3):(as&&(as=!1),fL()),o(i)};r();r();function is(){return typeof sessionStorage!="undefined"}var ef=is()?(Vg(),Pe(zg)).default:(Kg(),Pe(qg)).default,nf=is()?(Xg(),Pe(jg)).default:[],tf=is()?(Qg(),Pe(Jg)).default:n=>n;ss();var ae=(0,Yp.configureStore)({reducer:ef,middleware:n=>n({serializableCheck:{ignoredActions:[...nf,Np.type,Fi.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Wg)}),rf=(0,of.createSubscription)(ae),lO=tf(ae),_O=(0,Yp.configureStore)({reducer:ko});var WL={store:ae,subscription:rf},Zp=(0,af.createContext)(WL),hO=(0,xr.createStoreHook)(Zp),Xe=(0,xr.createDispatchHook)(Zp),oe=(0,xr.createSelectorHook)(Zp);r();r();ye();r();var sf=O(require("lodash.isequal")),cs=require("reselect"),z=(0,cs.createSelectorCreator)(cs.defaultMemoize,sf.default);var it=n=>n.account,Po=z(it,n=>n.address),to=z(it,Po,(n,o)=>o in n.accounts?n.accounts[o]:Bi),cf=z(it,to,(n,o)=>{let l=n,{accounts:i}=l,c=bo(l,["accounts"]);return Z(E({},c),{address:o.address,account:o})}),bO=z(to,n=>n.balance),UL=z(to,n=>{var o;return((o=n==null?void 0:n.nonce)==null?void 0:o.valueOf())||0}),wO=z(it,n=>n.shard),pf=z(it,n=>n.ledgerAccount),vO=z(it,n=>n.walletConnectAccount),AO=z(it,n=>n.isAccountLoading),IO=z(it,n=>n.accountLoadingError),GL=z(it,n=>n.websocketEvent),HL=z(it,n=>n.websocketBatchEvent);r();var df=n=>n.dappConfig,kO=z(df,n=>n.shouldUseWebViewProvider);r();var Pn=n=>n.loginInfo,$L=z(Pn,n=>n.loginMethod),la=z(Pn,Po,(n,o)=>Boolean(o)),RO=z(Pn,n=>n.walletConnectLogin),zL=z(Pn,n=>n.ledgerLogin),VL=z(Pn,n=>n.walletLogin),DO=z(Pn,n=>n.isLoginSessionInvalid),oo=z(Pn,n=>n.tokenLogin),mf=z(Pn,n=>n.logoutRoute),qL=z(Pn,n=>n.isWalletConnectV2Initialized);r();var lf=n=>n.modals,BO=z(lf,n=>n.txSubmittedModal),KL=z(lf,n=>n.notificationModal);r();var st=n=>n.networkConfig,ps=z(st,n=>n.network.chainId),jL=z(st,n=>n.network.roundDuration),UO=z(st,n=>n.network.walletConnectBridgeAddress),XL=z(st,n=>n.network.walletConnectV2RelayAddress),YL=z(st,n=>n.network.walletConnectV2ProjectId),ZL=z(st,n=>n.network.walletConnectV2Options),JL=z(st,n=>n.network.walletConnectDeepLink),xn=z(st,n=>n.network),Jp=z(xn,n=>n.apiAddress),_f=z(xn,n=>n.explorerAddress),uf=z(xn,n=>{var o;return(o=n.customWalletAddress)!=null?o:n.walletAddress}),QL=z(xn,n=>n.xAliasAddress),Qp=z(xn,n=>n.egldLabel);r();var ds=n=>n.signedMessageInfo,$O=z(ds,n=>n.isSigning),zO=z(ds,n=>n.errorMessage),VO=z(ds,n=>{let o=Object.keys(n.signedSessions),i=o.length;return n.signedSessions[o[i-1]]}),qO=z(ds,n=>{let o=Object.keys(n.signedSessions),i=o.length;return o.length>0?o[i-1]:""});r();var gf=n=>n.toasts,ek=z(gf,n=>n.customToasts),ff=z(gf,n=>n.transactionToasts);r();ye();var hf={errorMessage:Up,successMessage:Gp,processingMessage:Hp},Tf=n=>n.transactionsInfo,nk=z(Tf,(n,o)=>o,(n,o)=>o!=null&&(n==null?void 0:n[Number(o)])||hf);r();r();var ct=require("@multiversx/sdk-core");te();r();var ed=require("@multiversx/sdk-core/out");r();r();function ms(n){try{let o=atob(n),i=btoa(o),c=d.Buffer.from(n,"base64").toString(),l=d.Buffer.from(c).toString("base64"),f=n===i||i.startsWith(n),h=n===l||l.startsWith(n);if(f&&h)return!0}catch(o){return!1}return!1}function Eo(n){return ms(n)?atob(n):n}r();r();r();r();var xf=n=>{let o=n!=null?n:"";return ms(o)?ed.TransactionPayload.fromEncoded(o):new ed.TransactionPayload(o)};r();te();var _a=({data:n,onlySetGuardian:o})=>n?o?n.startsWith("SetGuardian"):Object.values(up).some(i=>n.startsWith(i)):!1;function ls(n){var c,l,f;let o=E({},n);_a({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let i=new ct.Transaction(E(E(Z(E(Z(E({value:o.value.valueOf(),data:xf(o.data),nonce:o.nonce.valueOf(),receiver:new ct.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ct.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(c=o.gasLimit.valueOf())!=null?c:Ni,gasPrice:(l=o.gasPrice.valueOf())!=null?l:Ri,chainID:o.chainID.valueOf(),version:new ct.TransactionVersion((f=o.version)!=null?f:Fu)}),o.options?{options:new ct.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ct.Address(o.guardian)}:{}));return o.guardianSignature&&i.applyGuardianSignature(d.Buffer.from(o.guardianSignature,"hex")),o.signature&&i.applySignature(d.Buffer.from(o.signature,"hex")),i}r();r();te();r();r();r();var ak=require("@multiversx/sdk-core/out");r();te();r();var yf=require("@multiversx/sdk-core");Ue();r();var ik=require("@multiversx/sdk-core");r();r();r();var sk=require("@multiversx/sdk-core"),ck=O(require("bignumber.js"));Ie();r();r();r();var ua="accounts";var td="blocks";r();r();r();r();hn();r();r();hn();r();r();r();var _k=O(require("bignumber.js"));te();r();var Af=require("@multiversx/sdk-core"),ro=O(require("bignumber.js"));te();r();var vf=O(require("bignumber.js")),pt=(n,o=!0)=>{let i=String(n);if(!i.match(/^[-]?\d+$/))return!1;let c=new vf.default(i),l=o?0:-1;return c.toString(10)===i&&c.comparedTo(0)>=l};r();function Nt(n){return{if:function(o){return o?{then:i=>i instanceof Function?Nt(i(n)):Nt(i)}:{then:()=>Nt(n)}},then:o=>o instanceof Function?Nt(o(n)):Nt(o),valueOf:function(){return n}}}ro.default.config({ROUNDING_MODE:ro.default.ROUND_FLOOR});function ao({input:n,decimals:o=kn,digits:i=Io,showLastNonZeroDecimal:c=!0,showIsLessThanDecimalsLabel:l=!1,addCommas:f=!1}){if(!pt(n,!1))throw new Error("Invalid input");let h=new ro.default(n).isNegative(),w=n;return h&&(w=n.substring(1)),Nt(w).then(()=>Af.TokenTransfer.fungibleFromBigInteger("",w,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(x=>{let S=new ro.default(x);if(S.isZero())return at;let N=S.toString(10),[C,D]=N.split("."),H=new ro.default(D||0),G=Nt(0).if(Boolean(D&&c)).then(()=>Math.max(D.length,i)).if(H.isZero()&&!c).then(0).if(Boolean(D&&!c)).then(()=>Math.min(D.length,i)).valueOf(),M=D&&i>=1&&i<=D.length&&H.isGreaterThan(0)&&new ro.default(D.substring(0,i)).isZero(),X=S.toFormat(G);return Nt(N).if(f).then(X).if(Boolean(M)).then(ce=>{let ie=new ro.default(C).isZero(),[Y,Q]=ce.split("."),Le=new Array(i-1).fill(0),Sn=[...Le,0].join(""),rn=[...Le,1].join("");return ie?l?`<${Y}.${rn}`:c?`${Y}.${Q}`:Y:`${Y}.${Sn}`}).if(Boolean(!M&&D)).then(ce=>{let[ie]=ce.split("."),Y=D.substring(0,G);if(c){let Q=i-Y.length;if(Q>0){let Le=Array(Q).fill(0).join("");return Y=`${Y}${Le}`,`${ie}.${Y}`}return ce}return Y?`${ie}.${Y}`:ie}).valueOf()}).if(h).then(x=>`-${x}`).valueOf()}r();r();r();te();r();r();r();r();te();r();te();r();var uk=require("@multiversx/sdk-core");te();r();var ga=require("@multiversx/sdk-core"),hk=O(require("bignumber.js"));te();r();r();var gk=O(require("bignumber.js"));te();r();te();r();r();r();r();r();r();te();function Tk(n,o){let i,c,l=/(\.0+)+$/,f=n.replace(l,"").split("."),h=o.replace(l,"").split("."),w=Math.min(f.length,h.length);for(i=0;i<w;i++)if(c=parseInt(f[i],10)-parseInt(h[i],10),c)return c;return f.length-h.length}function xk(n){let o=[gp,fp,hp,Tp,xp,yp,n].sort((S,N)=>Tk(S,N)),i=o.indexOf(gp),c=o.indexOf(fp),l=o.indexOf(hp),f=o.indexOf(Tp),h=o.indexOf(xp),w=o.indexOf(yp),x=o.indexOf(n);return{ledgerWithMultiAccount:x>=i,ledgerWithHashSign:x>=c,ledgerWithSignAuthToken:x>=l,ledgerWithWhitelistedTokens:x>=f,ledgerWithGuardians:x>=h,ledgerWithUsernames:x>=w}}var If=xk;r();te();r();te();r();hn();var Sk=["reDelegateRewards","claimRewards","unBond"],bk=["wrapEgld","unwrapEgld"],wk=["unStake"],vk=["unDelegate"];r();r();r();te();r();var Lk=O(require("bignumber.js"));r();r();hn();r();var Pk=O(require("bignumber.js"));r();r();r();r();var Rk=O(require("bignumber.js"));Ue();r();r();r();r();Ie();r();var Bk=require("@multiversx/sdk-web-wallet-provider");te();r();var Mk=O(require("qs"));r();Qe();_r();r();_r();var yU={search:Lo()?window.location.search:"",removeParams:[]};r();r();r();Je();r();hn();r();r();Je();r();var Fk=O(require("linkifyjs"));r();te();r();var Wk=O(require("bignumber.js"));r();Ue();r();r();Ie();r();Ie();r();r();r();hn();r();hn();r();var Uk=O(require("bignumber.js"));te();hn();r();hn();r();var kf=require("react");Ue();r();r();hn();r();r();var Gk=require("@multiversx/sdk-core/out"),Hk=O(require("bignumber.js"));hn();r();Ue();r();r();Ue();var m8=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];r();var Pf=require("react");Ue();Je();r();var zk=require("react");hn();var x8=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Tr();r();var gs=n=>n.transactions,yr=z(gs,n=>n.signedTransactions),Vk=z(gs,n=>n.signTransactionsError),Ef=z(gs,n=>n.signTransactionsCancelMessage),fs=n=>o=>Object.entries(o).reduce((i,[c,l])=>(n(l.status)&&(i[c]=l),i),{}),Nf=z(yr,fs(gr)),Rf=z(yr,fs(fr)),Df=z(yr,fs(hr)),qk=z(yr,fs(zp)),Mf=z(gs,n=>{var o;return(n==null?void 0:n.transactionsToSign)==null?null:Z(E({},n.transactionsToSign),{transactions:((o=n==null?void 0:n.transactionsToSign)==null?void 0:o.transactions.map(i=>ls(i)))||[]})}),Kk=z(yr,(n,o)=>o,(n,o)=>o!=null?(n==null?void 0:n[o])||{}:{});r();var Of=require("react");r();ye();r();r();r();r();r();r();r();r();var Xk=require("@multiversx/sdk-extension-provider"),Yk=require("@multiversx/sdk-hw-provider"),Zk=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Jk=require("@multiversx/sdk-opera-provider"),Qk=require("@multiversx/sdk-passkey-provider/out"),eP=require("@multiversx/sdk-web-wallet-provider");te();Qt();r();var No=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Bf=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");Ie();r();var ad=n=>B(void 0,null,function*(){if(!n.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=n.hwApp,{contractData:i,version:c}=yield o.getAppConfiguration();return{version:c,dataEnabled:i===Wu}}),Xn=n=>`Unable to perform ${n}, Provider not initialized`,hs=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Xn("getAccount"))}setAccount(o){throw new Error(Xn(`setAccount: ${o}`))}login(o){throw new Error(Xn(`login with options: ${o}`))}logout(o){throw new Error(Xn(`logout with options: ${o}`))}getAddress(){throw new Error(Xn("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,i){throw new Error(Xn(`sendTransaction with transactions: ${o} options: ${i}`))}signTransaction(o,i){throw new Error(Xn(`signTransaction with transactions: ${o} options: ${i}`))}signTransactions(o,i){throw new Error(Xn(`signTransactions with transactions: ${o} options: ${i}`))}signMessage(o,i){throw new Error(Xn(`signTransactions with ${o} and options ${i}`))}sendCustomMessage({method:o,params:i}){throw new Error(Xn(`sendCustomMessage with method: ${o} params: ${i}`))}sendCustomRequest(o){throw new Error(Xn(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Ts=new hs;var Ff=Ts;function Rt(n){Ff=n}function dt(){return Ff||Ts}ye();r();r();r();r();r();var Wf=require("@lifeomic/axios-fetch"),id=O(require("axios")),sd=(0,Wf.buildAxiosFetch)(id.default),cd=(n,o)=>B(void 0,null,function*(){if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);let c=n.clone().json(),[l]=yield Promise.all([c]);return{data:l,status:n.status,statusText:n.statusText,headers:n.headers,config:o}});function nP(n,o,i){return B(this,null,function*(){try{let c=yield sd(n,E({method:"POST",body:o?JSON.stringify(o):void 0,headers:E({"Content-Type":"application/json"},(i==null?void 0:i.headers)||{})},i));return cd(c,i)}catch(c){throw console.error("Fetch Error:",c),c}})}function tP(n,o){return B(this,null,function*(){try{let i=yield sd(n,o);if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return cd(i,o)}catch(i){throw console.error("Fetch Error:",i),i}})}function oP(n,o,i){return B(this,null,function*(){try{let c=yield sd(n,E({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(i==null?void 0:i.headers)||{}},i));if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);return cd(c,i)}catch(c){throw console.error("Fetch Error:",c),c}})}var Ro=id.default.create();Ro.get=tP;Ro.post=nP;Ro.patch=oP;r();var ha=n=>{let o=n!=null?n:Jp(ae.getState());return o.endsWith("/")?o.slice(0,-1):o};r();var rP=O(require("axios"));r();var aP=O(require("swr"));var iP=n=>{let i=`${ha()}/${ua}/${n}?withGuardianInfo=true`;return Ro.get(i)},Uf=n=>B(void 0,null,function*(){if(!n)return null;try{let{data:o}=yield iP(n);return o}catch(o){console.error("error fetching configuration for ",n,o)}return null});var Sr=n=>Uf(n);r();Ie();r();r();r();Je();r();Tr();r();r();r();var sP=O(require("axios"));r();var pP=O(require("axios"));cr();r();te();r();var dP=O(require("axios"));r();var lP=O(require("axios"));r();r();var _P=O(require("axios"));r();var uP=O(require("axios"));r();r();ye();Ie();r();r();function zf(n){return B(this,null,function*(){let o=n;o==null&&(o=to(ae.getState()).address);let i=yield Sr(o);if(i==null)throw"Could not read account, user not logged in";return i==null?void 0:i.balance})}r();r();Je();r();Ne();Ue();r();ye();r();var Vf=require("@multiversx/sdk-core");Ue();Qe();r();Tr();r();ye();Ie();r();ye();Ue();r();r();r();Ue();r();Ei();r();r();r();r();var TP=O(require("swr"));r();r();r();r();var qf=require("react");r();r();var xP=require("react"),yP=require("@multiversx/sdk-web-wallet-provider"),SP=require("@multiversx/sdk-web-wallet-provider"),bP=O(require("qs"));te();ye();Ie();wp();Je();var tV=Re();r();var Sh=require("react"),gd=require("@multiversx/sdk-core");r();te();Op();r();r();r();r();r();r();r();r();r();r();cr();r();var IP=O(require("axios"));r();var LP=O(require("axios"));r();cr();r();cr();r();r();r();r();var PP=require("@multiversx/sdk-opera-provider");r();var EP=require("@multiversx/sdk-extension-provider");r();Qt();r();r();r();r();var uh=O(_h());var Dt=n=>{if(!n||!(0,uh.default)(n))return null;let o=n.split(".");if(o.length!==4)return null;try{let[i,c,l,f]=o,h=JSON.parse(Eo(f)),w=Eo(i);return{ttl:Number(l),extraInfo:h,origin:w,blockHash:c}}catch(i){return console.error(`Error trying to decode ${n}:`,i),null}};r();var yh=require("@multiversx/sdk-native-auth-client");r();var hh=O(require("axios"));r();r();r();function gh(n){return B(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),n)})})}r();var fh=(n,o,i,c=0)=>B(void 0,null,function*(){try{return yield n(...i)}catch(l){return c<o.retries?((o==null?void 0:o.delay)!=null&&(yield gh(o.delay)),yield fh(n,o,i,c+1)):null}}),ld=(n,o={retries:5,delay:500})=>(...i)=>B(void 0,null,function*(){return yield fh(n,o,i)});var t2=4,o2=3e4,bs={current:null},Do={current:null},r2=ld((n,o,i)=>B(void 0,null,function*(){if(i){let f=Math.floor(Date.now()/1e3);return{hash:yield i(),timestamp:f}}let{data:c}=yield hh.default.get(`${n}/${td}?from=${t2}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[l]=c;return l}));function Th(n,o,i,c){return B(this,null,function*(){if(n==null)throw new Error("missing api url");let l=Date.now();if(bs.current!=null&&l<bs.current.timestamp*1e3+o2&&!c)return bs.current;if(Do.current!=null)return yield Do.current;Do.current=r2(n,o,i);try{let f=yield Do.current;if(f==null)throw Do.current=null,new Error("could not get block hash");return bs.current={hash:f.hash,timestamp:f.timestamp},Do.current=null,f}catch(f){return Do.current=null,null}})}r();r();Mi();r();function a2(n){return Object.prototype.toString.call(n)==="[object String]"}var _d=n=>{var i;if(!n||!a2(n))return null;let o=n.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[c,l,f]=o,h=Eo(c),w=Eo(l),x=Dt(w);if(!x)return{address:h,body:w,signature:f,blockHash:"",origin:"",ttl:0};let S=Z(E({},x),{address:h,body:w,signature:f});return(i=x.extraInfo)!=null&&i.timestamp||delete S.extraInfo,S}catch(c){return null}};var ud={isExpired:!1},xh=n=>{if(!n)return ud;let o=_d(n);if(!o)return ud;let i=dr(),{ttl:c,extraInfo:l}=o,f=l==null?void 0:l.timestamp;if(!f)return ud;let h=f+c,w=i>h,x=h-i;return{isExpired:w,expiresAt:h,secondsUntilExpires:x}};r();Je();var Sa={origin:Re().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},ba=n=>{var i,c,l,f,h,w;return n===!0?Sa:{origin:(i=n==null?void 0:n.origin)!=null?i:Sa.origin,blockHashShard:n==null?void 0:n.blockHashShard,expirySeconds:(c=n==null?void 0:n.expirySeconds)!=null?c:Sa.expirySeconds,apiAddress:(l=n==null?void 0:n.apiAddress)!=null?l:Sa.apiAddress,tokenExpirationToastWarningSeconds:(f=n==null?void 0:n.tokenExpirationToastWarningSeconds)!=null?f:Sa.tokenExpirationToastWarningSeconds,extraInfo:(h=n==null?void 0:n.extraInfo)!=null?h:{},gatewayUrl:n==null?void 0:n.gatewayUrl,extraRequestHeaders:(w=n==null?void 0:n.extraRequestHeaders)!=null?w:{}}};var ws=n=>{let{origin:o,apiAddress:i,expirySeconds:c,blockHashShard:l,extraInfo:f,gatewayUrl:h,extraRequestHeaders:w}=ba(n),x=new yh.NativeAuthClient({origin:o,apiUrl:i,expirySeconds:c,blockHashShard:l,gatewayUrl:h,extraRequestHeaders:w});return{getNativeAuthConfig:ba,initialize:C=>B(void 0,null,function*(){var H,G;if(!i||!o)return"";let D=()=>x.getCurrentBlockHash();try{let M=(H=C==null?void 0:C.latestBlockInfo)!=null?H:yield Th(i,l,D,C==null?void 0:C.noCache);if(!M)return"";let{hash:X,timestamp:J}=M,ce=x.encodeValue(JSON.stringify(E(E({},(G=C==null?void 0:C.extraInfo)!=null?G:f),J?{timestamp:J}:{})));return`${x.encodeValue(o)}.${X}.${c}.${ce}`}catch(M){return console.error("Error getting native auth token: ",M.toString()),""}}),getToken:({address:C,token:D,signature:H})=>x.getToken(C,D,H),getTokenExpiration:xh}};r();var i2=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();var s2=require("@multiversx/sdk-passkey-provider/out");te();Je();r();r();r();var l2=require("react"),_2=require("@multiversx/sdk-hw-provider");r();Ne();Ue();r();ca();lr();mr();Qe();r();r();var cx=require("react"),px=require("@multiversx/sdk-core"),QN=require("@multiversx/sdk-extension-provider"),e3=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),n3=require("@multiversx/sdk-passkey-provider/out"),t3=O(rx());te();r();r();var Ir=()=>oe(to);r();var Ia=()=>oe(cf);r();r();r();r();r();r();r();var Ca=O(require("react"));var gX=(0,Ca.createContext)({}),fX=ae.getState();r();var ix=O(require("react"));r();var Sd=O(require("react")),ON=O(require("axios"));r();r();Qt();r();r();var HN=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),$N=require("@multiversx/sdk-webview-provider/out/WebviewProvider");Ne();r();Ne();ye();Ue();r();r();ye();r();Qe();r();ye();Ue();r();r();var FN=require("@multiversx/sdk-core"),WN=O(require("bignumber.js"));te();r();var UN=O(require("bignumber.js"));te();ye();Ie();Qe();Je();r();var sx=require("react"),KN=require("@multiversx/sdk-extension-provider"),jN=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),XN=require("@multiversx/sdk-passkey-provider/out");Qt();ye();r();ye();Ue();ca();Je();r();ot();ye();r();r();var r3=require("react");r();r();Ie();Tr();r();var Cs=require("react"),dx=(n,o)=>{let[i,c]=(0,Cs.useState)(n);return(0,Cs.useEffect)(()=>{let f=setTimeout(()=>c(n),o);return()=>clearTimeout(f)},[n]),i};r();r();var i3=require("react"),s3=require("@multiversx/sdk-extension-provider");ot();Ne();Ie();r();function Mt(){return la(ae.getState())}Pt();Qe();Qe();r();r();Qt();Ue();var io=n=>(Object.values(Ge).forEach(o=>{if(o!==(n==null?void 0:n.skipLoginMethod))switch(o){case"crossWindow":{let i=Jt.CrossWindowProvider.getInstance();i.isInitialized()&&i.dispose();break}case"iframe":{let i=No.IframeProvider.getInstance();i.isInitialized()&&i.dispose();break}default:break}}),null);r();var mx=require("react"),Ls=require("@multiversx/sdk-core");ye();var a3=(n,o)=>{var i;return o?o===!0?n:(i=o.apiAddress)!=null?i:n:null},Ot=n=>{let o=oe(xn),i=oe(oo),c=(0,mx.useRef)(i==null?void 0:i.loginToken),l=a3(o.apiAddress,n),f=ba(E(E({},n===!0?{}:n),l?{apiAddress:l}:{})),h=Boolean(n),w=ws(f),{address:x}=Ir(),S=Xe(),N=G=>{c.current=G,S(sa(E(Z(E({},i),{loginToken:G}),l?{nativeAuthConfig:f}:{})))},C=()=>{try{return w.initialize()}catch(G){console.error("Unable to get block. Login failed.",G);return}},D=({address:G,signature:M})=>{let X=c.current;if(!X)throw"Token not found. Call `setLoginToken` first.";if(!h){S(sa({loginToken:X,signature:M}));return}let J=w.getToken({address:G,token:X,signature:M});return S(sa(E({loginToken:X,signature:M,nativeAuthToken:J},l?{nativeAuthConfig:f}:{}))),J};return{configuration:f,setLoginToken:N,getNativeAuthLoginToken:C,setTokenLoginInfo:D,refreshNativeAuthTokenLogin:X=>B(void 0,[X],function*({signMessageCallback:G,nativeAuthClientConfig:M}){let ce=yield ws(M||f).initialize({noCache:Boolean(M)});if(c.current=ce,!ce)return;let ie=new Ls.Message({address:new Ls.Address(x),data:d.Buffer.from(`${x}${ce}`)}),Y=yield G(ie,{});if(!(Y!=null&&Y.signature))throw"Message not signed";return D({address:x,signature:d.Buffer.from(Y.signature).toString("hex")})})}};r();var c3=require("react"),p3=require("@multiversx/sdk-opera-provider");ot();Ne();Ie();Pt();Qe();Je();r();var d3=require("react");Ap();ot();Qt();Ne();ye();Ie();Pt();Je();r();var g3=require("react");ot();ye();r();r();Ip();r();r();var m3=O(require("platform"));_r();r();r();r();r();r();function ks(){return Qp(ae.getState())}r();r();ra();Ie();r();r();var l3=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();r();ca();lr();r();r();r();ye();r();r();var _3=O(require("axios"));Qe();r();r();var u3=O(br());ra();var lx,_x,ux,ane=(ux=(_x=(lx=jn.safeWindow)==null?void 0:lx.location)==null?void 0:_x.origin)==null?void 0:ux.includes("localhost");r();Je();r();r();var I3=require("react");te();r();r();te();var bd=n=>{var l;let o=oe(oo),i=(l=o==null?void 0:o.loginToken)!=null?l:n;if(!i)return;let c=Dt(i);if(!!c)return c.origin.toLowerCase().startsWith(Du)};r();r();r();var Mo=O(require("bignumber.js")),gx=n=>{let o=new Mo.default(n).dividedBy(1e3).integerValue(Mo.default.ROUND_FLOOR),i=new Mo.default(o).dividedBy(60).integerValue(Mo.default.ROUND_FLOOR),c=new Mo.default(i).dividedBy(60).integerValue(Mo.default.ROUND_FLOOR),l=c.modulo(60).isGreaterThan(1),f=i.modulo(60).isGreaterThan(1),h=i.modulo(60).isLessThan(1);return l?`${c} hours`:f?`${i} minutes`:h?"less than 1 minute":`${i} minute`};var fx=(n,o)=>{var f;let i=oe(oo),c=(f=i==null?void 0:i.loginToken)!=null?f:n;if(!c)return;let l=Dt(c);if(!!l)return{className:o,url:l.origin,duration:gx(l.ttl*1e3)}};r();r();r();var so=O(require("react")),Cx=require("react"),Lx=require("react"),Pd=O(require("classnames")),kx=require("react-dom");te();r();var yx=O(require("react"));r();var ka=O(require("react"));r();_r();var hx=()=>!Lo();var h3=()=>B(void 0,null,function*(){return yield Promise.resolve().then(()=>(vd(),wd))}),T3=()=>(vd(),Pe(wd)).default,Ad=hx();function xx({ssrGlobalImportCallback:n,ssrImportCallback:o,clientImportCallback:i}){let[c,l]=ka.default.useState(Ad?void 0:T3()),[f,h]=ka.default.useState(Ad||i==null?void 0:i()),w=()=>B(this,null,function*(){(n?n():h3()).then(x=>l(x.default)),o==null||o().then(x=>h(x.default))});return(0,ka.useEffect)(()=>{Ad&&w()},[]),{globalStyles:c,styles:f}}function _e(n,o){return i=>{let{globalStyles:c,styles:l}=xx({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return yx.default.createElement(n,Z(E({},i),{globalStyles:c!=null?c:{},styles:l!=null?l:{}}))}}r();var bx=O(require("react")),wx=O(require("classnames"));var y3=({className:n,children:o,styles:i})=>bx.default.createElement("div",{className:(0,wx.default)(i==null?void 0:i.dappModalBody,n)},o),Id=_e(y3,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Pe(Bt)).default});r();var Cd=O(require("react")),vx=O(require("classnames"));var S3=({visible:n,customFooter:o,className:i,footerText:c,styles:l})=>n?Cd.default.createElement("div",{className:(0,vx.default)(l==null?void 0:l.dappModalFooter,i)},o!=null?o:Cd.default.createElement("div",null,c)):null,Ld=_e(S3,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Pe(Bt)).default});r();var Cr=O(require("react")),Ax=require("@fortawesome/free-solid-svg-icons"),Ix=require("@fortawesome/react-fontawesome"),Pa=O(require("classnames"));var b3=({visible:n,headerText:o,customHeader:i,className:c,closeButtonClassName:l,headerTextClassName:f,onHide:h,globalStyles:w,styles:x})=>n?i?Cr.default.createElement("div",{className:(0,Pa.default)(x==null?void 0:x.dappModalHeader,c)},i):Cr.default.createElement("div",{className:(0,Pa.default)(x==null?void 0:x.dappModalHeader,c)},Cr.default.createElement("div",{className:(0,Pa.default)(x==null?void 0:x.dappModalHeaderText,f)},o),Cr.default.createElement("button",{onClick:h,className:(0,Pa.default)(x==null?void 0:x.dappModalCloseButton,w==null?void 0:w.btn,w==null?void 0:w.btnLight,l)},Cr.default.createElement(Ix.FontAwesomeIcon,{size:"lg",icon:Ax.faTimes}))):null,kd=_e(b3,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Pe(Bt)).default});var w3={showHeader:!0,showFooter:!1,headerText:"",footerText:""},v3=({"data-testid":n="dappModal",children:o,className:i="dapp-modal-dialog-wrapper",closeOnEscape:c,config:l=w3,id:f="dapp-modal",onHide:h,parentElement:w,visible:x,styles:S})=>{let[N,C]=(0,Cx.useState)(!1);if((0,Lx.useEffect)(()=>{C(!0)},[]),!x)return null;let{showHeader:D,showFooter:H,headerText:G,footerText:M,modalDialogClassName:X="dapp-modal-dialog",modalContentClassName:J="dapp-modal-dialog-content",modalHeaderClassName:ce="dapp-modal-dialog-header",modalHeaderTextClassName:ie="dapp-modal-dialog-header-text",modalCloseButtonClassName:Y="dapp-modal-dialog-close-button",modalBodyClassName:Q="dapp-modal-dialog-content-body",modalFooterClassName:Le="dapp-modal-dialog-footer",customModalHeader:Sn,customModalFooter:rn}=l,bn=_t=>{_t.key==="Escape"&&c&&(h==null||h())};return so.default.createElement(so.default.Fragment,null,N&&(0,kx.createPortal)(so.default.createElement("div",{id:f,role:"dialog","aria-modal":"true",className:(0,Pd.default)(X,S==null?void 0:S.dappModal,i),"data-testid":n,onKeyDown:bn},so.default.createElement("div",{className:(0,Pd.default)(S==null?void 0:S.dappModalContent,J)},so.default.createElement(kd,{visible:D,headerText:G,customHeader:Sn,className:ce,headerTextClassName:ie,closeButtonClassName:Y,onHide:h}),so.default.createElement(Id,{className:Q},o),so.default.createElement(Ld,{visible:H,customFooter:rn,footerText:M,className:Le}))),w!=null?w:document==null?void 0:document.body))},A3=_e(v3,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Pe(Bt)).default});r();r();var Px=require("react");r();r();var Lr=require("react"),Ed=require("@multiversx/sdk-hw-provider");ot();Ne();ye();Ie();Pt();r();var Bo=require("react"),C3=10,Ex=()=>{let[n,o]=(0,Bo.useState)(""),[i,c]=(0,Bo.useState)(!1),[l,f]=(0,Bo.useState)(0),[h,w]=(0,Bo.useState)([]),[x,S]=(0,Bo.useState)(null),[N,C]=(0,Bo.useState)(!1);return{accounts:h,defaultAddressesPerPage:C3,error:n,isLoading:i,onGoToNextPage:()=>{S(null),f(X=>X+1)},onGoToPrevPage:()=>{S(null),f(X=>X===0?0:X-1)},onGoToSpecificPage:X=>{S(null),f(X)},onSelectAddress:X=>{S(X)},selectedAddress:x,setAccounts:w,setError:o,setIsLoading:c,setShowAddressList:C,showAddressList:N,startIndex:l}};var Ea="Check if the MultiversX App is open on Ledger",Nd=({callbackRoute:n,token:o,addressesPerPage:i,nativeAuth:c,onLoginRedirect:l})=>{let f=oe(pf),h=dt(),w=Xe(),x=Mt(),S=c!=null,N=Ot(c),C=o,{accounts:D,setAccounts:H,isLoading:G,setIsLoading:M,setShowAddressList:X,showAddressList:J,startIndex:ce,selectedAddress:ie,onGoToPrevPage:Y,onGoToNextPage:Q,onGoToSpecificPage:Le,onSelectAddress:Sn,error:rn,setError:bn,defaultAddressesPerPage:_t}=Ex(),lo=i!=null?i:_t,[ut,Wo]=(0,Lr.useState)(""),[Uo,Te]=(0,Lr.useState)(!1),ve=({address:fe,index:Se,signature:Me})=>{w(ng({index:Se,loginType:"ledger"})),Me&&N.setTokenLoginInfo({signature:Me,address:fe}),w(pn({address:fe,loginMethod:"ledger"})),kt({callbackRoute:n,onLoginRedirect:l,options:{address:fe,signature:Me}})},De=(fe,Se="")=>{var Me;if(G){let{errorMessage:Gt,defaultErrorMessage:Ho}=Mp(fe),Oa=(Me=Gt!=null?Gt:Ho)!=null?Me:Ea;bn(`${Oa}.${Se}`),M(!1),w(Rp(null))}},dn=()=>B(void 0,null,function*(){try{if(h instanceof Ed.HWProvider&&h.isInitialized())return h.isConnected()}catch(fe){De(fe)}return!1}),mn=()=>B(void 0,null,function*(){if(yield dn()){bn(""),M(!1);return}try{let Se=new Ed.HWProvider;(yield Se.init())&&Rt(Se),bn(""),M(!1)}catch(Se){De(Se)}}),Rs=()=>B(void 0,null,function*(){let fe=yield dn();if(!ie||!fe)return De(Ea);let{index:Se}=ie;if(S&&!C&&(C=yield N.getNativeAuthLoginToken(),!C)){console.warn("Fetching block failed. Login cancelled.");return}if(C){N.setLoginToken(C);try{let Me=yield h.tokenLogin({token:d.Buffer.from(`${C}{}`),addressIndex:Se});ve({address:Me.address,index:Se,signature:Me.signature.toString("hex")})}catch(Me){De(Me,". Update MultiversX App to continue.")}}else try{let{address:Me}=yield h.login({addressIndex:Se});ve({address:Me,index:Se})}catch(Me){return De(Me),!1}return!0}),Ds=()=>B(void 0,null,function*(){try{if(M(!0),ie==null)return!1;w(f?Zu(ie):Rp(Z(E({},ie),{version:ut,hasContractDataEnabled:Uo}))),M(!1),yield Rs()}catch(fe){De(fe)}return X(!1),!0}),Ma=()=>B(void 0,null,function*(){if(!(yield dn()))return De(rn);try{M(!0);let Se=yield h.getAccounts(ce,lo),Me=yield ad(h);Wo(Me.version),Te(Me.dataEnabled),H(Se),M(!1)}catch(Se){De(Se)}}),Ut=()=>B(void 0,null,function*(){if(x)throw new Error(Lt);io(),bn("");try{if(M(!0),!(yield dn()))return De(Ea);if(f!=null){if(!ie)return De(Ea);let{address:Se}=yield h.login({addressIndex:ie.index.valueOf()});if(!Se)return De("Login cancelled.");w(pn({address:Se,loginMethod:"ledger"})),kt({callbackRoute:n,onLoginRedirect:l})}else D!=null&&D.length||(yield Ma()),X(!0);M(!1)}catch(fe){De(fe)}}),Go=()=>B(void 0,null,function*(){try{let fe=yield dn();if(fe||(yield mn()),fe=yield dn(),!fe)return De(Ea);(D.length===0||ce>=0)&&(yield Ma())}catch(fe){De(fe)}});(0,Lr.useEffect)(()=>{Go()},[ce,J,h]),(0,Lr.useEffect)(()=>{(D==null?void 0:D.length)>0&&!J&&X(!0)},[D]);let Or=Boolean(rn);return[Ut,{loginFailed:Or,isLoggedIn:x&&!Or,error:rn,isLoading:G&&!Or},{accounts:D,showAddressList:J,startIndex:ce,selectedAddress:ie,version:ut,contractDataEnabled:Uo,onGoToPrevPage:Y,onGoToNextPage:Q,onGoToSpecificPage:Le,onSelectAddress:Sn,onConfirmSelectedAddress:Ds}]};r();r();var Rd=require("react");Ne();ye();Ie();Pt();Je();r();var k3=require("react"),P3=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ot();Ne();Ie();Pt();Qe();Qe();r();var E3=require("react"),N3=require("@multiversx/sdk-passkey-provider/out");ot();Ne();Ie();Pt();Qe();Qe();r();r();var Nx=require("react");r();var M3=require("react");r();var Dd=require("react"),D3=require("socket.io-client");ye();r();r();r();var O3=require("react");Ue();r();r();r();var F3=O(require("swr"));r();r();r();r();var B3=O(require("axios"));r();r();r();var Da=O(require("react"));r();r();var Ve=O(require("react")),Nr=O(require("classnames"));te();r();r();var en=O(require("react")),co=require("@fortawesome/free-solid-svg-icons"),qd=require("@fortawesome/react-fontawesome"),Es=O(require("bignumber.js")),Fo=O(require("classnames"));te();r();r();r();var Ps=O(require("react")),Mx=require("@fortawesome/react-fontawesome"),Bd=O(require("classnames"));var U3=({label:n,onClick:o,showLabels:i,isInactive:c,paginationButtonIcon:l,className:f,"data-testid":h,styles:w})=>Ps.default.createElement("div",{onClick:o,"data-testid":h,className:(0,Bd.default)(w==null?void 0:w.paginationEdgeButton,f,{[w==null?void 0:w.inactive]:c})},Ps.default.createElement(Mx.FontAwesomeIcon,{icon:l,className:w==null?void 0:w.paginationEdgeButtonIcon}),Ps.default.createElement("span",{className:(0,Bd.default)(w==null?void 0:w.paginationEdgeButtonText,{[w==null?void 0:w.show]:i})},n)),Fd=_e(U3,{ssrStyles:()=>Promise.resolve().then(()=>(Od(),Md)),clientStyles:()=>(Od(),Pe(Md)).default});r();r();r();var $d=O(Zx()),kr=O(m0());te();r();var u0=({currentPage:n,totalPages:o})=>{let i=n-1,c=n+1;if(o<=7)return(0,kr.default)(1,o+1).map(J=>String(J));let l=(J,ce)=>J.includes(n)?J:J.slice(0,7-ce.length-1),f=(0,$d.default)(c-1,3,5),h=(0,$d.default)(i+1,o-3,o-1),w=f?(0,kr.default)(1,c+1):(0,kr.default)(1,5-1),x=h?(0,kr.default)(i,o+1):(0,kr.default)(o-3+1,o+1),S=l(w,x),N=l(x.reverse(),w),C=S.concat(N),D=[pr,i,n,c,pr],[H]=S,[G]=N;return(C.includes(n)?[...S,pr,...N.reverse()]:[H,...D,G]).map(J=>String(J))};var DR=({currentPage:n=1,totalPages:o,className:i,disabledClassName:c,buttonsClassNames:l,onPageChange:f,isDisabled:h,showLabels:w,showEdgeButtons:x=!0,styles:S})=>{let[N,C]=(0,en.useState)(n),D=N===1,H=N===o,G=c?{[c]:h}:{},M=u0({currentPage:N,totalPages:o}),X=Q=>{Q!==N&&(C(Q),f(Q))},J=Q=>{pt(Q)&&X(new Es.default(Q).toNumber())},ce=Q=>Le=>{Le.preventDefault(),X(Q)},ie=Q=>pt(Q)&&new Es.default(Q).isGreaterThanOrEqualTo(100),Y=Q=>new Es.default(Q).isEqualTo(N);return(0,en.useEffect)(()=>{n!==N&&C(n)},[n,N]),o===1?null:en.default.createElement("div",{className:(0,Fo.default)(S==null?void 0:S.pagination,i)},x&&en.default.createElement("span",{onClick:ce(1),className:(0,Fo.default)(S==null?void 0:S.paginationAngle,l,E({[S==null?void 0:S.disabled]:D},G))},en.default.createElement(qd.FontAwesomeIcon,{className:S==null?void 0:S.paginationAngleIcon,icon:co.faAnglesLeft})),en.default.createElement(Fd,{label:"Prev",onClick:ce(N-1),"data-testid":"prevBtn",paginationButtonIcon:co.faAngleLeft,isInactive:D,showLabels:w,className:(0,Fo.default)(S==null?void 0:S.paginationEdgeButton,l,{[S==null?void 0:S.disabled]:h},G)}),en.default.createElement("div",{className:S==null?void 0:S.paginationItems},M.map((Q,Le)=>en.default.createElement("div",{key:`page-item-${Le}`,className:S==null?void 0:S.paginationItemWrapper},pt(Q)?en.default.createElement("div",{onClick:()=>J(Q),className:(0,Fo.default)(S==null?void 0:S.paginationItem,l,{[S==null?void 0:S.active]:Y(Q)},{[S==null?void 0:S.ellipsis]:!pt(Q)},{[S==null?void 0:S.disabled]:h},{[S==null?void 0:S.hundreds]:ie(Q)},G)},en.default.createElement("span",{className:S==null?void 0:S.paginationItemText},Q)):en.default.createElement("span",{className:S==null?void 0:S.paginationItemText},Q)))),en.default.createElement(Fd,{label:"Next",onClick:ce(N+1),"data-testid":"nextBtn",paginationButtonIcon:co.faAngleRight,isInactive:H,showLabels:w,className:(0,Fo.default)(S==null?void 0:S.paginationEdgeButton,S==null?void 0:S.reversed,l,{[S==null?void 0:S.disabled]:h},G)}),x&&en.default.createElement("span",{onClick:ce(o),className:(0,Fo.default)(S==null?void 0:S.paginationAngle,l,E({[S==null?void 0:S.disabled]:H},G))},en.default.createElement(qd.FontAwesomeIcon,{className:S==null?void 0:S.paginationAngleIcon,icon:co.faAnglesRight})))},f0=_e(DR,{ssrStyles:()=>Promise.resolve().then(()=>(Vd(),zd)),clientStyles:()=>(Vd(),Pe(zd)).default});r();r();var mt=O(require("react")),Qd=O(require("classnames"));r();var po=O(require("react")),T0=O(require("classnames"));te();var OR=n=>{var i;let o=(i=n.styles)!=null?i:{};return po.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},po.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},BR=(n,o)=>{var H,G,M;let{value:i,showLastNonZeroDecimal:c=!1,showLabel:l=!0}=n,f=n.digits!=null?n.digits:Io,h=n.decimals!=null?n.decimals:kn,w=(H=n.styles)!=null?H:{},x=(G=n.globalStyles)!=null?G:{},S=ao({input:i,decimals:h,digits:f,showLastNonZeroDecimal:c,addCommas:!0}),N=S.split("."),C=N.length===1,D=S!==at;if(f>0&&C&&D){let X="";for(let J=1;J<=f;J++)X=X+at;N.push(X)}return po.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},po.default.createElement("span",{className:w["int-amount"],"data-testid":"formatAmountInt"},N[0]),N.length>1&&po.default.createElement("span",{className:w.decimals,"data-testid":"formatAmountDecimals"},".",N[1]),l&&po.default.createElement("span",{className:(0,T0.default)(w.symbol,n.token&&x.textMuted),"data-testid":"formatAmountSymbol"},` ${(M=n.token)!=null?M:o}`))},FR=n=>{let{value:o}=n;return pt(o)?BR(n,n.egldLabel||""):OR(n)},WR=n=>{let o=n.egldLabel||ks(),i=Z(E({},n),{egldLabel:o});return po.default.createElement(FR,E({},i))},x0=_e(WR,{ssrStyles:()=>Promise.resolve().then(()=>(jd(),Kd)),clientStyles:()=>(jd(),Pe(Kd)).default});r();r();var He=O(require("react")),S0=O(require("classnames"));te();var GR=({text:n,className:o="dapp-trim","data-testid":i="trim-text-component",color:c,styles:l})=>{let[f,h]=(0,He.useState)(0),[w,x]=(0,He.useState)(!1),S=(0,He.useRef)(document==null?void 0:document.createElement("span")),N=(0,He.useRef)(document==null?void 0:document.createElement("span")),C=dx(f,300),D=()=>{if(S.current&&N.current){let M=N.current.offsetWidth-S.current.offsetWidth;x(M>1)}},H=()=>{h(f+1)};return(0,He.useEffect)(()=>(window==null||window.addEventListener("resize",H),()=>{window==null||window.removeEventListener("resize",H)})),(0,He.useEffect)(()=>{D()},[C]),He.default.createElement("span",{ref:S,className:(0,S0.default)(l==null?void 0:l.trim,c,o,{overflow:w}),"data-testid":i},He.default.createElement("span",{ref:N,className:l==null?void 0:l.hiddenTextRef},n),w?He.default.createElement(He.default.Fragment,null,He.default.createElement("span",{className:l==null?void 0:l.left},He.default.createElement("span",null,String(n).substring(0,Math.floor(n.length/2)))),He.default.createElement("span",{className:l==null?void 0:l.ellipsis},pr),He.default.createElement("span",{className:l==null?void 0:l.right},He.default.createElement("span",null,String(n).substring(Math.ceil(n.length/2))))):He.default.createElement("span",null,n))},b0=_e(GR,{ssrStyles:()=>Promise.resolve().then(()=>(Yd(),Xd)),clientStyles:()=>(Yd(),Pe(Xd)).default});var $R=({address:n,index:o,balance:i,selectedAddress:c,onSelectAddress:l,className:f="dapp-ledger-address-row",ledgerModalTableSelectedItemClassName:h,disabled:w=!1,styles:x})=>{var S;return mt.default.createElement("div",{onClick:()=>l({address:n,index:o}),className:(0,Qd.default)(x==null?void 0:x.ledgerAddressTableBodyItem,{[h!=null?h:""]:c===n,[(S=x==null?void 0:x.ledgerAddressTableBodyItemSelected)!=null?S:""]:c===n},f)},mt.default.createElement("div",{className:(0,Qd.default)(x==null?void 0:x.ledgerAddressTableBodyItemData,{disabled:w})},mt.default.createElement("input",{type:"radio",id:`check_${n}`,disabled:w,onChange:()=>l({address:n,index:o}),"data-testid":`check_${n}`,role:"button",checked:c===n,className:x==null?void 0:x.ledgerAddressTableBodyItemDataInput}),mt.default.createElement("label",{htmlFor:`check_${o}`,role:"button","data-testid":`label_${o}`,className:x==null?void 0:x.ledgerAddressTableBodyItemDataLabel},mt.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemDataValue},mt.default.createElement(b0,{text:n})))),mt.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemData},mt.default.createElement(x0,{value:i,egldLabel:ks()})),mt.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemData},o))},v0=_e($R,{ssrStyles:()=>Promise.resolve().then(()=>(Jd(),Zd)),clientStyles:()=>(Jd(),Pe(Zd)).default});r();r();r();var Pr=O(require("react")),k0=require("@fortawesome/free-solid-svg-icons"),Er=O(require("classnames"));te();r();r();var mo=O(require("react")),I0=require("@fortawesome/react-fontawesome"),Na=O(require("classnames"));var VR=({icon:n,title:o,action:i,iconClass:c,"data-testid":l,description:f,iconBgClass:h,iconSize:w="5x",className:x="dapp-page-state",globalStyles:S,styles:N})=>{let C=(0,mo.useMemo)(()=>({wrapper:(0,Na.default)(N==null?void 0:N.state,S==null?void 0:S.mAuto,S==null?void 0:S.p4,S==null?void 0:S.textCenter,x),iconContainer:(0,Na.default)(S==null?void 0:S.iconState,S==null?void 0:S.mxAuto,{[h!=null?h:""]:Boolean(h)}),iconClass:(0,Na.default)(c!=null&&c),title:(0,Na.default)(S==null?void 0:S.h4,S==null?void 0:S.my4),description:S==null?void 0:S.mb3}),[S,N,x,h,c]);return mo.default.createElement("div",{className:C.wrapper,"data-testid":l},n&&mo.default.createElement("span",{className:C.iconContainer},mo.default.createElement(I0.FontAwesomeIcon,{icon:n,className:C.iconClass,size:w})),o&&mo.default.createElement("p",{className:C.title},o),f&&mo.default.createElement("div",{className:C.description},f),i)},C0=_e(VR,{ssrStyles:()=>Promise.resolve().then(()=>(nm(),em)),clientStyles:()=>(nm(),Pe(em)).default});var KR=({customSpinnerComponent:n,ledgerLoadingClassNames:o,customContentComponent:i,globalStyles:c,styles:l})=>{let{ledgerModalSubtitleClassName:f,ledgerModalTitleClassName:h,ledgerLoadingWrapper:w,ledgerLoadingSpinner:x}=o||{};return Pr.default.createElement("div",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingWrapper,w),"data-testid":"ledgerLoading"},Pr.default.createElement("div",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingHeading,h)},"Waiting for device..."),Pr.default.createElement("p",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingDescription,f)},"It may take a few seconds..."),i,Pr.default.createElement("div",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingSpinner,x)},n||Pr.default.createElement(C0,{iconSize:"10x",icon:k0.faCircleNotch,iconClass:(0,Er.default)("fa-spin",c==null?void 0:c.textPrimary)})))},Ns=_e(KR,{ssrStyles:()=>Promise.resolve().then(()=>(om(),tm)),clientStyles:()=>(om(),Pe(tm)).default});var E0=10,XR=500,YR=({accounts:n,addressTableClassNames:o,className:i="dapp-ledger-address-table",customContentComponent:c,dataTestId:l="addressTableContainer",loading:f,onConfirmSelectedAddress:h,onGoToSpecificPage:w,onGoToNextPage:x,onGoToPrevPage:S,onSelectAddress:N,selectedAddress:C,startIndex:D,disabledIndexes:H=[],globalStyles:G,styles:M})=>{let{ledgerModalTitleClassName:X,ledgerModalSubtitleClassName:J,ledgerModalTableHeadClassName:ce,ledgerModalTableItemClassName:ie,ledgerModalButtonClassName:Y,ledgerModalTableNavigationButtonClassName:Q,ledgerModalTableSelectedItemClassName:Le,ledgerModalTableNavigationButtonDisabledClassName:Sn}=o||{},[rn,bn]=(0,Ve.useState)([]),_t=()=>{let Te=0;for(;H.includes(Te);)Te++;return Te};(0,Ve.useEffect)(()=>{if(n.length>0&&!f&&(!C&&D===0)){let dn=_t(),mn=n[dn];N({address:mn,index:dn})}},[n,C,f,D]);let lo=Te=>B(void 0,null,function*(){try{let ve=yield zf(Te);return{address:Te,balance:ve}}catch(ve){throw console.error("error fetching balance",ve),rn}});if((0,Ve.useEffect)(()=>{let Te=n.map(ve=>lo(ve));bn(n.map(ve=>({address:ve,balance:"..."}))),Promise.all(Te).then(ve=>{bn(ve)})},[n]),f)return Ve.default.createElement(Ns,null);let ut=()=>{!C||h()},Wo=Te=>{if(Te-1===D+1){x();return}if(Te-1===D-1){S();return}w(Te-1)},Uo=["Address","Balance","#"];return Ve.default.createElement("div",{className:(0,Nr.default)(M==null?void 0:M.ledgerAddressTableWrapper,i),"data-testid":l},Ve.default.createElement("div",{className:M==null?void 0:M.ledgerAddressTableTop},Ve.default.createElement("div",{className:(0,Nr.default)(M==null?void 0:M.ledgerAddressTableHeading,X),"data-testid":`${l}Title`},"Access your wallet"),Ve.default.createElement("p",{className:(0,Nr.default)(M==null?void 0:M.ledgerAddressTableDescription,J),"data-testid":`${l}SubTitle`},"Choose the wallet you want to access")),c,Ve.default.createElement("div",{className:M==null?void 0:M.ledgerAddressTable},Ve.default.createElement("div",{className:(0,Nr.default)(M==null?void 0:M.ledgerAddressTableHeader,ce)},Uo.map(Te=>Ve.default.createElement("div",{key:Te,className:M==null?void 0:M.ledgerAddressTableHeaderItem},Te))),Ve.default.createElement("div",{className:M==null?void 0:M.ledgerAddressTableBody},rn&&rn.map(({address:Te,balance:ve},De)=>Ve.default.createElement(v0,{address:Te,balance:ve,disabled:H.includes(De),key:De+D*E0,index:De+D*E0,selectedAddress:C,onSelectAddress:N,className:ie,ledgerModalTableSelectedItemClassName:Le})))),Ve.default.createElement("div",{className:M==null?void 0:M.ledgerAddressTableBottom},Ve.default.createElement(f0,{className:M==null?void 0:M.ledgerAddressTablePagination,currentPage:D+1,totalPages:XR,onPageChange:Wo,disabledClassName:Sn,buttonsClassNames:Q}),Ve.default.createElement("button",{disabled:!C,onClick:ut,"data-testid":"confirmBtn",className:(0,Nr.default)(G==null?void 0:G.btn,G==null?void 0:G.btnPrimary,M==null?void 0:M.ledgerAddressTableButton,Y)},"Access Wallet")))},N0=_e(YR,{ssrStyles:()=>Promise.resolve().then(()=>(am(),rm)),clientStyles:()=>(am(),Pe(rm)).default});r();r();var yn=O(require("react")),Wt=O(require("classnames"));te();r();r();r();var D0=O(R0()),M0=n=>{if(n<=0||isNaN(n)||!n||(0,D0.isString)(n))return"N/A time";if(n>=86400)return"more than one day";let o=Math.floor(n/3600),i=n%3600,c=Math.floor(i/60),l=i%60,f=[];return o>0&&f.push(`${o}h`),c>0&&f.push(`${c}min`),l>0&&f.push(`${l}sec`),f.join(" ")};var O0=({loginToken:n,version:o})=>{if(!n||!o)return null;let{ledgerWithUsernames:i}=If(o),c=Dt(n);if(c==null)return null;let l="For security, please confirm that your address:",f="and Auth Token:",h="are the one shown on your Ledger device screen now.";if(i){let w=M0(c.ttl),x="For security, please confirm your address:",S="and authorize:";return{data:`${c.origin} for ${w}.`,confirmAddressText:x,authText:S}}return{data:n,confirmAddressText:l,authText:f,areShownText:h}};var JR=({token:n,className:o="dapp-ledger-confirm-address",customContentComponent:i,confirmAddressClassNames:c,styles:l})=>{var G,M;let{ledgerAccount:f}=Ia(),{ledgerModalTitleClassName:h,ledgerModalConfirmDescriptionClassName:w,ledgerModalConfirmDataClassName:x,ledgerModalConfirmFooterClassName:S,ledgerModalConfirmContentClassName:N}=c||{},C=oe(oo),D=(G=C==null?void 0:C.loginToken)!=null?G:n,H=O0({loginToken:D,version:f==null?void 0:f.version});return yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddress,N,o),"data-testid":"ledgerConfirmAddress"},yn.default.createElement("h4",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressHeading,h)},"Confirm Ledger Address"),i,yn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,w)},H==null?void 0:H.confirmAddressText),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressData,x)},(M=f==null?void 0:f.address)!=null?M:"")),yn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,w)},H==null?void 0:H.authText),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressData,x)},H==null?void 0:H.data),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,w)},H==null?void 0:H.areShownText)),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressFooter,S)},yn.default.createElement("div",null,"Select Approve on your device to confirm."),yn.default.createElement("div",null,"Or, if it does not match, close this page and"," ",yn.default.createElement("a",{href:"https://help.multiversx.com/en/",target:"_blank",rel:"noreferrer"},"contact support"),".")))},F0=_e(JR,{ssrStyles:()=>Promise.resolve().then(()=>(sm(),im)),clientStyles:()=>(sm(),Pe(im)).default});r();r();var En=O(require("react")),lt=O(require("classnames"));r();var Ye=O(require("react")),QR=n=>Ye.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 290 142.3",style:{enableBackground:"new 0 0 290 142.3"},xmlSpace:"preserve"},n),Ye.createElement("style",{type:"text/css"},`
	.st0{filter:url(#Adobe_OpacityMaskFilter);}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_00000132080685600946463390000014083146887067534994_);}
	.st2{mask:url(#SVGID_1_);fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
`),Ye.createElement("defs",null,Ye.createElement("filter",{id:"Adobe_OpacityMaskFilter",filterUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3},Ye.createElement("feColorMatrix",{type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"}))),Ye.createElement("mask",{maskUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3,id:"SVGID_1_"},Ye.createElement("g",{className:"st0"},Ye.createElement("linearGradient",{id:"SVGID_00000042721603501377086220000002945655816276772283_",gradientUnits:"userSpaceOnUse",x1:1,y1:24.85,x2:92.9,y2:24.85},Ye.createElement("stop",{offset:0,style:{stopColor:"#000000"}}),Ye.createElement("stop",{offset:.1864,style:{stopColor:"#000000"}}),Ye.createElement("stop",{offset:.8945,style:{stopColor:"#FFFFFF"}})),Ye.createElement("rect",{x:1,y:21.7,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"url(#SVGID_00000042721603501377086220000002945655816276772283_)"},width:91.9,height:6.3}))),Ye.createElement("path",{className:"st2",d:"M1,26.6V28h92.7v-1.4H1z M1,21.7v1.4h92.7v-1.4H1z"}),Ye.createElement("g",null,Ye.createElement("path",{className:"st3",d:"M218.8,21h-38.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v5.6c0,0.2,0.1,0.3,0.2,0.4   c0.1,0.1,0.2,0.2,0.4,0.2h38.1c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4v-5.6c0-0.1-0.1-0.3-0.2-0.4   C219.1,21.1,219,21,218.8,21z M185.2,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7   l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L185.2,25.4z M189.6,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6   l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L189.6,25.4z M194,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3   l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L194,25.4z M198.4,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8   l0,0l-1-0.3l0.1-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L198.4,25.4z M202.8,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9   l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L202.8,25.4z M207.1,25.4l-0.5,0.4l-0.6-0.9   l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L207.1,25.4z M211.5,25.4   l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L211.5,25.4z    M215.9,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3   l0,0L215.9,25.4z"}),Ye.createElement("path",{className:"st3",d:"M283.8,9.2l-0.1-0.1c-0.2-0.2-0.3-0.3-0.5-0.5s-0.3-0.3-0.5-0.5c-0.1-0.1-0.3-0.3-0.4-0.4   c-0.6-0.6-1.2-1.1-1.8-1.6c-3.9-3-8.7-4.7-13.9-4.7h-28.1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-42.3c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-13c-1.1,0-2.1,0.4-2.8,1.2c-0.7,0.7-1.2,1.8-1.2,2.8v8.8c-0.1,0-0.2,0-0.2,0   h-0.3h-29.1c-1.7,0-3.2,0.7-4.4,1.8c-1.2,1.2-1.8,2.8-1.8,4.4v0.3H92.9v8.4h12.7v0.7c0,1.7,0.7,3.2,1.8,4.4   c1.2,1.2,2.7,1.8,4.4,1.8h29.1h0.3c0.1,0,0.2,0,0.2,0v7.4c0,1.1,0.4,2.1,1.2,2.8s1.8,1.2,2.8,1.2h72.3l-0.4,0.5l-53.4,63.6   c-0.3,0.4-0.6,0.9-0.7,1.4c-0.2,0.5-0.2,1-0.2,1.5s0.2,1,0.4,1.5s0.6,0.9,1,1.2l28.9,24.3c0.4,0.3,0.9,0.6,1.4,0.7   c0.5,0.2,1,0.2,1.5,0.2s1-0.2,1.5-0.4s0.9-0.6,1.2-1l82.5-98.3l2.9-3.5C291.8,30.3,291.3,17.5,283.8,9.2z M105.1,27.9h-11v-6h11   V27.9z M277.7,45.1l-79.8,95c-0.2,0.3-0.5,0.5-0.8,0.7s-0.7,0.3-1,0.3c-0.4,0-0.7,0-1.1-0.1c-0.3-0.1-0.7-0.3-0.9-0.5l-29-24.3   c-0.3-0.2-0.5-0.5-0.7-0.8s-0.3-0.7-0.3-1c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.3-0.7,0.5-0.9l54-64.4l0.4-0.5l1-1.2l8.1-9.7l0.3-0.3   l0.3-0.3l5.2-6.2l0.3-0.4l0.3-0.4L250,10.6c4.8-5.7,11.8-8.3,18.6-7.6c0.2,0,0.5,0,0.7,0.1c0.3,0,0.6,0.1,0.9,0.1   c0.2,0,0.5,0.1,0.7,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.6,0.2,1.2,0.3,1.8,0.5c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,0.9,0.4   c0.2,0.1,0.4,0.2,0.6,0.3c0.6,0.3,1.2,0.7,1.9,1c0.4,0.2,0.8,0.5,1.2,0.8l0,0c0.4,0.3,0.8,0.6,1.1,0.9c0.1,0.1,0.2,0.2,0.3,0.2   c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.2,0.4,0.4c7.9,7.8,8.6,20.6,1.3,29.3l-4.7,5.6L277.7,45.1z    M234.2,27.8l-6.8,8.1h-60.6c-0.8,0-1.5-0.7-1.5-1.5v-20c0-0.8,0.7-1.5,1.5-1.5h65.9c0.8,0,1.5,0.7,1.5,1.5L234.2,27.8L234.2,27.8z    M141.2,34.9h-0.3h-29.1c-1.3,0-2.6-0.5-3.5-1.5c-0.9-0.9-1.5-2.2-1.5-3.5v-9.5c0-1.3,0.5-2.6,1.5-3.5c0.9-0.9,2.2-1.5,3.5-1.5   h29.1h0.3c0.1,0,0.2,0,0.2,0.1v19.4C141.3,34.8,141.3,34.9,141.2,34.9z M145.4,46.2c-0.7,0-1.4-0.3-2-0.8c-0.5-0.5-0.8-1.2-0.8-2   v-8.2v-3.4V18.1V15V5.4c0-0.7,0.3-1.4,0.8-1.9s1.2-0.8,2-0.8h12.9h19.2h42h19.2h21.4c-4.1,1.2-7.8,3.6-10.8,7.1l-14.5,17.3V14.4   c0-1.2-0.9-2.1-2.1-2.1h-65.9c-1.2,0-2.1,0.9-2.1,2.1v20c0,1.2,0.9,2.1,2.1,2.1h60.1l-8.2,9.7C218.7,46.2,145.4,46.2,145.4,46.2z"}),Ye.createElement("path",{className:"st3",d:"M265.5,12.2c-6.8,0-12.2,5.4-12.2,12.2c0,6.7,5.5,12.2,12.2,12.2c6.8,0,12.2-5.4,12.2-12.2   C277.7,17.7,272.2,12.2,265.5,12.2z M265.5,35.9c-6.4,0-11.6-5.2-11.6-11.5s5.2-11.5,11.6-11.5s11.6,5.2,11.6,11.5   S271.9,35.9,265.5,35.9z"}))),W0=QR;te();var nD=({onClick:n,error:o,disabled:i,connectPageContent:c,customContentComponent:l,className:f="dapp-ledger-connect-button",ledgerConnectClassNames:h,globalStyles:w,styles:x})=>{let{ledgerModalTitleClassName:S,ledgerModalSubtitleClassName:N,ledgerModalErrorClassName:C,ledgerModalIconClassName:D,ledgerModalButtonClassName:H,ledgerModalFooterLinkClassName:G,ledgerModalFooterClassName:M,ledgerModalContentClassName:X}=h||{};return En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainer,f)},En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerContent,X)},c||En.default.createElement(En.default.Fragment,null,En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerHeading,S)},"Connect Ledger"),En.default.createElement("p",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerDescription,N)},"Unlock your device & open the MultiversX App"),o&&En.default.createElement("p",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerError,C)},o),l,En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerIcon,D)},En.default.createElement(W0,null))),En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerFooter,M)},En.default.createElement("button",{onClick:n,disabled:i,"data-testid":"ledgerConnectBtn",className:(0,lt.default)(w==null?void 0:w.btn,w==null?void 0:w.btnPrimary,x==null?void 0:x.loginConnectContainerButton,H)},"Connect Ledger"),En.default.createElement("a",{href:"https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux",target:"_blank",rel:"noopener noreferrer",className:(0,lt.default)(x==null?void 0:x.loginConnectContainerLink,G)},"Having connection issues?"))))},G0=_e(nD,{ssrStyles:()=>Promise.resolve().then(()=>(pm(),cm)),clientStyles:()=>(pm(),Pe(cm)).default});var H0=({isLoading:n,customSpinnerComponent:o,customContentComponent:i,ledgerLoadingClassNames:c,ledgerAccount:l,error:f,confirmAddressClassNames:h,token:w,showAddressList:x,accounts:S,addressTableClassNames:N,onConfirmSelectedAddress:C,onGoToSpecificPage:D,onGoToNextPage:H,onGoToPrevPage:G,onSelectAddress:M,selectedAddress:X,startIndex:J,disabledConnectButton:ce,ledgerConnectClassNames:ie,onStartLogin:Y})=>n?Da.default.createElement(Ns,{customSpinnerComponent:o,customContentComponent:i,ledgerLoadingClassNames:c}):l!=null&&!f?Da.default.createElement(F0,{confirmAddressClassNames:h,customContentComponent:i,token:w}):x&&!f?Da.default.createElement(N0,{accounts:S,addressTableClassNames:N,customContentComponent:i,loading:n,onConfirmSelectedAddress:C,onGoToSpecificPage:D,onGoToNextPage:H,onGoToPrevPage:G,onSelectAddress:M,selectedAddress:X==null?void 0:X.address,startIndex:J}):Da.default.createElement(G0,{customContentComponent:i,disabled:ce,error:f,ledgerConnectClassNames:ie,onClick:Y});r();r();var Dr=O(require("react")),lm=O(require("classnames"));var oD=({error:n,ledgerAccount:o,ledgerProgressBarClassNames:i,showAddressList:c,showProgressBar:l,styles:f})=>{let h=[{percentage:33,conditions:!c&&!o},{conditions:c&&!n&&!o,percentage:66},{conditions:o!=null&&!n,percentage:100}],w=(0,Dr.useMemo)(()=>h.find(C=>C.conditions),[]),x=w?w.percentage:33;if(!l)return null;let{ledgerProgressBarTrackClassName:S,ledgerProgressBarThumbClassName:N}=i||{};return Dr.default.createElement("div",{className:f==null?void 0:f.ledgerProgressBar},Dr.default.createElement("div",{className:(0,lm.default)(f==null?void 0:f.ledgerProgressBarTrack,S)}),Dr.default.createElement("div",{className:(0,lm.default)(f==null?void 0:f.ledgerProgressBarThumb,N),style:{width:`${x}%`}}))},z0=_e(oD,{ssrStyles:()=>Promise.resolve().then(()=>(mm(),dm)),clientStyles:()=>(mm(),Pe(dm)).default});r();r();var X0=O(require("react"));r();r();var nn=O(require("react")),q0=require("@fortawesome/free-solid-svg-icons"),K0=require("@fortawesome/react-fontawesome"),gm=O(require("classnames"));var aD=n=>{let{className:o,url:i,icon:c,authorizationInfo:l,styles:f}=n,h=i.replace("https://","").replace(/\/$/,""),w=l!=null&&l.url?l.url.replace("https://","").replace(/\/$/,""):"";return nn.default.createElement(nn.default.Fragment,null,nn.default.createElement("p",{className:(0,gm.default)(f==null?void 0:f.scamPhishingAlert,o)},c||nn.default.createElement(K0.FontAwesomeIcon,{className:f==null?void 0:f.scamPhishingAlertIcon,icon:q0.faLock}),nn.default.createElement("span",{className:f==null?void 0:f.scamPhishingAlertText},nn.default.createElement("span",null,"Scam/Phishing verification:")," ",nn.default.createElement("span",{className:f==null?void 0:f.scamPhishingAlertPrefix},nn.default.createElement("strong",null,"https://"),h))),l&&l.url&&nn.default.createElement("p",{className:(0,gm.default)(f==null?void 0:f.scamPhishingAlert,f==null?void 0:f.scamPhishingAlertAuthorization,l.className)},nn.default.createElement("span",{className:f==null?void 0:f.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),nn.default.createElement("span",{className:f==null?void 0:f.scamPhishingAlertText},nn.default.createElement("strong",null,"https://"),nn.default.createElement("span",null,w," for"),nn.default.createElement("strong",{className:f==null?void 0:f.scamPhishingAlertAuthorizationDuration},l.duration)),nn.default.createElement("span",{className:f==null?void 0:f.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),nn.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},j0=_e(aD,{ssrStyles:()=>Promise.resolve().then(()=>(um(),_m)),clientStyles:()=>(um(),Pe(_m)).default});Qe();var Y0=({showScamPhishingAlert:n,token:o,ledgerScamPhishingAlertClassName:i})=>{if(!n)return null;let c=fx(o,i);return X0.default.createElement(j0,{authorizationInfo:c,className:i,url:Re().origin})};var iD=({callbackRoute:n,customSpinnerComponent:o,customContentComponent:i,innerLedgerComponentsClasses:c,nativeAuth:l,onLoginRedirect:f,showProgressBar:h=!0,showScamPhishingAlert:w=!0,token:x})=>{let{ledgerAccount:S}=Ia(),[N,{error:C,isLoading:D},{accounts:H,onConfirmSelectedAddress:G,onGoToSpecificPage:M,onGoToNextPage:X,onGoToPrevPage:J,onSelectAddress:ce,selectedAddress:ie,showAddressList:Y,startIndex:Q}]=Nd({callbackRoute:n,token:x,onLoginRedirect:f,nativeAuth:l}),Le=bd(x),{addressTableClassNames:Sn,confirmAddressClassNames:rn,ledgerConnectClassNames:bn,ledgerLoadingClassNames:_t,ledgerProgressBarClassNames:lo,ledgerScamPhishingAlertClassName:ut}=c||{};return Mr.default.createElement(Mr.default.Fragment,null,Mr.default.createElement(Y0,{ledgerScamPhishingAlertClassName:ut,showScamPhishingAlert:w,token:x}),Mr.default.createElement(z0,{error:C,ledgerAccount:S,ledgerProgressBarClassNames:lo,showAddressList:Y,showProgressBar:h}),Mr.default.createElement(H0,E({},{accounts:H,addressTableClassNames:Sn,confirmAddressClassNames:rn,customContentComponent:i,customSpinnerComponent:o,disabledConnectButton:Le,error:C,isLoading:D,ledgerAccount:S,ledgerConnectClassNames:bn,ledgerLoadingClassNames:_t,onConfirmSelectedAddress:G,onGoToSpecificPage:M,onGoToNextPage:X,onGoToPrevPage:J,onSelectAddress:ce,onStartLogin:N,selectedAddress:ie,showAddressList:Y,startIndex:Q,token:x})))};0&&(module.exports={LedgerLoginContent});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=LedgerLoginContent.js.map
