"use strict";var Gm=Object.create;var No=Object.defineProperty,Vm=Object.defineProperties,$m=Object.getOwnPropertyDescriptor,Hm=Object.getOwnPropertyDescriptors,jm=Object.getOwnPropertyNames,Jo=Object.getOwnPropertySymbols,qm=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable;var Mr=(e,o,t)=>o in e?No(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))nt.call(o,t)&&Mr(e,t,o[t]);if(Jo)for(var t of Jo(o))Or.call(o,t)&&Mr(e,t,o[t]);return e},v=(e,o)=>Vm(e,Hm(o));var be=(e,o)=>{var t={};for(var s in e)nt.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Jo)for(var s of Jo(e))o.indexOf(s)<0&&Or.call(e,s)&&(t[s]=e[s]);return t};var g=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),K=(e,o)=>{for(var t in o)No(e,t,{get:o[t],enumerable:!0})},Fr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of jm(o))!nt.call(e,c)&&c!==t&&No(e,c,{get:()=>o[c],enumerable:!(s=$m(o,c))||s.enumerable});return e};var h=(e,o,t)=>(t=e!=null?Gm(qm(e)):{},Fr(o||!e||!e.__esModule?No(t,"default",{value:e,enumerable:!0}):t,e)),H=e=>Fr(No({},"__esModule",{value:!0}),e);var T=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{_(t.next(l))}catch(f){c(f)}},m=l=>{try{_(t.throw(l))}catch(f){c(f)}},_=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var Wr=b(Qo=>{"use strict";n();Qo.byteLength=Km;Qo.toByteArray=Ym;Qo.fromByteArray=Qm;var me=[],ee=[],zm=typeof Uint8Array!="undefined"?Uint8Array:Array,tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Be=0,Br=tt.length;Be<Br;++Be)me[Be]=tt[Be],ee[tt.charCodeAt(Be)]=Be;var Be,Br;ee["-".charCodeAt(0)]=62;ee["_".charCodeAt(0)]=63;function Ur(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function Km(e){var o=Ur(e),t=o[0],s=o[1];return(t+s)*3/4-s}function Xm(e,o,t){return(o+t)*3/4-t}function Ym(e){var o,t=Ur(e),s=t[0],c=t[1],p=new zm(Xm(e,s,c)),m=0,_=c>0?s-4:s,l;for(l=0;l<_;l+=4)o=ee[e.charCodeAt(l)]<<18|ee[e.charCodeAt(l+1)]<<12|ee[e.charCodeAt(l+2)]<<6|ee[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ee[e.charCodeAt(l)]<<2|ee[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ee[e.charCodeAt(l)]<<10|ee[e.charCodeAt(l+1)]<<4|ee[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Zm(e){return me[e>>18&63]+me[e>>12&63]+me[e>>6&63]+me[e&63]}function Jm(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Zm(s));return c.join("")}function Qm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,_=t-s;m<_;m+=p)c.push(Jm(e,m,m+p>_?_:m+p));return s===1?(o=e[t-1],c.push(me[o>>2]+me[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(me[o>>10]+me[o>>4&63]+me[o<<2&63]+"=")),c.join("")}});var Gr=b(rt=>{n();rt.read=function(e,o,t,s,c){var p,m,_=c*8-s-1,l=(1<<_)-1,f=l>>1,S=-7,x=t?c-1:0,w=t?-1:1,k=e[o+x];for(x+=w,p=k&(1<<-S)-1,k>>=-S,S+=_;S>0;p=p*256+e[o+x],x+=w,S-=8);for(m=p&(1<<-S)-1,p>>=-S,S+=s;S>0;m=m*256+e[o+x],x+=w,S-=8);if(p===0)p=1-f;else{if(p===l)return m?NaN:(k?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-f}return(k?-1:1)*m*Math.pow(2,p-s)};rt.write=function(e,o,t,s,c,p){var m,_,l,f=p*8-c-1,S=(1<<f)-1,x=S>>1,w=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=s?0:p-1,N=s?1:-1,J=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=S):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+x>=1?o+=w/l:o+=w*Math.pow(2,1-x),o*l>=2&&(m++,l/=2),m+x>=S?(_=0,m=S):m+x>=1?(_=(o*l-1)*Math.pow(2,c),m=m+x):(_=o*Math.pow(2,x-1)*Math.pow(2,c),m=0));c>=8;e[t+k]=_&255,k+=N,_/=256,c-=8);for(m=m<<c|_,f+=c;f>0;e[t+k]=m&255,k+=N,m/=256,f-=8);e[t+k-N]|=J*128}});var ea=b(no=>{"use strict";n();var at=Wr(),oo=Gr(),Vr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;no.Buffer=d;no.SlowBuffer=ad;no.INSPECT_MAX_BYTES=50;var en=2147483647;no.kMaxLength=en;d.TYPED_ARRAY_SUPPORT=ed();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ed(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function we(e){if(e>en)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return pt(e)}return jr(e,o,t)}d.poolSize=8192;function jr(e,o,t){if(typeof e=="string")return nd(e,o);if(ArrayBuffer.isView(e))return td(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(de(e,ArrayBuffer)||e&&de(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(de(e,SharedArrayBuffer)||e&&de(e.buffer,SharedArrayBuffer)))return st(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=rd(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return jr(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function qr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function od(e,o,t){return qr(e),e<=0?we(e):o!==void 0?typeof t=="string"?we(e).fill(o,t):we(e).fill(o):we(e)}d.alloc=function(e,o,t){return od(e,o,t)};function pt(e){return qr(e),we(e<0?0:mt(e)|0)}d.allocUnsafe=function(e){return pt(e)};d.allocUnsafeSlow=function(e){return pt(e)};function nd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=zr(e,o)|0,s=we(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function it(e){for(var o=e.length<0?0:mt(e.length)|0,t=we(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function td(e){if(de(e,Uint8Array)){var o=new Uint8Array(e);return st(o.buffer,o.byteOffset,o.byteLength)}return it(e)}function st(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function rd(e){if(d.isBuffer(e)){var o=mt(e.length)|0,t=we(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||dt(e.length)?we(0):it(e);if(e.type==="Buffer"&&Array.isArray(e.data))return it(e.data)}function mt(e){if(e>=en)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+en.toString(16)+" bytes");return e|0}function ad(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(de(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),de(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(de(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function zr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||de(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ct(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Qr(e).length;default:if(c)return s?-1:ct(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=zr;function id(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return gd(this,o,t);case"utf8":case"utf-8":return Xr(this,o,t);case"ascii":return ud(this,o,t);case"latin1":case"binary":return fd(this,o,t);case"base64":return ld(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return hd(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Ue(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ue(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ue(this,t,t+3),Ue(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ue(this,t,t+7),Ue(this,t+1,t+6),Ue(this,t+2,t+5),Ue(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Xr(this,0,o):id.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=no.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Vr&&(d.prototype[Vr]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(de(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=s-t,l=Math.min(m,_),f=this.slice(c,p),S=o.slice(t,s),x=0;x<l;++x)if(f[x]!==S[x]){m=f[x],_=S[x];break}return m<_?-1:_<m?1:0};function Kr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,dt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:$r(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):$r(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function $r(e,o,t,s,c){var p=1,m=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(k,N){return p===1?k[N]:k.readUInt16BE(N*p)}var f;if(c){var S=-1;for(f=t;f<m;f++)if(l(e,f)===l(o,S===-1?0:f-S)){if(S===-1&&(S=f),f-S+1===_)return S*p}else S!==-1&&(f-=f-S),S=-1}else for(t+_>m&&(t=m-_),f=t;f>=0;f--){for(var x=!0,w=0;w<_;w++)if(l(e,f+w)!==l(o,w)){x=!1;break}if(x)return f}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return Kr(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return Kr(this,o,t,s,!1)};function sd(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var _=parseInt(o.substr(m*2,2),16);if(dt(_))return m;e[t+m]=_}return m}function cd(e,o,t,s){return on(ct(o,e.length-t),e,t,s)}function pd(e,o,t,s){return on(yd(o),e,t,s)}function md(e,o,t,s){return on(Qr(o),e,t,s)}function dd(e,o,t,s){return on(Sd(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return sd(this,o,t,s);case"utf8":case"utf-8":return cd(this,o,t,s);case"ascii":case"latin1":case"binary":return pd(this,o,t,s);case"base64":return md(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return dd(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ld(e,o,t){return o===0&&t===e.length?at.fromByteArray(e):at.fromByteArray(e.slice(o,t))}function Xr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,f,S,x;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(x=(p&31)<<6|l&63,x>127&&(m=x));break;case 3:l=e[c+1],f=e[c+2],(l&192)===128&&(f&192)===128&&(x=(p&15)<<12|(l&63)<<6|f&63,x>2047&&(x<55296||x>57343)&&(m=x));break;case 4:l=e[c+1],f=e[c+2],S=e[c+3],(l&192)===128&&(f&192)===128&&(S&192)===128&&(x=(p&15)<<18|(l&63)<<12|(f&63)<<6|S&63,x>65535&&x<1114112&&(m=x))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=_}return _d(s)}var Hr=4096;function _d(e){var o=e.length;if(o<=Hr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Hr));return t}function ud(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function fd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function gd(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=bd[e[p]];return c}function hd(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||B(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||B(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||B(o,4,this.length),oo.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||B(o,4,this.length),oo.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||B(o,8,this.length),oo.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||B(o,8,this.length),oo.read(this,o,!1,52,8)};function j(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;j(this,o,t,s,p,0)}var m=1,_=0;for(this[t]=o&255;++_<s&&(m*=256);)this[t+_]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;j(this,o,t,s,p,0)}var m=s-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);j(this,o,t,s,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<s&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);j(this,o,t,s,p-1,-p)}var m=s-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Yr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Zr(e,o,t,s,c){return o=+o,t=t>>>0,c||Yr(e,o,t,4,34028234663852886e22,-34028234663852886e22),oo.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return Zr(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return Zr(this,o,t,!1,s)};function Jr(e,o,t,s,c){return o=+o,t=t>>>0,c||Yr(e,o,t,8,17976931348623157e292,-17976931348623157e292),oo.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return Jr(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return Jr(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=_[m%l]}return this};var Td=/[^+/0-9A-Za-z-_]/g;function xd(e){if(e=e.split("=")[0],e=e.trim().replace(Td,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ct(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function yd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Sd(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Qr(e){return at.toByteArray(xd(e))}function on(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function de(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function dt(e){return e!==e}var bd=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var aa=b((dx,ra)=>{n();var M=ra.exports={},le,_e;function lt(){throw new Error("setTimeout has not been defined")}function _t(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?le=setTimeout:le=lt}catch(e){le=lt}try{typeof clearTimeout=="function"?_e=clearTimeout:_e=_t}catch(e){_e=_t}})();function oa(e){if(le===setTimeout)return setTimeout(e,0);if((le===lt||!le)&&setTimeout)return le=setTimeout,setTimeout(e,0);try{return le(e,0)}catch(o){try{return le.call(null,e,0)}catch(t){return le.call(this,e,0)}}}function wd(e){if(_e===clearTimeout)return clearTimeout(e);if((_e===_t||!_e)&&clearTimeout)return _e=clearTimeout,clearTimeout(e);try{return _e(e)}catch(o){try{return _e.call(null,e)}catch(t){return _e.call(this,e)}}}var ve=[],to=!1,We,nn=-1;function vd(){!to||!We||(to=!1,We.length?ve=We.concat(ve):nn=-1,ve.length&&na())}function na(){if(!to){var e=oa(vd);to=!0;for(var o=ve.length;o;){for(We=ve,ve=[];++nn<o;)We&&We[nn].run();nn=-1,o=ve.length}We=null,to=!1,wd(e)}}M.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ve.push(new ta(e,o)),ve.length===1&&!to&&oa(na)};function ta(e,o){this.fun=e,this.array=o}ta.prototype.run=function(){this.fun.apply(null,this.array)};M.title="browser";M.browser=!0;M.env={};M.argv=[];M.version="";M.versions={};function Ae(){}M.on=Ae;M.addListener=Ae;M.once=Ae;M.off=Ae;M.removeListener=Ae;M.removeAllListeners=Ae;M.emit=Ae;M.prependListener=Ae;M.prependOnceListener=Ae;M.listeners=function(e){return[]};M.binding=function(e){throw new Error("process.binding is not supported")};M.cwd=function(){return"/"};M.chdir=function(e){throw new Error("process.chdir is not supported")};M.umask=function(){return 0}});var r,i,Ad,a,n=g(()=>{r=h(ea()),i=h(aa()),Ad=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Ad});var ia=g(()=>{"use strict";n()});var ue=g(()=>{"use strict";n()});var sa=g(()=>{"use strict";n()});var ut,ca=g(()=>{"use strict";n();ut=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(ut||{})});var pa=g(()=>{"use strict";n()});var ft=g(()=>{"use strict";n()});var ma=g(()=>{"use strict";n()});var gt=g(()=>{"use strict";n()});var da=g(()=>{"use strict";n()});var la=g(()=>{"use strict";n()});var Ge,ro,Pe=g(()=>{"use strict";n();Ge=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),ro=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var _a,wx,ua,vx,P=g(()=>{"use strict";n();Pe();_a=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(_a||{}),wx=u(u({},ro.WindowProviderRequestEnums),_a),ua=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ua||{}),vx=u(u({},ro.WindowProviderResponseEnums),ua)});var fa=g(()=>{"use strict";n()});var ga=g(()=>{"use strict";n()});var q=g(()=>{"use strict";n()});var ha=g(()=>{"use strict";n()});var Ta=g(()=>{"use strict";n()});var xa=g(()=>{"use strict";n()});var O=g(()=>{"use strict";n();gt();da();la();P();fa();ga();q();ha();Ta();xa()});var ao,ya,Gx,Sa,Vx,ba,$x,Hx,Id,io=g(()=>{"use strict";n();O();ao={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ya,egldLabel:Gx}=ao["devnet"],{chainId:Sa,egldLabel:Vx}=ao["testnet"],{chainId:ba,egldLabel:$x}=ao["mainnet"],Hx={["devnet"]:ya,["testnet"]:Sa,["mainnet"]:ba},Id={[ya]:"devnet",[Sa]:"testnet",[ba]:"mainnet"}});var tn=g(()=>{"use strict";n()});var fe,wa=g(()=>{"use strict";n();fe=require("@multiversx/sdk-web-wallet-provider")});var ge,so=g(()=>{"use strict";n();ge=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var va,Aa,ht,Yx,Zx,Tt=g(()=>{"use strict";n();so();ht=String((Aa=(va=ge.safeWindow)==null?void 0:va.navigator)==null?void 0:Aa.userAgent),Yx=/^((?!chrome|android).)*safari/i.test(ht),Zx=/firefox/i.test(ht)&&/windows/i.test(ht)});var rn,an,te,Eo,Ia,sn,ka,he,La,A=g(()=>{"use strict";n();ia();ue();sa();ca();pa();ft();ma();io();tn();wa();Tt();rn=5e4,an=1e9,te=18,Eo=4,Ia=1,sn="logout",ka="login",he="0",La="EGLD-000000"});var Ve,co=g(()=>{"use strict";n();Ve=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var xt={};K(xt,{css:()=>Ea,default:()=>kd});var Ea,kd,yt=g(()=>{"use strict";n();Ea=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ea));kd={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var bt={};K(bt,{css:()=>Da,default:()=>Ed});var Da,Ed,wt=g(()=>{"use strict";n();Da=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Da));Ed={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var Co,cn=g(()=>{"use strict";n();Co=()=>Date.now()/1e3});var Ma=g(()=>{"use strict";n()});var Oa=g(()=>{"use strict";n()});var It=g(()=>{"use strict";n();cn();Ma();Oa()});var kt={};K(kt,{clear:()=>Od,getItem:()=>Rd,localStorageKeys:()=>Ce,removeItem:()=>Md,setItem:()=>Dd});var Ce,pn,Dd,Rd,Md,Od,po=g(()=>{"use strict";n();It();Ce={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},pn=typeof localStorage!="undefined",Dd=({key:e,data:o,expires:t})=>{!pn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Rd=e=>{if(!pn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Co()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Md=e=>{!pn||localStorage.removeItem(String(e))},Od=()=>{!pn||localStorage.clear()}});var Lt={};K(Lt,{clear:()=>Wa,getItem:()=>Ba,removeItem:()=>Ua,setItem:()=>Fa,storage:()=>Fd});var Fa,Ba,Ua,Wa,Fd,Ga=g(()=>{"use strict";n();Fa=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ba=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ua=e=>sessionStorage.removeItem(String(e)),Wa=()=>sessionStorage.clear(),Fd={setItem:Fa,getItem:Ba,removeItem:Ua,clear:Wa}});var He,mo=g(()=>{"use strict";n();po();Ga();He={session:Lt,local:kt}});var Nt,D,X,R=g(()=>{"use strict";n();Nt=require("@reduxjs/toolkit");A();D=(0,Nt.createAction)(sn),X=(0,Nt.createAction)(ka,e=>({payload:e}))});var Pt,Va,$a,mn,Et,Ha,dn,Bd,Ct,$y,Ud,Wd,Hy,jy,qy,Gd,Vd,ln,_n=g(()=>{"use strict";n();Pt=require("@multiversx/sdk-core"),Va=require("@reduxjs/toolkit"),$a=require("redux-persist");A();mo();po();R();mn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:he},Et={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":mn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ha=(0,Va.createSlice)({name:"accountInfoSlice",initialState:Et,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Pt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:mn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(D,()=>(He.local.removeItem(Ce.loginExpiresAt),Et)),e.addCase(X,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new Pt.Address(s).hex()}),e.addCase($a.REHYDRATE,(o,t)=>{var f;if(!((f=t.payload)!=null&&f.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:Et.accounts,o.publicKey=_})}}),{setAccount:dn,setAddress:Bd,setAccountNonce:Ct,setAccountShard:$y,setLedgerAccount:Ud,updateLedgerAccount:Wd,setWalletConnectAccount:Hy,setIsAccountLoading:jy,setAccountLoadingError:qy,setWebsocketEvent:Gd,setWebsocketBatchEvent:Vd}=Ha.actions,ln=Ha.reducer});function Do(){return new Date().setHours(new Date().getHours()+24)}function Ro(e){He.local.setItem({key:Ce.loginExpiresAt,data:e,expires:e})}var Dt=g(()=>{"use strict";n();mo();po()});var qa,ja,za,nS,$d,Hd,Ka,tS,jd,Xa,rS,aS,iS,un,fn=g(()=>{"use strict";n();qa=require("@reduxjs/toolkit");Dt();P();R();ja={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},za=(0,qa.createSlice)({name:"loginInfoSlice",initialState:ja,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(D,()=>ja),e.addCase(X,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Ro(Do())})}}),{setLoginMethod:nS,setWalletConnectLogin:$d,setLedgerLogin:Hd,setTokenLogin:Ka,setTokenLoginSignature:tS,setWalletLogin:jd,invalidateLoginSession:Xa,setLogoutRoute:rS,setIsWalletConnectV2Initialized:aS,setWebviewLogin:iS}=za.actions,un=za.reducer});var Za,Ya,Ja,mS,qd,dS,zd,gn,hn=g(()=>{"use strict";n();Za=require("@reduxjs/toolkit");R();Ya={},Ja=(0,Za.createSlice)({name:"modalsSlice",initialState:Ya,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(D,()=>Ya)}}),{setTxSubmittedModal:mS,setNotificationModal:qd,clearTxSubmittedModal:dS,clearNotificationModal:zd}=Ja.actions,gn=Ja.reducer});var F,G=g(()=>{"use strict";n();co();F=()=>{if(!Ve())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Qa=g(()=>{"use strict";n();G()});var ei=g(()=>{"use strict";n();V()});var oi=g(()=>{"use strict";n();so()});var V=g(()=>{"use strict";n();Qa();ei();G();oi()});var Mo=g(()=>{"use strict";n();V()});var ti=g(()=>{"use strict";n();Mo()});function ri(e){return e[Math.floor(Math.random()*e.length)]}var ai=g(()=>{"use strict";n()});var Rt=g(()=>{"use strict";n();ft()});var Ie=g(()=>{"use strict";n();ti();ai();Rt()});var ii,si,ci,Mt,Xd,pi,$S,HS,Yd,Tn,xn=g(()=>{"use strict";n();ii=require("@reduxjs/toolkit"),si=h(require("lodash.omit")),ci=require("redux-persist");tn();R();Ie();Mt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Xd={network:Mt},pi=(0,ii.createSlice)({name:"appConfig",initialState:Xd,reducers:{initializeNetworkConfig:(e,o)=>{let t=ri(o.payload.walletConnectV2RelayAddresses),s=(0,si.default)(o.payload,"walletConnectV2RelayAddresses");e.network=v(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(D,o=>{o.network.customWalletAddress=void 0}),e.addCase(ci.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:$S,updateNetworkConfig:HS,setCustomWalletAddress:Yd}=pi.actions,Tn=pi.reducer});var mi,Ot,di,YS,ZS,JS,yn,Sn=g(()=>{"use strict";n();mi=require("@reduxjs/toolkit");O();R();Ot={isSigning:!1,signedSessions:{}},di=(0,mi.createSlice)({name:"signedMessageInfoSliceState",initialState:Ot,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Ot},extraReducers:e=>{e.addCase(D,()=>Ot)}}),{setSignSession:YS,clearSignedMessageInfo:ZS,setSignSessionState:JS}=di.actions,yn=di.reducer});var _i,ui,li,fi,Zd,Jd,ab,Qd,bn,wn=g(()=>{"use strict";n();_i=require("@reduxjs/toolkit"),ui=require("redux-persist");O();cn();R();li={customToasts:[],transactionToasts:[]},fi=(0,_i.createSlice)({name:"toastsSlice",initialState:li,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=v(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(v(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Co(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(D,()=>li),e.addCase(ui.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:Zd,removeCustomToast:Jd,addTransactionToast:ab,removeTransactionToast:Qd}=fi.actions,bn=fi.reducer});var gi,Bt,Ut,Wt,el,Ft,hi,pb,ol,Gt,vn,An=g(()=>{"use strict";n();gi=require("@reduxjs/toolkit");R();Bt="Transaction failed",Ut="Transaction successful",Wt="Processing transaction",el="Transaction submitted",Ft={},hi=(0,gi.createSlice)({name:"transactionsInfo",initialState:Ft,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Bt,successMessage:(s==null?void 0:s.successMessage)||Ut,processingMessage:(s==null?void 0:s.processingMessage)||Wt,submittedMessage:(s==null?void 0:s.submittedMessage)||el,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ft},extraReducers:e=>{e.addCase(D,()=>Ft)}}),{clearTransactionsInfo:pb,setTransactionsDisplayInfo:ol,clearTransactionsInfoForSessionId:Gt}=hi.actions,vn=hi.reducer});function _o(e){return e!=null&&(dl(e)||gl(e))}function uo(e){return e!=null&&(ll(e)||hl(e))}function fo(e){return e!=null&&(_l(e)||Tl(e))}function Ti(e){return e!=null&&(ul(e)||xl(e))}function Vt(e){return e!=null&&fl(e)}function dl(e){return e!=null&&nl.includes(e)}function ll(e){return e!=null&&tl.includes(e)}function _l(e){return e!=null&&rl.includes(e)}function ul(e){return e!=null&&al.includes(e)}function fl(e){return e!=null&&il.includes(e)}function gl(e){return e!=null&&sl.includes(e)}function hl(e){return e!=null&&cl.includes(e)}function Tl(e){return e!=null&&pl.includes(e)}function xl(e){return e!=null&&ml.includes(e)}var nl,tl,rl,al,il,sl,cl,pl,ml,go=g(()=>{"use strict";n();P();nl=["sent"],tl=["success"],rl=["fail","cancelled","timedOut"],al=["invalid"],il=["timedOut"],sl=["pending"],cl=["success"],pl=["fail","invalid"],ml=["not executed"]});var xi,yi,Oo,yl,Si,bi,wi,Sl,In,bl,wl,Tb,vl,Fo,$t,xb,kn,Ln=g(()=>{"use strict";n();xi=require("@reduxjs/toolkit"),yi=require("redux-persist");P();go();R();Oo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},yl={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Si=(0,xi.createSlice)({name:"transactionsSlice",initialState:Oo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,f;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},yl),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===t&&(e.transactionsToSign=Oo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var f,S,x,w,k,N,J,pe;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(S=(f=e.signedTransactions)==null?void 0:f[t])==null?void 0:S.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(C=>C.hash===p?v(u(u({},m!=null?m:{}),C),{status:s,errorMessage:c,inTransit:_}):C);let Q=(w=(x=e.signedTransactions[t])==null?void 0:x.transactions)==null?void 0:w.every(C=>uo(C.status)),ne=(N=(k=e.signedTransactions[t])==null?void 0:k.transactions)==null?void 0:N.some(C=>fo(C.status)),Se=(pe=(J=e.signedTransactions[t])==null?void 0:J.transactions)==null?void 0:pe.every(C=>Ti(C.status));Q&&(e.signedTransactions[t].status="success"),ne&&(e.signedTransactions[t].status="fail"),Se&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Oo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Oo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(D,()=>Oo),e.addCase(yi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((_,[l,f])=>{let S=new Date(l),x=new Date;return x.setHours(x.getHours()+5),x-S>0||(_[l]=f),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:bi,updateSignedTransactions:wi,setTransactionsToSign:Sl,clearAllTransactionsToSign:In,clearAllSignedTransactions:bl,clearSignedTransaction:wl,clearTransactionToSign:Tb,setSignTransactionsError:vl,setSignTransactionsCancelMessage:Fo,moveTransactionsToSignedState:$t,updateSignedTransactionsCustomTransactionInformation:xb}=Si.actions,kn=Si.reducer});var vi,Ht,Ai,wb,vb,Al,Ab,Nn,En=g(()=>{"use strict";n();vi=require("@reduxjs/toolkit");R();Ht={},Ai=(0,vi.createSlice)({name:"batchTransactionsSlice",initialState:Ht,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ht},extraReducers:e=>{e.addCase(D,()=>Ht)}}),{setBatchTransactions:wb,updateBatchTransactions:vb,clearBatchTransactions:Al,clearAllBatchTransactions:Ab}=Ai.actions,Nn=Ai.reducer});var ki,Ii,Li,Nb,Ni,jt=g(()=>{"use strict";n();ki=require("@reduxjs/toolkit");R();Ii={},Li=(0,ki.createSlice)({name:"dappConfigSlice",initialState:Ii,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(D,()=>Ii)}}),{setDappConfig:Nb}=Li.actions,Ni=Li.reducer});var E=g(()=>{"use strict";n();_n();fn();hn();xn();Sn();wn();An();Ln();En();jt()});var qt=g(()=>{"use strict";n()});var Ci,Nl,El,je,Dn=g(()=>{"use strict";n();Ci=require("@reduxjs/toolkit");qt();_n();En();jt();fn();hn();xn();Sn();wn();An();Ln();Nl={["account"]:ln,["dappConfig"]:Ni,["loginInfo"]:un,["modals"]:gn,["networkConfig"]:Tn,["signedMessageInfo"]:yn,["toasts"]:bn,["transactionsInfo"]:vn,["transactions"]:kn,["batchTransactions"]:Nn},El=(e={})=>(0,Ci.combineReducers)(u(u({},Nl),e)),je=El});var Oi={};K(Oi,{default:()=>ql,sessionStorageReducers:()=>zt});function ke(e,o=[]){return{key:e,version:1,storage:Ri.default,blacklist:o}}var z,Di,Ri,Pl,Bo,Cl,Dl,Rl,Ml,Ol,Fl,Bl,Ul,Wl,Gl,Mi,Vl,zt,$l,Hl,jl,ql,Fi=g(()=>{"use strict";n();z=require("redux-persist"),Di=h(require("redux-persist/lib/storage")),Ri=h(require("redux-persist/lib/storage/session"));Dn();E();_n();En();fn();hn();xn();Sn();wn();An();Ln();qt();Pl={persistReducersStorageType:"localStorage"},Bo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Cl=ke(Bo["account"]),Dl=ke(Bo["loginInfo"]),Rl=ke(Bo["modals"]),Ml=ke(Bo["networkConfig"]),Ol={2:e=>v(u({},e),{networkConfig:Mt})};Fl=ke("sdk-dapp-transactionsInfo"),Bl=ke("sdk-dapp-transactions",["transactionsToSign"]),Ul=ke("sdk-dapp-batchTransactions",["batchTransactions"]),Wl=ke("sdk-dapp-toasts"),Gl=ke("sdk-dapp-signedMessageInfo"),Mi={key:"sdk-dapp-store",version:2,storage:Di.default,whitelist:Object.keys(Bo),migrate:(0,z.createMigrate)(Ol,{debug:!1})},Vl=v(u({},Mi),{whitelist:[]}),zt={["toasts"]:(0,z.persistReducer)(Wl,bn),["transactions"]:(0,z.persistReducer)(Bl,kn),["transactionsInfo"]:(0,z.persistReducer)(Fl,vn),["batchTransactions"]:(0,z.persistReducer)(Ul,Nn),["signedMessageInfo"]:(0,z.persistReducer)(Gl,yn)},$l=v(u({},zt),{["account"]:(0,z.persistReducer)(Cl,ln),["loginInfo"]:(0,z.persistReducer)(Dl,un),["modals"]:(0,z.persistReducer)(Rl,gn),["networkConfig"]:(0,z.persistReducer)(Ml,Tn)}),Hl=Pl.persistReducersStorageType==="localStorage",jl=Hl?(0,z.persistReducer)(Mi,je(zt)):(0,z.persistReducer)(Vl,je($l)),ql=jl});var Bi={};K(Bi,{default:()=>zl});var zl,Ui=g(()=>{"use strict";n();Dn();zl=je()});var Wi={};K(Wi,{default:()=>Xl});var oe,Kl,Xl,Gi=g(()=>{"use strict";n();oe=require("redux-persist"),Kl=[oe.FLUSH,oe.REHYDRATE,oe.PAUSE,oe.PERSIST,oe.PURGE,oe.REGISTER],Xl=Kl});var Hi={};K(Hi,{default:()=>$i});function $i(e){return(0,Vi.persistStore)(e)}var Vi,ji=g(()=>{"use strict";n();Vi=require("redux-persist")});var Xs=b((l2,Ks)=>{n();var Uu=typeof a=="object"&&a&&a.Object===Object&&a;Ks.exports=Uu});var Ho=b((_2,Ys)=>{n();var Wu=Xs(),Gu=typeof self=="object"&&self&&self.Object===Object&&self,Vu=Wu||Gu||Function("return this")();Ys.exports=Vu});var lr=b((u2,Zs)=>{n();var $u=Ho(),Hu=$u.Symbol;Zs.exports=Hu});var oc=b((f2,ec)=>{n();var Js=lr(),Qs=Object.prototype,ju=Qs.hasOwnProperty,qu=Qs.toString,jo=Js?Js.toStringTag:void 0;function zu(e){var o=ju.call(e,jo),t=e[jo];try{e[jo]=void 0;var s=!0}catch(p){}var c=qu.call(e);return s&&(o?e[jo]=t:delete e[jo]),c}ec.exports=zu});var tc=b((g2,nc)=>{n();var Ku=Object.prototype,Xu=Ku.toString;function Yu(e){return Xu.call(e)}nc.exports=Yu});var _r=b((h2,ic)=>{n();var rc=lr(),Zu=oc(),Ju=tc(),Qu="[object Null]",ef="[object Undefined]",ac=rc?rc.toStringTag:void 0;function of(e){return e==null?e===void 0?ef:Qu:ac&&ac in Object(e)?Zu(e):Ju(e)}ic.exports=of});var cc=b((T2,sc)=>{n();var nf=Array.isArray;sc.exports=nf});var mc=b((x2,pc)=>{n();function tf(e){return e!=null&&typeof e=="object"}pc.exports=tf});var lc=b((y2,dc)=>{n();var rf=_r(),af=cc(),sf=mc(),cf="[object String]";function pf(e){return typeof e=="string"||!af(e)&&sf(e)&&rf(e)==cf}dc.exports=pf});var Xn=b((xM,hc)=>{n();function Lf(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}hc.exports=Lf});var xc=b((yM,Tc)=>{n();var Nf=_r(),Ef=Xn(),Pf="[object AsyncFunction]",Cf="[object Function]",Df="[object GeneratorFunction]",Rf="[object Proxy]";function Mf(e){if(!Ef(e))return!1;var o=Nf(e);return o==Cf||o==Df||o==Pf||o==Rf}Tc.exports=Mf});var Sc=b((SM,yc)=>{n();var Of=Ho(),Ff=Of["__core-js_shared__"];yc.exports=Ff});var vc=b((bM,wc)=>{n();var hr=Sc(),bc=function(){var e=/[^.]+$/.exec(hr&&hr.keys&&hr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Bf(e){return!!bc&&bc in e}wc.exports=Bf});var Ic=b((wM,Ac)=>{n();var Uf=Function.prototype,Wf=Uf.toString;function Gf(e){if(e!=null){try{return Wf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Ac.exports=Gf});var Lc=b((vM,kc)=>{n();var Vf=xc(),$f=vc(),Hf=Xn(),jf=Ic(),qf=/[\\^$.*+?()[\]{}|]/g,zf=/^\[object .+?Constructor\]$/,Kf=Function.prototype,Xf=Object.prototype,Yf=Kf.toString,Zf=Xf.hasOwnProperty,Jf=RegExp("^"+Yf.call(Zf).replace(qf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Qf(e){if(!Hf(e)||$f(e))return!1;var o=Vf(e)?Jf:zf;return o.test(jf(e))}kc.exports=Qf});var Ec=b((AM,Nc)=>{n();function eg(e,o){return e==null?void 0:e[o]}Nc.exports=eg});var Yn=b((IM,Pc)=>{n();var og=Lc(),ng=Ec();function tg(e,o){var t=ng(e,o);return og(t)?t:void 0}Pc.exports=tg});var qo=b((kM,Cc)=>{n();var rg=Yn(),ag=rg(Object,"create");Cc.exports=ag});var Mc=b((LM,Rc)=>{n();var Dc=qo();function ig(){this.__data__=Dc?Dc(null):{},this.size=0}Rc.exports=ig});var Fc=b((NM,Oc)=>{n();function sg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Oc.exports=sg});var Uc=b((EM,Bc)=>{n();var cg=qo(),pg="__lodash_hash_undefined__",mg=Object.prototype,dg=mg.hasOwnProperty;function lg(e){var o=this.__data__;if(cg){var t=o[e];return t===pg?void 0:t}return dg.call(o,e)?o[e]:void 0}Bc.exports=lg});var Gc=b((PM,Wc)=>{n();var _g=qo(),ug=Object.prototype,fg=ug.hasOwnProperty;function gg(e){var o=this.__data__;return _g?o[e]!==void 0:fg.call(o,e)}Wc.exports=gg});var $c=b((CM,Vc)=>{n();var hg=qo(),Tg="__lodash_hash_undefined__";function xg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=hg&&o===void 0?Tg:o,this}Vc.exports=xg});var jc=b((DM,Hc)=>{n();var yg=Mc(),Sg=Fc(),bg=Uc(),wg=Gc(),vg=$c();function wo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}wo.prototype.clear=yg;wo.prototype.delete=Sg;wo.prototype.get=bg;wo.prototype.has=wg;wo.prototype.set=vg;Hc.exports=wo});var zc=b((RM,qc)=>{n();function Ag(){this.__data__=[],this.size=0}qc.exports=Ag});var Xc=b((MM,Kc)=>{n();function Ig(e,o){return e===o||e!==e&&o!==o}Kc.exports=Ig});var zo=b((OM,Yc)=>{n();var kg=Xc();function Lg(e,o){for(var t=e.length;t--;)if(kg(e[t][0],o))return t;return-1}Yc.exports=Lg});var Jc=b((FM,Zc)=>{n();var Ng=zo(),Eg=Array.prototype,Pg=Eg.splice;function Cg(e){var o=this.__data__,t=Ng(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():Pg.call(o,t,1),--this.size,!0}Zc.exports=Cg});var ep=b((BM,Qc)=>{n();var Dg=zo();function Rg(e){var o=this.__data__,t=Dg(o,e);return t<0?void 0:o[t][1]}Qc.exports=Rg});var np=b((UM,op)=>{n();var Mg=zo();function Og(e){return Mg(this.__data__,e)>-1}op.exports=Og});var rp=b((WM,tp)=>{n();var Fg=zo();function Bg(e,o){var t=this.__data__,s=Fg(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}tp.exports=Bg});var ip=b((GM,ap)=>{n();var Ug=zc(),Wg=Jc(),Gg=ep(),Vg=np(),$g=rp();function vo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}vo.prototype.clear=Ug;vo.prototype.delete=Wg;vo.prototype.get=Gg;vo.prototype.has=Vg;vo.prototype.set=$g;ap.exports=vo});var cp=b((VM,sp)=>{n();var Hg=Yn(),jg=Ho(),qg=Hg(jg,"Map");sp.exports=qg});var dp=b(($M,mp)=>{n();var pp=jc(),zg=ip(),Kg=cp();function Xg(){this.size=0,this.__data__={hash:new pp,map:new(Kg||zg),string:new pp}}mp.exports=Xg});var _p=b((HM,lp)=>{n();function Yg(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}lp.exports=Yg});var Ko=b((jM,up)=>{n();var Zg=_p();function Jg(e,o){var t=e.__data__;return Zg(o)?t[typeof o=="string"?"string":"hash"]:t.map}up.exports=Jg});var gp=b((qM,fp)=>{n();var Qg=Ko();function eh(e){var o=Qg(this,e).delete(e);return this.size-=o?1:0,o}fp.exports=eh});var Tp=b((zM,hp)=>{n();var oh=Ko();function nh(e){return oh(this,e).get(e)}hp.exports=nh});var yp=b((KM,xp)=>{n();var th=Ko();function rh(e){return th(this,e).has(e)}xp.exports=rh});var bp=b((XM,Sp)=>{n();var ah=Ko();function ih(e,o){var t=ah(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Sp.exports=ih});var vp=b((YM,wp)=>{n();var sh=dp(),ch=gp(),ph=Tp(),mh=yp(),dh=bp();function Ao(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Ao.prototype.clear=sh;Ao.prototype.delete=ch;Ao.prototype.get=ph;Ao.prototype.has=mh;Ao.prototype.set=dh;wp.exports=Ao});var Ip=b((ZM,Ap)=>{n();var lh="__lodash_hash_undefined__";function _h(e){return this.__data__.set(e,lh),this}Ap.exports=_h});var Lp=b((JM,kp)=>{n();function uh(e){return this.__data__.has(e)}kp.exports=uh});var Ep=b((QM,Np)=>{n();var fh=vp(),gh=Ip(),hh=Lp();function Zn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new fh;++o<t;)this.add(e[o])}Zn.prototype.add=Zn.prototype.push=gh;Zn.prototype.has=hh;Np.exports=Zn});var Cp=b((e5,Pp)=>{n();function Th(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Pp.exports=Th});var Rp=b((o5,Dp)=>{n();function xh(e){return e!==e}Dp.exports=xh});var Op=b((n5,Mp)=>{n();function yh(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Mp.exports=yh});var Bp=b((t5,Fp)=>{n();var Sh=Cp(),bh=Rp(),wh=Op();function vh(e,o,t){return o===o?wh(e,o,t):Sh(e,bh,t)}Fp.exports=vh});var Wp=b((r5,Up)=>{n();var Ah=Bp();function Ih(e,o){var t=e==null?0:e.length;return!!t&&Ah(e,o,0)>-1}Up.exports=Ih});var Vp=b((a5,Gp)=>{n();function kh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}Gp.exports=kh});var Hp=b((i5,$p)=>{n();function Lh(e,o){return e.has(o)}$p.exports=Lh});var qp=b((s5,jp)=>{n();var Nh=Yn(),Eh=Ho(),Ph=Nh(Eh,"Set");jp.exports=Ph});var Kp=b((c5,zp)=>{n();function Ch(){}zp.exports=Ch});var Tr=b((p5,Xp)=>{n();function Dh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Xp.exports=Dh});var Zp=b((m5,Yp)=>{n();var xr=qp(),Rh=Kp(),Mh=Tr(),Oh=1/0,Fh=xr&&1/Mh(new xr([,-0]))[1]==Oh?function(e){return new xr(e)}:Rh;Yp.exports=Fh});var Qp=b((d5,Jp)=>{n();var Bh=Ep(),Uh=Wp(),Wh=Vp(),Gh=Hp(),Vh=Zp(),$h=Tr(),Hh=200;function jh(e,o,t){var s=-1,c=Uh,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=Wh;else if(p>=Hh){var f=o?null:Vh(e);if(f)return $h(f);m=!1,c=Gh,l=new Bh}else l=o?[]:_;e:for(;++s<p;){var S=e[s],x=o?o(S):S;if(S=t||S!==0?S:0,m&&x===x){for(var w=l.length;w--;)if(l[w]===x)continue e;o&&l.push(x),_.push(S)}else c(l,x,t)||(l!==_&&l.push(x),_.push(S))}return _}Jp.exports=jh});var om=b((l5,em)=>{n();var qh=Qp();function zh(e){return e&&e.length?qh(e):[]}em.exports=zh});var Ne={};K(Ne,{css:()=>lm,default:()=>NT});var lm,NT,Ee=g(()=>{"use strict";n();lm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lm));NT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Lr={};K(Lr,{css:()=>Im,default:()=>ZT});var Im,ZT,Nr=g(()=>{"use strict";n();Im=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Im));ZT={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var Pr={};K(Pr,{css:()=>Pm,default:()=>ex});var Pm,ex,Cr=g(()=>{"use strict";n();Pm=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pm));ex={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var Dr={};K(Dr,{css:()=>Mm,default:()=>tx});var Mm,tx,Rr=g(()=>{"use strict";n();Mm=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mm));tx={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var ix={};K(ix,{ConfirmAmountData:()=>nx,ConfirmAmountLabel:()=>Cd,ConfirmAmountNftSft:()=>ax});module.exports=H(ix);n();n();n();var $e=h(require("react")),Ra=h(require("bignumber.js"));A();n();var Ca=h(require("react"));n();var Po=h(require("react"));n();co();var Na=()=>!Ve();var Ld=()=>T(void 0,null,function*(){return yield Promise.resolve().then(()=>(yt(),xt))}),Nd=()=>(yt(),H(xt)).default,St=Na();function Pa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=Po.default.useState(St?void 0:Nd()),[p,m]=Po.default.useState(St||t==null?void 0:t()),_=()=>T(this,null,function*(){(e?e():Ld()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Po.useEffect)(()=>{St&&_()},[]),{globalStyles:s,styles:p}}function U(e,o){return t=>{let{globalStyles:s,styles:c}=Pa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Ca.default.createElement(e,v(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var Pd=({amount:e,styles:o,type:t,identifier:s})=>{let c=new Ra.default(e),p=c.isZero(),m=c.isEqualTo(1)?"SFT":"SFTs",_=c.toNumber().toLocaleString("en"),l=`${_} ${s}`;return p?$e.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are using"):t==="NonFungibleESDT"?$e.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending an NFT"):t==="SemiFungibleESDT"?$e.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},$e.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelText},"You are sending"),$e.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":l},_," ",m)):$e.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending")},Cd=U(Pd,{ssrStyles:()=>Promise.resolve().then(()=>(wt(),bt)),clientStyles:()=>(wt(),H(bt)).default});n();n();var ye=h(require("react")),Cm=require("@fortawesome/free-solid-svg-icons"),Dm=require("@fortawesome/react-fontawesome"),Rm=h(require("classnames"));A();n();n();n();var Zi=require("react"),ho=require("react-redux");n();var Kt=require("@reduxjs/toolkit"),Xi=require("react-redux/lib/utils/Subscription");E();n();var Ei=h(require("lodash.throttle"));A();E();Dt();mo();po();var Il=[sn],Pn=!1,kl=(0,Ei.default)(()=>{Ro(Do())},5e3),Pi=e=>o=>t=>{if(Il.includes(t.type))return o(t);let s=e.getState(),c=He.local.getItem(Ce.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return Ro(Do());let m=Date.now();return c-m<0&&!Pn?setTimeout(()=>{Pn=!0,e.dispatch(Xa())},1e3):(Pn&&(Pn=!1),kl()),o(t)};n();n();function Cn(){return typeof sessionStorage!="undefined"}var qi=Cn()?(Fi(),H(Oi)).default:(Ui(),H(Bi)).default,zi=Cn()?(Gi(),H(Wi)).default:[],Ki=Cn()?(ji(),H(Hi)).default:e=>e;Dn();var I=(0,Kt.configureStore)({reducer:qi,middleware:e=>e({serializableCheck:{ignoredActions:[...zi,Ct.type,dn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Pi)}),Yi=(0,Xi.createSubscription)(I),k0=Ki(I),L0=(0,Kt.configureStore)({reducer:je});var Yl={store:I,subscription:Yi},Xt=(0,Zi.createContext)(Yl),C0=(0,ho.createStoreHook)(Xt),$=(0,ho.createDispatchHook)(Xt),L=(0,ho.createSelectorHook)(Xt);n();n();E();n();var Ji=h(require("lodash.isequal")),Rn=require("reselect"),y=(0,Rn.createSelectorCreator)(Rn.defaultMemoize,Ji.default);var Te=e=>e.account,qe=y(Te,e=>e.address),To=y(Te,qe,(e,o)=>o in e.accounts?e.accounts[o]:mn),Zl=y(Te,To,(e,o)=>{let c=e,{accounts:t}=c,s=be(c,["accounts"]);return v(u({},s),{address:o.address,account:o})}),F0=y(To,e=>e.balance),Jl=y(To,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),B0=y(Te,e=>e.shard),Ql=y(Te,e=>e.ledgerAccount),U0=y(Te,e=>e.walletConnectAccount),W0=y(Te,e=>e.isAccountLoading),G0=y(Te,e=>e.accountLoadingError),e_=y(Te,e=>e.websocketEvent),o_=y(Te,e=>e.websocketBatchEvent);n();var Qi=e=>e.dappConfig,H0=y(Qi,e=>e.shouldUseWebViewProvider);n();var Y=e=>e.loginInfo,n_=y(Y,e=>e.loginMethod),Mn=y(Y,qe,(e,o)=>Boolean(o)),K0=y(Y,e=>e.walletConnectLogin),t_=y(Y,e=>e.ledgerLogin),r_=y(Y,e=>e.walletLogin),X0=y(Y,e=>e.isLoginSessionInvalid),Yt=y(Y,e=>e.tokenLogin),es=y(Y,e=>e.logoutRoute),a_=y(Y,e=>e.isWalletConnectV2Initialized);n();var os=e=>e.modals,J0=y(os,e=>e.txSubmittedModal),i_=y(os,e=>e.notificationModal);n();var re=e=>e.networkConfig,On=y(re,e=>e.network.chainId),s_=y(re,e=>e.network.roundDuration),ow=y(re,e=>e.network.walletConnectBridgeAddress),c_=y(re,e=>e.network.walletConnectV2RelayAddress),p_=y(re,e=>e.network.walletConnectV2ProjectId),m_=y(re,e=>e.network.walletConnectV2Options),d_=y(re,e=>e.network.walletConnectDeepLink),Z=y(re,e=>e.network),ns=y(Z,e=>e.apiAddress),ts=y(Z,e=>e.explorerAddress),rs=y(Z,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),l_=y(Z,e=>e.xAliasAddress),as=y(Z,e=>e.egldLabel);n();var Fn=e=>e.signedMessageInfo,rw=y(Fn,e=>e.isSigning),aw=y(Fn,e=>e.errorMessage),iw=y(Fn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),sw=y(Fn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var is=e=>e.toasts,__=y(is,e=>e.customToasts),ss=y(is,e=>e.transactionToasts);n();E();var cs={errorMessage:Bt,successMessage:Ut,processingMessage:Wt},ps=e=>e.transactionsInfo,u_=y(ps,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||cs);n();n();var xe=require("@multiversx/sdk-core");A();n();var Jt=require("@multiversx/sdk-core/out");n();n();function Zt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var ms=e=>{let o=e!=null?e:"";return Zt(o)?Jt.TransactionPayload.fromEncoded(o):new Jt.TransactionPayload(o)};n();A();var Uo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ut).some(t=>e.startsWith(t)):!1;function Bn(e){var s,c,p;let o=u({},e);Uo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new xe.Transaction(u(u(v(u(v(u({value:o.value.valueOf(),data:ms(o.data),nonce:o.nonce.valueOf(),receiver:new xe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new xe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:rn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:an,chainID:o.chainID.valueOf(),version:new xe.TransactionVersion((p=o.version)!=null?p:Ia)}),o.options?{options:new xe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new xe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var T_=require("@multiversx/sdk-core/out");n();A();n();var ds=require("@multiversx/sdk-core");O();n();var x_=require("@multiversx/sdk-core");n();n();n();var y_=require("@multiversx/sdk-core"),S_=h(require("bignumber.js"));P();n();n();n();var ae="accounts";var Un="blocks",us="code",fs="collections";var gs="contracts";var hs="identities";var Ts="locked-accounts",xs="logs",ys="miniblocks";var Wn="nfts",Ss="nodes",er="providers",bs="roles",or="sc-results";var ze="tokens";var ie="transactions";var Wo={shard:e=>`/${Un}?shard=${e}`,receiverShard:e=>`/${ie}?receivershard=${e}`,senderShard:e=>`/${ie}?sendershard=${e}`,transactionDetails:e=>`/${ie}/${e}`,transactionDetailsScResults:e=>`/${ie}/${e}/${or}`,transactionDetailsLogs:e=>`/${ie}/${e}/${xs}`,nodeDetails:e=>`/${Ss}/${e}`,accountDetails:e=>`/${ae}/${e}`,accountDetailsContractCode:e=>`/${ae}/${e}/${us}`,accountDetailsTokens:e=>`/${ae}/${e}/${ze}`,accountDetailsNfts:e=>`/${ae}/${e}/${Wn}`,accountDetailsScResults:e=>`/${ae}/${e}/${or}`,accountDetailsContracts:e=>`/${ae}/${e}/${gs}`,identityDetails:e=>`/${hs}/${e}`,tokenDetails:e=>`/${ze}/${e}`,tokenDetailsAccounts:e=>`/${ze}/${e}/${ae}`,tokenDetailsLockedAccounts:e=>`/${ze}/${e}/${Ts}`,tokenDetailsRoles:e=>`/${ze}/${e}/${bs}`,collectionDetails:e=>`/${fs}/${e}`,nftDetails:e=>`/${Wn}/${e}`,providerDetails:e=>`/${er}/${e}`,providerDetailsTransactions:e=>`/${er}/${e}/${ie}`,miniblockDetails:e=>`/${ys}/${e}`};n();n();n();n();q();n();var ws=!1;function v_(e){ws||(console.error(e),ws=!0)}function nr({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(v_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();q();n();n();n();var A_=h(require("bignumber.js"));A();n();var Is=require("@multiversx/sdk-core"),Re=h(require("bignumber.js"));A();n();var As=h(require("bignumber.js")),tr=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let s=new As.default(t),c=o?0:-1;return s.toString(10)===t&&s.comparedTo(0)>=c};n();function Le(e){return{if:function(o){return o?{then:t=>t instanceof Function?Le(t(e)):Le(t)}:{then:()=>Le(e)}},then:o=>o instanceof Function?Le(o(e)):Le(o),valueOf:function(){return e}}}Re.default.config({ROUNDING_MODE:Re.default.ROUND_FLOOR});function Me({input:e,decimals:o=te,digits:t=Eo,showLastNonZeroDecimal:s=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!tr(e,!1))throw new Error("Invalid input");let m=new Re.default(e).isNegative(),_=e;return m&&(_=e.substring(1)),Le(_).then(()=>Is.TokenTransfer.fungibleFromBigInteger("",_,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let f=new Re.default(l);if(f.isZero())return he;let S=f.toString(10),[x,w]=S.split("."),k=new Re.default(w||0),N=Le(0).if(Boolean(w&&s)).then(()=>Math.max(w.length,t)).if(k.isZero()&&!s).then(0).if(Boolean(w&&!s)).then(()=>Math.min(w.length,t)).valueOf(),J=w&&t>=1&&t<=w.length&&k.isGreaterThan(0)&&new Re.default(w.substring(0,t)).isZero(),pe=f.toFormat(N);return Le(S).if(p).then(pe).if(Boolean(J)).then(ne=>{let Se=new Re.default(x).isZero(),[C,Qe]=ne.split("."),eo=new Array(t-1).fill(0),et=[...eo,0].join(""),ot=[...eo,1].join("");return Se?c?`<${C}.${ot}`:s?`${C}.${Qe}`:C:`${C}.${et}`}).if(Boolean(!J&&w)).then(ne=>{let[Se]=ne.split("."),C=w.substring(0,N);if(s){let Qe=t-C.length;if(Qe>0){let eo=Array(Qe).fill(0).join("");return C=`${C}${eo}`,`${Se}.${C}`}return ne}return C?`${Se}.${C}`:Se}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}n();n();n();A();n();n();n();A();n();A();n();var I_=require("@multiversx/sdk-core");A();n();var Go=require("@multiversx/sdk-core"),N_=h(require("bignumber.js"));A();n();n();var k_=h(require("bignumber.js"));A();n();A();n();n();var rr=({amount:e,usd:o,decimals:t=2,addEqualSign:s})=>{let c=(parseFloat(e)*o).toFixed(t),p=parseFloat(c).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),m=parseFloat(e)>0?"\u2248":"=";return`${s?`${m} `:""}$${p}`};n();n();n();n();A();n();A();n();A();n();q();var E_=["reDelegateRewards","claimRewards","unBond"],P_=["wrapEgld","unwrapEgld"],C_=["unStake"],D_=["unDelegate"];n();n();n();A();n();var F_=h(require("bignumber.js"));n();n();q();n();var U_=h(require("bignumber.js"));n();n();n();n();var V_=h(require("bignumber.js"));O();n();n();n();n();P();n();var q_=require("@multiversx/sdk-web-wallet-provider");A();n();var H_=h(require("qs"));n();V();co();n();co();var kk={search:Ve()?window.location.search:"",removeParams:[]};n();n();n();G();n();q();n();n();G();n();var z_=h(require("linkifyjs"));n();A();n();var K_=h(require("bignumber.js"));n();O();n();n();P();n();P();n();n();n();q();n();q();n();var X_=h(require("bignumber.js"));A();q();n();q();n();var Ns=require("react");O();n();n();q();n();n();var Y_=require("@multiversx/sdk-core/out"),Z_=h(require("bignumber.js"));q();n();O();n();n();O();var T1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Es=require("react");O();G();n();var Q_=require("react");q();var I1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];go();n();var Vn=e=>e.transactions,xo=y(Vn,e=>e.signedTransactions),eu=y(Vn,e=>e.signTransactionsError),Ps=y(Vn,e=>e.signTransactionsCancelMessage),$n=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),Cs=y(xo,$n(_o)),Ds=y(xo,$n(uo)),Rs=y(xo,$n(fo)),ou=y(xo,$n(Vt)),Ms=y(Vn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:v(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Bn(t)))||[]})}),nu=y(xo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var yo=()=>L(re);n();var Os=require("react");n();E();n();n();n();n();n();n();n();n();var ru=require("@multiversx/sdk-extension-provider"),au=require("@multiversx/sdk-hw-provider"),iu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),su=require("@multiversx/sdk-opera-provider"),cu=require("@multiversx/sdk-passkey-provider/out"),pu=require("@multiversx/sdk-web-wallet-provider");A();Pe();n();var So=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Fs=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var se=e=>`Unable to perform ${e}, Provider not initialized`,Hn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(se("getAccount"))}setAccount(o){throw new Error(se(`setAccount: ${o}`))}login(o){throw new Error(se(`login with options: ${o}`))}logout(o){throw new Error(se(`logout with options: ${o}`))}getAddress(){throw new Error(se("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(se(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(se(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(se(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(se(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(se(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(se(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Bs=new Hn;E();n();n();n();n();n();var Us=require("@lifeomic/axios-fetch"),sr=h(require("axios")),cr=(0,Us.buildAxiosFetch)(sr.default),pr=(e,o)=>T(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function mu(e,o,t){return T(this,null,function*(){try{let s=yield cr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return pr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function du(e,o){return T(this,null,function*(){try{let t=yield cr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return pr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function lu(e,o,t){return T(this,null,function*(){try{let s=yield cr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return pr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var bo=sr.default.create();bo.get=du;bo.post=mu;bo.patch=lu;n();n();var _u=h(require("axios"));n();var uu=h(require("swr"));n();P();n();n();n();G();n();go();n();n();n();var fu=h(require("axios"));n();var hu=h(require("axios"));io();n();A();n();var Tu=h(require("axios"));n();var yu=h(require("axios"));n();n();var Su=h(require("axios"));n();var bu=h(require("axios"));n();n();E();P();n();n();n();n();G();n();R();O();n();E();n();var $s=require("@multiversx/sdk-core");O();V();n();go();n();E();P();n();E();O();n();n();n();O();n();tn();n();n();n();n();var Au=h(require("swr"));n();n();n();n();var Hs=require("react");n();n();var Iu=require("react"),ku=require("@multiversx/sdk-web-wallet-provider"),Lu=require("@multiversx/sdk-web-wallet-provider"),Nu=h(require("qs"));A();E();P();gt();G();var dR=F();n();var gc=require("react"),gr=require("@multiversx/sdk-core");n();A();Rt();n();n();n();n();n();n();n();n();n();n();io();n();var Du=h(require("axios"));n();var Mu=h(require("axios"));n();io();n();io();n();n();n();n();var Fu=require("@multiversx/sdk-opera-provider");n();var Bu=require("@multiversx/sdk-extension-provider");n();Pe();n();n();n();n();var mf=h(lc());n();var uf=require("@multiversx/sdk-native-auth-client");n();var fc=h(require("axios"));n();n();n();function _c(e){return T(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var uc=(e,o,t,s=0)=>T(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield _c(o.delay)),yield uc(e,o,t,s+1)):null}}),ur=(e,o={retries:5,delay:500})=>(...t)=>T(void 0,null,function*(){return yield uc(e,o,t)});var df=4;var C2=ur((e,o,t)=>T(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield fc.default.get(`${e}/${Un}?from=${df}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();cn();n();n();G();var V2={origin:F().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var gf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var hf=require("@multiversx/sdk-passkey-provider/out");A();G();n();n();n();var wf=require("react"),vf=require("@multiversx/sdk-hw-provider");n();R();O();n();Mo();mo();po();V();n();n();var am=require("react"),im=require("@multiversx/sdk-core"),dT=require("@multiversx/sdk-extension-provider"),lT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),_T=require("@multiversx/sdk-passkey-provider/out"),uT=h(om());A();n();n();n();n();n();n();n();n();n();n();var Xo=h(require("react"));var L5=(0,Xo.createContext)({}),N5=I.getState();n();var tm=h(require("react"));n();var yr=h(require("react")),Kh=h(require("axios"));n();n();Pe();n();n();var eT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),oT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");R();n();R();E();O();n();n();E();n();V();n();E();O();n();n();var Yh=require("@multiversx/sdk-core"),Zh=h(require("bignumber.js"));A();n();var Jh=h(require("bignumber.js"));A();E();P();V();G();n();var rm=require("react"),aT=require("@multiversx/sdk-extension-provider"),iT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),sT=require("@multiversx/sdk-passkey-provider/out");Pe();E();n();E();O();Mo();G();n();ue();E();n();n();var gT=require("react");n();n();P();go();n();var sm=require("react");n();n();var TT=require("react"),xT=require("@multiversx/sdk-extension-provider");ue();R();P();n();Ie();V();V();n();n();Pe();O();n();var hT=require("react"),cm=require("@multiversx/sdk-core");E();n();var yT=require("react"),ST=require("@multiversx/sdk-opera-provider");ue();R();P();Ie();V();G();n();var bT=require("react");Tt();ue();Pe();R();E();P();Ie();G();n();var kT=require("react");ue();E();n();n();It();n();n();var wT=h(require("platform"));co();n();n();n();n();n();n();n();so();P();n();n();var vT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Mo();mo();n();n();n();E();n();n();var AT=h(require("axios"));V();n();n();var IT=h(Xn());so();var pm,mm,dm,xW=(dm=(mm=(pm=ge.safeWindow)==null?void 0:pm.location)==null?void 0:mm.origin)==null?void 0:dm.includes("localhost");n();G();n();n();var OT=require("react");A();n();n();A();n();n();n();var LT=h(require("bignumber.js"));n();n();n();var Fe=h(require("react")),Tm=require("react"),xm=require("react"),Ar=h(require("classnames")),ym=require("react-dom");A();n();var _m=h(require("react")),um=h(require("classnames"));var ET=({className:e,children:o,styles:t})=>_m.default.createElement("div",{className:(0,um.default)(t==null?void 0:t.dappModalBody,e)},o),Sr=U(ET,{ssrStyles:()=>Promise.resolve().then(()=>(Ee(),Ne)),clientStyles:()=>(Ee(),H(Ne)).default});n();var br=h(require("react")),fm=h(require("classnames"));var PT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?br.default.createElement("div",{className:(0,fm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:br.default.createElement("div",null,s)):null,wr=U(PT,{ssrStyles:()=>Promise.resolve().then(()=>(Ee(),Ne)),clientStyles:()=>(Ee(),H(Ne)).default});n();var Lo=h(require("react")),gm=require("@fortawesome/free-solid-svg-icons"),hm=require("@fortawesome/react-fontawesome"),Zo=h(require("classnames"));var CT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?Lo.default.createElement("div",{className:(0,Zo.default)(l==null?void 0:l.dappModalHeader,s)},t):Lo.default.createElement("div",{className:(0,Zo.default)(l==null?void 0:l.dappModalHeader,s)},Lo.default.createElement("div",{className:(0,Zo.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Lo.default.createElement("button",{onClick:m,className:(0,Zo.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},Lo.default.createElement(hm.FontAwesomeIcon,{size:"lg",icon:gm.faTimes}))):null,vr=U(CT,{ssrStyles:()=>Promise.resolve().then(()=>(Ee(),Ne)),clientStyles:()=>(Ee(),H(Ne)).default});var DT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},RT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=DT,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:f})=>{let[S,x]=(0,Tm.useState)(!1);if((0,xm.useEffect)(()=>{x(!0)},[]),!l)return null;let{showHeader:w,showFooter:k,headerText:N,footerText:J,modalDialogClassName:pe="dapp-modal-dialog",modalContentClassName:Q="dapp-modal-dialog-content",modalHeaderClassName:ne="dapp-modal-dialog-header",modalHeaderTextClassName:Se="dapp-modal-dialog-header-text",modalCloseButtonClassName:C="dapp-modal-dialog-close-button",modalBodyClassName:Qe="dapp-modal-dialog-content-body",modalFooterClassName:eo="dapp-modal-dialog-footer",customModalHeader:et,customModalFooter:ot}=c,Um=Wm=>{Wm.key==="Escape"&&s&&(m==null||m())};return Fe.default.createElement(Fe.default.Fragment,null,S&&(0,ym.createPortal)(Fe.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Ar.default)(pe,f==null?void 0:f.dappModal,t),"data-testid":e,onKeyDown:Um},Fe.default.createElement("div",{className:(0,Ar.default)(f==null?void 0:f.dappModalContent,Q)},Fe.default.createElement(vr,{visible:w,headerText:N,customHeader:et,className:ne,headerTextClassName:Se,closeButtonClassName:C,onHide:m}),Fe.default.createElement(Sr,{className:Qe},o),Fe.default.createElement(wr,{visible:k,customFooter:ot,footerText:J,className:eo}))),_!=null?_:document==null?void 0:document.body))},MT=U(RT,{ssrStyles:()=>Promise.resolve().then(()=>(Ee(),Ne)),clientStyles:()=>(Ee(),H(Ne)).default});n();n();var Sm=require("react");n();n();var bm=require("react"),BT=require("@multiversx/sdk-hw-provider");ue();R();E();P();Ie();n();var FT=require("react");n();n();var Ir=require("react");R();E();P();Ie();G();n();var WT=require("react"),GT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ue();R();P();Ie();V();V();n();var VT=require("react"),$T=require("@multiversx/sdk-passkey-provider/out");ue();R();P();Ie();V();V();n();n();var wm=require("react");n();var qT=require("react");n();var kr=require("react"),jT=require("socket.io-client");E();n();n();n();var zT=require("react");O();n();n();n();var XT=h(require("swr"));n();n();n();n();var KT=h(require("axios"));n();n();n();var Je=h(require("react")),Er=h(require("classnames"));n();var Qn=h(require("react")),YT=e=>Qn.createElement("svg",u({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),Qn.createElement("g",null,Qn.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Am=YT;var JT=({amount:e,displayAsUsd:o,addEqualSign:t,egldIcon:s,className:c,showTokenLabel:p=!0,styles:m,tokenLabel:_,showTokenLabelSup:l,"data-testid":f})=>{let[S,x]=e.split("."),w=o&&S.indexOf("$")<0?`$${S}`:S,N=(()=>{let Q={processedMainBalance:w};return t&&o&&(Q.approximation="\u2248"),x&&(Q.decimalBalance=`.${x}`),!o&&p&&(Q.tokenLabel=` ${_}`),Q})(),pe=[N.approximation,N.processedMainBalance,N.decimalBalance,N.tokenLabel].reduce((Q,ne)=>ne?Q.concat(ne):Q,"");return Je.default.createElement("div",{className:(0,Er.default)(m==null?void 0:m.balance,c),"data-testid":f,"data-value":pe},s&&!o&&Je.default.createElement(Am,{className:m==null?void 0:m.balanceSymbol}),N.approximation&&Je.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},N.approximation),N.processedMainBalance&&Je.default.createElement("span",{className:m==null?void 0:m.balanceMain},w),N.decimalBalance&&Je.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},N.decimalBalance),N.tokenLabel&&Je.default.createElement("sup",{className:(0,Er.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:l})},N.tokenLabel))},km=U(JT,{ssrStyles:()=>Promise.resolve().then(()=>(Nr(),Lr)),clientStyles:()=>(Nr(),H(Lr)).default});n();n();var Lm=h(require("react")),Nm=h(require("classnames"));A();var QT=_=>{var l=_,{amount:e,usd:o,decimals:t,addEqualSign:s,className:c,globalStyles:p}=l,m=be(l,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let f=rr({amount:e,usd:o,decimals:t,addEqualSign:s!=null?s:!0}),x=`${e}`===he?`= $${he}`:f;return Lm.default.createElement("small",u({className:(0,Nm.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,c!=null?c:"dapp-usd-value")},m),x)},Em=U(QT,{});var ox=({isEgld:e,styles:o,tokenPrice:t,isNftOrSft:s,handleReference:c,currentTransaction:p,amount:m,tokenDetails:_})=>{let{network:l}=yo(),{tokenAvatar:f,tokenDecimals:S,identifier:x}=_,w=({addCommas:pe})=>Me({input:e?p.transaction.getValue().toString():m,decimals:e?Number(l.decimals):S,digits:Number(l.digits),showLastNonZeroDecimal:!1,addCommas:pe}),k=e||_.identifier===La,N=w({addCommas:!0}),J=w({addCommas:!1});return ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountData},ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataWrapper},!k&&f&&ye.default.createElement("img",{src:f,className:o==null?void 0:o.confirmAmountDataIcon}),!k&&!f&&ye.default.createElement("div",{className:(0,Rm.default)(o==null?void 0:o.confirmAmountDataIcon,o==null?void 0:o.confirmAmountDataIconDefault)},ye.default.createElement(Dm.FontAwesomeIcon,{icon:Cm.faCoins,className:o==null?void 0:o.confirmAmountDataIconDefaultIcon})),ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataBalanceWrapper,ref:c},ye.default.createElement(km,{amount:N,egldIcon:k,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:k?l.egldLabel:x,className:o==null?void 0:o.confirmAmountDataBalance}))),!s&&t&&ye.default.createElement(Em,{amount:J,usd:t,"data-testid":"confirmUsdValue",className:o==null?void 0:o.confirmAmountDataPrice}),!s&&!t&&ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataPrice},"Price Unknown"))},nx=U(ox,{ssrStyles:()=>Promise.resolve().then(()=>(Cr(),Pr)),clientStyles:()=>(Cr(),H(Pr)).default});n();n();var ce=h(require("react")),Om=require("@fortawesome/free-solid-svg-icons"),Fm=require("@fortawesome/react-fontawesome"),Bm=h(require("classnames"));A();so();var rx=({styles:e,amount:o,type:t,tokenDetails:s})=>{let{network:c}=yo(),{identifier:p,tokenAvatar:m,name:_}=s,l="SemiFungibleESDT"===t,S=Array(Math.min(4,Number(o))).fill(null);return ce.default.createElement("div",{onClick:w=>{var N;if(!p)return;let k=nr({explorerAddress:c.explorerAddress,to:Wo.nftDetails(p)});w.preventDefault(),w.stopPropagation(),(N=ge.safeWindow)!=null&&N.open&&ge.safeWindow.open(k)},className:e==null?void 0:e.confirmAmountNftSft},ce.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},m?ce.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},S.map((w,k)=>ce.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${k}`,style:{opacity:1-.25*k,zIndex:S.length-k,marginLeft:(S.length-k-1)*4},className:(0,Bm.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:k===0})}))):ce.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},ce.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},l?"SFT":"NFT")),ce.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},ce.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},_),ce.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),ce.default.createElement(Fm.FontAwesomeIcon,{icon:Om.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},ax=U(rx,{ssrStyles:()=>Promise.resolve().then(()=>(Rr(),Dr)),clientStyles:()=>(Rr(),H(Dr)).default});0&&(module.exports={ConfirmAmountData,ConfirmAmountLabel,ConfirmAmountNftSft});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
