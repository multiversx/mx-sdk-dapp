"use strict";var ud=Object.create;var Eo=Object.defineProperty,fd=Object.defineProperties,gd=Object.getOwnPropertyDescriptor,hd=Object.getOwnPropertyDescriptors,Td=Object.getOwnPropertyNames,nn=Object.getOwnPropertySymbols,xd=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty,Zr=Object.prototype.propertyIsEnumerable;var Yr=(e,o,t)=>o in e?Eo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))st.call(o,t)&&Yr(e,t,o[t]);if(nn)for(var t of nn(o))Zr.call(o,t)&&Yr(e,t,o[t]);return e},v=(e,o)=>fd(e,hd(o));var we=(e,o)=>{var t={};for(var c in e)st.call(e,c)&&o.indexOf(c)<0&&(t[c]=e[c]);if(e!=null&&nn)for(var c of nn(e))o.indexOf(c)<0&&Zr.call(e,c)&&(t[c]=e[c]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),j=(e,o)=>{for(var t in o)Eo(e,t,{get:o[t],enumerable:!0})},Jr=(e,o,t,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of Td(o))!st.call(e,s)&&s!==t&&Eo(e,s,{get:()=>o[s],enumerable:!(c=gd(o,s))||c.enumerable});return e};var g=(e,o,t)=>(t=e!=null?ud(xd(e)):{},Jr(o||!e||!e.__esModule?Eo(t,"default",{value:e,enumerable:!0}):t,e)),V=e=>Jr(Eo({},"__esModule",{value:!0}),e);var h=(e,o,t)=>new Promise((c,s)=>{var p=d=>{try{_(t.next(d))}catch(f){s(f)}},m=d=>{try{_(t.throw(d))}catch(f){s(f)}},_=d=>d.done?c(d.value):Promise.resolve(d.value).then(p,m);_((t=t.apply(e,o)).next())});var oa=b(tn=>{"use strict";n();tn.byteLength=Sd;tn.toByteArray=wd;tn.fromByteArray=Id;var me=[],oe=[],yd=typeof Uint8Array!="undefined"?Uint8Array:Array,pt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ue=0,Qr=pt.length;Ue<Qr;++Ue)me[Ue]=pt[Ue],oe[pt.charCodeAt(Ue)]=Ue;var Ue,Qr;oe["-".charCodeAt(0)]=62;oe["_".charCodeAt(0)]=63;function ea(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var c=t===o?0:4-t%4;return[t,c]}function Sd(e){var o=ea(e),t=o[0],c=o[1];return(t+c)*3/4-c}function bd(e,o,t){return(o+t)*3/4-t}function wd(e){var o,t=ea(e),c=t[0],s=t[1],p=new yd(bd(e,c,s)),m=0,_=s>0?c-4:c,d;for(d=0;d<_;d+=4)o=oe[e.charCodeAt(d)]<<18|oe[e.charCodeAt(d+1)]<<12|oe[e.charCodeAt(d+2)]<<6|oe[e.charCodeAt(d+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return s===2&&(o=oe[e.charCodeAt(d)]<<2|oe[e.charCodeAt(d+1)]>>4,p[m++]=o&255),s===1&&(o=oe[e.charCodeAt(d)]<<10|oe[e.charCodeAt(d+1)]<<4|oe[e.charCodeAt(d+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function vd(e){return me[e>>18&63]+me[e>>12&63]+me[e>>6&63]+me[e&63]}function Ad(e,o,t){for(var c,s=[],p=o;p<t;p+=3)c=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),s.push(vd(c));return s.join("")}function Id(e){for(var o,t=e.length,c=t%3,s=[],p=16383,m=0,_=t-c;m<_;m+=p)s.push(Ad(e,m,m+p>_?_:m+p));return c===1?(o=e[t-1],s.push(me[o>>2]+me[o<<4&63]+"==")):c===2&&(o=(e[t-2]<<8)+e[t-1],s.push(me[o>>10]+me[o>>4&63]+me[o<<2&63]+"=")),s.join("")}});var na=b(mt=>{n();mt.read=function(e,o,t,c,s){var p,m,_=s*8-c-1,d=(1<<_)-1,f=d>>1,x=-7,y=t?s-1:0,w=t?-1:1,A=e[o+y];for(y+=w,p=A&(1<<-x)-1,A>>=-x,x+=_;x>0;p=p*256+e[o+y],y+=w,x-=8);for(m=p&(1<<-x)-1,p>>=-x,x+=c;x>0;m=m*256+e[o+y],y+=w,x-=8);if(p===0)p=1-f;else{if(p===d)return m?NaN:(A?-1:1)*(1/0);m=m+Math.pow(2,c),p=p-f}return(A?-1:1)*m*Math.pow(2,p-c)};mt.write=function(e,o,t,c,s,p){var m,_,d,f=p*8-s-1,x=(1<<f)-1,y=x>>1,w=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=c?0:p-1,L=c?1:-1,q=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(d=Math.pow(2,-m))<1&&(m--,d*=2),m+y>=1?o+=w/d:o+=w*Math.pow(2,1-y),o*d>=2&&(m++,d/=2),m+y>=x?(_=0,m=x):m+y>=1?(_=(o*d-1)*Math.pow(2,s),m=m+y):(_=o*Math.pow(2,y-1)*Math.pow(2,s),m=0));s>=8;e[t+A]=_&255,A+=L,_/=256,s-=8);for(m=m<<s|_,f+=s;f>0;e[t+A]=m&255,A+=L,m/=256,f-=8);e[t+A-L]|=q*128}});var fa=b(ao=>{"use strict";n();var dt=oa(),ro=na(),ta=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ao.Buffer=l;ao.SlowBuffer=Pd;ao.INSPECT_MAX_BYTES=50;var rn=2147483647;ao.kMaxLength=rn;l.TYPED_ARRAY_SUPPORT=kd();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function kd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function ve(e){if(e>rn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ft(e)}return ia(e,o,t)}l.poolSize=8192;function ia(e,o,t){if(typeof e=="string")return Nd(e,o);if(ArrayBuffer.isView(e))return Ed(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(de(e,ArrayBuffer)||e&&de(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(de(e,SharedArrayBuffer)||e&&de(e.buffer,SharedArrayBuffer)))return _t(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=e.valueOf&&e.valueOf();if(c!=null&&c!==e)return l.from(c,o,t);var s=Cd(e);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return ia(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function ca(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Ld(e,o,t){return ca(e),e<=0?ve(e):o!==void 0?typeof t=="string"?ve(e).fill(o,t):ve(e).fill(o):ve(e)}l.alloc=function(e,o,t){return Ld(e,o,t)};function ft(e){return ca(e),ve(e<0?0:gt(e)|0)}l.allocUnsafe=function(e){return ft(e)};l.allocUnsafeSlow=function(e){return ft(e)};function Nd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=sa(e,o)|0,c=ve(t),s=c.write(e,o);return s!==t&&(c=c.slice(0,s)),c}function lt(e){for(var o=e.length<0?0:gt(e.length)|0,t=ve(o),c=0;c<o;c+=1)t[c]=e[c]&255;return t}function Ed(e){if(de(e,Uint8Array)){var o=new Uint8Array(e);return _t(o.buffer,o.byteOffset,o.byteLength)}return lt(e)}function _t(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var c;return o===void 0&&t===void 0?c=new Uint8Array(e):t===void 0?c=new Uint8Array(e,o):c=new Uint8Array(e,o,t),Object.setPrototypeOf(c,l.prototype),c}function Cd(e){if(l.isBuffer(e)){var o=gt(e.length)|0,t=ve(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||ht(e.length)?ve(0):lt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return lt(e.data)}function gt(e){if(e>=rn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+rn.toString(16)+" bytes");return e|0}function Pd(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(de(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),de(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var c=o.length,s=t.length,p=0,m=Math.min(c,s);p<m;++p)if(o[p]!==t[p]){c=o[p],s=t[p];break}return c<s?-1:s<c?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var c;if(t===void 0)for(t=0,c=0;c<o.length;++c)t+=o[c].length;var s=l.allocUnsafe(t),p=0;for(c=0;c<o.length;++c){var m=o[c];if(de(m,Uint8Array))p+m.length>s.length?l.from(m).copy(s,p):Uint8Array.prototype.set.call(s,m,p);else if(l.isBuffer(m))m.copy(s,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return s};function sa(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||de(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&t===0)return 0;for(var s=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ut(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ua(e).length;default:if(s)return c?-1:ut(e).length;o=(""+o).toLowerCase(),s=!0}}l.byteLength=sa;function Dd(e,o,t){var c=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Hd(this,o,t);case"utf8":case"utf-8":return ma(this,o,t);case"ascii":return Gd(this,o,t);case"latin1":case"binary":return Vd(this,o,t);case"base64":return Wd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $d(this,o,t);default:if(c)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),c=!0}}l.prototype._isBuffer=!0;function Ge(e,o,t){var c=e[o];e[o]=e[t],e[t]=c}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ge(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ge(this,t,t+3),Ge(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ge(this,t,t+7),Ge(this,t+1,t+6),Ge(this,t+2,t+5),Ge(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ma(this,0,o):Dd.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=ao.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};ta&&(l.prototype[ta]=l.prototype.inspect);l.prototype.compare=function(o,t,c,s,p){if(de(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),c===void 0&&(c=o?o.length:0),s===void 0&&(s=0),p===void 0&&(p=this.length),t<0||c>o.length||s<0||p>this.length)throw new RangeError("out of range index");if(s>=p&&t>=c)return 0;if(s>=p)return-1;if(t>=c)return 1;if(t>>>=0,c>>>=0,s>>>=0,p>>>=0,this===o)return 0;for(var m=p-s,_=c-t,d=Math.min(m,_),f=this.slice(s,p),x=o.slice(t,c),y=0;y<d;++y)if(f[y]!==x[y]){m=f[y],_=x[y];break}return m<_?-1:_<m?1:0};function pa(e,o,t,c,s){if(e.length===0)return-1;if(typeof t=="string"?(c=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,ht(t)&&(t=s?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(s)return-1;t=e.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,c)),l.isBuffer(o))return o.length===0?-1:ra(e,o,t,c,s);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):ra(e,[o],t,c,s);throw new TypeError("val must be string, number or Buffer")}function ra(e,o,t,c,s){var p=1,m=e.length,_=o.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,_/=2,t/=2}function d(A,L){return p===1?A[L]:A.readUInt16BE(L*p)}var f;if(s){var x=-1;for(f=t;f<m;f++)if(d(e,f)===d(o,x===-1?0:f-x)){if(x===-1&&(x=f),f-x+1===_)return x*p}else x!==-1&&(f-=f-x),x=-1}else for(t+_>m&&(t=m-_),f=t;f>=0;f--){for(var y=!0,w=0;w<_;w++)if(d(e,f+w)!==d(o,w)){y=!1;break}if(y)return f}return-1}l.prototype.includes=function(o,t,c){return this.indexOf(o,t,c)!==-1};l.prototype.indexOf=function(o,t,c){return pa(this,o,t,c,!0)};l.prototype.lastIndexOf=function(o,t,c){return pa(this,o,t,c,!1)};function Rd(e,o,t,c){t=Number(t)||0;var s=e.length-t;c?(c=Number(c),c>s&&(c=s)):c=s;var p=o.length;c>p/2&&(c=p/2);for(var m=0;m<c;++m){var _=parseInt(o.substr(m*2,2),16);if(ht(_))return m;e[t+m]=_}return m}function Md(e,o,t,c){return an(ut(o,e.length-t),e,t,c)}function Od(e,o,t,c){return an(zd(o),e,t,c)}function Fd(e,o,t,c){return an(ua(o),e,t,c)}function Bd(e,o,t,c){return an(Kd(o,e.length-t),e,t,c)}l.prototype.write=function(o,t,c,s){if(t===void 0)s="utf8",c=this.length,t=0;else if(c===void 0&&typeof t=="string")s=t,c=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(c)?(c=c>>>0,s===void 0&&(s="utf8")):(s=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((c===void 0||c>p)&&(c=p),o.length>0&&(c<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var m=!1;;)switch(s){case"hex":return Rd(this,o,t,c);case"utf8":case"utf-8":return Md(this,o,t,c);case"ascii":case"latin1":case"binary":return Od(this,o,t,c);case"base64":return Fd(this,o,t,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bd(this,o,t,c);default:if(m)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Wd(e,o,t){return o===0&&t===e.length?dt.fromByteArray(e):dt.fromByteArray(e.slice(o,t))}function ma(e,o,t){t=Math.min(e.length,t);for(var c=[],s=o;s<t;){var p=e[s],m=null,_=p>239?4:p>223?3:p>191?2:1;if(s+_<=t){var d,f,x,y;switch(_){case 1:p<128&&(m=p);break;case 2:d=e[s+1],(d&192)===128&&(y=(p&31)<<6|d&63,y>127&&(m=y));break;case 3:d=e[s+1],f=e[s+2],(d&192)===128&&(f&192)===128&&(y=(p&15)<<12|(d&63)<<6|f&63,y>2047&&(y<55296||y>57343)&&(m=y));break;case 4:d=e[s+1],f=e[s+2],x=e[s+3],(d&192)===128&&(f&192)===128&&(x&192)===128&&(y=(p&15)<<18|(d&63)<<12|(f&63)<<6|x&63,y>65535&&y<1114112&&(m=y))}}m===null?(m=65533,_=1):m>65535&&(m-=65536,c.push(m>>>10&1023|55296),m=56320|m&1023),c.push(m),s+=_}return Ud(c)}var aa=4096;function Ud(e){var o=e.length;if(o<=aa)return String.fromCharCode.apply(String,e);for(var t="",c=0;c<o;)t+=String.fromCharCode.apply(String,e.slice(c,c+=aa));return t}function Gd(e,o,t){var c="";t=Math.min(e.length,t);for(var s=o;s<t;++s)c+=String.fromCharCode(e[s]&127);return c}function Vd(e,o,t){var c="";t=Math.min(e.length,t);for(var s=o;s<t;++s)c+=String.fromCharCode(e[s]);return c}function Hd(e,o,t){var c=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>c)&&(t=c);for(var s="",p=o;p<t;++p)s+=Xd[e[p]];return s}function $d(e,o,t){for(var c=e.slice(o,t),s="",p=0;p<c.length-1;p+=2)s+=String.fromCharCode(c[p]+c[p+1]*256);return s}l.prototype.slice=function(o,t){var c=this.length;o=~~o,t=t===void 0?c:~~t,o<0?(o+=c,o<0&&(o=0)):o>c&&(o=c),t<0?(t+=c,t<0&&(t=0)):t>c&&(t=c),t<o&&(t=o);var s=this.subarray(o,t);return Object.setPrototypeOf(s,l.prototype),s};function W(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,c){o=o>>>0,t=t>>>0,c||W(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return s};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,c){o=o>>>0,t=t>>>0,c||W(o,t,this.length);for(var s=this[o+--t],p=1;t>0&&(p*=256);)s+=this[o+--t]*p;return s};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,c){o=o>>>0,t=t>>>0,c||W(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};l.prototype.readIntBE=function(o,t,c){o=o>>>0,t=t>>>0,c||W(o,t,this.length);for(var s=t,p=1,m=this[o+--s];s>0&&(p*=256);)m+=this[o+--s]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||W(o,2,this.length);var c=this[o]|this[o+1]<<8;return c&32768?c|4294901760:c};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||W(o,2,this.length);var c=this[o+1]|this[o]<<8;return c&32768?c|4294901760:c};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||W(o,4,this.length),ro.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||W(o,4,this.length),ro.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||W(o,8,this.length),ro.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||W(o,8,this.length),ro.read(this,o,!1,52,8)};function z(e,o,t,c,s,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>s||o<p)throw new RangeError('"value" argument is out of bounds');if(t+c>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,c,s){if(o=+o,t=t>>>0,c=c>>>0,!s){var p=Math.pow(2,8*c)-1;z(this,o,t,c,p,0)}var m=1,_=0;for(this[t]=o&255;++_<c&&(m*=256);)this[t+_]=o/m&255;return t+c};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,c,s){if(o=+o,t=t>>>0,c=c>>>0,!s){var p=Math.pow(2,8*c)-1;z(this,o,t,c,p,0)}var m=c-1,_=1;for(this[t+m]=o&255;--m>=0&&(_*=256);)this[t+m]=o/_&255;return t+c};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,c,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*c-1);z(this,o,t,c,p-1,-p)}var m=0,_=1,d=0;for(this[t]=o&255;++m<c&&(_*=256);)o<0&&d===0&&this[t+m-1]!==0&&(d=1),this[t+m]=(o/_>>0)-d&255;return t+c};l.prototype.writeIntBE=function(o,t,c,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*c-1);z(this,o,t,c,p-1,-p)}var m=c-1,_=1,d=0;for(this[t+m]=o&255;--m>=0&&(_*=256);)o<0&&d===0&&this[t+m+1]!==0&&(d=1),this[t+m]=(o/_>>0)-d&255;return t+c};l.prototype.writeInt8=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,c){return o=+o,t=t>>>0,c||z(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function da(e,o,t,c,s,p){if(t+c>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function la(e,o,t,c,s){return o=+o,t=t>>>0,s||da(e,o,t,4,34028234663852886e22,-34028234663852886e22),ro.write(e,o,t,c,23,4),t+4}l.prototype.writeFloatLE=function(o,t,c){return la(this,o,t,!0,c)};l.prototype.writeFloatBE=function(o,t,c){return la(this,o,t,!1,c)};function _a(e,o,t,c,s){return o=+o,t=t>>>0,s||da(e,o,t,8,17976931348623157e292,-17976931348623157e292),ro.write(e,o,t,c,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,c){return _a(this,o,t,!0,c)};l.prototype.writeDoubleBE=function(o,t,c){return _a(this,o,t,!1,c)};l.prototype.copy=function(o,t,c,s){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(c||(c=0),!s&&s!==0&&(s=this.length),t>=o.length&&(t=o.length),t||(t=0),s>0&&s<c&&(s=c),s===c||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),o.length-t<s-c&&(s=o.length-t+c);var p=s-c;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,c,s):Uint8Array.prototype.set.call(o,this.subarray(c,s),t),p};l.prototype.fill=function(o,t,c,s){if(typeof o=="string"){if(typeof t=="string"?(s=t,t=0,c=this.length):typeof c=="string"&&(s=c,c=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!l.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(o.length===1){var p=o.charCodeAt(0);(s==="utf8"&&p<128||s==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<c)throw new RangeError("Out of range index");if(c<=t)return this;t=t>>>0,c=c===void 0?this.length:c>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<c;++m)this[m]=o;else{var _=l.isBuffer(o)?o:l.from(o,s),d=_.length;if(d===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<c-t;++m)this[m+t]=_[m%d]}return this};var jd=/[^+/0-9A-Za-z-_]/g;function qd(e){if(e=e.split("=")[0],e=e.trim().replace(jd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ut(e,o){o=o||1/0;for(var t,c=e.length,s=null,p=[],m=0;m<c;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!s){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===c){(o-=3)>-1&&p.push(239,191,189);continue}s=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(o-=3)>-1&&p.push(239,191,189);if(s=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function zd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Kd(e,o){for(var t,c,s,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),c=t>>8,s=t%256,p.push(s),p.push(c);return p}function ua(e){return dt.toByteArray(qd(e))}function an(e,o,t,c){for(var s=0;s<c&&!(s+t>=o.length||s>=e.length);++s)o[s+t]=e[s];return s}function de(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function ht(e){return e!==e}var Xd=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var c=t*16,s=0;s<16;++s)o[c+s]=e[t]+e[s];return o}()});var ya=b((Ox,xa)=>{n();var O=xa.exports={},le,_e;function Tt(){throw new Error("setTimeout has not been defined")}function xt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?le=setTimeout:le=Tt}catch(e){le=Tt}try{typeof clearTimeout=="function"?_e=clearTimeout:_e=xt}catch(e){_e=xt}})();function ga(e){if(le===setTimeout)return setTimeout(e,0);if((le===Tt||!le)&&setTimeout)return le=setTimeout,setTimeout(e,0);try{return le(e,0)}catch(o){try{return le.call(null,e,0)}catch(t){return le.call(this,e,0)}}}function Yd(e){if(_e===clearTimeout)return clearTimeout(e);if((_e===xt||!_e)&&clearTimeout)return _e=clearTimeout,clearTimeout(e);try{return _e(e)}catch(o){try{return _e.call(null,e)}catch(t){return _e.call(this,e)}}}var Ae=[],io=!1,Ve,cn=-1;function Zd(){!io||!Ve||(io=!1,Ve.length?Ae=Ve.concat(Ae):cn=-1,Ae.length&&ha())}function ha(){if(!io){var e=ga(Zd);io=!0;for(var o=Ae.length;o;){for(Ve=Ae,Ae=[];++cn<o;)Ve&&Ve[cn].run();cn=-1,o=Ae.length}Ve=null,io=!1,Yd(e)}}O.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];Ae.push(new Ta(e,o)),Ae.length===1&&!io&&ga(ha)};function Ta(e,o){this.fun=e,this.array=o}Ta.prototype.run=function(){this.fun.apply(null,this.array)};O.title="browser";O.browser=!0;O.env={};O.argv=[];O.version="";O.versions={};function Ie(){}O.on=Ie;O.addListener=Ie;O.once=Ie;O.off=Ie;O.removeListener=Ie;O.removeAllListeners=Ie;O.emit=Ie;O.prependListener=Ie;O.prependOnceListener=Ie;O.listeners=function(e){return[]};O.binding=function(e){throw new Error("process.binding is not supported")};O.cwd=function(){return"/"};O.chdir=function(e){throw new Error("process.chdir is not supported")};O.umask=function(){return 0}});var r,i,Jd,a,n=T(()=>{r=g(fa()),i=g(ya()),Jd=function(e){function o(){var c=this||self;return delete e.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Jd});var He,co=T(()=>{"use strict";n();He=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var yt={};j(yt,{css:()=>ba,default:()=>Qd});var ba,Qd,St=T(()=>{"use strict";n();ba=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ba));Qd={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Aa=T(()=>{"use strict";n()});var ue=T(()=>{"use strict";n()});var Ia=T(()=>{"use strict";n()});var wt,ka=T(()=>{"use strict";n();wt=(c=>(c.SetGuardian="SetGuardian",c.GuardAccount="GuardAccount",c.UnGuardAccount="UnGuardAccount",c))(wt||{})});var La=T(()=>{"use strict";n()});var vt=T(()=>{"use strict";n()});var Na=T(()=>{"use strict";n()});var At=T(()=>{"use strict";n()});var Ea=T(()=>{"use strict";n()});var Ca=T(()=>{"use strict";n()});var $e,so,Pe=T(()=>{"use strict";n();$e=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),so=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Pa,ny,Da,ty,C=T(()=>{"use strict";n();Pe();Pa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Pa||{}),ny=u(u({},so.WindowProviderRequestEnums),Pa),Da=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Da||{}),ty=u(u({},so.WindowProviderResponseEnums),Da)});var Ra=T(()=>{"use strict";n()});var Ma=T(()=>{"use strict";n()});var K=T(()=>{"use strict";n()});var Oa=T(()=>{"use strict";n()});var Fa=T(()=>{"use strict";n()});var Ba=T(()=>{"use strict";n()});var F=T(()=>{"use strict";n();At();Ea();Ca();C();Ra();Ma();K();Oa();Fa();Ba()});var po,Wa,yy,Ua,Sy,Ga,by,wy,nl,mo=T(()=>{"use strict";n();F();po={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Wa,egldLabel:yy}=po["devnet"],{chainId:Ua,egldLabel:Sy}=po["testnet"],{chainId:Ga,egldLabel:by}=po["mainnet"],wy={["devnet"]:Wa,["testnet"]:Ua,["mainnet"]:Ga},nl={[Wa]:"devnet",[Ua]:"testnet",[Ga]:"mainnet"}});var sn=T(()=>{"use strict";n()});var fe,Va=T(()=>{"use strict";n();fe=require("@multiversx/sdk-web-wallet-provider")});var ge,lo=T(()=>{"use strict";n();ge=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Ha,$a,It,Ny,Ey,kt=T(()=>{"use strict";n();lo();It=String(($a=(Ha=ge.safeWindow)==null?void 0:Ha.navigator)==null?void 0:$a.userAgent),Ny=/^((?!chrome|android).)*safari/i.test(It),Ey=/firefox/i.test(It)&&/windows/i.test(It)});var pn,mn,re,Po,ja,dn,qa,he,za,I=T(()=>{"use strict";n();Aa();ue();Ia();ka();La();vt();Na();mo();sn();Va();kt();pn=5e4,mn=1e9,re=18,Po=4,ja=1,dn="logout",qa="login",he="0",za="EGLD-000000"});var Do,ln=T(()=>{"use strict";n();Do=()=>Date.now()/1e3});var Ka=T(()=>{"use strict";n()});var Xa=T(()=>{"use strict";n()});var Lt=T(()=>{"use strict";n();ln();Ka();Xa()});var Nt={};j(Nt,{clear:()=>il,getItem:()=>rl,localStorageKeys:()=>De,removeItem:()=>al,setItem:()=>tl});var De,_n,tl,rl,al,il,_o=T(()=>{"use strict";n();Lt();De={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},_n=typeof localStorage!="undefined",tl=({key:e,data:o,expires:t})=>{!_n||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},rl=e=>{if(!_n)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Do()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},al=e=>{!_n||localStorage.removeItem(String(e))},il=()=>{!_n||localStorage.clear()}});var Et={};j(Et,{clear:()=>Qa,getItem:()=>Za,removeItem:()=>Ja,setItem:()=>Ya,storage:()=>cl});var Ya,Za,Ja,Qa,cl,ei=T(()=>{"use strict";n();Ya=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Za=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ja=e=>sessionStorage.removeItem(String(e)),Qa=()=>sessionStorage.clear(),cl={setItem:Ya,getItem:Za,removeItem:Ja,clear:Qa}});var je,uo=T(()=>{"use strict";n();_o();ei();je={session:Et,local:Nt}});var Ct,R,J,M=T(()=>{"use strict";n();Ct=require("@reduxjs/toolkit");I();R=(0,Ct.createAction)(dn),J=(0,Ct.createAction)(qa,e=>({payload:e}))});var Dt,oi,ni,un,Pt,ti,fn,sl,Rt,cS,pl,ml,sS,pS,mS,dl,ll,gn,hn=T(()=>{"use strict";n();Dt=require("@multiversx/sdk-core"),oi=require("@reduxjs/toolkit"),ni=require("redux-persist");I();uo();_o();M();un={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:he},Pt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":un},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},ti=(0,oi.createSlice)({name:"accountInfoSlice",initialState:Pt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Dt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:un},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(je.local.removeItem(De.loginExpiresAt),Pt)),e.addCase(J,(o,t)=>{let{address:c}=t.payload;o.address=c,o.publicKey=new Dt.Address(c).hex()}),e.addCase(ni.REHYDRATE,(o,t)=>{var f;if(!((f=t.payload)!=null&&f.account))return;let{account:c}=t.payload,{address:s,shard:p,accounts:m,publicKey:_}=c;o.address=s,o.shard=p;let d=m&&s in m;o.accounts=d?m:Pt.accounts,o.publicKey=_})}}),{setAccount:fn,setAddress:sl,setAccountNonce:Rt,setAccountShard:cS,setLedgerAccount:pl,updateLedgerAccount:ml,setWalletConnectAccount:sS,setIsAccountLoading:pS,setAccountLoadingError:mS,setWebsocketEvent:dl,setWebsocketBatchEvent:ll}=ti.actions,gn=ti.reducer});function Ro(){return new Date().setHours(new Date().getHours()+24)}function Mo(e){je.local.setItem({key:De.loginExpiresAt,data:e,expires:e})}var Mt=T(()=>{"use strict";n();uo();_o()});var ai,ri,ii,yS,_l,ul,ci,SS,fl,si,bS,wS,vS,Tn,xn=T(()=>{"use strict";n();ai=require("@reduxjs/toolkit");Mt();C();M();ri={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},ii=(0,ai.createSlice)({name:"loginInfoSlice",initialState:ri,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>ri),e.addCase(J,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Mo(Ro())})}}),{setLoginMethod:yS,setWalletConnectLogin:_l,setLedgerLogin:ul,setTokenLogin:ci,setTokenLoginSignature:SS,setWalletLogin:fl,invalidateLoginSession:si,setLogoutRoute:bS,setIsWalletConnectV2Initialized:wS,setWebviewLogin:vS}=ii.actions,Tn=ii.reducer});var mi,pi,di,LS,gl,NS,hl,yn,Sn=T(()=>{"use strict";n();mi=require("@reduxjs/toolkit");M();pi={},di=(0,mi.createSlice)({name:"modalsSlice",initialState:pi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>pi)}}),{setTxSubmittedModal:LS,setNotificationModal:gl,clearTxSubmittedModal:NS,clearNotificationModal:hl}=di.actions,yn=di.reducer});var B,G=T(()=>{"use strict";n();co();B=()=>{if(!He())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:c,href:s,search:p}}=window;return{pathname:o,hash:t,origin:c,href:s,search:p}}});var li=T(()=>{"use strict";n();G()});var _i=T(()=>{"use strict";n();H()});var ui=T(()=>{"use strict";n();lo()});var H=T(()=>{"use strict";n();li();_i();G();ui()});var Oo=T(()=>{"use strict";n();H()});var gi=T(()=>{"use strict";n();Oo()});function hi(e){return e[Math.floor(Math.random()*e.length)]}var Ti=T(()=>{"use strict";n()});var Ot=T(()=>{"use strict";n();vt()});var ke=T(()=>{"use strict";n();gi();Ti();Ot()});var xi,yi,Si,Ft,xl,bi,cb,sb,yl,bn,wn=T(()=>{"use strict";n();xi=require("@reduxjs/toolkit"),yi=g(require("lodash.omit")),Si=require("redux-persist");sn();M();ke();Ft={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},xl={network:Ft},bi=(0,xi.createSlice)({name:"appConfig",initialState:xl,reducers:{initializeNetworkConfig:(e,o)=>{let t=hi(o.payload.walletConnectV2RelayAddresses),c=(0,yi.default)(o.payload,"walletConnectV2RelayAddresses");e.network=v(u(u({},e.network),c),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(Si.REHYDRATE,(o,t)=>{var s,p;if(!((p=(s=t.payload)==null?void 0:s.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:c}}=t.payload;o.network.customWalletAddress=c})}}),{initializeNetworkConfig:cb,updateNetworkConfig:sb,setCustomWalletAddress:yl}=bi.actions,bn=bi.reducer});var wi,Bt,vi,ub,fb,gb,vn,An=T(()=>{"use strict";n();wi=require("@reduxjs/toolkit");F();M();Bt={isSigning:!1,signedSessions:{}},vi=(0,wi.createSlice)({name:"signedMessageInfoSliceState",initialState:Bt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:c,errorMessage:s}=o.payload;s&&(e.errorMessage=s),e.isSigning=c.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),c)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Bt},extraReducers:e=>{e.addCase(R,()=>Bt)}}),{setSignSession:ub,clearSignedMessageInfo:fb,setSignSessionState:gb}=vi.actions,vn=vi.reducer});var Ii,ki,Ai,Li,Sl,bl,wb,wl,In,kn=T(()=>{"use strict";n();Ii=require("@reduxjs/toolkit"),ki=require("redux-persist");F();ln();M();Ai={customToasts:[],transactionToasts:[]},Li=(0,Ii.createSlice)({name:"toastsSlice",initialState:Ai,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,c=e.customToasts.findIndex(s=>s.toastId===t);if(c!==-1){e.customToasts[c]=v(u(u({},e.customToasts[c]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(v(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Do(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>Ai),e.addCase(ki.REHYDRATE,(o,t)=>{var s,p;let c=(p=(s=t.customToasts)==null?void 0:s.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=c})}}),{addCustomToast:Sl,removeCustomToast:bl,addTransactionToast:wb,removeTransactionToast:wl}=Li.actions,In=Li.reducer});var Ni,Ut,Gt,Vt,vl,Wt,Ei,kb,Al,Ht,Ln,Nn=T(()=>{"use strict";n();Ni=require("@reduxjs/toolkit");M();Ut="Transaction failed",Gt="Transaction successful",Vt="Processing transaction",vl="Transaction submitted",Wt={},Ei=(0,Ni.createSlice)({name:"transactionsInfo",initialState:Wt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:c}=o.payload;t!=null&&(e[t]={errorMessage:(c==null?void 0:c.errorMessage)||Ut,successMessage:(c==null?void 0:c.successMessage)||Gt,processingMessage:(c==null?void 0:c.processingMessage)||Vt,submittedMessage:(c==null?void 0:c.submittedMessage)||vl,transactionDuration:c==null?void 0:c.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Wt},extraReducers:e=>{e.addCase(R,()=>Wt)}}),{clearTransactionsInfo:kb,setTransactionsDisplayInfo:Al,clearTransactionsInfoForSessionId:Ht}=Ei.actions,Ln=Ei.reducer});function go(e){return e!=null&&(Ml(e)||Ul(e))}function ho(e){return e!=null&&(Ol(e)||Gl(e))}function To(e){return e!=null&&(Fl(e)||Vl(e))}function Ci(e){return e!=null&&(Bl(e)||Hl(e))}function $t(e){return e!=null&&Wl(e)}function Ml(e){return e!=null&&Il.includes(e)}function Ol(e){return e!=null&&kl.includes(e)}function Fl(e){return e!=null&&Ll.includes(e)}function Bl(e){return e!=null&&Nl.includes(e)}function Wl(e){return e!=null&&El.includes(e)}function Ul(e){return e!=null&&Cl.includes(e)}function Gl(e){return e!=null&&Pl.includes(e)}function Vl(e){return e!=null&&Dl.includes(e)}function Hl(e){return e!=null&&Rl.includes(e)}var Il,kl,Ll,Nl,El,Cl,Pl,Dl,Rl,xo=T(()=>{"use strict";n();C();Il=["sent"],kl=["success"],Ll=["fail","cancelled","timedOut"],Nl=["invalid"],El=["timedOut"],Cl=["pending"],Pl=["success"],Dl=["fail","invalid"],Rl=["not executed"]});var Pi,Di,Fo,$l,Ri,Mi,Oi,jl,En,ql,zl,Ob,Kl,Bo,jt,Fb,Cn,Pn=T(()=>{"use strict";n();Pi=require("@reduxjs/toolkit"),Di=require("redux-persist");C();xo();M();Fo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},$l={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Ri=(0,Pi.createSlice)({name:"transactionsSlice",initialState:Fo,reducers:{moveTransactionsToSignedState:(e,o)=>{var d,f;let{sessionId:t,transactions:c,errorMessage:s,status:p,redirectRoute:m,customTransactionInformation:_}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},$l),((d=e.signedTransactions[t])==null?void 0:d.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:c,status:p,errorMessage:s,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),_!=null?_:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===t&&(e.transactionsToSign=Fo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:c,errorMessage:s,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=c,s!=null&&(e.signedTransactions[t].errorMessage=s),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var f,x,y,w,A,L,q,Z;let{sessionId:t,status:c,errorMessage:s,transactionHash:p,serverTransaction:m,inTransit:_}=o.payload,d=(x=(f=e.signedTransactions)==null?void 0:f[t])==null?void 0:x.transactions;if(d!=null){e.signedTransactions[t].transactions=d.map(P=>P.hash===p?v(u(u({},m!=null?m:{}),P),{status:c,errorMessage:s,inTransit:_}):P);let ee=(w=(y=e.signedTransactions[t])==null?void 0:y.transactions)==null?void 0:w.every(P=>ho(P.status)),te=(L=(A=e.signedTransactions[t])==null?void 0:A.transactions)==null?void 0:L.some(P=>To(P.status)),be=(Z=(q=e.signedTransactions[t])==null?void 0:q.transactions)==null?void 0:Z.every(P=>Ci(P.status));ee&&(e.signedTransactions[t].status="success"),te&&(e.signedTransactions[t].status="fail"),be&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:c}=o.payload;e.customTransactionInformationForSessionId[t]=c,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Fo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Fo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:c}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),c))}},extraReducers:e=>{e.addCase(R,()=>Fo),e.addCase(Di.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:c,customTransactionInformationForSessionId:s}=t.payload.transactions,p=Object.entries(c).reduce((_,[d,f])=>{let x=new Date(d),y=new Date;return y.setHours(y.getHours()+5),y-x>0||(_[d]=f),_},{});s!=null&&(o.customTransactionInformationForSessionId=s),c!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Mi,updateSignedTransactions:Oi,setTransactionsToSign:jl,clearAllTransactionsToSign:En,clearAllSignedTransactions:ql,clearSignedTransaction:zl,clearTransactionToSign:Ob,setSignTransactionsError:Kl,setSignTransactionsCancelMessage:Bo,moveTransactionsToSignedState:jt,updateSignedTransactionsCustomTransactionInformation:Fb}=Ri.actions,Cn=Ri.reducer});var Fi,qt,Bi,Gb,Vb,Xl,Hb,Dn,Rn=T(()=>{"use strict";n();Fi=require("@reduxjs/toolkit");M();qt={},Bi=(0,Fi.createSlice)({name:"batchTransactionsSlice",initialState:qt,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>qt},extraReducers:e=>{e.addCase(R,()=>qt)}}),{setBatchTransactions:Gb,updateBatchTransactions:Vb,clearBatchTransactions:Xl,clearAllBatchTransactions:Hb}=Bi.actions,Dn=Bi.reducer});var Ui,Wi,Gi,zb,Vi,zt=T(()=>{"use strict";n();Ui=require("@reduxjs/toolkit");M();Wi={},Gi=(0,Ui.createSlice)({name:"dappConfigSlice",initialState:Wi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>Wi)}}),{setDappConfig:zb}=Gi.actions,Vi=Gi.reducer});var E=T(()=>{"use strict";n();hn();xn();Sn();wn();An();kn();Nn();Pn();Rn();zt()});var Kt=T(()=>{"use strict";n()});var ji,Ql,e_,qe,Fn=T(()=>{"use strict";n();ji=require("@reduxjs/toolkit");Kt();hn();Rn();zt();xn();Sn();wn();An();kn();Nn();Pn();Ql={["account"]:gn,["dappConfig"]:Vi,["loginInfo"]:Tn,["modals"]:yn,["networkConfig"]:bn,["signedMessageInfo"]:vn,["toasts"]:In,["transactionsInfo"]:Ln,["transactions"]:Cn,["batchTransactions"]:Dn},e_=(e={})=>(0,ji.combineReducers)(u(u({},Ql),e)),qe=e_});var Xi={};j(Xi,{default:()=>g_,sessionStorageReducers:()=>Xt});function Le(e,o=[]){return{key:e,version:1,storage:zi.default,blacklist:o}}var X,qi,zi,o_,Wo,n_,t_,r_,a_,i_,c_,s_,p_,m_,d_,Ki,l_,Xt,__,u_,f_,g_,Yi=T(()=>{"use strict";n();X=require("redux-persist"),qi=g(require("redux-persist/lib/storage")),zi=g(require("redux-persist/lib/storage/session"));Fn();E();hn();Rn();xn();Sn();wn();An();kn();Nn();Pn();Kt();o_={persistReducersStorageType:"localStorage"},Wo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},n_=Le(Wo["account"]),t_=Le(Wo["loginInfo"]),r_=Le(Wo["modals"]),a_=Le(Wo["networkConfig"]),i_={2:e=>v(u({},e),{networkConfig:Ft})};c_=Le("sdk-dapp-transactionsInfo"),s_=Le("sdk-dapp-transactions",["transactionsToSign"]),p_=Le("sdk-dapp-batchTransactions",["batchTransactions"]),m_=Le("sdk-dapp-toasts"),d_=Le("sdk-dapp-signedMessageInfo"),Ki={key:"sdk-dapp-store",version:2,storage:qi.default,whitelist:Object.keys(Wo),migrate:(0,X.createMigrate)(i_,{debug:!1})},l_=v(u({},Ki),{whitelist:[]}),Xt={["toasts"]:(0,X.persistReducer)(m_,In),["transactions"]:(0,X.persistReducer)(s_,Cn),["transactionsInfo"]:(0,X.persistReducer)(c_,Ln),["batchTransactions"]:(0,X.persistReducer)(p_,Dn),["signedMessageInfo"]:(0,X.persistReducer)(d_,vn)},__=v(u({},Xt),{["account"]:(0,X.persistReducer)(n_,gn),["loginInfo"]:(0,X.persistReducer)(t_,Tn),["modals"]:(0,X.persistReducer)(r_,yn),["networkConfig"]:(0,X.persistReducer)(a_,bn)}),u_=o_.persistReducersStorageType==="localStorage",f_=u_?(0,X.persistReducer)(Ki,qe(Xt)):(0,X.persistReducer)(l_,qe(__)),g_=f_});var Zi={};j(Zi,{default:()=>h_});var h_,Ji=T(()=>{"use strict";n();Fn();h_=qe()});var Qi={};j(Qi,{default:()=>x_});var ne,T_,x_,ec=T(()=>{"use strict";n();ne=require("redux-persist"),T_=[ne.FLUSH,ne.REHYDRATE,ne.PAUSE,ne.PERSIST,ne.PURGE,ne.REGISTER],x_=T_});var tc={};j(tc,{default:()=>nc});function nc(e){return(0,oc.persistStore)(e)}var oc,rc=T(()=>{"use strict";n();oc=require("redux-persist")});var ms=b((NR,ps)=>{n();var sf=typeof a=="object"&&a&&a.Object===Object&&a;ps.exports=sf});var Ko=b((ER,ds)=>{n();var pf=ms(),mf=typeof self=="object"&&self&&self.Object===Object&&self,df=pf||mf||Function("return this")();ds.exports=df});var hr=b((CR,ls)=>{n();var lf=Ko(),_f=lf.Symbol;ls.exports=_f});var gs=b((PR,fs)=>{n();var _s=hr(),us=Object.prototype,uf=us.hasOwnProperty,ff=us.toString,Xo=_s?_s.toStringTag:void 0;function gf(e){var o=uf.call(e,Xo),t=e[Xo];try{e[Xo]=void 0;var c=!0}catch(p){}var s=ff.call(e);return c&&(o?e[Xo]=t:delete e[Xo]),s}fs.exports=gf});var Ts=b((DR,hs)=>{n();var hf=Object.prototype,Tf=hf.toString;function xf(e){return Tf.call(e)}hs.exports=xf});var Tr=b((RR,Ss)=>{n();var xs=hr(),yf=gs(),Sf=Ts(),bf="[object Null]",wf="[object Undefined]",ys=xs?xs.toStringTag:void 0;function vf(e){return e==null?e===void 0?wf:bf:ys&&ys in Object(e)?yf(e):Sf(e)}Ss.exports=vf});var ws=b((MR,bs)=>{n();var Af=Array.isArray;bs.exports=Af});var As=b((OR,vs)=>{n();function If(e){return e!=null&&typeof e=="object"}vs.exports=If});var ks=b((FR,Is)=>{n();var kf=Tr(),Lf=ws(),Nf=As(),Ef="[object String]";function Cf(e){return typeof e=="string"||!Lf(e)&&Nf(e)&&kf(e)==Ef}Is.exports=Cf});var et=b((OM,Ps)=>{n();function Yf(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Ps.exports=Yf});var Rs=b((FM,Ds)=>{n();var Zf=Tr(),Jf=et(),Qf="[object AsyncFunction]",eg="[object Function]",og="[object GeneratorFunction]",ng="[object Proxy]";function tg(e){if(!Jf(e))return!1;var o=Zf(e);return o==eg||o==og||o==Qf||o==ng}Ds.exports=tg});var Os=b((BM,Ms)=>{n();var rg=Ko(),ag=rg["__core-js_shared__"];Ms.exports=ag});var Ws=b((WM,Bs)=>{n();var br=Os(),Fs=function(){var e=/[^.]+$/.exec(br&&br.keys&&br.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ig(e){return!!Fs&&Fs in e}Bs.exports=ig});var Gs=b((UM,Us)=>{n();var cg=Function.prototype,sg=cg.toString;function pg(e){if(e!=null){try{return sg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Us.exports=pg});var Hs=b((GM,Vs)=>{n();var mg=Rs(),dg=Ws(),lg=et(),_g=Gs(),ug=/[\\^$.*+?()[\]{}|]/g,fg=/^\[object .+?Constructor\]$/,gg=Function.prototype,hg=Object.prototype,Tg=gg.toString,xg=hg.hasOwnProperty,yg=RegExp("^"+Tg.call(xg).replace(ug,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Sg(e){if(!lg(e)||dg(e))return!1;var o=mg(e)?yg:fg;return o.test(_g(e))}Vs.exports=Sg});var js=b((VM,$s)=>{n();function bg(e,o){return e==null?void 0:e[o]}$s.exports=bg});var ot=b((HM,qs)=>{n();var wg=Hs(),vg=js();function Ag(e,o){var t=vg(e,o);return wg(t)?t:void 0}qs.exports=Ag});var Yo=b(($M,zs)=>{n();var Ig=ot(),kg=Ig(Object,"create");zs.exports=kg});var Ys=b((jM,Xs)=>{n();var Ks=Yo();function Lg(){this.__data__=Ks?Ks(null):{},this.size=0}Xs.exports=Lg});var Js=b((qM,Zs)=>{n();function Ng(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Zs.exports=Ng});var ep=b((zM,Qs)=>{n();var Eg=Yo(),Cg="__lodash_hash_undefined__",Pg=Object.prototype,Dg=Pg.hasOwnProperty;function Rg(e){var o=this.__data__;if(Eg){var t=o[e];return t===Cg?void 0:t}return Dg.call(o,e)?o[e]:void 0}Qs.exports=Rg});var np=b((KM,op)=>{n();var Mg=Yo(),Og=Object.prototype,Fg=Og.hasOwnProperty;function Bg(e){var o=this.__data__;return Mg?o[e]!==void 0:Fg.call(o,e)}op.exports=Bg});var rp=b((XM,tp)=>{n();var Wg=Yo(),Ug="__lodash_hash_undefined__";function Gg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Wg&&o===void 0?Ug:o,this}tp.exports=Gg});var ip=b((YM,ap)=>{n();var Vg=Ys(),Hg=Js(),$g=ep(),jg=np(),qg=rp();function vo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var c=e[o];this.set(c[0],c[1])}}vo.prototype.clear=Vg;vo.prototype.delete=Hg;vo.prototype.get=$g;vo.prototype.has=jg;vo.prototype.set=qg;ap.exports=vo});var sp=b((ZM,cp)=>{n();function zg(){this.__data__=[],this.size=0}cp.exports=zg});var mp=b((JM,pp)=>{n();function Kg(e,o){return e===o||e!==e&&o!==o}pp.exports=Kg});var Zo=b((QM,dp)=>{n();var Xg=mp();function Yg(e,o){for(var t=e.length;t--;)if(Xg(e[t][0],o))return t;return-1}dp.exports=Yg});var _p=b((e5,lp)=>{n();var Zg=Zo(),Jg=Array.prototype,Qg=Jg.splice;function eh(e){var o=this.__data__,t=Zg(o,e);if(t<0)return!1;var c=o.length-1;return t==c?o.pop():Qg.call(o,t,1),--this.size,!0}lp.exports=eh});var fp=b((o5,up)=>{n();var oh=Zo();function nh(e){var o=this.__data__,t=oh(o,e);return t<0?void 0:o[t][1]}up.exports=nh});var hp=b((n5,gp)=>{n();var th=Zo();function rh(e){return th(this.__data__,e)>-1}gp.exports=rh});var xp=b((t5,Tp)=>{n();var ah=Zo();function ih(e,o){var t=this.__data__,c=ah(t,e);return c<0?(++this.size,t.push([e,o])):t[c][1]=o,this}Tp.exports=ih});var Sp=b((r5,yp)=>{n();var ch=sp(),sh=_p(),ph=fp(),mh=hp(),dh=xp();function Ao(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var c=e[o];this.set(c[0],c[1])}}Ao.prototype.clear=ch;Ao.prototype.delete=sh;Ao.prototype.get=ph;Ao.prototype.has=mh;Ao.prototype.set=dh;yp.exports=Ao});var wp=b((a5,bp)=>{n();var lh=ot(),_h=Ko(),uh=lh(_h,"Map");bp.exports=uh});var Ip=b((i5,Ap)=>{n();var vp=ip(),fh=Sp(),gh=wp();function hh(){this.size=0,this.__data__={hash:new vp,map:new(gh||fh),string:new vp}}Ap.exports=hh});var Lp=b((c5,kp)=>{n();function Th(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}kp.exports=Th});var Jo=b((s5,Np)=>{n();var xh=Lp();function yh(e,o){var t=e.__data__;return xh(o)?t[typeof o=="string"?"string":"hash"]:t.map}Np.exports=yh});var Cp=b((p5,Ep)=>{n();var Sh=Jo();function bh(e){var o=Sh(this,e).delete(e);return this.size-=o?1:0,o}Ep.exports=bh});var Dp=b((m5,Pp)=>{n();var wh=Jo();function vh(e){return wh(this,e).get(e)}Pp.exports=vh});var Mp=b((d5,Rp)=>{n();var Ah=Jo();function Ih(e){return Ah(this,e).has(e)}Rp.exports=Ih});var Fp=b((l5,Op)=>{n();var kh=Jo();function Lh(e,o){var t=kh(this,e),c=t.size;return t.set(e,o),this.size+=t.size==c?0:1,this}Op.exports=Lh});var Wp=b((_5,Bp)=>{n();var Nh=Ip(),Eh=Cp(),Ch=Dp(),Ph=Mp(),Dh=Fp();function Io(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var c=e[o];this.set(c[0],c[1])}}Io.prototype.clear=Nh;Io.prototype.delete=Eh;Io.prototype.get=Ch;Io.prototype.has=Ph;Io.prototype.set=Dh;Bp.exports=Io});var Gp=b((u5,Up)=>{n();var Rh="__lodash_hash_undefined__";function Mh(e){return this.__data__.set(e,Rh),this}Up.exports=Mh});var Hp=b((f5,Vp)=>{n();function Oh(e){return this.__data__.has(e)}Vp.exports=Oh});var jp=b((g5,$p)=>{n();var Fh=Wp(),Bh=Gp(),Wh=Hp();function nt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Fh;++o<t;)this.add(e[o])}nt.prototype.add=nt.prototype.push=Bh;nt.prototype.has=Wh;$p.exports=nt});var zp=b((h5,qp)=>{n();function Uh(e,o,t,c){for(var s=e.length,p=t+(c?1:-1);c?p--:++p<s;)if(o(e[p],p,e))return p;return-1}qp.exports=Uh});var Xp=b((T5,Kp)=>{n();function Gh(e){return e!==e}Kp.exports=Gh});var Zp=b((x5,Yp)=>{n();function Vh(e,o,t){for(var c=t-1,s=e.length;++c<s;)if(e[c]===o)return c;return-1}Yp.exports=Vh});var Qp=b((y5,Jp)=>{n();var Hh=zp(),$h=Xp(),jh=Zp();function qh(e,o,t){return o===o?jh(e,o,t):Hh(e,$h,t)}Jp.exports=qh});var om=b((S5,em)=>{n();var zh=Qp();function Kh(e,o){var t=e==null?0:e.length;return!!t&&zh(e,o,0)>-1}em.exports=Kh});var tm=b((b5,nm)=>{n();function Xh(e,o,t){for(var c=-1,s=e==null?0:e.length;++c<s;)if(t(o,e[c]))return!0;return!1}nm.exports=Xh});var am=b((w5,rm)=>{n();function Yh(e,o){return e.has(o)}rm.exports=Yh});var cm=b((v5,im)=>{n();var Zh=ot(),Jh=Ko(),Qh=Zh(Jh,"Set");im.exports=Qh});var pm=b((A5,sm)=>{n();function eT(){}sm.exports=eT});var wr=b((I5,mm)=>{n();function oT(e){var o=-1,t=Array(e.size);return e.forEach(function(c){t[++o]=c}),t}mm.exports=oT});var lm=b((k5,dm)=>{n();var vr=cm(),nT=pm(),tT=wr(),rT=1/0,aT=vr&&1/tT(new vr([,-0]))[1]==rT?function(e){return new vr(e)}:nT;dm.exports=aT});var um=b((L5,_m)=>{n();var iT=jp(),cT=om(),sT=tm(),pT=am(),mT=lm(),dT=wr(),lT=200;function _T(e,o,t){var c=-1,s=cT,p=e.length,m=!0,_=[],d=_;if(t)m=!1,s=sT;else if(p>=lT){var f=o?null:mT(e);if(f)return dT(f);m=!1,s=pT,d=new iT}else d=o?[]:_;e:for(;++c<p;){var x=e[c],y=o?o(x):x;if(x=t||x!==0?x:0,m&&y===y){for(var w=d.length;w--;)if(d[w]===y)continue e;o&&d.push(y),_.push(x)}else s(d,y,t)||(d!==_&&d.push(y),_.push(x))}return _}_m.exports=_T});var gm=b((N5,fm)=>{n();var uT=um();function fT(e){return e&&e.length?uT(e):[]}fm.exports=fT});var Ee={};j(Ee,{css:()=>km,default:()=>ZT});var km,ZT,Ce=T(()=>{"use strict";n();km=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(km));ZT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Rr={};j(Rr,{css:()=>Hm,default:()=>gx});var Hm,gx,Mr=T(()=>{"use strict";n();Hm=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hm));gx={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var Br={};j(Br,{css:()=>$m,default:()=>Tx});var $m,Tx,Wr=T(()=>{"use strict";n();$m=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($m));Tx={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var Ur={};j(Ur,{css:()=>Km,default:()=>Sx});var Km,Sx,Gr=T(()=>{"use strict";n();Km=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Km));Sx={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var Hr={};j(Hr,{css:()=>Qm,default:()=>vx});var Qm,vx,$r=T(()=>{"use strict";n();Qm=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: space-between;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon {
  width: 32px;
  height: 32px;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon.dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #737373;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon .dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon {
  color: #ffffff;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper {
  flex: 1;
  min-width: 0;
  display: flex;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper .dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance {
  display: inline-flex;
  color: #0ac2ae;
  font-weight: 500;
  font-size: 32px;
}
.dapp-core-component__confirmAmountDataStyles__confirmAmountData .dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice {
  color: #737373;
  font-size: 1rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qm));vx={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var jr={};j(jr,{css:()=>rd,default:()=>Ix});var rd,Ix,qr=T(()=>{"use strict";n();rd=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rd));Ix={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var zr={};j(zr,{css:()=>dd,default:()=>Lx});var dd,Lx,Kr=T(()=>{"use strict";n();dd=`.dapp-core-component__confirmAmountStyles__confirmAmount {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper {
  height: 48px;
  position: relative;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountLoading {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountLoading.dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible {
  opacity: 1;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountContent {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.dapp-core-component__confirmAmountStyles__confirmAmount .dapp-core-component__confirmAmountStyles__confirmAmountWrapper .dapp-core-component__confirmAmountStyles__confirmAmountContent.dapp-core-component__confirmAmountStyles__confirmAmountContentHidden {
  pointer-events: none;
  opacity: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dd));Lx={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var Cx={};j(Cx,{ConfirmAmount:()=>Ex});module.exports=V(Cx);n();var Se=g(require("react")),Xr=g(require("classnames"));n();var va=g(require("react"));n();var Co=g(require("react"));n();co();var Sa=()=>!He();var el=()=>h(void 0,null,function*(){return yield Promise.resolve().then(()=>(St(),yt))}),ol=()=>(St(),V(yt)).default,bt=Sa();function wa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[c,s]=Co.default.useState(bt?void 0:ol()),[p,m]=Co.default.useState(bt||t==null?void 0:t()),_=()=>h(this,null,function*(){(e?e():el()).then(d=>s(d.default)),o==null||o().then(d=>m(d.default))});return(0,Co.useEffect)(()=>{bt&&_()},[]),{globalStyles:c,styles:p}}function D(e,o){return t=>{let{globalStyles:c,styles:s}=wa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return va.default.createElement(e,v(u({},t),{globalStyles:c!=null?c:{},styles:s!=null?s:{}}))}}n();n();n();var mc=require("react"),yo=require("react-redux");n();var Yt=require("@reduxjs/toolkit"),sc=require("react-redux/lib/utils/Subscription");E();n();var Hi=g(require("lodash.throttle"));I();E();Mt();uo();_o();var Yl=[dn],Mn=!1,Zl=(0,Hi.default)(()=>{Mo(Ro())},5e3),$i=e=>o=>t=>{if(Yl.includes(t.type))return o(t);let c=e.getState(),s=je.local.getItem(De.loginExpiresAt);if(!Boolean(c==null?void 0:c.account.address))return o(t);if(s==null)return Mo(Ro());let m=Date.now();return s-m<0&&!Mn?setTimeout(()=>{Mn=!0,e.dispatch(si())},1e3):(Mn&&(Mn=!1),Zl()),o(t)};n();n();function On(){return typeof sessionStorage!="undefined"}var ac=On()?(Yi(),V(Xi)).default:(Ji(),V(Zi)).default,ic=On()?(ec(),V(Qi)).default:[],cc=On()?(rc(),V(tc)).default:e=>e;Fn();var k=(0,Yt.configureStore)({reducer:ac,middleware:e=>e({serializableCheck:{ignoredActions:[...ic,Rt.type,fn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat($i)}),pc=(0,sc.createSubscription)(k),j0=cc(k),q0=(0,Yt.configureStore)({reducer:qe});var y_={store:k,subscription:pc},Zt=(0,mc.createContext)(y_),Y0=(0,yo.createStoreHook)(Zt),$=(0,yo.createDispatchHook)(Zt),N=(0,yo.createSelectorHook)(Zt);n();n();E();n();var dc=g(require("lodash.isequal")),Bn=require("reselect"),S=(0,Bn.createSelectorCreator)(Bn.defaultMemoize,dc.default);var Te=e=>e.account,ze=S(Te,e=>e.address),So=S(Te,ze,(e,o)=>o in e.accounts?e.accounts[o]:un),S_=S(Te,So,(e,o)=>{let s=e,{accounts:t}=s,c=we(s,["accounts"]);return v(u({},c),{address:o.address,account:o})}),ow=S(So,e=>e.balance),b_=S(So,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),nw=S(Te,e=>e.shard),w_=S(Te,e=>e.ledgerAccount),tw=S(Te,e=>e.walletConnectAccount),rw=S(Te,e=>e.isAccountLoading),aw=S(Te,e=>e.accountLoadingError),v_=S(Te,e=>e.websocketEvent),A_=S(Te,e=>e.websocketBatchEvent);n();var lc=e=>e.dappConfig,sw=S(lc,e=>e.shouldUseWebViewProvider);n();var Q=e=>e.loginInfo,I_=S(Q,e=>e.loginMethod),Wn=S(Q,ze,(e,o)=>Boolean(o)),lw=S(Q,e=>e.walletConnectLogin),k_=S(Q,e=>e.ledgerLogin),L_=S(Q,e=>e.walletLogin),_w=S(Q,e=>e.isLoginSessionInvalid),Jt=S(Q,e=>e.tokenLogin),_c=S(Q,e=>e.logoutRoute),N_=S(Q,e=>e.isWalletConnectV2Initialized);n();var uc=e=>e.modals,gw=S(uc,e=>e.txSubmittedModal),E_=S(uc,e=>e.notificationModal);n();var ae=e=>e.networkConfig,Un=S(ae,e=>e.network.chainId),C_=S(ae,e=>e.network.roundDuration),xw=S(ae,e=>e.network.walletConnectBridgeAddress),P_=S(ae,e=>e.network.walletConnectV2RelayAddress),D_=S(ae,e=>e.network.walletConnectV2ProjectId),R_=S(ae,e=>e.network.walletConnectV2Options),M_=S(ae,e=>e.network.walletConnectDeepLink),Y=S(ae,e=>e.network),Qt=S(Y,e=>e.apiAddress),fc=S(Y,e=>e.explorerAddress),gc=S(Y,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),O_=S(Y,e=>e.xAliasAddress),hc=S(Y,e=>e.egldLabel);n();var Gn=e=>e.signedMessageInfo,bw=S(Gn,e=>e.isSigning),ww=S(Gn,e=>e.errorMessage),vw=S(Gn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),Aw=S(Gn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Tc=e=>e.toasts,F_=S(Tc,e=>e.customToasts),xc=S(Tc,e=>e.transactionToasts);n();E();var yc={errorMessage:Ut,successMessage:Gt,processingMessage:Vt},Sc=e=>e.transactionsInfo,B_=S(Sc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||yc);n();n();var xe=require("@multiversx/sdk-core");I();n();var or=require("@multiversx/sdk-core/out");n();n();function er(e){try{let o=atob(e),t=btoa(o),c=r.Buffer.from(e,"base64").toString(),s=r.Buffer.from(c).toString("base64"),p=e===t||t.startsWith(e),m=e===s||s.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var bc=e=>{let o=e!=null?e:"";return er(o)?or.TransactionPayload.fromEncoded(o):new or.TransactionPayload(o)};n();I();var Uo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(wt).some(t=>e.startsWith(t)):!1;function Vn(e){var c,s,p;let o=u({},e);Uo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new xe.Transaction(u(u(v(u(v(u({value:o.value.valueOf(),data:bc(o.data),nonce:o.nonce.valueOf(),receiver:new xe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new xe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(c=o.gasLimit.valueOf())!=null?c:pn,gasPrice:(s=o.gasPrice.valueOf())!=null?s:mn,chainID:o.chainID.valueOf(),version:new xe.TransactionVersion((p=o.version)!=null?p:ja)}),o.options?{options:new xe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new xe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();n();var V_=require("@multiversx/sdk-core/out");n();I();n();var wc=require("@multiversx/sdk-core");F();n();var H_=require("@multiversx/sdk-core");n();n();n();var $_=require("@multiversx/sdk-core"),j_=g(require("bignumber.js"));C();n();n();n();var ie="accounts";var Hn="blocks",Ic="code",kc="collections";var Lc="contracts",Go="economics",Nc="identities";var Ec="locked-accounts",Cc="logs",Pc="miniblocks";var Vo="nfts",Dc="nodes",tr="providers",Rc="roles",rr="sc-results";var Me="tokens";var ce="transactions";var Ho={shard:e=>`/${Hn}?shard=${e}`,receiverShard:e=>`/${ce}?receivershard=${e}`,senderShard:e=>`/${ce}?sendershard=${e}`,transactionDetails:e=>`/${ce}/${e}`,transactionDetailsScResults:e=>`/${ce}/${e}/${rr}`,transactionDetailsLogs:e=>`/${ce}/${e}/${Cc}`,nodeDetails:e=>`/${Dc}/${e}`,accountDetails:e=>`/${ie}/${e}`,accountDetailsContractCode:e=>`/${ie}/${e}/${Ic}`,accountDetailsTokens:e=>`/${ie}/${e}/${Me}`,accountDetailsNfts:e=>`/${ie}/${e}/${Vo}`,accountDetailsScResults:e=>`/${ie}/${e}/${rr}`,accountDetailsContracts:e=>`/${ie}/${e}/${Lc}`,identityDetails:e=>`/${Nc}/${e}`,tokenDetails:e=>`/${Me}/${e}`,tokenDetailsAccounts:e=>`/${Me}/${e}/${ie}`,tokenDetailsLockedAccounts:e=>`/${Me}/${e}/${Ec}`,tokenDetailsRoles:e=>`/${Me}/${e}/${Rc}`,collectionDetails:e=>`/${kc}/${e}`,nftDetails:e=>`/${Vo}/${e}`,providerDetails:e=>`/${tr}/${e}`,providerDetailsTransactions:e=>`/${tr}/${e}/${ce}`,miniblockDetails:e=>`/${Pc}/${e}`};n();n();n();n();K();n();var Mc=!1;function K_(e){Mc||(console.error(e),Mc=!0)}function ar({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(K_(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();K();n();n();n();var X_=g(require("bignumber.js"));I();n();var Bc=require("@multiversx/sdk-core"),Oe=g(require("bignumber.js"));I();n();var Fc=g(require("bignumber.js")),ir=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let c=new Fc.default(t),s=o?0:-1;return c.toString(10)===t&&c.comparedTo(0)>=s};n();function Ne(e){return{if:function(o){return o?{then:t=>t instanceof Function?Ne(t(e)):Ne(t)}:{then:()=>Ne(e)}},then:o=>o instanceof Function?Ne(o(e)):Ne(o),valueOf:function(){return e}}}Oe.default.config({ROUNDING_MODE:Oe.default.ROUND_FLOOR});function Fe({input:e,decimals:o=re,digits:t=Po,showLastNonZeroDecimal:c=!0,showIsLessThanDecimalsLabel:s=!1,addCommas:p=!1}){if(!ir(e,!1))throw new Error("Invalid input");let m=new Oe.default(e).isNegative(),_=e;return m&&(_=e.substring(1)),Ne(_).then(()=>Bc.TokenTransfer.fungibleFromBigInteger("",_,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(d=>{let f=new Oe.default(d);if(f.isZero())return he;let x=f.toString(10),[y,w]=x.split("."),A=new Oe.default(w||0),L=Ne(0).if(Boolean(w&&c)).then(()=>Math.max(w.length,t)).if(A.isZero()&&!c).then(0).if(Boolean(w&&!c)).then(()=>Math.min(w.length,t)).valueOf(),q=w&&t>=1&&t<=w.length&&A.isGreaterThan(0)&&new Oe.default(w.substring(0,t)).isZero(),Z=f.toFormat(L);return Ne(x).if(p).then(Z).if(Boolean(q)).then(te=>{let be=new Oe.default(y).isZero(),[P,no]=te.split("."),to=new Array(t-1).fill(0),it=[...to,0].join(""),ct=[...to,1].join("");return be?s?`<${P}.${ct}`:c?`${P}.${no}`:P:`${P}.${it}`}).if(Boolean(!q&&w)).then(te=>{let[be]=te.split("."),P=w.substring(0,L);if(c){let no=t-P.length;if(no>0){let to=Array(no).fill(0).join("");return P=`${P}${to}`,`${be}.${P}`}return te}return P?`${be}.${P}`:be}).valueOf()}).if(m).then(d=>`-${d}`).valueOf()}n();n();n();I();n();n();n();n();I();n();I();n();var Y_=require("@multiversx/sdk-core");I();n();var $o=require("@multiversx/sdk-core"),Q_=g(require("bignumber.js"));I();n();n();var Z_=g(require("bignumber.js"));I();n();I();n();var cr={isEsdt:!1,isNft:!1,isEgld:!1};function sr(e){let o=e==null?void 0:e.split("-").length;return o===2?v(u({},cr),{isEsdt:!0}):o===3?v(u({},cr),{isNft:!0}):v(u({},cr),{isEgld:!0})}n();var pr=({amount:e,usd:o,decimals:t=2,addEqualSign:c})=>{let s=(parseFloat(e)*o).toFixed(t),p=parseFloat(s).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),m=parseFloat(e)>0?"\u2248":"=";return`${c?`${m} `:""}$${p}`};n();n();n();n();I();n();I();n();I();n();K();var eu=["reDelegateRewards","claimRewards","unBond"],ou=["wrapEgld","unwrapEgld"],nu=["unStake"],tu=["unDelegate"];n();n();n();I();n();var iu=g(require("bignumber.js"));n();n();K();n();var su=g(require("bignumber.js"));n();n();n();n();var du=g(require("bignumber.js"));F();n();n();n();n();C();n();var fu=require("@multiversx/sdk-web-wallet-provider");I();n();var _u=g(require("qs"));n();H();co();n();co();var qk={search:He()?window.location.search:"",removeParams:[]};n();n();n();G();n();K();n();n();G();n();var gu=g(require("linkifyjs"));n();I();n();var hu=g(require("bignumber.js"));n();F();n();n();C();n();C();n();n();n();K();n();K();n();var Tu=g(require("bignumber.js"));I();K();n();K();n();var Gc=require("react");F();n();n();K();n();n();var xu=require("@multiversx/sdk-core/out"),yu=g(require("bignumber.js"));K();n();F();n();n();F();var F1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Vc=require("react");F();G();n();var bu=require("react");K();var j1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];xo();n();var qn=e=>e.transactions,bo=S(qn,e=>e.signedTransactions),wu=S(qn,e=>e.signTransactionsError),Hc=S(qn,e=>e.signTransactionsCancelMessage),zn=e=>o=>Object.entries(o).reduce((t,[c,s])=>(e(s.status)&&(t[c]=s),t),{}),$c=S(bo,zn(go)),jc=S(bo,zn(ho)),qc=S(bo,zn(To)),vu=S(bo,zn($t)),zc=S(qn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:v(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Vn(t)))||[]})}),Au=S(bo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Ke=()=>N(ae);n();var Kc=require("react");n();E();n();n();n();n();n();n();n();n();var ku=require("@multiversx/sdk-extension-provider"),Lu=require("@multiversx/sdk-hw-provider"),Nu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Eu=require("@multiversx/sdk-opera-provider"),Cu=require("@multiversx/sdk-passkey-provider/out"),Pu=require("@multiversx/sdk-web-wallet-provider");I();Pe();n();var wo=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Xc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");C();n();var se=e=>`Unable to perform ${e}, Provider not initialized`,Kn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(se("getAccount"))}setAccount(o){throw new Error(se(`setAccount: ${o}`))}login(o){throw new Error(se(`login with options: ${o}`))}logout(o){throw new Error(se(`logout with options: ${o}`))}getAddress(){throw new Error(se("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(se(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(se(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(se(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(se(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(se(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(se(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Yc=new Kn;E();n();n();n();n();n();var Zc=require("@lifeomic/axios-fetch"),lr=g(require("axios")),_r=(0,Zc.buildAxiosFetch)(lr.default),ur=(e,o)=>h(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let c=e.clone().json(),[s]=yield Promise.all([c]);return{data:s,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Du(e,o,t){return h(this,null,function*(){try{let c=yield _r(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return ur(c,t)}catch(c){throw console.error("Fetch Error:",c),c}})}function Ru(e,o){return h(this,null,function*(){try{let t=yield _r(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return ur(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Mu(e,o,t){return h(this,null,function*(){try{let c=yield _r(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);return ur(c,t)}catch(c){throw console.error("Fetch Error:",c),c}})}var Xe=lr.default.create();Xe.get=Ru;Xe.post=Du;Xe.patch=Mu;n();var qo=e=>{let o=e!=null?e:Qt(k.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var Ou=g(require("axios"));n();var Fu=g(require("swr"));n();C();n();n();n();G();n();xo();n();n();n();var Bu=g(require("axios"));n();var Uu=g(require("axios"));mo();n();I();n();var Gu=g(require("axios"));n();var Hu=g(require("axios"));n();n();var $u=g(require("axios"));n();var ju=g(require("axios"));n();n();E();C();n();n();n();n();G();n();M();F();n();E();n();var os=require("@multiversx/sdk-core");F();H();n();xo();n();E();C();n();E();F();n();n();n();F();n();sn();n();n();n();n();var ts=g(require("swr"));n();n();var Jn={},gr={setItem:(e,o)=>h(void 0,null,function*(){try{Jn[e]=JSON.stringify(o)}catch(t){console.error("tokenDataStorage unable to serialize",t)}}),getItem:e=>h(void 0,null,function*(){try{return JSON.parse(Jn[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>h(void 0,null,function*(){Jn={}}),removeItem:e=>h(void 0,null,function*(){delete Jn[e]})};function ns(e){return h(this,null,function*(){let{apiAddress:o,apiTimeout:t}=Y(k.getState()),c={baseURL:o,timeout:Number(t)},s=yield gr.getItem(e);if(s)return s;let p=yield Xe.get(e,c);return yield gr.setItem(e,p.data),p.data})}function rs({tokenId:e}){var y,w,A,L;let{network:o}=Ke(),{isNft:t}=sr(e),c=e,s=t?Vo:Me,{data:p,error:m,isLoading:_}=(0,ts.default)(Boolean(c)?`${o.apiAddress}/${s}/${c}`:null,ns);if(!c)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let d=p?p==null?void 0:p.decimals:Number(o.decimals),f=p?p==null?void 0:p.name:"",x=p?(L=(y=p==null?void 0:p.assets)==null?void 0:y.svgUrl)!=null?L:(A=(w=p==null?void 0:p.media)==null?void 0:w[0])==null?void 0:A.thumbnailUrl:"";return{isLoading:_,tokenDecimals:d,tokenLabel:f,type:p==null?void 0:p.type,tokenAvatar:x,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}n();n();var as=require("react");n();n();var Ku=require("react"),Xu=require("@multiversx/sdk-web-wallet-provider"),Yu=require("@multiversx/sdk-web-wallet-provider"),Zu=g(require("qs"));I();E();C();At();G();var L2=B();n();var Cs=require("react"),Sr=require("@multiversx/sdk-core");n();I();Ot();n();n();n();n();n();n();n();n();n();n();mo();n();var of=g(require("axios"));n();var tf=g(require("axios"));n();mo();n();mo();n();n();n();n();var af=require("@multiversx/sdk-opera-provider");n();var cf=require("@multiversx/sdk-extension-provider");n();Pe();n();n();n();n();var Pf=g(ks());n();var Of=require("@multiversx/sdk-native-auth-client");n();var Es=g(require("axios"));n();n();n();function Ls(e){return h(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Ns=(e,o,t,c=0)=>h(void 0,null,function*(){try{return yield e(...t)}catch(s){return c<o.retries?((o==null?void 0:o.delay)!=null&&(yield Ls(o.delay)),yield Ns(e,o,t,c+1)):null}}),xr=(e,o={retries:5,delay:500})=>(...t)=>h(void 0,null,function*(){return yield Ns(e,o,t)});var Df=4;var XR=xr((e,o,t)=>h(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:c}=yield Es.default.get(`${e}/${Hn}?from=${Df}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[s]=c;return s}));n();n();ln();n();n();G();var a3={origin:B().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Bf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Wf=require("@multiversx/sdk-passkey-provider/out");I();G();n();n();n();var jf=require("react"),qf=require("@multiversx/sdk-hw-provider");n();M();F();n();Oo();uo();_o();H();n();n();var ym=require("react"),Sm=require("@multiversx/sdk-core"),DT=require("@multiversx/sdk-extension-provider"),RT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),MT=require("@multiversx/sdk-passkey-provider/out"),OT=g(gm());I();n();n();n();n();n();n();n();n();n();n();var Qo=g(require("react"));var j5=(0,Qo.createContext)({}),q5=k.getState();n();var Tm=g(require("react"));n();var Ar=g(require("react")),gT=g(require("axios"));n();n();Pe();n();n();var bT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),wT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");M();n();M();E();F();n();n();E();n();H();n();E();F();n();n();var TT=require("@multiversx/sdk-core"),xT=g(require("bignumber.js"));I();n();var yT=g(require("bignumber.js"));I();E();C();H();G();n();var xm=require("react"),kT=require("@multiversx/sdk-extension-provider"),LT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),NT=require("@multiversx/sdk-passkey-provider/out");Pe();E();n();E();F();Oo();G();n();ue();E();n();n();var BT=require("react");n();n();C();xo();n();var bm=require("react");n();n();var UT=require("react"),GT=require("@multiversx/sdk-extension-provider");ue();M();C();n();ke();H();H();n();n();Pe();F();n();var WT=require("react"),wm=require("@multiversx/sdk-core");E();n();var VT=require("react"),HT=require("@multiversx/sdk-opera-provider");ue();M();C();ke();H();G();n();var $T=require("react");kt();ue();Pe();M();E();C();ke();G();n();var XT=require("react");ue();E();n();n();Lt();n();n();var jT=g(require("platform"));co();n();n();n();n();n();n();n();lo();C();n();n();var qT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Oo();uo();n();n();n();E();n();n();var zT=g(require("axios"));H();n();n();var KT=g(et());lo();var vm,Am,Im,OU=(Im=(Am=(vm=ge.safeWindow)==null?void 0:vm.location)==null?void 0:Am.origin)==null?void 0:Im.includes("localhost");n();G();n();n();var rx=require("react");I();n();n();I();n();n();n();var YT=g(require("bignumber.js"));n();n();n();var We=g(require("react")),Dm=require("react"),Rm=require("react"),Er=g(require("classnames")),Mm=require("react-dom");I();n();var Lm=g(require("react")),Nm=g(require("classnames"));var JT=({className:e,children:o,styles:t})=>Lm.default.createElement("div",{className:(0,Nm.default)(t==null?void 0:t.dappModalBody,e)},o),Ir=D(JT,{ssrStyles:()=>Promise.resolve().then(()=>(Ce(),Ee)),clientStyles:()=>(Ce(),V(Ee)).default});n();var kr=g(require("react")),Em=g(require("classnames"));var QT=({visible:e,customFooter:o,className:t,footerText:c,styles:s})=>e?kr.default.createElement("div",{className:(0,Em.default)(s==null?void 0:s.dappModalFooter,t)},o!=null?o:kr.default.createElement("div",null,c)):null,Lr=D(QT,{ssrStyles:()=>Promise.resolve().then(()=>(Ce(),Ee)),clientStyles:()=>(Ce(),V(Ee)).default});n();var No=g(require("react")),Cm=require("@fortawesome/free-solid-svg-icons"),Pm=require("@fortawesome/react-fontawesome"),on=g(require("classnames"));var ex=({visible:e,headerText:o,customHeader:t,className:c,closeButtonClassName:s,headerTextClassName:p,onHide:m,globalStyles:_,styles:d})=>e?t?No.default.createElement("div",{className:(0,on.default)(d==null?void 0:d.dappModalHeader,c)},t):No.default.createElement("div",{className:(0,on.default)(d==null?void 0:d.dappModalHeader,c)},No.default.createElement("div",{className:(0,on.default)(d==null?void 0:d.dappModalHeaderText,p)},o),No.default.createElement("button",{onClick:m,className:(0,on.default)(d==null?void 0:d.dappModalCloseButton,_==null?void 0:_.btn,_==null?void 0:_.btnLight,s)},No.default.createElement(Pm.FontAwesomeIcon,{size:"lg",icon:Cm.faTimes}))):null,Nr=D(ex,{ssrStyles:()=>Promise.resolve().then(()=>(Ce(),Ee)),clientStyles:()=>(Ce(),V(Ee)).default});var ox={showHeader:!0,showFooter:!1,headerText:"",footerText:""},nx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:c,config:s=ox,id:p="dapp-modal",onHide:m,parentElement:_,visible:d,styles:f})=>{let[x,y]=(0,Dm.useState)(!1);if((0,Rm.useEffect)(()=>{y(!0)},[]),!d)return null;let{showHeader:w,showFooter:A,headerText:L,footerText:q,modalDialogClassName:Z="dapp-modal-dialog",modalContentClassName:ee="dapp-modal-dialog-content",modalHeaderClassName:te="dapp-modal-dialog-header",modalHeaderTextClassName:be="dapp-modal-dialog-header-text",modalCloseButtonClassName:P="dapp-modal-dialog-close-button",modalBodyClassName:no="dapp-modal-dialog-content-body",modalFooterClassName:to="dapp-modal-dialog-footer",customModalHeader:it,customModalFooter:ct}=s,ld=_d=>{_d.key==="Escape"&&c&&(m==null||m())};return We.default.createElement(We.default.Fragment,null,x&&(0,Mm.createPortal)(We.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Er.default)(Z,f==null?void 0:f.dappModal,t),"data-testid":e,onKeyDown:ld},We.default.createElement("div",{className:(0,Er.default)(f==null?void 0:f.dappModalContent,ee)},We.default.createElement(Nr,{visible:w,headerText:L,customHeader:it,className:te,headerTextClassName:be,closeButtonClassName:P,onHide:m}),We.default.createElement(Ir,{className:no},o),We.default.createElement(Lr,{visible:A,customFooter:ct,footerText:q,className:to}))),_!=null?_:document==null?void 0:document.body))},tx=D(nx,{ssrStyles:()=>Promise.resolve().then(()=>(Ce(),Ee)),clientStyles:()=>(Ce(),V(Ee)).default});n();n();var Om=require("react");n();n();var Fm=require("react"),ix=require("@multiversx/sdk-hw-provider");ue();M();E();C();ke();n();var ax=require("react");n();n();var Pr=require("react");M();E();C();ke();G();n();var sx=require("react"),px=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ue();M();C();ke();H();H();n();var mx=require("react"),dx=require("@multiversx/sdk-passkey-provider/out");ue();M();C();ke();H();H();n();n();var Bm=require("react");n();var ux=require("react");n();var Dr=require("react"),_x=require("socket.io-client");E();n();n();n();var fx=require("react");F();n();n();n();var Gm=g(require("swr"));n();n();n();n();var Wm=g(require("axios"));function Um(e=Go){let t=`${qo()}/${e}`;return Wm.default.get(t)}n();function Vm(){let e=c=>Um(c).then(s=>s.data),{data:o,error:t}=(0,Gm.default)(Go,e);return{price:o==null?void 0:o.price,error:t}}n();n();var rt=g(require("react")),Or=g(require("classnames"));var hx=({className:e,styles:o})=>rt.default.createElement("div",{className:(0,Or.default)(o==null?void 0:o.loadingDots,e)},Array.from({length:3}).map((t,c)=>rt.default.createElement("span",{key:`loading-dot-${c}`,className:(0,Or.default)(o==null?void 0:o.loadingDot,o==null?void 0:o[`loadingDot-${c}`])})),rt.default.createElement("span",null,"Loading...")),Fr=D(hx,{ssrStyles:()=>Promise.resolve().then(()=>(Mr(),Rr)),clientStyles:()=>(Mr(),V(Rr)).default});n();n();n();var eo=g(require("react")),jm=g(require("bignumber.js"));I();var xx=({amount:e,styles:o,type:t,identifier:c})=>{let s=new jm.default(e),p=s.isZero(),m=s.isEqualTo(1)?"SFT":"SFTs",_=s.toNumber().toLocaleString("en"),d=`${_} ${c}`;return p?eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are using"):t==="NonFungibleESDT"?eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending an NFT"):t==="SemiFungibleESDT"?eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},eo.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelText},"You are sending"),eo.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":d},_," ",m)):eo.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending")},qm=D(xx,{ssrStyles:()=>Promise.resolve().then(()=>(Wr(),Br)),clientStyles:()=>(Wr(),V(Br)).default});n();n();var ye=g(require("react")),ed=require("@fortawesome/free-solid-svg-icons"),od=require("@fortawesome/react-fontawesome"),nd=g(require("classnames"));I();n();n();var oo=g(require("react")),Vr=g(require("classnames"));n();var at=g(require("react")),yx=e=>at.createElement("svg",u({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),at.createElement("g",null,at.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),zm=yx;var bx=({amount:e,displayAsUsd:o,addEqualSign:t,egldIcon:c,className:s,showTokenLabel:p=!0,styles:m,tokenLabel:_,showTokenLabelSup:d,"data-testid":f})=>{let[x,y]=e.split("."),w=o&&x.indexOf("$")<0?`$${x}`:x,L=(()=>{let ee={processedMainBalance:w};return t&&o&&(ee.approximation="\u2248"),y&&(ee.decimalBalance=`.${y}`),!o&&p&&(ee.tokenLabel=` ${_}`),ee})(),Z=[L.approximation,L.processedMainBalance,L.decimalBalance,L.tokenLabel].reduce((ee,te)=>te?ee.concat(te):ee,"");return oo.default.createElement("div",{className:(0,Vr.default)(m==null?void 0:m.balance,s),"data-testid":f,"data-value":Z},c&&!o&&oo.default.createElement(zm,{className:m==null?void 0:m.balanceSymbol}),L.approximation&&oo.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},L.approximation),L.processedMainBalance&&oo.default.createElement("span",{className:m==null?void 0:m.balanceMain},w),L.decimalBalance&&oo.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},L.decimalBalance),L.tokenLabel&&oo.default.createElement("sup",{className:(0,Vr.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:d})},L.tokenLabel))},Xm=D(bx,{ssrStyles:()=>Promise.resolve().then(()=>(Gr(),Ur)),clientStyles:()=>(Gr(),V(Ur)).default});n();n();var Ym=g(require("react")),Zm=g(require("classnames"));I();var wx=_=>{var d=_,{amount:e,usd:o,decimals:t,addEqualSign:c,className:s,globalStyles:p}=d,m=we(d,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let f=pr({amount:e,usd:o,decimals:t,addEqualSign:c!=null?c:!0}),y=`${e}`===he?`= $${he}`:f;return Ym.default.createElement("small",u({className:(0,Zm.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,s!=null?s:"dapp-usd-value")},m),y)},Jm=D(wx,{});var Ax=({isEgld:e,styles:o,tokenPrice:t,isNftOrSft:c,handleReference:s,currentTransaction:p,amount:m,tokenDetails:_})=>{let{network:d}=Ke(),{tokenAvatar:f,tokenDecimals:x,identifier:y}=_,w=({addCommas:Z})=>Fe({input:e?p.transaction.getValue().toString():m,decimals:e?Number(d.decimals):x,digits:Number(d.digits),showLastNonZeroDecimal:!1,addCommas:Z}),A=e||_.identifier===za,L=w({addCommas:!0}),q=w({addCommas:!1});return ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountData},ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataWrapper},!A&&f&&ye.default.createElement("img",{src:f,className:o==null?void 0:o.confirmAmountDataIcon}),!A&&!f&&ye.default.createElement("div",{className:(0,nd.default)(o==null?void 0:o.confirmAmountDataIcon,o==null?void 0:o.confirmAmountDataIconDefault)},ye.default.createElement(od.FontAwesomeIcon,{icon:ed.faCoins,className:o==null?void 0:o.confirmAmountDataIconDefaultIcon})),ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataBalanceWrapper,ref:s},ye.default.createElement(Xm,{amount:L,egldIcon:A,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:A?d.egldLabel:y,className:o==null?void 0:o.confirmAmountDataBalance}))),!c&&t&&ye.default.createElement(Jm,{amount:q,usd:t,"data-testid":"confirmUsdValue",className:o==null?void 0:o.confirmAmountDataPrice}),!c&&!t&&ye.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataPrice},"Price Unknown"))},td=D(Ax,{ssrStyles:()=>Promise.resolve().then(()=>($r(),Hr)),clientStyles:()=>($r(),V(Hr)).default});n();n();var pe=g(require("react")),ad=require("@fortawesome/free-solid-svg-icons"),id=require("@fortawesome/react-fontawesome"),cd=g(require("classnames"));I();lo();var kx=({styles:e,amount:o,type:t,tokenDetails:c})=>{let{network:s}=Ke(),{identifier:p,tokenAvatar:m,name:_}=c,d="SemiFungibleESDT"===t,x=Array(Math.min(4,Number(o))).fill(null);return pe.default.createElement("div",{onClick:w=>{var L;if(!p)return;let A=ar({explorerAddress:s.explorerAddress,to:Ho.nftDetails(p)});w.preventDefault(),w.stopPropagation(),(L=ge.safeWindow)!=null&&L.open&&ge.safeWindow.open(A)},className:e==null?void 0:e.confirmAmountNftSft},pe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},m?pe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},x.map((w,A)=>pe.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${A}`,style:{opacity:1-.25*A,zIndex:x.length-A,marginLeft:(x.length-A-1)*4},className:(0,cd.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:A===0})}))):pe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},pe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},d?"SFT":"NFT")),pe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},pe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},_),pe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),pe.default.createElement(id.FontAwesomeIcon,{icon:ad.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},sd=D(kx,{ssrStyles:()=>Promise.resolve().then(()=>(qr(),jr)),clientStyles:()=>(qr(),V(jr)).default});n();n();var pd=require("react"),md=()=>{let[e,o]=(0,pd.useState)(!0),t=p=>p.getBoundingClientRect().width,c=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:e,handleAmountReference:p=>{if(!p)return;let m=p.firstChild,_={parent:p.offsetWidth,firstChild:c(m)};if(!!m){for(;_.parent<t(m);){let d=_.firstChild-.1,f={fontSize:`${d}px`},x={firstChild:d};Object.assign(m.style,f),Object.assign(_,x)}o(!1)}}}};var Nx=({styles:e,currentTransaction:o})=>{let{tokenId:t,nonce:c,amount:s}=o.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:m}=md(),_=c&&c.length>0?`${t}-${c}`:t,d=rs({tokenId:_}),{price:f}=Vm(),{type:x,esdtPrice:y,isLoading:w,identifier:A}=d,L=!t,q=L?f:y,Z=x?["SemiFungibleESDT","NonFungibleESDT"].includes(x):!1;return Se.default.createElement("div",{className:e==null?void 0:e.confirmAmount},Se.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},w?Se.default.createElement(Fr,null):Se.default.createElement(qm,{amount:s,type:x,identifier:A})),Se.default.createElement("div",{className:e==null?void 0:e.confirmAmountWrapper},Se.default.createElement(Fr,{className:(0,Xr.default)(e==null?void 0:e.confirmAmountLoading,{[e==null?void 0:e.confirmAmountLoadingVisible]:w||p})}),Se.default.createElement("div",{className:(0,Xr.default)(e==null?void 0:e.confirmAmountContent,{[e==null?void 0:e.confirmAmountContentHidden]:w||p})},Z?Se.default.createElement(sd,{amount:s,type:x,tokenDetails:d}):Se.default.createElement(td,{isNftOrSft:Z,isEgld:L,amount:s,handleReference:m,currentTransaction:o,tokenDetails:d,tokenPrice:q}))))},Ex=D(Nx,{ssrStyles:()=>Promise.resolve().then(()=>(Kr(),zr)),clientStyles:()=>(Kr(),V(zr)).default});0&&(module.exports={ConfirmAmount});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=ConfirmAmount.js.map
