"use strict";var Ut=Object.create;var D=Object.defineProperty;var Tt=Object.getOwnPropertyDescriptor;var It=Object.getOwnPropertyNames;var bt=Object.getPrototypeOf,Ct=Object.prototype.hasOwnProperty;var kt=(e,t)=>()=>(e&&(t=e(e=0)),t);var N=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),St=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},tt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of It(t))!Ct.call(e,o)&&o!==r&&D(e,o,{get:()=>t[o],enumerable:!(n=Tt(t,o))||n.enumerable});return e};var rt=(e,t,r)=>(r=e!=null?Ut(bt(e)):{},tt(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),Lt=e=>tt(D({},"__esModule",{value:!0}),e);var ot=N(z=>{"use strict";d();z.byteLength=Rt;z.toByteArray=Nt;z.fromByteArray=Ht;var g=[],w=[],Mt=typeof Uint8Array!="undefined"?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(T=0,et=X.length;T<et;++T)g[T]=X[T],w[X.charCodeAt(T)]=T;var T,et;w["-".charCodeAt(0)]=62;w["_".charCodeAt(0)]=63;function nt(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");r===-1&&(r=t);var n=r===t?0:4-r%4;return[r,n]}function Rt(e){var t=nt(e),r=t[0],n=t[1];return(r+n)*3/4-n}function Dt(e,t,r){return(t+r)*3/4-r}function Nt(e){var t,r=nt(e),n=r[0],o=r[1],i=new Mt(Dt(e,n,o)),p=0,c=o>0?n-4:n,u;for(u=0;u<c;u+=4)t=w[e.charCodeAt(u)]<<18|w[e.charCodeAt(u+1)]<<12|w[e.charCodeAt(u+2)]<<6|w[e.charCodeAt(u+3)],i[p++]=t>>16&255,i[p++]=t>>8&255,i[p++]=t&255;return o===2&&(t=w[e.charCodeAt(u)]<<2|w[e.charCodeAt(u+1)]>>4,i[p++]=t&255),o===1&&(t=w[e.charCodeAt(u)]<<10|w[e.charCodeAt(u+1)]<<4|w[e.charCodeAt(u+2)]>>2,i[p++]=t>>8&255,i[p++]=t&255),i}function zt(e){return g[e>>18&63]+g[e>>12&63]+g[e>>6&63]+g[e&63]}function Wt(e,t,r){for(var n,o=[],i=t;i<r;i+=3)n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(e[i+2]&255),o.push(zt(n));return o.join("")}function Ht(e){for(var t,r=e.length,n=r%3,o=[],i=16383,p=0,c=r-n;p<c;p+=i)o.push(Wt(e,p,p+i>c?c:p+i));return n===1?(t=e[r-1],o.push(g[t>>2]+g[t<<4&63]+"==")):n===2&&(t=(e[r-2]<<8)+e[r-1],o.push(g[t>>10]+g[t>>4&63]+g[t<<2&63]+"=")),o.join("")}});var it=N(G=>{d();G.read=function(e,t,r,n,o){var i,p,c=o*8-n-1,u=(1<<c)-1,x=u>>1,_=-7,h=r?o-1:0,y=r?-1:1,m=e[t+h];for(h+=y,i=m&(1<<-_)-1,m>>=-_,_+=c;_>0;i=i*256+e[t+h],h+=y,_-=8);for(p=i&(1<<-_)-1,i>>=-_,_+=n;_>0;p=p*256+e[t+h],h+=y,_-=8);if(i===0)i=1-x;else{if(i===u)return p?NaN:(m?-1:1)*(1/0);p=p+Math.pow(2,n),i=i-x}return(m?-1:1)*p*Math.pow(2,i-n)};G.write=function(e,t,r,n,o,i){var p,c,u,x=i*8-o-1,_=(1<<x)-1,h=_>>1,y=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=n?0:i-1,C=n?1:-1,vt=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(c=isNaN(t)?1:0,p=_):(p=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-p))<1&&(p--,u*=2),p+h>=1?t+=y/u:t+=y*Math.pow(2,1-h),t*u>=2&&(p++,u/=2),p+h>=_?(c=0,p=_):p+h>=1?(c=(t*u-1)*Math.pow(2,o),p=p+h):(c=t*Math.pow(2,h-1)*Math.pow(2,o),p=0));o>=8;e[r+m]=c&255,m+=C,c/=256,o-=8);for(p=p<<o|c,x+=o;x>0;e[r+m]=p&255,m+=C,p/=256,x-=8);e[r+m-C]|=vt*128}});var yt=N(S=>{"use strict";d();var J=ot(),k=it(),pt=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;S.Buffer=a;S.SlowBuffer=jt;S.INSPECT_MAX_BYTES=50;var H=2147483647;S.kMaxLength=H;a.TYPED_ARRAY_SUPPORT=Yt();!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Yt(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(r){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(!!a.isBuffer(this))return this.buffer}});Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(!!a.isBuffer(this))return this.byteOffset}});function A(e){if(e>H)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,r){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return V(e)}return ut(e,t,r)}a.poolSize=8192;function ut(e,t,r){if(typeof e=="string")return Xt(e,t);if(ArrayBuffer.isView(e))return Gt(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(E(e,ArrayBuffer)||e&&E(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(E(e,SharedArrayBuffer)||e&&E(e.buffer,SharedArrayBuffer)))return O(e,t,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return a.from(n,t,r);var o=Jt(e);if(o)return o;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,t,r){return ut(e,t,r)};Object.setPrototypeOf(a.prototype,Uint8Array.prototype);Object.setPrototypeOf(a,Uint8Array);function ht(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function qt(e,t,r){return ht(e),e<=0?A(e):t!==void 0?typeof r=="string"?A(e).fill(t,r):A(e).fill(t):A(e)}a.alloc=function(e,t,r){return qt(e,t,r)};function V(e){return ht(e),A(e<0?0:K(e)|0)}a.allocUnsafe=function(e){return V(e)};a.allocUnsafeSlow=function(e){return V(e)};function Xt(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=xt(e,t)|0,n=A(r),o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}function j(e){for(var t=e.length<0?0:K(e.length)|0,r=A(t),n=0;n<t;n+=1)r[n]=e[n]&255;return r}function Gt(e){if(E(e,Uint8Array)){var t=new Uint8Array(e);return O(t.buffer,t.byteOffset,t.byteLength)}return j(e)}function O(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return t===void 0&&r===void 0?n=new Uint8Array(e):r===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,r),Object.setPrototypeOf(n,a.prototype),n}function Jt(e){if(a.isBuffer(e)){var t=K(e.length)|0,r=A(t);return r.length===0||e.copy(r,0,0,t),r}if(e.length!==void 0)return typeof e.length!="number"||Z(e.length)?A(0):j(e);if(e.type==="Buffer"&&Array.isArray(e.data))return j(e.data)}function K(e){if(e>=H)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+H.toString(16)+" bytes");return e|0}function jt(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==a.prototype};a.compare=function(t,r){if(E(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),E(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),!a.isBuffer(t)||!a.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var n=t.length,o=r.length,i=0,p=Math.min(n,o);i<p;++i)if(t[i]!==r[i]){n=t[i],o=r[i];break}return n<o?-1:o<n?1:0};a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};a.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return a.alloc(0);var n;if(r===void 0)for(r=0,n=0;n<t.length;++n)r+=t[n].length;var o=a.allocUnsafe(r),i=0;for(n=0;n<t.length;++n){var p=t[n];if(E(p,Uint8Array))i+p.length>o.length?a.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(a.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function xt(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||E(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&r===0)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return wt(e).length;default:if(o)return n?-1:Q(e).length;t=(""+t).toLowerCase(),o=!0}}a.byteLength=xt;function Ot(e,t,r){var n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return nr(this,t,r);case"utf8":case"utf-8":return ft(this,t,r);case"ascii":return rr(this,t,r);case"latin1":case"binary":return er(this,t,r);case"base64":return Pt(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return or(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function I(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}a.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)I(this,r,r+1);return this};a.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)I(this,r,r+3),I(this,r+1,r+2);return this};a.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)I(this,r,r+7),I(this,r+1,r+6),I(this,r+2,r+5),I(this,r+3,r+4);return this};a.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?ft(this,0,t):Ot.apply(this,arguments)};a.prototype.toLocaleString=a.prototype.toString;a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:a.compare(this,t)===0};a.prototype.inspect=function(){var t="",r=S.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"};pt&&(a.prototype[pt]=a.prototype.inspect);a.prototype.compare=function(t,r,n,o,i){if(E(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(r===void 0&&(r=0),n===void 0&&(n=t?t.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||n>t.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=n)return 0;if(o>=i)return-1;if(r>=n)return 1;if(r>>>=0,n>>>=0,o>>>=0,i>>>=0,this===t)return 0;for(var p=i-o,c=n-r,u=Math.min(p,c),x=this.slice(o,i),_=t.slice(r,n),h=0;h<u;++h)if(x[h]!==_[h]){p=x[h],c=_[h];break}return p<c?-1:c<p?1:0};function _t(e,t,r,n,o){if(e.length===0)return-1;if(typeof r=="string"?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Z(r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0)if(o)r=0;else return-1;if(typeof t=="string"&&(t=a.from(t,n)),a.isBuffer(t))return t.length===0?-1:at(e,t,r,n,o);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):at(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function at(e,t,r,n,o){var i=1,p=e.length,c=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;i=2,p/=2,c/=2,r/=2}function u(m,C){return i===1?m[C]:m.readUInt16BE(C*i)}var x;if(o){var _=-1;for(x=r;x<p;x++)if(u(e,x)===u(t,_===-1?0:x-_)){if(_===-1&&(_=x),x-_+1===c)return _*i}else _!==-1&&(x-=x-_),_=-1}else for(r+c>p&&(r=p-c),x=r;x>=0;x--){for(var h=!0,y=0;y<c;y++)if(u(e,x+y)!==u(t,y)){h=!1;break}if(h)return x}return-1}a.prototype.includes=function(t,r,n){return this.indexOf(t,r,n)!==-1};a.prototype.indexOf=function(t,r,n){return _t(this,t,r,n,!0)};a.prototype.lastIndexOf=function(t,r,n){return _t(this,t,r,n,!1)};function Qt(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n),n>o&&(n=o)):n=o;var i=t.length;n>i/2&&(n=i/2);for(var p=0;p<n;++p){var c=parseInt(t.substr(p*2,2),16);if(Z(c))return p;e[r+p]=c}return p}function Vt(e,t,r,n){return Y(Q(t,e.length-r),e,r,n)}function Kt(e,t,r,n){return Y(ar(t),e,r,n)}function Zt(e,t,r,n){return Y(wt(t),e,r,n)}function $t(e,t,r,n){return Y(cr(t,e.length-r),e,r,n)}a.prototype.write=function(t,r,n,o){if(r===void 0)o="utf8",n=this.length,r=0;else if(n===void 0&&typeof r=="string")o=r,n=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((n===void 0||n>i)&&(n=i),t.length>0&&(n<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return Qt(this,t,r,n);case"utf8":case"utf-8":return Vt(this,t,r,n);case"ascii":case"latin1":case"binary":return Kt(this,t,r,n);case"base64":return Zt(this,t,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $t(this,t,r,n);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}};a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Pt(e,t,r){return t===0&&r===e.length?J.fromByteArray(e):J.fromByteArray(e.slice(t,r))}function ft(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i=e[o],p=null,c=i>239?4:i>223?3:i>191?2:1;if(o+c<=r){var u,x,_,h;switch(c){case 1:i<128&&(p=i);break;case 2:u=e[o+1],(u&192)===128&&(h=(i&31)<<6|u&63,h>127&&(p=h));break;case 3:u=e[o+1],x=e[o+2],(u&192)===128&&(x&192)===128&&(h=(i&15)<<12|(u&63)<<6|x&63,h>2047&&(h<55296||h>57343)&&(p=h));break;case 4:u=e[o+1],x=e[o+2],_=e[o+3],(u&192)===128&&(x&192)===128&&(_&192)===128&&(h=(i&15)<<18|(u&63)<<12|(x&63)<<6|_&63,h>65535&&h<1114112&&(p=h))}}p===null?(p=65533,c=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),o+=c}return tr(n)}var ct=4096;function tr(e){var t=e.length;if(t<=ct)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=ct));return r}function rr(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]&127);return n}function er(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function nr(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=ur[e[i]];return o}function or(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+n[i+1]*256);return o}a.prototype.slice=function(t,r){var n=this.length;t=~~t,r=r===void 0?n:~~r,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),r<t&&(r=t);var o=this.subarray(t,r);return Object.setPrototypeOf(o,a.prototype),o};function l(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(t,r,n){t=t>>>0,r=r>>>0,n||l(t,r,this.length);for(var o=this[t],i=1,p=0;++p<r&&(i*=256);)o+=this[t+p]*i;return o};a.prototype.readUintBE=a.prototype.readUIntBE=function(t,r,n){t=t>>>0,r=r>>>0,n||l(t,r,this.length);for(var o=this[t+--r],i=1;r>0&&(i*=256);)o+=this[t+--r]*i;return o};a.prototype.readUint8=a.prototype.readUInt8=function(t,r){return t=t>>>0,r||l(t,1,this.length),this[t]};a.prototype.readUint16LE=a.prototype.readUInt16LE=function(t,r){return t=t>>>0,r||l(t,2,this.length),this[t]|this[t+1]<<8};a.prototype.readUint16BE=a.prototype.readUInt16BE=function(t,r){return t=t>>>0,r||l(t,2,this.length),this[t]<<8|this[t+1]};a.prototype.readUint32LE=a.prototype.readUInt32LE=function(t,r){return t=t>>>0,r||l(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216};a.prototype.readUint32BE=a.prototype.readUInt32BE=function(t,r){return t=t>>>0,r||l(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])};a.prototype.readIntLE=function(t,r,n){t=t>>>0,r=r>>>0,n||l(t,r,this.length);for(var o=this[t],i=1,p=0;++p<r&&(i*=256);)o+=this[t+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o};a.prototype.readIntBE=function(t,r,n){t=t>>>0,r=r>>>0,n||l(t,r,this.length);for(var o=r,i=1,p=this[t+--o];o>0&&(i*=256);)p+=this[t+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p};a.prototype.readInt8=function(t,r){return t=t>>>0,r||l(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]};a.prototype.readInt16LE=function(t,r){t=t>>>0,r||l(t,2,this.length);var n=this[t]|this[t+1]<<8;return n&32768?n|4294901760:n};a.prototype.readInt16BE=function(t,r){t=t>>>0,r||l(t,2,this.length);var n=this[t+1]|this[t]<<8;return n&32768?n|4294901760:n};a.prototype.readInt32LE=function(t,r){return t=t>>>0,r||l(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24};a.prototype.readInt32BE=function(t,r){return t=t>>>0,r||l(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]};a.prototype.readFloatLE=function(t,r){return t=t>>>0,r||l(t,4,this.length),k.read(this,t,!0,23,4)};a.prototype.readFloatBE=function(t,r){return t=t>>>0,r||l(t,4,this.length),k.read(this,t,!1,23,4)};a.prototype.readDoubleLE=function(t,r){return t=t>>>0,r||l(t,8,this.length),k.read(this,t,!0,52,8)};a.prototype.readDoubleBE=function(t,r){return t=t>>>0,r||l(t,8,this.length),k.read(this,t,!1,52,8)};function s(e,t,r,n,o,i){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(t,r,n,o){if(t=+t,r=r>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;s(this,t,r,n,i,0)}var p=1,c=0;for(this[r]=t&255;++c<n&&(p*=256);)this[r+c]=t/p&255;return r+n};a.prototype.writeUintBE=a.prototype.writeUIntBE=function(t,r,n,o){if(t=+t,r=r>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;s(this,t,r,n,i,0)}var p=n-1,c=1;for(this[r+p]=t&255;--p>=0&&(c*=256);)this[r+p]=t/c&255;return r+n};a.prototype.writeUint8=a.prototype.writeUInt8=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,1,255,0),this[r]=t&255,r+1};a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,2,65535,0),this[r]=t&255,this[r+1]=t>>>8,r+2};a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=t&255,r+2};a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=t&255,r+4};a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=t&255,r+4};a.prototype.writeIntLE=function(t,r,n,o){if(t=+t,r=r>>>0,!o){var i=Math.pow(2,8*n-1);s(this,t,r,n,i-1,-i)}var p=0,c=1,u=0;for(this[r]=t&255;++p<n&&(c*=256);)t<0&&u===0&&this[r+p-1]!==0&&(u=1),this[r+p]=(t/c>>0)-u&255;return r+n};a.prototype.writeIntBE=function(t,r,n,o){if(t=+t,r=r>>>0,!o){var i=Math.pow(2,8*n-1);s(this,t,r,n,i-1,-i)}var p=n-1,c=1,u=0;for(this[r+p]=t&255;--p>=0&&(c*=256);)t<0&&u===0&&this[r+p+1]!==0&&(u=1),this[r+p]=(t/c>>0)-u&255;return r+n};a.prototype.writeInt8=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=t&255,r+1};a.prototype.writeInt16LE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,2,32767,-32768),this[r]=t&255,this[r+1]=t>>>8,r+2};a.prototype.writeInt16BE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=t&255,r+2};a.prototype.writeInt32LE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,4,2147483647,-2147483648),this[r]=t&255,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4};a.prototype.writeInt32BE=function(t,r,n){return t=+t,r=r>>>0,n||s(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=t&255,r+4};function lt(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function st(e,t,r,n,o){return t=+t,r=r>>>0,o||lt(e,t,r,4,34028234663852886e22,-34028234663852886e22),k.write(e,t,r,n,23,4),r+4}a.prototype.writeFloatLE=function(t,r,n){return st(this,t,r,!0,n)};a.prototype.writeFloatBE=function(t,r,n){return st(this,t,r,!1,n)};function mt(e,t,r,n,o){return t=+t,r=r>>>0,o||lt(e,t,r,8,17976931348623157e292,-17976931348623157e292),k.write(e,t,r,n,52,8),r+8}a.prototype.writeDoubleLE=function(t,r,n){return mt(this,t,r,!0,n)};a.prototype.writeDoubleBE=function(t,r,n){return mt(this,t,r,!1,n)};a.prototype.copy=function(t,r,n,o){if(!a.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),r>=t.length&&(r=t.length),r||(r=0),o>0&&o<n&&(o=n),o===n||t.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-r<o-n&&(o=t.length-r+n);var i=o-n;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,n,o):Uint8Array.prototype.set.call(t,this.subarray(n,o),r),i};a.prototype.fill=function(t,r,n,o){if(typeof t=="string"){if(typeof r=="string"?(o=r,r=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!a.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(t.length===1){var i=t.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(t=i)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;r=r>>>0,n=n===void 0?this.length:n>>>0,t||(t=0);var p;if(typeof t=="number")for(p=r;p<n;++p)this[p]=t;else{var c=a.isBuffer(t)?t:a.from(t,o),u=c.length;if(u===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(p=0;p<n-r;++p)this[p+r]=c[p%u]}return this};var ir=/[^+/0-9A-Za-z-_]/g;function pr(e){if(e=e.split("=")[0],e=e.trim().replace(ir,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Q(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],p=0;p<n;++p){if(r=e.charCodeAt(p),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}else if(p+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return i}function ar(e){for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r)&255);return t}function cr(e,t){for(var r,n,o,i=[],p=0;p<e.length&&!((t-=2)<0);++p)r=e.charCodeAt(p),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function wt(e){return J.toByteArray(pr(e))}function Y(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function E(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function Z(e){return e!==e}var ur=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=r*16,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}()});var Bt=N((yr,Ft)=>{d();var f=Ft.exports={},F,B;function $(){throw new Error("setTimeout has not been defined")}function P(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?F=setTimeout:F=$}catch(e){F=$}try{typeof clearTimeout=="function"?B=clearTimeout:B=P}catch(e){B=P}})();function dt(e){if(F===setTimeout)return setTimeout(e,0);if((F===$||!F)&&setTimeout)return F=setTimeout,setTimeout(e,0);try{return F(e,0)}catch(t){try{return F.call(null,e,0)}catch(r){return F.call(this,e,0)}}}function hr(e){if(B===clearTimeout)return clearTimeout(e);if((B===P||!B)&&clearTimeout)return B=clearTimeout,clearTimeout(e);try{return B(e)}catch(t){try{return B.call(null,e)}catch(r){return B.call(this,e)}}}var v=[],L=!1,b,q=-1;function xr(){!L||!b||(L=!1,b.length?v=b.concat(v):q=-1,v.length&&gt())}function gt(){if(!L){var e=dt(xr);L=!0;for(var t=v.length;t;){for(b=v,v=[];++q<t;)b&&b[q].run();q=-1,t=v.length}b=null,L=!1,hr(e)}}f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];v.push(new Et(e,t)),v.length===1&&!L&&dt(gt)};function Et(e,t){this.fun=e,this.array=t}Et.prototype.run=function(){this.fun.apply(null,this.array)};f.title="browser";f.browser=!0;f.env={};f.argv=[];f.version="";f.versions={};function U(){}f.on=U;f.addListener=U;f.once=U;f.off=U;f.removeListener=U;f.removeAllListeners=U;f.emit=U;f.prependListener=U;f.prependOnceListener=U;f.listeners=function(e){return[]};f.binding=function(e){throw new Error("process.binding is not supported")};f.cwd=function(){return"/"};f.chdir=function(e){throw new Error("process.chdir is not supported")};f.umask=function(){return 0}});var M,R,dr,d=kt(()=>{M=rt(yt()),R=rt(Bt()),dr=function(e){function t(){var n=this||self;return delete e.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return t();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:t});var r=__magic__;return r}(Object)});var fr={};St(fr,{css:()=>At,default:()=>_r});module.exports=Lt(fr);d();var At=`.dapp-core-component__text__text {
  color: #9dabbd;
}

.dapp-core-component__text__text-white {
  color: #fff;
}

.dapp-core-component__text__text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.dapp-core-component__text__table .dapp-core-component__text__trim-size-xl .dapp-core-component__text__trim {
  max-width: 13rem;
}

.dapp-core-component__text__table .dapp-core-component__text__trim {
  max-width: 10rem;
}

.dapp-core-component__text__table .dapp-core-component__text__trim-only-sm .dapp-core-component__text__trim {
  max-width: none;
}

.dapp-core-component__text__text-justify {
  text-align: justify;
}

.dapp-core-component__text__text-wrap {
  white-space: normal;
}

.dapp-core-component__text__text-nowrap {
  white-space: nowrap;
}

.dapp-core-component__text__text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dapp-core-component__text__text-left {
  text-align: left;
}

.dapp-core-component__text__text-right {
  text-align: right;
}

.dapp-core-component__text__text-center {
  text-align: center;
}

.dapp-core-component__text__text-primary {
  color: #1b46c2;
}

.dapp-core-component__text__text-secondary {
  color: #6c757d;
}

.dapp-core-component__text__text-primary-highlight {
  color: #1b46c2;
}

.dapp-core-component__text__text-muted {
  color: #6c757d;
}

.dapp-core-component__text__text-success {
  color: #28a745;
}

.dapp-core-component__text__text-justify {
  text-align: justify;
}

.dapp-core-component__text__text-wrap {
  white-space: normal;
}

.dapp-core-component__text__text-nowrap {
  white-space: nowrap;
}

.dapp-core-component__text__text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dapp-core-component__text__text-body {
  color: #212529;
}

.dapp-core-component__text__text-muted {
  color: #6c757d;
}

.dapp-core-component__text__text-black-50 {
  color: rgba(0, 0, 0, 0.5);
}

.dapp-core-component__text__text-white-50 {
  color: rgba(255, 255, 255, 0.5);
}

@media (min-width: 992px) {
  .dapp-core-component__text__text-lg-right {
    text-align: right;
  }
}

.dapp-core-component__text__text-hide {
  font: 0/0 a;
  color: rgba(0, 0, 0, 0);
  text-shadow: none;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

.dapp-core-component__text__text-decoration-none {
  text-decoration: none;
}

.dapp-core-component__text__text-break {
  word-break: break-word;
  word-wrap: break-word;
}

.dapp-core-component__text__text-reset {
  color: inherit;
}

.dapp-core-component__text__text-lowercase {
  text-transform: lowercase;
}

.dapp-core-component__text__text-uppercase {
  text-transform: uppercase;
}

.dapp-core-component__text__text-capitalize {
  text-transform: capitalize;
}

.dapp-core-component__text__text-danger {
  color: #d9534f;
}

.dapp-core-component__text__text-warning {
  color: #f0ad4e;
}

.dapp-core-component__text__trim-fs-sm {
  color: inherit;
}

.dapp-core-component__text__text-break {
  word-break: break-word;
  word-wrap: break-word;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(At));var _r={text:"dapp-core-component__text__text","text-white":"dapp-core-component__text__text-white",textWhite:"dapp-core-component__text__text-white","text-monospace":"dapp-core-component__text__text-monospace",textMonospace:"dapp-core-component__text__text-monospace",table:"dapp-core-component__text__table","trim-size-xl":"dapp-core-component__text__trim-size-xl",trimSizeXl:"dapp-core-component__text__trim-size-xl",trim:"dapp-core-component__text__trim","trim-only-sm":"dapp-core-component__text__trim-only-sm",trimOnlySm:"dapp-core-component__text__trim-only-sm","text-justify":"dapp-core-component__text__text-justify",textJustify:"dapp-core-component__text__text-justify","text-wrap":"dapp-core-component__text__text-wrap",textWrap:"dapp-core-component__text__text-wrap","text-nowrap":"dapp-core-component__text__text-nowrap",textNowrap:"dapp-core-component__text__text-nowrap","text-truncate":"dapp-core-component__text__text-truncate",textTruncate:"dapp-core-component__text__text-truncate","text-left":"dapp-core-component__text__text-left",textLeft:"dapp-core-component__text__text-left","text-right":"dapp-core-component__text__text-right",textRight:"dapp-core-component__text__text-right","text-center":"dapp-core-component__text__text-center",textCenter:"dapp-core-component__text__text-center","text-primary":"dapp-core-component__text__text-primary",textPrimary:"dapp-core-component__text__text-primary","text-secondary":"dapp-core-component__text__text-secondary",textSecondary:"dapp-core-component__text__text-secondary","text-primary-highlight":"dapp-core-component__text__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__text__text-primary-highlight","text-muted":"dapp-core-component__text__text-muted",textMuted:"dapp-core-component__text__text-muted","text-success":"dapp-core-component__text__text-success",textSuccess:"dapp-core-component__text__text-success","text-body":"dapp-core-component__text__text-body",textBody:"dapp-core-component__text__text-body","text-black-50":"dapp-core-component__text__text-black-50",textBlack50:"dapp-core-component__text__text-black-50","text-white-50":"dapp-core-component__text__text-white-50",textWhite50:"dapp-core-component__text__text-white-50","text-lg-right":"dapp-core-component__text__text-lg-right",textLgRight:"dapp-core-component__text__text-lg-right","text-hide":"dapp-core-component__text__text-hide",textHide:"dapp-core-component__text__text-hide","text-decoration-none":"dapp-core-component__text__text-decoration-none",textDecorationNone:"dapp-core-component__text__text-decoration-none","text-break":"dapp-core-component__text__text-break",textBreak:"dapp-core-component__text__text-break","text-reset":"dapp-core-component__text__text-reset",textReset:"dapp-core-component__text__text-reset","text-lowercase":"dapp-core-component__text__text-lowercase",textLowercase:"dapp-core-component__text__text-lowercase","text-uppercase":"dapp-core-component__text__text-uppercase",textUppercase:"dapp-core-component__text__text-uppercase","text-capitalize":"dapp-core-component__text__text-capitalize",textCapitalize:"dapp-core-component__text__text-capitalize","text-danger":"dapp-core-component__text__text-danger",textDanger:"dapp-core-component__text__text-danger","text-warning":"dapp-core-component__text__text-warning",textWarning:"dapp-core-component__text__text-warning","trim-fs-sm":"dapp-core-component__text__trim-fs-sm",trimFsSm:"dapp-core-component__text__trim-fs-sm"};0&&(module.exports={css});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=text.js.map
