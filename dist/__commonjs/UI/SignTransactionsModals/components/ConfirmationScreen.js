"use strict";var Rd=Object.create;var an=Object.defineProperty,Dd=Object.defineProperties,Md=Object.getOwnPropertyDescriptor,Od=Object.getOwnPropertyDescriptors,Fd=Object.getOwnPropertyNames,Mn=Object.getOwnPropertySymbols,Ud=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty,La=Object.prototype.propertyIsEnumerable;var ka=(e,o,t)=>o in e?an(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Gt.call(o,t)&&ka(e,t,o[t]);if(Mn)for(var t of Mn(o))La.call(o,t)&&ka(e,t,o[t]);return e},w=(e,o)=>Dd(e,Od(o));var je=(e,o)=>{var t={};for(var r in e)Gt.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Mn)for(var r of Mn(e))o.indexOf(r)<0&&La.call(e,r)&&(t[r]=e[r]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),xe=(e,o)=>{for(var t in o)an(e,t,{get:o[t],enumerable:!0})},Ea=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Fd(o))!Gt.call(e,c)&&c!==t&&an(e,c,{get:()=>o[c],enumerable:!(r=Md(o,c))||r.enumerable});return e};var x=(e,o,t)=>(t=e!=null?Rd(Ud(e)):{},Ea(o||!e||!e.__esModule?an(t,"default",{value:e,enumerable:!0}):t,e)),de=e=>Ea(an({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((r,c)=>{var p=_=>{try{d(t.next(_))}catch(T){c(T)}},m=_=>{try{d(t.throw(_))}catch(T){c(T)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(e,o)).next())});var Na=S(On=>{"use strict";n();On.byteLength=Wd;On.toByteArray=Hd;On.fromByteArray=jd;var ye=[],le=[],Bd=typeof Uint8Array!="undefined"?Uint8Array:Array,Ht="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(to=0,Pa=Ht.length;to<Pa;++to)ye[to]=Ht[to],le[Ht.charCodeAt(to)]=to;var to,Pa;le["-".charCodeAt(0)]=62;le["_".charCodeAt(0)]=63;function Ca(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function Wd(e){var o=Ca(e),t=o[0],r=o[1];return(t+r)*3/4-r}function Gd(e,o,t){return(o+t)*3/4-t}function Hd(e){var o,t=Ca(e),r=t[0],c=t[1],p=new Bd(Gd(e,r,c)),m=0,d=c>0?r-4:r,_;for(_=0;_<d;_+=4)o=le[e.charCodeAt(_)]<<18|le[e.charCodeAt(_+1)]<<12|le[e.charCodeAt(_+2)]<<6|le[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=le[e.charCodeAt(_)]<<2|le[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=le[e.charCodeAt(_)]<<10|le[e.charCodeAt(_+1)]<<4|le[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function $d(e){return ye[e>>18&63]+ye[e>>12&63]+ye[e>>6&63]+ye[e&63]}function Vd(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push($d(r));return c.join("")}function jd(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,d=t-r;m<d;m+=p)c.push(Vd(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],c.push(ye[o>>2]+ye[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ye[o>>10]+ye[o>>4&63]+ye[o<<2&63]+"=")),c.join("")}});var Ra=S($t=>{n();$t.read=function(e,o,t,r,c){var p,m,d=c*8-r-1,_=(1<<d)-1,T=_>>1,f=-7,b=t?c-1:0,E=t?-1:1,k=e[o+b];for(b+=E,p=k&(1<<-f)-1,k>>=-f,f+=d;f>0;p=p*256+e[o+b],b+=E,f-=8);for(m=p&(1<<-f)-1,p>>=-f,f+=r;f>0;m=m*256+e[o+b],b+=E,f-=8);if(p===0)p=1-T;else{if(p===_)return m?NaN:(k?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-T}return(k?-1:1)*m*Math.pow(2,p-r)};$t.write=function(e,o,t,r,c,p){var m,d,_,T=p*8-c-1,f=(1<<T)-1,b=f>>1,E=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=r?0:p-1,L=r?1:-1,Y=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=f):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+b>=1?o+=E/_:o+=E*Math.pow(2,1-b),o*_>=2&&(m++,_/=2),m+b>=f?(d=0,m=f):m+b>=1?(d=(o*_-1)*Math.pow(2,c),m=m+b):(d=o*Math.pow(2,b-1)*Math.pow(2,c),m=0));c>=8;e[t+k]=d&255,k+=L,d/=256,c-=8);for(m=m<<c|d,T+=c;T>0;e[t+k]=m&255,k+=L,m/=256,T-=8);e[t+k-L]|=Y*128}});var qa=S(Ao=>{"use strict";n();var Vt=Na(),Io=Ra(),Da=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ao.Buffer=l;Ao.SlowBuffer=Jd;Ao.INSPECT_MAX_BYTES=50;var Fn=2147483647;Ao.kMaxLength=Fn;l.TYPED_ARRAY_SUPPORT=qd();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function qd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function Re(e){if(e>Fn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Kt(e)}return Fa(e,o,t)}l.poolSize=8192;function Fa(e,o,t){if(typeof e=="string")return Kd(e,o);if(ArrayBuffer.isView(e))return Xd(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Se(e,ArrayBuffer)||e&&Se(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Se(e,SharedArrayBuffer)||e&&Se(e.buffer,SharedArrayBuffer)))return qt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return l.from(r,o,t);var c=Yd(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return Fa(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Ua(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function zd(e,o,t){return Ua(e),e<=0?Re(e):o!==void 0?typeof t=="string"?Re(e).fill(o,t):Re(e).fill(o):Re(e)}l.alloc=function(e,o,t){return zd(e,o,t)};function Kt(e){return Ua(e),Re(e<0?0:Xt(e)|0)}l.allocUnsafe=function(e){return Kt(e)};l.allocUnsafeSlow=function(e){return Kt(e)};function Kd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Ba(e,o)|0,r=Re(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function jt(e){for(var o=e.length<0?0:Xt(e.length)|0,t=Re(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function Xd(e){if(Se(e,Uint8Array)){var o=new Uint8Array(e);return qt(o.buffer,o.byteOffset,o.byteLength)}return jt(e)}function qt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,l.prototype),r}function Yd(e){if(l.isBuffer(e)){var o=Xt(e.length)|0,t=Re(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Yt(e.length)?Re(0):jt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return jt(e.data)}function Xt(e){if(e>=Fn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Fn.toString(16)+" bytes");return e|0}function Jd(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(Se(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),Se(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=l.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(Se(m,Uint8Array))p+m.length>c.length?l.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(l.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Ba(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Se(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return zt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ja(e).length;default:if(c)return r?-1:zt(e).length;o=(""+o).toLowerCase(),c=!0}}l.byteLength=Ba;function Zd(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return cl(this,o,t);case"utf8":case"utf-8":return Ga(this,o,t);case"ascii":return il(this,o,t);case"latin1":case"binary":return sl(this,o,t);case"base64":return rl(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pl(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}l.prototype._isBuffer=!0;function ro(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)ro(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)ro(this,t,t+3),ro(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)ro(this,t,t+7),ro(this,t+1,t+6),ro(this,t+2,t+5),ro(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ga(this,0,o):Zd.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=Ao.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Da&&(l.prototype[Da]=l.prototype.inspect);l.prototype.compare=function(o,t,r,c,p){if(Se(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-t,_=Math.min(m,d),T=this.slice(c,p),f=o.slice(t,r),b=0;b<_;++b)if(T[b]!==f[b]){m=T[b],d=f[b];break}return m<d?-1:d<m?1:0};function Wa(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Yt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,r)),l.isBuffer(o))return o.length===0?-1:Ma(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ma(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function Ma(e,o,t,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(k,L){return p===1?k[L]:k.readUInt16BE(L*p)}var T;if(c){var f=-1;for(T=t;T<m;T++)if(_(e,T)===_(o,f===-1?0:T-f)){if(f===-1&&(f=T),T-f+1===d)return f*p}else f!==-1&&(T-=T-f),f=-1}else for(t+d>m&&(t=m-d),T=t;T>=0;T--){for(var b=!0,E=0;E<d;E++)if(_(e,T+E)!==_(o,E)){b=!1;break}if(b)return T}return-1}l.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};l.prototype.indexOf=function(o,t,r){return Wa(this,o,t,r,!0)};l.prototype.lastIndexOf=function(o,t,r){return Wa(this,o,t,r,!1)};function Qd(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Yt(d))return m;e[t+m]=d}return m}function el(e,o,t,r){return Un(zt(o,e.length-t),e,t,r)}function ol(e,o,t,r){return Un(ll(o),e,t,r)}function nl(e,o,t,r){return Un(ja(o),e,t,r)}function tl(e,o,t,r){return Un(_l(o,e.length-t),e,t,r)}l.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Qd(this,o,t,r);case"utf8":case"utf-8":return el(this,o,t,r);case"ascii":case"latin1":case"binary":return ol(this,o,t,r);case"base64":return nl(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tl(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function rl(e,o,t){return o===0&&t===e.length?Vt.fromByteArray(e):Vt.fromByteArray(e.slice(o,t))}function Ga(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var _,T,f,b;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(b=(p&31)<<6|_&63,b>127&&(m=b));break;case 3:_=e[c+1],T=e[c+2],(_&192)===128&&(T&192)===128&&(b=(p&15)<<12|(_&63)<<6|T&63,b>2047&&(b<55296||b>57343)&&(m=b));break;case 4:_=e[c+1],T=e[c+2],f=e[c+3],(_&192)===128&&(T&192)===128&&(f&192)===128&&(b=(p&15)<<18|(_&63)<<12|(T&63)<<6|f&63,b>65535&&b<1114112&&(m=b))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return al(r)}var Oa=4096;function al(e){var o=e.length;if(o<=Oa)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=Oa));return t}function il(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function sl(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function cl(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=ul[e[p]];return c}function pl(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}l.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,l.prototype),c};function V(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||V(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||V(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||V(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||V(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||V(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};l.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||V(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||V(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||V(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||V(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||V(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||V(o,4,this.length),Io.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||V(o,4,this.length),Io.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||V(o,8,this.length),Io.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||V(o,8,this.length),Io.read(this,o,!1,52,8)};function ne(e,o,t,r,c,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;ne(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;ne(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);ne(this,o,t,r,p-1,-p)}var m=0,d=1,_=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+r};l.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);ne(this,o,t,r,p-1,-p)}var m=r-1,d=1,_=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+r};l.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||ne(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Ha(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function $a(e,o,t,r,c){return o=+o,t=t>>>0,c||Ha(e,o,t,4,34028234663852886e22,-34028234663852886e22),Io.write(e,o,t,r,23,4),t+4}l.prototype.writeFloatLE=function(o,t,r){return $a(this,o,t,!0,r)};l.prototype.writeFloatBE=function(o,t,r){return $a(this,o,t,!1,r)};function Va(e,o,t,r,c){return o=+o,t=t>>>0,c||Ha(e,o,t,8,17976931348623157e292,-17976931348623157e292),Io.write(e,o,t,r,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,r){return Va(this,o,t,!0,r)};l.prototype.writeDoubleBE=function(o,t,r){return Va(this,o,t,!1,r)};l.prototype.copy=function(o,t,r,c){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};l.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=l.isBuffer(o)?o:l.from(o,c),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%_]}return this};var ml=/[^+/0-9A-Za-z-_]/g;function dl(e){if(e=e.split("=")[0],e=e.trim().replace(ml,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function zt(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function ll(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function _l(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function ja(e){return Vt.toByteArray(dl(e))}function Un(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function Se(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Yt(e){return e!==e}var ul=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var Ja=S((xx,Ya)=>{n();var B=Ya.exports={},be,we;function Jt(){throw new Error("setTimeout has not been defined")}function Zt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?be=setTimeout:be=Jt}catch(e){be=Jt}try{typeof clearTimeout=="function"?we=clearTimeout:we=Zt}catch(e){we=Zt}})();function za(e){if(be===setTimeout)return setTimeout(e,0);if((be===Jt||!be)&&setTimeout)return be=setTimeout,setTimeout(e,0);try{return be(e,0)}catch(o){try{return be.call(null,e,0)}catch(t){return be.call(this,e,0)}}}function gl(e){if(we===clearTimeout)return clearTimeout(e);if((we===Zt||!we)&&clearTimeout)return we=clearTimeout,clearTimeout(e);try{return we(e)}catch(o){try{return we.call(null,e)}catch(t){return we.call(this,e)}}}var De=[],ko=!1,ao,Bn=-1;function fl(){!ko||!ao||(ko=!1,ao.length?De=ao.concat(De):Bn=-1,De.length&&Ka())}function Ka(){if(!ko){var e=za(fl);ko=!0;for(var o=De.length;o;){for(ao=De,De=[];++Bn<o;)ao&&ao[Bn].run();Bn=-1,o=De.length}ao=null,ko=!1,gl(e)}}B.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];De.push(new Xa(e,o)),De.length===1&&!ko&&za(Ka)};function Xa(e,o){this.fun=e,this.array=o}Xa.prototype.run=function(){this.fun.apply(null,this.array)};B.title="browser";B.browser=!0;B.env={};B.argv=[];B.version="";B.versions={};function Me(){}B.on=Me;B.addListener=Me;B.once=Me;B.off=Me;B.removeListener=Me;B.removeAllListeners=Me;B.emit=Me;B.prependListener=Me;B.prependOnceListener=Me;B.listeners=function(e){return[]};B.binding=function(e){throw new Error("process.binding is not supported")};B.cwd=function(){return"/"};B.chdir=function(e){throw new Error("process.chdir is not supported")};B.umask=function(){return 0}});var a,s,Tl,i,n=h(()=>{a=x(qa()),s=x(Ja()),Tl=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=Tl});var Za=h(()=>{"use strict";n()});var Qa,qe,ei,Qt,oi,ni,Wn,ve=h(()=>{"use strict";n();Qa="error when signing",qe="Transaction canceled",ei="error signing transaction",Qt="provider not initialized",oi="You need a signer/valid signer to send a transaction,use either WalletProvider, LedgerProvider or WalletConnect",ni="Undefined transaction status",Wn="You cannot sign transactions from a different account"});var ti=h(()=>{"use strict";n()});var er,ri=h(()=>{"use strict";n();er=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(er||{})});var ai=h(()=>{"use strict";n()});var or=h(()=>{"use strict";n()});var ii=h(()=>{"use strict";n()});var nr,tr=h(()=>{"use strict";n();nr=(c=>(c.signature="signature",c.sessionId="sessionId",c.status="status",c.address="address",c))(nr||{})});var si=h(()=>{"use strict";n()});var ci=h(()=>{"use strict";n()});var Q,Lo,ze=h(()=>{"use strict";n();Q=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Lo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var pi,Cx,mi,Nx,R=h(()=>{"use strict";n();ze();pi=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(pi||{}),Cx=u(u({},Lo.WindowProviderRequestEnums),pi),mi=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(mi||{}),Nx=u(u({},Lo.WindowProviderResponseEnums),mi)});var di=h(()=>{"use strict";n()});var li=h(()=>{"use strict";n()});var te=h(()=>{"use strict";n()});var _i=h(()=>{"use strict";n()});var ui=h(()=>{"use strict";n()});var gi=h(()=>{"use strict";n()});var W=h(()=>{"use strict";n();tr();si();ci();R();di();li();te();_i();ui();gi()});var io,fi,Xx,Ti,Yx,hi,Jx,Zx,xi,Eo=h(()=>{"use strict";n();W();io={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:fi,egldLabel:Xx}=io["devnet"],{chainId:Ti,egldLabel:Yx}=io["testnet"],{chainId:hi,egldLabel:Jx}=io["mainnet"],Zx={["devnet"]:fi,["testnet"]:Ti,["mainnet"]:hi},xi={[fi]:"devnet",[Ti]:"testnet",[hi]:"mainnet"}});var yi,Gn=h(()=>{"use strict";n();yi="cancel-transaction-toast"});var Ie,Si=h(()=>{"use strict";n();Ie=require("@multiversx/sdk-web-wallet-provider")});var so,sn=h(()=>{"use strict";n();so=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var bi,wi,rr,ry,ay,ar=h(()=>{"use strict";n();sn();rr=String((wi=(bi=so.safeWindow)==null?void 0:bi.navigator)==null?void 0:wi.userAgent),ry=/^((?!chrome|android).)*safari/i.test(rr),ay=/firefox/i.test(rr)&&/windows/i.test(rr)});var Hn,$n,vi,Ii,Ae,Vn,jn,Ai,Po,A=h(()=>{"use strict";n();Za();ve();ti();ri();ai();or();ii();Eo();Gn();Si();ar();Hn=5e4,$n=1e9,vi=1,Ii="/dapp/init",Ae="signSession",Vn="sdk-dapp-version",jn="logout",Ai="login",Po="0"});var cn,qn=h(()=>{"use strict";n();cn=()=>Date.now()/1e3});var ki=h(()=>{"use strict";n()});var Li=h(()=>{"use strict";n()});var ir=h(()=>{"use strict";n();qn();ki();Li()});var sr={};xe(sr,{clear:()=>Sl,getItem:()=>xl,localStorageKeys:()=>Ke,removeItem:()=>yl,setItem:()=>hl});var Ke,zn,hl,xl,yl,Sl,Co=h(()=>{"use strict";n();ir();Ke={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},zn=typeof localStorage!="undefined",hl=({key:e,data:o,expires:t})=>{!zn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},xl=e=>{if(!zn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:cn()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},yl=e=>{!zn||localStorage.removeItem(String(e))},Sl=()=>{!zn||localStorage.clear()}});var cr={};xe(cr,{clear:()=>Ni,getItem:()=>Pi,removeItem:()=>Ci,setItem:()=>Ei,storage:()=>bl});var Ei,Pi,Ci,Ni,bl,Ri=h(()=>{"use strict";n();Ei=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Pi=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ci=e=>sessionStorage.removeItem(String(e)),Ni=()=>sessionStorage.clear(),bl={setItem:Ei,getItem:Pi,removeItem:Ci,clear:Ni}});var co,No=h(()=>{"use strict";n();Co();Ri();co={session:cr,local:sr}});var pr,D,re,M=h(()=>{"use strict";n();pr=require("@reduxjs/toolkit");A();D=(0,pr.createAction)(jn),re=(0,pr.createAction)(Ai,e=>({payload:e}))});var dr,Di,Mi,Kn,mr,Oi,Xn,wl,lr,Oy,vl,Il,Fy,Uy,By,Al,kl,Yn,Jn=h(()=>{"use strict";n();dr=require("@multiversx/sdk-core"),Di=require("@reduxjs/toolkit"),Mi=require("redux-persist");A();No();Co();M();Kn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Po},mr={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Kn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Oi=(0,Di.createSlice)({name:"accountInfoSlice",initialState:mr,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new dr.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Kn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(D,()=>(co.local.removeItem(Ke.loginExpiresAt),mr)),e.addCase(re,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new dr.Address(r).hex()}),e.addCase(Mi.REHYDRATE,(o,t)=>{var T;if(!((T=t.payload)!=null&&T.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:mr.accounts,o.publicKey=d})}}),{setAccount:Xn,setAddress:wl,setAccountNonce:lr,setAccountShard:Oy,setLedgerAccount:vl,updateLedgerAccount:Il,setWalletConnectAccount:Fy,setIsAccountLoading:Uy,setAccountLoadingError:By,setWebsocketEvent:Al,setWebsocketBatchEvent:kl}=Oi.actions,Yn=Oi.reducer});function pn(){return new Date().setHours(new Date().getHours()+24)}function mn(e){co.local.setItem({key:Ke.loginExpiresAt,data:e,expires:e})}var _r=h(()=>{"use strict";n();No();Co()});var Ui,Fi,Bi,Xy,Ll,El,ur,Yy,Pl,Wi,Jy,Zy,Qy,Zn,Qn=h(()=>{"use strict";n();Ui=require("@reduxjs/toolkit");_r();R();M();Fi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Bi=(0,Ui.createSlice)({name:"loginInfoSlice",initialState:Fi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(D,()=>Fi),e.addCase(re,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,mn(pn())})}}),{setLoginMethod:Xy,setWalletConnectLogin:Ll,setLedgerLogin:El,setTokenLogin:ur,setTokenLoginSignature:Yy,setWalletLogin:Pl,invalidateLoginSession:Wi,setLogoutRoute:Jy,setIsWalletConnectV2Initialized:Zy,setWebviewLogin:Qy}=Bi.actions,Zn=Bi.reducer});var Hi,Gi,$i,tS,Cl,rS,Nl,et,ot=h(()=>{"use strict";n();Hi=require("@reduxjs/toolkit");M();Gi={},$i=(0,Hi.createSlice)({name:"modalsSlice",initialState:Gi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(D,()=>Gi)}}),{setTxSubmittedModal:tS,setNotificationModal:Cl,clearTxSubmittedModal:rS,clearNotificationModal:Nl}=$i.actions,et=$i.reducer});var Oe,Ro=h(()=>{"use strict";n();Oe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var N,X=h(()=>{"use strict";n();Ro();N=()=>{if(!Oe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var Vi=h(()=>{"use strict";n();X()});var po,ji=h(()=>{"use strict";n();J();po=()=>{let{pathname:e,search:o,hash:t}=N();return`${e!=null?e:""}${o!=null?o:""}${t!=null?t:""}`}});var qi=h(()=>{"use strict";n();sn()});var J=h(()=>{"use strict";n();Vi();ji();X();qi()});var dn=h(()=>{"use strict";n();J()});var Ki=h(()=>{"use strict";n();dn()});function Xi(e){return e[Math.floor(Math.random()*e.length)]}var Yi=h(()=>{"use strict";n()});var gr=h(()=>{"use strict";n();or()});var Fe=h(()=>{"use strict";n();Ki();Yi();gr()});var Ji,Zi,Qi,fr,Dl,es,FS,US,Ml,nt,tt=h(()=>{"use strict";n();Ji=require("@reduxjs/toolkit"),Zi=x(require("lodash.omit")),Qi=require("redux-persist");Gn();M();Fe();fr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Dl={network:fr},es=(0,Ji.createSlice)({name:"appConfig",initialState:Dl,reducers:{initializeNetworkConfig:(e,o)=>{let t=Xi(o.payload.walletConnectV2RelayAddresses),r=(0,Zi.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(D,o=>{o.network.customWalletAddress=void 0}),e.addCase(Qi.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:FS,updateNetworkConfig:US,setCustomWalletAddress:Ml}=es.actions,nt=es.reducer});var os,Tr,ns,VS,jS,qS,rt,at=h(()=>{"use strict";n();os=require("@reduxjs/toolkit");W();M();Tr={isSigning:!1,signedSessions:{}},ns=(0,os.createSlice)({name:"signedMessageInfoSliceState",initialState:Tr,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Tr},extraReducers:e=>{e.addCase(D,()=>Tr)}}),{setSignSession:VS,clearSignedMessageInfo:jS,setSignSessionState:qS}=ns.actions,rt=ns.reducer});var rs,as,ts,is,hr,Ol,QS,Fl,it,st=h(()=>{"use strict";n();rs=require("@reduxjs/toolkit"),as=require("redux-persist");W();qn();M();ts={customToasts:[],transactionToasts:[]},is=(0,rs.createSlice)({name:"toastsSlice",initialState:ts,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=w(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:cn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(D,()=>ts),e.addCase(as.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:hr,removeCustomToast:Ol,addTransactionToast:QS,removeTransactionToast:Fl}=is.actions,it=is.reducer});var ss,yr,Sr,br,Ul,xr,cs,tb,Bl,ln,ct,pt=h(()=>{"use strict";n();ss=require("@reduxjs/toolkit");M();yr="Transaction failed",Sr="Transaction successful",br="Processing transaction",Ul="Transaction submitted",xr={},cs=(0,ss.createSlice)({name:"transactionsInfo",initialState:xr,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||yr,successMessage:(r==null?void 0:r.successMessage)||Sr,processingMessage:(r==null?void 0:r.processingMessage)||br,submittedMessage:(r==null?void 0:r.submittedMessage)||Ul,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>xr},extraReducers:e=>{e.addCase(D,()=>xr)}}),{clearTransactionsInfo:tb,setTransactionsDisplayInfo:Bl,clearTransactionsInfoForSessionId:ln}=cs.actions,ct=cs.reducer});function Mo(e){return e!=null&&(Xl(e)||e_(e))}function Oo(e){return e!=null&&(Yl(e)||o_(e))}function Fo(e){return e!=null&&(Jl(e)||n_(e))}function ps(e){return e!=null&&(Zl(e)||t_(e))}function wr(e){return e!=null&&Ql(e)}function Xl(e){return e!=null&&Wl.includes(e)}function Yl(e){return e!=null&&Gl.includes(e)}function Jl(e){return e!=null&&Hl.includes(e)}function Zl(e){return e!=null&&$l.includes(e)}function Ql(e){return e!=null&&Vl.includes(e)}function e_(e){return e!=null&&jl.includes(e)}function o_(e){return e!=null&&ql.includes(e)}function n_(e){return e!=null&&zl.includes(e)}function t_(e){return e!=null&&Kl.includes(e)}var Wl,Gl,Hl,$l,Vl,jl,ql,zl,Kl,Uo=h(()=>{"use strict";n();R();Wl=["sent"],Gl=["success"],Hl=["fail","cancelled","timedOut"],$l=["invalid"],Vl=["timedOut"],jl=["pending"],ql=["success"],zl=["fail","invalid"],Kl=["not executed"]});var ms,ds,_n,r_,ls,_s,us,a_,mo,i_,s_,lb,c_,Ye,Je,_b,mt,dt=h(()=>{"use strict";n();ms=require("@reduxjs/toolkit"),ds=require("redux-persist");R();Uo();M();_n={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},r_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ls=(0,ms.createSlice)({name:"transactionsSlice",initialState:_n,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,T;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},r_),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((T=e==null?void 0:e.transactionsToSign)==null?void 0:T.sessionId)===t&&(e.transactionsToSign=_n.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var T,f,b,E,k,L,Y,O;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(f=(T=e.signedTransactions)==null?void 0:T[t])==null?void 0:f.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(F=>F.hash===p?w(u(u({},m!=null?m:{}),F),{status:r,errorMessage:c,inTransit:d}):F);let j=(E=(b=e.signedTransactions[t])==null?void 0:b.transactions)==null?void 0:E.every(F=>Oo(F.status)),ee=(L=(k=e.signedTransactions[t])==null?void 0:k.transactions)==null?void 0:L.some(F=>Fo(F.status)),ge=(O=(Y=e.signedTransactions[t])==null?void 0:Y.transactions)==null?void 0:O.every(F=>ps(F.status));j&&(e.signedTransactions[t].status="success"),ee&&(e.signedTransactions[t].status="fail"),ge&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=_n.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=_n.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(D,()=>_n),e.addCase(ds.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((d,[_,T])=>{let f=new Date(_),b=new Date;return b.setHours(b.getHours()+5),b-f>0||(d[_]=T),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:_s,updateSignedTransactions:us,setTransactionsToSign:a_,clearAllTransactionsToSign:mo,clearAllSignedTransactions:i_,clearSignedTransaction:s_,clearTransactionToSign:lb,setSignTransactionsError:c_,setSignTransactionsCancelMessage:Ye,moveTransactionsToSignedState:Je,updateSignedTransactionsCustomTransactionInformation:_b}=ls.actions,mt=ls.reducer});var gs,vr,fs,Tb,hb,p_,xb,lt,_t=h(()=>{"use strict";n();gs=require("@reduxjs/toolkit");M();vr={},fs=(0,gs.createSlice)({name:"batchTransactionsSlice",initialState:vr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>vr},extraReducers:e=>{e.addCase(D,()=>vr)}}),{setBatchTransactions:Tb,updateBatchTransactions:hb,clearBatchTransactions:p_,clearAllBatchTransactions:xb}=fs.actions,lt=fs.reducer});var hs,Ts,xs,wb,ys,Ir=h(()=>{"use strict";n();hs=require("@reduxjs/toolkit");M();Ts={},xs=(0,hs.createSlice)({name:"dappConfigSlice",initialState:Ts,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(D,()=>Ts)}}),{setDappConfig:wb}=xs.actions,ys=xs.reducer});var P=h(()=>{"use strict";n();Jn();Qn();ot();tt();at();st();pt();dt();_t();Ir()});var Ar=h(()=>{"use strict";n()});var ws,__,u_,lo,ft=h(()=>{"use strict";n();ws=require("@reduxjs/toolkit");Ar();Jn();_t();Ir();Qn();ot();tt();at();st();pt();dt();__={["account"]:Yn,["dappConfig"]:ys,["loginInfo"]:Zn,["modals"]:et,["networkConfig"]:nt,["signedMessageInfo"]:rt,["toasts"]:it,["transactionsInfo"]:ct,["transactions"]:mt,["batchTransactions"]:lt},u_=(e={})=>(0,ws.combineReducers)(u(u({},__),e)),lo=u_});var ks={};xe(ks,{default:()=>P_,sessionStorageReducers:()=>kr});function Ue(e,o=[]){return{key:e,version:1,storage:Is.default,blacklist:o}}var ae,vs,Is,g_,un,f_,T_,h_,x_,y_,S_,b_,w_,v_,I_,As,A_,kr,k_,L_,E_,P_,Ls=h(()=>{"use strict";n();ae=require("redux-persist"),vs=x(require("redux-persist/lib/storage")),Is=x(require("redux-persist/lib/storage/session"));ft();P();Jn();_t();Qn();ot();tt();at();st();pt();dt();Ar();g_={persistReducersStorageType:"localStorage"},un={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},f_=Ue(un["account"]),T_=Ue(un["loginInfo"]),h_=Ue(un["modals"]),x_=Ue(un["networkConfig"]),y_={2:e=>w(u({},e),{networkConfig:fr})};S_=Ue("sdk-dapp-transactionsInfo"),b_=Ue("sdk-dapp-transactions",["transactionsToSign"]),w_=Ue("sdk-dapp-batchTransactions",["batchTransactions"]),v_=Ue("sdk-dapp-toasts"),I_=Ue("sdk-dapp-signedMessageInfo"),As={key:"sdk-dapp-store",version:2,storage:vs.default,whitelist:Object.keys(un),migrate:(0,ae.createMigrate)(y_,{debug:!1})},A_=w(u({},As),{whitelist:[]}),kr={["toasts"]:(0,ae.persistReducer)(v_,it),["transactions"]:(0,ae.persistReducer)(b_,mt),["transactionsInfo"]:(0,ae.persistReducer)(S_,ct),["batchTransactions"]:(0,ae.persistReducer)(w_,lt),["signedMessageInfo"]:(0,ae.persistReducer)(I_,rt)},k_=w(u({},kr),{["account"]:(0,ae.persistReducer)(f_,Yn),["loginInfo"]:(0,ae.persistReducer)(T_,Zn),["modals"]:(0,ae.persistReducer)(h_,et),["networkConfig"]:(0,ae.persistReducer)(x_,nt)}),L_=g_.persistReducersStorageType==="localStorage",E_=L_?(0,ae.persistReducer)(As,lo(kr)):(0,ae.persistReducer)(A_,lo(k_)),P_=E_});var Es={};xe(Es,{default:()=>C_});var C_,Ps=h(()=>{"use strict";n();ft();C_=lo()});var Cs={};xe(Cs,{default:()=>R_});var _e,N_,R_,Ns=h(()=>{"use strict";n();_e=require("redux-persist"),N_=[_e.FLUSH,_e.REHYDRATE,_e.PAUSE,_e.PERSIST,_e.PURGE,_e.REGISTER],R_=N_});var Ms={};xe(Ms,{default:()=>Ds});function Ds(e){return(0,Rs.persistStore)(e)}var Rs,Os=h(()=>{"use strict";n();Rs=require("redux-persist")});var $c=S((l2,Hc)=>{n();var ug=typeof i=="object"&&i&&i.Object===Object&&i;Hc.exports=ug});var bn=S((_2,Vc)=>{n();var gg=$c(),fg=typeof self=="object"&&self&&self.Object===Object&&self,Tg=gg||fg||Function("return this")();Vc.exports=Tg});var Yr=S((u2,jc)=>{n();var hg=bn(),xg=hg.Symbol;jc.exports=xg});var Xc=S((g2,Kc)=>{n();var qc=Yr(),zc=Object.prototype,yg=zc.hasOwnProperty,Sg=zc.toString,wn=qc?qc.toStringTag:void 0;function bg(e){var o=yg.call(e,wn),t=e[wn];try{e[wn]=void 0;var r=!0}catch(p){}var c=Sg.call(e);return r&&(o?e[wn]=t:delete e[wn]),c}Kc.exports=bg});var Jc=S((f2,Yc)=>{n();var wg=Object.prototype,vg=wg.toString;function Ig(e){return vg.call(e)}Yc.exports=Ig});var Jr=S((T2,ep)=>{n();var Zc=Yr(),Ag=Xc(),kg=Jc(),Lg="[object Null]",Eg="[object Undefined]",Qc=Zc?Zc.toStringTag:void 0;function Pg(e){return e==null?e===void 0?Eg:Lg:Qc&&Qc in Object(e)?Ag(e):kg(e)}ep.exports=Pg});var np=S((h2,op)=>{n();var Cg=Array.isArray;op.exports=Cg});var rp=S((x2,tp)=>{n();function Ng(e){return e!=null&&typeof e=="object"}tp.exports=Ng});var ip=S((y2,ap)=>{n();var Rg=Jr(),Dg=np(),Mg=rp(),Og="[object String]";function Fg(e){return typeof e=="string"||!Dg(e)&&Mg(e)&&Rg(e)==Og}ap.exports=Fg});var Mt=S((hM,lp)=>{n();function Yg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}lp.exports=Yg});var up=S((xM,_p)=>{n();var Jg=Jr(),Zg=Mt(),Qg="[object AsyncFunction]",ef="[object Function]",of="[object GeneratorFunction]",nf="[object Proxy]";function tf(e){if(!Zg(e))return!1;var o=Jg(e);return o==ef||o==of||o==Qg||o==nf}_p.exports=tf});var fp=S((yM,gp)=>{n();var rf=bn(),af=rf["__core-js_shared__"];gp.exports=af});var xp=S((SM,hp)=>{n();var na=fp(),Tp=function(){var e=/[^.]+$/.exec(na&&na.keys&&na.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function sf(e){return!!Tp&&Tp in e}hp.exports=sf});var Sp=S((bM,yp)=>{n();var cf=Function.prototype,pf=cf.toString;function mf(e){if(e!=null){try{return pf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}yp.exports=mf});var wp=S((wM,bp)=>{n();var df=up(),lf=xp(),_f=Mt(),uf=Sp(),gf=/[\\^$.*+?()[\]{}|]/g,ff=/^\[object .+?Constructor\]$/,Tf=Function.prototype,hf=Object.prototype,xf=Tf.toString,yf=hf.hasOwnProperty,Sf=RegExp("^"+xf.call(yf).replace(gf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function bf(e){if(!_f(e)||lf(e))return!1;var o=df(e)?Sf:ff;return o.test(uf(e))}bp.exports=bf});var Ip=S((vM,vp)=>{n();function wf(e,o){return e==null?void 0:e[o]}vp.exports=wf});var Ot=S((IM,Ap)=>{n();var vf=wp(),If=Ip();function Af(e,o){var t=If(e,o);return vf(t)?t:void 0}Ap.exports=Af});var In=S((AM,kp)=>{n();var kf=Ot(),Lf=kf(Object,"create");kp.exports=Lf});var Pp=S((kM,Ep)=>{n();var Lp=In();function Ef(){this.__data__=Lp?Lp(null):{},this.size=0}Ep.exports=Ef});var Np=S((LM,Cp)=>{n();function Pf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Cp.exports=Pf});var Dp=S((EM,Rp)=>{n();var Cf=In(),Nf="__lodash_hash_undefined__",Rf=Object.prototype,Df=Rf.hasOwnProperty;function Mf(e){var o=this.__data__;if(Cf){var t=o[e];return t===Nf?void 0:t}return Df.call(o,e)?o[e]:void 0}Rp.exports=Mf});var Op=S((PM,Mp)=>{n();var Of=In(),Ff=Object.prototype,Uf=Ff.hasOwnProperty;function Bf(e){var o=this.__data__;return Of?o[e]!==void 0:Uf.call(o,e)}Mp.exports=Bf});var Up=S((CM,Fp)=>{n();var Wf=In(),Gf="__lodash_hash_undefined__";function Hf(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Wf&&o===void 0?Gf:o,this}Fp.exports=Hf});var Wp=S((NM,Bp)=>{n();var $f=Pp(),Vf=Np(),jf=Dp(),qf=Op(),zf=Up();function Ko(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Ko.prototype.clear=$f;Ko.prototype.delete=Vf;Ko.prototype.get=jf;Ko.prototype.has=qf;Ko.prototype.set=zf;Bp.exports=Ko});var Hp=S((RM,Gp)=>{n();function Kf(){this.__data__=[],this.size=0}Gp.exports=Kf});var Vp=S((DM,$p)=>{n();function Xf(e,o){return e===o||e!==e&&o!==o}$p.exports=Xf});var An=S((MM,jp)=>{n();var Yf=Vp();function Jf(e,o){for(var t=e.length;t--;)if(Yf(e[t][0],o))return t;return-1}jp.exports=Jf});var zp=S((OM,qp)=>{n();var Zf=An(),Qf=Array.prototype,eT=Qf.splice;function oT(e){var o=this.__data__,t=Zf(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():eT.call(o,t,1),--this.size,!0}qp.exports=oT});var Xp=S((FM,Kp)=>{n();var nT=An();function tT(e){var o=this.__data__,t=nT(o,e);return t<0?void 0:o[t][1]}Kp.exports=tT});var Jp=S((UM,Yp)=>{n();var rT=An();function aT(e){return rT(this.__data__,e)>-1}Yp.exports=aT});var Qp=S((BM,Zp)=>{n();var iT=An();function sT(e,o){var t=this.__data__,r=iT(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}Zp.exports=sT});var om=S((WM,em)=>{n();var cT=Hp(),pT=zp(),mT=Xp(),dT=Jp(),lT=Qp();function Xo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Xo.prototype.clear=cT;Xo.prototype.delete=pT;Xo.prototype.get=mT;Xo.prototype.has=dT;Xo.prototype.set=lT;em.exports=Xo});var tm=S((GM,nm)=>{n();var _T=Ot(),uT=bn(),gT=_T(uT,"Map");nm.exports=gT});var im=S((HM,am)=>{n();var rm=Wp(),fT=om(),TT=tm();function hT(){this.size=0,this.__data__={hash:new rm,map:new(TT||fT),string:new rm}}am.exports=hT});var cm=S(($M,sm)=>{n();function xT(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}sm.exports=xT});var kn=S((VM,pm)=>{n();var yT=cm();function ST(e,o){var t=e.__data__;return yT(o)?t[typeof o=="string"?"string":"hash"]:t.map}pm.exports=ST});var dm=S((jM,mm)=>{n();var bT=kn();function wT(e){var o=bT(this,e).delete(e);return this.size-=o?1:0,o}mm.exports=wT});var _m=S((qM,lm)=>{n();var vT=kn();function IT(e){return vT(this,e).get(e)}lm.exports=IT});var gm=S((zM,um)=>{n();var AT=kn();function kT(e){return AT(this,e).has(e)}um.exports=kT});var Tm=S((KM,fm)=>{n();var LT=kn();function ET(e,o){var t=LT(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}fm.exports=ET});var xm=S((XM,hm)=>{n();var PT=im(),CT=dm(),NT=_m(),RT=gm(),DT=Tm();function Yo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Yo.prototype.clear=PT;Yo.prototype.delete=CT;Yo.prototype.get=NT;Yo.prototype.has=RT;Yo.prototype.set=DT;hm.exports=Yo});var Sm=S((YM,ym)=>{n();var MT="__lodash_hash_undefined__";function OT(e){return this.__data__.set(e,MT),this}ym.exports=OT});var wm=S((JM,bm)=>{n();function FT(e){return this.__data__.has(e)}bm.exports=FT});var Im=S((ZM,vm)=>{n();var UT=xm(),BT=Sm(),WT=wm();function Ft(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new UT;++o<t;)this.add(e[o])}Ft.prototype.add=Ft.prototype.push=BT;Ft.prototype.has=WT;vm.exports=Ft});var km=S((QM,Am)=>{n();function GT(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Am.exports=GT});var Em=S((eO,Lm)=>{n();function HT(e){return e!==e}Lm.exports=HT});var Cm=S((oO,Pm)=>{n();function $T(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Pm.exports=$T});var Rm=S((nO,Nm)=>{n();var VT=km(),jT=Em(),qT=Cm();function zT(e,o,t){return o===o?qT(e,o,t):VT(e,jT,t)}Nm.exports=zT});var Mm=S((tO,Dm)=>{n();var KT=Rm();function XT(e,o){var t=e==null?0:e.length;return!!t&&KT(e,o,0)>-1}Dm.exports=XT});var Fm=S((rO,Om)=>{n();function YT(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}Om.exports=YT});var Bm=S((aO,Um)=>{n();function JT(e,o){return e.has(o)}Um.exports=JT});var Gm=S((iO,Wm)=>{n();var ZT=Ot(),QT=bn(),eh=ZT(QT,"Set");Wm.exports=eh});var $m=S((sO,Hm)=>{n();function oh(){}Hm.exports=oh});var ta=S((cO,Vm)=>{n();function nh(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}Vm.exports=nh});var qm=S((pO,jm)=>{n();var ra=Gm(),th=$m(),rh=ta(),ah=1/0,ih=ra&&1/rh(new ra([,-0]))[1]==ah?function(e){return new ra(e)}:th;jm.exports=ih});var Km=S((mO,zm)=>{n();var sh=Im(),ch=Mm(),ph=Fm(),mh=Bm(),dh=qm(),lh=ta(),_h=200;function uh(e,o,t){var r=-1,c=ch,p=e.length,m=!0,d=[],_=d;if(t)m=!1,c=ph;else if(p>=_h){var T=o?null:dh(e);if(T)return lh(T);m=!1,c=mh,_=new sh}else _=o?[]:d;e:for(;++r<p;){var f=e[r],b=o?o(f):f;if(f=t||f!==0?f:0,m&&b===b){for(var E=_.length;E--;)if(_[E]===b)continue e;o&&_.push(b),d.push(f)}else c(_,b,t)||(_!==d&&_.push(b),d.push(f))}return d}zm.exports=uh});var Ym=S((dO,Xm)=>{n();var gh=Km();function fh(e){return e&&e.length?gh(e):[]}Xm.exports=fh});var ua={};xe(ua,{css:()=>dd,default:()=>Uh});var dd,Uh,ga=h(()=>{"use strict";n();dd=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dd));Uh={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Ge={};xe(Ge,{css:()=>ud,default:()=>Gh});var ud,Gh,He=h(()=>{"use strict";n();ud=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ud));Gh={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Nn={};xe(Nn,{css:()=>kd,default:()=>cx});var kd,cx,Rn=h(()=>{"use strict";n();kd=`.dapp-core-component__transactionStatusToastStyles__transactions-status-toast {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kd));cx={"transactions-status-toast":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast",transactionsStatusToast:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast","transactions-status-toast-content":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content",transactionsStatusToastContent:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content","transactions-status-toast-icon":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",transactionsStatusToastIcon:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",svg:"dapp-core-component__transactionStatusToastStyles__svg",toasts:"dapp-core-component__transactionStatusToastStyles__toasts",toastWrapper:"dapp-core-component__transactionStatusToastStyles__toastWrapper"}});var ux={};xe(ux,{ConfirmationScreen:()=>_x});module.exports=de(ux);n();var Ia=x(require("react"));n();n();n();var Hs=require("react"),Bo=require("react-redux");n();var Lr=require("@reduxjs/toolkit"),Ws=require("react-redux/lib/utils/Subscription");P();n();var Ss=x(require("lodash.throttle"));A();P();_r();No();Co();var m_=[jn],ut=!1,d_=(0,Ss.default)(()=>{mn(pn())},5e3),bs=e=>o=>t=>{if(m_.includes(t.type))return o(t);let r=e.getState(),c=co.local.getItem(Ke.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return mn(pn());let m=Date.now();return c-m<0&&!ut?setTimeout(()=>{ut=!0,e.dispatch(Wi())},1e3):(ut&&(ut=!1),d_()),o(t)};n();n();function gt(){return typeof sessionStorage!="undefined"}var Fs=gt()?(Ls(),de(ks)).default:(Ps(),de(Es)).default,Us=gt()?(Ns(),de(Cs)).default:[],Bs=gt()?(Os(),de(Ms)).default:e=>e;ft();var v=(0,Lr.configureStore)({reducer:Fs,middleware:e=>e({serializableCheck:{ignoredActions:[...Us,lr.type,Xn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(bs)}),Gs=(0,Ws.createSubscription)(v),S0=Bs(v),b0=(0,Lr.configureStore)({reducer:lo});var D_={store:v,subscription:Gs},Er=(0,Hs.createContext)(D_),A0=(0,Bo.createStoreHook)(Er),G=(0,Bo.createDispatchHook)(Er),I=(0,Bo.createSelectorHook)(Er);n();n();P();n();var $s=x(require("lodash.isequal")),Tt=require("reselect"),y=(0,Tt.createSelectorCreator)(Tt.defaultMemoize,$s.default);var ke=e=>e.account,Ze=y(ke,e=>e.address),_o=y(ke,Ze,(e,o)=>o in e.accounts?e.accounts[o]:Kn),M_=y(ke,_o,(e,o)=>{let c=e,{accounts:t}=c,r=je(c,["accounts"]);return w(u({},r),{address:o.address,account:o})}),C0=y(_o,e=>e.balance),Vs=y(_o,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),N0=y(ke,e=>e.shard),O_=y(ke,e=>e.ledgerAccount),R0=y(ke,e=>e.walletConnectAccount),D0=y(ke,e=>e.isAccountLoading),M0=y(ke,e=>e.accountLoadingError),F_=y(ke,e=>e.websocketEvent),U_=y(ke,e=>e.websocketBatchEvent);n();var gn=e=>e.dappConfig,U0=y(gn,e=>e.shouldUseWebViewProvider);n();var pe=e=>e.loginInfo,B_=y(pe,e=>e.loginMethod),ht=y(pe,Ze,(e,o)=>Boolean(o)),H0=y(pe,e=>e.walletConnectLogin),W_=y(pe,e=>e.ledgerLogin),G_=y(pe,e=>e.walletLogin),$0=y(pe,e=>e.isLoginSessionInvalid),Pr=y(pe,e=>e.tokenLogin),js=y(pe,e=>e.logoutRoute),H_=y(pe,e=>e.isWalletConnectV2Initialized);n();var qs=e=>e.modals,q0=y(qs,e=>e.txSubmittedModal),$_=y(qs,e=>e.notificationModal);n();var Le=e=>e.networkConfig,xt=y(Le,e=>e.network.chainId),V_=y(Le,e=>e.network.roundDuration),X0=y(Le,e=>e.network.walletConnectBridgeAddress),j_=y(Le,e=>e.network.walletConnectV2RelayAddress),q_=y(Le,e=>e.network.walletConnectV2ProjectId),z_=y(Le,e=>e.network.walletConnectV2Options),K_=y(Le,e=>e.network.walletConnectDeepLink),ie=y(Le,e=>e.network),Cr=y(ie,e=>e.apiAddress),zs=y(ie,e=>e.explorerAddress),Nr=y(ie,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),X_=y(ie,e=>e.xAliasAddress),Ks=y(ie,e=>e.egldLabel);n();var yt=e=>e.signedMessageInfo,Z0=y(yt,e=>e.isSigning),Q0=y(yt,e=>e.errorMessage),ew=y(yt,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),ow=y(yt,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Xs=e=>e.toasts,Y_=y(Xs,e=>e.customToasts),Ys=y(Xs,e=>e.transactionToasts);n();P();var Js={errorMessage:yr,successMessage:Sr,processingMessage:br},Zs=e=>e.transactionsInfo,J_=y(Zs,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Js);n();n();var Ee=require("@multiversx/sdk-core");A();n();var Rr=require("@multiversx/sdk-core/out");n();n();function St(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function uo(e){return St(e)?atob(e):e}n();n();n();n();var Qs=e=>{let o=e!=null?e:"";return St(o)?Rr.TransactionPayload.fromEncoded(o):new Rr.TransactionPayload(o)};n();A();var Wo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(er).some(t=>e.startsWith(t)):!1;function fn(e){var r,c,p;let o=u({},e);Wo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new Ee.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Qs(o.data),nonce:o.nonce.valueOf(),receiver:new Ee.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ee.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Hn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:$n,chainID:o.chainID.valueOf(),version:new Ee.TransactionVersion((p=o.version)!=null?p:vi)}),o.options?{options:new Ee.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ee.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();A();function Q_(e,o){let t=new URLSearchParams(e),r=Object.fromEntries(t);return{nextUrlParams:new URLSearchParams(u(u({},r),o)).toString(),params:r}}var eu="3.1.0";function bt({callbackUrl:e,urlParams:o={}}){let t=e;if(Object.entries(o).length>0)try{let{search:r,origin:c,pathname:p,hash:m}=new URL(e),d=w(u({},o),{[Vn]:eu}),{nextUrlParams:_}=Q_(r,d);t=`${c}${p}?${_}${m}`}catch(r){return console.error("Unable to construct URL from: ",e,r),t}return t}n();n();n();var nu=require("@multiversx/sdk-core/out");n();A();n();var ec=require("@multiversx/sdk-core");W();n();var tu=require("@multiversx/sdk-core");n();n();n();var ru=require("@multiversx/sdk-core"),au=x(require("bignumber.js"));R();n();n();n();var Go="accounts";var Mr="blocks";n();n();n();n();te();n();n();te();n();n();n();var _u=x(require("bignumber.js"));A();n();var lu=require("@multiversx/sdk-core"),Or=x(require("bignumber.js"));A();n();var mu=x(require("bignumber.js"));n();Or.default.config({ROUNDING_MODE:Or.default.ROUND_FLOOR});n();n();n();A();n();n();n();n();A();n();A();n();var uu=require("@multiversx/sdk-core");A();n();var hn=require("@multiversx/sdk-core"),Tu=x(require("bignumber.js"));A();n();n();var gu=x(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();n();A();n();te();var xu=["reDelegateRewards","claimRewards","unBond"],yu=["wrapEgld","unwrapEgld"],Su=["unStake"],bu=["unDelegate"];n();n();n();A();n();var Au=x(require("bignumber.js"));n();n();te();n();var Lu=x(require("bignumber.js"));n();n();n();n();var Cu=x(require("bignumber.js"));W();n();n();n();n();R();function Ho(e){let t=Object.getPrototypeOf(e).toPlainObject!=null?e:fn(e),r=w(u({},t.toPlainObject()),{hash:t.getHash().hex(),senderUsername:t.getSenderUsername().valueOf(),receiverUsername:t.getReceiverUsername().valueOf(),status:"pending"});return Wo({data:r.data,onlySetGuardian:!0})&&(delete r.senderUsername,delete r.receiverUsername),r}n();var sc=require("@multiversx/sdk-web-wallet-provider");A();n();var ic=x(require("qs"));n();J();var It=e=>{let o=new URLSearchParams(e).toString(),{pathname:t,hash:r}=N(),c=o?`?${o}`:"",p=t?`${t}${c}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};Ro();n();Ro();var Nu={search:Oe()?window.location.search:"",removeParams:[]},ac=(e,o=Nu)=>{var m;let t={},r=Oe()?window.location.search:"",c=(m=o.search)!=null?m:r;if(c){let d=c?new URLSearchParams(c):[];t=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=t[d],delete t[d]}),o.removeParams!=null&&Object.keys(t).forEach(d=>{var T,f;let[_]=d.split("[");(((T=o.removeParams)==null?void 0:T.includes(d))||((f=o.removeParams)==null?void 0:f.includes(_)))&&delete t[d]}),{remainingParams:p,params:t,clearNavigationHistory:()=>It(t)}};var At=({removeParams:e,search:o})=>{let t=Oe()?window.location.search:"",r=o!=null?o:t;if(!r)return{};let c=ic.default.parse(r.replace("?","")),p=Object.keys(c).filter(d=>!e.includes(d)),{remainingParams:m}=ac(p,{search:o,removeParams:e});return It(m),m};var cc=({transaction:e,search:o})=>At({removeParams:[...Object.keys(e),sc.WALLET_PROVIDER_CALLBACK_PARAM,Ae,Vn],search:o});n();n();n();X();n();te();n();n();X();n();var Ru=x(require("linkifyjs"));n();A();n();var Du=x(require("bignumber.js"));n();W();n();n();R();n();R();n();n();n();te();n();te();n();var Mu=x(require("bignumber.js"));A();te();n();te();n();var mc=require("react");W();n();n();te();n();n();var Ou=require("@multiversx/sdk-core/out"),Fu=x(require("bignumber.js"));te();n();W();n();n();W();var I1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var dc=require("react");W();X();n();var Bu=require("react");te();var R1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Uo();n();var kt=e=>e.transactions,$o=y(kt,e=>e.signedTransactions),lc=y(kt,e=>e.signTransactionsError),Lt=y(kt,e=>e.signTransactionsCancelMessage),Et=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),_c=y($o,Et(Mo)),uc=y($o,Et(Oo)),gc=y($o,Et(Fo)),Wu=y($o,Et(wr)),Pt=y(kt,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>fn(t)))||[]})}),Gu=y($o,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var fc=require("react");n();P();n();n();n();n();n();n();n();n();var hc=require("@multiversx/sdk-extension-provider"),xc=require("@multiversx/sdk-hw-provider"),yc=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Sc=require("@multiversx/sdk-opera-provider"),bc=require("@multiversx/sdk-passkey-provider/out"),Wr=require("@multiversx/sdk-web-wallet-provider");A();ze();n();var Te=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Tc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");R();n();var Br=Vo;var Hu="/dapp/init",Qe=e=>{switch(e==null?void 0:e.constructor){case Wr.WalletProvider:return"wallet";case Br:return"walletconnectv2";case xc.HWProvider:return"ledger";case hc.ExtensionProvider:return"extension";case bc.PasskeyProvider:return"passkey";case yc.MetamaskProvider:return"metamask";case Sc.OperaProvider:return"opera";case Q.CrossWindowProvider:return"crossWindow";case Te.IframeProvider:return"iframe";case Vo:return"";default:return"extra"}},Gr=e=>new Wr.WalletProvider(`${e}${Hu}`);var he=e=>`Unable to perform ${e}, Provider not initialized`,Vo=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(he("getAccount"))}setAccount(o){throw new Error(he(`setAccount: ${o}`))}login(o){throw new Error(he(`login with options: ${o}`))}logout(o){throw new Error(he(`logout with options: ${o}`))}getAddress(){throw new Error(he("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(he(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(he(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(he(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(he(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(he(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(he(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Ct=new Vo;var vc=Ct,wc=null;function Ic(){wc!=null&&(vc=wc)}function Pe(){return vc||Ct}P();n();n();n();n();n();var Ac=require("@lifeomic/axios-fetch"),Hr=x(require("axios")),$r=(0,Ac.buildAxiosFetch)(Hr.default),Vr=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function $u(e,o,t){return g(this,null,function*(){try{let r=yield $r(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Vr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function Vu(e,o){return g(this,null,function*(){try{let t=yield $r(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Vr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function ju(e,o,t){return g(this,null,function*(){try{let r=yield $r(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Vr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var eo=Hr.default.create();eo.get=Vu;eo.post=$u;eo.patch=ju;var kc=e=>eo.get(e).then(o=>o.data);n();var jo=e=>{let o=e!=null?e:Cr(v.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var qu=x(require("axios"));n();var Lc=x(require("swr"));var qo=({apiEndpoint:e})=>{let o=jo(),t=e?`${o}/${e}`:null;return(0,Lc.default)(t,kc)};var zu=e=>{let t=`${jo()}/${Go}/${e}?withGuardianInfo=true`;return eo.get(t)},Ec=e=>g(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield zu(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var zo=e=>Ec(e);n();R();n();n();n();X();n();function yn(e){let o=v.getState(),t=Vs(o);return e?t&&!isNaN(t)?Math.max(t,e.nonce):e.nonce:t}Uo();n();n();n();var Ku=x(require("axios"));n();var Yu=x(require("axios"));Eo();n();A();n();var Ju=x(require("axios"));n();var Qu=x(require("axios"));n();n();var eg=x(require("axios"));n();var og=x(require("axios"));n();n();P();R();n();n();n();n();X();n();M();W();n();P();n();var Rc=require("@multiversx/sdk-core");W();J();n();Uo();n();P();R();n();P();W();n();n();n();W();n();Gn();n();var Dc=()=>I(lc);n();n();n();var ag=x(require("swr"));n();n();n();n();var Mc=require("react");n();n();var Oc=require("react"),Fc=require("@multiversx/sdk-web-wallet-provider"),Uc=require("@multiversx/sdk-web-wallet-provider"),Bc=x(require("qs"));A();P();R();tr();X();var ig=N();function Rt(e){let o=I(ie),t=G(),{shouldFetchWalletUrlOnLoad:r}=I(gn),{search:c}=r?ig:N();(0,Oc.useEffect)(()=>{if(c!=null){let p=Bc.default.parse(c.replace("?",""));if(p&&Ae in p){let m=String(p[Ae]),d=new Fc.WalletProvider(`${o.walletAddress}${Ii}`).getTransactionsFromWalletUrl(c);if(p.status==="cancelled"){t(Je({sessionId:m,status:"cancelled"})),e(),At({removeParams:[...Object.keys(nr),Uc.WALLET_PROVIDER_CALLBACK_PARAM,Ae,"address"],search:c}),t(Ye(qe));return}if(d.length>0){t(Je({sessionId:m,status:"signed",transactions:d.map(T=>Ho(T))}));let[_]=d;cc({transaction:_,search:c})}}}},[c])}n();var dp=require("react"),oa=require("@multiversx/sdk-core");n();var Sn=e=>qo({apiEndpoint:e?`${Go}/${e}?withGuardianInfo=true`:null});A();gr();n();n();var jr=(e,o)=>e?Array.isArray(o)?o.some(t=>e.address===t||e.activeGuardianAddress===t):e.address===o||e.activeGuardianAddress===o:!0;n();function qr(e){let o=Pt(v.getState()),t=Object.keys(e).length===(o==null?void 0:o.transactions.length);return e&&(e&&t)}n();n();n();var zr=({accountNonce:e,transactionNonce:o})=>o&&o>e?o:e;var Wc=({latestNonce:e,transactions:o})=>o.length===0?o:o.map((t,r)=>{let c=e+r,p=t.getNonce().valueOf(),m=zr({accountNonce:c,transactionNonce:p});return t.setNonce(m),t});var Dt=()=>{let e=I(Ze),{data:o}=Sn(e);return t=>g(void 0,null,function*(){let r=o!=null?o:yield zo(e),c=yn(r);return Wc({latestNonce:c,transactions:t})})};n();var Kr=({transactions:e,isGuarded:o})=>o?e.length===0?!1:e.every(t=>Boolean(t.getGuardianSignature().toString("hex"))):!0;n();n();n();Eo();n();var pg=x(require("axios"));n();var dg=x(require("axios"));n();Eo();n();Eo();function Xr(e){return xi[e]}n();n();n();n();var lg=require("@multiversx/sdk-opera-provider");n();var _g=require("@multiversx/sdk-extension-provider");n();ze();function Gc(t){return g(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield Q.CrossWindowProvider.getInstance().init(),c=Q.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return c;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}n();n();n();n();var sp=x(ip());var vn=e=>{if(!e||!(0,sp.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,r,c,p]=o,m=JSON.parse(uo(p)),d=uo(t);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:r}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var Gg=require("@multiversx/sdk-native-auth-client");n();var mp=x(require("axios"));n();n();n();function cp(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var pp=(e,o,t,r=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield cp(o.delay)),yield pp(e,o,t,r+1)):null}}),Zr=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield pp(e,o,t)});var Ug=4;var N2=Zr((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield mp.default.get(`${e}/${Mr}?from=${Ug}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();qn();n();function Bg(e){return Object.prototype.toString.call(e)==="[object String]"}var Qr=e=>{var t;if(!e||!Bg(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=uo(r),d=uo(c),_=vn(d);if(!_)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let T=w(u({},_),{address:m,body:d,signature:p});return(t=_.extraInfo)!=null&&t.timestamp||delete T.extraInfo,T}catch(r){return null}};n();X();var H2={origin:N().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var $g=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Vg=require("@multiversx/sdk-passkey-provider/out");A();X();var ea=({transactions:e,hasGuardianScreen:o,callbackRoute:t,sessionId:r,walletAddress:c,isGuarded:p})=>{let m=Kr({isGuarded:p,transactions:e}),d=e[0].getChainID().valueOf(),_=e[0].getSender().bech32().toString(),T=Xr(d),f=c!=null?c:io[T].walletAddress;return{needs2FaSigning:p?!o&&!m&&r:!1,sendTransactionsToGuardian:()=>{let L=Gr(f),Y={[Ae]:String(r)},{origin:O}=N(),j=window!=null&&window.location?`${O}${t}`:`${t}`,ee=bt({callbackUrl:j,urlParams:Y});L.guardTransactions(e,{callbackUrl:encodeURIComponent(ee)})},guardTransactions:()=>g(void 0,null,function*(){let L=yield Gc({address:_,walletUrl:f});return L==null||L.setShouldShowConsentPopup(!0),yield L==null?void 0:L.guardTransactions(e)})}};n();n();n();var zg=require("react"),Kg=require("@multiversx/sdk-hw-provider");n();M();W();n();dn();No();Co();J();n();var We=()=>{let e=Pe(),o=Qe(e);return{provider:e,providerType:o}};n();var En=require("react"),Ut=require("@multiversx/sdk-core"),da=require("@multiversx/sdk-extension-provider"),la=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),_a=require("@multiversx/sdk-passkey-provider/out"),nd=x(Ym());A();n();n();var fo=()=>I(_o);n();n();n();n();n();n();n();n();var Ln=x(require("react"));var kO=(0,Ln.createContext)({}),LO=v.getState();n();var Zm=x(require("react"));n();var aa=x(require("react")),Th=x(require("axios"));n();n();ze();n();n();var ed=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),od=require("@multiversx/sdk-webview-provider/out/WebviewProvider");M();n();M();P();W();function Qm(e,o=v.dispatch){let t=Qr(e);if(t==null)return;let{signature:r,address:c}=t;r&&e&&c&&(o(ur({loginToken:e,signature:r,nativeAuthToken:e})),o(re({address:c,loginMethod:"extra"})))}n();n();P();function ia(){v.dispatch(mo())}n();J();n();P();W();n();n();var xh=require("@multiversx/sdk-core"),yh=x(require("bignumber.js"));A();n();var Sh=x(require("bignumber.js"));A();var me=class{constructor(){this.init=()=>g(this,null,function*(){return yield this._provider.init()});this.login=()=>g(this,null,function*(){var t;let o=yield this._provider.login();return{address:(t=o==null?void 0:o.address)!=null?t:""}});this.logout=()=>g(this,null,function*(){return v.dispatch(D()),yield this._provider.logout()});this.relogin=()=>g(this,null,function*(){let o=yield this._provider.relogin();return o?(Qm(o),Ic(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>g(this,null,function*(){let t=yield this._provider.signTransactions(o);return t||(ia(),this._provider.cancelAction(),null)});this.signTransaction=o=>g(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>g(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>g(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>g(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,ed.providerNotInitializedError)("getAddress");this._provider=od.WebviewProvider.getInstance({resetStateCallback:()=>v.dispatch(D())})}static getInstance(){return me._instance||(me._instance=new me),me._instance}getAccount(){var t;let o=this._provider.getAccount();return{address:(t=o==null?void 0:o.address)!=null?t:""}}setAccount(o){this._provider.setAccount(o)}};P();R();J();X();n();var Jo=require("react"),sa=require("@multiversx/sdk-extension-provider"),ca=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),pa=require("@multiversx/sdk-passkey-provider/out");ze();P();var ma=()=>{let e=G(),{provider:o}=We(),{nonce:t}=fo(),[r,c]=(0,Jo.useState)(null),[p,m]=(0,Jo.useState)(),[d,_]=(0,Jo.useState)([]),T=Dt(),f=I(Pt),b=I(Lt),E=()=>g(void 0,null,function*(){var ee,ge;let O=Boolean(f==null?void 0:f.transactions),j=(ee=f==null?void 0:f.transactions)!=null?ee:[];if(O){let F=(ge=f==null?void 0:f.customTransactionInformation)!=null&&ge.skipUpdateNonces?j:yield T(j);_(F)}m(O)});(0,Jo.useEffect)(()=>{E()},[f,t]);let k=()=>{c(null),e(Ye(null))},L=O=>{k(),Y(O)};Rt(L);function Y(O){var $e,C,U,q,H,$,Z,se,ce,Ce,oe,Ne;let j=o instanceof sa.ExtensionProvider,ee=o instanceof pa.PasskeyProvider,ge=o instanceof Q.CrossWindowProvider,F=o instanceof Te.IframeProvider,bo=o instanceof ca.MetamaskProvider,nn=o instanceof me;e(mo()),e(ln(O)),!(!j&&!ge&&!F&&!ee&&!bo)&&(k(),j&&((C=($e=sa.ExtensionProvider.getInstance())==null?void 0:$e.cancelAction)==null||C.call($e)),ee&&((q=(U=pa.PasskeyProvider.getInstance())==null?void 0:U.cancelAction)==null||q.call(U)),bo&&(($=(H=ca.MetamaskProvider.getInstance())==null?void 0:H.cancelAction)==null||$.call(H)),ge&&((se=(Z=Q.CrossWindowProvider.getInstance())==null?void 0:Z.cancelAction)==null||se.call(Z)),F&&((Ce=(ce=Te.IframeProvider.getInstance())==null?void 0:ce.cancelAction)==null||Ce.call(ce)),nn&&((Ne=(oe=me.getInstance())==null?void 0:oe.cancelAction)==null||Ne.call(oe)))}return{error:r,canceledTransactionsMessage:b,clearTransactionStatusMessage:k,onAbort:L,setError:c,hasTransactions:p,transactionsToSign:f&&w(u({},f),{transactions:d})}};var td=()=>{let e=G(),o=(0,En.useRef)("/"),{provider:t}=We(),r=I(Nr),c=Qe(t),p=(0,En.useRef)(!1),m=Dt(),{isGuarded:d,address:_}=fo(),T=I(Lt),{transactionsToSign:f,error:b,setError:E,hasTransactions:k,onAbort:L,clearTransactionStatusMessage:Y}=ma();Rt(L);let O=(0,nd.default)(f==null?void 0:f.transactions.map(C=>C.getSender().toString()).filter(C=>C)),j=O==null?void 0:O[0],{data:ee}=Sn(!j||j===_?null:j),ge=C=>{var ce,Ce,oe,Ne,wo,tn,no,z,fe,rn,vo,Dn;let U=t instanceof da.ExtensionProvider,q=t instanceof _a.PasskeyProvider,H=t instanceof Q.CrossWindowProvider,$=t instanceof Te.IframeProvider,Z=t instanceof la.MetamaskProvider,se=t instanceof me;e(mo()),e(ln(C)),p.current=!1,!(!U&&!H&&!$&&!q&&!Z)&&(Y(),U&&((Ce=(ce=da.ExtensionProvider.getInstance())==null?void 0:ce.cancelAction)==null||Ce.call(ce)),q&&((Ne=(oe=_a.PasskeyProvider.getInstance())==null?void 0:oe.cancelAction)==null||Ne.call(oe)),Z&&((tn=(wo=la.MetamaskProvider.getInstance())==null?void 0:wo.cancelAction)==null||tn.call(wo)),H&&((z=(no=Q.CrossWindowProvider.getInstance())==null?void 0:no.cancelAction)==null||z.call(no)),$&&((rn=(fe=Te.IframeProvider.getInstance())==null?void 0:fe.cancelAction)==null||rn.call(fe)),se&&((Dn=(vo=me.getInstance())==null?void 0:vo.cancelAction)==null||Dn.call(vo)))},F=(C,U)=>{c==="walletconnectv2"&&(C=qe);let H=C.includes(qe);if(ge(U),H){e(Ye(qe));return}E(C)},bo=(C,U,q="")=>{let H={[Ae]:U},$=q;if(window!=null&&window.location){let{search:se,origin:ce}=N(),Ce=new URLSearchParams(se);$=`${ce}${q}`,Ce.forEach((oe,Ne)=>{H[Ne]=oe})}let Z=bt({callbackUrl:$,urlParams:H});t.signTransactions(C,{callbackUrl:encodeURIComponent(Z)})},nn=()=>g(void 0,null,function*(){var tn,no;if(p.current||!f)return;let{sessionId:C,transactions:U,callbackRoute:q,customTransactionInformation:H}=f,{redirectAfterSign:$}=H,Z=po(),se=q||Z,ce=Z.includes(se),Ce=$&&!ce;try{if(!(yield(tn=t==null?void 0:t.init)==null?void 0:tn.call(t)))return}catch(z){let fe=(z==null?void 0:z.message)||z||Qt;console.error(fe),F(Qt,C);return}let oe=!H.skipGuardian,Ne=H.hasConsentPopup,wo=t instanceof Q.CrossWindowProvider;try{p.current=!0,wo&&Ne&&t.setShouldShowConsentPopup(!0);let z=(no=yield t.signTransactions(d&&oe?U==null?void 0:U.map(Ve=>(Ve.setVersion(Ut.TransactionVersion.withTxOptions()),Ve.setOptions(Ut.TransactionOptions.withOptions({guarded:!0})),Ve)):U))!=null?no:[];if(p.current=!1,!qr(z))return;let rn=Object.values(z).map(Ve=>Ho(Ve)),{needs2FaSigning:vo,guardTransactions:Dn}=ea({transactions:z,sessionId:C,callbackRoute:q,isGuarded:d&&oe,walletAddress:r});if(vo){let Ve=yield Dn();rn=Ve?Ve.map(Nd=>Ho(Nd)):[]}let Aa={sessionId:C,transactions:rn,status:"signed"};Ce&&(Aa.redirectRoute=se),e(Je(Aa))}catch(z){p.current=!1;let fe=(z==null?void 0:z.message)||z||ei;console.error(fe),e(Je({sessionId:C,status:"cancelled"})),F(fe.includes("cancel")?qe:fe,C)}}),$e=()=>g(void 0,null,function*(){if(!f)return;Y();let{sessionId:C,transactions:U,callbackRoute:q,customTransactionInformation:H}=f;if(!t){console.error(oi);return}if(O.length>1)throw new Error("Multiple senders are not allowed");if(j&&j!==_&&!jr(ee,_))return console.error(Wn),F(Wn);o.current=q||N().pathname;try{let $=c==="wallet",Z=H.skipUpdateNonces?U:yield m(U);if($)return bo(Z,C,q);nn()}catch($){let se=($==null?void 0:$.message)||Qa;console.error(se),F(se,C),e(Je({sessionId:C,status:"cancelled"})),console.error(se,$)}});return(0,En.useEffect)(()=>{k?$e():p.current=!1},[f,k,ee]),{error:b,canceledTransactionsMessage:T,onAbort:L,hasTransactions:k,callbackRoute:o.current,sessionId:f==null?void 0:f.sessionId,transactions:f==null?void 0:f.transactions}};n();P();W();dn();X();n();ve();P();n();n();var wh=require("react");n();n();R();Uo();n();var rd=require("react");n();n();var Ih=require("react"),Ah=require("@multiversx/sdk-extension-provider");ve();M();R();n();Fe();J();J();n();n();ze();W();n();var vh=require("react"),ad=require("@multiversx/sdk-core");P();n();var kh=require("react"),Lh=require("@multiversx/sdk-opera-provider");ve();M();R();Fe();J();X();n();var Eh=require("react");ar();ve();ze();M();P();R();Fe();X();n();var Oh=require("react");ve();P();n();n();ir();n();n();var Ph=x(require("platform"));Ro();n();n();n();n();n();n();n();sn();R();n();n();var Ch=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();dn();No();n();n();n();P();var Nh={},Rh={};var id=e=>{if(e.component!=null){let o=e,{component:t,onClose:r}=o,c=je(o,["component","onClose"]),p=v.dispatch(hr(w(u({},c),{component:null,onClose:void 0})));return Nh[p==null?void 0:p.payload.toastId]=t,r&&(Rh[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return v.dispatch(hr(e)).payload};n();n();var Dh=x(require("axios"));J();n();n();var Mh=x(Mt());sn();var sd,cd,pd,lW=(pd=(cd=(sd=so.safeWindow)==null?void 0:sd.location)==null?void 0:cd.origin)==null?void 0:pd.includes("localhost");n();X();n();n();var Kh=require("react");A();n();n();A();n();n();n();var Fh=x(require("bignumber.js"));n();n();n();var oo=x(require("react")),yd=require("react"),Sd=require("react"),Sa=x(require("classnames")),bd=require("react-dom");A();n();var _d=x(require("react"));n();var Pn=x(require("react"));n();Ro();var md=()=>!Oe();var Bh=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(ga(),ua))}),Wh=()=>(ga(),de(ua)).default,fa=md();function ld({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=Pn.default.useState(fa?void 0:Wh()),[p,m]=Pn.default.useState(fa||t==null?void 0:t()),d=()=>g(this,null,function*(){(e?e():Bh()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,Pn.useEffect)(()=>{fa&&d()},[]),{globalStyles:r,styles:p}}function ue(e,o){return t=>{let{globalStyles:r,styles:c}=ld({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return _d.default.createElement(e,w(u({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();var gd=x(require("react")),fd=x(require("classnames"));var Hh=({className:e,children:o,styles:t})=>gd.default.createElement("div",{className:(0,fd.default)(t==null?void 0:t.dappModalBody,e)},o),Ta=ue(Hh,{ssrStyles:()=>Promise.resolve().then(()=>(He(),Ge)),clientStyles:()=>(He(),de(Ge)).default});n();var ha=x(require("react")),Td=x(require("classnames"));var $h=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?ha.default.createElement("div",{className:(0,Td.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:ha.default.createElement("div",null,r)):null,xa=ue($h,{ssrStyles:()=>Promise.resolve().then(()=>(He(),Ge)),clientStyles:()=>(He(),de(Ge)).default});n();var en=x(require("react")),hd=require("@fortawesome/free-solid-svg-icons"),xd=require("@fortawesome/react-fontawesome"),Cn=x(require("classnames"));var Vh=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?t?en.default.createElement("div",{className:(0,Cn.default)(_==null?void 0:_.dappModalHeader,r)},t):en.default.createElement("div",{className:(0,Cn.default)(_==null?void 0:_.dappModalHeader,r)},en.default.createElement("div",{className:(0,Cn.default)(_==null?void 0:_.dappModalHeaderText,p)},o),en.default.createElement("button",{onClick:m,className:(0,Cn.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},en.default.createElement(xd.FontAwesomeIcon,{size:"lg",icon:hd.faTimes}))):null,ya=ue(Vh,{ssrStyles:()=>Promise.resolve().then(()=>(He(),Ge)),clientStyles:()=>(He(),de(Ge)).default});var jh={showHeader:!0,showFooter:!1,headerText:"",footerText:""},qh=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=jh,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:T})=>{let[f,b]=(0,yd.useState)(!1);if((0,Sd.useEffect)(()=>{b(!0)},[]),!_)return null;let{showHeader:E,showFooter:k,headerText:L,footerText:Y,modalDialogClassName:O="dapp-modal-dialog",modalContentClassName:j="dapp-modal-dialog-content",modalHeaderClassName:ee="dapp-modal-dialog-header",modalHeaderTextClassName:ge="dapp-modal-dialog-header-text",modalCloseButtonClassName:F="dapp-modal-dialog-close-button",modalBodyClassName:bo="dapp-modal-dialog-content-body",modalFooterClassName:nn="dapp-modal-dialog-footer",customModalHeader:$e,customModalFooter:C}=c,U=q=>{q.key==="Escape"&&r&&(m==null||m())};return oo.default.createElement(oo.default.Fragment,null,f&&(0,bd.createPortal)(oo.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Sa.default)(O,T==null?void 0:T.dappModal,t),"data-testid":e,onKeyDown:U},oo.default.createElement("div",{className:(0,Sa.default)(T==null?void 0:T.dappModalContent,j)},oo.default.createElement(ya,{visible:E,headerText:L,customHeader:$e,className:ee,headerTextClassName:ge,closeButtonClassName:F,onHide:m}),oo.default.createElement(Ta,{className:bo},o),oo.default.createElement(xa,{visible:k,customFooter:C,footerText:Y,className:nn}))),d!=null?d:document==null?void 0:document.body))},zh=ue(qh,{ssrStyles:()=>Promise.resolve().then(()=>(He(),Ge)),clientStyles:()=>(He(),de(Ge)).default});n();n();var wd=require("react");n();n();var vd=require("react"),Yh=require("@multiversx/sdk-hw-provider");ve();M();P();R();Fe();n();var Xh=require("react");n();n();var ba=require("react");M();P();R();Fe();X();n();var Zh=require("react"),Qh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ve();M();R();Fe();J();J();n();var ex=require("react"),ox=require("@multiversx/sdk-passkey-provider/out");ve();M();R();Fe();J();J();n();n();var Id=require("react");n();var rx=require("react");n();var wa=require("react"),tx=require("socket.io-client");P();n();n();n();var ax=require("react");W();n();n();n();var sx=x(require("swr"));n();n();n();n();var ix=x(require("axios"));n();n();var So=x(require("react")),Pd=require("@fortawesome/free-solid-svg-icons");n();var va=x(require("react"));n();var yo=x(require("react")),on=require("@fortawesome/free-solid-svg-icons"),Bt=require("@fortawesome/react-fontawesome"),Wt=x(require("classnames"));n();var mx=({type:e,globalStyles:o,styles:t})=>{switch(e){case"info":return yo.default.createElement("div",{className:(0,Wt.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.success)},yo.default.createElement(Bt.FontAwesomeIcon,{icon:on.faInfo,className:t==null?void 0:t.svg,size:"5x"}));case"warning":return yo.default.createElement("div",{className:(0,Wt.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.warning,t==null?void 0:t.warningIcon)},yo.default.createElement(Bt.FontAwesomeIcon,{icon:on.faWarning,className:t==null?void 0:t.svg,size:"5x"}));case"error":return yo.default.createElement("div",{className:(0,Wt.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.danger,t==null?void 0:t.errorIcon)},yo.default.createElement(Bt.FontAwesomeIcon,{icon:on.faTimes,className:t==null?void 0:t.svg,size:"5x"}));default:return null}},Ld=ue(mx,{ssrStyles:()=>Promise.resolve().then(()=>(Rn(),Nn)),clientStyles:()=>(Rn(),de(Nn)).default});var dx=({type:e,message:o,styles:t})=>va.default.createElement("div",{className:t==null?void 0:t.transactionsStatusToastContent},va.default.createElement(Ld,{type:e}),o),Ed=ue(dx,{ssrStyles:()=>Promise.resolve().then(()=>(Rn(),Nn)),clientStyles:()=>(Rn(),de(Nn)).default});A();var Cd=({signError:e,canceledTransactionsMessage:o,onDelete:t})=>{let r=I(gn),c=(0,So.useMemo)(()=>e||o||ni,[e,o]),p=(0,So.useMemo)(()=>e?"error":o?"warning":"info",[e,o]);return(0,So.useEffect)(()=>{var m;id({toastId:`${yi}-${Date.now()}`,title:"Transaction canceled",duration:(m=r.cancelTransactionToastDuration)!=null?m:2e4,component:()=>So.default.createElement(Ed,{type:p,message:c}),onClose:()=>t==null?void 0:t(),icon:Pd.faWarning})},[]),null};var _x=({Screen:e,verifyReceiverScam:o,className:t})=>{if(!e)return null;let{callbackRoute:r,transactions:c,error:p,sessionId:m,hasTransactions:d,onAbort:_,canceledTransactionsMessage:T}=td(),f=Dc(),{providerType:b}=We(),E=()=>{_(m)},k=p||f,L={handleClose:E,error:k,sessionId:m,transactions:c||[],providerType:b,callbackRoute:r,className:t,verifyReceiverScam:o},Y={signError:k,canceledTransactionsMessage:T},O=Boolean(k)||Boolean(T);return!O&&!d?null:O?Ia.default.createElement(Cd,u({},Y)):Ia.default.createElement(e,u({},L))};0&&(module.exports={ConfirmationScreen});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=ConfirmationScreen.js.map
