"use strict";var Dl=Object.create;var Jo=Object.defineProperty,Cl=Object.defineProperties,El=Object.getOwnPropertyDescriptor,Pl=Object.getOwnPropertyDescriptors,Rl=Object.getOwnPropertyNames,Nn=Object.getOwnPropertySymbols,Ml=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty,Qa=Object.prototype.propertyIsEnumerable;var Ja=(o,e,t)=>e in o?Jo(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))Gt.call(e,t)&&Ja(o,t,e[t]);if(Nn)for(var t of Nn(e))Qa.call(e,t)&&Ja(o,t,e[t]);return o},I=(o,e)=>Cl(o,Pl(e));var le=(o,e)=>{var t={};for(var r in o)Gt.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&Nn)for(var r of Nn(o))e.indexOf(r)<0&&Qa.call(o,r)&&(t[r]=o[r]);return t};var x=(o,e)=>()=>(o&&(e=o(o=0)),e);var S=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),W=(o,e)=>{for(var t in e)Jo(o,t,{get:e[t],enumerable:!0})},ei=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Rl(e))!Gt.call(o,s)&&s!==t&&Jo(o,s,{get:()=>e[s],enumerable:!(r=El(e,s))||r.enumerable});return o};var h=(o,e,t)=>(t=o!=null?Dl(Ml(o)):{},ei(e||!o||!o.__esModule?Jo(t,"default",{value:o,enumerable:!0}):t,o)),F=o=>ei(Jo({},"__esModule",{value:!0}),o);var y=(o,e,t)=>new Promise((r,s)=>{var p=_=>{try{d(t.next(_))}catch(l){s(l)}},m=_=>{try{d(t.throw(_))}catch(l){s(l)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(o,e)).next())});var ti=S(Dn=>{"use strict";n();Dn.byteLength=Fl;Dn.toByteArray=Bl;Dn.fromByteArray=Vl;var ye=[],pe=[],Ol=typeof Uint8Array!="undefined"?Uint8Array:Array,Vt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(to=0,oi=Vt.length;to<oi;++to)ye[to]=Vt[to],pe[Vt.charCodeAt(to)]=to;var to,oi;pe["-".charCodeAt(0)]=62;pe["_".charCodeAt(0)]=63;function ni(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=o.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function Fl(o){var e=ni(o),t=e[0],r=e[1];return(t+r)*3/4-r}function Wl(o,e,t){return(e+t)*3/4-t}function Bl(o){var e,t=ni(o),r=t[0],s=t[1],p=new Ol(Wl(o,r,s)),m=0,d=s>0?r-4:r,_;for(_=0;_<d;_+=4)e=pe[o.charCodeAt(_)]<<18|pe[o.charCodeAt(_+1)]<<12|pe[o.charCodeAt(_+2)]<<6|pe[o.charCodeAt(_+3)],p[m++]=e>>16&255,p[m++]=e>>8&255,p[m++]=e&255;return s===2&&(e=pe[o.charCodeAt(_)]<<2|pe[o.charCodeAt(_+1)]>>4,p[m++]=e&255),s===1&&(e=pe[o.charCodeAt(_)]<<10|pe[o.charCodeAt(_+1)]<<4|pe[o.charCodeAt(_+2)]>>2,p[m++]=e>>8&255,p[m++]=e&255),p}function Ul(o){return ye[o>>18&63]+ye[o>>12&63]+ye[o>>6&63]+ye[o&63]}function Gl(o,e,t){for(var r,s=[],p=e;p<t;p+=3)r=(o[p]<<16&16711680)+(o[p+1]<<8&65280)+(o[p+2]&255),s.push(Ul(r));return s.join("")}function Vl(o){for(var e,t=o.length,r=t%3,s=[],p=16383,m=0,d=t-r;m<d;m+=p)s.push(Gl(o,m,m+p>d?d:m+p));return r===1?(e=o[t-1],s.push(ye[e>>2]+ye[e<<4&63]+"==")):r===2&&(e=(o[t-2]<<8)+o[t-1],s.push(ye[e>>10]+ye[e>>4&63]+ye[e<<2&63]+"=")),s.join("")}});var ri=S(Ht=>{n();Ht.read=function(o,e,t,r,s){var p,m,d=s*8-r-1,_=(1<<d)-1,l=_>>1,g=-7,T=t?s-1:0,b=t?-1:1,v=o[e+T];for(T+=b,p=v&(1<<-g)-1,v>>=-g,g+=d;g>0;p=p*256+o[e+T],T+=b,g-=8);for(m=p&(1<<-g)-1,p>>=-g,g+=r;g>0;m=m*256+o[e+T],T+=b,g-=8);if(p===0)p=1-l;else{if(p===_)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-l}return(v?-1:1)*m*Math.pow(2,p-r)};Ht.write=function(o,e,t,r,s,p){var m,d,_,l=p*8-s-1,g=(1<<l)-1,T=g>>1,b=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=r?0:p-1,A=r?1:-1,M=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,m=g):(m=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+T>=1?e+=b/_:e+=b*Math.pow(2,1-T),e*_>=2&&(m++,_/=2),m+T>=g?(d=0,m=g):m+T>=1?(d=(e*_-1)*Math.pow(2,s),m=m+T):(d=e*Math.pow(2,T-1)*Math.pow(2,s),m=0));s>=8;o[t+v]=d&255,v+=A,d/=256,s-=8);for(m=m<<s|d,l+=s;l>0;o[t+v]=m&255,v+=A,m/=256,l-=8);o[t+v-A]|=M*128}});var hi=S(bo=>{"use strict";n();var $t=ti(),So=ri(),ai=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;bo.Buffer=u;bo.SlowBuffer=Kl;bo.INSPECT_MAX_BYTES=50;var Cn=2147483647;bo.kMaxLength=Cn;u.TYPED_ARRAY_SUPPORT=Hl();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Hl(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(t){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function Pe(o){if(o>Cn)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,u.prototype),e}function u(o,e,t){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Kt(o)}return si(o,e,t)}u.poolSize=8192;function si(o,e,t){if(typeof o=="string")return ql(o,e);if(ArrayBuffer.isView(o))return jl(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(Se(o,ArrayBuffer)||o&&Se(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Se(o,SharedArrayBuffer)||o&&Se(o.buffer,SharedArrayBuffer)))return jt(o,e,t);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=o.valueOf&&o.valueOf();if(r!=null&&r!==o)return u.from(r,e,t);var s=zl(o);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return u.from(o[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}u.from=function(o,e,t){return si(o,e,t)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function pi(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function $l(o,e,t){return pi(o),o<=0?Pe(o):e!==void 0?typeof t=="string"?Pe(o).fill(e,t):Pe(o).fill(e):Pe(o)}u.alloc=function(o,e,t){return $l(o,e,t)};function Kt(o){return pi(o),Pe(o<0?0:Xt(o)|0)}u.allocUnsafe=function(o){return Kt(o)};u.allocUnsafeSlow=function(o){return Kt(o)};function ql(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=mi(o,e)|0,r=Pe(t),s=r.write(o,e);return s!==t&&(r=r.slice(0,s)),r}function qt(o){for(var e=o.length<0?0:Xt(o.length)|0,t=Pe(e),r=0;r<e;r+=1)t[r]=o[r]&255;return t}function jl(o){if(Se(o,Uint8Array)){var e=new Uint8Array(o);return jt(e.buffer,e.byteOffset,e.byteLength)}return qt(o)}function jt(o,e,t){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&t===void 0?r=new Uint8Array(o):t===void 0?r=new Uint8Array(o,e):r=new Uint8Array(o,e,t),Object.setPrototypeOf(r,u.prototype),r}function zl(o){if(u.isBuffer(o)){var e=Xt(o.length)|0,t=Pe(e);return t.length===0||o.copy(t,0,0,e),t}if(o.length!==void 0)return typeof o.length!="number"||Yt(o.length)?Pe(0):qt(o);if(o.type==="Buffer"&&Array.isArray(o.data))return qt(o.data)}function Xt(o){if(o>=Cn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Cn.toString(16)+" bytes");return o|0}function Kl(o){return+o!=o&&(o=0),u.alloc(+o)}u.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==u.prototype};u.compare=function(e,t){if(Se(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),Se(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,s=t.length,p=0,m=Math.min(r,s);p<m;++p)if(e[p]!==t[p]){r=e[p],s=t[p];break}return r<s?-1:s<r?1:0};u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return u.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var s=u.allocUnsafe(t),p=0;for(r=0;r<e.length;++r){var m=e[r];if(Se(m,Uint8Array))p+m.length>s.length?u.from(m).copy(s,p):Uint8Array.prototype.set.call(s,m,p);else if(u.isBuffer(m))m.copy(s,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return s};function mi(o,e){if(u.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||Se(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var t=o.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var s=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return zt(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return gi(o).length;default:if(s)return r?-1:zt(o).length;e=(""+e).toLowerCase(),s=!0}}u.byteLength=mi;function Xl(o,e,t){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return au(this,e,t);case"utf8":case"utf-8":return _i(this,e,t);case"ascii":return tu(this,e,t);case"latin1":case"binary":return ru(this,e,t);case"base64":return ou(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return iu(this,e,t);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),r=!0}}u.prototype._isBuffer=!0;function ro(o,e,t){var r=o[e];o[e]=o[t],o[t]=r}u.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ro(this,t,t+1);return this};u.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ro(this,t,t+3),ro(this,t+1,t+2);return this};u.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ro(this,t,t+7),ro(this,t+1,t+6),ro(this,t+2,t+5),ro(this,t+3,t+4);return this};u.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?_i(this,0,e):Xl.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:u.compare(this,e)===0};u.prototype.inspect=function(){var e="",t=bo.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};ai&&(u.prototype[ai]=u.prototype.inspect);u.prototype.compare=function(e,t,r,s,p){if(Se(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),s===void 0&&(s=0),p===void 0&&(p=this.length),t<0||r>e.length||s<0||p>this.length)throw new RangeError("out of range index");if(s>=p&&t>=r)return 0;if(s>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,s>>>=0,p>>>=0,this===e)return 0;for(var m=p-s,d=r-t,_=Math.min(m,d),l=this.slice(s,p),g=e.slice(t,r),T=0;T<_;++T)if(l[T]!==g[T]){m=l[T],d=g[T];break}return m<d?-1:d<m?1:0};function di(o,e,t,r,s){if(o.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Yt(t)&&(t=s?0:o.length-1),t<0&&(t=o.length+t),t>=o.length){if(s)return-1;t=o.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof e=="string"&&(e=u.from(e,r)),u.isBuffer(e))return e.length===0?-1:ii(o,e,t,r,s);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(o,e,t):Uint8Array.prototype.lastIndexOf.call(o,e,t):ii(o,[e],t,r,s);throw new TypeError("val must be string, number or Buffer")}function ii(o,e,t,r,s){var p=1,m=o.length,d=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(o.length<2||e.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(v,A){return p===1?v[A]:v.readUInt16BE(A*p)}var l;if(s){var g=-1;for(l=t;l<m;l++)if(_(o,l)===_(e,g===-1?0:l-g)){if(g===-1&&(g=l),l-g+1===d)return g*p}else g!==-1&&(l-=l-g),g=-1}else for(t+d>m&&(t=m-d),l=t;l>=0;l--){for(var T=!0,b=0;b<d;b++)if(_(o,l+b)!==_(e,b)){T=!1;break}if(T)return l}return-1}u.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1};u.prototype.indexOf=function(e,t,r){return di(this,e,t,r,!0)};u.prototype.lastIndexOf=function(e,t,r){return di(this,e,t,r,!1)};function Yl(o,e,t,r){t=Number(t)||0;var s=o.length-t;r?(r=Number(r),r>s&&(r=s)):r=s;var p=e.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(e.substr(m*2,2),16);if(Yt(d))return m;o[t+m]=d}return m}function Zl(o,e,t,r){return En(zt(e,o.length-t),o,t,r)}function Jl(o,e,t,r){return En(pu(e),o,t,r)}function Ql(o,e,t,r){return En(gi(e),o,t,r)}function eu(o,e,t,r){return En(mu(e,o.length-t),o,t,r)}u.prototype.write=function(e,t,r,s){if(t===void 0)s="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")s=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,s===void 0&&(s="utf8")):(s=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var m=!1;;)switch(s){case"hex":return Yl(this,e,t,r);case"utf8":case"utf-8":return Zl(this,e,t,r);case"ascii":case"latin1":case"binary":return Jl(this,e,t,r);case"base64":return Ql(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return eu(this,e,t,r);default:if(m)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ou(o,e,t){return e===0&&t===o.length?$t.fromByteArray(o):$t.fromByteArray(o.slice(e,t))}function _i(o,e,t){t=Math.min(o.length,t);for(var r=[],s=e;s<t;){var p=o[s],m=null,d=p>239?4:p>223?3:p>191?2:1;if(s+d<=t){var _,l,g,T;switch(d){case 1:p<128&&(m=p);break;case 2:_=o[s+1],(_&192)===128&&(T=(p&31)<<6|_&63,T>127&&(m=T));break;case 3:_=o[s+1],l=o[s+2],(_&192)===128&&(l&192)===128&&(T=(p&15)<<12|(_&63)<<6|l&63,T>2047&&(T<55296||T>57343)&&(m=T));break;case 4:_=o[s+1],l=o[s+2],g=o[s+3],(_&192)===128&&(l&192)===128&&(g&192)===128&&(T=(p&15)<<18|(_&63)<<12|(l&63)<<6|g&63,T>65535&&T<1114112&&(m=T))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),s+=d}return nu(r)}var ci=4096;function nu(o){var e=o.length;if(e<=ci)return String.fromCharCode.apply(String,o);for(var t="",r=0;r<e;)t+=String.fromCharCode.apply(String,o.slice(r,r+=ci));return t}function tu(o,e,t){var r="";t=Math.min(o.length,t);for(var s=e;s<t;++s)r+=String.fromCharCode(o[s]&127);return r}function ru(o,e,t){var r="";t=Math.min(o.length,t);for(var s=e;s<t;++s)r+=String.fromCharCode(o[s]);return r}function au(o,e,t){var r=o.length;(!e||e<0)&&(e=0),(!t||t<0||t>r)&&(t=r);for(var s="",p=e;p<t;++p)s+=du[o[p]];return s}function iu(o,e,t){for(var r=o.slice(e,t),s="",p=0;p<r.length-1;p+=2)s+=String.fromCharCode(r[p]+r[p+1]*256);return s}u.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var s=this.subarray(e,t);return Object.setPrototypeOf(s,u.prototype),s};function q(o,e,t){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||q(e,t,this.length);for(var s=this[e],p=1,m=0;++m<t&&(p*=256);)s+=this[e+m]*p;return s};u.prototype.readUintBE=u.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||q(e,t,this.length);for(var s=this[e+--t],p=1;t>0&&(p*=256);)s+=this[e+--t]*p;return s};u.prototype.readUint8=u.prototype.readUInt8=function(e,t){return e=e>>>0,t||q(e,1,this.length),this[e]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||q(e,2,this.length),this[e]|this[e+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||q(e,2,this.length),this[e]<<8|this[e+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||q(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||q(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};u.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||q(e,t,this.length);for(var s=this[e],p=1,m=0;++m<t&&(p*=256);)s+=this[e+m]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};u.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||q(e,t,this.length);for(var s=t,p=1,m=this[e+--s];s>0&&(p*=256);)m+=this[e+--s]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};u.prototype.readInt8=function(e,t){return e=e>>>0,t||q(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};u.prototype.readInt16LE=function(e,t){e=e>>>0,t||q(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};u.prototype.readInt16BE=function(e,t){e=e>>>0,t||q(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};u.prototype.readInt32LE=function(e,t){return e=e>>>0,t||q(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};u.prototype.readInt32BE=function(e,t){return e=e>>>0,t||q(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};u.prototype.readFloatLE=function(e,t){return e=e>>>0,t||q(e,4,this.length),So.read(this,e,!0,23,4)};u.prototype.readFloatBE=function(e,t){return e=e>>>0,t||q(e,4,this.length),So.read(this,e,!1,23,4)};u.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||q(e,8,this.length),So.read(this,e,!0,52,8)};u.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||q(e,8,this.length),So.read(this,e,!1,52,8)};function Q(o,e,t,r,s,p){if(!u.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>s||e<p)throw new RangeError('"value" argument is out of bounds');if(t+r>o.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,t,r,s){if(e=+e,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;Q(this,e,t,r,p,0)}var m=1,d=0;for(this[t]=e&255;++d<r&&(m*=256);)this[t+d]=e/m&255;return t+r};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,t,r,s){if(e=+e,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;Q(this,e,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=e&255;--m>=0&&(d*=256);)this[t+m]=e/d&255;return t+r};u.prototype.writeUint8=u.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,1,255,0),this[t]=e&255,t+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};u.prototype.writeIntLE=function(e,t,r,s){if(e=+e,t=t>>>0,!s){var p=Math.pow(2,8*r-1);Q(this,e,t,r,p-1,-p)}var m=0,d=1,_=0;for(this[t]=e&255;++m<r&&(d*=256);)e<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(e/d>>0)-_&255;return t+r};u.prototype.writeIntBE=function(e,t,r,s){if(e=+e,t=t>>>0,!s){var p=Math.pow(2,8*r-1);Q(this,e,t,r,p-1,-p)}var m=r-1,d=1,_=0;for(this[t+m]=e&255;--m>=0&&(d*=256);)e<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(e/d>>0)-_&255;return t+r};u.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};u.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};u.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};u.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};u.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||Q(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function li(o,e,t,r,s,p){if(t+r>o.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ui(o,e,t,r,s){return e=+e,t=t>>>0,s||li(o,e,t,4,34028234663852886e22,-34028234663852886e22),So.write(o,e,t,r,23,4),t+4}u.prototype.writeFloatLE=function(e,t,r){return ui(this,e,t,!0,r)};u.prototype.writeFloatBE=function(e,t,r){return ui(this,e,t,!1,r)};function fi(o,e,t,r,s){return e=+e,t=t>>>0,s||li(o,e,t,8,17976931348623157e292,-17976931348623157e292),So.write(o,e,t,r,52,8),t+8}u.prototype.writeDoubleLE=function(e,t,r){return fi(this,e,t,!0,r)};u.prototype.writeDoubleBE=function(e,t,r){return fi(this,e,t,!1,r)};u.prototype.copy=function(e,t,r,s){if(!u.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!s&&s!==0&&(s=this.length),t>=e.length&&(t=e.length),t||(t=0),s>0&&s<r&&(s=r),s===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),e.length-t<s-r&&(s=e.length-t+r);var p=s-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,s):Uint8Array.prototype.set.call(e,this.subarray(r,s),t),p};u.prototype.fill=function(e,t,r,s){if(typeof e=="string"){if(typeof t=="string"?(s=t,t=0,r=this.length):typeof r=="string"&&(s=r,r=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!u.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(e.length===1){var p=e.charCodeAt(0);(s==="utf8"&&p<128||s==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var m;if(typeof e=="number")for(m=t;m<r;++m)this[m]=e;else{var d=u.isBuffer(e)?e:u.from(e,s),_=d.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%_]}return this};var cu=/[^+/0-9A-Za-z-_]/g;function su(o){if(o=o.split("=")[0],o=o.trim().replace(cu,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function zt(o,e){e=e||1/0;for(var t,r=o.length,s=null,p=[],m=0;m<r;++m){if(t=o.charCodeAt(m),t>55295&&t<57344){if(!s){if(t>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(e-=3)>-1&&p.push(239,191,189);continue}s=t;continue}if(t<56320){(e-=3)>-1&&p.push(239,191,189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(e-=3)>-1&&p.push(239,191,189);if(s=null,t<128){if((e-=1)<0)break;p.push(t)}else if(t<2048){if((e-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function pu(o){for(var e=[],t=0;t<o.length;++t)e.push(o.charCodeAt(t)&255);return e}function mu(o,e){for(var t,r,s,p=[],m=0;m<o.length&&!((e-=2)<0);++m)t=o.charCodeAt(m),r=t>>8,s=t%256,p.push(s),p.push(r);return p}function gi(o){return $t.toByteArray(su(o))}function En(o,e,t,r){for(var s=0;s<r&&!(s+t>=e.length||s>=o.length);++s)e[s+t]=o[s];return s}function Se(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Yt(o){return o!==o}var du=function(){for(var o="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var r=t*16,s=0;s<16;++s)e[r+s]=o[t]+o[s];return e}()});var bi=S((p0,Si)=>{n();var V=Si.exports={},be,we;function Zt(){throw new Error("setTimeout has not been defined")}function Jt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?be=setTimeout:be=Zt}catch(o){be=Zt}try{typeof clearTimeout=="function"?we=clearTimeout:we=Jt}catch(o){we=Jt}})();function Ti(o){if(be===setTimeout)return setTimeout(o,0);if((be===Zt||!be)&&setTimeout)return be=setTimeout,setTimeout(o,0);try{return be(o,0)}catch(e){try{return be.call(null,o,0)}catch(t){return be.call(this,o,0)}}}function _u(o){if(we===clearTimeout)return clearTimeout(o);if((we===Jt||!we)&&clearTimeout)return we=clearTimeout,clearTimeout(o);try{return we(o)}catch(e){try{return we.call(null,o)}catch(t){return we.call(this,o)}}}var Re=[],wo=!1,ao,Pn=-1;function lu(){!wo||!ao||(wo=!1,ao.length?Re=ao.concat(Re):Pn=-1,Re.length&&xi())}function xi(){if(!wo){var o=Ti(lu);wo=!0;for(var e=Re.length;e;){for(ao=Re,Re=[];++Pn<e;)ao&&ao[Pn].run();Pn=-1,e=Re.length}ao=null,wo=!1,_u(o)}}V.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];Re.push(new yi(o,e)),Re.length===1&&!wo&&Ti(xi)};function yi(o,e){this.fun=o,this.array=e}yi.prototype.run=function(){this.fun.apply(null,this.array)};V.title="browser";V.browser=!0;V.env={};V.argv=[];V.version="";V.versions={};function Me(){}V.on=Me;V.addListener=Me;V.once=Me;V.off=Me;V.removeListener=Me;V.removeAllListeners=Me;V.emit=Me;V.prependListener=Me;V.prependOnceListener=Me;V.listeners=function(o){return[]};V.binding=function(o){throw new Error("process.binding is not supported")};V.cwd=function(){return"/"};V.chdir=function(o){throw new Error("process.chdir is not supported")};V.umask=function(){return 0}});var a,c,uu,i,n=x(()=>{a=h(hi()),c=h(bi()),uu=function(o){function e(){var r=this||self;return delete o.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object),i=uu});var Oe,io=x(()=>{"use strict";n();Oe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Qt={};W(Qt,{css:()=>vi,default:()=>fu});var vi,fu,er=x(()=>{"use strict";n();vi=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vi));fu={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Li=S((x0,ki)=>{n();var Tu=typeof i=="object"&&i&&i.Object===Object&&i;ki.exports=Tu});var en=S((y0,Ni)=>{n();var xu=Li(),yu=typeof self=="object"&&self&&self.Object===Object&&self,Su=xu||yu||Function("return this")();Ni.exports=Su});var Rn=S((S0,Di)=>{n();var bu=en(),wu=bu.Symbol;Di.exports=wu});var Ei=S((b0,Ci)=>{n();function vu(o,e){for(var t=-1,r=o==null?0:o.length,s=Array(r);++t<r;)s[t]=e(o[t],t,o);return s}Ci.exports=vu});var nr=S((w0,Pi)=>{n();var Au=Array.isArray;Pi.exports=Au});var Fi=S((v0,Oi)=>{n();var Ri=Rn(),Mi=Object.prototype,Iu=Mi.hasOwnProperty,ku=Mi.toString,on=Ri?Ri.toStringTag:void 0;function Lu(o){var e=Iu.call(o,on),t=o[on];try{o[on]=void 0;var r=!0}catch(p){}var s=ku.call(o);return r&&(e?o[on]=t:delete o[on]),s}Oi.exports=Lu});var Bi=S((A0,Wi)=>{n();var Nu=Object.prototype,Du=Nu.toString;function Cu(o){return Du.call(o)}Wi.exports=Cu});var Mn=S((I0,Vi)=>{n();var Ui=Rn(),Eu=Fi(),Pu=Bi(),Ru="[object Null]",Mu="[object Undefined]",Gi=Ui?Ui.toStringTag:void 0;function Ou(o){return o==null?o===void 0?Mu:Ru:Gi&&Gi in Object(o)?Eu(o):Pu(o)}Vi.exports=Ou});var tr=S((k0,Hi)=>{n();function Fu(o){return o!=null&&typeof o=="object"}Hi.exports=Fu});var qi=S((L0,$i)=>{n();var Wu=Mn(),Bu=tr(),Uu="[object Symbol]";function Gu(o){return typeof o=="symbol"||Bu(o)&&Wu(o)==Uu}$i.exports=Gu});var Zi=S((N0,Yi)=>{n();var ji=Rn(),Vu=Ei(),Hu=nr(),$u=qi(),qu=1/0,zi=ji?ji.prototype:void 0,Ki=zi?zi.toString:void 0;function Xi(o){if(typeof o=="string")return o;if(Hu(o))return Vu(o,Xi)+"";if($u(o))return Ki?Ki.call(o):"";var e=o+"";return e=="0"&&1/o==-qu?"-0":e}Yi.exports=Xi});var rr=S((D0,Ji)=>{n();var ju=Zi();function zu(o){return o==null?"":ju(o)}Ji.exports=zu});var ec=S((C0,Qi)=>{n();function Ku(o,e,t){var r=-1,s=o.length;e<0&&(e=-e>s?0:s+e),t=t>s?s:t,t<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var p=Array(s);++r<s;)p[r]=o[r+e];return p}Qi.exports=Ku});var nc=S((E0,oc)=>{n();var Xu=ec();function Yu(o,e,t){var r=o.length;return t=t===void 0?r:t,!e&&t>=r?o:Xu(o,e,t)}oc.exports=Yu});var ar=S((P0,tc)=>{n();var Zu="\\ud800-\\udfff",Ju="\\u0300-\\u036f",Qu="\\ufe20-\\ufe2f",ef="\\u20d0-\\u20ff",of=Ju+Qu+ef,nf="\\ufe0e\\ufe0f",tf="\\u200d",rf=RegExp("["+tf+Zu+of+nf+"]");function af(o){return rf.test(o)}tc.exports=af});var ac=S((R0,rc)=>{n();function cf(o){return o.split("")}rc.exports=cf});var lc=S((M0,_c)=>{n();var ic="\\ud800-\\udfff",sf="\\u0300-\\u036f",pf="\\ufe20-\\ufe2f",mf="\\u20d0-\\u20ff",df=sf+pf+mf,_f="\\ufe0e\\ufe0f",lf="["+ic+"]",ir="["+df+"]",cr="\\ud83c[\\udffb-\\udfff]",uf="(?:"+ir+"|"+cr+")",cc="[^"+ic+"]",sc="(?:\\ud83c[\\udde6-\\uddff]){2}",pc="[\\ud800-\\udbff][\\udc00-\\udfff]",ff="\\u200d",mc=uf+"?",dc="["+_f+"]?",gf="(?:"+ff+"(?:"+[cc,sc,pc].join("|")+")"+dc+mc+")*",hf=dc+mc+gf,Tf="(?:"+[cc+ir+"?",ir,sc,pc,lf].join("|")+")",xf=RegExp(cr+"(?="+cr+")|"+Tf+hf,"g");function yf(o){return o.match(xf)||[]}_c.exports=yf});var fc=S((O0,uc)=>{n();var Sf=ac(),bf=ar(),wf=lc();function vf(o){return bf(o)?wf(o):Sf(o)}uc.exports=vf});var hc=S((F0,gc)=>{n();var Af=nc(),If=ar(),kf=fc(),Lf=rr();function Nf(o){return function(e){e=Lf(e);var t=If(e)?kf(e):void 0,r=t?t[0]:e.charAt(0),s=t?Af(t,1).join(""):e.slice(1);return r[o]()+s}}gc.exports=Nf});var xc=S((W0,Tc)=>{n();var Df=hc(),Cf=Df("toUpperCase");Tc.exports=Cf});var Sc=S((B0,yc)=>{n();var Ef=rr(),Pf=xc();function Rf(o){return Pf(Ef(o).toLowerCase())}yc.exports=Rf});var sr=x(()=>{"use strict";n()});var pr=x(()=>{"use strict";n()});var bc=x(()=>{"use strict";n()});var wc=x(()=>{"use strict";n()});var co,vo,ze=x(()=>{"use strict";n();co=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),vo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var vc,$0,Ac,q0,R=x(()=>{"use strict";n();ze();vc=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(vc||{}),$0=f(f({},vo.WindowProviderRequestEnums),vc),Ac=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(Ac||{}),q0=f(f({},vo.WindowProviderResponseEnums),Ac)});var Ic=x(()=>{"use strict";n()});var kc=x(()=>{"use strict";n()});var ve,ee=x(()=>{"use strict";n();ve=(s=>(s.raw="raw",s.text="text",s.decimal="decimal",s.smart="smart",s))(ve||{})});var Lc=x(()=>{"use strict";n()});var Nc=x(()=>{"use strict";n()});var Dc=x(()=>{"use strict";n()});var B=x(()=>{"use strict";n();pr();bc();wc();R();Ic();kc();ee();Lc();Nc();Dc()});var Ae=x(()=>{"use strict";n()});var Uc=x(()=>{"use strict";n()});var lr,Gc=x(()=>{"use strict";n();lr=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(lr||{})});var Vc=x(()=>{"use strict";n()});var ur=x(()=>{"use strict";n()});var Hc=x(()=>{"use strict";n()});var Io,$c,cv,qc,sv,jc,pv,mv,Wf,ko=x(()=>{"use strict";n();B();Io={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:$c,egldLabel:cv}=Io["devnet"],{chainId:qc,egldLabel:sv}=Io["testnet"],{chainId:jc,egldLabel:pv}=Io["mainnet"],mv={["devnet"]:$c,["testnet"]:qc,["mainnet"]:jc},Wf={[$c]:"devnet",[qc]:"testnet",[jc]:"mainnet"}});var Bn=x(()=>{"use strict";n()});var Ie,zc=x(()=>{"use strict";n();Ie=require("@multiversx/sdk-web-wallet-provider")});var ke,Lo=x(()=>{"use strict";n();ke=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Kc,Xc,fr,gv,hv,gr=x(()=>{"use strict";n();Lo();fr=String((Xc=(Kc=ke.safeWindow)==null?void 0:Kc.navigator)==null?void 0:Xc.userAgent),gv=/^((?!chrome|android).)*safari/i.test(fr),hv=/firefox/i.test(fr)&&/windows/i.test(fr)});var hr,Un,tn,Tr,rn,me,so,Yc,Gn,Zc,Jc,de,Qc,es,k=x(()=>{"use strict";n();sr();Ae();Uc();Gc();Vc();ur();Hc();ko();Bn();zc();gr();hr=.01,Un=1500,tn=5e4,Tr=5e4,rn=1e9,me=18,so=4,Yc=1,Gn="logout",Zc="login",Jc="N/A",de="0",Qc="...",es="EGLD-000000"});var xr={};W(xr,{css:()=>ns,default:()=>Uf});var ns,Uf,yr=x(()=>{"use strict";n();ns=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ns));Uf={copy:"dapp-core-component__copyButton-styles__copy"}});var br={};W(br,{css:()=>as,default:()=>Vf});var as,Vf,wr=x(()=>{"use strict";n();as=`.dapp-core-component__TransactionDataStyles__transactionData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(as));Vf={transactionData:"dapp-core-component__TransactionDataStyles__transactionData",transactionDataLabel:"dapp-core-component__TransactionDataStyles__transactionDataLabel",transactionDataValueWrapper:"dapp-core-component__TransactionDataStyles__transactionDataValueWrapper",transactionDataValue:"dapp-core-component__TransactionDataStyles__transactionDataValue",transactionDataValueText:"dapp-core-component__TransactionDataStyles__transactionDataValueText",transactionDataValueCopy:"dapp-core-component__TransactionDataStyles__transactionDataValueCopy"}});var cn,Hn=x(()=>{"use strict";n();cn=()=>Date.now()/1e3});var ps=x(()=>{"use strict";n()});var ms=x(()=>{"use strict";n()});var vr=x(()=>{"use strict";n();Hn();ps();ms()});var Ar={};W(Ar,{clear:()=>Kf,getItem:()=>jf,localStorageKeys:()=>Xe,removeItem:()=>zf,setItem:()=>qf});var Xe,$n,qf,jf,zf,Kf,Do=x(()=>{"use strict";n();vr();Xe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},$n=typeof localStorage!="undefined",qf=({key:o,data:e,expires:t})=>{!$n||localStorage.setItem(String(o),JSON.stringify({expires:t,data:e}))},jf=o=>{if(!$n)return;let e=localStorage.getItem(String(o));if(!e)return null;let t=JSON.parse(e);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:cn()>=t.expires?(localStorage.removeItem(String(o)),null):t.data},zf=o=>{!$n||localStorage.removeItem(String(o))},Kf=()=>{!$n||localStorage.clear()}});var Ir={};W(Ir,{clear:()=>us,getItem:()=>_s,removeItem:()=>ls,setItem:()=>ds,storage:()=>Xf});var ds,_s,ls,us,Xf,fs=x(()=>{"use strict";n();ds=({key:o,data:e,expires:t})=>{sessionStorage.setItem(String(o),JSON.stringify({expires:t,data:e}))},_s=o=>{let e=sessionStorage.getItem(String(o));if(!e)return null;let t=JSON.parse(e);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(o)),null):t.data},ls=o=>sessionStorage.removeItem(String(o)),us=()=>sessionStorage.clear(),Xf={setItem:ds,getItem:_s,removeItem:ls,clear:us}});var mo,Co=x(()=>{"use strict";n();Do();fs();mo={session:Ir,local:Ar}});var kr,U,ae,G=x(()=>{"use strict";n();kr=require("@reduxjs/toolkit");k();U=(0,kr.createAction)(Gn),ae=(0,kr.createAction)(Zc,o=>({payload:o}))});var Nr,gs,hs,qn,Lr,Ts,jn,Yf,Dr,xA,Zf,Jf,yA,SA,bA,Qf,eg,zn,Kn=x(()=>{"use strict";n();Nr=require("@multiversx/sdk-core"),gs=require("@reduxjs/toolkit"),hs=require("redux-persist");k();Co();Do();G();qn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:de},Lr={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":qn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ts=(0,gs.createSlice)({name:"accountInfoSlice",initialState:Lr,reducers:{setAddress:(o,e)=>{let t=e.payload;o.address=t,o.publicKey=t?new Nr.Address(t).hex():""},setAccount:(o,e)=>{let t=o.address===e.payload.address;o.accounts={[o.address]:t?e.payload:qn},o.shard=e.payload.shard,o.isAccountLoading=!1,o.accountLoadingError=null},setAccountNonce:(o,e)=>{let{address:t}=o;o.accounts[t].nonce=e.payload},setAccountShard:(o,e)=>{o.shard=e.payload},setLedgerAccount:(o,e)=>{o.ledgerAccount=e.payload},updateLedgerAccount:(o,e)=>{o.ledgerAccount!=null&&(o.ledgerAccount.index=e.payload.index,o.ledgerAccount.address=e.payload.address)},setWalletConnectAccount:(o,e)=>{o.walletConnectAccount=e.payload},setIsAccountLoading:(o,e)=>{o.isAccountLoading=e.payload,o.accountLoadingError=null},setAccountLoadingError:(o,e)=>{o.accountLoadingError=e.payload,o.isAccountLoading=!1},setWebsocketEvent:(o,e)=>{o.websocketEvent={timestamp:Date.now(),message:e.payload}},setWebsocketBatchEvent:(o,e)=>{o.websocketBatchEvent={timestamp:Date.now(),data:e.payload}}},extraReducers:o=>{o.addCase(U,()=>(mo.local.removeItem(Xe.loginExpiresAt),Lr)),o.addCase(ae,(e,t)=>{let{address:r}=t.payload;e.address=r,e.publicKey=new Nr.Address(r).hex()}),o.addCase(hs.REHYDRATE,(e,t)=>{var l;if(!((l=t.payload)!=null&&l.account))return;let{account:r}=t.payload,{address:s,shard:p,accounts:m,publicKey:d}=r;e.address=s,e.shard=p;let _=m&&s in m;e.accounts=_?m:Lr.accounts,e.publicKey=d})}}),{setAccount:jn,setAddress:Yf,setAccountNonce:Dr,setAccountShard:xA,setLedgerAccount:Zf,updateLedgerAccount:Jf,setWalletConnectAccount:yA,setIsAccountLoading:SA,setAccountLoadingError:bA,setWebsocketEvent:Qf,setWebsocketBatchEvent:eg}=Ts.actions,zn=Ts.reducer});function sn(){return new Date().setHours(new Date().getHours()+24)}function pn(o){mo.local.setItem({key:Xe.loginExpiresAt,data:o,expires:o})}var Cr=x(()=>{"use strict";n();Co();Do()});var ys,xs,Ss,EA,og,ng,bs,PA,tg,ws,RA,MA,OA,Xn,Yn=x(()=>{"use strict";n();ys=require("@reduxjs/toolkit");Cr();R();G();xs={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ss=(0,ys.createSlice)({name:"loginInfoSlice",initialState:xs,reducers:{setLoginMethod:(o,e)=>{o.loginMethod=e.payload},setTokenLogin:(o,e)=>{o.tokenLogin=e.payload},setTokenLoginSignature:(o,e)=>{(o==null?void 0:o.tokenLogin)!=null&&(o.tokenLogin.signature=e.payload)},setWalletLogin:(o,e)=>{o.walletLogin=e.payload},setWalletConnectLogin:(o,e)=>{o.walletConnectLogin=e.payload},setLedgerLogin:(o,e)=>{o.ledgerLogin=e.payload},setWebviewLogin:(o,e)=>{o.webviewLogin=e.payload},invalidateLoginSession:o=>{o.isLoginSessionInvalid=!0},setLogoutRoute:(o,e)=>{o.logoutRoute=e.payload},setIsWalletConnectV2Initialized:(o,e)=>{o.isWalletConnectV2Initialized=e.payload}},extraReducers:o=>{o.addCase(U,()=>xs),o.addCase(ae,(e,t)=>{e.isLoginSessionInvalid=!1,e.loginMethod=t.payload.loginMethod,e.iframeLoginType=t.payload.iframeLoginType,pn(sn())})}}),{setLoginMethod:EA,setWalletConnectLogin:og,setLedgerLogin:ng,setTokenLogin:bs,setTokenLoginSignature:PA,setWalletLogin:tg,invalidateLoginSession:ws,setLogoutRoute:RA,setIsWalletConnectV2Initialized:MA,setWebviewLogin:OA}=Ss.actions,Xn=Ss.reducer});var As,vs,Is,UA,rg,GA,ag,Zn,Jn=x(()=>{"use strict";n();As=require("@reduxjs/toolkit");G();vs={},Is=(0,As.createSlice)({name:"modalsSlice",initialState:vs,reducers:{setTxSubmittedModal:(o,e)=>{o.txSubmittedModal=e.payload},setNotificationModal:(o,e)=>{o.notificationModal=e.payload},clearTxSubmittedModal:o=>{o.txSubmittedModal=void 0},clearNotificationModal:o=>{o.notificationModal=void 0}},extraReducers:o=>{o.addCase(U,()=>vs)}}),{setTxSubmittedModal:UA,setNotificationModal:rg,clearTxSubmittedModal:GA,clearNotificationModal:ag}=Is.actions,Zn=Is.reducer});var H,X=x(()=>{"use strict";n();io();H=()=>{if(!Oe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:e,hash:t,origin:r,href:s,search:p}}=window;return{pathname:e,hash:t,origin:r,href:s,search:p}}});var ks=x(()=>{"use strict";n();X()});var Ls=x(()=>{"use strict";n();Y()});var Ns=x(()=>{"use strict";n();Lo()});var Y=x(()=>{"use strict";n();ks();Ls();X();Ns()});var mn=x(()=>{"use strict";n();Y()});var Cs=x(()=>{"use strict";n();mn()});function Es(o){return o[Math.floor(Math.random()*o.length)]}var Ps=x(()=>{"use strict";n()});var Er=x(()=>{"use strict";n();ur()});var Be=x(()=>{"use strict";n();Cs();Ps();Er()});var Rs,Ms,Os,Pr,cg,Fs,xI,yI,sg,Qn,et=x(()=>{"use strict";n();Rs=require("@reduxjs/toolkit"),Ms=h(require("lodash.omit")),Os=require("redux-persist");Bn();G();Be();Pr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},cg={network:Pr},Fs=(0,Rs.createSlice)({name:"appConfig",initialState:cg,reducers:{initializeNetworkConfig:(o,e)=>{let t=Es(e.payload.walletConnectV2RelayAddresses),r=(0,Ms.default)(e.payload,"walletConnectV2RelayAddresses");o.network=I(f(f({},o.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(o,e)=>{o.network=f(f({},o.network),e.payload)},setCustomWalletAddress:(o,e)=>{o.network.customWalletAddress=e.payload}},extraReducers:o=>{o.addCase(U,e=>{e.network.customWalletAddress=void 0}),o.addCase(Os.REHYDRATE,(e,t)=>{var s,p;if(!((p=(s=t.payload)==null?void 0:s.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;e.network.customWalletAddress=r})}}),{initializeNetworkConfig:xI,updateNetworkConfig:yI,setCustomWalletAddress:sg}=Fs.actions,Qn=Fs.reducer});var Ws,Rr,Bs,II,kI,LI,ot,nt=x(()=>{"use strict";n();Ws=require("@reduxjs/toolkit");B();G();Rr={isSigning:!1,signedSessions:{}},Bs=(0,Ws.createSlice)({name:"signedMessageInfoSliceState",initialState:Rr,reducers:{setSignSession:(o,e)=>{let{sessionId:t,signedSession:r,errorMessage:s}=e.payload;s&&(o.errorMessage=s),o.isSigning=r.status==="pending",o.signedSessions[t]=f(f({},o.signedSessions[t]),r)},setSignSessionState:(o,e)=>f(f({},o),e.payload),clearSignedMessageInfo:()=>Rr},extraReducers:o=>{o.addCase(U,()=>Rr)}}),{setSignSession:II,clearSignedMessageInfo:kI,setSignSessionState:LI}=Bs.actions,ot=Bs.reducer});var Gs,Vs,Us,Hs,pg,mg,MI,dg,tt,rt=x(()=>{"use strict";n();Gs=require("@reduxjs/toolkit"),Vs=require("redux-persist");B();Hn();G();Us={customToasts:[],transactionToasts:[]},Hs=(0,Gs.createSlice)({name:"toastsSlice",initialState:Us,reducers:{addCustomToast:(o,e)=>{let t=e.payload.toastId||`custom-toast-${o.customToasts.length+1}`,r=o.customToasts.findIndex(s=>s.toastId===t);if(r!==-1){o.customToasts[r]=I(f(f({},o.customToasts[r]),e.payload),{type:"custom",toastId:t});return}o.customToasts.push(I(f({},e.payload),{type:"custom",toastId:t}))},removeCustomToast:(o,e)=>{o.customToasts=o.customToasts.filter(t=>t.toastId!==e.payload)},addTransactionToast:(o,e)=>{o.transactionToasts.push({type:"transaction",startTimestamp:cn(),toastId:e.payload||`custom-toast-${o.transactionToasts.length+1}`})},removeTransactionToast:(o,e)=>{o.transactionToasts=o.transactionToasts.filter(t=>t.toastId!==e.payload)}},extraReducers:o=>{o.addCase(U,()=>Us),o.addCase(Vs.REHYDRATE,(e,t)=>{var s,p;let r=(p=(s=t.customToasts)==null?void 0:s.filter(m=>!("component"in m)))!=null?p:[];e.customToasts=r})}}),{addCustomToast:pg,removeCustomToast:mg,addTransactionToast:MI,removeTransactionToast:dg}=Hs.actions,tt=Hs.reducer});var $s,Or,Fr,Wr,_g,Mr,qs,BI,lg,Br,at,it=x(()=>{"use strict";n();$s=require("@reduxjs/toolkit");G();Or="Transaction failed",Fr="Transaction successful",Wr="Processing transaction",_g="Transaction submitted",Mr={},qs=(0,$s.createSlice)({name:"transactionsInfo",initialState:Mr,reducers:{setTransactionsDisplayInfo(o,e){let{sessionId:t,transactionsDisplayInfo:r}=e.payload;t!=null&&(o[t]={errorMessage:(r==null?void 0:r.errorMessage)||Or,successMessage:(r==null?void 0:r.successMessage)||Fr,processingMessage:(r==null?void 0:r.processingMessage)||Wr,submittedMessage:(r==null?void 0:r.submittedMessage)||_g,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(o,e){e.payload!=null&&delete o[e.payload]},clearTransactionsInfo:()=>Mr},extraReducers:o=>{o.addCase(U,()=>Mr)}}),{clearTransactionsInfo:BI,setTransactionsDisplayInfo:lg,clearTransactionsInfoForSessionId:Br}=qs.actions,at=qs.reducer});function Po(o){return o!=null&&(wg(o)||Lg(o))}function Ro(o){return o!=null&&(vg(o)||Ng(o))}function Mo(o){return o!=null&&(Ag(o)||Dg(o))}function js(o){return o!=null&&(Ig(o)||Cg(o))}function Ur(o){return o!=null&&kg(o)}function wg(o){return o!=null&&ug.includes(o)}function vg(o){return o!=null&&fg.includes(o)}function Ag(o){return o!=null&&gg.includes(o)}function Ig(o){return o!=null&&hg.includes(o)}function kg(o){return o!=null&&Tg.includes(o)}function Lg(o){return o!=null&&xg.includes(o)}function Ng(o){return o!=null&&yg.includes(o)}function Dg(o){return o!=null&&Sg.includes(o)}function Cg(o){return o!=null&&bg.includes(o)}var ug,fg,gg,hg,Tg,xg,yg,Sg,bg,Oo=x(()=>{"use strict";n();R();ug=["sent"],fg=["success"],gg=["fail","cancelled","timedOut"],hg=["invalid"],Tg=["timedOut"],xg=["pending"],yg=["success"],Sg=["fail","invalid"],bg=["not executed"]});var zs,Ks,dn,Eg,Xs,Ys,Zs,Pg,ct,Rg,Mg,KI,Og,_n,Gr,XI,st,pt=x(()=>{"use strict";n();zs=require("@reduxjs/toolkit"),Ks=require("redux-persist");R();Oo();G();dn={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Eg={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Xs=(0,zs.createSlice)({name:"transactionsSlice",initialState:dn,reducers:{moveTransactionsToSignedState:(o,e)=>{var _,l;let{sessionId:t,transactions:r,errorMessage:s,status:p,redirectRoute:m,customTransactionInformation:d}=e.payload;o.customTransactionInformationForSessionId[t]=f(f(f({},Eg),((_=o.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),o.customTransactionInformationForSessionId[t]||{}),o.signedTransactions[t]={transactions:r,status:p,errorMessage:s,redirectRoute:m,customTransactionInformation:f(f({},o.customTransactionInformationForSessionId[t]),d!=null?d:{})},((l=o==null?void 0:o.transactionsToSign)==null?void 0:l.sessionId)===t&&(o.transactionsToSign=dn.transactionsToSign)},clearSignedTransaction:(o,e)=>{o.signedTransactions[e.payload]&&delete o.signedTransactions[e.payload]},clearTransactionToSign:o=>{o!=null&&o.transactionsToSign&&(o.transactionsToSign=null)},updateSignedTransaction:(o,e)=>{o.signedTransactions=f(f({},o.signedTransactions),e.payload)},updateSignedTransactions:(o,e)=>{let{sessionId:t,status:r,errorMessage:s,transactions:p}=e.payload;o.signedTransactions[t]!=null&&(o.signedTransactions[t].status=r,s!=null&&(o.signedTransactions[t].errorMessage=s),p!=null&&(o.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(o,e)=>{var l,g,T,b,v,A,M,O;let{sessionId:t,status:r,errorMessage:s,transactionHash:p,serverTransaction:m,inTransit:d}=e.payload,_=(g=(l=o.signedTransactions)==null?void 0:l[t])==null?void 0:g.transactions;if(_!=null){o.signedTransactions[t].transactions=_.map(P=>P.hash===p?I(f(f({},m!=null?m:{}),P),{status:r,errorMessage:s,inTransit:d}):P);let z=(b=(T=o.signedTransactions[t])==null?void 0:T.transactions)==null?void 0:b.every(P=>Ro(P.status)),re=(A=(v=o.signedTransactions[t])==null?void 0:v.transactions)==null?void 0:A.some(P=>Mo(P.status)),ce=(O=(M=o.signedTransactions[t])==null?void 0:M.transactions)==null?void 0:O.every(P=>js(P.status));z&&(o.signedTransactions[t].status="success"),re&&(o.signedTransactions[t].status="fail"),ce&&(o.signedTransactions[t].status="invalid")}},setTransactionsToSign:(o,e)=>{o.transactionsToSign=e.payload;let{sessionId:t,customTransactionInformation:r}=e.payload;o.customTransactionInformationForSessionId[t]=r,o.signTransactionsError=null},clearAllTransactionsToSign:o=>{o.transactionsToSign=dn.transactionsToSign,o.signTransactionsError=null},clearAllSignedTransactions:o=>{o.signedTransactions=dn.signedTransactions},setSignTransactionsError:(o,e)=>{o.signTransactionsError=e.payload},setSignTransactionsCancelMessage:(o,e)=>{o.signTransactionsCancelMessage=e.payload},updateSignedTransactionsCustomTransactionInformation:(o,e)=>{let{sessionId:t,customTransactionInformationOverrides:r}=e.payload;o.signedTransactions[t]!=null&&(o.signedTransactions[t].customTransactionInformation=f(f({},o.signedTransactions[t].customTransactionInformation),r))}},extraReducers:o=>{o.addCase(U,()=>dn),o.addCase(Ks.REHYDRATE,(e,t)=>{var m;if(e.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:s}=t.payload.transactions,p=Object.entries(r).reduce((d,[_,l])=>{let g=new Date(_),T=new Date;return T.setHours(T.getHours()+5),T-g>0||(d[_]=l),d},{});s!=null&&(e.customTransactionInformationForSessionId=s),r!=null&&(e.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ys,updateSignedTransactions:Zs,setTransactionsToSign:Pg,clearAllTransactionsToSign:ct,clearAllSignedTransactions:Rg,clearSignedTransaction:Mg,clearTransactionToSign:KI,setSignTransactionsError:Og,setSignTransactionsCancelMessage:_n,moveTransactionsToSignedState:Gr,updateSignedTransactionsCustomTransactionInformation:XI}=Xs.actions,st=Xs.reducer});var Js,Vr,Qs,QI,ek,Fg,ok,mt,dt=x(()=>{"use strict";n();Js=require("@reduxjs/toolkit");G();Vr={},Qs=(0,Js.createSlice)({name:"batchTransactionsSlice",initialState:Vr,reducers:{setBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},updateBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},clearBatchTransactions:(o,e)=>{delete o[e.payload.batchId]},clearAllBatchTransactions:()=>Vr},extraReducers:o=>{o.addCase(U,()=>Vr)}}),{setBatchTransactions:QI,updateBatchTransactions:ek,clearBatchTransactions:Fg,clearAllBatchTransactions:ok}=Qs.actions,mt=Qs.reducer});var op,ep,np,ak,tp,Hr=x(()=>{"use strict";n();op=require("@reduxjs/toolkit");G();ep={},np=(0,op.createSlice)({name:"dappConfigSlice",initialState:ep,reducers:{setDappConfig:(o,e)=>e.payload},extraReducers:o=>{o.addCase(U,()=>ep)}}),{setDappConfig:ak}=np.actions,tp=np.reducer});var E=x(()=>{"use strict";n();Kn();Yn();Jn();et();nt();rt();it();pt();dt();Hr()});var $r=x(()=>{"use strict";n()});var ip,Gg,Vg,_o,ut=x(()=>{"use strict";n();ip=require("@reduxjs/toolkit");$r();Kn();dt();Hr();Yn();Jn();et();nt();rt();it();pt();Gg={["account"]:zn,["dappConfig"]:tp,["loginInfo"]:Xn,["modals"]:Zn,["networkConfig"]:Qn,["signedMessageInfo"]:ot,["toasts"]:tt,["transactionsInfo"]:at,["transactions"]:st,["batchTransactions"]:mt},Vg=(o={})=>(0,ip.combineReducers)(f(f({},Gg),o)),_o=Vg});var mp={};W(mp,{default:()=>rh,sessionStorageReducers:()=>qr});function Ue(o,e=[]){return{key:o,version:1,storage:sp.default,blacklist:e}}var oe,cp,sp,Hg,ln,$g,qg,jg,zg,Kg,Xg,Yg,Zg,Jg,Qg,pp,eh,qr,oh,nh,th,rh,dp=x(()=>{"use strict";n();oe=require("redux-persist"),cp=h(require("redux-persist/lib/storage")),sp=h(require("redux-persist/lib/storage/session"));ut();E();Kn();dt();Yn();Jn();et();nt();rt();it();pt();$r();Hg={persistReducersStorageType:"localStorage"},ln={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},$g=Ue(ln["account"]),qg=Ue(ln["loginInfo"]),jg=Ue(ln["modals"]),zg=Ue(ln["networkConfig"]),Kg={2:o=>I(f({},o),{networkConfig:Pr})};Xg=Ue("sdk-dapp-transactionsInfo"),Yg=Ue("sdk-dapp-transactions",["transactionsToSign"]),Zg=Ue("sdk-dapp-batchTransactions",["batchTransactions"]),Jg=Ue("sdk-dapp-toasts"),Qg=Ue("sdk-dapp-signedMessageInfo"),pp={key:"sdk-dapp-store",version:2,storage:cp.default,whitelist:Object.keys(ln),migrate:(0,oe.createMigrate)(Kg,{debug:!1})},eh=I(f({},pp),{whitelist:[]}),qr={["toasts"]:(0,oe.persistReducer)(Jg,tt),["transactions"]:(0,oe.persistReducer)(Yg,st),["transactionsInfo"]:(0,oe.persistReducer)(Xg,at),["batchTransactions"]:(0,oe.persistReducer)(Zg,mt),["signedMessageInfo"]:(0,oe.persistReducer)(Qg,ot)},oh=I(f({},qr),{["account"]:(0,oe.persistReducer)($g,zn),["loginInfo"]:(0,oe.persistReducer)(qg,Xn),["modals"]:(0,oe.persistReducer)(jg,Zn),["networkConfig"]:(0,oe.persistReducer)(zg,Qn)}),nh=Hg.persistReducersStorageType==="localStorage",th=nh?(0,oe.persistReducer)(pp,_o(qr)):(0,oe.persistReducer)(eh,_o(oh)),rh=th});var _p={};W(_p,{default:()=>ah});var ah,lp=x(()=>{"use strict";n();ut();ah=_o()});var up={};W(up,{default:()=>ch});var _e,ih,ch,fp=x(()=>{"use strict";n();_e=require("redux-persist"),ih=[_e.FLUSH,_e.REHYDRATE,_e.PAUSE,_e.PERSIST,_e.PURGE,_e.REGISTER],ch=ih});var Tp={};W(Tp,{default:()=>hp});function hp(o){return(0,gp.persistStore)(o)}var gp,xp=x(()=>{"use strict";n();gp=require("redux-persist")});var Im=S((zO,Am)=>{n();var qT=Mn(),jT=nr(),zT=tr(),KT="[object String]";function XT(o){return typeof o=="string"||!jT(o)&&zT(o)&&qT(o)==KT}Am.exports=XT});var Et=S((jF,Cm)=>{n();function ux(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")}Cm.exports=ux});var Pm=S((zF,Em)=>{n();var fx=Mn(),gx=Et(),hx="[object AsyncFunction]",Tx="[object Function]",xx="[object GeneratorFunction]",yx="[object Proxy]";function Sx(o){if(!gx(o))return!1;var e=fx(o);return e==Tx||e==xx||e==hx||e==yx}Em.exports=Sx});var Mm=S((KF,Rm)=>{n();var bx=en(),wx=bx["__core-js_shared__"];Rm.exports=wx});var Wm=S((XF,Fm)=>{n();var fa=Mm(),Om=function(){var o=/[^.]+$/.exec(fa&&fa.keys&&fa.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();function vx(o){return!!Om&&Om in o}Fm.exports=vx});var Um=S((YF,Bm)=>{n();var Ax=Function.prototype,Ix=Ax.toString;function kx(o){if(o!=null){try{return Ix.call(o)}catch(e){}try{return o+""}catch(e){}}return""}Bm.exports=kx});var Vm=S((ZF,Gm)=>{n();var Lx=Pm(),Nx=Wm(),Dx=Et(),Cx=Um(),Ex=/[\\^$.*+?()[\]{}|]/g,Px=/^\[object .+?Constructor\]$/,Rx=Function.prototype,Mx=Object.prototype,Ox=Rx.toString,Fx=Mx.hasOwnProperty,Wx=RegExp("^"+Ox.call(Fx).replace(Ex,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Bx(o){if(!Dx(o)||Nx(o))return!1;var e=Lx(o)?Wx:Px;return e.test(Cx(o))}Gm.exports=Bx});var $m=S((JF,Hm)=>{n();function Ux(o,e){return o==null?void 0:o[e]}Hm.exports=Ux});var Pt=S((QF,qm)=>{n();var Gx=Vm(),Vx=$m();function Hx(o,e){var t=Vx(o,e);return Gx(t)?t:void 0}qm.exports=Hx});var Sn=S((eW,jm)=>{n();var $x=Pt(),qx=$x(Object,"create");jm.exports=qx});var Xm=S((oW,Km)=>{n();var zm=Sn();function jx(){this.__data__=zm?zm(null):{},this.size=0}Km.exports=jx});var Zm=S((nW,Ym)=>{n();function zx(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e}Ym.exports=zx});var Qm=S((tW,Jm)=>{n();var Kx=Sn(),Xx="__lodash_hash_undefined__",Yx=Object.prototype,Zx=Yx.hasOwnProperty;function Jx(o){var e=this.__data__;if(Kx){var t=e[o];return t===Xx?void 0:t}return Zx.call(e,o)?e[o]:void 0}Jm.exports=Jx});var od=S((rW,ed)=>{n();var Qx=Sn(),ey=Object.prototype,oy=ey.hasOwnProperty;function ny(o){var e=this.__data__;return Qx?e[o]!==void 0:oy.call(e,o)}ed.exports=ny});var td=S((aW,nd)=>{n();var ty=Sn(),ry="__lodash_hash_undefined__";function ay(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=ty&&e===void 0?ry:e,this}nd.exports=ay});var ad=S((iW,rd)=>{n();var iy=Xm(),cy=Zm(),sy=Qm(),py=od(),my=td();function $o(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var r=o[e];this.set(r[0],r[1])}}$o.prototype.clear=iy;$o.prototype.delete=cy;$o.prototype.get=sy;$o.prototype.has=py;$o.prototype.set=my;rd.exports=$o});var cd=S((cW,id)=>{n();function dy(){this.__data__=[],this.size=0}id.exports=dy});var pd=S((sW,sd)=>{n();function _y(o,e){return o===e||o!==o&&e!==e}sd.exports=_y});var bn=S((pW,md)=>{n();var ly=pd();function uy(o,e){for(var t=o.length;t--;)if(ly(o[t][0],e))return t;return-1}md.exports=uy});var _d=S((mW,dd)=>{n();var fy=bn(),gy=Array.prototype,hy=gy.splice;function Ty(o){var e=this.__data__,t=fy(e,o);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():hy.call(e,t,1),--this.size,!0}dd.exports=Ty});var ud=S((dW,ld)=>{n();var xy=bn();function yy(o){var e=this.__data__,t=xy(e,o);return t<0?void 0:e[t][1]}ld.exports=yy});var gd=S((_W,fd)=>{n();var Sy=bn();function by(o){return Sy(this.__data__,o)>-1}fd.exports=by});var Td=S((lW,hd)=>{n();var wy=bn();function vy(o,e){var t=this.__data__,r=wy(t,o);return r<0?(++this.size,t.push([o,e])):t[r][1]=e,this}hd.exports=vy});var yd=S((uW,xd)=>{n();var Ay=cd(),Iy=_d(),ky=ud(),Ly=gd(),Ny=Td();function qo(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var r=o[e];this.set(r[0],r[1])}}qo.prototype.clear=Ay;qo.prototype.delete=Iy;qo.prototype.get=ky;qo.prototype.has=Ly;qo.prototype.set=Ny;xd.exports=qo});var bd=S((fW,Sd)=>{n();var Dy=Pt(),Cy=en(),Ey=Dy(Cy,"Map");Sd.exports=Ey});var Ad=S((gW,vd)=>{n();var wd=ad(),Py=yd(),Ry=bd();function My(){this.size=0,this.__data__={hash:new wd,map:new(Ry||Py),string:new wd}}vd.exports=My});var kd=S((hW,Id)=>{n();function Oy(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null}Id.exports=Oy});var wn=S((TW,Ld)=>{n();var Fy=kd();function Wy(o,e){var t=o.__data__;return Fy(e)?t[typeof e=="string"?"string":"hash"]:t.map}Ld.exports=Wy});var Dd=S((xW,Nd)=>{n();var By=wn();function Uy(o){var e=By(this,o).delete(o);return this.size-=e?1:0,e}Nd.exports=Uy});var Ed=S((yW,Cd)=>{n();var Gy=wn();function Vy(o){return Gy(this,o).get(o)}Cd.exports=Vy});var Rd=S((SW,Pd)=>{n();var Hy=wn();function $y(o){return Hy(this,o).has(o)}Pd.exports=$y});var Od=S((bW,Md)=>{n();var qy=wn();function jy(o,e){var t=qy(this,o),r=t.size;return t.set(o,e),this.size+=t.size==r?0:1,this}Md.exports=jy});var Wd=S((wW,Fd)=>{n();var zy=Ad(),Ky=Dd(),Xy=Ed(),Yy=Rd(),Zy=Od();function jo(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var r=o[e];this.set(r[0],r[1])}}jo.prototype.clear=zy;jo.prototype.delete=Ky;jo.prototype.get=Xy;jo.prototype.has=Yy;jo.prototype.set=Zy;Fd.exports=jo});var Ud=S((vW,Bd)=>{n();var Jy="__lodash_hash_undefined__";function Qy(o){return this.__data__.set(o,Jy),this}Bd.exports=Qy});var Vd=S((AW,Gd)=>{n();function eS(o){return this.__data__.has(o)}Gd.exports=eS});var $d=S((IW,Hd)=>{n();var oS=Wd(),nS=Ud(),tS=Vd();function Rt(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new oS;++e<t;)this.add(o[e])}Rt.prototype.add=Rt.prototype.push=nS;Rt.prototype.has=tS;Hd.exports=Rt});var jd=S((kW,qd)=>{n();function rS(o,e,t,r){for(var s=o.length,p=t+(r?1:-1);r?p--:++p<s;)if(e(o[p],p,o))return p;return-1}qd.exports=rS});var Kd=S((LW,zd)=>{n();function aS(o){return o!==o}zd.exports=aS});var Yd=S((NW,Xd)=>{n();function iS(o,e,t){for(var r=t-1,s=o.length;++r<s;)if(o[r]===e)return r;return-1}Xd.exports=iS});var Jd=S((DW,Zd)=>{n();var cS=jd(),sS=Kd(),pS=Yd();function mS(o,e,t){return e===e?pS(o,e,t):cS(o,sS,t)}Zd.exports=mS});var e_=S((CW,Qd)=>{n();var dS=Jd();function _S(o,e){var t=o==null?0:o.length;return!!t&&dS(o,e,0)>-1}Qd.exports=_S});var n_=S((EW,o_)=>{n();function lS(o,e,t){for(var r=-1,s=o==null?0:o.length;++r<s;)if(t(e,o[r]))return!0;return!1}o_.exports=lS});var r_=S((PW,t_)=>{n();function uS(o,e){return o.has(e)}t_.exports=uS});var i_=S((RW,a_)=>{n();var fS=Pt(),gS=en(),hS=fS(gS,"Set");a_.exports=hS});var s_=S((MW,c_)=>{n();function TS(){}c_.exports=TS});var ga=S((OW,p_)=>{n();function xS(o){var e=-1,t=Array(o.size);return o.forEach(function(r){t[++e]=r}),t}p_.exports=xS});var d_=S((FW,m_)=>{n();var ha=i_(),yS=s_(),SS=ga(),bS=1/0,wS=ha&&1/SS(new ha([,-0]))[1]==bS?function(o){return new ha(o)}:yS;m_.exports=wS});var l_=S((WW,__)=>{n();var vS=$d(),AS=e_(),IS=n_(),kS=r_(),LS=d_(),NS=ga(),DS=200;function CS(o,e,t){var r=-1,s=AS,p=o.length,m=!0,d=[],_=d;if(t)m=!1,s=IS;else if(p>=DS){var l=e?null:LS(o);if(l)return NS(l);m=!1,s=kS,_=new vS}else _=e?[]:d;e:for(;++r<p;){var g=o[r],T=e?e(g):g;if(g=t||g!==0?g:0,m&&T===T){for(var b=_.length;b--;)if(_[b]===T)continue e;e&&_.push(T),d.push(g)}else s(_,T,t)||(_!==d&&_.push(T),d.push(g))}return d}__.exports=CS});var f_=S((BW,u_)=>{n();var ES=l_();function PS(o){return o&&o.length?ES(o):[]}u_.exports=PS});var He={};W(He,{css:()=>k_,default:()=>ub});var k_,ub,$e=x(()=>{"use strict";n();k_=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(k_));ub={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Ia={};W(Ia,{css:()=>V_,default:()=>Pb});var V_,Pb,ka=x(()=>{"use strict";n();V_=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V_));Pb={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var Na={};W(Na,{css:()=>H_,default:()=>Mb});var H_,Mb,Da=x(()=>{"use strict";n();H_=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(H_));Mb={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var Ca={};W(Ca,{css:()=>j_,default:()=>Wb});var j_,Wb,Ea=x(()=>{"use strict";n();j_=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(j_));Wb={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var Ra={};W(Ra,{css:()=>Y_,default:()=>Gb});var Y_,Gb,Ma=x(()=>{"use strict";n();Y_=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Y_));Gb={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var Oa={};W(Oa,{css:()=>ol,default:()=>Hb});var ol,Hb,Fa=x(()=>{"use strict";n();ol=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ol));Hb={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var Wa={};W(Wa,{css:()=>sl,default:()=>qb});var sl,qb,Ba=x(()=>{"use strict";n();sl=`.dapp-core-component__confirmAmountStyles__confirmAmount {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sl));qb={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var Ga={};W(Ga,{css:()=>ml,default:()=>zb});var ml,zb,Va=x(()=>{"use strict";n();ml=`.dapp-core-component__confirmFeeStyles__confirmFee {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ml));zb={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var Ha={};W(Ha,{css:()=>ll,default:()=>Xb});var ll,Xb,$a=x(()=>{"use strict";n();ll=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ll));Xb={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var ja={};W(ja,{css:()=>Tl,default:()=>Zb});var Tl,Zb,za=x(()=>{"use strict";n();Tl=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tl));Zb={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Ka={};W(Ka,{css:()=>Sl,default:()=>Qb});var Sl,Qb,Xa=x(()=>{"use strict";n();Sl=`.dapp-core-component__confirmReceiverStyles__receiver {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sl));Qb={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var Ya={};W(Ya,{css:()=>Il,default:()=>o0});var Il,o0,Za=x(()=>{"use strict";n();Il=`.dapp-core-component__signStepBodyStyles__summary {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Il));o0={summary:"dapp-core-component__signStepBodyStyles__summary",fields:"dapp-core-component__signStepBodyStyles__fields",buttons:"dapp-core-component__signStepBodyStyles__buttons"}});var r0={};W(r0,{SignStepBody:()=>t0});module.exports=F(r0);n();n();var no=h(require("react")),kl=require("@multiversx/sdk-core/out"),Ll=h(require("classnames"));n();var Ii=h(require("react"));n();var Qo=h(require("react"));n();io();var wi=()=>!Oe();var gu=()=>y(void 0,null,function*(){return yield Promise.resolve().then(()=>(er(),Qt))}),hu=()=>(er(),F(Qt)).default,or=wi();function Ai({ssrGlobalImportCallback:o,ssrImportCallback:e,clientImportCallback:t}){let[r,s]=Qo.default.useState(or?void 0:hu()),[p,m]=Qo.default.useState(or||t==null?void 0:t()),d=()=>y(this,null,function*(){(o?o():gu()).then(_=>s(_.default)),e==null||e().then(_=>m(_.default))});return(0,Qo.useEffect)(()=>{or&&d()},[]),{globalStyles:r,styles:p}}function N(o,e){return t=>{let{globalStyles:r,styles:s}=Ai({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return Ii.default.createElement(o,I(f({},t),{globalStyles:r!=null?r:{},styles:s!=null?s:{}}))}}n();n();n();var We=h(require("react")),Oc=require("@fortawesome/free-solid-svg-icons"),Fc=require("@fortawesome/react-fontawesome"),Wc=h(require("classnames")),_r=h(Sc());sr();B();n();n();ee();n();n();var Ec=require("@multiversx/sdk-core/out"),mr=h(require("bignumber.js"));ee();n();var Cc=require("@multiversx/sdk-core");function Mf(o){try{let e=new Cc.Address(o);return Boolean(e.bech32())}catch(e){return!1}}function Ao(o){return(o==null?void 0:o.length)===62&&/^\w+$/.test(o)&&Mf(o)}n();n();function On(o){try{let e=atob(o),t=btoa(e),r=a.Buffer.from(o,"base64").toString(),s=a.Buffer.from(r).toString("base64"),p=o===t||t.startsWith(o),m=o===s||s.startsWith(o);if(p&&m)return!0}catch(e){return!1}return!1}n();n();function Fn(o){for(let e=0;e<o.length;e++)if(o.charCodeAt(e)>127)return!1;return!0}function nn(o){let e=o;try{let t=a.Buffer.from(o,"hex").toString();Fn(t)&&t.length>1&&(e=t)}catch(t){}return e}n();n();var Fe=(o,e,t)=>{switch(e){case"text":try{return a.Buffer.from(o,"hex").toString("utf8")}catch(r){}return o;case"decimal":return o!==""?new mr.default(o,16).toString(10):"";case"smart":try{let r=Ec.Address.fromHex(o).toString();if(Ao(r))return r}catch(r){}try{let r=a.Buffer.from(o,"hex").toString("utf8");if(Fn(r))return r;{if(t&&[...t.esdts,...t.nfts].some(m=>r.includes(m)))return r;let s=new mr.default(o,16);return s.isFinite()?s.toString(10):o}}catch(r){}return o;case"raw":default:return o}};n();B();n();var Of=o=>o.toLowerCase().match(/^[0-9a-f]+$/i),Ff=o=>o.length%2===0,Pc=o=>{let e=[];return o&&!Of(o)&&e.push(`Invalid Hex characters on argument @${o}`),o&&!Ff(o)&&e.push(`Odd number of Hex characters on argument @${o}`),e};n();B();var Wn=({parts:o,decodedParts:e,identifier:t})=>{let r=[...e];if(o[0]==="ESDTNFTTransfer"&&o[2]&&(r[2]=Fe(o[2],"decimal")),t==="ESDTNFTTransfer"&&o[1]){let s=a.Buffer.from(String(o[1]),"base64");r[1]=Fe(s.toString("hex"),"decimal")}return r};var Mc=({parts:o,decodeMethod:e,identifier:t,display:r})=>{let s=o.map((m,d)=>{if(o.length>=2&&(d===0&&m.length<64||d===1&&!o[0]))return/[^a-z0-9]/gi.test(m)?Fe(m,e):m;{let _=Pc(m);return _.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,..._]))),Fe(m,e)}});return e==="smart"?Wn({parts:o,decodedParts:s,identifier:t}):s};var dr=({input:o,decodeMethod:e,identifier:t})=>{let r={displayValue:"",validationWarnings:[]};if(!o.includes("@")&&!o.includes(`
`))return r.displayValue=Fe(o,e),r;if(o.includes("@")){let s=o.split("@"),p=Mc({parts:s,identifier:t,decodeMethod:e,display:r});r.displayValue=p.join("@")}if(o.includes(`
`)){let s=o.split(`
`),p=s.map(d=>{let _=a.Buffer.from(d,"base64");return e==="raw"?d:Fe(_.toString("hex"),e)}),m=e==="smart"?Wn({parts:s,decodedParts:p,identifier:t}):p;r.displayValue=m.join(`
`)}return r};var Bc=({className:o,data:e,onDecodeError:t,onDecode:r})=>{let s=(0,_r.default)("raw".toString()),[p,m]=(0,We.useState)({label:s,value:s}),d=Object.values(ve).map(l=>{let g=l.toString();return{label:(0,_r.default)(g),value:g}}),_=l=>{let g=d.find(T=>T.value===l.target.value);g&&m(g)};return(0,We.useEffect)(()=>{let{displayValue:l,validationWarnings:g}=dr({input:e,decodeMethod:ve[p.value]});r(l),g.length>0&&t(g)},[p,e]),We.default.createElement("div",{className:(0,Wc.default)("transaction-data-decode",o)},We.default.createElement("select",{className:"transaction-data-decode-select","data-testid":"transactionDataDecode",value:p.value,onChange:_},d.map(l=>We.default.createElement("option",{key:l.value,value:l.value},l.label))),We.default.createElement(Fc.FontAwesomeIcon,{icon:Oc.faChevronDown,className:"transaction-data-decode-select-icon"}))};n();var C=h(require("react")),po=h(require("classnames"));k();n();n();var No=h(require("react")),Vn=require("@fortawesome/free-solid-svg-icons"),Sr=require("@fortawesome/react-fontawesome"),ts=h(require("classnames"));n();io();function Bf(o){let e=!1,t=document==null?void 0:document.createElement("textarea");t.value=o,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),e=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(t),e}function os(o){return y(this,null,function*(){if(!Oe())return!1;let e=!1;return navigator.clipboard?e=yield navigator.clipboard.writeText(o).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):e=Bf(o),e})}var Gf=({text:o,className:e="dapp-copy-button",copyIcon:t=Vn.faCopy,successIcon:r=Vn.faCheck,styles:s})=>{let[p,m]=(0,No.useState)({default:!0,success:!1});return No.default.createElement("a",{href:"/#",onClick:_=>y(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let l=o&&o.trim();m({default:!1,success:yield os(l)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,ts.default)(s==null?void 0:s.copy,e)},p.default||!p.success?No.default.createElement(Sr.FontAwesomeIcon,{icon:t}):No.default.createElement(Sr.FontAwesomeIcon,{icon:r}))},an=N(Gf,{ssrStyles:()=>Promise.resolve().then(()=>(yr(),xr)),clientStyles:()=>(yr(),F(xr)).default});n();var rs=({data:o,highlight:e,occurrences:t,transactionIndex:r})=>{let s=t[r]||o.indexOf(e),p=e.length,m=o.slice(0,s),d=o.slice(s+p);return{start:m,end:d}};var Hf=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(r=>r.index).filter(r=>Number.isFinite(r)),$f=({className:o="dapp-transaction-data",customCopyIcon:e,data:t,globalStyles:r,highlight:s,innerTransactionDataClasses:p,isScCall:m,label:d,showCopyButton:_=!0,styles:l,showDataDecode:g,transactionIndex:T})=>{let[b,v]=(0,C.useState)(t),{transactionDataInputLabelClassName:A,transactionDataInputValueClassName:M}=p||{},O=C.default.createElement(C.default.Fragment,null,b),[z,...re]=s&&m?s.split("@"):[],ce=b&&s,P=ce?Hf(b,s):[],je=ce&&P.length>0,Ee=se=>{!se||se.scrollIntoView()},Yo=se=>{v(se)},Zo=()=>{v(t)};if(je)switch(!0){case b.startsWith(s):{let[,se]=b.split(s);O=C.default.createElement(C.default.Fragment,null,C.default.createElement("span",{className:r==null?void 0:r.highlighted},s),C.default.createElement("span",{className:r==null?void 0:r.textMuted},se));break}case b.endsWith(s):{let[se]=b.split(s);O=C.default.createElement(C.default.Fragment,null,C.default.createElement("span",{className:r==null?void 0:r.textMuted},se),C.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:Ee},s));break}default:{let{start:se,end:Nl}=rs({occurrences:P,transactionIndex:T,data:b,highlight:s});O=C.default.createElement(C.default.Fragment,null,C.default.createElement("span",{className:r==null?void 0:r.textMuted},se),C.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:Ee},s),C.default.createElement("span",{className:r==null?void 0:r.textMuted},Nl));break}}let Ln=[nn(z),...re].join("@");return C.default.createElement(C.default.Fragment,null,z&&C.default.createElement("div",{className:(0,po.default)(l==null?void 0:l.transactionData,o)},C.default.createElement("span",{className:(0,po.default)(l==null?void 0:l.transactionDataLabel,A)},"Smart Contract Call"),C.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},C.default.createElement("div",{"data-testid":"confirmScCall",className:(0,po.default)(l==null?void 0:l.transactionDataValue,M)},C.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},Ln),b&&C.default.createElement(an,{text:Ln,className:l==null?void 0:l.transactionDataValueCopy})))),C.default.createElement("div",{className:(0,po.default)(l==null?void 0:l.transactionData,o)},C.default.createElement("div",{className:(0,po.default)(l==null?void 0:l.transactionDataLabel,A)},d!=null?d:"Data",g&&C.default.createElement(Bc,{data:t,onDecode:Yo,onDecodeError:Zo})),C.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},C.default.createElement("div",{"data-testid":"confirmData",className:(0,po.default)(l==null?void 0:l.transactionDataValue,M)},C.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},b?O:Jc),b&&_&&C.default.createElement(an,{copyIcon:e,text:b,className:l==null?void 0:l.transactionDataValueCopy})))))},is=N($f,{ssrStyles:()=>Promise.resolve().then(()=>(wr(),br)),clientStyles:()=>(wr(),F(br)).default});n();n();var cs=require("react"),J=h(require("classnames")),ss=(o=null,e)=>(0,cs.useMemo)(()=>({formGroup:(0,J.default)(e==null?void 0:e.formGroup,e==null?void 0:e.textBreak,e==null?void 0:e.textLeft),formLabel:(0,J.default)(e==null?void 0:e.textBreak,e==null?void 0:e.textSecondary),icon:e==null?void 0:e.textWhite,contentWrapper:(0,J.default)(e==null?void 0:e.dFlex,e==null?void 0:e.flexColumn,e==null?void 0:e.justifyContentStart,e==null?void 0:e.flexRow,e==null?void 0:e.justifyContentBetween,e==null?void 0:e.mb3),tokenWrapper:(0,J.default)(e==null?void 0:e.mb3,e==null?void 0:e.mb0,e==null?void 0:e.dFlex,e==null?void 0:e.flexColumn,e==null?void 0:e.alignItemsStart),tokenLabel:(0,J.default)(e==null?void 0:e.textSecondary,e==null?void 0:e.textLeft),tokenValue:(0,J.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter),scamReport:e==null?void 0:e.textWarning,scamReportIcon:(0,J.default)(e==null?void 0:e.textWarning,e==null?void 0:e.mr1),tokenAmountLabel:(0,J.default)(e==null?void 0:e.textSecondary,e==null?void 0:e.textLeft),tokenAmountValue:(0,J.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter),dataFormGroup:(0,J.default)(e==null?void 0:e.formGroup,e==null?void 0:e.textLeft),errorMessage:(0,J.default)(e==null?void 0:e.textDanger,e==null?void 0:e.dFlex,e==null?void 0:e.justifyContentCenter,e==null?void 0:e.alignItemsCenter),buttonsWrapper:(0,J.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter,e==null?void 0:e.justifyContentEnd,e==null?void 0:e.mt1),cancelButton:(0,J.default)(e==null?void 0:e.btn,e==null?void 0:e.btnDark,e==null?void 0:e.textWhite,e==null?void 0:e.dFlex,e==null?void 0:e.mr2),signButton:(0,J.default)(e==null?void 0:e.btn,o?e==null?void 0:e.btnWarning:e==null?void 0:e.btnPrimary,e==null?void 0:e.dFlex,e==null?void 0:e.ml2)}),[o,e]);n();n();n();var Ce=h(require("react")),Ua=h(require("classnames"));n();n();n();var Ap=require("react"),Fo=require("react-redux");n();var jr=require("@reduxjs/toolkit"),wp=require("react-redux/lib/utils/Subscription");E();n();var rp=h(require("lodash.throttle"));k();E();Cr();Co();Do();var Wg=[Gn],_t=!1,Bg=(0,rp.default)(()=>{pn(sn())},5e3),ap=o=>e=>t=>{if(Wg.includes(t.type))return e(t);let r=o.getState(),s=mo.local.getItem(Xe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return e(t);if(s==null)return pn(sn());let m=Date.now();return s-m<0&&!_t?setTimeout(()=>{_t=!0,o.dispatch(ws())},1e3):(_t&&(_t=!1),Bg()),e(t)};n();n();function lt(){return typeof sessionStorage!="undefined"}var yp=lt()?(dp(),F(mp)).default:(lp(),F(_p)).default,Sp=lt()?(fp(),F(up)).default:[],bp=lt()?(xp(),F(Tp)).default:o=>o;ut();var L=(0,jr.configureStore)({reducer:yp,middleware:o=>o({serializableCheck:{ignoredActions:[...Sp,Dr.type,jn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(ap)}),vp=(0,wp.createSubscription)(L),tL=bp(L),rL=(0,jr.configureStore)({reducer:_o});var sh={store:L,subscription:vp},zr=(0,Ap.createContext)(sh),sL=(0,Fo.createStoreHook)(zr),Z=(0,Fo.createDispatchHook)(zr),D=(0,Fo.createSelectorHook)(zr);n();n();E();n();var Ip=h(require("lodash.isequal")),ft=require("reselect"),w=(0,ft.createSelectorCreator)(ft.defaultMemoize,Ip.default);var Le=o=>o.account,lo=w(Le,o=>o.address),Wo=w(Le,lo,(o,e)=>e in o.accounts?o.accounts[e]:qn),ph=w(Le,Wo,(o,e)=>{let s=o,{accounts:t}=s,r=le(s,["accounts"]);return I(f({},r),{address:e.address,account:e})}),lL=w(Wo,o=>o.balance),mh=w(Wo,o=>{var e;return((e=o==null?void 0:o.nonce)==null?void 0:e.valueOf())||0}),uL=w(Le,o=>o.shard),dh=w(Le,o=>o.ledgerAccount),fL=w(Le,o=>o.walletConnectAccount),gL=w(Le,o=>o.isAccountLoading),hL=w(Le,o=>o.accountLoadingError),_h=w(Le,o=>o.websocketEvent),lh=w(Le,o=>o.websocketBatchEvent);n();var kp=o=>o.dappConfig,yL=w(kp,o=>o.shouldUseWebViewProvider);n();var ie=o=>o.loginInfo,uh=w(ie,o=>o.loginMethod),gt=w(ie,lo,(o,e)=>Boolean(e)),vL=w(ie,o=>o.walletConnectLogin),fh=w(ie,o=>o.ledgerLogin),gh=w(ie,o=>o.walletLogin),AL=w(ie,o=>o.isLoginSessionInvalid),Kr=w(ie,o=>o.tokenLogin),Lp=w(ie,o=>o.logoutRoute),hh=w(ie,o=>o.isWalletConnectV2Initialized);n();var Np=o=>o.modals,LL=w(Np,o=>o.txSubmittedModal),Th=w(Np,o=>o.notificationModal);n();var ue=o=>o.networkConfig,ht=w(ue,o=>o.network.chainId),xh=w(ue,o=>o.network.roundDuration),CL=w(ue,o=>o.network.walletConnectBridgeAddress),yh=w(ue,o=>o.network.walletConnectV2RelayAddress),Sh=w(ue,o=>o.network.walletConnectV2ProjectId),bh=w(ue,o=>o.network.walletConnectV2Options),wh=w(ue,o=>o.network.walletConnectDeepLink),ne=w(ue,o=>o.network),Xr=w(ne,o=>o.apiAddress),Dp=w(ne,o=>o.explorerAddress),Cp=w(ne,o=>{var e;return(e=o.customWalletAddress)!=null?e:o.walletAddress}),vh=w(ne,o=>o.xAliasAddress),Yr=w(ne,o=>o.egldLabel);n();var Tt=o=>o.signedMessageInfo,RL=w(Tt,o=>o.isSigning),ML=w(Tt,o=>o.errorMessage),OL=w(Tt,o=>{let e=Object.keys(o.signedSessions),t=e.length;return o.signedSessions[e[t-1]]}),FL=w(Tt,o=>{let e=Object.keys(o.signedSessions),t=e.length;return e.length>0?e[t-1]:""});n();var Ep=o=>o.toasts,Ah=w(Ep,o=>o.customToasts),Pp=w(Ep,o=>o.transactionToasts);n();E();var Rp={errorMessage:Or,successMessage:Fr,processingMessage:Wr},Mp=o=>o.transactionsInfo,Ih=w(Mp,(o,e)=>e,(o,e)=>e!=null&&(o==null?void 0:o[Number(e)])||Rp);n();n();var Ne=require("@multiversx/sdk-core");k();n();var Zr=require("@multiversx/sdk-core/out");var Op=o=>{let e=o!=null?o:"";return On(e)?Zr.TransactionPayload.fromEncoded(e):new Zr.TransactionPayload(e)};n();k();var Bo=({data:o,onlySetGuardian:e})=>o?e?o.startsWith("SetGuardian"):Object.values(lr).some(t=>o.startsWith(t)):!1;function xt(o){var r,s,p;let e=f({},o);Bo({data:e.data,onlySetGuardian:!0})&&(delete e.senderUsername,delete e.receiverUsername);let t=new Ne.Transaction(f(f(I(f(I(f({value:e.value.valueOf(),data:Op(e.data),nonce:e.nonce.valueOf(),receiver:new Ne.Address(e.receiver)},e.receiverUsername?{receiverUsername:e.receiverUsername}:{}),{sender:new Ne.Address(e.sender)}),e.senderUsername?{senderUsername:e.senderUsername}:{}),{gasLimit:(r=e.gasLimit.valueOf())!=null?r:tn,gasPrice:(s=e.gasPrice.valueOf())!=null?s:rn,chainID:e.chainID.valueOf(),version:new Ne.TransactionVersion((p=e.version)!=null?p:Yc)}),e.options?{options:new Ne.TransactionOptions(e.options)}:{}),e.guardian?{guardian:new Ne.Address(e.guardian)}:{}));return e.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(e.guardianSignature,"hex")),e.signature&&t.applySignature(a.Buffer.from(e.signature,"hex")),t}n();n();k();n();n();n();var Nh=require("@multiversx/sdk-core/out");n();k();n();var un=require("@multiversx/sdk-core");B();var Dh=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Jr(o,e,t=""){if(!Ao(o))return!1;if(new un.Address(o).isContractAddress())return!0;let p=Fp({receiver:o,data:t});return p?new un.Address(p).isContractAddress()||Ph(o,e,t):!1}var Ch=o=>o.toLowerCase().match(/[0-9a-f]/g),Eh=o=>o.length%2===0;function Ph(o,e,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[s,...p]=r,m=e!=null&&o!=null&&o===e,d=Dh.includes(s),_=p.every(l=>Ch(l)&&Eh(l));return m&&d&&_}function Fp({receiver:o,data:e}){try{if(!e)return o;let t=On(e)?un.TransactionPayload.fromEncoded(e).toString():e,r=Rh(t),s=t.split("@");return r>-1?s[r]:o}catch(t){console.log(t);return}}function Rh(o){return o.includes("MultiESDTNFTTransfer")?1:o.includes("ESDTNFTTransfer")?4:-1}n();n();n();var Mh=require("@multiversx/sdk-core"),Oh=h(require("bignumber.js"));R();n();n();n();var te="accounts";var yt="blocks",Wp="code",Bp="collections";var Up="contracts",fn="economics",Gp="identities";var Vp="locked-accounts",Hp="logs",$p="miniblocks";var gn="nfts",qp="nodes",Qr="providers",jp="roles",ea="sc-results";var Ze="tokens";var fe="transactions";var hn={shard:o=>`/${yt}?shard=${o}`,receiverShard:o=>`/${fe}?receivershard=${o}`,senderShard:o=>`/${fe}?sendershard=${o}`,transactionDetails:o=>`/${fe}/${o}`,transactionDetailsScResults:o=>`/${fe}/${o}/${ea}`,transactionDetailsLogs:o=>`/${fe}/${o}/${Hp}`,nodeDetails:o=>`/${qp}/${o}`,accountDetails:o=>`/${te}/${o}`,accountDetailsContractCode:o=>`/${te}/${o}/${Wp}`,accountDetailsTokens:o=>`/${te}/${o}/${Ze}`,accountDetailsNfts:o=>`/${te}/${o}/${gn}`,accountDetailsScResults:o=>`/${te}/${o}/${ea}`,accountDetailsContracts:o=>`/${te}/${o}/${Up}`,identityDetails:o=>`/${Gp}/${o}`,tokenDetails:o=>`/${Ze}/${o}`,tokenDetailsAccounts:o=>`/${Ze}/${o}/${te}`,tokenDetailsLockedAccounts:o=>`/${Ze}/${o}/${Vp}`,tokenDetailsRoles:o=>`/${Ze}/${o}/${jp}`,collectionDetails:o=>`/${Bp}/${o}`,nftDetails:o=>`/${gn}/${o}`,providerDetails:o=>`/${Qr}/${o}`,providerDetailsTransactions:o=>`/${Qr}/${o}/${fe}`,miniblockDetails:o=>`/${$p}/${o}`};n();n();n();n();ee();n();var zp=!1;function Bh(o){zp||(console.error(o),zp=!0)}function Tn({explorerAddress:o,to:e}){try{return new URL(e).href}catch(t){return e.startsWith("/")||(Bh(`Link not prepended by / : ${e}`),e=`/${e}`),o?`${o}${e}`:e}}n();ee();n();n();n();var Uh=h(require("bignumber.js"));k();n();var Yp=require("@multiversx/sdk-core"),Je=h(require("bignumber.js"));k();n();var Xp=h(require("bignumber.js")),bt=(o,e=!0)=>{let t=String(o);if(!t.match(/^[-]?\d+$/))return!1;let r=new Xp.default(t),s=e?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=s};n();function Ge(o){return{if:function(e){return e?{then:t=>t instanceof Function?Ge(t(o)):Ge(t)}:{then:()=>Ge(o)}},then:e=>e instanceof Function?Ge(e(o)):Ge(e),valueOf:function(){return o}}}Je.default.config({ROUNDING_MODE:Je.default.ROUND_FLOOR});function ge({input:o,decimals:e=me,digits:t=so,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:s=!1,addCommas:p=!1}){if(!bt(o,!1))throw new Error("Invalid input");let m=new Je.default(o).isNegative(),d=o;return m&&(d=o.substring(1)),Ge(d).then(()=>Yp.TokenTransfer.fungibleFromBigInteger("",d,e).amountAsBigInteger.shiftedBy(-e).toFixed(e)).then(_=>{let l=new Je.default(_);if(l.isZero())return de;let g=l.toString(10),[T,b]=g.split("."),v=new Je.default(b||0),A=Ge(0).if(Boolean(b&&r)).then(()=>Math.max(b.length,t)).if(v.isZero()&&!r).then(0).if(Boolean(b&&!r)).then(()=>Math.min(b.length,t)).valueOf(),M=b&&t>=1&&t<=b.length&&v.isGreaterThan(0)&&new Je.default(b.substring(0,t)).isZero(),O=l.toFormat(A);return Ge(g).if(p).then(O).if(Boolean(M)).then(re=>{let ce=new Je.default(T).isZero(),[P,je]=re.split("."),Ee=new Array(t-1).fill(0),Yo=[...Ee,0].join(""),Zo=[...Ee,1].join("");return ce?s?`<${P}.${Zo}`:r?`${P}.${je}`:P:`${P}.${Yo}`}).if(Boolean(!M&&b)).then(re=>{let[ce]=re.split("."),P=b.substring(0,A);if(r){let je=t-P.length;if(je>0){let Ee=Array(je).fill(0).join("");return P=`${P}${Ee}`,`${ce}.${P}`}return re}return P?`${ce}.${P}`:ce}).valueOf()}).if(m).then(_=>`-${_}`).valueOf()}n();n();n();k();n();n();n();n();k();n();k();n();var Gh=require("@multiversx/sdk-core");k();n();var he=require("@multiversx/sdk-core"),Qp=h(require("bignumber.js"));k();n();n();var oa=h(require("bignumber.js"));k();var Zp=o=>{if(isNaN(o)||o==null||String(o).includes("Infinity"))return!1;let[e,t]=o.split("."),r=oa.default.clone();if(t){let d=t.split("").every(_=>!isNaN(parseInt(_)));for(r.set({DECIMAL_PLACES:d?t.length:oa.default.config().DECIMAL_PLACES});t.charAt(t.length-1)===de;)t=t.slice(0,-1)}let s=t?[e,t].join("."):e,p=r(s);return p.toString(10)===s&&p.comparedTo(0)>=0};n();k();n();var na={isEsdt:!1,isNft:!1,isEgld:!1};function ta(o){let e=o==null?void 0:o.split("-").length;return e===2?I(f({},na),{isEsdt:!0}):e===3?I(f({},na),{isNft:!0}):I(f({},na),{isEgld:!0})}var Jp={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function ra({minGasLimit:o=String(tn),gasLimit:e,gasPrice:t,data:r,gasPerDataByte:s,gasPriceModifier:p,defaultGasPrice:m=String(rn),chainId:d}){let _=r||"",l=bt(e)?e:o,g=Bo({data:_})?Tr:0,T=new Qp.default(l).plus(g).toNumber(),b=Zp(t)?t:m,v=new he.Transaction({nonce:0,value:he.TokenPayment.egldFromAmount("0"),receiver:new he.Address(Jp.to),sender:new he.Address(Jp.to),gasPrice:parseInt(b),gasLimit:T,data:new he.TransactionPayload(_.trim()),chainID:d,version:new he.TransactionVersion(1)});try{return v.computeFee({GasPerDataByte:parseInt(s),MinGasLimit:parseInt(o),GasPriceModifier:parseFloat(p),ChainID:d}).toString(10)}catch(A){return console.error(A),de}}n();var wt=({amount:o,usd:e,decimals:t=2,addEqualSign:r})=>{let s=(parseFloat(o)*e).toFixed(t),p=parseFloat(s).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),m=parseFloat(o)>0?"\u2248":"=";return`${r?`${m} `:""}$${p}`};n();n();n();n();k();n();k();var em=({feeLimit:o,egldPriceInUsd:e,hideEqualSign:t})=>{let r=ge({input:o,decimals:me,digits:so,showLastNonZeroDecimal:!0}),s=wt({amount:r,usd:e,decimals:so});return t?s:`\u2248 ${s}`};n();k();n();ee();var Vh=["reDelegateRewards","claimRewards","unBond"],Hh=["wrapEgld","unwrapEgld"],$h=["unStake"],qh=["unDelegate"];n();n();n();k();n();var Kh=h(require("bignumber.js"));n();n();ee();n();var Yh=h(require("bignumber.js"));n();n();n();var Qh=h(require("bignumber.js"));B();n();n();n();n();R();n();var tT=require("@multiversx/sdk-web-wallet-provider");k();n();var oT=h(require("qs"));n();Y();io();n();io();var G1={search:Oe()?window.location.search:"",removeParams:[]};n();n();n();X();n();ee();n();n();X();n();var rT=h(require("linkifyjs"));n();k();n();var aT=h(require("bignumber.js"));n();B();n();n();R();n();R();n();n();n();ee();n();ee();n();var iT=h(require("bignumber.js"));k();ee();n();ee();n();var nm=require("react");B();var nP=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var tm=require("react");B();X();n();var cT=require("react");ee();var mP=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Oo();n();var At=o=>o.transactions,Uo=w(At,o=>o.signedTransactions),sT=w(At,o=>o.signTransactionsError),rm=w(At,o=>o.signTransactionsCancelMessage),It=o=>e=>Object.entries(e).reduce((t,[r,s])=>(o(s.status)&&(t[r]=s),t),{}),am=w(Uo,It(Po)),im=w(Uo,It(Ro)),cm=w(Uo,It(Mo)),pT=w(Uo,It(Ur)),sm=w(At,o=>{var e;return(o==null?void 0:o.transactionsToSign)==null?null:I(f({},o.transactionsToSign),{transactions:((e=o==null?void 0:o.transactionsToSign)==null?void 0:e.transactions.map(t=>xt(t)))||[]})}),mT=w(Uo,(o,e)=>e,(o,e)=>e!=null?(o==null?void 0:o[e])||{}:{});var Ve=()=>D(ue);n();var pm=require("react");n();E();n();n();n();n();n();n();n();n();var _T=require("@multiversx/sdk-extension-provider"),lT=require("@multiversx/sdk-hw-provider"),uT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),fT=require("@multiversx/sdk-opera-provider"),gT=require("@multiversx/sdk-passkey-provider/out"),hT=require("@multiversx/sdk-web-wallet-provider");k();ze();n();var Go=require("@multiversx/sdk-web-wallet-iframe-provider/out"),mm=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");R();n();var Te=o=>`Unable to perform ${o}, Provider not initialized`,kt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Te("getAccount"))}setAccount(e){throw new Error(Te(`setAccount: ${e}`))}login(e){throw new Error(Te(`login with options: ${e}`))}logout(e){throw new Error(Te(`logout with options: ${e}`))}getAddress(){throw new Error(Te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(e,t){throw new Error(Te(`sendTransaction with transactions: ${e} options: ${t}`))}signTransaction(e,t){throw new Error(Te(`signTransaction with transactions: ${e} options: ${t}`))}signTransactions(e,t){throw new Error(Te(`signTransactions with transactions: ${e} options: ${t}`))}signMessage(e,t){throw new Error(Te(`signTransactions with ${e} and options ${t}`))}sendCustomMessage({method:e,params:t}){throw new Error(Te(`sendCustomMessage with method: ${e} params: ${t}`))}sendCustomRequest(e){throw new Error(Te(`sendSessionEvent with options: ${e}`))}ping(){return Promise.resolve(!1)}},dm=new kt;E();n();n();n();n();n();var _m=require("@lifeomic/axios-fetch"),ca=h(require("axios")),sa=(0,_m.buildAxiosFetch)(ca.default),pa=(o,e)=>y(void 0,null,function*(){if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);let r=o.clone().json(),[s]=yield Promise.all([r]);return{data:s,status:o.status,statusText:o.statusText,headers:o.headers,config:e}});function TT(o,e,t){return y(this,null,function*(){try{let r=yield sa(o,f({method:"POST",body:e?JSON.stringify(e):void 0,headers:f({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return pa(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function xT(o,e){return y(this,null,function*(){try{let t=yield sa(o,e);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return pa(t,e)}catch(t){throw console.error("Fetch Error:",t),t}})}function yT(o,e,t){return y(this,null,function*(){try{let r=yield sa(o,f({method:"PATCH",body:e?JSON.stringify(e):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return pa(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var eo=ca.default.create();eo.get=xT;eo.post=TT;eo.patch=yT;var lm=o=>eo.get(o).then(e=>e.data);n();var Vo=o=>{let e=o!=null?o:Xr(L.getState());return e.endsWith("/")?e.slice(0,-1):e};n();var ST=h(require("axios"));n();var um=h(require("swr"));var Ho=({apiEndpoint:o})=>{let e=Vo(),t=o?`${e}/${o}`:null;return(0,um.default)(t,lm)};n();R();n();n();n();X();n();Oo();n();n();n();var bT=h(require("axios"));n();var vT=h(require("axios"));ko();n();k();n();var AT=h(require("axios"));n();var kT=h(require("axios"));n();n();var LT=h(require("axios"));n();var NT=h(require("axios"));n();n();E();R();n();n();n();n();X();n();G();B();n();E();n();var Tm=require("@multiversx/sdk-core");B();Y();n();Oo();n();E();R();n();E();B();n();n();n();B();n();Bn();n();n();n();n();var ym=h(require("swr"));n();n();var Dt={},da={setItem:(o,e)=>y(void 0,null,function*(){try{Dt[o]=JSON.stringify(e)}catch(t){console.error("tokenDataStorage unable to serialize",t)}}),getItem:o=>y(void 0,null,function*(){try{return JSON.parse(Dt[o])}catch(e){console.error("tokenDataStorage unable to parse",e)}}),clear:()=>y(void 0,null,function*(){Dt={}}),removeItem:o=>y(void 0,null,function*(){delete Dt[o]})};function xm(o){return y(this,null,function*(){let{apiAddress:e,apiTimeout:t}=ne(L.getState()),r={baseURL:e,timeout:Number(t)},s=yield da.getItem(o);if(s)return s;let p=yield eo.get(o,r);return yield da.setItem(o,p.data),p.data})}function Sm({tokenId:o}){var T,b,v,A;let{network:e}=Ve(),{isNft:t}=ta(o),r=o,s=t?gn:Ze,{data:p,error:m,isLoading:d}=(0,ym.default)(Boolean(r)?`${e.apiAddress}/${s}/${r}`:null,xm);if(!r)return{tokenDecimals:Number(e.decimals),tokenLabel:"",tokenAvatar:""};let _=p?p==null?void 0:p.decimals:Number(e.decimals),l=p?p==null?void 0:p.name:"",g=p?(A=(T=p==null?void 0:p.assets)==null?void 0:T.svgUrl)!=null?A:(v=(b=p==null?void 0:p.media)==null?void 0:b[0])==null?void 0:v.thumbnailUrl:"";return{isLoading:d,tokenDecimals:_,tokenLabel:l,type:p==null?void 0:p.type,tokenAvatar:g,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}n();n();var bm=require("react");n();n();var ET=require("react"),PT=require("@multiversx/sdk-web-wallet-provider"),RT=require("@multiversx/sdk-web-wallet-provider"),MT=h(require("qs"));k();E();R();pr();X();var j5=H();n();var Dm=require("react"),ua=require("@multiversx/sdk-core");n();var yn=o=>Ho({apiEndpoint:o?`${te}/${o}?withGuardianInfo=true`:null});k();Er();n();n();n();n();n();n();n();n();n();n();ko();n();var BT=h(require("axios"));n();var GT=h(require("axios"));n();ko();n();ko();n();n();n();n();var HT=require("@multiversx/sdk-opera-provider");n();var $T=require("@multiversx/sdk-extension-provider");n();ze();n();n();n();n();var YT=h(Im());n();var ex=require("@multiversx/sdk-native-auth-client");n();var Nm=h(require("axios"));n();n();n();function km(o){return y(this,null,function*(){return yield new Promise(e=>{setTimeout(()=>e(),o)})})}n();var Lm=(o,e,t,r=0)=>y(void 0,null,function*(){try{return yield o(...t)}catch(s){return r<e.retries?((e==null?void 0:e.delay)!=null&&(yield km(e.delay)),yield Lm(o,e,t,r+1)):null}}),_a=(o,e={retries:5,delay:500})=>(...t)=>y(void 0,null,function*(){return yield Lm(o,e,t)});var ZT=4;var a6=_a((o,e,t)=>y(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield Nm.default.get(`${o}/${yt}?from=${ZT}&size=1&fields=hash,timestamp${e?"&shard="+e:""}`),[s]=r;return s}));n();n();Hn();n();n();X();var f6={origin:H().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var nx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var tx=require("@multiversx/sdk-passkey-provider/out");k();X();n();n();n();var px=require("react"),mx=require("@multiversx/sdk-hw-provider");n();G();B();n();mn();Co();Do();Y();n();n();var x_=require("react"),y_=require("@multiversx/sdk-core"),YS=require("@multiversx/sdk-extension-provider"),ZS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),JS=require("@multiversx/sdk-passkey-provider/out"),QS=h(f_());k();n();n();n();n();n();n();n();n();n();n();var vn=h(require("react"));var oB=(0,vn.createContext)({}),nB=L.getState();n();var h_=h(require("react"));n();var Ta=h(require("react")),RS=h(require("axios"));n();n();ze();n();n();var BS=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),US=require("@multiversx/sdk-webview-provider/out/WebviewProvider");G();n();G();E();B();n();n();E();n();Y();n();E();B();n();n();var MS=require("@multiversx/sdk-core"),OS=h(require("bignumber.js"));k();n();var FS=h(require("bignumber.js"));k();E();R();Y();X();n();var T_=require("react"),$S=require("@multiversx/sdk-extension-provider"),qS=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),jS=require("@multiversx/sdk-passkey-provider/out");ze();E();n();E();B();mn();X();n();Ae();E();n();n();var ob=require("react");n();n();R();Oo();n();var Ot=require("react"),S_=(o,e)=>{let[t,r]=(0,Ot.useState)(o);return(0,Ot.useEffect)(()=>{let p=setTimeout(()=>r(o),e);return()=>clearTimeout(p)},[o]),t};n();n();var tb=require("react"),rb=require("@multiversx/sdk-extension-provider");Ae();G();R();n();Be();Y();Y();n();n();ze();B();n();var nb=require("react"),b_=require("@multiversx/sdk-core");E();n();var ab=require("react"),ib=require("@multiversx/sdk-opera-provider");Ae();G();R();Be();Y();X();n();var cb=require("react");gr();Ae();ze();G();E();R();Be();X();n();var _b=require("react");Ae();E();n();n();vr();n();n();var sb=h(require("platform"));io();n();n();n();n();n();function w_(){return Yr(L.getState())}n();n();Lo();R();n();n();var pb=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();mn();Co();n();n();n();E();n();n();var mb=h(require("axios"));Y();n();n();var db=h(Et());Lo();var v_,A_,I_,$8=(I_=(A_=(v_=ke.safeWindow)==null?void 0:v_.location)==null?void 0:A_.origin)==null?void 0:I_.includes("localhost");n();X();n();n();var Sb=require("react");k();n();n();k();n();n();n();var lb=h(require("bignumber.js"));n();n();n();var oo=h(require("react")),P_=require("react"),R_=require("react"),wa=h(require("classnames")),M_=require("react-dom");k();n();var L_=h(require("react")),N_=h(require("classnames"));var fb=({className:o,children:e,styles:t})=>L_.default.createElement("div",{className:(0,N_.default)(t==null?void 0:t.dappModalBody,o)},e),xa=N(fb,{ssrStyles:()=>Promise.resolve().then(()=>($e(),He)),clientStyles:()=>($e(),F(He)).default});n();var ya=h(require("react")),D_=h(require("classnames"));var gb=({visible:o,customFooter:e,className:t,footerText:r,styles:s})=>o?ya.default.createElement("div",{className:(0,D_.default)(s==null?void 0:s.dappModalFooter,t)},e!=null?e:ya.default.createElement("div",null,r)):null,Sa=N(gb,{ssrStyles:()=>Promise.resolve().then(()=>($e(),He)),clientStyles:()=>($e(),F(He)).default});n();var Xo=h(require("react")),C_=require("@fortawesome/free-solid-svg-icons"),E_=require("@fortawesome/react-fontawesome"),In=h(require("classnames"));var hb=({visible:o,headerText:e,customHeader:t,className:r,closeButtonClassName:s,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>o?t?Xo.default.createElement("div",{className:(0,In.default)(_==null?void 0:_.dappModalHeader,r)},t):Xo.default.createElement("div",{className:(0,In.default)(_==null?void 0:_.dappModalHeader,r)},Xo.default.createElement("div",{className:(0,In.default)(_==null?void 0:_.dappModalHeaderText,p)},e),Xo.default.createElement("button",{onClick:m,className:(0,In.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,s)},Xo.default.createElement(E_.FontAwesomeIcon,{size:"lg",icon:C_.faTimes}))):null,ba=N(hb,{ssrStyles:()=>Promise.resolve().then(()=>($e(),He)),clientStyles:()=>($e(),F(He)).default});var Tb={showHeader:!0,showFooter:!1,headerText:"",footerText:""},xb=({"data-testid":o="dappModal",children:e,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:s=Tb,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:l})=>{let[g,T]=(0,P_.useState)(!1);if((0,R_.useEffect)(()=>{T(!0)},[]),!_)return null;let{showHeader:b,showFooter:v,headerText:A,footerText:M,modalDialogClassName:O="dapp-modal-dialog",modalContentClassName:z="dapp-modal-dialog-content",modalHeaderClassName:re="dapp-modal-dialog-header",modalHeaderTextClassName:ce="dapp-modal-dialog-header-text",modalCloseButtonClassName:P="dapp-modal-dialog-close-button",modalBodyClassName:je="dapp-modal-dialog-content-body",modalFooterClassName:Ee="dapp-modal-dialog-footer",customModalHeader:Yo,customModalFooter:Zo}=s,Ln=se=>{se.key==="Escape"&&r&&(m==null||m())};return oo.default.createElement(oo.default.Fragment,null,g&&(0,M_.createPortal)(oo.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,wa.default)(O,l==null?void 0:l.dappModal,t),"data-testid":o,onKeyDown:Ln},oo.default.createElement("div",{className:(0,wa.default)(l==null?void 0:l.dappModalContent,z)},oo.default.createElement(ba,{visible:b,headerText:A,customHeader:Yo,className:re,headerTextClassName:ce,closeButtonClassName:P,onHide:m}),oo.default.createElement(xa,{className:je},e),oo.default.createElement(Sa,{visible:v,customFooter:Zo,footerText:M,className:Ee}))),d!=null?d:document==null?void 0:document.body))},yb=N(xb,{ssrStyles:()=>Promise.resolve().then(()=>($e(),He)),clientStyles:()=>($e(),F(He)).default});n();n();var O_=require("react");n();n();var F_=require("react"),wb=require("@multiversx/sdk-hw-provider");Ae();G();E();R();Be();n();var bb=require("react");n();n();var va=require("react");G();E();R();Be();X();n();var Ab=require("react"),Ib=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ae();G();R();Be();Y();Y();n();var kb=require("react"),Lb=require("@multiversx/sdk-passkey-provider/out");Ae();G();R();Be();Y();Y();n();n();var W_=require("react");n();var Cb=require("react");n();var Aa=require("react"),Db=require("socket.io-client");E();n();n();n();var Eb=require("react");B();n();n();n();var G_=h(require("swr"));n();n();n();n();var B_=h(require("axios"));function U_(o=fn){let t=`${Vo()}/${o}`;return B_.default.get(t)}n();function Ft(){let o=r=>U_(r).then(s=>s.data),{data:e,error:t}=(0,G_.default)(fn,o);return{price:e==null?void 0:e.price,error:t}}n();n();var Wt=h(require("react")),La=h(require("classnames"));var Rb=({className:o,styles:e})=>Wt.default.createElement("div",{className:(0,La.default)(e==null?void 0:e.loadingDots,o)},Array.from({length:3}).map((t,r)=>Wt.default.createElement("span",{key:`loading-dot-${r}`,className:(0,La.default)(e==null?void 0:e.loadingDot,e==null?void 0:e[`loadingDot-${r}`])})),Wt.default.createElement("span",null,"Loading...")),To=N(Rb,{ssrStyles:()=>Promise.resolve().then(()=>(ka(),Ia)),clientStyles:()=>(ka(),F(Ia)).default});n();n();n();var xo=h(require("react")),$_=h(require("bignumber.js"));k();var Ob=({amount:o,styles:e,type:t,identifier:r})=>{let s=new $_.default(o),p=s.isZero(),m=s.isEqualTo(1)?"SFT":"SFTs",d=s.toNumber().toLocaleString("en"),_=`${d} ${r}`;return p?xo.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},"You are using"):t==="NonFungibleESDT"?xo.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},"You are sending an NFT"):t==="SemiFungibleESDT"?xo.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},xo.default.createElement("span",{className:e==null?void 0:e.confirmAmountLabelText},"You are sending"),xo.default.createElement("span",{className:e==null?void 0:e.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":_},d," ",m)):xo.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},"You are sending")},q_=N(Ob,{ssrStyles:()=>Promise.resolve().then(()=>(Da(),Na)),clientStyles:()=>(Da(),F(Na)).default});n();n();var De=h(require("react")),Z_=require("@fortawesome/free-solid-svg-icons"),J_=require("@fortawesome/react-fontawesome"),Q_=h(require("classnames"));k();n();n();var yo=h(require("react")),Pa=h(require("classnames"));n();var Bt=h(require("react")),Fb=o=>Bt.createElement("svg",f({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),Bt.createElement("g",null,Bt.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Ut=Fb;var Bb=({amount:o,displayAsUsd:e,addEqualSign:t,egldIcon:r,className:s,showTokenLabel:p=!0,styles:m,tokenLabel:d,showTokenLabelSup:_,"data-testid":l})=>{let[g,T]=o.split("."),b=e&&g.indexOf("$")<0?`$${g}`:g,A=(()=>{let z={processedMainBalance:b};return t&&e&&(z.approximation="\u2248"),T&&(z.decimalBalance=`.${T}`),!e&&p&&(z.tokenLabel=` ${d}`),z})(),O=[A.approximation,A.processedMainBalance,A.decimalBalance,A.tokenLabel].reduce((z,re)=>re?z.concat(re):z,"");return yo.default.createElement("div",{className:(0,Pa.default)(m==null?void 0:m.balance,s),"data-testid":l,"data-value":O},r&&!e&&yo.default.createElement(Ut,{className:m==null?void 0:m.balanceSymbol}),A.approximation&&yo.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},A.approximation),A.processedMainBalance&&yo.default.createElement("span",{className:m==null?void 0:m.balanceMain},b),A.decimalBalance&&yo.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},A.decimalBalance),A.tokenLabel&&yo.default.createElement("sup",{className:(0,Pa.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:_})},A.tokenLabel))},kn=N(Bb,{ssrStyles:()=>Promise.resolve().then(()=>(Ea(),Ca)),clientStyles:()=>(Ea(),F(Ca)).default});n();n();var z_=h(require("react")),K_=h(require("classnames"));k();var Ub=d=>{var _=d,{amount:o,usd:e,decimals:t,addEqualSign:r,className:s,globalStyles:p}=_,m=le(_,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let l=wt({amount:o,usd:e,decimals:t,addEqualSign:r!=null?r:!0}),T=`${o}`===de?`= $${de}`:l;return z_.default.createElement("small",f({className:(0,K_.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,s!=null?s:"dapp-usd-value")},m),T)},X_=N(Ub,{});var Vb=({isEgld:o,styles:e,tokenPrice:t,isNftOrSft:r,handleReference:s,currentTransaction:p,amount:m,tokenDetails:d})=>{let{network:_}=Ve(),{tokenAvatar:l,tokenDecimals:g,identifier:T}=d,b=({addCommas:O})=>ge({input:o?p.transaction.getValue().toString():m,decimals:o?Number(_.decimals):g,digits:Number(_.digits),showLastNonZeroDecimal:!1,addCommas:O}),v=o||d.identifier===es,A=b({addCommas:!0}),M=b({addCommas:!1});return De.default.createElement("div",{className:e==null?void 0:e.confirmAmountData},De.default.createElement("div",{className:e==null?void 0:e.confirmAmountDataWrapper},!v&&l&&De.default.createElement("img",{src:l,className:e==null?void 0:e.confirmAmountDataIcon}),!v&&!l&&De.default.createElement("div",{className:(0,Q_.default)(e==null?void 0:e.confirmAmountDataIcon,e==null?void 0:e.confirmAmountDataIconDefault)},De.default.createElement(J_.FontAwesomeIcon,{icon:Z_.faCoins,className:e==null?void 0:e.confirmAmountDataIconDefaultIcon})),De.default.createElement("div",{className:e==null?void 0:e.confirmAmountDataBalanceWrapper,ref:s},De.default.createElement(kn,{amount:A,egldIcon:v,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:v?_.egldLabel:T,className:e==null?void 0:e.confirmAmountDataBalance}))),!r&&t&&De.default.createElement(X_,{amount:M,usd:t,"data-testid":"confirmUsdValue",className:e==null?void 0:e.confirmAmountDataPrice}),!r&&!t&&De.default.createElement("div",{className:e==null?void 0:e.confirmAmountDataPrice},"Price Unknown"))},el=N(Vb,{ssrStyles:()=>Promise.resolve().then(()=>(Ma(),Ra)),clientStyles:()=>(Ma(),F(Ra)).default});n();n();var xe=h(require("react")),nl=require("@fortawesome/free-solid-svg-icons"),tl=require("@fortawesome/react-fontawesome"),rl=h(require("classnames"));k();Lo();var $b=({styles:o,amount:e,type:t,tokenDetails:r})=>{let{network:s}=Ve(),{identifier:p,tokenAvatar:m,name:d}=r,_="SemiFungibleESDT"===t,g=Array(Math.min(4,Number(e))).fill(null);return xe.default.createElement("div",{onClick:b=>{var A;if(!p)return;let v=Tn({explorerAddress:s.explorerAddress,to:hn.nftDetails(p)});b.preventDefault(),b.stopPropagation(),(A=ke.safeWindow)!=null&&A.open&&ke.safeWindow.open(v)},className:o==null?void 0:o.confirmAmountNftSft},xe.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftWrapper},m?xe.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftIconWrapper},g.map((b,v)=>xe.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${v}`,style:{opacity:1-.25*v,zIndex:g.length-v,marginLeft:(g.length-v-1)*4},className:(0,rl.default)(o==null?void 0:o.confirmAmountNftSftIcon,{[o==null?void 0:o.confirmAmountNftSftIconRelative]:v===0})}))):xe.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftIconWrapper},xe.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftIconText},_?"SFT":"NFT")),xe.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftContent},xe.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftName,"data-testid":"nftLabel"},d),xe.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),xe.default.createElement(tl.FontAwesomeIcon,{icon:nl.faArrowUpRightFromSquare,className:o==null?void 0:o.confirmAmountNftSftIcon}))},al=N($b,{ssrStyles:()=>Promise.resolve().then(()=>(Fa(),Oa)),clientStyles:()=>(Fa(),F(Oa)).default});n();n();var il=require("react"),cl=()=>{let[o,e]=(0,il.useState)(!0),t=p=>p.getBoundingClientRect().width,r=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:o,handleAmountReference:p=>{if(!p)return;let m=p.firstChild,d={parent:p.offsetWidth,firstChild:r(m)};if(!!m){for(;d.parent<t(m);){let _=d.firstChild-.1,l={fontSize:`${_}px`},g={firstChild:_};Object.assign(m.style,l),Object.assign(d,g)}e(!1)}}}};var jb=({styles:o,currentTransaction:e})=>{let{tokenId:t,nonce:r,amount:s}=e.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:m}=cl(),d=r&&r.length>0?`${t}-${r}`:t,_=Sm({tokenId:d}),{price:l}=Ft(),{type:g,esdtPrice:T,isLoading:b,identifier:v}=_,A=!t,M=A?l:T,O=g?["SemiFungibleESDT","NonFungibleESDT"].includes(g):!1;return Ce.default.createElement("div",{className:o==null?void 0:o.confirmAmount},Ce.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},b?Ce.default.createElement(To,null):Ce.default.createElement(q_,{amount:s,type:g,identifier:v})),Ce.default.createElement("div",{className:o==null?void 0:o.confirmAmountWrapper},Ce.default.createElement(To,{className:(0,Ua.default)(o==null?void 0:o.confirmAmountLoading,{[o==null?void 0:o.confirmAmountLoadingVisible]:b||p})}),Ce.default.createElement("div",{className:(0,Ua.default)(o==null?void 0:o.confirmAmountContent,{[o==null?void 0:o.confirmAmountContentHidden]:b||p})},O?Ce.default.createElement(al,{amount:s,type:g,tokenDetails:_}):Ce.default.createElement(el,{isNftOrSft:O,isEgld:A,amount:s,handleReference:m,currentTransaction:e,tokenDetails:_,tokenPrice:M}))))},pl=N(jb,{ssrStyles:()=>Promise.resolve().then(()=>(Ba(),Wa)),clientStyles:()=>(Ba(),F(Wa)).default});n();n();var qe=h(require("react"));k();var Kb=({transaction:o,styles:e})=>{let{price:t}=Ft(),r=w_(),s=ra({gasPerDataByte:String(Un),gasPriceModifier:String(hr),gasLimit:o.getGasLimit().valueOf().toString(),gasPrice:o.getGasPrice().valueOf().toString(),data:o.getData().toString(),chainId:o.getChainID().valueOf()}),p=ge({input:s,showLastNonZeroDecimal:!0}),m=t?em({feeLimit:s,egldPriceInUsd:t,hideEqualSign:!0}):null;return qe.default.createElement("div",{className:e==null?void 0:e.confirmFee},qe.default.createElement("div",{className:e==null?void 0:e.confirmFeeLabel},"Transaction Fee"),qe.default.createElement("div",{className:e==null?void 0:e.confirmFeeData},qe.default.createElement(kn,{className:e==null?void 0:e.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:r,amount:p}),m?qe.default.createElement("span",{className:e==null?void 0:e.confirmFeeDataPriceWrapper},"(",qe.default.createElement(kn,{amount:m,displayAsUsd:!0,addEqualSign:!0,className:e==null?void 0:e.confirmFeeDataPrice}),")"):qe.default.createElement("span",{className:e==null?void 0:e.confirmFeeDataPriceWrapper},qe.default.createElement(To,null))))},dl=N(Kb,{ssrStyles:()=>Promise.resolve().then(()=>(Va(),Ga)),clientStyles:()=>(Va(),F(Ga)).default});n();n();var j=h(require("react")),bl=require("@fortawesome/free-solid-svg-icons"),wl=require("@fortawesome/react-fontawesome"),vl=h(require("bignumber.js"));k();n();n();var _l=o=>o?o.lastIndexOf(".elrond")>0?o.substring(0,o.lastIndexOf(".")):o:void 0;n();n();var qa=h(require("react")),ul=require("@fortawesome/free-solid-svg-icons"),fl=require("@fortawesome/react-fontawesome"),gl=h(require("classnames"));var Yb=_=>{var l=_,{page:o,text:e,className:t="dapp-explorer-link",children:r,globalStyles:s,customExplorerIcon:p,styles:m}=l,d=le(l,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:g}}=Ve(),T=e!=null?e:qa.default.createElement(fl.FontAwesomeIcon,{icon:p!=null?p:ul.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),b=Tn({explorerAddress:String(g),to:o});return qa.default.createElement("a",f({href:b,target:"_blank",className:(0,gl.default)(m==null?void 0:m.link,s==null?void 0:s.ml2,t),rel:"noreferrer"},d),r!=null?r:T)},hl=N(Yb,{ssrStyles:()=>Promise.resolve().then(()=>($a(),Ha)),clientStyles:()=>($a(),F(Ha)).default});n();n();var $=h(require("react")),xl=h(require("classnames"));k();var Jb=({text:o,className:e="dapp-trim","data-testid":t="trim-text-component",color:r,styles:s})=>{let[p,m]=(0,$.useState)(0),[d,_]=(0,$.useState)(!1),l=(0,$.useRef)(document==null?void 0:document.createElement("span")),g=(0,$.useRef)(document==null?void 0:document.createElement("span")),T=S_(p,300),b=()=>{if(l.current&&g.current){let M=g.current.offsetWidth-l.current.offsetWidth;_(M>1)}},v=()=>{m(p+1)};return(0,$.useEffect)(()=>(window==null||window.addEventListener("resize",v),()=>{window==null||window.removeEventListener("resize",v)})),(0,$.useEffect)(()=>{b()},[T]),$.default.createElement("span",{ref:l,className:(0,xl.default)(s==null?void 0:s.trim,r,e,{overflow:d}),"data-testid":t},$.default.createElement("span",{ref:g,className:s==null?void 0:s.hiddenTextRef},o),d?$.default.createElement($.default.Fragment,null,$.default.createElement("span",{className:s==null?void 0:s.left},$.default.createElement("span",null,String(o).substring(0,Math.floor(o.length/2)))),$.default.createElement("span",{className:s==null?void 0:s.ellipsis},Qc),$.default.createElement("span",{className:s==null?void 0:s.right},$.default.createElement("span",null,String(o).substring(Math.ceil(o.length/2))))):$.default.createElement("span",null,o))},yl=N(Jb,{ssrStyles:()=>Promise.resolve().then(()=>(za(),ja)),clientStyles:()=>(za(),F(ja)).default});var e0=({amount:o,label:e,receiver:t,customExplorerIcon:r,receiverUsername:s,customCopyIcon:p,scamReport:m,styles:d})=>{let _=Jr(t),l=Boolean(_||s),g=new vl.default(o).isZero(),{data:T,isLoading:b,error:v}=yn(l?null:t),A=s!=null?s:T==null?void 0:T.username,M=A!=null?A:t,O=Boolean(t&&Boolean(A)&&!v),z=g?"To interact with":"To";return j.default.createElement("div",{className:d==null?void 0:d.receiver},j.default.createElement("div",{className:d==null?void 0:d.receiverLabelWrapper},j.default.createElement("div",{className:d==null?void 0:d.receiverLabel},e!=null?e:z),m&&j.default.createElement("div",{className:d==null?void 0:d.receiverLabelScam},j.default.createElement("span",{className:d==null?void 0:d.receiverLabelScamText,"data-testid":"confirmScamReport"},m),j.default.createElement(wl.FontAwesomeIcon,{icon:bl.faExclamationTriangle,className:d==null?void 0:d.receiverLabelScamIcon}))),b?j.default.createElement("div",{className:d==null?void 0:d.receiverWrapper},j.default.createElement(To,{className:d==null?void 0:d.receiverLoading})):j.default.createElement("div",{className:d==null?void 0:d.receiverWrapper,"data-testid":"confirmReceiver"},j.default.createElement(yl,{text:t,className:d==null?void 0:d.receiverTrim}),O&&!_&&j.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",j.default.createElement(Ut,{className:d==null?void 0:d.receiverDataIcon}),j.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},_l(M)),")"),_&&j.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",j.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},"Smart Contract"),")"),j.default.createElement(an,{text:t,className:d==null?void 0:d.receiverCopy,copyIcon:p}),j.default.createElement(hl,{page:`/${te}/${t}`,className:d==null?void 0:d.receiverExternal,customExplorerIcon:r})))},Al=N(e0,{ssrStyles:()=>Promise.resolve().then(()=>(Xa(),Ka)),clientStyles:()=>(Xa(),F(Ka)).default});var n0=({currentTransaction:o,error:e,signStepInnerClasses:t,globalStyles:r,styles:s})=>{if(!o)return null;let{inputGroupClassName:p,inputLabelClassName:m,inputValueClassName:d,errorClassName:_}=t||{},{tokenId:l,multiTxData:g,receiver:T,amount:b}=o.transactionTokenInfo,v=g?new kl.Address(T).bech32():o.transaction.getReceiver().toString(),A=o.receiverScamInfo,M=ss(A,r),O=o.transaction.getData().toString();return no.default.createElement("div",{className:s==null?void 0:s.summary},no.default.createElement("div",{className:s==null?void 0:s.fields},no.default.createElement(pl,{currentTransaction:o}),no.default.createElement(Al,{scamReport:A,receiver:v,amount:b}),no.default.createElement(dl,{transaction:o.transaction}),O&&no.default.createElement(is,{className:p,data:O,highlight:g,innerTransactionDataClasses:{transactionDataInputLabelClassName:m,transactionDataInputValueClassName:d},isScCall:!l,showDataDecode:!0,transactionIndex:o.transactionIndex}),e&&no.default.createElement("p",{className:(0,Ll.default)(M.errorMessage,_)},e)))},t0=N(n0,{ssrStyles:()=>Promise.resolve().then(()=>(Za(),Ya)),clientStyles:()=>(Za(),F(Ya)).default});0&&(module.exports={SignStepBody});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
