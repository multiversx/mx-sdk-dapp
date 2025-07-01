"use strict";var Ym=Object.create;var xo=Object.defineProperty,Jm=Object.defineProperties,Zm=Object.getOwnPropertyDescriptor,Qm=Object.getOwnPropertyDescriptors,ed=Object.getOwnPropertyNames,Xo=Object.getOwnPropertySymbols,od=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty,Hr=Object.prototype.propertyIsEnumerable;var Gr=(e,o,t)=>o in e?xo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))tt.call(o,t)&&Gr(e,t,o[t]);if(Xo)for(var t of Xo(o))Hr.call(o,t)&&Gr(e,t,o[t]);return e},w=(e,o)=>Jm(e,Qm(o));var _e=(e,o)=>{var t={};for(var s in e)tt.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Xo)for(var s of Xo(e))o.indexOf(s)<0&&Hr.call(e,s)&&(t[s]=e[s]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),H=(e,o)=>{for(var t in o)xo(e,t,{get:o[t],enumerable:!0})},$r=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of ed(o))!tt.call(e,c)&&c!==t&&xo(e,c,{get:()=>o[c],enumerable:!(s=Zm(o,c))||s.enumerable});return e};var f=(e,o,t)=>(t=e!=null?Ym(od(e)):{},$r(o||!e||!e.__esModule?xo(t,"default",{value:e,enumerable:!0}):t,e)),F=e=>$r(xo({},"__esModule",{value:!0}),e);var h=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{d(t.next(_))}catch(g){c(g)}},m=_=>{try{d(t.throw(_))}catch(g){c(g)}},d=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(e,o)).next())});var zr=b(Yo=>{"use strict";n();Yo.byteLength=td;Yo.toByteArray=ad;Yo.fromByteArray=cd;var ae=[],Z=[],nd=typeof Uint8Array!="undefined"?Uint8Array:Array,rt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Pe=0,Vr=rt.length;Pe<Vr;++Pe)ae[Pe]=rt[Pe],Z[rt.charCodeAt(Pe)]=Pe;var Pe,Vr;Z["-".charCodeAt(0)]=62;Z["_".charCodeAt(0)]=63;function qr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function td(e){var o=qr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function rd(e,o,t){return(o+t)*3/4-t}function ad(e){var o,t=qr(e),s=t[0],c=t[1],p=new nd(rd(e,s,c)),m=0,d=c>0?s-4:s,_;for(_=0;_<d;_+=4)o=Z[e.charCodeAt(_)]<<18|Z[e.charCodeAt(_+1)]<<12|Z[e.charCodeAt(_+2)]<<6|Z[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Z[e.charCodeAt(_)]<<2|Z[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=Z[e.charCodeAt(_)]<<10|Z[e.charCodeAt(_+1)]<<4|Z[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function id(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function sd(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(id(s));return c.join("")}function cd(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,d=t-s;m<d;m+=p)c.push(sd(e,m,m+p>d?d:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var jr=b(at=>{n();at.read=function(e,o,t,s,c){var p,m,d=c*8-s-1,_=(1<<d)-1,g=_>>1,x=-7,S=t?c-1:0,A=t?-1:1,R=e[o+S];for(S+=A,p=R&(1<<-x)-1,R>>=-x,x+=d;x>0;p=p*256+e[o+S],S+=A,x-=8);for(m=p&(1<<-x)-1,p>>=-x,x+=s;x>0;m=m*256+e[o+S],S+=A,x-=8);if(p===0)p=1-g;else{if(p===_)return m?NaN:(R?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(R?-1:1)*m*Math.pow(2,p-s)};at.write=function(e,o,t,s,c,p){var m,d,_,g=p*8-c-1,x=(1<<g)-1,S=x>>1,A=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,R=s?0:p-1,J=s?1:-1,we=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+S>=1?o+=A/_:o+=A*Math.pow(2,1-S),o*_>=2&&(m++,_/=2),m+S>=x?(d=0,m=x):m+S>=1?(d=(o*_-1)*Math.pow(2,c),m=m+S):(d=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+R]=d&255,R+=J,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+R]=m&255,R+=J,m/=256,g-=8);e[t+R-J]|=we*128}});var ia=b(Xe=>{"use strict";n();var it=zr(),Ke=jr(),Kr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Xe.Buffer=l;Xe.SlowBuffer=ud;Xe.INSPECT_MAX_BYTES=50;var Jo=2147483647;Xe.kMaxLength=Jo;l.TYPED_ARRAY_SUPPORT=pd();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function pd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function ue(e){if(e>Jo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return mt(e)}return Jr(e,o,t)}l.poolSize=8192;function Jr(e,o,t){if(typeof e=="string")return dd(e,o);if(ArrayBuffer.isView(e))return ld(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return ct(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return l.from(s,o,t);var c=_d(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return Jr(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Zr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function md(e,o,t){return Zr(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}l.alloc=function(e,o,t){return md(e,o,t)};function mt(e){return Zr(e),ue(e<0?0:dt(e)|0)}l.allocUnsafe=function(e){return mt(e)};l.allocUnsafeSlow=function(e){return mt(e)};function dd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Qr(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function st(e){for(var o=e.length<0?0:dt(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function ld(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return ct(o.buffer,o.byteOffset,o.byteLength)}return st(e)}function ct(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,l.prototype),s}function _d(e){if(l.isBuffer(e)){var o=dt(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||lt(e.length)?ue(0):st(e);if(e.type==="Buffer"&&Array.isArray(e.data))return st(e.data)}function dt(e){if(e>=Jo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Jo.toString(16)+" bytes");return e|0}function ud(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(ie(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=l.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?l.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(l.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Qr(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return pt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return aa(e).length;default:if(c)return s?-1:pt(e).length;o=(""+o).toLowerCase(),c=!0}}l.byteLength=Qr;function gd(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Id(this,o,t);case"utf8":case"utf-8":return oa(this,o,t);case"ascii":return wd(this,o,t);case"latin1":case"binary":return vd(this,o,t);case"base64":return bd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return kd(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}l.prototype._isBuffer=!0;function Ee(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ee(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ee(this,t,t+3),Ee(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ee(this,t,t+7),Ee(this,t+1,t+6),Ee(this,t+2,t+5),Ee(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?oa(this,0,o):gd.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=Xe.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Kr&&(l.prototype[Kr]=l.prototype.inspect);l.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=s-t,_=Math.min(m,d),g=this.slice(c,p),x=o.slice(t,s),S=0;S<_;++S)if(g[S]!==x[S]){m=g[S],d=x[S];break}return m<d?-1:d<m?1:0};function ea(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,lt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,s)),l.isBuffer(o))return o.length===0?-1:Xr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Xr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Xr(e,o,t,s,c){var p=1,m=e.length,d=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(R,J){return p===1?R[J]:R.readUInt16BE(J*p)}var g;if(c){var x=-1;for(g=t;g<m;g++)if(_(e,g)===_(o,x===-1?0:g-x)){if(x===-1&&(x=g),g-x+1===d)return x*p}else x!==-1&&(g-=g-x),x=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var S=!0,A=0;A<d;A++)if(_(e,g+A)!==_(o,A)){S=!1;break}if(S)return g}return-1}l.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};l.prototype.indexOf=function(o,t,s){return ea(this,o,t,s,!0)};l.prototype.lastIndexOf=function(o,t,s){return ea(this,o,t,s,!1)};function fd(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var d=parseInt(o.substr(m*2,2),16);if(lt(d))return m;e[t+m]=d}return m}function Td(e,o,t,s){return Zo(pt(o,e.length-t),e,t,s)}function hd(e,o,t,s){return Zo(Cd(o),e,t,s)}function xd(e,o,t,s){return Zo(aa(o),e,t,s)}function yd(e,o,t,s){return Zo(Pd(o,e.length-t),e,t,s)}l.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return fd(this,o,t,s);case"utf8":case"utf-8":return Td(this,o,t,s);case"ascii":case"latin1":case"binary":return hd(this,o,t,s);case"base64":return xd(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yd(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function bd(e,o,t){return o===0&&t===e.length?it.fromByteArray(e):it.fromByteArray(e.slice(o,t))}function oa(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var _,g,x,S;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(S=(p&31)<<6|_&63,S>127&&(m=S));break;case 3:_=e[c+1],g=e[c+2],(_&192)===128&&(g&192)===128&&(S=(p&15)<<12|(_&63)<<6|g&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:_=e[c+1],g=e[c+2],x=e[c+3],(_&192)===128&&(g&192)===128&&(x&192)===128&&(S=(p&15)<<18|(_&63)<<12|(g&63)<<6|x&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=d}return Sd(s)}var Yr=4096;function Sd(e){var o=e.length;if(o<=Yr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Yr));return t}function wd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function vd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Id(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Ed[e[p]];return c}function kd(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}l.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,l.prototype),c};function U(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};l.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||U(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||U(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||U(o,4,this.length),Ke.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||U(o,4,this.length),Ke.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||U(o,8,this.length),Ke.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||U(o,8,this.length),Ke.read(this,o,!1,52,8)};function q(e,o,t,s,c,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=1,d=0;for(this[t]=o&255;++d<s&&(m*=256);)this[t+d]=o/m&255;return t+s};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=s-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+s};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=0,d=1,_=0;for(this[t]=o&255;++m<s&&(d*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=s-1,d=1,_=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+s};l.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function na(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ta(e,o,t,s,c){return o=+o,t=t>>>0,c||na(e,o,t,4,34028234663852886e22,-34028234663852886e22),Ke.write(e,o,t,s,23,4),t+4}l.prototype.writeFloatLE=function(o,t,s){return ta(this,o,t,!0,s)};l.prototype.writeFloatBE=function(o,t,s){return ta(this,o,t,!1,s)};function ra(e,o,t,s,c){return o=+o,t=t>>>0,c||na(e,o,t,8,17976931348623157e292,-17976931348623157e292),Ke.write(e,o,t,s,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,s){return ra(this,o,t,!0,s)};l.prototype.writeDoubleBE=function(o,t,s){return ra(this,o,t,!1,s)};l.prototype.copy=function(o,t,s,c){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};l.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var d=l.isBuffer(o)?o:l.from(o,c),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=d[m%_]}return this};var Ad=/[^+/0-9A-Za-z-_]/g;function Ld(e){if(e=e.split("=")[0],e=e.trim().replace(Ad,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function pt(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Cd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Pd(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function aa(e){return it.toByteArray(Ld(e))}function Zo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function lt(e){return e!==e}var Ed=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var da=b((Dx,ma)=>{n();var M=ma.exports={},se,ce;function _t(){throw new Error("setTimeout has not been defined")}function ut(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=_t}catch(e){se=_t}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=ut}catch(e){ce=ut}})();function sa(e){if(se===setTimeout)return setTimeout(e,0);if((se===_t||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function Nd(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===ut||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var ge=[],Ye=!1,Ne,Qo=-1;function Dd(){!Ye||!Ne||(Ye=!1,Ne.length?ge=Ne.concat(ge):Qo=-1,ge.length&&ca())}function ca(){if(!Ye){var e=sa(Dd);Ye=!0;for(var o=ge.length;o;){for(Ne=ge,ge=[];++Qo<o;)Ne&&Ne[Qo].run();Qo=-1,o=ge.length}Ne=null,Ye=!1,Nd(e)}}M.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new pa(e,o)),ge.length===1&&!Ye&&sa(ca)};function pa(e,o){this.fun=e,this.array=o}pa.prototype.run=function(){this.fun.apply(null,this.array)};M.title="browser";M.browser=!0;M.env={};M.argv=[];M.version="";M.versions={};function fe(){}M.on=fe;M.addListener=fe;M.once=fe;M.off=fe;M.removeListener=fe;M.removeAllListeners=fe;M.emit=fe;M.prependListener=fe;M.prependOnceListener=fe;M.listeners=function(e){return[]};M.binding=function(e){throw new Error("process.binding is not supported")};M.cwd=function(){return"/"};M.chdir=function(e){throw new Error("process.chdir is not supported")};M.umask=function(){return 0}});var r,i,Rd,a,n=T(()=>{r=f(ia()),i=f(da()),Rd=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Rd});var Te,De=T(()=>{"use strict";n();Te=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var gt={};H(gt,{css:()=>_a,default:()=>Md});var _a,Md,ft=T(()=>{"use strict";n();_a=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_a));Md={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ga=T(()=>{"use strict";n()});var pe=T(()=>{"use strict";n()});var fa=T(()=>{"use strict";n()});var ht,Ta=T(()=>{"use strict";n();ht=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(ht||{})});var ha=T(()=>{"use strict";n()});var xt=T(()=>{"use strict";n()});var xa=T(()=>{"use strict";n()});var yt=T(()=>{"use strict";n()});var ya=T(()=>{"use strict";n()});var ba=T(()=>{"use strict";n()});var Re,Je,ve=T(()=>{"use strict";n();Re=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Je=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Q,Sa,ey,wa,oy,P=T(()=>{"use strict";n();ve();Q=(d=>(d.pending="pending",d.fail="fail",d.invalid="invalid",d.success="success",d.executed="executed",d.notExecuted="not executed",d.rewardReverted="reward-reverted",d))(Q||{}),Sa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Sa||{}),ey=u(u({},Je.WindowProviderRequestEnums),Sa),wa=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(wa||{}),oy=u(u({},Je.WindowProviderResponseEnums),wa)});var va=T(()=>{"use strict";n()});var Ia=T(()=>{"use strict";n()});var z=T(()=>{"use strict";n()});var ka=T(()=>{"use strict";n()});var Aa=T(()=>{"use strict";n()});var La=T(()=>{"use strict";n()});var E=T(()=>{"use strict";n();yt();ya();ba();P();va();Ia();z();ka();Aa();La()});var Ze,Ca,hy,Pa,xy,Ea,yy,by,Ud,Qe=T(()=>{"use strict";n();E();Ze={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ca,egldLabel:hy}=Ze["devnet"],{chainId:Pa,egldLabel:xy}=Ze["testnet"],{chainId:Ea,egldLabel:yy}=Ze["mainnet"],by={["devnet"]:Ca,["testnet"]:Pa,["mainnet"]:Ea},Ud={[Ca]:"devnet",[Pa]:"testnet",[Ea]:"mainnet"}});var on=T(()=>{"use strict";n()});var me,Na=T(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-provider")});var Me,bo=T(()=>{"use strict";n();Me=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Da,Ra,bt,Ay,Ly,St=T(()=>{"use strict";n();bo();bt=String((Ra=(Da=Me.safeWindow)==null?void 0:Da.navigator)==null?void 0:Ra.userAgent),Ay=/^((?!chrome|android).)*safari/i.test(bt),Ly=/firefox/i.test(bt)&&/windows/i.test(bt)});var nn,tn,Ma,rn,Oa,eo,Ba,v=T(()=>{"use strict";n();ga();pe();fa();Ta();ha();xt();xa();Qe();on();Na();St();nn=5e4,tn=1e9,Ma=1,rn="logout",Oa="login",eo="0",Ba="..."});var So,cn=T(()=>{"use strict";n();So=()=>Date.now()/1e3});var Wa=T(()=>{"use strict";n()});var Ga=T(()=>{"use strict";n()});var vt=T(()=>{"use strict";n();cn();Wa();Ga()});var It={};H(It,{clear:()=>$d,getItem:()=>Gd,localStorageKeys:()=>Ie,removeItem:()=>Hd,setItem:()=>Wd});var Ie,pn,Wd,Gd,Hd,$d,oo=T(()=>{"use strict";n();vt();Ie={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},pn=typeof localStorage!="undefined",Wd=({key:e,data:o,expires:t})=>{!pn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Gd=e=>{if(!pn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:So()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Hd=e=>{!pn||localStorage.removeItem(String(e))},$d=()=>{!pn||localStorage.clear()}});var kt={};H(kt,{clear:()=>qa,getItem:()=>$a,removeItem:()=>Va,setItem:()=>Ha,storage:()=>Vd});var Ha,$a,Va,qa,Vd,za=T(()=>{"use strict";n();Ha=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},$a=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Va=e=>sessionStorage.removeItem(String(e)),qa=()=>sessionStorage.clear(),Vd={setItem:Ha,getItem:$a,removeItem:Va,clear:qa}});var Oe,no=T(()=>{"use strict";n();oo();za();Oe={session:kt,local:It}});var At,N,K,D=T(()=>{"use strict";n();At=require("@reduxjs/toolkit");v();N=(0,At.createAction)(rn),K=(0,At.createAction)(Oa,e=>({payload:e}))});var Ct,ja,Ka,mn,Lt,Xa,dn,qd,Pt,sb,zd,jd,cb,pb,mb,Kd,Xd,ln,_n=T(()=>{"use strict";n();Ct=require("@multiversx/sdk-core"),ja=require("@reduxjs/toolkit"),Ka=require("redux-persist");v();no();oo();D();mn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:eo},Lt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":mn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Xa=(0,ja.createSlice)({name:"accountInfoSlice",initialState:Lt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Ct.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:mn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(N,()=>(Oe.local.removeItem(Ie.loginExpiresAt),Lt)),e.addCase(K,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new Ct.Address(s).hex()}),e.addCase(Ka.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:Lt.accounts,o.publicKey=d})}}),{setAccount:dn,setAddress:qd,setAccountNonce:Pt,setAccountShard:sb,setLedgerAccount:zd,updateLedgerAccount:jd,setWalletConnectAccount:cb,setIsAccountLoading:pb,setAccountLoadingError:mb,setWebsocketEvent:Kd,setWebsocketBatchEvent:Xd}=Xa.actions,ln=Xa.reducer});function wo(){return new Date().setHours(new Date().getHours()+24)}function vo(e){Oe.local.setItem({key:Ie.loginExpiresAt,data:e,expires:e})}var Et=T(()=>{"use strict";n();no();oo()});var Ja,Ya,Za,yb,Yd,Jd,Qa,bb,Zd,ei,Sb,wb,vb,un,gn=T(()=>{"use strict";n();Ja=require("@reduxjs/toolkit");Et();P();D();Ya={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Za=(0,Ja.createSlice)({name:"loginInfoSlice",initialState:Ya,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(N,()=>Ya),e.addCase(K,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,vo(wo())})}}),{setLoginMethod:yb,setWalletConnectLogin:Yd,setLedgerLogin:Jd,setTokenLogin:Qa,setTokenLoginSignature:bb,setWalletLogin:Zd,invalidateLoginSession:ei,setLogoutRoute:Sb,setIsWalletConnectV2Initialized:wb,setWebviewLogin:vb}=Za.actions,un=Za.reducer});var ni,oi,ti,Lb,Qd,Cb,el,fn,Tn=T(()=>{"use strict";n();ni=require("@reduxjs/toolkit");D();oi={},ti=(0,ni.createSlice)({name:"modalsSlice",initialState:oi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(N,()=>oi)}}),{setTxSubmittedModal:Lb,setNotificationModal:Qd,clearTxSubmittedModal:Cb,clearNotificationModal:el}=ti.actions,fn=ti.reducer});var O,G=T(()=>{"use strict";n();De();O=()=>{if(!Te())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var ri=T(()=>{"use strict";n();G()});var ai=T(()=>{"use strict";n();$()});var ii=T(()=>{"use strict";n();bo()});var $=T(()=>{"use strict";n();ri();ai();G();ii()});var Io=T(()=>{"use strict";n();$()});var ci=T(()=>{"use strict";n();Io()});function pi(e){return e[Math.floor(Math.random()*e.length)]}var mi=T(()=>{"use strict";n()});var Nt=T(()=>{"use strict";n();xt()});var he=T(()=>{"use strict";n();ci();mi();Nt()});var di,li,_i,Dt,nl,ui,sS,cS,tl,hn,xn=T(()=>{"use strict";n();di=require("@reduxjs/toolkit"),li=f(require("lodash.omit")),_i=require("redux-persist");on();D();he();Dt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},nl={network:Dt},ui=(0,di.createSlice)({name:"appConfig",initialState:nl,reducers:{initializeNetworkConfig:(e,o)=>{let t=pi(o.payload.walletConnectV2RelayAddresses),s=(0,li.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(N,o=>{o.network.customWalletAddress=void 0}),e.addCase(_i.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:sS,updateNetworkConfig:cS,setCustomWalletAddress:tl}=ui.actions,hn=ui.reducer});var gi,Rt,fi,uS,gS,fS,yn,bn=T(()=>{"use strict";n();gi=require("@reduxjs/toolkit");E();D();Rt={isSigning:!1,signedSessions:{}},fi=(0,gi.createSlice)({name:"signedMessageInfoSliceState",initialState:Rt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Rt},extraReducers:e=>{e.addCase(N,()=>Rt)}}),{setSignSession:uS,clearSignedMessageInfo:gS,setSignSessionState:fS}=fi.actions,yn=fi.reducer});var hi,xi,Ti,yi,rl,al,wS,il,Sn,wn=T(()=>{"use strict";n();hi=require("@reduxjs/toolkit"),xi=require("redux-persist");E();cn();D();Ti={customToasts:[],transactionToasts:[]},yi=(0,hi.createSlice)({name:"toastsSlice",initialState:Ti,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:So(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(N,()=>Ti),e.addCase(xi.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:rl,removeCustomToast:al,addTransactionToast:wS,removeTransactionToast:il}=yi.actions,Sn=yi.reducer});var bi,Ot,Bt,Ft,sl,Mt,Si,AS,cl,Ut,vn,In=T(()=>{"use strict";n();bi=require("@reduxjs/toolkit");D();Ot="Transaction failed",Bt="Transaction successful",Ft="Processing transaction",sl="Transaction submitted",Mt={},Si=(0,bi.createSlice)({name:"transactionsInfo",initialState:Mt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Ot,successMessage:(s==null?void 0:s.successMessage)||Bt,processingMessage:(s==null?void 0:s.processingMessage)||Ft,submittedMessage:(s==null?void 0:s.submittedMessage)||sl,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Mt},extraReducers:e=>{e.addCase(N,()=>Mt)}}),{clearTransactionsInfo:AS,setTransactionsDisplayInfo:cl,clearTransactionsInfoForSessionId:Ut}=Si.actions,vn=Si.reducer});function to(e){return e!=null&&(hl(e)||kn(e))}function ro(e){return e!=null&&(xl(e)||wl(e))}function ao(e){return e!=null&&(yl(e)||vl(e))}function wi(e){return e!=null&&(bl(e)||Il(e))}function Wt(e){return e!=null&&Sl(e)}function hl(e){return e!=null&&pl.includes(e)}function xl(e){return e!=null&&ml.includes(e)}function yl(e){return e!=null&&dl.includes(e)}function bl(e){return e!=null&&ll.includes(e)}function Sl(e){return e!=null&&_l.includes(e)}function kn(e){return e!=null&&ul.includes(e)}function wl(e){return e!=null&&gl.includes(e)}function vl(e){return e!=null&&fl.includes(e)}function Il(e){return e!=null&&Tl.includes(e)}var pl,ml,dl,ll,_l,ul,gl,fl,Tl,Be=T(()=>{"use strict";n();P();pl=["sent"],ml=["success"],dl=["fail","cancelled","timedOut"],ll=["invalid"],_l=["timedOut"],ul=["pending"],gl=["success"],fl=["fail","invalid"],Tl=["not executed"]});var vi,Ii,ko,kl,ki,Ai,Li,Al,An,Ll,Cl,OS,Pl,Ao,Gt,BS,Ln,Cn=T(()=>{"use strict";n();vi=require("@reduxjs/toolkit"),Ii=require("redux-persist");P();Be();D();ko={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},kl={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ki=(0,vi.createSlice)({name:"transactionsSlice",initialState:ko,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},kl),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=ko.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,x,S,A,R,J,we,Ko;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(x=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:x.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(oe=>oe.hash===p?w(u(u({},m!=null?m:{}),oe),{status:s,errorMessage:c,inTransit:d}):oe);let et=(A=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:A.every(oe=>ro(oe.status)),ot=(J=(R=e.signedTransactions[t])==null?void 0:R.transactions)==null?void 0:J.some(oe=>ao(oe.status)),nt=(Ko=(we=e.signedTransactions[t])==null?void 0:we.transactions)==null?void 0:Ko.every(oe=>wi(oe.status));et&&(e.signedTransactions[t].status="success"),ot&&(e.signedTransactions[t].status="fail"),nt&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=ko.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=ko.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(N,()=>ko),e.addCase(Ii.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((d,[_,g])=>{let x=new Date(_),S=new Date;return S.setHours(S.getHours()+5),S-x>0||(d[_]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ai,updateSignedTransactions:Li,setTransactionsToSign:Al,clearAllTransactionsToSign:An,clearAllSignedTransactions:Ll,clearSignedTransaction:Cl,clearTransactionToSign:OS,setSignTransactionsError:Pl,setSignTransactionsCancelMessage:Ao,moveTransactionsToSignedState:Gt,updateSignedTransactionsCustomTransactionInformation:BS}=ki.actions,Ln=ki.reducer});var Ci,Ht,Pi,GS,HS,El,$S,Pn,En=T(()=>{"use strict";n();Ci=require("@reduxjs/toolkit");D();Ht={},Pi=(0,Ci.createSlice)({name:"batchTransactionsSlice",initialState:Ht,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ht},extraReducers:e=>{e.addCase(N,()=>Ht)}}),{setBatchTransactions:GS,updateBatchTransactions:HS,clearBatchTransactions:El,clearAllBatchTransactions:$S}=Pi.actions,Pn=Pi.reducer});var Ni,Ei,Di,jS,Ri,$t=T(()=>{"use strict";n();Ni=require("@reduxjs/toolkit");D();Ei={},Di=(0,Ni.createSlice)({name:"dappConfigSlice",initialState:Ei,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(N,()=>Ei)}}),{setDappConfig:jS}=Di.actions,Ri=Di.reducer});var L=T(()=>{"use strict";n();_n();gn();Tn();xn();bn();wn();In();Cn();En();$t()});var Vt=T(()=>{"use strict";n()});var Bi,Ml,Ol,Fe,Rn=T(()=>{"use strict";n();Bi=require("@reduxjs/toolkit");Vt();_n();En();$t();gn();Tn();xn();bn();wn();In();Cn();Ml={["account"]:ln,["dappConfig"]:Ri,["loginInfo"]:un,["modals"]:fn,["networkConfig"]:hn,["signedMessageInfo"]:yn,["toasts"]:Sn,["transactionsInfo"]:vn,["transactions"]:Ln,["batchTransactions"]:Pn},Ol=(e={})=>(0,Bi.combineReducers)(u(u({},Ml),e)),Fe=Ol});var Gi={};H(Gi,{default:()=>Zl,sessionStorageReducers:()=>qt});function xe(e,o=[]){return{key:e,version:1,storage:Ui.default,blacklist:o}}var j,Fi,Ui,Bl,Lo,Fl,Ul,Wl,Gl,Hl,$l,Vl,ql,zl,jl,Wi,Kl,qt,Xl,Yl,Jl,Zl,Hi=T(()=>{"use strict";n();j=require("redux-persist"),Fi=f(require("redux-persist/lib/storage")),Ui=f(require("redux-persist/lib/storage/session"));Rn();L();_n();En();gn();Tn();xn();bn();wn();In();Cn();Vt();Bl={persistReducersStorageType:"localStorage"},Lo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Fl=xe(Lo["account"]),Ul=xe(Lo["loginInfo"]),Wl=xe(Lo["modals"]),Gl=xe(Lo["networkConfig"]),Hl={2:e=>w(u({},e),{networkConfig:Dt})};$l=xe("sdk-dapp-transactionsInfo"),Vl=xe("sdk-dapp-transactions",["transactionsToSign"]),ql=xe("sdk-dapp-batchTransactions",["batchTransactions"]),zl=xe("sdk-dapp-toasts"),jl=xe("sdk-dapp-signedMessageInfo"),Wi={key:"sdk-dapp-store",version:2,storage:Fi.default,whitelist:Object.keys(Lo),migrate:(0,j.createMigrate)(Hl,{debug:!1})},Kl=w(u({},Wi),{whitelist:[]}),qt={["toasts"]:(0,j.persistReducer)(zl,Sn),["transactions"]:(0,j.persistReducer)(Vl,Ln),["transactionsInfo"]:(0,j.persistReducer)($l,vn),["batchTransactions"]:(0,j.persistReducer)(ql,Pn),["signedMessageInfo"]:(0,j.persistReducer)(jl,yn)},Xl=w(u({},qt),{["account"]:(0,j.persistReducer)(Fl,ln),["loginInfo"]:(0,j.persistReducer)(Ul,un),["modals"]:(0,j.persistReducer)(Wl,fn),["networkConfig"]:(0,j.persistReducer)(Gl,hn)}),Yl=Bl.persistReducersStorageType==="localStorage",Jl=Yl?(0,j.persistReducer)(Wi,Fe(qt)):(0,j.persistReducer)(Kl,Fe(Xl)),Zl=Jl});var $i={};H($i,{default:()=>Ql});var Ql,Vi=T(()=>{"use strict";n();Rn();Ql=Fe()});var qi={};H(qi,{default:()=>o_});var ee,e_,o_,zi=T(()=>{"use strict";n();ee=require("redux-persist"),e_=[ee.FLUSH,ee.REHYDRATE,ee.PAUSE,ee.PERSIST,ee.PURGE,ee.REGISTER],o_=e_});var Xi={};H(Xi,{default:()=>Ki});function Ki(e){return(0,ji.persistStore)(e)}var ji,Yi=T(()=>{"use strict";n();ji=require("redux-persist")});var pr={};H(pr,{css:()=>Ms,default:()=>Ou});var Ms,Ou,mr=T(()=>{"use strict";n();Ms=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ms));Ou={copy:"dapp-core-component__copyButton-styles__copy"}});var lr={};H(lr,{css:()=>Fs,default:()=>Fu});var Fs,Fu,_r=T(()=>{"use strict";n();Fs=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fs));Fu={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var ec=b((C3,Qs)=>{n();var tg=typeof a=="object"&&a&&a.Object===Object&&a;Qs.exports=tg});var Mo=b((P3,oc)=>{n();var rg=ec(),ag=typeof self=="object"&&self&&self.Object===Object&&self,ig=rg||ag||Function("return this")();oc.exports=ig});var fr=b((E3,nc)=>{n();var sg=Mo(),cg=sg.Symbol;nc.exports=cg});var ic=b((N3,ac)=>{n();var tc=fr(),rc=Object.prototype,pg=rc.hasOwnProperty,mg=rc.toString,Oo=tc?tc.toStringTag:void 0;function dg(e){var o=pg.call(e,Oo),t=e[Oo];try{e[Oo]=void 0;var s=!0}catch(p){}var c=mg.call(e);return s&&(o?e[Oo]=t:delete e[Oo]),c}ac.exports=dg});var cc=b((D3,sc)=>{n();var lg=Object.prototype,_g=lg.toString;function ug(e){return _g.call(e)}sc.exports=ug});var Tr=b((R3,dc)=>{n();var pc=fr(),gg=ic(),fg=cc(),Tg="[object Null]",hg="[object Undefined]",mc=pc?pc.toStringTag:void 0;function xg(e){return e==null?e===void 0?hg:Tg:mc&&mc in Object(e)?gg(e):fg(e)}dc.exports=xg});var _c=b((M3,lc)=>{n();var yg=Array.isArray;lc.exports=yg});var gc=b((O3,uc)=>{n();function bg(e){return e!=null&&typeof e=="object"}uc.exports=bg});var Tc=b((B3,fc)=>{n();var Sg=Tr(),wg=_c(),vg=gc(),Ig="[object String]";function kg(e){return typeof e=="string"||!wg(e)&&vg(e)&&Sg(e)==Ig}fc.exports=kg});var Xn=b((O5,Sc)=>{n();function qg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Sc.exports=qg});var vc=b((B5,wc)=>{n();var zg=Tr(),jg=Xn(),Kg="[object AsyncFunction]",Xg="[object Function]",Yg="[object GeneratorFunction]",Jg="[object Proxy]";function Zg(e){if(!jg(e))return!1;var o=zg(e);return o==Xg||o==Yg||o==Kg||o==Jg}wc.exports=Zg});var kc=b((F5,Ic)=>{n();var Qg=Mo(),ef=Qg["__core-js_shared__"];Ic.exports=ef});var Cc=b((U5,Lc)=>{n();var br=kc(),Ac=function(){var e=/[^.]+$/.exec(br&&br.keys&&br.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function of(e){return!!Ac&&Ac in e}Lc.exports=of});var Ec=b((W5,Pc)=>{n();var nf=Function.prototype,tf=nf.toString;function rf(e){if(e!=null){try{return tf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Pc.exports=rf});var Dc=b((G5,Nc)=>{n();var af=vc(),sf=Cc(),cf=Xn(),pf=Ec(),mf=/[\\^$.*+?()[\]{}|]/g,df=/^\[object .+?Constructor\]$/,lf=Function.prototype,_f=Object.prototype,uf=lf.toString,gf=_f.hasOwnProperty,ff=RegExp("^"+uf.call(gf).replace(mf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Tf(e){if(!cf(e)||sf(e))return!1;var o=af(e)?ff:df;return o.test(pf(e))}Nc.exports=Tf});var Mc=b((H5,Rc)=>{n();function hf(e,o){return e==null?void 0:e[o]}Rc.exports=hf});var Yn=b(($5,Oc)=>{n();var xf=Dc(),yf=Mc();function bf(e,o){var t=yf(e,o);return xf(t)?t:void 0}Oc.exports=bf});var Bo=b((V5,Bc)=>{n();var Sf=Yn(),wf=Sf(Object,"create");Bc.exports=wf});var Wc=b((q5,Uc)=>{n();var Fc=Bo();function vf(){this.__data__=Fc?Fc(null):{},this.size=0}Uc.exports=vf});var Hc=b((z5,Gc)=>{n();function If(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Gc.exports=If});var Vc=b((j5,$c)=>{n();var kf=Bo(),Af="__lodash_hash_undefined__",Lf=Object.prototype,Cf=Lf.hasOwnProperty;function Pf(e){var o=this.__data__;if(kf){var t=o[e];return t===Af?void 0:t}return Cf.call(o,e)?o[e]:void 0}$c.exports=Pf});var zc=b((K5,qc)=>{n();var Ef=Bo(),Nf=Object.prototype,Df=Nf.hasOwnProperty;function Rf(e){var o=this.__data__;return Ef?o[e]!==void 0:Df.call(o,e)}qc.exports=Rf});var Kc=b((X5,jc)=>{n();var Mf=Bo(),Of="__lodash_hash_undefined__";function Bf(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Mf&&o===void 0?Of:o,this}jc.exports=Bf});var Yc=b((Y5,Xc)=>{n();var Ff=Wc(),Uf=Hc(),Wf=Vc(),Gf=zc(),Hf=Kc();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}lo.prototype.clear=Ff;lo.prototype.delete=Uf;lo.prototype.get=Wf;lo.prototype.has=Gf;lo.prototype.set=Hf;Xc.exports=lo});var Zc=b((J5,Jc)=>{n();function $f(){this.__data__=[],this.size=0}Jc.exports=$f});var ep=b((Z5,Qc)=>{n();function Vf(e,o){return e===o||e!==e&&o!==o}Qc.exports=Vf});var Fo=b((Q5,op)=>{n();var qf=ep();function zf(e,o){for(var t=e.length;t--;)if(qf(e[t][0],o))return t;return-1}op.exports=zf});var tp=b((eO,np)=>{n();var jf=Fo(),Kf=Array.prototype,Xf=Kf.splice;function Yf(e){var o=this.__data__,t=jf(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():Xf.call(o,t,1),--this.size,!0}np.exports=Yf});var ap=b((oO,rp)=>{n();var Jf=Fo();function Zf(e){var o=this.__data__,t=Jf(o,e);return t<0?void 0:o[t][1]}rp.exports=Zf});var sp=b((nO,ip)=>{n();var Qf=Fo();function eT(e){return Qf(this.__data__,e)>-1}ip.exports=eT});var pp=b((tO,cp)=>{n();var oT=Fo();function nT(e,o){var t=this.__data__,s=oT(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}cp.exports=nT});var dp=b((rO,mp)=>{n();var tT=Zc(),rT=tp(),aT=ap(),iT=sp(),sT=pp();function _o(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}_o.prototype.clear=tT;_o.prototype.delete=rT;_o.prototype.get=aT;_o.prototype.has=iT;_o.prototype.set=sT;mp.exports=_o});var _p=b((aO,lp)=>{n();var cT=Yn(),pT=Mo(),mT=cT(pT,"Map");lp.exports=mT});var fp=b((iO,gp)=>{n();var up=Yc(),dT=dp(),lT=_p();function _T(){this.size=0,this.__data__={hash:new up,map:new(lT||dT),string:new up}}gp.exports=_T});var hp=b((sO,Tp)=>{n();function uT(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Tp.exports=uT});var Uo=b((cO,xp)=>{n();var gT=hp();function fT(e,o){var t=e.__data__;return gT(o)?t[typeof o=="string"?"string":"hash"]:t.map}xp.exports=fT});var bp=b((pO,yp)=>{n();var TT=Uo();function hT(e){var o=TT(this,e).delete(e);return this.size-=o?1:0,o}yp.exports=hT});var wp=b((mO,Sp)=>{n();var xT=Uo();function yT(e){return xT(this,e).get(e)}Sp.exports=yT});var Ip=b((dO,vp)=>{n();var bT=Uo();function ST(e){return bT(this,e).has(e)}vp.exports=ST});var Ap=b((lO,kp)=>{n();var wT=Uo();function vT(e,o){var t=wT(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}kp.exports=vT});var Cp=b((_O,Lp)=>{n();var IT=fp(),kT=bp(),AT=wp(),LT=Ip(),CT=Ap();function uo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}uo.prototype.clear=IT;uo.prototype.delete=kT;uo.prototype.get=AT;uo.prototype.has=LT;uo.prototype.set=CT;Lp.exports=uo});var Ep=b((uO,Pp)=>{n();var PT="__lodash_hash_undefined__";function ET(e){return this.__data__.set(e,PT),this}Pp.exports=ET});var Dp=b((gO,Np)=>{n();function NT(e){return this.__data__.has(e)}Np.exports=NT});var Mp=b((fO,Rp)=>{n();var DT=Cp(),RT=Ep(),MT=Dp();function Jn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new DT;++o<t;)this.add(e[o])}Jn.prototype.add=Jn.prototype.push=RT;Jn.prototype.has=MT;Rp.exports=Jn});var Bp=b((TO,Op)=>{n();function OT(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Op.exports=OT});var Up=b((hO,Fp)=>{n();function BT(e){return e!==e}Fp.exports=BT});var Gp=b((xO,Wp)=>{n();function FT(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Wp.exports=FT});var $p=b((yO,Hp)=>{n();var UT=Bp(),WT=Up(),GT=Gp();function HT(e,o,t){return o===o?GT(e,o,t):UT(e,WT,t)}Hp.exports=HT});var qp=b((bO,Vp)=>{n();var $T=$p();function VT(e,o){var t=e==null?0:e.length;return!!t&&$T(e,o,0)>-1}Vp.exports=VT});var jp=b((SO,zp)=>{n();function qT(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}zp.exports=qT});var Xp=b((wO,Kp)=>{n();function zT(e,o){return e.has(o)}Kp.exports=zT});var Jp=b((vO,Yp)=>{n();var jT=Yn(),KT=Mo(),XT=jT(KT,"Set");Yp.exports=XT});var Qp=b((IO,Zp)=>{n();function YT(){}Zp.exports=YT});var Sr=b((kO,em)=>{n();function JT(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}em.exports=JT});var nm=b((AO,om)=>{n();var wr=Jp(),ZT=Qp(),QT=Sr(),eh=1/0,oh=wr&&1/QT(new wr([,-0]))[1]==eh?function(e){return new wr(e)}:ZT;om.exports=oh});var rm=b((LO,tm)=>{n();var nh=Mp(),th=qp(),rh=jp(),ah=Xp(),ih=nm(),sh=Sr(),ch=200;function ph(e,o,t){var s=-1,c=th,p=e.length,m=!0,d=[],_=d;if(t)m=!1,c=rh;else if(p>=ch){var g=o?null:ih(e);if(g)return sh(g);m=!1,c=ah,_=new nh}else _=o?[]:d;e:for(;++s<p;){var x=e[s],S=o?o(x):x;if(x=t||x!==0?x:0,m&&S===S){for(var A=_.length;A--;)if(_[A]===S)continue e;o&&_.push(S),d.push(x)}else c(_,S,t)||(_!==d&&_.push(S),d.push(x))}return d}tm.exports=ph});var im=b((CO,am)=>{n();var mh=rm();function dh(e){return e&&e.length?mh(e):[]}am.exports=dh});var be={};H(be,{css:()=>Tm,default:()=>jh});var Tm,jh,Se=T(()=>{"use strict";n();Tm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tm));jh={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Nr={};H(Nr,{css:()=>Cm,default:()=>_x});var Cm,_x,Dr=T(()=>{"use strict";n();Cm=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cm));_x={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var $o={};H($o,{css:()=>Nm,default:()=>gx});var Nm,gx,Vo=T(()=>{"use strict";n();Nm=`.dapp-core-component__transactionDetails-styles__title {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nm));gx={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var Or={};H(Or,{css:()=>Om,default:()=>bx});var Om,bx,Br=T(()=>{"use strict";n();Om=`.dapp-core-component__transactionToast-styles__content {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Om));bx={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var qo={};H(qo,{css:()=>Fm,default:()=>wx});var Fm,wx,zo=T(()=>{"use strict";n();Fm=`.dapp-core-component__transactionsToastList-styles__toasts {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fm));wx={toasts:"dapp-core-component__transactionsToastList-styles__toasts",toastWrapper:"dapp-core-component__transactionsToastList-styles__toastWrapper",loader:"dapp-core-component__transactionsToastList-styles__loader"}});var Ur={};H(Ur,{css:()=>Gm,default:()=>Ix});var Gm,Ix,Wr=T(()=>{"use strict";n();Gm=`.dapp-core-component__customToast-styles__close {
  position: absolute;
  top: 0.75rem;
  right: 0.4rem;
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gm));Ix={close:"dapp-core-component__customToast-styles__close"}});var Lx={};H(Lx,{CustomComponentToast:()=>Ax});module.exports=F(Lx);n();var Qn=f(require("react")),$m=f(require("classnames"));n();var ua=f(require("react"));n();var yo=f(require("react"));n();De();var la=()=>!Te();var Od=()=>h(void 0,null,function*(){return yield Promise.resolve().then(()=>(ft(),gt))}),Bd=()=>(ft(),F(gt)).default,Tt=la();function en({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=yo.default.useState(Tt?void 0:Bd()),[p,m]=yo.default.useState(Tt||t==null?void 0:t()),d=()=>h(this,null,function*(){(e?e():Od()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,yo.useEffect)(()=>{Tt&&d()},[]),{globalStyles:s,styles:p}}function C(e,o){return t=>{let{globalStyles:s,styles:c}=en({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ua.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();var Fd=require("react");n();var jo=f(require("react"));n();n();var wt=f(require("react")),Fa=require("@fortawesome/free-solid-svg-icons"),Ua=require("@fortawesome/react-fontawesome");v();var sn=({className:e="dapp-default-toast-delete-button",onClick:o})=>wt.default.createElement("button",{type:"button",className:e,onClick:o,"data-testid":"deleteToastButton"},wt.default.createElement(Ua.FontAwesomeIcon,{icon:Fa.faTimes,size:"xs"}));n();var re=f(require("react")),Bm=require("@fortawesome/react-fontawesome"),Fr=f(require("classnames"));v();n();n();var Ce=f(require("react"));n();n();var ns=require("react"),io=require("react-redux");n();var zt=require("@reduxjs/toolkit"),es=require("react-redux/lib/utils/Subscription");L();n();var Mi=f(require("lodash.throttle"));v();L();Et();no();oo();var Nl=[rn],Nn=!1,Dl=(0,Mi.default)(()=>{vo(wo())},5e3),Oi=e=>o=>t=>{if(Nl.includes(t.type))return o(t);let s=e.getState(),c=Oe.local.getItem(Ie.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return vo(wo());let m=Date.now();return c-m<0&&!Nn?setTimeout(()=>{Nn=!0,e.dispatch(ei())},1e3):(Nn&&(Nn=!1),Dl()),o(t)};n();n();function Dn(){return typeof sessionStorage!="undefined"}var Ji=Dn()?(Hi(),F(Gi)).default:(Vi(),F($i)).default,Zi=Dn()?(zi(),F(qi)).default:[],Qi=Dn()?(Yi(),F(Xi)).default:e=>e;Rn();var I=(0,zt.configureStore)({reducer:Ji,middleware:e=>e({serializableCheck:{ignoredActions:[...Zi,Pt.type,dn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Oi)}),os=(0,es.createSubscription)(I),q0=Qi(I),z0=(0,zt.configureStore)({reducer:Fe});var n_={store:I,subscription:os},jt=(0,ns.createContext)(n_),Y0=(0,io.createStoreHook)(jt),V=(0,io.createDispatchHook)(jt),k=(0,io.createSelectorHook)(jt);n();n();L();n();var ts=f(require("lodash.isequal")),Mn=require("reselect"),y=(0,Mn.createSelectorCreator)(Mn.defaultMemoize,ts.default);var de=e=>e.account,Ue=y(de,e=>e.address),We=y(de,Ue,(e,o)=>o in e.accounts?e.accounts[o]:mn),t_=y(de,We,(e,o)=>{let c=e,{accounts:t}=c,s=_e(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),ow=y(We,e=>e.balance),r_=y(We,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),nw=y(de,e=>e.shard),a_=y(de,e=>e.ledgerAccount),tw=y(de,e=>e.walletConnectAccount),rw=y(de,e=>e.isAccountLoading),aw=y(de,e=>e.accountLoadingError),i_=y(de,e=>e.websocketEvent),s_=y(de,e=>e.websocketBatchEvent);n();var rs=e=>e.dappConfig,cw=y(rs,e=>e.shouldUseWebViewProvider);n();var X=e=>e.loginInfo,c_=y(X,e=>e.loginMethod),On=y(X,Ue,(e,o)=>Boolean(o)),lw=y(X,e=>e.walletConnectLogin),p_=y(X,e=>e.ledgerLogin),m_=y(X,e=>e.walletLogin),_w=y(X,e=>e.isLoginSessionInvalid),Kt=y(X,e=>e.tokenLogin),as=y(X,e=>e.logoutRoute),d_=y(X,e=>e.isWalletConnectV2Initialized);n();var is=e=>e.modals,fw=y(is,e=>e.txSubmittedModal),l_=y(is,e=>e.notificationModal);n();var ne=e=>e.networkConfig,Bn=y(ne,e=>e.network.chainId),__=y(ne,e=>e.network.roundDuration),xw=y(ne,e=>e.network.walletConnectBridgeAddress),u_=y(ne,e=>e.network.walletConnectV2RelayAddress),g_=y(ne,e=>e.network.walletConnectV2ProjectId),f_=y(ne,e=>e.network.walletConnectV2Options),T_=y(ne,e=>e.network.walletConnectDeepLink),Y=y(ne,e=>e.network),ss=y(Y,e=>e.apiAddress),cs=y(Y,e=>e.explorerAddress),ps=y(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),h_=y(Y,e=>e.xAliasAddress),ms=y(Y,e=>e.egldLabel);n();var Fn=e=>e.signedMessageInfo,Sw=y(Fn,e=>e.isSigning),ww=y(Fn,e=>e.errorMessage),vw=y(Fn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),Iw=y(Fn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var ds=e=>e.toasts,x_=y(ds,e=>e.customToasts),ls=y(ds,e=>e.transactionToasts);n();L();var _s={errorMessage:Ot,successMessage:Bt,processingMessage:Ft},us=e=>e.transactionsInfo,y_=y(us,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||_s);n();n();var le=require("@multiversx/sdk-core");v();n();var Yt=require("@multiversx/sdk-core/out");n();n();function Xt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var gs=e=>{let o=e!=null?e:"";return Xt(o)?Yt.TransactionPayload.fromEncoded(o):new Yt.TransactionPayload(o)};n();v();var Co=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(ht).some(t=>e.startsWith(t)):!1;function Po(e){var s,c,p;let o=u({},e);Co({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:gs(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:nn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:tn,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:Ma)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();v();n();n();n();var v_=require("@multiversx/sdk-core/out");n();v();n();var fs=require("@multiversx/sdk-core");E();n();var I_=require("@multiversx/sdk-core");n();n();n();var k_=require("@multiversx/sdk-core"),A_=f(require("bignumber.js"));P();n();n();n();var Zt="blocks";var Ge="transactions";n();n();n();n();z();n();var xs=!1;function N_(e){xs||(console.error(e),xs=!0)}function er({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(N_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();z();n();n();n();var O_=f(require("bignumber.js"));v();n();var M_=require("@multiversx/sdk-core"),or=f(require("bignumber.js"));v();n();var D_=f(require("bignumber.js"));n();or.default.config({ROUNDING_MODE:or.default.ROUND_FLOOR});n();n();n();v();n();n();n();n();v();n();v();n();var B_=require("@multiversx/sdk-core");v();n();var No=require("@multiversx/sdk-core"),W_=f(require("bignumber.js"));v();n();n();var F_=f(require("bignumber.js"));v();n();v();n();n();n();n();n();n();v();n();v();n();v();n();z();var H_=["reDelegateRewards","claimRewards","unBond"],$_=["wrapEgld","unwrapEgld"],V_=["unStake"],q_=["unDelegate"];n();n();n();v();n();var X_=f(require("bignumber.js"));n();n();z();n();var J_=f(require("bignumber.js"));n();n();n();n();var eu=f(require("bignumber.js"));E();n();n();n();n();P();n();var ru=require("@multiversx/sdk-web-wallet-provider");v();n();var nu=f(require("qs"));n();$();De();n();De();var aL={search:Te()?window.location.search:"",removeParams:[]};n();n();n();G();n();z();n();n();G();n();var au=f(require("linkifyjs"));n();v();n();var iu=f(require("bignumber.js"));n();E();n();n();P();n();P();n();n();n();z();n();z();n();var su=f(require("bignumber.js"));v();z();n();z();n();var vs=require("react");E();n();n();z();n();n();var cu=require("@multiversx/sdk-core/out"),pu=f(require("bignumber.js"));z();n();E();n();n();E();var Y1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Is=require("react");E();G();n();var du=require("react");z();var rC=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Be();n();var Wn=e=>e.transactions,so=y(Wn,e=>e.signedTransactions),lu=y(Wn,e=>e.signTransactionsError),ks=y(Wn,e=>e.signTransactionsCancelMessage),Gn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),As=y(so,Gn(to)),Ls=y(so,Gn(ro)),Cs=y(so,Gn(ao)),_u=y(so,Gn(Wt)),Ps=y(Wn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Po(t)))||[]})}),uu=y(so,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var He=()=>k(We);E();Be();n();n();var je=f(require("react")),ho=require("@fortawesome/free-solid-svg-icons"),Dm=require("@fortawesome/react-fontawesome"),Mr=f(require("classnames"));n();n();n();var gu=f(require("axios"));n();var Tu=f(require("axios"));Qe();n();v();n();var hu=f(require("axios"));n();var yu=f(require("axios"));n();n();var bu=f(require("axios"));n();var Su=f(require("axios"));n();n();n();n();n();var Ns=require("@lifeomic/axios-fetch"),ar=f(require("axios")),ir=(0,Ns.buildAxiosFetch)(ar.default),sr=(e,o)=>h(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function wu(e,o,t){return h(this,null,function*(){try{let s=yield ir(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return sr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function vu(e,o){return h(this,null,function*(){try{let t=yield ir(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return sr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Iu(e,o,t){return h(this,null,function*(){try{let s=yield ir(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return sr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var co=ar.default.create();co.get=vu;co.post=wu;co.patch=Iu;n();n();var ku=f(require("axios"));n();var Au=f(require("swr"));n();n();n();n();n();Qe();n();var Pu=f(require("axios"));n();var Nu=f(require("axios"));n();Qe();n();Qe();n();n();n();n();var Ru=f(require("axios"));n();v();n();n();var po=f(require("react")),$n=require("@fortawesome/free-solid-svg-icons"),dr=require("@fortawesome/react-fontawesome"),Os=f(require("classnames"));n();De();function Mu(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(s){console.error("Fallback: Oops, unable to copy",s)}return document==null||document.body.removeChild(t),o}function Rs(e){return h(this,null,function*(){if(!Te())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(s){return console.error("Async: Could not copy text: ",s),!1}):o=Mu(e),o})}var Bu=({text:e,className:o="dapp-copy-button",copyIcon:t=$n.faCopy,successIcon:s=$n.faCheck,styles:c})=>{let[p,m]=(0,po.useState)({default:!0,success:!1});return po.default.createElement("a",{href:"/#",onClick:_=>h(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let g=e&&e.trim();m({default:!1,success:yield Rs(g)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,Os.default)(c==null?void 0:c.copy,o)},p.default||!p.success?po.default.createElement(dr.FontAwesomeIcon,{icon:t}):po.default.createElement(dr.FontAwesomeIcon,{icon:s}))},Bs=C(Bu,{ssrStyles:()=>Promise.resolve().then(()=>(mr(),pr)),clientStyles:()=>(mr(),F(pr)).default});n();n();var ur=f(require("react")),Us=require("@fortawesome/free-solid-svg-icons"),Ws=require("@fortawesome/react-fontawesome"),Gs=f(require("classnames"));n();var Vn=()=>k(ne);var Uu=_=>{var g=_,{page:e,text:o,className:t="dapp-explorer-link",children:s,globalStyles:c,customExplorerIcon:p,styles:m}=g,d=_e(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:x}}=Vn(),S=o!=null?o:ur.default.createElement(Ws.FontAwesomeIcon,{icon:p!=null?p:Us.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),A=er({explorerAddress:String(x),to:e});return ur.default.createElement("a",u({href:A,target:"_blank",className:(0,Gs.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},d),s!=null?s:S)},Hs=C(Uu,{ssrStyles:()=>Promise.resolve().then(()=>(_r(),lr)),clientStyles:()=>(_r(),F(lr)).default});n();n();var B=f(require("react")),Pm=f(require("classnames"));v();n();n();var $s=require("react");n();L();n();n();n();n();n();n();n();n();var Gu=require("@multiversx/sdk-extension-provider"),Hu=require("@multiversx/sdk-hw-provider"),$u=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Vu=require("@multiversx/sdk-opera-provider"),qu=require("@multiversx/sdk-passkey-provider/out"),zu=require("@multiversx/sdk-web-wallet-provider");v();ve();n();var mo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Vs=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,qn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},qs=new qn;L();n();n();P();n();n();n();G();n();Be();n();L();P();n();n();n();n();G();n();D();E();n();L();n();var Ks=require("@multiversx/sdk-core");E();$();n();Be();n();L();P();n();L();E();n();n();n();E();n();on();n();n();n();n();var Xu=f(require("swr"));n();n();n();n();var Xs=require("react");n();n();var Yu=require("react"),Ju=require("@multiversx/sdk-web-wallet-provider"),Zu=require("@multiversx/sdk-web-wallet-provider"),Qu=f(require("qs"));v();L();P();yt();G();var a3=O();n();var bc=require("react"),yr=require("@multiversx/sdk-core");v();Nt();n();n();n();n();n();n();n();n();n();n();var og=require("@multiversx/sdk-opera-provider");n();var ng=require("@multiversx/sdk-extension-provider");n();ve();n();n();n();n();var Ag=f(Tc());n();var Eg=require("@multiversx/sdk-native-auth-client");n();var yc=f(require("axios"));n();n();n();function hc(e){return h(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var xc=(e,o,t,s=0)=>h(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield hc(o.delay)),yield xc(e,o,t,s+1)):null}}),hr=(e,o={retries:5,delay:500})=>(...t)=>h(void 0,null,function*(){return yield xc(e,o,t)});var Lg=4;var X3=hr((e,o,t)=>h(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield yc.default.get(`${e}/${Zt}?from=${Lg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();cn();n();n();G();var aM={origin:O().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Dg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Rg=require("@multiversx/sdk-passkey-provider/out");v();G();n();n();n();var Wg=require("react"),Gg=require("@multiversx/sdk-hw-provider");n();D();E();n();Io();no();oo();$();n();n();var mm=require("react"),dm=require("@multiversx/sdk-core"),Ch=require("@multiversx/sdk-extension-provider"),Ph=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Eh=require("@multiversx/sdk-passkey-provider/out"),Nh=f(im());v();n();n();n();n();n();n();n();n();n();var Wo=f(require("react"));var HO=(0,Wo.createContext)({}),$O=I.getState();n();var cm=f(require("react"));n();var vr=f(require("react")),lh=f(require("axios"));n();n();ve();n();n();var hh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),xh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");D();n();D();L();E();n();n();L();n();$();n();L();E();n();n();var uh=require("@multiversx/sdk-core"),gh=f(require("bignumber.js"));v();n();var fh=f(require("bignumber.js"));v();L();P();$();G();n();var pm=require("react"),wh=require("@multiversx/sdk-extension-provider"),vh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ih=require("@multiversx/sdk-passkey-provider/out");ve();L();n();L();E();Io();G();n();pe();L();n();n();var Rh=require("react");n();n();P();Be();n();var Zn=require("react"),lm=(e,o)=>{let[t,s]=(0,Zn.useState)(e);return(0,Zn.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var Oh=require("react"),Bh=require("@multiversx/sdk-extension-provider");pe();D();P();n();he();$();$();n();n();ve();E();n();var Mh=require("react"),_m=require("@multiversx/sdk-core");L();n();var Fh=require("react"),Uh=require("@multiversx/sdk-opera-provider");pe();D();P();he();$();G();n();var Wh=require("react");St();pe();ve();D();L();P();he();G();n();var qh=require("react");pe();L();n();n();vt();n();n();var Gh=f(require("platform"));De();n();n();n();n();n();n();n();bo();P();n();n();var Hh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Io();no();n();n();n();L();n();n();var $h=f(require("axios"));$();n();n();var Vh=f(Xn());bo();var um,gm,fm,DG=(fm=(gm=(um=Me.safeWindow)==null?void 0:um.location)==null?void 0:gm.origin)==null?void 0:fm.includes("localhost");n();G();n();n();var ex=require("react");v();n();n();v();n();n();n();var zh=f(require("bignumber.js"));n();n();n();var Le=f(require("react")),wm=require("react"),vm=require("react"),Cr=f(require("classnames")),Im=require("react-dom");v();n();var hm=f(require("react")),xm=f(require("classnames"));var Kh=({className:e,children:o,styles:t})=>hm.default.createElement("div",{className:(0,xm.default)(t==null?void 0:t.dappModalBody,e)},o),Ir=C(Kh,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),F(be)).default});n();var kr=f(require("react")),ym=f(require("classnames"));var Xh=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?kr.default.createElement("div",{className:(0,ym.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:kr.default.createElement("div",null,s)):null,Ar=C(Xh,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),F(be)).default});n();var To=f(require("react")),bm=require("@fortawesome/free-solid-svg-icons"),Sm=require("@fortawesome/react-fontawesome"),Ho=f(require("classnames"));var Yh=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?t?To.default.createElement("div",{className:(0,Ho.default)(_==null?void 0:_.dappModalHeader,s)},t):To.default.createElement("div",{className:(0,Ho.default)(_==null?void 0:_.dappModalHeader,s)},To.default.createElement("div",{className:(0,Ho.default)(_==null?void 0:_.dappModalHeaderText,p)},o),To.default.createElement("button",{onClick:m,className:(0,Ho.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},To.default.createElement(Sm.FontAwesomeIcon,{size:"lg",icon:bm.faTimes}))):null,Lr=C(Yh,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),F(be)).default});var Jh={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Zh=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=Jh,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:g})=>{let[x,S]=(0,wm.useState)(!1);if((0,vm.useEffect)(()=>{S(!0)},[]),!_)return null;let{showHeader:A,showFooter:R,headerText:J,footerText:we,modalDialogClassName:Ko="dapp-modal-dialog",modalContentClassName:et="dapp-modal-dialog-content",modalHeaderClassName:ot="dapp-modal-dialog-header",modalHeaderTextClassName:nt="dapp-modal-dialog-header-text",modalCloseButtonClassName:oe="dapp-modal-dialog-close-button",modalBodyClassName:Vm="dapp-modal-dialog-content-body",modalFooterClassName:qm="dapp-modal-dialog-footer",customModalHeader:zm,customModalFooter:jm}=c,Km=Xm=>{Xm.key==="Escape"&&s&&(m==null||m())};return Le.default.createElement(Le.default.Fragment,null,x&&(0,Im.createPortal)(Le.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Cr.default)(Ko,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:Km},Le.default.createElement("div",{className:(0,Cr.default)(g==null?void 0:g.dappModalContent,et)},Le.default.createElement(Lr,{visible:A,headerText:J,customHeader:zm,className:ot,headerTextClassName:nt,closeButtonClassName:oe,onHide:m}),Le.default.createElement(Ir,{className:Vm},o),Le.default.createElement(Ar,{visible:R,customFooter:jm,footerText:we,className:qm}))),d!=null?d:document==null?void 0:document.body))},Qh=C(Zh,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),be)),clientStyles:()=>(Se(),F(be)).default});n();n();var km=require("react");n();n();var Am=require("react"),nx=require("@multiversx/sdk-hw-provider");pe();D();L();P();he();n();var ox=require("react");n();n();var Pr=require("react");D();L();P();he();G();n();var rx=require("react"),ax=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();D();P();he();$();$();n();var ix=require("react"),sx=require("@multiversx/sdk-passkey-provider/out");pe();D();P();he();$();$();n();n();var Lm=require("react");n();var mx=require("react");n();var Er=require("react"),px=require("socket.io-client");L();n();n();n();var dx=require("react");E();n();n();n();var lx=f(require("swr"));var ux=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,B.useState)(0),[d,_]=(0,B.useState)(!1),g=(0,B.useRef)(document==null?void 0:document.createElement("span")),x=(0,B.useRef)(document==null?void 0:document.createElement("span")),S=lm(p,300),A=()=>{if(g.current&&x.current){let we=x.current.offsetWidth-g.current.offsetWidth;_(we>1)}},R=()=>{m(p+1)};return(0,B.useEffect)(()=>(window==null||window.addEventListener("resize",R),()=>{window==null||window.removeEventListener("resize",R)})),(0,B.useEffect)(()=>{A()},[S]),B.default.createElement("span",{ref:g,className:(0,Pm.default)(c==null?void 0:c.trim,s,o,{overflow:d}),"data-testid":t},B.default.createElement("span",{ref:x,className:c==null?void 0:c.hiddenTextRef},e),d?B.default.createElement(B.default.Fragment,null,B.default.createElement("span",{className:c==null?void 0:c.left},B.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),B.default.createElement("span",{className:c==null?void 0:c.ellipsis},Ba),B.default.createElement("span",{className:c==null?void 0:c.right},B.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):B.default.createElement("span",null,e))},Em=C(ux,{ssrStyles:()=>Promise.resolve().then(()=>(Dr(),Nr)),clientStyles:()=>(Dr(),F(Nr)).default});var fx={icon:ho.faCheck},Rr={icon:ho.faTimes},Tx={icon:ho.faCircleNotch},hx={pending:Tx,success:fx,fail:Rr,invalid:Rr,timedOut:Rr},xx=({className:e,hash:o,status:t,iconSrc:s,isTimedOut:c,globalStyles:p,styles:m})=>{var g;let d=t?hx[t]:null,_=(g=s==null?void 0:s.icon)!=null?g:d==null?void 0:d.icon;return je.default.createElement("div",{className:(0,Mr.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&_!=null&&je.default.createElement(Dm.FontAwesomeIcon,{icon:_,className:(0,Mr.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":t==="pending"})}),je.default.createElement("span",{className:m==null?void 0:m.trim},je.default.createElement(Em,{text:o})),je.default.createElement(Bs,{text:o}),je.default.createElement(Hs,{page:`/${Ge}/${o}`,className:p==null?void 0:p.ml2}))},Rm=C(xx,{ssrStyles:()=>Promise.resolve().then(()=>(Vo(),$o)),clientStyles:()=>(Vo(),F($o)).default});var yx=({title:e,transactions:o,isTimedOut:t=!1,className:s="dapp-transaction-details",styles:c})=>{if(o==null)return null;let{address:p}=He(),m=(0,Ce.useMemo)(()=>{let _=o.filter(x=>!kn(Q[x==null?void 0:x.status])).length,g=o.length;return g===1&&_===1?kn(Q[o[0].status])?"Processing transaction":"Transaction processed":`${_} / ${g} transactions processed`},[o]),d=o.length===1&&o[0].sender!==p;return Ce.default.createElement(Ce.default.Fragment,null,e&&Ce.default.createElement("div",{className:c==null?void 0:c.title},e),!d&&Ce.default.createElement("div",{className:c==null?void 0:c.status},m),o.map(({hash:_,status:g})=>{let x={className:s,hash:_,status:Q[g],isTimedOut:t};return Ce.default.createElement(Rm,w(u({},x),{key:_}))}))},Mm=C(yx,{ssrStyles:()=>Promise.resolve().then(()=>(Vo(),$o)),clientStyles:()=>(Vo(),F($o)).default});var Sx=({style:e,toastDataState:o,transactions:t,showCloseButton:s,onDeleteToast:c,toastTitle:p,isTimedOut:m,customElements:d={CustomCloseButton:sn,TransactionToastStatusIcon:Bm.FontAwesomeIcon,TransactionDetails:Mm},globalStyles:_,styles:g})=>{let x=d==null?void 0:d.TransactionDetails,S=d==null?void 0:d.TransactionToastStatusIcon,A=d==null?void 0:d.CustomCloseButton;return re.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},re.default.createElement("div",{className:e.left},re.default.createElement("div",{className:(0,Fr.default)(e.icon,o.iconClassName)},S&&re.default.createElement(S,{size:"5x",icon:o.icon,className:e.svg}))),re.default.createElement("div",{className:e.right},re.default.createElement("div",{className:e.heading},re.default.createElement("h5",{className:(0,Fr.default)([_==null?void 0:_.h5,e.mb4]),"data-testid":"transactionToastTitle"},o.title),s&&A&&re.default.createElement(A,{className:g==null?void 0:g.close,onClick:c})),re.default.createElement("div",{className:e.footer},x&&re.default.createElement(x,{transactions:t,title:p,isTimedOut:m}))))},Y8=C(Sx,{ssrStyles:()=>Promise.resolve().then(()=>(Br(),Or)),clientStyles:()=>(Br(),F(Or)).default});n();var Um=f(require("react")),Wm=f(require("classnames"));var vx=({className:e="dapp-transaction-toast-wrapper",children:o,id:t,styles:s})=>Um.default.createElement("div",{id:t,className:(0,Wm.default)(s==null?void 0:s.toasts,s==null?void 0:s.toastWrapper,e)},o),o7=C(vx,{ssrStyles:()=>Promise.resolve().then(()=>(zo(),qo)),clientStyles:()=>(zo(),F(qo)).default});var Hm=({CustomCloseButton:e,onDelete:o})=>{let{styles:t}=en({ssrImportCallback:()=>Promise.resolve().then(()=>(Wr(),Ur)),clientImportCallback:()=>(Wr(),F(Ur)).default});return(0,jo.useMemo)(()=>e?jo.default.createElement(e,{onClick:o}):jo.default.createElement(sn,{onClick:o,className:t==null?void 0:t.close}),[e,o,t])};n();var kx=({onDelete:e,message:o,component:t,CustomCloseButton:s,className:c="dapp-custom-toast",toastId:p,styles:m})=>{let d=Hm({onDelete:e,CustomCloseButton:s});return Qn.default.createElement("div",{id:p,className:(0,$m.default)(m==null?void 0:m.toasts,m==null?void 0:m.toastWrapper,c)},Qn.default.createElement(Qn.default.Fragment,null,d,t?t():o))},Ax=C(kx,{ssrStyles:()=>Promise.resolve().then(()=>(zo(),qo)),clientStyles:()=>(zo(),F(qo)).default});0&&(module.exports={CustomComponentToast});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=CustomComponentToast.js.map
