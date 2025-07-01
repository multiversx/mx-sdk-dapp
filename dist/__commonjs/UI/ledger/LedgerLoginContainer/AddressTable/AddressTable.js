"use strict";var qd=Object.create;var Go=Object.defineProperty,zd=Object.defineProperties,jd=Object.getOwnPropertyDescriptor,Kd=Object.getOwnPropertyDescriptors,Xd=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,Yd=Object.getPrototypeOf,xt=Object.prototype.hasOwnProperty,_a=Object.prototype.propertyIsEnumerable;var la=(e,o,t)=>o in e?Go(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))xt.call(o,t)&&la(e,t,o[t]);if(fn)for(var t of fn(o))_a.call(o,t)&&la(e,t,o[t]);return e},A=(e,o)=>zd(e,Kd(o));var qe=(e,o)=>{var t={};for(var s in e)xt.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&fn)for(var s of fn(e))o.indexOf(s)<0&&_a.call(e,s)&&(t[s]=e[s]);return t};var y=(e,o)=>()=>(e&&(o=e(e=0)),o);var x=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),K=(e,o)=>{for(var t in o)Go(e,t,{get:o[t],enumerable:!0})},ga=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Xd(o))!xt.call(e,c)&&c!==t&&Go(e,c,{get:()=>o[c],enumerable:!(s=jd(o,c))||s.enumerable});return e};var h=(e,o,t)=>(t=e!=null?qd(Yd(e)):{},ga(o||!e||!e.__esModule?Go(t,"default",{value:e,enumerable:!0}):t,e)),q=e=>ga(Go({},"__esModule",{value:!0}),e);var b=(e,o,t)=>new Promise((s,c)=>{var p=l=>{try{_(t.next(l))}catch(d){c(d)}},m=l=>{try{_(t.throw(l))}catch(d){c(d)}},_=l=>l.done?s(l.value):Promise.resolve(l.value).then(p,m);_((t=t.apply(e,o)).next())});var ha=x(hn=>{"use strict";n();hn.byteLength=Jd;hn.toByteArray=el;hn.fromByteArray=tl;var ge=[],de=[],Zd=typeof Uint8Array!="undefined"?Uint8Array:Array,yt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ze=0,ua=yt.length;ze<ua;++ze)ge[ze]=yt[ze],de[yt.charCodeAt(ze)]=ze;var ze,ua;de["-".charCodeAt(0)]=62;de["_".charCodeAt(0)]=63;function fa(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function Jd(e){var o=fa(e),t=o[0],s=o[1];return(t+s)*3/4-s}function Qd(e,o,t){return(o+t)*3/4-t}function el(e){var o,t=fa(e),s=t[0],c=t[1],p=new Zd(Qd(e,s,c)),m=0,_=c>0?s-4:s,l;for(l=0;l<_;l+=4)o=de[e.charCodeAt(l)]<<18|de[e.charCodeAt(l+1)]<<12|de[e.charCodeAt(l+2)]<<6|de[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=de[e.charCodeAt(l)]<<2|de[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=de[e.charCodeAt(l)]<<10|de[e.charCodeAt(l+1)]<<4|de[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function ol(e){return ge[e>>18&63]+ge[e>>12&63]+ge[e>>6&63]+ge[e&63]}function nl(e,o,t){for(var s,c=[],p=o;p<t;p+=3)s=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(ol(s));return c.join("")}function tl(e){for(var o,t=e.length,s=t%3,c=[],p=16383,m=0,_=t-s;m<_;m+=p)c.push(nl(e,m,m+p>_?_:m+p));return s===1?(o=e[t-1],c.push(ge[o>>2]+ge[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ge[o>>10]+ge[o>>4&63]+ge[o<<2&63]+"=")),c.join("")}});var Ta=x(bt=>{n();bt.read=function(e,o,t,s,c){var p,m,_=c*8-s-1,l=(1<<_)-1,d=l>>1,f=-7,T=t?c-1:0,v=t?-1:1,L=e[o+T];for(T+=v,p=L&(1<<-f)-1,L>>=-f,f+=_;f>0;p=p*256+e[o+T],T+=v,f-=8);for(m=p&(1<<-f)-1,p>>=-f,f+=s;f>0;m=m*256+e[o+T],T+=v,f-=8);if(p===0)p=1-d;else{if(p===l)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,s),p=p-d}return(L?-1:1)*m*Math.pow(2,p-s)};bt.write=function(e,o,t,s,c,p){var m,_,l,d=p*8-c-1,f=(1<<d)-1,T=f>>1,v=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=s?0:p-1,P=s?1:-1,w=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=f):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+T>=1?o+=v/l:o+=v*Math.pow(2,1-T),o*l>=2&&(m++,l/=2),m+T>=f?(_=0,m=f):m+T>=1?(_=(o*l-1)*Math.pow(2,c),m=m+T):(_=o*Math.pow(2,T-1)*Math.pow(2,c),m=0));c>=8;e[t+L]=_&255,L+=P,_/=256,c-=8);for(m=m<<c|_,d+=c;d>0;e[t+L]=m&255,L+=P,m/=256,d-=8);e[t+L-P]|=w*128}});var Na=x(mo=>{"use strict";n();var St=ha(),po=Ta(),xa=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;mo.Buffer=g;mo.SlowBuffer=pl;mo.INSPECT_MAX_BYTES=50;var Tn=2147483647;mo.kMaxLength=Tn;g.TYPED_ARRAY_SUPPORT=rl();!g.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function rl(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.buffer}});Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(!!g.isBuffer(this))return this.byteOffset}});function Ie(e){if(e>Tn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,g.prototype),o}function g(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return It(e)}return Sa(e,o,t)}g.poolSize=8192;function Sa(e,o,t){if(typeof e=="string")return il(e,o);if(ArrayBuffer.isView(e))return sl(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ue(e,ArrayBuffer)||e&&ue(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ue(e,SharedArrayBuffer)||e&&ue(e.buffer,SharedArrayBuffer)))return vt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return g.from(s,o,t);var c=cl(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return g.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}g.from=function(e,o,t){return Sa(e,o,t)};Object.setPrototypeOf(g.prototype,Uint8Array.prototype);Object.setPrototypeOf(g,Uint8Array);function wa(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function al(e,o,t){return wa(e),e<=0?Ie(e):o!==void 0?typeof t=="string"?Ie(e).fill(o,t):Ie(e).fill(o):Ie(e)}g.alloc=function(e,o,t){return al(e,o,t)};function It(e){return wa(e),Ie(e<0?0:kt(e)|0)}g.allocUnsafe=function(e){return It(e)};g.allocUnsafeSlow=function(e){return It(e)};function il(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!g.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=va(e,o)|0,s=Ie(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function wt(e){for(var o=e.length<0?0:kt(e.length)|0,t=Ie(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function sl(e){if(ue(e,Uint8Array)){var o=new Uint8Array(e);return vt(o.buffer,o.byteOffset,o.byteLength)}return wt(e)}function vt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,g.prototype),s}function cl(e){if(g.isBuffer(e)){var o=kt(e.length)|0,t=Ie(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Lt(e.length)?Ie(0):wt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return wt(e.data)}function kt(e){if(e>=Tn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Tn.toString(16)+" bytes");return e|0}function pl(e){return+e!=e&&(e=0),g.alloc(+e)}g.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==g.prototype};g.compare=function(o,t){if(ue(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),ue(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(o)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,p=0,m=Math.min(s,c);p<m;++p)if(o[p]!==t[p]){s=o[p],c=t[p];break}return s<c?-1:c<s?1:0};g.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};g.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return g.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=g.allocUnsafe(t),p=0;for(s=0;s<o.length;++s){var m=o[s];if(ue(m,Uint8Array))p+m.length>c.length?g.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(g.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function va(e,o){if(g.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ue(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return At(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Pa(e).length;default:if(c)return s?-1:At(e).length;o=(""+o).toLowerCase(),c=!0}}g.byteLength=va;function ml(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return yl(this,o,t);case"utf8":case"utf-8":return Ia(this,o,t);case"ascii":return Tl(this,o,t);case"latin1":case"binary":return xl(this,o,t);case"base64":return fl(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return bl(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}g.prototype._isBuffer=!0;function je(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}g.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)je(this,t,t+1);return this};g.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)je(this,t,t+3),je(this,t+1,t+2);return this};g.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)je(this,t,t+7),je(this,t+1,t+6),je(this,t+2,t+5),je(this,t+3,t+4);return this};g.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ia(this,0,o):ml.apply(this,arguments)};g.prototype.toLocaleString=g.prototype.toString;g.prototype.equals=function(o){if(!g.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:g.compare(this,o)===0};g.prototype.inspect=function(){var o="",t=mo.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};xa&&(g.prototype[xa]=g.prototype.inspect);g.prototype.compare=function(o,t,s,c,p){if(ue(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),!g.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||s>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=s)return 0;if(c>=p)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,_=s-t,l=Math.min(m,_),d=this.slice(c,p),f=o.slice(t,s),T=0;T<l;++T)if(d[T]!==f[T]){m=d[T],_=f[T];break}return m<_?-1:_<m?1:0};function Aa(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Lt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=g.from(o,s)),g.isBuffer(o))return o.length===0?-1:ya(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):ya(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function ya(e,o,t,s,c){var p=1,m=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function l(L,P){return p===1?L[P]:L.readUInt16BE(P*p)}var d;if(c){var f=-1;for(d=t;d<m;d++)if(l(e,d)===l(o,f===-1?0:d-f)){if(f===-1&&(f=d),d-f+1===_)return f*p}else f!==-1&&(d-=d-f),f=-1}else for(t+_>m&&(t=m-_),d=t;d>=0;d--){for(var T=!0,v=0;v<_;v++)if(l(e,d+v)!==l(o,v)){T=!1;break}if(T)return d}return-1}g.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};g.prototype.indexOf=function(o,t,s){return Aa(this,o,t,s,!0)};g.prototype.lastIndexOf=function(o,t,s){return Aa(this,o,t,s,!1)};function dl(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var p=o.length;s>p/2&&(s=p/2);for(var m=0;m<s;++m){var _=parseInt(o.substr(m*2,2),16);if(Lt(_))return m;e[t+m]=_}return m}function ll(e,o,t,s){return xn(At(o,e.length-t),e,t,s)}function _l(e,o,t,s){return xn(vl(o),e,t,s)}function gl(e,o,t,s){return xn(Pa(o),e,t,s)}function ul(e,o,t,s){return xn(Al(o,e.length-t),e,t,s)}g.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((s===void 0||s>p)&&(s=p),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return dl(this,o,t,s);case"utf8":case"utf-8":return ll(this,o,t,s);case"ascii":case"latin1":case"binary":return _l(this,o,t,s);case"base64":return gl(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ul(this,o,t,s);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fl(e,o,t){return o===0&&t===e.length?St.fromByteArray(e):St.fromByteArray(e.slice(o,t))}function Ia(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var p=e[c],m=null,_=p>239?4:p>223?3:p>191?2:1;if(c+_<=t){var l,d,f,T;switch(_){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(T=(p&31)<<6|l&63,T>127&&(m=T));break;case 3:l=e[c+1],d=e[c+2],(l&192)===128&&(d&192)===128&&(T=(p&15)<<12|(l&63)<<6|d&63,T>2047&&(T<55296||T>57343)&&(m=T));break;case 4:l=e[c+1],d=e[c+2],f=e[c+3],(l&192)===128&&(d&192)===128&&(f&192)===128&&(T=(p&15)<<18|(l&63)<<12|(d&63)<<6|f&63,T>65535&&T<1114112&&(m=T))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),c+=_}return hl(s)}var ba=4096;function hl(e){var o=e.length;if(o<=ba)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=ba));return t}function Tl(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function xl(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function yl(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",p=o;p<t;++p)c+=Il[e[p]];return c}function bl(e,o,t){for(var s=e.slice(o,t),c="",p=0;p<s.length-1;p+=2)c+=String.fromCharCode(s[p]+s[p+1]*256);return c}g.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,g.prototype),c};function z(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||z(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};g.prototype.readUintBE=g.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||z(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};g.prototype.readUint8=g.prototype.readUInt8=function(o,t){return o=o>>>0,t||z(o,1,this.length),this[o]};g.prototype.readUint16LE=g.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||z(o,2,this.length),this[o]|this[o+1]<<8};g.prototype.readUint16BE=g.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||z(o,2,this.length),this[o]<<8|this[o+1]};g.prototype.readUint32LE=g.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||z(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};g.prototype.readUint32BE=g.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||z(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};g.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||z(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};g.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||z(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};g.prototype.readInt8=function(o,t){return o=o>>>0,t||z(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};g.prototype.readInt16LE=function(o,t){o=o>>>0,t||z(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};g.prototype.readInt16BE=function(o,t){o=o>>>0,t||z(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};g.prototype.readInt32LE=function(o,t){return o=o>>>0,t||z(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};g.prototype.readInt32BE=function(o,t){return o=o>>>0,t||z(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};g.prototype.readFloatLE=function(o,t){return o=o>>>0,t||z(o,4,this.length),po.read(this,o,!0,23,4)};g.prototype.readFloatBE=function(o,t){return o=o>>>0,t||z(o,4,this.length),po.read(this,o,!1,23,4)};g.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||z(o,8,this.length),po.read(this,o,!0,52,8)};g.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||z(o,8,this.length),po.read(this,o,!1,52,8)};function oe(e,o,t,s,c,p){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;oe(this,o,t,s,p,0)}var m=1,_=0;for(this[t]=o&255;++_<s&&(m*=256);)this[t+_]=o/m&255;return t+s};g.prototype.writeUintBE=g.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var p=Math.pow(2,8*s)-1;oe(this,o,t,s,p,0)}var m=s-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+s};g.prototype.writeUint8=g.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,1,255,0),this[t]=o&255,t+1};g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};g.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);oe(this,o,t,s,p-1,-p)}var m=0,_=1,l=0;for(this[t]=o&255;++m<s&&(_*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};g.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*s-1);oe(this,o,t,s,p-1,-p)}var m=s-1,_=1,l=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/_>>0)-l&255;return t+s};g.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};g.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};g.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};g.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};g.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||oe(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function ka(e,o,t,s,c,p){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function La(e,o,t,s,c){return o=+o,t=t>>>0,c||ka(e,o,t,4,34028234663852886e22,-34028234663852886e22),po.write(e,o,t,s,23,4),t+4}g.prototype.writeFloatLE=function(o,t,s){return La(this,o,t,!0,s)};g.prototype.writeFloatBE=function(o,t,s){return La(this,o,t,!1,s)};function Ea(e,o,t,s,c){return o=+o,t=t>>>0,c||ka(e,o,t,8,17976931348623157e292,-17976931348623157e292),po.write(e,o,t,s,52,8),t+8}g.prototype.writeDoubleLE=function(o,t,s){return Ea(this,o,t,!0,s)};g.prototype.writeDoubleBE=function(o,t,s){return Ea(this,o,t,!1,s)};g.prototype.copy=function(o,t,s,c){if(!g.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var p=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),p};g.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!g.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<s;++m)this[m]=o;else{var _=g.isBuffer(o)?o:g.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<s-t;++m)this[m+t]=_[m%l]}return this};var Sl=/[^+/0-9A-Za-z-_]/g;function wl(e){if(e=e.split("=")[0],e=e.trim().replace(Sl,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function At(e,o){o=o||1/0;for(var t,s=e.length,c=null,p=[],m=0;m<s;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===s){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function vl(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Al(e,o){for(var t,s,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),s=t>>8,c=t%256,p.push(c),p.push(s);return p}function Pa(e){return St.toByteArray(wl(e))}function xn(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ue(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Lt(e){return e!==e}var Il=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var Oa=x((xb,Ma)=>{n();var F=Ma.exports={},fe,he;function Et(){throw new Error("setTimeout has not been defined")}function Pt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?fe=setTimeout:fe=Et}catch(e){fe=Et}try{typeof clearTimeout=="function"?he=clearTimeout:he=Pt}catch(e){he=Pt}})();function Ca(e){if(fe===setTimeout)return setTimeout(e,0);if((fe===Et||!fe)&&setTimeout)return fe=setTimeout,setTimeout(e,0);try{return fe(e,0)}catch(o){try{return fe.call(null,e,0)}catch(t){return fe.call(this,e,0)}}}function kl(e){if(he===clearTimeout)return clearTimeout(e);if((he===Pt||!he)&&clearTimeout)return he=clearTimeout,clearTimeout(e);try{return he(e)}catch(o){try{return he.call(null,e)}catch(t){return he.call(this,e)}}}var ke=[],lo=!1,Ke,yn=-1;function Ll(){!lo||!Ke||(lo=!1,Ke.length?ke=Ke.concat(ke):yn=-1,ke.length&&Ra())}function Ra(){if(!lo){var e=Ca(Ll);lo=!0;for(var o=ke.length;o;){for(Ke=ke,ke=[];++yn<o;)Ke&&Ke[yn].run();yn=-1,o=ke.length}Ke=null,lo=!1,kl(e)}}F.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ke.push(new Da(e,o)),ke.length===1&&!lo&&Ca(Ra)};function Da(e,o){this.fun=e,this.array=o}Da.prototype.run=function(){this.fun.apply(null,this.array)};F.title="browser";F.browser=!0;F.env={};F.argv=[];F.version="";F.versions={};function Le(){}F.on=Le;F.addListener=Le;F.once=Le;F.off=Le;F.removeListener=Le;F.removeAllListeners=Le;F.emit=Le;F.prependListener=Le;F.prependOnceListener=Le;F.listeners=function(e){return[]};F.binding=function(e){throw new Error("process.binding is not supported")};F.cwd=function(){return"/"};F.chdir=function(e){throw new Error("process.chdir is not supported")};F.umask=function(){return 0}});var r,i,El,a,n=y(()=>{r=h(Na()),i=h(Oa()),El=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=El});var Ba=y(()=>{"use strict";n()});var Te=y(()=>{"use strict";n()});var Fa=y(()=>{"use strict";n()});var Nt,Wa=y(()=>{"use strict";n();Nt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(Nt||{})});var Ua=y(()=>{"use strict";n()});var Ct=y(()=>{"use strict";n()});var Ga=y(()=>{"use strict";n()});var Rt=y(()=>{"use strict";n()});var Ha=y(()=>{"use strict";n()});var $a=y(()=>{"use strict";n()});var Xe,_o,De=y(()=>{"use strict";n();Xe=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),_o=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Va,Nb,qa,Cb,D=y(()=>{"use strict";n();De();Va=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Va||{}),Nb=u(u({},_o.WindowProviderRequestEnums),Va),qa=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(qa||{}),Cb=u(u({},_o.WindowProviderResponseEnums),qa)});var za=y(()=>{"use strict";n()});var ja=y(()=>{"use strict";n()});var ne=y(()=>{"use strict";n()});var Ka=y(()=>{"use strict";n()});var Xa=y(()=>{"use strict";n()});var Ya=y(()=>{"use strict";n()});var W=y(()=>{"use strict";n();Rt();Ha();$a();D();za();ja();ne();Ka();Xa();Ya()});var go,Za,Xb,Ja,Yb,Qa,Zb,Jb,Pl,uo=y(()=>{"use strict";n();W();go={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Za,egldLabel:Xb}=go["devnet"],{chainId:Ja,egldLabel:Yb}=go["testnet"],{chainId:Qa,egldLabel:Zb}=go["mainnet"],Jb={["devnet"]:Za,["testnet"]:Ja,["mainnet"]:Qa},Pl={[Za]:"devnet",[Ja]:"testnet",[Qa]:"mainnet"}});var bn=y(()=>{"use strict";n()});var xe,ei=y(()=>{"use strict";n();xe=require("@multiversx/sdk-web-wallet-provider")});var Ye,Ho=y(()=>{"use strict";n();Ye=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var oi,ni,Dt,rS,aS,Mt=y(()=>{"use strict";n();Ho();Dt=String((ni=(oi=Ye.safeWindow)==null?void 0:oi.navigator)==null?void 0:ni.userAgent),rS=/^((?!chrome|android).)*safari/i.test(Dt),aS=/firefox/i.test(Dt)&&/windows/i.test(Dt)});var Sn,wn,ae,Ze,ti,vn,ri,ye,fo,I=y(()=>{"use strict";n();Ba();Te();Fa();Wa();Ua();Ct();Ga();uo();bn();ei();Mt();Sn=5e4,wn=1e9,ae=18,Ze=4,ti=1,vn="logout",ri="login",ye="0",fo="..."});var Je,ho=y(()=>{"use strict";n();Je=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Ot={};K(Ot,{css:()=>ii,default:()=>Nl});var ii,Nl,Bt=y(()=>{"use strict";n();ii=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ii));Nl={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Wt={};K(Wt,{css:()=>mi,default:()=>Dl});var mi,Dl,Ut=y(()=>{"use strict";n();mi=`.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
  display: none;
  gap: 8px;
  align-items: center;
  color: #e5e5e5;
  transition: all 200ms ease;
  cursor: pointer;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button {
    padding: 0;
    margin: 0 4px;
    display: flex;
  }
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button.dapp-core-component__paginationEdgeButtonStyles__inactive {
  color: #737373;
  pointer-events: none;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button.dapp-core-component__paginationEdgeButtonStyles__inactive .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  color: #737373;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button:hover .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  color: #23f7dd;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text {
  display: none;
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text.dapp-core-component__paginationEdgeButtonStyles__show {
  display: block;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text {
    display: block;
  }
}
.dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
  transition: all 200ms ease;
  color: #e5e5e5;
  font-size: 12px;
}
@media (min-width: 375px) {
  .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button .dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon {
    font-size: 16px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mi));Dl={"pagination-edge-button":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button",inactive:"dapp-core-component__paginationEdgeButtonStyles__inactive","pagination-edge-button-icon":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon",paginationEdgeButtonIcon:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-icon","pagination-edge-button-text":"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",paginationEdgeButtonText:"dapp-core-component__paginationEdgeButtonStyles__pagination-edge-button-text",show:"dapp-core-component__paginationEdgeButtonStyles__show"}});var _i=x((MS,li)=>{n();var Ol=Math.max,Bl=Math.min;function Fl(e,o,t){return e>=Bl(o,t)&&e<Ol(o,t)}li.exports=Fl});var ui=x((OS,gi)=>{n();var Wl=/\s/;function Ul(e){for(var o=e.length;o--&&Wl.test(e.charAt(o)););return o}gi.exports=Ul});var hi=x((BS,fi)=>{n();var Gl=ui(),Hl=/^\s+/;function $l(e){return e&&e.slice(0,Gl(e)+1).replace(Hl,"")}fi.exports=$l});var To=x((FS,Ti)=>{n();function Vl(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Ti.exports=Vl});var yi=x((WS,xi)=>{n();var ql=typeof a=="object"&&a&&a.Object===Object&&a;xi.exports=ql});var Vo=x((US,bi)=>{n();var zl=yi(),jl=typeof self=="object"&&self&&self.Object===Object&&self,Kl=zl||jl||Function("return this")();bi.exports=Kl});var $t=x((GS,Si)=>{n();var Xl=Vo(),Yl=Xl.Symbol;Si.exports=Yl});var Ii=x((HS,Ai)=>{n();var wi=$t(),vi=Object.prototype,Zl=vi.hasOwnProperty,Jl=vi.toString,qo=wi?wi.toStringTag:void 0;function Ql(e){var o=Zl.call(e,qo),t=e[qo];try{e[qo]=void 0;var s=!0}catch(p){}var c=Jl.call(e);return s&&(o?e[qo]=t:delete e[qo]),c}Ai.exports=Ql});var Li=x(($S,ki)=>{n();var e_=Object.prototype,o_=e_.toString;function n_(e){return o_.call(e)}ki.exports=n_});var In=x((VS,Ni)=>{n();var Ei=$t(),t_=Ii(),r_=Li(),a_="[object Null]",i_="[object Undefined]",Pi=Ei?Ei.toStringTag:void 0;function s_(e){return e==null?e===void 0?i_:a_:Pi&&Pi in Object(e)?t_(e):r_(e)}Ni.exports=s_});var Vt=x((qS,Ci)=>{n();function c_(e){return e!=null&&typeof e=="object"}Ci.exports=c_});var Di=x((zS,Ri)=>{n();var p_=In(),m_=Vt(),d_="[object Symbol]";function l_(e){return typeof e=="symbol"||m_(e)&&p_(e)==d_}Ri.exports=l_});var qt=x((jS,Bi)=>{n();var __=hi(),Mi=To(),g_=Di(),Oi=0/0,u_=/^[-+]0x[0-9a-f]+$/i,f_=/^0b[01]+$/i,h_=/^0o[0-7]+$/i,T_=parseInt;function x_(e){if(typeof e=="number")return e;if(g_(e))return Oi;if(Mi(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=Mi(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=__(e);var t=f_.test(e);return t||h_.test(e)?T_(e.slice(2),t?2:8):u_.test(e)?Oi:+e}Bi.exports=x_});var zt=x((KS,Wi)=>{n();var y_=qt(),Fi=1/0,b_=17976931348623157e292;function S_(e){if(!e)return e===0?e:0;if(e=y_(e),e===Fi||e===-Fi){var o=e<0?-1:1;return o*b_}return e===e?e:0}Wi.exports=S_});var Hi=x((XS,Gi)=>{n();var w_=_i(),Ui=zt(),v_=qt();function A_(e,o,t){return o=Ui(o),t===void 0?(t=o,o=0):t=Ui(t),e=v_(e),w_(e,o,t)}Gi.exports=A_});var Vi=x((YS,$i)=>{n();var I_=Math.ceil,k_=Math.max;function L_(e,o,t,s){for(var c=-1,p=k_(I_((o-e)/(t||1)),0),m=Array(p);p--;)m[s?p:++c]=e,e+=t;return m}$i.exports=L_});var jt=x((ZS,qi)=>{n();function E_(e,o){return e===o||e!==e&&o!==o}qi.exports=E_});var Kt=x((JS,zi)=>{n();var P_=In(),N_=To(),C_="[object AsyncFunction]",R_="[object Function]",D_="[object GeneratorFunction]",M_="[object Proxy]";function O_(e){if(!N_(e))return!1;var o=P_(e);return o==R_||o==D_||o==C_||o==M_}zi.exports=O_});var Ki=x((QS,ji)=>{n();var B_=9007199254740991;function F_(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=B_}ji.exports=F_});var Yi=x((ew,Xi)=>{n();var W_=Kt(),U_=Ki();function G_(e){return e!=null&&U_(e.length)&&!W_(e)}Xi.exports=G_});var Ji=x((ow,Zi)=>{n();var H_=9007199254740991,$_=/^(?:0|[1-9]\d*)$/;function V_(e,o){var t=typeof e;return o=o==null?H_:o,!!o&&(t=="number"||t!="symbol"&&$_.test(e))&&e>-1&&e%1==0&&e<o}Zi.exports=V_});var es=x((nw,Qi)=>{n();var q_=jt(),z_=Yi(),j_=Ji(),K_=To();function X_(e,o,t){if(!K_(t))return!1;var s=typeof o;return(s=="number"?z_(t)&&j_(o,t.length):s=="string"&&o in t)?q_(t[o],e):!1}Qi.exports=X_});var ns=x((tw,os)=>{n();var Y_=Vi(),Z_=es(),Xt=zt();function J_(e){return function(o,t,s){return s&&typeof s!="number"&&Z_(o,t,s)&&(t=s=void 0),o=Xt(o),t===void 0?(t=o,o=0):t=Xt(t),s=s===void 0?o<t?1:-1:Xt(s),Y_(o,t,s,e)}}os.exports=J_});var rs=x((rw,ts)=>{n();var Q_=ns(),eg=Q_();ts.exports=eg});var Jt={};K(Jt,{css:()=>cs,default:()=>og});var cs,og,Qt=y(()=>{"use strict";n();cs=`.dapp-core-component__paginationStyles__pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  font-family: "Roobert Regular", sans-serif;
  line-height: 1;
  justify-content: center;
  font-size: 16px;
  max-width: 480px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination {
    gap: 16px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle {
  cursor: pointer;
  transition: all 200ms ease;
  display: none;
}
@media (min-width: 576px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle {
    display: flex;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle.dapp-core-component__paginationStyles__disabled {
  color: #737373;
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle.dapp-core-component__paginationStyles__disabled .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #737373;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle:hover .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle .dapp-core-component__paginationStyles__pagination-angle-icon {
  color: #e5e5e5;
  font-size: 12px;
}
@media (min-width: 375px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-angle .dapp-core-component__paginationStyles__pagination-angle-icon {
    font-size: 16px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button {
  margin: 0;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button.dapp-core-component__paginationStyles__disabled {
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-edge-button.dapp-core-component__paginationStyles__reversed {
  flex-direction: row-reverse;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items {
  display: flex;
  gap: 8px;
  margin: 0 4px;
  align-items: center;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper {
  cursor: pointer;
  text-align: center;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper {
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item {
  color: #e5e5e5;
  transition: color 0.2s ease-out;
  position: relative;
  border-radius: 4px;
  text-align: center;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 28px;
  width: 28px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item {
    font-size: 16px;
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease;
  background-color: #0e0e0e;
  border-radius: 50%;
  height: 28px;
  width: 28px;
  pointer-events: none;
  z-index: 1;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:before {
    height: 32px;
    width: 32px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:hover {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item:hover:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__hundreds {
  font-size: 8px;
}
@media (min-width: 768px) {
  .dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__hundreds {
    font-size: 10px;
  }
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__active {
  color: #23f7dd;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__active:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__disabled {
  pointer-events: none;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis {
  margin: 0;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis:before {
  background-color: transparent;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item.dapp-core-component__paginationStyles__ellipsis:hover:before {
  background-color: #143736;
}
.dapp-core-component__paginationStyles__pagination .dapp-core-component__paginationStyles__pagination-items .dapp-core-component__paginationStyles__pagination-item-wrapper .dapp-core-component__paginationStyles__pagination-item .dapp-core-component__paginationStyles__pagination-item-text {
  position: relative;
  z-index: 2;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cs));og={pagination:"dapp-core-component__paginationStyles__pagination","pagination-angle":"dapp-core-component__paginationStyles__pagination-angle",paginationAngle:"dapp-core-component__paginationStyles__pagination-angle",disabled:"dapp-core-component__paginationStyles__disabled","pagination-angle-icon":"dapp-core-component__paginationStyles__pagination-angle-icon",paginationAngleIcon:"dapp-core-component__paginationStyles__pagination-angle-icon","pagination-edge-button":"dapp-core-component__paginationStyles__pagination-edge-button",paginationEdgeButton:"dapp-core-component__paginationStyles__pagination-edge-button",reversed:"dapp-core-component__paginationStyles__reversed","pagination-items":"dapp-core-component__paginationStyles__pagination-items",paginationItems:"dapp-core-component__paginationStyles__pagination-items","pagination-item-wrapper":"dapp-core-component__paginationStyles__pagination-item-wrapper",paginationItemWrapper:"dapp-core-component__paginationStyles__pagination-item-wrapper","pagination-item":"dapp-core-component__paginationStyles__pagination-item",paginationItem:"dapp-core-component__paginationStyles__pagination-item",hundreds:"dapp-core-component__paginationStyles__hundreds",active:"dapp-core-component__paginationStyles__active",ellipsis:"dapp-core-component__paginationStyles__ellipsis","pagination-item-text":"dapp-core-component__paginationStyles__pagination-item-text",paginationItemText:"dapp-core-component__paginationStyles__pagination-item-text"}});var jo,Ln=y(()=>{"use strict";n();jo=()=>Date.now()/1e3});var ms=y(()=>{"use strict";n()});var ds=y(()=>{"use strict";n()});var or=y(()=>{"use strict";n();Ln();ms();ds()});var nr={};K(nr,{clear:()=>ig,getItem:()=>rg,localStorageKeys:()=>Oe,removeItem:()=>ag,setItem:()=>tg});var Oe,En,tg,rg,ag,ig,yo=y(()=>{"use strict";n();or();Oe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},En=typeof localStorage!="undefined",tg=({key:e,data:o,expires:t})=>{!En||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},rg=e=>{if(!En)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:jo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},ag=e=>{!En||localStorage.removeItem(String(e))},ig=()=>{!En||localStorage.clear()}});var tr={};K(tr,{clear:()=>us,getItem:()=>_s,removeItem:()=>gs,setItem:()=>ls,storage:()=>sg});var ls,_s,gs,us,sg,fs=y(()=>{"use strict";n();ls=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},_s=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},gs=e=>sessionStorage.removeItem(String(e)),us=()=>sessionStorage.clear(),sg={setItem:ls,getItem:_s,removeItem:gs,clear:us}});var eo,bo=y(()=>{"use strict";n();yo();fs();eo={session:tr,local:nr}});var rr,O,ie,B=y(()=>{"use strict";n();rr=require("@reduxjs/toolkit");I();O=(0,rr.createAction)(vn),ie=(0,rr.createAction)(ri,e=>({payload:e}))});var ir,hs,Ts,Pn,ar,xs,Nn,cg,sr,Ww,pg,mg,Uw,Gw,Hw,dg,lg,Cn,Rn=y(()=>{"use strict";n();ir=require("@multiversx/sdk-core"),hs=require("@reduxjs/toolkit"),Ts=require("redux-persist");I();bo();yo();B();Pn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ye},ar={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Pn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},xs=(0,hs.createSlice)({name:"accountInfoSlice",initialState:ar,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new ir.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Pn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(O,()=>(eo.local.removeItem(Oe.loginExpiresAt),ar)),e.addCase(ie,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new ir.Address(s).hex()}),e.addCase(Ts.REHYDRATE,(o,t)=>{var d;if(!((d=t.payload)!=null&&d.account))return;let{account:s}=t.payload,{address:c,shard:p,accounts:m,publicKey:_}=s;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:ar.accounts,o.publicKey=_})}}),{setAccount:Nn,setAddress:cg,setAccountNonce:sr,setAccountShard:Ww,setLedgerAccount:pg,updateLedgerAccount:mg,setWalletConnectAccount:Uw,setIsAccountLoading:Gw,setAccountLoadingError:Hw,setWebsocketEvent:dg,setWebsocketBatchEvent:lg}=xs.actions,Cn=xs.reducer});function Ko(){return new Date().setHours(new Date().getHours()+24)}function Xo(e){eo.local.setItem({key:Oe.loginExpiresAt,data:e,expires:e})}var cr=y(()=>{"use strict";n();bo();yo()});var bs,ys,Ss,Jw,_g,gg,ws,Qw,ug,vs,e0,o0,n0,Dn,Mn=y(()=>{"use strict";n();bs=require("@reduxjs/toolkit");cr();D();B();ys={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ss=(0,bs.createSlice)({name:"loginInfoSlice",initialState:ys,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(O,()=>ys),e.addCase(ie,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Xo(Ko())})}}),{setLoginMethod:Jw,setWalletConnectLogin:_g,setLedgerLogin:gg,setTokenLogin:ws,setTokenLoginSignature:Qw,setWalletLogin:ug,invalidateLoginSession:vs,setLogoutRoute:e0,setIsWalletConnectV2Initialized:o0,setWebviewLogin:n0}=Ss.actions,Dn=Ss.reducer});var Is,As,ks,i0,fg,s0,hg,On,Bn=y(()=>{"use strict";n();Is=require("@reduxjs/toolkit");B();As={},ks=(0,Is.createSlice)({name:"modalsSlice",initialState:As,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(O,()=>As)}}),{setTxSubmittedModal:i0,setNotificationModal:fg,clearTxSubmittedModal:s0,clearNotificationModal:hg}=ks.actions,On=ks.reducer});var U,Z=y(()=>{"use strict";n();ho();U=()=>{if(!Je())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:p}}=window;return{pathname:o,hash:t,origin:s,href:c,search:p}}});var Ls=y(()=>{"use strict";n();Z()});var Es=y(()=>{"use strict";n();Q()});var Ps=y(()=>{"use strict";n();Ho()});var Q=y(()=>{"use strict";n();Ls();Es();Z();Ps()});var Yo=y(()=>{"use strict";n();Q()});var Cs=y(()=>{"use strict";n();Yo()});function Rs(e){return e[Math.floor(Math.random()*e.length)]}var Ds=y(()=>{"use strict";n()});var pr=y(()=>{"use strict";n();Ct()});var Ee=y(()=>{"use strict";n();Cs();Ds();pr()});var Ms,Os,Bs,mr,xg,Fs,W0,U0,yg,Fn,Wn=y(()=>{"use strict";n();Ms=require("@reduxjs/toolkit"),Os=h(require("lodash.omit")),Bs=require("redux-persist");bn();B();Ee();mr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},xg={network:mr},Fs=(0,Ms.createSlice)({name:"appConfig",initialState:xg,reducers:{initializeNetworkConfig:(e,o)=>{let t=Rs(o.payload.walletConnectV2RelayAddresses),s=(0,Os.default)(o.payload,"walletConnectV2RelayAddresses");e.network=A(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(O,o=>{o.network.customWalletAddress=void 0}),e.addCase(Bs.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:W0,updateNetworkConfig:U0,setCustomWalletAddress:yg}=Fs.actions,Fn=Fs.reducer});var Ws,dr,Us,z0,j0,K0,Un,Gn=y(()=>{"use strict";n();Ws=require("@reduxjs/toolkit");W();B();dr={isSigning:!1,signedSessions:{}},Us=(0,Ws.createSlice)({name:"signedMessageInfoSliceState",initialState:dr,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>dr},extraReducers:e=>{e.addCase(O,()=>dr)}}),{setSignSession:z0,clearSignedMessageInfo:j0,setSignSessionState:K0}=Us.actions,Un=Us.reducer});var Hs,$s,Gs,Vs,bg,Sg,ov,wg,Hn,$n=y(()=>{"use strict";n();Hs=require("@reduxjs/toolkit"),$s=require("redux-persist");W();Ln();B();Gs={customToasts:[],transactionToasts:[]},Vs=(0,Hs.createSlice)({name:"toastsSlice",initialState:Gs,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=A(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(A(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:jo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(O,()=>Gs),e.addCase($s.REHYDRATE,(o,t)=>{var c,p;let s=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=s})}}),{addCustomToast:bg,removeCustomToast:Sg,addTransactionToast:ov,removeTransactionToast:wg}=Vs.actions,Hn=Vs.reducer});var qs,_r,gr,ur,vg,lr,zs,av,Ag,fr,Vn,qn=y(()=>{"use strict";n();qs=require("@reduxjs/toolkit");B();_r="Transaction failed",gr="Transaction successful",ur="Processing transaction",vg="Transaction submitted",lr={},zs=(0,qs.createSlice)({name:"transactionsInfo",initialState:lr,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||_r,successMessage:(s==null?void 0:s.successMessage)||gr,processingMessage:(s==null?void 0:s.processingMessage)||ur,submittedMessage:(s==null?void 0:s.submittedMessage)||vg,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>lr},extraReducers:e=>{e.addCase(O,()=>lr)}}),{clearTransactionsInfo:av,setTransactionsDisplayInfo:Ag,clearTransactionsInfoForSessionId:fr}=zs.actions,Vn=zs.reducer});function wo(e){return e!=null&&(Mg(e)||Ug(e))}function vo(e){return e!=null&&(Og(e)||Gg(e))}function Ao(e){return e!=null&&(Bg(e)||Hg(e))}function js(e){return e!=null&&(Fg(e)||$g(e))}function hr(e){return e!=null&&Wg(e)}function Mg(e){return e!=null&&Ig.includes(e)}function Og(e){return e!=null&&kg.includes(e)}function Bg(e){return e!=null&&Lg.includes(e)}function Fg(e){return e!=null&&Eg.includes(e)}function Wg(e){return e!=null&&Pg.includes(e)}function Ug(e){return e!=null&&Ng.includes(e)}function Gg(e){return e!=null&&Cg.includes(e)}function Hg(e){return e!=null&&Rg.includes(e)}function $g(e){return e!=null&&Dg.includes(e)}var Ig,kg,Lg,Eg,Pg,Ng,Cg,Rg,Dg,Io=y(()=>{"use strict";n();D();Ig=["sent"],kg=["success"],Lg=["fail","cancelled","timedOut"],Eg=["invalid"],Pg=["timedOut"],Ng=["pending"],Cg=["success"],Rg=["fail","invalid"],Dg=["not executed"]});var Ks,Xs,Zo,Vg,Ys,Zs,Js,qg,zn,zg,jg,gv,Kg,Jo,Tr,uv,jn,Kn=y(()=>{"use strict";n();Ks=require("@reduxjs/toolkit"),Xs=require("redux-persist");D();Io();B();Zo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Vg={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Ys=(0,Ks.createSlice)({name:"transactionsSlice",initialState:Zo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,d;let{sessionId:t,transactions:s,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Vg),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((d=e==null?void 0:e.transactionsToSign)==null?void 0:d.sessionId)===t&&(e.transactionsToSign=Zo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var d,f,T,v,L,P,w,J;let{sessionId:t,status:s,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,l=(f=(d=e.signedTransactions)==null?void 0:d[t])==null?void 0:f.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(C=>C.hash===p?A(u(u({},m!=null?m:{}),C),{status:s,errorMessage:c,inTransit:_}):C);let H=(v=(T=e.signedTransactions[t])==null?void 0:T.transactions)==null?void 0:v.every(C=>vo(C.status)),j=(P=(L=e.signedTransactions[t])==null?void 0:L.transactions)==null?void 0:P.some(C=>Ao(C.status)),re=(J=(w=e.signedTransactions[t])==null?void 0:w.transactions)==null?void 0:J.every(C=>js(C.status));H&&(e.signedTransactions[t].status="success"),j&&(e.signedTransactions[t].status="fail"),re&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Zo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Zo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(O,()=>Zo),e.addCase(Xs.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(s).reduce((_,[l,d])=>{let f=new Date(l),T=new Date;return T.setHours(T.getHours()+5),T-f>0||(_[l]=d),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Zs,updateSignedTransactions:Js,setTransactionsToSign:qg,clearAllTransactionsToSign:zn,clearAllSignedTransactions:zg,clearSignedTransaction:jg,clearTransactionToSign:gv,setSignTransactionsError:Kg,setSignTransactionsCancelMessage:Jo,moveTransactionsToSignedState:Tr,updateSignedTransactionsCustomTransactionInformation:uv}=Ys.actions,jn=Ys.reducer});var Qs,xr,ec,xv,yv,Xg,bv,Xn,Yn=y(()=>{"use strict";n();Qs=require("@reduxjs/toolkit");B();xr={},ec=(0,Qs.createSlice)({name:"batchTransactionsSlice",initialState:xr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>xr},extraReducers:e=>{e.addCase(O,()=>xr)}}),{setBatchTransactions:xv,updateBatchTransactions:yv,clearBatchTransactions:Xg,clearAllBatchTransactions:bv}=ec.actions,Xn=ec.reducer});var nc,oc,tc,Av,rc,yr=y(()=>{"use strict";n();nc=require("@reduxjs/toolkit");B();oc={},tc=(0,nc.createSlice)({name:"dappConfigSlice",initialState:oc,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(O,()=>oc)}}),{setDappConfig:Av}=tc.actions,rc=tc.reducer});var R=y(()=>{"use strict";n();Rn();Mn();Bn();Wn();Gn();$n();qn();Kn();Yn();yr()});var Ir=y(()=>{"use strict";n()});var Tc,xu,yu,to,rt=y(()=>{"use strict";n();Tc=require("@reduxjs/toolkit");Ir();Rn();Yn();yr();Mn();Bn();Wn();Gn();$n();qn();Kn();xu={["account"]:Cn,["dappConfig"]:rc,["loginInfo"]:Dn,["modals"]:On,["networkConfig"]:Fn,["signedMessageInfo"]:Un,["toasts"]:Hn,["transactionsInfo"]:Vn,["transactions"]:jn,["batchTransactions"]:Xn},yu=(e={})=>(0,Tc.combineReducers)(u(u({},xu),e)),to=yu});var Sc={};K(Sc,{default:()=>Ou,sessionStorageReducers:()=>kr});function Pe(e,o=[]){return{key:e,version:1,storage:yc.default,blacklist:o}}var te,xc,yc,bu,en,Su,wu,vu,Au,Iu,ku,Lu,Eu,Pu,Nu,bc,Cu,kr,Ru,Du,Mu,Ou,wc=y(()=>{"use strict";n();te=require("redux-persist"),xc=h(require("redux-persist/lib/storage")),yc=h(require("redux-persist/lib/storage/session"));rt();R();Rn();Yn();Mn();Bn();Wn();Gn();$n();qn();Kn();Ir();bu={persistReducersStorageType:"localStorage"},en={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Su=Pe(en["account"]),wu=Pe(en["loginInfo"]),vu=Pe(en["modals"]),Au=Pe(en["networkConfig"]),Iu={2:e=>A(u({},e),{networkConfig:mr})};ku=Pe("sdk-dapp-transactionsInfo"),Lu=Pe("sdk-dapp-transactions",["transactionsToSign"]),Eu=Pe("sdk-dapp-batchTransactions",["batchTransactions"]),Pu=Pe("sdk-dapp-toasts"),Nu=Pe("sdk-dapp-signedMessageInfo"),bc={key:"sdk-dapp-store",version:2,storage:xc.default,whitelist:Object.keys(en),migrate:(0,te.createMigrate)(Iu,{debug:!1})},Cu=A(u({},bc),{whitelist:[]}),kr={["toasts"]:(0,te.persistReducer)(Pu,Hn),["transactions"]:(0,te.persistReducer)(Lu,jn),["transactionsInfo"]:(0,te.persistReducer)(ku,Vn),["batchTransactions"]:(0,te.persistReducer)(Eu,Xn),["signedMessageInfo"]:(0,te.persistReducer)(Nu,Un)},Ru=A(u({},kr),{["account"]:(0,te.persistReducer)(Su,Cn),["loginInfo"]:(0,te.persistReducer)(wu,Dn),["modals"]:(0,te.persistReducer)(vu,On),["networkConfig"]:(0,te.persistReducer)(Au,Fn)}),Du=bu.persistReducersStorageType==="localStorage",Mu=Du?(0,te.persistReducer)(bc,to(kr)):(0,te.persistReducer)(Cu,to(Ru)),Ou=Mu});var vc={};K(vc,{default:()=>Bu});var Bu,Ac=y(()=>{"use strict";n();rt();Bu=to()});var Ic={};K(Ic,{default:()=>Wu});var le,Fu,Wu,kc=y(()=>{"use strict";n();le=require("redux-persist"),Fu=[le.FLUSH,le.REHYDRATE,le.PAUSE,le.PERSIST,le.PURGE,le.REGISTER],Wu=Fu});var Pc={};K(Pc,{default:()=>Ec});function Ec(e){return(0,Lc.persistStore)(e)}var Lc,Nc=y(()=>{"use strict";n();Lc=require("redux-persist")});var Or={};K(Or,{css:()=>op,default:()=>Mf});var op,Mf,Br=y(()=>{"use strict";n();op=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(op));Mf={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var hp=x((P5,fp)=>{n();var xh=Array.isArray;fp.exports=xh});var xp=x((N5,Tp)=>{n();var yh=In(),bh=hp(),Sh=Vt(),wh="[object String]";function vh(e){return typeof e=="string"||!bh(e)&&Sh(e)&&yh(e)==wh}Tp.exports=vh});var Ap=x((P6,vp)=>{n();var $h=Vo(),Vh=$h["__core-js_shared__"];vp.exports=Vh});var Lp=x((N6,kp)=>{n();var $r=Ap(),Ip=function(){var e=/[^.]+$/.exec($r&&$r.keys&&$r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function qh(e){return!!Ip&&Ip in e}kp.exports=qh});var Pp=x((C6,Ep)=>{n();var zh=Function.prototype,jh=zh.toString;function Kh(e){if(e!=null){try{return jh.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Ep.exports=Kh});var Cp=x((R6,Np)=>{n();var Xh=Kt(),Yh=Lp(),Zh=To(),Jh=Pp(),Qh=/[\\^$.*+?()[\]{}|]/g,eT=/^\[object .+?Constructor\]$/,oT=Function.prototype,nT=Object.prototype,tT=oT.toString,rT=nT.hasOwnProperty,aT=RegExp("^"+tT.call(rT).replace(Qh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function iT(e){if(!Zh(e)||Yh(e))return!1;var o=Xh(e)?aT:eT;return o.test(Jh(e))}Np.exports=iT});var Dp=x((D6,Rp)=>{n();function sT(e,o){return e==null?void 0:e[o]}Rp.exports=sT});var gt=x((M6,Mp)=>{n();var cT=Cp(),pT=Dp();function mT(e,o){var t=pT(e,o);return cT(t)?t:void 0}Mp.exports=mT});var sn=x((O6,Op)=>{n();var dT=gt(),lT=dT(Object,"create");Op.exports=lT});var Wp=x((B6,Fp)=>{n();var Bp=sn();function _T(){this.__data__=Bp?Bp(null):{},this.size=0}Fp.exports=_T});var Gp=x((F6,Up)=>{n();function gT(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Up.exports=gT});var $p=x((W6,Hp)=>{n();var uT=sn(),fT="__lodash_hash_undefined__",hT=Object.prototype,TT=hT.hasOwnProperty;function xT(e){var o=this.__data__;if(uT){var t=o[e];return t===fT?void 0:t}return TT.call(o,e)?o[e]:void 0}Hp.exports=xT});var qp=x((U6,Vp)=>{n();var yT=sn(),bT=Object.prototype,ST=bT.hasOwnProperty;function wT(e){var o=this.__data__;return yT?o[e]!==void 0:ST.call(o,e)}Vp.exports=wT});var jp=x((G6,zp)=>{n();var vT=sn(),AT="__lodash_hash_undefined__";function IT(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=vT&&o===void 0?AT:o,this}zp.exports=IT});var Xp=x((H6,Kp)=>{n();var kT=Wp(),LT=Gp(),ET=$p(),PT=qp(),NT=jp();function No(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}No.prototype.clear=kT;No.prototype.delete=LT;No.prototype.get=ET;No.prototype.has=PT;No.prototype.set=NT;Kp.exports=No});var Zp=x(($6,Yp)=>{n();function CT(){this.__data__=[],this.size=0}Yp.exports=CT});var cn=x((V6,Jp)=>{n();var RT=jt();function DT(e,o){for(var t=e.length;t--;)if(RT(e[t][0],o))return t;return-1}Jp.exports=DT});var em=x((q6,Qp)=>{n();var MT=cn(),OT=Array.prototype,BT=OT.splice;function FT(e){var o=this.__data__,t=MT(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():BT.call(o,t,1),--this.size,!0}Qp.exports=FT});var nm=x((z6,om)=>{n();var WT=cn();function UT(e){var o=this.__data__,t=WT(o,e);return t<0?void 0:o[t][1]}om.exports=UT});var rm=x((j6,tm)=>{n();var GT=cn();function HT(e){return GT(this.__data__,e)>-1}tm.exports=HT});var im=x((K6,am)=>{n();var $T=cn();function VT(e,o){var t=this.__data__,s=$T(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}am.exports=VT});var cm=x((X6,sm)=>{n();var qT=Zp(),zT=em(),jT=nm(),KT=rm(),XT=im();function Co(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Co.prototype.clear=qT;Co.prototype.delete=zT;Co.prototype.get=jT;Co.prototype.has=KT;Co.prototype.set=XT;sm.exports=Co});var mm=x((Y6,pm)=>{n();var YT=gt(),ZT=Vo(),JT=YT(ZT,"Map");pm.exports=JT});var _m=x((Z6,lm)=>{n();var dm=Xp(),QT=cm(),ex=mm();function ox(){this.size=0,this.__data__={hash:new dm,map:new(ex||QT),string:new dm}}lm.exports=ox});var um=x((J6,gm)=>{n();function nx(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}gm.exports=nx});var pn=x((Q6,fm)=>{n();var tx=um();function rx(e,o){var t=e.__data__;return tx(o)?t[typeof o=="string"?"string":"hash"]:t.map}fm.exports=rx});var Tm=x((eB,hm)=>{n();var ax=pn();function ix(e){var o=ax(this,e).delete(e);return this.size-=o?1:0,o}hm.exports=ix});var ym=x((oB,xm)=>{n();var sx=pn();function cx(e){return sx(this,e).get(e)}xm.exports=cx});var Sm=x((nB,bm)=>{n();var px=pn();function mx(e){return px(this,e).has(e)}bm.exports=mx});var vm=x((tB,wm)=>{n();var dx=pn();function lx(e,o){var t=dx(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}wm.exports=lx});var Im=x((rB,Am)=>{n();var _x=_m(),gx=Tm(),ux=ym(),fx=Sm(),hx=vm();function Ro(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}Ro.prototype.clear=_x;Ro.prototype.delete=gx;Ro.prototype.get=ux;Ro.prototype.has=fx;Ro.prototype.set=hx;Am.exports=Ro});var Lm=x((aB,km)=>{n();var Tx="__lodash_hash_undefined__";function xx(e){return this.__data__.set(e,Tx),this}km.exports=xx});var Pm=x((iB,Em)=>{n();function yx(e){return this.__data__.has(e)}Em.exports=yx});var Cm=x((sB,Nm)=>{n();var bx=Im(),Sx=Lm(),wx=Pm();function ut(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new bx;++o<t;)this.add(e[o])}ut.prototype.add=ut.prototype.push=Sx;ut.prototype.has=wx;Nm.exports=ut});var Dm=x((cB,Rm)=>{n();function vx(e,o,t,s){for(var c=e.length,p=t+(s?1:-1);s?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Rm.exports=vx});var Om=x((pB,Mm)=>{n();function Ax(e){return e!==e}Mm.exports=Ax});var Fm=x((mB,Bm)=>{n();function Ix(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}Bm.exports=Ix});var Um=x((dB,Wm)=>{n();var kx=Dm(),Lx=Om(),Ex=Fm();function Px(e,o,t){return o===o?Ex(e,o,t):kx(e,Lx,t)}Wm.exports=Px});var Hm=x((lB,Gm)=>{n();var Nx=Um();function Cx(e,o){var t=e==null?0:e.length;return!!t&&Nx(e,o,0)>-1}Gm.exports=Cx});var Vm=x((_B,$m)=>{n();function Rx(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}$m.exports=Rx});var zm=x((gB,qm)=>{n();function Dx(e,o){return e.has(o)}qm.exports=Dx});var Km=x((uB,jm)=>{n();var Mx=gt(),Ox=Vo(),Bx=Mx(Ox,"Set");jm.exports=Bx});var Ym=x((fB,Xm)=>{n();function Fx(){}Xm.exports=Fx});var Vr=x((hB,Zm)=>{n();function Wx(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Zm.exports=Wx});var Qm=x((TB,Jm)=>{n();var qr=Km(),Ux=Ym(),Gx=Vr(),Hx=1/0,$x=qr&&1/Gx(new qr([,-0]))[1]==Hx?function(e){return new qr(e)}:Ux;Jm.exports=$x});var od=x((xB,ed)=>{n();var Vx=Cm(),qx=Hm(),zx=Vm(),jx=zm(),Kx=Qm(),Xx=Vr(),Yx=200;function Zx(e,o,t){var s=-1,c=qx,p=e.length,m=!0,_=[],l=_;if(t)m=!1,c=zx;else if(p>=Yx){var d=o?null:Kx(e);if(d)return Xx(d);m=!1,c=jx,l=new Vx}else l=o?[]:_;e:for(;++s<p;){var f=e[s],T=o?o(f):f;if(f=t||f!==0?f:0,m&&T===T){for(var v=l.length;v--;)if(l[v]===T)continue e;o&&l.push(T),_.push(f)}else c(l,T,t)||(l!==_&&l.push(T),_.push(f))}return _}ed.exports=Zx});var td=x((yB,nd)=>{n();var Jx=od();function Qx(e){return e&&e.length?Jx(e):[]}nd.exports=Qx});var Ce={};K(Ce,{css:()=>gd,default:()=>My});var gd,My,Re=y(()=>{"use strict";n();gd=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gd));My={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var ea={};K(ea,{css:()=>kd,default:()=>nb});var kd,nb,oa=y(()=>{"use strict";n();kd=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kd));nb={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var na={};K(na,{css:()=>Pd,default:()=>rb});var Pd,rb,ta=y(()=>{"use strict";n();Pd=`.dapp-core-component__addressRowStyles__ledger-address-table-body-item {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pd));rb={"ledger-address-table-body-item":"dapp-core-component__addressRowStyles__ledger-address-table-body-item",ledgerAddressTableBodyItem:"dapp-core-component__addressRowStyles__ledger-address-table-body-item","ledger-address-table-body-item-selected":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected",ledgerAddressTableBodyItemSelected:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-selected","ledger-address-table-body-item-data":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data",ledgerAddressTableBodyItemData:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data","ledger-address-table-body-item-data-input":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input",ledgerAddressTableBodyItemDataInput:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-input","ledger-address-table-body-item-data-label":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label",ledgerAddressTableBodyItemDataLabel:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-label","ledger-address-table-body-item-data-value":"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value",ledgerAddressTableBodyItemDataValue:"dapp-core-component__addressRowStyles__ledger-address-table-body-item-data-value"}});var aa={};K(aa,{css:()=>Cd,default:()=>ib});var Cd,ib,ia=y(()=>{"use strict";n();Cd=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cd));ib={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var sa={};K(sa,{css:()=>Md,default:()=>cb});var Md,cb,ca=y(()=>{"use strict";n();Md=`.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper {
  text-align: center;
  padding: 40px 16px 0;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper .dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner {
  margin: 120px 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Md));cb={"ledger-loading-wrapper":"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper",ledgerLoadingWrapper:"dapp-core-component__ledgerLoadingStyles__ledger-loading-wrapper","ledger-loading-heading":"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading",ledgerLoadingHeading:"dapp-core-component__ledgerLoadingStyles__ledger-loading-heading","ledger-loading-description":"dapp-core-component__ledgerLoadingStyles__ledger-loading-description",ledgerLoadingDescription:"dapp-core-component__ledgerLoadingStyles__ledger-loading-description","ledger-loading-spinner":"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner",ledgerLoadingSpinner:"dapp-core-component__ledgerLoadingStyles__ledger-loading-spinner"}});var pa={};K(pa,{css:()=>Fd,default:()=>mb});var Fd,mb,ma=y(()=>{"use strict";n();Fd=`.dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
  text-align: center;
  padding: 48px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__addressTableStyles__ledger-address-table-wrapper {
    padding: 48px 40px;
  }
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-heading {
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 12px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-description {
  line-height: 1;
  font-size: 14px;
  margin-bottom: 0;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table {
  margin-top: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header {
  display: flex;
  align-items: center;
  background-color: #ced4da;
  line-height: 1;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  border-radius: 8px;
  padding-right: 20px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item {
  flex: 1;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item:first-child {
  width: 55%;
  flex-basis: 55%;
  max-width: 55%;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-header .dapp-core-component__addressTableStyles__ledger-address-table-header-item:last-child {
  width: 32px;
  max-width: 32px;
  flex-basis: 32px;
  text-align: center;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body {
  overflow-y: scroll;
  overflow-x: hidden;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar {
  width: 4px;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-track {
  background-color: transparent;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-thumb {
  background-color: #ced4da;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table .dapp-core-component__addressTableStyles__ledger-address-table-body::-webkit-scrollbar-thumb:hover {
  background-color: #ced4da;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-pagination {
  margin: 32px auto 0;
}
.dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-button {
  border-radius: 6px;
  padding: 12px 16px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  margin-top: 40px !important;
  transition: all 200ms ease;
  width: 100%;
}
@media (min-width: 768px) {
  .dapp-core-component__addressTableStyles__ledger-address-table-wrapper .dapp-core-component__addressTableStyles__ledger-address-table-button {
    width: auto;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fd));mb={"ledger-address-table-wrapper":"dapp-core-component__addressTableStyles__ledger-address-table-wrapper",ledgerAddressTableWrapper:"dapp-core-component__addressTableStyles__ledger-address-table-wrapper","ledger-address-table-heading":"dapp-core-component__addressTableStyles__ledger-address-table-heading",ledgerAddressTableHeading:"dapp-core-component__addressTableStyles__ledger-address-table-heading","ledger-address-table-description":"dapp-core-component__addressTableStyles__ledger-address-table-description",ledgerAddressTableDescription:"dapp-core-component__addressTableStyles__ledger-address-table-description","ledger-address-table":"dapp-core-component__addressTableStyles__ledger-address-table",ledgerAddressTable:"dapp-core-component__addressTableStyles__ledger-address-table","ledger-address-table-header":"dapp-core-component__addressTableStyles__ledger-address-table-header",ledgerAddressTableHeader:"dapp-core-component__addressTableStyles__ledger-address-table-header","ledger-address-table-header-item":"dapp-core-component__addressTableStyles__ledger-address-table-header-item",ledgerAddressTableHeaderItem:"dapp-core-component__addressTableStyles__ledger-address-table-header-item","ledger-address-table-body":"dapp-core-component__addressTableStyles__ledger-address-table-body",ledgerAddressTableBody:"dapp-core-component__addressTableStyles__ledger-address-table-body","ledger-address-table-pagination":"dapp-core-component__addressTableStyles__ledger-address-table-pagination",ledgerAddressTablePagination:"dapp-core-component__addressTableStyles__ledger-address-table-pagination","ledger-address-table-button":"dapp-core-component__addressTableStyles__ledger-address-table-button",ledgerAddressTableButton:"dapp-core-component__addressTableStyles__ledger-address-table-button"}});var gb={};K(gb,{AddressTable:()=>_b});module.exports=q(gb);n();var $=h(require("react")),Wo=h(require("classnames"));I();n();var ci=h(require("react"));n();var $o=h(require("react"));n();ho();var ai=()=>!Je();var Cl=()=>b(void 0,null,function*(){return yield Promise.resolve().then(()=>(Bt(),Ot))}),Rl=()=>(Bt(),q(Ot)).default,Ft=ai();function si({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=$o.default.useState(Ft?void 0:Rl()),[p,m]=$o.default.useState(Ft||t==null?void 0:t()),_=()=>b(this,null,function*(){(e?e():Cl()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,$o.useEffect)(()=>{Ft&&_()},[]),{globalStyles:s,styles:p}}function M(e,o){return t=>{let{globalStyles:s,styles:c}=si({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ci.default.createElement(e,A(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();var X=h(require("react")),Me=require("@fortawesome/free-solid-svg-icons"),er=require("@fortawesome/react-fontawesome"),kn=h(require("bignumber.js")),Qe=h(require("classnames"));I();n();var pi=h(require("bignumber.js")),be=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let s=new pi.default(t),c=o?0:-1;return s.toString(10)===t&&s.comparedTo(0)>=c};n();n();n();var An=h(require("react")),di=require("@fortawesome/react-fontawesome"),Gt=h(require("classnames"));var Ml=({label:e,onClick:o,showLabels:t,isInactive:s,paginationButtonIcon:c,className:p,"data-testid":m,styles:_})=>An.default.createElement("div",{onClick:o,"data-testid":m,className:(0,Gt.default)(_==null?void 0:_.paginationEdgeButton,p,{[_==null?void 0:_.inactive]:s})},An.default.createElement(di.FontAwesomeIcon,{icon:c,className:_==null?void 0:_.paginationEdgeButtonIcon}),An.default.createElement("span",{className:(0,Gt.default)(_==null?void 0:_.paginationEdgeButtonText,{[_==null?void 0:_.show]:t})},e)),Ht=M(Ml,{ssrStyles:()=>Promise.resolve().then(()=>(Ut(),Wt)),clientStyles:()=>(Ut(),q(Wt)).default});n();n();n();var Zt=h(Hi()),xo=h(rs());I();n();var ss=({currentPage:e,totalPages:o})=>{let t=e-1,s=e+1;if(o<=7)return(0,xo.default)(1,o+1).map(H=>String(H));let c=(H,j)=>H.includes(e)?H:H.slice(0,7-j.length-1),p=(0,Zt.default)(s-1,3,5),m=(0,Zt.default)(t+1,o-3,o-1),_=p?(0,xo.default)(1,s+1):(0,xo.default)(1,5-1),l=m?(0,xo.default)(t,o+1):(0,xo.default)(o-3+1,o+1),d=c(_,l),f=c(l.reverse(),_),T=d.concat(f),v=[fo,t,e,s,fo],[L]=d,[P]=f;return(T.includes(e)?[...d,fo,...f.reverse()]:[L,...v,P]).map(H=>String(H))};var ng=({currentPage:e=1,totalPages:o,className:t,disabledClassName:s,buttonsClassNames:c,onPageChange:p,isDisabled:m,showLabels:_,showEdgeButtons:l=!0,styles:d})=>{let[f,T]=(0,X.useState)(e),v=f===1,L=f===o,P=s?{[s]:m}:{},w=ss({currentPage:f,totalPages:o}),J=N=>{N!==f&&(T(N),p(N))},H=N=>{be(N)&&J(new kn.default(N).toNumber())},j=N=>pe=>{pe.preventDefault(),J(N)},re=N=>be(N)&&new kn.default(N).isGreaterThanOrEqualTo(100),C=N=>new kn.default(N).isEqualTo(f);return(0,X.useEffect)(()=>{e!==f&&T(e)},[e,f]),o===1?null:X.default.createElement("div",{className:(0,Qe.default)(d==null?void 0:d.pagination,t)},l&&X.default.createElement("span",{onClick:j(1),className:(0,Qe.default)(d==null?void 0:d.paginationAngle,c,u({[d==null?void 0:d.disabled]:v},P))},X.default.createElement(er.FontAwesomeIcon,{className:d==null?void 0:d.paginationAngleIcon,icon:Me.faAnglesLeft})),X.default.createElement(Ht,{label:"Prev",onClick:j(f-1),"data-testid":"prevBtn",paginationButtonIcon:Me.faAngleLeft,isInactive:v,showLabels:_,className:(0,Qe.default)(d==null?void 0:d.paginationEdgeButton,c,{[d==null?void 0:d.disabled]:m},P)}),X.default.createElement("div",{className:d==null?void 0:d.paginationItems},w.map((N,pe)=>X.default.createElement("div",{key:`page-item-${pe}`,className:d==null?void 0:d.paginationItemWrapper},be(N)?X.default.createElement("div",{onClick:()=>H(N),className:(0,Qe.default)(d==null?void 0:d.paginationItem,c,{[d==null?void 0:d.active]:C(N)},{[d==null?void 0:d.ellipsis]:!be(N)},{[d==null?void 0:d.disabled]:m},{[d==null?void 0:d.hundreds]:re(N)},P)},X.default.createElement("span",{className:d==null?void 0:d.paginationItemText},N)):X.default.createElement("span",{className:d==null?void 0:d.paginationItemText},N)))),X.default.createElement(Ht,{label:"Next",onClick:j(f+1),"data-testid":"nextBtn",paginationButtonIcon:Me.faAngleRight,isInactive:L,showLabels:_,className:(0,Qe.default)(d==null?void 0:d.paginationEdgeButton,d==null?void 0:d.reversed,c,{[d==null?void 0:d.disabled]:m},P)}),l&&X.default.createElement("span",{onClick:j(o),className:(0,Qe.default)(d==null?void 0:d.paginationAngle,c,u({[d==null?void 0:d.disabled]:L},P))},X.default.createElement(er.FontAwesomeIcon,{className:d==null?void 0:d.paginationAngleIcon,icon:Me.faAnglesRight})))},ps=M(ng,{ssrStyles:()=>Promise.resolve().then(()=>(Qt(),Jt)),clientStyles:()=>(Qt(),q(Jt)).default});n();n();n();R();n();var ac=h(require("lodash.isequal")),Zn=require("reselect"),S=(0,Zn.createSelectorCreator)(Zn.defaultMemoize,ac.default);var Se=e=>e.account,oo=S(Se,e=>e.address),no=S(Se,oo,(e,o)=>o in e.accounts?e.accounts[o]:Pn),Yg=S(Se,no,(e,o)=>{let c=e,{accounts:t}=c,s=qe(c,["accounts"]);return A(u({},s),{address:o.address,account:o})}),Gv=S(no,e=>e.balance),Zg=S(no,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Hv=S(Se,e=>e.shard),Jg=S(Se,e=>e.ledgerAccount),$v=S(Se,e=>e.walletConnectAccount),Vv=S(Se,e=>e.isAccountLoading),qv=S(Se,e=>e.accountLoadingError),Qg=S(Se,e=>e.websocketEvent),eu=S(Se,e=>e.websocketBatchEvent);n();var ic=e=>e.dappConfig,Kv=S(ic,e=>e.shouldUseWebViewProvider);n();var se=e=>e.loginInfo,ou=S(se,e=>e.loginMethod),Jn=S(se,oo,(e,o)=>Boolean(o)),Jv=S(se,e=>e.walletConnectLogin),nu=S(se,e=>e.ledgerLogin),tu=S(se,e=>e.walletLogin),Qv=S(se,e=>e.isLoginSessionInvalid),br=S(se,e=>e.tokenLogin),sc=S(se,e=>e.logoutRoute),ru=S(se,e=>e.isWalletConnectV2Initialized);n();var cc=e=>e.modals,nA=S(cc,e=>e.txSubmittedModal),au=S(cc,e=>e.notificationModal);n();var we=e=>e.networkConfig,Qn=S(we,e=>e.network.chainId),iu=S(we,e=>e.network.roundDuration),aA=S(we,e=>e.network.walletConnectBridgeAddress),su=S(we,e=>e.network.walletConnectV2RelayAddress),cu=S(we,e=>e.network.walletConnectV2ProjectId),pu=S(we,e=>e.network.walletConnectV2Options),mu=S(we,e=>e.network.walletConnectDeepLink),ce=S(we,e=>e.network),Sr=S(ce,e=>e.apiAddress),pc=S(ce,e=>e.explorerAddress),mc=S(ce,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),du=S(ce,e=>e.xAliasAddress),wr=S(ce,e=>e.egldLabel);n();var et=e=>e.signedMessageInfo,cA=S(et,e=>e.isSigning),pA=S(et,e=>e.errorMessage),mA=S(et,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),dA=S(et,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var dc=e=>e.toasts,lu=S(dc,e=>e.customToasts),lc=S(dc,e=>e.transactionToasts);n();R();var _c={errorMessage:_r,successMessage:gr,processingMessage:ur},gc=e=>e.transactionsInfo,_u=S(gc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||_c);n();n();var ve=require("@multiversx/sdk-core");I();n();var Ar=require("@multiversx/sdk-core/out");n();n();function vr(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var uc=e=>{let o=e!=null?e:"";return vr(o)?Ar.TransactionPayload.fromEncoded(o):new Ar.TransactionPayload(o)};n();I();var Qo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Nt).some(t=>e.startsWith(t)):!1;function ot(e){var s,c,p;let o=u({},e);Qo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ve.Transaction(u(u(A(u(A(u({value:o.value.valueOf(),data:uc(o.data),nonce:o.nonce.valueOf(),receiver:new ve.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ve.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:Sn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:wn,chainID:o.chainID.valueOf(),version:new ve.TransactionVersion((p=o.version)!=null?p:ti)}),o.options?{options:new ve.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ve.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();var Lr=require("@reduxjs/toolkit"),Mc=require("react-redux/lib/utils/Subscription");R();n();var fc=h(require("lodash.throttle"));I();R();cr();bo();yo();var fu=[vn],nt=!1,hu=(0,fc.default)(()=>{Xo(Ko())},5e3),hc=e=>o=>t=>{if(fu.includes(t.type))return o(t);let s=e.getState(),c=eo.local.getItem(Oe.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return Xo(Ko());let m=Date.now();return c-m<0&&!nt?setTimeout(()=>{nt=!0,e.dispatch(vs())},1e3):(nt&&(nt=!1),hu()),o(t)};n();n();function tt(){return typeof sessionStorage!="undefined"}var Cc=tt()?(wc(),q(Sc)).default:(Ac(),q(vc)).default,Rc=tt()?(kc(),q(Ic)).default:[],Dc=tt()?(Nc(),q(Pc)).default:e=>e;rt();var k=(0,Lr.configureStore)({reducer:Cc,middleware:e=>e({serializableCheck:{ignoredActions:[...Rc,sr.type,Nn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(hc)}),Oc=(0,Mc.createSubscription)(k),AI=Dc(k),II=(0,Lr.configureStore)({reducer:to});n();n();var Gu=require("@multiversx/sdk-core/out");n();I();n();var Bc=require("@multiversx/sdk-core");W();n();var Hu=require("@multiversx/sdk-core");n();n();n();var $u=require("@multiversx/sdk-core"),Vu=h(require("bignumber.js"));D();n();n();n();var on="accounts";var Pr="blocks";n();n();n();n();ne();n();n();ne();n();n();n();var Xu=h(require("bignumber.js"));I();n();var Gc=require("@multiversx/sdk-core"),Fe=h(require("bignumber.js"));I();n();function Ne(e){return{if:function(o){return o?{then:t=>t instanceof Function?Ne(t(e)):Ne(t)}:{then:()=>Ne(e)}},then:o=>o instanceof Function?Ne(o(e)):Ne(o),valueOf:function(){return e}}}Fe.default.config({ROUNDING_MODE:Fe.default.ROUND_FLOOR});function We({input:e,decimals:o=ae,digits:t=Ze,showLastNonZeroDecimal:s=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!be(e,!1))throw new Error("Invalid input");let m=new Fe.default(e).isNegative(),_=e;return m&&(_=e.substring(1)),Ne(_).then(()=>Gc.TokenTransfer.fungibleFromBigInteger("",_,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let d=new Fe.default(l);if(d.isZero())return ye;let f=d.toString(10),[T,v]=f.split("."),L=new Fe.default(v||0),P=Ne(0).if(Boolean(v&&s)).then(()=>Math.max(v.length,t)).if(L.isZero()&&!s).then(0).if(Boolean(v&&!s)).then(()=>Math.min(v.length,t)).valueOf(),w=v&&t>=1&&t<=v.length&&L.isGreaterThan(0)&&new Fe.default(v.substring(0,t)).isZero(),J=d.toFormat(P);return Ne(f).if(p).then(J).if(Boolean(w)).then(j=>{let re=new Fe.default(T).isZero(),[C,N]=j.split("."),pe=new Array(t-1).fill(0),Uo=[...pe,0].join(""),Ve=[...pe,1].join("");return re?c?`<${C}.${Ve}`:s?`${C}.${N}`:C:`${C}.${Uo}`}).if(Boolean(!w&&v)).then(j=>{let[re]=j.split("."),C=v.substring(0,P);if(s){let N=t-C.length;if(N>0){let pe=Array(N).fill(0).join("");return C=`${C}${pe}`,`${re}.${C}`}return j}return C?`${re}.${C}`:re}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}n();n();n();I();n();n();n();n();I();n();I();n();var Yu=require("@multiversx/sdk-core");I();n();var nn=require("@multiversx/sdk-core"),Qu=h(require("bignumber.js"));I();n();n();var Zu=h(require("bignumber.js"));I();n();I();n();n();n();n();n();n();I();n();I();n();I();n();ne();var of=["reDelegateRewards","claimRewards","unBond"],nf=["wrapEgld","unwrapEgld"],tf=["unStake"],rf=["unDelegate"];n();n();n();I();n();var pf=h(require("bignumber.js"));n();n();ne();n();var df=h(require("bignumber.js"));n();n();n();n();var gf=h(require("bignumber.js"));W();n();n();n();n();D();n();var Tf=require("@multiversx/sdk-web-wallet-provider");I();n();var ff=h(require("qs"));n();Q();ho();n();ho();var CE={search:Je()?window.location.search:"",removeParams:[]};n();n();n();Z();n();ne();n();n();Z();n();var xf=h(require("linkifyjs"));n();I();n();var yf=h(require("bignumber.js"));n();W();n();n();D();n();D();n();n();n();ne();n();ne();n();var bf=h(require("bignumber.js"));I();ne();n();ne();n();var qc=require("react");W();n();n();ne();n();n();var Sf=require("@multiversx/sdk-core/out"),wf=h(require("bignumber.js"));ne();n();W();n();n();W();var wN=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var zc=require("react");W();Z();n();var Af=require("react");ne();var NN=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Io();n();var st=e=>e.transactions,ko=S(st,e=>e.signedTransactions),If=S(st,e=>e.signTransactionsError),jc=S(st,e=>e.signTransactionsCancelMessage),ct=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),Kc=S(ko,ct(wo)),Xc=S(ko,ct(vo)),Yc=S(ko,ct(Ao)),kf=S(ko,ct(hr)),Zc=S(st,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:A(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>ot(t)))||[]})}),Lf=S(ko,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();n();n();n();n();var Jc=require("@lifeomic/axios-fetch"),Rr=h(require("axios")),Dr=(0,Jc.buildAxiosFetch)(Rr.default),Mr=(e,o)=>b(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Ef(e,o,t){return b(this,null,function*(){try{let s=yield Dr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Mr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function Pf(e,o){return b(this,null,function*(){try{let t=yield Dr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Mr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Nf(e,o,t){return b(this,null,function*(){try{let s=yield Dr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return Mr(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var ro=Rr.default.create();ro.get=Pf;ro.post=Ef;ro.patch=Nf;n();var rn=e=>{let o=e!=null?e:Sr(k.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var Cf=h(require("axios"));n();var Rf=h(require("swr"));var Df=e=>{let t=`${rn()}/${on}/${e}?withGuardianInfo=true`;return ro.get(t)},Qc=e=>b(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield Df(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var Lo=e=>Qc(e);function ep(e){return b(this,null,function*(){let o=e;o==null&&(o=no(k.getState()).address);let t=yield Lo(o);if(t==null)throw"Could not read account, user not logged in";return t==null?void 0:t.balance})}n();n();var Ae=h(require("react")),ra=h(require("classnames"));n();var Ue=h(require("react")),np=h(require("classnames"));I();n();function pt(){return wr(k.getState())}var Of=e=>{var t;let o=(t=e.styles)!=null?t:{};return Ue.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ue.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},Bf=(e,o)=>{var L,P,w;let{value:t,showLastNonZeroDecimal:s=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:Ze,m=e.decimals!=null?e.decimals:ae,_=(L=e.styles)!=null?L:{},l=(P=e.globalStyles)!=null?P:{},d=We({input:t,decimals:m,digits:p,showLastNonZeroDecimal:s,addCommas:!0}),f=d.split("."),T=f.length===1,v=d!==ye;if(p>0&&T&&v){let J="";for(let H=1;H<=p;H++)J=J+ye;f.push(J)}return Ue.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Ue.default.createElement("span",{className:_["int-amount"],"data-testid":"formatAmountInt"},f[0]),f.length>1&&Ue.default.createElement("span",{className:_.decimals,"data-testid":"formatAmountDecimals"},".",f[1]),c&&Ue.default.createElement("span",{className:(0,np.default)(_.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(w=e.token)!=null?w:o}`))},Ff=e=>{let{value:o}=e;return be(o)?Bf(e,e.egldLabel||""):Of(e)},Wf=e=>{let o=e.egldLabel||pt(),t=A(u({},e),{egldLabel:o});return Ue.default.createElement(Ff,u({},t))},tp=M(Wf,{ssrStyles:()=>Promise.resolve().then(()=>(Br(),Or)),clientStyles:()=>(Br(),q(Or)).default});n();n();var G=h(require("react")),Ld=h(require("classnames"));I();n();n();n();var rp=require("react"),Eo=require("react-redux");var Uf={store:k,subscription:Oc},Fr=(0,rp.createContext)(Uf),SR=(0,Eo.createStoreHook)(Fr),ee=(0,Eo.createDispatchHook)(Fr),E=(0,Eo.createSelectorHook)(Fr);n();var ap=require("react");n();R();n();n();n();n();n();n();n();n();var Hf=require("@multiversx/sdk-extension-provider"),$f=require("@multiversx/sdk-hw-provider"),Vf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),qf=require("@multiversx/sdk-opera-provider"),zf=require("@multiversx/sdk-passkey-provider/out"),jf=require("@multiversx/sdk-web-wallet-provider");I();De();n();var Po=require("@multiversx/sdk-web-wallet-iframe-provider/out"),ip=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");D();n();var _e=e=>`Unable to perform ${e}, Provider not initialized`,mt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(_e("getAccount"))}setAccount(o){throw new Error(_e(`setAccount: ${o}`))}login(o){throw new Error(_e(`login with options: ${o}`))}logout(o){throw new Error(_e(`logout with options: ${o}`))}getAddress(){throw new Error(_e("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(_e(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(_e(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(_e(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(_e(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(_e(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(_e(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},sp=new mt;R();n();D();n();n();n();Z();n();Io();n();n();n();var Kf=h(require("axios"));n();var Yf=h(require("axios"));uo();n();I();n();var Zf=h(require("axios"));n();var Qf=h(require("axios"));n();n();var eh=h(require("axios"));n();var oh=h(require("axios"));n();n();R();D();n();n();n();Z();n();B();W();n();R();n();var dp=require("@multiversx/sdk-core");W();Q();n();Io();n();R();D();n();R();W();n();n();n();W();n();bn();n();n();n();n();var ah=h(require("swr"));n();n();n();n();var lp=require("react");n();n();var ih=require("react"),sh=require("@multiversx/sdk-web-wallet-provider"),ch=require("@multiversx/sdk-web-wallet-provider"),ph=h(require("qs"));I();R();D();Rt();Z();var EM=U();n();var wp=require("react"),Hr=require("@multiversx/sdk-core");n();I();pr();n();n();n();n();n();n();n();n();n();n();uo();n();var _h=h(require("axios"));n();var uh=h(require("axios"));n();uo();n();uo();n();n();n();n();var hh=require("@multiversx/sdk-opera-provider");n();var Th=require("@multiversx/sdk-extension-provider");n();De();n();n();n();n();var Ah=h(xp());n();var Eh=require("@multiversx/sdk-native-auth-client");n();var Sp=h(require("axios"));n();n();n();function yp(e){return b(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var bp=(e,o,t,s=0)=>b(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield yp(o.delay)),yield bp(e,o,t,s+1)):null}}),Ur=(e,o={retries:5,delay:500})=>(...t)=>b(void 0,null,function*(){return yield bp(e,o,t)});var Ih=4;var $5=Ur((e,o,t)=>b(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:s}=yield Sp.default.get(`${e}/${Pr}?from=${Ih}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();Ln();n();n();Z();var Q5={origin:U().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Nh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Ch=require("@multiversx/sdk-passkey-provider/out");I();Z();n();n();n();var Fh=require("react"),Wh=require("@multiversx/sdk-hw-provider");n();B();W();n();Yo();bo();yo();Q();n();n();var sd=require("react"),cd=require("@multiversx/sdk-core"),hy=require("@multiversx/sdk-extension-provider"),Ty=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),xy=require("@multiversx/sdk-passkey-provider/out"),yy=h(td());I();n();n();n();n();n();n();n();n();n();n();var mn=h(require("react"));var OB=(0,mn.createContext)({}),BB=k.getState();n();var ad=h(require("react"));n();var zr=h(require("react")),ey=h(require("axios"));n();n();De();n();n();var iy=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),sy=require("@multiversx/sdk-webview-provider/out/WebviewProvider");B();n();B();R();W();n();n();R();n();Q();n();R();W();n();n();var ny=require("@multiversx/sdk-core"),ty=h(require("bignumber.js"));I();n();var ry=h(require("bignumber.js"));I();R();D();Q();Z();n();var id=require("react"),dy=require("@multiversx/sdk-extension-provider"),ly=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),_y=require("@multiversx/sdk-passkey-provider/out");De();R();n();R();W();Yo();Z();n();Te();R();n();n();var Sy=require("react");n();n();D();Io();n();var ht=require("react"),pd=(e,o)=>{let[t,s]=(0,ht.useState)(e);return(0,ht.useEffect)(()=>{let p=setTimeout(()=>s(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var vy=require("react"),Ay=require("@multiversx/sdk-extension-provider");Te();B();D();n();Ee();Q();Q();n();n();De();W();n();var wy=require("react"),md=require("@multiversx/sdk-core");R();n();var Iy=require("react"),ky=require("@multiversx/sdk-opera-provider");Te();B();D();Ee();Q();Z();n();var Ly=require("react");Mt();Te();De();B();R();D();Ee();Z();n();var Ry=require("react");Te();R();n();n();or();n();n();var Ey=h(require("platform"));ho();n();n();n();n();n();n();Ho();D();n();n();var Py=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Yo();bo();n();n();n();R();n();n();var Ny=h(require("axios"));Q();n();n();var Cy=h(To());Ho();var dd,ld,_d,vH=(_d=(ld=(dd=Ye.safeWindow)==null?void 0:dd.location)==null?void 0:ld.origin)==null?void 0:_d.includes("localhost");n();Z();n();n();var Hy=require("react");I();n();n();I();n();n();n();var Dy=h(require("bignumber.js"));n();n();n();var He=h(require("react")),yd=require("react"),bd=require("react"),Zr=h(require("classnames")),Sd=require("react-dom");I();n();var ud=h(require("react")),fd=h(require("classnames"));var Oy=({className:e,children:o,styles:t})=>ud.default.createElement("div",{className:(0,fd.default)(t==null?void 0:t.dappModalBody,e)},o),jr=M(Oy,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),Ce)),clientStyles:()=>(Re(),q(Ce)).default});n();var Kr=h(require("react")),hd=h(require("classnames"));var By=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?Kr.default.createElement("div",{className:(0,hd.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Kr.default.createElement("div",null,s)):null,Xr=M(By,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),Ce)),clientStyles:()=>(Re(),q(Ce)).default});n();var Oo=h(require("react")),Td=require("@fortawesome/free-solid-svg-icons"),xd=require("@fortawesome/react-fontawesome"),ln=h(require("classnames"));var Fy=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:_,styles:l})=>e?t?Oo.default.createElement("div",{className:(0,ln.default)(l==null?void 0:l.dappModalHeader,s)},t):Oo.default.createElement("div",{className:(0,ln.default)(l==null?void 0:l.dappModalHeader,s)},Oo.default.createElement("div",{className:(0,ln.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Oo.default.createElement("button",{onClick:m,className:(0,ln.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},Oo.default.createElement(xd.FontAwesomeIcon,{size:"lg",icon:Td.faTimes}))):null,Yr=M(Fy,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),Ce)),clientStyles:()=>(Re(),q(Ce)).default});var Wy={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Uy=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=Wy,id:p="dapp-modal",onHide:m,parentElement:_,visible:l,styles:d})=>{let[f,T]=(0,yd.useState)(!1);if((0,bd.useEffect)(()=>{T(!0)},[]),!l)return null;let{showHeader:v,showFooter:L,headerText:P,footerText:w,modalDialogClassName:J="dapp-modal-dialog",modalContentClassName:H="dapp-modal-dialog-content",modalHeaderClassName:j="dapp-modal-dialog-header",modalHeaderTextClassName:re="dapp-modal-dialog-header-text",modalCloseButtonClassName:C="dapp-modal-dialog-close-button",modalBodyClassName:N="dapp-modal-dialog-content-body",modalFooterClassName:pe="dapp-modal-dialog-footer",customModalHeader:Uo,customModalFooter:Ve}=c,gn=Tt=>{Tt.key==="Escape"&&s&&(m==null||m())};return He.default.createElement(He.default.Fragment,null,f&&(0,Sd.createPortal)(He.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Zr.default)(J,d==null?void 0:d.dappModal,t),"data-testid":e,onKeyDown:gn},He.default.createElement("div",{className:(0,Zr.default)(d==null?void 0:d.dappModalContent,H)},He.default.createElement(Yr,{visible:v,headerText:P,customHeader:Uo,className:j,headerTextClassName:re,closeButtonClassName:C,onHide:m}),He.default.createElement(jr,{className:N},o),He.default.createElement(Xr,{visible:L,customFooter:Ve,footerText:w,className:pe}))),_!=null?_:document==null?void 0:document.body))},Gy=M(Uy,{ssrStyles:()=>Promise.resolve().then(()=>(Re(),Ce)),clientStyles:()=>(Re(),q(Ce)).default});n();n();var wd=require("react");n();n();var vd=require("react"),Vy=require("@multiversx/sdk-hw-provider");Te();B();R();D();Ee();n();var $y=require("react");n();n();var Jr=require("react");B();R();D();Ee();Z();n();var zy=require("react"),jy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Te();B();D();Ee();Q();Q();n();var Ky=require("react"),Xy=require("@multiversx/sdk-passkey-provider/out");Te();B();D();Ee();Q();Q();n();n();var Ad=require("react");n();var Jy=require("react");n();var Qr=require("react"),Zy=require("socket.io-client");R();n();n();n();var Qy=require("react");W();n();n();n();var ob=h(require("swr"));n();n();n();n();var eb=h(require("axios"));n();var tb=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:s,styles:c})=>{let[p,m]=(0,G.useState)(0),[_,l]=(0,G.useState)(!1),d=(0,G.useRef)(document==null?void 0:document.createElement("span")),f=(0,G.useRef)(document==null?void 0:document.createElement("span")),T=pd(p,300),v=()=>{if(d.current&&f.current){let w=f.current.offsetWidth-d.current.offsetWidth;l(w>1)}},L=()=>{m(p+1)};return(0,G.useEffect)(()=>(window==null||window.addEventListener("resize",L),()=>{window==null||window.removeEventListener("resize",L)})),(0,G.useEffect)(()=>{v()},[T]),G.default.createElement("span",{ref:d,className:(0,Ld.default)(c==null?void 0:c.trim,s,o,{overflow:_}),"data-testid":t},G.default.createElement("span",{ref:f,className:c==null?void 0:c.hiddenTextRef},e),_?G.default.createElement(G.default.Fragment,null,G.default.createElement("span",{className:c==null?void 0:c.left},G.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),G.default.createElement("span",{className:c==null?void 0:c.ellipsis},fo),G.default.createElement("span",{className:c==null?void 0:c.right},G.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):G.default.createElement("span",null,e))},Ed=M(tb,{ssrStyles:()=>Promise.resolve().then(()=>(oa(),ea)),clientStyles:()=>(oa(),q(ea)).default});var ab=({address:e,index:o,balance:t,selectedAddress:s,onSelectAddress:c,className:p="dapp-ledger-address-row",ledgerModalTableSelectedItemClassName:m,disabled:_=!1,styles:l})=>{var d;return Ae.default.createElement("div",{onClick:()=>c({address:e,index:o}),className:(0,ra.default)(l==null?void 0:l.ledgerAddressTableBodyItem,{[m!=null?m:""]:s===e,[(d=l==null?void 0:l.ledgerAddressTableBodyItemSelected)!=null?d:""]:s===e},p)},Ae.default.createElement("div",{className:(0,ra.default)(l==null?void 0:l.ledgerAddressTableBodyItemData,{disabled:_})},Ae.default.createElement("input",{type:"radio",id:`check_${e}`,disabled:_,onChange:()=>c({address:e,index:o}),"data-testid":`check_${e}`,role:"button",checked:s===e,className:l==null?void 0:l.ledgerAddressTableBodyItemDataInput}),Ae.default.createElement("label",{htmlFor:`check_${o}`,role:"button","data-testid":`label_${o}`,className:l==null?void 0:l.ledgerAddressTableBodyItemDataLabel},Ae.default.createElement("div",{className:l==null?void 0:l.ledgerAddressTableBodyItemDataValue},Ae.default.createElement(Ed,{text:e})))),Ae.default.createElement("div",{className:l==null?void 0:l.ledgerAddressTableBodyItemData},Ae.default.createElement(tp,{value:t,egldLabel:pt()})),Ae.default.createElement("div",{className:l==null?void 0:l.ledgerAddressTableBodyItemData},o))},Nd=M(ab,{ssrStyles:()=>Promise.resolve().then(()=>(ta(),na)),clientStyles:()=>(ta(),q(na)).default});n();n();n();var Bo=h(require("react")),Od=require("@fortawesome/free-solid-svg-icons"),Fo=h(require("classnames"));I();n();n();var $e=h(require("react")),Rd=require("@fortawesome/react-fontawesome"),_n=h(require("classnames"));var sb=({icon:e,title:o,action:t,iconClass:s,"data-testid":c,description:p,iconBgClass:m,iconSize:_="5x",className:l="dapp-page-state",globalStyles:d,styles:f})=>{let T=(0,$e.useMemo)(()=>({wrapper:(0,_n.default)(f==null?void 0:f.state,d==null?void 0:d.mAuto,d==null?void 0:d.p4,d==null?void 0:d.textCenter,l),iconContainer:(0,_n.default)(d==null?void 0:d.iconState,d==null?void 0:d.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,_n.default)(s!=null&&s),title:(0,_n.default)(d==null?void 0:d.h4,d==null?void 0:d.my4),description:d==null?void 0:d.mb3}),[d,f,l,m,s]);return $e.default.createElement("div",{className:T.wrapper,"data-testid":c},e&&$e.default.createElement("span",{className:T.iconContainer},$e.default.createElement(Rd.FontAwesomeIcon,{icon:e,className:T.iconClass,size:_})),o&&$e.default.createElement("p",{className:T.title},o),p&&$e.default.createElement("div",{className:T.description},p),t)},Dd=M(sb,{ssrStyles:()=>Promise.resolve().then(()=>(ia(),aa)),clientStyles:()=>(ia(),q(aa)).default});var pb=({customSpinnerComponent:e,ledgerLoadingClassNames:o,customContentComponent:t,globalStyles:s,styles:c})=>{let{ledgerModalSubtitleClassName:p,ledgerModalTitleClassName:m,ledgerLoadingWrapper:_,ledgerLoadingSpinner:l}=o||{};return Bo.default.createElement("div",{className:(0,Fo.default)(c==null?void 0:c.ledgerLoadingWrapper,_),"data-testid":"ledgerLoading"},Bo.default.createElement("div",{className:(0,Fo.default)(c==null?void 0:c.ledgerLoadingHeading,m)},"Waiting for device..."),Bo.default.createElement("p",{className:(0,Fo.default)(c==null?void 0:c.ledgerLoadingDescription,p)},"It may take a few seconds..."),t,Bo.default.createElement("div",{className:(0,Fo.default)(c==null?void 0:c.ledgerLoadingSpinner,l)},e||Bo.default.createElement(Dd,{iconSize:"10x",icon:Od.faCircleNotch,iconClass:(0,Fo.default)("fa-spin",s==null?void 0:s.textPrimary)})))},Bd=M(pb,{ssrStyles:()=>Promise.resolve().then(()=>(ca(),sa)),clientStyles:()=>(ca(),q(sa)).default});var Wd=10,db=500,lb=({accounts:e,addressTableClassNames:o,className:t="dapp-ledger-address-table",customContentComponent:s,dataTestId:c="addressTableContainer",loading:p,onConfirmSelectedAddress:m,onGoToSpecificPage:_,onGoToNextPage:l,onGoToPrevPage:d,onSelectAddress:f,selectedAddress:T,startIndex:v,disabledIndexes:L=[],globalStyles:P,styles:w})=>{let{ledgerModalTitleClassName:J,ledgerModalSubtitleClassName:H,ledgerModalTableHeadClassName:j,ledgerModalTableItemClassName:re,ledgerModalButtonClassName:C,ledgerModalTableNavigationButtonClassName:N,ledgerModalTableSelectedItemClassName:pe,ledgerModalTableNavigationButtonDisabledClassName:Uo}=o||{},[Ve,gn]=(0,$.useState)([]),Tt=()=>{let V=0;for(;L.includes(V);)V++;return V};(0,$.useEffect)(()=>{if(e.length>0&&!p&&(!T&&v===0)){let da=Tt(),Vd=e[da];f({address:Vd,index:da})}},[e,T,p,v]);let Ud=V=>b(void 0,null,function*(){try{let me=yield ep(V);return{address:V,balance:me}}catch(me){throw console.error("error fetching balance",me),Ve}});if((0,$.useEffect)(()=>{let V=e.map(me=>Ud(me));gn(e.map(me=>({address:me,balance:"..."}))),Promise.all(V).then(me=>{gn(me)})},[e]),p)return $.default.createElement(Bd,null);let Gd=()=>{!T||m()},Hd=V=>{if(V-1===v+1){l();return}if(V-1===v-1){d();return}_(V-1)},$d=["Address","Balance","#"];return $.default.createElement("div",{className:(0,Wo.default)(w==null?void 0:w.ledgerAddressTableWrapper,t),"data-testid":c},$.default.createElement("div",{className:w==null?void 0:w.ledgerAddressTableTop},$.default.createElement("div",{className:(0,Wo.default)(w==null?void 0:w.ledgerAddressTableHeading,J),"data-testid":`${c}Title`},"Access your wallet"),$.default.createElement("p",{className:(0,Wo.default)(w==null?void 0:w.ledgerAddressTableDescription,H),"data-testid":`${c}SubTitle`},"Choose the wallet you want to access")),s,$.default.createElement("div",{className:w==null?void 0:w.ledgerAddressTable},$.default.createElement("div",{className:(0,Wo.default)(w==null?void 0:w.ledgerAddressTableHeader,j)},$d.map(V=>$.default.createElement("div",{key:V,className:w==null?void 0:w.ledgerAddressTableHeaderItem},V))),$.default.createElement("div",{className:w==null?void 0:w.ledgerAddressTableBody},Ve&&Ve.map(({address:V,balance:me},un)=>$.default.createElement(Nd,{address:V,balance:me,disabled:L.includes(un),key:un+v*Wd,index:un+v*Wd,selectedAddress:T,onSelectAddress:f,className:re,ledgerModalTableSelectedItemClassName:pe})))),$.default.createElement("div",{className:w==null?void 0:w.ledgerAddressTableBottom},$.default.createElement(ps,{className:w==null?void 0:w.ledgerAddressTablePagination,currentPage:v+1,totalPages:db,onPageChange:Hd,disabledClassName:Uo,buttonsClassNames:N}),$.default.createElement("button",{disabled:!T,onClick:Gd,"data-testid":"confirmBtn",className:(0,Wo.default)(P==null?void 0:P.btn,P==null?void 0:P.btnPrimary,w==null?void 0:w.ledgerAddressTableButton,C)},"Access Wallet")))},_b=M(lb,{ssrStyles:()=>Promise.resolve().then(()=>(ma(),pa)),clientStyles:()=>(ma(),q(pa)).default});0&&(module.exports={AddressTable});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=AddressTable.js.map
