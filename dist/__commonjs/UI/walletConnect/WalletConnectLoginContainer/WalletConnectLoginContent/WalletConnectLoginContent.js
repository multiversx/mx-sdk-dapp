"use strict";var Wp=Object.create;var yo=Object.defineProperty,Vp=Object.defineProperties,$p=Object.getOwnPropertyDescriptor,Gp=Object.getOwnPropertyDescriptors,Hp=Object.getOwnPropertyNames,Zo=Object.getOwnPropertySymbols,jp=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable;var Tr=(e,o,n)=>o in e?yo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))rt.call(o,n)&&Tr(e,n,o[n]);if(Zo)for(var n of Zo(o))br.call(o,n)&&Tr(e,n,o[n]);return e},A=(e,o)=>Vp(e,Gp(o));var Jo=(e,o)=>{var n={};for(var r in e)rt.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Zo)for(var r of Zo(e))o.indexOf(r)<0&&br.call(e,r)&&(n[r]=e[r]);return n};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var K=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ce=(e,o)=>{for(var n in o)yo(e,n,{get:o[n],enumerable:!0})},wr=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Hp(o))!rt.call(e,a)&&a!==n&&yo(e,a,{get:()=>o[a],enumerable:!(r=$p(o,a))||r.enumerable});return e};var w=(e,o,n)=>(n=e!=null?Wp(jp(e)):{},wr(o||!e||!e.__esModule?yo(n,"default",{value:e,enumerable:!0}):n,e)),ue=e=>wr(yo({},"__esModule",{value:!0}),e);var v=(e,o,n)=>new Promise((r,a)=>{var s=g=>{try{_(n.next(g))}catch(l){a(l)}},m=g=>{try{_(n.throw(g))}catch(l){a(l)}},_=g=>g.done?r(g.value):Promise.resolve(g.value).then(s,m);_((n=n.apply(e,o)).next())});var kr=K(Qo=>{"use strict";t();Qo.byteLength=qp;Qo.toByteArray=Xp;Qo.fromByteArray=Jp;var fe=[],te=[],zp=typeof Uint8Array!="undefined"?Uint8Array:Array,at="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ge=0,Sr=at.length;Ge<Sr;++Ge)fe[Ge]=at[Ge],te[at.charCodeAt(Ge)]=Ge;var Ge,Sr;te["-".charCodeAt(0)]=62;te["_".charCodeAt(0)]=63;function vr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function qp(e){var o=vr(e),n=o[0],r=o[1];return(n+r)*3/4-r}function Kp(e,o,n){return(o+n)*3/4-n}function Xp(e){var o,n=vr(e),r=n[0],a=n[1],s=new zp(Kp(e,r,a)),m=0,_=a>0?r-4:r,g;for(g=0;g<_;g+=4)o=te[e.charCodeAt(g)]<<18|te[e.charCodeAt(g+1)]<<12|te[e.charCodeAt(g+2)]<<6|te[e.charCodeAt(g+3)],s[m++]=o>>16&255,s[m++]=o>>8&255,s[m++]=o&255;return a===2&&(o=te[e.charCodeAt(g)]<<2|te[e.charCodeAt(g+1)]>>4,s[m++]=o&255),a===1&&(o=te[e.charCodeAt(g)]<<10|te[e.charCodeAt(g+1)]<<4|te[e.charCodeAt(g+2)]>>2,s[m++]=o>>8&255,s[m++]=o&255),s}function Yp(e){return fe[e>>18&63]+fe[e>>12&63]+fe[e>>6&63]+fe[e&63]}function Zp(e,o,n){for(var r,a=[],s=o;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(e[s+2]&255),a.push(Yp(r));return a.join("")}function Jp(e){for(var o,n=e.length,r=n%3,a=[],s=16383,m=0,_=n-r;m<_;m+=s)a.push(Zp(e,m,m+s>_?_:m+s));return r===1?(o=e[n-1],a.push(fe[o>>2]+fe[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],a.push(fe[o>>10]+fe[o>>4&63]+fe[o<<2&63]+"=")),a.join("")}});var Ar=K(it=>{t();it.read=function(e,o,n,r,a){var s,m,_=a*8-r-1,g=(1<<_)-1,l=g>>1,y=-7,u=n?a-1:0,T=n?-1:1,b=e[o+u];for(u+=T,s=b&(1<<-y)-1,b>>=-y,y+=_;y>0;s=s*256+e[o+u],u+=T,y-=8);for(m=s&(1<<-y)-1,s>>=-y,y+=r;y>0;m=m*256+e[o+u],u+=T,y-=8);if(s===0)s=1-l;else{if(s===g)return m?NaN:(b?-1:1)*(1/0);m=m+Math.pow(2,r),s=s-l}return(b?-1:1)*m*Math.pow(2,s-r)};it.write=function(e,o,n,r,a,s){var m,_,g,l=s*8-a-1,y=(1<<l)-1,u=y>>1,T=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=r?0:s-1,k=r?1:-1,S=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=y):(m=Math.floor(Math.log(o)/Math.LN2),o*(g=Math.pow(2,-m))<1&&(m--,g*=2),m+u>=1?o+=T/g:o+=T*Math.pow(2,1-u),o*g>=2&&(m++,g/=2),m+u>=y?(_=0,m=y):m+u>=1?(_=(o*g-1)*Math.pow(2,a),m=m+u):(_=o*Math.pow(2,u-1)*Math.pow(2,a),m=0));a>=8;e[n+b]=_&255,b+=k,_/=256,a-=8);for(m=m<<a|_,l+=a;l>0;e[n+b]=m&255,b+=k,m/=256,l-=8);e[n+b-k]|=S*128}});var Ur=K(to=>{"use strict";t();var ct=kr(),no=Ar(),Cr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;to.Buffer=d;to.SlowBuffer=rs;to.INSPECT_MAX_BYTES=50;var en=2147483647;to.kMaxLength=en;d.TYPED_ARRAY_SUPPORT=Qp();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Qp(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function Ie(e){if(e>en)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _t(e)}return Lr(e,o,n)}d.poolSize=8192;function Lr(e,o,n){if(typeof e=="string")return os(e,o);if(ArrayBuffer.isView(e))return ns(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(he(e,ArrayBuffer)||e&&he(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(he(e,SharedArrayBuffer)||e&&he(e.buffer,SharedArrayBuffer)))return st(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return d.from(r,o,n);var a=ts(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,n){return Lr(e,o,n)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Er(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function es(e,o,n){return Er(e),e<=0?Ie(e):o!==void 0?typeof n=="string"?Ie(e).fill(o,n):Ie(e).fill(o):Ie(e)}d.alloc=function(e,o,n){return es(e,o,n)};function _t(e){return Er(e),Ie(e<0?0:dt(e)|0)}d.allocUnsafe=function(e){return _t(e)};d.allocUnsafeSlow=function(e){return _t(e)};function os(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=Nr(e,o)|0,r=Ie(n),a=r.write(e,o);return a!==n&&(r=r.slice(0,a)),r}function pt(e){for(var o=e.length<0?0:dt(e.length)|0,n=Ie(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function ns(e){if(he(e,Uint8Array)){var o=new Uint8Array(e);return st(o.buffer,o.byteOffset,o.byteLength)}return pt(e)}function st(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,d.prototype),r}function ts(e){if(d.isBuffer(e)){var o=dt(e.length)|0,n=Ie(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||lt(e.length)?Ie(0):pt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return pt(e.data)}function dt(e){if(e>=en)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+en.toString(16)+" bytes");return e|0}function rs(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,n){if(he(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),he(n,Uint8Array)&&(n=d.from(n,n.offset,n.byteLength)),!d.isBuffer(o)||!d.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,a=n.length,s=0,m=Math.min(r,a);s<m;++s)if(o[s]!==n[s]){r=o[s],a=n[s];break}return r<a?-1:a<r?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var a=d.allocUnsafe(n),s=0;for(r=0;r<o.length;++r){var m=o[r];if(he(m,Uint8Array))s+m.length>a.length?d.from(m).copy(a,s):Uint8Array.prototype.set.call(a,m,s);else if(d.isBuffer(m))m.copy(a,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=m.length}return a};function Nr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||he(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return mt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Br(e).length;default:if(a)return r?-1:mt(e).length;o=(""+o).toLowerCase(),a=!0}}d.byteLength=Nr;function as(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return us(this,o,n);case"utf8":case"utf-8":return Dr(this,o,n);case"ascii":return ls(this,o,n);case"latin1":case"binary":return gs(this,o,n);case"base64":return _s(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fs(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}d.prototype._isBuffer=!0;function He(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)He(this,n,n+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)He(this,n,n+3),He(this,n+1,n+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)He(this,n,n+7),He(this,n+1,n+6),He(this,n+2,n+5),He(this,n+3,n+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Dr(this,0,o):as.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",n=to.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};Cr&&(d.prototype[Cr]=d.prototype.inspect);d.prototype.compare=function(o,n,r,a,s){if(he(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),a===void 0&&(a=0),s===void 0&&(s=this.length),n<0||r>o.length||a<0||s>this.length)throw new RangeError("out of range index");if(a>=s&&n>=r)return 0;if(a>=s)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,a>>>=0,s>>>=0,this===o)return 0;for(var m=s-a,_=r-n,g=Math.min(m,_),l=this.slice(a,s),y=o.slice(n,r),u=0;u<g;++u)if(l[u]!==y[u]){m=l[u],_=y[u];break}return m<_?-1:_<m?1:0};function Rr(e,o,n,r,a){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,lt(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0)if(a)n=0;else return-1;if(typeof o=="string"&&(o=d.from(o,r)),d.isBuffer(o))return o.length===0?-1:Pr(e,o,n,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):Pr(e,[o],n,r,a);throw new TypeError("val must be string, number or Buffer")}function Pr(e,o,n,r,a){var s=1,m=e.length,_=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,m/=2,_/=2,n/=2}function g(b,k){return s===1?b[k]:b.readUInt16BE(k*s)}var l;if(a){var y=-1;for(l=n;l<m;l++)if(g(e,l)===g(o,y===-1?0:l-y)){if(y===-1&&(y=l),l-y+1===_)return y*s}else y!==-1&&(l-=l-y),y=-1}else for(n+_>m&&(n=m-_),l=n;l>=0;l--){for(var u=!0,T=0;T<_;T++)if(g(e,l+T)!==g(o,T)){u=!1;break}if(u)return l}return-1}d.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};d.prototype.indexOf=function(o,n,r){return Rr(this,o,n,r,!0)};d.prototype.lastIndexOf=function(o,n,r){return Rr(this,o,n,r,!1)};function is(e,o,n,r){n=Number(n)||0;var a=e.length-n;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var m=0;m<r;++m){var _=parseInt(o.substr(m*2,2),16);if(lt(_))return m;e[n+m]=_}return m}function cs(e,o,n,r){return on(mt(o,e.length-n),e,n,r)}function ps(e,o,n,r){return on(ys(o),e,n,r)}function ss(e,o,n,r){return on(Br(o),e,n,r)}function ms(e,o,n,r){return on(Ts(o,e.length-n),e,n,r)}d.prototype.write=function(o,n,r,a){if(n===void 0)a="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")a=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-n;if((r===void 0||r>s)&&(r=s),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var m=!1;;)switch(a){case"hex":return is(this,o,n,r);case"utf8":case"utf-8":return cs(this,o,n,r);case"ascii":case"latin1":case"binary":return ps(this,o,n,r);case"base64":return ss(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ms(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _s(e,o,n){return o===0&&n===e.length?ct.fromByteArray(e):ct.fromByteArray(e.slice(o,n))}function Dr(e,o,n){n=Math.min(e.length,n);for(var r=[],a=o;a<n;){var s=e[a],m=null,_=s>239?4:s>223?3:s>191?2:1;if(a+_<=n){var g,l,y,u;switch(_){case 1:s<128&&(m=s);break;case 2:g=e[a+1],(g&192)===128&&(u=(s&31)<<6|g&63,u>127&&(m=u));break;case 3:g=e[a+1],l=e[a+2],(g&192)===128&&(l&192)===128&&(u=(s&15)<<12|(g&63)<<6|l&63,u>2047&&(u<55296||u>57343)&&(m=u));break;case 4:g=e[a+1],l=e[a+2],y=e[a+3],(g&192)===128&&(l&192)===128&&(y&192)===128&&(u=(s&15)<<18|(g&63)<<12|(l&63)<<6|y&63,u>65535&&u<1114112&&(m=u))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),a+=_}return ds(r)}var Ir=4096;function ds(e){var o=e.length;if(o<=Ir)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=Ir));return n}function ls(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]&127);return r}function gs(e,o,n){var r="";n=Math.min(e.length,n);for(var a=o;a<n;++a)r+=String.fromCharCode(e[a]);return r}function us(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var a="",s=o;s<n;++s)a+=bs[e[s]];return a}function fs(e,o,n){for(var r=e.slice(o,n),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}d.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var a=this.subarray(o,n);return Object.setPrototypeOf(a,d.prototype),a};function W(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||W(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return a};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||W(o,n,this.length);for(var a=this[o+--n],s=1;n>0&&(s*=256);)a+=this[o+--n]*s;return a};d.prototype.readUint8=d.prototype.readUInt8=function(o,n){return o=o>>>0,n||W(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||W(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||W(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||W(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||W(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||W(o,n,this.length);for(var a=this[o],s=1,m=0;++m<n&&(s*=256);)a+=this[o+m]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*n)),a};d.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||W(o,n,this.length);for(var a=n,s=1,m=this[o+--a];a>0&&(s*=256);)m+=this[o+--a]*s;return s*=128,m>=s&&(m-=Math.pow(2,8*n)),m};d.prototype.readInt8=function(o,n){return o=o>>>0,n||W(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,n){o=o>>>0,n||W(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};d.prototype.readInt16BE=function(o,n){o=o>>>0,n||W(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};d.prototype.readInt32LE=function(o,n){return o=o>>>0,n||W(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,n){return o=o>>>0,n||W(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,n){return o=o>>>0,n||W(o,4,this.length),no.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,n){return o=o>>>0,n||W(o,4,this.length),no.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||W(o,8,this.length),no.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||W(o,8,this.length),no.read(this,o,!1,52,8)};function X(e,o,n,r,a,s){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;X(this,o,n,r,s,0)}var m=1,_=0;for(this[n]=o&255;++_<r&&(m*=256);)this[n+_]=o/m&255;return n+r};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,r=r>>>0,!a){var s=Math.pow(2,8*r)-1;X(this,o,n,r,s,0)}var m=r-1,_=1;for(this[n+m]=o&255;--m>=0&&(_*=256);)this[n+m]=o/_&255;return n+r};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,1,255,0),this[n]=o&255,n+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};d.prototype.writeIntLE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);X(this,o,n,r,s-1,-s)}var m=0,_=1,g=0;for(this[n]=o&255;++m<r&&(_*=256);)o<0&&g===0&&this[n+m-1]!==0&&(g=1),this[n+m]=(o/_>>0)-g&255;return n+r};d.prototype.writeIntBE=function(o,n,r,a){if(o=+o,n=n>>>0,!a){var s=Math.pow(2,8*r-1);X(this,o,n,r,s-1,-s)}var m=r-1,_=1,g=0;for(this[n+m]=o&255;--m>=0&&(_*=256);)o<0&&g===0&&this[n+m+1]!==0&&(g=1),this[n+m]=(o/_>>0)-g&255;return n+r};d.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};d.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};d.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};d.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};d.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||X(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function Or(e,o,n,r,a,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Mr(e,o,n,r,a){return o=+o,n=n>>>0,a||Or(e,o,n,4,34028234663852886e22,-34028234663852886e22),no.write(e,o,n,r,23,4),n+4}d.prototype.writeFloatLE=function(o,n,r){return Mr(this,o,n,!0,r)};d.prototype.writeFloatBE=function(o,n,r){return Mr(this,o,n,!1,r)};function Fr(e,o,n,r,a){return o=+o,n=n>>>0,a||Or(e,o,n,8,17976931348623157e292,-17976931348623157e292),no.write(e,o,n,r,52,8),n+8}d.prototype.writeDoubleLE=function(o,n,r){return Fr(this,o,n,!0,r)};d.prototype.writeDoubleBE=function(o,n,r){return Fr(this,o,n,!1,r)};d.prototype.copy=function(o,n,r,a){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),n>=o.length&&(n=o.length),n||(n=0),a>0&&a<r&&(a=r),a===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),o.length-n<a-r&&(a=o.length-n+r);var s=a-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,a):Uint8Array.prototype.set.call(o,this.subarray(r,a),n),s};d.prototype.fill=function(o,n,r,a){if(typeof o=="string"){if(typeof n=="string"?(a=n,n=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!d.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(o.length===1){var s=o.charCodeAt(0);(a==="utf8"&&s<128||a==="latin1")&&(o=s)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,a),g=_.length;if(g===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=_[m%g]}return this};var hs=/[^+/0-9A-Za-z-_]/g;function xs(e){if(e=e.split("=")[0],e=e.trim().replace(hs,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function mt(e,o){o=o||1/0;for(var n,r=e.length,a=null,s=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!a){if(n>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(o-=3)>-1&&s.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((o-=1)<0)break;s.push(n)}else if(n<2048){if((o-=2)<0)break;s.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;s.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return s}function ys(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function Ts(e,o){for(var n,r,a,s=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,a=n%256,s.push(a),s.push(r);return s}function Br(e){return ct.toByteArray(xs(e))}function on(e,o,n,r){for(var a=0;a<r&&!(a+n>=o.length||a>=e.length);++a)o[a+n]=e[a];return a}function he(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function lt(e){return e!==e}var bs=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,a=0;a<16;++a)o[r+a]=e[n]+e[a];return o}()});var Hr=K((kd,Gr)=>{t();var R=Gr.exports={},xe,ye;function gt(){throw new Error("setTimeout has not been defined")}function ut(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?xe=setTimeout:xe=gt}catch(e){xe=gt}try{typeof clearTimeout=="function"?ye=clearTimeout:ye=ut}catch(e){ye=ut}})();function Wr(e){if(xe===setTimeout)return setTimeout(e,0);if((xe===gt||!xe)&&setTimeout)return xe=setTimeout,setTimeout(e,0);try{return xe(e,0)}catch(o){try{return xe.call(null,e,0)}catch(n){return xe.call(this,e,0)}}}function ws(e){if(ye===clearTimeout)return clearTimeout(e);if((ye===ut||!ye)&&clearTimeout)return ye=clearTimeout,clearTimeout(e);try{return ye(e)}catch(o){try{return ye.call(null,e)}catch(n){return ye.call(this,e)}}}var Le=[],ro=!1,je,nn=-1;function Ss(){!ro||!je||(ro=!1,je.length?Le=je.concat(Le):nn=-1,Le.length&&Vr())}function Vr(){if(!ro){var e=Wr(Ss);ro=!0;for(var o=Le.length;o;){for(je=Le,Le=[];++nn<o;)je&&je[nn].run();nn=-1,o=Le.length}je=null,ro=!1,ws(e)}}R.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];Le.push(new $r(e,o)),Le.length===1&&!ro&&Wr(Vr)};function $r(e,o){this.fun=e,this.array=o}$r.prototype.run=function(){this.fun.apply(null,this.array)};R.title="browser";R.browser=!0;R.env={};R.argv=[];R.version="";R.versions={};function Ee(){}R.on=Ee;R.addListener=Ee;R.once=Ee;R.off=Ee;R.removeListener=Ee;R.removeAllListeners=Ee;R.emit=Ee;R.prependListener=Ee;R.prependOnceListener=Ee;R.listeners=function(e){return[]};R.binding=function(e){throw new Error("process.binding is not supported")};R.cwd=function(){return"/"};R.chdir=function(e){throw new Error("process.chdir is not supported")};R.umask=function(){return 0}});var i,p,vs,c,t=h(()=>{i=w(Ur()),p=w(Hr()),vs=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),c=vs});var zr=h(()=>{"use strict";t()});var qr=h(()=>{"use strict";t()});var Kr=h(()=>{"use strict";t()});var ft,Xr=h(()=>{"use strict";t();ft=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ft||{})});var Yr=h(()=>{"use strict";t()});var ht=h(()=>{"use strict";t()});var Zr=h(()=>{"use strict";t()});var Jr=h(()=>{"use strict";t()});var Qr=h(()=>{"use strict";t()});var ea=h(()=>{"use strict";t()});var To,ao,tn=h(()=>{"use strict";t();To=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),ao=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Te,oa,Bd,na,Ud,re=h(()=>{"use strict";t();tn();Te=(T=>(T.ledger="ledger",T.walletconnect="walletconnect",T.walletconnectv2="walletconnectv2",T.wallet="wallet",T.crossWindow="crossWindow",T.iframe="iframe",T.extension="extension",T.passkey="passkey",T.metamask="metamask",T.opera="opera",T.extra="extra",T.none="",T))(Te||{}),oa=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(oa||{}),Bd=f(f({},ao.WindowProviderRequestEnums),oa),na=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(na||{}),Ud=f(f({},ao.WindowProviderResponseEnums),na)});var ta=h(()=>{"use strict";t()});var ra=h(()=>{"use strict";t()});var Y=h(()=>{"use strict";t()});var aa=h(()=>{"use strict";t()});var ia=h(()=>{"use strict";t()});var ca=h(()=>{"use strict";t()});var q=h(()=>{"use strict";t();Jr();Qr();ea();re();ta();ra();Y();aa();ia();ca()});var xt,pa,nl,sa,tl,ma,rl,al,il,_a=h(()=>{"use strict";t();q();xt={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:pa,egldLabel:nl}=xt["devnet"],{chainId:sa,egldLabel:tl}=xt["testnet"],{chainId:ma,egldLabel:rl}=xt["mainnet"],al={["devnet"]:pa,["testnet"]:sa,["mainnet"]:ma},il={[pa]:"devnet",[sa]:"testnet",[ma]:"mainnet"}});var yt=h(()=>{"use strict";t()});var be,da=h(()=>{"use strict";t();be=require("@multiversx/sdk-web-wallet-provider")});var we,rn=h(()=>{"use strict";t();we=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var la,ga,Tt,dl,ll,ua=h(()=>{"use strict";t();rn();Tt=String((ga=(la=we.safeWindow)==null?void 0:la.navigator)==null?void 0:ga.userAgent),dl=/^((?!chrome|android).)*safari/i.test(Tt),ll=/firefox/i.test(Tt)&&/windows/i.test(Tt)});var bt,wt,fa,an,ha,io,P=h(()=>{"use strict";t();zr();qr();Kr();Xr();Yr();ht();Zr();_a();yt();da();ua();bt=5e4,wt=1e9,fa=1,an="logout",ha="login",io="0"});var qe,bo=h(()=>{"use strict";t();qe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var St={};ce(St,{css:()=>ya,default:()=>As});var ya,As,vt=h(()=>{"use strict";t();ya=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ya));As={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var co,cn=h(()=>{"use strict";t();co=()=>Date.now()/1e3});var wa=h(()=>{"use strict";t()});var Sa=h(()=>{"use strict";t()});var va=h(()=>{"use strict";t();cn();wa();Sa()});var At={};ce(At,{clear:()=>Ns,getItem:()=>Ls,localStorageKeys:()=>pe,removeItem:()=>Es,setItem:()=>Is});var pe,pn,Is,Ls,Es,Ns,po=h(()=>{"use strict";t();va();pe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},pn=typeof localStorage!="undefined",Is=({key:e,data:o,expires:n})=>{!pn||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Ls=e=>{if(!pn)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:co()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},Es=e=>{!pn||localStorage.removeItem(String(e))},Ns=()=>{!pn||localStorage.clear()}});var Ct={};ce(Ct,{clear:()=>Pa,getItem:()=>Aa,removeItem:()=>Ca,setItem:()=>ka,storage:()=>Rs});var ka,Aa,Ca,Pa,Rs,Ia=h(()=>{"use strict";t();ka=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},Aa=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},Ca=e=>sessionStorage.removeItem(String(e)),Pa=()=>sessionStorage.clear(),Rs={setItem:ka,getItem:Aa,removeItem:Ca,clear:Pa}});var Se,So=h(()=>{"use strict";t();po();Ia();Se={session:Ct,local:At}});var Pt,N,Ke,Z=h(()=>{"use strict";t();Pt=require("@reduxjs/toolkit");P();N=(0,Pt.createAction)(an),Ke=(0,Pt.createAction)(ha,e=>({payload:e}))});var Lt,La,Ea,sn,It,Na,Et,Jl,Nt,Ql,eg,og,ng,tg,rg,ag,ig,mn,_n=h(()=>{"use strict";t();Lt=require("@multiversx/sdk-core"),La=require("@reduxjs/toolkit"),Ea=require("redux-persist");P();So();po();Z();sn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:io},It={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":sn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Na=(0,La.createSlice)({name:"accountInfoSlice",initialState:It,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new Lt.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:sn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(N,()=>(Se.local.removeItem(pe.loginExpiresAt),It)),e.addCase(Ke,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new Lt.Address(r).hex()}),e.addCase(Ea.REHYDRATE,(o,n)=>{var l;if(!((l=n.payload)!=null&&l.account))return;let{account:r}=n.payload,{address:a,shard:s,accounts:m,publicKey:_}=r;o.address=a,o.shard=s;let g=m&&a in m;o.accounts=g?m:It.accounts,o.publicKey=_})}}),{setAccount:Et,setAddress:Jl,setAccountNonce:Nt,setAccountShard:Ql,setLedgerAccount:eg,updateLedgerAccount:og,setWalletConnectAccount:ng,setIsAccountLoading:tg,setAccountLoadingError:rg,setWebsocketEvent:ag,setWebsocketBatchEvent:ig}=Na.actions,mn=Na.reducer});function vo(){return new Date().setHours(new Date().getHours()+24)}function ko(e){Se.local.setItem({key:pe.loginExpiresAt,data:e,expires:e})}var Rt=h(()=>{"use strict";t();So();po()});var Da,Ra,Oa,fg,Ma,hg,dn,xg,yg,Fa,Tg,bg,wg,ln,gn=h(()=>{"use strict";t();Da=require("@reduxjs/toolkit");Rt();re();Z();Ra={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Oa=(0,Da.createSlice)({name:"loginInfoSlice",initialState:Ra,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(N,()=>Ra),e.addCase(Ke,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,ko(vo())})}}),{setLoginMethod:fg,setWalletConnectLogin:Ma,setLedgerLogin:hg,setTokenLogin:dn,setTokenLoginSignature:xg,setWalletLogin:yg,invalidateLoginSession:Fa,setLogoutRoute:Tg,setIsWalletConnectV2Initialized:bg,setWebviewLogin:wg}=Oa.actions,ln=Oa.reducer});var Ua,Ba,Wa,Ag,Cg,Pg,Ig,un,fn=h(()=>{"use strict";t();Ua=require("@reduxjs/toolkit");Z();Ba={},Wa=(0,Ua.createSlice)({name:"modalsSlice",initialState:Ba,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(N,()=>Ba)}}),{setTxSubmittedModal:Ag,setNotificationModal:Cg,clearTxSubmittedModal:Pg,clearNotificationModal:Ig}=Wa.actions,un=Wa.reducer});var U,se=h(()=>{"use strict";t();bo();U=()=>{if(!qe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:a,search:s}}=window;return{pathname:o,hash:n,origin:r,href:a,search:s}}});var Dt,Va=h(()=>{"use strict";t();se();Dt=(e="")=>{let o=U(),n=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||n?e:`${o.origin}/${e.replace("/","")}`}});var $a=h(()=>{"use strict";t();so()});var Ga,Ha=h(()=>{"use strict";t();rn();Ga=e=>{if(!we.safeWindow.location)return;if(!new URL(we.safeWindow.location.href).protocol.startsWith("http"))return we.safeWindow.location.reload();we.safeWindow.location.assign(e)}});var so=h(()=>{"use strict";t();Va();$a();se();Ha()});var ja,za,hn,Ot=h(()=>{"use strict";t();so();ja=!1,za=(e=!0)=>{ja=e},hn=({timeout:e=0,url:o})=>{ja||setTimeout(()=>{if(!!window)return Ga(o)},e)}});function qa({callbackRoute:e,onLoginRedirect:o,options:n}){let r=Boolean(e),a=typeof o=="function";if(r&&e!=null){if(a)return o(e,n);hn({url:e,timeout:Ds})}}var Ds,Ka=h(()=>{"use strict";t();Ot();Ds=200});function Xa(e){return e[Math.floor(Math.random()*e.length)]}var Ya=h(()=>{"use strict";t()});var Za=h(()=>{"use strict";t();ht()});var Mt=h(()=>{"use strict";t();Ka();Ya();Za()});var Ja,Qa,ei,Ft,Ms,oi,iu,cu,pu,xn,yn=h(()=>{"use strict";t();Ja=require("@reduxjs/toolkit"),Qa=w(require("lodash.omit")),ei=require("redux-persist");yt();Z();Mt();Ft={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Ms={network:Ft},oi=(0,Ja.createSlice)({name:"appConfig",initialState:Ms,reducers:{initializeNetworkConfig:(e,o)=>{let n=Xa(o.payload.walletConnectV2RelayAddresses),r=(0,Qa.default)(o.payload,"walletConnectV2RelayAddresses");e.network=A(f(f({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=f(f({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(N,o=>{o.network.customWalletAddress=void 0}),e.addCase(ei.REHYDRATE,(o,n)=>{var a,s;if(!((s=(a=n.payload)==null?void 0:a.network)!=null&&s.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:iu,updateNetworkConfig:cu,setCustomWalletAddress:pu}=oi.actions,xn=oi.reducer});var ni,Bt,ti,gu,uu,fu,Tn,bn=h(()=>{"use strict";t();ni=require("@reduxjs/toolkit");q();Z();Bt={isSigning:!1,signedSessions:{}},ti=(0,ni.createSlice)({name:"signedMessageInfoSliceState",initialState:Bt,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:a}=o.payload;a&&(e.errorMessage=a),e.isSigning=r.status==="pending",e.signedSessions[n]=f(f({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>f(f({},e),o.payload),clearSignedMessageInfo:()=>Bt},extraReducers:e=>{e.addCase(N,()=>Bt)}}),{setSignSession:gu,clearSignedMessageInfo:uu,setSignSessionState:fu}=ti.actions,Tn=ti.reducer});var ai,ii,ri,ci,Su,vu,ku,Au,wn,Sn=h(()=>{"use strict";t();ai=require("@reduxjs/toolkit"),ii=require("redux-persist");q();cn();Z();ri={customToasts:[],transactionToasts:[]},ci=(0,ai.createSlice)({name:"toastsSlice",initialState:ri,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(a=>a.toastId===n);if(r!==-1){e.customToasts[r]=A(f(f({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(A(f({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:co(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(N,()=>ri),e.addCase(ii.REHYDRATE,(o,n)=>{var a,s;let r=(s=(a=n.customToasts)==null?void 0:a.filter(m=>!("component"in m)))!=null?s:[];o.customToasts=r})}}),{addCustomToast:Su,removeCustomToast:vu,addTransactionToast:ku,removeTransactionToast:Au}=ci.actions,wn=ci.reducer});var pi,Wt,Vt,$t,Fs,Ut,si,Lu,Eu,Nu,vn,kn=h(()=>{"use strict";t();pi=require("@reduxjs/toolkit");Z();Wt="Transaction failed",Vt="Transaction successful",$t="Processing transaction",Fs="Transaction submitted",Ut={},si=(0,pi.createSlice)({name:"transactionsInfo",initialState:Ut,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Wt,successMessage:(r==null?void 0:r.successMessage)||Vt,processingMessage:(r==null?void 0:r.processingMessage)||$t,submittedMessage:(r==null?void 0:r.submittedMessage)||Fs,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ut},extraReducers:e=>{e.addCase(N,()=>Ut)}}),{clearTransactionsInfo:Lu,setTransactionsDisplayInfo:Eu,clearTransactionsInfoForSessionId:Nu}=si.actions,vn=si.reducer});function mi(e){return e!=null&&(Ks(e)||Qs(e))}function An(e){return e!=null&&(Xs(e)||em(e))}function Cn(e){return e!=null&&(Ys(e)||om(e))}function _i(e){return e!=null&&(Zs(e)||nm(e))}function di(e){return e!=null&&Js(e)}function Ks(e){return e!=null&&Us.includes(e)}function Xs(e){return e!=null&&Ws.includes(e)}function Ys(e){return e!=null&&Vs.includes(e)}function Zs(e){return e!=null&&$s.includes(e)}function Js(e){return e!=null&&Gs.includes(e)}function Qs(e){return e!=null&&Hs.includes(e)}function em(e){return e!=null&&js.includes(e)}function om(e){return e!=null&&zs.includes(e)}function nm(e){return e!=null&&qs.includes(e)}var Us,Ws,Vs,$s,Gs,Hs,js,zs,qs,Ht=h(()=>{"use strict";t();re();Us=["sent"],Ws=["success"],Vs=["fail","cancelled","timedOut"],$s=["invalid"],Gs=["timedOut"],Hs=["pending"],js=["success"],zs=["fail","invalid"],qs=["not executed"]});var li,gi,Ao,tm,ui,Vu,$u,Gu,Hu,ju,zu,qu,Ku,Xu,Yu,Zu,Pn,In=h(()=>{"use strict";t();li=require("@reduxjs/toolkit"),gi=require("redux-persist");re();Ht();Z();Ao={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},tm={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ui=(0,li.createSlice)({name:"transactionsSlice",initialState:Ao,reducers:{moveTransactionsToSignedState:(e,o)=>{var g,l;let{sessionId:n,transactions:r,errorMessage:a,status:s,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[n]=f(f(f({},tm),((g=e.signedTransactions[n])==null?void 0:g.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:s,errorMessage:a,redirectRoute:m,customTransactionInformation:f(f({},e.customTransactionInformationForSessionId[n]),_!=null?_:{})},((l=e==null?void 0:e.transactionsToSign)==null?void 0:l.sessionId)===n&&(e.transactionsToSign=Ao.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=f(f({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:a,transactions:s}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,a!=null&&(e.signedTransactions[n].errorMessage=a),s!=null&&(e.signedTransactions[n].transactions=s))},updateSignedTransactionStatus:(e,o)=>{var l,y,u,T,b,k,S,V;let{sessionId:n,status:r,errorMessage:a,transactionHash:s,serverTransaction:m,inTransit:_}=o.payload,g=(y=(l=e.signedTransactions)==null?void 0:l[n])==null?void 0:y.transactions;if(g!=null){e.signedTransactions[n].transactions=g.map(M=>M.hash===s?A(f(f({},m!=null?m:{}),M),{status:r,errorMessage:a,inTransit:_}):M);let $=(T=(u=e.signedTransactions[n])==null?void 0:u.transactions)==null?void 0:T.every(M=>An(M.status)),H=(k=(b=e.signedTransactions[n])==null?void 0:b.transactions)==null?void 0:k.some(M=>Cn(M.status)),le=(V=(S=e.signedTransactions[n])==null?void 0:S.transactions)==null?void 0:V.every(M=>_i(M.status));$&&(e.signedTransactions[n].status="success"),H&&(e.signedTransactions[n].status="fail"),le&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ao.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ao.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=f(f({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(N,()=>Ao),e.addCase(gi.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:a}=n.payload.transactions,s=Object.entries(r).reduce((_,[g,l])=>{let y=new Date(g),u=new Date;return u.setHours(u.getHours()+5),u-y>0||(_[g]=l),_},{});a!=null&&(o.customTransactionInformationForSessionId=a),r!=null&&(o.signedTransactions=s)})}}),{updateSignedTransactionStatus:Vu,updateSignedTransactions:$u,setTransactionsToSign:Gu,clearAllTransactionsToSign:Hu,clearAllSignedTransactions:ju,clearSignedTransaction:zu,clearTransactionToSign:qu,setSignTransactionsError:Ku,setSignTransactionsCancelMessage:Xu,moveTransactionsToSignedState:Yu,updateSignedTransactionsCustomTransactionInformation:Zu}=ui.actions,Pn=ui.reducer});var fi,jt,hi,of,nf,tf,rf,Ln,En=h(()=>{"use strict";t();fi=require("@reduxjs/toolkit");Z();jt={},hi=(0,fi.createSlice)({name:"batchTransactionsSlice",initialState:jt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>jt},extraReducers:e=>{e.addCase(N,()=>jt)}}),{setBatchTransactions:of,updateBatchTransactions:nf,clearBatchTransactions:tf,clearAllBatchTransactions:rf}=hi.actions,Ln=hi.reducer});var yi,xi,Ti,sf,bi,zt=h(()=>{"use strict";t();yi=require("@reduxjs/toolkit");Z();xi={},Ti=(0,yi.createSlice)({name:"dappConfigSlice",initialState:xi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(N,()=>xi)}}),{setDappConfig:sf}=Ti.actions,bi=Ti.reducer});var ve=h(()=>{"use strict";t();_n();gn();fn();yn();bn();Sn();kn();In();En();zt()});var qt=h(()=>{"use strict";t()});var vi,cm,pm,Xe,Dn=h(()=>{"use strict";t();vi=require("@reduxjs/toolkit");qt();_n();En();zt();gn();fn();yn();bn();Sn();kn();In();cm={["account"]:mn,["dappConfig"]:bi,["loginInfo"]:ln,["modals"]:un,["networkConfig"]:xn,["signedMessageInfo"]:Tn,["toasts"]:wn,["transactionsInfo"]:vn,["transactions"]:Pn,["batchTransactions"]:Ln},pm=(e={})=>(0,vi.combineReducers)(f(f({},cm),e)),Xe=pm});var Pi={};ce(Pi,{default:()=>vm,sessionStorageReducers:()=>Kt});function Ne(e,o=[]){return{key:e,version:1,storage:Ai.default,blacklist:o}}var J,ki,Ai,sm,Co,mm,_m,dm,lm,gm,um,fm,hm,xm,ym,Ci,Tm,Kt,bm,wm,Sm,vm,Ii=h(()=>{"use strict";t();J=require("redux-persist"),ki=w(require("redux-persist/lib/storage")),Ai=w(require("redux-persist/lib/storage/session"));Dn();ve();_n();En();gn();fn();yn();bn();Sn();kn();In();qt();sm={persistReducersStorageType:"localStorage"},Co={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},mm=Ne(Co["account"]),_m=Ne(Co["loginInfo"]),dm=Ne(Co["modals"]),lm=Ne(Co["networkConfig"]),gm={2:e=>A(f({},e),{networkConfig:Ft})};um=Ne("sdk-dapp-transactionsInfo"),fm=Ne("sdk-dapp-transactions",["transactionsToSign"]),hm=Ne("sdk-dapp-batchTransactions",["batchTransactions"]),xm=Ne("sdk-dapp-toasts"),ym=Ne("sdk-dapp-signedMessageInfo"),Ci={key:"sdk-dapp-store",version:2,storage:ki.default,whitelist:Object.keys(Co),migrate:(0,J.createMigrate)(gm,{debug:!1})},Tm=A(f({},Ci),{whitelist:[]}),Kt={["toasts"]:(0,J.persistReducer)(xm,wn),["transactions"]:(0,J.persistReducer)(fm,Pn),["transactionsInfo"]:(0,J.persistReducer)(um,vn),["batchTransactions"]:(0,J.persistReducer)(hm,Ln),["signedMessageInfo"]:(0,J.persistReducer)(ym,Tn)},bm=A(f({},Kt),{["account"]:(0,J.persistReducer)(mm,mn),["loginInfo"]:(0,J.persistReducer)(_m,ln),["modals"]:(0,J.persistReducer)(dm,un),["networkConfig"]:(0,J.persistReducer)(lm,xn)}),wm=sm.persistReducersStorageType==="localStorage",Sm=wm?(0,J.persistReducer)(Ci,Xe(Kt)):(0,J.persistReducer)(Tm,Xe(bm)),vm=Sm});var Li={};ce(Li,{default:()=>km});var km,Ei=h(()=>{"use strict";t();Dn();km=Xe()});var Ni={};ce(Ni,{default:()=>Cm});var ae,Am,Cm,Ri=h(()=>{"use strict";t();ae=require("redux-persist"),Am=[ae.FLUSH,ae.REHYDRATE,ae.PAUSE,ae.PERSIST,ae.PURGE,ae.REGISTER],Cm=Am});var Mi={};ce(Mi,{default:()=>Oi});function Oi(e){return(0,Di.persistStore)(e)}var Di,Fi=h(()=>{"use strict";t();Di=require("redux-persist")});var Cc=K((bk,Ac)=>{t();function S_(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Ac.exports=S_});var Zc=K((HC,Yc)=>{t();var U_=typeof c=="object"&&c&&c.Object===Object&&c;Yc.exports=U_});var Qc=K((jC,Jc)=>{t();var W_=Zc(),V_=typeof self=="object"&&self&&self.Object===Object&&self,$_=W_||V_||Function("return this")();Jc.exports=$_});var sr=K((zC,ep)=>{t();var G_=Qc(),H_=G_.Symbol;ep.exports=H_});var rp=K((qC,tp)=>{t();var op=sr(),np=Object.prototype,j_=np.hasOwnProperty,z_=np.toString,Vo=op?op.toStringTag:void 0;function q_(e){var o=j_.call(e,Vo),n=e[Vo];try{e[Vo]=void 0;var r=!0}catch(s){}var a=z_.call(e);return r&&(o?e[Vo]=n:delete e[Vo]),a}tp.exports=q_});var ip=K((KC,ap)=>{t();var K_=Object.prototype,X_=K_.toString;function Y_(e){return X_.call(e)}ap.exports=Y_});var mp=K((XC,sp)=>{t();var cp=sr(),Z_=rp(),J_=ip(),Q_="[object Null]",ed="[object Undefined]",pp=cp?cp.toStringTag:void 0;function od(e){return e==null?e===void 0?ed:Q_:pp&&pp in Object(e)?Z_(e):J_(e)}sp.exports=od});var dp=K((YC,_p)=>{t();var nd=Array.isArray;_p.exports=nd});var gp=K((ZC,lp)=>{t();function td(e){return e!=null&&typeof e=="object"}lp.exports=td});var fp=K((JC,up)=>{t();var rd=mp(),ad=dp(),id=gp(),cd="[object String]";function pd(e){return typeof e=="string"||!ad(e)&&id(e)&&rd(e)==cd}up.exports=pd});var dr={};ce(dr,{css:()=>Ap,default:()=>_d});var Ap,_d,lr=h(()=>{"use strict";t();Ap=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ap));_d={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var gr={};ce(gr,{css:()=>Ip,default:()=>ld});var Ip,ld,ur=h(()=>{"use strict";t();Ip=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ip));ld={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var zo={};ce(zo,{css:()=>Mp,default:()=>fd});var Mp,fd,qo=h(()=>{"use strict";t();Mp=`.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mp));fd={"xPortal-login-container":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container",xPortalLoginContainer:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container","xPortal-modal-dialog-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content",xPortalModalDialogContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content","xPortal-modal-header":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header",xPortalModalHeader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header","xPortal-modal-header-text":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text",xPortalModalHeaderText:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text","xPortal-modal-close-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button",xPortalModalCloseButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button","xPortal-modal-body":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body",xPortalModalBody:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body","xPortal-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content",xPortalContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content","xPortal-container-heading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading",xPortalContainerHeading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading","xPortal-container-subheading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading",xPortalContainerSubheading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading","xPortal-container-error":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error",xPortalContainerError:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error","xPortal-qr-code":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code",xPortalQrCode:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code","xPortal-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader",xPortalLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader","xPortal-container-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button",xPortalContainerButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button","xPortal-container-button-icon":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon",xPortalContainerButtonIcon:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon","xPortal-pairings":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings",xPortalPairings:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings","xPortal-pairings-lead":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead",xPortalPairingsLead:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead","xPortal-pairings-list":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list",xPortalPairingsList:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list","xPortal-pairing-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button",xPortalPairingButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button","xPortal-pairing-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader",xPortalPairingLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader","xPortal-pairing-image":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image",xPortalPairingImage:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image","xPortal-pairing-details":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details",xPortalPairingDetails:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details","xPortal-pairing-remove":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove",xPortalPairingRemove:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove","xPortal-legacy-link":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link",xPortalLegacyLink:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link"}});var Td={};ce(Td,{WalletConnectLoginContent:()=>yd});module.exports=ue(Td);t();var F=w(require("react")),Bp=require("@fortawesome/free-solid-svg-icons"),Fe=w(require("classnames")),Up=w(require("qrcode"));t();var ze=w(require("react")),ks=e=>ze.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 31.114 44.981",width:16,height:16},e),ze.createElement("g",{transform:"translate(-47.168 -21.519)"},ze.createElement("g",{transform:"translate(-247.872 -130.693)"},ze.createElement("path",{d:"M355.676,152.213l-3.832,17.8h-9.661Z",transform:"translate(-40.089 1)",fillRule:"evenodd",fill:"#fff"}),ze.createElement("path",{d:"M326.45,271.184l-7.053,9.379H295.04l7.054-9.379Z",transform:"translate(0 -101.17)",fillRule:"evenodd",fill:"#fff"}),ze.createElement("path",{d:"M381.139,333.864l-13.493,17.8,3.832-17.8Z",transform:"translate(-61.742 -155.472)",fillRule:"evenodd",fill:"#fff"})))),jr=ks;P();t();var ba=w(require("react"));t();var wo=w(require("react"));t();bo();var xa=()=>!qe();var Cs=()=>v(void 0,null,function*(){return yield Promise.resolve().then(()=>(vt(),St))}),Ps=()=>(vt(),ue(St)).default,kt=xa();function Ta({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,a]=wo.default.useState(kt?void 0:Ps()),[s,m]=wo.default.useState(kt||n==null?void 0:n()),_=()=>v(this,null,function*(){(e?e():Cs()).then(g=>a(g.default)),o==null||o().then(g=>m(g.default))});return(0,wo.useEffect)(()=>{kt&&_()},[]),{globalStyles:r,styles:s}}function Be(e,o){return n=>{let{globalStyles:r,styles:a}=Ta({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ba.default.createElement(e,A(f({},n),{globalStyles:r!=null?r:{},styles:a!=null?a:{}}))}}t();var ee=require("react");t();t();t();var Gi=require("react"),mo=require("react-redux");t();var Xt=require("@reduxjs/toolkit"),Vi=require("react-redux/lib/utils/Subscription");ve();t();var wi=w(require("lodash.throttle"));P();ve();Rt();So();po();var rm=[an],Nn=!1,am=(0,wi.default)(()=>{ko(vo())},5e3),Si=e=>o=>n=>{if(rm.includes(n.type))return o(n);let r=e.getState(),a=Se.local.getItem(pe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(a==null)return ko(vo());let m=Date.now();return a-m<0&&!Nn?setTimeout(()=>{Nn=!0,e.dispatch(Fa())},1e3):(Nn&&(Nn=!1),am()),o(n)};t();t();function Rn(){return typeof sessionStorage!="undefined"}var Bi=Rn()?(Ii(),ue(Pi)).default:(Ei(),ue(Li)).default,Ui=Rn()?(Ri(),ue(Ni)).default:[],Wi=Rn()?(Fi(),ue(Mi)).default:e=>e;Dn();var I=(0,Xt.configureStore)({reducer:Bi,middleware:e=>e({serializableCheck:{ignoredActions:[...Ui,Nt.type,Et.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Si)}),$i=(0,Vi.createSubscription)(I),ch=Wi(I),ph=(0,Xt.configureStore)({reducer:Xe});var Pm={store:I,subscription:$i},Yt=(0,Gi.createContext)(Pm),dh=(0,mo.createStoreHook)(Yt),On=(0,mo.createDispatchHook)(Yt),D=(0,mo.createSelectorHook)(Yt);t();t();ve();t();var Hi=w(require("lodash.isequal")),Mn=require("reselect"),x=(0,Mn.createSelectorCreator)(Mn.defaultMemoize,Hi.default);var ke=e=>e.account,Po=x(ke,e=>e.address),_o=x(ke,Po,(e,o)=>o in e.accounts?e.accounts[o]:sn),Im=x(ke,_o,(e,o)=>{let a=e,{accounts:n}=a,r=Jo(a,["accounts"]);return A(f({},r),{address:o.address,account:o})}),hh=x(_o,e=>e.balance),Lm=x(_o,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),xh=x(ke,e=>e.shard),yh=x(ke,e=>e.ledgerAccount),Th=x(ke,e=>e.walletConnectAccount),bh=x(ke,e=>e.isAccountLoading),wh=x(ke,e=>e.accountLoadingError),Em=x(ke,e=>e.websocketEvent),Nm=x(ke,e=>e.websocketBatchEvent);t();var Rm=e=>e.dappConfig,kh=x(Rm,e=>e.shouldUseWebViewProvider);t();var Q=e=>e.loginInfo,ji=x(Q,e=>e.loginMethod),Io=x(Q,Po,(e,o)=>Boolean(o)),Ih=x(Q,e=>e.walletConnectLogin),Lh=x(Q,e=>e.ledgerLogin),zi=x(Q,e=>e.walletLogin),Eh=x(Q,e=>e.isLoginSessionInvalid),Lo=x(Q,e=>e.tokenLogin),qi=x(Q,e=>e.logoutRoute),Dm=x(Q,e=>e.isWalletConnectV2Initialized);t();var Ki=e=>e.modals,Dh=x(Ki,e=>e.txSubmittedModal),Oh=x(Ki,e=>e.notificationModal);t();var Re=e=>e.networkConfig,Xi=x(Re,e=>e.network.chainId),Bh=x(Re,e=>e.network.roundDuration),Uh=x(Re,e=>e.network.walletConnectBridgeAddress),Yi=x(Re,e=>e.network.walletConnectV2RelayAddress),Zi=x(Re,e=>e.network.walletConnectV2ProjectId),Ji=x(Re,e=>e.network.walletConnectV2Options),Qi=x(Re,e=>e.network.walletConnectDeepLink),Ye=x(Re,e=>e.network),Om=x(Ye,e=>e.apiAddress),ec=x(Ye,e=>e.explorerAddress),Wh=x(Ye,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Vh=x(Ye,e=>e.xAliasAddress),$h=x(Ye,e=>e.egldLabel);t();var Fn=e=>e.signedMessageInfo,jh=x(Fn,e=>e.isSigning),zh=x(Fn,e=>e.errorMessage),qh=x(Fn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),Kh=x(Fn,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var oc=e=>e.toasts,Zh=x(oc,e=>e.customToasts),Jh=x(oc,e=>e.transactionToasts);t();ve();var nc={errorMessage:Wt,successMessage:Vt,processingMessage:$t},Mm=e=>e.transactionsInfo,nx=x(Mm,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||nc);t();t();var Ae=require("@multiversx/sdk-core");P();t();var Zt=require("@multiversx/sdk-core/out");t();t();function Bn(e){try{let o=atob(e),n=btoa(o),r=i.Buffer.from(e,"base64").toString(),a=i.Buffer.from(r).toString("base64"),s=e===n||n.startsWith(e),m=e===a||a.startsWith(e);if(s&&m)return!0}catch(o){return!1}return!1}function Ze(e){return Bn(e)?atob(e):e}t();t();t();t();var tc=e=>{let o=e!=null?e:"";return Bn(o)?Zt.TransactionPayload.fromEncoded(o):new Zt.TransactionPayload(o)};t();P();var Un=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ft).some(n=>e.startsWith(n)):!1;function Jt(e){var r,a,s;let o=f({},e);Un({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new Ae.Transaction(f(f(A(f(A(f({value:o.value.valueOf(),data:tc(o.data),nonce:o.nonce.valueOf(),receiver:new Ae.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ae.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:bt,gasPrice:(a=o.gasPrice.valueOf())!=null?a:wt,chainID:o.chainID.valueOf(),version:new Ae.TransactionVersion((s=o.version)!=null?s:fa)}),o.options?{options:new Ae.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ae.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(i.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(i.Buffer.from(o.signature,"hex")),n}t();t();P();t();t();t();var Wm=require("@multiversx/sdk-core/out");t();P();t();var ac=require("@multiversx/sdk-core");q();t();var rc=require("@multiversx/sdk-core");function Vm(e){try{let o=new rc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Eo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Vm(e)}t();t();t();var $m=require("@multiversx/sdk-core"),Gm=w(require("bignumber.js"));re();t();t();t();var Qt="blocks";t();t();t();t();Y();t();t();Y();t();t();t();var Xm=w(require("bignumber.js"));P();t();var Km=require("@multiversx/sdk-core"),er=w(require("bignumber.js"));P();t();var zm=w(require("bignumber.js"));t();er.default.config({ROUNDING_MODE:er.default.ROUND_FLOOR});t();t();t();P();t();t();t();t();P();t();P();t();var Ym=require("@multiversx/sdk-core");P();t();var Ro=require("@multiversx/sdk-core"),Jm=w(require("bignumber.js"));P();t();t();var Zm=w(require("bignumber.js"));P();t();P();t();t();t();t();t();t();P();t();P();t();P();t();Y();var e_=["reDelegateRewards","claimRewards","unBond"],o_=["wrapEgld","unwrapEgld"],n_=["unStake"],t_=["unDelegate"];t();t();t();P();t();var i_=w(require("bignumber.js"));t();t();Y();t();var p_=w(require("bignumber.js"));t();t();t();t();var m_=w(require("bignumber.js"));q();t();t();t();t();re();t();var l_=require("@multiversx/sdk-web-wallet-provider");P();t();var d_=w(require("qs"));t();so();bo();t();bo();var Bb={search:qe()?window.location.search:"",removeParams:[]};t();t();t();se();t();Y();t();t();se();t();var g_=w(require("linkifyjs"));t();P();t();var u_=w(require("bignumber.js"));t();q();t();t();re();t();re();t();t();t();Y();t();Y();t();var f_=w(require("bignumber.js"));P();Y();t();Y();t();var dc=require("react");q();t();t();Y();t();t();var h_=require("@multiversx/sdk-core/out"),x_=w(require("bignumber.js"));Y();t();q();t();t();q();var ES=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var lc=require("react");q();se();t();var T_=require("react");Y();var US=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Ht();t();var Vn=e=>e.transactions,Oo=x(Vn,e=>e.signedTransactions),Iv=x(Vn,e=>e.signTransactionsError),Lv=x(Vn,e=>e.signTransactionsCancelMessage),$n=e=>o=>Object.entries(o).reduce((n,[r,a])=>(e(a.status)&&(n[r]=a),n),{}),Ev=x(Oo,$n(mi)),Nv=x(Oo,$n(An)),Rv=x(Oo,$n(Cn)),Dv=x(Oo,$n(di)),Ov=x(Vn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:A(f({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>Jt(n)))||[]})}),Mv=x(Oo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var tr=()=>D(_o);t();t();t();t();t();var gc=require("@multiversx/sdk-extension-provider"),uc=require("@multiversx/sdk-hw-provider"),fc=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),hc=require("@multiversx/sdk-opera-provider"),xc=require("@multiversx/sdk-passkey-provider/out"),yc=require("@multiversx/sdk-web-wallet-provider");P();tn();t();var Mo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),b_=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");re();t();var Gn={},Hn=lo;var _e=e=>{switch(e==null?void 0:e.constructor){case yc.WalletProvider:return"wallet";case Hn:return"walletconnectv2";case uc.HWProvider:return"ledger";case gc.ExtensionProvider:return"extension";case xc.PasskeyProvider:return"passkey";case fc.MetamaskProvider:return"metamask";case hc.OperaProvider:return"opera";case To.CrossWindowProvider:return"crossWindow";case Mo.IframeProvider:return"iframe";case lo:return"";default:return"extra"}};var me=e=>`Unable to perform ${e}, Provider not initialized`,lo=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(me("getAccount"))}setAccount(o){throw new Error(me(`setAccount: ${o}`))}login(o){throw new Error(me(`login with options: ${o}`))}logout(o){throw new Error(me(`logout with options: ${o}`))}getAddress(){throw new Error(me("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(me(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(me(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(me(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(me(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(me(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(me(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Fo=new lo;var Tc=Fo;function bc(e){Tc=e}function de(){return Tc||Fo}var wc=()=>{let e=de(),o=_e(e);return{provider:e,providerType:o}};t();t();t();t();t();t();t();var Bo=w(require("react"));var P1=(0,Bo.createContext)({}),I1=I.getState();t();var vc=w(require("react"));t();var rr=w(require("react")),w_=w(require("axios"));t();t();t();var jn=require("react");function kc(e,o=[]){let n=(0,jn.useRef)(!0);(0,jn.useEffect)(()=>{n.current?n.current=!1:e()},o)}Z();ve();re();t();t();var Ec=w(Cc());rn();var Pc,Ic,Lc,v_=(Lc=(Ic=(Pc=we.safeWindow)==null?void 0:Pc.location)==null?void 0:Ic.origin)==null?void 0:Lc.includes("localhost"),Nc=e=>{if(!(0,Ec.default)(e))return Boolean(e);let n=f({},e);return Boolean(v_)&&delete n.origin,Object.keys(n).length>0};t();function ar(){return Io(I.getState())}Mt();t();Z();q();t();function Rc(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(n){}}}function Dc(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=k_(e.path,e.caseSensitive,e.end),a=o.match(n);if(!a)return null;let s=a[0],m=s.replace(/(.)\/+$/,"$1"),_=a.slice(1);return{params:r.reduce((l,y,u)=>{if(y==="*"){let T=_[u]||"";m=s.slice(0,s.length-T.length).replace(/(.)\/+$/,"$1")}return l[y]=A_(_[u]||"",y),l},{}),pathname:s,pathnameBase:m,pattern:e}}function k_(e,o=!1,n=!0){Rc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,_)=>(r.push(_),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,o?void 0:"i"),r]}function A_(e,o){try{return decodeURIComponent(e)}catch(n){return Rc(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}t();t();se();var Oc=()=>{let{search:e}=U(),o=new URLSearchParams(e),n=Object.fromEntries(o),r=n==null?void 0:n.address;return Eo(r)?r:null};t();t();t();t();t();var Mc=require("@lifeomic/axios-fetch"),ir=w(require("axios")),cr=(0,Mc.buildAxiosFetch)(ir.default),pr=(e,o)=>v(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[a]=yield Promise.all([r]);return{data:a,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function C_(e,o,n){return v(this,null,function*(){try{let r=yield cr(e,f({method:"POST",body:o?JSON.stringify(o):void 0,headers:f({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return pr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function P_(e,o){return v(this,null,function*(){try{let n=yield cr(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return pr(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function I_(e,o,n){return v(this,null,function*(){try{let r=yield cr(e,f({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return pr(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Uo=ir.default.create();Uo.get=P_;Uo.post=C_;Uo.patch=I_;t();t();var L_=w(require("axios"));t();var N_=w(require("swr"));t();t();function Fc(){let e=de();return _e(e)}t();re();t();function Wo(e){return Fc()===e}function zn(){let e=I.getState(),o=de(),n=Po(e),r=Io(e),a=zi(e);if(!o)throw"provider not initialized";return Wo("ledger")&&r?new Promise(s=>{s(n)}):!Wo("")&&!Wo("wallet")&&!Wo("extra")?o.getAddress():new Promise(s=>{let m=Oc();a!=null&&m&&s(m),r&&s(n),s("")})}t();t();t();se();var Bc=()=>{let{search:e}=U(),o=new URLSearchParams(e),n=Object.fromEntries(o);return n==null?void 0:n.accessToken};var Uc=()=>{var n;let e=Bc(),o=Q(I.getState());return e!=null?e:(n=o.webviewLogin)==null?void 0:n.data};t();Z();q();t();ve();t();ve();t();var Wc=require("@multiversx/sdk-core");q();so();Ot();So();po();so();var Vc=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&hn({url:e})},D_=e=>{let o=Se.local.getItem(pe.logoutEvent),{data:n}=o?JSON.parse(o):{data:e};e===n&&(Se.local.setItem({key:pe.logoutEvent,data:e,expires:0}),Se.local.removeItem(pe.logoutEvent))},O_=500;function $c(a,s){return v(this,arguments,function*(e,o,n=Boolean(Uc()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var k;let m="",_=de(),g=_e(_),l=g==="wallet",y=((k=_==null?void 0:_.isInitialized)==null?void 0:k.call(_))===!0;if(n&&(_==null?void 0:_.relogin)!=null)return _.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield zn(),D_(m)}catch(S){console.error("error fetching logout address",S)}let u=Dt(e),T=U(),b=new URL(decodeURIComponent(u)).pathname;if((Dc(T.pathname,b)||l&&y)&&za(),!m&&!y)return Vc({callbackUrl:u,onRedirect:o});try{if(I.dispatch(N()),l)return setTimeout(()=>{_.logout({callbackUrl:u})},O_);r.hasConsentPopup&&g==="crossWindow"&&_.setShouldShowConsentPopup(!0),yield _.logout({callbackUrl:u})}catch(S){console.error("Logging out error:",S)}finally{l||Vc({callbackUrl:u,onRedirect:o})}})}t();var Gc=({maxRetries:e})=>new Promise((o,n)=>{let r=0,a=()=>{let s=Xi(I.getState());if(s){o(s);return}if(r<e){r++,setTimeout(a,1e3);return}n(null)};a()});se();t();t();tn();q();var Hc=e=>(Object.values(Te).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let n=To.CrossWindowProvider.getInstance();n.isInitialized()&&n.dispose();break}case"iframe":{let n=Mo.IframeProvider.getInstance();n.isInitialized()&&n.dispose();break}default:break}}),null);t();var bp=require("react"),Kn=require("@multiversx/sdk-core");ve();t();t();var Tp=require("@multiversx/sdk-native-auth-client");t();var Kc=w(require("axios"));t();t();t();function jc(e){return v(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var zc=(e,o,n,r=0)=>v(void 0,null,function*(){try{return yield e(...n)}catch(a){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield jc(o.delay)),yield zc(e,o,n,r+1)):null}}),qc=(e,o={retries:5,delay:500})=>(...n)=>v(void 0,null,function*(){return yield zc(e,o,n)});var M_=4,F_=3e4,qn={current:null},Je={current:null},B_=qc((e,o,n)=>v(void 0,null,function*(){if(n){let s=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:s}}let{data:r}=yield Kc.default.get(`${e}/${Qt}?from=${M_}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[a]=r;return a}));function Xc(e,o,n,r){return v(this,null,function*(){if(e==null)throw new Error("missing api url");let a=Date.now();if(qn.current!=null&&a<qn.current.timestamp*1e3+F_&&!r)return qn.current;if(Je.current!=null)return yield Je.current;Je.current=B_(e,o,n);try{let s=yield Je.current;if(s==null)throw Je.current=null,new Error("could not get block hash");return qn.current={hash:s.hash,timestamp:s.timestamp},Je.current=null,s}catch(s){return Je.current=null,null}})}t();t();cn();t();t();var hp=w(fp());var $o=e=>{if(!e||!(0,hp.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,a,s]=o,m=JSON.parse(Ze(s)),_=Ze(n);return{ttl:Number(a),extraInfo:m,origin:_,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};function sd(e){return Object.prototype.toString.call(e)==="[object String]"}var xp=e=>{var n;if(!e||!sd(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,a,s]=o,m=Ze(r),_=Ze(a),g=$o(_);if(!g)return{address:m,body:_,signature:s,blockHash:"",origin:"",ttl:0};let l=A(f({},g),{address:m,body:_,signature:s});return(n=g.extraInfo)!=null&&n.timestamp||delete l.extraInfo,l}catch(r){return null}};var mr={isExpired:!1},yp=e=>{if(!e)return mr;let o=xp(e);if(!o)return mr;let n=co(),{ttl:r,extraInfo:a}=o,s=a==null?void 0:a.timestamp;if(!s)return mr;let m=s+r,_=n>m,g=m-n;return{isExpired:_,expiresAt:m,secondsUntilExpires:g}};t();se();var Go={origin:U().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},Ho=e=>{var n,r,a,s,m,_;return e===!0?Go:{origin:(n=e==null?void 0:e.origin)!=null?n:Go.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:Go.expirySeconds,apiAddress:(a=e==null?void 0:e.apiAddress)!=null?a:Go.apiAddress,tokenExpirationToastWarningSeconds:(s=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?s:Go.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(_=e==null?void 0:e.extraRequestHeaders)!=null?_:{}}};var _r=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:a,extraInfo:s,gatewayUrl:m,extraRequestHeaders:_}=Ho(e),g=new Tp.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:a,gatewayUrl:m,extraRequestHeaders:_});return{getNativeAuthConfig:Ho,initialize:u=>v(void 0,null,function*(){var b,k;if(!n||!o)return"";let T=()=>g.getCurrentBlockHash();try{let S=(b=u==null?void 0:u.latestBlockInfo)!=null?b:yield Xc(n,a,T,u==null?void 0:u.noCache);if(!S)return"";let{hash:V,timestamp:$}=S,H=g.encodeValue(JSON.stringify(f(f({},(k=u==null?void 0:u.extraInfo)!=null?k:s),$?{timestamp:$}:{})));return`${g.encodeValue(o)}.${V}.${r}.${H}`}catch(S){return console.error("Error getting native auth token: ",S.toString()),""}}),getToken:({address:u,token:T,signature:b})=>g.getToken(u,T,b),getTokenExpiration:yp}};var md=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},wp=e=>{let o=D(Ye),n=D(Lo),r=(0,bp.useRef)(n==null?void 0:n.loginToken),a=md(o.apiAddress,e),s=Ho(f(f({},e===!0?{}:e),a?{apiAddress:a}:{})),m=Boolean(e),_=_r(s),{address:g}=tr(),l=On(),y=k=>{r.current=k,l(dn(f(A(f({},n),{loginToken:k}),a?{nativeAuthConfig:s}:{})))},u=()=>{try{return _.initialize()}catch(k){console.error("Unable to get block. Login failed.",k);return}},T=({address:k,signature:S})=>{let V=r.current;if(!V)throw"Token not found. Call `setLoginToken` first.";if(!m){l(dn({loginToken:V,signature:S}));return}let $=_.getToken({address:k,token:V,signature:S});return l(dn(f({loginToken:V,signature:S,nativeAuthToken:$},a?{nativeAuthConfig:s}:{}))),$};return{configuration:s,setLoginToken:y,getNativeAuthLoginToken:u,setTokenLoginInfo:T,refreshNativeAuthTokenLogin:V=>v(void 0,[V],function*({signMessageCallback:k,nativeAuthClientConfig:S}){let H=yield _r(S||s).initialize({noCache:Boolean(S)});if(r.current=H,!H)return;let le=new Kn.Message({address:new Kn.Address(g),data:i.Buffer.from(`${g}${H}`)}),M=yield k(le,{});if(!(M!=null&&M.signature))throw"Message not signed";return T({address:g,signature:i.Buffer.from(M.signature).toString("hex")})})}};var Sp=({callbackRoute:e,token:o,nativeAuth:n,onLoginRedirect:r,logoutRoute:a,customRequestMethods:s=[]})=>{var xo;let m=On(),_=Nc(n),g=wp(_?n:!1),l=o,[y,u]=(0,ee.useState)(""),[T,b]=(0,ee.useState)(""),[k,S]=(0,ee.useState)(!0),[V,$]=(0,ee.useState)([]),[H,le]=(0,ee.useState)(null),{provider:M}=wc(),Ce=D(Yi),Pe=D(Zi),We=D(Ji),Zn=D(Qi),Jn=D(qi),Ko=D(ji),C=(0,ee.useRef)(M),Ve=(0,ee.useRef)(!1),$e=(0,ee.useRef)(!1),Xo=(xo=a!=null?a:Jn)!=null?xo:"/",eo=[Gn.CANCEL_ACTION,...s];o&&eo.push(Gn.SIGN_LOGIN_TOKEN),_&&eo.push(Gn.SIGN_NATIVE_AUTH_TOKEN);let Qn=k?"":`${Zn}?wallet-connect=${encodeURIComponent(T)}`,go=Boolean(y),uo=ar(),Yo=()=>{$c(Xo)},et=L=>{console.log("WalletConnect Session Event: ",L)},ot=()=>v(void 0,null,function*(){var L,E,B,j;try{if(Ve.current||C.current==null)return;if(!$e.current){try{yield(L=C.current)==null?void 0:L.logout()}catch(tt){console.warn("Unable to logout")}return}let z=yield(B=(E=C.current)==null?void 0:E.getAddress)==null?void 0:B.call(E);if(!z){console.warn("Login cancelled.");return}let ie=yield(j=C.current)==null?void 0:j.getSignature(),ne={address:z,loginMethod:"walletconnectv2"},oo={logoutRoute:Xo,loginType:"walletconnectv2",callbackRoute:e!=null?e:U().href};m(Ma(oo)),ie&&g.setTokenLoginInfo({signature:ie,address:z}),m(Ke(ne)),qa({callbackRoute:e,onLoginRedirect:r,options:{address:z,signature:ie}})}catch(z){u("User rejected connection proposal"),console.error(z)}}),fo=()=>v(void 0,null,function*(){var E,B,j,z,ie;if(_e(C.current)==="walletconnectv2")try{((z=(j=(B=(E=C.current)==null?void 0:E.walletConnector)==null?void 0:B.session)==null?void 0:j.getAll())!=null?z:[]).length>0&&(yield(ie=C.current)==null?void 0:ie.logout()),C.current=Fo,le(null)}catch(ne){console.warn("Unable to logout")}}),ge=L=>v(void 0,null,function*(){var E,B,j;if(!Ce||!Pe){u("Invalid WalletConnect setup");return}if(!L||!L.topic){u("Expired connection");return}try{if((C.current?_e(C.current):!1)!=="walletconnectv2"){yield oe();return}if(S(!0),yield fo(),_&&!l&&(l=yield g.getNativeAuthLoginToken(),!l)){console.warn("Fetching block failed. Login cancelled.");return}l&&g.setLoginToken(l),yield oe(!1);let{approval:ie}=yield(E=C.current)==null?void 0:E.connect({topic:L.topic,methods:eo});try{yield(B=C.current)==null?void 0:B.login({approval:ie,token:l})}catch(ne){console.error("User rejected existing connection proposal",ne),u("User rejected existing connection proposal"),S(!0),yield oe()}}catch(z){console.error("Unable to connect to existing session",z),u("Unable to connect to existing session")}finally{$((j=C.current)==null?void 0:j.pairings)}}),nt=L=>v(void 0,null,function*(){var E,B;try{L&&(yield(E=C.current)==null?void 0:E.logout({topic:L}))}catch(j){console.error("Unable to remove existing pairing",j),u("Unable to remove existing pairing")}finally{let j=yield(B=C.current)==null?void 0:B.getPairings();$(j)}});function oe(L=!0){return v(this,null,function*(){var oo,tt,yr;Hc();let E=yield Gc({maxRetries:15});if(!E){console.error("Invalid chainID"),u("Invalid chainID");return}if(!Pe||!Ce){console.error("Invalid WalletConnect setup"),u("Invalid WalletConnect setup");return}let B=ar(),j=$e.current===!1&&!B,z=(tt=(oo=C.current)==null?void 0:oo.isInitialized)==null?void 0:tt.call(oo);if(Ve.current||j||z)return;if(Ve.current=!0,(yr=C.current)!=null&&yr.walletConnector){yield C.current.init(),le(C.current),Ve.current=!1,L&&(yield ho());return}let ie={onClientLogin:ot,onClientLogout:Yo,onClientEvent:et},ne=new Hn(ie,E,Ce,Pe,We);yield ne.init(),le(ne),C.current=ne,Ve.current=!1,L&&($(ne.pairings),yield ho())})}function ho(){return v(this,null,function*(){var L,E;if(!!C.current){if(!Ce||!Pe){u("Invalid WalletConnect setup");return}try{if(!$e.current)return;let{uri:B,approval:j}=yield(L=C.current)==null?void 0:L.connect({methods:eo});if(!Boolean(B))return;if(b(B),(We==null?void 0:We.logger)==="debug"&&console.log("WalletConnect uri: ",B),_&&!l&&(l=yield g.getNativeAuthLoginToken(),!l)){console.warn("Fetching block failed. Login cancelled.");return}if(l&&g.setLoginToken(l),(C.current?_e(C.current):!1)!=="walletconnectv2"){S(!0),yield oe();return}try{yield(E=C.current)==null?void 0:E.login({approval:j,token:l})}catch(ne){console.error("User rejected connection proposal",ne),u("User rejected connection proposal"),S(!0)}}catch(B){console.error("Unable to connect",B)}}})}return kc(()=>{C.current=M},[M]),(0,ee.useEffect)(()=>($e.current=!0,()=>{$e.current=!1}),[]),(0,ee.useEffect)(()=>{S(!T)},[T]),(0,ee.useEffect)(()=>{if(!H)return;(Boolean(H.session)||Ko==="walletconnectv2")&&uo&&bc(H)},[H,uo]),[oe,{error:y,loginFailed:go,isLoading:k&&!go,isLoggedIn:uo&&!go},{uriDeepLink:Qn,walletConnectUri:T,cancelLogin:fo,connectExisting:ge,removeExistingPairing:nt,wcPairings:V}]};t();t();P();t();t();t();var Qe=w(require("bignumber.js")),vp=e=>{let o=new Qe.default(e).dividedBy(1e3).integerValue(Qe.default.ROUND_FLOOR),n=new Qe.default(o).dividedBy(60).integerValue(Qe.default.ROUND_FLOOR),r=new Qe.default(n).dividedBy(60).integerValue(Qe.default.ROUND_FLOOR),a=r.modulo(60).isGreaterThan(1),s=n.modulo(60).isGreaterThan(1),m=n.modulo(60).isLessThan(1);return a?`${r} hours`:s?`${n} minutes`:m?"less than 1 minute":`${n} minute`};var kp=(e,o)=>{var s;let n=D(Lo),r=(s=n==null?void 0:n.loginToken)!=null?s:e;if(!r)return;let a=$o(r);if(!!a)return{className:o,url:a.origin,duration:vp(a.ttl*1e3)}};t();t();var Ue=w(require("react")),Cp=require("@fortawesome/react-fontawesome"),jo=w(require("classnames"));var dd=({icon:e,title:o,action:n,iconClass:r,"data-testid":a,description:s,iconBgClass:m,iconSize:_="5x",className:g="dapp-page-state",globalStyles:l,styles:y})=>{let u=(0,Ue.useMemo)(()=>({wrapper:(0,jo.default)(y==null?void 0:y.state,l==null?void 0:l.mAuto,l==null?void 0:l.p4,l==null?void 0:l.textCenter,g),iconContainer:(0,jo.default)(l==null?void 0:l.iconState,l==null?void 0:l.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,jo.default)(r!=null&&r),title:(0,jo.default)(l==null?void 0:l.h4,l==null?void 0:l.my4),description:l==null?void 0:l.mb3}),[l,y,g,m,r]);return Ue.default.createElement("div",{className:u.wrapper,"data-testid":a},e&&Ue.default.createElement("span",{className:u.iconContainer},Ue.default.createElement(Cp.FontAwesomeIcon,{icon:e,className:u.iconClass,size:_})),o&&Ue.default.createElement("p",{className:u.title},o),s&&Ue.default.createElement("div",{className:u.description},s),n)},Pp=Be(dd,{ssrStyles:()=>Promise.resolve().then(()=>(lr(),dr)),clientStyles:()=>(lr(),ue(dr)).default});t();t();var G=w(require("react")),Lp=require("@fortawesome/free-solid-svg-icons"),Ep=require("@fortawesome/react-fontawesome"),fr=w(require("classnames"));var gd=e=>{let{className:o,url:n,icon:r,authorizationInfo:a,styles:s}=e,m=n.replace("https://","").replace(/\/$/,""),_=a!=null&&a.url?a.url.replace("https://","").replace(/\/$/,""):"";return G.default.createElement(G.default.Fragment,null,G.default.createElement("p",{className:(0,fr.default)(s==null?void 0:s.scamPhishingAlert,o)},r||G.default.createElement(Ep.FontAwesomeIcon,{className:s==null?void 0:s.scamPhishingAlertIcon,icon:Lp.faLock}),G.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},G.default.createElement("span",null,"Scam/Phishing verification:")," ",G.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertPrefix},G.default.createElement("strong",null,"https://"),m))),a&&a.url&&G.default.createElement("p",{className:(0,fr.default)(s==null?void 0:s.scamPhishingAlert,s==null?void 0:s.scamPhishingAlertAuthorization,a.className)},G.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),G.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},G.default.createElement("strong",null,"https://"),G.default.createElement("span",null,_," for"),G.default.createElement("strong",{className:s==null?void 0:s.scamPhishingAlertAuthorizationDuration},a.duration)),G.default.createElement("span",{className:s==null?void 0:s.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),G.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},Np=Be(gd,{ssrStyles:()=>Promise.resolve().then(()=>(ur(),gr)),clientStyles:()=>(ur(),ue(gr)).default});t();var hr=w(require("platform"));function Rp(){var e,o,n,r;return((o=(e=hr.default)==null?void 0:e.os)==null?void 0:o.family)==="iOS"||((r=(n=hr.default)==null?void 0:n.os)==null?void 0:r.family)==="Android"}se();t();t();var O=w(require("react")),Yn=require("@fortawesome/free-solid-svg-icons"),xr=require("@fortawesome/react-fontawesome"),Me=w(require("classnames"));t();var Oe=w(require("react"));t();var Xn=w(require("react")),ud=e=>Xn.createElement("svg",f({width:235,height:235,viewBox:"0 0 235 235",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Xn.createElement("rect",{width:235,height:235,rx:72,fill:"#010101"}),Xn.createElement("path",{d:"M126.493 117.923L200.962 78.0313L188.455 54L120.231 81.5772C118.479 82.2909 116.521 82.2909 114.769 81.5772L46.5451 54L34 78.1084L108.468 118L34 157.892L46.5451 182L114.769 154.211C116.521 153.497 118.479 153.497 120.231 154.211L188.455 181.865L201 157.757L126.493 117.923Z",fill:"#23F7DD"})),Dp=ud;var Op=n=>{var r=n,{src:e}=r,o=Jo(r,["src"]);var m;let[a,s]=(0,Oe.useState)(!1);return(0,Oe.useEffect)(()=>{s(!1)},[e]),Oe.default.createElement(Oe.default.Fragment,null,a?Oe.default.createElement(Dp,{className:(m=o==null?void 0:o.className)!=null?m:""}):Oe.default.createElement("img",f({onError:()=>{s(!0)},src:e},o)))};var hd=({connectExisting:e,removeExistingPairing:o,activePairings:n,className:r="dapp-wallet-connect-pairing-list",pairingListClasses:a,styles:s})=>{let[m,_]=(0,O.useState)(""),{leadClassName:g,wrapperClassName:l,buttonClassName:y,iconClassName:u,loaderClassName:T,detailsClassName:b,removeClassName:k}=a||{};return(0,O.useEffect)(()=>{_("")},[n]),O.default.createElement("div",{className:(0,Me.default)(s==null?void 0:s.xPortalPairings,r)},O.default.createElement("p",{className:(0,Me.default)(s==null?void 0:s.xPortalPairingsLead,g)},"or choose an existing pairing:"),O.default.createElement("div",{className:(0,Me.default)(s==null?void 0:s.xPortalPairingsList,l)},n.map(S=>{var V,$;return O.default.createElement("button",{type:"button",className:(0,Me.default)(s==null?void 0:s.xPortalPairingButton,y),key:S.topic,onClick:()=>{e(S),_(S.topic)}},S.peerMetadata&&O.default.createElement(O.default.Fragment,null,m===S.topic?O.default.createElement(xr.FontAwesomeIcon,{icon:Yn.faCircleNotch,className:(0,Me.default)("fa-spin","slow-spin",s==null?void 0:s.xPortalPairingLoader,T)}):O.default.createElement(O.default.Fragment,null,(($=(V=S.peerMetadata)==null?void 0:V.icons)==null?void 0:$[0])&&O.default.createElement(Op,{src:S.peerMetadata.icons[0],alt:S.peerMetadata.name,className:(0,Me.default)(s==null?void 0:s.xPortalPairingImage,u)})),O.default.createElement("div",{className:(0,Me.default)(s==null?void 0:s.xPortalPairingDetails,b)},O.default.createElement("strong",{className:s==null?void 0:s.xPortalPairingDetail},m===S.topic?`Confirm on ${S.peerMetadata.name}`:S.peerMetadata.name),O.default.createElement("span",{className:s==null?void 0:s.xPortalPairingDetail},S.peerMetadata.description),O.default.createElement("span",{className:s==null?void 0:s.xPortalPairingDetail},S.peerMetadata.url)),O.default.createElement("div",{className:(0,Me.default)(s==null?void 0:s.xPortalPairingRemove,k),onClick:H=>{H.stopPropagation(),o(S.topic)}},O.default.createElement(xr.FontAwesomeIcon,{icon:Yn.faTimes}))))})))},Fp=Be(hd,{ssrStyles:()=>Promise.resolve().then(()=>(qo(),zo)),clientStyles:()=>(qo(),ue(zo)).default});var xd=({callbackRoute:e,className:o="dapp-wallet-connect-login-modal",customSpinnerComponent:n,innerWalletConnectComponentsClasses:r,lead:a="Scan the QR code using the xPortal App",loginButtonText:s="xPortal App",logoutRoute:m,nativeAuth:_,onLoginRedirect:g,showScamPhishingAlert:l=!0,title:y="Login with the xPortal App",token:u,globalStyles:T,styles:b,customRequestMethods:k=[]})=>{var fo;let[S,{error:V,isLoading:$},{connectExisting:H,removeExistingPairing:le,uriDeepLink:M,walletConnectUri:Ce,wcPairings:Pe}]=Sp({callbackRoute:e,token:u,nativeAuth:_,onLoginRedirect:g,logoutRoute:m,customRequestMethods:k}),[We,Zn]=(0,F.useState)(""),{containerContentClassName:Jn,containerScamPhishingAlertClassName:Ko,containerTitleClassName:C,containerSubtitleClassName:Ve,containerErrorClassName:$e,containerQrCodeClassName:Xo,containerLoaderClassName:eo,containerButtonClassName:Qn,walletConnectPairingListClassNames:go}=r||{},uo=Rp(),Yo=(fo=Pe==null?void 0:Pe.filter(ge=>{let nt=Pe.some(oe=>{var ho,xo,L,E;return((ho=ge.peerMetadata)==null?void 0:ho.name)===((xo=oe==null?void 0:oe.peerMetadata)==null?void 0:xo.name)&&((L=ge.peerMetadata)==null?void 0:L.url)===((E=oe==null?void 0:oe.peerMetadata)==null?void 0:E.url)&&ge.expiry<oe.expiry});return Boolean(ge.active)&&ge.peerMetadata&&!nt}))!=null?fo:[],et=()=>v(void 0,null,function*(){if(!Ce)return;let ge=yield Up.default.toString(Ce,{type:"svg"});ge&&Zn(ge)});(0,F.useEffect)(()=>{et()},[Ce]),(0,F.useEffect)(()=>{S()},[]);let ot=l?kp(u,Ko):void 0;return F.default.createElement(F.default.Fragment,null,l&&F.default.createElement(Np,{url:U().origin,authorizationInfo:ot,className:Ko}),F.default.createElement("div",{className:(0,Fe.default)(b==null?void 0:b.xPortalContent,Jn)},F.default.createElement("div",{className:(0,Fe.default)(b==null?void 0:b.xPortalContainerHeading,C)},y),F.default.createElement("div",{className:(0,Fe.default)(b==null?void 0:b.xPortalContainerSubheading,Ve)},a),F.default.createElement("div",null,V&&F.default.createElement("p",{className:(0,Fe.default)(b==null?void 0:b.xPortalContainerError,$e)},V)),$||!We?F.default.createElement("div",{className:(0,Fe.default)(b==null?void 0:b.xPortalLoader,eo)},n||F.default.createElement(Pp,{iconSize:"10x",icon:Bp.faCircleNotch,iconClass:(0,Fe.default)("fa-spin",T==null?void 0:T.textPrimary)})):F.default.createElement("div",{className:(0,Fe.default)(b==null?void 0:b.xPortalQrCode,Xo),dangerouslySetInnerHTML:{__html:We}}),uo&&F.default.createElement("a",{id:"accessWalletBtn","data-testid":"accessWalletBtn",href:M,rel:"noopener noreferrer nofollow",target:"_blank",className:(0,Fe.default)(T==null?void 0:T.btn,T==null?void 0:T.btnPrimary,b==null?void 0:b.xPortalContainerButton,Qn)},F.default.createElement(jr,{className:b==null?void 0:b.xPortalContainerButtonIcon}),s),Yo.length>0&&F.default.createElement(Fp,{activePairings:Yo,connectExisting:H,removeExistingPairing:le,className:o,pairingListClasses:go})))},yd=Be(xd,{ssrStyles:()=>Promise.resolve().then(()=>(qo(),zo)),clientStyles:()=>(qo(),ue(zo)).default});0&&(module.exports={WalletConnectLoginContent});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=WalletConnectLoginContent.js.map
