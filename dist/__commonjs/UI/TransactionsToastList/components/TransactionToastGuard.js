"use strict";var yd=Object.create;var No=Object.defineProperty,Sd=Object.defineProperties,bd=Object.getOwnPropertyDescriptor,wd=Object.getOwnPropertyDescriptors,vd=Object.getOwnPropertyNames,an=Object.getOwnPropertySymbols,Id=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty,ra=Object.prototype.propertyIsEnumerable;var ta=(e,o,t)=>o in e?No(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))ft.call(o,t)&&ta(e,t,o[t]);if(an)for(var t of an(o))ra.call(o,t)&&ta(e,t,o[t]);return e},v=(e,o)=>Sd(e,wd(o));var we=(e,o)=>{var t={};for(var s in e)ft.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&an)for(var s of an(e))o.indexOf(s)<0&&ra.call(e,s)&&(t[s]=e[s]);return t};var x=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),q=(e,o)=>{for(var t in o)No(e,t,{get:o[t],enumerable:!0})},aa=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of vd(o))!ft.call(e,c)&&c!==t&&No(e,c,{get:()=>o[c],enumerable:!(s=bd(o,c))||s.enumerable});return e};var T=(e,o,t)=>(t=e!=null?yd(Id(e)):{},aa(o||!e||!e.__esModule?No(t,"default",{value:e,enumerable:!0}):t,e)),F=e=>aa(No({},"__esModule",{value:!0}),e);var y=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{d(t.next(l))}catch(u){c(u)}},m=l=>{try{d(t.throw(l))}catch(u){c(u)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var ca=b(sn=>{"use strict";n();sn.byteLength=kd;sn.toByteArray=Pd;sn.fromByteArray=Nd;var _e=[],ie=[],Ad=typeof Uint8Array!="undefined"?Uint8Array:Array,Tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ve=0,ia=Tt.length;Ve<ia;++Ve)_e[Ve]=Tt[Ve],ie[Tt.charCodeAt(Ve)]=Ve;var Ve,ia;ie["-".charCodeAt(0)]=62;ie["_".charCodeAt(0)]=63;function sa(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function kd(e){var o=sa(e),t=o[0],s=o[1];return(t+s)*3/4-s}function Ld(e,o,t){return(o+t)*3/4-t}function Pd(e){var o,t=sa(e),s=t[0],c=t[1],p=new Ad(Ld(e,s,c)),m=0,d=c>0?s-4:s,l;for(l=0;l<d;l+=4)o=ie[e.charCodeAt(l)]<<18|ie[e.charCodeAt(l+1)]<<12|ie[e.charCodeAt(l+2)]<<6|ie[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ie[e.charCodeAt(l)]<<2|ie[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ie[e.charCodeAt(l)]<<10|ie[e.charCodeAt(l+1)]<<4|ie[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Cd(e){return _e[e>>18&63]+_e[e>>12&63]+_e[e>>6&63]+_e[e&63]}function Ed(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Cd(s));return c.join("")}function Nd(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,d=t-s;m<d;m+=p)c.push(Ed(e,m,m+p>d?d:m+p));return s===1?(o=e[t-1],c.push(_e[o>>2]+_e[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(_e[o>>10]+_e[o>>4&63]+_e[o<<2&63]+"=")),c.join("")}});var pa=b(ht=>{n();ht.read=function(e,o,t,s,c){var p,m,d=c*8-s-1,l=(1<<d)-1,u=l>>1,f=-7,h=t?c-1:0,w=t?-1:1,P=e[o+h];for(h+=w,p=P&(1<<-f)-1,P>>=-f,f+=d;f>0;p=p*256+e[o+h],h+=w,f-=8);for(m=p&(1<<-f)-1,p>>=-f,f+=s;f>0;m=m*256+e[o+h],h+=w,f-=8);if(p===0)p=1-u;else{if(p===l)return m?NaN:(P?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-u}return(P?-1:1)*m*Math.pow(2,p-s)};ht.write=function(e,o,t,s,c,p){var m,d,l,u=p*8-c-1,f=(1<<u)-1,h=f>>1,w=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,P=s?0:p-1,N=s?1:-1,G=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=f):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+h>=1?o+=w/l:o+=w*Math.pow(2,1-h),o*l>=2&&(m++,l/=2),m+h>=f?(d=0,m=f):m+h>=1?(d=(o*l-1)*Math.pow(2,c),m=m+h):(d=o*Math.pow(2,h-1)*Math.pow(2,c),m=0));c>=8;e[t+P]=d&255,P+=N,d/=256,c-=8);for(m=m<<c|d,u+=c;u>0;e[t+P]=m&255,P+=N,m/=256,u-=8);e[t+P-N]|=G*128}});var ba=b(lo=>{"use strict";n();var xt=ca(),mo=pa(),ma=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;lo.Buffer=_;lo.SlowBuffer=Fd;lo.INSPECT_MAX_BYTES=50;var cn=2147483647;lo.kMaxLength=cn;_.TYPED_ARRAY_SUPPORT=Dd();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Dd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function ve(e){if(e>cn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return wt(e)}return _a(e,o,t)}_.poolSize=8192;function _a(e,o,t){if(typeof e=="string")return Md(e,o);if(ArrayBuffer.isView(e))return Od(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ue(e,ArrayBuffer)||e&&ue(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ue(e,SharedArrayBuffer)||e&&ue(e.buffer,SharedArrayBuffer)))return St(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return _.from(s,o,t);var c=Bd(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return _a(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function ua(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Rd(e,o,t){return ua(e),e<=0?ve(e):o!==void 0?typeof t=="string"?ve(e).fill(o,t):ve(e).fill(o):ve(e)}_.alloc=function(e,o,t){return Rd(e,o,t)};function wt(e){return ua(e),ve(e<0?0:vt(e)|0)}_.allocUnsafe=function(e){return wt(e)};_.allocUnsafeSlow=function(e){return wt(e)};function Md(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=ga(e,o)|0,s=ve(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function yt(e){for(var o=e.length<0?0:vt(e.length)|0,t=ve(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Od(e){if(ue(e,Uint8Array)){var o=new Uint8Array(e);return St(o.buffer,o.byteOffset,o.byteLength)}return yt(e)}function St(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,_.prototype),s}function Bd(e){if(_.isBuffer(e)){var o=vt(e.length)|0,t=ve(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||It(e.length)?ve(0):yt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return yt(e.data)}function vt(e){if(e>=cn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+cn.toString(16)+" bytes");return e|0}function Fd(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(ue(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),ue(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=_.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ue(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function ga(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ue(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return bt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Sa(e).length;default:if(c)return s?-1:bt(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=ga;function Ud(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Xd(this,o,t);case"utf8":case"utf-8":return Ta(this,o,t);case"ascii":return zd(this,o,t);case"latin1":case"binary":return Kd(this,o,t);case"base64":return qd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yd(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}_.prototype._isBuffer=!0;function qe(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)qe(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)qe(this,t,t+3),qe(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)qe(this,t,t+7),qe(this,t+1,t+6),qe(this,t+2,t+5),qe(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ta(this,0,o):Ud.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=lo.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};ma&&(_.prototype[ma]=_.prototype.inspect);_.prototype.compare=function(o,t,s,c,p){if(ue(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=s-t,l=Math.min(m,d),u=this.slice(c,p),f=o.slice(t,s),h=0;h<l;++h)if(u[h]!==f[h]){m=u[h],d=f[h];break}return m<d?-1:d<m?1:0};function fa(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,It(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,s)),_.isBuffer(o))return o.length===0?-1:da(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):da(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function da(e,o,t,s,c){var p=1,m=e.length,d=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(P,N){return p===1?P[N]:P.readUInt16BE(N*p)}var u;if(c){var f=-1;for(u=t;u<m;u++)if(l(e,u)===l(o,f===-1?0:u-f)){if(f===-1&&(f=u),u-f+1===d)return f*p}else f!==-1&&(u-=u-f),f=-1}else for(t+d>m&&(t=m-d),u=t;u>=0;u--){for(var h=!0,w=0;w<d;w++)if(l(e,u+w)!==l(o,w)){h=!1;break}if(h)return u}return-1}_.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};_.prototype.indexOf=function(o,t,s){return fa(this,o,t,s,!0)};_.prototype.lastIndexOf=function(o,t,s){return fa(this,o,t,s,!1)};function Wd(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var d=parseInt(o.substr(m*2,2),16);if(It(d))return m;e[t+m]=d}return m}function Gd(e,o,t,s){return pn(bt(o,e.length-t),e,t,s)}function Hd(e,o,t,s){return pn(Qd(o),e,t,s)}function $d(e,o,t,s){return pn(Sa(o),e,t,s)}function Vd(e,o,t,s){return pn(el(o,e.length-t),e,t,s)}_.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Wd(this,o,t,s);case"utf8":case"utf-8":return Gd(this,o,t,s);case"ascii":case"latin1":case"binary":return Hd(this,o,t,s);case"base64":return $d(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Vd(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function qd(e,o,t){return o===0&&t===e.length?xt.fromByteArray(e):xt.fromByteArray(e.slice(o,t))}function Ta(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,u,f,h;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(h=(p&31)<<6|l&63,h>127&&(m=h));break;case 3:l=e[c+1],u=e[c+2],(l&192)===128&&(u&192)===128&&(h=(p&15)<<12|(l&63)<<6|u&63,h>2047&&(h<55296||h>57343)&&(m=h));break;case 4:l=e[c+1],u=e[c+2],f=e[c+3],(l&192)===128&&(u&192)===128&&(f&192)===128&&(h=(p&15)<<18|(l&63)<<12|(u&63)<<6|f&63,h>65535&&h<1114112&&(m=h))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=d}return jd(s)}var la=4096;function jd(e){var o=e.length;if(o<=la)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=la));return t}function zd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Kd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Xd(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=ol[e[p]];return c}function Yd(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}_.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,_.prototype),c};function H(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||H(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||H(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||H(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||H(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||H(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||H(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||H(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};_.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||H(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||H(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||H(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||H(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||H(o,4,this.length),mo.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||H(o,4,this.length),mo.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||H(o,8,this.length),mo.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||H(o,8,this.length),mo.read(this,o,!1,52,8)};function X(e,o,t,s,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;X(this,o,t,s,p,0)}var m=1,d=0;for(this[t]=o&255;++d<s&&(m*=256);)this[t+d]=o/m&255;return t+s};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;X(this,o,t,s,p,0)}var m=s-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+s};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);X(this,o,t,s,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<s&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+s};_.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);X(this,o,t,s,p-1,-p)}var m=s-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+s};_.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||X(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function ha(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xa(e,o,t,s,c){return o=+o,t=t>>>0,c||ha(e,o,t,4,34028234663852886e22,-34028234663852886e22),mo.write(e,o,t,s,23,4),t+4}_.prototype.writeFloatLE=function(o,t,s){return xa(this,o,t,!0,s)};_.prototype.writeFloatBE=function(o,t,s){return xa(this,o,t,!1,s)};function ya(e,o,t,s,c){return o=+o,t=t>>>0,c||ha(e,o,t,8,17976931348623157e292,-17976931348623157e292),mo.write(e,o,t,s,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,s){return ya(this,o,t,!0,s)};_.prototype.writeDoubleBE=function(o,t,s){return ya(this,o,t,!1,s)};_.prototype.copy=function(o,t,s,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};_.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=d[m%l]}return this};var Jd=/[^+/0-9A-Za-z-_]/g;function Zd(e){if(e=e.split("=")[0],e=e.trim().replace(Jd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function bt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Qd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function el(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Sa(e){return xt.toByteArray(Zd(e))}function pn(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ue(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function It(e){return e!==e}var ol=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var ka=b((ry,Aa)=>{n();var B=Aa.exports={},ge,fe;function At(){throw new Error("setTimeout has not been defined")}function kt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ge=setTimeout:ge=At}catch(e){ge=At}try{typeof clearTimeout=="function"?fe=clearTimeout:fe=kt}catch(e){fe=kt}})();function wa(e){if(ge===setTimeout)return setTimeout(e,0);if((ge===At||!ge)&&setTimeout)return ge=setTimeout,setTimeout(e,0);try{return ge(e,0)}catch(o){try{return ge.call(null,e,0)}catch(t){return ge.call(this,e,0)}}}function nl(e){if(fe===clearTimeout)return clearTimeout(e);if((fe===kt||!fe)&&clearTimeout)return fe=clearTimeout,clearTimeout(e);try{return fe(e)}catch(o){try{return fe.call(null,e)}catch(t){return fe.call(this,e)}}}var Ie=[],_o=!1,je,mn=-1;function tl(){!_o||!je||(_o=!1,je.length?Ie=je.concat(Ie):mn=-1,Ie.length&&va())}function va(){if(!_o){var e=wa(tl);_o=!0;for(var o=Ie.length;o;){for(je=Ie,Ie=[];++mn<o;)je&&je[mn].run();mn=-1,o=Ie.length}je=null,_o=!1,nl(e)}}B.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];Ie.push(new Ia(e,o)),Ie.length===1&&!_o&&wa(va)};function Ia(e,o){this.fun=e,this.array=o}Ia.prototype.run=function(){this.fun.apply(null,this.array)};B.title="browser";B.browser=!0;B.env={};B.argv=[];B.version="";B.versions={};function Ae(){}B.on=Ae;B.addListener=Ae;B.once=Ae;B.off=Ae;B.removeListener=Ae;B.removeAllListeners=Ae;B.emit=Ae;B.prependListener=Ae;B.prependOnceListener=Ae;B.listeners=function(e){return[]};B.binding=function(e){throw new Error("process.binding is not supported")};B.cwd=function(){return"/"};B.chdir=function(e){throw new Error("process.chdir is not supported")};B.umask=function(){return 0}});var r,i,rl,a,n=x(()=>{r=T(ba()),i=T(ka()),rl=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=rl});var ke,ze=x(()=>{"use strict";n();ke=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Lt={};q(Lt,{css:()=>Pa,default:()=>al});var Pa,al,Pt=x(()=>{"use strict";n();Pa=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pa));al={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Ke,Ro=x(()=>{"use strict";n();Ke=()=>Date.now()/1e3});var Ea,Et=x(()=>{"use strict";n();Ea=e=>new Date().setMilliseconds(new Date().getMilliseconds()+e)/1e3});var Na,Da=x(()=>{"use strict";n();Na=e=>new Date().setSeconds(new Date().getSeconds()+e)});var ln=x(()=>{"use strict";n();Ro();Et();Da()});var Dt={};q(Dt,{clear:()=>_l,getItem:()=>dl,localStorageKeys:()=>Me,removeItem:()=>ll,setItem:()=>ml});var Me,un,ml,dl,ll,_l,uo=x(()=>{"use strict";n();ln();Me={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},un=typeof localStorage!="undefined",ml=({key:e,data:o,expires:t})=>{!un||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},dl=e=>{if(!un)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Ke()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},ll=e=>{!un||localStorage.removeItem(String(e))},_l=()=>{!un||localStorage.clear()}});var Rt={};q(Rt,{clear:()=>Fa,getItem:()=>Oa,removeItem:()=>Ba,setItem:()=>Ma,storage:()=>ul});var Ma,Oa,Ba,Fa,ul,Ua=x(()=>{"use strict";n();Ma=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Oa=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ba=e=>sessionStorage.removeItem(String(e)),Fa=()=>sessionStorage.clear(),ul={setItem:Ma,getItem:Oa,removeItem:Ba,clear:Fa}});var ee,Xe=x(()=>{"use strict";n();uo();Ua();ee={session:Rt,local:Dt}});var Mt={};q(Mt,{css:()=>Wa,default:()=>gl});var Wa,gl,Ot=x(()=>{"use strict";n();Wa=`.dapp-core-component__progressStyles__progress {
  position: relative;
}
.dapp-core-component__progressStyles__progress .dapp-core-component__progressStyles__bar {
  position: absolute;
  pointer-events: none;
  left: -0.5rem;
  right: -0.5rem;
  bottom: -0.5rem;
  top: -0.5rem;
  background-color: #495057;
  opacity: 0.25;
  transition: width 0.6s ease;
  max-width: calc(100% + 1rem);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wa));gl={progress:"dapp-core-component__progressStyles__progress",bar:"dapp-core-component__progressStyles__bar"}});var $a=x(()=>{"use strict";n()});var Te=x(()=>{"use strict";n()});var Va=x(()=>{"use strict";n()});var Bt,qa=x(()=>{"use strict";n();Bt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(Bt||{})});var ja=x(()=>{"use strict";n()});var Ft=x(()=>{"use strict";n()});var za=x(()=>{"use strict";n()});var Ut=x(()=>{"use strict";n()});var Ka=x(()=>{"use strict";n()});var Xa=x(()=>{"use strict";n()});var Ye,go,Oe=x(()=>{"use strict";n();Ye=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),go=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var se,Ya,$y,Ja,Vy,D=x(()=>{"use strict";n();Oe();se=(d=>(d.pending="pending",d.fail="fail",d.invalid="invalid",d.success="success",d.executed="executed",d.notExecuted="not executed",d.rewardReverted="reward-reverted",d))(se||{}),Ya=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Ya||{}),$y=g(g({},go.WindowProviderRequestEnums),Ya),Ja=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ja||{}),Vy=g(g({},go.WindowProviderResponseEnums),Ja)});var Za=x(()=>{"use strict";n()});var Qa=x(()=>{"use strict";n()});var Y=x(()=>{"use strict";n()});var ei=x(()=>{"use strict";n()});var oi=x(()=>{"use strict";n()});var ni=x(()=>{"use strict";n()});var R=x(()=>{"use strict";n();Ut();Ka();Xa();D();Za();Qa();Y();ei();oi();ni()});var fo,ti,sS,ri,cS,ai,pS,mS,Tl,To=x(()=>{"use strict";n();R();fo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ti,egldLabel:sS}=fo["devnet"],{chainId:ri,egldLabel:cS}=fo["testnet"],{chainId:ai,egldLabel:pS}=fo["mainnet"],mS={["devnet"]:ti,["testnet"]:ri,["mainnet"]:ai},Tl={[ti]:"devnet",[ri]:"testnet",[ai]:"mainnet"}});var gn=x(()=>{"use strict";n()});var he,ii=x(()=>{"use strict";n();he=require("@multiversx/sdk-web-wallet-provider")});var Je,Oo=x(()=>{"use strict";n();Je=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var si,ci,Wt,fS,TS,Gt=x(()=>{"use strict";n();Oo();Wt=String((ci=(si=Je.safeWindow)==null?void 0:si.navigator)==null?void 0:ci.userAgent),fS=/^((?!chrome|android).)*safari/i.test(Wt),TS=/firefox/i.test(Wt)&&/windows/i.test(Wt)});var fn,Tn,pi,Ht,hn,mi,ho,di,I=x(()=>{"use strict";n();$a();Te();Va();qa();ja();Ft();za();To();gn();ii();Gt();fn=5e4,Tn=1e9,pi=1,Ht=4294967295,hn="logout",mi="login",ho="0",di="..."});var Vt,M,ne,O=x(()=>{"use strict";n();Vt=require("@reduxjs/toolkit");I();M=(0,Vt.createAction)(hn),ne=(0,Vt.createAction)(mi,e=>({payload:e}))});var jt,gi,fi,yn,qt,Ti,Sn,hl,zt,GS,xl,yl,HS,$S,VS,Sl,bl,bn,wn=x(()=>{"use strict";n();jt=require("@multiversx/sdk-core"),gi=require("@reduxjs/toolkit"),fi=require("redux-persist");I();Xe();uo();O();yn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ho},qt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":yn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ti=(0,gi.createSlice)({name:"accountInfoSlice",initialState:qt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new jt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:yn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(M,()=>(ee.local.removeItem(Me.loginExpiresAt),qt)),e.addCase(ne,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new jt.Address(s).hex()}),e.addCase(fi.REHYDRATE,(o,t)=>{var u;if(!((u=t.payload)!=null&&u.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:qt.accounts,o.publicKey=d})}}),{setAccount:Sn,setAddress:hl,setAccountNonce:zt,setAccountShard:GS,setLedgerAccount:xl,updateLedgerAccount:yl,setWalletConnectAccount:HS,setIsAccountLoading:$S,setAccountLoadingError:VS,setWebsocketEvent:Sl,setWebsocketBatchEvent:bl}=Ti.actions,bn=Ti.reducer});function Bo(){return new Date().setHours(new Date().getHours()+24)}function Fo(e){ee.local.setItem({key:Me.loginExpiresAt,data:e,expires:e})}var Kt=x(()=>{"use strict";n();Xe();uo()});var xi,hi,yi,eb,wl,vl,Si,ob,Il,bi,nb,tb,rb,vn,In=x(()=>{"use strict";n();xi=require("@reduxjs/toolkit");Kt();D();O();hi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},yi=(0,xi.createSlice)({name:"loginInfoSlice",initialState:hi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(M,()=>hi),e.addCase(ne,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Fo(Bo())})}}),{setLoginMethod:eb,setWalletConnectLogin:wl,setLedgerLogin:vl,setTokenLogin:Si,setTokenLoginSignature:ob,setWalletLogin:Il,invalidateLoginSession:bi,setLogoutRoute:nb,setIsWalletConnectV2Initialized:tb,setWebviewLogin:rb}=yi.actions,vn=yi.reducer});var vi,wi,Ii,cb,Al,pb,kl,An,kn=x(()=>{"use strict";n();vi=require("@reduxjs/toolkit");O();wi={},Ii=(0,vi.createSlice)({name:"modalsSlice",initialState:wi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(M,()=>wi)}}),{setTxSubmittedModal:cb,setNotificationModal:Al,clearTxSubmittedModal:pb,clearNotificationModal:kl}=Ii.actions,An=Ii.reducer});var U,V=x(()=>{"use strict";n();ze();U=()=>{if(!ke())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Ai=x(()=>{"use strict";n();V()});var ki=x(()=>{"use strict";n();j()});var Li=x(()=>{"use strict";n();Oo()});var j=x(()=>{"use strict";n();Ai();ki();V();Li()});var Uo=x(()=>{"use strict";n();j()});var Ci=x(()=>{"use strict";n();Uo()});function Ei(e){return e[Math.floor(Math.random()*e.length)]}var Ni=x(()=>{"use strict";n()});var Xt=x(()=>{"use strict";n();Ft()});var Le=x(()=>{"use strict";n();Ci();Ni();Xt()});var Di,Ri,Mi,Yt,Ll,Oi,Gb,Hb,Pl,Pn,Cn=x(()=>{"use strict";n();Di=require("@reduxjs/toolkit"),Ri=T(require("lodash.omit")),Mi=require("redux-persist");gn();O();Le();Yt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Ll={network:Yt},Oi=(0,Di.createSlice)({name:"appConfig",initialState:Ll,reducers:{initializeNetworkConfig:(e,o)=>{let t=Ei(o.payload.walletConnectV2RelayAddresses),s=(0,Ri.default)(o.payload,"walletConnectV2RelayAddresses");e.network=v(g(g({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=g(g({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(M,o=>{o.network.customWalletAddress=void 0}),e.addCase(Mi.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:Gb,updateNetworkConfig:Hb,setCustomWalletAddress:Pl}=Oi.actions,Pn=Oi.reducer});var Bi,Jt,Fi,Kb,Xb,Yb,En,Nn=x(()=>{"use strict";n();Bi=require("@reduxjs/toolkit");R();O();Jt={isSigning:!1,signedSessions:{}},Fi=(0,Bi.createSlice)({name:"signedMessageInfoSliceState",initialState:Jt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=g(g({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>g(g({},e),o.payload),clearSignedMessageInfo:()=>Jt},extraReducers:e=>{e.addCase(M,()=>Jt)}}),{setSignSession:Kb,clearSignedMessageInfo:Xb,setSignSessionState:Yb}=Fi.actions,En=Fi.reducer});var Wi,Gi,Ui,Hi,Cl,El,t0,Nl,Dn,Rn=x(()=>{"use strict";n();Wi=require("@reduxjs/toolkit"),Gi=require("redux-persist");R();Ro();O();Ui={customToasts:[],transactionToasts:[]},Hi=(0,Wi.createSlice)({name:"toastsSlice",initialState:Ui,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=v(g(g({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(v(g({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Ke(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(M,()=>Ui),e.addCase(Gi.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:Cl,removeCustomToast:El,addTransactionToast:t0,removeTransactionToast:Nl}=Hi.actions,Dn=Hi.reducer});var $i,Qt,er,or,Dl,Zt,Vi,s0,Rl,nr,Mn,On=x(()=>{"use strict";n();$i=require("@reduxjs/toolkit");O();Qt="Transaction failed",er="Transaction successful",or="Processing transaction",Dl="Transaction submitted",Zt={},Vi=(0,$i.createSlice)({name:"transactionsInfo",initialState:Zt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Qt,successMessage:(s==null?void 0:s.successMessage)||er,processingMessage:(s==null?void 0:s.processingMessage)||or,submittedMessage:(s==null?void 0:s.submittedMessage)||Dl,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Zt},extraReducers:e=>{e.addCase(M,()=>Zt)}}),{clearTransactionsInfo:s0,setTransactionsDisplayInfo:Rl,clearTransactionsInfoForSessionId:nr}=Vi.actions,Mn=Vi.reducer});function Be(e){return e!=null&&(Vl(e)||Bn(e))}function Fe(e){return e!=null&&(ql(e)||Xl(e))}function Ue(e){return e!=null&&(jl(e)||Yl(e))}function qi(e){return e!=null&&(zl(e)||Jl(e))}function Wo(e){return e!=null&&Kl(e)}function Vl(e){return e!=null&&Ml.includes(e)}function ql(e){return e!=null&&Ol.includes(e)}function jl(e){return e!=null&&Bl.includes(e)}function zl(e){return e!=null&&Fl.includes(e)}function Kl(e){return e!=null&&Ul.includes(e)}function Bn(e){return e!=null&&Wl.includes(e)}function Xl(e){return e!=null&&Gl.includes(e)}function Yl(e){return e!=null&&Hl.includes(e)}function Jl(e){return e!=null&&$l.includes(e)}var Ml,Ol,Bl,Fl,Ul,Wl,Gl,Hl,$l,We=x(()=>{"use strict";n();D();Ml=["sent"],Ol=["success"],Bl=["fail","cancelled","timedOut"],Fl=["invalid"],Ul=["timedOut"],Wl=["pending"],Gl=["success"],Hl=["fail","invalid"],$l=["not executed"]});var ji,zi,Go,Zl,Ki,Xi,Yi,Ql,Fn,e_,o_,f0,n_,Ho,tr,T0,Un,Wn=x(()=>{"use strict";n();ji=require("@reduxjs/toolkit"),zi=require("redux-persist");D();We();O();Go={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Zl={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Ki=(0,ji.createSlice)({name:"transactionsSlice",initialState:Go,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,u;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=g(g(g({},Zl),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:g(g({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((u=e==null?void 0:e.transactionsToSign)==null?void 0:u.sessionId)===t&&(e.transactionsToSign=Go.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=g(g({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var u,f,h,w,P,N,G,Z;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(f=(u=e.signedTransactions)==null?void 0:u[t])==null?void 0:f.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(L=>L.hash===p?v(g(g({},m!=null?m:{}),L),{status:s,errorMessage:c,inTransit:d}):L);let be=(w=(h=e.signedTransactions[t])==null?void 0:h.transactions)==null?void 0:w.every(L=>Fe(L.status)),Q=(N=(P=e.signedTransactions[t])==null?void 0:P.transactions)==null?void 0:N.some(L=>Ue(L.status)),le=(Z=(G=e.signedTransactions[t])==null?void 0:G.transactions)==null?void 0:Z.every(L=>qi(L.status));be&&(e.signedTransactions[t].status="success"),Q&&(e.signedTransactions[t].status="fail"),le&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Go.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Go.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=g(g({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(M,()=>Go),e.addCase(zi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((d,[l,u])=>{let f=new Date(l),h=new Date;return h.setHours(h.getHours()+5),h-f>0||(d[l]=u),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Xi,updateSignedTransactions:Yi,setTransactionsToSign:Ql,clearAllTransactionsToSign:Fn,clearAllSignedTransactions:e_,clearSignedTransaction:o_,clearTransactionToSign:f0,setSignTransactionsError:n_,setSignTransactionsCancelMessage:Ho,moveTransactionsToSignedState:tr,updateSignedTransactionsCustomTransactionInformation:T0}=Ki.actions,Un=Ki.reducer});var Ji,rr,Zi,S0,b0,t_,w0,Gn,Hn=x(()=>{"use strict";n();Ji=require("@reduxjs/toolkit");O();rr={},Zi=(0,Ji.createSlice)({name:"batchTransactionsSlice",initialState:rr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>rr},extraReducers:e=>{e.addCase(M,()=>rr)}}),{setBatchTransactions:S0,updateBatchTransactions:b0,clearBatchTransactions:t_,clearAllBatchTransactions:w0}=Zi.actions,Gn=Zi.reducer});var es,Qi,os,k0,ns,ar=x(()=>{"use strict";n();es=require("@reduxjs/toolkit");O();Qi={},os=(0,es.createSlice)({name:"dappConfigSlice",initialState:Qi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(M,()=>Qi)}}),{setDappConfig:k0}=os.actions,ns=os.reducer});var C=x(()=>{"use strict";n();wn();In();kn();Cn();Nn();Rn();On();Wn();Hn();ar()});var ir=x(()=>{"use strict";n()});var as,s_,c_,Ze,qn=x(()=>{"use strict";n();as=require("@reduxjs/toolkit");ir();wn();Hn();ar();In();kn();Cn();Nn();Rn();On();Wn();s_={["account"]:bn,["dappConfig"]:ns,["loginInfo"]:vn,["modals"]:An,["networkConfig"]:Pn,["signedMessageInfo"]:En,["toasts"]:Dn,["transactionsInfo"]:Mn,["transactions"]:Un,["batchTransactions"]:Gn},c_=(e={})=>(0,as.combineReducers)(g(g({},s_),e)),Ze=c_});var ps={};q(ps,{default:()=>v_,sessionStorageReducers:()=>sr});function Ce(e,o=[]){return{key:e,version:1,storage:ss.default,blacklist:o}}var J,is,ss,p_,$o,m_,d_,l_,__,u_,g_,f_,T_,h_,x_,cs,y_,sr,S_,b_,w_,v_,ms=x(()=>{"use strict";n();J=require("redux-persist"),is=T(require("redux-persist/lib/storage")),ss=T(require("redux-persist/lib/storage/session"));qn();C();wn();Hn();In();kn();Cn();Nn();Rn();On();Wn();ir();p_={persistReducersStorageType:"localStorage"},$o={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},m_=Ce($o["account"]),d_=Ce($o["loginInfo"]),l_=Ce($o["modals"]),__=Ce($o["networkConfig"]),u_={2:e=>v(g({},e),{networkConfig:Yt})};g_=Ce("sdk-dapp-transactionsInfo"),f_=Ce("sdk-dapp-transactions",["transactionsToSign"]),T_=Ce("sdk-dapp-batchTransactions",["batchTransactions"]),h_=Ce("sdk-dapp-toasts"),x_=Ce("sdk-dapp-signedMessageInfo"),cs={key:"sdk-dapp-store",version:2,storage:is.default,whitelist:Object.keys($o),migrate:(0,J.createMigrate)(u_,{debug:!1})},y_=v(g({},cs),{whitelist:[]}),sr={["toasts"]:(0,J.persistReducer)(h_,Dn),["transactions"]:(0,J.persistReducer)(f_,Un),["transactionsInfo"]:(0,J.persistReducer)(g_,Mn),["batchTransactions"]:(0,J.persistReducer)(T_,Gn),["signedMessageInfo"]:(0,J.persistReducer)(x_,En)},S_=v(g({},sr),{["account"]:(0,J.persistReducer)(m_,bn),["loginInfo"]:(0,J.persistReducer)(d_,vn),["modals"]:(0,J.persistReducer)(l_,An),["networkConfig"]:(0,J.persistReducer)(__,Pn)}),b_=p_.persistReducersStorageType==="localStorage",w_=b_?(0,J.persistReducer)(cs,Ze(sr)):(0,J.persistReducer)(y_,Ze(S_)),v_=w_});var ds={};q(ds,{default:()=>I_});var I_,ls=x(()=>{"use strict";n();qn();I_=Ze()});var _s={};q(_s,{default:()=>k_});var ce,A_,k_,us=x(()=>{"use strict";n();ce=require("redux-persist"),A_=[ce.FLUSH,ce.REHYDRATE,ce.PAUSE,ce.PERSIST,ce.PURGE,ce.REGISTER],k_=A_});var Ts={};q(Ts,{default:()=>fs});function fs(e){return(0,gs.persistStore)(e)}var gs,hs=x(()=>{"use strict";n();gs=require("redux-persist")});var kr={};q(kr,{css:()=>sc,default:()=>sg});var sc,sg,Lr=x(()=>{"use strict";n();sc=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sc));sg={copy:"dapp-core-component__copyButton-styles__copy"}});var Cr={};q(Cr,{css:()=>mc,default:()=>pg});var mc,pg,Er=x(()=>{"use strict";n();mc=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mc));pg={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var kc=b((aM,Ac)=>{n();var Lg=typeof a=="object"&&a&&a.Object===Object&&a;Ac.exports=Lg});var Xo=b((iM,Lc)=>{n();var Pg=kc(),Cg=typeof self=="object"&&self&&self.Object===Object&&self,Eg=Pg||Cg||Function("return this")();Lc.exports=Eg});var Rr=b((sM,Pc)=>{n();var Ng=Xo(),Dg=Ng.Symbol;Pc.exports=Dg});var Dc=b((cM,Nc)=>{n();var Cc=Rr(),Ec=Object.prototype,Rg=Ec.hasOwnProperty,Mg=Ec.toString,Yo=Cc?Cc.toStringTag:void 0;function Og(e){var o=Rg.call(e,Yo),t=e[Yo];try{e[Yo]=void 0;var s=!0}catch(p){}var c=Mg.call(e);return s&&(o?e[Yo]=t:delete e[Yo]),c}Nc.exports=Og});var Mc=b((pM,Rc)=>{n();var Bg=Object.prototype,Fg=Bg.toString;function Ug(e){return Fg.call(e)}Rc.exports=Ug});var Mr=b((mM,Fc)=>{n();var Oc=Rr(),Wg=Dc(),Gg=Mc(),Hg="[object Null]",$g="[object Undefined]",Bc=Oc?Oc.toStringTag:void 0;function Vg(e){return e==null?e===void 0?$g:Hg:Bc&&Bc in Object(e)?Wg(e):Gg(e)}Fc.exports=Vg});var Wc=b((dM,Uc)=>{n();var qg=Array.isArray;Uc.exports=qg});var Hc=b((lM,Gc)=>{n();function jg(e){return e!=null&&typeof e=="object"}Gc.exports=jg});var Vc=b((_M,$c)=>{n();var zg=Mr(),Kg=Wc(),Xg=Hc(),Yg="[object String]";function Jg(e){return typeof e=="string"||!Kg(e)&&Xg(e)&&zg(e)==Yg}$c.exports=Jg});var ct=b((l5,Xc)=>{n();function Tf(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Xc.exports=Tf});var Jc=b((_5,Yc)=>{n();var hf=Mr(),xf=ct(),yf="[object AsyncFunction]",Sf="[object Function]",bf="[object GeneratorFunction]",wf="[object Proxy]";function vf(e){if(!xf(e))return!1;var o=hf(e);return o==Sf||o==bf||o==yf||o==wf}Yc.exports=vf});var Qc=b((u5,Zc)=>{n();var If=Xo(),Af=If["__core-js_shared__"];Zc.exports=Af});var np=b((g5,op)=>{n();var Ur=Qc(),ep=function(){var e=/[^.]+$/.exec(Ur&&Ur.keys&&Ur.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function kf(e){return!!ep&&ep in e}op.exports=kf});var rp=b((f5,tp)=>{n();var Lf=Function.prototype,Pf=Lf.toString;function Cf(e){if(e!=null){try{return Pf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}tp.exports=Cf});var ip=b((T5,ap)=>{n();var Ef=Jc(),Nf=np(),Df=ct(),Rf=rp(),Mf=/[\\^$.*+?()[\]{}|]/g,Of=/^\[object .+?Constructor\]$/,Bf=Function.prototype,Ff=Object.prototype,Uf=Bf.toString,Wf=Ff.hasOwnProperty,Gf=RegExp("^"+Uf.call(Wf).replace(Mf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Hf(e){if(!Df(e)||Nf(e))return!1;var o=Ef(e)?Gf:Of;return o.test(Rf(e))}ap.exports=Hf});var cp=b((h5,sp)=>{n();function $f(e,o){return e==null?void 0:e[o]}sp.exports=$f});var pt=b((x5,pp)=>{n();var Vf=ip(),qf=cp();function jf(e,o){var t=qf(e,o);return Vf(t)?t:void 0}pp.exports=jf});var Jo=b((y5,mp)=>{n();var zf=pt(),Kf=zf(Object,"create");mp.exports=Kf});var _p=b((S5,lp)=>{n();var dp=Jo();function Xf(){this.__data__=dp?dp(null):{},this.size=0}lp.exports=Xf});var gp=b((b5,up)=>{n();function Yf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}up.exports=Yf});var Tp=b((w5,fp)=>{n();var Jf=Jo(),Zf="__lodash_hash_undefined__",Qf=Object.prototype,eT=Qf.hasOwnProperty;function oT(e){var o=this.__data__;if(Jf){var t=o[e];return t===Zf?void 0:t}return eT.call(o,e)?o[e]:void 0}fp.exports=oT});var xp=b((v5,hp)=>{n();var nT=Jo(),tT=Object.prototype,rT=tT.hasOwnProperty;function aT(e){var o=this.__data__;return nT?o[e]!==void 0:rT.call(o,e)}hp.exports=aT});var Sp=b((I5,yp)=>{n();var iT=Jo(),sT="__lodash_hash_undefined__";function cT(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=iT&&o===void 0?sT:o,this}yp.exports=cT});var wp=b((A5,bp)=>{n();var pT=_p(),mT=gp(),dT=Tp(),lT=xp(),_T=Sp();function vo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}vo.prototype.clear=pT;vo.prototype.delete=mT;vo.prototype.get=dT;vo.prototype.has=lT;vo.prototype.set=_T;bp.exports=vo});var Ip=b((k5,vp)=>{n();function uT(){this.__data__=[],this.size=0}vp.exports=uT});var kp=b((L5,Ap)=>{n();function gT(e,o){return e===o||e!==e&&o!==o}Ap.exports=gT});var Zo=b((P5,Lp)=>{n();var fT=kp();function TT(e,o){for(var t=e.length;t--;)if(fT(e[t][0],o))return t;return-1}Lp.exports=TT});var Cp=b((C5,Pp)=>{n();var hT=Zo(),xT=Array.prototype,yT=xT.splice;function ST(e){var o=this.__data__,t=hT(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():yT.call(o,t,1),--this.size,!0}Pp.exports=ST});var Np=b((E5,Ep)=>{n();var bT=Zo();function wT(e){var o=this.__data__,t=bT(o,e);return t<0?void 0:o[t][1]}Ep.exports=wT});var Rp=b((N5,Dp)=>{n();var vT=Zo();function IT(e){return vT(this.__data__,e)>-1}Dp.exports=IT});var Op=b((D5,Mp)=>{n();var AT=Zo();function kT(e,o){var t=this.__data__,s=AT(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Mp.exports=kT});var Fp=b((R5,Bp)=>{n();var LT=Ip(),PT=Cp(),CT=Np(),ET=Rp(),NT=Op();function Io(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Io.prototype.clear=LT;Io.prototype.delete=PT;Io.prototype.get=CT;Io.prototype.has=ET;Io.prototype.set=NT;Bp.exports=Io});var Wp=b((M5,Up)=>{n();var DT=pt(),RT=Xo(),MT=DT(RT,"Map");Up.exports=MT});var $p=b((O5,Hp)=>{n();var Gp=wp(),OT=Fp(),BT=Wp();function FT(){this.size=0,this.__data__={hash:new Gp,map:new(BT||OT),string:new Gp}}Hp.exports=FT});var qp=b((B5,Vp)=>{n();function UT(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Vp.exports=UT});var Qo=b((F5,jp)=>{n();var WT=qp();function GT(e,o){var t=e.__data__;return WT(o)?t[typeof o=="string"?"string":"hash"]:t.map}jp.exports=GT});var Kp=b((U5,zp)=>{n();var HT=Qo();function $T(e){var o=HT(this,e).delete(e);return this.size-=o?1:0,o}zp.exports=$T});var Yp=b((W5,Xp)=>{n();var VT=Qo();function qT(e){return VT(this,e).get(e)}Xp.exports=qT});var Zp=b((G5,Jp)=>{n();var jT=Qo();function zT(e){return jT(this,e).has(e)}Jp.exports=zT});var em=b((H5,Qp)=>{n();var KT=Qo();function XT(e,o){var t=KT(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Qp.exports=XT});var nm=b(($5,om)=>{n();var YT=$p(),JT=Kp(),ZT=Yp(),QT=Zp(),eh=em();function Ao(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Ao.prototype.clear=YT;Ao.prototype.delete=JT;Ao.prototype.get=ZT;Ao.prototype.has=QT;Ao.prototype.set=eh;om.exports=Ao});var rm=b((V5,tm)=>{n();var oh="__lodash_hash_undefined__";function nh(e){return this.__data__.set(e,oh),this}tm.exports=nh});var im=b((q5,am)=>{n();function th(e){return this.__data__.has(e)}am.exports=th});var cm=b((j5,sm)=>{n();var rh=nm(),ah=rm(),ih=im();function mt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new rh;++o<t;)this.add(e[o])}mt.prototype.add=mt.prototype.push=ah;mt.prototype.has=ih;sm.exports=mt});var mm=b((z5,pm)=>{n();function sh(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}pm.exports=sh});var lm=b((K5,dm)=>{n();function ch(e){return e!==e}dm.exports=ch});var um=b((X5,_m)=>{n();function ph(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}_m.exports=ph});var fm=b((Y5,gm)=>{n();var mh=mm(),dh=lm(),lh=um();function _h(e,o,t){return o===o?lh(e,o,t):mh(e,dh,t)}gm.exports=_h});var hm=b((J5,Tm)=>{n();var uh=fm();function gh(e,o){var t=e==null?0:e.length;return!!t&&uh(e,o,0)>-1}Tm.exports=gh});var ym=b((Z5,xm)=>{n();function fh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}xm.exports=fh});var bm=b((Q5,Sm)=>{n();function Th(e,o){return e.has(o)}Sm.exports=Th});var vm=b((e6,wm)=>{n();var hh=pt(),xh=Xo(),yh=hh(xh,"Set");wm.exports=yh});var Am=b((o6,Im)=>{n();function Sh(){}Im.exports=Sh});var Wr=b((n6,km)=>{n();function bh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}km.exports=bh});var Pm=b((t6,Lm)=>{n();var Gr=vm(),wh=Am(),vh=Wr(),Ih=1/0,Ah=Gr&&1/vh(new Gr([,-0]))[1]==Ih?function(e){return new Gr(e)}:wh;Lm.exports=Ah});var Em=b((r6,Cm)=>{n();var kh=cm(),Lh=hm(),Ph=ym(),Ch=bm(),Eh=Pm(),Nh=Wr(),Dh=200;function Rh(e,o,t){var s=-1,c=Lh,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=Ph;else if(p>=Dh){var u=o?null:Eh(e);if(u)return Nh(u);m=!1,c=Ch,l=new kh}else l=o?[]:d;e:for(;++s<p;){var f=e[s],h=o?o(f):f;if(f=t||f!==0?f:0,m&&h===h){for(var w=l.length;w--;)if(l[w]===h)continue e;o&&l.push(h),d.push(f)}else c(l,h,t)||(l!==d&&l.push(h),d.push(f))}return d}Cm.exports=Rh});var Dm=b((a6,Nm)=>{n();var Mh=Em();function Oh(e){return e&&e.length?Mh(e):[]}Nm.exports=Oh});var De={};q(De,{css:()=>Vm,default:()=>hx});var Vm,hx,Re=x(()=>{"use strict";n();Vm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vm));hx={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Yr={};q(Yr,{css:()=>nd,default:()=>Fx});var nd,Fx,Jr=x(()=>{"use strict";n();nd=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nd));Fx={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var tn={};q(tn,{css:()=>ad,default:()=>Wx});var ad,Wx,rn=x(()=>{"use strict";n();ad=`.dapp-core-component__transactionDetails-styles__title {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ad));Wx={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var so={};q(so,{css:()=>pd,default:()=>jx});var pd,jx,co=x(()=>{"use strict";n();pd=`.dapp-core-component__transactionToast-styles__content {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pd));jx={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var oa={};q(oa,{css:()=>ld,default:()=>Kx});var ld,Kx,na=x(()=>{"use strict";n();ld=`.dapp-core-component__transactionsToastList-styles__toasts {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ld));Kx={toasts:"dapp-core-component__transactionsToastList-styles__toasts",toastWrapper:"dapp-core-component__transactionsToastList-styles__toastWrapper",loader:"dapp-core-component__transactionsToastList-styles__loader"}});var Qx={};q(Qx,{TransactionToastGuard:()=>Zx});module.exports=F(Qx);n();var xd=T(require("react"));n();n();var lt=T(require("react"));n();var Ca=T(require("react"));n();var Do=T(require("react"));n();ze();var La=()=>!ke();var il=()=>y(void 0,null,function*(){return yield Promise.resolve().then(()=>(Pt(),Lt))}),sl=()=>(Pt(),F(Lt)).default,Ct=La();function dn({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=Do.default.useState(Ct?void 0:sl()),[p,m]=Do.default.useState(Ct||t==null?void 0:t()),d=()=>y(this,null,function*(){(e?e():il()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Do.useEffect)(()=>{Ct&&d()},[]),{globalStyles:s,styles:p}}function E(e,o){return t=>{let{globalStyles:s,styles:c}=dn({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Ca.default.createElement(e,v(g({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var oe=T(require("react")),Ga=T(require("classnames"));ln();n();n();var Ra=e=>Math.exp(e/100);var cl=75,pl=25,_n=100,Nt=({remaining:e,totalSeconds:o,isCrossShard:t})=>{let s=t?pl:cl,c=_n/1e3,p=1/(o*c),m=Math.min(Ra(e)-1,p),d=e>=100-s?p:m;return e-d};Xe();var Mo="toastProgress",fl=({id:e,children:o,progress:t,done:s,expiresIn:c=10*60,className:p="dapp-progress",isCrossShard:m=!1,styles:d})=>{let{currentRemaining:l,totalSeconds:u}=(0,oe.useMemo)(()=>{let K=(ee.session.getItem(Mo)||{})[e],ae=t?t.endTime-t.startTime:0;return{currentRemaining:K||100,totalSeconds:ae}},[]),f=(0,oe.useRef)(null),h=(0,oe.useRef)(),w=(0,oe.useRef)(l);(0,oe.useEffect)(()=>{if(t!=null)return s?Z():be(),()=>{clearInterval(h.current)}},[t,s]);function P(){let L=ee.session.getItem(Mo);!Boolean(L==null?void 0:L[e])||(delete L[e],G(L))}function N(L){let K=ee.session.getItem(Mo)||{};K[e]=L,G(K)}function G(L){ee.session.setItem({key:Mo,data:L,expires:Na(c)})}function Z(){if(w.current<100){Q(0);return}h.current=setInterval(()=>{if(f.current==null)return;let K=w.current-1;K<=0?(clearInterval(h.current),P(),Q(0)):(N(K),Q(K))},_n)}function be(){if((ee.session.getItem(Mo)||{})[e]===w.current){let ae=Nt({remaining:w.current,totalSeconds:u,isCrossShard:m});Q(ae),N(ae)}h.current=setInterval(()=>{if(f.current==null)return;let ae=Nt({remaining:w.current,totalSeconds:u,isCrossShard:m});N(ae),Q(ae)},_n)}function Q(L){w.current=L,le()}function le(){if(f.current==null)return;let L=w.current;f.current.style.width=`${L}%`,f.current.ariaValueNow=L}return t?oe.default.createElement("div",{className:(0,Ga.default)(d==null?void 0:d.progress,p)},oe.default.createElement("div",{ref:f,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,className:d==null?void 0:d.bar}),o):oe.default.createElement(oe.default.Fragment,null,o)},Ha=E(fl,{ssrStyles:()=>Promise.resolve().then(()=>(Ot(),Mt)),clientStyles:()=>(Ot(),F(Mt)).default});n();n();var $t=T(require("react")),li=require("@fortawesome/free-solid-svg-icons"),_i=require("@fortawesome/react-fontawesome");I();var ui=({className:e="dapp-default-toast-delete-button",onClick:o})=>$t.default.createElement("button",{type:"button",className:e,onClick:o,"data-testid":"deleteToastButton"},$t.default.createElement(_i.FontAwesomeIcon,{icon:li.faTimes,size:"xs"}));n();var de=T(require("react")),md=require("@fortawesome/react-fontawesome"),ea=T(require("classnames"));I();n();n();var $e=T(require("react"));n();n();var vs=require("react"),xo=require("react-redux");n();var cr=require("@reduxjs/toolkit"),bs=require("react-redux/lib/utils/Subscription");C();n();var ts=T(require("lodash.throttle"));I();C();Kt();Xe();uo();var r_=[hn],$n=!1,a_=(0,ts.default)(()=>{Fo(Bo())},5e3),rs=e=>o=>t=>{if(r_.includes(t.type))return o(t);let s=e.getState(),c=ee.local.getItem(Me.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return Fo(Bo());let m=Date.now();return c-m<0&&!$n?setTimeout(()=>{$n=!0,e.dispatch(bi())},1e3):($n&&($n=!1),a_()),o(t)};n();n();function Vn(){return typeof sessionStorage!="undefined"}var xs=Vn()?(ms(),F(ps)).default:(ls(),F(ds)).default,ys=Vn()?(us(),F(_s)).default:[],Ss=Vn()?(hs(),F(Ts)).default:e=>e;qn();var k=(0,cr.configureStore)({reducer:xs,middleware:e=>e({serializableCheck:{ignoredActions:[...ys,zt.type,Sn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(rs)}),ws=(0,bs.createSubscription)(k),Iw=Ss(k),Aw=(0,cr.configureStore)({reducer:Ze});var L_={store:k,subscription:ws},pr=(0,vs.createContext)(L_),Cw=(0,xo.createStoreHook)(pr),z=(0,xo.createDispatchHook)(pr),A=(0,xo.createSelectorHook)(pr);n();n();C();n();var Is=T(require("lodash.isequal")),jn=require("reselect"),S=(0,jn.createSelectorCreator)(jn.defaultMemoize,Is.default);var xe=e=>e.account,Qe=S(xe,e=>e.address),eo=S(xe,Qe,(e,o)=>o in e.accounts?e.accounts[o]:yn),P_=S(xe,eo,(e,o)=>{let c=e,{accounts:t}=c,s=we(c,["accounts"]);return v(g({},s),{address:o.address,account:o})}),Mw=S(eo,e=>e.balance),C_=S(eo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),As=S(xe,e=>e.shard),E_=S(xe,e=>e.ledgerAccount),Ow=S(xe,e=>e.walletConnectAccount),Bw=S(xe,e=>e.isAccountLoading),Fw=S(xe,e=>e.accountLoadingError),N_=S(xe,e=>e.websocketEvent),D_=S(xe,e=>e.websocketBatchEvent);n();var ks=e=>e.dappConfig,Gw=S(ks,e=>e.shouldUseWebViewProvider);n();var te=e=>e.loginInfo,R_=S(te,e=>e.loginMethod),zn=S(te,Qe,(e,o)=>Boolean(o)),qw=S(te,e=>e.walletConnectLogin),M_=S(te,e=>e.ledgerLogin),O_=S(te,e=>e.walletLogin),jw=S(te,e=>e.isLoginSessionInvalid),mr=S(te,e=>e.tokenLogin),Ls=S(te,e=>e.logoutRoute),B_=S(te,e=>e.isWalletConnectV2Initialized);n();var Ps=e=>e.modals,Xw=S(Ps,e=>e.txSubmittedModal),F_=S(Ps,e=>e.notificationModal);n();var pe=e=>e.networkConfig,Kn=S(pe,e=>e.network.chainId),U_=S(pe,e=>e.network.roundDuration),Zw=S(pe,e=>e.network.walletConnectBridgeAddress),W_=S(pe,e=>e.network.walletConnectV2RelayAddress),G_=S(pe,e=>e.network.walletConnectV2ProjectId),H_=S(pe,e=>e.network.walletConnectV2Options),$_=S(pe,e=>e.network.walletConnectDeepLink),re=S(pe,e=>e.network),Cs=S(re,e=>e.apiAddress),Es=S(re,e=>e.explorerAddress),Ns=S(re,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),V_=S(re,e=>e.xAliasAddress),Ds=S(re,e=>e.egldLabel);n();var Xn=e=>e.signedMessageInfo,ov=S(Xn,e=>e.isSigning),nv=S(Xn,e=>e.errorMessage),tv=S(Xn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),rv=S(Xn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Rs=e=>e.toasts,q_=S(Rs,e=>e.customToasts),Ms=S(Rs,e=>e.transactionToasts);n();C();var Os={errorMessage:Qt,successMessage:er,processingMessage:or},Bs=e=>e.transactionsInfo,Fs=S(Bs,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Os);n();n();var ye=require("@multiversx/sdk-core");I();n();var dr=require("@multiversx/sdk-core/out");n();n();function Yn(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Us=e=>{let o=e!=null?e:"";return Yn(o)?dr.TransactionPayload.fromEncoded(o):new dr.TransactionPayload(o)};n();I();var Vo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Bt).some(t=>e.startsWith(t)):!1;function Jn(e){var s,c,p;let o=g({},e);Vo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ye.Transaction(g(g(v(g(v(g({value:o.value.valueOf(),data:Us(o.data),nonce:o.nonce.valueOf(),receiver:new ye.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ye.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:fn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Tn,chainID:o.chainID.valueOf(),version:new ye.TransactionVersion((p=o.version)!=null?p:pi)}),o.options?{options:new ye.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ye.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();n();var _r=require("@multiversx/sdk-core/out");n();I();var K_=e=>{let o=r.Buffer.from([0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);if(e.slice(0,o.length).equals(o))return!0;let s=r.Buffer.alloc(32).fill(0);return e.equals(s)},lr=e=>{try{let t=parseInt("11",2),s=parseInt("01",2),c=r.Buffer.from(e,"hex"),p=c[31];if(K_(c))return Ht;let m=p&t;return m>3-1&&(m=p&s),m}catch(o){return-1}};function Ws({receiverAddress:e,senderShard:o,senderAddress:t}){try{let s=new _r.Address(e),c=lr(s.pubkey());if(o==null&&t!=null){let p=new _r.Address(t);return lr(p)===c}return c===o}catch(s){return!1}}n();var gr=require("@multiversx/sdk-core");R();n();var X_=require("@multiversx/sdk-core");function Gs({receiver:e,data:o}){try{if(!o)return e;let t=Yn(o)?gr.TransactionPayload.fromEncoded(o).toString():o,s=Y_(t),c=t.split("@");return s>-1?c[s]:e}catch(t){console.log(t);return}}function Y_(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}var Hs=(e,o=1)=>e!=null&&e.length?e.reduce((t,{receiver:s,data:c})=>{let p=Gs({receiver:s,data:c!=null?c:""});return p==null?t:t&&Ws({receiverAddress:p,senderShard:o})},!0):!0;n();n();n();var J_=require("@multiversx/sdk-core"),Z_=T(require("bignumber.js"));D();n();n();n();var fr="blocks";var oo="transactions";n();n();n();n();Y();n();var qs=!1;function tu(e){qs||(console.error(e),qs=!0)}function hr({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(tu(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();Y();n();n();n();var su=T(require("bignumber.js"));I();n();var iu=require("@multiversx/sdk-core"),xr=T(require("bignumber.js"));I();n();var ru=T(require("bignumber.js"));n();xr.default.config({ROUNDING_MODE:xr.default.ROUND_FLOOR});n();n();n();I();n();n();n();n();I();n();I();n();var cu=require("@multiversx/sdk-core");I();n();var jo=require("@multiversx/sdk-core"),du=T(require("bignumber.js"));I();n();n();var pu=T(require("bignumber.js"));I();n();I();n();n();n();n();n();n();I();n();I();n();I();n();Y();var _u=["reDelegateRewards","claimRewards","unBond"],uu=["wrapEgld","unwrapEgld"],gu=["unStake"],fu=["unDelegate"];n();n();n();I();n();var yu=T(require("bignumber.js"));n();n();Y();n();var bu=T(require("bignumber.js"));n();n();n();n();var Iu=T(require("bignumber.js"));R();n();n();n();n();D();n();var Pu=require("@multiversx/sdk-web-wallet-provider");I();n();var ku=T(require("qs"));n();j();ze();n();ze();var ML={search:ke()?window.location.search:"",removeParams:[]};n();n();n();V();n();Y();n();n();V();n();var Cu=T(require("linkifyjs"));n();I();n();var Eu=T(require("bignumber.js"));n();R();n();n();D();n();D();n();n();n();Y();n();Y();n();var Nu=T(require("bignumber.js"));I();Y();n();Y();n();var Ys=require("react");R();n();n();Y();n();n();var Du=require("@multiversx/sdk-core/out"),Ru=T(require("bignumber.js"));Y();n();R();n();n();R();var AP=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Js=require("react");R();V();n();var Ou=require("react");Y();var RP=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];We();n();var Qn=e=>e.transactions,yo=S(Qn,e=>e.signedTransactions),Bu=S(Qn,e=>e.signTransactionsError),Zs=S(Qn,e=>e.signTransactionsCancelMessage),et=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),Qs=S(yo,et(Be)),ec=S(yo,et(Fe)),oc=S(yo,et(Ue)),Fu=S(yo,et(Wo)),nc=S(Qn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:v(g({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Jn(t)))||[]})}),Uu=S(yo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Ne=()=>A(eo);R();We();n();n();var io=T(require("react")),Co=require("@fortawesome/free-solid-svg-icons"),id=require("@fortawesome/react-fontawesome"),Qr=T(require("classnames"));n();n();n();var Wu=T(require("axios"));n();var Hu=T(require("axios"));To();n();I();n();var $u=T(require("axios"));n();var qu=T(require("axios"));n();n();var ju=T(require("axios"));n();var zu=T(require("axios"));n();n();n();n();n();var rc=require("@lifeomic/axios-fetch"),wr=T(require("axios")),vr=(0,rc.buildAxiosFetch)(wr.default),Ir=(e,o)=>y(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Ku(e,o,t){return y(this,null,function*(){try{let s=yield vr(e,g({method:"POST",body:o?JSON.stringify(o):void 0,headers:g({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Ir(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function Xu(e,o){return y(this,null,function*(){try{let t=yield vr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Ir(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Yu(e,o,t){return y(this,null,function*(){try{let s=yield vr(e,g({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Ir(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var So=wr.default.create();So.get=Xu;So.post=Ku;So.patch=Yu;n();n();var Ju=T(require("axios"));n();var Zu=T(require("swr"));n();n();n();n();n();To();n();var og=T(require("axios"));n();var tg=T(require("axios"));n();To();n();To();n();n();n();n();var ag=T(require("axios"));n();I();n();n();var bo=T(require("react")),nt=require("@fortawesome/free-solid-svg-icons"),Pr=require("@fortawesome/react-fontawesome"),cc=T(require("classnames"));n();ze();function ig(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(s){console.error("Fallback: Oops, unable to copy",s)}return document==null||document.body.removeChild(t),o}function ic(e){return y(this,null,function*(){if(!ke())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(s){return console.error("Async: Could not copy text: ",s),!1}):o=ig(e),o})}var cg=({text:e,className:o="dapp-copy-button",copyIcon:t=nt.faCopy,successIcon:s=nt.faCheck,styles:c})=>{let[p,m]=(0,bo.useState)({default:!0,success:!1});return bo.default.createElement("a",{href:"/#",onClick:l=>y(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let u=e&&e.trim();m({default:!1,success:yield ic(u)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,cc.default)(c==null?void 0:c.copy,o)},p.default||!p.success?bo.default.createElement(Pr.FontAwesomeIcon,{icon:t}):bo.default.createElement(Pr.FontAwesomeIcon,{icon:s}))},pc=E(cg,{ssrStyles:()=>Promise.resolve().then(()=>(Lr(),kr)),clientStyles:()=>(Lr(),F(kr)).default});n();n();var Nr=T(require("react")),dc=require("@fortawesome/free-solid-svg-icons"),lc=require("@fortawesome/react-fontawesome"),_c=T(require("classnames"));n();var tt=()=>A(pe);var mg=l=>{var u=l,{page:e,text:o,className:t="dapp-explorer-link",children:s,globalStyles:c,customExplorerIcon:p,styles:m}=u,d=we(u,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:f}}=tt(),h=o!=null?o:Nr.default.createElement(lc.FontAwesomeIcon,{icon:p!=null?p:dc.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),w=hr({explorerAddress:String(f),to:e});return Nr.default.createElement("a",g({href:w,target:"_blank",className:(0,_c.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},d),s!=null?s:h)},uc=E(mg,{ssrStyles:()=>Promise.resolve().then(()=>(Er(),Cr)),clientStyles:()=>(Er(),F(Cr)).default});n();n();var W=T(require("react")),td=T(require("classnames"));I();n();n();var gc=require("react");n();C();n();n();n();n();n();n();n();n();var lg=require("@multiversx/sdk-extension-provider"),_g=require("@multiversx/sdk-hw-provider"),ug=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),gg=require("@multiversx/sdk-opera-provider"),fg=require("@multiversx/sdk-passkey-provider/out"),Tg=require("@multiversx/sdk-web-wallet-provider");I();Oe();n();var wo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),fc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");D();n();var me=e=>`Unable to perform ${e}, Provider not initialized`,rt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(me("getAccount"))}setAccount(o){throw new Error(me(`setAccount: ${o}`))}login(o){throw new Error(me(`login with options: ${o}`))}logout(o){throw new Error(me(`logout with options: ${o}`))}getAddress(){throw new Error(me("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(me(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(me(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(me(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(me(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(me(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(me(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Tc=new rt;C();n();n();D();n();n();n();V();n();We();n();C();D();n();n();n();n();V();n();O();R();n();C();n();var yc=require("@multiversx/sdk-core");R();j();n();We();n();C();D();n();C();R();n();n();n();R();n();gn();n();n();n();n();var yg=T(require("swr"));n();n();n();function Sc(e){return A(o=>Fs(o,e))}n();var bc=require("react");n();n();var Sg=require("react"),bg=require("@multiversx/sdk-web-wallet-provider"),wg=require("@multiversx/sdk-web-wallet-provider"),vg=T(require("qs"));I();C();D();Ut();V();var M3=U();n();var Kc=require("react"),Fr=require("@multiversx/sdk-core");I();Xt();n();n();n();n();n();n();n();n();n();n();var Ag=require("@multiversx/sdk-opera-provider");n();var kg=require("@multiversx/sdk-extension-provider");n();Oe();n();n();n();n();var Zg=T(Vc());n();var nf=require("@multiversx/sdk-native-auth-client");n();var zc=T(require("axios"));n();n();n();function qc(e){return y(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var jc=(e,o,t,s=0)=>y(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield qc(o.delay)),yield jc(e,o,t,s+1)):null}}),Or=(e,o={retries:5,delay:500})=>(...t)=>y(void 0,null,function*(){return yield jc(e,o,t)});var Qg=4;var IM=Or((e,o,t)=>y(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield zc.default.get(`${e}/${fr}?from=${Qg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();Ro();n();n();V();var MM={origin:U().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var rf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var af=require("@multiversx/sdk-passkey-provider/out");I();V();n();n();n();var lf=require("react"),_f=require("@multiversx/sdk-hw-provider");n();O();R();n();Uo();Xe();uo();j();n();n();var Bm=require("react"),Fm=require("@multiversx/sdk-core"),ex=require("@multiversx/sdk-extension-provider"),ox=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),nx=require("@multiversx/sdk-passkey-provider/out"),tx=T(Dm());I();n();n();n();n();n();n();n();n();n();var en=T(require("react"));var h6=(0,en.createContext)({}),x6=k.getState();n();var Mm=T(require("react"));n();var Hr=T(require("react")),Bh=T(require("axios"));n();n();Oe();n();n();var $h=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Vh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");O();n();O();C();R();n();n();C();n();j();n();C();R();n();n();var Uh=require("@multiversx/sdk-core"),Wh=T(require("bignumber.js"));I();n();var Gh=T(require("bignumber.js"));I();C();D();j();V();n();var Om=require("react"),Kh=require("@multiversx/sdk-extension-provider"),Xh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Yh=require("@multiversx/sdk-passkey-provider/out");Oe();C();n();C();R();Uo();V();n();Te();C();n();n();var ax=require("react");n();n();D();We();n();var dt=require("react"),Um=(e,o)=>{let[t,s]=(0,dt.useState)(e);return(0,dt.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var sx=require("react"),cx=require("@multiversx/sdk-extension-provider");Te();O();D();n();Le();j();j();n();n();Oe();R();n();var ix=require("react"),Wm=require("@multiversx/sdk-core");C();n();var px=require("react"),mx=require("@multiversx/sdk-opera-provider");Te();O();D();Le();j();V();n();var dx=require("react");Gt();Te();Oe();O();C();D();Le();V();n();var fx=require("react");Te();C();n();n();ln();n();n();var lx=T(require("platform"));ze();n();n();n();n();n();n();Oo();D();n();n();var _x=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();Uo();Xe();n();n();n();C();n();n();var ux=T(require("axios"));j();n();n();var gx=T(ct());Oo();var Gm,Hm,$m,a4=($m=(Hm=(Gm=Je.safeWindow)==null?void 0:Gm.location)==null?void 0:Hm.origin)==null?void 0:$m.includes("localhost");n();V();n();n();var Ix=require("react");I();n();n();I();n();n();n();var Tx=T(require("bignumber.js"));n();n();n();var He=T(require("react")),Ym=require("react"),Jm=require("react"),zr=T(require("classnames")),Zm=require("react-dom");I();n();var qm=T(require("react")),jm=T(require("classnames"));var xx=({className:e,children:o,styles:t})=>qm.default.createElement("div",{className:(0,jm.default)(t==null?void 0:t.dappModalBody,e)},o),$r=E(xx,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),F(De)).default});n();var Vr=T(require("react")),zm=T(require("classnames"));var yx=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?Vr.default.createElement("div",{className:(0,zm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Vr.default.createElement("div",null,s)):null,qr=E(yx,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),F(De)).default});n();var Po=T(require("react")),Km=require("@fortawesome/free-solid-svg-icons"),Xm=require("@fortawesome/react-fontawesome"),nn=T(require("classnames"));var Sx=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?Po.default.createElement("div",{className:(0,nn.default)(l==null?void 0:l.dappModalHeader,s)},t):Po.default.createElement("div",{className:(0,nn.default)(l==null?void 0:l.dappModalHeader,s)},Po.default.createElement("div",{className:(0,nn.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Po.default.createElement("button",{onClick:m,className:(0,nn.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Po.default.createElement(Xm.FontAwesomeIcon,{size:"lg",icon:Km.faTimes}))):null,jr=E(Sx,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),F(De)).default});var bx={showHeader:!0,showFooter:!1,headerText:"",footerText:""},wx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=bx,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:u})=>{let[f,h]=(0,Ym.useState)(!1);if((0,Jm.useEffect)(()=>{h(!0)},[]),!l)return null;let{showHeader:w,showFooter:P,headerText:N,footerText:G,modalDialogClassName:Z="dapp-modal-dialog",modalContentClassName:be="dapp-modal-dialog-content",modalHeaderClassName:Q="dapp-modal-dialog-header",modalHeaderTextClassName:le="dapp-modal-dialog-header-text",modalCloseButtonClassName:L="dapp-modal-dialog-close-button",modalBodyClassName:K="dapp-modal-dialog-content-body",modalFooterClassName:ae="dapp-modal-dialog-footer",customModalHeader:_t,customModalFooter:Eo}=c,ut=gt=>{gt.key==="Escape"&&s&&(m==null||m())};return He.default.createElement(He.default.Fragment,null,f&&(0,Zm.createPortal)(He.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,zr.default)(Z,u==null?void 0:u.dappModal,t),"data-testid":e,onKeyDown:ut},He.default.createElement("div",{className:(0,zr.default)(u==null?void 0:u.dappModalContent,be)},He.default.createElement(jr,{visible:w,headerText:N,customHeader:_t,className:Q,headerTextClassName:le,closeButtonClassName:L,onHide:m}),He.default.createElement($r,{className:K},o),He.default.createElement(qr,{visible:P,customFooter:Eo,footerText:G,className:ae}))),d!=null?d:document==null?void 0:document.body))},vx=E(wx,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),De)),clientStyles:()=>(Re(),F(De)).default});n();n();var Qm=require("react");n();n();var ed=require("react"),kx=require("@multiversx/sdk-hw-provider");Te();O();C();D();Le();n();var Ax=require("react");n();n();var Kr=require("react");O();C();D();Le();V();n();var Px=require("react"),Cx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Te();O();D();Le();j();j();n();var Ex=require("react"),Nx=require("@multiversx/sdk-passkey-provider/out");Te();O();D();Le();j();j();n();n();var od=require("react");n();var Mx=require("react");n();var Xr=require("react"),Rx=require("socket.io-client");C();n();n();n();var Ox=require("react");R();n();n();n();var Bx=T(require("swr"));var Ux=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,W.useState)(0),[d,l]=(0,W.useState)(!1),u=(0,W.useRef)(document==null?void 0:document.createElement("span")),f=(0,W.useRef)(document==null?void 0:document.createElement("span")),h=Um(p,300),w=()=>{if(u.current&&f.current){let G=f.current.offsetWidth-u.current.offsetWidth;l(G>1)}},P=()=>{m(p+1)};return(0,W.useEffect)(()=>(window==null||window.addEventListener("resize",P),()=>{window==null||window.removeEventListener("resize",P)})),(0,W.useEffect)(()=>{w()},[h]),W.default.createElement("span",{ref:u,className:(0,td.default)(c==null?void 0:c.trim,s,o,{overflow:d}),"data-testid":t},W.default.createElement("span",{ref:f,className:c==null?void 0:c.hiddenTextRef},e),d?W.default.createElement(W.default.Fragment,null,W.default.createElement("span",{className:c==null?void 0:c.left},W.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),W.default.createElement("span",{className:c==null?void 0:c.ellipsis},di),W.default.createElement("span",{className:c==null?void 0:c.right},W.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):W.default.createElement("span",null,e))},rd=E(Ux,{ssrStyles:()=>Promise.resolve().then(()=>(Jr(),Yr)),clientStyles:()=>(Jr(),F(Yr)).default});var Gx={icon:Co.faCheck},Zr={icon:Co.faTimes},Hx={icon:Co.faCircleNotch},$x={pending:Hx,success:Gx,fail:Zr,invalid:Zr,timedOut:Zr},Vx=({className:e,hash:o,status:t,iconSrc:s,isTimedOut:c,globalStyles:p,styles:m})=>{var u;let d=t?$x[t]:null,l=(u=s==null?void 0:s.icon)!=null?u:d==null?void 0:d.icon;return io.default.createElement("div",{className:(0,Qr.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&l!=null&&io.default.createElement(id.FontAwesomeIcon,{icon:l,className:(0,Qr.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":t==="pending"})}),io.default.createElement("span",{className:m==null?void 0:m.trim},io.default.createElement(rd,{text:o})),io.default.createElement(pc,{text:o}),io.default.createElement(uc,{page:`/${oo}/${o}`,className:p==null?void 0:p.ml2}))},sd=E(Vx,{ssrStyles:()=>Promise.resolve().then(()=>(rn(),tn)),clientStyles:()=>(rn(),F(tn)).default});var qx=({title:e,transactions:o,isTimedOut:t=!1,className:s="dapp-transaction-details",styles:c})=>{if(o==null)return null;let{address:p}=Ne(),m=(0,$e.useMemo)(()=>{let l=o.filter(f=>!Bn(se[f==null?void 0:f.status])).length,u=o.length;return u===1&&l===1?Bn(se[o[0].status])?"Processing transaction":"Transaction processed":`${l} / ${u} transactions processed`},[o]),d=o.length===1&&o[0].sender!==p;return $e.default.createElement($e.default.Fragment,null,e&&$e.default.createElement("div",{className:c==null?void 0:c.title},e),!d&&$e.default.createElement("div",{className:c==null?void 0:c.status},m),o.map(({hash:l,status:u})=>{let f={className:s,hash:l,status:se[u],isTimedOut:t};return $e.default.createElement(sd,v(g({},f),{key:l}))}))},cd=E(qx,{ssrStyles:()=>Promise.resolve().then(()=>(rn(),tn)),clientStyles:()=>(rn(),F(tn)).default});var zx=({style:e,toastDataState:o,transactions:t,showCloseButton:s,onDeleteToast:c,toastTitle:p,isTimedOut:m,customElements:d={CustomCloseButton:ui,TransactionToastStatusIcon:md.FontAwesomeIcon,TransactionDetails:cd},globalStyles:l,styles:u})=>{let f=d==null?void 0:d.TransactionDetails,h=d==null?void 0:d.TransactionToastStatusIcon,w=d==null?void 0:d.CustomCloseButton;return de.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},de.default.createElement("div",{className:e.left},de.default.createElement("div",{className:(0,ea.default)(e.icon,o.iconClassName)},h&&de.default.createElement(h,{size:"5x",icon:o.icon,className:e.svg}))),de.default.createElement("div",{className:e.right},de.default.createElement("div",{className:e.heading},de.default.createElement("h5",{className:(0,ea.default)([l==null?void 0:l.h5,e.mb4]),"data-testid":"transactionToastTitle"},o.title),s&&w&&de.default.createElement(w,{className:u==null?void 0:u.close,onClick:c})),de.default.createElement("div",{className:e.footer},f&&de.default.createElement(f,{transactions:t,title:p,isTimedOut:m}))))},dd=E(zx,{ssrStyles:()=>Promise.resolve().then(()=>(co(),so)),clientStyles:()=>(co(),F(so)).default});n();var _d=T(require("react")),ud=T(require("classnames"));var Xx=({className:e="dapp-transaction-toast-wrapper",children:o,id:t,styles:s})=>_d.default.createElement("div",{id:t,className:(0,ud.default)(s==null?void 0:s.toasts,s==null?void 0:s.toastWrapper,e)},o),gd=E(Xx,{ssrStyles:()=>Promise.resolve().then(()=>(na(),oa)),clientStyles:()=>(na(),F(oa)).default});n();var po=require("react");I();Ro();Et();We();n();n();var Se=require("@fortawesome/free-solid-svg-icons");R();var fd=({address:e,classes:o={success:"success",danger:"danger",warning:"warning"},sender:t,status:s,toastId:c,transactionDisplayInfo:p})=>{var w,P,N,G,Z;let m={id:c,icon:Se.faCheck,expires:3e4,hasCloseButton:!0,title:(w=p==null?void 0:p.successMessage)!=null?w:"Transaction successful",iconClassName:o.success},d={id:c,icon:Se.faCheck,expires:3e4,hasCloseButton:!0,title:"Transaction received",iconClassName:o.success},l={id:c,expires:!1,icon:Se.faHourglass,hasCloseButton:!1,title:(P=p==null?void 0:p.processingMessage)!=null?P:"Processing transaction",iconClassName:o.warning},u={id:c,icon:Se.faTimes,title:(N=p==null?void 0:p.errorMessage)!=null?N:"Transaction failed",hasCloseButton:!0,iconClassName:o.danger},f={id:c,icon:Se.faBan,title:(G=p==null?void 0:p.invalidMessage)!=null?G:"Transaction invalid",hasCloseButton:!0,iconClassName:o==null?void 0:o.warning},h={id:c,icon:Se.faTimes,title:(Z=p==null?void 0:p.timedOutMessage)!=null?Z:"Transaction timed out",hasCloseButton:!0,iconClassName:o.warning};switch(s){case"signed":case"sent":return l;case"success":return t!==e?d:m;case"cancelled":case"fail":return u;case"timedOut":return h;case"invalid":return f;default:return l}};var Td=({toastId:e,transactions:o,status:t,lifetimeAfterSuccess:s,startTimestamp:c,endTimeProgress:p,onDelete:m})=>{let{styles:d}=dn({ssrImportCallback:()=>Promise.resolve().then(()=>(co(),so)),clientImportCallback:()=>(co(),F(so)).default}),l=Sc(e),u=A(As),{address:f}=Ne(),h=(0,po.useRef)(),w=(0,po.useMemo)(()=>Hs(o,u),[o,u]),P=w?6e3:5*6e3,N=(l==null?void 0:l.transactionDuration)||P,[G,Z]=(0,po.useMemo)(()=>{let ut=c||Ke(),gt=p||Ea(N);return[ut,gt]},[]),be={startTime:G,endTime:Z},Q=Be(t),le=Ue(t),L=Fe(t),K=Wo(t),ae=le||L||K,_t=fd({address:f,classes:d!=null?d:{},sender:(o==null?void 0:o[0].sender)||f,status:t,toastId:e,transactionDisplayInfo:l}),Eo=()=>{m==null||m(e)};return(0,po.useEffect)(()=>{if(!(!ae||!s||h.current))return h.current=setTimeout(()=>{Eo()},s),()=>{h.current&&(Eo(),clearTimeout(h.current))}},[s,ae]),{isCrossShard:!w,progress:be,isPending:Q,isTimedOut:K,toastDataState:_t,handleDeleteToast:Eo}};var Jx=({className:e="dapp-transaction-toast",customization:o,endTimeProgress:t,lifetimeAfterSuccess:s,onDelete:c,startTimestamp:p,status:m,styles:d,title:l="",toastId:u,transactions:f})=>{var le,L;let{isCrossShard:h,progress:w,isPending:P,isTimedOut:N,toastDataState:G,handleDeleteToast:Z}=Td({toastId:u,transactions:f,status:m,lifetimeAfterSuccess:s,startTimestamp:p,endTimeProgress:t,onDelete:c}),be=(le=o==null?void 0:o.Progress)!=null?le:Ha,Q=(L=o==null?void 0:o.TransactionToastContent)!=null?L:dd;return lt.default.createElement(gd,{className:e,id:`toast-${u}`},lt.default.createElement(be,{key:u,id:u,progress:w,expiresIn:s,done:!P||N,isCrossShard:h},lt.default.createElement(Q,{customElements:o==null?void 0:o.TransactionToastContentCustomElements,isTimedOut:N,onDeleteToast:Z,showCloseButton:!P,style:d!=null?d:{},toastDataState:G,toastTitle:l,transactions:f!=null?f:[]})))},hd=E(Jx,{ssrStyles:()=>Promise.resolve().then(()=>(co(),so)),clientStyles:()=>(co(),F(so)).default});var Zx=({className:e,signedTransactionsToRender:o,successfulToastLifetime:t,handleDeleteTransactionToast:s,startTimestamp:c,toastId:p})=>{let m=o[p];if(m==null||(m==null?void 0:m.transactions)==null||(m==null?void 0:m.status)==null)return null;let{transactions:l,status:u}=m;return xd.default.createElement(hd,{key:p,startTimestamp:c,toastId:p,transactions:l,status:u,lifetimeAfterSuccess:t,onDelete:s,className:e})};0&&(module.exports={TransactionToastGuard});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TransactionToastGuard.js.map
