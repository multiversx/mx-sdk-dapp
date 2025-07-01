"use strict";var Fm=Object.create;var To=Object.defineProperty,Bm=Object.defineProperties,Um=Object.getOwnPropertyDescriptor,Wm=Object.getOwnPropertyDescriptors,Gm=Object.getOwnPropertyNames,qo=Object.getOwnPropertySymbols,Hm=Object.getPrototypeOf,Jn=Object.prototype.hasOwnProperty,Nr=Object.prototype.propertyIsEnumerable;var Cr=(e,o,t)=>o in e?To(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Jn.call(o,t)&&Cr(e,t,o[t]);if(qo)for(var t of qo(o))Nr.call(o,t)&&Cr(e,t,o[t]);return e},w=(e,o)=>Bm(e,Wm(o));var _e=(e,o)=>{var t={};for(var s in e)Jn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&qo)for(var s of qo(e))o.indexOf(s)<0&&Nr.call(e,s)&&(t[s]=e[s]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),j=(e,o)=>{for(var t in o)To(e,t,{get:o[t],enumerable:!0})},Dr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Gm(o))!Jn.call(e,c)&&c!==t&&To(e,c,{get:()=>o[c],enumerable:!(s=Um(o,c))||s.enumerable});return e};var T=(e,o,t)=>(t=e!=null?Fm(Hm(e)):{},Dr(o||!e||!e.__esModule?To(t,"default",{value:e,enumerable:!0}):t,e)),q=e=>Dr(To({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{d(t.next(_))}catch(f){c(f)}},m=_=>{try{d(t.throw(_))}catch(f){c(f)}},d=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(e,o)).next())});var Or=y(jo=>{"use strict";n();jo.byteLength=Vm;jo.toByteArray=jm;jo.fromByteArray=Xm;var ae=[],Q=[],$m=typeof Uint8Array!="undefined"?Uint8Array:Array,Qn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Le=0,Rr=Qn.length;Le<Rr;++Le)ae[Le]=Qn[Le],Q[Qn.charCodeAt(Le)]=Le;var Le,Rr;Q["-".charCodeAt(0)]=62;Q["_".charCodeAt(0)]=63;function Mr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function Vm(e){var o=Mr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function qm(e,o,t){return(o+t)*3/4-t}function jm(e){var o,t=Mr(e),s=t[0],c=t[1],p=new $m(qm(e,s,c)),m=0,d=c>0?s-4:s,_;for(_=0;_<d;_+=4)o=Q[e.charCodeAt(_)]<<18|Q[e.charCodeAt(_+1)]<<12|Q[e.charCodeAt(_+2)]<<6|Q[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Q[e.charCodeAt(_)]<<2|Q[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=Q[e.charCodeAt(_)]<<10|Q[e.charCodeAt(_+1)]<<4|Q[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function zm(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function Km(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(zm(s));return c.join("")}function Xm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,d=t-s;m<d;m+=p)c.push(Km(e,m,m+p>d?d:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var Fr=y(et=>{n();et.read=function(e,o,t,s,c){var p,m,d=c*8-s-1,_=(1<<d)-1,f=_>>1,b=-7,S=t?c-1:0,L=t?-1:1,P=e[o+S];for(S+=L,p=P&(1<<-b)-1,P>>=-b,b+=d;b>0;p=p*256+e[o+S],S+=L,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+S],S+=L,b-=8);if(p===0)p=1-f;else{if(p===_)return m?NaN:(P?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-f}return(P?-1:1)*m*Math.pow(2,p-s)};et.write=function(e,o,t,s,c,p){var m,d,_,f=p*8-c-1,b=(1<<f)-1,S=b>>1,L=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,P=s?0:p-1,W=s?1:-1,re=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+S>=1?o+=L/_:o+=L*Math.pow(2,1-S),o*_>=2&&(m++,_/=2),m+S>=b?(d=0,m=b):m+S>=1?(d=(o*_-1)*Math.pow(2,c),m=m+S):(d=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+P]=d&255,P+=W,d/=256,c-=8);for(m=m<<c|d,f+=c;f>0;e[t+P]=m&255,P+=W,m/=256,f-=8);e[t+P-W]|=re*128}});var Yr=y(qe=>{"use strict";n();var ot=Or(),Ve=Fr(),Br=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;qe.Buffer=l;qe.SlowBuffer=od;qe.INSPECT_MAX_BYTES=50;var zo=2147483647;qe.kMaxLength=zo;l.TYPED_ARRAY_SUPPORT=Ym();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Ym(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function ue(e){if(e>zo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return at(e)}return Gr(e,o,t)}l.poolSize=8192;function Gr(e,o,t){if(typeof e=="string")return Jm(e,o);if(ArrayBuffer.isView(e))return Qm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return tt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return l.from(s,o,t);var c=ed(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return Gr(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Hr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Zm(e,o,t){return Hr(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}l.alloc=function(e,o,t){return Zm(e,o,t)};function at(e){return Hr(e),ue(e<0?0:it(e)|0)}l.allocUnsafe=function(e){return at(e)};l.allocUnsafeSlow=function(e){return at(e)};function Jm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=$r(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function nt(e){for(var o=e.length<0?0:it(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Qm(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return tt(o.buffer,o.byteOffset,o.byteLength)}return nt(e)}function tt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,l.prototype),s}function ed(e){if(l.isBuffer(e)){var o=it(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||st(e.length)?ue(0):nt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return nt(e.data)}function it(e){if(e>=zo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+zo.toString(16)+" bytes");return e|0}function od(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(ie(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=l.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?l.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(l.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function $r(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return rt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Xr(e).length;default:if(c)return s?-1:rt(e).length;o=(""+o).toLowerCase(),c=!0}}l.byteLength=$r;function nd(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return ld(this,o,t);case"utf8":case"utf-8":return qr(this,o,t);case"ascii":return md(this,o,t);case"latin1":case"binary":return dd(this,o,t);case"base64":return cd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _d(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}l.prototype._isBuffer=!0;function Ee(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ee(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ee(this,t,t+3),Ee(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ee(this,t,t+7),Ee(this,t+1,t+6),Ee(this,t+2,t+5),Ee(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?qr(this,0,o):nd.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=qe.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Br&&(l.prototype[Br]=l.prototype.inspect);l.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=s-t,_=Math.min(m,d),f=this.slice(c,p),b=o.slice(t,s),S=0;S<_;++S)if(f[S]!==b[S]){m=f[S],d=b[S];break}return m<d?-1:d<m?1:0};function Vr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,st(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,s)),l.isBuffer(o))return o.length===0?-1:Ur(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ur(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Ur(e,o,t,s,c){var p=1,m=e.length,d=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(P,W){return p===1?P[W]:P.readUInt16BE(W*p)}var f;if(c){var b=-1;for(f=t;f<m;f++)if(_(e,f)===_(o,b===-1?0:f-b)){if(b===-1&&(b=f),f-b+1===d)return b*p}else b!==-1&&(f-=f-b),b=-1}else for(t+d>m&&(t=m-d),f=t;f>=0;f--){for(var S=!0,L=0;L<d;L++)if(_(e,f+L)!==_(o,L)){S=!1;break}if(S)return f}return-1}l.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};l.prototype.indexOf=function(o,t,s){return Vr(this,o,t,s,!0)};l.prototype.lastIndexOf=function(o,t,s){return Vr(this,o,t,s,!1)};function td(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var d=parseInt(o.substr(m*2,2),16);if(st(d))return m;e[t+m]=d}return m}function rd(e,o,t,s){return Ko(rt(o,e.length-t),e,t,s)}function ad(e,o,t,s){return Ko(fd(o),e,t,s)}function id(e,o,t,s){return Ko(Xr(o),e,t,s)}function sd(e,o,t,s){return Ko(hd(o,e.length-t),e,t,s)}l.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return td(this,o,t,s);case"utf8":case"utf-8":return rd(this,o,t,s);case"ascii":case"latin1":case"binary":return ad(this,o,t,s);case"base64":return id(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return sd(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function cd(e,o,t){return o===0&&t===e.length?ot.fromByteArray(e):ot.fromByteArray(e.slice(o,t))}function qr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var _,f,b,S;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(S=(p&31)<<6|_&63,S>127&&(m=S));break;case 3:_=e[c+1],f=e[c+2],(_&192)===128&&(f&192)===128&&(S=(p&15)<<12|(_&63)<<6|f&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:_=e[c+1],f=e[c+2],b=e[c+3],(_&192)===128&&(f&192)===128&&(b&192)===128&&(S=(p&15)<<18|(_&63)<<12|(f&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=d}return pd(s)}var Wr=4096;function pd(e){var o=e.length;if(o<=Wr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Wr));return t}function md(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function dd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function ld(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Td[e[p]];return c}function _d(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}l.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,l.prototype),c};function F(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||F(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||F(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||F(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||F(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};l.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||F(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||F(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||F(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||F(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||F(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||F(o,4,this.length),Ve.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||F(o,4,this.length),Ve.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||F(o,8,this.length),Ve.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||F(o,8,this.length),Ve.read(this,o,!1,52,8)};function z(e,o,t,s,c,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;z(this,o,t,s,p,0)}var m=1,d=0;for(this[t]=o&255;++d<s&&(m*=256);)this[t+d]=o/m&255;return t+s};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;z(this,o,t,s,p,0)}var m=s-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+s};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);z(this,o,t,s,p-1,-p)}var m=0,d=1,_=0;for(this[t]=o&255;++m<s&&(d*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);z(this,o,t,s,p-1,-p)}var m=s-1,d=1,_=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||z(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function jr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function zr(e,o,t,s,c){return o=+o,t=t>>>0,c||jr(e,o,t,4,34028234663852886e22,-34028234663852886e22),Ve.write(e,o,t,s,23,4),t+4}l.prototype.writeFloatLE=function(o,t,s){return zr(this,o,t,!0,s)};l.prototype.writeFloatBE=function(o,t,s){return zr(this,o,t,!1,s)};function Kr(e,o,t,s,c){return o=+o,t=t>>>0,c||jr(e,o,t,8,17976931348623157e292,-17976931348623157e292),Ve.write(e,o,t,s,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,s){return Kr(this,o,t,!0,s)};l.prototype.writeDoubleBE=function(o,t,s){return Kr(this,o,t,!1,s)};l.prototype.copy=function(o,t,s,c){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};l.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var d=l.isBuffer(o)?o:l.from(o,c),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=d[m%_]}return this};var ud=/[^+/0-9A-Za-z-_]/g;function gd(e){if(e=e.split("=")[0],e=e.trim().replace(ud,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function rt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function fd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function hd(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Xr(e){return ot.toByteArray(gd(e))}function Ko(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function st(e){return e!==e}var Td=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var oa=y((hx,ea)=>{n();var D=ea.exports={},se,ce;function ct(){throw new Error("setTimeout has not been defined")}function pt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=ct}catch(e){se=ct}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=pt}catch(e){ce=pt}})();function Zr(e){if(se===setTimeout)return setTimeout(e,0);if((se===ct||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function xd(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===pt||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var ge=[],je=!1,Pe,Xo=-1;function yd(){!je||!Pe||(je=!1,Pe.length?ge=Pe.concat(ge):Xo=-1,ge.length&&Jr())}function Jr(){if(!je){var e=Zr(yd);je=!0;for(var o=ge.length;o;){for(Pe=ge,ge=[];++Xo<o;)Pe&&Pe[Xo].run();Xo=-1,o=ge.length}Pe=null,je=!1,xd(e)}}D.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new Qr(e,o)),ge.length===1&&!je&&Zr(Jr)};function Qr(e,o){this.fun=e,this.array=o}Qr.prototype.run=function(){this.fun.apply(null,this.array)};D.title="browser";D.browser=!0;D.env={};D.argv=[];D.version="";D.versions={};function fe(){}D.on=fe;D.addListener=fe;D.once=fe;D.off=fe;D.removeListener=fe;D.removeAllListeners=fe;D.emit=fe;D.prependListener=fe;D.prependOnceListener=fe;D.listeners=function(e){return[]};D.binding=function(e){throw new Error("process.binding is not supported")};D.cwd=function(){return"/"};D.chdir=function(e){throw new Error("process.chdir is not supported")};D.umask=function(){return 0}});var r,i,Sd,a,n=h(()=>{r=T(Yr()),i=T(oa()),Sd=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Sd});var na=h(()=>{"use strict";n()});var pe=h(()=>{"use strict";n()});var ta=h(()=>{"use strict";n()});var mt,ra=h(()=>{"use strict";n();mt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(mt||{})});var aa=h(()=>{"use strict";n()});var dt=h(()=>{"use strict";n()});var ia=h(()=>{"use strict";n()});var lt=h(()=>{"use strict";n()});var sa=h(()=>{"use strict";n()});var ca=h(()=>{"use strict";n()});var Ce,ze,we=h(()=>{"use strict";n();Ce=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),ze=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var pa,Ex,ma,Px,E=h(()=>{"use strict";n();we();pa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(pa||{}),Ex=u(u({},ze.WindowProviderRequestEnums),pa),ma=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ma||{}),Px=u(u({},ze.WindowProviderResponseEnums),ma)});var da=h(()=>{"use strict";n()});var la=h(()=>{"use strict";n()});var K=h(()=>{"use strict";n()});var _a=h(()=>{"use strict";n()});var ua=h(()=>{"use strict";n()});var ga=h(()=>{"use strict";n()});var R=h(()=>{"use strict";n();lt();sa();ca();E();da();la();K();_a();ua();ga()});var Ke,fa,zx,ha,Kx,Ta,Xx,Yx,bd,Xe=h(()=>{"use strict";n();R();Ke={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:fa,egldLabel:zx}=Ke["devnet"],{chainId:ha,egldLabel:Kx}=Ke["testnet"],{chainId:Ta,egldLabel:Xx}=Ke["mainnet"],Yx={["devnet"]:fa,["testnet"]:ha,["mainnet"]:Ta},bd={[fa]:"devnet",[ha]:"testnet",[Ta]:"mainnet"}});var Yo=h(()=>{"use strict";n()});var me,xa=h(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-provider")});var Ne,xo=h(()=>{"use strict";n();Ne=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ya,Sa,_t,ny,ty,ut=h(()=>{"use strict";n();xo();_t=String((Sa=(ya=Ne.safeWindow)==null?void 0:ya.navigator)==null?void 0:Sa.userAgent),ny=/^((?!chrome|android).)*safari/i.test(_t),ty=/firefox/i.test(_t)&&/windows/i.test(_t)});var Zo,Jo,ba,Qo,wa,Ye,va,I=h(()=>{"use strict";n();na();pe();ta();ra();aa();dt();ia();Xe();Yo();xa();ut();Zo=5e4,Jo=1e9,ba=1,Qo="logout",wa="login",Ye="0",va="..."});var yo,en=h(()=>{"use strict";n();yo=()=>Date.now()/1e3});var Ia=h(()=>{"use strict";n()});var Aa=h(()=>{"use strict";n()});var gt=h(()=>{"use strict";n();en();Ia();Aa()});var ft={};j(ft,{clear:()=>Ad,getItem:()=>vd,localStorageKeys:()=>ve,removeItem:()=>Id,setItem:()=>wd});var ve,on,wd,vd,Id,Ad,Ze=h(()=>{"use strict";n();gt();ve={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},on=typeof localStorage!="undefined",wd=({key:e,data:o,expires:t})=>{!on||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},vd=e=>{if(!on)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:yo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Id=e=>{!on||localStorage.removeItem(String(e))},Ad=()=>{!on||localStorage.clear()}});var ht={};j(ht,{clear:()=>Pa,getItem:()=>La,removeItem:()=>Ea,setItem:()=>ka,storage:()=>kd});var ka,La,Ea,Pa,kd,Ca=h(()=>{"use strict";n();ka=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},La=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ea=e=>sessionStorage.removeItem(String(e)),Pa=()=>sessionStorage.clear(),kd={setItem:ka,getItem:La,removeItem:Ea,clear:Pa}});var De,Je=h(()=>{"use strict";n();Ze();Ca();De={session:ht,local:ft}});var Tt,C,Y,N=h(()=>{"use strict";n();Tt=require("@reduxjs/toolkit");I();C=(0,Tt.createAction)(Qo),Y=(0,Tt.createAction)(wa,e=>({payload:e}))});var yt,Na,Da,nn,xt,Ra,tn,Ld,St,Ry,Ed,Pd,My,Oy,Fy,Cd,Nd,rn,an=h(()=>{"use strict";n();yt=require("@multiversx/sdk-core"),Na=require("@reduxjs/toolkit"),Da=require("redux-persist");I();Je();Ze();N();nn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Ye},xt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":nn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ra=(0,Na.createSlice)({name:"accountInfoSlice",initialState:xt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new yt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:nn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(C,()=>(De.local.removeItem(ve.loginExpiresAt),xt)),e.addCase(Y,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new yt.Address(s).hex()}),e.addCase(Da.REHYDRATE,(o,t)=>{var f;if(!((f=t.payload)!=null&&f.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:xt.accounts,o.publicKey=d})}}),{setAccount:tn,setAddress:Ld,setAccountNonce:St,setAccountShard:Ry,setLedgerAccount:Ed,updateLedgerAccount:Pd,setWalletConnectAccount:My,setIsAccountLoading:Oy,setAccountLoadingError:Fy,setWebsocketEvent:Cd,setWebsocketBatchEvent:Nd}=Ra.actions,rn=Ra.reducer});function So(){return new Date().setHours(new Date().getHours()+24)}function bo(e){De.local.setItem({key:ve.loginExpiresAt,data:e,expires:e})}var bt=h(()=>{"use strict";n();Je();Ze()});var Oa,Ma,Fa,zy,Dd,Rd,Ba,Ky,Md,Ua,Xy,Yy,Zy,sn,cn=h(()=>{"use strict";n();Oa=require("@reduxjs/toolkit");bt();E();N();Ma={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Fa=(0,Oa.createSlice)({name:"loginInfoSlice",initialState:Ma,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(C,()=>Ma),e.addCase(Y,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,bo(So())})}}),{setLoginMethod:zy,setWalletConnectLogin:Dd,setLedgerLogin:Rd,setTokenLogin:Ba,setTokenLoginSignature:Ky,setWalletLogin:Md,invalidateLoginSession:Ua,setLogoutRoute:Xy,setIsWalletConnectV2Initialized:Yy,setWebviewLogin:Zy}=Fa.actions,sn=Fa.reducer});var Ga,Wa,Ha,oS,Od,nS,Fd,pn,mn=h(()=>{"use strict";n();Ga=require("@reduxjs/toolkit");N();Wa={},Ha=(0,Ga.createSlice)({name:"modalsSlice",initialState:Wa,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(C,()=>Wa)}}),{setTxSubmittedModal:oS,setNotificationModal:Od,clearTxSubmittedModal:nS,clearNotificationModal:Fd}=Ha.actions,pn=Ha.reducer});var he,Re=h(()=>{"use strict";n();he=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var M,H=h(()=>{"use strict";n();Re();M=()=>{if(!he())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var $a=h(()=>{"use strict";n();H()});var Va=h(()=>{"use strict";n();$()});var qa=h(()=>{"use strict";n();xo()});var $=h(()=>{"use strict";n();$a();Va();H();qa()});var wo=h(()=>{"use strict";n();$()});var za=h(()=>{"use strict";n();wo()});function Ka(e){return e[Math.floor(Math.random()*e.length)]}var Xa=h(()=>{"use strict";n()});var wt=h(()=>{"use strict";n();dt()});var Te=h(()=>{"use strict";n();za();Xa();wt()});var Ya,Za,Ja,vt,Ud,Qa,MS,OS,Wd,dn,ln=h(()=>{"use strict";n();Ya=require("@reduxjs/toolkit"),Za=T(require("lodash.omit")),Ja=require("redux-persist");Yo();N();Te();vt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Ud={network:vt},Qa=(0,Ya.createSlice)({name:"appConfig",initialState:Ud,reducers:{initializeNetworkConfig:(e,o)=>{let t=Ka(o.payload.walletConnectV2RelayAddresses),s=(0,Za.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(C,o=>{o.network.customWalletAddress=void 0}),e.addCase(Ja.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:MS,updateNetworkConfig:OS,setCustomWalletAddress:Wd}=Qa.actions,dn=Qa.reducer});var ei,It,oi,HS,$S,VS,_n,un=h(()=>{"use strict";n();ei=require("@reduxjs/toolkit");R();N();It={isSigning:!1,signedSessions:{}},oi=(0,ei.createSlice)({name:"signedMessageInfoSliceState",initialState:It,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>It},extraReducers:e=>{e.addCase(C,()=>It)}}),{setSignSession:HS,clearSignedMessageInfo:$S,setSignSessionState:VS}=oi.actions,_n=oi.reducer});var ti,ri,ni,ai,Gd,Hd,ZS,$d,gn,fn=h(()=>{"use strict";n();ti=require("@reduxjs/toolkit"),ri=require("redux-persist");R();en();N();ni={customToasts:[],transactionToasts:[]},ai=(0,ti.createSlice)({name:"toastsSlice",initialState:ni,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:yo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(C,()=>ni),e.addCase(ri.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:Gd,removeCustomToast:Hd,addTransactionToast:ZS,removeTransactionToast:$d}=ai.actions,gn=ai.reducer});var ii,kt,Lt,Et,Vd,At,si,ob,qd,Pt,hn,Tn=h(()=>{"use strict";n();ii=require("@reduxjs/toolkit");N();kt="Transaction failed",Lt="Transaction successful",Et="Processing transaction",Vd="Transaction submitted",At={},si=(0,ii.createSlice)({name:"transactionsInfo",initialState:At,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||kt,successMessage:(s==null?void 0:s.successMessage)||Lt,processingMessage:(s==null?void 0:s.processingMessage)||Et,submittedMessage:(s==null?void 0:s.submittedMessage)||Vd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>At},extraReducers:e=>{e.addCase(C,()=>At)}}),{clearTransactionsInfo:ob,setTransactionsDisplayInfo:qd,clearTransactionsInfoForSessionId:Pt}=si.actions,hn=si.reducer});function eo(e){return e!=null&&(ol(e)||il(e))}function oo(e){return e!=null&&(nl(e)||sl(e))}function no(e){return e!=null&&(tl(e)||cl(e))}function ci(e){return e!=null&&(rl(e)||pl(e))}function Ct(e){return e!=null&&al(e)}function ol(e){return e!=null&&jd.includes(e)}function nl(e){return e!=null&&zd.includes(e)}function tl(e){return e!=null&&Kd.includes(e)}function rl(e){return e!=null&&Xd.includes(e)}function al(e){return e!=null&&Yd.includes(e)}function il(e){return e!=null&&Zd.includes(e)}function sl(e){return e!=null&&Jd.includes(e)}function cl(e){return e!=null&&Qd.includes(e)}function pl(e){return e!=null&&el.includes(e)}var jd,zd,Kd,Xd,Yd,Zd,Jd,Qd,el,to=h(()=>{"use strict";n();E();jd=["sent"],zd=["success"],Kd=["fail","cancelled","timedOut"],Xd=["invalid"],Yd=["timedOut"],Zd=["pending"],Jd=["success"],Qd=["fail","invalid"],el=["not executed"]});var pi,mi,vo,ml,di,li,_i,dl,xn,ll,_l,mb,ul,Io,Nt,db,yn,Sn=h(()=>{"use strict";n();pi=require("@reduxjs/toolkit"),mi=require("redux-persist");E();to();N();vo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},ml={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},di=(0,pi.createSlice)({name:"transactionsSlice",initialState:vo,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,f;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},ml),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===t&&(e.transactionsToSign=vo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var f,b,S,L,P,W,re,$e;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(b=(f=e.signedTransactions)==null?void 0:f[t])==null?void 0:b.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(oe=>oe.hash===p?w(u(u({},m!=null?m:{}),oe),{status:s,errorMessage:c,inTransit:d}):oe);let ho=(L=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:L.every(oe=>oo(oe.status)),Yn=(W=(P=e.signedTransactions[t])==null?void 0:P.transactions)==null?void 0:W.some(oe=>no(oe.status)),Zn=($e=(re=e.signedTransactions[t])==null?void 0:re.transactions)==null?void 0:$e.every(oe=>ci(oe.status));ho&&(e.signedTransactions[t].status="success"),Yn&&(e.signedTransactions[t].status="fail"),Zn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=vo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=vo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(C,()=>vo),e.addCase(mi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((d,[_,f])=>{let b=new Date(_),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(d[_]=f),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:li,updateSignedTransactions:_i,setTransactionsToSign:dl,clearAllTransactionsToSign:xn,clearAllSignedTransactions:ll,clearSignedTransaction:_l,clearTransactionToSign:mb,setSignTransactionsError:ul,setSignTransactionsCancelMessage:Io,moveTransactionsToSignedState:Nt,updateSignedTransactionsCustomTransactionInformation:db}=di.actions,yn=di.reducer});var ui,Dt,gi,gb,fb,gl,hb,bn,wn=h(()=>{"use strict";n();ui=require("@reduxjs/toolkit");N();Dt={},gi=(0,ui.createSlice)({name:"batchTransactionsSlice",initialState:Dt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Dt},extraReducers:e=>{e.addCase(C,()=>Dt)}}),{setBatchTransactions:gb,updateBatchTransactions:fb,clearBatchTransactions:gl,clearAllBatchTransactions:hb}=gi.actions,bn=gi.reducer});var hi,fi,Ti,Sb,xi,Rt=h(()=>{"use strict";n();hi=require("@reduxjs/toolkit");N();fi={},Ti=(0,hi.createSlice)({name:"dappConfigSlice",initialState:fi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(C,()=>fi)}}),{setDappConfig:Sb}=Ti.actions,xi=Ti.reducer});var k=h(()=>{"use strict";n();an();cn();mn();ln();un();fn();Tn();Sn();wn();Rt()});var Bt=h(()=>{"use strict";n()});var Ri,Ul,Wl,Oe,Nn=h(()=>{"use strict";n();Ri=require("@reduxjs/toolkit");Bt();an();wn();Rt();cn();mn();ln();un();fn();Tn();Sn();Ul={["account"]:rn,["dappConfig"]:xi,["loginInfo"]:sn,["modals"]:pn,["networkConfig"]:dn,["signedMessageInfo"]:_n,["toasts"]:gn,["transactionsInfo"]:hn,["transactions"]:yn,["batchTransactions"]:bn},Wl=(e={})=>(0,Ri.combineReducers)(u(u({},Ul),e)),Oe=Wl});var Bi={};j(Bi,{default:()=>n_,sessionStorageReducers:()=>Ut});function xe(e,o=[]){return{key:e,version:1,storage:Oi.default,blacklist:o}}var X,Mi,Oi,Gl,ko,Hl,$l,Vl,ql,jl,zl,Kl,Xl,Yl,Zl,Fi,Jl,Ut,Ql,e_,o_,n_,Ui=h(()=>{"use strict";n();X=require("redux-persist"),Mi=T(require("redux-persist/lib/storage")),Oi=T(require("redux-persist/lib/storage/session"));Nn();k();an();wn();cn();mn();ln();un();fn();Tn();Sn();Bt();Gl={persistReducersStorageType:"localStorage"},ko={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Hl=xe(ko["account"]),$l=xe(ko["loginInfo"]),Vl=xe(ko["modals"]),ql=xe(ko["networkConfig"]),jl={2:e=>w(u({},e),{networkConfig:vt})};zl=xe("sdk-dapp-transactionsInfo"),Kl=xe("sdk-dapp-transactions",["transactionsToSign"]),Xl=xe("sdk-dapp-batchTransactions",["batchTransactions"]),Yl=xe("sdk-dapp-toasts"),Zl=xe("sdk-dapp-signedMessageInfo"),Fi={key:"sdk-dapp-store",version:2,storage:Mi.default,whitelist:Object.keys(ko),migrate:(0,X.createMigrate)(jl,{debug:!1})},Jl=w(u({},Fi),{whitelist:[]}),Ut={["toasts"]:(0,X.persistReducer)(Yl,gn),["transactions"]:(0,X.persistReducer)(Kl,yn),["transactionsInfo"]:(0,X.persistReducer)(zl,hn),["batchTransactions"]:(0,X.persistReducer)(Xl,bn),["signedMessageInfo"]:(0,X.persistReducer)(Zl,_n)},Ql=w(u({},Ut),{["account"]:(0,X.persistReducer)(Hl,rn),["loginInfo"]:(0,X.persistReducer)($l,sn),["modals"]:(0,X.persistReducer)(Vl,pn),["networkConfig"]:(0,X.persistReducer)(ql,dn)}),e_=Gl.persistReducersStorageType==="localStorage",o_=e_?(0,X.persistReducer)(Fi,Oe(Ut)):(0,X.persistReducer)(Jl,Oe(Ql)),n_=o_});var Wi={};j(Wi,{default:()=>t_});var t_,Gi=h(()=>{"use strict";n();Nn();t_=Oe()});var Hi={};j(Hi,{default:()=>a_});var ee,r_,a_,$i=h(()=>{"use strict";n();ee=require("redux-persist"),r_=[ee.FLUSH,ee.REHYDRATE,ee.PAUSE,ee.PERSIST,ee.PURGE,ee.REGISTER],a_=r_});var ji={};j(ji,{default:()=>qi});function qi(e){return(0,Vi.persistStore)(e)}var Vi,zi=h(()=>{"use strict";n();Vi=require("redux-persist")});var Zt={};j(Zt,{css:()=>bs,default:()=>wu});var bs,wu,Jt=h(()=>{"use strict";n();bs=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bs));wu={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var er={};j(er,{css:()=>ks,default:()=>ku});var ks,ku,or=h(()=>{"use strict";n();ks=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ks));ku={copy:"dapp-core-component__copyButton-styles__copy"}});var rr={};j(rr,{css:()=>Cs,default:()=>Pu});var Cs,Pu,ar=h(()=>{"use strict";n();Cs=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cs));Pu={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var sr={};j(sr,{css:()=>Os,default:()=>Nu});var Os,Nu,cr=h(()=>{"use strict";n();Os=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Os));Nu={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var Ks=y((_3,zs)=>{n();var Zu=typeof a=="object"&&a&&a.Object===Object&&a;zs.exports=Zu});var Fo=y((u3,Xs)=>{n();var Ju=Ks(),Qu=typeof self=="object"&&self&&self.Object===Object&&self,eg=Ju||Qu||Function("return this")();Xs.exports=eg});var dr=y((g3,Ys)=>{n();var og=Fo(),ng=og.Symbol;Ys.exports=ng});var ec=y((f3,Qs)=>{n();var Zs=dr(),Js=Object.prototype,tg=Js.hasOwnProperty,rg=Js.toString,Bo=Zs?Zs.toStringTag:void 0;function ag(e){var o=tg.call(e,Bo),t=e[Bo];try{e[Bo]=void 0;var s=!0}catch(p){}var c=rg.call(e);return s&&(o?e[Bo]=t:delete e[Bo]),c}Qs.exports=ag});var nc=y((h3,oc)=>{n();var ig=Object.prototype,sg=ig.toString;function cg(e){return sg.call(e)}oc.exports=cg});var lr=y((T3,ac)=>{n();var tc=dr(),pg=ec(),mg=nc(),dg="[object Null]",lg="[object Undefined]",rc=tc?tc.toStringTag:void 0;function _g(e){return e==null?e===void 0?lg:dg:rc&&rc in Object(e)?pg(e):mg(e)}ac.exports=_g});var sc=y((x3,ic)=>{n();var ug=Array.isArray;ic.exports=ug});var pc=y((y3,cc)=>{n();function gg(e){return e!=null&&typeof e=="object"}cc.exports=gg});var dc=y((S3,mc)=>{n();var fg=lr(),hg=sc(),Tg=pc(),xg="[object String]";function yg(e){return typeof e=="string"||!hg(e)&&Tg(e)&&fg(e)==xg}mc.exports=yg});var qn=y((y5,fc)=>{n();function Ug(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}fc.exports=Ug});var Tc=y((S5,hc)=>{n();var Wg=lr(),Gg=qn(),Hg="[object AsyncFunction]",$g="[object Function]",Vg="[object GeneratorFunction]",qg="[object Proxy]";function jg(e){if(!Gg(e))return!1;var o=Wg(e);return o==$g||o==Vg||o==Hg||o==qg}hc.exports=jg});var yc=y((b5,xc)=>{n();var zg=Fo(),Kg=zg["__core-js_shared__"];xc.exports=Kg});var wc=y((w5,bc)=>{n();var fr=yc(),Sc=function(){var e=/[^.]+$/.exec(fr&&fr.keys&&fr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Xg(e){return!!Sc&&Sc in e}bc.exports=Xg});var Ic=y((v5,vc)=>{n();var Yg=Function.prototype,Zg=Yg.toString;function Jg(e){if(e!=null){try{return Zg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}vc.exports=Jg});var kc=y((I5,Ac)=>{n();var Qg=Tc(),ef=wc(),of=qn(),nf=Ic(),tf=/[\\^$.*+?()[\]{}|]/g,rf=/^\[object .+?Constructor\]$/,af=Function.prototype,sf=Object.prototype,cf=af.toString,pf=sf.hasOwnProperty,mf=RegExp("^"+cf.call(pf).replace(tf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function df(e){if(!of(e)||ef(e))return!1;var o=Qg(e)?mf:rf;return o.test(nf(e))}Ac.exports=df});var Ec=y((A5,Lc)=>{n();function lf(e,o){return e==null?void 0:e[o]}Lc.exports=lf});var jn=y((k5,Pc)=>{n();var _f=kc(),uf=Ec();function gf(e,o){var t=uf(e,o);return _f(t)?t:void 0}Pc.exports=gf});var Uo=y((L5,Cc)=>{n();var ff=jn(),hf=ff(Object,"create");Cc.exports=hf});var Rc=y((E5,Dc)=>{n();var Nc=Uo();function Tf(){this.__data__=Nc?Nc(null):{},this.size=0}Dc.exports=Tf});var Oc=y((P5,Mc)=>{n();function xf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Mc.exports=xf});var Bc=y((C5,Fc)=>{n();var yf=Uo(),Sf="__lodash_hash_undefined__",bf=Object.prototype,wf=bf.hasOwnProperty;function vf(e){var o=this.__data__;if(yf){var t=o[e];return t===Sf?void 0:t}return wf.call(o,e)?o[e]:void 0}Fc.exports=vf});var Wc=y((N5,Uc)=>{n();var If=Uo(),Af=Object.prototype,kf=Af.hasOwnProperty;function Lf(e){var o=this.__data__;return If?o[e]!==void 0:kf.call(o,e)}Uc.exports=Lf});var Hc=y((D5,Gc)=>{n();var Ef=Uo(),Pf="__lodash_hash_undefined__";function Cf(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ef&&o===void 0?Pf:o,this}Gc.exports=Cf});var Vc=y((R5,$c)=>{n();var Nf=Rc(),Df=Oc(),Rf=Bc(),Mf=Wc(),Of=Hc();function mo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}mo.prototype.clear=Nf;mo.prototype.delete=Df;mo.prototype.get=Rf;mo.prototype.has=Mf;mo.prototype.set=Of;$c.exports=mo});var jc=y((M5,qc)=>{n();function Ff(){this.__data__=[],this.size=0}qc.exports=Ff});var Kc=y((O5,zc)=>{n();function Bf(e,o){return e===o||e!==e&&o!==o}zc.exports=Bf});var Wo=y((F5,Xc)=>{n();var Uf=Kc();function Wf(e,o){for(var t=e.length;t--;)if(Uf(e[t][0],o))return t;return-1}Xc.exports=Wf});var Zc=y((B5,Yc)=>{n();var Gf=Wo(),Hf=Array.prototype,$f=Hf.splice;function Vf(e){var o=this.__data__,t=Gf(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():$f.call(o,t,1),--this.size,!0}Yc.exports=Vf});var Qc=y((U5,Jc)=>{n();var qf=Wo();function jf(e){var o=this.__data__,t=qf(o,e);return t<0?void 0:o[t][1]}Jc.exports=jf});var op=y((W5,ep)=>{n();var zf=Wo();function Kf(e){return zf(this.__data__,e)>-1}ep.exports=Kf});var tp=y((G5,np)=>{n();var Xf=Wo();function Yf(e,o){var t=this.__data__,s=Xf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}np.exports=Yf});var ap=y((H5,rp)=>{n();var Zf=jc(),Jf=Zc(),Qf=Qc(),eh=op(),oh=tp();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}lo.prototype.clear=Zf;lo.prototype.delete=Jf;lo.prototype.get=Qf;lo.prototype.has=eh;lo.prototype.set=oh;rp.exports=lo});var sp=y(($5,ip)=>{n();var nh=jn(),th=Fo(),rh=nh(th,"Map");ip.exports=rh});var mp=y((V5,pp)=>{n();var cp=Vc(),ah=ap(),ih=sp();function sh(){this.size=0,this.__data__={hash:new cp,map:new(ih||ah),string:new cp}}pp.exports=sh});var lp=y((q5,dp)=>{n();function ch(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}dp.exports=ch});var Go=y((j5,_p)=>{n();var ph=lp();function mh(e,o){var t=e.__data__;return ph(o)?t[typeof o=="string"?"string":"hash"]:t.map}_p.exports=mh});var gp=y((z5,up)=>{n();var dh=Go();function lh(e){var o=dh(this,e).delete(e);return this.size-=o?1:0,o}up.exports=lh});var hp=y((K5,fp)=>{n();var _h=Go();function uh(e){return _h(this,e).get(e)}fp.exports=uh});var xp=y((X5,Tp)=>{n();var gh=Go();function fh(e){return gh(this,e).has(e)}Tp.exports=fh});var Sp=y((Y5,yp)=>{n();var hh=Go();function Th(e,o){var t=hh(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}yp.exports=Th});var wp=y((Z5,bp)=>{n();var xh=mp(),yh=gp(),Sh=hp(),bh=xp(),wh=Sp();function _o(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}_o.prototype.clear=xh;_o.prototype.delete=yh;_o.prototype.get=Sh;_o.prototype.has=bh;_o.prototype.set=wh;bp.exports=_o});var Ip=y((J5,vp)=>{n();var vh="__lodash_hash_undefined__";function Ih(e){return this.__data__.set(e,vh),this}vp.exports=Ih});var kp=y((Q5,Ap)=>{n();function Ah(e){return this.__data__.has(e)}Ap.exports=Ah});var Ep=y((eO,Lp)=>{n();var kh=wp(),Lh=Ip(),Eh=kp();function zn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new kh;++o<t;)this.add(e[o])}zn.prototype.add=zn.prototype.push=Lh;zn.prototype.has=Eh;Lp.exports=zn});var Cp=y((oO,Pp)=>{n();function Ph(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Pp.exports=Ph});var Dp=y((nO,Np)=>{n();function Ch(e){return e!==e}Np.exports=Ch});var Mp=y((tO,Rp)=>{n();function Nh(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Rp.exports=Nh});var Fp=y((rO,Op)=>{n();var Dh=Cp(),Rh=Dp(),Mh=Mp();function Oh(e,o,t){return o===o?Mh(e,o,t):Dh(e,Rh,t)}Op.exports=Oh});var Up=y((aO,Bp)=>{n();var Fh=Fp();function Bh(e,o){var t=e==null?0:e.length;return!!t&&Fh(e,o,0)>-1}Bp.exports=Bh});var Gp=y((iO,Wp)=>{n();function Uh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}Wp.exports=Uh});var $p=y((sO,Hp)=>{n();function Wh(e,o){return e.has(o)}Hp.exports=Wh});var qp=y((cO,Vp)=>{n();var Gh=jn(),Hh=Fo(),$h=Gh(Hh,"Set");Vp.exports=$h});var zp=y((pO,jp)=>{n();function Vh(){}jp.exports=Vh});var hr=y((mO,Kp)=>{n();function qh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Kp.exports=qh});var Yp=y((dO,Xp)=>{n();var Tr=qp(),jh=zp(),zh=hr(),Kh=1/0,Xh=Tr&&1/zh(new Tr([,-0]))[1]==Kh?function(e){return new Tr(e)}:jh;Xp.exports=Xh});var Jp=y((lO,Zp)=>{n();var Yh=Ep(),Zh=Up(),Jh=Gp(),Qh=$p(),eT=Yp(),oT=hr(),nT=200;function tT(e,o,t){var s=-1,c=Zh,p=e.length,m=!0,d=[],_=d;if(t)m=!1,c=Jh;else if(p>=nT){var f=o?null:eT(e);if(f)return oT(f);m=!1,c=Qh,_=new Yh}else _=o?[]:d;e:for(;++s<p;){var b=e[s],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var L=_.length;L--;)if(_[L]===S)continue e;o&&_.push(S),d.push(b)}else c(_,S,t)||(_!==d&&_.push(S),d.push(b))}return d}Zp.exports=tT});var em=y((_O,Qp)=>{n();var rT=Jp();function aT(e){return e&&e.length?rT(e):[]}Qp.exports=aT});var Se={};j(Se,{css:()=>dm,default:()=>GT});var dm,GT,be=h(()=>{"use strict";n();dm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dm));GT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var kr={};j(kr,{css:()=>vm,default:()=>sx});var vm,sx,Lr=h(()=>{"use strict";n();vm=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vm));sx={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Er={};j(Er,{css:()=>km,default:()=>px});var km,px,Pr=h(()=>{"use strict";n();km=`.dapp-core-component__confirmReceiverStyles__receiver {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(km));px={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var lx={};j(lx,{ConfirmReceiver:()=>dx});module.exports=q(lx);n();var U=T(require("react")),Lm=require("@fortawesome/free-solid-svg-icons"),Em=require("@fortawesome/react-fontawesome"),Pm=T(require("bignumber.js"));n();n();n();var tu=T(require("axios"));n();n();k();n();var yi=T(require("lodash.isequal")),vn=require("reselect"),x=(0,vn.createSelectorCreator)(vn.defaultMemoize,yi.default);var de=e=>e.account,Me=x(de,e=>e.address),ro=x(de,Me,(e,o)=>o in e.accounts?e.accounts[o]:nn),fl=x(de,ro,(e,o)=>{let c=e,{accounts:t}=c,s=_e(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),Fb=x(ro,e=>e.balance),hl=x(ro,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Bb=x(de,e=>e.shard),Tl=x(de,e=>e.ledgerAccount),Ub=x(de,e=>e.walletConnectAccount),Wb=x(de,e=>e.isAccountLoading),Gb=x(de,e=>e.accountLoadingError),xl=x(de,e=>e.websocketEvent),yl=x(de,e=>e.websocketBatchEvent);n();var Si=e=>e.dappConfig,Vb=x(Si,e=>e.shouldUseWebViewProvider);n();var Z=e=>e.loginInfo,Sl=x(Z,e=>e.loginMethod),In=x(Z,Me,(e,o)=>Boolean(o)),Kb=x(Z,e=>e.walletConnectLogin),bl=x(Z,e=>e.ledgerLogin),wl=x(Z,e=>e.walletLogin),Xb=x(Z,e=>e.isLoginSessionInvalid),Mt=x(Z,e=>e.tokenLogin),bi=x(Z,e=>e.logoutRoute),vl=x(Z,e=>e.isWalletConnectV2Initialized);n();var wi=e=>e.modals,Jb=x(wi,e=>e.txSubmittedModal),Il=x(wi,e=>e.notificationModal);n();var ne=e=>e.networkConfig,An=x(ne,e=>e.network.chainId),Al=x(ne,e=>e.network.roundDuration),o0=x(ne,e=>e.network.walletConnectBridgeAddress),kl=x(ne,e=>e.network.walletConnectV2RelayAddress),Ll=x(ne,e=>e.network.walletConnectV2ProjectId),El=x(ne,e=>e.network.walletConnectV2Options),Pl=x(ne,e=>e.network.walletConnectDeepLink),J=x(ne,e=>e.network),Ot=x(J,e=>e.apiAddress),vi=x(J,e=>e.explorerAddress),Ii=x(J,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Cl=x(J,e=>e.xAliasAddress),Ai=x(J,e=>e.egldLabel);n();var kn=e=>e.signedMessageInfo,r0=x(kn,e=>e.isSigning),a0=x(kn,e=>e.errorMessage),i0=x(kn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),s0=x(kn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var ki=e=>e.toasts,Nl=x(ki,e=>e.customToasts),Li=x(ki,e=>e.transactionToasts);n();k();var Ei={errorMessage:kt,successMessage:Lt,processingMessage:Et},Pi=e=>e.transactionsInfo,Dl=x(Pi,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Ei);n();n();var le=require("@multiversx/sdk-core");I();n();var Ft=require("@multiversx/sdk-core/out");n();n();function Ln(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Ci=e=>{let o=e!=null?e:"";return Ln(o)?Ft.TransactionPayload.fromEncoded(o):new Ft.TransactionPayload(o)};n();I();var Ao=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(mt).some(t=>e.startsWith(t)):!1;function En(e){var s,c,p;let o=u({},e);Ao({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Ci(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Zo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Jo,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:ba)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();var Wt=require("@reduxjs/toolkit"),Zi=require("react-redux/lib/utils/Subscription");k();n();var Ni=T(require("lodash.throttle"));I();k();bt();Je();Ze();var Ol=[Qo],Pn=!1,Fl=(0,Ni.default)(()=>{bo(So())},5e3),Di=e=>o=>t=>{if(Ol.includes(t.type))return o(t);let s=e.getState(),c=De.local.getItem(ve.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return bo(So());let m=Date.now();return c-m<0&&!Pn?setTimeout(()=>{Pn=!0,e.dispatch(Ua())},1e3):(Pn&&(Pn=!1),Fl()),o(t)};n();n();function Cn(){return typeof sessionStorage!="undefined"}var Ki=Cn()?(Ui(),q(Bi)).default:(Gi(),q(Wi)).default,Xi=Cn()?($i(),q(Hi)).default:[],Yi=Cn()?(zi(),q(ji)).default:e=>e;Nn();var v=(0,Wt.configureStore)({reducer:Ki,middleware:e=>e({serializableCheck:{ignoredActions:[...Xi,St.type,tn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Di)}),Ji=(0,Zi.createSubscription)(v),Sw=Yi(v),bw=(0,Wt.configureStore)({reducer:Oe});n();n();var s_=require("@multiversx/sdk-core/out");n();I();n();var Eo=require("@multiversx/sdk-core");R();n();var Qi=require("@multiversx/sdk-core");function c_(e){try{let o=new Qi.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Lo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&c_(e)}var p_=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Gt(e,o,t=""){if(!Lo(e))return!1;if(new Eo.Address(e).isContractAddress())return!0;let p=es({receiver:e,data:t});return p?new Eo.Address(p).isContractAddress()||l_(e,o,t):!1}var m_=e=>e.toLowerCase().match(/[0-9a-f]/g),d_=e=>e.length%2===0;function l_(e,o,t){let s=t==null?void 0:t.split("@");if(s==null)return!1;let[c,...p]=s,m=o!=null&&e!=null&&e===o,d=p_.includes(c),_=p.every(f=>m_(f)&&d_(f));return m&&d&&_}function es({receiver:e,data:o}){try{if(!o)return e;let t=Ln(o)?Eo.TransactionPayload.fromEncoded(o).toString():o,s=__(t),c=t.split("@");return s>-1?c[s]:e}catch(t){console.log(t);return}}function __(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var u_=require("@multiversx/sdk-core"),g_=T(require("bignumber.js"));E();n();n();n();var Fe="accounts";var Ht="blocks";n();n();n();n();K();n();var ts=!1;function y_(e){ts||(console.error(e),ts=!0)}function $t({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(y_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();K();n();n();n();var v_=T(require("bignumber.js"));I();n();var w_=require("@multiversx/sdk-core"),Vt=T(require("bignumber.js"));I();n();var S_=T(require("bignumber.js"));n();Vt.default.config({ROUNDING_MODE:Vt.default.ROUND_FLOOR});n();n();n();I();n();n();n();n();I();n();I();n();var I_=require("@multiversx/sdk-core");I();n();var Co=require("@multiversx/sdk-core"),L_=T(require("bignumber.js"));I();n();n();var A_=T(require("bignumber.js"));I();n();I();n();n();n();n();n();n();I();n();I();n();I();n();K();var P_=["reDelegateRewards","claimRewards","unBond"],C_=["wrapEgld","unwrapEgld"],N_=["unStake"],D_=["unDelegate"];n();n();n();I();n();var F_=T(require("bignumber.js"));n();n();K();n();var U_=T(require("bignumber.js"));n();n();n();n();var H_=T(require("bignumber.js"));R();n();n();n();n();E();n();var j_=require("@multiversx/sdk-web-wallet-provider");I();n();var V_=T(require("qs"));n();$();Re();n();Re();var kk={search:he()?window.location.search:"",removeParams:[]};n();n();n();H();n();K();n();n();H();n();var z_=T(require("linkifyjs"));n();I();n();var K_=T(require("bignumber.js"));n();R();n();n();E();n();E();n();n();n();K();n();K();n();var X_=T(require("bignumber.js"));I();K();n();K();n();var cs=require("react");R();n();n();K();n();n();var Y_=require("@multiversx/sdk-core/out"),Z_=T(require("bignumber.js"));K();n();R();n();n();R();var T1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var ps=require("react");R();H();n();var Q_=require("react");K();var A1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];to();n();var Mn=e=>e.transactions,ao=x(Mn,e=>e.signedTransactions),eu=x(Mn,e=>e.signTransactionsError),ms=x(Mn,e=>e.signTransactionsCancelMessage),On=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),ds=x(ao,On(eo)),ls=x(ao,On(oo)),_s=x(ao,On(no)),ou=x(ao,On(Ct)),us=x(Mn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>En(t)))||[]})}),nu=x(ao,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var au=T(require("axios"));Xe();n();I();n();var iu=T(require("axios"));n();var cu=T(require("axios"));n();n();var pu=T(require("axios"));n();var mu=T(require("axios"));n();n();n();n();n();var fs=require("@lifeomic/axios-fetch"),Kt=T(require("axios")),Xt=(0,fs.buildAxiosFetch)(Kt.default),Yt=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function du(e,o,t){return g(this,null,function*(){try{let s=yield Xt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Yt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function lu(e,o){return g(this,null,function*(){try{let t=yield Xt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Yt(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function _u(e,o,t){return g(this,null,function*(){try{let s=yield Xt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Yt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var Be=Kt.default.create();Be.get=lu;Be.post=du;Be.patch=_u;var hs=e=>Be.get(e).then(o=>o.data);n();var Do=e=>{let o=e!=null?e:Ot(v.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var uu=T(require("axios"));n();var Ts=T(require("swr"));var io=({apiEndpoint:e})=>{let o=Do(),t=e?`${o}/${e}`:null;return(0,Ts.default)(t,hs)};n();n();n();var Ro=e=>io({apiEndpoint:e?`${Fe}/${e}?withGuardianInfo=true`:null});n();n();Xe();n();var hu=T(require("axios"));n();var xu=T(require("axios"));n();Xe();n();Xe();n();n();n();n();var Su=T(require("axios"));n();n();var Fn=T(require("react")),bu=e=>Fn.createElement("svg",u({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),Fn.createElement("g",null,Fn.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),ys=bu;I();n();var vs=T(require("react"));n();var Mo=T(require("react"));n();Re();var Ss=()=>!he();var vu=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(Jt(),Zt))}),Iu=()=>(Jt(),q(Zt)).default,Qt=Ss();function ws({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=Mo.default.useState(Qt?void 0:Iu()),[p,m]=Mo.default.useState(Qt||t==null?void 0:t()),d=()=>g(this,null,function*(){(e?e():vu()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,Mo.useEffect)(()=>{Qt&&d()},[]),{globalStyles:s,styles:p}}function B(e,o){return t=>{let{globalStyles:s,styles:c}=ws({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return vs.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();var Is=e=>e?e.lastIndexOf(".elrond")>0?e.substring(0,e.lastIndexOf(".")):e:void 0;n();n();var so=T(require("react")),Bn=require("@fortawesome/free-solid-svg-icons"),nr=require("@fortawesome/react-fontawesome"),Ls=T(require("classnames"));n();Re();function Au(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(s){console.error("Fallback: Oops, unable to copy",s)}return document==null||document.body.removeChild(t),o}function As(e){return g(this,null,function*(){if(!he())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(s){return console.error("Async: Could not copy text: ",s),!1}):o=Au(e),o})}var Lu=({text:e,className:o="dapp-copy-button",copyIcon:t=Bn.faCopy,successIcon:s=Bn.faCheck,styles:c})=>{let[p,m]=(0,so.useState)({default:!0,success:!1});return so.default.createElement("a",{href:"/#",onClick:_=>g(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let f=e&&e.trim();m({default:!1,success:yield As(f)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,Ls.default)(c==null?void 0:c.copy,o)},p.default||!p.success?so.default.createElement(nr.FontAwesomeIcon,{icon:t}):so.default.createElement(nr.FontAwesomeIcon,{icon:s}))},Es=B(Lu,{ssrStyles:()=>Promise.resolve().then(()=>(or(),er)),clientStyles:()=>(or(),q(er)).default});n();n();var ir=T(require("react")),Ns=require("@fortawesome/free-solid-svg-icons"),Ds=require("@fortawesome/react-fontawesome"),Rs=T(require("classnames"));n();n();var Ps=require("react"),co=require("react-redux");var Eu={store:v,subscription:Ji},tr=(0,Ps.createContext)(Eu),tN=(0,co.createStoreHook)(tr),V=(0,co.createDispatchHook)(tr),A=(0,co.createSelectorHook)(tr);var Un=()=>A(ne);var Cu=_=>{var f=_,{page:e,text:o,className:t="dapp-explorer-link",children:s,globalStyles:c,customExplorerIcon:p,styles:m}=f,d=_e(f,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:b}}=Un(),S=o!=null?o:ir.default.createElement(Ds.FontAwesomeIcon,{icon:p!=null?p:Ns.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),L=$t({explorerAddress:String(b),to:e});return ir.default.createElement("a",u({href:L,target:"_blank",className:(0,Rs.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},d),s!=null?s:S)},Ms=B(Cu,{ssrStyles:()=>Promise.resolve().then(()=>(ar(),rr)),clientStyles:()=>(ar(),q(rr)).default});n();n();var Wn=T(require("react")),pr=T(require("classnames"));var Du=({className:e,styles:o})=>Wn.default.createElement("div",{className:(0,pr.default)(o==null?void 0:o.loadingDots,e)},Array.from({length:3}).map((t,s)=>Wn.default.createElement("span",{key:`loading-dot-${s}`,className:(0,pr.default)(o==null?void 0:o.loadingDot,o==null?void 0:o[`loadingDot-${s}`])})),Wn.default.createElement("span",null,"Loading...")),Fs=B(Du,{ssrStyles:()=>Promise.resolve().then(()=>(cr(),sr)),clientStyles:()=>(cr(),q(sr)).default});n();n();var O=T(require("react")),Im=T(require("classnames"));I();n();n();var Bs=require("react");n();k();n();n();n();n();n();n();n();n();var Mu=require("@multiversx/sdk-extension-provider"),Ou=require("@multiversx/sdk-hw-provider"),Fu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Bu=require("@multiversx/sdk-opera-provider"),Uu=require("@multiversx/sdk-passkey-provider/out"),Wu=require("@multiversx/sdk-web-wallet-provider");I();we();n();var po=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Us=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");E();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,Gn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Ws=new Gn;k();n();n();E();n();n();n();H();n();to();n();k();E();n();n();n();n();H();n();N();R();n();k();n();var $s=require("@multiversx/sdk-core");R();$();n();to();n();k();E();n();k();R();n();n();n();R();n();Yo();n();n();n();n();var $u=T(require("swr"));n();n();n();n();var Vs=require("react");n();n();var Vu=require("react"),qu=require("@multiversx/sdk-web-wallet-provider"),ju=require("@multiversx/sdk-web-wallet-provider"),zu=T(require("qs"));I();k();E();lt();H();var $2=M();n();var gc=require("react"),gr=require("@multiversx/sdk-core");I();wt();n();n();n();n();n();n();n();n();n();n();var Xu=require("@multiversx/sdk-opera-provider");n();var Yu=require("@multiversx/sdk-extension-provider");n();we();n();n();n();n();var Sg=T(dc());n();var Ig=require("@multiversx/sdk-native-auth-client");n();var uc=T(require("axios"));n();n();n();function lc(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var _c=(e,o,t,s=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield lc(o.delay)),yield _c(e,o,t,s+1)):null}}),_r=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield _c(e,o,t)});var bg=4;var D3=_r((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield uc.default.get(`${e}/${Ht}?from=${bg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();en();n();n();H();var $3={origin:M().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var kg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Lg=require("@multiversx/sdk-passkey-provider/out");I();H();n();n();n();var Rg=require("react"),Mg=require("@multiversx/sdk-hw-provider");n();N();R();n();wo();Je();Ze();$();n();n();var rm=require("react"),am=require("@multiversx/sdk-core"),wT=require("@multiversx/sdk-extension-provider"),vT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),IT=require("@multiversx/sdk-passkey-provider/out"),AT=T(em());I();n();n();n();n();n();n();n();n();n();n();var Ho=T(require("react"));var EO=(0,Ho.createContext)({}),PO=v.getState();n();var nm=T(require("react"));n();var xr=T(require("react")),iT=T(require("axios"));n();n();we();n();n();var lT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),_T=require("@multiversx/sdk-webview-provider/out/WebviewProvider");N();n();N();k();R();n();n();k();n();$();n();k();R();n();n();var cT=require("@multiversx/sdk-core"),pT=T(require("bignumber.js"));I();n();var mT=T(require("bignumber.js"));I();k();E();$();H();n();var tm=require("react"),hT=require("@multiversx/sdk-extension-provider"),TT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),xT=require("@multiversx/sdk-passkey-provider/out");we();k();n();k();R();wo();H();n();pe();k();n();n();var LT=require("react");n();n();E();to();n();var Xn=require("react"),im=(e,o)=>{let[t,s]=(0,Xn.useState)(e);return(0,Xn.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var PT=require("react"),CT=require("@multiversx/sdk-extension-provider");pe();N();E();n();Te();$();$();n();n();we();R();n();var ET=require("react"),sm=require("@multiversx/sdk-core");k();n();var NT=require("react"),DT=require("@multiversx/sdk-opera-provider");pe();N();E();Te();$();H();n();var RT=require("react");ut();pe();we();N();k();E();Te();H();n();var UT=require("react");pe();k();n();n();gt();n();n();var MT=T(require("platform"));Re();n();n();n();n();n();n();n();xo();E();n();n();var OT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();wo();Je();n();n();n();k();n();n();var FT=T(require("axios"));$();n();n();var BT=T(qn());xo();var cm,pm,mm,yG=(mm=(pm=(cm=Ne.safeWindow)==null?void 0:cm.location)==null?void 0:pm.origin)==null?void 0:mm.includes("localhost");n();H();n();n();var KT=require("react");I();n();n();I();n();n();n();var WT=T(require("bignumber.js"));n();n();n();var ke=T(require("react")),Tm=require("react"),xm=require("react"),vr=T(require("classnames")),ym=require("react-dom");I();n();var lm=T(require("react")),_m=T(require("classnames"));var HT=({className:e,children:o,styles:t})=>lm.default.createElement("div",{className:(0,_m.default)(t==null?void 0:t.dappModalBody,e)},o),yr=B(HT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),q(Se)).default});n();var Sr=T(require("react")),um=T(require("classnames"));var $T=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?Sr.default.createElement("div",{className:(0,um.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Sr.default.createElement("div",null,s)):null,br=B($T,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),q(Se)).default});n();var fo=T(require("react")),gm=require("@fortawesome/free-solid-svg-icons"),fm=require("@fortawesome/react-fontawesome"),Vo=T(require("classnames"));var VT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?t?fo.default.createElement("div",{className:(0,Vo.default)(_==null?void 0:_.dappModalHeader,s)},t):fo.default.createElement("div",{className:(0,Vo.default)(_==null?void 0:_.dappModalHeader,s)},fo.default.createElement("div",{className:(0,Vo.default)(_==null?void 0:_.dappModalHeaderText,p)},o),fo.default.createElement("button",{onClick:m,className:(0,Vo.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},fo.default.createElement(fm.FontAwesomeIcon,{size:"lg",icon:gm.faTimes}))):null,wr=B(VT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),q(Se)).default});var qT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},jT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=qT,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:f})=>{let[b,S]=(0,Tm.useState)(!1);if((0,xm.useEffect)(()=>{S(!0)},[]),!_)return null;let{showHeader:L,showFooter:P,headerText:W,footerText:re,modalDialogClassName:$e="dapp-modal-dialog",modalContentClassName:ho="dapp-modal-dialog-content",modalHeaderClassName:Yn="dapp-modal-dialog-header",modalHeaderTextClassName:Zn="dapp-modal-dialog-header-text",modalCloseButtonClassName:oe="dapp-modal-dialog-close-button",modalBodyClassName:Cm="dapp-modal-dialog-content-body",modalFooterClassName:Nm="dapp-modal-dialog-footer",customModalHeader:Dm,customModalFooter:Rm}=c,Mm=Om=>{Om.key==="Escape"&&s&&(m==null||m())};return ke.default.createElement(ke.default.Fragment,null,b&&(0,ym.createPortal)(ke.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,vr.default)($e,f==null?void 0:f.dappModal,t),"data-testid":e,onKeyDown:Mm},ke.default.createElement("div",{className:(0,vr.default)(f==null?void 0:f.dappModalContent,ho)},ke.default.createElement(wr,{visible:L,headerText:W,customHeader:Dm,className:Yn,headerTextClassName:Zn,closeButtonClassName:oe,onHide:m}),ke.default.createElement(yr,{className:Cm},o),ke.default.createElement(br,{visible:P,customFooter:Rm,footerText:re,className:Nm}))),d!=null?d:document==null?void 0:document.body))},zT=B(jT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),q(Se)).default});n();n();var Sm=require("react");n();n();var bm=require("react"),YT=require("@multiversx/sdk-hw-provider");pe();N();k();E();Te();n();var XT=require("react");n();n();var Ir=require("react");N();k();E();Te();H();n();var JT=require("react"),QT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();N();E();Te();$();$();n();var ex=require("react"),ox=require("@multiversx/sdk-passkey-provider/out");pe();N();E();Te();$();$();n();n();var wm=require("react");n();var rx=require("react");n();var Ar=require("react"),tx=require("socket.io-client");k();n();n();n();var ax=require("react");R();n();n();n();var ix=T(require("swr"));var cx=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,O.useState)(0),[d,_]=(0,O.useState)(!1),f=(0,O.useRef)(document==null?void 0:document.createElement("span")),b=(0,O.useRef)(document==null?void 0:document.createElement("span")),S=im(p,300),L=()=>{if(f.current&&b.current){let re=b.current.offsetWidth-f.current.offsetWidth;_(re>1)}},P=()=>{m(p+1)};return(0,O.useEffect)(()=>(window==null||window.addEventListener("resize",P),()=>{window==null||window.removeEventListener("resize",P)})),(0,O.useEffect)(()=>{L()},[S]),O.default.createElement("span",{ref:f,className:(0,Im.default)(c==null?void 0:c.trim,s,o,{overflow:d}),"data-testid":t},O.default.createElement("span",{ref:b,className:c==null?void 0:c.hiddenTextRef},e),d?O.default.createElement(O.default.Fragment,null,O.default.createElement("span",{className:c==null?void 0:c.left},O.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),O.default.createElement("span",{className:c==null?void 0:c.ellipsis},va),O.default.createElement("span",{className:c==null?void 0:c.right},O.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):O.default.createElement("span",null,e))},Am=B(cx,{ssrStyles:()=>Promise.resolve().then(()=>(Lr(),kr)),clientStyles:()=>(Lr(),q(kr)).default});var mx=({amount:e,label:o,receiver:t,customExplorerIcon:s,receiverUsername:c,customCopyIcon:p,scamReport:m,styles:d})=>{let _=Gt(t),f=Boolean(_||c),b=new Pm.default(e).isZero(),{data:S,isLoading:L,error:P}=Ro(f?null:t),W=c!=null?c:S==null?void 0:S.username,re=W!=null?W:t,$e=Boolean(t&&Boolean(W)&&!P),ho=b?"To interact with":"To";return U.default.createElement("div",{className:d==null?void 0:d.receiver},U.default.createElement("div",{className:d==null?void 0:d.receiverLabelWrapper},U.default.createElement("div",{className:d==null?void 0:d.receiverLabel},o!=null?o:ho),m&&U.default.createElement("div",{className:d==null?void 0:d.receiverLabelScam},U.default.createElement("span",{className:d==null?void 0:d.receiverLabelScamText,"data-testid":"confirmScamReport"},m),U.default.createElement(Em.FontAwesomeIcon,{icon:Lm.faExclamationTriangle,className:d==null?void 0:d.receiverLabelScamIcon}))),L?U.default.createElement("div",{className:d==null?void 0:d.receiverWrapper},U.default.createElement(Fs,{className:d==null?void 0:d.receiverLoading})):U.default.createElement("div",{className:d==null?void 0:d.receiverWrapper,"data-testid":"confirmReceiver"},U.default.createElement(Am,{text:t,className:d==null?void 0:d.receiverTrim}),$e&&!_&&U.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",U.default.createElement(ys,{className:d==null?void 0:d.receiverDataIcon}),U.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},Is(re)),")"),_&&U.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",U.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},"Smart Contract"),")"),U.default.createElement(Es,{text:t,className:d==null?void 0:d.receiverCopy,copyIcon:p}),U.default.createElement(Ms,{page:`/${Fe}/${t}`,className:d==null?void 0:d.receiverExternal,customExplorerIcon:s})))},dx=B(mx,{ssrStyles:()=>Promise.resolve().then(()=>(Pr(),Er)),clientStyles:()=>(Pr(),q(Er)).default});0&&(module.exports={ConfirmReceiver});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=ConfirmReceiver.js.map
