"use strict";var xm=Object.create;var To=Object.defineProperty,ym=Object.defineProperties,Sm=Object.getOwnPropertyDescriptor,bm=Object.getOwnPropertyDescriptors,wm=Object.getOwnPropertyNames,Vo=Object.getOwnPropertySymbols,vm=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable;var Pr=(e,o,t)=>o in e?To(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Yn.call(o,t)&&Pr(e,t,o[t]);if(Vo)for(var t of Vo(o))Er.call(o,t)&&Pr(e,t,o[t]);return e},w=(e,o)=>ym(e,bm(o));var ve=(e,o)=>{var t={};for(var s in e)Yn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Vo)for(var s of Vo(e))o.indexOf(s)<0&&Er.call(e,s)&&(t[s]=e[s]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),X=(e,o)=>{for(var t in o)To(e,t,{get:o[t],enumerable:!0})},Cr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of wm(o))!Yn.call(e,c)&&c!==t&&To(e,c,{get:()=>o[c],enumerable:!(s=Sm(o,c))||s.enumerable});return e};var f=(e,o,t)=>(t=e!=null?xm(vm(e)):{},Cr(o||!e||!e.__esModule?To(t,"default",{value:e,enumerable:!0}):t,e)),H=e=>Cr(To({},"__esModule",{value:!0}),e);var h=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{l(t.next(_))}catch(g){c(g)}},m=_=>{try{l(t.throw(_))}catch(g){c(g)}},l=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);l((t=t.apply(e,o)).next())});var Dr=y(qo=>{"use strict";n();qo.byteLength=Am;qo.toByteArray=Lm;qo.fromByteArray=Cm;var oe=[],Y=[],Im=typeof Uint8Array!="undefined"?Uint8Array:Array,Jn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ie=0,Nr=Jn.length;Ie<Nr;++Ie)oe[Ie]=Jn[Ie],Y[Jn.charCodeAt(Ie)]=Ie;var Ie,Nr;Y["-".charCodeAt(0)]=62;Y["_".charCodeAt(0)]=63;function Rr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function Am(e){var o=Rr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function km(e,o,t){return(o+t)*3/4-t}function Lm(e){var o,t=Rr(e),s=t[0],c=t[1],p=new Im(km(e,s,c)),m=0,l=c>0?s-4:s,_;for(_=0;_<l;_+=4)o=Y[e.charCodeAt(_)]<<18|Y[e.charCodeAt(_+1)]<<12|Y[e.charCodeAt(_+2)]<<6|Y[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Y[e.charCodeAt(_)]<<2|Y[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=Y[e.charCodeAt(_)]<<10|Y[e.charCodeAt(_+1)]<<4|Y[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Pm(e){return oe[e>>18&63]+oe[e>>12&63]+oe[e>>6&63]+oe[e&63]}function Em(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Pm(s));return c.join("")}function Cm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,l=t-s;m<l;m+=p)c.push(Em(e,m,m+p>l?l:m+p));return s===1?(o=e[t-1],c.push(oe[o>>2]+oe[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(oe[o>>10]+oe[o>>4&63]+oe[o<<2&63]+"=")),c.join("")}});var Mr=y(Zn=>{n();Zn.read=function(e,o,t,s,c){var p,m,l=c*8-s-1,_=(1<<l)-1,g=_>>1,b=-7,S=t?c-1:0,P=t?-1:1,M=e[o+S];for(S+=P,p=M&(1<<-b)-1,M>>=-b,b+=l;b>0;p=p*256+e[o+S],S+=P,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+S],S+=P,b-=8);if(p===0)p=1-g;else{if(p===_)return m?NaN:(M?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(M?-1:1)*m*Math.pow(2,p-s)};Zn.write=function(e,o,t,s,c,p){var m,l,_,g=p*8-c-1,b=(1<<g)-1,S=b>>1,P=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,M=s?0:p-1,Z=s?1:-1,Be=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(l=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+S>=1?o+=P/_:o+=P*Math.pow(2,1-S),o*_>=2&&(m++,_/=2),m+S>=b?(l=0,m=b):m+S>=1?(l=(o*_-1)*Math.pow(2,c),m=m+S):(l=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+M]=l&255,M+=Z,l/=256,c-=8);for(m=m<<c|l,g+=c;g>0;e[t+M]=m&255,M+=Z,m/=256,g-=8);e[t+M-Z]|=Be*128}});var Kr=y(Ge=>{"use strict";n();var Qn=Dr(),We=Mr(),Or=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ge.Buffer=d;Ge.SlowBuffer=Fm;Ge.INSPECT_MAX_BYTES=50;var jo=2147483647;Ge.kMaxLength=jo;d.TYPED_ARRAY_SUPPORT=Nm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Nm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function me(e){if(e>jo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return tt(e)}return Br(e,o,t)}d.poolSize=8192;function Br(e,o,t){if(typeof e=="string")return Dm(e,o);if(ArrayBuffer.isView(e))return Mm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ne(e,ArrayBuffer)||e&&ne(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ne(e,SharedArrayBuffer)||e&&ne(e.buffer,SharedArrayBuffer)))return ot(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=Om(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return Br(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Wr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Rm(e,o,t){return Wr(e),e<=0?me(e):o!==void 0?typeof t=="string"?me(e).fill(o,t):me(e).fill(o):me(e)}d.alloc=function(e,o,t){return Rm(e,o,t)};function tt(e){return Wr(e),me(e<0?0:rt(e)|0)}d.allocUnsafe=function(e){return tt(e)};d.allocUnsafeSlow=function(e){return tt(e)};function Dm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Gr(e,o)|0,s=me(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function et(e){for(var o=e.length<0?0:rt(e.length)|0,t=me(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Mm(e){if(ne(e,Uint8Array)){var o=new Uint8Array(e);return ot(o.buffer,o.byteOffset,o.byteLength)}return et(e)}function ot(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function Om(e){if(d.isBuffer(e)){var o=rt(e.length)|0,t=me(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||at(e.length)?me(0):et(e);if(e.type==="Buffer"&&Array.isArray(e.data))return et(e.data)}function rt(e){if(e>=jo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+jo.toString(16)+" bytes");return e|0}function Fm(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ne(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ne(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ne(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Gr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ne(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return nt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return zr(e).length;default:if(c)return s?-1:nt(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=Gr;function Um(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Km(this,o,t);case"utf8":case"utf-8":return $r(this,o,t);case"ascii":return jm(this,o,t);case"latin1":case"binary":return zm(this,o,t);case"base64":return Vm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xm(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Ae(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ae(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ae(this,t,t+3),Ae(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ae(this,t,t+7),Ae(this,t+1,t+6),Ae(this,t+2,t+5),Ae(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?$r(this,0,o):Um.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=Ge.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Or&&(d.prototype[Or]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ne(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,l=s-t,_=Math.min(m,l),g=this.slice(c,p),b=o.slice(t,s),S=0;S<_;++S)if(g[S]!==b[S]){m=g[S],l=b[S];break}return m<l?-1:l<m?1:0};function Hr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,at(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:Fr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Fr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Fr(e,o,t,s,c){var p=1,m=e.length,l=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,l/=2,t/=2}function _(M,Z){return p===1?M[Z]:M.readUInt16BE(Z*p)}var g;if(c){var b=-1;for(g=t;g<m;g++)if(_(e,g)===_(o,b===-1?0:g-b)){if(b===-1&&(b=g),g-b+1===l)return b*p}else b!==-1&&(g-=g-b),b=-1}else for(t+l>m&&(t=m-l),g=t;g>=0;g--){for(var S=!0,P=0;P<l;P++)if(_(e,g+P)!==_(o,P)){S=!1;break}if(S)return g}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return Hr(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return Hr(this,o,t,s,!1)};function Bm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var l=parseInt(o.substr(m*2,2),16);if(at(l))return m;e[t+m]=l}return m}function Wm(e,o,t,s){return zo(nt(o,e.length-t),e,t,s)}function Gm(e,o,t,s){return zo(Zm(o),e,t,s)}function Hm(e,o,t,s){return zo(zr(o),e,t,s)}function $m(e,o,t,s){return zo(Qm(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Bm(this,o,t,s);case"utf8":case"utf-8":return Wm(this,o,t,s);case"ascii":case"latin1":case"binary":return Gm(this,o,t,s);case"base64":return Hm(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $m(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Vm(e,o,t){return o===0&&t===e.length?Qn.fromByteArray(e):Qn.fromByteArray(e.slice(o,t))}function $r(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,l=p>239?4:p>223?3:p>191?2:1;if(c+l<=t){var _,g,b,S;switch(l){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(S=(p&31)<<6|_&63,S>127&&(m=S));break;case 3:_=e[c+1],g=e[c+2],(_&192)===128&&(g&192)===128&&(S=(p&15)<<12|(_&63)<<6|g&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:_=e[c+1],g=e[c+2],b=e[c+3],(_&192)===128&&(g&192)===128&&(b&192)===128&&(S=(p&15)<<18|(_&63)<<12|(g&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=l}return qm(s)}var Ur=4096;function qm(e){var o=e.length;if(o<=Ur)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Ur));return t}function jm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function zm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Km(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=ed[e[p]];return c}function Xm(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function O(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||O(o,4,this.length),We.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||O(o,4,this.length),We.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||O(o,8,this.length),We.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||O(o,8,this.length),We.read(this,o,!1,52,8)};function $(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;$(this,o,t,s,p,0)}var m=1,l=0;for(this[t]=o&255;++l<s&&(m*=256);)this[t+l]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;$(this,o,t,s,p,0)}var m=s-1,l=1;for(this[t+m]=o&255;--m>=0&&(l*=256);)this[t+m]=o/l&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);$(this,o,t,s,p-1,-p)}var m=0,l=1,_=0;for(this[t]=o&255;++m<s&&(l*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);$(this,o,t,s,p-1,-p)}var m=s-1,l=1,_=0;for(this[t+m]=o&255;--m>=0&&(l*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Vr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function qr(e,o,t,s,c){return o=+o,t=t>>>0,c||Vr(e,o,t,4,34028234663852886e22,-34028234663852886e22),We.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return qr(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return qr(this,o,t,!1,s)};function jr(e,o,t,s,c){return o=+o,t=t>>>0,c||Vr(e,o,t,8,17976931348623157e292,-17976931348623157e292),We.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return jr(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return jr(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var l=d.isBuffer(o)?o:d.from(o,c),_=l.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=l[m%_]}return this};var Ym=/[^+/0-9A-Za-z-_]/g;function Jm(e){if(e=e.split("=")[0],e=e.trim().replace(Ym,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function nt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Zm(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Qm(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function zr(e){return Qn.toByteArray(Jm(e))}function zo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ne(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function at(e){return e!==e}var ed=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Qr=y((Yh,Zr)=>{n();var N=Zr.exports={},te,re;function it(){throw new Error("setTimeout has not been defined")}function st(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?te=setTimeout:te=it}catch(e){te=it}try{typeof clearTimeout=="function"?re=clearTimeout:re=st}catch(e){re=st}})();function Xr(e){if(te===setTimeout)return setTimeout(e,0);if((te===it||!te)&&setTimeout)return te=setTimeout,setTimeout(e,0);try{return te(e,0)}catch(o){try{return te.call(null,e,0)}catch(t){return te.call(this,e,0)}}}function od(e){if(re===clearTimeout)return clearTimeout(e);if((re===st||!re)&&clearTimeout)return re=clearTimeout,clearTimeout(e);try{return re(e)}catch(o){try{return re.call(null,e)}catch(t){return re.call(this,e)}}}var de=[],He=!1,ke,Ko=-1;function nd(){!He||!ke||(He=!1,ke.length?de=ke.concat(de):Ko=-1,de.length&&Yr())}function Yr(){if(!He){var e=Xr(nd);He=!0;for(var o=de.length;o;){for(ke=de,de=[];++Ko<o;)ke&&ke[Ko].run();Ko=-1,o=de.length}ke=null,He=!1,od(e)}}N.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];de.push(new Jr(e,o)),de.length===1&&!He&&Xr(Yr)};function Jr(e,o){this.fun=e,this.array=o}Jr.prototype.run=function(){this.fun.apply(null,this.array)};N.title="browser";N.browser=!0;N.env={};N.argv=[];N.version="";N.versions={};function le(){}N.on=le;N.addListener=le;N.once=le;N.off=le;N.removeListener=le;N.removeAllListeners=le;N.emit=le;N.prependListener=le;N.prependOnceListener=le;N.listeners=function(e){return[]};N.binding=function(e){throw new Error("process.binding is not supported")};N.cwd=function(){return"/"};N.chdir=function(e){throw new Error("process.chdir is not supported")};N.umask=function(){return 0}});var r,i,td,a,n=T(()=>{r=f(Kr()),i=f(Qr()),td=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=td});var ct,pt=T(()=>{"use strict";n();ct="1.0.22"});var ea=T(()=>{"use strict";n()});var Xo,ae=T(()=>{"use strict";n();Xo="Transaction canceled"});var oa=T(()=>{"use strict";n()});var mt,na=T(()=>{"use strict";n();mt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(mt||{})});var dt=T(()=>{"use strict";n()});var ta=T(()=>{"use strict";n()});var lt=T(()=>{"use strict";n()});var ra=T(()=>{"use strict";n()});var aa=T(()=>{"use strict";n()});var Le,$e,he=T(()=>{"use strict";n();Le=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),$e=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var ia,cx,sa,px,L=T(()=>{"use strict";n();he();ia=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ia||{}),cx=u(u({},$e.WindowProviderRequestEnums),ia),sa=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(sa||{}),px=u(u({},$e.WindowProviderResponseEnums),sa)});var ca=T(()=>{"use strict";n()});var pa=T(()=>{"use strict";n()});var V=T(()=>{"use strict";n()});var ma=T(()=>{"use strict";n()});var da=T(()=>{"use strict";n()});var la=T(()=>{"use strict";n()});var R=T(()=>{"use strict";n();lt();ra();aa();L();ca();pa();V();ma();da();la()});var Ve,_a,Ax,ua,kx,ga,Lx,Px,rd,qe=T(()=>{"use strict";n();R();Ve={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:_a,egldLabel:Ax}=Ve["devnet"],{chainId:ua,egldLabel:kx}=Ve["testnet"],{chainId:ga,egldLabel:Lx}=Ve["mainnet"],Px={["devnet"]:_a,["testnet"]:ua,["mainnet"]:ga},rd={[_a]:"devnet",[ua]:"testnet",[ga]:"mainnet"}});var Yo=T(()=>{"use strict";n()});var ie,fa=T(()=>{"use strict";n();ie=require("@multiversx/sdk-web-wallet-provider")});var Pe,ho=T(()=>{"use strict";n();Pe=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ta,ha,_t,Mx,Ox,ut=T(()=>{"use strict";n();ho();_t=String((ha=(Ta=Pe.safeWindow)==null?void 0:Ta.navigator)==null?void 0:ha.userAgent),Mx=/^((?!chrome|android).)*safari/i.test(_t),Ox=/firefox/i.test(_t)&&/windows/i.test(_t)});var Jo,Zo,xa,Qo,ya,je,v=T(()=>{"use strict";n();ea();ae();oa();na();pt();dt();ta();qe();Yo();fa();ut();Jo=5e4,Zo=1e9,xa=1,Qo="logout",ya="login",je="0"});var xo,en=T(()=>{"use strict";n();xo=()=>Date.now()/1e3});var Sa=T(()=>{"use strict";n()});var ba=T(()=>{"use strict";n()});var gt=T(()=>{"use strict";n();en();Sa();ba()});var ft={};X(ft,{clear:()=>cd,getItem:()=>id,localStorageKeys:()=>xe,removeItem:()=>sd,setItem:()=>ad});var xe,on,ad,id,sd,cd,ze=T(()=>{"use strict";n();gt();xe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},on=typeof localStorage!="undefined",ad=({key:e,data:o,expires:t})=>{!on||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},id=e=>{if(!on)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:xo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},sd=e=>{!on||localStorage.removeItem(String(e))},cd=()=>{!on||localStorage.clear()}});var Tt={};X(Tt,{clear:()=>Aa,getItem:()=>va,removeItem:()=>Ia,setItem:()=>wa,storage:()=>pd});var wa,va,Ia,Aa,pd,ka=T(()=>{"use strict";n();wa=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},va=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ia=e=>sessionStorage.removeItem(String(e)),Aa=()=>sessionStorage.clear(),pd={setItem:wa,getItem:va,removeItem:Ia,clear:Aa}});var Ee,Ke=T(()=>{"use strict";n();ze();ka();Ee={session:Tt,local:ft}});var ht,E,j,C=T(()=>{"use strict";n();ht=require("@reduxjs/toolkit");v();E=(0,ht.createAction)(Qo),j=(0,ht.createAction)(ya,e=>({payload:e}))});var yt,La,Pa,nn,xt,Ea,tn,md,St,_y,dd,ld,uy,gy,fy,_d,ud,rn,an=T(()=>{"use strict";n();yt=require("@multiversx/sdk-core"),La=require("@reduxjs/toolkit"),Pa=require("redux-persist");v();Ke();ze();C();nn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:je},xt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":nn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ea=(0,La.createSlice)({name:"accountInfoSlice",initialState:xt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new yt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:nn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(E,()=>(Ee.local.removeItem(xe.loginExpiresAt),xt)),e.addCase(j,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new yt.Address(s).hex()}),e.addCase(Pa.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:l}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:xt.accounts,o.publicKey=l})}}),{setAccount:tn,setAddress:md,setAccountNonce:St,setAccountShard:_y,setLedgerAccount:dd,updateLedgerAccount:ld,setWalletConnectAccount:uy,setIsAccountLoading:gy,setAccountLoadingError:fy,setWebsocketEvent:_d,setWebsocketBatchEvent:ud}=Ea.actions,rn=Ea.reducer});function yo(){return new Date().setHours(new Date().getHours()+24)}function So(e){Ee.local.setItem({key:xe.loginExpiresAt,data:e,expires:e})}var bt=T(()=>{"use strict";n();Ke();ze()});var Na,Ca,Ra,Ay,gd,fd,Da,ky,Td,Ma,Ly,Py,Ey,sn,cn=T(()=>{"use strict";n();Na=require("@reduxjs/toolkit");bt();L();C();Ca={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ra=(0,Na.createSlice)({name:"loginInfoSlice",initialState:Ca,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(E,()=>Ca),e.addCase(j,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,So(yo())})}}),{setLoginMethod:Ay,setWalletConnectLogin:gd,setLedgerLogin:fd,setTokenLogin:Da,setTokenLoginSignature:ky,setWalletLogin:Td,invalidateLoginSession:Ma,setLogoutRoute:Ly,setIsWalletConnectV2Initialized:Py,setWebviewLogin:Ey}=Ra.actions,sn=Ra.reducer});var Fa,Oa,Ua,Dy,hd,My,xd,pn,mn=T(()=>{"use strict";n();Fa=require("@reduxjs/toolkit");C();Oa={},Ua=(0,Fa.createSlice)({name:"modalsSlice",initialState:Oa,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(E,()=>Oa)}}),{setTxSubmittedModal:Dy,setNotificationModal:hd,clearTxSubmittedModal:My,clearNotificationModal:xd}=Ua.actions,pn=Ua.reducer});var Ce,Xe=T(()=>{"use strict";n();Ce=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var D,U=T(()=>{"use strict";n();Xe();D=()=>{if(!Ce())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Ba=T(()=>{"use strict";n();U()});var Wa=T(()=>{"use strict";n();B()});var Ga=T(()=>{"use strict";n();ho()});var B=T(()=>{"use strict";n();Ba();Wa();U();Ga()});var bo=T(()=>{"use strict";n();B()});var $a=T(()=>{"use strict";n();bo()});function Va(e){return e[Math.floor(Math.random()*e.length)]}var qa=T(()=>{"use strict";n()});var wt=T(()=>{"use strict";n();dt()});var _e=T(()=>{"use strict";n();$a();qa();wt()});var ja,za,Ka,vt,Sd,Xa,uS,gS,bd,dn,ln=T(()=>{"use strict";n();ja=require("@reduxjs/toolkit"),za=f(require("lodash.omit")),Ka=require("redux-persist");Yo();C();_e();vt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Sd={network:vt},Xa=(0,ja.createSlice)({name:"appConfig",initialState:Sd,reducers:{initializeNetworkConfig:(e,o)=>{let t=Va(o.payload.walletConnectV2RelayAddresses),s=(0,za.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(E,o=>{o.network.customWalletAddress=void 0}),e.addCase(Ka.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:uS,updateNetworkConfig:gS,setCustomWalletAddress:bd}=Xa.actions,dn=Xa.reducer});var Ya,It,Ja,SS,bS,wS,_n,un=T(()=>{"use strict";n();Ya=require("@reduxjs/toolkit");R();C();It={isSigning:!1,signedSessions:{}},Ja=(0,Ya.createSlice)({name:"signedMessageInfoSliceState",initialState:It,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>It},extraReducers:e=>{e.addCase(E,()=>It)}}),{setSignSession:SS,clearSignedMessageInfo:bS,setSignSessionState:wS}=Ja.actions,_n=Ja.reducer});var Qa,ei,Za,oi,wd,vd,ES,Id,gn,fn=T(()=>{"use strict";n();Qa=require("@reduxjs/toolkit"),ei=require("redux-persist");R();en();C();Za={customToasts:[],transactionToasts:[]},oi=(0,Qa.createSlice)({name:"toastsSlice",initialState:Za,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:xo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(E,()=>Za),e.addCase(ei.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:wd,removeCustomToast:vd,addTransactionToast:ES,removeTransactionToast:Id}=oi.actions,gn=oi.reducer});var ni,kt,Lt,Pt,Ad,At,ti,DS,kd,Tn,hn,xn=T(()=>{"use strict";n();ni=require("@reduxjs/toolkit");C();kt="Transaction failed",Lt="Transaction successful",Pt="Processing transaction",Ad="Transaction submitted",At={},ti=(0,ni.createSlice)({name:"transactionsInfo",initialState:At,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||kt,successMessage:(s==null?void 0:s.successMessage)||Lt,processingMessage:(s==null?void 0:s.processingMessage)||Pt,submittedMessage:(s==null?void 0:s.submittedMessage)||Ad,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>At},extraReducers:e=>{e.addCase(E,()=>At)}}),{clearTransactionsInfo:DS,setTransactionsDisplayInfo:kd,clearTransactionsInfoForSessionId:Tn}=ti.actions,hn=ti.reducer});function Je(e){return e!=null&&(Fd(e)||Hd(e))}function Ze(e){return e!=null&&(Ud(e)||$d(e))}function Qe(e){return e!=null&&(Bd(e)||Vd(e))}function ri(e){return e!=null&&(Wd(e)||qd(e))}function Et(e){return e!=null&&Gd(e)}function Fd(e){return e!=null&&Ld.includes(e)}function Ud(e){return e!=null&&Pd.includes(e)}function Bd(e){return e!=null&&Ed.includes(e)}function Wd(e){return e!=null&&Cd.includes(e)}function Gd(e){return e!=null&&Nd.includes(e)}function Hd(e){return e!=null&&Rd.includes(e)}function $d(e){return e!=null&&Dd.includes(e)}function Vd(e){return e!=null&&Md.includes(e)}function qd(e){return e!=null&&Od.includes(e)}var Ld,Pd,Ed,Cd,Nd,Rd,Dd,Md,Od,eo=T(()=>{"use strict";n();L();Ld=["sent"],Pd=["success"],Ed=["fail","cancelled","timedOut"],Cd=["invalid"],Nd=["timedOut"],Rd=["pending"],Dd=["success"],Md=["fail","invalid"],Od=["not executed"]});var ai,ii,wo,jd,si,ci,pi,zd,vo,Kd,Xd,$S,Yd,oo,Ct,VS,yn,Sn=T(()=>{"use strict";n();ai=require("@reduxjs/toolkit"),ii=require("redux-persist");L();eo();C();wo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},jd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},si=(0,ai.createSlice)({name:"transactionsSlice",initialState:wo,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:l}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},jd),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),l!=null?l:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=wo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,b,S,P,M,Z,Be,$o;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:l}=o.payload,_=(b=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:b.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(Q=>Q.hash===p?w(u(u({},m!=null?m:{}),Q),{status:s,errorMessage:c,inTransit:l}):Q);let zn=(P=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:P.every(Q=>Ze(Q.status)),Kn=(Z=(M=e.signedTransactions[t])==null?void 0:M.transactions)==null?void 0:Z.some(Q=>Qe(Q.status)),Xn=($o=(Be=e.signedTransactions[t])==null?void 0:Be.transactions)==null?void 0:$o.every(Q=>ri(Q.status));zn&&(e.signedTransactions[t].status="success"),Kn&&(e.signedTransactions[t].status="fail"),Xn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=wo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=wo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(E,()=>wo),e.addCase(ii.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((l,[_,g])=>{let b=new Date(_),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(l[_]=g),l},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ci,updateSignedTransactions:pi,setTransactionsToSign:zd,clearAllTransactionsToSign:vo,clearAllSignedTransactions:Kd,clearSignedTransaction:Xd,clearTransactionToSign:$S,setSignTransactionsError:Yd,setSignTransactionsCancelMessage:oo,moveTransactionsToSignedState:Ct,updateSignedTransactionsCustomTransactionInformation:VS}=si.actions,yn=si.reducer});var mi,Nt,di,KS,XS,Jd,YS,bn,wn=T(()=>{"use strict";n();mi=require("@reduxjs/toolkit");C();Nt={},di=(0,mi.createSlice)({name:"batchTransactionsSlice",initialState:Nt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Nt},extraReducers:e=>{e.addCase(E,()=>Nt)}}),{setBatchTransactions:KS,updateBatchTransactions:XS,clearBatchTransactions:Jd,clearAllBatchTransactions:YS}=di.actions,bn=di.reducer});var _i,li,ui,eb,gi,Rt=T(()=>{"use strict";n();_i=require("@reduxjs/toolkit");C();li={},ui=(0,_i.createSlice)({name:"dappConfigSlice",initialState:li,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(E,()=>li)}}),{setDappConfig:eb}=ui.actions,gi=ui.reducer});var k=T(()=>{"use strict";n();an();cn();mn();ln();un();fn();xn();Sn();wn();Rt()});var Dt=T(()=>{"use strict";n()});var hi,ol,nl,Ne,An=T(()=>{"use strict";n();hi=require("@reduxjs/toolkit");Dt();an();wn();Rt();cn();mn();ln();un();fn();xn();Sn();ol={["account"]:rn,["dappConfig"]:gi,["loginInfo"]:sn,["modals"]:pn,["networkConfig"]:dn,["signedMessageInfo"]:_n,["toasts"]:gn,["transactionsInfo"]:hn,["transactions"]:yn,["batchTransactions"]:bn},nl=(e={})=>(0,hi.combineReducers)(u(u({},ol),e)),Ne=nl});var bi={};X(bi,{default:()=>hl,sessionStorageReducers:()=>Mt});function ue(e,o=[]){return{key:e,version:1,storage:yi.default,blacklist:o}}var q,xi,yi,tl,Io,rl,al,il,sl,cl,pl,ml,dl,ll,_l,Si,ul,Mt,gl,fl,Tl,hl,wi=T(()=>{"use strict";n();q=require("redux-persist"),xi=f(require("redux-persist/lib/storage")),yi=f(require("redux-persist/lib/storage/session"));An();k();an();wn();cn();mn();ln();un();fn();xn();Sn();Dt();tl={persistReducersStorageType:"localStorage"},Io={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},rl=ue(Io["account"]),al=ue(Io["loginInfo"]),il=ue(Io["modals"]),sl=ue(Io["networkConfig"]),cl={2:e=>w(u({},e),{networkConfig:vt})};pl=ue("sdk-dapp-transactionsInfo"),ml=ue("sdk-dapp-transactions",["transactionsToSign"]),dl=ue("sdk-dapp-batchTransactions",["batchTransactions"]),ll=ue("sdk-dapp-toasts"),_l=ue("sdk-dapp-signedMessageInfo"),Si={key:"sdk-dapp-store",version:2,storage:xi.default,whitelist:Object.keys(Io),migrate:(0,q.createMigrate)(cl,{debug:!1})},ul=w(u({},Si),{whitelist:[]}),Mt={["toasts"]:(0,q.persistReducer)(ll,gn),["transactions"]:(0,q.persistReducer)(ml,yn),["transactionsInfo"]:(0,q.persistReducer)(pl,hn),["batchTransactions"]:(0,q.persistReducer)(dl,bn),["signedMessageInfo"]:(0,q.persistReducer)(_l,_n)},gl=w(u({},Mt),{["account"]:(0,q.persistReducer)(rl,rn),["loginInfo"]:(0,q.persistReducer)(al,sn),["modals"]:(0,q.persistReducer)(il,pn),["networkConfig"]:(0,q.persistReducer)(sl,dn)}),fl=tl.persistReducersStorageType==="localStorage",Tl=fl?(0,q.persistReducer)(Si,Ne(Mt)):(0,q.persistReducer)(ul,Ne(gl)),hl=Tl});var vi={};X(vi,{default:()=>xl});var xl,Ii=T(()=>{"use strict";n();An();xl=Ne()});var Ai={};X(Ai,{default:()=>Sl});var J,yl,Sl,ki=T(()=>{"use strict";n();J=require("redux-persist"),yl=[J.FLUSH,J.REHYDRATE,J.PAUSE,J.PERSIST,J.PURGE,J.REGISTER],Sl=yl});var Ei={};X(Ei,{default:()=>Pi});function Pi(e){return(0,Li.persistStore)(e)}var Li,Ci=T(()=>{"use strict";n();Li=require("redux-persist")});var bs=y((JD,Ss)=>{n();var Tu=typeof a=="object"&&a&&a.Object===Object&&a;Ss.exports=Tu});var Co=y((ZD,ws)=>{n();var hu=bs(),xu=typeof self=="object"&&self&&self.Object===Object&&self,yu=hu||xu||Function("return this")();ws.exports=yu});var er=y((QD,vs)=>{n();var Su=Co(),bu=Su.Symbol;vs.exports=bu});var Ls=y((e2,ks)=>{n();var Is=er(),As=Object.prototype,wu=As.hasOwnProperty,vu=As.toString,No=Is?Is.toStringTag:void 0;function Iu(e){var o=wu.call(e,No),t=e[No];try{e[No]=void 0;var s=!0}catch(p){}var c=vu.call(e);return s&&(o?e[No]=t:delete e[No]),c}ks.exports=Iu});var Es=y((o2,Ps)=>{n();var Au=Object.prototype,ku=Au.toString;function Lu(e){return ku.call(e)}Ps.exports=Lu});var or=y((n2,Rs)=>{n();var Cs=er(),Pu=Ls(),Eu=Es(),Cu="[object Null]",Nu="[object Undefined]",Ns=Cs?Cs.toStringTag:void 0;function Ru(e){return e==null?e===void 0?Nu:Cu:Ns&&Ns in Object(e)?Pu(e):Eu(e)}Rs.exports=Ru});var Ms=y((t2,Ds)=>{n();var Du=Array.isArray;Ds.exports=Du});var Fs=y((r2,Os)=>{n();function Mu(e){return e!=null&&typeof e=="object"}Os.exports=Mu});var Bs=y((a2,Us)=>{n();var Ou=or(),Fu=Ms(),Uu=Fs(),Bu="[object String]";function Wu(e){return typeof e=="string"||!Fu(e)&&Uu(e)&&Ou(e)==Bu}Us.exports=Wu});var Wn=y((r3,Vs)=>{n();function ag(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Vs.exports=ag});var js=y((a3,qs)=>{n();var ig=or(),sg=Wn(),cg="[object AsyncFunction]",pg="[object Function]",mg="[object GeneratorFunction]",dg="[object Proxy]";function lg(e){if(!sg(e))return!1;var o=ig(e);return o==pg||o==mg||o==cg||o==dg}qs.exports=lg});var Ks=y((i3,zs)=>{n();var _g=Co(),ug=_g["__core-js_shared__"];zs.exports=ug});var Js=y((s3,Ys)=>{n();var ar=Ks(),Xs=function(){var e=/[^.]+$/.exec(ar&&ar.keys&&ar.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function gg(e){return!!Xs&&Xs in e}Ys.exports=gg});var Qs=y((c3,Zs)=>{n();var fg=Function.prototype,Tg=fg.toString;function hg(e){if(e!=null){try{return Tg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Zs.exports=hg});var oc=y((p3,ec)=>{n();var xg=js(),yg=Js(),Sg=Wn(),bg=Qs(),wg=/[\\^$.*+?()[\]{}|]/g,vg=/^\[object .+?Constructor\]$/,Ig=Function.prototype,Ag=Object.prototype,kg=Ig.toString,Lg=Ag.hasOwnProperty,Pg=RegExp("^"+kg.call(Lg).replace(wg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Eg(e){if(!Sg(e)||yg(e))return!1;var o=xg(e)?Pg:vg;return o.test(bg(e))}ec.exports=Eg});var tc=y((m3,nc)=>{n();function Cg(e,o){return e==null?void 0:e[o]}nc.exports=Cg});var Gn=y((d3,rc)=>{n();var Ng=oc(),Rg=tc();function Dg(e,o){var t=Rg(e,o);return Ng(t)?t:void 0}rc.exports=Dg});var Ro=y((l3,ac)=>{n();var Mg=Gn(),Og=Mg(Object,"create");ac.exports=Og});var cc=y((_3,sc)=>{n();var ic=Ro();function Fg(){this.__data__=ic?ic(null):{},this.size=0}sc.exports=Fg});var mc=y((u3,pc)=>{n();function Ug(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}pc.exports=Ug});var lc=y((g3,dc)=>{n();var Bg=Ro(),Wg="__lodash_hash_undefined__",Gg=Object.prototype,Hg=Gg.hasOwnProperty;function $g(e){var o=this.__data__;if(Bg){var t=o[e];return t===Wg?void 0:t}return Hg.call(o,e)?o[e]:void 0}dc.exports=$g});var uc=y((f3,_c)=>{n();var Vg=Ro(),qg=Object.prototype,jg=qg.hasOwnProperty;function zg(e){var o=this.__data__;return Vg?o[e]!==void 0:jg.call(o,e)}_c.exports=zg});var fc=y((T3,gc)=>{n();var Kg=Ro(),Xg="__lodash_hash_undefined__";function Yg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Kg&&o===void 0?Xg:o,this}gc.exports=Yg});var hc=y((h3,Tc)=>{n();var Jg=cc(),Zg=mc(),Qg=lc(),ef=uc(),of=fc();function co(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}co.prototype.clear=Jg;co.prototype.delete=Zg;co.prototype.get=Qg;co.prototype.has=ef;co.prototype.set=of;Tc.exports=co});var yc=y((x3,xc)=>{n();function nf(){this.__data__=[],this.size=0}xc.exports=nf});var bc=y((y3,Sc)=>{n();function tf(e,o){return e===o||e!==e&&o!==o}Sc.exports=tf});var Do=y((S3,wc)=>{n();var rf=bc();function af(e,o){for(var t=e.length;t--;)if(rf(e[t][0],o))return t;return-1}wc.exports=af});var Ic=y((b3,vc)=>{n();var sf=Do(),cf=Array.prototype,pf=cf.splice;function mf(e){var o=this.__data__,t=sf(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():pf.call(o,t,1),--this.size,!0}vc.exports=mf});var kc=y((w3,Ac)=>{n();var df=Do();function lf(e){var o=this.__data__,t=df(o,e);return t<0?void 0:o[t][1]}Ac.exports=lf});var Pc=y((v3,Lc)=>{n();var _f=Do();function uf(e){return _f(this.__data__,e)>-1}Lc.exports=uf});var Cc=y((I3,Ec)=>{n();var gf=Do();function ff(e,o){var t=this.__data__,s=gf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Ec.exports=ff});var Rc=y((A3,Nc)=>{n();var Tf=yc(),hf=Ic(),xf=kc(),yf=Pc(),Sf=Cc();function po(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}po.prototype.clear=Tf;po.prototype.delete=hf;po.prototype.get=xf;po.prototype.has=yf;po.prototype.set=Sf;Nc.exports=po});var Mc=y((k3,Dc)=>{n();var bf=Gn(),wf=Co(),vf=bf(wf,"Map");Dc.exports=vf});var Uc=y((L3,Fc)=>{n();var Oc=hc(),If=Rc(),Af=Mc();function kf(){this.size=0,this.__data__={hash:new Oc,map:new(Af||If),string:new Oc}}Fc.exports=kf});var Wc=y((P3,Bc)=>{n();function Lf(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Bc.exports=Lf});var Mo=y((E3,Gc)=>{n();var Pf=Wc();function Ef(e,o){var t=e.__data__;return Pf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Gc.exports=Ef});var $c=y((C3,Hc)=>{n();var Cf=Mo();function Nf(e){var o=Cf(this,e).delete(e);return this.size-=o?1:0,o}Hc.exports=Nf});var qc=y((N3,Vc)=>{n();var Rf=Mo();function Df(e){return Rf(this,e).get(e)}Vc.exports=Df});var zc=y((R3,jc)=>{n();var Mf=Mo();function Of(e){return Mf(this,e).has(e)}jc.exports=Of});var Xc=y((D3,Kc)=>{n();var Ff=Mo();function Uf(e,o){var t=Ff(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Kc.exports=Uf});var Jc=y((M3,Yc)=>{n();var Bf=Uc(),Wf=$c(),Gf=qc(),Hf=zc(),$f=Xc();function mo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}mo.prototype.clear=Bf;mo.prototype.delete=Wf;mo.prototype.get=Gf;mo.prototype.has=Hf;mo.prototype.set=$f;Yc.exports=mo});var Qc=y((O3,Zc)=>{n();var Vf="__lodash_hash_undefined__";function qf(e){return this.__data__.set(e,Vf),this}Zc.exports=qf});var op=y((F3,ep)=>{n();function jf(e){return this.__data__.has(e)}ep.exports=jf});var tp=y((U3,np)=>{n();var zf=Jc(),Kf=Qc(),Xf=op();function Hn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new zf;++o<t;)this.add(e[o])}Hn.prototype.add=Hn.prototype.push=Kf;Hn.prototype.has=Xf;np.exports=Hn});var ap=y((B3,rp)=>{n();function Yf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}rp.exports=Yf});var sp=y((W3,ip)=>{n();function Jf(e){return e!==e}ip.exports=Jf});var pp=y((G3,cp)=>{n();function Zf(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}cp.exports=Zf});var dp=y((H3,mp)=>{n();var Qf=ap(),eT=sp(),oT=pp();function nT(e,o,t){return o===o?oT(e,o,t):Qf(e,eT,t)}mp.exports=nT});var _p=y(($3,lp)=>{n();var tT=dp();function rT(e,o){var t=e==null?0:e.length;return!!t&&tT(e,o,0)>-1}lp.exports=rT});var gp=y((V3,up)=>{n();function aT(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}up.exports=aT});var Tp=y((q3,fp)=>{n();function iT(e,o){return e.has(o)}fp.exports=iT});var xp=y((j3,hp)=>{n();var sT=Gn(),cT=Co(),pT=sT(cT,"Set");hp.exports=pT});var Sp=y((z3,yp)=>{n();function mT(){}yp.exports=mT});var ir=y((K3,bp)=>{n();function dT(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}bp.exports=dT});var vp=y((X3,wp)=>{n();var sr=xp(),lT=Sp(),_T=ir(),uT=1/0,gT=sr&&1/_T(new sr([,-0]))[1]==uT?function(e){return new sr(e)}:lT;wp.exports=gT});var Ap=y((Y3,Ip)=>{n();var fT=tp(),TT=_p(),hT=gp(),xT=Tp(),yT=vp(),ST=ir(),bT=200;function wT(e,o,t){var s=-1,c=TT,p=e.length,m=!0,l=[],_=l;if(t)m=!1,c=hT;else if(p>=bT){var g=o?null:yT(e);if(g)return ST(g);m=!1,c=xT,_=new fT}else _=o?[]:l;e:for(;++s<p;){var b=e[s],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var P=_.length;P--;)if(_[P]===S)continue e;o&&_.push(S),l.push(b)}else c(_,S,t)||(_!==l&&_.push(S),l.push(b))}return l}Ip.exports=wT});var Lp=y((J3,kp)=>{n();var vT=Ap();function IT(e){return e&&e.length?vT(e):[]}kp.exports=IT});var mr={};X(mr,{css:()=>Gp,default:()=>ih});var Gp,ih,dr=T(()=>{"use strict";n();Gp=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gp));ih={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var fe={};X(fe,{css:()=>Vp,default:()=>ph});var Vp,ph,Te=T(()=>{"use strict";n();Vp=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vp));ph={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Wo={};X(Wo,{css:()=>nm,default:()=>Eh});var nm,Eh,Go=T(()=>{"use strict";n();nm=`.dapp-core-component__transactionStatusToastStyles__transactions-status-toast {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nm));Eh={"transactions-status-toast":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast",transactionsStatusToast:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast","transactions-status-toast-content":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content",transactionsStatusToastContent:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content","transactions-status-toast-icon":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",transactionsStatusToastIcon:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",svg:"dapp-core-component__transactionStatusToastStyles__svg",toasts:"dapp-core-component__transactionStatusToastStyles__toasts",toastWrapper:"dapp-core-component__transactionStatusToastStyles__toastWrapper"}});var vr={};X(vr,{css:()=>im,default:()=>Wh});var im,Wh,Ir=T(()=>{"use strict";n();im=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(im));Wh={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var Ar={};X(Ar,{css:()=>pm,default:()=>Hh});var pm,Hh,kr=T(()=>{"use strict";n();pm=`.dapp-core-component__signWaitingScreenModal-styles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__modal-container {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pm));Hh={"extension-modal":"dapp-core-component__signWaitingScreenModal-styles__extension-modal",extensionModal:"dapp-core-component__signWaitingScreenModal-styles__extension-modal","modal-container":"dapp-core-component__signWaitingScreenModal-styles__modal-container",modalContainer:"dapp-core-component__signWaitingScreenModal-styles__modal-container",extension:"dapp-core-component__signWaitingScreenModal-styles__extension"}});var qh={};X(qh,{LedgerGuardianSigningModalError:()=>Vh});module.exports=H(qh);n();var lm=f(require("react"));pt();n();n();var Uh=f(require("react"));n();n();n();var Fi=require("react"),no=require("react-redux");n();var Ot=require("@reduxjs/toolkit"),Mi=require("react-redux/lib/utils/Subscription");k();n();var fi=f(require("lodash.throttle"));v();k();bt();Ke();ze();var Zd=[Qo],vn=!1,Qd=(0,fi.default)(()=>{So(yo())},5e3),Ti=e=>o=>t=>{if(Zd.includes(t.type))return o(t);let s=e.getState(),c=Ee.local.getItem(xe.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return So(yo());let m=Date.now();return c-m<0&&!vn?setTimeout(()=>{vn=!0,e.dispatch(Ma())},1e3):(vn&&(vn=!1),Qd()),o(t)};n();n();function In(){return typeof sessionStorage!="undefined"}var Ni=In()?(wi(),H(bi)).default:(Ii(),H(vi)).default,Ri=In()?(ki(),H(Ai)).default:[],Di=In()?(Ci(),H(Ei)).default:e=>e;An();var I=(0,Ot.configureStore)({reducer:Ni,middleware:e=>e({serializableCheck:{ignoredActions:[...Ri,St.type,tn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ti)}),Oi=(0,Mi.createSubscription)(I),Zb=Di(I),Qb=(0,Ot.configureStore)({reducer:Ne});var bl={store:I,subscription:Oi},Ft=(0,Fi.createContext)(bl),t0=(0,no.createStoreHook)(Ft),W=(0,no.createDispatchHook)(Ft),A=(0,no.createSelectorHook)(Ft);n();n();k();n();var Ui=f(require("lodash.isequal")),kn=require("reselect"),x=(0,kn.createSelectorCreator)(kn.defaultMemoize,Ui.default);var se=e=>e.account,Re=x(se,e=>e.address),to=x(se,Re,(e,o)=>o in e.accounts?e.accounts[o]:nn),wl=x(se,to,(e,o)=>{let c=e,{accounts:t}=c,s=ve(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),c0=x(to,e=>e.balance),vl=x(to,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),p0=x(se,e=>e.shard),Il=x(se,e=>e.ledgerAccount),m0=x(se,e=>e.walletConnectAccount),d0=x(se,e=>e.isAccountLoading),l0=x(se,e=>e.accountLoadingError),Al=x(se,e=>e.websocketEvent),kl=x(se,e=>e.websocketBatchEvent);n();var Ut=e=>e.dappConfig,g0=x(Ut,e=>e.shouldUseWebViewProvider);n();var z=e=>e.loginInfo,Ll=x(z,e=>e.loginMethod),Ln=x(z,Re,(e,o)=>Boolean(o)),x0=x(z,e=>e.walletConnectLogin),Pl=x(z,e=>e.ledgerLogin),El=x(z,e=>e.walletLogin),y0=x(z,e=>e.isLoginSessionInvalid),Bt=x(z,e=>e.tokenLogin),Bi=x(z,e=>e.logoutRoute),Cl=x(z,e=>e.isWalletConnectV2Initialized);n();var Wi=e=>e.modals,w0=x(Wi,e=>e.txSubmittedModal),Nl=x(Wi,e=>e.notificationModal);n();var ce=e=>e.networkConfig,Pn=x(ce,e=>e.network.chainId),Rl=x(ce,e=>e.network.roundDuration),A0=x(ce,e=>e.network.walletConnectBridgeAddress),Dl=x(ce,e=>e.network.walletConnectV2RelayAddress),Ml=x(ce,e=>e.network.walletConnectV2ProjectId),Ol=x(ce,e=>e.network.walletConnectV2Options),Fl=x(ce,e=>e.network.walletConnectDeepLink),K=x(ce,e=>e.network),Gi=x(K,e=>e.apiAddress),Hi=x(K,e=>e.explorerAddress),$i=x(K,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Ul=x(K,e=>e.xAliasAddress),Vi=x(K,e=>e.egldLabel);n();var En=e=>e.signedMessageInfo,P0=x(En,e=>e.isSigning),E0=x(En,e=>e.errorMessage),C0=x(En,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),N0=x(En,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var qi=e=>e.toasts,Bl=x(qi,e=>e.customToasts),ji=x(qi,e=>e.transactionToasts);n();k();var zi={errorMessage:kt,successMessage:Lt,processingMessage:Pt},Ki=e=>e.transactionsInfo,Wl=x(Ki,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||zi);n();n();var pe=require("@multiversx/sdk-core");v();n();var Gt=require("@multiversx/sdk-core/out");n();n();function Wt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Xi=e=>{let o=e!=null?e:"";return Wt(o)?Gt.TransactionPayload.fromEncoded(o):new Gt.TransactionPayload(o)};n();v();var Ao=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(mt).some(t=>e.startsWith(t)):!1;function Cn(e){var s,c,p;let o=u({},e);Ao({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new pe.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Xi(o.data),nonce:o.nonce.valueOf(),receiver:new pe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new pe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Jo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Zo,chainID:o.chainID.valueOf(),version:new pe.TransactionVersion((p=o.version)!=null?p:xa)}),o.options?{options:new pe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new pe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();v();n();n();n();var Vl=require("@multiversx/sdk-core/out");n();v();n();var Yi=require("@multiversx/sdk-core");R();n();var ql=require("@multiversx/sdk-core");n();n();n();var jl=require("@multiversx/sdk-core"),zl=f(require("bignumber.js"));L();n();n();n();var $t="blocks";n();n();n();n();V();n();n();V();n();n();n();var o_=f(require("bignumber.js"));v();n();var e_=require("@multiversx/sdk-core"),qt=f(require("bignumber.js"));v();n();var Zl=f(require("bignumber.js"));n();qt.default.config({ROUNDING_MODE:qt.default.ROUND_FLOOR});n();n();n();v();n();n();n();n();v();n();v();n();var n_=require("@multiversx/sdk-core");v();n();var Lo=require("@multiversx/sdk-core"),a_=f(require("bignumber.js"));v();n();n();var t_=f(require("bignumber.js"));v();n();v();n();n();n();n();n();n();v();n();v();n();v();n();V();var s_=["reDelegateRewards","claimRewards","unBond"],c_=["wrapEgld","unwrapEgld"],p_=["unStake"],m_=["unDelegate"];n();n();n();v();n();var u_=f(require("bignumber.js"));n();n();V();n();var f_=f(require("bignumber.js"));n();n();n();n();var x_=f(require("bignumber.js"));R();n();n();n();n();L();n();var w_=require("@multiversx/sdk-web-wallet-provider");v();n();var S_=f(require("qs"));n();B();Xe();n();Xe();var lk={search:Ce()?window.location.search:"",removeParams:[]};n();n();n();U();n();V();n();n();U();n();var v_=f(require("linkifyjs"));n();v();n();var I_=f(require("bignumber.js"));n();R();n();n();L();n();L();n();n();n();V();n();V();n();var A_=f(require("bignumber.js"));v();V();n();V();n();var ts=require("react");R();n();n();V();n();n();var k_=require("@multiversx/sdk-core/out"),L_=f(require("bignumber.js"));V();n();R();n();n();R();var t1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var rs=require("react");R();U();n();var E_=require("react");V();var d1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];eo();n();var Dn=e=>e.transactions,ro=x(Dn,e=>e.signedTransactions),C_=x(Dn,e=>e.signTransactionsError),as=x(Dn,e=>e.signTransactionsCancelMessage),Mn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),is=x(ro,Mn(Je)),ss=x(ro,Mn(Ze)),cs=x(ro,Mn(Qe)),N_=x(ro,Mn(Et)),ps=x(Dn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Cn(t)))||[]})}),R_=x(ro,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var ms=require("react");n();k();n();n();n();n();n();n();n();n();var M_=require("@multiversx/sdk-extension-provider"),O_=require("@multiversx/sdk-hw-provider"),F_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),U_=require("@multiversx/sdk-opera-provider"),B_=require("@multiversx/sdk-passkey-provider/out"),W_=require("@multiversx/sdk-web-wallet-provider");v();he();n();var ao=require("@multiversx/sdk-web-wallet-iframe-provider/out"),ds=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");L();n();var ee=e=>`Unable to perform ${e}, Provider not initialized`,On=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ee("getAccount"))}setAccount(o){throw new Error(ee(`setAccount: ${o}`))}login(o){throw new Error(ee(`login with options: ${o}`))}logout(o){throw new Error(ee(`logout with options: ${o}`))}getAddress(){throw new Error(ee("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(ee(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(ee(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(ee(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(ee(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(ee(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(ee(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},ls=new On;k();n();n();n();n();n();var _s=require("@lifeomic/axios-fetch"),Xt=f(require("axios")),Yt=(0,_s.buildAxiosFetch)(Xt.default),Jt=(e,o)=>h(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function G_(e,o,t){return h(this,null,function*(){try{let s=yield Yt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Jt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function H_(e,o){return h(this,null,function*(){try{let t=yield Yt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Jt(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function $_(e,o,t){return h(this,null,function*(){try{let s=yield Yt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Jt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var io=Xt.default.create();io.get=H_;io.post=G_;io.patch=$_;n();n();var V_=f(require("axios"));n();var q_=f(require("swr"));n();L();n();n();n();U();n();eo();n();n();n();var j_=f(require("axios"));n();var K_=f(require("axios"));qe();n();v();n();var X_=f(require("axios"));n();var J_=f(require("axios"));n();n();var Z_=f(require("axios"));n();var Q_=f(require("axios"));n();n();k();L();n();n();n();n();U();n();C();R();n();k();n();var Ts=require("@multiversx/sdk-core");R();B();n();eo();n();k();L();n();k();R();n();n();n();R();n();Yo();n();n();n();n();var tu=f(require("swr"));n();n();n();n();var hs=require("react");n();n();var ru=require("react"),au=require("@multiversx/sdk-web-wallet-provider"),iu=require("@multiversx/sdk-web-wallet-provider"),su=f(require("qs"));v();k();L();lt();U();var YR=D();n();var $s=require("react"),rr=require("@multiversx/sdk-core");n();v();wt();n();n();n();n();n();n();n();n();n();n();qe();n();var du=f(require("axios"));n();var _u=f(require("axios"));n();qe();n();qe();n();n();n();n();var gu=require("@multiversx/sdk-opera-provider");n();var fu=require("@multiversx/sdk-extension-provider");n();he();n();n();n();n();var Gu=f(Bs());n();var qu=require("@multiversx/sdk-native-auth-client");n();var Hs=f(require("axios"));n();n();n();function Ws(e){return h(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Gs=(e,o,t,s=0)=>h(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Ws(o.delay)),yield Gs(e,o,t,s+1)):null}}),nr=(e,o={retries:5,delay:500})=>(...t)=>h(void 0,null,function*(){return yield Gs(e,o,t)});var Hu=4;var T2=nr((e,o,t)=>h(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Hs.default.get(`${e}/${$t}?from=${Hu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();en();n();n();U();var k2={origin:D().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var zu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Ku=require("@multiversx/sdk-passkey-provider/out");v();U();n();n();n();var eg=require("react"),og=require("@multiversx/sdk-hw-provider");n();C();R();n();bo();Ke();ze();B();n();n();var Rp=require("react"),Dp=require("@multiversx/sdk-core"),HT=require("@multiversx/sdk-extension-provider"),$T=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),VT=require("@multiversx/sdk-passkey-provider/out"),qT=f(Lp());v();n();n();n();n();n();n();n();n();n();n();var Oo=f(require("react"));var _O=(0,Oo.createContext)({}),uO=I.getState();n();var Ep=f(require("react"));n();var cr=f(require("react")),AT=f(require("axios"));n();n();he();n();n();var NT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),RT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");C();n();C();k();R();n();n();k();n();B();n();k();R();n();n();var LT=require("@multiversx/sdk-core"),PT=f(require("bignumber.js"));v();n();var ET=f(require("bignumber.js"));v();k();L();B();U();n();var Cp=require("react"),FT=require("@multiversx/sdk-extension-provider"),UT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),BT=require("@multiversx/sdk-passkey-provider/out");he();k();n();k();R();bo();U();n();ae();k();function pr(){let e=W();return o=>{e(vo()),e(Tn(o)),e(oo(Xo))}}n();n();var zT=require("react");n();n();L();eo();n();var Mp=require("react");n();n();var XT=require("react"),YT=require("@multiversx/sdk-extension-provider");ae();C();L();n();_e();B();B();n();n();he();R();n();var KT=require("react"),Op=require("@multiversx/sdk-core");k();n();var JT=require("react"),ZT=require("@multiversx/sdk-opera-provider");ae();C();L();_e();B();U();n();var QT=require("react");ut();ae();he();C();k();L();_e();U();n();var rh=require("react");ae();k();n();n();gt();n();n();var eh=f(require("platform"));Xe();n();n();n();n();n();n();n();ho();L();n();n();var oh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();bo();Ke();n();n();n();k();n();n();var nh=f(require("axios"));B();n();n();var th=f(Wn());ho();var Fp,Up,Bp,tW=(Bp=(Up=(Fp=Pe.safeWindow)==null?void 0:Fp.location)==null?void 0:Up.origin)==null?void 0:Bp.includes("localhost");n();U();n();n();var fh=require("react");v();n();n();v();n();n();n();var ah=f(require("bignumber.js"));n();n();n();var be=f(require("react")),Yp=require("react"),Jp=require("react"),Tr=f(require("classnames")),Zp=require("react-dom");v();n();var $p=f(require("react"));n();var Uo=f(require("react"));n();Xe();var Wp=()=>!Ce();var sh=()=>h(void 0,null,function*(){return yield Promise.resolve().then(()=>(dr(),mr))}),ch=()=>(dr(),H(mr)).default,lr=Wp();function Hp({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=Uo.default.useState(lr?void 0:ch()),[p,m]=Uo.default.useState(lr||t==null?void 0:t()),l=()=>h(this,null,function*(){(e?e():sh()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,Uo.useEffect)(()=>{lr&&l()},[]),{globalStyles:s,styles:p}}function G(e,o){return t=>{let{globalStyles:s,styles:c}=Hp({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return $p.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var qp=f(require("react")),jp=f(require("classnames"));var mh=({className:e,children:o,styles:t})=>qp.default.createElement("div",{className:(0,jp.default)(t==null?void 0:t.dappModalBody,e)},o),_r=G(mh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),fe)),clientStyles:()=>(Te(),H(fe)).default});n();var ur=f(require("react")),zp=f(require("classnames"));var dh=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?ur.default.createElement("div",{className:(0,zp.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:ur.default.createElement("div",null,s)):null,gr=G(dh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),fe)),clientStyles:()=>(Te(),H(fe)).default});n();var go=f(require("react")),Kp=require("@fortawesome/free-solid-svg-icons"),Xp=require("@fortawesome/react-fontawesome"),Bo=f(require("classnames"));var lh=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:l,styles:_})=>e?t?go.default.createElement("div",{className:(0,Bo.default)(_==null?void 0:_.dappModalHeader,s)},t):go.default.createElement("div",{className:(0,Bo.default)(_==null?void 0:_.dappModalHeader,s)},go.default.createElement("div",{className:(0,Bo.default)(_==null?void 0:_.dappModalHeaderText,p)},o),go.default.createElement("button",{onClick:m,className:(0,Bo.default)(_==null?void 0:_.dappModalCloseButton,l==null?void 0:l.btn,l==null?void 0:l.btnLight,c)},go.default.createElement(Xp.FontAwesomeIcon,{size:"lg",icon:Kp.faTimes}))):null,fr=G(lh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),fe)),clientStyles:()=>(Te(),H(fe)).default});var uh={showHeader:!0,showFooter:!1,headerText:"",footerText:""},gh=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=uh,id:p="dapp-modal",onHide:m,parentElement:l,visible:_,styles:g})=>{let[b,S]=(0,Yp.useState)(!1);if((0,Jp.useEffect)(()=>{S(!0)},[]),!_)return null;let{showHeader:P,showFooter:M,headerText:Z,footerText:Be,modalDialogClassName:$o="dapp-modal-dialog",modalContentClassName:zn="dapp-modal-dialog-content",modalHeaderClassName:Kn="dapp-modal-dialog-header",modalHeaderTextClassName:Xn="dapp-modal-dialog-header-text",modalCloseButtonClassName:Q="dapp-modal-dialog-close-button",modalBodyClassName:_m="dapp-modal-dialog-content-body",modalFooterClassName:um="dapp-modal-dialog-footer",customModalHeader:gm,customModalFooter:fm}=c,Tm=hm=>{hm.key==="Escape"&&s&&(m==null||m())};return be.default.createElement(be.default.Fragment,null,b&&(0,Zp.createPortal)(be.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Tr.default)($o,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:Tm},be.default.createElement("div",{className:(0,Tr.default)(g==null?void 0:g.dappModalContent,zn)},be.default.createElement(fr,{visible:P,headerText:Z,customHeader:gm,className:Kn,headerTextClassName:Xn,closeButtonClassName:Q,onHide:m}),be.default.createElement(_r,{className:_m},o),be.default.createElement(gr,{visible:M,customFooter:fm,footerText:Be,className:um}))),l!=null?l:document==null?void 0:document.body))},hr=G(gh,{ssrStyles:()=>Promise.resolve().then(()=>(Te(),fe)),clientStyles:()=>(Te(),H(fe)).default});n();n();var $n=require("react"),xr=e=>{let[o,t]=(0,$n.useState)(!1),s=()=>{t(!0)},c=()=>{t(!1)};return(0,$n.useEffect)(()=>{(e==null?void 0:e.visible)===!0?s():(e==null?void 0:e.visible)===!1&&c()},[e==null?void 0:e.visible]),{handleShowModal:s,handleHideModal:c,showModal:o}};n();n();var Qp=require("react"),hh=require("@multiversx/sdk-hw-provider");ae();C();k();L();_e();n();var Th=require("react");n();n();var yr=require("react");C();k();L();_e();U();n();var yh=require("react"),Sh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ae();C();L();_e();B();B();n();var bh=require("react"),wh=require("@multiversx/sdk-passkey-provider/out");ae();C();L();_e();B();B();n();n();var em=require("react");n();var Ah=require("react");n();var Sr=require("react"),Ih=require("socket.io-client");k();n();n();n();var kh=require("react");R();n();n();n();var Ph=f(require("swr"));n();n();n();n();var Lh=f(require("axios"));n();n();var wr=f(require("react")),Mh=require("@fortawesome/free-solid-svg-icons");n();var br=f(require("react"));n();var Ue=f(require("react")),fo=require("@fortawesome/free-solid-svg-icons"),Vn=require("@fortawesome/react-fontawesome"),qn=f(require("classnames"));n();var Nh=({type:e,globalStyles:o,styles:t})=>{switch(e){case"info":return Ue.default.createElement("div",{className:(0,qn.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.success)},Ue.default.createElement(Vn.FontAwesomeIcon,{icon:fo.faInfo,className:t==null?void 0:t.svg,size:"5x"}));case"warning":return Ue.default.createElement("div",{className:(0,qn.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.warning,t==null?void 0:t.warningIcon)},Ue.default.createElement(Vn.FontAwesomeIcon,{icon:fo.faWarning,className:t==null?void 0:t.svg,size:"5x"}));case"error":return Ue.default.createElement("div",{className:(0,qn.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.danger,t==null?void 0:t.errorIcon)},Ue.default.createElement(Vn.FontAwesomeIcon,{icon:fo.faTimes,className:t==null?void 0:t.svg,size:"5x"}));default:return null}},tm=G(Nh,{ssrStyles:()=>Promise.resolve().then(()=>(Go(),Wo)),clientStyles:()=>(Go(),H(Wo)).default});var Rh=({type:e,message:o,styles:t})=>br.default.createElement("div",{className:t==null?void 0:t.transactionsStatusToastContent},br.default.createElement(tm,{type:e}),o),Dh=G(Rh,{ssrStyles:()=>Promise.resolve().then(()=>(Go(),Wo)),clientStyles:()=>(Go(),H(Wo)).default});v();n();var Bh=f(require("react"));B();n();n();n();var jn=f(require("react")),mm=require("@fortawesome/free-solid-svg-icons"),Lr=f(require("classnames"));v();n();var rm=f(require("react"));var am=e=>{let{showModal:o}=xr({visible:e.visible}),t=()=>{var s;(s=e.onClose)==null||s.call(e)};return rm.default.createElement(hr,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:t,visible:o},e.children)};n();n();var we=f(require("react")),sm=require("@fortawesome/react-fontawesome"),Ho=f(require("classnames"));var Gh=({icon:e,title:o,action:t,iconClass:s,"data-testid":c,description:p,iconBgClass:m,iconSize:l="5x",className:_="dapp-page-state",globalStyles:g,styles:b})=>{let S=(0,we.useMemo)(()=>({wrapper:(0,Ho.default)(b==null?void 0:b.state,g==null?void 0:g.mAuto,g==null?void 0:g.p4,g==null?void 0:g.textCenter,_),iconContainer:(0,Ho.default)(g==null?void 0:g.iconState,g==null?void 0:g.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,Ho.default)(s!=null&&s),title:(0,Ho.default)(g==null?void 0:g.h4,g==null?void 0:g.my4),description:g==null?void 0:g.mb3}),[g,b,_,m,s]);return we.default.createElement("div",{className:S.wrapper,"data-testid":c},e&&we.default.createElement("span",{className:S.iconContainer},we.default.createElement(sm.FontAwesomeIcon,{icon:e,className:S.iconClass,size:l})),o&&we.default.createElement("p",{className:S.title},o),p&&we.default.createElement("div",{className:S.description},p),t)},cm=G(Gh,{ssrStyles:()=>Promise.resolve().then(()=>(Ir(),vr)),clientStyles:()=>(Ir(),H(vr)).default});var $h=({handleClose:e,error:o,title:t,description:s,sessionId:c,className:p="dapp-extension-modal",modalContentClassName:m,globalStyles:l,styles:_})=>{let g=pr(),b={wrapper:(0,Lr.default)(_==null?void 0:_.modalContainer,_==null?void 0:_.extension,p),icon:l==null?void 0:l.textWhite,closeBtn:(0,Lr.default)(l==null?void 0:l.btn,l==null?void 0:l.btnCloseLink,l==null?void 0:l.btnDark,l==null?void 0:l.textWhite,l==null?void 0:l.mt2)},S=P=>{P.preventDefault(),e(),g(c)};return jn.default.createElement(am,{onClose:e,modalConfig:{modalDialogClassName:b.wrapper},visible:!0},jn.default.createElement(cm,{icon:o?mm.faTimes:null,iconClass:b.icon,className:m,iconBgClass:o?l==null?void 0:l.bgDanger:l==null?void 0:l.bgWarning,iconSize:"3x",title:t,description:s,action:jn.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:S,className:b.closeBtn},"Close")}))},dm=G($h,{ssrStyles:()=>Promise.resolve().then(()=>(kr(),Ar)),clientStyles:()=>(kr(),H(Ar)).default});var Vh=e=>{let o=w(u({},e),{description:`You need at least MultiversX app version ${ct}. Update MultiversX app to continue`,title:"Signing transactions unavailable"});return lm.default.createElement(dm,u({},o))};0&&(module.exports={LedgerGuardianSigningModalError});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=LedgerGuardianSigningModalError.js.map
