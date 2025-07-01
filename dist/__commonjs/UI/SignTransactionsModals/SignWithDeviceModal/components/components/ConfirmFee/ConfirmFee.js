"use strict";var vm=Object.create;var Io=Object.defineProperty,Im=Object.defineProperties,Am=Object.getOwnPropertyDescriptor,km=Object.getOwnPropertyDescriptors,Lm=Object.getOwnPropertyNames,Xo=Object.getOwnPropertySymbols,Pm=Object.getPrototypeOf,Qn=Object.prototype.hasOwnProperty,Dr=Object.prototype.propertyIsEnumerable;var Nr=(e,o,t)=>o in e?Io(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Qn.call(o,t)&&Nr(e,t,o[t]);if(Xo)for(var t of Xo(o))Dr.call(o,t)&&Nr(e,t,o[t]);return e},w=(e,o)=>Im(e,km(o));var Re=(e,o)=>{var t={};for(var s in e)Qn.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Xo)for(var s of Xo(e))o.indexOf(s)<0&&Dr.call(e,s)&&(t[s]=e[s]);return t};var g=(e,o)=>()=>(e&&(o=e(e=0)),o);var y=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Z=(e,o)=>{for(var t in o)Io(e,t,{get:o[t],enumerable:!0})},Rr=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Lm(o))!Qn.call(e,c)&&c!==t&&Io(e,c,{get:()=>o[c],enumerable:!(s=Am(o,c))||s.enumerable});return e};var T=(e,o,t)=>(t=e!=null?vm(Pm(e)):{},Rr(o||!e||!e.__esModule?Io(t,"default",{value:e,enumerable:!0}):t,e)),z=e=>Rr(Io({},"__esModule",{value:!0}),e);var f=(e,o,t)=>new Promise((s,c)=>{var m=l=>{try{_(t.next(l))}catch(h){c(h)}},p=l=>{try{_(t.throw(l))}catch(h){c(h)}},_=l=>l.done?s(l.value):Promise.resolve(l.value).then(m,p);_((t=t.apply(e,o)).next())});var Fr=y(Yo=>{"use strict";n();Yo.byteLength=Cm;Yo.toByteArray=Dm;Yo.fromByteArray=Om;var ie=[],Q=[],Em=typeof Uint8Array!="undefined"?Uint8Array:Array,et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Me=0,Mr=et.length;Me<Mr;++Me)ie[Me]=et[Me],Q[et.charCodeAt(Me)]=Me;var Me,Mr;Q["-".charCodeAt(0)]=62;Q["_".charCodeAt(0)]=63;function Or(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var s=t===o?0:4-t%4;return[t,s]}function Cm(e){var o=Or(e),t=o[0],s=o[1];return(t+s)*3/4-s}function Nm(e,o,t){return(o+t)*3/4-t}function Dm(e){var o,t=Or(e),s=t[0],c=t[1],m=new Em(Nm(e,s,c)),p=0,_=c>0?s-4:s,l;for(l=0;l<_;l+=4)o=Q[e.charCodeAt(l)]<<18|Q[e.charCodeAt(l+1)]<<12|Q[e.charCodeAt(l+2)]<<6|Q[e.charCodeAt(l+3)],m[p++]=o>>16&255,m[p++]=o>>8&255,m[p++]=o&255;return c===2&&(o=Q[e.charCodeAt(l)]<<2|Q[e.charCodeAt(l+1)]>>4,m[p++]=o&255),c===1&&(o=Q[e.charCodeAt(l)]<<10|Q[e.charCodeAt(l+1)]<<4|Q[e.charCodeAt(l+2)]>>2,m[p++]=o>>8&255,m[p++]=o&255),m}function Rm(e){return ie[e>>18&63]+ie[e>>12&63]+ie[e>>6&63]+ie[e&63]}function Mm(e,o,t){for(var s,c=[],m=o;m<t;m+=3)s=(e[m]<<16&16711680)+(e[m+1]<<8&65280)+(e[m+2]&255),c.push(Rm(s));return c.join("")}function Om(e){for(var o,t=e.length,s=t%3,c=[],m=16383,p=0,_=t-s;p<_;p+=m)c.push(Mm(e,p,p+m>_?_:p+m));return s===1?(o=e[t-1],c.push(ie[o>>2]+ie[o<<4&63]+"==")):s===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ie[o>>10]+ie[o>>4&63]+ie[o<<2&63]+"=")),c.join("")}});var Br=y(ot=>{n();ot.read=function(e,o,t,s,c){var m,p,_=c*8-s-1,l=(1<<_)-1,h=l>>1,b=-7,S=t?c-1:0,I=t?-1:1,E=e[o+S];for(S+=I,m=E&(1<<-b)-1,E>>=-b,b+=_;b>0;m=m*256+e[o+S],S+=I,b-=8);for(p=m&(1<<-b)-1,m>>=-b,b+=s;b>0;p=p*256+e[o+S],S+=I,b-=8);if(m===0)m=1-h;else{if(m===l)return p?NaN:(E?-1:1)*(1/0);p=p+Math.pow(2,s),m=m-h}return(E?-1:1)*p*Math.pow(2,m-s)};ot.write=function(e,o,t,s,c,m){var p,_,l,h=m*8-c-1,b=(1<<h)-1,S=b>>1,I=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=s?0:m-1,L=s?1:-1,ae=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,p=b):(p=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-p))<1&&(p--,l*=2),p+S>=1?o+=I/l:o+=I*Math.pow(2,1-S),o*l>=2&&(p++,l/=2),p+S>=b?(_=0,p=b):p+S>=1?(_=(o*l-1)*Math.pow(2,c),p=p+S):(_=o*Math.pow(2,S-1)*Math.pow(2,c),p=0));c>=8;e[t+E]=_&255,E+=L,_/=256,c-=8);for(p=p<<c|_,h+=c;h>0;e[t+E]=p&255,E+=L,p/=256,h-=8);e[t+E-L]|=ae*128}});var Jr=y(Qe=>{"use strict";n();var nt=Fr(),Ze=Br(),Ur=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Qe.Buffer=d;Qe.SlowBuffer=Hm;Qe.INSPECT_MAX_BYTES=50;var Jo=2147483647;Qe.kMaxLength=Jo;d.TYPED_ARRAY_SUPPORT=Fm();!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Fm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function fe(e){if(e>Jo)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,d.prototype),o}function d(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return it(e)}return Hr(e,o,t)}d.poolSize=8192;function Hr(e,o,t){if(typeof e=="string")return Um(e,o);if(ArrayBuffer.isView(e))return Wm(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(se(e,ArrayBuffer)||e&&se(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(se(e,SharedArrayBuffer)||e&&se(e.buffer,SharedArrayBuffer)))return rt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return d.from(s,o,t);var c=Gm(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return d.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}d.from=function(e,o,t){return Hr(e,o,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function $r(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Bm(e,o,t){return $r(e),e<=0?fe(e):o!==void 0?typeof t=="string"?fe(e).fill(o,t):fe(e).fill(o):fe(e)}d.alloc=function(e,o,t){return Bm(e,o,t)};function it(e){return $r(e),fe(e<0?0:st(e)|0)}d.allocUnsafe=function(e){return it(e)};d.allocUnsafeSlow=function(e){return it(e)};function Um(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!d.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Vr(e,o)|0,s=fe(t),c=s.write(e,o);return c!==t&&(s=s.slice(0,c)),s}function tt(e){for(var o=e.length<0?0:st(e.length)|0,t=fe(o),s=0;s<o;s+=1)t[s]=e[s]&255;return t}function Wm(e){if(se(e,Uint8Array)){var o=new Uint8Array(e);return rt(o.buffer,o.byteOffset,o.byteLength)}return tt(e)}function rt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&t===void 0?s=new Uint8Array(e):t===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,t),Object.setPrototypeOf(s,d.prototype),s}function Gm(e){if(d.isBuffer(e)){var o=st(e.length)|0,t=fe(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||ct(e.length)?fe(0):tt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return tt(e.data)}function st(e){if(e>=Jo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Jo.toString(16)+" bytes");return e|0}function Hm(e){return+e!=e&&(e=0),d.alloc(+e)}d.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==d.prototype};d.compare=function(o,t){if(se(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),se(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(o)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var s=o.length,c=t.length,m=0,p=Math.min(s,c);m<p;++m)if(o[m]!==t[m]){s=o[m],c=t[m];break}return s<c?-1:c<s?1:0};d.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return d.alloc(0);var s;if(t===void 0)for(t=0,s=0;s<o.length;++s)t+=o[s].length;var c=d.allocUnsafe(t),m=0;for(s=0;s<o.length;++s){var p=o[s];if(se(p,Uint8Array))m+p.length>c.length?d.from(p).copy(c,m):Uint8Array.prototype.set.call(c,p,m);else if(d.isBuffer(p))p.copy(c,m);else throw new TypeError('"list" argument must be an Array of Buffers');m+=p.length}return c};function Vr(e,o){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||se(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return at(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Yr(e).length;default:if(c)return s?-1:at(e).length;o=(""+o).toLowerCase(),c=!0}}d.byteLength=Vr;function $m(e,o,t){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Qm(this,o,t);case"utf8":case"utf-8":return jr(this,o,t);case"ascii":return Jm(this,o,t);case"latin1":case"binary":return Zm(this,o,t);case"base64":return Xm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ed(this,o,t);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}d.prototype._isBuffer=!0;function Oe(e,o,t){var s=e[o];e[o]=e[t],e[t]=s}d.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Oe(this,t,t+1);return this};d.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Oe(this,t,t+3),Oe(this,t+1,t+2);return this};d.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Oe(this,t,t+7),Oe(this,t+1,t+6),Oe(this,t+2,t+5),Oe(this,t+3,t+4);return this};d.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?jr(this,0,o):$m.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(o){if(!d.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:d.compare(this,o)===0};d.prototype.inspect=function(){var o="",t=Qe.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Ur&&(d.prototype[Ur]=d.prototype.inspect);d.prototype.compare=function(o,t,s,c,m){if(se(o,Uint8Array)&&(o=d.from(o,o.offset,o.byteLength)),!d.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),s===void 0&&(s=o?o.length:0),c===void 0&&(c=0),m===void 0&&(m=this.length),t<0||s>o.length||c<0||m>this.length)throw new RangeError("out of range index");if(c>=m&&t>=s)return 0;if(c>=m)return-1;if(t>=s)return 1;if(t>>>=0,s>>>=0,c>>>=0,m>>>=0,this===o)return 0;for(var p=m-c,_=s-t,l=Math.min(p,_),h=this.slice(c,m),b=o.slice(t,s),S=0;S<l;++S)if(h[S]!==b[S]){p=h[S],_=b[S];break}return p<_?-1:_<p?1:0};function qr(e,o,t,s,c){if(e.length===0)return-1;if(typeof t=="string"?(s=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,ct(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=d.from(o,s)),d.isBuffer(o))return o.length===0?-1:Wr(e,o,t,s,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Wr(e,[o],t,s,c);throw new TypeError("val must be string, number or Buffer")}function Wr(e,o,t,s,c){var m=1,p=e.length,_=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;m=2,p/=2,_/=2,t/=2}function l(E,L){return m===1?E[L]:E.readUInt16BE(L*m)}var h;if(c){var b=-1;for(h=t;h<p;h++)if(l(e,h)===l(o,b===-1?0:h-b)){if(b===-1&&(b=h),h-b+1===_)return b*m}else b!==-1&&(h-=h-b),b=-1}else for(t+_>p&&(t=p-_),h=t;h>=0;h--){for(var S=!0,I=0;I<_;I++)if(l(e,h+I)!==l(o,I)){S=!1;break}if(S)return h}return-1}d.prototype.includes=function(o,t,s){return this.indexOf(o,t,s)!==-1};d.prototype.indexOf=function(o,t,s){return qr(this,o,t,s,!0)};d.prototype.lastIndexOf=function(o,t,s){return qr(this,o,t,s,!1)};function Vm(e,o,t,s){t=Number(t)||0;var c=e.length-t;s?(s=Number(s),s>c&&(s=c)):s=c;var m=o.length;s>m/2&&(s=m/2);for(var p=0;p<s;++p){var _=parseInt(o.substr(p*2,2),16);if(ct(_))return p;e[t+p]=_}return p}function qm(e,o,t,s){return Zo(at(o,e.length-t),e,t,s)}function jm(e,o,t,s){return Zo(td(o),e,t,s)}function zm(e,o,t,s){return Zo(Yr(o),e,t,s)}function Km(e,o,t,s){return Zo(rd(o,e.length-t),e,t,s)}d.prototype.write=function(o,t,s,c){if(t===void 0)c="utf8",s=this.length,t=0;else if(s===void 0&&typeof t=="string")c=t,s=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(s)?(s=s>>>0,c===void 0&&(c="utf8")):(c=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var m=this.length-t;if((s===void 0||s>m)&&(s=m),o.length>0&&(s<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var p=!1;;)switch(c){case"hex":return Vm(this,o,t,s);case"utf8":case"utf-8":return qm(this,o,t,s);case"ascii":case"latin1":case"binary":return jm(this,o,t,s);case"base64":return zm(this,o,t,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Km(this,o,t,s);default:if(p)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),p=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Xm(e,o,t){return o===0&&t===e.length?nt.fromByteArray(e):nt.fromByteArray(e.slice(o,t))}function jr(e,o,t){t=Math.min(e.length,t);for(var s=[],c=o;c<t;){var m=e[c],p=null,_=m>239?4:m>223?3:m>191?2:1;if(c+_<=t){var l,h,b,S;switch(_){case 1:m<128&&(p=m);break;case 2:l=e[c+1],(l&192)===128&&(S=(m&31)<<6|l&63,S>127&&(p=S));break;case 3:l=e[c+1],h=e[c+2],(l&192)===128&&(h&192)===128&&(S=(m&15)<<12|(l&63)<<6|h&63,S>2047&&(S<55296||S>57343)&&(p=S));break;case 4:l=e[c+1],h=e[c+2],b=e[c+3],(l&192)===128&&(h&192)===128&&(b&192)===128&&(S=(m&15)<<18|(l&63)<<12|(h&63)<<6|b&63,S>65535&&S<1114112&&(p=S))}}p===null?(p=65533,_=1):p>65535&&(p-=65536,s.push(p>>>10&1023|55296),p=56320|p&1023),s.push(p),c+=_}return Ym(s)}var Gr=4096;function Ym(e){var o=e.length;if(o<=Gr)return String.fromCharCode.apply(String,e);for(var t="",s=0;s<o;)t+=String.fromCharCode.apply(String,e.slice(s,s+=Gr));return t}function Jm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]&127);return s}function Zm(e,o,t){var s="";t=Math.min(e.length,t);for(var c=o;c<t;++c)s+=String.fromCharCode(e[c]);return s}function Qm(e,o,t){var s=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>s)&&(t=s);for(var c="",m=o;m<t;++m)c+=ad[e[m]];return c}function ed(e,o,t){for(var s=e.slice(o,t),c="",m=0;m<s.length-1;m+=2)c+=String.fromCharCode(s[m]+s[m+1]*256);return c}d.prototype.slice=function(o,t){var s=this.length;o=~~o,t=t===void 0?s:~~t,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),t<0?(t+=s,t<0&&(t=0)):t>s&&(t=s),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,d.prototype),c};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o],m=1,p=0;++p<t&&(m*=256);)c+=this[o+p]*m;return c};d.prototype.readUintBE=d.prototype.readUIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o+--t],m=1;t>0&&(m*=256);)c+=this[o+--t]*m;return c};d.prototype.readUint8=d.prototype.readUInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]|this[o+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||B(o,2,this.length),this[o]<<8|this[o+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};d.prototype.readIntLE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=this[o],m=1,p=0;++p<t&&(m*=256);)c+=this[o+p]*m;return m*=128,c>=m&&(c-=Math.pow(2,8*t)),c};d.prototype.readIntBE=function(o,t,s){o=o>>>0,t=t>>>0,s||B(o,t,this.length);for(var c=t,m=1,p=this[o+--c];c>0&&(m*=256);)p+=this[o+--c]*m;return m*=128,p>=m&&(p-=Math.pow(2,8*t)),p};d.prototype.readInt8=function(o,t){return o=o>>>0,t||B(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};d.prototype.readInt16LE=function(o,t){o=o>>>0,t||B(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s};d.prototype.readInt16BE=function(o,t){o=o>>>0,t||B(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s};d.prototype.readInt32LE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};d.prototype.readInt32BE=function(o,t){return o=o>>>0,t||B(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};d.prototype.readFloatLE=function(o,t){return o=o>>>0,t||B(o,4,this.length),Ze.read(this,o,!0,23,4)};d.prototype.readFloatBE=function(o,t){return o=o>>>0,t||B(o,4,this.length),Ze.read(this,o,!1,23,4)};d.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||B(o,8,this.length),Ze.read(this,o,!0,52,8)};d.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||B(o,8,this.length),Ze.read(this,o,!1,52,8)};function $(e,o,t,s,c,m){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<m)throw new RangeError('"value" argument is out of bounds');if(t+s>e.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var m=Math.pow(2,8*s)-1;$(this,o,t,s,m,0)}var p=1,_=0;for(this[t]=o&255;++_<s&&(p*=256);)this[t+_]=o/p&255;return t+s};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,s=s>>>0,!c){var m=Math.pow(2,8*s)-1;$(this,o,t,s,m,0)}var p=s-1,_=1;for(this[t+p]=o&255;--p>=0&&(_*=256);)this[t+p]=o/_&255;return t+s};d.prototype.writeUint8=d.prototype.writeUInt8=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,1,255,0),this[t]=o&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};d.prototype.writeIntLE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var m=Math.pow(2,8*s-1);$(this,o,t,s,m-1,-m)}var p=0,_=1,l=0;for(this[t]=o&255;++p<s&&(_*=256);)o<0&&l===0&&this[t+p-1]!==0&&(l=1),this[t+p]=(o/_>>0)-l&255;return t+s};d.prototype.writeIntBE=function(o,t,s,c){if(o=+o,t=t>>>0,!c){var m=Math.pow(2,8*s-1);$(this,o,t,s,m-1,-m)}var p=s-1,_=1,l=0;for(this[t+p]=o&255;--p>=0&&(_*=256);)o<0&&l===0&&this[t+p+1]!==0&&(l=1),this[t+p]=(o/_>>0)-l&255;return t+s};d.prototype.writeInt8=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};d.prototype.writeInt16LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};d.prototype.writeInt16BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};d.prototype.writeInt32LE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};d.prototype.writeInt32BE=function(o,t,s){return o=+o,t=t>>>0,s||$(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function zr(e,o,t,s,c,m){if(t+s>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Kr(e,o,t,s,c){return o=+o,t=t>>>0,c||zr(e,o,t,4,34028234663852886e22,-34028234663852886e22),Ze.write(e,o,t,s,23,4),t+4}d.prototype.writeFloatLE=function(o,t,s){return Kr(this,o,t,!0,s)};d.prototype.writeFloatBE=function(o,t,s){return Kr(this,o,t,!1,s)};function Xr(e,o,t,s,c){return o=+o,t=t>>>0,c||zr(e,o,t,8,17976931348623157e292,-17976931348623157e292),Ze.write(e,o,t,s,52,8),t+8}d.prototype.writeDoubleLE=function(o,t,s){return Xr(this,o,t,!0,s)};d.prototype.writeDoubleBE=function(o,t,s){return Xr(this,o,t,!1,s)};d.prototype.copy=function(o,t,s,c){if(!d.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<s&&(c=s),c===s||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-s&&(c=o.length-t+s);var m=c-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,s,c):Uint8Array.prototype.set.call(o,this.subarray(s,c),t),m};d.prototype.fill=function(o,t,s,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,s=this.length):typeof s=="string"&&(c=s,s=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!d.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var m=o.charCodeAt(0);(c==="utf8"&&m<128||c==="latin1")&&(o=m)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<s)throw new RangeError("Out of range index");if(s<=t)return this;t=t>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var p;if(typeof o=="number")for(p=t;p<s;++p)this[p]=o;else{var _=d.isBuffer(o)?o:d.from(o,c),l=_.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(p=0;p<s-t;++p)this[p+t]=_[p%l]}return this};var od=/[^+/0-9A-Za-z-_]/g;function nd(e){if(e=e.split("=")[0],e=e.trim().replace(od,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function at(e,o){o=o||1/0;for(var t,s=e.length,c=null,m=[],p=0;p<s;++p){if(t=e.charCodeAt(p),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&m.push(239,191,189);continue}else if(p+1===s){(o-=3)>-1&&m.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&m.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&m.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;m.push(t)}else if(t<2048){if((o-=2)<0)break;m.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;m.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;m.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return m}function td(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function rd(e,o){for(var t,s,c,m=[],p=0;p<e.length&&!((o-=2)<0);++p)t=e.charCodeAt(p),s=t>>8,c=t%256,m.push(c),m.push(s);return m}function Yr(e){return nt.toByteArray(nd(e))}function Zo(e,o,t,s){for(var c=0;c<s&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function se(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function ct(e){return e!==e}var ad=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var s=t*16,c=0;c<16;++c)o[s+c]=e[t]+e[c];return o}()});var na=y((GT,oa)=>{n();var M=oa.exports={},ce,pe;function pt(){throw new Error("setTimeout has not been defined")}function mt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ce=setTimeout:ce=pt}catch(e){ce=pt}try{typeof clearTimeout=="function"?pe=clearTimeout:pe=mt}catch(e){pe=mt}})();function Zr(e){if(ce===setTimeout)return setTimeout(e,0);if((ce===pt||!ce)&&setTimeout)return ce=setTimeout,setTimeout(e,0);try{return ce(e,0)}catch(o){try{return ce.call(null,e,0)}catch(t){return ce.call(this,e,0)}}}function id(e){if(pe===clearTimeout)return clearTimeout(e);if((pe===mt||!pe)&&clearTimeout)return pe=clearTimeout,clearTimeout(e);try{return pe(e)}catch(o){try{return pe.call(null,e)}catch(t){return pe.call(this,e)}}}var he=[],eo=!1,Fe,Qo=-1;function sd(){!eo||!Fe||(eo=!1,Fe.length?he=Fe.concat(he):Qo=-1,he.length&&Qr())}function Qr(){if(!eo){var e=Zr(sd);eo=!0;for(var o=he.length;o;){for(Fe=he,he=[];++Qo<o;)Fe&&Fe[Qo].run();Qo=-1,o=he.length}Fe=null,eo=!1,id(e)}}M.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];he.push(new ea(e,o)),he.length===1&&!eo&&Zr(Qr)};function ea(e,o){this.fun=e,this.array=o}ea.prototype.run=function(){this.fun.apply(null,this.array)};M.title="browser";M.browser=!0;M.env={};M.argv=[];M.version="";M.versions={};function Te(){}M.on=Te;M.addListener=Te;M.once=Te;M.off=Te;M.removeListener=Te;M.removeAllListeners=Te;M.emit=Te;M.prependListener=Te;M.prependOnceListener=Te;M.listeners=function(e){return[]};M.binding=function(e){throw new Error("process.binding is not supported")};M.cwd=function(){return"/"};M.chdir=function(e){throw new Error("process.chdir is not supported")};M.umask=function(){return 0}});var r,i,cd,a,n=g(()=>{r=T(Jr()),i=T(na()),cd=function(e){function o(){var s=this||self;return delete e.prototype.__magic__,s}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=cd});var ta=g(()=>{"use strict";n()});var me=g(()=>{"use strict";n()});var ra=g(()=>{"use strict";n()});var dt,aa=g(()=>{"use strict";n();dt=(s=>(s.SetGuardian="SetGuardian",s.GuardAccount="GuardAccount",s.UnGuardAccount="UnGuardAccount",s))(dt||{})});var ia=g(()=>{"use strict";n()});var lt=g(()=>{"use strict";n()});var sa=g(()=>{"use strict";n()});var _t=g(()=>{"use strict";n()});var ca=g(()=>{"use strict";n()});var pa=g(()=>{"use strict";n()});var Be,oo,Le=g(()=>{"use strict";n();Be=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),oo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var ma,QT,da,ex,C=g(()=>{"use strict";n();Le();ma=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ma||{}),QT=u(u({},oo.WindowProviderRequestEnums),ma),da=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(da||{}),ex=u(u({},oo.WindowProviderResponseEnums),da)});var la=g(()=>{"use strict";n()});var _a=g(()=>{"use strict";n()});var V=g(()=>{"use strict";n()});var ua=g(()=>{"use strict";n()});var ga=g(()=>{"use strict";n()});var fa=g(()=>{"use strict";n()});var O=g(()=>{"use strict";n();_t();ca();pa();C();la();_a();V();ua();ga();fa()});var no,ha,hx,Ta,Tx,xa,xx,yx,pd,to=g(()=>{"use strict";n();O();no={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ha,egldLabel:hx}=no["devnet"],{chainId:Ta,egldLabel:Tx}=no["testnet"],{chainId:xa,egldLabel:xx}=no["mainnet"],yx={["devnet"]:ha,["testnet"]:Ta,["mainnet"]:xa},pd={[ha]:"devnet",[Ta]:"testnet",[xa]:"mainnet"}});var en=g(()=>{"use strict";n()});var de,ya=g(()=>{"use strict";n();de=require("@multiversx/sdk-web-wallet-provider")});var Ue,Ao=g(()=>{"use strict";n();Ue=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Sa,ba,ut,Ax,kx,gt=g(()=>{"use strict";n();Ao();ut=String((ba=(Sa=Ue.safeWindow)==null?void 0:Sa.navigator)==null?void 0:ba.userAgent),Ax=/^((?!chrome|android).)*safari/i.test(ut),kx=/firefox/i.test(ut)&&/windows/i.test(ut)});var ft,on,ko,ht,Lo,ee,We,wa,nn,va,xe,A=g(()=>{"use strict";n();ta();me();ra();aa();ia();lt();sa();to();en();ya();gt();ft=.01,on=1500,ko=5e4,ht=5e4,Lo=1e9,ee=18,We=4,wa=1,nn="logout",va="login",xe="0"});var Ge,ro=g(()=>{"use strict";n();Ge=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Tt={};Z(Tt,{css:()=>Aa,default:()=>md});var Aa,md,xt=g(()=>{"use strict";n();Aa=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Aa));md={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Eo,tn=g(()=>{"use strict";n();Eo=()=>Date.now()/1e3});var Pa=g(()=>{"use strict";n()});var Ea=g(()=>{"use strict";n()});var St=g(()=>{"use strict";n();tn();Pa();Ea()});var bt={};Z(bt,{clear:()=>fd,getItem:()=>ud,localStorageKeys:()=>Pe,removeItem:()=>gd,setItem:()=>_d});var Pe,rn,_d,ud,gd,fd,ao=g(()=>{"use strict";n();St();Pe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},rn=typeof localStorage!="undefined",_d=({key:e,data:o,expires:t})=>{!rn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ud=e=>{if(!rn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Eo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},gd=e=>{!rn||localStorage.removeItem(String(e))},fd=()=>{!rn||localStorage.clear()}});var wt={};Z(wt,{clear:()=>Ra,getItem:()=>Na,removeItem:()=>Da,setItem:()=>Ca,storage:()=>hd});var Ca,Na,Da,Ra,hd,Ma=g(()=>{"use strict";n();Ca=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Na=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Da=e=>sessionStorage.removeItem(String(e)),Ra=()=>sessionStorage.clear(),hd={setItem:Ca,getItem:Na,removeItem:Da,clear:Ra}});var He,io=g(()=>{"use strict";n();ao();Ma();He={session:wt,local:bt}});var vt,D,K,R=g(()=>{"use strict";n();vt=require("@reduxjs/toolkit");A();D=(0,vt.createAction)(nn),K=(0,vt.createAction)(va,e=>({payload:e}))});var At,Oa,Fa,an,It,Ba,sn,Td,kt,ly,xd,yd,_y,uy,gy,Sd,bd,cn,pn=g(()=>{"use strict";n();At=require("@multiversx/sdk-core"),Oa=require("@reduxjs/toolkit"),Fa=require("redux-persist");A();io();ao();R();an={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:xe},It={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":an},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ba=(0,Oa.createSlice)({name:"accountInfoSlice",initialState:It,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new At.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:an},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(D,()=>(He.local.removeItem(Pe.loginExpiresAt),It)),e.addCase(K,(o,t)=>{let{address:s}=t.payload;o.address=s,o.publicKey=new At.Address(s).hex()}),e.addCase(Fa.REHYDRATE,(o,t)=>{var h;if(!((h=t.payload)!=null&&h.account))return;let{account:s}=t.payload,{address:c,shard:m,accounts:p,publicKey:_}=s;o.address=c,o.shard=m;let l=p&&c in p;o.accounts=l?p:It.accounts,o.publicKey=_})}}),{setAccount:sn,setAddress:Td,setAccountNonce:kt,setAccountShard:ly,setLedgerAccount:xd,updateLedgerAccount:yd,setWalletConnectAccount:_y,setIsAccountLoading:uy,setAccountLoadingError:gy,setWebsocketEvent:Sd,setWebsocketBatchEvent:bd}=Ba.actions,cn=Ba.reducer});function Co(){return new Date().setHours(new Date().getHours()+24)}function No(e){He.local.setItem({key:Pe.loginExpiresAt,data:e,expires:e})}var Lt=g(()=>{"use strict";n();io();ao()});var Wa,Ua,Ga,Iy,wd,vd,Ha,Ay,Id,$a,ky,Ly,Py,mn,dn=g(()=>{"use strict";n();Wa=require("@reduxjs/toolkit");Lt();C();R();Ua={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ga=(0,Wa.createSlice)({name:"loginInfoSlice",initialState:Ua,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(D,()=>Ua),e.addCase(K,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,No(Co())})}}),{setLoginMethod:Iy,setWalletConnectLogin:wd,setLedgerLogin:vd,setTokenLogin:Ha,setTokenLoginSignature:Ay,setWalletLogin:Id,invalidateLoginSession:$a,setLogoutRoute:ky,setIsWalletConnectV2Initialized:Ly,setWebviewLogin:Py}=Ga.actions,mn=Ga.reducer});var qa,Va,ja,Dy,Ad,Ry,kd,ln,_n=g(()=>{"use strict";n();qa=require("@reduxjs/toolkit");R();Va={},ja=(0,qa.createSlice)({name:"modalsSlice",initialState:Va,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(D,()=>Va)}}),{setTxSubmittedModal:Dy,setNotificationModal:Ad,clearTxSubmittedModal:Ry,clearNotificationModal:kd}=ja.actions,ln=ja.reducer});var F,W=g(()=>{"use strict";n();ro();F=()=>{if(!Ge())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:s,href:c,search:m}}=window;return{pathname:o,hash:t,origin:s,href:c,search:m}}});var za=g(()=>{"use strict";n();W()});var Ka=g(()=>{"use strict";n();G()});var Xa=g(()=>{"use strict";n();Ao()});var G=g(()=>{"use strict";n();za();Ka();W();Xa()});var Do=g(()=>{"use strict";n();G()});var Ja=g(()=>{"use strict";n();Do()});function Za(e){return e[Math.floor(Math.random()*e.length)]}var Qa=g(()=>{"use strict";n()});var Pt=g(()=>{"use strict";n();lt()});var ye=g(()=>{"use strict";n();Ja();Qa();Pt()});var ei,oi,ni,Et,Pd,ti,lS,_S,Ed,un,gn=g(()=>{"use strict";n();ei=require("@reduxjs/toolkit"),oi=T(require("lodash.omit")),ni=require("redux-persist");en();R();ye();Et={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Pd={network:Et},ti=(0,ei.createSlice)({name:"appConfig",initialState:Pd,reducers:{initializeNetworkConfig:(e,o)=>{let t=Za(o.payload.walletConnectV2RelayAddresses),s=(0,oi.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),s),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(D,o=>{o.network.customWalletAddress=void 0}),e.addCase(ni.REHYDRATE,(o,t)=>{var c,m;if(!((m=(c=t.payload)==null?void 0:c.network)!=null&&m.customWalletAddress))return;let{network:{customWalletAddress:s}}=t.payload;o.network.customWalletAddress=s})}}),{initializeNetworkConfig:lS,updateNetworkConfig:_S,setCustomWalletAddress:Ed}=ti.actions,un=ti.reducer});var ri,Ct,ai,xS,yS,SS,fn,hn=g(()=>{"use strict";n();ri=require("@reduxjs/toolkit");O();R();Ct={isSigning:!1,signedSessions:{}},ai=(0,ri.createSlice)({name:"signedMessageInfoSliceState",initialState:Ct,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:s,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=s.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),s)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Ct},extraReducers:e=>{e.addCase(D,()=>Ct)}}),{setSignSession:xS,clearSignedMessageInfo:yS,setSignSessionState:SS}=ai.actions,fn=ai.reducer});var si,ci,ii,pi,Cd,Nd,LS,Dd,Tn,xn=g(()=>{"use strict";n();si=require("@reduxjs/toolkit"),ci=require("redux-persist");O();tn();R();ii={customToasts:[],transactionToasts:[]},pi=(0,si.createSlice)({name:"toastsSlice",initialState:ii,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,s=e.customToasts.findIndex(c=>c.toastId===t);if(s!==-1){e.customToasts[s]=w(u(u({},e.customToasts[s]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Eo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(D,()=>ii),e.addCase(ci.REHYDRATE,(o,t)=>{var c,m;let s=(m=(c=t.customToasts)==null?void 0:c.filter(p=>!("component"in p)))!=null?m:[];o.customToasts=s})}}),{addCustomToast:Cd,removeCustomToast:Nd,addTransactionToast:LS,removeTransactionToast:Dd}=pi.actions,Tn=pi.reducer});var mi,Dt,Rt,Mt,Rd,Nt,di,NS,Md,Ot,yn,Sn=g(()=>{"use strict";n();mi=require("@reduxjs/toolkit");R();Dt="Transaction failed",Rt="Transaction successful",Mt="Processing transaction",Rd="Transaction submitted",Nt={},di=(0,mi.createSlice)({name:"transactionsInfo",initialState:Nt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:s}=o.payload;t!=null&&(e[t]={errorMessage:(s==null?void 0:s.errorMessage)||Dt,successMessage:(s==null?void 0:s.successMessage)||Rt,processingMessage:(s==null?void 0:s.processingMessage)||Mt,submittedMessage:(s==null?void 0:s.submittedMessage)||Rd,transactionDuration:s==null?void 0:s.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Nt},extraReducers:e=>{e.addCase(D,()=>Nt)}}),{clearTransactionsInfo:NS,setTransactionsDisplayInfo:Md,clearTransactionsInfoForSessionId:Ot}=di.actions,yn=di.reducer});function co(e){return e!=null&&(qd(e)||Yd(e))}function po(e){return e!=null&&(jd(e)||Jd(e))}function mo(e){return e!=null&&(zd(e)||Zd(e))}function li(e){return e!=null&&(Kd(e)||Qd(e))}function Ft(e){return e!=null&&Xd(e)}function qd(e){return e!=null&&Od.includes(e)}function jd(e){return e!=null&&Fd.includes(e)}function zd(e){return e!=null&&Bd.includes(e)}function Kd(e){return e!=null&&Ud.includes(e)}function Xd(e){return e!=null&&Wd.includes(e)}function Yd(e){return e!=null&&Gd.includes(e)}function Jd(e){return e!=null&&Hd.includes(e)}function Zd(e){return e!=null&&$d.includes(e)}function Qd(e){return e!=null&&Vd.includes(e)}var Od,Fd,Bd,Ud,Wd,Gd,Hd,$d,Vd,lo=g(()=>{"use strict";n();C();Od=["sent"],Fd=["success"],Bd=["fail","cancelled","timedOut"],Ud=["invalid"],Wd=["timedOut"],Gd=["pending"],Hd=["success"],$d=["fail","invalid"],Vd=["not executed"]});var _i,ui,Ro,el,gi,fi,hi,ol,bn,nl,tl,GS,rl,Mo,Bt,HS,wn,vn=g(()=>{"use strict";n();_i=require("@reduxjs/toolkit"),ui=require("redux-persist");C();lo();R();Ro={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},el={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},gi=(0,_i.createSlice)({name:"transactionsSlice",initialState:Ro,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,h;let{sessionId:t,transactions:s,errorMessage:c,status:m,redirectRoute:p,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},el),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:s,status:m,errorMessage:c,redirectRoute:p,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((h=e==null?void 0:e.transactionsToSign)==null?void 0:h.sessionId)===t&&(e.transactionsToSign=Ro.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:s,errorMessage:c,transactions:m}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=s,c!=null&&(e.signedTransactions[t].errorMessage=c),m!=null&&(e.signedTransactions[t].transactions=m))},updateSignedTransactionStatus:(e,o)=>{var h,b,S,I,E,L,ae,ke;let{sessionId:t,status:s,errorMessage:c,transactionHash:m,serverTransaction:p,inTransit:_}=o.payload,l=(b=(h=e.signedTransactions)==null?void 0:h[t])==null?void 0:b.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(N=>N.hash===m?w(u(u({},p!=null?p:{}),N),{status:s,errorMessage:c,inTransit:_}):N);let J=(I=(S=e.signedTransactions[t])==null?void 0:S.transactions)==null?void 0:I.every(N=>po(N.status)),ne=(L=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:L.some(N=>mo(N.status)),ge=(ke=(ae=e.signedTransactions[t])==null?void 0:ae.transactions)==null?void 0:ke.every(N=>li(N.status));J&&(e.signedTransactions[t].status="success"),ne&&(e.signedTransactions[t].status="fail"),ge&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:s}=o.payload;e.customTransactionInformationForSessionId[t]=s,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ro.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ro.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:s}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),s))}},extraReducers:e=>{e.addCase(D,()=>Ro),e.addCase(ui.REHYDRATE,(o,t)=>{var p;if(o.signTransactionsCancelMessage=null,!((p=t.payload)!=null&&p.transactions))return;let{signedTransactions:s,customTransactionInformationForSessionId:c}=t.payload.transactions,m=Object.entries(s).reduce((_,[l,h])=>{let b=new Date(l),S=new Date;return S.setHours(S.getHours()+5),S-b>0||(_[l]=h),_},{});c!=null&&(o.customTransactionInformationForSessionId=c),s!=null&&(o.signedTransactions=m)})}}),{updateSignedTransactionStatus:fi,updateSignedTransactions:hi,setTransactionsToSign:ol,clearAllTransactionsToSign:bn,clearAllSignedTransactions:nl,clearSignedTransaction:tl,clearTransactionToSign:GS,setSignTransactionsError:rl,setSignTransactionsCancelMessage:Mo,moveTransactionsToSignedState:Bt,updateSignedTransactionsCustomTransactionInformation:HS}=gi.actions,wn=gi.reducer});var Ti,Ut,xi,jS,zS,al,KS,In,An=g(()=>{"use strict";n();Ti=require("@reduxjs/toolkit");R();Ut={},xi=(0,Ti.createSlice)({name:"batchTransactionsSlice",initialState:Ut,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ut},extraReducers:e=>{e.addCase(D,()=>Ut)}}),{setBatchTransactions:jS,updateBatchTransactions:zS,clearBatchTransactions:al,clearAllBatchTransactions:KS}=xi.actions,In=xi.reducer});var Si,yi,bi,ZS,wi,Wt=g(()=>{"use strict";n();Si=require("@reduxjs/toolkit");R();yi={},bi=(0,Si.createSlice)({name:"dappConfigSlice",initialState:yi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(D,()=>yi)}}),{setDappConfig:ZS}=bi.actions,wi=bi.reducer});var P=g(()=>{"use strict";n();pn();dn();_n();gn();hn();xn();Sn();vn();An();Wt()});var Gt=g(()=>{"use strict";n()});var Ai,pl,ml,$e,Pn=g(()=>{"use strict";n();Ai=require("@reduxjs/toolkit");Gt();pn();An();Wt();dn();_n();gn();hn();xn();Sn();vn();pl={["account"]:cn,["dappConfig"]:wi,["loginInfo"]:mn,["modals"]:ln,["networkConfig"]:un,["signedMessageInfo"]:fn,["toasts"]:Tn,["transactionsInfo"]:yn,["transactions"]:wn,["batchTransactions"]:In},ml=(e={})=>(0,Ai.combineReducers)(u(u({},pl),e)),$e=ml});var Ei={};Z(Ei,{default:()=>Al,sessionStorageReducers:()=>Ht});function Se(e,o=[]){return{key:e,version:1,storage:Li.default,blacklist:o}}var j,ki,Li,dl,Oo,ll,_l,ul,gl,fl,hl,Tl,xl,yl,Sl,Pi,bl,Ht,wl,vl,Il,Al,Ci=g(()=>{"use strict";n();j=require("redux-persist"),ki=T(require("redux-persist/lib/storage")),Li=T(require("redux-persist/lib/storage/session"));Pn();P();pn();An();dn();_n();gn();hn();xn();Sn();vn();Gt();dl={persistReducersStorageType:"localStorage"},Oo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},ll=Se(Oo["account"]),_l=Se(Oo["loginInfo"]),ul=Se(Oo["modals"]),gl=Se(Oo["networkConfig"]),fl={2:e=>w(u({},e),{networkConfig:Et})};hl=Se("sdk-dapp-transactionsInfo"),Tl=Se("sdk-dapp-transactions",["transactionsToSign"]),xl=Se("sdk-dapp-batchTransactions",["batchTransactions"]),yl=Se("sdk-dapp-toasts"),Sl=Se("sdk-dapp-signedMessageInfo"),Pi={key:"sdk-dapp-store",version:2,storage:ki.default,whitelist:Object.keys(Oo),migrate:(0,j.createMigrate)(fl,{debug:!1})},bl=w(u({},Pi),{whitelist:[]}),Ht={["toasts"]:(0,j.persistReducer)(yl,Tn),["transactions"]:(0,j.persistReducer)(Tl,wn),["transactionsInfo"]:(0,j.persistReducer)(hl,yn),["batchTransactions"]:(0,j.persistReducer)(xl,In),["signedMessageInfo"]:(0,j.persistReducer)(Sl,fn)},wl=w(u({},Ht),{["account"]:(0,j.persistReducer)(ll,cn),["loginInfo"]:(0,j.persistReducer)(_l,mn),["modals"]:(0,j.persistReducer)(ul,ln),["networkConfig"]:(0,j.persistReducer)(gl,un)}),vl=dl.persistReducersStorageType==="localStorage",Il=vl?(0,j.persistReducer)(Pi,$e(Ht)):(0,j.persistReducer)(bl,$e(wl)),Al=Il});var Ni={};Z(Ni,{default:()=>kl});var kl,Di=g(()=>{"use strict";n();Pn();kl=$e()});var Ri={};Z(Ri,{default:()=>Pl});var oe,Ll,Pl,Mi=g(()=>{"use strict";n();oe=require("redux-persist"),Ll=[oe.FLUSH,oe.REHYDRATE,oe.PAUSE,oe.PERSIST,oe.PURGE,oe.REGISTER],Pl=Ll});var Bi={};Z(Bi,{default:()=>Fi});function Fi(e){return(0,Oi.persistStore)(e)}var Oi,Ui=g(()=>{"use strict";n();Oi=require("redux-persist")});var Fs=y((zR,Os)=>{n();var xu=typeof a=="object"&&a&&a.Object===Object&&a;Os.exports=xu});var Go=y((KR,Bs)=>{n();var yu=Fs(),Su=typeof self=="object"&&self&&self.Object===Object&&self,bu=yu||Su||Function("return this")();Bs.exports=bu});var sr=y((XR,Us)=>{n();var wu=Go(),vu=wu.Symbol;Us.exports=vu});var $s=y((YR,Hs)=>{n();var Ws=sr(),Gs=Object.prototype,Iu=Gs.hasOwnProperty,Au=Gs.toString,Ho=Ws?Ws.toStringTag:void 0;function ku(e){var o=Iu.call(e,Ho),t=e[Ho];try{e[Ho]=void 0;var s=!0}catch(m){}var c=Au.call(e);return s&&(o?e[Ho]=t:delete e[Ho]),c}Hs.exports=ku});var qs=y((JR,Vs)=>{n();var Lu=Object.prototype,Pu=Lu.toString;function Eu(e){return Pu.call(e)}Vs.exports=Eu});var cr=y((ZR,Ks)=>{n();var js=sr(),Cu=$s(),Nu=qs(),Du="[object Null]",Ru="[object Undefined]",zs=js?js.toStringTag:void 0;function Mu(e){return e==null?e===void 0?Ru:Du:zs&&zs in Object(e)?Cu(e):Nu(e)}Ks.exports=Mu});var Ys=y((QR,Xs)=>{n();var Ou=Array.isArray;Xs.exports=Ou});var Zs=y((e2,Js)=>{n();function Fu(e){return e!=null&&typeof e=="object"}Js.exports=Fu});var ec=y((o2,Qs)=>{n();var Bu=cr(),Uu=Ys(),Wu=Zs(),Gu="[object String]";function Hu(e){return typeof e=="string"||!Uu(e)&&Wu(e)&&Bu(e)==Gu}Qs.exports=Hu});var qn=y((eM,ac)=>{n();function sg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}ac.exports=sg});var sc=y((oM,ic)=>{n();var cg=cr(),pg=qn(),mg="[object AsyncFunction]",dg="[object Function]",lg="[object GeneratorFunction]",_g="[object Proxy]";function ug(e){if(!pg(e))return!1;var o=cg(e);return o==dg||o==lg||o==mg||o==_g}ic.exports=ug});var pc=y((nM,cc)=>{n();var gg=Go(),fg=gg["__core-js_shared__"];cc.exports=fg});var lc=y((tM,dc)=>{n();var lr=pc(),mc=function(){var e=/[^.]+$/.exec(lr&&lr.keys&&lr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function hg(e){return!!mc&&mc in e}dc.exports=hg});var uc=y((rM,_c)=>{n();var Tg=Function.prototype,xg=Tg.toString;function yg(e){if(e!=null){try{return xg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}_c.exports=yg});var fc=y((aM,gc)=>{n();var Sg=sc(),bg=lc(),wg=qn(),vg=uc(),Ig=/[\\^$.*+?()[\]{}|]/g,Ag=/^\[object .+?Constructor\]$/,kg=Function.prototype,Lg=Object.prototype,Pg=kg.toString,Eg=Lg.hasOwnProperty,Cg=RegExp("^"+Pg.call(Eg).replace(Ig,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ng(e){if(!wg(e)||bg(e))return!1;var o=Sg(e)?Cg:Ag;return o.test(vg(e))}gc.exports=Ng});var Tc=y((iM,hc)=>{n();function Dg(e,o){return e==null?void 0:e[o]}hc.exports=Dg});var jn=y((sM,xc)=>{n();var Rg=fc(),Mg=Tc();function Og(e,o){var t=Mg(e,o);return Rg(t)?t:void 0}xc.exports=Og});var $o=y((cM,yc)=>{n();var Fg=jn(),Bg=Fg(Object,"create");yc.exports=Bg});var wc=y((pM,bc)=>{n();var Sc=$o();function Ug(){this.__data__=Sc?Sc(null):{},this.size=0}bc.exports=Ug});var Ic=y((mM,vc)=>{n();function Wg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}vc.exports=Wg});var kc=y((dM,Ac)=>{n();var Gg=$o(),Hg="__lodash_hash_undefined__",$g=Object.prototype,Vg=$g.hasOwnProperty;function qg(e){var o=this.__data__;if(Gg){var t=o[e];return t===Hg?void 0:t}return Vg.call(o,e)?o[e]:void 0}Ac.exports=qg});var Pc=y((lM,Lc)=>{n();var jg=$o(),zg=Object.prototype,Kg=zg.hasOwnProperty;function Xg(e){var o=this.__data__;return jg?o[e]!==void 0:Kg.call(o,e)}Lc.exports=Xg});var Cc=y((_M,Ec)=>{n();var Yg=$o(),Jg="__lodash_hash_undefined__";function Zg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Yg&&o===void 0?Jg:o,this}Ec.exports=Zg});var Dc=y((uM,Nc)=>{n();var Qg=wc(),ef=Ic(),of=kc(),nf=Pc(),tf=Cc();function xo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}xo.prototype.clear=Qg;xo.prototype.delete=ef;xo.prototype.get=of;xo.prototype.has=nf;xo.prototype.set=tf;Nc.exports=xo});var Mc=y((gM,Rc)=>{n();function rf(){this.__data__=[],this.size=0}Rc.exports=rf});var Fc=y((fM,Oc)=>{n();function af(e,o){return e===o||e!==e&&o!==o}Oc.exports=af});var Vo=y((hM,Bc)=>{n();var sf=Fc();function cf(e,o){for(var t=e.length;t--;)if(sf(e[t][0],o))return t;return-1}Bc.exports=cf});var Wc=y((TM,Uc)=>{n();var pf=Vo(),mf=Array.prototype,df=mf.splice;function lf(e){var o=this.__data__,t=pf(o,e);if(t<0)return!1;var s=o.length-1;return t==s?o.pop():df.call(o,t,1),--this.size,!0}Uc.exports=lf});var Hc=y((xM,Gc)=>{n();var _f=Vo();function uf(e){var o=this.__data__,t=_f(o,e);return t<0?void 0:o[t][1]}Gc.exports=uf});var Vc=y((yM,$c)=>{n();var gf=Vo();function ff(e){return gf(this.__data__,e)>-1}$c.exports=ff});var jc=y((SM,qc)=>{n();var hf=Vo();function Tf(e,o){var t=this.__data__,s=hf(t,e);return s<0?(++this.size,t.push([e,o])):t[s][1]=o,this}qc.exports=Tf});var Kc=y((bM,zc)=>{n();var xf=Mc(),yf=Wc(),Sf=Hc(),bf=Vc(),wf=jc();function yo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}yo.prototype.clear=xf;yo.prototype.delete=yf;yo.prototype.get=Sf;yo.prototype.has=bf;yo.prototype.set=wf;zc.exports=yo});var Yc=y((wM,Xc)=>{n();var vf=jn(),If=Go(),Af=vf(If,"Map");Xc.exports=Af});var Qc=y((vM,Zc)=>{n();var Jc=Dc(),kf=Kc(),Lf=Yc();function Pf(){this.size=0,this.__data__={hash:new Jc,map:new(Lf||kf),string:new Jc}}Zc.exports=Pf});var op=y((IM,ep)=>{n();function Ef(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}ep.exports=Ef});var qo=y((AM,np)=>{n();var Cf=op();function Nf(e,o){var t=e.__data__;return Cf(o)?t[typeof o=="string"?"string":"hash"]:t.map}np.exports=Nf});var rp=y((kM,tp)=>{n();var Df=qo();function Rf(e){var o=Df(this,e).delete(e);return this.size-=o?1:0,o}tp.exports=Rf});var ip=y((LM,ap)=>{n();var Mf=qo();function Of(e){return Mf(this,e).get(e)}ap.exports=Of});var cp=y((PM,sp)=>{n();var Ff=qo();function Bf(e){return Ff(this,e).has(e)}sp.exports=Bf});var mp=y((EM,pp)=>{n();var Uf=qo();function Wf(e,o){var t=Uf(this,e),s=t.size;return t.set(e,o),this.size+=t.size==s?0:1,this}pp.exports=Wf});var lp=y((CM,dp)=>{n();var Gf=Qc(),Hf=rp(),$f=ip(),Vf=cp(),qf=mp();function So(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var s=e[o];this.set(s[0],s[1])}}So.prototype.clear=Gf;So.prototype.delete=Hf;So.prototype.get=$f;So.prototype.has=Vf;So.prototype.set=qf;dp.exports=So});var up=y((NM,_p)=>{n();var jf="__lodash_hash_undefined__";function zf(e){return this.__data__.set(e,jf),this}_p.exports=zf});var fp=y((DM,gp)=>{n();function Kf(e){return this.__data__.has(e)}gp.exports=Kf});var Tp=y((RM,hp)=>{n();var Xf=lp(),Yf=up(),Jf=fp();function zn(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Xf;++o<t;)this.add(e[o])}zn.prototype.add=zn.prototype.push=Yf;zn.prototype.has=Jf;hp.exports=zn});var yp=y((MM,xp)=>{n();function Zf(e,o,t,s){for(var c=e.length,m=t+(s?1:-1);s?m--:++m<c;)if(o(e[m],m,e))return m;return-1}xp.exports=Zf});var bp=y((OM,Sp)=>{n();function Qf(e){return e!==e}Sp.exports=Qf});var vp=y((FM,wp)=>{n();function eh(e,o,t){for(var s=t-1,c=e.length;++s<c;)if(e[s]===o)return s;return-1}wp.exports=eh});var Ap=y((BM,Ip)=>{n();var oh=yp(),nh=bp(),th=vp();function rh(e,o,t){return o===o?th(e,o,t):oh(e,nh,t)}Ip.exports=rh});var Lp=y((UM,kp)=>{n();var ah=Ap();function ih(e,o){var t=e==null?0:e.length;return!!t&&ah(e,o,0)>-1}kp.exports=ih});var Ep=y((WM,Pp)=>{n();function sh(e,o,t){for(var s=-1,c=e==null?0:e.length;++s<c;)if(t(o,e[s]))return!0;return!1}Pp.exports=sh});var Np=y((GM,Cp)=>{n();function ch(e,o){return e.has(o)}Cp.exports=ch});var Rp=y((HM,Dp)=>{n();var ph=jn(),mh=Go(),dh=ph(mh,"Set");Dp.exports=dh});var Op=y(($M,Mp)=>{n();function lh(){}Mp.exports=lh});var _r=y((VM,Fp)=>{n();function _h(e){var o=-1,t=Array(e.size);return e.forEach(function(s){t[++o]=s}),t}Fp.exports=_h});var Up=y((qM,Bp)=>{n();var ur=Rp(),uh=Op(),gh=_r(),fh=1/0,hh=ur&&1/gh(new ur([,-0]))[1]==fh?function(e){return new ur(e)}:uh;Bp.exports=hh});var Gp=y((jM,Wp)=>{n();var Th=Tp(),xh=Lp(),yh=Ep(),Sh=Np(),bh=Up(),wh=_r(),vh=200;function Ih(e,o,t){var s=-1,c=xh,m=e.length,p=!0,_=[],l=_;if(t)p=!1,c=yh;else if(m>=vh){var h=o?null:bh(e);if(h)return wh(h);p=!1,c=Sh,l=new Th}else l=o?[]:_;e:for(;++s<m;){var b=e[s],S=o?o(b):b;if(b=t||b!==0?b:0,p&&S===S){for(var I=l.length;I--;)if(l[I]===S)continue e;o&&l.push(S),_.push(b)}else c(l,S,t)||(l!==_&&l.push(S),_.push(b))}return _}Wp.exports=Ih});var $p=y((zM,Hp)=>{n();var Ah=Gp();function kh(e){return e&&e.length?Ah(e):[]}Hp.exports=kh});var ve={};Z(ve,{css:()=>om,default:()=>cT});var om,cT,Ie=g(()=>{"use strict";n();om=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(om));cT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var wr={};Z(wr,{css:()=>Tm,default:()=>PT});var Tm,PT,vr=g(()=>{"use strict";n();Tm=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tm));PT={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var kr={};Z(kr,{css:()=>xm,default:()=>CT});var xm,CT,Lr=g(()=>{"use strict";n();xm=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.5;
  }
}
.dapp-core-component__loadingDotsStyle__loadingDots {
  display: flex;
  align-items: center;
  gap: 4px;
  color: transparent;
  position: relative;
  text-indent: -9999px;
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #737373;
  font-size: inherit;
  animation: dapp-core-component__loadingDotsStyle__dot-flashing 500ms infinite linear alternate;
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot.dapp-core-component__loadingDotsStyle__loadingDot-0 {
  animation-delay: calc(1 * 250ms);
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot.dapp-core-component__loadingDotsStyle__loadingDot-1 {
  animation-delay: calc(2 * 250ms);
}
.dapp-core-component__loadingDotsStyle__loadingDots .dapp-core-component__loadingDotsStyle__loadingDot.dapp-core-component__loadingDotsStyle__loadingDot-2 {
  animation-delay: calc(3 * 250ms);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xm));CT={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var Er={};Z(Er,{css:()=>Sm,default:()=>DT});var Sm,DT,Cr=g(()=>{"use strict";n();Sm=`.dapp-core-component__confirmFeeStyles__confirmFee {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeLabel {
  color: #a3a3a3;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData .dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper {
  display: flex;
  align-items: center;
  color: #737373;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData .dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper .dapp-core-component__confirmFeeStyles__confirmFeeDataPrice {
  color: #737373;
}
.dapp-core-component__confirmFeeStyles__confirmFee .dapp-core-component__confirmFeeStyles__confirmFeeData .dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper .dapp-core-component__confirmFeeStyles__confirmFeeDataPrice * {
  opacity: 1 !important;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sm));DT={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var OT={};Z(OT,{ConfirmFee:()=>MT});module.exports=z(OT);n();var Ae=T(require("react"));A();n();var La=T(require("react"));n();var Po=T(require("react"));n();ro();var Ia=()=>!Ge();var dd=()=>f(void 0,null,function*(){return yield Promise.resolve().then(()=>(xt(),Tt))}),ld=()=>(xt(),z(Tt)).default,yt=Ia();function ka({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[s,c]=Po.default.useState(yt?void 0:ld()),[m,p]=Po.default.useState(yt||t==null?void 0:t()),_=()=>f(this,null,function*(){(e?e():dd()).then(l=>c(l.default)),o==null||o().then(l=>p(l.default))});return(0,Po.useEffect)(()=>{yt&&_()},[]),{globalStyles:s,styles:m}}function q(e,o){return t=>{let{globalStyles:s,styles:c}=ka({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return La.default.createElement(e,w(u({},t),{globalStyles:s!=null?s:{},styles:c!=null?c:{}}))}}n();n();n();var qi=require("react"),_o=require("react-redux");n();var $t=require("@reduxjs/toolkit"),$i=require("react-redux/lib/utils/Subscription");P();n();var vi=T(require("lodash.throttle"));A();P();Lt();io();ao();var il=[nn],kn=!1,sl=(0,vi.default)(()=>{No(Co())},5e3),Ii=e=>o=>t=>{if(il.includes(t.type))return o(t);let s=e.getState(),c=He.local.getItem(Pe.loginExpiresAt);if(!Boolean(s==null?void 0:s.account.address))return o(t);if(c==null)return No(Co());let p=Date.now();return c-p<0&&!kn?setTimeout(()=>{kn=!0,e.dispatch($a())},1e3):(kn&&(kn=!1),sl()),o(t)};n();n();function Ln(){return typeof sessionStorage!="undefined"}var Wi=Ln()?(Ci(),z(Ei)).default:(Di(),z(Ni)).default,Gi=Ln()?(Mi(),z(Ri)).default:[],Hi=Ln()?(Ui(),z(Bi)).default:e=>e;Pn();var v=(0,$t.configureStore)({reducer:Wi,middleware:e=>e({serializableCheck:{ignoredActions:[...Gi,kt.type,sn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ii)}),Vi=(0,$i.createSubscription)(v),Yb=Hi(v),Jb=(0,$t.configureStore)({reducer:$e});var El={store:v,subscription:Vi},Vt=(0,qi.createContext)(El),o0=(0,_o.createStoreHook)(Vt),H=(0,_o.createDispatchHook)(Vt),k=(0,_o.createSelectorHook)(Vt);n();n();P();n();var ji=T(require("lodash.isequal")),En=require("reselect"),x=(0,En.createSelectorCreator)(En.defaultMemoize,ji.default);var le=e=>e.account,Ve=x(le,e=>e.address),uo=x(le,Ve,(e,o)=>o in e.accounts?e.accounts[o]:an),Cl=x(le,uo,(e,o)=>{let c=e,{accounts:t}=c,s=Re(c,["accounts"]);return w(u({},s),{address:o.address,account:o})}),i0=x(uo,e=>e.balance),Nl=x(uo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),s0=x(le,e=>e.shard),Dl=x(le,e=>e.ledgerAccount),c0=x(le,e=>e.walletConnectAccount),p0=x(le,e=>e.isAccountLoading),m0=x(le,e=>e.accountLoadingError),Rl=x(le,e=>e.websocketEvent),Ml=x(le,e=>e.websocketBatchEvent);n();var zi=e=>e.dappConfig,_0=x(zi,e=>e.shouldUseWebViewProvider);n();var X=e=>e.loginInfo,Ol=x(X,e=>e.loginMethod),Cn=x(X,Ve,(e,o)=>Boolean(o)),h0=x(X,e=>e.walletConnectLogin),Fl=x(X,e=>e.ledgerLogin),Bl=x(X,e=>e.walletLogin),T0=x(X,e=>e.isLoginSessionInvalid),qt=x(X,e=>e.tokenLogin),Ki=x(X,e=>e.logoutRoute),Ul=x(X,e=>e.isWalletConnectV2Initialized);n();var Xi=e=>e.modals,S0=x(Xi,e=>e.txSubmittedModal),Wl=x(Xi,e=>e.notificationModal);n();var _e=e=>e.networkConfig,Nn=x(_e,e=>e.network.chainId),Gl=x(_e,e=>e.network.roundDuration),v0=x(_e,e=>e.network.walletConnectBridgeAddress),Hl=x(_e,e=>e.network.walletConnectV2RelayAddress),$l=x(_e,e=>e.network.walletConnectV2ProjectId),Vl=x(_e,e=>e.network.walletConnectV2Options),ql=x(_e,e=>e.network.walletConnectDeepLink),Y=x(_e,e=>e.network),jt=x(Y,e=>e.apiAddress),Yi=x(Y,e=>e.explorerAddress),Ji=x(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),jl=x(Y,e=>e.xAliasAddress),zt=x(Y,e=>e.egldLabel);n();var Dn=e=>e.signedMessageInfo,k0=x(Dn,e=>e.isSigning),L0=x(Dn,e=>e.errorMessage),P0=x(Dn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),E0=x(Dn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Zi=e=>e.toasts,zl=x(Zi,e=>e.customToasts),Qi=x(Zi,e=>e.transactionToasts);n();P();var es={errorMessage:Dt,successMessage:Rt,processingMessage:Mt},os=e=>e.transactionsInfo,Kl=x(os,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||es);n();n();var ue=require("@multiversx/sdk-core");A();n();var Xt=require("@multiversx/sdk-core/out");n();n();function Kt(e){try{let o=atob(e),t=btoa(o),s=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(s).toString("base64"),m=e===t||t.startsWith(e),p=e===c||c.startsWith(e);if(m&&p)return!0}catch(o){return!1}return!1}n();n();n();n();var ns=e=>{let o=e!=null?e:"";return Kt(o)?Xt.TransactionPayload.fromEncoded(o):new Xt.TransactionPayload(o)};n();A();var go=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(dt).some(t=>e.startsWith(t)):!1;function Rn(e){var s,c,m;let o=u({},e);go({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ue.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:ns(o.data),nonce:o.nonce.valueOf(),receiver:new ue.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ue.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(s=o.gasLimit.valueOf())!=null?s:ko,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Lo,chainID:o.chainID.valueOf(),version:new ue.TransactionVersion((m=o.version)!=null?m:wa)}),o.options?{options:new ue.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ue.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var Zl=require("@multiversx/sdk-core/out");n();A();n();var ts=require("@multiversx/sdk-core");O();n();var Ql=require("@multiversx/sdk-core");n();n();n();var e_=require("@multiversx/sdk-core"),o_=T(require("bignumber.js"));C();n();n();n();var Jt="blocks";var Fo="economics";n();n();n();n();V();n();n();V();n();n();n();var i_=T(require("bignumber.js"));A();n();var cs=require("@multiversx/sdk-core"),Ce=T(require("bignumber.js"));A();n();var ss=T(require("bignumber.js")),Fn=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let s=new ss.default(t),c=o?0:-1;return s.toString(10)===t&&s.comparedTo(0)>=c};n();function be(e){return{if:function(o){return o?{then:t=>t instanceof Function?be(t(e)):be(t)}:{then:()=>be(e)}},then:o=>o instanceof Function?be(o(e)):be(o),valueOf:function(){return e}}}Ce.default.config({ROUNDING_MODE:Ce.default.ROUND_FLOOR});function we({input:e,decimals:o=ee,digits:t=We,showLastNonZeroDecimal:s=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:m=!1}){if(!Fn(e,!1))throw new Error("Invalid input");let p=new Ce.default(e).isNegative(),_=e;return p&&(_=e.substring(1)),be(_).then(()=>cs.TokenTransfer.fungibleFromBigInteger("",_,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let h=new Ce.default(l);if(h.isZero())return xe;let b=h.toString(10),[S,I]=b.split("."),E=new Ce.default(I||0),L=be(0).if(Boolean(I&&s)).then(()=>Math.max(I.length,t)).if(E.isZero()&&!s).then(0).if(Boolean(I&&!s)).then(()=>Math.min(I.length,t)).valueOf(),ae=I&&t>=1&&t<=I.length&&E.isGreaterThan(0)&&new Ce.default(I.substring(0,t)).isZero(),ke=h.toFormat(L);return be(b).if(m).then(ke).if(Boolean(ae)).then(ne=>{let ge=new Ce.default(S).isZero(),[N,Ye]=ne.split("."),Je=new Array(t-1).fill(0),Jn=[...Je,0].join(""),Zn=[...Je,1].join("");return ge?c?`<${N}.${Zn}`:s?`${N}.${Ye}`:N:`${N}.${Jn}`}).if(Boolean(!ae&&I)).then(ne=>{let[ge]=ne.split("."),N=I.substring(0,L);if(s){let Ye=t-N.length;if(Ye>0){let Je=Array(Ye).fill(0).join("");return N=`${N}${Je}`,`${ge}.${N}`}return ne}return N?`${ge}.${N}`:ge}).valueOf()}).if(p).then(l=>`-${l}`).valueOf()}n();n();n();A();n();n();n();n();A();n();A();n();var s_=require("@multiversx/sdk-core");A();n();var te=require("@multiversx/sdk-core"),ds=T(require("bignumber.js"));A();n();n();var Qt=T(require("bignumber.js"));A();var ps=e=>{if(isNaN(e)||e==null||String(e).includes("Infinity"))return!1;let[o,t]=e.split("."),s=Qt.default.clone();if(t){let _=t.split("").every(l=>!isNaN(parseInt(l)));for(s.set({DECIMAL_PLACES:_?t.length:Qt.default.config().DECIMAL_PLACES});t.charAt(t.length-1)===xe;)t=t.slice(0,-1)}let c=t?[o,t].join("."):o,m=s(c);return m.toString(10)===c&&m.comparedTo(0)>=0};n();A();n();var ms={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function er({minGasLimit:e=String(ko),gasLimit:o,gasPrice:t,data:s,gasPerDataByte:c,gasPriceModifier:m,defaultGasPrice:p=String(Lo),chainId:_}){let l=s||"",h=Fn(o)?o:e,b=go({data:l})?ht:0,S=new ds.default(h).plus(b).toNumber(),I=ps(t)?t:p,E=new te.Transaction({nonce:0,value:te.TokenPayment.egldFromAmount("0"),receiver:new te.Address(ms.to),sender:new te.Address(ms.to),gasPrice:parseInt(I),gasLimit:S,data:new te.TransactionPayload(l.trim()),chainID:_,version:new te.TransactionVersion(1)});try{return E.computeFee({GasPerDataByte:parseInt(c),MinGasLimit:parseInt(e),GasPriceModifier:parseFloat(m),ChainID:_}).toString(10)}catch(L){return console.error(L),xe}}n();var ls=({amount:e,usd:o,decimals:t=2,addEqualSign:s})=>{let c=(parseFloat(e)*o).toFixed(t),m=parseFloat(c).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),p=parseFloat(e)>0?"\u2248":"=";return`${s?`${p} `:""}$${m}`};n();n();n();n();A();n();A();var _s=({feeLimit:e,egldPriceInUsd:o,hideEqualSign:t})=>{let s=we({input:e,decimals:ee,digits:We,showLastNonZeroDecimal:!0}),c=ls({amount:s,usd:o,decimals:We});return t?c:`\u2248 ${c}`};n();A();n();V();var p_=["reDelegateRewards","claimRewards","unBond"],m_=["wrapEgld","unwrapEgld"],d_=["unStake"],l_=["unDelegate"];n();n();n();A();n();var f_=T(require("bignumber.js"));n();n();V();n();var T_=T(require("bignumber.js"));n();n();n();n();var S_=T(require("bignumber.js"));O();n();n();n();n();C();n();var I_=require("@multiversx/sdk-web-wallet-provider");A();n();var w_=T(require("qs"));n();G();ro();n();ro();var ck={search:Ge()?window.location.search:"",removeParams:[]};n();n();n();W();n();V();n();n();W();n();var A_=T(require("linkifyjs"));n();A();n();var k_=T(require("bignumber.js"));n();O();n();n();C();n();C();n();n();n();V();n();V();n();var L_=T(require("bignumber.js"));A();V();n();V();n();var hs=require("react");O();n();n();V();n();n();var P_=require("@multiversx/sdk-core/out"),E_=T(require("bignumber.js"));V();n();O();n();n();O();var QL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Ts=require("react");O();W();n();var N_=require("react");V();var s1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];lo();n();var Bn=e=>e.transactions,fo=x(Bn,e=>e.signedTransactions),D_=x(Bn,e=>e.signTransactionsError),xs=x(Bn,e=>e.signTransactionsCancelMessage),Un=e=>o=>Object.entries(o).reduce((t,[s,c])=>(e(c.status)&&(t[s]=c),t),{}),ys=x(fo,Un(co)),Ss=x(fo,Un(po)),bs=x(fo,Un(mo)),R_=x(fo,Un(Ft)),ws=x(Bn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Rn(t)))||[]})}),M_=x(fo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var vs=require("react");n();P();n();n();n();n();n();n();n();n();var F_=require("@multiversx/sdk-extension-provider"),B_=require("@multiversx/sdk-hw-provider"),U_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),W_=require("@multiversx/sdk-opera-provider"),G_=require("@multiversx/sdk-passkey-provider/out"),H_=require("@multiversx/sdk-web-wallet-provider");A();Le();n();var ho=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Is=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");C();n();var re=e=>`Unable to perform ${e}, Provider not initialized`,Wn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(re("getAccount"))}setAccount(o){throw new Error(re(`setAccount: ${o}`))}login(o){throw new Error(re(`login with options: ${o}`))}logout(o){throw new Error(re(`logout with options: ${o}`))}getAddress(){throw new Error(re("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(re(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(re(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(re(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(re(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(re(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(re(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},As=new Wn;P();n();n();n();n();n();var ks=require("@lifeomic/axios-fetch"),tr=T(require("axios")),rr=(0,ks.buildAxiosFetch)(tr.default),ar=(e,o)=>f(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let s=e.clone().json(),[c]=yield Promise.all([s]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function $_(e,o,t){return f(this,null,function*(){try{let s=yield rr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return ar(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}function V_(e,o){return f(this,null,function*(){try{let t=yield rr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return ar(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function q_(e,o,t){return f(this,null,function*(){try{let s=yield rr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return ar(s,t)}catch(s){throw console.error("Fetch Error:",s),s}})}var To=tr.default.create();To.get=V_;To.post=$_;To.patch=q_;n();var Uo=e=>{let o=e!=null?e:jt(v.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var j_=T(require("axios"));n();var z_=T(require("swr"));n();C();n();n();n();W();n();lo();n();n();n();var K_=T(require("axios"));n();var Y_=T(require("axios"));to();n();A();n();var J_=T(require("axios"));n();var Q_=T(require("axios"));n();n();var eu=T(require("axios"));n();var ou=T(require("axios"));n();n();P();C();n();n();n();n();W();n();R();O();n();P();n();var Cs=require("@multiversx/sdk-core");O();G();n();lo();n();P();C();n();P();O();n();n();n();O();n();en();n();n();n();n();var au=T(require("swr"));n();n();n();n();var Ns=require("react");n();n();var iu=require("react"),su=require("@multiversx/sdk-web-wallet-provider"),cu=require("@multiversx/sdk-web-wallet-provider"),pu=T(require("qs"));A();P();C();_t();W();var jD=F();n();var rc=require("react"),dr=require("@multiversx/sdk-core");n();A();Pt();n();n();n();n();n();n();n();n();n();n();to();n();var _u=T(require("axios"));n();var gu=T(require("axios"));n();to();n();to();n();n();n();n();var hu=require("@multiversx/sdk-opera-provider");n();var Tu=require("@multiversx/sdk-extension-provider");n();Le();n();n();n();n();var $u=T(ec());n();var zu=require("@multiversx/sdk-native-auth-client");n();var tc=T(require("axios"));n();n();n();function oc(e){return f(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var nc=(e,o,t,s=0)=>f(void 0,null,function*(){try{return yield e(...t)}catch(c){return s<o.retries?((o==null?void 0:o.delay)!=null&&(yield oc(o.delay)),yield nc(e,o,t,s+1)):null}}),pr=(e,o={retries:5,delay:500})=>(...t)=>f(void 0,null,function*(){return yield nc(e,o,t)});var Vu=4;var _2=pr((e,o,t)=>f(void 0,null,function*(){if(t){let m=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:m}}let{data:s}=yield tc.default.get(`${e}/${Jt}?from=${Vu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=s;return c}));n();n();tn();n();n();W();var w2={origin:F().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Xu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Yu=require("@multiversx/sdk-passkey-provider/out");A();W();n();n();n();var ng=require("react"),tg=require("@multiversx/sdk-hw-provider");n();R();O();n();Do();io();ao();G();n();n();var zp=require("react"),Kp=require("@multiversx/sdk-core"),Vh=require("@multiversx/sdk-extension-provider"),qh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),jh=require("@multiversx/sdk-passkey-provider/out"),zh=T($p());A();n();n();n();n();n();n();n();n();n();n();var jo=T(require("react"));var p5=(0,jo.createContext)({}),m5=v.getState();n();var qp=T(require("react"));n();var gr=T(require("react")),Lh=T(require("axios"));n();n();Le();n();n();var Dh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Rh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");R();n();R();P();O();n();n();P();n();G();n();P();O();n();n();var Ph=require("@multiversx/sdk-core"),Eh=T(require("bignumber.js"));A();n();var Ch=T(require("bignumber.js"));A();P();C();G();W();n();var jp=require("react"),Bh=require("@multiversx/sdk-extension-provider"),Uh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Wh=require("@multiversx/sdk-passkey-provider/out");Le();P();n();P();O();Do();W();n();me();P();n();n();var Xh=require("react");n();n();C();lo();n();var Xp=require("react");n();n();var Jh=require("react"),Zh=require("@multiversx/sdk-extension-provider");me();R();C();n();ye();G();G();n();n();Le();O();n();var Yh=require("react"),Yp=require("@multiversx/sdk-core");P();n();var Qh=require("react"),eT=require("@multiversx/sdk-opera-provider");me();R();C();ye();G();W();n();var oT=require("react");gt();me();Le();R();P();C();ye();W();n();var iT=require("react");me();P();n();n();St();n();n();var nT=T(require("platform"));ro();n();n();n();n();n();function Jp(){return zt(v.getState())}n();n();Ao();C();n();n();var tT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Do();io();n();n();n();P();n();n();var rT=T(require("axios"));G();n();n();var aT=T(qn());Ao();var Zp,Qp,em,ZU=(em=(Qp=(Zp=Ue.safeWindow)==null?void 0:Zp.location)==null?void 0:Qp.origin)==null?void 0:em.includes("localhost");n();W();n();n();var fT=require("react");A();n();n();A();n();n();n();var sT=T(require("bignumber.js"));n();n();n();var De=T(require("react")),sm=require("react"),cm=require("react"),yr=T(require("classnames")),pm=require("react-dom");A();n();var nm=T(require("react")),tm=T(require("classnames"));var pT=({className:e,children:o,styles:t})=>nm.default.createElement("div",{className:(0,tm.default)(t==null?void 0:t.dappModalBody,e)},o),fr=q(pT,{ssrStyles:()=>Promise.resolve().then(()=>(Ie(),ve)),clientStyles:()=>(Ie(),z(ve)).default});n();var hr=T(require("react")),rm=T(require("classnames"));var mT=({visible:e,customFooter:o,className:t,footerText:s,styles:c})=>e?hr.default.createElement("div",{className:(0,rm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:hr.default.createElement("div",null,s)):null,Tr=q(mT,{ssrStyles:()=>Promise.resolve().then(()=>(Ie(),ve)),clientStyles:()=>(Ie(),z(ve)).default});n();var vo=T(require("react")),am=require("@fortawesome/free-solid-svg-icons"),im=require("@fortawesome/react-fontawesome"),Ko=T(require("classnames"));var dT=({visible:e,headerText:o,customHeader:t,className:s,closeButtonClassName:c,headerTextClassName:m,onHide:p,globalStyles:_,styles:l})=>e?t?vo.default.createElement("div",{className:(0,Ko.default)(l==null?void 0:l.dappModalHeader,s)},t):vo.default.createElement("div",{className:(0,Ko.default)(l==null?void 0:l.dappModalHeader,s)},vo.default.createElement("div",{className:(0,Ko.default)(l==null?void 0:l.dappModalHeaderText,m)},o),vo.default.createElement("button",{onClick:p,className:(0,Ko.default)(l==null?void 0:l.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,c)},vo.default.createElement(im.FontAwesomeIcon,{size:"lg",icon:am.faTimes}))):null,xr=q(dT,{ssrStyles:()=>Promise.resolve().then(()=>(Ie(),ve)),clientStyles:()=>(Ie(),z(ve)).default});var _T={showHeader:!0,showFooter:!1,headerText:"",footerText:""},uT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:s,config:c=_T,id:m="dapp-modal",onHide:p,parentElement:_,visible:l,styles:h})=>{let[b,S]=(0,sm.useState)(!1);if((0,cm.useEffect)(()=>{S(!0)},[]),!l)return null;let{showHeader:I,showFooter:E,headerText:L,footerText:ae,modalDialogClassName:ke="dapp-modal-dialog",modalContentClassName:J="dapp-modal-dialog-content",modalHeaderClassName:ne="dapp-modal-dialog-header",modalHeaderTextClassName:ge="dapp-modal-dialog-header-text",modalCloseButtonClassName:N="dapp-modal-dialog-close-button",modalBodyClassName:Ye="dapp-modal-dialog-content-body",modalFooterClassName:Je="dapp-modal-dialog-footer",customModalHeader:Jn,customModalFooter:Zn}=c,bm=wm=>{wm.key==="Escape"&&s&&(p==null||p())};return De.default.createElement(De.default.Fragment,null,b&&(0,pm.createPortal)(De.default.createElement("div",{id:m,role:"dialog","aria-modal":"true",className:(0,yr.default)(ke,h==null?void 0:h.dappModal,t),"data-testid":e,onKeyDown:bm},De.default.createElement("div",{className:(0,yr.default)(h==null?void 0:h.dappModalContent,J)},De.default.createElement(xr,{visible:I,headerText:L,customHeader:Jn,className:ne,headerTextClassName:ge,closeButtonClassName:N,onHide:p}),De.default.createElement(fr,{className:Ye},o),De.default.createElement(Tr,{visible:E,customFooter:Zn,footerText:ae,className:Je}))),_!=null?_:document==null?void 0:document.body))},gT=q(uT,{ssrStyles:()=>Promise.resolve().then(()=>(Ie(),ve)),clientStyles:()=>(Ie(),z(ve)).default});n();n();var mm=require("react");n();n();var dm=require("react"),TT=require("@multiversx/sdk-hw-provider");me();R();P();C();ye();n();var hT=require("react");n();n();var Sr=require("react");R();P();C();ye();W();n();var yT=require("react"),ST=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");me();R();C();ye();G();G();n();var bT=require("react"),wT=require("@multiversx/sdk-passkey-provider/out");me();R();C();ye();G();G();n();n();var lm=require("react");n();var AT=require("react");n();var br=require("react"),IT=require("socket.io-client");P();n();n();n();var kT=require("react");O();n();n();n();var gm=T(require("swr"));n();n();n();n();var _m=T(require("axios"));function um(e=Fo){let t=`${Uo()}/${e}`;return _m.default.get(t)}n();function fm(){let e=s=>um(s).then(c=>c.data),{data:o,error:t}=(0,gm.default)(Fo,e);return{price:o==null?void 0:o.price,error:t}}n();n();var Xe=T(require("react")),Ir=T(require("classnames"));n();var Xn=T(require("react")),LT=e=>Xn.createElement("svg",u({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),Xn.createElement("g",null,Xn.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),hm=LT;var ET=({amount:e,displayAsUsd:o,addEqualSign:t,egldIcon:s,className:c,showTokenLabel:m=!0,styles:p,tokenLabel:_,showTokenLabelSup:l,"data-testid":h})=>{let[b,S]=e.split("."),I=o&&b.indexOf("$")<0?`$${b}`:b,L=(()=>{let J={processedMainBalance:I};return t&&o&&(J.approximation="\u2248"),S&&(J.decimalBalance=`.${S}`),!o&&m&&(J.tokenLabel=` ${_}`),J})(),ke=[L.approximation,L.processedMainBalance,L.decimalBalance,L.tokenLabel].reduce((J,ne)=>ne?J.concat(ne):J,"");return Xe.default.createElement("div",{className:(0,Ir.default)(p==null?void 0:p.balance,c),"data-testid":h,"data-value":ke},s&&!o&&Xe.default.createElement(hm,{className:p==null?void 0:p.balanceSymbol}),L.approximation&&Xe.default.createElement("span",{className:p==null?void 0:p.balanceApproximation},L.approximation),L.processedMainBalance&&Xe.default.createElement("span",{className:p==null?void 0:p.balanceMain},I),L.decimalBalance&&Xe.default.createElement("span",{className:p==null?void 0:p.balanceDecimals},L.decimalBalance),L.tokenLabel&&Xe.default.createElement("sup",{className:(0,Ir.default)(p==null?void 0:p.balanceSuffix,{[p==null?void 0:p.balanceSuffixSup]:l})},L.tokenLabel))},Ar=q(ET,{ssrStyles:()=>Promise.resolve().then(()=>(vr(),wr)),clientStyles:()=>(vr(),z(wr)).default});n();n();var Yn=T(require("react")),Pr=T(require("classnames"));var NT=({className:e,styles:o})=>Yn.default.createElement("div",{className:(0,Pr.default)(o==null?void 0:o.loadingDots,e)},Array.from({length:3}).map((t,s)=>Yn.default.createElement("span",{key:`loading-dot-${s}`,className:(0,Pr.default)(o==null?void 0:o.loadingDot,o==null?void 0:o[`loadingDot-${s}`])})),Yn.default.createElement("span",null,"Loading...")),ym=q(NT,{ssrStyles:()=>Promise.resolve().then(()=>(Lr(),kr)),clientStyles:()=>(Lr(),z(kr)).default});var RT=({transaction:e,styles:o})=>{let{price:t}=fm(),s=Jp(),c=er({gasPerDataByte:String(on),gasPriceModifier:String(ft),gasLimit:e.getGasLimit().valueOf().toString(),gasPrice:e.getGasPrice().valueOf().toString(),data:e.getData().toString(),chainId:e.getChainID().valueOf()}),m=we({input:c,showLastNonZeroDecimal:!0}),p=t?_s({feeLimit:c,egldPriceInUsd:t,hideEqualSign:!0}):null;return Ae.default.createElement("div",{className:o==null?void 0:o.confirmFee},Ae.default.createElement("div",{className:o==null?void 0:o.confirmFeeLabel},"Transaction Fee"),Ae.default.createElement("div",{className:o==null?void 0:o.confirmFeeData},Ae.default.createElement(Ar,{className:o==null?void 0:o.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:s,amount:m}),p?Ae.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},"(",Ae.default.createElement(Ar,{amount:p,displayAsUsd:!0,addEqualSign:!0,className:o==null?void 0:o.confirmFeeDataPrice}),")"):Ae.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},Ae.default.createElement(ym,null))))},MT=q(RT,{ssrStyles:()=>Promise.resolve().then(()=>(Cr(),Er)),clientStyles:()=>(Cr(),z(Er)).default});0&&(module.exports={ConfirmFee});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=ConfirmFee.js.map
