"use strict";var jm=Object.create;var xo=Object.defineProperty,Km=Object.defineProperties,Xm=Object.getOwnPropertyDescriptor,Ym=Object.getOwnPropertyDescriptors,Jm=Object.getOwnPropertyNames,zo=Object.getOwnPropertySymbols,Zm=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty,Gr=Object.prototype.propertyIsEnumerable;var Wr=(e,o,t)=>o in e?xo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))et.call(o,t)&&Wr(e,t,o[t]);if(zo)for(var t of zo(o))Gr.call(o,t)&&Wr(e,t,o[t]);return e},w=(e,o)=>Km(e,Ym(o));var _e=(e,o)=>{var t={};for(var s in e)et.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&zo)for(var s of zo(e))o.indexOf(s)<0&&Gr.call(e,s)&&(t[s]=e[s]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),H=(e,o)=>{for(var t in o)xo(e,t,{get:o[t],enumerable:!0})},Hr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Jm(o))!et.call(e,c)&&c!==t&&xo(e,c,{get:()=>o[c],enumerable:!(s=Xm(o,c))||s.enumerable});return e};var f=(e,o,t)=>(t=e!=null?jm(Zm(e)):{},Hr(o||!e||!e.__esModule?xo(t,"default",{value:e,enumerable:!0}):t,e)),F=e=>Hr(xo({},"__esModule",{value:!0}),e);var T=(e,o,t)=>new Promise((s,c)=>{var p=_=>{try{l(t.next(_))}catch(g){c(g)}},m=_=>{try{l(t.throw(_))}catch(g){c(g)}},l=_=>_.done?s(_.value):Promise.resolve(_.value).then(p,m);l((t=t.apply(e,o)).next())});var qr=S(jo=>{"use strict";n();jo.byteLength=ed;jo.toByteArray=nd;jo.fromByteArray=ad;var ae=[],Z=[],Qm=typeof Uint8Array!="undefined"?Uint8Array:Array,ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ce=0,$r=ot.length;Ce<$r;++Ce)ae[Ce]=ot[Ce],Z[ot.charCodeAt(Ce)]=Ce;var Ce,$r;Z["-".charCodeAt(0)]=62;Z["_".charCodeAt(0)]=63;function Vr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function ed(e){var o=Vr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function od(e,o,t){return(o+t)*3/4-t}function nd(e){var o,t=Vr(e),s=t[0],c=t[1],p=new Qm(od(e,s,c)),m=0,l=c>0?s-4:s,_;for(_=0;_<l;_+=4)o=Z[e.charCodeAt(_)]<<18|Z[e.charCodeAt(_+1)]<<12|Z[e.charCodeAt(_+2)]<<6|Z[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Z[e.charCodeAt(_)]<<2|Z[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=Z[e.charCodeAt(_)]<<10|Z[e.charCodeAt(_+1)]<<4|Z[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function td(e){return ae[e>>18&63]+ae[e>>12&63]+ae[e>>6&63]+ae[e&63]}function rd(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(td(s));return c.join("")}function ad(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,l=t-s;m<l;m+=p)c.push(rd(e,m,m+p>l?l:m+p));return s===1?(o=e[t-1],c.push(ae[o>>2]+ae[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ae[o>>10]+ae[o>>4&63]+ae[o<<2&63]+"=")),c.join("")}});var zr=S(nt=>{n();nt.read=function(e,o,t,s,c){var p,m,l=c*8-s-1,_=(1<<l)-1,g=_>>1,x=-7,b=t?c-1:0,A=t?-1:1,R=e[o+b];for(b+=A,p=R&(1<<-x)-1,R>>=-x,x+=l;x>0;p=p*256+e[o+b],b+=A,x-=8);for(m=p&(1<<-x)-1,p>>=-x,x+=s;x>0;m=m*256+e[o+b],b+=A,x-=8);if(p===0)p=1-g;else{if(p===_)return m?NaN:(R?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-g}return(R?-1:1)*m*Math.pow(2,p-s)};nt.write=function(e,o,t,s,c,p){var m,l,_,g=p*8-c-1,x=(1<<g)-1,b=x>>1,A=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,R=s?0:p-1,J=s?1:-1,we=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(l=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+b>=1?o+=A/_:o+=A*Math.pow(2,1-b),o*_>=2&&(m++,_/=2),m+b>=x?(l=0,m=x):m+b>=1?(l=(o*_-1)*Math.pow(2,c),m=m+b):(l=o*Math.pow(2,b-1)*Math.pow(2,c),m=0));c>=8;e[t+R]=l&255,R+=J,l/=256,c-=8);for(m=m<<c|l,g+=c;g>0;e[t+R]=m&255,R+=J,m/=256,g-=8);e[t+R-J]|=we*128}});var aa=S(Xe=>{"use strict";n();var tt=qr(),Ke=zr(),jr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Xe.Buffer=d;Xe.SlowBuffer=dd;Xe.INSPECT_MAX_BYTES=50;var Ko=2147483647;Xe.kMaxLength=Ko;d.TYPED_ARRAY_SUPPORT=id();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function id(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function ue(e){if(e>Ko)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return st(e)}return Yr(e,o,t)}d.poolSize=8192;function Yr(e,o,t){if(typeof e=="string")return cd(e,o);if(ArrayBuffer.isView(e))return pd(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ie(e,ArrayBuffer)||e&&ie(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ie(e,SharedArrayBuffer)||e&&ie(e.buffer,SharedArrayBuffer)))return at(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=md(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return Yr(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Jr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function sd(e,o,t){return Jr(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}d.alloc=function(e,o,t){return sd(e,o,t)};function st(e){return Jr(e),ue(e<0?0:ct(e)|0)}d.allocUnsafe=function(e){return st(e)};d.allocUnsafeSlow=function(e){return st(e)};function cd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Zr(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function rt(e){for(var o=e.length<0?0:ct(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function pd(e){if(ie(e,Uint8Array)){var o=new Uint8Array(e);return at(o.buffer,o.byteOffset,o.byteLength)}return rt(e)}function at(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function md(e){if(d.isBuffer(e)){var o=ct(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||pt(e.length)?ue(0):rt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return rt(e.data)}function ct(e){if(e>=Ko)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ko.toString(16)+" bytes");return e|0}function dd(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ie(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ie(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Zr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ie(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return it(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ra(e).length;default:if(c)return s?-1:it(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=Zr;function ld(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return bd(this,o,t);case"utf8":case"utf-8":return ea(this,o,t);case"ascii":return yd(this,o,t);case"latin1":case"binary":return Sd(this,o,t);case"base64":return Td(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wd(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Ee(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ee(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ee(this,t,t+3),Ee(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ee(this,t,t+7),Ee(this,t+1,t+6),Ee(this,t+2,t+5),Ee(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ea(this,0,o):ld.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=Xe.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};jr&&(d.prototype[jr]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ie(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,l=s-t,_=Math.min(m,l),g=this.slice(c,p),x=o.slice(t,s),b=0;b<_;++b)if(g[b]!==x[b]){m=g[b],l=x[b];break}return m<l?-1:l<m?1:0};function Qr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,pt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:Kr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Kr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Kr(e,o,t,s,c){var p=1,m=e.length,l=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,l/=2,t/=2}function _(R,J){return p===1?R[J]:R.readUInt16BE(J*p)}var g;if(c){var x=-1;for(g=t;g<m;g++)if(_(e,g)===_(o,x===-1?0:g-x)){if(x===-1&&(x=g),g-x+1===l)return x*p}else x!==-1&&(g-=g-x),x=-1}else for(t+l>m&&(t=m-l),g=t;g>=0;g--){for(var b=!0,A=0;A<l;A++)if(_(e,g+A)!==_(o,A)){b=!1;break}if(b)return g}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return Qr(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return Qr(this,o,t,s,!1)};function _d(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var l=parseInt(o.substr(m*2,2),16);if(pt(l))return m;e[t+m]=l}return m}function ud(e,o,t,s){return Xo(it(o,e.length-t),e,t,s)}function gd(e,o,t,s){return Xo(kd(o),e,t,s)}function fd(e,o,t,s){return Xo(ra(o),e,t,s)}function hd(e,o,t,s){return Xo(Ad(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return _d(this,o,t,s);case"utf8":case"utf-8":return ud(this,o,t,s);case"ascii":case"latin1":case"binary":return gd(this,o,t,s);case"base64":return fd(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return hd(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Td(e,o,t){return o===0&&t===e.length?tt.fromByteArray(e):tt.fromByteArray(e.slice(o,t))}function ea(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,l=p>239?4:p>223?3:p>191?2:1;if(c+l<=t){var _,g,x,b;switch(l){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(b=(p&31)<<6|_&63,b>127&&(m=b));break;case 3:_=e[c+1],g=e[c+2],(_&192)===128&&(g&192)===128&&(b=(p&15)<<12|(_&63)<<6|g&63,b>2047&&(b<55296||b>57343)&&(m=b));break;case 4:_=e[c+1],g=e[c+2],x=e[c+3],(_&192)===128&&(g&192)===128&&(x&192)===128&&(b=(p&15)<<18|(_&63)<<12|(g&63)<<6|x&63,b>65535&&b<1114112&&(m=b))}}m===null?(m=65533,l=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=l}return xd(s)}var Xr=4096;function xd(e){var o=e.length;if(o<=Xr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Xr));return t}function yd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Sd(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function bd(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Ld[e[p]];return c}function wd(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function U(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||U(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||U(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||U(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||U(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||U(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||U(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||U(o,4,this.length),Ke.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||U(o,4,this.length),Ke.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||U(o,8,this.length),Ke.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||U(o,8,this.length),Ke.read(this,o,!1,52,8)};function q(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=1,l=0;for(this[t]=o&255;++l<s&&(m*=256);)this[t+l]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;q(this,o,t,s,p,0)}var m=s-1,l=1;for(this[t+m]=o&255;--m>=0&&(l*=256);)this[t+m]=o/l&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=0,l=1,_=0;for(this[t]=o&255;++m<s&&(l*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);q(this,o,t,s,p-1,-p)}var m=s-1,l=1,_=0;for(this[t+m]=o&255;--m>=0&&(l*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/l>>0)-_&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function oa(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function na(e,o,t,s,c){return o=+o,t=t>>>0,c||oa(e,o,t,4,34028234663852886e22,-34028234663852886e22),Ke.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return na(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return na(this,o,t,!1,s)};function ta(e,o,t,s,c){return o=+o,t=t>>>0,c||oa(e,o,t,8,17976931348623157e292,-17976931348623157e292),Ke.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return ta(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return ta(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var l=d.isBuffer(o)?o:d.from(o,c),_=l.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=l[m%_]}return this};var vd=/[^+/0-9A-Za-z-_]/g;function Id(e){if(e=e.split("=")[0],e=e.trim().replace(vd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function it(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function kd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Ad(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function ra(e){return tt.toByteArray(Id(e))}function Xo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ie(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function pt(e){return e!==e}var Ld=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var ma=S((Lx,pa)=>{n();var M=pa.exports={},se,ce;function mt(){throw new Error("setTimeout has not been defined")}function dt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?se=setTimeout:se=mt}catch(e){se=mt}try{typeof clearTimeout=="function"?ce=clearTimeout:ce=dt}catch(e){ce=dt}})();function ia(e){if(se===setTimeout)return setTimeout(e,0);if((se===mt||!se)&&setTimeout)return se=setTimeout,setTimeout(e,0);try{return se(e,0)}catch(o){try{return se.call(null,e,0)}catch(t){return se.call(this,e,0)}}}function Pd(e){if(ce===clearTimeout)return clearTimeout(e);if((ce===dt||!ce)&&clearTimeout)return ce=clearTimeout,clearTimeout(e);try{return ce(e)}catch(o){try{return ce.call(null,e)}catch(t){return ce.call(this,e)}}}var ge=[],Ye=!1,Ne,Yo=-1;function Cd(){!Ye||!Ne||(Ye=!1,Ne.length?ge=Ne.concat(ge):Yo=-1,ge.length&&sa())}function sa(){if(!Ye){var e=ia(Cd);Ye=!0;for(var o=ge.length;o;){for(Ne=ge,ge=[];++Yo<o;)Ne&&Ne[Yo].run();Yo=-1,o=ge.length}Ne=null,Ye=!1,Pd(e)}}M.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new ca(e,o)),ge.length===1&&!Ye&&ia(sa)};function ca(e,o){this.fun=e,this.array=o}ca.prototype.run=function(){this.fun.apply(null,this.array)};M.title="browser";M.browser=!0;M.env={};M.argv=[];M.version="";M.versions={};function fe(){}M.on=fe;M.addListener=fe;M.once=fe;M.off=fe;M.removeListener=fe;M.removeAllListeners=fe;M.emit=fe;M.prependListener=fe;M.prependOnceListener=fe;M.listeners=function(e){return[]};M.binding=function(e){throw new Error("process.binding is not supported")};M.cwd=function(){return"/"};M.chdir=function(e){throw new Error("process.chdir is not supported")};M.umask=function(){return 0}});var r,i,Ed,a,n=h(()=>{r=f(aa()),i=f(ma()),Ed=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Ed});var he,De=h(()=>{"use strict";n();he=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var lt={};H(lt,{css:()=>la,default:()=>Nd});var la,Nd,_t=h(()=>{"use strict";n();la=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(la));Nd={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var _a=h(()=>{"use strict";n()});var pe=h(()=>{"use strict";n()});var ua=h(()=>{"use strict";n()});var gt,ga=h(()=>{"use strict";n();gt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(gt||{})});var fa=h(()=>{"use strict";n()});var ft=h(()=>{"use strict";n()});var ha=h(()=>{"use strict";n()});var ht=h(()=>{"use strict";n()});var Ta=h(()=>{"use strict";n()});var xa=h(()=>{"use strict";n()});var Re,Je,ve=h(()=>{"use strict";n();Re=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Je=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Q,ya,qx,Sa,zx,P=h(()=>{"use strict";n();ve();Q=(l=>(l.pending="pending",l.fail="fail",l.invalid="invalid",l.success="success",l.executed="executed",l.notExecuted="not executed",l.rewardReverted="reward-reverted",l))(Q||{}),ya=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ya||{}),qx=u(u({},Je.WindowProviderRequestEnums),ya),Sa=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Sa||{}),zx=u(u({},Je.WindowProviderResponseEnums),Sa)});var ba=h(()=>{"use strict";n()});var wa=h(()=>{"use strict";n()});var z=h(()=>{"use strict";n()});var va=h(()=>{"use strict";n()});var Ia=h(()=>{"use strict";n()});var ka=h(()=>{"use strict";n()});var C=h(()=>{"use strict";n();ht();Ta();xa();P();ba();wa();z();va();Ia();ka()});var Ze,Aa,py,La,my,Pa,dy,ly,Md,Qe=h(()=>{"use strict";n();C();Ze={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Aa,egldLabel:py}=Ze["devnet"],{chainId:La,egldLabel:my}=Ze["testnet"],{chainId:Pa,egldLabel:dy}=Ze["mainnet"],ly={["devnet"]:Aa,["testnet"]:La,["mainnet"]:Pa},Md={[Aa]:"devnet",[La]:"testnet",[Pa]:"mainnet"}});var Zo=h(()=>{"use strict";n()});var me,Ca=h(()=>{"use strict";n();me=require("@multiversx/sdk-web-wallet-provider")});var Me,So=h(()=>{"use strict";n();Me=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ea,Na,Tt,Ty,xy,xt=h(()=>{"use strict";n();So();Tt=String((Na=(Ea=Me.safeWindow)==null?void 0:Ea.navigator)==null?void 0:Na.userAgent),Ty=/^((?!chrome|android).)*safari/i.test(Tt),xy=/firefox/i.test(Tt)&&/windows/i.test(Tt)});var Qo,en,Da,on,Ra,eo,Ma,v=h(()=>{"use strict";n();_a();pe();ua();ga();fa();ft();ha();Qe();Zo();Ca();xt();Qo=5e4,en=1e9,Da=1,on="logout",Ra="login",eo="0",Ma="..."});var bo,rn=h(()=>{"use strict";n();bo=()=>Date.now()/1e3});var Ua=h(()=>{"use strict";n()});var Wa=h(()=>{"use strict";n()});var St=h(()=>{"use strict";n();rn();Ua();Wa()});var bt={};H(bt,{clear:()=>Ud,getItem:()=>Bd,localStorageKeys:()=>Ie,removeItem:()=>Fd,setItem:()=>Od});var Ie,an,Od,Bd,Fd,Ud,oo=h(()=>{"use strict";n();St();Ie={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},an=typeof localStorage!="undefined",Od=({key:e,data:o,expires:t})=>{!an||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Bd=e=>{if(!an)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:bo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Fd=e=>{!an||localStorage.removeItem(String(e))},Ud=()=>{!an||localStorage.clear()}});var wt={};H(wt,{clear:()=>Va,getItem:()=>Ha,removeItem:()=>$a,setItem:()=>Ga,storage:()=>Wd});var Ga,Ha,$a,Va,Wd,qa=h(()=>{"use strict";n();Ga=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ha=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},$a=e=>sessionStorage.removeItem(String(e)),Va=()=>sessionStorage.clear(),Wd={setItem:Ga,getItem:Ha,removeItem:$a,clear:Va}});var Oe,no=h(()=>{"use strict";n();oo();qa();Oe={session:wt,local:bt}});var vt,N,K,D=h(()=>{"use strict";n();vt=require("@reduxjs/toolkit");v();N=(0,vt.createAction)(on),K=(0,vt.createAction)(Ra,e=>({payload:e}))});var kt,za,ja,sn,It,Ka,cn,Gd,At,oS,Hd,$d,nS,tS,rS,Vd,qd,pn,mn=h(()=>{"use strict";n();kt=require("@multiversx/sdk-core"),za=require("@reduxjs/toolkit"),ja=require("redux-persist");v();no();oo();D();sn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:eo},It={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":sn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ka=(0,za.createSlice)({name:"accountInfoSlice",initialState:It,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new kt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:sn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(N,()=>(Oe.local.removeItem(Ie.loginExpiresAt),It)),e.addCase(K,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new kt.Address(s).hex()}),e.addCase(ja.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:l}=s;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:It.accounts,o.publicKey=l})}}),{setAccount:cn,setAddress:Gd,setAccountNonce:At,setAccountShard:oS,setLedgerAccount:Hd,updateLedgerAccount:$d,setWalletConnectAccount:nS,setIsAccountLoading:tS,setAccountLoadingError:rS,setWebsocketEvent:Vd,setWebsocketBatchEvent:qd}=Ka.actions,pn=Ka.reducer});function wo(){return new Date().setHours(new Date().getHours()+24)}function vo(e){Oe.local.setItem({key:Ie.loginExpiresAt,data:e,expires:e})}var Lt=h(()=>{"use strict";n();no();oo()});var Ya,Xa,Ja,uS,zd,jd,Za,gS,Kd,Qa,fS,hS,TS,dn,ln=h(()=>{"use strict";n();Ya=require("@reduxjs/toolkit");Lt();P();D();Xa={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ja=(0,Ya.createSlice)({name:"loginInfoSlice",initialState:Xa,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(N,()=>Xa),e.addCase(K,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,vo(wo())})}}),{setLoginMethod:uS,setWalletConnectLogin:zd,setLedgerLogin:jd,setTokenLogin:Za,setTokenLoginSignature:gS,setWalletLogin:Kd,invalidateLoginSession:Qa,setLogoutRoute:fS,setIsWalletConnectV2Initialized:hS,setWebviewLogin:TS}=Ja.actions,dn=Ja.reducer});var oi,ei,ni,bS,Xd,wS,Yd,_n,un=h(()=>{"use strict";n();oi=require("@reduxjs/toolkit");D();ei={},ni=(0,oi.createSlice)({name:"modalsSlice",initialState:ei,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(N,()=>ei)}}),{setTxSubmittedModal:bS,setNotificationModal:Xd,clearTxSubmittedModal:wS,clearNotificationModal:Yd}=ni.actions,_n=ni.reducer});var O,G=h(()=>{"use strict";n();De();O=()=>{if(!he())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var ti=h(()=>{"use strict";n();G()});var ri=h(()=>{"use strict";n();$()});var ai=h(()=>{"use strict";n();So()});var $=h(()=>{"use strict";n();ti();ri();G();ai()});var Io=h(()=>{"use strict";n();$()});var si=h(()=>{"use strict";n();Io()});function ci(e){return e[Math.floor(Math.random()*e.length)]}var pi=h(()=>{"use strict";n()});var Pt=h(()=>{"use strict";n();ft()});var Te=h(()=>{"use strict";n();si();pi();Pt()});var mi,di,li,Ct,Zd,_i,ob,nb,Qd,gn,fn=h(()=>{"use strict";n();mi=require("@reduxjs/toolkit"),di=f(require("lodash.omit")),li=require("redux-persist");Zo();D();Te();Ct={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Zd={network:Ct},_i=(0,mi.createSlice)({name:"appConfig",initialState:Zd,reducers:{initializeNetworkConfig:(e,o)=>{let t=ci(o.payload.walletConnectV2RelayAddresses),s=(0,di.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(N,o=>{o.network.customWalletAddress=void 0}),e.addCase(li.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:ob,updateNetworkConfig:nb,setCustomWalletAddress:Qd}=_i.actions,gn=_i.reducer});var ui,Et,gi,cb,pb,mb,hn,Tn=h(()=>{"use strict";n();ui=require("@reduxjs/toolkit");C();D();Et={isSigning:!1,signedSessions:{}},gi=(0,ui.createSlice)({name:"signedMessageInfoSliceState",initialState:Et,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Et},extraReducers:e=>{e.addCase(N,()=>Et)}}),{setSignSession:cb,clearSignedMessageInfo:pb,setSignSessionState:mb}=gi.actions,hn=gi.reducer});var hi,Ti,fi,xi,el,ol,hb,nl,xn,yn=h(()=>{"use strict";n();hi=require("@reduxjs/toolkit"),Ti=require("redux-persist");C();rn();D();fi={customToasts:[],transactionToasts:[]},xi=(0,hi.createSlice)({name:"toastsSlice",initialState:fi,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:bo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(N,()=>fi),e.addCase(Ti.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:el,removeCustomToast:ol,addTransactionToast:hb,removeTransactionToast:nl}=xi.actions,xn=xi.reducer});var yi,Dt,Rt,Mt,tl,Nt,Si,Sb,rl,Ot,Sn,bn=h(()=>{"use strict";n();yi=require("@reduxjs/toolkit");D();Dt="Transaction failed",Rt="Transaction successful",Mt="Processing transaction",tl="Transaction submitted",Nt={},Si=(0,yi.createSlice)({name:"transactionsInfo",initialState:Nt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Dt,successMessage:(s==null?void 0:s.successMessage)||Rt,processingMessage:(s==null?void 0:s.processingMessage)||Mt,submittedMessage:(s==null?void 0:s.submittedMessage)||tl,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Nt},extraReducers:e=>{e.addCase(N,()=>Nt)}}),{clearTransactionsInfo:Sb,setTransactionsDisplayInfo:rl,clearTransactionsInfoForSessionId:Ot}=Si.actions,Sn=Si.reducer});function to(e){return e!=null&&(ul(e)||wn(e))}function ro(e){return e!=null&&(gl(e)||xl(e))}function ao(e){return e!=null&&(fl(e)||yl(e))}function bi(e){return e!=null&&(hl(e)||Sl(e))}function Bt(e){return e!=null&&Tl(e)}function ul(e){return e!=null&&al.includes(e)}function gl(e){return e!=null&&il.includes(e)}function fl(e){return e!=null&&sl.includes(e)}function hl(e){return e!=null&&cl.includes(e)}function Tl(e){return e!=null&&pl.includes(e)}function wn(e){return e!=null&&ml.includes(e)}function xl(e){return e!=null&&dl.includes(e)}function yl(e){return e!=null&&ll.includes(e)}function Sl(e){return e!=null&&_l.includes(e)}var al,il,sl,cl,pl,ml,dl,ll,_l,Be=h(()=>{"use strict";n();P();al=["sent"],il=["success"],sl=["fail","cancelled","timedOut"],cl=["invalid"],pl=["timedOut"],ml=["pending"],dl=["success"],ll=["fail","invalid"],_l=["not executed"]});var wi,vi,ko,bl,Ii,ki,Ai,wl,vn,vl,Il,Cb,kl,Ao,Ft,Eb,In,kn=h(()=>{"use strict";n();wi=require("@reduxjs/toolkit"),vi=require("redux-persist");P();Be();D();ko={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},bl={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Ii=(0,wi.createSlice)({name:"transactionsSlice",initialState:ko,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,g;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:l}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},bl),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),l!=null?l:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=ko.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,x,b,A,R,J,we,qo;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:l}=o.payload,_=(x=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:x.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(oe=>oe.hash===p?w(u(u({},m!=null?m:{}),oe),{status:s,errorMessage:c,inTransit:l}):oe);let Jn=(A=(b=e.signedTransactions[t])==null?void 0:b.transactions)==null?void 0:A.every(oe=>ro(oe.status)),Zn=(J=(R=e.signedTransactions[t])==null?void 0:R.transactions)==null?void 0:J.some(oe=>ao(oe.status)),Qn=(qo=(we=e.signedTransactions[t])==null?void 0:we.transactions)==null?void 0:qo.every(oe=>bi(oe.status));Jn&&(e.signedTransactions[t].status="success"),Zn&&(e.signedTransactions[t].status="fail"),Qn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=ko.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=ko.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(N,()=>ko),e.addCase(vi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((l,[_,g])=>{let x=new Date(_),b=new Date;return b.setHours(b.getHours()+5),b-x>0||(l[_]=g),l},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ki,updateSignedTransactions:Ai,setTransactionsToSign:wl,clearAllTransactionsToSign:vn,clearAllSignedTransactions:vl,clearSignedTransaction:Il,clearTransactionToSign:Cb,setSignTransactionsError:kl,setSignTransactionsCancelMessage:Ao,moveTransactionsToSignedState:Ft,updateSignedTransactionsCustomTransactionInformation:Eb}=Ii.actions,In=Ii.reducer});var Li,Ut,Pi,Mb,Ob,Al,Bb,An,Ln=h(()=>{"use strict";n();Li=require("@reduxjs/toolkit");D();Ut={},Pi=(0,Li.createSlice)({name:"batchTransactionsSlice",initialState:Ut,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ut},extraReducers:e=>{e.addCase(N,()=>Ut)}}),{setBatchTransactions:Mb,updateBatchTransactions:Ob,clearBatchTransactions:Al,clearAllBatchTransactions:Bb}=Pi.actions,An=Pi.reducer});var Ei,Ci,Ni,Gb,Di,Wt=h(()=>{"use strict";n();Ei=require("@reduxjs/toolkit");D();Ci={},Ni=(0,Ei.createSlice)({name:"dappConfigSlice",initialState:Ci,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(N,()=>Ci)}}),{setDappConfig:Gb}=Ni.actions,Di=Ni.reducer});var L=h(()=>{"use strict";n();mn();ln();un();fn();Tn();yn();bn();kn();Ln();Wt()});var Gt=h(()=>{"use strict";n()});var Oi,El,Nl,Fe,En=h(()=>{"use strict";n();Oi=require("@reduxjs/toolkit");Gt();mn();Ln();Wt();ln();un();fn();Tn();yn();bn();kn();El={["account"]:pn,["dappConfig"]:Di,["loginInfo"]:dn,["modals"]:_n,["networkConfig"]:gn,["signedMessageInfo"]:hn,["toasts"]:xn,["transactionsInfo"]:Sn,["transactions"]:In,["batchTransactions"]:An},Nl=(e={})=>(0,Oi.combineReducers)(u(u({},El),e)),Fe=Nl});var Wi={};H(Wi,{default:()=>Kl,sessionStorageReducers:()=>Ht});function xe(e,o=[]){return{key:e,version:1,storage:Fi.default,blacklist:o}}var j,Bi,Fi,Dl,Lo,Rl,Ml,Ol,Bl,Fl,Ul,Wl,Gl,Hl,$l,Ui,Vl,Ht,ql,zl,jl,Kl,Gi=h(()=>{"use strict";n();j=require("redux-persist"),Bi=f(require("redux-persist/lib/storage")),Fi=f(require("redux-persist/lib/storage/session"));En();L();mn();Ln();ln();un();fn();Tn();yn();bn();kn();Gt();Dl={persistReducersStorageType:"localStorage"},Lo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Rl=xe(Lo["account"]),Ml=xe(Lo["loginInfo"]),Ol=xe(Lo["modals"]),Bl=xe(Lo["networkConfig"]),Fl={2:e=>w(u({},e),{networkConfig:Ct})};Ul=xe("sdk-dapp-transactionsInfo"),Wl=xe("sdk-dapp-transactions",["transactionsToSign"]),Gl=xe("sdk-dapp-batchTransactions",["batchTransactions"]),Hl=xe("sdk-dapp-toasts"),$l=xe("sdk-dapp-signedMessageInfo"),Ui={key:"sdk-dapp-store",version:2,storage:Bi.default,whitelist:Object.keys(Lo),migrate:(0,j.createMigrate)(Fl,{debug:!1})},Vl=w(u({},Ui),{whitelist:[]}),Ht={["toasts"]:(0,j.persistReducer)(Hl,xn),["transactions"]:(0,j.persistReducer)(Wl,In),["transactionsInfo"]:(0,j.persistReducer)(Ul,Sn),["batchTransactions"]:(0,j.persistReducer)(Gl,An),["signedMessageInfo"]:(0,j.persistReducer)($l,hn)},ql=w(u({},Ht),{["account"]:(0,j.persistReducer)(Rl,pn),["loginInfo"]:(0,j.persistReducer)(Ml,dn),["modals"]:(0,j.persistReducer)(Ol,_n),["networkConfig"]:(0,j.persistReducer)(Bl,gn)}),zl=Dl.persistReducersStorageType==="localStorage",jl=zl?(0,j.persistReducer)(Ui,Fe(Ht)):(0,j.persistReducer)(Vl,Fe(ql)),Kl=jl});var Hi={};H(Hi,{default:()=>Xl});var Xl,$i=h(()=>{"use strict";n();En();Xl=Fe()});var Vi={};H(Vi,{default:()=>Jl});var ee,Yl,Jl,qi=h(()=>{"use strict";n();ee=require("redux-persist"),Yl=[ee.FLUSH,ee.REHYDRATE,ee.PAUSE,ee.PERSIST,ee.PURGE,ee.REGISTER],Jl=Yl});var Ki={};H(Ki,{default:()=>ji});function ji(e){return(0,zi.persistStore)(e)}var zi,Xi=h(()=>{"use strict";n();zi=require("redux-persist")});var ir={};H(ir,{css:()=>Rs,default:()=>Nu});var Rs,Nu,sr=h(()=>{"use strict";n();Rs=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Rs));Nu={copy:"dapp-core-component__copyButton-styles__copy"}});var pr={};H(pr,{css:()=>Bs,default:()=>Ru});var Bs,Ru,mr=h(()=>{"use strict";n();Bs=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bs));Ru={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Qs=S((w3,Zs)=>{n();var Qu=typeof a=="object"&&a&&a.Object===Object&&a;Zs.exports=Qu});var Ro=S((v3,ec)=>{n();var eg=Qs(),og=typeof self=="object"&&self&&self.Object===Object&&self,ng=eg||og||Function("return this")();ec.exports=ng});var _r=S((I3,oc)=>{n();var tg=Ro(),rg=tg.Symbol;oc.exports=rg});var ac=S((k3,rc)=>{n();var nc=_r(),tc=Object.prototype,ag=tc.hasOwnProperty,ig=tc.toString,Mo=nc?nc.toStringTag:void 0;function sg(e){var o=ag.call(e,Mo),t=e[Mo];try{e[Mo]=void 0;var s=!0}catch(p){}var c=ig.call(e);return s&&(o?e[Mo]=t:delete e[Mo]),c}rc.exports=sg});var sc=S((A3,ic)=>{n();var cg=Object.prototype,pg=cg.toString;function mg(e){return pg.call(e)}ic.exports=mg});var ur=S((L3,mc)=>{n();var cc=_r(),dg=ac(),lg=sc(),_g="[object Null]",ug="[object Undefined]",pc=cc?cc.toStringTag:void 0;function gg(e){return e==null?e===void 0?ug:_g:pc&&pc in Object(e)?dg(e):lg(e)}mc.exports=gg});var lc=S((P3,dc)=>{n();var fg=Array.isArray;dc.exports=fg});var uc=S((C3,_c)=>{n();function hg(e){return e!=null&&typeof e=="object"}_c.exports=hg});var fc=S((E3,gc)=>{n();var Tg=ur(),xg=lc(),yg=uc(),Sg="[object String]";function bg(e){return typeof e=="string"||!xg(e)&&yg(e)&&Tg(e)==Sg}gc.exports=bg});var jn=S((C5,Sc)=>{n();function Gg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Sc.exports=Gg});var wc=S((E5,bc)=>{n();var Hg=ur(),$g=jn(),Vg="[object AsyncFunction]",qg="[object Function]",zg="[object GeneratorFunction]",jg="[object Proxy]";function Kg(e){if(!$g(e))return!1;var o=Hg(e);return o==qg||o==zg||o==Vg||o==jg}bc.exports=Kg});var Ic=S((N5,vc)=>{n();var Xg=Ro(),Yg=Xg["__core-js_shared__"];vc.exports=Yg});var Lc=S((D5,Ac)=>{n();var Tr=Ic(),kc=function(){var e=/[^.]+$/.exec(Tr&&Tr.keys&&Tr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Jg(e){return!!kc&&kc in e}Ac.exports=Jg});var Cc=S((R5,Pc)=>{n();var Zg=Function.prototype,Qg=Zg.toString;function ef(e){if(e!=null){try{return Qg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Pc.exports=ef});var Nc=S((M5,Ec)=>{n();var of=wc(),nf=Lc(),tf=jn(),rf=Cc(),af=/[\\^$.*+?()[\]{}|]/g,sf=/^\[object .+?Constructor\]$/,cf=Function.prototype,pf=Object.prototype,mf=cf.toString,df=pf.hasOwnProperty,lf=RegExp("^"+mf.call(df).replace(af,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _f(e){if(!tf(e)||nf(e))return!1;var o=of(e)?lf:sf;return o.test(rf(e))}Ec.exports=_f});var Rc=S((O5,Dc)=>{n();function uf(e,o){return e==null?void 0:e[o]}Dc.exports=uf});var Kn=S((B5,Mc)=>{n();var gf=Nc(),ff=Rc();function hf(e,o){var t=ff(e,o);return gf(t)?t:void 0}Mc.exports=hf});var Oo=S((F5,Oc)=>{n();var Tf=Kn(),xf=Tf(Object,"create");Oc.exports=xf});var Uc=S((U5,Fc)=>{n();var Bc=Oo();function yf(){this.__data__=Bc?Bc(null):{},this.size=0}Fc.exports=yf});var Gc=S((W5,Wc)=>{n();function Sf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Wc.exports=Sf});var $c=S((G5,Hc)=>{n();var bf=Oo(),wf="__lodash_hash_undefined__",vf=Object.prototype,If=vf.hasOwnProperty;function kf(e){var o=this.__data__;if(bf){var t=o[e];return t===wf?void 0:t}return If.call(o,e)?o[e]:void 0}Hc.exports=kf});var qc=S((H5,Vc)=>{n();var Af=Oo(),Lf=Object.prototype,Pf=Lf.hasOwnProperty;function Cf(e){var o=this.__data__;return Af?o[e]!==void 0:Pf.call(o,e)}Vc.exports=Cf});var jc=S(($5,zc)=>{n();var Ef=Oo(),Nf="__lodash_hash_undefined__";function Df(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ef&&o===void 0?Nf:o,this}zc.exports=Df});var Xc=S((V5,Kc)=>{n();var Rf=Uc(),Mf=Gc(),Of=$c(),Bf=qc(),Ff=jc();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}lo.prototype.clear=Rf;lo.prototype.delete=Mf;lo.prototype.get=Of;lo.prototype.has=Bf;lo.prototype.set=Ff;Kc.exports=lo});var Jc=S((q5,Yc)=>{n();function Uf(){this.__data__=[],this.size=0}Yc.exports=Uf});var Qc=S((z5,Zc)=>{n();function Wf(e,o){return e===o||e!==e&&o!==o}Zc.exports=Wf});var Bo=S((j5,ep)=>{n();var Gf=Qc();function Hf(e,o){for(var t=e.length;t--;)if(Gf(e[t][0],o))return t;return-1}ep.exports=Hf});var np=S((K5,op)=>{n();var $f=Bo(),Vf=Array.prototype,qf=Vf.splice;function zf(e){var o=this.__data__,t=$f(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():qf.call(o,t,1),--this.size,!0}op.exports=zf});var rp=S((X5,tp)=>{n();var jf=Bo();function Kf(e){var o=this.__data__,t=jf(o,e);return t<0?void 0:o[t][1]}tp.exports=Kf});var ip=S((Y5,ap)=>{n();var Xf=Bo();function Yf(e){return Xf(this.__data__,e)>-1}ap.exports=Yf});var cp=S((J5,sp)=>{n();var Jf=Bo();function Zf(e,o){var t=this.__data__,s=Jf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}sp.exports=Zf});var mp=S((Z5,pp)=>{n();var Qf=Jc(),eh=np(),oh=rp(),nh=ip(),th=cp();function _o(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}_o.prototype.clear=Qf;_o.prototype.delete=eh;_o.prototype.get=oh;_o.prototype.has=nh;_o.prototype.set=th;pp.exports=_o});var lp=S((Q5,dp)=>{n();var rh=Kn(),ah=Ro(),ih=rh(ah,"Map");dp.exports=ih});var gp=S((eO,up)=>{n();var _p=Xc(),sh=mp(),ch=lp();function ph(){this.size=0,this.__data__={hash:new _p,map:new(ch||sh),string:new _p}}up.exports=ph});var hp=S((oO,fp)=>{n();function mh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}fp.exports=mh});var Fo=S((nO,Tp)=>{n();var dh=hp();function lh(e,o){var t=e.__data__;return dh(o)?t[typeof o=="string"?"string":"hash"]:t.map}Tp.exports=lh});var yp=S((tO,xp)=>{n();var _h=Fo();function uh(e){var o=_h(this,e).delete(e);return this.size-=o?1:0,o}xp.exports=uh});var bp=S((rO,Sp)=>{n();var gh=Fo();function fh(e){return gh(this,e).get(e)}Sp.exports=fh});var vp=S((aO,wp)=>{n();var hh=Fo();function Th(e){return hh(this,e).has(e)}wp.exports=Th});var kp=S((iO,Ip)=>{n();var xh=Fo();function yh(e,o){var t=xh(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Ip.exports=yh});var Lp=S((sO,Ap)=>{n();var Sh=gp(),bh=yp(),wh=bp(),vh=vp(),Ih=kp();function uo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}uo.prototype.clear=Sh;uo.prototype.delete=bh;uo.prototype.get=wh;uo.prototype.has=vh;uo.prototype.set=Ih;Ap.exports=uo});var Cp=S((cO,Pp)=>{n();var kh="__lodash_hash_undefined__";function Ah(e){return this.__data__.set(e,kh),this}Pp.exports=Ah});var Np=S((pO,Ep)=>{n();function Lh(e){return this.__data__.has(e)}Ep.exports=Lh});var Rp=S((mO,Dp)=>{n();var Ph=Lp(),Ch=Cp(),Eh=Np();function Xn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Ph;++o<t;)this.add(e[o])}Xn.prototype.add=Xn.prototype.push=Ch;Xn.prototype.has=Eh;Dp.exports=Xn});var Op=S((dO,Mp)=>{n();function Nh(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Mp.exports=Nh});var Fp=S((lO,Bp)=>{n();function Dh(e){return e!==e}Bp.exports=Dh});var Wp=S((_O,Up)=>{n();function Rh(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Up.exports=Rh});var Hp=S((uO,Gp)=>{n();var Mh=Op(),Oh=Fp(),Bh=Wp();function Fh(e,o,t){return o===o?Bh(e,o,t):Mh(e,Oh,t)}Gp.exports=Fh});var Vp=S((gO,$p)=>{n();var Uh=Hp();function Wh(e,o){var t=e==null?0:e.length;return!!t&&Uh(e,o,0)>-1}$p.exports=Wh});var zp=S((fO,qp)=>{n();function Gh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}qp.exports=Gh});var Kp=S((hO,jp)=>{n();function Hh(e,o){return e.has(o)}jp.exports=Hh});var Yp=S((TO,Xp)=>{n();var $h=Kn(),Vh=Ro(),qh=$h(Vh,"Set");Xp.exports=qh});var Zp=S((xO,Jp)=>{n();function zh(){}Jp.exports=zh});var xr=S((yO,Qp)=>{n();function jh(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Qp.exports=jh});var om=S((SO,em)=>{n();var yr=Yp(),Kh=Zp(),Xh=xr(),Yh=1/0,Jh=yr&&1/Xh(new yr([,-0]))[1]==Yh?function(e){return new yr(e)}:Kh;em.exports=Jh});var tm=S((bO,nm)=>{n();var Zh=Rp(),Qh=Vp(),eT=zp(),oT=Kp(),nT=om(),tT=xr(),rT=200;function aT(e,o,t){var s=-1,c=Qh,p=e.length,m=!0,l=[],_=l;if(t)m=!1,c=eT;else if(p>=rT){var g=o?null:nT(e);if(g)return tT(g);m=!1,c=oT,_=new Zh}else _=o?[]:l;e:for(;++s<p;){var x=e[s],b=o?o(x):x;if(x=t||x!==0?x:0,m&&b===b){for(var A=_.length;A--;)if(_[A]===b)continue e;o&&_.push(b),l.push(x)}else c(_,b,t)||(_!==l&&_.push(b),l.push(x))}return l}nm.exports=aT});var am=S((wO,rm)=>{n();var iT=tm();function sT(e){return e&&e.length?iT(e):[]}rm.exports=sT});var Se={};H(Se,{css:()=>fm,default:()=>$T});var fm,$T,be=h(()=>{"use strict";n();fm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fm));$T={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Pr={};H(Pr,{css:()=>Lm,default:()=>px});var Lm,px,Cr=h(()=>{"use strict";n();Lm=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lm));px={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var Ho={};H(Ho,{css:()=>Em,default:()=>dx});var Em,dx,$o=h(()=>{"use strict";n();Em=`.dapp-core-component__transactionDetails-styles__title {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Em));dx={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var Dr={};H(Dr,{css:()=>Mm,default:()=>hx});var Mm,hx,Rr=h(()=>{"use strict";n();Mm=`.dapp-core-component__transactionToast-styles__content {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mm));hx={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var Or={};H(Or,{css:()=>Bm,default:()=>xx});var Bm,xx,Br=h(()=>{"use strict";n();Bm=`.dapp-core-component__transactionsToastList-styles__toasts {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bm));xx={toasts:"dapp-core-component__transactionsToastList-styles__toasts",toastWrapper:"dapp-core-component__transactionsToastList-styles__toastWrapper",loader:"dapp-core-component__transactionsToastList-styles__loader"}});var Fr={};H(Fr,{css:()=>Wm,default:()=>Sx});var Wm,Sx,Ur=h(()=>{"use strict";n();Wm=`.dapp-core-component__customToast-styles__close {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wm));Sx={close:"dapp-core-component__customToast-styles__close"}});var wx={};H(wx,{useMemoizedCloseButton:()=>bx});module.exports=F(wx);n();var Vo=f(require("react"));n();var yo=f(require("react"));n();De();var da=()=>!he();var Dd=()=>T(void 0,null,function*(){return yield Promise.resolve().then(()=>(_t(),lt))}),Rd=()=>(_t(),F(lt)).default,ut=da();function Jo({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=yo.default.useState(ut?void 0:Rd()),[p,m]=yo.default.useState(ut||t==null?void 0:t()),l=()=>T(this,null,function*(){(e?e():Dd()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,yo.useEffect)(()=>{ut&&l()},[]),{globalStyles:s,styles:p}}n();n();var yt=f(require("react")),Oa=require("@fortawesome/free-solid-svg-icons"),Ba=require("@fortawesome/react-fontawesome");v();var tn=({className:e="dapp-default-toast-delete-button",onClick:o})=>yt.default.createElement("button",{type:"button",className:e,onClick:o,"data-testid":"deleteToastButton"},yt.default.createElement(Ba.FontAwesomeIcon,{icon:Oa.faTimes,size:"xs"}));n();var re=f(require("react")),Om=require("@fortawesome/react-fontawesome"),Mr=f(require("classnames"));v();n();var Fa=f(require("react"));function E(e,o){return t=>{let{globalStyles:s,styles:c}=Jo({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Fa.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();var Pe=f(require("react"));n();n();var os=require("react"),io=require("react-redux");n();var $t=require("@reduxjs/toolkit"),Qi=require("react-redux/lib/utils/Subscription");L();n();var Ri=f(require("lodash.throttle"));v();L();Lt();no();oo();var Ll=[on],Pn=!1,Pl=(0,Ri.default)(()=>{vo(wo())},5e3),Mi=e=>o=>t=>{if(Ll.includes(t.type))return o(t);let s=e.getState(),c=Oe.local.getItem(Ie.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return vo(wo());let m=Date.now();return c-m<0&&!Pn?setTimeout(()=>{Pn=!0,e.dispatch(Qa())},1e3):(Pn&&(Pn=!1),Pl()),o(t)};n();n();function Cn(){return typeof sessionStorage!="undefined"}var Yi=Cn()?(Gi(),F(Wi)).default:($i(),F(Hi)).default,Ji=Cn()?(qi(),F(Vi)).default:[],Zi=Cn()?(Xi(),F(Ki)).default:e=>e;En();var I=(0,$t.configureStore)({reducer:Yi,middleware:e=>e({serializableCheck:{ignoredActions:[...Ji,At.type,cn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Mi)}),es=(0,Qi.createSubscription)(I),U0=Zi(I),W0=(0,$t.configureStore)({reducer:Fe});var Zl={store:I,subscription:es},Vt=(0,os.createContext)(Zl),V0=(0,io.createStoreHook)(Vt),V=(0,io.createDispatchHook)(Vt),k=(0,io.createSelectorHook)(Vt);n();n();L();n();var ns=f(require("lodash.isequal")),Nn=require("reselect"),y=(0,Nn.createSelectorCreator)(Nn.defaultMemoize,ns.default);var de=e=>e.account,Ue=y(de,e=>e.address),We=y(de,Ue,(e,o)=>o in e.accounts?e.accounts[o]:sn),Ql=y(de,We,(e,o)=>{let c=e,{accounts:t}=c,s=_e(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),X0=y(We,e=>e.balance),e_=y(We,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Y0=y(de,e=>e.shard),o_=y(de,e=>e.ledgerAccount),J0=y(de,e=>e.walletConnectAccount),Z0=y(de,e=>e.isAccountLoading),Q0=y(de,e=>e.accountLoadingError),n_=y(de,e=>e.websocketEvent),t_=y(de,e=>e.websocketBatchEvent);n();var ts=e=>e.dappConfig,nw=y(ts,e=>e.shouldUseWebViewProvider);n();var X=e=>e.loginInfo,r_=y(X,e=>e.loginMethod),Dn=y(X,Ue,(e,o)=>Boolean(o)),iw=y(X,e=>e.walletConnectLogin),a_=y(X,e=>e.ledgerLogin),i_=y(X,e=>e.walletLogin),sw=y(X,e=>e.isLoginSessionInvalid),qt=y(X,e=>e.tokenLogin),rs=y(X,e=>e.logoutRoute),s_=y(X,e=>e.isWalletConnectV2Initialized);n();var as=e=>e.modals,mw=y(as,e=>e.txSubmittedModal),c_=y(as,e=>e.notificationModal);n();var ne=e=>e.networkConfig,Rn=y(ne,e=>e.network.chainId),p_=y(ne,e=>e.network.roundDuration),_w=y(ne,e=>e.network.walletConnectBridgeAddress),m_=y(ne,e=>e.network.walletConnectV2RelayAddress),d_=y(ne,e=>e.network.walletConnectV2ProjectId),l_=y(ne,e=>e.network.walletConnectV2Options),__=y(ne,e=>e.network.walletConnectDeepLink),Y=y(ne,e=>e.network),is=y(Y,e=>e.apiAddress),ss=y(Y,e=>e.explorerAddress),cs=y(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),u_=y(Y,e=>e.xAliasAddress),ps=y(Y,e=>e.egldLabel);n();var Mn=e=>e.signedMessageInfo,fw=y(Mn,e=>e.isSigning),hw=y(Mn,e=>e.errorMessage),Tw=y(Mn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),xw=y(Mn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var ms=e=>e.toasts,g_=y(ms,e=>e.customToasts),ds=y(ms,e=>e.transactionToasts);n();L();var ls={errorMessage:Dt,successMessage:Rt,processingMessage:Mt},_s=e=>e.transactionsInfo,f_=y(_s,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||ls);n();n();var le=require("@multiversx/sdk-core");v();n();var jt=require("@multiversx/sdk-core/out");n();n();function zt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var us=e=>{let o=e!=null?e:"";return zt(o)?jt.TransactionPayload.fromEncoded(o):new jt.TransactionPayload(o)};n();v();var Po=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(gt).some(t=>e.startsWith(t)):!1;function On(e){var s,c,p;let o=u({},e);Po({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new le.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:us(o.data),nonce:o.nonce.valueOf(),receiver:new le.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new le.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Qo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:en,chainID:o.chainID.valueOf(),version:new le.TransactionVersion((p=o.version)!=null?p:Da)}),o.options?{options:new le.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new le.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();v();n();n();n();var y_=require("@multiversx/sdk-core/out");n();v();n();var gs=require("@multiversx/sdk-core");C();n();var S_=require("@multiversx/sdk-core");n();n();n();var b_=require("@multiversx/sdk-core"),w_=f(require("bignumber.js"));P();n();n();n();var Xt="blocks";var Ge="transactions";n();n();n();n();z();n();var Ts=!1;function L_(e){Ts||(console.error(e),Ts=!0)}function Jt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(L_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();z();n();n();n();var N_=f(require("bignumber.js"));v();n();var E_=require("@multiversx/sdk-core"),Zt=f(require("bignumber.js"));v();n();var P_=f(require("bignumber.js"));n();Zt.default.config({ROUNDING_MODE:Zt.default.ROUND_FLOOR});n();n();n();v();n();n();n();n();v();n();v();n();var D_=require("@multiversx/sdk-core");v();n();var Eo=require("@multiversx/sdk-core"),O_=f(require("bignumber.js"));v();n();n();var R_=f(require("bignumber.js"));v();n();v();n();n();n();n();n();n();v();n();v();n();v();n();z();var F_=["reDelegateRewards","claimRewards","unBond"],U_=["wrapEgld","unwrapEgld"],W_=["unStake"],G_=["unDelegate"];n();n();n();v();n();var q_=f(require("bignumber.js"));n();n();z();n();var j_=f(require("bignumber.js"));n();n();n();n();var Y_=f(require("bignumber.js"));C();n();n();n();n();P();n();var eu=require("@multiversx/sdk-web-wallet-provider");v();n();var Z_=f(require("qs"));n();$();De();n();De();var QA={search:he()?window.location.search:"",removeParams:[]};n();n();n();G();n();z();n();n();G();n();var ou=f(require("linkifyjs"));n();v();n();var nu=f(require("bignumber.js"));n();C();n();n();P();n();P();n();n();n();z();n();z();n();var tu=f(require("bignumber.js"));v();z();n();z();n();var ws=require("react");C();n();n();z();n();n();var ru=require("@multiversx/sdk-core/out"),au=f(require("bignumber.js"));z();n();C();n();n();C();var V1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var vs=require("react");C();G();n();var su=require("react");z();var Z1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Be();n();var Fn=e=>e.transactions,so=y(Fn,e=>e.signedTransactions),cu=y(Fn,e=>e.signTransactionsError),Is=y(Fn,e=>e.signTransactionsCancelMessage),Un=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),ks=y(so,Un(to)),As=y(so,Un(ro)),Ls=y(so,Un(ao)),pu=y(so,Un(Bt)),Ps=y(Fn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>On(t)))||[]})}),mu=y(so,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var He=()=>k(We);C();Be();n();n();var je=f(require("react")),To=require("@fortawesome/free-solid-svg-icons"),Nm=require("@fortawesome/react-fontawesome"),Nr=f(require("classnames"));n();n();n();var du=f(require("axios"));n();var _u=f(require("axios"));Qe();n();v();n();var uu=f(require("axios"));n();var fu=f(require("axios"));n();n();var hu=f(require("axios"));n();var Tu=f(require("axios"));n();n();n();n();n();var Es=require("@lifeomic/axios-fetch"),nr=f(require("axios")),tr=(0,Es.buildAxiosFetch)(nr.default),rr=(e,o)=>T(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function xu(e,o,t){return T(this,null,function*(){try{let s=yield tr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return rr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function yu(e,o){return T(this,null,function*(){try{let t=yield tr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return rr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Su(e,o,t){return T(this,null,function*(){try{let s=yield tr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return rr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var co=nr.default.create();co.get=yu;co.post=xu;co.patch=Su;n();n();var bu=f(require("axios"));n();var wu=f(require("swr"));n();n();n();n();n();Qe();n();var ku=f(require("axios"));n();var Lu=f(require("axios"));n();Qe();n();Qe();n();n();n();n();var Cu=f(require("axios"));n();v();n();n();var po=f(require("react")),Gn=require("@fortawesome/free-solid-svg-icons"),cr=require("@fortawesome/react-fontawesome"),Ms=f(require("classnames"));n();De();function Eu(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(s){console.error("Fallback: Oops, unable to copy",s)}return document==null||document.body.removeChild(t),o}function Ds(e){return T(this,null,function*(){if(!he())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(s){return console.error("Async: Could not copy text: ",s),!1}):o=Eu(e),o})}var Du=({text:e,className:o="dapp-copy-button",copyIcon:t=Gn.faCopy,successIcon:s=Gn.faCheck,styles:c})=>{let[p,m]=(0,po.useState)({default:!0,success:!1});return po.default.createElement("a",{href:"/#",onClick:_=>T(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let g=e&&e.trim();m({default:!1,success:yield Ds(g)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,Ms.default)(c==null?void 0:c.copy,o)},p.default||!p.success?po.default.createElement(cr.FontAwesomeIcon,{icon:t}):po.default.createElement(cr.FontAwesomeIcon,{icon:s}))},Os=E(Du,{ssrStyles:()=>Promise.resolve().then(()=>(sr(),ir)),clientStyles:()=>(sr(),F(ir)).default});n();n();var dr=f(require("react")),Fs=require("@fortawesome/free-solid-svg-icons"),Us=require("@fortawesome/react-fontawesome"),Ws=f(require("classnames"));n();var Hn=()=>k(ne);var Mu=_=>{var g=_,{page:e,text:o,className:t="dapp-explorer-link",children:s,globalStyles:c,customExplorerIcon:p,styles:m}=g,l=_e(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:x}}=Hn(),b=o!=null?o:dr.default.createElement(Us.FontAwesomeIcon,{icon:p!=null?p:Fs.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),A=Jt({explorerAddress:String(x),to:e});return dr.default.createElement("a",u({href:A,target:"_blank",className:(0,Ws.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},l),s!=null?s:b)},Gs=E(Mu,{ssrStyles:()=>Promise.resolve().then(()=>(mr(),pr)),clientStyles:()=>(mr(),F(pr)).default});n();n();var B=f(require("react")),Pm=f(require("classnames"));v();n();n();var Hs=require("react");n();L();n();n();n();n();n();n();n();n();var Bu=require("@multiversx/sdk-extension-provider"),Fu=require("@multiversx/sdk-hw-provider"),Uu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Wu=require("@multiversx/sdk-opera-provider"),Gu=require("@multiversx/sdk-passkey-provider/out"),Hu=require("@multiversx/sdk-web-wallet-provider");v();ve();n();var mo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),$s=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,$n=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Vs=new $n;L();n();n();P();n();n();n();G();n();Be();n();L();P();n();n();n();n();G();n();D();C();n();L();n();var js=require("@multiversx/sdk-core");C();$();n();Be();n();L();P();n();L();C();n();n();n();C();n();Zo();n();n();n();n();var qu=f(require("swr"));n();n();n();n();var Ks=require("react");n();n();var zu=require("react"),ju=require("@multiversx/sdk-web-wallet-provider"),Ku=require("@multiversx/sdk-web-wallet-provider"),Xu=f(require("qs"));v();L();P();ht();G();var Q2=O();n();var yc=require("react"),hr=require("@multiversx/sdk-core");v();Pt();n();n();n();n();n();n();n();n();n();n();var Ju=require("@multiversx/sdk-opera-provider");n();var Zu=require("@multiversx/sdk-extension-provider");n();ve();n();n();n();n();var wg=f(fc());n();var Ag=require("@multiversx/sdk-native-auth-client");n();var xc=f(require("axios"));n();n();n();function hc(e){return T(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Tc=(e,o,t,s=0)=>T(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield hc(o.delay)),yield Tc(e,o,t,s+1)):null}}),gr=(e,o={retries:5,delay:500})=>(...t)=>T(void 0,null,function*(){return yield Tc(e,o,t)});var vg=4;var $3=gr((e,o,t)=>T(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield xc.default.get(`${e}/${Xt}?from=${vg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();rn();n();n();G();var Q3={origin:O().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Pg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Cg=require("@multiversx/sdk-passkey-provider/out");v();G();n();n();n();var Og=require("react"),Bg=require("@multiversx/sdk-hw-provider");n();D();C();n();Io();no();oo();$();n();n();var pm=require("react"),mm=require("@multiversx/sdk-core"),IT=require("@multiversx/sdk-extension-provider"),kT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),AT=require("@multiversx/sdk-passkey-provider/out"),LT=f(am());v();n();n();n();n();n();n();n();n();n();var Uo=f(require("react"));var OO=(0,Uo.createContext)({}),BO=I.getState();n();var sm=f(require("react"));n();var Sr=f(require("react")),cT=f(require("axios"));n();n();ve();n();n();var uT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),gT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");D();n();D();L();C();n();n();L();n();$();n();L();C();n();n();var mT=require("@multiversx/sdk-core"),dT=f(require("bignumber.js"));v();n();var lT=f(require("bignumber.js"));v();L();P();$();G();n();var cm=require("react"),xT=require("@multiversx/sdk-extension-provider"),yT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),ST=require("@multiversx/sdk-passkey-provider/out");ve();L();n();L();C();Io();G();n();pe();L();n();n();var CT=require("react");n();n();P();Be();n();var Yn=require("react"),dm=(e,o)=>{let[t,s]=(0,Yn.useState)(e);return(0,Yn.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var NT=require("react"),DT=require("@multiversx/sdk-extension-provider");pe();D();P();n();Te();$();$();n();n();ve();C();n();var ET=require("react"),lm=require("@multiversx/sdk-core");L();n();var RT=require("react"),MT=require("@multiversx/sdk-opera-provider");pe();D();P();Te();$();G();n();var OT=require("react");xt();pe();ve();D();L();P();Te();G();n();var GT=require("react");pe();L();n();n();St();n();n();var BT=f(require("platform"));De();n();n();n();n();n();n();n();So();P();n();n();var FT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Io();no();n();n();n();L();n();n();var UT=f(require("axios"));$();n();n();var WT=f(jn());So();var _m,um,gm,AG=(gm=(um=(_m=Me.safeWindow)==null?void 0:_m.location)==null?void 0:um.origin)==null?void 0:gm.includes("localhost");n();G();n();n();var YT=require("react");v();n();n();v();n();n();n();var HT=f(require("bignumber.js"));n();n();n();var Le=f(require("react")),bm=require("react"),wm=require("react"),kr=f(require("classnames")),vm=require("react-dom");v();n();var hm=f(require("react")),Tm=f(require("classnames"));var VT=({className:e,children:o,styles:t})=>hm.default.createElement("div",{className:(0,Tm.default)(t==null?void 0:t.dappModalBody,e)},o),br=E(VT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),F(Se)).default});n();var wr=f(require("react")),xm=f(require("classnames"));var qT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?wr.default.createElement("div",{className:(0,xm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:wr.default.createElement("div",null,s)):null,vr=E(qT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),F(Se)).default});n();var ho=f(require("react")),ym=require("@fortawesome/free-solid-svg-icons"),Sm=require("@fortawesome/react-fontawesome"),Go=f(require("classnames"));var zT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:l,styles:_})=>e?t?ho.default.createElement("div",{className:(0,Go.default)(_==null?void 0:_.dappModalHeader,s)},t):ho.default.createElement("div",{className:(0,Go.default)(_==null?void 0:_.dappModalHeader,s)},ho.default.createElement("div",{className:(0,Go.default)(_==null?void 0:_.dappModalHeaderText,p)},o),ho.default.createElement("button",{onClick:m,className:(0,Go.default)(_==null?void 0:_.dappModalCloseButton,l==null?void 0:l.btn,l==null?void 0:l.btnLight,c)},ho.default.createElement(Sm.FontAwesomeIcon,{size:"lg",icon:ym.faTimes}))):null,Ir=E(zT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),F(Se)).default});var jT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},KT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=jT,id:p="dapp-modal",onHide:m,parentElement:l,visible:_,styles:g})=>{let[x,b]=(0,bm.useState)(!1);if((0,wm.useEffect)(()=>{b(!0)},[]),!_)return null;let{showHeader:A,showFooter:R,headerText:J,footerText:we,modalDialogClassName:qo="dapp-modal-dialog",modalContentClassName:Jn="dapp-modal-dialog-content",modalHeaderClassName:Zn="dapp-modal-dialog-header",modalHeaderTextClassName:Qn="dapp-modal-dialog-header-text",modalCloseButtonClassName:oe="dapp-modal-dialog-close-button",modalBodyClassName:Gm="dapp-modal-dialog-content-body",modalFooterClassName:Hm="dapp-modal-dialog-footer",customModalHeader:$m,customModalFooter:Vm}=c,qm=zm=>{zm.key==="Escape"&&s&&(m==null||m())};return Le.default.createElement(Le.default.Fragment,null,x&&(0,vm.createPortal)(Le.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,kr.default)(qo,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:qm},Le.default.createElement("div",{className:(0,kr.default)(g==null?void 0:g.dappModalContent,Jn)},Le.default.createElement(Ir,{visible:A,headerText:J,customHeader:$m,className:Zn,headerTextClassName:Qn,closeButtonClassName:oe,onHide:m}),Le.default.createElement(br,{className:Gm},o),Le.default.createElement(vr,{visible:R,customFooter:Vm,footerText:we,className:Hm}))),l!=null?l:document==null?void 0:document.body))},XT=E(KT,{ssrStyles:()=>Promise.resolve().then(()=>(be(),Se)),clientStyles:()=>(be(),F(Se)).default});n();n();var Im=require("react");n();n();var km=require("react"),ZT=require("@multiversx/sdk-hw-provider");pe();D();L();P();Te();n();var JT=require("react");n();n();var Ar=require("react");D();L();P();Te();G();n();var ex=require("react"),ox=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");pe();D();P();Te();$();$();n();var nx=require("react"),tx=require("@multiversx/sdk-passkey-provider/out");pe();D();P();Te();$();$();n();n();var Am=require("react");n();var ix=require("react");n();var Lr=require("react"),ax=require("socket.io-client");L();n();n();n();var sx=require("react");C();n();n();n();var cx=f(require("swr"));var mx=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,B.useState)(0),[l,_]=(0,B.useState)(!1),g=(0,B.useRef)(document==null?void 0:document.createElement("span")),x=(0,B.useRef)(document==null?void 0:document.createElement("span")),b=dm(p,300),A=()=>{if(g.current&&x.current){let we=x.current.offsetWidth-g.current.offsetWidth;_(we>1)}},R=()=>{m(p+1)};return(0,B.useEffect)(()=>(window==null||window.addEventListener("resize",R),()=>{window==null||window.removeEventListener("resize",R)})),(0,B.useEffect)(()=>{A()},[b]),B.default.createElement("span",{ref:g,className:(0,Pm.default)(c==null?void 0:c.trim,s,o,{overflow:l}),"data-testid":t},B.default.createElement("span",{ref:x,className:c==null?void 0:c.hiddenTextRef},e),l?B.default.createElement(B.default.Fragment,null,B.default.createElement("span",{className:c==null?void 0:c.left},B.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),B.default.createElement("span",{className:c==null?void 0:c.ellipsis},Ma),B.default.createElement("span",{className:c==null?void 0:c.right},B.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):B.default.createElement("span",null,e))},Cm=E(mx,{ssrStyles:()=>Promise.resolve().then(()=>(Cr(),Pr)),clientStyles:()=>(Cr(),F(Pr)).default});var lx={icon:To.faCheck},Er={icon:To.faTimes},_x={icon:To.faCircleNotch},ux={pending:_x,success:lx,fail:Er,invalid:Er,timedOut:Er},gx=({className:e,hash:o,status:t,iconSrc:s,isTimedOut:c,globalStyles:p,styles:m})=>{var g;let l=t?ux[t]:null,_=(g=s==null?void 0:s.icon)!=null?g:l==null?void 0:l.icon;return je.default.createElement("div",{className:(0,Nr.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&_!=null&&je.default.createElement(Nm.FontAwesomeIcon,{icon:_,className:(0,Nr.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":t==="pending"})}),je.default.createElement("span",{className:m==null?void 0:m.trim},je.default.createElement(Cm,{text:o})),je.default.createElement(Os,{text:o}),je.default.createElement(Gs,{page:`/${Ge}/${o}`,className:p==null?void 0:p.ml2}))},Dm=E(gx,{ssrStyles:()=>Promise.resolve().then(()=>($o(),Ho)),clientStyles:()=>($o(),F(Ho)).default});var fx=({title:e,transactions:o,isTimedOut:t=!1,className:s="dapp-transaction-details",styles:c})=>{if(o==null)return null;let{address:p}=He(),m=(0,Pe.useMemo)(()=>{let _=o.filter(x=>!wn(Q[x==null?void 0:x.status])).length,g=o.length;return g===1&&_===1?wn(Q[o[0].status])?"Processing transaction":"Transaction processed":`${_} / ${g} transactions processed`},[o]),l=o.length===1&&o[0].sender!==p;return Pe.default.createElement(Pe.default.Fragment,null,e&&Pe.default.createElement("div",{className:c==null?void 0:c.title},e),!l&&Pe.default.createElement("div",{className:c==null?void 0:c.status},m),o.map(({hash:_,status:g})=>{let x={className:s,hash:_,status:Q[g],isTimedOut:t};return Pe.default.createElement(Dm,w(u({},x),{key:_}))}))},Rm=E(fx,{ssrStyles:()=>Promise.resolve().then(()=>($o(),Ho)),clientStyles:()=>($o(),F(Ho)).default});var Tx=({style:e,toastDataState:o,transactions:t,showCloseButton:s,onDeleteToast:c,toastTitle:p,isTimedOut:m,customElements:l={CustomCloseButton:tn,TransactionToastStatusIcon:Om.FontAwesomeIcon,TransactionDetails:Rm},globalStyles:_,styles:g})=>{let x=l==null?void 0:l.TransactionDetails,b=l==null?void 0:l.TransactionToastStatusIcon,A=l==null?void 0:l.CustomCloseButton;return re.default.createElement("div",{className:e.content,"data-testid":"transactionToastContent"},re.default.createElement("div",{className:e.left},re.default.createElement("div",{className:(0,Mr.default)(e.icon,o.iconClassName)},b&&re.default.createElement(b,{size:"5x",icon:o.icon,className:e.svg}))),re.default.createElement("div",{className:e.right},re.default.createElement("div",{className:e.heading},re.default.createElement("h5",{className:(0,Mr.default)([_==null?void 0:_.h5,e.mb4]),"data-testid":"transactionToastTitle"},o.title),s&&A&&re.default.createElement(A,{className:g==null?void 0:g.close,onClick:c})),re.default.createElement("div",{className:e.footer},x&&re.default.createElement(x,{transactions:t,title:p,isTimedOut:m}))))},V8=E(Tx,{ssrStyles:()=>Promise.resolve().then(()=>(Rr(),Dr)),clientStyles:()=>(Rr(),F(Dr)).default});n();var Fm=f(require("react")),Um=f(require("classnames"));var yx=({className:e="dapp-transaction-toast-wrapper",children:o,id:t,styles:s})=>Fm.default.createElement("div",{id:t,className:(0,Um.default)(s==null?void 0:s.toasts,s==null?void 0:s.toastWrapper,e)},o),X8=E(yx,{ssrStyles:()=>Promise.resolve().then(()=>(Br(),Or)),clientStyles:()=>(Br(),F(Or)).default});var bx=({CustomCloseButton:e,onDelete:o})=>{let{styles:t}=Jo({ssrImportCallback:()=>Promise.resolve().then(()=>(Ur(),Fr)),clientImportCallback:()=>(Ur(),F(Fr)).default});return(0,Vo.useMemo)(()=>e?Vo.default.createElement(e,{onClick:o}):Vo.default.createElement(tn,{onClick:o,className:t==null?void 0:t.close}),[e,o,t])};0&&(module.exports={useMemoizedCloseButton});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=useMemoizedCloseButton.js.map
