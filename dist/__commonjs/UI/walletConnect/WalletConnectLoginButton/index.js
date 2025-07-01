"use strict";var pd=Object.create;var _n=Object.defineProperty,md=Object.defineProperties,ld=Object.getOwnPropertyDescriptor,dd=Object.getOwnPropertyDescriptors,_d=Object.getOwnPropertyNames,$n=Object.getOwnPropertySymbols,ud=Object.getPrototypeOf,nr=Object.prototype.hasOwnProperty,Fa=Object.prototype.propertyIsEnumerable;var Ba=(e,o,t)=>o in e?_n(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))nr.call(o,t)&&Ba(e,t,o[t]);if($n)for(var t of $n(o))Fa.call(o,t)&&Ba(e,t,o[t]);return e},A=(e,o)=>md(e,dd(o));var Ue=(e,o)=>{var t={};for(var r in e)nr.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&$n)for(var r of $n(e))o.indexOf(r)<0&&Fa.call(e,r)&&(t[r]=e[r]);return t};var y=(e,o)=>()=>(e&&(o=e(e=0)),o);var w=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ge=(e,o)=>{for(var t in o)_n(e,t,{get:o[t],enumerable:!0})},Wa=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of _d(o))!nr.call(e,c)&&c!==t&&_n(e,c,{get:()=>o[c],enumerable:!(r=ld(o,c))||r.enumerable});return e};var x=(e,o,t)=>(t=e!=null?pd(ud(e)):{},Wa(o||!e||!e.__esModule?_n(t,"default",{value:e,enumerable:!0}):t,e)),oe=e=>Wa(_n({},"__esModule",{value:!0}),e);var h=(e,o,t)=>new Promise((r,c)=>{var p=d=>{try{l(t.next(d))}catch(_){c(_)}},m=d=>{try{l(t.throw(d))}catch(_){c(_)}},l=d=>d.done?r(d.value):Promise.resolve(d.value).then(p,m);l((t=t.apply(e,o)).next())});var Ha=w(qn=>{"use strict";n();qn.byteLength=fd;qn.toByteArray=xd;qn.fromByteArray=Sd;var Ae=[],Te=[],gd=typeof Uint8Array!="undefined"?Uint8Array:Array,tr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(uo=0,Ua=tr.length;uo<Ua;++uo)Ae[uo]=tr[uo],Te[tr.charCodeAt(uo)]=uo;var uo,Ua;Te["-".charCodeAt(0)]=62;Te["_".charCodeAt(0)]=63;function Ga(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function fd(e){var o=Ga(e),t=o[0],r=o[1];return(t+r)*3/4-r}function hd(e,o,t){return(o+t)*3/4-t}function xd(e){var o,t=Ga(e),r=t[0],c=t[1],p=new gd(hd(e,r,c)),m=0,l=c>0?r-4:r,d;for(d=0;d<l;d+=4)o=Te[e.charCodeAt(d)]<<18|Te[e.charCodeAt(d+1)]<<12|Te[e.charCodeAt(d+2)]<<6|Te[e.charCodeAt(d+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Te[e.charCodeAt(d)]<<2|Te[e.charCodeAt(d+1)]>>4,p[m++]=o&255),c===1&&(o=Te[e.charCodeAt(d)]<<10|Te[e.charCodeAt(d+1)]<<4|Te[e.charCodeAt(d+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Td(e){return Ae[e>>18&63]+Ae[e>>12&63]+Ae[e>>6&63]+Ae[e&63]}function yd(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Td(r));return c.join("")}function Sd(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,l=t-r;m<l;m+=p)c.push(yd(e,m,m+p>l?l:m+p));return r===1?(o=e[t-1],c.push(Ae[o>>2]+Ae[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(Ae[o>>10]+Ae[o>>4&63]+Ae[o<<2&63]+"=")),c.join("")}});var Va=w(rr=>{n();rr.read=function(e,o,t,r,c){var p,m,l=c*8-r-1,d=(1<<l)-1,_=d>>1,T=-7,f=t?c-1:0,S=t?-1:1,v=e[o+f];for(f+=S,p=v&(1<<-T)-1,v>>=-T,T+=l;T>0;p=p*256+e[o+f],f+=S,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+f],f+=S,T-=8);if(p===0)p=1-_;else{if(p===d)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(v?-1:1)*m*Math.pow(2,p-r)};rr.write=function(e,o,t,r,c,p){var m,l,d,_=p*8-c-1,T=(1<<_)-1,f=T>>1,S=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:p-1,L=r?1:-1,C=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(l=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(d=Math.pow(2,-m))<1&&(m--,d*=2),m+f>=1?o+=S/d:o+=S*Math.pow(2,1-f),o*d>=2&&(m++,d/=2),m+f>=T?(l=0,m=T):m+f>=1?(l=(o*d-1)*Math.pow(2,c),m=m+f):(l=o*Math.pow(2,f-1)*Math.pow(2,c),m=0));c>=8;e[t+v]=l&255,v+=L,l/=256,c-=8);for(m=m<<c|l,_+=c;_>0;e[t+v]=m&255,v+=L,m/=256,_-=8);e[t+v-L]|=C*128}});var ni=w(Do=>{"use strict";n();var ar=Ha(),No=Va(),$a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Do.Buffer=u;Do.SlowBuffer=Ad;Do.INSPECT_MAX_BYTES=50;var zn=2147483647;Do.kMaxLength=zn;u.TYPED_ARRAY_SUPPORT=bd();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function bd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function Ge(e){if(e>zn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,u.prototype),o}function u(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return pr(e)}return ja(e,o,t)}u.poolSize=8192;function ja(e,o,t){if(typeof e=="string")return vd(e,o);if(ArrayBuffer.isView(e))return Cd(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Pe(e,ArrayBuffer)||e&&Pe(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Pe(e,SharedArrayBuffer)||e&&Pe(e.buffer,SharedArrayBuffer)))return sr(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return u.from(r,o,t);var c=Id(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return u.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}u.from=function(e,o,t){return ja(e,o,t)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function Ka(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function wd(e,o,t){return Ka(e),e<=0?Ge(e):o!==void 0?typeof t=="string"?Ge(e).fill(o,t):Ge(e).fill(o):Ge(e)}u.alloc=function(e,o,t){return wd(e,o,t)};function pr(e){return Ka(e),Ge(e<0?0:mr(e)|0)}u.allocUnsafe=function(e){return pr(e)};u.allocUnsafeSlow=function(e){return pr(e)};function vd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!u.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Xa(e,o)|0,r=Ge(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function ir(e){for(var o=e.length<0?0:mr(e.length)|0,t=Ge(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function Cd(e){if(Pe(e,Uint8Array)){var o=new Uint8Array(e);return sr(o.buffer,o.byteOffset,o.byteLength)}return ir(e)}function sr(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,u.prototype),r}function Id(e){if(u.isBuffer(e)){var o=mr(e.length)|0,t=Ge(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||lr(e.length)?Ge(0):ir(e);if(e.type==="Buffer"&&Array.isArray(e.data))return ir(e.data)}function mr(e){if(e>=zn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+zn.toString(16)+" bytes");return e|0}function Ad(e){return+e!=e&&(e=0),u.alloc(+e)}u.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==u.prototype};u.compare=function(o,t){if(Pe(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),Pe(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(o)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};u.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return u.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=u.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Pe(m,Uint8Array))p+m.length>c.length?u.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(u.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Xa(e,o){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Pe(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return cr(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return oi(e).length;default:if(c)return r?-1:cr(e).length;o=(""+o).toLowerCase(),c=!0}}u.byteLength=Xa;function Pd(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Fd(this,o,t);case"utf8":case"utf-8":return Za(this,o,t);case"ascii":return Od(this,o,t);case"latin1":case"binary":return Bd(this,o,t);case"base64":return Rd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Wd(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}u.prototype._isBuffer=!0;function go(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}u.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)go(this,t,t+1);return this};u.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)go(this,t,t+3),go(this,t+1,t+2);return this};u.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)go(this,t,t+7),go(this,t+1,t+6),go(this,t+2,t+5),go(this,t+3,t+4);return this};u.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Za(this,0,o):Pd.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(o){if(!u.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:u.compare(this,o)===0};u.prototype.inspect=function(){var o="",t=Do.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};$a&&(u.prototype[$a]=u.prototype.inspect);u.prototype.compare=function(o,t,r,c,p){if(Pe(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),!u.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,l=r-t,d=Math.min(m,l),_=this.slice(c,p),T=o.slice(t,r),f=0;f<d;++f)if(_[f]!==T[f]){m=_[f],l=T[f];break}return m<l?-1:l<m?1:0};function Ya(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,lr(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=u.from(o,r)),u.isBuffer(o))return o.length===0?-1:qa(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):qa(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function qa(e,o,t,r,c){var p=1,m=e.length,l=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,l/=2,t/=2}function d(v,L){return p===1?v[L]:v.readUInt16BE(L*p)}var _;if(c){var T=-1;for(_=t;_<m;_++)if(d(e,_)===d(o,T===-1?0:_-T)){if(T===-1&&(T=_),_-T+1===l)return T*p}else T!==-1&&(_-=_-T),T=-1}else for(t+l>m&&(t=m-l),_=t;_>=0;_--){for(var f=!0,S=0;S<l;S++)if(d(e,_+S)!==d(o,S)){f=!1;break}if(f)return _}return-1}u.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};u.prototype.indexOf=function(o,t,r){return Ya(this,o,t,r,!0)};u.prototype.lastIndexOf=function(o,t,r){return Ya(this,o,t,r,!1)};function Ld(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var l=parseInt(o.substr(m*2,2),16);if(lr(l))return m;e[t+m]=l}return m}function kd(e,o,t,r){return jn(cr(o,e.length-t),e,t,r)}function Ed(e,o,t,r){return jn(Hd(o),e,t,r)}function Nd(e,o,t,r){return jn(oi(o),e,t,r)}function Dd(e,o,t,r){return jn(Vd(o,e.length-t),e,t,r)}u.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Ld(this,o,t,r);case"utf8":case"utf-8":return kd(this,o,t,r);case"ascii":case"latin1":case"binary":return Ed(this,o,t,r);case"base64":return Nd(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Dd(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Rd(e,o,t){return o===0&&t===e.length?ar.fromByteArray(e):ar.fromByteArray(e.slice(o,t))}function Za(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,l=p>239?4:p>223?3:p>191?2:1;if(c+l<=t){var d,_,T,f;switch(l){case 1:p<128&&(m=p);break;case 2:d=e[c+1],(d&192)===128&&(f=(p&31)<<6|d&63,f>127&&(m=f));break;case 3:d=e[c+1],_=e[c+2],(d&192)===128&&(_&192)===128&&(f=(p&15)<<12|(d&63)<<6|_&63,f>2047&&(f<55296||f>57343)&&(m=f));break;case 4:d=e[c+1],_=e[c+2],T=e[c+3],(d&192)===128&&(_&192)===128&&(T&192)===128&&(f=(p&15)<<18|(d&63)<<12|(_&63)<<6|T&63,f>65535&&f<1114112&&(m=f))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=l}return Md(r)}var za=4096;function Md(e){var o=e.length;if(o<=za)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=za));return t}function Od(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function Bd(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function Fd(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=$d[e[p]];return c}function Wd(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}u.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,u.prototype),c};function Y(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||Y(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};u.prototype.readUintBE=u.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||Y(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};u.prototype.readUint8=u.prototype.readUInt8=function(o,t){return o=o>>>0,t||Y(o,1,this.length),this[o]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||Y(o,2,this.length),this[o]|this[o+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||Y(o,2,this.length),this[o]<<8|this[o+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||Y(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||Y(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};u.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||Y(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};u.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||Y(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};u.prototype.readInt8=function(o,t){return o=o>>>0,t||Y(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};u.prototype.readInt16LE=function(o,t){o=o>>>0,t||Y(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};u.prototype.readInt16BE=function(o,t){o=o>>>0,t||Y(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};u.prototype.readInt32LE=function(o,t){return o=o>>>0,t||Y(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};u.prototype.readInt32BE=function(o,t){return o=o>>>0,t||Y(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};u.prototype.readFloatLE=function(o,t){return o=o>>>0,t||Y(o,4,this.length),No.read(this,o,!0,23,4)};u.prototype.readFloatBE=function(o,t){return o=o>>>0,t||Y(o,4,this.length),No.read(this,o,!1,23,4)};u.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||Y(o,8,this.length),No.read(this,o,!0,52,8)};u.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||Y(o,8,this.length),No.read(this,o,!1,52,8)};function se(e,o,t,r,c,p){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;se(this,o,t,r,p,0)}var m=1,l=0;for(this[t]=o&255;++l<r&&(m*=256);)this[t+l]=o/m&255;return t+r};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;se(this,o,t,r,p,0)}var m=r-1,l=1;for(this[t+m]=o&255;--m>=0&&(l*=256);)this[t+m]=o/l&255;return t+r};u.prototype.writeUint8=u.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,1,255,0),this[t]=o&255,t+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};u.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);se(this,o,t,r,p-1,-p)}var m=0,l=1,d=0;for(this[t]=o&255;++m<r&&(l*=256);)o<0&&d===0&&this[t+m-1]!==0&&(d=1),this[t+m]=(o/l>>0)-d&255;return t+r};u.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);se(this,o,t,r,p-1,-p)}var m=r-1,l=1,d=0;for(this[t+m]=o&255;--m>=0&&(l*=256);)o<0&&d===0&&this[t+m+1]!==0&&(d=1),this[t+m]=(o/l>>0)-d&255;return t+r};u.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};u.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};u.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};u.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};u.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||se(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Ja(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Qa(e,o,t,r,c){return o=+o,t=t>>>0,c||Ja(e,o,t,4,34028234663852886e22,-34028234663852886e22),No.write(e,o,t,r,23,4),t+4}u.prototype.writeFloatLE=function(o,t,r){return Qa(this,o,t,!0,r)};u.prototype.writeFloatBE=function(o,t,r){return Qa(this,o,t,!1,r)};function ei(e,o,t,r,c){return o=+o,t=t>>>0,c||Ja(e,o,t,8,17976931348623157e292,-17976931348623157e292),No.write(e,o,t,r,52,8),t+8}u.prototype.writeDoubleLE=function(o,t,r){return ei(this,o,t,!0,r)};u.prototype.writeDoubleBE=function(o,t,r){return ei(this,o,t,!1,r)};u.prototype.copy=function(o,t,r,c){if(!u.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};u.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!u.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var l=u.isBuffer(o)?o:u.from(o,c),d=l.length;if(d===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=l[m%d]}return this};var Ud=/[^+/0-9A-Za-z-_]/g;function Gd(e){if(e=e.split("=")[0],e=e.trim().replace(Ud,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function cr(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Hd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Vd(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function oi(e){return ar.toByteArray(Gd(e))}function jn(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function Pe(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function lr(e){return e!==e}var $d=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var si=w((Cy,ii)=>{n();var H=ii.exports={},Le,ke;function dr(){throw new Error("setTimeout has not been defined")}function _r(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Le=setTimeout:Le=dr}catch(e){Le=dr}try{typeof clearTimeout=="function"?ke=clearTimeout:ke=_r}catch(e){ke=_r}})();function ti(e){if(Le===setTimeout)return setTimeout(e,0);if((Le===dr||!Le)&&setTimeout)return Le=setTimeout,setTimeout(e,0);try{return Le(e,0)}catch(o){try{return Le.call(null,e,0)}catch(t){return Le.call(this,e,0)}}}function qd(e){if(ke===clearTimeout)return clearTimeout(e);if((ke===_r||!ke)&&clearTimeout)return ke=clearTimeout,clearTimeout(e);try{return ke(e)}catch(o){try{return ke.call(null,e)}catch(t){return ke.call(this,e)}}}var He=[],Ro=!1,fo,Kn=-1;function zd(){!Ro||!fo||(Ro=!1,fo.length?He=fo.concat(He):Kn=-1,He.length&&ri())}function ri(){if(!Ro){var e=ti(zd);Ro=!0;for(var o=He.length;o;){for(fo=He,He=[];++Kn<o;)fo&&fo[Kn].run();Kn=-1,o=He.length}fo=null,Ro=!1,qd(e)}}H.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];He.push(new ai(e,o)),He.length===1&&!Ro&&ti(ri)};function ai(e,o){this.fun=e,this.array=o}ai.prototype.run=function(){this.fun.apply(null,this.array)};H.title="browser";H.browser=!0;H.env={};H.argv=[];H.version="";H.versions={};function Ve(){}H.on=Ve;H.addListener=Ve;H.once=Ve;H.off=Ve;H.removeListener=Ve;H.removeAllListeners=Ve;H.emit=Ve;H.prependListener=Ve;H.prependOnceListener=Ve;H.listeners=function(e){return[]};H.binding=function(e){throw new Error("process.binding is not supported")};H.cwd=function(){return"/"};H.chdir=function(e){throw new Error("process.chdir is not supported")};H.umask=function(){return 0}});var a,s,jd,i,n=y(()=>{a=x(ni()),s=x(si()),jd=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=jd});var ci=y(()=>{"use strict";n()});var $e,Ee=y(()=>{"use strict";n();$e="Action not allowed. User is logged in. Call logout() first"});var pi=y(()=>{"use strict";n()});var ur,mi=y(()=>{"use strict";n();ur=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(ur||{})});var li=y(()=>{"use strict";n()});var gr=y(()=>{"use strict";n()});var di=y(()=>{"use strict";n()});var fr=y(()=>{"use strict";n()});var _i=y(()=>{"use strict";n()});var ui=y(()=>{"use strict";n()});var qe,Mo,to=y(()=>{"use strict";n();qe=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Mo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var z,gi,By,fi,Fy,M=y(()=>{"use strict";n();to();z=(S=>(S.ledger="ledger",S.walletconnect="walletconnect",S.walletconnectv2="walletconnectv2",S.wallet="wallet",S.crossWindow="crossWindow",S.iframe="iframe",S.extension="extension",S.passkey="passkey",S.metamask="metamask",S.opera="opera",S.extra="extra",S.none="",S))(z||{}),gi=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(gi||{}),By=g(g({},Mo.WindowProviderRequestEnums),gi),fi=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(fi||{}),Fy=g(g({},Mo.WindowProviderResponseEnums),fi)});var hi=y(()=>{"use strict";n()});var xi=y(()=>{"use strict";n()});var ce=y(()=>{"use strict";n()});var Ti=y(()=>{"use strict";n()});var yi=y(()=>{"use strict";n()});var Si=y(()=>{"use strict";n()});var V=y(()=>{"use strict";n();fr();_i();ui();M();hi();xi();ce();Ti();yi();Si()});var Oo,bi,oS,wi,nS,vi,tS,rS,Kd,Ci,Bo=y(()=>{"use strict";n();V();Oo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:bi,egldLabel:oS}=Oo["devnet"],{chainId:wi,egldLabel:nS}=Oo["testnet"],{chainId:vi,egldLabel:tS}=Oo["mainnet"],rS={["devnet"]:bi,["testnet"]:wi,["mainnet"]:vi},Kd={[bi]:"devnet",[wi]:"testnet",[vi]:"mainnet"},Ci="multiversx://"});var Xn=y(()=>{"use strict";n()});var Ne,Ii=y(()=>{"use strict";n();Ne=require("@multiversx/sdk-web-wallet-provider")});var we,un=y(()=>{"use strict";n();we=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ai,Pi,hr,mS,lS,xr=y(()=>{"use strict";n();un();hr=String((Pi=(Ai=we.safeWindow)==null?void 0:Ai.navigator)==null?void 0:Pi.userAgent),mS=/^((?!chrome|android).)*safari/i.test(hr),lS=/firefox/i.test(hr)&&/windows/i.test(hr)});var Yn,Zn,Li,Jn,ki,Fo,k=y(()=>{"use strict";n();ci();Ee();pi();mi();li();gr();di();Bo();Xn();Ii();xr();Yn=5e4,Zn=1e9,Li=1,Jn="logout",ki="login",Fo="0"});var Wo,Qn=y(()=>{"use strict";n();Wo=()=>Date.now()/1e3});var Ei=y(()=>{"use strict";n()});var Ni=y(()=>{"use strict";n()});var Tr=y(()=>{"use strict";n();Qn();Ei();Ni()});var yr={};ge(yr,{clear:()=>Jd,getItem:()=>Yd,localStorageKeys:()=>ve,removeItem:()=>Zd,setItem:()=>Xd});var ve,et,Xd,Yd,Zd,Jd,Uo=y(()=>{"use strict";n();Tr();ve={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},et=typeof localStorage!="undefined",Xd=({key:e,data:o,expires:t})=>{!et||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Yd=e=>{if(!et)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Wo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Zd=e=>{!et||localStorage.removeItem(String(e))},Jd=()=>{!et||localStorage.clear()}});var Sr={};ge(Sr,{clear:()=>Oi,getItem:()=>Ri,removeItem:()=>Mi,setItem:()=>Di,storage:()=>Qd});var Di,Ri,Mi,Oi,Qd,Bi=y(()=>{"use strict";n();Di=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ri=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Mi=e=>sessionStorage.removeItem(String(e)),Oi=()=>sessionStorage.clear(),Qd={setItem:Di,getItem:Ri,removeItem:Mi,clear:Oi}});var De,Go=y(()=>{"use strict";n();Uo();Bi();De={session:Sr,local:yr}});var br,O,pe,U=y(()=>{"use strict";n();br=require("@reduxjs/toolkit");k();O=(0,br.createAction)(Jn),pe=(0,br.createAction)(ki,e=>({payload:e}))});var vr,Fi,Wi,ot,wr,Ui,nt,e_,Cr,HS,o_,n_,VS,$S,qS,t_,r_,tt,rt=y(()=>{"use strict";n();vr=require("@multiversx/sdk-core"),Fi=require("@reduxjs/toolkit"),Wi=require("redux-persist");k();Go();Uo();U();ot={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Fo},wr={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":ot},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ui=(0,Fi.createSlice)({name:"accountInfoSlice",initialState:wr,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new vr.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:ot},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(O,()=>(De.local.removeItem(ve.loginExpiresAt),wr)),e.addCase(pe,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new vr.Address(r).hex()}),e.addCase(Wi.REHYDRATE,(o,t)=>{var _;if(!((_=t.payload)!=null&&_.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:l}=r;o.address=c,o.shard=p;let d=m&&c in m;o.accounts=d?m:wr.accounts,o.publicKey=l})}}),{setAccount:nt,setAddress:e_,setAccountNonce:Cr,setAccountShard:HS,setLedgerAccount:o_,updateLedgerAccount:n_,setWalletConnectAccount:VS,setIsAccountLoading:$S,setAccountLoadingError:qS,setWebsocketEvent:t_,setWebsocketBatchEvent:r_}=Ui.actions,tt=Ui.reducer});function gn(){return new Date().setHours(new Date().getHours()+24)}function fn(e){De.local.setItem({key:ve.loginExpiresAt,data:e,expires:e})}var Ir=y(()=>{"use strict";n();Go();Uo()});var Hi,Gi,Vi,ob,$i,a_,hn,nb,i_,qi,tb,rb,ab,at,it=y(()=>{"use strict";n();Hi=require("@reduxjs/toolkit");Ir();M();U();Gi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Vi=(0,Hi.createSlice)({name:"loginInfoSlice",initialState:Gi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(O,()=>Gi),e.addCase(pe,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,fn(gn())})}}),{setLoginMethod:ob,setWalletConnectLogin:$i,setLedgerLogin:a_,setTokenLogin:hn,setTokenLoginSignature:nb,setWalletLogin:i_,invalidateLoginSession:qi,setLogoutRoute:tb,setIsWalletConnectV2Initialized:rb,setWebviewLogin:ab}=Vi.actions,at=Vi.reducer});var ji,zi,Ki,pb,s_,mb,c_,st,ct=y(()=>{"use strict";n();ji=require("@reduxjs/toolkit");U();zi={},Ki=(0,ji.createSlice)({name:"modalsSlice",initialState:zi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(O,()=>zi)}}),{setTxSubmittedModal:pb,setNotificationModal:s_,clearTxSubmittedModal:mb,clearNotificationModal:c_}=Ki.actions,st=Ki.reducer});var ho,Ho=y(()=>{"use strict";n();ho=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var N,Z=y(()=>{"use strict";n();Ho();N=()=>{if(!ho())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var Vo,Xi=y(()=>{"use strict";n();Z();Vo=(e="")=>{let o=N(),t=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||t?e:`${o.origin}/${e.replace("/","")}`}});var Yi=y(()=>{"use strict";n();ne()});var Zi,Ji=y(()=>{"use strict";n();un();Zi=e=>{if(!we.safeWindow.location)return;if(!new URL(we.safeWindow.location.href).protocol.startsWith("http"))return we.safeWindow.location.reload();we.safeWindow.location.assign(e)}});var ne=y(()=>{"use strict";n();Xi();Yi();Z();Ji()});var Qi,es,xn,Tn=y(()=>{"use strict";n();ne();Qi=!1,es=(e=!0)=>{Qi=e},xn=({timeout:e=0,url:o})=>{Qi||setTimeout(()=>{if(!!window)return Zi(o)},e)}});function ro({callbackRoute:e,onLoginRedirect:o,options:t}){let r=Boolean(e),c=typeof o=="function";if(r&&e!=null){if(c)return o(e,t);xn({url:e,timeout:p_})}}var p_,os=y(()=>{"use strict";n();Tn();p_=200});function ns(e){return e[Math.floor(Math.random()*e.length)]}var ts=y(()=>{"use strict";n()});var Ar=y(()=>{"use strict";n();gr()});var ze=y(()=>{"use strict";n();os();ts();Ar()});var rs,as,is,Pr,l_,ss,Hb,Vb,d_,pt,mt=y(()=>{"use strict";n();rs=require("@reduxjs/toolkit"),as=x(require("lodash.omit")),is=require("redux-persist");Xn();U();ze();Pr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},l_={network:Pr},ss=(0,rs.createSlice)({name:"appConfig",initialState:l_,reducers:{initializeNetworkConfig:(e,o)=>{let t=ns(o.payload.walletConnectV2RelayAddresses),r=(0,as.default)(o.payload,"walletConnectV2RelayAddresses");e.network=A(g(g({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=g(g({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(O,o=>{o.network.customWalletAddress=void 0}),e.addCase(is.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Hb,updateNetworkConfig:Vb,setCustomWalletAddress:d_}=ss.actions,pt=ss.reducer});var cs,Lr,ps,Xb,Yb,Zb,lt,dt=y(()=>{"use strict";n();cs=require("@reduxjs/toolkit");V();U();Lr={isSigning:!1,signedSessions:{}},ps=(0,cs.createSlice)({name:"signedMessageInfoSliceState",initialState:Lr,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=g(g({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>g(g({},e),o.payload),clearSignedMessageInfo:()=>Lr},extraReducers:e=>{e.addCase(O,()=>Lr)}}),{setSignSession:Xb,clearSignedMessageInfo:Yb,setSignSessionState:Zb}=ps.actions,lt=ps.reducer});var ls,ds,ms,_s,__,u_,rw,g_,_t,ut=y(()=>{"use strict";n();ls=require("@reduxjs/toolkit"),ds=require("redux-persist");V();Qn();U();ms={customToasts:[],transactionToasts:[]},_s=(0,ls.createSlice)({name:"toastsSlice",initialState:ms,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=A(g(g({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(A(g({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Wo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(O,()=>ms),e.addCase(ds.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:__,removeCustomToast:u_,addTransactionToast:rw,removeTransactionToast:g_}=_s.actions,_t=_s.reducer});var us,Er,Nr,Dr,f_,kr,gs,cw,h_,Rr,gt,ft=y(()=>{"use strict";n();us=require("@reduxjs/toolkit");U();Er="Transaction failed",Nr="Transaction successful",Dr="Processing transaction",f_="Transaction submitted",kr={},gs=(0,us.createSlice)({name:"transactionsInfo",initialState:kr,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||Er,successMessage:(r==null?void 0:r.successMessage)||Nr,processingMessage:(r==null?void 0:r.processingMessage)||Dr,submittedMessage:(r==null?void 0:r.submittedMessage)||f_,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>kr},extraReducers:e=>{e.addCase(O,()=>kr)}}),{clearTransactionsInfo:cw,setTransactionsDisplayInfo:h_,clearTransactionsInfoForSessionId:Rr}=gs.actions,gt=gs.reducer});function qo(e){return e!=null&&(A_(e)||N_(e))}function zo(e){return e!=null&&(P_(e)||D_(e))}function jo(e){return e!=null&&(L_(e)||R_(e))}function fs(e){return e!=null&&(k_(e)||M_(e))}function Mr(e){return e!=null&&E_(e)}function A_(e){return e!=null&&x_.includes(e)}function P_(e){return e!=null&&T_.includes(e)}function L_(e){return e!=null&&y_.includes(e)}function k_(e){return e!=null&&S_.includes(e)}function E_(e){return e!=null&&b_.includes(e)}function N_(e){return e!=null&&w_.includes(e)}function D_(e){return e!=null&&v_.includes(e)}function R_(e){return e!=null&&C_.includes(e)}function M_(e){return e!=null&&I_.includes(e)}var x_,T_,y_,S_,b_,w_,v_,C_,I_,Ko=y(()=>{"use strict";n();M();x_=["sent"],T_=["success"],y_=["fail","cancelled","timedOut"],S_=["invalid"],b_=["timedOut"],w_=["pending"],v_=["success"],C_=["fail","invalid"],I_=["not executed"]});var hs,xs,yn,O_,Ts,ys,Ss,B_,ht,F_,W_,hw,U_,Sn,Or,xw,xt,Tt=y(()=>{"use strict";n();hs=require("@reduxjs/toolkit"),xs=require("redux-persist");M();Ko();U();yn={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},O_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Ts=(0,hs.createSlice)({name:"transactionsSlice",initialState:yn,reducers:{moveTransactionsToSignedState:(e,o)=>{var d,_;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:l}=o.payload;e.customTransactionInformationForSessionId[t]=g(g(g({},O_),((d=e.signedTransactions[t])==null?void 0:d.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:g(g({},e.customTransactionInformationForSessionId[t]),l!=null?l:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===t&&(e.transactionsToSign=yn.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=g(g({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,T,f,S,v,L,C,B;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:l}=o.payload,d=(T=(_=e.signedTransactions)==null?void 0:_[t])==null?void 0:T.transactions;if(d!=null){e.signedTransactions[t].transactions=d.map(R=>R.hash===p?A(g(g({},m!=null?m:{}),R),{status:r,errorMessage:c,inTransit:l}):R);let G=(S=(f=e.signedTransactions[t])==null?void 0:f.transactions)==null?void 0:S.every(R=>zo(R.status)),q=(L=(v=e.signedTransactions[t])==null?void 0:v.transactions)==null?void 0:L.some(R=>jo(R.status)),ae=(B=(C=e.signedTransactions[t])==null?void 0:C.transactions)==null?void 0:B.every(R=>fs(R.status));G&&(e.signedTransactions[t].status="success"),q&&(e.signedTransactions[t].status="fail"),ae&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=yn.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=yn.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=g(g({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(O,()=>yn),e.addCase(xs.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((l,[d,_])=>{let T=new Date(d),f=new Date;return f.setHours(f.getHours()+5),f-T>0||(l[d]=_),l},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ys,updateSignedTransactions:Ss,setTransactionsToSign:B_,clearAllTransactionsToSign:ht,clearAllSignedTransactions:F_,clearSignedTransaction:W_,clearTransactionToSign:hw,setSignTransactionsError:U_,setSignTransactionsCancelMessage:Sn,moveTransactionsToSignedState:Or,updateSignedTransactionsCustomTransactionInformation:xw}=Ts.actions,xt=Ts.reducer});var bs,Br,ws,bw,ww,G_,vw,yt,St=y(()=>{"use strict";n();bs=require("@reduxjs/toolkit");U();Br={},ws=(0,bs.createSlice)({name:"batchTransactionsSlice",initialState:Br,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Br},extraReducers:e=>{e.addCase(O,()=>Br)}}),{setBatchTransactions:bw,updateBatchTransactions:ww,clearBatchTransactions:G_,clearAllBatchTransactions:vw}=ws.actions,yt=ws.reducer});var Cs,vs,Is,Pw,As,Fr=y(()=>{"use strict";n();Cs=require("@reduxjs/toolkit");U();vs={},Is=(0,Cs.createSlice)({name:"dappConfigSlice",initialState:vs,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(O,()=>vs)}}),{setDappConfig:Pw}=Is.actions,As=Is.reducer});var D=y(()=>{"use strict";n();rt();it();ct();mt();dt();ut();ft();Tt();St();Fr()});var Wr=y(()=>{"use strict";n()});var ks,q_,z_,xo,vt=y(()=>{"use strict";n();ks=require("@reduxjs/toolkit");Wr();rt();St();Fr();it();ct();mt();dt();ut();ft();Tt();q_={["account"]:tt,["dappConfig"]:As,["loginInfo"]:at,["modals"]:st,["networkConfig"]:pt,["signedMessageInfo"]:lt,["toasts"]:_t,["transactionsInfo"]:gt,["transactions"]:xt,["batchTransactions"]:yt},z_=(e={})=>(0,ks.combineReducers)(g(g({},q_),e)),xo=z_});var Rs={};ge(Rs,{default:()=>cu,sessionStorageReducers:()=>Ur});function je(e,o=[]){return{key:e,version:1,storage:Ns.default,blacklist:o}}var me,Es,Ns,j_,bn,K_,X_,Y_,Z_,J_,Q_,eu,ou,nu,tu,Ds,ru,Ur,au,iu,su,cu,Ms=y(()=>{"use strict";n();me=require("redux-persist"),Es=x(require("redux-persist/lib/storage")),Ns=x(require("redux-persist/lib/storage/session"));vt();D();rt();St();it();ct();mt();dt();ut();ft();Tt();Wr();j_={persistReducersStorageType:"localStorage"},bn={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},K_=je(bn["account"]),X_=je(bn["loginInfo"]),Y_=je(bn["modals"]),Z_=je(bn["networkConfig"]),J_={2:e=>A(g({},e),{networkConfig:Pr})};Q_=je("sdk-dapp-transactionsInfo"),eu=je("sdk-dapp-transactions",["transactionsToSign"]),ou=je("sdk-dapp-batchTransactions",["batchTransactions"]),nu=je("sdk-dapp-toasts"),tu=je("sdk-dapp-signedMessageInfo"),Ds={key:"sdk-dapp-store",version:2,storage:Es.default,whitelist:Object.keys(bn),migrate:(0,me.createMigrate)(J_,{debug:!1})},ru=A(g({},Ds),{whitelist:[]}),Ur={["toasts"]:(0,me.persistReducer)(nu,_t),["transactions"]:(0,me.persistReducer)(eu,xt),["transactionsInfo"]:(0,me.persistReducer)(Q_,gt),["batchTransactions"]:(0,me.persistReducer)(ou,yt),["signedMessageInfo"]:(0,me.persistReducer)(tu,lt)},au=A(g({},Ur),{["account"]:(0,me.persistReducer)(K_,tt),["loginInfo"]:(0,me.persistReducer)(X_,at),["modals"]:(0,me.persistReducer)(Y_,st),["networkConfig"]:(0,me.persistReducer)(Z_,pt)}),iu=j_.persistReducersStorageType==="localStorage",su=iu?(0,me.persistReducer)(Ds,xo(Ur)):(0,me.persistReducer)(ru,xo(au)),cu=su});var Os={};ge(Os,{default:()=>pu});var pu,Bs=y(()=>{"use strict";n();vt();pu=xo()});var Fs={};ge(Fs,{default:()=>lu});var ye,mu,lu,Ws=y(()=>{"use strict";n();ye=require("redux-persist"),mu=[ye.FLUSH,ye.REHYDRATE,ye.PAUSE,ye.PERSIST,ye.PURGE,ye.REGISTER],lu=mu});var Hs={};ge(Hs,{default:()=>Gs});function Gs(e){return(0,Us.persistStore)(e)}var Us,Vs=y(()=>{"use strict";n();Us=require("redux-persist")});var Xc=w((w3,Kc)=>{n();var Kg=typeof i=="object"&&i&&i.Object===Object&&i;Kc.exports=Kg});var kn=w((v3,Yc)=>{n();var Xg=Xc(),Yg=typeof self=="object"&&self&&self.Object===Object&&self,Zg=Xg||Yg||Function("return this")();Yc.exports=Zg});var na=w((C3,Zc)=>{n();var Jg=kn(),Qg=Jg.Symbol;Zc.exports=Qg});var op=w((I3,ep)=>{n();var Jc=na(),Qc=Object.prototype,ef=Qc.hasOwnProperty,of=Qc.toString,En=Jc?Jc.toStringTag:void 0;function nf(e){var o=ef.call(e,En),t=e[En];try{e[En]=void 0;var r=!0}catch(p){}var c=of.call(e);return r&&(o?e[En]=t:delete e[En]),c}ep.exports=nf});var tp=w((A3,np)=>{n();var tf=Object.prototype,rf=tf.toString;function af(e){return rf.call(e)}np.exports=af});var ta=w((P3,ip)=>{n();var rp=na(),sf=op(),cf=tp(),pf="[object Null]",mf="[object Undefined]",ap=rp?rp.toStringTag:void 0;function lf(e){return e==null?e===void 0?mf:pf:ap&&ap in Object(e)?sf(e):cf(e)}ip.exports=lf});var cp=w((L3,sp)=>{n();var df=Array.isArray;sp.exports=df});var mp=w((k3,pp)=>{n();function _f(e){return e!=null&&typeof e=="object"}pp.exports=_f});var dp=w((E3,lp)=>{n();var uf=ta(),gf=cp(),ff=mp(),hf="[object String]";function xf(e){return typeof e=="string"||!gf(e)&&ff(e)&&uf(e)==hf}lp.exports=xf});var Gt=w((w5,vp)=>{n();function Ff(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}vp.exports=Ff});var Ip=w((v5,Cp)=>{n();var Wf=ta(),Uf=Gt(),Gf="[object AsyncFunction]",Hf="[object Function]",Vf="[object GeneratorFunction]",$f="[object Proxy]";function qf(e){if(!Uf(e))return!1;var o=Wf(e);return o==Hf||o==Vf||o==Gf||o==$f}Cp.exports=qf});var Pp=w((C5,Ap)=>{n();var zf=kn(),jf=zf["__core-js_shared__"];Ap.exports=jf});var Ep=w((I5,kp)=>{n();var pa=Pp(),Lp=function(){var e=/[^.]+$/.exec(pa&&pa.keys&&pa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Kf(e){return!!Lp&&Lp in e}kp.exports=Kf});var Dp=w((A5,Np)=>{n();var Xf=Function.prototype,Yf=Xf.toString;function Zf(e){if(e!=null){try{return Yf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Np.exports=Zf});var Mp=w((P5,Rp)=>{n();var Jf=Ip(),Qf=Ep(),eh=Gt(),oh=Dp(),nh=/[\\^$.*+?()[\]{}|]/g,th=/^\[object .+?Constructor\]$/,rh=Function.prototype,ah=Object.prototype,ih=rh.toString,sh=ah.hasOwnProperty,ch=RegExp("^"+ih.call(sh).replace(nh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ph(e){if(!eh(e)||Qf(e))return!1;var o=Jf(e)?ch:th;return o.test(oh(e))}Rp.exports=ph});var Bp=w((L5,Op)=>{n();function mh(e,o){return e==null?void 0:e[o]}Op.exports=mh});var Ht=w((k5,Fp)=>{n();var lh=Mp(),dh=Bp();function _h(e,o){var t=dh(e,o);return lh(t)?t:void 0}Fp.exports=_h});var Rn=w((E5,Wp)=>{n();var uh=Ht(),gh=uh(Object,"create");Wp.exports=gh});var Hp=w((N5,Gp)=>{n();var Up=Rn();function fh(){this.__data__=Up?Up(null):{},this.size=0}Gp.exports=fh});var $p=w((D5,Vp)=>{n();function hh(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Vp.exports=hh});var zp=w((R5,qp)=>{n();var xh=Rn(),Th="__lodash_hash_undefined__",yh=Object.prototype,Sh=yh.hasOwnProperty;function bh(e){var o=this.__data__;if(xh){var t=o[e];return t===Th?void 0:t}return Sh.call(o,e)?o[e]:void 0}qp.exports=bh});var Kp=w((M5,jp)=>{n();var wh=Rn(),vh=Object.prototype,Ch=vh.hasOwnProperty;function Ih(e){var o=this.__data__;return wh?o[e]!==void 0:Ch.call(o,e)}jp.exports=Ih});var Yp=w((O5,Xp)=>{n();var Ah=Rn(),Ph="__lodash_hash_undefined__";function Lh(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ah&&o===void 0?Ph:o,this}Xp.exports=Lh});var Jp=w((B5,Zp)=>{n();var kh=Hp(),Eh=$p(),Nh=zp(),Dh=Kp(),Rh=Yp();function on(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}on.prototype.clear=kh;on.prototype.delete=Eh;on.prototype.get=Nh;on.prototype.has=Dh;on.prototype.set=Rh;Zp.exports=on});var em=w((F5,Qp)=>{n();function Mh(){this.__data__=[],this.size=0}Qp.exports=Mh});var nm=w((W5,om)=>{n();function Oh(e,o){return e===o||e!==e&&o!==o}om.exports=Oh});var Mn=w((U5,tm)=>{n();var Bh=nm();function Fh(e,o){for(var t=e.length;t--;)if(Bh(e[t][0],o))return t;return-1}tm.exports=Fh});var am=w((G5,rm)=>{n();var Wh=Mn(),Uh=Array.prototype,Gh=Uh.splice;function Hh(e){var o=this.__data__,t=Wh(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():Gh.call(o,t,1),--this.size,!0}rm.exports=Hh});var sm=w((H5,im)=>{n();var Vh=Mn();function $h(e){var o=this.__data__,t=Vh(o,e);return t<0?void 0:o[t][1]}im.exports=$h});var pm=w((V5,cm)=>{n();var qh=Mn();function zh(e){return qh(this.__data__,e)>-1}cm.exports=zh});var lm=w(($5,mm)=>{n();var jh=Mn();function Kh(e,o){var t=this.__data__,r=jh(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}mm.exports=Kh});var _m=w((q5,dm)=>{n();var Xh=em(),Yh=am(),Zh=sm(),Jh=pm(),Qh=lm();function nn(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}nn.prototype.clear=Xh;nn.prototype.delete=Yh;nn.prototype.get=Zh;nn.prototype.has=Jh;nn.prototype.set=Qh;dm.exports=nn});var gm=w((z5,um)=>{n();var ex=Ht(),ox=kn(),nx=ex(ox,"Map");um.exports=nx});var xm=w((j5,hm)=>{n();var fm=Jp(),tx=_m(),rx=gm();function ax(){this.size=0,this.__data__={hash:new fm,map:new(rx||tx),string:new fm}}hm.exports=ax});var ym=w((K5,Tm)=>{n();function ix(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Tm.exports=ix});var On=w((X5,Sm)=>{n();var sx=ym();function cx(e,o){var t=e.__data__;return sx(o)?t[typeof o=="string"?"string":"hash"]:t.map}Sm.exports=cx});var wm=w((Y5,bm)=>{n();var px=On();function mx(e){var o=px(this,e).delete(e);return this.size-=o?1:0,o}bm.exports=mx});var Cm=w((Z5,vm)=>{n();var lx=On();function dx(e){return lx(this,e).get(e)}vm.exports=dx});var Am=w((J5,Im)=>{n();var _x=On();function ux(e){return _x(this,e).has(e)}Im.exports=ux});var Lm=w((Q5,Pm)=>{n();var gx=On();function fx(e,o){var t=gx(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}Pm.exports=fx});var Em=w((eO,km)=>{n();var hx=xm(),xx=wm(),Tx=Cm(),yx=Am(),Sx=Lm();function tn(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}tn.prototype.clear=hx;tn.prototype.delete=xx;tn.prototype.get=Tx;tn.prototype.has=yx;tn.prototype.set=Sx;km.exports=tn});var Dm=w((oO,Nm)=>{n();var bx="__lodash_hash_undefined__";function wx(e){return this.__data__.set(e,bx),this}Nm.exports=wx});var Mm=w((nO,Rm)=>{n();function vx(e){return this.__data__.has(e)}Rm.exports=vx});var Bm=w((tO,Om)=>{n();var Cx=Em(),Ix=Dm(),Ax=Mm();function Vt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Cx;++o<t;)this.add(e[o])}Vt.prototype.add=Vt.prototype.push=Ix;Vt.prototype.has=Ax;Om.exports=Vt});var Wm=w((rO,Fm)=>{n();function Px(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Fm.exports=Px});var Gm=w((aO,Um)=>{n();function Lx(e){return e!==e}Um.exports=Lx});var Vm=w((iO,Hm)=>{n();function kx(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Hm.exports=kx});var qm=w((sO,$m)=>{n();var Ex=Wm(),Nx=Gm(),Dx=Vm();function Rx(e,o,t){return o===o?Dx(e,o,t):Ex(e,Nx,t)}$m.exports=Rx});var jm=w((cO,zm)=>{n();var Mx=qm();function Ox(e,o){var t=e==null?0:e.length;return!!t&&Mx(e,o,0)>-1}zm.exports=Ox});var Xm=w((pO,Km)=>{n();function Bx(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}Km.exports=Bx});var Zm=w((mO,Ym)=>{n();function Fx(e,o){return e.has(o)}Ym.exports=Fx});var Qm=w((lO,Jm)=>{n();var Wx=Ht(),Ux=kn(),Gx=Wx(Ux,"Set");Jm.exports=Gx});var ol=w((dO,el)=>{n();function Hx(){}el.exports=Hx});var ma=w((_O,nl)=>{n();function Vx(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}nl.exports=Vx});var rl=w((uO,tl)=>{n();var la=Qm(),$x=ol(),qx=ma(),zx=1/0,jx=la&&1/qx(new la([,-0]))[1]==zx?function(e){return new la(e)}:$x;tl.exports=jx});var il=w((gO,al)=>{n();var Kx=Bm(),Xx=jm(),Yx=Xm(),Zx=Zm(),Jx=rl(),Qx=ma(),eT=200;function oT(e,o,t){var r=-1,c=Xx,p=e.length,m=!0,l=[],d=l;if(t)m=!1,c=Yx;else if(p>=eT){var _=o?null:Jx(e);if(_)return Qx(_);m=!1,c=Zx,d=new Kx}else d=o?[]:l;e:for(;++r<p;){var T=e[r],f=o?o(T):T;if(T=t||T!==0?T:0,m&&f===f){for(var S=d.length;S--;)if(d[S]===f)continue e;o&&d.push(f),l.push(T)}else c(d,f,t)||(d!==l&&d.push(f),l.push(T))}return l}al.exports=oT});var cl=w((fO,sl)=>{n();var nT=il();function tT(e){return e&&e.length?nT(e):[]}sl.exports=tT});var ua={};ge(ua,{css:()=>Pl,default:()=>FT});var Pl,FT,ga=y(()=>{"use strict";n();Pl=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pl));FT={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Ze={};ge(Ze,{css:()=>El,default:()=>GT});var El,GT,Je=y(()=>{"use strict";n();El=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(El));GT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Ia={};ge(Ia,{css:()=>$l,default:()=>sy});var $l,sy,Aa=y(()=>{"use strict";n();$l=`.dapp-core-component__loginButtonStyles__default-login-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($l));sy={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var La={};ge(La,{css:()=>Xl,default:()=>my});var Xl,my,ka=y(()=>{"use strict";n();Xl=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xl));my={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var Ea={};ge(Ea,{css:()=>Jl,default:()=>dy});var Jl,dy,Na=y(()=>{"use strict";n();Jl=`.dapp-core-component__scamPhishingStyles__scam-phishing-alert {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jl));dy={"scam-phishing-alert":"dapp-core-component__scamPhishingStyles__scam-phishing-alert",scamPhishingAlert:"dapp-core-component__scamPhishingStyles__scam-phishing-alert","scam-phishing-alert-icon":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon",scamPhishingAlertIcon:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-icon","scam-phishing-alert-text":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text",scamPhishingAlertText:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-text","scam-phishing-alert-prefix":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix",scamPhishingAlertPrefix:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-prefix","scam-phishing-alert-authorization":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization",scamPhishingAlertAuthorization:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization","scam-phishing-alert-authorization-duration":"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration",scamPhishingAlertAuthorizationDuration:"dapp-core-component__scamPhishingStyles__scam-phishing-alert-authorization-duration"}});var Ao={};ge(Ao,{css:()=>rd,default:()=>gy});var rd,gy,Po=y(()=>{"use strict";n();rd=`.dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rd));gy={"xPortal-login-container":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container",xPortalLoginContainer:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-login-container","xPortal-modal-dialog-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content",xPortalModalDialogContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-dialog-content","xPortal-modal-header":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header",xPortalModalHeader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header","xPortal-modal-header-text":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text",xPortalModalHeaderText:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-header-text","xPortal-modal-close-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button",xPortalModalCloseButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-close-button","xPortal-modal-body":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body",xPortalModalBody:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-modal-body","xPortal-content":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content",xPortalContent:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-content","xPortal-container-heading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading",xPortalContainerHeading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-heading","xPortal-container-subheading":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading",xPortalContainerSubheading:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-subheading","xPortal-container-error":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error",xPortalContainerError:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-error","xPortal-qr-code":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code",xPortalQrCode:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-qr-code","xPortal-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader",xPortalLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-loader","xPortal-container-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button",xPortalContainerButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button","xPortal-container-button-icon":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon",xPortalContainerButtonIcon:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-container-button-icon","xPortal-pairings":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings",xPortalPairings:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings","xPortal-pairings-lead":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead",xPortalPairingsLead:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-lead","xPortal-pairings-list":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list",xPortalPairingsList:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairings-list","xPortal-pairing-button":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button",xPortalPairingButton:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-button","xPortal-pairing-loader":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader",xPortalPairingLoader:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-loader","xPortal-pairing-image":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image",xPortalPairingImage:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-image","xPortal-pairing-details":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details",xPortalPairingDetails:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-details","xPortal-pairing-remove":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove",xPortalPairingRemove:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-pairing-remove","xPortal-legacy-link":"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link",xPortalLegacyLink:"dapp-core-component__walletConnectLoginContainerStyles__xPortal-legacy-link"}});var yy={};ge(yy,{WalletConnectLoginButton:()=>Ty});module.exports=oe(yy);n();n();var Hn=x(require("react"));n();n();n();var Xs=require("react"),Xo=require("react-redux");n();var Gr=require("@reduxjs/toolkit"),js=require("react-redux/lib/utils/Subscription");D();n();var Ps=x(require("lodash.throttle"));k();D();Ir();Go();Uo();var H_=[Jn],bt=!1,V_=(0,Ps.default)(()=>{fn(gn())},5e3),Ls=e=>o=>t=>{if(H_.includes(t.type))return o(t);let r=e.getState(),c=De.local.getItem(ve.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return fn(gn());let m=Date.now();return c-m<0&&!bt?setTimeout(()=>{bt=!0,e.dispatch(qi())},1e3):(bt&&(bt=!1),V_()),o(t)};n();n();function wt(){return typeof sessionStorage!="undefined"}var $s=wt()?(Ms(),oe(Rs)).default:(Bs(),oe(Os)).default,qs=wt()?(Ws(),oe(Fs)).default:[],zs=wt()?(Vs(),oe(Hs)).default:e=>e;vt();var P=(0,Gr.configureStore)({reducer:$s,middleware:e=>e({serializableCheck:{ignoredActions:[...qs,Cr.type,nt.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ls)}),Ks=(0,js.createSubscription)(P),I0=zs(P),A0=(0,Gr.configureStore)({reducer:xo});var du={store:P,subscription:Ks},Hr=(0,Xs.createContext)(du),E0=(0,Xo.createStoreHook)(Hr),J=(0,Xo.createDispatchHook)(Hr),I=(0,Xo.createSelectorHook)(Hr);n();n();D();n();var Ys=x(require("lodash.isequal")),Ct=require("reselect"),b=(0,Ct.createSelectorCreator)(Ct.defaultMemoize,Ys.default);var Re=e=>e.account,io=b(Re,e=>e.address),To=b(Re,io,(e,o)=>o in e.accounts?e.accounts[o]:ot),_u=b(Re,To,(e,o)=>{let c=e,{accounts:t}=c,r=Ue(c,["accounts"]);return A(g({},r),{address:o.address,account:o})}),O0=b(To,e=>e.balance),uu=b(To,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),B0=b(Re,e=>e.shard),gu=b(Re,e=>e.ledgerAccount),F0=b(Re,e=>e.walletConnectAccount),W0=b(Re,e=>e.isAccountLoading),U0=b(Re,e=>e.accountLoadingError),fu=b(Re,e=>e.websocketEvent),hu=b(Re,e=>e.websocketBatchEvent);n();var Zs=e=>e.dappConfig,V0=b(Zs,e=>e.shouldUseWebViewProvider);n();var re=e=>e.loginInfo,Js=b(re,e=>e.loginMethod),yo=b(re,io,(e,o)=>Boolean(o)),j0=b(re,e=>e.walletConnectLogin),xu=b(re,e=>e.ledgerLogin),Qs=b(re,e=>e.walletLogin),K0=b(re,e=>e.isLoginSessionInvalid),Yo=b(re,e=>e.tokenLogin),Vr=b(re,e=>e.logoutRoute),Tu=b(re,e=>e.isWalletConnectV2Initialized);n();var ec=e=>e.modals,Z0=b(ec,e=>e.txSubmittedModal),yu=b(ec,e=>e.notificationModal);n();var Me=e=>e.networkConfig,wn=b(Me,e=>e.network.chainId),Su=b(Me,e=>e.network.roundDuration),ev=b(Me,e=>e.network.walletConnectBridgeAddress),oc=b(Me,e=>e.network.walletConnectV2RelayAddress),nc=b(Me,e=>e.network.walletConnectV2ProjectId),tc=b(Me,e=>e.network.walletConnectV2Options),rc=b(Me,e=>e.network.walletConnectDeepLink),le=b(Me,e=>e.network),ac=b(le,e=>e.apiAddress),ic=b(le,e=>e.explorerAddress),sc=b(le,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),bu=b(le,e=>e.xAliasAddress),cc=b(le,e=>e.egldLabel);n();var It=e=>e.signedMessageInfo,tv=b(It,e=>e.isSigning),rv=b(It,e=>e.errorMessage),av=b(It,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),iv=b(It,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var pc=e=>e.toasts,wu=b(pc,e=>e.customToasts),mc=b(pc,e=>e.transactionToasts);n();D();var lc={errorMessage:Er,successMessage:Nr,processingMessage:Dr},dc=e=>e.transactionsInfo,vu=b(dc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||lc);n();n();var Oe=require("@multiversx/sdk-core");k();n();var $r=require("@multiversx/sdk-core/out");n();n();function At(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function So(e){return At(e)?atob(e):e}n();n();n();n();var _c=e=>{let o=e!=null?e:"";return At(o)?$r.TransactionPayload.fromEncoded(o):new $r.TransactionPayload(o)};n();k();var vn=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ur).some(t=>e.startsWith(t)):!1;function Pt(e){var r,c,p;let o=g({},e);vn({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new Oe.Transaction(g(g(A(g(A(g({value:o.value.valueOf(),data:_c(o.data),nonce:o.nonce.valueOf(),receiver:new Oe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Oe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Yn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Zn,chainID:o.chainID.valueOf(),version:new Oe.TransactionVersion((p=o.version)!=null?p:Li)}),o.options?{options:new Oe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Oe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();k();n();n();n();var Pu=require("@multiversx/sdk-core/out");n();k();n();var gc=require("@multiversx/sdk-core");V();n();var uc=require("@multiversx/sdk-core");function Lu(e){try{let o=new uc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Cn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Lu(e)}n();n();n();var ku=require("@multiversx/sdk-core"),Eu=x(require("bignumber.js"));M();n();n();n();var qr="blocks";n();n();n();n();ce();n();n();ce();n();n();n();var Wu=x(require("bignumber.js"));k();n();var Fu=require("@multiversx/sdk-core"),jr=x(require("bignumber.js"));k();n();var Ou=x(require("bignumber.js"));n();jr.default.config({ROUNDING_MODE:jr.default.ROUND_FLOOR});n();n();n();k();n();n();n();n();k();n();k();n();var Uu=require("@multiversx/sdk-core");k();n();var An=require("@multiversx/sdk-core"),Vu=x(require("bignumber.js"));k();n();n();var Gu=x(require("bignumber.js"));k();n();k();n();n();n();n();n();n();k();n();k();n();k();n();ce();var qu=["reDelegateRewards","claimRewards","unBond"],zu=["wrapEgld","unwrapEgld"],ju=["unStake"],Ku=["unDelegate"];n();n();n();k();n();var Ju=x(require("bignumber.js"));n();n();ce();n();var eg=x(require("bignumber.js"));n();n();n();n();var tg=x(require("bignumber.js"));V();n();n();n();n();M();n();var sg=require("@multiversx/sdk-web-wallet-provider");k();n();var ag=x(require("qs"));n();ne();Ho();n();Ho();var GP={search:ho()?window.location.search:"",removeParams:[]};n();n();n();Z();n();ce();n();n();Z();n();var cg=x(require("linkifyjs"));n();k();n();var pg=x(require("bignumber.js"));n();V();n();n();M();n();M();n();n();n();ce();n();ce();n();var mg=x(require("bignumber.js"));k();ce();n();ce();n();var Sc=require("react");V();n();n();ce();n();n();var lg=require("@multiversx/sdk-core/out"),dg=x(require("bignumber.js"));ce();n();V();n();n();V();var Nk=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var bc=require("react");V();Z();n();var ug=require("react");ce();var Uk=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Ko();n();var Et=e=>e.transactions,Zo=b(Et,e=>e.signedTransactions),gg=b(Et,e=>e.signTransactionsError),wc=b(Et,e=>e.signTransactionsCancelMessage),Nt=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),vc=b(Zo,Nt(qo)),Cc=b(Zo,Nt(zo)),Ic=b(Zo,Nt(jo)),fg=b(Zo,Nt(Mr)),Ac=b(Et,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:A(g({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Pt(t)))||[]})}),hg=b(Zo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var Dt=require("react");function Pc(e,o=[]){let t=(0,Dt.useRef)(!0);(0,Dt.useEffect)(()=>{t.current?t.current=!1:e()},o)}n();D();n();n();n();n();n();n();n();n();var kc=require("@multiversx/sdk-extension-provider"),Ec=require("@multiversx/sdk-hw-provider"),Nc=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Dc=require("@multiversx/sdk-opera-provider"),Rc=require("@multiversx/sdk-passkey-provider/out"),Mc=require("@multiversx/sdk-web-wallet-provider");k();to();n();var so=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Lc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");M();n();var Rt={},Mt=Jo;var Se=e=>{switch(e==null?void 0:e.constructor){case Mc.WalletProvider:return"wallet";case Mt:return"walletconnectv2";case Ec.HWProvider:return"ledger";case kc.ExtensionProvider:return"extension";case Rc.PasskeyProvider:return"passkey";case Nc.MetamaskProvider:return"metamask";case Dc.OperaProvider:return"opera";case qe.CrossWindowProvider:return"crossWindow";case so.IframeProvider:return"iframe";case Jo:return"";default:return"extra"}};var Ce=e=>`Unable to perform ${e}, Provider not initialized`,Jo=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Ce("getAccount"))}setAccount(o){throw new Error(Ce(`setAccount: ${o}`))}login(o){throw new Error(Ce(`login with options: ${o}`))}logout(o){throw new Error(Ce(`logout with options: ${o}`))}getAddress(){throw new Error(Ce("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(Ce(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(Ce(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(Ce(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(Ce(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(Ce(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(Ce(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Ln=new Jo;var Oc=Ln;function Xe(e){Oc=e}function fe(){return Oc||Ln}D();n();n();n();n();n();var Bc=require("@lifeomic/axios-fetch"),Zr=x(require("axios")),Jr=(0,Bc.buildAxiosFetch)(Zr.default),Qr=(e,o)=>h(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function xg(e,o,t){return h(this,null,function*(){try{let r=yield Jr(e,g({method:"POST",body:o?JSON.stringify(o):void 0,headers:g({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Qr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function Tg(e,o){return h(this,null,function*(){try{let t=yield Jr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Qr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function yg(e,o,t){return h(this,null,function*(){try{let r=yield Jr(e,g({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Qr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var Qo=Zr.default.create();Qo.get=Tg;Qo.post=xg;Qo.patch=yg;n();n();var Sg=x(require("axios"));n();var bg=x(require("swr"));n();M();n();n();function Fc(){let e=fe();return Se(e)}function bo(e){return Fc()===e}n();Z();var Wc=()=>{let{search:e}=N(),o=new URLSearchParams(e),t=Object.fromEntries(o),r=t==null?void 0:t.address;return Cn(r)?r:null};function Ot(){let e=P.getState(),o=fe(),t=io(e),r=yo(e),c=Qs(e);if(!o)throw"provider not initialized";return bo("ledger")&&r?new Promise(p=>{p(t)}):!bo("")&&!bo("wallet")&&!bo("extra")?o.getAddress():new Promise(p=>{let m=Wc();c!=null&&m&&p(m),r&&p(t),p("")})}n();Ko();n();n();n();var wg=x(require("axios"));n();var Cg=x(require("axios"));Bo();n();k();n();var Ig=x(require("axios"));n();var Pg=x(require("axios"));n();n();var Lg=x(require("axios"));n();var kg=x(require("axios"));n();n();D();M();n();n();n();n();Z();var Gc=()=>{let{search:e}=N(),o=new URLSearchParams(e),t=Object.fromEntries(o);return t==null?void 0:t.accessToken};var Hc=()=>{var t;let e=Gc(),o=re(P.getState());return e!=null?e:(t=o.webviewLogin)==null?void 0:t.data};n();U();V();n();D();n();var Vc=require("@multiversx/sdk-core");V();ne();n();Ko();n();D();M();n();D();V();n();n();n();V();n();Xn();n();n();n();n();var Rg=x(require("swr"));n();n();n();n();var $c=require("react");n();n();var Mg=require("react"),Og=require("@multiversx/sdk-web-wallet-provider"),Bg=require("@multiversx/sdk-web-wallet-provider"),Fg=x(require("qs"));k();D();M();fr();Z();var bR=N();n();var wp=require("react"),ca=require("@multiversx/sdk-core");n();k();Ar();n();n();n();n();n();n();n();n();n();n();Bo();n();var Hg=x(require("axios"));n();var $g=x(require("axios"));n();Bo();n();Bo();n();n();n();n();var zg=require("@multiversx/sdk-opera-provider");n();var jg=require("@multiversx/sdk-extension-provider");n();to();n();n();n();n();var _p=x(dp());var wo=e=>{if(!e||!(0,_p.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,r,c,p]=o,m=JSON.parse(So(p)),l=So(t);return{ttl:Number(c),extraInfo:m,origin:l,blockHash:r}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var Tp=require("@multiversx/sdk-native-auth-client");n();var fp=x(require("axios"));n();n();n();function up(e){return h(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var gp=(e,o,t,r=0)=>h(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield up(o.delay)),yield gp(e,o,t,r+1)):null}}),ra=(e,o={retries:5,delay:500})=>(...t)=>h(void 0,null,function*(){return yield gp(e,o,t)});var Tf=4,yf=3e4,Wt={current:null},vo={current:null},Sf=ra((e,o,t)=>h(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield fp.default.get(`${e}/${qr}?from=${Tf}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));function hp(e,o,t,r){return h(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(Wt.current!=null&&c<Wt.current.timestamp*1e3+yf&&!r)return Wt.current;if(vo.current!=null)return yield vo.current;vo.current=Sf(e,o,t);try{let p=yield vo.current;if(p==null)throw vo.current=null,new Error("could not get block hash");return Wt.current={hash:p.hash,timestamp:p.timestamp},vo.current=null,p}catch(p){return vo.current=null,null}})}n();n();Qn();n();function bf(e){return Object.prototype.toString.call(e)==="[object String]"}var aa=e=>{var t;if(!e||!bf(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=So(r),l=So(c),d=wo(l);if(!d)return{address:m,body:l,signature:p,blockHash:"",origin:"",ttl:0};let _=A(g({},d),{address:m,body:l,signature:p});return(t=d.extraInfo)!=null&&t.timestamp||delete _.extraInfo,_}catch(r){return null}};var ia={isExpired:!1},xp=e=>{if(!e)return ia;let o=aa(e);if(!o)return ia;let t=Wo(),{ttl:r,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return ia;let m=p+r,l=t>m,d=m-t;return{isExpired:l,expiresAt:m,secondsUntilExpires:d}};n();Z();var Nn={origin:N().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},Dn=e=>{var t,r,c,p,m,l;return e===!0?Nn:{origin:(t=e==null?void 0:e.origin)!=null?t:Nn.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(r=e==null?void 0:e.expirySeconds)!=null?r:Nn.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:Nn.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:Nn.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(l=e==null?void 0:e.extraRequestHeaders)!=null?l:{}}};var Ut=e=>{let{origin:o,apiAddress:t,expirySeconds:r,blockHashShard:c,extraInfo:p,gatewayUrl:m,extraRequestHeaders:l}=Dn(e),d=new Tp.NativeAuthClient({origin:o,apiUrl:t,expirySeconds:r,blockHashShard:c,gatewayUrl:m,extraRequestHeaders:l});return{getNativeAuthConfig:Dn,initialize:f=>h(void 0,null,function*(){var v,L;if(!t||!o)return"";let S=()=>d.getCurrentBlockHash();try{let C=(v=f==null?void 0:f.latestBlockInfo)!=null?v:yield hp(t,c,S,f==null?void 0:f.noCache);if(!C)return"";let{hash:B,timestamp:G}=C,q=d.encodeValue(JSON.stringify(g(g({},(L=f==null?void 0:f.extraInfo)!=null?L:p),G?{timestamp:G}:{})));return`${d.encodeValue(o)}.${B}.${r}.${q}`}catch(C){return console.error("Error getting native auth token: ",C.toString()),""}}),getToken:({address:f,token:S,signature:v})=>d.getToken(f,S,v),getTokenExpiration:xp}};n();var wf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var vf=require("@multiversx/sdk-passkey-provider/out");k();Z();n();n();n();var Df=require("react"),Rf=require("@multiversx/sdk-hw-provider");n();U();V();n();function yp(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(t){}}}function Sp(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Pf(e.path,e.caseSensitive,e.end),c=o.match(t);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),l=c.slice(1);return{params:r.reduce((_,T,f)=>{if(T==="*"){let S=l[f]||"";m=p.slice(0,p.length-S.length).replace(/(.)\/+$/,"$1")}return _[T]=Lf(l[f]||"",T),_},{}),pathname:p,pathnameBase:m,pattern:e}}function Pf(e,o=!1,t=!0){yp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),r]}function Lf(e,o){try{return decodeURIComponent(e)}catch(t){return yp(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}Tn();Go();Uo();ne();var bp=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&xn({url:e})},kf=e=>{let o=De.local.getItem(ve.logoutEvent),{data:t}=o?JSON.parse(o):{data:e};e===t&&(De.local.setItem({key:ve.logoutEvent,data:e,expires:0}),De.local.removeItem(ve.logoutEvent))},Ef=500;function sa(c,p){return h(this,arguments,function*(e,o,t=Boolean(Hc()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var L;let m="",l=fe(),d=Se(l),_=d==="wallet",T=((L=l==null?void 0:l.isInitialized)==null?void 0:L.call(l))===!0;if(t&&(l==null?void 0:l.relogin)!=null)return l.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield Ot(),kf(m)}catch(C){console.error("error fetching logout address",C)}let f=Vo(e),S=N(),v=new URL(decodeURIComponent(f)).pathname;if((Sp(S.pathname,v)||_&&T)&&es(),!m&&!T)return bp({callbackUrl:f,onRedirect:o});try{if(P.dispatch(O()),_)return setTimeout(()=>{l.logout({callbackUrl:f})},Ef);r.hasConsentPopup&&d==="crossWindow"&&l.setShouldShowConsentPopup(!0),yield l.logout({callbackUrl:f})}catch(C){console.error("Logging out error:",C)}finally{_||bp({callbackUrl:f,onRedirect:o})}})}n();var en=()=>{let e=fe(),o=Se(e);return{provider:e,providerType:o}};n();var _l=require("react"),ul=require("@multiversx/sdk-core"),bT=require("@multiversx/sdk-extension-provider"),wT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),vT=require("@multiversx/sdk-passkey-provider/out"),CT=x(cl());k();n();n();var rn=()=>I(To);n();n();n();n();n();n();n();n();var an=x(require("react"));var rT=(0,an.createContext)({}),NO=P.getState();function $t(){let e=(0,an.useContext)(rT);if(e===void 0||Object.values(e).length===0)throw new Error("useAxiosInterceptorContext must be used within an AxiosInterceptorContextProvider");return e}n();var pl=x(require("react"));n();var da=x(require("react")),aT=x(require("axios"));var ml=()=>{try{let{loginInfo:e,isLoggedIn:o}=$t();return A(g({},e),{isLoggedIn:o})}catch(e){let o=I(re),t=I(yo);return A(g({},o),{isLoggedIn:t})}};var ll=()=>{let{isLoggedIn:e}=ml();return e};n();n();to();n();n();var lT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),dT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");U();n();U();D();V();n();n();D();n();ne();n();D();V();n();n();var sT=require("@multiversx/sdk-core"),cT=x(require("bignumber.js"));k();n();var pT=x(require("bignumber.js"));k();D();M();ne();Z();n();var dl=require("react"),fT=require("@multiversx/sdk-extension-provider"),hT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),xT=require("@multiversx/sdk-passkey-provider/out");to();D();n();D();V();Tn();Z();n();Ee();D();n();n();var AT=require("react");n();n();M();Ko();n();var gl=require("react");n();n();var LT=require("react"),kT=require("@multiversx/sdk-extension-provider");Ee();U();M();n();function Be(){return yo(P.getState())}ze();ne();ne();n();n();to();V();var co=e=>(Object.values(z).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let t=qe.CrossWindowProvider.getInstance();t.isInitialized()&&t.dispose();break}case"iframe":{let t=so.IframeProvider.getInstance();t.isInitialized()&&t.dispose();break}default:break}}),null);n();var fl=require("react"),qt=require("@multiversx/sdk-core");D();var PT=(e,o)=>{var t;return o?o===!0?e:(t=o.apiAddress)!=null?t:e:null},Ye=e=>{let o=I(le),t=I(Yo),r=(0,fl.useRef)(t==null?void 0:t.loginToken),c=PT(o.apiAddress,e),p=Dn(g(g({},e===!0?{}:e),c?{apiAddress:c}:{})),m=Boolean(e),l=Ut(p),{address:d}=rn(),_=J(),T=L=>{r.current=L,_(hn(g(A(g({},t),{loginToken:L}),c?{nativeAuthConfig:p}:{})))},f=()=>{try{return l.initialize()}catch(L){console.error("Unable to get block. Login failed.",L);return}},S=({address:L,signature:C})=>{let B=r.current;if(!B)throw"Token not found. Call `setLoginToken` first.";if(!m){_(hn({loginToken:B,signature:C}));return}let G=l.getToken({address:L,token:B,signature:C});return _(hn(g({loginToken:B,signature:C,nativeAuthToken:G},c?{nativeAuthConfig:p}:{}))),G};return{configuration:p,setLoginToken:T,getNativeAuthLoginToken:f,setTokenLoginInfo:S,refreshNativeAuthTokenLogin:B=>h(void 0,[B],function*({signMessageCallback:L,nativeAuthClientConfig:C}){let q=yield Ut(C||p).initialize({noCache:Boolean(C)});if(r.current=q,!q)return;let ae=new qt.Message({address:new qt.Address(d),data:a.Buffer.from(`${d}${q}`)}),R=yield L(ae,{});if(!(R!=null&&R.signature))throw"Message not signed";return S({address:d,signature:a.Buffer.from(R.signature).toString("hex")})})}};n();var ET=require("react"),NT=require("@multiversx/sdk-opera-provider");Ee();U();M();ze();ne();Z();n();var DT=require("react");xr();Ee();to();U();D();M();ze();Z();n();var BT=require("react");Ee();D();n();n();Tr();n();n();var _a=x(require("platform"));function hl(){var e,o,t,r;return((o=(e=_a.default)==null?void 0:e.os)==null?void 0:o.family)==="iOS"||((r=(t=_a.default)==null?void 0:t.os)==null?void 0:r.family)==="Android"}Ho();n();n();n();n();n();n();n();un();M();n();n();var RT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Tn();Go();n();n();n();D();n();n();var MT=x(require("axios"));ne();n();n();var Sl=x(Gt());un();var xl,Tl,yl,OT=(yl=(Tl=(xl=we.safeWindow)==null?void 0:xl.location)==null?void 0:Tl.origin)==null?void 0:yl.includes("localhost"),bl=e=>{if(!(0,Sl.default)(e))return Boolean(e);let t=g({},e);return Boolean(OT)&&delete t.origin,Object.keys(t).length>0};n();var wl=({maxRetries:e})=>new Promise((o,t)=>{let r=0,c=()=>{let p=wn(P.getState());if(p){o(p);return}if(r<e){r++,setTimeout(c,1e3);return}t(null)};c()});Z();n();n();var Ul=require("react");k();n();n();k();var vl=e=>{var c;let o=I(Yo),t=(c=o==null?void 0:o.loginToken)!=null?c:e;if(!t)return;let r=wo(t);if(!!r)return r.origin.toLowerCase().startsWith(Ci)};n();n();n();var Co=x(require("bignumber.js")),Cl=e=>{let o=new Co.default(e).dividedBy(1e3).integerValue(Co.default.ROUND_FLOOR),t=new Co.default(o).dividedBy(60).integerValue(Co.default.ROUND_FLOOR),r=new Co.default(t).dividedBy(60).integerValue(Co.default.ROUND_FLOOR),c=r.modulo(60).isGreaterThan(1),p=t.modulo(60).isGreaterThan(1),m=t.modulo(60).isLessThan(1);return c?`${r} hours`:p?`${t} minutes`:m?"less than 1 minute":`${t} minute`};var Il=(e,o)=>{var p;let t=I(Yo),r=(p=t==null?void 0:t.loginToken)!=null?p:e;if(!r)return;let c=wo(r);if(!!c)return{className:o,url:c.origin,duration:Cl(c.ttl*1e3)}};n();n();n();var po=x(require("react")),Bl=require("react"),Fl=require("react"),Sa=x(require("classnames")),Wl=require("react-dom");k();n();var kl=x(require("react"));n();var Fn=x(require("react"));n();Ho();var Al=()=>!ho();var WT=()=>h(void 0,null,function*(){return yield Promise.resolve().then(()=>(ga(),ua))}),UT=()=>(ga(),oe(ua)).default,fa=Al();function Ll({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=Fn.default.useState(fa?void 0:UT()),[p,m]=Fn.default.useState(fa||t==null?void 0:t()),l=()=>h(this,null,function*(){(e?e():WT()).then(d=>c(d.default)),o==null||o().then(d=>m(d.default))});return(0,Fn.useEffect)(()=>{fa&&l()},[]),{globalStyles:r,styles:p}}function j(e,o){return t=>{let{globalStyles:r,styles:c}=Ll({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return kl.default.createElement(e,A(g({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();var Nl=x(require("react")),Dl=x(require("classnames"));var HT=({className:e,children:o,styles:t})=>Nl.default.createElement("div",{className:(0,Dl.default)(t==null?void 0:t.dappModalBody,e)},o),ha=j(HT,{ssrStyles:()=>Promise.resolve().then(()=>(Je(),Ze)),clientStyles:()=>(Je(),oe(Ze)).default});n();var xa=x(require("react")),Rl=x(require("classnames"));var VT=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?xa.default.createElement("div",{className:(0,Rl.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:xa.default.createElement("div",null,r)):null,Ta=j(VT,{ssrStyles:()=>Promise.resolve().then(()=>(Je(),Ze)),clientStyles:()=>(Je(),oe(Ze)).default});n();var sn=x(require("react")),Ml=require("@fortawesome/free-solid-svg-icons"),Ol=require("@fortawesome/react-fontawesome"),Wn=x(require("classnames"));var $T=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:l,styles:d})=>e?t?sn.default.createElement("div",{className:(0,Wn.default)(d==null?void 0:d.dappModalHeader,r)},t):sn.default.createElement("div",{className:(0,Wn.default)(d==null?void 0:d.dappModalHeader,r)},sn.default.createElement("div",{className:(0,Wn.default)(d==null?void 0:d.dappModalHeaderText,p)},o),sn.default.createElement("button",{onClick:m,className:(0,Wn.default)(d==null?void 0:d.dappModalCloseButton,l==null?void 0:l.btn,l==null?void 0:l.btnLight,c)},sn.default.createElement(Ol.FontAwesomeIcon,{size:"lg",icon:Ml.faTimes}))):null,ya=j($T,{ssrStyles:()=>Promise.resolve().then(()=>(Je(),Ze)),clientStyles:()=>(Je(),oe(Ze)).default});var zT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},jT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=zT,id:p="dapp-modal",onHide:m,parentElement:l,visible:d,styles:_})=>{let[T,f]=(0,Bl.useState)(!1);if((0,Fl.useEffect)(()=>{f(!0)},[]),!d)return null;let{showHeader:S,showFooter:v,headerText:L,footerText:C,modalDialogClassName:B="dapp-modal-dialog",modalContentClassName:G="dapp-modal-dialog-content",modalHeaderClassName:q="dapp-modal-dialog-header",modalHeaderTextClassName:ae="dapp-modal-dialog-header-text",modalCloseButtonClassName:R="dapp-modal-dialog-close-button",modalBodyClassName:_e="dapp-modal-dialog-content-body",modalFooterClassName:ie="dapp-modal-dialog-footer",customModalHeader:he,customModalFooter:lo}=c,_o=no=>{no.key==="Escape"&&r&&(m==null||m())};return po.default.createElement(po.default.Fragment,null,T&&(0,Wl.createPortal)(po.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Sa.default)(B,_==null?void 0:_.dappModal,t),"data-testid":e,onKeyDown:_o},po.default.createElement("div",{className:(0,Sa.default)(_==null?void 0:_.dappModalContent,G)},po.default.createElement(ya,{visible:S,headerText:L,customHeader:he,className:q,headerTextClassName:ae,closeButtonClassName:R,onHide:m}),po.default.createElement(ha,{className:_e},o),po.default.createElement(Ta,{visible:v,customFooter:lo,footerText:C,className:ie}))),l!=null?l:document==null?void 0:document.body))},ba=j(jT,{ssrStyles:()=>Promise.resolve().then(()=>(Je(),Ze)),clientStyles:()=>(Je(),oe(Ze)).default});n();n();var zt=require("react"),jt=e=>{let[o,t]=(0,zt.useState)(!1),r=()=>{t(!0)},c=()=>{t(!1)};return(0,zt.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&c()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:c,showModal:o}};n();var wa=({hideButtonWhenModalOpens:e,onContentHide:o,onContentShow:t,onModalCloses:r,onModalOpens:c,token:p,wrapContentInsideModal:m})=>{let l=ll(),[d,_]=(0,Ul.useState)(!1),{handleShowModal:T,handleHideModal:f,showModal:S}=jt(),v=vl(p),L=!e||!d,C=()=>{_(!1),o==null||o(),m?(f(),r==null||r()):r&&(console.warn('Deprecated: "onModalCloses" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentHide" instead.'),r())};return{disabledConnectButton:v,handleCloseModal:C,handleOpenModal:()=>{if(l)throw new Error($e);if(d)return C();_(!0),t==null||t(),m?(T(),c==null||c()):c&&(console.warn('Deprecated: "onModalOpens" must be used only when "wrapContentInsideModal" is set to "true". Use "onContentShow" instead.'),c())},shouldRenderButton:L,showContent:d,showModal:S}};n();var Gl=require("react"),XT=require("@multiversx/sdk-hw-provider");Ee();U();D();M();ze();n();var KT=require("react");n();n();var de=require("react");U();D();M();ze();Z();var va=({callbackRoute:e,token:o,nativeAuth:t,onLoginRedirect:r,logoutRoute:c,customRequestMethods:p=[]})=>{var dn;let m=J(),l=bl(t),d=Ye(l?t:!1),_=o,[T,f]=(0,de.useState)(""),[S,v]=(0,de.useState)(""),[L,C]=(0,de.useState)(!0),[B,G]=(0,de.useState)([]),[q,ae]=(0,de.useState)(null),{provider:R}=en(),_e=I(oc),ie=I(nc),he=I(tc),lo=I(rc),_o=I(Vr),no=I(Js),E=(0,de.useRef)(R),Fe=(0,de.useRef)(!1),We=(0,de.useRef)(!1),Lo=(dn=c!=null?c:_o)!=null?dn:"/",ko=[Rt.CANCEL_ACTION,...p];o&&ko.push(Rt.SIGN_LOGIN_TOKEN),l&&ko.push(Rt.SIGN_NATIVE_AUTH_TOKEN);let Zt=L?"":`${lo}?wallet-connect=${encodeURIComponent(S)}`,cn=Boolean(T),pn=Be(),Vn=()=>{sa(Lo)},Jt=F=>{console.log("WalletConnect Session Event: ",F)},Qt=()=>h(void 0,null,function*(){var F,W,X,ee;try{if(Fe.current||E.current==null)return;if(!We.current){try{yield(F=E.current)==null?void 0:F.logout()}catch(or){console.warn("Unable to logout")}return}let te=yield(X=(W=E.current)==null?void 0:W.getAddress)==null?void 0:X.call(W);if(!te){console.warn("Login cancelled.");return}let be=yield(ee=E.current)==null?void 0:ee.getSignature(),xe={address:te,loginMethod:"walletconnectv2"},Eo={logoutRoute:Lo,loginType:"walletconnectv2",callbackRoute:e!=null?e:N().href};m($i(Eo)),be&&d.setTokenLoginInfo({signature:be,address:te}),m(pe(xe)),ro({callbackRoute:e,onLoginRedirect:r,options:{address:te,signature:be}})}catch(te){f("User rejected connection proposal"),console.error(te)}}),mn=()=>h(void 0,null,function*(){var W,X,ee,te,be;if(Se(E.current)==="walletconnectv2")try{((te=(ee=(X=(W=E.current)==null?void 0:W.walletConnector)==null?void 0:X.session)==null?void 0:ee.getAll())!=null?te:[]).length>0&&(yield(be=E.current)==null?void 0:be.logout()),E.current=Ln,ae(null)}catch(xe){console.warn("Unable to logout")}}),Ie=F=>h(void 0,null,function*(){var W,X,ee;if(!_e||!ie){f("Invalid WalletConnect setup");return}if(!F||!F.topic){f("Expired connection");return}try{if((E.current?Se(E.current):!1)!=="walletconnectv2"){yield ue();return}if(C(!0),yield mn(),l&&!_&&(_=yield d.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}_&&d.setLoginToken(_),yield ue(!1);let{approval:be}=yield(W=E.current)==null?void 0:W.connect({topic:F.topic,methods:ko});try{yield(X=E.current)==null?void 0:X.login({approval:be,token:_})}catch(xe){console.error("User rejected existing connection proposal",xe),f("User rejected existing connection proposal"),C(!0),yield ue()}}catch(te){console.error("Unable to connect to existing session",te),f("Unable to connect to existing session")}finally{G((ee=E.current)==null?void 0:ee.pairings)}}),er=F=>h(void 0,null,function*(){var W,X;try{F&&(yield(W=E.current)==null?void 0:W.logout({topic:F}))}catch(ee){console.error("Unable to remove existing pairing",ee),f("Unable to remove existing pairing")}finally{let ee=yield(X=E.current)==null?void 0:X.getPairings();G(ee)}});function ue(F=!0){return h(this,null,function*(){var Eo,or,Oa;co();let W=yield wl({maxRetries:15});if(!W){console.error("Invalid chainID"),f("Invalid chainID");return}if(!ie||!_e){console.error("Invalid WalletConnect setup"),f("Invalid WalletConnect setup");return}let X=Be(),ee=We.current===!1&&!X,te=(or=(Eo=E.current)==null?void 0:Eo.isInitialized)==null?void 0:or.call(Eo);if(Fe.current||ee||te)return;if(Fe.current=!0,(Oa=E.current)!=null&&Oa.walletConnector){yield E.current.init(),ae(E.current),Fe.current=!1,F&&(yield ln());return}let be={onClientLogin:Qt,onClientLogout:Vn,onClientEvent:Jt},xe=new Mt(be,W,_e,ie,he);yield xe.init(),ae(xe),E.current=xe,Fe.current=!1,F&&(G(xe.pairings),yield ln())})}function ln(){return h(this,null,function*(){var F,W;if(!!E.current){if(!_e||!ie){f("Invalid WalletConnect setup");return}try{if(!We.current)return;let{uri:X,approval:ee}=yield(F=E.current)==null?void 0:F.connect({methods:ko});if(!Boolean(X))return;if(v(X),(he==null?void 0:he.logger)==="debug"&&console.log("WalletConnect uri: ",X),l&&!_&&(_=yield d.getNativeAuthLoginToken(),!_)){console.warn("Fetching block failed. Login cancelled.");return}if(_&&d.setLoginToken(_),(E.current?Se(E.current):!1)!=="walletconnectv2"){C(!0),yield ue();return}try{yield(W=E.current)==null?void 0:W.login({approval:ee,token:_})}catch(xe){console.error("User rejected connection proposal",xe),f("User rejected connection proposal"),C(!0)}}catch(X){console.error("Unable to connect",X)}}})}return Pc(()=>{E.current=R},[R]),(0,de.useEffect)(()=>(We.current=!0,()=>{We.current=!1}),[]),(0,de.useEffect)(()=>{C(!S)},[S]),(0,de.useEffect)(()=>{if(!q)return;(Boolean(q.session)||no==="walletconnectv2")&&pn&&Xe(q)},[q,pn]),[ue,{error:T,loginFailed:cn,isLoading:L&&!cn,isLoggedIn:pn&&!cn},{uriDeepLink:Zt,walletConnectUri:S,cancelLogin:mn,connectExisting:Ie,removeExistingPairing:er,wcPairings:B}]};n();var ZT=require("react"),JT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ee();U();M();ze();ne();ne();n();var QT=require("react"),ey=require("@multiversx/sdk-passkey-provider/out");Ee();U();M();ze();ne();ne();n();n();var Hl=require("react");n();var ty=require("react");n();var Ca=require("react"),ny=require("socket.io-client");D();n();n();n();var ry=require("react");V();n();n();n();var iy=x(require("swr"));n();n();n();n();var ay=x(require("axios"));n();n();var Un=x(require("react")),ql=x(require("classnames"));var cy=({onLogin:e,text:o="Default Login Button",className:t="dapp-login-button",btnClassName:r="dapp-default-login-button",disabled:c,"data-testid":p,children:m,globalStyles:l,styles:d})=>{let _=(0,Un.useMemo)(()=>({wrapper:(0,ql.default)(l==null?void 0:l.btn,l==null?void 0:l.btnPrimary,l==null?void 0:l.px4,l==null?void 0:l.m1,l==null?void 0:l.mx3,{[r]:r!=null},t),loginText:d==null?void 0:d.loginText,wrapperClassName:t}),[l,d]);return Un.default.createElement("button",{"data-testid":p,disabled:c,className:_.wrapper,onClick:e},m||Un.default.createElement("span",{className:_.loginText},o))},zl=j(cy,{ssrStyles:()=>Promise.resolve().then(()=>(Aa(),Ia)),clientStyles:()=>(Aa(),oe(Ia)).default});n();n();var Yt=x(require("react"));n();n();var jl=x(require("react"));var Pa=e=>{let{showModal:o}=jt({visible:e.visible}),t=()=>{var r;(r=e.onClose)==null||r.call(e)};return jl.default.createElement(ba,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:t,visible:o},e.children)};n();n();var K=x(require("react")),id=require("@fortawesome/free-solid-svg-icons"),oo=x(require("classnames")),sd=x(require("qrcode"));n();var Io=x(require("react")),py=e=>Io.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 31.114 44.981",width:16,height:16},e),Io.createElement("g",{transform:"translate(-47.168 -21.519)"},Io.createElement("g",{transform:"translate(-247.872 -130.693)"},Io.createElement("path",{d:"M355.676,152.213l-3.832,17.8h-9.661Z",transform:"translate(-40.089 1)",fillRule:"evenodd",fill:"#fff"}),Io.createElement("path",{d:"M326.45,271.184l-7.053,9.379H295.04l7.054-9.379Z",transform:"translate(0 -101.17)",fillRule:"evenodd",fill:"#fff"}),Io.createElement("path",{d:"M381.139,333.864l-13.493,17.8,3.832-17.8Z",transform:"translate(-61.742 -155.472)",fillRule:"evenodd",fill:"#fff"})))),Kl=py;k();n();n();var mo=x(require("react")),Yl=require("@fortawesome/react-fontawesome"),Gn=x(require("classnames"));var ly=({icon:e,title:o,action:t,iconClass:r,"data-testid":c,description:p,iconBgClass:m,iconSize:l="5x",className:d="dapp-page-state",globalStyles:_,styles:T})=>{let f=(0,mo.useMemo)(()=>({wrapper:(0,Gn.default)(T==null?void 0:T.state,_==null?void 0:_.mAuto,_==null?void 0:_.p4,_==null?void 0:_.textCenter,d),iconContainer:(0,Gn.default)(_==null?void 0:_.iconState,_==null?void 0:_.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,Gn.default)(r!=null&&r),title:(0,Gn.default)(_==null?void 0:_.h4,_==null?void 0:_.my4),description:_==null?void 0:_.mb3}),[_,T,d,m,r]);return mo.default.createElement("div",{className:f.wrapper,"data-testid":c},e&&mo.default.createElement("span",{className:f.iconContainer},mo.default.createElement(Yl.FontAwesomeIcon,{icon:e,className:f.iconClass,size:l})),o&&mo.default.createElement("p",{className:f.title},o),p&&mo.default.createElement("div",{className:f.description},p),t)},Zl=j(ly,{ssrStyles:()=>Promise.resolve().then(()=>(ka(),La)),clientStyles:()=>(ka(),oe(La)).default});n();n();var Q=x(require("react")),Ql=require("@fortawesome/free-solid-svg-icons"),ed=require("@fortawesome/react-fontawesome"),Da=x(require("classnames"));var _y=e=>{let{className:o,url:t,icon:r,authorizationInfo:c,styles:p}=e,m=t.replace("https://","").replace(/\/$/,""),l=c!=null&&c.url?c.url.replace("https://","").replace(/\/$/,""):"";return Q.default.createElement(Q.default.Fragment,null,Q.default.createElement("p",{className:(0,Da.default)(p==null?void 0:p.scamPhishingAlert,o)},r||Q.default.createElement(ed.FontAwesomeIcon,{className:p==null?void 0:p.scamPhishingAlertIcon,icon:Ql.faLock}),Q.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},Q.default.createElement("span",null,"Scam/Phishing verification:")," ",Q.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertPrefix},Q.default.createElement("strong",null,"https://"),m))),c&&c.url&&Q.default.createElement("p",{className:(0,Da.default)(p==null?void 0:p.scamPhishingAlert,p==null?void 0:p.scamPhishingAlertAuthorization,c.className)},Q.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},"Please confirm that you are indeed connecting to"),Q.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},Q.default.createElement("strong",null,"https://"),Q.default.createElement("span",null,l," for"),Q.default.createElement("strong",{className:p==null?void 0:p.scamPhishingAlertAuthorizationDuration},c.duration)),Q.default.createElement("span",{className:p==null?void 0:p.scamPhishingAlertText},"and that you trust this site. You might be sharing sensitive data."),Q.default.createElement("a",{href:"https://multiversx.com/faq"},"Learn more")))},od=j(_y,{ssrStyles:()=>Promise.resolve().then(()=>(Na(),Ea)),clientStyles:()=>(Na(),oe(Ea)).default});Z();n();n();var $=x(require("react")),Xt=require("@fortawesome/free-solid-svg-icons"),Ra=require("@fortawesome/react-fontawesome"),eo=x(require("classnames"));n();var Qe=x(require("react"));n();var Kt=x(require("react")),uy=e=>Kt.createElement("svg",g({width:235,height:235,viewBox:"0 0 235 235",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Kt.createElement("rect",{width:235,height:235,rx:72,fill:"#010101"}),Kt.createElement("path",{d:"M126.493 117.923L200.962 78.0313L188.455 54L120.231 81.5772C118.479 82.2909 116.521 82.2909 114.769 81.5772L46.5451 54L34 78.1084L108.468 118L34 157.892L46.5451 182L114.769 154.211C116.521 153.497 118.479 153.497 120.231 154.211L188.455 181.865L201 157.757L126.493 117.923Z",fill:"#23F7DD"})),nd=uy;var td=t=>{var r=t,{src:e}=r,o=Ue(r,["src"]);var m;let[c,p]=(0,Qe.useState)(!1);return(0,Qe.useEffect)(()=>{p(!1)},[e]),Qe.default.createElement(Qe.default.Fragment,null,c?Qe.default.createElement(nd,{className:(m=o==null?void 0:o.className)!=null?m:""}):Qe.default.createElement("img",g({onError:()=>{p(!0)},src:e},o)))};var fy=({connectExisting:e,removeExistingPairing:o,activePairings:t,className:r="dapp-wallet-connect-pairing-list",pairingListClasses:c,styles:p})=>{let[m,l]=(0,$.useState)(""),{leadClassName:d,wrapperClassName:_,buttonClassName:T,iconClassName:f,loaderClassName:S,detailsClassName:v,removeClassName:L}=c||{};return(0,$.useEffect)(()=>{l("")},[t]),$.default.createElement("div",{className:(0,eo.default)(p==null?void 0:p.xPortalPairings,r)},$.default.createElement("p",{className:(0,eo.default)(p==null?void 0:p.xPortalPairingsLead,d)},"or choose an existing pairing:"),$.default.createElement("div",{className:(0,eo.default)(p==null?void 0:p.xPortalPairingsList,_)},t.map(C=>{var B,G;return $.default.createElement("button",{type:"button",className:(0,eo.default)(p==null?void 0:p.xPortalPairingButton,T),key:C.topic,onClick:()=>{e(C),l(C.topic)}},C.peerMetadata&&$.default.createElement($.default.Fragment,null,m===C.topic?$.default.createElement(Ra.FontAwesomeIcon,{icon:Xt.faCircleNotch,className:(0,eo.default)("fa-spin","slow-spin",p==null?void 0:p.xPortalPairingLoader,S)}):$.default.createElement($.default.Fragment,null,((G=(B=C.peerMetadata)==null?void 0:B.icons)==null?void 0:G[0])&&$.default.createElement(td,{src:C.peerMetadata.icons[0],alt:C.peerMetadata.name,className:(0,eo.default)(p==null?void 0:p.xPortalPairingImage,f)})),$.default.createElement("div",{className:(0,eo.default)(p==null?void 0:p.xPortalPairingDetails,v)},$.default.createElement("strong",{className:p==null?void 0:p.xPortalPairingDetail},m===C.topic?`Confirm on ${C.peerMetadata.name}`:C.peerMetadata.name),$.default.createElement("span",{className:p==null?void 0:p.xPortalPairingDetail},C.peerMetadata.description),$.default.createElement("span",{className:p==null?void 0:p.xPortalPairingDetail},C.peerMetadata.url)),$.default.createElement("div",{className:(0,eo.default)(p==null?void 0:p.xPortalPairingRemove,L),onClick:q=>{q.stopPropagation(),o(C.topic)}},$.default.createElement(Ra.FontAwesomeIcon,{icon:Xt.faTimes}))))})))},ad=j(fy,{ssrStyles:()=>Promise.resolve().then(()=>(Po(),Ao)),clientStyles:()=>(Po(),oe(Ao)).default});var hy=({callbackRoute:e,className:o="dapp-wallet-connect-login-modal",customSpinnerComponent:t,innerWalletConnectComponentsClasses:r,lead:c="Scan the QR code using the xPortal App",loginButtonText:p="xPortal App",logoutRoute:m,nativeAuth:l,onLoginRedirect:d,showScamPhishingAlert:_=!0,title:T="Login with the xPortal App",token:f,globalStyles:S,styles:v,customRequestMethods:L=[]})=>{var mn;let[C,{error:B,isLoading:G},{connectExisting:q,removeExistingPairing:ae,uriDeepLink:R,walletConnectUri:_e,wcPairings:ie}]=va({callbackRoute:e,token:f,nativeAuth:l,onLoginRedirect:d,logoutRoute:m,customRequestMethods:L}),[he,lo]=(0,K.useState)(""),{containerContentClassName:_o,containerScamPhishingAlertClassName:no,containerTitleClassName:E,containerSubtitleClassName:Fe,containerErrorClassName:We,containerQrCodeClassName:Lo,containerLoaderClassName:ko,containerButtonClassName:Zt,walletConnectPairingListClassNames:cn}=r||{},pn=hl(),Vn=(mn=ie==null?void 0:ie.filter(Ie=>{let er=ie.some(ue=>{var ln,dn,F,W;return((ln=Ie.peerMetadata)==null?void 0:ln.name)===((dn=ue==null?void 0:ue.peerMetadata)==null?void 0:dn.name)&&((F=Ie.peerMetadata)==null?void 0:F.url)===((W=ue==null?void 0:ue.peerMetadata)==null?void 0:W.url)&&Ie.expiry<ue.expiry});return Boolean(Ie.active)&&Ie.peerMetadata&&!er}))!=null?mn:[],Jt=()=>h(void 0,null,function*(){if(!_e)return;let Ie=yield sd.default.toString(_e,{type:"svg"});Ie&&lo(Ie)});(0,K.useEffect)(()=>{Jt()},[_e]),(0,K.useEffect)(()=>{C()},[]);let Qt=_?Il(f,no):void 0;return K.default.createElement(K.default.Fragment,null,_&&K.default.createElement(od,{url:N().origin,authorizationInfo:Qt,className:no}),K.default.createElement("div",{className:(0,oo.default)(v==null?void 0:v.xPortalContent,_o)},K.default.createElement("div",{className:(0,oo.default)(v==null?void 0:v.xPortalContainerHeading,E)},T),K.default.createElement("div",{className:(0,oo.default)(v==null?void 0:v.xPortalContainerSubheading,Fe)},c),K.default.createElement("div",null,B&&K.default.createElement("p",{className:(0,oo.default)(v==null?void 0:v.xPortalContainerError,We)},B)),G||!he?K.default.createElement("div",{className:(0,oo.default)(v==null?void 0:v.xPortalLoader,ko)},t||K.default.createElement(Zl,{iconSize:"10x",icon:id.faCircleNotch,iconClass:(0,oo.default)("fa-spin",S==null?void 0:S.textPrimary)})):K.default.createElement("div",{className:(0,oo.default)(v==null?void 0:v.xPortalQrCode,Lo),dangerouslySetInnerHTML:{__html:he}}),pn&&K.default.createElement("a",{id:"accessWalletBtn","data-testid":"accessWalletBtn",href:R,rel:"noopener noreferrer nofollow",target:"_blank",className:(0,oo.default)(S==null?void 0:S.btn,S==null?void 0:S.btnPrimary,v==null?void 0:v.xPortalContainerButton,Zt)},K.default.createElement(Kl,{className:v==null?void 0:v.xPortalContainerButtonIcon}),p),Vn.length>0&&K.default.createElement(ad,{activePairings:Vn,connectExisting:q,removeExistingPairing:ae,className:o,pairingListClasses:cn})))},Ma=j(hy,{ssrStyles:()=>Promise.resolve().then(()=>(Po(),Ao)),clientStyles:()=>(Po(),oe(Ao)).default});var xy=e=>{let{className:o,onClose:t,showLoginContent:r,showLoginModal:c,wrapContentInsideModal:p,styles:m}=e,l=()=>{t==null||t()};return r===!1?null:p?Yt.default.createElement(Pa,{className:o,modalConfig:{headerText:"Login using the xPortal App",showHeader:!0,modalContentClassName:m==null?void 0:m.xPortalModalDialogContent,modalHeaderClassName:m==null?void 0:m.xPortalModalHeader,modalHeaderTextClassName:m==null?void 0:m.xPortalModalHeaderText,modalCloseButtonClassName:m==null?void 0:m.xPortalModalCloseButton,modalBodyClassName:m==null?void 0:m.xPortalModalBody,modalDialogClassName:m==null?void 0:m.xPortalLoginContainer},onClose:l,visible:c},Yt.default.createElement(Ma,g({},e))):Yt.default.createElement(Ma,g({},e))},cd=j(xy,{ssrStyles:()=>Promise.resolve().then(()=>(Po(),Ao)),clientStyles:()=>(Po(),oe(Ao)).default});n();var Ty=({buttonClassName:e="dapp-wallet-connect-login-button",callbackRoute:o,children:t,className:r="dapp-wallet-connect-login",customSpinnerComponent:c,"data-testid":p,disabled:m,hideButtonWhenModalOpens:l=!1,innerWalletConnectComponentsClasses:d,isWalletConnectV2:_=!0,lead:T="Scan the QR code using the xPortal App",loginButtonText:f="xPortal App",logoutRoute:S,modalClassName:v,nativeAuth:L,onLoginRedirect:C,onContentHide:B,onContentShow:G,onModalCloses:q,onModalOpens:ae,showScamPhishingAlert:R,title:_e="Login with the xPortal App",token:ie,wrapContentInsideModal:he=!0,customRequestMethods:lo=[]})=>{let{disabledConnectButton:_o,handleCloseModal:no,handleOpenModal:E,shouldRenderButton:Fe,showContent:We,showModal:Lo}=wa({hideButtonWhenModalOpens:l,onContentHide:B,onContentShow:G,onModalCloses:q,onModalOpens:ae,token:ie,wrapContentInsideModal:he});return Hn.default.createElement(Hn.default.Fragment,null,Fe&&Hn.default.createElement(zl,{btnClassName:e,className:r,"data-testid":p,disabled:m||_o,onLogin:E,text:f},t),Hn.default.createElement(cd,{callbackRoute:o,className:v,customSpinnerComponent:c,innerWalletConnectComponentsClasses:d,isWalletConnectV2:_,lead:T,loginButtonText:f,logoutRoute:S,nativeAuth:L,onClose:no,onLoginRedirect:C,showLoginContent:We,showLoginModal:Lo,showScamPhishingAlert:R,title:_e,token:ie,wrapContentInsideModal:he,customRequestMethods:lo}))};n();0&&(module.exports={WalletConnectLoginButton});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
