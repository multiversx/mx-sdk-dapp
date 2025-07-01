"use strict";var $m=Object.create;var uo=Object.defineProperty,Vm=Object.defineProperties,qm=Object.getOwnPropertyDescriptor,jm=Object.getOwnPropertyDescriptors,zm=Object.getOwnPropertyNames,Wo=Object.getOwnPropertySymbols,Km=Object.getPrototypeOf,Kn=Object.prototype.hasOwnProperty,Nr=Object.prototype.propertyIsEnumerable;var Cr=(e,o,t)=>o in e?uo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Kn.call(o,t)&&Cr(e,t,o[t]);if(Wo)for(var t of Wo(o))Nr.call(o,t)&&Cr(e,t,o[t]);return e},w=(e,o)=>Vm(e,jm(o));var K=(e,o)=>{var t={};for(var i in e)Kn.call(e,i)&&o.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&Wo)for(var i of Wo(e))o.indexOf(i)<0&&Nr.call(e,i)&&(t[i]=e[i]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Z=(e,o)=>{for(var t in o)uo(e,t,{get:o[t],enumerable:!0})},Dr=(e,o,t,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of zm(o))!Kn.call(e,c)&&c!==t&&uo(e,c,{get:()=>o[c],enumerable:!(i=qm(o,c))||i.enumerable});return e};var h=(e,o,t)=>(t=e!=null?$m(Km(e)):{},Dr(o||!e||!e.__esModule?uo(t,"default",{value:e,enumerable:!0}):t,e)),X=e=>Dr(uo({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((i,c)=>{var p=l=>{try{_(t.next(l))}catch(f){c(f)}},m=l=>{try{_(t.throw(l))}catch(f){c(f)}},_=l=>l.done?i(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var Or=y(Go=>{"use strict";n();Go.byteLength=Ym;Go.toByteArray=Zm;Go.fromByteArray=od;var re=[],Q=[],Xm=typeof Uint8Array!="undefined"?Uint8Array:Array,Xn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Le=0,Rr=Xn.length;Le<Rr;++Le)re[Le]=Xn[Le],Q[Xn.charCodeAt(Le)]=Le;var Le,Rr;Q["-".charCodeAt(0)]=62;Q["_".charCodeAt(0)]=63;function Mr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var i=t===o?0:4-t%4;return[t,i]}function Ym(e){var o=Mr(e),t=o[0],i=o[1];return(t+i)*3/4-i}function Jm(e,o,t){return(o+t)*3/4-t}function Zm(e){var o,t=Mr(e),i=t[0],c=t[1],p=new Xm(Jm(e,i,c)),m=0,_=c>0?i-4:i,l;for(l=0;l<_;l+=4)o=Q[e.charCodeAt(l)]<<18|Q[e.charCodeAt(l+1)]<<12|Q[e.charCodeAt(l+2)]<<6|Q[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Q[e.charCodeAt(l)]<<2|Q[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=Q[e.charCodeAt(l)]<<10|Q[e.charCodeAt(l+1)]<<4|Q[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Qm(e){return re[e>>18&63]+re[e>>12&63]+re[e>>6&63]+re[e&63]}function ed(e,o,t){for(var i,c=[],p=o;p<t;p+=3)i=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Qm(i));return c.join("")}function od(e){for(var o,t=e.length,i=t%3,c=[],p=16383,m=0,_=t-i;m<_;m+=p)c.push(ed(e,m,m+p>_?_:m+p));return i===1?(o=e[t-1],c.push(re[o>>2]+re[o<<4&63]+"==")):i===2&&(o=(e[t-2]<<8)+e[t-1],c.push(re[o>>10]+re[o>>4&63]+re[o<<2&63]+"=")),c.join("")}});var Fr=y(Yn=>{n();Yn.read=function(e,o,t,i,c){var p,m,_=c*8-i-1,l=(1<<_)-1,f=l>>1,b=-7,S=t?c-1:0,k=t?-1:1,E=e[o+S];for(S+=k,p=E&(1<<-b)-1,E>>=-b,b+=_;b>0;p=p*256+e[o+S],S+=k,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=i;b>0;m=m*256+e[o+S],S+=k,b-=8);if(p===0)p=1-f;else{if(p===l)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,i),p=p-f}return(E?-1:1)*m*Math.pow(2,p-i)};Yn.write=function(e,o,t,i,c,p){var m,_,l,f=p*8-c-1,b=(1<<f)-1,S=b>>1,k=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=i?0:p-1,$=i?1:-1,Se=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+S>=1?o+=k/l:o+=k*Math.pow(2,1-S),o*l>=2&&(m++,l/=2),m+S>=b?(_=0,m=b):m+S>=1?(_=(o*l-1)*Math.pow(2,c),m=m+S):(_=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+E]=_&255,E+=$,_/=256,c-=8);for(m=m<<c|_,f+=c;f>0;e[t+E]=m&255,E+=$,m/=256,f-=8);e[t+E-$]|=Se*128}});var Yr=y($e=>{"use strict";n();var Jn=Or(),He=Fr(),Ur=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;$e.Buffer=d;$e.SlowBuffer=sd;$e.INSPECT_MAX_BYTES=50;var Ho=2147483647;$e.kMaxLength=Ho;d.TYPED_ARRAY_SUPPORT=nd();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function nd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function _e(e){if(e>Ho)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ot(e)}return Gr(e,o,t)}d.poolSize=8192;function Gr(e,o,t){if(typeof e=="string")return rd(e,o);if(ArrayBuffer.isView(e))return ad(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ae(e,ArrayBuffer)||e&&ae(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ae(e,SharedArrayBuffer)||e&&ae(e.buffer,SharedArrayBuffer)))return Qn(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(i!=null&&i!==e)return d.from(i,o,t);var c=id(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return Gr(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Hr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function td(e,o,t){return Hr(e),e<=0?_e(e):o!==void 0?typeof t=="string"?_e(e).fill(o,t):_e(e).fill(o):_e(e)}d.alloc=function(e,o,t){return td(e,o,t)};function ot(e){return Hr(e),_e(e<0?0:nt(e)|0)}d.allocUnsafe=function(e){return ot(e)};d.allocUnsafeSlow=function(e){return ot(e)};function rd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=$r(e,o)|0,i=_e(t),c=i.write(e,o);return c!==t&&(i=i.slice(0,c)),i}function Zn(e){for(var o=e.length<0?0:nt(e.length)|0,t=_e(o),i=0;i<o;i+=1)t[i]=e[i]&255;return t}function ad(e){if(ae(e,Uint8Array)){var o=new Uint8Array(e);return Qn(o.buffer,o.byteOffset,o.byteLength)}return Zn(e)}function Qn(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return o===void 0&&t===void 0?i=new Uint8Array(e):t===void 0?i=new Uint8Array(e,o):i=new Uint8Array(e,o,t),Object.setPrototypeOf(i,d.prototype),i}function id(e){if(d.isBuffer(e)){var o=nt(e.length)|0,t=_e(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||tt(e.length)?_e(0):Zn(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Zn(e.data)}function nt(e){if(e>=Ho)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ho.toString(16)+" bytes");return e|0}function sd(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ae(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ae(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var i=o.length,c=t.length,p=0,m=Math.min(i,c);p<m;++p)if(o[p]!==t[p]){i=o[p],c=t[p];break}return i<c?-1:c<i?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<o.length;++i)t+=o[i].length;var c=d.allocUnsafe(t),p=0;for(i=0;i<o.length;++i){var m=o[i];if(ae(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function $r(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ae(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return et(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Xr(e).length;default:if(c)return i?-1:et(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=$r;function cd(e,o,t){var i=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Td(this,o,t);case"utf8":case"utf-8":return qr(this,o,t);case"ascii":return fd(this,o,t);case"latin1":case"binary":return hd(this,o,t);case"base64":return ud(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xd(this,o,t);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}d.prototype._isBuffer=!0;function Ee(e,o,t){var i=e[o];e[o]=e[t],e[t]=i}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ee(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ee(this,t,t+3),Ee(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ee(this,t,t+7),Ee(this,t+1,t+6),Ee(this,t+2,t+5),Ee(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?qr(this,0,o):cd.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=$e.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Ur&&(d.prototype[Ur]=d.prototype.inspect);d.prototype.compare=function(o,t,i,c,p){if(ae(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),i===void 0&&(i=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||i>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=i)return 0;if(c>=p)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=i-t,l=Math.min(m,_),f=this.slice(c,p),b=o.slice(t,i),S=0;S<l;++S)if(f[S]!==b[S]){m=f[S],_=b[S];break}return m<_?-1:_<m?1:0};function Vr(e,o,t,i,c){if(e.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,tt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,i)),d.isBuffer(o))return o.length===0?-1:Br(e,o,t,i,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Br(e,[o],t,i,c);throw new TypeError("val must be string, number or Buffer")}function Br(e,o,t,i,c){var p=1,m=e.length,_=o.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(E,$){return p===1?E[$]:E.readUInt16BE($*p)}var f;if(c){var b=-1;for(f=t;f<m;f++)if(l(e,f)===l(o,b===-1?0:f-b)){if(b===-1&&(b=f),f-b+1===_)return b*p}else b!==-1&&(f-=f-b),b=-1}else for(t+_>m&&(t=m-_),f=t;f>=0;f--){for(var S=!0,k=0;k<_;k++)if(l(e,f+k)!==l(o,k)){S=!1;break}if(S)return f}return-1}d.prototype.includes=function(o,t,i){return this.indexOf(o,t,i)!==-1};d.prototype.indexOf=function(o,t,i){return Vr(this,o,t,i,!0)};d.prototype.lastIndexOf=function(o,t,i){return Vr(this,o,t,i,!1)};function pd(e,o,t,i){t=Number(t)||0;var c=e.length-t;i?(i=Number(i),i>c&&(i=c)):i=c;var p=o.length;i>p/2&&(i=p/2);for(var m=0;m<i;++m){var _=parseInt(o.substr(m*2,2),16);if(tt(_))return m;e[t+m]=_}return m}function md(e,o,t,i){return $o(et(o,e.length-t),e,t,i)}function dd(e,o,t,i){return $o(Sd(o),e,t,i)}function ld(e,o,t,i){return $o(Xr(o),e,t,i)}function _d(e,o,t,i){return $o(wd(o,e.length-t),e,t,i)}d.prototype.write=function(o,t,i,c){if(t===void 0)c="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")c=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,c===void 0&&(c="utf8")):(c=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((i===void 0||i>p)&&(i=p),o.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return pd(this,o,t,i);case"utf8":case"utf-8":return md(this,o,t,i);case"ascii":case"latin1":case"binary":return dd(this,o,t,i);case"base64":return ld(this,o,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _d(this,o,t,i);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ud(e,o,t){return o===0&&t===e.length?Jn.fromByteArray(e):Jn.fromByteArray(e.slice(o,t))}function qr(e,o,t){t=Math.min(e.length,t);for(var i=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,f,b,S;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(S=(p&31)<<6|l&63,S>127&&(m=S));break;case 3:l=e[c+1],f=e[c+2],(l&192)===128&&(f&192)===128&&(S=(p&15)<<12|(l&63)<<6|f&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:l=e[c+1],f=e[c+2],b=e[c+3],(l&192)===128&&(f&192)===128&&(b&192)===128&&(S=(p&15)<<18|(l&63)<<12|(f&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,i.push(m>>>10&1023|55296),m=56320|m&1023),i.push(m),c+=_}return gd(i)}var Wr=4096;function gd(e){var o=e.length;if(o<=Wr)return String.fromCharCode.apply(String,e);for(var t="",i=0;i<o;)t+=String.fromCharCode.apply(String,e.slice(i,i+=Wr));return t}function fd(e,o,t){var i="";t=Math.min(e.length,t);for(var c=o;c<t;++c)i+=String.fromCharCode(e[c]&127);return i}function hd(e,o,t){var i="";t=Math.min(e.length,t);for(var c=o;c<t;++c)i+=String.fromCharCode(e[c]);return i}function Td(e,o,t){var i=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>i)&&(t=i);for(var c="",p=o;p<t;++p)c+=vd[e[p]];return c}function xd(e,o,t){for(var i=e.slice(o,t),c="",p=0;p<i.length-1;p+=2)c+=String.fromCharCode(i[p]+i[p+1]*256);return c}d.prototype.slice=function(o,t){var i=this.length;o=~~o,t=t===void 0?i:~~t,o<0?(o+=i,o<0&&(o=0)):o>i&&(o=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function U(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,i){o=o>>>0,t=t>>>0,i||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,i){o=o>>>0,t=t>>>0,i||U(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,i){o=o>>>0,t=t>>>0,i||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,i){o=o>>>0,t=t>>>0,i||U(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||U(o,2,this.length);var i=this[o]|this[o+1]<<8;return i&32768?i|4294901760:i};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||U(o,2,this.length);var i=this[o+1]|this[o]<<8;return i&32768?i|4294901760:i};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||U(o,4,this.length),He.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||U(o,4,this.length),He.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||U(o,8,this.length),He.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||U(o,8,this.length),He.read(this,o,!1,52,8)};function q(e,o,t,i,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+i>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,i,c){if(o=+o,t=t>>>0,i=i>>>0,!c){var p=Math.pow(2,8*i)-1;q(this,o,t,i,p,0)}var m=1,_=0;for(this[t]=o&255;++_<i&&(m*=256);)this[t+_]=o/m&255;return t+i};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,i,c){if(o=+o,t=t>>>0,i=i>>>0,!c){var p=Math.pow(2,8*i)-1;q(this,o,t,i,p,0)}var m=i-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+i};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,i,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*i-1);q(this,o,t,i,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<i&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+i};d.prototype.writeIntBE=function(o,t,i,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*i-1);q(this,o,t,i,p-1,-p)}var m=i-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+i};d.prototype.writeInt8=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,i){return o=+o,t=t>>>0,i||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function jr(e,o,t,i,c,p){if(t+i>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function zr(e,o,t,i,c){return o=+o,t=t>>>0,c||jr(e,o,t,4,34028234663852886e22,-34028234663852886e22),He.write(e,o,t,i,23,4),t+4}d.prototype.writeFloatLE=function(o,t,i){return zr(this,o,t,!0,i)};d.prototype.writeFloatBE=function(o,t,i){return zr(this,o,t,!1,i)};function Kr(e,o,t,i,c){return o=+o,t=t>>>0,c||jr(e,o,t,8,17976931348623157e292,-17976931348623157e292),He.write(e,o,t,i,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,i){return Kr(this,o,t,!0,i)};d.prototype.writeDoubleBE=function(o,t,i){return Kr(this,o,t,!1,i)};d.prototype.copy=function(o,t,i,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(i||(i=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<i&&(c=i),c===i||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-i&&(c=o.length-t+i);var p=c-i;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,c):Uint8Array.prototype.set.call(o,this.subarray(i,c),t),p};d.prototype.fill=function(o,t,i,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,i=this.length):typeof i=="string"&&(c=i,i=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<i;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<i-t;++m)this[m+t]=_[m%l]}return this};var yd=/[^+/0-9A-Za-z-_]/g;function bd(e){if(e=e.split("=")[0],e=e.trim().replace(yd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function et(e,o){o=o||1/0;for(var t,i=e.length,c=null,p=[],m=0;m<i;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===i){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Sd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function wd(e,o){for(var t,i,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),i=t>>8,c=t%256,p.push(c),p.push(i);return p}function Xr(e){return Jn.toByteArray(bd(e))}function $o(e,o,t,i){for(var c=0;c<i&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ae(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function tt(e){return e!==e}var vd=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var i=t*16,c=0;c<16;++c)o[i+c]=e[t]+e[c];return o}()});var oa=y((gx,ea)=>{n();var D=ea.exports={},ie,se;function rt(){throw new Error("setTimeout has not been defined")}function at(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ie=setTimeout:ie=rt}catch(e){ie=rt}try{typeof clearTimeout=="function"?se=clearTimeout:se=at}catch(e){se=at}})();function Jr(e){if(ie===setTimeout)return setTimeout(e,0);if((ie===rt||!ie)&&setTimeout)return ie=setTimeout,setTimeout(e,0);try{return ie(e,0)}catch(o){try{return ie.call(null,e,0)}catch(t){return ie.call(this,e,0)}}}function Id(e){if(se===clearTimeout)return clearTimeout(e);if((se===at||!se)&&clearTimeout)return se=clearTimeout,clearTimeout(e);try{return se(e)}catch(o){try{return se.call(null,e)}catch(t){return se.call(this,e)}}}var ue=[],Ve=!1,Pe,Vo=-1;function Ad(){!Ve||!Pe||(Ve=!1,Pe.length?ue=Pe.concat(ue):Vo=-1,ue.length&&Zr())}function Zr(){if(!Ve){var e=Jr(Ad);Ve=!0;for(var o=ue.length;o;){for(Pe=ue,ue=[];++Vo<o;)Pe&&Pe[Vo].run();Vo=-1,o=ue.length}Pe=null,Ve=!1,Id(e)}}D.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ue.push(new Qr(e,o)),ue.length===1&&!Ve&&Jr(Zr)};function Qr(e,o){this.fun=e,this.array=o}Qr.prototype.run=function(){this.fun.apply(null,this.array)};D.title="browser";D.browser=!0;D.env={};D.argv=[];D.version="";D.versions={};function ge(){}D.on=ge;D.addListener=ge;D.once=ge;D.off=ge;D.removeListener=ge;D.removeAllListeners=ge;D.emit=ge;D.prependListener=ge;D.prependOnceListener=ge;D.listeners=function(e){return[]};D.binding=function(e){throw new Error("process.binding is not supported")};D.cwd=function(){return"/"};D.chdir=function(e){throw new Error("process.chdir is not supported")};D.umask=function(){return 0}});var r,s,kd,a,n=T(()=>{r=h(Yr()),s=h(oa()),kd=function(e){function o(){var i=this||self;return delete e.prototype.__magic__,i}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=kd});var na=T(()=>{"use strict";n()});var ce=T(()=>{"use strict";n()});var ta=T(()=>{"use strict";n()});var it,ra=T(()=>{"use strict";n();it=(i=>(i.SetGuardian="SetGuardian",i.GuardAccount="GuardAccount",i.UnGuardAccount="UnGuardAccount",i))(it||{})});var aa=T(()=>{"use strict";n()});var st=T(()=>{"use strict";n()});var ia=T(()=>{"use strict";n()});var ct=T(()=>{"use strict";n()});var sa=T(()=>{"use strict";n()});var ca=T(()=>{"use strict";n()});var Ce,qe,we=T(()=>{"use strict";n();Ce=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),qe=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var pa,kx,ma,Lx,P=T(()=>{"use strict";n();we();pa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(pa||{}),kx=u(u({},qe.WindowProviderRequestEnums),pa),ma=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ma||{}),Lx=u(u({},qe.WindowProviderResponseEnums),ma)});var da=T(()=>{"use strict";n()});var la=T(()=>{"use strict";n()});var V=T(()=>{"use strict";n()});var _a=T(()=>{"use strict";n()});var ua=T(()=>{"use strict";n()});var ga=T(()=>{"use strict";n()});var R=T(()=>{"use strict";n();ct();sa();ca();P();da();la();V();_a();ua();ga()});var je,fa,qx,ha,jx,Ta,zx,Kx,Ld,ze=T(()=>{"use strict";n();R();je={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:fa,egldLabel:qx}=je["devnet"],{chainId:ha,egldLabel:jx}=je["testnet"],{chainId:Ta,egldLabel:zx}=je["mainnet"],Kx={["devnet"]:fa,["testnet"]:ha,["mainnet"]:Ta},Ld={[fa]:"devnet",[ha]:"testnet",[Ta]:"mainnet"}});var qo=T(()=>{"use strict";n()});var pe,xa=T(()=>{"use strict";n();pe=require("@multiversx/sdk-web-wallet-provider")});var Ne,go=T(()=>{"use strict";n();Ne=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ya,ba,pt,ey,oy,mt=T(()=>{"use strict";n();go();pt=String((ba=(ya=Ne.safeWindow)==null?void 0:ya.navigator)==null?void 0:ba.userAgent),ey=/^((?!chrome|android).)*safari/i.test(pt),oy=/firefox/i.test(pt)&&/windows/i.test(pt)});var jo,zo,Sa,dt,wa,Ko,va,Ke,Ia,v=T(()=>{"use strict";n();na();ce();ta();ra();aa();st();ia();ze();qo();xa();mt();jo=5e4,zo=1e9,Sa=1,dt=4294967295,wa=4294967280,Ko="logout",va="login",Ke="0",Ia="..."});var De,Xe=T(()=>{"use strict";n();De=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var lt={};Z(lt,{css:()=>ka,default:()=>Ed});var ka,Ed,_t=T(()=>{"use strict";n();ka=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ka));Ed={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ho,Xo=T(()=>{"use strict";n();ho=()=>Date.now()/1e3});var Pa=T(()=>{"use strict";n()});var Ca=T(()=>{"use strict";n()});var gt=T(()=>{"use strict";n();Xo();Pa();Ca()});var ft={};Z(ft,{clear:()=>Md,getItem:()=>Dd,localStorageKeys:()=>ve,removeItem:()=>Rd,setItem:()=>Nd});var ve,Yo,Nd,Dd,Rd,Md,Ye=T(()=>{"use strict";n();gt();ve={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Yo=typeof localStorage!="undefined",Nd=({key:e,data:o,expires:t})=>{!Yo||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Dd=e=>{if(!Yo)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:ho()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Rd=e=>{!Yo||localStorage.removeItem(String(e))},Md=()=>{!Yo||localStorage.clear()}});var ht={};Z(ht,{clear:()=>Ma,getItem:()=>Da,removeItem:()=>Ra,setItem:()=>Na,storage:()=>Od});var Na,Da,Ra,Ma,Od,Oa=T(()=>{"use strict";n();Na=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Da=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ra=e=>sessionStorage.removeItem(String(e)),Ma=()=>sessionStorage.clear(),Od={setItem:Na,getItem:Da,removeItem:Ra,clear:Ma}});var Re,Je=T(()=>{"use strict";n();Ye();Oa();Re={session:ht,local:ft}});var Tt,C,Y,N=T(()=>{"use strict";n();Tt=require("@reduxjs/toolkit");v();C=(0,Tt.createAction)(Ko),Y=(0,Tt.createAction)(va,e=>({payload:e}))});var yt,Fa,Ua,Jo,xt,Ba,Zo,Fd,bt,Wy,Ud,Bd,Gy,Hy,$y,Wd,Gd,Qo,en=T(()=>{"use strict";n();yt=require("@multiversx/sdk-core"),Fa=require("@reduxjs/toolkit"),Ua=require("redux-persist");v();Je();Ye();N();Jo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ke},xt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Jo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ba=(0,Fa.createSlice)({name:"accountInfoSlice",initialState:xt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new yt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Jo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(C,()=>(Re.local.removeItem(ve.loginExpiresAt),xt)),e.addCase(Y,(o,t)=>{let{address:i}=t.payload;o.address=i,o.publicKey=new yt.Address(i).hex()}),e.addCase(Ua.REHYDRATE,(o,t)=>{var f;if(!((f=t.payload)!=null&&f.account))return;let{account:i}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=i;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:xt.accounts,o.publicKey=_})}}),{setAccount:Zo,setAddress:Fd,setAccountNonce:bt,setAccountShard:Wy,setLedgerAccount:Ud,updateLedgerAccount:Bd,setWalletConnectAccount:Gy,setIsAccountLoading:Hy,setAccountLoadingError:$y,setWebsocketEvent:Wd,setWebsocketBatchEvent:Gd}=Ba.actions,Qo=Ba.reducer});function To(){return new Date().setHours(new Date().getHours()+24)}function xo(e){Re.local.setItem({key:ve.loginExpiresAt,data:e,expires:e})}var St=T(()=>{"use strict";n();Je();Ye()});var Ga,Wa,Ha,Qy,Hd,$d,$a,eb,Vd,Va,ob,nb,tb,on,nn=T(()=>{"use strict";n();Ga=require("@reduxjs/toolkit");St();P();N();Wa={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ha=(0,Ga.createSlice)({name:"loginInfoSlice",initialState:Wa,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(C,()=>Wa),e.addCase(Y,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,xo(To())})}}),{setLoginMethod:Qy,setWalletConnectLogin:Hd,setLedgerLogin:$d,setTokenLogin:$a,setTokenLoginSignature:eb,setWalletLogin:Vd,invalidateLoginSession:Va,setLogoutRoute:ob,setIsWalletConnectV2Initialized:nb,setWebviewLogin:tb}=Ha.actions,on=Ha.reducer});var ja,qa,za,sb,qd,cb,jd,tn,rn=T(()=>{"use strict";n();ja=require("@reduxjs/toolkit");N();qa={},za=(0,ja.createSlice)({name:"modalsSlice",initialState:qa,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(C,()=>qa)}}),{setTxSubmittedModal:sb,setNotificationModal:qd,clearTxSubmittedModal:cb,clearNotificationModal:jd}=za.actions,tn=za.reducer});var O,W=T(()=>{"use strict";n();Xe();O=()=>{if(!De())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:i,href:c,search:p}}=window;return{pathname:o,hash:t,origin:i,href:c,search:p}}});var Ka=T(()=>{"use strict";n();W()});var Xa=T(()=>{"use strict";n();G()});var Ya=T(()=>{"use strict";n();go()});var G=T(()=>{"use strict";n();Ka();Xa();W();Ya()});var yo=T(()=>{"use strict";n();G()});var Za=T(()=>{"use strict";n();yo()});function Qa(e){return e[Math.floor(Math.random()*e.length)]}var ei=T(()=>{"use strict";n()});var wt=T(()=>{"use strict";n();st()});var fe=T(()=>{"use strict";n();Za();ei();wt()});var oi,ni,ti,vt,Kd,ri,Wb,Gb,Xd,an,sn=T(()=>{"use strict";n();oi=require("@reduxjs/toolkit"),ni=h(require("lodash.omit")),ti=require("redux-persist");qo();N();fe();vt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Kd={network:vt},ri=(0,oi.createSlice)({name:"appConfig",initialState:Kd,reducers:{initializeNetworkConfig:(e,o)=>{let t=Qa(o.payload.walletConnectV2RelayAddresses),i=(0,ni.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),i),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(C,o=>{o.network.customWalletAddress=void 0}),e.addCase(ti.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:i}}=t.payload;o.network.customWalletAddress=i})}}),{initializeNetworkConfig:Wb,updateNetworkConfig:Gb,setCustomWalletAddress:Xd}=ri.actions,an=ri.reducer});var ai,It,ii,zb,Kb,Xb,cn,pn=T(()=>{"use strict";n();ai=require("@reduxjs/toolkit");R();N();It={isSigning:!1,signedSessions:{}},ii=(0,ai.createSlice)({name:"signedMessageInfoSliceState",initialState:It,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:i,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=i.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),i)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>It},extraReducers:e=>{e.addCase(C,()=>It)}}),{setSignSession:zb,clearSignedMessageInfo:Kb,setSignSessionState:Xb}=ii.actions,cn=ii.reducer});var ci,pi,si,mi,Yd,Jd,nS,Zd,mn,dn=T(()=>{"use strict";n();ci=require("@reduxjs/toolkit"),pi=require("redux-persist");R();Xo();N();si={customToasts:[],transactionToasts:[]},mi=(0,ci.createSlice)({name:"toastsSlice",initialState:si,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,i=e.customToasts.findIndex(c=>c.toastId===t);if(i!==-1){e.customToasts[i]=w(u(u({},e.customToasts[i]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ho(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(C,()=>si),e.addCase(pi.REHYDRATE,(o,t)=>{var c,p;let i=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=i})}}),{addCustomToast:Yd,removeCustomToast:Jd,addTransactionToast:nS,removeTransactionToast:Zd}=mi.actions,mn=mi.reducer});var di,kt,Lt,Et,Qd,At,li,iS,el,Pt,ln,_n=T(()=>{"use strict";n();di=require("@reduxjs/toolkit");N();kt="Transaction failed",Lt="Transaction successful",Et="Processing transaction",Qd="Transaction submitted",At={},li=(0,di.createSlice)({name:"transactionsInfo",initialState:At,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:i}=o.payload;t!=null&&(e[t]={errorMessage:(i==null?void 0:i.errorMessage)||kt,successMessage:(i==null?void 0:i.successMessage)||Lt,processingMessage:(i==null?void 0:i.processingMessage)||Et,submittedMessage:(i==null?void 0:i.submittedMessage)||Qd,transactionDuration:i==null?void 0:i.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>At},extraReducers:e=>{e.addCase(C,()=>At)}}),{clearTransactionsInfo:iS,setTransactionsDisplayInfo:el,clearTransactionsInfoForSessionId:Pt}=li.actions,ln=li.reducer});function Qe(e){return e!=null&&(ml(e)||gl(e))}function eo(e){return e!=null&&(dl(e)||fl(e))}function oo(e){return e!=null&&(ll(e)||hl(e))}function _i(e){return e!=null&&(_l(e)||Tl(e))}function Ct(e){return e!=null&&ul(e)}function ml(e){return e!=null&&ol.includes(e)}function dl(e){return e!=null&&nl.includes(e)}function ll(e){return e!=null&&tl.includes(e)}function _l(e){return e!=null&&rl.includes(e)}function ul(e){return e!=null&&al.includes(e)}function gl(e){return e!=null&&il.includes(e)}function fl(e){return e!=null&&sl.includes(e)}function hl(e){return e!=null&&cl.includes(e)}function Tl(e){return e!=null&&pl.includes(e)}var ol,nl,tl,rl,al,il,sl,cl,pl,no=T(()=>{"use strict";n();P();ol=["sent"],nl=["success"],tl=["fail","cancelled","timedOut"],rl=["invalid"],al=["timedOut"],il=["pending"],sl=["success"],cl=["fail","invalid"],pl=["not executed"]});var ui,gi,bo,xl,fi,hi,Ti,yl,un,bl,Sl,gS,wl,So,Nt,fS,gn,fn=T(()=>{"use strict";n();ui=require("@reduxjs/toolkit"),gi=require("redux-persist");P();no();N();bo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},xl={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},fi=(0,ui.createSlice)({name:"transactionsSlice",initialState:bo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,f;let{sessionId:t,transactions:i,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},xl),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:i,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===t&&(e.transactionsToSign=bo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:i,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=i,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var f,b,S,k,E,$,Se,Bo;let{sessionId:t,status:i,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(b=(f=e.signedTransactions)==null?void 0:f[t])==null?void 0:b.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(oe=>oe.hash===p?w(u(u({},m!=null?m:{}),oe),{status:i,errorMessage:c,inTransit:_}):oe);let qn=(k=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:k.every(oe=>eo(oe.status)),jn=($=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:$.some(oe=>oo(oe.status)),zn=(Bo=(Se=e.signedTransactions[t])==null?void 0:Se.transactions)==null?void 0:Bo.every(oe=>_i(oe.status));qn&&(e.signedTransactions[t].status="success"),jn&&(e.signedTransactions[t].status="fail"),zn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:i}=o.payload;e.customTransactionInformationForSessionId[t]=i,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=bo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=bo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:i}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),i))}},extraReducers:e=>{e.addCase(C,()=>bo),e.addCase(gi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:i,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(i).reduce((_,[l,f])=>{let b=new Date(l),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(_[l]=f),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),i!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:hi,updateSignedTransactions:Ti,setTransactionsToSign:yl,clearAllTransactionsToSign:un,clearAllSignedTransactions:bl,clearSignedTransaction:Sl,clearTransactionToSign:gS,setSignTransactionsError:wl,setSignTransactionsCancelMessage:So,moveTransactionsToSignedState:Nt,updateSignedTransactionsCustomTransactionInformation:fS}=fi.actions,gn=fi.reducer});var xi,Dt,yi,yS,bS,vl,SS,hn,Tn=T(()=>{"use strict";n();xi=require("@reduxjs/toolkit");N();Dt={},yi=(0,xi.createSlice)({name:"batchTransactionsSlice",initialState:Dt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Dt},extraReducers:e=>{e.addCase(C,()=>Dt)}}),{setBatchTransactions:yS,updateBatchTransactions:bS,clearBatchTransactions:vl,clearAllBatchTransactions:SS}=yi.actions,hn=yi.reducer});var Si,bi,wi,AS,vi,Rt=T(()=>{"use strict";n();Si=require("@reduxjs/toolkit");N();bi={},wi=(0,Si.createSlice)({name:"dappConfigSlice",initialState:bi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(C,()=>bi)}}),{setDappConfig:AS}=wi.actions,vi=wi.reducer});var L=T(()=>{"use strict";n();en();nn();rn();sn();pn();dn();_n();fn();Tn();Rt()});var Mt=T(()=>{"use strict";n()});var ki,Ll,El,Me,bn=T(()=>{"use strict";n();ki=require("@reduxjs/toolkit");Mt();en();Tn();Rt();nn();rn();sn();pn();dn();_n();fn();Ll={["account"]:Qo,["dappConfig"]:vi,["loginInfo"]:on,["modals"]:tn,["networkConfig"]:an,["signedMessageInfo"]:cn,["toasts"]:mn,["transactionsInfo"]:ln,["transactions"]:gn,["batchTransactions"]:hn},El=(e={})=>(0,ki.combineReducers)(u(u({},Ll),e)),Me=El});var Ci={};Z(Ci,{default:()=>ql,sessionStorageReducers:()=>Ot});function he(e,o=[]){return{key:e,version:1,storage:Ei.default,blacklist:o}}var j,Li,Ei,Pl,wo,Cl,Nl,Dl,Rl,Ml,Ol,Fl,Ul,Bl,Wl,Pi,Gl,Ot,Hl,$l,Vl,ql,Ni=T(()=>{"use strict";n();j=require("redux-persist"),Li=h(require("redux-persist/lib/storage")),Ei=h(require("redux-persist/lib/storage/session"));bn();L();en();Tn();nn();rn();sn();pn();dn();_n();fn();Mt();Pl={persistReducersStorageType:"localStorage"},wo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Cl=he(wo["account"]),Nl=he(wo["loginInfo"]),Dl=he(wo["modals"]),Rl=he(wo["networkConfig"]),Ml={2:e=>w(u({},e),{networkConfig:vt})};Ol=he("sdk-dapp-transactionsInfo"),Fl=he("sdk-dapp-transactions",["transactionsToSign"]),Ul=he("sdk-dapp-batchTransactions",["batchTransactions"]),Bl=he("sdk-dapp-toasts"),Wl=he("sdk-dapp-signedMessageInfo"),Pi={key:"sdk-dapp-store",version:2,storage:Li.default,whitelist:Object.keys(wo),migrate:(0,j.createMigrate)(Ml,{debug:!1})},Gl=w(u({},Pi),{whitelist:[]}),Ot={["toasts"]:(0,j.persistReducer)(Bl,mn),["transactions"]:(0,j.persistReducer)(Fl,gn),["transactionsInfo"]:(0,j.persistReducer)(Ol,ln),["batchTransactions"]:(0,j.persistReducer)(Ul,hn),["signedMessageInfo"]:(0,j.persistReducer)(Wl,cn)},Hl=w(u({},Ot),{["account"]:(0,j.persistReducer)(Cl,Qo),["loginInfo"]:(0,j.persistReducer)(Nl,on),["modals"]:(0,j.persistReducer)(Dl,tn),["networkConfig"]:(0,j.persistReducer)(Rl,an)}),$l=Pl.persistReducersStorageType==="localStorage",Vl=$l?(0,j.persistReducer)(Pi,Me(Ot)):(0,j.persistReducer)(Gl,Me(Hl)),ql=Vl});var Di={};Z(Di,{default:()=>jl});var jl,Ri=T(()=>{"use strict";n();bn();jl=Me()});var Mi={};Z(Mi,{default:()=>Kl});var ee,zl,Kl,Oi=T(()=>{"use strict";n();ee=require("redux-persist"),zl=[ee.FLUSH,ee.REHYDRATE,ee.PAUSE,ee.PERSIST,ee.PURGE,ee.REGISTER],Kl=zl});var Bi={};Z(Bi,{default:()=>Ui});function Ui(e){return(0,Fi.persistStore)(e)}var Fi,Wi=T(()=>{"use strict";n();Fi=require("redux-persist")});var Qt={};Z(Qt,{css:()=>Ss,default:()=>pu});var Ss,pu,er=T(()=>{"use strict";n();Ss=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ss));pu={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var $s=y((A2,Hs)=>{n();var ju=typeof a=="object"&&a&&a.Object===Object&&a;Hs.exports=ju});var Co=y((k2,Vs)=>{n();var zu=$s(),Ku=typeof self=="object"&&self&&self.Object===Object&&self,Xu=zu||Ku||Function("return this")();Vs.exports=Xu});var cr=y((L2,qs)=>{n();var Yu=Co(),Ju=Yu.Symbol;qs.exports=Ju});var Xs=y((E2,Ks)=>{n();var js=cr(),zs=Object.prototype,Zu=zs.hasOwnProperty,Qu=zs.toString,No=js?js.toStringTag:void 0;function eg(e){var o=Zu.call(e,No),t=e[No];try{e[No]=void 0;var i=!0}catch(p){}var c=Qu.call(e);return i&&(o?e[No]=t:delete e[No]),c}Ks.exports=eg});var Js=y((P2,Ys)=>{n();var og=Object.prototype,ng=og.toString;function tg(e){return ng.call(e)}Ys.exports=tg});var pr=y((C2,ec)=>{n();var Zs=cr(),rg=Xs(),ag=Js(),ig="[object Null]",sg="[object Undefined]",Qs=Zs?Zs.toStringTag:void 0;function cg(e){return e==null?e===void 0?sg:ig:Qs&&Qs in Object(e)?rg(e):ag(e)}ec.exports=cg});var nc=y((N2,oc)=>{n();var pg=Array.isArray;oc.exports=pg});var rc=y((D2,tc)=>{n();function mg(e){return e!=null&&typeof e=="object"}tc.exports=mg});var ic=y((R2,ac)=>{n();var dg=pr(),lg=nc(),_g=rc(),ug="[object String]";function gg(e){return typeof e=="string"||!lg(e)&&_g(e)&&dg(e)==ug}ac.exports=gg});var Bn=y((DM,dc)=>{n();function Rg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}dc.exports=Rg});var _c=y((RM,lc)=>{n();var Mg=pr(),Og=Bn(),Fg="[object AsyncFunction]",Ug="[object Function]",Bg="[object GeneratorFunction]",Wg="[object Proxy]";function Gg(e){if(!Og(e))return!1;var o=Mg(e);return o==Ug||o==Bg||o==Fg||o==Wg}lc.exports=Gg});var gc=y((MM,uc)=>{n();var Hg=Co(),$g=Hg["__core-js_shared__"];uc.exports=$g});var Tc=y((OM,hc)=>{n();var _r=gc(),fc=function(){var e=/[^.]+$/.exec(_r&&_r.keys&&_r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Vg(e){return!!fc&&fc in e}hc.exports=Vg});var yc=y((FM,xc)=>{n();var qg=Function.prototype,jg=qg.toString;function zg(e){if(e!=null){try{return jg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}xc.exports=zg});var Sc=y((UM,bc)=>{n();var Kg=_c(),Xg=Tc(),Yg=Bn(),Jg=yc(),Zg=/[\\^$.*+?()[\]{}|]/g,Qg=/^\[object .+?Constructor\]$/,ef=Function.prototype,of=Object.prototype,nf=ef.toString,tf=of.hasOwnProperty,rf=RegExp("^"+nf.call(tf).replace(Zg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function af(e){if(!Yg(e)||Xg(e))return!1;var o=Kg(e)?rf:Qg;return o.test(Jg(e))}bc.exports=af});var vc=y((BM,wc)=>{n();function sf(e,o){return e==null?void 0:e[o]}wc.exports=sf});var Wn=y((WM,Ic)=>{n();var cf=Sc(),pf=vc();function mf(e,o){var t=pf(e,o);return cf(t)?t:void 0}Ic.exports=mf});var Do=y((GM,Ac)=>{n();var df=Wn(),lf=df(Object,"create");Ac.exports=lf});var Ec=y((HM,Lc)=>{n();var kc=Do();function _f(){this.__data__=kc?kc(null):{},this.size=0}Lc.exports=_f});var Cc=y(($M,Pc)=>{n();function uf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Pc.exports=uf});var Dc=y((VM,Nc)=>{n();var gf=Do(),ff="__lodash_hash_undefined__",hf=Object.prototype,Tf=hf.hasOwnProperty;function xf(e){var o=this.__data__;if(gf){var t=o[e];return t===ff?void 0:t}return Tf.call(o,e)?o[e]:void 0}Nc.exports=xf});var Mc=y((qM,Rc)=>{n();var yf=Do(),bf=Object.prototype,Sf=bf.hasOwnProperty;function wf(e){var o=this.__data__;return yf?o[e]!==void 0:Sf.call(o,e)}Rc.exports=wf});var Fc=y((jM,Oc)=>{n();var vf=Do(),If="__lodash_hash_undefined__";function Af(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=vf&&o===void 0?If:o,this}Oc.exports=Af});var Bc=y((zM,Uc)=>{n();var kf=Ec(),Lf=Cc(),Ef=Dc(),Pf=Mc(),Cf=Fc();function so(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var i=e[o];this.set(i[0],i[1])}}so.prototype.clear=kf;so.prototype.delete=Lf;so.prototype.get=Ef;so.prototype.has=Pf;so.prototype.set=Cf;Uc.exports=so});var Gc=y((KM,Wc)=>{n();function Nf(){this.__data__=[],this.size=0}Wc.exports=Nf});var $c=y((XM,Hc)=>{n();function Df(e,o){return e===o||e!==e&&o!==o}Hc.exports=Df});var Ro=y((YM,Vc)=>{n();var Rf=$c();function Mf(e,o){for(var t=e.length;t--;)if(Rf(e[t][0],o))return t;return-1}Vc.exports=Mf});var jc=y((JM,qc)=>{n();var Of=Ro(),Ff=Array.prototype,Uf=Ff.splice;function Bf(e){var o=this.__data__,t=Of(o,e);if(t<0)return!1;var i=o.length-1;return t==i?o.pop():Uf.call(o,t,1),--this.size,!0}qc.exports=Bf});var Kc=y((ZM,zc)=>{n();var Wf=Ro();function Gf(e){var o=this.__data__,t=Wf(o,e);return t<0?void 0:o[t][1]}zc.exports=Gf});var Yc=y((QM,Xc)=>{n();var Hf=Ro();function $f(e){return Hf(this.__data__,e)>-1}Xc.exports=$f});var Zc=y((eO,Jc)=>{n();var Vf=Ro();function qf(e,o){var t=this.__data__,i=Vf(t,e);return i<0?(++this.size,t.push([e,o])):t[i][1]=o,this}Jc.exports=qf});var ep=y((oO,Qc)=>{n();var jf=Gc(),zf=jc(),Kf=Kc(),Xf=Yc(),Yf=Zc();function co(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var i=e[o];this.set(i[0],i[1])}}co.prototype.clear=jf;co.prototype.delete=zf;co.prototype.get=Kf;co.prototype.has=Xf;co.prototype.set=Yf;Qc.exports=co});var np=y((nO,op)=>{n();var Jf=Wn(),Zf=Co(),Qf=Jf(Zf,"Map");op.exports=Qf});var ap=y((tO,rp)=>{n();var tp=Bc(),eh=ep(),oh=np();function nh(){this.size=0,this.__data__={hash:new tp,map:new(oh||eh),string:new tp}}rp.exports=nh});var sp=y((rO,ip)=>{n();function th(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}ip.exports=th});var Mo=y((aO,cp)=>{n();var rh=sp();function ah(e,o){var t=e.__data__;return rh(o)?t[typeof o=="string"?"string":"hash"]:t.map}cp.exports=ah});var mp=y((iO,pp)=>{n();var ih=Mo();function sh(e){var o=ih(this,e).delete(e);return this.size-=o?1:0,o}pp.exports=sh});var lp=y((sO,dp)=>{n();var ch=Mo();function ph(e){return ch(this,e).get(e)}dp.exports=ph});var up=y((cO,_p)=>{n();var mh=Mo();function dh(e){return mh(this,e).has(e)}_p.exports=dh});var fp=y((pO,gp)=>{n();var lh=Mo();function _h(e,o){var t=lh(this,e),i=t.size;return t.set(e,o),this.size+=t.size==i?0:1,this}gp.exports=_h});var Tp=y((mO,hp)=>{n();var uh=ap(),gh=mp(),fh=lp(),hh=up(),Th=fp();function po(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var i=e[o];this.set(i[0],i[1])}}po.prototype.clear=uh;po.prototype.delete=gh;po.prototype.get=fh;po.prototype.has=hh;po.prototype.set=Th;hp.exports=po});var yp=y((dO,xp)=>{n();var xh="__lodash_hash_undefined__";function yh(e){return this.__data__.set(e,xh),this}xp.exports=yh});var Sp=y((lO,bp)=>{n();function bh(e){return this.__data__.has(e)}bp.exports=bh});var vp=y((_O,wp)=>{n();var Sh=Tp(),wh=yp(),vh=Sp();function Gn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Sh;++o<t;)this.add(e[o])}Gn.prototype.add=Gn.prototype.push=wh;Gn.prototype.has=vh;wp.exports=Gn});var Ap=y((uO,Ip)=>{n();function Ih(e,o,t,i){for(var c=e.length,p=t+(i?1:-1);i?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Ip.exports=Ih});var Lp=y((gO,kp)=>{n();function Ah(e){return e!==e}kp.exports=Ah});var Pp=y((fO,Ep)=>{n();function kh(e,o,t){for(var i=t-1,c=e.length;++i<c;)if(e[i]===o)return i;return-1}Ep.exports=kh});var Np=y((hO,Cp)=>{n();var Lh=Ap(),Eh=Lp(),Ph=Pp();function Ch(e,o,t){return o===o?Ph(e,o,t):Lh(e,Eh,t)}Cp.exports=Ch});var Rp=y((TO,Dp)=>{n();var Nh=Np();function Dh(e,o){var t=e==null?0:e.length;return!!t&&Nh(e,o,0)>-1}Dp.exports=Dh});var Op=y((xO,Mp)=>{n();function Rh(e,o,t){for(var i=-1,c=e==null?0:e.length;++i<c;)if(t(o,e[i]))return!0;return!1}Mp.exports=Rh});var Up=y((yO,Fp)=>{n();function Mh(e,o){return e.has(o)}Fp.exports=Mh});var Wp=y((bO,Bp)=>{n();var Oh=Wn(),Fh=Co(),Uh=Oh(Fh,"Set");Bp.exports=Uh});var Hp=y((SO,Gp)=>{n();function Bh(){}Gp.exports=Bh});var ur=y((wO,$p)=>{n();function Wh(e){var o=-1,t=Array(e.size);return e.forEach(function(i){t[++o]=i}),t}$p.exports=Wh});var qp=y((vO,Vp)=>{n();var gr=Wp(),Gh=Hp(),Hh=ur(),$h=1/0,Vh=gr&&1/Hh(new gr([,-0]))[1]==$h?function(e){return new gr(e)}:Gh;Vp.exports=Vh});var zp=y((IO,jp)=>{n();var qh=vp(),jh=Rp(),zh=Op(),Kh=Up(),Xh=qp(),Yh=ur(),Jh=200;function Zh(e,o,t){var i=-1,c=jh,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=zh;else if(p>=Jh){var f=o?null:Xh(e);if(f)return Yh(f);m=!1,c=Kh,l=new qh}else l=o?[]:_;e:for(;++i<p;){var b=e[i],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var k=l.length;k--;)if(l[k]===S)continue e;o&&l.push(S),_.push(b)}else c(l,S,t)||(l!==_&&l.push(S),_.push(b))}return _}jp.exports=Zh});var Xp=y((AO,Kp)=>{n();var Qh=zp();function eT(e){return e&&e.length?Qh(e):[]}Kp.exports=eT});var xe={};Z(xe,{css:()=>im,default:()=>OT});var im,OT,ye=T(()=>{"use strict";n();im=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(im));OT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Ir={};Z(Ir,{css:()=>xm,default:()=>tx});var xm,tx,Ar=T(()=>{"use strict";n();xm=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xm));tx={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Er={};Z(Er,{css:()=>Mm,default:()=>cx});var Mm,cx,Pr=T(()=>{"use strict";n();Mm=`.dapp-core-component__transactionsTable-styles__transactions-table {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mm));cx={"transactions-table":"dapp-core-component__transactionsTable-styles__transactions-table",transactionsTable:"dapp-core-component__transactionsTable-styles__transactions-table","transactions-table-header":"dapp-core-component__transactionsTable-styles__transactions-table-header",transactionsTableHeader:"dapp-core-component__transactionsTable-styles__transactions-table-header","table-wrapper":"dapp-core-component__transactionsTable-styles__table-wrapper",tableWrapper:"dapp-core-component__transactionsTable-styles__table-wrapper",table:"dapp-core-component__transactionsTable-styles__table","transaction-cell":"dapp-core-component__transactionsTable-styles__transaction-cell",transactionCell:"dapp-core-component__transactionsTable-styles__transaction-cell","transaction-cell-margin":"dapp-core-component__transactionsTable-styles__transaction-cell-margin",transactionCellMargin:"dapp-core-component__transactionsTable-styles__transaction-cell-margin","transaction-cell-overflow":"dapp-core-component__transactionsTable-styles__transaction-cell-overflow",transactionCellOverflow:"dapp-core-component__transactionsTable-styles__transaction-cell-overflow","transaction-cell-link":"dapp-core-component__transactionsTable-styles__transaction-cell-link",transactionCellLink:"dapp-core-component__transactionsTable-styles__transaction-cell-link","transaction-cell-font-small":"dapp-core-component__transactionsTable-styles__transaction-cell-font-small",transactionCellFontSmall:"dapp-core-component__transactionsTable-styles__transaction-cell-font-small"}});var mx={};Z(mx,{TransactionSender:()=>px,TransactionSenderComponent:()=>Om});module.exports=X(mx);n();var be=h(require("react")),Vn=h(require("classnames"));v();n();var Ea=h(require("react"));n();var fo=h(require("react"));n();Xe();var Aa=()=>!De();var Pd=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(_t(),lt))}),Cd=()=>(_t(),X(lt)).default,ut=Aa();function La({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[i,c]=fo.default.useState(ut?void 0:Cd()),[p,m]=fo.default.useState(ut||t==null?void 0:t()),_=()=>g(this,null,function*(){(e?e():Pd()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,fo.useEffect)(()=>{ut&&_()},[]),{globalStyles:i,styles:p}}function M(e,o){return t=>{let{globalStyles:i,styles:c}=La({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Ea.default.createElement(e,w(u({},t),{globalStyles:i!=null?i:{},styles:c!=null?c:{}}))}}V();n();n();var or=h(require("react")),ws=require("@fortawesome/free-solid-svg-icons"),vs=require("@fortawesome/react-fontawesome"),Is=h(require("classnames"));n();n();var ji=require("react"),to=require("react-redux");n();var Ft=require("@reduxjs/toolkit"),Vi=require("react-redux/lib/utils/Subscription");L();n();var Ii=h(require("lodash.throttle"));v();L();St();Je();Ye();var Il=[Ko],xn=!1,Al=(0,Ii.default)(()=>{xo(To())},5e3),Ai=e=>o=>t=>{if(Il.includes(t.type))return o(t);let i=e.getState(),c=Re.local.getItem(ve.loginExpiresAt);if(!Boolean(i==null?void 0:i.account.address))return o(t);if(c==null)return xo(To());let m=Date.now();return c-m<0&&!xn?setTimeout(()=>{xn=!0,e.dispatch(Va())},1e3):(xn&&(xn=!1),Al()),o(t)};n();n();function yn(){return typeof sessionStorage!="undefined"}var Gi=yn()?(Ni(),X(Ci)).default:(Ri(),X(Di)).default,Hi=yn()?(Oi(),X(Mi)).default:[],$i=yn()?(Wi(),X(Bi)).default:e=>e;bn();var I=(0,Ft.configureStore)({reducer:Gi,middleware:e=>e({serializableCheck:{ignoredActions:[...Hi,bt.type,Zo.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ai)}),qi=(0,Vi.createSubscription)(I),v0=$i(I),I0=(0,Ft.configureStore)({reducer:Me});var Xl={store:I,subscription:qi},Ut=(0,ji.createContext)(Xl),E0=(0,to.createStoreHook)(Ut),H=(0,to.createDispatchHook)(Ut),A=(0,to.createSelectorHook)(Ut);n();n();L();n();var zi=h(require("lodash.isequal")),Sn=require("reselect"),x=(0,Sn.createSelectorCreator)(Sn.defaultMemoize,zi.default);var me=e=>e.account,Oe=x(me,e=>e.address),ro=x(me,Oe,(e,o)=>o in e.accounts?e.accounts[o]:Jo),Yl=x(me,ro,(e,o)=>{let c=e,{accounts:t}=c,i=K(c,["accounts"]);return w(u({},i),{address:o.address,account:o})}),R0=x(ro,e=>e.balance),Jl=x(ro,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),M0=x(me,e=>e.shard),Zl=x(me,e=>e.ledgerAccount),O0=x(me,e=>e.walletConnectAccount),F0=x(me,e=>e.isAccountLoading),U0=x(me,e=>e.accountLoadingError),Ql=x(me,e=>e.websocketEvent),e_=x(me,e=>e.websocketBatchEvent);n();var Ki=e=>e.dappConfig,G0=x(Ki,e=>e.shouldUseWebViewProvider);n();var J=e=>e.loginInfo,o_=x(J,e=>e.loginMethod),wn=x(J,Oe,(e,o)=>Boolean(o)),q0=x(J,e=>e.walletConnectLogin),n_=x(J,e=>e.ledgerLogin),t_=x(J,e=>e.walletLogin),j0=x(J,e=>e.isLoginSessionInvalid),Bt=x(J,e=>e.tokenLogin),Xi=x(J,e=>e.logoutRoute),r_=x(J,e=>e.isWalletConnectV2Initialized);n();var Yi=e=>e.modals,X0=x(Yi,e=>e.txSubmittedModal),a_=x(Yi,e=>e.notificationModal);n();var ne=e=>e.networkConfig,vn=x(ne,e=>e.network.chainId),i_=x(ne,e=>e.network.roundDuration),Z0=x(ne,e=>e.network.walletConnectBridgeAddress),s_=x(ne,e=>e.network.walletConnectV2RelayAddress),c_=x(ne,e=>e.network.walletConnectV2ProjectId),p_=x(ne,e=>e.network.walletConnectV2Options),m_=x(ne,e=>e.network.walletConnectDeepLink),z=x(ne,e=>e.network),Ji=x(z,e=>e.apiAddress),Zi=x(z,e=>e.explorerAddress),Qi=x(z,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),d_=x(z,e=>e.xAliasAddress),es=x(z,e=>e.egldLabel);n();var In=e=>e.signedMessageInfo,ow=x(In,e=>e.isSigning),nw=x(In,e=>e.errorMessage),tw=x(In,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),rw=x(In,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var os=e=>e.toasts,l_=x(os,e=>e.customToasts),ns=x(os,e=>e.transactionToasts);n();L();var ts={errorMessage:kt,successMessage:Lt,processingMessage:Et},rs=e=>e.transactionsInfo,__=x(rs,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||ts);n();n();var de=require("@multiversx/sdk-core");v();n();var Wt=require("@multiversx/sdk-core/out");n();n();function An(e){try{let o=atob(e),t=btoa(o),i=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(i).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var as=e=>{let o=e!=null?e:"";return An(o)?Wt.TransactionPayload.fromEncoded(o):new Wt.TransactionPayload(o)};n();v();var vo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(it).some(t=>e.startsWith(t)):!1;function kn(e){var i,c,p;let o=u({},e);vo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new de.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:as(o.data),nonce:o.nonce.valueOf(),receiver:new de.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new de.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(i=o.gasLimit.valueOf())!=null?i:jo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:zo,chainID:o.chainID.valueOf(),version:new de.TransactionVersion((p=o.version)!=null?p:Sa)}),o.options?{options:new de.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new de.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();v();n();n();n();var f_=require("@multiversx/sdk-core/out");n();v();n();var Io=require("@multiversx/sdk-core");R();n();var is=require("@multiversx/sdk-core");function h_(e){try{let o=new is.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function le(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&h_(e)}var T_=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Ln(e,o,t=""){if(!le(e))return!1;if(new Io.Address(e).isContractAddress())return!0;let p=ss({receiver:e,data:t});return p?new Io.Address(p).isContractAddress()||b_(e,o,t):!1}var x_=e=>e.toLowerCase().match(/[0-9a-f]/g),y_=e=>e.length%2===0;function b_(e,o,t){let i=t==null?void 0:t.split("@");if(i==null)return!1;let[c,...p]=i,m=o!=null&&e!=null&&e===o,_=T_.includes(c),l=p.every(f=>x_(f)&&y_(f));return m&&_&&l}function ss({receiver:e,data:o}){try{if(!o)return e;let t=An(o)?Io.TransactionPayload.fromEncoded(o).toString():o,i=S_(t),c=t.split("@");return i>-1?c[i]:e}catch(t){console.log(t);return}}function S_(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var w_=require("@multiversx/sdk-core"),v_=h(require("bignumber.js"));P();n();n();n();var Gt="blocks";var Ht="nfts";var $t="tokens";n();n();n();n();V();n();var ms=!1;function k_(e){ms||(console.error(e),ms=!0)}function qt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(k_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();V();n();n();n();var C_=h(require("bignumber.js"));v();n();var P_=require("@multiversx/sdk-core"),zt=h(require("bignumber.js"));v();n();var L_=h(require("bignumber.js"));n();zt.default.config({ROUNDING_MODE:zt.default.ROUND_FLOOR});n();n();n();v();n();n();n();n();v();n();v();n();var N_=require("@multiversx/sdk-core");v();n();var ko=require("@multiversx/sdk-core"),M_=h(require("bignumber.js"));v();n();n();var D_=h(require("bignumber.js"));v();n();v();n();var Xt={isEsdt:!1,isNft:!1,isEgld:!1};function Yt(e){let o=e==null?void 0:e.split("-").length;return o===2?w(u({},Xt),{isEsdt:!0}):o===3?w(u({},Xt),{isNft:!0}):w(u({},Xt),{isEgld:!0})}n();n();n();n();n();v();n();v();n();v();n();V();var F_=["reDelegateRewards","claimRewards","unBond"],U_=["wrapEgld","unwrapEgld"],B_=["unStake"],W_=["unDelegate"];n();n();n();v();n();var $_=h(require("bignumber.js"));n();n();V();n();var q_=h(require("bignumber.js"));n();n();n();n();var K_=h(require("bignumber.js"));R();n();n();n();n();P();n();var Z_=require("@multiversx/sdk-web-wallet-provider");v();n();var Y_=h(require("qs"));n();G();Xe();n();Xe();var Ok={search:De()?window.location.search:"",removeParams:[]};n();n();n();W();n();V();n();n();W();n();var Q_=h(require("linkifyjs"));n();v();var _s=e=>{let o=e;typeof o=="string"&&o.includes("Shard")&&(o=o.replace("Shard","").replace(" ",""));let t=dt.toString()===String(o).toString()||String(o)==="metachain",i=wa.toString()===String(o).toString();return t?"Metachain":i?"All Shards":`Shard ${o}`};n();var eu=h(require("bignumber.js"));n();R();n();n();P();n();P();n();n();n();V();n();V();n();var ou=h(require("bignumber.js"));v();V();n();V();n();var gs=require("react");R();n();n();V();n();n();var nu=require("@multiversx/sdk-core/out"),tu=h(require("bignumber.js"));V();n();R();n();n();R();var A1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var fs=require("react");R();W();n();var au=require("react");V();var R1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];no();n();var Cn=e=>e.transactions,ao=x(Cn,e=>e.signedTransactions),iu=x(Cn,e=>e.signTransactionsError),hs=x(Cn,e=>e.signTransactionsCancelMessage),Nn=e=>o=>Object.entries(o).reduce((t,[i,c])=>(e(c.status)&&(t[i]=c),t),{}),Ts=x(ao,Nn(Qe)),xs=x(ao,Nn(eo)),ys=x(ao,Nn(oo)),su=x(ao,Nn(Ct)),bs=x(Cn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>kn(t)))||[]})}),cu=x(ao,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Eo=()=>A(ne);var mu=l=>{var f=l,{page:e,text:o,className:t="dapp-explorer-link",children:i,globalStyles:c,customExplorerIcon:p,styles:m}=f,_=K(f,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:b}}=Eo(),S=o!=null?o:or.default.createElement(vs.FontAwesomeIcon,{icon:p!=null?p:ws.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),k=qt({explorerAddress:String(b),to:e});return or.default.createElement("a",u({href:k,target:"_blank",className:(0,Is.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},_),i!=null?i:S)},As=M(mu,{ssrStyles:()=>Promise.resolve().then(()=>(er(),Qt)),clientStyles:()=>(er(),X(Qt)).default});n();var kr=h(require("react")),Sm=h(require("classnames"));n();var F=h(require("react")),ym=h(require("classnames"));v();n();n();var ks=require("react");n();L();n();n();n();n();n();n();n();n();var lu=require("@multiversx/sdk-extension-provider"),_u=require("@multiversx/sdk-hw-provider"),uu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),gu=require("@multiversx/sdk-opera-provider"),fu=require("@multiversx/sdk-passkey-provider/out"),hu=require("@multiversx/sdk-web-wallet-provider");v();we();n();var io=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Ls=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,Dn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Es=new Dn;L();n();n();n();n();n();var Ps=require("@lifeomic/axios-fetch"),nr=h(require("axios")),tr=(0,Ps.buildAxiosFetch)(nr.default),rr=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let i=e.clone().json(),[c]=yield Promise.all([i]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Tu(e,o,t){return g(this,null,function*(){try{let i=yield tr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return rr(i,t)}catch(i){throw console.error("Fetch Error:",i),i}})}function xu(e,o){return g(this,null,function*(){try{let t=yield tr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return rr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function yu(e,o,t){return g(this,null,function*(){try{let i=yield tr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return rr(i,t)}catch(i){throw console.error("Fetch Error:",i),i}})}var Fe=nr.default.create();Fe.get=xu;Fe.post=Tu;Fe.patch=yu;n();n();var bu=h(require("axios"));n();var Su=h(require("swr"));n();P();n();n();n();W();n();no();n();n();n();var wu=h(require("axios"));n();var Iu=h(require("axios"));ze();n();v();n();var Au=h(require("axios"));n();var Lu=h(require("axios"));n();n();var Eu=h(require("axios"));n();var Pu=h(require("axios"));n();n();L();P();n();n();n();n();W();n();N();R();n();L();n();var Rs=require("@multiversx/sdk-core");R();G();n();no();n();L();P();n();L();R();n();n();n();R();n();qo();n();n();n();n();var Os=h(require("swr"));n();n();var Fn={},sr={setItem:(e,o)=>g(void 0,null,function*(){try{Fn[e]=JSON.stringify(o)}catch(t){console.error("tokenDataStorage unable to serialize",t)}}),getItem:e=>g(void 0,null,function*(){try{return JSON.parse(Fn[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>g(void 0,null,function*(){Fn={}}),removeItem:e=>g(void 0,null,function*(){delete Fn[e]})};function Ms(e){return g(this,null,function*(){let{apiAddress:o,apiTimeout:t}=z(I.getState()),i={baseURL:o,timeout:Number(t)},c=yield sr.getItem(e);if(c)return c;let p=yield Fe.get(e,i);return yield sr.setItem(e,p.data),p.data})}function Fs({tokenId:e}){var S,k,E,$;let{network:o}=Eo(),{isNft:t}=Yt(e),i=e,c=t?Ht:$t,{data:p,error:m,isLoading:_}=(0,Os.default)(Boolean(i)?`${o.apiAddress}/${c}/${i}`:null,Ms);if(!i)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let l=p?p==null?void 0:p.decimals:Number(o.decimals),f=p?p==null?void 0:p.name:"",b=p?($=(S=p==null?void 0:p.assets)==null?void 0:S.svgUrl)!=null?$:(E=(k=p==null?void 0:p.media)==null?void 0:k[0])==null?void 0:E.thumbnailUrl:"";return{isLoading:_,tokenDecimals:l,tokenLabel:f,type:p==null?void 0:p.type,tokenAvatar:b,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}n();n();var Us=require("react");n();n();var Du=require("react"),Ru=require("@multiversx/sdk-web-wallet-provider"),Mu=require("@multiversx/sdk-web-wallet-provider"),Ou=h(require("qs"));v();L();P();ct();W();var IR=O();n();var mc=require("react"),lr=require("@multiversx/sdk-core");n();v();wt();n();n();n();n();n();n();n();n();n();n();ze();n();var Wu=h(require("axios"));n();var Hu=h(require("axios"));n();ze();n();ze();n();n();n();n();var Vu=require("@multiversx/sdk-opera-provider");n();var qu=require("@multiversx/sdk-extension-provider");n();we();n();n();n();n();var fg=h(ic());n();var yg=require("@multiversx/sdk-native-auth-client");n();var pc=h(require("axios"));n();n();n();function sc(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var cc=(e,o,t,i=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return i<o.retries?((o==null?void 0:o.delay)!=null&&(yield sc(o.delay)),yield cc(e,o,t,i+1)):null}}),mr=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield cc(e,o,t)});var hg=4;var j2=mr((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:i}=yield pc.default.get(`${e}/${Gt}?from=${hg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=i;return c}));n();n();Xo();n();n();W();var n3={origin:O().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Sg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var wg=require("@multiversx/sdk-passkey-provider/out");v();W();n();n();n();var Eg=require("react"),Pg=require("@multiversx/sdk-hw-provider");n();N();R();n();yo();Je();Ye();G();n();n();var Qp=require("react"),em=require("@multiversx/sdk-core"),TT=require("@multiversx/sdk-extension-provider"),xT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),yT=require("@multiversx/sdk-passkey-provider/out"),bT=h(Xp());v();n();n();n();n();n();n();n();n();n();n();var Oo=h(require("react"));var HO=(0,Oo.createContext)({}),$O=I.getState();n();var Jp=h(require("react"));n();var fr=h(require("react")),oT=h(require("axios"));n();n();we();n();n();var sT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),cT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");N();n();N();L();R();n();n();L();n();G();n();L();R();n();n();var tT=require("@multiversx/sdk-core"),rT=h(require("bignumber.js"));v();n();var aT=h(require("bignumber.js"));v();L();P();G();W();n();var Zp=require("react"),lT=require("@multiversx/sdk-extension-provider"),_T=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),uT=require("@multiversx/sdk-passkey-provider/out");we();L();n();L();R();yo();W();n();ce();L();n();n();var wT=require("react");n();n();P();no();n();var $n=require("react"),om=(e,o)=>{let[t,i]=(0,$n.useState)(e);return(0,$n.useEffect)(()=>{let p=setTimeout(()=>i(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var IT=require("react"),AT=require("@multiversx/sdk-extension-provider");ce();N();P();n();fe();G();G();n();n();we();R();n();var vT=require("react"),nm=require("@multiversx/sdk-core");L();n();var kT=require("react"),LT=require("@multiversx/sdk-opera-provider");ce();N();P();fe();G();W();n();var ET=require("react");mt();ce();we();N();L();P();fe();W();n();var RT=require("react");ce();L();n();n();gt();n();n();var PT=h(require("platform"));Xe();n();n();n();n();n();n();n();go();P();n();n();var CT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();yo();Je();n();n();n();L();n();n();var NT=h(require("axios"));G();n();n();var DT=h(Bn());go();var tm,rm,am,DW=(am=(rm=(tm=Ne.safeWindow)==null?void 0:tm.location)==null?void 0:rm.origin)==null?void 0:am.includes("localhost");n();W();n();n();var $T=require("react");v();n();n();v();n();n();n();var MT=h(require("bignumber.js"));n();n();n();var ke=h(require("react")),lm=require("react"),_m=require("react"),br=h(require("classnames")),um=require("react-dom");v();n();var sm=h(require("react")),cm=h(require("classnames"));var FT=({className:e,children:o,styles:t})=>sm.default.createElement("div",{className:(0,cm.default)(t==null?void 0:t.dappModalBody,e)},o),hr=M(FT,{ssrStyles:()=>Promise.resolve().then(()=>(ye(),xe)),clientStyles:()=>(ye(),X(xe)).default});n();var Tr=h(require("react")),pm=h(require("classnames"));var UT=({visible:e,customFooter:o,className:t,footerText:i,styles:c})=>e?Tr.default.createElement("div",{className:(0,pm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Tr.default.createElement("div",null,i)):null,xr=M(UT,{ssrStyles:()=>Promise.resolve().then(()=>(ye(),xe)),clientStyles:()=>(ye(),X(xe)).default});n();var _o=h(require("react")),mm=require("@fortawesome/free-solid-svg-icons"),dm=require("@fortawesome/react-fontawesome"),Uo=h(require("classnames"));var BT=({visible:e,headerText:o,customHeader:t,className:i,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?_o.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeader,i)},t):_o.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeader,i)},_o.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeaderText,p)},o),_o.default.createElement("button",{onClick:m,className:(0,Uo.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},_o.default.createElement(dm.FontAwesomeIcon,{size:"lg",icon:mm.faTimes}))):null,yr=M(BT,{ssrStyles:()=>Promise.resolve().then(()=>(ye(),xe)),clientStyles:()=>(ye(),X(xe)).default});var WT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},GT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:i,config:c=WT,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:f})=>{let[b,S]=(0,lm.useState)(!1);if((0,_m.useEffect)(()=>{S(!0)},[]),!l)return null;let{showHeader:k,showFooter:E,headerText:$,footerText:Se,modalDialogClassName:Bo="dapp-modal-dialog",modalContentClassName:qn="dapp-modal-dialog-content",modalHeaderClassName:jn="dapp-modal-dialog-header",modalHeaderTextClassName:zn="dapp-modal-dialog-header-text",modalCloseButtonClassName:oe="dapp-modal-dialog-close-button",modalBodyClassName:Fm="dapp-modal-dialog-content-body",modalFooterClassName:Um="dapp-modal-dialog-footer",customModalHeader:Bm,customModalFooter:Wm}=c,Gm=Hm=>{Hm.key==="Escape"&&i&&(m==null||m())};return ke.default.createElement(ke.default.Fragment,null,b&&(0,um.createPortal)(ke.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,br.default)(Bo,f==null?void 0:f.dappModal,t),"data-testid":e,onKeyDown:Gm},ke.default.createElement("div",{className:(0,br.default)(f==null?void 0:f.dappModalContent,qn)},ke.default.createElement(yr,{visible:k,headerText:$,customHeader:Bm,className:jn,headerTextClassName:zn,closeButtonClassName:oe,onHide:m}),ke.default.createElement(hr,{className:Fm},o),ke.default.createElement(xr,{visible:E,customFooter:Wm,footerText:Se,className:Um}))),_!=null?_:document==null?void 0:document.body))},HT=M(GT,{ssrStyles:()=>Promise.resolve().then(()=>(ye(),xe)),clientStyles:()=>(ye(),X(xe)).default});n();n();var gm=require("react");n();n();var fm=require("react"),qT=require("@multiversx/sdk-hw-provider");ce();N();L();P();fe();n();var VT=require("react");n();n();var wr=require("react");N();L();P();fe();W();n();var zT=require("react"),KT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ce();N();P();fe();G();G();n();var XT=require("react"),YT=require("@multiversx/sdk-passkey-provider/out");ce();N();P();fe();G();G();n();n();var hm=require("react");n();var QT=require("react");n();var vr=require("react"),ZT=require("socket.io-client");L();n();n();n();var ex=require("react");R();n();n();n();var nx=h(require("swr"));n();n();n();n();var ox=h(require("axios"));n();var rx=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:i,styles:c})=>{let[p,m]=(0,F.useState)(0),[_,l]=(0,F.useState)(!1),f=(0,F.useRef)(document==null?void 0:document.createElement("span")),b=(0,F.useRef)(document==null?void 0:document.createElement("span")),S=om(p,300),k=()=>{if(f.current&&b.current){let Se=b.current.offsetWidth-f.current.offsetWidth;l(Se>1)}},E=()=>{m(p+1)};return(0,F.useEffect)(()=>(window==null||window.addEventListener("resize",E),()=>{window==null||window.removeEventListener("resize",E)})),(0,F.useEffect)(()=>{k()},[S]),F.default.createElement("span",{ref:f,className:(0,ym.default)(c==null?void 0:c.trim,i,o,{overflow:_}),"data-testid":t},F.default.createElement("span",{ref:b,className:c==null?void 0:c.hiddenTextRef},e),_?F.default.createElement(F.default.Fragment,null,F.default.createElement("span",{className:c==null?void 0:c.left},F.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),F.default.createElement("span",{className:c==null?void 0:c.ellipsis},Ia),F.default.createElement("span",{className:c==null?void 0:c.right},F.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):F.default.createElement("span",null,e))},bm=M(rx,{ssrStyles:()=>Promise.resolve().then(()=>(Ar(),Ir)),clientStyles:()=>(Ar(),X(Ir)).default});var ax=p=>{var m=p,{address:e,assets:o,color:t,globalStyles:i}=m,c=K(m,["address","assets","color","globalStyles"]);if(o&&o.name){let _=o.name.replace(new RegExp("\\p{Emoji}","gu"),""),l=`${_} (${e})`;return kr.default.createElement("span",w(u({className:(0,Sm.default)(i==null?void 0:i.textTruncate,{[`text-${t}`]:t})},c),{title:l}),_)}return kr.default.createElement(bm,u({text:e,color:t},c))},Lr=M(ax,{});n();var wm=h(require("react")),vm=require("@fortawesome/free-solid-svg-icons/faLock"),Im=require("@fortawesome/react-fontawesome"),Am=h(require("classnames"));var ix=({address:e,tokenId:o,globalStyles:t})=>{var p,m,_;let i=Fs({tokenId:o}),c=(p=i.assets)==null?void 0:p.lockedAccounts;if(c){let l=Object.keys(c).filter(b=>le(b)?b===e:le(c[b])?c[b]===e:!1),f=(_=(m=i.assets)==null?void 0:m.lockedAccounts)==null?void 0:_[l[0]];return f?wm.default.createElement(Im.FontAwesomeIcon,{title:f,icon:vm.faLock,size:"xs",className:(0,Am.default)(t==null?void 0:t.mr1,t==null?void 0:t.textSecondary)}):null}return null},km=M(ix,{});n();var Lm=h(require("react")),Em=require("@fortawesome/free-solid-svg-icons/faFileAlt"),Pm=require("@fortawesome/react-fontawesome"),Cm=h(require("classnames"));v();var sx=({initiator:e,secondInitiator:o,globalStyles:t})=>Ln(e)||Ln(o!=null?o:"")?Lm.default.createElement(Pm.FontAwesomeIcon,{title:"Smart Contract",icon:Em.faFileAlt,className:(0,Cm.default)(t==null?void 0:t.mr1,t==null?void 0:t.textSecondary),"data-testid":"scIcon"}):null,Nm=M(sx,{});n();var Dm=h(require("react"));var Rm=t=>{var i=t,{shard:e}=i,o=K(i,["shard"]);return Dm.default.createElement("span",u({},o),_s(e))};var Om=({transaction:e,showLockedAccounts:o,globalStyles:t,styles:i})=>{var p,m;let c=e.transactionDetails.direction==="Out";return be.default.createElement("div",{className:(0,Vn.default)(t==null?void 0:t.dFlex,t==null?void 0:t.alignItemsCenter,i==null?void 0:i.transactionCell),"data-testid":"transactionSender"},o&&be.default.createElement(km,{address:e.sender,tokenId:(p=e.tokenIdentifier)!=null?p:""}),be.default.createElement(Nm,{initiator:e.sender}),c?be.default.createElement("div",{className:(0,Vn.default)(t==null?void 0:t.w100,i==null?void 0:i.transactionCellOverflow,i==null?void 0:i.transactionCellMargin)},be.default.createElement(Lr,{address:e.sender,assets:e.senderAssets})):le(e.sender)?be.default.createElement(As,{page:(m=e.links.senderLink)!=null?m:"","data-testid":"senderLink",className:(0,Vn.default)(t==null?void 0:t.w100,i==null?void 0:i.transactionCellOverflow,i==null?void 0:i.transactionCellMargin,i==null?void 0:i.transactionCellLink)},be.default.createElement(Lr,{address:e.sender,assets:e.senderAssets})):be.default.createElement(Rm,{shard:e.sender}))},px=M(Om,{ssrStyles:()=>Promise.resolve().then(()=>(Pr(),Er)),clientStyles:()=>(Pr(),X(Er)).default});0&&(module.exports={TransactionSender,TransactionSenderComponent});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TransactionSender.js.map
