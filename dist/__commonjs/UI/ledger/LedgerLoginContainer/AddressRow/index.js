"use strict";var lm=Object.create;var vo=Object.defineProperty,_m=Object.defineProperties,um=Object.getOwnPropertyDescriptor,gm=Object.getOwnPropertyDescriptors,fm=Object.getOwnPropertyNames,zo=Object.getOwnPropertySymbols,hm=Object.getPrototypeOf,Zn=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable;var vr=(e,o,t)=>o in e?vo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Zn.call(o,t)&&vr(e,t,o[t]);if(zo)for(var t of zo(o))Ar.call(o,t)&&vr(e,t,o[t]);return e},w=(e,o)=>_m(e,gm(o));var Me=(e,o)=>{var t={};for(var s in e)Zn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&zo)for(var s of zo(e))o.indexOf(s)<0&&Ar.call(e,s)&&(t[s]=e[s]);return t};var f=(e,o)=>()=>(e&&(o=e(e=0)),o);var x=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ee=(e,o)=>{for(var t in o)vo(e,t,{get:o[t],enumerable:!0})},Ir=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of fm(o))!Zn.call(e,c)&&c!==t&&vo(e,c,{get:()=>o[c],enumerable:!(s=um(o,c))||s.enumerable});return e};var T=(e,o,t)=>(t=e!=null?lm(hm(e)):{},Ir(o||!e||!e.__esModule?vo(t,"default",{value:e,enumerable:!0}):t,e)),X=e=>Ir(vo({},"__esModule",{value:!0}),e);var h=(e,o,t)=>new Promise((s,c)=>{var p=d=>{try{_(t.next(d))}catch(g){c(g)}},m=d=>{try{_(t.throw(d))}catch(g){c(g)}},_=d=>d.done?s(d.value):Promise.resolve(d.value).then(p,m);_((t=t.apply(e,o)).next())});var Er=x(Ko=>{"use strict";n();Ko.byteLength=ym;Ko.toByteArray=bm;Ko.fromByteArray=vm;var ae=[],oe=[],Tm=typeof Uint8Array!="undefined"?Uint8Array:Array,Jn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Oe=0,kr=Jn.length;Oe<kr;++Oe)ae[Oe]=Jn[Oe],oe[Jn.charCodeAt(Oe)]=Oe;var Oe,kr;oe["-".charCodeAt(0)]=62;oe["_".charCodeAt(0)]=63;function Lr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function ym(e){var o=Lr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function xm(e,o,t){return(o+t)*3/4-t}function bm(e){var o,t=Lr(e),s=t[0],c=t[1],p=new Tm(xm(e,s,c)),m=0,_=c>0?s-4:s,d;for(d=0;d<_;d+=4)o=oe[e.charCodeAt(d)]<<18|oe[e.charCodeAt(d+1)]<<12|oe[e.charCodeAt(d+2)]<<6|oe[e.charCodeAt(d+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=oe[e.charCodeAt(d)]<<2|oe[e.charCodeAt(d+1)]>>4,p[m++]=o&255),c===1&&(o=oe[e.charCodeAt(d)]<<10|oe[e.charCodeAt(d+1)]<<4|oe[e.charCodeAt(d+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Sm(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function wm(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Sm(s));return c.join("")}function vm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,_=t-s;m<_;m+=p)c.push(wm(e,m,m+p>_?_:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var Pr=x(Qn=>{n();Qn.read=function(e,o,t,s,c){var p,m,_=c*8-s-1,d=(1<<_)-1,g=d>>1,b=-7,S=t?c-1:0,I=t?-1:1,L=e[o+S];for(S+=I,p=L&(1<<-b)-1,L>>=-b,b+=_;b>0;p=p*256+e[o+S],S+=I,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+S],S+=I,b-=8);if(p===0)p=1-g;else{if(p===d)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(L?-1:1)*m*Math.pow(2,p-s)};Qn.write=function(e,o,t,s,c,p){var m,_,d,g=p*8-c-1,b=(1<<g)-1,S=b>>1,I=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=s?0:p-1,B=s?1:-1,V=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(d=Math.pow(2,-m))<1&&(m--,d*=2),m+S>=1?o+=I/d:o+=I*Math.pow(2,1-S),o*d>=2&&(m++,d/=2),m+S>=b?(_=0,m=b):m+S>=1?(_=(o*d-1)*Math.pow(2,c),m=m+S):(_=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+L]=_&255,L+=B,_/=256,c-=8);for(m=m<<c|_,g+=c;g>0;e[t+L]=m&255,L+=B,m/=256,g-=8);e[t+L-B]|=V*128}});var $r=x(Qe=>{"use strict";n();var et=Er(),Je=Pr(),Cr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Qe.Buffer=l;Qe.SlowBuffer=Pm;Qe.INSPECT_MAX_BYTES=50;var Xo=2147483647;Qe.kMaxLength=Xo;l.TYPED_ARRAY_SUPPORT=Am();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Am(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function he(e){if(e>Xo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return rt(e)}return Dr(e,o,t)}l.poolSize=8192;function Dr(e,o,t){if(typeof e=="string")return km(e,o);if(ArrayBuffer.isView(e))return Lm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return nt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return l.from(s,o,t);var c=Em(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return Dr(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Mr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Im(e,o,t){return Mr(e),e<=0?he(e):o!==void 0?typeof t=="string"?he(e).fill(o,t):he(e).fill(o):he(e)}l.alloc=function(e,o,t){return Im(e,o,t)};function rt(e){return Mr(e),he(e<0?0:at(e)|0)}l.allocUnsafe=function(e){return rt(e)};l.allocUnsafeSlow=function(e){return rt(e)};function km(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Or(e,o)|0,s=he(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function ot(e){for(var o=e.length<0?0:at(e.length)|0,t=he(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Lm(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return nt(o.buffer,o.byteOffset,o.byteLength)}return ot(e)}function nt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,l.prototype),s}function Em(e){if(l.isBuffer(e)){var o=at(e.length)|0,t=he(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||it(e.length)?he(0):ot(e);if(e.type==="Buffer"&&Array.isArray(e.data))return ot(e.data)}function at(e){if(e>=Xo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Xo.toString(16)+" bytes");return e|0}function Pm(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(ie(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=l.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?l.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(l.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Or(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return tt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Hr(e).length;default:if(c)return s?-1:tt(e).length;o=(""+o).toLowerCase(),c=!0}}l.byteLength=Or;function Cm(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Gm(this,o,t);case"utf8":case"utf-8":return Br(this,o,t);case"ascii":return Um(this,o,t);case"latin1":case"binary":return Wm(this,o,t);case"base64":return Fm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Hm(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}l.prototype._isBuffer=!0;function Fe(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Fe(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Fe(this,t,t+3),Fe(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Fe(this,t,t+7),Fe(this,t+1,t+6),Fe(this,t+2,t+5),Fe(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Br(this,0,o):Cm.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=Qe.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Cr&&(l.prototype[Cr]=l.prototype.inspect);l.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=s-t,d=Math.min(m,_),g=this.slice(c,p),b=o.slice(t,s),S=0;S<d;++S)if(g[S]!==b[S]){m=g[S],_=b[S];break}return m<_?-1:_<m?1:0};function Fr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,it(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,s)),l.isBuffer(o))return o.length===0?-1:Nr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Nr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Nr(e,o,t,s,c){var p=1,m=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function d(L,B){return p===1?L[B]:L.readUInt16BE(B*p)}var g;if(c){var b=-1;for(g=t;g<m;g++)if(d(e,g)===d(o,b===-1?0:g-b)){if(b===-1&&(b=g),g-b+1===_)return b*p}else b!==-1&&(g-=g-b),b=-1}else for(t+_>m&&(t=m-_),g=t;g>=0;g--){for(var S=!0,I=0;I<_;I++)if(d(e,g+I)!==d(o,I)){S=!1;break}if(S)return g}return-1}l.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};l.prototype.indexOf=function(o,t,s){return Fr(this,o,t,s,!0)};l.prototype.lastIndexOf=function(o,t,s){return Fr(this,o,t,s,!1)};function Nm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var _=parseInt(o.substr(m*2,2),16);if(it(_))return m;e[t+m]=_}return m}function Rm(e,o,t,s){return Yo(tt(o,e.length-t),e,t,s)}function Dm(e,o,t,s){return Yo(qm(o),e,t,s)}function Mm(e,o,t,s){return Yo(Hr(o),e,t,s)}function Om(e,o,t,s){return Yo(jm(o,e.length-t),e,t,s)}l.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Nm(this,o,t,s);case"utf8":case"utf-8":return Rm(this,o,t,s);case"ascii":case"latin1":case"binary":return Dm(this,o,t,s);case"base64":return Mm(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Om(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Fm(e,o,t){return o===0&&t===e.length?et.fromByteArray(e):et.fromByteArray(e.slice(o,t))}function Br(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var d,g,b,S;switch(_){case 1:p<128&&(m=p);break;case 2:d=e[c+1],(d&192)===128&&(S=(p&31)<<6|d&63,S>127&&(m=S));break;case 3:d=e[c+1],g=e[c+2],(d&192)===128&&(g&192)===128&&(S=(p&15)<<12|(d&63)<<6|g&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:d=e[c+1],g=e[c+2],b=e[c+3],(d&192)===128&&(g&192)===128&&(b&192)===128&&(S=(p&15)<<18|(d&63)<<12|(g&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=_}return Bm(s)}var Rr=4096;function Bm(e){var o=e.length;if(o<=Rr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Rr));return t}function Um(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Wm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Gm(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=zm[e[p]];return c}function Hm(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}l.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,l.prototype),c};function U(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};l.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||U(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||U(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||U(o,4,this.length),Je.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||U(o,4,this.length),Je.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||U(o,8,this.length),Je.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||U(o,8,this.length),Je.read(this,o,!1,52,8)};function q(e,o,t,s,c,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=1,_=0;for(this[t]=o&255;++_<s&&(m*=256);)this[t+_]=o/m&255;return t+s};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=s-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+s};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=0,_=1,d=0;for(this[t]=o&255;++m<s&&(_*=256);)o<0&&d===0&&this[t+m-1]!==0&&(d=1),this[t+m]=(o/_>>0)-d&255;return t+s};l.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=s-1,_=1,d=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&d===0&&this[t+m+1]!==0&&(d=1),this[t+m]=(o/_>>0)-d&255;return t+s};l.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Ur(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Wr(e,o,t,s,c){return o=+o,t=t>>>0,c||Ur(e,o,t,4,34028234663852886e22,-34028234663852886e22),Je.write(e,o,t,s,23,4),t+4}l.prototype.writeFloatLE=function(o,t,s){return Wr(this,o,t,!0,s)};l.prototype.writeFloatBE=function(o,t,s){return Wr(this,o,t,!1,s)};function Gr(e,o,t,s,c){return o=+o,t=t>>>0,c||Ur(e,o,t,8,17976931348623157e292,-17976931348623157e292),Je.write(e,o,t,s,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,s){return Gr(this,o,t,!0,s)};l.prototype.writeDoubleBE=function(o,t,s){return Gr(this,o,t,!1,s)};l.prototype.copy=function(o,t,s,c){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};l.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var _=l.isBuffer(o)?o:l.from(o,c),d=_.length;if(d===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=_[m%d]}return this};var $m=/[^+/0-9A-Za-z-_]/g;function Vm(e){if(e=e.split("=")[0],e=e.trim().replace($m,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function tt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function qm(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function jm(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Hr(e){return et.toByteArray(Vm(e))}function Yo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function it(e){return e!==e}var zm=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Kr=x((OT,zr)=>{n();var D=zr.exports={},se,ce;function st(){throw new Error("setTimeout has not been defined")}function ct(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=st}catch(e){se=st}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=ct}catch(e){ce=ct}})();function Vr(e){if(se===setTimeout)return setTimeout(e,0);if((se===st||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function Km(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===ct||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var Te=[],eo=!1,Be,Zo=-1;function Xm(){!eo||!Be||(eo=!1,Be.length?Te=Be.concat(Te):Zo=-1,Te.length&&qr())}function qr(){if(!eo){var e=Vr(Xm);eo=!0;for(var o=Te.length;o;){for(Be=Te,Te=[];++Zo<o;)Be&&Be[Zo].run();Zo=-1,o=Te.length}Be=null,eo=!1,Km(e)}}D.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];Te.push(new jr(e,o)),Te.length===1&&!eo&&Vr(qr)};function jr(e,o){this.fun=e,this.array=o}jr.prototype.run=function(){this.fun.apply(null,this.array)};D.title="browser";D.browser=!0;D.env={};D.argv=[];D.version="";D.versions={};function ye(){}D.on=ye;D.addListener=ye;D.once=ye;D.off=ye;D.removeListener=ye;D.removeAllListeners=ye;D.emit=ye;D.prependListener=ye;D.prependOnceListener=ye;D.listeners=function(e){return[]};D.binding=function(e){throw new Error("process.binding is not supported")};D.cwd=function(){return"/"};D.chdir=function(e){throw new Error("process.chdir is not supported")};D.umask=function(){return 0}});var r,i,Ym,a,n=f(()=>{r=T($r()),i=T(Kr()),Ym=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Ym});var Ue,oo=f(()=>{"use strict";n();Ue=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var pt={};ee(pt,{css:()=>Yr,default:()=>Zm});var Yr,Zm,mt=f(()=>{"use strict";n();Yr=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yr));Zm={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Qr=f(()=>{"use strict";n()});var pe=f(()=>{"use strict";n()});var ea=f(()=>{"use strict";n()});var lt,oa=f(()=>{"use strict";n();lt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(lt||{})});var na=f(()=>{"use strict";n()});var _t=f(()=>{"use strict";n()});var ta=f(()=>{"use strict";n()});var ut=f(()=>{"use strict";n()});var ra=f(()=>{"use strict";n()});var aa=f(()=>{"use strict";n()});var We,no,Ie=f(()=>{"use strict";n();We=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),no=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var ia,ny,sa,ty,P=f(()=>{"use strict";n();Ie();ia=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ia||{}),ny=u(u({},no.WindowProviderRequestEnums),ia),sa=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(sa||{}),ty=u(u({},no.WindowProviderResponseEnums),sa)});var ca=f(()=>{"use strict";n()});var pa=f(()=>{"use strict";n()});var z=f(()=>{"use strict";n()});var ma=f(()=>{"use strict";n()});var da=f(()=>{"use strict";n()});var la=f(()=>{"use strict";n()});var M=f(()=>{"use strict";n();ut();ra();aa();P();ca();pa();z();ma();da();la()});var to,_a,xy,ua,by,ga,Sy,wy,ed,ro=f(()=>{"use strict";n();M();to={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:_a,egldLabel:xy}=to["devnet"],{chainId:ua,egldLabel:by}=to["testnet"],{chainId:ga,egldLabel:Sy}=to["mainnet"],wy={["devnet"]:_a,["testnet"]:ua,["mainnet"]:ga},ed={[_a]:"devnet",[ua]:"testnet",[ga]:"mainnet"}});var Jo=f(()=>{"use strict";n()});var me,fa=f(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-provider")});var Ge,Io=f(()=>{"use strict";n();Ge=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ha,Ta,gt,Ey,Py,ft=f(()=>{"use strict";n();Io();gt=String((Ta=(ha=Ge.safeWindow)==null?void 0:ha.navigator)==null?void 0:Ta.userAgent),Ey=/^((?!chrome|android).)*safari/i.test(gt),Py=/firefox/i.test(gt)&&/windows/i.test(gt)});var Qo,en,Y,He,ya,on,xa,de,ba,A=f(()=>{"use strict";n();Qr();pe();ea();oa();na();_t();ta();ro();Jo();fa();ft();Qo=5e4,en=1e9,Y=18,He=4,ya=1,on="logout",xa="login",de="0",ba="..."});var ko,nn=f(()=>{"use strict";n();ko=()=>Date.now()/1e3});var Sa=f(()=>{"use strict";n()});var wa=f(()=>{"use strict";n()});var ht=f(()=>{"use strict";n();nn();Sa();wa()});var Tt={};ee(Tt,{clear:()=>rd,getItem:()=>nd,localStorageKeys:()=>ke,removeItem:()=>td,setItem:()=>od});var ke,tn,od,nd,td,rd,ao=f(()=>{"use strict";n();ht();ke={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},tn=typeof localStorage!="undefined",od=({key:e,data:o,expires:t})=>{!tn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},nd=e=>{if(!tn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:ko()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},td=e=>{!tn||localStorage.removeItem(String(e))},rd=()=>{!tn||localStorage.clear()}});var yt={};ee(yt,{clear:()=>ka,getItem:()=>Aa,removeItem:()=>Ia,setItem:()=>va,storage:()=>ad});var va,Aa,Ia,ka,ad,La=f(()=>{"use strict";n();va=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Aa=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ia=e=>sessionStorage.removeItem(String(e)),ka=()=>sessionStorage.clear(),ad={setItem:va,getItem:Aa,removeItem:Ia,clear:ka}});var $e,io=f(()=>{"use strict";n();ao();La();$e={session:yt,local:Tt}});var xt,N,Z,R=f(()=>{"use strict";n();xt=require("@reduxjs/toolkit");A();N=(0,xt.createAction)(on),Z=(0,xt.createAction)(xa,e=>({payload:e}))});var St,Ea,Pa,rn,bt,Ca,an,id,wt,sx,sd,cd,cx,px,mx,pd,md,sn,cn=f(()=>{"use strict";n();St=require("@multiversx/sdk-core"),Ea=require("@reduxjs/toolkit"),Pa=require("redux-persist");A();io();ao();R();rn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:de},bt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":rn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ca=(0,Ea.createSlice)({name:"accountInfoSlice",initialState:bt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new St.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:rn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(N,()=>($e.local.removeItem(ke.loginExpiresAt),bt)),e.addCase(Z,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new St.Address(s).hex()}),e.addCase(Pa.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=s;o.address=c,o.shard=p;let d=m&&c in m;o.accounts=d?m:bt.accounts,o.publicKey=_})}}),{setAccount:an,setAddress:id,setAccountNonce:wt,setAccountShard:sx,setLedgerAccount:sd,updateLedgerAccount:cd,setWalletConnectAccount:cx,setIsAccountLoading:px,setAccountLoadingError:mx,setWebsocketEvent:pd,setWebsocketBatchEvent:md}=Ca.actions,sn=Ca.reducer});function Lo(){return new Date().setHours(new Date().getHours()+24)}function Eo(e){$e.local.setItem({key:ke.loginExpiresAt,data:e,expires:e})}var vt=f(()=>{"use strict";n();io();ao()});var Ra,Na,Da,xx,dd,ld,Ma,bx,_d,Oa,Sx,wx,vx,pn,mn=f(()=>{"use strict";n();Ra=require("@reduxjs/toolkit");vt();P();R();Na={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Da=(0,Ra.createSlice)({name:"loginInfoSlice",initialState:Na,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(N,()=>Na),e.addCase(Z,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Eo(Lo())})}}),{setLoginMethod:xx,setWalletConnectLogin:dd,setLedgerLogin:ld,setTokenLogin:Ma,setTokenLoginSignature:bx,setWalletLogin:_d,invalidateLoginSession:Oa,setLogoutRoute:Sx,setIsWalletConnectV2Initialized:wx,setWebviewLogin:vx}=Da.actions,pn=Da.reducer});var Ba,Fa,Ua,Lx,ud,Ex,gd,dn,ln=f(()=>{"use strict";n();Ba=require("@reduxjs/toolkit");R();Fa={},Ua=(0,Ba.createSlice)({name:"modalsSlice",initialState:Fa,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(N,()=>Fa)}}),{setTxSubmittedModal:Lx,setNotificationModal:ud,clearTxSubmittedModal:Ex,clearNotificationModal:gd}=Ua.actions,dn=Ua.reducer});var O,G=f(()=>{"use strict";n();oo();O=()=>{if(!Ue())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Wa=f(()=>{"use strict";n();G()});var Ga=f(()=>{"use strict";n();H()});var Ha=f(()=>{"use strict";n();Io()});var H=f(()=>{"use strict";n();Wa();Ga();G();Ha()});var Po=f(()=>{"use strict";n();H()});var Va=f(()=>{"use strict";n();Po()});function qa(e){return e[Math.floor(Math.random()*e.length)]}var ja=f(()=>{"use strict";n()});var At=f(()=>{"use strict";n();_t()});var xe=f(()=>{"use strict";n();Va();ja();At()});var za,Ka,Xa,It,hd,Ya,sb,cb,Td,_n,un=f(()=>{"use strict";n();za=require("@reduxjs/toolkit"),Ka=T(require("lodash.omit")),Xa=require("redux-persist");Jo();R();xe();It={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},hd={network:It},Ya=(0,za.createSlice)({name:"appConfig",initialState:hd,reducers:{initializeNetworkConfig:(e,o)=>{let t=qa(o.payload.walletConnectV2RelayAddresses),s=(0,Ka.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(N,o=>{o.network.customWalletAddress=void 0}),e.addCase(Xa.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:sb,updateNetworkConfig:cb,setCustomWalletAddress:Td}=Ya.actions,_n=Ya.reducer});var Za,kt,Ja,ub,gb,fb,gn,fn=f(()=>{"use strict";n();Za=require("@reduxjs/toolkit");M();R();kt={isSigning:!1,signedSessions:{}},Ja=(0,Za.createSlice)({name:"signedMessageInfoSliceState",initialState:kt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>kt},extraReducers:e=>{e.addCase(N,()=>kt)}}),{setSignSession:ub,clearSignedMessageInfo:gb,setSignSessionState:fb}=Ja.actions,gn=Ja.reducer});var ei,oi,Qa,ni,yd,xd,wb,bd,hn,Tn=f(()=>{"use strict";n();ei=require("@reduxjs/toolkit"),oi=require("redux-persist");M();nn();R();Qa={customToasts:[],transactionToasts:[]},ni=(0,ei.createSlice)({name:"toastsSlice",initialState:Qa,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ko(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(N,()=>Qa),e.addCase(oi.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:yd,removeCustomToast:xd,addTransactionToast:wb,removeTransactionToast:bd}=ni.actions,hn=ni.reducer});var ti,Et,Pt,Ct,Sd,Lt,ri,kb,wd,Nt,yn,xn=f(()=>{"use strict";n();ti=require("@reduxjs/toolkit");R();Et="Transaction failed",Pt="Transaction successful",Ct="Processing transaction",Sd="Transaction submitted",Lt={},ri=(0,ti.createSlice)({name:"transactionsInfo",initialState:Lt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Et,successMessage:(s==null?void 0:s.successMessage)||Pt,processingMessage:(s==null?void 0:s.processingMessage)||Ct,submittedMessage:(s==null?void 0:s.submittedMessage)||Sd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Lt},extraReducers:e=>{e.addCase(N,()=>Lt)}}),{clearTransactionsInfo:kb,setTransactionsDisplayInfo:wd,clearTransactionsInfoForSessionId:Nt}=ri.actions,yn=ri.reducer});function co(e){return e!=null&&(Rd(e)||Bd(e))}function po(e){return e!=null&&(Dd(e)||Ud(e))}function mo(e){return e!=null&&(Md(e)||Wd(e))}function ai(e){return e!=null&&(Od(e)||Gd(e))}function Rt(e){return e!=null&&Fd(e)}function Rd(e){return e!=null&&vd.includes(e)}function Dd(e){return e!=null&&Ad.includes(e)}function Md(e){return e!=null&&Id.includes(e)}function Od(e){return e!=null&&kd.includes(e)}function Fd(e){return e!=null&&Ld.includes(e)}function Bd(e){return e!=null&&Ed.includes(e)}function Ud(e){return e!=null&&Pd.includes(e)}function Wd(e){return e!=null&&Cd.includes(e)}function Gd(e){return e!=null&&Nd.includes(e)}var vd,Ad,Id,kd,Ld,Ed,Pd,Cd,Nd,lo=f(()=>{"use strict";n();P();vd=["sent"],Ad=["success"],Id=["fail","cancelled","timedOut"],kd=["invalid"],Ld=["timedOut"],Ed=["pending"],Pd=["success"],Cd=["fail","invalid"],Nd=["not executed"]});var ii,si,Co,Hd,ci,pi,mi,$d,bn,Vd,qd,Ob,jd,No,Dt,Fb,Sn,wn=f(()=>{"use strict";n();ii=require("@reduxjs/toolkit"),si=require("redux-persist");P();lo();R();Co={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Hd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ci=(0,ii.createSlice)({name:"transactionsSlice",initialState:Co,reducers:{moveTransactionsToSignedState:(e,o)=>{var d,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Hd),((d=e.signedTransactions[t])==null?void 0:d.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=Co.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,b,S,I,L,B,V,re;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,d=(b=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:b.transactions;if(d!=null){e.signedTransactions[t].transactions=d.map(C=>C.hash===p?w(u(u({},m!=null?m:{}),C),{status:s,errorMessage:c,inTransit:_}):C);let De=(I=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:I.every(C=>po(C.status)),Ae=(B=(L=e.signedTransactions[t])==null?void 0:L.transactions)==null?void 0:B.some(C=>mo(C.status)),fe=(re=(V=e.signedTransactions[t])==null?void 0:V.transactions)==null?void 0:re.every(C=>ai(C.status));De&&(e.signedTransactions[t].status="success"),Ae&&(e.signedTransactions[t].status="fail"),fe&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Co.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Co.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(N,()=>Co),e.addCase(si.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((_,[d,g])=>{let b=new Date(d),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(_[d]=g),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:pi,updateSignedTransactions:mi,setTransactionsToSign:$d,clearAllTransactionsToSign:bn,clearAllSignedTransactions:Vd,clearSignedTransaction:qd,clearTransactionToSign:Ob,setSignTransactionsError:jd,setSignTransactionsCancelMessage:No,moveTransactionsToSignedState:Dt,updateSignedTransactionsCustomTransactionInformation:Fb}=ci.actions,Sn=ci.reducer});var di,Mt,li,Gb,Hb,zd,$b,vn,An=f(()=>{"use strict";n();di=require("@reduxjs/toolkit");R();Mt={},li=(0,di.createSlice)({name:"batchTransactionsSlice",initialState:Mt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Mt},extraReducers:e=>{e.addCase(N,()=>Mt)}}),{setBatchTransactions:Gb,updateBatchTransactions:Hb,clearBatchTransactions:zd,clearAllBatchTransactions:$b}=li.actions,vn=li.reducer});var ui,_i,gi,zb,fi,Ot=f(()=>{"use strict";n();ui=require("@reduxjs/toolkit");R();_i={},gi=(0,ui.createSlice)({name:"dappConfigSlice",initialState:_i,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(N,()=>_i)}}),{setDappConfig:zb}=gi.actions,fi=gi.reducer});var E=f(()=>{"use strict";n();cn();mn();ln();un();fn();Tn();xn();wn();An();Ot()});var Gt=f(()=>{"use strict";n()});var Ci,hl,Tl,qe,Rn=f(()=>{"use strict";n();Ci=require("@reduxjs/toolkit");Gt();cn();An();Ot();mn();ln();un();fn();Tn();xn();wn();hl={["account"]:sn,["dappConfig"]:fi,["loginInfo"]:pn,["modals"]:dn,["networkConfig"]:_n,["signedMessageInfo"]:gn,["toasts"]:hn,["transactionsInfo"]:yn,["transactions"]:Sn,["batchTransactions"]:vn},Tl=(e={})=>(0,Ci.combineReducers)(u(u({},hl),e)),qe=Tl});var Mi={};ee(Mi,{default:()=>Dl,sessionStorageReducers:()=>Ht});function be(e,o=[]){return{key:e,version:1,storage:Ri.default,blacklist:o}}var K,Ni,Ri,yl,Do,xl,bl,Sl,wl,vl,Al,Il,kl,Ll,El,Di,Pl,Ht,Cl,Nl,Rl,Dl,Oi=f(()=>{"use strict";n();K=require("redux-persist"),Ni=T(require("redux-persist/lib/storage")),Ri=T(require("redux-persist/lib/storage/session"));Rn();E();cn();An();mn();ln();un();fn();Tn();xn();wn();Gt();yl={persistReducersStorageType:"localStorage"},Do={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},xl=be(Do["account"]),bl=be(Do["loginInfo"]),Sl=be(Do["modals"]),wl=be(Do["networkConfig"]),vl={2:e=>w(u({},e),{networkConfig:It})};Al=be("sdk-dapp-transactionsInfo"),Il=be("sdk-dapp-transactions",["transactionsToSign"]),kl=be("sdk-dapp-batchTransactions",["batchTransactions"]),Ll=be("sdk-dapp-toasts"),El=be("sdk-dapp-signedMessageInfo"),Di={key:"sdk-dapp-store",version:2,storage:Ni.default,whitelist:Object.keys(Do),migrate:(0,K.createMigrate)(vl,{debug:!1})},Pl=w(u({},Di),{whitelist:[]}),Ht={["toasts"]:(0,K.persistReducer)(Ll,hn),["transactions"]:(0,K.persistReducer)(Il,Sn),["transactionsInfo"]:(0,K.persistReducer)(Al,yn),["batchTransactions"]:(0,K.persistReducer)(kl,vn),["signedMessageInfo"]:(0,K.persistReducer)(El,gn)},Cl=w(u({},Ht),{["account"]:(0,K.persistReducer)(xl,sn),["loginInfo"]:(0,K.persistReducer)(bl,pn),["modals"]:(0,K.persistReducer)(Sl,dn),["networkConfig"]:(0,K.persistReducer)(wl,_n)}),Nl=yl.persistReducersStorageType==="localStorage",Rl=Nl?(0,K.persistReducer)(Di,qe(Ht)):(0,K.persistReducer)(Pl,qe(Cl)),Dl=Rl});var Fi={};ee(Fi,{default:()=>Ml});var Ml,Bi=f(()=>{"use strict";n();Rn();Ml=qe()});var Ui={};ee(Ui,{default:()=>Fl});var ne,Ol,Fl,Wi=f(()=>{"use strict";n();ne=require("redux-persist"),Ol=[ne.FLUSH,ne.REHYDRATE,ne.PAUSE,ne.PERSIST,ne.PURGE,ne.REGISTER],Fl=Ol});var $i={};ee($i,{default:()=>Hi});function Hi(e){return(0,Gi.persistStore)(e)}var Gi,Vi=f(()=>{"use strict";n();Gi=require("redux-persist")});var Xt={};ee(Xt,{css:()=>ls,default:()=>I_});var ls,I_,Yt=f(()=>{"use strict";n();ls=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ls));I_={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var Ps=x((e2,Es)=>{n();var gu=typeof a=="object"&&a&&a.Object===Object&&a;Es.exports=gu});var Uo=x((o2,Cs)=>{n();var fu=Ps(),hu=typeof self=="object"&&self&&self.Object===Object&&self,Tu=fu||hu||Function("return this")();Cs.exports=Tu});var tr=x((n2,Ns)=>{n();var yu=Uo(),xu=yu.Symbol;Ns.exports=xu});var Os=x((t2,Ms)=>{n();var Rs=tr(),Ds=Object.prototype,bu=Ds.hasOwnProperty,Su=Ds.toString,Wo=Rs?Rs.toStringTag:void 0;function wu(e){var o=bu.call(e,Wo),t=e[Wo];try{e[Wo]=void 0;var s=!0}catch(p){}var c=Su.call(e);return s&&(o?e[Wo]=t:delete e[Wo]),c}Ms.exports=wu});var Bs=x((r2,Fs)=>{n();var vu=Object.prototype,Au=vu.toString;function Iu(e){return Au.call(e)}Fs.exports=Iu});var rr=x((a2,Gs)=>{n();var Us=tr(),ku=Os(),Lu=Bs(),Eu="[object Null]",Pu="[object Undefined]",Ws=Us?Us.toStringTag:void 0;function Cu(e){return e==null?e===void 0?Pu:Eu:Ws&&Ws in Object(e)?ku(e):Lu(e)}Gs.exports=Cu});var $s=x((i2,Hs)=>{n();var Nu=Array.isArray;Hs.exports=Nu});var qs=x((s2,Vs)=>{n();function Ru(e){return e!=null&&typeof e=="object"}Vs.exports=Ru});var zs=x((c2,js)=>{n();var Du=rr(),Mu=$s(),Ou=qs(),Fu="[object String]";function Bu(e){return typeof e=="string"||!Mu(e)&&Ou(e)&&Du(e)==Fu}js.exports=Bu});var Vn=x((sM,Js)=>{n();function tg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Js.exports=tg});var ec=x((cM,Qs)=>{n();var rg=rr(),ag=Vn(),ig="[object AsyncFunction]",sg="[object Function]",cg="[object GeneratorFunction]",pg="[object Proxy]";function mg(e){if(!ag(e))return!1;var o=rg(e);return o==sg||o==cg||o==ig||o==pg}Qs.exports=mg});var nc=x((pM,oc)=>{n();var dg=Uo(),lg=dg["__core-js_shared__"];oc.exports=lg});var ac=x((mM,rc)=>{n();var cr=nc(),tc=function(){var e=/[^.]+$/.exec(cr&&cr.keys&&cr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function _g(e){return!!tc&&tc in e}rc.exports=_g});var sc=x((dM,ic)=>{n();var ug=Function.prototype,gg=ug.toString;function fg(e){if(e!=null){try{return gg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}ic.exports=fg});var pc=x((lM,cc)=>{n();var hg=ec(),Tg=ac(),yg=Vn(),xg=sc(),bg=/[\\^$.*+?()[\]{}|]/g,Sg=/^\[object .+?Constructor\]$/,wg=Function.prototype,vg=Object.prototype,Ag=wg.toString,Ig=vg.hasOwnProperty,kg=RegExp("^"+Ag.call(Ig).replace(bg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Lg(e){if(!yg(e)||Tg(e))return!1;var o=hg(e)?kg:Sg;return o.test(xg(e))}cc.exports=Lg});var dc=x((_M,mc)=>{n();function Eg(e,o){return e==null?void 0:e[o]}mc.exports=Eg});var qn=x((uM,lc)=>{n();var Pg=pc(),Cg=dc();function Ng(e,o){var t=Cg(e,o);return Pg(t)?t:void 0}lc.exports=Ng});var Go=x((gM,_c)=>{n();var Rg=qn(),Dg=Rg(Object,"create");_c.exports=Dg});var fc=x((fM,gc)=>{n();var uc=Go();function Mg(){this.__data__=uc?uc(null):{},this.size=0}gc.exports=Mg});var Tc=x((hM,hc)=>{n();function Og(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}hc.exports=Og});var xc=x((TM,yc)=>{n();var Fg=Go(),Bg="__lodash_hash_undefined__",Ug=Object.prototype,Wg=Ug.hasOwnProperty;function Gg(e){var o=this.__data__;if(Fg){var t=o[e];return t===Bg?void 0:t}return Wg.call(o,e)?o[e]:void 0}yc.exports=Gg});var Sc=x((yM,bc)=>{n();var Hg=Go(),$g=Object.prototype,Vg=$g.hasOwnProperty;function qg(e){var o=this.__data__;return Hg?o[e]!==void 0:Vg.call(o,e)}bc.exports=qg});var vc=x((xM,wc)=>{n();var jg=Go(),zg="__lodash_hash_undefined__";function Kg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=jg&&o===void 0?zg:o,this}wc.exports=Kg});var Ic=x((bM,Ac)=>{n();var Xg=fc(),Yg=Tc(),Zg=xc(),Jg=Sc(),Qg=vc();function To(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}To.prototype.clear=Xg;To.prototype.delete=Yg;To.prototype.get=Zg;To.prototype.has=Jg;To.prototype.set=Qg;Ac.exports=To});var Lc=x((SM,kc)=>{n();function ef(){this.__data__=[],this.size=0}kc.exports=ef});var Pc=x((wM,Ec)=>{n();function of(e,o){return e===o||e!==e&&o!==o}Ec.exports=of});var Ho=x((vM,Cc)=>{n();var nf=Pc();function tf(e,o){for(var t=e.length;t--;)if(nf(e[t][0],o))return t;return-1}Cc.exports=tf});var Rc=x((AM,Nc)=>{n();var rf=Ho(),af=Array.prototype,sf=af.splice;function cf(e){var o=this.__data__,t=rf(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():sf.call(o,t,1),--this.size,!0}Nc.exports=cf});var Mc=x((IM,Dc)=>{n();var pf=Ho();function mf(e){var o=this.__data__,t=pf(o,e);return t<0?void 0:o[t][1]}Dc.exports=mf});var Fc=x((kM,Oc)=>{n();var df=Ho();function lf(e){return df(this.__data__,e)>-1}Oc.exports=lf});var Uc=x((LM,Bc)=>{n();var _f=Ho();function uf(e,o){var t=this.__data__,s=_f(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Bc.exports=uf});var Gc=x((EM,Wc)=>{n();var gf=Lc(),ff=Rc(),hf=Mc(),Tf=Fc(),yf=Uc();function yo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}yo.prototype.clear=gf;yo.prototype.delete=ff;yo.prototype.get=hf;yo.prototype.has=Tf;yo.prototype.set=yf;Wc.exports=yo});var $c=x((PM,Hc)=>{n();var xf=qn(),bf=Uo(),Sf=xf(bf,"Map");Hc.exports=Sf});var jc=x((CM,qc)=>{n();var Vc=Ic(),wf=Gc(),vf=$c();function Af(){this.size=0,this.__data__={hash:new Vc,map:new(vf||wf),string:new Vc}}qc.exports=Af});var Kc=x((NM,zc)=>{n();function If(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}zc.exports=If});var $o=x((RM,Xc)=>{n();var kf=Kc();function Lf(e,o){var t=e.__data__;return kf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Xc.exports=Lf});var Zc=x((DM,Yc)=>{n();var Ef=$o();function Pf(e){var o=Ef(this,e).delete(e);return this.size-=o?1:0,o}Yc.exports=Pf});var Qc=x((MM,Jc)=>{n();var Cf=$o();function Nf(e){return Cf(this,e).get(e)}Jc.exports=Nf});var op=x((OM,ep)=>{n();var Rf=$o();function Df(e){return Rf(this,e).has(e)}ep.exports=Df});var tp=x((FM,np)=>{n();var Mf=$o();function Of(e,o){var t=Mf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}np.exports=Of});var ap=x((BM,rp)=>{n();var Ff=jc(),Bf=Zc(),Uf=Qc(),Wf=op(),Gf=tp();function xo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}xo.prototype.clear=Ff;xo.prototype.delete=Bf;xo.prototype.get=Uf;xo.prototype.has=Wf;xo.prototype.set=Gf;rp.exports=xo});var sp=x((UM,ip)=>{n();var Hf="__lodash_hash_undefined__";function $f(e){return this.__data__.set(e,Hf),this}ip.exports=$f});var pp=x((WM,cp)=>{n();function Vf(e){return this.__data__.has(e)}cp.exports=Vf});var dp=x((GM,mp)=>{n();var qf=ap(),jf=sp(),zf=pp();function jn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new qf;++o<t;)this.add(e[o])}jn.prototype.add=jn.prototype.push=jf;jn.prototype.has=zf;mp.exports=jn});var _p=x((HM,lp)=>{n();function Kf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}lp.exports=Kf});var gp=x(($M,up)=>{n();function Xf(e){return e!==e}up.exports=Xf});var hp=x((VM,fp)=>{n();function Yf(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}fp.exports=Yf});var yp=x((qM,Tp)=>{n();var Zf=_p(),Jf=gp(),Qf=hp();function eh(e,o,t){return o===o?Qf(e,o,t):Zf(e,Jf,t)}Tp.exports=eh});var bp=x((jM,xp)=>{n();var oh=yp();function nh(e,o){var t=e==null?0:e.length;return!!t&&oh(e,o,0)>-1}xp.exports=nh});var wp=x((zM,Sp)=>{n();function th(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}Sp.exports=th});var Ap=x((KM,vp)=>{n();function rh(e,o){return e.has(o)}vp.exports=rh});var kp=x((XM,Ip)=>{n();var ah=qn(),ih=Uo(),sh=ah(ih,"Set");Ip.exports=sh});var Ep=x((YM,Lp)=>{n();function ch(){}Lp.exports=ch});var pr=x((ZM,Pp)=>{n();function ph(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Pp.exports=ph});var Np=x((JM,Cp)=>{n();var mr=kp(),mh=Ep(),dh=pr(),lh=1/0,_h=mr&&1/dh(new mr([,-0]))[1]==lh?function(e){return new mr(e)}:mh;Cp.exports=_h});var Dp=x((QM,Rp)=>{n();var uh=dp(),gh=bp(),fh=wp(),hh=Ap(),Th=Np(),yh=pr(),xh=200;function bh(e,o,t){var s=-1,c=gh,p=e.length,m=!0,_=[],d=_;if(t)m=!1,c=fh;else if(p>=xh){var g=o?null:Th(e);if(g)return yh(g);m=!1,c=hh,d=new uh}else d=o?[]:_;e:for(;++s<p;){var b=e[s],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var I=d.length;I--;)if(d[I]===S)continue e;o&&d.push(S),_.push(b)}else c(d,S,t)||(d!==_&&d.push(S),_.push(b))}return _}Rp.exports=bh});var Op=x((eO,Mp)=>{n();var Sh=Dp();function wh(e){return e&&e.length?Sh(e):[]}Mp.exports=wh});var we={};ee(we,{css:()=>zp,default:()=>aT});var zp,aT,ve=f(()=>{"use strict";n();zp=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zp));aT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var yr={};ee(yr,{css:()=>im,default:()=>IT});var im,IT,xr=f(()=>{"use strict";n();im=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(im));IT={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var br={};ee(br,{css:()=>pm,default:()=>LT});var pm,LT,Sr=f(()=>{"use strict";n();pm=`.dapp-core-component__addressRowStyles__ledger-address-table-body-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item:not(.dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected) {
  color: #6c757d;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data {
  font-size: 14px;
  line-height: 1;
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
  padding-right: 16px;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data:first-child {
  width: 55%;
  flex-basis: 55%;
  max-width: 55%;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data:last-child {
  width: 32px;
  max-width: 32px;
  flex-basis: 32px;
  text-align: center;
  justify-content: center;
  padding-right: 0;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input {
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  -webkit-appearance: none;
  appearance: none;
  min-height: auto;
}
@media (min-width: 480px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input {
    margin-right: 12px;
  }
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input:before {
  border: 2px solid #adb5bd;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input:checked:before {
  width: 12px;
  height: 12px;
  border: 4px solid #1b46c2;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label {
  margin-bottom: 0;
  flex: 1;
  display: flex;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value {
  flex: 1;
}
.dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
  max-width: 84px;
  display: flex;
  align-items: flex-end;
}
@media (min-width: 480px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
    max-width: 112px;
  }
}
@media (min-width: 768px) {
  .dapp-core-component__addressRowStyles__ledger-address-table-body-item .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label .dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value > span {
    max-width: 260px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pm));LT={"ledger-address-table-body-item":"dapp-core-component__addressRowStyles__ledger-address-table-body-item",ledgerAddressTableBodyItem:"dapp-core-component__addressRowStyles__ledger-address-table-body-item","ledger-address-table-body-item-selected":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected",ledgerAddressTableBodyItemSelected:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected","ledger-address-table-body-item-data":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data",ledgerAddressTableBodyItemData:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data","ledger-address-table-body-item-data-input":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input",ledgerAddressTableBodyItemDataInput:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input","ledger-address-table-body-item-data-label":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label",ledgerAddressTableBodyItemDataLabel:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label","ledger-address-table-body-item-data-value":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value",ledgerAddressTableBodyItemDataValue:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value"}});var CT={};ee(CT,{AddressRow:()=>PT});module.exports=X(CT);n();n();var ge=T(require("react")),wr=T(require("classnames"));n();var Jr=T(require("react"));n();var Ao=T(require("react"));n();oo();var Xr=()=>!Ue();var Jm=()=>h(void 0,null,function*(){return yield Promise.resolve().then(()=>(mt(),pt))}),Qm=()=>(mt(),X(pt)).default,dt=Xr();function Zr({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=Ao.default.useState(dt?void 0:Qm()),[p,m]=Ao.default.useState(dt||t==null?void 0:t()),_=()=>h(this,null,function*(){(e?e():Jm()).then(d=>c(d.default)),o==null||o().then(d=>m(d.default))});return(0,Ao.useEffect)(()=>{dt&&_()},[]),{globalStyles:s,styles:p}}function j(e,o){return t=>{let{globalStyles:s,styles:c}=Zr({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Jr.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var Ce=T(require("react")),us=T(require("classnames"));A();n();n();n();E();n();var hi=T(require("lodash.isequal")),In=require("reselect"),y=(0,In.createSelectorCreator)(In.defaultMemoize,hi.default);var le=e=>e.account,Ve=y(le,e=>e.address),_o=y(le,Ve,(e,o)=>o in e.accounts?e.accounts[o]:rn),Kd=y(le,_o,(e,o)=>{let c=e,{accounts:t}=c,s=Me(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),pS=y(_o,e=>e.balance),Xd=y(_o,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),mS=y(le,e=>e.shard),Yd=y(le,e=>e.ledgerAccount),dS=y(le,e=>e.walletConnectAccount),lS=y(le,e=>e.isAccountLoading),_S=y(le,e=>e.accountLoadingError),Zd=y(le,e=>e.websocketEvent),Jd=y(le,e=>e.websocketBatchEvent);n();var Ti=e=>e.dappConfig,fS=y(Ti,e=>e.shouldUseWebViewProvider);n();var J=e=>e.loginInfo,Qd=y(J,e=>e.loginMethod),kn=y(J,Ve,(e,o)=>Boolean(o)),xS=y(J,e=>e.walletConnectLogin),el=y(J,e=>e.ledgerLogin),ol=y(J,e=>e.walletLogin),bS=y(J,e=>e.isLoginSessionInvalid),Ft=y(J,e=>e.tokenLogin),yi=y(J,e=>e.logoutRoute),nl=y(J,e=>e.isWalletConnectV2Initialized);n();var xi=e=>e.modals,vS=y(xi,e=>e.txSubmittedModal),tl=y(xi,e=>e.notificationModal);n();var _e=e=>e.networkConfig,Ln=y(_e,e=>e.network.chainId),rl=y(_e,e=>e.network.roundDuration),kS=y(_e,e=>e.network.walletConnectBridgeAddress),al=y(_e,e=>e.network.walletConnectV2RelayAddress),il=y(_e,e=>e.network.walletConnectV2ProjectId),sl=y(_e,e=>e.network.walletConnectV2Options),cl=y(_e,e=>e.network.walletConnectDeepLink),Q=y(_e,e=>e.network),bi=y(Q,e=>e.apiAddress),Si=y(Q,e=>e.explorerAddress),wi=y(Q,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),pl=y(Q,e=>e.xAliasAddress),Bt=y(Q,e=>e.egldLabel);n();var En=e=>e.signedMessageInfo,PS=y(En,e=>e.isSigning),CS=y(En,e=>e.errorMessage),NS=y(En,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),RS=y(En,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var vi=e=>e.toasts,ml=y(vi,e=>e.customToasts),Ai=y(vi,e=>e.transactionToasts);n();E();var Ii={errorMessage:Et,successMessage:Pt,processingMessage:Ct},ki=e=>e.transactionsInfo,dl=y(ki,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Ii);n();n();var ue=require("@multiversx/sdk-core");A();n();var Wt=require("@multiversx/sdk-core/out");n();n();function Ut(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Li=e=>{let o=e!=null?e:"";return Ut(o)?Wt.TransactionPayload.fromEncoded(o):new Wt.TransactionPayload(o)};n();A();var Ro=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(lt).some(t=>e.startsWith(t)):!1;function Pn(e){var s,c,p;let o=u({},e);Ro({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ue.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Li(o.data),nonce:o.nonce.valueOf(),receiver:new ue.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ue.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Qo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:en,chainID:o.chainID.valueOf(),version:new ue.TransactionVersion((p=o.version)!=null?p:ya)}),o.options?{options:new ue.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ue.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();var $t=require("@reduxjs/toolkit"),Ki=require("react-redux/lib/utils/Subscription");E();n();var Ei=T(require("lodash.throttle"));A();E();vt();io();ao();var ul=[on],Cn=!1,gl=(0,Ei.default)(()=>{Eo(Lo())},5e3),Pi=e=>o=>t=>{if(ul.includes(t.type))return o(t);let s=e.getState(),c=$e.local.getItem(ke.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return Eo(Lo());let m=Date.now();return c-m<0&&!Cn?setTimeout(()=>{Cn=!0,e.dispatch(Oa())},1e3):(Cn&&(Cn=!1),gl()),o(t)};n();n();function Nn(){return typeof sessionStorage!="undefined"}var qi=Nn()?(Oi(),X(Mi)).default:(Bi(),X(Fi)).default,ji=Nn()?(Wi(),X(Ui)).default:[],zi=Nn()?(Vi(),X($i)).default:e=>e;Rn();var v=(0,$t.configureStore)({reducer:qi,middleware:e=>e({serializableCheck:{ignoredActions:[...ji,wt.type,an.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Pi)}),Xi=(0,Ki.createSubscription)(v),z0=zi(v),K0=(0,$t.configureStore)({reducer:qe});n();n();var Ul=require("@multiversx/sdk-core/out");n();A();n();var Yi=require("@multiversx/sdk-core");M();n();var Wl=require("@multiversx/sdk-core");n();n();n();var Gl=require("@multiversx/sdk-core"),Hl=T(require("bignumber.js"));P();n();n();n();var qt="blocks";n();n();n();n();z();n();n();z();n();n();n();var zl=T(require("bignumber.js"));A();n();var os=require("@multiversx/sdk-core"),Ee=T(require("bignumber.js"));A();n();var es=T(require("bignumber.js")),Mo=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let s=new es.default(t),c=o?0:-1;return s.toString(10)===t&&s.comparedTo(0)>=c};n();function Se(e){return{if:function(o){return o?{then:t=>t instanceof Function?Se(t(e)):Se(t)}:{then:()=>Se(e)}},then:o=>o instanceof Function?Se(o(e)):Se(o),valueOf:function(){return e}}}Ee.default.config({ROUNDING_MODE:Ee.default.ROUND_FLOOR});function Pe({input:e,decimals:o=Y,digits:t=He,showLastNonZeroDecimal:s=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!Mo(e,!1))throw new Error("Invalid input");let m=new Ee.default(e).isNegative(),_=e;return m&&(_=e.substring(1)),Se(_).then(()=>os.TokenTransfer.fungibleFromBigInteger("",_,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(d=>{let g=new Ee.default(d);if(g.isZero())return de;let b=g.toString(10),[S,I]=b.split("."),L=new Ee.default(I||0),B=Se(0).if(Boolean(I&&s)).then(()=>Math.max(I.length,t)).if(L.isZero()&&!s).then(0).if(Boolean(I&&!s)).then(()=>Math.min(I.length,t)).valueOf(),V=I&&t>=1&&t<=I.length&&L.isGreaterThan(0)&&new Ee.default(I.substring(0,t)).isZero(),re=g.toFormat(B);return Se(b).if(p).then(re).if(Boolean(V)).then(Ae=>{let fe=new Ee.default(S).isZero(),[C,Ye]=Ae.split("."),Ze=new Array(t-1).fill(0),Xn=[...Ze,0].join(""),Yn=[...Ze,1].join("");return fe?c?`<${C}.${Yn}`:s?`${C}.${Ye}`:C:`${C}.${Xn}`}).if(Boolean(!V&&I)).then(Ae=>{let[fe]=Ae.split("."),C=I.substring(0,B);if(s){let Ye=t-C.length;if(Ye>0){let Ze=Array(Ye).fill(0).join("");return C=`${C}${Ze}`,`${fe}.${C}`}return Ae}return C?`${fe}.${C}`:fe}).valueOf()}).if(m).then(d=>`-${d}`).valueOf()}n();n();n();A();n();n();n();n();A();n();A();n();var Kl=require("@multiversx/sdk-core");A();n();var Oo=require("@multiversx/sdk-core"),Zl=T(require("bignumber.js"));A();n();n();var Xl=T(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();n();A();n();z();var Ql=["reDelegateRewards","claimRewards","unBond"],e_=["wrapEgld","unwrapEgld"],o_=["unStake"],n_=["unDelegate"];n();n();n();A();n();var i_=T(require("bignumber.js"));n();n();z();n();var c_=T(require("bignumber.js"));n();n();n();n();var d_=T(require("bignumber.js"));M();n();n();n();n();P();n();var g_=require("@multiversx/sdk-web-wallet-provider");A();n();var __=T(require("qs"));n();H();oo();n();oo();var ok={search:Ue()?window.location.search:"",removeParams:[]};n();n();n();G();n();z();n();n();G();n();var f_=T(require("linkifyjs"));n();A();n();var h_=T(require("bignumber.js"));n();M();n();n();P();n();P();n();n();n();z();n();z();n();var T_=T(require("bignumber.js"));A();z();n();z();n();var as=require("react");M();n();n();z();n();n();var y_=require("@multiversx/sdk-core/out"),x_=T(require("bignumber.js"));z();n();M();n();n();M();var jL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var is=require("react");M();G();n();var S_=require("react");z();var e1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];lo();n();var On=e=>e.transactions,uo=y(On,e=>e.signedTransactions),w_=y(On,e=>e.signTransactionsError),ss=y(On,e=>e.signTransactionsCancelMessage),Fn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),cs=y(uo,Fn(co)),ps=y(uo,Fn(po)),ms=y(uo,Fn(mo)),v_=y(uo,Fn(Rt)),ds=y(On,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Pn(t)))||[]})}),A_=y(uo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});function Bn(){return Bt(v.getState())}var k_=e=>{var t;let o=(t=e.styles)!=null?t:{};return Ce.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ce.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},L_=(e,o)=>{var L,B,V;let{value:t,showLastNonZeroDecimal:s=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:He,m=e.decimals!=null?e.decimals:Y,_=(L=e.styles)!=null?L:{},d=(B=e.globalStyles)!=null?B:{},g=Pe({input:t,decimals:m,digits:p,showLastNonZeroDecimal:s,addCommas:!0}),b=g.split("."),S=b.length===1,I=g!==de;if(p>0&&S&&I){let re="";for(let De=1;De<=p;De++)re=re+de;b.push(re)}return Ce.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ce.default.createElement("span",{className:_["int-amount"],"data-testid":"formatAmountInt"},b[0]),b.length>1&&Ce.default.createElement("span",{className:_.decimals,"data-testid":"formatAmountDecimals"},".",b[1]),c&&Ce.default.createElement("span",{className:(0,us.default)(_.symbol,e.token&&d.textMuted),"data-testid":"formatAmountSymbol"},` ${(V=e.token)!=null?V:o}`))},E_=e=>{let{value:o}=e;return Mo(o)?L_(e,e.egldLabel||""):k_(e)},P_=e=>{let o=e.egldLabel||Bn(),t=w(u({},e),{egldLabel:o});return Ce.default.createElement(E_,u({},t))},gs=j(P_,{ssrStyles:()=>Promise.resolve().then(()=>(Yt(),Xt)),clientStyles:()=>(Yt(),X(Xt)).default});n();n();var F=T(require("react")),sm=T(require("classnames"));A();n();n();n();var fs=require("react"),go=require("react-redux");var C_={store:v,subscription:Xi},Zt=(0,fs.createContext)(C_),_E=(0,go.createStoreHook)(Zt),$=(0,go.createDispatchHook)(Zt),k=(0,go.createSelectorHook)(Zt);n();var hs=require("react");n();E();n();n();n();n();n();n();n();n();var R_=require("@multiversx/sdk-extension-provider"),D_=require("@multiversx/sdk-hw-provider"),M_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),O_=require("@multiversx/sdk-opera-provider"),F_=require("@multiversx/sdk-passkey-provider/out"),B_=require("@multiversx/sdk-web-wallet-provider");A();Ie();n();var fo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Ts=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,Un=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},ys=new Un;E();n();n();n();n();n();var xs=require("@lifeomic/axios-fetch"),Jt=T(require("axios")),Qt=(0,xs.buildAxiosFetch)(Jt.default),er=(e,o)=>h(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function U_(e,o,t){return h(this,null,function*(){try{let s=yield Qt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return er(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function W_(e,o){return h(this,null,function*(){try{let t=yield Qt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return er(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function G_(e,o,t){return h(this,null,function*(){try{let s=yield Qt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return er(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var ho=Jt.default.create();ho.get=W_;ho.post=U_;ho.patch=G_;n();n();var H_=T(require("axios"));n();var $_=T(require("swr"));n();P();n();n();n();G();n();lo();n();n();n();var V_=T(require("axios"));n();var j_=T(require("axios"));ro();n();A();n();var z_=T(require("axios"));n();var X_=T(require("axios"));n();n();var Y_=T(require("axios"));n();var Z_=T(require("axios"));n();n();E();P();n();n();n();n();G();n();R();M();n();E();n();var vs=require("@multiversx/sdk-core");M();H();n();lo();n();E();P();n();E();M();n();n();n();M();n();Jo();n();n();n();n();var ou=T(require("swr"));n();n();n();n();var As=require("react");n();n();var nu=require("react"),tu=require("@multiversx/sdk-web-wallet-provider"),ru=require("@multiversx/sdk-web-wallet-provider"),au=T(require("qs"));A();E();P();ut();G();var QR=O();n();var Zs=require("react"),sr=require("@multiversx/sdk-core");n();A();At();n();n();n();n();n();n();n();n();n();n();ro();n();var pu=T(require("axios"));n();var du=T(require("axios"));n();ro();n();ro();n();n();n();n();var _u=require("@multiversx/sdk-opera-provider");n();var uu=require("@multiversx/sdk-extension-provider");n();Ie();n();n();n();n();var Uu=T(zs());n();var $u=require("@multiversx/sdk-native-auth-client");n();var Ys=T(require("axios"));n();n();n();function Ks(e){return h(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Xs=(e,o,t,s=0)=>h(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Ks(o.delay)),yield Xs(e,o,t,s+1)):null}}),ar=(e,o={retries:5,delay:500})=>(...t)=>h(void 0,null,function*(){return yield Xs(e,o,t)});var Wu=4;var x2=ar((e,o,t)=>h(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Ys.default.get(`${e}/${qt}?from=${Wu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();nn();n();n();G();var P2={origin:O().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var qu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var ju=require("@multiversx/sdk-passkey-provider/out");A();G();n();n();n();var Ju=require("react"),Qu=require("@multiversx/sdk-hw-provider");n();R();M();n();Po();io();ao();H();n();n();var Wp=require("react"),Gp=require("@multiversx/sdk-core"),Gh=require("@multiversx/sdk-extension-provider"),Hh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),$h=require("@multiversx/sdk-passkey-provider/out"),Vh=T(Op());A();n();n();n();n();n();n();n();n();n();n();var Vo=T(require("react"));var fO=(0,Vo.createContext)({}),hO=v.getState();n();var Bp=T(require("react"));n();var dr=T(require("react")),vh=T(require("axios"));n();n();Ie();n();n();var Ph=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Ch=require("@multiversx/sdk-webview-provider/out/WebviewProvider");R();n();R();E();M();n();n();E();n();H();n();E();M();n();n();var Ih=require("@multiversx/sdk-core"),kh=T(require("bignumber.js"));A();n();var Lh=T(require("bignumber.js"));A();E();P();H();G();n();var Up=require("react"),Mh=require("@multiversx/sdk-extension-provider"),Oh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Fh=require("@multiversx/sdk-passkey-provider/out");Ie();E();n();E();M();Po();G();n();pe();E();n();n();var jh=require("react");n();n();P();lo();n();var Kn=require("react"),Hp=(e,o)=>{let[t,s]=(0,Kn.useState)(e);return(0,Kn.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var Kh=require("react"),Xh=require("@multiversx/sdk-extension-provider");pe();R();P();n();xe();H();H();n();n();Ie();M();n();var zh=require("react"),$p=require("@multiversx/sdk-core");E();n();var Yh=require("react"),Zh=require("@multiversx/sdk-opera-provider");pe();R();P();xe();H();G();n();var Jh=require("react");ft();pe();Ie();R();E();P();xe();G();n();var tT=require("react");pe();E();n();n();ht();n();n();var Qh=T(require("platform"));oo();n();n();n();n();n();n();Io();P();n();n();var eT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Po();io();n();n();n();E();n();n();var oT=T(require("axios"));H();n();n();var nT=T(Vn());Io();var Vp,qp,jp,rW=(jp=(qp=(Vp=Ge.safeWindow)==null?void 0:Vp.location)==null?void 0:qp.origin)==null?void 0:jp.includes("localhost");n();G();n();n();var lT=require("react");A();n();n();A();n();n();n();var rT=T(require("bignumber.js"));n();n();n();var Re=T(require("react")),Qp=require("react"),em=require("react"),fr=T(require("classnames")),om=require("react-dom");A();n();var Kp=T(require("react")),Xp=T(require("classnames"));var iT=({className:e,children:o,styles:t})=>Kp.default.createElement("div",{className:(0,Xp.default)(t==null?void 0:t.dappModalBody,e)},o),lr=j(iT,{ssrStyles:()=>Promise.resolve().then(()=>(ve(),we)),clientStyles:()=>(ve(),X(we)).default});n();var _r=T(require("react")),Yp=T(require("classnames"));var sT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?_r.default.createElement("div",{className:(0,Yp.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:_r.default.createElement("div",null,s)):null,ur=j(sT,{ssrStyles:()=>Promise.resolve().then(()=>(ve(),we)),clientStyles:()=>(ve(),X(we)).default});n();var wo=T(require("react")),Zp=require("@fortawesome/free-solid-svg-icons"),Jp=require("@fortawesome/react-fontawesome"),jo=T(require("classnames"));var cT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:d})=>e?t?wo.default.createElement("div",{className:(0,jo.default)(d==null?void 0:d.dappModalHeader,s)},t):wo.default.createElement("div",{className:(0,jo.default)(d==null?void 0:d.dappModalHeader,s)},wo.default.createElement("div",{className:(0,jo.default)(d==null?void 0:d.dappModalHeaderText,p)},o),wo.default.createElement("button",{onClick:m,className:(0,jo.default)(d==null?void 0:d.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},wo.default.createElement(Jp.FontAwesomeIcon,{size:"lg",icon:Zp.faTimes}))):null,gr=j(cT,{ssrStyles:()=>Promise.resolve().then(()=>(ve(),we)),clientStyles:()=>(ve(),X(we)).default});var pT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},mT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=pT,id:p="dapp-modal",onHide:m,parentElement:_,visible:d,styles:g})=>{let[b,S]=(0,Qp.useState)(!1);if((0,em.useEffect)(()=>{S(!0)},[]),!d)return null;let{showHeader:I,showFooter:L,headerText:B,footerText:V,modalDialogClassName:re="dapp-modal-dialog",modalContentClassName:De="dapp-modal-dialog-content",modalHeaderClassName:Ae="dapp-modal-dialog-header",modalHeaderTextClassName:fe="dapp-modal-dialog-header-text",modalCloseButtonClassName:C="dapp-modal-dialog-close-button",modalBodyClassName:Ye="dapp-modal-dialog-content-body",modalFooterClassName:Ze="dapp-modal-dialog-footer",customModalHeader:Xn,customModalFooter:Yn}=c,mm=dm=>{dm.key==="Escape"&&s&&(m==null||m())};return Re.default.createElement(Re.default.Fragment,null,b&&(0,om.createPortal)(Re.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,fr.default)(re,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:mm},Re.default.createElement("div",{className:(0,fr.default)(g==null?void 0:g.dappModalContent,De)},Re.default.createElement(gr,{visible:I,headerText:B,customHeader:Xn,className:Ae,headerTextClassName:fe,closeButtonClassName:C,onHide:m}),Re.default.createElement(lr,{className:Ye},o),Re.default.createElement(ur,{visible:L,customFooter:Yn,footerText:V,className:Ze}))),_!=null?_:document==null?void 0:document.body))},dT=j(mT,{ssrStyles:()=>Promise.resolve().then(()=>(ve(),we)),clientStyles:()=>(ve(),X(we)).default});n();n();var nm=require("react");n();n();var tm=require("react"),uT=require("@multiversx/sdk-hw-provider");pe();R();E();P();xe();n();var _T=require("react");n();n();var hr=require("react");R();E();P();xe();G();n();var fT=require("react"),hT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();R();P();xe();H();H();n();var TT=require("react"),yT=require("@multiversx/sdk-passkey-provider/out");pe();R();P();xe();H();H();n();n();var rm=require("react");n();var ST=require("react");n();var Tr=require("react"),bT=require("socket.io-client");E();n();n();n();var wT=require("react");M();n();n();n();var AT=T(require("swr"));n();n();n();n();var vT=T(require("axios"));n();var kT=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,F.useState)(0),[_,d]=(0,F.useState)(!1),g=(0,F.useRef)(document==null?void 0:document.createElement("span")),b=(0,F.useRef)(document==null?void 0:document.createElement("span")),S=Hp(p,300),I=()=>{if(g.current&&b.current){let V=b.current.offsetWidth-g.current.offsetWidth;d(V>1)}},L=()=>{m(p+1)};return(0,F.useEffect)(()=>(window==null||window.addEventListener("resize",L),()=>{window==null||window.removeEventListener("resize",L)})),(0,F.useEffect)(()=>{I()},[S]),F.default.createElement("span",{ref:g,className:(0,sm.default)(c==null?void 0:c.trim,s,o,{overflow:_}),"data-testid":t},F.default.createElement("span",{ref:b,className:c==null?void 0:c.hiddenTextRef},e),_?F.default.createElement(F.default.Fragment,null,F.default.createElement("span",{className:c==null?void 0:c.left},F.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),F.default.createElement("span",{className:c==null?void 0:c.ellipsis},ba),F.default.createElement("span",{className:c==null?void 0:c.right},F.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):F.default.createElement("span",null,e))},cm=j(kT,{ssrStyles:()=>Promise.resolve().then(()=>(xr(),yr)),clientStyles:()=>(xr(),X(yr)).default});var ET=({address:e,index:o,balance:t,selectedAddress:s,onSelectAddress:c,className:p="dapp-ledger-address-row",ledgerModalTableSelectedItemClassName:m,disabled:_=!1,styles:d})=>{var g;return ge.default.createElement("div",{onClick:()=>c({address:e,index:o}),className:(0,wr.default)(d==null?void 0:d.ledgerAddressTableBodyItem,{[m!=null?m:""]:s===e,[(g=d==null?void 0:d.ledgerAddressTableBodyItemSelected)!=null?g:""]:s===e},p)},ge.default.createElement("div",{className:(0,wr.default)(d==null?void 0:d.ledgerAddressTableBodyItemData,{disabled:_})},ge.default.createElement("input",{type:"radio",id:`check_${e}`,disabled:_,onChange:()=>c({address:e,index:o}),"data-testid":`check_${e}`,role:"button",checked:s===e,className:d==null?void 0:d.ledgerAddressTableBodyItemDataInput}),ge.default.createElement("label",{htmlFor:`check_${o}`,role:"button","data-testid":`label_${o}`,className:d==null?void 0:d.ledgerAddressTableBodyItemDataLabel},ge.default.createElement("div",{className:d==null?void 0:d.ledgerAddressTableBodyItemDataValue},ge.default.createElement(cm,{text:e})))),ge.default.createElement("div",{className:d==null?void 0:d.ledgerAddressTableBodyItemData},ge.default.createElement(gs,{value:t,egldLabel:Bn()})),ge.default.createElement("div",{className:d==null?void 0:d.ledgerAddressTableBodyItemData},o))},PT=j(ET,{ssrStyles:()=>Promise.resolve().then(()=>(Sr(),br)),clientStyles:()=>(Sr(),X(br)).default});0&&(module.exports={AddressRow});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
