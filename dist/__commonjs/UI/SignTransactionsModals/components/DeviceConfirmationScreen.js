"use strict";var td=Object.create;var Oo=Object.defineProperty,rd=Object.defineProperties,ad=Object.getOwnPropertyDescriptor,id=Object.getOwnPropertyDescriptors,sd=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,cd=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty,na=Object.prototype.propertyIsEnumerable;var oa=(e,o,t)=>o in e?Oo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))yt.call(o,t)&&oa(e,t,o[t]);if(fn)for(var t of fn(o))na.call(o,t)&&oa(e,t,o[t]);return e},w=(e,o)=>rd(e,id(o));var Le=(e,o)=>{var t={};for(var s in e)yt.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&fn)for(var s of fn(e))o.indexOf(s)<0&&na.call(e,s)&&(t[s]=e[s]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),re=(e,o)=>{for(var t in o)Oo(e,t,{get:o[t],enumerable:!0})},ta=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of sd(o))!yt.call(e,c)&&c!==t&&Oo(e,c,{get:()=>o[c],enumerable:!(s=ad(o,c))||s.enumerable});return e};var x=(e,o,t)=>(t=e!=null?td(cd(e)):{},ta(o||!e||!e.__esModule?Oo(t,"default",{value:e,enumerable:!0}):t,e)),J=e=>ta(Oo({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{l(t.next(_))}catch(f){c(f)}},m=_=>{try{l(t.throw(_))}catch(f){c(f)}},l=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);l((t=t.apply(e,o)).next())});var ia=S(Tn=>{"use strict";n();Tn.byteLength=md;Tn.toByteArray=ld;Tn.fromByteArray=gd;var ae=[],Z=[],pd=typeof Uint8Array!="undefined"?Uint8Array:Array,St="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Be=0,ra=St.length;Be<ra;++Be)ae[Be]=St[Be],Z[St.charCodeAt(Be)]=Be;var Be,ra;Z["-".charCodeAt(0)]=62;Z["_".charCodeAt(0)]=63;function aa(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function md(e){var o=aa(e),t=o[0],s=o[1];return(t+s)*3/4-s}function dd(e,o,t){return(o+t)*3/4-t}function ld(e){var o,t=aa(e),s=t[0],c=t[1],p=new pd(dd(e,s,c)),m=0,l=c>0?s-4:s,_;for(_=0;_<l;_+=4)o=Z[e.charCodeAt(_)]<<18|Z[e.charCodeAt(_+1)]<<12|Z[e.charCodeAt(_+2)]<<6|Z[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Z[e.charCodeAt(_)]<<2|Z[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=Z[e.charCodeAt(_)]<<10|Z[e.charCodeAt(_+1)]<<4|Z[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function _d(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function ud(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(_d(s));return c.join("")}function gd(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,l=t-s;m<l;m+=p)c.push(ud(e,m,m+p>l?l:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var sa=S(bt=>{n();bt.read=function(e,o,t,s,c){var p,m,l=c*8-s-1,_=(1<<l)-1,f=_>>1,h=-7,b=t?c-1:0,E=t?-1:1,L=e[o+b];for(b+=E,p=L&(1<<-h)-1,L>>=-h,h+=l;h>0;p=p*256+e[o+b],b+=E,h-=8);for(m=p&(1<<-h)-1,p>>=-h,h+=s;h>0;m=m*256+e[o+b],b+=E,h-=8);if(p===0)p=1-f;else{if(p===_)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-f}return(L?-1:1)*m*Math.pow(2,p-s)};bt.write=function(e,o,t,s,c,p){var m,l,_,f=p*8-c-1,h=(1<<f)-1,b=h>>1,E=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=s?0:p-1,G=s?1:-1,te=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(l=isNaN(o)?1:0,m=h):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+b>=1?o+=E/_:o+=E*Math.pow(2,1-b),o*_>=2&&(m++,_/=2),m+b>=h?(l=0,m=h):m+b>=1?(l=(o*_-1)*Math.pow(2,c),m=m+b):(l=o*Math.pow(2,b-1)*Math.pow(2,c),m=0));c>=8;e[t+L]=l&255,L+=G,l/=256,c-=8);for(m=m<<c|l,f+=c;f>0;e[t+L]=m&255,L+=G,m/=256,f-=8);e[t+L-G]|=te*128}});var ya=S(ro=>{"use strict";n();var wt=ia(),to=sa(),ca=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ro.Buffer=d;ro.SlowBuffer=Sd;ro.INSPECT_MAX_BYTES=50;var hn=2147483647;ro.kMaxLength=hn;d.TYPED_ARRAY_SUPPORT=fd();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function fd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function he(e){if(e>hn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return kt(e)}return da(e,o,t)}d.poolSize=8192;function da(e,o,t){if(typeof e=="string")return hd(e,o);if(ArrayBuffer.isView(e))return xd(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return It(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=yd(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return da(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function la(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Td(e,o,t){return la(e),e<=0?he(e):o!==void 0?typeof t=="string"?he(e).fill(o,t):he(e).fill(o):he(e)}d.alloc=function(e,o,t){return Td(e,o,t)};function kt(e){return la(e),he(e<0?0:Lt(e)|0)}d.allocUnsafe=function(e){return kt(e)};d.allocUnsafeSlow=function(e){return kt(e)};function hd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=_a(e,o)|0,s=he(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function vt(e){for(var o=e.length<0?0:Lt(e.length)|0,t=he(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function xd(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return It(o.buffer,o.byteOffset,o.byteLength)}return vt(e)}function It(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function yd(e){if(d.isBuffer(e)){var o=Lt(e.length)|0,t=he(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Et(e.length)?he(0):vt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return vt(e.data)}function Lt(e){if(e>=hn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+hn.toString(16)+" bytes");return e|0}function Sd(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function _a(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return At(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return xa(e).length;default:if(c)return s?-1:At(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=_a;function bd(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Nd(this,o,t);case"utf8":case"utf-8":return ga(this,o,t);case"ascii":return Pd(this,o,t);case"latin1":case"binary":return Cd(this,o,t);case"base64":return Ld(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Rd(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function We(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)We(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)We(this,t,t+3),We(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)We(this,t,t+7),We(this,t+1,t+6),We(this,t+2,t+5),We(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ga(this,0,o):bd.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=ro.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};ca&&(d.prototype[ca]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,l=s-t,_=Math.min(m,l),f=this.slice(c,p),h=o.slice(t,s),b=0;b<_;++b)if(f[b]!==h[b]){m=f[b],l=h[b];break}return m<l?-1:l<m?1:0};function ua(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Et(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:pa(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):pa(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function pa(e,o,t,s,c){var p=1,m=e.length,l=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,l/=2,t/=2}function _(L,G){return p===1?L[G]:L.readUInt16BE(G*p)}var f;if(c){var h=-1;for(f=t;f<m;f++)if(_(e,f)===_(o,h===-1?0:f-h)){if(h===-1&&(h=f),f-h+1===l)return h*p}else h!==-1&&(f-=f-h),h=-1}else for(t+l>m&&(t=m-l),f=t;f>=0;f--){for(var b=!0,E=0;E<l;E++)if(_(e,f+E)!==_(o,E)){b=!1;break}if(b)return f}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return ua(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return ua(this,o,t,s,!1)};function wd(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var l=parseInt(o.substr(m*2,2),16);if(Et(l))return m;e[t+m]=l}return m}function vd(e,o,t,s){return xn(At(o,e.length-t),e,t,s)}function Id(e,o,t,s){return xn(Od(o),e,t,s)}function Ad(e,o,t,s){return xn(xa(o),e,t,s)}function kd(e,o,t,s){return xn(Fd(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return wd(this,o,t,s);case"utf8":case"utf-8":return vd(this,o,t,s);case"ascii":case"latin1":case"binary":return Id(this,o,t,s);case"base64":return Ad(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return kd(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ld(e,o,t){return o===0&&t===e.length?wt.fromByteArray(e):wt.fromByteArray(e.slice(o,t))}function ga(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,l=p>239?4:p>223?3:p>191?2:1;if(c+l<=t){var _,f,h,b;switch(l){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(b=(p&31)<<6|_&63,b>127&&(m=b));break;case 3:_=e[c+1],f=e[c+2],(_&192)===128&&(f&192)===128&&(b=(p&15)<<12|(_&63)<<6|f&63,b>2047&&(b<55296||b>57343)&&(m=b));break;case 4:_=e[c+1],f=e[c+2],h=e[c+3],(_&192)===128&&(f&192)===128&&(h&192)===128&&(b=(p&15)<<18|(_&63)<<12|(f&63)<<6|h&63,b>65535&&b<1114112&&(m=b))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=l}return Ed(s)}var ma=4096;function Ed(e){var o=e.length;if(o<=ma)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=ma));return t}function Pd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Cd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Nd(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Ud[e[p]];return c}function Rd(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function O(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||O(o,4,this.length),to.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||O(o,4,this.length),to.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||O(o,8,this.length),to.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||O(o,8,this.length),to.read(this,o,!1,52,8)};function V(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;V(this,o,t,s,p,0)}var m=1,l=0;for(this[t]=o&255;++l<s&&(m*=256);)this[t+l]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;V(this,o,t,s,p,0)}var m=s-1,l=1;for(this[t+m]=o&255;--m>=0&&(l*=256);)this[t+m]=o/l&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);V(this,o,t,s,p-1,-p)}var m=0,l=1,_=0;for(this[t]=o&255;++m<s&&(l*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);V(this,o,t,s,p-1,-p)}var m=s-1,l=1,_=0;for(this[t+m]=o&255;--m>=0&&(l*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||V(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function fa(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ta(e,o,t,s,c){return o=+o,t=t>>>0,c||fa(e,o,t,4,34028234663852886e22,-34028234663852886e22),to.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return Ta(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return Ta(this,o,t,!1,s)};function ha(e,o,t,s,c){return o=+o,t=t>>>0,c||fa(e,o,t,8,17976931348623157e292,-17976931348623157e292),to.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return ha(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return ha(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var l=d.isBuffer(o)?o:d.from(o,c),_=l.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=l[m%_]}return this};var Dd=/[^+/0-9A-Za-z-_]/g;function Md(e){if(e=e.split("=")[0],e=e.trim().replace(Dd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function At(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Od(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Fd(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function xa(e){return wt.toByteArray(Md(e))}function xn(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Et(e){return e!==e}var Ud=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Ia=S((Qh,va)=>{n();var D=va.exports={},se,ce;function Pt(){throw new Error("setTimeout has not been defined")}function Ct(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=Pt}catch(e){se=Pt}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=Ct}catch(e){ce=Ct}})();function Sa(e){if(se===setTimeout)return setTimeout(e,0);if((se===Pt||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function Bd(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===Ct||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var xe=[],ao=!1,Ge,yn=-1;function Wd(){!ao||!Ge||(ao=!1,Ge.length?xe=Ge.concat(xe):yn=-1,xe.length&&ba())}function ba(){if(!ao){var e=Sa(Wd);ao=!0;for(var o=xe.length;o;){for(Ge=xe,xe=[];++yn<o;)Ge&&Ge[yn].run();yn=-1,o=xe.length}Ge=null,ao=!1,Bd(e)}}D.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];xe.push(new wa(e,o)),xe.length===1&&!ao&&Sa(ba)};function wa(e,o){this.fun=e,this.array=o}wa.prototype.run=function(){this.fun.apply(null,this.array)};D.title="browser";D.browser=!0;D.env={};D.argv=[];D.version="";D.versions={};function ye(){}D.on=ye;D.addListener=ye;D.once=ye;D.off=ye;D.removeListener=ye;D.removeAllListeners=ye;D.emit=ye;D.prependListener=ye;D.prependOnceListener=ye;D.listeners=function(e){return[]};D.binding=function(e){throw new Error("process.binding is not supported")};D.cwd=function(){return"/"};D.chdir=function(e){throw new Error("process.chdir is not supported")};D.umask=function(){return 0}});var r,i,Gd,a,n=T(()=>{r=x(ya()),i=x(Ia()),Gd=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Gd});var Aa=T(()=>{"use strict";n()});var Sn,ka,pe=T(()=>{"use strict";n();Sn="Transaction canceled",ka="Undefined transaction status"});var La=T(()=>{"use strict";n()});var Nt,Ea=T(()=>{"use strict";n();Nt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(Nt||{})});var Pa=T(()=>{"use strict";n()});var Rt=T(()=>{"use strict";n()});var Ca=T(()=>{"use strict";n()});var Dt,Mt=T(()=>{"use strict";n();Dt=(c=>(c.signature="signature",c.sessionId="sessionId",c.status="status",c.address="address",c))(Dt||{})});var Na=T(()=>{"use strict";n()});var Ra=T(()=>{"use strict";n()});var me,io,Ee=T(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),io=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Da,dx,Ma,lx,P=T(()=>{"use strict";n();Ee();Da=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Da||{}),dx=u(u({},io.WindowProviderRequestEnums),Da),Ma=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ma||{}),lx=u(u({},io.WindowProviderResponseEnums),Ma)});var Oa=T(()=>{"use strict";n()});var Fa=T(()=>{"use strict";n()});var j=T(()=>{"use strict";n()});var Ua=T(()=>{"use strict";n()});var Ba=T(()=>{"use strict";n()});var Wa=T(()=>{"use strict";n()});var M=T(()=>{"use strict";n();Mt();Na();Ra();P();Oa();Fa();j();Ua();Ba();Wa()});var so,Ga,Ex,Ha,Px,$a,Cx,Nx,Hd,co=T(()=>{"use strict";n();M();so={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ga,egldLabel:Ex}=so["devnet"],{chainId:Ha,egldLabel:Px}=so["testnet"],{chainId:$a,egldLabel:Cx}=so["mainnet"],Nx={["devnet"]:Ga,["testnet"]:Ha,["mainnet"]:$a},Hd={[Ga]:"devnet",[Ha]:"testnet",[$a]:"mainnet"}});var Va,bn=T(()=>{"use strict";n();Va="cancel-transaction-toast"});var de,ja=T(()=>{"use strict";n();de=require("@multiversx/sdk-web-wallet-provider")});var He,Fo=T(()=>{"use strict";n();He=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var qa,za,Ot,Ux,Bx,Ft=T(()=>{"use strict";n();Fo();Ot=String((za=(qa=He.safeWindow)==null?void 0:qa.navigator)==null?void 0:za.userAgent),Ux=/^((?!chrome|android).)*safari/i.test(Ot),Bx=/firefox/i.test(Ot)&&/windows/i.test(Ot)});var wn,vn,Ka,Xa,Pe,Ut,In,Ya,po,A=T(()=>{"use strict";n();Aa();pe();La();Ea();Pa();Rt();Ca();co();bn();ja();Ft();wn=5e4,vn=1e9,Ka=1,Xa="/dapp/init",Pe="signSession",Ut="sdk-dapp-version",In="logout",Ya="login",po="0"});var Uo,An=T(()=>{"use strict";n();Uo=()=>Date.now()/1e3});var Ja=T(()=>{"use strict";n()});var Za=T(()=>{"use strict";n()});var Bt=T(()=>{"use strict";n();An();Ja();Za()});var Wt={};re(Wt,{clear:()=>qd,getItem:()=>Vd,localStorageKeys:()=>Ce,removeItem:()=>jd,setItem:()=>$d});var Ce,kn,$d,Vd,jd,qd,mo=T(()=>{"use strict";n();Bt();Ce={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},kn=typeof localStorage!="undefined",$d=({key:e,data:o,expires:t})=>{!kn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Vd=e=>{if(!kn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Uo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},jd=e=>{!kn||localStorage.removeItem(String(e))},qd=()=>{!kn||localStorage.clear()}});var Gt={};re(Gt,{clear:()=>ni,getItem:()=>ei,removeItem:()=>oi,setItem:()=>Qa,storage:()=>zd});var Qa,ei,oi,ni,zd,ti=T(()=>{"use strict";n();Qa=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ei=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},oi=e=>sessionStorage.removeItem(String(e)),ni=()=>sessionStorage.clear(),zd={setItem:Qa,getItem:ei,removeItem:oi,clear:ni}});var $e,lo=T(()=>{"use strict";n();mo();ti();$e={session:Gt,local:Wt}});var Ht,C,q,R=T(()=>{"use strict";n();Ht=require("@reduxjs/toolkit");A();C=(0,Ht.createAction)(In),q=(0,Ht.createAction)(Ya,e=>({payload:e}))});var Vt,ri,ai,Ln,$t,ii,En,Kd,jt,fy,Xd,Yd,Ty,hy,xy,Jd,Zd,Pn,Cn=T(()=>{"use strict";n();Vt=require("@multiversx/sdk-core"),ri=require("@reduxjs/toolkit"),ai=require("redux-persist");A();lo();mo();R();Ln={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:po},$t={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Ln},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},ii=(0,ri.createSlice)({name:"accountInfoSlice",initialState:$t,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Vt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Ln},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(C,()=>($e.local.removeItem(Ce.loginExpiresAt),$t)),e.addCase(q,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new Vt.Address(s).hex()}),e.addCase(ai.REHYDRATE,(o,t)=>{var f;if(!((f=t.payload)!=null&&f.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:l}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:$t.accounts,o.publicKey=l})}}),{setAccount:En,setAddress:Kd,setAccountNonce:jt,setAccountShard:fy,setLedgerAccount:Xd,updateLedgerAccount:Yd,setWalletConnectAccount:Ty,setIsAccountLoading:hy,setAccountLoadingError:xy,setWebsocketEvent:Jd,setWebsocketBatchEvent:Zd}=ii.actions,Pn=ii.reducer});function Bo(){return new Date().setHours(new Date().getHours()+24)}function Wo(e){$e.local.setItem({key:Ce.loginExpiresAt,data:e,expires:e})}var qt=T(()=>{"use strict";n();lo();mo()});var ci,si,pi,Ey,Qd,el,zt,Py,ol,mi,Cy,Ny,Ry,Nn,Rn=T(()=>{"use strict";n();ci=require("@reduxjs/toolkit");qt();P();R();si={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},pi=(0,ci.createSlice)({name:"loginInfoSlice",initialState:si,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(C,()=>si),e.addCase(q,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Wo(Bo())})}}),{setLoginMethod:Ey,setWalletConnectLogin:Qd,setLedgerLogin:el,setTokenLogin:zt,setTokenLoginSignature:Py,setWalletLogin:ol,invalidateLoginSession:mi,setLogoutRoute:Cy,setIsWalletConnectV2Initialized:Ny,setWebviewLogin:Ry}=pi.actions,Nn=pi.reducer});var li,di,_i,Fy,nl,Uy,tl,Dn,Mn=T(()=>{"use strict";n();li=require("@reduxjs/toolkit");R();di={},_i=(0,li.createSlice)({name:"modalsSlice",initialState:di,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(C,()=>di)}}),{setTxSubmittedModal:Fy,setNotificationModal:nl,clearTxSubmittedModal:Uy,clearNotificationModal:tl}=_i.actions,Dn=_i.reducer});var Se,_o=T(()=>{"use strict";n();Se=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var N,B=T(()=>{"use strict";n();_o();N=()=>{if(!Se())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var ui=T(()=>{"use strict";n();B()});var Ne,gi=T(()=>{"use strict";n();W();Ne=()=>{let{pathname:e,search:o,hash:t}=N();return`${e!=null?e:""}${o!=null?o:""}${t!=null?t:""}`}});var fi=T(()=>{"use strict";n();Fo()});var W=T(()=>{"use strict";n();ui();gi();B();fi()});var Go=T(()=>{"use strict";n();W()});var hi=T(()=>{"use strict";n();Go()});function xi(e){return e[Math.floor(Math.random()*e.length)]}var yi=T(()=>{"use strict";n()});var Kt=T(()=>{"use strict";n();Rt()});var be=T(()=>{"use strict";n();hi();yi();Kt()});var Si,bi,wi,Xt,al,vi,TS,hS,il,On,Fn=T(()=>{"use strict";n();Si=require("@reduxjs/toolkit"),bi=x(require("lodash.omit")),wi=require("redux-persist");bn();R();be();Xt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},al={network:Xt},vi=(0,Si.createSlice)({name:"appConfig",initialState:al,reducers:{initializeNetworkConfig:(e,o)=>{let t=xi(o.payload.walletConnectV2RelayAddresses),s=(0,bi.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(C,o=>{o.network.customWalletAddress=void 0}),e.addCase(wi.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:TS,updateNetworkConfig:hS,setCustomWalletAddress:il}=vi.actions,On=vi.reducer});var Ii,Yt,Ai,vS,IS,AS,Un,Bn=T(()=>{"use strict";n();Ii=require("@reduxjs/toolkit");M();R();Yt={isSigning:!1,signedSessions:{}},Ai=(0,Ii.createSlice)({name:"signedMessageInfoSliceState",initialState:Yt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Yt},extraReducers:e=>{e.addCase(C,()=>Yt)}}),{setSignSession:vS,clearSignedMessageInfo:IS,setSignSessionState:AS}=Ai.actions,Un=Ai.reducer});var Li,Ei,ki,Pi,Jt,sl,RS,cl,Wn,Gn=T(()=>{"use strict";n();Li=require("@reduxjs/toolkit"),Ei=require("redux-persist");M();An();R();ki={customToasts:[],transactionToasts:[]},Pi=(0,Li.createSlice)({name:"toastsSlice",initialState:ki,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Uo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(C,()=>ki),e.addCase(Ei.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:Jt,removeCustomToast:sl,addTransactionToast:RS,removeTransactionToast:cl}=Pi.actions,Wn=Pi.reducer});var Ci,Qt,er,or,pl,Zt,Ni,FS,ml,Hn,$n,Vn=T(()=>{"use strict";n();Ci=require("@reduxjs/toolkit");R();Qt="Transaction failed",er="Transaction successful",or="Processing transaction",pl="Transaction submitted",Zt={},Ni=(0,Ci.createSlice)({name:"transactionsInfo",initialState:Zt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Qt,successMessage:(s==null?void 0:s.successMessage)||er,processingMessage:(s==null?void 0:s.processingMessage)||or,submittedMessage:(s==null?void 0:s.submittedMessage)||pl,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Zt},extraReducers:e=>{e.addCase(C,()=>Zt)}}),{clearTransactionsInfo:FS,setTransactionsDisplayInfo:ml,clearTransactionsInfoForSessionId:Hn}=Ni.actions,$n=Ni.reducer});function go(e){return e!=null&&(yl(e)||Il(e))}function fo(e){return e!=null&&(Sl(e)||Al(e))}function To(e){return e!=null&&(bl(e)||kl(e))}function Ri(e){return e!=null&&(wl(e)||Ll(e))}function nr(e){return e!=null&&vl(e)}function yl(e){return e!=null&&dl.includes(e)}function Sl(e){return e!=null&&ll.includes(e)}function bl(e){return e!=null&&_l.includes(e)}function wl(e){return e!=null&&ul.includes(e)}function vl(e){return e!=null&&gl.includes(e)}function Il(e){return e!=null&&fl.includes(e)}function Al(e){return e!=null&&Tl.includes(e)}function kl(e){return e!=null&&hl.includes(e)}function Ll(e){return e!=null&&xl.includes(e)}var dl,ll,_l,ul,gl,fl,Tl,hl,xl,ho=T(()=>{"use strict";n();P();dl=["sent"],ll=["success"],_l=["fail","cancelled","timedOut"],ul=["invalid"],gl=["timedOut"],fl=["pending"],Tl=["success"],hl=["fail","invalid"],xl=["not executed"]});var Di,Mi,Ho,El,Oi,Fi,Ui,Pl,xo,Cl,Nl,qS,Rl,Ve,$o,zS,jn,qn=T(()=>{"use strict";n();Di=require("@reduxjs/toolkit"),Mi=require("redux-persist");P();ho();R();Ho={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},El={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Oi=(0,Di.createSlice)({name:"transactionsSlice",initialState:Ho,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,f;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:l}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},El),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),l!=null?l:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===t&&(e.transactionsToSign=Ho.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var f,h,b,E,L,G,te,$;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:l}=o.payload,_=(h=(f=e.signedTransactions)==null?void 0:f[t])==null?void 0:h.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(H=>H.hash===p?w(u(u({},m!=null?m:{}),H),{status:s,errorMessage:c,inTransit:l}):H);let Y=(E=(b=e.signedTransactions[t])==null?void 0:b.transactions)==null?void 0:E.every(H=>fo(H.status)),fe=(G=(L=e.signedTransactions[t])==null?void 0:L.transactions)==null?void 0:G.some(H=>To(H.status)),Te=($=(te=e.signedTransactions[t])==null?void 0:te.transactions)==null?void 0:$.every(H=>Ri(H.status));Y&&(e.signedTransactions[t].status="success"),fe&&(e.signedTransactions[t].status="fail"),Te&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ho.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ho.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(C,()=>Ho),e.addCase(Mi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((l,[_,f])=>{let h=new Date(_),b=new Date;return b.setHours(b.getHours()+5),b-h>0||(l[_]=f),l},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Fi,updateSignedTransactions:Ui,setTransactionsToSign:Pl,clearAllTransactionsToSign:xo,clearAllSignedTransactions:Cl,clearSignedTransaction:Nl,clearTransactionToSign:qS,setSignTransactionsError:Rl,setSignTransactionsCancelMessage:Ve,moveTransactionsToSignedState:$o,updateSignedTransactionsCustomTransactionInformation:zS}=Oi.actions,jn=Oi.reducer});var Bi,tr,Wi,JS,ZS,Dl,QS,zn,Kn=T(()=>{"use strict";n();Bi=require("@reduxjs/toolkit");R();tr={},Wi=(0,Bi.createSlice)({name:"batchTransactionsSlice",initialState:tr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>tr},extraReducers:e=>{e.addCase(C,()=>tr)}}),{setBatchTransactions:JS,updateBatchTransactions:ZS,clearBatchTransactions:Dl,clearAllBatchTransactions:QS}=Wi.actions,zn=Wi.reducer});var Hi,Gi,$i,tb,Vi,rr=T(()=>{"use strict";n();Hi=require("@reduxjs/toolkit");R();Gi={},$i=(0,Hi.createSlice)({name:"dappConfigSlice",initialState:Gi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(C,()=>Gi)}}),{setDappConfig:tb}=$i.actions,Vi=$i.reducer});var k=T(()=>{"use strict";n();Cn();Rn();Mn();Fn();Bn();Gn();Vn();qn();Kn();rr()});var ar=T(()=>{"use strict";n()});var zi,Ul,Bl,je,Jn=T(()=>{"use strict";n();zi=require("@reduxjs/toolkit");ar();Cn();Kn();rr();Rn();Mn();Fn();Bn();Gn();Vn();qn();Ul={["account"]:Pn,["dappConfig"]:Vi,["loginInfo"]:Nn,["modals"]:Dn,["networkConfig"]:On,["signedMessageInfo"]:Un,["toasts"]:Wn,["transactionsInfo"]:$n,["transactions"]:jn,["batchTransactions"]:zn},Bl=(e={})=>(0,zi.combineReducers)(u(u({},Ul),e)),je=Bl});var Ji={};re(Ji,{default:()=>o_,sessionStorageReducers:()=>ir});function we(e,o=[]){return{key:e,version:1,storage:Xi.default,blacklist:o}}var z,Ki,Xi,Wl,Vo,Gl,Hl,$l,Vl,jl,ql,zl,Kl,Xl,Yl,Yi,Jl,ir,Zl,Ql,e_,o_,Zi=T(()=>{"use strict";n();z=require("redux-persist"),Ki=x(require("redux-persist/lib/storage")),Xi=x(require("redux-persist/lib/storage/session"));Jn();k();Cn();Kn();Rn();Mn();Fn();Bn();Gn();Vn();qn();ar();Wl={persistReducersStorageType:"localStorage"},Vo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Gl=we(Vo["account"]),Hl=we(Vo["loginInfo"]),$l=we(Vo["modals"]),Vl=we(Vo["networkConfig"]),jl={2:e=>w(u({},e),{networkConfig:Xt})};ql=we("sdk-dapp-transactionsInfo"),zl=we("sdk-dapp-transactions",["transactionsToSign"]),Kl=we("sdk-dapp-batchTransactions",["batchTransactions"]),Xl=we("sdk-dapp-toasts"),Yl=we("sdk-dapp-signedMessageInfo"),Yi={key:"sdk-dapp-store",version:2,storage:Ki.default,whitelist:Object.keys(Vo),migrate:(0,z.createMigrate)(jl,{debug:!1})},Jl=w(u({},Yi),{whitelist:[]}),ir={["toasts"]:(0,z.persistReducer)(Xl,Wn),["transactions"]:(0,z.persistReducer)(zl,jn),["transactionsInfo"]:(0,z.persistReducer)(ql,$n),["batchTransactions"]:(0,z.persistReducer)(Kl,zn),["signedMessageInfo"]:(0,z.persistReducer)(Yl,Un)},Zl=w(u({},ir),{["account"]:(0,z.persistReducer)(Gl,Pn),["loginInfo"]:(0,z.persistReducer)(Hl,Nn),["modals"]:(0,z.persistReducer)($l,Dn),["networkConfig"]:(0,z.persistReducer)(Vl,On)}),Ql=Wl.persistReducersStorageType==="localStorage",e_=Ql?(0,z.persistReducer)(Yi,je(ir)):(0,z.persistReducer)(Jl,je(Zl)),o_=e_});var Qi={};re(Qi,{default:()=>n_});var n_,es=T(()=>{"use strict";n();Jn();n_=je()});var os={};re(os,{default:()=>r_});var Q,t_,r_,ns=T(()=>{"use strict";n();Q=require("redux-persist"),t_=[Q.FLUSH,Q.REHYDRATE,Q.PAUSE,Q.PERSIST,Q.PURGE,Q.REGISTER],r_=t_});var as={};re(as,{default:()=>rs});function rs(e){return(0,ts.persistStore)(e)}var ts,is=T(()=>{"use strict";n();ts=require("redux-persist")});var uc=S((qD,_c)=>{n();var Fu=typeof a=="object"&&a&&a.Object===Object&&a;_c.exports=Fu});var Jo=S((zD,gc)=>{n();var Uu=uc(),Bu=typeof self=="object"&&self&&self.Object===Object&&self,Wu=Uu||Bu||Function("return this")();gc.exports=Wu});var Ar=S((KD,fc)=>{n();var Gu=Jo(),Hu=Gu.Symbol;fc.exports=Hu});var yc=S((XD,xc)=>{n();var Tc=Ar(),hc=Object.prototype,$u=hc.hasOwnProperty,Vu=hc.toString,Zo=Tc?Tc.toStringTag:void 0;function ju(e){var o=$u.call(e,Zo),t=e[Zo];try{e[Zo]=void 0;var s=!0}catch(p){}var c=Vu.call(e);return s&&(o?e[Zo]=t:delete e[Zo]),c}xc.exports=ju});var bc=S((YD,Sc)=>{n();var qu=Object.prototype,zu=qu.toString;function Ku(e){return zu.call(e)}Sc.exports=Ku});var kr=S((JD,Ic)=>{n();var wc=Ar(),Xu=yc(),Yu=bc(),Ju="[object Null]",Zu="[object Undefined]",vc=wc?wc.toStringTag:void 0;function Qu(e){return e==null?e===void 0?Zu:Ju:vc&&vc in Object(e)?Xu(e):Yu(e)}Ic.exports=Qu});var kc=S((ZD,Ac)=>{n();var eg=Array.isArray;Ac.exports=eg});var Ec=S((QD,Lc)=>{n();function og(e){return e!=null&&typeof e=="object"}Lc.exports=og});var Cc=S((e2,Pc)=>{n();var ng=kr(),tg=kc(),rg=Ec(),ag="[object String]";function ig(e){return typeof e=="string"||!tg(e)&&rg(e)&&ng(e)==ag}Pc.exports=ig});var _t=S((Q3,Fc)=>{n();function vg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Fc.exports=vg});var Bc=S((eM,Uc)=>{n();var Ig=kr(),Ag=_t(),kg="[object AsyncFunction]",Lg="[object Function]",Eg="[object GeneratorFunction]",Pg="[object Proxy]";function Cg(e){if(!Ag(e))return!1;var o=Ig(e);return o==Lg||o==Eg||o==kg||o==Pg}Uc.exports=Cg});var Gc=S((oM,Wc)=>{n();var Ng=Jo(),Rg=Ng["__core-js_shared__"];Wc.exports=Rg});var Vc=S((nM,$c)=>{n();var Cr=Gc(),Hc=function(){var e=/[^.]+$/.exec(Cr&&Cr.keys&&Cr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Dg(e){return!!Hc&&Hc in e}$c.exports=Dg});var qc=S((tM,jc)=>{n();var Mg=Function.prototype,Og=Mg.toString;function Fg(e){if(e!=null){try{return Og.call(e)}catch(o){}try{return e+""}catch(o){}}return""}jc.exports=Fg});var Kc=S((rM,zc)=>{n();var Ug=Bc(),Bg=Vc(),Wg=_t(),Gg=qc(),Hg=/[\\^$.*+?()[\]{}|]/g,$g=/^\[object .+?Constructor\]$/,Vg=Function.prototype,jg=Object.prototype,qg=Vg.toString,zg=jg.hasOwnProperty,Kg=RegExp("^"+qg.call(zg).replace(Hg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xg(e){if(!Wg(e)||Bg(e))return!1;var o=Ug(e)?Kg:$g;return o.test(Gg(e))}zc.exports=Xg});var Yc=S((aM,Xc)=>{n();function Yg(e,o){return e==null?void 0:e[o]}Xc.exports=Yg});var ut=S((iM,Jc)=>{n();var Jg=Kc(),Zg=Yc();function Qg(e,o){var t=Zg(e,o);return Jg(t)?t:void 0}Jc.exports=Qg});var en=S((sM,Zc)=>{n();var ef=ut(),of=ef(Object,"create");Zc.exports=of});var op=S((cM,ep)=>{n();var Qc=en();function nf(){this.__data__=Qc?Qc(null):{},this.size=0}ep.exports=nf});var tp=S((pM,np)=>{n();function tf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}np.exports=tf});var ap=S((mM,rp)=>{n();var rf=en(),af="__lodash_hash_undefined__",sf=Object.prototype,cf=sf.hasOwnProperty;function pf(e){var o=this.__data__;if(rf){var t=o[e];return t===af?void 0:t}return cf.call(o,e)?o[e]:void 0}rp.exports=pf});var sp=S((dM,ip)=>{n();var mf=en(),df=Object.prototype,lf=df.hasOwnProperty;function _f(e){var o=this.__data__;return mf?o[e]!==void 0:lf.call(o,e)}ip.exports=_f});var pp=S((lM,cp)=>{n();var uf=en(),gf="__lodash_hash_undefined__";function ff(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=uf&&o===void 0?gf:o,this}cp.exports=ff});var dp=S((_M,mp)=>{n();var Tf=op(),hf=tp(),xf=ap(),yf=sp(),Sf=pp();function Lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Lo.prototype.clear=Tf;Lo.prototype.delete=hf;Lo.prototype.get=xf;Lo.prototype.has=yf;Lo.prototype.set=Sf;mp.exports=Lo});var _p=S((uM,lp)=>{n();function bf(){this.__data__=[],this.size=0}lp.exports=bf});var gp=S((gM,up)=>{n();function wf(e,o){return e===o||e!==e&&o!==o}up.exports=wf});var on=S((fM,fp)=>{n();var vf=gp();function If(e,o){for(var t=e.length;t--;)if(vf(e[t][0],o))return t;return-1}fp.exports=If});var hp=S((TM,Tp)=>{n();var Af=on(),kf=Array.prototype,Lf=kf.splice;function Ef(e){var o=this.__data__,t=Af(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():Lf.call(o,t,1),--this.size,!0}Tp.exports=Ef});var yp=S((hM,xp)=>{n();var Pf=on();function Cf(e){var o=this.__data__,t=Pf(o,e);return t<0?void 0:o[t][1]}xp.exports=Cf});var bp=S((xM,Sp)=>{n();var Nf=on();function Rf(e){return Nf(this.__data__,e)>-1}Sp.exports=Rf});var vp=S((yM,wp)=>{n();var Df=on();function Mf(e,o){var t=this.__data__,s=Df(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}wp.exports=Mf});var Ap=S((SM,Ip)=>{n();var Of=_p(),Ff=hp(),Uf=yp(),Bf=bp(),Wf=vp();function Eo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Eo.prototype.clear=Of;Eo.prototype.delete=Ff;Eo.prototype.get=Uf;Eo.prototype.has=Bf;Eo.prototype.set=Wf;Ip.exports=Eo});var Lp=S((bM,kp)=>{n();var Gf=ut(),Hf=Jo(),$f=Gf(Hf,"Map");kp.exports=$f});var Cp=S((wM,Pp)=>{n();var Ep=dp(),Vf=Ap(),jf=Lp();function qf(){this.size=0,this.__data__={hash:new Ep,map:new(jf||Vf),string:new Ep}}Pp.exports=qf});var Rp=S((vM,Np)=>{n();function zf(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Np.exports=zf});var nn=S((IM,Dp)=>{n();var Kf=Rp();function Xf(e,o){var t=e.__data__;return Kf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Dp.exports=Xf});var Op=S((AM,Mp)=>{n();var Yf=nn();function Jf(e){var o=Yf(this,e).delete(e);return this.size-=o?1:0,o}Mp.exports=Jf});var Up=S((kM,Fp)=>{n();var Zf=nn();function Qf(e){return Zf(this,e).get(e)}Fp.exports=Qf});var Wp=S((LM,Bp)=>{n();var eT=nn();function oT(e){return eT(this,e).has(e)}Bp.exports=oT});var Hp=S((EM,Gp)=>{n();var nT=nn();function tT(e,o){var t=nT(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Gp.exports=tT});var Vp=S((PM,$p)=>{n();var rT=Cp(),aT=Op(),iT=Up(),sT=Wp(),cT=Hp();function Po(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Po.prototype.clear=rT;Po.prototype.delete=aT;Po.prototype.get=iT;Po.prototype.has=sT;Po.prototype.set=cT;$p.exports=Po});var qp=S((CM,jp)=>{n();var pT="__lodash_hash_undefined__";function mT(e){return this.__data__.set(e,pT),this}jp.exports=mT});var Kp=S((NM,zp)=>{n();function dT(e){return this.__data__.has(e)}zp.exports=dT});var Yp=S((RM,Xp)=>{n();var lT=Vp(),_T=qp(),uT=Kp();function gt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new lT;++o<t;)this.add(e[o])}gt.prototype.add=gt.prototype.push=_T;gt.prototype.has=uT;Xp.exports=gt});var Zp=S((DM,Jp)=>{n();function gT(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Jp.exports=gT});var em=S((MM,Qp)=>{n();function fT(e){return e!==e}Qp.exports=fT});var nm=S((OM,om)=>{n();function TT(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}om.exports=TT});var rm=S((FM,tm)=>{n();var hT=Zp(),xT=em(),yT=nm();function ST(e,o,t){return o===o?yT(e,o,t):hT(e,xT,t)}tm.exports=ST});var im=S((UM,am)=>{n();var bT=rm();function wT(e,o){var t=e==null?0:e.length;return!!t&&bT(e,o,0)>-1}am.exports=wT});var cm=S((BM,sm)=>{n();function vT(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}sm.exports=vT});var mm=S((WM,pm)=>{n();function IT(e,o){return e.has(o)}pm.exports=IT});var lm=S((GM,dm)=>{n();var AT=ut(),kT=Jo(),LT=AT(kT,"Set");dm.exports=LT});var um=S((HM,_m)=>{n();function ET(){}_m.exports=ET});var Nr=S(($M,gm)=>{n();function PT(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}gm.exports=PT});var Tm=S((VM,fm)=>{n();var Rr=lm(),CT=um(),NT=Nr(),RT=1/0,DT=Rr&&1/NT(new Rr([,-0]))[1]==RT?function(e){return new Rr(e)}:CT;fm.exports=DT});var xm=S((jM,hm)=>{n();var MT=Yp(),OT=im(),FT=cm(),UT=mm(),BT=Tm(),WT=Nr(),GT=200;function HT(e,o,t){var s=-1,c=OT,p=e.length,m=!0,l=[],_=l;if(t)m=!1,c=FT;else if(p>=GT){var f=o?null:BT(e);if(f)return WT(f);m=!1,c=UT,_=new MT}else _=o?[]:l;e:for(;++s<p;){var h=e[s],b=o?o(h):h;if(h=t||h!==0?h:0,m&&b===b){for(var E=_.length;E--;)if(_[E]===b)continue e;o&&_.push(b),l.push(h)}else c(_,b,t)||(_!==l&&_.push(b),l.push(h))}return l}hm.exports=HT});var Sm=S((qM,ym)=>{n();var $T=xm();function VT(e){return e&&e.length?$T(e):[]}ym.exports=VT});var Br={};re(Br,{css:()=>Om,default:()=>hh});var Om,hh,Wr=T(()=>{"use strict";n();Om=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Om));hh={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Ae={};re(Ae,{css:()=>Bm,default:()=>Sh});var Bm,Sh,ke=T(()=>{"use strict";n();Bm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bm));Sh={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var sn={};re(sn,{css:()=>Zm,default:()=>Hh});var Zm,Hh,cn=T(()=>{"use strict";n();Zm=`.dapp-core-component__transactionStatusToastStyles__transactions-status-toast {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zm));Hh={"transactions-status-toast":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast",transactionsStatusToast:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast","transactions-status-toast-content":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content",transactionsStatusToastContent:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content","transactions-status-toast-icon":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",transactionsStatusToastIcon:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",svg:"dapp-core-component__transactionStatusToastStyles__svg",toasts:"dapp-core-component__transactionStatusToastStyles__toasts",toastWrapper:"dapp-core-component__transactionStatusToastStyles__toastWrapper"}});var Kh={};re(Kh,{DeviceConfirmationScreen:()=>zh});module.exports=J(Kh);n();var Yr=x(require("react"));n();n();n();var ls=require("react"),yo=require("react-redux");n();var sr=require("@reduxjs/toolkit"),ms=require("react-redux/lib/utils/Subscription");k();n();var ji=x(require("lodash.throttle"));A();k();qt();lo();mo();var Ml=[In],Xn=!1,Ol=(0,ji.default)(()=>{Wo(Bo())},5e3),qi=e=>o=>t=>{if(Ml.includes(t.type))return o(t);let s=e.getState(),c=$e.local.getItem(Ce.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return Wo(Bo());let m=Date.now();return c-m<0&&!Xn?setTimeout(()=>{Xn=!0,e.dispatch(mi())},1e3):(Xn&&(Xn=!1),Ol()),o(t)};n();n();function Yn(){return typeof sessionStorage!="undefined"}var ss=Yn()?(Zi(),J(Ji)).default:(es(),J(Qi)).default,cs=Yn()?(ns(),J(os)).default:[],ps=Yn()?(is(),J(as)).default:e=>e;Jn();var v=(0,sr.configureStore)({reducer:ss,middleware:e=>e({serializableCheck:{ignoredActions:[...cs,jt.type,En.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(qi)}),ds=(0,ms.createSubscription)(v),o0=ps(v),n0=(0,sr.configureStore)({reducer:je});var a_={store:v,subscription:ds},cr=(0,ls.createContext)(a_),i0=(0,yo.createStoreHook)(cr),F=(0,yo.createDispatchHook)(cr),I=(0,yo.createSelectorHook)(cr);n();n();k();n();var _s=x(require("lodash.isequal")),Zn=require("reselect"),y=(0,Zn.createSelectorCreator)(Zn.defaultMemoize,_s.default);var le=e=>e.account,De=y(le,e=>e.address),qe=y(le,De,(e,o)=>o in e.accounts?e.accounts[o]:Ln),i_=y(le,qe,(e,o)=>{let c=e,{accounts:t}=c,s=Le(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),d0=y(qe,e=>e.balance),us=y(qe,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),l0=y(le,e=>e.shard),s_=y(le,e=>e.ledgerAccount),_0=y(le,e=>e.walletConnectAccount),u0=y(le,e=>e.isAccountLoading),g0=y(le,e=>e.accountLoadingError),c_=y(le,e=>e.websocketEvent),p_=y(le,e=>e.websocketBatchEvent);n();var jo=e=>e.dappConfig,h0=y(jo,e=>e.shouldUseWebViewProvider);n();var X=e=>e.loginInfo,m_=y(X,e=>e.loginMethod),Qn=y(X,De,(e,o)=>Boolean(o)),b0=y(X,e=>e.walletConnectLogin),d_=y(X,e=>e.ledgerLogin),l_=y(X,e=>e.walletLogin),w0=y(X,e=>e.isLoginSessionInvalid),pr=y(X,e=>e.tokenLogin),gs=y(X,e=>e.logoutRoute),__=y(X,e=>e.isWalletConnectV2Initialized);n();var fs=e=>e.modals,A0=y(fs,e=>e.txSubmittedModal),u_=y(fs,e=>e.notificationModal);n();var _e=e=>e.networkConfig,et=y(_e,e=>e.network.chainId),g_=y(_e,e=>e.network.roundDuration),E0=y(_e,e=>e.network.walletConnectBridgeAddress),f_=y(_e,e=>e.network.walletConnectV2RelayAddress),T_=y(_e,e=>e.network.walletConnectV2ProjectId),h_=y(_e,e=>e.network.walletConnectV2Options),x_=y(_e,e=>e.network.walletConnectDeepLink),K=y(_e,e=>e.network),mr=y(K,e=>e.apiAddress),Ts=y(K,e=>e.explorerAddress),hs=y(K,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),y_=y(K,e=>e.xAliasAddress),xs=y(K,e=>e.egldLabel);n();var ot=e=>e.signedMessageInfo,N0=y(ot,e=>e.isSigning),R0=y(ot,e=>e.errorMessage),D0=y(ot,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),M0=y(ot,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var ys=e=>e.toasts,S_=y(ys,e=>e.customToasts),Ss=y(ys,e=>e.transactionToasts);n();k();var bs={errorMessage:Qt,successMessage:er,processingMessage:or},ws=e=>e.transactionsInfo,b_=y(ws,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||bs);n();n();var ue=require("@multiversx/sdk-core");A();n();var dr=require("@multiversx/sdk-core/out");n();n();function nt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function ze(e){return nt(e)?atob(e):e}n();n();n();n();var vs=e=>{let o=e!=null?e:"";return nt(o)?dr.TransactionPayload.fromEncoded(o):new dr.TransactionPayload(o)};n();A();var So=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Nt).some(t=>e.startsWith(t)):!1;function qo(e){var s,c,p;let o=u({},e);So({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ue.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:vs(o.data),nonce:o.nonce.valueOf(),receiver:new ue.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ue.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:wn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:vn,chainID:o.chainID.valueOf(),version:new ue.TransactionVersion((p=o.version)!=null?p:Ka)}),o.options?{options:new ue.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ue.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var I_=require("@multiversx/sdk-core/out");n();A();n();var Is=require("@multiversx/sdk-core");M();n();var A_=require("@multiversx/sdk-core");n();n();n();var k_=require("@multiversx/sdk-core"),L_=x(require("bignumber.js"));P();n();n();n();var bo="accounts";var _r="blocks";n();n();n();n();j();n();n();j();n();n();n();var O_=x(require("bignumber.js"));A();n();var M_=require("@multiversx/sdk-core"),ur=x(require("bignumber.js"));A();n();var R_=x(require("bignumber.js"));n();ur.default.config({ROUNDING_MODE:ur.default.ROUND_FLOOR});n();n();n();A();n();n();n();n();A();n();A();n();var F_=require("@multiversx/sdk-core");A();n();var Ko=require("@multiversx/sdk-core"),W_=x(require("bignumber.js"));A();n();n();var U_=x(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();n();A();n();j();var H_=["reDelegateRewards","claimRewards","unBond"],$_=["wrapEgld","unwrapEgld"],V_=["unStake"],j_=["unDelegate"];n();n();n();A();n();var X_=x(require("bignumber.js"));n();n();j();n();var J_=x(require("bignumber.js"));n();n();n();n();var eu=x(require("bignumber.js"));M();n();n();n();n();P();function at(e){let t=Object.getPrototypeOf(e).toPlainObject!=null?e:qo(e),s=w(u({},t.toPlainObject()),{hash:t.getHash().hex(),senderUsername:t.getSenderUsername().valueOf(),receiverUsername:t.getReceiverUsername().valueOf(),status:"pending"});return So({data:s.data,onlySetGuardian:!0})&&(delete s.senderUsername,delete s.receiverUsername),s}n();var Ns=require("@multiversx/sdk-web-wallet-provider");A();n();var Cs=x(require("qs"));n();W();var it=e=>{let o=new URLSearchParams(e).toString(),{pathname:t,hash:s}=N(),c=o?`?${o}`:"",p=t?`${t}${c}${s}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};_o();n();_o();var ou={search:Se()?window.location.search:"",removeParams:[]},Ps=(e,o=ou)=>{var m;let t={},s=Se()?window.location.search:"",c=(m=o.search)!=null?m:s;if(c){let l=c?new URLSearchParams(c):[];t=Object.fromEntries(l)}let p={};return e.forEach(l=>{p[l]=t[l],delete t[l]}),o.removeParams!=null&&Object.keys(t).forEach(l=>{var f,h;let[_]=l.split("[");(((f=o.removeParams)==null?void 0:f.includes(l))||((h=o.removeParams)==null?void 0:h.includes(_)))&&delete t[l]}),{remainingParams:p,params:t,clearNavigationHistory:()=>it(t)}};var st=({removeParams:e,search:o})=>{let t=Se()?window.location.search:"",s=o!=null?o:t;if(!s)return{};let c=Cs.default.parse(s.replace("?","")),p=Object.keys(c).filter(l=>!e.includes(l)),{remainingParams:m}=Ps(p,{search:o,removeParams:e});return it(m),m};var Rs=({transaction:e,search:o})=>st({removeParams:[...Object.keys(e),Ns.WALLET_PROVIDER_CALLBACK_PARAM,Pe,Ut],search:o});n();n();n();B();n();j();n();n();B();n();var nu=x(require("linkifyjs"));n();A();n();var tu=x(require("bignumber.js"));n();M();n();n();P();n();P();n();n();n();j();n();j();n();var ru=x(require("bignumber.js"));A();j();n();j();n();var Ms=require("react");M();n();n();j();n();n();var au=require("@multiversx/sdk-core/out"),iu=x(require("bignumber.js"));j();n();M();n();n();M();var a1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Os=require("react");M();B();n();var cu=require("react");j();var _1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];ho();n();var ct=e=>e.transactions,wo=y(ct,e=>e.signedTransactions),Fs=y(ct,e=>e.signTransactionsError),Tr=y(ct,e=>e.signTransactionsCancelMessage),pt=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),Us=y(wo,pt(go)),Bs=y(wo,pt(fo)),Ws=y(wo,pt(To)),pu=y(wo,pt(nr)),hr=y(ct,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>qo(t)))||[]})}),mu=y(wo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var Gs=require("react");n();k();n();n();n();n();n();n();n();n();var $s=require("@multiversx/sdk-extension-provider"),Vs=require("@multiversx/sdk-hw-provider"),js=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),qs=require("@multiversx/sdk-opera-provider"),zs=require("@multiversx/sdk-passkey-provider/out"),Ks=require("@multiversx/sdk-web-wallet-provider");A();Ee();n();var Ie=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Hs=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var xr=vo;var Ke=e=>{switch(e==null?void 0:e.constructor){case Ks.WalletProvider:return"wallet";case xr:return"walletconnectv2";case Vs.HWProvider:return"ledger";case $s.ExtensionProvider:return"extension";case zs.PasskeyProvider:return"passkey";case js.MetamaskProvider:return"metamask";case qs.OperaProvider:return"opera";case me.CrossWindowProvider:return"crossWindow";case Ie.IframeProvider:return"iframe";case vo:return"";default:return"extra"}};var oe=e=>`Unable to perform ${e}, Provider not initialized`,vo=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(oe("getAccount"))}setAccount(o){throw new Error(oe(`setAccount: ${o}`))}login(o){throw new Error(oe(`login with options: ${o}`))}logout(o){throw new Error(oe(`logout with options: ${o}`))}getAddress(){throw new Error(oe("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(oe(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(oe(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(oe(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(oe(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(oe(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(oe(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},mt=new vo;var Ys=mt,Xs=null;function Js(){Xs!=null&&(Ys=Xs)}function ge(){return Ys||mt}k();n();n();n();n();n();var Zs=require("@lifeomic/axios-fetch"),yr=x(require("axios")),Sr=(0,Zs.buildAxiosFetch)(yr.default),br=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function du(e,o,t){return g(this,null,function*(){try{let s=yield Sr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return br(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function lu(e,o){return g(this,null,function*(){try{let t=yield Sr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return br(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function _u(e,o,t){return g(this,null,function*(){try{let s=yield Sr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return br(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var Me=yr.default.create();Me.get=lu;Me.post=du;Me.patch=_u;var Qs=e=>Me.get(e).then(o=>o.data);n();var Io=e=>{let o=e!=null?e:mr(v.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var uu=x(require("axios"));n();var ec=x(require("swr"));var Ao=({apiEndpoint:e})=>{let o=Io(),t=e?`${o}/${e}`:null;return(0,ec.default)(t,Qs)};var gu=e=>{let t=`${Io()}/${bo}/${e}?withGuardianInfo=true`;return Me.get(t)},oc=e=>g(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield gu(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var ko=e=>oc(e);n();P();n();n();n();B();n();function Yo(e){let o=v.getState(),t=us(o);return e?t&&!isNaN(t)?Math.max(t,e.nonce):e.nonce:t}ho();n();n();n();var fu=x(require("axios"));n();var hu=x(require("axios"));co();n();A();n();var xu=x(require("axios"));n();var Su=x(require("axios"));n();n();var bu=x(require("axios"));n();var wu=x(require("axios"));n();n();k();P();n();n();n();n();B();n();R();M();n();k();n();var ac=require("@multiversx/sdk-core");M();W();n();ho();n();k();P();n();k();M();n();n();n();M();n();bn();n();var ic=()=>I(Fs);n();n();n();var ku=x(require("swr"));n();n();n();n();var sc=require("react");n();n();var cc=require("react"),pc=require("@multiversx/sdk-web-wallet-provider"),mc=require("@multiversx/sdk-web-wallet-provider"),dc=x(require("qs"));A();k();P();Mt();B();var Lu=N();function wr(e){let o=I(K),t=F(),{shouldFetchWalletUrlOnLoad:s}=I(jo),{search:c}=s?Lu:N();(0,cc.useEffect)(()=>{if(c!=null){let p=dc.default.parse(c.replace("?",""));if(p&&Pe in p){let m=String(p[Pe]),l=new pc.WalletProvider(`${o.walletAddress}${Xa}`).getTransactionsFromWalletUrl(c);if(p.status==="cancelled"){t($o({sessionId:m,status:"cancelled"})),e(),st({removeParams:[...Object.keys(Dt),mc.WALLET_PROVIDER_CALLBACK_PARAM,Pe,"address"],search:c}),t(Ve(Sn));return}if(l.length>0){t($o({sessionId:m,status:"signed",transactions:l.map(f=>at(f))}));let[_]=l;Rs({transaction:_,search:c})}}}},[c])}n();var Oc=require("react"),Pr=require("@multiversx/sdk-core");n();var lt=e=>Ao({apiEndpoint:e?`${bo}/${e}?withGuardianInfo=true`:null});A();Kt();n();n();n();n();n();n();var vr=({accountNonce:e,transactionNonce:o})=>o&&o>e?o:e;var lc=({latestNonce:e,transactions:o})=>o.length===0?o:o.map((t,s)=>{let c=e+s,p=t.getNonce().valueOf(),m=vr({accountNonce:c,transactionNonce:p});return t.setNonce(m),t});var Ir=()=>{let e=I(De),{data:o}=lt(e);return t=>g(void 0,null,function*(){let s=o!=null?o:yield ko(e),c=Yo(s);return lc({latestNonce:c,transactions:t})})};n();n();n();n();co();n();var Cu=x(require("axios"));n();var Ru=x(require("axios"));n();co();n();co();n();n();n();n();var Mu=require("@multiversx/sdk-opera-provider");n();var Ou=require("@multiversx/sdk-extension-provider");n();Ee();n();n();n();n();var Nc=x(Cc());var Qo=e=>{if(!e||!(0,Nc.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,s,c,p]=o,m=JSON.parse(ze(p)),l=ze(t);return{ttl:Number(c),extraInfo:m,origin:l,blockHash:s}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var mg=require("@multiversx/sdk-native-auth-client");n();var Mc=x(require("axios"));n();n();n();function Rc(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Dc=(e,o,t,s=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield Rc(o.delay)),yield Dc(e,o,t,s+1)):null}}),Lr=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield Dc(e,o,t)});var sg=4;var l2=Lr((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Mc.default.get(`${e}/${_r}?from=${sg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();An();n();function cg(e){return Object.prototype.toString.call(e)==="[object String]"}var Er=e=>{var t;if(!e||!cg(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[s,c,p]=o,m=ze(s),l=ze(c),_=Qo(l);if(!_)return{address:m,body:l,signature:p,blockHash:"",origin:"",ttl:0};let f=w(u({},_),{address:m,body:l,signature:p});return(t=_.extraInfo)!=null&&t.timestamp||delete f.extraInfo,f}catch(s){return null}};n();B();var b2={origin:N().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var lg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var _g=require("@multiversx/sdk-passkey-provider/out");A();B();n();n();n();var xg=require("react"),yg=require("@multiversx/sdk-hw-provider");n();R();M();n();Go();lo();mo();W();n();var Oe=()=>{let e=ge(),o=Ke(e);return{provider:e,providerType:o}};n();var km=require("react"),Lm=require("@multiversx/sdk-core"),ZT=require("@multiversx/sdk-extension-provider"),QT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),eh=require("@multiversx/sdk-passkey-provider/out"),oh=x(Sm());A();n();n();var Fe=()=>I(qe);n();n();n();n();n();n();n();n();var tn=x(require("react"));var cO=(0,tn.createContext)({}),pO=v.getState();n();var wm=x(require("react"));n();var Dr=x(require("react")),jT=x(require("axios"));n();n();Ee();n();n();var Im=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Am=require("@multiversx/sdk-webview-provider/out/WebviewProvider");R();n();R();k();M();function vm(e,o=v.dispatch){let t=Er(e);if(t==null)return;let{signature:s,address:c}=t;s&&e&&c&&(o(zt({loginToken:e,signature:s,nativeAuthToken:e})),o(q({address:c,loginMethod:"extra"})))}n();n();k();function Mr(){v.dispatch(xo())}n();W();n();k();M();n();n();var zT=require("@multiversx/sdk-core"),KT=x(require("bignumber.js"));A();n();var XT=x(require("bignumber.js"));A();var ne=class{constructor(){this.init=()=>g(this,null,function*(){return yield this._provider.init()});this.login=()=>g(this,null,function*(){var t;let o=yield this._provider.login();return{address:(t=o==null?void 0:o.address)!=null?t:""}});this.logout=()=>g(this,null,function*(){return v.dispatch(C()),yield this._provider.logout()});this.relogin=()=>g(this,null,function*(){let o=yield this._provider.relogin();return o?(vm(o),Js(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>g(this,null,function*(){let t=yield this._provider.signTransactions(o);return t||(Mr(),this._provider.cancelAction(),null)});this.signTransaction=o=>g(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>g(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>g(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>g(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,Im.providerNotInitializedError)("getAddress");this._provider=Am.WebviewProvider.getInstance({resetStateCallback:()=>v.dispatch(C())})}static getInstance(){return ne._instance||(ne._instance=new ne),ne._instance}getAccount(){var t;let o=this._provider.getAccount();return{address:(t=o==null?void 0:o.address)!=null?t:""}}setAccount(o){this._provider.setAccount(o)}};k();P();W();B();n();var Co=require("react"),Or=require("@multiversx/sdk-extension-provider"),Fr=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ur=require("@multiversx/sdk-passkey-provider/out");Ee();k();var ft=()=>{let e=F(),{provider:o}=Oe(),{nonce:t}=Fe(),[s,c]=(0,Co.useState)(null),[p,m]=(0,Co.useState)(),[l,_]=(0,Co.useState)([]),f=Ir(),h=I(hr),b=I(Tr),E=()=>g(void 0,null,function*(){var fe,Te;let $=Boolean(h==null?void 0:h.transactions),Y=(fe=h==null?void 0:h.transactions)!=null?fe:[];if($){let H=(Te=h==null?void 0:h.customTransactionInformation)!=null&&Te.skipUpdateNonces?Y:yield f(Y);_(H)}m($)});(0,Co.useEffect)(()=>{E()},[h,t]);let L=()=>{c(null),e(Ve(null))},G=$=>{L(),te($)};wr(G);function te($){var oo,mn,no,dn,ln,Jr,_n,Zr,un,Qr,gn,ea;let Y=o instanceof Or.ExtensionProvider,fe=o instanceof Ur.PasskeyProvider,Te=o instanceof me.CrossWindowProvider,H=o instanceof Ie.IframeProvider,pn=o instanceof Fr.MetamaskProvider,xt=o instanceof ne;e(xo()),e(Hn($)),!(!Y&&!Te&&!H&&!fe&&!pn)&&(L(),Y&&((mn=(oo=Or.ExtensionProvider.getInstance())==null?void 0:oo.cancelAction)==null||mn.call(oo)),fe&&((dn=(no=Ur.PasskeyProvider.getInstance())==null?void 0:no.cancelAction)==null||dn.call(no)),pn&&((Jr=(ln=Fr.MetamaskProvider.getInstance())==null?void 0:ln.cancelAction)==null||Jr.call(ln)),Te&&((Zr=(_n=me.CrossWindowProvider.getInstance())==null?void 0:_n.cancelAction)==null||Zr.call(_n)),H&&((Qr=(un=Ie.IframeProvider.getInstance())==null?void 0:un.cancelAction)==null||Qr.call(un)),xt&&((ea=(gn=ne.getInstance())==null?void 0:gn.cancelAction)==null||ea.call(gn)))}return{error:s,canceledTransactionsMessage:b,clearTransactionStatusMessage:L,onAbort:G,setError:c,hasTransactions:p,transactionsToSign:h&&w(u({},h),{transactions:l})}};n();k();M();Go();B();n();pe();k();n();n();var th=require("react");n();n();P();ho();n();var Em=require("react");n();n();var ah=require("react"),ih=require("@multiversx/sdk-extension-provider");pe();R();P();n();be();W();W();n();n();Ee();M();n();var rh=require("react"),Pm=require("@multiversx/sdk-core");k();n();var sh=require("react"),ch=require("@multiversx/sdk-opera-provider");pe();R();P();be();W();B();n();var ph=require("react");Ft();pe();Ee();R();k();P();be();B();n();var fh=require("react");pe();k();n();n();Bt();n();n();var mh=x(require("platform"));_o();n();n();n();n();n();n();n();Fo();P();n();n();var dh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Go();lo();n();n();n();k();var lh={},_h={};var Cm=e=>{if(e.component!=null){let o=e,{component:t,onClose:s}=o,c=Le(o,["component","onClose"]),p=v.dispatch(Jt(w(u({},c),{component:null,onClose:void 0})));return lh[p==null?void 0:p.payload.toastId]=t,s&&(_h[p==null?void 0:p.payload.toastId]=s),p==null?void 0:p.payload}return v.dispatch(Jt(e)).payload};n();n();var uh=x(require("axios"));W();n();n();var gh=x(_t());Fo();var Nm,Rm,Dm,JB=(Dm=(Rm=(Nm=He.safeWindow)==null?void 0:Nm.location)==null?void 0:Rm.origin)==null?void 0:Dm.includes("localhost");n();B();n();n();var Lh=require("react");A();n();n();A();n();n();n();var Th=x(require("bignumber.js"));n();n();n();var Ue=x(require("react")),jm=require("react"),qm=require("react"),qr=x(require("classnames")),zm=require("react-dom");A();n();var Um=x(require("react"));n();var rn=x(require("react"));n();_o();var Mm=()=>!Se();var xh=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(Wr(),Br))}),yh=()=>(Wr(),J(Br)).default,Gr=Mm();function Fm({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=rn.default.useState(Gr?void 0:yh()),[p,m]=rn.default.useState(Gr||t==null?void 0:t()),l=()=>g(this,null,function*(){(e?e():xh()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,rn.useEffect)(()=>{Gr&&l()},[]),{globalStyles:s,styles:p}}function ee(e,o){return t=>{let{globalStyles:s,styles:c}=Fm({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Um.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();var Wm=x(require("react")),Gm=x(require("classnames"));var bh=({className:e,children:o,styles:t})=>Wm.default.createElement("div",{className:(0,Gm.default)(t==null?void 0:t.dappModalBody,e)},o),Hr=ee(bh,{ssrStyles:()=>Promise.resolve().then(()=>(ke(),Ae)),clientStyles:()=>(ke(),J(Ae)).default});n();var $r=x(require("react")),Hm=x(require("classnames"));var wh=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?$r.default.createElement("div",{className:(0,Hm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:$r.default.createElement("div",null,s)):null,Vr=ee(wh,{ssrStyles:()=>Promise.resolve().then(()=>(ke(),Ae)),clientStyles:()=>(ke(),J(Ae)).default});n();var Do=x(require("react")),$m=require("@fortawesome/free-solid-svg-icons"),Vm=require("@fortawesome/react-fontawesome"),an=x(require("classnames"));var vh=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:l,styles:_})=>e?t?Do.default.createElement("div",{className:(0,an.default)(_==null?void 0:_.dappModalHeader,s)},t):Do.default.createElement("div",{className:(0,an.default)(_==null?void 0:_.dappModalHeader,s)},Do.default.createElement("div",{className:(0,an.default)(_==null?void 0:_.dappModalHeaderText,p)},o),Do.default.createElement("button",{onClick:m,className:(0,an.default)(_==null?void 0:_.dappModalCloseButton,l==null?void 0:l.btn,l==null?void 0:l.btnLight,c)},Do.default.createElement(Vm.FontAwesomeIcon,{size:"lg",icon:$m.faTimes}))):null,jr=ee(vh,{ssrStyles:()=>Promise.resolve().then(()=>(ke(),Ae)),clientStyles:()=>(ke(),J(Ae)).default});var Ih={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Ah=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=Ih,id:p="dapp-modal",onHide:m,parentElement:l,visible:_,styles:f})=>{let[h,b]=(0,jm.useState)(!1);if((0,qm.useEffect)(()=>{b(!0)},[]),!_)return null;let{showHeader:E,showFooter:L,headerText:G,footerText:te,modalDialogClassName:$="dapp-modal-dialog",modalContentClassName:Y="dapp-modal-dialog-content",modalHeaderClassName:fe="dapp-modal-dialog-header",modalHeaderTextClassName:Te="dapp-modal-dialog-header-text",modalCloseButtonClassName:H="dapp-modal-dialog-close-button",modalBodyClassName:pn="dapp-modal-dialog-content-body",modalFooterClassName:xt="dapp-modal-dialog-footer",customModalHeader:oo,customModalFooter:mn}=c,no=dn=>{dn.key==="Escape"&&s&&(m==null||m())};return Ue.default.createElement(Ue.default.Fragment,null,h&&(0,zm.createPortal)(Ue.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,qr.default)($,f==null?void 0:f.dappModal,t),"data-testid":e,onKeyDown:no},Ue.default.createElement("div",{className:(0,qr.default)(f==null?void 0:f.dappModalContent,Y)},Ue.default.createElement(jr,{visible:E,headerText:G,customHeader:oo,className:fe,headerTextClassName:Te,closeButtonClassName:H,onHide:m}),Ue.default.createElement(Hr,{className:pn},o),Ue.default.createElement(Vr,{visible:L,customFooter:mn,footerText:te,className:xt}))),l!=null?l:document==null?void 0:document.body))},kh=ee(Ah,{ssrStyles:()=>Promise.resolve().then(()=>(ke(),Ae)),clientStyles:()=>(ke(),J(Ae)).default});n();n();var Km=require("react");n();n();var Xm=require("react"),Ph=require("@multiversx/sdk-hw-provider");pe();R();k();P();be();n();var Eh=require("react");n();n();var zr=require("react");R();k();P();be();B();n();var Nh=require("react"),Rh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();R();P();be();W();W();n();var Dh=require("react"),Mh=require("@multiversx/sdk-passkey-provider/out");pe();R();P();be();W();W();n();n();var Ym=require("react");n();var Uh=require("react");n();var Kr=require("react"),Fh=require("socket.io-client");k();n();n();n();var Bh=require("react");M();n();n();n();var Gh=x(require("swr"));n();n();n();n();var Wh=x(require("axios"));n();W();n();var eo=x(require("react")),od=require("@fortawesome/free-solid-svg-icons");n();var Xr=x(require("react"));n();var Qe=x(require("react")),Mo=require("@fortawesome/free-solid-svg-icons"),Tt=require("@fortawesome/react-fontawesome"),ht=x(require("classnames"));n();var Vh=({type:e,globalStyles:o,styles:t})=>{switch(e){case"info":return Qe.default.createElement("div",{className:(0,ht.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.success)},Qe.default.createElement(Tt.FontAwesomeIcon,{icon:Mo.faInfo,className:t==null?void 0:t.svg,size:"5x"}));case"warning":return Qe.default.createElement("div",{className:(0,ht.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.warning,t==null?void 0:t.warningIcon)},Qe.default.createElement(Tt.FontAwesomeIcon,{icon:Mo.faWarning,className:t==null?void 0:t.svg,size:"5x"}));case"error":return Qe.default.createElement("div",{className:(0,ht.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.danger,t==null?void 0:t.errorIcon)},Qe.default.createElement(Tt.FontAwesomeIcon,{icon:Mo.faTimes,className:t==null?void 0:t.svg,size:"5x"}));default:return null}},Qm=ee(Vh,{ssrStyles:()=>Promise.resolve().then(()=>(cn(),sn)),clientStyles:()=>(cn(),J(sn)).default});var jh=({type:e,message:o,styles:t})=>Xr.default.createElement("div",{className:t==null?void 0:t.transactionsStatusToastContent},Xr.default.createElement(Qm,{type:e}),o),ed=ee(jh,{ssrStyles:()=>Promise.resolve().then(()=>(cn(),sn)),clientStyles:()=>(cn(),J(sn)).default});A();var nd=({signError:e,canceledTransactionsMessage:o,onDelete:t})=>{let s=I(jo),c=(0,eo.useMemo)(()=>e||o||ka,[e,o]),p=(0,eo.useMemo)(()=>e?"error":o?"warning":"info",[e,o]);return(0,eo.useEffect)(()=>{var m;Cm({toastId:`${Va}-${Date.now()}`,title:"Transaction canceled",duration:(m=s.cancelTransactionToastDuration)!=null?m:2e4,component:()=>eo.default.createElement(ed,{type:p,message:c}),onClose:()=>t==null?void 0:t(),icon:od.faWarning})},[]),null};var zh=({Screen:e,GuardianScreen:o,verifyReceiverScam:t,className:s})=>{var Y;if(!e)return null;let{transactionsToSign:c,error:p,hasTransactions:m,onAbort:l,canceledTransactionsMessage:_}=ft(),f=ic(),{providerType:h}=Oe(),{isGuarded:b}=Fe(),E=()=>{l(c==null?void 0:c.sessionId)},L=p||f,G={handleClose:E,GuardianScreen:o,isGuarded:b,error:L,sessionId:c==null?void 0:c.sessionId,transactions:(Y=c==null?void 0:c.transactions)!=null?Y:[],providerType:h,callbackRoute:(c==null?void 0:c.callbackRoute)||Ne(),className:s,verifyReceiverScam:t},te={signError:L,canceledTransactionsMessage:_,onDelete:E},$=Boolean(L)||Boolean(_);return!$&&!m?null:$?Yr.default.createElement(nd,u({},te)):Yr.default.createElement(e,u({},G))};0&&(module.exports={DeviceConfirmationScreen});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=DeviceConfirmationScreen.js.map
