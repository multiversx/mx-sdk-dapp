"use strict";var oc=Object.create;var Be=Object.defineProperty,nc=Object.defineProperties,tc=Object.getOwnPropertyDescriptor,rc=Object.getOwnPropertyDescriptors,ac=Object.getOwnPropertyNames,ro=Object.getOwnPropertySymbols,ic=Object.getPrototypeOf,Qo=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var lt=(e,o,n)=>o in e?Be(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,u=(e,o)=>{for(var n in o||(o={}))Qo.call(o,n)&&lt(e,n,o[n]);if(ro)for(var n of ro(o))ut.call(o,n)&&lt(e,n,o[n]);return e},b=(e,o)=>nc(e,rc(o));var ao=(e,o)=>{var n={};for(var r in e)Qo.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ro)for(var r of ro(e))o.indexOf(r)<0&&ut.call(e,r)&&(n[r]=e[r]);return n};var g=(e,o)=>()=>(e&&(o=e(e=0)),o);var D=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ae=(e,o)=>{for(var n in o)Be(e,n,{get:o[n],enumerable:!0})},gt=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let p of ac(o))!Qo.call(e,p)&&p!==n&&Be(e,p,{get:()=>o[p],enumerable:!(r=tc(o,p))||r.enumerable});return e};var T=(e,o,n)=>(n=e!=null?oc(ic(e)):{},gt(o||!e||!e.__esModule?Be(n,"default",{value:e,enumerable:!0}):n,e)),le=e=>gt(Be({},"__esModule",{value:!0}),e);var S=(e,o,n)=>new Promise((r,p)=>{var s=l=>{try{d(n.next(l))}catch(f){p(f)}},m=l=>{try{d(n.throw(l))}catch(f){p(f)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,m);d((n=n.apply(e,o)).next())});var ht=D(io=>{"use strict";t();io.byteLength=pc;io.toByteArray=mc;io.fromByteArray=lc;var Y=[],H=[],cc=typeof Uint8Array!="undefined"?Uint8Array:Array,en="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ue=0,ft=en.length;ue<ft;++ue)Y[ue]=en[ue],H[en.charCodeAt(ue)]=ue;var ue,ft;H["-".charCodeAt(0)]=62;H["_".charCodeAt(0)]=63;function xt(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=o);var r=n===o?0:4-n%4;return[n,r]}function pc(e){var o=xt(e),n=o[0],r=o[1];return(n+r)*3/4-r}function sc(e,o,n){return(o+n)*3/4-n}function mc(e){var o,n=xt(e),r=n[0],p=n[1],s=new cc(sc(e,r,p)),m=0,d=p>0?r-4:r,l;for(l=0;l<d;l+=4)o=H[e.charCodeAt(l)]<<18|H[e.charCodeAt(l+1)]<<12|H[e.charCodeAt(l+2)]<<6|H[e.charCodeAt(l+3)],s[m++]=o>>16&255,s[m++]=o>>8&255,s[m++]=o&255;return p===2&&(o=H[e.charCodeAt(l)]<<2|H[e.charCodeAt(l+1)]>>4,s[m++]=o&255),p===1&&(o=H[e.charCodeAt(l)]<<10|H[e.charCodeAt(l+1)]<<4|H[e.charCodeAt(l+2)]>>2,s[m++]=o>>8&255,s[m++]=o&255),s}function _c(e){return Y[e>>18&63]+Y[e>>12&63]+Y[e>>6&63]+Y[e&63]}function dc(e,o,n){for(var r,p=[],s=o;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(e[s+2]&255),p.push(_c(r));return p.join("")}function lc(e){for(var o,n=e.length,r=n%3,p=[],s=16383,m=0,d=n-r;m<d;m+=s)p.push(dc(e,m,m+s>d?d:m+s));return r===1?(o=e[n-1],p.push(Y[o>>2]+Y[o<<4&63]+"==")):r===2&&(o=(e[n-2]<<8)+e[n-1],p.push(Y[o>>10]+Y[o>>4&63]+Y[o<<2&63]+"=")),p.join("")}});var yt=D(on=>{t();on.read=function(e,o,n,r,p){var s,m,d=p*8-r-1,l=(1<<d)-1,f=l>>1,y=-7,x=n?p-1:0,k=n?-1:1,A=e[o+x];for(x+=k,s=A&(1<<-y)-1,A>>=-y,y+=d;y>0;s=s*256+e[o+x],x+=k,y-=8);for(m=s&(1<<-y)-1,s>>=-y,y+=r;y>0;m=m*256+e[o+x],x+=k,y-=8);if(s===0)s=1-f;else{if(s===l)return m?NaN:(A?-1:1)*(1/0);m=m+Math.pow(2,r),s=s-f}return(A?-1:1)*m*Math.pow(2,s-r)};on.write=function(e,o,n,r,p,s){var m,d,l,f=s*8-p-1,y=(1<<f)-1,x=y>>1,k=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=r?0:s-1,w=r?1:-1,P=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=y):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+x>=1?o+=k/l:o+=k*Math.pow(2,1-x),o*l>=2&&(m++,l/=2),m+x>=y?(d=0,m=y):m+x>=1?(d=(o*l-1)*Math.pow(2,p),m=m+x):(d=o*Math.pow(2,x-1)*Math.pow(2,p),m=0));p>=8;e[n+A]=d&255,A+=w,d/=256,p-=8);for(m=m<<p|d,f+=p;f>0;e[n+A]=m&255,A+=w,m/=256,f-=8);e[n+A-w]|=P*128}});var Rt=D(Ae=>{"use strict";t();var nn=ht(),ke=yt(),Tt=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ae.Buffer=_;Ae.SlowBuffer=yc;Ae.INSPECT_MAX_BYTES=50;var co=2147483647;Ae.kMaxLength=co;_.TYPED_ARRAY_SUPPORT=uc();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function uc(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function ie(e){if(e>co)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return cn(e)}return wt(e,o,n)}_.poolSize=8192;function wt(e,o,n){if(typeof e=="string")return fc(e,o);if(ArrayBuffer.isView(e))return xc(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Z(e,ArrayBuffer)||e&&Z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Z(e,SharedArrayBuffer)||e&&Z(e.buffer,SharedArrayBuffer)))return rn(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,n);var p=hc(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,n){return wt(e,o,n)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function vt(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function gc(e,o,n){return vt(e),e<=0?ie(e):o!==void 0?typeof n=="string"?ie(e).fill(o,n):ie(e).fill(o):ie(e)}_.alloc=function(e,o,n){return gc(e,o,n)};function cn(e){return vt(e),ie(e<0?0:pn(e)|0)}_.allocUnsafe=function(e){return cn(e)};_.allocUnsafeSlow=function(e){return cn(e)};function fc(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=kt(e,o)|0,r=ie(n),p=r.write(e,o);return p!==n&&(r=r.slice(0,p)),r}function tn(e){for(var o=e.length<0?0:pn(e.length)|0,n=ie(o),r=0;r<o;r+=1)n[r]=e[r]&255;return n}function xc(e){if(Z(e,Uint8Array)){var o=new Uint8Array(e);return rn(o.buffer,o.byteOffset,o.byteLength)}return tn(e)}function rn(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&n===void 0?r=new Uint8Array(e):n===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,n),Object.setPrototypeOf(r,_.prototype),r}function hc(e){if(_.isBuffer(e)){var o=pn(e.length)|0,n=ie(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||sn(e.length)?ie(0):tn(e);if(e.type==="Buffer"&&Array.isArray(e.data))return tn(e.data)}function pn(e){if(e>=co)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+co.toString(16)+" bytes");return e|0}function yc(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,n){if(Z(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),Z(n,Uint8Array)&&(n=_.from(n,n.offset,n.byteLength)),!_.isBuffer(o)||!_.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===n)return 0;for(var r=o.length,p=n.length,s=0,m=Math.min(r,p);s<m;++s)if(o[s]!==n[s]){r=o[s],p=n[s];break}return r<p?-1:p<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,n){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<o.length;++r)n+=o[r].length;var p=_.allocUnsafe(n),s=0;for(r=0;r<o.length;++r){var m=o[r];if(Z(m,Uint8Array))s+m.length>p.length?_.from(m).copy(p,s):Uint8Array.prototype.set.call(p,m,s);else if(_.isBuffer(m))m.copy(p,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=m.length}return p};function kt(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var p=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return an(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Nt(e).length;default:if(p)return r?-1:an(e).length;o=(""+o).toLowerCase(),p=!0}}_.byteLength=kt;function Tc(e,o,n){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Pc(this,o,n);case"utf8":case"utf-8":return It(this,o,n);case"ascii":return Lc(this,o,n);case"latin1":case"binary":return Ec(this,o,n);case"base64":return Ac(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Nc(this,o,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function ge(e,o,n){var r=e[o];e[o]=e[n],e[n]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<o;n+=2)ge(this,n,n+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<o;n+=4)ge(this,n,n+3),ge(this,n+1,n+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<o;n+=8)ge(this,n,n+7),ge(this,n+1,n+6),ge(this,n+2,n+5),ge(this,n+3,n+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?It(this,0,o):Tc.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",n=Ae.INSPECT_MAX_BYTES;return o=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(o+=" ... "),"<Buffer "+o+">"};Tt&&(_.prototype[Tt]=_.prototype.inspect);_.prototype.compare=function(o,n,r,p,s){if(Z(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(n===void 0&&(n=0),r===void 0&&(r=o?o.length:0),p===void 0&&(p=0),s===void 0&&(s=this.length),n<0||r>o.length||p<0||s>this.length)throw new RangeError("out of range index");if(p>=s&&n>=r)return 0;if(p>=s)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,p>>>=0,s>>>=0,this===o)return 0;for(var m=s-p,d=r-n,l=Math.min(m,d),f=this.slice(p,s),y=o.slice(n,r),x=0;x<l;++x)if(f[x]!==y[x]){m=f[x],d=y[x];break}return m<d?-1:d<m?1:0};function At(e,o,n,r,p){if(e.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,sn(n)&&(n=p?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(p)return-1;n=e.length-1}else if(n<0)if(p)n=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:bt(e,o,n,r,p);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):bt(e,[o],n,r,p);throw new TypeError("val must be string, number or Buffer")}function bt(e,o,n,r,p){var s=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,m/=2,d/=2,n/=2}function l(A,w){return s===1?A[w]:A.readUInt16BE(w*s)}var f;if(p){var y=-1;for(f=n;f<m;f++)if(l(e,f)===l(o,y===-1?0:f-y)){if(y===-1&&(y=f),f-y+1===d)return y*s}else y!==-1&&(f-=f-y),y=-1}else for(n+d>m&&(n=m-d),f=n;f>=0;f--){for(var x=!0,k=0;k<d;k++)if(l(e,f+k)!==l(o,k)){x=!1;break}if(x)return f}return-1}_.prototype.includes=function(o,n,r){return this.indexOf(o,n,r)!==-1};_.prototype.indexOf=function(o,n,r){return At(this,o,n,r,!0)};_.prototype.lastIndexOf=function(o,n,r){return At(this,o,n,r,!1)};function bc(e,o,n,r){n=Number(n)||0;var p=e.length-n;r?(r=Number(r),r>p&&(r=p)):r=p;var s=o.length;r>s/2&&(r=s/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(sn(d))return m;e[n+m]=d}return m}function Sc(e,o,n,r){return po(an(o,e.length-n),e,n,r)}function wc(e,o,n,r){return po(Dc(o),e,n,r)}function vc(e,o,n,r){return po(Nt(o),e,n,r)}function kc(e,o,n,r){return po(Oc(o,e.length-n),e,n,r)}_.prototype.write=function(o,n,r,p){if(n===void 0)p="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")p=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,p===void 0&&(p="utf8")):(p=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-n;if((r===void 0||r>s)&&(r=s),o.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");for(var m=!1;;)switch(p){case"hex":return bc(this,o,n,r);case"utf8":case"utf-8":return Sc(this,o,n,r);case"ascii":case"latin1":case"binary":return wc(this,o,n,r);case"base64":return vc(this,o,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return kc(this,o,n,r);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ac(e,o,n){return o===0&&n===e.length?nn.fromByteArray(e):nn.fromByteArray(e.slice(o,n))}function It(e,o,n){n=Math.min(e.length,n);for(var r=[],p=o;p<n;){var s=e[p],m=null,d=s>239?4:s>223?3:s>191?2:1;if(p+d<=n){var l,f,y,x;switch(d){case 1:s<128&&(m=s);break;case 2:l=e[p+1],(l&192)===128&&(x=(s&31)<<6|l&63,x>127&&(m=x));break;case 3:l=e[p+1],f=e[p+2],(l&192)===128&&(f&192)===128&&(x=(s&15)<<12|(l&63)<<6|f&63,x>2047&&(x<55296||x>57343)&&(m=x));break;case 4:l=e[p+1],f=e[p+2],y=e[p+3],(l&192)===128&&(f&192)===128&&(y&192)===128&&(x=(s&15)<<18|(l&63)<<12|(f&63)<<6|y&63,x>65535&&x<1114112&&(m=x))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),p+=d}return Ic(r)}var St=4096;function Ic(e){var o=e.length;if(o<=St)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<o;)n+=String.fromCharCode.apply(String,e.slice(r,r+=St));return n}function Lc(e,o,n){var r="";n=Math.min(e.length,n);for(var p=o;p<n;++p)r+=String.fromCharCode(e[p]&127);return r}function Ec(e,o,n){var r="";n=Math.min(e.length,n);for(var p=o;p<n;++p)r+=String.fromCharCode(e[p]);return r}function Pc(e,o,n){var r=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>r)&&(n=r);for(var p="",s=o;s<n;++s)p+=Mc[e[s]];return p}function Nc(e,o,n){for(var r=e.slice(o,n),p="",s=0;s<r.length-1;s+=2)p+=String.fromCharCode(r[s]+r[s+1]*256);return p}_.prototype.slice=function(o,n){var r=this.length;o=~~o,n=n===void 0?r:~~n,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<o&&(n=o);var p=this.subarray(o,n);return Object.setPrototypeOf(p,_.prototype),p};function N(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||N(o,n,this.length);for(var p=this[o],s=1,m=0;++m<n&&(s*=256);)p+=this[o+m]*s;return p};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||N(o,n,this.length);for(var p=this[o+--n],s=1;n>0&&(s*=256);)p+=this[o+--n]*s;return p};_.prototype.readUint8=_.prototype.readUInt8=function(o,n){return o=o>>>0,n||N(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,n){return o=o>>>0,n||N(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,n){return o=o>>>0,n||N(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,n){return o=o>>>0,n||N(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,n){return o=o>>>0,n||N(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,n,r){o=o>>>0,n=n>>>0,r||N(o,n,this.length);for(var p=this[o],s=1,m=0;++m<n&&(s*=256);)p+=this[o+m]*s;return s*=128,p>=s&&(p-=Math.pow(2,8*n)),p};_.prototype.readIntBE=function(o,n,r){o=o>>>0,n=n>>>0,r||N(o,n,this.length);for(var p=n,s=1,m=this[o+--p];p>0&&(s*=256);)m+=this[o+--p]*s;return s*=128,m>=s&&(m-=Math.pow(2,8*n)),m};_.prototype.readInt8=function(o,n){return o=o>>>0,n||N(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,n){o=o>>>0,n||N(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,n){o=o>>>0,n||N(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,n){return o=o>>>0,n||N(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,n){return o=o>>>0,n||N(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,n){return o=o>>>0,n||N(o,4,this.length),ke.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,n){return o=o>>>0,n||N(o,4,this.length),ke.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,n){return o=o>>>0,n||N(o,8,this.length),ke.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,n){return o=o>>>0,n||N(o,8,this.length),ke.read(this,o,!1,52,8)};function O(e,o,n,r,p,s){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>p||o<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,n,r,p){if(o=+o,n=n>>>0,r=r>>>0,!p){var s=Math.pow(2,8*r)-1;O(this,o,n,r,s,0)}var m=1,d=0;for(this[n]=o&255;++d<r&&(m*=256);)this[n+d]=o/m&255;return n+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,n,r,p){if(o=+o,n=n>>>0,r=r>>>0,!p){var s=Math.pow(2,8*r)-1;O(this,o,n,r,s,0)}var m=r-1,d=1;for(this[n+m]=o&255;--m>=0&&(d*=256);)this[n+m]=o/d&255;return n+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,1,255,0),this[n]=o&255,n+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,2,65535,0),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,2,65535,0),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,4,4294967295,0),this[n+3]=o>>>24,this[n+2]=o>>>16,this[n+1]=o>>>8,this[n]=o&255,n+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,4,4294967295,0),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};_.prototype.writeIntLE=function(o,n,r,p){if(o=+o,n=n>>>0,!p){var s=Math.pow(2,8*r-1);O(this,o,n,r,s-1,-s)}var m=0,d=1,l=0;for(this[n]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[n+m-1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};_.prototype.writeIntBE=function(o,n,r,p){if(o=+o,n=n>>>0,!p){var s=Math.pow(2,8*r-1);O(this,o,n,r,s-1,-s)}var m=r-1,d=1,l=0;for(this[n+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[n+m+1]!==0&&(l=1),this[n+m]=(o/d>>0)-l&255;return n+r};_.prototype.writeInt8=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,1,127,-128),o<0&&(o=255+o+1),this[n]=o&255,n+1};_.prototype.writeInt16LE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,2,32767,-32768),this[n]=o&255,this[n+1]=o>>>8,n+2};_.prototype.writeInt16BE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,2,32767,-32768),this[n]=o>>>8,this[n+1]=o&255,n+2};_.prototype.writeInt32LE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,4,2147483647,-2147483648),this[n]=o&255,this[n+1]=o>>>8,this[n+2]=o>>>16,this[n+3]=o>>>24,n+4};_.prototype.writeInt32BE=function(o,n,r){return o=+o,n=n>>>0,r||O(this,o,n,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[n]=o>>>24,this[n+1]=o>>>16,this[n+2]=o>>>8,this[n+3]=o&255,n+4};function Lt(e,o,n,r,p,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Et(e,o,n,r,p){return o=+o,n=n>>>0,p||Lt(e,o,n,4,34028234663852886e22,-34028234663852886e22),ke.write(e,o,n,r,23,4),n+4}_.prototype.writeFloatLE=function(o,n,r){return Et(this,o,n,!0,r)};_.prototype.writeFloatBE=function(o,n,r){return Et(this,o,n,!1,r)};function Pt(e,o,n,r,p){return o=+o,n=n>>>0,p||Lt(e,o,n,8,17976931348623157e292,-17976931348623157e292),ke.write(e,o,n,r,52,8),n+8}_.prototype.writeDoubleLE=function(o,n,r){return Pt(this,o,n,!0,r)};_.prototype.writeDoubleBE=function(o,n,r){return Pt(this,o,n,!1,r)};_.prototype.copy=function(o,n,r,p){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!p&&p!==0&&(p=this.length),n>=o.length&&(n=o.length),n||(n=0),p>0&&p<r&&(p=r),p===r||o.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),o.length-n<p-r&&(p=o.length-n+r);var s=p-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,p):Uint8Array.prototype.set.call(o,this.subarray(r,p),n),s};_.prototype.fill=function(o,n,r,p){if(typeof o=="string"){if(typeof n=="string"?(p=n,n=0,r=this.length):typeof r=="string"&&(p=r,r=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!_.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(o.length===1){var s=o.charCodeAt(0);(p==="utf8"&&s<128||p==="latin1")&&(o=s)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=n;m<r;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,p),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-n;++m)this[m+n]=d[m%l]}return this};var Rc=/[^+/0-9A-Za-z-_]/g;function Cc(e){if(e=e.split("=")[0],e=e.trim().replace(Rc,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function an(e,o){o=o||1/0;for(var n,r=e.length,p=null,s=[],m=0;m<r;++m){if(n=e.charCodeAt(m),n>55295&&n<57344){if(!p){if(n>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&s.push(239,191,189);continue}p=n;continue}if(n<56320){(o-=3)>-1&&s.push(239,191,189),p=n;continue}n=(p-55296<<10|n-56320)+65536}else p&&(o-=3)>-1&&s.push(239,191,189);if(p=null,n<128){if((o-=1)<0)break;s.push(n)}else if(n<2048){if((o-=2)<0)break;s.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;s.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return s}function Dc(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function Oc(e,o){for(var n,r,p,s=[],m=0;m<e.length&&!((o-=2)<0);++m)n=e.charCodeAt(m),r=n>>8,p=n%256,s.push(p),s.push(r);return s}function Nt(e){return nn.toByteArray(Cc(e))}function po(e,o,n,r){for(var p=0;p<r&&!(p+n>=o.length||p>=e.length);++p)o[p+n]=e[p];return p}function Z(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function sn(e){return e!==e}var Mc=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var r=n*16,p=0;p<16;++p)o[r+p]=e[n]+e[p];return o}()});var Bt=D((qm,Mt)=>{t();var L=Mt.exports={},J,Q;function mn(){throw new Error("setTimeout has not been defined")}function _n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?J=setTimeout:J=mn}catch(e){J=mn}try{typeof clearTimeout=="function"?Q=clearTimeout:Q=_n}catch(e){Q=_n}})();function Ct(e){if(J===setTimeout)return setTimeout(e,0);if((J===mn||!J)&&setTimeout)return J=setTimeout,setTimeout(e,0);try{return J(e,0)}catch(o){try{return J.call(null,e,0)}catch(n){return J.call(this,e,0)}}}function Bc(e){if(Q===clearTimeout)return clearTimeout(e);if((Q===_n||!Q)&&clearTimeout)return Q=clearTimeout,clearTimeout(e);try{return Q(e)}catch(o){try{return Q.call(null,e)}catch(n){return Q.call(this,e)}}}var ce=[],Ie=!1,fe,so=-1;function Fc(){!Ie||!fe||(Ie=!1,fe.length?ce=fe.concat(ce):so=-1,ce.length&&Dt())}function Dt(){if(!Ie){var e=Ct(Fc);Ie=!0;for(var o=ce.length;o;){for(fe=ce,ce=[];++so<o;)fe&&fe[so].run();so=-1,o=ce.length}fe=null,Ie=!1,Bc(e)}}L.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];ce.push(new Ot(e,o)),ce.length===1&&!Ie&&Ct(Dt)};function Ot(e,o){this.fun=e,this.array=o}Ot.prototype.run=function(){this.fun.apply(null,this.array)};L.title="browser";L.browser=!0;L.env={};L.argv=[];L.version="";L.versions={};function pe(){}L.on=pe;L.addListener=pe;L.once=pe;L.off=pe;L.removeListener=pe;L.removeAllListeners=pe;L.emit=pe;L.prependListener=pe;L.prependOnceListener=pe;L.listeners=function(e){return[]};L.binding=function(e){throw new Error("process.binding is not supported")};L.cwd=function(){return"/"};L.chdir=function(e){throw new Error("process.chdir is not supported")};L.umask=function(){return 0}});var a,c,Uc,i,t=g(()=>{a=T(Rt()),c=T(Bt()),Uc=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var n=__magic__;return n}(Object),i=Uc});var Ft=g(()=>{"use strict";t()});var Ut,dn=g(()=>{"use strict";t();Ut="Action not allowed. User is logged in. Call logout() first"});var Wt=g(()=>{"use strict";t()});var ln,$t=g(()=>{"use strict";t();ln=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ln||{})});var Vt=g(()=>{"use strict";t()});var un=g(()=>{"use strict";t()});var Gt=g(()=>{"use strict";t()});var Ht=g(()=>{"use strict";t()});var jt=g(()=>{"use strict";t()});var zt=g(()=>{"use strict";t()});var qt,Le,gn=g(()=>{"use strict";t();qt=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Le=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Kt,a_,Xt,i_,j=g(()=>{"use strict";t();gn();Kt=(n=>(n.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",n.reloginRequest="RELOGIN_REQUEST",n))(Kt||{}),a_=u(u({},Le.WindowProviderRequestEnums),Kt),Xt=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Xt||{}),i_=u(u({},Le.WindowProviderResponseEnums),Xt)});var Yt=g(()=>{"use strict";t()});var Zt=g(()=>{"use strict";t()});var M=g(()=>{"use strict";t()});var Jt=g(()=>{"use strict";t()});var Qt=g(()=>{"use strict";t()});var er=g(()=>{"use strict";t()});var B=g(()=>{"use strict";t();Ht();jt();zt();j();Yt();Zt();M();Jt();Qt();er()});var fn,or,w_,nr,v_,tr,k_,A_,I_,rr,ar=g(()=>{"use strict";t();B();fn={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:or,egldLabel:w_}=fn["devnet"],{chainId:nr,egldLabel:v_}=fn["testnet"],{chainId:tr,egldLabel:k_}=fn["mainnet"],A_={["devnet"]:or,["testnet"]:nr,["mainnet"]:tr},I_={[or]:"devnet",[nr]:"testnet",[tr]:"mainnet"},rr="multiversx://"});var xn=g(()=>{"use strict";t()});var ee,ir=g(()=>{"use strict";t();ee=require("@multiversx/sdk-web-wallet-provider")});var xe,Fe=g(()=>{"use strict";t();xe=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var cr,pr,hn,C_,D_,sr=g(()=>{"use strict";t();Fe();hn=String((pr=(cr=xe.safeWindow)==null?void 0:cr.navigator)==null?void 0:pr.userAgent),C_=/^((?!chrome|android).)*safari/i.test(hn),D_=/firefox/i.test(hn)&&/windows/i.test(hn)});var yn,Tn,mr,mo,_r,Ee,v=g(()=>{"use strict";t();Ft();dn();Wt();$t();Vt();un();Gt();ar();xn();ir();sr();yn=5e4,Tn=1e9,mr=1,mo="logout",_r="login",Ee="0"});var Pe,_o=g(()=>{"use strict";t();Pe=()=>Date.now()/1e3});var dr=g(()=>{"use strict";t()});var lr=g(()=>{"use strict";t()});var bn=g(()=>{"use strict";t();_o();dr();lr()});var Sn={};ae(Sn,{clear:()=>Gc,getItem:()=>$c,localStorageKeys:()=>de,removeItem:()=>Vc,setItem:()=>Wc});var de,lo,Wc,$c,Vc,Gc,Ne=g(()=>{"use strict";t();bn();de={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},lo=typeof localStorage!="undefined",Wc=({key:e,data:o,expires:n})=>{!lo||localStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},$c=e=>{if(!lo)return;let o=localStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Pe()>=n.expires?(localStorage.removeItem(String(e)),null):n.data},Vc=e=>{!lo||localStorage.removeItem(String(e))},Gc=()=>{!lo||localStorage.clear()}});var wn={};ae(wn,{clear:()=>xr,getItem:()=>gr,removeItem:()=>fr,setItem:()=>ur,storage:()=>Hc});var ur,gr,fr,xr,Hc,hr=g(()=>{"use strict";t();ur=({key:e,data:o,expires:n})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:n,data:o}))},gr=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let n=JSON.parse(o);return!n||!n.hasOwnProperty("expires")||!n.hasOwnProperty("data")?null:Date.now()>=n.expires?(sessionStorage.removeItem(String(e)),null):n.data},fr=e=>sessionStorage.removeItem(String(e)),xr=()=>sessionStorage.clear(),Hc={setItem:ur,getItem:gr,removeItem:fr,clear:xr}});var he,Re=g(()=>{"use strict";t();Ne();hr();he={session:wn,local:Sn}});var vn,E,Ue,$=g(()=>{"use strict";t();vn=require("@reduxjs/toolkit");v();E=(0,vn.createAction)(mo),Ue=(0,vn.createAction)(_r,e=>({payload:e}))});var An,yr,Tr,uo,kn,br,In,_d,Ln,dd,ld,ud,gd,fd,xd,hd,yd,go,fo=g(()=>{"use strict";t();An=require("@multiversx/sdk-core"),yr=require("@reduxjs/toolkit"),Tr=require("redux-persist");v();Re();Ne();$();uo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ee},kn={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":uo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},br=(0,yr.createSlice)({name:"accountInfoSlice",initialState:kn,reducers:{setAddress:(e,o)=>{let n=o.payload;e.address=n,e.publicKey=n?new An.Address(n).hex():""},setAccount:(e,o)=>{let n=e.address===o.payload.address;e.accounts={[e.address]:n?o.payload:uo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:n}=e;e.accounts[n].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(E,()=>(he.local.removeItem(de.loginExpiresAt),kn)),e.addCase(Ue,(o,n)=>{let{address:r}=n.payload;o.address=r,o.publicKey=new An.Address(r).hex()}),e.addCase(Tr.REHYDRATE,(o,n)=>{var f;if(!((f=n.payload)!=null&&f.account))return;let{account:r}=n.payload,{address:p,shard:s,accounts:m,publicKey:d}=r;o.address=p,o.shard=s;let l=m&&p in m;o.accounts=l?m:kn.accounts,o.publicKey=d})}}),{setAccount:In,setAddress:_d,setAccountNonce:Ln,setAccountShard:dd,setLedgerAccount:ld,updateLedgerAccount:ud,setWalletConnectAccount:gd,setIsAccountLoading:fd,setAccountLoadingError:xd,setWebsocketEvent:hd,setWebsocketBatchEvent:yd}=br.actions,go=br.reducer});function We(){return new Date().setHours(new Date().getHours()+24)}function $e(e){he.local.setItem({key:de.loginExpiresAt,data:e,expires:e})}var En=g(()=>{"use strict";t();Re();Ne()});var wr,Sr,vr,Ed,Pd,Nd,xo,Rd,kr,Ar,Cd,Dd,Od,ho,yo=g(()=>{"use strict";t();wr=require("@reduxjs/toolkit");En();j();$();Sr={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},vr=(0,wr.createSlice)({name:"loginInfoSlice",initialState:Sr,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(E,()=>Sr),e.addCase(Ue,(o,n)=>{o.isLoginSessionInvalid=!1,o.loginMethod=n.payload.loginMethod,o.iframeLoginType=n.payload.iframeLoginType,$e(We())})}}),{setLoginMethod:Ed,setWalletConnectLogin:Pd,setLedgerLogin:Nd,setTokenLogin:xo,setTokenLoginSignature:Rd,setWalletLogin:kr,invalidateLoginSession:Ar,setLogoutRoute:Cd,setIsWalletConnectV2Initialized:Dd,setWebviewLogin:Od}=vr.actions,ho=vr.reducer});var Lr,Ir,Er,Ud,Wd,$d,Vd,To,bo=g(()=>{"use strict";t();Lr=require("@reduxjs/toolkit");$();Ir={},Er=(0,Lr.createSlice)({name:"modalsSlice",initialState:Ir,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(E,()=>Ir)}}),{setTxSubmittedModal:Ud,setNotificationModal:Wd,clearTxSubmittedModal:$d,clearNotificationModal:Vd}=Er.actions,To=Er.reducer});var ye,Ce=g(()=>{"use strict";t();ye=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var V,oe=g(()=>{"use strict";t();Ce();V=()=>{if(!ye())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:n,origin:r,href:p,search:s}}=window;return{pathname:o,hash:n,origin:r,href:p,search:s}}});var Pr=g(()=>{"use strict";t();oe()});var Nr=g(()=>{"use strict";t();Te()});var Rr=g(()=>{"use strict";t();Fe()});var Te=g(()=>{"use strict";t();Pr();Nr();oe();Rr()});var So=g(()=>{"use strict";t();Te()});var Cr=g(()=>{"use strict";t();So()});function Dr(e){return e[Math.floor(Math.random()*e.length)]}var Or=g(()=>{"use strict";t()});var Mr=g(()=>{"use strict";t();un()});var Br=g(()=>{"use strict";t();Cr();Or();Mr()});var Fr,Ur,Wr,Pn,qc,$r,bl,Sl,Vr,wo,vo=g(()=>{"use strict";t();Fr=require("@reduxjs/toolkit"),Ur=T(require("lodash.omit")),Wr=require("redux-persist");xn();$();Br();Pn={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},qc={network:Pn},$r=(0,Fr.createSlice)({name:"appConfig",initialState:qc,reducers:{initializeNetworkConfig:(e,o)=>{let n=Dr(o.payload.walletConnectV2RelayAddresses),r=(0,Ur.default)(o.payload,"walletConnectV2RelayAddresses");e.network=b(u(u({},e.network),r),{walletConnectV2RelayAddress:n})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(E,o=>{o.network.customWalletAddress=void 0}),e.addCase(Wr.REHYDRATE,(o,n)=>{var p,s;if(!((s=(p=n.payload)==null?void 0:p.network)!=null&&s.customWalletAddress))return;let{network:{customWalletAddress:r}}=n.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:bl,updateNetworkConfig:Sl,setCustomWalletAddress:Vr}=$r.actions,wo=$r.reducer});var Gr,Nn,Hr,Ll,El,Pl,ko,Ao=g(()=>{"use strict";t();Gr=require("@reduxjs/toolkit");B();$();Nn={isSigning:!1,signedSessions:{}},Hr=(0,Gr.createSlice)({name:"signedMessageInfoSliceState",initialState:Nn,reducers:{setSignSession:(e,o)=>{let{sessionId:n,signedSession:r,errorMessage:p}=o.payload;p&&(e.errorMessage=p),e.isSigning=r.status==="pending",e.signedSessions[n]=u(u({},e.signedSessions[n]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Nn},extraReducers:e=>{e.addCase(E,()=>Nn)}}),{setSignSession:Ll,clearSignedMessageInfo:El,setSignSessionState:Pl}=Hr.actions,ko=Hr.reducer});var zr,qr,jr,Kr,Kc,Xc,Bl,Fl,Io,Lo=g(()=>{"use strict";t();zr=require("@reduxjs/toolkit"),qr=require("redux-persist");B();_o();$();jr={customToasts:[],transactionToasts:[]},Kr=(0,zr.createSlice)({name:"toastsSlice",initialState:jr,reducers:{addCustomToast:(e,o)=>{let n=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(p=>p.toastId===n);if(r!==-1){e.customToasts[r]=b(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:n});return}e.customToasts.push(b(u({},o.payload),{type:"custom",toastId:n}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(n=>n.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Pe(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(n=>n.toastId!==o.payload)}},extraReducers:e=>{e.addCase(E,()=>jr),e.addCase(qr.REHYDRATE,(o,n)=>{var p,s;let r=(s=(p=n.customToasts)==null?void 0:p.filter(m=>!("component"in m)))!=null?s:[];o.customToasts=r})}}),{addCustomToast:Kc,removeCustomToast:Xc,addTransactionToast:Bl,removeTransactionToast:Fl}=Kr.actions,Io=Kr.reducer});var Xr,Cn,Dn,On,Yc,Rn,Yr,Vl,Gl,Hl,Eo,Po=g(()=>{"use strict";t();Xr=require("@reduxjs/toolkit");$();Cn="Transaction failed",Dn="Transaction successful",On="Processing transaction",Yc="Transaction submitted",Rn={},Yr=(0,Xr.createSlice)({name:"transactionsInfo",initialState:Rn,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:n,transactionsDisplayInfo:r}=o.payload;n!=null&&(e[n]={errorMessage:(r==null?void 0:r.errorMessage)||Cn,successMessage:(r==null?void 0:r.successMessage)||Dn,processingMessage:(r==null?void 0:r.processingMessage)||On,submittedMessage:(r==null?void 0:r.submittedMessage)||Yc,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Rn},extraReducers:e=>{e.addCase(E,()=>Rn)}}),{clearTransactionsInfo:Vl,setTransactionsDisplayInfo:Gl,clearTransactionsInfoForSessionId:Hl}=Yr.actions,Eo=Yr.reducer});function Zr(e){return e!=null&&(cp(e)||dp(e))}function No(e){return e!=null&&(pp(e)||lp(e))}function Ro(e){return e!=null&&(sp(e)||up(e))}function Jr(e){return e!=null&&(mp(e)||gp(e))}function Qr(e){return e!=null&&_p(e)}function cp(e){return e!=null&&Jc.includes(e)}function pp(e){return e!=null&&Qc.includes(e)}function sp(e){return e!=null&&ep.includes(e)}function mp(e){return e!=null&&op.includes(e)}function _p(e){return e!=null&&np.includes(e)}function dp(e){return e!=null&&tp.includes(e)}function lp(e){return e!=null&&rp.includes(e)}function up(e){return e!=null&&ap.includes(e)}function gp(e){return e!=null&&ip.includes(e)}var Jc,Qc,ep,op,np,tp,rp,ap,ip,Bn=g(()=>{"use strict";t();j();Jc=["sent"],Qc=["success"],ep=["fail","cancelled","timedOut"],op=["invalid"],np=["timedOut"],tp=["pending"],rp=["success"],ap=["fail","invalid"],ip=["not executed"]});var ea,oa,Ge,fp,na,Ql,eu,ou,nu,tu,ru,au,iu,cu,pu,su,Co,Do=g(()=>{"use strict";t();ea=require("@reduxjs/toolkit"),oa=require("redux-persist");j();Bn();$();Ge={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},fp={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},na=(0,ea.createSlice)({name:"transactionsSlice",initialState:Ge,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,f;let{sessionId:n,transactions:r,errorMessage:p,status:s,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[n]=u(u(u({},fp),((l=e.signedTransactions[n])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[n]||{}),e.signedTransactions[n]={transactions:r,status:s,errorMessage:p,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[n]),d!=null?d:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===n&&(e.transactionsToSign=Ge.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:n,status:r,errorMessage:p,transactions:s}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].status=r,p!=null&&(e.signedTransactions[n].errorMessage=p),s!=null&&(e.signedTransactions[n].transactions=s))},updateSignedTransactionStatus:(e,o)=>{var f,y,x,k,A,w,P,U;let{sessionId:n,status:r,errorMessage:p,transactionHash:s,serverTransaction:m,inTransit:d}=o.payload,l=(y=(f=e.signedTransactions)==null?void 0:f[n])==null?void 0:y.transactions;if(l!=null){e.signedTransactions[n].transactions=l.map(R=>R.hash===s?b(u(u({},m!=null?m:{}),R),{status:r,errorMessage:p,inTransit:d}):R);let W=(k=(x=e.signedTransactions[n])==null?void 0:x.transactions)==null?void 0:k.every(R=>No(R.status)),X=(w=(A=e.signedTransactions[n])==null?void 0:A.transactions)==null?void 0:w.some(R=>Ro(R.status)),ve=(U=(P=e.signedTransactions[n])==null?void 0:P.transactions)==null?void 0:U.every(R=>Jr(R.status));W&&(e.signedTransactions[n].status="success"),X&&(e.signedTransactions[n].status="fail"),ve&&(e.signedTransactions[n].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:n,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[n]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ge.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ge.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:n,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[n]!=null&&(e.signedTransactions[n].customTransactionInformation=u(u({},e.signedTransactions[n].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(E,()=>Ge),e.addCase(oa.REHYDRATE,(o,n)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=n.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:p}=n.payload.transactions,s=Object.entries(r).reduce((d,[l,f])=>{let y=new Date(l),x=new Date;return x.setHours(x.getHours()+5),x-y>0||(d[l]=f),d},{});p!=null&&(o.customTransactionInformationForSessionId=p),r!=null&&(o.signedTransactions=s)})}}),{updateSignedTransactionStatus:Ql,updateSignedTransactions:eu,setTransactionsToSign:ou,clearAllTransactionsToSign:nu,clearAllSignedTransactions:tu,clearSignedTransaction:ru,clearTransactionToSign:au,setSignTransactionsError:iu,setSignTransactionsCancelMessage:cu,moveTransactionsToSignedState:pu,updateSignedTransactionsCustomTransactionInformation:su}=na.actions,Co=na.reducer});var ta,Fn,ra,lu,uu,gu,fu,Oo,Mo=g(()=>{"use strict";t();ta=require("@reduxjs/toolkit");$();Fn={},ra=(0,ta.createSlice)({name:"batchTransactionsSlice",initialState:Fn,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Fn},extraReducers:e=>{e.addCase(E,()=>Fn)}}),{setBatchTransactions:lu,updateBatchTransactions:uu,clearBatchTransactions:gu,clearAllBatchTransactions:fu}=ra.actions,Oo=ra.reducer});var ia,aa,ca,Tu,pa,Un=g(()=>{"use strict";t();ia=require("@reduxjs/toolkit");$();aa={},ca=(0,ia.createSlice)({name:"dappConfigSlice",initialState:aa,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(E,()=>aa)}}),{setDappConfig:Tu}=ca.actions,pa=ca.reducer});var q=g(()=>{"use strict";t();fo();yo();bo();vo();Ao();Lo();Po();Do();Mo();Un()});var Wn=g(()=>{"use strict";t()});var _a,Tp,bp,be,Uo=g(()=>{"use strict";t();_a=require("@reduxjs/toolkit");Wn();fo();Mo();Un();yo();bo();vo();Ao();Lo();Po();Do();Tp={["account"]:go,["dappConfig"]:pa,["loginInfo"]:ho,["modals"]:To,["networkConfig"]:wo,["signedMessageInfo"]:ko,["toasts"]:Io,["transactionsInfo"]:Eo,["transactions"]:Co,["batchTransactions"]:Oo},bp=(e={})=>(0,_a.combineReducers)(u(u({},Tp),e)),be=bp});var ga={};ae(ga,{default:()=>Bp,sessionStorageReducers:()=>$n});function se(e,o=[]){return{key:e,version:1,storage:la.default,blacklist:o}}var F,da,la,Sp,He,wp,vp,kp,Ap,Ip,Lp,Ep,Pp,Np,Rp,ua,Cp,$n,Dp,Op,Mp,Bp,fa=g(()=>{"use strict";t();F=require("redux-persist"),da=T(require("redux-persist/lib/storage")),la=T(require("redux-persist/lib/storage/session"));Uo();q();fo();Mo();yo();bo();vo();Ao();Lo();Po();Do();Wn();Sp={persistReducersStorageType:"localStorage"},He={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},wp=se(He["account"]),vp=se(He["loginInfo"]),kp=se(He["modals"]),Ap=se(He["networkConfig"]),Ip={2:e=>b(u({},e),{networkConfig:Pn})};Lp=se("sdk-dapp-transactionsInfo"),Ep=se("sdk-dapp-transactions",["transactionsToSign"]),Pp=se("sdk-dapp-batchTransactions",["batchTransactions"]),Np=se("sdk-dapp-toasts"),Rp=se("sdk-dapp-signedMessageInfo"),ua={key:"sdk-dapp-store",version:2,storage:da.default,whitelist:Object.keys(He),migrate:(0,F.createMigrate)(Ip,{debug:!1})},Cp=b(u({},ua),{whitelist:[]}),$n={["toasts"]:(0,F.persistReducer)(Np,Io),["transactions"]:(0,F.persistReducer)(Ep,Co),["transactionsInfo"]:(0,F.persistReducer)(Lp,Eo),["batchTransactions"]:(0,F.persistReducer)(Pp,Oo),["signedMessageInfo"]:(0,F.persistReducer)(Rp,ko)},Dp=b(u({},$n),{["account"]:(0,F.persistReducer)(wp,go),["loginInfo"]:(0,F.persistReducer)(vp,ho),["modals"]:(0,F.persistReducer)(kp,To),["networkConfig"]:(0,F.persistReducer)(Ap,wo)}),Op=Sp.persistReducersStorageType==="localStorage",Mp=Op?(0,F.persistReducer)(ua,be($n)):(0,F.persistReducer)(Cp,be(Dp)),Bp=Mp});var xa={};ae(xa,{default:()=>Fp});var Fp,ha=g(()=>{"use strict";t();Uo();Fp=be()});var ya={};ae(ya,{default:()=>Wp});var z,Up,Wp,Ta=g(()=>{"use strict";t();z=require("redux-persist"),Up=[z.FLUSH,z.REHYDRATE,z.PAUSE,z.PERSIST,z.PURGE,z.REGISTER],Wp=Up});var wa={};ae(wa,{default:()=>Sa});function Sa(e){return(0,ba.persistStore)(e)}var ba,va=g(()=>{"use strict";t();ba=require("redux-persist")});var Ka=D((_w,qa)=>{t();var Ms=typeof i=="object"&&i&&i.Object===Object&&i;qa.exports=Ms});var Ya=D((dw,Xa)=>{t();var Bs=Ka(),Fs=typeof self=="object"&&self&&self.Object===Object&&self,Us=Bs||Fs||Function("return this")();Xa.exports=Us});var Zn=D((lw,Za)=>{t();var Ws=Ya(),$s=Ws.Symbol;Za.exports=$s});var oi=D((uw,ei)=>{t();var Ja=Zn(),Qa=Object.prototype,Vs=Qa.hasOwnProperty,Gs=Qa.toString,Ye=Ja?Ja.toStringTag:void 0;function Hs(e){var o=Vs.call(e,Ye),n=e[Ye];try{e[Ye]=void 0;var r=!0}catch(s){}var p=Gs.call(e);return r&&(o?e[Ye]=n:delete e[Ye]),p}ei.exports=Hs});var ti=D((gw,ni)=>{t();var js=Object.prototype,zs=js.toString;function qs(e){return zs.call(e)}ni.exports=qs});var ci=D((fw,ii)=>{t();var ri=Zn(),Ks=oi(),Xs=ti(),Ys="[object Null]",Zs="[object Undefined]",ai=ri?ri.toStringTag:void 0;function Js(e){return e==null?e===void 0?Zs:Ys:ai&&ai in Object(e)?Ks(e):Xs(e)}ii.exports=Js});var si=D((xw,pi)=>{t();var Qs=Array.isArray;pi.exports=Qs});var _i=D((hw,mi)=>{t();function em(e){return e!=null&&typeof e=="object"}mi.exports=em});var li=D((yw,di)=>{t();var om=ci(),nm=si(),tm=_i(),rm="[object String]";function am(e){return typeof e=="string"||!nm(e)&&tm(e)&&om(e)==rm}di.exports=am});var Pi=D((gA,Ei)=>{t();function Pm(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Ei.exports=Pm});var ct={};ae(ct,{css:()=>Gi,default:()=>Dm});var Gi,Dm,pt=g(()=>{"use strict";t();Gi=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gi));Dm={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var mt={};ae(mt,{css:()=>qi,default:()=>Bm});var qi,Bm,_t=g(()=>{"use strict";t();qi=`.dapp-core-component__loginButtonStyles__default-login-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qi));Bm={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var Wm={};ae(Wm,{WebWalletLoginButton:()=>Um});module.exports=le(Wm);t();var Yi=T(require("react"));t();t();v();t();var Pa=require("react"),De=require("react-redux");t();var Vn=require("@reduxjs/toolkit"),La=require("react-redux/lib/utils/Subscription");q();t();var sa=T(require("lodash.throttle"));v();q();En();Re();Ne();var xp=[mo],Bo=!1,hp=(0,sa.default)(()=>{$e(We())},5e3),ma=e=>o=>n=>{if(xp.includes(n.type))return o(n);let r=e.getState(),p=he.local.getItem(de.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(n);if(p==null)return $e(We());let m=Date.now();return p-m<0&&!Bo?setTimeout(()=>{Bo=!0,e.dispatch(Ar())},1e3):(Bo&&(Bo=!1),hp()),o(n)};t();t();function Fo(){return typeof sessionStorage!="undefined"}var ka=Fo()?(fa(),le(ga)).default:(ha(),le(xa)).default,Aa=Fo()?(Ta(),le(ya)).default:[],Ia=Fo()?(va(),le(wa)).default:e=>e;Uo();var I=(0,Vn.configureStore)({reducer:ka,middleware:e=>e({serializableCheck:{ignoredActions:[...Aa,Ln.type,In.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(ma)}),Ea=(0,La.createSubscription)(I),hg=Ia(I),yg=(0,Vn.configureStore)({reducer:be});var $p={store:I,subscription:Ea},Gn=(0,Pa.createContext)($p),wg=(0,De.createStoreHook)(Gn),Wo=(0,De.createDispatchHook)(Gn),C=(0,De.createSelectorHook)(Gn);t();t();q();t();var Na=T(require("lodash.isequal")),$o=require("reselect"),h=(0,$o.createSelectorCreator)($o.defaultMemoize,Na.default);var ne=e=>e.account,Vo=h(ne,e=>e.address),Oe=h(ne,Vo,(e,o)=>o in e.accounts?e.accounts[o]:uo),Vp=h(ne,Oe,(e,o)=>{let p=e,{accounts:n}=p,r=ao(p,["accounts"]);return b(u({},r),{address:o.address,account:o})}),Lg=h(Oe,e=>e.balance),Gp=h(Oe,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Eg=h(ne,e=>e.shard),Pg=h(ne,e=>e.ledgerAccount),Ng=h(ne,e=>e.walletConnectAccount),Rg=h(ne,e=>e.isAccountLoading),Cg=h(ne,e=>e.accountLoadingError),Hp=h(ne,e=>e.websocketEvent),jp=h(ne,e=>e.websocketBatchEvent);t();var zp=e=>e.dappConfig,Mg=h(zp,e=>e.shouldUseWebViewProvider);t();var G=e=>e.loginInfo,Wg=h(G,e=>e.loginMethod),Go=h(G,Vo,(e,o)=>Boolean(o)),$g=h(G,e=>e.walletConnectLogin),Vg=h(G,e=>e.ledgerLogin),qp=h(G,e=>e.walletLogin),Gg=h(G,e=>e.isLoginSessionInvalid),je=h(G,e=>e.tokenLogin),Hg=h(G,e=>e.logoutRoute),Kp=h(G,e=>e.isWalletConnectV2Initialized);t();var Ra=e=>e.modals,qg=h(Ra,e=>e.txSubmittedModal),Kg=h(Ra,e=>e.notificationModal);t();var me=e=>e.networkConfig,Ca=h(me,e=>e.network.chainId),Zg=h(me,e=>e.network.roundDuration),Jg=h(me,e=>e.network.walletConnectBridgeAddress),Qg=h(me,e=>e.network.walletConnectV2RelayAddress),ef=h(me,e=>e.network.walletConnectV2ProjectId),of=h(me,e=>e.network.walletConnectV2Options),nf=h(me,e=>e.network.walletConnectDeepLink),te=h(me,e=>e.network),Xp=h(te,e=>e.apiAddress),Da=h(te,e=>e.explorerAddress),tf=h(te,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),rf=h(te,e=>e.xAliasAddress),Yp=h(te,e=>e.egldLabel);t();var Ho=e=>e.signedMessageInfo,pf=h(Ho,e=>e.isSigning),sf=h(Ho,e=>e.errorMessage),mf=h(Ho,e=>{let o=Object.keys(e.signedSessions),n=o.length;return e.signedSessions[o[n-1]]}),_f=h(Ho,e=>{let o=Object.keys(e.signedSessions),n=o.length;return o.length>0?o[n-1]:""});t();var Oa=e=>e.toasts,uf=h(Oa,e=>e.customToasts),gf=h(Oa,e=>e.transactionToasts);t();q();var Ma={errorMessage:Cn,successMessage:Dn,processingMessage:On},Zp=e=>e.transactionsInfo,yf=h(Zp,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Ma);t();t();var re=require("@multiversx/sdk-core");v();t();var Hn=require("@multiversx/sdk-core/out");t();t();function jo(e){try{let o=atob(e),n=btoa(o),r=a.Buffer.from(e,"base64").toString(),p=a.Buffer.from(r).toString("base64"),s=e===n||n.startsWith(e),m=e===p||p.startsWith(e);if(s&&m)return!0}catch(o){return!1}return!1}function Se(e){return jo(e)?atob(e):e}t();t();t();t();var Ba=e=>{let o=e!=null?e:"";return jo(o)?Hn.TransactionPayload.fromEncoded(o):new Hn.TransactionPayload(o)};t();v();var zo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ln).some(n=>e.startsWith(n)):!1;function jn(e){var r,p,s;let o=u({},e);zo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let n=new re.Transaction(u(u(b(u(b(u({value:o.value.valueOf(),data:Ba(o.data),nonce:o.nonce.valueOf(),receiver:new re.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new re.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:yn,gasPrice:(p=o.gasPrice.valueOf())!=null?p:Tn,chainID:o.chainID.valueOf(),version:new re.TransactionVersion((s=o.version)!=null?s:mr)}),o.options?{options:new re.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new re.Address(o.guardian)}:{}));return o.guardianSignature&&n.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&n.applySignature(a.Buffer.from(o.signature,"hex")),n}t();t();v();t();t();t();var os=require("@multiversx/sdk-core/out");t();v();t();var Fa=require("@multiversx/sdk-core");B();t();var ns=require("@multiversx/sdk-core");t();t();t();var ts=require("@multiversx/sdk-core"),rs=T(require("bignumber.js"));j();t();t();t();var qn="blocks";t();t();t();t();M();t();t();M();t();t();t();var ms=T(require("bignumber.js"));v();t();var ss=require("@multiversx/sdk-core"),Kn=T(require("bignumber.js"));v();t();var cs=T(require("bignumber.js"));t();Kn.default.config({ROUNDING_MODE:Kn.default.ROUND_FLOOR});t();t();t();v();t();t();t();t();v();t();v();t();var _s=require("@multiversx/sdk-core");v();t();var qe=require("@multiversx/sdk-core"),ls=T(require("bignumber.js"));v();t();t();var ds=T(require("bignumber.js"));v();t();v();t();t();t();t();t();t();v();t();v();t();v();t();M();var gs=["reDelegateRewards","claimRewards","unBond"],fs=["wrapEgld","unwrapEgld"],xs=["unStake"],hs=["unDelegate"];t();t();t();v();t();var bs=T(require("bignumber.js"));t();t();M();t();var ws=T(require("bignumber.js"));t();t();t();t();var ks=T(require("bignumber.js"));B();t();t();t();t();j();t();var Ls=require("@multiversx/sdk-web-wallet-provider");v();t();var Is=T(require("qs"));t();Te();Ce();t();Ce();var ob={search:ye()?window.location.search:"",removeParams:[]};t();t();t();oe();t();M();t();t();oe();t();var Es=T(require("linkifyjs"));t();v();t();var Ps=T(require("bignumber.js"));t();B();t();t();j();t();j();t();t();t();M();t();M();t();var Ns=T(require("bignumber.js"));v();M();t();M();t();var ja=require("react");B();t();t();M();t();t();var Rs=require("@multiversx/sdk-core/out"),Cs=T(require("bignumber.js"));M();t();B();t();t();B();var K0=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];t();var za=require("react");B();oe();t();var Os=require("react");M();var nS=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Bn();t();var Ko=e=>e.transactions,Xe=h(Ko,e=>e.signedTransactions),zS=h(Ko,e=>e.signTransactionsError),qS=h(Ko,e=>e.signTransactionsCancelMessage),Xo=e=>o=>Object.entries(o).reduce((n,[r,p])=>(e(p.status)&&(n[r]=p),n),{}),KS=h(Xe,Xo(Zr)),XS=h(Xe,Xo(No)),YS=h(Xe,Xo(Ro)),ZS=h(Xe,Xo(Qr)),JS=h(Ko,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:b(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(n=>jn(n)))||[]})}),QS=h(Xe,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});t();var ui=T(li());var Ze=e=>{if(!e||!(0,ui.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[n,r,p,s]=o,m=JSON.parse(Se(s)),d=Se(n);return{ttl:Number(p),extraInfo:m,origin:d,blockHash:r}}catch(n){return console.error(`Error trying to decode ${e}:`,n),null}};var gi=e=>{var p;let o=C(je),n=(p=o==null?void 0:o.loginToken)!=null?p:e;if(!n)return;let r=Ze(n);if(!!r)return r.origin.toLowerCase().startsWith(rr)};t();function im(e){return Object.prototype.toString.call(e)==="[object String]"}var fi=e=>{var n;if(!e||!im(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,p,s]=o,m=Se(r),d=Se(p),l=Ze(d);if(!l)return{address:m,body:d,signature:s,blockHash:"",origin:"",ttl:0};let f=b(u({},l),{address:m,body:d,signature:s});return(n=l.extraInfo)!=null&&n.timestamp||delete f.extraInfo,f}catch(r){return null}};t();t();t();var cm=T(require("bignumber.js"));t();var Ti=T(require("axios"));t();t();t();function xi(e){return S(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}t();var hi=(e,o,n,r=0)=>S(void 0,null,function*(){try{return yield e(...n)}catch(p){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield xi(o.delay)),yield hi(e,o,n,r+1)):null}}),yi=(e,o={retries:5,delay:500})=>(...n)=>S(void 0,null,function*(){return yield hi(e,o,n)});var pm=4,sm=3e4,Yo={current:null},we={current:null},mm=yi((e,o,n)=>S(void 0,null,function*(){if(n){let s=Math.floor(Date.now()/1e3);return{hash:yield n(),timestamp:s}}let{data:r}=yield Ti.default.get(`${e}/${qn}?from=${pm}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[p]=r;return p}));function bi(e,o,n,r){return S(this,null,function*(){if(e==null)throw new Error("missing api url");let p=Date.now();if(Yo.current!=null&&p<Yo.current.timestamp*1e3+sm&&!r)return Yo.current;if(we.current!=null)return yield we.current;we.current=mm(e,o,n);try{let s=yield we.current;if(s==null)throw we.current=null,new Error("could not get block hash");return Yo.current={hash:s.hash,timestamp:s.timestamp},we.current=null,s}catch(s){return we.current=null,null}})}t();var it=require("react");dn();q();t();t();t();oe();t();t();t();t();t();var Si=require("@lifeomic/axios-fetch"),Jn=T(require("axios")),Qn=(0,Si.buildAxiosFetch)(Jn.default),et=(e,o)=>S(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[p]=yield Promise.all([r]);return{data:p,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function _m(e,o,n){return S(this,null,function*(){try{let r=yield Qn(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(n==null?void 0:n.headers)||{})},n));return et(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}function dm(e,o){return S(this,null,function*(){try{let n=yield Qn(e,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return et(n,o)}catch(n){throw console.error("Fetch Error:",n),n}})}function lm(e,o,n){return S(this,null,function*(){try{let r=yield Qn(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(n==null?void 0:n.headers)||{}},n));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return et(r,n)}catch(r){throw console.error("Fetch Error:",r),r}})}var Je=Jn.default.create();Je.get=dm;Je.post=_m;Je.patch=lm;t();t();var um=T(require("axios"));t();var fm=T(require("swr"));t();t();t();t();t();var ym=require("@multiversx/sdk-extension-provider"),Tm=require("@multiversx/sdk-hw-provider"),bm=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Sm=require("@multiversx/sdk-opera-provider"),wm=require("@multiversx/sdk-passkey-provider/out"),vi=require("@multiversx/sdk-web-wallet-provider");v();gn();t();var wi=require("@multiversx/sdk-web-wallet-iframe-provider/out"),hm=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");j();t();var vm="/dapp/init";var ki=e=>new vi.WalletProvider(`${e}${vm}`);var K=e=>`Unable to perform ${e}, Provider not initialized`,Zo=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(K("getAccount"))}setAccount(o){throw new Error(K(`setAccount: ${o}`))}login(o){throw new Error(K(`login with options: ${o}`))}logout(o){throw new Error(K(`logout with options: ${o}`))}getAddress(){throw new Error(K("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,n){throw new Error(K(`sendTransaction with transactions: ${o} options: ${n}`))}signTransaction(o,n){throw new Error(K(`signTransaction with transactions: ${o} options: ${n}`))}signTransactions(o,n){throw new Error(K(`signTransactions with transactions: ${o} options: ${n}`))}signMessage(o,n){throw new Error(K(`signTransactions with ${o} and options ${n}`))}sendCustomMessage({method:o,params:n}){throw new Error(K(`sendCustomMessage with method: ${o} params: ${n}`))}sendCustomRequest(o){throw new Error(K(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},km=new Zo;t();j();t();t();t();t();oe();t();$();B();t();q();t();q();t();var Ii=require("@multiversx/sdk-core");B();Te();t();bn();t();t();var Im=T(require("platform"));t();function Li(){return Go(I.getState())}Ce();t();$();B();t();So();Re();Ne();Te();t();t();t();t();t();t();t();Fe();j();t();t();var Lm=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");t();t();So();Re();t();t();t();q();t();t();var Em=T(require("axios"));Te();t();t();var Nm=T(Pi());Fe();var Ni,Ri,Ci,xA=(Ci=(Ri=(Ni=xe.safeWindow)==null?void 0:Ni.location)==null?void 0:Ri.origin)==null?void 0:Ci.includes("localhost");t();oe();t();var Di=(e,o=["address"])=>{let n=new URL(e),r=new URLSearchParams(n.search);o.forEach(m=>r.delete(m));let p=Array.from(r.values()).length>0?"?":"",s=n.pathname==="/"&&!e.endsWith("/")?"":n.pathname;return n.protocol==="vscode:"?e:`${n.origin}${s}${p}${r.toString()}${n.hash}`};t();var Ui=require("react"),Jo=require("@multiversx/sdk-core");t();t();var nt=()=>C(Oe);t();t();t();t();t();t();t();t();t();var Qe=T(require("react"));var xI=(0,Qe.createContext)({}),hI=I.getState();t();var Mi=T(require("react"));t();var tt=T(require("react")),Rm=T(require("axios"));t();t();q();t();t();var Fi=require("@multiversx/sdk-native-auth-client");t();t();_o();var rt={isExpired:!1},Bi=e=>{if(!e)return rt;let o=fi(e);if(!o)return rt;let n=Pe(),{ttl:r,extraInfo:p}=o,s=p==null?void 0:p.timestamp;if(!s)return rt;let m=s+r,d=n>m,l=m-n;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};t();oe();var eo={origin:V().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},oo=e=>{var n,r,p,s,m,d;return e===!0?eo:{origin:(n=e==null?void 0:e.origin)!=null?n:eo.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:eo.expirySeconds,apiAddress:(p=e==null?void 0:e.apiAddress)!=null?p:eo.apiAddress,tokenExpirationToastWarningSeconds:(s=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?s:eo.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var at=e=>{let{origin:o,apiAddress:n,expirySeconds:r,blockHashShard:p,extraInfo:s,gatewayUrl:m,extraRequestHeaders:d}=oo(e),l=new Fi.NativeAuthClient({origin:o,apiUrl:n,expirySeconds:r,blockHashShard:p,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:oo,initialize:x=>S(void 0,null,function*(){var A,w;if(!n||!o)return"";let k=()=>l.getCurrentBlockHash();try{let P=(A=x==null?void 0:x.latestBlockInfo)!=null?A:yield bi(n,p,k,x==null?void 0:x.noCache);if(!P)return"";let{hash:U,timestamp:W}=P,X=l.encodeValue(JSON.stringify(u(u({},(w=x==null?void 0:x.extraInfo)!=null?w:s),W?{timestamp:W}:{})));return`${l.encodeValue(o)}.${U}.${r}.${X}`}catch(P){return console.error("Error getting native auth token: ",P.toString()),""}}),getToken:({address:x,token:k,signature:A})=>l.getToken(x,k,A),getTokenExpiration:Bi}};var Cm=(e,o)=>{var n;return o?o===!0?e:(n=o.apiAddress)!=null?n:e:null},Wi=e=>{let o=C(te),n=C(je),r=(0,Ui.useRef)(n==null?void 0:n.loginToken),p=Cm(o.apiAddress,e),s=oo(u(u({},e===!0?{}:e),p?{apiAddress:p}:{})),m=Boolean(e),d=at(s),{address:l}=nt(),f=Wo(),y=w=>{r.current=w,f(xo(u(b(u({},n),{loginToken:w}),p?{nativeAuthConfig:s}:{})))},x=()=>{try{return d.initialize()}catch(w){console.error("Unable to get block. Login failed.",w);return}},k=({address:w,signature:P})=>{let U=r.current;if(!U)throw"Token not found. Call `setLoginToken` first.";if(!m){f(xo({loginToken:U,signature:P}));return}let W=d.getToken({address:w,token:U,signature:P});return f(xo(u({loginToken:U,signature:P,nativeAuthToken:W},p?{nativeAuthConfig:s}:{}))),W};return{configuration:s,setLoginToken:y,getNativeAuthLoginToken:x,setTokenLoginInfo:k,refreshNativeAuthTokenLogin:U=>S(void 0,[U],function*({signMessageCallback:w,nativeAuthClientConfig:P}){let X=yield at(P||s).initialize({noCache:Boolean(P)});if(r.current=X,!X)return;let ve=new Jo.Message({address:new Jo.Address(l),data:a.Buffer.from(`${l}${X}`)}),R=yield w(ve,{});if(!(R!=null&&R.signature))throw"Message not signed";return k({address:l,signature:a.Buffer.from(R.signature).toString("hex")})})}};var $i=({callbackRoute:e,token:o,nativeAuth:n,redirectDelayMilliseconds:r=100,customWalletAddress:p})=>{let[s,m]=(0,it.useState)(""),[d,l]=(0,it.useState)(!1),f=C(te),y=Wo(),x=Li(),k=Boolean(n),A=Wi(n),w=o;function P(){return S(this,null,function*(){if(x)throw new Error(Ut);y(Vr(p));try{l(!0);let W=ki(p!=null?p:f.walletAddress),X=new Date,ve=X.setMinutes(X.getMinutes()+3)/1e3,R={data:{},expires:ve};if(k&&!w&&(w=yield A.getNativeAuthLoginToken(),!w)){console.warn("Login cancelled.");return}w&&A.setLoginToken(w);let{origin:dt}=V(),Zi=window!=null&&window.location?`${dt}${e}`:`${e}`;new URLSearchParams(document==null?void 0:document.location.search).get("address")||y(kr(R));let Ji=Di(Zi),Qi=encodeURIComponent(Ji),ec=b(u({callbackUrl:Qi},w&&{token:w}),{redirectDelayMilliseconds:r});yield W.login(ec)}catch(W){console.error(W),m("error logging in"+W.message)}finally{l(!1)}})}let U=Boolean(s);return[P,{error:s,loginFailed:U,isLoading:d&&!U,isLoggedIn:x&&!U}]};t();var to=T(require("react")),Ki=T(require("classnames"));t();var ji=T(require("react"));t();var no=T(require("react"));t();Ce();var Vi=()=>!ye();var Om=()=>S(void 0,null,function*(){return yield Promise.resolve().then(()=>(pt(),ct))}),Mm=()=>(pt(),le(ct)).default,st=Vi();function Hi({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:n}){let[r,p]=no.default.useState(st?void 0:Mm()),[s,m]=no.default.useState(st||n==null?void 0:n()),d=()=>S(this,null,function*(){(e?e():Om()).then(l=>p(l.default)),o==null||o().then(l=>m(l.default))});return(0,no.useEffect)(()=>{st&&d()},[]),{globalStyles:r,styles:s}}function zi(e,o){return n=>{let{globalStyles:r,styles:p}=Hi({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ji.default.createElement(e,b(u({},n),{globalStyles:r!=null?r:{},styles:p!=null?p:{}}))}}var Fm=({onLogin:e,text:o="Default Login Button",className:n="dapp-login-button",btnClassName:r="dapp-default-login-button",disabled:p,"data-testid":s,children:m,globalStyles:d,styles:l})=>{let f=(0,to.useMemo)(()=>({wrapper:(0,Ki.default)(d==null?void 0:d.btn,d==null?void 0:d.btnPrimary,d==null?void 0:d.px4,d==null?void 0:d.m1,d==null?void 0:d.mx3,{[r]:r!=null},n),loginText:l==null?void 0:l.loginText,wrapperClassName:n}),[d,l]);return to.default.createElement("button",{"data-testid":s,disabled:p,className:f.wrapper,onClick:e},m||to.default.createElement("span",{className:f.loginText},o))},Xi=zi(Fm,{ssrStyles:()=>Promise.resolve().then(()=>(_t(),mt)),clientStyles:()=>(_t(),le(mt)).default});var Um=({children:e,token:o,className:n="dapp-web-wallet-login",callbackRoute:r,buttonClassName:p,nativeAuth:s,"data-testid":m,loginButtonText:d="MultiversX Web Wallet",disabled:l,customWalletAddress:f})=>{let[y]=$i({callbackRoute:r,nativeAuth:s,token:o,customWalletAddress:f}),x=gi(o);return Yi.default.createElement(Xi,{onLogin:()=>{y()},className:n,btnClassName:p,text:d,"data-testid":m,disabled:l||x},e)};0&&(module.exports={WebWalletLoginButton});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=WebWalletLoginButton.js.map
