"use strict";var Bd=Object.create;var Go=Object.defineProperty,Wd=Object.defineProperties,Gd=Object.getOwnPropertyDescriptor,$d=Object.getOwnPropertyDescriptors,Hd=Object.getOwnPropertyNames,gn=Object.getOwnPropertySymbols,Vd=Object.getPrototypeOf,It=Object.prototype.hasOwnProperty,la=Object.prototype.propertyIsEnumerable;var da=(e,o,t)=>o in e?Go(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))It.call(o,t)&&da(e,t,o[t]);if(gn)for(var t of gn(o))la.call(o,t)&&da(e,t,o[t]);return e},b=(e,o)=>Wd(e,$d(o));var ae=(e,o)=>{var t={};for(var r in e)It.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&gn)for(var r of gn(e))o.indexOf(r)<0&&la.call(e,r)&&(t[r]=e[r]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var w=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),H=(e,o)=>{for(var t in o)Go(e,t,{get:o[t],enumerable:!0})},_a=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Hd(o))!It.call(e,c)&&c!==t&&Go(e,c,{get:()=>o[c],enumerable:!(r=Gd(o,c))||r.enumerable});return e};var f=(e,o,t)=>(t=e!=null?Bd(Vd(e)):{},_a(o||!e||!e.__esModule?Go(t,"default",{value:e,enumerable:!0}):t,e)),G=e=>_a(Go({},"__esModule",{value:!0}),e);var y=(e,o,t)=>new Promise((r,c)=>{var p=l=>{try{d(t.next(l))}catch(g){c(g)}},m=l=>{try{d(t.throw(l))}catch(g){c(g)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var fa=w(fn=>{"use strict";n();fn.byteLength=zd;fn.toByteArray=Kd;fn.fromByteArray=Yd;var le=[],te=[],qd=typeof Uint8Array!="undefined"?Uint8Array:Array,kt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(He=0,ua=kt.length;He<ua;++He)le[He]=kt[He],te[kt.charCodeAt(He)]=He;var He,ua;te["-".charCodeAt(0)]=62;te["_".charCodeAt(0)]=63;function ga(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function zd(e){var o=ga(e),t=o[0],r=o[1];return(t+r)*3/4-r}function jd(e,o,t){return(o+t)*3/4-t}function Kd(e){var o,t=ga(e),r=t[0],c=t[1],p=new qd(jd(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=te[e.charCodeAt(l)]<<18|te[e.charCodeAt(l+1)]<<12|te[e.charCodeAt(l+2)]<<6|te[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=te[e.charCodeAt(l)]<<2|te[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=te[e.charCodeAt(l)]<<10|te[e.charCodeAt(l+1)]<<4|te[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Xd(e){return le[e>>18&63]+le[e>>12&63]+le[e>>6&63]+le[e&63]}function Zd(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Xd(r));return c.join("")}function Yd(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,d=t-r;m<d;m+=p)c.push(Zd(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],c.push(le[o>>2]+le[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(le[o>>10]+le[o>>4&63]+le[o<<2&63]+"=")),c.join("")}});var ha=w(Lt=>{n();Lt.read=function(e,o,t,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,g=l>>1,h=-7,x=t?c-1:0,v=t?-1:1,E=e[o+x];for(x+=v,p=E&(1<<-h)-1,E>>=-h,h+=d;h>0;p=p*256+e[o+x],x+=v,h-=8);for(m=p&(1<<-h)-1,p>>=-h,h+=r;h>0;m=m*256+e[o+x],x+=v,h-=8);if(p===0)p=1-g;else{if(p===l)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-g}return(E?-1:1)*m*Math.pow(2,p-r)};Lt.write=function(e,o,t,r,c,p){var m,d,l,g=p*8-c-1,h=(1<<g)-1,x=h>>1,v=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:p-1,U=r?1:-1,z=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=h):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+x>=1?o+=v/l:o+=v*Math.pow(2,1-x),o*l>=2&&(m++,l/=2),m+x>=h?(d=0,m=h):m+x>=1?(d=(o*l-1)*Math.pow(2,c),m=m+x):(d=o*Math.pow(2,x-1)*Math.pow(2,c),m=0));c>=8;e[t+E]=d&255,E+=U,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+E]=m&255,E+=U,m/=256,g-=8);e[t+E-U]|=z*128}});var Na=w(_o=>{"use strict";n();var Et=fa(),lo=ha(),Ta=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_o.Buffer=_;_o.SlowBuffer=tl;_o.INSPECT_MAX_BYTES=50;var hn=2147483647;_o.kMaxLength=hn;_.TYPED_ARRAY_SUPPORT=Jd();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Jd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function be(e){if(e>hn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Dt(e)}return Sa(e,o,t)}_.poolSize=8192;function Sa(e,o,t){if(typeof e=="string")return el(e,o);if(ArrayBuffer.isView(e))return ol(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(_e(e,ArrayBuffer)||e&&_e(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(_e(e,SharedArrayBuffer)||e&&_e(e.buffer,SharedArrayBuffer)))return Pt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,t);var c=nl(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return Sa(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function wa(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Qd(e,o,t){return wa(e),e<=0?be(e):o!==void 0?typeof t=="string"?be(e).fill(o,t):be(e).fill(o):be(e)}_.alloc=function(e,o,t){return Qd(e,o,t)};function Dt(e){return wa(e),be(e<0?0:Rt(e)|0)}_.allocUnsafe=function(e){return Dt(e)};_.allocUnsafeSlow=function(e){return Dt(e)};function el(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=ba(e,o)|0,r=be(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function Nt(e){for(var o=e.length<0?0:Rt(e.length)|0,t=be(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function ol(e){if(_e(e,Uint8Array)){var o=new Uint8Array(e);return Pt(o.buffer,o.byteOffset,o.byteLength)}return Nt(e)}function Pt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,_.prototype),r}function nl(e){if(_.isBuffer(e)){var o=Rt(e.length)|0,t=be(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Mt(e.length)?be(0):Nt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Nt(e.data)}function Rt(e){if(e>=hn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+hn.toString(16)+" bytes");return e|0}function tl(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(_e(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),_e(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=_.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(_e(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function ba(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||_e(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Ct(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ea(e).length;default:if(c)return r?-1:Ct(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=ba;function rl(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return ul(this,o,t);case"utf8":case"utf-8":return Aa(this,o,t);case"ascii":return ll(this,o,t);case"latin1":case"binary":return _l(this,o,t);case"base64":return ml(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gl(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function Ve(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ve(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ve(this,t,t+3),Ve(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ve(this,t,t+7),Ve(this,t+1,t+6),Ve(this,t+2,t+5),Ve(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Aa(this,0,o):rl.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=_o.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Ta&&(_.prototype[Ta]=_.prototype.inspect);_.prototype.compare=function(o,t,r,c,p){if(_e(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-t,l=Math.min(m,d),g=this.slice(c,p),h=o.slice(t,r),x=0;x<l;++x)if(g[x]!==h[x]){m=g[x],d=h[x];break}return m<d?-1:d<m?1:0};function va(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Mt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:xa(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):xa(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function xa(e,o,t,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(E,U){return p===1?E[U]:E.readUInt16BE(U*p)}var g;if(c){var h=-1;for(g=t;g<m;g++)if(l(e,g)===l(o,h===-1?0:g-h)){if(h===-1&&(h=g),g-h+1===d)return h*p}else h!==-1&&(g-=g-h),h=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var x=!0,v=0;v<d;v++)if(l(e,g+v)!==l(o,v)){x=!1;break}if(x)return g}return-1}_.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};_.prototype.indexOf=function(o,t,r){return va(this,o,t,r,!0)};_.prototype.lastIndexOf=function(o,t,r){return va(this,o,t,r,!1)};function al(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Mt(d))return m;e[t+m]=d}return m}function il(e,o,t,r){return Tn(Ct(o,e.length-t),e,t,r)}function sl(e,o,t,r){return Tn(Tl(o),e,t,r)}function cl(e,o,t,r){return Tn(Ea(o),e,t,r)}function pl(e,o,t,r){return Tn(xl(o,e.length-t),e,t,r)}_.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return al(this,o,t,r);case"utf8":case"utf-8":return il(this,o,t,r);case"ascii":case"latin1":case"binary":return sl(this,o,t,r);case"base64":return cl(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pl(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ml(e,o,t){return o===0&&t===e.length?Et.fromByteArray(e):Et.fromByteArray(e.slice(o,t))}function Aa(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,g,h,x;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(x=(p&31)<<6|l&63,x>127&&(m=x));break;case 3:l=e[c+1],g=e[c+2],(l&192)===128&&(g&192)===128&&(x=(p&15)<<12|(l&63)<<6|g&63,x>2047&&(x<55296||x>57343)&&(m=x));break;case 4:l=e[c+1],g=e[c+2],h=e[c+3],(l&192)===128&&(g&192)===128&&(h&192)===128&&(x=(p&15)<<18|(l&63)<<12|(g&63)<<6|h&63,x>65535&&x<1114112&&(m=x))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return dl(r)}var ya=4096;function dl(e){var o=e.length;if(o<=ya)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=ya));return t}function ll(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function _l(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function ul(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=yl[e[p]];return c}function gl(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}_.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,_.prototype),c};function $(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||$(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||$(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||$(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||$(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||$(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||$(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||$(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||$(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};_.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||$(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||$(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||$(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||$(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||$(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||$(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||$(o,4,this.length),lo.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||$(o,4,this.length),lo.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||$(o,8,this.length),lo.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||$(o,8,this.length),lo.read(this,o,!1,52,8)};function Y(e,o,t,r,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;Y(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;Y(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);Y(this,o,t,r,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);Y(this,o,t,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||Y(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Ia(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ka(e,o,t,r,c){return o=+o,t=t>>>0,c||Ia(e,o,t,4,34028234663852886e22,-34028234663852886e22),lo.write(e,o,t,r,23,4),t+4}_.prototype.writeFloatLE=function(o,t,r){return ka(this,o,t,!0,r)};_.prototype.writeFloatBE=function(o,t,r){return ka(this,o,t,!1,r)};function La(e,o,t,r,c){return o=+o,t=t>>>0,c||Ia(e,o,t,8,17976931348623157e292,-17976931348623157e292),lo.write(e,o,t,r,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,r){return La(this,o,t,!0,r)};_.prototype.writeDoubleBE=function(o,t,r){return La(this,o,t,!1,r)};_.prototype.copy=function(o,t,r,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};_.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%l]}return this};var fl=/[^+/0-9A-Za-z-_]/g;function hl(e){if(e=e.split("=")[0],e=e.trim().replace(fl,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Ct(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Tl(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function xl(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function Ea(e){return Et.toByteArray(hl(e))}function Tn(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function _e(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Mt(e){return e!==e}var yl=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var Ma=w((by,Ra)=>{n();var O=Ra.exports={},ue,ge;function Ot(){throw new Error("setTimeout has not been defined")}function Ft(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ue=setTimeout:ue=Ot}catch(e){ue=Ot}try{typeof clearTimeout=="function"?ge=clearTimeout:ge=Ft}catch(e){ge=Ft}})();function Pa(e){if(ue===setTimeout)return setTimeout(e,0);if((ue===Ot||!ue)&&setTimeout)return ue=setTimeout,setTimeout(e,0);try{return ue(e,0)}catch(o){try{return ue.call(null,e,0)}catch(t){return ue.call(this,e,0)}}}function Sl(e){if(ge===clearTimeout)return clearTimeout(e);if((ge===Ft||!ge)&&clearTimeout)return ge=clearTimeout,clearTimeout(e);try{return ge(e)}catch(o){try{return ge.call(null,e)}catch(t){return ge.call(this,e)}}}var ve=[],uo=!1,qe,xn=-1;function wl(){!uo||!qe||(uo=!1,qe.length?ve=qe.concat(ve):xn=-1,ve.length&&Ca())}function Ca(){if(!uo){var e=Pa(wl);uo=!0;for(var o=ve.length;o;){for(qe=ve,ve=[];++xn<o;)qe&&qe[xn].run();xn=-1,o=ve.length}qe=null,uo=!1,Sl(e)}}O.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ve.push(new Da(e,o)),ve.length===1&&!uo&&Pa(Ca)};function Da(e,o){this.fun=e,this.array=o}Da.prototype.run=function(){this.fun.apply(null,this.array)};O.title="browser";O.browser=!0;O.env={};O.argv=[];O.version="";O.versions={};function Ae(){}O.on=Ae;O.addListener=Ae;O.once=Ae;O.off=Ae;O.removeListener=Ae;O.removeAllListeners=Ae;O.emit=Ae;O.prependListener=Ae;O.prependOnceListener=Ae;O.listeners=function(e){return[]};O.binding=function(e){throw new Error("process.binding is not supported")};O.cwd=function(){return"/"};O.chdir=function(e){throw new Error("process.chdir is not supported")};O.umask=function(){return 0}});var a,s,bl,i,n=T(()=>{a=f(Na()),s=f(Ma()),bl=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=bl});var Z=T(()=>{"use strict";n()});var ze,go=T(()=>{"use strict";n();ze=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Bt={};H(Bt,{css:()=>Ua,default:()=>vl});var Ua,vl,Wt=T(()=>{"use strict";n();Ua=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ua));vl={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var $t={};H($t,{css:()=>Ga,default:()=>kl});var Ga,kl,Ht=T(()=>{"use strict";n();Ga=`.dapp-core-component__detailItem-module__detail-item:last-child {
  border-bottom: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ga));kl={"detail-item":"dapp-core-component__detailItem-module__detail-item",detailItem:"dapp-core-component__detailItem-module__detail-item"}});var $a=T(()=>{"use strict";n()});var fe=T(()=>{"use strict";n()});var Ha=T(()=>{"use strict";n()});var qt,Va=T(()=>{"use strict";n();qt=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(qt||{})});var qa=T(()=>{"use strict";n()});var zt=T(()=>{"use strict";n()});var za=T(()=>{"use strict";n()});var jt=T(()=>{"use strict";n()});var ja=T(()=>{"use strict";n()});var Ka=T(()=>{"use strict";n()});var je,fo,Me=T(()=>{"use strict";n();je=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),fo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Xa,Yy,Za,Jy,P=T(()=>{"use strict";n();Me();Xa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Xa||{}),Yy=u(u({},fo.WindowProviderRequestEnums),Xa),Za=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Za||{}),Jy=u(u({},fo.WindowProviderResponseEnums),Za)});var Ya=T(()=>{"use strict";n()});var Ja=T(()=>{"use strict";n()});var Qa=T(()=>{"use strict";n()});var ei=T(()=>{"use strict";n()});var oi=T(()=>{"use strict";n()});var F=T(()=>{"use strict";n();jt();ja();Ka();P();Ya();Ja();Z();Qa();ei();oi()});var ho,ni,u0,ti,g0,ri,f0,h0,El,To=T(()=>{"use strict";n();F();ho={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:ni,egldLabel:u0}=ho["devnet"],{chainId:ti,egldLabel:g0}=ho["testnet"],{chainId:ri,egldLabel:f0}=ho["mainnet"],h0={["devnet"]:ni,["testnet"]:ti,["mainnet"]:ri},El={[ni]:"devnet",[ti]:"testnet",[ri]:"mainnet"}});var bn=T(()=>{"use strict";n()});var he,ai=T(()=>{"use strict";n();he=require("@multiversx/sdk-web-wallet-provider")});var Ke,Ho=T(()=>{"use strict";n();Ke=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ii,si,Kt,b0,v0,Xt=T(()=>{"use strict";n();Ho();Kt=String((si=(ii=Ke.safeWindow)==null?void 0:ii.navigator)==null?void 0:si.userAgent),b0=/^((?!chrome|android).)*safari/i.test(Kt),v0=/firefox/i.test(Kt)&&/windows/i.test(Kt)});var vn,An,j,Xe,ci,In,pi,ie,mi,A=T(()=>{"use strict";n();$a();fe();Ha();Va();qa();zt();za();To();bn();ai();Xt();vn=5e4,An=1e9,j=18,Xe=4,ci=1,In="logout",pi="login",ie="0",mi="..."});var Vo,kn=T(()=>{"use strict";n();Vo=()=>Date.now()/1e3});var hi=T(()=>{"use strict";n()});var Ti=T(()=>{"use strict";n()});var Yt=T(()=>{"use strict";n();kn();hi();Ti()});var Jt={};H(Jt,{clear:()=>Rl,getItem:()=>Cl,localStorageKeys:()=>Oe,removeItem:()=>Dl,setItem:()=>Pl});var Oe,Ln,Pl,Cl,Dl,Rl,xo=T(()=>{"use strict";n();Yt();Oe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Ln=typeof localStorage!="undefined",Pl=({key:e,data:o,expires:t})=>{!Ln||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Cl=e=>{if(!Ln)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Vo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Dl=e=>{!Ln||localStorage.removeItem(String(e))},Rl=()=>{!Ln||localStorage.clear()}});var Qt={};H(Qt,{clear:()=>wi,getItem:()=>yi,removeItem:()=>Si,setItem:()=>xi,storage:()=>Ml});var xi,yi,Si,wi,Ml,bi=T(()=>{"use strict";n();xi=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},yi=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Si=e=>sessionStorage.removeItem(String(e)),wi=()=>sessionStorage.clear(),Ml={setItem:xi,getItem:yi,removeItem:Si,clear:wi}});var Ze,yo=T(()=>{"use strict";n();xo();bi();Ze={session:Qt,local:Jt}});var er,R,Q,M=T(()=>{"use strict";n();er=require("@reduxjs/toolkit");A();R=(0,er.createAction)(In),Q=(0,er.createAction)(pi,e=>({payload:e}))});var nr,vi,Ai,En,or,Ii,Nn,Ol,tr,wS,Fl,Ul,bS,vS,AS,Bl,Wl,Pn,Cn=T(()=>{"use strict";n();nr=require("@multiversx/sdk-core"),vi=require("@reduxjs/toolkit"),Ai=require("redux-persist");A();yo();xo();M();En={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ie},or={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":En},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ii=(0,vi.createSlice)({name:"accountInfoSlice",initialState:or,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new nr.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:En},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(Ze.local.removeItem(Oe.loginExpiresAt),or)),e.addCase(Q,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new nr.Address(r).hex()}),e.addCase(Ai.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:or.accounts,o.publicKey=d})}}),{setAccount:Nn,setAddress:Ol,setAccountNonce:tr,setAccountShard:wS,setLedgerAccount:Fl,updateLedgerAccount:Ul,setWalletConnectAccount:bS,setIsAccountLoading:vS,setAccountLoadingError:AS,setWebsocketEvent:Bl,setWebsocketBatchEvent:Wl}=Ii.actions,Pn=Ii.reducer});function qo(){return new Date().setHours(new Date().getHours()+24)}function zo(e){Ze.local.setItem({key:Oe.loginExpiresAt,data:e,expires:e})}var rr=T(()=>{"use strict";n();yo();xo()});var Li,ki,Ei,MS,Gl,$l,Ni,OS,Hl,Pi,FS,US,BS,Dn,Rn=T(()=>{"use strict";n();Li=require("@reduxjs/toolkit");rr();P();M();ki={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ei=(0,Li.createSlice)({name:"loginInfoSlice",initialState:ki,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>ki),e.addCase(Q,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,zo(qo())})}}),{setLoginMethod:MS,setWalletConnectLogin:Gl,setLedgerLogin:$l,setTokenLogin:Ni,setTokenLoginSignature:OS,setWalletLogin:Hl,invalidateLoginSession:Pi,setLogoutRoute:FS,setIsWalletConnectV2Initialized:US,setWebviewLogin:BS}=Ei.actions,Dn=Ei.reducer});var Di,Ci,Ri,HS,Vl,VS,ql,Mn,On=T(()=>{"use strict";n();Di=require("@reduxjs/toolkit");M();Ci={},Ri=(0,Di.createSlice)({name:"modalsSlice",initialState:Ci,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>Ci)}}),{setTxSubmittedModal:HS,setNotificationModal:Vl,clearTxSubmittedModal:VS,clearNotificationModal:ql}=Ri.actions,Mn=Ri.reducer});var B,q=T(()=>{"use strict";n();go();B=()=>{if(!ze())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var Mi=T(()=>{"use strict";n();q()});var Oi=T(()=>{"use strict";n();K()});var Fi=T(()=>{"use strict";n();Ho()});var K=T(()=>{"use strict";n();Mi();Oi();q();Fi()});var jo=T(()=>{"use strict";n();K()});var Bi=T(()=>{"use strict";n();jo()});function Wi(e){return e[Math.floor(Math.random()*e.length)]}var Gi=T(()=>{"use strict";n()});var ar=T(()=>{"use strict";n();zt()});var Ie=T(()=>{"use strict";n();Bi();Gi();ar()});var $i,Hi,Vi,ir,jl,qi,ww,bw,Kl,Fn,Un=T(()=>{"use strict";n();$i=require("@reduxjs/toolkit"),Hi=f(require("lodash.omit")),Vi=require("redux-persist");bn();M();Ie();ir={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},jl={network:ir},qi=(0,$i.createSlice)({name:"appConfig",initialState:jl,reducers:{initializeNetworkConfig:(e,o)=>{let t=Wi(o.payload.walletConnectV2RelayAddresses),r=(0,Hi.default)(o.payload,"walletConnectV2RelayAddresses");e.network=b(u(u({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(Vi.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:ww,updateNetworkConfig:bw,setCustomWalletAddress:Kl}=qi.actions,Fn=qi.reducer});var zi,sr,ji,Ew,Nw,Pw,Bn,Wn=T(()=>{"use strict";n();zi=require("@reduxjs/toolkit");F();M();sr={isSigning:!1,signedSessions:{}},ji=(0,zi.createSlice)({name:"signedMessageInfoSliceState",initialState:sr,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>sr},extraReducers:e=>{e.addCase(R,()=>sr)}}),{setSignSession:Ew,clearSignedMessageInfo:Nw,setSignSessionState:Pw}=ji.actions,Bn=ji.reducer});var Xi,Zi,Ki,Yi,Xl,Zl,Uw,Yl,Gn,$n=T(()=>{"use strict";n();Xi=require("@reduxjs/toolkit"),Zi=require("redux-persist");F();kn();M();Ki={customToasts:[],transactionToasts:[]},Yi=(0,Xi.createSlice)({name:"toastsSlice",initialState:Ki,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=b(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(b(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Vo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>Ki),e.addCase(Zi.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Xl,removeCustomToast:Zl,addTransactionToast:Uw,removeTransactionToast:Yl}=Yi.actions,Gn=Yi.reducer});var Ji,pr,mr,dr,Jl,cr,Qi,$w,Ql,lr,Hn,Vn=T(()=>{"use strict";n();Ji=require("@reduxjs/toolkit");M();pr="Transaction failed",mr="Transaction successful",dr="Processing transaction",Jl="Transaction submitted",cr={},Qi=(0,Ji.createSlice)({name:"transactionsInfo",initialState:cr,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||pr,successMessage:(r==null?void 0:r.successMessage)||mr,processingMessage:(r==null?void 0:r.processingMessage)||dr,submittedMessage:(r==null?void 0:r.submittedMessage)||Jl,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>cr},extraReducers:e=>{e.addCase(R,()=>cr)}}),{clearTransactionsInfo:$w,setTransactionsDisplayInfo:Ql,clearTransactionsInfoForSessionId:lr}=Qi.actions,Hn=Qi.reducer});function wo(e){return e!=null&&(p_(e)||u_(e))}function bo(e){return e!=null&&(m_(e)||g_(e))}function vo(e){return e!=null&&(d_(e)||f_(e))}function es(e){return e!=null&&(l_(e)||h_(e))}function _r(e){return e!=null&&__(e)}function p_(e){return e!=null&&e_.includes(e)}function m_(e){return e!=null&&o_.includes(e)}function d_(e){return e!=null&&n_.includes(e)}function l_(e){return e!=null&&t_.includes(e)}function __(e){return e!=null&&r_.includes(e)}function u_(e){return e!=null&&a_.includes(e)}function g_(e){return e!=null&&i_.includes(e)}function f_(e){return e!=null&&s_.includes(e)}function h_(e){return e!=null&&c_.includes(e)}var e_,o_,n_,t_,r_,a_,i_,s_,c_,Ao=T(()=>{"use strict";n();P();e_=["sent"],o_=["success"],n_=["fail","cancelled","timedOut"],t_=["invalid"],r_=["timedOut"],a_=["pending"],i_=["success"],s_=["fail","invalid"],c_=["not executed"]});var os,ns,Ko,T_,ts,rs,as,x_,qn,y_,S_,Yw,w_,Xo,ur,Jw,zn,jn=T(()=>{"use strict";n();os=require("@reduxjs/toolkit"),ns=require("redux-persist");P();Ao();M();Ko={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},T_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ts=(0,os.createSlice)({name:"transactionsSlice",initialState:Ko,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,g;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},T_),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=Ko.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,h,x,v,E,U,z,de;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(h=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:h.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(C=>C.hash===p?b(u(u({},m!=null?m:{}),C),{status:r,errorMessage:c,inTransit:d}):C);let $e=(v=(x=e.signedTransactions[t])==null?void 0:x.transactions)==null?void 0:v.every(C=>bo(C.status)),Re=(U=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:U.some(C=>vo(C.status)),we=(de=(z=e.signedTransactions[t])==null?void 0:z.transactions)==null?void 0:de.every(C=>es(C.status));$e&&(e.signedTransactions[t].status="success"),Re&&(e.signedTransactions[t].status="fail"),we&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Ko.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Ko.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(R,()=>Ko),e.addCase(ns.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((d,[l,g])=>{let h=new Date(l),x=new Date;return x.setHours(x.getHours()+5),x-h>0||(d[l]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:rs,updateSignedTransactions:as,setTransactionsToSign:x_,clearAllTransactionsToSign:qn,clearAllSignedTransactions:y_,clearSignedTransaction:S_,clearTransactionToSign:Yw,setSignTransactionsError:w_,setSignTransactionsCancelMessage:Xo,moveTransactionsToSignedState:ur,updateSignedTransactionsCustomTransactionInformation:Jw}=ts.actions,zn=ts.reducer});var is,gr,ss,nb,tb,b_,rb,Kn,Xn=T(()=>{"use strict";n();is=require("@reduxjs/toolkit");M();gr={},ss=(0,is.createSlice)({name:"batchTransactionsSlice",initialState:gr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>gr},extraReducers:e=>{e.addCase(R,()=>gr)}}),{setBatchTransactions:nb,updateBatchTransactions:tb,clearBatchTransactions:b_,clearAllBatchTransactions:rb}=ss.actions,Kn=ss.reducer});var ps,cs,ms,cb,ds,fr=T(()=>{"use strict";n();ps=require("@reduxjs/toolkit");M();cs={},ms=(0,ps.createSlice)({name:"dappConfigSlice",initialState:cs,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>cs)}}),{setDappConfig:cb}=ms.actions,ds=ms.reducer});var N=T(()=>{"use strict";n();Cn();Rn();On();Un();Wn();$n();Vn();jn();Xn();fr()});var hr=T(()=>{"use strict";n()});var us,k_,L_,Ye,Jn=T(()=>{"use strict";n();us=require("@reduxjs/toolkit");hr();Cn();Xn();fr();Rn();On();Un();Wn();$n();Vn();jn();k_={["account"]:Pn,["dappConfig"]:ds,["loginInfo"]:Dn,["modals"]:Mn,["networkConfig"]:Fn,["signedMessageInfo"]:Bn,["toasts"]:Gn,["transactionsInfo"]:Hn,["transactions"]:zn,["batchTransactions"]:Kn},L_=(e={})=>(0,us.combineReducers)(u(u({},k_),e)),Ye=L_});var Ts={};H(Ts,{default:()=>V_,sessionStorageReducers:()=>Tr});function ke(e,o=[]){return{key:e,version:1,storage:fs.default,blacklist:o}}var J,gs,fs,E_,Zo,N_,P_,C_,D_,R_,M_,O_,F_,U_,B_,hs,W_,Tr,G_,$_,H_,V_,xs=T(()=>{"use strict";n();J=require("redux-persist"),gs=f(require("redux-persist/lib/storage")),fs=f(require("redux-persist/lib/storage/session"));Jn();N();Cn();Xn();Rn();On();Un();Wn();$n();Vn();jn();hr();E_={persistReducersStorageType:"localStorage"},Zo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},N_=ke(Zo["account"]),P_=ke(Zo["loginInfo"]),C_=ke(Zo["modals"]),D_=ke(Zo["networkConfig"]),R_={2:e=>b(u({},e),{networkConfig:ir})};M_=ke("sdk-dapp-transactionsInfo"),O_=ke("sdk-dapp-transactions",["transactionsToSign"]),F_=ke("sdk-dapp-batchTransactions",["batchTransactions"]),U_=ke("sdk-dapp-toasts"),B_=ke("sdk-dapp-signedMessageInfo"),hs={key:"sdk-dapp-store",version:2,storage:gs.default,whitelist:Object.keys(Zo),migrate:(0,J.createMigrate)(R_,{debug:!1})},W_=b(u({},hs),{whitelist:[]}),Tr={["toasts"]:(0,J.persistReducer)(U_,Gn),["transactions"]:(0,J.persistReducer)(O_,zn),["transactionsInfo"]:(0,J.persistReducer)(M_,Hn),["batchTransactions"]:(0,J.persistReducer)(F_,Kn),["signedMessageInfo"]:(0,J.persistReducer)(B_,Bn)},G_=b(u({},Tr),{["account"]:(0,J.persistReducer)(N_,Pn),["loginInfo"]:(0,J.persistReducer)(P_,Dn),["modals"]:(0,J.persistReducer)(C_,Mn),["networkConfig"]:(0,J.persistReducer)(D_,Fn)}),$_=E_.persistReducersStorageType==="localStorage",H_=$_?(0,J.persistReducer)(hs,Ye(Tr)):(0,J.persistReducer)(W_,Ye(G_)),V_=H_});var ys={};H(ys,{default:()=>q_});var q_,Ss=T(()=>{"use strict";n();Jn();q_=Ye()});var ws={};H(ws,{default:()=>j_});var re,z_,j_,bs=T(()=>{"use strict";n();re=require("redux-persist"),z_=[re.FLUSH,re.REHYDRATE,re.PAUSE,re.PERSIST,re.PURGE,re.REGISTER],j_=z_});var Is={};H(Is,{default:()=>As});function As(e){return(0,vs.persistStore)(e)}var vs,ks=T(()=>{"use strict";n();vs=require("redux-persist")});var Er={};H(Er,{css:()=>xc,default:()=>ng});var xc,ng,Nr=T(()=>{"use strict";n();xc=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xc));ng={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Cr={};H(Cr,{css:()=>vc,default:()=>rg});var vc,rg,Dr=T(()=>{"use strict";n();vc=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vc));rg={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var Bc=w((B3,Uc)=>{n();var qg=typeof i=="object"&&i&&i.Object===Object&&i;Uc.exports=qg});var tn=w((W3,Wc)=>{n();var zg=Bc(),jg=typeof self=="object"&&self&&self.Object===Object&&self,Kg=zg||jg||Function("return this")();Wc.exports=Kg});var Br=w((G3,Gc)=>{n();var Xg=tn(),Zg=Xg.Symbol;Gc.exports=Zg});var qc=w(($3,Vc)=>{n();var $c=Br(),Hc=Object.prototype,Yg=Hc.hasOwnProperty,Jg=Hc.toString,rn=$c?$c.toStringTag:void 0;function Qg(e){var o=Yg.call(e,rn),t=e[rn];try{e[rn]=void 0;var r=!0}catch(p){}var c=Jg.call(e);return r&&(o?e[rn]=t:delete e[rn]),c}Vc.exports=Qg});var jc=w((H3,zc)=>{n();var ef=Object.prototype,of=ef.toString;function nf(e){return of.call(e)}zc.exports=nf});var Wr=w((V3,Zc)=>{n();var Kc=Br(),tf=qc(),rf=jc(),af="[object Null]",sf="[object Undefined]",Xc=Kc?Kc.toStringTag:void 0;function cf(e){return e==null?e===void 0?sf:af:Xc&&Xc in Object(e)?tf(e):rf(e)}Zc.exports=cf});var Jc=w((q3,Yc)=>{n();var pf=Array.isArray;Yc.exports=pf});var ep=w((z3,Qc)=>{n();function mf(e){return e!=null&&typeof e=="object"}Qc.exports=mf});var np=w((j3,op)=>{n();var df=Wr(),lf=Jc(),_f=ep(),uf="[object String]";function gf(e){return typeof e=="string"||!lf(e)&&_f(e)&&df(e)==uf}op.exports=gf});var ht=w((z5,sp)=>{n();function Rf(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}sp.exports=Rf});var pp=w((j5,cp)=>{n();var Mf=Wr(),Of=ht(),Ff="[object AsyncFunction]",Uf="[object Function]",Bf="[object GeneratorFunction]",Wf="[object Proxy]";function Gf(e){if(!Of(e))return!1;var o=Mf(e);return o==Uf||o==Bf||o==Ff||o==Wf}cp.exports=Gf});var dp=w((K5,mp)=>{n();var $f=tn(),Hf=$f["__core-js_shared__"];mp.exports=Hf});var up=w((X5,_p)=>{n();var Vr=dp(),lp=function(){var e=/[^.]+$/.exec(Vr&&Vr.keys&&Vr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Vf(e){return!!lp&&lp in e}_p.exports=Vf});var fp=w((Z5,gp)=>{n();var qf=Function.prototype,zf=qf.toString;function jf(e){if(e!=null){try{return zf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}gp.exports=jf});var Tp=w((Y5,hp)=>{n();var Kf=pp(),Xf=up(),Zf=ht(),Yf=fp(),Jf=/[\\^$.*+?()[\]{}|]/g,Qf=/^\[object .+?Constructor\]$/,eh=Function.prototype,oh=Object.prototype,nh=eh.toString,th=oh.hasOwnProperty,rh=RegExp("^"+nh.call(th).replace(Jf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ah(e){if(!Zf(e)||Xf(e))return!1;var o=Kf(e)?rh:Qf;return o.test(Yf(e))}hp.exports=ah});var yp=w((J5,xp)=>{n();function ih(e,o){return e==null?void 0:e[o]}xp.exports=ih});var Tt=w((Q5,Sp)=>{n();var sh=Tp(),ch=yp();function ph(e,o){var t=ch(e,o);return sh(t)?t:void 0}Sp.exports=ph});var an=w((eO,wp)=>{n();var mh=Tt(),dh=mh(Object,"create");wp.exports=dh});var Ap=w((oO,vp)=>{n();var bp=an();function lh(){this.__data__=bp?bp(null):{},this.size=0}vp.exports=lh});var kp=w((nO,Ip)=>{n();function _h(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Ip.exports=_h});var Ep=w((tO,Lp)=>{n();var uh=an(),gh="__lodash_hash_undefined__",fh=Object.prototype,hh=fh.hasOwnProperty;function Th(e){var o=this.__data__;if(uh){var t=o[e];return t===gh?void 0:t}return hh.call(o,e)?o[e]:void 0}Lp.exports=Th});var Pp=w((rO,Np)=>{n();var xh=an(),yh=Object.prototype,Sh=yh.hasOwnProperty;function wh(e){var o=this.__data__;return xh?o[e]!==void 0:Sh.call(o,e)}Np.exports=wh});var Dp=w((aO,Cp)=>{n();var bh=an(),vh="__lodash_hash_undefined__";function Ah(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=bh&&o===void 0?vh:o,this}Cp.exports=Ah});var Mp=w((iO,Rp)=>{n();var Ih=Ap(),kh=kp(),Lh=Ep(),Eh=Pp(),Nh=Dp();function Co(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Co.prototype.clear=Ih;Co.prototype.delete=kh;Co.prototype.get=Lh;Co.prototype.has=Eh;Co.prototype.set=Nh;Rp.exports=Co});var Fp=w((sO,Op)=>{n();function Ph(){this.__data__=[],this.size=0}Op.exports=Ph});var Bp=w((cO,Up)=>{n();function Ch(e,o){return e===o||e!==e&&o!==o}Up.exports=Ch});var sn=w((pO,Wp)=>{n();var Dh=Bp();function Rh(e,o){for(var t=e.length;t--;)if(Dh(e[t][0],o))return t;return-1}Wp.exports=Rh});var $p=w((mO,Gp)=>{n();var Mh=sn(),Oh=Array.prototype,Fh=Oh.splice;function Uh(e){var o=this.__data__,t=Mh(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():Fh.call(o,t,1),--this.size,!0}Gp.exports=Uh});var Vp=w((dO,Hp)=>{n();var Bh=sn();function Wh(e){var o=this.__data__,t=Bh(o,e);return t<0?void 0:o[t][1]}Hp.exports=Wh});var zp=w((lO,qp)=>{n();var Gh=sn();function $h(e){return Gh(this.__data__,e)>-1}qp.exports=$h});var Kp=w((_O,jp)=>{n();var Hh=sn();function Vh(e,o){var t=this.__data__,r=Hh(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}jp.exports=Vh});var Zp=w((uO,Xp)=>{n();var qh=Fp(),zh=$p(),jh=Vp(),Kh=zp(),Xh=Kp();function Do(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Do.prototype.clear=qh;Do.prototype.delete=zh;Do.prototype.get=jh;Do.prototype.has=Kh;Do.prototype.set=Xh;Xp.exports=Do});var Jp=w((gO,Yp)=>{n();var Zh=Tt(),Yh=tn(),Jh=Zh(Yh,"Map");Yp.exports=Jh});var om=w((fO,em)=>{n();var Qp=Mp(),Qh=Zp(),eT=Jp();function oT(){this.size=0,this.__data__={hash:new Qp,map:new(eT||Qh),string:new Qp}}em.exports=oT});var tm=w((hO,nm)=>{n();function nT(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}nm.exports=nT});var cn=w((TO,rm)=>{n();var tT=tm();function rT(e,o){var t=e.__data__;return tT(o)?t[typeof o=="string"?"string":"hash"]:t.map}rm.exports=rT});var im=w((xO,am)=>{n();var aT=cn();function iT(e){var o=aT(this,e).delete(e);return this.size-=o?1:0,o}am.exports=iT});var cm=w((yO,sm)=>{n();var sT=cn();function cT(e){return sT(this,e).get(e)}sm.exports=cT});var mm=w((SO,pm)=>{n();var pT=cn();function mT(e){return pT(this,e).has(e)}pm.exports=mT});var lm=w((wO,dm)=>{n();var dT=cn();function lT(e,o){var t=dT(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}dm.exports=lT});var um=w((bO,_m)=>{n();var _T=om(),uT=im(),gT=cm(),fT=mm(),hT=lm();function Ro(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Ro.prototype.clear=_T;Ro.prototype.delete=uT;Ro.prototype.get=gT;Ro.prototype.has=fT;Ro.prototype.set=hT;_m.exports=Ro});var fm=w((vO,gm)=>{n();var TT="__lodash_hash_undefined__";function xT(e){return this.__data__.set(e,TT),this}gm.exports=xT});var Tm=w((AO,hm)=>{n();function yT(e){return this.__data__.has(e)}hm.exports=yT});var ym=w((IO,xm)=>{n();var ST=um(),wT=fm(),bT=Tm();function xt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new ST;++o<t;)this.add(e[o])}xt.prototype.add=xt.prototype.push=wT;xt.prototype.has=bT;xm.exports=xt});var wm=w((kO,Sm)=>{n();function vT(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Sm.exports=vT});var vm=w((LO,bm)=>{n();function AT(e){return e!==e}bm.exports=AT});var Im=w((EO,Am)=>{n();function IT(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Am.exports=IT});var Lm=w((NO,km)=>{n();var kT=wm(),LT=vm(),ET=Im();function NT(e,o,t){return o===o?ET(e,o,t):kT(e,LT,t)}km.exports=NT});var Nm=w((PO,Em)=>{n();var PT=Lm();function CT(e,o){var t=e==null?0:e.length;return!!t&&PT(e,o,0)>-1}Em.exports=CT});var Cm=w((CO,Pm)=>{n();function DT(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}Pm.exports=DT});var Rm=w((DO,Dm)=>{n();function RT(e,o){return e.has(o)}Dm.exports=RT});var Om=w((RO,Mm)=>{n();var MT=Tt(),OT=tn(),FT=MT(OT,"Set");Mm.exports=FT});var Um=w((MO,Fm)=>{n();function UT(){}Fm.exports=UT});var qr=w((OO,Bm)=>{n();function BT(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}Bm.exports=BT});var Gm=w((FO,Wm)=>{n();var zr=Om(),WT=Um(),GT=qr(),$T=1/0,HT=zr&&1/GT(new zr([,-0]))[1]==$T?function(e){return new zr(e)}:WT;Wm.exports=HT});var Hm=w((UO,$m)=>{n();var VT=ym(),qT=Nm(),zT=Cm(),jT=Rm(),KT=Gm(),XT=qr(),ZT=200;function YT(e,o,t){var r=-1,c=qT,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=zT;else if(p>=ZT){var g=o?null:KT(e);if(g)return XT(g);m=!1,c=jT,l=new VT}else l=o?[]:d;e:for(;++r<p;){var h=e[r],x=o?o(h):h;if(h=t||h!==0?h:0,m&&x===x){for(var v=l.length;v--;)if(l[v]===x)continue e;o&&l.push(x),d.push(h)}else c(l,x,t)||(l!==d&&l.push(x),d.push(h))}return d}$m.exports=YT});var qm=w((BO,Vm)=>{n();var JT=Hm();function QT(e){return e&&e.length?JT(e):[]}Vm.exports=QT});var Ne={};H(Ne,{css:()=>nd,default:()=>Mx});var nd,Mx,Pe=T(()=>{"use strict";n();nd=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nd));Mx={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var oa={};H(oa,{css:()=>gd,default:()=>ny});var gd,ny,na=T(()=>{"use strict";n();gd=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gd));ny={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var ln={};H(ln,{css:()=>Ad,default:()=>iy});var Ad,iy,_n=T(()=>{"use strict";n();Ad=`.dapp-core-component__styles__transaction-action-collection {
  color: #1f43f4;
  display: inline-flex;
  margin-left: 0;
}
.dapp-core-component__styles__transaction-action-collection:hover {
  text-decoration: none;
}

.dapp-core-component__styles__transaction-action-nft {
  display: contents;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer {
  margin-left: 0;
  color: #1f43f4;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__explorer .dapp-core-component__styles__data {
  margin: 0;
  margin-right: 0.25rem;
}
.dapp-core-component__styles__transaction-action-nft .dapp-core-component__styles__truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ad));iy={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var ra={};H(ra,{css:()=>Cd,default:()=>dy});var Cd,dy,aa=T(()=>{"use strict";n();Cd=`.dapp-core-component__styles__group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cd));dy={group:"dapp-core-component__styles__group"}});var sa={};H(sa,{css:()=>Dd,default:()=>_y});var Dd,_y,ca=T(()=>{"use strict";n();Dd=`.dapp-core-component__styles__address {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer {
  margin-left: 0;
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  color: #1f43f4;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer:hover {
  text-decoration: none;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span {
  max-width: none;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span [class*=left] span,
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__styles__address .dapp-core-component__styles__explorer span:last-child {
  color: #1f43f4;
}

.dapp-core-component__styles__token {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
@media (min-width: 992px) {
  .dapp-core-component__styles__token.dapp-core-component__styles__spaced {
    margin-right: 0.25rem;
  }
}
.dapp-core-component__styles__token .dapp-core-component__styles__comma {
  display: none;
}
@media (min-width: 992px) {
  .dapp-core-component__styles__token .dapp-core-component__styles__comma {
    display: block;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dd));_y={address:"dapp-core-component__styles__address",explorer:"dapp-core-component__styles__explorer",token:"dapp-core-component__styles__token",spaced:"dapp-core-component__styles__spaced",comma:"dapp-core-component__styles__comma"}});var pa={};H(pa,{css:()=>Md,default:()=>gy});var Md,gy,ma=T(()=>{"use strict";n();Md=`.dapp-core-component__styles__action {
  display: flex;
  flex-direction: column;
}
@media (min-width: 992px) {
  .dapp-core-component__styles__action {
    flex-wrap: wrap;
    flex-direction: row;
  }
}
@media (min-width: 992px) {
  .dapp-core-component__styles__action .dapp-core-component__styles__result {
    flex-direction: row;
    align-items: center;
    display: contents;
    margin-right: 0.25rem;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Md));gy={action:"dapp-core-component__styles__action",result:"dapp-core-component__styles__result"}});var Ty={};H(Ty,{TransactionInfoMethod:()=>hy});module.exports=G(Ty);n();n();var Wo=f(require("react"));Z();n();Z();var Ut=e=>{var r,c,p,m,d,l;let o="Transaction";return((r=e.action)==null?void 0:r.name)&&((c=e.action)==null?void 0:c.category)&&(((p=e.action)==null?void 0:p.category)==="esdtNft"&&((m=e.action)==null?void 0:m.name)==="transfer"?o="Transaction":e.action&&(o=e.action.name),(l=(d=e.action)==null?void 0:d.arguments)!=null&&l.functionName&&(o=e.action.arguments.functionName)),o};n();var Sn=f(require("react")),wn=f(require("classnames"));n();var Wa=f(require("react"));n();var $o=f(require("react"));n();go();var Fa=()=>!ze();var Al=()=>y(void 0,null,function*(){return yield Promise.resolve().then(()=>(Wt(),Bt))}),Il=()=>(Wt(),G(Bt)).default,Gt=Fa();function Ba({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=$o.default.useState(Gt?void 0:Il()),[p,m]=$o.default.useState(Gt||t==null?void 0:t()),d=()=>y(this,null,function*(){(e?e():Al()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,$o.useEffect)(()=>{Gt&&d()},[]),{globalStyles:r,styles:p}}function L(e,o){return t=>{let{globalStyles:r,styles:c}=Ba({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Wa.default.createElement(e,b(u({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}var Ll=({children:e,title:o,className:t="",colWidth:r="2",noBorder:c=!1,globalStyles:p,styles:m})=>{var d,l,g,h;return Sn.default.createElement("div",{className:(0,wn.default)(p==null?void 0:p.row,m==null?void 0:m.detailItem,t,{[(d=p==null?void 0:p.pt3)!=null?d:""]:c,[(l=p==null?void 0:p.pb1)!=null?l:""]:c,[(g=p==null?void 0:p.borderBottom)!=null?g:""]:!c,[(h=p==null?void 0:p.py3)!=null?h:""]:!c})},Sn.default.createElement("div",{className:(0,wn.default)(p==null?void 0:p.textSecondary,p==null?void 0:p.textLgRight,p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${r}`])},o),Sn.default.createElement("div",{className:(0,wn.default)(p==null?void 0:p.fontWeightMedium,p==null?void 0:p[`colLg${12-Number(r)}`])},e))},Vt=L(Ll,{ssrStyles:()=>Promise.resolve().then(()=>(Ht(),$t)),clientStyles:()=>(Ht(),G($t)).default});n();n();var Bo=f(require("react"));A();n();Z();n();Z();var di=e=>{var o,t;switch(e.name){case"transfer":return["Transfer",{token:(o=e.arguments)==null?void 0:o.transfers},"to",{address:(t=e.arguments)==null?void 0:t.receiver}];default:return[]}};n();var li=f(require("bignumber.js"));A();Z();var _i=e=>{var o,t,r,c,p,m,d,l,g,h,x,v;switch(e.name){case"claimLockedAssets":return["Claim locked assets"];case"enterFarm":case"enterFarmProxy":return["Enter farm with",{token:(o=e.arguments)==null?void 0:o.transfers}];case"enterFarmAndLockRewards":case"enterFarmAndLockRewardsProxy":return["Enter farm and lock rewards with",{token:(t=e.arguments)==null?void 0:t.transfers}];case"exitFarm":case"exitFarmProxy":return["Exit farm with",{token:(r=e.arguments)==null?void 0:r.transfers}];case"claimRewards":case"claimRewardsProxy":return["Claim rewards",{token:(c=e.arguments)==null?void 0:c.transfers}];case"compoundRewards":case"compoundRewardsProxy":return["Reinvest rewards",{token:(p=e.arguments)==null?void 0:p.transfers}];case"swapTokensFixedInput":case"swap":return e.description?[e.description]:[];case"swapTokensFixedOutput":return e.description?[e.description]:[];case"addLiquidity":case"addLiquidityProxy":return["Added liquidity for",{token:[(m=e.arguments)==null?void 0:m.transfers[0]]},"and",{token:[(d=e.arguments)==null?void 0:d.transfers[1]]}];case"removeLiquidity":case"removeLiquidityProxy":return["Removed liquidity with ",{token:(l=e.arguments)==null?void 0:l.transfers}];case"mergeLockedAssetTokens":let E=ie;if((g=e.arguments)!=null&&g.transfers){let U=e.arguments.transfers.map(({value:z})=>z);E=li.default.sum.apply(null,U).toString(10)}return[`Merge ${(h=e.arguments)==null?void 0:h.transfers.length}`,{tokenNoLink:[(x=e.arguments)==null?void 0:x.transfers[0]]},"positions into a single",{tokenNoLink:[(v=e.arguments)==null?void 0:v.transfers[0]]},"position of value",{value:E}];case"wrapEgld":case"unwrapEgld":default:return e.description?[e.description]:[]}};n();Z();var ui=e=>{var o,t,r,c,p,m,d,l,g,h,x,v;switch(e.name){case"delegate":case"stake":return["Delegate",{egldValue:(o=e.arguments)==null?void 0:o.value},"to staking provider",{providerName:(t=e.arguments)==null?void 0:t.providerName,providerAvatar:(r=e.arguments)==null?void 0:r.providerAvatar}];case"unDelegate":return["Undelegate",{egldValue:(c=e.arguments)==null?void 0:c.value},"from staking provider",{providerName:(p=e.arguments)==null?void 0:p.providerName,providerAvatar:(m=e.arguments)==null?void 0:m.providerAvatar}];case"claimRewards":return["Claim rewards from staking provider",{providerName:(d=e.arguments)==null?void 0:d.providerName,providerAvatar:(l=e.arguments)==null?void 0:l.providerAvatar}];case"reDelegateRewards":return["Redelegate rewards from staking provider",{providerName:(g=e.arguments)==null?void 0:g.providerName,providerAvatar:(h=e.arguments)==null?void 0:h.providerAvatar}];case"withdraw":return["Withdraw from staking provider",{providerName:(x=e.arguments)==null?void 0:x.providerName,providerAvatar:(v=e.arguments)==null?void 0:v.providerAvatar}];default:return[]}};var gi=e=>{if(!e.arguments)return e.description?[e.description]:[e.name];switch(e.category){case"esdtNft":return di(e);case"mex":return _i(e);case"stake":return ui(e);default:return e.description?[e.description]:[]}};n();var D=f(require("react")),co=f(require("classnames"));n();var Zt=f(require("react")),Nl=e=>Zt.createElement("svg",u({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"globe",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",className:"svg-inline--fa fa-globe fa-w-16 fa-5x"},e),Zt.createElement("path",{fill:"#6c757d",d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z",className:""})),fi=Nl;A();n();n();var Pr=f(require("react")),yc=require("@fortawesome/free-solid-svg-icons"),Sc=require("@fortawesome/react-fontawesome"),wc=f(require("classnames"));n();n();var Ds=require("react"),Io=require("react-redux");n();var xr=require("@reduxjs/toolkit"),Ps=require("react-redux/lib/utils/Subscription");N();n();var ls=f(require("lodash.throttle"));A();N();rr();yo();xo();var v_=[In],Zn=!1,A_=(0,ls.default)(()=>{zo(qo())},5e3),_s=e=>o=>t=>{if(v_.includes(t.type))return o(t);let r=e.getState(),c=Ze.local.getItem(Oe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return zo(qo());let m=Date.now();return c-m<0&&!Zn?setTimeout(()=>{Zn=!0,e.dispatch(Pi())},1e3):(Zn&&(Zn=!1),A_()),o(t)};n();n();function Yn(){return typeof sessionStorage!="undefined"}var Ls=Yn()?(xs(),G(Ts)).default:(Ss(),G(ys)).default,Es=Yn()?(bs(),G(ws)).default:[],Ns=Yn()?(ks(),G(Is)).default:e=>e;Jn();var I=(0,xr.configureStore)({reducer:Ls,middleware:e=>e({serializableCheck:{ignoredActions:[...Es,tr.type,Nn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(_s)}),Cs=(0,Ps.createSubscription)(I),iv=Ns(I),sv=(0,xr.configureStore)({reducer:Ye});var K_={store:I,subscription:Cs},yr=(0,Ds.createContext)(K_),dv=(0,Io.createStoreHook)(yr),X=(0,Io.createDispatchHook)(yr),k=(0,Io.createSelectorHook)(yr);n();n();N();n();var Rs=f(require("lodash.isequal")),Qn=require("reselect"),S=(0,Qn.createSelectorCreator)(Qn.defaultMemoize,Rs.default);var Te=e=>e.account,Je=S(Te,e=>e.address),ko=S(Te,Je,(e,o)=>o in e.accounts?e.accounts[o]:En),X_=S(Te,ko,(e,o)=>{let c=e,{accounts:t}=c,r=ae(c,["accounts"]);return b(u({},r),{address:o.address,account:o})}),fv=S(ko,e=>e.balance),Z_=S(ko,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),hv=S(Te,e=>e.shard),Y_=S(Te,e=>e.ledgerAccount),Tv=S(Te,e=>e.walletConnectAccount),xv=S(Te,e=>e.isAccountLoading),yv=S(Te,e=>e.accountLoadingError),J_=S(Te,e=>e.websocketEvent),Q_=S(Te,e=>e.websocketBatchEvent);n();var Ms=e=>e.dappConfig,bv=S(Ms,e=>e.shouldUseWebViewProvider);n();var ee=e=>e.loginInfo,eu=S(ee,e=>e.loginMethod),et=S(ee,Je,(e,o)=>Boolean(o)),kv=S(ee,e=>e.walletConnectLogin),ou=S(ee,e=>e.ledgerLogin),nu=S(ee,e=>e.walletLogin),Lv=S(ee,e=>e.isLoginSessionInvalid),Sr=S(ee,e=>e.tokenLogin),Os=S(ee,e=>e.logoutRoute),tu=S(ee,e=>e.isWalletConnectV2Initialized);n();var Fs=e=>e.modals,Pv=S(Fs,e=>e.txSubmittedModal),ru=S(Fs,e=>e.notificationModal);n();var se=e=>e.networkConfig,ot=S(se,e=>e.network.chainId),au=S(se,e=>e.network.roundDuration),Rv=S(se,e=>e.network.walletConnectBridgeAddress),iu=S(se,e=>e.network.walletConnectV2RelayAddress),su=S(se,e=>e.network.walletConnectV2ProjectId),cu=S(se,e=>e.network.walletConnectV2Options),pu=S(se,e=>e.network.walletConnectDeepLink),oe=S(se,e=>e.network),Us=S(oe,e=>e.apiAddress),Bs=S(oe,e=>e.explorerAddress),Ws=S(oe,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),mu=S(oe,e=>e.xAliasAddress),wr=S(oe,e=>e.egldLabel);n();var nt=e=>e.signedMessageInfo,Fv=S(nt,e=>e.isSigning),Uv=S(nt,e=>e.errorMessage),Bv=S(nt,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),Wv=S(nt,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Gs=e=>e.toasts,du=S(Gs,e=>e.customToasts),$s=S(Gs,e=>e.transactionToasts);n();N();var Hs={errorMessage:pr,successMessage:mr,processingMessage:dr},Vs=e=>e.transactionsInfo,lu=S(Vs,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Hs);n();n();var xe=require("@multiversx/sdk-core");A();n();var br=require("@multiversx/sdk-core/out");n();n();function tt(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var qs=e=>{let o=e!=null?e:"";return tt(o)?br.TransactionPayload.fromEncoded(o):new br.TransactionPayload(o)};n();A();var Yo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(qt).some(t=>e.startsWith(t)):!1;function rt(e){var r,c,p;let o=u({},e);Yo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new xe.Transaction(u(u(b(u(b(u({value:o.value.valueOf(),data:qs(o.data),nonce:o.nonce.valueOf(),receiver:new xe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new xe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:vn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:An,chainID:o.chainID.valueOf(),version:new xe.TransactionVersion((p=o.version)!=null?p:ci)}),o.options?{options:new xe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new xe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var fu=require("@multiversx/sdk-core/out");n();A();n();var Jo=require("@multiversx/sdk-core");F();n();var zs=require("@multiversx/sdk-core");function hu(e){try{let o=new zs.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Qe(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&hu(e)}var Tu=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function at(e,o,t=""){if(!Qe(e))return!1;if(new Jo.Address(e).isContractAddress())return!0;let p=js({receiver:e,data:t});return p?new Jo.Address(p).isContractAddress()||Su(e,o,t):!1}var xu=e=>e.toLowerCase().match(/[0-9a-f]/g),yu=e=>e.length%2===0;function Su(e,o,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=Tu.includes(c),l=p.every(g=>xu(g)&&yu(g));return m&&d&&l}function js({receiver:e,data:o}){try{if(!o)return e;let t=tt(o)?Jo.TransactionPayload.fromEncoded(o).toString():o,r=wu(t),c=t.split("@");return r>-1?c[r]:e}catch(t){console.log(t);return}}function wu(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var bu=require("@multiversx/sdk-core"),vu=f(require("bignumber.js"));P();n();n();n();var ce="accounts";var it="blocks",Zs="code",Ys="collections";var Js="contracts";var Qs="identities";var ec="locked-accounts",oc="logs",nc="miniblocks";var st="nfts",tc="nodes",vr="providers",rc="roles",Ar="sc-results";var eo="tokens";var pe="transactions";var ye={shard:e=>`/${it}?shard=${e}`,receiverShard:e=>`/${pe}?receivershard=${e}`,senderShard:e=>`/${pe}?sendershard=${e}`,transactionDetails:e=>`/${pe}/${e}`,transactionDetailsScResults:e=>`/${pe}/${e}/${Ar}`,transactionDetailsLogs:e=>`/${pe}/${e}/${oc}`,nodeDetails:e=>`/${tc}/${e}`,accountDetails:e=>`/${ce}/${e}`,accountDetailsContractCode:e=>`/${ce}/${e}/${Zs}`,accountDetailsTokens:e=>`/${ce}/${e}/${eo}`,accountDetailsNfts:e=>`/${ce}/${e}/${st}`,accountDetailsScResults:e=>`/${ce}/${e}/${Ar}`,accountDetailsContracts:e=>`/${ce}/${e}/${Js}`,identityDetails:e=>`/${Qs}/${e}`,tokenDetails:e=>`/${eo}/${e}`,tokenDetailsAccounts:e=>`/${eo}/${e}/${ce}`,tokenDetailsLockedAccounts:e=>`/${eo}/${e}/${ec}`,tokenDetailsRoles:e=>`/${eo}/${e}/${rc}`,collectionDetails:e=>`/${Ys}/${e}`,nftDetails:e=>`/${st}/${e}`,providerDetails:e=>`/${vr}/${e}`,providerDetailsTransactions:e=>`/${vr}/${e}/${pe}`,miniblockDetails:e=>`/${nc}/${e}`};n();n();n();n();var ac=!1;function Iu(e){ac||(console.error(e),ac=!0)}function Ir({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(Iu(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();Z();n();n();n();var ku=f(require("bignumber.js"));A();n();var cc=require("@multiversx/sdk-core"),Ue=f(require("bignumber.js"));A();n();var sc=f(require("bignumber.js")),Qo=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let r=new sc.default(t),c=o?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=c};n();function Le(e){return{if:function(o){return o?{then:t=>t instanceof Function?Le(t(e)):Le(t)}:{then:()=>Le(e)}},then:o=>o instanceof Function?Le(o(e)):Le(o),valueOf:function(){return e}}}Ue.default.config({ROUNDING_MODE:Ue.default.ROUND_FLOOR});function Se({input:e,decimals:o=j,digits:t=Xe,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!Qo(e,!1))throw new Error("Invalid input");let m=new Ue.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Le(d).then(()=>cc.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let g=new Ue.default(l);if(g.isZero())return ie;let h=g.toString(10),[x,v]=h.split("."),E=new Ue.default(v||0),U=Le(0).if(Boolean(v&&r)).then(()=>Math.max(v.length,t)).if(E.isZero()&&!r).then(0).if(Boolean(v&&!r)).then(()=>Math.min(v.length,t)).valueOf(),z=v&&t>=1&&t<=v.length&&E.isGreaterThan(0)&&new Ue.default(v.substring(0,t)).isZero(),de=g.toFormat(U);return Le(h).if(p).then(de).if(Boolean(z)).then(Re=>{let we=new Ue.default(x).isZero(),[C,po]=Re.split("."),mo=new Array(t-1).fill(0),vt=[...mo,0].join(""),At=[...mo,1].join("");return we?c?`<${C}.${At}`:r?`${C}.${po}`:C:`${C}.${vt}`}).if(Boolean(!z&&v)).then(Re=>{let[we]=Re.split("."),C=v.substring(0,U);if(r){let po=t-C.length;if(po>0){let mo=Array(po).fill(0).join("");return C=`${C}${mo}`,`${we}.${C}`}return Re}return C?`${we}.${C}`:we}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}n();n();n();A();n();n();n();n();A();n();A();n();var Lu=require("@multiversx/sdk-core");A();n();var en=require("@multiversx/sdk-core"),Pu=f(require("bignumber.js"));A();n();n();var Eu=f(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();function Lo({token:e,noValue:o,showLastNonZeroDecimal:t}){var g;let r=!o&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";r&&c&&(m=c?Se({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:t}):Number(e.value).toLocaleString("en"));let d=ye.nftDetails(String(e.identifier)),l=e.ticker===e.collection&&(g=e.identifier)!=null?g:e.ticker;return{badgeText:p,tokenFormattedAmount:r?m:null,tokenExplorerLink:d,tokenLinkText:l,token:e,noValue:o,showLastNonZeroDecimal:t}}n();A();function ct({token:e,noValue:o,showLastNonZeroDecimal:t}){var d;let r=Boolean(!o&&e.value),c=r?Se({input:e.value,decimals:(d=e.decimals)!=null?d:j,digits:2,showLastNonZeroDecimal:t,addCommas:!0}):null,p=ye.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:r,tokenLinkText:m,token:e,showLastNonZeroDecimal:t}}n();Z();var Cu=["reDelegateRewards","claimRewards","unBond"],Du=["wrapEgld","unwrapEgld"],Ru=["unStake"],Mu=["unDelegate"];n();n();n();A();n();var Fu=f(require("bignumber.js"));n();n();Z();n();var Bu=f(require("bignumber.js"));n();n();n();n();var $u=f(require("bignumber.js"));F();n();n();n();n();P();n();var zu=require("@multiversx/sdk-web-wallet-provider");A();n();var Vu=f(require("qs"));n();K();go();n();go();var nL={search:ze()?window.location.search:"",removeParams:[]};n();n();n();q();n();Z();n();n();q();n();var ju=f(require("linkifyjs"));n();A();n();var Ku=f(require("bignumber.js"));n();F();n();n();P();n();P();n();n();n();var lc=require("react");F();n();n();Z();n();n();var Xu=require("@multiversx/sdk-core/out"),Zu=f(require("bignumber.js"));Z();n();F();n();n();F();var vE=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var _c=require("react");F();q();n();var Ju=require("react");Z();var CE=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Ao();n();var pt=e=>e.transactions,Eo=S(pt,e=>e.signedTransactions),Qu=S(pt,e=>e.signTransactionsError),uc=S(pt,e=>e.signTransactionsCancelMessage),mt=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),gc=S(Eo,mt(wo)),fc=S(Eo,mt(bo)),hc=S(Eo,mt(vo)),eg=S(Eo,mt(_r)),Tc=S(pt,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:b(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>rt(t)))||[]})}),og=S(Eo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var dt=()=>k(se);var tg=l=>{var g=l,{page:e,text:o,className:t="dapp-explorer-link",children:r,globalStyles:c,customExplorerIcon:p,styles:m}=g,d=ae(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:h}}=dt(),x=o!=null?o:Pr.default.createElement(Sc.FontAwesomeIcon,{icon:p!=null?p:yc.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),v=Ir({explorerAddress:String(h),to:e});return Pr.default.createElement("a",u({href:v,target:"_blank",className:(0,wc.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},d),r!=null?r:x)},Ee=L(tg,{ssrStyles:()=>Promise.resolve().then(()=>(Nr(),Er)),clientStyles:()=>(Nr(),G(Er)).default});n();n();var Be=f(require("react")),Ac=f(require("classnames"));A();n();function bc(){return wr(I.getState())}var ag=e=>{var t;let o=(t=e.styles)!=null?t:{};return Be.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Be.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},ig=(e,o)=>{var E,U,z;let{value:t,showLastNonZeroDecimal:r=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:Xe,m=e.decimals!=null?e.decimals:j,d=(E=e.styles)!=null?E:{},l=(U=e.globalStyles)!=null?U:{},g=Se({input:t,decimals:m,digits:p,showLastNonZeroDecimal:r,addCommas:!0}),h=g.split("."),x=h.length===1,v=g!==ie;if(p>0&&x&&v){let de="";for(let $e=1;$e<=p;$e++)de=de+ie;h.push(de)}return Be.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Be.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},h[0]),h.length>1&&Be.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",h[1]),c&&Be.default.createElement("span",{className:(0,Ac.default)(d.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(z=e.token)!=null?z:o}`))},sg=e=>{let{value:o}=e;return Qo(o)?ig(e,e.egldLabel||""):ag(e)},cg=e=>{let o=e.egldLabel||bc(),t=b(u({},e),{egldLabel:o});return Be.default.createElement(sg,u({},t))},no=L(cg,{ssrStyles:()=>Promise.resolve().then(()=>(Dr(),Cr)),clientStyles:()=>(Dr(),G(Cr)).default});n();n();var ta=f(require("react")),Td=f(require("classnames"));n();var W=f(require("react")),fd=f(require("classnames"));A();n();n();var Ic=require("react");n();N();n();n();n();n();n();n();n();n();var mg=require("@multiversx/sdk-extension-provider"),dg=require("@multiversx/sdk-hw-provider"),lg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),_g=require("@multiversx/sdk-opera-provider"),ug=require("@multiversx/sdk-passkey-provider/out"),gg=require("@multiversx/sdk-web-wallet-provider");A();Me();n();var No=require("@multiversx/sdk-web-wallet-iframe-provider/out"),kc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var me=e=>`Unable to perform ${e}, Provider not initialized`,lt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(me("getAccount"))}setAccount(o){throw new Error(me(`setAccount: ${o}`))}login(o){throw new Error(me(`login with options: ${o}`))}logout(o){throw new Error(me(`logout with options: ${o}`))}getAddress(){throw new Error(me("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(me(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(me(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(me(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(me(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(me(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(me(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Lc=new lt;N();n();n();n();n();n();var Ec=require("@lifeomic/axios-fetch"),Rr=f(require("axios")),Mr=(0,Ec.buildAxiosFetch)(Rr.default),Or=(e,o)=>y(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function fg(e,o,t){return y(this,null,function*(){try{let r=yield Mr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Or(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function hg(e,o){return y(this,null,function*(){try{let t=yield Mr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Or(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Tg(e,o,t){return y(this,null,function*(){try{let r=yield Mr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Or(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var Po=Rr.default.create();Po.get=hg;Po.post=fg;Po.patch=Tg;n();n();var xg=f(require("axios"));n();var yg=f(require("swr"));n();P();n();n();n();q();n();Ao();n();n();n();var Sg=f(require("axios"));n();var bg=f(require("axios"));To();n();A();n();var vg=f(require("axios"));n();var Ig=f(require("axios"));n();n();var kg=f(require("axios"));n();var Lg=f(require("axios"));n();n();N();P();n();n();n();n();q();n();M();F();n();N();n();var Dc=require("@multiversx/sdk-core");F();K();n();Ao();n();N();P();n();N();F();n();n();n();F();n();bn();n();n();n();n();var Pg=f(require("swr"));n();n();n();n();var Rc=require("react");n();n();var Cg=require("react"),Dg=require("@multiversx/sdk-web-wallet-provider"),Rg=require("@multiversx/sdk-web-wallet-provider"),Mg=f(require("qs"));A();N();P();jt();q();var UR=B();n();var ip=require("react"),Hr=require("@multiversx/sdk-core");n();A();ar();n();n();n();n();n();n();n();n();n();n();To();n();var Bg=f(require("axios"));n();var Gg=f(require("axios"));n();To();n();To();n();n();n();n();var Hg=require("@multiversx/sdk-opera-provider");n();var Vg=require("@multiversx/sdk-extension-provider");n();Me();n();n();n();n();var ff=f(np());n();var yf=require("@multiversx/sdk-native-auth-client");n();var ap=f(require("axios"));n();n();n();function tp(e){return y(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var rp=(e,o,t,r=0)=>y(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield tp(o.delay)),yield rp(e,o,t,r+1)):null}}),Gr=(e,o={retries:5,delay:500})=>(...t)=>y(void 0,null,function*(){return yield rp(e,o,t)});var hf=4;var aM=Gr((e,o,t)=>y(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield ap.default.get(`${e}/${it}?from=${hf}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();kn();n();n();q();var gM={origin:B().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var wf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var bf=require("@multiversx/sdk-passkey-provider/out");A();q();n();n();n();var Ef=require("react"),Nf=require("@multiversx/sdk-hw-provider");n();M();F();n();jo();yo();xo();K();n();n();var Xm=require("react"),Zm=require("@multiversx/sdk-core"),hx=require("@multiversx/sdk-extension-provider"),Tx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),xx=require("@multiversx/sdk-passkey-provider/out"),yx=f(qm());A();n();n();n();n();n();n();n();n();n();n();var pn=f(require("react"));var o6=(0,pn.createContext)({}),n6=I.getState();n();var jm=f(require("react"));n();var jr=f(require("react")),ex=f(require("axios"));n();n();Me();n();n();var ix=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),sx=require("@multiversx/sdk-webview-provider/out/WebviewProvider");M();n();M();N();F();n();n();N();n();K();n();N();F();n();n();var nx=require("@multiversx/sdk-core"),tx=f(require("bignumber.js"));A();n();var rx=f(require("bignumber.js"));A();N();P();K();q();n();var Km=require("react"),dx=require("@multiversx/sdk-extension-provider"),lx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),_x=require("@multiversx/sdk-passkey-provider/out");Me();N();n();N();F();jo();q();n();fe();N();n();n();var wx=require("react");n();n();P();Ao();n();var St=require("react"),Ym=(e,o)=>{let[t,r]=(0,St.useState)(e);return(0,St.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var vx=require("react"),Ax=require("@multiversx/sdk-extension-provider");fe();M();P();n();Ie();K();K();n();n();Me();F();n();var bx=require("react"),Jm=require("@multiversx/sdk-core");N();n();var Ix=require("react"),kx=require("@multiversx/sdk-opera-provider");fe();M();P();Ie();K();q();n();var Lx=require("react");Xt();fe();Me();M();N();P();Ie();q();n();var Dx=require("react");fe();N();n();n();Yt();n();n();var Ex=f(require("platform"));go();n();n();n();n();n();n();Ho();P();n();n();var Nx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();jo();yo();n();n();n();N();n();n();var Px=f(require("axios"));K();n();n();var Cx=f(ht());Ho();var Qm,ed,od,H4=(od=(ed=(Qm=Ke.safeWindow)==null?void 0:Qm.location)==null?void 0:ed.origin)==null?void 0:od.includes("localhost");n();q();n();n();var $x=require("react");A();n();n();A();n();n();n();var Rx=f(require("bignumber.js"));n();n();n();var Ge=f(require("react")),cd=require("react"),pd=require("react"),Jr=f(require("classnames")),md=require("react-dom");A();n();var td=f(require("react")),rd=f(require("classnames"));var Ox=({className:e,children:o,styles:t})=>td.default.createElement("div",{className:(0,rd.default)(t==null?void 0:t.dappModalBody,e)},o),Kr=L(Ox,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});n();var Xr=f(require("react")),ad=f(require("classnames"));var Fx=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?Xr.default.createElement("div",{className:(0,ad.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Xr.default.createElement("div",null,r)):null,Zr=L(Fx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});n();var Fo=f(require("react")),id=require("@fortawesome/free-solid-svg-icons"),sd=require("@fortawesome/react-fontawesome"),dn=f(require("classnames"));var Ux=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?Fo.default.createElement("div",{className:(0,dn.default)(l==null?void 0:l.dappModalHeader,r)},t):Fo.default.createElement("div",{className:(0,dn.default)(l==null?void 0:l.dappModalHeader,r)},Fo.default.createElement("div",{className:(0,dn.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Fo.default.createElement("button",{onClick:m,className:(0,dn.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Fo.default.createElement(sd.FontAwesomeIcon,{size:"lg",icon:id.faTimes}))):null,Yr=L(Ux,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});var Bx={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Wx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=Bx,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:g})=>{let[h,x]=(0,cd.useState)(!1);if((0,pd.useEffect)(()=>{x(!0)},[]),!l)return null;let{showHeader:v,showFooter:E,headerText:U,footerText:z,modalDialogClassName:de="dapp-modal-dialog",modalContentClassName:$e="dapp-modal-dialog-content",modalHeaderClassName:Re="dapp-modal-dialog-header",modalHeaderTextClassName:we="dapp-modal-dialog-header-text",modalCloseButtonClassName:C="dapp-modal-dialog-close-button",modalBodyClassName:po="dapp-modal-dialog-content-body",modalFooterClassName:mo="dapp-modal-dialog-footer",customModalHeader:vt,customModalFooter:At}=c,Fd=Ud=>{Ud.key==="Escape"&&r&&(m==null||m())};return Ge.default.createElement(Ge.default.Fragment,null,h&&(0,md.createPortal)(Ge.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Jr.default)(de,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:Fd},Ge.default.createElement("div",{className:(0,Jr.default)(g==null?void 0:g.dappModalContent,$e)},Ge.default.createElement(Yr,{visible:v,headerText:U,customHeader:vt,className:Re,headerTextClassName:we,closeButtonClassName:C,onHide:m}),Ge.default.createElement(Kr,{className:po},o),Ge.default.createElement(Zr,{visible:E,customFooter:At,footerText:z,className:mo}))),d!=null?d:document==null?void 0:document.body))},Gx=L(Wx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});n();n();var dd=require("react");n();n();var ld=require("react"),Vx=require("@multiversx/sdk-hw-provider");fe();M();N();P();Ie();n();var Hx=require("react");n();n();var Qr=require("react");M();N();P();Ie();q();n();var zx=require("react"),jx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");fe();M();P();Ie();K();K();n();var Kx=require("react"),Xx=require("@multiversx/sdk-passkey-provider/out");fe();M();P();Ie();K();K();n();n();var _d=require("react");n();var Jx=require("react");n();var ea=require("react"),Yx=require("socket.io-client");N();n();n();n();var Qx=require("react");F();n();n();n();var oy=f(require("swr"));n();n();n();n();var ey=f(require("axios"));n();var ty=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,W.useState)(0),[d,l]=(0,W.useState)(!1),g=(0,W.useRef)(document==null?void 0:document.createElement("span")),h=(0,W.useRef)(document==null?void 0:document.createElement("span")),x=Ym(p,300),v=()=>{if(g.current&&h.current){let z=h.current.offsetWidth-g.current.offsetWidth;l(z>1)}},E=()=>{m(p+1)};return(0,W.useEffect)(()=>(window==null||window.addEventListener("resize",E),()=>{window==null||window.removeEventListener("resize",E)})),(0,W.useEffect)(()=>{v()},[x]),W.default.createElement("span",{ref:g,className:(0,fd.default)(c==null?void 0:c.trim,r,o,{overflow:d}),"data-testid":t},W.default.createElement("span",{ref:h,className:c==null?void 0:c.hiddenTextRef},e),d?W.default.createElement(W.default.Fragment,null,W.default.createElement("span",{className:c==null?void 0:c.left},W.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),W.default.createElement("span",{className:c==null?void 0:c.ellipsis},mi),W.default.createElement("span",{className:c==null?void 0:c.right},W.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):W.default.createElement("span",null,e))},hd=L(ty,{ssrStyles:()=>Promise.resolve().then(()=>(na(),oa)),clientStyles:()=>(na(),G(oa)).default});var ry=p=>{var m=p,{address:e,assets:o,color:t,globalStyles:r}=m,c=ae(m,["address","assets","color","globalStyles"]);if(o&&o.name){let d=o.name.replace(new RegExp("\\p{Emoji}","gu"),""),l=`${d} (${e})`;return ta.default.createElement("span",b(u({className:(0,Td.default)(r==null?void 0:r.textTruncate,{[`text-${t}`]:t})},c),{title:l}),d)}return ta.default.createElement(hd,u({text:e,color:t},c))},xd=L(ry,{});n();var yd=f(require("react")),Sd=require("@fortawesome/free-solid-svg-icons/faFileAlt"),wd=require("@fortawesome/react-fontawesome"),bd=f(require("classnames"));A();var ay=({initiator:e,secondInitiator:o,globalStyles:t})=>at(e)||at(o!=null?o:"")?yd.default.createElement(wd.FontAwesomeIcon,{title:"Smart Contract",icon:Sd.faFileAlt,className:(0,bd.default)(t==null?void 0:t.mr1,t==null?void 0:t.textSecondary),"data-testid":"scIcon"}):null,vd=L(ay,{});n();var ne=f(require("react"));n();n();var un=f(require("react")),wt=f(require("classnames"));var sy=({token:e,globalStyles:o,styles:t})=>e.collection?un.default.createElement(Ee,{page:ye.collectionDetails(e.collection),className:(0,wt.default)(t==null?void 0:t.transactionActionCollection)},un.default.createElement("div",{className:(0,wt.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&un.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,wt.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),un.default.createElement("span",null,e.ticker))):null,Id=L(sy,{ssrStyles:()=>Promise.resolve().then(()=>(_n(),ln)),clientStyles:()=>(_n(),G(ln)).default});n();var Ce=f(require("react")),Uo=f(require("classnames"));A();n();var kd=f(require("react")),Ld=f(require("classnames"));var cy=({text:e,className:o,"data-testid":t="nftBadge",globalStyles:r})=>kd.default.createElement("div",{"data-testid":t,className:(0,Ld.default)(r==null?void 0:r.badge,r==null?void 0:r.badgeSecondary,r==null?void 0:r.badgePill,r==null?void 0:r.fontWeightLight,o)},e),Ed=L(cy,{});var py=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:t,tokenLinkText:r,token:c,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var l,g,h,x,v;return c.identifier?Ce.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&Ce.default.createElement(Ed,{text:e,className:(0,Uo.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&Ce.default.createElement("div",{className:(0,Uo.default)(m==null?void 0:m.mr1,{[(l=m==null?void 0:m.textTruncate)!=null?l:""]:c.svgUrl})},Ce.default.createElement(no,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Ce.default.createElement(Ee,{page:t,"data-testid":"nftExplorerLink",className:(0,Uo.default)(d==null?void 0:d.explorer,{[(g=m==null?void 0:m.sideLink)!=null?g:""]:c.svgUrl,[(h=m==null?void 0:m.dFlex)!=null?h:""]:c.svgUrl,[(x=m==null?void 0:m.textTruncate)!=null?x:""]:!c.svgUrl})},Ce.default.createElement("div",{className:d==null?void 0:d.data},c.svgUrl&&Ce.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,Uo.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),Ce.default.createElement("span",{className:(0,Uo.default)({[(v=d==null?void 0:d.truncate)!=null?v:""]:c.ticker===c.collection})},r)))):null},Nd=L(py,{ssrStyles:()=>Promise.resolve().then(()=>(_n(),ln)),clientStyles:()=>(_n(),G(ln)).default});n();var De=f(require("react")),bt=f(require("classnames"));A();var my=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:t,token:r,showLastNonZeroDecimal:c,globalStyles:p})=>{var m,d;return r.token?De.default.createElement(De.default.Fragment,null,o&&De.default.createElement("div",{className:p==null?void 0:p.textTruncate},De.default.createElement(no,{value:r.value,digits:2,showLabel:!1,decimals:(m=r.decimals)!=null?m:j,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),De.default.createElement(Ee,{page:e,"data-testid":"tokenExplorerLink",className:(0,bt.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:r.svgUrl})},De.default.createElement("div",{className:(0,bt.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},r.svgUrl&&De.default.createElement("img",{src:r.svgUrl,alt:r.name,className:(0,bt.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),De.default.createElement("span",null,t)))):null},Pd=L(my,{});var so={Collection:Id,Nft:Nd,Token:Pd};var ly=({token:e,noValue:o,showLastNonZeroDecimal:t,globalStyles:r,styles:c})=>{if(["MetaESDT".toString(),"SemiFungibleESDT","NonFungibleESDT"].includes(e.type))switch(e.type){case"SemiFungibleESDT":{let m=Lo({token:e,showLastNonZeroDecimal:t});return ne.default.createElement("div",{className:c==null?void 0:c.group},ne.default.createElement("span",{className:r==null?void 0:r.mr1},"SFT quantity"),ne.default.createElement(so.Nft,b(u({},m),{badgeText:null})),ne.default.createElement("span",{className:r==null?void 0:r.mr1},"of collection"),ne.default.createElement(so.Collection,{token:e}))}case"NonFungibleESDT":{let m=Lo({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement("div",{className:c==null?void 0:c.group},ne.default.createElement("span",{className:r==null?void 0:r.mr1},"NFT"),ne.default.createElement(so.Nft,b(u({},m),{badgeText:null})),ne.default.createElement("span",{className:r==null?void 0:r.mr1},"of collection"),ne.default.createElement(so.Collection,{token:e}))}case"MetaESDT":{let m=Lo({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement(so.Nft,b(u({},m),{badgeText:null}))}default:return null}else{let m=ct({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement(so.Token,b(u({},m),{showLastNonZeroDecimal:!0}))}},ia=L(ly,{ssrStyles:()=>Promise.resolve().then(()=>(aa(),ra)),clientStyles:()=>(aa(),G(ra)).default});var uy=({entry:e,transaction:o,globalStyles:t,styles:r})=>{if(typeof e=="string")return D.default.createElement("span",{className:t==null?void 0:t.mr1},e.replace("eGLD","EGLD"));if(Boolean(e.address)){let c;return e.address===o.sender&&(c=o.senderAssets),e.address===o.receiver&&(c=o.receiverAssets),Qe(e.address)?D.default.createElement("div",{className:r==null?void 0:r.address},D.default.createElement(vd,{initiator:e.address}),D.default.createElement(Ee,{page:ye.accountDetails(e.address),"data-testid":"receiverLink",className:r==null?void 0:r.explorer},D.default.createElement(xd,{address:e.address,assets:c}))):""}if(Boolean(e.token&&e.token.length>0))return e.token.map((c,p)=>{var m;return D.default.createElement("div",{key:`tx-${c.identifier}-${p}`,className:(0,co.default)(r==null?void 0:r.token,{[(m=r==null?void 0:r.spaced)!=null?m:""]:e.token.length>1})},D.default.createElement(ia,{token:c,showLastNonZeroDecimal:!0}),p<e.token.length-1&&D.default.createElement("span",{className:r==null?void 0:r.comma},","))});if(Boolean(e.tokenNoValue&&e.tokenNoValue.length>0))return e.tokenNoValue.map((c,p)=>D.default.createElement("div",{key:`tx-${c.token}-${p}`},D.default.createElement(ia,{token:c,noValue:!0,showLastNonZeroDecimal:!0}),p<e.tokenNoValue.length-1&&D.default.createElement("span",{className:(0,co.default)(t==null?void 0:t.mlN1,t==null?void 0:t.mr1,t==null?void 0:t.dNone,t==null?void 0:t.dSmFlex)},",")));if(Boolean(e.tokenNoLink&&e.tokenNoLink.length>0))return e.tokenNoLink.map((c,p)=>D.default.createElement("div",{key:`tx-${c.token}-${p}`},D.default.createElement("span",{className:t==null?void 0:t.mr1},c.ticker),p<e.tokenNoLink.length-1&&D.default.createElement("span",{className:(0,co.default)(t==null?void 0:t.mlN1,t==null?void 0:t.mr1,t==null?void 0:t.dNone,t==null?void 0:t.dSmFlex)},",")));if(Boolean(e.value))return D.default.createElement("span",null,D.default.createElement(no,{value:e.value,showLabel:!1,showLastNonZeroDecimal:!0}));if(Boolean(e.egldValue))return D.default.createElement("span",null,D.default.createElement(no,{value:e.egldValue,showLastNonZeroDecimal:!0}));if(Boolean(e.providerName)){let c=(0,co.default)(t==null?void 0:t.sideIcon,t==null?void 0:t.mr1,t==null?void 0:t.mrLg1,t==null?void 0:t.roundedCircle);return D.default.createElement("span",{className:(0,co.default)(t==null?void 0:t.dFlex,t==null?void 0:t.mr1)},D.default.createElement(Ee,{page:ye.providerDetails(o.receiver),className:(0,co.default)(t==null?void 0:t.dFlex,t==null?void 0:t.alignSelfCenter)},e.providerAvatar?D.default.createElement("img",{src:e.providerAvatar,className:c,alt:" "}):D.default.createElement(fi,{className:c}),e.providerName))}return null},Rd=L(uy,{ssrStyles:()=>Promise.resolve().then(()=>(ca(),sa)),clientStyles:()=>(ca(),G(sa)).default});var fy=({transaction:e,styles:o})=>{let t=(0,Bo.useMemo)(()=>e.action?gi(e.action):[],[e.action]);return Bo.default.createElement("div",{"data-testid":"transactionAction",className:o==null?void 0:o.action},t.map((r,c)=>Bo.default.createElement("div",{key:JSON.stringify(t)+c,className:o==null?void 0:o.result},Bo.default.createElement(Rd,{transaction:e,entry:r}))))},Od=L(fy,{ssrStyles:()=>Promise.resolve().then(()=>(ma(),pa)),clientStyles:()=>(ma(),G(pa)).default});var hy=({className:e,transaction:o})=>{var c;let t=o.action&&o.action.category,r=((c=o.action)==null?void 0:c.category)!=="scCall";return t?Wo.default.createElement(Wo.default.Fragment,null,Wo.default.createElement(Vt,{className:e,title:"Method"},Ut(o)),r&&Wo.default.createElement(Vt,{className:e,title:"Transaction Action"},Wo.default.createElement(Od,{transaction:o}))):null};0&&(module.exports={TransactionInfoMethod});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
