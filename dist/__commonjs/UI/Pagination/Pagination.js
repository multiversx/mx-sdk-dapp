"use strict";var Oo=Object.create;var K=Object.defineProperty,Go=Object.defineProperties,jo=Object.getOwnPropertyDescriptor,Wo=Object.getOwnPropertyDescriptors,zo=Object.getOwnPropertyNames,Ve=Object.getOwnPropertySymbols,qo=Object.getPrototypeOf,Ye=Object.prototype.hasOwnProperty,Ho=Object.prototype.propertyIsEnumerable;var Xe=(o,e,n)=>e in o?K(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,R=(o,e)=>{for(var n in e||(e={}))Ye.call(e,n)&&Xe(o,n,e[n]);if(Ve)for(var n of Ve(e))Ho.call(e,n)&&Xe(o,n,e[n]);return o},Ke=(o,e)=>Go(o,Wo(e));var ee=(o,e)=>()=>(o&&(e=o(o=0)),e);var h=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),ne=(o,e)=>{for(var n in e)K(o,n,{get:e[n],enumerable:!0})},$e=(o,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of zo(e))!Ye.call(o,t)&&t!==n&&K(o,t,{get:()=>e[t],enumerable:!(a=jo(e,t))||a.enumerable});return o};var A=(o,e,n)=>(n=o!=null?Oo(qo(o)):{},$e(e||!o||!o.__esModule?K(n,"default",{value:o,enumerable:!0}):n,o)),oe=o=>$e(K({},"__esModule",{value:!0}),o);var ge=(o,e,n)=>new Promise((a,t)=>{var r=g=>{try{m(n.next(g))}catch(c){t(c)}},p=g=>{try{m(n.throw(g))}catch(c){t(c)}},m=g=>g.done?a(g.value):Promise.resolve(g.value).then(r,p);m((n=n.apply(o,e)).next())});var Qe=h(ae=>{"use strict";_();ae.byteLength=Xo;ae.toByteArray=Ko;ae.fromByteArray=Zo;var N=[],I=[],Vo=typeof Uint8Array!="undefined"?Uint8Array:Array,ue="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(O=0,Je=ue.length;O<Je;++O)N[O]=ue[O],I[ue.charCodeAt(O)]=O;var O,Je;I["-".charCodeAt(0)]=62;I["_".charCodeAt(0)]=63;function Ze(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=o.indexOf("=");n===-1&&(n=e);var a=n===e?0:4-n%4;return[n,a]}function Xo(o){var e=Ze(o),n=e[0],a=e[1];return(n+a)*3/4-a}function Yo(o,e,n){return(e+n)*3/4-n}function Ko(o){var e,n=Ze(o),a=n[0],t=n[1],r=new Vo(Yo(o,a,t)),p=0,m=t>0?a-4:a,g;for(g=0;g<m;g+=4)e=I[o.charCodeAt(g)]<<18|I[o.charCodeAt(g+1)]<<12|I[o.charCodeAt(g+2)]<<6|I[o.charCodeAt(g+3)],r[p++]=e>>16&255,r[p++]=e>>8&255,r[p++]=e&255;return t===2&&(e=I[o.charCodeAt(g)]<<2|I[o.charCodeAt(g+1)]>>4,r[p++]=e&255),t===1&&(e=I[o.charCodeAt(g)]<<10|I[o.charCodeAt(g+1)]<<4|I[o.charCodeAt(g+2)]>>2,r[p++]=e>>8&255,r[p++]=e&255),r}function $o(o){return N[o>>18&63]+N[o>>12&63]+N[o>>6&63]+N[o&63]}function Jo(o,e,n){for(var a,t=[],r=e;r<n;r+=3)a=(o[r]<<16&16711680)+(o[r+1]<<8&65280)+(o[r+2]&255),t.push($o(a));return t.join("")}function Zo(o){for(var e,n=o.length,a=n%3,t=[],r=16383,p=0,m=n-a;p<m;p+=r)t.push(Jo(o,p,p+r>m?m:p+r));return a===1?(e=o[n-1],t.push(N[e>>2]+N[e<<4&63]+"==")):a===2&&(e=(o[n-2]<<8)+o[n-1],t.push(N[e>>10]+N[e>>4&63]+N[e<<2&63]+"=")),t.join("")}});var en=h(fe=>{_();fe.read=function(o,e,n,a,t){var r,p,m=t*8-a-1,g=(1<<m)-1,c=g>>1,u=-7,f=n?t-1:0,k=n?-1:1,y=o[e+f];for(f+=k,r=y&(1<<-u)-1,y>>=-u,u+=m;u>0;r=r*256+o[e+f],f+=k,u-=8);for(p=r&(1<<-u)-1,r>>=-u,u+=a;u>0;p=p*256+o[e+f],f+=k,u-=8);if(r===0)r=1-c;else{if(r===g)return p?NaN:(y?-1:1)*(1/0);p=p+Math.pow(2,a),r=r-c}return(y?-1:1)*p*Math.pow(2,r-a)};fe.write=function(o,e,n,a,t,r){var p,m,g,c=r*8-t-1,u=(1<<c)-1,f=u>>1,k=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=a?0:r-1,S=a?1:-1,Q=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(m=isNaN(e)?1:0,p=u):(p=Math.floor(Math.log(e)/Math.LN2),e*(g=Math.pow(2,-p))<1&&(p--,g*=2),p+f>=1?e+=k/g:e+=k*Math.pow(2,1-f),e*g>=2&&(p++,g/=2),p+f>=u?(m=0,p=u):p+f>=1?(m=(e*g-1)*Math.pow(2,t),p=p+f):(m=e*Math.pow(2,f-1)*Math.pow(2,t),p=0));t>=8;o[n+y]=m&255,y+=S,m/=256,t-=8);for(p=p<<t|m,c+=t;c>0;o[n+y]=p&255,y+=S,p/=256,c-=8);o[n+y-S]|=Q*128}});var gn=h(H=>{"use strict";_();var he=Qe(),q=en(),nn=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;H.Buffer=i;H.SlowBuffer=ta;H.INSPECT_MAX_BYTES=50;var te=2147483647;H.kMaxLength=te;i.TYPED_ARRAY_SUPPORT=Qo();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Qo(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(n){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function U(o){if(o>te)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,i.prototype),e}function i(o,e,n){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return we(o)}return tn(o,e,n)}i.poolSize=8192;function tn(o,e,n){if(typeof o=="string")return na(o,e);if(ArrayBuffer.isView(o))return oa(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(E(o,ArrayBuffer)||o&&E(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(E(o,SharedArrayBuffer)||o&&E(o.buffer,SharedArrayBuffer)))return xe(o,e,n);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var a=o.valueOf&&o.valueOf();if(a!=null&&a!==o)return i.from(a,e,n);var t=aa(o);if(t)return t;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return i.from(o[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}i.from=function(o,e,n){return tn(o,e,n)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function rn(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function ea(o,e,n){return rn(o),o<=0?U(o):e!==void 0?typeof n=="string"?U(o).fill(e,n):U(o).fill(e):U(o)}i.alloc=function(o,e,n){return ea(o,e,n)};function we(o){return rn(o),U(o<0?0:ve(o)|0)}i.allocUnsafe=function(o){return we(o)};i.allocUnsafeSlow=function(o){return we(o)};function na(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=pn(o,e)|0,a=U(n),t=a.write(o,e);return t!==n&&(a=a.slice(0,t)),a}function be(o){for(var e=o.length<0?0:ve(o.length)|0,n=U(e),a=0;a<e;a+=1)n[a]=o[a]&255;return n}function oa(o){if(E(o,Uint8Array)){var e=new Uint8Array(o);return xe(e.buffer,e.byteOffset,e.byteLength)}return be(o)}function xe(o,e,n){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var a;return e===void 0&&n===void 0?a=new Uint8Array(o):n===void 0?a=new Uint8Array(o,e):a=new Uint8Array(o,e,n),Object.setPrototypeOf(a,i.prototype),a}function aa(o){if(i.isBuffer(o)){var e=ve(o.length)|0,n=U(e);return n.length===0||o.copy(n,0,0,e),n}if(o.length!==void 0)return typeof o.length!="number"||ke(o.length)?U(0):be(o);if(o.type==="Buffer"&&Array.isArray(o.data))return be(o.data)}function ve(o){if(o>=te)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+te.toString(16)+" bytes");return o|0}function ta(o){return+o!=o&&(o=0),i.alloc(+o)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,n){if(E(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),E(n,Uint8Array)&&(n=i.from(n,n.offset,n.byteLength)),!i.isBuffer(e)||!i.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;for(var a=e.length,t=n.length,r=0,p=Math.min(a,t);r<p;++r)if(e[r]!==n[r]){a=e[r],t=n[r];break}return a<t?-1:t<a?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var a;if(n===void 0)for(n=0,a=0;a<e.length;++a)n+=e[a].length;var t=i.allocUnsafe(n),r=0;for(a=0;a<e.length;++a){var p=e[a];if(E(p,Uint8Array))r+p.length>t.length?i.from(p).copy(t,r):Uint8Array.prototype.set.call(t,p,r);else if(i.isBuffer(p))p.copy(t,r);else throw new TypeError('"list" argument must be an Array of Buffers');r+=p.length}return t};function pn(o,e){if(i.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||E(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var n=o.length,a=arguments.length>2&&arguments[2]===!0;if(!a&&n===0)return 0;for(var t=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ye(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return sn(o).length;default:if(t)return a?-1:ye(o).length;e=(""+e).toLowerCase(),t=!0}}i.byteLength=pn;function ra(o,e,n){var a=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return ua(this,e,n);case"utf8":case"utf-8":return cn(this,e,n);case"ascii":return sa(this,e,n);case"latin1":case"binary":return ga(this,e,n);case"base64":return da(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fa(this,e,n);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),a=!0}}i.prototype._isBuffer=!0;function G(o,e,n){var a=o[e];o[e]=o[n],o[n]=a}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<e;n+=2)G(this,n,n+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<e;n+=4)G(this,n,n+3),G(this,n+1,n+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<e;n+=8)G(this,n,n+7),G(this,n+1,n+6),G(this,n+2,n+5),G(this,n+3,n+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?cn(this,0,e):ra.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",n=H.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};nn&&(i.prototype[nn]=i.prototype.inspect);i.prototype.compare=function(e,n,a,t,r){if(E(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),a===void 0&&(a=e?e.length:0),t===void 0&&(t=0),r===void 0&&(r=this.length),n<0||a>e.length||t<0||r>this.length)throw new RangeError("out of range index");if(t>=r&&n>=a)return 0;if(t>=r)return-1;if(n>=a)return 1;if(n>>>=0,a>>>=0,t>>>=0,r>>>=0,this===e)return 0;for(var p=r-t,m=a-n,g=Math.min(p,m),c=this.slice(t,r),u=e.slice(n,a),f=0;f<g;++f)if(c[f]!==u[f]){p=c[f],m=u[f];break}return p<m?-1:m<p?1:0};function _n(o,e,n,a,t){if(o.length===0)return-1;if(typeof n=="string"?(a=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,ke(n)&&(n=t?0:o.length-1),n<0&&(n=o.length+n),n>=o.length){if(t)return-1;n=o.length-1}else if(n<0)if(t)n=0;else return-1;if(typeof e=="string"&&(e=i.from(e,a)),i.isBuffer(e))return e.length===0?-1:on(o,e,n,a,t);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?t?Uint8Array.prototype.indexOf.call(o,e,n):Uint8Array.prototype.lastIndexOf.call(o,e,n):on(o,[e],n,a,t);throw new TypeError("val must be string, number or Buffer")}function on(o,e,n,a,t){var r=1,p=o.length,m=e.length;if(a!==void 0&&(a=String(a).toLowerCase(),a==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(o.length<2||e.length<2)return-1;r=2,p/=2,m/=2,n/=2}function g(y,S){return r===1?y[S]:y.readUInt16BE(S*r)}var c;if(t){var u=-1;for(c=n;c<p;c++)if(g(o,c)===g(e,u===-1?0:c-u)){if(u===-1&&(u=c),c-u+1===m)return u*r}else u!==-1&&(c-=c-u),u=-1}else for(n+m>p&&(n=p-m),c=n;c>=0;c--){for(var f=!0,k=0;k<m;k++)if(g(o,c+k)!==g(e,k)){f=!1;break}if(f)return c}return-1}i.prototype.includes=function(e,n,a){return this.indexOf(e,n,a)!==-1};i.prototype.indexOf=function(e,n,a){return _n(this,e,n,a,!0)};i.prototype.lastIndexOf=function(e,n,a){return _n(this,e,n,a,!1)};function pa(o,e,n,a){n=Number(n)||0;var t=o.length-n;a?(a=Number(a),a>t&&(a=t)):a=t;var r=e.length;a>r/2&&(a=r/2);for(var p=0;p<a;++p){var m=parseInt(e.substr(p*2,2),16);if(ke(m))return p;o[n+p]=m}return p}function _a(o,e,n,a){return re(ye(e,o.length-n),o,n,a)}function ia(o,e,n,a){return re(xa(e),o,n,a)}function ca(o,e,n,a){return re(sn(e),o,n,a)}function ma(o,e,n,a){return re(ya(e,o.length-n),o,n,a)}i.prototype.write=function(e,n,a,t){if(n===void 0)t="utf8",a=this.length,n=0;else if(a===void 0&&typeof n=="string")t=n,a=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(a)?(a=a>>>0,t===void 0&&(t="utf8")):(t=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var r=this.length-n;if((a===void 0||a>r)&&(a=r),e.length>0&&(a<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var p=!1;;)switch(t){case"hex":return pa(this,e,n,a);case"utf8":case"utf-8":return _a(this,e,n,a);case"ascii":case"latin1":case"binary":return ia(this,e,n,a);case"base64":return ca(this,e,n,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ma(this,e,n,a);default:if(p)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),p=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function da(o,e,n){return e===0&&n===o.length?he.fromByteArray(o):he.fromByteArray(o.slice(e,n))}function cn(o,e,n){n=Math.min(o.length,n);for(var a=[],t=e;t<n;){var r=o[t],p=null,m=r>239?4:r>223?3:r>191?2:1;if(t+m<=n){var g,c,u,f;switch(m){case 1:r<128&&(p=r);break;case 2:g=o[t+1],(g&192)===128&&(f=(r&31)<<6|g&63,f>127&&(p=f));break;case 3:g=o[t+1],c=o[t+2],(g&192)===128&&(c&192)===128&&(f=(r&15)<<12|(g&63)<<6|c&63,f>2047&&(f<55296||f>57343)&&(p=f));break;case 4:g=o[t+1],c=o[t+2],u=o[t+3],(g&192)===128&&(c&192)===128&&(u&192)===128&&(f=(r&15)<<18|(g&63)<<12|(c&63)<<6|u&63,f>65535&&f<1114112&&(p=f))}}p===null?(p=65533,m=1):p>65535&&(p-=65536,a.push(p>>>10&1023|55296),p=56320|p&1023),a.push(p),t+=m}return la(a)}var an=4096;function la(o){var e=o.length;if(e<=an)return String.fromCharCode.apply(String,o);for(var n="",a=0;a<e;)n+=String.fromCharCode.apply(String,o.slice(a,a+=an));return n}function sa(o,e,n){var a="";n=Math.min(o.length,n);for(var t=e;t<n;++t)a+=String.fromCharCode(o[t]&127);return a}function ga(o,e,n){var a="";n=Math.min(o.length,n);for(var t=e;t<n;++t)a+=String.fromCharCode(o[t]);return a}function ua(o,e,n){var a=o.length;(!e||e<0)&&(e=0),(!n||n<0||n>a)&&(n=a);for(var t="",r=e;r<n;++r)t+=wa[o[r]];return t}function fa(o,e,n){for(var a=o.slice(e,n),t="",r=0;r<a.length-1;r+=2)t+=String.fromCharCode(a[r]+a[r+1]*256);return t}i.prototype.slice=function(e,n){var a=this.length;e=~~e,n=n===void 0?a:~~n,e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a),n<0?(n+=a,n<0&&(n=0)):n>a&&(n=a),n<e&&(n=e);var t=this.subarray(e,n);return Object.setPrototypeOf(t,i.prototype),t};function w(o,e,n){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>n)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,n,a){e=e>>>0,n=n>>>0,a||w(e,n,this.length);for(var t=this[e],r=1,p=0;++p<n&&(r*=256);)t+=this[e+p]*r;return t};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,n,a){e=e>>>0,n=n>>>0,a||w(e,n,this.length);for(var t=this[e+--n],r=1;n>0&&(r*=256);)t+=this[e+--n]*r;return t};i.prototype.readUint8=i.prototype.readUInt8=function(e,n){return e=e>>>0,n||w(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||w(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||w(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||w(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||w(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,n,a){e=e>>>0,n=n>>>0,a||w(e,n,this.length);for(var t=this[e],r=1,p=0;++p<n&&(r*=256);)t+=this[e+p]*r;return r*=128,t>=r&&(t-=Math.pow(2,8*n)),t};i.prototype.readIntBE=function(e,n,a){e=e>>>0,n=n>>>0,a||w(e,n,this.length);for(var t=n,r=1,p=this[e+--t];t>0&&(r*=256);)p+=this[e+--t]*r;return r*=128,p>=r&&(p-=Math.pow(2,8*n)),p};i.prototype.readInt8=function(e,n){return e=e>>>0,n||w(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,n){e=e>>>0,n||w(e,2,this.length);var a=this[e]|this[e+1]<<8;return a&32768?a|4294901760:a};i.prototype.readInt16BE=function(e,n){e=e>>>0,n||w(e,2,this.length);var a=this[e+1]|this[e]<<8;return a&32768?a|4294901760:a};i.prototype.readInt32LE=function(e,n){return e=e>>>0,n||w(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,n){return e=e>>>0,n||w(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,n){return e=e>>>0,n||w(e,4,this.length),q.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,n){return e=e>>>0,n||w(e,4,this.length),q.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||w(e,8,this.length),q.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||w(e,8,this.length),q.read(this,e,!1,52,8)};function T(o,e,n,a,t,r){if(!i.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>t||e<r)throw new RangeError('"value" argument is out of bounds');if(n+a>o.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,n,a,t){if(e=+e,n=n>>>0,a=a>>>0,!t){var r=Math.pow(2,8*a)-1;T(this,e,n,a,r,0)}var p=1,m=0;for(this[n]=e&255;++m<a&&(p*=256);)this[n+m]=e/p&255;return n+a};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,n,a,t){if(e=+e,n=n>>>0,a=a>>>0,!t){var r=Math.pow(2,8*a)-1;T(this,e,n,a,r,0)}var p=a-1,m=1;for(this[n+p]=e&255;--p>=0&&(m*=256);)this[n+p]=e/m&255;return n+a};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,1,255,0),this[n]=e&255,n+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};i.prototype.writeIntLE=function(e,n,a,t){if(e=+e,n=n>>>0,!t){var r=Math.pow(2,8*a-1);T(this,e,n,a,r-1,-r)}var p=0,m=1,g=0;for(this[n]=e&255;++p<a&&(m*=256);)e<0&&g===0&&this[n+p-1]!==0&&(g=1),this[n+p]=(e/m>>0)-g&255;return n+a};i.prototype.writeIntBE=function(e,n,a,t){if(e=+e,n=n>>>0,!t){var r=Math.pow(2,8*a-1);T(this,e,n,a,r-1,-r)}var p=a-1,m=1,g=0;for(this[n+p]=e&255;--p>=0&&(m*=256);)e<0&&g===0&&this[n+p+1]!==0&&(g=1),this[n+p]=(e/m>>0)-g&255;return n+a};i.prototype.writeInt8=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};i.prototype.writeInt16LE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};i.prototype.writeInt16BE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};i.prototype.writeInt32LE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};i.prototype.writeInt32BE=function(e,n,a){return e=+e,n=n>>>0,a||T(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function mn(o,e,n,a,t,r){if(n+a>o.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function dn(o,e,n,a,t){return e=+e,n=n>>>0,t||mn(o,e,n,4,34028234663852886e22,-34028234663852886e22),q.write(o,e,n,a,23,4),n+4}i.prototype.writeFloatLE=function(e,n,a){return dn(this,e,n,!0,a)};i.prototype.writeFloatBE=function(e,n,a){return dn(this,e,n,!1,a)};function ln(o,e,n,a,t){return e=+e,n=n>>>0,t||mn(o,e,n,8,17976931348623157e292,-17976931348623157e292),q.write(o,e,n,a,52,8),n+8}i.prototype.writeDoubleLE=function(e,n,a){return ln(this,e,n,!0,a)};i.prototype.writeDoubleBE=function(e,n,a){return ln(this,e,n,!1,a)};i.prototype.copy=function(e,n,a,t){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(a||(a=0),!t&&t!==0&&(t=this.length),n>=e.length&&(n=e.length),n||(n=0),t>0&&t<a&&(t=a),t===a||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),e.length-n<t-a&&(t=e.length-n+a);var r=t-a;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,a,t):Uint8Array.prototype.set.call(e,this.subarray(a,t),n),r};i.prototype.fill=function(e,n,a,t){if(typeof e=="string"){if(typeof n=="string"?(t=n,n=0,a=this.length):typeof a=="string"&&(t=a,a=this.length),t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!i.isEncoding(t))throw new TypeError("Unknown encoding: "+t);if(e.length===1){var r=e.charCodeAt(0);(t==="utf8"&&r<128||t==="latin1")&&(e=r)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<a)throw new RangeError("Out of range index");if(a<=n)return this;n=n>>>0,a=a===void 0?this.length:a>>>0,e||(e=0);var p;if(typeof e=="number")for(p=n;p<a;++p)this[p]=e;else{var m=i.isBuffer(e)?e:i.from(e,t),g=m.length;if(g===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<a-n;++p)this[p+n]=m[p%g]}return this};var ha=/[^+/0-9A-Za-z-_]/g;function ba(o){if(o=o.split("=")[0],o=o.trim().replace(ha,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function ye(o,e){e=e||1/0;for(var n,a=o.length,t=null,r=[],p=0;p<a;++p){if(n=o.charCodeAt(p),n>55295&&n<57344){if(!t){if(n>56319){(e-=3)>-1&&r.push(239,191,189);continue}else if(p+1===a){(e-=3)>-1&&r.push(239,191,189);continue}t=n;continue}if(n<56320){(e-=3)>-1&&r.push(239,191,189),t=n;continue}n=(t-55296<<10|n-56320)+65536}else t&&(e-=3)>-1&&r.push(239,191,189);if(t=null,n<128){if((e-=1)<0)break;r.push(n)}else if(n<2048){if((e-=2)<0)break;r.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;r.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return r}function xa(o){for(var e=[],n=0;n<o.length;++n)e.push(o.charCodeAt(n)&255);return e}function ya(o,e){for(var n,a,t,r=[],p=0;p<o.length&&!((e-=2)<0);++p)n=o.charCodeAt(p),a=n>>8,t=n%256,r.push(t),r.push(a);return r}function sn(o){return he.toByteArray(ba(o))}function re(o,e,n,a){for(var t=0;t<a&&!(t+n>=e.length||t>=o.length);++t)e[t+n]=o[t];return t}function E(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function ke(o){return o!==o}var wa=function(){for(var o="0123456789abcdef",e=new Array(256),n=0;n<16;++n)for(var a=n*16,t=0;t<16;++t)e[a+t]=o[n]+o[t];return e}()});var xn=h((tr,bn)=>{_();var x=bn.exports={},L,B;function Se(){throw new Error("setTimeout has not been defined")}function Te(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?L=setTimeout:L=Se}catch(o){L=Se}try{typeof clearTimeout=="function"?B=clearTimeout:B=Te}catch(o){B=Te}})();function un(o){if(L===setTimeout)return setTimeout(o,0);if((L===Se||!L)&&setTimeout)return L=setTimeout,setTimeout(o,0);try{return L(o,0)}catch(e){try{return L.call(null,o,0)}catch(n){return L.call(this,o,0)}}}function va(o){if(B===clearTimeout)return clearTimeout(o);if((B===Te||!B)&&clearTimeout)return B=clearTimeout,clearTimeout(o);try{return B(o)}catch(e){try{return B.call(null,o)}catch(n){return B.call(this,o)}}}var P=[],V=!1,j,pe=-1;function ka(){!V||!j||(V=!1,j.length?P=j.concat(P):pe=-1,P.length&&fn())}function fn(){if(!V){var o=un(ka);V=!0;for(var e=P.length;e;){for(j=P,P=[];++pe<e;)j&&j[pe].run();pe=-1,e=P.length}j=null,V=!1,va(o)}}x.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];P.push(new hn(o,e)),P.length===1&&!V&&un(fn)};function hn(o,e){this.fun=o,this.array=e}hn.prototype.run=function(){this.fun.apply(null,this.array)};x.title="browser";x.browser=!0;x.env={};x.argv=[];x.version="";x.versions={};function M(){}x.on=M;x.addListener=M;x.once=M;x.off=M;x.removeListener=M;x.removeAllListeners=M;x.emit=M;x.prependListener=M;x.prependOnceListener=M;x.listeners=function(o){return[]};x.binding=function(o){throw new Error("process.binding is not supported")};x.cwd=function(){return"/"};x.chdir=function(o){throw new Error("process.chdir is not supported")};x.umask=function(){return 0}});var l,s,Sa,d,_=ee(()=>{l=A(gn()),s=A(xn()),Sa=function(o){function e(){var a=this||self;return delete o.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var n=__magic__;return n}(Object),d=Sa});var Ne={};ne(Ne,{css:()=>Nn,default:()=>Aa});var Nn,Aa,Ee=ee(()=>{"use strict";_();Nn=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nn));Aa={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Be={};ne(Be,{css:()=>Cn,default:()=>Na});var Cn,Na,Ce=ee(()=>{"use strict";_();Cn=`.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cn));Na={"pagination-edge-button":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",inactive:"dapp-core-component__paginationEdgeButtonStyles__inactive","pagination-edge-button-icon":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon",paginationEdgeButtonIcon:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon","pagination-edge-button-text":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",paginationEdgeButtonText:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",show:"dapp-core-component__paginationEdgeButtonStyles__show"}});var Pn=h((wp,Un)=>{_();var La=Math.max,Ba=Math.min;function Ca(o,e,n){return o>=Ba(e,n)&&o<La(e,n)}Un.exports=Ca});var Dn=h((vp,Mn)=>{_();var Fa=/\s/;function Ua(o){for(var e=o.length;e--&&Fa.test(o.charAt(e)););return e}Mn.exports=Ua});var Gn=h((kp,On)=>{_();var Pa=Dn(),Ma=/^\s+/;function Da(o){return o&&o.slice(0,Pa(o)+1).replace(Ma,"")}On.exports=Da});var me=h((Sp,jn)=>{_();function Oa(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")}jn.exports=Oa});var zn=h((Tp,Wn)=>{_();var Ga=typeof d=="object"&&d&&d.Object===Object&&d;Wn.exports=Ga});var Hn=h((Ap,qn)=>{_();var ja=zn(),Wa=typeof self=="object"&&self&&self.Object===Object&&self,za=ja||Wa||Function("return this")();qn.exports=za});var Pe=h((Ip,Vn)=>{_();var qa=Hn(),Ha=qa.Symbol;Vn.exports=Ha});var $n=h((Rp,Kn)=>{_();var Xn=Pe(),Yn=Object.prototype,Va=Yn.hasOwnProperty,Xa=Yn.toString,Z=Xn?Xn.toStringTag:void 0;function Ya(o){var e=Va.call(o,Z),n=o[Z];try{o[Z]=void 0;var a=!0}catch(r){}var t=Xa.call(o);return a&&(e?o[Z]=n:delete o[Z]),t}Kn.exports=Ya});var Zn=h((Np,Jn)=>{_();var Ka=Object.prototype,$a=Ka.toString;function Ja(o){return $a.call(o)}Jn.exports=Ja});var Me=h((Ep,no)=>{_();var Qn=Pe(),Za=$n(),Qa=Zn(),et="[object Null]",nt="[object Undefined]",eo=Qn?Qn.toStringTag:void 0;function ot(o){return o==null?o===void 0?nt:et:eo&&eo in Object(o)?Za(o):Qa(o)}no.exports=ot});var ao=h((Lp,oo)=>{_();function at(o){return o!=null&&typeof o=="object"}oo.exports=at});var ro=h((Bp,to)=>{_();var tt=Me(),rt=ao(),pt="[object Symbol]";function _t(o){return typeof o=="symbol"||rt(o)&&tt(o)==pt}to.exports=_t});var De=h((Cp,io)=>{_();var it=Gn(),po=me(),ct=ro(),_o=0/0,mt=/^[-+]0x[0-9a-f]+$/i,dt=/^0b[01]+$/i,lt=/^0o[0-7]+$/i,st=parseInt;function gt(o){if(typeof o=="number")return o;if(ct(o))return _o;if(po(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=po(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=it(o);var n=dt.test(o);return n||lt.test(o)?st(o.slice(2),n?2:8):mt.test(o)?_o:+o}io.exports=gt});var Oe=h((Fp,mo)=>{_();var ut=De(),co=1/0,ft=17976931348623157e292;function ht(o){if(!o)return o===0?o:0;if(o=ut(o),o===co||o===-co){var e=o<0?-1:1;return e*ft}return o===o?o:0}mo.exports=ht});var go=h((Up,so)=>{_();var bt=Pn(),lo=Oe(),xt=De();function yt(o,e,n){return e=lo(e),n===void 0?(n=e,e=0):n=lo(n),o=xt(o),bt(o,e,n)}so.exports=yt});var fo=h((Pp,uo)=>{_();var wt=Math.ceil,vt=Math.max;function kt(o,e,n,a){for(var t=-1,r=vt(wt((e-o)/(n||1)),0),p=Array(r);r--;)p[a?r:++t]=o,o+=n;return p}uo.exports=kt});var bo=h((Mp,ho)=>{_();function St(o,e){return o===e||o!==o&&e!==e}ho.exports=St});var yo=h((Dp,xo)=>{_();var Tt=Me(),At=me(),It="[object AsyncFunction]",Rt="[object Function]",Nt="[object GeneratorFunction]",Et="[object Proxy]";function Lt(o){if(!At(o))return!1;var e=Tt(o);return e==Rt||e==Nt||e==It||e==Et}xo.exports=Lt});var vo=h((Op,wo)=>{_();var Bt=9007199254740991;function Ct(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=Bt}wo.exports=Ct});var So=h((Gp,ko)=>{_();var Ft=yo(),Ut=vo();function Pt(o){return o!=null&&Ut(o.length)&&!Ft(o)}ko.exports=Pt});var Ao=h((jp,To)=>{_();var Mt=9007199254740991,Dt=/^(?:0|[1-9]\d*)$/;function Ot(o,e){var n=typeof o;return e=e==null?Mt:e,!!e&&(n=="number"||n!="symbol"&&Dt.test(o))&&o>-1&&o%1==0&&o<e}To.exports=Ot});var Ro=h((Wp,Io)=>{_();var Gt=bo(),jt=So(),Wt=Ao(),zt=me();function qt(o,e,n){if(!zt(n))return!1;var a=typeof e;return(a=="number"?jt(n)&&Wt(e,n.length):a=="string"&&e in n)?Gt(n[e],o):!1}Io.exports=qt});var Eo=h((zp,No)=>{_();var Ht=fo(),Vt=Ro(),Ge=Oe();function Xt(o){return function(e,n,a){return a&&typeof a!="number"&&Vt(e,n,a)&&(n=a=void 0),e=Ge(e),n===void 0?(n=e,e=0):n=Ge(n),a=a===void 0?e<n?1:-1:Ge(a),Ht(e,n,a,o)}}No.exports=Xt});var Bo=h((qp,Lo)=>{_();var Yt=Eo(),Kt=Yt();Lo.exports=Kt});var ze={};ne(ze,{css:()=>Po,default:()=>$t});var Po,$t,qe=ee(()=>{"use strict";_();Po=`.dapp-core-component__paginationStyles__pagination {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Po));$t={pagination:"dapp-core-component__paginationStyles__pagination","pagination-angle":"dapp-core-component__paginationStyles__pagination-angle",paginationAngle:"dapp-core-component__paginationStyles__pagination-angle",disabled:"dapp-core-component__paginationStyles__disabled","pagination-angle-icon":"dapp-core-component__paginationStyles__pagination-angle-icon",paginationAngleIcon:"dapp-core-component__paginationStyles__pagination-angle-icon","pagination-edge-button":"dapp-core-component__paginationStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationStyles__pagination-edge-button",reversed:"dapp-core-component__paginationStyles__reversed","pagination-items":"dapp-core-component__paginationStyles__pagination-items",paginationItems:"dapp-core-component__paginationStyles__pagination-items","pagination-item-wrapper":"dapp-core-component__paginationStyles__pagination-item-wrapper",paginationItemWrapper:"dapp-core-component__paginationStyles__pagination-item-wrapper","pagination-item":"dapp-core-component__paginationStyles__pagination-item",paginationItem:"dapp-core-component__paginationStyles__pagination-item",hundreds:"dapp-core-component__paginationStyles__hundreds",active:"dapp-core-component__paginationStyles__active",ellipsis:"dapp-core-component__paginationStyles__ellipsis","pagination-item-text":"dapp-core-component__paginationStyles__pagination-item-text",paginationItemText:"dapp-core-component__paginationStyles__pagination-item-text"}});var Qt={};ne(Qt,{Pagination:()=>Zt});module.exports=oe(Qt);_();var v=A(require("react")),D=require("@fortawesome/free-solid-svg-icons"),He=require("@fortawesome/react-fontawesome"),de=A(require("bignumber.js")),W=A(require("classnames"));_();_();_();_();_();_();_();_();_();_();_();_();_();_();_();var Ta=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),X=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums");var yn=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(yn||{}),fr=R(R({},X.WindowProviderRequestEnums),yn),wn=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(wn||{}),hr=R(R({},X.WindowProviderResponseEnums),wn);_();_();_();_();_();_();var Ae={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:vn,egldLabel:Fr}=Ae["devnet"],{chainId:kn,egldLabel:Ur}=Ae["testnet"],{chainId:Sn,egldLabel:Pr}=Ae["mainnet"];var Mr={["devnet"]:vn,["testnet"]:kn,["mainnet"]:Sn},Dr={[vn]:"devnet",[kn]:"testnet",[Sn]:"mainnet"};_();_();var C=require("@multiversx/sdk-web-wallet-provider");_();_();var Ie=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants");var Tn,An,Re=String((An=(Tn=Ie.safeWindow)==null?void 0:Tn.navigator)==null?void 0:An.userAgent),qr=/^((?!chrome|android).)*safari/i.test(Re),Hr=/firefox/i.test(Re)&&/windows/i.test(Re);var _e="...";_();var Ln=A(require("react"));_();var $=A(require("react"));_();_();var In=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined";var Rn=()=>!In();var Ia=()=>ge(void 0,null,function*(){return yield Promise.resolve().then(()=>(Ee(),Ne))}),Ra=()=>(Ee(),oe(Ne)).default,Le=Rn();function En({ssrGlobalImportCallback:o,ssrImportCallback:e,clientImportCallback:n}){let[a,t]=$.default.useState(Le?void 0:Ra()),[r,p]=$.default.useState(Le||n==null?void 0:n()),m=()=>ge(this,null,function*(){(o?o():Ia()).then(g=>t(g.default)),e==null||e().then(g=>p(g.default))});return(0,$.useEffect)(()=>{Le&&m()},[]),{globalStyles:a,styles:r}}function ie(o,e){return n=>{let{globalStyles:a,styles:t}=En({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return Ln.default.createElement(o,Ke(R({},n),{globalStyles:a!=null?a:{},styles:t!=null?t:{}}))}}_();var Bn=A(require("bignumber.js")),J=(o,e=!0)=>{let n=String(o);if(!n.match(/^[-]?\d+$/))return!1;let a=new Bn.default(n),t=e?0:-1;return a.toString(10)===n&&a.comparedTo(0)>=t};_();_();_();var ce=A(require("react")),Fn=require("@fortawesome/react-fontawesome"),Fe=A(require("classnames"));var Ea=({label:o,onClick:e,showLabels:n,isInactive:a,paginationButtonIcon:t,className:r,"data-testid":p,styles:m})=>ce.default.createElement("div",{onClick:e,"data-testid":p,className:(0,Fe.default)(m==null?void 0:m.paginationEdgeButton,r,{[m==null?void 0:m.inactive]:a})},ce.default.createElement(Fn.FontAwesomeIcon,{icon:t,className:m==null?void 0:m.paginationEdgeButtonIcon}),ce.default.createElement("span",{className:(0,Fe.default)(m==null?void 0:m.paginationEdgeButtonText,{[m==null?void 0:m.show]:n})},o)),Ue=ie(Ea,{ssrStyles:()=>Promise.resolve().then(()=>(Ce(),Be)),clientStyles:()=>(Ce(),oe(Be)).default});_();_();_();var We=A(go()),Y=A(Bo());_();var Uo=({currentPage:o,totalPages:e})=>{let n=o-1,a=o+1;if(e<=7)return(0,Y.default)(1,e+1).map(F=>String(F));let t=(F,z)=>F.includes(o)?F:F.slice(0,7-z.length-1),r=(0,We.default)(a-1,3,5),p=(0,We.default)(n+1,e-3,e-1),m=r?(0,Y.default)(1,a+1):(0,Y.default)(1,5-1),g=p?(0,Y.default)(n,e+1):(0,Y.default)(e-3+1,e+1),c=t(m,g),u=t(g.reverse(),m),f=c.concat(u),k=[_e,n,o,a,_e],[y]=c,[S]=u;return(f.includes(o)?[...c,_e,...u.reverse()]:[y,...k,S]).map(F=>String(F))};var Jt=({currentPage:o=1,totalPages:e,className:n,disabledClassName:a,buttonsClassNames:t,onPageChange:r,isDisabled:p,showLabels:m,showEdgeButtons:g=!0,styles:c})=>{let[u,f]=(0,v.useState)(o),k=u===1,y=u===e,S=a?{[a]:p}:{},Q=Uo({currentPage:u,totalPages:e}),le=b=>{b!==u&&(f(b),r(b))},F=b=>{J(b)&&le(new de.default(b).toNumber())},z=b=>se=>{se.preventDefault(),le(b)},Mo=b=>J(b)&&new de.default(b).isGreaterThanOrEqualTo(100),Do=b=>new de.default(b).isEqualTo(u);return(0,v.useEffect)(()=>{o!==u&&f(o)},[o,u]),e===1?null:v.default.createElement("div",{className:(0,W.default)(c==null?void 0:c.pagination,n)},g&&v.default.createElement("span",{onClick:z(1),className:(0,W.default)(c==null?void 0:c.paginationAngle,t,R({[c==null?void 0:c.disabled]:k},S))},v.default.createElement(He.FontAwesomeIcon,{className:c==null?void 0:c.paginationAngleIcon,icon:D.faAnglesLeft})),v.default.createElement(Ue,{label:"Prev",onClick:z(u-1),"data-testid":"prevBtn",paginationButtonIcon:D.faAngleLeft,isInactive:k,showLabels:m,className:(0,W.default)(c==null?void 0:c.paginationEdgeButton,t,{[c==null?void 0:c.disabled]:p},S)}),v.default.createElement("div",{className:c==null?void 0:c.paginationItems},Q.map((b,se)=>v.default.createElement("div",{key:`page-item-${se}`,className:c==null?void 0:c.paginationItemWrapper},J(b)?v.default.createElement("div",{onClick:()=>F(b),className:(0,W.default)(c==null?void 0:c.paginationItem,t,{[c==null?void 0:c.active]:Do(b)},{[c==null?void 0:c.ellipsis]:!J(b)},{[c==null?void 0:c.disabled]:p},{[c==null?void 0:c.hundreds]:Mo(b)},S)},v.default.createElement("span",{className:c==null?void 0:c.paginationItemText},b)):v.default.createElement("span",{className:c==null?void 0:c.paginationItemText},b)))),v.default.createElement(Ue,{label:"Next",onClick:z(u+1),"data-testid":"nextBtn",paginationButtonIcon:D.faAngleRight,isInactive:y,showLabels:m,className:(0,W.default)(c==null?void 0:c.paginationEdgeButton,c==null?void 0:c.reversed,t,{[c==null?void 0:c.disabled]:p},S)}),g&&v.default.createElement("span",{onClick:z(e),className:(0,W.default)(c==null?void 0:c.paginationAngle,t,R({[c==null?void 0:c.disabled]:y},S))},v.default.createElement(He.FontAwesomeIcon,{className:c==null?void 0:c.paginationAngleIcon,icon:D.faAnglesRight})))},Zt=ie(Jt,{ssrStyles:()=>Promise.resolve().then(()=>(qe(),ze)),clientStyles:()=>(qe(),oe(ze)).default});0&&(module.exports={Pagination});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=Pagination.js.map
