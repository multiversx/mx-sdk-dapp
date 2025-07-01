"use strict";var ym=Object.create;var So=Object.defineProperty,bm=Object.defineProperties,Sm=Object.getOwnPropertyDescriptor,wm=Object.getOwnPropertyDescriptors,vm=Object.getOwnPropertyNames,rn=Object.getOwnPropertySymbols,Im=Object.getPrototypeOf,it=Object.prototype.hasOwnProperty,Rr=Object.prototype.propertyIsEnumerable;var Nr=(e,o,t)=>o in e?So(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))it.call(o,t)&&Nr(e,t,o[t]);if(rn)for(var t of rn(o))Rr.call(o,t)&&Nr(e,t,o[t]);return e},v=(e,o)=>bm(e,wm(o));var Pe=(e,o)=>{var t={};for(var a in e)it.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&rn)for(var a of rn(e))o.indexOf(a)<0&&Rr.call(e,a)&&(t[a]=e[a]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),ae=(e,o)=>{for(var t in o)So(e,t,{get:o[t],enumerable:!0})},Dr=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of vm(o))!it.call(e,c)&&c!==t&&So(e,c,{get:()=>o[c],enumerable:!(a=Sm(o,c))||a.enumerable});return e};var x=(e,o,t)=>(t=e!=null?ym(Im(e)):{},Dr(o||!e||!e.__esModule?So(t,"default",{value:e,enumerable:!0}):t,e)),oe=e=>Dr(So({},"__esModule",{value:!0}),e);var f=(e,o,t)=>new Promise((a,c)=>{var p=l=>{try{d(t.next(l))}catch(g){c(g)}},m=l=>{try{d(t.throw(l))}catch(g){c(g)}},d=l=>l.done?a(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var Br=b(an=>{"use strict";n();an.byteLength=km;an.toByteArray=Pm;an.fromByteArray=Nm;var ie=[],Z=[],Am=typeof Uint8Array!="undefined"?Uint8Array:Array,st="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Be=0,Mr=st.length;Be<Mr;++Be)ie[Be]=st[Be],Z[st.charCodeAt(Be)]=Be;var Be,Mr;Z["-".charCodeAt(0)]=62;Z["_".charCodeAt(0)]=63;function Or(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var a=t===o?0:4-t%4;return[t,a]}function km(e){var o=Or(e),t=o[0],a=o[1];return(t+a)*3/4-a}function Lm(e,o,t){return(o+t)*3/4-t}function Pm(e){var o,t=Or(e),a=t[0],c=t[1],p=new Am(Lm(e,a,c)),m=0,d=c>0?a-4:a,l;for(l=0;l<d;l+=4)o=Z[e.charCodeAt(l)]<<18|Z[e.charCodeAt(l+1)]<<12|Z[e.charCodeAt(l+2)]<<6|Z[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=Z[e.charCodeAt(l)]<<2|Z[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=Z[e.charCodeAt(l)]<<10|Z[e.charCodeAt(l+1)]<<4|Z[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Em(e){return ie[e>>18&63]+ie[e>>12&63]+ie[e>>6&63]+ie[e&63]}function Cm(e,o,t){for(var a,c=[],p=o;p<t;p+=3)a=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Em(a));return c.join("")}function Nm(e){for(var o,t=e.length,a=t%3,c=[],p=16383,m=0,d=t-a;m<d;m+=p)c.push(Cm(e,m,m+p>d?d:m+p));return a===1?(o=e[t-1],c.push(ie[o>>2]+ie[o<<4&63]+"==")):a===2&&(o=(e[t-2]<<8)+e[t-1],c.push(ie[o>>10]+ie[o>>4&63]+ie[o<<2&63]+"=")),c.join("")}});var Fr=b(ct=>{n();ct.read=function(e,o,t,a,c){var p,m,d=c*8-a-1,l=(1<<d)-1,g=l>>1,S=-7,h=t?c-1:0,w=t?-1:1,L=e[o+h];for(h+=w,p=L&(1<<-S)-1,L>>=-S,S+=d;S>0;p=p*256+e[o+h],h+=w,S-=8);for(m=p&(1<<-S)-1,p>>=-S,S+=a;S>0;m=m*256+e[o+h],h+=w,S-=8);if(p===0)p=1-g;else{if(p===l)return m?NaN:(L?-1:1)*(1/0);m=m+Math.pow(2,a),p=p-g}return(L?-1:1)*m*Math.pow(2,p-a)};ct.write=function(e,o,t,a,c,p){var m,d,l,g=p*8-c-1,S=(1<<g)-1,h=S>>1,w=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,L=a?0:p-1,P=a?1:-1,D=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=S):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+h>=1?o+=w/l:o+=w*Math.pow(2,1-h),o*l>=2&&(m++,l/=2),m+h>=S?(d=0,m=S):m+h>=1?(d=(o*l-1)*Math.pow(2,c),m=m+h):(d=o*Math.pow(2,h-1)*Math.pow(2,c),m=0));c>=8;e[t+L]=d&255,L+=P,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+L]=m&255,L+=P,m/=256,g-=8);e[t+L-P]|=D*128}});var Jr=b(Ze=>{"use strict";n();var pt=Br(),Je=Fr(),Ur=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ze.Buffer=_;Ze.SlowBuffer=Fm;Ze.INSPECT_MAX_BYTES=50;var sn=2147483647;Ze.kMaxLength=sn;_.TYPED_ARRAY_SUPPORT=Rm();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Rm(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function he(e){if(e>sn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _t(e)}return Hr(e,o,t)}_.poolSize=8192;function Hr(e,o,t){if(typeof e=="string")return Mm(e,o);if(ArrayBuffer.isView(e))return Om(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(se(e,ArrayBuffer)||e&&se(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(se(e,SharedArrayBuffer)||e&&se(e.buffer,SharedArrayBuffer)))return dt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var a=e.valueOf&&e.valueOf();if(a!=null&&a!==e)return _.from(a,o,t);var c=Bm(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return Hr(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function Vr(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Dm(e,o,t){return Vr(e),e<=0?he(e):o!==void 0?typeof t=="string"?he(e).fill(o,t):he(e).fill(o):he(e)}_.alloc=function(e,o,t){return Dm(e,o,t)};function _t(e){return Vr(e),he(e<0?0:ut(e)|0)}_.allocUnsafe=function(e){return _t(e)};_.allocUnsafeSlow=function(e){return _t(e)};function Mm(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=$r(e,o)|0,a=he(t),c=a.write(e,o);return c!==t&&(a=a.slice(0,c)),a}function mt(e){for(var o=e.length<0?0:ut(e.length)|0,t=he(o),a=0;a<o;a+=1)t[a]=e[a]&255;return t}function Om(e){if(se(e,Uint8Array)){var o=new Uint8Array(e);return dt(o.buffer,o.byteOffset,o.byteLength)}return mt(e)}function dt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var a;return o===void 0&&t===void 0?a=new Uint8Array(e):t===void 0?a=new Uint8Array(e,o):a=new Uint8Array(e,o,t),Object.setPrototypeOf(a,_.prototype),a}function Bm(e){if(_.isBuffer(e)){var o=ut(e.length)|0,t=he(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||gt(e.length)?he(0):mt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return mt(e.data)}function ut(e){if(e>=sn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+sn.toString(16)+" bytes");return e|0}function Fm(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(se(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),se(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var a=o.length,c=t.length,p=0,m=Math.min(a,c);p<m;++p)if(o[p]!==t[p]){a=o[p],c=t[p];break}return a<c?-1:c<a?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var a;if(t===void 0)for(t=0,a=0;a<o.length;++a)t+=o[a].length;var c=_.allocUnsafe(t),p=0;for(a=0;a<o.length;++a){var m=o[a];if(se(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function $r(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||se(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,a=arguments.length>2&&arguments[2]===!0;if(!a&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return lt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Yr(e).length;default:if(c)return a?-1:lt(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=$r;function Um(e,o,t){var a=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Xm(this,o,t);case"utf8":case"utf-8":return qr(this,o,t);case"ascii":return zm(this,o,t);case"latin1":case"binary":return Km(this,o,t);case"base64":return jm(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ym(this,o,t);default:if(a)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}_.prototype._isBuffer=!0;function Fe(e,o,t){var a=e[o];e[o]=e[t],e[t]=a}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Fe(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Fe(this,t,t+3),Fe(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Fe(this,t,t+7),Fe(this,t+1,t+6),Fe(this,t+2,t+5),Fe(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?qr(this,0,o):Um.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=Ze.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Ur&&(_.prototype[Ur]=_.prototype.inspect);_.prototype.compare=function(o,t,a,c,p){if(se(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),a===void 0&&(a=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||a>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=a)return 0;if(c>=p)return-1;if(t>=a)return 1;if(t>>>=0,a>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=a-t,l=Math.min(m,d),g=this.slice(c,p),S=o.slice(t,a),h=0;h<l;++h)if(g[h]!==S[h]){m=g[h],d=S[h];break}return m<d?-1:d<m?1:0};function jr(e,o,t,a,c){if(e.length===0)return-1;if(typeof t=="string"?(a=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,gt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,a)),_.isBuffer(o))return o.length===0?-1:Wr(e,o,t,a,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Wr(e,[o],t,a,c);throw new TypeError("val must be string, number or Buffer")}function Wr(e,o,t,a,c){var p=1,m=e.length,d=o.length;if(a!==void 0&&(a=String(a).toLowerCase(),a==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(L,P){return p===1?L[P]:L.readUInt16BE(P*p)}var g;if(c){var S=-1;for(g=t;g<m;g++)if(l(e,g)===l(o,S===-1?0:g-S)){if(S===-1&&(S=g),g-S+1===d)return S*p}else S!==-1&&(g-=g-S),S=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var h=!0,w=0;w<d;w++)if(l(e,g+w)!==l(o,w)){h=!1;break}if(h)return g}return-1}_.prototype.includes=function(o,t,a){return this.indexOf(o,t,a)!==-1};_.prototype.indexOf=function(o,t,a){return jr(this,o,t,a,!0)};_.prototype.lastIndexOf=function(o,t,a){return jr(this,o,t,a,!1)};function Wm(e,o,t,a){t=Number(t)||0;var c=e.length-t;a?(a=Number(a),a>c&&(a=c)):a=c;var p=o.length;a>p/2&&(a=p/2);for(var m=0;m<a;++m){var d=parseInt(o.substr(m*2,2),16);if(gt(d))return m;e[t+m]=d}return m}function Gm(e,o,t,a){return cn(lt(o,e.length-t),e,t,a)}function Hm(e,o,t,a){return cn(Qm(o),e,t,a)}function Vm(e,o,t,a){return cn(Yr(o),e,t,a)}function $m(e,o,t,a){return cn(ed(o,e.length-t),e,t,a)}_.prototype.write=function(o,t,a,c){if(t===void 0)c="utf8",a=this.length,t=0;else if(a===void 0&&typeof t=="string")c=t,a=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(a)?(a=a>>>0,c===void 0&&(c="utf8")):(c=a,a=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((a===void 0||a>p)&&(a=p),o.length>0&&(a<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Wm(this,o,t,a);case"utf8":case"utf-8":return Gm(this,o,t,a);case"ascii":case"latin1":case"binary":return Hm(this,o,t,a);case"base64":return Vm(this,o,t,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $m(this,o,t,a);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function jm(e,o,t){return o===0&&t===e.length?pt.fromByteArray(e):pt.fromByteArray(e.slice(o,t))}function qr(e,o,t){t=Math.min(e.length,t);for(var a=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,g,S,h;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(h=(p&31)<<6|l&63,h>127&&(m=h));break;case 3:l=e[c+1],g=e[c+2],(l&192)===128&&(g&192)===128&&(h=(p&15)<<12|(l&63)<<6|g&63,h>2047&&(h<55296||h>57343)&&(m=h));break;case 4:l=e[c+1],g=e[c+2],S=e[c+3],(l&192)===128&&(g&192)===128&&(S&192)===128&&(h=(p&15)<<18|(l&63)<<12|(g&63)<<6|S&63,h>65535&&h<1114112&&(m=h))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,a.push(m>>>10&1023|55296),m=56320|m&1023),a.push(m),c+=d}return qm(a)}var Gr=4096;function qm(e){var o=e.length;if(o<=Gr)return String.fromCharCode.apply(String,e);for(var t="",a=0;a<o;)t+=String.fromCharCode.apply(String,e.slice(a,a+=Gr));return t}function zm(e,o,t){var a="";t=Math.min(e.length,t);for(var c=o;c<t;++c)a+=String.fromCharCode(e[c]&127);return a}function Km(e,o,t){var a="";t=Math.min(e.length,t);for(var c=o;c<t;++c)a+=String.fromCharCode(e[c]);return a}function Xm(e,o,t){var a=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>a)&&(t=a);for(var c="",p=o;p<t;++p)c+=od[e[p]];return c}function Ym(e,o,t){for(var a=e.slice(o,t),c="",p=0;p<a.length-1;p+=2)c+=String.fromCharCode(a[p]+a[p+1]*256);return c}_.prototype.slice=function(o,t){var a=this.length;o=~~o,t=t===void 0?a:~~t,o<0?(o+=a,o<0&&(o=0)):o>a&&(o=a),t<0?(t+=a,t<0&&(t=0)):t>a&&(t=a),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,_.prototype),c};function W(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,a){o=o>>>0,t=t>>>0,a||W(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,a){o=o>>>0,t=t>>>0,a||W(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||W(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,a){o=o>>>0,t=t>>>0,a||W(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};_.prototype.readIntBE=function(o,t,a){o=o>>>0,t=t>>>0,a||W(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||W(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||W(o,2,this.length);var a=this[o]|this[o+1]<<8;return a&32768?a|4294901760:a};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||W(o,2,this.length);var a=this[o+1]|this[o]<<8;return a&32768?a|4294901760:a};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||W(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||W(o,4,this.length),Je.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||W(o,4,this.length),Je.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||W(o,8,this.length),Je.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||W(o,8,this.length),Je.read(this,o,!1,52,8)};function q(e,o,t,a,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+a>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,a,c){if(o=+o,t=t>>>0,a=a>>>0,!c){var p=Math.pow(2,8*a)-1;q(this,o,t,a,p,0)}var m=1,d=0;for(this[t]=o&255;++d<a&&(m*=256);)this[t+d]=o/m&255;return t+a};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,a,c){if(o=+o,t=t>>>0,a=a>>>0,!c){var p=Math.pow(2,8*a)-1;q(this,o,t,a,p,0)}var m=a-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+a};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,a,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*a-1);q(this,o,t,a,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<a&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+a};_.prototype.writeIntBE=function(o,t,a,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*a-1);q(this,o,t,a,p-1,-p)}var m=a-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+a};_.prototype.writeInt8=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,a){return o=+o,t=t>>>0,a||q(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function zr(e,o,t,a,c,p){if(t+a>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Kr(e,o,t,a,c){return o=+o,t=t>>>0,c||zr(e,o,t,4,34028234663852886e22,-34028234663852886e22),Je.write(e,o,t,a,23,4),t+4}_.prototype.writeFloatLE=function(o,t,a){return Kr(this,o,t,!0,a)};_.prototype.writeFloatBE=function(o,t,a){return Kr(this,o,t,!1,a)};function Xr(e,o,t,a,c){return o=+o,t=t>>>0,c||zr(e,o,t,8,17976931348623157e292,-17976931348623157e292),Je.write(e,o,t,a,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,a){return Xr(this,o,t,!0,a)};_.prototype.writeDoubleBE=function(o,t,a){return Xr(this,o,t,!1,a)};_.prototype.copy=function(o,t,a,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(a||(a=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<a&&(c=a),c===a||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-a&&(c=o.length-t+a);var p=c-a;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,a,c):Uint8Array.prototype.set.call(o,this.subarray(a,c),t),p};_.prototype.fill=function(o,t,a,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,a=this.length):typeof a=="string"&&(c=a,a=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<a)throw new RangeError("Out of range index");if(a<=t)return this;t=t>>>0,a=a===void 0?this.length:a>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<a;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<a-t;++m)this[m+t]=d[m%l]}return this};var Jm=/[^+/0-9A-Za-z-_]/g;function Zm(e){if(e=e.split("=")[0],e=e.trim().replace(Jm,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function lt(e,o){o=o||1/0;for(var t,a=e.length,c=null,p=[],m=0;m<a;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===a){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Qm(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function ed(e,o){for(var t,a,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),a=t>>8,c=t%256,p.push(c),p.push(a);return p}function Yr(e){return pt.toByteArray(Zm(e))}function cn(e,o,t,a){for(var c=0;c<a&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function se(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function gt(e){return e!==e}var od=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var a=t*16,c=0;c<16;++c)o[a+c]=e[t]+e[c];return o}()});var na=b((HT,oa)=>{n();var O=oa.exports={},ce,pe;function ft(){throw new Error("setTimeout has not been defined")}function ht(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ce=setTimeout:ce=ft}catch(e){ce=ft}try{typeof clearTimeout=="function"?pe=clearTimeout:pe=ht}catch(e){pe=ht}})();function Zr(e){if(ce===setTimeout)return setTimeout(e,0);if((ce===ft||!ce)&&setTimeout)return ce=setTimeout,setTimeout(e,0);try{return ce(e,0)}catch(o){try{return ce.call(null,e,0)}catch(t){return ce.call(this,e,0)}}}function nd(e){if(pe===clearTimeout)return clearTimeout(e);if((pe===ht||!pe)&&clearTimeout)return pe=clearTimeout,clearTimeout(e);try{return pe(e)}catch(o){try{return pe.call(null,e)}catch(t){return pe.call(this,e)}}}var Te=[],Qe=!1,Ue,pn=-1;function td(){!Qe||!Ue||(Qe=!1,Ue.length?Te=Ue.concat(Te):pn=-1,Te.length&&Qr())}function Qr(){if(!Qe){var e=Zr(td);Qe=!0;for(var o=Te.length;o;){for(Ue=Te,Te=[];++pn<o;)Ue&&Ue[pn].run();pn=-1,o=Te.length}Ue=null,Qe=!1,nd(e)}}O.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];Te.push(new ea(e,o)),Te.length===1&&!Qe&&Zr(Qr)};function ea(e,o){this.fun=e,this.array=o}ea.prototype.run=function(){this.fun.apply(null,this.array)};O.title="browser";O.browser=!0;O.env={};O.argv=[];O.version="";O.versions={};function xe(){}O.on=xe;O.addListener=xe;O.once=xe;O.off=xe;O.removeListener=xe;O.removeAllListeners=xe;O.emit=xe;O.prependListener=xe;O.prependOnceListener=xe;O.listeners=function(e){return[]};O.binding=function(e){throw new Error("process.binding is not supported")};O.cwd=function(){return"/"};O.chdir=function(e){throw new Error("process.chdir is not supported")};O.umask=function(){return 0}});var r,s,rd,i,n=T(()=>{r=x(Jr()),s=x(na()),rd=function(e){function o(){var a=this||self;return delete e.prototype.__magic__,a}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=rd});var Tt=T(()=>{"use strict";n()});var ye,me=T(()=>{"use strict";n();ye="Action not allowed. User is logged in. Call logout() first"});var ta=T(()=>{"use strict";n()});var xt,ra=T(()=>{"use strict";n();xt=(a=>(a.SetGuardian="SetGuardian",a.GuardAccount="GuardAccount",a.UnGuardAccount="UnGuardAccount",a))(xt||{})});var aa=T(()=>{"use strict";n()});var yt=T(()=>{"use strict";n()});var ia=T(()=>{"use strict";n()});var bt=T(()=>{"use strict";n()});var sa=T(()=>{"use strict";n()});var ca=T(()=>{"use strict";n()});var de,eo,Ee=T(()=>{"use strict";n();de=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),eo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var U,pa,ex,ma,ox,C=T(()=>{"use strict";n();Ee();U=(w=>(w.ledger="ledger",w.walletconnect="walletconnect",w.walletconnectv2="walletconnectv2",w.wallet="wallet",w.crossWindow="crossWindow",w.iframe="iframe",w.extension="extension",w.passkey="passkey",w.metamask="metamask",w.opera="opera",w.extra="extra",w.none="",w))(U||{}),pa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(pa||{}),ex=u(u({},eo.WindowProviderRequestEnums),pa),ma=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ma||{}),ox=u(u({},eo.WindowProviderResponseEnums),ma)});var da=T(()=>{"use strict";n()});var la=T(()=>{"use strict";n()});var z=T(()=>{"use strict";n()});var _a=T(()=>{"use strict";n()});var ua=T(()=>{"use strict";n()});var ga=T(()=>{"use strict";n()});var B=T(()=>{"use strict";n();bt();sa();ca();C();da();la();z();_a();ua();ga()});var oo,fa,Tx,ha,xx,Ta,yx,bx,ad,xa,no=T(()=>{"use strict";n();B();oo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:fa,egldLabel:Tx}=oo["devnet"],{chainId:ha,egldLabel:xx}=oo["testnet"],{chainId:Ta,egldLabel:yx}=oo["mainnet"],bx={["devnet"]:fa,["testnet"]:ha,["mainnet"]:Ta},ad={[fa]:"devnet",[ha]:"testnet",[Ta]:"mainnet"},xa="multiversx://"});var mn=T(()=>{"use strict";n()});var le,ya=T(()=>{"use strict";n();le=require("@multiversx/sdk-web-wallet-provider")});var ne,wo=T(()=>{"use strict";n();ne=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ba,Sa,St,id,sd,wa,wt=T(()=>{"use strict";n();wo();St=String((Sa=(ba=ne.safeWindow)==null?void 0:ba.navigator)==null?void 0:Sa.userAgent),id=/^((?!chrome|android).)*safari/i.test(St),sd=/firefox/i.test(St)&&/windows/i.test(St),wa=id||sd});var dn,ln,va,_n,Ia,to,k=T(()=>{"use strict";n();Tt();me();ta();ra();aa();yt();ia();no();mn();ya();wt();dn=5e4,ln=1e9,va=1,_n="logout",Ia="login",to="0"});var ro,un=T(()=>{"use strict";n();ro=()=>Date.now()/1e3});var Aa=T(()=>{"use strict";n()});var ka=T(()=>{"use strict";n()});var vt=T(()=>{"use strict";n();un();Aa();ka()});var It={};ae(It,{clear:()=>dd,getItem:()=>pd,localStorageKeys:()=>Ce,removeItem:()=>md,setItem:()=>cd});var Ce,gn,cd,pd,md,dd,ao=T(()=>{"use strict";n();vt();Ce={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},gn=typeof localStorage!="undefined",cd=({key:e,data:o,expires:t})=>{!gn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},pd=e=>{if(!gn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:ro()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},md=e=>{!gn||localStorage.removeItem(String(e))},dd=()=>{!gn||localStorage.clear()}});var At={};ae(At,{clear:()=>Ca,getItem:()=>Pa,removeItem:()=>Ea,setItem:()=>La,storage:()=>ld});var La,Pa,Ea,Ca,ld,Na=T(()=>{"use strict";n();La=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Pa=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ea=e=>sessionStorage.removeItem(String(e)),Ca=()=>sessionStorage.clear(),ld={setItem:La,getItem:Pa,removeItem:Ea,clear:Ca}});var We,io=T(()=>{"use strict";n();ao();Na();We={session:At,local:It}});var kt,N,K,R=T(()=>{"use strict";n();kt=require("@reduxjs/toolkit");k();N=(0,kt.createAction)(_n),K=(0,kt.createAction)(Ia,e=>({payload:e}))});var Pt,Ra,Da,fn,Lt,Ma,vo,Oa,Et,ty,_d,ud,ry,ay,iy,gd,fd,hn,Tn=T(()=>{"use strict";n();Pt=require("@multiversx/sdk-core"),Ra=require("@reduxjs/toolkit"),Da=require("redux-persist");k();io();ao();R();fn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:to},Lt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":fn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ma=(0,Ra.createSlice)({name:"accountInfoSlice",initialState:Lt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Pt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:fn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(N,()=>(We.local.removeItem(Ce.loginExpiresAt),Lt)),e.addCase(K,(o,t)=>{let{address:a}=t.payload;o.address=a,o.publicKey=new Pt.Address(a).hex()}),e.addCase(Da.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:a}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=a;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:Lt.accounts,o.publicKey=d})}}),{setAccount:vo,setAddress:Oa,setAccountNonce:Et,setAccountShard:ty,setLedgerAccount:_d,updateLedgerAccount:ud,setWalletConnectAccount:ry,setIsAccountLoading:ay,setAccountLoadingError:iy,setWebsocketEvent:gd,setWebsocketBatchEvent:fd}=Ma.actions,hn=Ma.reducer});function Io(){return new Date().setHours(new Date().getHours()+24)}function Ao(e){We.local.setItem({key:Ce.loginExpiresAt,data:e,expires:e})}var Ct=T(()=>{"use strict";n();io();ao()});var Fa,Ba,Ua,fy,hd,Td,ko,hy,xd,Wa,Ty,xy,yy,xn,yn=T(()=>{"use strict";n();Fa=require("@reduxjs/toolkit");Ct();C();R();Ba={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ua=(0,Fa.createSlice)({name:"loginInfoSlice",initialState:Ba,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(N,()=>Ba),e.addCase(K,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Ao(Io())})}}),{setLoginMethod:fy,setWalletConnectLogin:hd,setLedgerLogin:Td,setTokenLogin:ko,setTokenLoginSignature:hy,setWalletLogin:xd,invalidateLoginSession:Wa,setLogoutRoute:Ty,setIsWalletConnectV2Initialized:xy,setWebviewLogin:yy}=Ua.actions,xn=Ua.reducer});var Ha,Ga,Va,vy,yd,Iy,bd,bn,Sn=T(()=>{"use strict";n();Ha=require("@reduxjs/toolkit");R();Ga={},Va=(0,Ha.createSlice)({name:"modalsSlice",initialState:Ga,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(N,()=>Ga)}}),{setTxSubmittedModal:vy,setNotificationModal:yd,clearTxSubmittedModal:Iy,clearNotificationModal:bd}=Va.actions,bn=Va.reducer});var Ge,so=T(()=>{"use strict";n();Ge=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var F,H=T(()=>{"use strict";n();so();F=()=>{if(!Ge())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:a,href:c,search:p}}=window;return{pathname:o,hash:t,origin:a,href:c,search:p}}});var $a=T(()=>{"use strict";n();H()});var ja=T(()=>{"use strict";n();V()});var qa,za=T(()=>{"use strict";n();wo();qa=e=>{if(!ne.safeWindow.location)return;if(!new URL(ne.safeWindow.location.href).protocol.startsWith("http"))return ne.safeWindow.location.reload();ne.safeWindow.location.assign(e)}});var V=T(()=>{"use strict";n();$a();ja();H();za()});var Sd,wn,Lo=T(()=>{"use strict";n();V();Sd=!1,wn=({timeout:e=0,url:o})=>{Sd||setTimeout(()=>{if(!!window)return qa(o)},e)}});function Ne({callbackRoute:e,onLoginRedirect:o,options:t}){let a=Boolean(e),c=typeof o=="function";if(a&&e!=null){if(c)return o(e,t);wn({url:e,timeout:wd})}}var wd,Ka=T(()=>{"use strict";n();Lo();wd=200});function Xa(e){return e[Math.floor(Math.random()*e.length)]}var Ya=T(()=>{"use strict";n()});var Nt=T(()=>{"use strict";n();yt()});var be=T(()=>{"use strict";n();Ka();Ya();Nt()});var Ja,Za,Qa,Rt,Id,ei,tb,rb,Ad,vn,In=T(()=>{"use strict";n();Ja=require("@reduxjs/toolkit"),Za=x(require("lodash.omit")),Qa=require("redux-persist");mn();R();be();Rt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Id={network:Rt},ei=(0,Ja.createSlice)({name:"appConfig",initialState:Id,reducers:{initializeNetworkConfig:(e,o)=>{let t=Xa(o.payload.walletConnectV2RelayAddresses),a=(0,Za.default)(o.payload,"walletConnectV2RelayAddresses");e.network=v(u(u({},e.network),a),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(N,o=>{o.network.customWalletAddress=void 0}),e.addCase(Qa.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:a}}=t.payload;o.network.customWalletAddress=a})}}),{initializeNetworkConfig:tb,updateNetworkConfig:rb,setCustomWalletAddress:Ad}=ei.actions,vn=ei.reducer});var oi,Dt,ni,mb,db,lb,An,kn=T(()=>{"use strict";n();oi=require("@reduxjs/toolkit");B();R();Dt={isSigning:!1,signedSessions:{}},ni=(0,oi.createSlice)({name:"signedMessageInfoSliceState",initialState:Dt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:a,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=a.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),a)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Dt},extraReducers:e=>{e.addCase(N,()=>Dt)}}),{setSignSession:mb,clearSignedMessageInfo:db,setSignSessionState:lb}=ni.actions,An=ni.reducer});var ri,ai,ti,ii,kd,Ld,xb,Pd,Ln,Pn=T(()=>{"use strict";n();ri=require("@reduxjs/toolkit"),ai=require("redux-persist");B();un();R();ti={customToasts:[],transactionToasts:[]},ii=(0,ri.createSlice)({name:"toastsSlice",initialState:ti,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,a=e.customToasts.findIndex(c=>c.toastId===t);if(a!==-1){e.customToasts[a]=v(u(u({},e.customToasts[a]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(v(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:ro(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(N,()=>ti),e.addCase(ai.REHYDRATE,(o,t)=>{var c,p;let a=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=a})}}),{addCustomToast:kd,removeCustomToast:Ld,addTransactionToast:xb,removeTransactionToast:Pd}=ii.actions,Ln=ii.reducer});var si,Ot,Bt,Ft,Ed,Mt,ci,wb,Cd,Ut,En,Cn=T(()=>{"use strict";n();si=require("@reduxjs/toolkit");R();Ot="Transaction failed",Bt="Transaction successful",Ft="Processing transaction",Ed="Transaction submitted",Mt={},ci=(0,si.createSlice)({name:"transactionsInfo",initialState:Mt,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:a}=o.payload;t!=null&&(e[t]={errorMessage:(a==null?void 0:a.errorMessage)||Ot,successMessage:(a==null?void 0:a.successMessage)||Bt,processingMessage:(a==null?void 0:a.processingMessage)||Ft,submittedMessage:(a==null?void 0:a.submittedMessage)||Ed,transactionDuration:a==null?void 0:a.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Mt},extraReducers:e=>{e.addCase(N,()=>Mt)}}),{clearTransactionsInfo:wb,setTransactionsDisplayInfo:Cd,clearTransactionsInfoForSessionId:Ut}=ci.actions,En=ci.reducer});function po(e){return e!=null&&(Gd(e)||qd(e))}function mo(e){return e!=null&&(Hd(e)||zd(e))}function lo(e){return e!=null&&(Vd(e)||Kd(e))}function pi(e){return e!=null&&($d(e)||Xd(e))}function Wt(e){return e!=null&&jd(e)}function Gd(e){return e!=null&&Nd.includes(e)}function Hd(e){return e!=null&&Rd.includes(e)}function Vd(e){return e!=null&&Dd.includes(e)}function $d(e){return e!=null&&Md.includes(e)}function jd(e){return e!=null&&Od.includes(e)}function qd(e){return e!=null&&Bd.includes(e)}function zd(e){return e!=null&&Fd.includes(e)}function Kd(e){return e!=null&&Ud.includes(e)}function Xd(e){return e!=null&&Wd.includes(e)}var Nd,Rd,Dd,Md,Od,Bd,Fd,Ud,Wd,_o=T(()=>{"use strict";n();C();Nd=["sent"],Rd=["success"],Dd=["fail","cancelled","timedOut"],Md=["invalid"],Od=["timedOut"],Bd=["pending"],Fd=["success"],Ud=["fail","invalid"],Wd=["not executed"]});var mi,di,Po,Yd,li,_i,ui,Jd,Nn,Zd,Qd,Nb,el,Eo,Gt,Rb,Rn,Dn=T(()=>{"use strict";n();mi=require("@reduxjs/toolkit"),di=require("redux-persist");C();_o();R();Po={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Yd={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},li=(0,mi.createSlice)({name:"transactionsSlice",initialState:Po,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,g;let{sessionId:t,transactions:a,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Yd),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:a,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=Po.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:a,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=a,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,S,h,w,L,P,D,Y;let{sessionId:t,status:a,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(S=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:S.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(M=>M.hash===p?v(u(u({},m!=null?m:{}),M),{status:a,errorMessage:c,inTransit:d}):M);let j=(w=(h=e.signedTransactions[t])==null?void 0:h.transactions)==null?void 0:w.every(M=>mo(M.status)),ee=(P=(L=e.signedTransactions[t])==null?void 0:L.transactions)==null?void 0:P.some(M=>lo(M.status)),re=(Y=(D=e.signedTransactions[t])==null?void 0:D.transactions)==null?void 0:Y.every(M=>pi(M.status));j&&(e.signedTransactions[t].status="success"),ee&&(e.signedTransactions[t].status="fail"),re&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:a}=o.payload;e.customTransactionInformationForSessionId[t]=a,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Po.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Po.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:a}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),a))}},extraReducers:e=>{e.addCase(N,()=>Po),e.addCase(di.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:a,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(a).reduce((d,[l,g])=>{let S=new Date(l),h=new Date;return h.setHours(h.getHours()+5),h-S>0||(d[l]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),a!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:_i,updateSignedTransactions:ui,setTransactionsToSign:Jd,clearAllTransactionsToSign:Nn,clearAllSignedTransactions:Zd,clearSignedTransaction:Qd,clearTransactionToSign:Nb,setSignTransactionsError:el,setSignTransactionsCancelMessage:Eo,moveTransactionsToSignedState:Gt,updateSignedTransactionsCustomTransactionInformation:Rb}=li.actions,Rn=li.reducer});var gi,Ht,fi,Bb,Fb,ol,Ub,Mn,On=T(()=>{"use strict";n();gi=require("@reduxjs/toolkit");R();Ht={},fi=(0,gi.createSlice)({name:"batchTransactionsSlice",initialState:Ht,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Ht},extraReducers:e=>{e.addCase(N,()=>Ht)}}),{setBatchTransactions:Bb,updateBatchTransactions:Fb,clearBatchTransactions:ol,clearAllBatchTransactions:Ub}=fi.actions,Mn=fi.reducer});var Ti,hi,xi,Vb,yi,Vt=T(()=>{"use strict";n();Ti=require("@reduxjs/toolkit");R();hi={},xi=(0,Ti.createSlice)({name:"dappConfigSlice",initialState:hi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(N,()=>hi)}}),{setDappConfig:Vb}=xi.actions,yi=xi.reducer});var E=T(()=>{"use strict";n();Tn();yn();Sn();In();kn();Pn();Cn();Dn();On();Vt()});var $t=T(()=>{"use strict";n()});var wi,al,il,He,Un=T(()=>{"use strict";n();wi=require("@reduxjs/toolkit");$t();Tn();On();Vt();yn();Sn();In();kn();Pn();Cn();Dn();al={["account"]:hn,["dappConfig"]:yi,["loginInfo"]:xn,["modals"]:bn,["networkConfig"]:vn,["signedMessageInfo"]:An,["toasts"]:Ln,["transactionsInfo"]:En,["transactions"]:Rn,["batchTransactions"]:Mn},il=(e={})=>(0,wi.combineReducers)(u(u({},al),e)),He=il});var ki={};ae(ki,{default:()=>Sl,sessionStorageReducers:()=>jt});function Se(e,o=[]){return{key:e,version:1,storage:Ii.default,blacklist:o}}var X,vi,Ii,sl,Co,cl,pl,ml,dl,ll,_l,ul,gl,fl,hl,Ai,Tl,jt,xl,yl,bl,Sl,Li=T(()=>{"use strict";n();X=require("redux-persist"),vi=x(require("redux-persist/lib/storage")),Ii=x(require("redux-persist/lib/storage/session"));Un();E();Tn();On();yn();Sn();In();kn();Pn();Cn();Dn();$t();sl={persistReducersStorageType:"localStorage"},Co={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},cl=Se(Co["account"]),pl=Se(Co["loginInfo"]),ml=Se(Co["modals"]),dl=Se(Co["networkConfig"]),ll={2:e=>v(u({},e),{networkConfig:Rt})};_l=Se("sdk-dapp-transactionsInfo"),ul=Se("sdk-dapp-transactions",["transactionsToSign"]),gl=Se("sdk-dapp-batchTransactions",["batchTransactions"]),fl=Se("sdk-dapp-toasts"),hl=Se("sdk-dapp-signedMessageInfo"),Ai={key:"sdk-dapp-store",version:2,storage:vi.default,whitelist:Object.keys(Co),migrate:(0,X.createMigrate)(ll,{debug:!1})},Tl=v(u({},Ai),{whitelist:[]}),jt={["toasts"]:(0,X.persistReducer)(fl,Ln),["transactions"]:(0,X.persistReducer)(ul,Rn),["transactionsInfo"]:(0,X.persistReducer)(_l,En),["batchTransactions"]:(0,X.persistReducer)(gl,Mn),["signedMessageInfo"]:(0,X.persistReducer)(hl,An)},xl=v(u({},jt),{["account"]:(0,X.persistReducer)(cl,hn),["loginInfo"]:(0,X.persistReducer)(pl,xn),["modals"]:(0,X.persistReducer)(ml,bn),["networkConfig"]:(0,X.persistReducer)(dl,vn)}),yl=sl.persistReducersStorageType==="localStorage",bl=yl?(0,X.persistReducer)(Ai,He(jt)):(0,X.persistReducer)(Tl,He(xl)),Sl=bl});var Pi={};ae(Pi,{default:()=>wl});var wl,Ei=T(()=>{"use strict";n();Un();wl=He()});var Ci={};ae(Ci,{default:()=>Il});var Q,vl,Il,Ni=T(()=>{"use strict";n();Q=require("redux-persist"),vl=[Q.FLUSH,Q.REHYDRATE,Q.PAUSE,Q.PERSIST,Q.PURGE,Q.REGISTER],Il=vl});var Mi={};ae(Mi,{default:()=>Di});function Di(e){return(0,Ri.persistStore)(e)}var Ri,Oi=T(()=>{"use strict";n();Ri=require("redux-persist")});var Ls=b((WD,ks)=>{n();var Su=typeof i=="object"&&i&&i.Object===Object&&i;ks.exports=Su});var Ho=b((GD,Ps)=>{n();var wu=Ls(),vu=typeof self=="object"&&self&&self.Object===Object&&self,Iu=wu||vu||Function("return this")();Ps.exports=Iu});var ir=b((HD,Es)=>{n();var Au=Ho(),ku=Au.Symbol;Es.exports=ku});var Ds=b((VD,Rs)=>{n();var Cs=ir(),Ns=Object.prototype,Lu=Ns.hasOwnProperty,Pu=Ns.toString,Vo=Cs?Cs.toStringTag:void 0;function Eu(e){var o=Lu.call(e,Vo),t=e[Vo];try{e[Vo]=void 0;var a=!0}catch(p){}var c=Pu.call(e);return a&&(o?e[Vo]=t:delete e[Vo]),c}Rs.exports=Eu});var Os=b(($D,Ms)=>{n();var Cu=Object.prototype,Nu=Cu.toString;function Ru(e){return Nu.call(e)}Ms.exports=Ru});var sr=b((jD,Us)=>{n();var Bs=ir(),Du=Ds(),Mu=Os(),Ou="[object Null]",Bu="[object Undefined]",Fs=Bs?Bs.toStringTag:void 0;function Fu(e){return e==null?e===void 0?Bu:Ou:Fs&&Fs in Object(e)?Du(e):Mu(e)}Us.exports=Fu});var Gs=b((qD,Ws)=>{n();var Uu=Array.isArray;Ws.exports=Uu});var Vs=b((zD,Hs)=>{n();function Wu(e){return e!=null&&typeof e=="object"}Hs.exports=Wu});var js=b((KD,$s)=>{n();var Gu=sr(),Hu=Gs(),Vu=Vs(),$u="[object String]";function ju(e){return typeof e=="string"||!Hu(e)&&Vu(e)&&Gu(e)==$u}$s.exports=ju});var et=b((H3,nc)=>{n();function cg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}nc.exports=cg});var rc=b((V3,tc)=>{n();var pg=sr(),mg=et(),dg="[object AsyncFunction]",lg="[object Function]",_g="[object GeneratorFunction]",ug="[object Proxy]";function gg(e){if(!mg(e))return!1;var o=pg(e);return o==lg||o==_g||o==dg||o==ug}tc.exports=gg});var ic=b(($3,ac)=>{n();var fg=Ho(),hg=fg["__core-js_shared__"];ac.exports=hg});var pc=b((j3,cc)=>{n();var lr=ic(),sc=function(){var e=/[^.]+$/.exec(lr&&lr.keys&&lr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Tg(e){return!!sc&&sc in e}cc.exports=Tg});var dc=b((q3,mc)=>{n();var xg=Function.prototype,yg=xg.toString;function bg(e){if(e!=null){try{return yg.call(e)}catch(o){}try{return e+""}catch(o){}}return""}mc.exports=bg});var _c=b((z3,lc)=>{n();var Sg=rc(),wg=pc(),vg=et(),Ig=dc(),Ag=/[\\^$.*+?()[\]{}|]/g,kg=/^\[object .+?Constructor\]$/,Lg=Function.prototype,Pg=Object.prototype,Eg=Lg.toString,Cg=Pg.hasOwnProperty,Ng=RegExp("^"+Eg.call(Cg).replace(Ag,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Rg(e){if(!vg(e)||wg(e))return!1;var o=Sg(e)?Ng:kg;return o.test(Ig(e))}lc.exports=Rg});var gc=b((K3,uc)=>{n();function Dg(e,o){return e==null?void 0:e[o]}uc.exports=Dg});var ot=b((X3,fc)=>{n();var Mg=_c(),Og=gc();function Bg(e,o){var t=Og(e,o);return Mg(t)?t:void 0}fc.exports=Bg});var zo=b((Y3,hc)=>{n();var Fg=ot(),Ug=Fg(Object,"create");hc.exports=Ug});var yc=b((J3,xc)=>{n();var Tc=zo();function Wg(){this.__data__=Tc?Tc(null):{},this.size=0}xc.exports=Wg});var Sc=b((Z3,bc)=>{n();function Gg(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}bc.exports=Gg});var vc=b((Q3,wc)=>{n();var Hg=zo(),Vg="__lodash_hash_undefined__",$g=Object.prototype,jg=$g.hasOwnProperty;function qg(e){var o=this.__data__;if(Hg){var t=o[e];return t===Vg?void 0:t}return jg.call(o,e)?o[e]:void 0}wc.exports=qg});var Ac=b((eM,Ic)=>{n();var zg=zo(),Kg=Object.prototype,Xg=Kg.hasOwnProperty;function Yg(e){var o=this.__data__;return zg?o[e]!==void 0:Xg.call(o,e)}Ic.exports=Yg});var Lc=b((oM,kc)=>{n();var Jg=zo(),Zg="__lodash_hash_undefined__";function Qg(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Jg&&o===void 0?Zg:o,this}kc.exports=Qg});var Ec=b((nM,Pc)=>{n();var ef=yc(),of=Sc(),nf=vc(),tf=Ac(),rf=Lc();function ho(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var a=e[o];this.set(a[0],a[1])}}ho.prototype.clear=ef;ho.prototype.delete=of;ho.prototype.get=nf;ho.prototype.has=tf;ho.prototype.set=rf;Pc.exports=ho});var Nc=b((tM,Cc)=>{n();function af(){this.__data__=[],this.size=0}Cc.exports=af});var Dc=b((rM,Rc)=>{n();function sf(e,o){return e===o||e!==e&&o!==o}Rc.exports=sf});var Ko=b((aM,Mc)=>{n();var cf=Dc();function pf(e,o){for(var t=e.length;t--;)if(cf(e[t][0],o))return t;return-1}Mc.exports=pf});var Bc=b((iM,Oc)=>{n();var mf=Ko(),df=Array.prototype,lf=df.splice;function _f(e){var o=this.__data__,t=mf(o,e);if(t<0)return!1;var a=o.length-1;return t==a?o.pop():lf.call(o,t,1),--this.size,!0}Oc.exports=_f});var Uc=b((sM,Fc)=>{n();var uf=Ko();function gf(e){var o=this.__data__,t=uf(o,e);return t<0?void 0:o[t][1]}Fc.exports=gf});var Gc=b((cM,Wc)=>{n();var ff=Ko();function hf(e){return ff(this.__data__,e)>-1}Wc.exports=hf});var Vc=b((pM,Hc)=>{n();var Tf=Ko();function xf(e,o){var t=this.__data__,a=Tf(t,e);return a<0?(++this.size,t.push([e,o])):t[a][1]=o,this}Hc.exports=xf});var jc=b((mM,$c)=>{n();var yf=Nc(),bf=Bc(),Sf=Uc(),wf=Gc(),vf=Vc();function To(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var a=e[o];this.set(a[0],a[1])}}To.prototype.clear=yf;To.prototype.delete=bf;To.prototype.get=Sf;To.prototype.has=wf;To.prototype.set=vf;$c.exports=To});var zc=b((dM,qc)=>{n();var If=ot(),Af=Ho(),kf=If(Af,"Map");qc.exports=kf});var Yc=b((lM,Xc)=>{n();var Kc=Ec(),Lf=jc(),Pf=zc();function Ef(){this.size=0,this.__data__={hash:new Kc,map:new(Pf||Lf),string:new Kc}}Xc.exports=Ef});var Zc=b((_M,Jc)=>{n();function Cf(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Jc.exports=Cf});var Xo=b((uM,Qc)=>{n();var Nf=Zc();function Rf(e,o){var t=e.__data__;return Nf(o)?t[typeof o=="string"?"string":"hash"]:t.map}Qc.exports=Rf});var op=b((gM,ep)=>{n();var Df=Xo();function Mf(e){var o=Df(this,e).delete(e);return this.size-=o?1:0,o}ep.exports=Mf});var tp=b((fM,np)=>{n();var Of=Xo();function Bf(e){return Of(this,e).get(e)}np.exports=Bf});var ap=b((hM,rp)=>{n();var Ff=Xo();function Uf(e){return Ff(this,e).has(e)}rp.exports=Uf});var sp=b((TM,ip)=>{n();var Wf=Xo();function Gf(e,o){var t=Wf(this,e),a=t.size;return t.set(e,o),this.size+=t.size==a?0:1,this}ip.exports=Gf});var pp=b((xM,cp)=>{n();var Hf=Yc(),Vf=op(),$f=tp(),jf=ap(),qf=sp();function xo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var a=e[o];this.set(a[0],a[1])}}xo.prototype.clear=Hf;xo.prototype.delete=Vf;xo.prototype.get=$f;xo.prototype.has=jf;xo.prototype.set=qf;cp.exports=xo});var dp=b((yM,mp)=>{n();var zf="__lodash_hash_undefined__";function Kf(e){return this.__data__.set(e,zf),this}mp.exports=Kf});var _p=b((bM,lp)=>{n();function Xf(e){return this.__data__.has(e)}lp.exports=Xf});var gp=b((SM,up)=>{n();var Yf=pp(),Jf=dp(),Zf=_p();function nt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Yf;++o<t;)this.add(e[o])}nt.prototype.add=nt.prototype.push=Jf;nt.prototype.has=Zf;up.exports=nt});var hp=b((wM,fp)=>{n();function Qf(e,o,t,a){for(var c=e.length,p=t+(a?1:-1);a?p--:++p<c;)if(o(e[p],p,e))return p;return-1}fp.exports=Qf});var xp=b((vM,Tp)=>{n();function eh(e){return e!==e}Tp.exports=eh});var bp=b((IM,yp)=>{n();function oh(e,o,t){for(var a=t-1,c=e.length;++a<c;)if(e[a]===o)return a;return-1}yp.exports=oh});var wp=b((AM,Sp)=>{n();var nh=hp(),th=xp(),rh=bp();function ah(e,o,t){return o===o?rh(e,o,t):nh(e,th,t)}Sp.exports=ah});var Ip=b((kM,vp)=>{n();var ih=wp();function sh(e,o){var t=e==null?0:e.length;return!!t&&ih(e,o,0)>-1}vp.exports=sh});var kp=b((LM,Ap)=>{n();function ch(e,o,t){for(var a=-1,c=e==null?0:e.length;++a<c;)if(t(o,e[a]))return!0;return!1}Ap.exports=ch});var Pp=b((PM,Lp)=>{n();function ph(e,o){return e.has(o)}Lp.exports=ph});var Cp=b((EM,Ep)=>{n();var mh=ot(),dh=Ho(),lh=mh(dh,"Set");Ep.exports=lh});var Rp=b((CM,Np)=>{n();function _h(){}Np.exports=_h});var _r=b((NM,Dp)=>{n();function uh(e){var o=-1,t=Array(e.size);return e.forEach(function(a){t[++o]=a}),t}Dp.exports=uh});var Op=b((RM,Mp)=>{n();var ur=Cp(),gh=Rp(),fh=_r(),hh=1/0,Th=ur&&1/fh(new ur([,-0]))[1]==hh?function(e){return new ur(e)}:gh;Mp.exports=Th});var Fp=b((DM,Bp)=>{n();var xh=gp(),yh=Ip(),bh=kp(),Sh=Pp(),wh=Op(),vh=_r(),Ih=200;function Ah(e,o,t){var a=-1,c=yh,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=bh;else if(p>=Ih){var g=o?null:wh(e);if(g)return vh(g);m=!1,c=Sh,l=new xh}else l=o?[]:d;e:for(;++a<p;){var S=e[a],h=o?o(S):S;if(S=t||S!==0?S:0,m&&h===h){for(var w=l.length;w--;)if(l[w]===h)continue e;o&&l.push(h),d.push(S)}else c(l,h,t)||(l!==d&&l.push(h),d.push(S))}return d}Bp.exports=Ah});var Wp=b((MM,Up)=>{n();var kh=Fp();function Lh(e){return e&&e.length?kh(e):[]}Up.exports=Lh});var xr={};ae(xr,{css:()=>Zp,default:()=>pT});var Zp,pT,yr=T(()=>{"use strict";n();Zp=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zp));pT={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var ke={};ae(ke,{css:()=>om,default:()=>lT});var om,lT,Le=T(()=>{"use strict";n();om=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(om));lT={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Pr={};ae(Pr,{css:()=>um,default:()=>DT});var um,DT,Er=T(()=>{"use strict";n();um=`.dapp-core-component__loginButtonStyles__default-login-button {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(um));DT={"default-login-button":"dapp-core-component__loginButtonStyles__default-login-button",defaultLoginButton:"dapp-core-component__loginButtonStyles__default-login-button",wrapper:"dapp-core-component__loginButtonStyles__wrapper","login-text":"dapp-core-component__loginButtonStyles__login-text",loginText:"dapp-core-component__loginButtonStyles__login-text","button-wrapper":"dapp-core-component__loginButtonStyles__button-wrapper",buttonWrapper:"dapp-core-component__loginButtonStyles__button-wrapper","button-content":"dapp-core-component__loginButtonStyles__button-content",buttonContent:"dapp-core-component__loginButtonStyles__button-content","button-title":"dapp-core-component__loginButtonStyles__button-title",buttonTitle:"dapp-core-component__loginButtonStyles__button-title","button-icon":"dapp-core-component__loginButtonStyles__button-icon",buttonIcon:"dapp-core-component__loginButtonStyles__button-icon"}});var BT={};ae(BT,{CrossWindowLoginButton:()=>OT});module.exports=oe(BT);n();var hm=x(require("react"));Tt();n();n();n();var Hi=require("react"),uo=require("react-redux");n();var qt=require("@reduxjs/toolkit"),Wi=require("react-redux/lib/utils/Subscription");E();n();var bi=x(require("lodash.throttle"));k();E();Ct();io();ao();var nl=[_n],Bn=!1,tl=(0,bi.default)(()=>{Ao(Io())},5e3),Si=e=>o=>t=>{if(nl.includes(t.type))return o(t);let a=e.getState(),c=We.local.getItem(Ce.loginExpiresAt);if(!Boolean(a==null?void 0:a.account.address))return o(t);if(c==null)return Ao(Io());let m=Date.now();return c-m<0&&!Bn?setTimeout(()=>{Bn=!0,e.dispatch(Wa())},1e3):(Bn&&(Bn=!1),tl()),o(t)};n();n();function Fn(){return typeof sessionStorage!="undefined"}var Bi=Fn()?(Li(),oe(ki)).default:(Ei(),oe(Pi)).default,Fi=Fn()?(Ni(),oe(Ci)).default:[],Ui=Fn()?(Oi(),oe(Mi)).default:e=>e;Un();var I=(0,qt.configureStore)({reducer:Bi,middleware:e=>e({serializableCheck:{ignoredActions:[...Fi,Et.type,vo.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Si)}),Gi=(0,Wi.createSubscription)(I),GS=Ui(I),HS=(0,qt.configureStore)({reducer:He});var Al={store:I,subscription:Gi},zt=(0,Hi.createContext)(Al),qS=(0,uo.createStoreHook)(zt),G=(0,uo.createDispatchHook)(zt),A=(0,uo.createSelectorHook)(zt);n();n();E();n();var Vi=x(require("lodash.isequal")),Wn=require("reselect"),y=(0,Wn.createSelectorCreator)(Wn.defaultMemoize,Vi.default);var _e=e=>e.account,Ve=y(_e,e=>e.address),$e=y(_e,Ve,(e,o)=>o in e.accounts?e.accounts[o]:fn),kl=y(_e,$e,(e,o)=>{let c=e,{accounts:t}=c,a=Pe(c,["accounts"]);return v(u({},a),{address:o.address,account:o})}),JS=y($e,e=>e.balance),$i=y($e,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),ZS=y(_e,e=>e.shard),Ll=y(_e,e=>e.ledgerAccount),QS=y(_e,e=>e.walletConnectAccount),e0=y(_e,e=>e.isAccountLoading),o0=y(_e,e=>e.accountLoadingError),Pl=y(_e,e=>e.websocketEvent),El=y(_e,e=>e.websocketBatchEvent);n();var ji=e=>e.dappConfig,r0=y(ji,e=>e.shouldUseWebViewProvider);n();var J=e=>e.loginInfo,Cl=y(J,e=>e.loginMethod),No=y(J,Ve,(e,o)=>Boolean(o)),c0=y(J,e=>e.walletConnectLogin),Nl=y(J,e=>e.ledgerLogin),Rl=y(J,e=>e.walletLogin),p0=y(J,e=>e.isLoginSessionInvalid),Ro=y(J,e=>e.tokenLogin),qi=y(J,e=>e.logoutRoute),Dl=y(J,e=>e.isWalletConnectV2Initialized);n();var zi=e=>e.modals,l0=y(zi,e=>e.txSubmittedModal),Ml=y(zi,e=>e.notificationModal);n();var ue=e=>e.networkConfig,Gn=y(ue,e=>e.network.chainId),Ol=y(ue,e=>e.network.roundDuration),g0=y(ue,e=>e.network.walletConnectBridgeAddress),Bl=y(ue,e=>e.network.walletConnectV2RelayAddress),Fl=y(ue,e=>e.network.walletConnectV2ProjectId),Ul=y(ue,e=>e.network.walletConnectV2Options),Wl=y(ue,e=>e.network.walletConnectDeepLink),$=y(ue,e=>e.network),Kt=y($,e=>e.apiAddress),Ki=y($,e=>e.explorerAddress),Xi=y($,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Gl=y($,e=>e.xAliasAddress),Yi=y($,e=>e.egldLabel);n();var Hn=e=>e.signedMessageInfo,T0=y(Hn,e=>e.isSigning),x0=y(Hn,e=>e.errorMessage),y0=y(Hn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),b0=y(Hn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Ji=e=>e.toasts,Hl=y(Ji,e=>e.customToasts),Zi=y(Ji,e=>e.transactionToasts);n();E();var Qi={errorMessage:Ot,successMessage:Bt,processingMessage:Ft},es=e=>e.transactionsInfo,Vl=y(es,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Qi);n();n();var ge=require("@multiversx/sdk-core");k();n();var Xt=require("@multiversx/sdk-core/out");n();n();function Vn(e){try{let o=atob(e),t=btoa(o),a=r.Buffer.from(e,"base64").toString(),c=r.Buffer.from(a).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function je(e){return Vn(e)?atob(e):e}n();n();n();n();var os=e=>{let o=e!=null?e:"";return Vn(o)?Xt.TransactionPayload.fromEncoded(o):new Xt.TransactionPayload(o)};n();k();var Do=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(xt).some(t=>e.startsWith(t)):!1;function $n(e){var a,c,p;let o=u({},e);Do({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ge.Transaction(u(u(v(u(v(u({value:o.value.valueOf(),data:os(o.data),nonce:o.nonce.valueOf(),receiver:new ge.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ge.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(a=o.gasLimit.valueOf())!=null?a:dn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:ln,chainID:o.chainID.valueOf(),version:new ge.TransactionVersion((p=o.version)!=null?p:va)}),o.options?{options:new ge.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ge.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();k();n();n();n();var zl=require("@multiversx/sdk-core/out");n();k();n();var ns=require("@multiversx/sdk-core");B();n();var Kl=require("@multiversx/sdk-core");n();n();n();var Xl=require("@multiversx/sdk-core"),Yl=x(require("bignumber.js"));C();n();n();n();var Mo="accounts";var Jt="blocks";n();n();n();n();z();n();n();z();n();n();n();var r_=x(require("bignumber.js"));k();n();var t_=require("@multiversx/sdk-core"),Zt=x(require("bignumber.js"));k();n();var o_=x(require("bignumber.js"));n();Zt.default.config({ROUNDING_MODE:Zt.default.ROUND_FLOOR});n();n();n();k();n();n();n();n();k();n();k();n();var a_=require("@multiversx/sdk-core");k();n();var Bo=require("@multiversx/sdk-core"),c_=x(require("bignumber.js"));k();n();n();var i_=x(require("bignumber.js"));k();n();k();n();n();n();n();n();n();k();n();k();n();k();n();z();var m_=["reDelegateRewards","claimRewards","unBond"],d_=["wrapEgld","unwrapEgld"],l_=["unStake"],__=["unDelegate"];n();n();n();k();n();var h_=x(require("bignumber.js"));n();n();z();n();var x_=x(require("bignumber.js"));n();n();n();n();var S_=x(require("bignumber.js"));B();n();n();n();n();C();n();var A_=require("@multiversx/sdk-web-wallet-provider");k();n();var v_=x(require("qs"));n();V();so();n();so();var nk={search:Ge()?window.location.search:"",removeParams:[]};n();n();n();H();n();z();n();n();H();n();var k_=x(require("linkifyjs"));n();k();n();var L_=x(require("bignumber.js"));n();B();n();n();C();n();C();n();n();n();z();n();z();n();var P_=x(require("bignumber.js"));k();z();n();z();n();var cs=require("react");B();n();n();z();n();n();var E_=require("@multiversx/sdk-core/out"),C_=x(require("bignumber.js"));z();n();B();n();n();B();var zL=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var ps=require("react");B();H();n();var R_=require("react");z();var o1=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];_o();n();var zn=e=>e.transactions,go=y(zn,e=>e.signedTransactions),D_=y(zn,e=>e.signTransactionsError),ms=y(zn,e=>e.signTransactionsCancelMessage),Kn=e=>o=>Object.entries(o).reduce((t,[a,c])=>(e(c.status)&&(t[a]=c),t),{}),ds=y(go,Kn(po)),ls=y(go,Kn(mo)),_s=y(go,Kn(lo)),M_=y(go,Kn(Wt)),us=y(zn,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:v(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>$n(t)))||[]})}),O_=y(go,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var gs=require("react");n();E();n();n();n();n();n();n();n();n();var F_=require("@multiversx/sdk-extension-provider"),U_=require("@multiversx/sdk-hw-provider"),W_=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),G_=require("@multiversx/sdk-opera-provider"),H_=require("@multiversx/sdk-passkey-provider/out"),V_=require("@multiversx/sdk-web-wallet-provider");k();Ee();n();var qe=require("@multiversx/sdk-web-wallet-iframe-provider/out"),fs=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");C();n();var te=e=>`Unable to perform ${e}, Provider not initialized`,Xn=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(te("getAccount"))}setAccount(o){throw new Error(te(`setAccount: ${o}`))}login(o){throw new Error(te(`login with options: ${o}`))}logout(o){throw new Error(te(`logout with options: ${o}`))}getAddress(){throw new Error(te("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(te(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(te(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(te(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(te(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(te(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(te(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},nr=new Xn;var $_=nr;function ve(e){$_=e}E();n();n();n();n();n();var hs=require("@lifeomic/axios-fetch"),tr=x(require("axios")),rr=(0,hs.buildAxiosFetch)(tr.default),ar=(e,o)=>f(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let a=e.clone().json(),[c]=yield Promise.all([a]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function j_(e,o,t){return f(this,null,function*(){try{let a=yield rr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return ar(a,t)}catch(a){throw console.error("Fetch Error:",a),a}})}function q_(e,o){return f(this,null,function*(){try{let t=yield rr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return ar(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function z_(e,o,t){return f(this,null,function*(){try{let a=yield rr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return ar(a,t)}catch(a){throw console.error("Fetch Error:",a),a}})}var ze=tr.default.create();ze.get=q_;ze.post=j_;ze.patch=z_;n();var Uo=e=>{let o=e!=null?e:Kt(I.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var K_=x(require("axios"));n();var X_=x(require("swr"));var Y_=e=>{let t=`${Uo()}/${Mo}/${e}?withGuardianInfo=true`;return ze.get(t)},Ts=e=>f(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield Y_(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var fo=e=>Ts(e);n();C();n();n();n();H();n();function Go(e){let o=I.getState(),t=$i(o);return e?t&&!isNaN(t)?Math.max(t,e.nonce):e.nonce:t}_o();n();n();n();var J_=x(require("axios"));n();var Q_=x(require("axios"));no();n();k();n();var eu=x(require("axios"));n();var nu=x(require("axios"));n();n();var tu=x(require("axios"));n();var ru=x(require("axios"));n();n();E();C();n();n();n();n();H();n();R();B();n();E();n();var Ss=require("@multiversx/sdk-core");B();V();n();_o();n();E();C();n();E();B();n();n();n();B();n();mn();n();n();n();n();var cu=x(require("swr"));n();n();n();n();var ws=require("react");n();n();var pu=require("react"),mu=require("@multiversx/sdk-web-wallet-provider"),du=require("@multiversx/sdk-web-wallet-provider"),lu=x(require("qs"));k();E();C();bt();H();var UR=F();n();var oc=require("react"),dr=require("@multiversx/sdk-core");n();k();Nt();n();n();n();n();n();n();n();n();n();n();no();n();var fu=x(require("axios"));n();var Tu=x(require("axios"));n();no();n();no();n();n();n();n();var yu=require("@multiversx/sdk-opera-provider");n();var bu=require("@multiversx/sdk-extension-provider");n();Ee();n();n();n();n();var qs=x(js());var Ke=e=>{if(!e||!(0,qs.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,a,c,p]=o,m=JSON.parse(je(p)),d=je(t);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:a}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var Zs=require("@multiversx/sdk-native-auth-client");n();var Xs=x(require("axios"));n();n();n();function zs(e){return f(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Ks=(e,o,t,a=0)=>f(void 0,null,function*(){try{return yield e(...t)}catch(c){return a<o.retries?((o==null?void 0:o.delay)!=null&&(yield zs(o.delay)),yield Ks(e,o,t,a+1)):null}}),cr=(e,o={retries:5,delay:500})=>(...t)=>f(void 0,null,function*(){return yield Ks(e,o,t)});var qu=4,zu=3e4,Zn={current:null},Xe={current:null},Ku=cr((e,o,t)=>f(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:a}=yield Xs.default.get(`${e}/${Jt}?from=${qu}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=a;return c}));function Ys(e,o,t,a){return f(this,null,function*(){if(e==null)throw new Error("missing api url");let c=Date.now();if(Zn.current!=null&&c<Zn.current.timestamp*1e3+zu&&!a)return Zn.current;if(Xe.current!=null)return yield Xe.current;Xe.current=Ku(e,o,t);try{let p=yield Xe.current;if(p==null)throw Xe.current=null,new Error("could not get block hash");return Zn.current={hash:p.hash,timestamp:p.timestamp},Xe.current=null,p}catch(p){return Xe.current=null,null}})}n();n();un();n();function Xu(e){return Object.prototype.toString.call(e)==="[object String]"}var pr=e=>{var t;if(!e||!Xu(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[a,c,p]=o,m=je(a),d=je(c),l=Ke(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let g=v(u({},l),{address:m,body:d,signature:p});return(t=l.extraInfo)!=null&&t.timestamp||delete g.extraInfo,g}catch(a){return null}};var mr={isExpired:!1},Js=e=>{if(!e)return mr;let o=pr(e);if(!o)return mr;let t=ro(),{ttl:a,extraInfo:c}=o,p=c==null?void 0:c.timestamp;if(!p)return mr;let m=p+a,d=t>m,l=m-t;return{isExpired:d,expiresAt:m,secondsUntilExpires:l}};n();H();var $o={origin:F().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60},jo=e=>{var t,a,c,p,m,d;return e===!0?$o:{origin:(t=e==null?void 0:e.origin)!=null?t:$o.origin,blockHashShard:e==null?void 0:e.blockHashShard,expirySeconds:(a=e==null?void 0:e.expirySeconds)!=null?a:$o.expirySeconds,apiAddress:(c=e==null?void 0:e.apiAddress)!=null?c:$o.apiAddress,tokenExpirationToastWarningSeconds:(p=e==null?void 0:e.tokenExpirationToastWarningSeconds)!=null?p:$o.tokenExpirationToastWarningSeconds,extraInfo:(m=e==null?void 0:e.extraInfo)!=null?m:{},gatewayUrl:e==null?void 0:e.gatewayUrl,extraRequestHeaders:(d=e==null?void 0:e.extraRequestHeaders)!=null?d:{}}};var qo=e=>{let{origin:o,apiAddress:t,expirySeconds:a,blockHashShard:c,extraInfo:p,gatewayUrl:m,extraRequestHeaders:d}=jo(e),l=new Zs.NativeAuthClient({origin:o,apiUrl:t,expirySeconds:a,blockHashShard:c,gatewayUrl:m,extraRequestHeaders:d});return{getNativeAuthConfig:jo,initialize:h=>f(void 0,null,function*(){var L,P;if(!t||!o)return"";let w=()=>l.getCurrentBlockHash();try{let D=(L=h==null?void 0:h.latestBlockInfo)!=null?L:yield Ys(t,c,w,h==null?void 0:h.noCache);if(!D)return"";let{hash:Y,timestamp:j}=D,ee=l.encodeValue(JSON.stringify(u(u({},(P=h==null?void 0:h.extraInfo)!=null?P:p),j?{timestamp:j}:{})));return`${l.encodeValue(o)}.${Y}.${a}.${ee}`}catch(D){return console.error("Error getting native auth token: ",D.toString()),""}}),getToken:({address:h,token:w,signature:L})=>l.getToken(h,w,L),getTokenExpiration:Js}};var Qs=t=>f(void 0,[t],function*({loginToken:e,extraInfoData:o}){if(e==null||Object.keys(o).length===0)return null;let a=Ke(String(e)),g=(a==null?void 0:a.extraInfo)||{},{timestamp:c}=g,p=Pe(g,["timestamp"]);if(!(a&&c!=null))return null;let d={hash:String(a==null?void 0:a.blockHash),timestamp:Number(c)};return yield qo({extraInfo:u(u({},p),o),expirySeconds:a==null?void 0:a.ttl,origin:a==null?void 0:a.origin}).initialize({latestBlockInfo:d})});var ec=p=>f(void 0,[p],function*({loginToken:e,extraInfoData:o,address:t,signature:a,loginService:c}){let m=yield Qs({loginToken:e,extraInfoData:o}),d=o.multisig||o.impersonate||t,l=m!=null?d:t;return m!=null&&c.setLoginToken(m),a&&c.setTokenLoginInfo({signature:a,address:t}),yield fo(l)});n();var Yu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Ju=require("@multiversx/sdk-passkey-provider/out");k();H();n();n();n();var tg=require("react"),rg=require("@multiversx/sdk-hw-provider");n();R();B();n();Lo();io();ao();V();n();n();var $p=require("react"),jp=require("@multiversx/sdk-core"),qh=require("@multiversx/sdk-extension-provider"),zh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Kh=require("@multiversx/sdk-passkey-provider/out"),Xh=x(Wp());k();n();n();var yo=()=>A($e);n();n();n();n();n();n();n();n();var Yo=x(require("react"));var JM=(0,Yo.createContext)({}),ZM=I.getState();n();var Hp=x(require("react"));n();var gr=x(require("react")),Ph=x(require("axios"));n();n();Ee();n();n();var Mh=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Oh=require("@multiversx/sdk-webview-provider/out/WebviewProvider");R();n();R();E();B();n();n();E();n();V();n();E();B();n();n();var Ch=require("@multiversx/sdk-core"),Nh=x(require("bignumber.js"));k();n();var Rh=x(require("bignumber.js"));k();E();C();V();H();n();var Vp=require("react"),Wh=require("@multiversx/sdk-extension-provider"),Gh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Hh=require("@multiversx/sdk-passkey-provider/out");Ee();E();n();E();B();Lo();H();n();me();E();n();n();var Jh=require("react");n();n();C();_o();n();var qp=require("react");n();n();var Qh=require("react"),eT=require("@multiversx/sdk-extension-provider");me();R();C();n();function Ie(){return No(I.getState())}be();V();V();n();n();Ee();B();var Me=e=>(Object.values(U).forEach(o=>{if(o!==(e==null?void 0:e.skipLoginMethod))switch(o){case"crossWindow":{let t=de.CrossWindowProvider.getInstance();t.isInitialized()&&t.dispose();break}case"iframe":{let t=qe.IframeProvider.getInstance();t.isInitialized()&&t.dispose();break}default:break}}),null);n();var zp=require("react"),tt=require("@multiversx/sdk-core");E();var Zh=(e,o)=>{var t;return o?o===!0?e:(t=o.apiAddress)!=null?t:e:null},Ae=e=>{let o=A($),t=A(Ro),a=(0,zp.useRef)(t==null?void 0:t.loginToken),c=Zh(o.apiAddress,e),p=jo(u(u({},e===!0?{}:e),c?{apiAddress:c}:{})),m=Boolean(e),d=qo(p),{address:l}=yo(),g=G(),S=P=>{a.current=P,g(ko(u(v(u({},t),{loginToken:P}),c?{nativeAuthConfig:p}:{})))},h=()=>{try{return d.initialize()}catch(P){console.error("Unable to get block. Login failed.",P);return}},w=({address:P,signature:D})=>{let Y=a.current;if(!Y)throw"Token not found. Call `setLoginToken` first.";if(!m){g(ko({loginToken:Y,signature:D}));return}let j=d.getToken({address:P,token:Y,signature:D});return g(ko(u({loginToken:Y,signature:D,nativeAuthToken:j},c?{nativeAuthConfig:p}:{}))),j};return{configuration:p,setLoginToken:S,getNativeAuthLoginToken:h,setTokenLoginInfo:w,refreshNativeAuthTokenLogin:Y=>f(void 0,[Y],function*({signMessageCallback:P,nativeAuthClientConfig:D}){let ee=yield qo(D||p).initialize({noCache:Boolean(D)});if(a.current=ee,!ee)return;let re=new tt.Message({address:new tt.Address(l),data:r.Buffer.from(`${l}${ee}`)}),M=yield P(re,{});if(!(M!=null&&M.signature))throw"Message not signed";return w({address:l,signature:r.Buffer.from(M.signature).toString("hex")})})}};n();var oT=require("react"),nT=require("@multiversx/sdk-opera-provider");me();R();C();be();V();H();n();var fr=require("react");wt();me();Ee();R();E();C();be();H();var hr=({callbackRoute:e,token:o,nativeAuth:t,onLoginRedirect:a,hasConsentPopup:c,walletAddress:p})=>{let[m,d]=(0,fr.useState)(""),[l,g]=(0,fr.useState)(!1),S=t!=null,h=Ae(t),w=o,L=A($),P=G(),D=Ie();function Y(){return f(this,null,function*(){if(D)throw new Error(ye);Me({skipLoginMethod:"crossWindow"}),g(!0);let ee=yield de.CrossWindowProvider.getInstance().init(),re=de.CrossWindowProvider.getInstance().setWalletUrl(p!=null?p:L.walletAddress);try{if(!ee){console.warn("Something went wrong trying to redirect to wallet login..");return}let{origin:M,pathname:on}=F(),rt=encodeURIComponent(`${M}${e!=null?e:on}`);if(S&&!w&&(w=yield h.getNativeAuthLoginToken(),!w)){console.warn("Fetching block failed. Login cancelled.");return}w&&h.setLoginToken(w);let at=u({callbackUrl:rt},w&&{token:w});(wa&&S||c)&&re.setShouldShowConsentPopup(!0);let{signature:nn,address:tn,multisig:Tm,impersonate:xm}=yield re.login(at);if(ve(re),!tn){g(!1),console.warn("Login cancelled.");return}let Ye=yield ec({loginToken:w,extraInfoData:{multisig:Tm,impersonate:xm},address:tn,signature:nn,loginService:h});if(!Ye)return;P(K({address:Ye.address,loginMethod:"crossWindow"})),P(Oa(Ye.address)),P(vo(v(u({},Ye),{nonce:Go(Ye)}))),Ne({callbackRoute:e,onLoginRedirect:a,options:{signature:nn,address:Ye.address}})}catch(M){console.error("error loging in",M),d("error logging in"+M.message)}finally{g(!1)}})}let j=Boolean(m);return[Y,{loginFailed:j,error:m,isLoading:l&&!j,isLoggedIn:D&&!j}]};n();var sT=require("react");me();E();n();n();vt();n();n();var tT=x(require("platform"));so();n();n();n();n();n();n();n();wo();C();n();n();var rT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Lo();io();n();n();n();E();n();n();var aT=x(require("axios"));V();n();n();var iT=x(et());wo();var Kp,Xp,Yp,WU=(Yp=(Xp=(Kp=ne.safeWindow)==null?void 0:Kp.location)==null?void 0:Xp.origin)==null?void 0:Yp.includes("localhost");n();H();n();n();var yT=require("react");k();n();n();k();var Tr=e=>{var c;let o=A(Ro),t=(c=o==null?void 0:o.loginToken)!=null?c:e;if(!t)return;let a=Ke(t);if(!!a)return a.origin.toLowerCase().startsWith(xa)};n();n();n();var cT=x(require("bignumber.js"));n();n();n();var Oe=x(require("react")),sm=require("react"),cm=require("react"),Ar=x(require("classnames")),pm=require("react-dom");k();n();var em=x(require("react"));n();var Zo=x(require("react"));n();so();var Jp=()=>!Ge();var mT=()=>f(void 0,null,function*(){return yield Promise.resolve().then(()=>(yr(),xr))}),dT=()=>(yr(),oe(xr)).default,br=Jp();function Qp({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[a,c]=Zo.default.useState(br?void 0:dT()),[p,m]=Zo.default.useState(br||t==null?void 0:t()),d=()=>f(this,null,function*(){(e?e():mT()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Zo.useEffect)(()=>{br&&d()},[]),{globalStyles:a,styles:p}}function fe(e,o){return t=>{let{globalStyles:a,styles:c}=Qp({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return em.default.createElement(e,v(u({},t),{globalStyles:a!=null?a:{},styles:c!=null?c:{}}))}}n();var nm=x(require("react")),tm=x(require("classnames"));var _T=({className:e,children:o,styles:t})=>nm.default.createElement("div",{className:(0,tm.default)(t==null?void 0:t.dappModalBody,e)},o),Sr=fe(_T,{ssrStyles:()=>Promise.resolve().then(()=>(Le(),ke)),clientStyles:()=>(Le(),oe(ke)).default});n();var wr=x(require("react")),rm=x(require("classnames"));var uT=({visible:e,customFooter:o,className:t,footerText:a,styles:c})=>e?wr.default.createElement("div",{className:(0,rm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:wr.default.createElement("div",null,a)):null,vr=fe(uT,{ssrStyles:()=>Promise.resolve().then(()=>(Le(),ke)),clientStyles:()=>(Le(),oe(ke)).default});n();var bo=x(require("react")),am=require("@fortawesome/free-solid-svg-icons"),im=require("@fortawesome/react-fontawesome"),Qo=x(require("classnames"));var gT=({visible:e,headerText:o,customHeader:t,className:a,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?bo.default.createElement("div",{className:(0,Qo.default)(l==null?void 0:l.dappModalHeader,a)},t):bo.default.createElement("div",{className:(0,Qo.default)(l==null?void 0:l.dappModalHeader,a)},bo.default.createElement("div",{className:(0,Qo.default)(l==null?void 0:l.dappModalHeaderText,p)},o),bo.default.createElement("button",{onClick:m,className:(0,Qo.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},bo.default.createElement(im.FontAwesomeIcon,{size:"lg",icon:am.faTimes}))):null,Ir=fe(gT,{ssrStyles:()=>Promise.resolve().then(()=>(Le(),ke)),clientStyles:()=>(Le(),oe(ke)).default});var hT={showHeader:!0,showFooter:!1,headerText:"",footerText:""},TT=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:a,config:c=hT,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:g})=>{let[S,h]=(0,sm.useState)(!1);if((0,cm.useEffect)(()=>{h(!0)},[]),!l)return null;let{showHeader:w,showFooter:L,headerText:P,footerText:D,modalDialogClassName:Y="dapp-modal-dialog",modalContentClassName:j="dapp-modal-dialog-content",modalHeaderClassName:ee="dapp-modal-dialog-header",modalHeaderTextClassName:re="dapp-modal-dialog-header-text",modalCloseButtonClassName:M="dapp-modal-dialog-close-button",modalBodyClassName:on="dapp-modal-dialog-content-body",modalFooterClassName:rt="dapp-modal-dialog-footer",customModalHeader:at,customModalFooter:Cr}=c,nn=tn=>{tn.key==="Escape"&&a&&(m==null||m())};return Oe.default.createElement(Oe.default.Fragment,null,S&&(0,pm.createPortal)(Oe.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Ar.default)(Y,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:nn},Oe.default.createElement("div",{className:(0,Ar.default)(g==null?void 0:g.dappModalContent,j)},Oe.default.createElement(Ir,{visible:w,headerText:P,customHeader:at,className:ee,headerTextClassName:re,closeButtonClassName:M,onHide:m}),Oe.default.createElement(Sr,{className:on},o),Oe.default.createElement(vr,{visible:L,customFooter:Cr,footerText:D,className:rt}))),d!=null?d:document==null?void 0:document.body))},xT=fe(TT,{ssrStyles:()=>Promise.resolve().then(()=>(Le(),ke)),clientStyles:()=>(Le(),oe(ke)).default});n();n();var mm=require("react");n();n();var dm=require("react"),ST=require("@multiversx/sdk-hw-provider");me();R();E();C();be();n();var bT=require("react");n();n();var kr=require("react");R();E();C();be();H();n();var vT=require("react"),IT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");me();R();C();be();V();V();n();var AT=require("react"),kT=require("@multiversx/sdk-passkey-provider/out");me();R();C();be();V();V();n();n();var lm=require("react");n();var ET=require("react");n();var Lr=require("react"),PT=require("socket.io-client");E();n();n();n();var CT=require("react");B();n();n();n();var RT=x(require("swr"));n();n();n();n();var NT=x(require("axios"));n();n();var en=x(require("react")),gm=x(require("classnames"));var MT=({onLogin:e,text:o="Default Login Button",className:t="dapp-login-button",btnClassName:a="dapp-default-login-button",disabled:c,"data-testid":p,children:m,globalStyles:d,styles:l})=>{let g=(0,en.useMemo)(()=>({wrapper:(0,gm.default)(d==null?void 0:d.btn,d==null?void 0:d.btnPrimary,d==null?void 0:d.px4,d==null?void 0:d.m1,d==null?void 0:d.mx3,{[a]:a!=null},t),loginText:l==null?void 0:l.loginText,wrapperClassName:t}),[d,l]);return en.default.createElement("button",{"data-testid":p,disabled:c,className:g.wrapper,onClick:e},m||en.default.createElement("span",{className:g.loginText},o))},fm=fe(MT,{ssrStyles:()=>Promise.resolve().then(()=>(Er(),Pr)),clientStyles:()=>(Er(),oe(Pr)).default});var OT=({token:e,className:o="dapp-window-wallet-login",children:t,callbackRoute:a,buttonClassName:c,nativeAuth:p,loginButtonText:m="Window Wallet",onLoginRedirect:d,disabled:l,hasConsentPopup:g,"data-testid":S="accessCrossWindowWalletBtn"})=>{let h=Tr(e),[w]=hr({callbackRoute:a,token:e,onLoginRedirect:d,nativeAuth:p,hasConsentPopup:g});return hm.default.createElement(fm,{onLogin:()=>{w()},className:o,btnClassName:c,text:m,disabled:l||h,"data-testid":S},t)};0&&(module.exports={CrossWindowLoginButton});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=CrossWindowLoginButton.js.map
