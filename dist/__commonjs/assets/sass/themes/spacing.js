"use strict";var Un=Object.create;var k=Object.defineProperty;var Tn=Object.getOwnPropertyDescriptor;var In=Object.getOwnPropertyNames;var Nn=Object.getPrototypeOf,Cn=Object.prototype.hasOwnProperty;var Ln=(r,n)=>()=>(r&&(n=r(r=0)),n);var D=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports),Sn=(r,n)=>{for(var p in n)k(r,p,{get:n[p],enumerable:!0})},nn=(r,n,p,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of In(n))!Cn.call(r,e)&&e!==p&&k(r,e,{get:()=>n[e],enumerable:!(o=Tn(n,e))||o.enumerable});return r};var pn=(r,n,p)=>(p=r!=null?Un(Nn(r)):{},nn(n||!r||!r.__esModule?k(p,"default",{value:r,enumerable:!0}):p,r)),Rn=r=>nn(k({},"__esModule",{value:!0}),r);var en=D(W=>{"use strict";y();W.byteLength=kn;W.toByteArray=Wn;W.fromByteArray=qn;var w=[],f=[],Mn=typeof Uint8Array!="undefined"?Uint8Array:Array,z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(U=0,rn=z.length;U<rn;++U)w[U]=z[U],f[z.charCodeAt(U)]=U;var U,rn;f["-".charCodeAt(0)]=62;f["_".charCodeAt(0)]=63;function on(r){var n=r.length;if(n%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var p=r.indexOf("=");p===-1&&(p=n);var o=p===n?0:4-p%4;return[p,o]}function kn(r){var n=on(r),p=n[0],o=n[1];return(p+o)*3/4-o}function Dn(r,n,p){return(n+p)*3/4-p}function Wn(r){var n,p=on(r),o=p[0],e=p[1],t=new Mn(Dn(r,o,e)),_=0,a=e>0?o-4:o,i;for(i=0;i<a;i+=4)n=f[r.charCodeAt(i)]<<18|f[r.charCodeAt(i+1)]<<12|f[r.charCodeAt(i+2)]<<6|f[r.charCodeAt(i+3)],t[_++]=n>>16&255,t[_++]=n>>8&255,t[_++]=n&255;return e===2&&(n=f[r.charCodeAt(i)]<<2|f[r.charCodeAt(i+1)]>>4,t[_++]=n&255),e===1&&(n=f[r.charCodeAt(i)]<<10|f[r.charCodeAt(i+1)]<<4|f[r.charCodeAt(i+2)]>>2,t[_++]=n>>8&255,t[_++]=n&255),t}function Xn(r){return w[r>>18&63]+w[r>>12&63]+w[r>>6&63]+w[r&63]}function Yn(r,n,p){for(var o,e=[],t=n;t<p;t+=3)o=(r[t]<<16&16711680)+(r[t+1]<<8&65280)+(r[t+2]&255),e.push(Xn(o));return e.join("")}function qn(r){for(var n,p=r.length,o=p%3,e=[],t=16383,_=0,a=p-o;_<a;_+=t)e.push(Yn(r,_,_+t>a?a:_+t));return o===1?(n=r[p-1],e.push(w[n>>2]+w[n<<4&63]+"==")):o===2&&(n=(r[p-2]<<8)+r[p-1],e.push(w[n>>10]+w[n>>4&63]+w[n<<2&63]+"=")),e.join("")}});var tn=D(G=>{y();G.read=function(r,n,p,o,e){var t,_,a=e*8-o-1,i=(1<<a)-1,g=i>>1,s=-7,m=p?e-1:0,x=p?-1:1,l=r[n+m];for(m+=x,t=l&(1<<-s)-1,l>>=-s,s+=a;s>0;t=t*256+r[n+m],m+=x,s-=8);for(_=t&(1<<-s)-1,t>>=-s,s+=o;s>0;_=_*256+r[n+m],m+=x,s-=8);if(t===0)t=1-g;else{if(t===i)return _?NaN:(l?-1:1)*(1/0);_=_+Math.pow(2,o),t=t-g}return(l?-1:1)*_*Math.pow(2,t-o)};G.write=function(r,n,p,o,e,t){var _,a,i,g=t*8-e-1,s=(1<<g)-1,m=s>>1,x=e===23?Math.pow(2,-24)-Math.pow(2,-77):0,l=o?0:t-1,N=o?1:-1,vn=n<0||n===0&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(a=isNaN(n)?1:0,_=s):(_=Math.floor(Math.log(n)/Math.LN2),n*(i=Math.pow(2,-_))<1&&(_--,i*=2),_+m>=1?n+=x/i:n+=x*Math.pow(2,1-m),n*i>=2&&(_++,i/=2),_+m>=s?(a=0,_=s):_+m>=1?(a=(n*i-1)*Math.pow(2,e),_=_+m):(a=n*Math.pow(2,m-1)*Math.pow(2,e),_=0));e>=8;r[p+l]=a&255,l+=N,a/=256,e-=8);for(_=_<<e|a,g+=e;g>0;r[p+l]=_&255,l+=N,_/=256,g-=8);r[p+l-N]|=vn*128}});var yn=D(L=>{"use strict";y();var J=en(),C=tn(),_n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;L.Buffer=c;L.SlowBuffer=Vn;L.INSPECT_MAX_BYTES=50;var Y=2147483647;L.kMaxLength=Y;c.TYPED_ARRAY_SUPPORT=Hn();!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Hn(){try{var r=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(r,n),r.foo()===42}catch(p){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.buffer}});Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.byteOffset}});function A(r){if(r>Y)throw new RangeError('The value "'+r+'" is invalid for option "size"');var n=new Uint8Array(r);return Object.setPrototypeOf(n,c.prototype),n}function c(r,n,p){if(typeof r=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return O(r)}return mn(r,n,p)}c.poolSize=8192;function mn(r,n,p){if(typeof r=="string")return Gn(r,n);if(ArrayBuffer.isView(r))return Jn(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(b(r,ArrayBuffer)||r&&b(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(b(r,SharedArrayBuffer)||r&&b(r.buffer,SharedArrayBuffer)))return V(r,n,p);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=r.valueOf&&r.valueOf();if(o!=null&&o!==r)return c.from(o,n,p);var e=Qn(r);if(e)return e;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return c.from(r[Symbol.toPrimitive]("string"),n,p);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}c.from=function(r,n,p){return mn(r,n,p)};Object.setPrototypeOf(c.prototype,Uint8Array.prototype);Object.setPrototypeOf(c,Uint8Array);function gn(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function zn(r,n,p){return gn(r),r<=0?A(r):n!==void 0?typeof p=="string"?A(r).fill(n,p):A(r).fill(n):A(r)}c.alloc=function(r,n,p){return zn(r,n,p)};function O(r){return gn(r),A(r<0?0:Z(r)|0)}c.allocUnsafe=function(r){return O(r)};c.allocUnsafeSlow=function(r){return O(r)};function Gn(r,n){if((typeof n!="string"||n==="")&&(n="utf8"),!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);var p=sn(r,n)|0,o=A(p),e=o.write(r,n);return e!==p&&(o=o.slice(0,e)),o}function Q(r){for(var n=r.length<0?0:Z(r.length)|0,p=A(n),o=0;o<n;o+=1)p[o]=r[o]&255;return p}function Jn(r){if(b(r,Uint8Array)){var n=new Uint8Array(r);return V(n.buffer,n.byteOffset,n.byteLength)}return Q(r)}function V(r,n,p){if(n<0||r.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<n+(p||0))throw new RangeError('"length" is outside of buffer bounds');var o;return n===void 0&&p===void 0?o=new Uint8Array(r):p===void 0?o=new Uint8Array(r,n):o=new Uint8Array(r,n,p),Object.setPrototypeOf(o,c.prototype),o}function Qn(r){if(c.isBuffer(r)){var n=Z(r.length)|0,p=A(n);return p.length===0||r.copy(p,0,0,n),p}if(r.length!==void 0)return typeof r.length!="number"||$(r.length)?A(0):Q(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Q(r.data)}function Z(r){if(r>=Y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Y.toString(16)+" bytes");return r|0}function Vn(r){return+r!=r&&(r=0),c.alloc(+r)}c.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==c.prototype};c.compare=function(n,p){if(b(n,Uint8Array)&&(n=c.from(n,n.offset,n.byteLength)),b(p,Uint8Array)&&(p=c.from(p,p.offset,p.byteLength)),!c.isBuffer(n)||!c.isBuffer(p))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===p)return 0;for(var o=n.length,e=p.length,t=0,_=Math.min(o,e);t<_;++t)if(n[t]!==p[t]){o=n[t],e=p[t];break}return o<e?-1:e<o?1:0};c.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};c.concat=function(n,p){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return c.alloc(0);var o;if(p===void 0)for(p=0,o=0;o<n.length;++o)p+=n[o].length;var e=c.allocUnsafe(p),t=0;for(o=0;o<n.length;++o){var _=n[o];if(b(_,Uint8Array))t+_.length>e.length?c.from(_).copy(e,t):Uint8Array.prototype.set.call(e,_,t);else if(c.isBuffer(_))_.copy(e,t);else throw new TypeError('"list" argument must be an Array of Buffers');t+=_.length}return e};function sn(r,n){if(c.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||b(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var p=r.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&p===0)return 0;for(var e=!1;;)switch(n){case"ascii":case"latin1":case"binary":return p;case"utf8":case"utf-8":return K(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p*2;case"hex":return p>>>1;case"base64":return xn(r).length;default:if(e)return o?-1:K(r).length;n=(""+n).toLowerCase(),e=!0}}c.byteLength=sn;function Kn(r,n,p){var o=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((p===void 0||p>this.length)&&(p=this.length),p<=0)||(p>>>=0,n>>>=0,p<=n))return"";for(r||(r="utf8");;)switch(r){case"hex":return ep(this,n,p);case"utf8":case"utf-8":return un(this,n,p);case"ascii":return rp(this,n,p);case"latin1":case"binary":return op(this,n,p);case"base64":return np(this,n,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tp(this,n,p);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),o=!0}}c.prototype._isBuffer=!0;function T(r,n,p){var o=r[n];r[n]=r[p],r[p]=o}c.prototype.swap16=function(){var n=this.length;if(n%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var p=0;p<n;p+=2)T(this,p,p+1);return this};c.prototype.swap32=function(){var n=this.length;if(n%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var p=0;p<n;p+=4)T(this,p,p+3),T(this,p+1,p+2);return this};c.prototype.swap64=function(){var n=this.length;if(n%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var p=0;p<n;p+=8)T(this,p,p+7),T(this,p+1,p+6),T(this,p+2,p+5),T(this,p+3,p+4);return this};c.prototype.toString=function(){var n=this.length;return n===0?"":arguments.length===0?un(this,0,n):Kn.apply(this,arguments)};c.prototype.toLocaleString=c.prototype.toString;c.prototype.equals=function(n){if(!c.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n?!0:c.compare(this,n)===0};c.prototype.inspect=function(){var n="",p=L.INSPECT_MAX_BYTES;return n=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(n+=" ... "),"<Buffer "+n+">"};_n&&(c.prototype[_n]=c.prototype.inspect);c.prototype.compare=function(n,p,o,e,t){if(b(n,Uint8Array)&&(n=c.from(n,n.offset,n.byteLength)),!c.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(p===void 0&&(p=0),o===void 0&&(o=n?n.length:0),e===void 0&&(e=0),t===void 0&&(t=this.length),p<0||o>n.length||e<0||t>this.length)throw new RangeError("out of range index");if(e>=t&&p>=o)return 0;if(e>=t)return-1;if(p>=o)return 1;if(p>>>=0,o>>>=0,e>>>=0,t>>>=0,this===n)return 0;for(var _=t-e,a=o-p,i=Math.min(_,a),g=this.slice(e,t),s=n.slice(p,o),m=0;m<i;++m)if(g[m]!==s[m]){_=g[m],a=s[m];break}return _<a?-1:a<_?1:0};function dn(r,n,p,o,e){if(r.length===0)return-1;if(typeof p=="string"?(o=p,p=0):p>2147483647?p=2147483647:p<-2147483648&&(p=-2147483648),p=+p,$(p)&&(p=e?0:r.length-1),p<0&&(p=r.length+p),p>=r.length){if(e)return-1;p=r.length-1}else if(p<0)if(e)p=0;else return-1;if(typeof n=="string"&&(n=c.from(n,o)),c.isBuffer(n))return n.length===0?-1:cn(r,n,p,o,e);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(r,n,p):Uint8Array.prototype.lastIndexOf.call(r,n,p):cn(r,[n],p,o,e);throw new TypeError("val must be string, number or Buffer")}function cn(r,n,p,o,e){var t=1,_=r.length,a=n.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(r.length<2||n.length<2)return-1;t=2,_/=2,a/=2,p/=2}function i(l,N){return t===1?l[N]:l.readUInt16BE(N*t)}var g;if(e){var s=-1;for(g=p;g<_;g++)if(i(r,g)===i(n,s===-1?0:g-s)){if(s===-1&&(s=g),g-s+1===a)return s*t}else s!==-1&&(g-=g-s),s=-1}else for(p+a>_&&(p=_-a),g=p;g>=0;g--){for(var m=!0,x=0;x<a;x++)if(i(r,g+x)!==i(n,x)){m=!1;break}if(m)return g}return-1}c.prototype.includes=function(n,p,o){return this.indexOf(n,p,o)!==-1};c.prototype.indexOf=function(n,p,o){return dn(this,n,p,o,!0)};c.prototype.lastIndexOf=function(n,p,o){return dn(this,n,p,o,!1)};function On(r,n,p,o){p=Number(p)||0;var e=r.length-p;o?(o=Number(o),o>e&&(o=e)):o=e;var t=n.length;o>t/2&&(o=t/2);for(var _=0;_<o;++_){var a=parseInt(n.substr(_*2,2),16);if($(a))return _;r[p+_]=a}return _}function Zn(r,n,p,o){return q(K(n,r.length-p),r,p,o)}function $n(r,n,p,o){return q(ap(n),r,p,o)}function Pn(r,n,p,o){return q(xn(n),r,p,o)}function jn(r,n,p,o){return q(ip(n,r.length-p),r,p,o)}c.prototype.write=function(n,p,o,e){if(p===void 0)e="utf8",o=this.length,p=0;else if(o===void 0&&typeof p=="string")e=p,o=this.length,p=0;else if(isFinite(p))p=p>>>0,isFinite(o)?(o=o>>>0,e===void 0&&(e="utf8")):(e=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var t=this.length-p;if((o===void 0||o>t)&&(o=t),n.length>0&&(o<0||p<0)||p>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var _=!1;;)switch(e){case"hex":return On(this,n,p,o);case"utf8":case"utf-8":return Zn(this,n,p,o);case"ascii":case"latin1":case"binary":return $n(this,n,p,o);case"base64":return Pn(this,n,p,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return jn(this,n,p,o);default:if(_)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),_=!0}};c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function np(r,n,p){return n===0&&p===r.length?J.fromByteArray(r):J.fromByteArray(r.slice(n,p))}function un(r,n,p){p=Math.min(r.length,p);for(var o=[],e=n;e<p;){var t=r[e],_=null,a=t>239?4:t>223?3:t>191?2:1;if(e+a<=p){var i,g,s,m;switch(a){case 1:t<128&&(_=t);break;case 2:i=r[e+1],(i&192)===128&&(m=(t&31)<<6|i&63,m>127&&(_=m));break;case 3:i=r[e+1],g=r[e+2],(i&192)===128&&(g&192)===128&&(m=(t&15)<<12|(i&63)<<6|g&63,m>2047&&(m<55296||m>57343)&&(_=m));break;case 4:i=r[e+1],g=r[e+2],s=r[e+3],(i&192)===128&&(g&192)===128&&(s&192)===128&&(m=(t&15)<<18|(i&63)<<12|(g&63)<<6|s&63,m>65535&&m<1114112&&(_=m))}}_===null?(_=65533,a=1):_>65535&&(_-=65536,o.push(_>>>10&1023|55296),_=56320|_&1023),o.push(_),e+=a}return pp(o)}var an=4096;function pp(r){var n=r.length;if(n<=an)return String.fromCharCode.apply(String,r);for(var p="",o=0;o<n;)p+=String.fromCharCode.apply(String,r.slice(o,o+=an));return p}function rp(r,n,p){var o="";p=Math.min(r.length,p);for(var e=n;e<p;++e)o+=String.fromCharCode(r[e]&127);return o}function op(r,n,p){var o="";p=Math.min(r.length,p);for(var e=n;e<p;++e)o+=String.fromCharCode(r[e]);return o}function ep(r,n,p){var o=r.length;(!n||n<0)&&(n=0),(!p||p<0||p>o)&&(p=o);for(var e="",t=n;t<p;++t)e+=mp[r[t]];return e}function tp(r,n,p){for(var o=r.slice(n,p),e="",t=0;t<o.length-1;t+=2)e+=String.fromCharCode(o[t]+o[t+1]*256);return e}c.prototype.slice=function(n,p){var o=this.length;n=~~n,p=p===void 0?o:~~p,n<0?(n+=o,n<0&&(n=0)):n>o&&(n=o),p<0?(p+=o,p<0&&(p=0)):p>o&&(p=o),p<n&&(p=n);var e=this.subarray(n,p);return Object.setPrototypeOf(e,c.prototype),e};function u(r,n,p){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+n>p)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(n,p,o){n=n>>>0,p=p>>>0,o||u(n,p,this.length);for(var e=this[n],t=1,_=0;++_<p&&(t*=256);)e+=this[n+_]*t;return e};c.prototype.readUintBE=c.prototype.readUIntBE=function(n,p,o){n=n>>>0,p=p>>>0,o||u(n,p,this.length);for(var e=this[n+--p],t=1;p>0&&(t*=256);)e+=this[n+--p]*t;return e};c.prototype.readUint8=c.prototype.readUInt8=function(n,p){return n=n>>>0,p||u(n,1,this.length),this[n]};c.prototype.readUint16LE=c.prototype.readUInt16LE=function(n,p){return n=n>>>0,p||u(n,2,this.length),this[n]|this[n+1]<<8};c.prototype.readUint16BE=c.prototype.readUInt16BE=function(n,p){return n=n>>>0,p||u(n,2,this.length),this[n]<<8|this[n+1]};c.prototype.readUint32LE=c.prototype.readUInt32LE=function(n,p){return n=n>>>0,p||u(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+this[n+3]*16777216};c.prototype.readUint32BE=c.prototype.readUInt32BE=function(n,p){return n=n>>>0,p||u(n,4,this.length),this[n]*16777216+(this[n+1]<<16|this[n+2]<<8|this[n+3])};c.prototype.readIntLE=function(n,p,o){n=n>>>0,p=p>>>0,o||u(n,p,this.length);for(var e=this[n],t=1,_=0;++_<p&&(t*=256);)e+=this[n+_]*t;return t*=128,e>=t&&(e-=Math.pow(2,8*p)),e};c.prototype.readIntBE=function(n,p,o){n=n>>>0,p=p>>>0,o||u(n,p,this.length);for(var e=p,t=1,_=this[n+--e];e>0&&(t*=256);)_+=this[n+--e]*t;return t*=128,_>=t&&(_-=Math.pow(2,8*p)),_};c.prototype.readInt8=function(n,p){return n=n>>>0,p||u(n,1,this.length),this[n]&128?(255-this[n]+1)*-1:this[n]};c.prototype.readInt16LE=function(n,p){n=n>>>0,p||u(n,2,this.length);var o=this[n]|this[n+1]<<8;return o&32768?o|4294901760:o};c.prototype.readInt16BE=function(n,p){n=n>>>0,p||u(n,2,this.length);var o=this[n+1]|this[n]<<8;return o&32768?o|4294901760:o};c.prototype.readInt32LE=function(n,p){return n=n>>>0,p||u(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24};c.prototype.readInt32BE=function(n,p){return n=n>>>0,p||u(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]};c.prototype.readFloatLE=function(n,p){return n=n>>>0,p||u(n,4,this.length),C.read(this,n,!0,23,4)};c.prototype.readFloatBE=function(n,p){return n=n>>>0,p||u(n,4,this.length),C.read(this,n,!1,23,4)};c.prototype.readDoubleLE=function(n,p){return n=n>>>0,p||u(n,8,this.length),C.read(this,n,!0,52,8)};c.prototype.readDoubleBE=function(n,p){return n=n>>>0,p||u(n,8,this.length),C.read(this,n,!1,52,8)};function h(r,n,p,o,e,t){if(!c.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>e||n<t)throw new RangeError('"value" argument is out of bounds');if(p+o>r.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(n,p,o,e){if(n=+n,p=p>>>0,o=o>>>0,!e){var t=Math.pow(2,8*o)-1;h(this,n,p,o,t,0)}var _=1,a=0;for(this[p]=n&255;++a<o&&(_*=256);)this[p+a]=n/_&255;return p+o};c.prototype.writeUintBE=c.prototype.writeUIntBE=function(n,p,o,e){if(n=+n,p=p>>>0,o=o>>>0,!e){var t=Math.pow(2,8*o)-1;h(this,n,p,o,t,0)}var _=o-1,a=1;for(this[p+_]=n&255;--_>=0&&(a*=256);)this[p+_]=n/a&255;return p+o};c.prototype.writeUint8=c.prototype.writeUInt8=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,1,255,0),this[p]=n&255,p+1};c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,2,65535,0),this[p]=n&255,this[p+1]=n>>>8,p+2};c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,2,65535,0),this[p]=n>>>8,this[p+1]=n&255,p+2};c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,4,4294967295,0),this[p+3]=n>>>24,this[p+2]=n>>>16,this[p+1]=n>>>8,this[p]=n&255,p+4};c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,4,4294967295,0),this[p]=n>>>24,this[p+1]=n>>>16,this[p+2]=n>>>8,this[p+3]=n&255,p+4};c.prototype.writeIntLE=function(n,p,o,e){if(n=+n,p=p>>>0,!e){var t=Math.pow(2,8*o-1);h(this,n,p,o,t-1,-t)}var _=0,a=1,i=0;for(this[p]=n&255;++_<o&&(a*=256);)n<0&&i===0&&this[p+_-1]!==0&&(i=1),this[p+_]=(n/a>>0)-i&255;return p+o};c.prototype.writeIntBE=function(n,p,o,e){if(n=+n,p=p>>>0,!e){var t=Math.pow(2,8*o-1);h(this,n,p,o,t-1,-t)}var _=o-1,a=1,i=0;for(this[p+_]=n&255;--_>=0&&(a*=256);)n<0&&i===0&&this[p+_+1]!==0&&(i=1),this[p+_]=(n/a>>0)-i&255;return p+o};c.prototype.writeInt8=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,1,127,-128),n<0&&(n=255+n+1),this[p]=n&255,p+1};c.prototype.writeInt16LE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,2,32767,-32768),this[p]=n&255,this[p+1]=n>>>8,p+2};c.prototype.writeInt16BE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,2,32767,-32768),this[p]=n>>>8,this[p+1]=n&255,p+2};c.prototype.writeInt32LE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,4,2147483647,-2147483648),this[p]=n&255,this[p+1]=n>>>8,this[p+2]=n>>>16,this[p+3]=n>>>24,p+4};c.prototype.writeInt32BE=function(n,p,o){return n=+n,p=p>>>0,o||h(this,n,p,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[p]=n>>>24,this[p+1]=n>>>16,this[p+2]=n>>>8,this[p+3]=n&255,p+4};function hn(r,n,p,o,e,t){if(p+o>r.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("Index out of range")}function ln(r,n,p,o,e){return n=+n,p=p>>>0,e||hn(r,n,p,4,34028234663852886e22,-34028234663852886e22),C.write(r,n,p,o,23,4),p+4}c.prototype.writeFloatLE=function(n,p,o){return ln(this,n,p,!0,o)};c.prototype.writeFloatBE=function(n,p,o){return ln(this,n,p,!1,o)};function fn(r,n,p,o,e){return n=+n,p=p>>>0,e||hn(r,n,p,8,17976931348623157e292,-17976931348623157e292),C.write(r,n,p,o,52,8),p+8}c.prototype.writeDoubleLE=function(n,p,o){return fn(this,n,p,!0,o)};c.prototype.writeDoubleBE=function(n,p,o){return fn(this,n,p,!1,o)};c.prototype.copy=function(n,p,o,e){if(!c.isBuffer(n))throw new TypeError("argument should be a Buffer");if(o||(o=0),!e&&e!==0&&(e=this.length),p>=n.length&&(p=n.length),p||(p=0),e>0&&e<o&&(e=o),e===o||n.length===0||this.length===0)return 0;if(p<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),n.length-p<e-o&&(e=n.length-p+o);var t=e-o;return this===n&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(p,o,e):Uint8Array.prototype.set.call(n,this.subarray(o,e),p),t};c.prototype.fill=function(n,p,o,e){if(typeof n=="string"){if(typeof p=="string"?(e=p,p=0,o=this.length):typeof o=="string"&&(e=o,o=this.length),e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!c.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(n.length===1){var t=n.charCodeAt(0);(e==="utf8"&&t<128||e==="latin1")&&(n=t)}}else typeof n=="number"?n=n&255:typeof n=="boolean"&&(n=Number(n));if(p<0||this.length<p||this.length<o)throw new RangeError("Out of range index");if(o<=p)return this;p=p>>>0,o=o===void 0?this.length:o>>>0,n||(n=0);var _;if(typeof n=="number")for(_=p;_<o;++_)this[_]=n;else{var a=c.isBuffer(n)?n:c.from(n,e),i=a.length;if(i===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(_=0;_<o-p;++_)this[_+p]=a[_%i]}return this};var _p=/[^+/0-9A-Za-z-_]/g;function cp(r){if(r=r.split("=")[0],r=r.trim().replace(_p,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function K(r,n){n=n||1/0;for(var p,o=r.length,e=null,t=[],_=0;_<o;++_){if(p=r.charCodeAt(_),p>55295&&p<57344){if(!e){if(p>56319){(n-=3)>-1&&t.push(239,191,189);continue}else if(_+1===o){(n-=3)>-1&&t.push(239,191,189);continue}e=p;continue}if(p<56320){(n-=3)>-1&&t.push(239,191,189),e=p;continue}p=(e-55296<<10|p-56320)+65536}else e&&(n-=3)>-1&&t.push(239,191,189);if(e=null,p<128){if((n-=1)<0)break;t.push(p)}else if(p<2048){if((n-=2)<0)break;t.push(p>>6|192,p&63|128)}else if(p<65536){if((n-=3)<0)break;t.push(p>>12|224,p>>6&63|128,p&63|128)}else if(p<1114112){if((n-=4)<0)break;t.push(p>>18|240,p>>12&63|128,p>>6&63|128,p&63|128)}else throw new Error("Invalid code point")}return t}function ap(r){for(var n=[],p=0;p<r.length;++p)n.push(r.charCodeAt(p)&255);return n}function ip(r,n){for(var p,o,e,t=[],_=0;_<r.length&&!((n-=2)<0);++_)p=r.charCodeAt(_),o=p>>8,e=p%256,t.push(e),t.push(o);return t}function xn(r){return J.toByteArray(cp(r))}function q(r,n,p,o){for(var e=0;e<o&&!(e+p>=n.length||e>=r.length);++e)n[e+p]=r[e];return e}function b(r,n){return r instanceof n||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===n.name}function $(r){return r!==r}var mp=function(){for(var r="0123456789abcdef",n=new Array(256),p=0;p<16;++p)for(var o=p*16,e=0;e<16;++e)n[o+e]=r[p]+r[e];return n}()});var An=D((yp,Fn)=>{y();var d=Fn.exports={},E,F;function P(){throw new Error("setTimeout has not been defined")}function j(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?E=setTimeout:E=P}catch(r){E=P}try{typeof clearTimeout=="function"?F=clearTimeout:F=j}catch(r){F=j}})();function wn(r){if(E===setTimeout)return setTimeout(r,0);if((E===P||!E)&&setTimeout)return E=setTimeout,setTimeout(r,0);try{return E(r,0)}catch(n){try{return E.call(null,r,0)}catch(p){return E.call(this,r,0)}}}function gp(r){if(F===clearTimeout)return clearTimeout(r);if((F===j||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(r);try{return F(r)}catch(n){try{return F.call(null,r)}catch(p){return F.call(this,r)}}}var B=[],S=!1,I,H=-1;function sp(){!S||!I||(S=!1,I.length?B=I.concat(B):H=-1,B.length&&bn())}function bn(){if(!S){var r=wn(sp);S=!0;for(var n=B.length;n;){for(I=B,B=[];++H<n;)I&&I[H].run();H=-1,n=B.length}I=null,S=!1,gp(r)}}d.nextTick=function(r){var n=new Array(arguments.length-1);if(arguments.length>1)for(var p=1;p<arguments.length;p++)n[p-1]=arguments[p];B.push(new En(r,n)),B.length===1&&!S&&wn(bn)};function En(r,n){this.fun=r,this.array=n}En.prototype.run=function(){this.fun.apply(null,this.array)};d.title="browser";d.browser=!0;d.env={};d.argv=[];d.version="";d.versions={};function v(){}d.on=v;d.addListener=v;d.once=v;d.off=v;d.removeListener=v;d.removeAllListeners=v;d.emit=v;d.prependListener=v;d.prependOnceListener=v;d.listeners=function(r){return[]};d.binding=function(r){throw new Error("process.binding is not supported")};d.cwd=function(){return"/"};d.chdir=function(r){throw new Error("process.chdir is not supported")};d.umask=function(){return 0}});var R,M,wp,y=Ln(()=>{R=pn(yn()),M=pn(An()),wp=function(r){function n(){var o=this||self;return delete r.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return n();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:n});var p=__magic__;return p}(Object)});var up={};Sn(up,{css:()=>Bn,default:()=>dp});module.exports=Rn(up);y();var Bn=`.dapp-core-component__spacing__mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.dapp-core-component__spacing__m-0 {
  margin: 0;
}

.dapp-core-component__spacing__mt-0 {
  margin-top: 0;
}

.dapp-core-component__spacing__my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.dapp-core-component__spacing__mr-0 {
  margin-right: 0;
}

.dapp-core-component__spacing__mx-0 {
  margin-right: 0;
  margin-left: 0;
}

.dapp-core-component__spacing__mb-0 {
  margin-bottom: 0;
}

.dapp-core-component__spacing__my-0 {
  margin-bottom: 0;
  margin-top: 0;
}

.dapp-core-component__spacing__ml-0 {
  margin-left: 0;
}

.dapp-core-component__spacing__mx-0 {
  margin-left: 0;
  margin-right: 0;
}

.dapp-core-component__spacing__m-1 {
  margin: 0.25rem;
}

.dapp-core-component__spacing__mt-1 {
  margin-top: 0.25rem;
}

.dapp-core-component__spacing__my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.dapp-core-component__spacing__mr-1 {
  margin-right: 0.25rem;
}

.dapp-core-component__spacing__mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.dapp-core-component__spacing__mb-1 {
  margin-bottom: 0.25rem;
}

.dapp-core-component__spacing__my-1 {
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
}

.dapp-core-component__spacing__ml-1 {
  margin-left: 0.25rem;
}

.dapp-core-component__spacing__mx-1 {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}

.dapp-core-component__spacing__m-2 {
  margin: 0.5rem;
}

.dapp-core-component__spacing__mt-2 {
  margin-top: 0.5rem;
}

.dapp-core-component__spacing__my-2 {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.dapp-core-component__spacing__mr-2 {
  margin-right: 0.5rem;
}

.dapp-core-component__spacing__mx-2 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.dapp-core-component__spacing__mb-2 {
  margin-bottom: 0.5rem;
}

.dapp-core-component__spacing__my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.dapp-core-component__spacing__ml-2 {
  margin-left: 0.5rem;
}

.dapp-core-component__spacing__mx-2 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.dapp-core-component__spacing__m-3 {
  margin: 1rem;
}

.dapp-core-component__spacing__mt-3,
.dapp-core-component__spacing__my-3 {
  margin-top: 1rem;
}

.dapp-core-component__spacing__mr-3 {
  margin-right: 1rem;
}

.dapp-core-component__spacing__mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.dapp-core-component__spacing__mb-3 {
  margin-bottom: 1rem;
}

.dapp-core-component__spacing__my-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.dapp-core-component__spacing__ml-3 {
  margin-left: 1rem;
}

.dapp-core-component__spacing__mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.dapp-core-component__spacing__m-4 {
  margin: 1.5rem;
}

.dapp-core-component__spacing__mt-4 {
  margin-top: 1.5rem;
}

.dapp-core-component__spacing__my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.dapp-core-component__spacing__mr-4 {
  margin-right: 1.5rem;
}

.dapp-core-component__spacing__mx-4 {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.dapp-core-component__spacing__mb-4 {
  margin-bottom: 1.5rem;
}

.dapp-core-component__spacing__my-4 {
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.dapp-core-component__spacing__ml-4 {
  margin-left: 1.5rem;
}

.dapp-core-component__spacing__mx-4 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.dapp-core-component__spacing__m-5 {
  margin: 3rem;
}

.dapp-core-component__spacing__mt-5 {
  margin-top: 3rem;
}

.dapp-core-component__spacing__my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.dapp-core-component__spacing__mr-5 {
  margin-right: 3rem;
}

.dapp-core-component__spacing__mx-5 {
  margin-right: 3rem;
  margin-left: 3rem;
}

.dapp-core-component__spacing__mb-5 {
  margin-bottom: 3rem;
}

.dapp-core-component__spacing__my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.dapp-core-component__spacing__ml-5 {
  margin-left: 3rem;
}

.dapp-core-component__spacing__mx-5 {
  margin-left: 3rem;
  margin-right: 3rem;
}

.dapp-core-component__spacing__p-0 {
  padding: 0;
}

.dapp-core-component__spacing__pt-0 {
  padding-top: 0;
}

.dapp-core-component__spacing__py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.dapp-core-component__spacing__pr-0 {
  padding-right: 0;
}

.dapp-core-component__spacing__px-0 {
  padding-left: 0;
  padding-right: 0;
}

.dapp-core-component__spacing__pb-0 {
  padding-bottom: 0;
}

.dapp-core-component__spacing__py-0 {
  padding-bottom: 0;
  padding-top: 0;
}

.dapp-core-component__spacing__pl-0 {
  padding-left: 0;
}

.dapp-core-component__spacing__px-0 {
  padding-left: 0;
  padding-right: 0;
}

.dapp-core-component__spacing__p-1 {
  padding: 0.25rem;
}

.dapp-core-component__spacing__pt-1 {
  padding-top: 0.25rem;
}

.dapp-core-component__spacing__py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.dapp-core-component__spacing__pr-1 {
  padding-right: 0.25rem;
}

.dapp-core-component__spacing__px-1 {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
}

.dapp-core-component__spacing__pb-1 {
  padding-bottom: 0.25rem;
}

.dapp-core-component__spacing__py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.dapp-core-component__spacing__pl-1 {
  padding-left: 0.25rem;
}

.dapp-core-component__spacing__px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.dapp-core-component__spacing__p-2 {
  padding: 0.5rem;
}

.dapp-core-component__spacing__pt-2 {
  padding-top: 0.5rem;
}

.dapp-core-component__spacing__py-2 {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.dapp-core-component__spacing__pr-2 {
  padding-right: 0.5rem;
}

.dapp-core-component__spacing__px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.dapp-core-component__spacing__pb-2 {
  padding-bottom: 0.5rem;
}

.dapp-core-component__spacing__py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.dapp-core-component__spacing__pl-2 {
  padding-left: 0.5rem;
}

.dapp-core-component__spacing__px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.dapp-core-component__spacing__p-3 {
  padding: 1rem;
}

.dapp-core-component__spacing__pt-3 {
  padding-top: 1rem;
}

.dapp-core-component__spacing__py-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.dapp-core-component__spacing__pr-3 {
  padding-right: 1rem;
}

.dapp-core-component__spacing__px-3 {
  padding-right: 1rem;
  padding-left: 1rem;
}

.dapp-core-component__spacing__pb-3 {
  padding-bottom: 1rem;
}

.dapp-core-component__spacing__py-3 {
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.dapp-core-component__spacing__pl-3 {
  padding-left: 1rem;
}

.dapp-core-component__spacing__px-3 {
  padding-right: 1rem;
  padding-left: 1rem;
}

.dapp-core-component__spacing__p-4 {
  padding: 1.5rem;
}

.dapp-core-component__spacing__pt-4 {
  padding-top: 1.5rem;
}

.dapp-core-component__spacing__py-4 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.dapp-core-component__spacing__pr-4 {
  padding-right: 1.5rem;
}

.dapp-core-component__spacing__px-4 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.dapp-core-component__spacing__pb-4 {
  padding-bottom: 1.5rem;
}

.dapp-core-component__spacing__py-4 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.dapp-core-component__spacing__pl-4 {
  padding-left: 1.5rem;
}

.dapp-core-component__spacing__px-4 {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

.dapp-core-component__spacing__p-5 {
  padding: 3rem;
}

.dapp-core-component__spacing__pt-5 {
  padding-top: 3rem;
}

.dapp-core-component__spacing__py-5 {
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.dapp-core-component__spacing__pr-5 {
  padding-right: 3rem;
}

.dapp-core-component__spacing__px-5 {
  padding-right: 3rem;
  padding-left: 3rem;
}

.dapp-core-component__spacing__pb-5 {
  padding-right: 3rem;
}

.dapp-core-component__spacing__py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.dapp-core-component__spacing__pl-5 {
  padding-left: 3rem;
}

.dapp-core-component__spacing__px-5 {
  padding-right: 3rem;
  padding-left: 3rem;
}

.dapp-core-component__spacing__m-n1 {
  margin: -0.25rem;
}

.dapp-core-component__spacing__mt-n1 {
  margin-top: -0.25rem;
}

.dapp-core-component__spacing__my-n1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}

.dapp-core-component__spacing__mr-n1 {
  margin-right: -0.25rem;
}

.dapp-core-component__spacing__mx-n1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.dapp-core-component__spacing__mb-n1 {
  margin-bottom: -0.25rem;
}

.dapp-core-component__spacing__my-n1 {
  margin-bottom: -0.25rem;
  margin-top: -0.25rem;
}

.dapp-core-component__spacing__ml-n1 {
  margin-left: -0.25rem;
}

.dapp-core-component__spacing__mx-n1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.dapp-core-component__spacing__m-n2 {
  margin: -0.5rem;
}

.dapp-core-component__spacing__mt-n2 {
  margin-top: -0.5rem;
}

.dapp-core-component__spacing__my-n2 {
  margin-top: -0.5rem;
  margin-left: -0.5rem;
}

.dapp-core-component__spacing__mr-n2 {
  margin-right: -0.5rem;
}

.dapp-core-component__spacing__mx-n2 {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.dapp-core-component__spacing__mb-n2 {
  margin-bottom: -0.5rem;
}

.dapp-core-component__spacing__my-n2 {
  margin-bottom: -0.5rem;
  margin-top: -0.5rem;
}

.dapp-core-component__spacing__ml-n2 {
  margin-left: -0.5rem;
}

.dapp-core-component__spacing__mx-n2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.dapp-core-component__spacing__m-n3 {
  margin: -1rem;
}

.dapp-core-component__spacing__mt-n3 {
  margin-top: -1rem;
}

.dapp-core-component__spacing__my-n3 {
  margin-top: -1rem;
  margin-bottom: -1rem;
}

.dapp-core-component__spacing__mr-n3 {
  margin-right: -1rem;
}

.dapp-core-component__spacing__mx-n3 {
  margin-right: -1rem;
  margin-left: -1rem;
}

.dapp-core-component__spacing__mb-n3 {
  margin-bottom: -1rem;
}

.dapp-core-component__spacing__my-n3 {
  margin-bottom: -1rem;
  margin-top: -1rem;
}

.dapp-core-component__spacing__ml-n3 {
  margin-left: -1rem;
}

.dapp-core-component__spacing__mx-n3 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.dapp-core-component__spacing__m-n4 {
  margin: -1.5rem;
}

.dapp-core-component__spacing__mt-n4 {
  margin-top: -1.5rem;
}

.dapp-core-component__spacing__my-n4 {
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
}

.dapp-core-component__spacing__mr-n4 {
  margin-right: -1.5rem;
}

.dapp-core-component__spacing__mx-n4 {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.dapp-core-component__spacing__mb-n4 {
  margin-bottom: -1.5rem;
}

.dapp-core-component__spacing__my-n4 {
  margin-bottom: -1.5rem;
  margin-top: -1.5rem;
}

.dapp-core-component__spacing__ml-n4 {
  margin-left: -1.5rem;
}

.dapp-core-component__spacing__mx-n4 {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

.dapp-core-component__spacing__m-n5 {
  margin: -3rem;
}

.dapp-core-component__spacing__mt-n5 {
  margin-top: -3rem;
}

.dapp-core-component__spacing__my-n5 {
  margin-bottom: -3rem;
  margin-top: -3rem;
}

.dapp-core-component__spacing__mr-n5 {
  margin-right: -3rem;
}

.dapp-core-component__spacing__mx-n5 {
  margin-left: -3rem;
  margin-right: -3rem;
}

.dapp-core-component__spacing__mb-n5 {
  margin-bottom: -3rem;
}

.dapp-core-component__spacing__my-n5 {
  margin-top: -3rem;
  margin-bottom: -3rem;
}

.dapp-core-component__spacing__ml-n5 {
  margin-left: -3rem;
}

.dapp-core-component__spacing__mx-n5 {
  margin-right: -3rem;
  margin-left: -3rem;
}

.dapp-core-component__spacing__m-auto {
  margin: auto;
}

.dapp-core-component__spacing__mt-auto {
  margin-top: auto;
}

.dapp-core-component__spacing__my-auto {
  margin-bottom: auto;
  margin-top: auto;
}

.dapp-core-component__spacing__mr-auto {
  margin-right: auto;
}

.dapp-core-component__spacing__mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.dapp-core-component__spacing__mb-auto {
  margin-bottom: auto;
}

.dapp-core-component__spacing__my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.dapp-core-component__spacing__ml-auto {
  margin-left: auto;
}

.dapp-core-component__spacing__mx-auto {
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 992px) {
  .dapp-core-component__spacing__mr-lg-1 {
    margin-right: 0.25rem;
  }
}

@media (min-width: 992px) {
  .dapp-core-component__spacing__mr-lg-4 {
    margin-right: 1.5rem;
  }
}

@media (min-width: 992px) {
  .dapp-core-component__spacing__mx-lg-4 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .dapp-core-component__spacing__mb-xl-2 {
    margin-bottom: 0.5rem;
  }
}

@media (min-width: 576px) {
  .dapp-core-component__spacing__pr-sm-2 {
    padding-right: 0.5rem;
  }
}

@media (min-width: 576px) {
  .dapp-core-component__spacing__px-sm-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

@media (min-width: 1200px) {
  .dapp-core-component__spacing__pr-xl-0,
  .dapp-core-component__spacing__px-xl-0 {
    padding-right: 0;
  }
}

.dapp-core-component__spacing__col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bn));var dp={"mx-auto":"dapp-core-component__spacing__mx-auto",mxAuto:"dapp-core-component__spacing__mx-auto","m-0":"dapp-core-component__spacing__m-0",m0:"dapp-core-component__spacing__m-0","mt-0":"dapp-core-component__spacing__mt-0",mt0:"dapp-core-component__spacing__mt-0","my-0":"dapp-core-component__spacing__my-0",my0:"dapp-core-component__spacing__my-0","mr-0":"dapp-core-component__spacing__mr-0",mr0:"dapp-core-component__spacing__mr-0","mx-0":"dapp-core-component__spacing__mx-0",mx0:"dapp-core-component__spacing__mx-0","mb-0":"dapp-core-component__spacing__mb-0",mb0:"dapp-core-component__spacing__mb-0","ml-0":"dapp-core-component__spacing__ml-0",ml0:"dapp-core-component__spacing__ml-0","m-1":"dapp-core-component__spacing__m-1",m1:"dapp-core-component__spacing__m-1","mt-1":"dapp-core-component__spacing__mt-1",mt1:"dapp-core-component__spacing__mt-1","my-1":"dapp-core-component__spacing__my-1",my1:"dapp-core-component__spacing__my-1","mr-1":"dapp-core-component__spacing__mr-1",mr1:"dapp-core-component__spacing__mr-1","mx-1":"dapp-core-component__spacing__mx-1",mx1:"dapp-core-component__spacing__mx-1","mb-1":"dapp-core-component__spacing__mb-1",mb1:"dapp-core-component__spacing__mb-1","ml-1":"dapp-core-component__spacing__ml-1",ml1:"dapp-core-component__spacing__ml-1","m-2":"dapp-core-component__spacing__m-2",m2:"dapp-core-component__spacing__m-2","mt-2":"dapp-core-component__spacing__mt-2",mt2:"dapp-core-component__spacing__mt-2","my-2":"dapp-core-component__spacing__my-2",my2:"dapp-core-component__spacing__my-2","mr-2":"dapp-core-component__spacing__mr-2",mr2:"dapp-core-component__spacing__mr-2","mx-2":"dapp-core-component__spacing__mx-2",mx2:"dapp-core-component__spacing__mx-2","mb-2":"dapp-core-component__spacing__mb-2",mb2:"dapp-core-component__spacing__mb-2","ml-2":"dapp-core-component__spacing__ml-2",ml2:"dapp-core-component__spacing__ml-2","m-3":"dapp-core-component__spacing__m-3",m3:"dapp-core-component__spacing__m-3","mt-3":"dapp-core-component__spacing__mt-3",mt3:"dapp-core-component__spacing__mt-3","my-3":"dapp-core-component__spacing__my-3",my3:"dapp-core-component__spacing__my-3","mr-3":"dapp-core-component__spacing__mr-3",mr3:"dapp-core-component__spacing__mr-3","mx-3":"dapp-core-component__spacing__mx-3",mx3:"dapp-core-component__spacing__mx-3","mb-3":"dapp-core-component__spacing__mb-3",mb3:"dapp-core-component__spacing__mb-3","ml-3":"dapp-core-component__spacing__ml-3",ml3:"dapp-core-component__spacing__ml-3","m-4":"dapp-core-component__spacing__m-4",m4:"dapp-core-component__spacing__m-4","mt-4":"dapp-core-component__spacing__mt-4",mt4:"dapp-core-component__spacing__mt-4","my-4":"dapp-core-component__spacing__my-4",my4:"dapp-core-component__spacing__my-4","mr-4":"dapp-core-component__spacing__mr-4",mr4:"dapp-core-component__spacing__mr-4","mx-4":"dapp-core-component__spacing__mx-4",mx4:"dapp-core-component__spacing__mx-4","mb-4":"dapp-core-component__spacing__mb-4",mb4:"dapp-core-component__spacing__mb-4","ml-4":"dapp-core-component__spacing__ml-4",ml4:"dapp-core-component__spacing__ml-4","m-5":"dapp-core-component__spacing__m-5",m5:"dapp-core-component__spacing__m-5","mt-5":"dapp-core-component__spacing__mt-5",mt5:"dapp-core-component__spacing__mt-5","my-5":"dapp-core-component__spacing__my-5",my5:"dapp-core-component__spacing__my-5","mr-5":"dapp-core-component__spacing__mr-5",mr5:"dapp-core-component__spacing__mr-5","mx-5":"dapp-core-component__spacing__mx-5",mx5:"dapp-core-component__spacing__mx-5","mb-5":"dapp-core-component__spacing__mb-5",mb5:"dapp-core-component__spacing__mb-5","ml-5":"dapp-core-component__spacing__ml-5",ml5:"dapp-core-component__spacing__ml-5","p-0":"dapp-core-component__spacing__p-0",p0:"dapp-core-component__spacing__p-0","pt-0":"dapp-core-component__spacing__pt-0",pt0:"dapp-core-component__spacing__pt-0","py-0":"dapp-core-component__spacing__py-0",py0:"dapp-core-component__spacing__py-0","pr-0":"dapp-core-component__spacing__pr-0",pr0:"dapp-core-component__spacing__pr-0","px-0":"dapp-core-component__spacing__px-0",px0:"dapp-core-component__spacing__px-0","pb-0":"dapp-core-component__spacing__pb-0",pb0:"dapp-core-component__spacing__pb-0","pl-0":"dapp-core-component__spacing__pl-0",pl0:"dapp-core-component__spacing__pl-0","p-1":"dapp-core-component__spacing__p-1",p1:"dapp-core-component__spacing__p-1","pt-1":"dapp-core-component__spacing__pt-1",pt1:"dapp-core-component__spacing__pt-1","py-1":"dapp-core-component__spacing__py-1",py1:"dapp-core-component__spacing__py-1","pr-1":"dapp-core-component__spacing__pr-1",pr1:"dapp-core-component__spacing__pr-1","px-1":"dapp-core-component__spacing__px-1",px1:"dapp-core-component__spacing__px-1","pb-1":"dapp-core-component__spacing__pb-1",pb1:"dapp-core-component__spacing__pb-1","pl-1":"dapp-core-component__spacing__pl-1",pl1:"dapp-core-component__spacing__pl-1","p-2":"dapp-core-component__spacing__p-2",p2:"dapp-core-component__spacing__p-2","pt-2":"dapp-core-component__spacing__pt-2",pt2:"dapp-core-component__spacing__pt-2","py-2":"dapp-core-component__spacing__py-2",py2:"dapp-core-component__spacing__py-2","pr-2":"dapp-core-component__spacing__pr-2",pr2:"dapp-core-component__spacing__pr-2","px-2":"dapp-core-component__spacing__px-2",px2:"dapp-core-component__spacing__px-2","pb-2":"dapp-core-component__spacing__pb-2",pb2:"dapp-core-component__spacing__pb-2","pl-2":"dapp-core-component__spacing__pl-2",pl2:"dapp-core-component__spacing__pl-2","p-3":"dapp-core-component__spacing__p-3",p3:"dapp-core-component__spacing__p-3","pt-3":"dapp-core-component__spacing__pt-3",pt3:"dapp-core-component__spacing__pt-3","py-3":"dapp-core-component__spacing__py-3",py3:"dapp-core-component__spacing__py-3","pr-3":"dapp-core-component__spacing__pr-3",pr3:"dapp-core-component__spacing__pr-3","px-3":"dapp-core-component__spacing__px-3",px3:"dapp-core-component__spacing__px-3","pb-3":"dapp-core-component__spacing__pb-3",pb3:"dapp-core-component__spacing__pb-3","pl-3":"dapp-core-component__spacing__pl-3",pl3:"dapp-core-component__spacing__pl-3","p-4":"dapp-core-component__spacing__p-4",p4:"dapp-core-component__spacing__p-4","pt-4":"dapp-core-component__spacing__pt-4",pt4:"dapp-core-component__spacing__pt-4","py-4":"dapp-core-component__spacing__py-4",py4:"dapp-core-component__spacing__py-4","pr-4":"dapp-core-component__spacing__pr-4",pr4:"dapp-core-component__spacing__pr-4","px-4":"dapp-core-component__spacing__px-4",px4:"dapp-core-component__spacing__px-4","pb-4":"dapp-core-component__spacing__pb-4",pb4:"dapp-core-component__spacing__pb-4","pl-4":"dapp-core-component__spacing__pl-4",pl4:"dapp-core-component__spacing__pl-4","p-5":"dapp-core-component__spacing__p-5",p5:"dapp-core-component__spacing__p-5","pt-5":"dapp-core-component__spacing__pt-5",pt5:"dapp-core-component__spacing__pt-5","py-5":"dapp-core-component__spacing__py-5",py5:"dapp-core-component__spacing__py-5","pr-5":"dapp-core-component__spacing__pr-5",pr5:"dapp-core-component__spacing__pr-5","px-5":"dapp-core-component__spacing__px-5",px5:"dapp-core-component__spacing__px-5","pb-5":"dapp-core-component__spacing__pb-5",pb5:"dapp-core-component__spacing__pb-5","pl-5":"dapp-core-component__spacing__pl-5",pl5:"dapp-core-component__spacing__pl-5","m-n1":"dapp-core-component__spacing__m-n1",mN1:"dapp-core-component__spacing__m-n1","mt-n1":"dapp-core-component__spacing__mt-n1",mtN1:"dapp-core-component__spacing__mt-n1","my-n1":"dapp-core-component__spacing__my-n1",myN1:"dapp-core-component__spacing__my-n1","mr-n1":"dapp-core-component__spacing__mr-n1",mrN1:"dapp-core-component__spacing__mr-n1","mx-n1":"dapp-core-component__spacing__mx-n1",mxN1:"dapp-core-component__spacing__mx-n1","mb-n1":"dapp-core-component__spacing__mb-n1",mbN1:"dapp-core-component__spacing__mb-n1","ml-n1":"dapp-core-component__spacing__ml-n1",mlN1:"dapp-core-component__spacing__ml-n1","m-n2":"dapp-core-component__spacing__m-n2",mN2:"dapp-core-component__spacing__m-n2","mt-n2":"dapp-core-component__spacing__mt-n2",mtN2:"dapp-core-component__spacing__mt-n2","my-n2":"dapp-core-component__spacing__my-n2",myN2:"dapp-core-component__spacing__my-n2","mr-n2":"dapp-core-component__spacing__mr-n2",mrN2:"dapp-core-component__spacing__mr-n2","mx-n2":"dapp-core-component__spacing__mx-n2",mxN2:"dapp-core-component__spacing__mx-n2","mb-n2":"dapp-core-component__spacing__mb-n2",mbN2:"dapp-core-component__spacing__mb-n2","ml-n2":"dapp-core-component__spacing__ml-n2",mlN2:"dapp-core-component__spacing__ml-n2","m-n3":"dapp-core-component__spacing__m-n3",mN3:"dapp-core-component__spacing__m-n3","mt-n3":"dapp-core-component__spacing__mt-n3",mtN3:"dapp-core-component__spacing__mt-n3","my-n3":"dapp-core-component__spacing__my-n3",myN3:"dapp-core-component__spacing__my-n3","mr-n3":"dapp-core-component__spacing__mr-n3",mrN3:"dapp-core-component__spacing__mr-n3","mx-n3":"dapp-core-component__spacing__mx-n3",mxN3:"dapp-core-component__spacing__mx-n3","mb-n3":"dapp-core-component__spacing__mb-n3",mbN3:"dapp-core-component__spacing__mb-n3","ml-n3":"dapp-core-component__spacing__ml-n3",mlN3:"dapp-core-component__spacing__ml-n3","m-n4":"dapp-core-component__spacing__m-n4",mN4:"dapp-core-component__spacing__m-n4","mt-n4":"dapp-core-component__spacing__mt-n4",mtN4:"dapp-core-component__spacing__mt-n4","my-n4":"dapp-core-component__spacing__my-n4",myN4:"dapp-core-component__spacing__my-n4","mr-n4":"dapp-core-component__spacing__mr-n4",mrN4:"dapp-core-component__spacing__mr-n4","mx-n4":"dapp-core-component__spacing__mx-n4",mxN4:"dapp-core-component__spacing__mx-n4","mb-n4":"dapp-core-component__spacing__mb-n4",mbN4:"dapp-core-component__spacing__mb-n4","ml-n4":"dapp-core-component__spacing__ml-n4",mlN4:"dapp-core-component__spacing__ml-n4","m-n5":"dapp-core-component__spacing__m-n5",mN5:"dapp-core-component__spacing__m-n5","mt-n5":"dapp-core-component__spacing__mt-n5",mtN5:"dapp-core-component__spacing__mt-n5","my-n5":"dapp-core-component__spacing__my-n5",myN5:"dapp-core-component__spacing__my-n5","mr-n5":"dapp-core-component__spacing__mr-n5",mrN5:"dapp-core-component__spacing__mr-n5","mx-n5":"dapp-core-component__spacing__mx-n5",mxN5:"dapp-core-component__spacing__mx-n5","mb-n5":"dapp-core-component__spacing__mb-n5",mbN5:"dapp-core-component__spacing__mb-n5","ml-n5":"dapp-core-component__spacing__ml-n5",mlN5:"dapp-core-component__spacing__ml-n5","m-auto":"dapp-core-component__spacing__m-auto",mAuto:"dapp-core-component__spacing__m-auto","mt-auto":"dapp-core-component__spacing__mt-auto",mtAuto:"dapp-core-component__spacing__mt-auto","my-auto":"dapp-core-component__spacing__my-auto",myAuto:"dapp-core-component__spacing__my-auto","mr-auto":"dapp-core-component__spacing__mr-auto",mrAuto:"dapp-core-component__spacing__mr-auto","mb-auto":"dapp-core-component__spacing__mb-auto",mbAuto:"dapp-core-component__spacing__mb-auto","ml-auto":"dapp-core-component__spacing__ml-auto",mlAuto:"dapp-core-component__spacing__ml-auto","mr-lg-1":"dapp-core-component__spacing__mr-lg-1",mrLg1:"dapp-core-component__spacing__mr-lg-1","mr-lg-4":"dapp-core-component__spacing__mr-lg-4",mrLg4:"dapp-core-component__spacing__mr-lg-4","mx-lg-4":"dapp-core-component__spacing__mx-lg-4",mxLg4:"dapp-core-component__spacing__mx-lg-4","mb-xl-2":"dapp-core-component__spacing__mb-xl-2",mbXl2:"dapp-core-component__spacing__mb-xl-2","pr-sm-2":"dapp-core-component__spacing__pr-sm-2",prSm2:"dapp-core-component__spacing__pr-sm-2","px-sm-2":"dapp-core-component__spacing__px-sm-2",pxSm2:"dapp-core-component__spacing__px-sm-2","pr-xl-0":"dapp-core-component__spacing__pr-xl-0",prXl0:"dapp-core-component__spacing__pr-xl-0","px-xl-0":"dapp-core-component__spacing__px-xl-0",pxXl0:"dapp-core-component__spacing__px-xl-0",col:"dapp-core-component__spacing__col"};0&&(module.exports={css});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=spacing.js.map
