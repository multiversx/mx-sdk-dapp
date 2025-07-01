"use strict";var zI=Object.create;var oa=Object.defineProperty,VI=Object.defineProperties,qI=Object.getOwnPropertyDescriptor,KI=Object.getOwnPropertyDescriptors,jI=Object.getOwnPropertyNames,Ii=Object.getOwnPropertySymbols,XI=Object.getPrototypeOf,rp=Object.prototype.hasOwnProperty,nu=Object.prototype.propertyIsEnumerable;var eu=(n,o,i)=>o in n?oa(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i,E=(n,o)=>{for(var i in o||(o={}))rp.call(o,i)&&eu(n,i,o[i]);if(Ii)for(var i of Ii(o))nu.call(o,i)&&eu(n,i,o[i]);return n},Z=(n,o)=>VI(n,KI(o));var bo=(n,o)=>{var i={};for(var c in n)rp.call(n,c)&&o.indexOf(c)<0&&(i[c]=n[c]);if(n!=null&&Ii)for(var c of Ii(n))o.indexOf(c)<0&&nu.call(n,c)&&(i[c]=n[c]);return i};var F=(n,o)=>()=>(n&&(o=n(n=0)),o);var W=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports),Ee=(n,o)=>{for(var i in o)oa(n,i,{get:o[i],enumerable:!0})},tu=(n,o,i,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of jI(o))!rp.call(n,l)&&l!==i&&oa(n,l,{get:()=>o[l],enumerable:!(c=qI(o,l))||c.enumerable});return n};var M=(n,o,i)=>(i=n!=null?zI(XI(n)):{},tu(o||!n||!n.__esModule?oa(i,"default",{value:n,enumerable:!0}):i,n)),Le=n=>tu(oa({},"__esModule",{value:!0}),n);var B=(n,o,i)=>new Promise((c,l)=>{var g=x=>{try{w(i.next(x))}catch(S){l(S)}},h=x=>{try{w(i.throw(x))}catch(S){l(S)}},w=x=>x.done?c(x.value):Promise.resolve(x.value).then(g,h);w((i=i.apply(n,o)).next())});var au=W(Ci=>{"use strict";r();Ci.byteLength=ZI;Ci.toByteArray=QI;Ci.fromByteArray=tC;var Qn=[],Un=[],YI=typeof Uint8Array!="undefined"?Uint8Array:Array,ap="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(wo=0,ou=ap.length;wo<ou;++wo)Qn[wo]=ap[wo],Un[ap.charCodeAt(wo)]=wo;var wo,ou;Un["-".charCodeAt(0)]=62;Un["_".charCodeAt(0)]=63;function ru(n){var o=n.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=n.indexOf("=");i===-1&&(i=o);var c=i===o?0:4-i%4;return[i,c]}function ZI(n){var o=ru(n),i=o[0],c=o[1];return(i+c)*3/4-c}function JI(n,o,i){return(o+i)*3/4-i}function QI(n){var o,i=ru(n),c=i[0],l=i[1],g=new YI(JI(n,c,l)),h=0,w=l>0?c-4:c,x;for(x=0;x<w;x+=4)o=Un[n.charCodeAt(x)]<<18|Un[n.charCodeAt(x+1)]<<12|Un[n.charCodeAt(x+2)]<<6|Un[n.charCodeAt(x+3)],g[h++]=o>>16&255,g[h++]=o>>8&255,g[h++]=o&255;return l===2&&(o=Un[n.charCodeAt(x)]<<2|Un[n.charCodeAt(x+1)]>>4,g[h++]=o&255),l===1&&(o=Un[n.charCodeAt(x)]<<10|Un[n.charCodeAt(x+1)]<<4|Un[n.charCodeAt(x+2)]>>2,g[h++]=o>>8&255,g[h++]=o&255),g}function eC(n){return Qn[n>>18&63]+Qn[n>>12&63]+Qn[n>>6&63]+Qn[n&63]}function nC(n,o,i){for(var c,l=[],g=o;g<i;g+=3)c=(n[g]<<16&16711680)+(n[g+1]<<8&65280)+(n[g+2]&255),l.push(eC(c));return l.join("")}function tC(n){for(var o,i=n.length,c=i%3,l=[],g=16383,h=0,w=i-c;h<w;h+=g)l.push(nC(n,h,h+g>w?w:h+g));return c===1?(o=n[i-1],l.push(Qn[o>>2]+Qn[o<<4&63]+"==")):c===2&&(o=(n[i-2]<<8)+n[i-1],l.push(Qn[o>>10]+Qn[o>>4&63]+Qn[o<<2&63]+"=")),l.join("")}});var iu=W(ip=>{r();ip.read=function(n,o,i,c,l){var g,h,w=l*8-c-1,x=(1<<w)-1,S=x>>1,N=-7,C=i?l-1:0,D=i?-1:1,H=n[o+C];for(C+=D,g=H&(1<<-N)-1,H>>=-N,N+=w;N>0;g=g*256+n[o+C],C+=D,N-=8);for(h=g&(1<<-N)-1,g>>=-N,N+=c;N>0;h=h*256+n[o+C],C+=D,N-=8);if(g===0)g=1-S;else{if(g===x)return h?NaN:(H?-1:1)*(1/0);h=h+Math.pow(2,c),g=g-S}return(H?-1:1)*h*Math.pow(2,g-c)};ip.write=function(n,o,i,c,l,g){var h,w,x,S=g*8-l-1,N=(1<<S)-1,C=N>>1,D=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,H=c?0:g-1,G=c?1:-1,O=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,h=N):(h=Math.floor(Math.log(o)/Math.LN2),o*(x=Math.pow(2,-h))<1&&(h--,x*=2),h+C>=1?o+=D/x:o+=D*Math.pow(2,1-C),o*x>=2&&(h++,x/=2),h+C>=N?(w=0,h=N):h+C>=1?(w=(o*x-1)*Math.pow(2,l),h=h+C):(w=o*Math.pow(2,C-1)*Math.pow(2,l),h=0));l>=8;n[i+H]=w&255,H+=G,w/=256,l-=8);for(h=h<<l|w,S+=l;S>0;n[i+H]=h&255,H+=G,h/=256,S-=8);n[i+H-G]|=O*128}});var xu=W(rr=>{"use strict";r();var sp=au(),or=iu(),su=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;rr.Buffer=L;rr.SlowBuffer=cC;rr.INSPECT_MAX_BYTES=50;var Li=2147483647;rr.kMaxLength=Li;L.TYPED_ARRAY_SUPPORT=oC();!L.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function oC(){try{var n=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(n,o),n.foo()===42}catch(i){return!1}}Object.defineProperty(L.prototype,"parent",{enumerable:!0,get:function(){if(!!L.isBuffer(this))return this.buffer}});Object.defineProperty(L.prototype,"offset",{enumerable:!0,get:function(){if(!!L.isBuffer(this))return this.byteOffset}});function At(n){if(n>Li)throw new RangeError('The value "'+n+'" is invalid for option "size"');var o=new Uint8Array(n);return Object.setPrototypeOf(o,L.prototype),o}function L(n,o,i){if(typeof n=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return mp(n)}return du(n,o,i)}L.poolSize=8192;function du(n,o,i){if(typeof n=="string")return aC(n,o);if(ArrayBuffer.isView(n))return iC(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(et(n,ArrayBuffer)||n&&et(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(et(n,SharedArrayBuffer)||n&&et(n.buffer,SharedArrayBuffer)))return pp(n,o,i);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=n.valueOf&&n.valueOf();if(c!=null&&c!==n)return L.from(c,o,i);var l=sC(n);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return L.from(n[Symbol.toPrimitive]("string"),o,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}L.from=function(n,o,i){return du(n,o,i)};Object.setPrototypeOf(L.prototype,Uint8Array.prototype);Object.setPrototypeOf(L,Uint8Array);function mu(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function rC(n,o,i){return mu(n),n<=0?At(n):o!==void 0?typeof i=="string"?At(n).fill(o,i):At(n).fill(o):At(n)}L.alloc=function(n,o,i){return rC(n,o,i)};function mp(n){return mu(n),At(n<0?0:lp(n)|0)}L.allocUnsafe=function(n){return mp(n)};L.allocUnsafeSlow=function(n){return mp(n)};function aC(n,o){if((typeof o!="string"||o==="")&&(o="utf8"),!L.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var i=lu(n,o)|0,c=At(i),l=c.write(n,o);return l!==i&&(c=c.slice(0,l)),c}function cp(n){for(var o=n.length<0?0:lp(n.length)|0,i=At(o),c=0;c<o;c+=1)i[c]=n[c]&255;return i}function iC(n){if(et(n,Uint8Array)){var o=new Uint8Array(n);return pp(o.buffer,o.byteOffset,o.byteLength)}return cp(n)}function pp(n,o,i){if(o<0||n.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<o+(i||0))throw new RangeError('"length" is outside of buffer bounds');var c;return o===void 0&&i===void 0?c=new Uint8Array(n):i===void 0?c=new Uint8Array(n,o):c=new Uint8Array(n,o,i),Object.setPrototypeOf(c,L.prototype),c}function sC(n){if(L.isBuffer(n)){var o=lp(n.length)|0,i=At(o);return i.length===0||n.copy(i,0,0,o),i}if(n.length!==void 0)return typeof n.length!="number"||_p(n.length)?At(0):cp(n);if(n.type==="Buffer"&&Array.isArray(n.data))return cp(n.data)}function lp(n){if(n>=Li)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Li.toString(16)+" bytes");return n|0}function cC(n){return+n!=n&&(n=0),L.alloc(+n)}L.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==L.prototype};L.compare=function(o,i){if(et(o,Uint8Array)&&(o=L.from(o,o.offset,o.byteLength)),et(i,Uint8Array)&&(i=L.from(i,i.offset,i.byteLength)),!L.isBuffer(o)||!L.isBuffer(i))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===i)return 0;for(var c=o.length,l=i.length,g=0,h=Math.min(c,l);g<h;++g)if(o[g]!==i[g]){c=o[g],l=i[g];break}return c<l?-1:l<c?1:0};L.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};L.concat=function(o,i){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return L.alloc(0);var c;if(i===void 0)for(i=0,c=0;c<o.length;++c)i+=o[c].length;var l=L.allocUnsafe(i),g=0;for(c=0;c<o.length;++c){var h=o[c];if(et(h,Uint8Array))g+h.length>l.length?L.from(h).copy(l,g):Uint8Array.prototype.set.call(l,h,g);else if(L.isBuffer(h))h.copy(l,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=h.length}return l};function lu(n,o){if(L.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||et(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var i=n.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&i===0)return 0;for(var l=!1;;)switch(o){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return dp(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return Tu(n).length;default:if(l)return c?-1:dp(n).length;o=(""+o).toLowerCase(),l=!0}}L.byteLength=lu;function pC(n,o,i){var c=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,o>>>=0,i<=o))return"";for(n||(n="utf8");;)switch(n){case"hex":return xC(this,o,i);case"utf8":case"utf-8":return uu(this,o,i);case"ascii":return hC(this,o,i);case"latin1":case"binary":return TC(this,o,i);case"base64":return gC(this,o,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yC(this,o,i);default:if(c)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),c=!0}}L.prototype._isBuffer=!0;function vo(n,o,i){var c=n[o];n[o]=n[i],n[i]=c}L.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var i=0;i<o;i+=2)vo(this,i,i+1);return this};L.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var i=0;i<o;i+=4)vo(this,i,i+3),vo(this,i+1,i+2);return this};L.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var i=0;i<o;i+=8)vo(this,i,i+7),vo(this,i+1,i+6),vo(this,i+2,i+5),vo(this,i+3,i+4);return this};L.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?uu(this,0,o):pC.apply(this,arguments)};L.prototype.toLocaleString=L.prototype.toString;L.prototype.equals=function(o){if(!L.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:L.compare(this,o)===0};L.prototype.inspect=function(){var o="",i=rr.INSPECT_MAX_BYTES;return o=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(o+=" ... "),"<Buffer "+o+">"};su&&(L.prototype[su]=L.prototype.inspect);L.prototype.compare=function(o,i,c,l,g){if(et(o,Uint8Array)&&(o=L.from(o,o.offset,o.byteLength)),!L.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(i===void 0&&(i=0),c===void 0&&(c=o?o.length:0),l===void 0&&(l=0),g===void 0&&(g=this.length),i<0||c>o.length||l<0||g>this.length)throw new RangeError("out of range index");if(l>=g&&i>=c)return 0;if(l>=g)return-1;if(i>=c)return 1;if(i>>>=0,c>>>=0,l>>>=0,g>>>=0,this===o)return 0;for(var h=g-l,w=c-i,x=Math.min(h,w),S=this.slice(l,g),N=o.slice(i,c),C=0;C<x;++C)if(S[C]!==N[C]){h=S[C],w=N[C];break}return h<w?-1:w<h?1:0};function _u(n,o,i,c,l){if(n.length===0)return-1;if(typeof i=="string"?(c=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,_p(i)&&(i=l?0:n.length-1),i<0&&(i=n.length+i),i>=n.length){if(l)return-1;i=n.length-1}else if(i<0)if(l)i=0;else return-1;if(typeof o=="string"&&(o=L.from(o,c)),L.isBuffer(o))return o.length===0?-1:cu(n,o,i,c,l);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(n,o,i):Uint8Array.prototype.lastIndexOf.call(n,o,i):cu(n,[o],i,c,l);throw new TypeError("val must be string, number or Buffer")}function cu(n,o,i,c,l){var g=1,h=n.length,w=o.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(n.length<2||o.length<2)return-1;g=2,h/=2,w/=2,i/=2}function x(H,G){return g===1?H[G]:H.readUInt16BE(G*g)}var S;if(l){var N=-1;for(S=i;S<h;S++)if(x(n,S)===x(o,N===-1?0:S-N)){if(N===-1&&(N=S),S-N+1===w)return N*g}else N!==-1&&(S-=S-N),N=-1}else for(i+w>h&&(i=h-w),S=i;S>=0;S--){for(var C=!0,D=0;D<w;D++)if(x(n,S+D)!==x(o,D)){C=!1;break}if(C)return S}return-1}L.prototype.includes=function(o,i,c){return this.indexOf(o,i,c)!==-1};L.prototype.indexOf=function(o,i,c){return _u(this,o,i,c,!0)};L.prototype.lastIndexOf=function(o,i,c){return _u(this,o,i,c,!1)};function dC(n,o,i,c){i=Number(i)||0;var l=n.length-i;c?(c=Number(c),c>l&&(c=l)):c=l;var g=o.length;c>g/2&&(c=g/2);for(var h=0;h<c;++h){var w=parseInt(o.substr(h*2,2),16);if(_p(w))return h;n[i+h]=w}return h}function mC(n,o,i,c){return ki(dp(o,n.length-i),n,i,c)}function lC(n,o,i,c){return ki(wC(o),n,i,c)}function _C(n,o,i,c){return ki(Tu(o),n,i,c)}function uC(n,o,i,c){return ki(vC(o,n.length-i),n,i,c)}L.prototype.write=function(o,i,c,l){if(i===void 0)l="utf8",c=this.length,i=0;else if(c===void 0&&typeof i=="string")l=i,c=this.length,i=0;else if(isFinite(i))i=i>>>0,isFinite(c)?(c=c>>>0,l===void 0&&(l="utf8")):(l=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var g=this.length-i;if((c===void 0||c>g)&&(c=g),o.length>0&&(c<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");l||(l="utf8");for(var h=!1;;)switch(l){case"hex":return dC(this,o,i,c);case"utf8":case"utf-8":return mC(this,o,i,c);case"ascii":case"latin1":case"binary":return lC(this,o,i,c);case"base64":return _C(this,o,i,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return uC(this,o,i,c);default:if(h)throw new TypeError("Unknown encoding: "+l);l=(""+l).toLowerCase(),h=!0}};L.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function gC(n,o,i){return o===0&&i===n.length?sp.fromByteArray(n):sp.fromByteArray(n.slice(o,i))}function uu(n,o,i){i=Math.min(n.length,i);for(var c=[],l=o;l<i;){var g=n[l],h=null,w=g>239?4:g>223?3:g>191?2:1;if(l+w<=i){var x,S,N,C;switch(w){case 1:g<128&&(h=g);break;case 2:x=n[l+1],(x&192)===128&&(C=(g&31)<<6|x&63,C>127&&(h=C));break;case 3:x=n[l+1],S=n[l+2],(x&192)===128&&(S&192)===128&&(C=(g&15)<<12|(x&63)<<6|S&63,C>2047&&(C<55296||C>57343)&&(h=C));break;case 4:x=n[l+1],S=n[l+2],N=n[l+3],(x&192)===128&&(S&192)===128&&(N&192)===128&&(C=(g&15)<<18|(x&63)<<12|(S&63)<<6|N&63,C>65535&&C<1114112&&(h=C))}}h===null?(h=65533,w=1):h>65535&&(h-=65536,c.push(h>>>10&1023|55296),h=56320|h&1023),c.push(h),l+=w}return fC(c)}var pu=4096;function fC(n){var o=n.length;if(o<=pu)return String.fromCharCode.apply(String,n);for(var i="",c=0;c<o;)i+=String.fromCharCode.apply(String,n.slice(c,c+=pu));return i}function hC(n,o,i){var c="";i=Math.min(n.length,i);for(var l=o;l<i;++l)c+=String.fromCharCode(n[l]&127);return c}function TC(n,o,i){var c="";i=Math.min(n.length,i);for(var l=o;l<i;++l)c+=String.fromCharCode(n[l]);return c}function xC(n,o,i){var c=n.length;(!o||o<0)&&(o=0),(!i||i<0||i>c)&&(i=c);for(var l="",g=o;g<i;++g)l+=AC[n[g]];return l}function yC(n,o,i){for(var c=n.slice(o,i),l="",g=0;g<c.length-1;g+=2)l+=String.fromCharCode(c[g]+c[g+1]*256);return l}L.prototype.slice=function(o,i){var c=this.length;o=~~o,i=i===void 0?c:~~i,o<0?(o+=c,o<0&&(o=0)):o>c&&(o=c),i<0?(i+=c,i<0&&(i=0)):i>c&&(i=c),i<o&&(i=o);var l=this.subarray(o,i);return Object.setPrototypeOf(l,L.prototype),l};function je(n,o,i){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+o>i)throw new RangeError("Trying to access beyond buffer length")}L.prototype.readUintLE=L.prototype.readUIntLE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=this[o],g=1,h=0;++h<i&&(g*=256);)l+=this[o+h]*g;return l};L.prototype.readUintBE=L.prototype.readUIntBE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=this[o+--i],g=1;i>0&&(g*=256);)l+=this[o+--i]*g;return l};L.prototype.readUint8=L.prototype.readUInt8=function(o,i){return o=o>>>0,i||je(o,1,this.length),this[o]};L.prototype.readUint16LE=L.prototype.readUInt16LE=function(o,i){return o=o>>>0,i||je(o,2,this.length),this[o]|this[o+1]<<8};L.prototype.readUint16BE=L.prototype.readUInt16BE=function(o,i){return o=o>>>0,i||je(o,2,this.length),this[o]<<8|this[o+1]};L.prototype.readUint32LE=L.prototype.readUInt32LE=function(o,i){return o=o>>>0,i||je(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};L.prototype.readUint32BE=L.prototype.readUInt32BE=function(o,i){return o=o>>>0,i||je(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};L.prototype.readIntLE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=this[o],g=1,h=0;++h<i&&(g*=256);)l+=this[o+h]*g;return g*=128,l>=g&&(l-=Math.pow(2,8*i)),l};L.prototype.readIntBE=function(o,i,c){o=o>>>0,i=i>>>0,c||je(o,i,this.length);for(var l=i,g=1,h=this[o+--l];l>0&&(g*=256);)h+=this[o+--l]*g;return g*=128,h>=g&&(h-=Math.pow(2,8*i)),h};L.prototype.readInt8=function(o,i){return o=o>>>0,i||je(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};L.prototype.readInt16LE=function(o,i){o=o>>>0,i||je(o,2,this.length);var c=this[o]|this[o+1]<<8;return c&32768?c|4294901760:c};L.prototype.readInt16BE=function(o,i){o=o>>>0,i||je(o,2,this.length);var c=this[o+1]|this[o]<<8;return c&32768?c|4294901760:c};L.prototype.readInt32LE=function(o,i){return o=o>>>0,i||je(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};L.prototype.readInt32BE=function(o,i){return o=o>>>0,i||je(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};L.prototype.readFloatLE=function(o,i){return o=o>>>0,i||je(o,4,this.length),or.read(this,o,!0,23,4)};L.prototype.readFloatBE=function(o,i){return o=o>>>0,i||je(o,4,this.length),or.read(this,o,!1,23,4)};L.prototype.readDoubleLE=function(o,i){return o=o>>>0,i||je(o,8,this.length),or.read(this,o,!0,52,8)};L.prototype.readDoubleBE=function(o,i){return o=o>>>0,i||je(o,8,this.length),or.read(this,o,!1,52,8)};function fn(n,o,i,c,l,g){if(!L.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>l||o<g)throw new RangeError('"value" argument is out of bounds');if(i+c>n.length)throw new RangeError("Index out of range")}L.prototype.writeUintLE=L.prototype.writeUIntLE=function(o,i,c,l){if(o=+o,i=i>>>0,c=c>>>0,!l){var g=Math.pow(2,8*c)-1;fn(this,o,i,c,g,0)}var h=1,w=0;for(this[i]=o&255;++w<c&&(h*=256);)this[i+w]=o/h&255;return i+c};L.prototype.writeUintBE=L.prototype.writeUIntBE=function(o,i,c,l){if(o=+o,i=i>>>0,c=c>>>0,!l){var g=Math.pow(2,8*c)-1;fn(this,o,i,c,g,0)}var h=c-1,w=1;for(this[i+h]=o&255;--h>=0&&(w*=256);)this[i+h]=o/w&255;return i+c};L.prototype.writeUint8=L.prototype.writeUInt8=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,1,255,0),this[i]=o&255,i+1};L.prototype.writeUint16LE=L.prototype.writeUInt16LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,65535,0),this[i]=o&255,this[i+1]=o>>>8,i+2};L.prototype.writeUint16BE=L.prototype.writeUInt16BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,65535,0),this[i]=o>>>8,this[i+1]=o&255,i+2};L.prototype.writeUint32LE=L.prototype.writeUInt32LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,4294967295,0),this[i+3]=o>>>24,this[i+2]=o>>>16,this[i+1]=o>>>8,this[i]=o&255,i+4};L.prototype.writeUint32BE=L.prototype.writeUInt32BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,4294967295,0),this[i]=o>>>24,this[i+1]=o>>>16,this[i+2]=o>>>8,this[i+3]=o&255,i+4};L.prototype.writeIntLE=function(o,i,c,l){if(o=+o,i=i>>>0,!l){var g=Math.pow(2,8*c-1);fn(this,o,i,c,g-1,-g)}var h=0,w=1,x=0;for(this[i]=o&255;++h<c&&(w*=256);)o<0&&x===0&&this[i+h-1]!==0&&(x=1),this[i+h]=(o/w>>0)-x&255;return i+c};L.prototype.writeIntBE=function(o,i,c,l){if(o=+o,i=i>>>0,!l){var g=Math.pow(2,8*c-1);fn(this,o,i,c,g-1,-g)}var h=c-1,w=1,x=0;for(this[i+h]=o&255;--h>=0&&(w*=256);)o<0&&x===0&&this[i+h+1]!==0&&(x=1),this[i+h]=(o/w>>0)-x&255;return i+c};L.prototype.writeInt8=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,1,127,-128),o<0&&(o=255+o+1),this[i]=o&255,i+1};L.prototype.writeInt16LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,32767,-32768),this[i]=o&255,this[i+1]=o>>>8,i+2};L.prototype.writeInt16BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,2,32767,-32768),this[i]=o>>>8,this[i+1]=o&255,i+2};L.prototype.writeInt32LE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,2147483647,-2147483648),this[i]=o&255,this[i+1]=o>>>8,this[i+2]=o>>>16,this[i+3]=o>>>24,i+4};L.prototype.writeInt32BE=function(o,i,c){return o=+o,i=i>>>0,c||fn(this,o,i,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[i]=o>>>24,this[i+1]=o>>>16,this[i+2]=o>>>8,this[i+3]=o&255,i+4};function gu(n,o,i,c,l,g){if(i+c>n.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function fu(n,o,i,c,l){return o=+o,i=i>>>0,l||gu(n,o,i,4,34028234663852886e22,-34028234663852886e22),or.write(n,o,i,c,23,4),i+4}L.prototype.writeFloatLE=function(o,i,c){return fu(this,o,i,!0,c)};L.prototype.writeFloatBE=function(o,i,c){return fu(this,o,i,!1,c)};function hu(n,o,i,c,l){return o=+o,i=i>>>0,l||gu(n,o,i,8,17976931348623157e292,-17976931348623157e292),or.write(n,o,i,c,52,8),i+8}L.prototype.writeDoubleLE=function(o,i,c){return hu(this,o,i,!0,c)};L.prototype.writeDoubleBE=function(o,i,c){return hu(this,o,i,!1,c)};L.prototype.copy=function(o,i,c,l){if(!L.isBuffer(o))throw new TypeError("argument should be a Buffer");if(c||(c=0),!l&&l!==0&&(l=this.length),i>=o.length&&(i=o.length),i||(i=0),l>0&&l<c&&(l=c),l===c||o.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(l<0)throw new RangeError("sourceEnd out of bounds");l>this.length&&(l=this.length),o.length-i<l-c&&(l=o.length-i+c);var g=l-c;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(i,c,l):Uint8Array.prototype.set.call(o,this.subarray(c,l),i),g};L.prototype.fill=function(o,i,c,l){if(typeof o=="string"){if(typeof i=="string"?(l=i,i=0,c=this.length):typeof c=="string"&&(l=c,c=this.length),l!==void 0&&typeof l!="string")throw new TypeError("encoding must be a string");if(typeof l=="string"&&!L.isEncoding(l))throw new TypeError("Unknown encoding: "+l);if(o.length===1){var g=o.charCodeAt(0);(l==="utf8"&&g<128||l==="latin1")&&(o=g)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(i<0||this.length<i||this.length<c)throw new RangeError("Out of range index");if(c<=i)return this;i=i>>>0,c=c===void 0?this.length:c>>>0,o||(o=0);var h;if(typeof o=="number")for(h=i;h<c;++h)this[h]=o;else{var w=L.isBuffer(o)?o:L.from(o,l),x=w.length;if(x===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(h=0;h<c-i;++h)this[h+i]=w[h%x]}return this};var SC=/[^+/0-9A-Za-z-_]/g;function bC(n){if(n=n.split("=")[0],n=n.trim().replace(SC,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function dp(n,o){o=o||1/0;for(var i,c=n.length,l=null,g=[],h=0;h<c;++h){if(i=n.charCodeAt(h),i>55295&&i<57344){if(!l){if(i>56319){(o-=3)>-1&&g.push(239,191,189);continue}else if(h+1===c){(o-=3)>-1&&g.push(239,191,189);continue}l=i;continue}if(i<56320){(o-=3)>-1&&g.push(239,191,189),l=i;continue}i=(l-55296<<10|i-56320)+65536}else l&&(o-=3)>-1&&g.push(239,191,189);if(l=null,i<128){if((o-=1)<0)break;g.push(i)}else if(i<2048){if((o-=2)<0)break;g.push(i>>6|192,i&63|128)}else if(i<65536){if((o-=3)<0)break;g.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((o-=4)<0)break;g.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return g}function wC(n){for(var o=[],i=0;i<n.length;++i)o.push(n.charCodeAt(i)&255);return o}function vC(n,o){for(var i,c,l,g=[],h=0;h<n.length&&!((o-=2)<0);++h)i=n.charCodeAt(h),c=i>>8,l=i%256,g.push(l),g.push(c);return g}function Tu(n){return sp.toByteArray(bC(n))}function ki(n,o,i,c){for(var l=0;l<c&&!(l+i>=o.length||l>=n.length);++l)o[l+i]=n[l];return l}function et(n,o){return n instanceof o||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===o.name}function _p(n){return n!==n}var AC=function(){for(var n="0123456789abcdef",o=new Array(256),i=0;i<16;++i)for(var c=i*16,l=0;l<16;++l)o[c+l]=n[i]+n[l];return o}()});var vu=W((wD,wu)=>{r();var We=wu.exports={},nt,tt;function up(){throw new Error("setTimeout has not been defined")}function gp(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?nt=setTimeout:nt=up}catch(n){nt=up}try{typeof clearTimeout=="function"?tt=clearTimeout:tt=gp}catch(n){tt=gp}})();function yu(n){if(nt===setTimeout)return setTimeout(n,0);if((nt===up||!nt)&&setTimeout)return nt=setTimeout,setTimeout(n,0);try{return nt(n,0)}catch(o){try{return nt.call(null,n,0)}catch(i){return nt.call(this,n,0)}}}function IC(n){if(tt===clearTimeout)return clearTimeout(n);if((tt===gp||!tt)&&clearTimeout)return tt=clearTimeout,clearTimeout(n);try{return tt(n)}catch(o){try{return tt.call(null,n)}catch(i){return tt.call(this,n)}}}var It=[],ar=!1,Ao,Pi=-1;function CC(){!ar||!Ao||(ar=!1,Ao.length?It=Ao.concat(It):Pi=-1,It.length&&Su())}function Su(){if(!ar){var n=yu(CC);ar=!0;for(var o=It.length;o;){for(Ao=It,It=[];++Pi<o;)Ao&&Ao[Pi].run();Pi=-1,o=It.length}Ao=null,ar=!1,IC(n)}}We.nextTick=function(n){var o=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)o[i-1]=arguments[i];It.push(new bu(n,o)),It.length===1&&!ar&&yu(Su)};function bu(n,o){this.fun=n,this.array=o}bu.prototype.run=function(){this.fun.apply(null,this.array)};We.title="browser";We.browser=!0;We.env={};We.argv=[];We.version="";We.versions={};function Ct(){}We.on=Ct;We.addListener=Ct;We.once=Ct;We.off=Ct;We.removeListener=Ct;We.removeAllListeners=Ct;We.emit=Ct;We.prependListener=Ct;We.prependOnceListener=Ct;We.listeners=function(n){return[]};We.binding=function(n){throw new Error("process.binding is not supported")};We.cwd=function(){return"/"};We.chdir=function(n){throw new Error("process.chdir is not supported")};We.umask=function(){return 0}});var d,m,LC,p,r=F(()=>{d=M(xu()),m=M(vu()),LC=function(n){function o(){var c=this||self;return delete n.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return o();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:o});var i=__magic__;return i}(Object),p=LC});var Io,ir=F(()=>{"use strict";r();Io=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var fp={};Ee(fp,{css:()=>Iu,default:()=>kC});var Iu,kC,hp=F(()=>{"use strict";r();Iu=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Iu));kC={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ku=F(()=>{"use strict";r()});var Lt,ot=F(()=>{"use strict";r();Lt="Action not allowed. User is logged in. Call logout() first"});var Pu=F(()=>{"use strict";r()});var xp,Eu=F(()=>{"use strict";r();xp=(c=>(c.SetGuardian="SetGuardian",c.GuardAccount="GuardAccount",c.UnGuardAccount="UnGuardAccount",c))(xp||{})});var yp,Sp,bp,wp,vp,Ap,Nu=F(()=>{"use strict";r();yp="1.0.8",Sp="1.0.11",bp="1.0.15",wp="1.0.17",vp="1.0.22",Ap="1.0.23"});var Ip,Cp=F(()=>{"use strict";r();Ip={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var Ru=F(()=>{"use strict";r()});var Lp=F(()=>{"use strict";r()});var Du=F(()=>{"use strict";r()});var Mu=F(()=>{"use strict";r()});var Jt,sr,Qt=F(()=>{"use strict";r();Jt=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),sr=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Ge,Ou,$D,Bu,zD,Ie=F(()=>{"use strict";r();Qt();Ge=(D=>(D.ledger="ledger",D.walletconnect="walletconnect",D.walletconnectv2="walletconnectv2",D.wallet="wallet",D.crossWindow="crossWindow",D.iframe="iframe",D.extension="extension",D.passkey="passkey",D.metamask="metamask",D.opera="opera",D.extra="extra",D.none="",D))(Ge||{}),Ou=(i=>(i.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",i.reloginRequest="RELOGIN_REQUEST",i))(Ou||{}),$D=E(E({},sr.WindowProviderRequestEnums),Ou),Bu=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Bu||{}),zD=E(E({},sr.WindowProviderResponseEnums),Bu)});var Fu=F(()=>{"use strict";r()});var Wu=F(()=>{"use strict";r()});var hn=F(()=>{"use strict";r()});var Uu=F(()=>{"use strict";r()});var Gu=F(()=>{"use strict";r()});var Hu=F(()=>{"use strict";r()});var Ue=F(()=>{"use strict";r();Lp();Du();Mu();Ie();Fu();Wu();hn();Uu();Gu();Hu()});var cr,$u,s5,zu,c5,Vu,p5,d5,NC,qu,pr=F(()=>{"use strict";r();Ue();cr={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:$u,egldLabel:s5}=cr["devnet"],{chainId:zu,egldLabel:c5}=cr["testnet"],{chainId:Vu,egldLabel:p5}=cr["mainnet"],d5={["devnet"]:$u,["testnet"]:zu,["mainnet"]:Vu},NC={[$u]:"devnet",[zu]:"testnet",[Vu]:"mainnet"},qu="multiversx://"});var Ei=F(()=>{"use strict";r()});var rt,Ku=F(()=>{"use strict";r();rt=require("@multiversx/sdk-web-wallet-provider")});var jn,aa=F(()=>{"use strict";r();jn=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ju,Xu,kp,f5,h5,Pp=F(()=>{"use strict";r();aa();kp=String((Xu=(ju=jn.safeWindow)==null?void 0:ju.navigator)==null?void 0:Xu.userAgent),f5=/^((?!chrome|android).)*safari/i.test(kp),h5=/firefox/i.test(kp)&&/windows/i.test(kp)});var Ni,Ri,kn,Co,Yu,Zu,Di,Ju,at,dr,te=F(()=>{"use strict";r();ku();ot();Pu();Eu();Nu();Cp();Ru();pr();Ei();Ku();Pp();Ni=5e4,Ri=1e9,kn=18,Co=4,Yu=1,Zu=1,Di="logout",Ju="login",at="0",dr="..."});var kt={};Ee(kt,{css:()=>Qu,default:()=>RC});var Qu,RC,Pt=F(()=>{"use strict";r();Qu=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qu));RC={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var lr,Oi=F(()=>{"use strict";r();lr=()=>Date.now()/1e3});var pg=F(()=>{"use strict";r()});var dg=F(()=>{"use strict";r()});var Wp=F(()=>{"use strict";r();Oi();pg();dg()});var Up={};Ee(Up,{clear:()=>HC,getItem:()=>UC,localStorageKeys:()=>no,removeItem:()=>GC,setItem:()=>WC});var no,Bi,WC,UC,GC,HC,_r=F(()=>{"use strict";r();Wp();no={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Bi=typeof localStorage!="undefined",WC=({key:n,data:o,expires:i})=>{!Bi||localStorage.setItem(String(n),JSON.stringify({expires:i,data:o}))},UC=n=>{if(!Bi)return;let o=localStorage.getItem(String(n));if(!o)return null;let i=JSON.parse(o);return!i||!i.hasOwnProperty("expires")||!i.hasOwnProperty("data")?null:lr()>=i.expires?(localStorage.removeItem(String(n)),null):i.data},GC=n=>{!Bi||localStorage.removeItem(String(n))},HC=()=>{!Bi||localStorage.clear()}});var Gp={};Ee(Gp,{clear:()=>ug,getItem:()=>lg,removeItem:()=>_g,setItem:()=>mg,storage:()=>$C});var mg,lg,_g,ug,$C,gg=F(()=>{"use strict";r();mg=({key:n,data:o,expires:i})=>{sessionStorage.setItem(String(n),JSON.stringify({expires:i,data:o}))},lg=n=>{let o=sessionStorage.getItem(String(n));if(!o)return null;let i=JSON.parse(o);return!i||!i.hasOwnProperty("expires")||!i.hasOwnProperty("data")?null:Date.now()>=i.expires?(sessionStorage.removeItem(String(n)),null):i.data},_g=n=>sessionStorage.removeItem(String(n)),ug=()=>sessionStorage.clear(),$C={setItem:mg,getItem:lg,removeItem:_g,clear:ug}});var ko,ur=F(()=>{"use strict";r();_r();gg();ko={session:Gp,local:Up}});var Hp,Ne,pn,Re=F(()=>{"use strict";r();Hp=require("@reduxjs/toolkit");te();Ne=(0,Hp.createAction)(Di),pn=(0,Hp.createAction)(Ju,n=>({payload:n}))});var zp,fg,hg,Fi,$p,Tg,Wi,zC,Vp,NM,qp,xg,RM,DM,MM,VC,qC,Ui,Gi=F(()=>{"use strict";r();zp=require("@multiversx/sdk-core"),fg=require("@reduxjs/toolkit"),hg=require("redux-persist");te();ur();_r();Re();Fi={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:at},$p={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Fi},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Tg=(0,fg.createSlice)({name:"accountInfoSlice",initialState:$p,reducers:{setAddress:(n,o)=>{let i=o.payload;n.address=i,n.publicKey=i?new zp.Address(i).hex():""},setAccount:(n,o)=>{let i=n.address===o.payload.address;n.accounts={[n.address]:i?o.payload:Fi},n.shard=o.payload.shard,n.isAccountLoading=!1,n.accountLoadingError=null},setAccountNonce:(n,o)=>{let{address:i}=n;n.accounts[i].nonce=o.payload},setAccountShard:(n,o)=>{n.shard=o.payload},setLedgerAccount:(n,o)=>{n.ledgerAccount=o.payload},updateLedgerAccount:(n,o)=>{n.ledgerAccount!=null&&(n.ledgerAccount.index=o.payload.index,n.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(n,o)=>{n.walletConnectAccount=o.payload},setIsAccountLoading:(n,o)=>{n.isAccountLoading=o.payload,n.accountLoadingError=null},setAccountLoadingError:(n,o)=>{n.accountLoadingError=o.payload,n.isAccountLoading=!1},setWebsocketEvent:(n,o)=>{n.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(n,o)=>{n.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:n=>{n.addCase(Ne,()=>(ko.local.removeItem(no.loginExpiresAt),$p)),n.addCase(pn,(o,i)=>{let{address:c}=i.payload;o.address=c,o.publicKey=new zp.Address(c).hex()}),n.addCase(hg.REHYDRATE,(o,i)=>{var S;if(!((S=i.payload)!=null&&S.account))return;let{account:c}=i.payload,{address:l,shard:g,accounts:h,publicKey:w}=c;o.address=l,o.shard=g;let x=h&&l in h;o.accounts=x?h:$p.accounts,o.publicKey=w})}}),{setAccount:Wi,setAddress:zC,setAccountNonce:Vp,setAccountShard:NM,setLedgerAccount:qp,updateLedgerAccount:xg,setWalletConnectAccount:RM,setIsAccountLoading:DM,setAccountLoadingError:MM,setWebsocketEvent:VC,setWebsocketBatchEvent:qC}=Tg.actions,Ui=Tg.reducer});function sa(){return new Date().setHours(new Date().getHours()+24)}function ca(n){ko.local.setItem({key:no.loginExpiresAt,data:n,expires:n})}var Kp=F(()=>{"use strict";r();ur();_r()});var Sg,yg,bg,VM,KC,wg,pa,qM,jC,vg,KM,jM,XM,Hi,$i=F(()=>{"use strict";r();Sg=require("@reduxjs/toolkit");Kp();Ie();Re();yg={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},bg=(0,Sg.createSlice)({name:"loginInfoSlice",initialState:yg,reducers:{setLoginMethod:(n,o)=>{n.loginMethod=o.payload},setTokenLogin:(n,o)=>{n.tokenLogin=o.payload},setTokenLoginSignature:(n,o)=>{(n==null?void 0:n.tokenLogin)!=null&&(n.tokenLogin.signature=o.payload)},setWalletLogin:(n,o)=>{n.walletLogin=o.payload},setWalletConnectLogin:(n,o)=>{n.walletConnectLogin=o.payload},setLedgerLogin:(n,o)=>{n.ledgerLogin=o.payload},setWebviewLogin:(n,o)=>{n.webviewLogin=o.payload},invalidateLoginSession:n=>{n.isLoginSessionInvalid=!0},setLogoutRoute:(n,o)=>{n.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(n,o)=>{n.isWalletConnectV2Initialized=o.payload}},extraReducers:n=>{n.addCase(Ne,()=>yg),n.addCase(pn,(o,i)=>{o.isLoginSessionInvalid=!1,o.loginMethod=i.payload.loginMethod,o.iframeLoginType=i.payload.iframeLoginType,ca(sa())})}}),{setLoginMethod:VM,setWalletConnectLogin:KC,setLedgerLogin:wg,setTokenLogin:pa,setTokenLoginSignature:qM,setWalletLogin:jC,invalidateLoginSession:vg,setLogoutRoute:KM,setIsWalletConnectV2Initialized:jM,setWebviewLogin:XM}=bg.actions,Hi=bg.reducer});var Ig,Ag,Cg,QM,XC,e6,YC,zi,Vi=F(()=>{"use strict";r();Ig=require("@reduxjs/toolkit");Re();Ag={},Cg=(0,Ig.createSlice)({name:"modalsSlice",initialState:Ag,reducers:{setTxSubmittedModal:(n,o)=>{n.txSubmittedModal=o.payload},setNotificationModal:(n,o)=>{n.notificationModal=o.payload},clearTxSubmittedModal:n=>{n.txSubmittedModal=void 0},clearNotificationModal:n=>{n.notificationModal=void 0}},extraReducers:n=>{n.addCase(Ne,()=>Ag)}}),{setTxSubmittedModal:QM,setNotificationModal:XC,clearTxSubmittedModal:e6,clearNotificationModal:YC}=Cg.actions,zi=Cg.reducer});var De,Je=F(()=>{"use strict";r();ir();De=()=>{if(!Io())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:i,origin:c,href:l,search:g}}=window;return{pathname:o,hash:i,origin:c,href:l,search:g}}});var Lg=F(()=>{"use strict";r();Je()});var kg=F(()=>{"use strict";r();Qe()});var Pg,Eg=F(()=>{"use strict";r();aa();Pg=n=>{if(!jn.safeWindow.location)return;if(!new URL(jn.safeWindow.location.href).protocol.startsWith("http"))return jn.safeWindow.location.reload();jn.safeWindow.location.assign(n)}});var Qe=F(()=>{"use strict";r();Lg();kg();Je();Eg()});var ZC,qi,da=F(()=>{"use strict";r();Qe();ZC=!1,qi=({timeout:n=0,url:o})=>{ZC||setTimeout(()=>{if(!!window)return Pg(o)},n)}});function Et({callbackRoute:n,onLoginRedirect:o,options:i}){let c=Boolean(n),l=typeof o=="function";if(c&&n!=null){if(l)return o(n,i);qi({url:n,timeout:JC})}}var JC,Ng=F(()=>{"use strict";r();da();JC=200});function Rg(n){return n[Math.floor(Math.random()*n.length)]}var Dg=F(()=>{"use strict";r()});function jp(n){let o=null;if((n==null?void 0:n.statusCode)in Ip){let i=n==null?void 0:n.statusCode,{message:c}=Ip[i];o=nL.includes(i)?Mg:c}return{errorMessage:o,defaultErrorMessage:Mg}}var Mg,QC,eL,nL,Xp=F(()=>{"use strict";r();Cp();Mg="Check if the MultiversX app is open on Ledger",QC=28161,eL=28160,nL=[QC,eL]});var Nt=F(()=>{"use strict";r();Ng();Dg();Xp()});var Og,Bg,Fg,Yp,oL,Wg,P6,E6,rL,Ki,ji=F(()=>{"use strict";r();Og=require("@reduxjs/toolkit"),Bg=M(require("lodash.omit")),Fg=require("redux-persist");Ei();Re();Nt();Yp={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},oL={network:Yp},Wg=(0,Og.createSlice)({name:"appConfig",initialState:oL,reducers:{initializeNetworkConfig:(n,o)=>{let i=Rg(o.payload.walletConnectV2RelayAddresses),c=(0,Bg.default)(o.payload,"walletConnectV2RelayAddresses");n.network=Z(E(E({},n.network),c),{walletConnectV2RelayAddress:i})},updateNetworkConfig:(n,o)=>{n.network=E(E({},n.network),o.payload)},setCustomWalletAddress:(n,o)=>{n.network.customWalletAddress=o.payload}},extraReducers:n=>{n.addCase(Ne,o=>{o.network.customWalletAddress=void 0}),n.addCase(Fg.REHYDRATE,(o,i)=>{var l,g;if(!((g=(l=i.payload)==null?void 0:l.network)!=null&&g.customWalletAddress))return;let{network:{customWalletAddress:c}}=i.payload;o.network.customWalletAddress=c})}}),{initializeNetworkConfig:P6,updateNetworkConfig:E6,setCustomWalletAddress:rL}=Wg.actions,Ki=Wg.reducer});var Ug,Zp,Gg,B6,F6,W6,Xi,Yi=F(()=>{"use strict";r();Ug=require("@reduxjs/toolkit");Ue();Re();Zp={isSigning:!1,signedSessions:{}},Gg=(0,Ug.createSlice)({name:"signedMessageInfoSliceState",initialState:Zp,reducers:{setSignSession:(n,o)=>{let{sessionId:i,signedSession:c,errorMessage:l}=o.payload;l&&(n.errorMessage=l),n.isSigning=c.status==="pending",n.signedSessions[i]=E(E({},n.signedSessions[i]),c)},setSignSessionState:(n,o)=>E(E({},n),o.payload),clearSignedMessageInfo:()=>Zp},extraReducers:n=>{n.addCase(Ne,()=>Zp)}}),{setSignSession:B6,clearSignedMessageInfo:F6,setSignSessionState:W6}=Gg.actions,Xi=Gg.reducer});var $g,zg,Hg,Vg,aL,iL,q6,sL,Zi,Ji=F(()=>{"use strict";r();$g=require("@reduxjs/toolkit"),zg=require("redux-persist");Ue();Oi();Re();Hg={customToasts:[],transactionToasts:[]},Vg=(0,$g.createSlice)({name:"toastsSlice",initialState:Hg,reducers:{addCustomToast:(n,o)=>{let i=o.payload.toastId||`custom-toast-${n.customToasts.length+1}`,c=n.customToasts.findIndex(l=>l.toastId===i);if(c!==-1){n.customToasts[c]=Z(E(E({},n.customToasts[c]),o.payload),{type:"custom",toastId:i});return}n.customToasts.push(Z(E({},o.payload),{type:"custom",toastId:i}))},removeCustomToast:(n,o)=>{n.customToasts=n.customToasts.filter(i=>i.toastId!==o.payload)},addTransactionToast:(n,o)=>{n.transactionToasts.push({type:"transaction",startTimestamp:lr(),toastId:o.payload||`custom-toast-${n.transactionToasts.length+1}`})},removeTransactionToast:(n,o)=>{n.transactionToasts=n.transactionToasts.filter(i=>i.toastId!==o.payload)}},extraReducers:n=>{n.addCase(Ne,()=>Hg),n.addCase(zg.REHYDRATE,(o,i)=>{var l,g;let c=(g=(l=i.customToasts)==null?void 0:l.filter(h=>!("component"in h)))!=null?g:[];o.customToasts=c})}}),{addCustomToast:aL,removeCustomToast:iL,addTransactionToast:q6,removeTransactionToast:sL}=Vg.actions,Zi=Vg.reducer});var qg,Qp,ed,nd,cL,Jp,Kg,Y6,pL,td,Qi,es=F(()=>{"use strict";r();qg=require("@reduxjs/toolkit");Re();Qp="Transaction failed",ed="Transaction successful",nd="Processing transaction",cL="Transaction submitted",Jp={},Kg=(0,qg.createSlice)({name:"transactionsInfo",initialState:Jp,reducers:{setTransactionsDisplayInfo(n,o){let{sessionId:i,transactionsDisplayInfo:c}=o.payload;i!=null&&(n[i]={errorMessage:(c==null?void 0:c.errorMessage)||Qp,successMessage:(c==null?void 0:c.successMessage)||ed,processingMessage:(c==null?void 0:c.processingMessage)||nd,submittedMessage:(c==null?void 0:c.submittedMessage)||cL,transactionDuration:c==null?void 0:c.transactionDuration})},clearTransactionsInfoForSessionId(n,o){o.payload!=null&&delete n[o.payload]},clearTransactionsInfo:()=>Jp},extraReducers:n=>{n.addCase(Ne,()=>Jp)}}),{clearTransactionsInfo:Y6,setTransactionsDisplayInfo:pL,clearTransactionsInfoForSessionId:td}=Kg.actions,Qi=Kg.reducer});function fr(n){return n!=null&&(xL(n)||vL(n))}function hr(n){return n!=null&&(yL(n)||AL(n))}function Tr(n){return n!=null&&(SL(n)||IL(n))}function jg(n){return n!=null&&(bL(n)||CL(n))}function od(n){return n!=null&&wL(n)}function xL(n){return n!=null&&dL.includes(n)}function yL(n){return n!=null&&mL.includes(n)}function SL(n){return n!=null&&lL.includes(n)}function bL(n){return n!=null&&_L.includes(n)}function wL(n){return n!=null&&uL.includes(n)}function vL(n){return n!=null&&gL.includes(n)}function AL(n){return n!=null&&fL.includes(n)}function IL(n){return n!=null&&hL.includes(n)}function CL(n){return n!=null&&TL.includes(n)}var dL,mL,lL,_L,uL,gL,fL,hL,TL,xr=F(()=>{"use strict";r();Ie();dL=["sent"],mL=["success"],lL=["fail","cancelled","timedOut"],_L=["invalid"],uL=["timedOut"],gL=["pending"],fL=["success"],hL=["fail","invalid"],TL=["not executed"]});var Xg,Yg,ma,LL,Zg,Jg,Qg,kL,ns,PL,EL,aO,NL,la,rd,iO,ts,os=F(()=>{"use strict";r();Xg=require("@reduxjs/toolkit"),Yg=require("redux-persist");Ie();xr();Re();ma={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},LL={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Zg=(0,Xg.createSlice)({name:"transactionsSlice",initialState:ma,reducers:{moveTransactionsToSignedState:(n,o)=>{var x,S;let{sessionId:i,transactions:c,errorMessage:l,status:g,redirectRoute:h,customTransactionInformation:w}=o.payload;n.customTransactionInformationForSessionId[i]=E(E(E({},LL),((x=n.signedTransactions[i])==null?void 0:x.customTransactionInformation)||{}),n.customTransactionInformationForSessionId[i]||{}),n.signedTransactions[i]={transactions:c,status:g,errorMessage:l,redirectRoute:h,customTransactionInformation:E(E({},n.customTransactionInformationForSessionId[i]),w!=null?w:{})},((S=n==null?void 0:n.transactionsToSign)==null?void 0:S.sessionId)===i&&(n.transactionsToSign=ma.transactionsToSign)},clearSignedTransaction:(n,o)=>{n.signedTransactions[o.payload]&&delete n.signedTransactions[o.payload]},clearTransactionToSign:n=>{n!=null&&n.transactionsToSign&&(n.transactionsToSign=null)},updateSignedTransaction:(n,o)=>{n.signedTransactions=E(E({},n.signedTransactions),o.payload)},updateSignedTransactions:(n,o)=>{let{sessionId:i,status:c,errorMessage:l,transactions:g}=o.payload;n.signedTransactions[i]!=null&&(n.signedTransactions[i].status=c,l!=null&&(n.signedTransactions[i].errorMessage=l),g!=null&&(n.signedTransactions[i].transactions=g))},updateSignedTransactionStatus:(n,o)=>{var S,N,C,D,H,G,O,X;let{sessionId:i,status:c,errorMessage:l,transactionHash:g,serverTransaction:h,inTransit:w}=o.payload,x=(N=(S=n.signedTransactions)==null?void 0:S[i])==null?void 0:N.transactions;if(x!=null){n.signedTransactions[i].transactions=x.map(Y=>Y.hash===g?Z(E(E({},h!=null?h:{}),Y),{status:c,errorMessage:l,inTransit:w}):Y);let J=(D=(C=n.signedTransactions[i])==null?void 0:C.transactions)==null?void 0:D.every(Y=>hr(Y.status)),ce=(G=(H=n.signedTransactions[i])==null?void 0:H.transactions)==null?void 0:G.some(Y=>Tr(Y.status)),ie=(X=(O=n.signedTransactions[i])==null?void 0:O.transactions)==null?void 0:X.every(Y=>jg(Y.status));J&&(n.signedTransactions[i].status="success"),ce&&(n.signedTransactions[i].status="fail"),ie&&(n.signedTransactions[i].status="invalid")}},setTransactionsToSign:(n,o)=>{n.transactionsToSign=o.payload;let{sessionId:i,customTransactionInformation:c}=o.payload;n.customTransactionInformationForSessionId[i]=c,n.signTransactionsError=null},clearAllTransactionsToSign:n=>{n.transactionsToSign=ma.transactionsToSign,n.signTransactionsError=null},clearAllSignedTransactions:n=>{n.signedTransactions=ma.signedTransactions},setSignTransactionsError:(n,o)=>{n.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(n,o)=>{n.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(n,o)=>{let{sessionId:i,customTransactionInformationOverrides:c}=o.payload;n.signedTransactions[i]!=null&&(n.signedTransactions[i].customTransactionInformation=E(E({},n.signedTransactions[i].customTransactionInformation),c))}},extraReducers:n=>{n.addCase(Ne,()=>ma),n.addCase(Yg.REHYDRATE,(o,i)=>{var h;if(o.signTransactionsCancelMessage=null,!((h=i.payload)!=null&&h.transactions))return;let{signedTransactions:c,customTransactionInformationForSessionId:l}=i.payload.transactions,g=Object.entries(c).reduce((w,[x,S])=>{let N=new Date(x),C=new Date;return C.setHours(C.getHours()+5),C-N>0||(w[x]=S),w},{});l!=null&&(o.customTransactionInformationForSessionId=l),c!=null&&(o.signedTransactions=g)})}}),{updateSignedTransactionStatus:Jg,updateSignedTransactions:Qg,setTransactionsToSign:kL,clearAllTransactionsToSign:ns,clearAllSignedTransactions:PL,clearSignedTransaction:EL,clearTransactionToSign:aO,setSignTransactionsError:NL,setSignTransactionsCancelMessage:la,moveTransactionsToSignedState:rd,updateSignedTransactionsCustomTransactionInformation:iO}=Zg.actions,ts=Zg.reducer});var ef,ad,nf,dO,mO,RL,lO,rs,as=F(()=>{"use strict";r();ef=require("@reduxjs/toolkit");Re();ad={},nf=(0,ef.createSlice)({name:"batchTransactionsSlice",initialState:ad,reducers:{setBatchTransactions:(n,o)=>{n[o.payload.id]=o.payload},updateBatchTransactions:(n,o)=>{n[o.payload.id]=o.payload},clearBatchTransactions:(n,o)=>{delete n[o.payload.batchId]},clearAllBatchTransactions:()=>ad},extraReducers:n=>{n.addCase(Ne,()=>ad)}}),{setBatchTransactions:dO,updateBatchTransactions:mO,clearBatchTransactions:RL,clearAllBatchTransactions:lO}=nf.actions,rs=nf.reducer});var of,tf,rf,fO,af,id=F(()=>{"use strict";r();of=require("@reduxjs/toolkit");Re();tf={},rf=(0,of.createSlice)({name:"dappConfigSlice",initialState:tf,reducers:{setDappConfig:(n,o)=>o.payload},extraReducers:n=>{n.addCase(Ne,()=>tf)}}),{setDappConfig:fO}=rf.actions,af=rf.reducer});var ye=F(()=>{"use strict";r();Gi();$i();Vi();ji();Yi();Ji();es();os();as();id()});var sd=F(()=>{"use strict";r()});var pf,BL,FL,Po,cs=F(()=>{"use strict";r();pf=require("@reduxjs/toolkit");sd();Gi();as();id();$i();Vi();ji();Yi();Ji();es();os();BL={["account"]:Ui,["dappConfig"]:af,["loginInfo"]:Hi,["modals"]:zi,["networkConfig"]:Ki,["signedMessageInfo"]:Xi,["toasts"]:Zi,["transactionsInfo"]:Qi,["transactions"]:ts,["batchTransactions"]:rs},FL=(n={})=>(0,pf.combineReducers)(E(E({},BL),n)),Po=FL});var _f={};Ee(_f,{default:()=>ek,sessionStorageReducers:()=>cd});function Rt(n,o=[]){return{key:n,version:1,storage:mf.default,blacklist:o}}var Tn,df,mf,WL,_a,UL,GL,HL,$L,zL,VL,qL,KL,jL,XL,lf,YL,cd,ZL,JL,QL,ek,uf=F(()=>{"use strict";r();Tn=require("redux-persist"),df=M(require("redux-persist/lib/storage")),mf=M(require("redux-persist/lib/storage/session"));cs();ye();Gi();as();$i();Vi();ji();Yi();Ji();es();os();sd();WL={persistReducersStorageType:"localStorage"},_a={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},UL=Rt(_a["account"]),GL=Rt(_a["loginInfo"]),HL=Rt(_a["modals"]),$L=Rt(_a["networkConfig"]),zL={2:n=>Z(E({},n),{networkConfig:Yp})};VL=Rt("sdk-dapp-transactionsInfo"),qL=Rt("sdk-dapp-transactions",["transactionsToSign"]),KL=Rt("sdk-dapp-batchTransactions",["batchTransactions"]),jL=Rt("sdk-dapp-toasts"),XL=Rt("sdk-dapp-signedMessageInfo"),lf={key:"sdk-dapp-store",version:2,storage:df.default,whitelist:Object.keys(_a),migrate:(0,Tn.createMigrate)(zL,{debug:!1})},YL=Z(E({},lf),{whitelist:[]}),cd={["toasts"]:(0,Tn.persistReducer)(jL,Zi),["transactions"]:(0,Tn.persistReducer)(qL,ts),["transactionsInfo"]:(0,Tn.persistReducer)(VL,Qi),["batchTransactions"]:(0,Tn.persistReducer)(KL,rs),["signedMessageInfo"]:(0,Tn.persistReducer)(XL,Xi)},ZL=Z(E({},cd),{["account"]:(0,Tn.persistReducer)(UL,Ui),["loginInfo"]:(0,Tn.persistReducer)(GL,Hi),["modals"]:(0,Tn.persistReducer)(HL,zi),["networkConfig"]:(0,Tn.persistReducer)($L,Ki)}),JL=WL.persistReducersStorageType==="localStorage",QL=JL?(0,Tn.persistReducer)(lf,Po(cd)):(0,Tn.persistReducer)(YL,Po(ZL)),ek=QL});var gf={};Ee(gf,{default:()=>nk});var nk,ff=F(()=>{"use strict";r();cs();nk=Po()});var hf={};Ee(hf,{default:()=>ok});var Gn,tk,ok,Tf=F(()=>{"use strict";r();Gn=require("redux-persist"),tk=[Gn.FLUSH,Gn.REHYDRATE,Gn.PAUSE,Gn.PERSIST,Gn.PURGE,Gn.REGISTER],ok=tk});var Sf={};Ee(Sf,{default:()=>yf});function yf(n){return(0,xf.persistStore)(n)}var xf,bf=F(()=>{"use strict";r();xf=require("redux-persist")});var xh=W((aK,Th)=>{r();var ZP=typeof p=="object"&&p&&p.Object===Object&&p;Th.exports=ZP});var Sa=W((iK,yh)=>{r();var JP=xh(),QP=typeof self=="object"&&self&&self.Object===Object&&self,eE=JP||QP||Function("return this")();yh.exports=eE});var wd=W((sK,Sh)=>{r();var nE=Sa(),tE=nE.Symbol;Sh.exports=tE});var Ah=W((cK,vh)=>{r();var bh=wd(),wh=Object.prototype,oE=wh.hasOwnProperty,rE=wh.toString,ba=bh?bh.toStringTag:void 0;function aE(n){var o=oE.call(n,ba),i=n[ba];try{n[ba]=void 0;var c=!0}catch(g){}var l=rE.call(n);return c&&(o?n[ba]=i:delete n[ba]),l}vh.exports=aE});var Ch=W((pK,Ih)=>{r();var iE=Object.prototype,sE=iE.toString;function cE(n){return sE.call(n)}Ih.exports=cE});var bs=W((dK,Ph)=>{r();var Lh=wd(),pE=Ah(),dE=Ch(),mE="[object Null]",lE="[object Undefined]",kh=Lh?Lh.toStringTag:void 0;function _E(n){return n==null?n===void 0?lE:mE:kh&&kh in Object(n)?pE(n):dE(n)}Ph.exports=_E});var Nh=W((mK,Eh)=>{r();var uE=Array.isArray;Eh.exports=uE});var vd=W((lK,Rh)=>{r();function gE(n){return n!=null&&typeof n=="object"}Rh.exports=gE});var Mh=W((_K,Dh)=>{r();var fE=bs(),hE=Nh(),TE=vd(),xE="[object String]";function yE(n){return typeof n=="string"||!hE(n)&&TE(n)&&fE(n)==xE}Dh.exports=yE});var wr=W((cX,zh)=>{r();function ME(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}zh.exports=ME});var kd=W((pX,Vh)=>{r();var OE=bs(),BE=wr(),FE="[object AsyncFunction]",WE="[object Function]",UE="[object GeneratorFunction]",GE="[object Proxy]";function HE(n){if(!BE(n))return!1;var o=OE(n);return o==WE||o==UE||o==FE||o==GE}Vh.exports=HE});var Kh=W((dX,qh)=>{r();var $E=Sa(),zE=$E["__core-js_shared__"];qh.exports=zE});var Yh=W((mX,Xh)=>{r();var Pd=Kh(),jh=function(){var n=/[^.]+$/.exec(Pd&&Pd.keys&&Pd.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function VE(n){return!!jh&&jh in n}Xh.exports=VE});var Jh=W((lX,Zh)=>{r();var qE=Function.prototype,KE=qE.toString;function jE(n){if(n!=null){try{return KE.call(n)}catch(o){}try{return n+""}catch(o){}}return""}Zh.exports=jE});var eT=W((_X,Qh)=>{r();var XE=kd(),YE=Yh(),ZE=wr(),JE=Jh(),QE=/[\\^$.*+?()[\]{}|]/g,e2=/^\[object .+?Constructor\]$/,n2=Function.prototype,t2=Object.prototype,o2=n2.toString,r2=t2.hasOwnProperty,a2=RegExp("^"+o2.call(r2).replace(QE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function i2(n){if(!ZE(n)||YE(n))return!1;var o=XE(n)?a2:e2;return o.test(JE(n))}Qh.exports=i2});var tT=W((uX,nT)=>{r();function s2(n,o){return n==null?void 0:n[o]}nT.exports=s2});var Is=W((gX,oT)=>{r();var c2=eT(),p2=tT();function d2(n,o){var i=p2(n,o);return c2(i)?i:void 0}oT.exports=d2});var Aa=W((fX,rT)=>{r();var m2=Is(),l2=m2(Object,"create");rT.exports=l2});var sT=W((hX,iT)=>{r();var aT=Aa();function _2(){this.__data__=aT?aT(null):{},this.size=0}iT.exports=_2});var pT=W((TX,cT)=>{r();function u2(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}cT.exports=u2});var mT=W((xX,dT)=>{r();var g2=Aa(),f2="__lodash_hash_undefined__",h2=Object.prototype,T2=h2.hasOwnProperty;function x2(n){var o=this.__data__;if(g2){var i=o[n];return i===f2?void 0:i}return T2.call(o,n)?o[n]:void 0}dT.exports=x2});var _T=W((yX,lT)=>{r();var y2=Aa(),S2=Object.prototype,b2=S2.hasOwnProperty;function w2(n){var o=this.__data__;return y2?o[n]!==void 0:b2.call(o,n)}lT.exports=w2});var gT=W((SX,uT)=>{r();var v2=Aa(),A2="__lodash_hash_undefined__";function I2(n,o){var i=this.__data__;return this.size+=this.has(n)?0:1,i[n]=v2&&o===void 0?A2:o,this}uT.exports=I2});var hT=W((bX,fT)=>{r();var C2=sT(),L2=pT(),k2=mT(),P2=_T(),E2=gT();function vr(n){var o=-1,i=n==null?0:n.length;for(this.clear();++o<i;){var c=n[o];this.set(c[0],c[1])}}vr.prototype.clear=C2;vr.prototype.delete=L2;vr.prototype.get=k2;vr.prototype.has=P2;vr.prototype.set=E2;fT.exports=vr});var xT=W((wX,TT)=>{r();function N2(){this.__data__=[],this.size=0}TT.exports=N2});var Ed=W((vX,yT)=>{r();function R2(n,o){return n===o||n!==n&&o!==o}yT.exports=R2});var Ia=W((AX,ST)=>{r();var D2=Ed();function M2(n,o){for(var i=n.length;i--;)if(D2(n[i][0],o))return i;return-1}ST.exports=M2});var wT=W((IX,bT)=>{r();var O2=Ia(),B2=Array.prototype,F2=B2.splice;function W2(n){var o=this.__data__,i=O2(o,n);if(i<0)return!1;var c=o.length-1;return i==c?o.pop():F2.call(o,i,1),--this.size,!0}bT.exports=W2});var AT=W((CX,vT)=>{r();var U2=Ia();function G2(n){var o=this.__data__,i=U2(o,n);return i<0?void 0:o[i][1]}vT.exports=G2});var CT=W((LX,IT)=>{r();var H2=Ia();function $2(n){return H2(this.__data__,n)>-1}IT.exports=$2});var kT=W((kX,LT)=>{r();var z2=Ia();function V2(n,o){var i=this.__data__,c=z2(i,n);return c<0?(++this.size,i.push([n,o])):i[c][1]=o,this}LT.exports=V2});var ET=W((PX,PT)=>{r();var q2=xT(),K2=wT(),j2=AT(),X2=CT(),Y2=kT();function Ar(n){var o=-1,i=n==null?0:n.length;for(this.clear();++o<i;){var c=n[o];this.set(c[0],c[1])}}Ar.prototype.clear=q2;Ar.prototype.delete=K2;Ar.prototype.get=j2;Ar.prototype.has=X2;Ar.prototype.set=Y2;PT.exports=Ar});var RT=W((EX,NT)=>{r();var Z2=Is(),J2=Sa(),Q2=Z2(J2,"Map");NT.exports=Q2});var OT=W((NX,MT)=>{r();var DT=hT(),eN=ET(),nN=RT();function tN(){this.size=0,this.__data__={hash:new DT,map:new(nN||eN),string:new DT}}MT.exports=tN});var FT=W((RX,BT)=>{r();function oN(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}BT.exports=oN});var Ca=W((DX,WT)=>{r();var rN=FT();function aN(n,o){var i=n.__data__;return rN(o)?i[typeof o=="string"?"string":"hash"]:i.map}WT.exports=aN});var GT=W((MX,UT)=>{r();var iN=Ca();function sN(n){var o=iN(this,n).delete(n);return this.size-=o?1:0,o}UT.exports=sN});var $T=W((OX,HT)=>{r();var cN=Ca();function pN(n){return cN(this,n).get(n)}HT.exports=pN});var VT=W((BX,zT)=>{r();var dN=Ca();function mN(n){return dN(this,n).has(n)}zT.exports=mN});var KT=W((FX,qT)=>{r();var lN=Ca();function _N(n,o){var i=lN(this,n),c=i.size;return i.set(n,o),this.size+=i.size==c?0:1,this}qT.exports=_N});var XT=W((WX,jT)=>{r();var uN=OT(),gN=GT(),fN=$T(),hN=VT(),TN=KT();function Ir(n){var o=-1,i=n==null?0:n.length;for(this.clear();++o<i;){var c=n[o];this.set(c[0],c[1])}}Ir.prototype.clear=uN;Ir.prototype.delete=gN;Ir.prototype.get=fN;Ir.prototype.has=hN;Ir.prototype.set=TN;jT.exports=Ir});var ZT=W((UX,YT)=>{r();var xN="__lodash_hash_undefined__";function yN(n){return this.__data__.set(n,xN),this}YT.exports=yN});var QT=W((GX,JT)=>{r();function SN(n){return this.__data__.has(n)}JT.exports=SN});var nx=W((HX,ex)=>{r();var bN=XT(),wN=ZT(),vN=QT();function Cs(n){var o=-1,i=n==null?0:n.length;for(this.__data__=new bN;++o<i;)this.add(n[o])}Cs.prototype.add=Cs.prototype.push=wN;Cs.prototype.has=vN;ex.exports=Cs});var ox=W(($X,tx)=>{r();function AN(n,o,i,c){for(var l=n.length,g=i+(c?1:-1);c?g--:++g<l;)if(o(n[g],g,n))return g;return-1}tx.exports=AN});var ax=W((zX,rx)=>{r();function IN(n){return n!==n}rx.exports=IN});var sx=W((VX,ix)=>{r();function CN(n,o,i){for(var c=i-1,l=n.length;++c<l;)if(n[c]===o)return c;return-1}ix.exports=CN});var px=W((qX,cx)=>{r();var LN=ox(),kN=ax(),PN=sx();function EN(n,o,i){return o===o?PN(n,o,i):LN(n,kN,i)}cx.exports=EN});var mx=W((KX,dx)=>{r();var NN=px();function RN(n,o){var i=n==null?0:n.length;return!!i&&NN(n,o,0)>-1}dx.exports=RN});var _x=W((jX,lx)=>{r();function DN(n,o,i){for(var c=-1,l=n==null?0:n.length;++c<l;)if(i(o,n[c]))return!0;return!1}lx.exports=DN});var gx=W((XX,ux)=>{r();function MN(n,o){return n.has(o)}ux.exports=MN});var hx=W((YX,fx)=>{r();var ON=Is(),BN=Sa(),FN=ON(BN,"Set");fx.exports=FN});var xx=W((ZX,Tx)=>{r();function WN(){}Tx.exports=WN});var Nd=W((JX,yx)=>{r();function UN(n){var o=-1,i=Array(n.size);return n.forEach(function(c){i[++o]=c}),i}yx.exports=UN});var bx=W((QX,Sx)=>{r();var Rd=hx(),GN=xx(),HN=Nd(),$N=1/0,zN=Rd&&1/HN(new Rd([,-0]))[1]==$N?function(n){return new Rd(n)}:GN;Sx.exports=zN});var vx=W((eY,wx)=>{r();var VN=nx(),qN=mx(),KN=_x(),jN=gx(),XN=bx(),YN=Nd(),ZN=200;function JN(n,o,i){var c=-1,l=qN,g=n.length,h=!0,w=[],x=w;if(i)h=!1,l=KN;else if(g>=ZN){var S=o?null:XN(n);if(S)return YN(S);h=!1,l=jN,x=new VN}else x=o?[]:w;e:for(;++c<g;){var N=n[c],C=o?o(N):N;if(N=i||N!==0?N:0,h&&C===C){for(var D=x.length;D--;)if(x[D]===C)continue e;o&&x.push(C),w.push(N)}else l(x,C,i)||(x!==w&&x.push(C),w.push(N))}return w}wx.exports=JN});var Ix=W((nY,Ax)=>{r();var QN=vx();function eR(n){return n&&n.length?QN(n):[]}Ax.exports=eR});var Ud={};Ee(Ud,{css:()=>Hx,default:()=>jR});var Hx,jR,Gd=F(()=>{"use strict";r();Hx=`.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hx));jR={"pagination-edge-button":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",inactive:"dapp-core-component__paginationEdgeButtonStyles__inactive","pagination-edge-button-icon":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon",paginationEdgeButtonIcon:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon","pagination-edge-button-text":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",paginationEdgeButtonText:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",show:"dapp-core-component__paginationEdgeButtonStyles__show"}});var Vx=W((Nie,zx)=>{r();var YR=Math.max,ZR=Math.min;function JR(n,o,i){return n>=ZR(o,i)&&n<YR(o,i)}zx.exports=JR});var Kx=W((Rie,qx)=>{r();var QR=/\s/;function e3(n){for(var o=n.length;o--&&QR.test(n.charAt(o)););return o}qx.exports=e3});var Xx=W((Die,jx)=>{r();var n3=Kx(),t3=/^\s+/;function o3(n){return n&&n.slice(0,n3(n)+1).replace(t3,"")}jx.exports=o3});var Zx=W((Mie,Yx)=>{r();var r3=bs(),a3=vd(),i3="[object Symbol]";function s3(n){return typeof n=="symbol"||a3(n)&&r3(n)==i3}Yx.exports=s3});var zd=W((Oie,ey)=>{r();var c3=Xx(),Jx=wr(),p3=Zx(),Qx=0/0,d3=/^[-+]0x[0-9a-f]+$/i,m3=/^0b[01]+$/i,l3=/^0o[0-7]+$/i,_3=parseInt;function u3(n){if(typeof n=="number")return n;if(p3(n))return Qx;if(Jx(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=Jx(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=c3(n);var i=m3.test(n);return i||l3.test(n)?_3(n.slice(2),i?2:8):d3.test(n)?Qx:+n}ey.exports=u3});var Vd=W((Bie,ty)=>{r();var g3=zd(),ny=1/0,f3=17976931348623157e292;function h3(n){if(!n)return n===0?n:0;if(n=g3(n),n===ny||n===-ny){var o=n<0?-1:1;return o*f3}return n===n?n:0}ty.exports=h3});var ay=W((Fie,ry)=>{r();var T3=Vx(),oy=Vd(),x3=zd();function y3(n,o,i){return o=oy(o),i===void 0?(i=o,o=0):i=oy(i),n=x3(n),T3(n,o,i)}ry.exports=y3});var sy=W((Wie,iy)=>{r();var S3=Math.ceil,b3=Math.max;function w3(n,o,i,c){for(var l=-1,g=b3(S3((o-n)/(i||1)),0),h=Array(g);g--;)h[c?g:++l]=n,n+=i;return h}iy.exports=w3});var py=W((Uie,cy)=>{r();var v3=9007199254740991;function A3(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=v3}cy.exports=A3});var my=W((Gie,dy)=>{r();var I3=kd(),C3=py();function L3(n){return n!=null&&C3(n.length)&&!I3(n)}dy.exports=L3});var _y=W((Hie,ly)=>{r();var k3=9007199254740991,P3=/^(?:0|[1-9]\d*)$/;function E3(n,o){var i=typeof n;return o=o==null?k3:o,!!o&&(i=="number"||i!="symbol"&&P3.test(n))&&n>-1&&n%1==0&&n<o}ly.exports=E3});var gy=W(($ie,uy)=>{r();var N3=Ed(),R3=my(),D3=_y(),M3=wr();function O3(n,o,i){if(!M3(i))return!1;var c=typeof o;return(c=="number"?R3(i)&&D3(o,i.length):c=="string"&&o in i)?N3(i[o],n):!1}uy.exports=O3});var hy=W((zie,fy)=>{r();var B3=sy(),F3=gy(),qd=Vd();function W3(n){return function(o,i,c){return c&&typeof c!="number"&&F3(o,i,c)&&(i=c=void 0),o=qd(o),i===void 0?(i=o,o=0):i=qd(i),c=c===void 0?o<i?1:-1:qd(c),B3(o,i,c,n)}}fy.exports=W3});var xy=W((Vie,Ty)=>{r();var U3=hy(),G3=U3();Ty.exports=G3});var Xd={};Ee(Xd,{css:()=>wy,default:()=>H3});var wy,H3,Yd=F(()=>{"use strict";r();wy=`.dapp-core-component__paginationStyles__pagination {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wy));H3={pagination:"dapp-core-component__paginationStyles__pagination","pagination-angle":"dapp-core-component__paginationStyles__pagination-angle",paginationAngle:"dapp-core-component__paginationStyles__pagination-angle",disabled:"dapp-core-component__paginationStyles__disabled","pagination-angle-icon":"dapp-core-component__paginationStyles__pagination-angle-icon",paginationAngleIcon:"dapp-core-component__paginationStyles__pagination-angle-icon","pagination-edge-button":"dapp-core-component__paginationStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationStyles__pagination-edge-button",reversed:"dapp-core-component__paginationStyles__reversed","pagination-items":"dapp-core-component__paginationStyles__pagination-items",paginationItems:"dapp-core-component__paginationStyles__pagination-items","pagination-item-wrapper":"dapp-core-component__paginationStyles__pagination-item-wrapper",paginationItemWrapper:"dapp-core-component__paginationStyles__pagination-item-wrapper","pagination-item":"dapp-core-component__paginationStyles__pagination-item",paginationItem:"dapp-core-component__paginationStyles__pagination-item",hundreds:"dapp-core-component__paginationStyles__hundreds",active:"dapp-core-component__paginationStyles__active",ellipsis:"dapp-core-component__paginationStyles__ellipsis","pagination-item-text":"dapp-core-component__paginationStyles__pagination-item-text",paginationItemText:"dapp-core-component__paginationStyles__pagination-item-text"}});var Jd={};Ee(Jd,{css:()=>Ay,default:()=>z3});var Ay,z3,Qd=F(()=>{"use strict";r();Ay=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ay));z3={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var em={};Ee(em,{css:()=>Ly,default:()=>X3});var Ly,X3,nm=F(()=>{"use strict";r();Ly=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ly));X3={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var tm={};Ee(tm,{css:()=>Ey,default:()=>Z3});var Ey,Z3,om=F(()=>{"use strict";r();Ey=`.dapp-core-component__addressRowStyles__ledger-address-table-body-item {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ey));Z3={"ledger-address-table-body-item":"dapp-core-component__addressRowStyles__ledger-address-table-body-item",ledgerAddressTableBodyItem:"dapp-core-component__addressRowStyles__ledger-address-table-body-item","ledger-address-table-body-item-selected":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected",ledgerAddressTableBodyItemSelected:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected","ledger-address-table-body-item-data":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data",ledgerAddressTableBodyItemData:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data","ledger-address-table-body-item-data-input":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input",ledgerAddressTableBodyItemDataInput:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input","ledger-address-table-body-item-data-label":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label",ledgerAddressTableBodyItemDataLabel:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label","ledger-address-table-body-item-data-value":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value",ledgerAddressTableBodyItemDataValue:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value"}});var am={};Ee(am,{css:()=>Ry,default:()=>Q3});var Ry,Q3,im=F(()=>{"use strict";r();Ry=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ry));Q3={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var sm={};Ee(sm,{css:()=>Oy,default:()=>nD});var Oy,nD,cm=F(()=>{"use strict";r();Oy=`.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Oy));nD={"ledger-loading-wrapper":"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper",ledgerLoadingWrapper:"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper","ledger-loading-heading":"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading",ledgerLoadingHeading:"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading","ledger-loading-description":"dapp-core-component__ledgerLoadingStyles__ledger-loading-description",ledgerLoadingDescription:"dapp-core-component__ledgerLoadingStyles__ledger-loading-description","ledger-loading-spinner":"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner",ledgerLoadingSpinner:"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner"}});var pm={};Ee(pm,{css:()=>Fy,default:()=>oD});var Fy,oD,dm=F(()=>{"use strict";r();Fy=`.dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fy));oD={"ledger-address-table-wrapper":"dapp-core-component__addressTableStyles__ledger-address-table-wrapper",ledgerAddressTableWrapper:"dapp-core-component__addressTableStyles__ledger-address-table-wrapper","ledger-address-table-heading":"dapp-core-component__addressTableStyles__ledger-address-table-heading",ledgerAddressTableHeading:"dapp-core-component__addressTableStyles__ledger-address-table-heading","ledger-address-table-description":"dapp-core-component__addressTableStyles__ledger-address-table-description",ledgerAddressTableDescription:"dapp-core-component__addressTableStyles__ledger-address-table-description","ledger-address-table":"dapp-core-component__addressTableStyles__ledger-address-table",ledgerAddressTable:"dapp-core-component__addressTableStyles__ledger-address-table","ledger-address-table-header":"dapp-core-component__addressTableStyles__ledger-address-table-header",ledgerAddressTableHeader:"dapp-core-component__addressTableStyles__ledger-address-table-header","ledger-address-table-header-item":"dapp-core-component__addressTableStyles__ledger-address-table-header-item",ledgerAddressTableHeaderItem:"dapp-core-component__addressTableStyles__ledger-address-table-header-item","ledger-address-table-body":"dapp-core-component__addressTableStyles__ledger-address-table-body",ledgerAddressTableBody:"dapp-core-component__addressTableStyles__ledger-address-table-body","ledger-address-table-pagination":"dapp-core-component__addressTableStyles__ledger-address-table-pagination",ledgerAddressTablePagination:"dapp-core-component__addressTableStyles__ledger-address-table-pagination","ledger-address-table-button":"dapp-core-component__addressTableStyles__ledger-address-table-button",ledgerAddressTableButton:"dapp-core-component__addressTableStyles__ledger-address-table-button"}});var Gy=W((Rr,Ra)=>{r();(function(){var n,o="4.17.21",i=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",g="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",w=500,x="__lodash_placeholder__",S=1,N=2,C=4,D=1,H=2,G=1,O=2,X=4,J=8,ce=16,ie=32,Y=64,Q=128,ke=256,Sn=512,rn=30,bn="...",_t=800,lo=16,ut=1,Wo=2,Uo=3,Te=1/0,ve=9007199254740991,Me=17976931348623157e292,dn=0/0,mn=4294967295,Ms=mn-1,Os=mn>>>1,Ma=[["ary",Q],["bind",G],["bindKey",O],["curry",J],["curryRight",ce],["flip",Sn],["partial",ie],["partialRight",Y],["rearg",ke]],Ut="[object Arguments]",Go="[object Array]",Or="[object AsyncFunction]",fe="[object Boolean]",Se="[object Date]",Oe="[object DOMException]",Gt="[object Error]",Ho="[object Function]",Oa="[object GeneratorFunction]",Hn="[object Map]",Br="[object Number]",s0="[object Null]",gt="[object Object]",vm="[object Promise]",c0="[object Proxy]",Fr="[object RegExp]",$n="[object Set]",Wr="[object String]",Ba="[object Symbol]",p0="[object Undefined]",Ur="[object WeakMap]",d0="[object WeakSet]",Gr="[object ArrayBuffer]",$o="[object DataView]",Bs="[object Float32Array]",Fs="[object Float64Array]",Ws="[object Int8Array]",Us="[object Int16Array]",Gs="[object Int32Array]",Hs="[object Uint8Array]",$s="[object Uint8ClampedArray]",zs="[object Uint16Array]",Vs="[object Uint32Array]",m0=/\b__p \+= '';/g,l0=/\b(__p \+=) '' \+/g,_0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Am=/&(?:amp|lt|gt|quot|#39);/g,Im=/[&<>"']/g,u0=RegExp(Am.source),g0=RegExp(Im.source),f0=/<%-([\s\S]+?)%>/g,h0=/<%([\s\S]+?)%>/g,Cm=/<%=([\s\S]+?)%>/g,T0=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x0=/^\w*$/,y0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qs=/[\\^$.*+?()[\]{}|]/g,S0=RegExp(qs.source),Ks=/^\s+/,b0=/\s/,w0=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,v0=/\{\n\/\* \[wrapped with (.+)\] \*/,A0=/,? & /,I0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,C0=/[()=,{}\[\]\/\s]/,L0=/\\(\\)?/g,k0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Lm=/\w*$/,P0=/^[-+]0x[0-9a-f]+$/i,E0=/^0b[01]+$/i,N0=/^\[object .+?Constructor\]$/,R0=/^0o[0-7]+$/i,D0=/^(?:0|[1-9]\d*)$/,M0=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fa=/($^)/,O0=/['\n\r\u2028\u2029\\]/g,Wa="\\ud800-\\udfff",B0="\\u0300-\\u036f",F0="\\ufe20-\\ufe2f",W0="\\u20d0-\\u20ff",km=B0+F0+W0,Pm="\\u2700-\\u27bf",Em="a-z\\xdf-\\xf6\\xf8-\\xff",U0="\\xac\\xb1\\xd7\\xf7",G0="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",H0="\\u2000-\\u206f",$0=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nm="A-Z\\xc0-\\xd6\\xd8-\\xde",Rm="\\ufe0e\\ufe0f",Dm=U0+G0+H0+$0,js="['\u2019]",z0="["+Wa+"]",Mm="["+Dm+"]",Ua="["+km+"]",Om="\\d+",V0="["+Pm+"]",Bm="["+Em+"]",Fm="[^"+Wa+Dm+Om+Pm+Em+Nm+"]",Xs="\\ud83c[\\udffb-\\udfff]",q0="(?:"+Ua+"|"+Xs+")",Wm="[^"+Wa+"]",Ys="(?:\\ud83c[\\udde6-\\uddff]){2}",Zs="[\\ud800-\\udbff][\\udc00-\\udfff]",zo="["+Nm+"]",Um="\\u200d",Gm="(?:"+Bm+"|"+Fm+")",K0="(?:"+zo+"|"+Fm+")",Hm="(?:"+js+"(?:d|ll|m|re|s|t|ve))?",$m="(?:"+js+"(?:D|LL|M|RE|S|T|VE))?",zm=q0+"?",Vm="["+Rm+"]?",j0="(?:"+Um+"(?:"+[Wm,Ys,Zs].join("|")+")"+Vm+zm+")*",X0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Y0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qm=Vm+zm+j0,Z0="(?:"+[V0,Ys,Zs].join("|")+")"+qm,J0="(?:"+[Wm+Ua+"?",Ua,Ys,Zs,z0].join("|")+")",Q0=RegExp(js,"g"),eS=RegExp(Ua,"g"),Js=RegExp(Xs+"(?="+Xs+")|"+J0+qm,"g"),nS=RegExp([zo+"?"+Bm+"+"+Hm+"(?="+[Mm,zo,"$"].join("|")+")",K0+"+"+$m+"(?="+[Mm,zo+Gm,"$"].join("|")+")",zo+"?"+Gm+"+"+Hm,zo+"+"+$m,Y0,X0,Om,Z0].join("|"),"g"),tS=RegExp("["+Um+Wa+km+Rm+"]"),oS=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rS=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],aS=-1,we={};we[Bs]=we[Fs]=we[Ws]=we[Us]=we[Gs]=we[Hs]=we[$s]=we[zs]=we[Vs]=!0,we[Ut]=we[Go]=we[Gr]=we[fe]=we[$o]=we[Se]=we[Gt]=we[Ho]=we[Hn]=we[Br]=we[gt]=we[Fr]=we[$n]=we[Wr]=we[Ur]=!1;var be={};be[Ut]=be[Go]=be[Gr]=be[$o]=be[fe]=be[Se]=be[Bs]=be[Fs]=be[Ws]=be[Us]=be[Gs]=be[Hn]=be[Br]=be[gt]=be[Fr]=be[$n]=be[Wr]=be[Ba]=be[Hs]=be[$s]=be[zs]=be[Vs]=!0,be[Gt]=be[Ho]=be[Ur]=!1;var iS={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},sS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cS={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pS={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dS=parseFloat,mS=parseInt,Km=typeof p=="object"&&p&&p.Object===Object&&p,lS=typeof self=="object"&&self&&self.Object===Object&&self,qe=Km||lS||Function("return this")(),Qs=typeof Rr=="object"&&Rr&&!Rr.nodeType&&Rr,_o=Qs&&typeof Ra=="object"&&Ra&&!Ra.nodeType&&Ra,jm=_o&&_o.exports===Qs,ec=jm&&Km.process,Nn=function(){try{var b=_o&&_o.require&&_o.require("util").types;return b||ec&&ec.binding&&ec.binding("util")}catch(I){}}(),Xm=Nn&&Nn.isArrayBuffer,Ym=Nn&&Nn.isDate,Zm=Nn&&Nn.isMap,Jm=Nn&&Nn.isRegExp,Qm=Nn&&Nn.isSet,el=Nn&&Nn.isTypedArray;function wn(b,I,A){switch(A.length){case 0:return b.call(I);case 1:return b.call(I,A[0]);case 2:return b.call(I,A[0],A[1]);case 3:return b.call(I,A[0],A[1],A[2])}return b.apply(I,A)}function _S(b,I,A,$){for(var ee=-1,ue=b==null?0:b.length;++ee<ue;){var $e=b[ee];I($,$e,A($e),b)}return $}function Rn(b,I){for(var A=-1,$=b==null?0:b.length;++A<$&&I(b[A],A,b)!==!1;);return b}function uS(b,I){for(var A=b==null?0:b.length;A--&&I(b[A],A,b)!==!1;);return b}function nl(b,I){for(var A=-1,$=b==null?0:b.length;++A<$;)if(!I(b[A],A,b))return!1;return!0}function Ht(b,I){for(var A=-1,$=b==null?0:b.length,ee=0,ue=[];++A<$;){var $e=b[A];I($e,A,b)&&(ue[ee++]=$e)}return ue}function Ga(b,I){var A=b==null?0:b.length;return!!A&&Vo(b,I,0)>-1}function nc(b,I,A){for(var $=-1,ee=b==null?0:b.length;++$<ee;)if(A(I,b[$]))return!0;return!1}function Ae(b,I){for(var A=-1,$=b==null?0:b.length,ee=Array($);++A<$;)ee[A]=I(b[A],A,b);return ee}function $t(b,I){for(var A=-1,$=I.length,ee=b.length;++A<$;)b[ee+A]=I[A];return b}function tc(b,I,A,$){var ee=-1,ue=b==null?0:b.length;for($&&ue&&(A=b[++ee]);++ee<ue;)A=I(A,b[ee],ee,b);return A}function gS(b,I,A,$){var ee=b==null?0:b.length;for($&&ee&&(A=b[--ee]);ee--;)A=I(A,b[ee],ee,b);return A}function oc(b,I){for(var A=-1,$=b==null?0:b.length;++A<$;)if(I(b[A],A,b))return!0;return!1}var fS=rc("length");function hS(b){return b.split("")}function TS(b){return b.match(I0)||[]}function tl(b,I,A){var $;return A(b,function(ee,ue,$e){if(I(ee,ue,$e))return $=ue,!1}),$}function Ha(b,I,A,$){for(var ee=b.length,ue=A+($?1:-1);$?ue--:++ue<ee;)if(I(b[ue],ue,b))return ue;return-1}function Vo(b,I,A){return I===I?PS(b,I,A):Ha(b,ol,A)}function xS(b,I,A,$){for(var ee=A-1,ue=b.length;++ee<ue;)if($(b[ee],I))return ee;return-1}function ol(b){return b!==b}function rl(b,I){var A=b==null?0:b.length;return A?ic(b,I)/A:dn}function rc(b){return function(I){return I==null?n:I[b]}}function ac(b){return function(I){return b==null?n:b[I]}}function al(b,I,A,$,ee){return ee(b,function(ue,$e,xe){A=$?($=!1,ue):I(A,ue,$e,xe)}),A}function yS(b,I){var A=b.length;for(b.sort(I);A--;)b[A]=b[A].value;return b}function ic(b,I){for(var A,$=-1,ee=b.length;++$<ee;){var ue=I(b[$]);ue!==n&&(A=A===n?ue:A+ue)}return A}function sc(b,I){for(var A=-1,$=Array(b);++A<b;)$[A]=I(A);return $}function SS(b,I){return Ae(I,function(A){return[A,b[A]]})}function il(b){return b&&b.slice(0,dl(b)+1).replace(Ks,"")}function vn(b){return function(I){return b(I)}}function cc(b,I){return Ae(I,function(A){return b[A]})}function Hr(b,I){return b.has(I)}function sl(b,I){for(var A=-1,$=b.length;++A<$&&Vo(I,b[A],0)>-1;);return A}function cl(b,I){for(var A=b.length;A--&&Vo(I,b[A],0)>-1;);return A}function bS(b,I){for(var A=b.length,$=0;A--;)b[A]===I&&++$;return $}var wS=ac(iS),vS=ac(sS);function AS(b){return"\\"+pS[b]}function IS(b,I){return b==null?n:b[I]}function qo(b){return tS.test(b)}function CS(b){return oS.test(b)}function LS(b){for(var I,A=[];!(I=b.next()).done;)A.push(I.value);return A}function pc(b){var I=-1,A=Array(b.size);return b.forEach(function($,ee){A[++I]=[ee,$]}),A}function pl(b,I){return function(A){return b(I(A))}}function zt(b,I){for(var A=-1,$=b.length,ee=0,ue=[];++A<$;){var $e=b[A];($e===I||$e===x)&&(b[A]=x,ue[ee++]=A)}return ue}function $a(b){var I=-1,A=Array(b.size);return b.forEach(function($){A[++I]=$}),A}function kS(b){var I=-1,A=Array(b.size);return b.forEach(function($){A[++I]=[$,$]}),A}function PS(b,I,A){for(var $=A-1,ee=b.length;++$<ee;)if(b[$]===I)return $;return-1}function ES(b,I,A){for(var $=A+1;$--;)if(b[$]===I)return $;return $}function Ko(b){return qo(b)?RS(b):fS(b)}function zn(b){return qo(b)?DS(b):hS(b)}function dl(b){for(var I=b.length;I--&&b0.test(b.charAt(I)););return I}var NS=ac(cS);function RS(b){for(var I=Js.lastIndex=0;Js.test(b);)++I;return I}function DS(b){return b.match(Js)||[]}function MS(b){return b.match(nS)||[]}var OS=function b(I){I=I==null?qe:Vt.defaults(qe.Object(),I,Vt.pick(qe,rS));var A=I.Array,$=I.Date,ee=I.Error,ue=I.Function,$e=I.Math,xe=I.Object,dc=I.RegExp,BS=I.String,Dn=I.TypeError,za=A.prototype,FS=ue.prototype,jo=xe.prototype,Va=I["__core-js_shared__"],qa=FS.toString,he=jo.hasOwnProperty,WS=0,ml=function(){var e=/[^.]+$/.exec(Va&&Va.keys&&Va.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ka=jo.toString,US=qa.call(xe),GS=qe._,HS=dc("^"+qa.call(he).replace(qs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ja=jm?I.Buffer:n,qt=I.Symbol,Xa=I.Uint8Array,ll=ja?ja.allocUnsafe:n,Ya=pl(xe.getPrototypeOf,xe),_l=xe.create,ul=jo.propertyIsEnumerable,Za=za.splice,gl=qt?qt.isConcatSpreadable:n,$r=qt?qt.iterator:n,uo=qt?qt.toStringTag:n,Ja=function(){try{var e=xo(xe,"defineProperty");return e({},"",{}),e}catch(t){}}(),$S=I.clearTimeout!==qe.clearTimeout&&I.clearTimeout,zS=$&&$.now!==qe.Date.now&&$.now,VS=I.setTimeout!==qe.setTimeout&&I.setTimeout,Qa=$e.ceil,ei=$e.floor,mc=xe.getOwnPropertySymbols,qS=ja?ja.isBuffer:n,fl=I.isFinite,KS=za.join,jS=pl(xe.keys,xe),ze=$e.max,tn=$e.min,XS=$.now,YS=I.parseInt,hl=$e.random,ZS=za.reverse,lc=xo(I,"DataView"),zr=xo(I,"Map"),_c=xo(I,"Promise"),Xo=xo(I,"Set"),Vr=xo(I,"WeakMap"),qr=xo(xe,"create"),ni=Vr&&new Vr,Yo={},JS=yo(lc),QS=yo(zr),eb=yo(_c),nb=yo(Xo),tb=yo(Vr),ti=qt?qt.prototype:n,Kr=ti?ti.valueOf:n,Tl=ti?ti.toString:n;function u(e){if(Pe(e)&&!ne(e)&&!(e instanceof me)){if(e instanceof Mn)return e;if(he.call(e,"__wrapped__"))return x_(e)}return new Mn(e)}var Zo=function(){function e(){}return function(t){if(!Ce(t))return{};if(_l)return _l(t);e.prototype=t;var a=new e;return e.prototype=n,a}}();function oi(){}function Mn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}u.templateSettings={escape:f0,evaluate:h0,interpolate:Cm,variable:"",imports:{_:u}},u.prototype=oi.prototype,u.prototype.constructor=u,Mn.prototype=Zo(oi.prototype),Mn.prototype.constructor=Mn;function me(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=mn,this.__views__=[]}function ob(){var e=new me(this.__wrapped__);return e.__actions__=ln(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ln(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ln(this.__views__),e}function rb(){if(this.__filtered__){var e=new me(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function ab(){var e=this.__wrapped__.value(),t=this.__dir__,a=ne(e),s=t<0,_=a?e.length:0,f=hw(0,_,this.__views__),T=f.start,y=f.end,v=y-T,k=s?y:T-1,P=this.__iteratees__,R=P.length,U=0,V=tn(v,this.__takeCount__);if(!a||!s&&_==v&&V==v)return Hl(e,this.__actions__);var K=[];e:for(;v--&&U<V;){k+=t;for(var se=-1,j=e[k];++se<R;){var de=P[se],le=de.iteratee,Cn=de.type,cn=le(j);if(Cn==Wo)j=cn;else if(!cn){if(Cn==ut)continue e;break e}}K[U++]=j}return K}me.prototype=Zo(oi.prototype),me.prototype.constructor=me;function go(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}function ib(){this.__data__=qr?qr(null):{},this.size=0}function sb(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function cb(e){var t=this.__data__;if(qr){var a=t[e];return a===h?n:a}return he.call(t,e)?t[e]:n}function pb(e){var t=this.__data__;return qr?t[e]!==n:he.call(t,e)}function db(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=qr&&t===n?h:t,this}go.prototype.clear=ib,go.prototype.delete=sb,go.prototype.get=cb,go.prototype.has=pb,go.prototype.set=db;function ft(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}function mb(){this.__data__=[],this.size=0}function lb(e){var t=this.__data__,a=ri(t,e);if(a<0)return!1;var s=t.length-1;return a==s?t.pop():Za.call(t,a,1),--this.size,!0}function _b(e){var t=this.__data__,a=ri(t,e);return a<0?n:t[a][1]}function ub(e){return ri(this.__data__,e)>-1}function gb(e,t){var a=this.__data__,s=ri(a,e);return s<0?(++this.size,a.push([e,t])):a[s][1]=t,this}ft.prototype.clear=mb,ft.prototype.delete=lb,ft.prototype.get=_b,ft.prototype.has=ub,ft.prototype.set=gb;function ht(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}function fb(){this.size=0,this.__data__={hash:new go,map:new(zr||ft),string:new go}}function hb(e){var t=fi(this,e).delete(e);return this.size-=t?1:0,t}function Tb(e){return fi(this,e).get(e)}function xb(e){return fi(this,e).has(e)}function yb(e,t){var a=fi(this,e),s=a.size;return a.set(e,t),this.size+=a.size==s?0:1,this}ht.prototype.clear=fb,ht.prototype.delete=hb,ht.prototype.get=Tb,ht.prototype.has=xb,ht.prototype.set=yb;function fo(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new ht;++t<a;)this.add(e[t])}function Sb(e){return this.__data__.set(e,h),this}function bb(e){return this.__data__.has(e)}fo.prototype.add=fo.prototype.push=Sb,fo.prototype.has=bb;function Vn(e){var t=this.__data__=new ft(e);this.size=t.size}function wb(){this.__data__=new ft,this.size=0}function vb(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function Ab(e){return this.__data__.get(e)}function Ib(e){return this.__data__.has(e)}function Cb(e,t){var a=this.__data__;if(a instanceof ft){var s=a.__data__;if(!zr||s.length<i-1)return s.push([e,t]),this.size=++a.size,this;a=this.__data__=new ht(s)}return a.set(e,t),this.size=a.size,this}Vn.prototype.clear=wb,Vn.prototype.delete=vb,Vn.prototype.get=Ab,Vn.prototype.has=Ib,Vn.prototype.set=Cb;function xl(e,t){var a=ne(e),s=!a&&So(e),_=!a&&!s&&Zt(e),f=!a&&!s&&!_&&nr(e),T=a||s||_||f,y=T?sc(e.length,BS):[],v=y.length;for(var k in e)(t||he.call(e,k))&&!(T&&(k=="length"||_&&(k=="offset"||k=="parent")||f&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||St(k,v)))&&y.push(k);return y}function yl(e){var t=e.length;return t?e[vc(0,t-1)]:n}function Lb(e,t){return hi(ln(e),ho(t,0,e.length))}function kb(e){return hi(ln(e))}function uc(e,t,a){(a!==n&&!qn(e[t],a)||a===n&&!(t in e))&&Tt(e,t,a)}function jr(e,t,a){var s=e[t];(!(he.call(e,t)&&qn(s,a))||a===n&&!(t in e))&&Tt(e,t,a)}function ri(e,t){for(var a=e.length;a--;)if(qn(e[a][0],t))return a;return-1}function Pb(e,t,a,s){return Kt(e,function(_,f,T){t(s,_,a(_),T)}),s}function Sl(e,t){return e&&Zn(t,Ke(t),e)}function Eb(e,t){return e&&Zn(t,un(t),e)}function Tt(e,t,a){t=="__proto__"&&Ja?Ja(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}function gc(e,t){for(var a=-1,s=t.length,_=A(s),f=e==null;++a<s;)_[a]=f?n:Xc(e,t[a]);return _}function ho(e,t,a){return e===e&&(a!==n&&(e=e<=a?e:a),t!==n&&(e=e>=t?e:t)),e}function On(e,t,a,s,_,f){var T,y=t&S,v=t&N,k=t&C;if(a&&(T=_?a(e,s,_,f):a(e)),T!==n)return T;if(!Ce(e))return e;var P=ne(e);if(P){if(T=xw(e),!y)return ln(e,T)}else{var R=on(e),U=R==Ho||R==Oa;if(Zt(e))return Vl(e,y);if(R==gt||R==Ut||U&&!_){if(T=v||U?{}:d_(e),!y)return v?cw(e,Eb(T,e)):sw(e,Sl(T,e))}else{if(!be[R])return _?e:{};T=yw(e,R,y)}}f||(f=new Vn);var V=f.get(e);if(V)return V;f.set(e,T),W_(e)?e.forEach(function(j){T.add(On(j,t,a,j,e,f))}):B_(e)&&e.forEach(function(j,de){T.set(de,On(j,t,a,de,e,f))});var K=k?v?Mc:Dc:v?un:Ke,se=P?n:K(e);return Rn(se||e,function(j,de){se&&(de=j,j=e[de]),jr(T,de,On(j,t,a,de,e,f))}),T}function Nb(e){var t=Ke(e);return function(a){return bl(a,e,t)}}function bl(e,t,a){var s=a.length;if(e==null)return!s;for(e=xe(e);s--;){var _=a[s],f=t[_],T=e[_];if(T===n&&!(_ in e)||!f(T))return!1}return!0}function wl(e,t,a){if(typeof e!="function")throw new Dn(l);return na(function(){e.apply(n,a)},t)}function Xr(e,t,a,s){var _=-1,f=Ga,T=!0,y=e.length,v=[],k=t.length;if(!y)return v;a&&(t=Ae(t,vn(a))),s?(f=nc,T=!1):t.length>=i&&(f=Hr,T=!1,t=new fo(t));e:for(;++_<y;){var P=e[_],R=a==null?P:a(P);if(P=s||P!==0?P:0,T&&R===R){for(var U=k;U--;)if(t[U]===R)continue e;v.push(P)}else f(t,R,s)||v.push(P)}return v}var Kt=Yl(Yn),vl=Yl(hc,!0);function Rb(e,t){var a=!0;return Kt(e,function(s,_,f){return a=!!t(s,_,f),a}),a}function ai(e,t,a){for(var s=-1,_=e.length;++s<_;){var f=e[s],T=t(f);if(T!=null&&(y===n?T===T&&!In(T):a(T,y)))var y=T,v=f}return v}function Db(e,t,a,s){var _=e.length;for(a=re(a),a<0&&(a=-a>_?0:_+a),s=s===n||s>_?_:re(s),s<0&&(s+=_),s=a>s?0:G_(s);a<s;)e[a++]=t;return e}function Al(e,t){var a=[];return Kt(e,function(s,_,f){t(s,_,f)&&a.push(s)}),a}function Ze(e,t,a,s,_){var f=-1,T=e.length;for(a||(a=bw),_||(_=[]);++f<T;){var y=e[f];t>0&&a(y)?t>1?Ze(y,t-1,a,s,_):$t(_,y):s||(_[_.length]=y)}return _}var fc=Zl(),Il=Zl(!0);function Yn(e,t){return e&&fc(e,t,Ke)}function hc(e,t){return e&&Il(e,t,Ke)}function ii(e,t){return Ht(t,function(a){return bt(e[a])})}function To(e,t){t=Xt(t,e);for(var a=0,s=t.length;e!=null&&a<s;)e=e[Jn(t[a++])];return a&&a==s?e:n}function Cl(e,t,a){var s=t(e);return ne(e)?s:$t(s,a(e))}function an(e){return e==null?e===n?p0:s0:uo&&uo in xe(e)?fw(e):kw(e)}function Tc(e,t){return e>t}function Mb(e,t){return e!=null&&he.call(e,t)}function Ob(e,t){return e!=null&&t in xe(e)}function Bb(e,t,a){return e>=tn(t,a)&&e<ze(t,a)}function xc(e,t,a){for(var s=a?nc:Ga,_=e[0].length,f=e.length,T=f,y=A(f),v=1/0,k=[];T--;){var P=e[T];T&&t&&(P=Ae(P,vn(t))),v=tn(P.length,v),y[T]=!a&&(t||_>=120&&P.length>=120)?new fo(T&&P):n}P=e[0];var R=-1,U=y[0];e:for(;++R<_&&k.length<v;){var V=P[R],K=t?t(V):V;if(V=a||V!==0?V:0,!(U?Hr(U,K):s(k,K,a))){for(T=f;--T;){var se=y[T];if(!(se?Hr(se,K):s(e[T],K,a)))continue e}U&&U.push(K),k.push(V)}}return k}function Fb(e,t,a,s){return Yn(e,function(_,f,T){t(s,a(_),f,T)}),s}function Yr(e,t,a){t=Xt(t,e),e=u_(e,t);var s=e==null?e:e[Jn(Fn(t))];return s==null?n:wn(s,e,a)}function Ll(e){return Pe(e)&&an(e)==Ut}function Wb(e){return Pe(e)&&an(e)==Gr}function Ub(e){return Pe(e)&&an(e)==Se}function Zr(e,t,a,s,_){return e===t?!0:e==null||t==null||!Pe(e)&&!Pe(t)?e!==e&&t!==t:Gb(e,t,a,s,Zr,_)}function Gb(e,t,a,s,_,f){var T=ne(e),y=ne(t),v=T?Go:on(e),k=y?Go:on(t);v=v==Ut?gt:v,k=k==Ut?gt:k;var P=v==gt,R=k==gt,U=v==k;if(U&&Zt(e)){if(!Zt(t))return!1;T=!0,P=!1}if(U&&!P)return f||(f=new Vn),T||nr(e)?s_(e,t,a,s,_,f):uw(e,t,v,a,s,_,f);if(!(a&D)){var V=P&&he.call(e,"__wrapped__"),K=R&&he.call(t,"__wrapped__");if(V||K){var se=V?e.value():e,j=K?t.value():t;return f||(f=new Vn),_(se,j,a,s,f)}}return U?(f||(f=new Vn),gw(e,t,a,s,_,f)):!1}function Hb(e){return Pe(e)&&on(e)==Hn}function yc(e,t,a,s){var _=a.length,f=_,T=!s;if(e==null)return!f;for(e=xe(e);_--;){var y=a[_];if(T&&y[2]?y[1]!==e[y[0]]:!(y[0]in e))return!1}for(;++_<f;){y=a[_];var v=y[0],k=e[v],P=y[1];if(T&&y[2]){if(k===n&&!(v in e))return!1}else{var R=new Vn;if(s)var U=s(k,P,v,e,t,R);if(!(U===n?Zr(P,k,D|H,s,R):U))return!1}}return!0}function kl(e){if(!Ce(e)||vw(e))return!1;var t=bt(e)?HS:N0;return t.test(yo(e))}function $b(e){return Pe(e)&&an(e)==Fr}function zb(e){return Pe(e)&&on(e)==$n}function Vb(e){return Pe(e)&&wi(e.length)&&!!we[an(e)]}function Pl(e){return typeof e=="function"?e:e==null?gn:typeof e=="object"?ne(e)?Rl(e[0],e[1]):Nl(e):J_(e)}function Sc(e){if(!ea(e))return jS(e);var t=[];for(var a in xe(e))he.call(e,a)&&a!="constructor"&&t.push(a);return t}function qb(e){if(!Ce(e))return Lw(e);var t=ea(e),a=[];for(var s in e)s=="constructor"&&(t||!he.call(e,s))||a.push(s);return a}function bc(e,t){return e<t}function El(e,t){var a=-1,s=_n(e)?A(e.length):[];return Kt(e,function(_,f,T){s[++a]=t(_,f,T)}),s}function Nl(e){var t=Bc(e);return t.length==1&&t[0][2]?l_(t[0][0],t[0][1]):function(a){return a===e||yc(a,e,t)}}function Rl(e,t){return Wc(e)&&m_(t)?l_(Jn(e),t):function(a){var s=Xc(a,e);return s===n&&s===t?Yc(a,e):Zr(t,s,D|H)}}function si(e,t,a,s,_){e!==t&&fc(t,function(f,T){if(_||(_=new Vn),Ce(f))Kb(e,t,T,a,si,s,_);else{var y=s?s(Gc(e,T),f,T+"",e,t,_):n;y===n&&(y=f),uc(e,T,y)}},un)}function Kb(e,t,a,s,_,f,T){var y=Gc(e,a),v=Gc(t,a),k=T.get(v);if(k){uc(e,a,k);return}var P=f?f(y,v,a+"",e,t,T):n,R=P===n;if(R){var U=ne(v),V=!U&&Zt(v),K=!U&&!V&&nr(v);P=v,U||V||K?ne(y)?P=y:Be(y)?P=ln(y):V?(R=!1,P=Vl(v,!0)):K?(R=!1,P=ql(v,!0)):P=[]:ta(v)||So(v)?(P=y,So(y)?P=H_(y):(!Ce(y)||bt(y))&&(P=d_(v))):R=!1}R&&(T.set(v,P),_(P,v,s,f,T),T.delete(v)),uc(e,a,P)}function Dl(e,t){var a=e.length;if(!!a)return t+=t<0?a:0,St(t,a)?e[t]:n}function Ml(e,t,a){t.length?t=Ae(t,function(f){return ne(f)?function(T){return To(T,f.length===1?f[0]:f)}:f}):t=[gn];var s=-1;t=Ae(t,vn(q()));var _=El(e,function(f,T,y){var v=Ae(t,function(k){return k(f)});return{criteria:v,index:++s,value:f}});return yS(_,function(f,T){return iw(f,T,a)})}function jb(e,t){return Ol(e,t,function(a,s){return Yc(e,s)})}function Ol(e,t,a){for(var s=-1,_=t.length,f={};++s<_;){var T=t[s],y=To(e,T);a(y,T)&&Jr(f,Xt(T,e),y)}return f}function Xb(e){return function(t){return To(t,e)}}function wc(e,t,a,s){var _=s?xS:Vo,f=-1,T=t.length,y=e;for(e===t&&(t=ln(t)),a&&(y=Ae(e,vn(a)));++f<T;)for(var v=0,k=t[f],P=a?a(k):k;(v=_(y,P,v,s))>-1;)y!==e&&Za.call(y,v,1),Za.call(e,v,1);return e}function Bl(e,t){for(var a=e?t.length:0,s=a-1;a--;){var _=t[a];if(a==s||_!==f){var f=_;St(_)?Za.call(e,_,1):Cc(e,_)}}return e}function vc(e,t){return e+ei(hl()*(t-e+1))}function Yb(e,t,a,s){for(var _=-1,f=ze(Qa((t-e)/(a||1)),0),T=A(f);f--;)T[s?f:++_]=e,e+=a;return T}function Ac(e,t){var a="";if(!e||t<1||t>ve)return a;do t%2&&(a+=e),t=ei(t/2),t&&(e+=e);while(t);return a}function pe(e,t){return Hc(__(e,t,gn),e+"")}function Zb(e){return yl(tr(e))}function Jb(e,t){var a=tr(e);return hi(a,ho(t,0,a.length))}function Jr(e,t,a,s){if(!Ce(e))return e;t=Xt(t,e);for(var _=-1,f=t.length,T=f-1,y=e;y!=null&&++_<f;){var v=Jn(t[_]),k=a;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(_!=T){var P=y[v];k=s?s(P,v,y):n,k===n&&(k=Ce(P)?P:St(t[_+1])?[]:{})}jr(y,v,k),y=y[v]}return e}var Fl=ni?function(e,t){return ni.set(e,t),e}:gn,Qb=Ja?function(e,t){return Ja(e,"toString",{configurable:!0,enumerable:!1,value:Jc(t),writable:!0})}:gn;function ew(e){return hi(tr(e))}function Bn(e,t,a){var s=-1,_=e.length;t<0&&(t=-t>_?0:_+t),a=a>_?_:a,a<0&&(a+=_),_=t>a?0:a-t>>>0,t>>>=0;for(var f=A(_);++s<_;)f[s]=e[s+t];return f}function nw(e,t){var a;return Kt(e,function(s,_,f){return a=t(s,_,f),!a}),!!a}function ci(e,t,a){var s=0,_=e==null?s:e.length;if(typeof t=="number"&&t===t&&_<=Os){for(;s<_;){var f=s+_>>>1,T=e[f];T!==null&&!In(T)&&(a?T<=t:T<t)?s=f+1:_=f}return _}return Ic(e,t,gn,a)}function Ic(e,t,a,s){var _=0,f=e==null?0:e.length;if(f===0)return 0;t=a(t);for(var T=t!==t,y=t===null,v=In(t),k=t===n;_<f;){var P=ei((_+f)/2),R=a(e[P]),U=R!==n,V=R===null,K=R===R,se=In(R);if(T)var j=s||K;else k?j=K&&(s||U):y?j=K&&U&&(s||!V):v?j=K&&U&&!V&&(s||!se):V||se?j=!1:j=s?R<=t:R<t;j?_=P+1:f=P}return tn(f,Ms)}function Wl(e,t){for(var a=-1,s=e.length,_=0,f=[];++a<s;){var T=e[a],y=t?t(T):T;if(!a||!qn(y,v)){var v=y;f[_++]=T===0?0:T}}return f}function Ul(e){return typeof e=="number"?e:In(e)?dn:+e}function An(e){if(typeof e=="string")return e;if(ne(e))return Ae(e,An)+"";if(In(e))return Tl?Tl.call(e):"";var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function jt(e,t,a){var s=-1,_=Ga,f=e.length,T=!0,y=[],v=y;if(a)T=!1,_=nc;else if(f>=i){var k=t?null:lw(e);if(k)return $a(k);T=!1,_=Hr,v=new fo}else v=t?[]:y;e:for(;++s<f;){var P=e[s],R=t?t(P):P;if(P=a||P!==0?P:0,T&&R===R){for(var U=v.length;U--;)if(v[U]===R)continue e;t&&v.push(R),y.push(P)}else _(v,R,a)||(v!==y&&v.push(R),y.push(P))}return y}function Cc(e,t){return t=Xt(t,e),e=u_(e,t),e==null||delete e[Jn(Fn(t))]}function Gl(e,t,a,s){return Jr(e,t,a(To(e,t)),s)}function pi(e,t,a,s){for(var _=e.length,f=s?_:-1;(s?f--:++f<_)&&t(e[f],f,e););return a?Bn(e,s?0:f,s?f+1:_):Bn(e,s?f+1:0,s?_:f)}function Hl(e,t){var a=e;return a instanceof me&&(a=a.value()),tc(t,function(s,_){return _.func.apply(_.thisArg,$t([s],_.args))},a)}function Lc(e,t,a){var s=e.length;if(s<2)return s?jt(e[0]):[];for(var _=-1,f=A(s);++_<s;)for(var T=e[_],y=-1;++y<s;)y!=_&&(f[_]=Xr(f[_]||T,e[y],t,a));return jt(Ze(f,1),t,a)}function $l(e,t,a){for(var s=-1,_=e.length,f=t.length,T={};++s<_;){var y=s<f?t[s]:n;a(T,e[s],y)}return T}function kc(e){return Be(e)?e:[]}function Pc(e){return typeof e=="function"?e:gn}function Xt(e,t){return ne(e)?e:Wc(e,t)?[e]:T_(ge(e))}var tw=pe;function Yt(e,t,a){var s=e.length;return a=a===n?s:a,!t&&a>=s?e:Bn(e,t,a)}var zl=$S||function(e){return qe.clearTimeout(e)};function Vl(e,t){if(t)return e.slice();var a=e.length,s=ll?ll(a):new e.constructor(a);return e.copy(s),s}function Ec(e){var t=new e.constructor(e.byteLength);return new Xa(t).set(new Xa(e)),t}function ow(e,t){var a=t?Ec(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function rw(e){var t=new e.constructor(e.source,Lm.exec(e));return t.lastIndex=e.lastIndex,t}function aw(e){return Kr?xe(Kr.call(e)):{}}function ql(e,t){var a=t?Ec(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function Kl(e,t){if(e!==t){var a=e!==n,s=e===null,_=e===e,f=In(e),T=t!==n,y=t===null,v=t===t,k=In(t);if(!y&&!k&&!f&&e>t||f&&T&&v&&!y&&!k||s&&T&&v||!a&&v||!_)return 1;if(!s&&!f&&!k&&e<t||k&&a&&_&&!s&&!f||y&&a&&_||!T&&_||!v)return-1}return 0}function iw(e,t,a){for(var s=-1,_=e.criteria,f=t.criteria,T=_.length,y=a.length;++s<T;){var v=Kl(_[s],f[s]);if(v){if(s>=y)return v;var k=a[s];return v*(k=="desc"?-1:1)}}return e.index-t.index}function jl(e,t,a,s){for(var _=-1,f=e.length,T=a.length,y=-1,v=t.length,k=ze(f-T,0),P=A(v+k),R=!s;++y<v;)P[y]=t[y];for(;++_<T;)(R||_<f)&&(P[a[_]]=e[_]);for(;k--;)P[y++]=e[_++];return P}function Xl(e,t,a,s){for(var _=-1,f=e.length,T=-1,y=a.length,v=-1,k=t.length,P=ze(f-y,0),R=A(P+k),U=!s;++_<P;)R[_]=e[_];for(var V=_;++v<k;)R[V+v]=t[v];for(;++T<y;)(U||_<f)&&(R[V+a[T]]=e[_++]);return R}function ln(e,t){var a=-1,s=e.length;for(t||(t=A(s));++a<s;)t[a]=e[a];return t}function Zn(e,t,a,s){var _=!a;a||(a={});for(var f=-1,T=t.length;++f<T;){var y=t[f],v=s?s(a[y],e[y],y,a,e):n;v===n&&(v=e[y]),_?Tt(a,y,v):jr(a,y,v)}return a}function sw(e,t){return Zn(e,Fc(e),t)}function cw(e,t){return Zn(e,c_(e),t)}function di(e,t){return function(a,s){var _=ne(a)?_S:Pb,f=t?t():{};return _(a,e,q(s,2),f)}}function Jo(e){return pe(function(t,a){var s=-1,_=a.length,f=_>1?a[_-1]:n,T=_>2?a[2]:n;for(f=e.length>3&&typeof f=="function"?(_--,f):n,T&&sn(a[0],a[1],T)&&(f=_<3?n:f,_=1),t=xe(t);++s<_;){var y=a[s];y&&e(t,y,s,f)}return t})}function Yl(e,t){return function(a,s){if(a==null)return a;if(!_n(a))return e(a,s);for(var _=a.length,f=t?_:-1,T=xe(a);(t?f--:++f<_)&&s(T[f],f,T)!==!1;);return a}}function Zl(e){return function(t,a,s){for(var _=-1,f=xe(t),T=s(t),y=T.length;y--;){var v=T[e?y:++_];if(a(f[v],v,f)===!1)break}return t}}function pw(e,t,a){var s=t&G,_=Qr(e);function f(){var T=this&&this!==qe&&this instanceof f?_:e;return T.apply(s?a:this,arguments)}return f}function Jl(e){return function(t){t=ge(t);var a=qo(t)?zn(t):n,s=a?a[0]:t.charAt(0),_=a?Yt(a,1).join(""):t.slice(1);return s[e]()+_}}function Qo(e){return function(t){return tc(Y_(X_(t).replace(Q0,"")),e,"")}}function Qr(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var a=Zo(e.prototype),s=e.apply(a,t);return Ce(s)?s:a}}function dw(e,t,a){var s=Qr(e);function _(){for(var f=arguments.length,T=A(f),y=f,v=er(_);y--;)T[y]=arguments[y];var k=f<3&&T[0]!==v&&T[f-1]!==v?[]:zt(T,v);if(f-=k.length,f<a)return o_(e,t,mi,_.placeholder,n,T,k,n,n,a-f);var P=this&&this!==qe&&this instanceof _?s:e;return wn(P,this,T)}return _}function Ql(e){return function(t,a,s){var _=xe(t);if(!_n(t)){var f=q(a,3);t=Ke(t),a=function(y){return f(_[y],y,_)}}var T=e(t,a,s);return T>-1?_[f?t[T]:T]:n}}function e_(e){return yt(function(t){var a=t.length,s=a,_=Mn.prototype.thru;for(e&&t.reverse();s--;){var f=t[s];if(typeof f!="function")throw new Dn(l);if(_&&!T&&gi(f)=="wrapper")var T=new Mn([],!0)}for(s=T?s:a;++s<a;){f=t[s];var y=gi(f),v=y=="wrapper"?Oc(f):n;v&&Uc(v[0])&&v[1]==(Q|J|ie|ke)&&!v[4].length&&v[9]==1?T=T[gi(v[0])].apply(T,v[3]):T=f.length==1&&Uc(f)?T[y]():T.thru(f)}return function(){var k=arguments,P=k[0];if(T&&k.length==1&&ne(P))return T.plant(P).value();for(var R=0,U=a?t[R].apply(this,k):P;++R<a;)U=t[R].call(this,U);return U}})}function mi(e,t,a,s,_,f,T,y,v,k){var P=t&Q,R=t&G,U=t&O,V=t&(J|ce),K=t&Sn,se=U?n:Qr(e);function j(){for(var de=arguments.length,le=A(de),Cn=de;Cn--;)le[Cn]=arguments[Cn];if(V)var cn=er(j),Ln=bS(le,cn);if(s&&(le=jl(le,s,_,V)),f&&(le=Xl(le,f,T,V)),de-=Ln,V&&de<k){var Fe=zt(le,cn);return o_(e,t,mi,j.placeholder,a,le,Fe,y,v,k-de)}var Kn=R?a:this,vt=U?Kn[e]:e;return de=le.length,y?le=Pw(le,y):K&&de>1&&le.reverse(),P&&v<de&&(le.length=v),this&&this!==qe&&this instanceof j&&(vt=se||Qr(vt)),vt.apply(Kn,le)}return j}function n_(e,t){return function(a,s){return Fb(a,e,t(s),{})}}function li(e,t){return function(a,s){var _;if(a===n&&s===n)return t;if(a!==n&&(_=a),s!==n){if(_===n)return s;typeof a=="string"||typeof s=="string"?(a=An(a),s=An(s)):(a=Ul(a),s=Ul(s)),_=e(a,s)}return _}}function Nc(e){return yt(function(t){return t=Ae(t,vn(q())),pe(function(a){var s=this;return e(t,function(_){return wn(_,s,a)})})})}function _i(e,t){t=t===n?" ":An(t);var a=t.length;if(a<2)return a?Ac(t,e):t;var s=Ac(t,Qa(e/Ko(t)));return qo(t)?Yt(zn(s),0,e).join(""):s.slice(0,e)}function mw(e,t,a,s){var _=t&G,f=Qr(e);function T(){for(var y=-1,v=arguments.length,k=-1,P=s.length,R=A(P+v),U=this&&this!==qe&&this instanceof T?f:e;++k<P;)R[k]=s[k];for(;v--;)R[k++]=arguments[++y];return wn(U,_?a:this,R)}return T}function t_(e){return function(t,a,s){return s&&typeof s!="number"&&sn(t,a,s)&&(a=s=n),t=wt(t),a===n?(a=t,t=0):a=wt(a),s=s===n?t<a?1:-1:wt(s),Yb(t,a,s,e)}}function ui(e){return function(t,a){return typeof t=="string"&&typeof a=="string"||(t=Wn(t),a=Wn(a)),e(t,a)}}function o_(e,t,a,s,_,f,T,y,v,k){var P=t&J,R=P?T:n,U=P?n:T,V=P?f:n,K=P?n:f;t|=P?ie:Y,t&=~(P?Y:ie),t&X||(t&=~(G|O));var se=[e,t,_,V,R,K,U,y,v,k],j=a.apply(n,se);return Uc(e)&&g_(j,se),j.placeholder=s,f_(j,e,t)}function Rc(e){var t=$e[e];return function(a,s){if(a=Wn(a),s=s==null?0:tn(re(s),292),s&&fl(a)){var _=(ge(a)+"e").split("e"),f=t(_[0]+"e"+(+_[1]+s));return _=(ge(f)+"e").split("e"),+(_[0]+"e"+(+_[1]-s))}return t(a)}}var lw=Xo&&1/$a(new Xo([,-0]))[1]==Te?function(e){return new Xo(e)}:np;function r_(e){return function(t){var a=on(t);return a==Hn?pc(t):a==$n?kS(t):SS(t,e(t))}}function xt(e,t,a,s,_,f,T,y){var v=t&O;if(!v&&typeof e!="function")throw new Dn(l);var k=s?s.length:0;if(k||(t&=~(ie|Y),s=_=n),T=T===n?T:ze(re(T),0),y=y===n?y:re(y),k-=_?_.length:0,t&Y){var P=s,R=_;s=_=n}var U=v?n:Oc(e),V=[e,t,a,s,_,P,R,f,T,y];if(U&&Cw(V,U),e=V[0],t=V[1],a=V[2],s=V[3],_=V[4],y=V[9]=V[9]===n?v?0:e.length:ze(V[9]-k,0),!y&&t&(J|ce)&&(t&=~(J|ce)),!t||t==G)var K=pw(e,t,a);else t==J||t==ce?K=dw(e,t,y):(t==ie||t==(G|ie))&&!_.length?K=mw(e,t,a,s):K=mi.apply(n,V);var se=U?Fl:g_;return f_(se(K,V),e,t)}function a_(e,t,a,s){return e===n||qn(e,jo[a])&&!he.call(s,a)?t:e}function i_(e,t,a,s,_,f){return Ce(e)&&Ce(t)&&(f.set(t,e),si(e,t,n,i_,f),f.delete(t)),e}function _w(e){return ta(e)?n:e}function s_(e,t,a,s,_,f){var T=a&D,y=e.length,v=t.length;if(y!=v&&!(T&&v>y))return!1;var k=f.get(e),P=f.get(t);if(k&&P)return k==t&&P==e;var R=-1,U=!0,V=a&H?new fo:n;for(f.set(e,t),f.set(t,e);++R<y;){var K=e[R],se=t[R];if(s)var j=T?s(se,K,R,t,e,f):s(K,se,R,e,t,f);if(j!==n){if(j)continue;U=!1;break}if(V){if(!oc(t,function(de,le){if(!Hr(V,le)&&(K===de||_(K,de,a,s,f)))return V.push(le)})){U=!1;break}}else if(!(K===se||_(K,se,a,s,f))){U=!1;break}}return f.delete(e),f.delete(t),U}function uw(e,t,a,s,_,f,T){switch(a){case $o:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Gr:return!(e.byteLength!=t.byteLength||!f(new Xa(e),new Xa(t)));case fe:case Se:case Br:return qn(+e,+t);case Gt:return e.name==t.name&&e.message==t.message;case Fr:case Wr:return e==t+"";case Hn:var y=pc;case $n:var v=s&D;if(y||(y=$a),e.size!=t.size&&!v)return!1;var k=T.get(e);if(k)return k==t;s|=H,T.set(e,t);var P=s_(y(e),y(t),s,_,f,T);return T.delete(e),P;case Ba:if(Kr)return Kr.call(e)==Kr.call(t)}return!1}function gw(e,t,a,s,_,f){var T=a&D,y=Dc(e),v=y.length,k=Dc(t),P=k.length;if(v!=P&&!T)return!1;for(var R=v;R--;){var U=y[R];if(!(T?U in t:he.call(t,U)))return!1}var V=f.get(e),K=f.get(t);if(V&&K)return V==t&&K==e;var se=!0;f.set(e,t),f.set(t,e);for(var j=T;++R<v;){U=y[R];var de=e[U],le=t[U];if(s)var Cn=T?s(le,de,U,t,e,f):s(de,le,U,e,t,f);if(!(Cn===n?de===le||_(de,le,a,s,f):Cn)){se=!1;break}j||(j=U=="constructor")}if(se&&!j){var cn=e.constructor,Ln=t.constructor;cn!=Ln&&"constructor"in e&&"constructor"in t&&!(typeof cn=="function"&&cn instanceof cn&&typeof Ln=="function"&&Ln instanceof Ln)&&(se=!1)}return f.delete(e),f.delete(t),se}function yt(e){return Hc(__(e,n,b_),e+"")}function Dc(e){return Cl(e,Ke,Fc)}function Mc(e){return Cl(e,un,c_)}var Oc=ni?function(e){return ni.get(e)}:np;function gi(e){for(var t=e.name+"",a=Yo[t],s=he.call(Yo,t)?a.length:0;s--;){var _=a[s],f=_.func;if(f==null||f==e)return _.name}return t}function er(e){var t=he.call(u,"placeholder")?u:e;return t.placeholder}function q(){var e=u.iteratee||Qc;return e=e===Qc?Pl:e,arguments.length?e(arguments[0],arguments[1]):e}function fi(e,t){var a=e.__data__;return ww(t)?a[typeof t=="string"?"string":"hash"]:a.map}function Bc(e){for(var t=Ke(e),a=t.length;a--;){var s=t[a],_=e[s];t[a]=[s,_,m_(_)]}return t}function xo(e,t){var a=IS(e,t);return kl(a)?a:n}function fw(e){var t=he.call(e,uo),a=e[uo];try{e[uo]=n;var s=!0}catch(f){}var _=Ka.call(e);return s&&(t?e[uo]=a:delete e[uo]),_}var Fc=mc?function(e){return e==null?[]:(e=xe(e),Ht(mc(e),function(t){return ul.call(e,t)}))}:tp,c_=mc?function(e){for(var t=[];e;)$t(t,Fc(e)),e=Ya(e);return t}:tp,on=an;(lc&&on(new lc(new ArrayBuffer(1)))!=$o||zr&&on(new zr)!=Hn||_c&&on(_c.resolve())!=vm||Xo&&on(new Xo)!=$n||Vr&&on(new Vr)!=Ur)&&(on=function(e){var t=an(e),a=t==gt?e.constructor:n,s=a?yo(a):"";if(s)switch(s){case JS:return $o;case QS:return Hn;case eb:return vm;case nb:return $n;case tb:return Ur}return t});function hw(e,t,a){for(var s=-1,_=a.length;++s<_;){var f=a[s],T=f.size;switch(f.type){case"drop":e+=T;break;case"dropRight":t-=T;break;case"take":t=tn(t,e+T);break;case"takeRight":e=ze(e,t-T);break}}return{start:e,end:t}}function Tw(e){var t=e.match(v0);return t?t[1].split(A0):[]}function p_(e,t,a){t=Xt(t,e);for(var s=-1,_=t.length,f=!1;++s<_;){var T=Jn(t[s]);if(!(f=e!=null&&a(e,T)))break;e=e[T]}return f||++s!=_?f:(_=e==null?0:e.length,!!_&&wi(_)&&St(T,_)&&(ne(e)||So(e)))}function xw(e){var t=e.length,a=new e.constructor(t);return t&&typeof e[0]=="string"&&he.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function d_(e){return typeof e.constructor=="function"&&!ea(e)?Zo(Ya(e)):{}}function yw(e,t,a){var s=e.constructor;switch(t){case Gr:return Ec(e);case fe:case Se:return new s(+e);case $o:return ow(e,a);case Bs:case Fs:case Ws:case Us:case Gs:case Hs:case $s:case zs:case Vs:return ql(e,a);case Hn:return new s;case Br:case Wr:return new s(e);case Fr:return rw(e);case $n:return new s;case Ba:return aw(e)}}function Sw(e,t){var a=t.length;if(!a)return e;var s=a-1;return t[s]=(a>1?"& ":"")+t[s],t=t.join(a>2?", ":" "),e.replace(w0,`{
/* [wrapped with `+t+`] */
`)}function bw(e){return ne(e)||So(e)||!!(gl&&e&&e[gl])}function St(e,t){var a=typeof e;return t=t==null?ve:t,!!t&&(a=="number"||a!="symbol"&&D0.test(e))&&e>-1&&e%1==0&&e<t}function sn(e,t,a){if(!Ce(a))return!1;var s=typeof t;return(s=="number"?_n(a)&&St(t,a.length):s=="string"&&t in a)?qn(a[t],e):!1}function Wc(e,t){if(ne(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||In(e)?!0:x0.test(e)||!T0.test(e)||t!=null&&e in xe(t)}function ww(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Uc(e){var t=gi(e),a=u[t];if(typeof a!="function"||!(t in me.prototype))return!1;if(e===a)return!0;var s=Oc(a);return!!s&&e===s[0]}function vw(e){return!!ml&&ml in e}var Aw=Va?bt:op;function ea(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||jo;return e===a}function m_(e){return e===e&&!Ce(e)}function l_(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==n||e in xe(a))}}function Iw(e){var t=Si(e,function(s){return a.size===w&&a.clear(),s}),a=t.cache;return t}function Cw(e,t){var a=e[1],s=t[1],_=a|s,f=_<(G|O|Q),T=s==Q&&a==J||s==Q&&a==ke&&e[7].length<=t[8]||s==(Q|ke)&&t[7].length<=t[8]&&a==J;if(!(f||T))return e;s&G&&(e[2]=t[2],_|=a&G?0:X);var y=t[3];if(y){var v=e[3];e[3]=v?jl(v,y,t[4]):y,e[4]=v?zt(e[3],x):t[4]}return y=t[5],y&&(v=e[5],e[5]=v?Xl(v,y,t[6]):y,e[6]=v?zt(e[5],x):t[6]),y=t[7],y&&(e[7]=y),s&Q&&(e[8]=e[8]==null?t[8]:tn(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=_,e}function Lw(e){var t=[];if(e!=null)for(var a in xe(e))t.push(a);return t}function kw(e){return Ka.call(e)}function __(e,t,a){return t=ze(t===n?e.length-1:t,0),function(){for(var s=arguments,_=-1,f=ze(s.length-t,0),T=A(f);++_<f;)T[_]=s[t+_];_=-1;for(var y=A(t+1);++_<t;)y[_]=s[_];return y[t]=a(T),wn(e,this,y)}}function u_(e,t){return t.length<2?e:To(e,Bn(t,0,-1))}function Pw(e,t){for(var a=e.length,s=tn(t.length,a),_=ln(e);s--;){var f=t[s];e[s]=St(f,a)?_[f]:n}return e}function Gc(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var g_=h_(Fl),na=VS||function(e,t){return qe.setTimeout(e,t)},Hc=h_(Qb);function f_(e,t,a){var s=t+"";return Hc(e,Sw(s,Ew(Tw(s),a)))}function h_(e){var t=0,a=0;return function(){var s=XS(),_=lo-(s-a);if(a=s,_>0){if(++t>=_t)return arguments[0]}else t=0;return e.apply(n,arguments)}}function hi(e,t){var a=-1,s=e.length,_=s-1;for(t=t===n?s:t;++a<t;){var f=vc(a,_),T=e[f];e[f]=e[a],e[a]=T}return e.length=t,e}var T_=Iw(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(y0,function(a,s,_,f){t.push(_?f.replace(L0,"$1"):s||a)}),t});function Jn(e){if(typeof e=="string"||In(e))return e;var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function yo(e){if(e!=null){try{return qa.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Ew(e,t){return Rn(Ma,function(a){var s="_."+a[0];t&a[1]&&!Ga(e,s)&&e.push(s)}),e.sort()}function x_(e){if(e instanceof me)return e.clone();var t=new Mn(e.__wrapped__,e.__chain__);return t.__actions__=ln(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Nw(e,t,a){(a?sn(e,t,a):t===n)?t=1:t=ze(re(t),0);var s=e==null?0:e.length;if(!s||t<1)return[];for(var _=0,f=0,T=A(Qa(s/t));_<s;)T[f++]=Bn(e,_,_+=t);return T}function Rw(e){for(var t=-1,a=e==null?0:e.length,s=0,_=[];++t<a;){var f=e[t];f&&(_[s++]=f)}return _}function Dw(){var e=arguments.length;if(!e)return[];for(var t=A(e-1),a=arguments[0],s=e;s--;)t[s-1]=arguments[s];return $t(ne(a)?ln(a):[a],Ze(t,1))}var Mw=pe(function(e,t){return Be(e)?Xr(e,Ze(t,1,Be,!0)):[]}),Ow=pe(function(e,t){var a=Fn(t);return Be(a)&&(a=n),Be(e)?Xr(e,Ze(t,1,Be,!0),q(a,2)):[]}),Bw=pe(function(e,t){var a=Fn(t);return Be(a)&&(a=n),Be(e)?Xr(e,Ze(t,1,Be,!0),n,a):[]});function Fw(e,t,a){var s=e==null?0:e.length;return s?(t=a||t===n?1:re(t),Bn(e,t<0?0:t,s)):[]}function Ww(e,t,a){var s=e==null?0:e.length;return s?(t=a||t===n?1:re(t),t=s-t,Bn(e,0,t<0?0:t)):[]}function Uw(e,t){return e&&e.length?pi(e,q(t,3),!0,!0):[]}function Gw(e,t){return e&&e.length?pi(e,q(t,3),!0):[]}function Hw(e,t,a,s){var _=e==null?0:e.length;return _?(a&&typeof a!="number"&&sn(e,t,a)&&(a=0,s=_),Db(e,t,a,s)):[]}function y_(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=a==null?0:re(a);return _<0&&(_=ze(s+_,0)),Ha(e,q(t,3),_)}function S_(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=s-1;return a!==n&&(_=re(a),_=a<0?ze(s+_,0):tn(_,s-1)),Ha(e,q(t,3),_,!0)}function b_(e){var t=e==null?0:e.length;return t?Ze(e,1):[]}function $w(e){var t=e==null?0:e.length;return t?Ze(e,Te):[]}function zw(e,t){var a=e==null?0:e.length;return a?(t=t===n?1:re(t),Ze(e,t)):[]}function Vw(e){for(var t=-1,a=e==null?0:e.length,s={};++t<a;){var _=e[t];s[_[0]]=_[1]}return s}function w_(e){return e&&e.length?e[0]:n}function qw(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=a==null?0:re(a);return _<0&&(_=ze(s+_,0)),Vo(e,t,_)}function Kw(e){var t=e==null?0:e.length;return t?Bn(e,0,-1):[]}var jw=pe(function(e){var t=Ae(e,kc);return t.length&&t[0]===e[0]?xc(t):[]}),Xw=pe(function(e){var t=Fn(e),a=Ae(e,kc);return t===Fn(a)?t=n:a.pop(),a.length&&a[0]===e[0]?xc(a,q(t,2)):[]}),Yw=pe(function(e){var t=Fn(e),a=Ae(e,kc);return t=typeof t=="function"?t:n,t&&a.pop(),a.length&&a[0]===e[0]?xc(a,n,t):[]});function Zw(e,t){return e==null?"":KS.call(e,t)}function Fn(e){var t=e==null?0:e.length;return t?e[t-1]:n}function Jw(e,t,a){var s=e==null?0:e.length;if(!s)return-1;var _=s;return a!==n&&(_=re(a),_=_<0?ze(s+_,0):tn(_,s-1)),t===t?ES(e,t,_):Ha(e,ol,_,!0)}function Qw(e,t){return e&&e.length?Dl(e,re(t)):n}var ev=pe(v_);function v_(e,t){return e&&e.length&&t&&t.length?wc(e,t):e}function nv(e,t,a){return e&&e.length&&t&&t.length?wc(e,t,q(a,2)):e}function tv(e,t,a){return e&&e.length&&t&&t.length?wc(e,t,n,a):e}var ov=yt(function(e,t){var a=e==null?0:e.length,s=gc(e,t);return Bl(e,Ae(t,function(_){return St(_,a)?+_:_}).sort(Kl)),s});function rv(e,t){var a=[];if(!(e&&e.length))return a;var s=-1,_=[],f=e.length;for(t=q(t,3);++s<f;){var T=e[s];t(T,s,e)&&(a.push(T),_.push(s))}return Bl(e,_),a}function $c(e){return e==null?e:ZS.call(e)}function av(e,t,a){var s=e==null?0:e.length;return s?(a&&typeof a!="number"&&sn(e,t,a)?(t=0,a=s):(t=t==null?0:re(t),a=a===n?s:re(a)),Bn(e,t,a)):[]}function iv(e,t){return ci(e,t)}function sv(e,t,a){return Ic(e,t,q(a,2))}function cv(e,t){var a=e==null?0:e.length;if(a){var s=ci(e,t);if(s<a&&qn(e[s],t))return s}return-1}function pv(e,t){return ci(e,t,!0)}function dv(e,t,a){return Ic(e,t,q(a,2),!0)}function mv(e,t){var a=e==null?0:e.length;if(a){var s=ci(e,t,!0)-1;if(qn(e[s],t))return s}return-1}function lv(e){return e&&e.length?Wl(e):[]}function _v(e,t){return e&&e.length?Wl(e,q(t,2)):[]}function uv(e){var t=e==null?0:e.length;return t?Bn(e,1,t):[]}function gv(e,t,a){return e&&e.length?(t=a||t===n?1:re(t),Bn(e,0,t<0?0:t)):[]}function fv(e,t,a){var s=e==null?0:e.length;return s?(t=a||t===n?1:re(t),t=s-t,Bn(e,t<0?0:t,s)):[]}function hv(e,t){return e&&e.length?pi(e,q(t,3),!1,!0):[]}function Tv(e,t){return e&&e.length?pi(e,q(t,3)):[]}var xv=pe(function(e){return jt(Ze(e,1,Be,!0))}),yv=pe(function(e){var t=Fn(e);return Be(t)&&(t=n),jt(Ze(e,1,Be,!0),q(t,2))}),Sv=pe(function(e){var t=Fn(e);return t=typeof t=="function"?t:n,jt(Ze(e,1,Be,!0),n,t)});function bv(e){return e&&e.length?jt(e):[]}function wv(e,t){return e&&e.length?jt(e,q(t,2)):[]}function vv(e,t){return t=typeof t=="function"?t:n,e&&e.length?jt(e,n,t):[]}function zc(e){if(!(e&&e.length))return[];var t=0;return e=Ht(e,function(a){if(Be(a))return t=ze(a.length,t),!0}),sc(t,function(a){return Ae(e,rc(a))})}function A_(e,t){if(!(e&&e.length))return[];var a=zc(e);return t==null?a:Ae(a,function(s){return wn(t,n,s)})}var Av=pe(function(e,t){return Be(e)?Xr(e,t):[]}),Iv=pe(function(e){return Lc(Ht(e,Be))}),Cv=pe(function(e){var t=Fn(e);return Be(t)&&(t=n),Lc(Ht(e,Be),q(t,2))}),Lv=pe(function(e){var t=Fn(e);return t=typeof t=="function"?t:n,Lc(Ht(e,Be),n,t)}),kv=pe(zc);function Pv(e,t){return $l(e||[],t||[],jr)}function Ev(e,t){return $l(e||[],t||[],Jr)}var Nv=pe(function(e){var t=e.length,a=t>1?e[t-1]:n;return a=typeof a=="function"?(e.pop(),a):n,A_(e,a)});function I_(e){var t=u(e);return t.__chain__=!0,t}function Rv(e,t){return t(e),e}function Ti(e,t){return t(e)}var Dv=yt(function(e){var t=e.length,a=t?e[0]:0,s=this.__wrapped__,_=function(f){return gc(f,e)};return t>1||this.__actions__.length||!(s instanceof me)||!St(a)?this.thru(_):(s=s.slice(a,+a+(t?1:0)),s.__actions__.push({func:Ti,args:[_],thisArg:n}),new Mn(s,this.__chain__).thru(function(f){return t&&!f.length&&f.push(n),f}))});function Mv(){return I_(this)}function Ov(){return new Mn(this.value(),this.__chain__)}function Bv(){this.__values__===n&&(this.__values__=U_(this.value()));var e=this.__index__>=this.__values__.length,t=e?n:this.__values__[this.__index__++];return{done:e,value:t}}function Fv(){return this}function Wv(e){for(var t,a=this;a instanceof oi;){var s=x_(a);s.__index__=0,s.__values__=n,t?_.__wrapped__=s:t=s;var _=s;a=a.__wrapped__}return _.__wrapped__=e,t}function Uv(){var e=this.__wrapped__;if(e instanceof me){var t=e;return this.__actions__.length&&(t=new me(this)),t=t.reverse(),t.__actions__.push({func:Ti,args:[$c],thisArg:n}),new Mn(t,this.__chain__)}return this.thru($c)}function Gv(){return Hl(this.__wrapped__,this.__actions__)}var Hv=di(function(e,t,a){he.call(e,a)?++e[a]:Tt(e,a,1)});function $v(e,t,a){var s=ne(e)?nl:Rb;return a&&sn(e,t,a)&&(t=n),s(e,q(t,3))}function zv(e,t){var a=ne(e)?Ht:Al;return a(e,q(t,3))}var Vv=Ql(y_),qv=Ql(S_);function Kv(e,t){return Ze(xi(e,t),1)}function jv(e,t){return Ze(xi(e,t),Te)}function Xv(e,t,a){return a=a===n?1:re(a),Ze(xi(e,t),a)}function C_(e,t){var a=ne(e)?Rn:Kt;return a(e,q(t,3))}function L_(e,t){var a=ne(e)?uS:vl;return a(e,q(t,3))}var Yv=di(function(e,t,a){he.call(e,a)?e[a].push(t):Tt(e,a,[t])});function Zv(e,t,a,s){e=_n(e)?e:tr(e),a=a&&!s?re(a):0;var _=e.length;return a<0&&(a=ze(_+a,0)),vi(e)?a<=_&&e.indexOf(t,a)>-1:!!_&&Vo(e,t,a)>-1}var Jv=pe(function(e,t,a){var s=-1,_=typeof t=="function",f=_n(e)?A(e.length):[];return Kt(e,function(T){f[++s]=_?wn(t,T,a):Yr(T,t,a)}),f}),Qv=di(function(e,t,a){Tt(e,a,t)});function xi(e,t){var a=ne(e)?Ae:El;return a(e,q(t,3))}function e1(e,t,a,s){return e==null?[]:(ne(t)||(t=t==null?[]:[t]),a=s?n:a,ne(a)||(a=a==null?[]:[a]),Ml(e,t,a))}var n1=di(function(e,t,a){e[a?0:1].push(t)},function(){return[[],[]]});function t1(e,t,a){var s=ne(e)?tc:al,_=arguments.length<3;return s(e,q(t,4),a,_,Kt)}function o1(e,t,a){var s=ne(e)?gS:al,_=arguments.length<3;return s(e,q(t,4),a,_,vl)}function r1(e,t){var a=ne(e)?Ht:Al;return a(e,bi(q(t,3)))}function a1(e){var t=ne(e)?yl:Zb;return t(e)}function i1(e,t,a){(a?sn(e,t,a):t===n)?t=1:t=re(t);var s=ne(e)?Lb:Jb;return s(e,t)}function s1(e){var t=ne(e)?kb:ew;return t(e)}function c1(e){if(e==null)return 0;if(_n(e))return vi(e)?Ko(e):e.length;var t=on(e);return t==Hn||t==$n?e.size:Sc(e).length}function p1(e,t,a){var s=ne(e)?oc:nw;return a&&sn(e,t,a)&&(t=n),s(e,q(t,3))}var d1=pe(function(e,t){if(e==null)return[];var a=t.length;return a>1&&sn(e,t[0],t[1])?t=[]:a>2&&sn(t[0],t[1],t[2])&&(t=[t[0]]),Ml(e,Ze(t,1),[])}),yi=zS||function(){return qe.Date.now()};function m1(e,t){if(typeof t!="function")throw new Dn(l);return e=re(e),function(){if(--e<1)return t.apply(this,arguments)}}function k_(e,t,a){return t=a?n:t,t=e&&t==null?e.length:t,xt(e,Q,n,n,n,n,t)}function P_(e,t){var a;if(typeof t!="function")throw new Dn(l);return e=re(e),function(){return--e>0&&(a=t.apply(this,arguments)),e<=1&&(t=n),a}}var Vc=pe(function(e,t,a){var s=G;if(a.length){var _=zt(a,er(Vc));s|=ie}return xt(e,s,t,a,_)}),E_=pe(function(e,t,a){var s=G|O;if(a.length){var _=zt(a,er(E_));s|=ie}return xt(t,s,e,a,_)});function N_(e,t,a){t=a?n:t;var s=xt(e,J,n,n,n,n,n,t);return s.placeholder=N_.placeholder,s}function R_(e,t,a){t=a?n:t;var s=xt(e,ce,n,n,n,n,n,t);return s.placeholder=R_.placeholder,s}function D_(e,t,a){var s,_,f,T,y,v,k=0,P=!1,R=!1,U=!0;if(typeof e!="function")throw new Dn(l);t=Wn(t)||0,Ce(a)&&(P=!!a.leading,R="maxWait"in a,f=R?ze(Wn(a.maxWait)||0,t):f,U="trailing"in a?!!a.trailing:U);function V(Fe){var Kn=s,vt=_;return s=_=n,k=Fe,T=e.apply(vt,Kn),T}function K(Fe){return k=Fe,y=na(de,t),P?V(Fe):T}function se(Fe){var Kn=Fe-v,vt=Fe-k,Q_=t-Kn;return R?tn(Q_,f-vt):Q_}function j(Fe){var Kn=Fe-v,vt=Fe-k;return v===n||Kn>=t||Kn<0||R&&vt>=f}function de(){var Fe=yi();if(j(Fe))return le(Fe);y=na(de,se(Fe))}function le(Fe){return y=n,U&&s?V(Fe):(s=_=n,T)}function Cn(){y!==n&&zl(y),k=0,s=v=_=y=n}function cn(){return y===n?T:le(yi())}function Ln(){var Fe=yi(),Kn=j(Fe);if(s=arguments,_=this,v=Fe,Kn){if(y===n)return K(v);if(R)return zl(y),y=na(de,t),V(v)}return y===n&&(y=na(de,t)),T}return Ln.cancel=Cn,Ln.flush=cn,Ln}var l1=pe(function(e,t){return wl(e,1,t)}),_1=pe(function(e,t,a){return wl(e,Wn(t)||0,a)});function u1(e){return xt(e,Sn)}function Si(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Dn(l);var a=function(){var s=arguments,_=t?t.apply(this,s):s[0],f=a.cache;if(f.has(_))return f.get(_);var T=e.apply(this,s);return a.cache=f.set(_,T)||f,T};return a.cache=new(Si.Cache||ht),a}Si.Cache=ht;function bi(e){if(typeof e!="function")throw new Dn(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function g1(e){return P_(2,e)}var f1=tw(function(e,t){t=t.length==1&&ne(t[0])?Ae(t[0],vn(q())):Ae(Ze(t,1),vn(q()));var a=t.length;return pe(function(s){for(var _=-1,f=tn(s.length,a);++_<f;)s[_]=t[_].call(this,s[_]);return wn(e,this,s)})}),qc=pe(function(e,t){var a=zt(t,er(qc));return xt(e,ie,n,t,a)}),M_=pe(function(e,t){var a=zt(t,er(M_));return xt(e,Y,n,t,a)}),h1=yt(function(e,t){return xt(e,ke,n,n,n,t)});function T1(e,t){if(typeof e!="function")throw new Dn(l);return t=t===n?t:re(t),pe(e,t)}function x1(e,t){if(typeof e!="function")throw new Dn(l);return t=t==null?0:ze(re(t),0),pe(function(a){var s=a[t],_=Yt(a,0,t);return s&&$t(_,s),wn(e,this,_)})}function y1(e,t,a){var s=!0,_=!0;if(typeof e!="function")throw new Dn(l);return Ce(a)&&(s="leading"in a?!!a.leading:s,_="trailing"in a?!!a.trailing:_),D_(e,t,{leading:s,maxWait:t,trailing:_})}function S1(e){return k_(e,1)}function b1(e,t){return qc(Pc(t),e)}function w1(){if(!arguments.length)return[];var e=arguments[0];return ne(e)?e:[e]}function v1(e){return On(e,C)}function A1(e,t){return t=typeof t=="function"?t:n,On(e,C,t)}function I1(e){return On(e,S|C)}function C1(e,t){return t=typeof t=="function"?t:n,On(e,S|C,t)}function L1(e,t){return t==null||bl(e,t,Ke(t))}function qn(e,t){return e===t||e!==e&&t!==t}var k1=ui(Tc),P1=ui(function(e,t){return e>=t}),So=Ll(function(){return arguments}())?Ll:function(e){return Pe(e)&&he.call(e,"callee")&&!ul.call(e,"callee")},ne=A.isArray,E1=Xm?vn(Xm):Wb;function _n(e){return e!=null&&wi(e.length)&&!bt(e)}function Be(e){return Pe(e)&&_n(e)}function N1(e){return e===!0||e===!1||Pe(e)&&an(e)==fe}var Zt=qS||op,R1=Ym?vn(Ym):Ub;function D1(e){return Pe(e)&&e.nodeType===1&&!ta(e)}function M1(e){if(e==null)return!0;if(_n(e)&&(ne(e)||typeof e=="string"||typeof e.splice=="function"||Zt(e)||nr(e)||So(e)))return!e.length;var t=on(e);if(t==Hn||t==$n)return!e.size;if(ea(e))return!Sc(e).length;for(var a in e)if(he.call(e,a))return!1;return!0}function O1(e,t){return Zr(e,t)}function B1(e,t,a){a=typeof a=="function"?a:n;var s=a?a(e,t):n;return s===n?Zr(e,t,n,a):!!s}function Kc(e){if(!Pe(e))return!1;var t=an(e);return t==Gt||t==Oe||typeof e.message=="string"&&typeof e.name=="string"&&!ta(e)}function F1(e){return typeof e=="number"&&fl(e)}function bt(e){if(!Ce(e))return!1;var t=an(e);return t==Ho||t==Oa||t==Or||t==c0}function O_(e){return typeof e=="number"&&e==re(e)}function wi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ve}function Ce(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Pe(e){return e!=null&&typeof e=="object"}var B_=Zm?vn(Zm):Hb;function W1(e,t){return e===t||yc(e,t,Bc(t))}function U1(e,t,a){return a=typeof a=="function"?a:n,yc(e,t,Bc(t),a)}function G1(e){return F_(e)&&e!=+e}function H1(e){if(Aw(e))throw new ee(c);return kl(e)}function $1(e){return e===null}function z1(e){return e==null}function F_(e){return typeof e=="number"||Pe(e)&&an(e)==Br}function ta(e){if(!Pe(e)||an(e)!=gt)return!1;var t=Ya(e);if(t===null)return!0;var a=he.call(t,"constructor")&&t.constructor;return typeof a=="function"&&a instanceof a&&qa.call(a)==US}var jc=Jm?vn(Jm):$b;function V1(e){return O_(e)&&e>=-ve&&e<=ve}var W_=Qm?vn(Qm):zb;function vi(e){return typeof e=="string"||!ne(e)&&Pe(e)&&an(e)==Wr}function In(e){return typeof e=="symbol"||Pe(e)&&an(e)==Ba}var nr=el?vn(el):Vb;function q1(e){return e===n}function K1(e){return Pe(e)&&on(e)==Ur}function j1(e){return Pe(e)&&an(e)==d0}var X1=ui(bc),Y1=ui(function(e,t){return e<=t});function U_(e){if(!e)return[];if(_n(e))return vi(e)?zn(e):ln(e);if($r&&e[$r])return LS(e[$r]());var t=on(e),a=t==Hn?pc:t==$n?$a:tr;return a(e)}function wt(e){if(!e)return e===0?e:0;if(e=Wn(e),e===Te||e===-Te){var t=e<0?-1:1;return t*Me}return e===e?e:0}function re(e){var t=wt(e),a=t%1;return t===t?a?t-a:t:0}function G_(e){return e?ho(re(e),0,mn):0}function Wn(e){if(typeof e=="number")return e;if(In(e))return dn;if(Ce(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=il(e);var a=E0.test(e);return a||R0.test(e)?mS(e.slice(2),a?2:8):P0.test(e)?dn:+e}function H_(e){return Zn(e,un(e))}function Z1(e){return e?ho(re(e),-ve,ve):e===0?e:0}function ge(e){return e==null?"":An(e)}var J1=Jo(function(e,t){if(ea(t)||_n(t)){Zn(t,Ke(t),e);return}for(var a in t)he.call(t,a)&&jr(e,a,t[a])}),$_=Jo(function(e,t){Zn(t,un(t),e)}),Ai=Jo(function(e,t,a,s){Zn(t,un(t),e,s)}),Q1=Jo(function(e,t,a,s){Zn(t,Ke(t),e,s)}),eA=yt(gc);function nA(e,t){var a=Zo(e);return t==null?a:Sl(a,t)}var tA=pe(function(e,t){e=xe(e);var a=-1,s=t.length,_=s>2?t[2]:n;for(_&&sn(t[0],t[1],_)&&(s=1);++a<s;)for(var f=t[a],T=un(f),y=-1,v=T.length;++y<v;){var k=T[y],P=e[k];(P===n||qn(P,jo[k])&&!he.call(e,k))&&(e[k]=f[k])}return e}),oA=pe(function(e){return e.push(n,i_),wn(z_,n,e)});function rA(e,t){return tl(e,q(t,3),Yn)}function aA(e,t){return tl(e,q(t,3),hc)}function iA(e,t){return e==null?e:fc(e,q(t,3),un)}function sA(e,t){return e==null?e:Il(e,q(t,3),un)}function cA(e,t){return e&&Yn(e,q(t,3))}function pA(e,t){return e&&hc(e,q(t,3))}function dA(e){return e==null?[]:ii(e,Ke(e))}function mA(e){return e==null?[]:ii(e,un(e))}function Xc(e,t,a){var s=e==null?n:To(e,t);return s===n?a:s}function lA(e,t){return e!=null&&p_(e,t,Mb)}function Yc(e,t){return e!=null&&p_(e,t,Ob)}var _A=n_(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=Ka.call(t)),e[t]=a},Jc(gn)),uA=n_(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=Ka.call(t)),he.call(e,t)?e[t].push(a):e[t]=[a]},q),gA=pe(Yr);function Ke(e){return _n(e)?xl(e):Sc(e)}function un(e){return _n(e)?xl(e,!0):qb(e)}function fA(e,t){var a={};return t=q(t,3),Yn(e,function(s,_,f){Tt(a,t(s,_,f),s)}),a}function hA(e,t){var a={};return t=q(t,3),Yn(e,function(s,_,f){Tt(a,_,t(s,_,f))}),a}var TA=Jo(function(e,t,a){si(e,t,a)}),z_=Jo(function(e,t,a,s){si(e,t,a,s)}),xA=yt(function(e,t){var a={};if(e==null)return a;var s=!1;t=Ae(t,function(f){return f=Xt(f,e),s||(s=f.length>1),f}),Zn(e,Mc(e),a),s&&(a=On(a,S|N|C,_w));for(var _=t.length;_--;)Cc(a,t[_]);return a});function yA(e,t){return V_(e,bi(q(t)))}var SA=yt(function(e,t){return e==null?{}:jb(e,t)});function V_(e,t){if(e==null)return{};var a=Ae(Mc(e),function(s){return[s]});return t=q(t),Ol(e,a,function(s,_){return t(s,_[0])})}function bA(e,t,a){t=Xt(t,e);var s=-1,_=t.length;for(_||(_=1,e=n);++s<_;){var f=e==null?n:e[Jn(t[s])];f===n&&(s=_,f=a),e=bt(f)?f.call(e):f}return e}function wA(e,t,a){return e==null?e:Jr(e,t,a)}function vA(e,t,a,s){return s=typeof s=="function"?s:n,e==null?e:Jr(e,t,a,s)}var q_=r_(Ke),K_=r_(un);function AA(e,t,a){var s=ne(e),_=s||Zt(e)||nr(e);if(t=q(t,4),a==null){var f=e&&e.constructor;_?a=s?new f:[]:Ce(e)?a=bt(f)?Zo(Ya(e)):{}:a={}}return(_?Rn:Yn)(e,function(T,y,v){return t(a,T,y,v)}),a}function IA(e,t){return e==null?!0:Cc(e,t)}function CA(e,t,a){return e==null?e:Gl(e,t,Pc(a))}function LA(e,t,a,s){return s=typeof s=="function"?s:n,e==null?e:Gl(e,t,Pc(a),s)}function tr(e){return e==null?[]:cc(e,Ke(e))}function kA(e){return e==null?[]:cc(e,un(e))}function PA(e,t,a){return a===n&&(a=t,t=n),a!==n&&(a=Wn(a),a=a===a?a:0),t!==n&&(t=Wn(t),t=t===t?t:0),ho(Wn(e),t,a)}function EA(e,t,a){return t=wt(t),a===n?(a=t,t=0):a=wt(a),e=Wn(e),Bb(e,t,a)}function NA(e,t,a){if(a&&typeof a!="boolean"&&sn(e,t,a)&&(t=a=n),a===n&&(typeof t=="boolean"?(a=t,t=n):typeof e=="boolean"&&(a=e,e=n)),e===n&&t===n?(e=0,t=1):(e=wt(e),t===n?(t=e,e=0):t=wt(t)),e>t){var s=e;e=t,t=s}if(a||e%1||t%1){var _=hl();return tn(e+_*(t-e+dS("1e-"+((_+"").length-1))),t)}return vc(e,t)}var RA=Qo(function(e,t,a){return t=t.toLowerCase(),e+(a?j_(t):t)});function j_(e){return Zc(ge(e).toLowerCase())}function X_(e){return e=ge(e),e&&e.replace(M0,wS).replace(eS,"")}function DA(e,t,a){e=ge(e),t=An(t);var s=e.length;a=a===n?s:ho(re(a),0,s);var _=a;return a-=t.length,a>=0&&e.slice(a,_)==t}function MA(e){return e=ge(e),e&&g0.test(e)?e.replace(Im,vS):e}function OA(e){return e=ge(e),e&&S0.test(e)?e.replace(qs,"\\$&"):e}var BA=Qo(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}),FA=Qo(function(e,t,a){return e+(a?" ":"")+t.toLowerCase()}),WA=Jl("toLowerCase");function UA(e,t,a){e=ge(e),t=re(t);var s=t?Ko(e):0;if(!t||s>=t)return e;var _=(t-s)/2;return _i(ei(_),a)+e+_i(Qa(_),a)}function GA(e,t,a){e=ge(e),t=re(t);var s=t?Ko(e):0;return t&&s<t?e+_i(t-s,a):e}function HA(e,t,a){e=ge(e),t=re(t);var s=t?Ko(e):0;return t&&s<t?_i(t-s,a)+e:e}function $A(e,t,a){return a||t==null?t=0:t&&(t=+t),YS(ge(e).replace(Ks,""),t||0)}function zA(e,t,a){return(a?sn(e,t,a):t===n)?t=1:t=re(t),Ac(ge(e),t)}function VA(){var e=arguments,t=ge(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var qA=Qo(function(e,t,a){return e+(a?"_":"")+t.toLowerCase()});function KA(e,t,a){return a&&typeof a!="number"&&sn(e,t,a)&&(t=a=n),a=a===n?mn:a>>>0,a?(e=ge(e),e&&(typeof t=="string"||t!=null&&!jc(t))&&(t=An(t),!t&&qo(e))?Yt(zn(e),0,a):e.split(t,a)):[]}var jA=Qo(function(e,t,a){return e+(a?" ":"")+Zc(t)});function XA(e,t,a){return e=ge(e),a=a==null?0:ho(re(a),0,e.length),t=An(t),e.slice(a,a+t.length)==t}function YA(e,t,a){var s=u.templateSettings;a&&sn(e,t,a)&&(t=n),e=ge(e),t=Ai({},t,s,a_);var _=Ai({},t.imports,s.imports,a_),f=Ke(_),T=cc(_,f),y,v,k=0,P=t.interpolate||Fa,R="__p += '",U=dc((t.escape||Fa).source+"|"+P.source+"|"+(P===Cm?k0:Fa).source+"|"+(t.evaluate||Fa).source+"|$","g"),V="//# sourceURL="+(he.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++aS+"]")+`
`;e.replace(U,function(j,de,le,Cn,cn,Ln){return le||(le=Cn),R+=e.slice(k,Ln).replace(O0,AS),de&&(y=!0,R+=`' +
__e(`+de+`) +
'`),cn&&(v=!0,R+=`';
`+cn+`;
__p += '`),le&&(R+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),k=Ln+j.length,j}),R+=`';
`;var K=he.call(t,"variable")&&t.variable;if(!K)R=`with (obj) {
`+R+`
}
`;else if(C0.test(K))throw new ee(g);R=(v?R.replace(m0,""):R).replace(l0,"$1").replace(_0,"$1;"),R="function("+(K||"obj")+`) {
`+(K?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var se=Z_(function(){return ue(f,V+"return "+R).apply(n,T)});if(se.source=R,Kc(se))throw se;return se}function ZA(e){return ge(e).toLowerCase()}function JA(e){return ge(e).toUpperCase()}function QA(e,t,a){if(e=ge(e),e&&(a||t===n))return il(e);if(!e||!(t=An(t)))return e;var s=zn(e),_=zn(t),f=sl(s,_),T=cl(s,_)+1;return Yt(s,f,T).join("")}function eI(e,t,a){if(e=ge(e),e&&(a||t===n))return e.slice(0,dl(e)+1);if(!e||!(t=An(t)))return e;var s=zn(e),_=cl(s,zn(t))+1;return Yt(s,0,_).join("")}function nI(e,t,a){if(e=ge(e),e&&(a||t===n))return e.replace(Ks,"");if(!e||!(t=An(t)))return e;var s=zn(e),_=sl(s,zn(t));return Yt(s,_).join("")}function tI(e,t){var a=rn,s=bn;if(Ce(t)){var _="separator"in t?t.separator:_;a="length"in t?re(t.length):a,s="omission"in t?An(t.omission):s}e=ge(e);var f=e.length;if(qo(e)){var T=zn(e);f=T.length}if(a>=f)return e;var y=a-Ko(s);if(y<1)return s;var v=T?Yt(T,0,y).join(""):e.slice(0,y);if(_===n)return v+s;if(T&&(y+=v.length-y),jc(_)){if(e.slice(y).search(_)){var k,P=v;for(_.global||(_=dc(_.source,ge(Lm.exec(_))+"g")),_.lastIndex=0;k=_.exec(P);)var R=k.index;v=v.slice(0,R===n?y:R)}}else if(e.indexOf(An(_),y)!=y){var U=v.lastIndexOf(_);U>-1&&(v=v.slice(0,U))}return v+s}function oI(e){return e=ge(e),e&&u0.test(e)?e.replace(Am,NS):e}var rI=Qo(function(e,t,a){return e+(a?" ":"")+t.toUpperCase()}),Zc=Jl("toUpperCase");function Y_(e,t,a){return e=ge(e),t=a?n:t,t===n?CS(e)?MS(e):TS(e):e.match(t)||[]}var Z_=pe(function(e,t){try{return wn(e,n,t)}catch(a){return Kc(a)?a:new ee(a)}}),aI=yt(function(e,t){return Rn(t,function(a){a=Jn(a),Tt(e,a,Vc(e[a],e))}),e});function iI(e){var t=e==null?0:e.length,a=q();return e=t?Ae(e,function(s){if(typeof s[1]!="function")throw new Dn(l);return[a(s[0]),s[1]]}):[],pe(function(s){for(var _=-1;++_<t;){var f=e[_];if(wn(f[0],this,s))return wn(f[1],this,s)}})}function sI(e){return Nb(On(e,S))}function Jc(e){return function(){return e}}function cI(e,t){return e==null||e!==e?t:e}var pI=e_(),dI=e_(!0);function gn(e){return e}function Qc(e){return Pl(typeof e=="function"?e:On(e,S))}function mI(e){return Nl(On(e,S))}function lI(e,t){return Rl(e,On(t,S))}var _I=pe(function(e,t){return function(a){return Yr(a,e,t)}}),uI=pe(function(e,t){return function(a){return Yr(e,a,t)}});function ep(e,t,a){var s=Ke(t),_=ii(t,s);a==null&&!(Ce(t)&&(_.length||!s.length))&&(a=t,t=e,e=this,_=ii(t,Ke(t)));var f=!(Ce(a)&&"chain"in a)||!!a.chain,T=bt(e);return Rn(_,function(y){var v=t[y];e[y]=v,T&&(e.prototype[y]=function(){var k=this.__chain__;if(f||k){var P=e(this.__wrapped__),R=P.__actions__=ln(this.__actions__);return R.push({func:v,args:arguments,thisArg:e}),P.__chain__=k,P}return v.apply(e,$t([this.value()],arguments))})}),e}function gI(){return qe._===this&&(qe._=GS),this}function np(){}function fI(e){return e=re(e),pe(function(t){return Dl(t,e)})}var hI=Nc(Ae),TI=Nc(nl),xI=Nc(oc);function J_(e){return Wc(e)?rc(Jn(e)):Xb(e)}function yI(e){return function(t){return e==null?n:To(e,t)}}var SI=t_(),bI=t_(!0);function tp(){return[]}function op(){return!1}function wI(){return{}}function vI(){return""}function AI(){return!0}function II(e,t){if(e=re(e),e<1||e>ve)return[];var a=mn,s=tn(e,mn);t=q(t),e-=mn;for(var _=sc(s,t);++a<e;)t(a);return _}function CI(e){return ne(e)?Ae(e,Jn):In(e)?[e]:ln(T_(ge(e)))}function LI(e){var t=++WS;return ge(e)+t}var kI=li(function(e,t){return e+t},0),PI=Rc("ceil"),EI=li(function(e,t){return e/t},1),NI=Rc("floor");function RI(e){return e&&e.length?ai(e,gn,Tc):n}function DI(e,t){return e&&e.length?ai(e,q(t,2),Tc):n}function MI(e){return rl(e,gn)}function OI(e,t){return rl(e,q(t,2))}function BI(e){return e&&e.length?ai(e,gn,bc):n}function FI(e,t){return e&&e.length?ai(e,q(t,2),bc):n}var WI=li(function(e,t){return e*t},1),UI=Rc("round"),GI=li(function(e,t){return e-t},0);function HI(e){return e&&e.length?ic(e,gn):0}function $I(e,t){return e&&e.length?ic(e,q(t,2)):0}return u.after=m1,u.ary=k_,u.assign=J1,u.assignIn=$_,u.assignInWith=Ai,u.assignWith=Q1,u.at=eA,u.before=P_,u.bind=Vc,u.bindAll=aI,u.bindKey=E_,u.castArray=w1,u.chain=I_,u.chunk=Nw,u.compact=Rw,u.concat=Dw,u.cond=iI,u.conforms=sI,u.constant=Jc,u.countBy=Hv,u.create=nA,u.curry=N_,u.curryRight=R_,u.debounce=D_,u.defaults=tA,u.defaultsDeep=oA,u.defer=l1,u.delay=_1,u.difference=Mw,u.differenceBy=Ow,u.differenceWith=Bw,u.drop=Fw,u.dropRight=Ww,u.dropRightWhile=Uw,u.dropWhile=Gw,u.fill=Hw,u.filter=zv,u.flatMap=Kv,u.flatMapDeep=jv,u.flatMapDepth=Xv,u.flatten=b_,u.flattenDeep=$w,u.flattenDepth=zw,u.flip=u1,u.flow=pI,u.flowRight=dI,u.fromPairs=Vw,u.functions=dA,u.functionsIn=mA,u.groupBy=Yv,u.initial=Kw,u.intersection=jw,u.intersectionBy=Xw,u.intersectionWith=Yw,u.invert=_A,u.invertBy=uA,u.invokeMap=Jv,u.iteratee=Qc,u.keyBy=Qv,u.keys=Ke,u.keysIn=un,u.map=xi,u.mapKeys=fA,u.mapValues=hA,u.matches=mI,u.matchesProperty=lI,u.memoize=Si,u.merge=TA,u.mergeWith=z_,u.method=_I,u.methodOf=uI,u.mixin=ep,u.negate=bi,u.nthArg=fI,u.omit=xA,u.omitBy=yA,u.once=g1,u.orderBy=e1,u.over=hI,u.overArgs=f1,u.overEvery=TI,u.overSome=xI,u.partial=qc,u.partialRight=M_,u.partition=n1,u.pick=SA,u.pickBy=V_,u.property=J_,u.propertyOf=yI,u.pull=ev,u.pullAll=v_,u.pullAllBy=nv,u.pullAllWith=tv,u.pullAt=ov,u.range=SI,u.rangeRight=bI,u.rearg=h1,u.reject=r1,u.remove=rv,u.rest=T1,u.reverse=$c,u.sampleSize=i1,u.set=wA,u.setWith=vA,u.shuffle=s1,u.slice=av,u.sortBy=d1,u.sortedUniq=lv,u.sortedUniqBy=_v,u.split=KA,u.spread=x1,u.tail=uv,u.take=gv,u.takeRight=fv,u.takeRightWhile=hv,u.takeWhile=Tv,u.tap=Rv,u.throttle=y1,u.thru=Ti,u.toArray=U_,u.toPairs=q_,u.toPairsIn=K_,u.toPath=CI,u.toPlainObject=H_,u.transform=AA,u.unary=S1,u.union=xv,u.unionBy=yv,u.unionWith=Sv,u.uniq=bv,u.uniqBy=wv,u.uniqWith=vv,u.unset=IA,u.unzip=zc,u.unzipWith=A_,u.update=CA,u.updateWith=LA,u.values=tr,u.valuesIn=kA,u.without=Av,u.words=Y_,u.wrap=b1,u.xor=Iv,u.xorBy=Cv,u.xorWith=Lv,u.zip=kv,u.zipObject=Pv,u.zipObjectDeep=Ev,u.zipWith=Nv,u.entries=q_,u.entriesIn=K_,u.extend=$_,u.extendWith=Ai,ep(u,u),u.add=kI,u.attempt=Z_,u.camelCase=RA,u.capitalize=j_,u.ceil=PI,u.clamp=PA,u.clone=v1,u.cloneDeep=I1,u.cloneDeepWith=C1,u.cloneWith=A1,u.conformsTo=L1,u.deburr=X_,u.defaultTo=cI,u.divide=EI,u.endsWith=DA,u.eq=qn,u.escape=MA,u.escapeRegExp=OA,u.every=$v,u.find=Vv,u.findIndex=y_,u.findKey=rA,u.findLast=qv,u.findLastIndex=S_,u.findLastKey=aA,u.floor=NI,u.forEach=C_,u.forEachRight=L_,u.forIn=iA,u.forInRight=sA,u.forOwn=cA,u.forOwnRight=pA,u.get=Xc,u.gt=k1,u.gte=P1,u.has=lA,u.hasIn=Yc,u.head=w_,u.identity=gn,u.includes=Zv,u.indexOf=qw,u.inRange=EA,u.invoke=gA,u.isArguments=So,u.isArray=ne,u.isArrayBuffer=E1,u.isArrayLike=_n,u.isArrayLikeObject=Be,u.isBoolean=N1,u.isBuffer=Zt,u.isDate=R1,u.isElement=D1,u.isEmpty=M1,u.isEqual=O1,u.isEqualWith=B1,u.isError=Kc,u.isFinite=F1,u.isFunction=bt,u.isInteger=O_,u.isLength=wi,u.isMap=B_,u.isMatch=W1,u.isMatchWith=U1,u.isNaN=G1,u.isNative=H1,u.isNil=z1,u.isNull=$1,u.isNumber=F_,u.isObject=Ce,u.isObjectLike=Pe,u.isPlainObject=ta,u.isRegExp=jc,u.isSafeInteger=V1,u.isSet=W_,u.isString=vi,u.isSymbol=In,u.isTypedArray=nr,u.isUndefined=q1,u.isWeakMap=K1,u.isWeakSet=j1,u.join=Zw,u.kebabCase=BA,u.last=Fn,u.lastIndexOf=Jw,u.lowerCase=FA,u.lowerFirst=WA,u.lt=X1,u.lte=Y1,u.max=RI,u.maxBy=DI,u.mean=MI,u.meanBy=OI,u.min=BI,u.minBy=FI,u.stubArray=tp,u.stubFalse=op,u.stubObject=wI,u.stubString=vI,u.stubTrue=AI,u.multiply=WI,u.nth=Qw,u.noConflict=gI,u.noop=np,u.now=yi,u.pad=UA,u.padEnd=GA,u.padStart=HA,u.parseInt=$A,u.random=NA,u.reduce=t1,u.reduceRight=o1,u.repeat=zA,u.replace=VA,u.result=bA,u.round=UI,u.runInContext=b,u.sample=a1,u.size=c1,u.snakeCase=qA,u.some=p1,u.sortedIndex=iv,u.sortedIndexBy=sv,u.sortedIndexOf=cv,u.sortedLastIndex=pv,u.sortedLastIndexBy=dv,u.sortedLastIndexOf=mv,u.startCase=jA,u.startsWith=XA,u.subtract=GI,u.sum=HI,u.sumBy=$I,u.template=YA,u.times=II,u.toFinite=wt,u.toInteger=re,u.toLength=G_,u.toLower=ZA,u.toNumber=Wn,u.toSafeInteger=Z1,u.toString=ge,u.toUpper=JA,u.trim=QA,u.trimEnd=eI,u.trimStart=nI,u.truncate=tI,u.unescape=oI,u.uniqueId=LI,u.upperCase=rI,u.upperFirst=Zc,u.each=C_,u.eachRight=L_,u.first=w_,ep(u,function(){var e={};return Yn(u,function(t,a){he.call(u.prototype,a)||(e[a]=t)}),e}(),{chain:!1}),u.VERSION=o,Rn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){u[e].placeholder=u}),Rn(["drop","take"],function(e,t){me.prototype[e]=function(a){a=a===n?1:ze(re(a),0);var s=this.__filtered__&&!t?new me(this):this.clone();return s.__filtered__?s.__takeCount__=tn(a,s.__takeCount__):s.__views__.push({size:tn(a,mn),type:e+(s.__dir__<0?"Right":"")}),s},me.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Rn(["filter","map","takeWhile"],function(e,t){var a=t+1,s=a==ut||a==Uo;me.prototype[e]=function(_){var f=this.clone();return f.__iteratees__.push({iteratee:q(_,3),type:a}),f.__filtered__=f.__filtered__||s,f}}),Rn(["head","last"],function(e,t){var a="take"+(t?"Right":"");me.prototype[e]=function(){return this[a](1).value()[0]}}),Rn(["initial","tail"],function(e,t){var a="drop"+(t?"":"Right");me.prototype[e]=function(){return this.__filtered__?new me(this):this[a](1)}}),me.prototype.compact=function(){return this.filter(gn)},me.prototype.find=function(e){return this.filter(e).head()},me.prototype.findLast=function(e){return this.reverse().find(e)},me.prototype.invokeMap=pe(function(e,t){return typeof e=="function"?new me(this):this.map(function(a){return Yr(a,e,t)})}),me.prototype.reject=function(e){return this.filter(bi(q(e)))},me.prototype.slice=function(e,t){e=re(e);var a=this;return a.__filtered__&&(e>0||t<0)?new me(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),t!==n&&(t=re(t),a=t<0?a.dropRight(-t):a.take(t-e)),a)},me.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},me.prototype.toArray=function(){return this.take(mn)},Yn(me.prototype,function(e,t){var a=/^(?:filter|find|map|reject)|While$/.test(t),s=/^(?:head|last)$/.test(t),_=u[s?"take"+(t=="last"?"Right":""):t],f=s||/^find/.test(t);!_||(u.prototype[t]=function(){var T=this.__wrapped__,y=s?[1]:arguments,v=T instanceof me,k=y[0],P=v||ne(T),R=function(de){var le=_.apply(u,$t([de],y));return s&&U?le[0]:le};P&&a&&typeof k=="function"&&k.length!=1&&(v=P=!1);var U=this.__chain__,V=!!this.__actions__.length,K=f&&!U,se=v&&!V;if(!f&&P){T=se?T:new me(this);var j=e.apply(T,y);return j.__actions__.push({func:Ti,args:[R],thisArg:n}),new Mn(j,U)}return K&&se?e.apply(this,y):(j=this.thru(R),K?s?j.value()[0]:j.value():j)})}),Rn(["pop","push","shift","sort","splice","unshift"],function(e){var t=za[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",s=/^(?:pop|shift)$/.test(e);u.prototype[e]=function(){var _=arguments;if(s&&!this.__chain__){var f=this.value();return t.apply(ne(f)?f:[],_)}return this[a](function(T){return t.apply(ne(T)?T:[],_)})}}),Yn(me.prototype,function(e,t){var a=u[t];if(a){var s=a.name+"";he.call(Yo,s)||(Yo[s]=[]),Yo[s].push({name:t,func:a})}}),Yo[mi(n,O).name]=[{name:"wrapper",func:n}],me.prototype.clone=ob,me.prototype.reverse=rb,me.prototype.value=ab,u.prototype.at=Dv,u.prototype.chain=Mv,u.prototype.commit=Ov,u.prototype.next=Bv,u.prototype.plant=Wv,u.prototype.reverse=Uv,u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=Gv,u.prototype.first=u.prototype.head,$r&&(u.prototype[$r]=Fv),u},Vt=OS();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(qe._=Vt,define(function(){return Vt})):_o?((_o.exports=Vt)._=Vt,Qs._=Vt):qe._=Vt}).call(Rr)});var mm={};Ee(mm,{css:()=>Vy,default:()=>iD});var Vy,iD,lm=F(()=>{"use strict";r();Vy=`.dapp-core-component__confirmAddressStyles__ledger-confirm-address {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vy));iD={"ledger-confirm-address":"dapp-core-component__confirmAddressStyles__ledger-confirm-address",ledgerConfirmAddress:"dapp-core-component__confirmAddressStyles__ledger-confirm-address","ledger-confirm-address-heading":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading",ledgerConfirmAddressHeading:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading","ledger-confirm-address-section":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section",ledgerConfirmAddressSection:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section","ledger-confirm-address-description":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description",ledgerConfirmAddressDescription:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description","ledger-confirm-address-data":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data",ledgerConfirmAddressData:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data","ledger-confirm-address-footer":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer",ledgerConfirmAddressFooter:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer"}});var _m={};Ee(_m,{css:()=>jy,default:()=>pD});var jy,pD,um=F(()=>{"use strict";r();jy=`.dapp-core-component__ledgerConnectStyles__login-connect-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jy));pD={"login-connect-container":"dapp-core-component__ledgerConnectStyles__login-connect-container",loginConnectContainer:"dapp-core-component__ledgerConnectStyles__login-connect-container","login-connect-container-content":"dapp-core-component__ledgerConnectStyles__login-connect-container-content",loginConnectContainerContent:"dapp-core-component__ledgerConnectStyles__login-connect-container-content","login-connect-container-heading":"dapp-core-component__ledgerConnectStyles__login-connect-container-heading",loginConnectContainerHeading:"dapp-core-component__ledgerConnectStyles__login-connect-container-heading","login-connect-container-description":"dapp-core-component__ledgerConnectStyles__login-connect-container-description",loginConnectContainerDescription:"dapp-core-component__ledgerConnectStyles__login-connect-container-description","login-connect-container-error":"dapp-core-component__ledgerConnectStyles__login-connect-container-error",loginConnectContainerError:"dapp-core-component__ledgerConnectStyles__login-connect-container-error","login-connect-container-icon":"dapp-core-component__ledgerConnectStyles__login-connect-container-icon",loginConnectContainerIcon:"dapp-core-component__ledgerConnectStyles__login-connect-container-icon","login-connect-container-footer":"dapp-core-component__ledgerConnectStyles__login-connect-container-footer",loginConnectContainerFooter:"dapp-core-component__ledgerConnectStyles__login-connect-container-footer","login-connect-container-button":"dapp-core-component__ledgerConnectStyles__login-connect-container-button",loginConnectContainerButton:"dapp-core-component__ledgerConnectStyles__login-connect-container-button","login-connect-container-link":"dapp-core-component__ledgerConnectStyles__login-connect-container-link",loginConnectContainerLink:"dapp-core-component__ledgerConnectStyles__login-connect-container-link"}});var gm={};Ee(gm,{css:()=>Zy,default:()=>mD});var Zy,mD,fm=F(()=>{"use strict";r();Zy=`.dapp-core-component__progressBarStyles__ledger-progress-bar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zy));mD={"ledger-progress-bar":"dapp-core-component__progressBarStyles__ledger-progress-bar",ledgerProgressBar:"dapp-core-component__progressBarStyles__ledger-progress-bar","ledger-progress-bar-track":"dapp-core-component__progressBarStyles__ledger-progress-bar-track",ledgerProgressBarTrack:"dapp-core-component__progressBarStyles__ledger-progress-bar-track","ledger-progress-bar-thumb":"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb",ledgerProgressBarThumb:"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb"}});var Tm={};Ee(Tm,{css:()=>Qy,default:()=>_D});var Qy,_D,xm=F(()=>{"use strict";r();Qy=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qy));_D={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var bm={};Ee(bm,{css:()=>a0,default:()=>gD});var a0,gD,wm=F(()=>{"use strict";r();a0=`.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container {
  padding: 48px 16px;
}
@media (min-width: 768px) {
  .dapp-core-component__ledgerLoginContainerStyles__ledger-login-container {
    padding: 48px 40px;
  }
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content {
  border-radius: 24px;
  border: none;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  max-width: 400px;
}
@media (min-width: 768px) {
  .dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content {
    max-width: 730px;
  }
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header {
  position: absolute;
  background-color: transparent;
  padding: 0;
  right: 20px;
  top: 16px;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text {
  display: none;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button {
  float: none;
  position: relative;
  top: auto;
  padding: 0;
  cursor: pointer;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button:hover {
  background-color: transparent;
}
.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content .dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  overflow: hidden;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(a0));gD={"ledger-login-container":"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container",ledgerLoginContainer:"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container","ledger-modal-dialog-content":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content",ledgerModalDialogContent:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content","ledger-modal-header":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header",ledgerModalHeader:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header","ledger-modal-header-text":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text",ledgerModalHeaderText:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text","ledger-modal-close-button":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button",ledgerModalCloseButton:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button","ledger-modal-body":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body",ledgerModalBody:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body"}});var TD={};Ee(TD,{LedgerLoginContainer:()=>hD});module.exports=Le(TD);r();var Ds=M(require("react")),i0=M(require("classnames"));r();var Lu=M(require("react"));r();var ra=M(require("react"));r();ir();var Au=()=>!Io();var PC=()=>B(void 0,null,function*(){return yield Promise.resolve().then(()=>(hp(),fp))}),EC=()=>(hp(),Le(fp)).default,Tp=Au();function Cu({ssrGlobalImportCallback:n,ssrImportCallback:o,clientImportCallback:i}){let[c,l]=ra.default.useState(Tp?void 0:EC()),[g,h]=ra.default.useState(Tp||i==null?void 0:i()),w=()=>B(this,null,function*(){(n?n():PC()).then(x=>l(x.default)),o==null||o().then(x=>h(x.default))});return(0,ra.useEffect)(()=>{Tp&&w()},[]),{globalStyles:c,styles:g}}function _e(n,o){return i=>{let{globalStyles:c,styles:l}=Cu({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Lu.default.createElement(n,Z(E({},i),{globalStyles:c!=null?c:{},styles:l!=null?l:{}}))}}r();r();var cg=M(require("react"));r();r();r();var eo=M(require("react")),ag=require("react"),ig=require("react"),Mp=M(require("classnames")),sg=require("react-dom");te();r();var eg=M(require("react")),ng=M(require("classnames"));var DC=({className:n,children:o,styles:i})=>eg.default.createElement("div",{className:(0,ng.default)(i==null?void 0:i.dappModalBody,n)},o),Ep=_e(DC,{ssrStyles:()=>Promise.resolve().then(()=>(Pt(),kt)),clientStyles:()=>(Pt(),Le(kt)).default});r();var Np=M(require("react")),tg=M(require("classnames"));var MC=({visible:n,customFooter:o,className:i,footerText:c,styles:l})=>n?Np.default.createElement("div",{className:(0,tg.default)(l==null?void 0:l.dappModalFooter,i)},o!=null?o:Np.default.createElement("div",null,c)):null,Rp=_e(MC,{ssrStyles:()=>Promise.resolve().then(()=>(Pt(),kt)),clientStyles:()=>(Pt(),Le(kt)).default});r();var mr=M(require("react")),og=require("@fortawesome/free-solid-svg-icons"),rg=require("@fortawesome/react-fontawesome"),ia=M(require("classnames"));var OC=({visible:n,headerText:o,customHeader:i,className:c,closeButtonClassName:l,headerTextClassName:g,onHide:h,globalStyles:w,styles:x})=>n?i?mr.default.createElement("div",{className:(0,ia.default)(x==null?void 0:x.dappModalHeader,c)},i):mr.default.createElement("div",{className:(0,ia.default)(x==null?void 0:x.dappModalHeader,c)},mr.default.createElement("div",{className:(0,ia.default)(x==null?void 0:x.dappModalHeaderText,g)},o),mr.default.createElement("button",{onClick:h,className:(0,ia.default)(x==null?void 0:x.dappModalCloseButton,w==null?void 0:w.btn,w==null?void 0:w.btnLight,l)},mr.default.createElement(rg.FontAwesomeIcon,{size:"lg",icon:og.faTimes}))):null,Dp=_e(OC,{ssrStyles:()=>Promise.resolve().then(()=>(Pt(),kt)),clientStyles:()=>(Pt(),Le(kt)).default});var BC={showHeader:!0,showFooter:!1,headerText:"",footerText:""},FC=({"data-testid":n="dappModal",children:o,className:i="dapp-modal-dialog-wrapper",closeOnEscape:c,config:l=BC,id:g="dapp-modal",onHide:h,parentElement:w,visible:x,styles:S})=>{let[N,C]=(0,ag.useState)(!1);if((0,ig.useEffect)(()=>{C(!0)},[]),!x)return null;let{showHeader:D,showFooter:H,headerText:G,footerText:O,modalDialogClassName:X="dapp-modal-dialog",modalContentClassName:J="dapp-modal-dialog-content",modalHeaderClassName:ce="dapp-modal-dialog-header",modalHeaderTextClassName:ie="dapp-modal-dialog-header-text",modalCloseButtonClassName:Y="dapp-modal-dialog-close-button",modalBodyClassName:Q="dapp-modal-dialog-content-body",modalFooterClassName:ke="dapp-modal-dialog-footer",customModalHeader:Sn,customModalFooter:rn}=l,bn=_t=>{_t.key==="Escape"&&c&&(h==null||h())};return eo.default.createElement(eo.default.Fragment,null,N&&(0,sg.createPortal)(eo.default.createElement("div",{id:g,role:"dialog","aria-modal":"true",className:(0,Mp.default)(X,S==null?void 0:S.dappModal,i),"data-testid":n,onKeyDown:bn},eo.default.createElement("div",{className:(0,Mp.default)(S==null?void 0:S.dappModalContent,J)},eo.default.createElement(Dp,{visible:D,headerText:G,customHeader:Sn,className:ce,headerTextClassName:ie,closeButtonClassName:Y,onHide:h}),eo.default.createElement(Ep,{className:Q},o),eo.default.createElement(Rp,{visible:H,customFooter:rn,footerText:O,className:ke}))),w!=null?w:document==null?void 0:document.body))},Op=_e(FC,{ssrStyles:()=>Promise.resolve().then(()=>(Pt(),kt)),clientStyles:()=>(Pt(),Le(kt)).default});r();r();var Mi=require("react"),Bp=n=>{let[o,i]=(0,Mi.useState)(!1),c=()=>{i(!0)},l=()=>{i(!1)};return(0,Mi.useEffect)(()=>{(n==null?void 0:n.visible)===!0?c():(n==null?void 0:n.visible)===!1&&l()},[n==null?void 0:n.visible]),{handleShowModal:c,handleHideModal:l,showModal:o}};r();var Fp=n=>{let{showModal:o}=Bp({visible:n.visible}),i=()=>{var c;(c=n.onClose)==null||c.call(n)};return cg.default.createElement(Op,{className:n.className,closeOnEscape:n.closeOnEscape,config:n.modalConfig,onHide:i,visible:o},n.children)};r();r();var Mr=M(require("react"));r();r();r();var Lf=require("react"),yr=require("react-redux");r();var pd=require("@reduxjs/toolkit"),If=require("react-redux/lib/utils/Subscription");ye();r();var sf=M(require("lodash.throttle"));te();ye();Kp();ur();_r();var DL=[Di],is=!1,ML=(0,sf.default)(()=>{ca(sa())},5e3),cf=n=>o=>i=>{if(DL.includes(i.type))return o(i);let c=n.getState(),l=ko.local.getItem(no.loginExpiresAt);if(!Boolean(c==null?void 0:c.account.address))return o(i);if(l==null)return ca(sa());let h=Date.now();return l-h<0&&!is?setTimeout(()=>{is=!0,n.dispatch(vg())},1e3):(is&&(is=!1),ML()),o(i)};r();r();function ss(){return typeof sessionStorage!="undefined"}var wf=ss()?(uf(),Le(_f)).default:(ff(),Le(gf)).default,vf=ss()?(Tf(),Le(hf)).default:[],Af=ss()?(bf(),Le(Sf)).default:n=>n;cs();var ae=(0,pd.configureStore)({reducer:wf,middleware:n=>n({serializableCheck:{ignoredActions:[...vf,Vp.type,Wi.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(cf)}),Cf=(0,If.createSubscription)(ae),uB=Af(ae),gB=(0,pd.configureStore)({reducer:Po});var rk={store:ae,subscription:Cf},dd=(0,Lf.createContext)(rk),xB=(0,yr.createStoreHook)(dd),Xe=(0,yr.createDispatchHook)(dd),oe=(0,yr.createSelectorHook)(dd);r();r();ye();r();var kf=M(require("lodash.isequal")),ps=require("reselect"),z=(0,ps.createSelectorCreator)(ps.defaultMemoize,kf.default);var it=n=>n.account,Eo=z(it,n=>n.address),oo=z(it,Eo,(n,o)=>o in n.accounts?n.accounts[o]:Fi),Pf=z(it,oo,(n,o)=>{let l=n,{accounts:i}=l,c=bo(l,["accounts"]);return Z(E({},c),{address:o.address,account:o})}),vB=z(oo,n=>n.balance),ak=z(oo,n=>{var o;return((o=n==null?void 0:n.nonce)==null?void 0:o.valueOf())||0}),AB=z(it,n=>n.shard),Ef=z(it,n=>n.ledgerAccount),IB=z(it,n=>n.walletConnectAccount),CB=z(it,n=>n.isAccountLoading),LB=z(it,n=>n.accountLoadingError),ik=z(it,n=>n.websocketEvent),sk=z(it,n=>n.websocketBatchEvent);r();var Nf=n=>n.dappConfig,EB=z(Nf,n=>n.shouldUseWebViewProvider);r();var Pn=n=>n.loginInfo,ck=z(Pn,n=>n.loginMethod),ua=z(Pn,Eo,(n,o)=>Boolean(o)),MB=z(Pn,n=>n.walletConnectLogin),pk=z(Pn,n=>n.ledgerLogin),dk=z(Pn,n=>n.walletLogin),OB=z(Pn,n=>n.isLoginSessionInvalid),ro=z(Pn,n=>n.tokenLogin),Rf=z(Pn,n=>n.logoutRoute),mk=z(Pn,n=>n.isWalletConnectV2Initialized);r();var Df=n=>n.modals,WB=z(Df,n=>n.txSubmittedModal),lk=z(Df,n=>n.notificationModal);r();var st=n=>n.networkConfig,ds=z(st,n=>n.network.chainId),_k=z(st,n=>n.network.roundDuration),HB=z(st,n=>n.network.walletConnectBridgeAddress),uk=z(st,n=>n.network.walletConnectV2RelayAddress),gk=z(st,n=>n.network.walletConnectV2ProjectId),fk=z(st,n=>n.network.walletConnectV2Options),hk=z(st,n=>n.network.walletConnectDeepLink),xn=z(st,n=>n.network),md=z(xn,n=>n.apiAddress),Mf=z(xn,n=>n.explorerAddress),Of=z(xn,n=>{var o;return(o=n.customWalletAddress)!=null?o:n.walletAddress}),Tk=z(xn,n=>n.xAliasAddress),ld=z(xn,n=>n.egldLabel);r();var ms=n=>n.signedMessageInfo,VB=z(ms,n=>n.isSigning),qB=z(ms,n=>n.errorMessage),KB=z(ms,n=>{let o=Object.keys(n.signedSessions),i=o.length;return n.signedSessions[o[i-1]]}),jB=z(ms,n=>{let o=Object.keys(n.signedSessions),i=o.length;return o.length>0?o[i-1]:""});r();var Bf=n=>n.toasts,xk=z(Bf,n=>n.customToasts),Ff=z(Bf,n=>n.transactionToasts);r();ye();var Wf={errorMessage:Qp,successMessage:ed,processingMessage:nd},Uf=n=>n.transactionsInfo,yk=z(Uf,(n,o)=>o,(n,o)=>o!=null&&(n==null?void 0:n[Number(o)])||Wf);r();r();var ct=require("@multiversx/sdk-core");te();r();var _d=require("@multiversx/sdk-core/out");r();r();function ls(n){try{let o=atob(n),i=btoa(o),c=d.Buffer.from(n,"base64").toString(),l=d.Buffer.from(c).toString("base64"),g=n===i||i.startsWith(n),h=n===l||l.startsWith(n);if(g&&h)return!0}catch(o){return!1}return!1}function No(n){return ls(n)?atob(n):n}r();r();r();r();var Gf=n=>{let o=n!=null?n:"";return ls(o)?_d.TransactionPayload.fromEncoded(o):new _d.TransactionPayload(o)};r();te();var ga=({data:n,onlySetGuardian:o})=>n?o?n.startsWith("SetGuardian"):Object.values(xp).some(i=>n.startsWith(i)):!1;function _s(n){var c,l,g;let o=E({},n);ga({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let i=new ct.Transaction(E(E(Z(E(Z(E({value:o.value.valueOf(),data:Gf(o.data),nonce:o.nonce.valueOf(),receiver:new ct.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ct.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(c=o.gasLimit.valueOf())!=null?c:Ni,gasPrice:(l=o.gasPrice.valueOf())!=null?l:Ri,chainID:o.chainID.valueOf(),version:new ct.TransactionVersion((g=o.version)!=null?g:Yu)}),o.options?{options:new ct.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ct.Address(o.guardian)}:{}));return o.guardianSignature&&i.applyGuardianSignature(d.Buffer.from(o.guardianSignature,"hex")),o.signature&&i.applySignature(d.Buffer.from(o.signature,"hex")),i}r();r();te();r();r();r();var vk=require("@multiversx/sdk-core/out");r();te();r();var Hf=require("@multiversx/sdk-core");Ue();r();var Ak=require("@multiversx/sdk-core");r();r();r();var Ik=require("@multiversx/sdk-core"),Ck=M(require("bignumber.js"));Ie();r();r();r();var fa="accounts";var gd="blocks";r();r();r();r();hn();r();r();hn();r();r();r();var Nk=M(require("bignumber.js"));te();r();var Kf=require("@multiversx/sdk-core"),ao=M(require("bignumber.js"));te();r();var qf=M(require("bignumber.js")),pt=(n,o=!0)=>{let i=String(n);if(!i.match(/^[-]?\d+$/))return!1;let c=new qf.default(i),l=o?0:-1;return c.toString(10)===i&&c.comparedTo(0)>=l};r();function Dt(n){return{if:function(o){return o?{then:i=>i instanceof Function?Dt(i(n)):Dt(i)}:{then:()=>Dt(n)}},then:o=>o instanceof Function?Dt(o(n)):Dt(o),valueOf:function(){return n}}}ao.default.config({ROUNDING_MODE:ao.default.ROUND_FLOOR});function io({input:n,decimals:o=kn,digits:i=Co,showLastNonZeroDecimal:c=!0,showIsLessThanDecimalsLabel:l=!1,addCommas:g=!1}){if(!pt(n,!1))throw new Error("Invalid input");let h=new ao.default(n).isNegative(),w=n;return h&&(w=n.substring(1)),Dt(w).then(()=>Kf.TokenTransfer.fungibleFromBigInteger("",w,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(x=>{let S=new ao.default(x);if(S.isZero())return at;let N=S.toString(10),[C,D]=N.split("."),H=new ao.default(D||0),G=Dt(0).if(Boolean(D&&c)).then(()=>Math.max(D.length,i)).if(H.isZero()&&!c).then(0).if(Boolean(D&&!c)).then(()=>Math.min(D.length,i)).valueOf(),O=D&&i>=1&&i<=D.length&&H.isGreaterThan(0)&&new ao.default(D.substring(0,i)).isZero(),X=S.toFormat(G);return Dt(N).if(g).then(X).if(Boolean(O)).then(ce=>{let ie=new ao.default(C).isZero(),[Y,Q]=ce.split("."),ke=new Array(i-1).fill(0),Sn=[...ke,0].join(""),rn=[...ke,1].join("");return ie?l?`<${Y}.${rn}`:c?`${Y}.${Q}`:Y:`${Y}.${Sn}`}).if(Boolean(!O&&D)).then(ce=>{let[ie]=ce.split("."),Y=D.substring(0,G);if(c){let Q=i-Y.length;if(Q>0){let ke=Array(Q).fill(0).join("");return Y=`${Y}${ke}`,`${ie}.${Y}`}return ce}return Y?`${ie}.${Y}`:ie}).valueOf()}).if(h).then(x=>`-${x}`).valueOf()}r();r();r();te();r();r();r();r();te();r();te();r();var Rk=require("@multiversx/sdk-core");te();r();var ha=require("@multiversx/sdk-core"),Ok=M(require("bignumber.js"));te();r();r();var Dk=M(require("bignumber.js"));te();r();te();r();r();r();r();r();r();te();function Bk(n,o){let i,c,l=/(\.0+)+$/,g=n.replace(l,"").split("."),h=o.replace(l,"").split("."),w=Math.min(g.length,h.length);for(i=0;i<w;i++)if(c=parseInt(g[i],10)-parseInt(h[i],10),c)return c;return g.length-h.length}function Fk(n){let o=[yp,Sp,bp,wp,vp,Ap,n].sort((S,N)=>Bk(S,N)),i=o.indexOf(yp),c=o.indexOf(Sp),l=o.indexOf(bp),g=o.indexOf(wp),h=o.indexOf(vp),w=o.indexOf(Ap),x=o.indexOf(n);return{ledgerWithMultiAccount:x>=i,ledgerWithHashSign:x>=c,ledgerWithSignAuthToken:x>=l,ledgerWithWhitelistedTokens:x>=g,ledgerWithGuardians:x>=h,ledgerWithUsernames:x>=w}}var jf=Fk;r();te();r();te();r();hn();var Uk=["reDelegateRewards","claimRewards","unBond"],Gk=["wrapEgld","unwrapEgld"],Hk=["unStake"],$k=["unDelegate"];r();r();r();te();r();var Kk=M(require("bignumber.js"));r();r();hn();r();var Xk=M(require("bignumber.js"));r();r();r();r();var Jk=M(require("bignumber.js"));Ue();r();r();r();r();Ie();r();var tP=require("@multiversx/sdk-web-wallet-provider");te();r();var eP=M(require("qs"));r();Qe();ir();r();ir();var bG={search:Io()?window.location.search:"",removeParams:[]};r();r();r();Je();r();hn();r();r();Je();r();var oP=M(require("linkifyjs"));r();te();r();var rP=M(require("bignumber.js"));r();Ue();r();r();Ie();r();Ie();r();r();r();hn();r();hn();r();var aP=M(require("bignumber.js"));te();hn();r();hn();r();var Zf=require("react");Ue();r();r();hn();r();r();var iP=require("@multiversx/sdk-core/out"),sP=M(require("bignumber.js"));hn();r();Ue();r();r();Ue();var _7=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];r();var Jf=require("react");Ue();Je();r();var pP=require("react");hn();var S7=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];xr();r();var fs=n=>n.transactions,Sr=z(fs,n=>n.signedTransactions),dP=z(fs,n=>n.signTransactionsError),Qf=z(fs,n=>n.signTransactionsCancelMessage),hs=n=>o=>Object.entries(o).reduce((i,[c,l])=>(n(l.status)&&(i[c]=l),i),{}),eh=z(Sr,hs(fr)),nh=z(Sr,hs(hr)),th=z(Sr,hs(Tr)),mP=z(Sr,hs(od)),oh=z(fs,n=>{var o;return(n==null?void 0:n.transactionsToSign)==null?null:Z(E({},n.transactionsToSign),{transactions:((o=n==null?void 0:n.transactionsToSign)==null?void 0:o.transactions.map(i=>_s(i)))||[]})}),lP=z(Sr,(n,o)=>o,(n,o)=>o!=null?(n==null?void 0:n[o])||{}:{});r();var rh=require("react");r();ye();r();r();r();r();r();r();r();r();var uP=require("@multiversx/sdk-extension-provider"),gP=require("@multiversx/sdk-hw-provider"),fP=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),hP=require("@multiversx/sdk-opera-provider"),TP=require("@multiversx/sdk-passkey-provider/out"),xP=require("@multiversx/sdk-web-wallet-provider");te();Qt();r();var Ro=require("@multiversx/sdk-web-wallet-iframe-provider/out"),ah=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");Ie();r();var Td=n=>B(void 0,null,function*(){if(!n.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=n.hwApp,{contractData:i,version:c}=yield o.getAppConfiguration();return{version:c,dataEnabled:i===Zu}}),Xn=n=>`Unable to perform ${n}, Provider not initialized`,Ts=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Xn("getAccount"))}setAccount(o){throw new Error(Xn(`setAccount: ${o}`))}login(o){throw new Error(Xn(`login with options: ${o}`))}logout(o){throw new Error(Xn(`logout with options: ${o}`))}getAddress(){throw new Error(Xn("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,i){throw new Error(Xn(`sendTransaction with transactions: ${o} options: ${i}`))}signTransaction(o,i){throw new Error(Xn(`signTransaction with transactions: ${o} options: ${i}`))}signTransactions(o,i){throw new Error(Xn(`signTransactions with transactions: ${o} options: ${i}`))}signMessage(o,i){throw new Error(Xn(`signTransactions with ${o} and options ${i}`))}sendCustomMessage({method:o,params:i}){throw new Error(Xn(`sendCustomMessage with method: ${o} params: ${i}`))}sendCustomRequest(o){throw new Error(Xn(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},xs=new Ts;var ih=xs;function Mt(n){ih=n}function dt(){return ih||xs}ye();r();r();r();r();r();var sh=require("@lifeomic/axios-fetch"),xd=M(require("axios")),yd=(0,sh.buildAxiosFetch)(xd.default),Sd=(n,o)=>B(void 0,null,function*(){if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);let c=n.clone().json(),[l]=yield Promise.all([c]);return{data:l,status:n.status,statusText:n.statusText,headers:n.headers,config:o}});function yP(n,o,i){return B(this,null,function*(){try{let c=yield yd(n,E({method:"POST",body:o?JSON.stringify(o):void 0,headers:E({"Content-Type":"application/json"},(i==null?void 0:i.headers)||{})},i));return Sd(c,i)}catch(c){throw console.error("Fetch Error:",c),c}})}function SP(n,o){return B(this,null,function*(){try{let i=yield yd(n,o);if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return Sd(i,o)}catch(i){throw console.error("Fetch Error:",i),i}})}function bP(n,o,i){return B(this,null,function*(){try{let c=yield yd(n,E({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(i==null?void 0:i.headers)||{}},i));if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);return Sd(c,i)}catch(c){throw console.error("Fetch Error:",c),c}})}var Do=xd.default.create();Do.get=SP;Do.post=yP;Do.patch=bP;r();var xa=n=>{let o=n!=null?n:md(ae.getState());return o.endsWith("/")?o.slice(0,-1):o};r();var wP=M(require("axios"));r();var vP=M(require("swr"));var AP=n=>{let i=`${xa()}/${fa}/${n}?withGuardianInfo=true`;return Do.get(i)},ch=n=>B(void 0,null,function*(){if(!n)return null;try{let{data:o}=yield AP(n);return o}catch(o){console.error("error fetching configuration for ",n,o)}return null});var br=n=>ch(n);r();Ie();r();r();r();Je();r();xr();r();r();r();var IP=M(require("axios"));r();var LP=M(require("axios"));pr();r();te();r();var kP=M(require("axios"));r();var EP=M(require("axios"));r();r();var NP=M(require("axios"));r();var RP=M(require("axios"));r();r();ye();Ie();r();r();function lh(n){return B(this,null,function*(){let o=n;o==null&&(o=oo(ae.getState()).address);let i=yield br(o);if(i==null)throw"Could not read account, user not logged in";return i==null?void 0:i.balance})}r();r();Je();r();Re();Ue();r();ye();r();var _h=require("@multiversx/sdk-core");Ue();Qe();r();xr();r();ye();Ie();r();ye();Ue();r();r();r();Ue();r();Ei();r();r();r();r();var BP=M(require("swr"));r();r();r();r();var uh=require("react");r();r();var FP=require("react"),WP=require("@multiversx/sdk-web-wallet-provider"),UP=require("@multiversx/sdk-web-wallet-provider"),GP=M(require("qs"));te();ye();Ie();Lp();Je();var rq=De();r();var $h=require("react"),Ld=require("@multiversx/sdk-core");r();te();Xp();r();r();r();r();r();r();r();r();r();r();pr();r();var VP=M(require("axios"));r();var KP=M(require("axios"));r();pr();r();pr();r();r();r();r();var XP=require("@multiversx/sdk-opera-provider");r();var YP=require("@multiversx/sdk-extension-provider");r();Qt();r();r();r();r();var Oh=M(Mh());var Ot=n=>{if(!n||!(0,Oh.default)(n))return null;let o=n.split(".");if(o.length!==4)return null;try{let[i,c,l,g]=o,h=JSON.parse(No(g)),w=No(i);return{ttl:Number(l),extraInfo:h,origin:w,blockHash:c}}catch(i){return console.error(`Error trying to decode ${n}:`,i),null}};r();var Hh=require("@multiversx/sdk-native-auth-client");r();var Wh=M(require("axios"));r();r();r();function Bh(n){return B(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),n)})})}r();var Fh=(n,o,i,c=0)=>B(void 0,null,function*(){try{return yield n(...i)}catch(l){return c<o.retries?((o==null?void 0:o.delay)!=null&&(yield Bh(o.delay)),yield Fh(n,o,i,c+1)):null}}),Ad=(n,o={retries:5,delay:500})=>(...i)=>B(void 0,null,function*(){return yield Fh(n,o,i)});var SE=4,bE=3e4,ws={current:null},Mo={current:null},wE=Ad((n,o,i)=>B(void 0,null,function*(){if(i){let g=Math.floor(Date.now()/1e3);return{hash:yield i(),timestamp:g}}let{data:c}=yield Wh.default.get(`${n}/${gd}?from=${SE}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[l]=c;return l}));function Uh(n,o,i,c){return B(this,null,function*(){if(n==null)throw new Error("missing api url");let l=Date.now();if(ws.current!=null&&l<ws.current.timestamp*1e3+bE&&!c)return ws.current;if(Mo.current!=null)return yield Mo.current;Mo.current=wE(n,o,i);try{let g=yield Mo.current;if(g==null)throw Mo.current=null,new Error("could not get block hash");return ws.current={hash:g.hash,timestamp:g.timestamp},Mo.current=null,g}catch(g){return Mo.current=null,null}})}r();r();Oi();r();function vE(n){return Object.prototype.toString.call(n)==="[object String]"}var Id=n=>{var i;if(!n||!vE(n))return null;let o=n.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[c,l,g]=o,h=No(c),w=No(l),x=Ot(w);if(!x)return{address:h,body:w,signature:g,blockHash:"",origin:"",ttl:0};let S=Z(E({},x),{address:h,body:w,signature:g});return(i=x.extraInfo)!=null&&i.timestamp||delete S.extraInfo,S}catch(c){return null}};var Cd={isExpired:!1},Gh=n=>{if(!n)return Cd;let o=Id(n);if(!o)return Cd;let i=lr(),{ttl:c,extraInfo:l}=o,g=l==null?void 0:l.timestamp;if(!g)return Cd;let h=g+c,w=i>h,x=h-i;return{isExpired:w,expiresAt:h,secondsUntilExpires:x}};r();Je();var wa={origin:De().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},va=n=>{var i,c,l,g,h,w;return n===!0?wa:{origin:(i=n==null?void 0:n.origin)!=null?i:wa.origin,blockHashShard:n==null?void 0:n.blockHashShard,expirySeconds:(c=n==null?void 0:n.expirySeconds)!=null?c:wa.expirySeconds,apiAddress:(l=n==null?void 0:n.apiAddress)!=null?l:wa.apiAddress,tokenExpirationToastWarningSeconds:(g=n==null?void 0:n.tokenExpirationToastWarningSeconds)!=null?g:wa.tokenExpirationToastWarningSeconds,extraInfo:(h=n==null?void 0:n.extraInfo)!=null?h:{},gatewayUrl:n==null?void 0:n.gatewayUrl,extraRequestHeaders:(w=n==null?void 0:n.extraRequestHeaders)!=null?w:{}}};var vs=n=>{let{origin:o,apiAddress:i,expirySeconds:c,blockHashShard:l,extraInfo:g,gatewayUrl:h,extraRequestHeaders:w}=va(n),x=new Hh.NativeAuthClient({origin:o,apiUrl:i,expirySeconds:c,blockHashShard:l,gatewayUrl:h,extraRequestHeaders:w});return{getNativeAuthConfig:va,initialize:C=>B(void 0,null,function*(){var H,G;if(!i||!o)return"";let D=()=>x.getCurrentBlockHash();try{let O=(H=C==null?void 0:C.latestBlockInfo)!=null?H:yield Uh(i,l,D,C==null?void 0:C.noCache);if(!O)return"";let{hash:X,timestamp:J}=O,ce=x.encodeValue(JSON.stringify(E(E({},(G=C==null?void 0:C.extraInfo)!=null?G:g),J?{timestamp:J}:{})));return`${x.encodeValue(o)}.${X}.${c}.${ce}`}catch(O){return console.error("Error getting native auth token: ",O.toString()),""}}),getToken:({address:C,token:D,signature:H})=>x.getToken(C,D,H),getTokenExpiration:Gh}};r();var AE=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();var IE=require("@multiversx/sdk-passkey-provider/out");te();Je();r();r();r();var EE=require("react"),NE=require("@multiversx/sdk-hw-provider");r();Re();Ue();r();da();ur();_r();Qe();r();r();var Px=require("react"),Ex=require("@multiversx/sdk-core"),TR=require("@multiversx/sdk-extension-provider"),xR=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),yR=require("@multiversx/sdk-passkey-provider/out"),SR=M(Ix());te();r();r();var Cr=()=>oe(oo);r();var La=()=>oe(Pf);r();r();r();r();r();r();r();var ka=M(require("react"));var hY=(0,ka.createContext)({}),TY=ae.getState();r();var Lx=M(require("react"));r();var Dd=M(require("react")),nR=M(require("axios"));r();r();Qt();r();r();var sR=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),cR=require("@multiversx/sdk-webview-provider/out/WebviewProvider");Re();r();Re();ye();Ue();r();r();ye();r();Qe();r();ye();Ue();r();r();var oR=require("@multiversx/sdk-core"),rR=M(require("bignumber.js"));te();r();var aR=M(require("bignumber.js"));te();ye();Ie();Qe();Je();r();var kx=require("react"),lR=require("@multiversx/sdk-extension-provider"),_R=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),uR=require("@multiversx/sdk-passkey-provider/out");Qt();ye();r();ye();Ue();da();Je();r();ot();ye();r();r();var wR=require("react");r();r();Ie();xr();r();var Ls=require("react"),Nx=(n,o)=>{let[i,c]=(0,Ls.useState)(n);return(0,Ls.useEffect)(()=>{let g=setTimeout(()=>c(n),o);return()=>clearTimeout(g)},[n]),i};r();r();var AR=require("react"),IR=require("@multiversx/sdk-extension-provider");ot();Re();Ie();r();function Bt(){return ua(ae.getState())}Nt();Qe();Qe();r();r();Qt();Ue();var so=n=>(Object.values(Ge).forEach(o=>{if(o!==(n==null?void 0:n.skipLoginMethod))switch(o){case"crossWindow":{let i=Jt.CrossWindowProvider.getInstance();i.isInitialized()&&i.dispose();break}case"iframe":{let i=Ro.IframeProvider.getInstance();i.isInitialized()&&i.dispose();break}default:break}}),null);r();var Rx=require("react"),ks=require("@multiversx/sdk-core");ye();var vR=(n,o)=>{var i;return o?o===!0?n:(i=o.apiAddress)!=null?i:n:null},Ft=n=>{let o=oe(xn),i=oe(ro),c=(0,Rx.useRef)(i==null?void 0:i.loginToken),l=vR(o.apiAddress,n),g=va(E(E({},n===!0?{}:n),l?{apiAddress:l}:{})),h=Boolean(n),w=vs(g),{address:x}=Cr(),S=Xe(),N=G=>{c.current=G,S(pa(E(Z(E({},i),{loginToken:G}),l?{nativeAuthConfig:g}:{})))},C=()=>{try{return w.initialize()}catch(G){console.error("Unable to get block. Login failed.",G);return}},D=({address:G,signature:O})=>{let X=c.current;if(!X)throw"Token not found. Call `setLoginToken` first.";if(!h){S(pa({loginToken:X,signature:O}));return}let J=w.getToken({address:G,token:X,signature:O});return S(pa(E({loginToken:X,signature:O,nativeAuthToken:J},l?{nativeAuthConfig:g}:{}))),J};return{configuration:g,setLoginToken:N,getNativeAuthLoginToken:C,setTokenLoginInfo:D,refreshNativeAuthTokenLogin:X=>B(void 0,[X],function*({signMessageCallback:G,nativeAuthClientConfig:O}){let ce=yield vs(O||g).initialize({noCache:Boolean(O)});if(c.current=ce,!ce)return;let ie=new ks.Message({address:new ks.Address(x),data:d.Buffer.from(`${x}${ce}`)}),Y=yield G(ie,{});if(!(Y!=null&&Y.signature))throw"Message not signed";return D({address:x,signature:d.Buffer.from(Y.signature).toString("hex")})})}};r();var CR=require("react"),LR=require("@multiversx/sdk-opera-provider");ot();Re();Ie();Nt();Qe();Je();r();var kR=require("react");Pp();ot();Qt();Re();ye();Ie();Nt();Je();r();var DR=require("react");ot();ye();r();r();Wp();r();r();var PR=M(require("platform"));ir();r();r();r();r();r();function Ps(){return ld(ae.getState())}r();r();aa();Ie();r();r();var ER=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();r();da();ur();r();r();r();ye();r();r();var NR=M(require("axios"));Qe();r();r();var RR=M(wr());aa();var Dx,Mx,Ox,ste=(Ox=(Mx=(Dx=jn.safeWindow)==null?void 0:Dx.location)==null?void 0:Mx.origin)==null?void 0:Ox.includes("localhost");r();Je();r();r();var MR=require("react");te();r();r();te();var Md=n=>{var l;let o=oe(ro),i=(l=o==null?void 0:o.loginToken)!=null?l:n;if(!i)return;let c=Ot(i);if(!!c)return c.origin.toLowerCase().startsWith(qu)};r();r();r();var Oo=M(require("bignumber.js")),Bx=n=>{let o=new Oo.default(n).dividedBy(1e3).integerValue(Oo.default.ROUND_FLOOR),i=new Oo.default(o).dividedBy(60).integerValue(Oo.default.ROUND_FLOOR),c=new Oo.default(i).dividedBy(60).integerValue(Oo.default.ROUND_FLOOR),l=c.modulo(60).isGreaterThan(1),g=i.modulo(60).isGreaterThan(1),h=i.modulo(60).isLessThan(1);return l?`${c} hours`:g?`${i} minutes`:h?"less than 1 minute":`${i} minute`};var Fx=(n,o)=>{var g;let i=oe(ro),c=(g=i==null?void 0:i.loginToken)!=null?g:n;if(!c)return;let l=Ot(c);if(!!l)return{className:o,url:l.origin,duration:Bx(l.ttl*1e3)}};r();var Lr=require("react"),Od=require("@multiversx/sdk-hw-provider");ot();Re();ye();Ie();Nt();r();var Bo=require("react"),OR=10,Wx=()=>{let[n,o]=(0,Bo.useState)(""),[i,c]=(0,Bo.useState)(!1),[l,g]=(0,Bo.useState)(0),[h,w]=(0,Bo.useState)([]),[x,S]=(0,Bo.useState)(null),[N,C]=(0,Bo.useState)(!1);return{accounts:h,defaultAddressesPerPage:OR,error:n,isLoading:i,onGoToNextPage:()=>{S(null),g(X=>X+1)},onGoToPrevPage:()=>{S(null),g(X=>X===0?0:X-1)},onGoToSpecificPage:X=>{S(null),g(X)},onSelectAddress:X=>{S(X)},selectedAddress:x,setAccounts:w,setError:o,setIsLoading:c,setShowAddressList:C,showAddressList:N,startIndex:l}};var Ea="Check if the MultiversX App is open on Ledger",Bd=({callbackRoute:n,token:o,addressesPerPage:i,nativeAuth:c,onLoginRedirect:l})=>{let g=oe(Ef),h=dt(),w=Xe(),x=Bt(),S=c!=null,N=Ft(c),C=o,{accounts:D,setAccounts:H,isLoading:G,setIsLoading:O,setShowAddressList:X,showAddressList:J,startIndex:ce,selectedAddress:ie,onGoToPrevPage:Y,onGoToNextPage:Q,onGoToSpecificPage:ke,onSelectAddress:Sn,error:rn,setError:bn,defaultAddressesPerPage:_t}=Wx(),lo=i!=null?i:_t,[ut,Wo]=(0,Lr.useState)(""),[Uo,Te]=(0,Lr.useState)(!1),ve=({address:fe,index:Se,signature:Oe})=>{w(wg({index:Se,loginType:"ledger"})),Oe&&N.setTokenLoginInfo({signature:Oe,address:fe}),w(pn({address:fe,loginMethod:"ledger"})),Et({callbackRoute:n,onLoginRedirect:l,options:{address:fe,signature:Oe}})},Me=(fe,Se="")=>{var Oe;if(G){let{errorMessage:Gt,defaultErrorMessage:Ho}=jp(fe),Oa=(Oe=Gt!=null?Gt:Ho)!=null?Oe:Ea;bn(`${Oa}.${Se}`),O(!1),w(qp(null))}},dn=()=>B(void 0,null,function*(){try{if(h instanceof Od.HWProvider&&h.isInitialized())return h.isConnected()}catch(fe){Me(fe)}return!1}),mn=()=>B(void 0,null,function*(){if(yield dn()){bn(""),O(!1);return}try{let Se=new Od.HWProvider;(yield Se.init())&&Mt(Se),bn(""),O(!1)}catch(Se){Me(Se)}}),Ms=()=>B(void 0,null,function*(){let fe=yield dn();if(!ie||!fe)return Me(Ea);let{index:Se}=ie;if(S&&!C&&(C=yield N.getNativeAuthLoginToken(),!C)){console.warn("Fetching block failed. Login cancelled.");return}if(C){N.setLoginToken(C);try{let Oe=yield h.tokenLogin({token:d.Buffer.from(`${C}{}`),addressIndex:Se});ve({address:Oe.address,index:Se,signature:Oe.signature.toString("hex")})}catch(Oe){Me(Oe,". Update MultiversX App to continue.")}}else try{let{address:Oe}=yield h.login({addressIndex:Se});ve({address:Oe,index:Se})}catch(Oe){return Me(Oe),!1}return!0}),Os=()=>B(void 0,null,function*(){try{if(O(!0),ie==null)return!1;w(g?xg(ie):qp(Z(E({},ie),{version:ut,hasContractDataEnabled:Uo}))),O(!1),yield Ms()}catch(fe){Me(fe)}return X(!1),!0}),Ma=()=>B(void 0,null,function*(){if(!(yield dn()))return Me(rn);try{O(!0);let Se=yield h.getAccounts(ce,lo),Oe=yield Td(h);Wo(Oe.version),Te(Oe.dataEnabled),H(Se),O(!1)}catch(Se){Me(Se)}}),Ut=()=>B(void 0,null,function*(){if(x)throw new Error(Lt);so(),bn("");try{if(O(!0),!(yield dn()))return Me(Ea);if(g!=null){if(!ie)return Me(Ea);let{address:Se}=yield h.login({addressIndex:ie.index.valueOf()});if(!Se)return Me("Login cancelled.");w(pn({address:Se,loginMethod:"ledger"})),Et({callbackRoute:n,onLoginRedirect:l})}else D!=null&&D.length||(yield Ma()),X(!0);O(!1)}catch(fe){Me(fe)}}),Go=()=>B(void 0,null,function*(){try{let fe=yield dn();if(fe||(yield mn()),fe=yield dn(),!fe)return Me(Ea);(D.length===0||ce>=0)&&(yield Ma())}catch(fe){Me(fe)}});(0,Lr.useEffect)(()=>{Go()},[ce,J,h]),(0,Lr.useEffect)(()=>{(D==null?void 0:D.length)>0&&!J&&X(!0)},[D]);let Or=Boolean(rn);return[Ut,{loginFailed:Or,isLoggedIn:x&&!Or,error:rn,isLoading:G&&!Or},{accounts:D,showAddressList:J,startIndex:ce,selectedAddress:ie,version:ut,contractDataEnabled:Uo,onGoToPrevPage:Y,onGoToNextPage:Q,onGoToSpecificPage:ke,onSelectAddress:Sn,onConfirmSelectedAddress:Os}]};r();r();var Fd=require("react");Re();ye();Ie();Nt();Je();r();var FR=require("react"),WR=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ot();Re();Ie();Nt();Qe();Qe();r();var UR=require("react"),GR=require("@multiversx/sdk-passkey-provider/out");ot();Re();Ie();Nt();Qe();Qe();r();r();var Ux=require("react");r();var zR=require("react");r();var Wd=require("react"),$R=require("socket.io-client");ye();r();r();r();var VR=require("react");Ue();r();r();r();var KR=M(require("swr"));r();r();r();r();var qR=M(require("axios"));r();r();r();var Da=M(require("react"));r();r();var Ve=M(require("react")),Nr=M(require("classnames"));te();r();r();var en=M(require("react")),co=require("@fortawesome/free-solid-svg-icons"),Zd=require("@fortawesome/react-fontawesome"),Ns=M(require("bignumber.js")),Fo=M(require("classnames"));te();r();r();r();var Es=M(require("react")),$x=require("@fortawesome/react-fontawesome"),Hd=M(require("classnames"));var XR=({label:n,onClick:o,showLabels:i,isInactive:c,paginationButtonIcon:l,className:g,"data-testid":h,styles:w})=>Es.default.createElement("div",{onClick:o,"data-testid":h,className:(0,Hd.default)(w==null?void 0:w.paginationEdgeButton,g,{[w==null?void 0:w.inactive]:c})},Es.default.createElement($x.FontAwesomeIcon,{icon:l,className:w==null?void 0:w.paginationEdgeButtonIcon}),Es.default.createElement("span",{className:(0,Hd.default)(w==null?void 0:w.paginationEdgeButtonText,{[w==null?void 0:w.show]:i})},n)),$d=_e(XR,{ssrStyles:()=>Promise.resolve().then(()=>(Gd(),Ud)),clientStyles:()=>(Gd(),Le(Ud)).default});r();r();r();var jd=M(ay()),kr=M(xy());te();r();var by=({currentPage:n,totalPages:o})=>{let i=n-1,c=n+1;if(o<=7)return(0,kr.default)(1,o+1).map(J=>String(J));let l=(J,ce)=>J.includes(n)?J:J.slice(0,7-ce.length-1),g=(0,jd.default)(c-1,3,5),h=(0,jd.default)(i+1,o-3,o-1),w=g?(0,kr.default)(1,c+1):(0,kr.default)(1,5-1),x=h?(0,kr.default)(i,o+1):(0,kr.default)(o-3+1,o+1),S=l(w,x),N=l(x.reverse(),w),C=S.concat(N),D=[dr,i,n,c,dr],[H]=S,[G]=N;return(C.includes(n)?[...S,dr,...N.reverse()]:[H,...D,G]).map(J=>String(J))};var $3=({currentPage:n=1,totalPages:o,className:i,disabledClassName:c,buttonsClassNames:l,onPageChange:g,isDisabled:h,showLabels:w,showEdgeButtons:x=!0,styles:S})=>{let[N,C]=(0,en.useState)(n),D=N===1,H=N===o,G=c?{[c]:h}:{},O=by({currentPage:N,totalPages:o}),X=Q=>{Q!==N&&(C(Q),g(Q))},J=Q=>{pt(Q)&&X(new Ns.default(Q).toNumber())},ce=Q=>ke=>{ke.preventDefault(),X(Q)},ie=Q=>pt(Q)&&new Ns.default(Q).isGreaterThanOrEqualTo(100),Y=Q=>new Ns.default(Q).isEqualTo(N);return(0,en.useEffect)(()=>{n!==N&&C(n)},[n,N]),o===1?null:en.default.createElement("div",{className:(0,Fo.default)(S==null?void 0:S.pagination,i)},x&&en.default.createElement("span",{onClick:ce(1),className:(0,Fo.default)(S==null?void 0:S.paginationAngle,l,E({[S==null?void 0:S.disabled]:D},G))},en.default.createElement(Zd.FontAwesomeIcon,{className:S==null?void 0:S.paginationAngleIcon,icon:co.faAnglesLeft})),en.default.createElement($d,{label:"Prev",onClick:ce(N-1),"data-testid":"prevBtn",paginationButtonIcon:co.faAngleLeft,isInactive:D,showLabels:w,className:(0,Fo.default)(S==null?void 0:S.paginationEdgeButton,l,{[S==null?void 0:S.disabled]:h},G)}),en.default.createElement("div",{className:S==null?void 0:S.paginationItems},O.map((Q,ke)=>en.default.createElement("div",{key:`page-item-${ke}`,className:S==null?void 0:S.paginationItemWrapper},pt(Q)?en.default.createElement("div",{onClick:()=>J(Q),className:(0,Fo.default)(S==null?void 0:S.paginationItem,l,{[S==null?void 0:S.active]:Y(Q)},{[S==null?void 0:S.ellipsis]:!pt(Q)},{[S==null?void 0:S.disabled]:h},{[S==null?void 0:S.hundreds]:ie(Q)},G)},en.default.createElement("span",{className:S==null?void 0:S.paginationItemText},Q)):en.default.createElement("span",{className:S==null?void 0:S.paginationItemText},Q)))),en.default.createElement($d,{label:"Next",onClick:ce(N+1),"data-testid":"nextBtn",paginationButtonIcon:co.faAngleRight,isInactive:H,showLabels:w,className:(0,Fo.default)(S==null?void 0:S.paginationEdgeButton,S==null?void 0:S.reversed,l,{[S==null?void 0:S.disabled]:h},G)}),x&&en.default.createElement("span",{onClick:ce(o),className:(0,Fo.default)(S==null?void 0:S.paginationAngle,l,E({[S==null?void 0:S.disabled]:H},G))},en.default.createElement(Zd.FontAwesomeIcon,{className:S==null?void 0:S.paginationAngleIcon,icon:co.faAnglesRight})))},vy=_e($3,{ssrStyles:()=>Promise.resolve().then(()=>(Yd(),Xd)),clientStyles:()=>(Yd(),Le(Xd)).default});r();r();var mt=M(require("react")),rm=M(require("classnames"));r();var po=M(require("react")),Iy=M(require("classnames"));te();var V3=n=>{var i;let o=(i=n.styles)!=null?i:{};return po.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},po.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},q3=(n,o)=>{var H,G,O;let{value:i,showLastNonZeroDecimal:c=!1,showLabel:l=!0}=n,g=n.digits!=null?n.digits:Co,h=n.decimals!=null?n.decimals:kn,w=(H=n.styles)!=null?H:{},x=(G=n.globalStyles)!=null?G:{},S=io({input:i,decimals:h,digits:g,showLastNonZeroDecimal:c,addCommas:!0}),N=S.split("."),C=N.length===1,D=S!==at;if(g>0&&C&&D){let X="";for(let J=1;J<=g;J++)X=X+at;N.push(X)}return po.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},po.default.createElement("span",{className:w["int-amount"],"data-testid":"formatAmountInt"},N[0]),N.length>1&&po.default.createElement("span",{className:w.decimals,"data-testid":"formatAmountDecimals"},".",N[1]),l&&po.default.createElement("span",{className:(0,Iy.default)(w.symbol,n.token&&x.textMuted),"data-testid":"formatAmountSymbol"},` ${(O=n.token)!=null?O:o}`))},K3=n=>{let{value:o}=n;return pt(o)?q3(n,n.egldLabel||""):V3(n)},j3=n=>{let o=n.egldLabel||Ps(),i=Z(E({},n),{egldLabel:o});return po.default.createElement(K3,E({},i))},Cy=_e(j3,{ssrStyles:()=>Promise.resolve().then(()=>(Qd(),Jd)),clientStyles:()=>(Qd(),Le(Jd)).default});r();r();var He=M(require("react")),ky=M(require("classnames"));te();var Y3=({text:n,className:o="dapp-trim","data-testid":i="trim-text-component",color:c,styles:l})=>{let[g,h]=(0,He.useState)(0),[w,x]=(0,He.useState)(!1),S=(0,He.useRef)(document==null?void 0:document.createElement("span")),N=(0,He.useRef)(document==null?void 0:document.createElement("span")),C=Nx(g,300),D=()=>{if(S.current&&N.current){let O=N.current.offsetWidth-S.current.offsetWidth;x(O>1)}},H=()=>{h(g+1)};return(0,He.useEffect)(()=>(window==null||window.addEventListener("resize",H),()=>{window==null||window.removeEventListener("resize",H)})),(0,He.useEffect)(()=>{D()},[C]),He.default.createElement("span",{ref:S,className:(0,ky.default)(l==null?void 0:l.trim,c,o,{overflow:w}),"data-testid":i},He.default.createElement("span",{ref:N,className:l==null?void 0:l.hiddenTextRef},n),w?He.default.createElement(He.default.Fragment,null,He.default.createElement("span",{className:l==null?void 0:l.left},He.default.createElement("span",null,String(n).substring(0,Math.floor(n.length/2)))),He.default.createElement("span",{className:l==null?void 0:l.ellipsis},dr),He.default.createElement("span",{className:l==null?void 0:l.right},He.default.createElement("span",null,String(n).substring(Math.ceil(n.length/2))))):He.default.createElement("span",null,n))},Py=_e(Y3,{ssrStyles:()=>Promise.resolve().then(()=>(nm(),em)),clientStyles:()=>(nm(),Le(em)).default});var J3=({address:n,index:o,balance:i,selectedAddress:c,onSelectAddress:l,className:g="dapp-ledger-address-row",ledgerModalTableSelectedItemClassName:h,disabled:w=!1,styles:x})=>{var S;return mt.default.createElement("div",{onClick:()=>l({address:n,index:o}),className:(0,rm.default)(x==null?void 0:x.ledgerAddressTableBodyItem,{[h!=null?h:""]:c===n,[(S=x==null?void 0:x.ledgerAddressTableBodyItemSelected)!=null?S:""]:c===n},g)},mt.default.createElement("div",{className:(0,rm.default)(x==null?void 0:x.ledgerAddressTableBodyItemData,{disabled:w})},mt.default.createElement("input",{type:"radio",id:`check_${n}`,disabled:w,onChange:()=>l({address:n,index:o}),"data-testid":`check_${n}`,role:"button",checked:c===n,className:x==null?void 0:x.ledgerAddressTableBodyItemDataInput}),mt.default.createElement("label",{htmlFor:`check_${o}`,role:"button","data-testid":`label_${o}`,className:x==null?void 0:x.ledgerAddressTableBodyItemDataLabel},mt.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemDataValue},mt.default.createElement(Py,{text:n})))),mt.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemData},mt.default.createElement(Cy,{value:i,egldLabel:Ps()})),mt.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemData},o))},Ny=_e(J3,{ssrStyles:()=>Promise.resolve().then(()=>(om(),tm)),clientStyles:()=>(om(),Le(tm)).default});r();r();r();var Pr=M(require("react")),By=require("@fortawesome/free-solid-svg-icons"),Er=M(require("classnames"));te();r();r();var mo=M(require("react")),Dy=require("@fortawesome/react-fontawesome"),Na=M(require("classnames"));var eD=({icon:n,title:o,action:i,iconClass:c,"data-testid":l,description:g,iconBgClass:h,iconSize:w="5x",className:x="dapp-page-state",globalStyles:S,styles:N})=>{let C=(0,mo.useMemo)(()=>({wrapper:(0,Na.default)(N==null?void 0:N.state,S==null?void 0:S.mAuto,S==null?void 0:S.p4,S==null?void 0:S.textCenter,x),iconContainer:(0,Na.default)(S==null?void 0:S.iconState,S==null?void 0:S.mxAuto,{[h!=null?h:""]:Boolean(h)}),iconClass:(0,Na.default)(c!=null&&c),title:(0,Na.default)(S==null?void 0:S.h4,S==null?void 0:S.my4),description:S==null?void 0:S.mb3}),[S,N,x,h,c]);return mo.default.createElement("div",{className:C.wrapper,"data-testid":l},n&&mo.default.createElement("span",{className:C.iconContainer},mo.default.createElement(Dy.FontAwesomeIcon,{icon:n,className:C.iconClass,size:w})),o&&mo.default.createElement("p",{className:C.title},o),g&&mo.default.createElement("div",{className:C.description},g),i)},My=_e(eD,{ssrStyles:()=>Promise.resolve().then(()=>(im(),am)),clientStyles:()=>(im(),Le(am)).default});var tD=({customSpinnerComponent:n,ledgerLoadingClassNames:o,customContentComponent:i,globalStyles:c,styles:l})=>{let{ledgerModalSubtitleClassName:g,ledgerModalTitleClassName:h,ledgerLoadingWrapper:w,ledgerLoadingSpinner:x}=o||{};return Pr.default.createElement("div",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingWrapper,w),"data-testid":"ledgerLoading"},Pr.default.createElement("div",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingHeading,h)},"Waiting for device..."),Pr.default.createElement("p",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingDescription,g)},"It may take a few seconds..."),i,Pr.default.createElement("div",{className:(0,Er.default)(l==null?void 0:l.ledgerLoadingSpinner,x)},n||Pr.default.createElement(My,{iconSize:"10x",icon:By.faCircleNotch,iconClass:(0,Er.default)("fa-spin",c==null?void 0:c.textPrimary)})))},Rs=_e(tD,{ssrStyles:()=>Promise.resolve().then(()=>(cm(),sm)),clientStyles:()=>(cm(),Le(sm)).default});var Wy=10,rD=500,aD=({accounts:n,addressTableClassNames:o,className:i="dapp-ledger-address-table",customContentComponent:c,dataTestId:l="addressTableContainer",loading:g,onConfirmSelectedAddress:h,onGoToSpecificPage:w,onGoToNextPage:x,onGoToPrevPage:S,onSelectAddress:N,selectedAddress:C,startIndex:D,disabledIndexes:H=[],globalStyles:G,styles:O})=>{let{ledgerModalTitleClassName:X,ledgerModalSubtitleClassName:J,ledgerModalTableHeadClassName:ce,ledgerModalTableItemClassName:ie,ledgerModalButtonClassName:Y,ledgerModalTableNavigationButtonClassName:Q,ledgerModalTableSelectedItemClassName:ke,ledgerModalTableNavigationButtonDisabledClassName:Sn}=o||{},[rn,bn]=(0,Ve.useState)([]),_t=()=>{let Te=0;for(;H.includes(Te);)Te++;return Te};(0,Ve.useEffect)(()=>{if(n.length>0&&!g&&(!C&&D===0)){let dn=_t(),mn=n[dn];N({address:mn,index:dn})}},[n,C,g,D]);let lo=Te=>B(void 0,null,function*(){try{let ve=yield lh(Te);return{address:Te,balance:ve}}catch(ve){throw console.error("error fetching balance",ve),rn}});if((0,Ve.useEffect)(()=>{let Te=n.map(ve=>lo(ve));bn(n.map(ve=>({address:ve,balance:"..."}))),Promise.all(Te).then(ve=>{bn(ve)})},[n]),g)return Ve.default.createElement(Rs,null);let ut=()=>{!C||h()},Wo=Te=>{if(Te-1===D+1){x();return}if(Te-1===D-1){S();return}w(Te-1)},Uo=["Address","Balance","#"];return Ve.default.createElement("div",{className:(0,Nr.default)(O==null?void 0:O.ledgerAddressTableWrapper,i),"data-testid":l},Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTableTop},Ve.default.createElement("div",{className:(0,Nr.default)(O==null?void 0:O.ledgerAddressTableHeading,X),"data-testid":`${l}Title`},"Access your wallet"),Ve.default.createElement("p",{className:(0,Nr.default)(O==null?void 0:O.ledgerAddressTableDescription,J),"data-testid":`${l}SubTitle`},"Choose the wallet you want to access")),c,Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTable},Ve.default.createElement("div",{className:(0,Nr.default)(O==null?void 0:O.ledgerAddressTableHeader,ce)},Uo.map(Te=>Ve.default.createElement("div",{key:Te,className:O==null?void 0:O.ledgerAddressTableHeaderItem},Te))),Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTableBody},rn&&rn.map(({address:Te,balance:ve},Me)=>Ve.default.createElement(Ny,{address:Te,balance:ve,disabled:H.includes(Me),key:Me+D*Wy,index:Me+D*Wy,selectedAddress:C,onSelectAddress:N,className:ie,ledgerModalTableSelectedItemClassName:ke})))),Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTableBottom},Ve.default.createElement(vy,{className:O==null?void 0:O.ledgerAddressTablePagination,currentPage:D+1,totalPages:rD,onPageChange:Wo,disabledClassName:Sn,buttonsClassNames:Q}),Ve.default.createElement("button",{disabled:!C,onClick:ut,"data-testid":"confirmBtn",className:(0,Nr.default)(G==null?void 0:G.btn,G==null?void 0:G.btnPrimary,O==null?void 0:O.ledgerAddressTableButton,Y)},"Access Wallet")))},Uy=_e(aD,{ssrStyles:()=>Promise.resolve().then(()=>(dm(),pm)),clientStyles:()=>(dm(),Le(pm)).default});r();r();var yn=M(require("react")),Wt=M(require("classnames"));te();r();r();r();var Hy=M(Gy()),$y=n=>{if(n<=0||isNaN(n)||!n||(0,Hy.isString)(n))return"N/A time";if(n>=86400)return"more than one day";let o=Math.floor(n/3600),i=n%3600,c=Math.floor(i/60),l=i%60,g=[];return o>0&&g.push(`${o}h`),c>0&&g.push(`${c}min`),l>0&&g.push(`${l}sec`),g.join(" ")};var zy=({loginToken:n,version:o})=>{if(!n||!o)return null;let{ledgerWithUsernames:i}=jf(o),c=Ot(n);if(c==null)return null;let l="For security, please confirm that your address:",g="and Auth Token:",h="are the one shown on your Ledger device screen now.";if(i){let w=$y(c.ttl),x="For security, please confirm your address:",S="and authorize:";return{data:`${c.origin} for ${w}.`,confirmAddressText:x,authText:S}}return{data:n,confirmAddressText:l,authText:g,areShownText:h}};var sD=({token:n,className:o="dapp-ledger-confirm-address",customContentComponent:i,confirmAddressClassNames:c,styles:l})=>{var G,O;let{ledgerAccount:g}=La(),{ledgerModalTitleClassName:h,ledgerModalConfirmDescriptionClassName:w,ledgerModalConfirmDataClassName:x,ledgerModalConfirmFooterClassName:S,ledgerModalConfirmContentClassName:N}=c||{},C=oe(ro),D=(G=C==null?void 0:C.loginToken)!=null?G:n,H=zy({loginToken:D,version:g==null?void 0:g.version});return yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddress,N,o),"data-testid":"ledgerConfirmAddress"},yn.default.createElement("h4",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressHeading,h)},"Confirm Ledger Address"),i,yn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,w)},H==null?void 0:H.confirmAddressText),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressData,x)},(O=g==null?void 0:g.address)!=null?O:"")),yn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,w)},H==null?void 0:H.authText),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressData,x)},H==null?void 0:H.data),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,w)},H==null?void 0:H.areShownText)),yn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressFooter,S)},yn.default.createElement("div",null,"Select Approve on your device to confirm."),yn.default.createElement("div",null,"Or, if it does not match, close this page and"," ",yn.default.createElement("a",{href:"https://help.multiversx.com/en/",target:"_blank",rel:"noreferrer"},"contact support"),".")))},qy=_e(sD,{ssrStyles:()=>Promise.resolve().then(()=>(lm(),mm)),clientStyles:()=>(lm(),Le(mm)).default});r();r();var En=M(require("react")),lt=M(require("classnames"));r();var Ye=M(require("react")),cD=n=>Ye.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 290 142.3",style:{enableBackground:"new 0 0 290 142.3"},xmlSpace:"preserve"},n),Ye.createElement("style",{type:"text/css"},`
	.st0{filter:url(#Adobe_OpacityMaskFilter);}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_00000132080685600946463390000014083146887067534994_);}
	.st2{mask:url(#SVGID_1_);fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
`),Ye.createElement("defs",null,Ye.createElement("filter",{id:"Adobe_OpacityMaskFilter",filterUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3},Ye.createElement("feColorMatrix",{type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"}))),Ye.createElement("mask",{maskUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3,id:"SVGID_1_"},Ye.createElement("g",{className:"st0"},Ye.createElement("linearGradient",{id:"SVGID_00000042721603501377086220000002945655816276772283_",gradientUnits:"userSpaceOnUse",x1:1,y1:24.85,x2:92.9,y2:24.85},Ye.createElement("stop",{offset:0,style:{stopColor:"#000000"}}),Ye.createElement("stop",{offset:.1864,style:{stopColor:"#000000"}}),Ye.createElement("stop",{offset:.8945,style:{stopColor:"#FFFFFF"}})),Ye.createElement("rect",{x:1,y:21.7,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"url(#SVGID_00000042721603501377086220000002945655816276772283_)"},width:91.9,height:6.3}))),Ye.createElement("path",{className:"st2",d:"M1,26.6V28h92.7v-1.4H1z M1,21.7v1.4h92.7v-1.4H1z"}),Ye.createElement("g",null,Ye.createElement("path",{className:"st3",d:"M218.8,21h-38.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v5.6c0,0.2,0.1,0.3,0.2,0.4   c0.1,0.1,0.2,0.2,0.4,0.2h38.1c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4v-5.6c0-0.1-0.1-0.3-0.2-0.4   C219.1,21.1,219,21,218.8,21z M185.2,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7   l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L185.2,25.4z M189.6,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6   l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L189.6,25.4z M194,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3   l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L194,25.4z M198.4,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8   l0,0l-1-0.3l0.1-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L198.4,25.4z M202.8,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9   l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L202.8,25.4z M207.1,25.4l-0.5,0.4l-0.6-0.9   l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L207.1,25.4z M211.5,25.4   l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L211.5,25.4z    M215.9,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3   l0,0L215.9,25.4z"}),Ye.createElement("path",{className:"st3",d:"M283.8,9.2l-0.1-0.1c-0.2-0.2-0.3-0.3-0.5-0.5s-0.3-0.3-0.5-0.5c-0.1-0.1-0.3-0.3-0.4-0.4   c-0.6-0.6-1.2-1.1-1.8-1.6c-3.9-3-8.7-4.7-13.9-4.7h-28.1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-42.3c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-13c-1.1,0-2.1,0.4-2.8,1.2c-0.7,0.7-1.2,1.8-1.2,2.8v8.8c-0.1,0-0.2,0-0.2,0   h-0.3h-29.1c-1.7,0-3.2,0.7-4.4,1.8c-1.2,1.2-1.8,2.8-1.8,4.4v0.3H92.9v8.4h12.7v0.7c0,1.7,0.7,3.2,1.8,4.4   c1.2,1.2,2.7,1.8,4.4,1.8h29.1h0.3c0.1,0,0.2,0,0.2,0v7.4c0,1.1,0.4,2.1,1.2,2.8s1.8,1.2,2.8,1.2h72.3l-0.4,0.5l-53.4,63.6   c-0.3,0.4-0.6,0.9-0.7,1.4c-0.2,0.5-0.2,1-0.2,1.5s0.2,1,0.4,1.5s0.6,0.9,1,1.2l28.9,24.3c0.4,0.3,0.9,0.6,1.4,0.7   c0.5,0.2,1,0.2,1.5,0.2s1-0.2,1.5-0.4s0.9-0.6,1.2-1l82.5-98.3l2.9-3.5C291.8,30.3,291.3,17.5,283.8,9.2z M105.1,27.9h-11v-6h11   V27.9z M277.7,45.1l-79.8,95c-0.2,0.3-0.5,0.5-0.8,0.7s-0.7,0.3-1,0.3c-0.4,0-0.7,0-1.1-0.1c-0.3-0.1-0.7-0.3-0.9-0.5l-29-24.3   c-0.3-0.2-0.5-0.5-0.7-0.8s-0.3-0.7-0.3-1c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.3-0.7,0.5-0.9l54-64.4l0.4-0.5l1-1.2l8.1-9.7l0.3-0.3   l0.3-0.3l5.2-6.2l0.3-0.4l0.3-0.4L250,10.6c4.8-5.7,11.8-8.3,18.6-7.6c0.2,0,0.5,0,0.7,0.1c0.3,0,0.6,0.1,0.9,0.1   c0.2,0,0.5,0.1,0.7,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.6,0.2,1.2,0.3,1.8,0.5c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,0.9,0.4   c0.2,0.1,0.4,0.2,0.6,0.3c0.6,0.3,1.2,0.7,1.9,1c0.4,0.2,0.8,0.5,1.2,0.8l0,0c0.4,0.3,0.8,0.6,1.1,0.9c0.1,0.1,0.2,0.2,0.3,0.2   c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.2,0.4,0.4c7.9,7.8,8.6,20.6,1.3,29.3l-4.7,5.6L277.7,45.1z    M234.2,27.8l-6.8,8.1h-60.6c-0.8,0-1.5-0.7-1.5-1.5v-20c0-0.8,0.7-1.5,1.5-1.5h65.9c0.8,0,1.5,0.7,1.5,1.5L234.2,27.8L234.2,27.8z    M141.2,34.9h-0.3h-29.1c-1.3,0-2.6-0.5-3.5-1.5c-0.9-0.9-1.5-2.2-1.5-3.5v-9.5c0-1.3,0.5-2.6,1.5-3.5c0.9-0.9,2.2-1.5,3.5-1.5   h29.1h0.3c0.1,0,0.2,0,0.2,0.1v19.4C141.3,34.8,141.3,34.9,141.2,34.9z M145.4,46.2c-0.7,0-1.4-0.3-2-0.8c-0.5-0.5-0.8-1.2-0.8-2   v-8.2v-3.4V18.1V15V5.4c0-0.7,0.3-1.4,0.8-1.9s1.2-0.8,2-0.8h12.9h19.2h42h19.2h21.4c-4.1,1.2-7.8,3.6-10.8,7.1l-14.5,17.3V14.4   c0-1.2-0.9-2.1-2.1-2.1h-65.9c-1.2,0-2.1,0.9-2.1,2.1v20c0,1.2,0.9,2.1,2.1,2.1h60.1l-8.2,9.7C218.7,46.2,145.4,46.2,145.4,46.2z"}),Ye.createElement("path",{className:"st3",d:"M265.5,12.2c-6.8,0-12.2,5.4-12.2,12.2c0,6.7,5.5,12.2,12.2,12.2c6.8,0,12.2-5.4,12.2-12.2   C277.7,17.7,272.2,12.2,265.5,12.2z M265.5,35.9c-6.4,0-11.6-5.2-11.6-11.5s5.2-11.5,11.6-11.5s11.6,5.2,11.6,11.5   S271.9,35.9,265.5,35.9z"}))),Ky=cD;te();var dD=({onClick:n,error:o,disabled:i,connectPageContent:c,customContentComponent:l,className:g="dapp-ledger-connect-button",ledgerConnectClassNames:h,globalStyles:w,styles:x})=>{let{ledgerModalTitleClassName:S,ledgerModalSubtitleClassName:N,ledgerModalErrorClassName:C,ledgerModalIconClassName:D,ledgerModalButtonClassName:H,ledgerModalFooterLinkClassName:G,ledgerModalFooterClassName:O,ledgerModalContentClassName:X}=h||{};return En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainer,g)},En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerContent,X)},c||En.default.createElement(En.default.Fragment,null,En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerHeading,S)},"Connect Ledger"),En.default.createElement("p",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerDescription,N)},"Unlock your device & open the MultiversX App"),o&&En.default.createElement("p",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerError,C)},o),l,En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerIcon,D)},En.default.createElement(Ky,null))),En.default.createElement("div",{className:(0,lt.default)(x==null?void 0:x.loginConnectContainerFooter,O)},En.default.createElement("button",{onClick:n,disabled:i,"data-testid":"ledgerConnectBtn",className:(0,lt.default)(w==null?void 0:w.btn,w==null?void 0:w.btnPrimary,x==null?void 0:x.loginConnectContainerButton,H)},"Connect Ledger"),En.default.createElement("a",{href:"https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux",target:"_blank",rel:"noopener noreferrer",className:(0,lt.default)(x==null?void 0:x.loginConnectContainerLink,G)},"Having connection issues?"))))},Xy=_e(dD,{ssrStyles:()=>Promise.resolve().then(()=>(um(),_m)),clientStyles:()=>(um(),Le(_m)).default});var Yy=({isLoading:n,customSpinnerComponent:o,customContentComponent:i,ledgerLoadingClassNames:c,ledgerAccount:l,error:g,confirmAddressClassNames:h,token:w,showAddressList:x,accounts:S,addressTableClassNames:N,onConfirmSelectedAddress:C,onGoToSpecificPage:D,onGoToNextPage:H,onGoToPrevPage:G,onSelectAddress:O,selectedAddress:X,startIndex:J,disabledConnectButton:ce,ledgerConnectClassNames:ie,onStartLogin:Y})=>n?Da.default.createElement(Rs,{customSpinnerComponent:o,customContentComponent:i,ledgerLoadingClassNames:c}):l!=null&&!g?Da.default.createElement(qy,{confirmAddressClassNames:h,customContentComponent:i,token:w}):x&&!g?Da.default.createElement(Uy,{accounts:S,addressTableClassNames:N,customContentComponent:i,loading:n,onConfirmSelectedAddress:C,onGoToSpecificPage:D,onGoToNextPage:H,onGoToPrevPage:G,onSelectAddress:O,selectedAddress:X==null?void 0:X.address,startIndex:J}):Da.default.createElement(Xy,{customContentComponent:i,disabled:ce,error:g,ledgerConnectClassNames:ie,onClick:Y});r();r();var Dr=M(require("react")),hm=M(require("classnames"));var lD=({error:n,ledgerAccount:o,ledgerProgressBarClassNames:i,showAddressList:c,showProgressBar:l,styles:g})=>{let h=[{percentage:33,conditions:!c&&!o},{conditions:c&&!n&&!o,percentage:66},{conditions:o!=null&&!n,percentage:100}],w=(0,Dr.useMemo)(()=>h.find(C=>C.conditions),[]),x=w?w.percentage:33;if(!l)return null;let{ledgerProgressBarTrackClassName:S,ledgerProgressBarThumbClassName:N}=i||{};return Dr.default.createElement("div",{className:g==null?void 0:g.ledgerProgressBar},Dr.default.createElement("div",{className:(0,hm.default)(g==null?void 0:g.ledgerProgressBarTrack,S)}),Dr.default.createElement("div",{className:(0,hm.default)(g==null?void 0:g.ledgerProgressBarThumb,N),style:{width:`${x}%`}}))},Jy=_e(lD,{ssrStyles:()=>Promise.resolve().then(()=>(fm(),gm)),clientStyles:()=>(fm(),Le(gm)).default});r();r();var o0=M(require("react"));r();r();var nn=M(require("react")),e0=require("@fortawesome/free-solid-svg-icons"),n0=require("@fortawesome/react-fontawesome"),ym=M(require("classnames"));var uD=n=>{let{className:o,url:i,icon:c,authorizationInfo:l,styles:g}=n,h=i.replace("https://","").replace(/\/$/,""),w=l!=null&&l.url?l.url.replace("https://","").replace(/\/$/,""):"";return nn.default.createElement(nn.default.Fragment,null,nn.default.createElement("p",{className:(0,ym.default)(g==null?void 0:g.scamPhishingAlert,o)},c||nn.default.createElement(n0.FontAwesomeIcon,{className:g==null?void 0:g.scamPhishingAlertIcon,icon:e0.faLock}),nn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},nn.default.createElement("span",null,"Scam/Phishing verification:")," ",nn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertPrefix},nn.default.createElement("strong",null,"https://"),h))),l&&l.url&&nn.default.createElement("p",{className:(0,ym.default)(g==null?void 0:g.scamPhishingAlert,g==null?void 0:g.scamPhishingAlertAuthorization,l.className)},nn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),nn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},nn.default.createElement("strong",null,"https://"),nn.default.createElement("span",null,w," for"),nn.default.createElement("strong",{className:g==null?void 0:g.scamPhishingAlertAuthorizationDuration},l.duration)),nn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),nn.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},t0=_e(uD,{ssrStyles:()=>Promise.resolve().then(()=>(xm(),Tm)),clientStyles:()=>(xm(),Le(Tm)).default});Qe();var r0=({showScamPhishingAlert:n,token:o,ledgerScamPhishingAlertClassName:i})=>{if(!n)return null;let c=Fx(o,i);return o0.default.createElement(t0,{authorizationInfo:c,className:i,url:De().origin})};var Sm=({callbackRoute:n,customSpinnerComponent:o,customContentComponent:i,innerLedgerComponentsClasses:c,nativeAuth:l,onLoginRedirect:g,showProgressBar:h=!0,showScamPhishingAlert:w=!0,token:x})=>{let{ledgerAccount:S}=La(),[N,{error:C,isLoading:D},{accounts:H,onConfirmSelectedAddress:G,onGoToSpecificPage:O,onGoToNextPage:X,onGoToPrevPage:J,onSelectAddress:ce,selectedAddress:ie,showAddressList:Y,startIndex:Q}]=Bd({callbackRoute:n,token:x,onLoginRedirect:g,nativeAuth:l}),ke=Md(x),{addressTableClassNames:Sn,confirmAddressClassNames:rn,ledgerConnectClassNames:bn,ledgerLoadingClassNames:_t,ledgerProgressBarClassNames:lo,ledgerScamPhishingAlertClassName:ut}=c||{};return Mr.default.createElement(Mr.default.Fragment,null,Mr.default.createElement(r0,{ledgerScamPhishingAlertClassName:ut,showScamPhishingAlert:w,token:x}),Mr.default.createElement(Jy,{error:C,ledgerAccount:S,ledgerProgressBarClassNames:lo,showAddressList:Y,showProgressBar:h}),Mr.default.createElement(Yy,E({},{accounts:H,addressTableClassNames:Sn,confirmAddressClassNames:rn,customContentComponent:i,customSpinnerComponent:o,disabledConnectButton:ke,error:C,isLoading:D,ledgerAccount:S,ledgerConnectClassNames:bn,ledgerLoadingClassNames:_t,onConfirmSelectedAddress:G,onGoToSpecificPage:O,onGoToNextPage:X,onGoToPrevPage:J,onSelectAddress:ce,onStartLogin:N,selectedAddress:ie,showAddressList:Y,startIndex:Q,token:x})))};var fD=n=>{let{onClose:o,className:i,showLoginContent:c,wrapContentInsideModal:l,styles:g}=n;return c===!1?null:l?Ds.default.createElement(Fp,{closeOnEscape:n.closeOnEscape,modalConfig:{headerText:"Login with ledger",showHeader:!0,modalContentClassName:g==null?void 0:g.ledgerModalDialogContent,modalHeaderClassName:g==null?void 0:g.ledgerModalHeader,modalHeaderTextClassName:g==null?void 0:g.ledgerModalHeaderText,modalCloseButtonClassName:g==null?void 0:g.ledgerModalCloseButton,modalBodyClassName:g==null?void 0:g.ledgerModalBody,modalDialogClassName:(0,i0.default)(g==null?void 0:g.ledgerLoginContainer,i)},onClose:o,visible:n.showLoginModal},Ds.default.createElement(Sm,E({},n))):Ds.default.createElement(Sm,E({},n))},hD=_e(fD,{ssrStyles:()=>Promise.resolve().then(()=>(wm(),bm)),clientStyles:()=>(wm(),Le(bm)).default});0&&(module.exports={LedgerLoginContainer});
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
//# sourceMappingURL=LedgerLoginContainer.js.map
