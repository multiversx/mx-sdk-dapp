"use strict";var Bm=Object.create;var xo=Object.defineProperty,Um=Object.defineProperties,Wm=Object.getOwnPropertyDescriptor,Gm=Object.getOwnPropertyDescriptors,Hm=Object.getOwnPropertyNames,qo=Object.getOwnPropertySymbols,$m=Object.getPrototypeOf,Jn=Object.prototype.hasOwnProperty,Rr=Object.prototype.propertyIsEnumerable;var Dr=(e,o,t)=>o in e?xo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Jn.call(o,t)&&Dr(e,t,o[t]);if(qo)for(var t of qo(o))Rr.call(o,t)&&Dr(e,t,o[t]);return e},w=(e,o)=>Um(e,Gm(o));var _e=(e,o)=>{var t={};for(var s in e)Jn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&qo)for(var s of qo(e))o.indexOf(s)<0&&Rr.call(e,s)&&(t[s]=e[s]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),V=(e,o)=>{for(var t in o)xo(e,t,{get:o[t],enumerable:!0})},Mr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Hm(o))!Jn.call(e,c)&&c!==t&&xo(e,c,{get:()=>o[c],enumerable:!(s=Wm(o,c))||s.enumerable});return e};var T=(e,o,t)=>(t=e!=null?Bm($m(e)):{},Mr(o||!e||!e.__esModule?xo(t,"default",{value:e,enumerable:!0}):t,e)),G=e=>Mr(xo({},"__esModule",{value:!0}),e);var f=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{l(t.next(_))}catch(g){c(g)}},m=_=>{try{l(t.throw(_))}catch(g){c(g)}},l=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);l((t=t.apply(e,o)).next())});var Br=S(jo=>{"use strict";n();jo.byteLength=qm;jo.toByteArray=zm;jo.fromByteArray=Ym;var ae=[],Z=[],Vm=typeof Uint8Array!="undefined"?Uint8Array:Array,Zn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ce=0,Or=Zn.length;Ce<Or;++Ce)ae[Ce]=Zn[Ce],Z[Zn.charCodeAt(Ce)]=Ce;var Ce,Or;Z["-".charCodeAt(0)]=62;Z["_".charCodeAt(0)]=63;function Fr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function qm(e){var o=Fr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function jm(e,o,t){return(o+t)*3/4-t}function zm(e){var o,t=Fr(e),s=t[0],c=t[1],p=new Vm(jm(e,s,c)),m=0,l=c>0?s-4:s,_;for(_=0;_<l;_+=4)o=Z[e.charCodeAt(_)]<<18|Z[e.charCodeAt(_+1)]<<12|Z[e.charCodeAt(_+2)]<<6|Z[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Z[e.charCodeAt(_)]<<2|Z[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=Z[e.charCodeAt(_)]<<10|Z[e.charCodeAt(_+1)]<<4|Z[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Km(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function Xm(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Km(s));return c.join("")}function Ym(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,l=t-s;m<l;m+=p)c.push(Xm(e,m,m+p>l?l:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var Ur=S(Qn=>{n();Qn.read=function(e,o,t,s,c){var p,m,l=c*8-s-1,_=(1<<l)-1,g=_>>1,x=-7,b=t?c-1:0,k=t?-1:1,D=e[o+b];for(b+=k,p=D&(1<<-x)-1,D>>=-x,x+=l;x>0;p=p*256+e[o+b],b+=k,x-=8);for(m=p&(1<<-x)-1,p>>=-x,x+=s;x>0;m=m*256+e[o+b],b+=k,x-=8);if(p===0)p=1-g;else{if(p===_)return m?NaN:(D?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(D?-1:1)*m*Math.pow(2,p-s)};Qn.write=function(e,o,t,s,c,p){var m,l,_,g=p*8-c-1,x=(1<<g)-1,b=x>>1,k=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,D=s?0:p-1,J=s?1:-1,we=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(l=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+b>=1?o+=k/_:o+=k*Math.pow(2,1-b),o*_>=2&&(m++,_/=2),m+b>=x?(l=0,m=x):m+b>=1?(l=(o*_-1)*Math.pow(2,c),m=m+b):(l=o*Math.pow(2,b-1)*Math.pow(2,c),m=0));c>=8;e[t+D]=l&255,D+=J,l/=256,c-=8);for(m=m<<c|l,g+=c;g>0;e[t+D]=m&255,D+=J,m/=256,g-=8);e[t+D-J]|=we*128}});var Zr=S(Xe=>{"use strict";n();var et=Br(),Ke=Ur(),Wr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Xe.Buffer=d;Xe.SlowBuffer=nd;Xe.INSPECT_MAX_BYTES=50;var zo=2147483647;Xe.kMaxLength=zo;d.TYPED_ARRAY_SUPPORT=Jm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Jm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function ue(e){if(e>zo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return rt(e)}return $r(e,o,t)}d.poolSize=8192;function $r(e,o,t){if(typeof e=="string")return Qm(e,o);if(ArrayBuffer.isView(e))return ed(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return nt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=od(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return $r(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Vr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Zm(e,o,t){return Vr(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}d.alloc=function(e,o,t){return Zm(e,o,t)};function rt(e){return Vr(e),ue(e<0?0:at(e)|0)}d.allocUnsafe=function(e){return rt(e)};d.allocUnsafeSlow=function(e){return rt(e)};function Qm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=qr(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function ot(e){for(var o=e.length<0?0:at(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function ed(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return nt(o.buffer,o.byteOffset,o.byteLength)}return ot(e)}function nt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function od(e){if(d.isBuffer(e)){var o=at(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||it(e.length)?ue(0):ot(e);if(e.type==="Buffer"&&Array.isArray(e.data))return ot(e.data)}function at(e){if(e>=zo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+zo.toString(16)+" bytes");return e|0}function nd(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function qr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return tt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Jr(e).length;default:if(c)return s?-1:tt(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=qr;function td(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return _d(this,o,t);case"utf8":case"utf-8":return zr(this,o,t);case"ascii":return dd(this,o,t);case"latin1":case"binary":return ld(this,o,t);case"base64":return pd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ud(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Ee(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ee(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ee(this,t,t+3),Ee(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ee(this,t,t+7),Ee(this,t+1,t+6),Ee(this,t+2,t+5),Ee(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?zr(this,0,o):td.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=Xe.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Wr&&(d.prototype[Wr]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,l=s-t,_=Math.min(m,l),g=this.slice(c,p),x=o.slice(t,s),b=0;b<_;++b)if(g[b]!==x[b]){m=g[b],l=x[b];break}return m<l?-1:l<m?1:0};function jr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,it(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:Gr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Gr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Gr(e,o,t,s,c){var p=1,m=e.length,l=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,l/=2,t/=2}function _(D,J){return p===1?D[J]:D.readUInt16BE(J*p)}var g;if(c){var x=-1;for(g=t;g<m;g++)if(_(e,g)===_(o,x===-1?0:g-x)){if(x===-1&&(x=g),g-x+1===l)return x*p}else x!==-1&&(g-=g-x),x=-1}else for(t+l>m&&(t=m-l),g=t;g>=0;g--){for(var b=!0,k=0;k<l;k++)if(_(e,g+k)!==_(o,k)){b=!1;break}if(b)return g}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return jr(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return jr(this,o,t,s,!1)};function rd(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var l=parseInt(o.substr(m*2,2),16);if(it(l))return m;e[t+m]=l}return m}function ad(e,o,t,s){return Ko(tt(o,e.length-t),e,t,s)}function id(e,o,t,s){return Ko(hd(o),e,t,s)}function sd(e,o,t,s){return Ko(Jr(o),e,t,s)}function cd(e,o,t,s){return Ko(Td(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return rd(this,o,t,s);case"utf8":case"utf-8":return ad(this,o,t,s);case"ascii":case"latin1":case"binary":return id(this,o,t,s);case"base64":return sd(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return cd(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function pd(e,o,t){return o===0&&t===e.length?et.fromByteArray(e):et.fromByteArray(e.slice(o,t))}function zr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,l=p>239?4:p>223?3:p>191?2:1;if(c+l<=t){var _,g,x,b;switch(l){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(b=(p&31)<<6|_&63,b>127&&(m=b));break;case 3:_=e[c+1],g=e[c+2],(_&192)===128&&(g&192)===128&&(b=(p&15)<<12|(_&63)<<6|g&63,b>2047&&(b<55296||b>57343)&&(m=b));break;case 4:_=e[c+1],g=e[c+2],x=e[c+3],(_&192)===128&&(g&192)===128&&(x&192)===128&&(b=(p&15)<<18|(_&63)<<12|(g&63)<<6|x&63,b>65535&&b<1114112&&(m=b))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=l}return md(s)}var Hr=4096;function md(e){var o=e.length;if(o<=Hr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Hr));return t}function dd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function ld(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function _d(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=xd[e[p]];return c}function ud(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||B(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||B(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||B(o,4,this.length),Ke.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||B(o,4,this.length),Ke.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||B(o,8,this.length),Ke.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||B(o,8,this.length),Ke.read(this,o,!1,52,8)};function q(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=1,l=0;for(this[t]=o&255;++l<s&&(m*=256);)this[t+l]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=s-1,l=1;for(this[t+m]=o&255;--m>=0&&(l*=256);)this[t+m]=o/l&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=0,l=1,_=0;for(this[t]=o&255;++m<s&&(l*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=s-1,l=1,_=0;for(this[t+m]=o&255;--m>=0&&(l*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Kr(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Xr(e,o,t,s,c){return o=+o,t=t>>>0,c||Kr(e,o,t,4,34028234663852886e22,-34028234663852886e22),Ke.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return Xr(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return Xr(this,o,t,!1,s)};function Yr(e,o,t,s,c){return o=+o,t=t>>>0,c||Kr(e,o,t,8,17976931348623157e292,-17976931348623157e292),Ke.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return Yr(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return Yr(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var l=d.isBuffer(o)?o:d.from(o,c),_=l.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=l[m%_]}return this};var gd=/[^+/0-9A-Za-z-_]/g;function fd(e){if(e=e.split("=")[0],e=e.trim().replace(gd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function tt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function hd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Td(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Jr(e){return et.toByteArray(fd(e))}function Ko(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function it(e){return e!==e}var xd=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var ta=S((fx,na)=>{n();var R=na.exports={},se,ce;function st(){throw new Error("setTimeout has not been defined")}function ct(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=st}catch(e){se=st}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=ct}catch(e){ce=ct}})();function Qr(e){if(se===setTimeout)return setTimeout(e,0);if((se===st||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function yd(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===ct||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var ge=[],Ye=!1,Ne,Xo=-1;function Sd(){!Ye||!Ne||(Ye=!1,Ne.length?ge=Ne.concat(ge):Xo=-1,ge.length&&ea())}function ea(){if(!Ye){var e=Qr(Sd);Ye=!0;for(var o=ge.length;o;){for(Ne=ge,ge=[];++Xo<o;)Ne&&Ne[Xo].run();Xo=-1,o=ge.length}Ne=null,Ye=!1,yd(e)}}R.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new oa(e,o)),ge.length===1&&!Ye&&Qr(ea)};function oa(e,o){this.fun=e,this.array=o}oa.prototype.run=function(){this.fun.apply(null,this.array)};R.title="browser";R.browser=!0;R.env={};R.argv=[];R.version="";R.versions={};function fe(){}R.on=fe;R.addListener=fe;R.once=fe;R.off=fe;R.removeListener=fe;R.removeAllListeners=fe;R.emit=fe;R.prependListener=fe;R.prependOnceListener=fe;R.listeners=function(e){return[]};R.binding=function(e){throw new Error("process.binding is not supported")};R.cwd=function(){return"/"};R.chdir=function(e){throw new Error("process.chdir is not supported")};R.umask=function(){return 0}});var r,i,bd,a,n=h(()=>{r=T(Zr()),i=T(ta()),bd=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=bd});var ra=h(()=>{"use strict";n()});var pe=h(()=>{"use strict";n()});var aa=h(()=>{"use strict";n()});var pt,ia=h(()=>{"use strict";n();pt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(pt||{})});var sa=h(()=>{"use strict";n()});var mt=h(()=>{"use strict";n()});var ca=h(()=>{"use strict";n()});var dt=h(()=>{"use strict";n()});var pa=h(()=>{"use strict";n()});var ma=h(()=>{"use strict";n()});var De,Je,ve=h(()=>{"use strict";n();De=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Je=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Q,da,Lx,la,Px,P=h(()=>{"use strict";n();ve();Q=(l=>(l.pending="pending",l.fail="fail",l.invalid="invalid",l.success="success",l.executed="executed",l.notExecuted="not executed",l.rewardReverted="reward-reverted",l))(Q||{}),da=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(da||{}),Lx=u(u({},Je.WindowProviderRequestEnums),da),la=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(la||{}),Px=u(u({},Je.WindowProviderResponseEnums),la)});var _a=h(()=>{"use strict";n()});var ua=h(()=>{"use strict";n()});var j=h(()=>{"use strict";n()});var ga=h(()=>{"use strict";n()});var fa=h(()=>{"use strict";n()});var ha=h(()=>{"use strict";n()});var C=h(()=>{"use strict";n();dt();pa();ma();P();_a();ua();j();ga();fa();ha()});var Ze,Ta,jx,xa,zx,ya,Kx,Xx,wd,Qe=h(()=>{"use strict";n();C();Ze={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ta,egldLabel:jx}=Ze["devnet"],{chainId:xa,egldLabel:zx}=Ze["testnet"],{chainId:ya,egldLabel:Kx}=Ze["mainnet"],Xx={["devnet"]:Ta,["testnet"]:xa,["mainnet"]:ya},wd={[Ta]:"devnet",[xa]:"testnet",[ya]:"mainnet"}});var Yo=h(()=>{"use strict";n()});var me,Sa=h(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-provider")});var Re,yo=h(()=>{"use strict";n();Re=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ba,wa,lt,oy,ny,_t=h(()=>{"use strict";n();yo();lt=String((wa=(ba=Re.safeWindow)==null?void 0:ba.navigator)==null?void 0:wa.userAgent),oy=/^((?!chrome|android).)*safari/i.test(lt),ny=/firefox/i.test(lt)&&/windows/i.test(lt)});var Jo,Zo,va,Qo,Ia,eo,Aa,v=h(()=>{"use strict";n();ra();pe();aa();ia();sa();mt();ca();Qe();Yo();Sa();_t();Jo=5e4,Zo=1e9,va=1,Qo="logout",Ia="login",eo="0",Aa="..."});var he,Me=h(()=>{"use strict";n();he=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var ut={};V(ut,{css:()=>La,default:()=>vd});var La,vd,gt=h(()=>{"use strict";n();La=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(La));vd={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var bo,en=h(()=>{"use strict";n();bo=()=>Date.now()/1e3});var Ea=h(()=>{"use strict";n()});var Na=h(()=>{"use strict";n()});var ht=h(()=>{"use strict";n();en();Ea();Na()});var Tt={};V(Tt,{clear:()=>Cd,getItem:()=>Ld,localStorageKeys:()=>Ie,removeItem:()=>Pd,setItem:()=>kd});var Ie,on,kd,Ld,Pd,Cd,oo=h(()=>{"use strict";n();ht();Ie={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},on=typeof localStorage!="undefined",kd=({key:e,data:o,expires:t})=>{!on||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ld=e=>{if(!on)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:bo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Pd=e=>{!on||localStorage.removeItem(String(e))},Cd=()=>{!on||localStorage.clear()}});var xt={};V(xt,{clear:()=>Oa,getItem:()=>Ra,removeItem:()=>Ma,setItem:()=>Da,storage:()=>Ed});var Da,Ra,Ma,Oa,Ed,Fa=h(()=>{"use strict";n();Da=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ra=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ma=e=>sessionStorage.removeItem(String(e)),Oa=()=>sessionStorage.clear(),Ed={setItem:Da,getItem:Ra,removeItem:Ma,clear:Oa}});var Oe,no=h(()=>{"use strict";n();oo();Fa();Oe={session:xt,local:Tt}});var yt,E,K,N=h(()=>{"use strict";n();yt=require("@reduxjs/toolkit");v();E=(0,yt.createAction)(Qo),K=(0,yt.createAction)(Ia,e=>({payload:e}))});var bt,Ba,Ua,nn,St,Wa,tn,Nd,wt,Gy,Dd,Rd,Hy,$y,Vy,Md,Od,rn,an=h(()=>{"use strict";n();bt=require("@multiversx/sdk-core"),Ba=require("@reduxjs/toolkit"),Ua=require("redux-persist");v();no();oo();N();nn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:eo},St={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":nn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Wa=(0,Ba.createSlice)({name:"accountInfoSlice",initialState:St,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new bt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:nn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(E,()=>(Oe.local.removeItem(Ie.loginExpiresAt),St)),e.addCase(K,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new bt.Address(s).hex()}),e.addCase(Ua.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:l}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:St.accounts,o.publicKey=l})}}),{setAccount:tn,setAddress:Nd,setAccountNonce:wt,setAccountShard:Gy,setLedgerAccount:Dd,updateLedgerAccount:Rd,setWalletConnectAccount:Hy,setIsAccountLoading:$y,setAccountLoadingError:Vy,setWebsocketEvent:Md,setWebsocketBatchEvent:Od}=Wa.actions,rn=Wa.reducer});function wo(){return new Date().setHours(new Date().getHours()+24)}function vo(e){Oe.local.setItem({key:Ie.loginExpiresAt,data:e,expires:e})}var vt=h(()=>{"use strict";n();no();oo()});var Ha,Ga,$a,eS,Fd,Bd,Va,oS,Ud,qa,nS,tS,rS,sn,cn=h(()=>{"use strict";n();Ha=require("@reduxjs/toolkit");vt();P();N();Ga={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},$a=(0,Ha.createSlice)({name:"loginInfoSlice",initialState:Ga,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(E,()=>Ga),e.addCase(K,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,vo(wo())})}}),{setLoginMethod:eS,setWalletConnectLogin:Fd,setLedgerLogin:Bd,setTokenLogin:Va,setTokenLoginSignature:oS,setWalletLogin:Ud,invalidateLoginSession:qa,setLogoutRoute:nS,setIsWalletConnectV2Initialized:tS,setWebviewLogin:rS}=$a.actions,sn=$a.reducer});var za,ja,Ka,cS,Wd,pS,Gd,pn,mn=h(()=>{"use strict";n();za=require("@reduxjs/toolkit");N();ja={},Ka=(0,za.createSlice)({name:"modalsSlice",initialState:ja,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(E,()=>ja)}}),{setTxSubmittedModal:cS,setNotificationModal:Wd,clearTxSubmittedModal:pS,clearNotificationModal:Gd}=Ka.actions,pn=Ka.reducer});var O,W=h(()=>{"use strict";n();Me();O=()=>{if(!he())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Xa=h(()=>{"use strict";n();W()});var Ya=h(()=>{"use strict";n();H()});var Ja=h(()=>{"use strict";n();yo()});var H=h(()=>{"use strict";n();Xa();Ya();W();Ja()});var Io=h(()=>{"use strict";n();H()});var Qa=h(()=>{"use strict";n();Io()});function ei(e){return e[Math.floor(Math.random()*e.length)]}var oi=h(()=>{"use strict";n()});var It=h(()=>{"use strict";n();mt()});var Te=h(()=>{"use strict";n();Qa();oi();It()});var ni,ti,ri,At,$d,ai,GS,HS,Vd,dn,ln=h(()=>{"use strict";n();ni=require("@reduxjs/toolkit"),ti=T(require("lodash.omit")),ri=require("redux-persist");Yo();N();Te();At={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},$d={network:At},ai=(0,ni.createSlice)({name:"appConfig",initialState:$d,reducers:{initializeNetworkConfig:(e,o)=>{let t=ei(o.payload.walletConnectV2RelayAddresses),s=(0,ti.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(E,o=>{o.network.customWalletAddress=void 0}),e.addCase(ri.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:GS,updateNetworkConfig:HS,setCustomWalletAddress:Vd}=ai.actions,dn=ai.reducer});var ii,kt,si,KS,XS,YS,_n,un=h(()=>{"use strict";n();ii=require("@reduxjs/toolkit");C();N();kt={isSigning:!1,signedSessions:{}},si=(0,ii.createSlice)({name:"signedMessageInfoSliceState",initialState:kt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>kt},extraReducers:e=>{e.addCase(E,()=>kt)}}),{setSignSession:KS,clearSignedMessageInfo:XS,setSignSessionState:YS}=si.actions,_n=si.reducer});var pi,mi,ci,di,qd,jd,tb,zd,gn,fn=h(()=>{"use strict";n();pi=require("@reduxjs/toolkit"),mi=require("redux-persist");C();en();N();ci={customToasts:[],transactionToasts:[]},di=(0,pi.createSlice)({name:"toastsSlice",initialState:ci,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:bo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(E,()=>ci),e.addCase(mi.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:qd,removeCustomToast:jd,addTransactionToast:tb,removeTransactionToast:zd}=di.actions,gn=di.reducer});var li,Pt,Ct,Et,Kd,Lt,_i,sb,Xd,Nt,hn,Tn=h(()=>{"use strict";n();li=require("@reduxjs/toolkit");N();Pt="Transaction failed",Ct="Transaction successful",Et="Processing transaction",Kd="Transaction submitted",Lt={},_i=(0,li.createSlice)({name:"transactionsInfo",initialState:Lt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Pt,successMessage:(s==null?void 0:s.successMessage)||Ct,processingMessage:(s==null?void 0:s.processingMessage)||Et,submittedMessage:(s==null?void 0:s.submittedMessage)||Kd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Lt},extraReducers:e=>{e.addCase(E,()=>Lt)}}),{clearTransactionsInfo:sb,setTransactionsDisplayInfo:Xd,clearTransactionsInfoForSessionId:Nt}=_i.actions,hn=_i.reducer});function to(e){return e!=null&&(al(e)||xn(e))}function ro(e){return e!=null&&(il(e)||ml(e))}function ao(e){return e!=null&&(sl(e)||dl(e))}function ui(e){return e!=null&&(cl(e)||ll(e))}function Dt(e){return e!=null&&pl(e)}function al(e){return e!=null&&Yd.includes(e)}function il(e){return e!=null&&Jd.includes(e)}function sl(e){return e!=null&&Zd.includes(e)}function cl(e){return e!=null&&Qd.includes(e)}function pl(e){return e!=null&&el.includes(e)}function xn(e){return e!=null&&ol.includes(e)}function ml(e){return e!=null&&nl.includes(e)}function dl(e){return e!=null&&tl.includes(e)}function ll(e){return e!=null&&rl.includes(e)}var Yd,Jd,Zd,Qd,el,ol,nl,tl,rl,Fe=h(()=>{"use strict";n();P();Yd=["sent"],Jd=["success"],Zd=["fail","cancelled","timedOut"],Qd=["invalid"],el=["timedOut"],ol=["pending"],nl=["success"],tl=["fail","invalid"],rl=["not executed"]});var gi,fi,Ao,_l,hi,Ti,xi,ul,yn,gl,fl,fb,hl,ko,Rt,hb,Sn,bn=h(()=>{"use strict";n();gi=require("@reduxjs/toolkit"),fi=require("redux-persist");P();Fe();N();Ao={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},_l={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},hi=(0,gi.createSlice)({name:"transactionsSlice",initialState:Ao,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:l}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},_l),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),l!=null?l:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=Ao.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,x,b,k,D,J,we,Vo;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:l}=o.payload,_=(x=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:x.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(oe=>oe.hash===p?w(u(u({},m!=null?m:{}),oe),{status:s,errorMessage:c,inTransit:l}):oe);let Kn=(k=(b=e.signedTransactions[t])==null?void 0:b.transactions)==null?void 0:k.every(oe=>ro(oe.status)),Xn=(J=(D=e.signedTransactions[t])==null?void 0:D.transactions)==null?void 0:J.some(oe=>ao(oe.status)),Yn=(Vo=(we=e.signedTransactions[t])==null?void 0:we.transactions)==null?void 0:Vo.every(oe=>ui(oe.status));Kn&&(e.signedTransactions[t].status="success"),Xn&&(e.signedTransactions[t].status="fail"),Yn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ao.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ao.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(E,()=>Ao),e.addCase(fi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((l,[_,g])=>{let x=new Date(_),b=new Date;return b.setHours(b.getHours()+5),b-x>0||(l[_]=g),l},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ti,updateSignedTransactions:xi,setTransactionsToSign:ul,clearAllTransactionsToSign:yn,clearAllSignedTransactions:gl,clearSignedTransaction:fl,clearTransactionToSign:fb,setSignTransactionsError:hl,setSignTransactionsCancelMessage:ko,moveTransactionsToSignedState:Rt,updateSignedTransactionsCustomTransactionInformation:hb}=hi.actions,Sn=hi.reducer});var yi,Mt,Si,Sb,bb,Tl,wb,wn,vn=h(()=>{"use strict";n();yi=require("@reduxjs/toolkit");N();Mt={},Si=(0,yi.createSlice)({name:"batchTransactionsSlice",initialState:Mt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Mt},extraReducers:e=>{e.addCase(E,()=>Mt)}}),{setBatchTransactions:Sb,updateBatchTransactions:bb,clearBatchTransactions:Tl,clearAllBatchTransactions:wb}=Si.actions,wn=Si.reducer});var wi,bi,vi,kb,Ii,Ot=h(()=>{"use strict";n();wi=require("@reduxjs/toolkit");N();bi={},vi=(0,wi.createSlice)({name:"dappConfigSlice",initialState:bi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(E,()=>bi)}}),{setDappConfig:kb}=vi.actions,Ii=vi.reducer});var L=h(()=>{"use strict";n();an();cn();mn();ln();un();fn();Tn();bn();vn();Ot()});var Ft=h(()=>{"use strict";n()});var Li,bl,wl,Be,kn=h(()=>{"use strict";n();Li=require("@reduxjs/toolkit");Ft();an();vn();Ot();cn();mn();ln();un();fn();Tn();bn();bl={["account"]:rn,["dappConfig"]:Ii,["loginInfo"]:sn,["modals"]:pn,["networkConfig"]:dn,["signedMessageInfo"]:_n,["toasts"]:gn,["transactionsInfo"]:hn,["transactions"]:Sn,["batchTransactions"]:wn},wl=(e={})=>(0,Li.combineReducers)(u(u({},bl),e)),Be=wl});var Ni={};V(Ni,{default:()=>Ul,sessionStorageReducers:()=>Bt});function xe(e,o=[]){return{key:e,version:1,storage:Ci.default,blacklist:o}}var z,Pi,Ci,vl,Lo,Il,Al,kl,Ll,Pl,Cl,El,Nl,Dl,Rl,Ei,Ml,Bt,Ol,Fl,Bl,Ul,Di=h(()=>{"use strict";n();z=require("redux-persist"),Pi=T(require("redux-persist/lib/storage")),Ci=T(require("redux-persist/lib/storage/session"));kn();L();an();vn();cn();mn();ln();un();fn();Tn();bn();Ft();vl={persistReducersStorageType:"localStorage"},Lo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Il=xe(Lo["account"]),Al=xe(Lo["loginInfo"]),kl=xe(Lo["modals"]),Ll=xe(Lo["networkConfig"]),Pl={2:e=>w(u({},e),{networkConfig:At})};Cl=xe("sdk-dapp-transactionsInfo"),El=xe("sdk-dapp-transactions",["transactionsToSign"]),Nl=xe("sdk-dapp-batchTransactions",["batchTransactions"]),Dl=xe("sdk-dapp-toasts"),Rl=xe("sdk-dapp-signedMessageInfo"),Ei={key:"sdk-dapp-store",version:2,storage:Pi.default,whitelist:Object.keys(Lo),migrate:(0,z.createMigrate)(Pl,{debug:!1})},Ml=w(u({},Ei),{whitelist:[]}),Bt={["toasts"]:(0,z.persistReducer)(Dl,gn),["transactions"]:(0,z.persistReducer)(El,Sn),["transactionsInfo"]:(0,z.persistReducer)(Cl,hn),["batchTransactions"]:(0,z.persistReducer)(Nl,wn),["signedMessageInfo"]:(0,z.persistReducer)(Rl,_n)},Ol=w(u({},Bt),{["account"]:(0,z.persistReducer)(Il,rn),["loginInfo"]:(0,z.persistReducer)(Al,sn),["modals"]:(0,z.persistReducer)(kl,pn),["networkConfig"]:(0,z.persistReducer)(Ll,dn)}),Fl=vl.persistReducersStorageType==="localStorage",Bl=Fl?(0,z.persistReducer)(Ei,Be(Bt)):(0,z.persistReducer)(Ml,Be(Ol)),Ul=Bl});var Ri={};V(Ri,{default:()=>Wl});var Wl,Mi=h(()=>{"use strict";n();kn();Wl=Be()});var Oi={};V(Oi,{default:()=>Hl});var ee,Gl,Hl,Fi=h(()=>{"use strict";n();ee=require("redux-persist"),Gl=[ee.FLUSH,ee.REHYDRATE,ee.PAUSE,ee.PERSIST,ee.PURGE,ee.REGISTER],Hl=Gl});var Wi={};V(Wi,{default:()=>Ui});function Ui(e){return(0,Bi.persistStore)(e)}var Bi,Gi=h(()=>{"use strict";n();Bi=require("redux-persist")});var nr={};V(nr,{css:()=>As,default:()=>wu});var As,wu,tr=h(()=>{"use strict";n();As=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(As));wu={copy:"dapp-core-component__copyButton-styles__copy"}});var ar={};V(ar,{css:()=>Ps,default:()=>Iu});var Ps,Iu,ir=h(()=>{"use strict";n();Ps=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ps));Iu={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var qs=S((p3,Vs)=>{n();var Vu=typeof a=="object"&&a&&a.Object===Object&&a;Vs.exports=Vu});var Ro=S((m3,js)=>{n();var qu=qs(),ju=typeof self=="object"&&self&&self.Object===Object&&self,zu=qu||ju||Function("return this")();js.exports=zu});var pr=S((d3,zs)=>{n();var Ku=Ro(),Xu=Ku.Symbol;zs.exports=Xu});var Js=S((l3,Ys)=>{n();var Ks=pr(),Xs=Object.prototype,Yu=Xs.hasOwnProperty,Ju=Xs.toString,Mo=Ks?Ks.toStringTag:void 0;function Zu(e){var o=Yu.call(e,Mo),t=e[Mo];try{e[Mo]=void 0;var s=!0}catch(p){}var c=Ju.call(e);return s&&(o?e[Mo]=t:delete e[Mo]),c}Ys.exports=Zu});var Qs=S((_3,Zs)=>{n();var Qu=Object.prototype,eg=Qu.toString;function og(e){return eg.call(e)}Zs.exports=og});var mr=S((u3,nc)=>{n();var ec=pr(),ng=Js(),tg=Qs(),rg="[object Null]",ag="[object Undefined]",oc=ec?ec.toStringTag:void 0;function ig(e){return e==null?e===void 0?ag:rg:oc&&oc in Object(e)?ng(e):tg(e)}nc.exports=ig});var rc=S((g3,tc)=>{n();var sg=Array.isArray;tc.exports=sg});var ic=S((f3,ac)=>{n();function cg(e){return e!=null&&typeof e=="object"}ac.exports=cg});var cc=S((h3,sc)=>{n();var pg=mr(),mg=rc(),dg=ic(),lg="[object String]";function _g(e){return typeof e=="string"||!mg(e)&&dg(e)&&pg(e)==lg}sc.exports=_g});var $n=S((fO,_c)=>{n();function Ng(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}_c.exports=Ng});var gc=S((hO,uc)=>{n();var Dg=mr(),Rg=$n(),Mg="[object AsyncFunction]",Og="[object Function]",Fg="[object GeneratorFunction]",Bg="[object Proxy]";function Ug(e){if(!Rg(e))return!1;var o=Dg(e);return o==Og||o==Fg||o==Mg||o==Bg}uc.exports=Ug});var hc=S((TO,fc)=>{n();var Wg=Ro(),Gg=Wg["__core-js_shared__"];fc.exports=Gg});var yc=S((xO,xc)=>{n();var ur=hc(),Tc=function(){var e=/[^.]+$/.exec(ur&&ur.keys&&ur.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Hg(e){return!!Tc&&Tc in e}xc.exports=Hg});var bc=S((yO,Sc)=>{n();var $g=Function.prototype,Vg=$g.toString;function qg(e){if(e!=null){try{return Vg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Sc.exports=qg});var vc=S((SO,wc)=>{n();var jg=gc(),zg=yc(),Kg=$n(),Xg=bc(),Yg=/[\\^$.*+?()[\]{}|]/g,Jg=/^\[object .+?Constructor\]$/,Zg=Function.prototype,Qg=Object.prototype,ef=Zg.toString,of=Qg.hasOwnProperty,nf=RegExp("^"+ef.call(of).replace(Yg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function tf(e){if(!Kg(e)||zg(e))return!1;var o=jg(e)?nf:Jg;return o.test(Xg(e))}wc.exports=tf});var Ac=S((bO,Ic)=>{n();function rf(e,o){return e==null?void 0:e[o]}Ic.exports=rf});var Vn=S((wO,kc)=>{n();var af=vc(),sf=Ac();function cf(e,o){var t=sf(e,o);return af(t)?t:void 0}kc.exports=cf});var Oo=S((vO,Lc)=>{n();var pf=Vn(),mf=pf(Object,"create");Lc.exports=mf});var Ec=S((IO,Cc)=>{n();var Pc=Oo();function df(){this.__data__=Pc?Pc(null):{},this.size=0}Cc.exports=df});var Dc=S((AO,Nc)=>{n();function lf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Nc.exports=lf});var Mc=S((kO,Rc)=>{n();var _f=Oo(),uf="__lodash_hash_undefined__",gf=Object.prototype,ff=gf.hasOwnProperty;function hf(e){var o=this.__data__;if(_f){var t=o[e];return t===uf?void 0:t}return ff.call(o,e)?o[e]:void 0}Rc.exports=hf});var Fc=S((LO,Oc)=>{n();var Tf=Oo(),xf=Object.prototype,yf=xf.hasOwnProperty;function Sf(e){var o=this.__data__;return Tf?o[e]!==void 0:yf.call(o,e)}Oc.exports=Sf});var Uc=S((PO,Bc)=>{n();var bf=Oo(),wf="__lodash_hash_undefined__";function vf(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=bf&&o===void 0?wf:o,this}Bc.exports=vf});var Gc=S((CO,Wc)=>{n();var If=Ec(),Af=Dc(),kf=Mc(),Lf=Fc(),Pf=Uc();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}lo.prototype.clear=If;lo.prototype.delete=Af;lo.prototype.get=kf;lo.prototype.has=Lf;lo.prototype.set=Pf;Wc.exports=lo});var $c=S((EO,Hc)=>{n();function Cf(){this.__data__=[],this.size=0}Hc.exports=Cf});var qc=S((NO,Vc)=>{n();function Ef(e,o){return e===o||e!==e&&o!==o}Vc.exports=Ef});var Fo=S((DO,jc)=>{n();var Nf=qc();function Df(e,o){for(var t=e.length;t--;)if(Nf(e[t][0],o))return t;return-1}jc.exports=Df});var Kc=S((RO,zc)=>{n();var Rf=Fo(),Mf=Array.prototype,Of=Mf.splice;function Ff(e){var o=this.__data__,t=Rf(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():Of.call(o,t,1),--this.size,!0}zc.exports=Ff});var Yc=S((MO,Xc)=>{n();var Bf=Fo();function Uf(e){var o=this.__data__,t=Bf(o,e);return t<0?void 0:o[t][1]}Xc.exports=Uf});var Zc=S((OO,Jc)=>{n();var Wf=Fo();function Gf(e){return Wf(this.__data__,e)>-1}Jc.exports=Gf});var ep=S((FO,Qc)=>{n();var Hf=Fo();function $f(e,o){var t=this.__data__,s=Hf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Qc.exports=$f});var np=S((BO,op)=>{n();var Vf=$c(),qf=Kc(),jf=Yc(),zf=Zc(),Kf=ep();function _o(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}_o.prototype.clear=Vf;_o.prototype.delete=qf;_o.prototype.get=jf;_o.prototype.has=zf;_o.prototype.set=Kf;op.exports=_o});var rp=S((UO,tp)=>{n();var Xf=Vn(),Yf=Ro(),Jf=Xf(Yf,"Map");tp.exports=Jf});var sp=S((WO,ip)=>{n();var ap=Gc(),Zf=np(),Qf=rp();function eh(){this.size=0,this.__data__={hash:new ap,map:new(Qf||Zf),string:new ap}}ip.exports=eh});var pp=S((GO,cp)=>{n();function oh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}cp.exports=oh});var Bo=S((HO,mp)=>{n();var nh=pp();function th(e,o){var t=e.__data__;return nh(o)?t[typeof o=="string"?"string":"hash"]:t.map}mp.exports=th});var lp=S(($O,dp)=>{n();var rh=Bo();function ah(e){var o=rh(this,e).delete(e);return this.size-=o?1:0,o}dp.exports=ah});var up=S((VO,_p)=>{n();var ih=Bo();function sh(e){return ih(this,e).get(e)}_p.exports=sh});var fp=S((qO,gp)=>{n();var ch=Bo();function ph(e){return ch(this,e).has(e)}gp.exports=ph});var Tp=S((jO,hp)=>{n();var mh=Bo();function dh(e,o){var t=mh(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}hp.exports=dh});var yp=S((zO,xp)=>{n();var lh=sp(),_h=lp(),uh=up(),gh=fp(),fh=Tp();function uo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}uo.prototype.clear=lh;uo.prototype.delete=_h;uo.prototype.get=uh;uo.prototype.has=gh;uo.prototype.set=fh;xp.exports=uo});var bp=S((KO,Sp)=>{n();var hh="__lodash_hash_undefined__";function Th(e){return this.__data__.set(e,hh),this}Sp.exports=Th});var vp=S((XO,wp)=>{n();function xh(e){return this.__data__.has(e)}wp.exports=xh});var Ap=S((YO,Ip)=>{n();var yh=yp(),Sh=bp(),bh=vp();function qn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new yh;++o<t;)this.add(e[o])}qn.prototype.add=qn.prototype.push=Sh;qn.prototype.has=bh;Ip.exports=qn});var Lp=S((JO,kp)=>{n();function wh(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}kp.exports=wh});var Cp=S((ZO,Pp)=>{n();function vh(e){return e!==e}Pp.exports=vh});var Np=S((QO,Ep)=>{n();function Ih(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Ep.exports=Ih});var Rp=S((e5,Dp)=>{n();var Ah=Lp(),kh=Cp(),Lh=Np();function Ph(e,o,t){return o===o?Lh(e,o,t):Ah(e,kh,t)}Dp.exports=Ph});var Op=S((o5,Mp)=>{n();var Ch=Rp();function Eh(e,o){var t=e==null?0:e.length;return!!t&&Ch(e,o,0)>-1}Mp.exports=Eh});var Bp=S((n5,Fp)=>{n();function Nh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}Fp.exports=Nh});var Wp=S((t5,Up)=>{n();function Dh(e,o){return e.has(o)}Up.exports=Dh});var Hp=S((r5,Gp)=>{n();var Rh=Vn(),Mh=Ro(),Oh=Rh(Mh,"Set");Gp.exports=Oh});var Vp=S((a5,$p)=>{n();function Fh(){}$p.exports=Fh});var gr=S((i5,qp)=>{n();function Bh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}qp.exports=Bh});var zp=S((s5,jp)=>{n();var fr=Hp(),Uh=Vp(),Wh=gr(),Gh=1/0,Hh=fr&&1/Wh(new fr([,-0]))[1]==Gh?function(e){return new fr(e)}:Uh;jp.exports=Hh});var Xp=S((c5,Kp)=>{n();var $h=Ap(),Vh=Op(),qh=Bp(),jh=Wp(),zh=zp(),Kh=gr(),Xh=200;function Yh(e,o,t){var s=-1,c=Vh,p=e.length,m=!0,l=[],_=l;if(t)m=!1,c=qh;else if(p>=Xh){var g=o?null:zh(e);if(g)return Kh(g);m=!1,c=jh,_=new $h}else _=o?[]:l;e:for(;++s<p;){var x=e[s],b=o?o(x):x;if(x=t||x!==0?x:0,m&&b===b){for(var k=_.length;k--;)if(_[k]===b)continue e;o&&_.push(b),l.push(x)}else c(_,b,t)||(_!==l&&_.push(b),l.push(x))}return l}Kp.exports=Yh});var Jp=S((p5,Yp)=>{n();var Jh=Xp();function Zh(e){return e&&e.length?Jh(e):[]}Yp.exports=Zh});var Se={};V(Se,{css:()=>cm,default:()=>RT});var cm,RT,be=h(()=>{"use strict";n();cm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cm));RT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Ir={};V(Ir,{css:()=>ym,default:()=>ex});var ym,ex,Ar=h(()=>{"use strict";n();ym=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ym));ex={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Ho={};V(Ho,{css:()=>wm,default:()=>nx});var wm,nx,$o=h(()=>{"use strict";n();wm=`.dapp-core-component__transactionDetails-styles__title {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wm));nx={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var Cr={};V(Cr,{css:()=>Cm,default:()=>cx});var Cm,cx,Er=h(()=>{"use strict";n();Cm=`.dapp-core-component__transactionToast-styles__content {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cm));cx={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var dx={};V(dx,{TransactionToastContent:()=>mx});module.exports=G(dx);n();var re=T(require("react")),Em=require("@fortawesome/react-fontawesome"),Nr=T(require("classnames"));v();n();var Ca=T(require("react"));n();var So=T(require("react"));n();Me();var ka=()=>!he();var Id=()=>f(void 0,null,function*(){return yield Promise.resolve().then(()=>(gt(),ut))}),Ad=()=>(gt(),G(ut)).default,ft=ka();function Pa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=So.default.useState(ft?void 0:Ad()),[p,m]=So.default.useState(ft||t==null?void 0:t()),l=()=>f(this,null,function*(){(e?e():Id()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,So.useEffect)(()=>{ft&&l()},[]),{globalStyles:s,styles:p}}function M(e,o){return t=>{let{globalStyles:s,styles:c}=Pa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Ca.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();var Pe=T(require("react"));n();n();var zi=require("react"),io=require("react-redux");n();var Ut=require("@reduxjs/toolkit"),qi=require("react-redux/lib/utils/Subscription");L();n();var Ai=T(require("lodash.throttle"));v();L();vt();no();oo();var xl=[Qo],In=!1,yl=(0,Ai.default)(()=>{vo(wo())},5e3),ki=e=>o=>t=>{if(xl.includes(t.type))return o(t);let s=e.getState(),c=Oe.local.getItem(Ie.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return vo(wo());let m=Date.now();return c-m<0&&!In?setTimeout(()=>{In=!0,e.dispatch(qa())},1e3):(In&&(In=!1),yl()),o(t)};n();n();function An(){return typeof sessionStorage!="undefined"}var Hi=An()?(Di(),G(Ni)).default:(Mi(),G(Ri)).default,$i=An()?(Fi(),G(Oi)).default:[],Vi=An()?(Gi(),G(Wi)).default:e=>e;kn();var I=(0,Ut.configureStore)({reducer:Hi,middleware:e=>e({serializableCheck:{ignoredActions:[...$i,wt.type,tn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(ki)}),ji=(0,qi.createSubscription)(I),I0=Vi(I),A0=(0,Ut.configureStore)({reducer:Be});var $l={store:I,subscription:ji},Wt=(0,zi.createContext)($l),C0=(0,io.createStoreHook)(Wt),$=(0,io.createDispatchHook)(Wt),A=(0,io.createSelectorHook)(Wt);n();n();L();n();var Ki=T(require("lodash.isequal")),Ln=require("reselect"),y=(0,Ln.createSelectorCreator)(Ln.defaultMemoize,Ki.default);var de=e=>e.account,Ue=y(de,e=>e.address),We=y(de,Ue,(e,o)=>o in e.accounts?e.accounts[o]:nn),Vl=y(de,We,(e,o)=>{let c=e,{accounts:t}=c,s=_e(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),M0=y(We,e=>e.balance),ql=y(We,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),O0=y(de,e=>e.shard),jl=y(de,e=>e.ledgerAccount),F0=y(de,e=>e.walletConnectAccount),B0=y(de,e=>e.isAccountLoading),U0=y(de,e=>e.accountLoadingError),zl=y(de,e=>e.websocketEvent),Kl=y(de,e=>e.websocketBatchEvent);n();var Xi=e=>e.dappConfig,H0=y(Xi,e=>e.shouldUseWebViewProvider);n();var X=e=>e.loginInfo,Xl=y(X,e=>e.loginMethod),Pn=y(X,Ue,(e,o)=>Boolean(o)),j0=y(X,e=>e.walletConnectLogin),Yl=y(X,e=>e.ledgerLogin),Jl=y(X,e=>e.walletLogin),z0=y(X,e=>e.isLoginSessionInvalid),Gt=y(X,e=>e.tokenLogin),Yi=y(X,e=>e.logoutRoute),Zl=y(X,e=>e.isWalletConnectV2Initialized);n();var Ji=e=>e.modals,Y0=y(Ji,e=>e.txSubmittedModal),Ql=y(Ji,e=>e.notificationModal);n();var ne=e=>e.networkConfig,Cn=y(ne,e=>e.network.chainId),e_=y(ne,e=>e.network.roundDuration),Q0=y(ne,e=>e.network.walletConnectBridgeAddress),o_=y(ne,e=>e.network.walletConnectV2RelayAddress),n_=y(ne,e=>e.network.walletConnectV2ProjectId),t_=y(ne,e=>e.network.walletConnectV2Options),r_=y(ne,e=>e.network.walletConnectDeepLink),Y=y(ne,e=>e.network),Zi=y(Y,e=>e.apiAddress),Qi=y(Y,e=>e.explorerAddress),es=y(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),a_=y(Y,e=>e.xAliasAddress),os=y(Y,e=>e.egldLabel);n();var En=e=>e.signedMessageInfo,nw=y(En,e=>e.isSigning),tw=y(En,e=>e.errorMessage),rw=y(En,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),aw=y(En,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var ns=e=>e.toasts,i_=y(ns,e=>e.customToasts),ts=y(ns,e=>e.transactionToasts);n();L();var rs={errorMessage:Pt,successMessage:Ct,processingMessage:Et},as=e=>e.transactionsInfo,s_=y(as,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||rs);n();n();var le=require("@multiversx/sdk-core");v();n();var $t=require("@multiversx/sdk-core/out");n();n();function Ht(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var is=e=>{let o=e!=null?e:"";return Ht(o)?$t.TransactionPayload.fromEncoded(o):new $t.TransactionPayload(o)};n();v();var Po=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(pt).some(t=>e.startsWith(t)):!1;function Nn(e){var s,c,p;let o=u({},e);Po({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:is(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Jo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Zo,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:va)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();v();n();n();n();var d_=require("@multiversx/sdk-core/out");n();v();n();var ss=require("@multiversx/sdk-core");C();n();var l_=require("@multiversx/sdk-core");n();n();n();var __=require("@multiversx/sdk-core"),u_=T(require("bignumber.js"));P();n();n();n();var qt="blocks";var Ge="transactions";n();n();n();n();j();n();var ms=!1;function x_(e){ms||(console.error(e),ms=!0)}function zt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(x_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();j();n();n();n();var w_=T(require("bignumber.js"));v();n();var b_=require("@multiversx/sdk-core"),Kt=T(require("bignumber.js"));v();n();var y_=T(require("bignumber.js"));n();Kt.default.config({ROUNDING_MODE:Kt.default.ROUND_FLOOR});n();n();n();v();n();n();n();n();v();n();v();n();var v_=require("@multiversx/sdk-core");v();n();var Eo=require("@multiversx/sdk-core"),k_=T(require("bignumber.js"));v();n();n();var I_=T(require("bignumber.js"));v();n();v();n();n();n();n();n();n();v();n();v();n();v();n();j();var P_=["reDelegateRewards","claimRewards","unBond"],C_=["wrapEgld","unwrapEgld"],E_=["unStake"],N_=["unDelegate"];n();n();n();v();n();var O_=T(require("bignumber.js"));n();n();j();n();var B_=T(require("bignumber.js"));n();n();n();n();var G_=T(require("bignumber.js"));C();n();n();n();n();P();n();var q_=require("@multiversx/sdk-web-wallet-provider");v();n();var $_=T(require("qs"));n();H();Me();n();Me();var Uk={search:he()?window.location.search:"",removeParams:[]};n();n();n();W();n();j();n();n();W();n();var j_=T(require("linkifyjs"));n();v();n();var z_=T(require("bignumber.js"));n();C();n();n();P();n();P();n();n();n();j();n();j();n();var K_=T(require("bignumber.js"));v();j();n();j();n();var gs=require("react");C();n();n();j();n();n();var X_=require("@multiversx/sdk-core/out"),Y_=T(require("bignumber.js"));j();n();C();n();n();C();var C1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var fs=require("react");C();W();n();var Z_=require("react");j();var B1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Fe();n();var Rn=e=>e.transactions,so=y(Rn,e=>e.signedTransactions),Q_=y(Rn,e=>e.signTransactionsError),hs=y(Rn,e=>e.signTransactionsCancelMessage),Mn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),Ts=y(so,Mn(to)),xs=y(so,Mn(ro)),ys=y(so,Mn(ao)),eu=y(so,Mn(Dt)),Ss=y(Rn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Nn(t)))||[]})}),ou=y(so,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var He=()=>A(We);C();Fe();n();n();var ze=T(require("react")),To=require("@fortawesome/free-solid-svg-icons"),vm=require("@fortawesome/react-fontawesome"),Lr=T(require("classnames"));n();n();n();var nu=T(require("axios"));n();var ru=T(require("axios"));Qe();n();v();n();var au=T(require("axios"));n();var su=T(require("axios"));n();n();var cu=T(require("axios"));n();var pu=T(require("axios"));n();n();n();n();n();var ws=require("@lifeomic/axios-fetch"),Zt=T(require("axios")),Qt=(0,ws.buildAxiosFetch)(Zt.default),er=(e,o)=>f(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function mu(e,o,t){return f(this,null,function*(){try{let s=yield Qt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return er(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function du(e,o){return f(this,null,function*(){try{let t=yield Qt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return er(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function lu(e,o,t){return f(this,null,function*(){try{let s=yield Qt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return er(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var co=Zt.default.create();co.get=du;co.post=mu;co.patch=lu;n();n();var _u=T(require("axios"));n();var uu=T(require("swr"));n();n();n();n();n();Qe();n();var hu=T(require("axios"));n();var xu=T(require("axios"));n();Qe();n();Qe();n();n();n();n();var Su=T(require("axios"));n();v();n();n();var po=T(require("react")),Fn=require("@fortawesome/free-solid-svg-icons"),rr=require("@fortawesome/react-fontawesome"),ks=T(require("classnames"));n();Me();function bu(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(s){console.error("Fallback: Oops, unable to copy",s)}return document==null||document.body.removeChild(t),o}function Is(e){return f(this,null,function*(){if(!he())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(s){return console.error("Async: Could not copy text: ",s),!1}):o=bu(e),o})}var vu=({text:e,className:o="dapp-copy-button",copyIcon:t=Fn.faCopy,successIcon:s=Fn.faCheck,styles:c})=>{let[p,m]=(0,po.useState)({default:!0,success:!1});return po.default.createElement("a",{href:"/#",onClick:_=>f(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let g=e&&e.trim();m({default:!1,success:yield Is(g)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,ks.default)(c==null?void 0:c.copy,o)},p.default||!p.success?po.default.createElement(rr.FontAwesomeIcon,{icon:t}):po.default.createElement(rr.FontAwesomeIcon,{icon:s}))},Ls=M(vu,{ssrStyles:()=>Promise.resolve().then(()=>(tr(),nr)),clientStyles:()=>(tr(),G(nr)).default});n();n();var sr=T(require("react")),Cs=require("@fortawesome/free-solid-svg-icons"),Es=require("@fortawesome/react-fontawesome"),Ns=T(require("classnames"));n();var Bn=()=>A(ne);var Au=_=>{var g=_,{page:e,text:o,className:t="dapp-explorer-link",children:s,globalStyles:c,customExplorerIcon:p,styles:m}=g,l=_e(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:x}}=Bn(),b=o!=null?o:sr.default.createElement(Es.FontAwesomeIcon,{icon:p!=null?p:Cs.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),k=zt({explorerAddress:String(x),to:e});return sr.default.createElement("a",u({href:k,target:"_blank",className:(0,Ns.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},l),s!=null?s:b)},Ds=M(Au,{ssrStyles:()=>Promise.resolve().then(()=>(ir(),ar)),clientStyles:()=>(ir(),G(ar)).default});n();n();var F=T(require("react")),Sm=T(require("classnames"));v();n();n();var Rs=require("react");n();L();n();n();n();n();n();n();n();n();var Lu=require("@multiversx/sdk-extension-provider"),Pu=require("@multiversx/sdk-hw-provider"),Cu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Eu=require("@multiversx/sdk-opera-provider"),Nu=require("@multiversx/sdk-passkey-provider/out"),Du=require("@multiversx/sdk-web-wallet-provider");v();ve();n();var mo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Ms=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,Un=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Os=new Un;L();n();n();P();n();n();n();W();n();Fe();n();L();P();n();n();n();n();W();n();N();C();n();L();n();var Us=require("@multiversx/sdk-core");C();H();n();Fe();n();L();P();n();L();C();n();n();n();C();n();Yo();n();n();n();n();var Ou=T(require("swr"));n();n();n();n();var Ws=require("react");n();n();var Fu=require("react"),Bu=require("@multiversx/sdk-web-wallet-provider"),Uu=require("@multiversx/sdk-web-wallet-provider"),Wu=T(require("qs"));v();L();P();dt();W();var U2=O();n();var lc=require("react"),_r=require("@multiversx/sdk-core");v();It();n();n();n();n();n();n();n();n();n();n();var Hu=require("@multiversx/sdk-opera-provider");n();var $u=require("@multiversx/sdk-extension-provider");n();ve();n();n();n();n();var ug=T(cc());n();var Tg=require("@multiversx/sdk-native-auth-client");n();var dc=T(require("axios"));n();n();n();function pc(e){return f(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var mc=(e,o,t,s=0)=>f(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield pc(o.delay)),yield mc(e,o,t,s+1)):null}}),dr=(e,o={retries:5,delay:500})=>(...t)=>f(void 0,null,function*(){return yield mc(e,o,t)});var gg=4;var P3=dr((e,o,t)=>f(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield dc.default.get(`${e}/${qt}?from=${gg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();en();n();n();W();var U3={origin:O().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var yg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Sg=require("@multiversx/sdk-passkey-provider/out");v();W();n();n();n();var kg=require("react"),Lg=require("@multiversx/sdk-hw-provider");n();N();C();n();Io();no();oo();H();n();n();var om=require("react"),nm=require("@multiversx/sdk-core"),fT=require("@multiversx/sdk-extension-provider"),hT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),TT=require("@multiversx/sdk-passkey-provider/out"),xT=T(Jp());v();n();n();n();n();n();n();n();n();n();var Uo=T(require("react"));var b5=(0,Uo.createContext)({}),w5=I.getState();n();var Qp=T(require("react"));n();var hr=T(require("react")),Qh=T(require("axios"));n();n();ve();n();n();var aT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),iT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");N();n();N();L();C();n();n();L();n();H();n();L();C();n();n();var oT=require("@multiversx/sdk-core"),nT=T(require("bignumber.js"));v();n();var tT=T(require("bignumber.js"));v();L();P();H();W();n();var em=require("react"),mT=require("@multiversx/sdk-extension-provider"),dT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),lT=require("@multiversx/sdk-passkey-provider/out");ve();L();n();L();C();Io();W();n();pe();L();n();n();var ST=require("react");n();n();P();Fe();n();var jn=require("react"),tm=(e,o)=>{let[t,s]=(0,jn.useState)(e);return(0,jn.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var wT=require("react"),vT=require("@multiversx/sdk-extension-provider");pe();N();P();n();Te();H();H();n();n();ve();C();n();var bT=require("react"),rm=require("@multiversx/sdk-core");L();n();var IT=require("react"),AT=require("@multiversx/sdk-opera-provider");pe();N();P();Te();H();W();n();var kT=require("react");_t();pe();ve();N();L();P();Te();W();n();var NT=require("react");pe();L();n();n();ht();n();n();var LT=T(require("platform"));Me();n();n();n();n();n();n();n();yo();P();n();n();var PT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Io();no();n();n();n();L();n();n();var CT=T(require("axios"));H();n();n();var ET=T($n());yo();var am,im,sm,_G=(sm=(im=(am=Re.safeWindow)==null?void 0:am.location)==null?void 0:im.origin)==null?void 0:sm.includes("localhost");n();W();n();n();var GT=require("react");v();n();n();v();n();n();n();var DT=T(require("bignumber.js"));n();n();n();var Le=T(require("react")),um=require("react"),gm=require("react"),br=T(require("classnames")),fm=require("react-dom");v();n();var pm=T(require("react")),mm=T(require("classnames"));var MT=({className:e,children:o,styles:t})=>pm.default.createElement("div",{className:(0,mm.default)(t==null?void 0:t.dappModalBody,e)},o),Tr=M(MT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),G(Se)).default});n();var xr=T(require("react")),dm=T(require("classnames"));var OT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?xr.default.createElement("div",{className:(0,dm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:xr.default.createElement("div",null,s)):null,yr=M(OT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),G(Se)).default});n();var ho=T(require("react")),lm=require("@fortawesome/free-solid-svg-icons"),_m=require("@fortawesome/react-fontawesome"),Go=T(require("classnames"));var FT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:l,styles:_})=>e?t?ho.default.createElement("div",{className:(0,Go.default)(_==null?void 0:_.dappModalHeader,s)},t):ho.default.createElement("div",{className:(0,Go.default)(_==null?void 0:_.dappModalHeader,s)},ho.default.createElement("div",{className:(0,Go.default)(_==null?void 0:_.dappModalHeaderText,p)},o),ho.default.createElement("button",{onClick:m,className:(0,Go.default)(_==null?void 0:_.dappModalCloseButton,l==null?void 0:l.btn,l==null?void 0:l.btnLight,c)},ho.default.createElement(_m.FontAwesomeIcon,{size:"lg",icon:lm.faTimes}))):null,Sr=M(FT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),G(Se)).default});var BT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},UT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=BT,id:p="dapp-modal",onHide:m,parentElement:l,visible:_,styles:g})=>{let[x,b]=(0,um.useState)(!1);if((0,gm.useEffect)(()=>{b(!0)},[]),!_)return null;let{showHeader:k,showFooter:D,headerText:J,footerText:we,modalDialogClassName:Vo="dapp-modal-dialog",modalContentClassName:Kn="dapp-modal-dialog-content",modalHeaderClassName:Xn="dapp-modal-dialog-header",modalHeaderTextClassName:Yn="dapp-modal-dialog-header-text",modalCloseButtonClassName:oe="dapp-modal-dialog-close-button",modalBodyClassName:Nm="dapp-modal-dialog-content-body",modalFooterClassName:Dm="dapp-modal-dialog-footer",customModalHeader:Rm,customModalFooter:Mm}=c,Om=Fm=>{Fm.key==="Escape"&&s&&(m==null||m())};return Le.default.createElement(Le.default.Fragment,null,x&&(0,fm.createPortal)(Le.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,br.default)(Vo,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:Om},Le.default.createElement("div",{className:(0,br.default)(g==null?void 0:g.dappModalContent,Kn)},Le.default.createElement(Sr,{visible:k,headerText:J,customHeader:Rm,className:Xn,headerTextClassName:Yn,closeButtonClassName:oe,onHide:m}),Le.default.createElement(Tr,{className:Nm},o),Le.default.createElement(yr,{visible:D,customFooter:Mm,footerText:we,className:Dm}))),l!=null?l:document==null?void 0:document.body))},WT=M(UT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),G(Se)).default});n();n();var hm=require("react");n();n();var Tm=require("react"),$T=require("@multiversx/sdk-hw-provider");pe();N();L();P();Te();n();var HT=require("react");n();n();var wr=require("react");N();L();P();Te();W();n();var qT=require("react"),jT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();N();P();Te();H();H();n();var zT=require("react"),KT=require("@multiversx/sdk-passkey-provider/out");pe();N();P();Te();H();H();n();n();var xm=require("react");n();var JT=require("react");n();var vr=require("react"),YT=require("socket.io-client");L();n();n();n();var ZT=require("react");C();n();n();n();var QT=T(require("swr"));var ox=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,F.useState)(0),[l,_]=(0,F.useState)(!1),g=(0,F.useRef)(document==null?void 0:document.createElement("span")),x=(0,F.useRef)(document==null?void 0:document.createElement("span")),b=tm(p,300),k=()=>{if(g.current&&x.current){let we=x.current.offsetWidth-g.current.offsetWidth;_(we>1)}},D=()=>{m(p+1)};return(0,F.useEffect)(()=>(window==null||window.addEventListener("resize",D),()=>{window==null||window.removeEventListener("resize",D)})),(0,F.useEffect)(()=>{k()},[b]),F.default.createElement("span",{ref:g,className:(0,Sm.default)(c==null?void 0:c.trim,s,o,{overflow:l}),"data-testid":t},F.default.createElement("span",{ref:x,className:c==null?void 0:c.hiddenTextRef},e),l?F.default.createElement(F.default.Fragment,null,F.default.createElement("span",{className:c==null?void 0:c.left},F.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),F.default.createElement("span",{className:c==null?void 0:c.ellipsis},Aa),F.default.createElement("span",{className:c==null?void 0:c.right},F.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):F.default.createElement("span",null,e))},bm=M(ox,{ssrStyles:()=>Promise.resolve().then(()=>(Ar(),Ir)),clientStyles:()=>(Ar(),G(Ir)).default});var tx={icon:To.faCheck},kr={icon:To.faTimes},rx={icon:To.faCircleNotch},ax={pending:rx,success:tx,fail:kr,invalid:kr,timedOut:kr},ix=({className:e,hash:o,status:t,iconSrc:s,isTimedOut:c,globalStyles:p,styles:m})=>{var g;let l=t?ax[t]:null,_=(g=s==null?void 0:s.icon)!=null?g:l==null?void 0:l.icon;return ze.default.createElement("div",{className:(0,Lr.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&_!=null&&ze.default.createElement(vm.FontAwesomeIcon,{icon:_,className:(0,Lr.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":t==="pending"})}),ze.default.createElement("span",{className:m==null?void 0:m.trim},ze.default.createElement(bm,{text:o})),ze.default.createElement(Ls,{text:o}),ze.default.createElement(Ds,{page:`/${Ge}/${o}`,className:p==null?void 0:p.ml2}))},Im=M(ix,{ssrStyles:()=>Promise.resolve().then(()=>($o(),Ho)),clientStyles:()=>($o(),G(Ho)).default});var sx=({title:e,transactions:o,isTimedOut:t=!1,className:s="dapp-transaction-details",styles:c})=>{if(o==null)return null;let{address:p}=He(),m=(0,Pe.useMemo)(()=>{let _=o.filter(x=>!xn(Q[x==null?void 0:x.status])).length,g=o.length;return g===1&&_===1?xn(Q[o[0].status])?"Processing transaction":"Transaction processed":`${_} / ${g} transactions processed`},[o]),l=o.length===1&&o[0].sender!==p;return Pe.default.createElement(Pe.default.Fragment,null,e&&Pe.default.createElement("div",{className:c==null?void 0:c.title},e),!l&&Pe.default.createElement("div",{className:c==null?void 0:c.status},m),o.map(({hash:_,status:g})=>{let x={className:s,hash:_,status:Q[g],isTimedOut:t};return Pe.default.createElement(Im,w(u({},x),{key:_}))}))},Am=M(sx,{ssrStyles:()=>Promise.resolve().then(()=>($o(),Ho)),clientStyles:()=>($o(),G(Ho)).default});n();var Pr=T(require("react")),km=require("@fortawesome/free-solid-svg-icons"),Lm=require("@fortawesome/react-fontawesome");v();var Pm=({className:e="dapp-default-toast-delete-button",onClick:o})=>Pr.default.createElement("button",{type:"button",className:e,onClick:o,"data-testid":"deleteToastButton"},Pr.default.createElement(Lm.FontAwesomeIcon,{icon:km.faTimes,size:"xs"}));var px=({style:e,toastDataState:o,transactions:t,showCloseButton:s,onDeleteToast:c,toastTitle:p,isTimedOut:m,customElements:l={CustomCloseButton:Pm,TransactionToastStatusIcon:Em.FontAwesomeIcon,TransactionDetails:Am},globalStyles:_,styles:g})=>{let x=l==null?void 0:l.TransactionDetails,b=l==null?void 0:l.TransactionToastStatusIcon,k=l==null?void 0:l.CustomCloseButton;return re.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},re.default.createElement("div",{className:e.left},re.default.createElement("div",{className:(0,Nr.default)(e.icon,o.iconClassName)},b&&re.default.createElement(b,{size:"5x",icon:o.icon,className:e.svg}))),re.default.createElement("div",{className:e.right},re.default.createElement("div",{className:e.heading},re.default.createElement("h5",{className:(0,Nr.default)([_==null?void 0:_.h5,e.mb4]),"data-testid":"transactionToastTitle"},o.title),s&&k&&re.default.createElement(k,{className:g==null?void 0:g.close,onClick:c})),re.default.createElement("div",{className:e.footer},x&&re.default.createElement(x,{transactions:t,title:p,isTimedOut:m}))))},mx=M(px,{ssrStyles:()=>Promise.resolve().then(()=>(Er(),Cr)),clientStyles:()=>(Er(),G(Cr)).default});0&&(module.exports={TransactionToastContent});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TransactionToastContent.js.map
