"use strict";var dm=Object.create;var fo=Object.defineProperty,lm=Object.defineProperties,_m=Object.getOwnPropertyDescriptor,um=Object.getOwnPropertyDescriptors,gm=Object.getOwnPropertyNames,Wo=Object.getOwnPropertySymbols,fm=Object.getPrototypeOf,jn=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable;var gr=(e,o,t)=>o in e?fo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))jn.call(o,t)&&gr(e,t,o[t]);if(Wo)for(var t of Wo(o))fr.call(o,t)&&gr(e,t,o[t]);return e},w=(e,o)=>lm(e,um(o));var ke=(e,o)=>{var t={};for(var s in e)jn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Wo)for(var s of Wo(e))o.indexOf(s)<0&&fr.call(e,s)&&(t[s]=e[s]);return t};var f=(e,o)=>()=>(e&&(o=e(e=0)),o);var T=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),te=(e,o)=>{for(var t in o)fo(e,t,{get:o[t],enumerable:!0})},hr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of gm(o))!jn.call(e,c)&&c!==t&&fo(e,c,{get:()=>o[c],enumerable:!(s=_m(o,c))||s.enumerable});return e};var x=(e,o,t)=>(t=e!=null?dm(fm(e)):{},hr(o||!e||!e.__esModule?fo(t,"default",{value:e,enumerable:!0}):t,e)),J=e=>hr(fo({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{_(t.next(l))}catch(y){c(y)}},m=l=>{try{_(t.throw(l))}catch(y){c(y)}},_=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var yr=T(Go=>{"use strict";n();Go.byteLength=Tm;Go.toByteArray=ym;Go.fromByteArray=wm;var re=[],K=[],hm=typeof Uint8Array!="undefined"?Uint8Array:Array,qn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Le=0,Tr=qn.length;Le<Tr;++Le)re[Le]=qn[Le],K[qn.charCodeAt(Le)]=Le;var Le,Tr;K["-".charCodeAt(0)]=62;K["_".charCodeAt(0)]=63;function xr(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function Tm(e){var o=xr(e),t=o[0],s=o[1];return(t+s)*3/4-s}function xm(e,o,t){return(o+t)*3/4-t}function ym(e){var o,t=xr(e),s=t[0],c=t[1],p=new hm(xm(e,s,c)),m=0,_=c>0?s-4:s,l;for(l=0;l<_;l+=4)o=K[e.charCodeAt(l)]<<18|K[e.charCodeAt(l+1)]<<12|K[e.charCodeAt(l+2)]<<6|K[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=K[e.charCodeAt(l)]<<2|K[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=K[e.charCodeAt(l)]<<10|K[e.charCodeAt(l+1)]<<4|K[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Sm(e){return re[e>>18&63]+re[e>>12&63]+re[e>>6&63]+re[e&63]}function bm(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Sm(s));return c.join("")}function wm(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,_=t-s;m<_;m+=p)c.push(bm(e,m,m+p>_?_:m+p));return s===1?(o=e[t-1],c.push(re[o>>2]+re[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(re[o>>10]+re[o>>4&63]+re[o<<2&63]+"=")),c.join("")}});var Sr=T(zn=>{n();zn.read=function(e,o,t,s,c){var p,m,_=c*8-s-1,l=(1<<_)-1,y=l>>1,b=-7,S=t?c-1:0,N=t?-1:1,L=e[o+S];for(S+=N,p=L&(1<<-b)-1,L>>=-b,b+=_;b>0;p=p*256+e[o+S],S+=N,b-=8);for(m=p&(1<<-b)-1,p>>=-b,b+=s;b>0;m=m*256+e[o+S],S+=N,b-=8);if(p===0)p=1-y;else{if(p===l)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-y}return(L?-1:1)*m*Math.pow(2,p-s)};zn.write=function(e,o,t,s,c,p){var m,_,l,y=p*8-c-1,b=(1<<y)-1,S=b>>1,N=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=s?0:p-1,G=s?1:-1,Ge=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=b):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+S>=1?o+=N/l:o+=N*Math.pow(2,1-S),o*l>=2&&(m++,l/=2),m+S>=b?(_=0,m=b):m+S>=1?(_=(o*l-1)*Math.pow(2,c),m=m+S):(_=o*Math.pow(2,S-1)*Math.pow(2,c),m=0));c>=8;e[t+L]=_&255,L+=G,_/=256,c-=8);for(m=m<<c|_,y+=c;y>0;e[t+L]=m&255,L+=G,m/=256,y-=8);e[t+L-G]|=Ge*128}});var Dr=T($e=>{"use strict";n();var Kn=yr(),He=Sr(),br=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;$e.Buffer=d;$e.SlowBuffer=Nm;$e.INSPECT_MAX_BYTES=50;var Ho=2147483647;$e.kMaxLength=Ho;d.TYPED_ARRAY_SUPPORT=vm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function vm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function ue(e){if(e>Ho)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Zn(e)}return Ar(e,o,t)}d.poolSize=8192;function Ar(e,o,t){if(typeof e=="string")return Im(e,o);if(ArrayBuffer.isView(e))return km(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ae(e,ArrayBuffer)||e&&ae(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ae(e,SharedArrayBuffer)||e&&ae(e.buffer,SharedArrayBuffer)))return Yn(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=Lm(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return Ar(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Ir(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Am(e,o,t){return Ir(e),e<=0?ue(e):o!==void 0?typeof t=="string"?ue(e).fill(o,t):ue(e).fill(o):ue(e)}d.alloc=function(e,o,t){return Am(e,o,t)};function Zn(e){return Ir(e),ue(e<0?0:Qn(e)|0)}d.allocUnsafe=function(e){return Zn(e)};d.allocUnsafeSlow=function(e){return Zn(e)};function Im(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=kr(e,o)|0,s=ue(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function Xn(e){for(var o=e.length<0?0:Qn(e.length)|0,t=ue(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function km(e){if(ae(e,Uint8Array)){var o=new Uint8Array(e);return Yn(o.buffer,o.byteOffset,o.byteLength)}return Xn(e)}function Yn(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function Lm(e){if(d.isBuffer(e)){var o=Qn(e.length)|0,t=ue(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||et(e.length)?ue(0):Xn(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Xn(e.data)}function Qn(e){if(e>=Ho)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ho.toString(16)+" bytes");return e|0}function Nm(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(ae(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),ae(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ae(m,Uint8Array))p+m.length>c.length?d.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(d.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function kr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ae(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Jn(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Rr(e).length;default:if(c)return s?-1:Jn(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=kr;function Em(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Wm(this,o,t);case"utf8":case"utf-8":return Nr(this,o,t);case"ascii":return Um(this,o,t);case"latin1":case"binary":return Bm(this,o,t);case"base64":return Om(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Gm(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Ne(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ne(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ne(this,t,t+3),Ne(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ne(this,t,t+7),Ne(this,t+1,t+6),Ne(this,t+2,t+5),Ne(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Nr(this,0,o):Em.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=$e.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};br&&(d.prototype[br]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,p){if(ae(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=s-t,l=Math.min(m,_),y=this.slice(c,p),b=o.slice(t,s),S=0;S<l;++S)if(y[S]!==b[S]){m=y[S],_=b[S];break}return m<_?-1:_<m?1:0};function Lr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,et(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:wr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):wr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function wr(e,o,t,s,c){var p=1,m=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(L,G){return p===1?L[G]:L.readUInt16BE(G*p)}var y;if(c){var b=-1;for(y=t;y<m;y++)if(l(e,y)===l(o,b===-1?0:y-b)){if(b===-1&&(b=y),y-b+1===_)return b*p}else b!==-1&&(y-=y-b),b=-1}else for(t+_>m&&(t=m-_),y=t;y>=0;y--){for(var S=!0,N=0;N<_;N++)if(l(e,y+N)!==l(o,N)){S=!1;break}if(S)return y}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return Lr(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return Lr(this,o,t,s,!1)};function Pm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var _=parseInt(o.substr(m*2,2),16);if(et(_))return m;e[t+m]=_}return m}function Cm(e,o,t,s){return $o(Jn(o,e.length-t),e,t,s)}function Rm(e,o,t,s){return $o(Vm(o),e,t,s)}function Dm(e,o,t,s){return $o(Rr(o),e,t,s)}function Mm(e,o,t,s){return $o(jm(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Pm(this,o,t,s);case"utf8":case"utf-8":return Cm(this,o,t,s);case"ascii":case"latin1":case"binary":return Rm(this,o,t,s);case"base64":return Dm(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Mm(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Om(e,o,t){return o===0&&t===e.length?Kn.fromByteArray(e):Kn.fromByteArray(e.slice(o,t))}function Nr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,y,b,S;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(S=(p&31)<<6|l&63,S>127&&(m=S));break;case 3:l=e[c+1],y=e[c+2],(l&192)===128&&(y&192)===128&&(S=(p&15)<<12|(l&63)<<6|y&63,S>2047&&(S<55296||S>57343)&&(m=S));break;case 4:l=e[c+1],y=e[c+2],b=e[c+3],(l&192)===128&&(y&192)===128&&(b&192)===128&&(S=(p&15)<<18|(l&63)<<12|(y&63)<<6|b&63,S>65535&&S<1114112&&(m=S))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=_}return Fm(s)}var vr=4096;function Fm(e){var o=e.length;if(o<=vr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=vr));return t}function Um(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Bm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Wm(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=qm[e[p]];return c}function Gm(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function O(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||O(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||O(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};d.prototype.readInt8=function(o,t){return o=o>>>0,t||O(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||O(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||O(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||O(o,4,this.length),He.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||O(o,4,this.length),He.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||O(o,8,this.length),He.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||O(o,8,this.length),He.read(this,o,!1,52,8)};function H(e,o,t,s,c,p){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;H(this,o,t,s,p,0)}var m=1,_=0;for(this[t]=o&255;++_<s&&(m*=256);)this[t+_]=o/m&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;H(this,o,t,s,p,0)}var m=s-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);H(this,o,t,s,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<s&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);H(this,o,t,s,p-1,-p)}var m=s-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||H(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Er(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Pr(e,o,t,s,c){return o=+o,t=t>>>0,c||Er(e,o,t,4,34028234663852886e22,-34028234663852886e22),He.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return Pr(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return Pr(this,o,t,!1,s)};function Cr(e,o,t,s,c){return o=+o,t=t>>>0,c||Er(e,o,t,8,17976931348623157e292,-17976931348623157e292),He.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return Cr(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return Cr(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=_[m%l]}return this};var Hm=/[^+/0-9A-Za-z-_]/g;function $m(e){if(e=e.split("=")[0],e=e.trim().replace(Hm,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Jn(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Vm(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function jm(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Rr(e){return Kn.toByteArray($m(e))}function $o(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ae(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function et(e){return e!==e}var qm=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Br=T((NT,Ur)=>{n();var R=Ur.exports={},ie,se;function ot(){throw new Error("setTimeout has not been defined")}function nt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ie=setTimeout:ie=ot}catch(e){ie=ot}try{typeof clearTimeout=="function"?se=clearTimeout:se=nt}catch(e){se=nt}})();function Mr(e){if(ie===setTimeout)return setTimeout(e,0);if((ie===ot||!ie)&&setTimeout)return ie=setTimeout,setTimeout(e,0);try{return ie(e,0)}catch(o){try{return ie.call(null,e,0)}catch(t){return ie.call(this,e,0)}}}function zm(e){if(se===clearTimeout)return clearTimeout(e);if((se===nt||!se)&&clearTimeout)return se=clearTimeout,clearTimeout(e);try{return se(e)}catch(o){try{return se.call(null,e)}catch(t){return se.call(this,e)}}}var ge=[],Ve=!1,Ee,Vo=-1;function Km(){!Ve||!Ee||(Ve=!1,Ee.length?ge=Ee.concat(ge):Vo=-1,ge.length&&Or())}function Or(){if(!Ve){var e=Mr(Km);Ve=!0;for(var o=ge.length;o;){for(Ee=ge,ge=[];++Vo<o;)Ee&&Ee[Vo].run();Vo=-1,o=ge.length}Ee=null,Ve=!1,zm(e)}}R.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ge.push(new Fr(e,o)),ge.length===1&&!Ve&&Mr(Or)};function Fr(e,o){this.fun=e,this.array=o}Fr.prototype.run=function(){this.fun.apply(null,this.array)};R.title="browser";R.browser=!0;R.env={};R.argv=[];R.version="";R.versions={};function fe(){}R.on=fe;R.addListener=fe;R.once=fe;R.off=fe;R.removeListener=fe;R.removeAllListeners=fe;R.emit=fe;R.prependListener=fe;R.prependOnceListener=fe;R.listeners=function(e){return[]};R.binding=function(e){throw new Error("process.binding is not supported")};R.cwd=function(){return"/"};R.chdir=function(e){throw new Error("process.chdir is not supported")};R.umask=function(){return 0}});var r,i,Xm,a,n=f(()=>{r=x(Dr()),i=x(Br()),Xm=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Xm});var Wr=f(()=>{"use strict";n()});var ce=f(()=>{"use strict";n()});var Gr=f(()=>{"use strict";n()});var tt,Hr=f(()=>{"use strict";n();tt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(tt||{})});var $r=f(()=>{"use strict";n()});var rt=f(()=>{"use strict";n()});var Vr=f(()=>{"use strict";n()});var at=f(()=>{"use strict";n()});var jr=f(()=>{"use strict";n()});var qr=f(()=>{"use strict";n()});var Pe,je,be=f(()=>{"use strict";n();Pe=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),je=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var zr,GT,Kr,HT,E=f(()=>{"use strict";n();be();zr=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(zr||{}),GT=u(u({},je.WindowProviderRequestEnums),zr),Kr=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Kr||{}),HT=u(u({},je.WindowProviderResponseEnums),Kr)});var Xr=f(()=>{"use strict";n()});var Yr=f(()=>{"use strict";n()});var $=f(()=>{"use strict";n()});var Jr=f(()=>{"use strict";n()});var Zr=f(()=>{"use strict";n()});var Qr=f(()=>{"use strict";n()});var D=f(()=>{"use strict";n();at();jr();qr();E();Xr();Yr();$();Jr();Zr();Qr()});var qe,ea,ax,oa,ix,na,sx,cx,Ym,ze=f(()=>{"use strict";n();D();qe={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ea,egldLabel:ax}=qe["devnet"],{chainId:oa,egldLabel:ix}=qe["testnet"],{chainId:na,egldLabel:sx}=qe["mainnet"],cx={["devnet"]:ea,["testnet"]:oa,["mainnet"]:na},Ym={[ea]:"devnet",[oa]:"testnet",[na]:"mainnet"}});var jo=f(()=>{"use strict";n()});var pe,ta=f(()=>{"use strict";n();pe=require("@multiversx/sdk-web-wallet-provider")});var me,Ke=f(()=>{"use strict";n();me=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ra,aa,it,ux,gx,st=f(()=>{"use strict";n();Ke();it=String((aa=(ra=me.safeWindow)==null?void 0:ra.navigator)==null?void 0:aa.userAgent),ux=/^((?!chrome|android).)*safari/i.test(it),gx=/firefox/i.test(it)&&/windows/i.test(it)});var qo,zo,ia,Ko,sa,Xe,A=f(()=>{"use strict";n();Wr();ce();Gr();Hr();$r();rt();Vr();ze();jo();ta();st();qo=5e4,zo=1e9,ia=1,Ko="logout",sa="login",Xe="0"});var Ce,Ye=f(()=>{"use strict";n();Ce=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var ct={};te(ct,{css:()=>pa,default:()=>Jm});var pa,Jm,pt=f(()=>{"use strict";n();pa=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pa));Jm={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var To,Xo=f(()=>{"use strict";n();To=()=>Date.now()/1e3});var la=f(()=>{"use strict";n()});var _a=f(()=>{"use strict";n()});var dt=f(()=>{"use strict";n();Xo();la();_a()});var lt={};te(lt,{clear:()=>td,getItem:()=>od,localStorageKeys:()=>we,removeItem:()=>nd,setItem:()=>ed});var we,Yo,ed,od,nd,td,Je=f(()=>{"use strict";n();dt();we={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Yo=typeof localStorage!="undefined",ed=({key:e,data:o,expires:t})=>{!Yo||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},od=e=>{if(!Yo)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:To()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},nd=e=>{!Yo||localStorage.removeItem(String(e))},td=()=>{!Yo||localStorage.clear()}});var _t={};te(_t,{clear:()=>ha,getItem:()=>ga,removeItem:()=>fa,setItem:()=>ua,storage:()=>rd});var ua,ga,fa,ha,rd,Ta=f(()=>{"use strict";n();ua=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ga=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},fa=e=>sessionStorage.removeItem(String(e)),ha=()=>sessionStorage.clear(),rd={setItem:ua,getItem:ga,removeItem:fa,clear:ha}});var Re,Ze=f(()=>{"use strict";n();Je();Ta();Re={session:_t,local:lt}});var ut,P,j,C=f(()=>{"use strict";n();ut=require("@reduxjs/toolkit");A();P=(0,ut.createAction)(Ko),j=(0,ut.createAction)(sa,e=>({payload:e}))});var ft,xa,ya,Jo,gt,Sa,Zo,ad,ht,ey,id,sd,oy,ny,ty,cd,pd,Qo,en=f(()=>{"use strict";n();ft=require("@multiversx/sdk-core"),xa=require("@reduxjs/toolkit"),ya=require("redux-persist");A();Ze();Je();C();Jo={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Xe},gt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Jo},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Sa=(0,xa.createSlice)({name:"accountInfoSlice",initialState:gt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new ft.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Jo},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(P,()=>(Re.local.removeItem(we.loginExpiresAt),gt)),e.addCase(j,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new ft.Address(s).hex()}),e.addCase(ya.REHYDRATE,(o,t)=>{var y;if(!((y=t.payload)!=null&&y.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:gt.accounts,o.publicKey=_})}}),{setAccount:Zo,setAddress:ad,setAccountNonce:ht,setAccountShard:ey,setLedgerAccount:id,updateLedgerAccount:sd,setWalletConnectAccount:oy,setIsAccountLoading:ny,setAccountLoadingError:ty,setWebsocketEvent:cd,setWebsocketBatchEvent:pd}=Sa.actions,Qo=Sa.reducer});function xo(){return new Date().setHours(new Date().getHours()+24)}function yo(e){Re.local.setItem({key:we.loginExpiresAt,data:e,expires:e})}var Tt=f(()=>{"use strict";n();Ze();Je()});var wa,ba,va,_y,md,dd,Aa,uy,ld,Ia,gy,fy,hy,on,nn=f(()=>{"use strict";n();wa=require("@reduxjs/toolkit");Tt();E();C();ba={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},va=(0,wa.createSlice)({name:"loginInfoSlice",initialState:ba,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(P,()=>ba),e.addCase(j,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,yo(xo())})}}),{setLoginMethod:_y,setWalletConnectLogin:md,setLedgerLogin:dd,setTokenLogin:Aa,setTokenLoginSignature:uy,setWalletLogin:ld,invalidateLoginSession:Ia,setLogoutRoute:gy,setIsWalletConnectV2Initialized:fy,setWebviewLogin:hy}=va.actions,on=va.reducer});var La,ka,Na,Sy,_d,by,ud,tn,rn=f(()=>{"use strict";n();La=require("@reduxjs/toolkit");C();ka={},Na=(0,La.createSlice)({name:"modalsSlice",initialState:ka,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(P,()=>ka)}}),{setTxSubmittedModal:Sy,setNotificationModal:_d,clearTxSubmittedModal:by,clearNotificationModal:ud}=Na.actions,tn=Na.reducer});var M,U=f(()=>{"use strict";n();Ye();M=()=>{if(!Ce())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Ea=f(()=>{"use strict";n();U()});var Pa=f(()=>{"use strict";n();B()});var Ca=f(()=>{"use strict";n();Ke()});var B=f(()=>{"use strict";n();Ea();Pa();U();Ca()});var So=f(()=>{"use strict";n();B()});var Da=f(()=>{"use strict";n();So()});function Ma(e){return e[Math.floor(Math.random()*e.length)]}var Oa=f(()=>{"use strict";n()});var xt=f(()=>{"use strict";n();rt()});var he=f(()=>{"use strict";n();Da();Oa();xt()});var Fa,Ua,Ba,yt,fd,Wa,eS,oS,hd,an,sn=f(()=>{"use strict";n();Fa=require("@reduxjs/toolkit"),Ua=x(require("lodash.omit")),Ba=require("redux-persist");jo();C();he();yt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},fd={network:yt},Wa=(0,Fa.createSlice)({name:"appConfig",initialState:fd,reducers:{initializeNetworkConfig:(e,o)=>{let t=Ma(o.payload.walletConnectV2RelayAddresses),s=(0,Ua.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(P,o=>{o.network.customWalletAddress=void 0}),e.addCase(Ba.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:eS,updateNetworkConfig:oS,setCustomWalletAddress:hd}=Wa.actions,an=Wa.reducer});var Ga,St,Ha,sS,cS,pS,cn,pn=f(()=>{"use strict";n();Ga=require("@reduxjs/toolkit");D();C();St={isSigning:!1,signedSessions:{}},Ha=(0,Ga.createSlice)({name:"signedMessageInfoSliceState",initialState:St,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>St},extraReducers:e=>{e.addCase(P,()=>St)}}),{setSignSession:sS,clearSignedMessageInfo:cS,setSignSessionState:pS}=Ha.actions,cn=Ha.reducer});var Va,ja,$a,qa,Td,xd,fS,yd,mn,dn=f(()=>{"use strict";n();Va=require("@reduxjs/toolkit"),ja=require("redux-persist");D();Xo();C();$a={customToasts:[],transactionToasts:[]},qa=(0,Va.createSlice)({name:"toastsSlice",initialState:$a,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:To(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(P,()=>$a),e.addCase(ja.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:Td,removeCustomToast:xd,addTransactionToast:fS,removeTransactionToast:yd}=qa.actions,mn=qa.reducer});var za,wt,vt,At,Sd,bt,Ka,yS,bd,It,ln,_n=f(()=>{"use strict";n();za=require("@reduxjs/toolkit");C();wt="Transaction failed",vt="Transaction successful",At="Processing transaction",Sd="Transaction submitted",bt={},Ka=(0,za.createSlice)({name:"transactionsInfo",initialState:bt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||wt,successMessage:(s==null?void 0:s.successMessage)||vt,processingMessage:(s==null?void 0:s.processingMessage)||At,submittedMessage:(s==null?void 0:s.submittedMessage)||Sd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>bt},extraReducers:e=>{e.addCase(P,()=>bt)}}),{clearTransactionsInfo:yS,setTransactionsDisplayInfo:bd,clearTransactionsInfoForSessionId:It}=Ka.actions,ln=Ka.reducer});function eo(e){return e!=null&&(Cd(e)||Fd(e))}function oo(e){return e!=null&&(Rd(e)||Ud(e))}function no(e){return e!=null&&(Dd(e)||Bd(e))}function Xa(e){return e!=null&&(Md(e)||Wd(e))}function kt(e){return e!=null&&Od(e)}function Cd(e){return e!=null&&wd.includes(e)}function Rd(e){return e!=null&&vd.includes(e)}function Dd(e){return e!=null&&Ad.includes(e)}function Md(e){return e!=null&&Id.includes(e)}function Od(e){return e!=null&&kd.includes(e)}function Fd(e){return e!=null&&Ld.includes(e)}function Ud(e){return e!=null&&Nd.includes(e)}function Bd(e){return e!=null&&Ed.includes(e)}function Wd(e){return e!=null&&Pd.includes(e)}var wd,vd,Ad,Id,kd,Ld,Nd,Ed,Pd,to=f(()=>{"use strict";n();E();wd=["sent"],vd=["success"],Ad=["fail","cancelled","timedOut"],Id=["invalid"],kd=["timedOut"],Ld=["pending"],Nd=["success"],Ed=["fail","invalid"],Pd=["not executed"]});var Ya,Ja,bo,Gd,Za,Qa,ei,Hd,un,$d,Vd,NS,jd,wo,Lt,ES,gn,fn=f(()=>{"use strict";n();Ya=require("@reduxjs/toolkit"),Ja=require("redux-persist");E();to();C();bo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Gd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Za=(0,Ya.createSlice)({name:"transactionsSlice",initialState:bo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,y;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Gd),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((y=e==null?void 0:e.transactionsToSign)==null?void 0:y.sessionId)===t&&(e.transactionsToSign=bo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var y,b,S,N,L,G,Ge,Bo;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(b=(y=e.signedTransactions)==null?void 0:y[t])==null?void 0:b.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(Y=>Y.hash===p?w(u(u({},m!=null?m:{}),Y),{status:s,errorMessage:c,inTransit:_}):Y);let Hn=(N=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:N.every(Y=>oo(Y.status)),$n=(G=(L=e.signedTransactions[t])==null?void 0:L.transactions)==null?void 0:G.some(Y=>no(Y.status)),Vn=(Bo=(Ge=e.signedTransactions[t])==null?void 0:Ge.transactions)==null?void 0:Bo.every(Y=>Xa(Y.status));Hn&&(e.signedTransactions[t].status="success"),$n&&(e.signedTransactions[t].status="fail"),Vn&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=bo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=bo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(P,()=>bo),e.addCase(Ja.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((_,[l,y])=>{let b=new Date(l),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(_[l]=y),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Qa,updateSignedTransactions:ei,setTransactionsToSign:Hd,clearAllTransactionsToSign:un,clearAllSignedTransactions:$d,clearSignedTransaction:Vd,clearTransactionToSign:NS,setSignTransactionsError:jd,setSignTransactionsCancelMessage:wo,moveTransactionsToSignedState:Lt,updateSignedTransactionsCustomTransactionInformation:ES}=Za.actions,gn=Za.reducer});var oi,Nt,ni,DS,MS,qd,OS,hn,Tn=f(()=>{"use strict";n();oi=require("@reduxjs/toolkit");C();Nt={},ni=(0,oi.createSlice)({name:"batchTransactionsSlice",initialState:Nt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Nt},extraReducers:e=>{e.addCase(P,()=>Nt)}}),{setBatchTransactions:DS,updateBatchTransactions:MS,clearBatchTransactions:qd,clearAllBatchTransactions:OS}=ni.actions,hn=ni.reducer});var ri,ti,ai,WS,ii,Et=f(()=>{"use strict";n();ri=require("@reduxjs/toolkit");C();ti={},ai=(0,ri.createSlice)({name:"dappConfigSlice",initialState:ti,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(P,()=>ti)}}),{setDappConfig:WS}=ai.actions,ii=ai.reducer});var k=f(()=>{"use strict";n();en();nn();rn();sn();pn();dn();_n();fn();Tn();Et()});var Pt=f(()=>{"use strict";n()});var pi,Yd,Jd,De,Sn=f(()=>{"use strict";n();pi=require("@reduxjs/toolkit");Pt();en();Tn();Et();nn();rn();sn();pn();dn();_n();fn();Yd={["account"]:Qo,["dappConfig"]:ii,["loginInfo"]:on,["modals"]:tn,["networkConfig"]:an,["signedMessageInfo"]:cn,["toasts"]:mn,["transactionsInfo"]:ln,["transactions"]:gn,["batchTransactions"]:hn},Jd=(e={})=>(0,pi.combineReducers)(u(u({},Yd),e)),De=Jd});var _i={};te(_i,{default:()=>_l,sessionStorageReducers:()=>Ct});function Te(e,o=[]){return{key:e,version:1,storage:di.default,blacklist:o}}var V,mi,di,Zd,vo,Qd,el,ol,nl,tl,rl,al,il,sl,cl,li,pl,Ct,ml,dl,ll,_l,ui=f(()=>{"use strict";n();V=require("redux-persist"),mi=x(require("redux-persist/lib/storage")),di=x(require("redux-persist/lib/storage/session"));Sn();k();en();Tn();nn();rn();sn();pn();dn();_n();fn();Pt();Zd={persistReducersStorageType:"localStorage"},vo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Qd=Te(vo["account"]),el=Te(vo["loginInfo"]),ol=Te(vo["modals"]),nl=Te(vo["networkConfig"]),tl={2:e=>w(u({},e),{networkConfig:yt})};rl=Te("sdk-dapp-transactionsInfo"),al=Te("sdk-dapp-transactions",["transactionsToSign"]),il=Te("sdk-dapp-batchTransactions",["batchTransactions"]),sl=Te("sdk-dapp-toasts"),cl=Te("sdk-dapp-signedMessageInfo"),li={key:"sdk-dapp-store",version:2,storage:mi.default,whitelist:Object.keys(vo),migrate:(0,V.createMigrate)(tl,{debug:!1})},pl=w(u({},li),{whitelist:[]}),Ct={["toasts"]:(0,V.persistReducer)(sl,mn),["transactions"]:(0,V.persistReducer)(al,gn),["transactionsInfo"]:(0,V.persistReducer)(rl,ln),["batchTransactions"]:(0,V.persistReducer)(il,hn),["signedMessageInfo"]:(0,V.persistReducer)(cl,cn)},ml=w(u({},Ct),{["account"]:(0,V.persistReducer)(Qd,Qo),["loginInfo"]:(0,V.persistReducer)(el,on),["modals"]:(0,V.persistReducer)(ol,tn),["networkConfig"]:(0,V.persistReducer)(nl,an)}),dl=Zd.persistReducersStorageType==="localStorage",ll=dl?(0,V.persistReducer)(li,De(Ct)):(0,V.persistReducer)(pl,De(ml)),_l=ll});var gi={};te(gi,{default:()=>ul});var ul,fi=f(()=>{"use strict";n();Sn();ul=De()});var hi={};te(hi,{default:()=>fl});var X,gl,fl,Ti=f(()=>{"use strict";n();X=require("redux-persist"),gl=[X.FLUSH,X.REHYDRATE,X.PAUSE,X.PERSIST,X.PURGE,X.REGISTER],fl=gl});var Si={};te(Si,{default:()=>yi});function yi(e){return(0,xi.persistStore)(e)}var xi,bi=f(()=>{"use strict";n();xi=require("redux-persist")});var As=T((ID,vs)=>{n();var pu=typeof a=="object"&&a&&a.Object===Object&&a;vs.exports=pu});var Po=T((kD,Is)=>{n();var mu=As(),du=typeof self=="object"&&self&&self.Object===Object&&self,lu=mu||du||Function("return this")();Is.exports=lu});var Jt=T((LD,ks)=>{n();var _u=Po(),uu=_u.Symbol;ks.exports=uu});var Ps=T((ND,Es)=>{n();var Ls=Jt(),Ns=Object.prototype,gu=Ns.hasOwnProperty,fu=Ns.toString,Co=Ls?Ls.toStringTag:void 0;function hu(e){var o=gu.call(e,Co),t=e[Co];try{e[Co]=void 0;var s=!0}catch(p){}var c=fu.call(e);return s&&(o?e[Co]=t:delete e[Co]),c}Es.exports=hu});var Rs=T((ED,Cs)=>{n();var Tu=Object.prototype,xu=Tu.toString;function yu(e){return xu.call(e)}Cs.exports=yu});var Zt=T((PD,Os)=>{n();var Ds=Jt(),Su=Ps(),bu=Rs(),wu="[object Null]",vu="[object Undefined]",Ms=Ds?Ds.toStringTag:void 0;function Au(e){return e==null?e===void 0?vu:wu:Ms&&Ms in Object(e)?Su(e):bu(e)}Os.exports=Au});var Us=T((CD,Fs)=>{n();var Iu=Array.isArray;Fs.exports=Iu});var Ws=T((RD,Bs)=>{n();function ku(e){return e!=null&&typeof e=="object"}Bs.exports=ku});var Hs=T((DD,Gs)=>{n();var Lu=Zt(),Nu=Us(),Eu=Ws(),Pu="[object String]";function Cu(e){return typeof e=="string"||!Nu(e)&&Eu(e)&&Lu(e)==Pu}Gs.exports=Cu});var Un=T((R3,zs)=>{n();function Ju(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}zs.exports=Ju});var Xs=T((D3,Ks)=>{n();var Zu=Zt(),Qu=Un(),eg="[object AsyncFunction]",og="[object Function]",ng="[object GeneratorFunction]",tg="[object Proxy]";function rg(e){if(!Qu(e))return!1;var o=Zu(e);return o==og||o==ng||o==eg||o==tg}Ks.exports=rg});var Js=T((M3,Ys)=>{n();var ag=Po(),ig=ag["__core-js_shared__"];Ys.exports=ig});var ec=T((O3,Qs)=>{n();var nr=Js(),Zs=function(){var e=/[^.]+$/.exec(nr&&nr.keys&&nr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function sg(e){return!!Zs&&Zs in e}Qs.exports=sg});var nc=T((F3,oc)=>{n();var cg=Function.prototype,pg=cg.toString;function mg(e){if(e!=null){try{return pg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}oc.exports=mg});var rc=T((U3,tc)=>{n();var dg=Xs(),lg=ec(),_g=Un(),ug=nc(),gg=/[\\^$.*+?()[\]{}|]/g,fg=/^\[object .+?Constructor\]$/,hg=Function.prototype,Tg=Object.prototype,xg=hg.toString,yg=Tg.hasOwnProperty,Sg=RegExp("^"+xg.call(yg).replace(gg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function bg(e){if(!_g(e)||lg(e))return!1;var o=dg(e)?Sg:fg;return o.test(ug(e))}tc.exports=bg});var ic=T((B3,ac)=>{n();function wg(e,o){return e==null?void 0:e[o]}ac.exports=wg});var Bn=T((W3,sc)=>{n();var vg=rc(),Ag=ic();function Ig(e,o){var t=Ag(e,o);return vg(t)?t:void 0}sc.exports=Ig});var Ro=T((G3,cc)=>{n();var kg=Bn(),Lg=kg(Object,"create");cc.exports=Lg});var dc=T((H3,mc)=>{n();var pc=Ro();function Ng(){this.__data__=pc?pc(null):{},this.size=0}mc.exports=Ng});var _c=T(($3,lc)=>{n();function Eg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}lc.exports=Eg});var gc=T((V3,uc)=>{n();var Pg=Ro(),Cg="__lodash_hash_undefined__",Rg=Object.prototype,Dg=Rg.hasOwnProperty;function Mg(e){var o=this.__data__;if(Pg){var t=o[e];return t===Cg?void 0:t}return Dg.call(o,e)?o[e]:void 0}uc.exports=Mg});var hc=T((j3,fc)=>{n();var Og=Ro(),Fg=Object.prototype,Ug=Fg.hasOwnProperty;function Bg(e){var o=this.__data__;return Og?o[e]!==void 0:Ug.call(o,e)}fc.exports=Bg});var xc=T((q3,Tc)=>{n();var Wg=Ro(),Gg="__lodash_hash_undefined__";function Hg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Wg&&o===void 0?Gg:o,this}Tc.exports=Hg});var Sc=T((z3,yc)=>{n();var $g=dc(),Vg=_c(),jg=gc(),qg=hc(),zg=xc();function po(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}po.prototype.clear=$g;po.prototype.delete=Vg;po.prototype.get=jg;po.prototype.has=qg;po.prototype.set=zg;yc.exports=po});var wc=T((K3,bc)=>{n();function Kg(){this.__data__=[],this.size=0}bc.exports=Kg});var Ac=T((X3,vc)=>{n();function Xg(e,o){return e===o||e!==e&&o!==o}vc.exports=Xg});var Do=T((Y3,Ic)=>{n();var Yg=Ac();function Jg(e,o){for(var t=e.length;t--;)if(Yg(e[t][0],o))return t;return-1}Ic.exports=Jg});var Lc=T((J3,kc)=>{n();var Zg=Do(),Qg=Array.prototype,ef=Qg.splice;function of(e){var o=this.__data__,t=Zg(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():ef.call(o,t,1),--this.size,!0}kc.exports=of});var Ec=T((Z3,Nc)=>{n();var nf=Do();function tf(e){var o=this.__data__,t=nf(o,e);return t<0?void 0:o[t][1]}Nc.exports=tf});var Cc=T((Q3,Pc)=>{n();var rf=Do();function af(e){return rf(this.__data__,e)>-1}Pc.exports=af});var Dc=T((eM,Rc)=>{n();var sf=Do();function cf(e,o){var t=this.__data__,s=sf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}Rc.exports=cf});var Oc=T((oM,Mc)=>{n();var pf=wc(),mf=Lc(),df=Ec(),lf=Cc(),_f=Dc();function mo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}mo.prototype.clear=pf;mo.prototype.delete=mf;mo.prototype.get=df;mo.prototype.has=lf;mo.prototype.set=_f;Mc.exports=mo});var Uc=T((nM,Fc)=>{n();var uf=Bn(),gf=Po(),ff=uf(gf,"Map");Fc.exports=ff});var Gc=T((tM,Wc)=>{n();var Bc=Sc(),hf=Oc(),Tf=Uc();function xf(){this.size=0,this.__data__={hash:new Bc,map:new(Tf||hf),string:new Bc}}Wc.exports=xf});var $c=T((rM,Hc)=>{n();function yf(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Hc.exports=yf});var Mo=T((aM,Vc)=>{n();var Sf=$c();function bf(e,o){var t=e.__data__;return Sf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Vc.exports=bf});var qc=T((iM,jc)=>{n();var wf=Mo();function vf(e){var o=wf(this,e).delete(e);return this.size-=o?1:0,o}jc.exports=vf});var Kc=T((sM,zc)=>{n();var Af=Mo();function If(e){return Af(this,e).get(e)}zc.exports=If});var Yc=T((cM,Xc)=>{n();var kf=Mo();function Lf(e){return kf(this,e).has(e)}Xc.exports=Lf});var Zc=T((pM,Jc)=>{n();var Nf=Mo();function Ef(e,o){var t=Nf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}Jc.exports=Ef});var ep=T((mM,Qc)=>{n();var Pf=Gc(),Cf=qc(),Rf=Kc(),Df=Yc(),Mf=Zc();function lo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}lo.prototype.clear=Pf;lo.prototype.delete=Cf;lo.prototype.get=Rf;lo.prototype.has=Df;lo.prototype.set=Mf;Qc.exports=lo});var np=T((dM,op)=>{n();var Of="__lodash_hash_undefined__";function Ff(e){return this.__data__.set(e,Of),this}op.exports=Ff});var rp=T((lM,tp)=>{n();function Uf(e){return this.__data__.has(e)}tp.exports=Uf});var ip=T((_M,ap)=>{n();var Bf=ep(),Wf=np(),Gf=rp();function Wn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Bf;++o<t;)this.add(e[o])}Wn.prototype.add=Wn.prototype.push=Wf;Wn.prototype.has=Gf;ap.exports=Wn});var cp=T((uM,sp)=>{n();function Hf(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}sp.exports=Hf});var mp=T((gM,pp)=>{n();function $f(e){return e!==e}pp.exports=$f});var lp=T((fM,dp)=>{n();function Vf(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}dp.exports=Vf});var up=T((hM,_p)=>{n();var jf=cp(),qf=mp(),zf=lp();function Kf(e,o,t){return o===o?zf(e,o,t):jf(e,qf,t)}_p.exports=Kf});var fp=T((TM,gp)=>{n();var Xf=up();function Yf(e,o){var t=e==null?0:e.length;return!!t&&Xf(e,o,0)>-1}gp.exports=Yf});var Tp=T((xM,hp)=>{n();function Jf(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}hp.exports=Jf});var yp=T((yM,xp)=>{n();function Zf(e,o){return e.has(o)}xp.exports=Zf});var bp=T((SM,Sp)=>{n();var Qf=Bn(),eh=Po(),oh=Qf(eh,"Set");Sp.exports=oh});var vp=T((bM,wp)=>{n();function nh(){}wp.exports=nh});var tr=T((wM,Ap)=>{n();function th(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Ap.exports=th});var kp=T((vM,Ip)=>{n();var rr=bp(),rh=vp(),ah=tr(),ih=1/0,sh=rr&&1/ah(new rr([,-0]))[1]==ih?function(e){return new rr(e)}:rh;Ip.exports=sh});var Np=T((AM,Lp)=>{n();var ch=ip(),ph=fp(),mh=Tp(),dh=yp(),lh=kp(),_h=tr(),uh=200;function gh(e,o,t){var s=-1,c=ph,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=mh;else if(p>=uh){var y=o?null:lh(e);if(y)return _h(y);m=!1,c=dh,l=new ch}else l=o?[]:_;e:for(;++s<p;){var b=e[s],S=o?o(b):b;if(b=t||b!==0?b:0,m&&S===S){for(var N=l.length;N--;)if(l[N]===S)continue e;o&&l.push(S),_.push(b)}else c(l,S,t)||(l!==_&&l.push(S),_.push(b))}return _}Lp.exports=gh});var Pp=T((IM,Ep)=>{n();var fh=Np();function hh(e){return e&&e.length?fh(e):[]}Ep.exports=hh});var ye={};te(ye,{css:()=>Hp,default:()=>Qh});var Hp,Qh,Se=f(()=>{"use strict";n();Hp=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hp));Qh={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var _r={};te(_r,{css:()=>om,default:()=>ST});var om,ST,ur=f(()=>{"use strict";n();om=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(om));ST={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var vT={};te(vT,{ConfirmAmountNftSft:()=>wT});module.exports=J(vT);n();var ne=x(require("react")),nm=require("@fortawesome/free-solid-svg-icons"),tm=require("@fortawesome/react-fontawesome"),rm=x(require("classnames"));A();n();var da=x(require("react"));n();var ho=x(require("react"));n();Ye();var ca=()=>!Ce();var Zm=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(pt(),ct))}),Qm=()=>(pt(),J(ct)).default,mt=ca();function ma({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=ho.default.useState(mt?void 0:Qm()),[p,m]=ho.default.useState(mt||t==null?void 0:t()),_=()=>g(this,null,function*(){(e?e():Zm()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,ho.useEffect)(()=>{mt&&_()},[]),{globalStyles:s,styles:p}}function de(e,o){return t=>{let{globalStyles:s,styles:c}=ma({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return da.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();n();var Li=require("react"),ro=require("react-redux");n();var Rt=require("@reduxjs/toolkit"),Ii=require("react-redux/lib/utils/Subscription");k();n();var si=x(require("lodash.throttle"));A();k();Tt();Ze();Je();var zd=[Ko],xn=!1,Kd=(0,si.default)(()=>{yo(xo())},5e3),ci=e=>o=>t=>{if(zd.includes(t.type))return o(t);let s=e.getState(),c=Re.local.getItem(we.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return yo(xo());let m=Date.now();return c-m<0&&!xn?setTimeout(()=>{xn=!0,e.dispatch(Ia())},1e3):(xn&&(xn=!1),Kd()),o(t)};n();n();function yn(){return typeof sessionStorage!="undefined"}var wi=yn()?(ui(),J(_i)).default:(fi(),J(gi)).default,vi=yn()?(Ti(),J(hi)).default:[],Ai=yn()?(bi(),J(Si)).default:e=>e;Sn();var v=(0,Rt.configureStore)({reducer:wi,middleware:e=>e({serializableCheck:{ignoredActions:[...vi,ht.type,Zo.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(ci)}),ki=(0,Ii.createSubscription)(v),Ub=Ai(v),Bb=(0,Rt.configureStore)({reducer:De});var hl={store:v,subscription:ki},Dt=(0,Li.createContext)(hl),$b=(0,ro.createStoreHook)(Dt),W=(0,ro.createDispatchHook)(Dt),I=(0,ro.createSelectorHook)(Dt);n();n();k();n();var Ni=x(require("lodash.isequal")),bn=require("reselect"),h=(0,bn.createSelectorCreator)(bn.defaultMemoize,Ni.default);var le=e=>e.account,Me=h(le,e=>e.address),ao=h(le,Me,(e,o)=>o in e.accounts?e.accounts[o]:Jo),Tl=h(le,ao,(e,o)=>{let c=e,{accounts:t}=c,s=ke(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),Kb=h(ao,e=>e.balance),xl=h(ao,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Xb=h(le,e=>e.shard),yl=h(le,e=>e.ledgerAccount),Yb=h(le,e=>e.walletConnectAccount),Jb=h(le,e=>e.isAccountLoading),Zb=h(le,e=>e.accountLoadingError),Sl=h(le,e=>e.websocketEvent),bl=h(le,e=>e.websocketBatchEvent);n();var Ei=e=>e.dappConfig,o0=h(Ei,e=>e.shouldUseWebViewProvider);n();var q=e=>e.loginInfo,wl=h(q,e=>e.loginMethod),wn=h(q,Me,(e,o)=>Boolean(o)),a0=h(q,e=>e.walletConnectLogin),vl=h(q,e=>e.ledgerLogin),Al=h(q,e=>e.walletLogin),i0=h(q,e=>e.isLoginSessionInvalid),Mt=h(q,e=>e.tokenLogin),Pi=h(q,e=>e.logoutRoute),Il=h(q,e=>e.isWalletConnectV2Initialized);n();var Ci=e=>e.modals,p0=h(Ci,e=>e.txSubmittedModal),kl=h(Ci,e=>e.notificationModal);n();var Z=e=>e.networkConfig,vn=h(Z,e=>e.network.chainId),Ll=h(Z,e=>e.network.roundDuration),l0=h(Z,e=>e.network.walletConnectBridgeAddress),Nl=h(Z,e=>e.network.walletConnectV2RelayAddress),El=h(Z,e=>e.network.walletConnectV2ProjectId),Pl=h(Z,e=>e.network.walletConnectV2Options),Cl=h(Z,e=>e.network.walletConnectDeepLink),z=h(Z,e=>e.network),Ri=h(z,e=>e.apiAddress),Di=h(z,e=>e.explorerAddress),Mi=h(z,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Rl=h(z,e=>e.xAliasAddress),Oi=h(z,e=>e.egldLabel);n();var An=e=>e.signedMessageInfo,g0=h(An,e=>e.isSigning),f0=h(An,e=>e.errorMessage),h0=h(An,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),T0=h(An,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Fi=e=>e.toasts,Dl=h(Fi,e=>e.customToasts),Ui=h(Fi,e=>e.transactionToasts);n();k();var Bi={errorMessage:wt,successMessage:vt,processingMessage:At},Wi=e=>e.transactionsInfo,Ml=h(Wi,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Bi);n();n();var _e=require("@multiversx/sdk-core");A();n();var Ft=require("@multiversx/sdk-core/out");n();n();function Ot(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Gi=e=>{let o=e!=null?e:"";return Ot(o)?Ft.TransactionPayload.fromEncoded(o):new Ft.TransactionPayload(o)};n();A();var Ao=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(tt).some(t=>e.startsWith(t)):!1;function In(e){var s,c,p;let o=u({},e);Ao({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new _e.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Gi(o.data),nonce:o.nonce.valueOf(),receiver:new _e.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new _e.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:qo,gasPrice:(c=o.gasPrice.valueOf())!=null?c:zo,chainID:o.chainID.valueOf(),version:new _e.TransactionVersion((p=o.version)!=null?p:ia)}),o.options?{options:new _e.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new _e.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var Bl=require("@multiversx/sdk-core/out");n();A();n();var Hi=require("@multiversx/sdk-core");D();n();var Wl=require("@multiversx/sdk-core");n();n();n();var Gl=require("@multiversx/sdk-core"),Hl=x(require("bignumber.js"));E();n();n();n();var Q="accounts";var kn="blocks",ji="code",qi="collections";var zi="contracts";var Ki="identities";var Xi="locked-accounts",Yi="logs",Ji="miniblocks";var Ln="nfts",Zi="nodes",Bt="providers",Qi="roles",Wt="sc-results";var Oe="tokens";var ee="transactions";var Io={shard:e=>`/${kn}?shard=${e}`,receiverShard:e=>`/${ee}?receivershard=${e}`,senderShard:e=>`/${ee}?sendershard=${e}`,transactionDetails:e=>`/${ee}/${e}`,transactionDetailsScResults:e=>`/${ee}/${e}/${Wt}`,transactionDetailsLogs:e=>`/${ee}/${e}/${Yi}`,nodeDetails:e=>`/${Zi}/${e}`,accountDetails:e=>`/${Q}/${e}`,accountDetailsContractCode:e=>`/${Q}/${e}/${ji}`,accountDetailsTokens:e=>`/${Q}/${e}/${Oe}`,accountDetailsNfts:e=>`/${Q}/${e}/${Ln}`,accountDetailsScResults:e=>`/${Q}/${e}/${Wt}`,accountDetailsContracts:e=>`/${Q}/${e}/${zi}`,identityDetails:e=>`/${Ki}/${e}`,tokenDetails:e=>`/${Oe}/${e}`,tokenDetailsAccounts:e=>`/${Oe}/${e}/${Q}`,tokenDetailsLockedAccounts:e=>`/${Oe}/${e}/${Xi}`,tokenDetailsRoles:e=>`/${Oe}/${e}/${Qi}`,collectionDetails:e=>`/${qi}/${e}`,nftDetails:e=>`/${Ln}/${e}`,providerDetails:e=>`/${Bt}/${e}`,providerDetailsTransactions:e=>`/${Bt}/${e}/${ee}`,miniblockDetails:e=>`/${Ji}/${e}`};n();n();n();n();$();n();var es=!1;function jl(e){es||(console.error(e),es=!0)}function Gt({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(jl(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();$();n();n();n();var Xl=x(require("bignumber.js"));A();n();var Kl=require("@multiversx/sdk-core"),Ht=x(require("bignumber.js"));A();n();var ql=x(require("bignumber.js"));n();Ht.default.config({ROUNDING_MODE:Ht.default.ROUND_FLOOR});n();n();n();A();n();n();n();n();A();n();A();n();var Yl=require("@multiversx/sdk-core");A();n();var Lo=require("@multiversx/sdk-core"),Ql=x(require("bignumber.js"));A();n();n();var Jl=x(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();n();A();n();$();var e_=["reDelegateRewards","claimRewards","unBond"],o_=["wrapEgld","unwrapEgld"],n_=["unStake"],t_=["unDelegate"];n();n();n();A();n();var s_=x(require("bignumber.js"));n();n();$();n();var p_=x(require("bignumber.js"));n();n();n();n();var l_=x(require("bignumber.js"));D();n();n();n();n();E();n();var f_=require("@multiversx/sdk-web-wallet-provider");A();n();var u_=x(require("qs"));n();B();Ye();n();Ye();var GI={search:Ce()?window.location.search:"",removeParams:[]};n();n();n();U();n();$();n();n();U();n();var h_=x(require("linkifyjs"));n();A();n();var T_=x(require("bignumber.js"));n();D();n();n();E();n();E();n();n();n();$();n();$();n();var x_=x(require("bignumber.js"));A();$();n();$();n();var as=require("react");D();n();n();$();n();n();var y_=require("@multiversx/sdk-core/out"),S_=x(require("bignumber.js"));$();n();D();n();n();D();var CL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var is=require("react");D();U();n();var w_=require("react");$();var WL=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];to();n();var En=e=>e.transactions,io=h(En,e=>e.signedTransactions),v_=h(En,e=>e.signTransactionsError),ss=h(En,e=>e.signTransactionsCancelMessage),Pn=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),cs=h(io,Pn(eo)),ps=h(io,Pn(oo)),ms=h(io,Pn(no)),A_=h(io,Pn(kt)),ds=h(En,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>In(t)))||[]})}),I_=h(io,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Cn=()=>I(Z);n();var ls=require("react");n();k();n();n();n();n();n();n();n();n();var L_=require("@multiversx/sdk-extension-provider"),N_=require("@multiversx/sdk-hw-provider"),E_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),P_=require("@multiversx/sdk-opera-provider"),C_=require("@multiversx/sdk-passkey-provider/out"),R_=require("@multiversx/sdk-web-wallet-provider");A();be();n();var so=require("@multiversx/sdk-web-wallet-iframe-provider/out"),_s=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");E();n();var oe=e=>`Unable to perform ${e}, Provider not initialized`,Rn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(oe("getAccount"))}setAccount(o){throw new Error(oe(`setAccount: ${o}`))}login(o){throw new Error(oe(`login with options: ${o}`))}logout(o){throw new Error(oe(`logout with options: ${o}`))}getAddress(){throw new Error(oe("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(oe(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(oe(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(oe(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(oe(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(oe(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(oe(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},us=new Rn;k();n();n();n();n();n();var gs=require("@lifeomic/axios-fetch"),qt=x(require("axios")),zt=(0,gs.buildAxiosFetch)(qt.default),Kt=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function D_(e,o,t){return g(this,null,function*(){try{let s=yield zt(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Kt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function M_(e,o){return g(this,null,function*(){try{let t=yield zt(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Kt(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function O_(e,o,t){return g(this,null,function*(){try{let s=yield zt(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Kt(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var co=qt.default.create();co.get=M_;co.post=D_;co.patch=O_;n();n();var F_=x(require("axios"));n();var U_=x(require("swr"));n();E();n();n();n();U();n();to();n();n();n();var B_=x(require("axios"));n();var G_=x(require("axios"));ze();n();A();n();var H_=x(require("axios"));n();var V_=x(require("axios"));n();n();var j_=x(require("axios"));n();var q_=x(require("axios"));n();n();k();E();n();n();n();n();U();n();C();D();n();k();n();var xs=require("@multiversx/sdk-core");D();B();n();to();n();k();E();n();k();D();n();n();n();D();n();jo();n();n();n();n();var X_=x(require("swr"));n();n();n();n();var ys=require("react");n();n();var Y_=require("react"),J_=require("@multiversx/sdk-web-wallet-provider"),Z_=require("@multiversx/sdk-web-wallet-provider"),Q_=x(require("qs"));A();k();E();at();U();var AR=M();n();var qs=require("react"),or=require("@multiversx/sdk-core");n();A();xt();n();n();n();n();n();n();n();n();n();n();ze();n();var tu=x(require("axios"));n();var au=x(require("axios"));n();ze();n();ze();n();n();n();n();var su=require("@multiversx/sdk-opera-provider");n();var cu=require("@multiversx/sdk-extension-provider");n();be();n();n();n();n();var Ru=x(Hs());n();var Fu=require("@multiversx/sdk-native-auth-client");n();var js=x(require("axios"));n();n();n();function $s(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Vs=(e,o,t,s=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield $s(o.delay)),yield Vs(e,o,t,s+1)):null}}),Qt=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield Vs(e,o,t)});var Du=4;var qD=Qt((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield js.default.get(`${e}/${kn}?from=${Du}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();Xo();n();n();U();var n2={origin:M().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Bu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Wu=require("@multiversx/sdk-passkey-provider/out");A();U();n();n();n();var qu=require("react"),zu=require("@multiversx/sdk-hw-provider");n();C();D();n();So();Ze();Je();B();n();n();var Mp=require("react"),Op=require("@multiversx/sdk-core"),Mh=require("@multiversx/sdk-extension-provider"),Oh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Fh=require("@multiversx/sdk-passkey-provider/out"),Uh=x(Pp());A();n();n();n();n();n();n();n();n();n();n();var Oo=x(require("react"));var HM=(0,Oo.createContext)({}),$M=v.getState();n();var Rp=x(require("react"));n();var ar=x(require("react")),Th=x(require("axios"));n();n();be();n();n();var vh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Ah=require("@multiversx/sdk-webview-provider/out/WebviewProvider");C();n();C();k();D();n();n();k();n();B();n();k();D();n();n();var yh=require("@multiversx/sdk-core"),Sh=x(require("bignumber.js"));A();n();var bh=x(require("bignumber.js"));A();k();E();B();U();n();var Dp=require("react"),Nh=require("@multiversx/sdk-extension-provider"),Eh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ph=require("@multiversx/sdk-passkey-provider/out");be();k();n();k();D();So();U();n();ce();k();n();n();var Wh=require("react");n();n();E();to();n();var Fp=require("react");n();n();var Hh=require("react"),$h=require("@multiversx/sdk-extension-provider");ce();C();E();n();he();B();B();n();n();be();D();n();var Gh=require("react"),Up=require("@multiversx/sdk-core");k();n();var Vh=require("react"),jh=require("@multiversx/sdk-opera-provider");ce();C();E();he();B();U();n();var qh=require("react");st();ce();be();C();k();E();he();U();n();var Jh=require("react");ce();k();n();n();dt();n();n();var zh=x(require("platform"));Ye();n();n();n();n();n();n();n();Ke();E();n();n();var Kh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();So();Ze();n();n();n();k();n();n();var Xh=x(require("axios"));B();n();n();var Yh=x(Un());Ke();var Bp,Wp,Gp,RB=(Gp=(Wp=(Bp=me.safeWindow)==null?void 0:Bp.location)==null?void 0:Wp.origin)==null?void 0:Gp.includes("localhost");n();U();n();n();var sT=require("react");A();n();n();A();n();n();n();var Zh=x(require("bignumber.js"));n();n();n();var Ie=x(require("react")),Kp=require("react"),Xp=require("react"),mr=x(require("classnames")),Yp=require("react-dom");A();n();var $p=x(require("react")),Vp=x(require("classnames"));var eT=({className:e,children:o,styles:t})=>$p.default.createElement("div",{className:(0,Vp.default)(t==null?void 0:t.dappModalBody,e)},o),ir=de(eT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),J(ye)).default});n();var sr=x(require("react")),jp=x(require("classnames"));var oT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?sr.default.createElement("div",{className:(0,jp.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:sr.default.createElement("div",null,s)):null,cr=de(oT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),J(ye)).default});n();var go=x(require("react")),qp=require("@fortawesome/free-solid-svg-icons"),zp=require("@fortawesome/react-fontawesome"),Uo=x(require("classnames"));var nT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?go.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeader,s)},t):go.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeader,s)},go.default.createElement("div",{className:(0,Uo.default)(l==null?void 0:l.dappModalHeaderText,p)},o),go.default.createElement("button",{onClick:m,className:(0,Uo.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},go.default.createElement(zp.FontAwesomeIcon,{size:"lg",icon:qp.faTimes}))):null,pr=de(nT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),J(ye)).default});var rT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},aT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=rT,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:y})=>{let[b,S]=(0,Kp.useState)(!1);if((0,Xp.useEffect)(()=>{S(!0)},[]),!l)return null;let{showHeader:N,showFooter:L,headerText:G,footerText:Ge,modalDialogClassName:Bo="dapp-modal-dialog",modalContentClassName:Hn="dapp-modal-dialog-content",modalHeaderClassName:$n="dapp-modal-dialog-header",modalHeaderTextClassName:Vn="dapp-modal-dialog-header-text",modalCloseButtonClassName:Y="dapp-modal-dialog-close-button",modalBodyClassName:am="dapp-modal-dialog-content-body",modalFooterClassName:im="dapp-modal-dialog-footer",customModalHeader:sm,customModalFooter:cm}=c,pm=mm=>{mm.key==="Escape"&&s&&(m==null||m())};return Ie.default.createElement(Ie.default.Fragment,null,b&&(0,Yp.createPortal)(Ie.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,mr.default)(Bo,y==null?void 0:y.dappModal,t),"data-testid":e,onKeyDown:pm},Ie.default.createElement("div",{className:(0,mr.default)(y==null?void 0:y.dappModalContent,Hn)},Ie.default.createElement(pr,{visible:N,headerText:G,customHeader:sm,className:$n,headerTextClassName:Vn,closeButtonClassName:Y,onHide:m}),Ie.default.createElement(ir,{className:am},o),Ie.default.createElement(cr,{visible:L,customFooter:cm,footerText:Ge,className:im}))),_!=null?_:document==null?void 0:document.body))},iT=de(aT,{ssrStyles:()=>Promise.resolve().then(()=>(Se(),ye)),clientStyles:()=>(Se(),J(ye)).default});n();n();var Jp=require("react");n();n();var Zp=require("react"),pT=require("@multiversx/sdk-hw-provider");ce();C();k();E();he();n();var cT=require("react");n();n();var dr=require("react");C();k();E();he();U();n();var dT=require("react"),lT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ce();C();E();he();B();B();n();var _T=require("react"),uT=require("@multiversx/sdk-passkey-provider/out");ce();C();E();he();B();B();n();n();var Qp=require("react");n();var hT=require("react");n();var lr=require("react"),fT=require("socket.io-client");k();n();n();n();var TT=require("react");D();n();n();n();var yT=x(require("swr"));n();n();n();n();var xT=x(require("axios"));n();Ke();var bT=({styles:e,amount:o,type:t,tokenDetails:s})=>{let{network:c}=Cn(),{identifier:p,tokenAvatar:m,name:_}=s,l="SemiFungibleESDT"===t,b=Array(Math.min(4,Number(o))).fill(null);return ne.default.createElement("div",{onClick:N=>{var G;if(!p)return;let L=Gt({explorerAddress:c.explorerAddress,to:Io.nftDetails(p)});N.preventDefault(),N.stopPropagation(),(G=me.safeWindow)!=null&&G.open&&me.safeWindow.open(L)},className:e==null?void 0:e.confirmAmountNftSft},ne.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},m?ne.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},b.map((N,L)=>ne.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${L}`,style:{opacity:1-.25*L,zIndex:b.length-L,marginLeft:(b.length-L-1)*4},className:(0,rm.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:L===0})}))):ne.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},ne.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},l?"SFT":"NFT")),ne.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},ne.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},_),ne.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),ne.default.createElement(tm.FontAwesomeIcon,{icon:nm.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},wT=de(bT,{ssrStyles:()=>Promise.resolve().then(()=>(ur(),_r)),clientStyles:()=>(ur(),J(_r)).default});0&&(module.exports={ConfirmAmountNftSft});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=ConfirmAmountNftSft.js.map
