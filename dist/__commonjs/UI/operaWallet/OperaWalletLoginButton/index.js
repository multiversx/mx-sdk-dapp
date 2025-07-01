"use strict";var _m=Object.create;var vo=Object.defineProperty,um=Object.defineProperties,gm=Object.getOwnPropertyDescriptor,fm=Object.getOwnPropertyDescriptors,hm=Object.getOwnPropertyNames,Yo=Object.getOwnPropertySymbols,Tm=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty,kr=Object.prototype.propertyIsEnumerable;var Ar=(e,o,t)=>o in e?vo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))et.call(o,t)&&Ar(e,t,o[t]);if(Yo)for(var t of Yo(o))kr.call(o,t)&&Ar(e,t,o[t]);return e},v=(e,o)=>um(e,fm(o));var Oe=(e,o)=>{var t={};for(var s in e)et.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Yo)for(var s of Yo(e))o.indexOf(s)<0&&kr.call(e,s)&&(t[s]=e[s]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),re=(e,o)=>{for(var t in o)vo(e,t,{get:o[t],enumerable:!0})},Lr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of hm(o))!et.call(e,c)&&c!==t&&vo(e,c,{get:()=>o[c],enumerable:!(s=gm(o,c))||s.enumerable});return e};var x=(e,o,t)=>(t=e!=null?_m(Tm(e)):{},Lr(o||!e||!e.__esModule?vo(t,"default",{value:e,enumerable:!0}):t,e)),ne=e=>Lr(vo({},"__esModule",{value:!0}),e);var f=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{d(t.next(l))}catch(g){c(g)}},m=l=>{try{d(t.throw(l))}catch(g){c(g)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var Cr=S(Jo=>{"use strict";n();Jo.byteLength=ym;Jo.toByteArray=Sm;Jo.fromByteArray=Im;var ae=[],Q=[],xm=typeof Uint8Array!="undefined"?Uint8Array:Array,ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Be=0,Pr=ot.length;Be<Pr;++Be)ae[Be]=ot[Be],Q[ot.charCodeAt(Be)]=Be;var Be,Pr;Q["-".charCodeAt(0)]=62;Q["_".charCodeAt(0)]=63;function Er(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function ym(e){var o=Er(e),t=o[0],s=o[1];return(t+s)*3/4-s}function bm(e,o,t){return(o+t)*3/4-t}function Sm(e){var o,t=Er(e),s=t[0],c=t[1],p=new xm(bm(e,s,c)),m=0,d=c>0?s-4:s,l;for(l=0;l<d;l+=4)o=Q[e.charCodeAt(l)]<<18|Q[e.charCodeAt(l+1)]<<12|Q[e.charCodeAt(l+2)]<<6|Q[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Q[e.charCodeAt(l)]<<2|Q[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=Q[e.charCodeAt(l)]<<10|Q[e.charCodeAt(l+1)]<<4|Q[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function wm(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function vm(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(wm(s));return c.join("")}function Im(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,d=t-s;m<d;m+=p)c.push(vm(e,m,m+p>d?d:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var Nr=S(nt=>{n();nt.read=function(e,o,t,s,c){var p,m,d=c*8-s-1,l=(1<<d)-1,g=l>>1,b=-7,h=t?c-1:0,w=t?-1:1,E=e[o+h];for(h+=w,p=E&(1<<-b)-1,E>>=-b,b+=d;b>0;p=p*256+e[o+h],h+=w,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+h],h+=w,b-=8);if(p===0)p=1-g;else{if(p===l)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(E?-1:1)*m*Math.pow(2,p-s)};nt.write=function(e,o,t,s,c,p){var m,d,l,g=p*8-c-1,b=(1<<g)-1,h=b>>1,w=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=s?0:p-1,L=s?1:-1,N=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+h>=1?o+=w/l:o+=w*Math.pow(2,1-h),o*l>=2&&(m++,l/=2),m+h>=b?(d=0,m=b):m+h>=1?(d=(o*l-1)*Math.pow(2,c),m=m+h):(d=o*Math.pow(2,h-1)*Math.pow(2,c),m=0));c>=8;e[t+E]=d&255,E+=L,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+E]=m&255,E+=L,m/=256,g-=8);e[t+E-L]|=N*128}});var jr=S(Ze=>{"use strict";n();var tt=Cr(),Je=Nr(),Rr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ze.Buffer=_;Ze.SlowBuffer=Cm;Ze.INSPECT_MAX_BYTES=50;var Zo=2147483647;Ze.kMaxLength=Zo;_.TYPED_ARRAY_SUPPORT=Am();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Am(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function ge(e){if(e>Zo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return st(e)}return Or(e,o,t)}_.poolSize=8192;function Or(e,o,t){if(typeof e=="string")return Lm(e,o);if(ArrayBuffer.isView(e))return Pm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return at(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return _.from(s,o,t);var c=Em(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return Or(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function Br(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function km(e,o,t){return Br(e),e<=0?ge(e):o!==void 0?typeof t=="string"?ge(e).fill(o,t):ge(e).fill(o):ge(e)}_.alloc=function(e,o,t){return km(e,o,t)};function st(e){return Br(e),ge(e<0?0:ct(e)|0)}_.allocUnsafe=function(e){return st(e)};_.allocUnsafeSlow=function(e){return st(e)};function Lm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Fr(e,o)|0,s=ge(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function rt(e){for(var o=e.length<0?0:ct(e.length)|0,t=ge(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Pm(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return at(o.buffer,o.byteOffset,o.byteLength)}return rt(e)}function at(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,_.prototype),s}function Em(e){if(_.isBuffer(e)){var o=ct(e.length)|0,t=ge(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||pt(e.length)?ge(0):rt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return rt(e.data)}function ct(e){if(e>=Zo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Zo.toString(16)+" bytes");return e|0}function Cm(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(ie(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=_.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Fr(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return it(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return $r(e).length;default:if(c)return s?-1:it(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=Fr;function Nm(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Hm(this,o,t);case"utf8":case"utf-8":return Wr(this,o,t);case"ascii":return Wm(this,o,t);case"latin1":case"binary":return Gm(this,o,t);case"base64":return Fm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Vm(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}_.prototype._isBuffer=!0;function Fe(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Fe(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Fe(this,t,t+3),Fe(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Fe(this,t,t+7),Fe(this,t+1,t+6),Fe(this,t+2,t+5),Fe(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Wr(this,0,o):Nm.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=Ze.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Rr&&(_.prototype[Rr]=_.prototype.inspect);_.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=s-t,l=Math.min(m,d),g=this.slice(c,p),b=o.slice(t,s),h=0;h<l;++h)if(g[h]!==b[h]){m=g[h],d=b[h];break}return m<d?-1:d<m?1:0};function Ur(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,pt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,s)),_.isBuffer(o))return o.length===0?-1:Dr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Dr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Dr(e,o,t,s,c){var p=1,m=e.length,d=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(E,L){return p===1?E[L]:E.readUInt16BE(L*p)}var g;if(c){var b=-1;for(g=t;g<m;g++)if(l(e,g)===l(o,b===-1?0:g-b)){if(b===-1&&(b=g),g-b+1===d)return b*p}else b!==-1&&(g-=g-b),b=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var h=!0,w=0;w<d;w++)if(l(e,g+w)!==l(o,w)){h=!1;break}if(h)return g}return-1}_.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};_.prototype.indexOf=function(o,t,s){return Ur(this,o,t,s,!0)};_.prototype.lastIndexOf=function(o,t,s){return Ur(this,o,t,s,!1)};function Rm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var d=parseInt(o.substr(m*2,2),16);if(pt(d))return m;e[t+m]=d}return m}function Dm(e,o,t,s){return Qo(it(o,e.length-t),e,t,s)}function Mm(e,o,t,s){return Qo(qm(o),e,t,s)}function Om(e,o,t,s){return Qo($r(o),e,t,s)}function Bm(e,o,t,s){return Qo(zm(o,e.length-t),e,t,s)}_.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Rm(this,o,t,s);case"utf8":case"utf-8":return Dm(this,o,t,s);case"ascii":case"latin1":case"binary":return Mm(this,o,t,s);case"base64":return Om(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bm(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Fm(e,o,t){return o===0&&t===e.length?tt.fromByteArray(e):tt.fromByteArray(e.slice(o,t))}function Wr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,g,b,h;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(h=(p&31)<<6|l&63,h>127&&(m=h));break;case 3:l=e[c+1],g=e[c+2],(l&192)===128&&(g&192)===128&&(h=(p&15)<<12|(l&63)<<6|g&63,h>2047&&(h<55296||h>57343)&&(m=h));break;case 4:l=e[c+1],g=e[c+2],b=e[c+3],(l&192)===128&&(g&192)===128&&(b&192)===128&&(h=(p&15)<<18|(l&63)<<12|(g&63)<<6|b&63,h>65535&&h<1114112&&(m=h))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=d}return Um(s)}var Mr=4096;function Um(e){var o=e.length;if(o<=Mr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Mr));return t}function Wm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Gm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Hm(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Km[e[p]];return c}function Vm(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}_.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,_.prototype),c};function W(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||W(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||W(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||W(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};_.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||W(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||W(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||W(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||W(o,4,this.length),Je.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||W(o,4,this.length),Je.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||W(o,8,this.length),Je.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||W(o,8,this.length),Je.read(this,o,!1,52,8)};function j(e,o,t,s,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;j(this,o,t,s,p,0)}var m=1,d=0;for(this[t]=o&255;++d<s&&(m*=256);)this[t+d]=o/m&255;return t+s};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;j(this,o,t,s,p,0)}var m=s-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+s};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);j(this,o,t,s,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<s&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+s};_.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);j(this,o,t,s,p-1,-p)}var m=s-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+s};_.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||j(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Gr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Hr(e,o,t,s,c){return o=+o,t=t>>>0,c||Gr(e,o,t,4,34028234663852886e22,-34028234663852886e22),Je.write(e,o,t,s,23,4),t+4}_.prototype.writeFloatLE=function(o,t,s){return Hr(this,o,t,!0,s)};_.prototype.writeFloatBE=function(o,t,s){return Hr(this,o,t,!1,s)};function Vr(e,o,t,s,c){return o=+o,t=t>>>0,c||Gr(e,o,t,8,17976931348623157e292,-17976931348623157e292),Je.write(e,o,t,s,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,s){return Vr(this,o,t,!0,s)};_.prototype.writeDoubleBE=function(o,t,s){return Vr(this,o,t,!1,s)};_.prototype.copy=function(o,t,s,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};_.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=d[m%l]}return this};var $m=/[^+/0-9A-Za-z-_]/g;function jm(e){if(e=e.split("=")[0],e=e.trim().replace($m,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function it(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function qm(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function zm(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function $r(e){return tt.toByteArray(jm(e))}function Qo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function pt(e){return e!==e}var Km=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Yr=S((DT,Xr)=>{n();var O=Xr.exports={},se,ce;function mt(){throw new Error("setTimeout has not been defined")}function dt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=mt}catch(e){se=mt}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=dt}catch(e){ce=dt}})();function qr(e){if(se===setTimeout)return setTimeout(e,0);if((se===mt||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function Xm(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===dt||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var fe=[],Qe=!1,Ue,en=-1;function Ym(){!Qe||!Ue||(Qe=!1,Ue.length?fe=Ue.concat(fe):en=-1,fe.length&&zr())}function zr(){if(!Qe){var e=qr(Ym);Qe=!0;for(var o=fe.length;o;){for(Ue=fe,fe=[];++en<o;)Ue&&Ue[en].run();en=-1,o=fe.length}Ue=null,Qe=!1,Xm(e)}}O.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];fe.push(new Kr(e,o)),fe.length===1&&!Qe&&qr(zr)};function Kr(e,o){this.fun=e,this.array=o}Kr.prototype.run=function(){this.fun.apply(null,this.array)};O.title="browser";O.browser=!0;O.env={};O.argv=[];O.version="";O.versions={};function he(){}O.on=he;O.addListener=he;O.once=he;O.off=he;O.removeListener=he;O.removeAllListeners=he;O.emit=he;O.prependListener=he;O.prependOnceListener=he;O.listeners=function(e){return[]};O.binding=function(e){throw new Error("process.binding is not supported")};O.cwd=function(){return"/"};O.chdir=function(e){throw new Error("process.chdir is not supported")};O.umask=function(){return 0}});var r,i,Jm,a,n=T(()=>{r=x(jr()),i=x(Yr()),Jm=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Jm});var Jr=T(()=>{"use strict";n()});var Te,pe=T(()=>{"use strict";n();Te="Action not allowed. User is logged in. Call logout() first"});var Zr=T(()=>{"use strict";n()});var lt,Qr=T(()=>{"use strict";n();lt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(lt||{})});var ea=T(()=>{"use strict";n()});var _t=T(()=>{"use strict";n()});var oa=T(()=>{"use strict";n()});var ut=T(()=>{"use strict";n()});var na=T(()=>{"use strict";n()});var ta=T(()=>{"use strict";n()});var Le,eo,Pe=T(()=>{"use strict";n();Le=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),eo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var F,ra,qT,aa,zT,C=T(()=>{"use strict";n();Pe();F=(w=>(w.ledger="ledger",w.walletconnect="walletconnect",w.walletconnectv2="walletconnectv2",w.wallet="wallet",w.crossWindow="crossWindow",w.iframe="iframe",w.extension="extension",w.passkey="passkey",w.metamask="metamask",w.opera="opera",w.extra="extra",w.none="",w))(F||{}),ra=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ra||{}),qT=u(u({},eo.WindowProviderRequestEnums),ra),aa=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(aa||{}),zT=u(u({},eo.WindowProviderResponseEnums),aa)});var ia=T(()=>{"use strict";n()});var sa=T(()=>{"use strict";n()});var q=T(()=>{"use strict";n()});var ca=T(()=>{"use strict";n()});var pa=T(()=>{"use strict";n()});var ma=T(()=>{"use strict";n()});var B=T(()=>{"use strict";n();ut();na();ta();C();ia();sa();q();ca();pa();ma()});var oo,da,mx,la,dx,_a,lx,_x,Zm,ua,no=T(()=>{"use strict";n();B();oo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:da,egldLabel:mx}=oo["devnet"],{chainId:la,egldLabel:dx}=oo["testnet"],{chainId:_a,egldLabel:lx}=oo["mainnet"],_x={["devnet"]:da,["testnet"]:la,["mainnet"]:_a},Zm={[da]:"devnet",[la]:"testnet",[_a]:"mainnet"},ua="multiversx://"});var on=T(()=>{"use strict";n()});var me,ga=T(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-provider")});var z,to=T(()=>{"use strict";n();z=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var fa,ha,gt,xx,yx,ft=T(()=>{"use strict";n();to();gt=String((ha=(fa=z.safeWindow)==null?void 0:fa.navigator)==null?void 0:ha.userAgent),xx=/^((?!chrome|android).)*safari/i.test(gt),yx=/firefox/i.test(gt)&&/windows/i.test(gt)});var nn,tn,Ta,rn,xa,ro,k=T(()=>{"use strict";n();Jr();pe();Zr();Qr();ea();_t();oa();no();on();ga();ft();nn=5e4,tn=1e9,Ta=1,rn="logout",xa="login",ro="0"});var ao,an=T(()=>{"use strict";n();ao=()=>Date.now()/1e3});var ya=T(()=>{"use strict";n()});var ba=T(()=>{"use strict";n()});var ht=T(()=>{"use strict";n();an();ya();ba()});var Tt={};re(Tt,{clear:()=>nd,getItem:()=>ed,localStorageKeys:()=>Ee,removeItem:()=>od,setItem:()=>Qm});var Ee,sn,Qm,ed,od,nd,io=T(()=>{"use strict";n();ht();Ee={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},sn=typeof localStorage!="undefined",Qm=({key:e,data:o,expires:t})=>{!sn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ed=e=>{if(!sn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:ao()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},od=e=>{!sn||localStorage.removeItem(String(e))},nd=()=>{!sn||localStorage.clear()}});var xt={};re(xt,{clear:()=>Ia,getItem:()=>wa,removeItem:()=>va,setItem:()=>Sa,storage:()=>td});var Sa,wa,va,Ia,td,Aa=T(()=>{"use strict";n();Sa=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},wa=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},va=e=>sessionStorage.removeItem(String(e)),Ia=()=>sessionStorage.clear(),td={setItem:Sa,getItem:wa,removeItem:va,clear:Ia}});var We,so=T(()=>{"use strict";n();io();Aa();We={session:xt,local:Tt}});var yt,R,K,D=T(()=>{"use strict";n();yt=require("@reduxjs/toolkit");k();R=(0,yt.createAction)(rn),K=(0,yt.createAction)(xa,e=>({payload:e}))});var St,ka,La,cn,bt,Pa,pn,rd,wt,Jx,ad,id,Zx,Qx,ey,sd,cd,mn,dn=T(()=>{"use strict";n();St=require("@multiversx/sdk-core"),ka=require("@reduxjs/toolkit"),La=require("redux-persist");k();so();io();D();cn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ro},bt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":cn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Pa=(0,ka.createSlice)({name:"accountInfoSlice",initialState:bt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new St.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:cn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(We.local.removeItem(Ee.loginExpiresAt),bt)),e.addCase(K,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new St.Address(s).hex()}),e.addCase(La.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:bt.accounts,o.publicKey=d})}}),{setAccount:pn,setAddress:rd,setAccountNonce:wt,setAccountShard:Jx,setLedgerAccount:ad,updateLedgerAccount:id,setWalletConnectAccount:Zx,setIsAccountLoading:Qx,setAccountLoadingError:ey,setWebsocketEvent:sd,setWebsocketBatchEvent:cd}=Pa.actions,mn=Pa.reducer});function Io(){return new Date().setHours(new Date().getHours()+24)}function Ao(e){We.local.setItem({key:Ee.loginExpiresAt,data:e,expires:e})}var vt=T(()=>{"use strict";n();so();io()});var Ca,Ea,Na,my,pd,md,ko,dy,dd,Ra,ly,_y,uy,ln,_n=T(()=>{"use strict";n();Ca=require("@reduxjs/toolkit");vt();C();D();Ea={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Na=(0,Ca.createSlice)({name:"loginInfoSlice",initialState:Ea,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>Ea),e.addCase(K,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Ao(Io())})}}),{setLoginMethod:my,setWalletConnectLogin:pd,setLedgerLogin:md,setTokenLogin:ko,setTokenLoginSignature:dy,setWalletLogin:dd,invalidateLoginSession:Ra,setLogoutRoute:ly,setIsWalletConnectV2Initialized:_y,setWebviewLogin:uy}=Na.actions,ln=Na.reducer});var Ma,Da,Oa,Ty,ld,xy,_d,un,gn=T(()=>{"use strict";n();Ma=require("@reduxjs/toolkit");D();Da={},Oa=(0,Ma.createSlice)({name:"modalsSlice",initialState:Da,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>Da)}}),{setTxSubmittedModal:Ty,setNotificationModal:ld,clearTxSubmittedModal:xy,clearNotificationModal:_d}=Oa.actions,un=Oa.reducer});var Ge,co=T(()=>{"use strict";n();Ge=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var M,H=T(()=>{"use strict";n();co();M=()=>{if(!Ge())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Ba=T(()=>{"use strict";n();H()});var He,Fa=T(()=>{"use strict";n();V();He=()=>{let{pathname:e,search:o,hash:t}=M();return`${e!=null?e:""}${o!=null?o:""}${t!=null?t:""}`}});var Ua,Wa=T(()=>{"use strict";n();to();Ua=e=>{if(!z.safeWindow.location)return;if(!new URL(z.safeWindow.location.href).protocol.startsWith("http"))return z.safeWindow.location.reload();z.safeWindow.location.assign(e)}});var V=T(()=>{"use strict";n();Ba();Fa();H();Wa()});var ud,fn,Lo=T(()=>{"use strict";n();V();ud=!1,fn=({timeout:e=0,url:o})=>{ud||setTimeout(()=>{if(!!window)return Ua(o)},e)}});function Ce({callbackRoute:e,onLoginRedirect:o,options:t}){let s=Boolean(e),c=typeof o=="function";if(s&&e!=null){if(c)return o(e,t);fn({url:e,timeout:gd})}}var gd,Ga=T(()=>{"use strict";n();Lo();gd=200});function Ha(e){return e[Math.floor(Math.random()*e.length)]}var Va=T(()=>{"use strict";n()});var It=T(()=>{"use strict";n();_t()});var xe=T(()=>{"use strict";n();Ga();Va();It()});var $a,ja,qa,At,hd,za,Jy,Zy,Td,hn,Tn=T(()=>{"use strict";n();$a=require("@reduxjs/toolkit"),ja=x(require("lodash.omit")),qa=require("redux-persist");on();D();xe();At={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},hd={network:At},za=(0,$a.createSlice)({name:"appConfig",initialState:hd,reducers:{initializeNetworkConfig:(e,o)=>{let t=Ha(o.payload.walletConnectV2RelayAddresses),s=(0,ja.default)(o.payload,"walletConnectV2RelayAddresses");e.network=v(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(qa.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:Jy,updateNetworkConfig:Zy,setCustomWalletAddress:Td}=za.actions,hn=za.reducer});var Ka,kt,Xa,rb,ab,ib,xn,yn=T(()=>{"use strict";n();Ka=require("@reduxjs/toolkit");B();D();kt={isSigning:!1,signedSessions:{}},Xa=(0,Ka.createSlice)({name:"signedMessageInfoSliceState",initialState:kt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>kt},extraReducers:e=>{e.addCase(R,()=>kt)}}),{setSignSession:rb,clearSignedMessageInfo:ab,setSignSessionState:ib}=Xa.actions,xn=Xa.reducer});var Ja,Za,Ya,Qa,xd,yd,_b,bd,bn,Sn=T(()=>{"use strict";n();Ja=require("@reduxjs/toolkit"),Za=require("redux-persist");B();an();D();Ya={customToasts:[],transactionToasts:[]},Qa=(0,Ja.createSlice)({name:"toastsSlice",initialState:Ya,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=v(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(v(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ao(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>Ya),e.addCase(Za.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:xd,removeCustomToast:yd,addTransactionToast:_b,removeTransactionToast:bd}=Qa.actions,bn=Qa.reducer});var ei,Pt,Et,Ct,Sd,Lt,oi,hb,wd,Nt,wn,vn=T(()=>{"use strict";n();ei=require("@reduxjs/toolkit");D();Pt="Transaction failed",Et="Transaction successful",Ct="Processing transaction",Sd="Transaction submitted",Lt={},oi=(0,ei.createSlice)({name:"transactionsInfo",initialState:Lt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Pt,successMessage:(s==null?void 0:s.successMessage)||Et,processingMessage:(s==null?void 0:s.processingMessage)||Ct,submittedMessage:(s==null?void 0:s.submittedMessage)||Sd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Lt},extraReducers:e=>{e.addCase(R,()=>Lt)}}),{clearTransactionsInfo:hb,setTransactionsDisplayInfo:wd,clearTransactionsInfoForSessionId:Nt}=oi.actions,wn=oi.reducer});function mo(e){return e!=null&&(Rd(e)||Fd(e))}function lo(e){return e!=null&&(Dd(e)||Ud(e))}function _o(e){return e!=null&&(Md(e)||Wd(e))}function ni(e){return e!=null&&(Od(e)||Gd(e))}function Rt(e){return e!=null&&Bd(e)}function Rd(e){return e!=null&&vd.includes(e)}function Dd(e){return e!=null&&Id.includes(e)}function Md(e){return e!=null&&Ad.includes(e)}function Od(e){return e!=null&&kd.includes(e)}function Bd(e){return e!=null&&Ld.includes(e)}function Fd(e){return e!=null&&Pd.includes(e)}function Ud(e){return e!=null&&Ed.includes(e)}function Wd(e){return e!=null&&Cd.includes(e)}function Gd(e){return e!=null&&Nd.includes(e)}var vd,Id,Ad,kd,Ld,Pd,Ed,Cd,Nd,uo=T(()=>{"use strict";n();C();vd=["sent"],Id=["success"],Ad=["fail","cancelled","timedOut"],kd=["invalid"],Ld=["timedOut"],Pd=["pending"],Ed=["success"],Cd=["fail","invalid"],Nd=["not executed"]});var ti,ri,Po,Hd,ai,ii,si,Vd,In,$d,jd,Ab,qd,Eo,Dt,kb,An,kn=T(()=>{"use strict";n();ti=require("@reduxjs/toolkit"),ri=require("redux-persist");C();uo();D();Po={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Hd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ai=(0,ti.createSlice)({name:"transactionsSlice",initialState:Po,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Hd),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=Po.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,b,h,w,E,L,N,$;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(b=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:b.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(U=>U.hash===p?v(u(u({},m!=null?m:{}),U),{status:s,errorMessage:c,inTransit:d}):U);let Z=(w=(h=e.signedTransactions[t])==null?void 0:h.transactions)==null?void 0:w.every(U=>lo(U.status)),oe=(L=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:L.some(U=>_o(U.status)),ke=($=(N=e.signedTransactions[t])==null?void 0:N.transactions)==null?void 0:$.every(U=>ni(U.status));Z&&(e.signedTransactions[t].status="success"),oe&&(e.signedTransactions[t].status="fail"),ke&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Po.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Po.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(R,()=>Po),e.addCase(ri.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((d,[l,g])=>{let b=new Date(l),h=new Date;return h.setHours(h.getHours()+5),h-b>0||(d[l]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ii,updateSignedTransactions:si,setTransactionsToSign:Vd,clearAllTransactionsToSign:In,clearAllSignedTransactions:$d,clearSignedTransaction:jd,clearTransactionToSign:Ab,setSignTransactionsError:qd,setSignTransactionsCancelMessage:Eo,moveTransactionsToSignedState:Dt,updateSignedTransactionsCustomTransactionInformation:kb}=ai.actions,An=ai.reducer});var ci,Mt,pi,Cb,Nb,zd,Rb,Ln,Pn=T(()=>{"use strict";n();ci=require("@reduxjs/toolkit");D();Mt={},pi=(0,ci.createSlice)({name:"batchTransactionsSlice",initialState:Mt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Mt},extraReducers:e=>{e.addCase(R,()=>Mt)}}),{setBatchTransactions:Cb,updateBatchTransactions:Nb,clearBatchTransactions:zd,clearAllBatchTransactions:Rb}=pi.actions,Ln=pi.reducer});var di,mi,li,Bb,_i,Ot=T(()=>{"use strict";n();di=require("@reduxjs/toolkit");D();mi={},li=(0,di.createSlice)({name:"dappConfigSlice",initialState:mi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>mi)}}),{setDappConfig:Bb}=li.actions,_i=li.reducer});var P=T(()=>{"use strict";n();dn();_n();gn();Tn();yn();Sn();vn();kn();Pn();Ot()});var Bt=T(()=>{"use strict";n()});var fi,Jd,Zd,Ve,Nn=T(()=>{"use strict";n();fi=require("@reduxjs/toolkit");Bt();dn();Pn();Ot();_n();gn();Tn();yn();Sn();vn();kn();Jd={["account"]:mn,["dappConfig"]:_i,["loginInfo"]:ln,["modals"]:un,["networkConfig"]:hn,["signedMessageInfo"]:xn,["toasts"]:bn,["transactionsInfo"]:wn,["transactions"]:An,["batchTransactions"]:Ln},Zd=(e={})=>(0,fi.combineReducers)(u(u({},Jd),e)),Ve=Zd});var yi={};re(yi,{default:()=>ul,sessionStorageReducers:()=>Ft});function ye(e,o=[]){return{key:e,version:1,storage:Ti.default,blacklist:o}}var X,hi,Ti,Qd,Co,el,ol,nl,tl,rl,al,il,sl,cl,pl,xi,ml,Ft,dl,ll,_l,ul,bi=T(()=>{"use strict";n();X=require("redux-persist"),hi=x(require("redux-persist/lib/storage")),Ti=x(require("redux-persist/lib/storage/session"));Nn();P();dn();Pn();_n();gn();Tn();yn();Sn();vn();kn();Bt();Qd={persistReducersStorageType:"localStorage"},Co={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},el=ye(Co["account"]),ol=ye(Co["loginInfo"]),nl=ye(Co["modals"]),tl=ye(Co["networkConfig"]),rl={2:e=>v(u({},e),{networkConfig:At})};al=ye("sdk-dapp-transactionsInfo"),il=ye("sdk-dapp-transactions",["transactionsToSign"]),sl=ye("sdk-dapp-batchTransactions",["batchTransactions"]),cl=ye("sdk-dapp-toasts"),pl=ye("sdk-dapp-signedMessageInfo"),xi={key:"sdk-dapp-store",version:2,storage:hi.default,whitelist:Object.keys(Co),migrate:(0,X.createMigrate)(rl,{debug:!1})},ml=v(u({},xi),{whitelist:[]}),Ft={["toasts"]:(0,X.persistReducer)(cl,bn),["transactions"]:(0,X.persistReducer)(il,An),["transactionsInfo"]:(0,X.persistReducer)(al,wn),["batchTransactions"]:(0,X.persistReducer)(sl,Ln),["signedMessageInfo"]:(0,X.persistReducer)(pl,xn)},dl=v(u({},Ft),{["account"]:(0,X.persistReducer)(el,mn),["loginInfo"]:(0,X.persistReducer)(ol,ln),["modals"]:(0,X.persistReducer)(nl,un),["networkConfig"]:(0,X.persistReducer)(tl,hn)}),ll=Qd.persistReducersStorageType==="localStorage",_l=ll?(0,X.persistReducer)(xi,Ve(Ft)):(0,X.persistReducer)(ml,Ve(dl)),ul=_l});var Si={};re(Si,{default:()=>gl});var gl,wi=T(()=>{"use strict";n();Nn();gl=Ve()});var vi={};re(vi,{default:()=>hl});var ee,fl,hl,Ii=T(()=>{"use strict";n();ee=require("redux-persist"),fl=[ee.FLUSH,ee.REHYDRATE,ee.PAUSE,ee.PERSIST,ee.PURGE,ee.REGISTER],hl=fl});var Li={};re(Li,{default:()=>ki});function ki(e){return(0,Ai.persistStore)(e)}var Ai,Pi=T(()=>{"use strict";n();Ai=require("redux-persist")});var ys=S((MD,xs)=>{n();var uu=typeof a=="object"&&a&&a.Object===Object&&a;xs.exports=uu});var Uo=S((OD,bs)=>{n();var gu=ys(),fu=typeof self=="object"&&self&&self.Object===Object&&self,hu=gu||fu||Function("return this")();bs.exports=hu});var or=S((BD,Ss)=>{n();var Tu=Uo(),xu=Tu.Symbol;Ss.exports=xu});var As=S((FD,Is)=>{n();var ws=or(),vs=Object.prototype,yu=vs.hasOwnProperty,bu=vs.toString,Wo=ws?ws.toStringTag:void 0;function Su(e){var o=yu.call(e,Wo),t=e[Wo];try{e[Wo]=void 0;var s=!0}catch(p){}var c=bu.call(e);return s&&(o?e[Wo]=t:delete e[Wo]),c}Is.exports=Su});var Ls=S((UD,ks)=>{n();var wu=Object.prototype,vu=wu.toString;function Iu(e){return vu.call(e)}ks.exports=Iu});var nr=S((WD,Cs)=>{n();var Ps=or(),Au=As(),ku=Ls(),Lu="[object Null]",Pu="[object Undefined]",Es=Ps?Ps.toStringTag:void 0;function Eu(e){return e==null?e===void 0?Pu:Lu:Es&&Es in Object(e)?Au(e):ku(e)}Cs.exports=Eu});var Rs=S((GD,Ns)=>{n();var Cu=Array.isArray;Ns.exports=Cu});var Ms=S((HD,Ds)=>{n();function Nu(e){return e!=null&&typeof e=="object"}Ds.exports=Nu});var Bs=S((VD,Os)=>{n();var Ru=nr(),Du=Rs(),Mu=Ms(),Ou="[object String]";function Bu(e){return typeof e=="string"||!Du(e)&&Mu(e)&&Ru(e)==Ou}Os.exports=Bu});var Xn=S((F3,qs)=>{n();function eg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}qs.exports=eg});var Ks=S((U3,zs)=>{n();var og=nr(),ng=Xn(),tg="[object AsyncFunction]",rg="[object Function]",ag="[object GeneratorFunction]",ig="[object Proxy]";function sg(e){if(!ng(e))return!1;var o=og(e);return o==rg||o==ag||o==tg||o==ig}zs.exports=sg});var Ys=S((W3,Xs)=>{n();var cg=Uo(),pg=cg["__core-js_shared__"];Xs.exports=pg});var Qs=S((G3,Zs)=>{n();var sr=Ys(),Js=function(){var e=/[^.]+$/.exec(sr&&sr.keys&&sr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function mg(e){return!!Js&&Js in e}Zs.exports=mg});var oc=S((H3,ec)=>{n();var dg=Function.prototype,lg=dg.toString;function _g(e){if(e!=null){try{return lg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}ec.exports=_g});var tc=S((V3,nc)=>{n();var ug=Ks(),gg=Qs(),fg=Xn(),hg=oc(),Tg=/[\\^$.*+?()[\]{}|]/g,xg=/^\[object .+?Constructor\]$/,yg=Function.prototype,bg=Object.prototype,Sg=yg.toString,wg=bg.hasOwnProperty,vg=RegExp("^"+Sg.call(wg).replace(Tg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ig(e){if(!fg(e)||gg(e))return!1;var o=ug(e)?vg:xg;return o.test(hg(e))}nc.exports=Ig});var ac=S(($3,rc)=>{n();function Ag(e,o){return e==null?void 0:e[o]}rc.exports=Ag});var Yn=S((j3,ic)=>{n();var kg=tc(),Lg=ac();function Pg(e,o){var t=Lg(e,o);return kg(t)?t:void 0}ic.exports=Pg});var Vo=S((q3,sc)=>{n();var Eg=Yn(),Cg=Eg(Object,"create");sc.exports=Cg});var mc=S((z3,pc)=>{n();var cc=Vo();function Ng(){this.__data__=cc?cc(null):{},this.size=0}pc.exports=Ng});var lc=S((K3,dc)=>{n();function Rg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}dc.exports=Rg});var uc=S((X3,_c)=>{n();var Dg=Vo(),Mg="__lodash_hash_undefined__",Og=Object.prototype,Bg=Og.hasOwnProperty;function Fg(e){var o=this.__data__;if(Dg){var t=o[e];return t===Mg?void 0:t}return Bg.call(o,e)?o[e]:void 0}_c.exports=Fg});var fc=S((Y3,gc)=>{n();var Ug=Vo(),Wg=Object.prototype,Gg=Wg.hasOwnProperty;function Hg(e){var o=this.__data__;return Ug?o[e]!==void 0:Gg.call(o,e)}gc.exports=Hg});var Tc=S((J3,hc)=>{n();var Vg=Vo(),$g="__lodash_hash_undefined__";function jg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Vg&&o===void 0?$g:o,this}hc.exports=jg});var yc=S((Z3,xc)=>{n();var qg=mc(),zg=lc(),Kg=uc(),Xg=fc(),Yg=Tc();function xo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}xo.prototype.clear=qg;xo.prototype.delete=zg;xo.prototype.get=Kg;xo.prototype.has=Xg;xo.prototype.set=Yg;xc.exports=xo});var Sc=S((Q3,bc)=>{n();function Jg(){this.__data__=[],this.size=0}bc.exports=Jg});var vc=S((eM,wc)=>{n();function Zg(e,o){return e===o||e!==e&&o!==o}wc.exports=Zg});var $o=S((oM,Ic)=>{n();var Qg=vc();function ef(e,o){for(var t=e.length;t--;)if(Qg(e[t][0],o))return t;return-1}Ic.exports=ef});var kc=S((nM,Ac)=>{n();var of=$o(),nf=Array.prototype,tf=nf.splice;function rf(e){var o=this.__data__,t=of(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():tf.call(o,t,1),--this.size,!0}Ac.exports=rf});var Pc=S((tM,Lc)=>{n();var af=$o();function sf(e){var o=this.__data__,t=af(o,e);return t<0?void 0:o[t][1]}Lc.exports=sf});var Cc=S((rM,Ec)=>{n();var cf=$o();function pf(e){return cf(this.__data__,e)>-1}Ec.exports=pf});var Rc=S((aM,Nc)=>{n();var mf=$o();function df(e,o){var t=this.__data__,s=mf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Nc.exports=df});var Mc=S((iM,Dc)=>{n();var lf=Sc(),_f=kc(),uf=Pc(),gf=Cc(),ff=Rc();function yo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}yo.prototype.clear=lf;yo.prototype.delete=_f;yo.prototype.get=uf;yo.prototype.has=gf;yo.prototype.set=ff;Dc.exports=yo});var Bc=S((sM,Oc)=>{n();var hf=Yn(),Tf=Uo(),xf=hf(Tf,"Map");Oc.exports=xf});var Wc=S((cM,Uc)=>{n();var Fc=yc(),yf=Mc(),bf=Bc();function Sf(){this.size=0,this.__data__={hash:new Fc,map:new(bf||yf),string:new Fc}}Uc.exports=Sf});var Hc=S((pM,Gc)=>{n();function wf(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Gc.exports=wf});var jo=S((mM,Vc)=>{n();var vf=Hc();function If(e,o){var t=e.__data__;return vf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Vc.exports=If});var jc=S((dM,$c)=>{n();var Af=jo();function kf(e){var o=Af(this,e).delete(e);return this.size-=o?1:0,o}$c.exports=kf});var zc=S((lM,qc)=>{n();var Lf=jo();function Pf(e){return Lf(this,e).get(e)}qc.exports=Pf});var Xc=S((_M,Kc)=>{n();var Ef=jo();function Cf(e){return Ef(this,e).has(e)}Kc.exports=Cf});var Jc=S((uM,Yc)=>{n();var Nf=jo();function Rf(e,o){var t=Nf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Yc.exports=Rf});var Qc=S((gM,Zc)=>{n();var Df=Wc(),Mf=jc(),Of=zc(),Bf=Xc(),Ff=Jc();function bo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}bo.prototype.clear=Df;bo.prototype.delete=Mf;bo.prototype.get=Of;bo.prototype.has=Bf;bo.prototype.set=Ff;Zc.exports=bo});var op=S((fM,ep)=>{n();var Uf="__lodash_hash_undefined__";function Wf(e){return this.__data__.set(e,Uf),this}ep.exports=Wf});var tp=S((hM,np)=>{n();function Gf(e){return this.__data__.has(e)}np.exports=Gf});var ap=S((TM,rp)=>{n();var Hf=Qc(),Vf=op(),$f=tp();function Jn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Hf;++o<t;)this.add(e[o])}Jn.prototype.add=Jn.prototype.push=Vf;Jn.prototype.has=$f;rp.exports=Jn});var sp=S((xM,ip)=>{n();function jf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}ip.exports=jf});var pp=S((yM,cp)=>{n();function qf(e){return e!==e}cp.exports=qf});var dp=S((bM,mp)=>{n();function zf(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}mp.exports=zf});var _p=S((SM,lp)=>{n();var Kf=sp(),Xf=pp(),Yf=dp();function Jf(e,o,t){return o===o?Yf(e,o,t):Kf(e,Xf,t)}lp.exports=Jf});var gp=S((wM,up)=>{n();var Zf=_p();function Qf(e,o){var t=e==null?0:e.length;return!!t&&Zf(e,o,0)>-1}up.exports=Qf});var hp=S((vM,fp)=>{n();function eh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}fp.exports=eh});var xp=S((IM,Tp)=>{n();function oh(e,o){return e.has(o)}Tp.exports=oh});var bp=S((AM,yp)=>{n();var nh=Yn(),th=Uo(),rh=nh(th,"Set");yp.exports=rh});var wp=S((kM,Sp)=>{n();function ah(){}Sp.exports=ah});var cr=S((LM,vp)=>{n();function ih(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}vp.exports=ih});var Ap=S((PM,Ip)=>{n();var pr=bp(),sh=wp(),ch=cr(),ph=1/0,mh=pr&&1/ch(new pr([,-0]))[1]==ph?function(e){return new pr(e)}:sh;Ip.exports=mh});var Lp=S((EM,kp)=>{n();var dh=ap(),lh=gp(),_h=hp(),uh=xp(),gh=Ap(),fh=cr(),hh=200;function Th(e,o,t){var s=-1,c=lh,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=_h;else if(p>=hh){var g=o?null:gh(e);if(g)return fh(g);m=!1,c=uh,l=new dh}else l=o?[]:d;e:for(;++s<p;){var b=e[s],h=o?o(b):b;if(b=t||b!==0?b:0,m&&h===h){for(var w=l.length;w--;)if(l[w]===h)continue e;o&&l.push(h),d.push(b)}else c(l,h,t)||(l!==d&&l.push(h),d.push(b))}return d}kp.exports=Th});var Ep=S((CM,Pp)=>{n();var xh=Lp();function yh(e){return e&&e.length?xh(e):[]}Pp.exports=yh});var ur={};re(ur,{css:()=>Vp,default:()=>eT});var Vp,eT,gr=T(()=>{"use strict";n();Vp=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vp));eT={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Ie={};re(Ie,{css:()=>qp,default:()=>tT});var qp,tT,Ae=T(()=>{"use strict";n();qp=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qp));tT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var vr={};re(vr,{css:()=>am,default:()=>IT});var am,IT,Ir=T(()=>{"use strict";n();am=`.dapp-core-component__loginButtonStyles__default-login-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(am));IT={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var PT={};re(PT,{OperaWalletLoginButton:()=>LT});module.exports=ne(PT);n();n();var Qn=x(require("react"));k();n();n();n();var Mi=require("react"),go=require("react-redux");n();var Ut=require("@reduxjs/toolkit"),Ri=require("react-redux/lib/utils/Subscription");P();n();var ui=x(require("lodash.throttle"));k();P();vt();so();io();var Kd=[rn],En=!1,Xd=(0,ui.default)(()=>{Ao(Io())},5e3),gi=e=>o=>t=>{if(Kd.includes(t.type))return o(t);let s=e.getState(),c=We.local.getItem(Ee.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return Ao(Io());let m=Date.now();return c-m<0&&!En?setTimeout(()=>{En=!0,e.dispatch(Ra())},1e3):(En&&(En=!1),Xd()),o(t)};n();n();function Cn(){return typeof sessionStorage!="undefined"}var Ei=Cn()?(bi(),ne(yi)).default:(wi(),ne(Si)).default,Ci=Cn()?(Ii(),ne(vi)).default:[],Ni=Cn()?(Pi(),ne(Li)).default:e=>e;Nn();var I=(0,Ut.configureStore)({reducer:Ei,middleware:e=>e({serializableCheck:{ignoredActions:[...Ci,wt.type,pn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(gi)}),Di=(0,Ri.createSubscription)(I),MS=Ni(I),OS=(0,Ut.configureStore)({reducer:Ve});var Tl={store:I,subscription:Di},Wt=(0,Mi.createContext)(Tl),WS=(0,go.createStoreHook)(Wt),G=(0,go.createDispatchHook)(Wt),A=(0,go.createSelectorHook)(Wt);n();n();P();n();var Oi=x(require("lodash.isequal")),Rn=require("reselect"),y=(0,Rn.createSelectorCreator)(Rn.defaultMemoize,Oi.default);var de=e=>e.account,$e=y(de,e=>e.address),je=y(de,$e,(e,o)=>o in e.accounts?e.accounts[o]:cn),xl=y(de,je,(e,o)=>{let c=e,{accounts:t}=c,s=Oe(c,["accounts"]);return v(u({},s),{address:o.address,account:o})}),jS=y(je,e=>e.balance),yl=y(je,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),qS=y(de,e=>e.shard),bl=y(de,e=>e.ledgerAccount),zS=y(de,e=>e.walletConnectAccount),KS=y(de,e=>e.isAccountLoading),XS=y(de,e=>e.accountLoadingError),Sl=y(de,e=>e.websocketEvent),wl=y(de,e=>e.websocketBatchEvent);n();var Bi=e=>e.dappConfig,ZS=y(Bi,e=>e.shouldUseWebViewProvider);n();var J=e=>e.loginInfo,vl=y(J,e=>e.loginMethod),No=y(J,$e,(e,o)=>Boolean(o)),n0=y(J,e=>e.walletConnectLogin),Il=y(J,e=>e.ledgerLogin),Al=y(J,e=>e.walletLogin),t0=y(J,e=>e.isLoginSessionInvalid),Ro=y(J,e=>e.tokenLogin),Fi=y(J,e=>e.logoutRoute),kl=y(J,e=>e.isWalletConnectV2Initialized);n();var Ui=e=>e.modals,i0=y(Ui,e=>e.txSubmittedModal),Ll=y(Ui,e=>e.notificationModal);n();var le=e=>e.networkConfig,Dn=y(le,e=>e.network.chainId),Pl=y(le,e=>e.network.roundDuration),p0=y(le,e=>e.network.walletConnectBridgeAddress),El=y(le,e=>e.network.walletConnectV2RelayAddress),Cl=y(le,e=>e.network.walletConnectV2ProjectId),Nl=y(le,e=>e.network.walletConnectV2Options),Rl=y(le,e=>e.network.walletConnectDeepLink),Y=y(le,e=>e.network),Wi=y(Y,e=>e.apiAddress),Gi=y(Y,e=>e.explorerAddress),Hi=y(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Dl=y(Y,e=>e.xAliasAddress),Vi=y(Y,e=>e.egldLabel);n();var Mn=e=>e.signedMessageInfo,l0=y(Mn,e=>e.isSigning),_0=y(Mn,e=>e.errorMessage),u0=y(Mn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),g0=y(Mn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var $i=e=>e.toasts,Ml=y($i,e=>e.customToasts),ji=y($i,e=>e.transactionToasts);n();P();var qi={errorMessage:Pt,successMessage:Et,processingMessage:Ct},zi=e=>e.transactionsInfo,Ol=y(zi,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||qi);n();n();var _e=require("@multiversx/sdk-core");k();n();var Gt=require("@multiversx/sdk-core/out");n();n();function On(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function qe(e){return On(e)?atob(e):e}n();n();n();n();var Ki=e=>{let o=e!=null?e:"";return On(o)?Gt.TransactionPayload.fromEncoded(o):new Gt.TransactionPayload(o)};n();k();var Do=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(lt).some(t=>e.startsWith(t)):!1;function Bn(e){var s,c,p;let o=u({},e);Do({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new _e.Transaction(u(u(v(u(v(u({value:o.value.valueOf(),data:Ki(o.data),nonce:o.nonce.valueOf(),receiver:new _e.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new _e.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:nn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:tn,chainID:o.chainID.valueOf(),version:new _e.TransactionVersion((p=o.version)!=null?p:Ta)}),o.options?{options:new _e.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new _e.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();k();n();n();n();var Wl=require("@multiversx/sdk-core/out");n();k();n();var Xi=require("@multiversx/sdk-core");B();n();var Gl=require("@multiversx/sdk-core");n();n();n();var Hl=require("@multiversx/sdk-core"),Vl=x(require("bignumber.js"));C();n();n();n();var Vt="blocks";n();n();n();n();q();n();n();q();n();n();n();var Jl=x(require("bignumber.js"));k();n();var Yl=require("@multiversx/sdk-core"),jt=x(require("bignumber.js"));k();n();var Kl=x(require("bignumber.js"));n();jt.default.config({ROUNDING_MODE:jt.default.ROUND_FLOOR});n();n();n();k();n();n();n();n();k();n();k();n();var Zl=require("@multiversx/sdk-core");k();n();var Oo=require("@multiversx/sdk-core"),o_=x(require("bignumber.js"));k();n();n();var Ql=x(require("bignumber.js"));k();n();k();n();n();n();n();n();n();k();n();k();n();k();n();q();var t_=["reDelegateRewards","claimRewards","unBond"],r_=["wrapEgld","unwrapEgld"],a_=["unStake"],i_=["unDelegate"];n();n();n();k();n();var m_=x(require("bignumber.js"));n();n();q();n();var l_=x(require("bignumber.js"));n();n();n();n();var g_=x(require("bignumber.js"));B();n();n();n();n();C();n();var x_=require("@multiversx/sdk-web-wallet-provider");k();n();var h_=x(require("qs"));n();V();co();n();co();var YA={search:Ge()?window.location.search:"",removeParams:[]};n();n();n();H();n();q();n();n();H();n();var y_=x(require("linkifyjs"));n();k();n();var b_=x(require("bignumber.js"));n();B();n();n();C();n();C();n();n();n();q();n();q();n();var S_=x(require("bignumber.js"));k();q();n();q();n();var os=require("react");B();n();n();q();n();n();var w_=require("@multiversx/sdk-core/out"),v_=x(require("bignumber.js"));q();n();B();n();n();B();var GL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var ns=require("react");B();H();n();var A_=require("react");q();var XL=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];uo();n();var Wn=e=>e.transactions,fo=y(Wn,e=>e.signedTransactions),k_=y(Wn,e=>e.signTransactionsError),ts=y(Wn,e=>e.signTransactionsCancelMessage),Gn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),rs=y(fo,Gn(mo)),as=y(fo,Gn(lo)),is=y(fo,Gn(_o)),L_=y(fo,Gn(Rt)),ss=y(Wn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:v(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Bn(t)))||[]})}),P_=y(fo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var cs=require("react");n();P();n();n();n();n();n();n();n();n();var C_=require("@multiversx/sdk-extension-provider"),N_=require("@multiversx/sdk-hw-provider"),R_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),D_=require("@multiversx/sdk-opera-provider"),M_=require("@multiversx/sdk-passkey-provider/out"),O_=require("@multiversx/sdk-web-wallet-provider");k();Pe();n();var ze=require("@multiversx/sdk-web-wallet-iframe-provider/out"),ps=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");C();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,Hn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Xt=new Hn;var B_=Xt;function Se(e){B_=e}P();n();n();n();n();n();var ms=require("@lifeomic/axios-fetch"),Yt=x(require("axios")),Jt=(0,ms.buildAxiosFetch)(Yt.default),Zt=(e,o)=>f(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function F_(e,o,t){return f(this,null,function*(){try{let s=yield Jt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Zt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function U_(e,o){return f(this,null,function*(){try{let t=yield Jt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Zt(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function W_(e,o,t){return f(this,null,function*(){try{let s=yield Jt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Zt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var ho=Yt.default.create();ho.get=U_;ho.post=F_;ho.patch=W_;n();n();var G_=x(require("axios"));n();var H_=x(require("swr"));n();C();n();n();n();H();n();uo();n();n();n();var V_=x(require("axios"));n();var j_=x(require("axios"));no();n();k();n();var q_=x(require("axios"));n();var K_=x(require("axios"));n();n();var X_=x(require("axios"));n();var Y_=x(require("axios"));n();n();P();C();n();n();n();n();H();n();D();B();n();P();n();var us=require("@multiversx/sdk-core");B();V();n();uo();n();P();C();n();P();B();n();n();n();B();n();on();n();n();n();n();var eu=x(require("swr"));n();n();n();n();var gs=require("react");n();n();var ou=require("react"),nu=require("@multiversx/sdk-web-wallet-provider"),tu=require("@multiversx/sdk-web-wallet-provider"),ru=x(require("qs"));k();P();C();ut();H();var DR=M();n();var js=require("react"),ir=require("@multiversx/sdk-core");n();k();It();n();n();n();n();n();n();n();n();n();n();no();n();var cu=x(require("axios"));n();var mu=x(require("axios"));n();no();n();no();n();n();n();n();var lu=require("@multiversx/sdk-opera-provider");n();var _u=require("@multiversx/sdk-extension-provider");n();Pe();n();n();n();n();var Fs=x(Bs());var To=e=>{if(!e||!(0,Fs.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,s,c,p]=o,m=JSON.parse(qe(p)),d=qe(t);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:s}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var $s=require("@multiversx/sdk-native-auth-client");n();var Gs=x(require("axios"));n();n();n();function Us(e){return f(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Ws=(e,o,t,s=0)=>f(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Us(o.delay)),yield Ws(e,o,t,s+1)):null}}),tr=(e,o={retries:5,delay:500})=>(...t)=>f(void 0,null,function*(){return yield Ws(e,o,t)});var Fu=4,Uu=3e4,qn={current:null},Ke={current:null},Wu=tr((e,o,t)=>f(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Gs.default.get(`${e}/${Vt}?from=${Fu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));function Hs(e,o,t,s){return f(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(qn.current!=null&&c<qn.current.timestamp*1e3+Uu&&!s)return qn.current;if(Ke.current!=null)return yield Ke.current;Ke.current=Wu(e,o,t);try{let p=yield Ke.current;if(p==null)throw Ke.current=null,new Error("could not get block hash");return qn.current={hash:p.hash,timestamp:p.timestamp},Ke.current=null,p}catch(p){return Ke.current=null,null}})}n();n();an();n();function Gu(e){return Object.prototype.toString.call(e)==="[object String]"}var rr=e=>{var t;if(!e||!Gu(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[s,c,p]=o,m=qe(s),d=qe(c),l=To(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let g=v(u({},l),{address:m,body:d,signature:p});return(t=l.extraInfo)!=null&&t.timestamp||delete g.extraInfo,g}catch(s){return null}};var ar={isExpired:!1},Vs=e=>{if(!e)return ar;let o=rr(e);if(!o)return ar;let t=ao(),{ttl:s,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return ar;let m=p+s,d=t>m,l=m-t;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};n();H();var Go={origin:M().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},Ho=e=>{var t,s,c,p,m,d;return e===!0?Go:{origin:(t=e==null?void 0:e.origin)!=null?t:Go.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(s=e==null?void 0:e.expirySeconds)!=null?s:Go.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:Go.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:Go.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var zn=e=>{let{origin:o,apiAddress:t,expirySeconds:s,blockHashShard:c,extraInfo:p,gatewayUrl:m,extraRequestHeaders:d}=Ho(e),l=new $s.NativeAuthClient({origin:o,apiUrl:t,expirySeconds:s,blockHashShard:c,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:Ho,initialize:h=>f(void 0,null,function*(){var E,L;if(!t||!o)return"";let w=()=>l.getCurrentBlockHash();try{let N=(E=h==null?void 0:h.latestBlockInfo)!=null?E:yield Hs(t,c,w,h==null?void 0:h.noCache);if(!N)return"";let{hash:$,timestamp:Z}=N,oe=l.encodeValue(JSON.stringify(u(u({},(L=h==null?void 0:h.extraInfo)!=null?L:p),Z?{timestamp:Z}:{})));return`${l.encodeValue(o)}.${$}.${s}.${oe}`}catch(N){return console.error("Error getting native auth token: ",N.toString()),""}}),getToken:({address:h,token:w,signature:E})=>l.getToken(h,w,E),getTokenExpiration:Vs}};n();var Hu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Vu=require("@multiversx/sdk-passkey-provider/out");k();H();n();n();n();var Xu=require("react"),Yu=require("@multiversx/sdk-hw-provider");n();D();B();n();Lo();so();io();V();n();n();var Dp=require("react"),Mp=require("@multiversx/sdk-core"),Fh=require("@multiversx/sdk-extension-provider"),Uh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Wh=require("@multiversx/sdk-passkey-provider/out"),Gh=x(Ep());k();n();n();var So=()=>A(je);n();n();n();n();n();n();n();n();var qo=x(require("react"));var zM=(0,qo.createContext)({}),KM=I.getState();n();var Np=x(require("react"));n();var mr=x(require("react")),bh=x(require("axios"));n();n();Pe();n();n();var kh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Lh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");D();n();D();P();B();n();n();P();n();V();n();P();B();n();n();var wh=require("@multiversx/sdk-core"),vh=x(require("bignumber.js"));k();n();var Ih=x(require("bignumber.js"));k();P();C();V();H();n();var Rp=require("react"),Nh=require("@multiversx/sdk-extension-provider"),Rh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Dh=require("@multiversx/sdk-passkey-provider/out");Pe();P();n();P();B();Lo();H();n();pe();P();n();n();var Vh=require("react");n();n();C();uo();n();var Op=require("react");n();n();var jh=require("react"),qh=require("@multiversx/sdk-extension-provider");pe();D();C();n();function we(){return No(I.getState())}xe();V();V();n();n();Pe();B();var De=e=>(Object.values(F).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let t=Le.CrossWindowProvider.getInstance();t.isInitialized()&&t.dispose();break}case"iframe":{let t=ze.IframeProvider.getInstance();t.isInitialized()&&t.dispose();break}default:break}}),null);n();var Bp=require("react"),Zn=require("@multiversx/sdk-core");P();var $h=(e,o)=>{var t;return o?o===!0?e:(t=o.apiAddress)!=null?t:e:null},ve=e=>{let o=A(Y),t=A(Ro),s=(0,Bp.useRef)(t==null?void 0:t.loginToken),c=$h(o.apiAddress,e),p=Ho(u(u({},e===!0?{}:e),c?{apiAddress:c}:{})),m=Boolean(e),d=zn(p),{address:l}=So(),g=G(),b=L=>{s.current=L,g(ko(u(v(u({},t),{loginToken:L}),c?{nativeAuthConfig:p}:{})))},h=()=>{try{return d.initialize()}catch(L){console.error("Unable to get block. Login failed.",L);return}},w=({address:L,signature:N})=>{let $=s.current;if(!$)throw"Token not found. Call `setLoginToken` first.";if(!m){g(ko({loginToken:$,signature:N}));return}let Z=d.getToken({address:L,token:$,signature:N});return g(ko(u({loginToken:$,signature:N,nativeAuthToken:Z},c?{nativeAuthConfig:p}:{}))),Z};return{configuration:p,setLoginToken:b,getNativeAuthLoginToken:h,setTokenLoginInfo:w,refreshNativeAuthTokenLogin:$=>f(void 0,[$],function*({signMessageCallback:L,nativeAuthClientConfig:N}){let oe=yield zn(N||p).initialize({noCache:Boolean(N)});if(s.current=oe,!oe)return;let ke=new Zn.Message({address:new Zn.Address(l),data:r.Buffer.from(`${l}${oe}`)}),U=yield L(ke,{});if(!(U!=null&&U.signature))throw"Message not signed";return w({address:l,signature:r.Buffer.from(U.signature).toString("hex")})})}};n();var dr=require("react"),Fp=require("@multiversx/sdk-opera-provider");pe();D();C();xe();V();H();var lr=({callbackRoute:e,token:o,nativeAuth:t,onLoginRedirect:s})=>{let[c,p]=(0,dr.useState)(""),[m,d]=(0,dr.useState)(!1),l=t!=null,g=ve(t),b=o,h=G(),w=we();function E(){return f(this,null,function*(){if(w)throw new Error(Te);De(),d(!0);let N=Fp.OperaProvider.getInstance();try{if(!(yield N.init())){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:Z}=M(),oe=He(),ke=encodeURIComponent(`${Z}${e!=null?e:oe}`);if(l&&!b&&(b=yield g.getNativeAuthLoginToken(),!b)){console.warn("Fetching block failed. Login cancelled.");return}b&&g.setLoginToken(b);let U=u({callbackUrl:ke},b&&{token:b});yield N.login(U),Se(N);let{signature:Xe,address:Ye}=N.account;if(!Ye){d(!1),console.warn("Login cancelled.");return}Xe&&b&&g.setTokenLoginInfo({signature:Xe,address:Ye}),h(K({address:Ye,loginMethod:"opera"})),Ce({callbackRoute:e,onLoginRedirect:s,options:{signature:Xe,address:Ye}})}catch($){console.error("error loging in",$),p("error logging in"+$.message)}finally{d(!1)}})}let L=Boolean(c);return[E,{loginFailed:L,error:c,isLoading:m&&!L,isLoggedIn:w&&!L}]};n();var zh=require("react");ft();pe();Pe();D();P();C();xe();H();n();var Zh=require("react");pe();P();n();n();ht();n();n();var Kh=x(require("platform"));co();n();n();n();n();n();n();n();to();C();n();n();var Xh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Lo();so();n();n();n();P();n();n();var Yh=x(require("axios"));V();n();n();var Jh=x(Xn());to();var Up,Wp,Gp,FU=(Gp=(Wp=(Up=z.safeWindow)==null?void 0:Up.location)==null?void 0:Wp.origin)==null?void 0:Gp.includes("localhost");n();H();n();n();var dT=require("react");k();n();n();k();var _r=e=>{var c;let o=A(Ro),t=(c=o==null?void 0:o.loginToken)!=null?c:e;if(!t)return;let s=To(t);if(!!s)return s.origin.toLowerCase().startsWith(ua)};n();n();n();var Qh=x(require("bignumber.js"));n();n();n();var Me=x(require("react")),Zp=require("react"),Qp=require("react"),br=x(require("classnames")),em=require("react-dom");k();n();var jp=x(require("react"));n();var zo=x(require("react"));n();co();var Hp=()=>!Ge();var oT=()=>f(void 0,null,function*(){return yield Promise.resolve().then(()=>(gr(),ur))}),nT=()=>(gr(),ne(ur)).default,fr=Hp();function $p({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=zo.default.useState(fr?void 0:nT()),[p,m]=zo.default.useState(fr||t==null?void 0:t()),d=()=>f(this,null,function*(){(e?e():oT()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,zo.useEffect)(()=>{fr&&d()},[]),{globalStyles:s,styles:p}}function ue(e,o){return t=>{let{globalStyles:s,styles:c}=$p({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return jp.default.createElement(e,v(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var zp=x(require("react")),Kp=x(require("classnames"));var rT=({className:e,children:o,styles:t})=>zp.default.createElement("div",{className:(0,Kp.default)(t==null?void 0:t.dappModalBody,e)},o),hr=ue(rT,{ssrStyles:()=>Promise.resolve().then(()=>(Ae(),Ie)),clientStyles:()=>(Ae(),ne(Ie)).default});n();var Tr=x(require("react")),Xp=x(require("classnames"));var aT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?Tr.default.createElement("div",{className:(0,Xp.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Tr.default.createElement("div",null,s)):null,xr=ue(aT,{ssrStyles:()=>Promise.resolve().then(()=>(Ae(),Ie)),clientStyles:()=>(Ae(),ne(Ie)).default});n();var wo=x(require("react")),Yp=require("@fortawesome/free-solid-svg-icons"),Jp=require("@fortawesome/react-fontawesome"),Ko=x(require("classnames"));var iT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?wo.default.createElement("div",{className:(0,Ko.default)(l==null?void 0:l.dappModalHeader,s)},t):wo.default.createElement("div",{className:(0,Ko.default)(l==null?void 0:l.dappModalHeader,s)},wo.default.createElement("div",{className:(0,Ko.default)(l==null?void 0:l.dappModalHeaderText,p)},o),wo.default.createElement("button",{onClick:m,className:(0,Ko.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},wo.default.createElement(Jp.FontAwesomeIcon,{size:"lg",icon:Yp.faTimes}))):null,yr=ue(iT,{ssrStyles:()=>Promise.resolve().then(()=>(Ae(),Ie)),clientStyles:()=>(Ae(),ne(Ie)).default});var cT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},pT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=cT,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:g})=>{let[b,h]=(0,Zp.useState)(!1);if((0,Qp.useEffect)(()=>{h(!0)},[]),!l)return null;let{showHeader:w,showFooter:E,headerText:L,footerText:N,modalDialogClassName:$="dapp-modal-dialog",modalContentClassName:Z="dapp-modal-dialog-content",modalHeaderClassName:oe="dapp-modal-dialog-header",modalHeaderTextClassName:ke="dapp-modal-dialog-header-text",modalCloseButtonClassName:U="dapp-modal-dialog-close-button",modalBodyClassName:Xe="dapp-modal-dialog-content-body",modalFooterClassName:Ye="dapp-modal-dialog-footer",customModalHeader:pm,customModalFooter:mm}=c,dm=lm=>{lm.key==="Escape"&&s&&(m==null||m())};return Me.default.createElement(Me.default.Fragment,null,b&&(0,em.createPortal)(Me.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,br.default)($,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:dm},Me.default.createElement("div",{className:(0,br.default)(g==null?void 0:g.dappModalContent,Z)},Me.default.createElement(yr,{visible:w,headerText:L,customHeader:pm,className:oe,headerTextClassName:ke,closeButtonClassName:U,onHide:m}),Me.default.createElement(hr,{className:Xe},o),Me.default.createElement(xr,{visible:E,customFooter:mm,footerText:N,className:Ye}))),d!=null?d:document==null?void 0:document.body))},mT=ue(pT,{ssrStyles:()=>Promise.resolve().then(()=>(Ae(),Ie)),clientStyles:()=>(Ae(),ne(Ie)).default});n();n();var om=require("react");n();n();var nm=require("react"),_T=require("@multiversx/sdk-hw-provider");pe();D();P();C();xe();n();var lT=require("react");n();n();var Sr=require("react");D();P();C();xe();H();n();var gT=require("react"),fT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();D();C();xe();V();V();n();var hT=require("react"),TT=require("@multiversx/sdk-passkey-provider/out");pe();D();C();xe();V();V();n();n();var tm=require("react");n();var bT=require("react");n();var wr=require("react"),yT=require("socket.io-client");P();n();n();n();var ST=require("react");B();n();n();n();var vT=x(require("swr"));n();n();n();n();var wT=x(require("axios"));n();n();var Xo=x(require("react")),im=x(require("classnames"));var AT=({onLogin:e,text:o="Default Login Button",className:t="dapp-login-button",btnClassName:s="dapp-default-login-button",disabled:c,"data-testid":p,children:m,globalStyles:d,styles:l})=>{let g=(0,Xo.useMemo)(()=>({wrapper:(0,im.default)(d==null?void 0:d.btn,d==null?void 0:d.btnPrimary,d==null?void 0:d.px4,d==null?void 0:d.m1,d==null?void 0:d.mx3,{[s]:s!=null},t),loginText:l==null?void 0:l.loginText,wrapperClassName:t}),[d,l]);return Xo.default.createElement("button",{"data-testid":p,disabled:c,className:g.wrapper,onClick:e},m||Xo.default.createElement("span",{className:g.loginText},o))},sm=ue(AT,{ssrStyles:()=>Promise.resolve().then(()=>(Ir(),vr)),clientStyles:()=>(Ir(),ne(vr)).default});n();n();to();var cm=()=>{var e,o;return Boolean(((e=z.safeWindow)==null?void 0:e.isOpera)&&((o=z.safeWindow)==null?void 0:o.elrond))};var kT=cm(),LT=({token:e,className:o="dapp-opera-login",children:t,callbackRoute:s,buttonClassName:c,nativeAuth:p,loginButtonText:m="Opera Crypto Wallet",onLoginRedirect:d,disabled:l,"data-testid":g="operaLoginButton"})=>{let b=_r(e),[h]=lr({callbackRoute:s,token:e,onLoginRedirect:d,nativeAuth:p});return kT?Qn.default.createElement(sm,{onLogin:()=>{h()},className:o,btnClassName:c,text:m,disabled:l||b,"data-testid":g},t):Qn.default.createElement(Qn.default.Fragment,null)};0&&(module.exports={OperaWalletLoginButton});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
