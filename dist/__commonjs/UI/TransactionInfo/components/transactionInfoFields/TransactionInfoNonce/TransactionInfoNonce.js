"use strict";var Qp=Object.create;var lo=Object.defineProperty,em=Object.defineProperties,om=Object.getOwnPropertyDescriptor,nm=Object.getOwnPropertyDescriptors,tm=Object.getOwnPropertyNames,Fo=Object.getOwnPropertySymbols,rm=Object.getPrototypeOf,Hn=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable;var lr=(e,o,t)=>o in e?lo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Hn.call(o,t)&&lr(e,t,o[t]);if(Fo)for(var t of Fo(o))_r.call(o,t)&&lr(e,t,o[t]);return e},w=(e,o)=>em(e,nm(o));var we=(e,o)=>{var t={};for(var s in e)Hn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Fo)for(var s of Fo(e))o.indexOf(s)<0&&_r.call(e,s)&&(t[s]=e[s]);return t};var f=(e,o)=>()=>(e&&(o=e(e=0)),o);var x=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ee=(e,o)=>{for(var t in o)lo(e,t,{get:o[t],enumerable:!0})},ur=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of tm(o))!Hn.call(e,c)&&c!==t&&lo(e,c,{get:()=>o[c],enumerable:!(s=om(o,c))||s.enumerable});return e};var h=(e,o,t)=>(t=e!=null?Qp(rm(e)):{},ur(o||!e||!e.__esModule?lo(t,"default",{value:e,enumerable:!0}):t,e)),Z=e=>ur(lo({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{_(t.next(l))}catch(y){c(y)}},m=l=>{try{_(t.throw(l))}catch(y){c(y)}},_=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var hr=x(Uo=>{"use strict";n();Uo.byteLength=im;Uo.toByteArray=cm;Uo.fromByteArray=dm;var oe=[],z=[],am=typeof Uint8Array!="undefined"?Uint8Array:Array,$n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ve=0,gr=$n.length;ve<gr;++ve)oe[ve]=$n[ve],z[$n.charCodeAt(ve)]=ve;var ve,gr;z["-".charCodeAt(0)]=62;z["_".charCodeAt(0)]=63;function fr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function im(e){var o=fr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function sm(e,o,t){return(o+t)*3/4-t}function cm(e){var o,t=fr(e),s=t[0],c=t[1],p=new am(sm(e,s,c)),m=0,_=c>0?s-4:s,l;for(l=0;l<_;l+=4)o=z[e.charCodeAt(l)]<<18|z[e.charCodeAt(l+1)]<<12|z[e.charCodeAt(l+2)]<<6|z[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=z[e.charCodeAt(l)]<<2|z[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=z[e.charCodeAt(l)]<<10|z[e.charCodeAt(l+1)]<<4|z[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function pm(e){return oe[e>>18&63]+oe[e>>12&63]+oe[e>>6&63]+oe[e&63]}function mm(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(pm(s));return c.join("")}function dm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,_=t-s;m<_;m+=p)c.push(mm(e,m,m+p>_?_:m+p));return s===1?(o=e[t-1],c.push(oe[o>>2]+oe[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(oe[o>>10]+oe[o>>4&63]+oe[o<<2&63]+"=")),c.join("")}});var Tr=x(Vn=>{n();Vn.read=function(e,o,t,s,c){var p,m,_=c*8-s-1,l=(1<<_)-1,y=l>>1,b=-7,S=t?c-1:0,R=t?-1:1,M=e[o+S];for(S+=R,p=M&(1<<-b)-1,M>>=-b,b+=_;b>0;p=p*256+e[o+S],S+=R,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+S],S+=R,b-=8);if(p===0)p=1-y;else{if(p===l)return m?NaN:(M?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-y}return(M?-1:1)*m*Math.pow(2,p-s)};Vn.write=function(e,o,t,s,c,p){var m,_,l,y=p*8-c-1,b=(1<<y)-1,S=b>>1,R=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,M=s?0:p-1,Y=s?1:-1,Be=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+S>=1?o+=R/l:o+=R*Math.pow(2,1-S),o*l>=2&&(m++,l/=2),m+S>=b?(_=0,m=b):m+S>=1?(_=(o*l-1)*Math.pow(2,c),m=m+S):(_=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+M]=_&255,M+=Y,_/=256,c-=8);for(m=m<<c|_,y+=c;y>0;e[t+M]=m&255,M+=Y,m/=256,y-=8);e[t+M-Y]|=Be*128}});var Cr=x(Ge=>{"use strict";n();var jn=hr(),We=Tr(),xr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ge.Buffer=d;Ge.SlowBuffer=hm;Ge.INSPECT_MAX_BYTES=50;var Bo=2147483647;Ge.kMaxLength=Bo;d.TYPED_ARRAY_SUPPORT=lm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function lm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function me(e){if(e>Bo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Xn(e)}return br(e,o,t)}d.poolSize=8192;function br(e,o,t){if(typeof e=="string")return um(e,o);if(ArrayBuffer.isView(e))return gm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ne(e,ArrayBuffer)||e&&ne(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ne(e,SharedArrayBuffer)||e&&ne(e.buffer,SharedArrayBuffer)))return zn(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=fm(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return br(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function wr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function _m(e,o,t){return wr(e),e<=0?me(e):o!==void 0?typeof t=="string"?me(e).fill(o,t):me(e).fill(o):me(e)}d.alloc=function(e,o,t){return _m(e,o,t)};function Xn(e){return wr(e),me(e<0?0:Yn(e)|0)}d.allocUnsafe=function(e){return Xn(e)};d.allocUnsafeSlow=function(e){return Xn(e)};function um(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=vr(e,o)|0,s=me(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function qn(e){for(var o=e.length<0?0:Yn(e.length)|0,t=me(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function gm(e){if(ne(e,Uint8Array)){var o=new Uint8Array(e);return zn(o.buffer,o.byteOffset,o.byteLength)}return qn(e)}function zn(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function fm(e){if(d.isBuffer(e)){var o=Yn(e.length)|0,t=me(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Jn(e.length)?me(0):qn(e);if(e.type==="Buffer"&&Array.isArray(e.data))return qn(e.data)}function Yn(e){if(e>=Bo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Bo.toString(16)+" bytes");return e|0}function hm(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ne(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ne(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ne(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function vr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ne(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Kn(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Er(e).length;default:if(c)return s?-1:Kn(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=vr;function Tm(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Lm(this,o,t);case"utf8":case"utf-8":return Ar(this,o,t);case"ascii":return Am(this,o,t);case"latin1":case"binary":return km(this,o,t);case"base64":return vm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pm(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Ie(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ie(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ie(this,t,t+3),Ie(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ie(this,t,t+7),Ie(this,t+1,t+6),Ie(this,t+2,t+5),Ie(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ar(this,0,o):Tm.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=Ge.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};xr&&(d.prototype[xr]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ne(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=s-t,l=Math.min(m,_),y=this.slice(c,p),b=o.slice(t,s),S=0;S<l;++S)if(y[S]!==b[S]){m=y[S],_=b[S];break}return m<_?-1:_<m?1:0};function Ir(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Jn(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:yr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):yr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function yr(e,o,t,s,c){var p=1,m=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(M,Y){return p===1?M[Y]:M.readUInt16BE(Y*p)}var y;if(c){var b=-1;for(y=t;y<m;y++)if(l(e,y)===l(o,b===-1?0:y-b)){if(b===-1&&(b=y),y-b+1===_)return b*p}else b!==-1&&(y-=y-b),b=-1}else for(t+_>m&&(t=m-_),y=t;y>=0;y--){for(var S=!0,R=0;R<_;R++)if(l(e,y+R)!==l(o,R)){S=!1;break}if(S)return y}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return Ir(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return Ir(this,o,t,s,!1)};function xm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var _=parseInt(o.substr(m*2,2),16);if(Jn(_))return m;e[t+m]=_}return m}function ym(e,o,t,s){return Wo(Kn(o,e.length-t),e,t,s)}function Sm(e,o,t,s){return Wo(Nm(o),e,t,s)}function bm(e,o,t,s){return Wo(Er(o),e,t,s)}function wm(e,o,t,s){return Wo(Rm(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return xm(this,o,t,s);case"utf8":case"utf-8":return ym(this,o,t,s);case"ascii":case"latin1":case"binary":return Sm(this,o,t,s);case"base64":return bm(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wm(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function vm(e,o,t){return o===0&&t===e.length?jn.fromByteArray(e):jn.fromByteArray(e.slice(o,t))}function Ar(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,y,b,S;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(S=(p&31)<<6|l&63,S>127&&(m=S));break;case 3:l=e[c+1],y=e[c+2],(l&192)===128&&(y&192)===128&&(S=(p&15)<<12|(l&63)<<6|y&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:l=e[c+1],y=e[c+2],b=e[c+3],(l&192)===128&&(y&192)===128&&(b&192)===128&&(S=(p&15)<<18|(l&63)<<12|(y&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=_}return Im(s)}var Sr=4096;function Im(e){var o=e.length;if(o<=Sr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Sr));return t}function Am(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function km(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Lm(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Dm[e[p]];return c}function Pm(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function O(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||O(o,4,this.length),We.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||O(o,4,this.length),We.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||O(o,8,this.length),We.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||O(o,8,this.length),We.read(this,o,!1,52,8)};function G(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;G(this,o,t,s,p,0)}var m=1,_=0;for(this[t]=o&255;++_<s&&(m*=256);)this[t+_]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;G(this,o,t,s,p,0)}var m=s-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);G(this,o,t,s,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<s&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);G(this,o,t,s,p-1,-p)}var m=s-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||G(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function kr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Lr(e,o,t,s,c){return o=+o,t=t>>>0,c||kr(e,o,t,4,34028234663852886e22,-34028234663852886e22),We.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return Lr(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return Lr(this,o,t,!1,s)};function Pr(e,o,t,s,c){return o=+o,t=t>>>0,c||kr(e,o,t,8,17976931348623157e292,-17976931348623157e292),We.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return Pr(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return Pr(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=_[m%l]}return this};var Em=/[^+/0-9A-Za-z-_]/g;function Cm(e){if(e=e.split("=")[0],e=e.trim().replace(Em,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Kn(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Nm(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Rm(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Er(e){return jn.toByteArray(Cm(e))}function Wo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ne(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Jn(e){return e!==e}var Dm=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Or=x((yT,Mr)=>{n();var C=Mr.exports={},te,re;function Zn(){throw new Error("setTimeout has not been defined")}function Qn(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?te=setTimeout:te=Zn}catch(e){te=Zn}try{typeof clearTimeout=="function"?re=clearTimeout:re=Qn}catch(e){re=Qn}})();function Nr(e){if(te===setTimeout)return setTimeout(e,0);if((te===Zn||!te)&&setTimeout)return te=setTimeout,setTimeout(e,0);try{return te(e,0)}catch(o){try{return te.call(null,e,0)}catch(t){return te.call(this,e,0)}}}function Mm(e){if(re===clearTimeout)return clearTimeout(e);if((re===Qn||!re)&&clearTimeout)return re=clearTimeout,clearTimeout(e);try{return re(e)}catch(o){try{return re.call(null,e)}catch(t){return re.call(this,e)}}}var de=[],He=!1,Ae,Go=-1;function Om(){!He||!Ae||(He=!1,Ae.length?de=Ae.concat(de):Go=-1,de.length&&Rr())}function Rr(){if(!He){var e=Nr(Om);He=!0;for(var o=de.length;o;){for(Ae=de,de=[];++Go<o;)Ae&&Ae[Go].run();Go=-1,o=de.length}Ae=null,He=!1,Mm(e)}}C.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];de.push(new Dr(e,o)),de.length===1&&!He&&Nr(Rr)};function Dr(e,o){this.fun=e,this.array=o}Dr.prototype.run=function(){this.fun.apply(null,this.array)};C.title="browser";C.browser=!0;C.env={};C.argv=[];C.version="";C.versions={};function le(){}C.on=le;C.addListener=le;C.once=le;C.off=le;C.removeListener=le;C.removeAllListeners=le;C.emit=le;C.prependListener=le;C.prependOnceListener=le;C.listeners=function(e){return[]};C.binding=function(e){throw new Error("process.binding is not supported")};C.cwd=function(){return"/"};C.chdir=function(e){throw new Error("process.chdir is not supported")};C.umask=function(){return 0}});var r,i,Fm,a,n=f(()=>{r=h(Cr()),i=h(Or()),Fm=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Fm});var ke,$e=f(()=>{"use strict";n();ke=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var et={};ee(et,{css:()=>Ur,default:()=>Um});var Ur,Um,ot=f(()=>{"use strict";n();Ur=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ur));Um={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var tt={};ee(tt,{css:()=>Gr,default:()=>Gm});var Gr,Gm,rt=f(()=>{"use strict";n();Gr=`.dapp-core-component__detailItem-module__detail-item:last-child {
  border-bottom: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gr));Gm={"detail-item":"dapp-core-component__detailItem-module__detail-item",detailItem:"dapp-core-component__detailItem-module__detail-item"}});var $r=f(()=>{"use strict";n()});var ae=f(()=>{"use strict";n()});var Vr=f(()=>{"use strict";n()});var at,jr=f(()=>{"use strict";n();at=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(at||{})});var qr=f(()=>{"use strict";n()});var it=f(()=>{"use strict";n()});var zr=f(()=>{"use strict";n()});var st=f(()=>{"use strict";n()});var Kr=f(()=>{"use strict";n()});var Xr=f(()=>{"use strict";n()});var Le,Ve,Te=f(()=>{"use strict";n();Le=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Ve=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Yr,VT,Jr,jT,L=f(()=>{"use strict";n();Te();Yr=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Yr||{}),VT=u(u({},Ve.WindowProviderRequestEnums),Yr),Jr=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Jr||{}),jT=u(u({},Ve.WindowProviderResponseEnums),Jr)});var Zr=f(()=>{"use strict";n()});var Qr=f(()=>{"use strict";n()});var H=f(()=>{"use strict";n()});var ea=f(()=>{"use strict";n()});var oa=f(()=>{"use strict";n()});var na=f(()=>{"use strict";n()});var N=f(()=>{"use strict";n();st();Kr();Xr();L();Zr();Qr();H();ea();oa();na()});var je,ta,cx,ra,px,aa,mx,dx,$m,qe=f(()=>{"use strict";n();N();je={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ta,egldLabel:cx}=je["devnet"],{chainId:ra,egldLabel:px}=je["testnet"],{chainId:aa,egldLabel:mx}=je["mainnet"],dx={["devnet"]:ta,["testnet"]:ra,["mainnet"]:aa},$m={[ta]:"devnet",[ra]:"testnet",[aa]:"mainnet"}});var Vo=f(()=>{"use strict";n()});var ie,ia=f(()=>{"use strict";n();ie=require("@multiversx/sdk-web-wallet-provider")});var Pe,uo=f(()=>{"use strict";n();Pe=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var sa,ca,ct,hx,Tx,pt=f(()=>{"use strict";n();uo();ct=String((ca=(sa=Pe.safeWindow)==null?void 0:sa.navigator)==null?void 0:ca.userAgent),hx=/^((?!chrome|android).)*safari/i.test(ct),Tx=/firefox/i.test(ct)&&/windows/i.test(ct)});var jo,qo,pa,zo,ma,ze,I=f(()=>{"use strict";n();$r();ae();Vr();jr();qr();it();zr();qe();Vo();ia();pt();jo=5e4,qo=1e9,pa=1,zo="logout",ma="login",ze="0"});var go,Ko=f(()=>{"use strict";n();go=()=>Date.now()/1e3});var da=f(()=>{"use strict";n()});var la=f(()=>{"use strict";n()});var mt=f(()=>{"use strict";n();Ko();da();la()});var dt={};ee(dt,{clear:()=>zm,getItem:()=>jm,localStorageKeys:()=>xe,removeItem:()=>qm,setItem:()=>Vm});var xe,Xo,Vm,jm,qm,zm,Ke=f(()=>{"use strict";n();mt();xe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Xo=typeof localStorage!="undefined",Vm=({key:e,data:o,expires:t})=>{!Xo||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},jm=e=>{if(!Xo)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:go()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},qm=e=>{!Xo||localStorage.removeItem(String(e))},zm=()=>{!Xo||localStorage.clear()}});var lt={};ee(lt,{clear:()=>fa,getItem:()=>ua,removeItem:()=>ga,setItem:()=>_a,storage:()=>Km});var _a,ua,ga,fa,Km,ha=f(()=>{"use strict";n();_a=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ua=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},ga=e=>sessionStorage.removeItem(String(e)),fa=()=>sessionStorage.clear(),Km={setItem:_a,getItem:ua,removeItem:ga,clear:fa}});var Ee,Xe=f(()=>{"use strict";n();Ke();ha();Ee={session:lt,local:dt}});var _t,P,V,E=f(()=>{"use strict";n();_t=require("@reduxjs/toolkit");I();P=(0,_t.createAction)(zo),V=(0,_t.createAction)(ma,e=>({payload:e}))});var gt,Ta,xa,Yo,ut,ya,Jo,Xm,ft,Xx,Ym,Jm,Yx,Jx,Zx,Zm,Qm,Zo,Qo=f(()=>{"use strict";n();gt=require("@multiversx/sdk-core"),Ta=require("@reduxjs/toolkit"),xa=require("redux-persist");I();Xe();Ke();E();Yo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ze},ut={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Yo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},ya=(0,Ta.createSlice)({name:"accountInfoSlice",initialState:ut,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new gt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Yo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(P,()=>(Ee.local.removeItem(xe.loginExpiresAt),ut)),e.addCase(V,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new gt.Address(s).hex()}),e.addCase(xa.REHYDRATE,(o,t)=>{var y;if(!((y=t.payload)!=null&&y.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:ut.accounts,o.publicKey=_})}}),{setAccount:Jo,setAddress:Xm,setAccountNonce:ft,setAccountShard:Xx,setLedgerAccount:Ym,updateLedgerAccount:Jm,setWalletConnectAccount:Yx,setIsAccountLoading:Jx,setAccountLoadingError:Zx,setWebsocketEvent:Zm,setWebsocketBatchEvent:Qm}=ya.actions,Zo=ya.reducer});function fo(){return new Date().setHours(new Date().getHours()+24)}function ho(e){Ee.local.setItem({key:xe.loginExpiresAt,data:e,expires:e})}var ht=f(()=>{"use strict";n();Xe();Ke()});var ba,Sa,wa,cy,ed,od,va,py,nd,Ia,my,dy,ly,en,on=f(()=>{"use strict";n();ba=require("@reduxjs/toolkit");ht();L();E();Sa={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},wa=(0,ba.createSlice)({name:"loginInfoSlice",initialState:Sa,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(P,()=>Sa),e.addCase(V,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,ho(fo())})}}),{setLoginMethod:cy,setWalletConnectLogin:ed,setLedgerLogin:od,setTokenLogin:va,setTokenLoginSignature:py,setWalletLogin:nd,invalidateLoginSession:Ia,setLogoutRoute:my,setIsWalletConnectV2Initialized:dy,setWebviewLogin:ly}=wa.actions,en=wa.reducer});var ka,Aa,La,fy,td,hy,rd,nn,tn=f(()=>{"use strict";n();ka=require("@reduxjs/toolkit");E();Aa={},La=(0,ka.createSlice)({name:"modalsSlice",initialState:Aa,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(P,()=>Aa)}}),{setTxSubmittedModal:fy,setNotificationModal:td,clearTxSubmittedModal:hy,clearNotificationModal:rd}=La.actions,nn=La.reducer});var D,U=f(()=>{"use strict";n();$e();D=()=>{if(!ke())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Pa=f(()=>{"use strict";n();U()});var Ea=f(()=>{"use strict";n();B()});var Ca=f(()=>{"use strict";n();uo()});var B=f(()=>{"use strict";n();Pa();Ea();U();Ca()});var To=f(()=>{"use strict";n();B()});var Ra=f(()=>{"use strict";n();To()});function Da(e){return e[Math.floor(Math.random()*e.length)]}var Ma=f(()=>{"use strict";n()});var Tt=f(()=>{"use strict";n();it()});var _e=f(()=>{"use strict";n();Ra();Ma();Tt()});var Oa,Fa,Ua,xt,id,Ba,Xy,Yy,sd,rn,an=f(()=>{"use strict";n();Oa=require("@reduxjs/toolkit"),Fa=h(require("lodash.omit")),Ua=require("redux-persist");Vo();E();_e();xt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},id={network:xt},Ba=(0,Oa.createSlice)({name:"appConfig",initialState:id,reducers:{initializeNetworkConfig:(e,o)=>{let t=Da(o.payload.walletConnectV2RelayAddresses),s=(0,Fa.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(P,o=>{o.network.customWalletAddress=void 0}),e.addCase(Ua.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:Xy,updateNetworkConfig:Yy,setCustomWalletAddress:sd}=Ba.actions,rn=Ba.reducer});var Wa,yt,Ga,nS,tS,rS,sn,cn=f(()=>{"use strict";n();Wa=require("@reduxjs/toolkit");N();E();yt={isSigning:!1,signedSessions:{}},Ga=(0,Wa.createSlice)({name:"signedMessageInfoSliceState",initialState:yt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>yt},extraReducers:e=>{e.addCase(P,()=>yt)}}),{setSignSession:nS,clearSignedMessageInfo:tS,setSignSessionState:rS}=Ga.actions,sn=Ga.reducer});var $a,Va,Ha,ja,cd,pd,dS,md,pn,mn=f(()=>{"use strict";n();$a=require("@reduxjs/toolkit"),Va=require("redux-persist");N();Ko();E();Ha={customToasts:[],transactionToasts:[]},ja=(0,$a.createSlice)({name:"toastsSlice",initialState:Ha,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:go(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(P,()=>Ha),e.addCase(Va.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:cd,removeCustomToast:pd,addTransactionToast:dS,removeTransactionToast:md}=ja.actions,pn=ja.reducer});var qa,bt,wt,vt,dd,St,za,gS,ld,It,dn,ln=f(()=>{"use strict";n();qa=require("@reduxjs/toolkit");E();bt="Transaction failed",wt="Transaction successful",vt="Processing transaction",dd="Transaction submitted",St={},za=(0,qa.createSlice)({name:"transactionsInfo",initialState:St,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||bt,successMessage:(s==null?void 0:s.successMessage)||wt,processingMessage:(s==null?void 0:s.processingMessage)||vt,submittedMessage:(s==null?void 0:s.submittedMessage)||dd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>St},extraReducers:e=>{e.addCase(P,()=>St)}}),{clearTransactionsInfo:gS,setTransactionsDisplayInfo:ld,clearTransactionsInfoForSessionId:It}=za.actions,dn=za.reducer});function Je(e){return e!=null&&(bd(e)||kd(e))}function Ze(e){return e!=null&&(wd(e)||Ld(e))}function Qe(e){return e!=null&&(vd(e)||Pd(e))}function Ka(e){return e!=null&&(Id(e)||Ed(e))}function At(e){return e!=null&&Ad(e)}function bd(e){return e!=null&&_d.includes(e)}function wd(e){return e!=null&&ud.includes(e)}function vd(e){return e!=null&&gd.includes(e)}function Id(e){return e!=null&&fd.includes(e)}function Ad(e){return e!=null&&hd.includes(e)}function kd(e){return e!=null&&Td.includes(e)}function Ld(e){return e!=null&&xd.includes(e)}function Pd(e){return e!=null&&yd.includes(e)}function Ed(e){return e!=null&&Sd.includes(e)}var _d,ud,gd,fd,hd,Td,xd,yd,Sd,eo=f(()=>{"use strict";n();L();_d=["sent"],ud=["success"],gd=["fail","cancelled","timedOut"],fd=["invalid"],hd=["timedOut"],Td=["pending"],xd=["success"],yd=["fail","invalid"],Sd=["not executed"]});var Xa,Ya,xo,Cd,Ja,Za,Qa,Nd,_n,Rd,Dd,vS,Md,yo,kt,IS,un,gn=f(()=>{"use strict";n();Xa=require("@reduxjs/toolkit"),Ya=require("redux-persist");L();eo();E();xo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Cd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Ja=(0,Xa.createSlice)({name:"transactionsSlice",initialState:xo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,y;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Cd),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((y=e==null?void 0:e.transactionsToSign)==null?void 0:y.sessionId)===t&&(e.transactionsToSign=xo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var y,b,S,R,M,Y,Be,Oo;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(b=(y=e.signedTransactions)==null?void 0:y[t])==null?void 0:b.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(J=>J.hash===p?w(u(u({},m!=null?m:{}),J),{status:s,errorMessage:c,inTransit:_}):J);let Bn=(R=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:R.every(J=>Ze(J.status)),Wn=(Y=(M=e.signedTransactions[t])==null?void 0:M.transactions)==null?void 0:Y.some(J=>Qe(J.status)),Gn=(Oo=(Be=e.signedTransactions[t])==null?void 0:Be.transactions)==null?void 0:Oo.every(J=>Ka(J.status));Bn&&(e.signedTransactions[t].status="success"),Wn&&(e.signedTransactions[t].status="fail"),Gn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=xo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=xo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(P,()=>xo),e.addCase(Ya.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((_,[l,y])=>{let b=new Date(l),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(_[l]=y),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Za,updateSignedTransactions:Qa,setTransactionsToSign:Nd,clearAllTransactionsToSign:_n,clearAllSignedTransactions:Rd,clearSignedTransaction:Dd,clearTransactionToSign:vS,setSignTransactionsError:Md,setSignTransactionsCancelMessage:yo,moveTransactionsToSignedState:kt,updateSignedTransactionsCustomTransactionInformation:IS}=Ja.actions,un=Ja.reducer});var ei,Lt,oi,PS,ES,Od,CS,fn,hn=f(()=>{"use strict";n();ei=require("@reduxjs/toolkit");E();Lt={},oi=(0,ei.createSlice)({name:"batchTransactionsSlice",initialState:Lt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Lt},extraReducers:e=>{e.addCase(P,()=>Lt)}}),{setBatchTransactions:PS,updateBatchTransactions:ES,clearBatchTransactions:Od,clearAllBatchTransactions:CS}=oi.actions,fn=oi.reducer});var ti,ni,ri,MS,ai,Pt=f(()=>{"use strict";n();ti=require("@reduxjs/toolkit");E();ni={},ri=(0,ti.createSlice)({name:"dappConfigSlice",initialState:ni,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(P,()=>ni)}}),{setDappConfig:MS}=ri.actions,ai=ri.reducer});var k=f(()=>{"use strict";n();Qo();on();tn();an();cn();mn();ln();gn();hn();Pt()});var Et=f(()=>{"use strict";n()});var ci,Wd,Gd,Ce,yn=f(()=>{"use strict";n();ci=require("@reduxjs/toolkit");Et();Qo();hn();Pt();on();tn();an();cn();mn();ln();gn();Wd={["account"]:Zo,["dappConfig"]:ai,["loginInfo"]:en,["modals"]:nn,["networkConfig"]:rn,["signedMessageInfo"]:sn,["toasts"]:pn,["transactionsInfo"]:dn,["transactions"]:un,["batchTransactions"]:fn},Gd=(e={})=>(0,ci.combineReducers)(u(u({},Wd),e)),Ce=Gd});var li={};ee(li,{default:()=>tl,sessionStorageReducers:()=>Ct});function ue(e,o=[]){return{key:e,version:1,storage:mi.default,blacklist:o}}var $,pi,mi,Hd,So,$d,Vd,jd,qd,zd,Kd,Xd,Yd,Jd,Zd,di,Qd,Ct,el,ol,nl,tl,_i=f(()=>{"use strict";n();$=require("redux-persist"),pi=h(require("redux-persist/lib/storage")),mi=h(require("redux-persist/lib/storage/session"));yn();k();Qo();hn();on();tn();an();cn();mn();ln();gn();Et();Hd={persistReducersStorageType:"localStorage"},So={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},$d=ue(So["account"]),Vd=ue(So["loginInfo"]),jd=ue(So["modals"]),qd=ue(So["networkConfig"]),zd={2:e=>w(u({},e),{networkConfig:xt})};Kd=ue("sdk-dapp-transactionsInfo"),Xd=ue("sdk-dapp-transactions",["transactionsToSign"]),Yd=ue("sdk-dapp-batchTransactions",["batchTransactions"]),Jd=ue("sdk-dapp-toasts"),Zd=ue("sdk-dapp-signedMessageInfo"),di={key:"sdk-dapp-store",version:2,storage:pi.default,whitelist:Object.keys(So),migrate:(0,$.createMigrate)(zd,{debug:!1})},Qd=w(u({},di),{whitelist:[]}),Ct={["toasts"]:(0,$.persistReducer)(Jd,pn),["transactions"]:(0,$.persistReducer)(Xd,un),["transactionsInfo"]:(0,$.persistReducer)(Kd,dn),["batchTransactions"]:(0,$.persistReducer)(Yd,fn),["signedMessageInfo"]:(0,$.persistReducer)(Zd,sn)},el=w(u({},Ct),{["account"]:(0,$.persistReducer)($d,Zo),["loginInfo"]:(0,$.persistReducer)(Vd,en),["modals"]:(0,$.persistReducer)(jd,nn),["networkConfig"]:(0,$.persistReducer)(qd,rn)}),ol=Hd.persistReducersStorageType==="localStorage",nl=ol?(0,$.persistReducer)(di,Ce(Ct)):(0,$.persistReducer)(Qd,Ce(el)),tl=nl});var ui={};ee(ui,{default:()=>rl});var rl,gi=f(()=>{"use strict";n();yn();rl=Ce()});var fi={};ee(fi,{default:()=>il});var X,al,il,hi=f(()=>{"use strict";n();X=require("redux-persist"),al=[X.FLUSH,X.REHYDRATE,X.PAUSE,X.PERSIST,X.PURGE,X.REGISTER],il=al});var yi={};ee(yi,{default:()=>xi});function xi(e){return(0,Ti.persistStore)(e)}var Ti,Si=f(()=>{"use strict";n();Ti=require("redux-persist")});var us=x((RD,_s)=>{n();var nu=typeof a=="object"&&a&&a.Object===Object&&a;_s.exports=nu});var ko=x((DD,gs)=>{n();var tu=us(),ru=typeof self=="object"&&self&&self.Object===Object&&self,au=tu||ru||Function("return this")();gs.exports=au});var Xt=x((MD,fs)=>{n();var iu=ko(),su=iu.Symbol;fs.exports=su});var ys=x((OD,xs)=>{n();var hs=Xt(),Ts=Object.prototype,cu=Ts.hasOwnProperty,pu=Ts.toString,Lo=hs?hs.toStringTag:void 0;function mu(e){var o=cu.call(e,Lo),t=e[Lo];try{e[Lo]=void 0;var s=!0}catch(p){}var c=pu.call(e);return s&&(o?e[Lo]=t:delete e[Lo]),c}xs.exports=mu});var bs=x((FD,Ss)=>{n();var du=Object.prototype,lu=du.toString;function _u(e){return lu.call(e)}Ss.exports=_u});var Yt=x((UD,Is)=>{n();var ws=Xt(),uu=ys(),gu=bs(),fu="[object Null]",hu="[object Undefined]",vs=ws?ws.toStringTag:void 0;function Tu(e){return e==null?e===void 0?hu:fu:vs&&vs in Object(e)?uu(e):gu(e)}Is.exports=Tu});var ks=x((BD,As)=>{n();var xu=Array.isArray;As.exports=xu});var Ps=x((WD,Ls)=>{n();function yu(e){return e!=null&&typeof e=="object"}Ls.exports=yu});var Cs=x((GD,Es)=>{n();var Su=Yt(),bu=ks(),wu=Ps(),vu="[object String]";function Iu(e){return typeof e=="string"||!bu(e)&&wu(e)&&Su(e)==vu}Es.exports=Iu});var Mn=x((W3,Os)=>{n();function Vu(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Os.exports=Vu});var Us=x((G3,Fs)=>{n();var ju=Yt(),qu=Mn(),zu="[object AsyncFunction]",Ku="[object Function]",Xu="[object GeneratorFunction]",Yu="[object Proxy]";function Ju(e){if(!qu(e))return!1;var o=ju(e);return o==Ku||o==Xu||o==zu||o==Yu}Fs.exports=Ju});var Ws=x((H3,Bs)=>{n();var Zu=ko(),Qu=Zu["__core-js_shared__"];Bs.exports=Qu});var $s=x(($3,Hs)=>{n();var er=Ws(),Gs=function(){var e=/[^.]+$/.exec(er&&er.keys&&er.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function eg(e){return!!Gs&&Gs in e}Hs.exports=eg});var js=x((V3,Vs)=>{n();var og=Function.prototype,ng=og.toString;function tg(e){if(e!=null){try{return ng.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Vs.exports=tg});var zs=x((j3,qs)=>{n();var rg=Us(),ag=$s(),ig=Mn(),sg=js(),cg=/[\\^$.*+?()[\]{}|]/g,pg=/^\[object .+?Constructor\]$/,mg=Function.prototype,dg=Object.prototype,lg=mg.toString,_g=dg.hasOwnProperty,ug=RegExp("^"+lg.call(_g).replace(cg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function gg(e){if(!ig(e)||ag(e))return!1;var o=rg(e)?ug:pg;return o.test(sg(e))}qs.exports=gg});var Xs=x((q3,Ks)=>{n();function fg(e,o){return e==null?void 0:e[o]}Ks.exports=fg});var On=x((z3,Ys)=>{n();var hg=zs(),Tg=Xs();function xg(e,o){var t=Tg(e,o);return hg(t)?t:void 0}Ys.exports=xg});var Po=x((K3,Js)=>{n();var yg=On(),Sg=yg(Object,"create");Js.exports=Sg});var ec=x((X3,Qs)=>{n();var Zs=Po();function bg(){this.__data__=Zs?Zs(null):{},this.size=0}Qs.exports=bg});var nc=x((Y3,oc)=>{n();function wg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}oc.exports=wg});var rc=x((J3,tc)=>{n();var vg=Po(),Ig="__lodash_hash_undefined__",Ag=Object.prototype,kg=Ag.hasOwnProperty;function Lg(e){var o=this.__data__;if(vg){var t=o[e];return t===Ig?void 0:t}return kg.call(o,e)?o[e]:void 0}tc.exports=Lg});var ic=x((Z3,ac)=>{n();var Pg=Po(),Eg=Object.prototype,Cg=Eg.hasOwnProperty;function Ng(e){var o=this.__data__;return Pg?o[e]!==void 0:Cg.call(o,e)}ac.exports=Ng});var cc=x((Q3,sc)=>{n();var Rg=Po(),Dg="__lodash_hash_undefined__";function Mg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Rg&&o===void 0?Dg:o,this}sc.exports=Mg});var mc=x((eM,pc)=>{n();var Og=ec(),Fg=nc(),Ug=rc(),Bg=ic(),Wg=cc();function ao(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}ao.prototype.clear=Og;ao.prototype.delete=Fg;ao.prototype.get=Ug;ao.prototype.has=Bg;ao.prototype.set=Wg;pc.exports=ao});var lc=x((oM,dc)=>{n();function Gg(){this.__data__=[],this.size=0}dc.exports=Gg});var uc=x((nM,_c)=>{n();function Hg(e,o){return e===o||e!==e&&o!==o}_c.exports=Hg});var Eo=x((tM,gc)=>{n();var $g=uc();function Vg(e,o){for(var t=e.length;t--;)if($g(e[t][0],o))return t;return-1}gc.exports=Vg});var hc=x((rM,fc)=>{n();var jg=Eo(),qg=Array.prototype,zg=qg.splice;function Kg(e){var o=this.__data__,t=jg(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():zg.call(o,t,1),--this.size,!0}fc.exports=Kg});var xc=x((aM,Tc)=>{n();var Xg=Eo();function Yg(e){var o=this.__data__,t=Xg(o,e);return t<0?void 0:o[t][1]}Tc.exports=Yg});var Sc=x((iM,yc)=>{n();var Jg=Eo();function Zg(e){return Jg(this.__data__,e)>-1}yc.exports=Zg});var wc=x((sM,bc)=>{n();var Qg=Eo();function ef(e,o){var t=this.__data__,s=Qg(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}bc.exports=ef});var Ic=x((cM,vc)=>{n();var of=lc(),nf=hc(),tf=xc(),rf=Sc(),af=wc();function io(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}io.prototype.clear=of;io.prototype.delete=nf;io.prototype.get=tf;io.prototype.has=rf;io.prototype.set=af;vc.exports=io});var kc=x((pM,Ac)=>{n();var sf=On(),cf=ko(),pf=sf(cf,"Map");Ac.exports=pf});var Ec=x((mM,Pc)=>{n();var Lc=mc(),mf=Ic(),df=kc();function lf(){this.size=0,this.__data__={hash:new Lc,map:new(df||mf),string:new Lc}}Pc.exports=lf});var Nc=x((dM,Cc)=>{n();function _f(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Cc.exports=_f});var Co=x((lM,Rc)=>{n();var uf=Nc();function gf(e,o){var t=e.__data__;return uf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Rc.exports=gf});var Mc=x((_M,Dc)=>{n();var ff=Co();function hf(e){var o=ff(this,e).delete(e);return this.size-=o?1:0,o}Dc.exports=hf});var Fc=x((uM,Oc)=>{n();var Tf=Co();function xf(e){return Tf(this,e).get(e)}Oc.exports=xf});var Bc=x((gM,Uc)=>{n();var yf=Co();function Sf(e){return yf(this,e).has(e)}Uc.exports=Sf});var Gc=x((fM,Wc)=>{n();var bf=Co();function wf(e,o){var t=bf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Wc.exports=wf});var $c=x((hM,Hc)=>{n();var vf=Ec(),If=Mc(),Af=Fc(),kf=Bc(),Lf=Gc();function so(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}so.prototype.clear=vf;so.prototype.delete=If;so.prototype.get=Af;so.prototype.has=kf;so.prototype.set=Lf;Hc.exports=so});var jc=x((TM,Vc)=>{n();var Pf="__lodash_hash_undefined__";function Ef(e){return this.__data__.set(e,Pf),this}Vc.exports=Ef});var zc=x((xM,qc)=>{n();function Cf(e){return this.__data__.has(e)}qc.exports=Cf});var Xc=x((yM,Kc)=>{n();var Nf=$c(),Rf=jc(),Df=zc();function Fn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Nf;++o<t;)this.add(e[o])}Fn.prototype.add=Fn.prototype.push=Rf;Fn.prototype.has=Df;Kc.exports=Fn});var Jc=x((SM,Yc)=>{n();function Mf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Yc.exports=Mf});var Qc=x((bM,Zc)=>{n();function Of(e){return e!==e}Zc.exports=Of});var op=x((wM,ep)=>{n();function Ff(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}ep.exports=Ff});var tp=x((vM,np)=>{n();var Uf=Jc(),Bf=Qc(),Wf=op();function Gf(e,o,t){return o===o?Wf(e,o,t):Uf(e,Bf,t)}np.exports=Gf});var ap=x((IM,rp)=>{n();var Hf=tp();function $f(e,o){var t=e==null?0:e.length;return!!t&&Hf(e,o,0)>-1}rp.exports=$f});var sp=x((AM,ip)=>{n();function Vf(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}ip.exports=Vf});var pp=x((kM,cp)=>{n();function jf(e,o){return e.has(o)}cp.exports=jf});var dp=x((LM,mp)=>{n();var qf=On(),zf=ko(),Kf=qf(zf,"Set");mp.exports=Kf});var _p=x((PM,lp)=>{n();function Xf(){}lp.exports=Xf});var or=x((EM,up)=>{n();function Yf(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}up.exports=Yf});var fp=x((CM,gp)=>{n();var nr=dp(),Jf=_p(),Zf=or(),Qf=1/0,eh=nr&&1/Zf(new nr([,-0]))[1]==Qf?function(e){return new nr(e)}:Jf;gp.exports=eh});var Tp=x((NM,hp)=>{n();var oh=Xc(),nh=ap(),th=sp(),rh=pp(),ah=fp(),ih=or(),sh=200;function ch(e,o,t){var s=-1,c=nh,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=th;else if(p>=sh){var y=o?null:ah(e);if(y)return ih(y);m=!1,c=rh,l=new oh}else l=o?[]:_;e:for(;++s<p;){var b=e[s],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var R=l.length;R--;)if(l[R]===S)continue e;o&&l.push(S),_.push(b)}else c(l,S,t)||(l!==_&&l.push(S),_.push(b))}return _}hp.exports=ch});var yp=x((RM,xp)=>{n();var ph=Tp();function mh(e){return e&&e.length?ph(e):[]}xp.exports=mh});var fe={};ee(fe,{css:()=>Cp,default:()=>qh});var Cp,qh,he=f(()=>{"use strict";n();Cp=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cp));qh={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var gT={};ee(gT,{TransactionInfoNonce:()=>uT});module.exports=Z(gT);n();var Mo=h(require("react"));n();var Ho=h(require("react")),$o=h(require("classnames"));n();var Wr=h(require("react"));n();var _o=h(require("react"));n();$e();var Fr=()=>!ke();var Bm=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(ot(),et))}),Wm=()=>(ot(),Z(et)).default,nt=Fr();function Br({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=_o.default.useState(nt?void 0:Wm()),[p,m]=_o.default.useState(nt||t==null?void 0:t()),_=()=>g(this,null,function*(){(e?e():Bm()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,_o.useEffect)(()=>{nt&&_()},[]),{globalStyles:s,styles:p}}function K(e,o){return t=>{let{globalStyles:s,styles:c}=Br({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Wr.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}var Hm=({children:e,title:o,className:t="",colWidth:s="2",noBorder:c=!1,globalStyles:p,styles:m})=>{var _,l,y,b;return Ho.default.createElement("div",{className:(0,$o.default)(p==null?void 0:p.row,m==null?void 0:m.detailItem,t,{[(_=p==null?void 0:p.pt3)!=null?_:""]:c,[(l=p==null?void 0:p.pb1)!=null?l:""]:c,[(y=p==null?void 0:p.borderBottom)!=null?y:""]:!c,[(b=p==null?void 0:p.py3)!=null?b:""]:!c})},Ho.default.createElement("div",{className:(0,$o.default)(p==null?void 0:p.textSecondary,p==null?void 0:p.textLgRight,p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${s}`])},o),Ho.default.createElement("div",{className:(0,$o.default)(p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${12-Number(s)}`])},e))},Hr=K(Hm,{ssrStyles:()=>Promise.resolve().then(()=>(rt(),tt)),clientStyles:()=>(rt(),Z(tt)).default});n();var Un=h(require("react")),Vp=require("@fortawesome/free-solid-svg-icons"),jp=require("@fortawesome/react-fontawesome"),dr=h(require("classnames"));n();n();n();var ki=require("react"),oo=require("react-redux");n();var Nt=require("@reduxjs/toolkit"),Ii=require("react-redux/lib/utils/Subscription");k();n();var ii=h(require("lodash.throttle"));I();k();ht();Xe();Ke();var Fd=[zo],Tn=!1,Ud=(0,ii.default)(()=>{ho(fo())},5e3),si=e=>o=>t=>{if(Fd.includes(t.type))return o(t);let s=e.getState(),c=Ee.local.getItem(xe.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return ho(fo());let m=Date.now();return c-m<0&&!Tn?setTimeout(()=>{Tn=!0,e.dispatch(Ia())},1e3):(Tn&&(Tn=!1),Ud()),o(t)};n();n();function xn(){return typeof sessionStorage!="undefined"}var bi=xn()?(_i(),Z(li)).default:(gi(),Z(ui)).default,wi=xn()?(hi(),Z(fi)).default:[],vi=xn()?(Si(),Z(yi)).default:e=>e;yn();var v=(0,Nt.configureStore)({reducer:bi,middleware:e=>e({serializableCheck:{ignoredActions:[...wi,ft.type,Jo.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(si)}),Ai=(0,Ii.createSubscription)(v),Rb=vi(v),Db=(0,Nt.configureStore)({reducer:Ce});var sl={store:v,subscription:Ai},Rt=(0,ki.createContext)(sl),Ub=(0,oo.createStoreHook)(Rt),W=(0,oo.createDispatchHook)(Rt),A=(0,oo.createSelectorHook)(Rt);n();n();k();n();var Li=h(require("lodash.isequal")),Sn=require("reselect"),T=(0,Sn.createSelectorCreator)(Sn.defaultMemoize,Li.default);var se=e=>e.account,Ne=T(se,e=>e.address),Re=T(se,Ne,(e,o)=>o in e.accounts?e.accounts[o]:Yo),cl=T(se,Re,(e,o)=>{let c=e,{accounts:t}=c,s=we(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),$b=T(Re,e=>e.balance),pl=T(Re,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Vb=T(se,e=>e.shard),ml=T(se,e=>e.ledgerAccount),jb=T(se,e=>e.walletConnectAccount),qb=T(se,e=>e.isAccountLoading),zb=T(se,e=>e.accountLoadingError),dl=T(se,e=>e.websocketEvent),ll=T(se,e=>e.websocketBatchEvent);n();var Pi=e=>e.dappConfig,Yb=T(Pi,e=>e.shouldUseWebViewProvider);n();var j=e=>e.loginInfo,_l=T(j,e=>e.loginMethod),bn=T(j,Ne,(e,o)=>Boolean(o)),e0=T(j,e=>e.walletConnectLogin),ul=T(j,e=>e.ledgerLogin),gl=T(j,e=>e.walletLogin),o0=T(j,e=>e.isLoginSessionInvalid),Dt=T(j,e=>e.tokenLogin),Ei=T(j,e=>e.logoutRoute),fl=T(j,e=>e.isWalletConnectV2Initialized);n();var Ci=e=>e.modals,r0=T(Ci,e=>e.txSubmittedModal),hl=T(Ci,e=>e.notificationModal);n();var ce=e=>e.networkConfig,wn=T(ce,e=>e.network.chainId),Tl=T(ce,e=>e.network.roundDuration),s0=T(ce,e=>e.network.walletConnectBridgeAddress),xl=T(ce,e=>e.network.walletConnectV2RelayAddress),yl=T(ce,e=>e.network.walletConnectV2ProjectId),Sl=T(ce,e=>e.network.walletConnectV2Options),bl=T(ce,e=>e.network.walletConnectDeepLink),q=T(ce,e=>e.network),Ni=T(q,e=>e.apiAddress),Ri=T(q,e=>e.explorerAddress),Di=T(q,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),wl=T(q,e=>e.xAliasAddress),Mi=T(q,e=>e.egldLabel);n();var vn=e=>e.signedMessageInfo,m0=T(vn,e=>e.isSigning),d0=T(vn,e=>e.errorMessage),l0=T(vn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),_0=T(vn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Oi=e=>e.toasts,vl=T(Oi,e=>e.customToasts),Fi=T(Oi,e=>e.transactionToasts);n();k();var Ui={errorMessage:bt,successMessage:wt,processingMessage:vt},Bi=e=>e.transactionsInfo,Il=T(Bi,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Ui);n();n();var pe=require("@multiversx/sdk-core");I();n();var Ot=require("@multiversx/sdk-core/out");n();n();function Mt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Wi=e=>{let o=e!=null?e:"";return Mt(o)?Ot.TransactionPayload.fromEncoded(o):new Ot.TransactionPayload(o)};n();I();var bo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(at).some(t=>e.startsWith(t)):!1;function In(e){var s,c,p;let o=u({},e);bo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new pe.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Wi(o.data),nonce:o.nonce.valueOf(),receiver:new pe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new pe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:jo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:qo,chainID:o.chainID.valueOf(),version:new pe.TransactionVersion((p=o.version)!=null?p:pa)}),o.options?{options:new pe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new pe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();n();var Pl=require("@multiversx/sdk-core/out");n();I();n();var Gi=require("@multiversx/sdk-core");N();n();var El=require("@multiversx/sdk-core");n();n();n();var Cl=require("@multiversx/sdk-core"),Nl=h(require("bignumber.js"));L();n();n();n();var Ut="blocks";n();n();n();n();H();n();n();H();n();n();n();var Wl=h(require("bignumber.js"));I();n();var Bl=require("@multiversx/sdk-core"),Wt=h(require("bignumber.js"));I();n();var Fl=h(require("bignumber.js"));n();Wt.default.config({ROUNDING_MODE:Wt.default.ROUND_FLOOR});n();n();n();I();n();n();n();n();I();n();I();n();var Gl=require("@multiversx/sdk-core");I();n();var vo=require("@multiversx/sdk-core"),Vl=h(require("bignumber.js"));I();n();n();var Hl=h(require("bignumber.js"));I();n();I();n();n();n();n();n();n();I();n();I();n();I();n();H();var ql=["reDelegateRewards","claimRewards","unBond"],zl=["wrapEgld","unwrapEgld"],Kl=["unStake"],Xl=["unDelegate"];n();n();n();I();n();var Ql=h(require("bignumber.js"));n();n();H();n();var o_=h(require("bignumber.js"));n();n();n();n();var r_=h(require("bignumber.js"));N();n();n();n();n();L();n();var c_=require("@multiversx/sdk-web-wallet-provider");I();n();var i_=h(require("qs"));n();B();$e();n();$e();var KA={search:ke()?window.location.search:"",removeParams:[]};n();n();n();U();n();H();n();n();U();n();var p_=h(require("linkifyjs"));n();I();n();var m_=h(require("bignumber.js"));n();N();n();n();L();n();L();n();n();n();H();n();H();n();var d_=h(require("bignumber.js"));I();H();n();H();n();var Ki=require("react");N();n();n();H();n();n();var l_=require("@multiversx/sdk-core/out"),__=h(require("bignumber.js"));H();n();N();n();n();N();var BL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Xi=require("react");N();U();n();var g_=require("react");H();var zL=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];eo();n();var Ln=e=>e.transactions,no=T(Ln,e=>e.signedTransactions),f_=T(Ln,e=>e.signTransactionsError),Yi=T(Ln,e=>e.signTransactionsCancelMessage),Pn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),Ji=T(no,Pn(Je)),Zi=T(no,Pn(Ze)),Qi=T(no,Pn(Qe)),h_=T(no,Pn(At)),es=T(Ln,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>In(t)))||[]})}),T_=T(no,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var os=require("react");n();k();n();n();n();n();n();n();n();n();var y_=require("@multiversx/sdk-extension-provider"),S_=require("@multiversx/sdk-hw-provider"),b_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),w_=require("@multiversx/sdk-opera-provider"),v_=require("@multiversx/sdk-passkey-provider/out"),I_=require("@multiversx/sdk-web-wallet-provider");I();Te();n();var to=require("@multiversx/sdk-web-wallet-iframe-provider/out"),ns=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");L();n();var Q=e=>`Unable to perform ${e}, Provider not initialized`,En=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(Q("getAccount"))}setAccount(o){throw new Error(Q(`setAccount: ${o}`))}login(o){throw new Error(Q(`login with options: ${o}`))}logout(o){throw new Error(Q(`logout with options: ${o}`))}getAddress(){throw new Error(Q("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(Q(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(Q(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(Q(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(Q(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(Q(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(Q(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},ts=new En;k();n();n();n();n();n();var rs=require("@lifeomic/axios-fetch"),Vt=h(require("axios")),jt=(0,rs.buildAxiosFetch)(Vt.default),qt=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function A_(e,o,t){return g(this,null,function*(){try{let s=yield jt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return qt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function k_(e,o){return g(this,null,function*(){try{let t=yield jt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return qt(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function L_(e,o,t){return g(this,null,function*(){try{let s=yield jt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return qt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var ro=Vt.default.create();ro.get=k_;ro.post=A_;ro.patch=L_;n();n();var P_=h(require("axios"));n();var E_=h(require("swr"));n();L();n();n();n();U();n();eo();n();n();n();var C_=h(require("axios"));n();var R_=h(require("axios"));qe();n();I();n();var D_=h(require("axios"));n();var O_=h(require("axios"));n();n();var F_=h(require("axios"));n();var U_=h(require("axios"));n();n();k();L();n();n();n();n();U();n();E();N();n();k();n();var cs=require("@multiversx/sdk-core");N();B();n();eo();n();k();L();n();k();N();n();n();n();N();n();Vo();n();n();n();n();var H_=h(require("swr"));n();n();n();n();var ps=require("react");n();n();var $_=require("react"),V_=require("@multiversx/sdk-web-wallet-provider"),j_=require("@multiversx/sdk-web-wallet-provider"),q_=h(require("qs"));I();k();L();st();U();var NR=D();n();var Ms=require("react"),Qt=require("@multiversx/sdk-core");n();I();Tt();n();n();n();n();n();n();n();n();n();n();qe();n();var Y_=h(require("axios"));n();var Z_=h(require("axios"));n();qe();n();qe();n();n();n();n();var eu=require("@multiversx/sdk-opera-provider");n();var ou=require("@multiversx/sdk-extension-provider");n();Te();n();n();n();n();var Au=h(Cs());n();var Eu=require("@multiversx/sdk-native-auth-client");n();var Ds=h(require("axios"));n();n();n();function Ns(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Rs=(e,o,t,s=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Ns(o.delay)),yield Rs(e,o,t,s+1)):null}}),Jt=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield Rs(e,o,t)});var ku=4;var QD=Jt((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Ds.default.get(`${e}/${Ut}?from=${ku}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();Ko();n();n();U();var p2={origin:D().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Nu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Ru=require("@multiversx/sdk-passkey-provider/out");I();U();n();n();n();var Bu=require("react"),Wu=require("@multiversx/sdk-hw-provider");n();E();N();n();To();Xe();Ke();B();n();n();var vp=require("react"),Ip=require("@multiversx/sdk-core"),Lh=require("@multiversx/sdk-extension-provider"),Ph=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Eh=require("@multiversx/sdk-passkey-provider/out"),Ch=h(yp());I();n();n();var Me=()=>A(Re);n();n();n();n();n();n();n();n();var No=h(require("react"));var XM=(0,No.createContext)({}),YM=v.getState();n();var bp=h(require("react"));n();var tr=h(require("react")),dh=h(require("axios"));n();n();Te();n();n();var hh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Th=require("@multiversx/sdk-webview-provider/out/WebviewProvider");E();n();E();k();N();n();n();k();n();B();n();k();N();n();n();var _h=require("@multiversx/sdk-core"),uh=h(require("bignumber.js"));I();n();var gh=h(require("bignumber.js"));I();k();L();B();U();n();var wp=require("react"),bh=require("@multiversx/sdk-extension-provider"),wh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),vh=require("@multiversx/sdk-passkey-provider/out");Te();k();n();k();N();To();U();n();ae();k();n();n();var Rh=require("react");n();n();L();eo();n();var Ap=require("react");n();n();var Mh=require("react"),Oh=require("@multiversx/sdk-extension-provider");ae();E();L();n();_e();B();B();n();n();Te();N();n();var Dh=require("react"),kp=require("@multiversx/sdk-core");k();n();var Fh=require("react"),Uh=require("@multiversx/sdk-opera-provider");ae();E();L();_e();B();U();n();var Bh=require("react");pt();ae();Te();E();k();L();_e();U();n();var Vh=require("react");ae();k();n();n();mt();n();n();var Wh=h(require("platform"));$e();n();n();n();n();n();n();n();uo();L();n();n();var Gh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();To();Xe();n();n();n();k();n();n();var Hh=h(require("axios"));B();n();n();var $h=h(Mn());uo();var Lp,Pp,Ep,WB=(Ep=(Pp=(Lp=Pe.safeWindow)==null?void 0:Lp.location)==null?void 0:Pp.origin)==null?void 0:Ep.includes("localhost");n();U();n();n();var Qh=require("react");I();n();n();I();n();n();n();var jh=h(require("bignumber.js"));n();n();n();var be=h(require("react")),Fp=require("react"),Up=require("react"),cr=h(require("classnames")),Bp=require("react-dom");I();n();var Np=h(require("react")),Rp=h(require("classnames"));var zh=({className:e,children:o,styles:t})=>Np.default.createElement("div",{className:(0,Rp.default)(t==null?void 0:t.dappModalBody,e)},o),rr=K(zh,{ssrStyles:()=>Promise.resolve().then(()=>(he(),fe)),clientStyles:()=>(he(),Z(fe)).default});n();var ar=h(require("react")),Dp=h(require("classnames"));var Kh=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?ar.default.createElement("div",{className:(0,Dp.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:ar.default.createElement("div",null,s)):null,ir=K(Kh,{ssrStyles:()=>Promise.resolve().then(()=>(he(),fe)),clientStyles:()=>(he(),Z(fe)).default});n();var mo=h(require("react")),Mp=require("@fortawesome/free-solid-svg-icons"),Op=require("@fortawesome/react-fontawesome"),Do=h(require("classnames"));var Xh=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?mo.default.createElement("div",{className:(0,Do.default)(l==null?void 0:l.dappModalHeader,s)},t):mo.default.createElement("div",{className:(0,Do.default)(l==null?void 0:l.dappModalHeader,s)},mo.default.createElement("div",{className:(0,Do.default)(l==null?void 0:l.dappModalHeaderText,p)},o),mo.default.createElement("button",{onClick:m,className:(0,Do.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},mo.default.createElement(Op.FontAwesomeIcon,{size:"lg",icon:Mp.faTimes}))):null,sr=K(Xh,{ssrStyles:()=>Promise.resolve().then(()=>(he(),fe)),clientStyles:()=>(he(),Z(fe)).default});var Yh={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Jh=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=Yh,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:y})=>{let[b,S]=(0,Fp.useState)(!1);if((0,Up.useEffect)(()=>{S(!0)},[]),!l)return null;let{showHeader:R,showFooter:M,headerText:Y,footerText:Be,modalDialogClassName:Oo="dapp-modal-dialog",modalContentClassName:Bn="dapp-modal-dialog-content",modalHeaderClassName:Wn="dapp-modal-dialog-header",modalHeaderTextClassName:Gn="dapp-modal-dialog-header-text",modalCloseButtonClassName:J="dapp-modal-dialog-close-button",modalBodyClassName:zp="dapp-modal-dialog-content-body",modalFooterClassName:Kp="dapp-modal-dialog-footer",customModalHeader:Xp,customModalFooter:Yp}=c,Jp=Zp=>{Zp.key==="Escape"&&s&&(m==null||m())};return be.default.createElement(be.default.Fragment,null,b&&(0,Bp.createPortal)(be.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,cr.default)(Oo,y==null?void 0:y.dappModal,t),"data-testid":e,onKeyDown:Jp},be.default.createElement("div",{className:(0,cr.default)(y==null?void 0:y.dappModalContent,Bn)},be.default.createElement(sr,{visible:R,headerText:Y,customHeader:Xp,className:Wn,headerTextClassName:Gn,closeButtonClassName:J,onHide:m}),be.default.createElement(rr,{className:zp},o),be.default.createElement(ir,{visible:M,customFooter:Yp,footerText:Be,className:Kp}))),_!=null?_:document==null?void 0:document.body))},Zh=K(Jh,{ssrStyles:()=>Promise.resolve().then(()=>(he(),fe)),clientStyles:()=>(he(),Z(fe)).default});n();n();var Wp=require("react");n();n();var Gp=require("react"),oT=require("@multiversx/sdk-hw-provider");ae();E();k();L();_e();n();var eT=require("react");n();n();var pr=require("react");E();k();L();_e();U();n();var tT=require("react"),rT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ae();E();L();_e();B();B();n();var aT=require("react"),iT=require("@multiversx/sdk-passkey-provider/out");ae();E();L();_e();B();B();n();n();var Hp=require("react");n();var pT=require("react");n();var mr=require("react"),cT=require("socket.io-client");k();n();n();n();var mT=require("react");N();n();n();n();var lT=h(require("swr"));n();n();n();n();var dT=h(require("axios"));n();var _T=({transaction:e,globalStyles:o})=>{let{nonce:t}=Me(),{nonce:s}=e;return s>t?Un.default.createElement("div",{className:(0,dr.default)(o==null?void 0:o.dFlex,o==null?void 0:o.ml1)},Un.default.createElement(jp.FontAwesomeIcon,{icon:Vp.faAngleDown,className:o==null?void 0:o.textSecondary,style:{marginTop:"2px"},transform:{rotate:45}}),"\xA0",Un.default.createElement("small",{className:(0,dr.default)(o==null?void 0:o.textWarning,o==null?void 0:o.ml1)}," ","Probable higher nonce in transaction")):null},qp=K(_T,{});var uT=({className:e,transaction:o})=>Mo.default.createElement(Hr,{className:e,title:"Nonce"},Mo.default.createElement(Mo.default.Fragment,null,o.nonce,Mo.default.createElement(qp,{transaction:o})));0&&(module.exports={TransactionInfoNonce});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TransactionInfoNonce.js.map
