"use strict";var Wm=Object.create;var ho=Object.defineProperty,Gm=Object.defineProperties,Hm=Object.getOwnPropertyDescriptor,$m=Object.getOwnPropertyDescriptors,Vm=Object.getOwnPropertyNames,Ho=Object.getOwnPropertySymbols,qm=Object.getPrototypeOf,Jn=Object.prototype.hasOwnProperty,Nr=Object.prototype.propertyIsEnumerable;var Cr=(e,o,t)=>o in e?ho(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Jn.call(o,t)&&Cr(e,t,o[t]);if(Ho)for(var t of Ho(o))Nr.call(o,t)&&Cr(e,t,o[t]);return e},w=(e,o)=>Gm(e,$m(o));var _e=(e,o)=>{var t={};for(var s in e)Jn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Ho)for(var s of Ho(e))o.indexOf(s)<0&&Nr.call(e,s)&&(t[s]=e[s]);return t};var f=(e,o)=>()=>(e&&(o=e(e=0)),o);var y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),V=(e,o)=>{for(var t in o)ho(e,t,{get:o[t],enumerable:!0})},Rr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Vm(o))!Jn.call(e,c)&&c!==t&&ho(e,c,{get:()=>o[c],enumerable:!(s=Hm(o,c))||s.enumerable});return e};var T=(e,o,t)=>(t=e!=null?Wm(qm(e)):{},Rr(o||!e||!e.__esModule?ho(t,"default",{value:e,enumerable:!0}):t,e)),$=e=>Rr(ho({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{_(t.next(l))}catch(h){c(h)}},m=l=>{try{_(t.throw(l))}catch(h){c(h)}},_=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var Or=y($o=>{"use strict";n();$o.byteLength=zm;$o.toByteArray=Xm;$o.fromByteArray=Zm;var ae=[],Z=[],jm=typeof Uint8Array!="undefined"?Uint8Array:Array,Zn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ee=0,Dr=Zn.length;Ee<Dr;++Ee)ae[Ee]=Zn[Ee],Z[Zn.charCodeAt(Ee)]=Ee;var Ee,Dr;Z["-".charCodeAt(0)]=62;Z["_".charCodeAt(0)]=63;function Mr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function zm(e){var o=Mr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function Km(e,o,t){return(o+t)*3/4-t}function Xm(e){var o,t=Mr(e),s=t[0],c=t[1],p=new jm(Km(e,s,c)),m=0,_=c>0?s-4:s,l;for(l=0;l<_;l+=4)o=Z[e.charCodeAt(l)]<<18|Z[e.charCodeAt(l+1)]<<12|Z[e.charCodeAt(l+2)]<<6|Z[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Z[e.charCodeAt(l)]<<2|Z[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=Z[e.charCodeAt(l)]<<10|Z[e.charCodeAt(l+1)]<<4|Z[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Ym(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function Jm(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Ym(s));return c.join("")}function Zm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,_=t-s;m<_;m+=p)c.push(Jm(e,m,m+p>_?_:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var Fr=y(Qn=>{n();Qn.read=function(e,o,t,s,c){var p,m,_=c*8-s-1,l=(1<<_)-1,h=l>>1,S=-7,b=t?c-1:0,L=t?-1:1,N=e[o+b];for(b+=L,p=N&(1<<-S)-1,N>>=-S,S+=_;S>0;p=p*256+e[o+b],b+=L,S-=8);for(m=p&(1<<-S)-1,p>>=-S,S+=s;S>0;m=m*256+e[o+b],b+=L,S-=8);if(p===0)p=1-h;else{if(p===l)return m?NaN:(N?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-h}return(N?-1:1)*m*Math.pow(2,p-s)};Qn.write=function(e,o,t,s,c,p){var m,_,l,h=p*8-c-1,S=(1<<h)-1,b=S>>1,L=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=s?0:p-1,J=s?1:-1,we=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=S):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+b>=1?o+=L/l:o+=L*Math.pow(2,1-b),o*l>=2&&(m++,l/=2),m+b>=S?(_=0,m=S):m+b>=1?(_=(o*l-1)*Math.pow(2,c),m=m+b):(_=o*Math.pow(2,b-1)*Math.pow(2,c),m=0));c>=8;e[t+N]=_&255,N+=J,_/=256,c-=8);for(m=m<<c|_,h+=c;h>0;e[t+N]=m&255,N+=J,m/=256,h-=8);e[t+N-J]|=we*128}});var Yr=y(qe=>{"use strict";n();var et=Or(),Ve=Fr(),Br=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;qe.Buffer=d;qe.SlowBuffer=rd;qe.INSPECT_MAX_BYTES=50;var Vo=2147483647;qe.kMaxLength=Vo;d.TYPED_ARRAY_SUPPORT=Qm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Qm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function ue(e){if(e>Vo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return rt(e)}return Gr(e,o,t)}d.poolSize=8192;function Gr(e,o,t){if(typeof e=="string")return od(e,o);if(ArrayBuffer.isView(e))return nd(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return nt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=td(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return Gr(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Hr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ed(e,o,t){return Hr(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}d.alloc=function(e,o,t){return ed(e,o,t)};function rt(e){return Hr(e),ue(e<0?0:at(e)|0)}d.allocUnsafe=function(e){return rt(e)};d.allocUnsafeSlow=function(e){return rt(e)};function od(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=$r(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function ot(e){for(var o=e.length<0?0:at(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function nd(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return nt(o.buffer,o.byteOffset,o.byteLength)}return ot(e)}function nt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function td(e){if(d.isBuffer(e)){var o=at(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||it(e.length)?ue(0):ot(e);if(e.type==="Buffer"&&Array.isArray(e.data))return ot(e.data)}function at(e){if(e>=Vo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Vo.toString(16)+" bytes");return e|0}function rd(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function $r(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return tt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Xr(e).length;default:if(c)return s?-1:tt(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=$r;function ad(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return gd(this,o,t);case"utf8":case"utf-8":return qr(this,o,t);case"ascii":return _d(this,o,t);case"latin1":case"binary":return ud(this,o,t);case"base64":return dd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fd(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Pe(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Pe(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Pe(this,t,t+3),Pe(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Pe(this,t,t+7),Pe(this,t+1,t+6),Pe(this,t+2,t+5),Pe(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?qr(this,0,o):ad.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=qe.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Br&&(d.prototype[Br]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=s-t,l=Math.min(m,_),h=this.slice(c,p),S=o.slice(t,s),b=0;b<l;++b)if(h[b]!==S[b]){m=h[b],_=S[b];break}return m<_?-1:_<m?1:0};function Vr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,it(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:Ur(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ur(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Ur(e,o,t,s,c){var p=1,m=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(N,J){return p===1?N[J]:N.readUInt16BE(J*p)}var h;if(c){var S=-1;for(h=t;h<m;h++)if(l(e,h)===l(o,S===-1?0:h-S)){if(S===-1&&(S=h),h-S+1===_)return S*p}else S!==-1&&(h-=h-S),S=-1}else for(t+_>m&&(t=m-_),h=t;h>=0;h--){for(var b=!0,L=0;L<_;L++)if(l(e,h+L)!==l(o,L)){b=!1;break}if(b)return h}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return Vr(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return Vr(this,o,t,s,!1)};function id(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var _=parseInt(o.substr(m*2,2),16);if(it(_))return m;e[t+m]=_}return m}function sd(e,o,t,s){return qo(tt(o,e.length-t),e,t,s)}function cd(e,o,t,s){return qo(xd(o),e,t,s)}function pd(e,o,t,s){return qo(Xr(o),e,t,s)}function md(e,o,t,s){return qo(yd(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return id(this,o,t,s);case"utf8":case"utf-8":return sd(this,o,t,s);case"ascii":case"latin1":case"binary":return cd(this,o,t,s);case"base64":return pd(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return md(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function dd(e,o,t){return o===0&&t===e.length?et.fromByteArray(e):et.fromByteArray(e.slice(o,t))}function qr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,h,S,b;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(b=(p&31)<<6|l&63,b>127&&(m=b));break;case 3:l=e[c+1],h=e[c+2],(l&192)===128&&(h&192)===128&&(b=(p&15)<<12|(l&63)<<6|h&63,b>2047&&(b<55296||b>57343)&&(m=b));break;case 4:l=e[c+1],h=e[c+2],S=e[c+3],(l&192)===128&&(h&192)===128&&(S&192)===128&&(b=(p&15)<<18|(l&63)<<12|(h&63)<<6|S&63,b>65535&&b<1114112&&(m=b))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=_}return ld(s)}var Wr=4096;function ld(e){var o=e.length;if(o<=Wr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Wr));return t}function _d(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function ud(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function gd(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Sd[e[p]];return c}function fd(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function F(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||F(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||F(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||F(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||F(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||F(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||F(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||F(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||F(o,4,this.length),Ve.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||F(o,4,this.length),Ve.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||F(o,8,this.length),Ve.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||F(o,8,this.length),Ve.read(this,o,!1,52,8)};function q(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=1,_=0;for(this[t]=o&255;++_<s&&(m*=256);)this[t+_]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=s-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<s&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=s-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function jr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function zr(e,o,t,s,c){return o=+o,t=t>>>0,c||jr(e,o,t,4,34028234663852886e22,-34028234663852886e22),Ve.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return zr(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return zr(this,o,t,!1,s)};function Kr(e,o,t,s,c){return o=+o,t=t>>>0,c||jr(e,o,t,8,17976931348623157e292,-17976931348623157e292),Ve.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return Kr(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return Kr(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=_[m%l]}return this};var hd=/[^+/0-9A-Za-z-_]/g;function Td(e){if(e=e.split("=")[0],e=e.trim().replace(hd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function tt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function xd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function yd(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Xr(e){return et.toByteArray(Td(e))}function qo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function it(e){return e!==e}var Sd=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var oa=y((ux,ea)=>{n();var R=ea.exports={},se,ce;function st(){throw new Error("setTimeout has not been defined")}function ct(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=st}catch(e){se=st}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=ct}catch(e){ce=ct}})();function Jr(e){if(se===setTimeout)return setTimeout(e,0);if((se===st||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function bd(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===ct||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var ge=[],je=!1,Ce,jo=-1;function wd(){!je||!Ce||(je=!1,Ce.length?ge=Ce.concat(ge):jo=-1,ge.length&&Zr())}function Zr(){if(!je){var e=Jr(wd);je=!0;for(var o=ge.length;o;){for(Ce=ge,ge=[];++jo<o;)Ce&&Ce[jo].run();jo=-1,o=ge.length}Ce=null,je=!1,bd(e)}}R.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new Qr(e,o)),ge.length===1&&!je&&Jr(Zr)};function Qr(e,o){this.fun=e,this.array=o}Qr.prototype.run=function(){this.fun.apply(null,this.array)};R.title="browser";R.browser=!0;R.env={};R.argv=[];R.version="";R.versions={};function fe(){}R.on=fe;R.addListener=fe;R.once=fe;R.off=fe;R.removeListener=fe;R.removeAllListeners=fe;R.emit=fe;R.prependListener=fe;R.prependOnceListener=fe;R.listeners=function(e){return[]};R.binding=function(e){throw new Error("process.binding is not supported")};R.cwd=function(){return"/"};R.chdir=function(e){throw new Error("process.chdir is not supported")};R.umask=function(){return 0}});var r,i,vd,a,n=f(()=>{r=T(Yr()),i=T(oa()),vd=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=vd});var he,Ne=f(()=>{"use strict";n();he=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var pt={};V(pt,{css:()=>ta,default:()=>Id});var ta,Id,mt=f(()=>{"use strict";n();ta=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ta));Id={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var lt={};V(lt,{css:()=>sa,default:()=>Ed});var sa,Ed,_t=f(()=>{"use strict";n();sa=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sa));Ed={copy:"dapp-core-component__copyButton-styles__copy"}});var ma=f(()=>{"use strict";n()});var pe=f(()=>{"use strict";n()});var da=f(()=>{"use strict";n()});var gt,la=f(()=>{"use strict";n();gt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(gt||{})});var _a=f(()=>{"use strict";n()});var ft=f(()=>{"use strict";n()});var ua=f(()=>{"use strict";n()});var ht=f(()=>{"use strict";n()});var ga=f(()=>{"use strict";n()});var fa=f(()=>{"use strict";n()});var Re,Ke,ve=f(()=>{"use strict";n();Re=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Ke=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var ha,$x,Ta,Vx,E=f(()=>{"use strict";n();ve();ha=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ha||{}),$x=u(u({},Ke.WindowProviderRequestEnums),ha),Ta=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ta||{}),Vx=u(u({},Ke.WindowProviderResponseEnums),Ta)});var xa=f(()=>{"use strict";n()});var ya=f(()=>{"use strict";n()});var j=f(()=>{"use strict";n()});var Sa=f(()=>{"use strict";n()});var ba=f(()=>{"use strict";n()});var wa=f(()=>{"use strict";n()});var D=f(()=>{"use strict";n();ht();ga();fa();E();xa();ya();j();Sa();ba();wa()});var Xe,va,sy,Ia,cy,Aa,py,my,Cd,Ye=f(()=>{"use strict";n();D();Xe={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:va,egldLabel:sy}=Xe["devnet"],{chainId:Ia,egldLabel:cy}=Xe["testnet"],{chainId:Aa,egldLabel:py}=Xe["mainnet"],my={["devnet"]:va,["testnet"]:Ia,["mainnet"]:Aa},Cd={[va]:"devnet",[Ia]:"testnet",[Aa]:"mainnet"}});var Ko=f(()=>{"use strict";n()});var me,ka=f(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-provider")});var De,xo=f(()=>{"use strict";n();De=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var La,Ea,Tt,fy,hy,xt=f(()=>{"use strict";n();xo();Tt=String((Ea=(La=De.safeWindow)==null?void 0:La.navigator)==null?void 0:Ea.userAgent),fy=/^((?!chrome|android).)*safari/i.test(Tt),hy=/firefox/i.test(Tt)&&/windows/i.test(Tt)});var Xo,Yo,Pa,Jo,Ca,Je,Na,I=f(()=>{"use strict";n();ma();pe();da();la();_a();ft();ua();Ye();Ko();ka();xt();Xo=5e4,Yo=1e9,Pa=1,Jo="logout",Ca="login",Je="0",Na="..."});var yo,Zo=f(()=>{"use strict";n();yo=()=>Date.now()/1e3});var Ra=f(()=>{"use strict";n()});var Da=f(()=>{"use strict";n()});var yt=f(()=>{"use strict";n();Zo();Ra();Da()});var St={};V(St,{clear:()=>Md,getItem:()=>Rd,localStorageKeys:()=>Ie,removeItem:()=>Dd,setItem:()=>Nd});var Ie,Qo,Nd,Rd,Dd,Md,Ze=f(()=>{"use strict";n();yt();Ie={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Qo=typeof localStorage!="undefined",Nd=({key:e,data:o,expires:t})=>{!Qo||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Rd=e=>{if(!Qo)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:yo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Dd=e=>{!Qo||localStorage.removeItem(String(e))},Md=()=>{!Qo||localStorage.clear()}});var bt={};V(bt,{clear:()=>Ba,getItem:()=>Oa,removeItem:()=>Fa,setItem:()=>Ma,storage:()=>Od});var Ma,Oa,Fa,Ba,Od,Ua=f(()=>{"use strict";n();Ma=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Oa=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Fa=e=>sessionStorage.removeItem(String(e)),Ba=()=>sessionStorage.clear(),Od={setItem:Ma,getItem:Oa,removeItem:Fa,clear:Ba}});var Me,Qe=f(()=>{"use strict";n();Ze();Ua();Me={session:bt,local:St}});var wt,P,K,C=f(()=>{"use strict";n();wt=require("@reduxjs/toolkit");I();P=(0,wt.createAction)(Jo),K=(0,wt.createAction)(Ca,e=>({payload:e}))});var It,Wa,Ga,en,vt,Ha,on,Fd,At,Ky,Bd,Ud,Xy,Yy,Jy,Wd,Gd,nn,tn=f(()=>{"use strict";n();It=require("@multiversx/sdk-core"),Wa=require("@reduxjs/toolkit"),Ga=require("redux-persist");I();Qe();Ze();C();en={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Je},vt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":en},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ha=(0,Wa.createSlice)({name:"accountInfoSlice",initialState:vt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new It.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:en},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(P,()=>(Me.local.removeItem(Ie.loginExpiresAt),vt)),e.addCase(K,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new It.Address(s).hex()}),e.addCase(Ga.REHYDRATE,(o,t)=>{var h;if(!((h=t.payload)!=null&&h.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:vt.accounts,o.publicKey=_})}}),{setAccount:on,setAddress:Fd,setAccountNonce:At,setAccountShard:Ky,setLedgerAccount:Bd,updateLedgerAccount:Ud,setWalletConnectAccount:Xy,setIsAccountLoading:Yy,setAccountLoadingError:Jy,setWebsocketEvent:Wd,setWebsocketBatchEvent:Gd}=Ha.actions,nn=Ha.reducer});function So(){return new Date().setHours(new Date().getHours()+24)}function bo(e){Me.local.setItem({key:Ie.loginExpiresAt,data:e,expires:e})}var kt=f(()=>{"use strict";n();Qe();Ze()});var Va,$a,qa,sS,Hd,$d,ja,cS,Vd,za,pS,mS,dS,rn,an=f(()=>{"use strict";n();Va=require("@reduxjs/toolkit");kt();E();C();$a={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},qa=(0,Va.createSlice)({name:"loginInfoSlice",initialState:$a,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(P,()=>$a),e.addCase(K,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,bo(So())})}}),{setLoginMethod:sS,setWalletConnectLogin:Hd,setLedgerLogin:$d,setTokenLogin:ja,setTokenLoginSignature:cS,setWalletLogin:Vd,invalidateLoginSession:za,setLogoutRoute:pS,setIsWalletConnectV2Initialized:mS,setWebviewLogin:dS}=qa.actions,rn=qa.reducer});var Xa,Ka,Ya,gS,qd,fS,jd,sn,cn=f(()=>{"use strict";n();Xa=require("@reduxjs/toolkit");C();Ka={},Ya=(0,Xa.createSlice)({name:"modalsSlice",initialState:Ka,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(P,()=>Ka)}}),{setTxSubmittedModal:gS,setNotificationModal:qd,clearTxSubmittedModal:fS,clearNotificationModal:jd}=Ya.actions,sn=Ya.reducer});var M,W=f(()=>{"use strict";n();Ne();M=()=>{if(!he())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Ja=f(()=>{"use strict";n();W()});var Za=f(()=>{"use strict";n();G()});var Qa=f(()=>{"use strict";n();xo()});var G=f(()=>{"use strict";n();Ja();Za();W();Qa()});var wo=f(()=>{"use strict";n();G()});var oi=f(()=>{"use strict";n();wo()});function ni(e){return e[Math.floor(Math.random()*e.length)]}var ti=f(()=>{"use strict";n()});var Lt=f(()=>{"use strict";n();ft()});var Te=f(()=>{"use strict";n();oi();ti();Lt()});var ri,ai,ii,Et,Kd,si,KS,XS,Xd,pn,mn=f(()=>{"use strict";n();ri=require("@reduxjs/toolkit"),ai=T(require("lodash.omit")),ii=require("redux-persist");Ko();C();Te();Et={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Kd={network:Et},si=(0,ri.createSlice)({name:"appConfig",initialState:Kd,reducers:{initializeNetworkConfig:(e,o)=>{let t=ni(o.payload.walletConnectV2RelayAddresses),s=(0,ai.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(P,o=>{o.network.customWalletAddress=void 0}),e.addCase(ii.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:KS,updateNetworkConfig:XS,setCustomWalletAddress:Xd}=si.actions,pn=si.reducer});var ci,Pt,pi,ob,nb,tb,dn,ln=f(()=>{"use strict";n();ci=require("@reduxjs/toolkit");D();C();Pt={isSigning:!1,signedSessions:{}},pi=(0,ci.createSlice)({name:"signedMessageInfoSliceState",initialState:Pt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Pt},extraReducers:e=>{e.addCase(P,()=>Pt)}}),{setSignSession:ob,clearSignedMessageInfo:nb,setSignSessionState:tb}=pi.actions,dn=pi.reducer});var di,li,mi,_i,Yd,Jd,mb,Zd,_n,un=f(()=>{"use strict";n();di=require("@reduxjs/toolkit"),li=require("redux-persist");D();Zo();C();mi={customToasts:[],transactionToasts:[]},_i=(0,di.createSlice)({name:"toastsSlice",initialState:mi,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:yo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(P,()=>mi),e.addCase(li.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:Yd,removeCustomToast:Jd,addTransactionToast:mb,removeTransactionToast:Zd}=_i.actions,_n=_i.reducer});var ui,Nt,Rt,Dt,Qd,Ct,gi,ub,el,Mt,gn,fn=f(()=>{"use strict";n();ui=require("@reduxjs/toolkit");C();Nt="Transaction failed",Rt="Transaction successful",Dt="Processing transaction",Qd="Transaction submitted",Ct={},gi=(0,ui.createSlice)({name:"transactionsInfo",initialState:Ct,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Nt,successMessage:(s==null?void 0:s.successMessage)||Rt,processingMessage:(s==null?void 0:s.processingMessage)||Dt,submittedMessage:(s==null?void 0:s.submittedMessage)||Qd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ct},extraReducers:e=>{e.addCase(P,()=>Ct)}}),{clearTransactionsInfo:ub,setTransactionsDisplayInfo:el,clearTransactionsInfoForSessionId:Mt}=gi.actions,gn=gi.reducer});function oo(e){return e!=null&&(ml(e)||gl(e))}function no(e){return e!=null&&(dl(e)||fl(e))}function to(e){return e!=null&&(ll(e)||hl(e))}function fi(e){return e!=null&&(_l(e)||Tl(e))}function Ot(e){return e!=null&&ul(e)}function ml(e){return e!=null&&ol.includes(e)}function dl(e){return e!=null&&nl.includes(e)}function ll(e){return e!=null&&tl.includes(e)}function _l(e){return e!=null&&rl.includes(e)}function ul(e){return e!=null&&al.includes(e)}function gl(e){return e!=null&&il.includes(e)}function fl(e){return e!=null&&sl.includes(e)}function hl(e){return e!=null&&cl.includes(e)}function Tl(e){return e!=null&&pl.includes(e)}var ol,nl,tl,rl,al,il,sl,cl,pl,ro=f(()=>{"use strict";n();E();ol=["sent"],nl=["success"],tl=["fail","cancelled","timedOut"],rl=["invalid"],al=["timedOut"],il=["pending"],sl=["success"],cl=["fail","invalid"],pl=["not executed"]});var hi,Ti,vo,xl,xi,yi,Si,yl,hn,Sl,bl,wb,wl,Io,Ft,vb,Tn,xn=f(()=>{"use strict";n();hi=require("@reduxjs/toolkit"),Ti=require("redux-persist");E();ro();C();vo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},xl={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},xi=(0,hi.createSlice)({name:"transactionsSlice",initialState:vo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,h;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},xl),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((h=e==null?void 0:e.transactionsToSign)==null?void 0:h.sessionId)===t&&(e.transactionsToSign=vo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var h,S,b,L,N,J,we,Go;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(S=(h=e.signedTransactions)==null?void 0:h[t])==null?void 0:S.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(ee=>ee.hash===p?w(u(u({},m!=null?m:{}),ee),{status:s,errorMessage:c,inTransit:_}):ee);let Kn=(L=(b=e.signedTransactions[t])==null?void 0:b.transactions)==null?void 0:L.every(ee=>no(ee.status)),Xn=(J=(N=e.signedTransactions[t])==null?void 0:N.transactions)==null?void 0:J.some(ee=>to(ee.status)),Yn=(Go=(we=e.signedTransactions[t])==null?void 0:we.transactions)==null?void 0:Go.every(ee=>fi(ee.status));Kn&&(e.signedTransactions[t].status="success"),Xn&&(e.signedTransactions[t].status="fail"),Yn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=vo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=vo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(P,()=>vo),e.addCase(Ti.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((_,[l,h])=>{let S=new Date(l),b=new Date;return b.setHours(b.getHours()+5),b-S>0||(_[l]=h),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:yi,updateSignedTransactions:Si,setTransactionsToSign:yl,clearAllTransactionsToSign:hn,clearAllSignedTransactions:Sl,clearSignedTransaction:bl,clearTransactionToSign:wb,setSignTransactionsError:wl,setSignTransactionsCancelMessage:Io,moveTransactionsToSignedState:Ft,updateSignedTransactionsCustomTransactionInformation:vb}=xi.actions,Tn=xi.reducer});var bi,Bt,wi,Lb,Eb,vl,Pb,yn,Sn=f(()=>{"use strict";n();bi=require("@reduxjs/toolkit");C();Bt={},wi=(0,bi.createSlice)({name:"batchTransactionsSlice",initialState:Bt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Bt},extraReducers:e=>{e.addCase(P,()=>Bt)}}),{setBatchTransactions:Lb,updateBatchTransactions:Eb,clearBatchTransactions:vl,clearAllBatchTransactions:Pb}=wi.actions,yn=wi.reducer});var Ii,vi,Ai,Db,ki,Ut=f(()=>{"use strict";n();Ii=require("@reduxjs/toolkit");C();vi={},Ai=(0,Ii.createSlice)({name:"dappConfigSlice",initialState:vi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(P,()=>vi)}}),{setDappConfig:Db}=Ai.actions,ki=Ai.reducer});var k=f(()=>{"use strict";n();tn();an();cn();mn();ln();un();fn();xn();Sn();Ut()});var Wt=f(()=>{"use strict";n()});var Pi,Ll,El,Oe,vn=f(()=>{"use strict";n();Pi=require("@reduxjs/toolkit");Wt();tn();Sn();Ut();an();cn();mn();ln();un();fn();xn();Ll={["account"]:nn,["dappConfig"]:ki,["loginInfo"]:rn,["modals"]:sn,["networkConfig"]:pn,["signedMessageInfo"]:dn,["toasts"]:_n,["transactionsInfo"]:gn,["transactions"]:Tn,["batchTransactions"]:yn},El=(e={})=>(0,Pi.combineReducers)(u(u({},Ll),e)),Oe=El});var Di={};V(Di,{default:()=>ql,sessionStorageReducers:()=>Gt});function xe(e,o=[]){return{key:e,version:1,storage:Ni.default,blacklist:o}}var z,Ci,Ni,Pl,Ao,Cl,Nl,Rl,Dl,Ml,Ol,Fl,Bl,Ul,Wl,Ri,Gl,Gt,Hl,$l,Vl,ql,Mi=f(()=>{"use strict";n();z=require("redux-persist"),Ci=T(require("redux-persist/lib/storage")),Ni=T(require("redux-persist/lib/storage/session"));vn();k();tn();Sn();an();cn();mn();ln();un();fn();xn();Wt();Pl={persistReducersStorageType:"localStorage"},Ao={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Cl=xe(Ao["account"]),Nl=xe(Ao["loginInfo"]),Rl=xe(Ao["modals"]),Dl=xe(Ao["networkConfig"]),Ml={2:e=>w(u({},e),{networkConfig:Et})};Ol=xe("sdk-dapp-transactionsInfo"),Fl=xe("sdk-dapp-transactions",["transactionsToSign"]),Bl=xe("sdk-dapp-batchTransactions",["batchTransactions"]),Ul=xe("sdk-dapp-toasts"),Wl=xe("sdk-dapp-signedMessageInfo"),Ri={key:"sdk-dapp-store",version:2,storage:Ci.default,whitelist:Object.keys(Ao),migrate:(0,z.createMigrate)(Ml,{debug:!1})},Gl=w(u({},Ri),{whitelist:[]}),Gt={["toasts"]:(0,z.persistReducer)(Ul,_n),["transactions"]:(0,z.persistReducer)(Fl,Tn),["transactionsInfo"]:(0,z.persistReducer)(Ol,gn),["batchTransactions"]:(0,z.persistReducer)(Bl,yn),["signedMessageInfo"]:(0,z.persistReducer)(Wl,dn)},Hl=w(u({},Gt),{["account"]:(0,z.persistReducer)(Cl,nn),["loginInfo"]:(0,z.persistReducer)(Nl,rn),["modals"]:(0,z.persistReducer)(Rl,sn),["networkConfig"]:(0,z.persistReducer)(Dl,pn)}),$l=Pl.persistReducersStorageType==="localStorage",Vl=$l?(0,z.persistReducer)(Ri,Oe(Gt)):(0,z.persistReducer)(Gl,Oe(Hl)),ql=Vl});var Oi={};V(Oi,{default:()=>jl});var jl,Fi=f(()=>{"use strict";n();vn();jl=Oe()});var Bi={};V(Bi,{default:()=>Kl});var Q,zl,Kl,Ui=f(()=>{"use strict";n();Q=require("redux-persist"),zl=[Q.FLUSH,Q.REHYDRATE,Q.PAUSE,Q.PERSIST,Q.PURGE,Q.REGISTER],Kl=zl});var Hi={};V(Hi,{default:()=>Gi});function Gi(e){return(0,Wi.persistStore)(e)}var Wi,$i=f(()=>{"use strict";n();Wi=require("redux-persist")});var or={};V(or,{css:()=>Ns,default:()=>iu});var Ns,iu,nr=f(()=>{"use strict";n();Ns=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ns));iu={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Ys=y((L2,Xs)=>{n();var Vu=typeof a=="object"&&a&&a.Object===Object&&a;Xs.exports=Vu});var Ro=y((E2,Js)=>{n();var qu=Ys(),ju=typeof self=="object"&&self&&self.Object===Object&&self,zu=qu||ju||Function("return this")();Js.exports=zu});var pr=y((P2,Zs)=>{n();var Ku=Ro(),Xu=Ku.Symbol;Zs.exports=Xu});var nc=y((C2,oc)=>{n();var Qs=pr(),ec=Object.prototype,Yu=ec.hasOwnProperty,Ju=ec.toString,Do=Qs?Qs.toStringTag:void 0;function Zu(e){var o=Yu.call(e,Do),t=e[Do];try{e[Do]=void 0;var s=!0}catch(p){}var c=Ju.call(e);return s&&(o?e[Do]=t:delete e[Do]),c}oc.exports=Zu});var rc=y((N2,tc)=>{n();var Qu=Object.prototype,eg=Qu.toString;function og(e){return eg.call(e)}tc.exports=og});var mr=y((R2,sc)=>{n();var ac=pr(),ng=nc(),tg=rc(),rg="[object Null]",ag="[object Undefined]",ic=ac?ac.toStringTag:void 0;function ig(e){return e==null?e===void 0?ag:rg:ic&&ic in Object(e)?ng(e):tg(e)}sc.exports=ig});var pc=y((D2,cc)=>{n();var sg=Array.isArray;cc.exports=sg});var dc=y((M2,mc)=>{n();function cg(e){return e!=null&&typeof e=="object"}mc.exports=cg});var _c=y((O2,lc)=>{n();var pg=mr(),mg=pc(),dg=dc(),lg="[object String]";function _g(e){return typeof e=="string"||!mg(e)&&dg(e)&&pg(e)==lg}lc.exports=_g});var Gn=y((MM,Tc)=>{n();function Ng(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Tc.exports=Ng});var yc=y((OM,xc)=>{n();var Rg=mr(),Dg=Gn(),Mg="[object AsyncFunction]",Og="[object Function]",Fg="[object GeneratorFunction]",Bg="[object Proxy]";function Ug(e){if(!Dg(e))return!1;var o=Rg(e);return o==Og||o==Fg||o==Mg||o==Bg}xc.exports=Ug});var bc=y((FM,Sc)=>{n();var Wg=Ro(),Gg=Wg["__core-js_shared__"];Sc.exports=Gg});var Ic=y((BM,vc)=>{n();var ur=bc(),wc=function(){var e=/[^.]+$/.exec(ur&&ur.keys&&ur.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Hg(e){return!!wc&&wc in e}vc.exports=Hg});var kc=y((UM,Ac)=>{n();var $g=Function.prototype,Vg=$g.toString;function qg(e){if(e!=null){try{return Vg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Ac.exports=qg});var Ec=y((WM,Lc)=>{n();var jg=yc(),zg=Ic(),Kg=Gn(),Xg=kc(),Yg=/[\\^$.*+?()[\]{}|]/g,Jg=/^\[object .+?Constructor\]$/,Zg=Function.prototype,Qg=Object.prototype,ef=Zg.toString,of=Qg.hasOwnProperty,nf=RegExp("^"+ef.call(of).replace(Yg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function tf(e){if(!Kg(e)||zg(e))return!1;var o=jg(e)?nf:Jg;return o.test(Xg(e))}Lc.exports=tf});var Cc=y((GM,Pc)=>{n();function rf(e,o){return e==null?void 0:e[o]}Pc.exports=rf});var Hn=y((HM,Nc)=>{n();var af=Ec(),sf=Cc();function cf(e,o){var t=sf(e,o);return af(t)?t:void 0}Nc.exports=cf});var Mo=y(($M,Rc)=>{n();var pf=Hn(),mf=pf(Object,"create");Rc.exports=mf});var Oc=y((VM,Mc)=>{n();var Dc=Mo();function df(){this.__data__=Dc?Dc(null):{},this.size=0}Mc.exports=df});var Bc=y((qM,Fc)=>{n();function lf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Fc.exports=lf});var Wc=y((jM,Uc)=>{n();var _f=Mo(),uf="__lodash_hash_undefined__",gf=Object.prototype,ff=gf.hasOwnProperty;function hf(e){var o=this.__data__;if(_f){var t=o[e];return t===uf?void 0:t}return ff.call(o,e)?o[e]:void 0}Uc.exports=hf});var Hc=y((zM,Gc)=>{n();var Tf=Mo(),xf=Object.prototype,yf=xf.hasOwnProperty;function Sf(e){var o=this.__data__;return Tf?o[e]!==void 0:yf.call(o,e)}Gc.exports=Sf});var Vc=y((KM,$c)=>{n();var bf=Mo(),wf="__lodash_hash_undefined__";function vf(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=bf&&o===void 0?wf:o,this}$c.exports=vf});var jc=y((XM,qc)=>{n();var If=Oc(),Af=Bc(),kf=Wc(),Lf=Hc(),Ef=Vc();function mo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}mo.prototype.clear=If;mo.prototype.delete=Af;mo.prototype.get=kf;mo.prototype.has=Lf;mo.prototype.set=Ef;qc.exports=mo});var Kc=y((YM,zc)=>{n();function Pf(){this.__data__=[],this.size=0}zc.exports=Pf});var Yc=y((JM,Xc)=>{n();function Cf(e,o){return e===o||e!==e&&o!==o}Xc.exports=Cf});var Oo=y((ZM,Jc)=>{n();var Nf=Yc();function Rf(e,o){for(var t=e.length;t--;)if(Nf(e[t][0],o))return t;return-1}Jc.exports=Rf});var Qc=y((QM,Zc)=>{n();var Df=Oo(),Mf=Array.prototype,Of=Mf.splice;function Ff(e){var o=this.__data__,t=Df(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():Of.call(o,t,1),--this.size,!0}Zc.exports=Ff});var op=y((eO,ep)=>{n();var Bf=Oo();function Uf(e){var o=this.__data__,t=Bf(o,e);return t<0?void 0:o[t][1]}ep.exports=Uf});var tp=y((oO,np)=>{n();var Wf=Oo();function Gf(e){return Wf(this.__data__,e)>-1}np.exports=Gf});var ap=y((nO,rp)=>{n();var Hf=Oo();function $f(e,o){var t=this.__data__,s=Hf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}rp.exports=$f});var sp=y((tO,ip)=>{n();var Vf=Kc(),qf=Qc(),jf=op(),zf=tp(),Kf=ap();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}lo.prototype.clear=Vf;lo.prototype.delete=qf;lo.prototype.get=jf;lo.prototype.has=zf;lo.prototype.set=Kf;ip.exports=lo});var pp=y((rO,cp)=>{n();var Xf=Hn(),Yf=Ro(),Jf=Xf(Yf,"Map");cp.exports=Jf});var lp=y((aO,dp)=>{n();var mp=jc(),Zf=sp(),Qf=pp();function eh(){this.size=0,this.__data__={hash:new mp,map:new(Qf||Zf),string:new mp}}dp.exports=eh});var up=y((iO,_p)=>{n();function oh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}_p.exports=oh});var Fo=y((sO,gp)=>{n();var nh=up();function th(e,o){var t=e.__data__;return nh(o)?t[typeof o=="string"?"string":"hash"]:t.map}gp.exports=th});var hp=y((cO,fp)=>{n();var rh=Fo();function ah(e){var o=rh(this,e).delete(e);return this.size-=o?1:0,o}fp.exports=ah});var xp=y((pO,Tp)=>{n();var ih=Fo();function sh(e){return ih(this,e).get(e)}Tp.exports=sh});var Sp=y((mO,yp)=>{n();var ch=Fo();function ph(e){return ch(this,e).has(e)}yp.exports=ph});var wp=y((dO,bp)=>{n();var mh=Fo();function dh(e,o){var t=mh(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}bp.exports=dh});var Ip=y((lO,vp)=>{n();var lh=lp(),_h=hp(),uh=xp(),gh=Sp(),fh=wp();function _o(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}_o.prototype.clear=lh;_o.prototype.delete=_h;_o.prototype.get=uh;_o.prototype.has=gh;_o.prototype.set=fh;vp.exports=_o});var kp=y((_O,Ap)=>{n();var hh="__lodash_hash_undefined__";function Th(e){return this.__data__.set(e,hh),this}Ap.exports=Th});var Ep=y((uO,Lp)=>{n();function xh(e){return this.__data__.has(e)}Lp.exports=xh});var Cp=y((gO,Pp)=>{n();var yh=Ip(),Sh=kp(),bh=Ep();function $n(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new yh;++o<t;)this.add(e[o])}$n.prototype.add=$n.prototype.push=Sh;$n.prototype.has=bh;Pp.exports=$n});var Rp=y((fO,Np)=>{n();function wh(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Np.exports=wh});var Mp=y((hO,Dp)=>{n();function vh(e){return e!==e}Dp.exports=vh});var Fp=y((TO,Op)=>{n();function Ih(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Op.exports=Ih});var Up=y((xO,Bp)=>{n();var Ah=Rp(),kh=Mp(),Lh=Fp();function Eh(e,o,t){return o===o?Lh(e,o,t):Ah(e,kh,t)}Bp.exports=Eh});var Gp=y((yO,Wp)=>{n();var Ph=Up();function Ch(e,o){var t=e==null?0:e.length;return!!t&&Ph(e,o,0)>-1}Wp.exports=Ch});var $p=y((SO,Hp)=>{n();function Nh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}Hp.exports=Nh});var qp=y((bO,Vp)=>{n();function Rh(e,o){return e.has(o)}Vp.exports=Rh});var zp=y((wO,jp)=>{n();var Dh=Hn(),Mh=Ro(),Oh=Dh(Mh,"Set");jp.exports=Oh});var Xp=y((vO,Kp)=>{n();function Fh(){}Kp.exports=Fh});var gr=y((IO,Yp)=>{n();function Bh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Yp.exports=Bh});var Zp=y((AO,Jp)=>{n();var fr=zp(),Uh=Xp(),Wh=gr(),Gh=1/0,Hh=fr&&1/Wh(new fr([,-0]))[1]==Gh?function(e){return new fr(e)}:Uh;Jp.exports=Hh});var em=y((kO,Qp)=>{n();var $h=Cp(),Vh=Gp(),qh=$p(),jh=qp(),zh=Zp(),Kh=gr(),Xh=200;function Yh(e,o,t){var s=-1,c=Vh,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=qh;else if(p>=Xh){var h=o?null:zh(e);if(h)return Kh(h);m=!1,c=jh,l=new $h}else l=o?[]:_;e:for(;++s<p;){var S=e[s],b=o?o(S):S;if(S=t||S!==0?S:0,m&&b===b){for(var L=l.length;L--;)if(l[L]===b)continue e;o&&l.push(b),_.push(S)}else c(l,b,t)||(l!==_&&l.push(b),_.push(S))}return _}Qp.exports=Yh});var nm=y((LO,om)=>{n();var Jh=em();function Zh(e){return e&&e.length?Jh(e):[]}om.exports=Zh});var Se={};V(Se,{css:()=>_m,default:()=>DT});var _m,DT,be=f(()=>{"use strict";n();_m=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_m));DT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Ir={};V(Ir,{css:()=>Am,default:()=>nx});var Am,nx,Ar=f(()=>{"use strict";n();Am=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Am));nx={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var kr={};V(kr,{css:()=>Em,default:()=>rx});var Em,rx,Lr=f(()=>{"use strict";n();Em=`.dapp-core-component__detailItem-module__detail-item:last-child {
  border-bottom: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Em));rx={"detail-item":"dapp-core-component__detailItem-module__detail-item",detailItem:"dapp-core-component__detailItem-module__detail-item"}});var Er={};V(Er,{css:()=>Cm,default:()=>ix});var Cm,ix,Pr=f(()=>{"use strict";n();Cm=`.dapp-core-component__styles__contract-detail-item {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__contract-detail-item span {
  color: #1f43f4;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__explorer {
  margin-left: 0.5rem;
  position: relative;
  display: flex;
  overflow: hidden;
  color: #cacbcc;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
  color: #1f43f4;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__copy {
  margin-left: 0.5rem;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__copy svg path {
  fill: #cacbcc;
  transition: all 200ms;
}
.dapp-core-component__styles__contract-detail-item .dapp-core-component__styles__copy svg path:hover {
  fill: #1f43f4;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cm));ix={"contract-detail-item":"dapp-core-component__styles__contract-detail-item",contractDetailItem:"dapp-core-component__styles__contract-detail-item",explorer:"dapp-core-component__styles__explorer",copy:"dapp-core-component__styles__copy"}});var px={};V(px,{ScrDetailItem:()=>cx});module.exports=$(px);n();var $e=T(require("react")),Nm=require("@fortawesome/free-solid-svg-icons"),Rm=require("@fortawesome/react-fontawesome");n();var aa=T(require("react"));n();var To=T(require("react"));n();Ne();var na=()=>!he();var Ad=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(mt(),pt))}),kd=()=>(mt(),$(pt)).default,dt=na();function ra({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=To.default.useState(dt?void 0:kd()),[p,m]=To.default.useState(dt||t==null?void 0:t()),_=()=>g(this,null,function*(){(e?e():Ad()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,To.useEffect)(()=>{dt&&_()},[]),{globalStyles:s,styles:p}}function B(e,o){return t=>{let{globalStyles:s,styles:c}=ra({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return aa.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();var ze=T(require("react")),zo=require("@fortawesome/free-solid-svg-icons"),ut=require("@fortawesome/react-fontawesome"),ca=T(require("classnames"));n();Ne();function Ld(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(s){console.error("Fallback: Oops, unable to copy",s)}return document==null||document.body.removeChild(t),o}function ia(e){return g(this,null,function*(){if(!he())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(s){return console.error("Async: Could not copy text: ",s),!1}):o=Ld(e),o})}var Pd=({text:e,className:o="dapp-copy-button",copyIcon:t=zo.faCopy,successIcon:s=zo.faCheck,styles:c})=>{let[p,m]=(0,ze.useState)({default:!0,success:!1});return ze.default.createElement("a",{href:"/#",onClick:l=>g(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let h=e&&e.trim();m({default:!1,success:yield ia(h)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,ca.default)(c==null?void 0:c.copy,o)},p.default||!p.success?ze.default.createElement(ut.FontAwesomeIcon,{icon:t}):ze.default.createElement(ut.FontAwesomeIcon,{icon:s}))},pa=B(Pd,{ssrStyles:()=>Promise.resolve().then(()=>(_t(),lt)),clientStyles:()=>(_t(),$(lt)).default});n();n();var tr=T(require("react")),Rs=require("@fortawesome/free-solid-svg-icons"),Ds=require("@fortawesome/react-fontawesome"),Ms=T(require("classnames"));n();n();var Xi=require("react"),ao=require("react-redux");n();var Ht=require("@reduxjs/toolkit"),zi=require("react-redux/lib/utils/Subscription");k();n();var Li=T(require("lodash.throttle"));I();k();kt();Qe();Ze();var Il=[Jo],bn=!1,Al=(0,Li.default)(()=>{bo(So())},5e3),Ei=e=>o=>t=>{if(Il.includes(t.type))return o(t);let s=e.getState(),c=Me.local.getItem(Ie.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return bo(So());let m=Date.now();return c-m<0&&!bn?setTimeout(()=>{bn=!0,e.dispatch(za())},1e3):(bn&&(bn=!1),Al()),o(t)};n();n();function wn(){return typeof sessionStorage!="undefined"}var Vi=wn()?(Mi(),$(Di)).default:(Fi(),$(Oi)).default,qi=wn()?(Ui(),$(Bi)).default:[],ji=wn()?($i(),$(Hi)).default:e=>e;vn();var v=(0,Ht.configureStore)({reducer:Vi,middleware:e=>e({serializableCheck:{ignoredActions:[...qi,At.type,on.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ei)}),Ki=(0,zi.createSubscription)(v),N0=ji(v),R0=(0,Ht.configureStore)({reducer:Oe});var Xl={store:v,subscription:Ki},$t=(0,Xi.createContext)(Xl),F0=(0,ao.createStoreHook)($t),H=(0,ao.createDispatchHook)($t),A=(0,ao.createSelectorHook)($t);n();n();k();n();var Yi=T(require("lodash.isequal")),In=require("reselect"),x=(0,In.createSelectorCreator)(In.defaultMemoize,Yi.default);var de=e=>e.account,Fe=x(de,e=>e.address),io=x(de,Fe,(e,o)=>o in e.accounts?e.accounts[o]:en),Yl=x(de,io,(e,o)=>{let c=e,{accounts:t}=c,s=_e(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),H0=x(io,e=>e.balance),Jl=x(io,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),$0=x(de,e=>e.shard),Zl=x(de,e=>e.ledgerAccount),V0=x(de,e=>e.walletConnectAccount),q0=x(de,e=>e.isAccountLoading),j0=x(de,e=>e.accountLoadingError),Ql=x(de,e=>e.websocketEvent),e_=x(de,e=>e.websocketBatchEvent);n();var Ji=e=>e.dappConfig,X0=x(Ji,e=>e.shouldUseWebViewProvider);n();var X=e=>e.loginInfo,o_=x(X,e=>e.loginMethod),An=x(X,Fe,(e,o)=>Boolean(o)),Q0=x(X,e=>e.walletConnectLogin),n_=x(X,e=>e.ledgerLogin),t_=x(X,e=>e.walletLogin),ew=x(X,e=>e.isLoginSessionInvalid),Vt=x(X,e=>e.tokenLogin),Zi=x(X,e=>e.logoutRoute),r_=x(X,e=>e.isWalletConnectV2Initialized);n();var Qi=e=>e.modals,tw=x(Qi,e=>e.txSubmittedModal),a_=x(Qi,e=>e.notificationModal);n();var oe=e=>e.networkConfig,kn=x(oe,e=>e.network.chainId),i_=x(oe,e=>e.network.roundDuration),iw=x(oe,e=>e.network.walletConnectBridgeAddress),s_=x(oe,e=>e.network.walletConnectV2RelayAddress),c_=x(oe,e=>e.network.walletConnectV2ProjectId),p_=x(oe,e=>e.network.walletConnectV2Options),m_=x(oe,e=>e.network.walletConnectDeepLink),Y=x(oe,e=>e.network),es=x(Y,e=>e.apiAddress),os=x(Y,e=>e.explorerAddress),ns=x(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),d_=x(Y,e=>e.xAliasAddress),ts=x(Y,e=>e.egldLabel);n();var Ln=e=>e.signedMessageInfo,pw=x(Ln,e=>e.isSigning),mw=x(Ln,e=>e.errorMessage),dw=x(Ln,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),lw=x(Ln,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var rs=e=>e.toasts,l_=x(rs,e=>e.customToasts),as=x(rs,e=>e.transactionToasts);n();k();var is={errorMessage:Nt,successMessage:Rt,processingMessage:Dt},ss=e=>e.transactionsInfo,__=x(ss,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||is);n();n();var le=require("@multiversx/sdk-core");I();n();var jt=require("@multiversx/sdk-core/out");n();n();function qt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var cs=e=>{let o=e!=null?e:"";return qt(o)?jt.TransactionPayload.fromEncoded(o):new jt.TransactionPayload(o)};n();I();var ko=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(gt).some(t=>e.startsWith(t)):!1;function En(e){var s,c,p;let o=u({},e);ko({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:cs(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Xo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Yo,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:Pa)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();n();var h_=require("@multiversx/sdk-core/out");n();I();n();var ps=require("@multiversx/sdk-core");D();n();var T_=require("@multiversx/sdk-core");n();n();n();var x_=require("@multiversx/sdk-core"),y_=T(require("bignumber.js"));E();n();n();n();var ne="accounts";var Pn="blocks",ls="code",_s="collections";var us="contracts";var gs="identities";var fs="locked-accounts",hs="logs",Ts="miniblocks";var Cn="nfts",xs="nodes",Kt="providers",ys="roles",Xt="sc-results";var Be="tokens";var te="transactions";var Lo={shard:e=>`/${Pn}?shard=${e}`,receiverShard:e=>`/${te}?receivershard=${e}`,senderShard:e=>`/${te}?sendershard=${e}`,transactionDetails:e=>`/${te}/${e}`,transactionDetailsScResults:e=>`/${te}/${e}/${Xt}`,transactionDetailsLogs:e=>`/${te}/${e}/${hs}`,nodeDetails:e=>`/${xs}/${e}`,accountDetails:e=>`/${ne}/${e}`,accountDetailsContractCode:e=>`/${ne}/${e}/${ls}`,accountDetailsTokens:e=>`/${ne}/${e}/${Be}`,accountDetailsNfts:e=>`/${ne}/${e}/${Cn}`,accountDetailsScResults:e=>`/${ne}/${e}/${Xt}`,accountDetailsContracts:e=>`/${ne}/${e}/${us}`,identityDetails:e=>`/${gs}/${e}`,tokenDetails:e=>`/${Be}/${e}`,tokenDetailsAccounts:e=>`/${Be}/${e}/${ne}`,tokenDetailsLockedAccounts:e=>`/${Be}/${e}/${fs}`,tokenDetailsRoles:e=>`/${Be}/${e}/${ys}`,collectionDetails:e=>`/${_s}/${e}`,nftDetails:e=>`/${Cn}/${e}`,providerDetails:e=>`/${Kt}/${e}`,providerDetailsTransactions:e=>`/${Kt}/${e}/${te}`,miniblockDetails:e=>`/${Ts}/${e}`};n();n();n();n();j();n();var Ss=!1;function w_(e){Ss||(console.error(e),Ss=!0)}function Yt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(w_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();j();n();n();n();var k_=T(require("bignumber.js"));I();n();var A_=require("@multiversx/sdk-core"),Jt=T(require("bignumber.js"));I();n();var v_=T(require("bignumber.js"));n();Jt.default.config({ROUNDING_MODE:Jt.default.ROUND_FLOOR});n();n();n();I();n();n();n();n();I();n();I();n();var L_=require("@multiversx/sdk-core");I();n();var Po=require("@multiversx/sdk-core"),C_=T(require("bignumber.js"));I();n();n();var E_=T(require("bignumber.js"));I();n();I();n();n();n();n();n();n();I();n();I();n();I();n();j();var R_=["reDelegateRewards","claimRewards","unBond"],D_=["wrapEgld","unwrapEgld"],M_=["unStake"],O_=["unDelegate"];n();n();n();I();n();var W_=T(require("bignumber.js"));n();n();j();n();var H_=T(require("bignumber.js"));n();n();n();n();var q_=T(require("bignumber.js"));D();n();n();n();n();E();n();var X_=require("@multiversx/sdk-web-wallet-provider");I();n();var z_=T(require("qs"));n();G();Ne();n();Ne();var Mk={search:he()?window.location.search:"",removeParams:[]};n();n();n();W();n();j();n();n();W();n();var Y_=T(require("linkifyjs"));n();I();n();var J_=T(require("bignumber.js"));n();D();n();n();E();n();E();n();n();n();j();n();j();n();var Z_=T(require("bignumber.js"));I();j();n();j();n();var Is=require("react");D();n();n();j();n();n();var Q_=require("@multiversx/sdk-core/out"),eu=T(require("bignumber.js"));j();n();D();n();n();D();var A1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var As=require("react");D();W();n();var nu=require("react");j();var D1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];ro();n();var Rn=e=>e.transactions,so=x(Rn,e=>e.signedTransactions),tu=x(Rn,e=>e.signTransactionsError),ks=x(Rn,e=>e.signTransactionsCancelMessage),Dn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),Ls=x(so,Dn(oo)),Es=x(so,Dn(no)),Ps=x(so,Dn(to)),ru=x(so,Dn(Ot)),Cs=x(Rn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>En(t)))||[]})}),au=x(so,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Mn=()=>A(oe);var su=l=>{var h=l,{page:e,text:o,className:t="dapp-explorer-link",children:s,globalStyles:c,customExplorerIcon:p,styles:m}=h,_=_e(h,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:S}}=Mn(),b=o!=null?o:tr.default.createElement(Ds.FontAwesomeIcon,{icon:p!=null?p:Rs.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),L=Yt({explorerAddress:String(S),to:e});return tr.default.createElement("a",u({href:L,target:"_blank",className:(0,Ms.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},_),s!=null?s:b)},Os=B(su,{ssrStyles:()=>Promise.resolve().then(()=>(nr(),or)),clientStyles:()=>(nr(),$(or)).default});n();n();var O=T(require("react")),km=T(require("classnames"));I();n();n();var Fs=require("react");n();k();n();n();n();n();n();n();n();n();var pu=require("@multiversx/sdk-extension-provider"),mu=require("@multiversx/sdk-hw-provider"),du=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),lu=require("@multiversx/sdk-opera-provider"),_u=require("@multiversx/sdk-passkey-provider/out"),uu=require("@multiversx/sdk-web-wallet-provider");I();ve();n();var co=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Bs=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");E();n();var re=e=>`Unable to perform ${e}, Provider not initialized`,On=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(re("getAccount"))}setAccount(o){throw new Error(re(`setAccount: ${o}`))}login(o){throw new Error(re(`login with options: ${o}`))}logout(o){throw new Error(re(`logout with options: ${o}`))}getAddress(){throw new Error(re("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(re(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(re(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(re(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(re(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(re(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(re(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Us=new On;k();n();n();n();n();n();var Ws=require("@lifeomic/axios-fetch"),rr=T(require("axios")),ar=(0,Ws.buildAxiosFetch)(rr.default),ir=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function gu(e,o,t){return g(this,null,function*(){try{let s=yield ar(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return ir(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function fu(e,o){return g(this,null,function*(){try{let t=yield ar(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return ir(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function hu(e,o,t){return g(this,null,function*(){try{let s=yield ar(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return ir(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var po=rr.default.create();po.get=fu;po.post=gu;po.patch=hu;n();n();var Tu=T(require("axios"));n();var xu=T(require("swr"));n();E();n();n();n();W();n();ro();n();n();n();var yu=T(require("axios"));n();var bu=T(require("axios"));Ye();n();I();n();var wu=T(require("axios"));n();var Iu=T(require("axios"));n();n();var Au=T(require("axios"));n();var ku=T(require("axios"));n();n();k();E();n();n();n();n();W();n();C();D();n();k();n();var Vs=require("@multiversx/sdk-core");D();G();n();ro();n();k();E();n();k();D();n();n();n();D();n();Ko();n();n();n();n();var Pu=T(require("swr"));n();n();n();n();var qs=require("react");n();n();var Cu=require("react"),Nu=require("@multiversx/sdk-web-wallet-provider"),Ru=require("@multiversx/sdk-web-wallet-provider"),Du=T(require("qs"));I();k();E();ht();W();var kD=M();n();var hc=require("react"),_r=require("@multiversx/sdk-core");n();I();Lt();n();n();n();n();n();n();n();n();n();n();Ye();n();var Bu=T(require("axios"));n();var Wu=T(require("axios"));n();Ye();n();Ye();n();n();n();n();var Hu=require("@multiversx/sdk-opera-provider");n();var $u=require("@multiversx/sdk-extension-provider");n();ve();n();n();n();n();var ug=T(_c());n();var Tg=require("@multiversx/sdk-native-auth-client");n();var fc=T(require("axios"));n();n();n();function uc(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var gc=(e,o,t,s=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield uc(o.delay)),yield gc(e,o,t,s+1)):null}}),dr=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield gc(e,o,t)});var gg=4;var K2=dr((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield fc.default.get(`${e}/${Pn}?from=${gg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();Zo();n();n();W();var r3={origin:M().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var yg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Sg=require("@multiversx/sdk-passkey-provider/out");I();W();n();n();n();var kg=require("react"),Lg=require("@multiversx/sdk-hw-provider");n();C();D();n();wo();Qe();Ze();G();n();n();var im=require("react"),sm=require("@multiversx/sdk-core"),fT=require("@multiversx/sdk-extension-provider"),hT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),TT=require("@multiversx/sdk-passkey-provider/out"),xT=T(nm());I();n();n();n();n();n();n();n();n();n();n();var Bo=T(require("react"));var VO=(0,Bo.createContext)({}),qO=v.getState();n();var rm=T(require("react"));n();var hr=T(require("react")),Qh=T(require("axios"));n();n();ve();n();n();var aT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),iT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");C();n();C();k();D();n();n();k();n();G();n();k();D();n();n();var oT=require("@multiversx/sdk-core"),nT=T(require("bignumber.js"));I();n();var tT=T(require("bignumber.js"));I();k();E();G();W();n();var am=require("react"),mT=require("@multiversx/sdk-extension-provider"),dT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),lT=require("@multiversx/sdk-passkey-provider/out");ve();k();n();k();D();wo();W();n();pe();k();n();n();var ST=require("react");n();n();E();ro();n();var qn=require("react"),cm=(e,o)=>{let[t,s]=(0,qn.useState)(e);return(0,qn.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var wT=require("react"),vT=require("@multiversx/sdk-extension-provider");pe();C();E();n();Te();G();G();n();n();ve();D();n();var bT=require("react"),pm=require("@multiversx/sdk-core");k();n();var IT=require("react"),AT=require("@multiversx/sdk-opera-provider");pe();C();E();Te();G();W();n();var kT=require("react");xt();pe();ve();C();k();E();Te();W();n();var NT=require("react");pe();k();n();n();yt();n();n();var LT=T(require("platform"));Ne();n();n();n();n();n();n();n();xo();E();n();n();var ET=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();wo();Qe();n();n();n();k();n();n();var PT=T(require("axios"));G();n();n();var CT=T(Gn());xo();var mm,dm,lm,MW=(lm=(dm=(mm=De.safeWindow)==null?void 0:mm.location)==null?void 0:dm.origin)==null?void 0:lm.includes("localhost");n();W();n();n();var HT=require("react");I();n();n();I();n();n();n();var RT=T(require("bignumber.js"));n();n();n();var Le=T(require("react")),xm=require("react"),ym=require("react"),br=T(require("classnames")),Sm=require("react-dom");I();n();var um=T(require("react")),gm=T(require("classnames"));var MT=({className:e,children:o,styles:t})=>um.default.createElement("div",{className:(0,gm.default)(t==null?void 0:t.dappModalBody,e)},o),Tr=B(MT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),$(Se)).default});n();var xr=T(require("react")),fm=T(require("classnames"));var OT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?xr.default.createElement("div",{className:(0,fm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:xr.default.createElement("div",null,s)):null,yr=B(OT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),$(Se)).default});n();var fo=T(require("react")),hm=require("@fortawesome/free-solid-svg-icons"),Tm=require("@fortawesome/react-fontawesome"),Wo=T(require("classnames"));var FT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?fo.default.createElement("div",{className:(0,Wo.default)(l==null?void 0:l.dappModalHeader,s)},t):fo.default.createElement("div",{className:(0,Wo.default)(l==null?void 0:l.dappModalHeader,s)},fo.default.createElement("div",{className:(0,Wo.default)(l==null?void 0:l.dappModalHeaderText,p)},o),fo.default.createElement("button",{onClick:m,className:(0,Wo.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},fo.default.createElement(Tm.FontAwesomeIcon,{size:"lg",icon:hm.faTimes}))):null,Sr=B(FT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),$(Se)).default});var UT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},WT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=UT,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:h})=>{let[S,b]=(0,xm.useState)(!1);if((0,ym.useEffect)(()=>{b(!0)},[]),!l)return null;let{showHeader:L,showFooter:N,headerText:J,footerText:we,modalDialogClassName:Go="dapp-modal-dialog",modalContentClassName:Kn="dapp-modal-dialog-content",modalHeaderClassName:Xn="dapp-modal-dialog-header",modalHeaderTextClassName:Yn="dapp-modal-dialog-header-text",modalCloseButtonClassName:ee="dapp-modal-dialog-close-button",modalBodyClassName:Dm="dapp-modal-dialog-content-body",modalFooterClassName:Mm="dapp-modal-dialog-footer",customModalHeader:Om,customModalFooter:Fm}=c,Bm=Um=>{Um.key==="Escape"&&s&&(m==null||m())};return Le.default.createElement(Le.default.Fragment,null,S&&(0,Sm.createPortal)(Le.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,br.default)(Go,h==null?void 0:h.dappModal,t),"data-testid":e,onKeyDown:Bm},Le.default.createElement("div",{className:(0,br.default)(h==null?void 0:h.dappModalContent,Kn)},Le.default.createElement(Sr,{visible:L,headerText:J,customHeader:Om,className:Xn,headerTextClassName:Yn,closeButtonClassName:ee,onHide:m}),Le.default.createElement(Tr,{className:Dm},o),Le.default.createElement(yr,{visible:N,customFooter:Fm,footerText:we,className:Mm}))),_!=null?_:document==null?void 0:document.body))},GT=B(WT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),$(Se)).default});n();n();var bm=require("react");n();n();var wm=require("react"),VT=require("@multiversx/sdk-hw-provider");pe();C();k();E();Te();n();var $T=require("react");n();n();var wr=require("react");C();k();E();Te();W();n();var jT=require("react"),zT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();C();E();Te();G();G();n();var KT=require("react"),XT=require("@multiversx/sdk-passkey-provider/out");pe();C();E();Te();G();G();n();n();var vm=require("react");n();var ZT=require("react");n();var vr=require("react"),JT=require("socket.io-client");k();n();n();n();var QT=require("react");D();n();n();n();var ox=T(require("swr"));n();n();n();n();var ex=T(require("axios"));n();var tx=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,O.useState)(0),[_,l]=(0,O.useState)(!1),h=(0,O.useRef)(document==null?void 0:document.createElement("span")),S=(0,O.useRef)(document==null?void 0:document.createElement("span")),b=cm(p,300),L=()=>{if(h.current&&S.current){let we=S.current.offsetWidth-h.current.offsetWidth;l(we>1)}},N=()=>{m(p+1)};return(0,O.useEffect)(()=>(window==null||window.addEventListener("resize",N),()=>{window==null||window.removeEventListener("resize",N)})),(0,O.useEffect)(()=>{L()},[b]),O.default.createElement("span",{ref:h,className:(0,km.default)(c==null?void 0:c.trim,s,o,{overflow:_}),"data-testid":t},O.default.createElement("span",{ref:S,className:c==null?void 0:c.hiddenTextRef},e),_?O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:c==null?void 0:c.left},O.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),O.default.createElement("span",{className:c==null?void 0:c.ellipsis},Na),O.default.createElement("span",{className:c==null?void 0:c.right},O.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):O.default.createElement("span",null,e))},Lm=B(tx,{ssrStyles:()=>Promise.resolve().then(()=>(Ar(),Ir)),clientStyles:()=>(Ar(),$(Ir)).default});n();var jn=T(require("react")),zn=T(require("classnames"));var ax=({children:e,title:o,className:t="",colWidth:s="2",noBorder:c=!1,globalStyles:p,styles:m})=>{var _,l,h,S;return jn.default.createElement("div",{className:(0,zn.default)(p==null?void 0:p.row,m==null?void 0:m.detailItem,t,{[(_=p==null?void 0:p.pt3)!=null?_:""]:c,[(l=p==null?void 0:p.pb1)!=null?l:""]:c,[(h=p==null?void 0:p.borderBottom)!=null?h:""]:!c,[(S=p==null?void 0:p.py3)!=null?S:""]:!c})},jn.default.createElement("div",{className:(0,zn.default)(p==null?void 0:p.textSecondary,p==null?void 0:p.textLgRight,p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${s}`])},o),jn.default.createElement("div",{className:(0,zn.default)(p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${12-Number(s)}`])},e))},Pm=B(ax,{ssrStyles:()=>Promise.resolve().then(()=>(Lr(),kr)),clientStyles:()=>(Lr(),$(kr)).default});var sx=({result:e,styles:o})=>$e.default.createElement(Pm,{title:"SC Result Hash",noBorder:!0},$e.default.createElement("div",{className:o==null?void 0:o.contractDetailItem},$e.default.createElement(Lm,{text:e.hash}),$e.default.createElement(pa,{className:o==null?void 0:o.copy,text:e.hash}),$e.default.createElement(Os,{className:o==null?void 0:o.explorer,page:Lo.transactionDetails(`${e.originalTxHash}#${e.hash}`)},$e.default.createElement(Rm.FontAwesomeIcon,{icon:Nm.faSearch})))),cx=B(sx,{ssrStyles:()=>Promise.resolve().then(()=>(Pr(),Er)),clientStyles:()=>(Pr(),$(Er)).default});0&&(module.exports={ScrDetailItem});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=ScrDetailItem.js.map
