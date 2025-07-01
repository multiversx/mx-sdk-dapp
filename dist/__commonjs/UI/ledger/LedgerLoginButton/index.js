"use strict";var tC=Object.create;var aa=Object.defineProperty,oC=Object.defineProperties,rC=Object.getOwnPropertyDescriptor,aC=Object.getOwnPropertyDescriptors,iC=Object.getOwnPropertyNames,Li=Object.getOwnPropertySymbols,sC=Object.getPrototypeOf,pp=Object.prototype.hasOwnProperty,su=Object.prototype.propertyIsEnumerable;var iu=(n,o,a)=>o in n?aa(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,E=(n,o)=>{for(var a in o||(o={}))pp.call(o,a)&&iu(n,a,o[a]);if(Li)for(var a of Li(o))su.call(o,a)&&iu(n,a,o[a]);return n},Z=(n,o)=>oC(n,aC(o));var wo=(n,o)=>{var a={};for(var c in n)pp.call(n,c)&&o.indexOf(c)<0&&(a[c]=n[c]);if(n!=null&&Li)for(var c of Li(n))o.indexOf(c)<0&&su.call(n,c)&&(a[c]=n[c]);return a};var F=(n,o)=>()=>(n&&(o=n(n=0)),o);var W=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports),Pe=(n,o)=>{for(var a in o)aa(n,a,{get:o[a],enumerable:!0})},cu=(n,o,a,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of iC(o))!pp.call(n,l)&&l!==a&&aa(n,l,{get:()=>o[l],enumerable:!(c=rC(o,l))||c.enumerable});return n};var M=(n,o,a)=>(a=n!=null?tC(sC(n)):{},cu(o||!n||!n.__esModule?aa(a,"default",{value:n,enumerable:!0}):a,n)),Ce=n=>cu(aa({},"__esModule",{value:!0}),n);var B=(n,o,a)=>new Promise((c,l)=>{var g=x=>{try{b(a.next(x))}catch(y){l(y)}},h=x=>{try{b(a.throw(x))}catch(y){l(y)}},b=x=>x.done?c(x.value):Promise.resolve(x.value).then(g,h);b((a=a.apply(n,o)).next())});var mu=W(ki=>{"use strict";r();ki.byteLength=pC;ki.toByteArray=mC;ki.fromByteArray=uC;var et=[],Un=[],cC=typeof Uint8Array!="undefined"?Uint8Array:Array,dp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(vo=0,pu=dp.length;vo<pu;++vo)et[vo]=dp[vo],Un[dp.charCodeAt(vo)]=vo;var vo,pu;Un["-".charCodeAt(0)]=62;Un["_".charCodeAt(0)]=63;function du(n){var o=n.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var a=n.indexOf("=");a===-1&&(a=o);var c=a===o?0:4-a%4;return[a,c]}function pC(n){var o=du(n),a=o[0],c=o[1];return(a+c)*3/4-c}function dC(n,o,a){return(o+a)*3/4-a}function mC(n){var o,a=du(n),c=a[0],l=a[1],g=new cC(dC(n,c,l)),h=0,b=l>0?c-4:c,x;for(x=0;x<b;x+=4)o=Un[n.charCodeAt(x)]<<18|Un[n.charCodeAt(x+1)]<<12|Un[n.charCodeAt(x+2)]<<6|Un[n.charCodeAt(x+3)],g[h++]=o>>16&255,g[h++]=o>>8&255,g[h++]=o&255;return l===2&&(o=Un[n.charCodeAt(x)]<<2|Un[n.charCodeAt(x+1)]>>4,g[h++]=o&255),l===1&&(o=Un[n.charCodeAt(x)]<<10|Un[n.charCodeAt(x+1)]<<4|Un[n.charCodeAt(x+2)]>>2,g[h++]=o>>8&255,g[h++]=o&255),g}function lC(n){return et[n>>18&63]+et[n>>12&63]+et[n>>6&63]+et[n&63]}function _C(n,o,a){for(var c,l=[],g=o;g<a;g+=3)c=(n[g]<<16&16711680)+(n[g+1]<<8&65280)+(n[g+2]&255),l.push(lC(c));return l.join("")}function uC(n){for(var o,a=n.length,c=a%3,l=[],g=16383,h=0,b=a-c;h<b;h+=g)l.push(_C(n,h,h+g>b?b:h+g));return c===1?(o=n[a-1],l.push(et[o>>2]+et[o<<4&63]+"==")):c===2&&(o=(n[a-2]<<8)+n[a-1],l.push(et[o>>10]+et[o>>4&63]+et[o<<2&63]+"=")),l.join("")}});var lu=W(mp=>{r();mp.read=function(n,o,a,c,l){var g,h,b=l*8-c-1,x=(1<<b)-1,y=x>>1,N=-7,C=a?l-1:0,D=a?-1:1,H=n[o+C];for(C+=D,g=H&(1<<-N)-1,H>>=-N,N+=b;N>0;g=g*256+n[o+C],C+=D,N-=8);for(h=g&(1<<-N)-1,g>>=-N,N+=c;N>0;h=h*256+n[o+C],C+=D,N-=8);if(g===0)g=1-y;else{if(g===x)return h?NaN:(H?-1:1)*(1/0);h=h+Math.pow(2,c),g=g-y}return(H?-1:1)*h*Math.pow(2,g-c)};mp.write=function(n,o,a,c,l,g){var h,b,x,y=g*8-l-1,N=(1<<y)-1,C=N>>1,D=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,H=c?0:g-1,U=c?1:-1,O=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(b=isNaN(o)?1:0,h=N):(h=Math.floor(Math.log(o)/Math.LN2),o*(x=Math.pow(2,-h))<1&&(h--,x*=2),h+C>=1?o+=D/x:o+=D*Math.pow(2,1-C),o*x>=2&&(h++,x/=2),h+C>=N?(b=0,h=N):h+C>=1?(b=(o*x-1)*Math.pow(2,l),h=h+C):(b=o*Math.pow(2,C-1)*Math.pow(2,l),h=0));l>=8;n[a+H]=b&255,H+=U,b/=256,l-=8);for(h=h<<l|b,y+=l;y>0;n[a+H]=h&255,H+=U,h/=256,y-=8);n[a+H-U]|=O*128}});var Au=W(rr=>{"use strict";r();var lp=mu(),or=lu(),_u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;rr.Buffer=L;rr.SlowBuffer=yC;rr.INSPECT_MAX_BYTES=50;var Pi=2147483647;rr.kMaxLength=Pi;L.TYPED_ARRAY_SUPPORT=gC();!L.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function gC(){try{var n=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(n,o),n.foo()===42}catch(a){return!1}}Object.defineProperty(L.prototype,"parent",{enumerable:!0,get:function(){if(!!L.isBuffer(this))return this.buffer}});Object.defineProperty(L.prototype,"offset",{enumerable:!0,get:function(){if(!!L.isBuffer(this))return this.byteOffset}});function It(n){if(n>Pi)throw new RangeError('The value "'+n+'" is invalid for option "size"');var o=new Uint8Array(n);return Object.setPrototypeOf(o,L.prototype),o}function L(n,o,a){if(typeof n=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return fp(n)}return fu(n,o,a)}L.poolSize=8192;function fu(n,o,a){if(typeof n=="string")return hC(n,o);if(ArrayBuffer.isView(n))return TC(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(nt(n,ArrayBuffer)||n&&nt(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(nt(n,SharedArrayBuffer)||n&&nt(n.buffer,SharedArrayBuffer)))return up(n,o,a);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=n.valueOf&&n.valueOf();if(c!=null&&c!==n)return L.from(c,o,a);var l=xC(n);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return L.from(n[Symbol.toPrimitive]("string"),o,a);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}L.from=function(n,o,a){return fu(n,o,a)};Object.setPrototypeOf(L.prototype,Uint8Array.prototype);Object.setPrototypeOf(L,Uint8Array);function hu(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function fC(n,o,a){return hu(n),n<=0?It(n):o!==void 0?typeof a=="string"?It(n).fill(o,a):It(n).fill(o):It(n)}L.alloc=function(n,o,a){return fC(n,o,a)};function fp(n){return hu(n),It(n<0?0:hp(n)|0)}L.allocUnsafe=function(n){return fp(n)};L.allocUnsafeSlow=function(n){return fp(n)};function hC(n,o){if((typeof o!="string"||o==="")&&(o="utf8"),!L.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var a=Tu(n,o)|0,c=It(a),l=c.write(n,o);return l!==a&&(c=c.slice(0,l)),c}function _p(n){for(var o=n.length<0?0:hp(n.length)|0,a=It(o),c=0;c<o;c+=1)a[c]=n[c]&255;return a}function TC(n){if(nt(n,Uint8Array)){var o=new Uint8Array(n);return up(o.buffer,o.byteOffset,o.byteLength)}return _p(n)}function up(n,o,a){if(o<0||n.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<o+(a||0))throw new RangeError('"length" is outside of buffer bounds');var c;return o===void 0&&a===void 0?c=new Uint8Array(n):a===void 0?c=new Uint8Array(n,o):c=new Uint8Array(n,o,a),Object.setPrototypeOf(c,L.prototype),c}function xC(n){if(L.isBuffer(n)){var o=hp(n.length)|0,a=It(o);return a.length===0||n.copy(a,0,0,o),a}if(n.length!==void 0)return typeof n.length!="number"||Tp(n.length)?It(0):_p(n);if(n.type==="Buffer"&&Array.isArray(n.data))return _p(n.data)}function hp(n){if(n>=Pi)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Pi.toString(16)+" bytes");return n|0}function yC(n){return+n!=n&&(n=0),L.alloc(+n)}L.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==L.prototype};L.compare=function(o,a){if(nt(o,Uint8Array)&&(o=L.from(o,o.offset,o.byteLength)),nt(a,Uint8Array)&&(a=L.from(a,a.offset,a.byteLength)),!L.isBuffer(o)||!L.isBuffer(a))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===a)return 0;for(var c=o.length,l=a.length,g=0,h=Math.min(c,l);g<h;++g)if(o[g]!==a[g]){c=o[g],l=a[g];break}return c<l?-1:l<c?1:0};L.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};L.concat=function(o,a){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return L.alloc(0);var c;if(a===void 0)for(a=0,c=0;c<o.length;++c)a+=o[c].length;var l=L.allocUnsafe(a),g=0;for(c=0;c<o.length;++c){var h=o[c];if(nt(h,Uint8Array))g+h.length>l.length?L.from(h).copy(l,g):Uint8Array.prototype.set.call(l,h,g);else if(L.isBuffer(h))h.copy(l,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=h.length}return l};function Tu(n,o){if(L.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||nt(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var a=n.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&a===0)return 0;for(var l=!1;;)switch(o){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return gp(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a*2;case"hex":return a>>>1;case"base64":return vu(n).length;default:if(l)return c?-1:gp(n).length;o=(""+o).toLowerCase(),l=!0}}L.byteLength=Tu;function SC(n,o,a){var c=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((a===void 0||a>this.length)&&(a=this.length),a<=0)||(a>>>=0,o>>>=0,a<=o))return"";for(n||(n="utf8");;)switch(n){case"hex":return EC(this,o,a);case"utf8":case"utf-8":return yu(this,o,a);case"ascii":return kC(this,o,a);case"latin1":case"binary":return PC(this,o,a);case"base64":return CC(this,o,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return NC(this,o,a);default:if(c)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),c=!0}}L.prototype._isBuffer=!0;function Ao(n,o,a){var c=n[o];n[o]=n[a],n[a]=c}L.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var a=0;a<o;a+=2)Ao(this,a,a+1);return this};L.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var a=0;a<o;a+=4)Ao(this,a,a+3),Ao(this,a+1,a+2);return this};L.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var a=0;a<o;a+=8)Ao(this,a,a+7),Ao(this,a+1,a+6),Ao(this,a+2,a+5),Ao(this,a+3,a+4);return this};L.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?yu(this,0,o):SC.apply(this,arguments)};L.prototype.toLocaleString=L.prototype.toString;L.prototype.equals=function(o){if(!L.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:L.compare(this,o)===0};L.prototype.inspect=function(){var o="",a=rr.INSPECT_MAX_BYTES;return o=this.toString("hex",0,a).replace(/(.{2})/g,"$1 ").trim(),this.length>a&&(o+=" ... "),"<Buffer "+o+">"};_u&&(L.prototype[_u]=L.prototype.inspect);L.prototype.compare=function(o,a,c,l,g){if(nt(o,Uint8Array)&&(o=L.from(o,o.offset,o.byteLength)),!L.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(a===void 0&&(a=0),c===void 0&&(c=o?o.length:0),l===void 0&&(l=0),g===void 0&&(g=this.length),a<0||c>o.length||l<0||g>this.length)throw new RangeError("out of range index");if(l>=g&&a>=c)return 0;if(l>=g)return-1;if(a>=c)return 1;if(a>>>=0,c>>>=0,l>>>=0,g>>>=0,this===o)return 0;for(var h=g-l,b=c-a,x=Math.min(h,b),y=this.slice(l,g),N=o.slice(a,c),C=0;C<x;++C)if(y[C]!==N[C]){h=y[C],b=N[C];break}return h<b?-1:b<h?1:0};function xu(n,o,a,c,l){if(n.length===0)return-1;if(typeof a=="string"?(c=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),a=+a,Tp(a)&&(a=l?0:n.length-1),a<0&&(a=n.length+a),a>=n.length){if(l)return-1;a=n.length-1}else if(a<0)if(l)a=0;else return-1;if(typeof o=="string"&&(o=L.from(o,c)),L.isBuffer(o))return o.length===0?-1:uu(n,o,a,c,l);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(n,o,a):Uint8Array.prototype.lastIndexOf.call(n,o,a):uu(n,[o],a,c,l);throw new TypeError("val must be string, number or Buffer")}function uu(n,o,a,c,l){var g=1,h=n.length,b=o.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(n.length<2||o.length<2)return-1;g=2,h/=2,b/=2,a/=2}function x(H,U){return g===1?H[U]:H.readUInt16BE(U*g)}var y;if(l){var N=-1;for(y=a;y<h;y++)if(x(n,y)===x(o,N===-1?0:y-N)){if(N===-1&&(N=y),y-N+1===b)return N*g}else N!==-1&&(y-=y-N),N=-1}else for(a+b>h&&(a=h-b),y=a;y>=0;y--){for(var C=!0,D=0;D<b;D++)if(x(n,y+D)!==x(o,D)){C=!1;break}if(C)return y}return-1}L.prototype.includes=function(o,a,c){return this.indexOf(o,a,c)!==-1};L.prototype.indexOf=function(o,a,c){return xu(this,o,a,c,!0)};L.prototype.lastIndexOf=function(o,a,c){return xu(this,o,a,c,!1)};function bC(n,o,a,c){a=Number(a)||0;var l=n.length-a;c?(c=Number(c),c>l&&(c=l)):c=l;var g=o.length;c>g/2&&(c=g/2);for(var h=0;h<c;++h){var b=parseInt(o.substr(h*2,2),16);if(Tp(b))return h;n[a+h]=b}return h}function wC(n,o,a,c){return Ei(gp(o,n.length-a),n,a,c)}function vC(n,o,a,c){return Ei(MC(o),n,a,c)}function AC(n,o,a,c){return Ei(vu(o),n,a,c)}function IC(n,o,a,c){return Ei(OC(o,n.length-a),n,a,c)}L.prototype.write=function(o,a,c,l){if(a===void 0)l="utf8",c=this.length,a=0;else if(c===void 0&&typeof a=="string")l=a,c=this.length,a=0;else if(isFinite(a))a=a>>>0,isFinite(c)?(c=c>>>0,l===void 0&&(l="utf8")):(l=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var g=this.length-a;if((c===void 0||c>g)&&(c=g),o.length>0&&(c<0||a<0)||a>this.length)throw new RangeError("Attempt to write outside buffer bounds");l||(l="utf8");for(var h=!1;;)switch(l){case"hex":return bC(this,o,a,c);case"utf8":case"utf-8":return wC(this,o,a,c);case"ascii":case"latin1":case"binary":return vC(this,o,a,c);case"base64":return AC(this,o,a,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return IC(this,o,a,c);default:if(h)throw new TypeError("Unknown encoding: "+l);l=(""+l).toLowerCase(),h=!0}};L.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function CC(n,o,a){return o===0&&a===n.length?lp.fromByteArray(n):lp.fromByteArray(n.slice(o,a))}function yu(n,o,a){a=Math.min(n.length,a);for(var c=[],l=o;l<a;){var g=n[l],h=null,b=g>239?4:g>223?3:g>191?2:1;if(l+b<=a){var x,y,N,C;switch(b){case 1:g<128&&(h=g);break;case 2:x=n[l+1],(x&192)===128&&(C=(g&31)<<6|x&63,C>127&&(h=C));break;case 3:x=n[l+1],y=n[l+2],(x&192)===128&&(y&192)===128&&(C=(g&15)<<12|(x&63)<<6|y&63,C>2047&&(C<55296||C>57343)&&(h=C));break;case 4:x=n[l+1],y=n[l+2],N=n[l+3],(x&192)===128&&(y&192)===128&&(N&192)===128&&(C=(g&15)<<18|(x&63)<<12|(y&63)<<6|N&63,C>65535&&C<1114112&&(h=C))}}h===null?(h=65533,b=1):h>65535&&(h-=65536,c.push(h>>>10&1023|55296),h=56320|h&1023),c.push(h),l+=b}return LC(c)}var gu=4096;function LC(n){var o=n.length;if(o<=gu)return String.fromCharCode.apply(String,n);for(var a="",c=0;c<o;)a+=String.fromCharCode.apply(String,n.slice(c,c+=gu));return a}function kC(n,o,a){var c="";a=Math.min(n.length,a);for(var l=o;l<a;++l)c+=String.fromCharCode(n[l]&127);return c}function PC(n,o,a){var c="";a=Math.min(n.length,a);for(var l=o;l<a;++l)c+=String.fromCharCode(n[l]);return c}function EC(n,o,a){var c=n.length;(!o||o<0)&&(o=0),(!a||a<0||a>c)&&(a=c);for(var l="",g=o;g<a;++g)l+=BC[n[g]];return l}function NC(n,o,a){for(var c=n.slice(o,a),l="",g=0;g<c.length-1;g+=2)l+=String.fromCharCode(c[g]+c[g+1]*256);return l}L.prototype.slice=function(o,a){var c=this.length;o=~~o,a=a===void 0?c:~~a,o<0?(o+=c,o<0&&(o=0)):o>c&&(o=c),a<0?(a+=c,a<0&&(a=0)):a>c&&(a=c),a<o&&(a=o);var l=this.subarray(o,a);return Object.setPrototypeOf(l,L.prototype),l};function je(n,o,a){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+o>a)throw new RangeError("Trying to access beyond buffer length")}L.prototype.readUintLE=L.prototype.readUIntLE=function(o,a,c){o=o>>>0,a=a>>>0,c||je(o,a,this.length);for(var l=this[o],g=1,h=0;++h<a&&(g*=256);)l+=this[o+h]*g;return l};L.prototype.readUintBE=L.prototype.readUIntBE=function(o,a,c){o=o>>>0,a=a>>>0,c||je(o,a,this.length);for(var l=this[o+--a],g=1;a>0&&(g*=256);)l+=this[o+--a]*g;return l};L.prototype.readUint8=L.prototype.readUInt8=function(o,a){return o=o>>>0,a||je(o,1,this.length),this[o]};L.prototype.readUint16LE=L.prototype.readUInt16LE=function(o,a){return o=o>>>0,a||je(o,2,this.length),this[o]|this[o+1]<<8};L.prototype.readUint16BE=L.prototype.readUInt16BE=function(o,a){return o=o>>>0,a||je(o,2,this.length),this[o]<<8|this[o+1]};L.prototype.readUint32LE=L.prototype.readUInt32LE=function(o,a){return o=o>>>0,a||je(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};L.prototype.readUint32BE=L.prototype.readUInt32BE=function(o,a){return o=o>>>0,a||je(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};L.prototype.readIntLE=function(o,a,c){o=o>>>0,a=a>>>0,c||je(o,a,this.length);for(var l=this[o],g=1,h=0;++h<a&&(g*=256);)l+=this[o+h]*g;return g*=128,l>=g&&(l-=Math.pow(2,8*a)),l};L.prototype.readIntBE=function(o,a,c){o=o>>>0,a=a>>>0,c||je(o,a,this.length);for(var l=a,g=1,h=this[o+--l];l>0&&(g*=256);)h+=this[o+--l]*g;return g*=128,h>=g&&(h-=Math.pow(2,8*a)),h};L.prototype.readInt8=function(o,a){return o=o>>>0,a||je(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};L.prototype.readInt16LE=function(o,a){o=o>>>0,a||je(o,2,this.length);var c=this[o]|this[o+1]<<8;return c&32768?c|4294901760:c};L.prototype.readInt16BE=function(o,a){o=o>>>0,a||je(o,2,this.length);var c=this[o+1]|this[o]<<8;return c&32768?c|4294901760:c};L.prototype.readInt32LE=function(o,a){return o=o>>>0,a||je(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};L.prototype.readInt32BE=function(o,a){return o=o>>>0,a||je(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};L.prototype.readFloatLE=function(o,a){return o=o>>>0,a||je(o,4,this.length),or.read(this,o,!0,23,4)};L.prototype.readFloatBE=function(o,a){return o=o>>>0,a||je(o,4,this.length),or.read(this,o,!1,23,4)};L.prototype.readDoubleLE=function(o,a){return o=o>>>0,a||je(o,8,this.length),or.read(this,o,!0,52,8)};L.prototype.readDoubleBE=function(o,a){return o=o>>>0,a||je(o,8,this.length),or.read(this,o,!1,52,8)};function Tn(n,o,a,c,l,g){if(!L.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>l||o<g)throw new RangeError('"value" argument is out of bounds');if(a+c>n.length)throw new RangeError("Index out of range")}L.prototype.writeUintLE=L.prototype.writeUIntLE=function(o,a,c,l){if(o=+o,a=a>>>0,c=c>>>0,!l){var g=Math.pow(2,8*c)-1;Tn(this,o,a,c,g,0)}var h=1,b=0;for(this[a]=o&255;++b<c&&(h*=256);)this[a+b]=o/h&255;return a+c};L.prototype.writeUintBE=L.prototype.writeUIntBE=function(o,a,c,l){if(o=+o,a=a>>>0,c=c>>>0,!l){var g=Math.pow(2,8*c)-1;Tn(this,o,a,c,g,0)}var h=c-1,b=1;for(this[a+h]=o&255;--h>=0&&(b*=256);)this[a+h]=o/b&255;return a+c};L.prototype.writeUint8=L.prototype.writeUInt8=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,1,255,0),this[a]=o&255,a+1};L.prototype.writeUint16LE=L.prototype.writeUInt16LE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,2,65535,0),this[a]=o&255,this[a+1]=o>>>8,a+2};L.prototype.writeUint16BE=L.prototype.writeUInt16BE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,2,65535,0),this[a]=o>>>8,this[a+1]=o&255,a+2};L.prototype.writeUint32LE=L.prototype.writeUInt32LE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,4,4294967295,0),this[a+3]=o>>>24,this[a+2]=o>>>16,this[a+1]=o>>>8,this[a]=o&255,a+4};L.prototype.writeUint32BE=L.prototype.writeUInt32BE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,4,4294967295,0),this[a]=o>>>24,this[a+1]=o>>>16,this[a+2]=o>>>8,this[a+3]=o&255,a+4};L.prototype.writeIntLE=function(o,a,c,l){if(o=+o,a=a>>>0,!l){var g=Math.pow(2,8*c-1);Tn(this,o,a,c,g-1,-g)}var h=0,b=1,x=0;for(this[a]=o&255;++h<c&&(b*=256);)o<0&&x===0&&this[a+h-1]!==0&&(x=1),this[a+h]=(o/b>>0)-x&255;return a+c};L.prototype.writeIntBE=function(o,a,c,l){if(o=+o,a=a>>>0,!l){var g=Math.pow(2,8*c-1);Tn(this,o,a,c,g-1,-g)}var h=c-1,b=1,x=0;for(this[a+h]=o&255;--h>=0&&(b*=256);)o<0&&x===0&&this[a+h+1]!==0&&(x=1),this[a+h]=(o/b>>0)-x&255;return a+c};L.prototype.writeInt8=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,1,127,-128),o<0&&(o=255+o+1),this[a]=o&255,a+1};L.prototype.writeInt16LE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,2,32767,-32768),this[a]=o&255,this[a+1]=o>>>8,a+2};L.prototype.writeInt16BE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,2,32767,-32768),this[a]=o>>>8,this[a+1]=o&255,a+2};L.prototype.writeInt32LE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,4,2147483647,-2147483648),this[a]=o&255,this[a+1]=o>>>8,this[a+2]=o>>>16,this[a+3]=o>>>24,a+4};L.prototype.writeInt32BE=function(o,a,c){return o=+o,a=a>>>0,c||Tn(this,o,a,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[a]=o>>>24,this[a+1]=o>>>16,this[a+2]=o>>>8,this[a+3]=o&255,a+4};function Su(n,o,a,c,l,g){if(a+c>n.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("Index out of range")}function bu(n,o,a,c,l){return o=+o,a=a>>>0,l||Su(n,o,a,4,34028234663852886e22,-34028234663852886e22),or.write(n,o,a,c,23,4),a+4}L.prototype.writeFloatLE=function(o,a,c){return bu(this,o,a,!0,c)};L.prototype.writeFloatBE=function(o,a,c){return bu(this,o,a,!1,c)};function wu(n,o,a,c,l){return o=+o,a=a>>>0,l||Su(n,o,a,8,17976931348623157e292,-17976931348623157e292),or.write(n,o,a,c,52,8),a+8}L.prototype.writeDoubleLE=function(o,a,c){return wu(this,o,a,!0,c)};L.prototype.writeDoubleBE=function(o,a,c){return wu(this,o,a,!1,c)};L.prototype.copy=function(o,a,c,l){if(!L.isBuffer(o))throw new TypeError("argument should be a Buffer");if(c||(c=0),!l&&l!==0&&(l=this.length),a>=o.length&&(a=o.length),a||(a=0),l>0&&l<c&&(l=c),l===c||o.length===0||this.length===0)return 0;if(a<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(l<0)throw new RangeError("sourceEnd out of bounds");l>this.length&&(l=this.length),o.length-a<l-c&&(l=o.length-a+c);var g=l-c;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(a,c,l):Uint8Array.prototype.set.call(o,this.subarray(c,l),a),g};L.prototype.fill=function(o,a,c,l){if(typeof o=="string"){if(typeof a=="string"?(l=a,a=0,c=this.length):typeof c=="string"&&(l=c,c=this.length),l!==void 0&&typeof l!="string")throw new TypeError("encoding must be a string");if(typeof l=="string"&&!L.isEncoding(l))throw new TypeError("Unknown encoding: "+l);if(o.length===1){var g=o.charCodeAt(0);(l==="utf8"&&g<128||l==="latin1")&&(o=g)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(a<0||this.length<a||this.length<c)throw new RangeError("Out of range index");if(c<=a)return this;a=a>>>0,c=c===void 0?this.length:c>>>0,o||(o=0);var h;if(typeof o=="number")for(h=a;h<c;++h)this[h]=o;else{var b=L.isBuffer(o)?o:L.from(o,l),x=b.length;if(x===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(h=0;h<c-a;++h)this[h+a]=b[h%x]}return this};var RC=/[^+/0-9A-Za-z-_]/g;function DC(n){if(n=n.split("=")[0],n=n.trim().replace(RC,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function gp(n,o){o=o||1/0;for(var a,c=n.length,l=null,g=[],h=0;h<c;++h){if(a=n.charCodeAt(h),a>55295&&a<57344){if(!l){if(a>56319){(o-=3)>-1&&g.push(239,191,189);continue}else if(h+1===c){(o-=3)>-1&&g.push(239,191,189);continue}l=a;continue}if(a<56320){(o-=3)>-1&&g.push(239,191,189),l=a;continue}a=(l-55296<<10|a-56320)+65536}else l&&(o-=3)>-1&&g.push(239,191,189);if(l=null,a<128){if((o-=1)<0)break;g.push(a)}else if(a<2048){if((o-=2)<0)break;g.push(a>>6|192,a&63|128)}else if(a<65536){if((o-=3)<0)break;g.push(a>>12|224,a>>6&63|128,a&63|128)}else if(a<1114112){if((o-=4)<0)break;g.push(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}else throw new Error("Invalid code point")}return g}function MC(n){for(var o=[],a=0;a<n.length;++a)o.push(n.charCodeAt(a)&255);return o}function OC(n,o){for(var a,c,l,g=[],h=0;h<n.length&&!((o-=2)<0);++h)a=n.charCodeAt(h),c=a>>8,l=a%256,g.push(l),g.push(c);return g}function vu(n){return lp.toByteArray(DC(n))}function Ei(n,o,a,c){for(var l=0;l<c&&!(l+a>=o.length||l>=n.length);++l)o[l+a]=n[l];return l}function nt(n,o){return n instanceof o||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===o.name}function Tp(n){return n!==n}var BC=function(){for(var n="0123456789abcdef",o=new Array(256),a=0;a<16;++a)for(var c=a*16,l=0;l<16;++l)o[c+l]=n[a]+n[l];return o}()});var Pu=W((BD,ku)=>{r();var We=ku.exports={},tt,ot;function xp(){throw new Error("setTimeout has not been defined")}function yp(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?tt=setTimeout:tt=xp}catch(n){tt=xp}try{typeof clearTimeout=="function"?ot=clearTimeout:ot=yp}catch(n){ot=yp}})();function Iu(n){if(tt===setTimeout)return setTimeout(n,0);if((tt===xp||!tt)&&setTimeout)return tt=setTimeout,setTimeout(n,0);try{return tt(n,0)}catch(o){try{return tt.call(null,n,0)}catch(a){return tt.call(this,n,0)}}}function FC(n){if(ot===clearTimeout)return clearTimeout(n);if((ot===yp||!ot)&&clearTimeout)return ot=clearTimeout,clearTimeout(n);try{return ot(n)}catch(o){try{return ot.call(null,n)}catch(a){return ot.call(this,n)}}}var Ct=[],ar=!1,Io,Ni=-1;function WC(){!ar||!Io||(ar=!1,Io.length?Ct=Io.concat(Ct):Ni=-1,Ct.length&&Cu())}function Cu(){if(!ar){var n=Iu(WC);ar=!0;for(var o=Ct.length;o;){for(Io=Ct,Ct=[];++Ni<o;)Io&&Io[Ni].run();Ni=-1,o=Ct.length}Io=null,ar=!1,FC(n)}}We.nextTick=function(n){var o=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)o[a-1]=arguments[a];Ct.push(new Lu(n,o)),Ct.length===1&&!ar&&Iu(Cu)};function Lu(n,o){this.fun=n,this.array=o}Lu.prototype.run=function(){this.fun.apply(null,this.array)};We.title="browser";We.browser=!0;We.env={};We.argv=[];We.version="";We.versions={};function Lt(){}We.on=Lt;We.addListener=Lt;We.once=Lt;We.off=Lt;We.removeListener=Lt;We.removeAllListeners=Lt;We.emit=Lt;We.prependListener=Lt;We.prependOnceListener=Lt;We.listeners=function(n){return[]};We.binding=function(n){throw new Error("process.binding is not supported")};We.cwd=function(){return"/"};We.chdir=function(n){throw new Error("process.chdir is not supported")};We.umask=function(){return 0}});var d,m,UC,p,r=F(()=>{d=M(Au()),m=M(Pu()),UC=function(n){function o(){var c=this||self;return delete n.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return o();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:o});var a=__magic__;return a}(Object),p=UC});var Eu=F(()=>{"use strict";r()});var rt,at=F(()=>{"use strict";r();rt="Action not allowed. User is logged in. Call logout() first"});var Nu=F(()=>{"use strict";r()});var Sp,Ru=F(()=>{"use strict";r();Sp=(c=>(c.SetGuardian="SetGuardian",c.GuardAccount="GuardAccount",c.UnGuardAccount="UnGuardAccount",c))(Sp||{})});var bp,wp,vp,Ap,Ip,Cp,Du=F(()=>{"use strict";r();bp="1.0.8",wp="1.0.11",vp="1.0.15",Ap="1.0.17",Ip="1.0.22",Cp="1.0.23"});var Lp,kp=F(()=>{"use strict";r();Lp={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var Mu=F(()=>{"use strict";r()});var Pp=F(()=>{"use strict";r()});var Ou=F(()=>{"use strict";r()});var Bu=F(()=>{"use strict";r()});var Jt,ir,Qt=F(()=>{"use strict";r();Jt=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),ir=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Ge,Fu,XD,Wu,YD,Le=F(()=>{"use strict";r();Qt();Ge=(D=>(D.ledger="ledger",D.walletconnect="walletconnect",D.walletconnectv2="walletconnectv2",D.wallet="wallet",D.crossWindow="crossWindow",D.iframe="iframe",D.extension="extension",D.passkey="passkey",D.metamask="metamask",D.opera="opera",D.extra="extra",D.none="",D))(Ge||{}),Fu=(a=>(a.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",a.reloginRequest="RELOGIN_REQUEST",a))(Fu||{}),XD=E(E({},ir.WindowProviderRequestEnums),Fu),Wu=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Wu||{}),YD=E(E({},ir.WindowProviderResponseEnums),Wu)});var Uu=F(()=>{"use strict";r()});var Gu=F(()=>{"use strict";r()});var xn=F(()=>{"use strict";r()});var Hu=F(()=>{"use strict";r()});var $u=F(()=>{"use strict";r()});var zu=F(()=>{"use strict";r()});var Ue=F(()=>{"use strict";r();Pp();Ou();Bu();Le();Uu();Gu();xn();Hu();$u();zu()});var sr,Vu,_M,qu,uM,Ku,gM,fM,GC,ju,cr=F(()=>{"use strict";r();Ue();sr={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Vu,egldLabel:_M}=sr["devnet"],{chainId:qu,egldLabel:uM}=sr["testnet"],{chainId:Ku,egldLabel:gM}=sr["mainnet"],fM={["devnet"]:Vu,["testnet"]:qu,["mainnet"]:Ku},GC={[Vu]:"devnet",[qu]:"testnet",[Ku]:"mainnet"},ju="multiversx://"});var Ri=F(()=>{"use strict";r()});var it,Xu=F(()=>{"use strict";r();it=require("@multiversx/sdk-web-wallet-provider")});var Xn,ia=F(()=>{"use strict";r();Xn=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Yu,Zu,Ep,bM,wM,Np=F(()=>{"use strict";r();ia();Ep=String((Zu=(Yu=Xn.safeWindow)==null?void 0:Yu.navigator)==null?void 0:Zu.userAgent),bM=/^((?!chrome|android).)*safari/i.test(Ep),wM=/firefox/i.test(Ep)&&/windows/i.test(Ep)});var Di,Mi,Pn,Co,Ju,Qu,Oi,eg,st,pr,te=F(()=>{"use strict";r();Eu();at();Nu();Ru();Du();kp();Mu();cr();Ri();Xu();Np();Di=5e4,Mi=1e9,Pn=18,Co=4,Ju=1,Qu=1,Oi="logout",eg="login",st="0",pr="..."});var dr,Bi=F(()=>{"use strict";r();dr=()=>Date.now()/1e3});var ng=F(()=>{"use strict";r()});var tg=F(()=>{"use strict";r()});var Rp=F(()=>{"use strict";r();Bi();ng();tg()});var Dp={};Pe(Dp,{clear:()=>VC,getItem:()=>$C,localStorageKeys:()=>eo,removeItem:()=>zC,setItem:()=>HC});var eo,Fi,HC,$C,zC,VC,mr=F(()=>{"use strict";r();Rp();eo={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Fi=typeof localStorage!="undefined",HC=({key:n,data:o,expires:a})=>{!Fi||localStorage.setItem(String(n),JSON.stringify({expires:a,data:o}))},$C=n=>{if(!Fi)return;let o=localStorage.getItem(String(n));if(!o)return null;let a=JSON.parse(o);return!a||!a.hasOwnProperty("expires")||!a.hasOwnProperty("data")?null:dr()>=a.expires?(localStorage.removeItem(String(n)),null):a.data},zC=n=>{!Fi||localStorage.removeItem(String(n))},VC=()=>{!Fi||localStorage.clear()}});var Mp={};Pe(Mp,{clear:()=>ig,getItem:()=>rg,removeItem:()=>ag,setItem:()=>og,storage:()=>qC});var og,rg,ag,ig,qC,sg=F(()=>{"use strict";r();og=({key:n,data:o,expires:a})=>{sessionStorage.setItem(String(n),JSON.stringify({expires:a,data:o}))},rg=n=>{let o=sessionStorage.getItem(String(n));if(!o)return null;let a=JSON.parse(o);return!a||!a.hasOwnProperty("expires")||!a.hasOwnProperty("data")?null:Date.now()>=a.expires?(sessionStorage.removeItem(String(n)),null):a.data},ag=n=>sessionStorage.removeItem(String(n)),ig=()=>sessionStorage.clear(),qC={setItem:og,getItem:rg,removeItem:ag,clear:ig}});var Lo,lr=F(()=>{"use strict";r();mr();sg();Lo={session:Mp,local:Dp}});var Op,Ne,mn,Re=F(()=>{"use strict";r();Op=require("@reduxjs/toolkit");te();Ne=(0,Op.createAction)(Oi),mn=(0,Op.createAction)(eg,n=>({payload:n}))});var Fp,cg,pg,Wi,Bp,dg,Ui,KC,Wp,e5,Up,mg,n5,t5,o5,jC,XC,Gi,Hi=F(()=>{"use strict";r();Fp=require("@multiversx/sdk-core"),cg=require("@reduxjs/toolkit"),pg=require("redux-persist");te();lr();mr();Re();Wi={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:st},Bp={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Wi},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},dg=(0,cg.createSlice)({name:"accountInfoSlice",initialState:Bp,reducers:{setAddress:(n,o)=>{let a=o.payload;n.address=a,n.publicKey=a?new Fp.Address(a).hex():""},setAccount:(n,o)=>{let a=n.address===o.payload.address;n.accounts={[n.address]:a?o.payload:Wi},n.shard=o.payload.shard,n.isAccountLoading=!1,n.accountLoadingError=null},setAccountNonce:(n,o)=>{let{address:a}=n;n.accounts[a].nonce=o.payload},setAccountShard:(n,o)=>{n.shard=o.payload},setLedgerAccount:(n,o)=>{n.ledgerAccount=o.payload},updateLedgerAccount:(n,o)=>{n.ledgerAccount!=null&&(n.ledgerAccount.index=o.payload.index,n.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(n,o)=>{n.walletConnectAccount=o.payload},setIsAccountLoading:(n,o)=>{n.isAccountLoading=o.payload,n.accountLoadingError=null},setAccountLoadingError:(n,o)=>{n.accountLoadingError=o.payload,n.isAccountLoading=!1},setWebsocketEvent:(n,o)=>{n.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(n,o)=>{n.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:n=>{n.addCase(Ne,()=>(Lo.local.removeItem(eo.loginExpiresAt),Bp)),n.addCase(mn,(o,a)=>{let{address:c}=a.payload;o.address=c,o.publicKey=new Fp.Address(c).hex()}),n.addCase(pg.REHYDRATE,(o,a)=>{var y;if(!((y=a.payload)!=null&&y.account))return;let{account:c}=a.payload,{address:l,shard:g,accounts:h,publicKey:b}=c;o.address=l,o.shard=g;let x=h&&l in h;o.accounts=x?h:Bp.accounts,o.publicKey=b})}}),{setAccount:Ui,setAddress:KC,setAccountNonce:Wp,setAccountShard:e5,setLedgerAccount:Up,updateLedgerAccount:mg,setWalletConnectAccount:n5,setIsAccountLoading:t5,setAccountLoadingError:o5,setWebsocketEvent:jC,setWebsocketBatchEvent:XC}=dg.actions,Gi=dg.reducer});function sa(){return new Date().setHours(new Date().getHours()+24)}function ca(n){Lo.local.setItem({key:eo.loginExpiresAt,data:n,expires:n})}var Gp=F(()=>{"use strict";r();lr();mr()});var _g,lg,ug,_5,YC,gg,pa,u5,ZC,fg,g5,f5,h5,$i,zi=F(()=>{"use strict";r();_g=require("@reduxjs/toolkit");Gp();Le();Re();lg={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},ug=(0,_g.createSlice)({name:"loginInfoSlice",initialState:lg,reducers:{setLoginMethod:(n,o)=>{n.loginMethod=o.payload},setTokenLogin:(n,o)=>{n.tokenLogin=o.payload},setTokenLoginSignature:(n,o)=>{(n==null?void 0:n.tokenLogin)!=null&&(n.tokenLogin.signature=o.payload)},setWalletLogin:(n,o)=>{n.walletLogin=o.payload},setWalletConnectLogin:(n,o)=>{n.walletConnectLogin=o.payload},setLedgerLogin:(n,o)=>{n.ledgerLogin=o.payload},setWebviewLogin:(n,o)=>{n.webviewLogin=o.payload},invalidateLoginSession:n=>{n.isLoginSessionInvalid=!0},setLogoutRoute:(n,o)=>{n.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(n,o)=>{n.isWalletConnectV2Initialized=o.payload}},extraReducers:n=>{n.addCase(Ne,()=>lg),n.addCase(mn,(o,a)=>{o.isLoginSessionInvalid=!1,o.loginMethod=a.payload.loginMethod,o.iframeLoginType=a.payload.iframeLoginType,ca(sa())})}}),{setLoginMethod:_5,setWalletConnectLogin:YC,setLedgerLogin:gg,setTokenLogin:pa,setTokenLoginSignature:u5,setWalletLogin:ZC,invalidateLoginSession:fg,setLogoutRoute:g5,setIsWalletConnectV2Initialized:f5,setWebviewLogin:h5}=ug.actions,$i=ug.reducer});var Tg,hg,xg,S5,JC,b5,QC,Vi,qi=F(()=>{"use strict";r();Tg=require("@reduxjs/toolkit");Re();hg={},xg=(0,Tg.createSlice)({name:"modalsSlice",initialState:hg,reducers:{setTxSubmittedModal:(n,o)=>{n.txSubmittedModal=o.payload},setNotificationModal:(n,o)=>{n.notificationModal=o.payload},clearTxSubmittedModal:n=>{n.txSubmittedModal=void 0},clearNotificationModal:n=>{n.notificationModal=void 0}},extraReducers:n=>{n.addCase(Ne,()=>hg)}}),{setTxSubmittedModal:S5,setNotificationModal:JC,clearTxSubmittedModal:b5,clearNotificationModal:QC}=xg.actions,Vi=xg.reducer});var ko,_r=F(()=>{"use strict";r();ko=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var De,Qe=F(()=>{"use strict";r();_r();De=()=>{if(!ko())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:a,origin:c,href:l,search:g}}=window;return{pathname:o,hash:a,origin:c,href:l,search:g}}});var yg=F(()=>{"use strict";r();Qe()});var Sg=F(()=>{"use strict";r();en()});var bg,wg=F(()=>{"use strict";r();ia();bg=n=>{if(!Xn.safeWindow.location)return;if(!new URL(Xn.safeWindow.location.href).protocol.startsWith("http"))return Xn.safeWindow.location.reload();Xn.safeWindow.location.assign(n)}});var en=F(()=>{"use strict";r();yg();Sg();Qe();wg()});var eL,Ki,da=F(()=>{"use strict";r();en();eL=!1,Ki=({timeout:n=0,url:o})=>{eL||setTimeout(()=>{if(!!window)return bg(o)},n)}});function kt({callbackRoute:n,onLoginRedirect:o,options:a}){let c=Boolean(n),l=typeof o=="function";if(c&&n!=null){if(l)return o(n,a);Ki({url:n,timeout:nL})}}var nL,vg=F(()=>{"use strict";r();da();nL=200});function Ag(n){return n[Math.floor(Math.random()*n.length)]}var Ig=F(()=>{"use strict";r()});function Hp(n){let o=null;if((n==null?void 0:n.statusCode)in Lp){let a=n==null?void 0:n.statusCode,{message:c}=Lp[a];o=rL.includes(a)?Cg:c}return{errorMessage:o,defaultErrorMessage:Cg}}var Cg,tL,oL,rL,$p=F(()=>{"use strict";r();kp();Cg="Check if the MultiversX app is open on Ledger",tL=28161,oL=28160,rL=[tL,oL]});var Pt=F(()=>{"use strict";r();vg();Ig();$p()});var Lg,kg,Pg,zp,iL,Eg,Q5,e6,sL,ji,Xi=F(()=>{"use strict";r();Lg=require("@reduxjs/toolkit"),kg=M(require("lodash.omit")),Pg=require("redux-persist");Ri();Re();Pt();zp={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},iL={network:zp},Eg=(0,Lg.createSlice)({name:"appConfig",initialState:iL,reducers:{initializeNetworkConfig:(n,o)=>{let a=Ag(o.payload.walletConnectV2RelayAddresses),c=(0,kg.default)(o.payload,"walletConnectV2RelayAddresses");n.network=Z(E(E({},n.network),c),{walletConnectV2RelayAddress:a})},updateNetworkConfig:(n,o)=>{n.network=E(E({},n.network),o.payload)},setCustomWalletAddress:(n,o)=>{n.network.customWalletAddress=o.payload}},extraReducers:n=>{n.addCase(Ne,o=>{o.network.customWalletAddress=void 0}),n.addCase(Pg.REHYDRATE,(o,a)=>{var l,g;if(!((g=(l=a.payload)==null?void 0:l.network)!=null&&g.customWalletAddress))return;let{network:{customWalletAddress:c}}=a.payload;o.network.customWalletAddress=c})}}),{initializeNetworkConfig:Q5,updateNetworkConfig:e6,setCustomWalletAddress:sL}=Eg.actions,ji=Eg.reducer});var Ng,Vp,Rg,i6,s6,c6,Yi,Zi=F(()=>{"use strict";r();Ng=require("@reduxjs/toolkit");Ue();Re();Vp={isSigning:!1,signedSessions:{}},Rg=(0,Ng.createSlice)({name:"signedMessageInfoSliceState",initialState:Vp,reducers:{setSignSession:(n,o)=>{let{sessionId:a,signedSession:c,errorMessage:l}=o.payload;l&&(n.errorMessage=l),n.isSigning=c.status==="pending",n.signedSessions[a]=E(E({},n.signedSessions[a]),c)},setSignSessionState:(n,o)=>E(E({},n),o.payload),clearSignedMessageInfo:()=>Vp},extraReducers:n=>{n.addCase(Ne,()=>Vp)}}),{setSignSession:i6,clearSignedMessageInfo:s6,setSignSessionState:c6}=Rg.actions,Yi=Rg.reducer});var Mg,Og,Dg,Bg,cL,pL,g6,dL,Ji,Qi=F(()=>{"use strict";r();Mg=require("@reduxjs/toolkit"),Og=require("redux-persist");Ue();Bi();Re();Dg={customToasts:[],transactionToasts:[]},Bg=(0,Mg.createSlice)({name:"toastsSlice",initialState:Dg,reducers:{addCustomToast:(n,o)=>{let a=o.payload.toastId||`custom-toast-${n.customToasts.length+1}`,c=n.customToasts.findIndex(l=>l.toastId===a);if(c!==-1){n.customToasts[c]=Z(E(E({},n.customToasts[c]),o.payload),{type:"custom",toastId:a});return}n.customToasts.push(Z(E({},o.payload),{type:"custom",toastId:a}))},removeCustomToast:(n,o)=>{n.customToasts=n.customToasts.filter(a=>a.toastId!==o.payload)},addTransactionToast:(n,o)=>{n.transactionToasts.push({type:"transaction",startTimestamp:dr(),toastId:o.payload||`custom-toast-${n.transactionToasts.length+1}`})},removeTransactionToast:(n,o)=>{n.transactionToasts=n.transactionToasts.filter(a=>a.toastId!==o.payload)}},extraReducers:n=>{n.addCase(Ne,()=>Dg),n.addCase(Og.REHYDRATE,(o,a)=>{var l,g;let c=(g=(l=a.customToasts)==null?void 0:l.filter(h=>!("component"in h)))!=null?g:[];o.customToasts=c})}}),{addCustomToast:cL,removeCustomToast:pL,addTransactionToast:g6,removeTransactionToast:dL}=Bg.actions,Ji=Bg.reducer});var Fg,Kp,jp,Xp,mL,qp,Wg,x6,lL,Yp,es,ns=F(()=>{"use strict";r();Fg=require("@reduxjs/toolkit");Re();Kp="Transaction failed",jp="Transaction successful",Xp="Processing transaction",mL="Transaction submitted",qp={},Wg=(0,Fg.createSlice)({name:"transactionsInfo",initialState:qp,reducers:{setTransactionsDisplayInfo(n,o){let{sessionId:a,transactionsDisplayInfo:c}=o.payload;a!=null&&(n[a]={errorMessage:(c==null?void 0:c.errorMessage)||Kp,successMessage:(c==null?void 0:c.successMessage)||jp,processingMessage:(c==null?void 0:c.processingMessage)||Xp,submittedMessage:(c==null?void 0:c.submittedMessage)||mL,transactionDuration:c==null?void 0:c.transactionDuration})},clearTransactionsInfoForSessionId(n,o){o.payload!=null&&delete n[o.payload]},clearTransactionsInfo:()=>qp},extraReducers:n=>{n.addCase(Ne,()=>qp)}}),{clearTransactionsInfo:x6,setTransactionsDisplayInfo:lL,clearTransactionsInfoForSessionId:Yp}=Wg.actions,es=Wg.reducer});function gr(n){return n!=null&&(bL(n)||CL(n))}function fr(n){return n!=null&&(wL(n)||LL(n))}function hr(n){return n!=null&&(vL(n)||kL(n))}function Ug(n){return n!=null&&(AL(n)||PL(n))}function Zp(n){return n!=null&&IL(n)}function bL(n){return n!=null&&_L.includes(n)}function wL(n){return n!=null&&uL.includes(n)}function vL(n){return n!=null&&gL.includes(n)}function AL(n){return n!=null&&fL.includes(n)}function IL(n){return n!=null&&hL.includes(n)}function CL(n){return n!=null&&TL.includes(n)}function LL(n){return n!=null&&xL.includes(n)}function kL(n){return n!=null&&yL.includes(n)}function PL(n){return n!=null&&SL.includes(n)}var _L,uL,gL,fL,hL,TL,xL,yL,SL,Tr=F(()=>{"use strict";r();Le();_L=["sent"],uL=["success"],gL=["fail","cancelled","timedOut"],fL=["invalid"],hL=["timedOut"],TL=["pending"],xL=["success"],yL=["fail","invalid"],SL=["not executed"]});var Gg,Hg,ma,EL,$g,zg,Vg,NL,ts,RL,DL,L6,ML,la,Jp,k6,os,rs=F(()=>{"use strict";r();Gg=require("@reduxjs/toolkit"),Hg=require("redux-persist");Le();Tr();Re();ma={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},EL={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},$g=(0,Gg.createSlice)({name:"transactionsSlice",initialState:ma,reducers:{moveTransactionsToSignedState:(n,o)=>{var x,y;let{sessionId:a,transactions:c,errorMessage:l,status:g,redirectRoute:h,customTransactionInformation:b}=o.payload;n.customTransactionInformationForSessionId[a]=E(E(E({},EL),((x=n.signedTransactions[a])==null?void 0:x.customTransactionInformation)||{}),n.customTransactionInformationForSessionId[a]||{}),n.signedTransactions[a]={transactions:c,status:g,errorMessage:l,redirectRoute:h,customTransactionInformation:E(E({},n.customTransactionInformationForSessionId[a]),b!=null?b:{})},((y=n==null?void 0:n.transactionsToSign)==null?void 0:y.sessionId)===a&&(n.transactionsToSign=ma.transactionsToSign)},clearSignedTransaction:(n,o)=>{n.signedTransactions[o.payload]&&delete n.signedTransactions[o.payload]},clearTransactionToSign:n=>{n!=null&&n.transactionsToSign&&(n.transactionsToSign=null)},updateSignedTransaction:(n,o)=>{n.signedTransactions=E(E({},n.signedTransactions),o.payload)},updateSignedTransactions:(n,o)=>{let{sessionId:a,status:c,errorMessage:l,transactions:g}=o.payload;n.signedTransactions[a]!=null&&(n.signedTransactions[a].status=c,l!=null&&(n.signedTransactions[a].errorMessage=l),g!=null&&(n.signedTransactions[a].transactions=g))},updateSignedTransactionStatus:(n,o)=>{var y,N,C,D,H,U,O,K;let{sessionId:a,status:c,errorMessage:l,transactionHash:g,serverTransaction:h,inTransit:b}=o.payload,x=(N=(y=n.signedTransactions)==null?void 0:y[a])==null?void 0:N.transactions;if(x!=null){n.signedTransactions[a].transactions=x.map(Y=>Y.hash===g?Z(E(E({},h!=null?h:{}),Y),{status:c,errorMessage:l,inTransit:b}):Y);let J=(D=(C=n.signedTransactions[a])==null?void 0:C.transactions)==null?void 0:D.every(Y=>fr(Y.status)),ae=(U=(H=n.signedTransactions[a])==null?void 0:H.transactions)==null?void 0:U.some(Y=>hr(Y.status)),oe=(K=(O=n.signedTransactions[a])==null?void 0:O.transactions)==null?void 0:K.every(Y=>Ug(Y.status));J&&(n.signedTransactions[a].status="success"),ae&&(n.signedTransactions[a].status="fail"),oe&&(n.signedTransactions[a].status="invalid")}},setTransactionsToSign:(n,o)=>{n.transactionsToSign=o.payload;let{sessionId:a,customTransactionInformation:c}=o.payload;n.customTransactionInformationForSessionId[a]=c,n.signTransactionsError=null},clearAllTransactionsToSign:n=>{n.transactionsToSign=ma.transactionsToSign,n.signTransactionsError=null},clearAllSignedTransactions:n=>{n.signedTransactions=ma.signedTransactions},setSignTransactionsError:(n,o)=>{n.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(n,o)=>{n.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(n,o)=>{let{sessionId:a,customTransactionInformationOverrides:c}=o.payload;n.signedTransactions[a]!=null&&(n.signedTransactions[a].customTransactionInformation=E(E({},n.signedTransactions[a].customTransactionInformation),c))}},extraReducers:n=>{n.addCase(Ne,()=>ma),n.addCase(Hg.REHYDRATE,(o,a)=>{var h;if(o.signTransactionsCancelMessage=null,!((h=a.payload)!=null&&h.transactions))return;let{signedTransactions:c,customTransactionInformationForSessionId:l}=a.payload.transactions,g=Object.entries(c).reduce((b,[x,y])=>{let N=new Date(x),C=new Date;return C.setHours(C.getHours()+5),C-N>0||(b[x]=y),b},{});l!=null&&(o.customTransactionInformationForSessionId=l),c!=null&&(o.signedTransactions=g)})}}),{updateSignedTransactionStatus:zg,updateSignedTransactions:Vg,setTransactionsToSign:NL,clearAllTransactionsToSign:ts,clearAllSignedTransactions:RL,clearSignedTransaction:DL,clearTransactionToSign:L6,setSignTransactionsError:ML,setSignTransactionsCancelMessage:la,moveTransactionsToSignedState:Jp,updateSignedTransactionsCustomTransactionInformation:k6}=$g.actions,os=$g.reducer});var qg,Qp,Kg,R6,D6,OL,M6,as,is=F(()=>{"use strict";r();qg=require("@reduxjs/toolkit");Re();Qp={},Kg=(0,qg.createSlice)({name:"batchTransactionsSlice",initialState:Qp,reducers:{setBatchTransactions:(n,o)=>{n[o.payload.id]=o.payload},updateBatchTransactions:(n,o)=>{n[o.payload.id]=o.payload},clearBatchTransactions:(n,o)=>{delete n[o.payload.batchId]},clearAllBatchTransactions:()=>Qp},extraReducers:n=>{n.addCase(Ne,()=>Qp)}}),{setBatchTransactions:R6,updateBatchTransactions:D6,clearBatchTransactions:OL,clearAllBatchTransactions:M6}=Kg.actions,as=Kg.reducer});var Xg,jg,Yg,W6,Zg,ed=F(()=>{"use strict";r();Xg=require("@reduxjs/toolkit");Re();jg={},Yg=(0,Xg.createSlice)({name:"dappConfigSlice",initialState:jg,reducers:{setDappConfig:(n,o)=>o.payload},extraReducers:n=>{n.addCase(Ne,()=>jg)}}),{setDappConfig:W6}=Yg.actions,Zg=Yg.reducer});var ye=F(()=>{"use strict";r();Hi();zi();qi();Xi();Zi();Qi();ns();rs();is();ed()});var nd=F(()=>{"use strict";r()});var ef,UL,GL,Po,ps=F(()=>{"use strict";r();ef=require("@reduxjs/toolkit");nd();Hi();is();ed();zi();qi();Xi();Zi();Qi();ns();rs();UL={["account"]:Gi,["dappConfig"]:Zg,["loginInfo"]:$i,["modals"]:Vi,["networkConfig"]:ji,["signedMessageInfo"]:Yi,["toasts"]:Ji,["transactionsInfo"]:es,["transactions"]:os,["batchTransactions"]:as},GL=(n={})=>(0,ef.combineReducers)(E(E({},UL),n)),Po=GL});var rf={};Pe(rf,{default:()=>ok,sessionStorageReducers:()=>td});function Et(n,o=[]){return{key:n,version:1,storage:tf.default,blacklist:o}}var yn,nf,tf,HL,_a,$L,zL,VL,qL,KL,jL,XL,YL,ZL,JL,of,QL,td,ek,nk,tk,ok,af=F(()=>{"use strict";r();yn=require("redux-persist"),nf=M(require("redux-persist/lib/storage")),tf=M(require("redux-persist/lib/storage/session"));ps();ye();Hi();is();zi();qi();Xi();Zi();Qi();ns();rs();nd();HL={persistReducersStorageType:"localStorage"},_a={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},$L=Et(_a["account"]),zL=Et(_a["loginInfo"]),VL=Et(_a["modals"]),qL=Et(_a["networkConfig"]),KL={2:n=>Z(E({},n),{networkConfig:zp})};jL=Et("sdk-dapp-transactionsInfo"),XL=Et("sdk-dapp-transactions",["transactionsToSign"]),YL=Et("sdk-dapp-batchTransactions",["batchTransactions"]),ZL=Et("sdk-dapp-toasts"),JL=Et("sdk-dapp-signedMessageInfo"),of={key:"sdk-dapp-store",version:2,storage:nf.default,whitelist:Object.keys(_a),migrate:(0,yn.createMigrate)(KL,{debug:!1})},QL=Z(E({},of),{whitelist:[]}),td={["toasts"]:(0,yn.persistReducer)(ZL,Ji),["transactions"]:(0,yn.persistReducer)(XL,os),["transactionsInfo"]:(0,yn.persistReducer)(jL,es),["batchTransactions"]:(0,yn.persistReducer)(YL,as),["signedMessageInfo"]:(0,yn.persistReducer)(JL,Yi)},ek=Z(E({},td),{["account"]:(0,yn.persistReducer)($L,Gi),["loginInfo"]:(0,yn.persistReducer)(zL,$i),["modals"]:(0,yn.persistReducer)(VL,Vi),["networkConfig"]:(0,yn.persistReducer)(qL,ji)}),nk=HL.persistReducersStorageType==="localStorage",tk=nk?(0,yn.persistReducer)(of,Po(td)):(0,yn.persistReducer)(QL,Po(ek)),ok=tk});var sf={};Pe(sf,{default:()=>rk});var rk,cf=F(()=>{"use strict";r();ps();rk=Po()});var pf={};Pe(pf,{default:()=>ik});var Gn,ak,ik,df=F(()=>{"use strict";r();Gn=require("redux-persist"),ak=[Gn.FLUSH,Gn.REHYDRATE,Gn.PAUSE,Gn.PERSIST,Gn.PURGE,Gn.REGISTER],ik=ak});var _f={};Pe(_f,{default:()=>lf});function lf(n){return(0,mf.persistStore)(n)}var mf,uf=F(()=>{"use strict";r();mf=require("redux-persist")});var mh=W((Lq,dh)=>{r();var eE=typeof p=="object"&&p&&p.Object===Object&&p;dh.exports=eE});var ya=W((kq,lh)=>{r();var nE=mh(),tE=typeof self=="object"&&self&&self.Object===Object&&self,oE=nE||tE||Function("return this")();lh.exports=oE});var hd=W((Pq,_h)=>{r();var rE=ya(),aE=rE.Symbol;_h.exports=aE});var hh=W((Eq,fh)=>{r();var uh=hd(),gh=Object.prototype,iE=gh.hasOwnProperty,sE=gh.toString,Sa=uh?uh.toStringTag:void 0;function cE(n){var o=iE.call(n,Sa),a=n[Sa];try{n[Sa]=void 0;var c=!0}catch(g){}var l=sE.call(n);return c&&(o?n[Sa]=a:delete n[Sa]),l}fh.exports=cE});var xh=W((Nq,Th)=>{r();var pE=Object.prototype,dE=pE.toString;function mE(n){return dE.call(n)}Th.exports=mE});var ws=W((Rq,bh)=>{r();var yh=hd(),lE=hh(),_E=xh(),uE="[object Null]",gE="[object Undefined]",Sh=yh?yh.toStringTag:void 0;function fE(n){return n==null?n===void 0?gE:uE:Sh&&Sh in Object(n)?lE(n):_E(n)}bh.exports=fE});var vh=W((Dq,wh)=>{r();var hE=Array.isArray;wh.exports=hE});var Td=W((Mq,Ah)=>{r();function TE(n){return n!=null&&typeof n=="object"}Ah.exports=TE});var Ch=W((Oq,Ih)=>{r();var xE=ws(),yE=vh(),SE=Td(),bE="[object String]";function wE(n){return typeof n=="string"||!yE(n)&&SE(n)&&xE(n)==bE}Ih.exports=wE});var wr=W((Ej,Oh)=>{r();function FE(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}Oh.exports=FE});var wd=W((Nj,Bh)=>{r();var WE=ws(),UE=wr(),GE="[object AsyncFunction]",HE="[object Function]",$E="[object GeneratorFunction]",zE="[object Proxy]";function VE(n){if(!UE(n))return!1;var o=WE(n);return o==HE||o==$E||o==GE||o==zE}Bh.exports=VE});var Wh=W((Rj,Fh)=>{r();var qE=ya(),KE=qE["__core-js_shared__"];Fh.exports=KE});var Hh=W((Dj,Gh)=>{r();var vd=Wh(),Uh=function(){var n=/[^.]+$/.exec(vd&&vd.keys&&vd.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function jE(n){return!!Uh&&Uh in n}Gh.exports=jE});var zh=W((Mj,$h)=>{r();var XE=Function.prototype,YE=XE.toString;function ZE(n){if(n!=null){try{return YE.call(n)}catch(o){}try{return n+""}catch(o){}}return""}$h.exports=ZE});var qh=W((Oj,Vh)=>{r();var JE=wd(),QE=Hh(),e2=wr(),n2=zh(),t2=/[\\^$.*+?()[\]{}|]/g,o2=/^\[object .+?Constructor\]$/,r2=Function.prototype,a2=Object.prototype,i2=r2.toString,s2=a2.hasOwnProperty,c2=RegExp("^"+i2.call(s2).replace(t2,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p2(n){if(!e2(n)||QE(n))return!1;var o=JE(n)?c2:o2;return o.test(n2(n))}Vh.exports=p2});var jh=W((Bj,Kh)=>{r();function d2(n,o){return n==null?void 0:n[o]}Kh.exports=d2});var Cs=W((Fj,Xh)=>{r();var m2=qh(),l2=jh();function _2(n,o){var a=l2(n,o);return m2(a)?a:void 0}Xh.exports=_2});var va=W((Wj,Yh)=>{r();var u2=Cs(),g2=u2(Object,"create");Yh.exports=g2});var Qh=W((Uj,Jh)=>{r();var Zh=va();function f2(){this.__data__=Zh?Zh(null):{},this.size=0}Jh.exports=f2});var nT=W((Gj,eT)=>{r();function h2(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}eT.exports=h2});var oT=W((Hj,tT)=>{r();var T2=va(),x2="__lodash_hash_undefined__",y2=Object.prototype,S2=y2.hasOwnProperty;function b2(n){var o=this.__data__;if(T2){var a=o[n];return a===x2?void 0:a}return S2.call(o,n)?o[n]:void 0}tT.exports=b2});var aT=W(($j,rT)=>{r();var w2=va(),v2=Object.prototype,A2=v2.hasOwnProperty;function I2(n){var o=this.__data__;return w2?o[n]!==void 0:A2.call(o,n)}rT.exports=I2});var sT=W((zj,iT)=>{r();var C2=va(),L2="__lodash_hash_undefined__";function k2(n,o){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=C2&&o===void 0?L2:o,this}iT.exports=k2});var pT=W((Vj,cT)=>{r();var P2=Qh(),E2=nT(),N2=oT(),R2=aT(),D2=sT();function vr(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var c=n[o];this.set(c[0],c[1])}}vr.prototype.clear=P2;vr.prototype.delete=E2;vr.prototype.get=N2;vr.prototype.has=R2;vr.prototype.set=D2;cT.exports=vr});var mT=W((qj,dT)=>{r();function M2(){this.__data__=[],this.size=0}dT.exports=M2});var Ad=W((Kj,lT)=>{r();function O2(n,o){return n===o||n!==n&&o!==o}lT.exports=O2});var Aa=W((jj,_T)=>{r();var B2=Ad();function F2(n,o){for(var a=n.length;a--;)if(B2(n[a][0],o))return a;return-1}_T.exports=F2});var gT=W((Xj,uT)=>{r();var W2=Aa(),U2=Array.prototype,G2=U2.splice;function H2(n){var o=this.__data__,a=W2(o,n);if(a<0)return!1;var c=o.length-1;return a==c?o.pop():G2.call(o,a,1),--this.size,!0}uT.exports=H2});var hT=W((Yj,fT)=>{r();var $2=Aa();function z2(n){var o=this.__data__,a=$2(o,n);return a<0?void 0:o[a][1]}fT.exports=z2});var xT=W((Zj,TT)=>{r();var V2=Aa();function q2(n){return V2(this.__data__,n)>-1}TT.exports=q2});var ST=W((Jj,yT)=>{r();var K2=Aa();function j2(n,o){var a=this.__data__,c=K2(a,n);return c<0?(++this.size,a.push([n,o])):a[c][1]=o,this}yT.exports=j2});var wT=W((Qj,bT)=>{r();var X2=mT(),Y2=gT(),Z2=hT(),J2=xT(),Q2=ST();function Ar(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var c=n[o];this.set(c[0],c[1])}}Ar.prototype.clear=X2;Ar.prototype.delete=Y2;Ar.prototype.get=Z2;Ar.prototype.has=J2;Ar.prototype.set=Q2;bT.exports=Ar});var AT=W((eX,vT)=>{r();var eN=Cs(),nN=ya(),tN=eN(nN,"Map");vT.exports=tN});var LT=W((nX,CT)=>{r();var IT=pT(),oN=wT(),rN=AT();function aN(){this.size=0,this.__data__={hash:new IT,map:new(rN||oN),string:new IT}}CT.exports=aN});var PT=W((tX,kT)=>{r();function iN(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}kT.exports=iN});var Ia=W((oX,ET)=>{r();var sN=PT();function cN(n,o){var a=n.__data__;return sN(o)?a[typeof o=="string"?"string":"hash"]:a.map}ET.exports=cN});var RT=W((rX,NT)=>{r();var pN=Ia();function dN(n){var o=pN(this,n).delete(n);return this.size-=o?1:0,o}NT.exports=dN});var MT=W((aX,DT)=>{r();var mN=Ia();function lN(n){return mN(this,n).get(n)}DT.exports=lN});var BT=W((iX,OT)=>{r();var _N=Ia();function uN(n){return _N(this,n).has(n)}OT.exports=uN});var WT=W((sX,FT)=>{r();var gN=Ia();function fN(n,o){var a=gN(this,n),c=a.size;return a.set(n,o),this.size+=a.size==c?0:1,this}FT.exports=fN});var GT=W((cX,UT)=>{r();var hN=LT(),TN=RT(),xN=MT(),yN=BT(),SN=WT();function Ir(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var c=n[o];this.set(c[0],c[1])}}Ir.prototype.clear=hN;Ir.prototype.delete=TN;Ir.prototype.get=xN;Ir.prototype.has=yN;Ir.prototype.set=SN;UT.exports=Ir});var $T=W((pX,HT)=>{r();var bN="__lodash_hash_undefined__";function wN(n){return this.__data__.set(n,bN),this}HT.exports=wN});var VT=W((dX,zT)=>{r();function vN(n){return this.__data__.has(n)}zT.exports=vN});var KT=W((mX,qT)=>{r();var AN=GT(),IN=$T(),CN=VT();function Ls(n){var o=-1,a=n==null?0:n.length;for(this.__data__=new AN;++o<a;)this.add(n[o])}Ls.prototype.add=Ls.prototype.push=IN;Ls.prototype.has=CN;qT.exports=Ls});var XT=W((lX,jT)=>{r();function LN(n,o,a,c){for(var l=n.length,g=a+(c?1:-1);c?g--:++g<l;)if(o(n[g],g,n))return g;return-1}jT.exports=LN});var ZT=W((_X,YT)=>{r();function kN(n){return n!==n}YT.exports=kN});var QT=W((uX,JT)=>{r();function PN(n,o,a){for(var c=a-1,l=n.length;++c<l;)if(n[c]===o)return c;return-1}JT.exports=PN});var nx=W((gX,ex)=>{r();var EN=XT(),NN=ZT(),RN=QT();function DN(n,o,a){return o===o?RN(n,o,a):EN(n,NN,a)}ex.exports=DN});var ox=W((fX,tx)=>{r();var MN=nx();function ON(n,o){var a=n==null?0:n.length;return!!a&&MN(n,o,0)>-1}tx.exports=ON});var ax=W((hX,rx)=>{r();function BN(n,o,a){for(var c=-1,l=n==null?0:n.length;++c<l;)if(a(o,n[c]))return!0;return!1}rx.exports=BN});var sx=W((TX,ix)=>{r();function FN(n,o){return n.has(o)}ix.exports=FN});var px=W((xX,cx)=>{r();var WN=Cs(),UN=ya(),GN=WN(UN,"Set");cx.exports=GN});var mx=W((yX,dx)=>{r();function HN(){}dx.exports=HN});var Id=W((SX,lx)=>{r();function $N(n){var o=-1,a=Array(n.size);return n.forEach(function(c){a[++o]=c}),a}lx.exports=$N});var ux=W((bX,_x)=>{r();var Cd=px(),zN=mx(),VN=Id(),qN=1/0,KN=Cd&&1/VN(new Cd([,-0]))[1]==qN?function(n){return new Cd(n)}:zN;_x.exports=KN});var fx=W((wX,gx)=>{r();var jN=KT(),XN=ox(),YN=ax(),ZN=sx(),JN=ux(),QN=Id(),eR=200;function nR(n,o,a){var c=-1,l=XN,g=n.length,h=!0,b=[],x=b;if(a)h=!1,l=YN;else if(g>=eR){var y=o?null:JN(n);if(y)return QN(y);h=!1,l=ZN,x=new jN}else x=o?[]:b;e:for(;++c<g;){var N=n[c],C=o?o(N):N;if(N=a||N!==0?N:0,h&&C===C){for(var D=x.length;D--;)if(x[D]===C)continue e;o&&x.push(C),b.push(N)}else l(x,C,a)||(x!==b&&x.push(C),b.push(N))}return b}gx.exports=nR});var Tx=W((vX,hx)=>{r();var tR=fx();function oR(n){return n&&n.length?tR(n):[]}hx.exports=oR});var kd={};Pe(kd,{css:()=>Rx,default:()=>WR});var Rx,WR,Pd=F(()=>{"use strict";r();Rx=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Rx));WR={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Bt={};Pe(Bt,{css:()=>Ox,default:()=>HR});var Ox,HR,Ft=F(()=>{"use strict";r();Ox=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ox));HR={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var $d={};Pe($d,{css:()=>Xx,default:()=>i3});var Xx,i3,zd=F(()=>{"use strict";r();Xx=`.dapp-core-component__loginButtonStyles__default-login-button {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__wrapper {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__login-text {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-wrapper {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-content {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-title {
  color: inherit;
}

.dapp-core-component__loginButtonStyles__button-icon {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xx));i3={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var qd={};Pe(qd,{css:()=>Qx,default:()=>c3});var Qx,c3,Kd=F(()=>{"use strict";r();Qx=`.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qx));c3={"pagination-edge-button":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",inactive:"dapp-core-component__paginationEdgeButtonStyles__inactive","pagination-edge-button-icon":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon",paginationEdgeButtonIcon:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon","pagination-edge-button-text":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",paginationEdgeButtonText:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",show:"dapp-core-component__paginationEdgeButtonStyles__show"}});var ty=W((qie,ny)=>{r();var d3=Math.max,m3=Math.min;function l3(n,o,a){return n>=m3(o,a)&&n<d3(o,a)}ny.exports=l3});var ry=W((Kie,oy)=>{r();var _3=/\s/;function u3(n){for(var o=n.length;o--&&_3.test(n.charAt(o)););return o}oy.exports=u3});var iy=W((jie,ay)=>{r();var g3=ry(),f3=/^\s+/;function h3(n){return n&&n.slice(0,g3(n)+1).replace(f3,"")}ay.exports=h3});var cy=W((Xie,sy)=>{r();var T3=ws(),x3=Td(),y3="[object Symbol]";function S3(n){return typeof n=="symbol"||x3(n)&&T3(n)==y3}sy.exports=S3});var Yd=W((Yie,my)=>{r();var b3=iy(),py=wr(),w3=cy(),dy=0/0,v3=/^[-+]0x[0-9a-f]+$/i,A3=/^0b[01]+$/i,I3=/^0o[0-7]+$/i,C3=parseInt;function L3(n){if(typeof n=="number")return n;if(w3(n))return dy;if(py(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=py(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=b3(n);var a=A3.test(n);return a||I3.test(n)?C3(n.slice(2),a?2:8):v3.test(n)?dy:+n}my.exports=L3});var Zd=W((Zie,_y)=>{r();var k3=Yd(),ly=1/0,P3=17976931348623157e292;function E3(n){if(!n)return n===0?n:0;if(n=k3(n),n===ly||n===-ly){var o=n<0?-1:1;return o*P3}return n===n?n:0}_y.exports=E3});var fy=W((Jie,gy)=>{r();var N3=ty(),uy=Zd(),R3=Yd();function D3(n,o,a){return o=uy(o),a===void 0?(a=o,o=0):a=uy(a),n=R3(n),N3(n,o,a)}gy.exports=D3});var Ty=W((Qie,hy)=>{r();var M3=Math.ceil,O3=Math.max;function B3(n,o,a,c){for(var l=-1,g=O3(M3((o-n)/(a||1)),0),h=Array(g);g--;)h[c?g:++l]=n,n+=a;return h}hy.exports=B3});var yy=W((ese,xy)=>{r();var F3=9007199254740991;function W3(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=F3}xy.exports=W3});var by=W((nse,Sy)=>{r();var U3=wd(),G3=yy();function H3(n){return n!=null&&G3(n.length)&&!U3(n)}Sy.exports=H3});var vy=W((tse,wy)=>{r();var $3=9007199254740991,z3=/^(?:0|[1-9]\d*)$/;function V3(n,o){var a=typeof n;return o=o==null?$3:o,!!o&&(a=="number"||a!="symbol"&&z3.test(n))&&n>-1&&n%1==0&&n<o}wy.exports=V3});var Iy=W((ose,Ay)=>{r();var q3=Ad(),K3=by(),j3=vy(),X3=wr();function Y3(n,o,a){if(!X3(a))return!1;var c=typeof o;return(c=="number"?K3(a)&&j3(o,a.length):c=="string"&&o in a)?q3(a[o],n):!1}Ay.exports=Y3});var Ly=W((rse,Cy)=>{r();var Z3=Ty(),J3=Iy(),Jd=Zd();function Q3(n){return function(o,a,c){return c&&typeof c!="number"&&J3(o,a,c)&&(a=c=void 0),o=Jd(o),a===void 0?(a=o,o=0):a=Jd(a),c=c===void 0?o<a?1:-1:Jd(c),Z3(o,a,c,n)}}Cy.exports=Q3});var Py=W((ase,ky)=>{r();var eD=Ly(),nD=eD();ky.exports=nD});var nm={};Pe(nm,{css:()=>Dy,default:()=>tD});var Dy,tD,tm=F(()=>{"use strict";r();Dy=`.dapp-core-component__paginationStyles__pagination {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dy));tD={pagination:"dapp-core-component__paginationStyles__pagination","pagination-angle":"dapp-core-component__paginationStyles__pagination-angle",paginationAngle:"dapp-core-component__paginationStyles__pagination-angle",disabled:"dapp-core-component__paginationStyles__disabled","pagination-angle-icon":"dapp-core-component__paginationStyles__pagination-angle-icon",paginationAngleIcon:"dapp-core-component__paginationStyles__pagination-angle-icon","pagination-edge-button":"dapp-core-component__paginationStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationStyles__pagination-edge-button",reversed:"dapp-core-component__paginationStyles__reversed","pagination-items":"dapp-core-component__paginationStyles__pagination-items",paginationItems:"dapp-core-component__paginationStyles__pagination-items","pagination-item-wrapper":"dapp-core-component__paginationStyles__pagination-item-wrapper",paginationItemWrapper:"dapp-core-component__paginationStyles__pagination-item-wrapper","pagination-item":"dapp-core-component__paginationStyles__pagination-item",paginationItem:"dapp-core-component__paginationStyles__pagination-item",hundreds:"dapp-core-component__paginationStyles__hundreds",active:"dapp-core-component__paginationStyles__active",ellipsis:"dapp-core-component__paginationStyles__ellipsis","pagination-item-text":"dapp-core-component__paginationStyles__pagination-item-text",paginationItemText:"dapp-core-component__paginationStyles__pagination-item-text"}});var rm={};Pe(rm,{css:()=>Oy,default:()=>rD});var Oy,rD,am=F(()=>{"use strict";r();Oy=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Oy));rD={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var im={};Pe(im,{css:()=>Wy,default:()=>pD});var Wy,pD,sm=F(()=>{"use strict";r();Wy=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wy));pD={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var cm={};Pe(cm,{css:()=>Hy,default:()=>mD});var Hy,mD,pm=F(()=>{"use strict";r();Hy=`.dapp-core-component__addressRowStyles__ledger-address-table-body-item {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hy));mD={"ledger-address-table-body-item":"dapp-core-component__addressRowStyles__ledger-address-table-body-item",ledgerAddressTableBodyItem:"dapp-core-component__addressRowStyles__ledger-address-table-body-item","ledger-address-table-body-item-selected":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected",ledgerAddressTableBodyItemSelected:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected","ledger-address-table-body-item-data":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data",ledgerAddressTableBodyItemData:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data","ledger-address-table-body-item-data-input":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input",ledgerAddressTableBodyItemDataInput:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input","ledger-address-table-body-item-data-label":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label",ledgerAddressTableBodyItemDataLabel:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label","ledger-address-table-body-item-data-value":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value",ledgerAddressTableBodyItemDataValue:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value"}});var mm={};Pe(mm,{css:()=>zy,default:()=>_D});var zy,_D,lm=F(()=>{"use strict";r();zy=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zy));_D={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var _m={};Pe(_m,{css:()=>Ky,default:()=>gD});var Ky,gD,um=F(()=>{"use strict";r();Ky=`.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ky));gD={"ledger-loading-wrapper":"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper",ledgerLoadingWrapper:"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper","ledger-loading-heading":"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading",ledgerLoadingHeading:"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading","ledger-loading-description":"dapp-core-component__ledgerLoadingStyles__ledger-loading-description",ledgerLoadingDescription:"dapp-core-component__ledgerLoadingStyles__ledger-loading-description","ledger-loading-spinner":"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner",ledgerLoadingSpinner:"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner"}});var gm={};Pe(gm,{css:()=>Xy,default:()=>hD});var Xy,hD,fm=F(()=>{"use strict";r();Xy=`.dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xy));hD={"ledger-address-table-wrapper":"dapp-core-component__addressTableStyles__ledger-address-table-wrapper",ledgerAddressTableWrapper:"dapp-core-component__addressTableStyles__ledger-address-table-wrapper","ledger-address-table-heading":"dapp-core-component__addressTableStyles__ledger-address-table-heading",ledgerAddressTableHeading:"dapp-core-component__addressTableStyles__ledger-address-table-heading","ledger-address-table-description":"dapp-core-component__addressTableStyles__ledger-address-table-description",ledgerAddressTableDescription:"dapp-core-component__addressTableStyles__ledger-address-table-description","ledger-address-table":"dapp-core-component__addressTableStyles__ledger-address-table",ledgerAddressTable:"dapp-core-component__addressTableStyles__ledger-address-table","ledger-address-table-header":"dapp-core-component__addressTableStyles__ledger-address-table-header",ledgerAddressTableHeader:"dapp-core-component__addressTableStyles__ledger-address-table-header","ledger-address-table-header-item":"dapp-core-component__addressTableStyles__ledger-address-table-header-item",ledgerAddressTableHeaderItem:"dapp-core-component__addressTableStyles__ledger-address-table-header-item","ledger-address-table-body":"dapp-core-component__addressTableStyles__ledger-address-table-body",ledgerAddressTableBody:"dapp-core-component__addressTableStyles__ledger-address-table-body","ledger-address-table-pagination":"dapp-core-component__addressTableStyles__ledger-address-table-pagination",ledgerAddressTablePagination:"dapp-core-component__addressTableStyles__ledger-address-table-pagination","ledger-address-table-button":"dapp-core-component__addressTableStyles__ledger-address-table-button",ledgerAddressTableButton:"dapp-core-component__addressTableStyles__ledger-address-table-button"}});var Jy=W((Mr,Da)=>{r();(function(){var n,o="4.17.21",a=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",g="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",b=500,x="__lodash_placeholder__",y=1,N=2,C=4,D=1,H=2,U=1,O=2,K=4,J=8,ae=16,oe=32,Y=64,Q=128,ve=256,an=512,Ze=30,sn="...",Hn=800,_o=16,gt=1,Wo=2,Uo=3,Te=1/0,Ae=9007199254740991,Me=17976931348623157e292,ln=0/0,_n=4294967295,Us=_n-1,Gs=_n>>>1,Ba=[["ary",Q],["bind",U],["bindKey",O],["curry",J],["curryRight",ae],["flip",an],["partial",oe],["partialRight",Y],["rearg",ve]],Ut="[object Arguments]",Go="[object Array]",Fr="[object AsyncFunction]",fe="[object Boolean]",Se="[object Date]",Oe="[object DOMException]",Gt="[object Error]",Ho="[object Function]",Fa="[object GeneratorFunction]",$n="[object Map]",Wr="[object Number]",x0="[object Null]",ft="[object Object]",Pm="[object Promise]",y0="[object Proxy]",Ur="[object RegExp]",zn="[object Set]",Gr="[object String]",Wa="[object Symbol]",S0="[object Undefined]",Hr="[object WeakMap]",b0="[object WeakSet]",$r="[object ArrayBuffer]",$o="[object DataView]",Hs="[object Float32Array]",$s="[object Float64Array]",zs="[object Int8Array]",Vs="[object Int16Array]",qs="[object Int32Array]",Ks="[object Uint8Array]",js="[object Uint8ClampedArray]",Xs="[object Uint16Array]",Ys="[object Uint32Array]",w0=/\b__p \+= '';/g,v0=/\b(__p \+=) '' \+/g,A0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Em=/&(?:amp|lt|gt|quot|#39);/g,Nm=/[&<>"']/g,I0=RegExp(Em.source),C0=RegExp(Nm.source),L0=/<%-([\s\S]+?)%>/g,k0=/<%([\s\S]+?)%>/g,Rm=/<%=([\s\S]+?)%>/g,P0=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E0=/^\w*$/,N0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zs=/[\\^$.*+?()[\]{}|]/g,R0=RegExp(Zs.source),Js=/^\s+/,D0=/\s/,M0=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,O0=/\{\n\/\* \[wrapped with (.+)\] \*/,B0=/,? & /,F0=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,W0=/[()=,{}\[\]\/\s]/,U0=/\\(\\)?/g,G0=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Dm=/\w*$/,H0=/^[-+]0x[0-9a-f]+$/i,$0=/^0b[01]+$/i,z0=/^\[object .+?Constructor\]$/,V0=/^0o[0-7]+$/i,q0=/^(?:0|[1-9]\d*)$/,K0=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ua=/($^)/,j0=/['\n\r\u2028\u2029\\]/g,Ga="\\ud800-\\udfff",X0="\\u0300-\\u036f",Y0="\\ufe20-\\ufe2f",Z0="\\u20d0-\\u20ff",Mm=X0+Y0+Z0,Om="\\u2700-\\u27bf",Bm="a-z\\xdf-\\xf6\\xf8-\\xff",J0="\\xac\\xb1\\xd7\\xf7",Q0="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",eS="\\u2000-\\u206f",nS=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Fm="A-Z\\xc0-\\xd6\\xd8-\\xde",Wm="\\ufe0e\\ufe0f",Um=J0+Q0+eS+nS,Qs="['\u2019]",tS="["+Ga+"]",Gm="["+Um+"]",Ha="["+Mm+"]",Hm="\\d+",oS="["+Om+"]",$m="["+Bm+"]",zm="[^"+Ga+Um+Hm+Om+Bm+Fm+"]",ec="\\ud83c[\\udffb-\\udfff]",rS="(?:"+Ha+"|"+ec+")",Vm="[^"+Ga+"]",nc="(?:\\ud83c[\\udde6-\\uddff]){2}",tc="[\\ud800-\\udbff][\\udc00-\\udfff]",zo="["+Fm+"]",qm="\\u200d",Km="(?:"+$m+"|"+zm+")",aS="(?:"+zo+"|"+zm+")",jm="(?:"+Qs+"(?:d|ll|m|re|s|t|ve))?",Xm="(?:"+Qs+"(?:D|LL|M|RE|S|T|VE))?",Ym=rS+"?",Zm="["+Wm+"]?",iS="(?:"+qm+"(?:"+[Vm,nc,tc].join("|")+")"+Zm+Ym+")*",sS="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cS="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Jm=Zm+Ym+iS,pS="(?:"+[oS,nc,tc].join("|")+")"+Jm,dS="(?:"+[Vm+Ha+"?",Ha,nc,tc,tS].join("|")+")",mS=RegExp(Qs,"g"),lS=RegExp(Ha,"g"),oc=RegExp(ec+"(?="+ec+")|"+dS+Jm,"g"),_S=RegExp([zo+"?"+$m+"+"+jm+"(?="+[Gm,zo,"$"].join("|")+")",aS+"+"+Xm+"(?="+[Gm,zo+Km,"$"].join("|")+")",zo+"?"+Km+"+"+jm,zo+"+"+Xm,cS,sS,Hm,pS].join("|"),"g"),uS=RegExp("["+qm+Ga+Mm+Wm+"]"),gS=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,fS=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],hS=-1,we={};we[Hs]=we[$s]=we[zs]=we[Vs]=we[qs]=we[Ks]=we[js]=we[Xs]=we[Ys]=!0,we[Ut]=we[Go]=we[$r]=we[fe]=we[$o]=we[Se]=we[Gt]=we[Ho]=we[$n]=we[Wr]=we[ft]=we[Ur]=we[zn]=we[Gr]=we[Hr]=!1;var be={};be[Ut]=be[Go]=be[$r]=be[$o]=be[fe]=be[Se]=be[Hs]=be[$s]=be[zs]=be[Vs]=be[qs]=be[$n]=be[Wr]=be[ft]=be[Ur]=be[zn]=be[Gr]=be[Wa]=be[Ks]=be[js]=be[Xs]=be[Ys]=!0,be[Gt]=be[Ho]=be[Hr]=!1;var TS={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},xS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yS={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},SS={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bS=parseFloat,wS=parseInt,Qm=typeof p=="object"&&p&&p.Object===Object&&p,vS=typeof self=="object"&&self&&self.Object===Object&&self,qe=Qm||vS||Function("return this")(),rc=typeof Mr=="object"&&Mr&&!Mr.nodeType&&Mr,uo=rc&&typeof Da=="object"&&Da&&!Da.nodeType&&Da,el=uo&&uo.exports===rc,ac=el&&Qm.process,Nn=function(){try{var w=uo&&uo.require&&uo.require("util").types;return w||ac&&ac.binding&&ac.binding("util")}catch(I){}}(),nl=Nn&&Nn.isArrayBuffer,tl=Nn&&Nn.isDate,ol=Nn&&Nn.isMap,rl=Nn&&Nn.isRegExp,al=Nn&&Nn.isSet,il=Nn&&Nn.isTypedArray;function vn(w,I,A){switch(A.length){case 0:return w.call(I);case 1:return w.call(I,A[0]);case 2:return w.call(I,A[0],A[1]);case 3:return w.call(I,A[0],A[1],A[2])}return w.apply(I,A)}function AS(w,I,A,$){for(var ne=-1,ue=w==null?0:w.length;++ne<ue;){var $e=w[ne];I($,$e,A($e),w)}return $}function Rn(w,I){for(var A=-1,$=w==null?0:w.length;++A<$&&I(w[A],A,w)!==!1;);return w}function IS(w,I){for(var A=w==null?0:w.length;A--&&I(w[A],A,w)!==!1;);return w}function sl(w,I){for(var A=-1,$=w==null?0:w.length;++A<$;)if(!I(w[A],A,w))return!1;return!0}function Ht(w,I){for(var A=-1,$=w==null?0:w.length,ne=0,ue=[];++A<$;){var $e=w[A];I($e,A,w)&&(ue[ne++]=$e)}return ue}function $a(w,I){var A=w==null?0:w.length;return!!A&&Vo(w,I,0)>-1}function ic(w,I,A){for(var $=-1,ne=w==null?0:w.length;++$<ne;)if(A(I,w[$]))return!0;return!1}function Ie(w,I){for(var A=-1,$=w==null?0:w.length,ne=Array($);++A<$;)ne[A]=I(w[A],A,w);return ne}function $t(w,I){for(var A=-1,$=I.length,ne=w.length;++A<$;)w[ne+A]=I[A];return w}function sc(w,I,A,$){var ne=-1,ue=w==null?0:w.length;for($&&ue&&(A=w[++ne]);++ne<ue;)A=I(A,w[ne],ne,w);return A}function CS(w,I,A,$){var ne=w==null?0:w.length;for($&&ne&&(A=w[--ne]);ne--;)A=I(A,w[ne],ne,w);return A}function cc(w,I){for(var A=-1,$=w==null?0:w.length;++A<$;)if(I(w[A],A,w))return!0;return!1}var LS=pc("length");function kS(w){return w.split("")}function PS(w){return w.match(F0)||[]}function cl(w,I,A){var $;return A(w,function(ne,ue,$e){if(I(ne,ue,$e))return $=ue,!1}),$}function za(w,I,A,$){for(var ne=w.length,ue=A+($?1:-1);$?ue--:++ue<ne;)if(I(w[ue],ue,w))return ue;return-1}function Vo(w,I,A){return I===I?HS(w,I,A):za(w,pl,A)}function ES(w,I,A,$){for(var ne=A-1,ue=w.length;++ne<ue;)if($(w[ne],I))return ne;return-1}function pl(w){return w!==w}function dl(w,I){var A=w==null?0:w.length;return A?mc(w,I)/A:ln}function pc(w){return function(I){return I==null?n:I[w]}}function dc(w){return function(I){return w==null?n:w[I]}}function ml(w,I,A,$,ne){return ne(w,function(ue,$e,xe){A=$?($=!1,ue):I(A,ue,$e,xe)}),A}function NS(w,I){var A=w.length;for(w.sort(I);A--;)w[A]=w[A].value;return w}function mc(w,I){for(var A,$=-1,ne=w.length;++$<ne;){var ue=I(w[$]);ue!==n&&(A=A===n?ue:A+ue)}return A}function lc(w,I){for(var A=-1,$=Array(w);++A<w;)$[A]=I(A);return $}function RS(w,I){return Ie(I,function(A){return[A,w[A]]})}function ll(w){return w&&w.slice(0,fl(w)+1).replace(Js,"")}function An(w){return function(I){return w(I)}}function _c(w,I){return Ie(I,function(A){return w[A]})}function zr(w,I){return w.has(I)}function _l(w,I){for(var A=-1,$=w.length;++A<$&&Vo(I,w[A],0)>-1;);return A}function ul(w,I){for(var A=w.length;A--&&Vo(I,w[A],0)>-1;);return A}function DS(w,I){for(var A=w.length,$=0;A--;)w[A]===I&&++$;return $}var MS=dc(TS),OS=dc(xS);function BS(w){return"\\"+SS[w]}function FS(w,I){return w==null?n:w[I]}function qo(w){return uS.test(w)}function WS(w){return gS.test(w)}function US(w){for(var I,A=[];!(I=w.next()).done;)A.push(I.value);return A}function uc(w){var I=-1,A=Array(w.size);return w.forEach(function($,ne){A[++I]=[ne,$]}),A}function gl(w,I){return function(A){return w(I(A))}}function zt(w,I){for(var A=-1,$=w.length,ne=0,ue=[];++A<$;){var $e=w[A];($e===I||$e===x)&&(w[A]=x,ue[ne++]=A)}return ue}function Va(w){var I=-1,A=Array(w.size);return w.forEach(function($){A[++I]=$}),A}function GS(w){var I=-1,A=Array(w.size);return w.forEach(function($){A[++I]=[$,$]}),A}function HS(w,I,A){for(var $=A-1,ne=w.length;++$<ne;)if(w[$]===I)return $;return-1}function $S(w,I,A){for(var $=A+1;$--;)if(w[$]===I)return $;return $}function Ko(w){return qo(w)?VS(w):LS(w)}function Vn(w){return qo(w)?qS(w):kS(w)}function fl(w){for(var I=w.length;I--&&D0.test(w.charAt(I)););return I}var zS=dc(yS);function VS(w){for(var I=oc.lastIndex=0;oc.test(w);)++I;return I}function qS(w){return w.match(oc)||[]}function KS(w){return w.match(_S)||[]}var jS=function w(I){I=I==null?qe:Vt.defaults(qe.Object(),I,Vt.pick(qe,fS));var A=I.Array,$=I.Date,ne=I.Error,ue=I.Function,$e=I.Math,xe=I.Object,gc=I.RegExp,XS=I.String,Dn=I.TypeError,qa=A.prototype,YS=ue.prototype,jo=xe.prototype,Ka=I["__core-js_shared__"],ja=YS.toString,he=jo.hasOwnProperty,ZS=0,hl=function(){var e=/[^.]+$/.exec(Ka&&Ka.keys&&Ka.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Xa=jo.toString,JS=ja.call(xe),QS=qe._,eb=gc("^"+ja.call(he).replace(Zs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ya=el?I.Buffer:n,qt=I.Symbol,Za=I.Uint8Array,Tl=Ya?Ya.allocUnsafe:n,Ja=gl(xe.getPrototypeOf,xe),xl=xe.create,yl=jo.propertyIsEnumerable,Qa=qa.splice,Sl=qt?qt.isConcatSpreadable:n,Vr=qt?qt.iterator:n,go=qt?qt.toStringTag:n,ei=function(){try{var e=yo(xe,"defineProperty");return e({},"",{}),e}catch(t){}}(),nb=I.clearTimeout!==qe.clearTimeout&&I.clearTimeout,tb=$&&$.now!==qe.Date.now&&$.now,ob=I.setTimeout!==qe.setTimeout&&I.setTimeout,ni=$e.ceil,ti=$e.floor,fc=xe.getOwnPropertySymbols,rb=Ya?Ya.isBuffer:n,bl=I.isFinite,ab=qa.join,ib=gl(xe.keys,xe),ze=$e.max,on=$e.min,sb=$.now,cb=I.parseInt,wl=$e.random,pb=qa.reverse,hc=yo(I,"DataView"),qr=yo(I,"Map"),Tc=yo(I,"Promise"),Xo=yo(I,"Set"),Kr=yo(I,"WeakMap"),jr=yo(xe,"create"),oi=Kr&&new Kr,Yo={},db=So(hc),mb=So(qr),lb=So(Tc),_b=So(Xo),ub=So(Kr),ri=qt?qt.prototype:n,Xr=ri?ri.valueOf:n,vl=ri?ri.toString:n;function u(e){if(Ee(e)&&!re(e)&&!(e instanceof me)){if(e instanceof Mn)return e;if(he.call(e,"__wrapped__"))return A_(e)}return new Mn(e)}var Zo=function(){function e(){}return function(t){if(!ke(t))return{};if(xl)return xl(t);e.prototype=t;var i=new e;return e.prototype=n,i}}();function ai(){}function Mn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}u.templateSettings={escape:L0,evaluate:k0,interpolate:Rm,variable:"",imports:{_:u}},u.prototype=ai.prototype,u.prototype.constructor=u,Mn.prototype=Zo(ai.prototype),Mn.prototype.constructor=Mn;function me(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=_n,this.__views__=[]}function gb(){var e=new me(this.__wrapped__);return e.__actions__=un(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=un(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=un(this.__views__),e}function fb(){if(this.__filtered__){var e=new me(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function hb(){var e=this.__wrapped__.value(),t=this.__dir__,i=re(e),s=t<0,_=i?e.length:0,f=kw(0,_,this.__views__),T=f.start,S=f.end,v=S-T,k=s?S:T-1,P=this.__iteratees__,R=P.length,G=0,V=on(v,this.__takeCount__);if(!i||!s&&_==v&&V==v)return jl(e,this.__actions__);var j=[];e:for(;v--&&G<V;){k+=t;for(var ce=-1,X=e[k];++ce<R;){var de=P[ce],_e=de.iteratee,Ln=de.type,dn=_e(X);if(Ln==Wo)X=dn;else if(!dn){if(Ln==gt)continue e;break e}}j[G++]=X}return j}me.prototype=Zo(ai.prototype),me.prototype.constructor=me;function fo(e){var t=-1,i=e==null?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}function Tb(){this.__data__=jr?jr(null):{},this.size=0}function xb(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function yb(e){var t=this.__data__;if(jr){var i=t[e];return i===h?n:i}return he.call(t,e)?t[e]:n}function Sb(e){var t=this.__data__;return jr?t[e]!==n:he.call(t,e)}function bb(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=jr&&t===n?h:t,this}fo.prototype.clear=Tb,fo.prototype.delete=xb,fo.prototype.get=yb,fo.prototype.has=Sb,fo.prototype.set=bb;function ht(e){var t=-1,i=e==null?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}function wb(){this.__data__=[],this.size=0}function vb(e){var t=this.__data__,i=ii(t,e);if(i<0)return!1;var s=t.length-1;return i==s?t.pop():Qa.call(t,i,1),--this.size,!0}function Ab(e){var t=this.__data__,i=ii(t,e);return i<0?n:t[i][1]}function Ib(e){return ii(this.__data__,e)>-1}function Cb(e,t){var i=this.__data__,s=ii(i,e);return s<0?(++this.size,i.push([e,t])):i[s][1]=t,this}ht.prototype.clear=wb,ht.prototype.delete=vb,ht.prototype.get=Ab,ht.prototype.has=Ib,ht.prototype.set=Cb;function Tt(e){var t=-1,i=e==null?0:e.length;for(this.clear();++t<i;){var s=e[t];this.set(s[0],s[1])}}function Lb(){this.size=0,this.__data__={hash:new fo,map:new(qr||ht),string:new fo}}function kb(e){var t=Ti(this,e).delete(e);return this.size-=t?1:0,t}function Pb(e){return Ti(this,e).get(e)}function Eb(e){return Ti(this,e).has(e)}function Nb(e,t){var i=Ti(this,e),s=i.size;return i.set(e,t),this.size+=i.size==s?0:1,this}Tt.prototype.clear=Lb,Tt.prototype.delete=kb,Tt.prototype.get=Pb,Tt.prototype.has=Eb,Tt.prototype.set=Nb;function ho(e){var t=-1,i=e==null?0:e.length;for(this.__data__=new Tt;++t<i;)this.add(e[t])}function Rb(e){return this.__data__.set(e,h),this}function Db(e){return this.__data__.has(e)}ho.prototype.add=ho.prototype.push=Rb,ho.prototype.has=Db;function qn(e){var t=this.__data__=new ht(e);this.size=t.size}function Mb(){this.__data__=new ht,this.size=0}function Ob(e){var t=this.__data__,i=t.delete(e);return this.size=t.size,i}function Bb(e){return this.__data__.get(e)}function Fb(e){return this.__data__.has(e)}function Wb(e,t){var i=this.__data__;if(i instanceof ht){var s=i.__data__;if(!qr||s.length<a-1)return s.push([e,t]),this.size=++i.size,this;i=this.__data__=new Tt(s)}return i.set(e,t),this.size=i.size,this}qn.prototype.clear=Mb,qn.prototype.delete=Ob,qn.prototype.get=Bb,qn.prototype.has=Fb,qn.prototype.set=Wb;function Al(e,t){var i=re(e),s=!i&&bo(e),_=!i&&!s&&Zt(e),f=!i&&!s&&!_&&nr(e),T=i||s||_||f,S=T?lc(e.length,XS):[],v=S.length;for(var k in e)(t||he.call(e,k))&&!(T&&(k=="length"||_&&(k=="offset"||k=="parent")||f&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||bt(k,v)))&&S.push(k);return S}function Il(e){var t=e.length;return t?e[kc(0,t-1)]:n}function Ub(e,t){return xi(un(e),To(t,0,e.length))}function Gb(e){return xi(un(e))}function xc(e,t,i){(i!==n&&!Kn(e[t],i)||i===n&&!(t in e))&&xt(e,t,i)}function Yr(e,t,i){var s=e[t];(!(he.call(e,t)&&Kn(s,i))||i===n&&!(t in e))&&xt(e,t,i)}function ii(e,t){for(var i=e.length;i--;)if(Kn(e[i][0],t))return i;return-1}function Hb(e,t,i,s){return Kt(e,function(_,f,T){t(s,_,i(_),T)}),s}function Cl(e,t){return e&&Jn(t,Ke(t),e)}function $b(e,t){return e&&Jn(t,fn(t),e)}function xt(e,t,i){t=="__proto__"&&ei?ei(e,t,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[t]=i}function yc(e,t){for(var i=-1,s=t.length,_=A(s),f=e==null;++i<s;)_[i]=f?n:ep(e,t[i]);return _}function To(e,t,i){return e===e&&(i!==n&&(e=e<=i?e:i),t!==n&&(e=e>=t?e:t)),e}function On(e,t,i,s,_,f){var T,S=t&y,v=t&N,k=t&C;if(i&&(T=_?i(e,s,_,f):i(e)),T!==n)return T;if(!ke(e))return e;var P=re(e);if(P){if(T=Ew(e),!S)return un(e,T)}else{var R=rn(e),G=R==Ho||R==Fa;if(Zt(e))return Zl(e,S);if(R==ft||R==Ut||G&&!_){if(T=v||G?{}:f_(e),!S)return v?yw(e,$b(T,e)):xw(e,Cl(T,e))}else{if(!be[R])return _?e:{};T=Nw(e,R,S)}}f||(f=new qn);var V=f.get(e);if(V)return V;f.set(e,T),V_(e)?e.forEach(function(X){T.add(On(X,t,i,X,e,f))}):$_(e)&&e.forEach(function(X,de){T.set(de,On(X,t,i,de,e,f))});var j=k?v?Uc:Wc:v?fn:Ke,ce=P?n:j(e);return Rn(ce||e,function(X,de){ce&&(de=X,X=e[de]),Yr(T,de,On(X,t,i,de,e,f))}),T}function zb(e){var t=Ke(e);return function(i){return Ll(i,e,t)}}function Ll(e,t,i){var s=i.length;if(e==null)return!s;for(e=xe(e);s--;){var _=i[s],f=t[_],T=e[_];if(T===n&&!(_ in e)||!f(T))return!1}return!0}function kl(e,t,i){if(typeof e!="function")throw new Dn(l);return oa(function(){e.apply(n,i)},t)}function Zr(e,t,i,s){var _=-1,f=$a,T=!0,S=e.length,v=[],k=t.length;if(!S)return v;i&&(t=Ie(t,An(i))),s?(f=ic,T=!1):t.length>=a&&(f=zr,T=!1,t=new ho(t));e:for(;++_<S;){var P=e[_],R=i==null?P:i(P);if(P=s||P!==0?P:0,T&&R===R){for(var G=k;G--;)if(t[G]===R)continue e;v.push(P)}else f(t,R,s)||v.push(P)}return v}var Kt=t_(Zn),Pl=t_(bc,!0);function Vb(e,t){var i=!0;return Kt(e,function(s,_,f){return i=!!t(s,_,f),i}),i}function si(e,t,i){for(var s=-1,_=e.length;++s<_;){var f=e[s],T=t(f);if(T!=null&&(S===n?T===T&&!Cn(T):i(T,S)))var S=T,v=f}return v}function qb(e,t,i,s){var _=e.length;for(i=ie(i),i<0&&(i=-i>_?0:_+i),s=s===n||s>_?_:ie(s),s<0&&(s+=_),s=i>s?0:K_(s);i<s;)e[i++]=t;return e}function El(e,t){var i=[];return Kt(e,function(s,_,f){t(s,_,f)&&i.push(s)}),i}function Je(e,t,i,s,_){var f=-1,T=e.length;for(i||(i=Dw),_||(_=[]);++f<T;){var S=e[f];t>0&&i(S)?t>1?Je(S,t-1,i,s,_):$t(_,S):s||(_[_.length]=S)}return _}var Sc=o_(),Nl=o_(!0);function Zn(e,t){return e&&Sc(e,t,Ke)}function bc(e,t){return e&&Nl(e,t,Ke)}function ci(e,t){return Ht(t,function(i){return wt(e[i])})}function xo(e,t){t=Xt(t,e);for(var i=0,s=t.length;e!=null&&i<s;)e=e[Qn(t[i++])];return i&&i==s?e:n}function Rl(e,t,i){var s=t(e);return re(e)?s:$t(s,i(e))}function cn(e){return e==null?e===n?S0:x0:go&&go in xe(e)?Lw(e):Gw(e)}function wc(e,t){return e>t}function Kb(e,t){return e!=null&&he.call(e,t)}function jb(e,t){return e!=null&&t in xe(e)}function Xb(e,t,i){return e>=on(t,i)&&e<ze(t,i)}function vc(e,t,i){for(var s=i?ic:$a,_=e[0].length,f=e.length,T=f,S=A(f),v=1/0,k=[];T--;){var P=e[T];T&&t&&(P=Ie(P,An(t))),v=on(P.length,v),S[T]=!i&&(t||_>=120&&P.length>=120)?new ho(T&&P):n}P=e[0];var R=-1,G=S[0];e:for(;++R<_&&k.length<v;){var V=P[R],j=t?t(V):V;if(V=i||V!==0?V:0,!(G?zr(G,j):s(k,j,i))){for(T=f;--T;){var ce=S[T];if(!(ce?zr(ce,j):s(e[T],j,i)))continue e}G&&G.push(j),k.push(V)}}return k}function Yb(e,t,i,s){return Zn(e,function(_,f,T){t(s,i(_),f,T)}),s}function Jr(e,t,i){t=Xt(t,e),e=y_(e,t);var s=e==null?e:e[Qn(Fn(t))];return s==null?n:vn(s,e,i)}function Dl(e){return Ee(e)&&cn(e)==Ut}function Zb(e){return Ee(e)&&cn(e)==$r}function Jb(e){return Ee(e)&&cn(e)==Se}function Qr(e,t,i,s,_){return e===t?!0:e==null||t==null||!Ee(e)&&!Ee(t)?e!==e&&t!==t:Qb(e,t,i,s,Qr,_)}function Qb(e,t,i,s,_,f){var T=re(e),S=re(t),v=T?Go:rn(e),k=S?Go:rn(t);v=v==Ut?ft:v,k=k==Ut?ft:k;var P=v==ft,R=k==ft,G=v==k;if(G&&Zt(e)){if(!Zt(t))return!1;T=!0,P=!1}if(G&&!P)return f||(f=new qn),T||nr(e)?__(e,t,i,s,_,f):Iw(e,t,v,i,s,_,f);if(!(i&D)){var V=P&&he.call(e,"__wrapped__"),j=R&&he.call(t,"__wrapped__");if(V||j){var ce=V?e.value():e,X=j?t.value():t;return f||(f=new qn),_(ce,X,i,s,f)}}return G?(f||(f=new qn),Cw(e,t,i,s,_,f)):!1}function ew(e){return Ee(e)&&rn(e)==$n}function Ac(e,t,i,s){var _=i.length,f=_,T=!s;if(e==null)return!f;for(e=xe(e);_--;){var S=i[_];if(T&&S[2]?S[1]!==e[S[0]]:!(S[0]in e))return!1}for(;++_<f;){S=i[_];var v=S[0],k=e[v],P=S[1];if(T&&S[2]){if(k===n&&!(v in e))return!1}else{var R=new qn;if(s)var G=s(k,P,v,e,t,R);if(!(G===n?Qr(P,k,D|H,s,R):G))return!1}}return!0}function Ml(e){if(!ke(e)||Ow(e))return!1;var t=wt(e)?eb:z0;return t.test(So(e))}function nw(e){return Ee(e)&&cn(e)==Ur}function tw(e){return Ee(e)&&rn(e)==zn}function ow(e){return Ee(e)&&Ai(e.length)&&!!we[cn(e)]}function Ol(e){return typeof e=="function"?e:e==null?hn:typeof e=="object"?re(e)?Wl(e[0],e[1]):Fl(e):ru(e)}function Ic(e){if(!ta(e))return ib(e);var t=[];for(var i in xe(e))he.call(e,i)&&i!="constructor"&&t.push(i);return t}function rw(e){if(!ke(e))return Uw(e);var t=ta(e),i=[];for(var s in e)s=="constructor"&&(t||!he.call(e,s))||i.push(s);return i}function Cc(e,t){return e<t}function Bl(e,t){var i=-1,s=gn(e)?A(e.length):[];return Kt(e,function(_,f,T){s[++i]=t(_,f,T)}),s}function Fl(e){var t=Hc(e);return t.length==1&&t[0][2]?T_(t[0][0],t[0][1]):function(i){return i===e||Ac(i,e,t)}}function Wl(e,t){return zc(e)&&h_(t)?T_(Qn(e),t):function(i){var s=ep(i,e);return s===n&&s===t?np(i,e):Qr(t,s,D|H)}}function pi(e,t,i,s,_){e!==t&&Sc(t,function(f,T){if(_||(_=new qn),ke(f))aw(e,t,T,i,pi,s,_);else{var S=s?s(qc(e,T),f,T+"",e,t,_):n;S===n&&(S=f),xc(e,T,S)}},fn)}function aw(e,t,i,s,_,f,T){var S=qc(e,i),v=qc(t,i),k=T.get(v);if(k){xc(e,i,k);return}var P=f?f(S,v,i+"",e,t,T):n,R=P===n;if(R){var G=re(v),V=!G&&Zt(v),j=!G&&!V&&nr(v);P=v,G||V||j?re(S)?P=S:Be(S)?P=un(S):V?(R=!1,P=Zl(v,!0)):j?(R=!1,P=Jl(v,!0)):P=[]:ra(v)||bo(v)?(P=S,bo(S)?P=j_(S):(!ke(S)||wt(S))&&(P=f_(v))):R=!1}R&&(T.set(v,P),_(P,v,s,f,T),T.delete(v)),xc(e,i,P)}function Ul(e,t){var i=e.length;if(!!i)return t+=t<0?i:0,bt(t,i)?e[t]:n}function Gl(e,t,i){t.length?t=Ie(t,function(f){return re(f)?function(T){return xo(T,f.length===1?f[0]:f)}:f}):t=[hn];var s=-1;t=Ie(t,An(q()));var _=Bl(e,function(f,T,S){var v=Ie(t,function(k){return k(f)});return{criteria:v,index:++s,value:f}});return NS(_,function(f,T){return Tw(f,T,i)})}function iw(e,t){return Hl(e,t,function(i,s){return np(e,s)})}function Hl(e,t,i){for(var s=-1,_=t.length,f={};++s<_;){var T=t[s],S=xo(e,T);i(S,T)&&ea(f,Xt(T,e),S)}return f}function sw(e){return function(t){return xo(t,e)}}function Lc(e,t,i,s){var _=s?ES:Vo,f=-1,T=t.length,S=e;for(e===t&&(t=un(t)),i&&(S=Ie(e,An(i)));++f<T;)for(var v=0,k=t[f],P=i?i(k):k;(v=_(S,P,v,s))>-1;)S!==e&&Qa.call(S,v,1),Qa.call(e,v,1);return e}function $l(e,t){for(var i=e?t.length:0,s=i-1;i--;){var _=t[i];if(i==s||_!==f){var f=_;bt(_)?Qa.call(e,_,1):Nc(e,_)}}return e}function kc(e,t){return e+ti(wl()*(t-e+1))}function cw(e,t,i,s){for(var _=-1,f=ze(ni((t-e)/(i||1)),0),T=A(f);f--;)T[s?f:++_]=e,e+=i;return T}function Pc(e,t){var i="";if(!e||t<1||t>Ae)return i;do t%2&&(i+=e),t=ti(t/2),t&&(e+=e);while(t);return i}function pe(e,t){return Kc(x_(e,t,hn),e+"")}function pw(e){return Il(tr(e))}function dw(e,t){var i=tr(e);return xi(i,To(t,0,i.length))}function ea(e,t,i,s){if(!ke(e))return e;t=Xt(t,e);for(var _=-1,f=t.length,T=f-1,S=e;S!=null&&++_<f;){var v=Qn(t[_]),k=i;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(_!=T){var P=S[v];k=s?s(P,v,S):n,k===n&&(k=ke(P)?P:bt(t[_+1])?[]:{})}Yr(S,v,k),S=S[v]}return e}var zl=oi?function(e,t){return oi.set(e,t),e}:hn,mw=ei?function(e,t){return ei(e,"toString",{configurable:!0,enumerable:!1,value:op(t),writable:!0})}:hn;function lw(e){return xi(tr(e))}function Bn(e,t,i){var s=-1,_=e.length;t<0&&(t=-t>_?0:_+t),i=i>_?_:i,i<0&&(i+=_),_=t>i?0:i-t>>>0,t>>>=0;for(var f=A(_);++s<_;)f[s]=e[s+t];return f}function _w(e,t){var i;return Kt(e,function(s,_,f){return i=t(s,_,f),!i}),!!i}function di(e,t,i){var s=0,_=e==null?s:e.length;if(typeof t=="number"&&t===t&&_<=Gs){for(;s<_;){var f=s+_>>>1,T=e[f];T!==null&&!Cn(T)&&(i?T<=t:T<t)?s=f+1:_=f}return _}return Ec(e,t,hn,i)}function Ec(e,t,i,s){var _=0,f=e==null?0:e.length;if(f===0)return 0;t=i(t);for(var T=t!==t,S=t===null,v=Cn(t),k=t===n;_<f;){var P=ti((_+f)/2),R=i(e[P]),G=R!==n,V=R===null,j=R===R,ce=Cn(R);if(T)var X=s||j;else k?X=j&&(s||G):S?X=j&&G&&(s||!V):v?X=j&&G&&!V&&(s||!ce):V||ce?X=!1:X=s?R<=t:R<t;X?_=P+1:f=P}return on(f,Us)}function Vl(e,t){for(var i=-1,s=e.length,_=0,f=[];++i<s;){var T=e[i],S=t?t(T):T;if(!i||!Kn(S,v)){var v=S;f[_++]=T===0?0:T}}return f}function ql(e){return typeof e=="number"?e:Cn(e)?ln:+e}function In(e){if(typeof e=="string")return e;if(re(e))return Ie(e,In)+"";if(Cn(e))return vl?vl.call(e):"";var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function jt(e,t,i){var s=-1,_=$a,f=e.length,T=!0,S=[],v=S;if(i)T=!1,_=ic;else if(f>=a){var k=t?null:vw(e);if(k)return Va(k);T=!1,_=zr,v=new ho}else v=t?[]:S;e:for(;++s<f;){var P=e[s],R=t?t(P):P;if(P=i||P!==0?P:0,T&&R===R){for(var G=v.length;G--;)if(v[G]===R)continue e;t&&v.push(R),S.push(P)}else _(v,R,i)||(v!==S&&v.push(R),S.push(P))}return S}function Nc(e,t){return t=Xt(t,e),e=y_(e,t),e==null||delete e[Qn(Fn(t))]}function Kl(e,t,i,s){return ea(e,t,i(xo(e,t)),s)}function mi(e,t,i,s){for(var _=e.length,f=s?_:-1;(s?f--:++f<_)&&t(e[f],f,e););return i?Bn(e,s?0:f,s?f+1:_):Bn(e,s?f+1:0,s?_:f)}function jl(e,t){var i=e;return i instanceof me&&(i=i.value()),sc(t,function(s,_){return _.func.apply(_.thisArg,$t([s],_.args))},i)}function Rc(e,t,i){var s=e.length;if(s<2)return s?jt(e[0]):[];for(var _=-1,f=A(s);++_<s;)for(var T=e[_],S=-1;++S<s;)S!=_&&(f[_]=Zr(f[_]||T,e[S],t,i));return jt(Je(f,1),t,i)}function Xl(e,t,i){for(var s=-1,_=e.length,f=t.length,T={};++s<_;){var S=s<f?t[s]:n;i(T,e[s],S)}return T}function Dc(e){return Be(e)?e:[]}function Mc(e){return typeof e=="function"?e:hn}function Xt(e,t){return re(e)?e:zc(e,t)?[e]:v_(ge(e))}var uw=pe;function Yt(e,t,i){var s=e.length;return i=i===n?s:i,!t&&i>=s?e:Bn(e,t,i)}var Yl=nb||function(e){return qe.clearTimeout(e)};function Zl(e,t){if(t)return e.slice();var i=e.length,s=Tl?Tl(i):new e.constructor(i);return e.copy(s),s}function Oc(e){var t=new e.constructor(e.byteLength);return new Za(t).set(new Za(e)),t}function gw(e,t){var i=t?Oc(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.byteLength)}function fw(e){var t=new e.constructor(e.source,Dm.exec(e));return t.lastIndex=e.lastIndex,t}function hw(e){return Xr?xe(Xr.call(e)):{}}function Jl(e,t){var i=t?Oc(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.length)}function Ql(e,t){if(e!==t){var i=e!==n,s=e===null,_=e===e,f=Cn(e),T=t!==n,S=t===null,v=t===t,k=Cn(t);if(!S&&!k&&!f&&e>t||f&&T&&v&&!S&&!k||s&&T&&v||!i&&v||!_)return 1;if(!s&&!f&&!k&&e<t||k&&i&&_&&!s&&!f||S&&i&&_||!T&&_||!v)return-1}return 0}function Tw(e,t,i){for(var s=-1,_=e.criteria,f=t.criteria,T=_.length,S=i.length;++s<T;){var v=Ql(_[s],f[s]);if(v){if(s>=S)return v;var k=i[s];return v*(k=="desc"?-1:1)}}return e.index-t.index}function e_(e,t,i,s){for(var _=-1,f=e.length,T=i.length,S=-1,v=t.length,k=ze(f-T,0),P=A(v+k),R=!s;++S<v;)P[S]=t[S];for(;++_<T;)(R||_<f)&&(P[i[_]]=e[_]);for(;k--;)P[S++]=e[_++];return P}function n_(e,t,i,s){for(var _=-1,f=e.length,T=-1,S=i.length,v=-1,k=t.length,P=ze(f-S,0),R=A(P+k),G=!s;++_<P;)R[_]=e[_];for(var V=_;++v<k;)R[V+v]=t[v];for(;++T<S;)(G||_<f)&&(R[V+i[T]]=e[_++]);return R}function un(e,t){var i=-1,s=e.length;for(t||(t=A(s));++i<s;)t[i]=e[i];return t}function Jn(e,t,i,s){var _=!i;i||(i={});for(var f=-1,T=t.length;++f<T;){var S=t[f],v=s?s(i[S],e[S],S,i,e):n;v===n&&(v=e[S]),_?xt(i,S,v):Yr(i,S,v)}return i}function xw(e,t){return Jn(e,$c(e),t)}function yw(e,t){return Jn(e,u_(e),t)}function li(e,t){return function(i,s){var _=re(i)?AS:Hb,f=t?t():{};return _(i,e,q(s,2),f)}}function Jo(e){return pe(function(t,i){var s=-1,_=i.length,f=_>1?i[_-1]:n,T=_>2?i[2]:n;for(f=e.length>3&&typeof f=="function"?(_--,f):n,T&&pn(i[0],i[1],T)&&(f=_<3?n:f,_=1),t=xe(t);++s<_;){var S=i[s];S&&e(t,S,s,f)}return t})}function t_(e,t){return function(i,s){if(i==null)return i;if(!gn(i))return e(i,s);for(var _=i.length,f=t?_:-1,T=xe(i);(t?f--:++f<_)&&s(T[f],f,T)!==!1;);return i}}function o_(e){return function(t,i,s){for(var _=-1,f=xe(t),T=s(t),S=T.length;S--;){var v=T[e?S:++_];if(i(f[v],v,f)===!1)break}return t}}function Sw(e,t,i){var s=t&U,_=na(e);function f(){var T=this&&this!==qe&&this instanceof f?_:e;return T.apply(s?i:this,arguments)}return f}function r_(e){return function(t){t=ge(t);var i=qo(t)?Vn(t):n,s=i?i[0]:t.charAt(0),_=i?Yt(i,1).join(""):t.slice(1);return s[e]()+_}}function Qo(e){return function(t){return sc(tu(nu(t).replace(mS,"")),e,"")}}function na(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var i=Zo(e.prototype),s=e.apply(i,t);return ke(s)?s:i}}function bw(e,t,i){var s=na(e);function _(){for(var f=arguments.length,T=A(f),S=f,v=er(_);S--;)T[S]=arguments[S];var k=f<3&&T[0]!==v&&T[f-1]!==v?[]:zt(T,v);if(f-=k.length,f<i)return p_(e,t,_i,_.placeholder,n,T,k,n,n,i-f);var P=this&&this!==qe&&this instanceof _?s:e;return vn(P,this,T)}return _}function a_(e){return function(t,i,s){var _=xe(t);if(!gn(t)){var f=q(i,3);t=Ke(t),i=function(S){return f(_[S],S,_)}}var T=e(t,i,s);return T>-1?_[f?t[T]:T]:n}}function i_(e){return St(function(t){var i=t.length,s=i,_=Mn.prototype.thru;for(e&&t.reverse();s--;){var f=t[s];if(typeof f!="function")throw new Dn(l);if(_&&!T&&hi(f)=="wrapper")var T=new Mn([],!0)}for(s=T?s:i;++s<i;){f=t[s];var S=hi(f),v=S=="wrapper"?Gc(f):n;v&&Vc(v[0])&&v[1]==(Q|J|oe|ve)&&!v[4].length&&v[9]==1?T=T[hi(v[0])].apply(T,v[3]):T=f.length==1&&Vc(f)?T[S]():T.thru(f)}return function(){var k=arguments,P=k[0];if(T&&k.length==1&&re(P))return T.plant(P).value();for(var R=0,G=i?t[R].apply(this,k):P;++R<i;)G=t[R].call(this,G);return G}})}function _i(e,t,i,s,_,f,T,S,v,k){var P=t&Q,R=t&U,G=t&O,V=t&(J|ae),j=t&an,ce=G?n:na(e);function X(){for(var de=arguments.length,_e=A(de),Ln=de;Ln--;)_e[Ln]=arguments[Ln];if(V)var dn=er(X),kn=DS(_e,dn);if(s&&(_e=e_(_e,s,_,V)),f&&(_e=n_(_e,f,T,V)),de-=kn,V&&de<k){var Fe=zt(_e,dn);return p_(e,t,_i,X.placeholder,i,_e,Fe,S,v,k-de)}var jn=R?i:this,At=G?jn[e]:e;return de=_e.length,S?_e=Hw(_e,S):j&&de>1&&_e.reverse(),P&&v<de&&(_e.length=v),this&&this!==qe&&this instanceof X&&(At=ce||na(At)),At.apply(jn,_e)}return X}function s_(e,t){return function(i,s){return Yb(i,e,t(s),{})}}function ui(e,t){return function(i,s){var _;if(i===n&&s===n)return t;if(i!==n&&(_=i),s!==n){if(_===n)return s;typeof i=="string"||typeof s=="string"?(i=In(i),s=In(s)):(i=ql(i),s=ql(s)),_=e(i,s)}return _}}function Bc(e){return St(function(t){return t=Ie(t,An(q())),pe(function(i){var s=this;return e(t,function(_){return vn(_,s,i)})})})}function gi(e,t){t=t===n?" ":In(t);var i=t.length;if(i<2)return i?Pc(t,e):t;var s=Pc(t,ni(e/Ko(t)));return qo(t)?Yt(Vn(s),0,e).join(""):s.slice(0,e)}function ww(e,t,i,s){var _=t&U,f=na(e);function T(){for(var S=-1,v=arguments.length,k=-1,P=s.length,R=A(P+v),G=this&&this!==qe&&this instanceof T?f:e;++k<P;)R[k]=s[k];for(;v--;)R[k++]=arguments[++S];return vn(G,_?i:this,R)}return T}function c_(e){return function(t,i,s){return s&&typeof s!="number"&&pn(t,i,s)&&(i=s=n),t=vt(t),i===n?(i=t,t=0):i=vt(i),s=s===n?t<i?1:-1:vt(s),cw(t,i,s,e)}}function fi(e){return function(t,i){return typeof t=="string"&&typeof i=="string"||(t=Wn(t),i=Wn(i)),e(t,i)}}function p_(e,t,i,s,_,f,T,S,v,k){var P=t&J,R=P?T:n,G=P?n:T,V=P?f:n,j=P?n:f;t|=P?oe:Y,t&=~(P?Y:oe),t&K||(t&=~(U|O));var ce=[e,t,_,V,R,j,G,S,v,k],X=i.apply(n,ce);return Vc(e)&&S_(X,ce),X.placeholder=s,b_(X,e,t)}function Fc(e){var t=$e[e];return function(i,s){if(i=Wn(i),s=s==null?0:on(ie(s),292),s&&bl(i)){var _=(ge(i)+"e").split("e"),f=t(_[0]+"e"+(+_[1]+s));return _=(ge(f)+"e").split("e"),+(_[0]+"e"+(+_[1]-s))}return t(i)}}var vw=Xo&&1/Va(new Xo([,-0]))[1]==Te?function(e){return new Xo(e)}:ip;function d_(e){return function(t){var i=rn(t);return i==$n?uc(t):i==zn?GS(t):RS(t,e(t))}}function yt(e,t,i,s,_,f,T,S){var v=t&O;if(!v&&typeof e!="function")throw new Dn(l);var k=s?s.length:0;if(k||(t&=~(oe|Y),s=_=n),T=T===n?T:ze(ie(T),0),S=S===n?S:ie(S),k-=_?_.length:0,t&Y){var P=s,R=_;s=_=n}var G=v?n:Gc(e),V=[e,t,i,s,_,P,R,f,T,S];if(G&&Ww(V,G),e=V[0],t=V[1],i=V[2],s=V[3],_=V[4],S=V[9]=V[9]===n?v?0:e.length:ze(V[9]-k,0),!S&&t&(J|ae)&&(t&=~(J|ae)),!t||t==U)var j=Sw(e,t,i);else t==J||t==ae?j=bw(e,t,S):(t==oe||t==(U|oe))&&!_.length?j=ww(e,t,i,s):j=_i.apply(n,V);var ce=G?zl:S_;return b_(ce(j,V),e,t)}function m_(e,t,i,s){return e===n||Kn(e,jo[i])&&!he.call(s,i)?t:e}function l_(e,t,i,s,_,f){return ke(e)&&ke(t)&&(f.set(t,e),pi(e,t,n,l_,f),f.delete(t)),e}function Aw(e){return ra(e)?n:e}function __(e,t,i,s,_,f){var T=i&D,S=e.length,v=t.length;if(S!=v&&!(T&&v>S))return!1;var k=f.get(e),P=f.get(t);if(k&&P)return k==t&&P==e;var R=-1,G=!0,V=i&H?new ho:n;for(f.set(e,t),f.set(t,e);++R<S;){var j=e[R],ce=t[R];if(s)var X=T?s(ce,j,R,t,e,f):s(j,ce,R,e,t,f);if(X!==n){if(X)continue;G=!1;break}if(V){if(!cc(t,function(de,_e){if(!zr(V,_e)&&(j===de||_(j,de,i,s,f)))return V.push(_e)})){G=!1;break}}else if(!(j===ce||_(j,ce,i,s,f))){G=!1;break}}return f.delete(e),f.delete(t),G}function Iw(e,t,i,s,_,f,T){switch(i){case $o:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case $r:return!(e.byteLength!=t.byteLength||!f(new Za(e),new Za(t)));case fe:case Se:case Wr:return Kn(+e,+t);case Gt:return e.name==t.name&&e.message==t.message;case Ur:case Gr:return e==t+"";case $n:var S=uc;case zn:var v=s&D;if(S||(S=Va),e.size!=t.size&&!v)return!1;var k=T.get(e);if(k)return k==t;s|=H,T.set(e,t);var P=__(S(e),S(t),s,_,f,T);return T.delete(e),P;case Wa:if(Xr)return Xr.call(e)==Xr.call(t)}return!1}function Cw(e,t,i,s,_,f){var T=i&D,S=Wc(e),v=S.length,k=Wc(t),P=k.length;if(v!=P&&!T)return!1;for(var R=v;R--;){var G=S[R];if(!(T?G in t:he.call(t,G)))return!1}var V=f.get(e),j=f.get(t);if(V&&j)return V==t&&j==e;var ce=!0;f.set(e,t),f.set(t,e);for(var X=T;++R<v;){G=S[R];var de=e[G],_e=t[G];if(s)var Ln=T?s(_e,de,G,t,e,f):s(de,_e,G,e,t,f);if(!(Ln===n?de===_e||_(de,_e,i,s,f):Ln)){ce=!1;break}X||(X=G=="constructor")}if(ce&&!X){var dn=e.constructor,kn=t.constructor;dn!=kn&&"constructor"in e&&"constructor"in t&&!(typeof dn=="function"&&dn instanceof dn&&typeof kn=="function"&&kn instanceof kn)&&(ce=!1)}return f.delete(e),f.delete(t),ce}function St(e){return Kc(x_(e,n,L_),e+"")}function Wc(e){return Rl(e,Ke,$c)}function Uc(e){return Rl(e,fn,u_)}var Gc=oi?function(e){return oi.get(e)}:ip;function hi(e){for(var t=e.name+"",i=Yo[t],s=he.call(Yo,t)?i.length:0;s--;){var _=i[s],f=_.func;if(f==null||f==e)return _.name}return t}function er(e){var t=he.call(u,"placeholder")?u:e;return t.placeholder}function q(){var e=u.iteratee||rp;return e=e===rp?Ol:e,arguments.length?e(arguments[0],arguments[1]):e}function Ti(e,t){var i=e.__data__;return Mw(t)?i[typeof t=="string"?"string":"hash"]:i.map}function Hc(e){for(var t=Ke(e),i=t.length;i--;){var s=t[i],_=e[s];t[i]=[s,_,h_(_)]}return t}function yo(e,t){var i=FS(e,t);return Ml(i)?i:n}function Lw(e){var t=he.call(e,go),i=e[go];try{e[go]=n;var s=!0}catch(f){}var _=Xa.call(e);return s&&(t?e[go]=i:delete e[go]),_}var $c=fc?function(e){return e==null?[]:(e=xe(e),Ht(fc(e),function(t){return yl.call(e,t)}))}:sp,u_=fc?function(e){for(var t=[];e;)$t(t,$c(e)),e=Ja(e);return t}:sp,rn=cn;(hc&&rn(new hc(new ArrayBuffer(1)))!=$o||qr&&rn(new qr)!=$n||Tc&&rn(Tc.resolve())!=Pm||Xo&&rn(new Xo)!=zn||Kr&&rn(new Kr)!=Hr)&&(rn=function(e){var t=cn(e),i=t==ft?e.constructor:n,s=i?So(i):"";if(s)switch(s){case db:return $o;case mb:return $n;case lb:return Pm;case _b:return zn;case ub:return Hr}return t});function kw(e,t,i){for(var s=-1,_=i.length;++s<_;){var f=i[s],T=f.size;switch(f.type){case"drop":e+=T;break;case"dropRight":t-=T;break;case"take":t=on(t,e+T);break;case"takeRight":e=ze(e,t-T);break}}return{start:e,end:t}}function Pw(e){var t=e.match(O0);return t?t[1].split(B0):[]}function g_(e,t,i){t=Xt(t,e);for(var s=-1,_=t.length,f=!1;++s<_;){var T=Qn(t[s]);if(!(f=e!=null&&i(e,T)))break;e=e[T]}return f||++s!=_?f:(_=e==null?0:e.length,!!_&&Ai(_)&&bt(T,_)&&(re(e)||bo(e)))}function Ew(e){var t=e.length,i=new e.constructor(t);return t&&typeof e[0]=="string"&&he.call(e,"index")&&(i.index=e.index,i.input=e.input),i}function f_(e){return typeof e.constructor=="function"&&!ta(e)?Zo(Ja(e)):{}}function Nw(e,t,i){var s=e.constructor;switch(t){case $r:return Oc(e);case fe:case Se:return new s(+e);case $o:return gw(e,i);case Hs:case $s:case zs:case Vs:case qs:case Ks:case js:case Xs:case Ys:return Jl(e,i);case $n:return new s;case Wr:case Gr:return new s(e);case Ur:return fw(e);case zn:return new s;case Wa:return hw(e)}}function Rw(e,t){var i=t.length;if(!i)return e;var s=i-1;return t[s]=(i>1?"& ":"")+t[s],t=t.join(i>2?", ":" "),e.replace(M0,`{
/* [wrapped with `+t+`] */
`)}function Dw(e){return re(e)||bo(e)||!!(Sl&&e&&e[Sl])}function bt(e,t){var i=typeof e;return t=t==null?Ae:t,!!t&&(i=="number"||i!="symbol"&&q0.test(e))&&e>-1&&e%1==0&&e<t}function pn(e,t,i){if(!ke(i))return!1;var s=typeof t;return(s=="number"?gn(i)&&bt(t,i.length):s=="string"&&t in i)?Kn(i[t],e):!1}function zc(e,t){if(re(e))return!1;var i=typeof e;return i=="number"||i=="symbol"||i=="boolean"||e==null||Cn(e)?!0:E0.test(e)||!P0.test(e)||t!=null&&e in xe(t)}function Mw(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Vc(e){var t=hi(e),i=u[t];if(typeof i!="function"||!(t in me.prototype))return!1;if(e===i)return!0;var s=Gc(i);return!!s&&e===s[0]}function Ow(e){return!!hl&&hl in e}var Bw=Ka?wt:cp;function ta(e){var t=e&&e.constructor,i=typeof t=="function"&&t.prototype||jo;return e===i}function h_(e){return e===e&&!ke(e)}function T_(e,t){return function(i){return i==null?!1:i[e]===t&&(t!==n||e in xe(i))}}function Fw(e){var t=wi(e,function(s){return i.size===b&&i.clear(),s}),i=t.cache;return t}function Ww(e,t){var i=e[1],s=t[1],_=i|s,f=_<(U|O|Q),T=s==Q&&i==J||s==Q&&i==ve&&e[7].length<=t[8]||s==(Q|ve)&&t[7].length<=t[8]&&i==J;if(!(f||T))return e;s&U&&(e[2]=t[2],_|=i&U?0:K);var S=t[3];if(S){var v=e[3];e[3]=v?e_(v,S,t[4]):S,e[4]=v?zt(e[3],x):t[4]}return S=t[5],S&&(v=e[5],e[5]=v?n_(v,S,t[6]):S,e[6]=v?zt(e[5],x):t[6]),S=t[7],S&&(e[7]=S),s&Q&&(e[8]=e[8]==null?t[8]:on(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=_,e}function Uw(e){var t=[];if(e!=null)for(var i in xe(e))t.push(i);return t}function Gw(e){return Xa.call(e)}function x_(e,t,i){return t=ze(t===n?e.length-1:t,0),function(){for(var s=arguments,_=-1,f=ze(s.length-t,0),T=A(f);++_<f;)T[_]=s[t+_];_=-1;for(var S=A(t+1);++_<t;)S[_]=s[_];return S[t]=i(T),vn(e,this,S)}}function y_(e,t){return t.length<2?e:xo(e,Bn(t,0,-1))}function Hw(e,t){for(var i=e.length,s=on(t.length,i),_=un(e);s--;){var f=t[s];e[s]=bt(f,i)?_[f]:n}return e}function qc(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var S_=w_(zl),oa=ob||function(e,t){return qe.setTimeout(e,t)},Kc=w_(mw);function b_(e,t,i){var s=t+"";return Kc(e,Rw(s,$w(Pw(s),i)))}function w_(e){var t=0,i=0;return function(){var s=sb(),_=_o-(s-i);if(i=s,_>0){if(++t>=Hn)return arguments[0]}else t=0;return e.apply(n,arguments)}}function xi(e,t){var i=-1,s=e.length,_=s-1;for(t=t===n?s:t;++i<t;){var f=kc(i,_),T=e[f];e[f]=e[i],e[i]=T}return e.length=t,e}var v_=Fw(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(N0,function(i,s,_,f){t.push(_?f.replace(U0,"$1"):s||i)}),t});function Qn(e){if(typeof e=="string"||Cn(e))return e;var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function So(e){if(e!=null){try{return ja.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function $w(e,t){return Rn(Ba,function(i){var s="_."+i[0];t&i[1]&&!$a(e,s)&&e.push(s)}),e.sort()}function A_(e){if(e instanceof me)return e.clone();var t=new Mn(e.__wrapped__,e.__chain__);return t.__actions__=un(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function zw(e,t,i){(i?pn(e,t,i):t===n)?t=1:t=ze(ie(t),0);var s=e==null?0:e.length;if(!s||t<1)return[];for(var _=0,f=0,T=A(ni(s/t));_<s;)T[f++]=Bn(e,_,_+=t);return T}function Vw(e){for(var t=-1,i=e==null?0:e.length,s=0,_=[];++t<i;){var f=e[t];f&&(_[s++]=f)}return _}function qw(){var e=arguments.length;if(!e)return[];for(var t=A(e-1),i=arguments[0],s=e;s--;)t[s-1]=arguments[s];return $t(re(i)?un(i):[i],Je(t,1))}var Kw=pe(function(e,t){return Be(e)?Zr(e,Je(t,1,Be,!0)):[]}),jw=pe(function(e,t){var i=Fn(t);return Be(i)&&(i=n),Be(e)?Zr(e,Je(t,1,Be,!0),q(i,2)):[]}),Xw=pe(function(e,t){var i=Fn(t);return Be(i)&&(i=n),Be(e)?Zr(e,Je(t,1,Be,!0),n,i):[]});function Yw(e,t,i){var s=e==null?0:e.length;return s?(t=i||t===n?1:ie(t),Bn(e,t<0?0:t,s)):[]}function Zw(e,t,i){var s=e==null?0:e.length;return s?(t=i||t===n?1:ie(t),t=s-t,Bn(e,0,t<0?0:t)):[]}function Jw(e,t){return e&&e.length?mi(e,q(t,3),!0,!0):[]}function Qw(e,t){return e&&e.length?mi(e,q(t,3),!0):[]}function ev(e,t,i,s){var _=e==null?0:e.length;return _?(i&&typeof i!="number"&&pn(e,t,i)&&(i=0,s=_),qb(e,t,i,s)):[]}function I_(e,t,i){var s=e==null?0:e.length;if(!s)return-1;var _=i==null?0:ie(i);return _<0&&(_=ze(s+_,0)),za(e,q(t,3),_)}function C_(e,t,i){var s=e==null?0:e.length;if(!s)return-1;var _=s-1;return i!==n&&(_=ie(i),_=i<0?ze(s+_,0):on(_,s-1)),za(e,q(t,3),_,!0)}function L_(e){var t=e==null?0:e.length;return t?Je(e,1):[]}function nv(e){var t=e==null?0:e.length;return t?Je(e,Te):[]}function tv(e,t){var i=e==null?0:e.length;return i?(t=t===n?1:ie(t),Je(e,t)):[]}function ov(e){for(var t=-1,i=e==null?0:e.length,s={};++t<i;){var _=e[t];s[_[0]]=_[1]}return s}function k_(e){return e&&e.length?e[0]:n}function rv(e,t,i){var s=e==null?0:e.length;if(!s)return-1;var _=i==null?0:ie(i);return _<0&&(_=ze(s+_,0)),Vo(e,t,_)}function av(e){var t=e==null?0:e.length;return t?Bn(e,0,-1):[]}var iv=pe(function(e){var t=Ie(e,Dc);return t.length&&t[0]===e[0]?vc(t):[]}),sv=pe(function(e){var t=Fn(e),i=Ie(e,Dc);return t===Fn(i)?t=n:i.pop(),i.length&&i[0]===e[0]?vc(i,q(t,2)):[]}),cv=pe(function(e){var t=Fn(e),i=Ie(e,Dc);return t=typeof t=="function"?t:n,t&&i.pop(),i.length&&i[0]===e[0]?vc(i,n,t):[]});function pv(e,t){return e==null?"":ab.call(e,t)}function Fn(e){var t=e==null?0:e.length;return t?e[t-1]:n}function dv(e,t,i){var s=e==null?0:e.length;if(!s)return-1;var _=s;return i!==n&&(_=ie(i),_=_<0?ze(s+_,0):on(_,s-1)),t===t?$S(e,t,_):za(e,pl,_,!0)}function mv(e,t){return e&&e.length?Ul(e,ie(t)):n}var lv=pe(P_);function P_(e,t){return e&&e.length&&t&&t.length?Lc(e,t):e}function _v(e,t,i){return e&&e.length&&t&&t.length?Lc(e,t,q(i,2)):e}function uv(e,t,i){return e&&e.length&&t&&t.length?Lc(e,t,n,i):e}var gv=St(function(e,t){var i=e==null?0:e.length,s=yc(e,t);return $l(e,Ie(t,function(_){return bt(_,i)?+_:_}).sort(Ql)),s});function fv(e,t){var i=[];if(!(e&&e.length))return i;var s=-1,_=[],f=e.length;for(t=q(t,3);++s<f;){var T=e[s];t(T,s,e)&&(i.push(T),_.push(s))}return $l(e,_),i}function jc(e){return e==null?e:pb.call(e)}function hv(e,t,i){var s=e==null?0:e.length;return s?(i&&typeof i!="number"&&pn(e,t,i)?(t=0,i=s):(t=t==null?0:ie(t),i=i===n?s:ie(i)),Bn(e,t,i)):[]}function Tv(e,t){return di(e,t)}function xv(e,t,i){return Ec(e,t,q(i,2))}function yv(e,t){var i=e==null?0:e.length;if(i){var s=di(e,t);if(s<i&&Kn(e[s],t))return s}return-1}function Sv(e,t){return di(e,t,!0)}function bv(e,t,i){return Ec(e,t,q(i,2),!0)}function wv(e,t){var i=e==null?0:e.length;if(i){var s=di(e,t,!0)-1;if(Kn(e[s],t))return s}return-1}function vv(e){return e&&e.length?Vl(e):[]}function Av(e,t){return e&&e.length?Vl(e,q(t,2)):[]}function Iv(e){var t=e==null?0:e.length;return t?Bn(e,1,t):[]}function Cv(e,t,i){return e&&e.length?(t=i||t===n?1:ie(t),Bn(e,0,t<0?0:t)):[]}function Lv(e,t,i){var s=e==null?0:e.length;return s?(t=i||t===n?1:ie(t),t=s-t,Bn(e,t<0?0:t,s)):[]}function kv(e,t){return e&&e.length?mi(e,q(t,3),!1,!0):[]}function Pv(e,t){return e&&e.length?mi(e,q(t,3)):[]}var Ev=pe(function(e){return jt(Je(e,1,Be,!0))}),Nv=pe(function(e){var t=Fn(e);return Be(t)&&(t=n),jt(Je(e,1,Be,!0),q(t,2))}),Rv=pe(function(e){var t=Fn(e);return t=typeof t=="function"?t:n,jt(Je(e,1,Be,!0),n,t)});function Dv(e){return e&&e.length?jt(e):[]}function Mv(e,t){return e&&e.length?jt(e,q(t,2)):[]}function Ov(e,t){return t=typeof t=="function"?t:n,e&&e.length?jt(e,n,t):[]}function Xc(e){if(!(e&&e.length))return[];var t=0;return e=Ht(e,function(i){if(Be(i))return t=ze(i.length,t),!0}),lc(t,function(i){return Ie(e,pc(i))})}function E_(e,t){if(!(e&&e.length))return[];var i=Xc(e);return t==null?i:Ie(i,function(s){return vn(t,n,s)})}var Bv=pe(function(e,t){return Be(e)?Zr(e,t):[]}),Fv=pe(function(e){return Rc(Ht(e,Be))}),Wv=pe(function(e){var t=Fn(e);return Be(t)&&(t=n),Rc(Ht(e,Be),q(t,2))}),Uv=pe(function(e){var t=Fn(e);return t=typeof t=="function"?t:n,Rc(Ht(e,Be),n,t)}),Gv=pe(Xc);function Hv(e,t){return Xl(e||[],t||[],Yr)}function $v(e,t){return Xl(e||[],t||[],ea)}var zv=pe(function(e){var t=e.length,i=t>1?e[t-1]:n;return i=typeof i=="function"?(e.pop(),i):n,E_(e,i)});function N_(e){var t=u(e);return t.__chain__=!0,t}function Vv(e,t){return t(e),e}function yi(e,t){return t(e)}var qv=St(function(e){var t=e.length,i=t?e[0]:0,s=this.__wrapped__,_=function(f){return yc(f,e)};return t>1||this.__actions__.length||!(s instanceof me)||!bt(i)?this.thru(_):(s=s.slice(i,+i+(t?1:0)),s.__actions__.push({func:yi,args:[_],thisArg:n}),new Mn(s,this.__chain__).thru(function(f){return t&&!f.length&&f.push(n),f}))});function Kv(){return N_(this)}function jv(){return new Mn(this.value(),this.__chain__)}function Xv(){this.__values__===n&&(this.__values__=q_(this.value()));var e=this.__index__>=this.__values__.length,t=e?n:this.__values__[this.__index__++];return{done:e,value:t}}function Yv(){return this}function Zv(e){for(var t,i=this;i instanceof ai;){var s=A_(i);s.__index__=0,s.__values__=n,t?_.__wrapped__=s:t=s;var _=s;i=i.__wrapped__}return _.__wrapped__=e,t}function Jv(){var e=this.__wrapped__;if(e instanceof me){var t=e;return this.__actions__.length&&(t=new me(this)),t=t.reverse(),t.__actions__.push({func:yi,args:[jc],thisArg:n}),new Mn(t,this.__chain__)}return this.thru(jc)}function Qv(){return jl(this.__wrapped__,this.__actions__)}var e1=li(function(e,t,i){he.call(e,i)?++e[i]:xt(e,i,1)});function n1(e,t,i){var s=re(e)?sl:Vb;return i&&pn(e,t,i)&&(t=n),s(e,q(t,3))}function t1(e,t){var i=re(e)?Ht:El;return i(e,q(t,3))}var o1=a_(I_),r1=a_(C_);function a1(e,t){return Je(Si(e,t),1)}function i1(e,t){return Je(Si(e,t),Te)}function s1(e,t,i){return i=i===n?1:ie(i),Je(Si(e,t),i)}function R_(e,t){var i=re(e)?Rn:Kt;return i(e,q(t,3))}function D_(e,t){var i=re(e)?IS:Pl;return i(e,q(t,3))}var c1=li(function(e,t,i){he.call(e,i)?e[i].push(t):xt(e,i,[t])});function p1(e,t,i,s){e=gn(e)?e:tr(e),i=i&&!s?ie(i):0;var _=e.length;return i<0&&(i=ze(_+i,0)),Ii(e)?i<=_&&e.indexOf(t,i)>-1:!!_&&Vo(e,t,i)>-1}var d1=pe(function(e,t,i){var s=-1,_=typeof t=="function",f=gn(e)?A(e.length):[];return Kt(e,function(T){f[++s]=_?vn(t,T,i):Jr(T,t,i)}),f}),m1=li(function(e,t,i){xt(e,i,t)});function Si(e,t){var i=re(e)?Ie:Bl;return i(e,q(t,3))}function l1(e,t,i,s){return e==null?[]:(re(t)||(t=t==null?[]:[t]),i=s?n:i,re(i)||(i=i==null?[]:[i]),Gl(e,t,i))}var _1=li(function(e,t,i){e[i?0:1].push(t)},function(){return[[],[]]});function u1(e,t,i){var s=re(e)?sc:ml,_=arguments.length<3;return s(e,q(t,4),i,_,Kt)}function g1(e,t,i){var s=re(e)?CS:ml,_=arguments.length<3;return s(e,q(t,4),i,_,Pl)}function f1(e,t){var i=re(e)?Ht:El;return i(e,vi(q(t,3)))}function h1(e){var t=re(e)?Il:pw;return t(e)}function T1(e,t,i){(i?pn(e,t,i):t===n)?t=1:t=ie(t);var s=re(e)?Ub:dw;return s(e,t)}function x1(e){var t=re(e)?Gb:lw;return t(e)}function y1(e){if(e==null)return 0;if(gn(e))return Ii(e)?Ko(e):e.length;var t=rn(e);return t==$n||t==zn?e.size:Ic(e).length}function S1(e,t,i){var s=re(e)?cc:_w;return i&&pn(e,t,i)&&(t=n),s(e,q(t,3))}var b1=pe(function(e,t){if(e==null)return[];var i=t.length;return i>1&&pn(e,t[0],t[1])?t=[]:i>2&&pn(t[0],t[1],t[2])&&(t=[t[0]]),Gl(e,Je(t,1),[])}),bi=tb||function(){return qe.Date.now()};function w1(e,t){if(typeof t!="function")throw new Dn(l);return e=ie(e),function(){if(--e<1)return t.apply(this,arguments)}}function M_(e,t,i){return t=i?n:t,t=e&&t==null?e.length:t,yt(e,Q,n,n,n,n,t)}function O_(e,t){var i;if(typeof t!="function")throw new Dn(l);return e=ie(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var Yc=pe(function(e,t,i){var s=U;if(i.length){var _=zt(i,er(Yc));s|=oe}return yt(e,s,t,i,_)}),B_=pe(function(e,t,i){var s=U|O;if(i.length){var _=zt(i,er(B_));s|=oe}return yt(t,s,e,i,_)});function F_(e,t,i){t=i?n:t;var s=yt(e,J,n,n,n,n,n,t);return s.placeholder=F_.placeholder,s}function W_(e,t,i){t=i?n:t;var s=yt(e,ae,n,n,n,n,n,t);return s.placeholder=W_.placeholder,s}function U_(e,t,i){var s,_,f,T,S,v,k=0,P=!1,R=!1,G=!0;if(typeof e!="function")throw new Dn(l);t=Wn(t)||0,ke(i)&&(P=!!i.leading,R="maxWait"in i,f=R?ze(Wn(i.maxWait)||0,t):f,G="trailing"in i?!!i.trailing:G);function V(Fe){var jn=s,At=_;return s=_=n,k=Fe,T=e.apply(At,jn),T}function j(Fe){return k=Fe,S=oa(de,t),P?V(Fe):T}function ce(Fe){var jn=Fe-v,At=Fe-k,au=t-jn;return R?on(au,f-At):au}function X(Fe){var jn=Fe-v,At=Fe-k;return v===n||jn>=t||jn<0||R&&At>=f}function de(){var Fe=bi();if(X(Fe))return _e(Fe);S=oa(de,ce(Fe))}function _e(Fe){return S=n,G&&s?V(Fe):(s=_=n,T)}function Ln(){S!==n&&Yl(S),k=0,s=v=_=S=n}function dn(){return S===n?T:_e(bi())}function kn(){var Fe=bi(),jn=X(Fe);if(s=arguments,_=this,v=Fe,jn){if(S===n)return j(v);if(R)return Yl(S),S=oa(de,t),V(v)}return S===n&&(S=oa(de,t)),T}return kn.cancel=Ln,kn.flush=dn,kn}var v1=pe(function(e,t){return kl(e,1,t)}),A1=pe(function(e,t,i){return kl(e,Wn(t)||0,i)});function I1(e){return yt(e,an)}function wi(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Dn(l);var i=function(){var s=arguments,_=t?t.apply(this,s):s[0],f=i.cache;if(f.has(_))return f.get(_);var T=e.apply(this,s);return i.cache=f.set(_,T)||f,T};return i.cache=new(wi.Cache||Tt),i}wi.Cache=Tt;function vi(e){if(typeof e!="function")throw new Dn(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function C1(e){return O_(2,e)}var L1=uw(function(e,t){t=t.length==1&&re(t[0])?Ie(t[0],An(q())):Ie(Je(t,1),An(q()));var i=t.length;return pe(function(s){for(var _=-1,f=on(s.length,i);++_<f;)s[_]=t[_].call(this,s[_]);return vn(e,this,s)})}),Zc=pe(function(e,t){var i=zt(t,er(Zc));return yt(e,oe,n,t,i)}),G_=pe(function(e,t){var i=zt(t,er(G_));return yt(e,Y,n,t,i)}),k1=St(function(e,t){return yt(e,ve,n,n,n,t)});function P1(e,t){if(typeof e!="function")throw new Dn(l);return t=t===n?t:ie(t),pe(e,t)}function E1(e,t){if(typeof e!="function")throw new Dn(l);return t=t==null?0:ze(ie(t),0),pe(function(i){var s=i[t],_=Yt(i,0,t);return s&&$t(_,s),vn(e,this,_)})}function N1(e,t,i){var s=!0,_=!0;if(typeof e!="function")throw new Dn(l);return ke(i)&&(s="leading"in i?!!i.leading:s,_="trailing"in i?!!i.trailing:_),U_(e,t,{leading:s,maxWait:t,trailing:_})}function R1(e){return M_(e,1)}function D1(e,t){return Zc(Mc(t),e)}function M1(){if(!arguments.length)return[];var e=arguments[0];return re(e)?e:[e]}function O1(e){return On(e,C)}function B1(e,t){return t=typeof t=="function"?t:n,On(e,C,t)}function F1(e){return On(e,y|C)}function W1(e,t){return t=typeof t=="function"?t:n,On(e,y|C,t)}function U1(e,t){return t==null||Ll(e,t,Ke(t))}function Kn(e,t){return e===t||e!==e&&t!==t}var G1=fi(wc),H1=fi(function(e,t){return e>=t}),bo=Dl(function(){return arguments}())?Dl:function(e){return Ee(e)&&he.call(e,"callee")&&!yl.call(e,"callee")},re=A.isArray,$1=nl?An(nl):Zb;function gn(e){return e!=null&&Ai(e.length)&&!wt(e)}function Be(e){return Ee(e)&&gn(e)}function z1(e){return e===!0||e===!1||Ee(e)&&cn(e)==fe}var Zt=rb||cp,V1=tl?An(tl):Jb;function q1(e){return Ee(e)&&e.nodeType===1&&!ra(e)}function K1(e){if(e==null)return!0;if(gn(e)&&(re(e)||typeof e=="string"||typeof e.splice=="function"||Zt(e)||nr(e)||bo(e)))return!e.length;var t=rn(e);if(t==$n||t==zn)return!e.size;if(ta(e))return!Ic(e).length;for(var i in e)if(he.call(e,i))return!1;return!0}function j1(e,t){return Qr(e,t)}function X1(e,t,i){i=typeof i=="function"?i:n;var s=i?i(e,t):n;return s===n?Qr(e,t,n,i):!!s}function Jc(e){if(!Ee(e))return!1;var t=cn(e);return t==Gt||t==Oe||typeof e.message=="string"&&typeof e.name=="string"&&!ra(e)}function Y1(e){return typeof e=="number"&&bl(e)}function wt(e){if(!ke(e))return!1;var t=cn(e);return t==Ho||t==Fa||t==Fr||t==y0}function H_(e){return typeof e=="number"&&e==ie(e)}function Ai(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ae}function ke(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Ee(e){return e!=null&&typeof e=="object"}var $_=ol?An(ol):ew;function Z1(e,t){return e===t||Ac(e,t,Hc(t))}function J1(e,t,i){return i=typeof i=="function"?i:n,Ac(e,t,Hc(t),i)}function Q1(e){return z_(e)&&e!=+e}function eA(e){if(Bw(e))throw new ne(c);return Ml(e)}function nA(e){return e===null}function tA(e){return e==null}function z_(e){return typeof e=="number"||Ee(e)&&cn(e)==Wr}function ra(e){if(!Ee(e)||cn(e)!=ft)return!1;var t=Ja(e);if(t===null)return!0;var i=he.call(t,"constructor")&&t.constructor;return typeof i=="function"&&i instanceof i&&ja.call(i)==JS}var Qc=rl?An(rl):nw;function oA(e){return H_(e)&&e>=-Ae&&e<=Ae}var V_=al?An(al):tw;function Ii(e){return typeof e=="string"||!re(e)&&Ee(e)&&cn(e)==Gr}function Cn(e){return typeof e=="symbol"||Ee(e)&&cn(e)==Wa}var nr=il?An(il):ow;function rA(e){return e===n}function aA(e){return Ee(e)&&rn(e)==Hr}function iA(e){return Ee(e)&&cn(e)==b0}var sA=fi(Cc),cA=fi(function(e,t){return e<=t});function q_(e){if(!e)return[];if(gn(e))return Ii(e)?Vn(e):un(e);if(Vr&&e[Vr])return US(e[Vr]());var t=rn(e),i=t==$n?uc:t==zn?Va:tr;return i(e)}function vt(e){if(!e)return e===0?e:0;if(e=Wn(e),e===Te||e===-Te){var t=e<0?-1:1;return t*Me}return e===e?e:0}function ie(e){var t=vt(e),i=t%1;return t===t?i?t-i:t:0}function K_(e){return e?To(ie(e),0,_n):0}function Wn(e){if(typeof e=="number")return e;if(Cn(e))return ln;if(ke(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ke(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ll(e);var i=$0.test(e);return i||V0.test(e)?wS(e.slice(2),i?2:8):H0.test(e)?ln:+e}function j_(e){return Jn(e,fn(e))}function pA(e){return e?To(ie(e),-Ae,Ae):e===0?e:0}function ge(e){return e==null?"":In(e)}var dA=Jo(function(e,t){if(ta(t)||gn(t)){Jn(t,Ke(t),e);return}for(var i in t)he.call(t,i)&&Yr(e,i,t[i])}),X_=Jo(function(e,t){Jn(t,fn(t),e)}),Ci=Jo(function(e,t,i,s){Jn(t,fn(t),e,s)}),mA=Jo(function(e,t,i,s){Jn(t,Ke(t),e,s)}),lA=St(yc);function _A(e,t){var i=Zo(e);return t==null?i:Cl(i,t)}var uA=pe(function(e,t){e=xe(e);var i=-1,s=t.length,_=s>2?t[2]:n;for(_&&pn(t[0],t[1],_)&&(s=1);++i<s;)for(var f=t[i],T=fn(f),S=-1,v=T.length;++S<v;){var k=T[S],P=e[k];(P===n||Kn(P,jo[k])&&!he.call(e,k))&&(e[k]=f[k])}return e}),gA=pe(function(e){return e.push(n,l_),vn(Y_,n,e)});function fA(e,t){return cl(e,q(t,3),Zn)}function hA(e,t){return cl(e,q(t,3),bc)}function TA(e,t){return e==null?e:Sc(e,q(t,3),fn)}function xA(e,t){return e==null?e:Nl(e,q(t,3),fn)}function yA(e,t){return e&&Zn(e,q(t,3))}function SA(e,t){return e&&bc(e,q(t,3))}function bA(e){return e==null?[]:ci(e,Ke(e))}function wA(e){return e==null?[]:ci(e,fn(e))}function ep(e,t,i){var s=e==null?n:xo(e,t);return s===n?i:s}function vA(e,t){return e!=null&&g_(e,t,Kb)}function np(e,t){return e!=null&&g_(e,t,jb)}var AA=s_(function(e,t,i){t!=null&&typeof t.toString!="function"&&(t=Xa.call(t)),e[t]=i},op(hn)),IA=s_(function(e,t,i){t!=null&&typeof t.toString!="function"&&(t=Xa.call(t)),he.call(e,t)?e[t].push(i):e[t]=[i]},q),CA=pe(Jr);function Ke(e){return gn(e)?Al(e):Ic(e)}function fn(e){return gn(e)?Al(e,!0):rw(e)}function LA(e,t){var i={};return t=q(t,3),Zn(e,function(s,_,f){xt(i,t(s,_,f),s)}),i}function kA(e,t){var i={};return t=q(t,3),Zn(e,function(s,_,f){xt(i,_,t(s,_,f))}),i}var PA=Jo(function(e,t,i){pi(e,t,i)}),Y_=Jo(function(e,t,i,s){pi(e,t,i,s)}),EA=St(function(e,t){var i={};if(e==null)return i;var s=!1;t=Ie(t,function(f){return f=Xt(f,e),s||(s=f.length>1),f}),Jn(e,Uc(e),i),s&&(i=On(i,y|N|C,Aw));for(var _=t.length;_--;)Nc(i,t[_]);return i});function NA(e,t){return Z_(e,vi(q(t)))}var RA=St(function(e,t){return e==null?{}:iw(e,t)});function Z_(e,t){if(e==null)return{};var i=Ie(Uc(e),function(s){return[s]});return t=q(t),Hl(e,i,function(s,_){return t(s,_[0])})}function DA(e,t,i){t=Xt(t,e);var s=-1,_=t.length;for(_||(_=1,e=n);++s<_;){var f=e==null?n:e[Qn(t[s])];f===n&&(s=_,f=i),e=wt(f)?f.call(e):f}return e}function MA(e,t,i){return e==null?e:ea(e,t,i)}function OA(e,t,i,s){return s=typeof s=="function"?s:n,e==null?e:ea(e,t,i,s)}var J_=d_(Ke),Q_=d_(fn);function BA(e,t,i){var s=re(e),_=s||Zt(e)||nr(e);if(t=q(t,4),i==null){var f=e&&e.constructor;_?i=s?new f:[]:ke(e)?i=wt(f)?Zo(Ja(e)):{}:i={}}return(_?Rn:Zn)(e,function(T,S,v){return t(i,T,S,v)}),i}function FA(e,t){return e==null?!0:Nc(e,t)}function WA(e,t,i){return e==null?e:Kl(e,t,Mc(i))}function UA(e,t,i,s){return s=typeof s=="function"?s:n,e==null?e:Kl(e,t,Mc(i),s)}function tr(e){return e==null?[]:_c(e,Ke(e))}function GA(e){return e==null?[]:_c(e,fn(e))}function HA(e,t,i){return i===n&&(i=t,t=n),i!==n&&(i=Wn(i),i=i===i?i:0),t!==n&&(t=Wn(t),t=t===t?t:0),To(Wn(e),t,i)}function $A(e,t,i){return t=vt(t),i===n?(i=t,t=0):i=vt(i),e=Wn(e),Xb(e,t,i)}function zA(e,t,i){if(i&&typeof i!="boolean"&&pn(e,t,i)&&(t=i=n),i===n&&(typeof t=="boolean"?(i=t,t=n):typeof e=="boolean"&&(i=e,e=n)),e===n&&t===n?(e=0,t=1):(e=vt(e),t===n?(t=e,e=0):t=vt(t)),e>t){var s=e;e=t,t=s}if(i||e%1||t%1){var _=wl();return on(e+_*(t-e+bS("1e-"+((_+"").length-1))),t)}return kc(e,t)}var VA=Qo(function(e,t,i){return t=t.toLowerCase(),e+(i?eu(t):t)});function eu(e){return tp(ge(e).toLowerCase())}function nu(e){return e=ge(e),e&&e.replace(K0,MS).replace(lS,"")}function qA(e,t,i){e=ge(e),t=In(t);var s=e.length;i=i===n?s:To(ie(i),0,s);var _=i;return i-=t.length,i>=0&&e.slice(i,_)==t}function KA(e){return e=ge(e),e&&C0.test(e)?e.replace(Nm,OS):e}function jA(e){return e=ge(e),e&&R0.test(e)?e.replace(Zs,"\\$&"):e}var XA=Qo(function(e,t,i){return e+(i?"-":"")+t.toLowerCase()}),YA=Qo(function(e,t,i){return e+(i?" ":"")+t.toLowerCase()}),ZA=r_("toLowerCase");function JA(e,t,i){e=ge(e),t=ie(t);var s=t?Ko(e):0;if(!t||s>=t)return e;var _=(t-s)/2;return gi(ti(_),i)+e+gi(ni(_),i)}function QA(e,t,i){e=ge(e),t=ie(t);var s=t?Ko(e):0;return t&&s<t?e+gi(t-s,i):e}function eI(e,t,i){e=ge(e),t=ie(t);var s=t?Ko(e):0;return t&&s<t?gi(t-s,i)+e:e}function nI(e,t,i){return i||t==null?t=0:t&&(t=+t),cb(ge(e).replace(Js,""),t||0)}function tI(e,t,i){return(i?pn(e,t,i):t===n)?t=1:t=ie(t),Pc(ge(e),t)}function oI(){var e=arguments,t=ge(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var rI=Qo(function(e,t,i){return e+(i?"_":"")+t.toLowerCase()});function aI(e,t,i){return i&&typeof i!="number"&&pn(e,t,i)&&(t=i=n),i=i===n?_n:i>>>0,i?(e=ge(e),e&&(typeof t=="string"||t!=null&&!Qc(t))&&(t=In(t),!t&&qo(e))?Yt(Vn(e),0,i):e.split(t,i)):[]}var iI=Qo(function(e,t,i){return e+(i?" ":"")+tp(t)});function sI(e,t,i){return e=ge(e),i=i==null?0:To(ie(i),0,e.length),t=In(t),e.slice(i,i+t.length)==t}function cI(e,t,i){var s=u.templateSettings;i&&pn(e,t,i)&&(t=n),e=ge(e),t=Ci({},t,s,m_);var _=Ci({},t.imports,s.imports,m_),f=Ke(_),T=_c(_,f),S,v,k=0,P=t.interpolate||Ua,R="__p += '",G=gc((t.escape||Ua).source+"|"+P.source+"|"+(P===Rm?G0:Ua).source+"|"+(t.evaluate||Ua).source+"|$","g"),V="//# sourceURL="+(he.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++hS+"]")+`
`;e.replace(G,function(X,de,_e,Ln,dn,kn){return _e||(_e=Ln),R+=e.slice(k,kn).replace(j0,BS),de&&(S=!0,R+=`' +
__e(`+de+`) +
'`),dn&&(v=!0,R+=`';
`+dn+`;
__p += '`),_e&&(R+=`' +
((__t = (`+_e+`)) == null ? '' : __t) +
'`),k=kn+X.length,X}),R+=`';
`;var j=he.call(t,"variable")&&t.variable;if(!j)R=`with (obj) {
`+R+`
}
`;else if(W0.test(j))throw new ne(g);R=(v?R.replace(w0,""):R).replace(v0,"$1").replace(A0,"$1;"),R="function("+(j||"obj")+`) {
`+(j?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(S?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var ce=ou(function(){return ue(f,V+"return "+R).apply(n,T)});if(ce.source=R,Jc(ce))throw ce;return ce}function pI(e){return ge(e).toLowerCase()}function dI(e){return ge(e).toUpperCase()}function mI(e,t,i){if(e=ge(e),e&&(i||t===n))return ll(e);if(!e||!(t=In(t)))return e;var s=Vn(e),_=Vn(t),f=_l(s,_),T=ul(s,_)+1;return Yt(s,f,T).join("")}function lI(e,t,i){if(e=ge(e),e&&(i||t===n))return e.slice(0,fl(e)+1);if(!e||!(t=In(t)))return e;var s=Vn(e),_=ul(s,Vn(t))+1;return Yt(s,0,_).join("")}function _I(e,t,i){if(e=ge(e),e&&(i||t===n))return e.replace(Js,"");if(!e||!(t=In(t)))return e;var s=Vn(e),_=_l(s,Vn(t));return Yt(s,_).join("")}function uI(e,t){var i=Ze,s=sn;if(ke(t)){var _="separator"in t?t.separator:_;i="length"in t?ie(t.length):i,s="omission"in t?In(t.omission):s}e=ge(e);var f=e.length;if(qo(e)){var T=Vn(e);f=T.length}if(i>=f)return e;var S=i-Ko(s);if(S<1)return s;var v=T?Yt(T,0,S).join(""):e.slice(0,S);if(_===n)return v+s;if(T&&(S+=v.length-S),Qc(_)){if(e.slice(S).search(_)){var k,P=v;for(_.global||(_=gc(_.source,ge(Dm.exec(_))+"g")),_.lastIndex=0;k=_.exec(P);)var R=k.index;v=v.slice(0,R===n?S:R)}}else if(e.indexOf(In(_),S)!=S){var G=v.lastIndexOf(_);G>-1&&(v=v.slice(0,G))}return v+s}function gI(e){return e=ge(e),e&&I0.test(e)?e.replace(Em,zS):e}var fI=Qo(function(e,t,i){return e+(i?" ":"")+t.toUpperCase()}),tp=r_("toUpperCase");function tu(e,t,i){return e=ge(e),t=i?n:t,t===n?WS(e)?KS(e):PS(e):e.match(t)||[]}var ou=pe(function(e,t){try{return vn(e,n,t)}catch(i){return Jc(i)?i:new ne(i)}}),hI=St(function(e,t){return Rn(t,function(i){i=Qn(i),xt(e,i,Yc(e[i],e))}),e});function TI(e){var t=e==null?0:e.length,i=q();return e=t?Ie(e,function(s){if(typeof s[1]!="function")throw new Dn(l);return[i(s[0]),s[1]]}):[],pe(function(s){for(var _=-1;++_<t;){var f=e[_];if(vn(f[0],this,s))return vn(f[1],this,s)}})}function xI(e){return zb(On(e,y))}function op(e){return function(){return e}}function yI(e,t){return e==null||e!==e?t:e}var SI=i_(),bI=i_(!0);function hn(e){return e}function rp(e){return Ol(typeof e=="function"?e:On(e,y))}function wI(e){return Fl(On(e,y))}function vI(e,t){return Wl(e,On(t,y))}var AI=pe(function(e,t){return function(i){return Jr(i,e,t)}}),II=pe(function(e,t){return function(i){return Jr(e,i,t)}});function ap(e,t,i){var s=Ke(t),_=ci(t,s);i==null&&!(ke(t)&&(_.length||!s.length))&&(i=t,t=e,e=this,_=ci(t,Ke(t)));var f=!(ke(i)&&"chain"in i)||!!i.chain,T=wt(e);return Rn(_,function(S){var v=t[S];e[S]=v,T&&(e.prototype[S]=function(){var k=this.__chain__;if(f||k){var P=e(this.__wrapped__),R=P.__actions__=un(this.__actions__);return R.push({func:v,args:arguments,thisArg:e}),P.__chain__=k,P}return v.apply(e,$t([this.value()],arguments))})}),e}function CI(){return qe._===this&&(qe._=QS),this}function ip(){}function LI(e){return e=ie(e),pe(function(t){return Ul(t,e)})}var kI=Bc(Ie),PI=Bc(sl),EI=Bc(cc);function ru(e){return zc(e)?pc(Qn(e)):sw(e)}function NI(e){return function(t){return e==null?n:xo(e,t)}}var RI=c_(),DI=c_(!0);function sp(){return[]}function cp(){return!1}function MI(){return{}}function OI(){return""}function BI(){return!0}function FI(e,t){if(e=ie(e),e<1||e>Ae)return[];var i=_n,s=on(e,_n);t=q(t),e-=_n;for(var _=lc(s,t);++i<e;)t(i);return _}function WI(e){return re(e)?Ie(e,Qn):Cn(e)?[e]:un(v_(ge(e)))}function UI(e){var t=++ZS;return ge(e)+t}var GI=ui(function(e,t){return e+t},0),HI=Fc("ceil"),$I=ui(function(e,t){return e/t},1),zI=Fc("floor");function VI(e){return e&&e.length?si(e,hn,wc):n}function qI(e,t){return e&&e.length?si(e,q(t,2),wc):n}function KI(e){return dl(e,hn)}function jI(e,t){return dl(e,q(t,2))}function XI(e){return e&&e.length?si(e,hn,Cc):n}function YI(e,t){return e&&e.length?si(e,q(t,2),Cc):n}var ZI=ui(function(e,t){return e*t},1),JI=Fc("round"),QI=ui(function(e,t){return e-t},0);function eC(e){return e&&e.length?mc(e,hn):0}function nC(e,t){return e&&e.length?mc(e,q(t,2)):0}return u.after=w1,u.ary=M_,u.assign=dA,u.assignIn=X_,u.assignInWith=Ci,u.assignWith=mA,u.at=lA,u.before=O_,u.bind=Yc,u.bindAll=hI,u.bindKey=B_,u.castArray=M1,u.chain=N_,u.chunk=zw,u.compact=Vw,u.concat=qw,u.cond=TI,u.conforms=xI,u.constant=op,u.countBy=e1,u.create=_A,u.curry=F_,u.curryRight=W_,u.debounce=U_,u.defaults=uA,u.defaultsDeep=gA,u.defer=v1,u.delay=A1,u.difference=Kw,u.differenceBy=jw,u.differenceWith=Xw,u.drop=Yw,u.dropRight=Zw,u.dropRightWhile=Jw,u.dropWhile=Qw,u.fill=ev,u.filter=t1,u.flatMap=a1,u.flatMapDeep=i1,u.flatMapDepth=s1,u.flatten=L_,u.flattenDeep=nv,u.flattenDepth=tv,u.flip=I1,u.flow=SI,u.flowRight=bI,u.fromPairs=ov,u.functions=bA,u.functionsIn=wA,u.groupBy=c1,u.initial=av,u.intersection=iv,u.intersectionBy=sv,u.intersectionWith=cv,u.invert=AA,u.invertBy=IA,u.invokeMap=d1,u.iteratee=rp,u.keyBy=m1,u.keys=Ke,u.keysIn=fn,u.map=Si,u.mapKeys=LA,u.mapValues=kA,u.matches=wI,u.matchesProperty=vI,u.memoize=wi,u.merge=PA,u.mergeWith=Y_,u.method=AI,u.methodOf=II,u.mixin=ap,u.negate=vi,u.nthArg=LI,u.omit=EA,u.omitBy=NA,u.once=C1,u.orderBy=l1,u.over=kI,u.overArgs=L1,u.overEvery=PI,u.overSome=EI,u.partial=Zc,u.partialRight=G_,u.partition=_1,u.pick=RA,u.pickBy=Z_,u.property=ru,u.propertyOf=NI,u.pull=lv,u.pullAll=P_,u.pullAllBy=_v,u.pullAllWith=uv,u.pullAt=gv,u.range=RI,u.rangeRight=DI,u.rearg=k1,u.reject=f1,u.remove=fv,u.rest=P1,u.reverse=jc,u.sampleSize=T1,u.set=MA,u.setWith=OA,u.shuffle=x1,u.slice=hv,u.sortBy=b1,u.sortedUniq=vv,u.sortedUniqBy=Av,u.split=aI,u.spread=E1,u.tail=Iv,u.take=Cv,u.takeRight=Lv,u.takeRightWhile=kv,u.takeWhile=Pv,u.tap=Vv,u.throttle=N1,u.thru=yi,u.toArray=q_,u.toPairs=J_,u.toPairsIn=Q_,u.toPath=WI,u.toPlainObject=j_,u.transform=BA,u.unary=R1,u.union=Ev,u.unionBy=Nv,u.unionWith=Rv,u.uniq=Dv,u.uniqBy=Mv,u.uniqWith=Ov,u.unset=FA,u.unzip=Xc,u.unzipWith=E_,u.update=WA,u.updateWith=UA,u.values=tr,u.valuesIn=GA,u.without=Bv,u.words=tu,u.wrap=D1,u.xor=Fv,u.xorBy=Wv,u.xorWith=Uv,u.zip=Gv,u.zipObject=Hv,u.zipObjectDeep=$v,u.zipWith=zv,u.entries=J_,u.entriesIn=Q_,u.extend=X_,u.extendWith=Ci,ap(u,u),u.add=GI,u.attempt=ou,u.camelCase=VA,u.capitalize=eu,u.ceil=HI,u.clamp=HA,u.clone=O1,u.cloneDeep=F1,u.cloneDeepWith=W1,u.cloneWith=B1,u.conformsTo=U1,u.deburr=nu,u.defaultTo=yI,u.divide=$I,u.endsWith=qA,u.eq=Kn,u.escape=KA,u.escapeRegExp=jA,u.every=n1,u.find=o1,u.findIndex=I_,u.findKey=fA,u.findLast=r1,u.findLastIndex=C_,u.findLastKey=hA,u.floor=zI,u.forEach=R_,u.forEachRight=D_,u.forIn=TA,u.forInRight=xA,u.forOwn=yA,u.forOwnRight=SA,u.get=ep,u.gt=G1,u.gte=H1,u.has=vA,u.hasIn=np,u.head=k_,u.identity=hn,u.includes=p1,u.indexOf=rv,u.inRange=$A,u.invoke=CA,u.isArguments=bo,u.isArray=re,u.isArrayBuffer=$1,u.isArrayLike=gn,u.isArrayLikeObject=Be,u.isBoolean=z1,u.isBuffer=Zt,u.isDate=V1,u.isElement=q1,u.isEmpty=K1,u.isEqual=j1,u.isEqualWith=X1,u.isError=Jc,u.isFinite=Y1,u.isFunction=wt,u.isInteger=H_,u.isLength=Ai,u.isMap=$_,u.isMatch=Z1,u.isMatchWith=J1,u.isNaN=Q1,u.isNative=eA,u.isNil=tA,u.isNull=nA,u.isNumber=z_,u.isObject=ke,u.isObjectLike=Ee,u.isPlainObject=ra,u.isRegExp=Qc,u.isSafeInteger=oA,u.isSet=V_,u.isString=Ii,u.isSymbol=Cn,u.isTypedArray=nr,u.isUndefined=rA,u.isWeakMap=aA,u.isWeakSet=iA,u.join=pv,u.kebabCase=XA,u.last=Fn,u.lastIndexOf=dv,u.lowerCase=YA,u.lowerFirst=ZA,u.lt=sA,u.lte=cA,u.max=VI,u.maxBy=qI,u.mean=KI,u.meanBy=jI,u.min=XI,u.minBy=YI,u.stubArray=sp,u.stubFalse=cp,u.stubObject=MI,u.stubString=OI,u.stubTrue=BI,u.multiply=ZI,u.nth=mv,u.noConflict=CI,u.noop=ip,u.now=bi,u.pad=JA,u.padEnd=QA,u.padStart=eI,u.parseInt=nI,u.random=zA,u.reduce=u1,u.reduceRight=g1,u.repeat=tI,u.replace=oI,u.result=DA,u.round=JI,u.runInContext=w,u.sample=h1,u.size=y1,u.snakeCase=rI,u.some=S1,u.sortedIndex=Tv,u.sortedIndexBy=xv,u.sortedIndexOf=yv,u.sortedLastIndex=Sv,u.sortedLastIndexBy=bv,u.sortedLastIndexOf=wv,u.startCase=iI,u.startsWith=sI,u.subtract=QI,u.sum=eC,u.sumBy=nC,u.template=cI,u.times=FI,u.toFinite=vt,u.toInteger=ie,u.toLength=K_,u.toLower=pI,u.toNumber=Wn,u.toSafeInteger=pA,u.toString=ge,u.toUpper=dI,u.trim=mI,u.trimEnd=lI,u.trimStart=_I,u.truncate=uI,u.unescape=gI,u.uniqueId=UI,u.upperCase=fI,u.upperFirst=tp,u.each=R_,u.eachRight=D_,u.first=k_,ap(u,function(){var e={};return Zn(u,function(t,i){he.call(u.prototype,i)||(e[i]=t)}),e}(),{chain:!1}),u.VERSION=o,Rn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){u[e].placeholder=u}),Rn(["drop","take"],function(e,t){me.prototype[e]=function(i){i=i===n?1:ze(ie(i),0);var s=this.__filtered__&&!t?new me(this):this.clone();return s.__filtered__?s.__takeCount__=on(i,s.__takeCount__):s.__views__.push({size:on(i,_n),type:e+(s.__dir__<0?"Right":"")}),s},me.prototype[e+"Right"]=function(i){return this.reverse()[e](i).reverse()}}),Rn(["filter","map","takeWhile"],function(e,t){var i=t+1,s=i==gt||i==Uo;me.prototype[e]=function(_){var f=this.clone();return f.__iteratees__.push({iteratee:q(_,3),type:i}),f.__filtered__=f.__filtered__||s,f}}),Rn(["head","last"],function(e,t){var i="take"+(t?"Right":"");me.prototype[e]=function(){return this[i](1).value()[0]}}),Rn(["initial","tail"],function(e,t){var i="drop"+(t?"":"Right");me.prototype[e]=function(){return this.__filtered__?new me(this):this[i](1)}}),me.prototype.compact=function(){return this.filter(hn)},me.prototype.find=function(e){return this.filter(e).head()},me.prototype.findLast=function(e){return this.reverse().find(e)},me.prototype.invokeMap=pe(function(e,t){return typeof e=="function"?new me(this):this.map(function(i){return Jr(i,e,t)})}),me.prototype.reject=function(e){return this.filter(vi(q(e)))},me.prototype.slice=function(e,t){e=ie(e);var i=this;return i.__filtered__&&(e>0||t<0)?new me(i):(e<0?i=i.takeRight(-e):e&&(i=i.drop(e)),t!==n&&(t=ie(t),i=t<0?i.dropRight(-t):i.take(t-e)),i)},me.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},me.prototype.toArray=function(){return this.take(_n)},Zn(me.prototype,function(e,t){var i=/^(?:filter|find|map|reject)|While$/.test(t),s=/^(?:head|last)$/.test(t),_=u[s?"take"+(t=="last"?"Right":""):t],f=s||/^find/.test(t);!_||(u.prototype[t]=function(){var T=this.__wrapped__,S=s?[1]:arguments,v=T instanceof me,k=S[0],P=v||re(T),R=function(de){var _e=_.apply(u,$t([de],S));return s&&G?_e[0]:_e};P&&i&&typeof k=="function"&&k.length!=1&&(v=P=!1);var G=this.__chain__,V=!!this.__actions__.length,j=f&&!G,ce=v&&!V;if(!f&&P){T=ce?T:new me(this);var X=e.apply(T,S);return X.__actions__.push({func:yi,args:[R],thisArg:n}),new Mn(X,G)}return j&&ce?e.apply(this,S):(X=this.thru(R),j?s?X.value()[0]:X.value():X)})}),Rn(["pop","push","shift","sort","splice","unshift"],function(e){var t=qa[e],i=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",s=/^(?:pop|shift)$/.test(e);u.prototype[e]=function(){var _=arguments;if(s&&!this.__chain__){var f=this.value();return t.apply(re(f)?f:[],_)}return this[i](function(T){return t.apply(re(T)?T:[],_)})}}),Zn(me.prototype,function(e,t){var i=u[t];if(i){var s=i.name+"";he.call(Yo,s)||(Yo[s]=[]),Yo[s].push({name:t,func:i})}}),Yo[_i(n,O).name]=[{name:"wrapper",func:n}],me.prototype.clone=gb,me.prototype.reverse=fb,me.prototype.value=hb,u.prototype.at=qv,u.prototype.chain=Kv,u.prototype.commit=jv,u.prototype.next=Xv,u.prototype.plant=Zv,u.prototype.reverse=Jv,u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=Qv,u.prototype.first=u.prototype.head,Vr&&(u.prototype[Vr]=Yv),u},Vt=jS();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(qe._=Vt,define(function(){return Vt})):uo?((uo.exports=Vt)._=Vt,rc._=Vt):qe._=Vt}).call(Mr)});var hm={};Pe(hm,{css:()=>t0,default:()=>yD});var t0,yD,Tm=F(()=>{"use strict";r();t0=`.dapp-core-component__confirmAddressStyles__ledger-confirm-address {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(t0));yD={"ledger-confirm-address":"dapp-core-component__confirmAddressStyles__ledger-confirm-address",ledgerConfirmAddress:"dapp-core-component__confirmAddressStyles__ledger-confirm-address","ledger-confirm-address-heading":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading",ledgerConfirmAddressHeading:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading","ledger-confirm-address-section":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section",ledgerConfirmAddressSection:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section","ledger-confirm-address-description":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description",ledgerConfirmAddressDescription:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description","ledger-confirm-address-data":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data",ledgerConfirmAddressData:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data","ledger-confirm-address-footer":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer",ledgerConfirmAddressFooter:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer"}});var xm={};Pe(xm,{css:()=>a0,default:()=>wD});var a0,wD,ym=F(()=>{"use strict";r();a0=`.dapp-core-component__ledgerConnectStyles__login-connect-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(a0));wD={"login-connect-container":"dapp-core-component__ledgerConnectStyles__login-connect-container",loginConnectContainer:"dapp-core-component__ledgerConnectStyles__login-connect-container","login-connect-container-content":"dapp-core-component__ledgerConnectStyles__login-connect-container-content",loginConnectContainerContent:"dapp-core-component__ledgerConnectStyles__login-connect-container-content","login-connect-container-heading":"dapp-core-component__ledgerConnectStyles__login-connect-container-heading",loginConnectContainerHeading:"dapp-core-component__ledgerConnectStyles__login-connect-container-heading","login-connect-container-description":"dapp-core-component__ledgerConnectStyles__login-connect-container-description",loginConnectContainerDescription:"dapp-core-component__ledgerConnectStyles__login-connect-container-description","login-connect-container-error":"dapp-core-component__ledgerConnectStyles__login-connect-container-error",loginConnectContainerError:"dapp-core-component__ledgerConnectStyles__login-connect-container-error","login-connect-container-icon":"dapp-core-component__ledgerConnectStyles__login-connect-container-icon",loginConnectContainerIcon:"dapp-core-component__ledgerConnectStyles__login-connect-container-icon","login-connect-container-footer":"dapp-core-component__ledgerConnectStyles__login-connect-container-footer",loginConnectContainerFooter:"dapp-core-component__ledgerConnectStyles__login-connect-container-footer","login-connect-container-button":"dapp-core-component__ledgerConnectStyles__login-connect-container-button",loginConnectContainerButton:"dapp-core-component__ledgerConnectStyles__login-connect-container-button","login-connect-container-link":"dapp-core-component__ledgerConnectStyles__login-connect-container-link",loginConnectContainerLink:"dapp-core-component__ledgerConnectStyles__login-connect-container-link"}});var Sm={};Pe(Sm,{css:()=>c0,default:()=>AD});var c0,AD,bm=F(()=>{"use strict";r();c0=`.dapp-core-component__progressBarStyles__ledger-progress-bar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(c0));AD={"ledger-progress-bar":"dapp-core-component__progressBarStyles__ledger-progress-bar",ledgerProgressBar:"dapp-core-component__progressBarStyles__ledger-progress-bar","ledger-progress-bar-track":"dapp-core-component__progressBarStyles__ledger-progress-bar-track",ledgerProgressBarTrack:"dapp-core-component__progressBarStyles__ledger-progress-bar-track","ledger-progress-bar-thumb":"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb",ledgerProgressBarThumb:"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb"}});var vm={};Pe(vm,{css:()=>d0,default:()=>CD});var d0,CD,Am=F(()=>{"use strict";r();d0=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(d0));CD={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var Lm={};Pe(Lm,{css:()=>f0,default:()=>kD});var f0,kD,km=F(()=>{"use strict";r();f0=`.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(f0));kD={"ledger-login-container":"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container",ledgerLoginContainer:"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container","ledger-modal-dialog-content":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content",ledgerModalDialogContent:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content","ledger-modal-header":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header",ledgerModalHeader:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header","ledger-modal-header-text":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text",ledgerModalHeaderText:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text","ledger-modal-close-button":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button",ledgerModalCloseButton:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button","ledger-modal-body":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body",ledgerModalBody:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body"}});var ND={};Pe(ND,{LedgerLoginButton:()=>ED});module.exports=Ce(ND);r();r();var Oa=M(require("react"));te();r();r();r();var yf=require("react"),xr=require("react-redux");r();var od=require("@reduxjs/toolkit"),Tf=require("react-redux/lib/utils/Subscription");ye();r();var Jg=M(require("lodash.throttle"));te();ye();Gp();lr();mr();var BL=[Oi],ss=!1,FL=(0,Jg.default)(()=>{ca(sa())},5e3),Qg=n=>o=>a=>{if(BL.includes(a.type))return o(a);let c=n.getState(),l=Lo.local.getItem(eo.loginExpiresAt);if(!Boolean(c==null?void 0:c.account.address))return o(a);if(l==null)return ca(sa());let h=Date.now();return l-h<0&&!ss?setTimeout(()=>{ss=!0,n.dispatch(fg())},1e3):(ss&&(ss=!1),FL()),o(a)};r();r();function cs(){return typeof sessionStorage!="undefined"}var gf=cs()?(af(),Ce(rf)).default:(cf(),Ce(sf)).default,ff=cs()?(df(),Ce(pf)).default:[],hf=cs()?(uf(),Ce(_f)).default:n=>n;ps();var se=(0,od.configureStore)({reducer:gf,middleware:n=>n({serializableCheck:{ignoredActions:[...ff,Wp.type,Ui.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Qg)}),xf=(0,Tf.createSubscription)(se),BO=hf(se),FO=(0,od.configureStore)({reducer:Po});var sk={store:se,subscription:xf},rd=(0,yf.createContext)(sk),HO=(0,xr.createStoreHook)(rd),Xe=(0,xr.createDispatchHook)(rd),ee=(0,xr.createSelectorHook)(rd);r();r();ye();r();var Sf=M(require("lodash.isequal")),ds=require("reselect"),z=(0,ds.createSelectorCreator)(ds.defaultMemoize,Sf.default);var ct=n=>n.account,Eo=z(ct,n=>n.address),to=z(ct,Eo,(n,o)=>o in n.accounts?n.accounts[o]:Wi),bf=z(ct,to,(n,o)=>{let l=n,{accounts:a}=l,c=wo(l,["accounts"]);return Z(E({},c),{address:o.address,account:o})}),KO=z(to,n=>n.balance),ck=z(to,n=>{var o;return((o=n==null?void 0:n.nonce)==null?void 0:o.valueOf())||0}),jO=z(ct,n=>n.shard),wf=z(ct,n=>n.ledgerAccount),XO=z(ct,n=>n.walletConnectAccount),YO=z(ct,n=>n.isAccountLoading),ZO=z(ct,n=>n.accountLoadingError),pk=z(ct,n=>n.websocketEvent),dk=z(ct,n=>n.websocketBatchEvent);r();var vf=n=>n.dappConfig,eB=z(vf,n=>n.shouldUseWebViewProvider);r();var Sn=n=>n.loginInfo,mk=z(Sn,n=>n.loginMethod),yr=z(Sn,Eo,(n,o)=>Boolean(o)),rB=z(Sn,n=>n.walletConnectLogin),lk=z(Sn,n=>n.ledgerLogin),_k=z(Sn,n=>n.walletLogin),aB=z(Sn,n=>n.isLoginSessionInvalid),oo=z(Sn,n=>n.tokenLogin),Af=z(Sn,n=>n.logoutRoute),uk=z(Sn,n=>n.isWalletConnectV2Initialized);r();var If=n=>n.modals,cB=z(If,n=>n.txSubmittedModal),gk=z(If,n=>n.notificationModal);r();var pt=n=>n.networkConfig,ms=z(pt,n=>n.network.chainId),fk=z(pt,n=>n.network.roundDuration),mB=z(pt,n=>n.network.walletConnectBridgeAddress),hk=z(pt,n=>n.network.walletConnectV2RelayAddress),Tk=z(pt,n=>n.network.walletConnectV2ProjectId),xk=z(pt,n=>n.network.walletConnectV2Options),yk=z(pt,n=>n.network.walletConnectDeepLink),bn=z(pt,n=>n.network),ad=z(bn,n=>n.apiAddress),Cf=z(bn,n=>n.explorerAddress),Lf=z(bn,n=>{var o;return(o=n.customWalletAddress)!=null?o:n.walletAddress}),Sk=z(bn,n=>n.xAliasAddress),id=z(bn,n=>n.egldLabel);r();var ls=n=>n.signedMessageInfo,uB=z(ls,n=>n.isSigning),gB=z(ls,n=>n.errorMessage),fB=z(ls,n=>{let o=Object.keys(n.signedSessions),a=o.length;return n.signedSessions[o[a-1]]}),hB=z(ls,n=>{let o=Object.keys(n.signedSessions),a=o.length;return o.length>0?o[a-1]:""});r();var kf=n=>n.toasts,bk=z(kf,n=>n.customToasts),Pf=z(kf,n=>n.transactionToasts);r();ye();var Ef={errorMessage:Kp,successMessage:jp,processingMessage:Xp},Nf=n=>n.transactionsInfo,wk=z(Nf,(n,o)=>o,(n,o)=>o!=null&&(n==null?void 0:n[Number(o)])||Ef);r();r();var dt=require("@multiversx/sdk-core");te();r();var sd=require("@multiversx/sdk-core/out");r();r();function _s(n){try{let o=atob(n),a=btoa(o),c=d.Buffer.from(n,"base64").toString(),l=d.Buffer.from(c).toString("base64"),g=n===a||a.startsWith(n),h=n===l||l.startsWith(n);if(g&&h)return!0}catch(o){return!1}return!1}function No(n){return _s(n)?atob(n):n}r();r();r();r();var Rf=n=>{let o=n!=null?n:"";return _s(o)?sd.TransactionPayload.fromEncoded(o):new sd.TransactionPayload(o)};r();te();var ua=({data:n,onlySetGuardian:o})=>n?o?n.startsWith("SetGuardian"):Object.values(Sp).some(a=>n.startsWith(a)):!1;function us(n){var c,l,g;let o=E({},n);ua({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let a=new dt.Transaction(E(E(Z(E(Z(E({value:o.value.valueOf(),data:Rf(o.data),nonce:o.nonce.valueOf(),receiver:new dt.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new dt.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(c=o.gasLimit.valueOf())!=null?c:Di,gasPrice:(l=o.gasPrice.valueOf())!=null?l:Mi,chainID:o.chainID.valueOf(),version:new dt.TransactionVersion((g=o.version)!=null?g:Ju)}),o.options?{options:new dt.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new dt.Address(o.guardian)}:{}));return o.guardianSignature&&a.applyGuardianSignature(d.Buffer.from(o.guardianSignature,"hex")),o.signature&&a.applySignature(d.Buffer.from(o.signature,"hex")),a}r();r();te();r();r();r();var Ck=require("@multiversx/sdk-core/out");r();te();r();var Df=require("@multiversx/sdk-core");Ue();r();var Lk=require("@multiversx/sdk-core");r();r();r();var kk=require("@multiversx/sdk-core"),Pk=M(require("bignumber.js"));Le();r();r();r();var ga="accounts";var pd="blocks";r();r();r();r();xn();r();r();xn();r();r();r();var Mk=M(require("bignumber.js"));te();r();var Wf=require("@multiversx/sdk-core"),ro=M(require("bignumber.js"));te();r();var Ff=M(require("bignumber.js")),mt=(n,o=!0)=>{let a=String(n);if(!a.match(/^[-]?\d+$/))return!1;let c=new Ff.default(a),l=o?0:-1;return c.toString(10)===a&&c.comparedTo(0)>=l};r();function Nt(n){return{if:function(o){return o?{then:a=>a instanceof Function?Nt(a(n)):Nt(a)}:{then:()=>Nt(n)}},then:o=>o instanceof Function?Nt(o(n)):Nt(o),valueOf:function(){return n}}}ro.default.config({ROUNDING_MODE:ro.default.ROUND_FLOOR});function ao({input:n,decimals:o=Pn,digits:a=Co,showLastNonZeroDecimal:c=!0,showIsLessThanDecimalsLabel:l=!1,addCommas:g=!1}){if(!mt(n,!1))throw new Error("Invalid input");let h=new ro.default(n).isNegative(),b=n;return h&&(b=n.substring(1)),Nt(b).then(()=>Wf.TokenTransfer.fungibleFromBigInteger("",b,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(x=>{let y=new ro.default(x);if(y.isZero())return st;let N=y.toString(10),[C,D]=N.split("."),H=new ro.default(D||0),U=Nt(0).if(Boolean(D&&c)).then(()=>Math.max(D.length,a)).if(H.isZero()&&!c).then(0).if(Boolean(D&&!c)).then(()=>Math.min(D.length,a)).valueOf(),O=D&&a>=1&&a<=D.length&&H.isGreaterThan(0)&&new ro.default(D.substring(0,a)).isZero(),K=y.toFormat(U);return Nt(N).if(g).then(K).if(Boolean(O)).then(ae=>{let oe=new ro.default(C).isZero(),[Y,Q]=ae.split("."),ve=new Array(a-1).fill(0),an=[...ve,0].join(""),Ze=[...ve,1].join("");return oe?l?`<${Y}.${Ze}`:c?`${Y}.${Q}`:Y:`${Y}.${an}`}).if(Boolean(!O&&D)).then(ae=>{let[oe]=ae.split("."),Y=D.substring(0,U);if(c){let Q=a-Y.length;if(Q>0){let ve=Array(Q).fill(0).join("");return Y=`${Y}${ve}`,`${oe}.${Y}`}return ae}return Y?`${oe}.${Y}`:oe}).valueOf()}).if(h).then(x=>`-${x}`).valueOf()}r();r();r();te();r();r();r();r();te();r();te();r();var Ok=require("@multiversx/sdk-core");te();r();var fa=require("@multiversx/sdk-core"),Wk=M(require("bignumber.js"));te();r();r();var Bk=M(require("bignumber.js"));te();r();te();r();r();r();r();r();r();te();function Uk(n,o){let a,c,l=/(\.0+)+$/,g=n.replace(l,"").split("."),h=o.replace(l,"").split("."),b=Math.min(g.length,h.length);for(a=0;a<b;a++)if(c=parseInt(g[a],10)-parseInt(h[a],10),c)return c;return g.length-h.length}function Gk(n){let o=[bp,wp,vp,Ap,Ip,Cp,n].sort((y,N)=>Uk(y,N)),a=o.indexOf(bp),c=o.indexOf(wp),l=o.indexOf(vp),g=o.indexOf(Ap),h=o.indexOf(Ip),b=o.indexOf(Cp),x=o.indexOf(n);return{ledgerWithMultiAccount:x>=a,ledgerWithHashSign:x>=c,ledgerWithSignAuthToken:x>=l,ledgerWithWhitelistedTokens:x>=g,ledgerWithGuardians:x>=h,ledgerWithUsernames:x>=b}}var Uf=Gk;r();te();r();te();r();xn();var $k=["reDelegateRewards","claimRewards","unBond"],zk=["wrapEgld","unwrapEgld"],Vk=["unStake"],qk=["unDelegate"];r();r();r();te();r();var Yk=M(require("bignumber.js"));r();r();xn();r();var Jk=M(require("bignumber.js"));r();r();r();r();var nP=M(require("bignumber.js"));Ue();r();r();r();r();Le();r();var aP=require("@multiversx/sdk-web-wallet-provider");te();r();var oP=M(require("qs"));r();en();_r();r();_r();var VU={search:ko()?window.location.search:"",removeParams:[]};r();r();r();Qe();r();xn();r();r();Qe();r();var iP=M(require("linkifyjs"));r();te();r();var sP=M(require("bignumber.js"));r();Ue();r();r();Le();r();Le();r();r();r();xn();r();xn();r();var cP=M(require("bignumber.js"));te();xn();r();xn();r();var $f=require("react");Ue();r();r();xn();r();r();var pP=require("@multiversx/sdk-core/out"),dP=M(require("bignumber.js"));xn();r();Ue();r();r();Ue();var O8=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];r();var zf=require("react");Ue();Qe();r();var lP=require("react");xn();var z8=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Tr();r();var hs=n=>n.transactions,Sr=z(hs,n=>n.signedTransactions),_P=z(hs,n=>n.signTransactionsError),Vf=z(hs,n=>n.signTransactionsCancelMessage),Ts=n=>o=>Object.entries(o).reduce((a,[c,l])=>(n(l.status)&&(a[c]=l),a),{}),qf=z(Sr,Ts(gr)),Kf=z(Sr,Ts(fr)),jf=z(Sr,Ts(hr)),uP=z(Sr,Ts(Zp)),Xf=z(hs,n=>{var o;return(n==null?void 0:n.transactionsToSign)==null?null:Z(E({},n.transactionsToSign),{transactions:((o=n==null?void 0:n.transactionsToSign)==null?void 0:o.transactions.map(a=>us(a)))||[]})}),gP=z(Sr,(n,o)=>o,(n,o)=>o!=null?(n==null?void 0:n[o])||{}:{});r();var Yf=require("react");r();ye();r();r();r();r();r();r();r();r();var hP=require("@multiversx/sdk-extension-provider"),TP=require("@multiversx/sdk-hw-provider"),xP=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),yP=require("@multiversx/sdk-opera-provider"),SP=require("@multiversx/sdk-passkey-provider/out"),bP=require("@multiversx/sdk-web-wallet-provider");te();Qt();r();var Ro=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Zf=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");Le();r();var ld=n=>B(void 0,null,function*(){if(!n.isInitialized())throw new Error("Unable to get version. Provider not initialized");let o=n.hwApp,{contractData:a,version:c}=yield o.getAppConfiguration();return{version:c,dataEnabled:a===Qu}}),Yn=n=>`Unable to perform ${n}, Provider not initialized`,xs=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Yn("getAccount"))}setAccount(o){throw new Error(Yn(`setAccount: ${o}`))}login(o){throw new Error(Yn(`login with options: ${o}`))}logout(o){throw new Error(Yn(`logout with options: ${o}`))}getAddress(){throw new Error(Yn("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,a){throw new Error(Yn(`sendTransaction with transactions: ${o} options: ${a}`))}signTransaction(o,a){throw new Error(Yn(`signTransaction with transactions: ${o} options: ${a}`))}signTransactions(o,a){throw new Error(Yn(`signTransactions with transactions: ${o} options: ${a}`))}signMessage(o,a){throw new Error(Yn(`signTransactions with ${o} and options ${a}`))}sendCustomMessage({method:o,params:a}){throw new Error(Yn(`sendCustomMessage with method: ${o} params: ${a}`))}sendCustomRequest(o){throw new Error(Yn(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},ys=new xs;var Jf=ys;function Rt(n){Jf=n}function lt(){return Jf||ys}ye();r();r();r();r();r();var Qf=require("@lifeomic/axios-fetch"),_d=M(require("axios")),ud=(0,Qf.buildAxiosFetch)(_d.default),gd=(n,o)=>B(void 0,null,function*(){if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);let c=n.clone().json(),[l]=yield Promise.all([c]);return{data:l,status:n.status,statusText:n.statusText,headers:n.headers,config:o}});function wP(n,o,a){return B(this,null,function*(){try{let c=yield ud(n,E({method:"POST",body:o?JSON.stringify(o):void 0,headers:E({"Content-Type":"application/json"},(a==null?void 0:a.headers)||{})},a));return gd(c,a)}catch(c){throw console.error("Fetch Error:",c),c}})}function vP(n,o){return B(this,null,function*(){try{let a=yield ud(n,o);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return gd(a,o)}catch(a){throw console.error("Fetch Error:",a),a}})}function AP(n,o,a){return B(this,null,function*(){try{let c=yield ud(n,E({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(a==null?void 0:a.headers)||{}},a));if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);return gd(c,a)}catch(c){throw console.error("Fetch Error:",c),c}})}var Do=_d.default.create();Do.get=vP;Do.post=wP;Do.patch=AP;r();var Ta=n=>{let o=n!=null?n:ad(se.getState());return o.endsWith("/")?o.slice(0,-1):o};r();var IP=M(require("axios"));r();var CP=M(require("swr"));var LP=n=>{let a=`${Ta()}/${ga}/${n}?withGuardianInfo=true`;return Do.get(a)},eh=n=>B(void 0,null,function*(){if(!n)return null;try{let{data:o}=yield LP(n);return o}catch(o){console.error("error fetching configuration for ",n,o)}return null});var br=n=>eh(n);r();Le();r();r();r();Qe();r();Tr();r();r();r();var kP=M(require("axios"));r();var EP=M(require("axios"));cr();r();te();r();var NP=M(require("axios"));r();var DP=M(require("axios"));r();r();var MP=M(require("axios"));r();var OP=M(require("axios"));r();r();ye();Le();r();r();function rh(n){return B(this,null,function*(){let o=n;o==null&&(o=to(se.getState()).address);let a=yield br(o);if(a==null)throw"Could not read account, user not logged in";return a==null?void 0:a.balance})}r();r();Qe();r();Re();Ue();r();ye();r();var ah=require("@multiversx/sdk-core");Ue();en();r();Tr();r();ye();Le();r();ye();Ue();r();r();r();Ue();r();Ri();r();r();r();r();var UP=M(require("swr"));r();r();r();r();var ih=require("react");r();r();var GP=require("react"),HP=require("@multiversx/sdk-web-wallet-provider"),$P=require("@multiversx/sdk-web-wallet-provider"),zP=M(require("qs"));te();ye();Le();Pp();Qe();var CV=De();r();var Mh=require("react"),bd=require("@multiversx/sdk-core");r();te();$p();r();r();r();r();r();r();r();r();r();r();cr();r();var jP=M(require("axios"));r();var YP=M(require("axios"));r();cr();r();cr();r();r();r();r();var JP=require("@multiversx/sdk-opera-provider");r();var QP=require("@multiversx/sdk-extension-provider");r();Qt();r();r();r();r();var Lh=M(Ch());var Dt=n=>{if(!n||!(0,Lh.default)(n))return null;let o=n.split(".");if(o.length!==4)return null;try{let[a,c,l,g]=o,h=JSON.parse(No(g)),b=No(a);return{ttl:Number(l),extraInfo:h,origin:b,blockHash:c}}catch(a){return console.error(`Error trying to decode ${n}:`,a),null}};r();var Dh=require("@multiversx/sdk-native-auth-client");r();var Eh=M(require("axios"));r();r();r();function kh(n){return B(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),n)})})}r();var Ph=(n,o,a,c=0)=>B(void 0,null,function*(){try{return yield n(...a)}catch(l){return c<o.retries?((o==null?void 0:o.delay)!=null&&(yield kh(o.delay)),yield Ph(n,o,a,c+1)):null}}),xd=(n,o={retries:5,delay:500})=>(...a)=>B(void 0,null,function*(){return yield Ph(n,o,a)});var vE=4,AE=3e4,vs={current:null},Mo={current:null},IE=xd((n,o,a)=>B(void 0,null,function*(){if(a){let g=Math.floor(Date.now()/1e3);return{hash:yield a(),timestamp:g}}let{data:c}=yield Eh.default.get(`${n}/${pd}?from=${vE}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[l]=c;return l}));function Nh(n,o,a,c){return B(this,null,function*(){if(n==null)throw new Error("missing api url");let l=Date.now();if(vs.current!=null&&l<vs.current.timestamp*1e3+AE&&!c)return vs.current;if(Mo.current!=null)return yield Mo.current;Mo.current=IE(n,o,a);try{let g=yield Mo.current;if(g==null)throw Mo.current=null,new Error("could not get block hash");return vs.current={hash:g.hash,timestamp:g.timestamp},Mo.current=null,g}catch(g){return Mo.current=null,null}})}r();r();Bi();r();function CE(n){return Object.prototype.toString.call(n)==="[object String]"}var yd=n=>{var a;if(!n||!CE(n))return null;let o=n.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[c,l,g]=o,h=No(c),b=No(l),x=Dt(b);if(!x)return{address:h,body:b,signature:g,blockHash:"",origin:"",ttl:0};let y=Z(E({},x),{address:h,body:b,signature:g});return(a=x.extraInfo)!=null&&a.timestamp||delete y.extraInfo,y}catch(c){return null}};var Sd={isExpired:!1},Rh=n=>{if(!n)return Sd;let o=yd(n);if(!o)return Sd;let a=dr(),{ttl:c,extraInfo:l}=o,g=l==null?void 0:l.timestamp;if(!g)return Sd;let h=g+c,b=a>h,x=h-a;return{isExpired:b,expiresAt:h,secondsUntilExpires:x}};r();Qe();var ba={origin:De().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},wa=n=>{var a,c,l,g,h,b;return n===!0?ba:{origin:(a=n==null?void 0:n.origin)!=null?a:ba.origin,blockHashShard:n==null?void 0:n.blockHashShard,expirySeconds:(c=n==null?void 0:n.expirySeconds)!=null?c:ba.expirySeconds,apiAddress:(l=n==null?void 0:n.apiAddress)!=null?l:ba.apiAddress,tokenExpirationToastWarningSeconds:(g=n==null?void 0:n.tokenExpirationToastWarningSeconds)!=null?g:ba.tokenExpirationToastWarningSeconds,extraInfo:(h=n==null?void 0:n.extraInfo)!=null?h:{},gatewayUrl:n==null?void 0:n.gatewayUrl,extraRequestHeaders:(b=n==null?void 0:n.extraRequestHeaders)!=null?b:{}}};var As=n=>{let{origin:o,apiAddress:a,expirySeconds:c,blockHashShard:l,extraInfo:g,gatewayUrl:h,extraRequestHeaders:b}=wa(n),x=new Dh.NativeAuthClient({origin:o,apiUrl:a,expirySeconds:c,blockHashShard:l,gatewayUrl:h,extraRequestHeaders:b});return{getNativeAuthConfig:wa,initialize:C=>B(void 0,null,function*(){var H,U;if(!a||!o)return"";let D=()=>x.getCurrentBlockHash();try{let O=(H=C==null?void 0:C.latestBlockInfo)!=null?H:yield Nh(a,l,D,C==null?void 0:C.noCache);if(!O)return"";let{hash:K,timestamp:J}=O,ae=x.encodeValue(JSON.stringify(E(E({},(U=C==null?void 0:C.extraInfo)!=null?U:g),J?{timestamp:J}:{})));return`${x.encodeValue(o)}.${K}.${c}.${ae}`}catch(O){return console.error("Error getting native auth token: ",O.toString()),""}}),getToken:({address:C,token:D,signature:H})=>x.getToken(C,D,H),getTokenExpiration:Rh}};r();var LE=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();var kE=require("@multiversx/sdk-passkey-provider/out");te();Qe();r();r();r();var DE=require("react"),ME=require("@multiversx/sdk-hw-provider");r();Re();Ue();r();da();lr();mr();en();r();r();var wx=require("react"),vx=require("@multiversx/sdk-core"),bR=require("@multiversx/sdk-extension-provider"),wR=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),vR=require("@multiversx/sdk-passkey-provider/out"),AR=M(Tx());te();r();r();var Cr=()=>ee(to);r();var Ca=()=>ee(bf);r();r();r();r();r();r();r();var Lr=M(require("react"));var rR=(0,Lr.createContext)({}),UX=se.getState();function ks(){let n=(0,Lr.useContext)(rR);if(n===void 0||Object.values(n).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return n}r();var xx=M(require("react"));r();var Ld=M(require("react")),aR=M(require("axios"));var yx=()=>{try{let{loginInfo:n,isLoggedIn:o}=ks();return Z(E({},n),{isLoggedIn:o})}catch(n){let o=ee(Sn),a=ee(yr);return Z(E({},o),{isLoggedIn:a})}};var Sx=()=>{let{isLoggedIn:n}=yx();return n};r();r();Qt();r();r();var mR=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),lR=require("@multiversx/sdk-webview-provider/out/WebviewProvider");Re();r();Re();ye();Ue();r();r();ye();r();en();r();ye();Ue();r();r();var sR=require("@multiversx/sdk-core"),cR=M(require("bignumber.js"));te();r();var pR=M(require("bignumber.js"));te();ye();Le();en();Qe();r();var bx=require("react"),fR=require("@multiversx/sdk-extension-provider"),hR=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),TR=require("@multiversx/sdk-passkey-provider/out");Qt();ye();r();ye();Ue();da();Qe();r();at();ye();r();r();var CR=require("react");r();r();Le();Tr();r();var Ps=require("react"),Ax=(n,o)=>{let[a,c]=(0,Ps.useState)(n);return(0,Ps.useEffect)(()=>{let g=setTimeout(()=>c(n),o);return()=>clearTimeout(g)},[n]),a};r();r();var kR=require("react"),PR=require("@multiversx/sdk-extension-provider");at();Re();Le();r();function Mt(){return yr(se.getState())}Pt();en();en();r();r();Qt();Ue();var io=n=>(Object.values(Ge).forEach(o=>{if(o!==(n==null?void 0:n.skipLoginMethod))switch(o){case"crossWindow":{let a=Jt.CrossWindowProvider.getInstance();a.isInitialized()&&a.dispose();break}case"iframe":{let a=Ro.IframeProvider.getInstance();a.isInitialized()&&a.dispose();break}default:break}}),null);r();var Ix=require("react"),Es=require("@multiversx/sdk-core");ye();var LR=(n,o)=>{var a;return o?o===!0?n:(a=o.apiAddress)!=null?a:n:null},Ot=n=>{let o=ee(bn),a=ee(oo),c=(0,Ix.useRef)(a==null?void 0:a.loginToken),l=LR(o.apiAddress,n),g=wa(E(E({},n===!0?{}:n),l?{apiAddress:l}:{})),h=Boolean(n),b=As(g),{address:x}=Cr(),y=Xe(),N=U=>{c.current=U,y(pa(E(Z(E({},a),{loginToken:U}),l?{nativeAuthConfig:g}:{})))},C=()=>{try{return b.initialize()}catch(U){console.error("Unable to get block. Login failed.",U);return}},D=({address:U,signature:O})=>{let K=c.current;if(!K)throw"Token not found. Call `setLoginToken` first.";if(!h){y(pa({loginToken:K,signature:O}));return}let J=b.getToken({address:U,token:K,signature:O});return y(pa(E({loginToken:K,signature:O,nativeAuthToken:J},l?{nativeAuthConfig:g}:{}))),J};return{configuration:g,setLoginToken:N,getNativeAuthLoginToken:C,setTokenLoginInfo:D,refreshNativeAuthTokenLogin:K=>B(void 0,[K],function*({signMessageCallback:U,nativeAuthClientConfig:O}){let ae=yield As(O||g).initialize({noCache:Boolean(O)});if(c.current=ae,!ae)return;let oe=new Es.Message({address:new Es.Address(x),data:d.Buffer.from(`${x}${ae}`)}),Y=yield U(oe,{});if(!(Y!=null&&Y.signature))throw"Message not signed";return D({address:x,signature:d.Buffer.from(Y.signature).toString("hex")})})}};r();var ER=require("react"),NR=require("@multiversx/sdk-opera-provider");at();Re();Le();Pt();en();Qe();r();var RR=require("react");Np();at();Qt();Re();ye();Le();Pt();Qe();r();var FR=require("react");at();ye();r();r();Rp();r();r();var DR=M(require("platform"));_r();r();r();r();r();r();function Ns(){return id(se.getState())}r();r();ia();Le();r();r();var MR=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();r();da();lr();r();r();r();ye();r();r();var OR=M(require("axios"));en();r();r();var BR=M(wr());ia();var Cx,Lx,kx,Lne=(kx=(Lx=(Cx=Xn.safeWindow)==null?void 0:Cx.location)==null?void 0:Lx.origin)==null?void 0:kx.includes("localhost");r();Qe();r();r();var Vx=require("react");te();r();r();te();var Rs=n=>{var l;let o=ee(oo),a=(l=o==null?void 0:o.loginToken)!=null?l:n;if(!a)return;let c=Dt(a);if(!!c)return c.origin.toLowerCase().startsWith(ju)};r();r();r();var Oo=M(require("bignumber.js")),Px=n=>{let o=new Oo.default(n).dividedBy(1e3).integerValue(Oo.default.ROUND_FLOOR),a=new Oo.default(o).dividedBy(60).integerValue(Oo.default.ROUND_FLOOR),c=new Oo.default(a).dividedBy(60).integerValue(Oo.default.ROUND_FLOOR),l=c.modulo(60).isGreaterThan(1),g=a.modulo(60).isGreaterThan(1),h=a.modulo(60).isLessThan(1);return l?`${c} hours`:g?`${a} minutes`:h?"less than 1 minute":`${a} minute`};var Ex=(n,o)=>{var g;let a=ee(oo),c=(g=a==null?void 0:a.loginToken)!=null?g:n;if(!c)return;let l=Dt(c);if(!!l)return{className:o,url:l.origin,duration:Px(l.ttl*1e3)}};r();r();r();var so=M(require("react")),Hx=require("react"),$x=require("react"),Od=M(require("classnames")),zx=require("react-dom");te();r();var Mx=M(require("react"));r();var ka=M(require("react"));r();_r();var Nx=()=>!ko();var UR=()=>B(void 0,null,function*(){return yield Promise.resolve().then(()=>(Pd(),kd))}),GR=()=>(Pd(),Ce(kd)).default,Ed=Nx();function Dx({ssrGlobalImportCallback:n,ssrImportCallback:o,clientImportCallback:a}){let[c,l]=ka.default.useState(Ed?void 0:GR()),[g,h]=ka.default.useState(Ed||a==null?void 0:a()),b=()=>B(this,null,function*(){(n?n():UR()).then(x=>l(x.default)),o==null||o().then(x=>h(x.default))});return(0,ka.useEffect)(()=>{Ed&&b()},[]),{globalStyles:c,styles:g}}function le(n,o){return a=>{let{globalStyles:c,styles:l}=Dx({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Mx.default.createElement(n,Z(E({},a),{globalStyles:c!=null?c:{},styles:l!=null?l:{}}))}}r();var Bx=M(require("react")),Fx=M(require("classnames"));var $R=({className:n,children:o,styles:a})=>Bx.default.createElement("div",{className:(0,Fx.default)(a==null?void 0:a.dappModalBody,n)},o),Nd=le($R,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Ce(Bt)).default});r();var Rd=M(require("react")),Wx=M(require("classnames"));var zR=({visible:n,customFooter:o,className:a,footerText:c,styles:l})=>n?Rd.default.createElement("div",{className:(0,Wx.default)(l==null?void 0:l.dappModalFooter,a)},o!=null?o:Rd.default.createElement("div",null,c)):null,Dd=le(zR,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Ce(Bt)).default});r();var kr=M(require("react")),Ux=require("@fortawesome/free-solid-svg-icons"),Gx=require("@fortawesome/react-fontawesome"),Pa=M(require("classnames"));var VR=({visible:n,headerText:o,customHeader:a,className:c,closeButtonClassName:l,headerTextClassName:g,onHide:h,globalStyles:b,styles:x})=>n?a?kr.default.createElement("div",{className:(0,Pa.default)(x==null?void 0:x.dappModalHeader,c)},a):kr.default.createElement("div",{className:(0,Pa.default)(x==null?void 0:x.dappModalHeader,c)},kr.default.createElement("div",{className:(0,Pa.default)(x==null?void 0:x.dappModalHeaderText,g)},o),kr.default.createElement("button",{onClick:h,className:(0,Pa.default)(x==null?void 0:x.dappModalCloseButton,b==null?void 0:b.btn,b==null?void 0:b.btnLight,l)},kr.default.createElement(Gx.FontAwesomeIcon,{size:"lg",icon:Ux.faTimes}))):null,Md=le(VR,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Ce(Bt)).default});var qR={showHeader:!0,showFooter:!1,headerText:"",footerText:""},KR=({"data-testid":n="dappModal",children:o,className:a="dapp-modal-dialog-wrapper",closeOnEscape:c,config:l=qR,id:g="dapp-modal",onHide:h,parentElement:b,visible:x,styles:y})=>{let[N,C]=(0,Hx.useState)(!1);if((0,$x.useEffect)(()=>{C(!0)},[]),!x)return null;let{showHeader:D,showFooter:H,headerText:U,footerText:O,modalDialogClassName:K="dapp-modal-dialog",modalContentClassName:J="dapp-modal-dialog-content",modalHeaderClassName:ae="dapp-modal-dialog-header",modalHeaderTextClassName:oe="dapp-modal-dialog-header-text",modalCloseButtonClassName:Y="dapp-modal-dialog-close-button",modalBodyClassName:Q="dapp-modal-dialog-content-body",modalFooterClassName:ve="dapp-modal-dialog-footer",customModalHeader:an,customModalFooter:Ze}=l,sn=Hn=>{Hn.key==="Escape"&&c&&(h==null||h())};return so.default.createElement(so.default.Fragment,null,N&&(0,zx.createPortal)(so.default.createElement("div",{id:g,role:"dialog","aria-modal":"true",className:(0,Od.default)(K,y==null?void 0:y.dappModal,a),"data-testid":n,onKeyDown:sn},so.default.createElement("div",{className:(0,Od.default)(y==null?void 0:y.dappModalContent,J)},so.default.createElement(Md,{visible:D,headerText:U,customHeader:an,className:ae,headerTextClassName:oe,closeButtonClassName:Y,onHide:h}),so.default.createElement(Nd,{className:Q},o),so.default.createElement(Dd,{visible:H,customFooter:Ze,footerText:O,className:ve}))),b!=null?b:document==null?void 0:document.body))},Bd=le(KR,{ssrStyles:()=>Promise.resolve().then(()=>(Ft(),Bt)),clientStyles:()=>(Ft(),Ce(Bt)).default});r();r();var Ds=require("react"),Ms=n=>{let[o,a]=(0,Ds.useState)(!1),c=()=>{a(!0)},l=()=>{a(!1)};return(0,Ds.useEffect)(()=>{(n==null?void 0:n.visible)===!0?c():(n==null?void 0:n.visible)===!1&&l()},[n==null?void 0:n.visible]),{handleShowModal:c,handleHideModal:l,showModal:o}};r();var Fd=({hideButtonWhenModalOpens:n,onContentHide:o,onContentShow:a,onModalCloses:c,onModalOpens:l,token:g,wrapContentInsideModal:h})=>{let b=Sx(),[x,y]=(0,Vx.useState)(!1),{handleShowModal:N,handleHideModal:C,showModal:D}=Ms(),H=Rs(g),U=!n||!x,O=()=>{y(!1),o==null||o(),h?(C(),c==null||c()):c&&(console.warn('Deprecated: "onModalCloses" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentHide" instead.'),c())};return{disabledConnectButton:H,handleCloseModal:O,handleOpenModal:()=>{if(b)throw new Error(rt);if(x)return O();y(!0),a==null||a(),h?(N(),l==null||l()):l&&(console.warn('Deprecated: "onModalOpens" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentShow" instead.'),l())},shouldRenderButton:U,showContent:x,showModal:D}};r();var Pr=require("react"),Wd=require("@multiversx/sdk-hw-provider");at();Re();ye();Le();Pt();r();var Bo=require("react"),jR=10,qx=()=>{let[n,o]=(0,Bo.useState)(""),[a,c]=(0,Bo.useState)(!1),[l,g]=(0,Bo.useState)(0),[h,b]=(0,Bo.useState)([]),[x,y]=(0,Bo.useState)(null),[N,C]=(0,Bo.useState)(!1);return{accounts:h,defaultAddressesPerPage:jR,error:n,isLoading:a,onGoToNextPage:()=>{y(null),g(K=>K+1)},onGoToPrevPage:()=>{y(null),g(K=>K===0?0:K-1)},onGoToSpecificPage:K=>{y(null),g(K)},onSelectAddress:K=>{y(K)},selectedAddress:x,setAccounts:b,setError:o,setIsLoading:c,setShowAddressList:C,showAddressList:N,startIndex:l}};var Ea="Check if the MultiversX App is open on Ledger",Ud=({callbackRoute:n,token:o,addressesPerPage:a,nativeAuth:c,onLoginRedirect:l})=>{let g=ee(wf),h=lt(),b=Xe(),x=Mt(),y=c!=null,N=Ot(c),C=o,{accounts:D,setAccounts:H,isLoading:U,setIsLoading:O,setShowAddressList:K,showAddressList:J,startIndex:ae,selectedAddress:oe,onGoToPrevPage:Y,onGoToNextPage:Q,onGoToSpecificPage:ve,onSelectAddress:an,error:Ze,setError:sn,defaultAddressesPerPage:Hn}=qx(),_o=a!=null?a:Hn,[gt,Wo]=(0,Pr.useState)(""),[Uo,Te]=(0,Pr.useState)(!1),Ae=({address:fe,index:Se,signature:Oe})=>{b(gg({index:Se,loginType:"ledger"})),Oe&&N.setTokenLoginInfo({signature:Oe,address:fe}),b(mn({address:fe,loginMethod:"ledger"})),kt({callbackRoute:n,onLoginRedirect:l,options:{address:fe,signature:Oe}})},Me=(fe,Se="")=>{var Oe;if(U){let{errorMessage:Gt,defaultErrorMessage:Ho}=Hp(fe),Fa=(Oe=Gt!=null?Gt:Ho)!=null?Oe:Ea;sn(`${Fa}.${Se}`),O(!1),b(Up(null))}},ln=()=>B(void 0,null,function*(){try{if(h instanceof Wd.HWProvider&&h.isInitialized())return h.isConnected()}catch(fe){Me(fe)}return!1}),_n=()=>B(void 0,null,function*(){if(yield ln()){sn(""),O(!1);return}try{let Se=new Wd.HWProvider;(yield Se.init())&&Rt(Se),sn(""),O(!1)}catch(Se){Me(Se)}}),Us=()=>B(void 0,null,function*(){let fe=yield ln();if(!oe||!fe)return Me(Ea);let{index:Se}=oe;if(y&&!C&&(C=yield N.getNativeAuthLoginToken(),!C)){console.warn("Fetching block failed. Login cancelled.");return}if(C){N.setLoginToken(C);try{let Oe=yield h.tokenLogin({token:d.Buffer.from(`${C}{}`),addressIndex:Se});Ae({address:Oe.address,index:Se,signature:Oe.signature.toString("hex")})}catch(Oe){Me(Oe,". Update MultiversX App to continue.")}}else try{let{address:Oe}=yield h.login({addressIndex:Se});Ae({address:Oe,index:Se})}catch(Oe){return Me(Oe),!1}return!0}),Gs=()=>B(void 0,null,function*(){try{if(O(!0),oe==null)return!1;b(g?mg(oe):Up(Z(E({},oe),{version:gt,hasContractDataEnabled:Uo}))),O(!1),yield Us()}catch(fe){Me(fe)}return K(!1),!0}),Ba=()=>B(void 0,null,function*(){if(!(yield ln()))return Me(Ze);try{O(!0);let Se=yield h.getAccounts(ae,_o),Oe=yield ld(h);Wo(Oe.version),Te(Oe.dataEnabled),H(Se),O(!1)}catch(Se){Me(Se)}}),Ut=()=>B(void 0,null,function*(){if(x)throw new Error(rt);io(),sn("");try{if(O(!0),!(yield ln()))return Me(Ea);if(g!=null){if(!oe)return Me(Ea);let{address:Se}=yield h.login({addressIndex:oe.index.valueOf()});if(!Se)return Me("Login cancelled.");b(mn({address:Se,loginMethod:"ledger"})),kt({callbackRoute:n,onLoginRedirect:l})}else D!=null&&D.length||(yield Ba()),K(!0);O(!1)}catch(fe){Me(fe)}}),Go=()=>B(void 0,null,function*(){try{let fe=yield ln();if(fe||(yield _n()),fe=yield ln(),!fe)return Me(Ea);(D.length===0||ae>=0)&&(yield Ba())}catch(fe){Me(fe)}});(0,Pr.useEffect)(()=>{Go()},[ae,J,h]),(0,Pr.useEffect)(()=>{(D==null?void 0:D.length)>0&&!J&&K(!0)},[D]);let Fr=Boolean(Ze);return[Ut,{loginFailed:Fr,isLoggedIn:x&&!Fr,error:Ze,isLoading:U&&!Fr},{accounts:D,showAddressList:J,startIndex:ae,selectedAddress:oe,version:gt,contractDataEnabled:Uo,onGoToPrevPage:Y,onGoToNextPage:Q,onGoToSpecificPage:ve,onSelectAddress:an,onConfirmSelectedAddress:Gs}]};r();r();var Gd=require("react");Re();ye();Le();Pt();Qe();r();var YR=require("react"),ZR=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");at();Re();Le();Pt();en();en();r();var JR=require("react"),QR=require("@multiversx/sdk-passkey-provider/out");at();Re();Le();Pt();en();en();r();r();var Kx=require("react");r();var t3=require("react");r();var Hd=require("react"),n3=require("socket.io-client");ye();r();r();r();var o3=require("react");Ue();r();r();r();var a3=M(require("swr"));r();r();r();r();var r3=M(require("axios"));r();r();var Na=M(require("react")),Yx=M(require("classnames"));var s3=({onLogin:n,text:o="Default Login Button",className:a="dapp-login-button",btnClassName:c="dapp-default-login-button",disabled:l,"data-testid":g,children:h,globalStyles:b,styles:x})=>{let y=(0,Na.useMemo)(()=>({wrapper:(0,Yx.default)(b==null?void 0:b.btn,b==null?void 0:b.btnPrimary,b==null?void 0:b.px4,b==null?void 0:b.m1,b==null?void 0:b.mx3,{[c]:c!=null},a),loginText:x==null?void 0:x.loginText,wrapperClassName:a}),[b,x]);return Na.default.createElement("button",{"data-testid":g,disabled:l,className:y.wrapper,onClick:n},h||Na.default.createElement("span",{className:y.loginText},o))},Zx=le(s3,{ssrStyles:()=>Promise.resolve().then(()=>(zd(),$d)),clientStyles:()=>(zd(),Ce($d)).default});r();r();var Ws=M(require("react")),h0=M(require("classnames"));r();r();var Jx=M(require("react"));var Vd=n=>{let{showModal:o}=Ms({visible:n.visible}),a=()=>{var c;(c=n.onClose)==null||c.call(n)};return Jx.default.createElement(Bd,{className:n.className,closeOnEscape:n.closeOnEscape,config:n.modalConfig,onHide:a,visible:o},n.children)};r();r();var Br=M(require("react"));r();r();var Ma=M(require("react"));r();r();var Ve=M(require("react")),Dr=M(require("classnames"));te();r();r();var nn=M(require("react")),po=require("@fortawesome/free-solid-svg-icons"),om=require("@fortawesome/react-fontawesome"),Bs=M(require("bignumber.js")),Fo=M(require("classnames"));te();r();r();r();var Os=M(require("react")),ey=require("@fortawesome/react-fontawesome"),jd=M(require("classnames"));var p3=({label:n,onClick:o,showLabels:a,isInactive:c,paginationButtonIcon:l,className:g,"data-testid":h,styles:b})=>Os.default.createElement("div",{onClick:o,"data-testid":h,className:(0,jd.default)(b==null?void 0:b.paginationEdgeButton,g,{[b==null?void 0:b.inactive]:c})},Os.default.createElement(ey.FontAwesomeIcon,{icon:l,className:b==null?void 0:b.paginationEdgeButtonIcon}),Os.default.createElement("span",{className:(0,jd.default)(b==null?void 0:b.paginationEdgeButtonText,{[b==null?void 0:b.show]:a})},n)),Xd=le(p3,{ssrStyles:()=>Promise.resolve().then(()=>(Kd(),qd)),clientStyles:()=>(Kd(),Ce(qd)).default});r();r();r();var em=M(fy()),Er=M(Py());te();r();var Ry=({currentPage:n,totalPages:o})=>{let a=n-1,c=n+1;if(o<=7)return(0,Er.default)(1,o+1).map(J=>String(J));let l=(J,ae)=>J.includes(n)?J:J.slice(0,7-ae.length-1),g=(0,em.default)(c-1,3,5),h=(0,em.default)(a+1,o-3,o-1),b=g?(0,Er.default)(1,c+1):(0,Er.default)(1,5-1),x=h?(0,Er.default)(a,o+1):(0,Er.default)(o-3+1,o+1),y=l(b,x),N=l(x.reverse(),b),C=y.concat(N),D=[pr,a,n,c,pr],[H]=y,[U]=N;return(C.includes(n)?[...y,pr,...N.reverse()]:[H,...D,U]).map(J=>String(J))};var oD=({currentPage:n=1,totalPages:o,className:a,disabledClassName:c,buttonsClassNames:l,onPageChange:g,isDisabled:h,showLabels:b,showEdgeButtons:x=!0,styles:y})=>{let[N,C]=(0,nn.useState)(n),D=N===1,H=N===o,U=c?{[c]:h}:{},O=Ry({currentPage:N,totalPages:o}),K=Q=>{Q!==N&&(C(Q),g(Q))},J=Q=>{mt(Q)&&K(new Bs.default(Q).toNumber())},ae=Q=>ve=>{ve.preventDefault(),K(Q)},oe=Q=>mt(Q)&&new Bs.default(Q).isGreaterThanOrEqualTo(100),Y=Q=>new Bs.default(Q).isEqualTo(N);return(0,nn.useEffect)(()=>{n!==N&&C(n)},[n,N]),o===1?null:nn.default.createElement("div",{className:(0,Fo.default)(y==null?void 0:y.pagination,a)},x&&nn.default.createElement("span",{onClick:ae(1),className:(0,Fo.default)(y==null?void 0:y.paginationAngle,l,E({[y==null?void 0:y.disabled]:D},U))},nn.default.createElement(om.FontAwesomeIcon,{className:y==null?void 0:y.paginationAngleIcon,icon:po.faAnglesLeft})),nn.default.createElement(Xd,{label:"Prev",onClick:ae(N-1),"data-testid":"prevBtn",paginationButtonIcon:po.faAngleLeft,isInactive:D,showLabels:b,className:(0,Fo.default)(y==null?void 0:y.paginationEdgeButton,l,{[y==null?void 0:y.disabled]:h},U)}),nn.default.createElement("div",{className:y==null?void 0:y.paginationItems},O.map((Q,ve)=>nn.default.createElement("div",{key:`page-item-${ve}`,className:y==null?void 0:y.paginationItemWrapper},mt(Q)?nn.default.createElement("div",{onClick:()=>J(Q),className:(0,Fo.default)(y==null?void 0:y.paginationItem,l,{[y==null?void 0:y.active]:Y(Q)},{[y==null?void 0:y.ellipsis]:!mt(Q)},{[y==null?void 0:y.disabled]:h},{[y==null?void 0:y.hundreds]:oe(Q)},U)},nn.default.createElement("span",{className:y==null?void 0:y.paginationItemText},Q)):nn.default.createElement("span",{className:y==null?void 0:y.paginationItemText},Q)))),nn.default.createElement(Xd,{label:"Next",onClick:ae(N+1),"data-testid":"nextBtn",paginationButtonIcon:po.faAngleRight,isInactive:H,showLabels:b,className:(0,Fo.default)(y==null?void 0:y.paginationEdgeButton,y==null?void 0:y.reversed,l,{[y==null?void 0:y.disabled]:h},U)}),x&&nn.default.createElement("span",{onClick:ae(o),className:(0,Fo.default)(y==null?void 0:y.paginationAngle,l,E({[y==null?void 0:y.disabled]:H},U))},nn.default.createElement(om.FontAwesomeIcon,{className:y==null?void 0:y.paginationAngleIcon,icon:po.faAnglesRight})))},My=le(oD,{ssrStyles:()=>Promise.resolve().then(()=>(tm(),nm)),clientStyles:()=>(tm(),Ce(nm)).default});r();r();var _t=M(require("react")),dm=M(require("classnames"));r();var mo=M(require("react")),By=M(require("classnames"));te();var aD=n=>{var a;let o=(a=n.styles)!=null?a:{};return mo.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},mo.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},iD=(n,o)=>{var H,U,O;let{value:a,showLastNonZeroDecimal:c=!1,showLabel:l=!0}=n,g=n.digits!=null?n.digits:Co,h=n.decimals!=null?n.decimals:Pn,b=(H=n.styles)!=null?H:{},x=(U=n.globalStyles)!=null?U:{},y=ao({input:a,decimals:h,digits:g,showLastNonZeroDecimal:c,addCommas:!0}),N=y.split("."),C=N.length===1,D=y!==st;if(g>0&&C&&D){let K="";for(let J=1;J<=g;J++)K=K+st;N.push(K)}return mo.default.createElement("span",{"data-testid":n["data-testid"]||"formatAmountComponent",className:n.className},mo.default.createElement("span",{className:b["int-amount"],"data-testid":"formatAmountInt"},N[0]),N.length>1&&mo.default.createElement("span",{className:b.decimals,"data-testid":"formatAmountDecimals"},".",N[1]),l&&mo.default.createElement("span",{className:(0,By.default)(b.symbol,n.token&&x.textMuted),"data-testid":"formatAmountSymbol"},` ${(O=n.token)!=null?O:o}`))},sD=n=>{let{value:o}=n;return mt(o)?iD(n,n.egldLabel||""):aD(n)},cD=n=>{let o=n.egldLabel||Ns(),a=Z(E({},n),{egldLabel:o});return mo.default.createElement(sD,E({},a))},Fy=le(cD,{ssrStyles:()=>Promise.resolve().then(()=>(am(),rm)),clientStyles:()=>(am(),Ce(rm)).default});r();r();var He=M(require("react")),Uy=M(require("classnames"));te();var dD=({text:n,className:o="dapp-trim","data-testid":a="trim-text-component",color:c,styles:l})=>{let[g,h]=(0,He.useState)(0),[b,x]=(0,He.useState)(!1),y=(0,He.useRef)(document==null?void 0:document.createElement("span")),N=(0,He.useRef)(document==null?void 0:document.createElement("span")),C=Ax(g,300),D=()=>{if(y.current&&N.current){let O=N.current.offsetWidth-y.current.offsetWidth;x(O>1)}},H=()=>{h(g+1)};return(0,He.useEffect)(()=>(window==null||window.addEventListener("resize",H),()=>{window==null||window.removeEventListener("resize",H)})),(0,He.useEffect)(()=>{D()},[C]),He.default.createElement("span",{ref:y,className:(0,Uy.default)(l==null?void 0:l.trim,c,o,{overflow:b}),"data-testid":a},He.default.createElement("span",{ref:N,className:l==null?void 0:l.hiddenTextRef},n),b?He.default.createElement(He.default.Fragment,null,He.default.createElement("span",{className:l==null?void 0:l.left},He.default.createElement("span",null,String(n).substring(0,Math.floor(n.length/2)))),He.default.createElement("span",{className:l==null?void 0:l.ellipsis},pr),He.default.createElement("span",{className:l==null?void 0:l.right},He.default.createElement("span",null,String(n).substring(Math.ceil(n.length/2))))):He.default.createElement("span",null,n))},Gy=le(dD,{ssrStyles:()=>Promise.resolve().then(()=>(sm(),im)),clientStyles:()=>(sm(),Ce(im)).default});var lD=({address:n,index:o,balance:a,selectedAddress:c,onSelectAddress:l,className:g="dapp-ledger-address-row",ledgerModalTableSelectedItemClassName:h,disabled:b=!1,styles:x})=>{var y;return _t.default.createElement("div",{onClick:()=>l({address:n,index:o}),className:(0,dm.default)(x==null?void 0:x.ledgerAddressTableBodyItem,{[h!=null?h:""]:c===n,[(y=x==null?void 0:x.ledgerAddressTableBodyItemSelected)!=null?y:""]:c===n},g)},_t.default.createElement("div",{className:(0,dm.default)(x==null?void 0:x.ledgerAddressTableBodyItemData,{disabled:b})},_t.default.createElement("input",{type:"radio",id:`check_${n}`,disabled:b,onChange:()=>l({address:n,index:o}),"data-testid":`check_${n}`,role:"button",checked:c===n,className:x==null?void 0:x.ledgerAddressTableBodyItemDataInput}),_t.default.createElement("label",{htmlFor:`check_${o}`,role:"button","data-testid":`label_${o}`,className:x==null?void 0:x.ledgerAddressTableBodyItemDataLabel},_t.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemDataValue},_t.default.createElement(Gy,{text:n})))),_t.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemData},_t.default.createElement(Fy,{value:a,egldLabel:Ns()})),_t.default.createElement("div",{className:x==null?void 0:x.ledgerAddressTableBodyItemData},o))},$y=le(lD,{ssrStyles:()=>Promise.resolve().then(()=>(pm(),cm)),clientStyles:()=>(pm(),Ce(cm)).default});r();r();r();var Nr=M(require("react")),jy=require("@fortawesome/free-solid-svg-icons"),Rr=M(require("classnames"));te();r();r();var lo=M(require("react")),Vy=require("@fortawesome/react-fontawesome"),Ra=M(require("classnames"));var uD=({icon:n,title:o,action:a,iconClass:c,"data-testid":l,description:g,iconBgClass:h,iconSize:b="5x",className:x="dapp-page-state",globalStyles:y,styles:N})=>{let C=(0,lo.useMemo)(()=>({wrapper:(0,Ra.default)(N==null?void 0:N.state,y==null?void 0:y.mAuto,y==null?void 0:y.p4,y==null?void 0:y.textCenter,x),iconContainer:(0,Ra.default)(y==null?void 0:y.iconState,y==null?void 0:y.mxAuto,{[h!=null?h:""]:Boolean(h)}),iconClass:(0,Ra.default)(c!=null&&c),title:(0,Ra.default)(y==null?void 0:y.h4,y==null?void 0:y.my4),description:y==null?void 0:y.mb3}),[y,N,x,h,c]);return lo.default.createElement("div",{className:C.wrapper,"data-testid":l},n&&lo.default.createElement("span",{className:C.iconContainer},lo.default.createElement(Vy.FontAwesomeIcon,{icon:n,className:C.iconClass,size:b})),o&&lo.default.createElement("p",{className:C.title},o),g&&lo.default.createElement("div",{className:C.description},g),a)},qy=le(uD,{ssrStyles:()=>Promise.resolve().then(()=>(lm(),mm)),clientStyles:()=>(lm(),Ce(mm)).default});var fD=({customSpinnerComponent:n,ledgerLoadingClassNames:o,customContentComponent:a,globalStyles:c,styles:l})=>{let{ledgerModalSubtitleClassName:g,ledgerModalTitleClassName:h,ledgerLoadingWrapper:b,ledgerLoadingSpinner:x}=o||{};return Nr.default.createElement("div",{className:(0,Rr.default)(l==null?void 0:l.ledgerLoadingWrapper,b),"data-testid":"ledgerLoading"},Nr.default.createElement("div",{className:(0,Rr.default)(l==null?void 0:l.ledgerLoadingHeading,h)},"Waiting for device..."),Nr.default.createElement("p",{className:(0,Rr.default)(l==null?void 0:l.ledgerLoadingDescription,g)},"It may take a few seconds..."),a,Nr.default.createElement("div",{className:(0,Rr.default)(l==null?void 0:l.ledgerLoadingSpinner,x)},n||Nr.default.createElement(qy,{iconSize:"10x",icon:jy.faCircleNotch,iconClass:(0,Rr.default)("fa-spin",c==null?void 0:c.textPrimary)})))},Fs=le(fD,{ssrStyles:()=>Promise.resolve().then(()=>(um(),_m)),clientStyles:()=>(um(),Ce(_m)).default});var Yy=10,TD=500,xD=({accounts:n,addressTableClassNames:o,className:a="dapp-ledger-address-table",customContentComponent:c,dataTestId:l="addressTableContainer",loading:g,onConfirmSelectedAddress:h,onGoToSpecificPage:b,onGoToNextPage:x,onGoToPrevPage:y,onSelectAddress:N,selectedAddress:C,startIndex:D,disabledIndexes:H=[],globalStyles:U,styles:O})=>{let{ledgerModalTitleClassName:K,ledgerModalSubtitleClassName:J,ledgerModalTableHeadClassName:ae,ledgerModalTableItemClassName:oe,ledgerModalButtonClassName:Y,ledgerModalTableNavigationButtonClassName:Q,ledgerModalTableSelectedItemClassName:ve,ledgerModalTableNavigationButtonDisabledClassName:an}=o||{},[Ze,sn]=(0,Ve.useState)([]),Hn=()=>{let Te=0;for(;H.includes(Te);)Te++;return Te};(0,Ve.useEffect)(()=>{if(n.length>0&&!g&&(!C&&D===0)){let ln=Hn(),_n=n[ln];N({address:_n,index:ln})}},[n,C,g,D]);let _o=Te=>B(void 0,null,function*(){try{let Ae=yield rh(Te);return{address:Te,balance:Ae}}catch(Ae){throw console.error("error fetching balance",Ae),Ze}});if((0,Ve.useEffect)(()=>{let Te=n.map(Ae=>_o(Ae));sn(n.map(Ae=>({address:Ae,balance:"..."}))),Promise.all(Te).then(Ae=>{sn(Ae)})},[n]),g)return Ve.default.createElement(Fs,null);let gt=()=>{!C||h()},Wo=Te=>{if(Te-1===D+1){x();return}if(Te-1===D-1){y();return}b(Te-1)},Uo=["Address","Balance","#"];return Ve.default.createElement("div",{className:(0,Dr.default)(O==null?void 0:O.ledgerAddressTableWrapper,a),"data-testid":l},Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTableTop},Ve.default.createElement("div",{className:(0,Dr.default)(O==null?void 0:O.ledgerAddressTableHeading,K),"data-testid":`${l}Title`},"Access your wallet"),Ve.default.createElement("p",{className:(0,Dr.default)(O==null?void 0:O.ledgerAddressTableDescription,J),"data-testid":`${l}SubTitle`},"Choose the wallet you want to access")),c,Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTable},Ve.default.createElement("div",{className:(0,Dr.default)(O==null?void 0:O.ledgerAddressTableHeader,ae)},Uo.map(Te=>Ve.default.createElement("div",{key:Te,className:O==null?void 0:O.ledgerAddressTableHeaderItem},Te))),Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTableBody},Ze&&Ze.map(({address:Te,balance:Ae},Me)=>Ve.default.createElement($y,{address:Te,balance:Ae,disabled:H.includes(Me),key:Me+D*Yy,index:Me+D*Yy,selectedAddress:C,onSelectAddress:N,className:oe,ledgerModalTableSelectedItemClassName:ve})))),Ve.default.createElement("div",{className:O==null?void 0:O.ledgerAddressTableBottom},Ve.default.createElement(My,{className:O==null?void 0:O.ledgerAddressTablePagination,currentPage:D+1,totalPages:TD,onPageChange:Wo,disabledClassName:an,buttonsClassNames:Q}),Ve.default.createElement("button",{disabled:!C,onClick:gt,"data-testid":"confirmBtn",className:(0,Dr.default)(U==null?void 0:U.btn,U==null?void 0:U.btnPrimary,O==null?void 0:O.ledgerAddressTableButton,Y)},"Access Wallet")))},Zy=le(xD,{ssrStyles:()=>Promise.resolve().then(()=>(fm(),gm)),clientStyles:()=>(fm(),Ce(gm)).default});r();r();var wn=M(require("react")),Wt=M(require("classnames"));te();r();r();r();var Qy=M(Jy()),e0=n=>{if(n<=0||isNaN(n)||!n||(0,Qy.isString)(n))return"N/A time";if(n>=86400)return"more than one day";let o=Math.floor(n/3600),a=n%3600,c=Math.floor(a/60),l=a%60,g=[];return o>0&&g.push(`${o}h`),c>0&&g.push(`${c}min`),l>0&&g.push(`${l}sec`),g.join(" ")};var n0=({loginToken:n,version:o})=>{if(!n||!o)return null;let{ledgerWithUsernames:a}=Uf(o),c=Dt(n);if(c==null)return null;let l="For security, please confirm that your address:",g="and Auth Token:",h="are the one shown on your Ledger device screen now.";if(a){let b=e0(c.ttl),x="For security, please confirm your address:",y="and authorize:";return{data:`${c.origin} for ${b}.`,confirmAddressText:x,authText:y}}return{data:n,confirmAddressText:l,authText:g,areShownText:h}};var SD=({token:n,className:o="dapp-ledger-confirm-address",customContentComponent:a,confirmAddressClassNames:c,styles:l})=>{var U,O;let{ledgerAccount:g}=Ca(),{ledgerModalTitleClassName:h,ledgerModalConfirmDescriptionClassName:b,ledgerModalConfirmDataClassName:x,ledgerModalConfirmFooterClassName:y,ledgerModalConfirmContentClassName:N}=c||{},C=ee(oo),D=(U=C==null?void 0:C.loginToken)!=null?U:n,H=n0({loginToken:D,version:g==null?void 0:g.version});return wn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddress,N,o),"data-testid":"ledgerConfirmAddress"},wn.default.createElement("h4",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressHeading,h)},"Confirm Ledger Address"),a,wn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},wn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,b)},H==null?void 0:H.confirmAddressText),wn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressData,x)},(O=g==null?void 0:g.address)!=null?O:"")),wn.default.createElement("div",{className:l==null?void 0:l.ledgerConfirmAddressSection},wn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,b)},H==null?void 0:H.authText),wn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressData,x)},H==null?void 0:H.data),wn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressDescription,b)},H==null?void 0:H.areShownText)),wn.default.createElement("div",{className:(0,Wt.default)(l==null?void 0:l.ledgerConfirmAddressFooter,y)},wn.default.createElement("div",null,"Select Approve on your device to confirm."),wn.default.createElement("div",null,"Or, if it does not match, close this page and"," ",wn.default.createElement("a",{href:"https://help.multiversx.com/en/",target:"_blank",rel:"noreferrer"},"contact support"),".")))},o0=le(SD,{ssrStyles:()=>Promise.resolve().then(()=>(Tm(),hm)),clientStyles:()=>(Tm(),Ce(hm)).default});r();r();var En=M(require("react")),ut=M(require("classnames"));r();var Ye=M(require("react")),bD=n=>Ye.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 290 142.3",style:{enableBackground:"new 0 0 290 142.3"},xmlSpace:"preserve"},n),Ye.createElement("style",{type:"text/css"},`
	.st0{filter:url(#Adobe_OpacityMaskFilter);}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_00000132080685600946463390000014083146887067534994_);}
	.st2{mask:url(#SVGID_1_);fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
`),Ye.createElement("defs",null,Ye.createElement("filter",{id:"Adobe_OpacityMaskFilter",filterUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3},Ye.createElement("feColorMatrix",{type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"}))),Ye.createElement("mask",{maskUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3,id:"SVGID_1_"},Ye.createElement("g",{className:"st0"},Ye.createElement("linearGradient",{id:"SVGID_00000042721603501377086220000002945655816276772283_",gradientUnits:"userSpaceOnUse",x1:1,y1:24.85,x2:92.9,y2:24.85},Ye.createElement("stop",{offset:0,style:{stopColor:"#000000"}}),Ye.createElement("stop",{offset:.1864,style:{stopColor:"#000000"}}),Ye.createElement("stop",{offset:.8945,style:{stopColor:"#FFFFFF"}})),Ye.createElement("rect",{x:1,y:21.7,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"url(#SVGID_00000042721603501377086220000002945655816276772283_)"},width:91.9,height:6.3}))),Ye.createElement("path",{className:"st2",d:"M1,26.6V28h92.7v-1.4H1z M1,21.7v1.4h92.7v-1.4H1z"}),Ye.createElement("g",null,Ye.createElement("path",{className:"st3",d:"M218.8,21h-38.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v5.6c0,0.2,0.1,0.3,0.2,0.4   c0.1,0.1,0.2,0.2,0.4,0.2h38.1c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4v-5.6c0-0.1-0.1-0.3-0.2-0.4   C219.1,21.1,219,21,218.8,21z M185.2,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7   l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L185.2,25.4z M189.6,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6   l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L189.6,25.4z M194,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3   l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L194,25.4z M198.4,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8   l0,0l-1-0.3l0.1-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L198.4,25.4z M202.8,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9   l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L202.8,25.4z M207.1,25.4l-0.5,0.4l-0.6-0.9   l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L207.1,25.4z M211.5,25.4   l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L211.5,25.4z    M215.9,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3   l0,0L215.9,25.4z"}),Ye.createElement("path",{className:"st3",d:"M283.8,9.2l-0.1-0.1c-0.2-0.2-0.3-0.3-0.5-0.5s-0.3-0.3-0.5-0.5c-0.1-0.1-0.3-0.3-0.4-0.4   c-0.6-0.6-1.2-1.1-1.8-1.6c-3.9-3-8.7-4.7-13.9-4.7h-28.1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-42.3c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-13c-1.1,0-2.1,0.4-2.8,1.2c-0.7,0.7-1.2,1.8-1.2,2.8v8.8c-0.1,0-0.2,0-0.2,0   h-0.3h-29.1c-1.7,0-3.2,0.7-4.4,1.8c-1.2,1.2-1.8,2.8-1.8,4.4v0.3H92.9v8.4h12.7v0.7c0,1.7,0.7,3.2,1.8,4.4   c1.2,1.2,2.7,1.8,4.4,1.8h29.1h0.3c0.1,0,0.2,0,0.2,0v7.4c0,1.1,0.4,2.1,1.2,2.8s1.8,1.2,2.8,1.2h72.3l-0.4,0.5l-53.4,63.6   c-0.3,0.4-0.6,0.9-0.7,1.4c-0.2,0.5-0.2,1-0.2,1.5s0.2,1,0.4,1.5s0.6,0.9,1,1.2l28.9,24.3c0.4,0.3,0.9,0.6,1.4,0.7   c0.5,0.2,1,0.2,1.5,0.2s1-0.2,1.5-0.4s0.9-0.6,1.2-1l82.5-98.3l2.9-3.5C291.8,30.3,291.3,17.5,283.8,9.2z M105.1,27.9h-11v-6h11   V27.9z M277.7,45.1l-79.8,95c-0.2,0.3-0.5,0.5-0.8,0.7s-0.7,0.3-1,0.3c-0.4,0-0.7,0-1.1-0.1c-0.3-0.1-0.7-0.3-0.9-0.5l-29-24.3   c-0.3-0.2-0.5-0.5-0.7-0.8s-0.3-0.7-0.3-1c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.3-0.7,0.5-0.9l54-64.4l0.4-0.5l1-1.2l8.1-9.7l0.3-0.3   l0.3-0.3l5.2-6.2l0.3-0.4l0.3-0.4L250,10.6c4.8-5.7,11.8-8.3,18.6-7.6c0.2,0,0.5,0,0.7,0.1c0.3,0,0.6,0.1,0.9,0.1   c0.2,0,0.5,0.1,0.7,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.6,0.2,1.2,0.3,1.8,0.5c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,0.9,0.4   c0.2,0.1,0.4,0.2,0.6,0.3c0.6,0.3,1.2,0.7,1.9,1c0.4,0.2,0.8,0.5,1.2,0.8l0,0c0.4,0.3,0.8,0.6,1.1,0.9c0.1,0.1,0.2,0.2,0.3,0.2   c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.2,0.4,0.4c7.9,7.8,8.6,20.6,1.3,29.3l-4.7,5.6L277.7,45.1z    M234.2,27.8l-6.8,8.1h-60.6c-0.8,0-1.5-0.7-1.5-1.5v-20c0-0.8,0.7-1.5,1.5-1.5h65.9c0.8,0,1.5,0.7,1.5,1.5L234.2,27.8L234.2,27.8z    M141.2,34.9h-0.3h-29.1c-1.3,0-2.6-0.5-3.5-1.5c-0.9-0.9-1.5-2.2-1.5-3.5v-9.5c0-1.3,0.5-2.6,1.5-3.5c0.9-0.9,2.2-1.5,3.5-1.5   h29.1h0.3c0.1,0,0.2,0,0.2,0.1v19.4C141.3,34.8,141.3,34.9,141.2,34.9z M145.4,46.2c-0.7,0-1.4-0.3-2-0.8c-0.5-0.5-0.8-1.2-0.8-2   v-8.2v-3.4V18.1V15V5.4c0-0.7,0.3-1.4,0.8-1.9s1.2-0.8,2-0.8h12.9h19.2h42h19.2h21.4c-4.1,1.2-7.8,3.6-10.8,7.1l-14.5,17.3V14.4   c0-1.2-0.9-2.1-2.1-2.1h-65.9c-1.2,0-2.1,0.9-2.1,2.1v20c0,1.2,0.9,2.1,2.1,2.1h60.1l-8.2,9.7C218.7,46.2,145.4,46.2,145.4,46.2z"}),Ye.createElement("path",{className:"st3",d:"M265.5,12.2c-6.8,0-12.2,5.4-12.2,12.2c0,6.7,5.5,12.2,12.2,12.2c6.8,0,12.2-5.4,12.2-12.2   C277.7,17.7,272.2,12.2,265.5,12.2z M265.5,35.9c-6.4,0-11.6-5.2-11.6-11.5s5.2-11.5,11.6-11.5s11.6,5.2,11.6,11.5   S271.9,35.9,265.5,35.9z"}))),r0=bD;te();var vD=({onClick:n,error:o,disabled:a,connectPageContent:c,customContentComponent:l,className:g="dapp-ledger-connect-button",ledgerConnectClassNames:h,globalStyles:b,styles:x})=>{let{ledgerModalTitleClassName:y,ledgerModalSubtitleClassName:N,ledgerModalErrorClassName:C,ledgerModalIconClassName:D,ledgerModalButtonClassName:H,ledgerModalFooterLinkClassName:U,ledgerModalFooterClassName:O,ledgerModalContentClassName:K}=h||{};return En.default.createElement("div",{className:(0,ut.default)(x==null?void 0:x.loginConnectContainer,g)},En.default.createElement("div",{className:(0,ut.default)(x==null?void 0:x.loginConnectContainerContent,K)},c||En.default.createElement(En.default.Fragment,null,En.default.createElement("div",{className:(0,ut.default)(x==null?void 0:x.loginConnectContainerHeading,y)},"Connect Ledger"),En.default.createElement("p",{className:(0,ut.default)(x==null?void 0:x.loginConnectContainerDescription,N)},"Unlock your device & open the MultiversX App"),o&&En.default.createElement("p",{className:(0,ut.default)(x==null?void 0:x.loginConnectContainerError,C)},o),l,En.default.createElement("div",{className:(0,ut.default)(x==null?void 0:x.loginConnectContainerIcon,D)},En.default.createElement(r0,null))),En.default.createElement("div",{className:(0,ut.default)(x==null?void 0:x.loginConnectContainerFooter,O)},En.default.createElement("button",{onClick:n,disabled:a,"data-testid":"ledgerConnectBtn",className:(0,ut.default)(b==null?void 0:b.btn,b==null?void 0:b.btnPrimary,x==null?void 0:x.loginConnectContainerButton,H)},"Connect Ledger"),En.default.createElement("a",{href:"https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux",target:"_blank",rel:"noopener noreferrer",className:(0,ut.default)(x==null?void 0:x.loginConnectContainerLink,U)},"Having connection issues?"))))},i0=le(vD,{ssrStyles:()=>Promise.resolve().then(()=>(ym(),xm)),clientStyles:()=>(ym(),Ce(xm)).default});var s0=({isLoading:n,customSpinnerComponent:o,customContentComponent:a,ledgerLoadingClassNames:c,ledgerAccount:l,error:g,confirmAddressClassNames:h,token:b,showAddressList:x,accounts:y,addressTableClassNames:N,onConfirmSelectedAddress:C,onGoToSpecificPage:D,onGoToNextPage:H,onGoToPrevPage:U,onSelectAddress:O,selectedAddress:K,startIndex:J,disabledConnectButton:ae,ledgerConnectClassNames:oe,onStartLogin:Y})=>n?Ma.default.createElement(Fs,{customSpinnerComponent:o,customContentComponent:a,ledgerLoadingClassNames:c}):l!=null&&!g?Ma.default.createElement(o0,{confirmAddressClassNames:h,customContentComponent:a,token:b}):x&&!g?Ma.default.createElement(Zy,{accounts:y,addressTableClassNames:N,customContentComponent:a,loading:n,onConfirmSelectedAddress:C,onGoToSpecificPage:D,onGoToNextPage:H,onGoToPrevPage:U,onSelectAddress:O,selectedAddress:K==null?void 0:K.address,startIndex:J}):Ma.default.createElement(i0,{customContentComponent:a,disabled:ae,error:g,ledgerConnectClassNames:oe,onClick:Y});r();r();var Or=M(require("react")),wm=M(require("classnames"));var ID=({error:n,ledgerAccount:o,ledgerProgressBarClassNames:a,showAddressList:c,showProgressBar:l,styles:g})=>{let h=[{percentage:33,conditions:!c&&!o},{conditions:c&&!n&&!o,percentage:66},{conditions:o!=null&&!n,percentage:100}],b=(0,Or.useMemo)(()=>h.find(C=>C.conditions),[]),x=b?b.percentage:33;if(!l)return null;let{ledgerProgressBarTrackClassName:y,ledgerProgressBarThumbClassName:N}=a||{};return Or.default.createElement("div",{className:g==null?void 0:g.ledgerProgressBar},Or.default.createElement("div",{className:(0,wm.default)(g==null?void 0:g.ledgerProgressBarTrack,y)}),Or.default.createElement("div",{className:(0,wm.default)(g==null?void 0:g.ledgerProgressBarThumb,N),style:{width:`${x}%`}}))},p0=le(ID,{ssrStyles:()=>Promise.resolve().then(()=>(bm(),Sm)),clientStyles:()=>(bm(),Ce(Sm)).default});r();r();var u0=M(require("react"));r();r();var tn=M(require("react")),m0=require("@fortawesome/free-solid-svg-icons"),l0=require("@fortawesome/react-fontawesome"),Im=M(require("classnames"));var LD=n=>{let{className:o,url:a,icon:c,authorizationInfo:l,styles:g}=n,h=a.replace("https://","").replace(/\/$/,""),b=l!=null&&l.url?l.url.replace("https://","").replace(/\/$/,""):"";return tn.default.createElement(tn.default.Fragment,null,tn.default.createElement("p",{className:(0,Im.default)(g==null?void 0:g.scamPhishingAlert,o)},c||tn.default.createElement(l0.FontAwesomeIcon,{className:g==null?void 0:g.scamPhishingAlertIcon,icon:m0.faLock}),tn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},tn.default.createElement("span",null,"Scam/Phishing verification:")," ",tn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertPrefix},tn.default.createElement("strong",null,"https://"),h))),l&&l.url&&tn.default.createElement("p",{className:(0,Im.default)(g==null?void 0:g.scamPhishingAlert,g==null?void 0:g.scamPhishingAlertAuthorization,l.className)},tn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),tn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},tn.default.createElement("strong",null,"https://"),tn.default.createElement("span",null,b," for"),tn.default.createElement("strong",{className:g==null?void 0:g.scamPhishingAlertAuthorizationDuration},l.duration)),tn.default.createElement("span",{className:g==null?void 0:g.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),tn.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},_0=le(LD,{ssrStyles:()=>Promise.resolve().then(()=>(Am(),vm)),clientStyles:()=>(Am(),Ce(vm)).default});en();var g0=({showScamPhishingAlert:n,token:o,ledgerScamPhishingAlertClassName:a})=>{if(!n)return null;let c=Ex(o,a);return u0.default.createElement(_0,{authorizationInfo:c,className:a,url:De().origin})};var Cm=({callbackRoute:n,customSpinnerComponent:o,customContentComponent:a,innerLedgerComponentsClasses:c,nativeAuth:l,onLoginRedirect:g,showProgressBar:h=!0,showScamPhishingAlert:b=!0,token:x})=>{let{ledgerAccount:y}=Ca(),[N,{error:C,isLoading:D},{accounts:H,onConfirmSelectedAddress:U,onGoToSpecificPage:O,onGoToNextPage:K,onGoToPrevPage:J,onSelectAddress:ae,selectedAddress:oe,showAddressList:Y,startIndex:Q}]=Ud({callbackRoute:n,token:x,onLoginRedirect:g,nativeAuth:l}),ve=Rs(x),{addressTableClassNames:an,confirmAddressClassNames:Ze,ledgerConnectClassNames:sn,ledgerLoadingClassNames:Hn,ledgerProgressBarClassNames:_o,ledgerScamPhishingAlertClassName:gt}=c||{};return Br.default.createElement(Br.default.Fragment,null,Br.default.createElement(g0,{ledgerScamPhishingAlertClassName:gt,showScamPhishingAlert:b,token:x}),Br.default.createElement(p0,{error:C,ledgerAccount:y,ledgerProgressBarClassNames:_o,showAddressList:Y,showProgressBar:h}),Br.default.createElement(s0,E({},{accounts:H,addressTableClassNames:an,confirmAddressClassNames:Ze,customContentComponent:a,customSpinnerComponent:o,disabledConnectButton:ve,error:C,isLoading:D,ledgerAccount:y,ledgerConnectClassNames:sn,ledgerLoadingClassNames:Hn,onConfirmSelectedAddress:U,onGoToSpecificPage:O,onGoToNextPage:K,onGoToPrevPage:J,onSelectAddress:ae,onStartLogin:N,selectedAddress:oe,showAddressList:Y,startIndex:Q,token:x})))};var PD=n=>{let{onClose:o,className:a,showLoginContent:c,wrapContentInsideModal:l,styles:g}=n;return c===!1?null:l?Ws.default.createElement(Vd,{closeOnEscape:n.closeOnEscape,modalConfig:{headerText:"Login with ledger",showHeader:!0,modalContentClassName:g==null?void 0:g.ledgerModalDialogContent,modalHeaderClassName:g==null?void 0:g.ledgerModalHeader,modalHeaderTextClassName:g==null?void 0:g.ledgerModalHeaderText,modalCloseButtonClassName:g==null?void 0:g.ledgerModalCloseButton,modalBodyClassName:g==null?void 0:g.ledgerModalBody,modalDialogClassName:(0,h0.default)(g==null?void 0:g.ledgerLoginContainer,a)},onClose:o,visible:n.showLoginModal},Ws.default.createElement(Cm,E({},n))):Ws.default.createElement(Cm,E({},n))},T0=le(PD,{ssrStyles:()=>Promise.resolve().then(()=>(km(),Lm)),clientStyles:()=>(km(),Ce(Lm)).default});var ED=({buttonClassName:n="dapp-ledger-login-button",callbackRoute:o,children:a,className:c="dapp-ledger-login",customSpinnerComponent:l,"data-testid":g="ledgerLoginButton",disabled:h,hideButtonWhenModalOpens:b=!1,innerLedgerComponentsClasses:x,loginButtonText:y="Ledger",modalClassName:N,nativeAuth:C,onLoginRedirect:D,onContentHide:H,onContentShow:U,onModalCloses:O,onModalOpens:K,showProgressBar:J=!0,showScamPhishingAlert:ae=!0,token:oe,wrapContentInsideModal:Y=!0})=>{let{disabledConnectButton:Q,handleCloseModal:ve,handleOpenModal:an,shouldRenderButton:Ze,showContent:sn,showModal:Hn}=Fd({hideButtonWhenModalOpens:b,onContentHide:H,onContentShow:U,onModalCloses:O,onModalOpens:K,token:oe,wrapContentInsideModal:Y});return Oa.default.createElement(Oa.default.Fragment,null,Ze&&Oa.default.createElement(Zx,{btnClassName:n,className:c,"data-testid":g,disabled:h||Q,onLogin:an,text:y},a),Oa.default.createElement(T0,{callbackRoute:o,className:N,customSpinnerComponent:l,innerLedgerComponentsClasses:x,nativeAuth:C,onClose:ve,onLoginRedirect:D,showLoginContent:sn,showLoginModal:Hn,showProgressBar:J,showScamPhishingAlert:ae,token:oe,wrapContentInsideModal:Y}))};0&&(module.exports={LedgerLoginButton});
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
//# sourceMappingURL=index.js.map
