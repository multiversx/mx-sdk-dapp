"use strict";var Rl=Object.create;var Ko=Object.defineProperty,Ml=Object.defineProperties,Ol=Object.getOwnPropertyDescriptor,Fl=Object.getOwnPropertyDescriptors,Bl=Object.getOwnPropertyNames,Ct=Object.getOwnPropertySymbols,Wl=Object.getPrototypeOf,$n=Object.prototype.hasOwnProperty,Fa=Object.prototype.propertyIsEnumerable;var Oa=(e,o,n)=>o in e?Ko(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,u=(e,o)=>{for(var n in o||(o={}))$n.call(o,n)&&Oa(e,n,o[n]);if(Ct)for(var n of Ct(o))Fa.call(o,n)&&Oa(e,n,o[n]);return e},w=(e,o)=>Ml(e,Fl(o));var ve=(e,o)=>{var n={};for(var r in e)$n.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Ct)for(var r of Ct(e))o.indexOf(r)<0&&Fa.call(e,r)&&(n[r]=e[r]);return n};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),V=(e,o)=>{for(var n in o)Ko(e,n,{get:o[n],enumerable:!0})},Ba=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Bl(o))!$n.call(e,c)&&c!==n&&Ko(e,c,{get:()=>o[c],enumerable:!(r=Ol(o,c))||r.enumerable});return e};var f=(e,o,n)=>(n=e!=null?Rl(Wl(e)):{},Ba(o||!e||!e.__esModule?Ko(n,"default",{value:e,enumerable:!0}):n,e)),N=e=>Ba(Ko({},"__esModule",{value:!0}),e);var x=(e,o,n)=>new Promise((r,c)=>{var p=l=>{try{d(n.next(l))}catch(g){c(g)}},m=l=>{try{d(n.throw(l))}catch(g){c(g)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((n=n.apply(e,o)).next())});var Ga=S(Pt=>{"use strict";t();Pt.byteLength=Gl;Pt.toByteArray=Hl;Pt.fromByteArray=zl;var ue=[],ne=[],Ul=typeof Uint8Array!="undefined"?Uint8Array:Array,qn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Qe=0,Wa=qn.length;Qe<Wa;++Qe)ue[Qe]=qn[Qe],ne[qn.charCodeAt(Qe)]=Qe;var Qe,Wa;ne["-".charCodeAt(0)]=62;ne["_".charCodeAt(0)]=63;function Ua(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function Gl(e){var o=Ua(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Vl(e,o,n){return(o+n)*3/4-n}function Hl(e){var o,n=Ua(e),r=n[0],c=n[1],p=new Ul(Vl(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=ne[e.charCodeAt(l)]<<18|ne[e.charCodeAt(l+1)]<<12|ne[e.charCodeAt(l+2)]<<6|ne[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ne[e.charCodeAt(l)]<<2|ne[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ne[e.charCodeAt(l)]<<10|ne[e.charCodeAt(l+1)]<<4|ne[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function $l(e){return ue[e>>18&63]+ue[e>>12&63]+ue[e>>6&63]+ue[e&63]}function ql(e,o,n){for(var r,c=[],p=o;p<n;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push($l(r));return c.join("")}function zl(e){for(var o,n=e.length,r=n%3,c=[],p=16383,m=0,d=n-r;m<d;m+=p)c.push(ql(e,m,m+p>d?d:m+p));return r===1?(o=e[n-1],c.push(ue[o>>2]+ue[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],c.push(ue[o>>10]+ue[o>>4&63]+ue[o<<2&63]+"=")),c.join("")}});var Va=S(zn=>{t();zn.read=function(e,o,n,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,g=l>>1,T=-7,y=n?c-1:0,v=n?-1:1,C=e[o+y];for(y+=v,p=C&(1<<-T)-1,C>>=-T,T+=d;T>0;p=p*256+e[o+y],y+=v,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+y],y+=v,T-=8);if(p===0)p=1-g;else{if(p===l)return m?NaN:(C?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-g}return(C?-1:1)*m*Math.pow(2,p-r)};zn.write=function(e,o,n,r,c,p){var m,d,l,g=p*8-c-1,T=(1<<g)-1,y=T>>1,v=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,C=r?0:p-1,E=r?1:-1,G=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+y>=1?o+=v/l:o+=v*Math.pow(2,1-y),o*l>=2&&(m++,l/=2),m+y>=T?(d=0,m=T):m+y>=1?(d=(o*l-1)*Math.pow(2,c),m=m+y):(d=o*Math.pow(2,y-1)*Math.pow(2,c),m=0));c>=8;e[n+C]=d&255,C+=E,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[n+C]=m&255,C+=E,m/=256,g-=8);e[n+C-E]|=G*128}});var oi=S(bo=>{"use strict";t();var jn=Ga(),yo=Va(),Ha=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;bo.Buffer=_;bo.SlowBuffer=Jl;bo.INSPECT_MAX_BYTES=50;var Et=2147483647;bo.kMaxLength=Et;_.TYPED_ARRAY_SUPPORT=jl();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function jl(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function Ie(e){if(e>Et)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Zn(e)}return za(e,o,n)}_.poolSize=8192;function za(e,o,n){if(typeof e=="string")return Xl(e,o);if(ArrayBuffer.isView(e))return Yl(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ge(e,ArrayBuffer)||e&&ge(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ge(e,SharedArrayBuffer)||e&&ge(e.buffer,SharedArrayBuffer)))return Xn(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,n);var c=Zl(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,n){return za(e,o,n)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function ja(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Kl(e,o,n){return ja(e),e<=0?Ie(e):o!==void 0?typeof n=="string"?Ie(e).fill(o,n):Ie(e).fill(o):Ie(e)}_.alloc=function(e,o,n){return Kl(e,o,n)};function Zn(e){return ja(e),Ie(e<0?0:Jn(e)|0)}_.allocUnsafe=function(e){return Zn(e)};_.allocUnsafeSlow=function(e){return Zn(e)};function Xl(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=Ka(e,o)|0,r=Ie(n),c=r.write(e,o);return c!==n&&(r=r.slice(0,c)),r}function Kn(e){for(var o=e.length<0?0:Jn(e.length)|0,n=Ie(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function Yl(e){if(ge(e,Uint8Array)){var o=new Uint8Array(e);return Xn(o.buffer,o.byteOffset,o.byteLength)}return Kn(e)}function Xn(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,_.prototype),r}function Zl(e){if(_.isBuffer(e)){var o=Jn(e.length)|0,n=Ie(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||Qn(e.length)?Ie(0):Kn(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Kn(e.data)}function Jn(e){if(e>=Et)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Et.toString(16)+" bytes");return e|0}function Jl(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,n){if(ge(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),ge(n,Uint8Array)&&(n=_.from(n,n.offset,n.byteLength)),!_.isBuffer(o)||!_.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,c=n.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==n[p]){r=o[p],c=n[p];break}return r<c?-1:c<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var c=_.allocUnsafe(n),p=0;for(r=0;r<o.length;++r){var m=o[r];if(ge(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Ka(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ge(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Yn(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return ei(e).length;default:if(c)return r?-1:Yn(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=Ka;function Ql(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return p_(this,o,n);case"utf8":case"utf-8":return Ya(this,o,n);case"ascii":return s_(this,o,n);case"latin1":case"binary":return c_(this,o,n);case"base64":return a_(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m_(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function eo(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)eo(this,n,n+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)eo(this,n,n+3),eo(this,n+1,n+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)eo(this,n,n+7),eo(this,n+1,n+6),eo(this,n+2,n+5),eo(this,n+3,n+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ya(this,0,o):Ql.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",n=bo.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};Ha&&(_.prototype[Ha]=_.prototype.inspect);_.prototype.compare=function(o,n,r,c,p){if(ge(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),n<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&n>=r)return 0;if(c>=p)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-n,l=Math.min(m,d),g=this.slice(c,p),T=o.slice(n,r),y=0;y<l;++y)if(g[y]!==T[y]){m=g[y],d=T[y];break}return m<d?-1:d<m?1:0};function Xa(e,o,n,r,c){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Qn(n)&&(n=c?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(c)return-1;n=e.length-1}else if(n<0)if(c)n=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:$a(e,o,n,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):$a(e,[o],n,r,c);throw new TypeError("val must be string, number or Buffer")}function $a(e,o,n,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,n/=2}function l(C,E){return p===1?C[E]:C.readUInt16BE(E*p)}var g;if(c){var T=-1;for(g=n;g<m;g++)if(l(e,g)===l(o,T===-1?0:g-T)){if(T===-1&&(T=g),g-T+1===d)return T*p}else T!==-1&&(g-=g-T),T=-1}else for(n+d>m&&(n=m-d),g=n;g>=0;g--){for(var y=!0,v=0;v<d;v++)if(l(e,g+v)!==l(o,v)){y=!1;break}if(y)return g}return-1}_.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};_.prototype.indexOf=function(o,n,r){return Xa(this,o,n,r,!0)};_.prototype.lastIndexOf=function(o,n,r){return Xa(this,o,n,r,!1)};function e_(e,o,n,r){n=Number(n)||0;var c=e.length-n;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Qn(d))return m;e[n+m]=d}return m}function o_(e,o,n,r){return Nt(Yn(o,e.length-n),e,n,r)}function t_(e,o,n,r){return Nt(__(o),e,n,r)}function n_(e,o,n,r){return Nt(ei(o),e,n,r)}function r_(e,o,n,r){return Nt(u_(o,e.length-n),e,n,r)}_.prototype.write=function(o,n,r,c){if(n===void 0)c="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")c=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-n;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return e_(this,o,n,r);case"utf8":case"utf-8":return o_(this,o,n,r);case"ascii":case"latin1":case"binary":return t_(this,o,n,r);case"base64":return n_(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r_(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function a_(e,o,n){return o===0&&n===e.length?jn.fromByteArray(e):jn.fromByteArray(e.slice(o,n))}function Ya(e,o,n){n=Math.min(e.length,n);for(var r=[],c=o;c<n;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=n){var l,g,T,y;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(y=(p&31)<<6|l&63,y>127&&(m=y));break;case 3:l=e[c+1],g=e[c+2],(l&192)===128&&(g&192)===128&&(y=(p&15)<<12|(l&63)<<6|g&63,y>2047&&(y<55296||y>57343)&&(m=y));break;case 4:l=e[c+1],g=e[c+2],T=e[c+3],(l&192)===128&&(g&192)===128&&(T&192)===128&&(y=(p&15)<<18|(l&63)<<12|(g&63)<<6|T&63,y>65535&&y<1114112&&(m=y))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return i_(r)}var qa=4096;function i_(e){var o=e.length;if(o<=qa)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=qa));return n}function s_(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]&127);return r}function c_(e,o,n){var r="";n=Math.min(e.length,n);for(var c=o;c<n;++c)r+=String.fromCharCode(e[c]);return r}function p_(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var c="",p=o;p<n;++p)c+=g_[e[p]];return c}function m_(e,o,n){for(var r=e.slice(o,n),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}_.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var c=this.subarray(o,n);return Object.setPrototypeOf(c,_.prototype),c};function H(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=this[o+--n],p=1;n>0&&(p*=256);)c+=this[o+--n]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,n){return o=o>>>0,n||H(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||H(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||H(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||H(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=this[o],p=1,m=0;++m<n&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*n)),c};_.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||H(o,n,this.length);for(var c=n,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*n)),m};_.prototype.readInt8=function(o,n){return o=o>>>0,n||H(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,n){o=o>>>0,n||H(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,n){o=o>>>0,n||H(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,n){return o=o>>>0,n||H(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,n){return o=o>>>0,n||H(o,4,this.length),yo.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,n){return o=o>>>0,n||H(o,4,this.length),yo.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||H(o,8,this.length),yo.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||H(o,8,this.length),yo.read(this,o,!1,52,8)};function X(e,o,n,r,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;X(this,o,n,r,p,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;X(this,o,n,r,p,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,1,255,0),this[n]=o&255,n+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};_.prototype.writeIntLE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);X(this,o,n,r,p-1,-p)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};_.prototype.writeIntBE=function(o,n,r,c){if(o=+o,n=n>>>0,!c){var p=Math.pow(2,8*r-1);X(this,o,n,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};_.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};_.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};_.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function Za(e,o,n,r,c,p){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ja(e,o,n,r,c){return o=+o,n=n>>>0,c||Za(e,o,n,4,34028234663852886e22,-34028234663852886e22),yo.write(e,o,n,r,23,4),n+4}_.prototype.writeFloatLE=function(o,n,r){return Ja(this,o,n,!0,r)};_.prototype.writeFloatBE=function(o,n,r){return Ja(this,o,n,!1,r)};function Qa(e,o,n,r,c){return o=+o,n=n>>>0,c||Za(e,o,n,8,17976931348623157e292,-17976931348623157e292),yo.write(e,o,n,r,52,8),n+8}_.prototype.writeDoubleLE=function(o,n,r){return Qa(this,o,n,!0,r)};_.prototype.writeDoubleBE=function(o,n,r){return Qa(this,o,n,!1,r)};_.prototype.copy=function(o,n,r,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),n>=o.length&&(n=o.length),n||(n=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-n<c-r&&(c=o.length-n+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),n),p};_.prototype.fill=function(o,n,r,c){if(typeof o=="string"){if(typeof n=="string"?(c=n,n=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var d_=/[^+/0-9A-Za-z-_]/g;function l_(e){if(e=e.split("=")[0],e=e.trim().replace(d_,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Yn(e,o){o=o||1/0;for(var n,r=e.length,c=null,p=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!c){if(n>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=n;continue}if(n<56320){(o-=3)>-1&&p.push(239,191,189),c=n;continue}n=(c-55296<<10|n-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,n<128){if((o-=1)<0)break;p.push(n)}else if(n<2048){if((o-=2)<0)break;p.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;p.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;p.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return p}function __(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function u_(e,o){for(var n,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,c=n%256,p.push(c),p.push(r);return p}function ei(e){return jn.toByteArray(l_(e))}function Nt(e,o,n,r){for(var c=0;c<r&&!(c+n>=o.length||c>=e.length);++c)o[c+n]=e[c];return c}function ge(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Qn(e){return e!==e}var g_=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,c=0;c<16;++c)o[r+c]=e[n]+e[c];return o}()});var ii=S((gb,ai)=>{t();var B=ai.exports={},fe,Te;function er(){throw new Error("setTimeout has not been defined")}function or(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?fe=setTimeout:fe=er}catch(e){fe=er}try{typeof clearTimeout=="function"?Te=clearTimeout:Te=or}catch(e){Te=or}})();function ti(e){if(fe===setTimeout)return setTimeout(e,0);if((fe===er||!fe)&&setTimeout)return fe=setTimeout,setTimeout(e,0);try{return fe(e,0)}catch(o){try{return fe.call(null,e,0)}catch(n){return fe.call(this,e,0)}}}function f_(e){if(Te===clearTimeout)return clearTimeout(e);if((Te===or||!Te)&&clearTimeout)return Te=clearTimeout,clearTimeout(e);try{return Te(e)}catch(o){try{return Te.call(null,e)}catch(n){return Te.call(this,e)}}}var Ae=[],So=!1,oo,Dt=-1;function T_(){!So||!oo||(So=!1,oo.length?Ae=oo.concat(Ae):Dt=-1,Ae.length&&ni())}function ni(){if(!So){var e=ti(T_);So=!0;for(var o=Ae.length;o;){for(oo=Ae,Ae=[];++Dt<o;)oo&&oo[Dt].run();Dt=-1,o=Ae.length}oo=null,So=!1,f_(e)}}B.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];Ae.push(new ri(e,o)),Ae.length===1&&!So&&ti(ni)};function ri(e,o){this.fun=e,this.array=o}ri.prototype.run=function(){this.fun.apply(null,this.array)};B.title="browser";B.browser=!0;B.env={};B.argv=[];B.version="";B.versions={};function ke(){}B.on=ke;B.addListener=ke;B.once=ke;B.off=ke;B.removeListener=ke;B.removeAllListeners=ke;B.emit=ke;B.prependListener=ke;B.prependOnceListener=ke;B.listeners=function(e){return[]};B.binding=function(e){throw new Error("process.binding is not supported")};B.cwd=function(){return"/"};B.chdir=function(e){throw new Error("process.chdir is not supported")};B.umask=function(){return 0}});var a,s,h_,i,t=h(()=>{a=f(oi()),s=f(ii()),h_=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=h_});var Le,to=h(()=>{"use strict";t();Le=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var tr={};V(tr,{css:()=>ci,default:()=>y_});var ci,y_,nr=h(()=>{"use strict";t();ci=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ci));y_={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var pi=h(()=>{"use strict";t()});var he=h(()=>{"use strict";t()});var mi=h(()=>{"use strict";t()});var ir,di=h(()=>{"use strict";t();ir=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ir||{})});var li=h(()=>{"use strict";t()});var sr=h(()=>{"use strict";t()});var _i=h(()=>{"use strict";t()});var cr=h(()=>{"use strict";t()});var ui=h(()=>{"use strict";t()});var gi=h(()=>{"use strict";t()});var no,wo,Ue=h(()=>{"use strict";t();no=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),wo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var re,fi,Db,Ti,Rb,D=h(()=>{"use strict";t();Ue();re=(d=>(d.pending="pending",d.fail="fail",d.invalid="invalid",d.success="success",d.executed="executed",d.notExecuted="not executed",d.rewardReverted="reward-reverted",d))(re||{}),fi=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(fi||{}),Db=u(u({},wo.WindowProviderRequestEnums),fi),Ti=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ti||{}),Rb=u(u({},wo.WindowProviderResponseEnums),Ti)});var hi=h(()=>{"use strict";t()});var xi=h(()=>{"use strict";t()});var pr,Y=h(()=>{"use strict";t();pr=(r=>(r.nft="nft",r.esdt="esdt",r.egld="egld",r))(pr||{})});var yi=h(()=>{"use strict";t()});var bi=h(()=>{"use strict";t()});var Si=h(()=>{"use strict";t()});var M=h(()=>{"use strict";t();cr();ui();gi();D();hi();xi();Y();yi();bi();Si()});var vo,wi,Zb,vi,Jb,Ii,Qb,eS,w_,Io=h(()=>{"use strict";t();M();vo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:wi,egldLabel:Zb}=vo["devnet"],{chainId:vi,egldLabel:Jb}=vo["testnet"],{chainId:Ii,egldLabel:Qb}=vo["mainnet"],eS={["devnet"]:wi,["testnet"]:vi,["mainnet"]:Ii},w_={[wi]:"devnet",[vi]:"testnet",[Ii]:"mainnet"}});var Rt=h(()=>{"use strict";t()});var xe,Ai=h(()=>{"use strict";t();xe=require("@multiversx/sdk-web-wallet-provider")});var ro,Yo=h(()=>{"use strict";t();ro=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ki,Li,mr,iS,sS,dr=h(()=>{"use strict";t();Yo();mr=String((Li=(ki=ro.safeWindow)==null?void 0:ki.navigator)==null?void 0:Li.userAgent),iS=/^((?!chrome|android).)*safari/i.test(mr),sS=/firefox/i.test(mr)&&/windows/i.test(mr)});var Mt,Ot,$,ao,Ci,Ft,Pi,ye,Ei,I=h(()=>{"use strict";t();pi();he();mi();di();li();sr();_i();Io();Rt();Ai();dr();Mt=5e4,Ot=1e9,$=18,ao=4,Ci=1,Ft="logout",Pi="login",ye="0",Ei="..."});var Zo,Bt=h(()=>{"use strict";t();Zo=()=>Date.now()/1e3});var Mi=h(()=>{"use strict";t()});var Oi=h(()=>{"use strict";t()});var ur=h(()=>{"use strict";t();Bt();Mi();Oi()});var gr={};V(gr,{clear:()=>k_,getItem:()=>I_,localStorageKeys:()=>Ve,removeItem:()=>A_,setItem:()=>v_});var Ve,Wt,v_,I_,A_,k_,Ao=h(()=>{"use strict";t();ur();Ve={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Wt=typeof localStorage!="undefined",v_=({key:e,data:o,expires:n})=>{!Wt||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},I_=e=>{if(!Wt)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Zo()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},A_=e=>{!Wt||localStorage.removeItem(String(e))},k_=()=>{!Wt||localStorage.clear()}});var fr={};V(fr,{clear:()=>Ui,getItem:()=>Bi,removeItem:()=>Wi,setItem:()=>Fi,storage:()=>L_});var Fi,Bi,Wi,Ui,L_,Gi=h(()=>{"use strict";t();Fi=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Bi=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Wi=e=>sessionStorage.removeItem(String(e)),Ui=()=>sessionStorage.clear(),L_={setItem:Fi,getItem:Bi,removeItem:Wi,clear:Ui}});var io,ko=h(()=>{"use strict";t();Ao();Gi();io={session:fr,local:gr}});var Tr,O,J,F=h(()=>{"use strict";t();Tr=require("@reduxjs/toolkit");I();O=(0,Tr.createAction)(Ft),J=(0,Tr.createAction)(Pi,e=>({payload:e}))});var xr,Vi,Hi,Ut,hr,$i,Gt,C_,yr,HS,P_,E_,$S,qS,zS,N_,D_,Vt,Ht=h(()=>{"use strict";t();xr=require("@multiversx/sdk-core"),Vi=require("@reduxjs/toolkit"),Hi=require("redux-persist");I();ko();Ao();F();Ut={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ye},hr={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Ut},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},$i=(0,Vi.createSlice)({name:"accountInfoSlice",initialState:hr,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new xr.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:Ut},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(O,()=>(io.local.removeItem(Ve.loginExpiresAt),hr)),e.addCase(J,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new xr.Address(r).hex()}),e.addCase(Hi.REHYDRATE,(o,n)=>{var g;if(!((g=n.payload)!=null&&g.account))return;let{account:r}=n.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:hr.accounts,o.publicKey=d})}}),{setAccount:Gt,setAddress:C_,setAccountNonce:yr,setAccountShard:HS,setLedgerAccount:P_,updateLedgerAccount:E_,setWalletConnectAccount:$S,setIsAccountLoading:qS,setAccountLoadingError:zS,setWebsocketEvent:N_,setWebsocketBatchEvent:D_}=$i.actions,Vt=$i.reducer});function Jo(){return new Date().setHours(new Date().getHours()+24)}function Qo(e){io.local.setItem({key:Ve.loginExpiresAt,data:e,expires:e})}var br=h(()=>{"use strict";t();ko();Ao()});var zi,qi,ji,t0,R_,M_,Ki,n0,O_,Xi,r0,a0,i0,$t,qt=h(()=>{"use strict";t();zi=require("@reduxjs/toolkit");br();D();F();qi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},ji=(0,zi.createSlice)({name:"loginInfoSlice",initialState:qi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(O,()=>qi),e.addCase(J,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,Qo(Jo())})}}),{setLoginMethod:t0,setWalletConnectLogin:R_,setLedgerLogin:M_,setTokenLogin:Ki,setTokenLoginSignature:n0,setWalletLogin:O_,invalidateLoginSession:Xi,setLogoutRoute:r0,setIsWalletConnectV2Initialized:a0,setWebviewLogin:i0}=ji.actions,$t=ji.reducer});var Zi,Yi,Ji,m0,F_,d0,B_,zt,jt=h(()=>{"use strict";t();Zi=require("@reduxjs/toolkit");F();Yi={},Ji=(0,Zi.createSlice)({name:"modalsSlice",initialState:Yi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(O,()=>Yi)}}),{setTxSubmittedModal:m0,setNotificationModal:F_,clearTxSubmittedModal:d0,clearNotificationModal:B_}=Ji.actions,zt=Ji.reducer});var W,z=h(()=>{"use strict";t();to();W=()=>{if(!Le())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:c,search:p}}=window;return{pathname:o,hash:n,origin:r,href:c,search:p}}});var Qi=h(()=>{"use strict";t();z()});var es=h(()=>{"use strict";t();j()});var os=h(()=>{"use strict";t();Yo()});var j=h(()=>{"use strict";t();Qi();es();z();os()});var et=h(()=>{"use strict";t();j()});var ns=h(()=>{"use strict";t();et()});function rs(e){return e[Math.floor(Math.random()*e.length)]}var as=h(()=>{"use strict";t()});var Sr=h(()=>{"use strict";t();sr()});var Ce=h(()=>{"use strict";t();ns();as();Sr()});var is,ss,cs,wr,U_,ps,H0,$0,G_,Kt,Xt=h(()=>{"use strict";t();is=require("@reduxjs/toolkit"),ss=f(require("lodash.omit")),cs=require("redux-persist");Rt();F();Ce();wr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},U_={network:wr},ps=(0,is.createSlice)({name:"appConfig",initialState:U_,reducers:{initializeNetworkConfig:(e,o)=>{let n=rs(o.payload.walletConnectV2RelayAddresses),r=(0,ss.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(O,o=>{o.network.customWalletAddress=void 0}),e.addCase(cs.REHYDRATE,(o,n)=>{var c,p;if(!((p=(c=n.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:H0,updateNetworkConfig:$0,setCustomWalletAddress:G_}=ps.actions,Kt=ps.reducer});var ms,vr,ds,Y0,Z0,J0,Yt,Zt=h(()=>{"use strict";t();ms=require("@reduxjs/toolkit");M();F();vr={isSigning:!1,signedSessions:{}},ds=(0,ms.createSlice)({name:"signedMessageInfoSliceState",initialState:vr,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[n]=u(u({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>vr},extraReducers:e=>{e.addCase(O,()=>vr)}}),{setSignSession:Y0,clearSignedMessageInfo:Z0,setSignSessionState:J0}=ds.actions,Yt=ds.reducer});var _s,us,ls,gs,V_,H_,aw,$_,Jt,Qt=h(()=>{"use strict";t();_s=require("@reduxjs/toolkit"),us=require("redux-persist");M();Bt();F();ls={customToasts:[],transactionToasts:[]},gs=(0,_s.createSlice)({name:"toastsSlice",initialState:ls,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===n);if(r!==-1){e.customToasts[r]=w(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Zo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(O,()=>ls),e.addCase(us.REHYDRATE,(o,n)=>{var c,p;let r=(p=(c=n.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:V_,removeCustomToast:H_,addTransactionToast:aw,removeTransactionToast:$_}=gs.actions,Jt=gs.reducer});var fs,Ar,kr,Lr,q_,Ir,Ts,pw,z_,Cr,en,on=h(()=>{"use strict";t();fs=require("@reduxjs/toolkit");F();Ar="Transaction failed",kr="Transaction successful",Lr="Processing transaction",q_="Transaction submitted",Ir={},Ts=(0,fs.createSlice)({name:"transactionsInfo",initialState:Ir,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Ar,successMessage:(r==null?void 0:r.successMessage)||kr,processingMessage:(r==null?void 0:r.processingMessage)||Lr,submittedMessage:(r==null?void 0:r.submittedMessage)||q_,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ir},extraReducers:e=>{e.addCase(O,()=>Ir)}}),{clearTransactionsInfo:pw,setTransactionsDisplayInfo:z_,clearTransactionsInfoForSessionId:Cr}=Ts.actions,en=Ts.reducer});function Lo(e){return e!=null&&(tu(e)||tn(e))}function Co(e){return e!=null&&(nu(e)||su(e))}function Po(e){return e!=null&&(ru(e)||cu(e))}function hs(e){return e!=null&&(au(e)||pu(e))}function Pr(e){return e!=null&&iu(e)}function tu(e){return e!=null&&j_.includes(e)}function nu(e){return e!=null&&K_.includes(e)}function ru(e){return e!=null&&X_.includes(e)}function au(e){return e!=null&&Y_.includes(e)}function iu(e){return e!=null&&Z_.includes(e)}function tn(e){return e!=null&&J_.includes(e)}function su(e){return e!=null&&Q_.includes(e)}function cu(e){return e!=null&&eu.includes(e)}function pu(e){return e!=null&&ou.includes(e)}var j_,K_,X_,Y_,Z_,J_,Q_,eu,ou,so=h(()=>{"use strict";t();D();j_=["sent"],K_=["success"],X_=["fail","cancelled","timedOut"],Y_=["invalid"],Z_=["timedOut"],J_=["pending"],Q_=["success"],eu=["fail","invalid"],ou=["not executed"]});var xs,ys,ot,mu,bs,Ss,ws,du,nn,lu,_u,hw,uu,tt,Er,xw,rn,an=h(()=>{"use strict";t();xs=require("@reduxjs/toolkit"),ys=require("redux-persist");D();so();F();ot={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},mu={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},bs=(0,xs.createSlice)({name:"transactionsSlice",initialState:ot,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,g;let{sessionId:n,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=u(u(u({},mu),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===n&&(e.transactionsToSign=ot.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,c!=null&&(e.signedTransactions[n].errorMessage=c),p!=null&&(e.signedTransactions[n].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,T,y,v,C,E,G,te;let{sessionId:n,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(T=(g=e.signedTransactions)==null?void 0:g[n])==null?void 0:T.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(R=>R.hash===p?w(u(u({},m!=null?m:{}),R),{status:r,errorMessage:c,inTransit:d}):R);let Je=(v=(y=e.signedTransactions[n])==null?void 0:y.transactions)==null?void 0:v.every(R=>Co(R.status)),We=(E=(C=e.signedTransactions[n])==null?void 0:C.transactions)==null?void 0:E.some(R=>Po(R.status)),we=(te=(G=e.signedTransactions[n])==null?void 0:G.transactions)==null?void 0:te.every(R=>hs(R.status));Je&&(e.signedTransactions[n].status="success"),We&&(e.signedTransactions[n].status="fail"),we&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=ot.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=ot.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=u(u({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(O,()=>ot),e.addCase(ys.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=n.payload.transactions,p=Object.entries(r).reduce((d,[l,g])=>{let T=new Date(l),y=new Date;return y.setHours(y.getHours()+5),y-T>0||(d[l]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ss,updateSignedTransactions:ws,setTransactionsToSign:du,clearAllTransactionsToSign:nn,clearAllSignedTransactions:lu,clearSignedTransaction:_u,clearTransactionToSign:hw,setSignTransactionsError:uu,setSignTransactionsCancelMessage:tt,moveTransactionsToSignedState:Er,updateSignedTransactionsCustomTransactionInformation:xw}=bs.actions,rn=bs.reducer});var vs,Nr,Is,ww,vw,gu,Iw,sn,cn=h(()=>{"use strict";t();vs=require("@reduxjs/toolkit");F();Nr={},Is=(0,vs.createSlice)({name:"batchTransactionsSlice",initialState:Nr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Nr},extraReducers:e=>{e.addCase(O,()=>Nr)}}),{setBatchTransactions:ww,updateBatchTransactions:vw,clearBatchTransactions:gu,clearAllBatchTransactions:Iw}=Is.actions,sn=Is.reducer});var ks,As,Ls,Cw,Cs,Dr=h(()=>{"use strict";t();ks=require("@reduxjs/toolkit");F();As={},Ls=(0,ks.createSlice)({name:"dappConfigSlice",initialState:As,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(O,()=>As)}}),{setDappConfig:Cw}=Ls.actions,Cs=Ls.reducer});var P=h(()=>{"use strict";t();Ht();qt();jt();Xt();Zt();Qt();on();an();cn();Dr()});var Rr=h(()=>{"use strict";t()});var Ns,xu,yu,co,dn=h(()=>{"use strict";t();Ns=require("@reduxjs/toolkit");Rr();Ht();cn();Dr();qt();jt();Xt();Zt();Qt();on();an();xu={["account"]:Vt,["dappConfig"]:Cs,["loginInfo"]:$t,["modals"]:zt,["networkConfig"]:Kt,["signedMessageInfo"]:Yt,["toasts"]:Jt,["transactionsInfo"]:en,["transactions"]:rn,["batchTransactions"]:sn},yu=(e={})=>(0,Ns.combineReducers)(u(u({},xu),e)),co=yu});var Os={};V(Os,{default:()=>Ou,sessionStorageReducers:()=>Mr});function Pe(e,o=[]){return{key:e,version:1,storage:Rs.default,blacklist:o}}var Z,Ds,Rs,bu,nt,Su,wu,vu,Iu,Au,ku,Lu,Cu,Pu,Eu,Ms,Nu,Mr,Du,Ru,Mu,Ou,Fs=h(()=>{"use strict";t();Z=require("redux-persist"),Ds=f(require("redux-persist/lib/storage")),Rs=f(require("redux-persist/lib/storage/session"));dn();P();Ht();cn();qt();jt();Xt();Zt();Qt();on();an();Rr();bu={persistReducersStorageType:"localStorage"},nt={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Su=Pe(nt["account"]),wu=Pe(nt["loginInfo"]),vu=Pe(nt["modals"]),Iu=Pe(nt["networkConfig"]),Au={2:e=>w(u({},e),{networkConfig:wr})};ku=Pe("sdk-dapp-transactionsInfo"),Lu=Pe("sdk-dapp-transactions",["transactionsToSign"]),Cu=Pe("sdk-dapp-batchTransactions",["batchTransactions"]),Pu=Pe("sdk-dapp-toasts"),Eu=Pe("sdk-dapp-signedMessageInfo"),Ms={key:"sdk-dapp-store",version:2,storage:Ds.default,whitelist:Object.keys(nt),migrate:(0,Z.createMigrate)(Au,{debug:!1})},Nu=w(u({},Ms),{whitelist:[]}),Mr={["toasts"]:(0,Z.persistReducer)(Pu,Jt),["transactions"]:(0,Z.persistReducer)(Lu,rn),["transactionsInfo"]:(0,Z.persistReducer)(ku,en),["batchTransactions"]:(0,Z.persistReducer)(Cu,sn),["signedMessageInfo"]:(0,Z.persistReducer)(Eu,Yt)},Du=w(u({},Mr),{["account"]:(0,Z.persistReducer)(Su,Vt),["loginInfo"]:(0,Z.persistReducer)(wu,$t),["modals"]:(0,Z.persistReducer)(vu,zt),["networkConfig"]:(0,Z.persistReducer)(Iu,Kt)}),Ru=bu.persistReducersStorageType==="localStorage",Mu=Ru?(0,Z.persistReducer)(Ms,co(Mr)):(0,Z.persistReducer)(Nu,co(Du)),Ou=Mu});var Bs={};V(Bs,{default:()=>Fu});var Fu,Ws=h(()=>{"use strict";t();dn();Fu=co()});var Us={};V(Us,{default:()=>Wu});var ae,Bu,Wu,Gs=h(()=>{"use strict";t();ae=require("redux-persist"),Bu=[ae.FLUSH,ae.REHYDRATE,ae.PAUSE,ae.PERSIST,ae.PURGE,ae.REGISTER],Wu=Bu});var $s={};V($s,{default:()=>Hs});function Hs(e){return(0,Vs.persistStore)(e)}var Vs,qs=h(()=>{"use strict";t();Vs=require("redux-persist")});var oa={};V(oa,{css:()=>ap,default:()=>nf});var ap,nf,ta=h(()=>{"use strict";t();ap=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ap));nf={copy:"dapp-core-component__copyButton-styles__copy"}});var ra={};V(ra,{css:()=>cp,default:()=>af});var cp,af,aa=h(()=>{"use strict";t();cp=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cp));af={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var wp=S((HM,Sp)=>{t();var If=typeof i=="object"&&i&&i.Object===Object&&i;Sp.exports=If});var lt=S(($M,vp)=>{t();var Af=wp(),kf=typeof self=="object"&&self&&self.Object===Object&&self,Lf=Af||kf||Function("return this")();vp.exports=Lf});var ca=S((qM,Ip)=>{t();var Cf=lt(),Pf=Cf.Symbol;Ip.exports=Pf});var Cp=S((zM,Lp)=>{t();var Ap=ca(),kp=Object.prototype,Ef=kp.hasOwnProperty,Nf=kp.toString,_t=Ap?Ap.toStringTag:void 0;function Df(e){var o=Ef.call(e,_t),n=e[_t];try{e[_t]=void 0;var r=!0}catch(p){}var c=Nf.call(e);return r&&(o?e[_t]=n:delete e[_t]),c}Lp.exports=Df});var Ep=S((jM,Pp)=>{t();var Rf=Object.prototype,Mf=Rf.toString;function Of(e){return Mf.call(e)}Pp.exports=Of});var pa=S((KM,Rp)=>{t();var Np=ca(),Ff=Cp(),Bf=Ep(),Wf="[object Null]",Uf="[object Undefined]",Dp=Np?Np.toStringTag:void 0;function Gf(e){return e==null?e===void 0?Uf:Wf:Dp&&Dp in Object(e)?Ff(e):Bf(e)}Rp.exports=Gf});var Op=S((XM,Mp)=>{t();var Vf=Array.isArray;Mp.exports=Vf});var Bp=S((YM,Fp)=>{t();function Hf(e){return e!=null&&typeof e=="object"}Fp.exports=Hf});var Up=S((ZM,Wp)=>{t();var $f=pa(),qf=Op(),zf=Bp(),jf="[object String]";function Kf(e){return typeof e=="string"||!qf(e)&&zf(e)&&$f(e)==jf}Wp.exports=Kf});var Rn=S((YO,qp)=>{t();function _T(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}qp.exports=_T});var jp=S((ZO,zp)=>{t();var uT=pa(),gT=Rn(),fT="[object AsyncFunction]",TT="[object Function]",hT="[object GeneratorFunction]",xT="[object Proxy]";function yT(e){if(!gT(e))return!1;var o=uT(e);return o==TT||o==hT||o==fT||o==xT}zp.exports=yT});var Xp=S((JO,Kp)=>{t();var bT=lt(),ST=bT["__core-js_shared__"];Kp.exports=ST});var Jp=S((QO,Zp)=>{t();var _a=Xp(),Yp=function(){var e=/[^.]+$/.exec(_a&&_a.keys&&_a.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function wT(e){return!!Yp&&Yp in e}Zp.exports=wT});var em=S((e6,Qp)=>{t();var vT=Function.prototype,IT=vT.toString;function AT(e){if(e!=null){try{return IT.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Qp.exports=AT});var tm=S((o6,om)=>{t();var kT=jp(),LT=Jp(),CT=Rn(),PT=em(),ET=/[\\^$.*+?()[\]{}|]/g,NT=/^\[object .+?Constructor\]$/,DT=Function.prototype,RT=Object.prototype,MT=DT.toString,OT=RT.hasOwnProperty,FT=RegExp("^"+MT.call(OT).replace(ET,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function BT(e){if(!CT(e)||LT(e))return!1;var o=kT(e)?FT:NT;return o.test(PT(e))}om.exports=BT});var rm=S((t6,nm)=>{t();function WT(e,o){return e==null?void 0:e[o]}nm.exports=WT});var Mn=S((n6,am)=>{t();var UT=tm(),GT=rm();function VT(e,o){var n=GT(e,o);return UT(n)?n:void 0}am.exports=VT});var ut=S((r6,im)=>{t();var HT=Mn(),$T=HT(Object,"create");im.exports=$T});var pm=S((a6,cm)=>{t();var sm=ut();function qT(){this.__data__=sm?sm(null):{},this.size=0}cm.exports=qT});var dm=S((i6,mm)=>{t();function zT(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}mm.exports=zT});var _m=S((s6,lm)=>{t();var jT=ut(),KT="__lodash_hash_undefined__",XT=Object.prototype,YT=XT.hasOwnProperty;function ZT(e){var o=this.__data__;if(jT){var n=o[e];return n===KT?void 0:n}return YT.call(o,e)?o[e]:void 0}lm.exports=ZT});var gm=S((c6,um)=>{t();var JT=ut(),QT=Object.prototype,eh=QT.hasOwnProperty;function oh(e){var o=this.__data__;return JT?o[e]!==void 0:eh.call(o,e)}um.exports=oh});var Tm=S((p6,fm)=>{t();var th=ut(),nh="__lodash_hash_undefined__";function rh(e,o){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=th&&o===void 0?nh:o,this}fm.exports=rh});var xm=S((m6,hm)=>{t();var ah=pm(),ih=dm(),sh=_m(),ch=gm(),ph=Tm();function Wo(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Wo.prototype.clear=ah;Wo.prototype.delete=ih;Wo.prototype.get=sh;Wo.prototype.has=ch;Wo.prototype.set=ph;hm.exports=Wo});var bm=S((d6,ym)=>{t();function mh(){this.__data__=[],this.size=0}ym.exports=mh});var wm=S((l6,Sm)=>{t();function dh(e,o){return e===o||e!==e&&o!==o}Sm.exports=dh});var gt=S((_6,vm)=>{t();var lh=wm();function _h(e,o){for(var n=e.length;n--;)if(lh(e[n][0],o))return n;return-1}vm.exports=_h});var Am=S((u6,Im)=>{t();var uh=gt(),gh=Array.prototype,fh=gh.splice;function Th(e){var o=this.__data__,n=uh(o,e);if(n<0)return!1;var r=o.length-1;return n==r?o.pop():fh.call(o,n,1),--this.size,!0}Im.exports=Th});var Lm=S((g6,km)=>{t();var hh=gt();function xh(e){var o=this.__data__,n=hh(o,e);return n<0?void 0:o[n][1]}km.exports=xh});var Pm=S((f6,Cm)=>{t();var yh=gt();function bh(e){return yh(this.__data__,e)>-1}Cm.exports=bh});var Nm=S((T6,Em)=>{t();var Sh=gt();function wh(e,o){var n=this.__data__,r=Sh(n,e);return r<0?(++this.size,n.push([e,o])):n[r][1]=o,this}Em.exports=wh});var Rm=S((h6,Dm)=>{t();var vh=bm(),Ih=Am(),Ah=Lm(),kh=Pm(),Lh=Nm();function Uo(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Uo.prototype.clear=vh;Uo.prototype.delete=Ih;Uo.prototype.get=Ah;Uo.prototype.has=kh;Uo.prototype.set=Lh;Dm.exports=Uo});var Om=S((x6,Mm)=>{t();var Ch=Mn(),Ph=lt(),Eh=Ch(Ph,"Map");Mm.exports=Eh});var Wm=S((y6,Bm)=>{t();var Fm=xm(),Nh=Rm(),Dh=Om();function Rh(){this.size=0,this.__data__={hash:new Fm,map:new(Dh||Nh),string:new Fm}}Bm.exports=Rh});var Gm=S((b6,Um)=>{t();function Mh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Um.exports=Mh});var ft=S((S6,Vm)=>{t();var Oh=Gm();function Fh(e,o){var n=e.__data__;return Oh(o)?n[typeof o=="string"?"string":"hash"]:n.map}Vm.exports=Fh});var $m=S((w6,Hm)=>{t();var Bh=ft();function Wh(e){var o=Bh(this,e).delete(e);return this.size-=o?1:0,o}Hm.exports=Wh});var zm=S((v6,qm)=>{t();var Uh=ft();function Gh(e){return Uh(this,e).get(e)}qm.exports=Gh});var Km=S((I6,jm)=>{t();var Vh=ft();function Hh(e){return Vh(this,e).has(e)}jm.exports=Hh});var Ym=S((A6,Xm)=>{t();var $h=ft();function qh(e,o){var n=$h(this,e),r=n.size;return n.set(e,o),this.size+=n.size==r?0:1,this}Xm.exports=qh});var Jm=S((k6,Zm)=>{t();var zh=Wm(),jh=$m(),Kh=zm(),Xh=Km(),Yh=Ym();function Go(e){var o=-1,n=e==null?0:e.length;for(this.clear();++o<n;){var r=e[o];this.set(r[0],r[1])}}Go.prototype.clear=zh;Go.prototype.delete=jh;Go.prototype.get=Kh;Go.prototype.has=Xh;Go.prototype.set=Yh;Zm.exports=Go});var ed=S((L6,Qm)=>{t();var Zh="__lodash_hash_undefined__";function Jh(e){return this.__data__.set(e,Zh),this}Qm.exports=Jh});var td=S((C6,od)=>{t();function Qh(e){return this.__data__.has(e)}od.exports=Qh});var rd=S((P6,nd)=>{t();var ex=Jm(),ox=ed(),tx=td();function On(e){var o=-1,n=e==null?0:e.length;for(this.__data__=new ex;++o<n;)this.add(e[o])}On.prototype.add=On.prototype.push=ox;On.prototype.has=tx;nd.exports=On});var id=S((E6,ad)=>{t();function nx(e,o,n,r){for(var c=e.length,p=n+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}ad.exports=nx});var cd=S((N6,sd)=>{t();function rx(e){return e!==e}sd.exports=rx});var md=S((D6,pd)=>{t();function ax(e,o,n){for(var r=n-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}pd.exports=ax});var ld=S((R6,dd)=>{t();var ix=id(),sx=cd(),cx=md();function px(e,o,n){return o===o?cx(e,o,n):ix(e,sx,n)}dd.exports=px});var ud=S((M6,_d)=>{t();var mx=ld();function dx(e,o){var n=e==null?0:e.length;return!!n&&mx(e,o,0)>-1}_d.exports=dx});var fd=S((O6,gd)=>{t();function lx(e,o,n){for(var r=-1,c=e==null?0:e.length;++r<c;)if(n(o,e[r]))return!0;return!1}gd.exports=lx});var hd=S((F6,Td)=>{t();function _x(e,o){return e.has(o)}Td.exports=_x});var yd=S((B6,xd)=>{t();var ux=Mn(),gx=lt(),fx=ux(gx,"Set");xd.exports=fx});var Sd=S((W6,bd)=>{t();function Tx(){}bd.exports=Tx});var ua=S((U6,wd)=>{t();function hx(e){var o=-1,n=Array(e.size);return e.forEach(function(r){n[++o]=r}),n}wd.exports=hx});var Id=S((G6,vd)=>{t();var ga=yd(),xx=Sd(),yx=ua(),bx=1/0,Sx=ga&&1/yx(new ga([,-0]))[1]==bx?function(e){return new ga(e)}:xx;vd.exports=Sx});var kd=S((V6,Ad)=>{t();var wx=rd(),vx=ud(),Ix=fd(),Ax=hd(),kx=Id(),Lx=ua(),Cx=200;function Px(e,o,n){var r=-1,c=vx,p=e.length,m=!0,d=[],l=d;if(n)m=!1,c=Ix;else if(p>=Cx){var g=o?null:kx(e);if(g)return Lx(g);m=!1,c=Ax,l=new wx}else l=o?[]:d;e:for(;++r<p;){var T=e[r],y=o?o(T):T;if(T=n||T!==0?T:0,m&&y===y){for(var v=l.length;v--;)if(l[v]===y)continue e;o&&l.push(y),d.push(T)}else c(l,y,n)||(l!==d&&l.push(y),d.push(T))}return d}Ad.exports=Px});var Cd=S((H6,Ld)=>{t();var Ex=kd();function Nx(e){return e&&e.length?Ex(e):[]}Ld.exports=Nx});var De={};V(De,{css:()=>Vd,default:()=>gy});var Vd,gy,Re=h(()=>{"use strict";t();Vd=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vd));gy={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var va={};V(va,{css:()=>el,default:()=>My});var el,My,Ia=h(()=>{"use strict";t();el=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(el));My={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Me={};V(Me,{css:()=>nl,default:()=>Fy});var nl,Fy,Oe=h(()=>{"use strict";t();nl=`.dapp-core-component__transactionDetails-styles__title {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nl));Fy={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var yt={};V(yt,{css:()=>il,default:()=>Hy});var il,Hy,bt=h(()=>{"use strict";t();il=`.dapp-core-component__transactionToast-styles__content {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(il));Hy={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var Ca={};V(Ca,{css:()=>cl,default:()=>qy});var cl,qy,Pa=h(()=>{"use strict";t();cl=`.dapp-core-component__transactionsToastList-styles__toasts {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cl));qy={toasts:"dapp-core-component__transactionsToastList-styles__toasts",toastWrapper:"dapp-core-component__transactionsToastList-styles__toastWrapper",loader:"dapp-core-component__transactionsToastList-styles__loader"}});var Ea={};V(Ea,{css:()=>_l,default:()=>jy});var _l,jy,Na=h(()=>{"use strict";t();_l=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_l));jy={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var St={};V(St,{css:()=>gl,default:()=>Jy});var gl,Jy,wt=h(()=>{"use strict";t();gl=`.dapp-core-component__styles__transaction-action-collection {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gl));Jy={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var It={};V(It,{css:()=>Sl,default:()=>nb});var Sl,nb,At=h(()=>{"use strict";t();Sl=`.dapp-core-component__transactionsTable-styles__transactions-table {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sl));nb={"transactions-table":"dapp-core-component__transactionsTable-styles__transactions-table",transactionsTable:"dapp-core-component__transactionsTable-styles__transactions-table","transactions-table-header":"dapp-core-component__transactionsTable-styles__transactions-table-header",transactionsTableHeader:"dapp-core-component__transactionsTable-styles__transactions-table-header","table-wrapper":"dapp-core-component__transactionsTable-styles__table-wrapper",tableWrapper:"dapp-core-component__transactionsTable-styles__table-wrapper",table:"dapp-core-component__transactionsTable-styles__table","transaction-cell":"dapp-core-component__transactionsTable-styles__transaction-cell",transactionCell:"dapp-core-component__transactionsTable-styles__transaction-cell","transaction-cell-margin":"dapp-core-component__transactionsTable-styles__transaction-cell-margin",transactionCellMargin:"dapp-core-component__transactionsTable-styles__transaction-cell-margin","transaction-cell-overflow":"dapp-core-component__transactionsTable-styles__transaction-cell-overflow",transactionCellOverflow:"dapp-core-component__transactionsTable-styles__transaction-cell-overflow","transaction-cell-link":"dapp-core-component__transactionsTable-styles__transaction-cell-link",transactionCellLink:"dapp-core-component__transactionsTable-styles__transaction-cell-link","transaction-cell-font-small":"dapp-core-component__transactionsTable-styles__transaction-cell-font-small",transactionCellFontSmall:"dapp-core-component__transactionsTable-styles__transaction-cell-font-small"}});var mb={};V(mb,{IconToastFooter:()=>pb});module.exports=N(mb);t();t();var Lt=f(require("react"));t();t();var x_=require("react");t();var dl=f(require("react"));t();var Xo=f(require("react"));t();to();var si=()=>!Le();var b_=()=>x(void 0,null,function*(){return yield Promise.resolve().then(()=>(nr(),tr))}),S_=()=>(nr(),N(tr)).default,rr=si();function ar({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,c]=Xo.default.useState(rr?void 0:S_()),[p,m]=Xo.default.useState(rr||n==null?void 0:n()),d=()=>x(this,null,function*(){(e?e():b_()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Xo.useEffect)(()=>{rr&&d()},[]),{globalStyles:r,styles:p}}t();t();var lr=f(require("react")),Ni=require("@fortawesome/free-solid-svg-icons"),Di=require("@fortawesome/react-fontawesome");I();var _r=({className:e="dapp-default-toast-delete-button",onClick:o})=>lr.default.createElement("button",{type:"button",className:e,onClick:o,"data-testid":"deleteToastButton"},lr.default.createElement(Di.FontAwesomeIcon,{icon:Ni.faTimes,size:"xs"}));t();var le=f(require("react")),sl=require("@fortawesome/react-fontawesome"),La=f(require("classnames"));I();t();var Ri=f(require("react"));function A(e,o){return n=>{let{globalStyles:r,styles:c}=ar({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Ri.default.createElement(e,w(u({},n),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}t();t();var Xe=f(require("react"));t();t();var Zs=require("react"),Eo=require("react-redux");t();var Or=require("@reduxjs/toolkit"),Xs=require("react-redux/lib/utils/Subscription");P();t();var Ps=f(require("lodash.throttle"));I();P();br();ko();Ao();var fu=[Ft],pn=!1,Tu=(0,Ps.default)(()=>{Qo(Jo())},5e3),Es=e=>o=>n=>{if(fu.includes(n.type))return o(n);let r=e.getState(),c=io.local.getItem(Ve.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(c==null)return Qo(Jo());let m=Date.now();return c-m<0&&!pn?setTimeout(()=>{pn=!0,e.dispatch(Xi())},1e3):(pn&&(pn=!1),Tu()),o(n)};t();t();function mn(){return typeof sessionStorage!="undefined"}var zs=mn()?(Fs(),N(Os)).default:(Ws(),N(Bs)).default,js=mn()?(Gs(),N(Us)).default:[],Ks=mn()?(qs(),N($s)).default:e=>e;dn();var k=(0,Or.configureStore)({reducer:zs,middleware:e=>e({serializableCheck:{ignoredActions:[...js,yr.type,Gt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Es)}),Ys=(0,Xs.createSubscription)(k),kv=Ks(k),Lv=(0,Or.configureStore)({reducer:co});var Uu={store:k,subscription:Ys},Fr=(0,Zs.createContext)(Uu),Nv=(0,Eo.createStoreHook)(Fr),K=(0,Eo.createDispatchHook)(Fr),L=(0,Eo.createSelectorHook)(Fr);t();t();P();t();var Js=f(require("lodash.isequal")),ln=require("reselect"),b=(0,ln.createSelectorCreator)(ln.defaultMemoize,Js.default);var be=e=>e.account,po=b(be,e=>e.address),mo=b(be,po,(e,o)=>o in e.accounts?e.accounts[o]:Ut),Gu=b(be,mo,(e,o)=>{let c=e,{accounts:n}=c,r=ve(c,["accounts"]);return w(u({},r),{address:o.address,account:o})}),Fv=b(mo,e=>e.balance),Vu=b(mo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Bv=b(be,e=>e.shard),Hu=b(be,e=>e.ledgerAccount),Wv=b(be,e=>e.walletConnectAccount),Uv=b(be,e=>e.isAccountLoading),Gv=b(be,e=>e.accountLoadingError),$u=b(be,e=>e.websocketEvent),qu=b(be,e=>e.websocketBatchEvent);t();var Qs=e=>e.dappConfig,$v=b(Qs,e=>e.shouldUseWebViewProvider);t();var Q=e=>e.loginInfo,zu=b(Q,e=>e.loginMethod),_n=b(Q,po,(e,o)=>Boolean(o)),Kv=b(Q,e=>e.walletConnectLogin),ju=b(Q,e=>e.ledgerLogin),Ku=b(Q,e=>e.walletLogin),Xv=b(Q,e=>e.isLoginSessionInvalid),Br=b(Q,e=>e.tokenLogin),ec=b(Q,e=>e.logoutRoute),Xu=b(Q,e=>e.isWalletConnectV2Initialized);t();var oc=e=>e.modals,Jv=b(oc,e=>e.txSubmittedModal),Yu=b(oc,e=>e.notificationModal);t();var ce=e=>e.networkConfig,un=b(ce,e=>e.network.chainId),Zu=b(ce,e=>e.network.roundDuration),oI=b(ce,e=>e.network.walletConnectBridgeAddress),Ju=b(ce,e=>e.network.walletConnectV2RelayAddress),Qu=b(ce,e=>e.network.walletConnectV2ProjectId),eg=b(ce,e=>e.network.walletConnectV2Options),og=b(ce,e=>e.network.walletConnectDeepLink),ee=b(ce,e=>e.network),tc=b(ee,e=>e.apiAddress),nc=b(ee,e=>e.explorerAddress),rc=b(ee,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),tg=b(ee,e=>e.xAliasAddress),Wr=b(ee,e=>e.egldLabel);t();var gn=e=>e.signedMessageInfo,rI=b(gn,e=>e.isSigning),aI=b(gn,e=>e.errorMessage),iI=b(gn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),sI=b(gn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var ac=e=>e.toasts,ng=b(ac,e=>e.customToasts),ic=b(ac,e=>e.transactionToasts);t();P();var sc={errorMessage:Ar,successMessage:kr,processingMessage:Lr},cc=e=>e.transactionsInfo,rg=b(cc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||sc);t();t();var Se=require("@multiversx/sdk-core");I();t();var Gr=require("@multiversx/sdk-core/out");t();t();function rt(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===n||n.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function fn(e){return rt(e)?atob(e):e}t();t();function Ur(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function Tn(e){let o=e;try{let n=a.Buffer.from(e,"hex").toString();Ur(n)&&n.length>1&&(o=n)}catch(n){}return o}t();t();var pc=e=>{let o=e!=null?e:"";return rt(o)?Gr.TransactionPayload.fromEncoded(o):new Gr.TransactionPayload(o)};t();I();var at=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ir).some(n=>e.startsWith(n)):!1;function No(e){var r,c,p;let o=u({},e);at({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new Se.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:pc(o.data),nonce:o.nonce.valueOf(),receiver:new Se.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Se.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Mt,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Ot,chainID:o.chainID.valueOf(),version:new Se.TransactionVersion((p=o.version)!=null?p:Ci)}),o.options?{options:new Se.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Se.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();I();t();t();t();var sg=require("@multiversx/sdk-core/out");t();I();t();var it=require("@multiversx/sdk-core");M();t();var mc=require("@multiversx/sdk-core");function cg(e){try{let o=new mc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Do(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&cg(e)}var pg=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function dc(e,o,n=""){if(!Do(e))return!1;if(new it.Address(e).isContractAddress())return!0;let p=lc({receiver:e,data:n});return p?new it.Address(p).isContractAddress()||lg(e,o,n):!1}var mg=e=>e.toLowerCase().match(/[0-9a-f]/g),dg=e=>e.length%2===0;function lg(e,o,n){let r=n==null?void 0:n.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=pg.includes(c),l=p.every(g=>mg(g)&&dg(g));return m&&d&&l}function lc({receiver:e,data:o}){try{if(!o)return e;let n=rt(o)?it.TransactionPayload.fromEncoded(o).toString():o,r=_g(n),c=n.split("@");return r>-1?c[r]:e}catch(n){console.log(n);return}}function _g(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}t();t();t();var Hr=require("@multiversx/sdk-core"),hn=f(require("bignumber.js"));D();var Vr={tokenId:"",amount:""},_c=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:Tn(p));function $r(e){if(!e)return Vr;let o=e.startsWith("ESDTTransfer"),n=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,c,p]=e.split("@");try{let m=a.Buffer.from(c,"hex").toString("ascii");if(!m)return Vr;let d=new hn.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(n)try{let[,c,p,m,d]=_c(e);if([c,p,m,d].every(l=>Boolean(l))&&Do(new Hr.Address(d).bech32()))return{tokenId:`${c}-${p}`,amount:new hn.default(m,16).toString(10),collection:c,nonce:p,receiver:new Hr.Address(d).bech32()}}catch(c){}if(r)try{let[,c,p,m]=_c(e);if([c,p,m].every(d=>Boolean(d)))return{tokenId:`${c}-${p}`,amount:new hn.default(m,16).toString(10),collection:c,nonce:p}}catch(c){}return Vr}t();t();t();var pe="accounts";var xn="blocks",gc="code",fc="collections";var Tc="contracts";var hc="identities";var xc="locked-accounts",yc="logs",bc="miniblocks";var yn="nfts",Sc="nodes",qr="providers",wc="roles",zr="sc-results";var lo="tokens";var oe="transactions";var ie={shard:e=>`/${xn}?shard=${e}`,receiverShard:e=>`/${oe}?receivershard=${e}`,senderShard:e=>`/${oe}?sendershard=${e}`,transactionDetails:e=>`/${oe}/${e}`,transactionDetailsScResults:e=>`/${oe}/${e}/${zr}`,transactionDetailsLogs:e=>`/${oe}/${e}/${yc}`,nodeDetails:e=>`/${Sc}/${e}`,accountDetails:e=>`/${pe}/${e}`,accountDetailsContractCode:e=>`/${pe}/${e}/${gc}`,accountDetailsTokens:e=>`/${pe}/${e}/${lo}`,accountDetailsNfts:e=>`/${pe}/${e}/${yn}`,accountDetailsScResults:e=>`/${pe}/${e}/${zr}`,accountDetailsContracts:e=>`/${pe}/${e}/${Tc}`,identityDetails:e=>`/${hc}/${e}`,tokenDetails:e=>`/${lo}/${e}`,tokenDetailsAccounts:e=>`/${lo}/${e}/${pe}`,tokenDetailsLockedAccounts:e=>`/${lo}/${e}/${xc}`,tokenDetailsRoles:e=>`/${lo}/${e}/${wc}`,collectionDetails:e=>`/${fc}/${e}`,nftDetails:e=>`/${yn}/${e}`,providerDetails:e=>`/${qr}/${e}`,providerDetailsTransactions:e=>`/${qr}/${e}/${oe}`,miniblockDetails:e=>`/${bc}/${e}`};t();var bn=e=>{var o,n,r,c;if(e.action){let p=[(o=e.action.arguments)==null?void 0:o.token,(n=e.action.arguments)==null?void 0:n.token1,(r=e.action.arguments)==null?void 0:r.token2,(c=e.action.arguments)==null?void 0:c.transfers].filter(d=>d!=null);return[].concat(...p)}return[]};t();t();function Sn(e){var n,r;let o=e.receiver;return(r=(n=e.action)==null?void 0:n.arguments)!=null&&r.receiver&&(o=e.action.arguments.receiver),o}function vc(e){let o=Sn(e);return e.receiver===o?e.receiverAssets:void 0}t();Y();var Ic=e=>{var r,c,p,m,d,l;let o="Transaction";return((r=e.action)==null?void 0:r.name)&&((c=e.action)==null?void 0:c.category)&&(((p=e.action)==null?void 0:p.category)==="esdtNft"&&((m=e.action)==null?void 0:m.name)==="transfer"?o="Transaction":e.action&&(o=e.action.name),(l=(d=e.action)==null?void 0:d.arguments)!=null&&l.functionName&&(o=e.action.arguments.functionName)),o};t();var Ac=!1;function gg(e){Ac||(console.error(e),Ac=!0)}function $e({explorerAddress:e,to:o}){try{return new URL(o).href}catch(n){return o.startsWith("/")||(gg(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}t();Y();function Lc(e,o,n){let r=e===o.sender,c=e===n,p=r&&c,m=(o==null?void 0:o.type)==="SmartContractResult";switch(!0){case m:return"Internal";case p:return"Self";case c:return"In";case r:default:return"Out"}}t();t();t();var fg=f(require("bignumber.js"));I();t();var Pc=require("@multiversx/sdk-core"),qe=f(require("bignumber.js"));I();t();var Cc=f(require("bignumber.js")),st=(e,o=!0)=>{let n=String(e);if(!n.match(/^[-]?\d+$/))return!1;let r=new Cc.default(n),c=o?0:-1;return r.toString(10)===n&&r.comparedTo(0)>=c};t();function Ee(e){return{if:function(o){return o?{then:n=>n instanceof Function?Ee(n(e)):Ee(n)}:{then:()=>Ee(e)}},then:o=>o instanceof Function?Ee(o(e)):Ee(o),valueOf:function(){return e}}}qe.default.config({ROUNDING_MODE:qe.default.ROUND_FLOOR});function me({input:e,decimals:o=$,digits:n=ao,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!st(e,!1))throw new Error("Invalid input");let m=new qe.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Ee(d).then(()=>Pc.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let g=new qe.default(l);if(g.isZero())return ye;let T=g.toString(10),[y,v]=T.split("."),C=new qe.default(v||0),E=Ee(0).if(Boolean(v&&r)).then(()=>Math.max(v.length,n)).if(C.isZero()&&!r).then(0).if(Boolean(v&&!r)).then(()=>Math.min(v.length,n)).valueOf(),G=v&&n>=1&&n<=v.length&&C.isGreaterThan(0)&&new qe.default(v.substring(0,n)).isZero(),te=g.toFormat(E);return Ee(T).if(p).then(te).if(Boolean(G)).then(We=>{let we=new qe.default(y).isZero(),[R,ho]=We.split("."),xo=new Array(n-1).fill(0),Vn=[...xo,0].join(""),Hn=[...xo,1].join("");return we?c?`<${R}.${Hn}`:r?`${R}.${ho}`:R:`${R}.${Vn}`}).if(Boolean(!G&&v)).then(We=>{let[we]=We.split("."),R=v.substring(0,E);if(r){let ho=n-R.length;if(ho>0){let xo=Array(ho).fill(0).join("");return R=`${R}${xo}`,`${we}.${R}`}return We}return R?`${we}.${R}`:we}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}t();t();t();I();t();var ct=(r=>(r.NonFungibleESDT="NonFungibleESDT",r.SemiFungibleESDT="SemiFungibleESDT",r.MetaESDT="MetaESDT",r))(ct||{});t();t();t();I();t();I();t();var Tg=require("@multiversx/sdk-core");I();t();var pt=require("@multiversx/sdk-core"),yg=f(require("bignumber.js"));I();t();t();var hg=f(require("bignumber.js"));I();t();I();t();var jr={isEsdt:!1,isNft:!1,isEgld:!1};function Kr(e){let o=e==null?void 0:e.split("-").length;return o===2?w(u({},jr),{isEsdt:!0}):o===3?w(u({},jr),{isNft:!0}):w(u({},jr),{isEgld:!0})}t();t();t();t();t();I();t();I();function vn({token:e,noValue:o,showLastNonZeroDecimal:n}){var g;let r=!o&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";r&&c&&(m=c?me({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:n}):Number(e.value).toLocaleString("en"));let d=ie.nftDetails(String(e.identifier)),l=e.ticker===e.collection&&(g=e.identifier)!=null?g:e.ticker;return{badgeText:p,tokenFormattedAmount:r?m:null,tokenExplorerLink:d,tokenLinkText:l,token:e,noValue:o,showLastNonZeroDecimal:n}}t();I();function In({token:e,noValue:o,showLastNonZeroDecimal:n}){var d;let r=Boolean(!o&&e.value),c=r?me({input:e.value,decimals:(d=e.decimals)!=null?d:$,digits:2,showLastNonZeroDecimal:n,addCommas:!0}):null,p=ie.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:r,tokenLinkText:m,token:e,showLastNonZeroDecimal:n}}t();Y();var Ec=["reDelegateRewards","claimRewards","unBond"],Nc=["wrapEgld","unwrapEgld"],Dc=["unStake"],Rc=["unDelegate"];t();t();var Mc=e=>{let o=e.map(r=>{let{isNft:c}=Kr(r.type);if(c){let{badgeText:T,tokenFormattedAmount:y,tokenLinkText:v}=vn({token:r});return`${T!=null?`(${T}) `:""}${y} ${v}`}let{tokenFormattedAmount:p,tokenLinkText:m,token:d}=In({token:r}),l=d.collection?d.identifier:d.token;return`${p} ${m} (${l})`});return decodeURI(o.join("%0A"))};t();I();var se=e=>({egldValueData:{value:e,formattedValue:me({input:e}),decimals:$}});t();var Fc=f(require("bignumber.js"));var Oc=!1;function Bc(e){var o;try{let r=fn(e.data).replace(`${(o=e.action)==null?void 0:o.name}@`,""),c=new Fc.default(r,16);if(!c.isNaN())return se(c.toString(10))}catch(n){Oc||(console.error(`Unable to extract value for txHash: ${e.txHash}`),Oc=!0)}return se(e.value)}t();t();Y();var Xr=e=>{var n,r;return(r=(n=e==null?void 0:e.operations)==null?void 0:n.filter(c=>Object.values(pr).includes(c.type)))!=null?r:[]};var Wc=!1,Uc=e=>{Wc||(console.error(`Operations field missing for txHash: ${e}.
        Unable to compute value field.`),Wc=!0)};function Gc(e){try{if(e.operations){let[o]=Xr(e);return se(o==null?void 0:o.value)}else Uc(e.txHash)}catch(o){Uc(e.txHash)}return se(e.value)}t();var Hc=f(require("bignumber.js"));var Vc=!1;function $c(e){var n,r,c,p,m;return new Hc.default((r=(n=e.action)==null?void 0:n.arguments)==null?void 0:r.value).isNaN()?(Vc||(console.error(`Unable to interpret ${(m=e.action)==null?void 0:m.name} data for txHash: ${e.txHash}`),Vc=!0),se(e.value)):se((p=(c=e.action)==null?void 0:c.arguments)==null?void 0:p.value)}var qc=({transaction:e,hideMultipleBadge:o})=>{var n;if(e.action){if(Nc.includes(e.action.name))return se(e.value);if(Dc.includes(e.action.name))return Bc(e);if(Ec.includes(e.action.name))return Gc(e);if(Rc.includes(e.action.name))return $c(e);let r=bn(e);if(r.length){let c=r[0],p=Object.values(ct).includes(c.type),d=!o&&r.length>1?Mc(r):"";if(p){let{badgeText:C,tokenFormattedAmount:E,tokenExplorerLink:G,tokenLinkText:te}=vn({token:c});return{nftValueData:{badgeText:C,tokenFormattedAmount:E,tokenExplorerLink:G,tokenLinkText:te,transactionTokens:r,token:c,value:E!=null?c.value:null,decimals:E!=null?c.decimals:null,titleText:d}}}let{tokenExplorerLink:l,showFormattedAmount:g,tokenFormattedAmount:T,tokenLinkText:y,token:v}=In({token:c});return{tokenValueData:{tokenExplorerLink:l,showFormattedAmount:g,tokenFormattedAmount:T,tokenLinkText:y,transactionTokens:r,token:v,value:c.value,decimals:(n=c.decimals)!=null?n:$,titleText:d}}}}return se(e.value)};function zc({transaction:e,address:o,explorerAddress:n}){var G;let r=(G=e.tokenIdentifier)!=null?G:$r(e.data).tokenId,c=Sn(e),p=vc(e),m=Lc(o,e,c),d=Ic(e),l=bn(e),g=$e({explorerAddress:n,to:ie.accountDetails(e.sender)}),T=$e({explorerAddress:n,to:ie.accountDetails(c)}),y=$e({explorerAddress:n,to:ie.senderShard(e.senderShard)}),v=$e({explorerAddress:n,to:ie.receiverShard(e.receiverShard)}),C=e.originalTxHash?`${e.originalTxHash}#${e.txHash}`:e.txHash,E=$e({explorerAddress:n,to:ie.transactionDetails(C)});return w(u({},e),{tokenIdentifier:r,receiver:c,receiverAssets:p,transactionDetails:{direction:m,method:d,transactionTokens:l,isContract:dc(e.sender)},links:{senderLink:g,receiverLink:T,senderShardLink:y,receiverShardLink:v,transactionLink:E}})}t();t();t();t();var bg=f(require("bignumber.js"));M();t();t();t();t();D();t();var Ig=require("@multiversx/sdk-web-wallet-provider");I();t();var wg=f(require("qs"));t();j();to();t();to();var x1={search:Le()?window.location.search:"",removeParams:[]};t();t();t();z();t();Y();t();t();z();t();var Ag=f(require("linkifyjs"));t();I();t();var kg=f(require("bignumber.js"));t();M();t();t();D();t();D();t();t();t();Y();t();Y();t();var Lg=f(require("bignumber.js"));I();Y();t();Y();t();var Kc=require("react");M();t();t();Y();t();t();var Cg=require("@multiversx/sdk-core/out"),Pg=f(require("bignumber.js"));Y();t();M();t();t();M();var mP=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var Xc=require("react");M();z();t();var Ng=require("react");Y();var hP=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];so();t();var An=e=>e.transactions,Ro=b(An,e=>e.signedTransactions),Dg=b(An,e=>e.signTransactionsError),Yc=b(An,e=>e.signTransactionsCancelMessage),kn=e=>o=>Object.entries(o).reduce((n,[r,c])=>(e(c.status)&&(n[r]=c),n),{}),Zc=b(Ro,kn(Lo)),Jc=b(Ro,kn(Co)),Qc=b(Ro,kn(Po)),Rg=b(Ro,kn(Pr)),ep=b(An,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>No(n)))||[]})}),Mg=b(Ro,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Ne=()=>L(mo);M();so();t();t();var To=f(require("react")),qo=require("@fortawesome/free-solid-svg-icons"),rl=require("@fortawesome/react-fontawesome"),ka=f(require("classnames"));t();t();t();var Og=f(require("axios"));t();var Bg=f(require("axios"));Io();t();I();t();var Wg=f(require("axios"));t();var Gg=f(require("axios"));t();t();var Vg=f(require("axios"));t();var Hg=f(require("axios"));t();t();t();t();t();var tp=require("@lifeomic/axios-fetch"),Zr=f(require("axios")),Jr=(0,tp.buildAxiosFetch)(Zr.default),Qr=(e,o)=>x(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function $g(e,o,n){return x(this,null,function*(){try{let r=yield Jr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return Qr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function qg(e,o){return x(this,null,function*(){try{let n=yield Jr(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return Qr(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function zg(e,o,n){return x(this,null,function*(){try{let r=yield Jr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Qr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Mo=Zr.default.create();Mo.get=qg;Mo.post=$g;Mo.patch=zg;t();t();var jg=f(require("axios"));t();var Kg=f(require("swr"));t();t();t();t();t();Io();t();var Zg=f(require("axios"));t();var Qg=f(require("axios"));t();Io();t();Io();t();t();t();t();var of=f(require("axios"));t();I();t();t();var Oo=f(require("react")),Cn=require("@fortawesome/free-solid-svg-icons"),na=require("@fortawesome/react-fontawesome"),ip=f(require("classnames"));t();to();function tf(e){let o=!1,n=document==null?void 0:document.createElement("textarea");n.value=e,n.style.position="fixed",document==null||document.body.appendChild(n),n.focus(),n.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(n),o}function rp(e){return x(this,null,function*(){if(!Le())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=tf(e),o})}var rf=({text:e,className:o="dapp-copy-button",copyIcon:n=Cn.faCopy,successIcon:r=Cn.faCheck,styles:c})=>{let[p,m]=(0,Oo.useState)({default:!0,success:!1});return Oo.default.createElement("a",{href:"/#",onClick:l=>x(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let g=e&&e.trim();m({default:!1,success:yield rp(g)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,ip.default)(c==null?void 0:c.copy,o)},p.default||!p.success?Oo.default.createElement(na.FontAwesomeIcon,{icon:n}):Oo.default.createElement(na.FontAwesomeIcon,{icon:r}))},sp=A(rf,{ssrStyles:()=>Promise.resolve().then(()=>(ta(),oa)),clientStyles:()=>(ta(),N(oa)).default});t();t();var ia=f(require("react")),pp=require("@fortawesome/free-solid-svg-icons"),mp=require("@fortawesome/react-fontawesome"),dp=f(require("classnames"));t();var Fo=()=>L(ce);var sf=l=>{var g=l,{page:e,text:o,className:n="dapp-explorer-link",children:r,globalStyles:c,customExplorerIcon:p,styles:m}=g,d=ve(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:T}}=Fo(),y=o!=null?o:ia.default.createElement(mp.FontAwesomeIcon,{icon:p!=null?p:pp.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),v=$e({explorerAddress:String(T),to:e});return ia.default.createElement("a",u({href:v,target:"_blank",className:(0,dp.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,n),rel:"noreferrer"},d),r!=null?r:y)},ze=A(sf,{ssrStyles:()=>Promise.resolve().then(()=>(aa(),ra)),clientStyles:()=>(aa(),N(ra)).default});t();t();var U=f(require("react")),ol=f(require("classnames"));I();t();t();var lp=require("react");t();P();t();t();t();t();t();t();t();t();var pf=require("@multiversx/sdk-extension-provider"),mf=require("@multiversx/sdk-hw-provider"),df=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),lf=require("@multiversx/sdk-opera-provider"),_f=require("@multiversx/sdk-passkey-provider/out"),uf=require("@multiversx/sdk-web-wallet-provider");I();Ue();t();var Bo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),_p=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");D();t();var de=e=>`Unable to perform ${e}, Provider not initialized`,Pn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(de("getAccount"))}setAccount(o){throw new Error(de(`setAccount: ${o}`))}login(o){throw new Error(de(`login with options: ${o}`))}logout(o){throw new Error(de(`logout with options: ${o}`))}getAddress(){throw new Error(de("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(de(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(de(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(de(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(de(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(de(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(de(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},up=new Pn;P();t();t();D();t();t();t();z();t();so();t();P();D();t();t();t();t();z();t();F();M();t();P();t();var Tp=require("@multiversx/sdk-core");M();j();t();so();t();P();D();t();P();M();t();t();t();M();t();Rt();t();t();t();t();var Tf=f(require("swr"));t();t();t();t();var hp=require("react");t();t();var hf=require("react"),xf=require("@multiversx/sdk-web-wallet-provider"),yf=require("@multiversx/sdk-web-wallet-provider"),bf=f(require("qs"));I();P();D();cr();z();var xM=W();t();var $p=require("react"),la=require("@multiversx/sdk-core");I();Sr();t();t();t();t();t();t();t();t();t();t();var wf=require("@multiversx/sdk-opera-provider");t();var vf=require("@multiversx/sdk-extension-provider");t();Ue();t();t();t();t();var Xf=f(Up());t();var Qf=require("@multiversx/sdk-native-auth-client");t();var Hp=f(require("axios"));t();t();t();function Gp(e){return x(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var Vp=(e,o,n,r=0)=>x(void 0,null,function*(){try{return yield e(...n)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Gp(o.delay)),yield Vp(e,o,n,r+1)):null}}),ma=(e,o={retries:5,delay:500})=>(...n)=>x(void 0,null,function*(){return yield Vp(e,o,n)});var Yf=4;var p5=ma((e,o,n)=>x(void 0,null,function*(){if(n){let p=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:p}}let{data:r}=yield Hp.default.get(`${e}/${xn}?from=${Yf}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));t();t();Bt();t();t();z();var x5={origin:W().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};t();var oT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();var tT=require("@multiversx/sdk-passkey-provider/out");I();z();t();t();t();var cT=require("react"),pT=require("@multiversx/sdk-hw-provider");t();F();M();t();et();ko();Ao();j();t();t();var Dd=require("react"),Rd=require("@multiversx/sdk-core"),Yx=require("@multiversx/sdk-extension-provider"),Zx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Jx=require("@multiversx/sdk-passkey-provider/out"),Qx=f(Cd());I();t();t();t();t();t();t();t();t();t();var Tt=f(require("react"));var tF=(0,Tt.createContext)({}),nF=k.getState();t();var Ed=f(require("react"));t();var fa=f(require("react")),Dx=f(require("axios"));t();t();Ue();t();t();var Wx=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Ux=require("@multiversx/sdk-webview-provider/out/WebviewProvider");F();t();F();P();M();t();t();P();t();j();t();P();M();t();t();var Mx=require("@multiversx/sdk-core"),Ox=f(require("bignumber.js"));I();t();var Fx=f(require("bignumber.js"));I();P();D();j();z();t();var Nd=require("react"),$x=require("@multiversx/sdk-extension-provider"),qx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),zx=require("@multiversx/sdk-passkey-provider/out");Ue();P();t();P();M();et();z();t();he();P();t();t();var oy=require("react");t();t();D();so();t();var Fn=require("react"),Md=(e,o)=>{let[n,r]=(0,Fn.useState)(e);return(0,Fn.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),n};t();t();var ny=require("react"),ry=require("@multiversx/sdk-extension-provider");he();F();D();t();Ce();j();j();t();t();Ue();M();t();var ty=require("react"),Od=require("@multiversx/sdk-core");P();t();var ay=require("react"),iy=require("@multiversx/sdk-opera-provider");he();F();D();Ce();j();z();t();var sy=require("react");dr();he();Ue();F();P();D();Ce();z();t();var _y=require("react");he();P();t();t();ur();t();t();var cy=f(require("platform"));to();t();t();t();t();t();function Fd(){return Wr(k.getState())}t();t();Yo();D();t();t();var py=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();et();ko();t();t();t();P();var my={};var Bd=e=>my[e];t();t();var dy=f(require("axios"));j();t();t();var ly=f(Rn());Yo();var Wd,Ud,Gd,j4=(Gd=(Ud=(Wd=ro.safeWindow)==null?void 0:Wd.location)==null?void 0:Ud.origin)==null?void 0:Gd.includes("localhost");t();z();t();t();var Sy=require("react");I();t();t();I();t();t();t();var uy=f(require("bignumber.js"));t();t();t();var Ke=f(require("react")),Kd=require("react"),Xd=require("react"),ba=f(require("classnames")),Yd=require("react-dom");I();t();var Hd=f(require("react")),$d=f(require("classnames"));var fy=({className:e,children:o,styles:n})=>Hd.default.createElement("div",{className:(0,$d.default)(n==null?void 0:n.dappModalBody,e)},o),Ta=A(fy,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),N(De)).default});t();var ha=f(require("react")),qd=f(require("classnames"));var Ty=({visible:e,customFooter:o,className:n,footerText:r,styles:c})=>e?ha.default.createElement("div",{className:(0,qd.default)(c==null?void 0:c.dappModalFooter,n)},o!=null?o:ha.default.createElement("div",null,r)):null,xa=A(Ty,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),N(De)).default});t();var $o=f(require("react")),zd=require("@fortawesome/free-solid-svg-icons"),jd=require("@fortawesome/react-fontawesome"),xt=f(require("classnames"));var hy=({visible:e,headerText:o,customHeader:n,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?n?$o.default.createElement("div",{className:(0,xt.default)(l==null?void 0:l.dappModalHeader,r)},n):$o.default.createElement("div",{className:(0,xt.default)(l==null?void 0:l.dappModalHeader,r)},$o.default.createElement("div",{className:(0,xt.default)(l==null?void 0:l.dappModalHeaderText,p)},o),$o.default.createElement("button",{onClick:m,className:(0,xt.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},$o.default.createElement(jd.FontAwesomeIcon,{size:"lg",icon:zd.faTimes}))):null,ya=A(hy,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),N(De)).default});var xy={showHeader:!0,showFooter:!1,headerText:"",footerText:""},yy=({"data-testid":e="dappModal",children:o,className:n="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=xy,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:g})=>{let[T,y]=(0,Kd.useState)(!1);if((0,Xd.useEffect)(()=>{y(!0)},[]),!l)return null;let{showHeader:v,showFooter:C,headerText:E,footerText:G,modalDialogClassName:te="dapp-modal-dialog",modalContentClassName:Je="dapp-modal-dialog-content",modalHeaderClassName:We="dapp-modal-dialog-header",modalHeaderTextClassName:we="dapp-modal-dialog-header-text",modalCloseButtonClassName:R="dapp-modal-dialog-close-button",modalBodyClassName:ho="dapp-modal-dialog-content-body",modalFooterClassName:xo="dapp-modal-dialog-footer",customModalHeader:Vn,customModalFooter:Hn}=c,Nl=Dl=>{Dl.key==="Escape"&&r&&(m==null||m())};return Ke.default.createElement(Ke.default.Fragment,null,T&&(0,Yd.createPortal)(Ke.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,ba.default)(te,g==null?void 0:g.dappModal,n),"data-testid":e,onKeyDown:Nl},Ke.default.createElement("div",{className:(0,ba.default)(g==null?void 0:g.dappModalContent,Je)},Ke.default.createElement(ya,{visible:v,headerText:E,customHeader:Vn,className:We,headerTextClassName:we,closeButtonClassName:R,onHide:m}),Ke.default.createElement(Ta,{className:ho},o),Ke.default.createElement(xa,{visible:C,customFooter:Hn,footerText:G,className:xo}))),d!=null?d:document==null?void 0:document.body))},by=A(yy,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),N(De)).default});t();t();var Zd=require("react");t();t();var Jd=require("react"),vy=require("@multiversx/sdk-hw-provider");he();F();P();D();Ce();t();var wy=require("react");t();t();var Sa=require("react");F();P();D();Ce();z();t();var Ay=require("react"),ky=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");he();F();D();Ce();j();j();t();var Ly=require("react"),Cy=require("@multiversx/sdk-passkey-provider/out");he();F();D();Ce();j();j();t();t();var Qd=require("react");t();var Ny=require("react");t();var wa=require("react"),Ey=require("socket.io-client");P();t();t();t();var Dy=require("react");M();t();t();t();var Ry=f(require("swr"));var Oy=({text:e,className:o="dapp-trim","data-testid":n="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,U.useState)(0),[d,l]=(0,U.useState)(!1),g=(0,U.useRef)(document==null?void 0:document.createElement("span")),T=(0,U.useRef)(document==null?void 0:document.createElement("span")),y=Md(p,300),v=()=>{if(g.current&&T.current){let G=T.current.offsetWidth-g.current.offsetWidth;l(G>1)}},C=()=>{m(p+1)};return(0,U.useEffect)(()=>(window==null||window.addEventListener("resize",C),()=>{window==null||window.removeEventListener("resize",C)})),(0,U.useEffect)(()=>{v()},[y]),U.default.createElement("span",{ref:g,className:(0,ol.default)(c==null?void 0:c.trim,r,o,{overflow:d}),"data-testid":n},U.default.createElement("span",{ref:T,className:c==null?void 0:c.hiddenTextRef},e),d?U.default.createElement(U.default.Fragment,null,U.default.createElement("span",{className:c==null?void 0:c.left},U.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),U.default.createElement("span",{className:c==null?void 0:c.ellipsis},Ei),U.default.createElement("span",{className:c==null?void 0:c.right},U.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):U.default.createElement("span",null,e))},tl=A(Oy,{ssrStyles:()=>Promise.resolve().then(()=>(Ia(),va)),clientStyles:()=>(Ia(),N(va)).default});var By={icon:qo.faCheck},Aa={icon:qo.faTimes},Wy={icon:qo.faCircleNotch},Uy={pending:Wy,success:By,fail:Aa,invalid:Aa,timedOut:Aa},Gy=({className:e,hash:o,status:n,iconSrc:r,isTimedOut:c,globalStyles:p,styles:m})=>{var g;let d=n?Uy[n]:null,l=(g=r==null?void 0:r.icon)!=null?g:d==null?void 0:d.icon;return To.default.createElement("div",{className:(0,ka.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&l!=null&&To.default.createElement(rl.FontAwesomeIcon,{icon:l,className:(0,ka.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":n==="pending"})}),To.default.createElement("span",{className:m==null?void 0:m.trim},To.default.createElement(tl,{text:o})),To.default.createElement(sp,{text:o}),To.default.createElement(ze,{page:`/${oe}/${o}`,className:p==null?void 0:p.ml2}))},Bn=A(Gy,{ssrStyles:()=>Promise.resolve().then(()=>(Oe(),Me)),clientStyles:()=>(Oe(),N(Me)).default});var Vy=({title:e,transactions:o,isTimedOut:n=!1,className:r="dapp-transaction-details",styles:c})=>{if(o==null)return null;let{address:p}=Ne(),m=(0,Xe.useMemo)(()=>{let l=o.filter(T=>!tn(re[T==null?void 0:T.status])).length,g=o.length;return g===1&&l===1?tn(re[o[0].status])?"Processing transaction":"Transaction processed":`${l} / ${g} transactions processed`},[o]),d=o.length===1&&o[0].sender!==p;return Xe.default.createElement(Xe.default.Fragment,null,e&&Xe.default.createElement("div",{className:c==null?void 0:c.title},e),!d&&Xe.default.createElement("div",{className:c==null?void 0:c.status},m),o.map(({hash:l,status:g})=>{let T={className:r,hash:l,status:re[g],isTimedOut:n};return Xe.default.createElement(Bn,w(u({},T),{key:l}))}))},al=A(Vy,{ssrStyles:()=>Promise.resolve().then(()=>(Oe(),Me)),clientStyles:()=>(Oe(),N(Me)).default});var $y=({style:e,toastDataState:o,transactions:n,showCloseButton:r,onDeleteToast:c,toastTitle:p,isTimedOut:m,customElements:d={CustomCloseButton:_r,TransactionToastStatusIcon:sl.FontAwesomeIcon,TransactionDetails:al},globalStyles:l,styles:g})=>{let T=d==null?void 0:d.TransactionDetails,y=d==null?void 0:d.TransactionToastStatusIcon,v=d==null?void 0:d.CustomCloseButton;return le.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},le.default.createElement("div",{className:e.left},le.default.createElement("div",{className:(0,La.default)(e.icon,o.iconClassName)},y&&le.default.createElement(y,{size:"5x",icon:o.icon,className:e.svg}))),le.default.createElement("div",{className:e.right},le.default.createElement("div",{className:e.heading},le.default.createElement("h5",{className:(0,La.default)([l==null?void 0:l.h5,e.mb4]),"data-testid":"transactionToastTitle"},o.title),r&&v&&le.default.createElement(v,{className:g==null?void 0:g.close,onClick:c})),le.default.createElement("div",{className:e.footer},T&&le.default.createElement(T,{transactions:n,title:p,isTimedOut:m}))))},mq=A($y,{ssrStyles:()=>Promise.resolve().then(()=>(bt(),yt)),clientStyles:()=>(bt(),N(yt)).default});t();var pl=f(require("react")),ml=f(require("classnames"));var zy=({className:e="dapp-transaction-toast-wrapper",children:o,id:n,styles:r})=>pl.default.createElement("div",{id:n,className:(0,ml.default)(r==null?void 0:r.toasts,r==null?void 0:r.toastWrapper,e)},o),gq=A(zy,{ssrStyles:()=>Promise.resolve().then(()=>(Pa(),Ca)),clientStyles:()=>(Pa(),N(Ca)).default});t();function ll(e){var o;try{let n=e,r=No(w(u({},n),{chainID:(o=n.chainID)!=null?o:"D"}));return Boolean(r)}catch(n){return!1}}t();t();var kt=f(require("react"));t();t();var _e=f(require("react")),vl=require("@fortawesome/free-solid-svg-icons"),Il=require("@fortawesome/react-fontawesome"),Ra=f(require("classnames"));I();t();t();var Ye=f(require("react")),ul=f(require("classnames"));I();var Ky=e=>{var n;let o=(n=e.styles)!=null?n:{};return Ye.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ye.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},Xy=(e,o)=>{var C,E,G;let{value:n,showLastNonZeroDecimal:r=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:ao,m=e.decimals!=null?e.decimals:$,d=(C=e.styles)!=null?C:{},l=(E=e.globalStyles)!=null?E:{},g=me({input:n,decimals:m,digits:p,showLastNonZeroDecimal:r,addCommas:!0}),T=g.split("."),y=T.length===1,v=g!==ye;if(p>0&&y&&v){let te="";for(let Je=1;Je<=p;Je++)te=te+ye;T.push(te)}return Ye.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ye.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},T[0]),T.length>1&&Ye.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",T[1]),c&&Ye.default.createElement("span",{className:(0,ul.default)(d.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(G=e.token)!=null?G:o}`))},Yy=e=>{let{value:o}=e;return st(o)?Xy(e,e.egldLabel||""):Ky(e)},Zy=e=>{let o=e.egldLabel||Fd(),n=w(u({},e),{egldLabel:o});return Ye.default.createElement(Yy,u({},n))},zo=A(Zy,{ssrStyles:()=>Promise.resolve().then(()=>(Na(),Ea)),clientStyles:()=>(Na(),N(Ea)).default});t();t();t();var vt=f(require("react")),Wn=f(require("classnames"));var Qy=({token:e,globalStyles:o,styles:n})=>e.collection?vt.default.createElement(ze,{page:ie.collectionDetails(e.collection),className:(0,Wn.default)(n==null?void 0:n.transactionActionCollection)},vt.default.createElement("div",{className:(0,Wn.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&vt.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,Wn.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),vt.default.createElement("span",null,e.ticker))):null,fl=A(Qy,{ssrStyles:()=>Promise.resolve().then(()=>(wt(),St)),clientStyles:()=>(wt(),N(St)).default});t();var Fe=f(require("react")),jo=f(require("classnames"));I();t();var Tl=f(require("react")),hl=f(require("classnames"));var eb=({text:e,className:o,"data-testid":n="nftBadge",globalStyles:r})=>Tl.default.createElement("div",{"data-testid":n,className:(0,hl.default)(r==null?void 0:r.badge,r==null?void 0:r.badgeSecondary,r==null?void 0:r.badgePill,r==null?void 0:r.fontWeightLight,o)},e),xl=A(eb,{});var ob=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:n,tokenLinkText:r,token:c,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var l,g,T,y,v;return c.identifier?Fe.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&Fe.default.createElement(xl,{text:e,className:(0,jo.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&Fe.default.createElement("div",{className:(0,jo.default)(m==null?void 0:m.mr1,{[(l=m==null?void 0:m.textTruncate)!=null?l:""]:c.svgUrl})},Fe.default.createElement(zo,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Fe.default.createElement(ze,{page:n,"data-testid":"nftExplorerLink",className:(0,jo.default)(d==null?void 0:d.explorer,{[(g=m==null?void 0:m.sideLink)!=null?g:""]:c.svgUrl,[(T=m==null?void 0:m.dFlex)!=null?T:""]:c.svgUrl,[(y=m==null?void 0:m.textTruncate)!=null?y:""]:!c.svgUrl})},Fe.default.createElement("div",{className:d==null?void 0:d.data},c.svgUrl&&Fe.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,jo.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),Fe.default.createElement("span",{className:(0,jo.default)({[(v=d==null?void 0:d.truncate)!=null?v:""]:c.ticker===c.collection})},r)))):null},yl=A(ob,{ssrStyles:()=>Promise.resolve().then(()=>(wt(),St)),clientStyles:()=>(wt(),N(St)).default});t();var Be=f(require("react")),Un=f(require("classnames"));I();var tb=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:n,token:r,showLastNonZeroDecimal:c,globalStyles:p})=>{var m,d;return r.token?Be.default.createElement(Be.default.Fragment,null,o&&Be.default.createElement("div",{className:p==null?void 0:p.textTruncate},Be.default.createElement(zo,{value:r.value,digits:2,showLabel:!1,decimals:(m=r.decimals)!=null?m:$,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),Be.default.createElement(ze,{page:e,"data-testid":"tokenExplorerLink",className:(0,Un.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:r.svgUrl})},Be.default.createElement("div",{className:(0,Un.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},r.svgUrl&&Be.default.createElement("img",{src:r.svgUrl,alt:r.name,className:(0,Un.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),Be.default.createElement("span",null,n)))):null},bl=A(tb,{});var Da={Collection:fl,Nft:yl,Token:bl};var rb=({children:e,titleText:o,globalStyles:n})=>_e.default.createElement("div",{className:(0,Ra.default)(n==null?void 0:n.dFlex,n==null?void 0:n.alignItemsCenter),"data-testid":"transactionValue"},e,o&&_e.default.createElement(Il.FontAwesomeIcon,{icon:vl.faLayerGroup,"data-testid":"transactionValueIcon",className:(0,Ra.default)(n==null?void 0:n.ml2,n==null?void 0:n.textSecondary),title:o})),wl=A(rb,{ssrStyles:()=>Promise.resolve().then(()=>(At(),It)),clientStyles:()=>(At(),N(It)).default}),ab=({transaction:e,hideMultipleBadge:o,styles:n})=>{let{egldValueData:r,tokenValueData:c,nftValueData:p}=qc({transaction:e,hideMultipleBadge:o});if(c)return _e.default.createElement("div",{className:n==null?void 0:n.transactionCell},_e.default.createElement(wl,{titleText:c.titleText},_e.default.createElement(Da.Token,u({},c))));if(p){let d=p.token.type==="MetaESDT"?null:p.badgeText;return _e.default.createElement("div",{className:n==null?void 0:n.transactionCell},_e.default.createElement(wl,{titleText:p.titleText},_e.default.createElement(Da.Nft,w(u({},p),{badgeText:d}))))}return r?_e.default.createElement("div",{className:n==null?void 0:n.transactionCell},_e.default.createElement(zo,{value:r.value,digits:2,"data-testid":"transactionValue"})):null},Al=A(ab,{ssrStyles:()=>Promise.resolve().then(()=>(At(),It)),clientStyles:()=>(At(),N(It)).default});t();var kl=f(require("react"));var ib=({children:e,styles:o})=>kl.default.createElement("div",{className:o==null?void 0:o.footer},e),Ze=A(ib,{ssrStyles:()=>Promise.resolve().then(()=>(bt(),yt)),clientStyles:()=>(bt(),N(yt)).default});var sb=e=>{var m;let{className:o,transaction:n}=e,{address:r}=Ne(),{network:{explorerAddress:c}}=Fo(),p=zc({transaction:n,address:r!=null?r:"",explorerAddress:c});return kt.default.createElement(Ze,null,kt.default.createElement("div",{className:(m=e.styles)==null?void 0:m.status},kt.default.createElement(Al,{transaction:p})),kt.default.createElement(Bn,{className:o,hash:p.txHash,status:p.status}))},Ll=A(sb,{ssrStyles:()=>Promise.resolve().then(()=>(Oe(),Me)),clientStyles:()=>(Oe(),N(Me)).default});t();var Gn=f(require("react")),Cl=f(require("classnames"));var cb=e=>{var c,p;let{className:o,message:n,status:r}=e;return Gn.default.createElement(Ze,null,r&&Gn.default.createElement("div",{className:(c=e.styles)==null?void 0:c.status},r),Gn.default.createElement("div",{className:(0,Cl.default)((p=e.styles)==null?void 0:p.container,o)},n))},Pl=A(cb,{ssrStyles:()=>Promise.resolve().then(()=>(Oe(),Me)),clientStyles:()=>(Oe(),N(Me)).default});t();var Ma=f(require("react"));var El=e=>{let o=Bd(e.toastId);return Ma.default.createElement(Ze,u({},e),o&&Ma.default.createElement(o,null))};var pb=e=>{let{transaction:o,message:n,component:r}=e;return o&&ll(o)?Lt.default.createElement(Ll,u({},e)):n?Lt.default.createElement(Pl,u({},e)):r!==void 0?Lt.default.createElement(El,u({},e)):Lt.default.createElement(Ze,null)};0&&(module.exports={IconToastFooter});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
