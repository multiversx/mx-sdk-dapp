"use strict";var hl=Object.create;var Jo=Object.defineProperty,xl=Object.defineProperties,yl=Object.getOwnPropertyDescriptor,Sl=Object.getOwnPropertyDescriptors,bl=Object.getOwnPropertyNames,Cn=Object.getOwnPropertySymbols,wl=Object.getPrototypeOf,Vt=Object.prototype.hasOwnProperty,ba=Object.prototype.propertyIsEnumerable;var Sa=(e,o,t)=>o in e?Jo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,T=(e,o)=>{for(var t in o||(o={}))Vt.call(o,t)&&Sa(e,t,o[t]);if(Cn)for(var t of Cn(o))ba.call(o,t)&&Sa(e,t,o[t]);return e},A=(e,o)=>xl(e,Sl(o));var Be=(e,o)=>{var t={};for(var r in e)Vt.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Cn)for(var r of Cn(e))o.indexOf(r)<0&&ba.call(e,r)&&(t[r]=e[r]);return t};var x=(e,o)=>()=>(e&&(o=e(e=0)),o);var v=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Se=(e,o)=>{for(var t in o)Jo(e,t,{get:o[t],enumerable:!0})},wa=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of bl(o))!Vt.call(e,c)&&c!==t&&Jo(e,c,{get:()=>o[c],enumerable:!(r=yl(o,c))||r.enumerable});return e};var b=(e,o,t)=>(t=e!=null?hl(wl(e)):{},wa(o||!e||!e.__esModule?Jo(t,"default",{value:e,enumerable:!0}):t,e)),ie=e=>wa(Jo({},"__esModule",{value:!0}),e);var g=(e,o,t)=>new Promise((r,c)=>{var p=l=>{try{d(t.next(l))}catch(_){c(_)}},m=l=>{try{d(t.throw(l))}catch(_){c(_)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var Aa=v(Nn=>{"use strict";n();Nn.byteLength=Il;Nn.toByteArray=kl;Nn.fromByteArray=Pl;var se=[],Q=[],vl=typeof Uint8Array!="undefined"?Uint8Array:Array,$t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for($e=0,va=$t.length;$e<va;++$e)se[$e]=$t[$e],Q[$t.charCodeAt($e)]=$e;var $e,va;Q["-".charCodeAt(0)]=62;Q["_".charCodeAt(0)]=63;function Ia(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function Il(e){var o=Ia(e),t=o[0],r=o[1];return(t+r)*3/4-r}function Al(e,o,t){return(o+t)*3/4-t}function kl(e){var o,t=Ia(e),r=t[0],c=t[1],p=new vl(Al(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=Q[e.charCodeAt(l)]<<18|Q[e.charCodeAt(l+1)]<<12|Q[e.charCodeAt(l+2)]<<6|Q[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Q[e.charCodeAt(l)]<<2|Q[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=Q[e.charCodeAt(l)]<<10|Q[e.charCodeAt(l+1)]<<4|Q[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Ll(e){return se[e>>18&63]+se[e>>12&63]+se[e>>6&63]+se[e&63]}function El(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Ll(r));return c.join("")}function Pl(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,d=t-r;m<d;m+=p)c.push(El(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],c.push(se[o>>2]+se[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(se[o>>10]+se[o>>4&63]+se[o<<2&63]+"=")),c.join("")}});var ka=v(qt=>{n();qt.read=function(e,o,t,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,_=l>>1,h=-7,f=t?c-1:0,w=t?-1:1,E=e[o+f];for(f+=w,p=E&(1<<-h)-1,E>>=-h,h+=d;h>0;p=p*256+e[o+f],f+=w,h-=8);for(m=p&(1<<-h)-1,p>>=-h,h+=r;h>0;m=m*256+e[o+f],f+=w,h-=8);if(p===0)p=1-_;else{if(p===l)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-_}return(E?-1:1)*m*Math.pow(2,p-r)};qt.write=function(e,o,t,r,c,p){var m,d,l,_=p*8-c-1,h=(1<<_)-1,f=h>>1,w=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:p-1,P=r?1:-1,U=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=h):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+f>=1?o+=w/l:o+=w*Math.pow(2,1-f),o*l>=2&&(m++,l/=2),m+f>=h?(d=0,m=h):m+f>=1?(d=(o*l-1)*Math.pow(2,c),m=m+f):(d=o*Math.pow(2,f-1)*Math.pow(2,c),m=0));c>=8;e[t+E]=d&255,E+=P,d/=256,c-=8);for(m=m<<c|d,_+=c;_>0;e[t+E]=m&255,E+=P,m/=256,_-=8);e[t+E-P]|=U*128}});var Wa=v(uo=>{"use strict";n();var jt=Aa(),_o=ka(),La=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;uo.Buffer=u;uo.SlowBuffer=Ol;uo.INSPECT_MAX_BYTES=50;var Rn=2147483647;uo.kMaxLength=Rn;u.TYPED_ARRAY_SUPPORT=Cl();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Cl(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function be(e){if(e>Rn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,u.prototype),o}function u(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Yt(e)}return Ca(e,o,t)}u.poolSize=8192;function Ca(e,o,t){if(typeof e=="string")return Rl(e,o);if(ArrayBuffer.isView(e))return Dl(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ce(e,ArrayBuffer)||e&&ce(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ce(e,SharedArrayBuffer)||e&&ce(e.buffer,SharedArrayBuffer)))return Kt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return u.from(r,o,t);var c=Ml(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return u.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}u.from=function(e,o,t){return Ca(e,o,t)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function Na(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Nl(e,o,t){return Na(e),e<=0?be(e):o!==void 0?typeof t=="string"?be(e).fill(o,t):be(e).fill(o):be(e)}u.alloc=function(e,o,t){return Nl(e,o,t)};function Yt(e){return Na(e),be(e<0?0:Jt(e)|0)}u.allocUnsafe=function(e){return Yt(e)};u.allocUnsafeSlow=function(e){return Yt(e)};function Rl(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!u.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Ra(e,o)|0,r=be(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function zt(e){for(var o=e.length<0?0:Jt(e.length)|0,t=be(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function Dl(e){if(ce(e,Uint8Array)){var o=new Uint8Array(e);return Kt(o.buffer,o.byteOffset,o.byteLength)}return zt(e)}function Kt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,u.prototype),r}function Ml(e){if(u.isBuffer(e)){var o=Jt(e.length)|0,t=be(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Zt(e.length)?be(0):zt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return zt(e.data)}function Jt(e){if(e>=Rn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Rn.toString(16)+" bytes");return e|0}function Ol(e){return+e!=e&&(e=0),u.alloc(+e)}u.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==u.prototype};u.compare=function(o,t){if(ce(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),ce(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(o)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};u.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return u.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=u.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(ce(m,Uint8Array))p+m.length>c.length?u.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(u.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Ra(e,o){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ce(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Xt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ua(e).length;default:if(c)return r?-1:Xt(e).length;o=(""+o).toLowerCase(),c=!0}}u.byteLength=Ra;function Bl(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return zl(this,o,t);case"utf8":case"utf-8":return Ma(this,o,t);case"ascii":return ql(this,o,t);case"latin1":case"binary":return jl(this,o,t);case"base64":return Vl(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Kl(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}u.prototype._isBuffer=!0;function qe(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}u.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)qe(this,t,t+1);return this};u.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)qe(this,t,t+3),qe(this,t+1,t+2);return this};u.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)qe(this,t,t+7),qe(this,t+1,t+6),qe(this,t+2,t+5),qe(this,t+3,t+4);return this};u.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ma(this,0,o):Bl.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(o){if(!u.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:u.compare(this,o)===0};u.prototype.inspect=function(){var o="",t=uo.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};La&&(u.prototype[La]=u.prototype.inspect);u.prototype.compare=function(o,t,r,c,p){if(ce(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),!u.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-t,l=Math.min(m,d),_=this.slice(c,p),h=o.slice(t,r),f=0;f<l;++f)if(_[f]!==h[f]){m=_[f],d=h[f];break}return m<d?-1:d<m?1:0};function Da(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Zt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=u.from(o,r)),u.isBuffer(o))return o.length===0?-1:Ea(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ea(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function Ea(e,o,t,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(E,P){return p===1?E[P]:E.readUInt16BE(P*p)}var _;if(c){var h=-1;for(_=t;_<m;_++)if(l(e,_)===l(o,h===-1?0:_-h)){if(h===-1&&(h=_),_-h+1===d)return h*p}else h!==-1&&(_-=_-h),h=-1}else for(t+d>m&&(t=m-d),_=t;_>=0;_--){for(var f=!0,w=0;w<d;w++)if(l(e,_+w)!==l(o,w)){f=!1;break}if(f)return _}return-1}u.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};u.prototype.indexOf=function(o,t,r){return Da(this,o,t,r,!0)};u.prototype.lastIndexOf=function(o,t,r){return Da(this,o,t,r,!1)};function Fl(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Zt(d))return m;e[t+m]=d}return m}function Ul(e,o,t,r){return Dn(Xt(o,e.length-t),e,t,r)}function Wl(e,o,t,r){return Dn(Jl(o),e,t,r)}function Gl(e,o,t,r){return Dn(Ua(o),e,t,r)}function Hl(e,o,t,r){return Dn(Zl(o,e.length-t),e,t,r)}u.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Fl(this,o,t,r);case"utf8":case"utf-8":return Ul(this,o,t,r);case"ascii":case"latin1":case"binary":return Wl(this,o,t,r);case"base64":return Gl(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Hl(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Vl(e,o,t){return o===0&&t===e.length?jt.fromByteArray(e):jt.fromByteArray(e.slice(o,t))}function Ma(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,_,h,f;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(f=(p&31)<<6|l&63,f>127&&(m=f));break;case 3:l=e[c+1],_=e[c+2],(l&192)===128&&(_&192)===128&&(f=(p&15)<<12|(l&63)<<6|_&63,f>2047&&(f<55296||f>57343)&&(m=f));break;case 4:l=e[c+1],_=e[c+2],h=e[c+3],(l&192)===128&&(_&192)===128&&(h&192)===128&&(f=(p&15)<<18|(l&63)<<12|(_&63)<<6|h&63,f>65535&&f<1114112&&(m=f))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return $l(r)}var Pa=4096;function $l(e){var o=e.length;if(o<=Pa)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=Pa));return t}function ql(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function jl(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function zl(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=Ql[e[p]];return c}function Kl(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}u.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,u.prototype),c};function W(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||W(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};u.prototype.readUintBE=u.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||W(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};u.prototype.readUint8=u.prototype.readUInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]|this[o+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]<<8|this[o+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};u.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||W(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};u.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||W(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};u.prototype.readInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};u.prototype.readInt16LE=function(o,t){o=o>>>0,t||W(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};u.prototype.readInt16BE=function(o,t){o=o>>>0,t||W(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};u.prototype.readInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};u.prototype.readInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};u.prototype.readFloatLE=function(o,t){return o=o>>>0,t||W(o,4,this.length),_o.read(this,o,!0,23,4)};u.prototype.readFloatBE=function(o,t){return o=o>>>0,t||W(o,4,this.length),_o.read(this,o,!1,23,4)};u.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||W(o,8,this.length),_o.read(this,o,!0,52,8)};u.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||W(o,8,this.length),_o.read(this,o,!1,52,8)};function z(e,o,t,r,c,p){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;z(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;z(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};u.prototype.writeUint8=u.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,1,255,0),this[t]=o&255,t+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};u.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);z(this,o,t,r,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};u.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);z(this,o,t,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};u.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};u.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};u.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};u.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};u.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||z(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Oa(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ba(e,o,t,r,c){return o=+o,t=t>>>0,c||Oa(e,o,t,4,34028234663852886e22,-34028234663852886e22),_o.write(e,o,t,r,23,4),t+4}u.prototype.writeFloatLE=function(o,t,r){return Ba(this,o,t,!0,r)};u.prototype.writeFloatBE=function(o,t,r){return Ba(this,o,t,!1,r)};function Fa(e,o,t,r,c){return o=+o,t=t>>>0,c||Oa(e,o,t,8,17976931348623157e292,-17976931348623157e292),_o.write(e,o,t,r,52,8),t+8}u.prototype.writeDoubleLE=function(o,t,r){return Fa(this,o,t,!0,r)};u.prototype.writeDoubleBE=function(o,t,r){return Fa(this,o,t,!1,r)};u.prototype.copy=function(o,t,r,c){if(!u.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};u.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!u.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=u.isBuffer(o)?o:u.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%l]}return this};var Xl=/[^+/0-9A-Za-z-_]/g;function Yl(e){if(e=e.split("=")[0],e=e.trim().replace(Xl,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Xt(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Jl(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Zl(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function Ua(e){return jt.toByteArray(Yl(e))}function Dn(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function ce(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Zt(e){return e!==e}var Ql=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var qa=v((fy,$a)=>{n();var B=$a.exports={},pe,me;function Qt(){throw new Error("setTimeout has not been defined")}function er(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?pe=setTimeout:pe=Qt}catch(e){pe=Qt}try{typeof clearTimeout=="function"?me=clearTimeout:me=er}catch(e){me=er}})();function Ga(e){if(pe===setTimeout)return setTimeout(e,0);if((pe===Qt||!pe)&&setTimeout)return pe=setTimeout,setTimeout(e,0);try{return pe(e,0)}catch(o){try{return pe.call(null,e,0)}catch(t){return pe.call(this,e,0)}}}function e_(e){if(me===clearTimeout)return clearTimeout(e);if((me===er||!me)&&clearTimeout)return me=clearTimeout,clearTimeout(e);try{return me(e)}catch(o){try{return me.call(null,e)}catch(t){return me.call(this,e)}}}var we=[],go=!1,je,Mn=-1;function o_(){!go||!je||(go=!1,je.length?we=je.concat(we):Mn=-1,we.length&&Ha())}function Ha(){if(!go){var e=Ga(o_);go=!0;for(var o=we.length;o;){for(je=we,we=[];++Mn<o;)je&&je[Mn].run();Mn=-1,o=we.length}je=null,go=!1,e_(e)}}B.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];we.push(new Va(e,o)),we.length===1&&!go&&Ga(Ha)};function Va(e,o){this.fun=e,this.array=o}Va.prototype.run=function(){this.fun.apply(null,this.array)};B.title="browser";B.browser=!0;B.env={};B.argv=[];B.version="";B.versions={};function ve(){}B.on=ve;B.addListener=ve;B.once=ve;B.off=ve;B.removeListener=ve;B.removeAllListeners=ve;B.emit=ve;B.prependListener=ve;B.prependOnceListener=ve;B.listeners=function(e){return[]};B.binding=function(e){throw new Error("process.binding is not supported")};B.cwd=function(){return"/"};B.chdir=function(e){throw new Error("process.chdir is not supported")};B.umask=function(){return 0}});var a,s,n_,i,n=x(()=>{a=b(Wa()),s=b(qa()),n_=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=n_});var ja=x(()=>{"use strict";n()});var de=x(()=>{"use strict";n()});var za=x(()=>{"use strict";n()});var or,Ka=x(()=>{"use strict";n();or=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(or||{})});var Xa=x(()=>{"use strict";n()});var nr=x(()=>{"use strict";n()});var Ya=x(()=>{"use strict";n()});var tr=x(()=>{"use strict";n()});var Ja=x(()=>{"use strict";n()});var Za=x(()=>{"use strict";n()});var Fe,fo,Ue=x(()=>{"use strict";n();Fe=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),fo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Qa,Ly,ei,Ey,N=x(()=>{"use strict";n();Ue();Qa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Qa||{}),Ly=T(T({},fo.WindowProviderRequestEnums),Qa),ei=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ei||{}),Ey=T(T({},fo.WindowProviderResponseEnums),ei)});var oi=x(()=>{"use strict";n()});var ni=x(()=>{"use strict";n()});var K=x(()=>{"use strict";n()});var ti=x(()=>{"use strict";n()});var ri=x(()=>{"use strict";n()});var ai=x(()=>{"use strict";n()});var C=x(()=>{"use strict";n();tr();Ja();Za();N();oi();ni();K();ti();ri();ai()});var To,ii,jy,si,zy,ci,Ky,Xy,t_,On,ze=x(()=>{"use strict";n();C();To={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ii,egldLabel:jy}=To["devnet"],{chainId:si,egldLabel:zy}=To["testnet"],{chainId:ci,egldLabel:Ky}=To["mainnet"],Xy={["devnet"]:ii,["testnet"]:si,["mainnet"]:ci},t_={[ii]:"devnet",[si]:"testnet",[ci]:"mainnet"},On=3e3});var ho=x(()=>{"use strict";n()});var le,pi=x(()=>{"use strict";n();le=require("@multiversx/sdk-web-wallet-provider")});var te,Zo=x(()=>{"use strict";n();te=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var mi,di,rr,oS,nS,ar=x(()=>{"use strict";n();Zo();rr=String((di=(mi=te.safeWindow)==null?void 0:mi.navigator)==null?void 0:di.userAgent),oS=/^((?!chrome|android).)*safari/i.test(rr),nS=/firefox/i.test(rr)&&/windows/i.test(rr)});var Bn,Fn,li,Qo,ir,Un,_i,xo,Wn,k=x(()=>{"use strict";n();ja();de();za();Ka();Xa();nr();Ya();ze();ho();pi();ar();Bn=5e4,Fn=1e9,li=1,Qo="signSession",ir="sdk-dapp-version",Un="logout",_i="login",xo="0",Wn="-"});var yo,Gn=x(()=>{"use strict";n();yo=()=>Date.now()/1e3});var ui=x(()=>{"use strict";n()});var gi=x(()=>{"use strict";n()});var sr=x(()=>{"use strict";n();Gn();ui();gi()});var cr={};Se(cr,{clear:()=>s_,getItem:()=>a_,localStorageKeys:()=>Y,removeItem:()=>i_,setItem:()=>r_});var Y,Hn,r_,a_,i_,s_,Ke=x(()=>{"use strict";n();sr();Y={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Hn=typeof localStorage!="undefined",r_=({key:e,data:o,expires:t})=>{!Hn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},a_=e=>{if(!Hn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:yo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},i_=e=>{!Hn||localStorage.removeItem(String(e))},s_=()=>{!Hn||localStorage.clear()}});var pr={};Se(pr,{clear:()=>xi,getItem:()=>Ti,removeItem:()=>hi,setItem:()=>fi,storage:()=>c_});var fi,Ti,hi,xi,c_,yi=x(()=>{"use strict";n();fi=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ti=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},hi=e=>sessionStorage.removeItem(String(e)),xi=()=>sessionStorage.clear(),c_={setItem:fi,getItem:Ti,removeItem:hi,clear:xi}});var _e,So=x(()=>{"use strict";n();Ke();yi();_e={session:pr,local:cr}});var mr,M,J,O=x(()=>{"use strict";n();mr=require("@reduxjs/toolkit");k();M=(0,mr.createAction)(Un),J=(0,mr.createAction)(_i,e=>({payload:e}))});var lr,Si,bi,Vn,dr,wi,en,p_,$n,RS,m_,d_,DS,MS,OS,vi,Ii,qn,jn=x(()=>{"use strict";n();lr=require("@multiversx/sdk-core"),Si=require("@reduxjs/toolkit"),bi=require("redux-persist");k();So();Ke();O();Vn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:xo},dr={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Vn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},wi=(0,Si.createSlice)({name:"accountInfoSlice",initialState:dr,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new lr.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Vn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(M,()=>(_e.local.removeItem(Y.loginExpiresAt),dr)),e.addCase(J,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new lr.Address(r).hex()}),e.addCase(bi.REHYDRATE,(o,t)=>{var _;if(!((_=t.payload)!=null&&_.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:dr.accounts,o.publicKey=d})}}),{setAccount:en,setAddress:p_,setAccountNonce:$n,setAccountShard:RS,setLedgerAccount:m_,updateLedgerAccount:d_,setWalletConnectAccount:DS,setIsAccountLoading:MS,setAccountLoadingError:OS,setWebsocketEvent:vi,setWebsocketBatchEvent:Ii}=wi.actions,qn=wi.reducer});function on(){return new Date().setHours(new Date().getHours()+24)}function nn(e){_e.local.setItem({key:Y.loginExpiresAt,data:e,expires:e})}var _r=x(()=>{"use strict";n();So();Ke()});var ki,Ai,Li,jS,l_,__,Ei,zS,u_,Pi,KS,XS,YS,zn,Kn=x(()=>{"use strict";n();ki=require("@reduxjs/toolkit");_r();N();O();Ai={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Li=(0,ki.createSlice)({name:"loginInfoSlice",initialState:Ai,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(M,()=>Ai),e.addCase(J,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,nn(on())})}}),{setLoginMethod:jS,setWalletConnectLogin:l_,setLedgerLogin:__,setTokenLogin:Ei,setTokenLoginSignature:zS,setWalletLogin:u_,invalidateLoginSession:Pi,setLogoutRoute:KS,setIsWalletConnectV2Initialized:XS,setWebviewLogin:YS}=Li.actions,zn=Li.reducer});var Ni,Ci,Ri,Di,g_,eb,f_,Xn,Yn=x(()=>{"use strict";n();Ni=require("@reduxjs/toolkit");O();Ci={},Ri=(0,Ni.createSlice)({name:"modalsSlice",initialState:Ci,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(M,()=>Ci)}}),{setTxSubmittedModal:Di,setNotificationModal:g_,clearTxSubmittedModal:eb,clearNotificationModal:f_}=Ri.actions,Xn=Ri.reducer});var Ie,bo=x(()=>{"use strict";n();Ie=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var R,V=x(()=>{"use strict";n();bo();R=()=>{if(!Ie())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var wo,Mi=x(()=>{"use strict";n();V();wo=(e="")=>{let o=R(),t=e.startsWith("http")||e.startsWith("www.");return!o.origin||e.startsWith(o.origin)||t?e:`${o.origin}/${e.replace("/","")}`}});var Oi=x(()=>{"use strict";n();q()});var Bi,Fi=x(()=>{"use strict";n();Zo();Bi=e=>{if(!te.safeWindow.location)return;if(!new URL(te.safeWindow.location.href).protocol.startsWith("http"))return te.safeWindow.location.reload();te.safeWindow.location.assign(e)}});var q=x(()=>{"use strict";n();Mi();Oi();V();Fi()});var Ui,Wi,vo,Io=x(()=>{"use strict";n();q();Ui=!1,Wi=(e=!0)=>{Ui=e},vo=({timeout:e=0,url:o})=>{Ui||setTimeout(()=>{if(!!window)return Bi(o)},e)}});var Gi=x(()=>{"use strict";n();Io()});function Hi(e){return e[Math.floor(Math.random()*e.length)]}var Vi=x(()=>{"use strict";n()});var ur=x(()=>{"use strict";n();nr()});var Ae=x(()=>{"use strict";n();Gi();Vi();ur()});var $i,qi,ji,gr,h_,zi,Nb,Rb,x_,Jn,Zn=x(()=>{"use strict";n();$i=require("@reduxjs/toolkit"),qi=b(require("lodash.omit")),ji=require("redux-persist");ho();O();Ae();gr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},h_={network:gr},zi=(0,$i.createSlice)({name:"appConfig",initialState:h_,reducers:{initializeNetworkConfig:(e,o)=>{let t=Hi(o.payload.walletConnectV2RelayAddresses),r=(0,qi.default)(o.payload,"walletConnectV2RelayAddresses");e.network=A(T(T({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=T(T({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(M,o=>{o.network.customWalletAddress=void 0}),e.addCase(ji.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:Nb,updateNetworkConfig:Rb,setCustomWalletAddress:x_}=zi.actions,Jn=zi.reducer});var Ki,fr,Xi,Ub,Wb,Gb,Qn,et=x(()=>{"use strict";n();Ki=require("@reduxjs/toolkit");C();O();fr={isSigning:!1,signedSessions:{}},Xi=(0,Ki.createSlice)({name:"signedMessageInfoSliceState",initialState:fr,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=T(T({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>T(T({},e),o.payload),clearSignedMessageInfo:()=>fr},extraReducers:e=>{e.addCase(M,()=>fr)}}),{setSignSession:Ub,clearSignedMessageInfo:Wb,setSignSessionState:Gb}=Xi.actions,Qn=Xi.reducer});var Ji,Zi,Yi,Qi,Tr,y_,Kb,S_,ot,nt=x(()=>{"use strict";n();Ji=require("@reduxjs/toolkit"),Zi=require("redux-persist");C();Gn();O();Yi={customToasts:[],transactionToasts:[]},Qi=(0,Ji.createSlice)({name:"toastsSlice",initialState:Yi,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=A(T(T({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(A(T({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:yo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(M,()=>Yi),e.addCase(Zi.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Tr,removeCustomToast:y_,addTransactionToast:Kb,removeTransactionToast:S_}=Qi.actions,ot=Qi.reducer});var es,xr,yr,Sr,b_,hr,os,Zb,w_,br,tt,rt=x(()=>{"use strict";n();es=require("@reduxjs/toolkit");O();xr="Transaction failed",yr="Transaction successful",Sr="Processing transaction",b_="Transaction submitted",hr={},os=(0,es.createSlice)({name:"transactionsInfo",initialState:hr,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||xr,successMessage:(r==null?void 0:r.successMessage)||yr,processingMessage:(r==null?void 0:r.processingMessage)||Sr,submittedMessage:(r==null?void 0:r.submittedMessage)||b_,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>hr},extraReducers:e=>{e.addCase(M,()=>hr)}}),{clearTransactionsInfo:Zb,setTransactionsDisplayInfo:w_,clearTransactionsInfoForSessionId:br}=os.actions,tt=os.reducer});function ke(e){return e!=null&&(R_(e)||F_(e))}function Xe(e){return e!=null&&(D_(e)||U_(e))}function Ye(e){return e!=null&&(M_(e)||W_(e))}function ns(e){return e!=null&&(O_(e)||G_(e))}function wr(e){return e!=null&&B_(e)}function R_(e){return e!=null&&v_.includes(e)}function D_(e){return e!=null&&I_.includes(e)}function M_(e){return e!=null&&A_.includes(e)}function O_(e){return e!=null&&k_.includes(e)}function B_(e){return e!=null&&L_.includes(e)}function F_(e){return e!=null&&E_.includes(e)}function U_(e){return e!=null&&P_.includes(e)}function W_(e){return e!=null&&C_.includes(e)}function G_(e){return e!=null&&N_.includes(e)}var v_,I_,A_,k_,L_,E_,P_,C_,N_,Ao=x(()=>{"use strict";n();N();v_=["sent"],I_=["success"],A_=["fail","cancelled","timedOut"],k_=["invalid"],L_=["timedOut"],E_=["pending"],P_=["success"],C_=["fail","invalid"],N_=["not executed"]});var ts,rs,tn,H_,as,ge,fe,V_,ko,$_,q_,s0,j_,rn,vr,c0,at,it=x(()=>{"use strict";n();ts=require("@reduxjs/toolkit"),rs=require("redux-persist");N();Ao();O();tn={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},H_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},as=(0,ts.createSlice)({name:"transactionsSlice",initialState:tn,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,_;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=T(T(T({},H_),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:T(T({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((_=e==null?void 0:e.transactionsToSign)==null?void 0:_.sessionId)===t&&(e.transactionsToSign=tn.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=T(T({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var _,h,f,w,E,P,U,xe;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(h=(_=e.signedTransactions)==null?void 0:_[t])==null?void 0:h.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(j=>j.hash===p?A(T(T({},m!=null?m:{}),j),{status:r,errorMessage:c,inTransit:d}):j);let ye=(w=(f=e.signedTransactions[t])==null?void 0:f.transactions)==null?void 0:w.every(j=>Xe(j.status)),mo=(P=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:P.some(j=>Ye(j.status)),Me=(xe=(U=e.signedTransactions[t])==null?void 0:U.transactions)==null?void 0:xe.every(j=>ns(j.status));ye&&(e.signedTransactions[t].status="success"),mo&&(e.signedTransactions[t].status="fail"),Me&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=tn.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=tn.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=T(T({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(M,()=>tn),e.addCase(rs.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((d,[l,_])=>{let h=new Date(l),f=new Date;return f.setHours(f.getHours()+5),f-h>0||(d[l]=_),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ge,updateSignedTransactions:fe,setTransactionsToSign:V_,clearAllTransactionsToSign:ko,clearAllSignedTransactions:$_,clearSignedTransaction:q_,clearTransactionToSign:s0,setSignTransactionsError:j_,setSignTransactionsCancelMessage:rn,moveTransactionsToSignedState:vr,updateSignedTransactionsCustomTransactionInformation:c0}=as.actions,at=as.reducer});var is,Ir,ss,cs,ps,ms,l0,st,ct=x(()=>{"use strict";n();is=require("@reduxjs/toolkit");O();Ir={},ss=(0,is.createSlice)({name:"batchTransactionsSlice",initialState:Ir,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ir},extraReducers:e=>{e.addCase(M,()=>Ir)}}),{setBatchTransactions:cs,updateBatchTransactions:ps,clearBatchTransactions:ms,clearAllBatchTransactions:l0}=ss.actions,st=ss.reducer});var ls,ds,_s,f0,us,Ar=x(()=>{"use strict";n();ls=require("@reduxjs/toolkit");O();ds={},_s=(0,ls.createSlice)({name:"dappConfigSlice",initialState:ds,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(M,()=>ds)}}),{setDappConfig:f0}=_s.actions,us=_s.reducer});var L=x(()=>{"use strict";n();jn();Kn();Yn();Zn();et();nt();rt();it();ct();Ar()});var kr=x(()=>{"use strict";n()});var Ts,Y_,J_,Je,dt=x(()=>{"use strict";n();Ts=require("@reduxjs/toolkit");kr();jn();ct();Ar();Kn();Yn();Zn();et();nt();rt();it();Y_={["account"]:qn,["dappConfig"]:us,["loginInfo"]:zn,["modals"]:Xn,["networkConfig"]:Jn,["signedMessageInfo"]:Qn,["toasts"]:ot,["transactionsInfo"]:tt,["transactions"]:at,["batchTransactions"]:st},J_=(e={})=>(0,Ts.combineReducers)(T(T({},Y_),e)),Je=J_});var Ss={};Se(Ss,{default:()=>_u,sessionStorageReducers:()=>Lr});function Le(e,o=[]){return{key:e,version:1,storage:xs.default,blacklist:o}}var X,hs,xs,Z_,an,Q_,eu,ou,nu,tu,ru,au,iu,su,cu,ys,pu,Lr,mu,du,lu,_u,bs=x(()=>{"use strict";n();X=require("redux-persist"),hs=b(require("redux-persist/lib/storage")),xs=b(require("redux-persist/lib/storage/session"));dt();L();jn();ct();Kn();Yn();Zn();et();nt();rt();it();kr();Z_={persistReducersStorageType:"localStorage"},an={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Q_=Le(an["account"]),eu=Le(an["loginInfo"]),ou=Le(an["modals"]),nu=Le(an["networkConfig"]),tu={2:e=>A(T({},e),{networkConfig:gr})};ru=Le("sdk-dapp-transactionsInfo"),au=Le("sdk-dapp-transactions",["transactionsToSign"]),iu=Le("sdk-dapp-batchTransactions",["batchTransactions"]),su=Le("sdk-dapp-toasts"),cu=Le("sdk-dapp-signedMessageInfo"),ys={key:"sdk-dapp-store",version:2,storage:hs.default,whitelist:Object.keys(an),migrate:(0,X.createMigrate)(tu,{debug:!1})},pu=A(T({},ys),{whitelist:[]}),Lr={["toasts"]:(0,X.persistReducer)(su,ot),["transactions"]:(0,X.persistReducer)(au,at),["transactionsInfo"]:(0,X.persistReducer)(ru,tt),["batchTransactions"]:(0,X.persistReducer)(iu,st),["signedMessageInfo"]:(0,X.persistReducer)(cu,Qn)},mu=A(T({},Lr),{["account"]:(0,X.persistReducer)(Q_,qn),["loginInfo"]:(0,X.persistReducer)(eu,zn),["modals"]:(0,X.persistReducer)(ou,Xn),["networkConfig"]:(0,X.persistReducer)(nu,Jn)}),du=Z_.persistReducersStorageType==="localStorage",lu=du?(0,X.persistReducer)(ys,Je(Lr)):(0,X.persistReducer)(pu,Je(mu)),_u=lu});var ws={};Se(ws,{default:()=>uu});var uu,vs=x(()=>{"use strict";n();dt();uu=Je()});var Is={};Se(Is,{default:()=>fu});var oe,gu,fu,As=x(()=>{"use strict";n();oe=require("redux-persist"),gu=[oe.FLUSH,oe.REHYDRATE,oe.PAUSE,oe.PERSIST,oe.PURGE,oe.REGISTER],fu=gu});var Es={};Se(Es,{default:()=>Ls});function Ls(e){return(0,ks.persistStore)(e)}var ks,Ps=x(()=>{"use strict";n();ks=require("redux-persist")});var jc=v((Z2,qc)=>{n();var Vg=typeof i=="object"&&i&&i.Object===Object&&i;qc.exports=Vg});var xn=v((Q2,zc)=>{n();var $g=jc(),qg=typeof self=="object"&&self&&self.Object===Object&&self,jg=$g||qg||Function("return this")();zc.exports=jg});var Yr=v((eM,Kc)=>{n();var zg=xn(),Kg=zg.Symbol;Kc.exports=Kg});var Zc=v((oM,Jc)=>{n();var Xc=Yr(),Yc=Object.prototype,Xg=Yc.hasOwnProperty,Yg=Yc.toString,yn=Xc?Xc.toStringTag:void 0;function Jg(e){var o=Xg.call(e,yn),t=e[yn];try{e[yn]=void 0;var r=!0}catch(p){}var c=Yg.call(e);return r&&(o?e[yn]=t:delete e[yn]),c}Jc.exports=Jg});var ep=v((nM,Qc)=>{n();var Zg=Object.prototype,Qg=Zg.toString;function ef(e){return Qg.call(e)}Qc.exports=ef});var Jr=v((tM,tp)=>{n();var op=Yr(),of=Zc(),nf=ep(),tf="[object Null]",rf="[object Undefined]",np=op?op.toStringTag:void 0;function af(e){return e==null?e===void 0?rf:tf:np&&np in Object(e)?of(e):nf(e)}tp.exports=af});var ap=v((rM,rp)=>{n();var sf=Array.isArray;rp.exports=sf});var sp=v((aM,ip)=>{n();function cf(e){return e!=null&&typeof e=="object"}ip.exports=cf});var pp=v((iM,cp)=>{n();var pf=Jr(),mf=ap(),df=sp(),lf="[object String]";function _f(e){return typeof e=="string"||!mf(e)&&df(e)&&pf(e)==lf}cp.exports=_f});var Ct=v((oO,hp)=>{n();function Df(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}hp.exports=Df});var yp=v((nO,xp)=>{n();var Mf=Jr(),Of=Ct(),Bf="[object AsyncFunction]",Ff="[object Function]",Uf="[object GeneratorFunction]",Wf="[object Proxy]";function Gf(e){if(!Of(e))return!1;var o=Mf(e);return o==Ff||o==Uf||o==Bf||o==Wf}xp.exports=Gf});var bp=v((tO,Sp)=>{n();var Hf=xn(),Vf=Hf["__core-js_shared__"];Sp.exports=Vf});var Ip=v((rO,vp)=>{n();var oa=bp(),wp=function(){var e=/[^.]+$/.exec(oa&&oa.keys&&oa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $f(e){return!!wp&&wp in e}vp.exports=$f});var kp=v((aO,Ap)=>{n();var qf=Function.prototype,jf=qf.toString;function zf(e){if(e!=null){try{return jf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Ap.exports=zf});var Ep=v((iO,Lp)=>{n();var Kf=yp(),Xf=Ip(),Yf=Ct(),Jf=kp(),Zf=/[\\^$.*+?()[\]{}|]/g,Qf=/^\[object .+?Constructor\]$/,eT=Function.prototype,oT=Object.prototype,nT=eT.toString,tT=oT.hasOwnProperty,rT=RegExp("^"+nT.call(tT).replace(Zf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function aT(e){if(!Yf(e)||Xf(e))return!1;var o=Kf(e)?rT:Qf;return o.test(Jf(e))}Lp.exports=aT});var Cp=v((sO,Pp)=>{n();function iT(e,o){return e==null?void 0:e[o]}Pp.exports=iT});var Nt=v((cO,Np)=>{n();var sT=Ep(),cT=Cp();function pT(e,o){var t=cT(e,o);return sT(t)?t:void 0}Np.exports=pT});var wn=v((pO,Rp)=>{n();var mT=Nt(),dT=mT(Object,"create");Rp.exports=dT});var Op=v((mO,Mp)=>{n();var Dp=wn();function lT(){this.__data__=Dp?Dp(null):{},this.size=0}Mp.exports=lT});var Fp=v((dO,Bp)=>{n();function _T(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Bp.exports=_T});var Wp=v((lO,Up)=>{n();var uT=wn(),gT="__lodash_hash_undefined__",fT=Object.prototype,TT=fT.hasOwnProperty;function hT(e){var o=this.__data__;if(uT){var t=o[e];return t===gT?void 0:t}return TT.call(o,e)?o[e]:void 0}Up.exports=hT});var Hp=v((_O,Gp)=>{n();var xT=wn(),yT=Object.prototype,ST=yT.hasOwnProperty;function bT(e){var o=this.__data__;return xT?o[e]!==void 0:ST.call(o,e)}Gp.exports=bT});var $p=v((uO,Vp)=>{n();var wT=wn(),vT="__lodash_hash_undefined__";function IT(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=wT&&o===void 0?vT:o,this}Vp.exports=IT});var jp=v((gO,qp)=>{n();var AT=Op(),kT=Fp(),LT=Wp(),ET=Hp(),PT=$p();function Bo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Bo.prototype.clear=AT;Bo.prototype.delete=kT;Bo.prototype.get=LT;Bo.prototype.has=ET;Bo.prototype.set=PT;qp.exports=Bo});var Kp=v((fO,zp)=>{n();function CT(){this.__data__=[],this.size=0}zp.exports=CT});var Yp=v((TO,Xp)=>{n();function NT(e,o){return e===o||e!==e&&o!==o}Xp.exports=NT});var vn=v((hO,Jp)=>{n();var RT=Yp();function DT(e,o){for(var t=e.length;t--;)if(RT(e[t][0],o))return t;return-1}Jp.exports=DT});var Qp=v((xO,Zp)=>{n();var MT=vn(),OT=Array.prototype,BT=OT.splice;function FT(e){var o=this.__data__,t=MT(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():BT.call(o,t,1),--this.size,!0}Zp.exports=FT});var om=v((yO,em)=>{n();var UT=vn();function WT(e){var o=this.__data__,t=UT(o,e);return t<0?void 0:o[t][1]}em.exports=WT});var tm=v((SO,nm)=>{n();var GT=vn();function HT(e){return GT(this.__data__,e)>-1}nm.exports=HT});var am=v((bO,rm)=>{n();var VT=vn();function $T(e,o){var t=this.__data__,r=VT(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}rm.exports=$T});var sm=v((wO,im)=>{n();var qT=Kp(),jT=Qp(),zT=om(),KT=tm(),XT=am();function Fo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Fo.prototype.clear=qT;Fo.prototype.delete=jT;Fo.prototype.get=zT;Fo.prototype.has=KT;Fo.prototype.set=XT;im.exports=Fo});var pm=v((vO,cm)=>{n();var YT=Nt(),JT=xn(),ZT=YT(JT,"Map");cm.exports=ZT});var lm=v((IO,dm)=>{n();var mm=jp(),QT=sm(),eh=pm();function oh(){this.size=0,this.__data__={hash:new mm,map:new(eh||QT),string:new mm}}dm.exports=oh});var um=v((AO,_m)=>{n();function nh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}_m.exports=nh});var In=v((kO,gm)=>{n();var th=um();function rh(e,o){var t=e.__data__;return th(o)?t[typeof o=="string"?"string":"hash"]:t.map}gm.exports=rh});var Tm=v((LO,fm)=>{n();var ah=In();function ih(e){var o=ah(this,e).delete(e);return this.size-=o?1:0,o}fm.exports=ih});var xm=v((EO,hm)=>{n();var sh=In();function ch(e){return sh(this,e).get(e)}hm.exports=ch});var Sm=v((PO,ym)=>{n();var ph=In();function mh(e){return ph(this,e).has(e)}ym.exports=mh});var wm=v((CO,bm)=>{n();var dh=In();function lh(e,o){var t=dh(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}bm.exports=lh});var Im=v((NO,vm)=>{n();var _h=lm(),uh=Tm(),gh=xm(),fh=Sm(),Th=wm();function Uo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Uo.prototype.clear=_h;Uo.prototype.delete=uh;Uo.prototype.get=gh;Uo.prototype.has=fh;Uo.prototype.set=Th;vm.exports=Uo});var km=v((RO,Am)=>{n();var hh="__lodash_hash_undefined__";function xh(e){return this.__data__.set(e,hh),this}Am.exports=xh});var Em=v((DO,Lm)=>{n();function yh(e){return this.__data__.has(e)}Lm.exports=yh});var Cm=v((MO,Pm)=>{n();var Sh=Im(),bh=km(),wh=Em();function Rt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Sh;++o<t;)this.add(e[o])}Rt.prototype.add=Rt.prototype.push=bh;Rt.prototype.has=wh;Pm.exports=Rt});var Rm=v((OO,Nm)=>{n();function vh(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Nm.exports=vh});var Mm=v((BO,Dm)=>{n();function Ih(e){return e!==e}Dm.exports=Ih});var Bm=v((FO,Om)=>{n();function Ah(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Om.exports=Ah});var Um=v((UO,Fm)=>{n();var kh=Rm(),Lh=Mm(),Eh=Bm();function Ph(e,o,t){return o===o?Eh(e,o,t):kh(e,Lh,t)}Fm.exports=Ph});var Gm=v((WO,Wm)=>{n();var Ch=Um();function Nh(e,o){var t=e==null?0:e.length;return!!t&&Ch(e,o,0)>-1}Wm.exports=Nh});var Vm=v((GO,Hm)=>{n();function Rh(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}Hm.exports=Rh});var qm=v((HO,$m)=>{n();function Dh(e,o){return e.has(o)}$m.exports=Dh});var zm=v((VO,jm)=>{n();var Mh=Nt(),Oh=xn(),Bh=Mh(Oh,"Set");jm.exports=Bh});var Xm=v(($O,Km)=>{n();function Fh(){}Km.exports=Fh});var na=v((qO,Ym)=>{n();function Uh(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}Ym.exports=Uh});var Zm=v((jO,Jm)=>{n();var ta=zm(),Wh=Xm(),Gh=na(),Hh=1/0,Vh=ta&&1/Gh(new ta([,-0]))[1]==Hh?function(e){return new ta(e)}:Wh;Jm.exports=Vh});var ed=v((zO,Qm)=>{n();var $h=Cm(),qh=Gm(),jh=Vm(),zh=qm(),Kh=Zm(),Xh=na(),Yh=200;function Jh(e,o,t){var r=-1,c=qh,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=jh;else if(p>=Yh){var _=o?null:Kh(e);if(_)return Xh(_);m=!1,c=zh,l=new $h}else l=o?[]:d;e:for(;++r<p;){var h=e[r],f=o?o(h):h;if(h=t||h!==0?h:0,m&&f===f){for(var w=l.length;w--;)if(l[w]===f)continue e;o&&l.push(f),d.push(h)}else c(l,f,t)||(l!==d&&l.push(f),d.push(h))}return d}Qm.exports=Jh});var nd=v((KO,od)=>{n();var Zh=ed();function Qh(e){return e&&e.length?Zh(e):[]}od.exports=Qh});var sa={};Se(sa,{css:()=>xd,default:()=>Dx});var xd,Dx,ca=x(()=>{"use strict";n();xd=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xd));Dx={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Re={};Se(Re,{css:()=>bd,default:()=>Bx});var bd,Bx,De=x(()=>{"use strict";n();bd=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bd));Bx={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var dy={};Se(dy,{CustomComponents:()=>my});module.exports=ie(dy);n();var Xo=b(require("react"));n();n();n();n();var Wd=require("react");n();n();n();var Os=require("react"),Lo=require("react-redux");n();var Er=require("@reduxjs/toolkit"),Ds=require("react-redux/lib/utils/Subscription");L();n();var gs=b(require("lodash.throttle"));k();L();_r();So();Ke();var z_=[Un],pt=!1,K_=(0,gs.default)(()=>{nn(on())},5e3),fs=e=>o=>t=>{if(z_.includes(t.type))return o(t);let r=e.getState(),c=_e.local.getItem(Y.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return nn(on());let m=Date.now();return c-m<0&&!pt?setTimeout(()=>{pt=!0,e.dispatch(Pi())},1e3):(pt&&(pt=!1),K_()),o(t)};n();n();function mt(){return typeof sessionStorage!="undefined"}var Cs=mt()?(bs(),ie(Ss)).default:(vs(),ie(ws)).default,Ns=mt()?(As(),ie(Is)).default:[],Rs=mt()?(Ps(),ie(Es)).default:e=>e;dt();var y=(0,Er.configureStore)({reducer:Cs,middleware:e=>e({serializableCheck:{ignoredActions:[...Ns,$n.type,en.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(fs)}),Ms=(0,Ds.createSubscription)(y),uw=Rs(y),gw=(0,Er.configureStore)({reducer:Je});var Tu={store:y,subscription:Ms},Pr=(0,Os.createContext)(Tu),xw=(0,Lo.createStoreHook)(Pr),D=(0,Lo.createDispatchHook)(Pr),I=(0,Lo.createSelectorHook)(Pr);n();n();L();n();var Bs=b(require("lodash.isequal")),lt=require("reselect"),S=(0,lt.createSelectorCreator)(lt.defaultMemoize,Bs.default);var Te=e=>e.account,Ee=S(Te,e=>e.address),Pe=S(Te,Ee,(e,o)=>o in e.accounts?e.accounts[o]:Vn),Fs=S(Te,Pe,(e,o)=>{let c=e,{accounts:t}=c,r=Be(c,["accounts"]);return A(T({},r),{address:o.address,account:o})}),vw=S(Pe,e=>e.balance),Us=S(Pe,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Iw=S(Te,e=>e.shard),hu=S(Te,e=>e.ledgerAccount),Aw=S(Te,e=>e.walletConnectAccount),kw=S(Te,e=>e.isAccountLoading),Lw=S(Te,e=>e.accountLoadingError),Ws=S(Te,e=>e.websocketEvent),Gs=S(Te,e=>e.websocketBatchEvent);n();var Hs=e=>e.dappConfig,Cw=S(Hs,e=>e.shouldUseWebViewProvider);n();var G=e=>e.loginInfo,xu=S(G,e=>e.loginMethod),sn=S(G,Ee,(e,o)=>Boolean(o)),Mw=S(G,e=>e.walletConnectLogin),yu=S(G,e=>e.ledgerLogin),Vs=S(G,e=>e.walletLogin),Ow=S(G,e=>e.isLoginSessionInvalid),Cr=S(G,e=>e.tokenLogin),Eo=S(G,e=>e.logoutRoute),Su=S(G,e=>e.isWalletConnectV2Initialized);n();var $s=e=>e.modals,Uw=S($s,e=>e.txSubmittedModal),bu=S($s,e=>e.notificationModal);n();var re=e=>e.networkConfig,_t=S(re,e=>e.network.chainId),qs=S(re,e=>e.network.roundDuration),Hw=S(re,e=>e.network.walletConnectBridgeAddress),wu=S(re,e=>e.network.walletConnectV2RelayAddress),vu=S(re,e=>e.network.walletConnectV2ProjectId),Iu=S(re,e=>e.network.walletConnectV2Options),Au=S(re,e=>e.network.walletConnectDeepLink),$=S(re,e=>e.network),cn=S($,e=>e.apiAddress),js=S($,e=>e.explorerAddress),zs=S($,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),ku=S($,e=>e.xAliasAddress),Ks=S($,e=>e.egldLabel);n();var ut=e=>e.signedMessageInfo,qw=S(ut,e=>e.isSigning),jw=S(ut,e=>e.errorMessage),zw=S(ut,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),Kw=S(ut,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Xs=e=>e.toasts,Lu=S(Xs,e=>e.customToasts),Ys=S(Xs,e=>e.transactionToasts);n();L();var Js={errorMessage:xr,successMessage:yr,processingMessage:Sr},Zs=e=>e.transactionsInfo,Eu=S(Zs,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Js);n();n();var he=require("@multiversx/sdk-core");k();n();var Nr=require("@multiversx/sdk-core/out");n();n();function gt(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function Ze(e){return gt(e)?atob(e):e}n();n();n();n();var Qs=e=>{let o=e!=null?e:"";return gt(o)?Nr.TransactionPayload.fromEncoded(o):new Nr.TransactionPayload(o)};n();k();var pn=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(or).some(t=>e.startsWith(t)):!1;function Po(e){var r,c,p;let o=T({},e);pn({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new he.Transaction(T(T(A(T(A(T({value:o.value.valueOf(),data:Qs(o.data),nonce:o.nonce.valueOf(),receiver:new he.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new he.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:Bn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Fn,chainID:o.chainID.valueOf(),version:new he.TransactionVersion((p=o.version)!=null?p:li)}),o.options?{options:new he.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new he.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();k();n();n();n();var Nu=require("@multiversx/sdk-core/out");n();k();n();var oc=require("@multiversx/sdk-core");C();n();var ec=require("@multiversx/sdk-core");function Ru(e){try{let o=new ec.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function mn(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Ru(e)}n();n();n();var Du=require("@multiversx/sdk-core"),Mu=b(require("bignumber.js"));N();n();n();n();var dn="accounts";var Rr="blocks";var ft="batch",Co="transactions";n();n();n();n();K();n();n();K();n();n();n();var Gu=b(require("bignumber.js"));k();n();var Wu=require("@multiversx/sdk-core"),Dr=b(require("bignumber.js"));k();n();var ac=b(require("bignumber.js")),ht=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let r=new ac.default(t),c=o?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=c};n();Dr.default.config({ROUNDING_MODE:Dr.default.ROUND_FLOOR});n();n();n();k();n();n();n();n();k();n();k();n();var Hu=require("@multiversx/sdk-core");k();n();var _n=require("@multiversx/sdk-core"),qu=b(require("bignumber.js"));k();n();n();var Vu=b(require("bignumber.js"));k();n();k();n();n();n();n();n();n();k();n();k();n();k();n();K();var zu=["reDelegateRewards","claimRewards","unBond"],Ku=["wrapEgld","unwrapEgld"],Xu=["unStake"],Yu=["unDelegate"];n();n();n();k();n();var eg=b(require("bignumber.js"));n();n();K();n();var ng=b(require("bignumber.js"));n();n();n();n();var ag=b(require("bignumber.js"));C();n();n();n();n();N();n();var pc=require("@multiversx/sdk-web-wallet-provider");k();n();var cc=b(require("qs"));n();q();var xt=e=>{let o=new URLSearchParams(e).toString(),{pathname:t,hash:r}=R(),c=o?`?${o}`:"",p=t?`${t}${c}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};bo();n();bo();var ig={search:Ie()?window.location.search:"",removeParams:[]},sc=(e,o=ig)=>{var m;let t={},r=Ie()?window.location.search:"",c=(m=o.search)!=null?m:r;if(c){let d=c?new URLSearchParams(c):[];t=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=t[d],delete t[d]}),o.removeParams!=null&&Object.keys(t).forEach(d=>{var _,h;let[l]=d.split("[");(((_=o.removeParams)==null?void 0:_.includes(d))||((h=o.removeParams)==null?void 0:h.includes(l)))&&delete t[d]}),{remainingParams:p,params:t,clearNavigationHistory:()=>xt(t)}};var Br=({removeParams:e,search:o})=>{let t=Ie()?window.location.search:"",r=o!=null?o:t;if(!r)return{};let c=cc.default.parse(r.replace("?","")),p=Object.keys(c).filter(d=>!e.includes(d)),{remainingParams:m}=sc(p,{search:o,removeParams:e});return xt(m),m};var Fr=({transaction:e,search:o})=>Br({removeParams:[...Object.keys(e),pc.WALLET_PROVIDER_CALLBACK_PARAM,Qo,ir],search:o});n();n();n();V();n();K();n();n();V();n();var sg=b(require("linkifyjs"));n();k();n();var cg=b(require("bignumber.js"));n();C();n();n();N();n();N();n();n();n();K();n();K();n();var pg=b(require("bignumber.js"));k();K();n();K();n();var dc=require("react");C();n();n();K();n();n();var mg=require("@multiversx/sdk-core/out"),dg=b(require("bignumber.js"));K();n();C();n();n();C();var h1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var lc=require("react");C();V();n();var _g=require("react");K();var A1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Ao();n();var yt=e=>e.transactions,Ne=S(yt,e=>e.signedTransactions),ug=S(yt,e=>e.signTransactionsError),_c=S(yt,e=>e.signTransactionsCancelMessage),St=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),Ur=S(Ne,St(ke)),uc=S(Ne,St(Xe)),gc=S(Ne,St(Ye)),gg=S(Ne,St(wr)),fc=S(yt,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:A(T({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Po(t)))||[]})}),fg=S(Ne,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Wr=()=>I(re);n();var Tc=require("react");n();L();n();n();n();n();function Gr(){let e=I(Ur),o=Object.entries(e),t=(o==null?void 0:o.length)>0;return{pendingTransactions:e,pendingTransactionsArray:o,hasPendingTransactions:t}}n();n();n();n();var xc=require("@multiversx/sdk-extension-provider"),yc=require("@multiversx/sdk-hw-provider"),Sc=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),bc=require("@multiversx/sdk-opera-provider"),wc=require("@multiversx/sdk-passkey-provider/out"),vc=require("@multiversx/sdk-web-wallet-provider");k();Ue();n();var Qe=require("@multiversx/sdk-web-wallet-iframe-provider/out"),hc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");N();n();var Hr=No;var We=e=>{switch(e==null?void 0:e.constructor){case vc.WalletProvider:return"wallet";case Hr:return"walletconnectv2";case yc.HWProvider:return"ledger";case xc.ExtensionProvider:return"extension";case wc.PasskeyProvider:return"passkey";case Sc.MetamaskProvider:return"metamask";case bc.OperaProvider:return"opera";case Fe.CrossWindowProvider:return"crossWindow";case Qe.IframeProvider:return"iframe";case No:return"";default:return"extra"}};var ae=e=>`Unable to perform ${e}, Provider not initialized`,No=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ae("getAccount"))}setAccount(o){throw new Error(ae(`setAccount: ${o}`))}login(o){throw new Error(ae(`login with options: ${o}`))}logout(o){throw new Error(ae(`logout with options: ${o}`))}getAddress(){throw new Error(ae("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(ae(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(ae(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(ae(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(ae(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(ae(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(ae(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},bt=new No;var Tg=bt;function Z(){return Tg||bt}L();n();n();n();n();n();var Ic=require("@lifeomic/axios-fetch"),Vr=b(require("axios")),$r=(0,Ic.buildAxiosFetch)(Vr.default),qr=(e,o)=>g(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function hg(e,o,t){return g(this,null,function*(){try{let r=yield $r(e,T({method:"POST",body:o?JSON.stringify(o):void 0,headers:T({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return qr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function xg(e,o){return g(this,null,function*(){try{let t=yield $r(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return qr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function yg(e,o,t){return g(this,null,function*(){try{let r=yield $r(e,T({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return qr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var eo=Vr.default.create();eo.get=xg;eo.post=hg;eo.patch=yg;n();var gn=e=>{let o=e!=null?e:cn(y.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var Sg=b(require("axios"));n();var bg=b(require("swr"));var wg=e=>{let t=`${gn()}/${dn}/${e}?withGuardianInfo=true`;return eo.get(t)},Ac=e=>g(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield wg(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var Ro=e=>Ac(e);n();N();n();n();function kc(){let e=Z();return We(e)}function oo(e){return kc()===e}n();V();var Lc=()=>{let{search:e}=R(),o=new URLSearchParams(e),t=Object.fromEntries(o),r=t==null?void 0:t.address;return mn(r)?r:null};function fn(){let e=y.getState(),o=Z(),t=Ee(e),r=sn(e),c=Vs(e);if(!o)throw"provider not initialized";return oo("ledger")&&r?new Promise(p=>{p(t)}):!oo("")&&!oo("wallet")&&!oo("extra")?o.getAddress():new Promise(p=>{let m=Lc();c!=null&&m&&p(m),r&&p(t),p("")})}n();function Tn(e){let o=y.getState(),t=Us(o);return e?t&&!isNaN(t)?Math.max(t,e.nonce):e.nonce:t}var Ec=()=>g(void 0,null,function*(){try{let e=yield fn();try{let o=yield Ro(e);if(o!=null){let t=A(T({},o),{nonce:Tn(o)});return y.dispatch(en(t)),t}}catch(o){console.error("Failed getting account ",o)}}catch(e){console.error("Failed getting address ",e)}return null});function Do(){return g(this,null,function*(){let e=Z();if(e==null)throw"Provider not initialized";if(!e.isInitialized||e.isInitialized())return Ec();try{if(!e.init)throw"Current provider does not have init() function";return(yield e.init())?Ec():void 0}catch(o){console.error("Failed initializing provider ",o)}})}Ao();n();n();n();var Pc=b(require("axios"));function wt(e){return g(this,null,function*(){let{apiAddress:o,apiTimeout:t}=$(y.getState()),r=e.map(p=>Pc.default.post(`${o}/transactions`,p.toPlainObject(),{timeout:parseInt(t)}));return(yield Promise.all(r)).map(({data:p})=>p.txHash)})}n();var Cc=b(require("axios"));ze();n();k();var hn=({sessionId:e,address:o})=>`${e}${Wn}${o}`;function vt(t){return g(this,arguments,function*({transactions:e,sessionId:o}){var m;let r=Ee(y.getState()),{apiAddress:c,apiTimeout:p}=$(y.getState());if(!r)return{error:"Invalid address provided. You need to be logged in to send transactions",batchId:null};try{let d=hn({sessionId:o,address:r}),l={transactions:e,id:d},_=yield Cc.default.post(`${c}/${ft}`,l,{timeout:Number(p!=null?p:On)});return{batchId:d,data:_.data}}catch(d){return console.error("error sending batch transactions",d),{error:(m=d==null?void 0:d.message)!=null?m:"error sending batch transactions",batchId:null}}})}n();var jr=b(require("axios"));var It=e=>g(void 0,null,function*(){let o=cn(y.getState()),t=e.map(c=>c.hash),{data:r}=yield jr.default.get(`${o}/${Co}`,{params:{hashes:t.join(","),withScResults:!0}});return e.map(({hash:c,previousStatus:p})=>{let m=r.find(d=>(d==null?void 0:d.txHash)===c);return{hash:c,data:m==null?void 0:m.data,invalidTransaction:m==null,status:m==null?void 0:m.status,results:m==null?void 0:m.results,sender:m==null?void 0:m.sender,receiver:m==null?void 0:m.receiver,previousStatus:p,hasStatusChanged:m&&m.status!==p}})}),Nc=e=>{let o=cn(y.getState());return jr.default.get(`${o}/transactions/${e}`,{timeout:1e4})};n();var Ig=b(require("axios"));n();n();var Ag=b(require("axios"));n();var kg=b(require("axios"));n();n();L();N();n();n();n();n();V();var Dc=()=>{let{search:e}=R(),o=new URLSearchParams(e),t=Object.fromEntries(o);return t==null?void 0:t.accessToken};var kt=()=>{var t;let e=Dc(),o=G(y.getState());return e!=null?e:(t=o.webviewLogin)==null?void 0:t.data};n();O();C();n();L();function Mc(e){y.dispatch($n(e))}n();var Oc=require("@multiversx/sdk-core");C();q();n();Ao();function Bc(e,o){return e.reduce((r,{status:c,hash:p})=>(p!=null&&!o.includes(p)&&ke(c)&&r.push({hash:p,previousStatus:c}),r),[])}n();L();N();function Fc({results:e,hash:o,sessionId:t}){let r=e==null?void 0:e.find(c=>(c==null?void 0:c.returnMessage)!=="");y.dispatch(ge({transactionHash:o,sessionId:t,status:"fail",errorMessage:r==null?void 0:r.returnMessage,inTransit:!1,serverTransaction:r})),y.dispatch(fe({sessionId:t,status:"fail",errorMessage:r==null?void 0:r.returnMessage}))}n();L();C();function zr(e){y.dispatch(fe({sessionId:e,status:"timedOut"}))}var Lt={},Kr=[];function Lg({serverTransaction:e,sessionId:o,customTransactionInformation:t,shouldRefreshBalance:r,isSequential:c}){let{hash:p,status:m,inTransit:d,results:l,invalidTransaction:_,hasStatusChanged:h}=e;try{if(Kr.includes(p))return;if(Lt[p]>30){zr(o);return}if(_&&!c||ke(m)){Lt[p]=Lt[p]?Lt[p]+1:1;return}if(c&&!m){y.dispatch(ge({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}));return}h&&(Xe(m)&&(t==null?void 0:t.completedTransactionsDelay)!=null?(Kr.push(p),setTimeout(()=>y.dispatch(ge({sessionId:o,status:"success",transactionHash:p,inTransit:d,serverTransaction:e})),t==null?void 0:t.completedTransactionsDelay)):y.dispatch(ge({sessionId:o,status:m,transactionHash:p,inTransit:d,serverTransaction:e}))),r||Do(),Ye(m)&&Fc({sessionId:o,hash:p,results:l})}catch(f){console.error(f),zr(o)}}function Uc(l){return g(this,arguments,function*({sessionId:e,transactionBatch:{transactions:o,customTransactionInformation:t},getTransactionsByHash:r=It,shouldRefreshBalance:c,isSequential:p,onSuccess:m,onFail:d}){try{if(o==null)return;let _=Bc(o,Kr),h=yield r(_);for(let w of h)Lg({serverTransaction:w,sessionId:e,customTransactionInformation:t,shouldRefreshBalance:c,isSequential:p});if(h.every(w=>w.status!=="pending")&&!(t!=null&&t.grouping)){if(h.every(P=>P.status==="success"))return m==null?void 0:m(e);if(h.some(P=>P.status==="fail"))return d==null?void 0:d(e)}}catch(_){console.error(_)}})}function Wc(){let{pendingTransactionsArray:e}=Gr();function o(t){return g(this,null,function*(){let r=e.filter(([,c])=>{var p;return!((p=c==null?void 0:c.customTransactionInformation)!=null&&p.grouping)}).filter(([c,p])=>c!=null&&ke(p.status));if(r.length>0)for(let[c,p]of r)yield Uc(T({sessionId:c,transactionBatch:p},t));t.shouldRefreshBalance&&(yield Do())})}return o}n();n();n();C();n();ho();var Mo=()=>{let e=I(qs);return e?Math.max(1e3,e/2):9e4};n();n();function Oo(){let e=I(Ne),o=Object.entries(e),t=(o==null?void 0:o.length)>0;return{signedTransactions:e,signedTransactionsArray:o,hasSignedTransactions:t}}n();n();var Eg=b(require("swr"));n();n();n();n();var Gc=require("react");n();n();var Pg=require("react"),Cg=require("@multiversx/sdk-web-wallet-provider"),Ng=require("@multiversx/sdk-web-wallet-provider"),Rg=b(require("qs"));k();L();N();tr();V();var JD=R();n();var Tp=require("react"),ea=require("@multiversx/sdk-core");n();k();ur();n();n();n();n();n();n();n();n();n();n();ze();n();var Bg=b(require("axios"));n();var Ug=b(require("axios"));n();ze();n();ze();n();n();n();n();var Gg=require("@multiversx/sdk-opera-provider");n();var Hg=require("@multiversx/sdk-extension-provider");n();Ue();n();n();n();n();var mp=b(pp());var Sn=e=>{if(!e||!(0,mp.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,r,c,p]=o,m=JSON.parse(Ze(p)),d=Ze(t);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:r}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var Tf=require("@multiversx/sdk-native-auth-client");n();var _p=b(require("axios"));n();n();n();function dp(e){return g(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var lp=(e,o,t,r=0)=>g(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield dp(o.delay)),yield lp(e,o,t,r+1)):null}}),Et=(e,o={retries:5,delay:500})=>(...t)=>g(void 0,null,function*(){return yield lp(e,o,t)});var uf=4;var hM=Et((e,o,t)=>g(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield _p.default.get(`${e}/${Rr}?from=${uf}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();Gn();n();function gf(e){return Object.prototype.toString.call(e)==="[object String]"}var Zr=e=>{var t;if(!e||!gf(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=Ze(r),d=Ze(c),l=Sn(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let _=A(T({},l),{address:m,body:d,signature:p});return(t=l.extraInfo)!=null&&t.timestamp||delete _.extraInfo,_}catch(r){return null}};var Qr={isExpired:!1},bn=e=>{if(!e)return Qr;let o=Zr(e);if(!o)return Qr;let t=yo(),{ttl:r,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return Qr;let m=p+r,d=t>m,l=m-t;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};n();V();var LM={origin:R().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var xf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var yf=require("@multiversx/sdk-passkey-provider/out");k();V();n();n();n();var Ef=require("react"),Pf=require("@multiversx/sdk-hw-provider");n();O();C();n();function up(e,o){if(!e){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(t){}}}function gp(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=vf(e.path,e.caseSensitive,e.end),c=o.match(t);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:r.reduce((_,h,f)=>{if(h==="*"){let w=d[f]||"";m=p.slice(0,p.length-w.length).replace(/(.)\/+$/,"$1")}return _[h]=If(d[f]||"",h),_},{}),pathname:p,pathnameBase:m,pattern:e}}function vf(e,o=!1,t=!0){up(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(m,d)=>(r.push(d),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(c,o?void 0:"i"),r]}function If(e,o){try{return decodeURIComponent(e)}catch(t){return up(!1,`The value for the URL param "${o}" will not be decoded because the string "${e}" is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}Io();So();Ke();q();var fp=({callbackUrl:e,onRedirect:o})=>{typeof o=="function"?o(e):e&&vo({url:e})},Af=e=>{let o=_e.local.getItem(Y.logoutEvent),{data:t}=o?JSON.parse(o):{data:e};e===t&&(_e.local.setItem({key:Y.logoutEvent,data:e,expires:0}),_e.local.removeItem(Y.logoutEvent))},kf=500;function no(c,p){return g(this,arguments,function*(e,o,t=Boolean(kt()),r={shouldBroadcastLogoutAcrossTabs:!0,hasConsentPopup:!1}){var P;let m="",d=Z(),l=We(d),_=l==="wallet",h=((P=d==null?void 0:d.isInitialized)==null?void 0:P.call(d))===!0;if(t&&(d==null?void 0:d.relogin)!=null)return d.relogin();if(r.shouldBroadcastLogoutAcrossTabs)try{m=yield fn(),Af(m)}catch(U){console.error("error fetching logout address",U)}let f=wo(e),w=R(),E=new URL(decodeURIComponent(f)).pathname;if((gp(w.pathname,E)||_&&h)&&Wi(),!m&&!h)return fp({callbackUrl:f,onRedirect:o});try{if(y.dispatch(M()),_)return setTimeout(()=>{d.logout({callbackUrl:f})},kf);r.hasConsentPopup&&l==="crossWindow"&&d.setShouldShowConsentPopup(!0),yield d.logout({callbackUrl:f})}catch(U){console.error("Logging out error:",U)}finally{_||fp({callbackUrl:f,onRedirect:o})}})}n();n();var pd=require("react"),md=require("@multiversx/sdk-core"),Tx=require("@multiversx/sdk-extension-provider"),hx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),xx=require("@multiversx/sdk-passkey-provider/out"),yx=b(nd());k();n();n();var ne=()=>I(Pe);n();var ro=()=>I(Fs);n();var td=()=>I(Gs);n();n();n();n();n();n();var An=b(require("react"));var m5=(0,An.createContext)({}),d5=y.getState();n();var ad=b(require("react"));n();var ra=b(require("react")),ex=b(require("axios"));n();n();var id=()=>I(Ws);Ue();n();n();var ix=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),sx=require("@multiversx/sdk-webview-provider/out/WebviewProvider");O();n();O();L();C();n();n();L();function sd(e){y.dispatch(ms({batchId:e}))}n();q();n();L();C();n();n();var nx=require("@multiversx/sdk-core"),tx=b(require("bignumber.js"));k();n();var rx=b(require("bignumber.js"));k();L();N();q();V();n();var cd=require("react"),dx=require("@multiversx/sdk-extension-provider"),lx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),_x=require("@multiversx/sdk-passkey-provider/out");Ue();L();n();L();C();Io();V();n();de();L();n();n();var Sx=require("react");n();n();N();Ao();n();var dd=require("react");n();n();var wx=require("react"),vx=require("@multiversx/sdk-extension-provider");de();O();N();n();Ae();q();q();n();n();Ue();C();n();var bx=require("react"),ld=require("@multiversx/sdk-core");L();n();var Ix=require("react"),Ax=require("@multiversx/sdk-opera-provider");de();O();N();Ae();q();V();n();var kx=require("react");ar();de();Ue();O();L();N();Ae();V();n();var Rx=require("react");de();L();n();n();sr();n();n();var Lx=b(require("platform"));bo();n();n();n();n();n();n();n();Zo();N();n();n();var Ex=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Io();So();n();n();n();L();var Px={},Cx={};var _d=e=>{if(e.component!=null){let o=e,{component:t,onClose:r}=o,c=Be(o,["component","onClose"]),p=y.dispatch(Tr(A(T({},c),{component:null,onClose:void 0})));return Px[p==null?void 0:p.payload.toastId]=t,r&&(Cx[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return y.dispatch(Tr(e)).payload};n();n();var ud=b(require("axios"));function aa(e){return g(this,null,function*(){try{let{data:o}=yield ud.default.get(`${e}/websocket/config`);return`wss://${o.url}`}catch(o){throw console.error(o),new Error("Can not get websocket url")}})}q();n();n();var Nx=b(Ct());Zo();var gd,fd,Td,eG=(Td=(fd=(gd=te.safeWindow)==null?void 0:gd.location)==null?void 0:fd.origin)==null?void 0:Td.includes("localhost");n();V();n();n();var $x=require("react");k();n();n();k();n();n();n();var co=b(require("bignumber.js")),ia=e=>{let o=new co.default(e).dividedBy(1e3).integerValue(co.default.ROUND_FLOOR),t=new co.default(o).dividedBy(60).integerValue(co.default.ROUND_FLOOR),r=new co.default(t).dividedBy(60).integerValue(co.default.ROUND_FLOOR),c=r.modulo(60).isGreaterThan(1),p=t.modulo(60).isGreaterThan(1),m=t.modulo(60).isLessThan(1);return c?`${r} hours`:p?`${t} minutes`:m?"less than 1 minute":`${t} minute`};n();n();n();var He=b(require("react")),Ld=require("react"),Ed=require("react"),ua=b(require("classnames")),Pd=require("react-dom");k();n();var Sd=b(require("react"));n();var Ln=b(require("react"));n();bo();var hd=()=>!Ie();var Mx=()=>g(void 0,null,function*(){return yield Promise.resolve().then(()=>(ca(),sa))}),Ox=()=>(ca(),ie(sa)).default,pa=hd();function yd({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=Ln.default.useState(pa?void 0:Ox()),[p,m]=Ln.default.useState(pa||t==null?void 0:t()),d=()=>g(this,null,function*(){(e?e():Mx()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Ln.useEffect)(()=>{pa&&d()},[]),{globalStyles:r,styles:p}}function Ge(e,o){return t=>{let{globalStyles:r,styles:c}=yd({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Sd.default.createElement(e,A(T({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();var wd=b(require("react")),vd=b(require("classnames"));var Fx=({className:e,children:o,styles:t})=>wd.default.createElement("div",{className:(0,vd.default)(t==null?void 0:t.dappModalBody,e)},o),ma=Ge(Fx,{ssrStyles:()=>Promise.resolve().then(()=>(De(),Re)),clientStyles:()=>(De(),ie(Re)).default});n();var da=b(require("react")),Id=b(require("classnames"));var Ux=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?da.default.createElement("div",{className:(0,Id.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:da.default.createElement("div",null,r)):null,la=Ge(Ux,{ssrStyles:()=>Promise.resolve().then(()=>(De(),Re)),clientStyles:()=>(De(),ie(Re)).default});n();var Ho=b(require("react")),Ad=require("@fortawesome/free-solid-svg-icons"),kd=require("@fortawesome/react-fontawesome"),En=b(require("classnames"));var Wx=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?Ho.default.createElement("div",{className:(0,En.default)(l==null?void 0:l.dappModalHeader,r)},t):Ho.default.createElement("div",{className:(0,En.default)(l==null?void 0:l.dappModalHeader,r)},Ho.default.createElement("div",{className:(0,En.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Ho.default.createElement("button",{onClick:m,className:(0,En.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Ho.default.createElement(kd.FontAwesomeIcon,{size:"lg",icon:Ad.faTimes}))):null,_a=Ge(Wx,{ssrStyles:()=>Promise.resolve().then(()=>(De(),Re)),clientStyles:()=>(De(),ie(Re)).default});var Gx={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Hx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=Gx,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:_})=>{let[h,f]=(0,Ld.useState)(!1);if((0,Ed.useEffect)(()=>{f(!0)},[]),!l)return null;let{showHeader:w,showFooter:E,headerText:P,footerText:U,modalDialogClassName:xe="dapp-modal-dialog",modalContentClassName:ye="dapp-modal-dialog-content",modalHeaderClassName:mo="dapp-modal-dialog-header",modalHeaderTextClassName:Me="dapp-modal-dialog-header-text",modalCloseButtonClassName:j="dapp-modal-dialog-close-button",modalBodyClassName:lo="dapp-modal-dialog-content-body",modalFooterClassName:Oe="dapp-modal-dialog-footer",customModalHeader:Pn,customModalFooter:Yo}=c,fl=Tl=>{Tl.key==="Escape"&&r&&(m==null||m())};return He.default.createElement(He.default.Fragment,null,h&&(0,Pd.createPortal)(He.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,ua.default)(xe,_==null?void 0:_.dappModal,t),"data-testid":e,onKeyDown:fl},He.default.createElement("div",{className:(0,ua.default)(_==null?void 0:_.dappModalContent,ye)},He.default.createElement(_a,{visible:w,headerText:P,customHeader:Pn,className:mo,headerTextClassName:Me,closeButtonClassName:j,onHide:m}),He.default.createElement(ma,{className:lo},o),He.default.createElement(la,{visible:E,customFooter:Yo,footerText:U,className:Oe}))),d!=null?d:document==null?void 0:document.body))},Vx=Ge(Hx,{ssrStyles:()=>Promise.resolve().then(()=>(De(),Re)),clientStyles:()=>(De(),ie(Re)).default});n();n();var Cd=require("react");n();n();var Nd=require("react"),jx=require("@multiversx/sdk-hw-provider");de();O();L();N();Ae();n();var qx=require("react");n();n();var ga=require("react");O();L();N();Ae();V();n();var Kx=require("react"),Xx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");de();O();N();Ae();q();q();n();var Yx=require("react"),Jx=require("@multiversx/sdk-passkey-provider/out");de();O();N();Ae();q();q();n();n();var Rd=require("react");n();var Ta=require("react");n();var Ve=require("react"),Od=require("socket.io-client");L();n();var F={current:null,status:"not_initialized"};var Zx=3e3,Qx=3,Dd=500,Md=1e3,ey="batchUpdated",oy="connect",ny="disconnect";function Bd(){let e=(0,Ve.useRef)(null),o=(0,Ve.useRef)(null),{address:t}=ne(),r=D(),{network:c}=Wr(),p=_=>{e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{r(vi(_))},Md)},m=_=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{r(Ii(_))},Md)},d=()=>{var _;(_=F.current)==null||_.close(),F.current=null,F.status="not_initialized",e.current&&clearTimeout(e.current)},l=(0,Ve.useCallback)(Et(()=>g(this,null,function*(){var h;if(!t)return;F.status="pending";let _=(h=c.websocketUrl)!=null?h:yield aa(c.apiAddress);if(_==null){console.warn("Can not get websocket url");return}F.current=(0,Od.io)(_,{forceNew:!0,reconnectionAttempts:Qx,timeout:Zx,query:{address:t}}),F.status="completed",F.current.onAny(p),F.current.on(ey,m),F.current.on(oy,()=>{console.log("Websocket connected.")}),F.current.on(ny,()=>{t&&(console.warn("Websocket disconnected. Trying to reconnect..."),setTimeout(()=>{var f;t&&(console.log("Websocket reconnecting..."),(f=F.current)==null||f.connect())},Dd))})}),{retries:2,delay:Dd}),[t]);(0,Ve.useEffect)(()=>{var _;if(t&&F.status==="not_initialized"&&!((_=F.current)!=null&&_.active)){l();return}t||d()},[t,l]),(0,Ve.useEffect)(()=>()=>{d()},[])}function Dt(e,o){Bd();let t=id(),r=td();(0,Ta.useEffect)(()=>{let c=t==null?void 0:t.message;c&&e(c)},[e,t]),(0,Ta.useEffect)(()=>{let c=r==null?void 0:r.data;c&&(o==null||o(c))},[o,r])}n();n();var ty=require("react");C();n();n();n();var ay=b(require("swr"));n();n();n();n();var ry=b(require("axios"));n();Ke();var{logoutEvent:iy}=Y,Ud="storage",Gd=()=>{let{address:e}=ro(),o=I(Eo);(0,Wd.useEffect)(()=>{let t=r=>{if(!(r.key!==iy||!r.newValue))try{let{data:c}=JSON.parse(r.newValue);c===e&&no(o)}catch(c){return}};return window==null||window.addEventListener(Ud,t),()=>{window==null||window.removeEventListener(Ud,t)}},[e,o])};n();n();var Mt=require("react"),Hd=require("@fortawesome/free-solid-svg-icons"),ha=b(require("bignumber.js"));var Vd=()=>{let{address:e}=ro(),{tokenLogin:o}=I(G),{secondsUntilExpires:t,expiresAt:r}=bn(o==null?void 0:o.nativeAuthToken),c=(0,Mt.useRef)();return(0,Mt.useEffect)(()=>{var d;let p=new ha.default(String(t)),m=p.times(1e3);if(!(!t||p.isLessThanOrEqualTo(0))){if((d=o==null?void 0:o.nativeAuthConfig)!=null&&d.tokenExpirationToastWarningSeconds){clearTimeout(c.current);let _=new ha.default(o.nativeAuthConfig.tokenExpirationToastWarningSeconds).times(1e3),h=p.times(1e3).minus(_),f=ia(m.toNumber()),w=h.isLessThanOrEqualTo(0)?0:h.toNumber();c.current=setTimeout(()=>{_d({toastId:"nativeAuthTokenExpiration",type:"custom",title:"Session Expiration Warning",icon:Hd.faRefresh,message:`Your token will expire in ${f}!`})},w)}return()=>{clearTimeout(c.current)}}},[r,e,o==null?void 0:o.nativeAuthConfig]),null};n();var Vo=require("react"),$d=b(require("bignumber.js"));var qd=()=>{let{address:e}=ro(),{tokenLogin:o}=I(G),t=I(Eo),{isExpired:r,secondsUntilExpires:c,expiresAt:p}=bn(o==null?void 0:o.nativeAuthToken),m=(0,Vo.useRef)(""),d=(0,Vo.useRef)();return(0,Vo.useEffect)(()=>{e&&r&&no(t)},[r,e,t]),(0,Vo.useEffect)(()=>{let l=Boolean(kt());if(!e||l)return;let _=new $d.default(String(c)),h=`${e}_${p}`,f=m.current===h;if(!(c&&_.isGreaterThan(0))||f)return;m.current=h,clearTimeout(d.current);let E=_.times(1e3);return d.current=setTimeout(()=>{no(t)},E.toNumber()),()=>{clearTimeout(d.current)}},[p,e,t]),null};var jd=()=>(Vd(),Gd(),qd(),null);n();n();var po=require("react");L();N();Io();n();L();n();n();function zd({transactions:e}){return e==null?void 0:e.some(o=>Array.isArray(o))}function Ot({transactions:e=[]}){return zd({transactions:e})?e.flat():e}n();L();C();var xa=({errorMessage:e,sessionId:o,transactions:t,clearSignInfo:r})=>{console.error("Unable to send transactions",e),y.dispatch(fe({sessionId:o,status:"fail",errorMessage:e,transactions:t.map(c=>A(T({},c),{status:"not executed"}))})),r==null||r()};n();L();C();var Kd=({errorMessage:e,sessionId:o,clearSignInfo:t})=>{console.error("Unable to send transactions",e),y.dispatch(fe({sessionId:o,status:"fail",errorMessage:e})),t==null||t()};var sy=c=>g(void 0,[c],function*({session:e,sessionId:o,clearSignInfo:t,sendSignedBatchTransactionsAsync:r}){var h,f;let{transactions:p}=e;if(!p)return;let m=(h=e.customTransactionInformation)==null?void 0:h.grouping;if(!m)return;let d=p.reduce((w,E,P)=>{let U=m.findIndex(xe=>xe.includes(P));return w[U]||(w[U]=[]),w[U].push(E),w},[]);if(d.length===0)return;let l=yield r({transactions:d,sessionId:o}),_=l==null?void 0:l.data;if((l==null?void 0:l.error)||!_){xa({errorMessage:(f=l==null?void 0:l.error)!=null?f:"Send batch error",sessionId:o,transactions:p,clearSignInfo:t});return}return _&&y.dispatch(cs(_)),Ot({transactions:_==null?void 0:_.transactions}).map(w=>w.hash)}),Xd=p=>g(void 0,[p],function*({session:e,sessionId:o,clearSignInfo:t,sendSignedBatchTransactionsAsync:r=vt,sendSignedTransactionsAsync:c=wt}){var l,_,h;let{transactions:m}=e;if(!m)return;if((l=e.customTransactionInformation)==null?void 0:l.grouping)try{return yield sy({session:e,sessionId:o,clearSignInfo:t,sendSignedBatchTransactionsAsync:r})}catch(f){return xa({errorMessage:f.message,sessionId:o,transactions:m}),null}try{let f=m.map(w=>Po(w));return yield c(f)}catch(f){let w=(_=f.response)==null?void 0:_.data;return Kd({errorMessage:(h=w==null?void 0:w.message)!=null?h:f.message,sessionId:o,clearSignInfo:t}),null}});var Yd=e=>{let o=e.redirectRoute;o&&vo({url:o})},Jd=({sendSignedTransactionsAsync:e=wt,sendSignedBatchTransactionsAsync:o=vt})=>{let t=D(),{nonce:r}=I(Pe),c=I(Ne),p=(0,po.useRef)(!1),m=(0,po.useRef)([]),d=()=>{t(ko()),p.current=!1},l=(0,po.useCallback)(()=>g(void 0,null,function*(){var h;let _=Object.keys(c);for(let f of _){let w=c[f],E=(h=w==null?void 0:w.customTransactionInformation)==null?void 0:h.signWithoutSending;if(!w||!f||E){Yd(w);continue}if(m.current.includes(f))continue;let{transactions:P}=w;if(!P||!(w.status==="signed"&&!p.current))continue;p.current=!0,m.current.push(f);let ye=yield Xd({session:w,sessionId:f,clearSignInfo:d,sendSignedTransactionsAsync:e,sendSignedBatchTransactionsAsync:o}),mo="pending",Me=P.map(Oe=>ye!=null&&ye.includes(Oe.hash)?A(T({},Oe),{status:mo}):Oe);t(Di({sessionId:f,submittedMessage:"submitted"})),t(fe({sessionId:f,status:"sent",transactions:Me})),d(),Mc(r+P.length),Yd(w);let[lo]=P;Fr({transaction:lo}),p.current=!1}}),[c,r]);return(0,po.useEffect)(()=>{l()},[c,l]),null};n();n();n();var ll=require("react");n();var Qd=require("react");n();var cy=e=>e.batchTransactions,Zd=S(cy,e=>{let o=T({},e);return delete o._persist,o});function $o(){let e=I(Zd),o=(0,Qd.useMemo)(()=>Object.entries(e).map(([t,r])=>({batchId:t,transactions:r.transactions})),[e]);return{batches:e,batchTransactionsArray:o}}C();n();var zo=require("react");ho();n();k();var qo=e=>{if(!e||typeof e!="string")return null;let o=e.split(Wn)[0];return ht(o)?parseInt(o,10):null};n();var Bt=(e,o)=>new Date().getTime()-e>o;n();var pl=require("react");n();var rl=require("react");C();n();var nl=require("react");n();var el=b(require("axios"));ze();function ol(t){return g(this,arguments,function*({batchId:e,address:o}){let{apiAddress:r,apiTimeout:c}=$(y.getState()),{data:p}=yield el.default.get(`${r}/${ft}/${o}/${e}`,{timeout:Number(c!=null?c:On)});return p})}var tl=()=>{let{address:e}=ne();return(0,nl.useCallback)(o=>g(void 0,null,function*(){try{return yield ol({batchId:o,address:e})}catch(t){return console.error(t),null}}),[e])};var Ft=()=>{let e=tl();return(0,rl.useCallback)(t=>g(void 0,[t],function*({batchId:o}){let r=yield e(o);return r?{statusResponse:r,isBatchSuccessful:r.status==="success",isBatchFailed:r.status==="fail"||r.status==="invalid"||r.status==="dropped",isBatchNotFound:Boolean(r.statusCode)&&Boolean(r.message)}:{statusResponse:r,isBatchSuccessful:!1,isBatchFailed:!0,isBatchNotFound:!1}}),[e])};n();C();var Ut=({transactions:e,hasUnrelatedTransactions:o})=>{let t=e.every(({status:l})=>l==="fail"),r=e.some(({status:l})=>l==="fail"),c=e.some(({status:l})=>l==="pending"),p=e.every(({status:l})=>l==="success"),m=o&&Boolean(!c&&!t&&r);return{isPending:c,isSuccessful:p,isFailed:o?m?!1:t:r,isIncompleteFailed:m}};n();var al=require("react");L();function il(){let e=D(),o=Ft();return(0,al.useCallback)(r=>g(this,[r],function*({batchId:t}){let c=yield o({batchId:t});return c.statusResponse&&e(ps(c.statusResponse)),c}),[e,o])}n();var ya=require("react");L();n();n();var jo=class{constructor(o){this.status=(o||"").toLowerCase()}static createUnknown(){return new jo("unknown")}isPending(){return this.status=="received"||this.status=="pending"}isExecuted(){return this.isSuccessful()||this.isFailed()||this.isInvalid()}isSuccessful(){return this.status=="executed"||this.status=="success"||this.status=="successful"}isFailed(){return this.status=="fail"||this.status=="failed"||this.status=="unsuccessful"||this.isInvalid()}isInvalid(){return this.status=="invalid"}toString(){return this.status}valueOf(){return this.status}equals(o){return o?this.status==o.status:!1}};n();function sl(e){return new Promise(o=>setTimeout(o,e))}var cl=e=>g(void 0,null,function*(){let t=4,r;if(e.length===0)return{data:r,success:!1};for(;r===void 0&&t>0;)try{yield sl(3e3);let p=(yield Promise.allSettled(e.map(d=>Nc(d)))).map(d=>d.status==="fulfilled"?d.value.data:void 0).filter(d=>d!==void 0);if(p.length>0){let d=p.length===e.length,l=p.some(_=>new jo(_.status).isPending());d&&!l||t===1?(r=p,t=0):t-=1}else t-=1}catch(c){t-=1}return{data:r,success:r!==void 0}});C();function Wt(){let e=D(),{address:o}=ne(),t=(0,ya.useCallback)(({sessionId:r,dropUnprocessedTransactions:c,serverTransactions:p,batchTransactions:m})=>{for(let d of m){let l=p.find(_=>_.txHash===d.hash);if(!l){c&&e(ge({sessionId:r,status:"fail",transactionHash:d.hash}));continue}e(ge({sessionId:r,status:l.status,transactionHash:d.hash,serverTransaction:l}))}},[e]);return(0,ya.useCallback)(r=>g(this,null,function*(){if(!r)return;let{transactions:c,isBatchFailed:p,sessionId:m}=r;if(!c||c.length===0)return;if(p){for(let _ of c)e(ge({sessionId:m,status:"fail",transactionHash:_.hash}));return}let{data:d,success:l}=yield cl(c.map(({hash:_})=>_).filter(_=>Boolean(_)));l&&d&&t({sessionId:m,dropUnprocessedTransactions:r.dropUnprocessedTransactions,serverTransactions:d,batchTransactions:c}),r.shouldRefreshBalance&&(yield Do())}),[e,o,t])}var Gt=e=>{let o=D(),{signedTransactions:t}=Oo(),r=il(),c=Wt(),p=Ft(),m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail;return{verifyBatchStatus:(0,pl.useCallback)(h=>g(void 0,[h],function*({batchId:_}){var Me,j,lo,Oe,Pn;let f=(j=(Me=qo(_))==null?void 0:Me.toString())!=null?j:"",w=t[f];if(!w||!((lo=w.customTransactionInformation)==null?void 0:lo.grouping))return;let P=(Pn=(Oe=t[f])==null?void 0:Oe.transactions)!=null?Pn:[],{isSuccessful:U,isFailed:xe,isPending:ye}=Ut({transactions:P});if(!ye)U&&(m==null||m(f)),xe&&(d==null||d(f,"Error processing batch transactions."));else{let Yo=yield r({batchId:_});yield c({sessionId:f.toString(),isBatchFailed:Yo==null?void 0:Yo.isBatchFailed,shouldRefreshBalance:!0,transactions:P})}}),[o,p,c,t,r,m,d])}};var ml=e=>{let{batchTransactionsArray:o}=$o(),{verifyBatchStatus:t}=Gt(e),r=Mo(),c=(0,zo.useRef)(null),p=F.status==="completed",m=(0,zo.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:d}of o){let l=qo(d);!l||!Bt(l,9e4)||(yield t({batchId:d}))}}),[o,t]);(0,zo.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{m()},r),()=>{c.current&&clearInterval(c.current)}},[m])};n();var Ko=require("react");ho();var dl=e=>{let{batchTransactionsArray:o}=$o(),t=Mo(),r=Wt(),c=(0,Ko.useRef)(null),p=F.status==="completed",m=e==null?void 0:e.onSuccess,d=e==null?void 0:e.onFail,l=(0,Ko.useCallback)(()=>g(void 0,null,function*(){for(let{batchId:_,transactions:h}of o){let f=qo(_);if(!f||!Bt(f,6e5))continue;yield r({sessionId:f.toString(),shouldRefreshBalance:!0,dropUnprocessedTransactions:!0});let w=Ot({transactions:h}),{isPending:E,isSuccessful:P,isFailed:U}=Ut({transactions:w});E||(sd(_),P&&(m==null||m(f.toString())),U&&(d==null||d(f.toString(),"Error processing batch transactions. Status: failed")))}}),[o,r,m,d]);(0,Ko.useEffect)(()=>{if(p){c.current&&clearInterval(c.current);return}if(!c.current)return c.current=setInterval(()=>{l()},t),()=>{c.current&&clearInterval(c.current)}},[l])};var _l=({onSuccess:e,onFail:o})=>{let{batches:t}=$o(),{signedTransactionsArray:r}=Oo(),{address:c}=ne(),{verifyBatchStatus:p}=Gt({onSuccess:e,onFail:o}),m=()=>{},d=_=>g(void 0,null,function*(){yield p({batchId:_.batchId})}),l=()=>g(void 0,null,function*(){for(let[_,h]of r){let f=hn({sessionId:_,address:c}),w=!Boolean(t[f]);!(h.status!=="sent")||w||(yield p({batchId:f}))}});Dt(m,d),ml({onSuccess:e,onFail:o}),dl({onSuccess:e,onFail:o}),(0,ll.useEffect)(()=>{l()},[])};n();var Ht=require("react");function ul(e){var d;let o=Wc(),t=Mo(),r=(0,Ht.useRef)(null),c=F.status==="completed",p=(d=e==null?void 0:e.getTransactionsByHash)!=null?d:It,m=()=>{o(T({getTransactionsByHash:p},e))};Dt(m),(0,Ht.useEffect)(()=>{if(c){r.current&&clearInterval(r.current);return}if(!r.current)return r.current=setInterval(m,t),()=>{r.current&&clearInterval(r.current)}},[m,F])}function gl(e){return ul(e),_l(e),null}function my({customComponents:e}){var d,l,_;let o=e==null?void 0:e.transactionSender,t=e==null?void 0:e.transactionTracker,r=e==null?void 0:e.logoutListener,c=(d=o==null?void 0:o.component)!=null?d:Jd,p=(l=t==null?void 0:t.component)!=null?l:gl,m=(_=r==null?void 0:r.component)!=null?_:jd;return Xo.default.createElement(Xo.default.Fragment,null,Xo.default.createElement(c,T({},o==null?void 0:o.props)),Xo.default.createElement(p,T({},t==null?void 0:t.props)),Xo.default.createElement(m,null))}0&&(module.exports={CustomComponents});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=CustomComponents.js.map
