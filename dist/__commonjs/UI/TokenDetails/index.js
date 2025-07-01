"use strict";var Na=Object.create;var he=Object.defineProperty,Ca=Object.defineProperties,Ra=Object.getOwnPropertyDescriptor,Da=Object.getOwnPropertyDescriptors,Pa=Object.getOwnPropertyNames,Oe=Object.getOwnPropertySymbols,Oa=Object.getPrototypeOf,Ao=Object.prototype.hasOwnProperty,Pn=Object.prototype.propertyIsEnumerable;var Dn=(o,e,n)=>e in o?he(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,f=(o,e)=>{for(var n in e||(e={}))Ao.call(e,n)&&Dn(o,n,e[n]);if(Oe)for(var n of Oe(e))Pn.call(e,n)&&Dn(o,n,e[n]);return o},b=(o,e)=>Ca(o,Da(e));var On=(o,e)=>{var n={};for(var r in o)Ao.call(o,r)&&e.indexOf(r)<0&&(n[r]=o[r]);if(o!=null&&Oe)for(var r of Oe(o))e.indexOf(r)<0&&Pn.call(o,r)&&(n[r]=o[r]);return n};var g=(o,e)=>()=>(o&&(e=o(o=0)),e);var Me=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),M=(o,e)=>{for(var n in e)he(o,n,{get:e[n],enumerable:!0})},Mn=(o,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Pa(e))!Ao.call(o,a)&&a!==n&&he(o,a,{get:()=>e[a],enumerable:!(r=Ra(e,a))||r.enumerable});return o};var T=(o,e,n)=>(n=o!=null?Na(Oa(o)):{},Mn(e||!o||!o.__esModule?he(n,"default",{value:o,enumerable:!0}):n,o)),z=o=>Mn(he({},"__esModule",{value:!0}),o);var Io=(o,e,n)=>new Promise((r,a)=>{var m=d=>{try{l(n.next(d))}catch(h){a(h)}},s=d=>{try{l(n.throw(d))}catch(h){a(h)}},l=d=>d.done?r(d.value):Promise.resolve(d.value).then(m,s);l((n=n.apply(o,e)).next())});var Un=Me(Fe=>{"use strict";t();Fe.byteLength=Fa;Fe.toByteArray=Ua;Fe.fromByteArray=Ga;var F=[],R=[],Ma=typeof Uint8Array!="undefined"?Uint8Array:Array,Lo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(oe=0,Fn=Lo.length;oe<Fn;++oe)F[oe]=Lo[oe],R[Lo.charCodeAt(oe)]=oe;var oe,Fn;R["-".charCodeAt(0)]=62;R["_".charCodeAt(0)]=63;function Bn(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=o.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function Fa(o){var e=Bn(o),n=e[0],r=e[1];return(n+r)*3/4-r}function Ba(o,e,n){return(e+n)*3/4-n}function Ua(o){var e,n=Bn(o),r=n[0],a=n[1],m=new Ma(Ba(o,r,a)),s=0,l=a>0?r-4:r,d;for(d=0;d<l;d+=4)e=R[o.charCodeAt(d)]<<18|R[o.charCodeAt(d+1)]<<12|R[o.charCodeAt(d+2)]<<6|R[o.charCodeAt(d+3)],m[s++]=e>>16&255,m[s++]=e>>8&255,m[s++]=e&255;return a===2&&(e=R[o.charCodeAt(d)]<<2|R[o.charCodeAt(d+1)]>>4,m[s++]=e&255),a===1&&(e=R[o.charCodeAt(d)]<<10|R[o.charCodeAt(d+1)]<<4|R[o.charCodeAt(d+2)]>>2,m[s++]=e>>8&255,m[s++]=e&255),m}function Wa(o){return F[o>>18&63]+F[o>>12&63]+F[o>>6&63]+F[o&63]}function Va(o,e,n){for(var r,a=[],m=e;m<n;m+=3)r=(o[m]<<16&16711680)+(o[m+1]<<8&65280)+(o[m+2]&255),a.push(Wa(r));return a.join("")}function Ga(o){for(var e,n=o.length,r=n%3,a=[],m=16383,s=0,l=n-r;s<l;s+=m)a.push(Va(o,s,s+m>l?l:s+m));return r===1?(e=o[n-1],a.push(F[e>>2]+F[e<<4&63]+"==")):r===2&&(e=(o[n-2]<<8)+o[n-1],a.push(F[e>>10]+F[e>>4&63]+F[e<<2&63]+"=")),a.join("")}});var Wn=Me(Eo=>{t();Eo.read=function(o,e,n,r,a){var m,s,l=a*8-r-1,d=(1<<l)-1,h=d>>1,y=-7,x=n?a-1:0,L=n?-1:1,I=o[e+x];for(x+=L,m=I&(1<<-y)-1,I>>=-y,y+=l;y>0;m=m*256+o[e+x],x+=L,y-=8);for(s=m&(1<<-y)-1,m>>=-y,y+=r;y>0;s=s*256+o[e+x],x+=L,y-=8);if(m===0)m=1-h;else{if(m===d)return s?NaN:(I?-1:1)*(1/0);s=s+Math.pow(2,r),m=m-h}return(I?-1:1)*s*Math.pow(2,m-r)};Eo.write=function(o,e,n,r,a,m){var s,l,d,h=m*8-a-1,y=(1<<h)-1,x=y>>1,L=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,I=r?0:m-1,H=r?1:-1,Pe=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,s=y):(s=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-s))<1&&(s--,d*=2),s+x>=1?e+=L/d:e+=L*Math.pow(2,1-x),e*d>=2&&(s++,d/=2),s+x>=y?(l=0,s=y):s+x>=1?(l=(e*d-1)*Math.pow(2,a),s=s+x):(l=e*Math.pow(2,x-1)*Math.pow(2,a),s=0));a>=8;o[n+I]=l&255,I+=H,l/=256,a-=8);for(s=s<<a|l,h+=a;h>0;o[n+I]=s&255,I+=H,s/=256,h-=8);o[n+I-H]|=Pe*128}});var Qn=Me(ce=>{"use strict";t();var No=Un(),pe=Wn(),Vn=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ce.Buffer=_;ce.SlowBuffer=Ka;ce.INSPECT_MAX_BYTES=50;var Be=2147483647;ce.kMaxLength=Be;_.TYPED_ARRAY_SUPPORT=$a();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function $a(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(n){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function q(o){if(o>Be)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,_.prototype),e}function _(o,e,n){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Po(o)}return Hn(o,e,n)}_.poolSize=8192;function Hn(o,e,n){if(typeof o=="string")return ja(o,e);if(ArrayBuffer.isView(o))return za(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(B(o,ArrayBuffer)||o&&B(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(o,SharedArrayBuffer)||o&&B(o.buffer,SharedArrayBuffer)))return Ro(o,e,n);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=o.valueOf&&o.valueOf();if(r!=null&&r!==o)return _.from(r,e,n);var a=qa(o);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return _.from(o[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}_.from=function(o,e,n){return Hn(o,e,n)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function jn(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function Ha(o,e,n){return jn(o),o<=0?q(o):e!==void 0?typeof n=="string"?q(o).fill(e,n):q(o).fill(e):q(o)}_.alloc=function(o,e,n){return Ha(o,e,n)};function Po(o){return jn(o),q(o<0?0:Oo(o)|0)}_.allocUnsafe=function(o){return Po(o)};_.allocUnsafeSlow=function(o){return Po(o)};function ja(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!_.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=zn(o,e)|0,r=q(n),a=r.write(o,e);return a!==n&&(r=r.slice(0,a)),r}function Co(o){for(var e=o.length<0?0:Oo(o.length)|0,n=q(e),r=0;r<e;r+=1)n[r]=o[r]&255;return n}function za(o){if(B(o,Uint8Array)){var e=new Uint8Array(o);return Ro(e.buffer,e.byteOffset,e.byteLength)}return Co(o)}function Ro(o,e,n){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&n===void 0?r=new Uint8Array(o):n===void 0?r=new Uint8Array(o,e):r=new Uint8Array(o,e,n),Object.setPrototypeOf(r,_.prototype),r}function qa(o){if(_.isBuffer(o)){var e=Oo(o.length)|0,n=q(e);return n.length===0||o.copy(n,0,0,e),n}if(o.length!==void 0)return typeof o.length!="number"||Mo(o.length)?q(0):Co(o);if(o.type==="Buffer"&&Array.isArray(o.data))return Co(o.data)}function Oo(o){if(o>=Be)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Be.toString(16)+" bytes");return o|0}function Ka(o){return+o!=o&&(o=0),_.alloc(+o)}_.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==_.prototype};_.compare=function(e,n){if(B(e,Uint8Array)&&(e=_.from(e,e.offset,e.byteLength)),B(n,Uint8Array)&&(n=_.from(n,n.offset,n.byteLength)),!_.isBuffer(e)||!_.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;for(var r=e.length,a=n.length,m=0,s=Math.min(r,a);m<s;++m)if(e[m]!==n[m]){r=e[m],a=n[m];break}return r<a?-1:a<r?1:0};_.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return _.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<e.length;++r)n+=e[r].length;var a=_.allocUnsafe(n),m=0;for(r=0;r<e.length;++r){var s=e[r];if(B(s,Uint8Array))m+s.length>a.length?_.from(s).copy(a,m):Uint8Array.prototype.set.call(a,s,m);else if(_.isBuffer(s))s.copy(a,m);else throw new TypeError('"list" argument must be an Array of Buffers');m+=s.length}return a};function zn(o,e){if(_.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||B(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var n=o.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Do(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Jn(o).length;default:if(a)return r?-1:Do(o).length;e=(""+e).toLowerCase(),a=!0}}_.byteLength=zn;function Xa(o,e,n){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return ai(this,e,n);case"utf8":case"utf-8":return Kn(this,e,n);case"ascii":return ti(this,e,n);case"latin1":case"binary":return ri(this,e,n);case"base64":return oi(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ii(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function ne(o,e,n){var r=o[e];o[e]=o[n],o[n]=r}_.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<e;n+=2)ne(this,n,n+1);return this};_.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<e;n+=4)ne(this,n,n+3),ne(this,n+1,n+2);return this};_.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<e;n+=8)ne(this,n,n+7),ne(this,n+1,n+6),ne(this,n+2,n+5),ne(this,n+3,n+4);return this};_.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Kn(this,0,e):Xa.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(e){if(!_.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:_.compare(this,e)===0};_.prototype.inspect=function(){var e="",n=ce.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};Vn&&(_.prototype[Vn]=_.prototype.inspect);_.prototype.compare=function(e,n,r,a,m){if(B(e,Uint8Array)&&(e=_.from(e,e.offset,e.byteLength)),!_.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),r===void 0&&(r=e?e.length:0),a===void 0&&(a=0),m===void 0&&(m=this.length),n<0||r>e.length||a<0||m>this.length)throw new RangeError("out of range index");if(a>=m&&n>=r)return 0;if(a>=m)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,a>>>=0,m>>>=0,this===e)return 0;for(var s=m-a,l=r-n,d=Math.min(s,l),h=this.slice(a,m),y=e.slice(n,r),x=0;x<d;++x)if(h[x]!==y[x]){s=h[x],l=y[x];break}return s<l?-1:l<s?1:0};function qn(o,e,n,r,a){if(o.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Mo(n)&&(n=a?0:o.length-1),n<0&&(n=o.length+n),n>=o.length){if(a)return-1;n=o.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof e=="string"&&(e=_.from(e,r)),_.isBuffer(e))return e.length===0?-1:Gn(o,e,n,r,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(o,e,n):Uint8Array.prototype.lastIndexOf.call(o,e,n):Gn(o,[e],n,r,a);throw new TypeError("val must be string, number or Buffer")}function Gn(o,e,n,r,a){var m=1,s=o.length,l=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(o.length<2||e.length<2)return-1;m=2,s/=2,l/=2,n/=2}function d(I,H){return m===1?I[H]:I.readUInt16BE(H*m)}var h;if(a){var y=-1;for(h=n;h<s;h++)if(d(o,h)===d(e,y===-1?0:h-y)){if(y===-1&&(y=h),h-y+1===l)return y*m}else y!==-1&&(h-=h-y),y=-1}else for(n+l>s&&(n=s-l),h=n;h>=0;h--){for(var x=!0,L=0;L<l;L++)if(d(o,h+L)!==d(e,L)){x=!1;break}if(x)return h}return-1}_.prototype.includes=function(e,n,r){return this.indexOf(e,n,r)!==-1};_.prototype.indexOf=function(e,n,r){return qn(this,e,n,r,!0)};_.prototype.lastIndexOf=function(e,n,r){return qn(this,e,n,r,!1)};function Ya(o,e,n,r){n=Number(n)||0;var a=o.length-n;r?(r=Number(r),r>a&&(r=a)):r=a;var m=e.length;r>m/2&&(r=m/2);for(var s=0;s<r;++s){var l=parseInt(e.substr(s*2,2),16);if(Mo(l))return s;o[n+s]=l}return s}function Za(o,e,n,r){return Ue(Do(e,o.length-n),o,n,r)}function Ja(o,e,n,r){return Ue(mi(e),o,n,r)}function Qa(o,e,n,r){return Ue(Jn(e),o,n,r)}function ei(o,e,n,r){return Ue(si(e,o.length-n),o,n,r)}_.prototype.write=function(e,n,r,a){if(n===void 0)a="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")a=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var m=this.length-n;if((r===void 0||r>m)&&(r=m),e.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var s=!1;;)switch(a){case"hex":return Ya(this,e,n,r);case"utf8":case"utf-8":return Za(this,e,n,r);case"ascii":case"latin1":case"binary":return Ja(this,e,n,r);case"base64":return Qa(this,e,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ei(this,e,n,r);default:if(s)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),s=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function oi(o,e,n){return e===0&&n===o.length?No.fromByteArray(o):No.fromByteArray(o.slice(e,n))}function Kn(o,e,n){n=Math.min(o.length,n);for(var r=[],a=e;a<n;){var m=o[a],s=null,l=m>239?4:m>223?3:m>191?2:1;if(a+l<=n){var d,h,y,x;switch(l){case 1:m<128&&(s=m);break;case 2:d=o[a+1],(d&192)===128&&(x=(m&31)<<6|d&63,x>127&&(s=x));break;case 3:d=o[a+1],h=o[a+2],(d&192)===128&&(h&192)===128&&(x=(m&15)<<12|(d&63)<<6|h&63,x>2047&&(x<55296||x>57343)&&(s=x));break;case 4:d=o[a+1],h=o[a+2],y=o[a+3],(d&192)===128&&(h&192)===128&&(y&192)===128&&(x=(m&15)<<18|(d&63)<<12|(h&63)<<6|y&63,x>65535&&x<1114112&&(s=x))}}s===null?(s=65533,l=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),a+=l}return ni(r)}var $n=4096;function ni(o){var e=o.length;if(e<=$n)return String.fromCharCode.apply(String,o);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,o.slice(r,r+=$n));return n}function ti(o,e,n){var r="";n=Math.min(o.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(o[a]&127);return r}function ri(o,e,n){var r="";n=Math.min(o.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(o[a]);return r}function ai(o,e,n){var r=o.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var a="",m=e;m<n;++m)a+=_i[o[m]];return a}function ii(o,e,n){for(var r=o.slice(e,n),a="",m=0;m<r.length-1;m+=2)a+=String.fromCharCode(r[m]+r[m+1]*256);return a}_.prototype.slice=function(e,n){var r=this.length;e=~~e,n=n===void 0?r:~~n,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<e&&(n=e);var a=this.subarray(e,n);return Object.setPrototypeOf(a,_.prototype),a};function v(o,e,n){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>n)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||v(e,n,this.length);for(var a=this[e],m=1,s=0;++s<n&&(m*=256);)a+=this[e+s]*m;return a};_.prototype.readUintBE=_.prototype.readUIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||v(e,n,this.length);for(var a=this[e+--n],m=1;n>0&&(m*=256);)a+=this[e+--n]*m;return a};_.prototype.readUint8=_.prototype.readUInt8=function(e,n){return e=e>>>0,n||v(e,1,this.length),this[e]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||v(e,2,this.length),this[e]|this[e+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||v(e,2,this.length),this[e]<<8|this[e+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||v(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||v(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};_.prototype.readIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||v(e,n,this.length);for(var a=this[e],m=1,s=0;++s<n&&(m*=256);)a+=this[e+s]*m;return m*=128,a>=m&&(a-=Math.pow(2,8*n)),a};_.prototype.readIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||v(e,n,this.length);for(var a=n,m=1,s=this[e+--a];a>0&&(m*=256);)s+=this[e+--a]*m;return m*=128,s>=m&&(s-=Math.pow(2,8*n)),s};_.prototype.readInt8=function(e,n){return e=e>>>0,n||v(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};_.prototype.readInt16LE=function(e,n){e=e>>>0,n||v(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(e,n){e=e>>>0,n||v(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(e,n){return e=e>>>0,n||v(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};_.prototype.readInt32BE=function(e,n){return e=e>>>0,n||v(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};_.prototype.readFloatLE=function(e,n){return e=e>>>0,n||v(e,4,this.length),pe.read(this,e,!0,23,4)};_.prototype.readFloatBE=function(e,n){return e=e>>>0,n||v(e,4,this.length),pe.read(this,e,!1,23,4)};_.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||v(e,8,this.length),pe.read(this,e,!0,52,8)};_.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||v(e,8,this.length),pe.read(this,e,!1,52,8)};function E(o,e,n,r,a,m){if(!_.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<m)throw new RangeError('"value" argument is out of bounds');if(n+r>o.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(e,n,r,a){if(e=+e,n=n>>>0,r=r>>>0,!a){var m=Math.pow(2,8*r)-1;E(this,e,n,r,m,0)}var s=1,l=0;for(this[n]=e&255;++l<r&&(s*=256);)this[n+l]=e/s&255;return n+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(e,n,r,a){if(e=+e,n=n>>>0,r=r>>>0,!a){var m=Math.pow(2,8*r)-1;E(this,e,n,r,m,0)}var s=r-1,l=1;for(this[n+s]=e&255;--s>=0&&(l*=256);)this[n+s]=e/l&255;return n+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,1,255,0),this[n]=e&255,n+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};_.prototype.writeIntLE=function(e,n,r,a){if(e=+e,n=n>>>0,!a){var m=Math.pow(2,8*r-1);E(this,e,n,r,m-1,-m)}var s=0,l=1,d=0;for(this[n]=e&255;++s<r&&(l*=256);)e<0&&d===0&&this[n+s-1]!==0&&(d=1),this[n+s]=(e/l>>0)-d&255;return n+r};_.prototype.writeIntBE=function(e,n,r,a){if(e=+e,n=n>>>0,!a){var m=Math.pow(2,8*r-1);E(this,e,n,r,m-1,-m)}var s=r-1,l=1,d=0;for(this[n+s]=e&255;--s>=0&&(l*=256);)e<0&&d===0&&this[n+s+1]!==0&&(d=1),this[n+s]=(e/l>>0)-d&255;return n+r};_.prototype.writeInt8=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};_.prototype.writeInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};_.prototype.writeInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};_.prototype.writeInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};_.prototype.writeInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||E(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function Xn(o,e,n,r,a,m){if(n+r>o.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Yn(o,e,n,r,a){return e=+e,n=n>>>0,a||Xn(o,e,n,4,34028234663852886e22,-34028234663852886e22),pe.write(o,e,n,r,23,4),n+4}_.prototype.writeFloatLE=function(e,n,r){return Yn(this,e,n,!0,r)};_.prototype.writeFloatBE=function(e,n,r){return Yn(this,e,n,!1,r)};function Zn(o,e,n,r,a){return e=+e,n=n>>>0,a||Xn(o,e,n,8,17976931348623157e292,-17976931348623157e292),pe.write(o,e,n,r,52,8),n+8}_.prototype.writeDoubleLE=function(e,n,r){return Zn(this,e,n,!0,r)};_.prototype.writeDoubleBE=function(e,n,r){return Zn(this,e,n,!1,r)};_.prototype.copy=function(e,n,r,a){if(!_.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),n>=e.length&&(n=e.length),n||(n=0),a>0&&a<r&&(a=r),a===r||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-n<a-r&&(a=e.length-n+r);var m=a-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),n),m};_.prototype.fill=function(e,n,r,a){if(typeof e=="string"){if(typeof n=="string"?(a=n,n=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!_.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var m=e.charCodeAt(0);(a==="utf8"&&m<128||a==="latin1")&&(e=m)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=n;s<r;++s)this[s]=e;else{var l=_.isBuffer(e)?e:_.from(e,a),d=l.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-n;++s)this[s+n]=l[s%d]}return this};var pi=/[^+/0-9A-Za-z-_]/g;function ci(o){if(o=o.split("=")[0],o=o.trim().replace(pi,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function Do(o,e){e=e||1/0;for(var n,r=o.length,a=null,m=[],s=0;s<r;++s){if(n=o.charCodeAt(s),n>55295&&n<57344){if(!a){if(n>56319){(e-=3)>-1&&m.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&m.push(239,191,189);continue}a=n;continue}if(n<56320){(e-=3)>-1&&m.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(e-=3)>-1&&m.push(239,191,189);if(a=null,n<128){if((e-=1)<0)break;m.push(n)}else if(n<2048){if((e-=2)<0)break;m.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;m.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;m.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return m}function mi(o){for(var e=[],n=0;n<o.length;++n)e.push(o.charCodeAt(n)&255);return e}function si(o,e){for(var n,r,a,m=[],s=0;s<o.length&&!((e-=2)<0);++s)n=o.charCodeAt(s),r=n>>8,a=n%256,m.push(a),m.push(r);return m}function Jn(o){return No.toByteArray(ci(o))}function Ue(o,e,n,r){for(var a=0;a<r&&!(a+n>=e.length||a>=o.length);++a)e[a+n]=o[a];return a}function B(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Mo(o){return o!==o}var _i=function(){for(var o="0123456789abcdef",e=new Array(256),n=0;n<16;++n)for(var r=n*16,a=0;a<16;++a)e[r+a]=o[n]+o[a];return e}()});var rt=Me((gc,tt)=>{t();var w=tt.exports={},U,W;function Fo(){throw new Error("setTimeout has not been defined")}function Bo(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?U=setTimeout:U=Fo}catch(o){U=Fo}try{typeof clearTimeout=="function"?W=clearTimeout:W=Bo}catch(o){W=Bo}})();function et(o){if(U===setTimeout)return setTimeout(o,0);if((U===Fo||!U)&&setTimeout)return U=setTimeout,setTimeout(o,0);try{return U(o,0)}catch(e){try{return U.call(null,o,0)}catch(n){return U.call(this,o,0)}}}function di(o){if(W===clearTimeout)return clearTimeout(o);if((W===Bo||!W)&&clearTimeout)return W=clearTimeout,clearTimeout(o);try{return W(o)}catch(e){try{return W.call(null,o)}catch(n){return W.call(this,o)}}}var K=[],me=!1,te,We=-1;function li(){!me||!te||(me=!1,te.length?K=te.concat(K):We=-1,K.length&&ot())}function ot(){if(!me){var o=et(li);me=!0;for(var e=K.length;e;){for(te=K,K=[];++We<e;)te&&te[We].run();We=-1,e=K.length}te=null,me=!1,di(o)}}w.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];K.push(new nt(o,e)),K.length===1&&!me&&et(ot)};function nt(o,e){this.fun=o,this.array=e}nt.prototype.run=function(){this.fun.apply(null,this.array)};w.title="browser";w.browser=!0;w.env={};w.argv=[];w.version="";w.versions={};function X(){}w.on=X;w.addListener=X;w.once=X;w.off=X;w.removeListener=X;w.removeAllListeners=X;w.emit=X;w.prependListener=X;w.prependOnceListener=X;w.listeners=function(o){return[]};w.binding=function(o){throw new Error("process.binding is not supported")};w.cwd=function(){return"/"};w.chdir=function(o){throw new Error("process.chdir is not supported")};w.umask=function(){return 0}});var i,p,uc,t=g(()=>{i=T(Qn()),p=T(rt()),uc=function(o){function e(){var r=this||self;return delete o.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var n=__magic__;return n}(Object)});var se,xe=g(()=>{"use strict";t();se=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Uo={};M(Uo,{css:()=>pt,default:()=>ui});var pt,ui,Wo=g(()=>{"use strict";t();pt=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pt));ui={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var st=g(()=>{"use strict";t()});var _t=g(()=>{"use strict";t()});var dt=g(()=>{"use strict";t()});var Go,lt=g(()=>{"use strict";t();Go=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(Go||{})});var gt=g(()=>{"use strict";t()});var $o=g(()=>{"use strict";t()});var ut=g(()=>{"use strict";t()});var ft=g(()=>{"use strict";t()});var ht=g(()=>{"use strict";t()});var xt=g(()=>{"use strict";t()});var xi,_e,yt=g(()=>{"use strict";t();xi=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),_e=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var bt,Mc,Tt,Fc,Y=g(()=>{"use strict";t();yt();bt=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(bt||{}),Mc=f(f({},_e.WindowProviderRequestEnums),bt),Tt=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(Tt||{}),Fc=f(f({},_e.WindowProviderResponseEnums),Tt)});var St=g(()=>{"use strict";t()});var wt=g(()=>{"use strict";t()});var N=g(()=>{"use strict";t()});var kt=g(()=>{"use strict";t()});var vt=g(()=>{"use strict";t()});var At=g(()=>{"use strict";t()});var P=g(()=>{"use strict";t();ft();ht();xt();Y();St();wt();N();kt();vt();At()});var Ho,It,em,Lt,om,Et,nm,tm,rm,Nt=g(()=>{"use strict";t();P();Ho={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:It,egldLabel:em}=Ho["devnet"],{chainId:Lt,egldLabel:om}=Ho["testnet"],{chainId:Et,egldLabel:nm}=Ho["mainnet"],tm={["devnet"]:It,["testnet"]:Lt,["mainnet"]:Et},rm={[It]:"devnet",[Lt]:"testnet",[Et]:"mainnet"}});var jo=g(()=>{"use strict";t()});var V,Ct=g(()=>{"use strict";t();V=require("@multiversx/sdk-web-wallet-provider")});var Ge,zo=g(()=>{"use strict";t();Ge=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Rt,Dt,qo,sm,_m,Pt=g(()=>{"use strict";t();zo();qo=String((Dt=(Rt=Ge.safeWindow)==null?void 0:Rt.navigator)==null?void 0:Dt.userAgent),sm=/^((?!chrome|android).)*safari/i.test(qo),_m=/firefox/i.test(qo)&&/windows/i.test(qo)});var Ko,Xo,Ot,$e,Mt,de,S=g(()=>{"use strict";t();st();_t();dt();lt();gt();$o();ut();Nt();jo();Ct();Pt();Ko=5e4,Xo=1e9,Ot=1,$e="logout",Mt="login",de="0"});var He,Yo=g(()=>{"use strict";t();He=()=>Date.now()/1e3});var Ft=g(()=>{"use strict";t()});var Bt=g(()=>{"use strict";t()});var Ut=g(()=>{"use strict";t();Yo();Ft();Bt()});var Zo={};M(Zo,{clear:()=>Si,getItem:()=>bi,localStorageKeys:()=>re,removeItem:()=>Ti,setItem:()=>yi});var re,je,yi,bi,Ti,Si,Te=g(()=>{"use strict";t();Ut();re={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},je=typeof localStorage!="undefined",yi=({key:o,data:e,expires:n})=>{!je||localStorage.setItem(String(o),JSON.stringify({expires:n,data:e}))},bi=o=>{if(!je)return;let e=localStorage.getItem(String(o));if(!e)return null;let n=JSON.parse(e);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:He()>=n.expires?(localStorage.removeItem(String(o)),null):n.data},Ti=o=>{!je||localStorage.removeItem(String(o))},Si=()=>{!je||localStorage.clear()}});var Jo={};M(Jo,{clear:()=>$t,getItem:()=>Vt,removeItem:()=>Gt,setItem:()=>Wt,storage:()=>wi});var Wt,Vt,Gt,$t,wi,Ht=g(()=>{"use strict";t();Wt=({key:o,data:e,expires:n})=>{sessionStorage.setItem(String(o),JSON.stringify({expires:n,data:e}))},Vt=o=>{let e=sessionStorage.getItem(String(o));if(!e)return null;let n=JSON.parse(e);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(o)),null):n.data},Gt=o=>sessionStorage.removeItem(String(o)),$t=()=>sessionStorage.clear(),wi={setItem:Wt,getItem:Vt,removeItem:Gt,clear:$t}});var le,ze=g(()=>{"use strict";t();Te();Ht();le={session:Jo,local:Zo}});var Qo,k,qe,O=g(()=>{"use strict";t();Qo=require("@reduxjs/toolkit");S();k=(0,Qo.createAction)($e),qe=(0,Qo.createAction)(Mt,o=>({payload:o}))});var on,jt,zt,Ke,en,qt,Kt,Gm,Xt,$m,Hm,jm,zm,qm,Km,Xm,Ym,Xe,Ye=g(()=>{"use strict";t();on=require("@multiversx/sdk-core"),jt=require("@reduxjs/toolkit"),zt=require("redux-persist");S();ze();Te();O();Ke={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:de},en={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Ke},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},qt=(0,jt.createSlice)({name:"accountInfoSlice",initialState:en,reducers:{setAddress:(o,e)=>{let n=e.payload;o.address=n,o.publicKey=n?new on.Address(n).hex():""},setAccount:(o,e)=>{let n=o.address===e.payload.address;o.accounts={[o.address]:n?e.payload:Ke},o.shard=e.payload.shard,o.isAccountLoading=!1,o.accountLoadingError=null},setAccountNonce:(o,e)=>{let{address:n}=o;o.accounts[n].nonce=e.payload},setAccountShard:(o,e)=>{o.shard=e.payload},setLedgerAccount:(o,e)=>{o.ledgerAccount=e.payload},updateLedgerAccount:(o,e)=>{o.ledgerAccount!=null&&(o.ledgerAccount.index=e.payload.index,o.ledgerAccount.address=e.payload.address)},setWalletConnectAccount:(o,e)=>{o.walletConnectAccount=e.payload},setIsAccountLoading:(o,e)=>{o.isAccountLoading=e.payload,o.accountLoadingError=null},setAccountLoadingError:(o,e)=>{o.accountLoadingError=e.payload,o.isAccountLoading=!1},setWebsocketEvent:(o,e)=>{o.websocketEvent={timestamp:Date.now(),message:e.payload}},setWebsocketBatchEvent:(o,e)=>{o.websocketBatchEvent={timestamp:Date.now(),data:e.payload}}},extraReducers:o=>{o.addCase(k,()=>(le.local.removeItem(re.loginExpiresAt),en)),o.addCase(qe,(e,n)=>{let{address:r}=n.payload;e.address=r,e.publicKey=new on.Address(r).hex()}),o.addCase(zt.REHYDRATE,(e,n)=>{var h;if(!((h=n.payload)!=null&&h.account))return;let{account:r}=n.payload,{address:a,shard:m,accounts:s,publicKey:l}=r;e.address=a,e.shard=m;let d=s&&a in s;e.accounts=d?s:en.accounts,e.publicKey=l})}}),{setAccount:Kt,setAddress:Gm,setAccountNonce:Xt,setAccountShard:$m,setLedgerAccount:Hm,updateLedgerAccount:jm,setWalletConnectAccount:zm,setIsAccountLoading:qm,setAccountLoadingError:Km,setWebsocketEvent:Xm,setWebsocketBatchEvent:Ym}=qt.actions,Xe=qt.reducer});function Se(){return new Date().setHours(new Date().getHours()+24)}function we(o){le.local.setItem({key:re.loginExpiresAt,data:o,expires:o})}var nn=g(()=>{"use strict";t();ze();Te()});var Zt,Yt,Jt,ps,cs,ms,ss,_s,ds,Qt,ls,gs,us,Ze,Je=g(()=>{"use strict";t();Zt=require("@reduxjs/toolkit");nn();Y();O();Yt={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Jt=(0,Zt.createSlice)({name:"loginInfoSlice",initialState:Yt,reducers:{setLoginMethod:(o,e)=>{o.loginMethod=e.payload},setTokenLogin:(o,e)=>{o.tokenLogin=e.payload},setTokenLoginSignature:(o,e)=>{(o==null?void 0:o.tokenLogin)!=null&&(o.tokenLogin.signature=e.payload)},setWalletLogin:(o,e)=>{o.walletLogin=e.payload},setWalletConnectLogin:(o,e)=>{o.walletConnectLogin=e.payload},setLedgerLogin:(o,e)=>{o.ledgerLogin=e.payload},setWebviewLogin:(o,e)=>{o.webviewLogin=e.payload},invalidateLoginSession:o=>{o.isLoginSessionInvalid=!0},setLogoutRoute:(o,e)=>{o.logoutRoute=e.payload},setIsWalletConnectV2Initialized:(o,e)=>{o.isWalletConnectV2Initialized=e.payload}},extraReducers:o=>{o.addCase(k,()=>Yt),o.addCase(qe,(e,n)=>{e.isLoginSessionInvalid=!1,e.loginMethod=n.payload.loginMethod,e.iframeLoginType=n.payload.iframeLoginType,we(Se())})}}),{setLoginMethod:ps,setWalletConnectLogin:cs,setLedgerLogin:ms,setTokenLogin:ss,setTokenLoginSignature:_s,setWalletLogin:ds,invalidateLoginSession:Qt,setLogoutRoute:ls,setIsWalletConnectV2Initialized:gs,setWebviewLogin:us}=Jt.actions,Ze=Jt.reducer});var or,er,nr,ys,bs,Ts,Ss,Qe,eo=g(()=>{"use strict";t();or=require("@reduxjs/toolkit");O();er={},nr=(0,or.createSlice)({name:"modalsSlice",initialState:er,reducers:{setTxSubmittedModal:(o,e)=>{o.txSubmittedModal=e.payload},setNotificationModal:(o,e)=>{o.notificationModal=e.payload},clearTxSubmittedModal:o=>{o.txSubmittedModal=void 0},clearNotificationModal:o=>{o.notificationModal=void 0}},extraReducers:o=>{o.addCase(k,()=>er)}}),{setTxSubmittedModal:ys,setNotificationModal:bs,clearTxSubmittedModal:Ts,clearNotificationModal:Ss}=nr.actions,Qe=nr.reducer});var ge=g(()=>{"use strict";t();xe()});var tr=g(()=>{"use strict";t();ge()});var rr=g(()=>{"use strict";t();oo()});var ar=g(()=>{"use strict";t();zo()});var oo=g(()=>{"use strict";t();tr();rr();ge();ar()});var ir=g(()=>{"use strict";t();oo()});var pr=g(()=>{"use strict";t();ir()});function cr(o){return o[Math.floor(Math.random()*o.length)]}var mr=g(()=>{"use strict";t()});var sr=g(()=>{"use strict";t();$o()});var _r=g(()=>{"use strict";t();pr();mr();sr()});var dr,lr,gr,tn,vi,ur,o_,n_,t_,no,to=g(()=>{"use strict";t();dr=require("@reduxjs/toolkit"),lr=T(require("lodash.omit")),gr=require("redux-persist");jo();O();_r();tn={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},vi={network:tn},ur=(0,dr.createSlice)({name:"appConfig",initialState:vi,reducers:{initializeNetworkConfig:(o,e)=>{let n=cr(e.payload.walletConnectV2RelayAddresses),r=(0,lr.default)(e.payload,"walletConnectV2RelayAddresses");o.network=b(f(f({},o.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(o,e)=>{o.network=f(f({},o.network),e.payload)},setCustomWalletAddress:(o,e)=>{o.network.customWalletAddress=e.payload}},extraReducers:o=>{o.addCase(k,e=>{e.network.customWalletAddress=void 0}),o.addCase(gr.REHYDRATE,(e,n)=>{var a,m;if(!((m=(a=n.payload)==null?void 0:a.network)!=null&&m.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;e.network.customWalletAddress=r})}}),{initializeNetworkConfig:o_,updateNetworkConfig:n_,setCustomWalletAddress:t_}=ur.actions,no=ur.reducer});var fr,rn,hr,m_,s_,__,ro,ao=g(()=>{"use strict";t();fr=require("@reduxjs/toolkit");P();O();rn={isSigning:!1,signedSessions:{}},hr=(0,fr.createSlice)({name:"signedMessageInfoSliceState",initialState:rn,reducers:{setSignSession:(o,e)=>{let{sessionId:n,signedSession:r,errorMessage:a}=e.payload;a&&(o.errorMessage=a),o.isSigning=r.status==="pending",o.signedSessions[n]=f(f({},o.signedSessions[n]),r)},setSignSessionState:(o,e)=>f(f({},o),e.payload),clearSignedMessageInfo:()=>rn},extraReducers:o=>{o.addCase(k,()=>rn)}}),{setSignSession:m_,clearSignedMessageInfo:s_,setSignSessionState:__}=hr.actions,ro=hr.reducer});var yr,br,xr,Tr,x_,y_,b_,T_,io,po=g(()=>{"use strict";t();yr=require("@reduxjs/toolkit"),br=require("redux-persist");P();Yo();O();xr={customToasts:[],transactionToasts:[]},Tr=(0,yr.createSlice)({name:"toastsSlice",initialState:xr,reducers:{addCustomToast:(o,e)=>{let n=e.payload.toastId||`custom-toast-${o.customToasts.length+1}`,r=o.customToasts.findIndex(a=>a.toastId===n);if(r!==-1){o.customToasts[r]=b(f(f({},o.customToasts[r]),e.payload),{type:"custom",toastId:n});return}o.customToasts.push(b(f({},e.payload),{type:"custom",toastId:n}))},removeCustomToast:(o,e)=>{o.customToasts=o.customToasts.filter(n=>n.toastId!==e.payload)},addTransactionToast:(o,e)=>{o.transactionToasts.push({type:"transaction",startTimestamp:He(),toastId:e.payload||`custom-toast-${o.transactionToasts.length+1}`})},removeTransactionToast:(o,e)=>{o.transactionToasts=o.transactionToasts.filter(n=>n.toastId!==e.payload)}},extraReducers:o=>{o.addCase(k,()=>xr),o.addCase(br.REHYDRATE,(e,n)=>{var a,m;let r=(m=(a=n.customToasts)==null?void 0:a.filter(s=>!("component"in s)))!=null?m:[];e.customToasts=r})}}),{addCustomToast:x_,removeCustomToast:y_,addTransactionToast:b_,removeTransactionToast:T_}=Tr.actions,io=Tr.reducer});var Sr,pn,cn,mn,Ai,an,wr,v_,A_,I_,co,mo=g(()=>{"use strict";t();Sr=require("@reduxjs/toolkit");O();pn="Transaction failed",cn="Transaction successful",mn="Processing transaction",Ai="Transaction submitted",an={},wr=(0,Sr.createSlice)({name:"transactionsInfo",initialState:an,reducers:{setTransactionsDisplayInfo(o,e){let{sessionId:n,transactionsDisplayInfo:r}=e.payload;n!=null&&(o[n]={errorMessage:(r==null?void 0:r.errorMessage)||pn,successMessage:(r==null?void 0:r.successMessage)||cn,processingMessage:(r==null?void 0:r.processingMessage)||mn,submittedMessage:(r==null?void 0:r.submittedMessage)||Ai,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(o,e){e.payload!=null&&delete o[e.payload]},clearTransactionsInfo:()=>an},extraReducers:o=>{o.addCase(k,()=>an)}}),{clearTransactionsInfo:v_,setTransactionsDisplayInfo:A_,clearTransactionsInfoForSessionId:I_}=wr.actions,co=wr.reducer});function kr(o){return o!=null&&(Fi(o)||Gi(o))}function so(o){return o!=null&&(Bi(o)||$i(o))}function _o(o){return o!=null&&(Ui(o)||Hi(o))}function vr(o){return o!=null&&(Wi(o)||ji(o))}function Ar(o){return o!=null&&Vi(o)}function Fi(o){return o!=null&&Li.includes(o)}function Bi(o){return o!=null&&Ei.includes(o)}function Ui(o){return o!=null&&Ni.includes(o)}function Wi(o){return o!=null&&Ci.includes(o)}function Vi(o){return o!=null&&Ri.includes(o)}function Gi(o){return o!=null&&Di.includes(o)}function $i(o){return o!=null&&Pi.includes(o)}function Hi(o){return o!=null&&Oi.includes(o)}function ji(o){return o!=null&&Mi.includes(o)}var Li,Ei,Ni,Ci,Ri,Di,Pi,Oi,Mi,_n=g(()=>{"use strict";t();Y();Li=["sent"],Ei=["success"],Ni=["fail","cancelled","timedOut"],Ci=["invalid"],Ri=["timedOut"],Di=["pending"],Pi=["success"],Oi=["fail","invalid"],Mi=["not executed"]});var Ir,Lr,ve,zi,Er,M_,F_,B_,U_,W_,V_,G_,$_,H_,j_,z_,lo,go=g(()=>{"use strict";t();Ir=require("@reduxjs/toolkit"),Lr=require("redux-persist");Y();_n();O();ve={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},zi={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Er=(0,Ir.createSlice)({name:"transactionsSlice",initialState:ve,reducers:{moveTransactionsToSignedState:(o,e)=>{var d,h;let{sessionId:n,transactions:r,errorMessage:a,status:m,redirectRoute:s,customTransactionInformation:l}=e.payload;o.customTransactionInformationForSessionId[n]=f(f(f({},zi),((d=o.signedTransactions[n])==null?void 0:d.customTransactionInformation)||{}),o.customTransactionInformationForSessionId[n]||{}),o.signedTransactions[n]={transactions:r,status:m,errorMessage:a,redirectRoute:s,customTransactionInformation:f(f({},o.customTransactionInformationForSessionId[n]),l!=null?l:{})},((h=o==null?void 0:o.transactionsToSign)==null?void 0:h.sessionId)===n&&(o.transactionsToSign=ve.transactionsToSign)},clearSignedTransaction:(o,e)=>{o.signedTransactions[e.payload]&&delete o.signedTransactions[e.payload]},clearTransactionToSign:o=>{o!=null&&o.transactionsToSign&&(o.transactionsToSign=null)},updateSignedTransaction:(o,e)=>{o.signedTransactions=f(f({},o.signedTransactions),e.payload)},updateSignedTransactions:(o,e)=>{let{sessionId:n,status:r,errorMessage:a,transactions:m}=e.payload;o.signedTransactions[n]!=null&&(o.signedTransactions[n].status=r,a!=null&&(o.signedTransactions[n].errorMessage=a),m!=null&&(o.signedTransactions[n].transactions=m))},updateSignedTransactionStatus:(o,e)=>{var h,y,x,L,I,H,Pe,Rn;let{sessionId:n,status:r,errorMessage:a,transactionHash:m,serverTransaction:s,inTransit:l}=e.payload,d=(y=(h=o.signedTransactions)==null?void 0:h[n])==null?void 0:y.transactions;if(d!=null){o.signedTransactions[n].transactions=d.map(j=>j.hash===m?b(f(f({},s!=null?s:{}),j),{status:r,errorMessage:a,inTransit:l}):j);let Ia=(L=(x=o.signedTransactions[n])==null?void 0:x.transactions)==null?void 0:L.every(j=>so(j.status)),La=(H=(I=o.signedTransactions[n])==null?void 0:I.transactions)==null?void 0:H.some(j=>_o(j.status)),Ea=(Rn=(Pe=o.signedTransactions[n])==null?void 0:Pe.transactions)==null?void 0:Rn.every(j=>vr(j.status));Ia&&(o.signedTransactions[n].status="success"),La&&(o.signedTransactions[n].status="fail"),Ea&&(o.signedTransactions[n].status="invalid")}},setTransactionsToSign:(o,e)=>{o.transactionsToSign=e.payload;let{sessionId:n,customTransactionInformation:r}=e.payload;o.customTransactionInformationForSessionId[n]=r,o.signTransactionsError=null},clearAllTransactionsToSign:o=>{o.transactionsToSign=ve.transactionsToSign,o.signTransactionsError=null},clearAllSignedTransactions:o=>{o.signedTransactions=ve.signedTransactions},setSignTransactionsError:(o,e)=>{o.signTransactionsError=e.payload},setSignTransactionsCancelMessage:(o,e)=>{o.signTransactionsCancelMessage=e.payload},updateSignedTransactionsCustomTransactionInformation:(o,e)=>{let{sessionId:n,customTransactionInformationOverrides:r}=e.payload;o.signedTransactions[n]!=null&&(o.signedTransactions[n].customTransactionInformation=f(f({},o.signedTransactions[n].customTransactionInformation),r))}},extraReducers:o=>{o.addCase(k,()=>ve),o.addCase(Lr.REHYDRATE,(e,n)=>{var s;if(e.signTransactionsCancelMessage=null,!((s=n.payload)!=null&&s.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:a}=n.payload.transactions,m=Object.entries(r).reduce((l,[d,h])=>{let y=new Date(d),x=new Date;return x.setHours(x.getHours()+5),x-y>0||(l[d]=h),l},{});a!=null&&(e.customTransactionInformationForSessionId=a),r!=null&&(e.signedTransactions=m)})}}),{updateSignedTransactionStatus:M_,updateSignedTransactions:F_,setTransactionsToSign:B_,clearAllTransactionsToSign:U_,clearAllSignedTransactions:W_,clearSignedTransaction:V_,clearTransactionToSign:G_,setSignTransactionsError:$_,setSignTransactionsCancelMessage:H_,moveTransactionsToSignedState:j_,updateSignedTransactionsCustomTransactionInformation:z_}=Er.actions,lo=Er.reducer});var Nr,dn,Cr,Y_,Z_,J_,Q_,uo,fo=g(()=>{"use strict";t();Nr=require("@reduxjs/toolkit");O();dn={},Cr=(0,Nr.createSlice)({name:"batchTransactionsSlice",initialState:dn,reducers:{setBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},updateBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},clearBatchTransactions:(o,e)=>{delete o[e.payload.batchId]},clearAllBatchTransactions:()=>dn},extraReducers:o=>{o.addCase(k,()=>dn)}}),{setBatchTransactions:Y_,updateBatchTransactions:Z_,clearBatchTransactions:J_,clearAllBatchTransactions:Q_}=Cr.actions,uo=Cr.reducer});var Dr,Rr,Pr,td,Or,ln=g(()=>{"use strict";t();Dr=require("@reduxjs/toolkit");O();Rr={},Pr=(0,Dr.createSlice)({name:"dappConfigSlice",initialState:Rr,reducers:{setDappConfig:(o,e)=>e.payload},extraReducers:o=>{o.addCase(k,()=>Rr)}}),{setDappConfig:td}=Pr.actions,Or=Pr.reducer});var ue=g(()=>{"use strict";t();Ye();Je();eo();to();ao();po();mo();go();fo();ln()});var yn=g(()=>{"use strict";t()});var jr,ep,op,ae,So=g(()=>{"use strict";t();jr=require("@reduxjs/toolkit");yn();Ye();fo();ln();Je();eo();to();ao();po();mo();go();ep={["account"]:Xe,["dappConfig"]:Or,["loginInfo"]:Ze,["modals"]:Qe,["networkConfig"]:no,["signedMessageInfo"]:ro,["toasts"]:io,["transactionsInfo"]:co,["transactions"]:lo,["batchTransactions"]:uo},op=(o={})=>(0,jr.combineReducers)(f(f({},ep),o)),ae=op});var Xr={};M(Xr,{default:()=>hp,sessionStorageReducers:()=>bn});function J(o,e=[]){return{key:o,version:1,storage:qr.default,blacklist:e}}var C,zr,qr,np,Ie,tp,rp,ap,ip,pp,cp,mp,sp,_p,dp,Kr,lp,bn,gp,up,fp,hp,Yr=g(()=>{"use strict";t();C=require("redux-persist"),zr=T(require("redux-persist/lib/storage")),qr=T(require("redux-persist/lib/storage/session"));So();ue();Ye();fo();Je();eo();to();ao();po();mo();go();yn();np={persistReducersStorageType:"localStorage"},Ie={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},tp=J(Ie["account"]),rp=J(Ie["loginInfo"]),ap=J(Ie["modals"]),ip=J(Ie["networkConfig"]),pp={2:o=>b(f({},o),{networkConfig:tn})};cp=J("sdk-dapp-transactionsInfo"),mp=J("sdk-dapp-transactions",["transactionsToSign"]),sp=J("sdk-dapp-batchTransactions",["batchTransactions"]),_p=J("sdk-dapp-toasts"),dp=J("sdk-dapp-signedMessageInfo"),Kr={key:"sdk-dapp-store",version:2,storage:zr.default,whitelist:Object.keys(Ie),migrate:(0,C.createMigrate)(pp,{debug:!1})},lp=b(f({},Kr),{whitelist:[]}),bn={["toasts"]:(0,C.persistReducer)(_p,io),["transactions"]:(0,C.persistReducer)(mp,lo),["transactionsInfo"]:(0,C.persistReducer)(cp,co),["batchTransactions"]:(0,C.persistReducer)(sp,uo),["signedMessageInfo"]:(0,C.persistReducer)(dp,ro)},gp=b(f({},bn),{["account"]:(0,C.persistReducer)(tp,Xe),["loginInfo"]:(0,C.persistReducer)(rp,Ze),["modals"]:(0,C.persistReducer)(ap,Qe),["networkConfig"]:(0,C.persistReducer)(ip,no)}),up=np.persistReducersStorageType==="localStorage",fp=up?(0,C.persistReducer)(Kr,ae(bn)):(0,C.persistReducer)(lp,ae(gp)),hp=fp});var Zr={};M(Zr,{default:()=>xp});var xp,Jr=g(()=>{"use strict";t();So();xp=ae()});var Qr={};M(Qr,{default:()=>bp});var D,yp,bp,ea=g(()=>{"use strict";t();D=require("redux-persist"),yp=[D.FLUSH,D.REHYDRATE,D.PAUSE,D.PERSIST,D.PURGE,D.REGISTER],bp=yp});var ta={};M(ta,{default:()=>na});function na(o){return(0,oa.persistStore)(o)}var oa,ra=g(()=>{"use strict";t();oa=require("redux-persist")});var Re={};M(Re,{css:()=>ya,default:()=>tc});var ya,tc,De=g(()=>{"use strict";t();ya=`.dapp-core-component__tokenSymbol__token-symbol,
.dapp-core-component__tokenSymbol__token-symbol-combined {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
}
.dapp-core-component__tokenSymbol__token-symbol svg #dapp-core-component__tokenSymbol__egld-token,
.dapp-core-component__tokenSymbol__token-symbol-combined svg #dapp-core-component__tokenSymbol__egld-token {
  fill: #000;
}

.dapp-core-component__tokenSymbol__token-symbol-combined {
  background-color: rgba(0, 0, 0, 0);
}

.dapp-core-component__tokenSymbol__token-symbol {
  border: 1px solid #000;
  width: 2rem;
  height: 2rem;
}
.dapp-core-component__tokenSymbol__token-symbol img {
  width: 100%;
  height: 100%;
}
.dapp-core-component__tokenSymbol__token-symbol svg.dapp-core-component__tokenSymbol__expanded {
  width: 100%;
  height: 100%;
}

.dapp-core-component__tokenSymbol__token-symbol-combined {
  width: 4.5rem;
  height: 4.5rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg circle {
  fill: #fff;
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg {
  width: 4.25rem;
  height: 4.25rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined.dapp-core-component__tokenSymbol__small {
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined.dapp-core-component__tokenSymbol__small svg {
  width: 2.5rem;
  height: 2.5rem;
}

.dapp-core-component__tokenSymbol__token-icon-lg .dapp-core-component__tokenSymbol__token-symbol {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSymbol__token-icon-lg .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.25rem;
  height: 2.25rem;
}

.dapp-core-component__tokenSymbol__token-icon-xl .dapp-core-component__tokenSymbol__token-symbol {
  width: 4rem;
  height: 4rem;
}
.dapp-core-component__tokenSymbol__token-icon-xl .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.3rem;
  height: 2.3rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ya));tc={"token-symbol":"dapp-core-component__tokenSymbol__token-symbol",tokenSymbol:"dapp-core-component__tokenSymbol__token-symbol","token-symbol-combined":"dapp-core-component__tokenSymbol__token-symbol-combined",tokenSymbolCombined:"dapp-core-component__tokenSymbol__token-symbol-combined","egld-token":"dapp-core-component__tokenSymbol__egld-token",egldToken:"dapp-core-component__tokenSymbol__egld-token",expanded:"dapp-core-component__tokenSymbol__expanded",small:"dapp-core-component__tokenSymbol__small","token-icon-lg":"dapp-core-component__tokenSymbol__token-icon-lg",tokenIconLg:"dapp-core-component__tokenSymbol__token-icon-lg","token-icon-xl":"dapp-core-component__tokenSymbol__token-icon-xl",tokenIconXl:"dapp-core-component__tokenSymbol__token-icon-xl"}});var En={};M(En,{css:()=>Sa,default:()=>ic});var Sa,ic,Nn=g(()=>{"use strict";t();Sa=`.dapp-core-component__tokenDetailsStyles__token-symbol-custom-token {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sa));ic={"token-symbol-custom-token":"dapp-core-component__tokenDetailsStyles__token-symbol-custom-token",tokenSymbolCustomToken:"dapp-core-component__tokenDetailsStyles__token-symbol-custom-token"}});var mc={};M(mc,{TokenDetails:()=>ie});module.exports=z(mc);t();var A=T(require("react")),ka=require("@fortawesome/free-solid-svg-icons"),va=require("@fortawesome/react-fontawesome");t();var Ve=T(require("react")),gi=o=>Ve.createElement("svg",f({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),Ve.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"egld-token"}),Ve.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),at=gi;t();var mt=T(require("react"));t();var ye=T(require("react"));t();xe();var it=()=>!se();var fi=()=>Io(void 0,null,function*(){return yield Promise.resolve().then(()=>(Wo(),Uo))}),hi=()=>(Wo(),z(Uo)).default,Vo=it();function ct({ssrGlobalImportCallback:o,ssrImportCallback:e,clientImportCallback:n}){let[r,a]=ye.default.useState(Vo?void 0:hi()),[m,s]=ye.default.useState(Vo||n==null?void 0:n()),l=()=>Io(this,null,function*(){(o?o():fi()).then(d=>a(d.default)),e==null||e().then(d=>s(d.default))});return(0,ye.useEffect)(()=>{Vo&&l()},[]),{globalStyles:r,styles:m}}function be(o,e){return n=>{let{globalStyles:r,styles:a}=ct({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return mt.default.createElement(o,b(f({},n),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}t();t();t();ue();t();var Mr=T(require("lodash.isequal")),ho=require("reselect"),u=(0,ho.createSelectorCreator)(ho.defaultMemoize,Mr.default);var G=o=>o.account,gn=u(G,o=>o.address),un=u(G,gn,(o,e)=>e in o.accounts?o.accounts[e]:Ke),yd=u(G,un,(o,e)=>{let a=o,{accounts:n}=a,r=On(a,["accounts"]);return b(f({},r),{address:e.address,account:e})}),bd=u(un,o=>o.balance),Td=u(un,o=>{var e;return((e=o==null?void 0:o.nonce)==null?void 0:e.valueOf())||0}),Sd=u(G,o=>o.shard),wd=u(G,o=>o.ledgerAccount),kd=u(G,o=>o.walletConnectAccount),vd=u(G,o=>o.isAccountLoading),Ad=u(G,o=>o.accountLoadingError),Id=u(G,o=>o.websocketEvent),Ld=u(G,o=>o.websocketBatchEvent);t();var qi=o=>o.dappConfig,Cd=u(qi,o=>o.shouldUseWebViewProvider);t();var Z=o=>o.loginInfo,Od=u(Z,o=>o.loginMethod),Md=u(Z,gn,(o,e)=>Boolean(e)),Fd=u(Z,o=>o.walletConnectLogin),Bd=u(Z,o=>o.ledgerLogin),Ud=u(Z,o=>o.walletLogin),Wd=u(Z,o=>o.isLoginSessionInvalid),Vd=u(Z,o=>o.tokenLogin),Gd=u(Z,o=>o.logoutRoute),$d=u(Z,o=>o.isWalletConnectV2Initialized);t();var Fr=o=>o.modals,zd=u(Fr,o=>o.txSubmittedModal),qd=u(Fr,o=>o.notificationModal);t();var ee=o=>o.networkConfig,Yd=u(ee,o=>o.network.chainId),Zd=u(ee,o=>o.network.roundDuration),Jd=u(ee,o=>o.network.walletConnectBridgeAddress),Qd=u(ee,o=>o.network.walletConnectV2RelayAddress),el=u(ee,o=>o.network.walletConnectV2ProjectId),ol=u(ee,o=>o.network.walletConnectV2Options),nl=u(ee,o=>o.network.walletConnectDeepLink),Ae=u(ee,o=>o.network),tl=u(Ae,o=>o.apiAddress),Br=u(Ae,o=>o.explorerAddress),rl=u(Ae,o=>{var e;return(e=o.customWalletAddress)!=null?e:o.walletAddress}),al=u(Ae,o=>o.xAliasAddress),Ur=u(Ae,o=>o.egldLabel);t();var xo=o=>o.signedMessageInfo,cl=u(xo,o=>o.isSigning),ml=u(xo,o=>o.errorMessage),sl=u(xo,o=>{let e=Object.keys(o.signedSessions),n=e.length;return o.signedSessions[e[n-1]]}),_l=u(xo,o=>{let e=Object.keys(o.signedSessions),n=e.length;return e.length>0?e[n-1]:""});t();var Wr=o=>o.toasts,gl=u(Wr,o=>o.customToasts),ul=u(Wr,o=>o.transactionToasts);t();ue();var Vr={errorMessage:pn,successMessage:cn,processingMessage:mn},Ki=o=>o.transactionsInfo,yl=u(Ki,(o,e)=>e,(o,e)=>e!=null&&(o==null?void 0:o[Number(e)])||Vr);t();t();var $=require("@multiversx/sdk-core");S();t();var hn=require("@multiversx/sdk-core/out");t();t();function fn(o){try{let e=atob(o),n=btoa(e),r=i.Buffer.from(o,"base64").toString(),a=i.Buffer.from(r).toString("base64"),m=o===n||n.startsWith(o),s=o===a||a.startsWith(o);if(m&&s)return!0}catch(e){return!1}return!1}t();t();t();t();var Gr=o=>{let e=o!=null?o:"";return fn(e)?hn.TransactionPayload.fromEncoded(e):new hn.TransactionPayload(e)};t();S();var yo=({data:o,onlySetGuardian:e})=>o?e?o.startsWith("SetGuardian"):Object.values(Go).some(n=>o.startsWith(n)):!1;function xn(o){var r,a,m;let e=f({},o);yo({data:e.data,onlySetGuardian:!0})&&(delete e.senderUsername,delete e.receiverUsername);let n=new $.Transaction(f(f(b(f(b(f({value:e.value.valueOf(),data:Gr(e.data),nonce:e.nonce.valueOf(),receiver:new $.Address(e.receiver)},e.receiverUsername?{receiverUsername:e.receiverUsername}:{}),{sender:new $.Address(e.sender)}),e.senderUsername?{senderUsername:e.senderUsername}:{}),{gasLimit:(r=e.gasLimit.valueOf())!=null?r:Ko,gasPrice:(a=e.gasPrice.valueOf())!=null?a:Xo,chainID:e.chainID.valueOf(),version:new $.TransactionVersion((m=e.version)!=null?m:Ot)}),e.options?{options:new $.TransactionOptions(e.options)}:{}),e.guardian?{guardian:new $.Address(e.guardian)}:{}));return e.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(e.guardianSignature,"hex")),e.signature&&n.applySignature(i.Buffer.from(e.signature,"hex")),n}t();t();S();t();t();var Tn=require("@reduxjs/toolkit"),ca=require("react-redux/lib/utils/Subscription");ue();t();var $r=T(require("lodash.throttle"));S();ue();nn();ze();Te();var Zi=[$e],bo=!1,Ji=(0,$r.default)(()=>{we(Se())},5e3),Hr=o=>e=>n=>{if(Zi.includes(n.type))return e(n);let r=o.getState(),a=le.local.getItem(re.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return e(n);if(a==null)return we(Se());let s=Date.now();return a-s<0&&!bo?setTimeout(()=>{bo=!0,o.dispatch(Qt())},1e3):(bo&&(bo=!1),Ji()),e(n)};t();t();function To(){return typeof sessionStorage!="undefined"}var aa=To()?(Yr(),z(Xr)).default:(Jr(),z(Zr)).default,ia=To()?(ea(),z(Qr)).default:[],pa=To()?(ra(),z(ta)).default:o=>o;So();var fe=(0,Tn.configureStore)({reducer:aa,middleware:o=>o({serializableCheck:{ignoredActions:[...ia,Xt.type,Kt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Hr)}),Lg=(0,ca.createSubscription)(fe),Eg=pa(fe),Ng=(0,Tn.configureStore)({reducer:ae});t();t();var Sp=require("@multiversx/sdk-core/out");t();S();t();var sa=require("@multiversx/sdk-core");P();t();var wp=require("@multiversx/sdk-core");t();t();t();var kp=require("@multiversx/sdk-core"),vp=T(require("bignumber.js"));Y();t();t();t();t();t();t();t();N();t();t();N();t();t();t();var Cp=T(require("bignumber.js"));S();t();var Np=require("@multiversx/sdk-core"),Sn=T(require("bignumber.js"));S();t();var Lp=T(require("bignumber.js"));t();Sn.default.config({ROUNDING_MODE:Sn.default.ROUND_FLOOR});t();t();t();S();t();t();t();t();S();t();S();t();var Rp=require("@multiversx/sdk-core");S();t();var Ee=require("@multiversx/sdk-core"),Pp=T(require("bignumber.js"));S();t();t();var Dp=T(require("bignumber.js"));S();t();S();t();var kn={isEsdt:!1,isNft:!1,isEgld:!1};function vn(o){let e=o==null?void 0:o.split("-").length;return e===2?b(f({},kn),{isEsdt:!0}):e===3?b(f({},kn),{isNft:!0}):b(f({},kn),{isEgld:!0})}t();t();t();t();t();S();t();S();t();S();t();N();var Mp=["reDelegateRewards","claimRewards","unBond"],Fp=["wrapEgld","unwrapEgld"],Bp=["unStake"],Up=["unDelegate"];t();t();t();S();t();var Gp=T(require("bignumber.js"));t();t();N();t();var Hp=T(require("bignumber.js"));t();t();t();t();var zp=T(require("bignumber.js"));P();t();t();t();t();Y();t();var Xp=require("@multiversx/sdk-web-wallet-provider");S();t();var Kp=T(require("qs"));t();oo();xe();t();xe();var qx={search:se()?window.location.search:"",removeParams:[]};t();t();t();ge();t();N();t();t();ge();t();var Yp=T(require("linkifyjs"));t();S();t();var Zp=T(require("bignumber.js"));t();P();t();t();Y();t();Y();t();t();t();N();t();N();t();var Jp=T(require("bignumber.js"));S();N();t();N();t();var fa=require("react");P();t();t();N();t();t();var Qp=require("@multiversx/sdk-core/out"),ec=T(require("bignumber.js"));N();t();P();t();t();P();var W0=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var ha=require("react");P();ge();t();var nc=require("react");N();var K0=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];_n();t();var ko=o=>o.transactions,Ce=u(ko,o=>o.signedTransactions),Bb=u(ko,o=>o.signTransactionsError),Ub=u(ko,o=>o.signTransactionsCancelMessage),vo=o=>e=>Object.entries(e).reduce((n,[r,a])=>(o(a.status)&&(n[r]=a),n),{}),Wb=u(Ce,vo(kr)),Vb=u(Ce,vo(so)),Gb=u(Ce,vo(_o)),$b=u(Ce,vo(Ar)),Hb=u(ko,o=>{var e;return(o==null?void 0:o.transactionsToSign)==null?null:b(f({},o.transactionsToSign),{transactions:((e=o==null?void 0:o.transactionsToSign)==null?void 0:e.transactions.map(n=>xn(n)))||[]})}),jb=u(Ce,(o,e)=>e,(o,e)=>e!=null?(o==null?void 0:o[e])||{}:{});function xa(){return Ur(fe.getState())}t();var In=T(require("react")),Ln=T(require("classnames"));var rc=({children:o,className:e="dapp-simple-token-symbol",styles:n})=>In.default.createElement("div",{className:(0,Ln.default)(n==null?void 0:n.tokenSymbol,e)},o),ac=({small:o,children:e,className:n="dapp-combined-token-symbol",styles:r})=>{var a;return In.default.createElement("div",{className:(0,Ln.default)(r==null?void 0:r.tokenSymbolCombined,{[(a=r==null?void 0:r.small)!=null?a:""]:o},n)},e)},ba=be(rc,{ssrStyles:()=>Promise.resolve().then(()=>(De(),Re)),clientStyles:()=>(De(),z(Re)).default}),Ta=be(ac,{ssrStyles:()=>Promise.resolve().then(()=>(De(),Re)),clientStyles:()=>(De(),z(Re)).default});var Aa=o=>{let e=o.split("-");return o.includes("-")?`${e[0]}-${e[1]}`:o};function pc({isEgldTransfer:o,tokenAvatar:e,styles:n}){return e&&e!=="undefined"?A.default.createElement("img",{className:n==null?void 0:n.tokenSymbolCustomToken,src:e}):o?A.default.createElement(at,null):A.default.createElement(va.FontAwesomeIcon,{icon:ka.faDiamond})}var cc=be(pc,{ssrStyles:()=>Promise.resolve().then(()=>(Nn(),En)),clientStyles:()=>(Nn(),z(En)).default}),Cn=(o,e)=>{let n=xa(),r=o===n;return{token:o,symbol:o?o.split("-")[0]:"",label:o,icon:()=>cc({isEgldTransfer:r,tokenAvatar:e})}},wa=o=>{let{isNft:e}=vn(o);return e?o:Aa(o)},ie=class extends A.Component{render(){return null}};ie.Token=e=>A.default.createElement(A.default.Fragment,null,e.token),ie.Symbol=e=>A.default.createElement(A.default.Fragment,null,Cn(Aa(e.token),e.tokenAvatar).symbol),ie.Label=e=>A.default.createElement(A.default.Fragment,null,Cn(wa(e.token),e.tokenAvatar).label),ie.Icon=e=>{var r;let n=Cn(wa(e.token),e.tokenAvatar).icon;return A.default.createElement("div",{className:(r=e.className)!=null?r:"dapp-token-details-icon"},e.combined?A.default.createElement(Ta,{small:e.small},A.default.createElement(n,null)):A.default.createElement(ba,null,A.default.createElement(n,null)))};0&&(module.exports={TokenDetails});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
