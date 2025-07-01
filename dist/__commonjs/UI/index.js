"use strict";var ER=Object.create;var Ac=Object.defineProperty,WR=Object.defineProperties,MR=Object.getOwnPropertyDescriptor,BR=Object.getOwnPropertyDescriptors,OR=Object.getOwnPropertyNames,Rm=Object.getOwnPropertySymbols,FR=Object.getPrototypeOf,nf=Object.prototype.hasOwnProperty,nS=Object.prototype.propertyIsEnumerable;var eS=(e,n,o)=>n in e?Ac(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,b=(e,n)=>{for(var o in n||(n={}))nf.call(n,o)&&eS(e,o,n[o]);if(Rm)for(var o of Rm(n))nS.call(n,o)&&eS(e,o,n[o]);return e},q=(e,n)=>WR(e,BR(n));var _n=(e,n)=>{var o={};for(var i in e)nf.call(e,i)&&n.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&Rm)for(var i of Rm(e))n.indexOf(i)<0&&nS.call(e,i)&&(o[i]=e[i]);return o};var F=(e,n)=>()=>(e&&(n=e(e=0)),n);var J=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),oe=(e,n)=>{for(var o in n)Ac(e,o,{get:n[o],enumerable:!0})},oS=(e,n,o,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let c of OR(n))!nf.call(e,c)&&c!==o&&Ac(e,c,{get:()=>n[c],enumerable:!(i=MR(n,c))||i.enumerable});return e};var w=(e,n,o)=>(o=e!=null?ER(FR(e)):{},oS(n||!e||!e.__esModule?Ac(o,"default",{value:e,enumerable:!0}):o,e)),j=e=>oS(Ac({},"__esModule",{value:!0}),e);var M=(e,n,o)=>new Promise((i,c)=>{var p=h=>{try{u(o.next(h))}catch(g){c(g)}},l=h=>{try{u(o.throw(h))}catch(g){c(g)}},u=h=>h.done?i(h.value):Promise.resolve(h.value).then(p,l);u((o=o.apply(e,n)).next())});var aS=J(Um=>{"use strict";r();Um.byteLength=UR;Um.toByteArray=HR;Um.fromByteArray=zR;var $t=[],yt=[],RR=typeof Uint8Array!="undefined"?Uint8Array:Array,of="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ai=0,tS=of.length;ai<tS;++ai)$t[ai]=of[ai],yt[of.charCodeAt(ai)]=ai;var ai,tS;yt["-".charCodeAt(0)]=62;yt["_".charCodeAt(0)]=63;function rS(e){var n=e.length;if(n%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=e.indexOf("=");o===-1&&(o=n);var i=o===n?0:4-o%4;return[o,i]}function UR(e){var n=rS(e),o=n[0],i=n[1];return(o+i)*3/4-i}function GR(e,n,o){return(n+o)*3/4-o}function HR(e){var n,o=rS(e),i=o[0],c=o[1],p=new RR(GR(e,i,c)),l=0,u=c>0?i-4:i,h;for(h=0;h<u;h+=4)n=yt[e.charCodeAt(h)]<<18|yt[e.charCodeAt(h+1)]<<12|yt[e.charCodeAt(h+2)]<<6|yt[e.charCodeAt(h+3)],p[l++]=n>>16&255,p[l++]=n>>8&255,p[l++]=n&255;return c===2&&(n=yt[e.charCodeAt(h)]<<2|yt[e.charCodeAt(h+1)]>>4,p[l++]=n&255),c===1&&(n=yt[e.charCodeAt(h)]<<10|yt[e.charCodeAt(h+1)]<<4|yt[e.charCodeAt(h+2)]>>2,p[l++]=n>>8&255,p[l++]=n&255),p}function VR(e){return $t[e>>18&63]+$t[e>>12&63]+$t[e>>6&63]+$t[e&63]}function $R(e,n,o){for(var i,c=[],p=n;p<o;p+=3)i=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(VR(i));return c.join("")}function zR(e){for(var n,o=e.length,i=o%3,c=[],p=16383,l=0,u=o-i;l<u;l+=p)c.push($R(e,l,l+p>u?u:l+p));return i===1?(n=e[o-1],c.push($t[n>>2]+$t[n<<4&63]+"==")):i===2&&(n=(e[o-2]<<8)+e[o-1],c.push($t[n>>10]+$t[n>>4&63]+$t[n<<2&63]+"=")),c.join("")}});var iS=J(tf=>{r();tf.read=function(e,n,o,i,c){var p,l,u=c*8-i-1,h=(1<<u)-1,g=h>>1,T=-7,y=o?c-1:0,C=o?-1:1,N=e[n+y];for(y+=C,p=N&(1<<-T)-1,N>>=-T,T+=u;T>0;p=p*256+e[n+y],y+=C,T-=8);for(l=p&(1<<-T)-1,p>>=-T,T+=i;T>0;l=l*256+e[n+y],y+=C,T-=8);if(p===0)p=1-g;else{if(p===h)return l?NaN:(N?-1:1)*(1/0);l=l+Math.pow(2,i),p=p-g}return(N?-1:1)*l*Math.pow(2,p-i)};tf.write=function(e,n,o,i,c,p){var l,u,h,g=p*8-c-1,T=(1<<g)-1,y=T>>1,C=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=i?0:p-1,A=i?1:-1,P=n<0||n===0&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(u=isNaN(n)?1:0,l=T):(l=Math.floor(Math.log(n)/Math.LN2),n*(h=Math.pow(2,-l))<1&&(l--,h*=2),l+y>=1?n+=C/h:n+=C*Math.pow(2,1-y),n*h>=2&&(l++,h/=2),l+y>=T?(u=0,l=T):l+y>=1?(u=(n*h-1)*Math.pow(2,c),l=l+y):(u=n*Math.pow(2,y-1)*Math.pow(2,c),l=0));c>=8;e[o+N]=u&255,N+=A,u/=256,c-=8);for(l=l<<c|u,g+=c;g>0;e[o+N]=l&255,N+=A,l/=256,g-=8);e[o+N-A]|=P*128}});var xS=J(dp=>{"use strict";r();var rf=aS(),mp=iS(),pS=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;dp.Buffer=H;dp.SlowBuffer=YR;dp.INSPECT_MAX_BYTES=50;var Gm=2147483647;dp.kMaxLength=Gm;H.TYPED_ARRAY_SUPPORT=qR();!H.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function qR(){try{var e=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(e,n),e.foo()===42}catch(o){return!1}}Object.defineProperty(H.prototype,"parent",{enumerable:!0,get:function(){if(!!H.isBuffer(this))return this.buffer}});Object.defineProperty(H.prototype,"offset",{enumerable:!0,get:function(){if(!!H.isBuffer(this))return this.byteOffset}});function Ir(e){if(e>Gm)throw new RangeError('The value "'+e+'" is invalid for option "size"');var n=new Uint8Array(e);return Object.setPrototypeOf(n,H.prototype),n}function H(e,n,o){if(typeof e=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return sf(e)}return mS(e,n,o)}H.poolSize=8192;function mS(e,n,o){if(typeof e=="string")return KR(e,n);if(ArrayBuffer.isView(e))return XR(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(zt(e,ArrayBuffer)||e&&zt(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(zt(e,SharedArrayBuffer)||e&&zt(e.buffer,SharedArrayBuffer)))return pf(e,n,o);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(i!=null&&i!==e)return H.from(i,n,o);var c=ZR(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return H.from(e[Symbol.toPrimitive]("string"),n,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}H.from=function(e,n,o){return mS(e,n,o)};Object.setPrototypeOf(H.prototype,Uint8Array.prototype);Object.setPrototypeOf(H,Uint8Array);function dS(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function jR(e,n,o){return dS(e),e<=0?Ir(e):n!==void 0?typeof o=="string"?Ir(e).fill(n,o):Ir(e).fill(n):Ir(e)}H.alloc=function(e,n,o){return jR(e,n,o)};function sf(e){return dS(e),Ir(e<0?0:mf(e)|0)}H.allocUnsafe=function(e){return sf(e)};H.allocUnsafeSlow=function(e){return sf(e)};function KR(e,n){if((typeof n!="string"||n==="")&&(n="utf8"),!H.isEncoding(n))throw new TypeError("Unknown encoding: "+n);var o=_S(e,n)|0,i=Ir(o),c=i.write(e,n);return c!==o&&(i=i.slice(0,c)),i}function af(e){for(var n=e.length<0?0:mf(e.length)|0,o=Ir(n),i=0;i<n;i+=1)o[i]=e[i]&255;return o}function XR(e){if(zt(e,Uint8Array)){var n=new Uint8Array(e);return pf(n.buffer,n.byteOffset,n.byteLength)}return af(e)}function pf(e,n,o){if(n<0||e.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<n+(o||0))throw new RangeError('"length" is outside of buffer bounds');var i;return n===void 0&&o===void 0?i=new Uint8Array(e):o===void 0?i=new Uint8Array(e,n):i=new Uint8Array(e,n,o),Object.setPrototypeOf(i,H.prototype),i}function ZR(e){if(H.isBuffer(e)){var n=mf(e.length)|0,o=Ir(n);return o.length===0||e.copy(o,0,0,n),o}if(e.length!==void 0)return typeof e.length!="number"||df(e.length)?Ir(0):af(e);if(e.type==="Buffer"&&Array.isArray(e.data))return af(e.data)}function mf(e){if(e>=Gm)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Gm.toString(16)+" bytes");return e|0}function YR(e){return+e!=e&&(e=0),H.alloc(+e)}H.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==H.prototype};H.compare=function(n,o){if(zt(n,Uint8Array)&&(n=H.from(n,n.offset,n.byteLength)),zt(o,Uint8Array)&&(o=H.from(o,o.offset,o.byteLength)),!H.isBuffer(n)||!H.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===o)return 0;for(var i=n.length,c=o.length,p=0,l=Math.min(i,c);p<l;++p)if(n[p]!==o[p]){i=n[p],c=o[p];break}return i<c?-1:c<i?1:0};H.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};H.concat=function(n,o){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return H.alloc(0);var i;if(o===void 0)for(o=0,i=0;i<n.length;++i)o+=n[i].length;var c=H.allocUnsafe(o),p=0;for(i=0;i<n.length;++i){var l=n[i];if(zt(l,Uint8Array))p+l.length>c.length?H.from(l).copy(c,p):Uint8Array.prototype.set.call(c,l,p);else if(H.isBuffer(l))l.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=l.length}return c};function _S(e,n){if(H.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||zt(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var o=e.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&o===0)return 0;for(var c=!1;;)switch(n){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return cf(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return TS(e).length;default:if(c)return i?-1:cf(e).length;n=(""+n).toLowerCase(),c=!0}}H.byteLength=_S;function JR(e,n,o){var i=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,n>>>=0,o<=n))return"";for(e||(e="utf8");;)switch(e){case"hex":return cU(this,n,o);case"utf8":case"utf-8":return uS(this,n,o);case"ascii":return iU(this,n,o);case"latin1":case"binary":return pU(this,n,o);case"base64":return rU(this,n,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return sU(this,n,o);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}H.prototype._isBuffer=!0;function ii(e,n,o){var i=e[n];e[n]=e[o],e[o]=i}H.prototype.swap16=function(){var n=this.length;if(n%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<n;o+=2)ii(this,o,o+1);return this};H.prototype.swap32=function(){var n=this.length;if(n%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<n;o+=4)ii(this,o,o+3),ii(this,o+1,o+2);return this};H.prototype.swap64=function(){var n=this.length;if(n%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<n;o+=8)ii(this,o,o+7),ii(this,o+1,o+6),ii(this,o+2,o+5),ii(this,o+3,o+4);return this};H.prototype.toString=function(){var n=this.length;return n===0?"":arguments.length===0?uS(this,0,n):JR.apply(this,arguments)};H.prototype.toLocaleString=H.prototype.toString;H.prototype.equals=function(n){if(!H.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n?!0:H.compare(this,n)===0};H.prototype.inspect=function(){var n="",o=dp.INSPECT_MAX_BYTES;return n=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(n+=" ... "),"<Buffer "+n+">"};pS&&(H.prototype[pS]=H.prototype.inspect);H.prototype.compare=function(n,o,i,c,p){if(zt(n,Uint8Array)&&(n=H.from(n,n.offset,n.byteLength)),!H.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(o===void 0&&(o=0),i===void 0&&(i=n?n.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),o<0||i>n.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&o>=i)return 0;if(c>=p)return-1;if(o>=i)return 1;if(o>>>=0,i>>>=0,c>>>=0,p>>>=0,this===n)return 0;for(var l=p-c,u=i-o,h=Math.min(l,u),g=this.slice(c,p),T=n.slice(o,i),y=0;y<h;++y)if(g[y]!==T[y]){l=g[y],u=T[y];break}return l<u?-1:u<l?1:0};function lS(e,n,o,i,c){if(e.length===0)return-1;if(typeof o=="string"?(i=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,df(o)&&(o=c?0:e.length-1),o<0&&(o=e.length+o),o>=e.length){if(c)return-1;o=e.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof n=="string"&&(n=H.from(n,i)),H.isBuffer(n))return n.length===0?-1:cS(e,n,o,i,c);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,n,o):Uint8Array.prototype.lastIndexOf.call(e,n,o):cS(e,[n],o,i,c);throw new TypeError("val must be string, number or Buffer")}function cS(e,n,o,i,c){var p=1,l=e.length,u=n.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(e.length<2||n.length<2)return-1;p=2,l/=2,u/=2,o/=2}function h(N,A){return p===1?N[A]:N.readUInt16BE(A*p)}var g;if(c){var T=-1;for(g=o;g<l;g++)if(h(e,g)===h(n,T===-1?0:g-T)){if(T===-1&&(T=g),g-T+1===u)return T*p}else T!==-1&&(g-=g-T),T=-1}else for(o+u>l&&(o=l-u),g=o;g>=0;g--){for(var y=!0,C=0;C<u;C++)if(h(e,g+C)!==h(n,C)){y=!1;break}if(y)return g}return-1}H.prototype.includes=function(n,o,i){return this.indexOf(n,o,i)!==-1};H.prototype.indexOf=function(n,o,i){return lS(this,n,o,i,!0)};H.prototype.lastIndexOf=function(n,o,i){return lS(this,n,o,i,!1)};function QR(e,n,o,i){o=Number(o)||0;var c=e.length-o;i?(i=Number(i),i>c&&(i=c)):i=c;var p=n.length;i>p/2&&(i=p/2);for(var l=0;l<i;++l){var u=parseInt(n.substr(l*2,2),16);if(df(u))return l;e[o+l]=u}return l}function eU(e,n,o,i){return Hm(cf(n,e.length-o),e,o,i)}function nU(e,n,o,i){return Hm(_U(n),e,o,i)}function oU(e,n,o,i){return Hm(TS(n),e,o,i)}function tU(e,n,o,i){return Hm(lU(n,e.length-o),e,o,i)}H.prototype.write=function(n,o,i,c){if(o===void 0)c="utf8",i=this.length,o=0;else if(i===void 0&&typeof o=="string")c=o,i=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(i)?(i=i>>>0,c===void 0&&(c="utf8")):(c=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-o;if((i===void 0||i>p)&&(i=p),n.length>0&&(i<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var l=!1;;)switch(c){case"hex":return QR(this,n,o,i);case"utf8":case"utf-8":return eU(this,n,o,i);case"ascii":case"latin1":case"binary":return nU(this,n,o,i);case"base64":return oU(this,n,o,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tU(this,n,o,i);default:if(l)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),l=!0}};H.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function rU(e,n,o){return n===0&&o===e.length?rf.fromByteArray(e):rf.fromByteArray(e.slice(n,o))}function uS(e,n,o){o=Math.min(e.length,o);for(var i=[],c=n;c<o;){var p=e[c],l=null,u=p>239?4:p>223?3:p>191?2:1;if(c+u<=o){var h,g,T,y;switch(u){case 1:p<128&&(l=p);break;case 2:h=e[c+1],(h&192)===128&&(y=(p&31)<<6|h&63,y>127&&(l=y));break;case 3:h=e[c+1],g=e[c+2],(h&192)===128&&(g&192)===128&&(y=(p&15)<<12|(h&63)<<6|g&63,y>2047&&(y<55296||y>57343)&&(l=y));break;case 4:h=e[c+1],g=e[c+2],T=e[c+3],(h&192)===128&&(g&192)===128&&(T&192)===128&&(y=(p&15)<<18|(h&63)<<12|(g&63)<<6|T&63,y>65535&&y<1114112&&(l=y))}}l===null?(l=65533,u=1):l>65535&&(l-=65536,i.push(l>>>10&1023|55296),l=56320|l&1023),i.push(l),c+=u}return aU(i)}var sS=4096;function aU(e){var n=e.length;if(n<=sS)return String.fromCharCode.apply(String,e);for(var o="",i=0;i<n;)o+=String.fromCharCode.apply(String,e.slice(i,i+=sS));return o}function iU(e,n,o){var i="";o=Math.min(e.length,o);for(var c=n;c<o;++c)i+=String.fromCharCode(e[c]&127);return i}function pU(e,n,o){var i="";o=Math.min(e.length,o);for(var c=n;c<o;++c)i+=String.fromCharCode(e[c]);return i}function cU(e,n,o){var i=e.length;(!n||n<0)&&(n=0),(!o||o<0||o>i)&&(o=i);for(var c="",p=n;p<o;++p)c+=uU[e[p]];return c}function sU(e,n,o){for(var i=e.slice(n,o),c="",p=0;p<i.length-1;p+=2)c+=String.fromCharCode(i[p]+i[p+1]*256);return c}H.prototype.slice=function(n,o){var i=this.length;n=~~n,o=o===void 0?i:~~o,n<0?(n+=i,n<0&&(n=0)):n>i&&(n=i),o<0?(o+=i,o<0&&(o=0)):o>i&&(o=i),o<n&&(o=n);var c=this.subarray(n,o);return Object.setPrototypeOf(c,H.prototype),c};function Qn(e,n,o){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+n>o)throw new RangeError("Trying to access beyond buffer length")}H.prototype.readUintLE=H.prototype.readUIntLE=function(n,o,i){n=n>>>0,o=o>>>0,i||Qn(n,o,this.length);for(var c=this[n],p=1,l=0;++l<o&&(p*=256);)c+=this[n+l]*p;return c};H.prototype.readUintBE=H.prototype.readUIntBE=function(n,o,i){n=n>>>0,o=o>>>0,i||Qn(n,o,this.length);for(var c=this[n+--o],p=1;o>0&&(p*=256);)c+=this[n+--o]*p;return c};H.prototype.readUint8=H.prototype.readUInt8=function(n,o){return n=n>>>0,o||Qn(n,1,this.length),this[n]};H.prototype.readUint16LE=H.prototype.readUInt16LE=function(n,o){return n=n>>>0,o||Qn(n,2,this.length),this[n]|this[n+1]<<8};H.prototype.readUint16BE=H.prototype.readUInt16BE=function(n,o){return n=n>>>0,o||Qn(n,2,this.length),this[n]<<8|this[n+1]};H.prototype.readUint32LE=H.prototype.readUInt32LE=function(n,o){return n=n>>>0,o||Qn(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+this[n+3]*16777216};H.prototype.readUint32BE=H.prototype.readUInt32BE=function(n,o){return n=n>>>0,o||Qn(n,4,this.length),this[n]*16777216+(this[n+1]<<16|this[n+2]<<8|this[n+3])};H.prototype.readIntLE=function(n,o,i){n=n>>>0,o=o>>>0,i||Qn(n,o,this.length);for(var c=this[n],p=1,l=0;++l<o&&(p*=256);)c+=this[n+l]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*o)),c};H.prototype.readIntBE=function(n,o,i){n=n>>>0,o=o>>>0,i||Qn(n,o,this.length);for(var c=o,p=1,l=this[n+--c];c>0&&(p*=256);)l+=this[n+--c]*p;return p*=128,l>=p&&(l-=Math.pow(2,8*o)),l};H.prototype.readInt8=function(n,o){return n=n>>>0,o||Qn(n,1,this.length),this[n]&128?(255-this[n]+1)*-1:this[n]};H.prototype.readInt16LE=function(n,o){n=n>>>0,o||Qn(n,2,this.length);var i=this[n]|this[n+1]<<8;return i&32768?i|4294901760:i};H.prototype.readInt16BE=function(n,o){n=n>>>0,o||Qn(n,2,this.length);var i=this[n+1]|this[n]<<8;return i&32768?i|4294901760:i};H.prototype.readInt32LE=function(n,o){return n=n>>>0,o||Qn(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24};H.prototype.readInt32BE=function(n,o){return n=n>>>0,o||Qn(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]};H.prototype.readFloatLE=function(n,o){return n=n>>>0,o||Qn(n,4,this.length),mp.read(this,n,!0,23,4)};H.prototype.readFloatBE=function(n,o){return n=n>>>0,o||Qn(n,4,this.length),mp.read(this,n,!1,23,4)};H.prototype.readDoubleLE=function(n,o){return n=n>>>0,o||Qn(n,8,this.length),mp.read(this,n,!0,52,8)};H.prototype.readDoubleBE=function(n,o){return n=n>>>0,o||Qn(n,8,this.length),mp.read(this,n,!1,52,8)};function Ro(e,n,o,i,c,p){if(!H.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>c||n<p)throw new RangeError('"value" argument is out of bounds');if(o+i>e.length)throw new RangeError("Index out of range")}H.prototype.writeUintLE=H.prototype.writeUIntLE=function(n,o,i,c){if(n=+n,o=o>>>0,i=i>>>0,!c){var p=Math.pow(2,8*i)-1;Ro(this,n,o,i,p,0)}var l=1,u=0;for(this[o]=n&255;++u<i&&(l*=256);)this[o+u]=n/l&255;return o+i};H.prototype.writeUintBE=H.prototype.writeUIntBE=function(n,o,i,c){if(n=+n,o=o>>>0,i=i>>>0,!c){var p=Math.pow(2,8*i)-1;Ro(this,n,o,i,p,0)}var l=i-1,u=1;for(this[o+l]=n&255;--l>=0&&(u*=256);)this[o+l]=n/u&255;return o+i};H.prototype.writeUint8=H.prototype.writeUInt8=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,1,255,0),this[o]=n&255,o+1};H.prototype.writeUint16LE=H.prototype.writeUInt16LE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,2,65535,0),this[o]=n&255,this[o+1]=n>>>8,o+2};H.prototype.writeUint16BE=H.prototype.writeUInt16BE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,2,65535,0),this[o]=n>>>8,this[o+1]=n&255,o+2};H.prototype.writeUint32LE=H.prototype.writeUInt32LE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,4,4294967295,0),this[o+3]=n>>>24,this[o+2]=n>>>16,this[o+1]=n>>>8,this[o]=n&255,o+4};H.prototype.writeUint32BE=H.prototype.writeUInt32BE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,4,4294967295,0),this[o]=n>>>24,this[o+1]=n>>>16,this[o+2]=n>>>8,this[o+3]=n&255,o+4};H.prototype.writeIntLE=function(n,o,i,c){if(n=+n,o=o>>>0,!c){var p=Math.pow(2,8*i-1);Ro(this,n,o,i,p-1,-p)}var l=0,u=1,h=0;for(this[o]=n&255;++l<i&&(u*=256);)n<0&&h===0&&this[o+l-1]!==0&&(h=1),this[o+l]=(n/u>>0)-h&255;return o+i};H.prototype.writeIntBE=function(n,o,i,c){if(n=+n,o=o>>>0,!c){var p=Math.pow(2,8*i-1);Ro(this,n,o,i,p-1,-p)}var l=i-1,u=1,h=0;for(this[o+l]=n&255;--l>=0&&(u*=256);)n<0&&h===0&&this[o+l+1]!==0&&(h=1),this[o+l]=(n/u>>0)-h&255;return o+i};H.prototype.writeInt8=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,1,127,-128),n<0&&(n=255+n+1),this[o]=n&255,o+1};H.prototype.writeInt16LE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,2,32767,-32768),this[o]=n&255,this[o+1]=n>>>8,o+2};H.prototype.writeInt16BE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,2,32767,-32768),this[o]=n>>>8,this[o+1]=n&255,o+2};H.prototype.writeInt32LE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,4,2147483647,-2147483648),this[o]=n&255,this[o+1]=n>>>8,this[o+2]=n>>>16,this[o+3]=n>>>24,o+4};H.prototype.writeInt32BE=function(n,o,i){return n=+n,o=o>>>0,i||Ro(this,n,o,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[o]=n>>>24,this[o+1]=n>>>16,this[o+2]=n>>>8,this[o+3]=n&255,o+4};function fS(e,n,o,i,c,p){if(o+i>e.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function gS(e,n,o,i,c){return n=+n,o=o>>>0,c||fS(e,n,o,4,34028234663852886e22,-34028234663852886e22),mp.write(e,n,o,i,23,4),o+4}H.prototype.writeFloatLE=function(n,o,i){return gS(this,n,o,!0,i)};H.prototype.writeFloatBE=function(n,o,i){return gS(this,n,o,!1,i)};function hS(e,n,o,i,c){return n=+n,o=o>>>0,c||fS(e,n,o,8,17976931348623157e292,-17976931348623157e292),mp.write(e,n,o,i,52,8),o+8}H.prototype.writeDoubleLE=function(n,o,i){return hS(this,n,o,!0,i)};H.prototype.writeDoubleBE=function(n,o,i){return hS(this,n,o,!1,i)};H.prototype.copy=function(n,o,i,c){if(!H.isBuffer(n))throw new TypeError("argument should be a Buffer");if(i||(i=0),!c&&c!==0&&(c=this.length),o>=n.length&&(o=n.length),o||(o=0),c>0&&c<i&&(c=i),c===i||n.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),n.length-o<c-i&&(c=n.length-o+i);var p=c-i;return this===n&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,i,c):Uint8Array.prototype.set.call(n,this.subarray(i,c),o),p};H.prototype.fill=function(n,o,i,c){if(typeof n=="string"){if(typeof o=="string"?(c=o,o=0,i=this.length):typeof i=="string"&&(c=i,i=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!H.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(n.length===1){var p=n.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(n=p)}}else typeof n=="number"?n=n&255:typeof n=="boolean"&&(n=Number(n));if(o<0||this.length<o||this.length<i)throw new RangeError("Out of range index");if(i<=o)return this;o=o>>>0,i=i===void 0?this.length:i>>>0,n||(n=0);var l;if(typeof n=="number")for(l=o;l<i;++l)this[l]=n;else{var u=H.isBuffer(n)?n:H.from(n,c),h=u.length;if(h===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(l=0;l<i-o;++l)this[l+o]=u[l%h]}return this};var mU=/[^+/0-9A-Za-z-_]/g;function dU(e){if(e=e.split("=")[0],e=e.trim().replace(mU,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function cf(e,n){n=n||1/0;for(var o,i=e.length,c=null,p=[],l=0;l<i;++l){if(o=e.charCodeAt(l),o>55295&&o<57344){if(!c){if(o>56319){(n-=3)>-1&&p.push(239,191,189);continue}else if(l+1===i){(n-=3)>-1&&p.push(239,191,189);continue}c=o;continue}if(o<56320){(n-=3)>-1&&p.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(n-=3)>-1&&p.push(239,191,189);if(c=null,o<128){if((n-=1)<0)break;p.push(o)}else if(o<2048){if((n-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((n-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((n-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function _U(e){for(var n=[],o=0;o<e.length;++o)n.push(e.charCodeAt(o)&255);return n}function lU(e,n){for(var o,i,c,p=[],l=0;l<e.length&&!((n-=2)<0);++l)o=e.charCodeAt(l),i=o>>8,c=o%256,p.push(c),p.push(i);return p}function TS(e){return rf.toByteArray(dU(e))}function Hm(e,n,o,i){for(var c=0;c<i&&!(c+o>=n.length||c>=e.length);++c)n[c+o]=e[c];return c}function zt(e,n){return e instanceof n||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===n.name}function df(e){return e!==e}var uU=function(){for(var e="0123456789abcdef",n=new Array(256),o=0;o<16;++o)for(var i=o*16,c=0;c<16;++c)n[i+c]=e[o]+e[c];return n}()});var CS=J((JK,SS)=>{r();var Ln=SS.exports={},qt,jt;function _f(){throw new Error("setTimeout has not been defined")}function lf(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?qt=setTimeout:qt=_f}catch(e){qt=_f}try{typeof clearTimeout=="function"?jt=clearTimeout:jt=lf}catch(e){jt=lf}})();function yS(e){if(qt===setTimeout)return setTimeout(e,0);if((qt===_f||!qt)&&setTimeout)return qt=setTimeout,setTimeout(e,0);try{return qt(e,0)}catch(n){try{return qt.call(null,e,0)}catch(o){return qt.call(this,e,0)}}}function fU(e){if(jt===clearTimeout)return clearTimeout(e);if((jt===lf||!jt)&&clearTimeout)return jt=clearTimeout,clearTimeout(e);try{return jt(e)}catch(n){try{return jt.call(null,e)}catch(o){return jt.call(this,e)}}}var br=[],_p=!1,pi,Vm=-1;function gU(){!_p||!pi||(_p=!1,pi.length?br=pi.concat(br):Vm=-1,br.length&&vS())}function vS(){if(!_p){var e=yS(gU);_p=!0;for(var n=br.length;n;){for(pi=br,br=[];++Vm<n;)pi&&pi[Vm].run();Vm=-1,n=br.length}pi=null,_p=!1,fU(e)}}Ln.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];br.push(new wS(e,n)),br.length===1&&!_p&&yS(vS)};function wS(e,n){this.fun=e,this.array=n}wS.prototype.run=function(){this.fun.apply(null,this.array)};Ln.title="browser";Ln.browser=!0;Ln.env={};Ln.argv=[];Ln.version="";Ln.versions={};function Lr(){}Ln.on=Lr;Ln.addListener=Lr;Ln.once=Lr;Ln.off=Lr;Ln.removeListener=Lr;Ln.removeAllListeners=Lr;Ln.emit=Lr;Ln.prependListener=Lr;Ln.prependOnceListener=Lr;Ln.listeners=function(e){return[]};Ln.binding=function(e){throw new Error("process.binding is not supported")};Ln.cwd=function(){return"/"};Ln.chdir=function(e){throw new Error("process.chdir is not supported")};Ln.umask=function(){return 0}});var m,_,hU,d,r=F(()=>{m=w(xS()),_=w(CS()),hU=function(e){function n(){var i=this||self;return delete e.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return n();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:n});var o=__magic__;return o}(Object),d=hU});var Qo,ya=F(()=>{"use strict";r();Qo=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var uf={};oe(uf,{css:()=>IS,default:()=>TU});var IS,TU,ff=F(()=>{"use strict";r();IS=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(IS));TU={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var up=F(()=>{"use strict";r()});var LS,Nr,NS,hf,PS,kS,eo,bc,Pt=F(()=>{"use strict";r();LS="error when signing",Nr="Transaction canceled",NS="error signing transaction",hf="provider not initialized",PS="You need a signer/valid signer to send a transaction,use either WalletProvider, LedgerProvider or WalletConnect",kS="Undefined transaction status",eo="Action not allowed. User is logged in. Call logout() first",bc="You cannot sign transactions from a different account"});var DS,ES,WS=F(()=>{"use strict";r();DS="https://addons.mozilla.org/en-US/firefox/addon/multiversx-defi-wallet",ES="https://chrome.google.com/webstore/detail/multiversx-defi-wallet/dngmlblcodfobpdpecaadgfbcggfjfnm"});var Tf,MS=F(()=>{"use strict";r();Tf=(i=>(i.SetGuardian="SetGuardian",i.GuardAccount="GuardAccount",i.UnGuardAccount="UnGuardAccount",i))(Tf||{})});var xf,yf,vf,wf,Lc,Sf,Cf=F(()=>{"use strict";r();xf="1.0.8",yf="1.0.11",vf="1.0.15",wf="1.0.17",Lc="1.0.22",Sf="1.0.23"});var Af,If=F(()=>{"use strict";r();Af={36864:{code:"codeSuccess",message:"Success"},27013:{code:"ERR_USER_DENIED",message:"Rejected by user"},27904:{code:"ERR_UNKNOWN_INSTRUCTION",message:"Unknown instruction"},28160:{code:"ERR_WRONG_CLA",message:"Wrong CLA"},28161:{code:"ERR_INVALID_ARGUMENTS",message:"Invalid arguments"},28162:{code:"ERR_INVALID_MESSAGE",message:"Invalid message"},28163:{code:"ERR_INVALID_P1",message:"Invalid P1"},28164:{code:"ERR_MESSAGE_TOO_LONG",message:"Message too long"},28165:{code:"ERR_RECEIVER_TOO_LONG",message:"Receiver too long"},28166:{code:"ERR_AMOUNT_TOO_LONG",message:"Amount too long"},28167:{code:"ERR_CONTRACT_DATA_DISABLED",message:"Contract data disabled in app options"},28168:{code:"ERR_MESSAGE_INCOMPLETE",message:"Message incomplete"},28176:{code:"ERR_SIGNATURE_FAILED",message:"Signature failed"},28169:{code:"ERR_WRONG_TX_VERSION",message:"Wrong TX version"},28170:{code:"ERR_NONCE_TOO_LONG",message:"Nonce too long"},28171:{code:"ERR_INVALID_AMOUNT",message:"Invalid amount"},28172:{code:"ERR_INVALID_FEE",message:"Invalid fee"},28173:{code:"ERR_PRETTY_FAILED",message:"Pretty failed"},28174:{code:"ERR_DATA_TOO_LONG",message:"Data too long"},28175:{code:"ERR_WRONG_TX_OPTIONS",message:"Invalid transaction options"},28177:{code:"ERR_SIGN_TX_DEPRECATED",message:"Regular transaction signing is deprecated in this version. Use hash signing."}}});var BS=F(()=>{"use strict";r()});var bf,Lf=F(()=>{"use strict";r();bf=(c=>(c.signature="signature",c.sessionId="sessionId",c.status="status",c.address="address",c))(bf||{})});var OS=F(()=>{"use strict";r()});var FS=F(()=>{"use strict";r()});var no,fp,va=F(()=>{"use strict";r();no=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),fp=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var et,Uo,on,RS,TX,US,xX,en=F(()=>{"use strict";r();va();et=(u=>(u.pending="pending",u.fail="fail",u.invalid="invalid",u.success="success",u.executed="executed",u.notExecuted="not executed",u.rewardReverted="reward-reverted",u))(et||{}),Uo=(u=>(u.signed="signed",u.cancelled="cancelled",u.success="success",u.sent="sent",u.fail="fail",u.timedOut="timedOut",u.invalid="invalid",u))(Uo||{}),on=(C=>(C.ledger="ledger",C.walletconnect="walletconnect",C.walletconnectv2="walletconnectv2",C.wallet="wallet",C.crossWindow="crossWindow",C.iframe="iframe",C.extension="extension",C.passkey="passkey",C.metamask="metamask",C.opera="opera",C.extra="extra",C.none="",C))(on||{}),RS=(o=>(o.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",o.reloginRequest="RELOGIN_REQUEST",o))(RS||{}),TX=b(b({},fp.WindowProviderRequestEnums),RS),US=(n=>(n.reloginResponse="RELOGIN_RESPONSE",n))(US||{}),xX=b(b({},fp.WindowProviderResponseEnums),US)});var GS=F(()=>{"use strict";r()});var HS=F(()=>{"use strict";r()});var Nc,xo,ln=F(()=>{"use strict";r();Nc=(i=>(i.nft="nft",i.esdt="esdt",i.egld="egld",i))(Nc||{}),xo=(c=>(c.raw="raw",c.text="text",c.decimal="decimal",c.smart="smart",c))(xo||{})});var VS=F(()=>{"use strict";r()});var $S=F(()=>{"use strict";r()});var zS=F(()=>{"use strict";r()});var Ve=F(()=>{"use strict";r();Lf();OS();FS();en();GS();HS();ln();VS();$S();zS()});var ci,qS,BX,jS,OX,KS,XS,FX,ZS,YS,gp=F(()=>{"use strict";r();Ve();ci={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:qS,egldLabel:BX}=ci["devnet"],{chainId:jS,egldLabel:OX}=ci["testnet"],{chainId:KS,egldLabel:XS}=ci["mainnet"],FX={["devnet"]:qS,["testnet"]:jS,["mainnet"]:KS},ZS={[qS]:"devnet",[jS]:"testnet",[KS]:"mainnet"},YS="multiversx://"});var JS,$m=F(()=>{"use strict";r();JS="cancel-transaction-toast"});var Kt,QS=F(()=>{"use strict";r();Kt=require("@multiversx/sdk-web-wallet-provider")});var _o,si=F(()=>{"use strict";r();_o=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var eC,nC,Nf,vU,wU,oC,Pf=F(()=>{"use strict";r();si();Nf=String((nC=(eC=_o.safeWindow)==null?void 0:eC.navigator)==null?void 0:nC.userAgent),vU=/^((?!chrome|android).)*safari/i.test(Nf),wU=/firefox/i.test(Nf)&&/windows/i.test(Nf),oC=vU||wU});var kf,zm,Pc,Df,kc,Mn,Xt,tC,rC,qm,aC,iC,Zt,jm,Km,pC,cC,sC,tn,yo,hp,mC,dC,Y=F(()=>{"use strict";r();up();Pt();WS();MS();Cf();If();BS();gp();$m();QS();Pf();kf=.01,zm=1500,Pc=5e4,Df=5e4,kc=1e9,Mn=18,Xt=4,tC=1,rC=1,qm=4294967295,aC=4294967280,iC="/dapp/init",Zt="signSession",jm="sdk-dapp-version",Km="logout",pC="login",cC="cancelSignTx",sC="refundedGas",tn="N/A",yo="0",hp="...",mC="-",dC="EGLD-000000"});var wa,Dc=F(()=>{"use strict";r();wa=()=>Date.now()/1e3});var _C,Ef=F(()=>{"use strict";r();_C=e=>new Date().setMilliseconds(new Date().getMilliseconds()+e)/1e3});var lC,uC=F(()=>{"use strict";r();lC=e=>new Date().setSeconds(new Date().getSeconds()+e)});var Xm=F(()=>{"use strict";r();Dc();Ef();uC()});var Wf={};oe(Wf,{clear:()=>IU,getItem:()=>CU,localStorageKeys:()=>kt,removeItem:()=>AU,setItem:()=>SU});var kt,Zm,SU,CU,AU,IU,Tp=F(()=>{"use strict";r();Xm();kt={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Zm=typeof localStorage!="undefined",SU=({key:e,data:n,expires:o})=>{!Zm||localStorage.setItem(String(e),JSON.stringify({expires:o,data:n}))},CU=e=>{if(!Zm)return;let n=localStorage.getItem(String(e));if(!n)return null;let o=JSON.parse(n);return!o||!o.hasOwnProperty("expires")||!o.hasOwnProperty("data")?null:wa()>=o.expires?(localStorage.removeItem(String(e)),null):o.data},AU=e=>{!Zm||localStorage.removeItem(String(e))},IU=()=>{!Zm||localStorage.clear()}});var Mf={};oe(Mf,{clear:()=>TC,getItem:()=>gC,removeItem:()=>hC,setItem:()=>fC,storage:()=>bU});var fC,gC,hC,TC,bU,xC=F(()=>{"use strict";r();fC=({key:e,data:n,expires:o})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:o,data:n}))},gC=e=>{let n=sessionStorage.getItem(String(e));if(!n)return null;let o=JSON.parse(n);return!o||!o.hasOwnProperty("expires")||!o.hasOwnProperty("data")?null:Date.now()>=o.expires?(sessionStorage.removeItem(String(e)),null):o.data},hC=e=>sessionStorage.removeItem(String(e)),TC=()=>sessionStorage.clear(),bU={setItem:fC,getItem:gC,removeItem:hC,clear:TC}});var vo,mi=F(()=>{"use strict";r();Tp();xC();vo={session:Mf,local:Wf}});var Bf,an,sn,un=F(()=>{"use strict";r();Bf=require("@reduxjs/toolkit");Y();an=(0,Bf.createAction)(Km),sn=(0,Bf.createAction)(pC,e=>({payload:e}))});var Ff,yC,vC,Ym,Of,wC,di,SC,Rf,yZ,Uf,CC,vZ,wZ,SZ,LU,NU,Jm,Qm=F(()=>{"use strict";r();Ff=require("@multiversx/sdk-core"),yC=require("@reduxjs/toolkit"),vC=require("redux-persist");Y();mi();Tp();un();Ym={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:yo},Of={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Ym},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},wC=(0,yC.createSlice)({name:"accountInfoSlice",initialState:Of,reducers:{setAddress:(e,n)=>{let o=n.payload;e.address=o,e.publicKey=o?new Ff.Address(o).hex():""},setAccount:(e,n)=>{let o=e.address===n.payload.address;e.accounts={[e.address]:o?n.payload:Ym},e.shard=n.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,n)=>{let{address:o}=e;e.accounts[o].nonce=n.payload},setAccountShard:(e,n)=>{e.shard=n.payload},setLedgerAccount:(e,n)=>{e.ledgerAccount=n.payload},updateLedgerAccount:(e,n)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=n.payload.index,e.ledgerAccount.address=n.payload.address)},setWalletConnectAccount:(e,n)=>{e.walletConnectAccount=n.payload},setIsAccountLoading:(e,n)=>{e.isAccountLoading=n.payload,e.accountLoadingError=null},setAccountLoadingError:(e,n)=>{e.accountLoadingError=n.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,n)=>{e.websocketEvent={timestamp:Date.now(),message:n.payload}},setWebsocketBatchEvent:(e,n)=>{e.websocketBatchEvent={timestamp:Date.now(),data:n.payload}}},extraReducers:e=>{e.addCase(an,()=>(vo.local.removeItem(kt.loginExpiresAt),Of)),e.addCase(sn,(n,o)=>{let{address:i}=o.payload;n.address=i,n.publicKey=new Ff.Address(i).hex()}),e.addCase(vC.REHYDRATE,(n,o)=>{var g;if(!((g=o.payload)!=null&&g.account))return;let{account:i}=o.payload,{address:c,shard:p,accounts:l,publicKey:u}=i;n.address=c,n.shard=p;let h=l&&c in l;n.accounts=h?l:Of.accounts,n.publicKey=u})}}),{setAccount:di,setAddress:SC,setAccountNonce:Rf,setAccountShard:yZ,setLedgerAccount:Uf,updateLedgerAccount:CC,setWalletConnectAccount:vZ,setIsAccountLoading:wZ,setAccountLoadingError:SZ,setWebsocketEvent:LU,setWebsocketBatchEvent:NU}=wC.actions,Jm=wC.reducer});function Ec(){return new Date().setHours(new Date().getHours()+24)}function Wc(e){vo.local.setItem({key:kt.loginExpiresAt,data:e,expires:e})}var Gf=F(()=>{"use strict";r();mi();Tp()});var IC,AC,bC,EZ,LC,NC,xp,WZ,PC,kC,MZ,BZ,OZ,ed,nd=F(()=>{"use strict";r();IC=require("@reduxjs/toolkit");Gf();en();un();AC={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},bC=(0,IC.createSlice)({name:"loginInfoSlice",initialState:AC,reducers:{setLoginMethod:(e,n)=>{e.loginMethod=n.payload},setTokenLogin:(e,n)=>{e.tokenLogin=n.payload},setTokenLoginSignature:(e,n)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=n.payload)},setWalletLogin:(e,n)=>{e.walletLogin=n.payload},setWalletConnectLogin:(e,n)=>{e.walletConnectLogin=n.payload},setLedgerLogin:(e,n)=>{e.ledgerLogin=n.payload},setWebviewLogin:(e,n)=>{e.webviewLogin=n.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,n)=>{e.logoutRoute=n.payload},setIsWalletConnectV2Initialized:(e,n)=>{e.isWalletConnectV2Initialized=n.payload}},extraReducers:e=>{e.addCase(an,()=>AC),e.addCase(sn,(n,o)=>{n.isLoginSessionInvalid=!1,n.loginMethod=o.payload.loginMethod,n.iframeLoginType=o.payload.iframeLoginType,Wc(Ec())})}}),{setLoginMethod:EZ,setWalletConnectLogin:LC,setLedgerLogin:NC,setTokenLogin:xp,setTokenLoginSignature:WZ,setWalletLogin:PC,invalidateLoginSession:kC,setLogoutRoute:MZ,setIsWalletConnectV2Initialized:BZ,setWebviewLogin:OZ}=bC.actions,ed=bC.reducer});var EC,DC,WC,GZ,PU,HZ,MC,od,td=F(()=>{"use strict";r();EC=require("@reduxjs/toolkit");un();DC={},WC=(0,EC.createSlice)({name:"modalsSlice",initialState:DC,reducers:{setTxSubmittedModal:(e,n)=>{e.txSubmittedModal=n.payload},setNotificationModal:(e,n)=>{e.notificationModal=n.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(an,()=>DC)}}),{setTxSubmittedModal:GZ,setNotificationModal:PU,clearTxSubmittedModal:HZ,clearNotificationModal:MC}=WC.actions,od=WC.reducer});var ye,Nn=F(()=>{"use strict";r();ya();ye=()=>{if(!Qo())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:n,hash:o,origin:i,href:c,search:p}}=window;return{pathname:n,hash:o,origin:i,href:c,search:p}}});var Pr,BC=F(()=>{"use strict";r();Nn();Pr=(e="")=>{let n=ye(),o=e.startsWith("http")||e.startsWith("www.");return!n.origin||e.startsWith(n.origin)||o?e:`${n.origin}/${e.replace("/","")}`}});var nt,OC=F(()=>{"use strict";r();$n();nt=()=>{let{pathname:e,search:n,hash:o}=ye();return`${e!=null?e:""}${n!=null?n:""}${o!=null?o:""}`}});var rd,FC=F(()=>{"use strict";r();si();rd=e=>{if(!_o.safeWindow.location)return;if(!new URL(_o.safeWindow.location.href).protocol.startsWith("http"))return _o.safeWindow.location.reload();_o.safeWindow.location.assign(e)}});var $n=F(()=>{"use strict";r();BC();OC();Nn();FC()});var RC,UC,yp,Mc=F(()=>{"use strict";r();$n();RC=!1,UC=(e=!0)=>{RC=e},yp=({timeout:e=0,url:n})=>{RC||setTimeout(()=>{if(!!window)return rd(n)},e)}});function No({callbackRoute:e,onLoginRedirect:n,options:o}){let i=Boolean(e),c=typeof n=="function";if(i&&e!=null){if(c)return n(e,o);yp({url:e,timeout:kU})}}var kU,GC=F(()=>{"use strict";r();Mc();kU=200});function HC(e){return e[Math.floor(Math.random()*e.length)]}var VC=F(()=>{"use strict";r()});function ad(e){let n=null;if((e==null?void 0:e.statusCode)in Af){let o=e==null?void 0:e.statusCode,{message:i}=Af[o];n=WU.includes(o)?$C:i}return{errorMessage:n,defaultErrorMessage:$C}}var $C,DU,EU,WU,Hf=F(()=>{"use strict";r();If();$C="Check if the MultiversX app is open on Ledger",DU=28161,EU=28160,WU=[DU,EU]});var kr=F(()=>{"use strict";r();GC();VC();Hf()});var zC,qC,jC,Vf,MU,KC,TY,xY,XC,pd,cd=F(()=>{"use strict";r();zC=require("@reduxjs/toolkit"),qC=w(require("lodash.omit")),jC=require("redux-persist");$m();un();kr();Vf={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},MU={network:Vf},KC=(0,zC.createSlice)({name:"appConfig",initialState:MU,reducers:{initializeNetworkConfig:(e,n)=>{let o=HC(n.payload.walletConnectV2RelayAddresses),i=(0,qC.default)(n.payload,"walletConnectV2RelayAddresses");e.network=q(b(b({},e.network),i),{walletConnectV2RelayAddress:o})},updateNetworkConfig:(e,n)=>{e.network=b(b({},e.network),n.payload)},setCustomWalletAddress:(e,n)=>{e.network.customWalletAddress=n.payload}},extraReducers:e=>{e.addCase(an,n=>{n.network.customWalletAddress=void 0}),e.addCase(jC.REHYDRATE,(n,o)=>{var c,p;if(!((p=(c=o.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:i}}=o.payload;n.network.customWalletAddress=i})}}),{initializeNetworkConfig:TY,updateNetworkConfig:xY,setCustomWalletAddress:XC}=KC.actions,pd=KC.reducer});var ZC,$f,YC,AY,IY,bY,sd,md=F(()=>{"use strict";r();ZC=require("@reduxjs/toolkit");Ve();un();$f={isSigning:!1,signedSessions:{}},YC=(0,ZC.createSlice)({name:"signedMessageInfoSliceState",initialState:$f,reducers:{setSignSession:(e,n)=>{let{sessionId:o,signedSession:i,errorMessage:c}=n.payload;c&&(e.errorMessage=c),e.isSigning=i.status==="pending",e.signedSessions[o]=b(b({},e.signedSessions[o]),i)},setSignSessionState:(e,n)=>b(b({},e),n.payload),clearSignedMessageInfo:()=>$f},extraReducers:e=>{e.addCase(an,()=>$f)}}),{setSignSession:AY,clearSignedMessageInfo:IY,setSignSessionState:bY}=YC.actions,sd=YC.reducer});var QC,e1,JC,n1,zf,o1,t1,qf,dd,_d=F(()=>{"use strict";r();QC=require("@reduxjs/toolkit"),e1=require("redux-persist");Ve();Dc();un();JC={customToasts:[],transactionToasts:[]},n1=(0,QC.createSlice)({name:"toastsSlice",initialState:JC,reducers:{addCustomToast:(e,n)=>{let o=n.payload.toastId||`custom-toast-${e.customToasts.length+1}`,i=e.customToasts.findIndex(c=>c.toastId===o);if(i!==-1){e.customToasts[i]=q(b(b({},e.customToasts[i]),n.payload),{type:"custom",toastId:o});return}e.customToasts.push(q(b({},n.payload),{type:"custom",toastId:o}))},removeCustomToast:(e,n)=>{e.customToasts=e.customToasts.filter(o=>o.toastId!==n.payload)},addTransactionToast:(e,n)=>{e.transactionToasts.push({type:"transaction",startTimestamp:wa(),toastId:n.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,n)=>{e.transactionToasts=e.transactionToasts.filter(o=>o.toastId!==n.payload)}},extraReducers:e=>{e.addCase(an,()=>JC),e.addCase(e1.REHYDRATE,(n,o)=>{var c,p;let i=(p=(c=o.customToasts)==null?void 0:c.filter(l=>!("component"in l)))!=null?p:[];n.customToasts=i})}}),{addCustomToast:zf,removeCustomToast:o1,addTransactionToast:t1,removeTransactionToast:qf}=n1.actions,dd=n1.reducer});var r1,Kf,Xf,Zf,BU,jf,a1,OY,OU,vp,ld,ud=F(()=>{"use strict";r();r1=require("@reduxjs/toolkit");un();Kf="Transaction failed",Xf="Transaction successful",Zf="Processing transaction",BU="Transaction submitted",jf={},a1=(0,r1.createSlice)({name:"transactionsInfo",initialState:jf,reducers:{setTransactionsDisplayInfo(e,n){let{sessionId:o,transactionsDisplayInfo:i}=n.payload;o!=null&&(e[o]={errorMessage:(i==null?void 0:i.errorMessage)||Kf,successMessage:(i==null?void 0:i.successMessage)||Xf,processingMessage:(i==null?void 0:i.processingMessage)||Zf,submittedMessage:(i==null?void 0:i.submittedMessage)||BU,transactionDuration:i==null?void 0:i.transactionDuration})},clearTransactionsInfoForSessionId(e,n){n.payload!=null&&delete e[n.payload]},clearTransactionsInfo:()=>jf},extraReducers:e=>{e.addCase(an,()=>jf)}}),{clearTransactionsInfo:OY,setTransactionsDisplayInfo:OU,clearTransactionsInfoForSessionId:vp}=a1.actions,ld=a1.reducer});function Yt(e){return e!=null&&(jU(e)||fd(e))}function Sa(e){return e!=null&&(KU(e)||JU(e))}function Ca(e){return e!=null&&(XU(e)||QU(e))}function i1(e){return e!=null&&(ZU(e)||e7(e))}function Bc(e){return e!=null&&YU(e)}function jU(e){return e!=null&&FU.includes(e)}function KU(e){return e!=null&&RU.includes(e)}function XU(e){return e!=null&&UU.includes(e)}function ZU(e){return e!=null&&GU.includes(e)}function YU(e){return e!=null&&HU.includes(e)}function fd(e){return e!=null&&VU.includes(e)}function JU(e){return e!=null&&$U.includes(e)}function QU(e){return e!=null&&zU.includes(e)}function e7(e){return e!=null&&qU.includes(e)}var FU,RU,UU,GU,HU,VU,$U,zU,qU,Dr=F(()=>{"use strict";r();en();FU=["sent"],RU=["success"],UU=["fail","cancelled","timedOut"],GU=["invalid"],HU=["timedOut"],VU=["pending"],$U=["success"],zU=["fail","invalid"],qU=["not executed"]});var p1,c1,Oc,n7,s1,m1,d1,o7,Aa,t7,_1,qY,l1,Er,Jt,jY,gd,hd=F(()=>{"use strict";r();p1=require("@reduxjs/toolkit"),c1=require("redux-persist");en();Dr();un();Oc={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},n7={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},s1=(0,p1.createSlice)({name:"transactionsSlice",initialState:Oc,reducers:{moveTransactionsToSignedState:(e,n)=>{var h,g;let{sessionId:o,transactions:i,errorMessage:c,status:p,redirectRoute:l,customTransactionInformation:u}=n.payload;e.customTransactionInformationForSessionId[o]=b(b(b({},n7),((h=e.signedTransactions[o])==null?void 0:h.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[o]||{}),e.signedTransactions[o]={transactions:i,status:p,errorMessage:c,redirectRoute:l,customTransactionInformation:b(b({},e.customTransactionInformationForSessionId[o]),u!=null?u:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===o&&(e.transactionsToSign=Oc.transactionsToSign)},clearSignedTransaction:(e,n)=>{e.signedTransactions[n.payload]&&delete e.signedTransactions[n.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,n)=>{e.signedTransactions=b(b({},e.signedTransactions),n.payload)},updateSignedTransactions:(e,n)=>{let{sessionId:o,status:i,errorMessage:c,transactions:p}=n.payload;e.signedTransactions[o]!=null&&(e.signedTransactions[o].status=i,c!=null&&(e.signedTransactions[o].errorMessage=c),p!=null&&(e.signedTransactions[o].transactions=p))},updateSignedTransactionStatus:(e,n)=>{var g,T,y,C,N,A,P,W;let{sessionId:o,status:i,errorMessage:c,transactionHash:p,serverTransaction:l,inTransit:u}=n.payload,h=(T=(g=e.signedTransactions)==null?void 0:g[o])==null?void 0:T.transactions;if(h!=null){e.signedTransactions[o].transactions=h.map(R=>R.hash===p?q(b(b({},l!=null?l:{}),R),{status:i,errorMessage:c,inTransit:u}):R);let B=(C=(y=e.signedTransactions[o])==null?void 0:y.transactions)==null?void 0:C.every(R=>Sa(R.status)),z=(A=(N=e.signedTransactions[o])==null?void 0:N.transactions)==null?void 0:A.some(R=>Ca(R.status)),K=(W=(P=e.signedTransactions[o])==null?void 0:P.transactions)==null?void 0:W.every(R=>i1(R.status));B&&(e.signedTransactions[o].status="success"),z&&(e.signedTransactions[o].status="fail"),K&&(e.signedTransactions[o].status="invalid")}},setTransactionsToSign:(e,n)=>{e.transactionsToSign=n.payload;let{sessionId:o,customTransactionInformation:i}=n.payload;e.customTransactionInformationForSessionId[o]=i,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Oc.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Oc.signedTransactions},setSignTransactionsError:(e,n)=>{e.signTransactionsError=n.payload},setSignTransactionsCancelMessage:(e,n)=>{e.signTransactionsCancelMessage=n.payload},updateSignedTransactionsCustomTransactionInformation:(e,n)=>{let{sessionId:o,customTransactionInformationOverrides:i}=n.payload;e.signedTransactions[o]!=null&&(e.signedTransactions[o].customTransactionInformation=b(b({},e.signedTransactions[o].customTransactionInformation),i))}},extraReducers:e=>{e.addCase(an,()=>Oc),e.addCase(c1.REHYDRATE,(n,o)=>{var l;if(n.signTransactionsCancelMessage=null,!((l=o.payload)!=null&&l.transactions))return;let{signedTransactions:i,customTransactionInformationForSessionId:c}=o.payload.transactions,p=Object.entries(i).reduce((u,[h,g])=>{let T=new Date(h),y=new Date;return y.setHours(y.getHours()+5),y-T>0||(u[h]=g),u},{});c!=null&&(n.customTransactionInformationForSessionId=c),i!=null&&(n.signedTransactions=p)})}}),{updateSignedTransactionStatus:m1,updateSignedTransactions:d1,setTransactionsToSign:o7,clearAllTransactionsToSign:Aa,clearAllSignedTransactions:t7,clearSignedTransaction:_1,clearTransactionToSign:qY,setSignTransactionsError:l1,setSignTransactionsCancelMessage:Er,moveTransactionsToSignedState:Jt,updateSignedTransactionsCustomTransactionInformation:jY}=s1.actions,gd=s1.reducer});var u1,Yf,f1,YY,JY,g1,QY,Td,xd=F(()=>{"use strict";r();u1=require("@reduxjs/toolkit");un();Yf={},f1=(0,u1.createSlice)({name:"batchTransactionsSlice",initialState:Yf,reducers:{setBatchTransactions:(e,n)=>{e[n.payload.id]=n.payload},updateBatchTransactions:(e,n)=>{e[n.payload.id]=n.payload},clearBatchTransactions:(e,n)=>{delete e[n.payload.batchId]},clearAllBatchTransactions:()=>Yf},extraReducers:e=>{e.addCase(an,()=>Yf)}}),{setBatchTransactions:YY,updateBatchTransactions:JY,clearBatchTransactions:g1,clearAllBatchTransactions:QY}=f1.actions,Td=f1.reducer});var T1,h1,x1,tJ,y1,Jf=F(()=>{"use strict";r();T1=require("@reduxjs/toolkit");un();h1={},x1=(0,T1.createSlice)({name:"dappConfigSlice",initialState:h1,reducers:{setDappConfig:(e,n)=>n.payload},extraReducers:e=>{e.addCase(an,()=>h1)}}),{setDappConfig:tJ}=x1.actions,y1=x1.reducer});var Ye=F(()=>{"use strict";r();Qm();nd();td();cd();md();_d();ud();hd();xd();Jf()});var Qf=F(()=>{"use strict";r()});var S1,p7,c7,_i,wd=F(()=>{"use strict";r();S1=require("@reduxjs/toolkit");Qf();Qm();xd();Jf();nd();td();cd();md();_d();ud();hd();p7={["account"]:Jm,["dappConfig"]:y1,["loginInfo"]:ed,["modals"]:od,["networkConfig"]:pd,["signedMessageInfo"]:sd,["toasts"]:dd,["transactionsInfo"]:ld,["transactions"]:gd,["batchTransactions"]:Td},c7=(e={})=>(0,S1.combineReducers)(b(b({},p7),e)),_i=c7});var b1={};oe(b1,{default:()=>C7,sessionStorageReducers:()=>eg});function Wr(e,n=[]){return{key:e,version:1,storage:A1.default,blacklist:n}}var Go,C1,A1,s7,Fc,m7,d7,_7,l7,u7,f7,g7,h7,T7,x7,I1,y7,eg,v7,w7,S7,C7,L1=F(()=>{"use strict";r();Go=require("redux-persist"),C1=w(require("redux-persist/lib/storage")),A1=w(require("redux-persist/lib/storage/session"));wd();Ye();Qm();xd();nd();td();cd();md();_d();ud();hd();Qf();s7={persistReducersStorageType:"localStorage"},Fc={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},m7=Wr(Fc["account"]),d7=Wr(Fc["loginInfo"]),_7=Wr(Fc["modals"]),l7=Wr(Fc["networkConfig"]),u7={2:e=>q(b({},e),{networkConfig:Vf})};f7=Wr("sdk-dapp-transactionsInfo"),g7=Wr("sdk-dapp-transactions",["transactionsToSign"]),h7=Wr("sdk-dapp-batchTransactions",["batchTransactions"]),T7=Wr("sdk-dapp-toasts"),x7=Wr("sdk-dapp-signedMessageInfo"),I1={key:"sdk-dapp-store",version:2,storage:C1.default,whitelist:Object.keys(Fc),migrate:(0,Go.createMigrate)(u7,{debug:!1})},y7=q(b({},I1),{whitelist:[]}),eg={["toasts"]:(0,Go.persistReducer)(T7,dd),["transactions"]:(0,Go.persistReducer)(g7,gd),["transactionsInfo"]:(0,Go.persistReducer)(f7,ld),["batchTransactions"]:(0,Go.persistReducer)(h7,Td),["signedMessageInfo"]:(0,Go.persistReducer)(x7,sd)},v7=q(b({},eg),{["account"]:(0,Go.persistReducer)(m7,Jm),["loginInfo"]:(0,Go.persistReducer)(d7,ed),["modals"]:(0,Go.persistReducer)(_7,od),["networkConfig"]:(0,Go.persistReducer)(l7,pd)}),w7=s7.persistReducersStorageType==="localStorage",S7=w7?(0,Go.persistReducer)(I1,_i(eg)):(0,Go.persistReducer)(y7,_i(v7)),C7=S7});var N1={};oe(N1,{default:()=>A7});var A7,P1=F(()=>{"use strict";r();wd();A7=_i()});var k1={};oe(k1,{default:()=>b7});var vt,I7,b7,D1=F(()=>{"use strict";r();vt=require("redux-persist"),I7=[vt.FLUSH,vt.REHYDRATE,vt.PAUSE,vt.PERSIST,vt.PURGE,vt.REGISTER],b7=I7});var M1={};oe(M1,{default:()=>W1});function W1(e){return(0,E1.persistStore)(e)}var E1,B1=F(()=>{"use strict";r();E1=require("redux-persist")});var fb=J((Hde,ub)=>{r();var L8=typeof d=="object"&&d&&d.Object===Object&&d;ub.exports=L8});var Zc=J((Vde,gb)=>{r();var N8=fb(),P8=typeof self=="object"&&self&&self.Object===Object&&self,k8=N8||P8||Function("return this")();gb.exports=k8});var m_=J(($de,hb)=>{r();var D8=Zc(),E8=D8.Symbol;hb.exports=E8});var vb=J((zde,yb)=>{r();var Tb=m_(),xb=Object.prototype,W8=xb.hasOwnProperty,M8=xb.toString,Yc=Tb?Tb.toStringTag:void 0;function B8(e){var n=W8.call(e,Yc),o=e[Yc];try{e[Yc]=void 0;var i=!0}catch(p){}var c=M8.call(e);return i&&(n?e[Yc]=o:delete e[Yc]),c}yb.exports=B8});var Sb=J((qde,wb)=>{r();var O8=Object.prototype,F8=O8.toString;function R8(e){return F8.call(e)}wb.exports=R8});var d_=J((jde,Ib)=>{r();var Cb=m_(),U8=vb(),G8=Sb(),H8="[object Null]",V8="[object Undefined]",Ab=Cb?Cb.toStringTag:void 0;function $8(e){return e==null?e===void 0?V8:H8:Ab&&Ab in Object(e)?U8(e):G8(e)}Ib.exports=$8});var Pg=J((Kde,bb)=>{r();var z8=Array.isArray;bb.exports=z8});var kg=J((Xde,Lb)=>{r();function q8(e){return e!=null&&typeof e=="object"}Lb.exports=q8});var Pb=J((Zde,Nb)=>{r();var j8=d_(),K8=Pg(),X8=kg(),Z8="[object String]";function Y8(e){return typeof e=="string"||!K8(e)&&X8(e)&&j8(e)==Z8}Nb.exports=Y8});var kp=J((Ole,jb)=>{r();function cG(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}jb.exports=cG});var Mg=J((Fle,Kb)=>{r();var sG=d_(),mG=kp(),dG="[object AsyncFunction]",_G="[object Function]",lG="[object GeneratorFunction]",uG="[object Proxy]";function fG(e){if(!mG(e))return!1;var n=sG(e);return n==_G||n==lG||n==dG||n==uG}Kb.exports=fG});var Zb=J((Rle,Xb)=>{r();var gG=Zc(),hG=gG["__core-js_shared__"];Xb.exports=hG});var Qb=J((Ule,Jb)=>{r();var Bg=Zb(),Yb=function(){var e=/[^.]+$/.exec(Bg&&Bg.keys&&Bg.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function TG(e){return!!Yb&&Yb in e}Jb.exports=TG});var nL=J((Gle,eL)=>{r();var xG=Function.prototype,yG=xG.toString;function vG(e){if(e!=null){try{return yG.call(e)}catch(n){}try{return e+""}catch(n){}}return""}eL.exports=vG});var tL=J((Hle,oL)=>{r();var wG=Mg(),SG=Qb(),CG=kp(),AG=nL(),IG=/[\\^$.*+?()[\]{}|]/g,bG=/^\[object .+?Constructor\]$/,LG=Function.prototype,NG=Object.prototype,PG=LG.toString,kG=NG.hasOwnProperty,DG=RegExp("^"+PG.call(kG).replace(IG,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function EG(e){if(!CG(e)||SG(e))return!1;var n=wG(e)?DG:bG;return n.test(AG(e))}oL.exports=EG});var aL=J((Vle,rL)=>{r();function WG(e,n){return e==null?void 0:e[n]}rL.exports=WG});var h_=J(($le,iL)=>{r();var MG=tL(),BG=aL();function OG(e,n){var o=BG(e,n);return MG(o)?o:void 0}iL.exports=OG});var os=J((zle,pL)=>{r();var FG=h_(),RG=FG(Object,"create");pL.exports=RG});var mL=J((qle,sL)=>{r();var cL=os();function UG(){this.__data__=cL?cL(null):{},this.size=0}sL.exports=UG});var _L=J((jle,dL)=>{r();function GG(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}dL.exports=GG});var uL=J((Kle,lL)=>{r();var HG=os(),VG="__lodash_hash_undefined__",$G=Object.prototype,zG=$G.hasOwnProperty;function qG(e){var n=this.__data__;if(HG){var o=n[e];return o===VG?void 0:o}return zG.call(n,e)?n[e]:void 0}lL.exports=qG});var gL=J((Xle,fL)=>{r();var jG=os(),KG=Object.prototype,XG=KG.hasOwnProperty;function ZG(e){var n=this.__data__;return jG?n[e]!==void 0:XG.call(n,e)}fL.exports=ZG});var TL=J((Zle,hL)=>{r();var YG=os(),JG="__lodash_hash_undefined__";function QG(e,n){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=YG&&n===void 0?JG:n,this}hL.exports=QG});var yL=J((Yle,xL)=>{r();var eH=mL(),nH=_L(),oH=uL(),tH=gL(),rH=TL();function Dp(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var i=e[n];this.set(i[0],i[1])}}Dp.prototype.clear=eH;Dp.prototype.delete=nH;Dp.prototype.get=oH;Dp.prototype.has=tH;Dp.prototype.set=rH;xL.exports=Dp});var wL=J((Jle,vL)=>{r();function aH(){this.__data__=[],this.size=0}vL.exports=aH});var Og=J((Qle,SL)=>{r();function iH(e,n){return e===n||e!==e&&n!==n}SL.exports=iH});var ts=J((eue,CL)=>{r();var pH=Og();function cH(e,n){for(var o=e.length;o--;)if(pH(e[o][0],n))return o;return-1}CL.exports=cH});var IL=J((nue,AL)=>{r();var sH=ts(),mH=Array.prototype,dH=mH.splice;function _H(e){var n=this.__data__,o=sH(n,e);if(o<0)return!1;var i=n.length-1;return o==i?n.pop():dH.call(n,o,1),--this.size,!0}AL.exports=_H});var LL=J((oue,bL)=>{r();var lH=ts();function uH(e){var n=this.__data__,o=lH(n,e);return o<0?void 0:n[o][1]}bL.exports=uH});var PL=J((tue,NL)=>{r();var fH=ts();function gH(e){return fH(this.__data__,e)>-1}NL.exports=gH});var DL=J((rue,kL)=>{r();var hH=ts();function TH(e,n){var o=this.__data__,i=hH(o,e);return i<0?(++this.size,o.push([e,n])):o[i][1]=n,this}kL.exports=TH});var WL=J((aue,EL)=>{r();var xH=wL(),yH=IL(),vH=LL(),wH=PL(),SH=DL();function Ep(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var i=e[n];this.set(i[0],i[1])}}Ep.prototype.clear=xH;Ep.prototype.delete=yH;Ep.prototype.get=vH;Ep.prototype.has=wH;Ep.prototype.set=SH;EL.exports=Ep});var BL=J((iue,ML)=>{r();var CH=h_(),AH=Zc(),IH=CH(AH,"Map");ML.exports=IH});var RL=J((pue,FL)=>{r();var OL=yL(),bH=WL(),LH=BL();function NH(){this.size=0,this.__data__={hash:new OL,map:new(LH||bH),string:new OL}}FL.exports=NH});var GL=J((cue,UL)=>{r();function PH(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}UL.exports=PH});var rs=J((sue,HL)=>{r();var kH=GL();function DH(e,n){var o=e.__data__;return kH(n)?o[typeof n=="string"?"string":"hash"]:o.map}HL.exports=DH});var $L=J((mue,VL)=>{r();var EH=rs();function WH(e){var n=EH(this,e).delete(e);return this.size-=n?1:0,n}VL.exports=WH});var qL=J((due,zL)=>{r();var MH=rs();function BH(e){return MH(this,e).get(e)}zL.exports=BH});var KL=J((_ue,jL)=>{r();var OH=rs();function FH(e){return OH(this,e).has(e)}jL.exports=FH});var ZL=J((lue,XL)=>{r();var RH=rs();function UH(e,n){var o=RH(this,e),i=o.size;return o.set(e,n),this.size+=o.size==i?0:1,this}XL.exports=UH});var JL=J((uue,YL)=>{r();var GH=RL(),HH=$L(),VH=qL(),$H=KL(),zH=ZL();function Wp(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var i=e[n];this.set(i[0],i[1])}}Wp.prototype.clear=GH;Wp.prototype.delete=HH;Wp.prototype.get=VH;Wp.prototype.has=$H;Wp.prototype.set=zH;YL.exports=Wp});var eN=J((fue,QL)=>{r();var qH="__lodash_hash_undefined__";function jH(e){return this.__data__.set(e,qH),this}QL.exports=jH});var oN=J((gue,nN)=>{r();function KH(e){return this.__data__.has(e)}nN.exports=KH});var rN=J((hue,tN)=>{r();var XH=JL(),ZH=eN(),YH=oN();function T_(e){var n=-1,o=e==null?0:e.length;for(this.__data__=new XH;++n<o;)this.add(e[n])}T_.prototype.add=T_.prototype.push=ZH;T_.prototype.has=YH;tN.exports=T_});var iN=J((Tue,aN)=>{r();function JH(e,n,o,i){for(var c=e.length,p=o+(i?1:-1);i?p--:++p<c;)if(n(e[p],p,e))return p;return-1}aN.exports=JH});var cN=J((xue,pN)=>{r();function QH(e){return e!==e}pN.exports=QH});var mN=J((yue,sN)=>{r();function e9(e,n,o){for(var i=o-1,c=e.length;++i<c;)if(e[i]===n)return i;return-1}sN.exports=e9});var _N=J((vue,dN)=>{r();var n9=iN(),o9=cN(),t9=mN();function r9(e,n,o){return n===n?t9(e,n,o):n9(e,o9,o)}dN.exports=r9});var uN=J((wue,lN)=>{r();var a9=_N();function i9(e,n){var o=e==null?0:e.length;return!!o&&a9(e,n,0)>-1}lN.exports=i9});var gN=J((Sue,fN)=>{r();function p9(e,n,o){for(var i=-1,c=e==null?0:e.length;++i<c;)if(o(n,e[i]))return!0;return!1}fN.exports=p9});var TN=J((Cue,hN)=>{r();function c9(e,n){return e.has(n)}hN.exports=c9});var yN=J((Aue,xN)=>{r();var s9=h_(),m9=Zc(),d9=s9(m9,"Set");xN.exports=d9});var wN=J((Iue,vN)=>{r();function _9(){}vN.exports=_9});var Fg=J((bue,SN)=>{r();function l9(e){var n=-1,o=Array(e.size);return e.forEach(function(i){o[++n]=i}),o}SN.exports=l9});var AN=J((Lue,CN)=>{r();var Rg=yN(),u9=wN(),f9=Fg(),g9=1/0,h9=Rg&&1/f9(new Rg([,-0]))[1]==g9?function(e){return new Rg(e)}:u9;CN.exports=h9});var bN=J((Nue,IN)=>{r();var T9=rN(),x9=uN(),y9=gN(),v9=TN(),w9=AN(),S9=Fg(),C9=200;function A9(e,n,o){var i=-1,c=x9,p=e.length,l=!0,u=[],h=u;if(o)l=!1,c=y9;else if(p>=C9){var g=n?null:w9(e);if(g)return S9(g);l=!1,c=v9,h=new T9}else h=n?[]:u;e:for(;++i<p;){var T=e[i],y=n?n(T):T;if(T=o||T!==0?T:0,l&&y===y){for(var C=h.length;C--;)if(h[C]===y)continue e;n&&h.push(y),u.push(T)}else c(h,y,o)||(h!==u&&h.push(y),u.push(T))}return u}IN.exports=A9});var NN=J((Pue,LN)=>{r();var I9=bN();function b9(e){return e&&e.length?I9(e):[]}LN.exports=b9});var Hr={};oe(Hr,{css:()=>tP,default:()=>G9});var tP,G9,Vr=F(()=>{"use strict";r();tP=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tP));G9={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Th={};oe(Th,{css:()=>xP,default:()=>J9});var xP,J9,xh=F(()=>{"use strict";r();xP=`.dapp-core-component__loginButtonStyles__default-login-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xP));J9={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var wi={};oe(wi,{css:()=>vP,default:()=>eV});var vP,eV,Si=F(()=>{"use strict";r();vP=`.dapp-core-component__extensionLoginButton-styles__extension-login {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__login-text {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__noExtensionButtonContent {
  box-sizing: border-box;
}

.dapp-core-component__extensionLoginButton-styles__no-extension-button-title {
  box-sizing: border-box;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vP));eV={"extension-login":"dapp-core-component__extensionLoginButton-styles__extension-login",extensionLogin:"dapp-core-component__extensionLoginButton-styles__extension-login","login-text":"dapp-core-component__extensionLoginButton-styles__login-text",loginText:"dapp-core-component__extensionLoginButton-styles__login-text","no-extension-button-wrapper":"dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper",noExtensionButtonWrapper:"dapp-core-component__extensionLoginButton-styles__no-extension-button-wrapper",noExtensionButtonContent:"dapp-core-component__extensionLoginButton-styles__noExtensionButtonContent","no-extension-button-title":"dapp-core-component__extensionLoginButton-styles__no-extension-button-title",noExtensionButtonTitle:"dapp-core-component__extensionLoginButton-styles__no-extension-button-title"}});var Sh={};oe(Sh,{css:()=>SP,default:()=>oV});var SP,oV,Ch=F(()=>{"use strict";r();SP=`.dapp-core-component__iframeLoginButton-styles__metamask-proxy-login {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__login-text {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-wrapper {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__noIframeButtonContent {
  box-sizing: border-box;
}

.dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-title {
  box-sizing: border-box;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(SP));oV={"metamask-proxy-login":"dapp-core-component__iframeLoginButton-styles__metamask-proxy-login",metamaskProxyLogin:"dapp-core-component__iframeLoginButton-styles__metamask-proxy-login","login-text":"dapp-core-component__iframeLoginButton-styles__login-text",loginText:"dapp-core-component__iframeLoginButton-styles__login-text","no-metamask-proxy-button-wrapper":"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-wrapper",noMetamaskProxyButtonWrapper:"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-wrapper",noIframeButtonContent:"dapp-core-component__iframeLoginButton-styles__noIframeButtonContent","no-metamask-proxy-button-title":"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-title",noMetamaskProxyButtonTitle:"dapp-core-component__iframeLoginButton-styles__no-metamask-proxy-button-title"}});var Ih={};oe(Ih,{css:()=>IP,default:()=>rV});var IP,rV,bh=F(()=>{"use strict";r();IP=`.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(IP));rV={"pagination-edge-button":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",inactive:"dapp-core-component__paginationEdgeButtonStyles__inactive","pagination-edge-button-icon":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon",paginationEdgeButtonIcon:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon","pagination-edge-button-text":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",paginationEdgeButtonText:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",show:"dapp-core-component__paginationEdgeButtonStyles__show"}});var NP=J((n1e,LP)=>{r();var iV=Math.max,pV=Math.min;function cV(e,n,o){return e>=pV(n,o)&&e<iV(n,o)}LP.exports=cV});var kP=J((o1e,PP)=>{r();var sV=/\s/;function mV(e){for(var n=e.length;n--&&sV.test(e.charAt(n)););return n}PP.exports=mV});var EP=J((t1e,DP)=>{r();var dV=kP(),_V=/^\s+/;function lV(e){return e&&e.slice(0,dV(e)+1).replace(_V,"")}DP.exports=lV});var Ph=J((r1e,WP)=>{r();var uV=d_(),fV=kg(),gV="[object Symbol]";function hV(e){return typeof e=="symbol"||fV(e)&&uV(e)==gV}WP.exports=hV});var kh=J((a1e,OP)=>{r();var TV=EP(),MP=kp(),xV=Ph(),BP=0/0,yV=/^[-+]0x[0-9a-f]+$/i,vV=/^0b[01]+$/i,wV=/^0o[0-7]+$/i,SV=parseInt;function CV(e){if(typeof e=="number")return e;if(xV(e))return BP;if(MP(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=MP(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=TV(e);var o=vV.test(e);return o||wV.test(e)?SV(e.slice(2),o?2:8):yV.test(e)?BP:+e}OP.exports=CV});var Dh=J((i1e,RP)=>{r();var AV=kh(),FP=1/0,IV=17976931348623157e292;function bV(e){if(!e)return e===0?e:0;if(e=AV(e),e===FP||e===-FP){var n=e<0?-1:1;return n*IV}return e===e?e:0}RP.exports=bV});var HP=J((p1e,GP)=>{r();var LV=NP(),UP=Dh(),NV=kh();function PV(e,n,o){return n=UP(n),o===void 0?(o=n,n=0):o=UP(o),e=NV(e),LV(e,n,o)}GP.exports=PV});var $P=J((c1e,VP)=>{r();var kV=Math.ceil,DV=Math.max;function EV(e,n,o,i){for(var c=-1,p=DV(kV((n-e)/(o||1)),0),l=Array(p);p--;)l[i?p:++c]=e,e+=o;return l}VP.exports=EV});var qP=J((s1e,zP)=>{r();var WV=9007199254740991;function MV(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=WV}zP.exports=MV});var KP=J((m1e,jP)=>{r();var BV=Mg(),OV=qP();function FV(e){return e!=null&&OV(e.length)&&!BV(e)}jP.exports=FV});var ZP=J((d1e,XP)=>{r();var RV=9007199254740991,UV=/^(?:0|[1-9]\d*)$/;function GV(e,n){var o=typeof e;return n=n==null?RV:n,!!n&&(o=="number"||o!="symbol"&&UV.test(e))&&e>-1&&e%1==0&&e<n}XP.exports=GV});var JP=J((_1e,YP)=>{r();var HV=Og(),VV=KP(),$V=ZP(),zV=kp();function qV(e,n,o){if(!zV(o))return!1;var i=typeof n;return(i=="number"?VV(o)&&$V(n,o.length):i=="string"&&n in o)?HV(o[n],e):!1}YP.exports=qV});var ek=J((l1e,QP)=>{r();var jV=$P(),KV=JP(),Eh=Dh();function XV(e){return function(n,o,i){return i&&typeof i!="number"&&KV(n,o,i)&&(o=i=void 0),n=Eh(n),o===void 0?(o=n,n=0):o=Eh(o),i=i===void 0?n<o?1:-1:Eh(i),jV(n,o,i,e)}}QP.exports=XV});var ok=J((u1e,nk)=>{r();var ZV=ek(),YV=ZV();nk.exports=YV});var Bh={};oe(Bh,{css:()=>ik,default:()=>JV});var ik,JV,Oh=F(()=>{"use strict";r();ik=`.dapp-core-component__paginationStyles__pagination {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ik));JV={pagination:"dapp-core-component__paginationStyles__pagination","pagination-angle":"dapp-core-component__paginationStyles__pagination-angle",paginationAngle:"dapp-core-component__paginationStyles__pagination-angle",disabled:"dapp-core-component__paginationStyles__disabled","pagination-angle-icon":"dapp-core-component__paginationStyles__pagination-angle-icon",paginationAngleIcon:"dapp-core-component__paginationStyles__pagination-angle-icon","pagination-edge-button":"dapp-core-component__paginationStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationStyles__pagination-edge-button",reversed:"dapp-core-component__paginationStyles__reversed","pagination-items":"dapp-core-component__paginationStyles__pagination-items",paginationItems:"dapp-core-component__paginationStyles__pagination-items","pagination-item-wrapper":"dapp-core-component__paginationStyles__pagination-item-wrapper",paginationItemWrapper:"dapp-core-component__paginationStyles__pagination-item-wrapper","pagination-item":"dapp-core-component__paginationStyles__pagination-item",paginationItem:"dapp-core-component__paginationStyles__pagination-item",hundreds:"dapp-core-component__paginationStyles__hundreds",active:"dapp-core-component__paginationStyles__active",ellipsis:"dapp-core-component__paginationStyles__ellipsis","pagination-item-text":"dapp-core-component__paginationStyles__pagination-item-text",paginationItemText:"dapp-core-component__paginationStyles__pagination-item-text"}});var Uh={};oe(Uh,{css:()=>pk,default:()=>e$});var pk,e$,Gh=F(()=>{"use strict";r();pk=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pk));e$={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var Hh={};oe(Hh,{css:()=>sk,default:()=>a$});var sk,a$,Vh=F(()=>{"use strict";r();sk=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sk));a$={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var $h={};oe($h,{css:()=>dk,default:()=>p$});var dk,p$,zh=F(()=>{"use strict";r();dk=`.dapp-core-component__addressRowStyles__ledger-address-table-body-item {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dk));p$={"ledger-address-table-body-item":"dapp-core-component__addressRowStyles__ledger-address-table-body-item",ledgerAddressTableBodyItem:"dapp-core-component__addressRowStyles__ledger-address-table-body-item","ledger-address-table-body-item-selected":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected",ledgerAddressTableBodyItemSelected:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected","ledger-address-table-body-item-data":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data",ledgerAddressTableBodyItemData:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data","ledger-address-table-body-item-data-input":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input",ledgerAddressTableBodyItemDataInput:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input","ledger-address-table-body-item-data-label":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label",ledgerAddressTableBodyItemDataLabel:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label","ledger-address-table-body-item-data-value":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value",ledgerAddressTableBodyItemDataValue:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value"}});var jh={};oe(jh,{css:()=>lk,default:()=>s$});var lk,s$,Kh=F(()=>{"use strict";r();lk=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lk));s$={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var Xh={};oe(Xh,{css:()=>fk,default:()=>d$});var fk,d$,Zh=F(()=>{"use strict";r();fk=`.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fk));d$={"ledger-loading-wrapper":"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper",ledgerLoadingWrapper:"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper","ledger-loading-heading":"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading",ledgerLoadingHeading:"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading","ledger-loading-description":"dapp-core-component__ledgerLoadingStyles__ledger-loading-description",ledgerLoadingDescription:"dapp-core-component__ledgerLoadingStyles__ledger-loading-description","ledger-loading-spinner":"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner",ledgerLoadingSpinner:"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner"}});var Yh={};oe(Yh,{css:()=>hk,default:()=>l$});var hk,l$,Jh=F(()=>{"use strict";r();hk=`.dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hk));l$={"ledger-address-table-wrapper":"dapp-core-component__addressTableStyles__ledger-address-table-wrapper",ledgerAddressTableWrapper:"dapp-core-component__addressTableStyles__ledger-address-table-wrapper","ledger-address-table-heading":"dapp-core-component__addressTableStyles__ledger-address-table-heading",ledgerAddressTableHeading:"dapp-core-component__addressTableStyles__ledger-address-table-heading","ledger-address-table-description":"dapp-core-component__addressTableStyles__ledger-address-table-description",ledgerAddressTableDescription:"dapp-core-component__addressTableStyles__ledger-address-table-description","ledger-address-table":"dapp-core-component__addressTableStyles__ledger-address-table",ledgerAddressTable:"dapp-core-component__addressTableStyles__ledger-address-table","ledger-address-table-header":"dapp-core-component__addressTableStyles__ledger-address-table-header",ledgerAddressTableHeader:"dapp-core-component__addressTableStyles__ledger-address-table-header","ledger-address-table-header-item":"dapp-core-component__addressTableStyles__ledger-address-table-header-item",ledgerAddressTableHeaderItem:"dapp-core-component__addressTableStyles__ledger-address-table-header-item","ledger-address-table-body":"dapp-core-component__addressTableStyles__ledger-address-table-body",ledgerAddressTableBody:"dapp-core-component__addressTableStyles__ledger-address-table-body","ledger-address-table-pagination":"dapp-core-component__addressTableStyles__ledger-address-table-pagination",ledgerAddressTablePagination:"dapp-core-component__addressTableStyles__ledger-address-table-pagination","ledger-address-table-button":"dapp-core-component__addressTableStyles__ledger-address-table-button",ledgerAddressTableButton:"dapp-core-component__addressTableStyles__ledger-address-table-button"}});var Qh=J(($p,us)=>{r();(function(){var e,n="4.17.21",o=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",p="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",u=500,h="__lodash_placeholder__",g=1,T=2,y=4,C=1,N=2,A=1,P=2,W=4,B=8,z=16,K=32,R=64,G=128,Z=256,ie=512,ee=30,re="...",pe=800,ne=16,ue=1,fe=2,Oe=3,_e=1/0,ve=9007199254740991,le=17976931348623157e292,Ne=0/0,ze=4294967295,Zn=ze-1,Wn=ze>>>1,He=[["ary",G],["bind",A],["bindKey",P],["curry",B],["curryRight",z],["flip",ie],["partial",K],["partialRight",R],["rearg",Z]],Me="[object Arguments]",Se="[object Array]",Le="[object AsyncFunction]",xe="[object Boolean]",Ae="[object Date]",ce="[object DOMException]",Pe="[object Error]",Fe="[object Function]",Xe="[object GeneratorFunction]",qe="[object Map]",mn="[object Number]",so="[object Null]",Tn="[object Object]",Xi="[object Promise]",Xs="[object Proxy]",ic="[object RegExp]",At="[object Set]",pc="[object String]",Zs="[object Symbol]",JM="[object Undefined]",cc="[object WeakMap]",QM="[object WeakSet]",sc="[object ArrayBuffer]",Zi="[object DataView]",Wl="[object Float32Array]",Ml="[object Float64Array]",Bl="[object Int8Array]",Ol="[object Int16Array]",Fl="[object Int32Array]",Rl="[object Uint8Array]",Ul="[object Uint8ClampedArray]",Gl="[object Uint16Array]",Hl="[object Uint32Array]",e3=/\b__p \+= '';/g,n3=/\b(__p \+=) '' \+/g,o3=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ay=/&(?:amp|lt|gt|quot|#39);/g,Iy=/[&<>"']/g,t3=RegExp(Ay.source),r3=RegExp(Iy.source),a3=/<%-([\s\S]+?)%>/g,i3=/<%([\s\S]+?)%>/g,by=/<%=([\s\S]+?)%>/g,p3=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c3=/^\w*$/,s3=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vl=/[\\^$.*+?()[\]{}|]/g,m3=RegExp(Vl.source),$l=/^\s+/,d3=/\s/,_3=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,l3=/\{\n\/\* \[wrapped with (.+)\] \*/,u3=/,? & /,f3=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,g3=/[()=,{}\[\]\/\s]/,h3=/\\(\\)?/g,T3=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ly=/\w*$/,x3=/^[-+]0x[0-9a-f]+$/i,y3=/^0b[01]+$/i,v3=/^\[object .+?Constructor\]$/,w3=/^0o[0-7]+$/i,S3=/^(?:0|[1-9]\d*)$/,C3=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ys=/($^)/,A3=/['\n\r\u2028\u2029\\]/g,Js="\\ud800-\\udfff",I3="\\u0300-\\u036f",b3="\\ufe20-\\ufe2f",L3="\\u20d0-\\u20ff",Ny=I3+b3+L3,Py="\\u2700-\\u27bf",ky="a-z\\xdf-\\xf6\\xf8-\\xff",N3="\\xac\\xb1\\xd7\\xf7",P3="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",k3="\\u2000-\\u206f",D3=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dy="A-Z\\xc0-\\xd6\\xd8-\\xde",Ey="\\ufe0e\\ufe0f",Wy=N3+P3+k3+D3,zl="['\u2019]",E3="["+Js+"]",My="["+Wy+"]",Qs="["+Ny+"]",By="\\d+",W3="["+Py+"]",Oy="["+ky+"]",Fy="[^"+Js+Wy+By+Py+ky+Dy+"]",ql="\\ud83c[\\udffb-\\udfff]",M3="(?:"+Qs+"|"+ql+")",Ry="[^"+Js+"]",jl="(?:\\ud83c[\\udde6-\\uddff]){2}",Kl="[\\ud800-\\udbff][\\udc00-\\udfff]",Yi="["+Dy+"]",Uy="\\u200d",Gy="(?:"+Oy+"|"+Fy+")",B3="(?:"+Yi+"|"+Fy+")",Hy="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",Vy="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",$y=M3+"?",zy="["+Ey+"]?",O3="(?:"+Uy+"(?:"+[Ry,jl,Kl].join("|")+")"+zy+$y+")*",F3="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",R3="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qy=zy+$y+O3,U3="(?:"+[W3,jl,Kl].join("|")+")"+qy,G3="(?:"+[Ry+Qs+"?",Qs,jl,Kl,E3].join("|")+")",H3=RegExp(zl,"g"),V3=RegExp(Qs,"g"),Xl=RegExp(ql+"(?="+ql+")|"+G3+qy,"g"),$3=RegExp([Yi+"?"+Oy+"+"+Hy+"(?="+[My,Yi,"$"].join("|")+")",B3+"+"+Vy+"(?="+[My,Yi+Gy,"$"].join("|")+")",Yi+"?"+Gy+"+"+Hy,Yi+"+"+Vy,R3,F3,By,U3].join("|"),"g"),z3=RegExp("["+Uy+Js+Ny+Ey+"]"),q3=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,j3=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],K3=-1,rn={};rn[Wl]=rn[Ml]=rn[Bl]=rn[Ol]=rn[Fl]=rn[Rl]=rn[Ul]=rn[Gl]=rn[Hl]=!0,rn[Me]=rn[Se]=rn[sc]=rn[xe]=rn[Zi]=rn[Ae]=rn[Pe]=rn[Fe]=rn[qe]=rn[mn]=rn[Tn]=rn[ic]=rn[At]=rn[pc]=rn[cc]=!1;var nn={};nn[Me]=nn[Se]=nn[sc]=nn[Zi]=nn[xe]=nn[Ae]=nn[Wl]=nn[Ml]=nn[Bl]=nn[Ol]=nn[Fl]=nn[qe]=nn[mn]=nn[Tn]=nn[ic]=nn[At]=nn[pc]=nn[Zs]=nn[Rl]=nn[Ul]=nn[Gl]=nn[Hl]=!0,nn[Pe]=nn[Fe]=nn[cc]=!1;var X3={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Z3={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Y3={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},J3={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Q3=parseFloat,e5=parseInt,jy=typeof d=="object"&&d&&d.Object===Object&&d,n5=typeof self=="object"&&self&&self.Object===Object&&self,Yn=jy||n5||Function("return this")(),Zl=typeof $p=="object"&&$p&&!$p.nodeType&&$p,Za=Zl&&typeof us=="object"&&us&&!us.nodeType&&us,Ky=Za&&Za.exports===Zl,Yl=Ky&&jy.process,_t=function(){try{var D=Za&&Za.require&&Za.require("util").types;return D||Yl&&Yl.binding&&Yl.binding("util")}catch(U){}}(),Xy=_t&&_t.isArrayBuffer,Zy=_t&&_t.isDate,Yy=_t&&_t.isMap,Jy=_t&&_t.isRegExp,Qy=_t&&_t.isSet,ev=_t&&_t.isTypedArray;function jo(D,U,O){switch(O.length){case 0:return D.call(U);case 1:return D.call(U,O[0]);case 2:return D.call(U,O[0],O[1]);case 3:return D.call(U,O[0],O[1],O[2])}return D.apply(U,O)}function o5(D,U,O,ae){for(var Ce=-1,je=D==null?0:D.length;++Ce<je;){var Hn=D[Ce];U(ae,Hn,O(Hn),D)}return ae}function lt(D,U){for(var O=-1,ae=D==null?0:D.length;++O<ae&&U(D[O],O,D)!==!1;);return D}function t5(D,U){for(var O=D==null?0:D.length;O--&&U(D[O],O,D)!==!1;);return D}function nv(D,U){for(var O=-1,ae=D==null?0:D.length;++O<ae;)if(!U(D[O],O,D))return!1;return!0}function ma(D,U){for(var O=-1,ae=D==null?0:D.length,Ce=0,je=[];++O<ae;){var Hn=D[O];U(Hn,O,D)&&(je[Ce++]=Hn)}return je}function em(D,U){var O=D==null?0:D.length;return!!O&&Ji(D,U,0)>-1}function Jl(D,U,O){for(var ae=-1,Ce=D==null?0:D.length;++ae<Ce;)if(O(U,D[ae]))return!0;return!1}function cn(D,U){for(var O=-1,ae=D==null?0:D.length,Ce=Array(ae);++O<ae;)Ce[O]=U(D[O],O,D);return Ce}function da(D,U){for(var O=-1,ae=U.length,Ce=D.length;++O<ae;)D[Ce+O]=U[O];return D}function Ql(D,U,O,ae){var Ce=-1,je=D==null?0:D.length;for(ae&&je&&(O=D[++Ce]);++Ce<je;)O=U(O,D[Ce],Ce,D);return O}function r5(D,U,O,ae){var Ce=D==null?0:D.length;for(ae&&Ce&&(O=D[--Ce]);Ce--;)O=U(O,D[Ce],Ce,D);return O}function eu(D,U){for(var O=-1,ae=D==null?0:D.length;++O<ae;)if(U(D[O],O,D))return!0;return!1}var a5=nu("length");function i5(D){return D.split("")}function p5(D){return D.match(f3)||[]}function ov(D,U,O){var ae;return O(D,function(Ce,je,Hn){if(U(Ce,je,Hn))return ae=je,!1}),ae}function nm(D,U,O,ae){for(var Ce=D.length,je=O+(ae?1:-1);ae?je--:++je<Ce;)if(U(D[je],je,D))return je;return-1}function Ji(D,U,O){return U===U?x5(D,U,O):nm(D,tv,O)}function c5(D,U,O,ae){for(var Ce=O-1,je=D.length;++Ce<je;)if(ae(D[Ce],U))return Ce;return-1}function tv(D){return D!==D}function rv(D,U){var O=D==null?0:D.length;return O?tu(D,U)/O:Ne}function nu(D){return function(U){return U==null?e:U[D]}}function ou(D){return function(U){return D==null?e:D[U]}}function av(D,U,O,ae,Ce){return Ce(D,function(je,Hn,Qe){O=ae?(ae=!1,je):U(O,je,Hn,Qe)}),O}function s5(D,U){var O=D.length;for(D.sort(U);O--;)D[O]=D[O].value;return D}function tu(D,U){for(var O,ae=-1,Ce=D.length;++ae<Ce;){var je=U(D[ae]);je!==e&&(O=O===e?je:O+je)}return O}function ru(D,U){for(var O=-1,ae=Array(D);++O<D;)ae[O]=U(O);return ae}function m5(D,U){return cn(U,function(O){return[O,D[O]]})}function iv(D){return D&&D.slice(0,mv(D)+1).replace($l,"")}function Ko(D){return function(U){return D(U)}}function au(D,U){return cn(U,function(O){return D[O]})}function mc(D,U){return D.has(U)}function pv(D,U){for(var O=-1,ae=D.length;++O<ae&&Ji(U,D[O],0)>-1;);return O}function cv(D,U){for(var O=D.length;O--&&Ji(U,D[O],0)>-1;);return O}function d5(D,U){for(var O=D.length,ae=0;O--;)D[O]===U&&++ae;return ae}var _5=ou(X3),l5=ou(Z3);function u5(D){return"\\"+J3[D]}function f5(D,U){return D==null?e:D[U]}function Qi(D){return z3.test(D)}function g5(D){return q3.test(D)}function h5(D){for(var U,O=[];!(U=D.next()).done;)O.push(U.value);return O}function iu(D){var U=-1,O=Array(D.size);return D.forEach(function(ae,Ce){O[++U]=[Ce,ae]}),O}function sv(D,U){return function(O){return D(U(O))}}function _a(D,U){for(var O=-1,ae=D.length,Ce=0,je=[];++O<ae;){var Hn=D[O];(Hn===U||Hn===h)&&(D[O]=h,je[Ce++]=O)}return je}function om(D){var U=-1,O=Array(D.size);return D.forEach(function(ae){O[++U]=ae}),O}function T5(D){var U=-1,O=Array(D.size);return D.forEach(function(ae){O[++U]=[ae,ae]}),O}function x5(D,U,O){for(var ae=O-1,Ce=D.length;++ae<Ce;)if(D[ae]===U)return ae;return-1}function y5(D,U,O){for(var ae=O+1;ae--;)if(D[ae]===U)return ae;return ae}function ep(D){return Qi(D)?w5(D):a5(D)}function It(D){return Qi(D)?S5(D):i5(D)}function mv(D){for(var U=D.length;U--&&d3.test(D.charAt(U)););return U}var v5=ou(Y3);function w5(D){for(var U=Xl.lastIndex=0;Xl.test(D);)++U;return U}function S5(D){return D.match(Xl)||[]}function C5(D){return D.match($3)||[]}var A5=function D(U){U=U==null?Yn:la.defaults(Yn.Object(),U,la.pick(Yn,j3));var O=U.Array,ae=U.Date,Ce=U.Error,je=U.Function,Hn=U.Math,Qe=U.Object,pu=U.RegExp,I5=U.String,ut=U.TypeError,tm=O.prototype,b5=je.prototype,np=Qe.prototype,rm=U["__core-js_shared__"],am=b5.toString,Ze=np.hasOwnProperty,L5=0,dv=function(){var t=/[^.]+$/.exec(rm&&rm.keys&&rm.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),im=np.toString,N5=am.call(Qe),P5=Yn._,k5=pu("^"+am.call(Ze).replace(Vl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pm=Ky?U.Buffer:e,ua=U.Symbol,cm=U.Uint8Array,_v=pm?pm.allocUnsafe:e,sm=sv(Qe.getPrototypeOf,Qe),lv=Qe.create,uv=np.propertyIsEnumerable,mm=tm.splice,fv=ua?ua.isConcatSpreadable:e,dc=ua?ua.iterator:e,Ya=ua?ua.toStringTag:e,dm=function(){try{var t=oi(Qe,"defineProperty");return t({},"",{}),t}catch(a){}}(),D5=U.clearTimeout!==Yn.clearTimeout&&U.clearTimeout,E5=ae&&ae.now!==Yn.Date.now&&ae.now,W5=U.setTimeout!==Yn.setTimeout&&U.setTimeout,_m=Hn.ceil,lm=Hn.floor,cu=Qe.getOwnPropertySymbols,M5=pm?pm.isBuffer:e,gv=U.isFinite,B5=tm.join,O5=sv(Qe.keys,Qe),Vn=Hn.max,ho=Hn.min,F5=ae.now,R5=U.parseInt,hv=Hn.random,U5=tm.reverse,su=oi(U,"DataView"),_c=oi(U,"Map"),mu=oi(U,"Promise"),op=oi(U,"Set"),lc=oi(U,"WeakMap"),uc=oi(Qe,"create"),um=lc&&new lc,tp={},G5=ti(su),H5=ti(_c),V5=ti(mu),$5=ti(op),z5=ti(lc),fm=ua?ua.prototype:e,fc=fm?fm.valueOf:e,Tv=fm?fm.toString:e;function v(t){if(xn(t)&&!Ie(t)&&!(t instanceof Re)){if(t instanceof ft)return t;if(Ze.call(t,"__wrapped__"))return xw(t)}return new ft(t)}var rp=function(){function t(){}return function(a){if(!dn(a))return{};if(lv)return lv(a);t.prototype=a;var s=new t;return t.prototype=e,s}}();function gm(){}function ft(t,a){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=e}v.templateSettings={escape:a3,evaluate:i3,interpolate:by,variable:"",imports:{_:v}},v.prototype=gm.prototype,v.prototype.constructor=v,ft.prototype=rp(gm.prototype),ft.prototype.constructor=ft;function Re(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ze,this.__views__=[]}function q5(){var t=new Re(this.__wrapped__);return t.__actions__=Mo(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Mo(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Mo(this.__views__),t}function j5(){if(this.__filtered__){var t=new Re(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function K5(){var t=this.__wrapped__.value(),a=this.__dir__,s=Ie(t),f=a<0,x=s?t.length:0,S=i6(0,x,this.__views__),L=S.start,k=S.end,E=k-L,V=f?k:L-1,$=this.__iteratees__,X=$.length,te=0,de=ho(E,this.__takeCount__);if(!s||!f&&x==E&&de==E)return Hv(t,this.__actions__);var he=[];e:for(;E--&&te<de;){V+=a;for(var De=-1,Te=t[V];++De<X;){var Be=$[De],Ue=Be.iteratee,Yo=Be.type,Lo=Ue(Te);if(Yo==fe)Te=Lo;else if(!Lo){if(Yo==ue)continue e;break e}}he[te++]=Te}return he}Re.prototype=rp(gm.prototype),Re.prototype.constructor=Re;function Ja(t){var a=-1,s=t==null?0:t.length;for(this.clear();++a<s;){var f=t[a];this.set(f[0],f[1])}}function X5(){this.__data__=uc?uc(null):{},this.size=0}function Z5(t){var a=this.has(t)&&delete this.__data__[t];return this.size-=a?1:0,a}function Y5(t){var a=this.__data__;if(uc){var s=a[t];return s===l?e:s}return Ze.call(a,t)?a[t]:e}function J5(t){var a=this.__data__;return uc?a[t]!==e:Ze.call(a,t)}function Q5(t,a){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=uc&&a===e?l:a,this}Ja.prototype.clear=X5,Ja.prototype.delete=Z5,Ja.prototype.get=Y5,Ja.prototype.has=J5,Ja.prototype.set=Q5;function hr(t){var a=-1,s=t==null?0:t.length;for(this.clear();++a<s;){var f=t[a];this.set(f[0],f[1])}}function eB(){this.__data__=[],this.size=0}function nB(t){var a=this.__data__,s=hm(a,t);if(s<0)return!1;var f=a.length-1;return s==f?a.pop():mm.call(a,s,1),--this.size,!0}function oB(t){var a=this.__data__,s=hm(a,t);return s<0?e:a[s][1]}function tB(t){return hm(this.__data__,t)>-1}function rB(t,a){var s=this.__data__,f=hm(s,t);return f<0?(++this.size,s.push([t,a])):s[f][1]=a,this}hr.prototype.clear=eB,hr.prototype.delete=nB,hr.prototype.get=oB,hr.prototype.has=tB,hr.prototype.set=rB;function Tr(t){var a=-1,s=t==null?0:t.length;for(this.clear();++a<s;){var f=t[a];this.set(f[0],f[1])}}function aB(){this.size=0,this.__data__={hash:new Ja,map:new(_c||hr),string:new Ja}}function iB(t){var a=Nm(this,t).delete(t);return this.size-=a?1:0,a}function pB(t){return Nm(this,t).get(t)}function cB(t){return Nm(this,t).has(t)}function sB(t,a){var s=Nm(this,t),f=s.size;return s.set(t,a),this.size+=s.size==f?0:1,this}Tr.prototype.clear=aB,Tr.prototype.delete=iB,Tr.prototype.get=pB,Tr.prototype.has=cB,Tr.prototype.set=sB;function Qa(t){var a=-1,s=t==null?0:t.length;for(this.__data__=new Tr;++a<s;)this.add(t[a])}function mB(t){return this.__data__.set(t,l),this}function dB(t){return this.__data__.has(t)}Qa.prototype.add=Qa.prototype.push=mB,Qa.prototype.has=dB;function bt(t){var a=this.__data__=new hr(t);this.size=a.size}function _B(){this.__data__=new hr,this.size=0}function lB(t){var a=this.__data__,s=a.delete(t);return this.size=a.size,s}function uB(t){return this.__data__.get(t)}function fB(t){return this.__data__.has(t)}function gB(t,a){var s=this.__data__;if(s instanceof hr){var f=s.__data__;if(!_c||f.length<o-1)return f.push([t,a]),this.size=++s.size,this;s=this.__data__=new Tr(f)}return s.set(t,a),this.size=s.size,this}bt.prototype.clear=_B,bt.prototype.delete=lB,bt.prototype.get=uB,bt.prototype.has=fB,bt.prototype.set=gB;function xv(t,a){var s=Ie(t),f=!s&&ri(t),x=!s&&!f&&xa(t),S=!s&&!f&&!x&&cp(t),L=s||f||x||S,k=L?ru(t.length,I5):[],E=k.length;for(var V in t)(a||Ze.call(t,V))&&!(L&&(V=="length"||x&&(V=="offset"||V=="parent")||S&&(V=="buffer"||V=="byteLength"||V=="byteOffset")||wr(V,E)))&&k.push(V);return k}function yv(t){var a=t.length;return a?t[vu(0,a-1)]:e}function hB(t,a){return Pm(Mo(t),ei(a,0,t.length))}function TB(t){return Pm(Mo(t))}function du(t,a,s){(s!==e&&!Lt(t[a],s)||s===e&&!(a in t))&&xr(t,a,s)}function gc(t,a,s){var f=t[a];(!(Ze.call(t,a)&&Lt(f,s))||s===e&&!(a in t))&&xr(t,a,s)}function hm(t,a){for(var s=t.length;s--;)if(Lt(t[s][0],a))return s;return-1}function xB(t,a,s,f){return fa(t,function(x,S,L){a(f,x,s(x),L)}),f}function vv(t,a){return t&&Ht(a,Jn(a),t)}function yB(t,a){return t&&Ht(a,Oo(a),t)}function xr(t,a,s){a=="__proto__"&&dm?dm(t,a,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[a]=s}function _u(t,a){for(var s=-1,f=a.length,x=O(f),S=t==null;++s<f;)x[s]=S?e:qu(t,a[s]);return x}function ei(t,a,s){return t===t&&(s!==e&&(t=t<=s?t:s),a!==e&&(t=t>=a?t:a)),t}function gt(t,a,s,f,x,S){var L,k=a&g,E=a&T,V=a&y;if(s&&(L=x?s(t,f,x,S):s(t)),L!==e)return L;if(!dn(t))return t;var $=Ie(t);if($){if(L=c6(t),!k)return Mo(t,L)}else{var X=To(t),te=X==Fe||X==Xe;if(xa(t))return zv(t,k);if(X==Tn||X==Me||te&&!x){if(L=E||te?{}:mw(t),!k)return E?YB(t,yB(L,t)):ZB(t,vv(L,t))}else{if(!nn[X])return x?t:{};L=s6(t,X,k)}}S||(S=new bt);var de=S.get(t);if(de)return de;S.set(t,L),Rw(t)?t.forEach(function(Te){L.add(gt(Te,a,s,Te,t,S))}):Ow(t)&&t.forEach(function(Te,Be){L.set(Be,gt(Te,a,s,Be,t,S))});var he=V?E?Du:ku:E?Oo:Jn,De=$?e:he(t);return lt(De||t,function(Te,Be){De&&(Be=Te,Te=t[Be]),gc(L,Be,gt(Te,a,s,Be,t,S))}),L}function vB(t){var a=Jn(t);return function(s){return wv(s,t,a)}}function wv(t,a,s){var f=s.length;if(t==null)return!f;for(t=Qe(t);f--;){var x=s[f],S=a[x],L=t[x];if(L===e&&!(x in t)||!S(L))return!1}return!0}function Sv(t,a,s){if(typeof t!="function")throw new ut(c);return Sc(function(){t.apply(e,s)},a)}function hc(t,a,s,f){var x=-1,S=em,L=!0,k=t.length,E=[],V=a.length;if(!k)return E;s&&(a=cn(a,Ko(s))),f?(S=Jl,L=!1):a.length>=o&&(S=mc,L=!1,a=new Qa(a));e:for(;++x<k;){var $=t[x],X=s==null?$:s($);if($=f||$!==0?$:0,L&&X===X){for(var te=V;te--;)if(a[te]===X)continue e;E.push($)}else S(a,X,f)||E.push($)}return E}var fa=Zv(Gt),Cv=Zv(uu,!0);function wB(t,a){var s=!0;return fa(t,function(f,x,S){return s=!!a(f,x,S),s}),s}function Tm(t,a,s){for(var f=-1,x=t.length;++f<x;){var S=t[f],L=a(S);if(L!=null&&(k===e?L===L&&!Zo(L):s(L,k)))var k=L,E=S}return E}function SB(t,a,s,f){var x=t.length;for(s=ke(s),s<0&&(s=-s>x?0:x+s),f=f===e||f>x?x:ke(f),f<0&&(f+=x),f=s>f?0:Gw(f);s<f;)t[s++]=a;return t}function Av(t,a){var s=[];return fa(t,function(f,x,S){a(f,x,S)&&s.push(f)}),s}function mo(t,a,s,f,x){var S=-1,L=t.length;for(s||(s=d6),x||(x=[]);++S<L;){var k=t[S];a>0&&s(k)?a>1?mo(k,a-1,s,f,x):da(x,k):f||(x[x.length]=k)}return x}var lu=Yv(),Iv=Yv(!0);function Gt(t,a){return t&&lu(t,a,Jn)}function uu(t,a){return t&&Iv(t,a,Jn)}function xm(t,a){return ma(a,function(s){return Sr(t[s])})}function ni(t,a){a=ha(a,t);for(var s=0,f=a.length;t!=null&&s<f;)t=t[Vt(a[s++])];return s&&s==f?t:e}function bv(t,a,s){var f=a(t);return Ie(t)?f:da(f,s(t))}function Io(t){return t==null?t===e?JM:so:Ya&&Ya in Qe(t)?a6(t):T6(t)}function fu(t,a){return t>a}function CB(t,a){return t!=null&&Ze.call(t,a)}function AB(t,a){return t!=null&&a in Qe(t)}function IB(t,a,s){return t>=ho(a,s)&&t<Vn(a,s)}function gu(t,a,s){for(var f=s?Jl:em,x=t[0].length,S=t.length,L=S,k=O(S),E=1/0,V=[];L--;){var $=t[L];L&&a&&($=cn($,Ko(a))),E=ho($.length,E),k[L]=!s&&(a||x>=120&&$.length>=120)?new Qa(L&&$):e}$=t[0];var X=-1,te=k[0];e:for(;++X<x&&V.length<E;){var de=$[X],he=a?a(de):de;if(de=s||de!==0?de:0,!(te?mc(te,he):f(V,he,s))){for(L=S;--L;){var De=k[L];if(!(De?mc(De,he):f(t[L],he,s)))continue e}te&&te.push(he),V.push(de)}}return V}function bB(t,a,s,f){return Gt(t,function(x,S,L){a(f,s(x),S,L)}),f}function Tc(t,a,s){a=ha(a,t),t=uw(t,a);var f=t==null?t:t[Vt(Tt(a))];return f==null?e:jo(f,t,s)}function Lv(t){return xn(t)&&Io(t)==Me}function LB(t){return xn(t)&&Io(t)==sc}function NB(t){return xn(t)&&Io(t)==Ae}function xc(t,a,s,f,x){return t===a?!0:t==null||a==null||!xn(t)&&!xn(a)?t!==t&&a!==a:PB(t,a,s,f,xc,x)}function PB(t,a,s,f,x,S){var L=Ie(t),k=Ie(a),E=L?Se:To(t),V=k?Se:To(a);E=E==Me?Tn:E,V=V==Me?Tn:V;var $=E==Tn,X=V==Tn,te=E==V;if(te&&xa(t)){if(!xa(a))return!1;L=!0,$=!1}if(te&&!$)return S||(S=new bt),L||cp(t)?pw(t,a,s,f,x,S):t6(t,a,E,s,f,x,S);if(!(s&C)){var de=$&&Ze.call(t,"__wrapped__"),he=X&&Ze.call(a,"__wrapped__");if(de||he){var De=de?t.value():t,Te=he?a.value():a;return S||(S=new bt),x(De,Te,s,f,S)}}return te?(S||(S=new bt),r6(t,a,s,f,x,S)):!1}function kB(t){return xn(t)&&To(t)==qe}function hu(t,a,s,f){var x=s.length,S=x,L=!f;if(t==null)return!S;for(t=Qe(t);x--;){var k=s[x];if(L&&k[2]?k[1]!==t[k[0]]:!(k[0]in t))return!1}for(;++x<S;){k=s[x];var E=k[0],V=t[E],$=k[1];if(L&&k[2]){if(V===e&&!(E in t))return!1}else{var X=new bt;if(f)var te=f(V,$,E,t,a,X);if(!(te===e?xc($,V,C|N,f,X):te))return!1}}return!0}function Nv(t){if(!dn(t)||l6(t))return!1;var a=Sr(t)?k5:v3;return a.test(ti(t))}function DB(t){return xn(t)&&Io(t)==ic}function EB(t){return xn(t)&&To(t)==At}function WB(t){return xn(t)&&Bm(t.length)&&!!rn[Io(t)]}function Pv(t){return typeof t=="function"?t:t==null?Fo:typeof t=="object"?Ie(t)?Ev(t[0],t[1]):Dv(t):Jw(t)}function Tu(t){if(!wc(t))return O5(t);var a=[];for(var s in Qe(t))Ze.call(t,s)&&s!="constructor"&&a.push(s);return a}function MB(t){if(!dn(t))return h6(t);var a=wc(t),s=[];for(var f in t)f=="constructor"&&(a||!Ze.call(t,f))||s.push(f);return s}function xu(t,a){return t<a}function kv(t,a){var s=-1,f=Bo(t)?O(t.length):[];return fa(t,function(x,S,L){f[++s]=a(x,S,L)}),f}function Dv(t){var a=Wu(t);return a.length==1&&a[0][2]?_w(a[0][0],a[0][1]):function(s){return s===t||hu(s,t,a)}}function Ev(t,a){return Bu(t)&&dw(a)?_w(Vt(t),a):function(s){var f=qu(s,t);return f===e&&f===a?ju(s,t):xc(a,f,C|N)}}function ym(t,a,s,f,x){t!==a&&lu(a,function(S,L){if(x||(x=new bt),dn(S))BB(t,a,L,s,ym,f,x);else{var k=f?f(Fu(t,L),S,L+"",t,a,x):e;k===e&&(k=S),du(t,L,k)}},Oo)}function BB(t,a,s,f,x,S,L){var k=Fu(t,s),E=Fu(a,s),V=L.get(E);if(V){du(t,s,V);return}var $=S?S(k,E,s+"",t,a,L):e,X=$===e;if(X){var te=Ie(E),de=!te&&xa(E),he=!te&&!de&&cp(E);$=E,te||de||he?Ie(k)?$=k:In(k)?$=Mo(k):de?(X=!1,$=zv(E,!0)):he?(X=!1,$=qv(E,!0)):$=[]:Cc(E)||ri(E)?($=k,ri(k)?$=Hw(k):(!dn(k)||Sr(k))&&($=mw(E))):X=!1}X&&(L.set(E,$),x($,E,f,S,L),L.delete(E)),du(t,s,$)}function Wv(t,a){var s=t.length;if(!!s)return a+=a<0?s:0,wr(a,s)?t[a]:e}function Mv(t,a,s){a.length?a=cn(a,function(S){return Ie(S)?function(L){return ni(L,S.length===1?S[0]:S)}:S}):a=[Fo];var f=-1;a=cn(a,Ko(ge()));var x=kv(t,function(S,L,k){var E=cn(a,function(V){return V(S)});return{criteria:E,index:++f,value:S}});return s5(x,function(S,L){return XB(S,L,s)})}function OB(t,a){return Bv(t,a,function(s,f){return ju(t,f)})}function Bv(t,a,s){for(var f=-1,x=a.length,S={};++f<x;){var L=a[f],k=ni(t,L);s(k,L)&&yc(S,ha(L,t),k)}return S}function FB(t){return function(a){return ni(a,t)}}function yu(t,a,s,f){var x=f?c5:Ji,S=-1,L=a.length,k=t;for(t===a&&(a=Mo(a)),s&&(k=cn(t,Ko(s)));++S<L;)for(var E=0,V=a[S],$=s?s(V):V;(E=x(k,$,E,f))>-1;)k!==t&&mm.call(k,E,1),mm.call(t,E,1);return t}function Ov(t,a){for(var s=t?a.length:0,f=s-1;s--;){var x=a[s];if(s==f||x!==S){var S=x;wr(x)?mm.call(t,x,1):Cu(t,x)}}return t}function vu(t,a){return t+lm(hv()*(a-t+1))}function RB(t,a,s,f){for(var x=-1,S=Vn(_m((a-t)/(s||1)),0),L=O(S);S--;)L[f?S:++x]=t,t+=s;return L}function wu(t,a){var s="";if(!t||a<1||a>ve)return s;do a%2&&(s+=t),a=lm(a/2),a&&(t+=t);while(a);return s}function Ee(t,a){return Ru(lw(t,a,Fo),t+"")}function UB(t){return yv(sp(t))}function GB(t,a){var s=sp(t);return Pm(s,ei(a,0,s.length))}function yc(t,a,s,f){if(!dn(t))return t;a=ha(a,t);for(var x=-1,S=a.length,L=S-1,k=t;k!=null&&++x<S;){var E=Vt(a[x]),V=s;if(E==="__proto__"||E==="constructor"||E==="prototype")return t;if(x!=L){var $=k[E];V=f?f($,E,k):e,V===e&&(V=dn($)?$:wr(a[x+1])?[]:{})}gc(k,E,V),k=k[E]}return t}var Fv=um?function(t,a){return um.set(t,a),t}:Fo,HB=dm?function(t,a){return dm(t,"toString",{configurable:!0,enumerable:!1,value:Xu(a),writable:!0})}:Fo;function VB(t){return Pm(sp(t))}function ht(t,a,s){var f=-1,x=t.length;a<0&&(a=-a>x?0:x+a),s=s>x?x:s,s<0&&(s+=x),x=a>s?0:s-a>>>0,a>>>=0;for(var S=O(x);++f<x;)S[f]=t[f+a];return S}function $B(t,a){var s;return fa(t,function(f,x,S){return s=a(f,x,S),!s}),!!s}function vm(t,a,s){var f=0,x=t==null?f:t.length;if(typeof a=="number"&&a===a&&x<=Wn){for(;f<x;){var S=f+x>>>1,L=t[S];L!==null&&!Zo(L)&&(s?L<=a:L<a)?f=S+1:x=S}return x}return Su(t,a,Fo,s)}function Su(t,a,s,f){var x=0,S=t==null?0:t.length;if(S===0)return 0;a=s(a);for(var L=a!==a,k=a===null,E=Zo(a),V=a===e;x<S;){var $=lm((x+S)/2),X=s(t[$]),te=X!==e,de=X===null,he=X===X,De=Zo(X);if(L)var Te=f||he;else V?Te=he&&(f||te):k?Te=he&&te&&(f||!de):E?Te=he&&te&&!de&&(f||!De):de||De?Te=!1:Te=f?X<=a:X<a;Te?x=$+1:S=$}return ho(S,Zn)}function Rv(t,a){for(var s=-1,f=t.length,x=0,S=[];++s<f;){var L=t[s],k=a?a(L):L;if(!s||!Lt(k,E)){var E=k;S[x++]=L===0?0:L}}return S}function Uv(t){return typeof t=="number"?t:Zo(t)?Ne:+t}function Xo(t){if(typeof t=="string")return t;if(Ie(t))return cn(t,Xo)+"";if(Zo(t))return Tv?Tv.call(t):"";var a=t+"";return a=="0"&&1/t==-_e?"-0":a}function ga(t,a,s){var f=-1,x=em,S=t.length,L=!0,k=[],E=k;if(s)L=!1,x=Jl;else if(S>=o){var V=a?null:n6(t);if(V)return om(V);L=!1,x=mc,E=new Qa}else E=a?[]:k;e:for(;++f<S;){var $=t[f],X=a?a($):$;if($=s||$!==0?$:0,L&&X===X){for(var te=E.length;te--;)if(E[te]===X)continue e;a&&E.push(X),k.push($)}else x(E,X,s)||(E!==k&&E.push(X),k.push($))}return k}function Cu(t,a){return a=ha(a,t),t=uw(t,a),t==null||delete t[Vt(Tt(a))]}function Gv(t,a,s,f){return yc(t,a,s(ni(t,a)),f)}function wm(t,a,s,f){for(var x=t.length,S=f?x:-1;(f?S--:++S<x)&&a(t[S],S,t););return s?ht(t,f?0:S,f?S+1:x):ht(t,f?S+1:0,f?x:S)}function Hv(t,a){var s=t;return s instanceof Re&&(s=s.value()),Ql(a,function(f,x){return x.func.apply(x.thisArg,da([f],x.args))},s)}function Au(t,a,s){var f=t.length;if(f<2)return f?ga(t[0]):[];for(var x=-1,S=O(f);++x<f;)for(var L=t[x],k=-1;++k<f;)k!=x&&(S[x]=hc(S[x]||L,t[k],a,s));return ga(mo(S,1),a,s)}function Vv(t,a,s){for(var f=-1,x=t.length,S=a.length,L={};++f<x;){var k=f<S?a[f]:e;s(L,t[f],k)}return L}function Iu(t){return In(t)?t:[]}function bu(t){return typeof t=="function"?t:Fo}function ha(t,a){return Ie(t)?t:Bu(t,a)?[t]:Tw(Ke(t))}var zB=Ee;function Ta(t,a,s){var f=t.length;return s=s===e?f:s,!a&&s>=f?t:ht(t,a,s)}var $v=D5||function(t){return Yn.clearTimeout(t)};function zv(t,a){if(a)return t.slice();var s=t.length,f=_v?_v(s):new t.constructor(s);return t.copy(f),f}function Lu(t){var a=new t.constructor(t.byteLength);return new cm(a).set(new cm(t)),a}function qB(t,a){var s=a?Lu(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}function jB(t){var a=new t.constructor(t.source,Ly.exec(t));return a.lastIndex=t.lastIndex,a}function KB(t){return fc?Qe(fc.call(t)):{}}function qv(t,a){var s=a?Lu(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}function jv(t,a){if(t!==a){var s=t!==e,f=t===null,x=t===t,S=Zo(t),L=a!==e,k=a===null,E=a===a,V=Zo(a);if(!k&&!V&&!S&&t>a||S&&L&&E&&!k&&!V||f&&L&&E||!s&&E||!x)return 1;if(!f&&!S&&!V&&t<a||V&&s&&x&&!f&&!S||k&&s&&x||!L&&x||!E)return-1}return 0}function XB(t,a,s){for(var f=-1,x=t.criteria,S=a.criteria,L=x.length,k=s.length;++f<L;){var E=jv(x[f],S[f]);if(E){if(f>=k)return E;var V=s[f];return E*(V=="desc"?-1:1)}}return t.index-a.index}function Kv(t,a,s,f){for(var x=-1,S=t.length,L=s.length,k=-1,E=a.length,V=Vn(S-L,0),$=O(E+V),X=!f;++k<E;)$[k]=a[k];for(;++x<L;)(X||x<S)&&($[s[x]]=t[x]);for(;V--;)$[k++]=t[x++];return $}function Xv(t,a,s,f){for(var x=-1,S=t.length,L=-1,k=s.length,E=-1,V=a.length,$=Vn(S-k,0),X=O($+V),te=!f;++x<$;)X[x]=t[x];for(var de=x;++E<V;)X[de+E]=a[E];for(;++L<k;)(te||x<S)&&(X[de+s[L]]=t[x++]);return X}function Mo(t,a){var s=-1,f=t.length;for(a||(a=O(f));++s<f;)a[s]=t[s];return a}function Ht(t,a,s,f){var x=!s;s||(s={});for(var S=-1,L=a.length;++S<L;){var k=a[S],E=f?f(s[k],t[k],k,s,t):e;E===e&&(E=t[k]),x?xr(s,k,E):gc(s,k,E)}return s}function ZB(t,a){return Ht(t,Mu(t),a)}function YB(t,a){return Ht(t,cw(t),a)}function Sm(t,a){return function(s,f){var x=Ie(s)?o5:xB,S=a?a():{};return x(s,t,ge(f,2),S)}}function ap(t){return Ee(function(a,s){var f=-1,x=s.length,S=x>1?s[x-1]:e,L=x>2?s[2]:e;for(S=t.length>3&&typeof S=="function"?(x--,S):e,L&&bo(s[0],s[1],L)&&(S=x<3?e:S,x=1),a=Qe(a);++f<x;){var k=s[f];k&&t(a,k,f,S)}return a})}function Zv(t,a){return function(s,f){if(s==null)return s;if(!Bo(s))return t(s,f);for(var x=s.length,S=a?x:-1,L=Qe(s);(a?S--:++S<x)&&f(L[S],S,L)!==!1;);return s}}function Yv(t){return function(a,s,f){for(var x=-1,S=Qe(a),L=f(a),k=L.length;k--;){var E=L[t?k:++x];if(s(S[E],E,S)===!1)break}return a}}function JB(t,a,s){var f=a&A,x=vc(t);function S(){var L=this&&this!==Yn&&this instanceof S?x:t;return L.apply(f?s:this,arguments)}return S}function Jv(t){return function(a){a=Ke(a);var s=Qi(a)?It(a):e,f=s?s[0]:a.charAt(0),x=s?Ta(s,1).join(""):a.slice(1);return f[t]()+x}}function ip(t){return function(a){return Ql(Zw(Xw(a).replace(H3,"")),t,"")}}function vc(t){return function(){var a=arguments;switch(a.length){case 0:return new t;case 1:return new t(a[0]);case 2:return new t(a[0],a[1]);case 3:return new t(a[0],a[1],a[2]);case 4:return new t(a[0],a[1],a[2],a[3]);case 5:return new t(a[0],a[1],a[2],a[3],a[4]);case 6:return new t(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new t(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var s=rp(t.prototype),f=t.apply(s,a);return dn(f)?f:s}}function QB(t,a,s){var f=vc(t);function x(){for(var S=arguments.length,L=O(S),k=S,E=pp(x);k--;)L[k]=arguments[k];var V=S<3&&L[0]!==E&&L[S-1]!==E?[]:_a(L,E);if(S-=V.length,S<s)return tw(t,a,Cm,x.placeholder,e,L,V,e,e,s-S);var $=this&&this!==Yn&&this instanceof x?f:t;return jo($,this,L)}return x}function Qv(t){return function(a,s,f){var x=Qe(a);if(!Bo(a)){var S=ge(s,3);a=Jn(a),s=function(k){return S(x[k],k,x)}}var L=t(a,s,f);return L>-1?x[S?a[L]:L]:e}}function ew(t){return vr(function(a){var s=a.length,f=s,x=ft.prototype.thru;for(t&&a.reverse();f--;){var S=a[f];if(typeof S!="function")throw new ut(c);if(x&&!L&&Lm(S)=="wrapper")var L=new ft([],!0)}for(f=L?f:s;++f<s;){S=a[f];var k=Lm(S),E=k=="wrapper"?Eu(S):e;E&&Ou(E[0])&&E[1]==(G|B|K|Z)&&!E[4].length&&E[9]==1?L=L[Lm(E[0])].apply(L,E[3]):L=S.length==1&&Ou(S)?L[k]():L.thru(S)}return function(){var V=arguments,$=V[0];if(L&&V.length==1&&Ie($))return L.plant($).value();for(var X=0,te=s?a[X].apply(this,V):$;++X<s;)te=a[X].call(this,te);return te}})}function Cm(t,a,s,f,x,S,L,k,E,V){var $=a&G,X=a&A,te=a&P,de=a&(B|z),he=a&ie,De=te?e:vc(t);function Te(){for(var Be=arguments.length,Ue=O(Be),Yo=Be;Yo--;)Ue[Yo]=arguments[Yo];if(de)var Lo=pp(Te),Jo=d5(Ue,Lo);if(f&&(Ue=Kv(Ue,f,x,de)),S&&(Ue=Xv(Ue,S,L,de)),Be-=Jo,de&&Be<V){var bn=_a(Ue,Lo);return tw(t,a,Cm,Te.placeholder,s,Ue,bn,k,E,V-Be)}var Nt=X?s:this,Ar=te?Nt[t]:t;return Be=Ue.length,k?Ue=x6(Ue,k):he&&Be>1&&Ue.reverse(),$&&E<Be&&(Ue.length=E),this&&this!==Yn&&this instanceof Te&&(Ar=De||vc(Ar)),Ar.apply(Nt,Ue)}return Te}function nw(t,a){return function(s,f){return bB(s,t,a(f),{})}}function Am(t,a){return function(s,f){var x;if(s===e&&f===e)return a;if(s!==e&&(x=s),f!==e){if(x===e)return f;typeof s=="string"||typeof f=="string"?(s=Xo(s),f=Xo(f)):(s=Uv(s),f=Uv(f)),x=t(s,f)}return x}}function Nu(t){return vr(function(a){return a=cn(a,Ko(ge())),Ee(function(s){var f=this;return t(a,function(x){return jo(x,f,s)})})})}function Im(t,a){a=a===e?" ":Xo(a);var s=a.length;if(s<2)return s?wu(a,t):a;var f=wu(a,_m(t/ep(a)));return Qi(a)?Ta(It(f),0,t).join(""):f.slice(0,t)}function e6(t,a,s,f){var x=a&A,S=vc(t);function L(){for(var k=-1,E=arguments.length,V=-1,$=f.length,X=O($+E),te=this&&this!==Yn&&this instanceof L?S:t;++V<$;)X[V]=f[V];for(;E--;)X[V++]=arguments[++k];return jo(te,x?s:this,X)}return L}function ow(t){return function(a,s,f){return f&&typeof f!="number"&&bo(a,s,f)&&(s=f=e),a=Cr(a),s===e?(s=a,a=0):s=Cr(s),f=f===e?a<s?1:-1:Cr(f),RB(a,s,f,t)}}function bm(t){return function(a,s){return typeof a=="string"&&typeof s=="string"||(a=xt(a),s=xt(s)),t(a,s)}}function tw(t,a,s,f,x,S,L,k,E,V){var $=a&B,X=$?L:e,te=$?e:L,de=$?S:e,he=$?e:S;a|=$?K:R,a&=~($?R:K),a&W||(a&=~(A|P));var De=[t,a,x,de,X,he,te,k,E,V],Te=s.apply(e,De);return Ou(t)&&fw(Te,De),Te.placeholder=f,gw(Te,t,a)}function Pu(t){var a=Hn[t];return function(s,f){if(s=xt(s),f=f==null?0:ho(ke(f),292),f&&gv(s)){var x=(Ke(s)+"e").split("e"),S=a(x[0]+"e"+(+x[1]+f));return x=(Ke(S)+"e").split("e"),+(x[0]+"e"+(+x[1]-f))}return a(s)}}var n6=op&&1/om(new op([,-0]))[1]==_e?function(t){return new op(t)}:Ju;function rw(t){return function(a){var s=To(a);return s==qe?iu(a):s==At?T5(a):m5(a,t(a))}}function yr(t,a,s,f,x,S,L,k){var E=a&P;if(!E&&typeof t!="function")throw new ut(c);var V=f?f.length:0;if(V||(a&=~(K|R),f=x=e),L=L===e?L:Vn(ke(L),0),k=k===e?k:ke(k),V-=x?x.length:0,a&R){var $=f,X=x;f=x=e}var te=E?e:Eu(t),de=[t,a,s,f,x,$,X,S,L,k];if(te&&g6(de,te),t=de[0],a=de[1],s=de[2],f=de[3],x=de[4],k=de[9]=de[9]===e?E?0:t.length:Vn(de[9]-V,0),!k&&a&(B|z)&&(a&=~(B|z)),!a||a==A)var he=JB(t,a,s);else a==B||a==z?he=QB(t,a,k):(a==K||a==(A|K))&&!x.length?he=e6(t,a,s,f):he=Cm.apply(e,de);var De=te?Fv:fw;return gw(De(he,de),t,a)}function aw(t,a,s,f){return t===e||Lt(t,np[s])&&!Ze.call(f,s)?a:t}function iw(t,a,s,f,x,S){return dn(t)&&dn(a)&&(S.set(a,t),ym(t,a,e,iw,S),S.delete(a)),t}function o6(t){return Cc(t)?e:t}function pw(t,a,s,f,x,S){var L=s&C,k=t.length,E=a.length;if(k!=E&&!(L&&E>k))return!1;var V=S.get(t),$=S.get(a);if(V&&$)return V==a&&$==t;var X=-1,te=!0,de=s&N?new Qa:e;for(S.set(t,a),S.set(a,t);++X<k;){var he=t[X],De=a[X];if(f)var Te=L?f(De,he,X,a,t,S):f(he,De,X,t,a,S);if(Te!==e){if(Te)continue;te=!1;break}if(de){if(!eu(a,function(Be,Ue){if(!mc(de,Ue)&&(he===Be||x(he,Be,s,f,S)))return de.push(Ue)})){te=!1;break}}else if(!(he===De||x(he,De,s,f,S))){te=!1;break}}return S.delete(t),S.delete(a),te}function t6(t,a,s,f,x,S,L){switch(s){case Zi:if(t.byteLength!=a.byteLength||t.byteOffset!=a.byteOffset)return!1;t=t.buffer,a=a.buffer;case sc:return!(t.byteLength!=a.byteLength||!S(new cm(t),new cm(a)));case xe:case Ae:case mn:return Lt(+t,+a);case Pe:return t.name==a.name&&t.message==a.message;case ic:case pc:return t==a+"";case qe:var k=iu;case At:var E=f&C;if(k||(k=om),t.size!=a.size&&!E)return!1;var V=L.get(t);if(V)return V==a;f|=N,L.set(t,a);var $=pw(k(t),k(a),f,x,S,L);return L.delete(t),$;case Zs:if(fc)return fc.call(t)==fc.call(a)}return!1}function r6(t,a,s,f,x,S){var L=s&C,k=ku(t),E=k.length,V=ku(a),$=V.length;if(E!=$&&!L)return!1;for(var X=E;X--;){var te=k[X];if(!(L?te in a:Ze.call(a,te)))return!1}var de=S.get(t),he=S.get(a);if(de&&he)return de==a&&he==t;var De=!0;S.set(t,a),S.set(a,t);for(var Te=L;++X<E;){te=k[X];var Be=t[te],Ue=a[te];if(f)var Yo=L?f(Ue,Be,te,a,t,S):f(Be,Ue,te,t,a,S);if(!(Yo===e?Be===Ue||x(Be,Ue,s,f,S):Yo)){De=!1;break}Te||(Te=te=="constructor")}if(De&&!Te){var Lo=t.constructor,Jo=a.constructor;Lo!=Jo&&"constructor"in t&&"constructor"in a&&!(typeof Lo=="function"&&Lo instanceof Lo&&typeof Jo=="function"&&Jo instanceof Jo)&&(De=!1)}return S.delete(t),S.delete(a),De}function vr(t){return Ru(lw(t,e,ww),t+"")}function ku(t){return bv(t,Jn,Mu)}function Du(t){return bv(t,Oo,cw)}var Eu=um?function(t){return um.get(t)}:Ju;function Lm(t){for(var a=t.name+"",s=tp[a],f=Ze.call(tp,a)?s.length:0;f--;){var x=s[f],S=x.func;if(S==null||S==t)return x.name}return a}function pp(t){var a=Ze.call(v,"placeholder")?v:t;return a.placeholder}function ge(){var t=v.iteratee||Zu;return t=t===Zu?Pv:t,arguments.length?t(arguments[0],arguments[1]):t}function Nm(t,a){var s=t.__data__;return _6(a)?s[typeof a=="string"?"string":"hash"]:s.map}function Wu(t){for(var a=Jn(t),s=a.length;s--;){var f=a[s],x=t[f];a[s]=[f,x,dw(x)]}return a}function oi(t,a){var s=f5(t,a);return Nv(s)?s:e}function a6(t){var a=Ze.call(t,Ya),s=t[Ya];try{t[Ya]=e;var f=!0}catch(S){}var x=im.call(t);return f&&(a?t[Ya]=s:delete t[Ya]),x}var Mu=cu?function(t){return t==null?[]:(t=Qe(t),ma(cu(t),function(a){return uv.call(t,a)}))}:Qu,cw=cu?function(t){for(var a=[];t;)da(a,Mu(t)),t=sm(t);return a}:Qu,To=Io;(su&&To(new su(new ArrayBuffer(1)))!=Zi||_c&&To(new _c)!=qe||mu&&To(mu.resolve())!=Xi||op&&To(new op)!=At||lc&&To(new lc)!=cc)&&(To=function(t){var a=Io(t),s=a==Tn?t.constructor:e,f=s?ti(s):"";if(f)switch(f){case G5:return Zi;case H5:return qe;case V5:return Xi;case $5:return At;case z5:return cc}return a});function i6(t,a,s){for(var f=-1,x=s.length;++f<x;){var S=s[f],L=S.size;switch(S.type){case"drop":t+=L;break;case"dropRight":a-=L;break;case"take":a=ho(a,t+L);break;case"takeRight":t=Vn(t,a-L);break}}return{start:t,end:a}}function p6(t){var a=t.match(l3);return a?a[1].split(u3):[]}function sw(t,a,s){a=ha(a,t);for(var f=-1,x=a.length,S=!1;++f<x;){var L=Vt(a[f]);if(!(S=t!=null&&s(t,L)))break;t=t[L]}return S||++f!=x?S:(x=t==null?0:t.length,!!x&&Bm(x)&&wr(L,x)&&(Ie(t)||ri(t)))}function c6(t){var a=t.length,s=new t.constructor(a);return a&&typeof t[0]=="string"&&Ze.call(t,"index")&&(s.index=t.index,s.input=t.input),s}function mw(t){return typeof t.constructor=="function"&&!wc(t)?rp(sm(t)):{}}function s6(t,a,s){var f=t.constructor;switch(a){case sc:return Lu(t);case xe:case Ae:return new f(+t);case Zi:return qB(t,s);case Wl:case Ml:case Bl:case Ol:case Fl:case Rl:case Ul:case Gl:case Hl:return qv(t,s);case qe:return new f;case mn:case pc:return new f(t);case ic:return jB(t);case At:return new f;case Zs:return KB(t)}}function m6(t,a){var s=a.length;if(!s)return t;var f=s-1;return a[f]=(s>1?"& ":"")+a[f],a=a.join(s>2?", ":" "),t.replace(_3,`{
/* [wrapped with `+a+`] */
`)}function d6(t){return Ie(t)||ri(t)||!!(fv&&t&&t[fv])}function wr(t,a){var s=typeof t;return a=a==null?ve:a,!!a&&(s=="number"||s!="symbol"&&S3.test(t))&&t>-1&&t%1==0&&t<a}function bo(t,a,s){if(!dn(s))return!1;var f=typeof a;return(f=="number"?Bo(s)&&wr(a,s.length):f=="string"&&a in s)?Lt(s[a],t):!1}function Bu(t,a){if(Ie(t))return!1;var s=typeof t;return s=="number"||s=="symbol"||s=="boolean"||t==null||Zo(t)?!0:c3.test(t)||!p3.test(t)||a!=null&&t in Qe(a)}function _6(t){var a=typeof t;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?t!=="__proto__":t===null}function Ou(t){var a=Lm(t),s=v[a];if(typeof s!="function"||!(a in Re.prototype))return!1;if(t===s)return!0;var f=Eu(s);return!!f&&t===f[0]}function l6(t){return!!dv&&dv in t}var u6=rm?Sr:ef;function wc(t){var a=t&&t.constructor,s=typeof a=="function"&&a.prototype||np;return t===s}function dw(t){return t===t&&!dn(t)}function _w(t,a){return function(s){return s==null?!1:s[t]===a&&(a!==e||t in Qe(s))}}function f6(t){var a=Wm(t,function(f){return s.size===u&&s.clear(),f}),s=a.cache;return a}function g6(t,a){var s=t[1],f=a[1],x=s|f,S=x<(A|P|G),L=f==G&&s==B||f==G&&s==Z&&t[7].length<=a[8]||f==(G|Z)&&a[7].length<=a[8]&&s==B;if(!(S||L))return t;f&A&&(t[2]=a[2],x|=s&A?0:W);var k=a[3];if(k){var E=t[3];t[3]=E?Kv(E,k,a[4]):k,t[4]=E?_a(t[3],h):a[4]}return k=a[5],k&&(E=t[5],t[5]=E?Xv(E,k,a[6]):k,t[6]=E?_a(t[5],h):a[6]),k=a[7],k&&(t[7]=k),f&G&&(t[8]=t[8]==null?a[8]:ho(t[8],a[8])),t[9]==null&&(t[9]=a[9]),t[0]=a[0],t[1]=x,t}function h6(t){var a=[];if(t!=null)for(var s in Qe(t))a.push(s);return a}function T6(t){return im.call(t)}function lw(t,a,s){return a=Vn(a===e?t.length-1:a,0),function(){for(var f=arguments,x=-1,S=Vn(f.length-a,0),L=O(S);++x<S;)L[x]=f[a+x];x=-1;for(var k=O(a+1);++x<a;)k[x]=f[x];return k[a]=s(L),jo(t,this,k)}}function uw(t,a){return a.length<2?t:ni(t,ht(a,0,-1))}function x6(t,a){for(var s=t.length,f=ho(a.length,s),x=Mo(t);f--;){var S=a[f];t[f]=wr(S,s)?x[S]:e}return t}function Fu(t,a){if(!(a==="constructor"&&typeof t[a]=="function")&&a!="__proto__")return t[a]}var fw=hw(Fv),Sc=W5||function(t,a){return Yn.setTimeout(t,a)},Ru=hw(HB);function gw(t,a,s){var f=a+"";return Ru(t,m6(f,y6(p6(f),s)))}function hw(t){var a=0,s=0;return function(){var f=F5(),x=ne-(f-s);if(s=f,x>0){if(++a>=pe)return arguments[0]}else a=0;return t.apply(e,arguments)}}function Pm(t,a){var s=-1,f=t.length,x=f-1;for(a=a===e?f:a;++s<a;){var S=vu(s,x),L=t[S];t[S]=t[s],t[s]=L}return t.length=a,t}var Tw=f6(function(t){var a=[];return t.charCodeAt(0)===46&&a.push(""),t.replace(s3,function(s,f,x,S){a.push(x?S.replace(h3,"$1"):f||s)}),a});function Vt(t){if(typeof t=="string"||Zo(t))return t;var a=t+"";return a=="0"&&1/t==-_e?"-0":a}function ti(t){if(t!=null){try{return am.call(t)}catch(a){}try{return t+""}catch(a){}}return""}function y6(t,a){return lt(He,function(s){var f="_."+s[0];a&s[1]&&!em(t,f)&&t.push(f)}),t.sort()}function xw(t){if(t instanceof Re)return t.clone();var a=new ft(t.__wrapped__,t.__chain__);return a.__actions__=Mo(t.__actions__),a.__index__=t.__index__,a.__values__=t.__values__,a}function v6(t,a,s){(s?bo(t,a,s):a===e)?a=1:a=Vn(ke(a),0);var f=t==null?0:t.length;if(!f||a<1)return[];for(var x=0,S=0,L=O(_m(f/a));x<f;)L[S++]=ht(t,x,x+=a);return L}function w6(t){for(var a=-1,s=t==null?0:t.length,f=0,x=[];++a<s;){var S=t[a];S&&(x[f++]=S)}return x}function S6(){var t=arguments.length;if(!t)return[];for(var a=O(t-1),s=arguments[0],f=t;f--;)a[f-1]=arguments[f];return da(Ie(s)?Mo(s):[s],mo(a,1))}var C6=Ee(function(t,a){return In(t)?hc(t,mo(a,1,In,!0)):[]}),A6=Ee(function(t,a){var s=Tt(a);return In(s)&&(s=e),In(t)?hc(t,mo(a,1,In,!0),ge(s,2)):[]}),I6=Ee(function(t,a){var s=Tt(a);return In(s)&&(s=e),In(t)?hc(t,mo(a,1,In,!0),e,s):[]});function b6(t,a,s){var f=t==null?0:t.length;return f?(a=s||a===e?1:ke(a),ht(t,a<0?0:a,f)):[]}function L6(t,a,s){var f=t==null?0:t.length;return f?(a=s||a===e?1:ke(a),a=f-a,ht(t,0,a<0?0:a)):[]}function N6(t,a){return t&&t.length?wm(t,ge(a,3),!0,!0):[]}function P6(t,a){return t&&t.length?wm(t,ge(a,3),!0):[]}function k6(t,a,s,f){var x=t==null?0:t.length;return x?(s&&typeof s!="number"&&bo(t,a,s)&&(s=0,f=x),SB(t,a,s,f)):[]}function yw(t,a,s){var f=t==null?0:t.length;if(!f)return-1;var x=s==null?0:ke(s);return x<0&&(x=Vn(f+x,0)),nm(t,ge(a,3),x)}function vw(t,a,s){var f=t==null?0:t.length;if(!f)return-1;var x=f-1;return s!==e&&(x=ke(s),x=s<0?Vn(f+x,0):ho(x,f-1)),nm(t,ge(a,3),x,!0)}function ww(t){var a=t==null?0:t.length;return a?mo(t,1):[]}function D6(t){var a=t==null?0:t.length;return a?mo(t,_e):[]}function E6(t,a){var s=t==null?0:t.length;return s?(a=a===e?1:ke(a),mo(t,a)):[]}function W6(t){for(var a=-1,s=t==null?0:t.length,f={};++a<s;){var x=t[a];f[x[0]]=x[1]}return f}function Sw(t){return t&&t.length?t[0]:e}function M6(t,a,s){var f=t==null?0:t.length;if(!f)return-1;var x=s==null?0:ke(s);return x<0&&(x=Vn(f+x,0)),Ji(t,a,x)}function B6(t){var a=t==null?0:t.length;return a?ht(t,0,-1):[]}var O6=Ee(function(t){var a=cn(t,Iu);return a.length&&a[0]===t[0]?gu(a):[]}),F6=Ee(function(t){var a=Tt(t),s=cn(t,Iu);return a===Tt(s)?a=e:s.pop(),s.length&&s[0]===t[0]?gu(s,ge(a,2)):[]}),R6=Ee(function(t){var a=Tt(t),s=cn(t,Iu);return a=typeof a=="function"?a:e,a&&s.pop(),s.length&&s[0]===t[0]?gu(s,e,a):[]});function U6(t,a){return t==null?"":B5.call(t,a)}function Tt(t){var a=t==null?0:t.length;return a?t[a-1]:e}function G6(t,a,s){var f=t==null?0:t.length;if(!f)return-1;var x=f;return s!==e&&(x=ke(s),x=x<0?Vn(f+x,0):ho(x,f-1)),a===a?y5(t,a,x):nm(t,tv,x,!0)}function H6(t,a){return t&&t.length?Wv(t,ke(a)):e}var V6=Ee(Cw);function Cw(t,a){return t&&t.length&&a&&a.length?yu(t,a):t}function $6(t,a,s){return t&&t.length&&a&&a.length?yu(t,a,ge(s,2)):t}function z6(t,a,s){return t&&t.length&&a&&a.length?yu(t,a,e,s):t}var q6=vr(function(t,a){var s=t==null?0:t.length,f=_u(t,a);return Ov(t,cn(a,function(x){return wr(x,s)?+x:x}).sort(jv)),f});function j6(t,a){var s=[];if(!(t&&t.length))return s;var f=-1,x=[],S=t.length;for(a=ge(a,3);++f<S;){var L=t[f];a(L,f,t)&&(s.push(L),x.push(f))}return Ov(t,x),s}function Uu(t){return t==null?t:U5.call(t)}function K6(t,a,s){var f=t==null?0:t.length;return f?(s&&typeof s!="number"&&bo(t,a,s)?(a=0,s=f):(a=a==null?0:ke(a),s=s===e?f:ke(s)),ht(t,a,s)):[]}function X6(t,a){return vm(t,a)}function Z6(t,a,s){return Su(t,a,ge(s,2))}function Y6(t,a){var s=t==null?0:t.length;if(s){var f=vm(t,a);if(f<s&&Lt(t[f],a))return f}return-1}function J6(t,a){return vm(t,a,!0)}function Q6(t,a,s){return Su(t,a,ge(s,2),!0)}function eO(t,a){var s=t==null?0:t.length;if(s){var f=vm(t,a,!0)-1;if(Lt(t[f],a))return f}return-1}function nO(t){return t&&t.length?Rv(t):[]}function oO(t,a){return t&&t.length?Rv(t,ge(a,2)):[]}function tO(t){var a=t==null?0:t.length;return a?ht(t,1,a):[]}function rO(t,a,s){return t&&t.length?(a=s||a===e?1:ke(a),ht(t,0,a<0?0:a)):[]}function aO(t,a,s){var f=t==null?0:t.length;return f?(a=s||a===e?1:ke(a),a=f-a,ht(t,a<0?0:a,f)):[]}function iO(t,a){return t&&t.length?wm(t,ge(a,3),!1,!0):[]}function pO(t,a){return t&&t.length?wm(t,ge(a,3)):[]}var cO=Ee(function(t){return ga(mo(t,1,In,!0))}),sO=Ee(function(t){var a=Tt(t);return In(a)&&(a=e),ga(mo(t,1,In,!0),ge(a,2))}),mO=Ee(function(t){var a=Tt(t);return a=typeof a=="function"?a:e,ga(mo(t,1,In,!0),e,a)});function dO(t){return t&&t.length?ga(t):[]}function _O(t,a){return t&&t.length?ga(t,ge(a,2)):[]}function lO(t,a){return a=typeof a=="function"?a:e,t&&t.length?ga(t,e,a):[]}function Gu(t){if(!(t&&t.length))return[];var a=0;return t=ma(t,function(s){if(In(s))return a=Vn(s.length,a),!0}),ru(a,function(s){return cn(t,nu(s))})}function Aw(t,a){if(!(t&&t.length))return[];var s=Gu(t);return a==null?s:cn(s,function(f){return jo(a,e,f)})}var uO=Ee(function(t,a){return In(t)?hc(t,a):[]}),fO=Ee(function(t){return Au(ma(t,In))}),gO=Ee(function(t){var a=Tt(t);return In(a)&&(a=e),Au(ma(t,In),ge(a,2))}),hO=Ee(function(t){var a=Tt(t);return a=typeof a=="function"?a:e,Au(ma(t,In),e,a)}),TO=Ee(Gu);function xO(t,a){return Vv(t||[],a||[],gc)}function yO(t,a){return Vv(t||[],a||[],yc)}var vO=Ee(function(t){var a=t.length,s=a>1?t[a-1]:e;return s=typeof s=="function"?(t.pop(),s):e,Aw(t,s)});function Iw(t){var a=v(t);return a.__chain__=!0,a}function wO(t,a){return a(t),t}function km(t,a){return a(t)}var SO=vr(function(t){var a=t.length,s=a?t[0]:0,f=this.__wrapped__,x=function(S){return _u(S,t)};return a>1||this.__actions__.length||!(f instanceof Re)||!wr(s)?this.thru(x):(f=f.slice(s,+s+(a?1:0)),f.__actions__.push({func:km,args:[x],thisArg:e}),new ft(f,this.__chain__).thru(function(S){return a&&!S.length&&S.push(e),S}))});function CO(){return Iw(this)}function AO(){return new ft(this.value(),this.__chain__)}function IO(){this.__values__===e&&(this.__values__=Uw(this.value()));var t=this.__index__>=this.__values__.length,a=t?e:this.__values__[this.__index__++];return{done:t,value:a}}function bO(){return this}function LO(t){for(var a,s=this;s instanceof gm;){var f=xw(s);f.__index__=0,f.__values__=e,a?x.__wrapped__=f:a=f;var x=f;s=s.__wrapped__}return x.__wrapped__=t,a}function NO(){var t=this.__wrapped__;if(t instanceof Re){var a=t;return this.__actions__.length&&(a=new Re(this)),a=a.reverse(),a.__actions__.push({func:km,args:[Uu],thisArg:e}),new ft(a,this.__chain__)}return this.thru(Uu)}function PO(){return Hv(this.__wrapped__,this.__actions__)}var kO=Sm(function(t,a,s){Ze.call(t,s)?++t[s]:xr(t,s,1)});function DO(t,a,s){var f=Ie(t)?nv:wB;return s&&bo(t,a,s)&&(a=e),f(t,ge(a,3))}function EO(t,a){var s=Ie(t)?ma:Av;return s(t,ge(a,3))}var WO=Qv(yw),MO=Qv(vw);function BO(t,a){return mo(Dm(t,a),1)}function OO(t,a){return mo(Dm(t,a),_e)}function FO(t,a,s){return s=s===e?1:ke(s),mo(Dm(t,a),s)}function bw(t,a){var s=Ie(t)?lt:fa;return s(t,ge(a,3))}function Lw(t,a){var s=Ie(t)?t5:Cv;return s(t,ge(a,3))}var RO=Sm(function(t,a,s){Ze.call(t,s)?t[s].push(a):xr(t,s,[a])});function UO(t,a,s,f){t=Bo(t)?t:sp(t),s=s&&!f?ke(s):0;var x=t.length;return s<0&&(s=Vn(x+s,0)),Om(t)?s<=x&&t.indexOf(a,s)>-1:!!x&&Ji(t,a,s)>-1}var GO=Ee(function(t,a,s){var f=-1,x=typeof a=="function",S=Bo(t)?O(t.length):[];return fa(t,function(L){S[++f]=x?jo(a,L,s):Tc(L,a,s)}),S}),HO=Sm(function(t,a,s){xr(t,s,a)});function Dm(t,a){var s=Ie(t)?cn:kv;return s(t,ge(a,3))}function VO(t,a,s,f){return t==null?[]:(Ie(a)||(a=a==null?[]:[a]),s=f?e:s,Ie(s)||(s=s==null?[]:[s]),Mv(t,a,s))}var $O=Sm(function(t,a,s){t[s?0:1].push(a)},function(){return[[],[]]});function zO(t,a,s){var f=Ie(t)?Ql:av,x=arguments.length<3;return f(t,ge(a,4),s,x,fa)}function qO(t,a,s){var f=Ie(t)?r5:av,x=arguments.length<3;return f(t,ge(a,4),s,x,Cv)}function jO(t,a){var s=Ie(t)?ma:Av;return s(t,Mm(ge(a,3)))}function KO(t){var a=Ie(t)?yv:UB;return a(t)}function XO(t,a,s){(s?bo(t,a,s):a===e)?a=1:a=ke(a);var f=Ie(t)?hB:GB;return f(t,a)}function ZO(t){var a=Ie(t)?TB:VB;return a(t)}function YO(t){if(t==null)return 0;if(Bo(t))return Om(t)?ep(t):t.length;var a=To(t);return a==qe||a==At?t.size:Tu(t).length}function JO(t,a,s){var f=Ie(t)?eu:$B;return s&&bo(t,a,s)&&(a=e),f(t,ge(a,3))}var QO=Ee(function(t,a){if(t==null)return[];var s=a.length;return s>1&&bo(t,a[0],a[1])?a=[]:s>2&&bo(a[0],a[1],a[2])&&(a=[a[0]]),Mv(t,mo(a,1),[])}),Em=E5||function(){return Yn.Date.now()};function eF(t,a){if(typeof a!="function")throw new ut(c);return t=ke(t),function(){if(--t<1)return a.apply(this,arguments)}}function Nw(t,a,s){return a=s?e:a,a=t&&a==null?t.length:a,yr(t,G,e,e,e,e,a)}function Pw(t,a){var s;if(typeof a!="function")throw new ut(c);return t=ke(t),function(){return--t>0&&(s=a.apply(this,arguments)),t<=1&&(a=e),s}}var Hu=Ee(function(t,a,s){var f=A;if(s.length){var x=_a(s,pp(Hu));f|=K}return yr(t,f,a,s,x)}),kw=Ee(function(t,a,s){var f=A|P;if(s.length){var x=_a(s,pp(kw));f|=K}return yr(a,f,t,s,x)});function Dw(t,a,s){a=s?e:a;var f=yr(t,B,e,e,e,e,e,a);return f.placeholder=Dw.placeholder,f}function Ew(t,a,s){a=s?e:a;var f=yr(t,z,e,e,e,e,e,a);return f.placeholder=Ew.placeholder,f}function Ww(t,a,s){var f,x,S,L,k,E,V=0,$=!1,X=!1,te=!0;if(typeof t!="function")throw new ut(c);a=xt(a)||0,dn(s)&&($=!!s.leading,X="maxWait"in s,S=X?Vn(xt(s.maxWait)||0,a):S,te="trailing"in s?!!s.trailing:te);function de(bn){var Nt=f,Ar=x;return f=x=e,V=bn,L=t.apply(Ar,Nt),L}function he(bn){return V=bn,k=Sc(Be,a),$?de(bn):L}function De(bn){var Nt=bn-E,Ar=bn-V,Qw=a-Nt;return X?ho(Qw,S-Ar):Qw}function Te(bn){var Nt=bn-E,Ar=bn-V;return E===e||Nt>=a||Nt<0||X&&Ar>=S}function Be(){var bn=Em();if(Te(bn))return Ue(bn);k=Sc(Be,De(bn))}function Ue(bn){return k=e,te&&f?de(bn):(f=x=e,L)}function Yo(){k!==e&&$v(k),V=0,f=E=x=k=e}function Lo(){return k===e?L:Ue(Em())}function Jo(){var bn=Em(),Nt=Te(bn);if(f=arguments,x=this,E=bn,Nt){if(k===e)return he(E);if(X)return $v(k),k=Sc(Be,a),de(E)}return k===e&&(k=Sc(Be,a)),L}return Jo.cancel=Yo,Jo.flush=Lo,Jo}var nF=Ee(function(t,a){return Sv(t,1,a)}),oF=Ee(function(t,a,s){return Sv(t,xt(a)||0,s)});function tF(t){return yr(t,ie)}function Wm(t,a){if(typeof t!="function"||a!=null&&typeof a!="function")throw new ut(c);var s=function(){var f=arguments,x=a?a.apply(this,f):f[0],S=s.cache;if(S.has(x))return S.get(x);var L=t.apply(this,f);return s.cache=S.set(x,L)||S,L};return s.cache=new(Wm.Cache||Tr),s}Wm.Cache=Tr;function Mm(t){if(typeof t!="function")throw new ut(c);return function(){var a=arguments;switch(a.length){case 0:return!t.call(this);case 1:return!t.call(this,a[0]);case 2:return!t.call(this,a[0],a[1]);case 3:return!t.call(this,a[0],a[1],a[2])}return!t.apply(this,a)}}function rF(t){return Pw(2,t)}var aF=zB(function(t,a){a=a.length==1&&Ie(a[0])?cn(a[0],Ko(ge())):cn(mo(a,1),Ko(ge()));var s=a.length;return Ee(function(f){for(var x=-1,S=ho(f.length,s);++x<S;)f[x]=a[x].call(this,f[x]);return jo(t,this,f)})}),Vu=Ee(function(t,a){var s=_a(a,pp(Vu));return yr(t,K,e,a,s)}),Mw=Ee(function(t,a){var s=_a(a,pp(Mw));return yr(t,R,e,a,s)}),iF=vr(function(t,a){return yr(t,Z,e,e,e,a)});function pF(t,a){if(typeof t!="function")throw new ut(c);return a=a===e?a:ke(a),Ee(t,a)}function cF(t,a){if(typeof t!="function")throw new ut(c);return a=a==null?0:Vn(ke(a),0),Ee(function(s){var f=s[a],x=Ta(s,0,a);return f&&da(x,f),jo(t,this,x)})}function sF(t,a,s){var f=!0,x=!0;if(typeof t!="function")throw new ut(c);return dn(s)&&(f="leading"in s?!!s.leading:f,x="trailing"in s?!!s.trailing:x),Ww(t,a,{leading:f,maxWait:a,trailing:x})}function mF(t){return Nw(t,1)}function dF(t,a){return Vu(bu(a),t)}function _F(){if(!arguments.length)return[];var t=arguments[0];return Ie(t)?t:[t]}function lF(t){return gt(t,y)}function uF(t,a){return a=typeof a=="function"?a:e,gt(t,y,a)}function fF(t){return gt(t,g|y)}function gF(t,a){return a=typeof a=="function"?a:e,gt(t,g|y,a)}function hF(t,a){return a==null||wv(t,a,Jn(a))}function Lt(t,a){return t===a||t!==t&&a!==a}var TF=bm(fu),xF=bm(function(t,a){return t>=a}),ri=Lv(function(){return arguments}())?Lv:function(t){return xn(t)&&Ze.call(t,"callee")&&!uv.call(t,"callee")},Ie=O.isArray,yF=Xy?Ko(Xy):LB;function Bo(t){return t!=null&&Bm(t.length)&&!Sr(t)}function In(t){return xn(t)&&Bo(t)}function vF(t){return t===!0||t===!1||xn(t)&&Io(t)==xe}var xa=M5||ef,wF=Zy?Ko(Zy):NB;function SF(t){return xn(t)&&t.nodeType===1&&!Cc(t)}function CF(t){if(t==null)return!0;if(Bo(t)&&(Ie(t)||typeof t=="string"||typeof t.splice=="function"||xa(t)||cp(t)||ri(t)))return!t.length;var a=To(t);if(a==qe||a==At)return!t.size;if(wc(t))return!Tu(t).length;for(var s in t)if(Ze.call(t,s))return!1;return!0}function AF(t,a){return xc(t,a)}function IF(t,a,s){s=typeof s=="function"?s:e;var f=s?s(t,a):e;return f===e?xc(t,a,e,s):!!f}function $u(t){if(!xn(t))return!1;var a=Io(t);return a==Pe||a==ce||typeof t.message=="string"&&typeof t.name=="string"&&!Cc(t)}function bF(t){return typeof t=="number"&&gv(t)}function Sr(t){if(!dn(t))return!1;var a=Io(t);return a==Fe||a==Xe||a==Le||a==Xs}function Bw(t){return typeof t=="number"&&t==ke(t)}function Bm(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ve}function dn(t){var a=typeof t;return t!=null&&(a=="object"||a=="function")}function xn(t){return t!=null&&typeof t=="object"}var Ow=Yy?Ko(Yy):kB;function LF(t,a){return t===a||hu(t,a,Wu(a))}function NF(t,a,s){return s=typeof s=="function"?s:e,hu(t,a,Wu(a),s)}function PF(t){return Fw(t)&&t!=+t}function kF(t){if(u6(t))throw new Ce(i);return Nv(t)}function DF(t){return t===null}function EF(t){return t==null}function Fw(t){return typeof t=="number"||xn(t)&&Io(t)==mn}function Cc(t){if(!xn(t)||Io(t)!=Tn)return!1;var a=sm(t);if(a===null)return!0;var s=Ze.call(a,"constructor")&&a.constructor;return typeof s=="function"&&s instanceof s&&am.call(s)==N5}var zu=Jy?Ko(Jy):DB;function WF(t){return Bw(t)&&t>=-ve&&t<=ve}var Rw=Qy?Ko(Qy):EB;function Om(t){return typeof t=="string"||!Ie(t)&&xn(t)&&Io(t)==pc}function Zo(t){return typeof t=="symbol"||xn(t)&&Io(t)==Zs}var cp=ev?Ko(ev):WB;function MF(t){return t===e}function BF(t){return xn(t)&&To(t)==cc}function OF(t){return xn(t)&&Io(t)==QM}var FF=bm(xu),RF=bm(function(t,a){return t<=a});function Uw(t){if(!t)return[];if(Bo(t))return Om(t)?It(t):Mo(t);if(dc&&t[dc])return h5(t[dc]());var a=To(t),s=a==qe?iu:a==At?om:sp;return s(t)}function Cr(t){if(!t)return t===0?t:0;if(t=xt(t),t===_e||t===-_e){var a=t<0?-1:1;return a*le}return t===t?t:0}function ke(t){var a=Cr(t),s=a%1;return a===a?s?a-s:a:0}function Gw(t){return t?ei(ke(t),0,ze):0}function xt(t){if(typeof t=="number")return t;if(Zo(t))return Ne;if(dn(t)){var a=typeof t.valueOf=="function"?t.valueOf():t;t=dn(a)?a+"":a}if(typeof t!="string")return t===0?t:+t;t=iv(t);var s=y3.test(t);return s||w3.test(t)?e5(t.slice(2),s?2:8):x3.test(t)?Ne:+t}function Hw(t){return Ht(t,Oo(t))}function UF(t){return t?ei(ke(t),-ve,ve):t===0?t:0}function Ke(t){return t==null?"":Xo(t)}var GF=ap(function(t,a){if(wc(a)||Bo(a)){Ht(a,Jn(a),t);return}for(var s in a)Ze.call(a,s)&&gc(t,s,a[s])}),Vw=ap(function(t,a){Ht(a,Oo(a),t)}),Fm=ap(function(t,a,s,f){Ht(a,Oo(a),t,f)}),HF=ap(function(t,a,s,f){Ht(a,Jn(a),t,f)}),VF=vr(_u);function $F(t,a){var s=rp(t);return a==null?s:vv(s,a)}var zF=Ee(function(t,a){t=Qe(t);var s=-1,f=a.length,x=f>2?a[2]:e;for(x&&bo(a[0],a[1],x)&&(f=1);++s<f;)for(var S=a[s],L=Oo(S),k=-1,E=L.length;++k<E;){var V=L[k],$=t[V];($===e||Lt($,np[V])&&!Ze.call(t,V))&&(t[V]=S[V])}return t}),qF=Ee(function(t){return t.push(e,iw),jo($w,e,t)});function jF(t,a){return ov(t,ge(a,3),Gt)}function KF(t,a){return ov(t,ge(a,3),uu)}function XF(t,a){return t==null?t:lu(t,ge(a,3),Oo)}function ZF(t,a){return t==null?t:Iv(t,ge(a,3),Oo)}function YF(t,a){return t&&Gt(t,ge(a,3))}function JF(t,a){return t&&uu(t,ge(a,3))}function QF(t){return t==null?[]:xm(t,Jn(t))}function e4(t){return t==null?[]:xm(t,Oo(t))}function qu(t,a,s){var f=t==null?e:ni(t,a);return f===e?s:f}function n4(t,a){return t!=null&&sw(t,a,CB)}function ju(t,a){return t!=null&&sw(t,a,AB)}var o4=nw(function(t,a,s){a!=null&&typeof a.toString!="function"&&(a=im.call(a)),t[a]=s},Xu(Fo)),t4=nw(function(t,a,s){a!=null&&typeof a.toString!="function"&&(a=im.call(a)),Ze.call(t,a)?t[a].push(s):t[a]=[s]},ge),r4=Ee(Tc);function Jn(t){return Bo(t)?xv(t):Tu(t)}function Oo(t){return Bo(t)?xv(t,!0):MB(t)}function a4(t,a){var s={};return a=ge(a,3),Gt(t,function(f,x,S){xr(s,a(f,x,S),f)}),s}function i4(t,a){var s={};return a=ge(a,3),Gt(t,function(f,x,S){xr(s,x,a(f,x,S))}),s}var p4=ap(function(t,a,s){ym(t,a,s)}),$w=ap(function(t,a,s,f){ym(t,a,s,f)}),c4=vr(function(t,a){var s={};if(t==null)return s;var f=!1;a=cn(a,function(S){return S=ha(S,t),f||(f=S.length>1),S}),Ht(t,Du(t),s),f&&(s=gt(s,g|T|y,o6));for(var x=a.length;x--;)Cu(s,a[x]);return s});function s4(t,a){return zw(t,Mm(ge(a)))}var m4=vr(function(t,a){return t==null?{}:OB(t,a)});function zw(t,a){if(t==null)return{};var s=cn(Du(t),function(f){return[f]});return a=ge(a),Bv(t,s,function(f,x){return a(f,x[0])})}function d4(t,a,s){a=ha(a,t);var f=-1,x=a.length;for(x||(x=1,t=e);++f<x;){var S=t==null?e:t[Vt(a[f])];S===e&&(f=x,S=s),t=Sr(S)?S.call(t):S}return t}function _4(t,a,s){return t==null?t:yc(t,a,s)}function l4(t,a,s,f){return f=typeof f=="function"?f:e,t==null?t:yc(t,a,s,f)}var qw=rw(Jn),jw=rw(Oo);function u4(t,a,s){var f=Ie(t),x=f||xa(t)||cp(t);if(a=ge(a,4),s==null){var S=t&&t.constructor;x?s=f?new S:[]:dn(t)?s=Sr(S)?rp(sm(t)):{}:s={}}return(x?lt:Gt)(t,function(L,k,E){return a(s,L,k,E)}),s}function f4(t,a){return t==null?!0:Cu(t,a)}function g4(t,a,s){return t==null?t:Gv(t,a,bu(s))}function h4(t,a,s,f){return f=typeof f=="function"?f:e,t==null?t:Gv(t,a,bu(s),f)}function sp(t){return t==null?[]:au(t,Jn(t))}function T4(t){return t==null?[]:au(t,Oo(t))}function x4(t,a,s){return s===e&&(s=a,a=e),s!==e&&(s=xt(s),s=s===s?s:0),a!==e&&(a=xt(a),a=a===a?a:0),ei(xt(t),a,s)}function y4(t,a,s){return a=Cr(a),s===e?(s=a,a=0):s=Cr(s),t=xt(t),IB(t,a,s)}function v4(t,a,s){if(s&&typeof s!="boolean"&&bo(t,a,s)&&(a=s=e),s===e&&(typeof a=="boolean"?(s=a,a=e):typeof t=="boolean"&&(s=t,t=e)),t===e&&a===e?(t=0,a=1):(t=Cr(t),a===e?(a=t,t=0):a=Cr(a)),t>a){var f=t;t=a,a=f}if(s||t%1||a%1){var x=hv();return ho(t+x*(a-t+Q3("1e-"+((x+"").length-1))),a)}return vu(t,a)}var w4=ip(function(t,a,s){return a=a.toLowerCase(),t+(s?Kw(a):a)});function Kw(t){return Ku(Ke(t).toLowerCase())}function Xw(t){return t=Ke(t),t&&t.replace(C3,_5).replace(V3,"")}function S4(t,a,s){t=Ke(t),a=Xo(a);var f=t.length;s=s===e?f:ei(ke(s),0,f);var x=s;return s-=a.length,s>=0&&t.slice(s,x)==a}function C4(t){return t=Ke(t),t&&r3.test(t)?t.replace(Iy,l5):t}function A4(t){return t=Ke(t),t&&m3.test(t)?t.replace(Vl,"\\$&"):t}var I4=ip(function(t,a,s){return t+(s?"-":"")+a.toLowerCase()}),b4=ip(function(t,a,s){return t+(s?" ":"")+a.toLowerCase()}),L4=Jv("toLowerCase");function N4(t,a,s){t=Ke(t),a=ke(a);var f=a?ep(t):0;if(!a||f>=a)return t;var x=(a-f)/2;return Im(lm(x),s)+t+Im(_m(x),s)}function P4(t,a,s){t=Ke(t),a=ke(a);var f=a?ep(t):0;return a&&f<a?t+Im(a-f,s):t}function k4(t,a,s){t=Ke(t),a=ke(a);var f=a?ep(t):0;return a&&f<a?Im(a-f,s)+t:t}function D4(t,a,s){return s||a==null?a=0:a&&(a=+a),R5(Ke(t).replace($l,""),a||0)}function E4(t,a,s){return(s?bo(t,a,s):a===e)?a=1:a=ke(a),wu(Ke(t),a)}function W4(){var t=arguments,a=Ke(t[0]);return t.length<3?a:a.replace(t[1],t[2])}var M4=ip(function(t,a,s){return t+(s?"_":"")+a.toLowerCase()});function B4(t,a,s){return s&&typeof s!="number"&&bo(t,a,s)&&(a=s=e),s=s===e?ze:s>>>0,s?(t=Ke(t),t&&(typeof a=="string"||a!=null&&!zu(a))&&(a=Xo(a),!a&&Qi(t))?Ta(It(t),0,s):t.split(a,s)):[]}var O4=ip(function(t,a,s){return t+(s?" ":"")+Ku(a)});function F4(t,a,s){return t=Ke(t),s=s==null?0:ei(ke(s),0,t.length),a=Xo(a),t.slice(s,s+a.length)==a}function R4(t,a,s){var f=v.templateSettings;s&&bo(t,a,s)&&(a=e),t=Ke(t),a=Fm({},a,f,aw);var x=Fm({},a.imports,f.imports,aw),S=Jn(x),L=au(x,S),k,E,V=0,$=a.interpolate||Ys,X="__p += '",te=pu((a.escape||Ys).source+"|"+$.source+"|"+($===by?T3:Ys).source+"|"+(a.evaluate||Ys).source+"|$","g"),de="//# sourceURL="+(Ze.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++K3+"]")+`
`;t.replace(te,function(Te,Be,Ue,Yo,Lo,Jo){return Ue||(Ue=Yo),X+=t.slice(V,Jo).replace(A3,u5),Be&&(k=!0,X+=`' +
__e(`+Be+`) +
'`),Lo&&(E=!0,X+=`';
`+Lo+`;
__p += '`),Ue&&(X+=`' +
((__t = (`+Ue+`)) == null ? '' : __t) +
'`),V=Jo+Te.length,Te}),X+=`';
`;var he=Ze.call(a,"variable")&&a.variable;if(!he)X=`with (obj) {
`+X+`
}
`;else if(g3.test(he))throw new Ce(p);X=(E?X.replace(e3,""):X).replace(n3,"$1").replace(o3,"$1;"),X="function("+(he||"obj")+`) {
`+(he?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(k?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+X+`return __p
}`;var De=Yw(function(){return je(S,de+"return "+X).apply(e,L)});if(De.source=X,$u(De))throw De;return De}function U4(t){return Ke(t).toLowerCase()}function G4(t){return Ke(t).toUpperCase()}function H4(t,a,s){if(t=Ke(t),t&&(s||a===e))return iv(t);if(!t||!(a=Xo(a)))return t;var f=It(t),x=It(a),S=pv(f,x),L=cv(f,x)+1;return Ta(f,S,L).join("")}function V4(t,a,s){if(t=Ke(t),t&&(s||a===e))return t.slice(0,mv(t)+1);if(!t||!(a=Xo(a)))return t;var f=It(t),x=cv(f,It(a))+1;return Ta(f,0,x).join("")}function $4(t,a,s){if(t=Ke(t),t&&(s||a===e))return t.replace($l,"");if(!t||!(a=Xo(a)))return t;var f=It(t),x=pv(f,It(a));return Ta(f,x).join("")}function z4(t,a){var s=ee,f=re;if(dn(a)){var x="separator"in a?a.separator:x;s="length"in a?ke(a.length):s,f="omission"in a?Xo(a.omission):f}t=Ke(t);var S=t.length;if(Qi(t)){var L=It(t);S=L.length}if(s>=S)return t;var k=s-ep(f);if(k<1)return f;var E=L?Ta(L,0,k).join(""):t.slice(0,k);if(x===e)return E+f;if(L&&(k+=E.length-k),zu(x)){if(t.slice(k).search(x)){var V,$=E;for(x.global||(x=pu(x.source,Ke(Ly.exec(x))+"g")),x.lastIndex=0;V=x.exec($);)var X=V.index;E=E.slice(0,X===e?k:X)}}else if(t.indexOf(Xo(x),k)!=k){var te=E.lastIndexOf(x);te>-1&&(E=E.slice(0,te))}return E+f}function q4(t){return t=Ke(t),t&&t3.test(t)?t.replace(Ay,v5):t}var j4=ip(function(t,a,s){return t+(s?" ":"")+a.toUpperCase()}),Ku=Jv("toUpperCase");function Zw(t,a,s){return t=Ke(t),a=s?e:a,a===e?g5(t)?C5(t):p5(t):t.match(a)||[]}var Yw=Ee(function(t,a){try{return jo(t,e,a)}catch(s){return $u(s)?s:new Ce(s)}}),K4=vr(function(t,a){return lt(a,function(s){s=Vt(s),xr(t,s,Hu(t[s],t))}),t});function X4(t){var a=t==null?0:t.length,s=ge();return t=a?cn(t,function(f){if(typeof f[1]!="function")throw new ut(c);return[s(f[0]),f[1]]}):[],Ee(function(f){for(var x=-1;++x<a;){var S=t[x];if(jo(S[0],this,f))return jo(S[1],this,f)}})}function Z4(t){return vB(gt(t,g))}function Xu(t){return function(){return t}}function Y4(t,a){return t==null||t!==t?a:t}var J4=ew(),Q4=ew(!0);function Fo(t){return t}function Zu(t){return Pv(typeof t=="function"?t:gt(t,g))}function eR(t){return Dv(gt(t,g))}function nR(t,a){return Ev(t,gt(a,g))}var oR=Ee(function(t,a){return function(s){return Tc(s,t,a)}}),tR=Ee(function(t,a){return function(s){return Tc(t,s,a)}});function Yu(t,a,s){var f=Jn(a),x=xm(a,f);s==null&&!(dn(a)&&(x.length||!f.length))&&(s=a,a=t,t=this,x=xm(a,Jn(a)));var S=!(dn(s)&&"chain"in s)||!!s.chain,L=Sr(t);return lt(x,function(k){var E=a[k];t[k]=E,L&&(t.prototype[k]=function(){var V=this.__chain__;if(S||V){var $=t(this.__wrapped__),X=$.__actions__=Mo(this.__actions__);return X.push({func:E,args:arguments,thisArg:t}),$.__chain__=V,$}return E.apply(t,da([this.value()],arguments))})}),t}function rR(){return Yn._===this&&(Yn._=P5),this}function Ju(){}function aR(t){return t=ke(t),Ee(function(a){return Wv(a,t)})}var iR=Nu(cn),pR=Nu(nv),cR=Nu(eu);function Jw(t){return Bu(t)?nu(Vt(t)):FB(t)}function sR(t){return function(a){return t==null?e:ni(t,a)}}var mR=ow(),dR=ow(!0);function Qu(){return[]}function ef(){return!1}function _R(){return{}}function lR(){return""}function uR(){return!0}function fR(t,a){if(t=ke(t),t<1||t>ve)return[];var s=ze,f=ho(t,ze);a=ge(a),t-=ze;for(var x=ru(f,a);++s<t;)a(s);return x}function gR(t){return Ie(t)?cn(t,Vt):Zo(t)?[t]:Mo(Tw(Ke(t)))}function hR(t){var a=++L5;return Ke(t)+a}var TR=Am(function(t,a){return t+a},0),xR=Pu("ceil"),yR=Am(function(t,a){return t/a},1),vR=Pu("floor");function wR(t){return t&&t.length?Tm(t,Fo,fu):e}function SR(t,a){return t&&t.length?Tm(t,ge(a,2),fu):e}function CR(t){return rv(t,Fo)}function AR(t,a){return rv(t,ge(a,2))}function IR(t){return t&&t.length?Tm(t,Fo,xu):e}function bR(t,a){return t&&t.length?Tm(t,ge(a,2),xu):e}var LR=Am(function(t,a){return t*a},1),NR=Pu("round"),PR=Am(function(t,a){return t-a},0);function kR(t){return t&&t.length?tu(t,Fo):0}function DR(t,a){return t&&t.length?tu(t,ge(a,2)):0}return v.after=eF,v.ary=Nw,v.assign=GF,v.assignIn=Vw,v.assignInWith=Fm,v.assignWith=HF,v.at=VF,v.before=Pw,v.bind=Hu,v.bindAll=K4,v.bindKey=kw,v.castArray=_F,v.chain=Iw,v.chunk=v6,v.compact=w6,v.concat=S6,v.cond=X4,v.conforms=Z4,v.constant=Xu,v.countBy=kO,v.create=$F,v.curry=Dw,v.curryRight=Ew,v.debounce=Ww,v.defaults=zF,v.defaultsDeep=qF,v.defer=nF,v.delay=oF,v.difference=C6,v.differenceBy=A6,v.differenceWith=I6,v.drop=b6,v.dropRight=L6,v.dropRightWhile=N6,v.dropWhile=P6,v.fill=k6,v.filter=EO,v.flatMap=BO,v.flatMapDeep=OO,v.flatMapDepth=FO,v.flatten=ww,v.flattenDeep=D6,v.flattenDepth=E6,v.flip=tF,v.flow=J4,v.flowRight=Q4,v.fromPairs=W6,v.functions=QF,v.functionsIn=e4,v.groupBy=RO,v.initial=B6,v.intersection=O6,v.intersectionBy=F6,v.intersectionWith=R6,v.invert=o4,v.invertBy=t4,v.invokeMap=GO,v.iteratee=Zu,v.keyBy=HO,v.keys=Jn,v.keysIn=Oo,v.map=Dm,v.mapKeys=a4,v.mapValues=i4,v.matches=eR,v.matchesProperty=nR,v.memoize=Wm,v.merge=p4,v.mergeWith=$w,v.method=oR,v.methodOf=tR,v.mixin=Yu,v.negate=Mm,v.nthArg=aR,v.omit=c4,v.omitBy=s4,v.once=rF,v.orderBy=VO,v.over=iR,v.overArgs=aF,v.overEvery=pR,v.overSome=cR,v.partial=Vu,v.partialRight=Mw,v.partition=$O,v.pick=m4,v.pickBy=zw,v.property=Jw,v.propertyOf=sR,v.pull=V6,v.pullAll=Cw,v.pullAllBy=$6,v.pullAllWith=z6,v.pullAt=q6,v.range=mR,v.rangeRight=dR,v.rearg=iF,v.reject=jO,v.remove=j6,v.rest=pF,v.reverse=Uu,v.sampleSize=XO,v.set=_4,v.setWith=l4,v.shuffle=ZO,v.slice=K6,v.sortBy=QO,v.sortedUniq=nO,v.sortedUniqBy=oO,v.split=B4,v.spread=cF,v.tail=tO,v.take=rO,v.takeRight=aO,v.takeRightWhile=iO,v.takeWhile=pO,v.tap=wO,v.throttle=sF,v.thru=km,v.toArray=Uw,v.toPairs=qw,v.toPairsIn=jw,v.toPath=gR,v.toPlainObject=Hw,v.transform=u4,v.unary=mF,v.union=cO,v.unionBy=sO,v.unionWith=mO,v.uniq=dO,v.uniqBy=_O,v.uniqWith=lO,v.unset=f4,v.unzip=Gu,v.unzipWith=Aw,v.update=g4,v.updateWith=h4,v.values=sp,v.valuesIn=T4,v.without=uO,v.words=Zw,v.wrap=dF,v.xor=fO,v.xorBy=gO,v.xorWith=hO,v.zip=TO,v.zipObject=xO,v.zipObjectDeep=yO,v.zipWith=vO,v.entries=qw,v.entriesIn=jw,v.extend=Vw,v.extendWith=Fm,Yu(v,v),v.add=TR,v.attempt=Yw,v.camelCase=w4,v.capitalize=Kw,v.ceil=xR,v.clamp=x4,v.clone=lF,v.cloneDeep=fF,v.cloneDeepWith=gF,v.cloneWith=uF,v.conformsTo=hF,v.deburr=Xw,v.defaultTo=Y4,v.divide=yR,v.endsWith=S4,v.eq=Lt,v.escape=C4,v.escapeRegExp=A4,v.every=DO,v.find=WO,v.findIndex=yw,v.findKey=jF,v.findLast=MO,v.findLastIndex=vw,v.findLastKey=KF,v.floor=vR,v.forEach=bw,v.forEachRight=Lw,v.forIn=XF,v.forInRight=ZF,v.forOwn=YF,v.forOwnRight=JF,v.get=qu,v.gt=TF,v.gte=xF,v.has=n4,v.hasIn=ju,v.head=Sw,v.identity=Fo,v.includes=UO,v.indexOf=M6,v.inRange=y4,v.invoke=r4,v.isArguments=ri,v.isArray=Ie,v.isArrayBuffer=yF,v.isArrayLike=Bo,v.isArrayLikeObject=In,v.isBoolean=vF,v.isBuffer=xa,v.isDate=wF,v.isElement=SF,v.isEmpty=CF,v.isEqual=AF,v.isEqualWith=IF,v.isError=$u,v.isFinite=bF,v.isFunction=Sr,v.isInteger=Bw,v.isLength=Bm,v.isMap=Ow,v.isMatch=LF,v.isMatchWith=NF,v.isNaN=PF,v.isNative=kF,v.isNil=EF,v.isNull=DF,v.isNumber=Fw,v.isObject=dn,v.isObjectLike=xn,v.isPlainObject=Cc,v.isRegExp=zu,v.isSafeInteger=WF,v.isSet=Rw,v.isString=Om,v.isSymbol=Zo,v.isTypedArray=cp,v.isUndefined=MF,v.isWeakMap=BF,v.isWeakSet=OF,v.join=U6,v.kebabCase=I4,v.last=Tt,v.lastIndexOf=G6,v.lowerCase=b4,v.lowerFirst=L4,v.lt=FF,v.lte=RF,v.max=wR,v.maxBy=SR,v.mean=CR,v.meanBy=AR,v.min=IR,v.minBy=bR,v.stubArray=Qu,v.stubFalse=ef,v.stubObject=_R,v.stubString=lR,v.stubTrue=uR,v.multiply=LR,v.nth=H6,v.noConflict=rR,v.noop=Ju,v.now=Em,v.pad=N4,v.padEnd=P4,v.padStart=k4,v.parseInt=D4,v.random=v4,v.reduce=zO,v.reduceRight=qO,v.repeat=E4,v.replace=W4,v.result=d4,v.round=NR,v.runInContext=D,v.sample=KO,v.size=YO,v.snakeCase=M4,v.some=JO,v.sortedIndex=X6,v.sortedIndexBy=Z6,v.sortedIndexOf=Y6,v.sortedLastIndex=J6,v.sortedLastIndexBy=Q6,v.sortedLastIndexOf=eO,v.startCase=O4,v.startsWith=F4,v.subtract=PR,v.sum=kR,v.sumBy=DR,v.template=R4,v.times=fR,v.toFinite=Cr,v.toInteger=ke,v.toLength=Gw,v.toLower=U4,v.toNumber=xt,v.toSafeInteger=UF,v.toString=Ke,v.toUpper=G4,v.trim=H4,v.trimEnd=V4,v.trimStart=$4,v.truncate=z4,v.unescape=q4,v.uniqueId=hR,v.upperCase=j4,v.upperFirst=Ku,v.each=bw,v.eachRight=Lw,v.first=Sw,Yu(v,function(){var t={};return Gt(v,function(a,s){Ze.call(v.prototype,s)||(t[s]=a)}),t}(),{chain:!1}),v.VERSION=n,lt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){v[t].placeholder=v}),lt(["drop","take"],function(t,a){Re.prototype[t]=function(s){s=s===e?1:Vn(ke(s),0);var f=this.__filtered__&&!a?new Re(this):this.clone();return f.__filtered__?f.__takeCount__=ho(s,f.__takeCount__):f.__views__.push({size:ho(s,ze),type:t+(f.__dir__<0?"Right":"")}),f},Re.prototype[t+"Right"]=function(s){return this.reverse()[t](s).reverse()}}),lt(["filter","map","takeWhile"],function(t,a){var s=a+1,f=s==ue||s==Oe;Re.prototype[t]=function(x){var S=this.clone();return S.__iteratees__.push({iteratee:ge(x,3),type:s}),S.__filtered__=S.__filtered__||f,S}}),lt(["head","last"],function(t,a){var s="take"+(a?"Right":"");Re.prototype[t]=function(){return this[s](1).value()[0]}}),lt(["initial","tail"],function(t,a){var s="drop"+(a?"":"Right");Re.prototype[t]=function(){return this.__filtered__?new Re(this):this[s](1)}}),Re.prototype.compact=function(){return this.filter(Fo)},Re.prototype.find=function(t){return this.filter(t).head()},Re.prototype.findLast=function(t){return this.reverse().find(t)},Re.prototype.invokeMap=Ee(function(t,a){return typeof t=="function"?new Re(this):this.map(function(s){return Tc(s,t,a)})}),Re.prototype.reject=function(t){return this.filter(Mm(ge(t)))},Re.prototype.slice=function(t,a){t=ke(t);var s=this;return s.__filtered__&&(t>0||a<0)?new Re(s):(t<0?s=s.takeRight(-t):t&&(s=s.drop(t)),a!==e&&(a=ke(a),s=a<0?s.dropRight(-a):s.take(a-t)),s)},Re.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Re.prototype.toArray=function(){return this.take(ze)},Gt(Re.prototype,function(t,a){var s=/^(?:filter|find|map|reject)|While$/.test(a),f=/^(?:head|last)$/.test(a),x=v[f?"take"+(a=="last"?"Right":""):a],S=f||/^find/.test(a);!x||(v.prototype[a]=function(){var L=this.__wrapped__,k=f?[1]:arguments,E=L instanceof Re,V=k[0],$=E||Ie(L),X=function(Be){var Ue=x.apply(v,da([Be],k));return f&&te?Ue[0]:Ue};$&&s&&typeof V=="function"&&V.length!=1&&(E=$=!1);var te=this.__chain__,de=!!this.__actions__.length,he=S&&!te,De=E&&!de;if(!S&&$){L=De?L:new Re(this);var Te=t.apply(L,k);return Te.__actions__.push({func:km,args:[X],thisArg:e}),new ft(Te,te)}return he&&De?t.apply(this,k):(Te=this.thru(X),he?f?Te.value()[0]:Te.value():Te)})}),lt(["pop","push","shift","sort","splice","unshift"],function(t){var a=tm[t],s=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",f=/^(?:pop|shift)$/.test(t);v.prototype[t]=function(){var x=arguments;if(f&&!this.__chain__){var S=this.value();return a.apply(Ie(S)?S:[],x)}return this[s](function(L){return a.apply(Ie(L)?L:[],x)})}}),Gt(Re.prototype,function(t,a){var s=v[a];if(s){var f=s.name+"";Ze.call(tp,f)||(tp[f]=[]),tp[f].push({name:a,func:s})}}),tp[Cm(e,P).name]=[{name:"wrapper",func:e}],Re.prototype.clone=q5,Re.prototype.reverse=j5,Re.prototype.value=K5,v.prototype.at=SO,v.prototype.chain=CO,v.prototype.commit=AO,v.prototype.next=IO,v.prototype.plant=LO,v.prototype.reverse=NO,v.prototype.toJSON=v.prototype.valueOf=v.prototype.value=PO,v.prototype.first=v.prototype.head,dc&&(v.prototype[dc]=bO),v},la=A5();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Yn._=la,define(function(){return la})):Za?((Za.exports=la)._=la,Zl._=la):Yn._=la}).call($p)});var eT={};oe(eT,{css:()=>Sk,default:()=>g$});var Sk,g$,nT=F(()=>{"use strict";r();Sk=`.dapp-core-component__confirmAddressStyles__ledger-confirm-address {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sk));g$={"ledger-confirm-address":"dapp-core-component__confirmAddressStyles__ledger-confirm-address",ledgerConfirmAddress:"dapp-core-component__confirmAddressStyles__ledger-confirm-address","ledger-confirm-address-heading":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading",ledgerConfirmAddressHeading:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-heading","ledger-confirm-address-section":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section",ledgerConfirmAddressSection:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-section","ledger-confirm-address-description":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description",ledgerConfirmAddressDescription:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-description","ledger-confirm-address-data":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data",ledgerConfirmAddressData:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-data","ledger-confirm-address-footer":"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer",ledgerConfirmAddressFooter:"dapp-core-component__confirmAddressStyles__ledger-confirm-address-footer"}});var oT={};oe(oT,{css:()=>Ik,default:()=>x$});var Ik,x$,tT=F(()=>{"use strict";r();Ik=`.dapp-core-component__ledgerConnectStyles__login-connect-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ik));x$={"login-connect-container":"dapp-core-component__ledgerConnectStyles__login-connect-container",loginConnectContainer:"dapp-core-component__ledgerConnectStyles__login-connect-container","login-connect-container-content":"dapp-core-component__ledgerConnectStyles__login-connect-container-content",loginConnectContainerContent:"dapp-core-component__ledgerConnectStyles__login-connect-container-content","login-connect-container-heading":"dapp-core-component__ledgerConnectStyles__login-connect-container-heading",loginConnectContainerHeading:"dapp-core-component__ledgerConnectStyles__login-connect-container-heading","login-connect-container-description":"dapp-core-component__ledgerConnectStyles__login-connect-container-description",loginConnectContainerDescription:"dapp-core-component__ledgerConnectStyles__login-connect-container-description","login-connect-container-error":"dapp-core-component__ledgerConnectStyles__login-connect-container-error",loginConnectContainerError:"dapp-core-component__ledgerConnectStyles__login-connect-container-error","login-connect-container-icon":"dapp-core-component__ledgerConnectStyles__login-connect-container-icon",loginConnectContainerIcon:"dapp-core-component__ledgerConnectStyles__login-connect-container-icon","login-connect-container-footer":"dapp-core-component__ledgerConnectStyles__login-connect-container-footer",loginConnectContainerFooter:"dapp-core-component__ledgerConnectStyles__login-connect-container-footer","login-connect-container-button":"dapp-core-component__ledgerConnectStyles__login-connect-container-button",loginConnectContainerButton:"dapp-core-component__ledgerConnectStyles__login-connect-container-button","login-connect-container-link":"dapp-core-component__ledgerConnectStyles__login-connect-container-link",loginConnectContainerLink:"dapp-core-component__ledgerConnectStyles__login-connect-container-link"}});var rT={};oe(rT,{css:()=>Nk,default:()=>v$});var Nk,v$,aT=F(()=>{"use strict";r();Nk=`.dapp-core-component__progressBarStyles__ledger-progress-bar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nk));v$={"ledger-progress-bar":"dapp-core-component__progressBarStyles__ledger-progress-bar",ledgerProgressBar:"dapp-core-component__progressBarStyles__ledger-progress-bar","ledger-progress-bar-track":"dapp-core-component__progressBarStyles__ledger-progress-bar-track",ledgerProgressBarTrack:"dapp-core-component__progressBarStyles__ledger-progress-bar-track","ledger-progress-bar-thumb":"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb",ledgerProgressBarThumb:"dapp-core-component__progressBarStyles__ledger-progress-bar-thumb"}});var pT={};oe(pT,{css:()=>kk,default:()=>S$});var kk,S$,cT=F(()=>{"use strict";r();kk=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kk));S$={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var dT={};oe(dT,{css:()=>Bk,default:()=>A$});var Bk,A$,_T=F(()=>{"use strict";r();Bk=`.dapp-core-component__ledgerLoginContainerStyles__ledger-login-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bk));A$={"ledger-login-container":"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container",ledgerLoginContainer:"dapp-core-component__ledgerLoginContainerStyles__ledger-login-container","ledger-modal-dialog-content":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content",ledgerModalDialogContent:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-dialog-content","ledger-modal-header":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header",ledgerModalHeader:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header","ledger-modal-header-text":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text",ledgerModalHeaderText:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-header-text","ledger-modal-close-button":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button",ledgerModalCloseButton:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-close-button","ledger-modal-body":"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body",ledgerModalBody:"dapp-core-component__ledgerLoginContainerStyles__ledger-modal-body"}});var Ii={};oe(Ii,{css:()=>Vk,default:()=>k$});var Vk,k$,bi=F(()=>{"use strict";r();Vk=`.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container {
  padding: 48px 16px;
}
@media (min-width: 768px) {
  .dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container {
    padding: 48px 40px;
  }
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content {
  border-radius: 24px;
  border: none;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  max-width: 400px;
}
@media (min-width: 768px) {
  .dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content {
    max-width: 730px;
  }
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header {
  position: absolute;
  background-color: transparent;
  padding: 0;
  right: 20px;
  top: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text {
  display: none;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button {
  float: none;
  cursor: pointer;
  position: relative;
  top: auto;
  padding: 0;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button:hover {
  background-color: transparent;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  overflow: hidden;
}

.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content {
  text-align: center;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error {
  color: #d9534f;
  margin-bottom: 0;
  margin-top: 12px;
  line-height: 1;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code {
  width: 100%;
  max-width: 290px;
  margin: 32px auto 0;
  border-radius: 16px;
  overflow: hidden;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader {
  margin-top: 48px;
  margin-bottom: 48px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button {
  border-radius: 6px;
  padding: 12px 16px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: -16px;
  justify-content: center;
}
@media (min-width: 768px) {
  .dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button {
    width: auto;
    align-self: center;
  }
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button .dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon {
  margin-right: 8px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings {
  margin-top: 32px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead {
  margin-bottom: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list {
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button {
  display: flex;
  border: none;
  background-color: #dee2e6;
  border-radius: 6px;
  padding: 16px;
  align-items: center;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader {
  width: 48px;
  overflow: hidden;
  height: auto;
  min-width: 2rem;
  margin: 0;
  padding: 0;
  color: #1b46c2;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image {
  width: 48px;
  height: auto;
  max-height: 48px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-word;
  text-align: left;
  margin-left: 16px;
  gap: 4px;
  flex: 1;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list .dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove {
  margin-left: 16px;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link {
  line-height: 1;
  font-size: 18px;
  margin-top: 32px;
  font-weight: 500;
  display: inline-block;
}
.dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link:hover, .dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link:active, .dapp-core-component__walletConnectLoginContainerStyles__xPortal-content .dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link:focus {
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vk));k$={"xPortal-login-container":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container",xPortalLoginContainer:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container","xPortal-modal-dialog-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content",xPortalModalDialogContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content","xPortal-modal-header":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header",xPortalModalHeader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header","xPortal-modal-header-text":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text",xPortalModalHeaderText:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text","xPortal-modal-close-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button",xPortalModalCloseButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button","xPortal-modal-body":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body",xPortalModalBody:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body","xPortal-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content",xPortalContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content","xPortal-container-heading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading",xPortalContainerHeading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading","xPortal-container-subheading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading",xPortalContainerSubheading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading","xPortal-container-error":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error",xPortalContainerError:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error","xPortal-qr-code":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code",xPortalQrCode:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code","xPortal-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader",xPortalLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader","xPortal-container-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button",xPortalContainerButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button","xPortal-container-button-icon":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon",xPortalContainerButtonIcon:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon","xPortal-pairings":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings",xPortalPairings:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings","xPortal-pairings-lead":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead",xPortalPairingsLead:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead","xPortal-pairings-list":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list",xPortalPairingsList:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list","xPortal-pairing-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button",xPortalPairingButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button","xPortal-pairing-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader",xPortalPairingLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader","xPortal-pairing-image":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image",xPortalPairingImage:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image","xPortal-pairing-details":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details",xPortalPairingDetails:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details","xPortal-pairing-remove":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove",xPortalPairingRemove:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove","xPortal-legacy-link":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link",xPortalLegacyLink:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link"}});var wT={};oe(wT,{css:()=>Kk,default:()=>M$});var Kk,M$,ST=F(()=>{"use strict";r();Kk=`.dapp-core-component__unlockPageStyles__wrapper {
  color: inherit;
}

.dapp-core-component__unlockPageStyles__home {
  color: inherit;
}

.dapp-core-component__unlockPageStyles__unlock-page {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Kk));M$={wrapper:"dapp-core-component__unlockPageStyles__wrapper",home:"dapp-core-component__unlockPageStyles__home","unlock-page":"dapp-core-component__unlockPageStyles__unlock-page",unlockPage:"dapp-core-component__unlockPageStyles__unlock-page"}});var CT={};oe(CT,{css:()=>Zk,default:()=>F$});var Zk,F$,AT=F(()=>{"use strict";r();Zk=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zk));F$={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var bT={};oe(bT,{css:()=>eD,default:()=>U$});var eD,U$,LT=F(()=>{"use strict";r();eD=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(eD));U$={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Kr={};oe(Kr,{css:()=>rD,default:()=>q$});var rD,q$,Xr=F(()=>{"use strict";r();rD=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rD));q$={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var vs={};oe(vs,{css:()=>cD,default:()=>Z$});var cD,Z$,ws=F(()=>{"use strict";r();cD=`.dapp-core-component__transactionStatusToastStyles__transactions-status-toast {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cD));Z$={"transactions-status-toast":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast",transactionsStatusToast:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast","transactions-status-toast-content":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content",transactionsStatusToastContent:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content","transactions-status-toast-icon":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",transactionsStatusToastIcon:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",svg:"dapp-core-component__transactionStatusToastStyles__svg",toasts:"dapp-core-component__transactionStatusToastStyles__toasts",toastWrapper:"dapp-core-component__transactionStatusToastStyles__toastWrapper"}});var MT={};oe(MT,{css:()=>uD,default:()=>nz});var uD,nz,BT=F(()=>{"use strict";r();uD=`.dapp-core-component__signWaitingScreenModal-styles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__modal-container {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(uD));nz={"extension-modal":"dapp-core-component__signWaitingScreenModal-styles__extension-modal",extensionModal:"dapp-core-component__signWaitingScreenModal-styles__extension-modal","modal-container":"dapp-core-component__signWaitingScreenModal-styles__modal-container",modalContainer:"dapp-core-component__signWaitingScreenModal-styles__modal-container",extension:"dapp-core-component__signWaitingScreenModal-styles__extension"}});var ID=J((bPe,AD)=>{r();function rz(e,n){for(var o=-1,i=e==null?0:e.length,c=Array(i);++o<i;)c[o]=n(e[o],o,e);return c}AD.exports=rz});var DD=J((LPe,kD)=>{r();var bD=m_(),az=ID(),iz=Pg(),pz=Ph(),cz=1/0,LD=bD?bD.prototype:void 0,ND=LD?LD.toString:void 0;function PD(e){if(typeof e=="string")return e;if(iz(e))return az(e,PD)+"";if(pz(e))return ND?ND.call(e):"";var n=e+"";return n=="0"&&1/e==-cz?"-0":n}kD.exports=PD});var GT=J((NPe,ED)=>{r();var sz=DD();function mz(e){return e==null?"":sz(e)}ED.exports=mz});var MD=J((PPe,WD)=>{r();function dz(e,n,o){var i=-1,c=e.length;n<0&&(n=-n>c?0:c+n),o=o>c?c:o,o<0&&(o+=c),c=n>o?0:o-n>>>0,n>>>=0;for(var p=Array(c);++i<c;)p[i]=e[i+n];return p}WD.exports=dz});var OD=J((kPe,BD)=>{r();var _z=MD();function lz(e,n,o){var i=e.length;return o=o===void 0?i:o,!n&&o>=i?e:_z(e,n,o)}BD.exports=lz});var HT=J((DPe,FD)=>{r();var uz="\\ud800-\\udfff",fz="\\u0300-\\u036f",gz="\\ufe20-\\ufe2f",hz="\\u20d0-\\u20ff",Tz=fz+gz+hz,xz="\\ufe0e\\ufe0f",yz="\\u200d",vz=RegExp("["+yz+uz+Tz+xz+"]");function wz(e){return vz.test(e)}FD.exports=wz});var UD=J((EPe,RD)=>{r();function Sz(e){return e.split("")}RD.exports=Sz});var KD=J((WPe,jD)=>{r();var GD="\\ud800-\\udfff",Cz="\\u0300-\\u036f",Az="\\ufe20-\\ufe2f",Iz="\\u20d0-\\u20ff",bz=Cz+Az+Iz,Lz="\\ufe0e\\ufe0f",Nz="["+GD+"]",VT="["+bz+"]",$T="\\ud83c[\\udffb-\\udfff]",Pz="(?:"+VT+"|"+$T+")",HD="[^"+GD+"]",VD="(?:\\ud83c[\\udde6-\\uddff]){2}",$D="[\\ud800-\\udbff][\\udc00-\\udfff]",kz="\\u200d",zD=Pz+"?",qD="["+Lz+"]?",Dz="(?:"+kz+"(?:"+[HD,VD,$D].join("|")+")"+qD+zD+")*",Ez=qD+zD+Dz,Wz="(?:"+[HD+VT+"?",VT,VD,$D,Nz].join("|")+")",Mz=RegExp($T+"(?="+$T+")|"+Wz+Ez,"g");function Bz(e){return e.match(Mz)||[]}jD.exports=Bz});var ZD=J((MPe,XD)=>{r();var Oz=UD(),Fz=HT(),Rz=KD();function Uz(e){return Fz(e)?Rz(e):Oz(e)}XD.exports=Uz});var JD=J((BPe,YD)=>{r();var Gz=OD(),Hz=HT(),Vz=ZD(),$z=GT();function zz(e){return function(n){n=$z(n);var o=Hz(n)?Vz(n):void 0,i=o?o[0]:n.charAt(0),c=o?Gz(o,1).join(""):n.slice(1);return i[e]()+c}}YD.exports=zz});var eE=J((OPe,QD)=>{r();var qz=JD(),jz=qz("toUpperCase");QD.exports=jz});var oE=J((FPe,nE)=>{r();var Kz=GT(),Xz=eE();function Zz(e){return Xz(Kz(e).toLowerCase())}nE.exports=Zz});var qT={};oe(qT,{css:()=>cE,default:()=>Jz});var cE,Jz,jT=F(()=>{"use strict";r();cE=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cE));Jz={copy:"dapp-core-component__copyButton-styles__copy"}});var XT={};oe(XT,{css:()=>mE,default:()=>eq});var mE,eq,ZT=F(()=>{"use strict";r();mE=`.dapp-core-component__TransactionDataStyles__transactionData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mE));eq={transactionData:"dapp-core-component__TransactionDataStyles__transactionData",transactionDataLabel:"dapp-core-component__TransactionDataStyles__transactionDataLabel",transactionDataValueWrapper:"dapp-core-component__TransactionDataStyles__transactionDataValueWrapper",transactionDataValue:"dapp-core-component__TransactionDataStyles__transactionDataValue",transactionDataValueText:"dapp-core-component__TransactionDataStyles__transactionDataValueText",transactionDataValueCopy:"dapp-core-component__TransactionDataStyles__transactionDataValueCopy"}});var JT={};oe(JT,{css:()=>uE,default:()=>rq});var uE,rq,QT=F(()=>{"use strict";r();uE=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(uE));rq={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var nx={};oe(nx,{css:()=>xE,default:()=>pq});var xE,pq,ox=F(()=>{"use strict";r();xE=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xE));pq={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var tx={};oe(tx,{css:()=>CE,default:()=>sq});var CE,sq,rx=F(()=>{"use strict";r();CE=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(CE));sq={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var ax={};oe(ax,{css:()=>kE,default:()=>dq});var kE,dq,ix=F(()=>{"use strict";r();kE=`.dapp-core-component__confirmAmountStyles__confirmAmount {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kE));dq={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var cx={};oe(cx,{css:()=>EE,default:()=>lq});var EE,lq,sx=F(()=>{"use strict";r();EE=`.dapp-core-component__confirmFeeStyles__confirmFee {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(EE));lq={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var mx={};oe(mx,{css:()=>BE,default:()=>fq});var BE,fq,dx=F(()=>{"use strict";r();BE=`.dapp-core-component__confirmReceiverStyles__receiver {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(BE));fq={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var _x={};oe(_x,{css:()=>GE,default:()=>hq});var GE,hq,lx=F(()=>{"use strict";r();GE=`.dapp-core-component__signStepBodyStyles__summary {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(GE));hq={summary:"dapp-core-component__signStepBodyStyles__summary",fields:"dapp-core-component__signStepBodyStyles__fields",buttons:"dapp-core-component__signStepBodyStyles__buttons"}});var ux={};oe(ux,{css:()=>zE,default:()=>xq});var zE,xq,fx=F(()=>{"use strict";r();zE=`.dapp-core-component__progressHeaderStyles__progress-steps {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zE));xq={"progress-steps":"dapp-core-component__progressHeaderStyles__progress-steps",progressSteps:"dapp-core-component__progressHeaderStyles__progress-steps","progress-step":"dapp-core-component__progressHeaderStyles__progress-step",progressStep:"dapp-core-component__progressHeaderStyles__progress-step","progress-step-wrapper":"dapp-core-component__progressHeaderStyles__progress-step-wrapper",progressStepWrapper:"dapp-core-component__progressHeaderStyles__progress-step-wrapper",detailed:"dapp-core-component__progressHeaderStyles__detailed",collapsible:"dapp-core-component__progressHeaderStyles__collapsible",completed:"dapp-core-component__progressHeaderStyles__completed",active:"dapp-core-component__progressHeaderStyles__active","progress-step-index":"dapp-core-component__progressHeaderStyles__progress-step-index",progressStepIndex:"dapp-core-component__progressHeaderStyles__progress-step-index","progress-step-check":"dapp-core-component__progressHeaderStyles__progress-step-check",progressStepCheck:"dapp-core-component__progressHeaderStyles__progress-step-check","progress-step-title":"dapp-core-component__progressHeaderStyles__progress-step-title",progressStepTitle:"dapp-core-component__progressHeaderStyles__progress-step-title","progress-step-title-text":"dapp-core-component__progressHeaderStyles__progress-step-title-text",progressStepTitleText:"dapp-core-component__progressHeaderStyles__progress-step-title-text"}});var Cs={};oe(Cs,{css:()=>XE,default:()=>vq});var XE,vq,As=F(()=>{"use strict";r();XE=`.dapp-core-component__signWithDeviceModalStyles__wallet-connect {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(XE));vq={"wallet-connect":"dapp-core-component__signWithDeviceModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithDeviceModalStyles__wallet-connect","modal-container":"dapp-core-component__signWithDeviceModalStyles__modal-container",modalContainer:"dapp-core-component__signWithDeviceModalStyles__modal-container",formGroup:"dapp-core-component__signWithDeviceModalStyles__formGroup",title:"dapp-core-component__signWithDeviceModalStyles__title","modal-layout-content":"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",modalLayoutContent:"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",guarded:"dapp-core-component__signWithDeviceModalStyles__guarded",spaced:"dapp-core-component__signWithDeviceModalStyles__spaced","modal-layout-heading-icon":"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",modalLayoutHeadingIcon:"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",back:"dapp-core-component__signWithDeviceModalStyles__back",close:"dapp-core-component__signWithDeviceModalStyles__close",disabled:"dapp-core-component__signWithDeviceModalStyles__disabled","sign-buttons":"dapp-core-component__signWithDeviceModalStyles__sign-buttons",signButtons:"dapp-core-component__signWithDeviceModalStyles__sign-buttons","sign-button-submit":"dapp-core-component__signWithDeviceModalStyles__sign-button-submit",signButtonSubmit:"dapp-core-component__signWithDeviceModalStyles__sign-button-submit","sign-button-cancel":"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel",signButtonCancel:"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel"}});var yx={};oe(yx,{css:()=>n2,default:()=>Cq});var n2,Cq,vx=F(()=>{"use strict";r();n2=`.dapp-core-component__signWithOperaModalStyles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWithOperaModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithOperaModalStyles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(n2));Cq={"extension-modal":"dapp-core-component__signWithOperaModalStyles__extension-modal",extensionModal:"dapp-core-component__signWithOperaModalStyles__extension-modal","modal-container":"dapp-core-component__signWithOperaModalStyles__modal-container",modalContainer:"dapp-core-component__signWithOperaModalStyles__modal-container",extension:"dapp-core-component__signWithOperaModalStyles__extension"}});var Cx={};oe(Cx,{css:()=>m2,default:()=>Nq});var m2,Nq,Ax=F(()=>{"use strict";r();m2=`.dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal {
  color: inherit;
}

.dapp-core-component__signWithWalletConnectModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithWalletConnectModalStyles__wallet-connect {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(m2));Nq={"wallet-connect-modal":"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal",walletConnectModal:"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect-modal","modal-container":"dapp-core-component__signWithWalletConnectModalStyles__modal-container",modalContainer:"dapp-core-component__signWithWalletConnectModalStyles__modal-container","wallet-connect":"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithWalletConnectModalStyles__wallet-connect"}});var fn={};oe(fn,{css:()=>b2,default:()=>Oq});var b2,Oq,gn=F(()=>{"use strict";r();b2=`.dapp-core-component__transactionsTable-styles__transactions-table {
  border: none;
  box-shadow: 0 0.75rem 1.875rem 0 rgba(90, 97, 105, 0.05);
  border-radius: 0.75rem;
  color: #000;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__transactions-table-header {
  border-bottom: none;
  border-radius: 0.75rem;
  padding: 1.75rem 2rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__transactions-table-header h6 {
  margin-bottom: 0;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper {
  overflow-x: auto;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table {
  white-space: nowrap;
  max-height: 500px;
  width: 100%;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table tr {
  border-top: 1px solid #e2e2e2;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table th {
  white-space: nowrap;
  padding: 0.75rem;
  background-color: #fbfbfb;
  border: 0;
  vertical-align: middle;
  font-weight: 400;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table th:first-child {
  padding-left: 2rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table td {
  white-space: nowrap;
  width: 0.1%;
  white-space: nowrap;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table td:first-child {
  padding-left: 1.25rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell {
  padding: 0;
  margin: 0.75rem;
  font-variant-numeric: slashed-zero;
  color: #000;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell a {
  color: #1f43f4;
  font-weight: 500;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin {
  margin-left: 0;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=left] span,
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=ellipsis] {
  color: #1f43f4;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-overflow {
  max-width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-link {
  position: relative;
  text-decoration: none;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-font-small {
  font-size: 0.75rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(b2));Oq={"transactions-table":"dapp-core-component__transactionsTable-styles__transactions-table",transactionsTable:"dapp-core-component__transactionsTable-styles__transactions-table","transactions-table-header":"dapp-core-component__transactionsTable-styles__transactions-table-header",transactionsTableHeader:"dapp-core-component__transactionsTable-styles__transactions-table-header","table-wrapper":"dapp-core-component__transactionsTable-styles__table-wrapper",tableWrapper:"dapp-core-component__transactionsTable-styles__table-wrapper",table:"dapp-core-component__transactionsTable-styles__table","transaction-cell":"dapp-core-component__transactionsTable-styles__transaction-cell",transactionCell:"dapp-core-component__transactionsTable-styles__transaction-cell","transaction-cell-margin":"dapp-core-component__transactionsTable-styles__transaction-cell-margin",transactionCellMargin:"dapp-core-component__transactionsTable-styles__transaction-cell-margin","transaction-cell-overflow":"dapp-core-component__transactionsTable-styles__transaction-cell-overflow",transactionCellOverflow:"dapp-core-component__transactionsTable-styles__transaction-cell-overflow","transaction-cell-link":"dapp-core-component__transactionsTable-styles__transaction-cell-link",transactionCellLink:"dapp-core-component__transactionsTable-styles__transaction-cell-link","transaction-cell-font-small":"dapp-core-component__transactionsTable-styles__transaction-cell-font-small",transactionCellFontSmall:"dapp-core-component__transactionsTable-styles__transaction-cell-font-small"}});var Es={};oe(Es,{css:()=>F2,default:()=>$q});var F2,$q,Ws=F(()=>{"use strict";r();F2=`.dapp-core-component__styles__transaction-action-collection {
  color: #1f43f4;
  display: inline-flex;
  margin-left: 0;
}
.dapp-core-component__styles__transaction-action-collection:hover {
  text-decoration: none;
}

.dapp-core-component__styles__transaction-action-nft {
  display: contents;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer {
  margin-left: 0;
  color: #1f43f4;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer .dapp-core-component__styles__data {
  margin: 0;
  margin-right: 0.25rem;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F2));$q={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var Dx={};oe(Dx,{css:()=>K2,default:()=>Jq});var K2,Jq,Ex=F(()=>{"use strict";r();K2=`.dapp-core-component__styles__operation-block {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__direction {
  text-transform: uppercase;
  line-height: 1;
  min-width: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.25em 0.4em;
  margin-right: 0.5rem;
  justify-content: center;
  font-size: 63%;
  margin-right: 0.5rem;
  position: relative;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
  background-color: #f5f5f5;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__direction.dapp-core-component__styles__in {
  color: #17c671;
  border: 1px solid rgba(23, 198, 113, 0.2);
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__direction.dapp-core-component__styles__out {
  color: #d39e00;
  border: 1px solid rgba(211, 158, 0, 0.2);
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__direction.dapp-core-component__styles__int {
  color: #cacbcc;
  border: 1px solid rgba(202, 203, 204, 0.2);
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__direction.dapp-core-component__styles__self {
  color: #6c757d;
  border: 1px solid rgba(108, 117, 125, 0.2);
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__explorer {
  align-items: flex-end;
  flex: 1;
  overflow: hidden;
  margin: 0;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__explorer span {
  max-width: none;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__explorer span [class*=left] span,
.dapp-core-component__styles__operation-block .dapp-core-component__styles__explorer span [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__explorer span:last-child {
  color: #1f43f4;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__operation-block .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(K2));Jq={"operation-block":"dapp-core-component__styles__operation-block",operationBlock:"dapp-core-component__styles__operation-block",direction:"dapp-core-component__styles__direction",in:"dapp-core-component__styles__in",out:"dapp-core-component__styles__out",int:"dapp-core-component__styles__int",self:"dapp-core-component__styles__self",explorer:"dapp-core-component__styles__explorer",copy:"dapp-core-component__styles__copy"}});var Rx={};oe(Rx,{css:()=>nW,default:()=>aj});var nW,aj,Ux=F(()=>{"use strict";r();nW=`.dapp-core-component__styles__group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nW));aj={group:"dapp-core-component__styles__group"}});var Hx={};oe(Hx,{css:()=>oW,default:()=>pj});var oW,pj,Vx=F(()=>{"use strict";r();oW=`.dapp-core-component__styles__address {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer {
  margin-left: 0;
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  color: #1f43f4;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span {
  max-width: none;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span [class*=left] span,
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span:last-child {
  color: #1f43f4;
}

.dapp-core-component__styles__token {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
@media (min-width: 992px) {
  .dapp-core-component__styles__token.dapp-core-component__styles__spaced {
    margin-right: 0.25rem;
  }
}
.dapp-core-component__styles__token .dapp-core-component__styles__comma {
  display: none;
}
@media (min-width: 992px) {
  .dapp-core-component__styles__token .dapp-core-component__styles__comma {
    display: block;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oW));pj={address:"dapp-core-component__styles__address",explorer:"dapp-core-component__styles__explorer",token:"dapp-core-component__styles__token",spaced:"dapp-core-component__styles__spaced",comma:"dapp-core-component__styles__comma"}});var $x={};oe($x,{css:()=>rW,default:()=>sj});var rW,sj,zx=F(()=>{"use strict";r();rW=`.dapp-core-component__styles__action {
  display: flex;
  flex-direction: column;
}
@media (min-width: 992px) {
  .dapp-core-component__styles__action {
    flex-wrap: wrap;
    flex-direction: row;
  }
}
@media (min-width: 992px) {
  .dapp-core-component__styles__action .dapp-core-component__styles__result {
    flex-direction: row;
    align-items: center;
    display: contents;
    margin-right: 0.25rem;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rW));sj={action:"dapp-core-component__styles__action",result:"dapp-core-component__styles__result"}});var Xx={};oe(Xx,{css:()=>cW,default:()=>dj});var cW,dj,Zx=F(()=>{"use strict";r();cW=`.dapp-core-component__styles__decode {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cW));dj={decode:"dapp-core-component__styles__decode",textarea:"dapp-core-component__styles__textarea",select:"dapp-core-component__styles__select",dropdown:"dapp-core-component__styles__dropdown",warnings:"dapp-core-component__styles__warnings",icon:"dapp-core-component__styles__icon",warning:"dapp-core-component__styles__warning"}});var Jx={};oe(Jx,{css:()=>wW,default:()=>gj});var wW,gj,Qx=F(()=>{"use strict";r();wW=`.dapp-core-component__dataField-module__data-field .dapp-core-component__dataField-module__form-control:disabled,
.dapp-core-component__dataField-module__data-field .dapp-core-component__dataField-module__form-control[readonly] {
  background-color: #fafafa;
}
.dapp-core-component__dataField-module__data-field .dapp-core-component__dataField-module__small-font {
  font-size: 0.8125rem;
}

.dapp-core-component__dataField-module__modal-container .dapp-core-component__dataField-module__modal-dialog .dapp-core-component__dataField-module__modal-content {
  align-items: center;
  border-radius: 0.25rem;
}
.dapp-core-component__dataField-module__modal-container .dapp-core-component__dataField-module__modal-dialog .dapp-core-component__dataField-module__card .dapp-core-component__dataField-module__card-body {
  box-shadow: inset 0 4px 0 0 #1b46c2;
  border-radius: 0.25rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wW));gj={"data-field":"dapp-core-component__dataField-module__data-field",dataField:"dapp-core-component__dataField-module__data-field","form-control":"dapp-core-component__dataField-module__form-control",formControl:"dapp-core-component__dataField-module__form-control","small-font":"dapp-core-component__dataField-module__small-font",smallFont:"dapp-core-component__dataField-module__small-font","modal-container":"dapp-core-component__dataField-module__modal-container",modalContainer:"dapp-core-component__dataField-module__modal-container","modal-dialog":"dapp-core-component__dataField-module__modal-dialog",modalDialog:"dapp-core-component__dataField-module__modal-dialog","modal-content":"dapp-core-component__dataField-module__modal-content",modalContent:"dapp-core-component__dataField-module__modal-content",card:"dapp-core-component__dataField-module__card","card-body":"dapp-core-component__dataField-module__card-body",cardBody:"dapp-core-component__dataField-module__card-body"}});var o0={};oe(o0,{css:()=>SW,default:()=>xj});var SW,xj,t0=F(()=>{"use strict";r();SW=`.dapp-core-component__detailItem-module__detail-item:last-child {
  border-bottom: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(SW));xj={"detail-item":"dapp-core-component__detailItem-module__detail-item",detailItem:"dapp-core-component__detailItem-module__detail-item"}});var r0={};oe(r0,{css:()=>CW,default:()=>vj});var CW,vj,a0=F(()=>{"use strict";r();CW=`.dapp-core-component__styles__contract-detail-item {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__contract-detail-item span {
  color: #1f43f4;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__explorer {
  margin-left: 0.5rem;
  position: relative;
  display: flex;
  overflow: hidden;
  color: #cacbcc;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
  color: #1f43f4;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(CW));vj={"contract-detail-item":"dapp-core-component__styles__contract-detail-item",contractDetailItem:"dapp-core-component__styles__contract-detail-item",explorer:"dapp-core-component__styles__explorer",copy:"dapp-core-component__styles__copy"}});var p0={};oe(p0,{css:()=>LW,default:()=>Sj});var LW,Sj,c0=F(()=>{"use strict";r();LW=`.dapp-core-component__styles__scResultWrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
@media (min-width: 576px) {
  .dapp-core-component__styles__scResultWrapper {
    flex-direction: row;
  }
}
.dapp-core-component__styles__scResultWrapper .dapp-core-component__styles__label {
  color: #6c757d;
}
@media (min-width: 576px) {
  .dapp-core-component__styles__scResultWrapper .dapp-core-component__styles__label {
    text-align: right;
  }
}
.dapp-core-component__styles__scResultWrapper .dapp-core-component__styles__data {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(LW));Sj={scResultWrapper:"dapp-core-component__styles__scResultWrapper",label:"dapp-core-component__styles__label",data:"dapp-core-component__styles__data"}});var m0={};oe(m0,{css:()=>EW,default:()=>Nj});var EW,Nj,d0=F(()=>{"use strict";r();EW=`.dapp-core-component__styles__scResultReceiver .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__scResultReceiver .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__scResultReceiver .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}
.dapp-core-component__styles__scResultReceiver .dapp-core-component__styles__address {
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  width: auto;
}
.dapp-core-component__styles__scResultReceiver .dapp-core-component__styles__address span {
  max-width: none;
}
.dapp-core-component__styles__scResultReceiver .dapp-core-component__styles__address span [class*=left] span,
.dapp-core-component__styles__scResultReceiver .dapp-core-component__styles__address span [class*=right] span {
  font-size: 1rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(EW));Nj={scResultReceiver:"dapp-core-component__styles__scResultReceiver",copy:"dapp-core-component__styles__copy",address:"dapp-core-component__styles__address"}});var _0={};oe(_0,{css:()=>MW,default:()=>Dj});var MW,Dj,l0=F(()=>{"use strict";r();MW=`.dapp-core-component__styles__scResultSender .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__scResultSender .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__scResultSender .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}
.dapp-core-component__styles__scResultSender .dapp-core-component__styles__address {
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  width: auto;
}
.dapp-core-component__styles__scResultSender .dapp-core-component__styles__address span {
  max-width: none;
}
.dapp-core-component__styles__scResultSender .dapp-core-component__styles__address span [class*=left] span,
.dapp-core-component__styles__scResultSender .dapp-core-component__styles__address span [class*=right] span {
  font-size: 1rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(MW));Dj={scResultSender:"dapp-core-component__styles__scResultSender",copy:"dapp-core-component__styles__copy",address:"dapp-core-component__styles__address"}});var u0={};oe(u0,{css:()=>OW,default:()=>Mj});var OW,Mj,f0=F(()=>{"use strict";r();OW=`.dapp-core-component__styles__results {
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
}
.dapp-core-component__styles__results .dapp-core-component__styles__result {
  display: flex;
  border-left: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 1rem;
  margin-left: 1rem;
}
.dapp-core-component__styles__results .dapp-core-component__styles__result:not(:first-child) {
  padding-top: 1rem;
}
.dapp-core-component__styles__results .dapp-core-component__styles__result .dapp-core-component__styles__icon {
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
.dapp-core-component__styles__results .dapp-core-component__styles__result .dapp-core-component__styles__content {
  flex: 1;
  margin-top: 0.4rem;
  max-width: calc(100% - 1.5875rem);
  width: calc(100% - 1.5875rem);
  display: block;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(OW));Mj={results:"dapp-core-component__styles__results",result:"dapp-core-component__styles__result",icon:"dapp-core-component__styles__icon",content:"dapp-core-component__styles__content"}});var h0={};oe(h0,{css:()=>UW,default:()=>Oj});var UW,Oj,T0=F(()=>{"use strict";r();UW=`.dapp-core-component__styles__address-detail-item {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__explorer {
  margin-left: 0;
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  color: #1f43f4;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__explorer span {
  max-width: none;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__explorer span [class*=left] span,
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__explorer span [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__explorer span:last-child {
  color: #1f43f4;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__address-detail-item .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(UW));Oj={"address-detail-item":"dapp-core-component__styles__address-detail-item",addressDetailItem:"dapp-core-component__styles__address-detail-item",explorer:"dapp-core-component__styles__explorer",copy:"dapp-core-component__styles__copy"}});var x0={};oe(x0,{css:()=>HW,default:()=>Rj});var HW,Rj,y0=F(()=>{"use strict";r();HW=`.dapp-core-component__styles__events {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(HW));Rj={events:"dapp-core-component__styles__events",event:"dapp-core-component__styles__event",icon:"dapp-core-component__styles__icon",content:"dapp-core-component__styles__content",row:"dapp-core-component__styles__row",label:"dapp-core-component__styles__label",data:"dapp-core-component__styles__data",hash:"dapp-core-component__styles__hash",copy:"dapp-core-component__styles__copy",explorer:"dapp-core-component__styles__explorer",address:"dapp-core-component__styles__address"}});var w0={};oe(w0,{css:()=>qW,default:()=>Vj});var qW,Vj,S0=F(()=>{"use strict";r();qW=`.dapp-core-component__styles__hash {
  display: flex;
  align-items: center;
  word-break: break-all;
}
.dapp-core-component__styles__hash .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__hash .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__hash .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qW));Vj={hash:"dapp-core-component__styles__hash",copy:"dapp-core-component__styles__copy"}});var L0={};oe(L0,{css:()=>KW,default:()=>Kj});var KW,Kj,N0=F(()=>{"use strict";r();KW=`.dapp-core-component__styles__miniblock {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__explorer {
  margin-left: 0;
  text-decoration: none;
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__explorer span [class*=left] span,
.dapp-core-component__styles__miniblock .dapp-core-component__styles__explorer span [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__explorer span:last-child {
  color: #1f43f4;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__explorer .dapp-core-component__styles__trim {
  max-width: none;
  align-items: flex-end;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}
.dapp-core-component__styles__miniblock .dapp-core-component__styles__void {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(KW));Kj={miniblock:"dapp-core-component__styles__miniblock",explorer:"dapp-core-component__styles__explorer",trim:"dapp-core-component__styles__trim",copy:"dapp-core-component__styles__copy",void:"dapp-core-component__styles__void"}});var k0={};oe(k0,{css:()=>XW,default:()=>Zj});var XW,Zj,D0=F(()=>{"use strict";r();XW=`.dapp-core-component__styles__fee .dapp-core-component__styles__price {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(XW));Zj={fee:"dapp-core-component__styles__fee",price:"dapp-core-component__styles__price"}});var W0={};oe(W0,{css:()=>YW,default:()=>Jj});var YW,Jj,M0=F(()=>{"use strict";r();YW=`.dapp-core-component__styles__from .dapp-core-component__styles__wrapper {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__explorer {
  margin-left: 0;
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  color: #1f43f4;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__explorer span {
  max-width: none;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__explorer span [class*=left] span,
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__explorer span [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__explorer span:last-child {
  color: #1f43f4;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__explorer .dapp-core-component__styles__trim {
  max-width: none;
  align-items: flex-end;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}
.dapp-core-component__styles__from .dapp-core-component__styles__wrapper .dapp-core-component__styles__shard {
  color: #1f43f4;
  text-decoration: none;
  flex-shrink: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(YW));Jj={from:"dapp-core-component__styles__from",wrapper:"dapp-core-component__styles__wrapper",explorer:"dapp-core-component__styles__explorer",trim:"dapp-core-component__styles__trim",copy:"dapp-core-component__styles__copy",shard:"dapp-core-component__styles__shard"}});var O0={};oe(O0,{css:()=>QW,default:()=>eK});var QW,eK,F0=F(()=>{"use strict";r();QW=`.dapp-core-component__styles__to .dapp-core-component__styles__wrapper {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__contract {
  margin-right: 0.5rem;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__explorer {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  color: #1f43f4;
  margin-left: 0;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__explorer span {
  max-width: none;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__explorer span [class*=left] span,
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__explorer span [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__explorer span:last-child {
  color: #1f43f4;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__copy {
  margin: 0 0.5rem;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__content .dapp-core-component__styles__shard {
  color: #1f43f4;
  text-decoration: none;
  flex-shrink: 0;
  margin-left: 0;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__message {
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__message .dapp-core-component__styles__icon {
  color: #6c757d;
  height: 0.75rem;
}
.dapp-core-component__styles__to .dapp-core-component__styles__wrapper .dapp-core-component__styles__message .dapp-core-component__styles__text {
  color: #d9534f;
  margin-left: 0.5rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(QW));eK={to:"dapp-core-component__styles__to",wrapper:"dapp-core-component__styles__wrapper",content:"dapp-core-component__styles__content",contract:"dapp-core-component__styles__contract",explorer:"dapp-core-component__styles__explorer",copy:"dapp-core-component__styles__copy",shard:"dapp-core-component__styles__shard",message:"dapp-core-component__styles__message",icon:"dapp-core-component__styles__icon",text:"dapp-core-component__styles__text"}});var H0={};oe(H0,{css:()=>nM,default:()=>oK});var nM,oK,V0=F(()=>{"use strict";r();nM=`.dapp-core-component__styles__value .dapp-core-component__styles__price {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nM));oK={value:"dapp-core-component__styles__value",price:"dapp-core-component__styles__price"}});var j0={};oe(j0,{css:()=>rM,default:()=>aK});var rM,aK,K0=F(()=>{"use strict";r();rM=`.dapp-core-component__styles__price {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rM));aK={price:"dapp-core-component__styles__price"}});var Y0={};oe(Y0,{css:()=>aM,default:()=>pK});var aM,pK,J0=F(()=>{"use strict";r();aM=`.dapp-core-component__styles__gas {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(aM));pK={gas:"dapp-core-component__styles__gas"}});var ny={};oe(ny,{css:()=>iM,default:()=>sK});var iM,sK,oy=F(()=>{"use strict";r();iM=`.dapp-core-component__styles__gas {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(iM));sK={gas:"dapp-core-component__styles__gas"}});var ry={};oe(ry,{css:()=>pM,default:()=>dK});var pM,dK,ay=F(()=>{"use strict";r();pM=`.dapp-core-component__styles__gas {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pM));dK={gas:"dapp-core-component__styles__gas"}});var ly={};oe(ly,{css:()=>sM,default:()=>TK});var sM,TK,uy=F(()=>{"use strict";r();sM=`.dapp-core-component__progressStyles__progress {
  position: relative;
}
.dapp-core-component__progressStyles__progress .dapp-core-component__progressStyles__bar {
  position: absolute;
  pointer-events: none;
  left: -0.5rem;
  right: -0.5rem;
  bottom: -0.5rem;
  top: -0.5rem;
  background-color: #495057;
  opacity: 0.25;
  transition: width 0.6s ease;
  max-width: calc(100% + 1rem);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sM));TK={progress:"dapp-core-component__progressStyles__progress",bar:"dapp-core-component__progressStyles__bar"}});var ia={};oe(ia,{css:()=>uM,default:()=>yK});var uM,yK,pa=F(()=>{"use strict";r();uM=`.dapp-core-component__transactionDetails-styles__title {
  margin-bottom: 0;
}

.dapp-core-component__transactionDetails-styles__status {
  font-size: 0.875rem;
  margin: 0.25rem 0 0.5rem;
  line-height: 1.5;
}

.dapp-core-component__transactionDetails-styles__container {
  line-height: 1.5;
  font-size: 0.875rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
}
.dapp-core-component__transactionDetails-styles__container .dapp-core-component__transactionDetails-styles__icon {
  font-size: 0.875rem;
  color: #6c757d;
  margin-right: 0.25rem;
}
.dapp-core-component__transactionDetails-styles__container .dapp-core-component__transactionDetails-styles__trim {
  width: 11rem;
  white-space: nowrap;
  margin-right: 1rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(uM));yK={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var Ft={};oe(Ft,{css:()=>hM,default:()=>IK});var hM,IK,Rt=F(()=>{"use strict";r();hM=`.dapp-core-component__transactionToast-styles__content {
  display: flex;
  align-items: center;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 0.5rem;
  padding-right: 0.75rem;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__warning {
  background-color: #f0ad4e;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__danger {
  background-color: #d9534f;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__success {
  background-color: #5cb85c;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__icon .dapp-core-component__transactionToast-styles__svg {
  height: auto;
  width: 20px;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__left .dapp-core-component__transactionToast-styles__icon .dapp-core-component__transactionToast-styles__svg path {
  fill: #fff;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right {
  display: block;
  overflow: hidden;
  width: 100%;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading .dapp-core-component__transactionToast-styles__title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  font-weight: 400;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading .dapp-core-component__transactionToast-styles__close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
}
.dapp-core-component__transactionToast-styles__content .dapp-core-component__transactionToast-styles__right .dapp-core-component__transactionToast-styles__heading .dapp-core-component__transactionToast-styles__footer {
  display: block;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hM));IK={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var ca={};oe(ca,{css:()=>yM,default:()=>LK});var yM,LK,sa=F(()=>{"use strict";r();yM=`.dapp-core-component__transactionsToastList-styles__toasts {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
  font-family: "Helvetica", sans-serif;
}
.dapp-core-component__transactionsToastList-styles__toasts.dapp-core-component__transactionsToastList-styles__toastWrapper {
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  background-color: #fff;
  position: relative;
}
@media (min-width: 768px) {
  .dapp-core-component__transactionsToastList-styles__toasts {
    right: 2rem;
    bottom: 2rem;
    width: 22.5rem;
    left: auto;
  }
}

@keyframes dapp-core-component__transactionsToastList-styles__loader {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(yM));LK={toasts:"dapp-core-component__transactionsToastList-styles__toasts",toastWrapper:"dapp-core-component__transactionsToastList-styles__toastWrapper",loader:"dapp-core-component__transactionsToastList-styles__loader"}});var xy={};oe(xy,{css:()=>bM,default:()=>DK});var bM,DK,yy=F(()=>{"use strict";r();bM=`.dapp-core-component__customToast-styles__close {
  position: absolute;
  top: 0.75rem;
  right: 0.4rem;
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bM));DK={close:"dapp-core-component__customToast-styles__close"}});var jK={};oe(jK,{AddressDetailItem:()=>gl,Balance:()=>jp,BalanceComponent:()=>Yk,CrossWindowLoginButton:()=>HK,CustomToast:()=>Sy,DappCorePages:()=>R_,DataField:()=>n0,Denominate:()=>R$,DetailItem:()=>be,EventsList:()=>xl,ExplorerLink:()=>We,ExtensionLoginButton:()=>vh,FormatAmount:()=>On,IframeButton:()=>Ah,LedgerLoginButton:()=>uT,LedgerLoginContainer:()=>lT,Loader:()=>UT,MetamaskLoginButton:()=>qK,NonceMessage:()=>Kx,NotificationModal:()=>z$,OperaWalletLoginButton:()=>fT,OperationsList:()=>Ox,PageState:()=>qn,Pagination:()=>Rh,PasskeyLoginButton:()=>gT,ProgressSteps:()=>X$,ScResultsList:()=>g0,ScamPhishingAlert:()=>gs,ScrDetailItem:()=>i0,SignTransactionsModals:()=>kq,SignWithDeviceModal:()=>bs,SignWithExtensionModal:()=>FT,SignWithLedgerModal:()=>xx,TimeAgo:()=>Rs,TransactionAction:()=>qx,TransactionActionComponent:()=>aW,TransactionInfo:()=>hK,TransactionInfoAge:()=>I0,TransactionInfoEgldPrice:()=>Z0,TransactionInfoFee:()=>E0,TransactionInfoFrom:()=>B0,TransactionInfoGasLimit:()=>ey,TransactionInfoGasPrice:()=>py,TransactionInfoGasUsed:()=>ty,TransactionInfoHash:()=>C0,TransactionInfoInputData:()=>_y,TransactionInfoMethod:()=>z0,TransactionInfoMiniblock:()=>P0,TransactionInfoNonce:()=>cy,TransactionInfoScResults:()=>my,TransactionInfoStatus:()=>b0,TransactionInfoTo:()=>G0,TransactionInfoTokenOperations:()=>q0,TransactionInfoValue:()=>$0,TransactionLogs:()=>gK,TransactionMethod:()=>ol,TransactionReceiver:()=>rl,TransactionRow:()=>El,TransactionSender:()=>il,TransactionShardsTransition:()=>sl,TransactionStatus:()=>v0,TransactionToast:()=>Vs,TransactionToastGuard:()=>Cy,TransactionValue:()=>Jp,TransactionsTable:()=>ZM,TransactionsToastList:()=>RK,TransactionsToastListComponent:()=>zM,Trim:()=>kn,UsdValue:()=>ex,WalletConnectLoginButton:()=>yT,WalletConnectLoginContainer:()=>xT,WebWalletLoginButton:()=>vT,XaliasCrossWindowLoginButton:()=>GK,XaliasLoginButton:()=>UK,getStatusIconAndColor:()=>zW});module.exports=j(jK);r();var R_={};oe(R_,{UnlockPage:()=>Xk});r();r();var Co=w(require("react")),xs=w(require("classnames"));r();var bS=w(require("react"));r();var Ic=w(require("react"));r();ya();var AS=()=>!Qo();var xU=()=>M(void 0,null,function*(){return yield Promise.resolve().then(()=>(ff(),uf))}),yU=()=>(ff(),j(uf)).default,gf=AS();function lp({ssrGlobalImportCallback:e,ssrImportCallback:n,clientImportCallback:o}){let[i,c]=Ic.default.useState(gf?void 0:yU()),[p,l]=Ic.default.useState(gf||o==null?void 0:o()),u=()=>M(this,null,function*(){(e?e():xU()).then(h=>c(h.default)),n==null||n().then(h=>l(h.default))});return(0,Ic.useEffect)(()=>{gf&&u()},[]),{globalStyles:i,styles:p}}function I(e,n){return o=>{let{globalStyles:i,styles:c}=lp({ssrGlobalImportCallback:n.ssrGlobalStyles,ssrImportCallback:n.ssrStyles,clientImportCallback:n.clientStyles});return bS.default.createElement(e,q(b({},o),{globalStyles:i!=null?i:{},styles:c!=null?c:{}}))}}r();r();r();var H1=require("react"),wp=require("react-redux");r();var ng=require("@reduxjs/toolkit"),U1=require("react-redux/lib/utils/Subscription");Ye();r();var v1=w(require("lodash.throttle"));Y();Ye();Gf();mi();Tp();var r7=[Km],yd=!1,a7=(0,v1.default)(()=>{Wc(Ec())},5e3),w1=e=>n=>o=>{if(r7.includes(o.type))return n(o);let i=e.getState(),c=vo.local.getItem(kt.loginExpiresAt);if(!Boolean(i==null?void 0:i.account.address))return n(o);if(c==null)return Wc(Ec());let l=Date.now();return c-l<0&&!yd?setTimeout(()=>{yd=!0,e.dispatch(kC())},1e3):(yd&&(yd=!1),a7()),n(o)};r();r();function vd(){return typeof sessionStorage!="undefined"}var O1=vd()?(L1(),j(b1)).default:(P1(),j(N1)).default,F1=vd()?(D1(),j(k1)).default:[],R1=vd()?(B1(),j(M1)).default:e=>e;wd();var me=(0,ng.configureStore)({reducer:O1,middleware:e=>e({serializableCheck:{ignoredActions:[...F1,Rf.type,di.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(w1)}),G1=(0,U1.createSubscription)(me),nQ=R1(me),oQ=(0,ng.configureStore)({reducer:_i});var L7={store:me,subscription:G1},og=(0,H1.createContext)(L7),iQ=(0,wp.createStoreHook)(og),Ge=(0,wp.createDispatchHook)(og),Q=(0,wp.createSelectorHook)(og);r();r();Ye();r();var V1=w(require("lodash.isequal")),Sd=require("reselect"),se=(0,Sd.createSelectorCreator)(Sd.defaultMemoize,V1.default);var Qt=e=>e.account,Mr=se(Qt,e=>e.address),Br=se(Qt,Mr,(e,n)=>n in e.accounts?e.accounts[n]:Ym),$1=se(Qt,Br,(e,n)=>{let c=e,{accounts:o}=c,i=_n(c,["accounts"]);return q(b({},i),{address:n.address,account:n})}),dQ=se(Br,e=>e.balance),z1=se(Br,e=>{var n;return((n=e==null?void 0:e.nonce)==null?void 0:n.valueOf())||0}),q1=se(Qt,e=>e.shard),j1=se(Qt,e=>e.ledgerAccount),_Q=se(Qt,e=>e.walletConnectAccount),lQ=se(Qt,e=>e.isAccountLoading),uQ=se(Qt,e=>e.accountLoadingError),N7=se(Qt,e=>e.websocketEvent),P7=se(Qt,e=>e.websocketBatchEvent);r();var Rc=e=>e.dappConfig,hQ=se(Rc,e=>e.shouldUseWebViewProvider);r();var Po=e=>e.loginInfo,K1=se(Po,e=>e.loginMethod),Ia=se(Po,Mr,(e,n)=>Boolean(n)),vQ=se(Po,e=>e.walletConnectLogin),X1=se(Po,e=>e.ledgerLogin),Z1=se(Po,e=>e.walletLogin),wQ=se(Po,e=>e.isLoginSessionInvalid),ba=se(Po,e=>e.tokenLogin),Cd=se(Po,e=>e.logoutRoute),k7=se(Po,e=>e.isWalletConnectV2Initialized);r();var Y1=e=>e.modals,AQ=se(Y1,e=>e.txSubmittedModal),J1=se(Y1,e=>e.notificationModal);r();var wt=e=>e.networkConfig,Uc=se(wt,e=>e.network.chainId),D7=se(wt,e=>e.network.roundDuration),LQ=se(wt,e=>e.network.walletConnectBridgeAddress),Q1=se(wt,e=>e.network.walletConnectV2RelayAddress),eA=se(wt,e=>e.network.walletConnectV2ProjectId),nA=se(wt,e=>e.network.walletConnectV2Options),oA=se(wt,e=>e.network.walletConnectDeepLink),yn=se(wt,e=>e.network),tg=se(yn,e=>e.apiAddress),tA=se(yn,e=>e.explorerAddress),Ad=se(yn,e=>{var n;return(n=e.customWalletAddress)!=null?n:e.walletAddress}),Sp=se(yn,e=>e.xAliasAddress),Id=se(yn,e=>e.egldLabel);r();var bd=e=>e.signedMessageInfo,kQ=se(bd,e=>e.isSigning),DQ=se(bd,e=>e.errorMessage),EQ=se(bd,e=>{let n=Object.keys(e.signedSessions),o=n.length;return e.signedSessions[n[o-1]]}),WQ=se(bd,e=>{let n=Object.keys(e.signedSessions),o=n.length;return n.length>0?n[o-1]:""});r();var rA=e=>e.toasts,rg=se(rA,e=>e.customToasts),Gc=se(rA,e=>e.transactionToasts);r();Ye();var aA={errorMessage:Kf,successMessage:Xf,processingMessage:Zf},iA=e=>e.transactionsInfo,pA=se(iA,(e,n)=>n,(e,n)=>n!=null&&(e==null?void 0:e[Number(n)])||aA);r();r();var er=require("@multiversx/sdk-core");Y();r();var ag=require("@multiversx/sdk-core/out");r();r();function Hc(e){try{let n=atob(e),o=btoa(n),i=m.Buffer.from(e,"base64").toString(),c=m.Buffer.from(i).toString("base64"),p=e===o||o.startsWith(e),l=e===c||c.startsWith(e);if(p&&l)return!0}catch(n){return!1}return!1}function La(e){return Hc(e)?atob(e):e}r();r();function Ld(e){for(let n=0;n<e.length;n++)if(e.charCodeAt(n)>127)return!1;return!0}function Or(e){let n=e;try{let o=m.Buffer.from(e,"hex").toString();Ld(o)&&o.length>1&&(n=o)}catch(o){}return n}r();r();var cA=e=>{let n=e!=null?e:"";return Hc(n)?ag.TransactionPayload.fromEncoded(n):new ag.TransactionPayload(n)};r();Y();var li=({data:e,onlySetGuardian:n})=>e?n?e.startsWith("SetGuardian"):Object.values(Tf).some(o=>e.startsWith(o)):!1;function ui(e){var i,c,p;let n=b({},e);li({data:n.data,onlySetGuardian:!0})&&(delete n.senderUsername,delete n.receiverUsername);let o=new er.Transaction(b(b(q(b(q(b({value:n.value.valueOf(),data:cA(n.data),nonce:n.nonce.valueOf(),receiver:new er.Address(n.receiver)},n.receiverUsername?{receiverUsername:n.receiverUsername}:{}),{sender:new er.Address(n.sender)}),n.senderUsername?{senderUsername:n.senderUsername}:{}),{gasLimit:(i=n.gasLimit.valueOf())!=null?i:Pc,gasPrice:(c=n.gasPrice.valueOf())!=null?c:kc,chainID:n.chainID.valueOf(),version:new er.TransactionVersion((p=n.version)!=null?p:tC)}),n.options?{options:new er.TransactionOptions(n.options)}:{}),n.guardian?{guardian:new er.Address(n.guardian)}:{}));return n.guardianSignature&&o.applyGuardianSignature(m.Buffer.from(n.guardianSignature,"hex")),n.signature&&o.applySignature(m.Buffer.from(n.signature,"hex")),o}r();r();Y();function E7(e,n){let o=new URLSearchParams(e),i=Object.fromEntries(o);return{nextUrlParams:new URLSearchParams(b(b({},i),n)).toString(),params:i}}var W7="3.1.0";function Nd({callbackUrl:e,urlParams:n={}}){let o=e;if(Object.entries(n).length>0)try{let{search:i,origin:c,pathname:p,hash:l}=new URL(e),u=q(b({},n),{[jm]:W7}),{nextUrlParams:h}=E7(i,u);o=`${c}${p}?${h}${l}`}catch(i){return console.error("Unable to construct URL from: ",e,i),o}return o}r();r();r();var pg=require("@multiversx/sdk-core/out");r();Y();var M7=e=>{let n=m.Buffer.from([0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);if(e.slice(0,n.length).equals(n))return!0;let i=m.Buffer.alloc(32).fill(0);return e.equals(i)},ig=e=>{try{let o=parseInt("11",2),i=parseInt("01",2),c=m.Buffer.from(e,"hex"),p=c[31];if(M7(c))return qm;let l=p&o;return l>3-1&&(l=p&i),l}catch(n){return-1}};function sA({receiverAddress:e,senderShard:n,senderAddress:o}){try{let i=new pg.Address(e),c=ig(i.pubkey());if(n==null&&o!=null){let p=new pg.Address(o);return ig(p)===c}return c===n}catch(i){return!1}}r();var Vc=require("@multiversx/sdk-core");Ve();r();var mA=require("@multiversx/sdk-core");function B7(e){try{let n=new mA.Address(e);return Boolean(n.bech32())}catch(n){return!1}}function Pn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&B7(e)}var O7=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Fr(e,n,o=""){if(!Pn(e))return!1;if(new Vc.Address(e).isContractAddress())return!0;let p=cg({receiver:e,data:o});return p?new Vc.Address(p).isContractAddress()||U7(e,n,o):!1}var F7=e=>e.toLowerCase().match(/[0-9a-f]/g),R7=e=>e.length%2===0;function U7(e,n,o){let i=o==null?void 0:o.split("@");if(i==null)return!1;let[c,...p]=i,l=n!=null&&e!=null&&e===n,u=O7.includes(c),h=p.every(g=>F7(g)&&R7(g));return l&&u&&h}function cg({receiver:e,data:n}){try{if(!n)return e;let o=Hc(n)?Vc.TransactionPayload.fromEncoded(n).toString():n,i=G7(o),c=o.split("@");return i>-1?c[i]:e}catch(o){console.log(o);return}}function G7(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}var dA=(e,n=1)=>e!=null&&e.length?e.reduce((o,{receiver:i,data:c})=>{let p=cg({receiver:i,data:c!=null?c:""});return p==null?o:o&&sA({receiverAddress:p,senderShard:n})},!0):!0;r();r();r();var mg=require("@multiversx/sdk-core"),Pd=w(require("bignumber.js"));en();var sg={tokenId:"",amount:""},_A=e=>e.split("@").map((p,l)=>[2,3].includes(l)?p:Or(p));function kd(e){if(!e)return sg;let n=e.startsWith("ESDTTransfer"),o=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),i=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(n){let[,c,p]=e.split("@");try{let l=m.Buffer.from(c,"hex").toString("ascii");if(!l)return sg;let u=new Pd.default("0x"+p.replace("0x","")).toString(10);return{tokenId:l,amount:u}}catch(l){console.error("Error getting token from transaction data",l)}}if(o)try{let[,c,p,l,u]=_A(e);if([c,p,l,u].every(h=>Boolean(h))&&Pn(new mg.Address(u).bech32()))return{tokenId:`${c}-${p}`,amount:new Pd.default(l,16).toString(10),collection:c,nonce:p,receiver:new mg.Address(u).bech32()}}catch(c){}if(i)try{let[,c,p,l]=_A(e);if([c,p,l].every(u=>Boolean(u)))return{tokenId:`${c}-${p}`,amount:new Pd.default(l,16).toString(10),collection:c,nonce:p}}catch(c){}return sg}r();r();r();var wo="accounts";var Dd="blocks",uA="code",fA="collections";var gA="contracts",$c="economics",hA="identities";var TA="locked-accounts",xA="logs",Ed="miniblocks";var zc="nfts",yA="nodes",dg="providers",vA="roles",_g="sc-results";var Na="tokens";var ot="transactions";var pn={shard:e=>`/${Dd}?shard=${e}`,receiverShard:e=>`/${ot}?receivershard=${e}`,senderShard:e=>`/${ot}?sendershard=${e}`,transactionDetails:e=>`/${ot}/${e}`,transactionDetailsScResults:e=>`/${ot}/${e}/${_g}`,transactionDetailsLogs:e=>`/${ot}/${e}/${xA}`,nodeDetails:e=>`/${yA}/${e}`,accountDetails:e=>`/${wo}/${e}`,accountDetailsContractCode:e=>`/${wo}/${e}/${uA}`,accountDetailsTokens:e=>`/${wo}/${e}/${Na}`,accountDetailsNfts:e=>`/${wo}/${e}/${zc}`,accountDetailsScResults:e=>`/${wo}/${e}/${_g}`,accountDetailsContracts:e=>`/${wo}/${e}/${gA}`,identityDetails:e=>`/${hA}/${e}`,tokenDetails:e=>`/${Na}/${e}`,tokenDetailsAccounts:e=>`/${Na}/${e}/${wo}`,tokenDetailsLockedAccounts:e=>`/${Na}/${e}/${TA}`,tokenDetailsRoles:e=>`/${Na}/${e}/${vA}`,collectionDetails:e=>`/${fA}/${e}`,nftDetails:e=>`/${zc}/${e}`,providerDetails:e=>`/${dg}/${e}`,providerDetailsTransactions:e=>`/${dg}/${e}/${ot}`,miniblockDetails:e=>`/${Ed}/${e}`};r();var Wd=e=>{var n,o,i,c;if(e.action){let p=[(n=e.action.arguments)==null?void 0:n.token,(o=e.action.arguments)==null?void 0:o.token1,(i=e.action.arguments)==null?void 0:i.token2,(c=e.action.arguments)==null?void 0:c.transfers].filter(u=>u!=null);return[].concat(...p)}return[]};r();r();function Md(e){var o,i;let n=e.receiver;return(i=(o=e.action)==null?void 0:o.arguments)!=null&&i.receiver&&(n=e.action.arguments.receiver),n}function wA(e){let n=Md(e);return e.receiver===n?e.receiverAssets:void 0}r();ln();var Cp=e=>{var i,c,p,l,u,h;let n="Transaction";return((i=e.action)==null?void 0:i.name)&&((c=e.action)==null?void 0:c.category)&&(((p=e.action)==null?void 0:p.category)==="esdtNft"&&((l=e.action)==null?void 0:l.name)==="transfer"?n="Transaction":e.action&&(n=e.action.name),(h=(u=e.action)==null?void 0:u.arguments)!=null&&h.functionName&&(n=e.action.arguments.functionName)),n};r();var CA=!1;function H7(e){CA||(console.error(e),CA=!0)}function nr({explorerAddress:e,to:n}){try{return new URL(n).href}catch(o){return n.startsWith("/")||(H7(`Link not prepended by / : ${n}`),n=`/${n}`),e?`${e}${n}`:n}}r();ln();function AA(e,n,o){let i=e===n.sender,c=e===o,p=i&&c,l=(n==null?void 0:n.type)==="SmartContractResult";switch(!0){case l:return"Internal";case p:return"Self";case c:return"In";case i:default:return"Out"}}r();function Od({value:e,noSeconds:n,utc:o,meridiem:i=!0}){let c=new Date(e*1e3),[,p]=c.toLocaleString("en-US",{hour:"numeric",hour12:i}).split(" "),l=c.toUTCString(),[,u]=l.split(","),[h,g,T,y]=u.trim().split(" "),[C,N,A]=y.split(":"),P=`:${A}`,W=`${C}:${N}${n?"":P}`,K=`${i?p:""} ${o?"UTC":""}`.trim();return`${g} ${h}, ${T} ${W} ${K}`.trim()}r();function IA(e){var n,o;return(o=(n=e==null?void 0:e.operations)==null?void 0:n.map(i=>i.message).filter(i=>Boolean(i)))!=null?o:[]}r();var NA=w(require("bignumber.js"));Y();r();var LA=require("@multiversx/sdk-core"),Pa=w(require("bignumber.js"));Y();r();var bA=w(require("bignumber.js")),tt=(e,n=!0)=>{let o=String(e);if(!o.match(/^[-]?\d+$/))return!1;let i=new bA.default(o),c=n?0:-1;return i.toString(10)===o&&i.comparedTo(0)>=c};r();function Rr(e){return{if:function(n){return n?{then:o=>o instanceof Function?Rr(o(e)):Rr(o)}:{then:()=>Rr(e)}},then:n=>n instanceof Function?Rr(n(e)):Rr(n),valueOf:function(){return e}}}Pa.default.config({ROUNDING_MODE:Pa.default.ROUND_FLOOR});function vn({input:e,decimals:n=Mn,digits:o=Xt,showLastNonZeroDecimal:i=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!tt(e,!1))throw new Error("Invalid input");let l=new Pa.default(e).isNegative(),u=e;return l&&(u=e.substring(1)),Rr(u).then(()=>LA.TokenTransfer.fungibleFromBigInteger("",u,n).amountAsBigInteger.shiftedBy(-n).toFixed(n)).then(h=>{let g=new Pa.default(h);if(g.isZero())return yo;let T=g.toString(10),[y,C]=T.split("."),N=new Pa.default(C||0),A=Rr(0).if(Boolean(C&&i)).then(()=>Math.max(C.length,o)).if(N.isZero()&&!i).then(0).if(Boolean(C&&!i)).then(()=>Math.min(C.length,o)).valueOf(),P=C&&o>=1&&o<=C.length&&N.isGreaterThan(0)&&new Pa.default(C.substring(0,o)).isZero(),W=g.toFormat(A);return Rr(T).if(p).then(W).if(Boolean(P)).then(z=>{let K=new Pa.default(y).isZero(),[R,G]=z.split("."),Z=new Array(o-1).fill(0),ie=[...Z,0].join(""),ee=[...Z,1].join("");return K?c?`<${R}.${ee}`:i?`${R}.${G}`:R:`${R}.${ie}`}).if(Boolean(!P&&C)).then(z=>{let[K]=z.split("."),R=C.substring(0,A);if(i){let G=o-R.length;if(G>0){let Z=Array(G).fill(0).join("");return R=`${R}${Z}`,`${K}.${R}`}return z}return R?`${K}.${R}`:K}).valueOf()}).if(l).then(h=>`-${h}`).valueOf()}var V7=e=>{var n,o;if(!((n=e.receipt)!=null&&n.value))return"";if(((o=e.receipt)==null?void 0:o.data)===sC){let i=vn({input:e.receipt.value,decimals:Mn,digits:Xt,showLastNonZeroDecimal:!0});return new NA.default(i).times(e.gasPrice).times(100).toFixed()}return e.receipt.value};function PA(e){var c;let n=(c=e.receipt)==null?void 0:c.data;if(!n)return"";let o=V7(e),i=o?`: ${o}`:"";return`${n}${i}`}r();function lg(e){var n,o;return(o=(n=e==null?void 0:e.results)==null?void 0:n.map(i=>i.returnMessage).filter(i=>Boolean(i)))!=null?o:[]}r();r();Y();r();var or=(i=>(i.NonFungibleESDT="NonFungibleESDT",i.SemiFungibleESDT="SemiFungibleESDT",i.MetaESDT="MetaESDT",i))(or||{});r();r();r();Y();r();Y();r();var $7=require("@multiversx/sdk-core");Y();r();var Dt=require("@multiversx/sdk-core"),EA=w(require("bignumber.js"));Y();r();r();var ug=w(require("bignumber.js"));Y();var kA=e=>{if(isNaN(e)||e==null||String(e).includes("Infinity"))return!1;let[n,o]=e.split("."),i=ug.default.clone();if(o){let u=o.split("").every(h=>!isNaN(parseInt(h)));for(i.set({DECIMAL_PLACES:u?o.length:ug.default.config().DECIMAL_PLACES});o.charAt(o.length-1)===yo;)o=o.slice(0,-1)}let c=o?[n,o].join("."):n,p=i(c);return p.toString(10)===c&&p.comparedTo(0)>=0};r();Y();r();var fg={isEsdt:!1,isNft:!1,isEgld:!1};function Fd(e){let n=e==null?void 0:e.split("-").length;return n===2?q(b({},fg),{isEsdt:!0}):n===3?q(b({},fg),{isNft:!0}):q(b({},fg),{isEgld:!0})}var DA={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function gg({minGasLimit:e=String(Pc),gasLimit:n,gasPrice:o,data:i,gasPerDataByte:c,gasPriceModifier:p,defaultGasPrice:l=String(kc),chainId:u}){let h=i||"",g=tt(n)?n:e,T=li({data:h})?Df:0,y=new EA.default(g).plus(T).toNumber(),C=kA(o)?o:l,N=new Dt.Transaction({nonce:0,value:Dt.TokenPayment.egldFromAmount("0"),receiver:new Dt.Address(DA.to),sender:new Dt.Address(DA.to),gasPrice:parseInt(C),gasLimit:y,data:new Dt.TransactionPayload(h.trim()),chainID:u,version:new Dt.TransactionVersion(1)});try{return N.computeFee({GasPerDataByte:parseInt(c),MinGasLimit:parseInt(e),GasPriceModifier:parseFloat(p),ChainID:u}).toString(10)}catch(A){return console.error(A),yo}}r();var tr=({amount:e,usd:n,decimals:o=2,addEqualSign:i})=>{let c=(parseFloat(e)*n).toFixed(o),p=parseFloat(c).toLocaleString("en",{maximumFractionDigits:o,minimumFractionDigits:o}),l=parseFloat(e)>0?"\u2248":"=";return`${i?`${l} `:""}$${p}`};r();function z7(e){let n=Math.floor(e/864e5),o=e%(24*60*60*1e3),i=Math.floor(o/(60*60*1e3)),c=o%(60*60*1e3),p=Math.floor(c/(60*1e3)),l=c%(60*1e3),u=Math.floor(l/1e3),h=u+" sec",g=p+" min",T=i+" hr",y=n+" day";if(u>1&&(h=u+" sec"),p>1&&(g=p+" min"),i>1&&(T=i+" hrs"),n>1&&(y=n+" days"),n>=1)return y+" "+T;if(i>=1){let C=p===0?"":" "+g;return T+C}if(p>=1){let C=u===0?"":" "+h;return g+C}return h}function q7(e){let n=e.split(" ");return n.length>1?`${n[0]} ${n[1]}`:e}function j7(e){let o=new Date().getTime()-e;return Math.max(o,0)}function WA(e,n=!0){let o=j7(e),i=z7(o);return n?q7(i):i}r();function MA(e,n,o="..."){return isNaN(n)&&(n=10),o||(o="..."),e!=null&&(e.length<=n||e.length-o.length<=n)?e:String(e).substring(0,n-o.length)+o}r();r();Y();function K7(e,n){let o,i,c=/(\.0+)+$/,p=e.replace(c,"").split("."),l=n.replace(c,"").split("."),u=Math.min(p.length,l.length);for(o=0;o<u;o++)if(i=parseInt(p[o],10)-parseInt(l[o],10),i)return i;return p.length-l.length}function hg(e){let n=[xf,yf,vf,wf,Lc,Sf,e].sort((g,T)=>K7(g,T)),o=n.indexOf(xf),i=n.indexOf(yf),c=n.indexOf(vf),p=n.indexOf(wf),l=n.indexOf(Lc),u=n.indexOf(Sf),h=n.indexOf(e);return{ledgerWithMultiAccount:h>=o,ledgerWithHashSign:h>=i,ledgerWithSignAuthToken:h>=c,ledgerWithWhitelistedTokens:h>=p,ledgerWithGuardians:h>=l,ledgerWithUsernames:h>=u}}var BA=hg;r();Y();var OA=({feeLimit:e,egldPriceInUsd:n,hideEqualSign:o})=>{let i=vn({input:e,decimals:Mn,digits:Xt,showLastNonZeroDecimal:!0}),c=tr({amount:i,usd:n,decimals:Xt});return o?c:`\u2248 ${c}`};function rr({token:e,noValue:n,showLastNonZeroDecimal:o}){var g;let i=!n&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let l="";i&&c&&(l=c?vn({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:o}):Number(e.value).toLocaleString("en"));let u=pn.nftDetails(String(e.identifier)),h=e.ticker===e.collection&&(g=e.identifier)!=null?g:e.ticker;return{badgeText:p,tokenFormattedAmount:i?l:null,tokenExplorerLink:u,tokenLinkText:h,token:e,noValue:n,showLastNonZeroDecimal:o}}r();Y();function ka({token:e,noValue:n,showLastNonZeroDecimal:o}){var u;let i=Boolean(!n&&e.value),c=i?vn({input:e.value,decimals:(u=e.decimals)!=null?u:Mn,digits:2,showLastNonZeroDecimal:o,addCommas:!0}):null,p=pn.tokenDetails(String(e.token)),l=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:i,tokenLinkText:l,token:e,showLastNonZeroDecimal:o}}r();ln();var FA=["reDelegateRewards","claimRewards","unBond"],RA=["wrapEgld","unwrapEgld"],UA=["unStake"],GA=["unDelegate"];r();r();var HA=e=>{let n=e.map(i=>{let{isNft:c}=Fd(i.type);if(c){let{badgeText:T,tokenFormattedAmount:y,tokenLinkText:C}=rr({token:i});return`${T!=null?`(${T}) `:""}${y} ${C}`}let{tokenFormattedAmount:p,tokenLinkText:l,token:u}=ka({token:i}),h=u.collection?u.identifier:u.token;return`${p} ${l} (${h})`});return decodeURI(n.join("%0A"))};r();Y();var St=e=>({egldValueData:{value:e,formattedValue:vn({input:e}),decimals:Mn}});r();var $A=w(require("bignumber.js"));var VA=!1;function zA(e){var n;try{let i=La(e.data).replace(`${(n=e.action)==null?void 0:n.name}@`,""),c=new $A.default(i,16);if(!c.isNaN())return St(c.toString(10))}catch(o){VA||(console.error(`Unable to extract value for txHash: ${e.txHash}`),VA=!0)}return St(e.value)}r();r();ln();var qc=e=>{var o,i;return(i=(o=e==null?void 0:e.operations)==null?void 0:o.filter(c=>Object.values(Nc).includes(c.type)))!=null?i:[]};var qA=!1,jA=e=>{qA||(console.error(`Operations field missing for txHash: ${e}.
        Unable to compute value field.`),qA=!0)};function KA(e){try{if(e.operations){let[n]=qc(e);return St(n==null?void 0:n.value)}else jA(e.txHash)}catch(n){jA(e.txHash)}return St(e.value)}r();var ZA=w(require("bignumber.js"));var XA=!1;function YA(e){var o,i,c,p,l;return new ZA.default((i=(o=e.action)==null?void 0:o.arguments)==null?void 0:i.value).isNaN()?(XA||(console.error(`Unable to interpret ${(l=e.action)==null?void 0:l.name} data for txHash: ${e.txHash}`),XA=!0),St(e.value)):St((p=(c=e.action)==null?void 0:c.arguments)==null?void 0:p.value)}var JA=({transaction:e,hideMultipleBadge:n})=>{var o;if(e.action){if(RA.includes(e.action.name))return St(e.value);if(UA.includes(e.action.name))return zA(e);if(FA.includes(e.action.name))return KA(e);if(GA.includes(e.action.name))return YA(e);let i=Wd(e);if(i.length){let c=i[0],p=Object.values(or).includes(c.type),u=!n&&i.length>1?HA(i):"";if(p){let{badgeText:N,tokenFormattedAmount:A,tokenExplorerLink:P,tokenLinkText:W}=rr({token:c});return{nftValueData:{badgeText:N,tokenFormattedAmount:A,tokenExplorerLink:P,tokenLinkText:W,transactionTokens:i,token:c,value:A!=null?c.value:null,decimals:A!=null?c.decimals:null,titleText:u}}}let{tokenExplorerLink:h,showFormattedAmount:g,tokenFormattedAmount:T,tokenLinkText:y,token:C}=ka({token:c});return{tokenValueData:{tokenExplorerLink:h,showFormattedAmount:g,tokenFormattedAmount:T,tokenLinkText:y,transactionTokens:i,token:C,value:c.value,decimals:(o=c.decimals)!=null?o:Mn,titleText:u}}}}return St(e.value)};function Rd({transaction:e,address:n,explorerAddress:o}){var P;let i=(P=e.tokenIdentifier)!=null?P:kd(e.data).tokenId,c=Md(e),p=wA(e),l=AA(n,e,c),u=Cp(e),h=Wd(e),g=nr({explorerAddress:o,to:pn.accountDetails(e.sender)}),T=nr({explorerAddress:o,to:pn.accountDetails(c)}),y=nr({explorerAddress:o,to:pn.senderShard(e.senderShard)}),C=nr({explorerAddress:o,to:pn.receiverShard(e.receiverShard)}),N=e.originalTxHash?`${e.originalTxHash}#${e.txHash}`:e.txHash,A=nr({explorerAddress:o,to:pn.transactionDetails(N)});return q(b({},e),{tokenIdentifier:i,receiver:c,receiverAssets:p,transactionDetails:{direction:l,method:u,transactionTokens:h,isContract:Fr(e.sender)},links:{senderLink:g,receiverLink:T,senderShardLink:y,receiverShardLink:C,transactionLink:A}})}r();r();var QA=({data:e,highlight:n,occurrences:o,transactionIndex:i})=>{let c=o[i]||e.indexOf(n),p=n.length,l=e.slice(0,c),u=e.slice(c+p);return{start:l,end:u}};r();function eI({tokenId:e,erdLabel:n}){return Boolean(e&&e!==n)}r();var Tg=w(require("bignumber.js"));Ve();r();var nI=(e,n)=>{let o=[],i=e.indexOf(n,0);for(;i>=0;)o.push(i),i=e.indexOf(n,i+1);return o};function oI(e){let n=[],o=0;try{if((e==null?void 0:e.startsWith("MultiESDTNFTTransfer"))&&(e==null?void 0:e.includes("@"))){let[,i,c,...p]=e==null?void 0:e.split("@");if(i){let l=new Tg.default(c,16).toNumber();if(l>=Number.MAX_SAFE_INTEGER)return[];let u=0;for(let y=0;y<l;y++){let C={type:"nftTransaction",data:"",receiver:i};for(let N=0;N<3;N++){switch(N){case 0:C.token=Or(p[u]),C.data=p[u];break;case 1:{let A=p[u]&&p[u].length?p[u]:"";A&&A!=="00"?C.nonce=A:C.type="esdtTransaction",C.data=`${C.data}@${p[u]}`;break}case 2:C.amount=new Tg.default(p[u],16).toString(10),C.data=`${C.data}@${p[u]}`;break;default:break}o=u+1,u++}n[y]=C}let h=n.length!==l,g=n.some(y=>nI(y.data,"@").length!==2),T=n.some(y=>y.data.startsWith("@"));if(h||g||T)return[];if(p[o]){let y=p[o];for(let C=o+1;C<p.length;C++)y+="@"+p[C];n[l]={type:"scCall",data:y,receiver:i}}}}}catch(i){return console.error("failed parsing tx",i),n}return n}r();r();r();en();function Da(e){let o=Object.getPrototypeOf(e).toPlainObject!=null?e:ui(e),i=q(b({},o.toPlainObject()),{hash:o.getHash().hex(),senderUsername:o.getSenderUsername().valueOf(),receiverUsername:o.getReceiverUsername().valueOf(),status:"pending"});return li({data:i.data,onlySetGuardian:!0})&&(delete i.senderUsername,delete i.receiverUsername),i}r();var aI=require("@multiversx/sdk-web-wallet-provider");Y();r();var rI=w(require("qs"));r();$n();var Ud=e=>{let n=new URLSearchParams(e).toString(),{pathname:o,hash:i}=ye(),c=n?`?${n}`:"",p=o?`${o}${c}${i}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};ya();r();ya();var X7={search:Qo()?window.location.search:"",removeParams:[]},tI=(e,n=X7)=>{var l;let o={},i=Qo()?window.location.search:"",c=(l=n.search)!=null?l:i;if(c){let u=c?new URLSearchParams(c):[];o=Object.fromEntries(u)}let p={};return e.forEach(u=>{p[u]=o[u],delete o[u]}),n.removeParams!=null&&Object.keys(o).forEach(u=>{var g,T;let[h]=u.split("[");(((g=n.removeParams)==null?void 0:g.includes(u))||((T=n.removeParams)==null?void 0:T.includes(h)))&&delete o[u]}),{remainingParams:p,params:o,clearNavigationHistory:()=>Ud(o)}};var Gd=({removeParams:e,search:n})=>{let o=Qo()?window.location.search:"",i=n!=null?n:o;if(!i)return{};let c=rI.default.parse(i.replace("?","")),p=Object.keys(c).filter(u=>!e.includes(u)),{remainingParams:l}=tI(p,{search:n,removeParams:e});return Ud(l),l};var iI=({transaction:e,search:n})=>Gd({removeParams:[...Object.keys(e),aI.WALLET_PROVIDER_CALLBACK_PARAM,Zt,jm],search:n});r();r();var pI=e=>m.Buffer.from(String(e==null?void 0:e.data),"base64").toString("hex");r();Nn();var cI=(e,n)=>{var u;let{hash:o}=ye(),i=o.split("/"),c=i[0]?i[0].replace("#",""):"",p=(u=i[1])!=null?u:0;return c===n&&e.order===Number(p)};r();ln();var sI=({operation:e,address:n})=>{let o=n===e.sender,i=n===e.receiver,c=o&&i,p=!c,l="";switch(!0){case o:l="Out";break;case i:l="In";break;case c:l="Self";break;case p:l="Internal";break}return{direction:l}};r();var mI=e=>{let n=m.Buffer.from(e,"base64").toString().split("@");return n.length>=2&&(n[0].length>0?n[0]=Or(n[0]):n[1]=Or(n[1])),n.join("@")};r();Nn();var dI=e=>{let{hash:n}=ye();return n.substring(0,n.indexOf("/")>0?n.indexOf("/"):n.length).replace("#","")===e};r();var _I=w(require("linkifyjs")),Z7=e=>{let n=_I.find(e);if(!n.length)return{textWithLinks:e,hasLinks:!1};let o=e;for(let i of n){let c=e.substring(i.start,i.end);o=o.replace(c,i.value)}return{textWithLinks:o,hasLinks:!0}},lI=({message:e,scamInfo:n,isNsfw:o,verified:i,messagePrefix:c="Message hidden due to suspicious content - "})=>{var h;if(i)return{message:"",textWithLinks:"",isSuspicious:!1};let p=`${c}${(h=n==null?void 0:n.info)!=null?h:"suspicious content"}`,{textWithLinks:l,hasLinks:u}=Z7(e);return u||o||n?{message:p,textWithLinks:l,isSuspicious:!0}:{message:"",textWithLinks:l,isSuspicious:!1}};r();Y();var uI=e=>{let n=e;typeof n=="string"&&n.includes("Shard")&&(n=n.replace("Shard","").replace(" ",""));let o=qm.toString()===String(n).toString()||String(n)==="metachain",i=aC.toString()===String(n).toString();return o?"Metachain":i?"All Shards":`Shard ${n}`};r();var xg=w(require("bignumber.js")),Y7=e=>{let n=new xg.default(e.gasPrice),o=new xg.default(e.gasUsed);return n.times(o).toString()};function fI(e){return e.fee?e.fee:e.gasUsed===void 0?null:Y7(e)}r();Ve();r();function Hd(e){return Array.from(new Set([...lg(e),...IA(e),PA(e)])).filter(o=>Boolean(o))}r();en();function Ip(e){let n=l=>e.status.toLowerCase()===l.toLowerCase(),o=n("fail")||n("reward-reverted"),i=n("success"),c=n("not executed")||n("invalid"),p=n("pending")||e.pendingResults;return{failed:o,success:i,invalid:c,pending:p}}r();en();var gI=e=>{switch(!0){case e.pendingResults:return"Pending (Smart Contract Execution)";case e.status==="reward-reverted":return"fail";default:return e.status.toString()}};r();r();r();ln();r();ln();var hI=e=>{var n,o;switch(e.name){case"transfer":return["Transfer",{token:(n=e.arguments)==null?void 0:n.transfers},"to",{address:(o=e.arguments)==null?void 0:o.receiver}];default:return[]}};r();var TI=w(require("bignumber.js"));Y();ln();var xI=e=>{var n,o,i,c,p,l,u,h,g,T,y,C;switch(e.name){case"claimLockedAssets":return["Claim locked assets"];case"enterFarm":case"enterFarmProxy":return["Enter farm with",{token:(n=e.arguments)==null?void 0:n.transfers}];case"enterFarmAndLockRewards":case"enterFarmAndLockRewardsProxy":return["Enter farm and lock rewards with",{token:(o=e.arguments)==null?void 0:o.transfers}];case"exitFarm":case"exitFarmProxy":return["Exit farm with",{token:(i=e.arguments)==null?void 0:i.transfers}];case"claimRewards":case"claimRewardsProxy":return["Claim rewards",{token:(c=e.arguments)==null?void 0:c.transfers}];case"compoundRewards":case"compoundRewardsProxy":return["Reinvest rewards",{token:(p=e.arguments)==null?void 0:p.transfers}];case"swapTokensFixedInput":case"swap":return e.description?[e.description]:[];case"swapTokensFixedOutput":return e.description?[e.description]:[];case"addLiquidity":case"addLiquidityProxy":return["Added liquidity for",{token:[(l=e.arguments)==null?void 0:l.transfers[0]]},"and",{token:[(u=e.arguments)==null?void 0:u.transfers[1]]}];case"removeLiquidity":case"removeLiquidityProxy":return["Removed liquidity with ",{token:(h=e.arguments)==null?void 0:h.transfers}];case"mergeLockedAssetTokens":let N=yo;if((g=e.arguments)!=null&&g.transfers){let A=e.arguments.transfers.map(({value:P})=>P);N=TI.default.sum.apply(null,A).toString(10)}return[`Merge ${(T=e.arguments)==null?void 0:T.transfers.length}`,{tokenNoLink:[(y=e.arguments)==null?void 0:y.transfers[0]]},"positions into a single",{tokenNoLink:[(C=e.arguments)==null?void 0:C.transfers[0]]},"position of value",{value:N}];case"wrapEgld":case"unwrapEgld":default:return e.description?[e.description]:[]}};r();ln();var yI=e=>{var n,o,i,c,p,l,u,h,g,T,y,C;switch(e.name){case"delegate":case"stake":return["Delegate",{egldValue:(n=e.arguments)==null?void 0:n.value},"to staking provider",{providerName:(o=e.arguments)==null?void 0:o.providerName,providerAvatar:(i=e.arguments)==null?void 0:i.providerAvatar}];case"unDelegate":return["Undelegate",{egldValue:(c=e.arguments)==null?void 0:c.value},"from staking provider",{providerName:(p=e.arguments)==null?void 0:p.providerName,providerAvatar:(l=e.arguments)==null?void 0:l.providerAvatar}];case"claimRewards":return["Claim rewards from staking provider",{providerName:(u=e.arguments)==null?void 0:u.providerName,providerAvatar:(h=e.arguments)==null?void 0:h.providerAvatar}];case"reDelegateRewards":return["Redelegate rewards from staking provider",{providerName:(g=e.arguments)==null?void 0:g.providerName,providerAvatar:(T=e.arguments)==null?void 0:T.providerAvatar}];case"withdraw":return["Withdraw from staking provider",{providerName:(y=e.arguments)==null?void 0:y.providerName,providerAvatar:(C=e.arguments)==null?void 0:C.providerAvatar}];default:return[]}};var vI=e=>{if(!e.arguments)return e.description?[e.description]:[e.name];switch(e.category){case"esdtNft":return hI(e);case"mex":return xI(e);case"stake":return yI(e);default:return e.description?[e.description]:[]}};r();var zd=require("react");Ve();r();r();ln();r();r();var wI=require("@multiversx/sdk-core/out"),yg=w(require("bignumber.js"));ln();var Ur=(e,n,o)=>{switch(n){case"text":try{return m.Buffer.from(e,"hex").toString("utf8")}catch(i){}return e;case"decimal":return e!==""?new yg.default(e,16).toString(10):"";case"smart":try{let i=wI.Address.fromHex(e).toString();if(Pn(i))return i}catch(i){}try{let i=m.Buffer.from(e,"hex").toString("utf8");if(Ld(i))return i;{if(o&&[...o.esdts,...o.nfts].some(l=>i.includes(l)))return i;let c=new yg.default(e,16);return c.isFinite()?c.toString(10):e}}catch(i){}return e;case"raw":default:return e}};r();Ve();r();var J7=e=>e.toLowerCase().match(/^[0-9a-f]+$/i),Q7=e=>e.length%2===0,SI=e=>{let n=[];return e&&!J7(e)&&n.push(`Invalid Hex characters on argument @${e}`),e&&!Q7(e)&&n.push(`Odd number of Hex characters on argument @${e}`),n};r();Ve();var Vd=({parts:e,decodedParts:n,identifier:o})=>{let i=[...n];if(e[0]==="ESDTNFTTransfer"&&e[2]&&(i[2]=Ur(e[2],"decimal")),o==="ESDTNFTTransfer"&&e[1]){let c=m.Buffer.from(String(e[1]),"base64");i[1]=Ur(c.toString("hex"),"decimal")}return i};var CI=({parts:e,decodeMethod:n,identifier:o,display:i})=>{let c=e.map((l,u)=>{if(e.length>=2&&(u===0&&l.length<64||u===1&&!e[0]))return/[^a-z0-9]/gi.test(l)?Ur(l,n):l;{let h=SI(l);return h.length&&(i.validationWarnings=Array.from(new Set([...i.validationWarnings,...h]))),Ur(l,n)}});return n==="smart"?Vd({parts:e,decodedParts:c,identifier:o}):c};var $d=({input:e,decodeMethod:n,identifier:o})=>{let i={displayValue:"",validationWarnings:[]};if(!e.includes("@")&&!e.includes(`
`))return i.displayValue=Ur(e,n),i;if(e.includes("@")){let c=e.split("@"),p=CI({parts:c,identifier:o,decodeMethod:n,display:i});i.displayValue=p.join("@")}if(e.includes(`
`)){let c=e.split(`
`),p=c.map(u=>{let h=m.Buffer.from(u,"base64");return n==="raw"?u:Ur(h.toString("hex"),n)}),l=n==="smart"?Vd({parts:c,decodedParts:p,identifier:o}):p;i.displayValue=l.join(`
`)}return i};var e8=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}],AI=({value:e,initialDecodeMethod:n,setDecodeMethod:o,identifier:i})=>{let[c,p]=(0,zd.useState)(n&&Object.values(xo).includes(n)?n:"raw"),{displayValue:l,validationWarnings:u}=$d({input:e,decodeMethod:c,identifier:i});return(0,zd.useEffect)(()=>{o&&o(c)},[c]),{displayValue:l,validationWarnings:u,setActiveKey:p,decodeOptions:e8}};r();var qd=require("react");Ve();Nn();var II=()=>{let{hash:e,pathname:n}=ye(),o=e.replace("#",""),i=o&&Object.values(xo).includes(o)?o:"raw",[c,p]=(0,qd.useState)(o);return(0,qd.useEffect)(()=>{c&&c!=="raw"&&(window==null||window.history.replaceState({},document==null?void 0:document.title,`${n}#${c}`))},[c,n]),{initialDecodeMethod:i,decodeMethod:c,setDecodeMethod:p}};r();var bI=require("react");ln();var o8=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];function t8({operations:e,transaction:n,isExpanded:o=!1,listLength:i=25}){let c=e.filter(T=>!o8.includes(T.action)&&(T.sender===n.sender||T.receiver===n.sender)),p=c.length>0?c:e,l=p.length>i?p.slice(0,i):p,u=p.length>i?p.slice(i,p.length):[],h=o?c.length>0?"Show in/out operations":"Show fewer operations":"Show all operations",g=l.length!==e.length||u.length>0;return{displayedOperations:o?e:l,toggleButtonText:h,showToggleButton:g}}function LI(e){let[n,o]=(0,bI.useState)(!1),i=()=>{o(u=>!u)},{displayedOperations:c,showToggleButton:p,toggleButtonText:l}=t8(q(b({},e),{isExpanded:n}));return{isExpanded:n,displayedOperations:c,showToggleButton:p,toggleButtonText:l,onToggleButtonClick:i}}Dr();r();var jd=e=>e.transactions,fi=se(jd,e=>e.signedTransactions),NI=se(jd,e=>e.signTransactionsError),Kd=se(jd,e=>e.signTransactionsCancelMessage),Xd=e=>n=>Object.entries(n).reduce((o,[i,c])=>(e(c.status)&&(o[i]=c),o),{}),PI=se(fi,Xd(Yt)),kI=se(fi,Xd(Sa)),DI=se(fi,Xd(Ca)),r8=se(fi,Xd(Bc)),Zd=se(jd,e=>{var n;return(e==null?void 0:e.transactionsToSign)==null?null:q(b({},e.transactionsToSign),{transactions:((n=e==null?void 0:e.transactionsToSign)==null?void 0:n.transactions.map(o=>ui(o)))||[]})}),a8=se(fi,(e,n)=>n,(e,n)=>n!=null?(e==null?void 0:e[n])||{}:{});var rt=()=>Q(wt);r();var Yd=require("react");function EI(e,n=[]){let o=(0,Yd.useRef)(!0);(0,Yd.useEffect)(()=>{o.current?o.current=!1:e()},n)}r();Ye();function WI(){let e=Q(J1),n=Ge();return{notification:e,clearNotification:()=>n(MC())}}r();r();r();r();r();r();r();r();var MI=require("@multiversx/sdk-extension-provider"),BI=require("@multiversx/sdk-hw-provider"),OI=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),FI=require("@multiversx/sdk-opera-provider"),RI=require("@multiversx/sdk-passkey-provider/out"),vg=require("@multiversx/sdk-web-wallet-provider");Y();va();r();var Ho=require("@multiversx/sdk-web-wallet-iframe-provider/out"),bp=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");en();r();var Lp={},Jd=Np;var i8="/dapp/init",lo=e=>{switch(e==null?void 0:e.constructor){case vg.WalletProvider:return"wallet";case Jd:return"walletconnectv2";case BI.HWProvider:return"ledger";case MI.ExtensionProvider:return"extension";case RI.PasskeyProvider:return"passkey";case OI.MetamaskProvider:return"metamask";case FI.OperaProvider:return"opera";case no.CrossWindowProvider:return"crossWindow";case Ho.IframeProvider:return"iframe";case Np:return"";default:return"extra"}},Qd=e=>new vg.WalletProvider(`${e}${i8}`),e_=e=>M(void 0,null,function*(){if(!e.isInitialized())throw new Error("Unable to get version. Provider not initialized");let n=e.hwApp,{contractData:o,version:i}=yield n.getAppConfiguration();return{version:i,dataEnabled:o===rC}}),Et=e=>`Unable to perform ${e}, Provider not initialized`,Np=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Et("getAccount"))}setAccount(n){throw new Error(Et(`setAccount: ${n}`))}login(n){throw new Error(Et(`login with options: ${n}`))}logout(n){throw new Error(Et(`logout with options: ${n}`))}getAddress(){throw new Error(Et("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(n,o){throw new Error(Et(`sendTransaction with transactions: ${n} options: ${o}`))}signTransaction(n,o){throw new Error(Et(`signTransaction with transactions: ${n} options: ${o}`))}signTransactions(n,o){throw new Error(Et(`signTransactions with transactions: ${n} options: ${o}`))}signMessage(n,o){throw new Error(Et(`signTransactions with ${n} and options ${o}`))}sendCustomMessage({method:n,params:o}){throw new Error(Et(`sendCustomMessage with method: ${n} params: ${o}`))}sendCustomRequest(n){throw new Error(Et(`sendSessionEvent with options: ${n}`))}ping(){return Promise.resolve(!1)}},jc=new Np;var wg=jc,UI=null;function oo(e){wg=e}function GI(){UI!=null&&(wg=UI)}function ko(){return wg||jc}Ye();r();r();r();r();r();var HI=require("@lifeomic/axios-fetch"),Sg=w(require("axios")),Cg=(0,HI.buildAxiosFetch)(Sg.default),Ag=(e,n)=>M(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let i=e.clone().json(),[c]=yield Promise.all([i]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:n}});function p8(e,n,o){return M(this,null,function*(){try{let i=yield Cg(e,b({method:"POST",body:n?JSON.stringify(n):void 0,headers:b({"Content-Type":"application/json"},(o==null?void 0:o.headers)||{})},o));return Ag(i,o)}catch(i){throw console.error("Fetch Error:",i),i}})}function c8(e,n){return M(this,null,function*(){try{let o=yield Cg(e,n);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return Ag(o,n)}catch(o){throw console.error("Fetch Error:",o),o}})}function s8(e,n,o){return M(this,null,function*(){try{let i=yield Cg(e,b({method:"PATCH",body:n?JSON.stringify(n):void 0,headers:(o==null?void 0:o.headers)||{}},o));if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return Ag(i,o)}catch(i){throw console.error("Fetch Error:",i),i}})}var Gr=Sg.default.create();Gr.get=c8;Gr.post=p8;Gr.patch=s8;var VI=e=>Gr.get(e).then(n=>n.data);r();var gi=e=>{let n=e!=null?e:tg(me.getState());return n.endsWith("/")?n.slice(0,-1):n};r();var $I=w(require("axios"));function zI(e){return M(this,null,function*(){let{network:{apiAddress:n,apiTimeout:o}}=wt(me.getState()),{data:i}=yield $I.default.get(`${n}/${wo}/${e}`,{timeout:Number(o)});return i})}r();var qI=w(require("swr"));var Pp=({apiEndpoint:e})=>{let n=gi(),o=e?`${n}/${e}`:null;return(0,qI.default)(o,VI)};var m8=e=>{let o=`${gi()}/${wo}/${e}?withGuardianInfo=true`;return Gr.get(o)},jI=e=>M(void 0,null,function*(){if(!e)return null;try{let{data:n}=yield m8(e);return n}catch(n){console.error("error fetching configuration for ",e,n)}return null});var Ea=e=>jI(e);r();en();r();r();function KI(){let e=ko();return lo(e)}function Wt(e){return KI()===e}r();Nn();var XI=()=>{let{search:e}=ye(),n=new URLSearchParams(e),o=Object.fromEntries(n),i=o==null?void 0:o.address;return Pn(i)?i:null};function n_(){let e=me.getState(),n=ko(),o=Mr(e),i=Ia(e),c=Z1(e);if(!n)throw"provider not initialized";return Wt("ledger")&&i?new Promise(p=>{p(o)}):!Wt("")&&!Wt("wallet")&&!Wt("extra")?n.getAddress():new Promise(p=>{let l=XI();c!=null&&l&&p(l),i&&p(o),p("")})}r();function Wa(e){let n=me.getState(),o=z1(n);return e?o&&!isNaN(o)?Math.max(o,e.nonce):e.nonce:o}Dr();r();r();r();var d8=w(require("axios"));r();var _8=w(require("axios"));gp();r();Y();var Ig=({sessionId:e,address:n})=>`${e}${mC}${n}`;r();var l8=w(require("axios"));r();var f8=w(require("axios"));r();r();var g8=w(require("axios"));r();var h8=w(require("axios"));r();r();Ye();en();r();r();function YI(e){return M(this,null,function*(){let n=e;n==null&&(n=Br(me.getState()).address);let o=yield Ea(n);if(o==null)throw"Could not read account, user not logged in";return o==null?void 0:o.balance})}r();r();Nn();var JI=()=>{let{search:e}=ye(),n=new URLSearchParams(e),o=Object.fromEntries(n);return o==null?void 0:o.accessToken};var QI=()=>{var o;let e=JI(),n=Po(me.getState());return e!=null?e:(o=n.webviewLogin)==null?void 0:o.data};r();un();Ve();r();Ye();r();var eb=require("@multiversx/sdk-core");Ve();$n();r();Dr();r();Ye();en();r();Ye();Ve();r();r();r();Ve();r();$m();r();var o_=()=>Q(NI);r();function t_(){let e=Q(fi),n=Object.entries(e),o=(n==null?void 0:n.length)>0;return{signedTransactions:e,signedTransactionsArray:n,hasSignedTransactions:o}}r();r();var ob=w(require("swr"));r();r();var r_={},bg={setItem:(e,n)=>M(void 0,null,function*(){try{r_[e]=JSON.stringify(n)}catch(o){console.error("tokenDataStorage unable to serialize",o)}}),getItem:e=>M(void 0,null,function*(){try{return JSON.parse(r_[e])}catch(n){console.error("tokenDataStorage unable to parse",n)}}),clear:()=>M(void 0,null,function*(){r_={}}),removeItem:e=>M(void 0,null,function*(){delete r_[e]})};function nb(e){return M(this,null,function*(){let{apiAddress:n,apiTimeout:o}=yn(me.getState()),i={baseURL:n,timeout:Number(o)},c=yield bg.getItem(e);if(c)return c;let p=yield Gr.get(e,i);return yield bg.setItem(e,p.data),p.data})}function a_({tokenId:e}){var y,C,N,A;let{network:n}=rt(),{isNft:o}=Fd(e),i=e,c=o?zc:Na,{data:p,error:l,isLoading:u}=(0,ob.default)(Boolean(i)?`${n.apiAddress}/${c}/${i}`:null,nb);if(!i)return{tokenDecimals:Number(n.decimals),tokenLabel:"",tokenAvatar:""};let h=p?p==null?void 0:p.decimals:Number(n.decimals),g=p?p==null?void 0:p.name:"",T=p?(A=(y=p==null?void 0:p.assets)==null?void 0:y.svgUrl)!=null?A:(N=(C=p==null?void 0:p.media)==null?void 0:C[0])==null?void 0:N.thumbnailUrl:"";return{isLoading:u,tokenDecimals:h,tokenLabel:g,type:p==null?void 0:p.type,tokenAvatar:T,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:l}}r();function tb(e){return Q(n=>pA(n,e))}r();var Kc=require("react");r();function rb({parsedTransactionsByDataField:e,data:n,txInfo:o}){!e||(e[n]=o)}function ab({transactions:e}){let n={},o=[];return!e||e.length===0?{allTransactions:o,parsedTransactionsByDataField:n}:(e.forEach((i,c)=>{let p=i.getData().toString(),l=oI(p);if(l.length>0)l.forEach((u,h)=>{let g={transaction:i,multiTxData:u.data,transactionIndex:h};rb({parsedTransactionsByDataField:n,data:u.data,txInfo:{tokenId:u.token?u.token:"",amount:u.amount?u.amount:"",type:u.type,nonce:u.nonce?u.nonce:"",multiTxData:u.data,receiver:u.receiver}}),o.push(g)});else{let u=i.getData().toString(),{tokenId:h,amount:g}=kd(u);h&&rb({parsedTransactionsByDataField:n,data:u,txInfo:{tokenId:h,amount:g,receiver:i.getReceiver().bech32()}}),o.push({transaction:i,transactionIndex:c,multiTxData:u})}}),{allTransactions:o,parsedTransactionsByDataField:n})}var ib={tokenId:"",amount:"",type:"",multiTxData:"",receiver:""};function pb({transactions:e}){let[n,o]=(0,Kc.useState)({}),[i,c]=(0,Kc.useState)([]);function p(u,h){return n==null?ib:u in n?n[u]:h!=null&&String(h)in n?n[h]:ib}function l(){let{allTransactions:u,parsedTransactionsByDataField:h}=ab({transactions:e});c(u),o(h)}return(0,Kc.useEffect)(()=>{l()},[e==null?void 0:e.length]),{parsedTransactionsByDataField:n,getTxInfoByDataField:p,allTransactions:i}}r();var cb=require("react"),sb=require("@multiversx/sdk-web-wallet-provider"),mb=require("@multiversx/sdk-web-wallet-provider"),db=w(require("qs"));Y();Ye();en();Lf();Nn();var y8=ye();function i_(e){let n=Q(yn),o=Ge(),{shouldFetchWalletUrlOnLoad:i}=Q(Rc),{search:c}=i?y8:ye();(0,cb.useEffect)(()=>{if(c!=null){let p=db.default.parse(c.replace("?",""));if(p&&Zt in p){let l=String(p[Zt]),u=new sb.WalletProvider(`${n.walletAddress}${iC}`).getTransactionsFromWalletUrl(c);if(p.status==="cancelled"){o(Jt({sessionId:l,status:"cancelled"})),e(),Gd({removeParams:[...Object.keys(bf),mb.WALLET_PROVIDER_CALLBACK_PARAM,Zt,"address"],search:c}),o(Er(Nr));return}if(u.length>0){o(Jt({sessionId:l,status:"signed",transactions:u.map(g=>Da(g))}));let[h]=u;iI({transaction:h,search:c})}}}},[c])}r();var Ti=require("react"),xi=require("@multiversx/sdk-core");r();var Ma=e=>Pp({apiEndpoint:e?`${wo}/${e}?withGuardianInfo=true`:null});Y();Hf();r();r();var p_=(e,n)=>e?Array.isArray(n)?n.some(o=>e.address===o||e.activeGuardianAddress===o):e.address===n||e.activeGuardianAddress===n:!0;r();function c_(e){let n=Zd(me.getState()),o=Object.keys(e).length===(n==null?void 0:n.transactions.length);return e&&(e&&o)}r();r();r();var Lg=({accountNonce:e,transactionNonce:n})=>n&&n>e?n:e;var _b=({latestNonce:e,transactions:n})=>n.length===0?n:n.map((o,i)=>{let c=e+i,p=o.getNonce().valueOf(),l=Lg({accountNonce:c,transactionNonce:p});return o.setNonce(l),o});var s_=()=>{let e=Q(Mr),{data:n}=Ma(e);return o=>M(void 0,null,function*(){let i=n!=null?n:yield Ea(e),c=Wa(i);return _b({latestNonce:c,transactions:o})})};r();var Xc=({transactions:e,isGuarded:n})=>n?e.length===0?!1:e.every(o=>Boolean(o.getGuardianSignature().toString("hex"))):!0;r();r();r();gp();r();var S8=w(require("axios"));r();var A8=w(require("axios"));r();gp();r();gp();function Ng(e){return ZS[e]}r();r();r();r();var I8=require("@multiversx/sdk-opera-provider");r();var b8=require("@multiversx/sdk-extension-provider");r();va();function lb(o){return M(this,arguments,function*({address:e,walletUrl:n}){try{let i=yield no.CrossWindowProvider.getInstance().init(),c=no.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(n);if(i)return c;console.error("Could not initialise Cross Window Wallet provider")}catch(i){console.error("Unable to login to CrossWindowWalletProvider",i)}return null})}r();r();r();r();var kb=w(Pb());var ar=e=>{if(!e||!(0,kb.default)(e))return null;let n=e.split(".");if(n.length!==4)return null;try{let[o,i,c,p]=n,l=JSON.parse(La(p)),u=La(o);return{ttl:Number(c),extraInfo:l,origin:u,blockHash:i}}catch(o){return console.error(`Error trying to decode ${e}:`,o),null}};r();var Fb=require("@multiversx/sdk-native-auth-client");r();var Mb=w(require("axios"));r();r();r();function Db(e){return M(this,null,function*(){return yield new Promise(n=>{setTimeout(()=>n(),e)})})}r();var Eb=(e,n,o)=>M(void 0,null,function*(){let i;return Promise.race([e,new Promise((c,p)=>i=setTimeout(p,n,o))]).finally(()=>clearTimeout(i))});var Wb=(e,n,o,i=0)=>M(void 0,null,function*(){try{return yield e(...o)}catch(c){return i<n.retries?((n==null?void 0:n.delay)!=null&&(yield Db(n.delay)),yield Wb(e,n,o,i+1)):null}}),Dg=(e,n={retries:5,delay:500})=>(...o)=>M(void 0,null,function*(){return yield Wb(e,n,o)});var J8=4,Q8=3e4,__={current:null},hi={current:null},eG=Dg((e,n,o)=>M(void 0,null,function*(){if(o){let p=Math.floor(Date.now()/1e3);return{hash:yield o(),timestamp:p}}let{data:i}=yield Mb.default.get(`${e}/${Dd}?from=${J8}&size=1&fields=hash,timestamp${n?"&shard="+n:""}`),[c]=i;return c}));function Bb(e,n,o,i){return M(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(__.current!=null&&c<__.current.timestamp*1e3+Q8&&!i)return __.current;if(hi.current!=null)return yield hi.current;hi.current=eG(e,n,o);try{let p=yield hi.current;if(p==null)throw hi.current=null,new Error("could not get block hash");return __.current={hash:p.hash,timestamp:p.timestamp},hi.current=null,p}catch(p){return hi.current=null,null}})}r();r();Dc();r();function nG(e){return Object.prototype.toString.call(e)==="[object String]"}var l_=e=>{var o;if(!e||!nG(e))return null;let n=e.split(".");if(n.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[i,c,p]=n,l=La(i),u=La(c),h=ar(u);if(!h)return{address:l,body:u,signature:p,blockHash:"",origin:"",ttl:0};let g=q(b({},h),{address:l,body:u,signature:p});return(o=h.extraInfo)!=null&&o.timestamp||delete g.extraInfo,g}catch(i){return null}};var Eg={isExpired:!1},Ob=e=>{if(!e)return Eg;let n=l_(e);if(!n)return Eg;let o=wa(),{ttl:i,extraInfo:c}=n,p=c==null?void 0:c.timestamp;if(!p)return Eg;let l=p+i,u=o>l,h=l-o;return{isExpired:u,expiresAt:l,secondsUntilExpires:h}};r();Nn();var Jc={origin:ye().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},Qc=e=>{var o,i,c,p,l,u;return e===!0?Jc:{origin:(o=e==null?void 0:e.origin)!=null?o:Jc.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(i=e==null?void 0:e.expirySeconds)!=null?i:Jc.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:Jc.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:Jc.tokenExpirationToastWarningSeconds,extraInfo:(l=e==null?void 0:e.extraInfo)!=null?l:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(u=e==null?void 0:e.extraRequestHeaders)!=null?u:{}}};var es=e=>{let{origin:n,apiAddress:o,expirySeconds:i,blockHashShard:c,extraInfo:p,gatewayUrl:l,extraRequestHeaders:u}=Qc(e),h=new Fb.NativeAuthClient({origin:n,apiUrl:o,expirySeconds:i,blockHashShard:c,gatewayUrl:l,extraRequestHeaders:u});return{getNativeAuthConfig:Qc,initialize:y=>M(void 0,null,function*(){var N,A;if(!o||!n)return"";let C=()=>h.getCurrentBlockHash();try{let P=(N=y==null?void 0:y.latestBlockInfo)!=null?N:yield Bb(o,c,C,y==null?void 0:y.noCache);if(!P)return"";let{hash:W,timestamp:B}=P,z=h.encodeValue(JSON.stringify(b(b({},(A=y==null?void 0:y.extraInfo)!=null?A:p),B?{timestamp:B}:{})));return`${h.encodeValue(n)}.${W}.${i}.${z}`}catch(P){return console.error("Error getting native auth token: ",P.toString()),""}}),getToken:({address:y,token:C,signature:N})=>h.getToken(y,C,N),getTokenExpiration:Ob}};var Rb=o=>M(void 0,[o],function*({loginToken:e,extraInfoData:n}){if(e==null||Object.keys(n).length===0)return null;let i=ar(String(e)),g=(i==null?void 0:i.extraInfo)||{},{timestamp:c}=g,p=_n(g,["timestamp"]);if(!(i&&c!=null))return null;let u={hash:String(i==null?void 0:i.blockHash),timestamp:Number(c)};return yield es({extraInfo:b(b({},p),n),expirySeconds:i==null?void 0:i.ttl,origin:i==null?void 0:i.origin}).initialize({latestBlockInfo:u})});var u_=p=>M(void 0,[p],function*({loginToken:e,extraInfoData:n,address:o,signature:i,loginService:c}){let l=yield Rb({loginToken:e,extraInfoData:n}),u=n.multisig||n.impersonate||o,h=l!=null?u:o;return l!=null&&c.setLoginToken(l),i&&c.setTokenLoginInfo({signature:i,address:o}),yield Ea(h)});r();var oG=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();var tG=require("@multiversx/sdk-passkey-provider/out");Y();Nn();var f_=({transactions:e,hasGuardianScreen:n,callbackRoute:o,sessionId:i,walletAddress:c,isGuarded:p})=>{let l=Xc({isGuarded:p,transactions:e}),u=e[0].getChainID().valueOf(),h=e[0].getSender().bech32().toString(),g=Ng(u),T=c!=null?c:ci[g].walletAddress;return{needs2FaSigning:p?!n&&!l&&i:!1,sendTransactionsToGuardian:()=>{let A=Qd(T),P={[Zt]:String(i)},{origin:W}=ye(),B=window!=null&&window.location?`${W}${o}`:`${o}`,z=Nd({callbackUrl:B,urlParams:P});A.guardTransactions(e,{callbackUrl:encodeURIComponent(z)})},guardTransactions:()=>M(void 0,null,function*(){let A=yield lb({address:h,walletUrl:T});return A==null||A.setShouldShowConsentPopup(!0),yield A==null?void 0:A.guardTransactions(e)})}};r();r();r();var Vb=require("react"),Wg=require("@multiversx/sdk-hw-provider");r();un();Ve();r();function Ub(e,n){if(!e){typeof console!="undefined"&&console.warn(n);try{throw new Error(n)}catch(o){}}}function Gb(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,i]=rG(e.path,e.caseSensitive,e.end),c=n.match(o);if(!c)return null;let p=c[0],l=p.replace(/(.)\/+$/,"$1"),u=c.slice(1);return{params:i.reduce((g,T,y)=>{if(T==="*"){let C=u[y]||"";l=p.slice(0,p.length-C.length).replace(/(.)\/+$/,"$1")}return g[T]=aG(u[y]||"",T),g},{}),pathname:p,pathnameBase:l,pattern:e}}function rG(e,n=!1,o=!0){Ub(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,u)=>(i.push(u),"([^\\/]+)"));return e.endsWith("*")?(i.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=o?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,n?void 0:"i"),i]}function aG(e,n){try{return decodeURIComponent(e)}catch(o){return Ub(!1,`The value for the URL param "${n}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),e}}Mc();mi();Tp();$n();var Hb=({callbackUrl:e,onRedirect:n})=>{typeof n=="function"?n(e):e&&yp({url:e})},iG=e=>{let n=vo.local.getItem(kt.logoutEvent),{data:o}=n?JSON.parse(n):{data:e};e===o&&(vo.local.setItem({key:kt.logoutEvent,data:e,expires:0}),vo.local.removeItem(kt.logoutEvent))},pG=500;function ns(c,p){return M(this,arguments,function*(e,n,o=Boolean(QI()),i={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var A;let l="",u=ko(),h=lo(u),g=h==="wallet",T=((A=u==null?void 0:u.isInitialized)==null?void 0:A.call(u))===!0;if(o&&(u==null?void 0:u.relogin)!=null)return u.relogin();if(i.shouldBroadcastLogoutAcrossTabs)try{l=yield n_(),iG(l)}catch(P){console.error("error fetching logout address",P)}let y=Pr(e),C=ye(),N=new URL(decodeURIComponent(y)).pathname;if((Gb(C.pathname,N)||g&&T)&&UC(),!l&&!T)return Hb({callbackUrl:y,onRedirect:n});try{if(me.dispatch(an()),g)return setTimeout(()=>{u.logout({callbackUrl:y})},pG);i.hasConsentPopup&&h==="crossWindow"&&u.setShouldShowConsentPopup(!0),yield u.logout({callbackUrl:y})}catch(P){console.error("Logging out error:",P)}finally{g||Hb({callbackUrl:y,onRedirect:n})}})}var $b=()=>{let e=Q(Cd),n=Q(Ia),o=Q(X1),i=ko(),[c,p]=(0,Vb.useState)(),l=()=>M(void 0,null,function*(){let h=(o==null?void 0:o.index)!=null;try{if(i instanceof Wg.HWProvider&&i.isInitialized())return h&&(yield i.setAddressIndex(o.index)),i;let g=new Wg.HWProvider;return(yield g.init())?(h&&(yield g.setAddressIndex(o.index)),g):null}catch(g){return console.error("Failed to initialise Ledger Provider"),null}});function u(h){return M(this,null,function*(){let g,T=n&&!(h!=null&&h.isRelogin);try{if(g=yield l(),!g){console.warn("Could not initialise ledger app"),T&&ns(e);return}let y=yield e_(g);return oo(g),p(y),g}catch(y){console.error("Could not initialise ledger app",y),T&&ns(e)}return null})}return{setLedgerProvider:u,ledgerData:c}};r();var Bn=()=>{let e=ko(),n=lo(e);return{provider:e,providerType:n}};var zb=()=>{let{provider:e}=Bn(),{setLedgerProvider:n}=$b();return function(){return M(this,null,function*(){let i;try{let p=yield e.getAddress();i=Boolean(p)}catch(p){i=!1}if(i)return e;let c=yield n({isRelogin:!0});return c||e})}};var g_={},qb=({isLedger:e=!1,transactionsToSign:n,egldLabel:o,address:i,activeGuardianAddress:c,hasGuardianScreen:p,onCancel:l,onSignTransaction:u,onTransactionsSignError:h,onTransactionsSignSuccess:g,onGetScamAddressData:T})=>{var Zn,Wn,He,Me;let y=Boolean(c),[C,N]=(0,Ti.useState)(0),[A,P]=(0,Ti.useState)(),[W,B]=(0,Ti.useState)(null),[z,K]=(0,Ti.useState)(!1),{getTxInfoByDataField:R,allTransactions:G}=pb({transactions:c?n==null?void 0:n.map(Se=>{Se.setSender(xi.Address.fromBech32(i)),Se.setVersion(xi.TransactionVersion.withTxOptions()),Se.setGuardian(xi.Address.fromBech32(c));let Le=b({guarded:!0},e?{hashSign:!0}:{});return Se.setOptions(xi.TransactionOptions.withOptions(Le)),Se}):n}),Z=C===G.length-1,ie=G[C],ee=(Zn=W==null?void 0:W.transaction)==null?void 0:Zn.getSender().toString(),{data:re}=Ma(!ee||ee===i?null:ee),pe=()=>M(void 0,null,function*(){var so;if(ie==null)return;let{transaction:Se,multiTxData:Le,transactionIndex:xe}=ie,Ae=Se.getData().toString(),ce=R(Se.getData().toString(),Le),{tokenId:Pe}=ce,Fe=Se.getReceiver().toString();if(ee&&ee!==i&&!p_(re,i))return console.error(bc),l==null?void 0:l();let Xe=i!==Fe,qe=Fe in g_;if(Fe&&Xe&&!qe&&T!=null){let Tn=yield T(Fe);g_=b(b({},g_),Tn!=null&&Tn.scamInfo?{[Fe]:Tn.scamInfo}:{})}let mn=Boolean(Pe&&eI({tokenId:Pe,erdLabel:o}));B({transaction:Se,receiverScamInfo:((so=g_[Fe])==null?void 0:so.info)||null,transactionTokenInfo:ce,isTokenTransaction:mn,dataField:Ae,transactionIndex:xe})});(0,Ti.useEffect)(()=>{pe()},[ie,re]);let ne=()=>{N(0),P(void 0),K(!1)},ue=()=>M(void 0,null,function*(){let Se=Object.values(A!=null?A:{}),Le=Xc({isGuarded:y,transactions:Se});if(y&&Le){g(Se),ne();return}if(W==null)return;K(e);let xe;try{xe=yield u(W.transaction)}catch(Xe){console.error(Xe,"sign error");let{message:qe}=Xe,mn=e?ad(Xe).errorMessage:null;ne(),h(mn!=null?mn:qe);return}if(!xe)return;let Ae={[C]:xe},ce=A?b(b({},A),Ae):Ae;if(P(ce),!Z){N(Xe=>Xe+1),K(!1);return}if(!ce)return;let Pe=Object.values(ce);!Xc({isGuarded:y,transactions:Pe})&&p||(g(Pe),ne())}),fe=()=>M(void 0,null,function*(){try{if(W==null)return;if(W.transaction.getSignature().toString("hex")&&!Z){N(Le=>Le+1);return}yield ue()}catch(Se){console.error("Error during signing transaction"),yield ue()}}),Oe=C===0,_e=()=>{Oe?l==null||l():N(Se=>Se-1)},ve=Boolean(((Wn=W==null?void 0:W.transactionTokenInfo)==null?void 0:Wn.type)&&((He=W==null?void 0:W.transactionTokenInfo)==null?void 0:He.multiTxData)&&!(W!=null&&W.dataField.endsWith((Me=W==null?void 0:W.transactionTokenInfo)==null?void 0:Me.multiTxData)));return{allTransactions:G,onSignTransaction:()=>M(void 0,null,function*(){if(ve){N(Se=>Se+1);return}yield fe()}),onNext:()=>{N(Se=>{let Le=Se+1;return Le>(G==null?void 0:G.length)?Se:Le})},onPrev:()=>{N(Se=>{let Le=Se-1;return Le<0?Se:Le})},waitingForDevice:z,onAbort:_e,isLastTransaction:Z,isFirstTransaction:C===0,hasMultipleTransactions:G.length>1,shouldContinueWithoutSigning:ve,currentStep:C,signedTransactions:A,setSignedTransactions:P,currentTransaction:W}};r();var as=require("react"),y_=require("@multiversx/sdk-core"),zg=require("@multiversx/sdk-extension-provider"),qg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),jg=require("@multiversx/sdk-passkey-provider/out"),BN=w(NN());Y();r();r();var wn=()=>Q(Br);r();var Ba=()=>Q($1);r();r();r();r();r();r();r();var Mp=w(require("react"));var L9=(0,Mp.createContext)({}),que=me.getState();function x_(){let e=(0,Mp.useContext)(L9);if(e===void 0||Object.values(e).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return e}r();var PN=w(require("react"));r();var Ug=w(require("react")),N9=w(require("axios"));var Oa=()=>{try{let{loginInfo:e,isLoggedIn:n}=x_();return q(b({},e),{isLoggedIn:n})}catch(e){let n=Q(Po),o=Q(Ia);return q(b({},n),{isLoggedIn:o})}};var kN=()=>{let{isLoggedIn:e}=Oa();return e};r();r();va();r();r();var WN=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),MN=require("@multiversx/sdk-webview-provider/out/WebviewProvider");un();r();un();Ye();Ve();function DN(e,n=me.dispatch){let o=l_(e);if(o==null)return;let{signature:i,address:c}=o;i&&e&&c&&(n(xp({loginToken:e,signature:i,nativeAuthToken:e})),n(sn({address:c,loginMethod:"extra"})))}r();r();Ye();function EN(e){var o;me.dispatch(_1(e));let n=Br(me.getState());me.dispatch(g1({batchId:Ig({sessionId:e,address:(o=n==null?void 0:n.address)!=null?o:""})}))}function Gg(){me.dispatch(Aa())}r();$n();r();Ye();Ve();r();r();var k9=require("@multiversx/sdk-core"),D9=w(require("bignumber.js"));Y();r();var E9=w(require("bignumber.js"));Y();var at=class{constructor(){this.init=()=>M(this,null,function*(){return yield this._provider.init()});this.login=()=>M(this,null,function*(){var o;let n=yield this._provider.login();return{address:(o=n==null?void 0:n.address)!=null?o:""}});this.logout=()=>M(this,null,function*(){return me.dispatch(an()),yield this._provider.logout()});this.relogin=()=>M(this,null,function*(){let n=yield this._provider.relogin();return n?(DN(n),GI(),n):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=n=>M(this,null,function*(){let o=yield this._provider.signTransactions(n);return o||(Gg(),this._provider.cancelAction(),null)});this.signTransaction=n=>M(this,null,function*(){return yield this._provider.signTransaction(n)});this.signMessage=n=>M(this,null,function*(){return yield this._provider.signMessage(n)});this.cancelAction=()=>M(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=n=>M(this,null,function*(){this._provider.sendPostMessage({type:n.request.method,payload:n.request.params})});this.getAddress=(0,WN.providerNotInitializedError)("getAddress");this._provider=MN.WebviewProvider.getInstance({resetStateCallback:()=>me.dispatch(an())})}static getInstance(){return at._instance||(at._instance=new at),at._instance}getAccount(){var o;let n=this._provider.getAccount();return{address:(o=n==null?void 0:n.address)!=null?o:""}}setAccount(n){this._provider.setAccount(n)}};Ye();en();$n();Nn();r();var Bp=require("react"),Hg=require("@multiversx/sdk-extension-provider"),Vg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),$g=require("@multiversx/sdk-passkey-provider/out");va();Ye();var Op=()=>{let e=Ge(),{provider:n}=Bn(),{nonce:o}=wn(),[i,c]=(0,Bp.useState)(null),[p,l]=(0,Bp.useState)(),[u,h]=(0,Bp.useState)([]),g=s_(),T=Q(Zd),y=Q(Kd),C=()=>M(void 0,null,function*(){var z,K;let W=Boolean(T==null?void 0:T.transactions),B=(z=T==null?void 0:T.transactions)!=null?z:[];if(W){let R=(K=T==null?void 0:T.customTransactionInformation)!=null&&K.skipUpdateNonces?B:yield g(B);h(R)}l(W)});(0,Bp.useEffect)(()=>{C()},[T,o]);let N=()=>{c(null),e(Er(null))},A=W=>{N(),P(W)};i_(A);function P(W){var ie,ee,re,pe,ne,ue,fe,Oe,_e,ve,le,Ne;let B=n instanceof Hg.ExtensionProvider,z=n instanceof $g.PasskeyProvider,K=n instanceof no.CrossWindowProvider,R=n instanceof Ho.IframeProvider,G=n instanceof Vg.MetamaskProvider,Z=n instanceof at;e(Aa()),e(vp(W)),!(!B&&!K&&!R&&!z&&!G)&&(N(),B&&((ee=(ie=Hg.ExtensionProvider.getInstance())==null?void 0:ie.cancelAction)==null||ee.call(ie)),z&&((pe=(re=$g.PasskeyProvider.getInstance())==null?void 0:re.cancelAction)==null||pe.call(re)),G&&((ue=(ne=Vg.MetamaskProvider.getInstance())==null?void 0:ne.cancelAction)==null||ue.call(ne)),K&&((Oe=(fe=no.CrossWindowProvider.getInstance())==null?void 0:fe.cancelAction)==null||Oe.call(fe)),R&&((ve=(_e=Ho.IframeProvider.getInstance())==null?void 0:_e.cancelAction)==null||ve.call(_e)),Z&&((Ne=(le=at.getInstance())==null?void 0:le.cancelAction)==null||Ne.call(le)))}return{error:i,canceledTransactionsMessage:y,clearTransactionStatusMessage:N,onAbort:A,setError:c,hasTransactions:p,transactionsToSign:T&&q(b({},T),{transactions:u})}};var v_=()=>{let e=Ge(),n=(0,as.useRef)("/"),{provider:o}=Bn(),i=Q(Ad),c=lo(o),p=(0,as.useRef)(!1),l=s_(),{isGuarded:u,address:h}=wn(),g=Q(Kd),{transactionsToSign:T,error:y,setError:C,hasTransactions:N,onAbort:A,clearTransactionStatusMessage:P}=Op();i_(A);let W=(0,BN.default)(T==null?void 0:T.transactions.map(ee=>ee.getSender().toString()).filter(ee=>ee)),B=W==null?void 0:W[0],{data:z}=Ma(!B||B===h?null:B),K=ee=>{var _e,ve,le,Ne,ze,Zn,Wn,He,Me,Se,Le,xe;let re=o instanceof zg.ExtensionProvider,pe=o instanceof jg.PasskeyProvider,ne=o instanceof no.CrossWindowProvider,ue=o instanceof Ho.IframeProvider,fe=o instanceof qg.MetamaskProvider,Oe=o instanceof at;e(Aa()),e(vp(ee)),p.current=!1,!(!re&&!ne&&!ue&&!pe&&!fe)&&(P(),re&&((ve=(_e=zg.ExtensionProvider.getInstance())==null?void 0:_e.cancelAction)==null||ve.call(_e)),pe&&((Ne=(le=jg.PasskeyProvider.getInstance())==null?void 0:le.cancelAction)==null||Ne.call(le)),fe&&((Zn=(ze=qg.MetamaskProvider.getInstance())==null?void 0:ze.cancelAction)==null||Zn.call(ze)),ne&&((He=(Wn=no.CrossWindowProvider.getInstance())==null?void 0:Wn.cancelAction)==null||He.call(Wn)),ue&&((Se=(Me=Ho.IframeProvider.getInstance())==null?void 0:Me.cancelAction)==null||Se.call(Me)),Oe&&((xe=(Le=at.getInstance())==null?void 0:Le.cancelAction)==null||xe.call(Le)))},R=(ee,re)=>{c==="walletconnectv2"&&(ee=Nr);let ne=ee.includes(Nr);if(K(re),ne){e(Er(Nr));return}C(ee)},G=(ee,re,pe="")=>{let ne={[Zt]:re},ue=pe;if(window!=null&&window.location){let{search:Oe,origin:_e}=ye(),ve=new URLSearchParams(Oe);ue=`${_e}${pe}`,ve.forEach((le,Ne)=>{ne[Ne]=le})}let fe=Nd({callbackUrl:ue,urlParams:ne});o.signTransactions(ee,{callbackUrl:encodeURIComponent(fe)})},Z=()=>M(void 0,null,function*(){var Zn,Wn;if(p.current||!T)return;let{sessionId:ee,transactions:re,callbackRoute:pe,customTransactionInformation:ne}=T,{redirectAfterSign:ue}=ne,fe=nt(),Oe=pe||fe,_e=fe.includes(Oe),ve=ue&&!_e;try{if(!(yield(Zn=o==null?void 0:o.init)==null?void 0:Zn.call(o)))return}catch(He){let Me=(He==null?void 0:He.message)||He||hf;console.error(Me),R(hf,ee);return}let le=!ne.skipGuardian,Ne=ne.hasConsentPopup,ze=o instanceof no.CrossWindowProvider;try{p.current=!0,ze&&Ne&&o.setShouldShowConsentPopup(!0);let He=(Wn=yield o.signTransactions(u&&le?re==null?void 0:re.map(ce=>(ce.setVersion(y_.TransactionVersion.withTxOptions()),ce.setOptions(y_.TransactionOptions.withOptions({guarded:!0})),ce)):re))!=null?Wn:[];if(p.current=!1,!c_(He))return;let Se=Object.values(He).map(ce=>Da(ce)),{needs2FaSigning:Le,guardTransactions:xe}=f_({transactions:He,sessionId:ee,callbackRoute:pe,isGuarded:u&&le,walletAddress:i});if(Le){let ce=yield xe();Se=ce?ce.map(Pe=>Da(Pe)):[]}let Ae={sessionId:ee,transactions:Se,status:"signed"};ve&&(Ae.redirectRoute=Oe),e(Jt(Ae))}catch(He){p.current=!1;let Me=(He==null?void 0:He.message)||He||NS;console.error(Me),e(Jt({sessionId:ee,status:"cancelled"})),R(Me.includes("cancel")?Nr:Me,ee)}}),ie=()=>M(void 0,null,function*(){if(!T)return;P();let{sessionId:ee,transactions:re,callbackRoute:pe,customTransactionInformation:ne}=T;if(!o){console.error(PS);return}if(W.length>1)throw new Error("Multiple senders are not allowed");if(B&&B!==h&&!p_(z,h))return console.error(bc),R(bc);n.current=pe||ye().pathname;try{let ue=c==="wallet",fe=ne.skipUpdateNonces?re:yield l(re);if(ue)return G(fe,ee,pe);Z()}catch(ue){let Oe=(ue==null?void 0:ue.message)||LS;console.error(Oe),R(Oe,ee),e(Jt({sessionId:ee,status:"cancelled"})),console.error(Oe,ue)}});return(0,as.useEffect)(()=>{N?ie():p.current=!1},[T,N,z]),{error:y,canceledTransactionsMessage:g,onAbort:A,hasTransactions:N,callbackRoute:n.current,sessionId:T==null?void 0:T.sessionId,transactions:T==null?void 0:T.transactions}};r();Ye();Ve();Mc();Nn();r();Pt();Ye();function Fa(){let e=Ge();return n=>{e(Aa()),e(vp(n)),e(Er(Nr))}}function Kg(e){let{onCancel:n,verifyReceiverScam:o=!0,hasGuardianScreen:i}=e,{transactionsToSign:c,hasTransactions:p}=Op(),l=Q(Ad),u=zb(),h=Q(Id),{account:g}=Ba(),{address:T,isGuarded:y,activeGuardianAddress:C}=g,{provider:N,providerType:A}=Bn(),P=Ge(),W=Fa(),{transactions:B,sessionId:z,callbackRoute:K,customTransactionInformation:R}=c||{};function G(fe){z&&P(Jt({sessionId:z,status:"cancelled"})),P(l1(fe))}let{pathname:Z}=ye(),ie=K!=null&&Z.includes(K),ee=!(R!=null&&R.skipGuardian);function re(fe){return M(this,null,function*(){if(!c_(fe))return;let{needs2FaSigning:_e,guardTransactions:ve}=f_({transactions:fe,sessionId:z,callbackRoute:K,isGuarded:y&&ee,walletAddress:l}),le=fe.map(Ne=>Da(Ne));if(_e){let Ne=yield ve();le=Ne?Ne.map(ze=>Da(ze)):[]}!z||(P(Jt({sessionId:z,status:"signed",transactions:le})),K!=null&&(R==null?void 0:R.redirectAfterSign)&&!ie&&yp({url:K}))})}function pe(){n(),W(z)}function ne(fe){return M(this,null,function*(){let Oe=A!=="ledger"?N:yield u();return fe?yield Oe.signTransaction(fe):null})}let ue=qb({address:T,egldLabel:h,activeGuardianAddress:y&&ee?C:void 0,transactionsToSign:p?B:[],onGetScamAddressData:o?zI:null,isLedger:Wt("ledger"),hasGuardianScreen:i,onCancel:pe,onSignTransaction:ne,onTransactionsSignError:G,onTransactionsSignSuccess:re});return q(b({},ue),{callbackRoute:K,waitingForDevice:ue.waitingForDevice})}r();r();var W9=require("react");r();r();en();Dr();r();var w_=require("react"),ON=(e,n)=>{let[o,i]=(0,w_.useState)(e);return(0,w_.useEffect)(()=>{let p=setTimeout(()=>i(e),n);return()=>clearTimeout(p)},[e]),o};r();r();var Xg=require("react"),RN=require("@multiversx/sdk-extension-provider");Pt();un();en();r();function zn(){return Ia(me.getState())}kr();$n();$n();r();r();va();Ve();var So=e=>(Object.values(on).forEach(n=>{if(n!==(e==null?void 0:e.skipLoginMethod))switch(n){case"crossWindow":{let o=no.CrossWindowProvider.getInstance();o.isInitialized()&&o.dispose();break}case"iframe":{let o=Ho.IframeProvider.getInstance();o.isInitialized()&&o.dispose();break}default:break}}),null);r();var FN=require("react"),S_=require("@multiversx/sdk-core");Ye();var M9=(e,n)=>{var o;return n?n===!0?e:(o=n.apiAddress)!=null?o:e:null},to=e=>{let n=Q(yn),o=Q(ba),i=(0,FN.useRef)(o==null?void 0:o.loginToken),c=M9(n.apiAddress,e),p=Qc(b(b({},e===!0?{}:e),c?{apiAddress:c}:{})),l=Boolean(e),u=es(p),{address:h}=wn(),g=Ge(),T=A=>{i.current=A,g(xp(b(q(b({},o),{loginToken:A}),c?{nativeAuthConfig:p}:{})))},y=()=>{try{return u.initialize()}catch(A){console.error("Unable to get block. Login failed.",A);return}},C=({address:A,signature:P})=>{let W=i.current;if(!W)throw"Token not found. Call `setLoginToken` first.";if(!l){g(xp({loginToken:W,signature:P}));return}let B=u.getToken({address:A,token:W,signature:P});return g(xp(b({loginToken:W,signature:P,nativeAuthToken:B},c?{nativeAuthConfig:p}:{}))),B};return{configuration:p,setLoginToken:T,getNativeAuthLoginToken:y,setTokenLoginInfo:C,refreshNativeAuthTokenLogin:W=>M(void 0,[W],function*({signMessageCallback:A,nativeAuthClientConfig:P}){let z=yield es(P||p).initialize({noCache:Boolean(P)});if(i.current=z,!z)return;let K=new S_.Message({address:new S_.Address(h),data:m.Buffer.from(`${h}${z}`)}),R=yield A(K,{});if(!(R!=null&&R.signature))throw"Message not signed";return C({address:h,signature:m.Buffer.from(R.signature).toString("hex")})})}};var Zg=({callbackRoute:e,token:n,nativeAuth:o,onLoginRedirect:i})=>{let[c,p]=(0,Xg.useState)(""),[l,u]=(0,Xg.useState)(!1),h=o!=null,g=to(o),T=n,y=Ge(),C=zn();function N(){return M(this,null,function*(){if(C)throw new Error(eo);So(),u(!0);let P=RN.ExtensionProvider.getInstance();try{if(!(yield P.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let B=nt(),z=encodeURIComponent(Pr(e!=null?e:B));if(h&&!T&&(T=yield g.getNativeAuthLoginToken(),!T)){console.warn("Fetching block failed. Login cancelled.");return}T&&g.setLoginToken(T);let K=b({callbackUrl:z},T&&{token:T}),{signature:R,address:G}=yield P.login(K);if(oo(P),!G){u(!1),console.warn("Login cancelled."),p("Login cancelled");return}R&&T&&g.setTokenLoginInfo({signature:R,address:G}),y(sn({address:G,loginMethod:"extension"})),No({callbackRoute:e,onLoginRedirect:i,options:{signature:R,address:G}})}catch(W){console.error("error logging in",W),p("error logging in"+W.message)}finally{u(!1)}})}let A=Boolean(c);return[N,{loginFailed:A,error:c,isLoading:l&&!A,isLoggedIn:C&&!A}]};r();var Yg=require("react"),UN=require("@multiversx/sdk-opera-provider");Pt();un();en();kr();$n();Nn();var Jg=({callbackRoute:e,token:n,nativeAuth:o,onLoginRedirect:i})=>{let[c,p]=(0,Yg.useState)(""),[l,u]=(0,Yg.useState)(!1),h=o!=null,g=to(o),T=n,y=Ge(),C=zn();function N(){return M(this,null,function*(){if(C)throw new Error(eo);So(),u(!0);let P=UN.OperaProvider.getInstance();try{if(!(yield P.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:B}=ye(),z=nt(),K=encodeURIComponent(`${B}${e!=null?e:z}`);if(h&&!T&&(T=yield g.getNativeAuthLoginToken(),!T)){console.warn("Fetching block failed. Login cancelled.");return}T&&g.setLoginToken(T);let R=b({callbackUrl:K},T&&{token:T});yield P.login(R),oo(P);let{signature:G,address:Z}=P.account;if(!Z){u(!1),console.warn("Login cancelled.");return}G&&T&&g.setTokenLoginInfo({signature:G,address:Z}),y(sn({address:Z,loginMethod:"opera"})),No({callbackRoute:e,onLoginRedirect:i,options:{signature:G,address:Z}})}catch(W){console.error("error loging in",W),p("error logging in"+W.message)}finally{u(!1)}})}let A=Boolean(c);return[N,{loginFailed:A,error:c,isLoading:l&&!A,isLoggedIn:C&&!A}]};r();var Qg=require("react");Pf();Pt();va();un();Ye();en();kr();Nn();var is=({callbackRoute:e,token:n,nativeAuth:o,onLoginRedirect:i,hasConsentPopup:c,walletAddress:p})=>{let[l,u]=(0,Qg.useState)(""),[h,g]=(0,Qg.useState)(!1),T=o!=null,y=to(o),C=n,N=Q(yn),A=Ge(),P=zn();function W(){return M(this,null,function*(){if(P)throw new Error(eo);So({skipLoginMethod:"crossWindow"}),g(!0);let z=yield no.CrossWindowProvider.getInstance().init(),K=no.CrossWindowProvider.getInstance().setWalletUrl(p!=null?p:N.walletAddress);try{if(!z){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:R,pathname:G}=ye(),Z=encodeURIComponent(`${R}${e!=null?e:G}`);if(T&&!C&&(C=yield y.getNativeAuthLoginToken(),!C)){console.warn("Fetching block failed. Login cancelled.");return}C&&y.setLoginToken(C);let ie=b({callbackUrl:Z},C&&{token:C});(oC&&T||c)&&K.setShouldShowConsentPopup(!0);let{signature:re,address:pe,multisig:ne,impersonate:ue}=yield K.login(ie);if(oo(K),!pe){g(!1),console.warn("Login cancelled.");return}let fe=yield u_({loginToken:C,extraInfoData:{multisig:ne,impersonate:ue},address:pe,signature:re,loginService:y});if(!fe)return;A(sn({address:fe.address,loginMethod:"crossWindow"})),A(SC(fe.address)),A(di(q(b({},fe),{nonce:Wa(fe)}))),No({callbackRoute:e,onLoginRedirect:i,options:{signature:re,address:fe.address}})}catch(R){console.error("error loging in",R),u("error logging in"+R.message)}finally{g(!1)}})}let B=Boolean(l);return[W,{loginFailed:B,error:l,isLoading:h&&!B,isLoggedIn:P&&!B}]};r();var oh=require("react");Pt();Ye();r();r();Xm();r();r();var eh=w(require("platform"));function GN(){var e,n,o,i;return((n=(e=eh.default)==null?void 0:e.os)==null?void 0:n.family)==="iOS"||((i=(o=eh.default)==null?void 0:o.os)==null?void 0:i.family)==="Android"}ya();r();var HN=e=>Math.exp(e/100);r();r();r();r();function ir(){return Id(me.getState())}r();r();si();en();r();var VN=()=>{let e=typeof window!="undefined"?window:{};return Boolean(e==null?void 0:e.elrondWallet)};r();var B9=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");r();r();var O9=75,F9=25,C_=100,nh=({remaining:e,totalSeconds:n,isCrossShard:o})=>{let i=o?F9:O9,c=C_/1e3,p=1/(n*c),l=Math.min(HN(e)-1,p),u=e>=100-i?p:l;return e-u};Mc();mi();r();r();r();Ye();var $N={},zN={},A_=e=>$N[e],qN=e=>zN[e],jN=e=>{if(e.component!=null){let n=e,{component:o,onClose:i}=n,c=_n(n,["component","onClose"]),p=me.dispatch(zf(q(b({},c),{component:null,onClose:void 0})));return $N[p==null?void 0:p.payload.toastId]=o,i&&(zN[p==null?void 0:p.payload.toastId]=i),p==null?void 0:p.payload}return me.dispatch(zf(e)).payload},KN=e=>me.dispatch(o1(e));r();r();var R9=w(require("axios"));$n();r();r();var JN=w(kp());si();var XN,ZN,YN,U9=(YN=(ZN=(XN=_o.safeWindow)==null?void 0:XN.location)==null?void 0:ZN.origin)==null?void 0:YN.includes("localhost"),QN=e=>{if(!(0,JN.default)(e))return Boolean(e);let o=b({},e);return Boolean(U9)&&delete o.origin,Object.keys(o).length>0};r();var eP=({maxRetries:e})=>new Promise((n,o)=>{let i=0,c=()=>{let p=Uc(me.getState());if(p){n(p);return}if(i<e){i++,setTimeout(c,1e3);return}o(null)};c()});Nn();r();var nP=(e,n=["address"])=>{let o=new URL(e),i=new URLSearchParams(o.search);n.forEach(l=>i.delete(l));let c=Array.from(i.values()).length>0?"?":"",p=o.pathname==="/"&&!e.endsWith("/")?"":o.pathname;return o.protocol==="vscode:"?e:`${o.origin}${p}${c}${i.toString()}${o.hash}`};var ps=({callbackRoute:e,token:n,nativeAuth:o,redirectDelayMilliseconds:i=100,customWalletAddress:c})=>{let[p,l]=(0,oh.useState)(""),[u,h]=(0,oh.useState)(!1),g=Q(yn),T=Ge(),y=zn(),C=Boolean(o),N=to(o),A=n;function P(){return M(this,null,function*(){if(y)throw new Error(eo);T(XC(c));try{h(!0);let B=Qd(c!=null?c:g.walletAddress),z=new Date,K=z.setMinutes(z.getMinutes()+3)/1e3,R={data:{},expires:K};if(C&&!A&&(A=yield N.getNativeAuthLoginToken(),!A)){console.warn("Login cancelled.");return}A&&N.setLoginToken(A);let{origin:G}=ye(),Z=window!=null&&window.location?`${G}${e}`:`${e}`;new URLSearchParams(document==null?void 0:document.location.search).get("address")||T(PC(R));let re=nP(Z),pe=encodeURIComponent(re),ne=q(b({callbackUrl:pe},A&&{token:A}),{redirectDelayMilliseconds:i});yield B.login(ne)}catch(B){console.error(B),l("error logging in"+B.message)}finally{h(!1)}})}let W=Boolean(p);return[P,{error:p,loginFailed:W,isLoading:u&&!W,isLoggedIn:y&&!W}]};r();var _P=require("react");Y();r();r();Y();var Sn=e=>{var c;let n=Q(ba),o=(c=n==null?void 0:n.loginToken)!=null?c:e;if(!o)return;let i=ar(o);if(!!i)return i.origin.toLowerCase().startsWith(YS)};r();r();r();var yi=w(require("bignumber.js")),oP=e=>{let n=new yi.default(e).dividedBy(1e3).integerValue(yi.default.ROUND_FLOOR),o=new yi.default(n).dividedBy(60).integerValue(yi.default.ROUND_FLOOR),i=new yi.default(o).dividedBy(60).integerValue(yi.default.ROUND_FLOOR),c=i.modulo(60).isGreaterThan(1),p=o.modulo(60).isGreaterThan(1),l=o.modulo(60).isLessThan(1);return c?`${i} hours`:p?`${o} minutes`:l?"less than 1 minute":`${o} minute`};var I_=(e,n)=>{var p;let o=Q(ba),i=(p=o==null?void 0:o.loginToken)!=null?p:e;if(!i)return;let c=ar(i);if(!!c)return{className:n,url:c.origin,duration:oP(c.ttl*1e3)}};r();r();r();var Ra=w(require("react")),sP=require("react"),mP=require("react"),ph=w(require("classnames")),dP=require("react-dom");Y();r();var rP=w(require("react")),aP=w(require("classnames"));var H9=({className:e,children:n,styles:o})=>rP.default.createElement("div",{className:(0,aP.default)(o==null?void 0:o.dappModalBody,e)},n),th=I(H9,{ssrStyles:()=>Promise.resolve().then(()=>(Vr(),Hr)),clientStyles:()=>(Vr(),j(Hr)).default});r();var rh=w(require("react")),iP=w(require("classnames"));var V9=({visible:e,customFooter:n,className:o,footerText:i,styles:c})=>e?rh.default.createElement("div",{className:(0,iP.default)(c==null?void 0:c.dappModalFooter,o)},n!=null?n:rh.default.createElement("div",null,i)):null,ah=I(V9,{ssrStyles:()=>Promise.resolve().then(()=>(Vr(),Hr)),clientStyles:()=>(Vr(),j(Hr)).default});r();var Fp=w(require("react")),pP=require("@fortawesome/free-solid-svg-icons"),cP=require("@fortawesome/react-fontawesome"),cs=w(require("classnames"));var $9=({visible:e,headerText:n,customHeader:o,className:i,closeButtonClassName:c,headerTextClassName:p,onHide:l,globalStyles:u,styles:h})=>e?o?Fp.default.createElement("div",{className:(0,cs.default)(h==null?void 0:h.dappModalHeader,i)},o):Fp.default.createElement("div",{className:(0,cs.default)(h==null?void 0:h.dappModalHeader,i)},Fp.default.createElement("div",{className:(0,cs.default)(h==null?void 0:h.dappModalHeaderText,p)},n),Fp.default.createElement("button",{onClick:l,className:(0,cs.default)(h==null?void 0:h.dappModalCloseButton,u==null?void 0:u.btn,u==null?void 0:u.btnLight,c)},Fp.default.createElement(cP.FontAwesomeIcon,{size:"lg",icon:pP.faTimes}))):null,ih=I($9,{ssrStyles:()=>Promise.resolve().then(()=>(Vr(),Hr)),clientStyles:()=>(Vr(),j(Hr)).default});var z9={showHeader:!0,showFooter:!1,headerText:"",footerText:""},q9=({"data-testid":e="dappModal",children:n,className:o="dapp-modal-dialog-wrapper",closeOnEscape:i,config:c=z9,id:p="dapp-modal",onHide:l,parentElement:u,visible:h,styles:g})=>{let[T,y]=(0,sP.useState)(!1);if((0,mP.useEffect)(()=>{y(!0)},[]),!h)return null;let{showHeader:C,showFooter:N,headerText:A,footerText:P,modalDialogClassName:W="dapp-modal-dialog",modalContentClassName:B="dapp-modal-dialog-content",modalHeaderClassName:z="dapp-modal-dialog-header",modalHeaderTextClassName:K="dapp-modal-dialog-header-text",modalCloseButtonClassName:R="dapp-modal-dialog-close-button",modalBodyClassName:G="dapp-modal-dialog-content-body",modalFooterClassName:Z="dapp-modal-dialog-footer",customModalHeader:ie,customModalFooter:ee}=c,re=pe=>{pe.key==="Escape"&&i&&(l==null||l())};return Ra.default.createElement(Ra.default.Fragment,null,T&&(0,dP.createPortal)(Ra.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,ph.default)(W,g==null?void 0:g.dappModal,o),"data-testid":e,onKeyDown:re},Ra.default.createElement("div",{className:(0,ph.default)(g==null?void 0:g.dappModalContent,B)},Ra.default.createElement(ih,{visible:C,headerText:A,customHeader:ie,className:z,headerTextClassName:K,closeButtonClassName:R,onHide:l}),Ra.default.createElement(th,{className:G},n),Ra.default.createElement(ah,{visible:N,customFooter:ee,footerText:P,className:Z}))),u!=null?u:document==null?void 0:document.body))},ss=I(q9,{ssrStyles:()=>Promise.resolve().then(()=>(Vr(),Hr)),clientStyles:()=>(Vr(),j(Hr)).default});r();r();var b_=require("react"),L_=e=>{let[n,o]=(0,b_.useState)(!1),i=()=>{o(!0)},c=()=>{o(!1)};return(0,b_.useEffect)(()=>{(e==null?void 0:e.visible)===!0?i():(e==null?void 0:e.visible)===!1&&c()},[e==null?void 0:e.visible]),{handleShowModal:i,handleHideModal:c,showModal:n}};r();var ms=({hideButtonWhenModalOpens:e,onContentHide:n,onContentShow:o,onModalCloses:i,onModalOpens:c,token:p,wrapContentInsideModal:l})=>{let u=kN(),[h,g]=(0,_P.useState)(!1),{handleShowModal:T,handleHideModal:y,showModal:C}=L_(),N=Sn(p),A=!e||!h,P=()=>{g(!1),n==null||n(),l?(y(),i==null||i()):i&&(console.warn('Deprecated: "onModalCloses" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentHide" instead.'),i())};return{disabledConnectButton:N,handleCloseModal:P,handleOpenModal:()=>{if(u)throw new Error(eo);if(h)return P();g(!0),o==null||o(),l?(T(),c==null||c()):c&&(console.warn('Deprecated: "onModalOpens" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentShow" instead.'),c())},shouldRenderButton:A,showContent:h,showModal:C}};r();var Rp=require("react"),ch=require("@multiversx/sdk-hw-provider");Pt();un();Ye();en();kr();r();var vi=require("react"),j9=10,lP=()=>{let[e,n]=(0,vi.useState)(""),[o,i]=(0,vi.useState)(!1),[c,p]=(0,vi.useState)(0),[l,u]=(0,vi.useState)([]),[h,g]=(0,vi.useState)(null),[T,y]=(0,vi.useState)(!1);return{accounts:l,defaultAddressesPerPage:j9,error:e,isLoading:o,onGoToNextPage:()=>{g(null),p(W=>W+1)},onGoToPrevPage:()=>{g(null),p(W=>W===0?0:W-1)},onGoToSpecificPage:W=>{g(null),p(W)},onSelectAddress:W=>{g(W)},selectedAddress:h,setAccounts:u,setError:n,setIsLoading:i,setShowAddressList:y,showAddressList:T,startIndex:c}};var ds="Check if the MultiversX App is open on Ledger",sh=({callbackRoute:e,token:n,addressesPerPage:o,nativeAuth:i,onLoginRedirect:c})=>{let p=Q(j1),l=ko(),u=Ge(),h=zn(),g=i!=null,T=to(i),y=n,{accounts:C,setAccounts:N,isLoading:A,setIsLoading:P,setShowAddressList:W,showAddressList:B,startIndex:z,selectedAddress:K,onGoToPrevPage:R,onGoToNextPage:G,onGoToSpecificPage:Z,onSelectAddress:ie,error:ee,setError:re,defaultAddressesPerPage:pe}=lP(),ne=o!=null?o:pe,[ue,fe]=(0,Rp.useState)(""),[Oe,_e]=(0,Rp.useState)(!1),ve=({address:xe,index:Ae,signature:ce})=>{u(NC({index:Ae,loginType:"ledger"})),ce&&T.setTokenLoginInfo({signature:ce,address:xe}),u(sn({address:xe,loginMethod:"ledger"})),No({callbackRoute:e,onLoginRedirect:c,options:{address:xe,signature:ce}})},le=(xe,Ae="")=>{var ce;if(A){let{errorMessage:Pe,defaultErrorMessage:Fe}=ad(xe),Xe=(ce=Pe!=null?Pe:Fe)!=null?ce:ds;re(`${Xe}.${Ae}`),P(!1),u(Uf(null))}},Ne=()=>M(void 0,null,function*(){try{if(l instanceof ch.HWProvider&&l.isInitialized())return l.isConnected()}catch(xe){le(xe)}return!1}),ze=()=>M(void 0,null,function*(){if(yield Ne()){re(""),P(!1);return}try{let Ae=new ch.HWProvider;(yield Ae.init())&&oo(Ae),re(""),P(!1)}catch(Ae){le(Ae)}}),Zn=()=>M(void 0,null,function*(){let xe=yield Ne();if(!K||!xe)return le(ds);let{index:Ae}=K;if(g&&!y&&(y=yield T.getNativeAuthLoginToken(),!y)){console.warn("Fetching block failed. Login cancelled.");return}if(y){T.setLoginToken(y);try{let ce=yield l.tokenLogin({token:m.Buffer.from(`${y}{}`),addressIndex:Ae});ve({address:ce.address,index:Ae,signature:ce.signature.toString("hex")})}catch(ce){le(ce,". Update MultiversX App to continue.")}}else try{let{address:ce}=yield l.login({addressIndex:Ae});ve({address:ce,index:Ae})}catch(ce){return le(ce),!1}return!0}),Wn=()=>M(void 0,null,function*(){try{if(P(!0),K==null)return!1;u(p?CC(K):Uf(q(b({},K),{version:ue,hasContractDataEnabled:Oe}))),P(!1),yield Zn()}catch(xe){le(xe)}return W(!1),!0}),He=()=>M(void 0,null,function*(){if(!(yield Ne()))return le(ee);try{P(!0);let Ae=yield l.getAccounts(z,ne),ce=yield e_(l);fe(ce.version),_e(ce.dataEnabled),N(Ae),P(!1)}catch(Ae){le(Ae)}}),Me=()=>M(void 0,null,function*(){if(h)throw new Error(eo);So(),re("");try{if(P(!0),!(yield Ne()))return le(ds);if(p!=null){if(!K)return le(ds);let{address:Ae}=yield l.login({addressIndex:K.index.valueOf()});if(!Ae)return le("Login cancelled.");u(sn({address:Ae,loginMethod:"ledger"})),No({callbackRoute:e,onLoginRedirect:c})}else C!=null&&C.length||(yield He()),W(!0);P(!1)}catch(xe){le(xe)}}),Se=()=>M(void 0,null,function*(){try{let xe=yield Ne();if(xe||(yield ze()),xe=yield Ne(),!xe)return le(ds);(C.length===0||z>=0)&&(yield He())}catch(xe){le(xe)}});(0,Rp.useEffect)(()=>{Se()},[z,B,l]),(0,Rp.useEffect)(()=>{(C==null?void 0:C.length)>0&&!B&&W(!0)},[C]);let Le=Boolean(ee);return[Me,{loginFailed:Le,isLoggedIn:h&&!Le,error:ee,isLoading:A&&!Le},{accounts:C,showAddressList:B,startIndex:z,selectedAddress:K,version:ue,contractDataEnabled:Oe,onGoToPrevPage:R,onGoToNextPage:G,onGoToSpecificPage:Z,onSelectAddress:ie,onConfirmSelectedAddress:Wn}]};r();var mh=e=>{var o;let n=Q(Sp);return ps(q(b({},e),{customWalletAddress:(o=e.customWalletAddress)!=null?o:n}))};r();var Vo=require("react");un();Ye();en();kr();Nn();var dh=({callbackRoute:e,token:n,nativeAuth:o,onLoginRedirect:i,logoutRoute:c,customRequestMethods:p=[]})=>{var Ae;let l=Ge(),u=QN(o),h=to(u?o:!1),g=n,[T,y]=(0,Vo.useState)(""),[C,N]=(0,Vo.useState)(""),[A,P]=(0,Vo.useState)(!0),[W,B]=(0,Vo.useState)([]),[z,K]=(0,Vo.useState)(null),{provider:R}=Bn(),G=Q(Q1),Z=Q(eA),ie=Q(nA),ee=Q(oA),re=Q(Cd),pe=Q(K1),ne=(0,Vo.useRef)(R),ue=(0,Vo.useRef)(!1),fe=(0,Vo.useRef)(!1),Oe=(Ae=c!=null?c:re)!=null?Ae:"/",_e=[Lp.CANCEL_ACTION,...p];n&&_e.push(Lp.SIGN_LOGIN_TOKEN),u&&_e.push(Lp.SIGN_NATIVE_AUTH_TOKEN);let ve=A?"":`${ee}?wallet-connect=${encodeURIComponent(C)}`,le=Boolean(T),Ne=zn(),ze=()=>{ns(Oe)},Zn=ce=>{console.log("WalletConnect Session Event: ",ce)},Wn=()=>M(void 0,null,function*(){var ce,Pe,Fe,Xe;try{if(ue.current||ne.current==null)return;if(!fe.current){try{yield(ce=ne.current)==null?void 0:ce.logout()}catch(Xi){console.warn("Unable to logout")}return}let qe=yield(Fe=(Pe=ne.current)==null?void 0:Pe.getAddress)==null?void 0:Fe.call(Pe);if(!qe){console.warn("Login cancelled.");return}let mn=yield(Xe=ne.current)==null?void 0:Xe.getSignature(),so={address:qe,loginMethod:"walletconnectv2"},Tn={logoutRoute:Oe,loginType:"walletconnectv2",callbackRoute:e!=null?e:ye().href};l(LC(Tn)),mn&&h.setTokenLoginInfo({signature:mn,address:qe}),l(sn(so)),No({callbackRoute:e,onLoginRedirect:i,options:{address:qe,signature:mn}})}catch(qe){y("User rejected connection proposal"),console.error(qe)}}),He=()=>M(void 0,null,function*(){var Pe,Fe,Xe,qe,mn;if(lo(ne.current)==="walletconnectv2")try{((qe=(Xe=(Fe=(Pe=ne.current)==null?void 0:Pe.walletConnector)==null?void 0:Fe.session)==null?void 0:Xe.getAll())!=null?qe:[]).length>0&&(yield(mn=ne.current)==null?void 0:mn.logout()),ne.current=jc,K(null)}catch(so){console.warn("Unable to logout")}}),Me=ce=>M(void 0,null,function*(){var Pe,Fe,Xe;if(!G||!Z){y("Invalid WalletConnect setup");return}if(!ce||!ce.topic){y("Expired connection");return}try{if((ne.current?lo(ne.current):!1)!=="walletconnectv2"){yield Le();return}if(P(!0),yield He(),u&&!g&&(g=yield h.getNativeAuthLoginToken(),!g)){console.warn("Fetching block failed. Login cancelled.");return}g&&h.setLoginToken(g),yield Le(!1);let{approval:mn}=yield(Pe=ne.current)==null?void 0:Pe.connect({topic:ce.topic,methods:_e});try{yield(Fe=ne.current)==null?void 0:Fe.login({approval:mn,token:g})}catch(so){console.error("User rejected existing connection proposal",so),y("User rejected existing connection proposal"),P(!0),yield Le()}}catch(qe){console.error("Unable to connect to existing session",qe),y("Unable to connect to existing session")}finally{B((Xe=ne.current)==null?void 0:Xe.pairings)}}),Se=ce=>M(void 0,null,function*(){var Pe,Fe;try{ce&&(yield(Pe=ne.current)==null?void 0:Pe.logout({topic:ce}))}catch(Xe){console.error("Unable to remove existing pairing",Xe),y("Unable to remove existing pairing")}finally{let Xe=yield(Fe=ne.current)==null?void 0:Fe.getPairings();B(Xe)}});function Le(ce=!0){return M(this,null,function*(){var Tn,Xi,Xs;So();let Pe=yield eP({maxRetries:15});if(!Pe){console.error("Invalid chainID"),y("Invalid chainID");return}if(!Z||!G){console.error("Invalid WalletConnect setup"),y("Invalid WalletConnect setup");return}let Fe=zn(),Xe=fe.current===!1&&!Fe,qe=(Xi=(Tn=ne.current)==null?void 0:Tn.isInitialized)==null?void 0:Xi.call(Tn);if(ue.current||Xe||qe)return;if(ue.current=!0,(Xs=ne.current)!=null&&Xs.walletConnector){yield ne.current.init(),K(ne.current),ue.current=!1,ce&&(yield xe());return}let mn={onClientLogin:Wn,onClientLogout:ze,onClientEvent:Zn},so=new Jd(mn,Pe,G,Z,ie);yield so.init(),K(so),ne.current=so,ue.current=!1,ce&&(B(so.pairings),yield xe())})}function xe(){return M(this,null,function*(){var ce,Pe;if(!!ne.current){if(!G||!Z){y("Invalid WalletConnect setup");return}try{if(!fe.current)return;let{uri:Fe,approval:Xe}=yield(ce=ne.current)==null?void 0:ce.connect({methods:_e});if(!Boolean(Fe))return;if(N(Fe),(ie==null?void 0:ie.logger)==="debug"&&console.log("WalletConnect uri: ",Fe),u&&!g&&(g=yield h.getNativeAuthLoginToken(),!g)){console.warn("Fetching block failed. Login cancelled.");return}if(g&&h.setLoginToken(g),(ne.current?lo(ne.current):!1)!=="walletconnectv2"){P(!0),yield Le();return}try{yield(Pe=ne.current)==null?void 0:Pe.login({approval:Xe,token:g})}catch(so){console.error("User rejected connection proposal",so),y("User rejected connection proposal"),P(!0)}}catch(Fe){console.error("Unable to connect",Fe)}}})}return EI(()=>{ne.current=R},[R]),(0,Vo.useEffect)(()=>(fe.current=!0,()=>{fe.current=!1}),[]),(0,Vo.useEffect)(()=>{P(!C)},[C]),(0,Vo.useEffect)(()=>{if(!z)return;(Boolean(z.session)||pe==="walletconnectv2")&&Ne&&oo(z)},[z,Ne]),[Le,{error:T,loginFailed:le,isLoading:A&&!le,isLoggedIn:Ne&&!le},{uriDeepLink:ve,walletConnectUri:C,cancelLogin:He,connectExisting:Me,removeExistingPairing:Se,wcPairings:W}]};r();var _h=require("react"),uP=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Pt();un();en();kr();$n();$n();var lh=({callbackRoute:e,token:n,nativeAuth:o,onLoginRedirect:i})=>{let[c,p]=(0,_h.useState)(""),[l,u]=(0,_h.useState)(!1),h=o!=null,g=to(o),T=n,y=Ge(),C=zn();function N(){return M(this,null,function*(){if(C)throw new Error(eo);So(),u(!0);let P=uP.MetamaskProvider.getInstance();try{if(!(yield P.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let B=nt(),z=encodeURIComponent(Pr(e!=null?e:B));if(h&&!T&&(T=yield g.getNativeAuthLoginToken(),!T)){console.warn("Fetching block failed. Login cancelled.");return}T&&g.setLoginToken(T);let K=b({callbackUrl:z},T&&{token:T});yield P.login(K),oo(P);let{signature:R,address:G}=P.account;if(!G){u(!1),console.warn("Login cancelled."),p("Login cancelled");return}R&&T&&g.setTokenLoginInfo({signature:R,address:G}),y(sn({address:G,loginMethod:"metamask"})),No({callbackRoute:e,onLoginRedirect:i,options:{signature:R,address:G}})}catch(W){console.error("error logging in",W),p("error logging in"+W.message)}finally{u(!1)}})}let A=Boolean(c);return[N,{loginFailed:A,error:c,isLoading:l&&!A,isLoggedIn:C&&!A}]};r();var uh=require("react"),fh=require("@multiversx/sdk-passkey-provider/out");Pt();un();en();kr();$n();$n();var gh=({callbackRoute:e,token:n,nativeAuth:o,onLoginRedirect:i})=>{let[c,p]=(0,uh.useState)(""),[l,u]=(0,uh.useState)(!1),h=o!=null,g=to(o),T=n,y=Ge(),C=zn();function N(){return M(this,null,function*(){if(C)throw new Error(eo);So(),u(!0);let W=fh.PasskeyProvider.getInstance();try{if(!(yield W.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let z=nt(),K=encodeURIComponent(Pr(e!=null?e:z));if(h&&!T&&(T=yield g.getNativeAuthLoginToken(),!T)){console.warn("Fetching block failed. Login cancelled.");return}T&&g.setLoginToken(T);let R=b({callbackUrl:K},T&&{token:T});yield W.login(R),oo(W);let{signature:G,address:Z}=W.account;if(!Z){u(!1),console.warn("Login cancelled."),p("Login cancelled");return}G&&T&&g.setTokenLoginInfo({signature:G,address:Z}),y(sn({address:Z,loginMethod:"passkey"})),No({callbackRoute:e,onLoginRedirect:i,options:{signature:G,address:Z}})}catch(B){console.error("error logging in",B),p("Error logging in: "+B.message)}finally{u(!1)}})}let A=W=>M(void 0,null,function*(){let B=fh.PasskeyProvider.getInstance();return yield B.init(),yield B.createAccount({walletName:W})}),P=Boolean(c);return[N,A,{loginFailed:P,error:c,isLoading:l&&!P,isLoggedIn:C&&!P}]};r();r();var fP=require("react");r();var Z9=require("react");r();var hh=require("react"),X9=require("socket.io-client");Ye();r();r();r();var Y9=require("react");Ve();r();r();r();var TP=w(require("swr"));r();r();r();r();var gP=w(require("axios"));function hP(e=$c){let o=`${gi()}/${e}`;return gP.default.get(o)}r();function N_(){let e=i=>hP(i).then(c=>c.data),{data:n,error:o}=(0,TP.default)($c,e);return{price:n==null?void 0:n.price,error:o}}r();r();var P_=w(require("react")),yh=w(require("classnames"));Y();r();var _s=w(require("react")),yP=w(require("classnames"));var Q9=({onLogin:e,text:n="Default Login Button",className:o="dapp-login-button",btnClassName:i="dapp-default-login-button",disabled:c,"data-testid":p,children:l,globalStyles:u,styles:h})=>{let g=(0,_s.useMemo)(()=>({wrapper:(0,yP.default)(u==null?void 0:u.btn,u==null?void 0:u.btnPrimary,u==null?void 0:u.px4,u==null?void 0:u.m1,u==null?void 0:u.mx3,{[i]:i!=null},o),loginText:h==null?void 0:h.loginText,wrapperClassName:o}),[u,h]);return _s.default.createElement("button",{"data-testid":p,disabled:c,className:g.wrapper,onClick:e},l||_s.default.createElement("span",{className:g.loginText},n))},Cn=I(Q9,{ssrStyles:()=>Promise.resolve().then(()=>(xh(),Th)),clientStyles:()=>(xh(),j(Th)).default});ya();r();var nV=({token:e,className:n="dapp-extension-login",children:o,callbackRoute:i,buttonClassName:c="dapp-default-login-button",nativeAuth:p,loginButtonText:l="MultiversX DeFi Wallet",onLoginRedirect:u,disabled:h,"data-testid":g="extensionLoginButton",globalStyles:T,styles:y})=>{let[C]=Zg({callbackRoute:i,token:e,onLoginRedirect:u,nativeAuth:p}),N=Sn(e),A=Qo()&&navigator.userAgent.indexOf("Firefox")!=-1,P={wrapper:(0,yh.default)(T==null?void 0:T.btn,T==null?void 0:T.btnPrimary,T==null?void 0:T.px4,T==null?void 0:T.m1,T==null?void 0:T.mx3,y==null?void 0:y.noExtensionButtonWrapper,{[c]:c!=null},n),loginText:(0,yh.default)(y==null?void 0:y.loginText,y==null?void 0:y.noExtensionButtonContent),wrapperClassName:n},W=()=>{C()};return VN()?P_.default.createElement(Cn,{onLogin:W,className:n,btnClassName:c,text:l,disabled:h||N,"data-testid":g},o):P_.default.createElement("a",{rel:"noreferrer",href:A?DS:ES,target:"_blank",className:P.wrapper},o||P_.default.createElement("span",{className:P.loginText},l))},vh=I(nV,{ssrStyles:()=>Promise.resolve().then(()=>(Si(),wi)),clientStyles:()=>(Si(),j(wi)).default});r();r();var CP=w(require("react"));r();var wh=require("react");Pt();un();Ye();Ve();Nn();var wP=({callbackRoute:e,token:n,nativeAuth:o,walletAddress:i})=>{let[c,p]=(0,wh.useState)(""),[l,u]=(0,wh.useState)(!1),h=o!=null,g=to(o),T=n,y=Q(yn),C=Ge(),N=zn();function A(){return M(this,arguments,function*(W=bp.IframeLoginTypes.metamask){if(N)throw new Error(eo);So({skipLoginMethod:"iframe"}),u(!0);let B=Ho.IframeProvider.getInstance(),z=i!=null?i:y.metamaskSnapWalletAddress;if(!z){p("Iframe snap wallet URL is not set");return}B.setLoginType(W),B.setWalletUrl(z);let K=yield B.init();try{if(!K){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:R,pathname:G}=ye(),Z=encodeURIComponent(`${R}${e!=null?e:G}`);if(h&&!T&&(T=yield g.getNativeAuthLoginToken(),!T)){console.warn("Fetching block failed. Login cancelled.");return}T&&g.setLoginToken(T);let ie=b({callbackUrl:Z},T&&{token:T}),{signature:ee,address:re,multisig:pe,impersonate:ne}=yield B.login(ie);if(oo(B),!re){u(!1),console.warn("Login cancelled.");return}let ue=yield u_({loginToken:T,extraInfoData:{multisig:pe,impersonate:ne},address:re,signature:ee,loginService:g});if(!ue)return;C(sn({address:ue.address,loginMethod:"iframe",iframeLoginType:W})),C(di(q(b({},ue),{nonce:Wa(ue)})))}catch(R){console.error("error loging in",R),p("error logging in"+R.message)}finally{u(!1)}})}let P=Boolean(c);return[A,{loginFailed:P,error:c,isLoading:l&&!P,isLoggedIn:N&&!P}]};var tV=({token:e,className:n="dapp-metamask-proxy-login",children:o,callbackRoute:i,buttonClassName:c="dapp-default-login-button",nativeAuth:p,loginButtonText:l="Metamask Proxy",onLoginRedirect:u,disabled:h,loginType:g=bp.IframeLoginTypes.metamask})=>{let[T]=wP({callbackRoute:i,token:e,onLoginRedirect:u,nativeAuth:p}),y=Sn(e);return CP.default.createElement(Cn,{onLogin:()=>{T(g)},className:n,btnClassName:c,text:l,disabled:h||y},o)},Ah=I(tV,{ssrStyles:()=>Promise.resolve().then(()=>(Ch(),Sh)),clientStyles:()=>(Ch(),j(Sh)).default});r();r();var hs=w(require("react"));Y();r();r();var W_=w(require("react")),Ok=w(require("classnames"));r();r();var AP=w(require("react"));var Do=e=>{let{showModal:n}=L_({visible:e.visible}),o=()=>{var i;(i=e.onClose)==null||i.call(e)};return AP.default.createElement(ss,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:o,visible:n},e.children)};r();r();var qp=w(require("react"));r();r();var fs=w(require("react"));r();r();var jn=w(require("react")),Vp=w(require("classnames"));Y();r();r();var uo=w(require("react")),Ua=require("@fortawesome/free-solid-svg-icons"),Fh=require("@fortawesome/react-fontawesome"),D_=w(require("bignumber.js")),Ci=w(require("classnames"));Y();r();r();r();var k_=w(require("react")),bP=require("@fortawesome/react-fontawesome"),Lh=w(require("classnames"));var aV=({label:e,onClick:n,showLabels:o,isInactive:i,paginationButtonIcon:c,className:p,"data-testid":l,styles:u})=>k_.default.createElement("div",{onClick:n,"data-testid":l,className:(0,Lh.default)(u==null?void 0:u.paginationEdgeButton,p,{[u==null?void 0:u.inactive]:i})},k_.default.createElement(bP.FontAwesomeIcon,{icon:c,className:u==null?void 0:u.paginationEdgeButtonIcon}),k_.default.createElement("span",{className:(0,Lh.default)(u==null?void 0:u.paginationEdgeButtonText,{[u==null?void 0:u.show]:o})},e)),Nh=I(aV,{ssrStyles:()=>Promise.resolve().then(()=>(bh(),Ih)),clientStyles:()=>(bh(),j(Ih)).default});r();r();r();var Mh=w(HP()),Up=w(ok());Y();r();var ak=({currentPage:e,totalPages:n})=>{let o=e-1,i=e+1;if(n<=7)return(0,Up.default)(1,n+1).map(B=>String(B));let c=(B,z)=>B.includes(e)?B:B.slice(0,7-z.length-1),p=(0,Mh.default)(i-1,3,5),l=(0,Mh.default)(o+1,n-3,n-1),u=p?(0,Up.default)(1,i+1):(0,Up.default)(1,5-1),h=l?(0,Up.default)(o,n+1):(0,Up.default)(n-3+1,n+1),g=c(u,h),T=c(h.reverse(),u),y=g.concat(T),C=[hp,o,e,i,hp],[N]=g,[A]=T;return(y.includes(e)?[...g,hp,...T.reverse()]:[N,...C,A]).map(B=>String(B))};var QV=({currentPage:e=1,totalPages:n,className:o,disabledClassName:i,buttonsClassNames:c,onPageChange:p,isDisabled:l,showLabels:u,showEdgeButtons:h=!0,styles:g})=>{let[T,y]=(0,uo.useState)(e),C=T===1,N=T===n,A=i?{[i]:l}:{},P=ak({currentPage:T,totalPages:n}),W=G=>{G!==T&&(y(G),p(G))},B=G=>{tt(G)&&W(new D_.default(G).toNumber())},z=G=>Z=>{Z.preventDefault(),W(G)},K=G=>tt(G)&&new D_.default(G).isGreaterThanOrEqualTo(100),R=G=>new D_.default(G).isEqualTo(T);return(0,uo.useEffect)(()=>{e!==T&&y(e)},[e,T]),n===1?null:uo.default.createElement("div",{className:(0,Ci.default)(g==null?void 0:g.pagination,o)},h&&uo.default.createElement("span",{onClick:z(1),className:(0,Ci.default)(g==null?void 0:g.paginationAngle,c,b({[g==null?void 0:g.disabled]:C},A))},uo.default.createElement(Fh.FontAwesomeIcon,{className:g==null?void 0:g.paginationAngleIcon,icon:Ua.faAnglesLeft})),uo.default.createElement(Nh,{label:"Prev",onClick:z(T-1),"data-testid":"prevBtn",paginationButtonIcon:Ua.faAngleLeft,isInactive:C,showLabels:u,className:(0,Ci.default)(g==null?void 0:g.paginationEdgeButton,c,{[g==null?void 0:g.disabled]:l},A)}),uo.default.createElement("div",{className:g==null?void 0:g.paginationItems},P.map((G,Z)=>uo.default.createElement("div",{key:`page-item-${Z}`,className:g==null?void 0:g.paginationItemWrapper},tt(G)?uo.default.createElement("div",{onClick:()=>B(G),className:(0,Ci.default)(g==null?void 0:g.paginationItem,c,{[g==null?void 0:g.active]:R(G)},{[g==null?void 0:g.ellipsis]:!tt(G)},{[g==null?void 0:g.disabled]:l},{[g==null?void 0:g.hundreds]:K(G)},A)},uo.default.createElement("span",{className:g==null?void 0:g.paginationItemText},G)):uo.default.createElement("span",{className:g==null?void 0:g.paginationItemText},G)))),uo.default.createElement(Nh,{label:"Next",onClick:z(T+1),"data-testid":"nextBtn",paginationButtonIcon:Ua.faAngleRight,isInactive:N,showLabels:u,className:(0,Ci.default)(g==null?void 0:g.paginationEdgeButton,g==null?void 0:g.reversed,c,{[g==null?void 0:g.disabled]:l},A)}),h&&uo.default.createElement("span",{onClick:z(n),className:(0,Ci.default)(g==null?void 0:g.paginationAngle,c,b({[g==null?void 0:g.disabled]:N},A))},uo.default.createElement(Fh.FontAwesomeIcon,{className:g==null?void 0:g.paginationAngleIcon,icon:Ua.faAnglesRight})))},Rh=I(QV,{ssrStyles:()=>Promise.resolve().then(()=>(Oh(),Bh)),clientStyles:()=>(Oh(),j(Bh)).default});r();r();var pr=w(require("react")),qh=w(require("classnames"));r();var Ga=w(require("react")),ck=w(require("classnames"));Y();var n$=e=>{var o;let n=(o=e.styles)!=null?o:{};return Ga.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ga.default.createElement("span",{className:n["int-amount"],"data-testid":"formatAmountInt"},"..."))},o$=(e,n)=>{var N,A,P;let{value:o,showLastNonZeroDecimal:i=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:Xt,l=e.decimals!=null?e.decimals:Mn,u=(N=e.styles)!=null?N:{},h=(A=e.globalStyles)!=null?A:{},g=vn({input:o,decimals:l,digits:p,showLastNonZeroDecimal:i,addCommas:!0}),T=g.split("."),y=T.length===1,C=g!==yo;if(p>0&&y&&C){let W="";for(let B=1;B<=p;B++)W=W+yo;T.push(W)}return Ga.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ga.default.createElement("span",{className:u["int-amount"],"data-testid":"formatAmountInt"},T[0]),T.length>1&&Ga.default.createElement("span",{className:u.decimals,"data-testid":"formatAmountDecimals"},".",T[1]),c&&Ga.default.createElement("span",{className:(0,ck.default)(u.symbol,e.token&&h.textMuted),"data-testid":"formatAmountSymbol"},` ${(P=e.token)!=null?P:n}`))},t$=e=>{let{value:n}=e;return tt(n)?o$(e,e.egldLabel||""):n$(e)},r$=e=>{let n=e.egldLabel||ir(),o=q(b({},e),{egldLabel:n});return Ga.default.createElement(t$,b({},o))},On=I(r$,{ssrStyles:()=>Promise.resolve().then(()=>(Gh(),Uh)),clientStyles:()=>(Gh(),j(Uh)).default});r();r();var Fn=w(require("react")),mk=w(require("classnames"));Y();var i$=({text:e,className:n="dapp-trim","data-testid":o="trim-text-component",color:i,styles:c})=>{let[p,l]=(0,Fn.useState)(0),[u,h]=(0,Fn.useState)(!1),g=(0,Fn.useRef)(document==null?void 0:document.createElement("span")),T=(0,Fn.useRef)(document==null?void 0:document.createElement("span")),y=ON(p,300),C=()=>{if(g.current&&T.current){let P=T.current.offsetWidth-g.current.offsetWidth;h(P>1)}},N=()=>{l(p+1)};return(0,Fn.useEffect)(()=>(window==null||window.addEventListener("resize",N),()=>{window==null||window.removeEventListener("resize",N)})),(0,Fn.useEffect)(()=>{C()},[y]),Fn.default.createElement("span",{ref:g,className:(0,mk.default)(c==null?void 0:c.trim,i,n,{overflow:u}),"data-testid":o},Fn.default.createElement("span",{ref:T,className:c==null?void 0:c.hiddenTextRef},e),u?Fn.default.createElement(Fn.default.Fragment,null,Fn.default.createElement("span",{className:c==null?void 0:c.left},Fn.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),Fn.default.createElement("span",{className:c==null?void 0:c.ellipsis},hp),Fn.default.createElement("span",{className:c==null?void 0:c.right},Fn.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):Fn.default.createElement("span",null,e))},kn=I(i$,{ssrStyles:()=>Promise.resolve().then(()=>(Vh(),Hh)),clientStyles:()=>(Vh(),j(Hh)).default});var c$=({address:e,index:n,balance:o,selectedAddress:i,onSelectAddress:c,className:p="dapp-ledger-address-row",ledgerModalTableSelectedItemClassName:l,disabled:u=!1,styles:h})=>{var g;return pr.default.createElement("div",{onClick:()=>c({address:e,index:n}),className:(0,qh.default)(h==null?void 0:h.ledgerAddressTableBodyItem,{[l!=null?l:""]:i===e,[(g=h==null?void 0:h.ledgerAddressTableBodyItemSelected)!=null?g:""]:i===e},p)},pr.default.createElement("div",{className:(0,qh.default)(h==null?void 0:h.ledgerAddressTableBodyItemData,{disabled:u})},pr.default.createElement("input",{type:"radio",id:`check_${e}`,disabled:u,onChange:()=>c({address:e,index:n}),"data-testid":`check_${e}`,role:"button",checked:i===e,className:h==null?void 0:h.ledgerAddressTableBodyItemDataInput}),pr.default.createElement("label",{htmlFor:`check_${n}`,role:"button","data-testid":`label_${n}`,className:h==null?void 0:h.ledgerAddressTableBodyItemDataLabel},pr.default.createElement("div",{className:h==null?void 0:h.ledgerAddressTableBodyItemDataValue},pr.default.createElement(kn,{text:e})))),pr.default.createElement("div",{className:h==null?void 0:h.ledgerAddressTableBodyItemData},pr.default.createElement(On,{value:o,egldLabel:ir()})),pr.default.createElement("div",{className:h==null?void 0:h.ledgerAddressTableBodyItemData},n))},_k=I(c$,{ssrStyles:()=>Promise.resolve().then(()=>(zh(),$h)),clientStyles:()=>(zh(),j($h)).default});r();r();r();var Gp=w(require("react")),gk=require("@fortawesome/free-solid-svg-icons"),Hp=w(require("classnames"));Y();r();r();var Ha=w(require("react")),uk=require("@fortawesome/react-fontawesome"),ls=w(require("classnames"));var m$=({icon:e,title:n,action:o,iconClass:i,"data-testid":c,description:p,iconBgClass:l,iconSize:u="5x",className:h="dapp-page-state",globalStyles:g,styles:T})=>{let y=(0,Ha.useMemo)(()=>({wrapper:(0,ls.default)(T==null?void 0:T.state,g==null?void 0:g.mAuto,g==null?void 0:g.p4,g==null?void 0:g.textCenter,h),iconContainer:(0,ls.default)(g==null?void 0:g.iconState,g==null?void 0:g.mxAuto,{[l!=null?l:""]:Boolean(l)}),iconClass:(0,ls.default)(i!=null&&i),title:(0,ls.default)(g==null?void 0:g.h4,g==null?void 0:g.my4),description:g==null?void 0:g.mb3}),[g,T,h,l,i]);return Ha.default.createElement("div",{className:y.wrapper,"data-testid":c},e&&Ha.default.createElement("span",{className:y.iconContainer},Ha.default.createElement(uk.FontAwesomeIcon,{icon:e,className:y.iconClass,size:u})),n&&Ha.default.createElement("p",{className:y.title},n),p&&Ha.default.createElement("div",{className:y.description},p),o)},qn=I(m$,{ssrStyles:()=>Promise.resolve().then(()=>(Kh(),jh)),clientStyles:()=>(Kh(),j(jh)).default});var _$=({customSpinnerComponent:e,ledgerLoadingClassNames:n,customContentComponent:o,globalStyles:i,styles:c})=>{let{ledgerModalSubtitleClassName:p,ledgerModalTitleClassName:l,ledgerLoadingWrapper:u,ledgerLoadingSpinner:h}=n||{};return Gp.default.createElement("div",{className:(0,Hp.default)(c==null?void 0:c.ledgerLoadingWrapper,u),"data-testid":"ledgerLoading"},Gp.default.createElement("div",{className:(0,Hp.default)(c==null?void 0:c.ledgerLoadingHeading,l)},"Waiting for device..."),Gp.default.createElement("p",{className:(0,Hp.default)(c==null?void 0:c.ledgerLoadingDescription,p)},"It may take a few seconds..."),o,Gp.default.createElement("div",{className:(0,Hp.default)(c==null?void 0:c.ledgerLoadingSpinner,h)},e||Gp.default.createElement(qn,{iconSize:"10x",icon:gk.faCircleNotch,iconClass:(0,Hp.default)("fa-spin",i==null?void 0:i.textPrimary)})))},E_=I(_$,{ssrStyles:()=>Promise.resolve().then(()=>(Zh(),Xh)),clientStyles:()=>(Zh(),j(Xh)).default});var Tk=10,u$=500,f$=({accounts:e,addressTableClassNames:n,className:o="dapp-ledger-address-table",customContentComponent:i,dataTestId:c="addressTableContainer",loading:p,onConfirmSelectedAddress:l,onGoToSpecificPage:u,onGoToNextPage:h,onGoToPrevPage:g,onSelectAddress:T,selectedAddress:y,startIndex:C,disabledIndexes:N=[],globalStyles:A,styles:P})=>{let{ledgerModalTitleClassName:W,ledgerModalSubtitleClassName:B,ledgerModalTableHeadClassName:z,ledgerModalTableItemClassName:K,ledgerModalButtonClassName:R,ledgerModalTableNavigationButtonClassName:G,ledgerModalTableSelectedItemClassName:Z,ledgerModalTableNavigationButtonDisabledClassName:ie}=n||{},[ee,re]=(0,jn.useState)([]),pe=()=>{let _e=0;for(;N.includes(_e);)_e++;return _e};(0,jn.useEffect)(()=>{if(e.length>0&&!p&&(!y&&C===0)){let Ne=pe(),ze=e[Ne];T({address:ze,index:Ne})}},[e,y,p,C]);let ne=_e=>M(void 0,null,function*(){try{let ve=yield YI(_e);return{address:_e,balance:ve}}catch(ve){throw console.error("error fetching balance",ve),ee}});if((0,jn.useEffect)(()=>{let _e=e.map(ve=>ne(ve));re(e.map(ve=>({address:ve,balance:"..."}))),Promise.all(_e).then(ve=>{re(ve)})},[e]),p)return jn.default.createElement(E_,null);let ue=()=>{!y||l()},fe=_e=>{if(_e-1===C+1){h();return}if(_e-1===C-1){g();return}u(_e-1)},Oe=["Address","Balance","#"];return jn.default.createElement("div",{className:(0,Vp.default)(P==null?void 0:P.ledgerAddressTableWrapper,o),"data-testid":c},jn.default.createElement("div",{className:P==null?void 0:P.ledgerAddressTableTop},jn.default.createElement("div",{className:(0,Vp.default)(P==null?void 0:P.ledgerAddressTableHeading,W),"data-testid":`${c}Title`},"Access your wallet"),jn.default.createElement("p",{className:(0,Vp.default)(P==null?void 0:P.ledgerAddressTableDescription,B),"data-testid":`${c}SubTitle`},"Choose the wallet you want to access")),i,jn.default.createElement("div",{className:P==null?void 0:P.ledgerAddressTable},jn.default.createElement("div",{className:(0,Vp.default)(P==null?void 0:P.ledgerAddressTableHeader,z)},Oe.map(_e=>jn.default.createElement("div",{key:_e,className:P==null?void 0:P.ledgerAddressTableHeaderItem},_e))),jn.default.createElement("div",{className:P==null?void 0:P.ledgerAddressTableBody},ee&&ee.map(({address:_e,balance:ve},le)=>jn.default.createElement(_k,{address:_e,balance:ve,disabled:N.includes(le),key:le+C*Tk,index:le+C*Tk,selectedAddress:y,onSelectAddress:T,className:K,ledgerModalTableSelectedItemClassName:Z})))),jn.default.createElement("div",{className:P==null?void 0:P.ledgerAddressTableBottom},jn.default.createElement(Rh,{className:P==null?void 0:P.ledgerAddressTablePagination,currentPage:C+1,totalPages:u$,onPageChange:fe,disabledClassName:ie,buttonsClassNames:G}),jn.default.createElement("button",{disabled:!y,onClick:ue,"data-testid":"confirmBtn",className:(0,Vp.default)(A==null?void 0:A.btn,A==null?void 0:A.btnPrimary,P==null?void 0:P.ledgerAddressTableButton,R)},"Access Wallet")))},xk=I(f$,{ssrStyles:()=>Promise.resolve().then(()=>(Jh(),Yh)),clientStyles:()=>(Jh(),j(Yh)).default});r();r();var $o=w(require("react")),$r=w(require("classnames"));Y();r();r();r();var yk=w(Qh()),vk=e=>{if(e<=0||isNaN(e)||!e||(0,yk.isString)(e))return"N/A time";if(e>=86400)return"more than one day";let n=Math.floor(e/3600),o=e%3600,i=Math.floor(o/60),c=o%60,p=[];return n>0&&p.push(`${n}h`),i>0&&p.push(`${i}min`),c>0&&p.push(`${c}sec`),p.join(" ")};var wk=({loginToken:e,version:n})=>{if(!e||!n)return null;let{ledgerWithUsernames:o}=BA(n),i=ar(e);if(i==null)return null;let c="For security, please confirm that your address:",p="and Auth Token:",l="are the one shown on your Ledger device screen now.";if(o){let u=vk(i.ttl),h="For security, please confirm your address:",g="and authorize:";return{data:`${i.origin} for ${u}.`,confirmAddressText:h,authText:g}}return{data:e,confirmAddressText:c,authText:p,areShownText:l}};var h$=({token:e,className:n="dapp-ledger-confirm-address",customContentComponent:o,confirmAddressClassNames:i,styles:c})=>{var A,P;let{ledgerAccount:p}=Ba(),{ledgerModalTitleClassName:l,ledgerModalConfirmDescriptionClassName:u,ledgerModalConfirmDataClassName:h,ledgerModalConfirmFooterClassName:g,ledgerModalConfirmContentClassName:T}=i||{},y=Q(ba),C=(A=y==null?void 0:y.loginToken)!=null?A:e,N=wk({loginToken:C,version:p==null?void 0:p.version});return $o.default.createElement("div",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddress,T,n),"data-testid":"ledgerConfirmAddress"},$o.default.createElement("h4",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddressHeading,l)},"Confirm Ledger Address"),o,$o.default.createElement("div",{className:c==null?void 0:c.ledgerConfirmAddressSection},$o.default.createElement("div",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddressDescription,u)},N==null?void 0:N.confirmAddressText),$o.default.createElement("div",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddressData,h)},(P=p==null?void 0:p.address)!=null?P:"")),$o.default.createElement("div",{className:c==null?void 0:c.ledgerConfirmAddressSection},$o.default.createElement("div",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddressDescription,u)},N==null?void 0:N.authText),$o.default.createElement("div",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddressData,h)},N==null?void 0:N.data),$o.default.createElement("div",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddressDescription,u)},N==null?void 0:N.areShownText)),$o.default.createElement("div",{className:(0,$r.default)(c==null?void 0:c.ledgerConfirmAddressFooter,g)},$o.default.createElement("div",null,"Select Approve on your device to confirm."),$o.default.createElement("div",null,"Or, if it does not match, close this page and"," ",$o.default.createElement("a",{href:"https://help.multiversx.com/en/",target:"_blank",rel:"noreferrer"},"contact support"),".")))},Ck=I(h$,{ssrStyles:()=>Promise.resolve().then(()=>(nT(),eT)),clientStyles:()=>(nT(),j(eT)).default});r();r();var it=w(require("react")),cr=w(require("classnames"));r();var ro=w(require("react")),T$=e=>ro.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 290 142.3",style:{enableBackground:"new 0 0 290 142.3"},xmlSpace:"preserve"},e),ro.createElement("style",{type:"text/css"},`
	.st0{filter:url(#Adobe_OpacityMaskFilter);}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_00000132080685600946463390000014083146887067534994_);}
	.st2{mask:url(#SVGID_1_);fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#212529;}
`),ro.createElement("defs",null,ro.createElement("filter",{id:"Adobe_OpacityMaskFilter",filterUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3},ro.createElement("feColorMatrix",{type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"}))),ro.createElement("mask",{maskUnits:"userSpaceOnUse",x:1,y:21.7,width:92.7,height:6.3,id:"SVGID_1_"},ro.createElement("g",{className:"st0"},ro.createElement("linearGradient",{id:"SVGID_00000042721603501377086220000002945655816276772283_",gradientUnits:"userSpaceOnUse",x1:1,y1:24.85,x2:92.9,y2:24.85},ro.createElement("stop",{offset:0,style:{stopColor:"#000000"}}),ro.createElement("stop",{offset:.1864,style:{stopColor:"#000000"}}),ro.createElement("stop",{offset:.8945,style:{stopColor:"#FFFFFF"}})),ro.createElement("rect",{x:1,y:21.7,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"url(#SVGID_00000042721603501377086220000002945655816276772283_)"},width:91.9,height:6.3}))),ro.createElement("path",{className:"st2",d:"M1,26.6V28h92.7v-1.4H1z M1,21.7v1.4h92.7v-1.4H1z"}),ro.createElement("g",null,ro.createElement("path",{className:"st3",d:"M218.8,21h-38.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v5.6c0,0.2,0.1,0.3,0.2,0.4   c0.1,0.1,0.2,0.2,0.4,0.2h38.1c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4v-5.6c0-0.1-0.1-0.3-0.2-0.4   C219.1,21.1,219,21,218.8,21z M185.2,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7   l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L185.2,25.4z M189.6,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3l0.2-0.6   l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L189.6,25.4z M194,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.6-0.8l0,0l-1-0.3   l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L194,25.4z M198.4,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8   l0,0l-1-0.3l0.1-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L198.4,25.4z M202.8,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9   l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L202.8,25.4z M207.1,25.4l-0.5,0.4l-0.6-0.9   l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L207.1,25.4z M211.5,25.4   l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4v-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3l0,0L211.5,25.4z    M215.9,25.4l-0.5,0.4l-0.6-0.9l0,0l-0.6,0.9l-0.5-0.4l0.7-0.8l0,0l-1-0.3l0.2-0.6l1,0.4l-0.1-1h0.7l-0.1,1l1-0.4l0.2,0.6l-1,0.3   l0,0L215.9,25.4z"}),ro.createElement("path",{className:"st3",d:"M283.8,9.2l-0.1-0.1c-0.2-0.2-0.3-0.3-0.5-0.5s-0.3-0.3-0.5-0.5c-0.1-0.1-0.3-0.3-0.4-0.4   c-0.6-0.6-1.2-1.1-1.8-1.6c-3.9-3-8.7-4.7-13.9-4.7h-28.1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-42.3c-0.1-0.2-0.2-0.3-0.3-0.5c-0.4-0.6-1.1-0.9-1.8-0.9h-14.7   c-0.8,0-1.4,0.4-1.8,0.9c-0.1,0.2-0.2,0.3-0.3,0.5h-13c-1.1,0-2.1,0.4-2.8,1.2c-0.7,0.7-1.2,1.8-1.2,2.8v8.8c-0.1,0-0.2,0-0.2,0   h-0.3h-29.1c-1.7,0-3.2,0.7-4.4,1.8c-1.2,1.2-1.8,2.8-1.8,4.4v0.3H92.9v8.4h12.7v0.7c0,1.7,0.7,3.2,1.8,4.4   c1.2,1.2,2.7,1.8,4.4,1.8h29.1h0.3c0.1,0,0.2,0,0.2,0v7.4c0,1.1,0.4,2.1,1.2,2.8s1.8,1.2,2.8,1.2h72.3l-0.4,0.5l-53.4,63.6   c-0.3,0.4-0.6,0.9-0.7,1.4c-0.2,0.5-0.2,1-0.2,1.5s0.2,1,0.4,1.5s0.6,0.9,1,1.2l28.9,24.3c0.4,0.3,0.9,0.6,1.4,0.7   c0.5,0.2,1,0.2,1.5,0.2s1-0.2,1.5-0.4s0.9-0.6,1.2-1l82.5-98.3l2.9-3.5C291.8,30.3,291.3,17.5,283.8,9.2z M105.1,27.9h-11v-6h11   V27.9z M277.7,45.1l-79.8,95c-0.2,0.3-0.5,0.5-0.8,0.7s-0.7,0.3-1,0.3c-0.4,0-0.7,0-1.1-0.1c-0.3-0.1-0.7-0.3-0.9-0.5l-29-24.3   c-0.3-0.2-0.5-0.5-0.7-0.8s-0.3-0.7-0.3-1c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.3-0.7,0.5-0.9l54-64.4l0.4-0.5l1-1.2l8.1-9.7l0.3-0.3   l0.3-0.3l5.2-6.2l0.3-0.4l0.3-0.4L250,10.6c4.8-5.7,11.8-8.3,18.6-7.6c0.2,0,0.5,0,0.7,0.1c0.3,0,0.6,0.1,0.9,0.1   c0.2,0,0.5,0.1,0.7,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.6,0.2,1.2,0.3,1.8,0.5c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,0.9,0.4   c0.2,0.1,0.4,0.2,0.6,0.3c0.6,0.3,1.2,0.7,1.9,1c0.4,0.2,0.8,0.5,1.2,0.8l0,0c0.4,0.3,0.8,0.6,1.1,0.9c0.1,0.1,0.2,0.2,0.3,0.2   c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.2,0.4,0.4c7.9,7.8,8.6,20.6,1.3,29.3l-4.7,5.6L277.7,45.1z    M234.2,27.8l-6.8,8.1h-60.6c-0.8,0-1.5-0.7-1.5-1.5v-20c0-0.8,0.7-1.5,1.5-1.5h65.9c0.8,0,1.5,0.7,1.5,1.5L234.2,27.8L234.2,27.8z    M141.2,34.9h-0.3h-29.1c-1.3,0-2.6-0.5-3.5-1.5c-0.9-0.9-1.5-2.2-1.5-3.5v-9.5c0-1.3,0.5-2.6,1.5-3.5c0.9-0.9,2.2-1.5,3.5-1.5   h29.1h0.3c0.1,0,0.2,0,0.2,0.1v19.4C141.3,34.8,141.3,34.9,141.2,34.9z M145.4,46.2c-0.7,0-1.4-0.3-2-0.8c-0.5-0.5-0.8-1.2-0.8-2   v-8.2v-3.4V18.1V15V5.4c0-0.7,0.3-1.4,0.8-1.9s1.2-0.8,2-0.8h12.9h19.2h42h19.2h21.4c-4.1,1.2-7.8,3.6-10.8,7.1l-14.5,17.3V14.4   c0-1.2-0.9-2.1-2.1-2.1h-65.9c-1.2,0-2.1,0.9-2.1,2.1v20c0,1.2,0.9,2.1,2.1,2.1h60.1l-8.2,9.7C218.7,46.2,145.4,46.2,145.4,46.2z"}),ro.createElement("path",{className:"st3",d:"M265.5,12.2c-6.8,0-12.2,5.4-12.2,12.2c0,6.7,5.5,12.2,12.2,12.2c6.8,0,12.2-5.4,12.2-12.2   C277.7,17.7,272.2,12.2,265.5,12.2z M265.5,35.9c-6.4,0-11.6-5.2-11.6-11.5s5.2-11.5,11.6-11.5s11.6,5.2,11.6,11.5   S271.9,35.9,265.5,35.9z"}))),Ak=T$;Y();var y$=({onClick:e,error:n,disabled:o,connectPageContent:i,customContentComponent:c,className:p="dapp-ledger-connect-button",ledgerConnectClassNames:l,globalStyles:u,styles:h})=>{let{ledgerModalTitleClassName:g,ledgerModalSubtitleClassName:T,ledgerModalErrorClassName:y,ledgerModalIconClassName:C,ledgerModalButtonClassName:N,ledgerModalFooterLinkClassName:A,ledgerModalFooterClassName:P,ledgerModalContentClassName:W}=l||{};return it.default.createElement("div",{className:(0,cr.default)(h==null?void 0:h.loginConnectContainer,p)},it.default.createElement("div",{className:(0,cr.default)(h==null?void 0:h.loginConnectContainerContent,W)},i||it.default.createElement(it.default.Fragment,null,it.default.createElement("div",{className:(0,cr.default)(h==null?void 0:h.loginConnectContainerHeading,g)},"Connect Ledger"),it.default.createElement("p",{className:(0,cr.default)(h==null?void 0:h.loginConnectContainerDescription,T)},"Unlock your device & open the MultiversX App"),n&&it.default.createElement("p",{className:(0,cr.default)(h==null?void 0:h.loginConnectContainerError,y)},n),c,it.default.createElement("div",{className:(0,cr.default)(h==null?void 0:h.loginConnectContainerIcon,C)},it.default.createElement(Ak,null))),it.default.createElement("div",{className:(0,cr.default)(h==null?void 0:h.loginConnectContainerFooter,P)},it.default.createElement("button",{onClick:e,disabled:o,"data-testid":"ledgerConnectBtn",className:(0,cr.default)(u==null?void 0:u.btn,u==null?void 0:u.btnPrimary,h==null?void 0:h.loginConnectContainerButton,N)},"Connect Ledger"),it.default.createElement("a",{href:"https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux",target:"_blank",rel:"noopener noreferrer",className:(0,cr.default)(h==null?void 0:h.loginConnectContainerLink,A)},"Having connection issues?"))))},bk=I(y$,{ssrStyles:()=>Promise.resolve().then(()=>(tT(),oT)),clientStyles:()=>(tT(),j(oT)).default});var Lk=({isLoading:e,customSpinnerComponent:n,customContentComponent:o,ledgerLoadingClassNames:i,ledgerAccount:c,error:p,confirmAddressClassNames:l,token:u,showAddressList:h,accounts:g,addressTableClassNames:T,onConfirmSelectedAddress:y,onGoToSpecificPage:C,onGoToNextPage:N,onGoToPrevPage:A,onSelectAddress:P,selectedAddress:W,startIndex:B,disabledConnectButton:z,ledgerConnectClassNames:K,onStartLogin:R})=>e?fs.default.createElement(E_,{customSpinnerComponent:n,customContentComponent:o,ledgerLoadingClassNames:i}):c!=null&&!p?fs.default.createElement(Ck,{confirmAddressClassNames:l,customContentComponent:o,token:u}):h&&!p?fs.default.createElement(xk,{accounts:g,addressTableClassNames:T,customContentComponent:o,loading:e,onConfirmSelectedAddress:y,onGoToSpecificPage:C,onGoToNextPage:N,onGoToPrevPage:A,onSelectAddress:P,selectedAddress:W==null?void 0:W.address,startIndex:B}):fs.default.createElement(bk,{customContentComponent:o,disabled:z,error:p,ledgerConnectClassNames:K,onClick:R});r();r();var zp=w(require("react")),iT=w(require("classnames"));var w$=({error:e,ledgerAccount:n,ledgerProgressBarClassNames:o,showAddressList:i,showProgressBar:c,styles:p})=>{let l=[{percentage:33,conditions:!i&&!n},{conditions:i&&!e&&!n,percentage:66},{conditions:n!=null&&!e,percentage:100}],u=(0,zp.useMemo)(()=>l.find(y=>y.conditions),[]),h=u?u.percentage:33;if(!c)return null;let{ledgerProgressBarTrackClassName:g,ledgerProgressBarThumbClassName:T}=o||{};return zp.default.createElement("div",{className:p==null?void 0:p.ledgerProgressBar},zp.default.createElement("div",{className:(0,iT.default)(p==null?void 0:p.ledgerProgressBarTrack,g)}),zp.default.createElement("div",{className:(0,iT.default)(p==null?void 0:p.ledgerProgressBarThumb,T),style:{width:`${h}%`}}))},Pk=I(w$,{ssrStyles:()=>Promise.resolve().then(()=>(aT(),rT)),clientStyles:()=>(aT(),j(rT)).default});r();r();var Wk=w(require("react"));r();r();var fo=w(require("react")),Dk=require("@fortawesome/free-solid-svg-icons"),Ek=require("@fortawesome/react-fontawesome"),sT=w(require("classnames"));var C$=e=>{let{className:n,url:o,icon:i,authorizationInfo:c,styles:p}=e,l=o.replace("https://","").replace(/\/$/,""),u=c!=null&&c.url?c.url.replace("https://","").replace(/\/$/,""):"";return fo.default.createElement(fo.default.Fragment,null,fo.default.createElement("p",{className:(0,sT.default)(p==null?void 0:p.scamPhishingAlert,n)},i||fo.default.createElement(Ek.FontAwesomeIcon,{className:p==null?void 0:p.scamPhishingAlertIcon,icon:Dk.faLock}),fo.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},fo.default.createElement("span",null,"Scam/Phishing verification:")," ",fo.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertPrefix},fo.default.createElement("strong",null,"https://"),l))),c&&c.url&&fo.default.createElement("p",{className:(0,sT.default)(p==null?void 0:p.scamPhishingAlert,p==null?void 0:p.scamPhishingAlertAuthorization,c.className)},fo.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),fo.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},fo.default.createElement("strong",null,"https://"),fo.default.createElement("span",null,u," for"),fo.default.createElement("strong",{className:p==null?void 0:p.scamPhishingAlertAuthorizationDuration},c.duration)),fo.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),fo.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},gs=I(C$,{ssrStyles:()=>Promise.resolve().then(()=>(cT(),pT)),clientStyles:()=>(cT(),j(pT)).default});$n();var Mk=({showScamPhishingAlert:e,token:n,ledgerScamPhishingAlertClassName:o})=>{if(!e)return null;let i=I_(n,o);return Wk.default.createElement(gs,{authorizationInfo:i,className:o,url:ye().origin})};var mT=({callbackRoute:e,customSpinnerComponent:n,customContentComponent:o,innerLedgerComponentsClasses:i,nativeAuth:c,onLoginRedirect:p,showProgressBar:l=!0,showScamPhishingAlert:u=!0,token:h})=>{let{ledgerAccount:g}=Ba(),[T,{error:y,isLoading:C},{accounts:N,onConfirmSelectedAddress:A,onGoToSpecificPage:P,onGoToNextPage:W,onGoToPrevPage:B,onSelectAddress:z,selectedAddress:K,showAddressList:R,startIndex:G}]=sh({callbackRoute:e,token:h,onLoginRedirect:p,nativeAuth:c}),Z=Sn(h),{addressTableClassNames:ie,confirmAddressClassNames:ee,ledgerConnectClassNames:re,ledgerLoadingClassNames:pe,ledgerProgressBarClassNames:ne,ledgerScamPhishingAlertClassName:ue}=i||{};return qp.default.createElement(qp.default.Fragment,null,qp.default.createElement(Mk,{ledgerScamPhishingAlertClassName:ue,showScamPhishingAlert:u,token:h}),qp.default.createElement(Pk,{error:y,ledgerAccount:g,ledgerProgressBarClassNames:ne,showAddressList:R,showProgressBar:l}),qp.default.createElement(Lk,b({},{accounts:N,addressTableClassNames:ie,confirmAddressClassNames:ee,customContentComponent:o,customSpinnerComponent:n,disabledConnectButton:Z,error:y,isLoading:C,ledgerAccount:g,ledgerConnectClassNames:re,ledgerLoadingClassNames:pe,onConfirmSelectedAddress:A,onGoToSpecificPage:P,onGoToNextPage:W,onGoToPrevPage:B,onSelectAddress:z,onStartLogin:T,selectedAddress:K,showAddressList:R,startIndex:G,token:h})))};var I$=e=>{let{onClose:n,className:o,showLoginContent:i,wrapContentInsideModal:c,styles:p}=e;return i===!1?null:c?W_.default.createElement(Do,{closeOnEscape:e.closeOnEscape,modalConfig:{headerText:"Login with ledger",showHeader:!0,modalContentClassName:p==null?void 0:p.ledgerModalDialogContent,modalHeaderClassName:p==null?void 0:p.ledgerModalHeader,modalHeaderTextClassName:p==null?void 0:p.ledgerModalHeaderText,modalCloseButtonClassName:p==null?void 0:p.ledgerModalCloseButton,modalBodyClassName:p==null?void 0:p.ledgerModalBody,modalDialogClassName:(0,Ok.default)(p==null?void 0:p.ledgerLoginContainer,o)},onClose:n,visible:e.showLoginModal},W_.default.createElement(mT,b({},e))):W_.default.createElement(mT,b({},e))},lT=I(I$,{ssrStyles:()=>Promise.resolve().then(()=>(_T(),dT)),clientStyles:()=>(_T(),j(dT)).default});var uT=({buttonClassName:e="dapp-ledger-login-button",callbackRoute:n,children:o,className:i="dapp-ledger-login",customSpinnerComponent:c,"data-testid":p="ledgerLoginButton",disabled:l,hideButtonWhenModalOpens:u=!1,innerLedgerComponentsClasses:h,loginButtonText:g="Ledger",modalClassName:T,nativeAuth:y,onLoginRedirect:C,onContentHide:N,onContentShow:A,onModalCloses:P,onModalOpens:W,showProgressBar:B=!0,showScamPhishingAlert:z=!0,token:K,wrapContentInsideModal:R=!0})=>{let{disabledConnectButton:G,handleCloseModal:Z,handleOpenModal:ie,shouldRenderButton:ee,showContent:re,showModal:pe}=ms({hideButtonWhenModalOpens:u,onContentHide:N,onContentShow:A,onModalCloses:P,onModalOpens:W,token:K,wrapContentInsideModal:R});return hs.default.createElement(hs.default.Fragment,null,ee&&hs.default.createElement(Cn,{btnClassName:e,className:i,"data-testid":p,disabled:l||G,onLogin:ie,text:g},o),hs.default.createElement(lT,{callbackRoute:n,className:T,customSpinnerComponent:c,innerLedgerComponentsClasses:h,nativeAuth:y,onClose:Z,onLoginRedirect:C,showLoginContent:re,showLoginModal:pe,showProgressBar:B,showScamPhishingAlert:z,token:K,wrapContentInsideModal:R}))};r();r();var M_=w(require("react"));Y();r();r();si();var Fk=()=>{var e,n;return Boolean(((e=_o.safeWindow)==null?void 0:e.isOpera)&&((n=_o.safeWindow)==null?void 0:n.elrond))};var b$=Fk(),fT=({token:e,className:n="dapp-opera-login",children:o,callbackRoute:i,buttonClassName:c,nativeAuth:p,loginButtonText:l="Opera Crypto Wallet",onLoginRedirect:u,disabled:h,"data-testid":g="operaLoginButton"})=>{let T=Sn(e),[y]=Jg({callbackRoute:i,token:e,onLoginRedirect:u,nativeAuth:p});return b$?M_.default.createElement(Cn,{onLogin:()=>{y()},className:n,btnClassName:c,text:l,disabled:h||T,"data-testid":g},o):M_.default.createElement(M_.default.Fragment,null)};r();r();var Rk=w(require("react"));var L$=({token:e,className:n="dapp-passkey-login",children:o,callbackRoute:i,buttonClassName:c="dapp-default-login-button",nativeAuth:p,loginButtonText:l="Passkey",onLoginRedirect:u,disabled:h})=>{let[g]=gh({callbackRoute:i,token:e,onLoginRedirect:u,nativeAuth:p}),T=Sn(e);return Rk.default.createElement(Cn,{onLogin:()=>{g()},className:n,btnClassName:c,text:l,disabled:h||T},o)},gT=I(L$,{ssrStyles:()=>Promise.resolve().then(()=>(Si(),wi)),clientStyles:()=>(Si(),j(wi)).default});r();r();var Ts=w(require("react"));r();r();var F_=w(require("react"));r();r();var Rn=w(require("react")),zk=require("@fortawesome/free-solid-svg-icons"),jr=w(require("classnames")),qk=w(require("qrcode"));r();var Ai=w(require("react")),N$=e=>Ai.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 31.114 44.981",width:16,height:16},e),Ai.createElement("g",{transform:"translate(-47.168 -21.519)"},Ai.createElement("g",{transform:"translate(-247.872 -130.693)"},Ai.createElement("path",{d:"M355.676,152.213l-3.832,17.8h-9.661Z",transform:"translate(-40.089 1)",fillRule:"evenodd",fill:"#fff"}),Ai.createElement("path",{d:"M326.45,271.184l-7.053,9.379H295.04l7.054-9.379Z",transform:"translate(0 -101.17)",fillRule:"evenodd",fill:"#fff"}),Ai.createElement("path",{d:"M381.139,333.864l-13.493,17.8,3.832-17.8Z",transform:"translate(-61.742 -155.472)",fillRule:"evenodd",fill:"#fff"})))),Uk=N$;Y();Nn();r();r();var Dn=w(require("react")),O_=require("@fortawesome/free-solid-svg-icons"),hT=require("@fortawesome/react-fontawesome"),qr=w(require("classnames"));r();var zr=w(require("react"));r();var B_=w(require("react")),P$=e=>B_.createElement("svg",b({width:235,height:235,viewBox:"0 0 235 235",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B_.createElement("rect",{width:235,height:235,rx:72,fill:"#010101"}),B_.createElement("path",{d:"M126.493 117.923L200.962 78.0313L188.455 54L120.231 81.5772C118.479 82.2909 116.521 82.2909 114.769 81.5772L46.5451 54L34 78.1084L108.468 118L34 157.892L46.5451 182L114.769 154.211C116.521 153.497 118.479 153.497 120.231 154.211L188.455 181.865L201 157.757L126.493 117.923Z",fill:"#23F7DD"})),Gk=P$;var Hk=o=>{var i=o,{src:e}=i,n=_n(i,["src"]);var l;let[c,p]=(0,zr.useState)(!1);return(0,zr.useEffect)(()=>{p(!1)},[e]),zr.default.createElement(zr.default.Fragment,null,c?zr.default.createElement(Gk,{className:(l=n==null?void 0:n.className)!=null?l:""}):zr.default.createElement("img",b({onError:()=>{p(!0)},src:e},n)))};var D$=({connectExisting:e,removeExistingPairing:n,activePairings:o,className:i="dapp-wallet-connect-pairing-list",pairingListClasses:c,styles:p})=>{let[l,u]=(0,Dn.useState)(""),{leadClassName:h,wrapperClassName:g,buttonClassName:T,iconClassName:y,loaderClassName:C,detailsClassName:N,removeClassName:A}=c||{};return(0,Dn.useEffect)(()=>{u("")},[o]),Dn.default.createElement("div",{className:(0,qr.default)(p==null?void 0:p.xPortalPairings,i)},Dn.default.createElement("p",{className:(0,qr.default)(p==null?void 0:p.xPortalPairingsLead,h)},"or choose an existing pairing:"),Dn.default.createElement("div",{className:(0,qr.default)(p==null?void 0:p.xPortalPairingsList,g)},o.map(P=>{var W,B;return Dn.default.createElement("button",{type:"button",className:(0,qr.default)(p==null?void 0:p.xPortalPairingButton,T),key:P.topic,onClick:()=>{e(P),u(P.topic)}},P.peerMetadata&&Dn.default.createElement(Dn.default.Fragment,null,l===P.topic?Dn.default.createElement(hT.FontAwesomeIcon,{icon:O_.faCircleNotch,className:(0,qr.default)("fa-spin","slow-spin",p==null?void 0:p.xPortalPairingLoader,C)}):Dn.default.createElement(Dn.default.Fragment,null,((B=(W=P.peerMetadata)==null?void 0:W.icons)==null?void 0:B[0])&&Dn.default.createElement(Hk,{src:P.peerMetadata.icons[0],alt:P.peerMetadata.name,className:(0,qr.default)(p==null?void 0:p.xPortalPairingImage,y)})),Dn.default.createElement("div",{className:(0,qr.default)(p==null?void 0:p.xPortalPairingDetails,N)},Dn.default.createElement("strong",{className:p==null?void 0:p.xPortalPairingDetail},l===P.topic?`Confirm on ${P.peerMetadata.name}`:P.peerMetadata.name),Dn.default.createElement("span",{className:p==null?void 0:p.xPortalPairingDetail},P.peerMetadata.description),Dn.default.createElement("span",{className:p==null?void 0:p.xPortalPairingDetail},P.peerMetadata.url)),Dn.default.createElement("div",{className:(0,qr.default)(p==null?void 0:p.xPortalPairingRemove,A),onClick:z=>{z.stopPropagation(),n(P.topic)}},Dn.default.createElement(hT.FontAwesomeIcon,{icon:O_.faTimes}))))})))},$k=I(D$,{ssrStyles:()=>Promise.resolve().then(()=>(bi(),Ii)),clientStyles:()=>(bi(),j(Ii)).default});var E$=({callbackRoute:e,className:n="dapp-wallet-connect-login-modal",customSpinnerComponent:o,innerWalletConnectComponentsClasses:i,lead:c="Scan the QR code using the xPortal App",loginButtonText:p="xPortal App",logoutRoute:l,nativeAuth:u,onLoginRedirect:h,showScamPhishingAlert:g=!0,title:T="Login with the xPortal App",token:y,globalStyles:C,styles:N,customRequestMethods:A=[]})=>{var He;let[P,{error:W,isLoading:B},{connectExisting:z,removeExistingPairing:K,uriDeepLink:R,walletConnectUri:G,wcPairings:Z}]=dh({callbackRoute:e,token:y,nativeAuth:u,onLoginRedirect:h,logoutRoute:l,customRequestMethods:A}),[ie,ee]=(0,Rn.useState)(""),{containerContentClassName:re,containerScamPhishingAlertClassName:pe,containerTitleClassName:ne,containerSubtitleClassName:ue,containerErrorClassName:fe,containerQrCodeClassName:Oe,containerLoaderClassName:_e,containerButtonClassName:ve,walletConnectPairingListClassNames:le}=i||{},Ne=GN(),ze=(He=Z==null?void 0:Z.filter(Me=>{let Se=Z.some(Le=>{var xe,Ae,ce,Pe;return((xe=Me.peerMetadata)==null?void 0:xe.name)===((Ae=Le==null?void 0:Le.peerMetadata)==null?void 0:Ae.name)&&((ce=Me.peerMetadata)==null?void 0:ce.url)===((Pe=Le==null?void 0:Le.peerMetadata)==null?void 0:Pe.url)&&Me.expiry<Le.expiry});return Boolean(Me.active)&&Me.peerMetadata&&!Se}))!=null?He:[],Zn=()=>M(void 0,null,function*(){if(!G)return;let Me=yield qk.default.toString(G,{type:"svg"});Me&&ee(Me)});(0,Rn.useEffect)(()=>{Zn()},[G]),(0,Rn.useEffect)(()=>{P()},[]);let Wn=g?I_(y,pe):void 0;return Rn.default.createElement(Rn.default.Fragment,null,g&&Rn.default.createElement(gs,{url:ye().origin,authorizationInfo:Wn,className:pe}),Rn.default.createElement("div",{className:(0,jr.default)(N==null?void 0:N.xPortalContent,re)},Rn.default.createElement("div",{className:(0,jr.default)(N==null?void 0:N.xPortalContainerHeading,ne)},T),Rn.default.createElement("div",{className:(0,jr.default)(N==null?void 0:N.xPortalContainerSubheading,ue)},c),Rn.default.createElement("div",null,W&&Rn.default.createElement("p",{className:(0,jr.default)(N==null?void 0:N.xPortalContainerError,fe)},W)),B||!ie?Rn.default.createElement("div",{className:(0,jr.default)(N==null?void 0:N.xPortalLoader,_e)},o||Rn.default.createElement(qn,{iconSize:"10x",icon:zk.faCircleNotch,iconClass:(0,jr.default)("fa-spin",C==null?void 0:C.textPrimary)})):Rn.default.createElement("div",{className:(0,jr.default)(N==null?void 0:N.xPortalQrCode,Oe),dangerouslySetInnerHTML:{__html:ie}}),Ne&&Rn.default.createElement("a",{id:"accessWalletBtn","data-testid":"accessWalletBtn",href:R,rel:"noopener noreferrer nofollow",target:"_blank",className:(0,jr.default)(C==null?void 0:C.btn,C==null?void 0:C.btnPrimary,N==null?void 0:N.xPortalContainerButton,ve)},Rn.default.createElement(Uk,{className:N==null?void 0:N.xPortalContainerButtonIcon}),p),ze.length>0&&Rn.default.createElement($k,{activePairings:ze,connectExisting:z,removeExistingPairing:K,className:n,pairingListClasses:le})))},TT=I(E$,{ssrStyles:()=>Promise.resolve().then(()=>(bi(),Ii)),clientStyles:()=>(bi(),j(Ii)).default});var W$=e=>{let{className:n,onClose:o,showLoginContent:i,showLoginModal:c,wrapContentInsideModal:p,styles:l}=e,u=()=>{o==null||o()};return i===!1?null:p?F_.default.createElement(Do,{className:n,modalConfig:{headerText:"Login using the xPortal App",showHeader:!0,modalContentClassName:l==null?void 0:l.xPortalModalDialogContent,modalHeaderClassName:l==null?void 0:l.xPortalModalHeader,modalHeaderTextClassName:l==null?void 0:l.xPortalModalHeaderText,modalCloseButtonClassName:l==null?void 0:l.xPortalModalCloseButton,modalBodyClassName:l==null?void 0:l.xPortalModalBody,modalDialogClassName:l==null?void 0:l.xPortalLoginContainer},onClose:u,visible:c},F_.default.createElement(TT,b({},e))):F_.default.createElement(TT,b({},e))},xT=I(W$,{ssrStyles:()=>Promise.resolve().then(()=>(bi(),Ii)),clientStyles:()=>(bi(),j(Ii)).default});r();var yT=({buttonClassName:e="dapp-wallet-connect-login-button",callbackRoute:n,children:o,className:i="dapp-wallet-connect-login",customSpinnerComponent:c,"data-testid":p,disabled:l,hideButtonWhenModalOpens:u=!1,innerWalletConnectComponentsClasses:h,isWalletConnectV2:g=!0,lead:T="Scan the QR code using the xPortal App",loginButtonText:y="xPortal App",logoutRoute:C,modalClassName:N,nativeAuth:A,onLoginRedirect:P,onContentHide:W,onContentShow:B,onModalCloses:z,onModalOpens:K,showScamPhishingAlert:R,title:G="Login with the xPortal App",token:Z,wrapContentInsideModal:ie=!0,customRequestMethods:ee=[]})=>{let{disabledConnectButton:re,handleCloseModal:pe,handleOpenModal:ne,shouldRenderButton:ue,showContent:fe,showModal:Oe}=ms({hideButtonWhenModalOpens:u,onContentHide:W,onContentShow:B,onModalCloses:z,onModalOpens:K,token:Z,wrapContentInsideModal:ie});return Ts.default.createElement(Ts.default.Fragment,null,ue&&Ts.default.createElement(Cn,{btnClassName:e,className:i,"data-testid":p,disabled:l||re,onLogin:ne,text:y},o),Ts.default.createElement(xT,{callbackRoute:n,className:N,customSpinnerComponent:c,innerWalletConnectComponentsClasses:h,isWalletConnectV2:g,lead:T,loginButtonText:y,logoutRoute:C,nativeAuth:A,onClose:pe,onLoginRedirect:P,showLoginContent:fe,showLoginModal:Oe,showScamPhishingAlert:R,title:G,token:Z,wrapContentInsideModal:ie,customRequestMethods:ee}))};r();r();r();var jk=w(require("react"));var vT=({children:e,token:n,className:o="dapp-web-wallet-login",callbackRoute:i,buttonClassName:c,nativeAuth:p,"data-testid":l,loginButtonText:u="MultiversX Web Wallet",disabled:h,customWalletAddress:g})=>{let[T]=ps({callbackRoute:i,nativeAuth:p,token:n,customWalletAddress:g}),y=Sn(n);return jk.default.createElement(Cn,{onLogin:()=>{T()},className:o,btnClassName:c,text:u,"data-testid":l,disabled:h||y},e)};$n();var B$=({loginRoute:e,title:n="Login",className:o="dapp-unlock-page",LedgerLoginButtonText:i="Ledger",description:c="Pick a login method",WalletConnectLoginButtonText:p="xPortal App",ExtensionLoginButtonText:l="Extension",PasskeyLoginButtonText:u="Passkey",OperaWalletLoginButtonText:h="Opera Crypto Wallet",IframeLoginButtonText:g="Embeded web wallet",WebWalletLoginButtonText:T="Web wallet",globalStyles:y,styles:C})=>{let N={wrapper:(0,xs.default)(C==null?void 0:C.home,y==null?void 0:y.dFlex,y==null?void 0:y.flexFill,y==null?void 0:y.alignItemsCenter,o),title:y==null?void 0:y.mb4,description:y==null?void 0:y.mb4,cardContainer:y==null?void 0:y.mAuto,card:(0,xs.default)(y==null?void 0:y.card,y==null?void 0:y.my4,y==null?void 0:y.textCenter),cardBody:(0,xs.default)(y==null?void 0:y.cardBody,y==null?void 0:y.py4,y==null?void 0:y.px2,y==null?void 0:y.pxSm2,y==null?void 0:y.mxLg4)},{isLoggedIn:A}=Oa();return(0,Co.useEffect)(()=>{A&&window&&rd(e)},[A]),Co.default.createElement("div",{className:N.wrapper},Co.default.createElement("div",{className:N.cardContainer},Co.default.createElement("div",{className:N.card},Co.default.createElement("div",{className:N.cardBody},Co.default.createElement("h4",{className:(0,xs.default)(y==null?void 0:y.h4,y==null?void 0:y.title)},n),Co.default.createElement("p",{className:N.description},c),Co.default.createElement(vh,{callbackRoute:e,loginButtonText:l}),Co.default.createElement(gT,{callbackRoute:e,loginButtonText:u}),Co.default.createElement(Ah,{callbackRoute:e,loginButtonText:g}),Co.default.createElement(fT,{callbackRoute:e,loginButtonText:h}),Co.default.createElement(vT,{callbackRoute:e,loginButtonText:T}),Co.default.createElement(uT,{loginButtonText:i,callbackRoute:e}),Co.default.createElement(yT,{callbackRoute:e,loginButtonText:p})))))},Xk=I(B$,{ssrStyles:()=>Promise.resolve().then(()=>(ST(),wT)),clientStyles:()=>(ST(),j(wT)).default});r();r();var Li=w(require("react")),IT=w(require("classnames"));r();var U_=w(require("react")),O$=e=>U_.createElement("svg",b({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),U_.createElement("g",null,U_.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),G_=O$;var Yk=({amount:e,displayAsUsd:n,addEqualSign:o,egldIcon:i,className:c,showTokenLabel:p=!0,styles:l,tokenLabel:u,showTokenLabelSup:h,"data-testid":g})=>{let[T,y]=e.split("."),C=n&&T.indexOf("$")<0?`$${T}`:T,A=(()=>{let B={processedMainBalance:C};return o&&n&&(B.approximation="\u2248"),y&&(B.decimalBalance=`.${y}`),!n&&p&&(B.tokenLabel=` ${u}`),B})(),W=[A.approximation,A.processedMainBalance,A.decimalBalance,A.tokenLabel].reduce((B,z)=>z?B.concat(z):B,"");return Li.default.createElement("div",{className:(0,IT.default)(l==null?void 0:l.balance,c),"data-testid":g,"data-value":W},i&&!n&&Li.default.createElement(G_,{className:l==null?void 0:l.balanceSymbol}),A.approximation&&Li.default.createElement("span",{className:l==null?void 0:l.balanceApproximation},A.approximation),A.processedMainBalance&&Li.default.createElement("span",{className:l==null?void 0:l.balanceMain},C),A.decimalBalance&&Li.default.createElement("span",{className:l==null?void 0:l.balanceDecimals},A.decimalBalance),A.tokenLabel&&Li.default.createElement("sup",{className:(0,IT.default)(l==null?void 0:l.balanceSuffix,{[l==null?void 0:l.balanceSuffixSup]:h})},A.tokenLabel))},jp=I(Yk,{ssrStyles:()=>Promise.resolve().then(()=>(AT(),CT)),clientStyles:()=>(AT(),j(CT)).default});r();var Qk=w(require("react"));Y();var Jk=!1,R$=e=>{Jk||(console.warn('!!! Be aware !!! The "Denominate" component is deprecated. Please use "FormatAmount" instead.'),Jk=!0);let n=e.egldLabel||XS,o=q(b({},e),{egldLabel:n});return Qk.default.createElement(On,b({},o))};r();r();r();r();var NT=w(require("react")),nD=require("@fortawesome/free-solid-svg-icons"),oD=require("@fortawesome/react-fontawesome"),tD=w(require("classnames"));var G$=h=>{var g=h,{page:e,text:n,className:o="dapp-explorer-link",children:i,globalStyles:c,customExplorerIcon:p,styles:l}=g,u=_n(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:T}}=rt(),y=n!=null?n:NT.default.createElement(oD.FontAwesomeIcon,{icon:p!=null?p:nD.faArrowUpRightFromSquare,className:l==null?void 0:l.search}),C=nr({explorerAddress:String(T),to:e});return NT.default.createElement("a",b({href:C,target:"_blank",className:(0,tD.default)(l==null?void 0:l.link,c==null?void 0:c.ml2,o),rel:"noreferrer"},u),i!=null?i:y)},We=I(G$,{ssrStyles:()=>Promise.resolve().then(()=>(LT(),bT)),clientStyles:()=>(LT(),j(bT)).default});r();r();var H_=w(require("react")),kT=require("@fortawesome/free-solid-svg-icons"),PT=w(require("classnames"));Ve();var H$={["warning"]:kT.faExclamationTriangle},V$=kT.faExclamationTriangle;function $$({globalStyles:e}){let{notification:n,clearNotification:o}=WI(),i=()=>{o()},c=n==null?void 0:n.type,p=n?H$[c]||V$:null;return n?H_.default.createElement(Do,{onClose:o,visible:!0},H_.default.createElement(qn,{icon:p,iconClass:n==null?void 0:n.iconClassName,iconBgClass:(0,PT.default)(e==null?void 0:e.p4,e==null?void 0:e.roundedBgCircle),iconSize:"3x",title:n==null?void 0:n.title,description:n==null?void 0:n.description,action:H_.default.createElement("button",{className:(0,PT.default)(e==null?void 0:e.btn,e==null?void 0:e.btnPrimary),onClick:i},"Done")})):null}var z$=I($$,{});r();var ys=w(require("react")),V_=w(require("classnames"));r();var aD=w(require("react")),iD=w(require("classnames"));var j$=({color:e,"data-testid":n,className:o="dapp-dot",globalStyles:i})=>aD.default.createElement("span",{className:(0,iD.default)(i==null?void 0:i.dot,e,o),"data-testid":n}),pD=I(j$,{ssrStyles:()=>Promise.resolve().then(()=>(Xr(),Kr)),clientStyles:()=>(Xr(),j(Kr)).default});var K$=({totalSteps:e,currentStep:n,className:o="dapp-progress-steps",globalStyles:i})=>{let c=[];for(let p=1;p<=e;p+=1){let l=n===p,u=l||p<n?i==null?void 0:i.bgPrimary:i==null?void 0:i.bgSecondary;c.push(ys.default.createElement(pD,{"data-testid":`step${p}${l?"active":""}`,key:p,color:u,className:l?"active":""}))}return ys.default.createElement("div",{className:(0,V_.default)(i==null?void 0:i.progressSteps,i==null?void 0:i.flexRow,i==null?void 0:i.justifyContentCenter,o)},ys.default.createElement("div",{className:(0,V_.default)(i==null?void 0:i.steps,i==null?void 0:i.flexRow,i==null?void 0:i.justifyContentCenter,i==null?void 0:i.alignItemsCenter,i==null?void 0:i.positionRelative)},ys.default.createElement("hr",{className:(0,V_.default)(i==null?void 0:i.positionAbsolute,i==null?void 0:i.w100,i==null?void 0:i.m0)}),c))},X$=I(K$,{ssrStyles:()=>Promise.resolve().then(()=>(Xr(),Kr)),clientStyles:()=>(Xr(),j(Kr)).default});r();r();var Zp=w(require("react"));Ve();r();r();var ET=w(require("react"));r();var Pi=w(require("react")),dD=require("@fortawesome/free-solid-svg-icons");r();var DT=w(require("react"));r();var Ni=w(require("react")),Kp=require("@fortawesome/free-solid-svg-icons"),$_=require("@fortawesome/react-fontawesome"),z_=w(require("classnames"));r();var J$=({type:e,globalStyles:n,styles:o})=>{switch(e){case"info":return Ni.default.createElement("div",{className:(0,z_.default)(o==null?void 0:o.transactionsStatusToastIcon,n==null?void 0:n.success)},Ni.default.createElement($_.FontAwesomeIcon,{icon:Kp.faInfo,className:o==null?void 0:o.svg,size:"5x"}));case"warning":return Ni.default.createElement("div",{className:(0,z_.default)(o==null?void 0:o.transactionsStatusToastIcon,n==null?void 0:n.warning,o==null?void 0:o.warningIcon)},Ni.default.createElement($_.FontAwesomeIcon,{icon:Kp.faWarning,className:o==null?void 0:o.svg,size:"5x"}));case"error":return Ni.default.createElement("div",{className:(0,z_.default)(o==null?void 0:o.transactionsStatusToastIcon,n==null?void 0:n.danger,o==null?void 0:o.errorIcon)},Ni.default.createElement($_.FontAwesomeIcon,{icon:Kp.faTimes,className:o==null?void 0:o.svg,size:"5x"}));default:return null}},sD=I(J$,{ssrStyles:()=>Promise.resolve().then(()=>(ws(),vs)),clientStyles:()=>(ws(),j(vs)).default});var Q$=({type:e,message:n,styles:o})=>DT.default.createElement("div",{className:o==null?void 0:o.transactionsStatusToastContent},DT.default.createElement(sD,{type:e}),n),mD=I(Q$,{ssrStyles:()=>Promise.resolve().then(()=>(ws(),vs)),clientStyles:()=>(ws(),j(vs)).default});Y();var q_=({signError:e,canceledTransactionsMessage:n,onDelete:o})=>{let i=Q(Rc),c=(0,Pi.useMemo)(()=>e||n||kS,[e,n]),p=(0,Pi.useMemo)(()=>e?"error":n?"warning":"info",[e,n]);return(0,Pi.useEffect)(()=>{var l;jN({toastId:`${JS}-${Date.now()}`,title:"Transaction canceled",duration:(l=i.cancelTransactionToastDuration)!=null?l:2e4,component:()=>Pi.default.createElement(mD,{type:p,message:c}),onClose:()=>o==null?void 0:o(),icon:dD.faWarning})},[]),null};var _D=({Screen:e,verifyReceiverScam:n,className:o})=>{if(!e)return null;let{callbackRoute:i,transactions:c,error:p,sessionId:l,hasTransactions:u,onAbort:h,canceledTransactionsMessage:g}=v_(),T=o_(),{providerType:y}=Bn(),C=()=>{h(l)},N=p||T,A={handleClose:C,error:N,sessionId:l,transactions:c||[],providerType:y,callbackRoute:i,className:o,verifyReceiverScam:n},P={signError:N,canceledTransactionsMessage:g},W=Boolean(N)||Boolean(g);return!W&&!u?null:W?ET.default.createElement(q_,b({},P)):ET.default.createElement(e,b({},A))};r();var WT=w(require("react"));$n();var lD=({Screen:e,GuardianScreen:n,verifyReceiverScam:o,className:i})=>{var B;if(!e)return null;let{transactionsToSign:c,error:p,hasTransactions:l,onAbort:u,canceledTransactionsMessage:h}=Op(),g=o_(),{providerType:T}=Bn(),{isGuarded:y}=wn(),C=()=>{u(c==null?void 0:c.sessionId)},N=p||g,A={handleClose:C,GuardianScreen:n,isGuarded:y,error:N,sessionId:c==null?void 0:c.sessionId,transactions:(B=c==null?void 0:c.transactions)!=null?B:[],providerType:T,callbackRoute:(c==null?void 0:c.callbackRoute)||nt(),className:i,verifyReceiverScam:o},P={signError:N,canceledTransactionsMessage:h,onDelete:C},W=Boolean(N)||Boolean(h);return!W&&!l?null:W?WT.default.createElement(q_,b({},P)):WT.default.createElement(e,b({},A))};r();r();r();var j_=w(require("react")),fD=require("@fortawesome/free-solid-svg-icons"),OT=w(require("classnames"));Y();var oz=({handleClose:e,error:n,title:o,description:i,sessionId:c,className:p="dapp-extension-modal",modalContentClassName:l,globalStyles:u,styles:h})=>{let g=Fa(),T={wrapper:(0,OT.default)(h==null?void 0:h.modalContainer,h==null?void 0:h.extension,p),icon:u==null?void 0:u.textWhite,closeBtn:(0,OT.default)(u==null?void 0:u.btn,u==null?void 0:u.btnCloseLink,u==null?void 0:u.btnDark,u==null?void 0:u.textWhite,u==null?void 0:u.mt2)},y=C=>{C.preventDefault(),e(),g(c)};return j_.default.createElement(Do,{onClose:e,modalConfig:{modalDialogClassName:T.wrapper},visible:!0},j_.default.createElement(qn,{icon:n?fD.faTimes:null,iconClass:T.icon,className:l,iconBgClass:n?u==null?void 0:u.bgDanger:u==null?void 0:u.bgWarning,iconSize:"3x",title:o,description:i,action:j_.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:y,className:T.closeBtn},"Close")}))},sr=I(oz,{ssrStyles:()=>Promise.resolve().then(()=>(BT(),MT)),clientStyles:()=>(BT(),j(MT)).default});r();r();var gD=w(require("react"));var hD=e=>{var c;let{walletAddress:n}=Q(yn),o=e.error?e.error:((c=e.transactions)==null?void 0:c.length)>1?"Check your MultiversX Wallet to sign the transactions":"Check your MultiversX Wallet to sign the transaction",i=q(b({},e),{description:o,title:`Confirm on ${n}`});return gD.default.createElement(sr,b({},i))};r();r();var TD=w(require("react"));var FT=e=>{var i;let n=e.error?e.error:((i=e.transactions)==null?void 0:i.length)>1?"Check your MultiversX Wallet Extension to sign the transactions":"Check your MultiversX Wallet Extension to sign the transaction",o=q(b({},e),{description:n,title:"Confirm on MultiversX DeFi Wallet"});return TD.default.createElement(sr,b({},o))};r();r();var RT=w(require("react"));function xD(){return v_(),RT.default.createElement(RT.default.Fragment,null)}r();r();var yD=w(require("react"));var vD=e=>{var i;let n=e.error?e.error:((i=e.transactions)==null?void 0:i.length)>1?"Check your Wallet Window to sign the transactions":"Check your Wallet Window to sign the transaction",o=q(b({},e),{description:n,title:"Confirm on your authenticated provider"});return yD.default.createElement(sr,b({},o))};r();r();var Tx=w(require("react"));Ve();r();r();var Is=w(require("react")),hx=w(require("classnames"));r();r();var wD=w(require("react")),SD=require("@fortawesome/free-solid-svg-icons"),CD=w(require("classnames"));var tz=({"data-testid":e="loader",noText:n=!1,className:o="dapp-loader",globalStyles:i})=>wD.default.createElement(qn,{title:n?"":"Loading...",iconBgClass:(0,CD.default)(i==null?void 0:i.textPrimary,"fa-spin"),"data-testid":e,icon:SD.faCircleNotch,className:o}),UT=I(tz,{});r();var Un=w(require("react")),Z_=require("@fortawesome/free-solid-svg-icons"),gx=require("@fortawesome/react-fontawesome"),Wi=w(require("classnames"));Y();r();r();var Va=w(require("react")),HE=require("@multiversx/sdk-core/out"),VE=w(require("classnames"));r();r();r();var Zr=w(require("react")),tE=require("@fortawesome/free-solid-svg-icons"),rE=require("@fortawesome/react-fontawesome"),aE=w(require("classnames")),zT=w(oE());up();Ve();var iE=({className:e,data:n,onDecodeError:o,onDecode:i})=>{let c=(0,zT.default)("raw".toString()),[p,l]=(0,Zr.useState)({label:c,value:c}),u=Object.values(xo).map(g=>{let T=g.toString();return{label:(0,zT.default)(T),value:T}}),h=g=>{let T=u.find(y=>y.value===g.target.value);T&&l(T)};return(0,Zr.useEffect)(()=>{let{displayValue:g,validationWarnings:T}=$d({input:n,decodeMethod:xo[p.value]});i(g),T.length>0&&o(T)},[p,n]),Zr.default.createElement("div",{className:(0,aE.default)("transaction-data-decode",e)},Zr.default.createElement("select",{className:"transaction-data-decode-select","data-testid":"transactionDataDecode",value:p.value,onChange:h},u.map(g=>Zr.default.createElement("option",{key:g.value,value:g.value},g.label))),Zr.default.createElement(rE.FontAwesomeIcon,{icon:tE.faChevronDown,className:"transaction-data-decode-select-icon"}))};r();var $e=w(require("react")),ki=w(require("classnames"));Y();r();r();var Xp=w(require("react")),K_=require("@fortawesome/free-solid-svg-icons"),KT=require("@fortawesome/react-fontawesome"),sE=w(require("classnames"));r();ya();function Yz(e){let n=!1,o=document==null?void 0:document.createElement("textarea");o.value=e,o.style.position="fixed",document==null||document.body.appendChild(o),o.focus(),o.select();try{document==null||document.execCommand("copy"),n=!0}catch(i){console.error("Fallback: Oops, unable to copy",i)}return document==null||document.body.removeChild(o),n}function pE(e){return M(this,null,function*(){if(!Qo())return!1;let n=!1;return navigator.clipboard?n=yield navigator.clipboard.writeText(e).then(function(){return!0},function(i){return console.error("Async: Could not copy text: ",i),!1}):n=Yz(e),n})}var Qz=({text:e,className:n="dapp-copy-button",copyIcon:o=K_.faCopy,successIcon:i=K_.faCheck,styles:c})=>{let[p,l]=(0,Xp.useState)({default:!0,success:!1});return Xp.default.createElement("a",{href:"/#",onClick:h=>M(void 0,null,function*(){h.preventDefault(),h.stopPropagation();let g=e&&e.trim();l({default:!1,success:yield pE(g)}),setTimeout(()=>{l({default:!0,success:!1})},1e3)}),className:(0,sE.default)(c==null?void 0:c.copy,n)},p.default||!p.success?Xp.default.createElement(KT.FontAwesomeIcon,{icon:o}):Xp.default.createElement(KT.FontAwesomeIcon,{icon:i}))},Je=I(Qz,{ssrStyles:()=>Promise.resolve().then(()=>(jT(),qT)),clientStyles:()=>(jT(),j(qT)).default});var nq=(e,n)=>[...e.matchAll(new RegExp(n,"gi"))].map(i=>i.index).filter(i=>Number.isFinite(i)),oq=({className:e="dapp-transaction-data",customCopyIcon:n,data:o,globalStyles:i,highlight:c,innerTransactionDataClasses:p,isScCall:l,label:u,showCopyButton:h=!0,styles:g,showDataDecode:T,transactionIndex:y})=>{let[C,N]=(0,$e.useState)(o),{transactionDataInputLabelClassName:A,transactionDataInputValueClassName:P}=p||{},W=$e.default.createElement($e.default.Fragment,null,C),[B,...z]=c&&l?c.split("@"):[],K=C&&c,R=K?nq(C,c):[],G=K&&R.length>0,Z=pe=>{!pe||pe.scrollIntoView()},ie=pe=>{N(pe)},ee=()=>{N(o)};if(G)switch(!0){case C.startsWith(c):{let[,pe]=C.split(c);W=$e.default.createElement($e.default.Fragment,null,$e.default.createElement("span",{className:i==null?void 0:i.highlighted},c),$e.default.createElement("span",{className:i==null?void 0:i.textMuted},pe));break}case C.endsWith(c):{let[pe]=C.split(c);W=$e.default.createElement($e.default.Fragment,null,$e.default.createElement("span",{className:i==null?void 0:i.textMuted},pe),$e.default.createElement("span",{className:i==null?void 0:i.highlighted,ref:Z},c));break}default:{let{start:pe,end:ne}=QA({occurrences:R,transactionIndex:y,data:C,highlight:c});W=$e.default.createElement($e.default.Fragment,null,$e.default.createElement("span",{className:i==null?void 0:i.textMuted},pe),$e.default.createElement("span",{className:i==null?void 0:i.highlighted,ref:Z},c),$e.default.createElement("span",{className:i==null?void 0:i.textMuted},ne));break}}let re=[Or(B),...z].join("@");return $e.default.createElement($e.default.Fragment,null,B&&$e.default.createElement("div",{className:(0,ki.default)(g==null?void 0:g.transactionData,e)},$e.default.createElement("span",{className:(0,ki.default)(g==null?void 0:g.transactionDataLabel,A)},"Smart Contract Call"),$e.default.createElement("div",{className:g==null?void 0:g.transactionDataValueWrapper},$e.default.createElement("div",{"data-testid":"confirmScCall",className:(0,ki.default)(g==null?void 0:g.transactionDataValue,P)},$e.default.createElement("span",{className:g==null?void 0:g.transactionDataValueText},re),C&&$e.default.createElement(Je,{text:re,className:g==null?void 0:g.transactionDataValueCopy})))),$e.default.createElement("div",{className:(0,ki.default)(g==null?void 0:g.transactionData,e)},$e.default.createElement("div",{className:(0,ki.default)(g==null?void 0:g.transactionDataLabel,A)},u!=null?u:"Data",T&&$e.default.createElement(iE,{data:o,onDecode:ie,onDecodeError:ee})),$e.default.createElement("div",{className:g==null?void 0:g.transactionDataValueWrapper},$e.default.createElement("div",{"data-testid":"confirmData",className:(0,ki.default)(g==null?void 0:g.transactionDataValue,P)},$e.default.createElement("span",{className:g==null?void 0:g.transactionDataValueText},C?W:tn),C&&h&&$e.default.createElement(Je,{copyIcon:n,text:C,className:g==null?void 0:g.transactionDataValueCopy})))))},dE=I(oq,{ssrStyles:()=>Promise.resolve().then(()=>(ZT(),XT)),clientStyles:()=>(ZT(),j(XT)).default});r();r();var _E=require("react"),Eo=w(require("classnames")),lE=(e=null,n)=>(0,_E.useMemo)(()=>({formGroup:(0,Eo.default)(n==null?void 0:n.formGroup,n==null?void 0:n.textBreak,n==null?void 0:n.textLeft),formLabel:(0,Eo.default)(n==null?void 0:n.textBreak,n==null?void 0:n.textSecondary),icon:n==null?void 0:n.textWhite,contentWrapper:(0,Eo.default)(n==null?void 0:n.dFlex,n==null?void 0:n.flexColumn,n==null?void 0:n.justifyContentStart,n==null?void 0:n.flexRow,n==null?void 0:n.justifyContentBetween,n==null?void 0:n.mb3),tokenWrapper:(0,Eo.default)(n==null?void 0:n.mb3,n==null?void 0:n.mb0,n==null?void 0:n.dFlex,n==null?void 0:n.flexColumn,n==null?void 0:n.alignItemsStart),tokenLabel:(0,Eo.default)(n==null?void 0:n.textSecondary,n==null?void 0:n.textLeft),tokenValue:(0,Eo.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter),scamReport:n==null?void 0:n.textWarning,scamReportIcon:(0,Eo.default)(n==null?void 0:n.textWarning,n==null?void 0:n.mr1),tokenAmountLabel:(0,Eo.default)(n==null?void 0:n.textSecondary,n==null?void 0:n.textLeft),tokenAmountValue:(0,Eo.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter),dataFormGroup:(0,Eo.default)(n==null?void 0:n.formGroup,n==null?void 0:n.textLeft),errorMessage:(0,Eo.default)(n==null?void 0:n.textDanger,n==null?void 0:n.dFlex,n==null?void 0:n.justifyContentCenter,n==null?void 0:n.alignItemsCenter),buttonsWrapper:(0,Eo.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter,n==null?void 0:n.justifyContentEnd,n==null?void 0:n.mt1),cancelButton:(0,Eo.default)(n==null?void 0:n.btn,n==null?void 0:n.btnDark,n==null?void 0:n.textWhite,n==null?void 0:n.dFlex,n==null?void 0:n.mr2),signButton:(0,Eo.default)(n==null?void 0:n.btn,e?n==null?void 0:n.btnWarning:n==null?void 0:n.btnPrimary,n==null?void 0:n.dFlex,n==null?void 0:n.ml2)}),[e,n]);r();r();r();var dr=w(require("react")),px=w(require("classnames"));r();r();var X_=w(require("react")),YT=w(require("classnames"));var tq=({className:e,styles:n})=>X_.default.createElement("div",{className:(0,YT.default)(n==null?void 0:n.loadingDots,e)},Array.from({length:3}).map((o,i)=>X_.default.createElement("span",{key:`loading-dot-${i}`,className:(0,YT.default)(n==null?void 0:n.loadingDot,n==null?void 0:n[`loadingDot-${i}`])})),X_.default.createElement("span",null,"Loading...")),Di=I(tq,{ssrStyles:()=>Promise.resolve().then(()=>(Xr(),Kr)),clientStyles:()=>(Xr(),j(Kr)).default});r();r();r();var Ei=w(require("react")),fE=w(require("bignumber.js"));Y();var aq=({amount:e,styles:n,type:o,identifier:i})=>{let c=new fE.default(e),p=c.isZero(),l=c.isEqualTo(1)?"SFT":"SFTs",u=c.toNumber().toLocaleString("en"),h=`${u} ${i}`;return p?Ei.default.createElement("div",{className:n==null?void 0:n.confirmAmountLabel},"You are using"):o==="NonFungibleESDT"?Ei.default.createElement("div",{className:n==null?void 0:n.confirmAmountLabel},"You are sending an NFT"):o==="SemiFungibleESDT"?Ei.default.createElement("div",{className:n==null?void 0:n.confirmAmountLabel},Ei.default.createElement("span",{className:n==null?void 0:n.confirmAmountLabelText},"You are sending"),Ei.default.createElement("span",{className:n==null?void 0:n.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":h},u," ",l)):Ei.default.createElement("div",{className:n==null?void 0:n.confirmAmountLabel},"You are sending")},gE=I(aq,{ssrStyles:()=>Promise.resolve().then(()=>(QT(),JT)),clientStyles:()=>(QT(),j(JT)).default});r();r();var mr=w(require("react")),yE=require("@fortawesome/free-solid-svg-icons"),vE=require("@fortawesome/react-fontawesome"),wE=w(require("classnames"));Y();r();r();var hE=w(require("react")),TE=w(require("classnames"));Y();var iq=u=>{var h=u,{amount:e,usd:n,decimals:o,addEqualSign:i,className:c,globalStyles:p}=h,l=_n(h,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let g=tr({amount:e,usd:n,decimals:o,addEqualSign:i!=null?i:!0}),y=`${e}`===yo?`= $${yo}`:g;return hE.default.createElement("small",b({className:(0,TE.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,c!=null?c:"dapp-usd-value")},l),y)},ex=I(iq,{});var cq=({isEgld:e,styles:n,tokenPrice:o,isNftOrSft:i,handleReference:c,currentTransaction:p,amount:l,tokenDetails:u})=>{let{network:h}=rt(),{tokenAvatar:g,tokenDecimals:T,identifier:y}=u,C=({addCommas:W})=>vn({input:e?p.transaction.getValue().toString():l,decimals:e?Number(h.decimals):T,digits:Number(h.digits),showLastNonZeroDecimal:!1,addCommas:W}),N=e||u.identifier===dC,A=C({addCommas:!0}),P=C({addCommas:!1});return mr.default.createElement("div",{className:n==null?void 0:n.confirmAmountData},mr.default.createElement("div",{className:n==null?void 0:n.confirmAmountDataWrapper},!N&&g&&mr.default.createElement("img",{src:g,className:n==null?void 0:n.confirmAmountDataIcon}),!N&&!g&&mr.default.createElement("div",{className:(0,wE.default)(n==null?void 0:n.confirmAmountDataIcon,n==null?void 0:n.confirmAmountDataIconDefault)},mr.default.createElement(vE.FontAwesomeIcon,{icon:yE.faCoins,className:n==null?void 0:n.confirmAmountDataIconDefaultIcon})),mr.default.createElement("div",{className:n==null?void 0:n.confirmAmountDataBalanceWrapper,ref:c},mr.default.createElement(jp,{amount:A,egldIcon:N,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:N?h.egldLabel:y,className:n==null?void 0:n.confirmAmountDataBalance}))),!i&&o&&mr.default.createElement(ex,{amount:P,usd:o,"data-testid":"confirmUsdValue",className:n==null?void 0:n.confirmAmountDataPrice}),!i&&!o&&mr.default.createElement("div",{className:n==null?void 0:n.confirmAmountDataPrice},"Price Unknown"))},SE=I(cq,{ssrStyles:()=>Promise.resolve().then(()=>(ox(),nx)),clientStyles:()=>(ox(),j(nx)).default});r();r();var Mt=w(require("react")),AE=require("@fortawesome/free-solid-svg-icons"),IE=require("@fortawesome/react-fontawesome"),bE=w(require("classnames"));Y();si();var mq=({styles:e,amount:n,type:o,tokenDetails:i})=>{let{network:c}=rt(),{identifier:p,tokenAvatar:l,name:u}=i,h="SemiFungibleESDT"===o,T=Array(Math.min(4,Number(n))).fill(null);return Mt.default.createElement("div",{onClick:C=>{var A;if(!p)return;let N=nr({explorerAddress:c.explorerAddress,to:pn.nftDetails(p)});C.preventDefault(),C.stopPropagation(),(A=_o.safeWindow)!=null&&A.open&&_o.safeWindow.open(N)},className:e==null?void 0:e.confirmAmountNftSft},Mt.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},l?Mt.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},T.map((C,N)=>Mt.default.createElement("img",{src:l,alt:o,key:`nft-sft-avatar-${N}`,style:{opacity:1-.25*N,zIndex:T.length-N,marginLeft:(T.length-N-1)*4},className:(0,bE.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:N===0})}))):Mt.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},Mt.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},h?"SFT":"NFT")),Mt.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},Mt.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},u),Mt.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),Mt.default.createElement(IE.FontAwesomeIcon,{icon:AE.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},LE=I(mq,{ssrStyles:()=>Promise.resolve().then(()=>(rx(),tx)),clientStyles:()=>(rx(),j(tx)).default});r();r();var NE=require("react"),PE=()=>{let[e,n]=(0,NE.useState)(!0),o=p=>p.getBoundingClientRect().width,i=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:e,handleAmountReference:p=>{if(!p)return;let l=p.firstChild,u={parent:p.offsetWidth,firstChild:i(l)};if(!!l){for(;u.parent<o(l);){let h=u.firstChild-.1,g={fontSize:`${h}px`},T={firstChild:h};Object.assign(l.style,g),Object.assign(u,T)}n(!1)}}}};var _q=({styles:e,currentTransaction:n})=>{let{tokenId:o,nonce:i,amount:c}=n.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:l}=PE(),u=i&&i.length>0?`${o}-${i}`:o,h=a_({tokenId:u}),{price:g}=N_(),{type:T,esdtPrice:y,isLoading:C,identifier:N}=h,A=!o,P=A?g:y,W=T?["SemiFungibleESDT","NonFungibleESDT"].includes(T):!1;return dr.default.createElement("div",{className:e==null?void 0:e.confirmAmount},dr.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},C?dr.default.createElement(Di,null):dr.default.createElement(gE,{amount:c,type:T,identifier:N})),dr.default.createElement("div",{className:e==null?void 0:e.confirmAmountWrapper},dr.default.createElement(Di,{className:(0,px.default)(e==null?void 0:e.confirmAmountLoading,{[e==null?void 0:e.confirmAmountLoadingVisible]:C||p})}),dr.default.createElement("div",{className:(0,px.default)(e==null?void 0:e.confirmAmountContent,{[e==null?void 0:e.confirmAmountContentHidden]:C||p})},W?dr.default.createElement(LE,{amount:c,type:T,tokenDetails:h}):dr.default.createElement(SE,{isNftOrSft:W,isEgld:A,amount:c,handleReference:l,currentTransaction:n,tokenDetails:h,tokenPrice:P}))))},DE=I(_q,{ssrStyles:()=>Promise.resolve().then(()=>(ix(),ax)),clientStyles:()=>(ix(),j(ax)).default});r();r();var Yr=w(require("react"));Y();var uq=({transaction:e,styles:n})=>{let{price:o}=N_(),i=ir(),c=gg({gasPerDataByte:String(zm),gasPriceModifier:String(kf),gasLimit:e.getGasLimit().valueOf().toString(),gasPrice:e.getGasPrice().valueOf().toString(),data:e.getData().toString(),chainId:e.getChainID().valueOf()}),p=vn({input:c,showLastNonZeroDecimal:!0}),l=o?OA({feeLimit:c,egldPriceInUsd:o,hideEqualSign:!0}):null;return Yr.default.createElement("div",{className:n==null?void 0:n.confirmFee},Yr.default.createElement("div",{className:n==null?void 0:n.confirmFeeLabel},"Transaction Fee"),Yr.default.createElement("div",{className:n==null?void 0:n.confirmFeeData},Yr.default.createElement(jp,{className:n==null?void 0:n.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:i,amount:p}),l?Yr.default.createElement("span",{className:n==null?void 0:n.confirmFeeDataPriceWrapper},"(",Yr.default.createElement(jp,{amount:l,displayAsUsd:!0,addEqualSign:!0,className:n==null?void 0:n.confirmFeeDataPrice}),")"):Yr.default.createElement("span",{className:n==null?void 0:n.confirmFeeDataPriceWrapper},Yr.default.createElement(Di,null))))},WE=I(uq,{ssrStyles:()=>Promise.resolve().then(()=>(sx(),cx)),clientStyles:()=>(sx(),j(cx)).default});r();r();var ao=w(require("react")),OE=require("@fortawesome/free-solid-svg-icons"),FE=require("@fortawesome/react-fontawesome"),RE=w(require("bignumber.js"));Y();r();r();var ME=e=>e?e.lastIndexOf(".elrond")>0?e.substring(0,e.lastIndexOf(".")):e:void 0;var gq=({amount:e,label:n,receiver:o,customExplorerIcon:i,receiverUsername:c,customCopyIcon:p,scamReport:l,styles:u})=>{let h=Fr(o),g=Boolean(h||c),T=new RE.default(e).isZero(),{data:y,isLoading:C,error:N}=Ma(g?null:o),A=c!=null?c:y==null?void 0:y.username,P=A!=null?A:o,W=Boolean(o&&Boolean(A)&&!N),B=T?"To interact with":"To";return ao.default.createElement("div",{className:u==null?void 0:u.receiver},ao.default.createElement("div",{className:u==null?void 0:u.receiverLabelWrapper},ao.default.createElement("div",{className:u==null?void 0:u.receiverLabel},n!=null?n:B),l&&ao.default.createElement("div",{className:u==null?void 0:u.receiverLabelScam},ao.default.createElement("span",{className:u==null?void 0:u.receiverLabelScamText,"data-testid":"confirmScamReport"},l),ao.default.createElement(FE.FontAwesomeIcon,{icon:OE.faExclamationTriangle,className:u==null?void 0:u.receiverLabelScamIcon}))),C?ao.default.createElement("div",{className:u==null?void 0:u.receiverWrapper},ao.default.createElement(Di,{className:u==null?void 0:u.receiverLoading})):ao.default.createElement("div",{className:u==null?void 0:u.receiverWrapper,"data-testid":"confirmReceiver"},ao.default.createElement(kn,{text:o,className:u==null?void 0:u.receiverTrim}),W&&!h&&ao.default.createElement("span",{className:u==null?void 0:u.receiverData},"(",ao.default.createElement(G_,{className:u==null?void 0:u.receiverDataIcon}),ao.default.createElement("span",{className:u==null?void 0:u.receiverDataUsername},ME(P)),")"),h&&ao.default.createElement("span",{className:u==null?void 0:u.receiverData},"(",ao.default.createElement("span",{className:u==null?void 0:u.receiverDataUsername},"Smart Contract"),")"),ao.default.createElement(Je,{text:o,className:u==null?void 0:u.receiverCopy,copyIcon:p}),ao.default.createElement(We,{page:`/${wo}/${o}`,className:u==null?void 0:u.receiverExternal,customExplorerIcon:i})))},UE=I(gq,{ssrStyles:()=>Promise.resolve().then(()=>(dx(),mx)),clientStyles:()=>(dx(),j(mx)).default});var Tq=({currentTransaction:e,error:n,signStepInnerClasses:o,globalStyles:i,styles:c})=>{if(!e)return null;let{inputGroupClassName:p,inputLabelClassName:l,inputValueClassName:u,errorClassName:h}=o||{},{tokenId:g,multiTxData:T,receiver:y,amount:C}=e.transactionTokenInfo,N=T?new HE.Address(y).bech32():e.transaction.getReceiver().toString(),A=e.receiverScamInfo,P=lE(A,i),W=e.transaction.getData().toString();return Va.default.createElement("div",{className:c==null?void 0:c.summary},Va.default.createElement("div",{className:c==null?void 0:c.fields},Va.default.createElement(DE,{currentTransaction:e}),Va.default.createElement(UE,{scamReport:A,receiver:N,amount:C}),Va.default.createElement(WE,{transaction:e.transaction}),W&&Va.default.createElement(dE,{className:p,data:W,highlight:T,innerTransactionDataClasses:{transactionDataInputLabelClassName:l,transactionDataInputValueClassName:u},isScCall:!g,showDataDecode:!0,transactionIndex:e.transactionIndex}),n&&Va.default.createElement("p",{className:(0,VE.default)(P.errorMessage,h)},n)))},$E=I(Tq,{ssrStyles:()=>Promise.resolve().then(()=>(lx(),_x)),clientStyles:()=>(lx(),j(_x)).default});r();r();var $a=w(require("react")),qE=require("@fortawesome/free-solid-svg-icons"),jE=require("@fortawesome/react-fontawesome"),Ss=w(require("classnames"));var yq=e=>{let{steps:n,size:o="large",type:i="simple",collapsible:c=!1,styles:p}=e,l=n.filter(T=>!T.hidden),u=l.findIndex(T=>T.active),h=o==="large"?650:450,g=33/100*h;return $a.default.createElement("div",{className:p==null?void 0:p.progressSteps},l.map((T,y)=>$a.default.createElement("div",{key:`progress-step-${y}`,style:{width:c?"auto":`${100/l.length}%`},className:(0,Ss.default)(p==null?void 0:p.progressStep,{[p==null?void 0:p.left]:i==="detailed"})},$a.default.createElement("div",{style:{width:c?T.active?g:20:"auto"},className:(0,Ss.default)(p==null?void 0:p.progressStepWrapper,{[p==null?void 0:p.active]:T.active,[p==null?void 0:p.detailed]:i==="detailed",[p==null?void 0:p.completed]:y<u||T.completed,[p==null?void 0:p.collapsible]:c})},$a.default.createElement("div",{className:(0,Ss.default)(p==null?void 0:p.progressStepIndex,{[p==null?void 0:p.active]:T.active})},y+1,i==="detailed"&&y<u&&$a.default.createElement(jE.FontAwesomeIcon,{icon:qE.faCheck,className:p==null?void 0:p.progressStepCheck})),T.title&&i==="detailed"&&$a.default.createElement("div",{className:(0,Ss.default)(p==null?void 0:p.progressStepTitle,{[p==null?void 0:p.active]:T.active,[p==null?void 0:p.collapsible]:c})},$a.default.createElement("div",{className:p==null?void 0:p.progressStepTitleText},T.title))))))},KE=I(yq,{ssrStyles:()=>Promise.resolve().then(()=>(fx(),ux)),clientStyles:()=>(fx(),j(ux)).default});r();Ve();var wq=e=>{var Ae;let{allTransactions:n,className:o,currentStep:i,currentTransaction:c,GuardianScreen:p,error:l,globalStyles:u,handleClose:h,handleSubmit:g,isLastTransaction:T,onPrev:y,onSignTransaction:C,signStepInnerClasses:N,styles:A,title:P,waitingForDevice:W}=e,[B,z]=(0,Un.useState)(!1),[K,R]=(0,Un.useState)({});if(!c)return null;let Z=`${c.transaction.getNonce().valueOf().toString()}_${c.transactionTokenInfo.multiTxData}_${c.transactionIndex}`;(0,Un.useEffect)(()=>{let ce=Object.keys(K).includes(Z),Pe=Object.values(K).includes(i);ce||Pe||R(Fe=>q(b({},Fe),{[Z]:i}))},[Z,i]);let ie=c.transaction.getData().toString(),{buttonsWrapperClassName:ee,buttonClassName:re}=N||{},{type:pe,multiTxData:ne}=c.transactionTokenInfo,ue=i===0,fe=ce=>{ce.preventDefault(),ue?h():y()},Oe=T&&!W,_e=()=>M(void 0,null,function*(){if(yield C(),Oe&&p)return z(!0);Oe&&g&&g()}),ve=pe&&ne&&!ie.endsWith(ne),le="Sign & Continue";le=W?"Check your Ledger":le,le=Oe?"Sign & Submit":le,le=ve?"Continue":le;let Ne={currentTransaction:c,error:l,allTransactions:n,currentStep:i,isGuarded:Boolean(p),signStepInnerClasses:N},ze=()=>{z(!1)},Zn=n.length>1?"Sign Transactions":"Sign Transaction",Wn=n.length>1?"Confirm Transactions":"Confirm Transaction",He=n.length>1?`Signing Transaction ${i+1} of ${n.length}`:P||"Sign Transaction",Me=p&&B,Se=Me?"Verify Guardian":He,Le=[{title:Zn,active:!B},{title:Wn,active:B,hidden:!Ne.isGuarded}],xe=K[Z]===i;return Un.default.createElement("div",{className:(0,Wi.default)(A==null?void 0:A.modalLayoutContent,A==null?void 0:A.spaced,o,{[(Ae=A==null?void 0:A.guarded)!=null?Ae:""]:Ne.isGuarded})},Me&&Un.default.createElement("div",{onClick:ze,className:(0,Wi.default)(A==null?void 0:A.modalLayoutHeadingIcon,A==null?void 0:A.back)},Un.default.createElement(gx.FontAwesomeIcon,{icon:Z_.faArrowLeft})),Un.default.createElement("div",{onClick:fe,className:(0,Wi.default)(A==null?void 0:A.modalLayoutHeadingIcon,A==null?void 0:A.close)},Un.default.createElement(gx.FontAwesomeIcon,{icon:Z_.faTimes})),Ne.isGuarded&&Un.default.createElement(KE,{steps:Le,type:"detailed",size:"small"}),Un.default.createElement("div",{className:A==null?void 0:A.title,"data-testid":"signStepTitle"},Se||"Confirm on Ledger"),Me?Un.default.createElement(p,q(b({},e),{onPrev:ze,guardianFormDescription:"Enter the code from your Authenticator app to verify this transaction."})):Un.default.createElement(Un.default.Fragment,null,Un.default.createElement($E,b({},Ne)),Un.default.createElement("div",{className:(0,Wi.default)(A==null?void 0:A.signButtons,ee)},Un.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:fe,className:(0,Wi.default)(A==null?void 0:A.signButtonCancel,re)},i===0?"Cancel":"Back"),Un.default.createElement("button",{type:"button",className:(0,Wi.default)(u==null?void 0:u.btnPrimary,A==null?void 0:A.signButtonSubmit,re),id:"signBtn","data-testid":"signBtn",onClick:_e,disabled:W||!xe},xe?le:"Loading..."))))},ZE=I(wq,{ssrStyles:()=>Promise.resolve().then(()=>(As(),Cs)),clientStyles:()=>(As(),j(Cs)).default});var Sq=({handleClose:e,handleSubmit:n,error:o,className:i="dapp-device-modal",verifyReceiverScam:c=!0,GuardianScreen:p,title:l="Confirm transaction",signStepInnerClasses:u,globalStyles:h,styles:g})=>{let{address:T}=wn(),{onSignTransaction:y,onPrev:C,allTransactions:N,waitingForDevice:A,onAbort:P,isLastTransaction:W,signedTransactions:B,setSignedTransactions:z,currentStep:K,callbackRoute:R,currentTransaction:G}=Kg({onCancel:e,verifyReceiverScam:c,hasGuardianScreen:Boolean(p)}),Z=G==null,ie={wrapper:(0,hx.default)(g==null?void 0:g.modalContainer,g==null?void 0:g.walletConnect,i),container:(0,hx.default)(h==null?void 0:h.card,h==null?void 0:h.container),cardBody:h==null?void 0:h.cardBody};return Is.default.createElement(Do,{onClose:e,modalConfig:{modalDialogClassName:ie.wrapper},visible:!0},Is.default.createElement("div",{className:ie.cardBody},Z?Is.default.createElement(UT,null):Is.default.createElement(ZE,{address:T,allTransactions:N,callbackRoute:R,currentStep:K,currentTransaction:G,error:o,GuardianScreen:p,handleClose:P,handleSubmit:n,isLastTransaction:W,onPrev:C,onSignTransaction:y,setSignedTransactions:z,signStepInnerClasses:u,signedTransactions:B,title:l,waitingForDevice:A})))},bs=I(Sq,{ssrStyles:()=>Promise.resolve().then(()=>(As(),Cs)),clientStyles:()=>(As(),j(Cs)).default});r();var YE=w(require("react"));Cf();var JE=e=>{let n=q(b({},e),{description:`You need at least MultiversX app version ${Lc}. Update MultiversX app to continue`,title:"Signing transactions unavailable"});return YE.default.createElement(sr,b({},n))};var xx=e=>{var l;let{ledgerAccount:n,account:{isGuarded:o}}=Ba(),{loginMethod:i}=Oa(),{ledgerWithGuardians:c}=hg((l=n==null?void 0:n.version)!=null?l:""),p=i==="ledger"?c:!0;return o&&!p?Tx.default.createElement(JE,b({},e)):Tx.default.createElement(bs,q(b({},e),{title:e.title||"Confirm on Ledger",className:e.className||"dapp-ledger-modal"}))};r();r();var QE=w(require("react"));var e2=e=>QE.default.createElement(bs,q(b({},e),{title:e.title||"Confirm on Metamask"}));r();r();var Y_=w(require("react")),o2=require("@fortawesome/free-solid-svg-icons"),wx=w(require("classnames"));Y();var Aq=({handleClose:e,error:n,transactions:o,sessionId:i,className:c="dapp-opera-modal",modalContentClassName:p,globalStyles:l,styles:u})=>{let h=Fa(),g={wrapper:(0,wx.default)(u==null?void 0:u.modalContainer,u==null?void 0:u.opera,c),icon:l==null?void 0:l.textWhite,closeBtn:(0,wx.default)(l==null?void 0:l.btn,l==null?void 0:l.btnCloseLink,l==null?void 0:l.btnDark,l==null?void 0:l.textWhite,l==null?void 0:l.mt2)},T=n||(o&&o.length>1?"Check your Opera Crypto Wallet to sign the transactions":"Check your Opera Crypto Wallet to sign the transaction"),y=C=>{C.preventDefault(),e(),h(i)};return Y_.default.createElement(Do,{onClose:e,modalConfig:{modalDialogClassName:g.wrapper},visible:!0},Y_.default.createElement(qn,{icon:n?o2.faTimes:null,iconClass:g.icon,className:p,iconBgClass:n?l==null?void 0:l.bgDanger:l==null?void 0:l.bgWarning,iconSize:"3x",title:"Confirm on Opera Crypto Wallet",description:T,action:Y_.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:y,className:g.closeBtn},"Close")}))},t2=I(Aq,{ssrStyles:()=>Promise.resolve().then(()=>(vx(),yx)),clientStyles:()=>(vx(),j(yx)).default});r();r();var r2=w(require("react"));var a2=e=>{var i;let n=e.error?e.error:((i=e.transactions)==null?void 0:i.length)>1?"Please signin with your passkey in order to sign the transactions":"Please signin with your passkey in order to sign the transaction",o=q(b({},e),{description:n,title:"Confirm by signing in with passkey"});return r2.default.createElement(sr,b({},o))};r();r();var za=w(require("react")),d2=require("@fortawesome/free-solid-svg-icons"),Ix=w(require("classnames"));Y();r();Ve();function i2(e){let{provider:n}=Bn();function o(){return M(this,null,function*(){!n||Wt("walletconnectv2")&&(yield i())})}function i(){return M(this,null,function*(){var c;try{if(!n||!Wt("walletconnectv2"))return;yield(c=n==null?void 0:n.sendCustomRequest)==null?void 0:c.call(n,{request:{method:Lp.CANCEL_ACTION,params:{action:e}}})}catch(p){console.warn("WalletConnectV2: Unable to send cancelAction event",p)}})}return{cancelActionV2:i,cancelWalletConnectAction:o}}en();r();r();var zo=w(require("react")),Bi=require("@fortawesome/free-solid-svg-icons"),Mi=w(require("classnames"));en();r();var J_=w(require("react")),p2=require("@fortawesome/react-fontawesome"),Q_=w(require("classnames"));var Iq=({icon:e,iconClassName:n,description:o,details:i,className:c,globalStyles:p})=>{let l=(0,Q_.default)(p==null?void 0:p.dFlex,p==null?void 0:p.flexColumn,p==null?void 0:p.alignItemsCenter,p==null?void 0:p.justifyContentCenter,p==null?void 0:p.my3,c),u=(0,Q_.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter,p==null?void 0:p.mr2);return J_.default.createElement("div",{className:l},J_.default.createElement("div",{className:u},e&&J_.default.createElement(p2.FontAwesomeIcon,{icon:e,className:(0,Q_.default)(p==null?void 0:p.mr2,n)}),o),i)},Ls=I(Iq,{});r();var Ns=w(require("react")),c2=w(require("classnames"));var bq=({globalStyles:e})=>Ns.default.createElement("div",{className:(0,c2.default)(e==null?void 0:e.dFlex,e==null?void 0:e.flexColumn,e==null?void 0:e.alignItemsCenter,e==null?void 0:e.mt2)},Ns.default.createElement("small",{className:e==null?void 0:e.textSecondary},"Make sure that the phone is unlocked and the app is opened."),Ns.default.createElement("small",null,"Hint:"," ",Ns.default.createElement("span",{className:e==null?void 0:e.textSecondary},"Battery saving mode might have an effect on the connection quality."))),Sx=I(bq,{});var el=1e4;var Lq=({description:e,className:n,globalStyles:o})=>{let{provider:i}=Bn(),c=lo(i),[p,l]=(0,zo.useState)("pending"),[u,h]=(0,zo.useState)(el),g=c==="walletconnectv2",T=()=>M(void 0,null,function*(){var C;let y=Symbol();try{(yield Eb((C=i==null?void 0:i.ping)==null?void 0:C.call(i),el,y))?(l("success"),h(A=>A*1.5)):(l("error"),h(el))}catch(N){l(N===y?"waiting":"error"),h(el)}});if((0,zo.useEffect)(()=>{T();let y=setInterval(()=>M(void 0,null,function*(){yield T()}),u);return()=>clearInterval(y)},[]),!g)return null;switch(p){case"pending":return zo.default.createElement(Ls,{className:n,icon:Bi.faCircleNotch,iconClassName:(0,Mi.default)(o==null?void 0:o.textPrimary,"fa-spin","slow-spin"),description:"Checking the connection...",details:zo.default.createElement("div",{className:(0,Mi.default)(o==null?void 0:o.mt3)},e)});case"waiting":return zo.default.createElement(Ls,{className:n,icon:Bi.faCircleNotch,iconClassName:(0,Mi.default)(o==null?void 0:o.textPrimary,"fa-spin","slow-spin"),description:"Checking the connection...",details:zo.default.createElement(Sx,null)});case"success":return zo.default.createElement(Ls,{className:n,icon:Bi.faCheckCircle,iconClassName:(0,Mi.default)(o==null?void 0:o.textSuccess),description:"Connected",details:zo.default.createElement("div",{className:(0,Mi.default)(o==null?void 0:o.mt3)},e)});default:case"error":return zo.default.createElement(Ls,{className:n,icon:Bi.faTimes,iconClassName:(0,Mi.default)(o==null?void 0:o.textDanger),description:"Unable to establish a connection with the device.",details:zo.default.createElement(Sx,null)})}},s2=I(Lq,{});var Pq=({error:e,handleClose:n,transactions:o,sessionId:i,className:c="dapp-wallet-connect-modal",modalContentClassName:p,globalStyles:l,styles:u})=>{let h=Fa(),g={wrapper:(0,Ix.default)(u==null?void 0:u.modalContainer,u==null?void 0:u.walletConnect,c),icon:l==null?void 0:l.textWhite,closeBtn:(0,Ix.default)(l==null?void 0:l.btn,l==null?void 0:l.btnCloseLink,l==null?void 0:l.btnDark,l==null?void 0:l.textWhite,l==null?void 0:l.mt2)},{provider:T}=Bn(),y=lo(T),C=o&&(o==null?void 0:o.length)>1,N=y==="walletconnectv2",A=`Check your phone to sign the transaction${C?"s":""}`,{cancelWalletConnectAction:P}=i2(cC),W=()=>M(void 0,null,function*(){h(i),yield P(),n()}),B=()=>za.default.createElement(za.default.Fragment,null,N?za.default.createElement(s2,{description:A}):A);return za.default.createElement(Do,{onClose:n,modalConfig:{modalDialogClassName:g.wrapper},visible:!0},za.default.createElement(qn,{icon:e?d2.faTimes:null,iconClass:g.icon,className:p,iconBgClass:e?l==null?void 0:l.bgDanger:l==null?void 0:l.bgWarning,iconSize:"3x",title:"Confirm on the xPortal App",description:e||za.default.createElement(B,null),action:za.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:W,className:g.closeBtn},"Cancel")}))},_2=I(Pq,{ssrStyles:()=>Promise.resolve().then(()=>(Ax(),Cx)),clientStyles:()=>(Ax(),j(Cx)).default});var kq=({className:e,CustomConfirmScreens:n,GuardianScreen:o,verifyReceiverScam:i=!0})=>{var u,h,g,T,y,C,N,A,P;let{loginMethod:c}=Oa(),p={Ledger:(u=n==null?void 0:n.Ledger)!=null?u:xx,WalletConnect:(h=n==null?void 0:n.WalletConnect)!=null?h:_2,Extension:(g=n==null?void 0:n.Extension)!=null?g:FT,Passkey:(T=n==null?void 0:n.Passkey)!=null?T:a2,Metamask:(y=n==null?void 0:n.Metamask)!=null?y:e2,Iframe:(C=n==null?void 0:n.Iframe)!=null?C:vD,Opera:(N=n==null?void 0:n.Opera)!=null?N:t2,CrossWindow:(A=n==null?void 0:n.CrossWindow)!=null?A:hD,Wallet:()=>Zp.default.createElement(Zp.default.Fragment,null),Extra:(P=n==null?void 0:n.Extra)!=null?P:xD},l=(0,Zp.useCallback)(({Screen:W,isDevice:B})=>Zp.default.createElement(B?lD:_D,{Screen:W,GuardianScreen:o,verifyReceiverScam:i,className:e}),[i,e]);switch(c){case"ledger":return l({Screen:p.Ledger,isDevice:!0});case"walletconnectv2":return l({Screen:p.WalletConnect});case"extension":return l({Screen:p.Extension});case"passkey":return l({Screen:p.Passkey,isDevice:!0});case"metamask":return l({Screen:p.Metamask,isDevice:!0});case"opera":return l({Screen:p.Opera});case"crossWindow":return l({Screen:p.CrossWindow});case"iframe":return l({Screen:p.Iframe});case"wallet":return l({Screen:p.Wallet});case"extra":return l({Screen:p.Extra,isDevice:!0});default:return null}};r();r();r();r();var Qp=w(require("react")),Bx=w(require("classnames"));r();var Ct=w(require("react"));ln();r();var Fs=w(require("react")),ml=w(require("classnames"));r();var Kn=w(require("react"));ln();r();var lr=w(require("react")),X2=require("@fortawesome/free-solid-svg-icons"),Z2=require("@fortawesome/react-fontawesome"),Os=w(require("classnames"));ln();r();r();var bx=w(require("react")),l2=w(require("classnames"));var Dq=p=>{var l=p,{address:e,assets:n,color:o,globalStyles:i}=l,c=_n(l,["address","assets","color","globalStyles"]);if(n&&n.name){let u=n.name.replace(new RegExp("\\p{Emoji}","gu"),""),h=`${u} (${e})`;return bx.default.createElement("span",q(b({className:(0,l2.default)(i==null?void 0:i.textTruncate,{[`text-${o}`]:o})},c),{title:h}),u)}return bx.default.createElement(kn,b({text:e,color:o},c))},io=I(Dq,{});r();var u2=w(require("react")),f2=require("@fortawesome/free-solid-svg-icons/faExchangeAlt");Y();function Eq({globalStyles:e}){return u2.default.createElement(qn,{icon:f2.faExchangeAlt,title:"Unable to load transactions",className:e==null?void 0:e.myAuto,"data-testid":"errorScreen"})}var hWe=I(Eq,{});r();var g2=w(require("react")),h2=require("@fortawesome/free-solid-svg-icons/faLock"),T2=require("@fortawesome/react-fontawesome"),x2=w(require("classnames"));var Wq=({address:e,tokenId:n,globalStyles:o})=>{var p,l,u;let i=a_({tokenId:n}),c=(p=i.assets)==null?void 0:p.lockedAccounts;if(c){let h=Object.keys(c).filter(T=>Pn(T)?T===e:Pn(c[T])?c[T]===e:!1),g=(u=(l=i.assets)==null?void 0:l.lockedAccounts)==null?void 0:u[h[0]];return g?g2.default.createElement(T2.FontAwesomeIcon,{title:g,icon:h2.faLock,size:"xs",className:(0,x2.default)(o==null?void 0:o.mr1,o==null?void 0:o.textSecondary)}):null}return null},nl=I(Wq,{});r();var y2=w(require("react")),v2=require("@fortawesome/free-solid-svg-icons/faExchangeAlt");function Mq({globalStyles:e}){return y2.default.createElement(qn,{icon:v2.faExchangeAlt,title:"No transactions",className:e==null?void 0:e.myAuto})}var bWe=I(Mq,{});r();var w2=w(require("react")),S2=require("@fortawesome/free-solid-svg-icons/faFileAlt"),C2=require("@fortawesome/react-fontawesome"),A2=w(require("classnames"));Y();var Bq=({initiator:e,secondInitiator:n,globalStyles:o})=>Fr(e)||Fr(n!=null?n:"")?w2.default.createElement(C2.FontAwesomeIcon,{title:"Smart Contract",icon:S2.faFileAlt,className:(0,A2.default)(o==null?void 0:o.mr1,o==null?void 0:o.textSecondary),"data-testid":"scIcon"}):null,qo=I(Bq,{});r();var I2=w(require("react"));var _r=o=>{var i=o,{shard:e}=i,n=_n(i,["shard"]);return I2.default.createElement("span",b({},n),uI(e))};r();var Lx=w(require("react")),L2=w(require("classnames"));var Fq=({transaction:e,globalStyles:n,styles:o})=>{var i,c;return Lx.default.createElement("div",{className:n==null?void 0:n.dFlex},Lx.default.createElement("span",{className:(0,L2.default)(o==null?void 0:o.directionBadge,(i=e.transactionDetails.direction)==null?void 0:i.toLowerCase())},(c=e.transactionDetails.direction)==null?void 0:c.toUpperCase()))},N2=I(Fq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();var Ps=w(require("react")),Px=w(require("classnames"));Y();r();var P2=w(require("react")),k2=require("@fortawesome/free-solid-svg-icons/faBan"),D2=require("@fortawesome/free-solid-svg-icons/faHourglass"),Nx=require("@fortawesome/free-solid-svg-icons/faTimes"),E2=require("@fortawesome/react-fontawesome"),W2=w(require("classnames")),M2=w(Qh());var Rq=({transaction:e,globalStyles:n})=>{let o=Hd(e),{failed:i,invalid:c,pending:p}=Ip(e),l;i&&(l=Nx.faTimes),c&&(l=k2.faBan),p&&(l=D2.faHourglass);let h=(i||c)&&o.length>0?o.join(","):"",g=`${M2.default.upperFirst(e.status)} ${h}`;return l?P2.default.createElement(E2.FontAwesomeIcon,{title:g,icon:l,size:l===Nx.faTimes?"1x":"sm",className:(0,W2.default)(n==null?void 0:n.mr1,n==null?void 0:n.textSecondary)}):null},B2=I(Rq,{});var Uq=({className:e,transaction:n,globalStyles:o,styles:i})=>{let c=`/transactions/${n.originalTxHash?`${n.originalTxHash}#${n.txHash}`:n.txHash}`;return Ps.default.createElement("div",{className:(0,Px.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,i==null?void 0:i.transactionCell,e)},Ps.default.createElement(B2,{transaction:n}),Ps.default.createElement(We,{page:c,"data-testid":"transactionLink",className:(0,Px.default)(o==null?void 0:o.w100,i==null?void 0:i.transactionCellMargin,i==null?void 0:i.transactionCellOverflow,i==null?void 0:i.transactionCellLink)},Ps.default.createElement(kn,{text:n.txHash,"data-testid":"transactionHash"})))},O2=I(Uq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();var ks=w(require("react")),Ds=w(require("classnames"));Y();var Gq=({className:e,transaction:n,globalStyles:o,styles:i})=>{var c;return ks.default.createElement("div",{className:(0,Ds.default)(i==null?void 0:i.transactionCell,e)},ks.default.createElement("span",{title:(c=n.action)==null?void 0:c.description,className:(0,Ds.default)(o==null?void 0:o.badge,o==null?void 0:o.badgeSecondary,o==null?void 0:o.badgePill,o==null?void 0:o.fontWeightLight,o==null?void 0:o.p0),"data-testid":"transactionMethod"},ks.default.createElement("div",{className:(0,Ds.default)(o==null?void 0:o.badge,o==null?void 0:o.badgeSecondary,o==null?void 0:o.badgePill)},ks.default.createElement("div",{className:(0,Ds.default)(i==null?void 0:i.transactionFunctionBadge,o==null?void 0:o.textTruncate,o==null?void 0:o.textCapitalize,o==null?void 0:o.textWhite,o==null?void 0:o.p1,i==null?void 0:i.transactionCellFontSmall)},Cp(n)))))},ol=I(Gq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();var qa=w(require("react")),tl=w(require("classnames"));Y();ln();var Hq=({transaction:e,showLockedAccounts:n,globalStyles:o,styles:i})=>{var p,l;let c=e.transactionDetails.direction==="In";return qa.default.createElement("div",{className:(0,tl.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,i==null?void 0:i.transactionCell),"data-testid":"transactionReceiver"},n&&qa.default.createElement(nl,{address:e.receiver,tokenId:(p=e.tokenIdentifier)!=null?p:""}),qa.default.createElement(qo,{initiator:e.receiver}),c?qa.default.createElement("div",{className:(0,tl.default)(o==null?void 0:o.w100,i==null?void 0:i.transactionCellMargin,i==null?void 0:i.transactionCellOverflow)},qa.default.createElement(io,{address:e.sender,assets:e.senderAssets})):qa.default.createElement(We,{page:(l=e.links.receiverLink)!=null?l:"","data-testid":"receiverLink",className:(0,tl.default)(o==null?void 0:o.w100,i==null?void 0:i.transactionCellMargin,i==null?void 0:i.transactionCellOverflow,i==null?void 0:i.transactionCellLink)},qa.default.createElement(io,{address:e.receiver,assets:e.receiverAssets})))},rl=I(Hq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();var Jr=w(require("react")),al=w(require("classnames"));Y();ln();var Vq=({transaction:e,showLockedAccounts:n,globalStyles:o,styles:i})=>{var p,l;let c=e.transactionDetails.direction==="Out";return Jr.default.createElement("div",{className:(0,al.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,i==null?void 0:i.transactionCell),"data-testid":"transactionSender"},n&&Jr.default.createElement(nl,{address:e.sender,tokenId:(p=e.tokenIdentifier)!=null?p:""}),Jr.default.createElement(qo,{initiator:e.sender}),c?Jr.default.createElement("div",{className:(0,al.default)(o==null?void 0:o.w100,i==null?void 0:i.transactionCellOverflow,i==null?void 0:i.transactionCellMargin)},Jr.default.createElement(io,{address:e.sender,assets:e.senderAssets})):Pn(e.sender)?Jr.default.createElement(We,{page:(l=e.links.senderLink)!=null?l:"","data-testid":"senderLink",className:(0,al.default)(o==null?void 0:o.w100,i==null?void 0:i.transactionCellOverflow,i==null?void 0:i.transactionCellMargin,i==null?void 0:i.transactionCellLink)},Jr.default.createElement(io,{address:e.sender,assets:e.senderAssets})):Jr.default.createElement(_r,{shard:e.sender}))},il=I(Vq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();r();var Bt=w(require("react")),q2=require("@fortawesome/free-solid-svg-icons"),j2=require("@fortawesome/react-fontawesome"),kx=w(require("classnames"));Y();r();r();var Ms=w(require("react")),pl=w(require("classnames"));var zq=({token:e,globalStyles:n,styles:o})=>e.collection?Ms.default.createElement(We,{page:pn.collectionDetails(e.collection),className:(0,pl.default)(o==null?void 0:o.transactionActionCollection)},Ms.default.createElement("div",{className:(0,pl.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter)},e.svgUrl&&Ms.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,pl.default)(n==null?void 0:n.sideIcon,n==null?void 0:n.mr1)}),Ms.default.createElement("span",null,e.ticker))):null,R2=I(zq,{ssrStyles:()=>Promise.resolve().then(()=>(Ws(),Es)),clientStyles:()=>(Ws(),j(Es)).default});r();var Qr=w(require("react")),Yp=w(require("classnames"));Y();r();var U2=w(require("react")),G2=w(require("classnames"));var qq=({text:e,className:n,"data-testid":o="nftBadge",globalStyles:i})=>U2.default.createElement("div",{"data-testid":o,className:(0,G2.default)(i==null?void 0:i.badge,i==null?void 0:i.badgeSecondary,i==null?void 0:i.badgePill,i==null?void 0:i.fontWeightLight,n)},e),H2=I(qq,{});var jq=({badgeText:e,tokenFormattedAmount:n,tokenExplorerLink:o,tokenLinkText:i,token:c,showLastNonZeroDecimal:p,globalStyles:l,styles:u})=>{var h,g,T,y,C;return c.identifier?Qr.default.createElement("div",{className:u==null?void 0:u.transactionActionNft},e!=null&&Qr.default.createElement(H2,{text:e,className:(0,Yp.default)(l==null?void 0:l.mr1,l==null?void 0:l.myAuto)}),n!=null&&Qr.default.createElement("div",{className:(0,Yp.default)(l==null?void 0:l.mr1,{[(h=l==null?void 0:l.textTruncate)!=null?h:""]:c.svgUrl})},Qr.default.createElement(On,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Qr.default.createElement(We,{page:o,"data-testid":"nftExplorerLink",className:(0,Yp.default)(u==null?void 0:u.explorer,{[(g=l==null?void 0:l.sideLink)!=null?g:""]:c.svgUrl,[(T=l==null?void 0:l.dFlex)!=null?T:""]:c.svgUrl,[(y=l==null?void 0:l.textTruncate)!=null?y:""]:!c.svgUrl})},Qr.default.createElement("div",{className:u==null?void 0:u.data},c.svgUrl&&Qr.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,Yp.default)(l==null?void 0:l.sideIcon,l==null?void 0:l.mr1)}),Qr.default.createElement("span",{className:(0,Yp.default)({[(C=u==null?void 0:u.truncate)!=null?C:""]:c.ticker===c.collection})},i)))):null},V2=I(jq,{ssrStyles:()=>Promise.resolve().then(()=>(Ws(),Es)),clientStyles:()=>(Ws(),j(Es)).default});r();var ea=w(require("react")),cl=w(require("classnames"));Y();var Kq=({tokenExplorerLink:e,showFormattedAmount:n,tokenLinkText:o,token:i,showLastNonZeroDecimal:c,globalStyles:p})=>{var l,u;return i.token?ea.default.createElement(ea.default.Fragment,null,n&&ea.default.createElement("div",{className:p==null?void 0:p.textTruncate},ea.default.createElement(On,{value:i.value,digits:2,showLabel:!1,decimals:(l=i.decimals)!=null?l:Mn,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),ea.default.createElement(We,{page:e,"data-testid":"tokenExplorerLink",className:(0,cl.default)(p==null?void 0:p.dFlex,{[(u=p==null?void 0:p.sideLink)!=null?u:""]:i.svgUrl})},ea.default.createElement("div",{className:(0,cl.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},i.svgUrl&&ea.default.createElement("img",{src:i.svgUrl,alt:i.name,className:(0,cl.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),ea.default.createElement("span",null,o)))):null},$2=I(Kq,{});var pt={Collection:R2,Nft:V2,Token:$2};var Xq=({children:e,titleText:n,globalStyles:o})=>Bt.default.createElement("div",{className:(0,kx.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter),"data-testid":"transactionValue"},e,n&&Bt.default.createElement(j2.FontAwesomeIcon,{icon:q2.faLayerGroup,"data-testid":"transactionValueIcon",className:(0,kx.default)(o==null?void 0:o.ml2,o==null?void 0:o.textSecondary),title:n})),z2=I(Xq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default}),Zq=({transaction:e,hideMultipleBadge:n,styles:o})=>{let{egldValueData:i,tokenValueData:c,nftValueData:p}=JA({transaction:e,hideMultipleBadge:n});if(c)return Bt.default.createElement("div",{className:o==null?void 0:o.transactionCell},Bt.default.createElement(z2,{titleText:c.titleText},Bt.default.createElement(pt.Token,b({},c))));if(p){let u=p.token.type==="MetaESDT"?null:p.badgeText;return Bt.default.createElement("div",{className:o==null?void 0:o.transactionCell},Bt.default.createElement(z2,{titleText:p.titleText},Bt.default.createElement(pt.Nft,q(b({},p),{badgeText:u}))))}return i?Bt.default.createElement("div",{className:o==null?void 0:o.transactionCell},Bt.default.createElement(On,{value:i.value,digits:2,"data-testid":"transactionValue"})):null},Jp=I(Zq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();var Oi=w(require("react")),Bs=w(require("classnames"));Y();var Yq=({transaction:e,globalStyles:n,styles:o})=>{var i,c;return Oi.default.createElement("div",{className:(0,Bs.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter,o==null?void 0:o.transactionCell)},Oi.default.createElement(We,{page:(i=e.links.senderShardLink)!=null?i:"",className:(0,Bs.default)(o==null?void 0:o.transactionCellMargin,o==null?void 0:o.transactionCellLink),"data-testid":"shardFromLink"},Oi.default.createElement(_r,{shard:e.senderShard,"data-testid":"senderShard"})),Oi.default.createElement("span",{className:(0,Bs.default)(n==null?void 0:n.textSecondary,n==null?void 0:n.mx2)},"\u2794"),Oi.default.createElement(We,{className:(0,Bs.default)(o==null?void 0:o.transactionCellMargin,o==null?void 0:o.transactionCellLink),page:(c=e.links.receiverShardLink)!=null?c:"","data-testid":"shardToLink"},Oi.default.createElement(_r,{shard:e.receiverShard,"data-testid":"receiverShard"})))},sl=I(Yq,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});var Qq=({address:e,transaction:n,action:o,isFullSize:i,direction:c,globalStyles:p,styles:l})=>{var g,T,y,C,N;let u;e===n.sender&&(u=n.senderAssets),e===n.receiver&&(u=n.receiverAssets);let h={["Internal"]:"int",["In"]:"in",["Out"]:"out",["Self"]:"self"};return lr.default.createElement("div",{className:(0,Os.default)(l==null?void 0:l.operationBlock,{[(g=p==null?void 0:p.col12)!=null?g:""]:i,[(T=p==null?void 0:p.prXl0)!=null?T:""]:!i,[(y=p==null?void 0:p.pl3)!=null?y:""]:!i&&u,[(C=p==null?void 0:p.colLg6)!=null?C:""]:!i&&!u,[(N=p==null?void 0:p.colXl4)!=null?N:""]:!i&&!u})},c&&lr.default.createElement("div",{className:(0,Os.default)(l==null?void 0:l.direction,l==null?void 0:l[h[c]])},h[c]),o&&lr.default.createElement(Z2.FontAwesomeIcon,{icon:X2.faCaretRight,size:"xs",className:(0,Os.default)(p==null?void 0:p.textSecondary,p==null?void 0:p.mr2)}),lr.default.createElement("div",{className:(0,Os.default)(p==null?void 0:p.textNowrap,p==null?void 0:p.mr2)},o||""),Pn(e)?lr.default.createElement(lr.default.Fragment,null,lr.default.createElement(We,{page:pn.accountDetails(e),className:l==null?void 0:l.explorer},lr.default.createElement(io,{address:e,assets:u})),lr.default.createElement(Je,{text:e,className:l==null?void 0:l.copy})):"")},ct=I(Qq,{ssrStyles:()=>Promise.resolve().then(()=>(Ex(),Dx)),clientStyles:()=>(Ex(),j(Dx)).default});var Y2=({operation:e,transaction:n})=>{let{direction:o}=sI({operation:e,address:n.sender});switch(e.action){case"create":case"localMint":case"ESDTLocalMint":return Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"Mint by",direction:"Internal"});case"addQuantity":return Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"Add quantity by",direction:"Internal"});case"burn":case"localBurn":case"ESDTLocalBurn":return Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"Burn by",direction:"Internal"});case"wipe":return Kn.default.createElement(ct,{transaction:n,address:e.receiver,action:"Wipe from",direction:"Internal"});case"multiTransfer":return Kn.default.createElement(Kn.default.Fragment,null,Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"Multi transfer from",direction:o})," ",Kn.default.createElement(ct,{transaction:n,address:e.receiver,action:"To"}));case"transfer":return Kn.default.createElement(Kn.default.Fragment,null,Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"Transfer from",direction:o})," ",Kn.default.createElement(ct,{transaction:n,address:e.receiver,action:"To"}));case"writeLog":return Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"Write log by",direction:"Internal",isFullSize:!0});case"signalError":return Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"Signal error by",direction:"Internal",isFullSize:!0});default:return Kn.default.createElement(Kn.default.Fragment,null,Kn.default.createElement(ct,{transaction:n,address:e.sender,action:"From",direction:o})," ",Kn.default.createElement(ct,{transaction:n,address:e.receiver,action:"To"}))}};var ej=({children:e,operation:n,transaction:o,globalStyles:i})=>Fs.default.createElement("div",{className:(0,ml.default)(i==null?void 0:i.dFlex,i==null?void 0:i.row,i==null?void 0:i.mb3,i==null?void 0:i.mbXl2)},Fs.default.createElement(Y2,{operation:n,transaction:o}),e&&Fs.default.createElement("div",{className:(0,ml.default)(i==null?void 0:i.colLg6,i==null?void 0:i.colXl4,i==null?void 0:i.dFlex,i==null?void 0:i.alignItemsCenter)},Fs.default.createElement("div",{className:(0,ml.default)(i==null?void 0:i.dFlex,i==null?void 0:i.textTruncate)},e))),Wx=I(ej,{});r();var Mx=w(require("react"));ln();var nj=e=>{if(!e)return"";let n=e.split("-");return n.length>0?n[0]:e},J2=({operation:e})=>{let n={type:e.esdtType,name:e.name,ticker:e.svgUrl?nj(String(e.identifier)):e.identifier,collection:e.collection,identifier:e.identifier,token:e.identifier,decimals:e.decimals,value:e.value,svgUrl:e.svgUrl};if(n.type==null)return null;switch(e.type){case"nft":{let o=rr({token:n});return Mx.default.createElement(pt.Nft,q(b({},o),{badgeText:null}))}case"esdt":{let o=ka({token:n});return Mx.default.createElement(pt.Token,b({},o))}default:return null}};var oj=({operation:e,transaction:n,globalStyles:o})=>{switch(e.type){case"nft":case"esdt":return Ct.default.createElement(Wx,{operation:e,transaction:n},Ct.default.createElement(Ct.default.Fragment,null,e.esdtType==="NonFungibleESDT"&&Ct.default.createElement("div",{className:o==null?void 0:o.mr1},"NFT"),e.esdtType==="SemiFungibleESDT"&&Ct.default.createElement("div",{className:o==null?void 0:o.mr1},"SFT quantity"),Ct.default.createElement(J2,{operation:e})));case"egld":return Ct.default.createElement(Wx,{operation:e,transaction:n},Ct.default.createElement(Ct.default.Fragment,null,Ct.default.createElement("div",{className:o==null?void 0:o.mr2},"Value"),Ct.default.createElement(On,{value:e.value,showLastNonZeroDecimal:!0})));default:return null}},Q2=I(oj,{});var tj=e=>{let{globalStyles:n}=e,{isExpanded:o,displayedOperations:i,showToggleButton:c,toggleButtonText:p,onToggleButtonClick:l}=LI(e);return Qp.default.createElement("div",{className:n==null?void 0:n.mbN2},Qp.default.createElement("div",{className:(0,Bx.default)(n==null?void 0:n.dFlex,n==null?void 0:n.flexColumn)},i.map((u,h)=>Qp.default.createElement("div",{key:`display-${h}`},Qp.default.createElement(Q2,{operation:u,transaction:e.transaction})))),c&&Qp.default.createElement("button",{className:(0,Bx.default)(n==null?void 0:n.btn,n==null?void 0:n.btnLink),type:"button",onClick:l,"aria-controls":"operations-list","aria-expanded":o},p))},Ox=I(tj,{});r();r();var ec=w(require("react"));Y();r();var hn=w(require("react")),Fi=w(require("classnames"));r();var Fx=w(require("react")),rj=e=>Fx.createElement("svg",b({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"globe",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",className:"svg-inline--fa fa-globe fa-w-16 fa-5x"},e),Fx.createElement("path",{fill:"#6c757d",d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z",className:""})),eW=rj;Y();r();var st=w(require("react"));var ij=({token:e,noValue:n,showLastNonZeroDecimal:o,globalStyles:i,styles:c})=>{if(["MetaESDT".toString(),"SemiFungibleESDT","NonFungibleESDT"].includes(e.type))switch(e.type){case"SemiFungibleESDT":{let l=rr({token:e,showLastNonZeroDecimal:o});return st.default.createElement("div",{className:c==null?void 0:c.group},st.default.createElement("span",{className:i==null?void 0:i.mr1},"SFT quantity"),st.default.createElement(pt.Nft,q(b({},l),{badgeText:null})),st.default.createElement("span",{className:i==null?void 0:i.mr1},"of collection"),st.default.createElement(pt.Collection,{token:e}))}case"NonFungibleESDT":{let l=rr({token:e,noValue:n,showLastNonZeroDecimal:o});return st.default.createElement("div",{className:c==null?void 0:c.group},st.default.createElement("span",{className:i==null?void 0:i.mr1},"NFT"),st.default.createElement(pt.Nft,q(b({},l),{badgeText:null})),st.default.createElement("span",{className:i==null?void 0:i.mr1},"of collection"),st.default.createElement(pt.Collection,{token:e}))}case"MetaESDT":{let l=rr({token:e,noValue:n,showLastNonZeroDecimal:o});return st.default.createElement(pt.Nft,q(b({},l),{badgeText:null}))}default:return null}else{let l=ka({token:e,noValue:n,showLastNonZeroDecimal:o});return st.default.createElement(pt.Token,q(b({},l),{showLastNonZeroDecimal:!0}))}},Gx=I(ij,{ssrStyles:()=>Promise.resolve().then(()=>(Ux(),Rx)),clientStyles:()=>(Ux(),j(Rx)).default});var cj=({entry:e,transaction:n,globalStyles:o,styles:i})=>{if(typeof e=="string")return hn.default.createElement("span",{className:o==null?void 0:o.mr1},e.replace("eGLD","EGLD"));if(Boolean(e.address)){let c;return e.address===n.sender&&(c=n.senderAssets),e.address===n.receiver&&(c=n.receiverAssets),Pn(e.address)?hn.default.createElement("div",{className:i==null?void 0:i.address},hn.default.createElement(qo,{initiator:e.address}),hn.default.createElement(We,{page:pn.accountDetails(e.address),"data-testid":"receiverLink",className:i==null?void 0:i.explorer},hn.default.createElement(io,{address:e.address,assets:c}))):""}if(Boolean(e.token&&e.token.length>0))return e.token.map((c,p)=>{var l;return hn.default.createElement("div",{key:`tx-${c.identifier}-${p}`,className:(0,Fi.default)(i==null?void 0:i.token,{[(l=i==null?void 0:i.spaced)!=null?l:""]:e.token.length>1})},hn.default.createElement(Gx,{token:c,showLastNonZeroDecimal:!0}),p<e.token.length-1&&hn.default.createElement("span",{className:i==null?void 0:i.comma},","))});if(Boolean(e.tokenNoValue&&e.tokenNoValue.length>0))return e.tokenNoValue.map((c,p)=>hn.default.createElement("div",{key:`tx-${c.token}-${p}`},hn.default.createElement(Gx,{token:c,noValue:!0,showLastNonZeroDecimal:!0}),p<e.tokenNoValue.length-1&&hn.default.createElement("span",{className:(0,Fi.default)(o==null?void 0:o.mlN1,o==null?void 0:o.mr1,o==null?void 0:o.dNone,o==null?void 0:o.dSmFlex)},",")));if(Boolean(e.tokenNoLink&&e.tokenNoLink.length>0))return e.tokenNoLink.map((c,p)=>hn.default.createElement("div",{key:`tx-${c.token}-${p}`},hn.default.createElement("span",{className:o==null?void 0:o.mr1},c.ticker),p<e.tokenNoLink.length-1&&hn.default.createElement("span",{className:(0,Fi.default)(o==null?void 0:o.mlN1,o==null?void 0:o.mr1,o==null?void 0:o.dNone,o==null?void 0:o.dSmFlex)},",")));if(Boolean(e.value))return hn.default.createElement("span",null,hn.default.createElement(On,{value:e.value,showLabel:!1,showLastNonZeroDecimal:!0}));if(Boolean(e.egldValue))return hn.default.createElement("span",null,hn.default.createElement(On,{value:e.egldValue,showLastNonZeroDecimal:!0}));if(Boolean(e.providerName)){let c=(0,Fi.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1,o==null?void 0:o.mrLg1,o==null?void 0:o.roundedCircle);return hn.default.createElement("span",{className:(0,Fi.default)(o==null?void 0:o.dFlex,o==null?void 0:o.mr1)},hn.default.createElement(We,{page:pn.providerDetails(n.receiver),className:(0,Fi.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignSelfCenter)},e.providerAvatar?hn.default.createElement("img",{src:e.providerAvatar,className:c,alt:" "}):hn.default.createElement(eW,{className:c}),e.providerName))}return null},tW=I(cj,{ssrStyles:()=>Promise.resolve().then(()=>(Vx(),Hx)),clientStyles:()=>(Vx(),j(Hx)).default});var aW=({transaction:e,styles:n})=>{let o=(0,ec.useMemo)(()=>e.action?vI(e.action):[],[e.action]);return ec.default.createElement("div",{"data-testid":"transactionAction",className:n==null?void 0:n.action},o.map((i,c)=>ec.default.createElement("div",{key:JSON.stringify(o)+c,className:n==null?void 0:n.result},ec.default.createElement(tW,{transaction:e,entry:i}))))},qx=I(aW,{ssrStyles:()=>Promise.resolve().then(()=>(zx(),$x)),clientStyles:()=>(zx(),j($x)).default});r();r();var dl=w(require("react")),iW=require("@fortawesome/free-solid-svg-icons"),pW=require("@fortawesome/react-fontawesome"),jx=w(require("classnames"));var mj=({transaction:e,globalStyles:n})=>{let{nonce:o}=wn(),{nonce:i}=e;return i>o?dl.default.createElement("div",{className:(0,jx.default)(n==null?void 0:n.dFlex,n==null?void 0:n.ml1)},dl.default.createElement(pW.FontAwesomeIcon,{icon:iW.faAngleDown,className:n==null?void 0:n.textSecondary,style:{marginTop:"2px"},transform:{rotate:45}}),"\xA0",dl.default.createElement("small",{className:(0,jx.default)(n==null?void 0:n.textWarning,n==null?void 0:n.ml1)}," ","Probable higher nonce in transaction")):null},Kx=I(mj,{});r();r();var oa=w(require("react")),e0=w(require("classnames"));Y();r();var na=w(require("react")),sW=require("@fortawesome/free-solid-svg-icons"),mW=require("@fortawesome/react-fontawesome"),dW=w(require("classnames"));Y();ln();var _j=e=>{let{className:n,value:o,styles:i}=e,{displayValue:c,validationWarnings:p,setActiveKey:l,decodeOptions:u}=AI(e),h=o&&o!==tn,g=T=>T?l(T.target.value):"raw";return na.default.createElement("div",{className:i==null?void 0:i.decode},na.default.createElement("div",{className:(0,dW.default)(i==null?void 0:i.textarea,n)},c),h&&na.default.createElement("div",{className:i==null?void 0:i.select},na.default.createElement("select",{className:i==null?void 0:i.dropdown,onChange:g},u.map(T=>na.default.createElement("option",{key:T.value,value:T.value},T.label)))),p.map((T,y)=>na.default.createElement("div",{key:y,className:i==null?void 0:i.warnings},na.default.createElement(mW.FontAwesomeIcon,{icon:sW.faExclamationTriangle,className:i==null?void 0:i.icon,size:"xs"}),na.default.createElement("small",{className:i==null?void 0:i.warning},T))))},Ri=I(_j,{ssrStyles:()=>Promise.resolve().then(()=>(Zx(),Xx)),clientStyles:()=>(Zx(),j(Xx)).default});r();r();r();var Yx=w(require("react")),hW=w(require("linkify-react"));r();var fW=w(require("react"));r();var _W=w(require("linkifyjs")),lj=/^((file:\/\/\/)|(https?:|ftps?:)\/\/|(mailto:))/i,uj=e=>lj.test(e),lW=e=>uj(e)?"":_W.find(e).some(n=>n.type==="email")?"mailto:":"http://",uW=(e,n)=>e.length>n?e.substring(0,n)+"\u2026":e;var gW=c=>{var p=c,{href:e,linkComponent:n,truncate:o}=p,i=_n(p,["href","linkComponent","truncate"]);let l=n!=null?n:"a",u=lW(e),h=o?uW(e,o):e;return fW.default.createElement(l,q(b({},i),{href:`${u}${e}`}),h)};var TW=o=>{var i=o,{children:e}=i,n=_n(i,["children"]);return Yx.default.createElement(hW.default,{options:{render:({attributes:p})=>{let{href:l}=p;return Yx.default.createElement(gW,q(b({},n),{href:l}))}}},e)};r();r();r();var go=w(require("react")),xW=require("@fortawesome/free-solid-svg-icons"),yW=require("@fortawesome/react-fontawesome"),nc=w(require("classnames"));var fj=e=>{let{globalStyles:n}=e,[o,i]=(0,go.useState)(!1),c=u=>{u.preventDefault(),i(!0)},p=()=>{i(!1)},l=e.href.replace("https://","").replace("http://","");return go.default.createElement(go.default.Fragment,null,go.default.createElement("a",q(b({},e),{onClick:c})),go.default.createElement(ss,{visible:o,onHide:p},go.default.createElement("div",{className:n==null?void 0:n.card},go.default.createElement("div",{className:(0,nc.default)(n==null?void 0:n.cardBody,n==null?void 0:n.textCenter)},go.default.createElement("p",{className:(0,nc.default)(n==null?void 0:n.h3,n==null?void 0:n.pt1)},go.default.createElement(yW.FontAwesomeIcon,{icon:xW.faExclamationTriangle,className:(0,nc.default)(n==null?void 0:n.textWarning,n==null?void 0:n.mr2)}),"Caution!"),go.default.createElement("p",{className:n==null?void 0:n.lead},"You are about to navigate to an external website."),go.default.createElement("div",{className:n==null?void 0:n.mxAuto},go.default.createElement("p",null,"This link is not part of MultiversX. Do not enter your private words, your keystore file or any of your MultiversX account information.")),go.default.createElement("div",{className:(0,nc.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter,n==null?void 0:n.flexColumn)},go.default.createElement("button",{type:"button",className:(0,nc.default)(n==null?void 0:n.btn,n==null?void 0:n.btnPrimary),onClick:p},"Back to safety"),go.default.createElement("a",{href:e.href,target:"_blank",className:n==null?void 0:n.mt3,rel:"noreferrer noopener"},"Continue to ",l))))))},vW=I(fj,{});var hj=1e6,Tj=({data:e,scamInfo:n,globalStyles:o,styles:i})=>{let{initialDecodeMethod:c,setDecodeMethod:p}=II(),[l,u]=(0,oa.useState)(!1),h=N=>{N.preventDefault(),u(A=>!A)},g=e?m.Buffer.from(e,"base64").toString():tn,{textWithLinks:T,message:y,isSuspicious:C}=lI({message:g,scamInfo:n});return oa.default.createElement(oa.default.Fragment,null,l?oa.default.createElement("div",{className:(0,e0.default)(o==null?void 0:o.formControl,o==null?void 0:o.col,o==null?void 0:o.mt1)},oa.default.createElement(TW,{linkComponent:vW,target:"_blank",rel:"noreferrer noopener"},T)):oa.default.createElement(Ri,{value:MA(y,hj),initialDecodeMethod:c,setDecodeMethod:p}),C&&oa.default.createElement("a",{href:"/#",onClick:h,className:(0,e0.default)(o==null?void 0:o.textMuted,i==null?void 0:i.smallFont)},l?"Hide":"Show"," original message"))},n0=I(Tj,{ssrStyles:()=>Promise.resolve().then(()=>(Qx(),Jx)),clientStyles:()=>(Qx(),j(Jx)).default});r();var _l=w(require("react")),ll=w(require("classnames"));var yj=({children:e,title:n,className:o="",colWidth:i="2",noBorder:c=!1,globalStyles:p,styles:l})=>{var u,h,g,T;return _l.default.createElement("div",{className:(0,ll.default)(p==null?void 0:p.row,l==null?void 0:l.detailItem,o,{[(u=p==null?void 0:p.pt3)!=null?u:""]:c,[(h=p==null?void 0:p.pb1)!=null?h:""]:c,[(g=p==null?void 0:p.borderBottom)!=null?g:""]:!c,[(T=p==null?void 0:p.py3)!=null?T:""]:!c})},_l.default.createElement("div",{className:(0,ll.default)(p==null?void 0:p.textSecondary,p==null?void 0:p.textLgRight,p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${i}`])},n),_l.default.createElement("div",{className:(0,ll.default)(p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${12-Number(i)}`])},e))},be=I(yj,{ssrStyles:()=>Promise.resolve().then(()=>(t0(),o0)),clientStyles:()=>(t0(),j(o0)).default});r();r();var Ui=w(require("react")),AW=require("@fortawesome/free-solid-svg-icons"),IW=require("@fortawesome/react-fontawesome");var wj=({result:e,styles:n})=>Ui.default.createElement(be,{title:"SC Result Hash",noBorder:!0},Ui.default.createElement("div",{className:n==null?void 0:n.contractDetailItem},Ui.default.createElement(kn,{text:e.hash}),Ui.default.createElement(Je,{className:n==null?void 0:n.copy,text:e.hash}),Ui.default.createElement(We,{className:n==null?void 0:n.explorer,page:pn.transactionDetails(`${e.originalTxHash}#${e.hash}`)},Ui.default.createElement(IW.FontAwesomeIcon,{icon:AW.faSearch})))),i0=I(wj,{ssrStyles:()=>Promise.resolve().then(()=>(a0(),r0)),clientStyles:()=>(a0(),j(r0)).default});r();r();var Xn=w(require("react")),FW=require("@fortawesome/free-solid-svg-icons"),RW=require("@fortawesome/react-fontawesome");Y();r();Ve();Nn();var bW=()=>{let{hash:e}=ye(),n=e.indexOf("/")>0?e.substring(e.indexOf("/")+1):"raw";return n&&Object.values(xo).includes(n)?n:"raw"};r();var s0=w(require("react"));r();r();var ul=w(require("react")),fl=w(require("classnames"));var Cj=({label:e,children:n,globalStyles:o,styles:i})=>ul.default.createElement("div",{className:(0,fl.default)(o==null?void 0:o.row,i==null?void 0:i.scResultWrapper)},ul.default.createElement("div",{className:(0,fl.default)(o==null?void 0:o.colSm2,i==null?void 0:i.label)},e),ul.default.createElement("div",{className:(0,fl.default)(o==null?void 0:o.colSm10,i==null?void 0:i.data)},n)),Aj=I(Cj,{ssrStyles:()=>Promise.resolve().then(()=>(c0(),p0)),clientStyles:()=>(c0(),j(p0)).default}),Ot=Aj;var Ij=e=>s0.default.createElement(Ot,{label:"Data"},s0.default.createElement(Ri,b({},e))),NW=Ij;r();var Gi=w(require("react")),PW=require("@fortawesome/free-solid-svg-icons"),kW=require("@fortawesome/react-fontawesome");var bj=({hash:e,page:n,styles:o})=>Gi.default.createElement("div",{className:o==null?void 0:o.scResultHash},Gi.default.createElement(Ot,{label:"Hash"},Gi.default.createElement(kn,{text:e,className:o==null?void 0:o.hash}),Gi.default.createElement(Je,{text:e,className:o==null?void 0:o.copy}),Gi.default.createElement(We,{className:o==null?void 0:o.explorer,page:n},Gi.default.createElement(kW.FontAwesomeIcon,{icon:PW.faSearch})))),Lj=I(bj,{ssrStyles:()=>Promise.resolve().then(()=>(Xr(),Kr)),clientStyles:()=>(Xr(),j(Kr)).default}),DW=Lj;r();var Hi=w(require("react"));var Pj=({receiver:e,assets:n,styles:o})=>Hi.default.createElement("div",{className:o==null?void 0:o.scResultReceiver},Hi.default.createElement(Ot,{label:"To"},Hi.default.createElement(qo,{initiator:e}),Hi.default.createElement("div",{className:o==null?void 0:o.address},Hi.default.createElement(io,{address:e,assets:n})),Hi.default.createElement(Je,{text:e,className:o==null?void 0:o.copy}))),kj=I(Pj,{ssrStyles:()=>Promise.resolve().then(()=>(d0(),m0)),clientStyles:()=>(d0(),j(m0)).default}),WW=kj;r();var Vi=w(require("react"));var Ej=({sender:e,assets:n,styles:o})=>Vi.default.createElement("div",{className:o==null?void 0:o.scResultSender},Vi.default.createElement(Ot,{label:"From"},Vi.default.createElement(qo,{initiator:e}),Vi.default.createElement("div",{className:o==null?void 0:o.address},Vi.default.createElement(io,{address:e,assets:n})),Vi.default.createElement(Je,{text:e,className:o==null?void 0:o.copy}))),Wj=I(Ej,{ssrStyles:()=>Promise.resolve().then(()=>(l0(),_0)),clientStyles:()=>(l0(),j(_0)).default}),BW=Wj;var Bj=({results:e,styles:n})=>{let o=(0,Xn.useRef)(null),i=bW(),[c,p]=(0,Xn.useState)(i);return(0,Xn.useEffect)(()=>{o.current&&o.current!==null&&(window==null||window.scrollTo({top:o.current.getBoundingClientRect().top-70,behavior:"smooth"}))},[]),Xn.default.createElement("div",{className:n==null?void 0:n.results},e.map(l=>{let u=dI(l.hash);return Xn.default.createElement("div",b({key:l.hash,id:l.hash,className:n==null?void 0:n.result},u?{ref:o}:{}),Xn.default.createElement("div",{className:n==null?void 0:n.icon},Xn.default.createElement(RW.FontAwesomeIcon,{icon:FW.faExchange})),Xn.default.createElement("div",{className:n==null?void 0:n.content},l.hash&&Xn.default.createElement(DW,{hash:l.hash,page:pn.transactionDetails(`${l.originalTxHash}#${l.hash}/${c}`)}),l.sender&&Xn.default.createElement(BW,{sender:l.sender,assets:l.senderAssets}),l.receiver&&Xn.default.createElement(WW,{receiver:l.receiver,assets:l.receiverAssets}),l.value!=null&&Xn.default.createElement(Ot,{label:"Value"},Xn.default.createElement(On,{value:l.value,showLastNonZeroDecimal:!0})),l.data&&Xn.default.createElement(NW,b({value:l.data?mI(l.data):tn},u?{initialDecodeMethod:i,setDecodeMethod:p}:{})),l.returnMessage&&Xn.default.createElement(Ot,{label:"Response"},l.returnMessage)))}))},g0=I(Bj,{ssrStyles:()=>Promise.resolve().then(()=>(f0(),u0)),clientStyles:()=>(f0(),j(u0)).default});r();r();var ta=w(require("react"));var Fj=({address:e,styles:n})=>ta.default.createElement(be,{title:"Address",noBorder:!0},ta.default.createElement("div",{className:n==null?void 0:n.addressDetailItem},ta.default.createElement(qo,{initiator:e}),Pn(e)&&ta.default.createElement(ta.default.Fragment,null,ta.default.createElement(We,{page:pn.accountDetails(e),className:n==null?void 0:n.explorer},ta.default.createElement(kn,{text:e})),ta.default.createElement(Je,{text:e,className:n==null?void 0:n.copy})))),gl=I(Fj,{ssrStyles:()=>Promise.resolve().then(()=>(T0(),h0)),clientStyles:()=>(T0(),j(h0)).default});r();r();var An=w(require("react")),VW=require("@fortawesome/free-solid-svg-icons"),$W=require("@fortawesome/react-fontawesome"),Tl=w(require("classnames"));r();ln();Nn();var GW=()=>{var i;let{hash:e}=ye();return(i=e.split("/")[2])!=null?i:"raw"};var Uj=({topics:e,identifier:n})=>{let o=e.filter(i=>i).join(`
`);return An.default.createElement(Ri,{value:o,identifier:n})},hl=({label:e,children:n,globalStyles:o,styles:i})=>An.default.createElement("div",{className:(0,Tl.default)(o==null?void 0:o.row,i==null?void 0:i.row)},An.default.createElement("div",{className:(0,Tl.default)(o==null?void 0:o.colSm2,i==null?void 0:i.label)},e),An.default.createElement("div",{className:(0,Tl.default)(o==null?void 0:o.colSm10,i==null?void 0:i.data)},n)),Gj=({events:e,id:n,globalStyles:o,styles:i})=>{let c=(0,An.useRef)(null),p=GW();return(0,An.useEffect)(()=>{c.current&&c.current!==null&&(window==null||window.scrollTo({top:c.current.getBoundingClientRect().top-70,behavior:"smooth"}))},[]),An.default.createElement("div",{className:i==null?void 0:i.events},e.map((l,u)=>{let h=pI(l),g=cI(l,n);return An.default.createElement("div",b({key:u,className:i==null?void 0:i.event},g?{ref:c}:{}),An.default.createElement("div",{className:i==null?void 0:i.icon},An.default.createElement($W.FontAwesomeIcon,{icon:VW.faExchange})),An.default.createElement("div",{className:i==null?void 0:i.content},l.address!=null&&An.default.createElement(hl,{label:"Hash",globalStyles:o,styles:i},An.default.createElement(kn,{text:l.address,className:i==null?void 0:i.hash}),An.default.createElement(Je,{text:l.address,className:i==null?void 0:i.copy})),l.identifier!=null&&An.default.createElement(hl,{label:"Identifier",globalStyles:o,styles:i},l.identifier),l.topics!=null&&l.topics.length>0&&An.default.createElement(hl,{label:"Topics",globalStyles:o,styles:i},An.default.createElement(Uj,{topics:l.topics,identifier:l.identifier})),l.data!=null&&An.default.createElement(hl,{label:"Data",globalStyles:o,styles:i},An.default.createElement(Ri,b({value:h},g?{initialDecodeMethod:p}:{})))))}))},xl=I(Gj,{ssrStyles:()=>Promise.resolve().then(()=>(y0(),x0)),clientStyles:()=>(y0(),j(x0)).default});r();r();var ur=w(require("react")),ra=require("@fortawesome/free-solid-svg-icons"),oc=require("@fortawesome/react-fontawesome"),$i=w(require("classnames"));var zW=(e,n)=>{let o=()=>ur.default.createElement(ur.default.Fragment,null),i="",{failed:c,invalid:p,pending:l,success:u}=Ip(e);return e.pendingResults&&(i=n==null?void 0:n.textWarning,o=()=>ur.default.createElement(oc.FontAwesomeIcon,{icon:ra.faHourglass,className:(0,$i.default)(n==null?void 0:n.mr2,i)})),c&&(i=n==null?void 0:n.textDanger,o=()=>ur.default.createElement(oc.FontAwesomeIcon,{icon:ra.faTimes,className:(0,$i.default)(n==null?void 0:n.mr2,i)})),p&&(i=n==null?void 0:n.textDanger,o=()=>ur.default.createElement(oc.FontAwesomeIcon,{icon:ra.faBan,className:(0,$i.default)(n==null?void 0:n.mr2,i)})),u&&(i=n==null?void 0:n.textSuccess,o=()=>ur.default.createElement(oc.FontAwesomeIcon,{icon:ra.faCheckCircle,className:(0,$i.default)(n==null?void 0:n.mr2,i)})),l&&(i=n==null?void 0:n.textWarning,o=()=>ur.default.createElement(oc.FontAwesomeIcon,{icon:ra.faHourglass,className:(0,$i.default)(n==null?void 0:n.mr2,i)})),{Icon:o,color:i}},Hj=({className:e,transaction:n,globalStyles:o})=>{let{Icon:i}=zW(n,o);return ur.default.createElement("span",{className:(0,$i.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,o==null?void 0:o.textCapitalize,o==null?void 0:o.mr2,e)},ur.default.createElement(i,null),gI(n))},v0=I(Hj,{});r();r();r();var yl=w(require("react"));var $j=({className:e,transaction:n,styles:o})=>yl.default.createElement(be,{className:e,title:"Hash"},yl.default.createElement("div",{className:o==null?void 0:o.hash},n.txHash,yl.default.createElement(Je,{text:n.txHash,className:o==null?void 0:o.copy}))),C0=I($j,{ssrStyles:()=>Promise.resolve().then(()=>(S0(),w0)),clientStyles:()=>(S0(),j(w0)).default});r();r();var ja=w(require("react")),wl=require("@fortawesome/free-solid-svg-icons"),A0=require("@fortawesome/react-fontawesome"),Us=w(require("classnames"));Y();r();var vl=w(require("react"));var zj=({value:e,short:n=!1,tooltip:o=!1,styles:i})=>{let c=WA(e*1e3,n),p=o?vl.default.createElement("span",{title:Od({value:e,noSeconds:!1,utc:!0}),"data-testid":`timeAgo-${e}`},c):vl.default.createElement("span",{"data-testid":`timeAgo-${e}`},c);return vl.default.createElement("span",{className:i==null?void 0:i.transactionCell},p)},Rs=I(zj,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});var qj=({className:e,transaction:n,globalStyles:o})=>{let{pending:i}=Ip(n);return ja.default.createElement(be,{className:e,title:"Age"},n.timestamp!=null?ja.default.createElement("div",{className:(0,Us.default)(o==null?void 0:o.dFlex,o==null?void 0:o.flexWrap,o==null?void 0:o.alignItemsCenter),"data-testid":"transactionAge"},i?ja.default.createElement(A0.FontAwesomeIcon,{icon:wl.faSpinner,className:(0,Us.default)(o==null?void 0:o.mr2,o==null?void 0:o.textSecondary,"fa-spin","slow-spin")}):ja.default.createElement(A0.FontAwesomeIcon,{icon:wl.faClock,className:(0,Us.default)(o==null?void 0:o.mr2,o==null?void 0:o.textSecondary)}),ja.default.createElement(Rs,{value:n.timestamp,short:!0}),ja.default.createElement("span",{className:(0,Us.default)(o==null?void 0:o.textSecondary,o==null?void 0:o.ml2)},"(",Od({value:n.timestamp,utc:!0}),")")):ja.default.createElement("span",{className:o==null?void 0:o.textSecondary},tn))},I0=I(qj,{});r();r();var Sl=w(require("react")),jW=w(require("classnames"));var jj=({className:e,transaction:n,globalStyles:o})=>Sl.default.createElement(be,{className:e,title:"Status"},Sl.default.createElement("div",{className:(0,jW.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter,o==null?void 0:o.flexWrap)},Sl.default.createElement(v0,{transaction:n}))),b0=I(jj,{});r();r();var aa=w(require("react"));Y();var Xj=({className:e,transaction:n,styles:o})=>aa.default.createElement(be,{className:e,title:"Miniblock"},aa.default.createElement("div",{className:o==null?void 0:o.miniblock},n.miniBlockHash?aa.default.createElement(aa.default.Fragment,null,aa.default.createElement(We,{page:`/${Ed}/${n.miniBlockHash}`,className:o==null?void 0:o.explorer},aa.default.createElement(kn,{text:n.miniBlockHash,className:o==null?void 0:o.trim})),aa.default.createElement(Je,{text:n.miniBlockHash,className:o==null?void 0:o.copy})):aa.default.createElement("span",{className:o==null?void 0:o.void},tn))),P0=I(Xj,{ssrStyles:()=>Promise.resolve().then(()=>(N0(),L0)),clientStyles:()=>(N0(),j(L0)).default});r();r();var zi=w(require("react")),ZW=w(require("classnames"));Y();var Yj=({className:e,transaction:n,styles:o})=>{let i=ir(),c=fI(n),p=c&&tt(c)?vn({input:c,showLastNonZeroDecimal:!0}):tn,l=n.price!=null?tr({amount:p,usd:n.price,decimals:4,addEqualSign:!0}):tn,u=n.gasUsed!=null?zi.default.createElement(zi.default.Fragment,null,p," ",i," ",zi.default.createElement("span",{className:o==null?void 0:o.price},"(",l,")")):zi.default.createElement("span",{className:o==null?void 0:o.price},tn);return zi.default.createElement(be,{title:"Transaction Fee",className:(0,ZW.default)(o==null?void 0:o.fee,e)},zi.default.createElement("span",{"data-testid":"transactionInfoFee"},u))},E0=I(Yj,{ssrStyles:()=>Promise.resolve().then(()=>(D0(),k0)),clientStyles:()=>(D0(),j(k0)).default});r();r();var mt=w(require("react")),JW=w(require("classnames"));var Qj=({className:e,transaction:n,styles:o})=>mt.default.createElement(be,{title:"From",className:(0,JW.default)(o==null?void 0:o.from,e)},mt.default.createElement("div",{className:o==null?void 0:o.wrapper},mt.default.createElement(qo,{initiator:n.sender}),Pn(n.sender)?mt.default.createElement(mt.default.Fragment,null,mt.default.createElement(We,{page:String(n.links.senderLink),className:o==null?void 0:o.explorer},mt.default.createElement(io,{address:n.sender,assets:n.senderAssets})),mt.default.createElement(Je,{className:o==null?void 0:o.copy,text:n.sender}),mt.default.createElement(We,{page:String(n.links.senderShardLink),className:o==null?void 0:o.shard},"(",mt.default.createElement(_r,{shard:n.senderShard}),")")):mt.default.createElement("span",{className:o==null?void 0:o.shard},"(",mt.default.createElement(_r,{shard:n.sender}),")"))),B0=I(Qj,{ssrStyles:()=>Promise.resolve().then(()=>(M0(),W0)),clientStyles:()=>(M0(),j(W0)).default});r();r();var Ao=w(require("react")),R0=require("@fortawesome/free-solid-svg-icons"),U0=require("@fortawesome/react-fontawesome"),eM=w(require("classnames"));Y();en();var nK=({className:e,transaction:n,styles:o})=>{let i=Hd(n),c=n.status==="reward-reverted";return Ao.default.createElement(be,{title:"To",className:(0,eM.default)(o==null?void 0:o.to,e)},Ao.default.createElement("div",{className:o==null?void 0:o.wrapper,"data-testid":"transactionTo"},Ao.default.createElement("div",{className:o==null?void 0:o.content},Fr(n.receiver)&&Ao.default.createElement("span",{className:o==null?void 0:o.contract,"data-testid":"transactionToContract"},"Contract"),Ao.default.createElement(We,{page:String(n.links.receiverLink),"data-testid":"transactionToExplorerLink",className:o==null?void 0:o.explorer},Ao.default.createElement(io,{address:n.receiver,assets:n.receiverAssets,"data-testid":"transactionToAccount"})),Ao.default.createElement(Je,{className:o==null?void 0:o.copy,text:n.receiver}),!isNaN(n.receiverShard)&&Ao.default.createElement(We,{page:String(n.links.receiverShardLink),className:o==null?void 0:o.shard},"(",Ao.default.createElement(_r,{shard:n.receiverShard,"data-testid":"transactionToShard"}),")")),i.map((p,l)=>Ao.default.createElement("div",{"data-testid":`message_${l}`,key:`tx-message-${l}`,className:o==null?void 0:o.message},Ao.default.createElement(U0.FontAwesomeIcon,{icon:R0.faAngleDown,className:o==null?void 0:o.icon,style:{marginTop:"2px"},transform:{rotate:45}}),Ao.default.createElement("small",{className:o==null?void 0:o.text},p))),c&&Ao.default.createElement("div",{className:o==null?void 0:o.message},Ao.default.createElement(U0.FontAwesomeIcon,{icon:R0.faAngleDown,className:o==null?void 0:o.icon,style:{marginTop:"2px"},transform:{rotate:45}}),Ao.default.createElement("small",{className:o==null?void 0:o.text},"Block Reverted"))))},G0=I(nK,{ssrStyles:()=>Promise.resolve().then(()=>(F0(),O0)),clientStyles:()=>(F0(),j(O0)).default});r();r();var Cl=w(require("react")),oM=w(require("classnames"));Y();var tK=({className:e,transaction:n,styles:o})=>{let i=ir(),c=vn({input:n.value,showLastNonZeroDecimal:!0}),p=vn({input:n.value,addCommas:!1,showLastNonZeroDecimal:!0});return Cl.default.createElement(be,{title:"Value",className:(0,oM.default)(o==null?void 0:o.value,e)},Cl.default.createElement("span",{"data-testid":"transactionInfoValue"},c," ",i," ",Cl.default.createElement("span",{className:o==null?void 0:o.price},n.price!=null?`(${tr({amount:p,usd:n.price,decimals:2,addEqualSign:!0})})`:tn)))},$0=I(tK,{ssrStyles:()=>Promise.resolve().then(()=>(V0(),H0)),clientStyles:()=>(V0(),j(H0)).default});r();r();var tc=w(require("react"));ln();var z0=({className:e,transaction:n})=>{var c;let o=n.action&&n.action.category,i=((c=n.action)==null?void 0:c.category)!=="scCall";return o?tc.default.createElement(tc.default.Fragment,null,tc.default.createElement(be,{className:e,title:"Method"},Cp(n)),i&&tc.default.createElement(be,{className:e,title:"Transaction Action"},tc.default.createElement(qx,{transaction:n}))):null};r();r();var qi=w(require("react")),tM=w(require("classnames"));var rK=({className:e,transaction:n,globalStyles:o})=>{let i=qc(n);return i.length>0?qi.default.createElement(be,{className:e,title:qi.default.createElement(qi.default.Fragment,null,qi.default.createElement("span",{className:o==null?void 0:o.mr2},"Token Operations"),qi.default.createElement("span",{className:(0,tM.default)(o==null?void 0:o.badge,o==null?void 0:o.badgeSecondary,o==null?void 0:o.badgePill,o==null?void 0:o.fontWeightLight)},i.length))},qi.default.createElement(Ox,{transaction:n,operations:i})):null},q0=I(rK,{});r();r();var X0=w(require("react"));Y();var iK=({className:e,transaction:n,styles:o})=>X0.default.createElement(be,{className:e,title:"EGLD Price"},n.price!=null?tr({amount:"1",usd:n.price}):X0.default.createElement("span",{className:o==null?void 0:o.price},tn)),Z0=I(iK,{ssrStyles:()=>Promise.resolve().then(()=>(K0(),j0)),clientStyles:()=>(K0(),j(j0)).default});r();r();var Q0=w(require("react"));Y();var cK=({className:e,transaction:n,styles:o})=>Q0.default.createElement(be,{className:e,title:"Gas Limit"},n.gasLimit!=null?n.gasLimit.toLocaleString("en"):Q0.default.createElement("span",{className:o==null?void 0:o.gas},tn)),ey=I(cK,{ssrStyles:()=>Promise.resolve().then(()=>(J0(),Y0)),clientStyles:()=>(J0(),j(Y0)).default});r();r();var Al=w(require("react"));Y();var mK=({className:e,transaction:n,styles:o})=>Al.default.createElement(be,{className:e,title:"Gas Price"},n.gasPrice!=null?Al.default.createElement(On,{value:n.gasPrice.toString(),showLastNonZeroDecimal:!0}):Al.default.createElement("span",{className:o==null?void 0:o.gas},tn)),ty=I(mK,{ssrStyles:()=>Promise.resolve().then(()=>(oy(),ny)),clientStyles:()=>(oy(),j(ny)).default});r();r();var iy=w(require("react"));Y();var _K=({className:e,transaction:n,styles:o})=>iy.default.createElement(be,{className:e,title:"Gas Used"},n.gasUsed!=null?n.gasUsed.toLocaleString("en"):iy.default.createElement("span",{className:o==null?void 0:o.gas},tn)),py=I(_K,{ssrStyles:()=>Promise.resolve().then(()=>(ay(),ry)),clientStyles:()=>(ay(),j(ry)).default});r();r();var Gs=w(require("react"));var cy=({className:e,transaction:n})=>Gs.default.createElement(be,{className:e,title:"Nonce"},Gs.default.createElement(Gs.default.Fragment,null,n.nonce,Gs.default.createElement(Kx,{transaction:n})));r();r();var sy=w(require("react"));var my=({className:e,transaction:n})=>{var i,c;return n.results&&((i=n.results)==null?void 0:i.length)>0?sy.default.createElement(be,{className:e,title:"Smart Contract Results"},sy.default.createElement(g0,{results:(c=n.results)!=null?c:[]})):null};r();r();var dy=w(require("react"));var _y=({className:e,transaction:n})=>dy.default.createElement(be,{className:e,title:"Input Data"},dy.default.createElement(n0,{data:n.data,scamInfo:n.scamInfo}));r();r();var Wo=w(require("react")),cM=w(require("classnames"));var lK=e=>{var n,o;return((n=e==null?void 0:e.logs)==null?void 0:n.events)&&((o=e.logs.events)==null?void 0:o.length)>0},uK=({transaction:e,globalStyles:n})=>{var i;return e.results&&e.results.length>0?Wo.default.createElement("div",{className:n==null?void 0:n.row},(i=e.results)==null?void 0:i.map((c,p)=>{var l;return c.logs?Wo.default.createElement("div",{key:`tx-result-log-${p}`,className:(0,cM.default)(n==null?void 0:n.col12,n==null?void 0:n.borderBottom)},Wo.default.createElement(i0,{result:c}),c.logs.address!==void 0&&Wo.default.createElement(gl,{address:c.logs.address}),lK(c)&&Wo.default.createElement(be,{title:"Events"},Wo.default.createElement(xl,{events:c.logs.events,id:(l=c.logs)==null?void 0:l.id}))):null})):null},fK=I(uK,{}),gK=({transaction:e})=>{var o,i,c,p;let n=((o=e.logs)==null?void 0:o.events)&&((c=(i=e.logs)==null?void 0:i.events)==null?void 0:c.length)>0;return Wo.default.createElement(Wo.default.Fragment,null,e.logs&&Wo.default.createElement(Wo.default.Fragment,null,e.logs.address!=null&&Wo.default.createElement(gl,{address:e.logs.address}),n&&Wo.default.createElement(be,{title:"Events"},Wo.default.createElement(xl,{events:e.logs.events,id:(p=e.logs)==null?void 0:p.id}))),Wo.default.createElement(fK,{transaction:e}))};r();var Gn=w(require("react"));var hK=({transaction:e})=>Gn.default.createElement(Gn.default.Fragment,null,Gn.default.createElement(C0,{transaction:e}),Gn.default.createElement(b0,{transaction:e}),Gn.default.createElement(I0,{transaction:e}),Gn.default.createElement(P0,{transaction:e}),Gn.default.createElement(B0,{transaction:e}),Gn.default.createElement(G0,{transaction:e}),Gn.default.createElement($0,{transaction:e}),Gn.default.createElement(z0,{transaction:e}),Gn.default.createElement(q0,{transaction:e}),Gn.default.createElement(E0,{transaction:e}),Gn.default.createElement(Z0,{transaction:e}),Gn.default.createElement(ey,{transaction:e}),Gn.default.createElement(py,{transaction:e}),Gn.default.createElement(ty,{transaction:e}),Gn.default.createElement(cy,{transaction:e}),Gn.default.createElement(_y,{transaction:e}),Gn.default.createElement(my,{transaction:e}));r();r();var po=w(require("react")),VM=w(require("classnames")),$M=require("react-dom");Ye();Ve();Dr();r();r();r();var Nl=w(require("react"));r();var dt=w(require("react")),mM=w(require("classnames"));Xm();mi();var Hs="toastProgress",xK=({id:e,children:n,progress:o,done:i,expiresIn:c=10*60,className:p="dapp-progress",isCrossShard:l=!1,styles:u})=>{let{currentRemaining:h,totalSeconds:g}=(0,dt.useMemo)(()=>{let G=(vo.session.getItem(Hs)||{})[e],Z=o?o.endTime-o.startTime:0;return{currentRemaining:G||100,totalSeconds:Z}},[]),T=(0,dt.useRef)(null),y=(0,dt.useRef)(),C=(0,dt.useRef)(h);(0,dt.useEffect)(()=>{if(o!=null)return i?W():B(),()=>{clearInterval(y.current)}},[o,i]);function N(){let R=vo.session.getItem(Hs);!Boolean(R==null?void 0:R[e])||(delete R[e],P(R))}function A(R){let G=vo.session.getItem(Hs)||{};G[e]=R,P(G)}function P(R){vo.session.setItem({key:Hs,data:R,expires:lC(c)})}function W(){if(C.current<100){z(0);return}y.current=setInterval(()=>{if(T.current==null)return;let G=C.current-1;G<=0?(clearInterval(y.current),N(),z(0)):(A(G),z(G))},C_)}function B(){if((vo.session.getItem(Hs)||{})[e]===C.current){let Z=nh({remaining:C.current,totalSeconds:g,isCrossShard:l});z(Z),A(Z)}y.current=setInterval(()=>{if(T.current==null)return;let Z=nh({remaining:C.current,totalSeconds:g,isCrossShard:l});A(Z),z(Z)},C_)}function z(R){C.current=R,K()}function K(){if(T.current==null)return;let R=C.current;T.current.style.width=`${R}%`,T.current.ariaValueNow=R}return o?dt.default.createElement("div",{className:(0,mM.default)(u==null?void 0:u.progress,p)},dt.default.createElement("div",{ref:T,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,className:u==null?void 0:u.bar}),n):dt.default.createElement(dt.default.Fragment,null,n)},dM=I(xK,{ssrStyles:()=>Promise.resolve().then(()=>(uy(),ly)),clientStyles:()=>(uy(),j(ly)).default});r();r();var fy=w(require("react")),_M=require("@fortawesome/free-solid-svg-icons"),lM=require("@fortawesome/react-fontawesome");Y();var Il=({className:e="dapp-default-toast-delete-button",onClick:n})=>fy.default.createElement("button",{type:"button",className:e,onClick:n,"data-testid":"deleteToastButton"},fy.default.createElement(lM.FontAwesomeIcon,{icon:_M.faTimes,size:"xs"}));r();var Ut=w(require("react")),TM=require("@fortawesome/react-fontawesome"),Ty=w(require("classnames"));Y();r();r();var Ka=w(require("react"));Ve();Dr();r();r();var ji=w(require("react")),rc=require("@fortawesome/free-solid-svg-icons"),fM=require("@fortawesome/react-fontawesome"),hy=w(require("classnames"));Y();var vK={icon:rc.faCheck},gy={icon:rc.faTimes},wK={icon:rc.faCircleNotch},SK={pending:wK,success:vK,fail:gy,invalid:gy,timedOut:gy},CK=({className:e,hash:n,status:o,iconSrc:i,isTimedOut:c,globalStyles:p,styles:l})=>{var g;let u=o?SK[o]:null,h=(g=i==null?void 0:i.icon)!=null?g:u==null?void 0:u.icon;return ji.default.createElement("div",{className:(0,hy.default)(l==null?void 0:l.container,e),key:n,"data-testid":"transactionDetailsToastBody"},!c&&h!=null&&ji.default.createElement(fM.FontAwesomeIcon,{icon:h,className:(0,hy.default)(l==null?void 0:l.icon,{"fa-spin slow-spin":o==="pending"})}),ji.default.createElement("span",{className:l==null?void 0:l.trim},ji.default.createElement(kn,{text:n})),ji.default.createElement(Je,{text:n}),ji.default.createElement(We,{page:`/${ot}/${n}`,className:p==null?void 0:p.ml2}))},bl=I(CK,{ssrStyles:()=>Promise.resolve().then(()=>(pa(),ia)),clientStyles:()=>(pa(),j(ia)).default});var AK=({title:e,transactions:n,isTimedOut:o=!1,className:i="dapp-transaction-details",styles:c})=>{if(n==null)return null;let{address:p}=wn(),l=(0,Ka.useMemo)(()=>{let h=n.filter(T=>!fd(et[T==null?void 0:T.status])).length,g=n.length;return g===1&&h===1?fd(et[n[0].status])?"Processing transaction":"Transaction processed":`${h} / ${g} transactions processed`},[n]),u=n.length===1&&n[0].sender!==p;return Ka.default.createElement(Ka.default.Fragment,null,e&&Ka.default.createElement("div",{className:c==null?void 0:c.title},e),!u&&Ka.default.createElement("div",{className:c==null?void 0:c.status},l),n.map(({hash:h,status:g})=>{let T={className:i,hash:h,status:et[g],isTimedOut:o};return Ka.default.createElement(bl,q(b({},T),{key:h}))}))},gM=I(AK,{ssrStyles:()=>Promise.resolve().then(()=>(pa(),ia)),clientStyles:()=>(pa(),j(ia)).default});var bK=({style:e,toastDataState:n,transactions:o,showCloseButton:i,onDeleteToast:c,toastTitle:p,isTimedOut:l,customElements:u={CustomCloseButton:Il,TransactionToastStatusIcon:TM.FontAwesomeIcon,TransactionDetails:gM},globalStyles:h,styles:g})=>{let T=u==null?void 0:u.TransactionDetails,y=u==null?void 0:u.TransactionToastStatusIcon,C=u==null?void 0:u.CustomCloseButton;return Ut.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},Ut.default.createElement("div",{className:e.left},Ut.default.createElement("div",{className:(0,Ty.default)(e.icon,n.iconClassName)},y&&Ut.default.createElement(y,{size:"5x",icon:n.icon,className:e.svg}))),Ut.default.createElement("div",{className:e.right},Ut.default.createElement("div",{className:e.heading},Ut.default.createElement("h5",{className:(0,Ty.default)([h==null?void 0:h.h5,e.mb4]),"data-testid":"transactionToastTitle"},n.title),i&&C&&Ut.default.createElement(C,{className:g==null?void 0:g.close,onClick:c})),Ut.default.createElement("div",{className:e.footer},T&&Ut.default.createElement(T,{transactions:o,title:p,isTimedOut:l}))))},xM=I(bK,{ssrStyles:()=>Promise.resolve().then(()=>(Rt(),Ft)),clientStyles:()=>(Rt(),j(Ft)).default});r();var vM=w(require("react")),wM=w(require("classnames"));var NK=({className:e="dapp-transaction-toast-wrapper",children:n,id:o,styles:i})=>vM.default.createElement("div",{id:o,className:(0,wM.default)(i==null?void 0:i.toasts,i==null?void 0:i.toastWrapper,e)},n),Ll=I(NK,{ssrStyles:()=>Promise.resolve().then(()=>(sa(),ca)),clientStyles:()=>(sa(),j(ca)).default});r();var Ki=require("react");Y();Dc();Ef();Dr();r();r();var fr=require("@fortawesome/free-solid-svg-icons");Ve();var SM=({address:e,classes:n={success:"success",danger:"danger",warning:"warning"},sender:o,status:i,toastId:c,transactionDisplayInfo:p})=>{var C,N,A,P,W;let l={id:c,icon:fr.faCheck,expires:3e4,hasCloseButton:!0,title:(C=p==null?void 0:p.successMessage)!=null?C:"Transaction successful",iconClassName:n.success},u={id:c,icon:fr.faCheck,expires:3e4,hasCloseButton:!0,title:"Transaction received",iconClassName:n.success},h={id:c,expires:!1,icon:fr.faHourglass,hasCloseButton:!1,title:(N=p==null?void 0:p.processingMessage)!=null?N:"Processing transaction",iconClassName:n.warning},g={id:c,icon:fr.faTimes,title:(A=p==null?void 0:p.errorMessage)!=null?A:"Transaction failed",hasCloseButton:!0,iconClassName:n.danger},T={id:c,icon:fr.faBan,title:(P=p==null?void 0:p.invalidMessage)!=null?P:"Transaction invalid",hasCloseButton:!0,iconClassName:n==null?void 0:n.warning},y={id:c,icon:fr.faTimes,title:(W=p==null?void 0:p.timedOutMessage)!=null?W:"Transaction timed out",hasCloseButton:!0,iconClassName:n.warning};switch(i){case"signed":case"sent":return h;case"success":return o!==e?u:l;case"cancelled":case"fail":return g;case"timedOut":return y;case"invalid":return T;default:return h}};var CM=({toastId:e,transactions:n,status:o,lifetimeAfterSuccess:i,startTimestamp:c,endTimeProgress:p,onDelete:l})=>{let{styles:u}=lp({ssrImportCallback:()=>Promise.resolve().then(()=>(Rt(),Ft)),clientImportCallback:()=>(Rt(),j(Ft)).default}),h=tb(e),g=Q(q1),{address:T}=wn(),y=(0,Ki.useRef)(),C=(0,Ki.useMemo)(()=>dA(n,g),[n,g]),N=C?6e3:5*6e3,A=(h==null?void 0:h.transactionDuration)||N,[P,W]=(0,Ki.useMemo)(()=>{let re=c||wa(),pe=p||_C(A);return[re,pe]},[]),B={startTime:P,endTime:W},z=Yt(o),K=Ca(o),R=Sa(o),G=Bc(o),Z=K||R||G,ie=SM({address:T,classes:u!=null?u:{},sender:(n==null?void 0:n[0].sender)||T,status:o,toastId:e,transactionDisplayInfo:h}),ee=()=>{l==null||l(e)};return(0,Ki.useEffect)(()=>{if(!(!Z||!i||y.current))return y.current=setTimeout(()=>{ee()},i),()=>{y.current&&(ee(),clearTimeout(y.current))}},[i,Z]),{isCrossShard:!C,progress:B,isPending:z,isTimedOut:G,toastDataState:ie,handleDeleteToast:ee}};var kK=({className:e="dapp-transaction-toast",customization:n,endTimeProgress:o,lifetimeAfterSuccess:i,onDelete:c,startTimestamp:p,status:l,styles:u,title:h="",toastId:g,transactions:T})=>{var K,R;let{isCrossShard:y,progress:C,isPending:N,isTimedOut:A,toastDataState:P,handleDeleteToast:W}=CM({toastId:g,transactions:T,status:l,lifetimeAfterSuccess:i,startTimestamp:p,endTimeProgress:o,onDelete:c}),B=(K=n==null?void 0:n.Progress)!=null?K:dM,z=(R=n==null?void 0:n.TransactionToastContent)!=null?R:xM;return Nl.default.createElement(Ll,{className:e,id:`toast-${g}`},Nl.default.createElement(B,{key:g,id:g,progress:C,expiresIn:i,done:!N||A,isCrossShard:y},Nl.default.createElement(z,{customElements:n==null?void 0:n.TransactionToastContentCustomElements,isTimedOut:A,onDeleteToast:W,showCloseButton:!N,style:u!=null?u:{},toastDataState:P,toastTitle:h,transactions:T!=null?T:[]})))},Vs=I(kK,{ssrStyles:()=>Promise.resolve().then(()=>(Rt(),Ft)),clientStyles:()=>(Rt(),j(Ft)).default});r();r();var js=w(require("react"));Ve();r();r();var Pl=w(require("react")),NM=w(require("classnames"));r();r();var AM=require("react"),IM=({duration:e,onDelete:n})=>{(0,AM.useEffect)(()=>{let o;return e&&(o=setTimeout(n,e)),()=>{clearTimeout(o)}},[e])};r();var $s=w(require("react"));var ac=({CustomCloseButton:e,onDelete:n})=>{let{styles:o}=lp({ssrImportCallback:()=>Promise.resolve().then(()=>(yy(),xy)),clientImportCallback:()=>(yy(),j(xy)).default});return(0,$s.useMemo)(()=>e?$s.default.createElement(e,{onClick:n}):$s.default.createElement(Il,{onClick:n,className:o==null?void 0:o.close}),[e,n,o])};r();function LM(e){var n;try{let o=e,i=ui(q(b({},o),{chainID:(n=o.chainID)!=null?n:"D"}));return Boolean(i)}catch(o){return!1}}var EK=({onDelete:e,message:n,messageComponent:o,CustomCloseButton:i,className:c="dapp-custom-toast",toastId:p,styles:l})=>{let u=ac({onDelete:e,CustomCloseButton:i});return Pl.default.createElement("div",{id:p,className:(0,NM.default)(l==null?void 0:l.toasts,l==null?void 0:l.toastWrapper,c)},Pl.default.createElement(Pl.default.Fragment,null,u,o||n))},PM=I(EK,{ssrStyles:()=>Promise.resolve().then(()=>(sa(),ca)),clientStyles:()=>(sa(),j(ca)).default});r();r();var gr=w(require("react")),OM=require("@fortawesome/free-solid-svg-icons"),FM=require("@fortawesome/react-fontawesome"),wy=w(require("classnames"));r();r();var qs=w(require("react"));r();r();var zs=w(require("react"));r();var kM=w(require("react"));var WK=({children:e,styles:n})=>kM.default.createElement("div",{className:n==null?void 0:n.footer},e),Xa=I(WK,{ssrStyles:()=>Promise.resolve().then(()=>(Rt(),Ft)),clientStyles:()=>(Rt(),j(Ft)).default});var MK=e=>{var l;let{className:n,transaction:o}=e,{address:i}=wn(),{network:{explorerAddress:c}}=rt(),p=Rd({transaction:o,address:i!=null?i:"",explorerAddress:c});return zs.default.createElement(Xa,null,zs.default.createElement("div",{className:(l=e.styles)==null?void 0:l.status},zs.default.createElement(Jp,{transaction:p})),zs.default.createElement(bl,{className:n,hash:p.txHash,status:p.status}))},DM=I(MK,{ssrStyles:()=>Promise.resolve().then(()=>(pa(),ia)),clientStyles:()=>(pa(),j(ia)).default});r();var kl=w(require("react")),EM=w(require("classnames"));var BK=e=>{var c,p;let{className:n,message:o,status:i}=e;return kl.default.createElement(Xa,null,i&&kl.default.createElement("div",{className:(c=e.styles)==null?void 0:c.status},i),kl.default.createElement("div",{className:(0,EM.default)((p=e.styles)==null?void 0:p.container,n)},o))},WM=I(BK,{ssrStyles:()=>Promise.resolve().then(()=>(pa(),ia)),clientStyles:()=>(pa(),j(ia)).default});r();var vy=w(require("react"));var MM=e=>{let n=A_(e.toastId);return vy.default.createElement(Xa,b({},e),n&&vy.default.createElement(n,null))};var BM=e=>{let{transaction:n,message:o,component:i}=e;return n&&LM(n)?qs.default.createElement(DM,b({},e)):o?qs.default.createElement(WM,b({},e)):i!==void 0?qs.default.createElement(MM,b({},e)):qs.default.createElement(Xa,null)};var OK=e=>{let{className:n="dapp-custom-toast",onDelete:o,icon:i=OM.faInfo,iconClassName:c,title:p="",toastId:l,CustomCloseButton:u,globalStyles:h,styles:g}=e,T=ac({onDelete:o,CustomCloseButton:u});return gr.default.createElement(Ll,{className:n,id:l},gr.default.createElement("div",{className:g==null?void 0:g.content},gr.default.createElement("div",{className:g==null?void 0:g.left},gr.default.createElement("div",{className:(0,wy.default)(g==null?void 0:g.icon,c)},i&&gr.default.createElement(FM.FontAwesomeIcon,{size:"5x",icon:i,className:g==null?void 0:g.svg}))),gr.default.createElement("div",{className:g==null?void 0:g.right},gr.default.createElement("div",{className:g==null?void 0:g.heading},gr.default.createElement("h5",{className:(0,wy.default)([h==null?void 0:h.h5,g==null?void 0:g.mb4])},p),T),gr.default.createElement(BM,b({},e)))))},RM=I(OK,{ssrStyles:()=>Promise.resolve().then(()=>(Rt(),Ft)),clientStyles:()=>(Rt(),j(Ft)).default});r();var Dl=w(require("react")),UM=w(require("classnames"));var FK=({onDelete:e,message:n,component:o,CustomCloseButton:i,className:c="dapp-custom-toast",toastId:p,styles:l})=>{let u=ac({onDelete:e,CustomCloseButton:i});return Dl.default.createElement("div",{id:p,className:(0,UM.default)(l==null?void 0:l.toasts,l==null?void 0:l.toastWrapper,c)},Dl.default.createElement(Dl.default.Fragment,null,u,o?o():n))},GM=I(FK,{ssrStyles:()=>Promise.resolve().then(()=>(sa(),ca)),clientStyles:()=>(sa(),j(ca)).default});var Sy=e=>{let{duration:n,onDelete:o}=e;if(IM({duration:n,onDelete:o}),e.component)return js.default.createElement(GM,b({},e));if(e.transaction){let i=e.transaction,c=e.transaction,p=i.txHash||c.hash;return js.default.createElement(Vs,q(b({},e),{status:Uo[e.transaction.status],transactions:[q(b({},c),{hash:p})]}))}return e.icon?js.default.createElement(RM,b({},e)):js.default.createElement(PM,b({},e))};r();var HM=w(require("react"));var Cy=({className:e,signedTransactionsToRender:n,successfulToastLifetime:o,handleDeleteTransactionToast:i,startTimestamp:c,toastId:p})=>{let l=n[p];if(l==null||(l==null?void 0:l.transactions)==null||(l==null?void 0:l.status)==null)return null;let{transactions:h,status:g}=l;return HM.default.createElement(Vs,{key:p,startTimestamp:c,toastId:p,transactions:h,status:g,lifetimeAfterSuccess:o,onDelete:i,className:e})};var zM=({className:e="transactions-toast-list",transactionToastClassName:n,customToastClassName:o,signedTransactions:i,successfulToastLifetime:c,parentElement:p,children:l,styles:u})=>{let[h,g]=(0,po.useState)(!1),T=Q(rg),y=Q(Gc),C=Ge(),{signedTransactions:N}=t_(),A=i||N,P=(0,po.useRef)(A);(0,po.useEffect)(()=>{P.current=A},[A]);let W=Z=>{KN(Z)},B=Z=>{C(qf(Z)),EN(Z)},z=(0,po.useCallback)(()=>{var Z;for(let ie in A){let ee=A[ie];if((Z=ee==null?void 0:ee.customTransactionInformation)==null?void 0:Z.signWithoutSending)continue;y.some(ne=>`${ne.toastId}`==`${ie}`)||C(t1(ie))}},[C,A,y]);(0,po.useEffect)(()=>{z()},[A,z]);let K=(0,po.useMemo)(()=>y.map(({toastId:Z,type:ie,startTimestamp:ee},re)=>po.default.createElement(Cy,q(b({},{signedTransactionsToRender:A,toastId:Z,type:ie,startTimestamp:ee,successfulToastLifetime:c,handleDeleteTransactionToast:B,className:n}),{key:ee+re}))),[y,A,c,B,n]),R=T.map(Z=>{var re;let ie=(re=A_(Z.toastId))!=null?re:null,ee=qN(Z.toastId);return po.default.createElement(Sy,q(b({key:Z.toastId},Z),{component:ie,onDelete:()=>{W(Z.toastId),ee==null||ee()},className:o}))}),G=()=>{Gc(me.getState()).forEach(ie=>{let ee=P.current[ie.toastId];if(!ee)return;let{status:re}=ee,pe=Yt(re),ne=re==="signed";!pe&&!ne&&B(ie.toastId)})};return(0,po.useEffect)(()=>(g(!0),window==null||window.addEventListener("beforeunload",G),()=>{window==null||window.removeEventListener("beforeunload",G)}),[]),po.default.createElement(po.default.Fragment,null,h&&(0,$M.createPortal)(po.default.createElement("div",{className:(0,VM.default)(u==null?void 0:u.toasts,e)},R,K,l),p||(document==null?void 0:document.body)))},RK=I(zM,{ssrStyles:()=>Promise.resolve().then(()=>(sa(),ca)),clientStyles:()=>(sa(),j(ca)).default});r();r();var qM=w(require("react"));up();var UK=({children:e,token:n,className:o="dapp-xalias-login",callbackRoute:i,buttonClassName:c,nativeAuth:p,"data-testid":l="xAliasLoginButton",loginButtonText:u="xAlias",disabled:h,customWalletAddress:g})=>{let T=Q(Sp),y=g!=null?g:T,[C]=mh({callbackRoute:i,nativeAuth:p,token:n,customWalletAddress:y}),N=Sn(n);return qM.default.createElement(Cn,{onLogin:()=>{C()},className:o,btnClassName:c,text:u,"data-testid":l,disabled:h||N||!y},e)};r();r();var jM=w(require("react"));up();var GK=({token:e,className:n="dapp-cross-window-xalias-login",children:o,callbackRoute:i,buttonClassName:c,nativeAuth:p,loginButtonText:l="xAlias",onLoginRedirect:u,disabled:h,hasConsentPopup:g,customWalletAddress:T,"data-testid":y="accessCrossWindowWalletBtn"})=>{let C=Q(Sp),N=Sn(e),[A]=is({callbackRoute:i,token:e,onLoginRedirect:u,nativeAuth:p,hasConsentPopup:g,walletAddress:T!=null?T:C});return jM.default.createElement(Cn,{onLogin:()=>{A()},className:n,btnClassName:c,text:l,disabled:h||N,"data-testid":y},o)};r();r();var KM=w(require("react"));up();var HK=({token:e,className:n="dapp-window-wallet-login",children:o,callbackRoute:i,buttonClassName:c,nativeAuth:p,loginButtonText:l="Window Wallet",onLoginRedirect:u,disabled:h,hasConsentPopup:g,"data-testid":T="accessCrossWindowWalletBtn"})=>{let y=Sn(e),[C]=is({callbackRoute:i,token:e,onLoginRedirect:u,nativeAuth:p,hasConsentPopup:g});return KM.default.createElement(Cn,{onLogin:()=>{C()},className:n,btnClassName:c,text:l,disabled:h||y,"data-testid":T},o)};r();r();var co=w(require("react")),XM=w(require("classnames"));var VK=({className:e,transaction:n,showDirectionCol:o,showLockedAccounts:i,globalStyles:c,styles:p})=>co.default.createElement("tr",{className:(0,XM.default)(e,{new:n.isNew})},co.default.createElement("td",null,co.default.createElement(O2,{transaction:n})),co.default.createElement("td",null,co.default.createElement(Rs,{value:n.timestamp,short:!0,tooltip:!0})),co.default.createElement("td",null,co.default.createElement(sl,{transaction:n})),co.default.createElement("td",null,co.default.createElement(il,{transaction:n,showLockedAccounts:i})),o&&co.default.createElement("td",null,co.default.createElement(N2,{transaction:n})),co.default.createElement("td",null,co.default.createElement(rl,{transaction:n,showLockedAccounts:i})),co.default.createElement("td",{className:p==null?void 0:p.transactionFunction},co.default.createElement(ol,{transaction:n})),co.default.createElement("td",{className:c==null?void 0:c.textLeft},co.default.createElement(Jp,{transaction:n}))),El=I(VK,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();var En=w(require("react")),Ks=w(require("classnames"));Y();var $K=({transactions:e,directionCol:n=!1,showLockedAccounts:o=!1,className:i="dapp-transactions-table",title:c,globalStyles:p,styles:l})=>{let{address:u}=wn(),{network:{explorerAddress:h}}=rt(),g=(0,En.useMemo)(()=>u?e.map(T=>Rd({transaction:T,address:u,explorerAddress:h})):[],[e,h,u]);return u?En.default.createElement("div",{className:(0,Ks.default)(p==null?void 0:p.card,p==null?void 0:p.mt5,p==null?void 0:p.mb5,l==null?void 0:l.transactionsTable,i)},En.default.createElement("div",{className:(0,Ks.default)(p==null?void 0:p.cardHeader,p==null?void 0:p.cardHeaderItem,p==null?void 0:p.dFlex,p==null?void 0:p.justifyContentBetween,p==null?void 0:p.alignItemsCenter,l==null?void 0:l.transactionsTableHeader)},En.default.createElement("h6",{className:p==null?void 0:p.h6,"data-testid":"title"},c||"Transactions")),En.default.createElement("div",{className:(0,Ks.default)(p==null?void 0:p.cardBody,p==null?void 0:p.p0)},En.default.createElement("div",{className:l==null?void 0:l.tableWrapper},En.default.createElement("table",{className:(0,Ks.default)(l==null?void 0:l.table,p==null?void 0:p.trimSizeSm),"data-testid":"transactionsTable"},En.default.createElement("thead",null,En.default.createElement("tr",null,En.default.createElement("th",{scope:"col"},"Tx Hash"),En.default.createElement("th",{scope:"col"},"Age"),En.default.createElement("th",{scope:"col"},"Shard"),En.default.createElement("th",{scope:"col"},"From"),n&&En.default.createElement("th",{scope:"col"}," Tx Direction "),En.default.createElement("th",{scope:"col"},"To"),En.default.createElement("th",{scope:"col"},"Method"),En.default.createElement("th",{scope:"col"},"Value"))),En.default.createElement("tbody",null,g.map(T=>En.default.createElement(El,{transaction:T,key:T.txHash,showDirectionCol:n,showLockedAccounts:o}))))))):null},ZM=I($K,{ssrStyles:()=>Promise.resolve().then(()=>(gn(),fn)),clientStyles:()=>(gn(),j(fn)).default});r();r();r();var YM=w(require("react"));var zK=({token:e,className:n="dapp-metamask-login",children:o,callbackRoute:i,buttonClassName:c="dapp-default-login-button",nativeAuth:p,loginButtonText:l="Metamask",onLoginRedirect:u,disabled:h})=>{let[g]=lh({callbackRoute:i,token:e,onLoginRedirect:u,nativeAuth:p}),T=Sn(e);return YM.default.createElement(Cn,{onLogin:()=>{g()},className:n,btnClassName:c,text:l,disabled:h||T},o)},qK=I(zK,{ssrStyles:()=>Promise.resolve().then(()=>(Si(),wi)),clientStyles:()=>(Si(),j(wi)).default});0&&(module.exports={AddressDetailItem,Balance,BalanceComponent,CrossWindowLoginButton,CustomToast,DappCorePages,DataField,Denominate,DetailItem,EventsList,ExplorerLink,ExtensionLoginButton,FormatAmount,IframeButton,LedgerLoginButton,LedgerLoginContainer,Loader,MetamaskLoginButton,NonceMessage,NotificationModal,OperaWalletLoginButton,OperationsList,PageState,Pagination,PasskeyLoginButton,ProgressSteps,ScResultsList,ScamPhishingAlert,ScrDetailItem,SignTransactionsModals,SignWithDeviceModal,SignWithExtensionModal,SignWithLedgerModal,TimeAgo,TransactionAction,TransactionActionComponent,TransactionInfo,TransactionInfoAge,TransactionInfoEgldPrice,TransactionInfoFee,TransactionInfoFrom,TransactionInfoGasLimit,TransactionInfoGasPrice,TransactionInfoGasUsed,TransactionInfoHash,TransactionInfoInputData,TransactionInfoMethod,TransactionInfoMiniblock,TransactionInfoNonce,TransactionInfoScResults,TransactionInfoStatus,TransactionInfoTo,TransactionInfoTokenOperations,TransactionInfoValue,TransactionLogs,TransactionMethod,TransactionReceiver,TransactionRow,TransactionSender,TransactionShardsTransition,TransactionStatus,TransactionToast,TransactionToastGuard,TransactionValue,TransactionsTable,TransactionsToastList,TransactionsToastListComponent,Trim,UsdValue,WalletConnectLoginButton,WalletConnectLoginContainer,WebWalletLoginButton,XaliasCrossWindowLoginButton,XaliasLoginButton,getStatusIconAndColor});
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
