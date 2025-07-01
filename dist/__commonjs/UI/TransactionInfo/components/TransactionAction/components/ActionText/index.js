"use strict";var xd=Object.create;var Bo=Object.defineProperty,yd=Object.defineProperties,Sd=Object.getOwnPropertyDescriptor,bd=Object.getOwnPropertyDescriptors,wd=Object.getOwnPropertyNames,_n=Object.getOwnPropertySymbols,vd=Object.getPrototypeOf,bt=Object.prototype.hasOwnProperty,na=Object.prototype.propertyIsEnumerable;var oa=(e,o,t)=>o in e?Bo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))bt.call(o,t)&&oa(e,t,o[t]);if(_n)for(var t of _n(o))na.call(o,t)&&oa(e,t,o[t]);return e},w=(e,o)=>yd(e,bd(o));var ae=(e,o)=>{var t={};for(var r in e)bt.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&_n)for(var r of _n(e))o.indexOf(r)<0&&na.call(e,r)&&(t[r]=e[r]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),K=(e,o)=>{for(var t in o)Bo(e,t,{get:o[t],enumerable:!0})},ta=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of wd(o))!bt.call(e,c)&&c!==t&&Bo(e,c,{get:()=>o[c],enumerable:!(r=Sd(o,c))||r.enumerable});return e};var g=(e,o,t)=>(t=e!=null?xd(vd(e)):{},ta(o||!e||!e.__esModule?Bo(t,"default",{value:e,enumerable:!0}):t,e)),H=e=>ta(Bo({},"__esModule",{value:!0}),e);var T=(e,o,t)=>new Promise((r,c)=>{var p=_=>{try{d(t.next(_))}catch(f){c(f)}},m=_=>{try{d(t.throw(_))}catch(f){c(f)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(e,o)).next())});var ia=b(un=>{"use strict";n();un.byteLength=Id;un.toByteArray=Ld;un.fromByteArray=Nd;var de=[],te=[],Ad=typeof Uint8Array!="undefined"?Uint8Array:Array,wt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for($e=0,ra=wt.length;$e<ra;++$e)de[$e]=wt[$e],te[wt.charCodeAt($e)]=$e;var $e,ra;te["-".charCodeAt(0)]=62;te["_".charCodeAt(0)]=63;function aa(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function Id(e){var o=aa(e),t=o[0],r=o[1];return(t+r)*3/4-r}function kd(e,o,t){return(o+t)*3/4-t}function Ld(e){var o,t=aa(e),r=t[0],c=t[1],p=new Ad(kd(e,r,c)),m=0,d=c>0?r-4:r,_;for(_=0;_<d;_+=4)o=te[e.charCodeAt(_)]<<18|te[e.charCodeAt(_+1)]<<12|te[e.charCodeAt(_+2)]<<6|te[e.charCodeAt(_+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=te[e.charCodeAt(_)]<<2|te[e.charCodeAt(_+1)]>>4,p[m++]=o&255),c===1&&(o=te[e.charCodeAt(_)]<<10|te[e.charCodeAt(_+1)]<<4|te[e.charCodeAt(_+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Ed(e){return de[e>>18&63]+de[e>>12&63]+de[e>>6&63]+de[e&63]}function Pd(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Ed(r));return c.join("")}function Nd(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,d=t-r;m<d;m+=p)c.push(Pd(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],c.push(de[o>>2]+de[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(de[o>>10]+de[o>>4&63]+de[o<<2&63]+"=")),c.join("")}});var sa=b(vt=>{n();vt.read=function(e,o,t,r,c){var p,m,d=c*8-r-1,_=(1<<d)-1,f=_>>1,x=-7,y=t?c-1:0,A=t?-1:1,E=e[o+y];for(y+=A,p=E&(1<<-x)-1,E>>=-x,x+=d;x>0;p=p*256+e[o+y],y+=A,x-=8);for(m=p&(1<<-x)-1,p>>=-x,x+=r;x>0;m=m*256+e[o+y],y+=A,x-=8);if(p===0)p=1-f;else{if(p===_)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-f}return(E?-1:1)*m*Math.pow(2,p-r)};vt.write=function(e,o,t,r,c,p){var m,d,_,f=p*8-c-1,x=(1<<f)-1,y=x>>1,A=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:p-1,W=r?1:-1,X=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+y>=1?o+=A/_:o+=A*Math.pow(2,1-y),o*_>=2&&(m++,_/=2),m+y>=x?(d=0,m=x):m+y>=1?(d=(o*_-1)*Math.pow(2,c),m=m+y):(d=o*Math.pow(2,y-1)*Math.pow(2,c),m=0));c>=8;e[t+E]=d&255,E+=W,d/=256,c-=8);for(m=m<<c|d,f+=c;f>0;e[t+E]=m&255,E+=W,m/=256,f-=8);e[t+E-W]|=X*128}});var ya=b(lo=>{"use strict";n();var At=ia(),mo=sa(),ca=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;lo.Buffer=l;lo.SlowBuffer=Fd;lo.INSPECT_MAX_BYTES=50;var gn=2147483647;lo.kMaxLength=gn;l.TYPED_ARRAY_SUPPORT=Cd();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Cd(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function we(e){if(e>gn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,l.prototype),o}function l(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Et(e)}return da(e,o,t)}l.poolSize=8192;function da(e,o,t){if(typeof e=="string")return Rd(e,o);if(ArrayBuffer.isView(e))return Md(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(le(e,ArrayBuffer)||e&&le(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(le(e,SharedArrayBuffer)||e&&le(e.buffer,SharedArrayBuffer)))return kt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return l.from(r,o,t);var c=Od(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return l.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}l.from=function(e,o,t){return da(e,o,t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function la(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Dd(e,o,t){return la(e),e<=0?we(e):o!==void 0?typeof t=="string"?we(e).fill(o,t):we(e).fill(o):we(e)}l.alloc=function(e,o,t){return Dd(e,o,t)};function Et(e){return la(e),we(e<0?0:Pt(e)|0)}l.allocUnsafe=function(e){return Et(e)};l.allocUnsafeSlow=function(e){return Et(e)};function Rd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=_a(e,o)|0,r=we(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function It(e){for(var o=e.length<0?0:Pt(e.length)|0,t=we(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function Md(e){if(le(e,Uint8Array)){var o=new Uint8Array(e);return kt(o.buffer,o.byteOffset,o.byteLength)}return It(e)}function kt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,l.prototype),r}function Od(e){if(l.isBuffer(e)){var o=Pt(e.length)|0,t=we(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Nt(e.length)?we(0):It(e);if(e.type==="Buffer"&&Array.isArray(e.data))return It(e.data)}function Pt(e){if(e>=gn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+gn.toString(16)+" bytes");return e|0}function Fd(e){return+e!=e&&(e=0),l.alloc(+e)}l.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==l.prototype};l.compare=function(o,t){if(le(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),le(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(o)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};l.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return l.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=l.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(le(m,Uint8Array))p+m.length>c.length?l.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(l.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function _a(e,o){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||le(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Lt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return xa(e).length;default:if(c)return r?-1:Lt(e).length;o=(""+o).toLowerCase(),c=!0}}l.byteLength=_a;function Ud(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Kd(this,o,t);case"utf8":case"utf-8":return ga(this,o,t);case"ascii":return zd(this,o,t);case"latin1":case"binary":return jd(this,o,t);case"base64":return Vd(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xd(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}l.prototype._isBuffer=!0;function Ve(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}l.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ve(this,t,t+1);return this};l.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ve(this,t,t+3),Ve(this,t+1,t+2);return this};l.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ve(this,t,t+7),Ve(this,t+1,t+6),Ve(this,t+2,t+5),Ve(this,t+3,t+4);return this};l.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ga(this,0,o):Ud.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(o){if(!l.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:l.compare(this,o)===0};l.prototype.inspect=function(){var o="",t=lo.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};ca&&(l.prototype[ca]=l.prototype.inspect);l.prototype.compare=function(o,t,r,c,p){if(le(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-t,_=Math.min(m,d),f=this.slice(c,p),x=o.slice(t,r),y=0;y<_;++y)if(f[y]!==x[y]){m=f[y],d=x[y];break}return m<d?-1:d<m?1:0};function ua(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Nt(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=l.from(o,r)),l.isBuffer(o))return o.length===0?-1:pa(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):pa(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function pa(e,o,t,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(E,W){return p===1?E[W]:E.readUInt16BE(W*p)}var f;if(c){var x=-1;for(f=t;f<m;f++)if(_(e,f)===_(o,x===-1?0:f-x)){if(x===-1&&(x=f),f-x+1===d)return x*p}else x!==-1&&(f-=f-x),x=-1}else for(t+d>m&&(t=m-d),f=t;f>=0;f--){for(var y=!0,A=0;A<d;A++)if(_(e,f+A)!==_(o,A)){y=!1;break}if(y)return f}return-1}l.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};l.prototype.indexOf=function(o,t,r){return ua(this,o,t,r,!0)};l.prototype.lastIndexOf=function(o,t,r){return ua(this,o,t,r,!1)};function Bd(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Nt(d))return m;e[t+m]=d}return m}function Wd(e,o,t,r){return fn(Lt(o,e.length-t),e,t,r)}function Gd(e,o,t,r){return fn(Jd(o),e,t,r)}function Hd(e,o,t,r){return fn(xa(o),e,t,r)}function $d(e,o,t,r){return fn(Qd(o,e.length-t),e,t,r)}l.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Bd(this,o,t,r);case"utf8":case"utf-8":return Wd(this,o,t,r);case"ascii":case"latin1":case"binary":return Gd(this,o,t,r);case"base64":return Hd(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $d(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Vd(e,o,t){return o===0&&t===e.length?At.fromByteArray(e):At.fromByteArray(e.slice(o,t))}function ga(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var _,f,x,y;switch(d){case 1:p<128&&(m=p);break;case 2:_=e[c+1],(_&192)===128&&(y=(p&31)<<6|_&63,y>127&&(m=y));break;case 3:_=e[c+1],f=e[c+2],(_&192)===128&&(f&192)===128&&(y=(p&15)<<12|(_&63)<<6|f&63,y>2047&&(y<55296||y>57343)&&(m=y));break;case 4:_=e[c+1],f=e[c+2],x=e[c+3],(_&192)===128&&(f&192)===128&&(x&192)===128&&(y=(p&15)<<18|(_&63)<<12|(f&63)<<6|x&63,y>65535&&y<1114112&&(m=y))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return qd(r)}var ma=4096;function qd(e){var o=e.length;if(o<=ma)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=ma));return t}function zd(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function jd(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function Kd(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=el[e[p]];return c}function Xd(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}l.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,l.prototype),c};function G(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||G(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||G(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};l.prototype.readUint8=l.prototype.readUInt8=function(o,t){return o=o>>>0,t||G(o,1,this.length),this[o]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||G(o,2,this.length),this[o]|this[o+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||G(o,2,this.length),this[o]<<8|this[o+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||G(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||G(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};l.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||G(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};l.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||G(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};l.prototype.readInt8=function(o,t){return o=o>>>0,t||G(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};l.prototype.readInt16LE=function(o,t){o=o>>>0,t||G(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};l.prototype.readInt16BE=function(o,t){o=o>>>0,t||G(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};l.prototype.readInt32LE=function(o,t){return o=o>>>0,t||G(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};l.prototype.readInt32BE=function(o,t){return o=o>>>0,t||G(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};l.prototype.readFloatLE=function(o,t){return o=o>>>0,t||G(o,4,this.length),mo.read(this,o,!0,23,4)};l.prototype.readFloatBE=function(o,t){return o=o>>>0,t||G(o,4,this.length),mo.read(this,o,!1,23,4)};l.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||G(o,8,this.length),mo.read(this,o,!0,52,8)};l.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||G(o,8,this.length),mo.read(this,o,!1,52,8)};function Z(e,o,t,r,c,p){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;Z(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;Z(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};l.prototype.writeUint8=l.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,1,255,0),this[t]=o&255,t+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};l.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);Z(this,o,t,r,p-1,-p)}var m=0,d=1,_=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+r};l.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);Z(this,o,t,r,p-1,-p)}var m=r-1,d=1,_=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(o/d>>0)-_&255;return t+r};l.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};l.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};l.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};l.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};l.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function fa(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ha(e,o,t,r,c){return o=+o,t=t>>>0,c||fa(e,o,t,4,34028234663852886e22,-34028234663852886e22),mo.write(e,o,t,r,23,4),t+4}l.prototype.writeFloatLE=function(o,t,r){return ha(this,o,t,!0,r)};l.prototype.writeFloatBE=function(o,t,r){return ha(this,o,t,!1,r)};function Ta(e,o,t,r,c){return o=+o,t=t>>>0,c||fa(e,o,t,8,17976931348623157e292,-17976931348623157e292),mo.write(e,o,t,r,52,8),t+8}l.prototype.writeDoubleLE=function(o,t,r){return Ta(this,o,t,!0,r)};l.prototype.writeDoubleBE=function(o,t,r){return Ta(this,o,t,!1,r)};l.prototype.copy=function(o,t,r,c){if(!l.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};l.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=l.isBuffer(o)?o:l.from(o,c),_=d.length;if(_===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%_]}return this};var Zd=/[^+/0-9A-Za-z-_]/g;function Yd(e){if(e=e.split("=")[0],e=e.trim().replace(Zd,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Lt(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Jd(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Qd(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function xa(e){return At.toByteArray(Yd(e))}function fn(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function le(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Nt(e){return e!==e}var el=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var Aa=b((oy,va)=>{n();var O=va.exports={},_e,ue;function Ct(){throw new Error("setTimeout has not been defined")}function Dt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?_e=setTimeout:_e=Ct}catch(e){_e=Ct}try{typeof clearTimeout=="function"?ue=clearTimeout:ue=Dt}catch(e){ue=Dt}})();function Sa(e){if(_e===setTimeout)return setTimeout(e,0);if((_e===Ct||!_e)&&setTimeout)return _e=setTimeout,setTimeout(e,0);try{return _e(e,0)}catch(o){try{return _e.call(null,e,0)}catch(t){return _e.call(this,e,0)}}}function ol(e){if(ue===clearTimeout)return clearTimeout(e);if((ue===Dt||!ue)&&clearTimeout)return ue=clearTimeout,clearTimeout(e);try{return ue(e)}catch(o){try{return ue.call(null,e)}catch(t){return ue.call(this,e)}}}var ve=[],_o=!1,qe,hn=-1;function nl(){!_o||!qe||(_o=!1,qe.length?ve=qe.concat(ve):hn=-1,ve.length&&ba())}function ba(){if(!_o){var e=Sa(nl);_o=!0;for(var o=ve.length;o;){for(qe=ve,ve=[];++hn<o;)qe&&qe[hn].run();hn=-1,o=ve.length}qe=null,_o=!1,ol(e)}}O.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ve.push(new wa(e,o)),ve.length===1&&!_o&&Sa(ba)};function wa(e,o){this.fun=e,this.array=o}wa.prototype.run=function(){this.fun.apply(null,this.array)};O.title="browser";O.browser=!0;O.env={};O.argv=[];O.version="";O.versions={};function Ae(){}O.on=Ae;O.addListener=Ae;O.once=Ae;O.off=Ae;O.removeListener=Ae;O.removeAllListeners=Ae;O.emit=Ae;O.prependListener=Ae;O.prependOnceListener=Ae;O.listeners=function(e){return[]};O.binding=function(e){throw new Error("process.binding is not supported")};O.cwd=function(){return"/"};O.chdir=function(e){throw new Error("process.chdir is not supported")};O.umask=function(){return 0}});var a,s,tl,i,n=h(()=>{a=g(ya()),s=g(Aa()),tl=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=tl});var ka=h(()=>{"use strict";n()});var ge=h(()=>{"use strict";n()});var La=h(()=>{"use strict";n()});var Mt,Ea=h(()=>{"use strict";n();Mt=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(Mt||{})});var Pa=h(()=>{"use strict";n()});var Ot=h(()=>{"use strict";n()});var Na=h(()=>{"use strict";n()});var Ft=h(()=>{"use strict";n()});var Ca=h(()=>{"use strict";n()});var Da=h(()=>{"use strict";n()});var ze,uo,Me=h(()=>{"use strict";n();ze=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),uo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Ra,uy,Ma,gy,N=h(()=>{"use strict";n();Me();Ra=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Ra||{}),uy=u(u({},uo.WindowProviderRequestEnums),Ra),Ma=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ma||{}),gy=u(u({},uo.WindowProviderResponseEnums),Ma)});var Oa=h(()=>{"use strict";n()});var Fa=h(()=>{"use strict";n()});var Y=h(()=>{"use strict";n()});var Ua=h(()=>{"use strict";n()});var Ba=h(()=>{"use strict";n()});var Wa=h(()=>{"use strict";n()});var F=h(()=>{"use strict";n();Ft();Ca();Da();N();Oa();Fa();Y();Ua();Ba();Wa()});var go,Ga,Cy,Ha,Dy,$a,Ry,My,al,fo=h(()=>{"use strict";n();F();go={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ga,egldLabel:Cy}=go["devnet"],{chainId:Ha,egldLabel:Dy}=go["testnet"],{chainId:$a,egldLabel:Ry}=go["mainnet"],My={["devnet"]:Ga,["testnet"]:Ha,["mainnet"]:$a},al={[Ga]:"devnet",[Ha]:"testnet",[$a]:"mainnet"}});var Tn=h(()=>{"use strict";n()});var fe,Va=h(()=>{"use strict";n();fe=require("@multiversx/sdk-web-wallet-provider")});var je,Wo=h(()=>{"use strict";n();je=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var qa,za,Ut,Gy,Hy,Bt=h(()=>{"use strict";n();Wo();Ut=String((za=(qa=je.safeWindow)==null?void 0:qa.navigator)==null?void 0:za.userAgent),Gy=/^((?!chrome|android).)*safari/i.test(Ut),Hy=/firefox/i.test(Ut)&&/windows/i.test(Ut)});var xn,yn,q,Ke,ja,Sn,Ka,he,Xa,v=h(()=>{"use strict";n();ka();ge();La();Ea();Pa();Ot();Na();fo();Tn();Va();Bt();xn=5e4,yn=1e9,q=18,Ke=4,ja=1,Sn="logout",Ka="login",he="0",Xa="..."});var Xe,ho=h(()=>{"use strict";n();Xe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Wt={};K(Wt,{css:()=>Ya,default:()=>il});var Ya,il,Gt=h(()=>{"use strict";n();Ya=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ya));il={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Ho,bn=h(()=>{"use strict";n();Ho=()=>Date.now()/1e3});var ei=h(()=>{"use strict";n()});var oi=h(()=>{"use strict";n()});var $t=h(()=>{"use strict";n();bn();ei();oi()});var Vt={};K(Vt,{clear:()=>ll,getItem:()=>ml,localStorageKeys:()=>Oe,removeItem:()=>dl,setItem:()=>pl});var Oe,wn,pl,ml,dl,ll,To=h(()=>{"use strict";n();$t();Oe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},wn=typeof localStorage!="undefined",pl=({key:e,data:o,expires:t})=>{!wn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ml=e=>{if(!wn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Ho()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},dl=e=>{!wn||localStorage.removeItem(String(e))},ll=()=>{!wn||localStorage.clear()}});var qt={};K(qt,{clear:()=>ai,getItem:()=>ti,removeItem:()=>ri,setItem:()=>ni,storage:()=>_l});var ni,ti,ri,ai,_l,ii=h(()=>{"use strict";n();ni=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},ti=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},ri=e=>sessionStorage.removeItem(String(e)),ai=()=>sessionStorage.clear(),_l={setItem:ni,getItem:ti,removeItem:ri,clear:ai}});var Ze,xo=h(()=>{"use strict";n();To();ii();Ze={session:qt,local:Vt}});var zt,R,Q,M=h(()=>{"use strict";n();zt=require("@reduxjs/toolkit");v();R=(0,zt.createAction)(Sn),Q=(0,zt.createAction)(Ka,e=>({payload:e}))});var Kt,si,ci,vn,jt,pi,An,ul,Xt,kS,gl,fl,LS,ES,PS,hl,Tl,In,kn=h(()=>{"use strict";n();Kt=require("@multiversx/sdk-core"),si=require("@reduxjs/toolkit"),ci=require("redux-persist");v();xo();To();M();vn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:he},jt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":vn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},pi=(0,si.createSlice)({name:"accountInfoSlice",initialState:jt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Kt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:vn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(Ze.local.removeItem(Oe.loginExpiresAt),jt)),e.addCase(Q,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new Kt.Address(r).hex()}),e.addCase(ci.REHYDRATE,(o,t)=>{var f;if(!((f=t.payload)!=null&&f.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let _=m&&c in m;o.accounts=_?m:jt.accounts,o.publicKey=d})}}),{setAccount:An,setAddress:ul,setAccountNonce:Xt,setAccountShard:kS,setLedgerAccount:gl,updateLedgerAccount:fl,setWalletConnectAccount:LS,setIsAccountLoading:ES,setAccountLoadingError:PS,setWebsocketEvent:hl,setWebsocketBatchEvent:Tl}=pi.actions,In=pi.reducer});function $o(){return new Date().setHours(new Date().getHours()+24)}function Vo(e){Ze.local.setItem({key:Oe.loginExpiresAt,data:e,expires:e})}var Zt=h(()=>{"use strict";n();xo();To()});var di,mi,li,WS,xl,yl,_i,GS,Sl,ui,HS,$S,VS,Ln,En=h(()=>{"use strict";n();di=require("@reduxjs/toolkit");Zt();N();M();mi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},li=(0,di.createSlice)({name:"loginInfoSlice",initialState:mi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>mi),e.addCase(Q,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,Vo($o())})}}),{setLoginMethod:WS,setWalletConnectLogin:xl,setLedgerLogin:yl,setTokenLogin:_i,setTokenLoginSignature:GS,setWalletLogin:Sl,invalidateLoginSession:ui,setLogoutRoute:HS,setIsWalletConnectV2Initialized:$S,setWebviewLogin:VS}=li.actions,Ln=li.reducer});var fi,gi,hi,KS,bl,XS,wl,Pn,Nn=h(()=>{"use strict";n();fi=require("@reduxjs/toolkit");M();gi={},hi=(0,fi.createSlice)({name:"modalsSlice",initialState:gi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>gi)}}),{setTxSubmittedModal:KS,setNotificationModal:bl,clearTxSubmittedModal:XS,clearNotificationModal:wl}=hi.actions,Pn=hi.reducer});var U,V=h(()=>{"use strict";n();ho();U=()=>{if(!Xe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var Ti=h(()=>{"use strict";n();V()});var xi=h(()=>{"use strict";n();z()});var yi=h(()=>{"use strict";n();Wo()});var z=h(()=>{"use strict";n();Ti();xi();V();yi()});var qo=h(()=>{"use strict";n();z()});var bi=h(()=>{"use strict";n();qo()});function wi(e){return e[Math.floor(Math.random()*e.length)]}var vi=h(()=>{"use strict";n()});var Yt=h(()=>{"use strict";n();Ot()});var Ie=h(()=>{"use strict";n();bi();vi();Yt()});var Ai,Ii,ki,Jt,Al,Li,k0,L0,Il,Cn,Dn=h(()=>{"use strict";n();Ai=require("@reduxjs/toolkit"),Ii=g(require("lodash.omit")),ki=require("redux-persist");Tn();M();Ie();Jt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Al={network:Jt},Li=(0,Ai.createSlice)({name:"appConfig",initialState:Al,reducers:{initializeNetworkConfig:(e,o)=>{let t=wi(o.payload.walletConnectV2RelayAddresses),r=(0,Ii.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(ki.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:k0,updateNetworkConfig:L0,setCustomWalletAddress:Il}=Li.actions,Cn=Li.reducer});var Ei,Qt,Pi,R0,M0,O0,Rn,Mn=h(()=>{"use strict";n();Ei=require("@reduxjs/toolkit");F();M();Qt={isSigning:!1,signedSessions:{}},Pi=(0,Ei.createSlice)({name:"signedMessageInfoSliceState",initialState:Qt,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>Qt},extraReducers:e=>{e.addCase(R,()=>Qt)}}),{setSignSession:R0,clearSignedMessageInfo:M0,setSignSessionState:O0}=Pi.actions,Rn=Pi.reducer});var Ci,Di,Ni,Ri,kl,Ll,$0,El,On,Fn=h(()=>{"use strict";n();Ci=require("@reduxjs/toolkit"),Di=require("redux-persist");F();bn();M();Ni={customToasts:[],transactionToasts:[]},Ri=(0,Ci.createSlice)({name:"toastsSlice",initialState:Ni,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=w(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:Ho(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>Ni),e.addCase(Di.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:kl,removeCustomToast:Ll,addTransactionToast:$0,removeTransactionToast:El}=Ri.actions,On=Ri.reducer});var Mi,or,nr,tr,Pl,er,Oi,j0,Nl,rr,Un,Bn=h(()=>{"use strict";n();Mi=require("@reduxjs/toolkit");M();or="Transaction failed",nr="Transaction successful",tr="Processing transaction",Pl="Transaction submitted",er={},Oi=(0,Mi.createSlice)({name:"transactionsInfo",initialState:er,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||or,successMessage:(r==null?void 0:r.successMessage)||nr,processingMessage:(r==null?void 0:r.processingMessage)||tr,submittedMessage:(r==null?void 0:r.submittedMessage)||Pl,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>er},extraReducers:e=>{e.addCase(R,()=>er)}}),{clearTransactionsInfo:j0,setTransactionsDisplayInfo:Nl,clearTransactionsInfoForSessionId:rr}=Oi.actions,Un=Oi.reducer});function So(e){return e!=null&&(Gl(e)||zl(e))}function bo(e){return e!=null&&(Hl(e)||jl(e))}function wo(e){return e!=null&&($l(e)||Kl(e))}function Fi(e){return e!=null&&(Vl(e)||Xl(e))}function ar(e){return e!=null&&ql(e)}function Gl(e){return e!=null&&Cl.includes(e)}function Hl(e){return e!=null&&Dl.includes(e)}function $l(e){return e!=null&&Rl.includes(e)}function Vl(e){return e!=null&&Ml.includes(e)}function ql(e){return e!=null&&Ol.includes(e)}function zl(e){return e!=null&&Fl.includes(e)}function jl(e){return e!=null&&Ul.includes(e)}function Kl(e){return e!=null&&Bl.includes(e)}function Xl(e){return e!=null&&Wl.includes(e)}var Cl,Dl,Rl,Ml,Ol,Fl,Ul,Bl,Wl,vo=h(()=>{"use strict";n();N();Cl=["sent"],Dl=["success"],Rl=["fail","cancelled","timedOut"],Ml=["invalid"],Ol=["timedOut"],Fl=["pending"],Ul=["success"],Bl=["fail","invalid"],Wl=["not executed"]});var Ui,Bi,zo,Zl,Wi,Gi,Hi,Yl,Wn,Jl,Ql,nb,e_,jo,ir,tb,Gn,Hn=h(()=>{"use strict";n();Ui=require("@reduxjs/toolkit"),Bi=require("redux-persist");N();vo();M();zo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},Zl={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Wi=(0,Ui.createSlice)({name:"transactionsSlice",initialState:zo,reducers:{moveTransactionsToSignedState:(e,o)=>{var _,f;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},Zl),((_=e.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===t&&(e.transactionsToSign=zo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var f,x,y,A,E,W,X,me;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,_=(x=(f=e.signedTransactions)==null?void 0:f[t])==null?void 0:x.transactions;if(_!=null){e.signedTransactions[t].transactions=_.map(C=>C.hash===p?w(u(u({},m!=null?m:{}),C),{status:r,errorMessage:c,inTransit:d}):C);let He=(A=(y=e.signedTransactions[t])==null?void 0:y.transactions)==null?void 0:A.every(C=>bo(C.status)),Re=(W=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:W.some(C=>wo(C.status)),be=(me=(X=e.signedTransactions[t])==null?void 0:X.transactions)==null?void 0:me.every(C=>Fi(C.status));He&&(e.signedTransactions[t].status="success"),Re&&(e.signedTransactions[t].status="fail"),be&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=zo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=zo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(R,()=>zo),e.addCase(Bi.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((d,[_,f])=>{let x=new Date(_),y=new Date;return y.setHours(y.getHours()+5),y-x>0||(d[_]=f),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Gi,updateSignedTransactions:Hi,setTransactionsToSign:Yl,clearAllTransactionsToSign:Wn,clearAllSignedTransactions:Jl,clearSignedTransaction:Ql,clearTransactionToSign:nb,setSignTransactionsError:e_,setSignTransactionsCancelMessage:jo,moveTransactionsToSignedState:ir,updateSignedTransactionsCustomTransactionInformation:tb}=Wi.actions,Gn=Wi.reducer});var $i,sr,Vi,sb,cb,o_,pb,$n,Vn=h(()=>{"use strict";n();$i=require("@reduxjs/toolkit");M();sr={},Vi=(0,$i.createSlice)({name:"batchTransactionsSlice",initialState:sr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>sr},extraReducers:e=>{e.addCase(R,()=>sr)}}),{setBatchTransactions:sb,updateBatchTransactions:cb,clearBatchTransactions:o_,clearAllBatchTransactions:pb}=Vi.actions,$n=Vi.reducer});var zi,qi,ji,_b,Ki,cr=h(()=>{"use strict";n();zi=require("@reduxjs/toolkit");M();qi={},ji=(0,zi.createSlice)({name:"dappConfigSlice",initialState:qi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>qi)}}),{setDappConfig:_b}=ji.actions,Ki=ji.reducer});var P=h(()=>{"use strict";n();kn();En();Nn();Dn();Mn();Fn();Bn();Hn();Vn();cr()});var pr=h(()=>{"use strict";n()});var Yi,a_,i_,Ye,jn=h(()=>{"use strict";n();Yi=require("@reduxjs/toolkit");pr();kn();Vn();cr();En();Nn();Dn();Mn();Fn();Bn();Hn();a_={["account"]:In,["dappConfig"]:Ki,["loginInfo"]:Ln,["modals"]:Pn,["networkConfig"]:Cn,["signedMessageInfo"]:Rn,["toasts"]:On,["transactionsInfo"]:Un,["transactions"]:Gn,["batchTransactions"]:$n},i_=(e={})=>(0,Yi.combineReducers)(u(u({},a_),e)),Ye=i_});var os={};K(os,{default:()=>b_,sessionStorageReducers:()=>mr});function ke(e,o=[]){return{key:e,version:1,storage:Qi.default,blacklist:o}}var J,Ji,Qi,s_,Ko,c_,p_,m_,d_,l_,__,u_,g_,f_,h_,es,T_,mr,x_,y_,S_,b_,ns=h(()=>{"use strict";n();J=require("redux-persist"),Ji=g(require("redux-persist/lib/storage")),Qi=g(require("redux-persist/lib/storage/session"));jn();P();kn();Vn();En();Nn();Dn();Mn();Fn();Bn();Hn();pr();s_={persistReducersStorageType:"localStorage"},Ko={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},c_=ke(Ko["account"]),p_=ke(Ko["loginInfo"]),m_=ke(Ko["modals"]),d_=ke(Ko["networkConfig"]),l_={2:e=>w(u({},e),{networkConfig:Jt})};__=ke("sdk-dapp-transactionsInfo"),u_=ke("sdk-dapp-transactions",["transactionsToSign"]),g_=ke("sdk-dapp-batchTransactions",["batchTransactions"]),f_=ke("sdk-dapp-toasts"),h_=ke("sdk-dapp-signedMessageInfo"),es={key:"sdk-dapp-store",version:2,storage:Ji.default,whitelist:Object.keys(Ko),migrate:(0,J.createMigrate)(l_,{debug:!1})},T_=w(u({},es),{whitelist:[]}),mr={["toasts"]:(0,J.persistReducer)(f_,On),["transactions"]:(0,J.persistReducer)(u_,Gn),["transactionsInfo"]:(0,J.persistReducer)(__,Un),["batchTransactions"]:(0,J.persistReducer)(g_,$n),["signedMessageInfo"]:(0,J.persistReducer)(h_,Rn)},x_=w(u({},mr),{["account"]:(0,J.persistReducer)(c_,In),["loginInfo"]:(0,J.persistReducer)(p_,Ln),["modals"]:(0,J.persistReducer)(m_,Pn),["networkConfig"]:(0,J.persistReducer)(d_,Cn)}),y_=s_.persistReducersStorageType==="localStorage",S_=y_?(0,J.persistReducer)(es,Ye(mr)):(0,J.persistReducer)(T_,Ye(x_)),b_=S_});var ts={};K(ts,{default:()=>w_});var w_,rs=h(()=>{"use strict";n();jn();w_=Ye()});var as={};K(as,{default:()=>A_});var re,v_,A_,is=h(()=>{"use strict";n();re=require("redux-persist"),v_=[re.FLUSH,re.REHYDRATE,re.PAUSE,re.PERSIST,re.PURGE,re.REGISTER],A_=v_});var ps={};K(ps,{default:()=>cs});function cs(e){return(0,ss.persistStore)(e)}var ss,ms=h(()=>{"use strict";n();ss=require("redux-persist")});var Sr={};K(Sr,{css:()=>nc,default:()=>Ou});var nc,Ou,br=h(()=>{"use strict";n();nc=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nc));Ou={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var vr={};K(vr,{css:()=>sc,default:()=>Uu});var sc,Uu,Ar=h(()=>{"use strict";n();sc=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sc));Uu={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var bc=b((h3,Sc)=>{n();var Ag=typeof i=="object"&&i&&i.Object===Object&&i;Sc.exports=Ag});var on=b((T3,wc)=>{n();var Ig=bc(),kg=typeof self=="object"&&self&&self.Object===Object&&self,Lg=Ig||kg||Function("return this")();wc.exports=Lg});var Nr=b((x3,vc)=>{n();var Eg=on(),Pg=Eg.Symbol;vc.exports=Pg});var Lc=b((y3,kc)=>{n();var Ac=Nr(),Ic=Object.prototype,Ng=Ic.hasOwnProperty,Cg=Ic.toString,nn=Ac?Ac.toStringTag:void 0;function Dg(e){var o=Ng.call(e,nn),t=e[nn];try{e[nn]=void 0;var r=!0}catch(p){}var c=Cg.call(e);return r&&(o?e[nn]=t:delete e[nn]),c}kc.exports=Dg});var Pc=b((S3,Ec)=>{n();var Rg=Object.prototype,Mg=Rg.toString;function Og(e){return Mg.call(e)}Ec.exports=Og});var Cr=b((b3,Dc)=>{n();var Nc=Nr(),Fg=Lc(),Ug=Pc(),Bg="[object Null]",Wg="[object Undefined]",Cc=Nc?Nc.toStringTag:void 0;function Gg(e){return e==null?e===void 0?Wg:Bg:Cc&&Cc in Object(e)?Fg(e):Ug(e)}Dc.exports=Gg});var Mc=b((w3,Rc)=>{n();var Hg=Array.isArray;Rc.exports=Hg});var Fc=b((v3,Oc)=>{n();function $g(e){return e!=null&&typeof e=="object"}Oc.exports=$g});var Bc=b((A3,Uc)=>{n();var Vg=Cr(),qg=Mc(),zg=Fc(),jg="[object String]";function Kg(e){return typeof e=="string"||!qg(e)&&zg(e)&&Vg(e)==jg}Uc.exports=Kg});var _t=b((v5,Vc)=>{n();function uf(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Vc.exports=uf});var zc=b((A5,qc)=>{n();var gf=Cr(),ff=_t(),hf="[object AsyncFunction]",Tf="[object Function]",xf="[object GeneratorFunction]",yf="[object Proxy]";function Sf(e){if(!ff(e))return!1;var o=gf(e);return o==Tf||o==xf||o==hf||o==yf}qc.exports=Sf});var Kc=b((I5,jc)=>{n();var bf=on(),wf=bf["__core-js_shared__"];jc.exports=wf});var Yc=b((k5,Zc)=>{n();var Or=Kc(),Xc=function(){var e=/[^.]+$/.exec(Or&&Or.keys&&Or.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function vf(e){return!!Xc&&Xc in e}Zc.exports=vf});var Qc=b((L5,Jc)=>{n();var Af=Function.prototype,If=Af.toString;function kf(e){if(e!=null){try{return If.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Jc.exports=kf});var op=b((E5,ep)=>{n();var Lf=zc(),Ef=Yc(),Pf=_t(),Nf=Qc(),Cf=/[\\^$.*+?()[\]{}|]/g,Df=/^\[object .+?Constructor\]$/,Rf=Function.prototype,Mf=Object.prototype,Of=Rf.toString,Ff=Mf.hasOwnProperty,Uf=RegExp("^"+Of.call(Ff).replace(Cf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Bf(e){if(!Pf(e)||Ef(e))return!1;var o=Lf(e)?Uf:Df;return o.test(Nf(e))}ep.exports=Bf});var tp=b((P5,np)=>{n();function Wf(e,o){return e==null?void 0:e[o]}np.exports=Wf});var ut=b((N5,rp)=>{n();var Gf=op(),Hf=tp();function $f(e,o){var t=Hf(e,o);return Gf(t)?t:void 0}rp.exports=$f});var tn=b((C5,ap)=>{n();var Vf=ut(),qf=Vf(Object,"create");ap.exports=qf});var cp=b((D5,sp)=>{n();var ip=tn();function zf(){this.__data__=ip?ip(null):{},this.size=0}sp.exports=zf});var mp=b((R5,pp)=>{n();function jf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}pp.exports=jf});var lp=b((M5,dp)=>{n();var Kf=tn(),Xf="__lodash_hash_undefined__",Zf=Object.prototype,Yf=Zf.hasOwnProperty;function Jf(e){var o=this.__data__;if(Kf){var t=o[e];return t===Xf?void 0:t}return Yf.call(o,e)?o[e]:void 0}dp.exports=Jf});var up=b((O5,_p)=>{n();var Qf=tn(),eh=Object.prototype,oh=eh.hasOwnProperty;function nh(e){var o=this.__data__;return Qf?o[e]!==void 0:oh.call(o,e)}_p.exports=nh});var fp=b((F5,gp)=>{n();var th=tn(),rh="__lodash_hash_undefined__";function ah(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=th&&o===void 0?rh:o,this}gp.exports=ah});var Tp=b((U5,hp)=>{n();var ih=cp(),sh=mp(),ch=lp(),ph=up(),mh=fp();function Co(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Co.prototype.clear=ih;Co.prototype.delete=sh;Co.prototype.get=ch;Co.prototype.has=ph;Co.prototype.set=mh;hp.exports=Co});var yp=b((B5,xp)=>{n();function dh(){this.__data__=[],this.size=0}xp.exports=dh});var bp=b((W5,Sp)=>{n();function lh(e,o){return e===o||e!==e&&o!==o}Sp.exports=lh});var rn=b((G5,wp)=>{n();var _h=bp();function uh(e,o){for(var t=e.length;t--;)if(_h(e[t][0],o))return t;return-1}wp.exports=uh});var Ap=b((H5,vp)=>{n();var gh=rn(),fh=Array.prototype,hh=fh.splice;function Th(e){var o=this.__data__,t=gh(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():hh.call(o,t,1),--this.size,!0}vp.exports=Th});var kp=b(($5,Ip)=>{n();var xh=rn();function yh(e){var o=this.__data__,t=xh(o,e);return t<0?void 0:o[t][1]}Ip.exports=yh});var Ep=b((V5,Lp)=>{n();var Sh=rn();function bh(e){return Sh(this.__data__,e)>-1}Lp.exports=bh});var Np=b((q5,Pp)=>{n();var wh=rn();function vh(e,o){var t=this.__data__,r=wh(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}Pp.exports=vh});var Dp=b((z5,Cp)=>{n();var Ah=yp(),Ih=Ap(),kh=kp(),Lh=Ep(),Eh=Np();function Do(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Do.prototype.clear=Ah;Do.prototype.delete=Ih;Do.prototype.get=kh;Do.prototype.has=Lh;Do.prototype.set=Eh;Cp.exports=Do});var Mp=b((j5,Rp)=>{n();var Ph=ut(),Nh=on(),Ch=Ph(Nh,"Map");Rp.exports=Ch});var Up=b((K5,Fp)=>{n();var Op=Tp(),Dh=Dp(),Rh=Mp();function Mh(){this.size=0,this.__data__={hash:new Op,map:new(Rh||Dh),string:new Op}}Fp.exports=Mh});var Wp=b((X5,Bp)=>{n();function Oh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Bp.exports=Oh});var an=b((Z5,Gp)=>{n();var Fh=Wp();function Uh(e,o){var t=e.__data__;return Fh(o)?t[typeof o=="string"?"string":"hash"]:t.map}Gp.exports=Uh});var $p=b((Y5,Hp)=>{n();var Bh=an();function Wh(e){var o=Bh(this,e).delete(e);return this.size-=o?1:0,o}Hp.exports=Wh});var qp=b((J5,Vp)=>{n();var Gh=an();function Hh(e){return Gh(this,e).get(e)}Vp.exports=Hh});var jp=b((Q5,zp)=>{n();var $h=an();function Vh(e){return $h(this,e).has(e)}zp.exports=Vh});var Xp=b((eO,Kp)=>{n();var qh=an();function zh(e,o){var t=qh(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}Kp.exports=zh});var Yp=b((oO,Zp)=>{n();var jh=Up(),Kh=$p(),Xh=qp(),Zh=jp(),Yh=Xp();function Ro(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Ro.prototype.clear=jh;Ro.prototype.delete=Kh;Ro.prototype.get=Xh;Ro.prototype.has=Zh;Ro.prototype.set=Yh;Zp.exports=Ro});var Qp=b((nO,Jp)=>{n();var Jh="__lodash_hash_undefined__";function Qh(e){return this.__data__.set(e,Jh),this}Jp.exports=Qh});var om=b((tO,em)=>{n();function eT(e){return this.__data__.has(e)}em.exports=eT});var tm=b((rO,nm)=>{n();var oT=Yp(),nT=Qp(),tT=om();function gt(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new oT;++o<t;)this.add(e[o])}gt.prototype.add=gt.prototype.push=nT;gt.prototype.has=tT;nm.exports=gt});var am=b((aO,rm)=>{n();function rT(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}rm.exports=rT});var sm=b((iO,im)=>{n();function aT(e){return e!==e}im.exports=aT});var pm=b((sO,cm)=>{n();function iT(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}cm.exports=iT});var dm=b((cO,mm)=>{n();var sT=am(),cT=sm(),pT=pm();function mT(e,o,t){return o===o?pT(e,o,t):sT(e,cT,t)}mm.exports=mT});var _m=b((pO,lm)=>{n();var dT=dm();function lT(e,o){var t=e==null?0:e.length;return!!t&&dT(e,o,0)>-1}lm.exports=lT});var gm=b((mO,um)=>{n();function _T(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}um.exports=_T});var hm=b((dO,fm)=>{n();function uT(e,o){return e.has(o)}fm.exports=uT});var xm=b((lO,Tm)=>{n();var gT=ut(),fT=on(),hT=gT(fT,"Set");Tm.exports=hT});var Sm=b((_O,ym)=>{n();function TT(){}ym.exports=TT});var Fr=b((uO,bm)=>{n();function xT(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}bm.exports=xT});var vm=b((gO,wm)=>{n();var Ur=xm(),yT=Sm(),ST=Fr(),bT=1/0,wT=Ur&&1/ST(new Ur([,-0]))[1]==bT?function(e){return new Ur(e)}:yT;wm.exports=wT});var Im=b((fO,Am)=>{n();var vT=tm(),AT=_m(),IT=gm(),kT=hm(),LT=vm(),ET=Fr(),PT=200;function NT(e,o,t){var r=-1,c=AT,p=e.length,m=!0,d=[],_=d;if(t)m=!1,c=IT;else if(p>=PT){var f=o?null:LT(e);if(f)return ET(f);m=!1,c=kT,_=new vT}else _=o?[]:d;e:for(;++r<p;){var x=e[r],y=o?o(x):x;if(x=t||x!==0?x:0,m&&y===y){for(var A=_.length;A--;)if(_[A]===y)continue e;o&&_.push(y),d.push(x)}else c(_,y,t)||(_!==d&&_.push(y),d.push(x))}return d}Am.exports=NT});var Lm=b((hO,km)=>{n();var CT=Im();function DT(e){return e&&e.length?CT(e):[]}km.exports=DT});var Pe={};K(Pe,{css:()=>Bm,default:()=>gx});var Bm,gx,Ne=h(()=>{"use strict";n();Bm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bm));gx={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var jr={};K(jr,{css:()=>Jm,default:()=>Ox});var Jm,Ox,Kr=h(()=>{"use strict";n();Jm=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jm));Ox={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var mn={};K(mn,{css:()=>cd,default:()=>Wx});var cd,Wx,dn=h(()=>{"use strict";n();cd=`.dapp-core-component__styles__transaction-action-collection {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(cd));Wx={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var Zr={};K(Zr,{css:()=>gd,default:()=>qx});var gd,qx,Yr=h(()=>{"use strict";n();gd=`.dapp-core-component__styles__group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gd));qx={group:"dapp-core-component__styles__group"}});var Qr={};K(Qr,{css:()=>fd,default:()=>jx});var fd,jx,ea=h(()=>{"use strict";n();fd=`.dapp-core-component__styles__address {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fd));jx={address:"dapp-core-component__styles__address",explorer:"dapp-core-component__styles__explorer",token:"dapp-core-component__styles__token",spaced:"dapp-core-component__styles__spaced",comma:"dapp-core-component__styles__comma"}});var Zx={};K(Zx,{ActionText:()=>Xx});module.exports=H(Zx);n();var D=g(require("react")),so=g(require("classnames"));n();var Rt=g(require("react")),rl=e=>Rt.createElement("svg",u({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"globe",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",className:"svg-inline--fa fa-globe fa-w-16 fa-5x"},e),Rt.createElement("path",{fill:"#6c757d",d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z",className:""})),Ia=rl;v();n();var Qa=g(require("react"));n();var Go=g(require("react"));n();ho();var Za=()=>!Xe();var sl=()=>T(void 0,null,function*(){return yield Promise.resolve().then(()=>(Gt(),Wt))}),cl=()=>(Gt(),H(Wt)).default,Ht=Za();function Ja({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=Go.default.useState(Ht?void 0:cl()),[p,m]=Go.default.useState(Ht||t==null?void 0:t()),d=()=>T(this,null,function*(){(e?e():sl()).then(_=>c(_.default)),o==null||o().then(_=>m(_.default))});return(0,Go.useEffect)(()=>{Ht&&d()},[]),{globalStyles:r,styles:p}}function L(e,o){return t=>{let{globalStyles:r,styles:c}=Ja({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Qa.default.createElement(e,w(u({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();n();var wr=g(require("react")),tc=require("@fortawesome/free-solid-svg-icons"),rc=require("@fortawesome/react-fontawesome"),ac=g(require("classnames"));n();n();var fs=require("react"),Ao=require("react-redux");n();var dr=require("@reduxjs/toolkit"),us=require("react-redux/lib/utils/Subscription");P();n();var Xi=g(require("lodash.throttle"));v();P();Zt();xo();To();var n_=[Sn],qn=!1,t_=(0,Xi.default)(()=>{Vo($o())},5e3),Zi=e=>o=>t=>{if(n_.includes(t.type))return o(t);let r=e.getState(),c=Ze.local.getItem(Oe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return Vo($o());let m=Date.now();return c-m<0&&!qn?setTimeout(()=>{qn=!0,e.dispatch(ui())},1e3):(qn&&(qn=!1),t_()),o(t)};n();n();function zn(){return typeof sessionStorage!="undefined"}var ds=zn()?(ns(),H(os)).default:(rs(),H(ts)).default,ls=zn()?(is(),H(as)).default:[],_s=zn()?(ms(),H(ps)).default:e=>e;jn();var I=(0,dr.configureStore)({reducer:ds,middleware:e=>e({serializableCheck:{ignoredActions:[...ls,Xt.type,An.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Zi)}),gs=(0,us.createSubscription)(I),dw=_s(I),lw=(0,dr.configureStore)({reducer:Ye});var I_={store:I,subscription:gs},lr=(0,fs.createContext)(I_),fw=(0,Ao.createStoreHook)(lr),j=(0,Ao.createDispatchHook)(lr),k=(0,Ao.createSelectorHook)(lr);n();n();P();n();var hs=g(require("lodash.isequal")),Kn=require("reselect"),S=(0,Kn.createSelectorCreator)(Kn.defaultMemoize,hs.default);var Te=e=>e.account,Je=S(Te,e=>e.address),Io=S(Te,Je,(e,o)=>o in e.accounts?e.accounts[o]:vn),k_=S(Te,Io,(e,o)=>{let c=e,{accounts:t}=c,r=ae(c,["accounts"]);return w(u({},r),{address:o.address,account:o})}),Sw=S(Io,e=>e.balance),L_=S(Io,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),bw=S(Te,e=>e.shard),E_=S(Te,e=>e.ledgerAccount),ww=S(Te,e=>e.walletConnectAccount),vw=S(Te,e=>e.isAccountLoading),Aw=S(Te,e=>e.accountLoadingError),P_=S(Te,e=>e.websocketEvent),N_=S(Te,e=>e.websocketBatchEvent);n();var Ts=e=>e.dappConfig,Lw=S(Ts,e=>e.shouldUseWebViewProvider);n();var ee=e=>e.loginInfo,C_=S(ee,e=>e.loginMethod),Xn=S(ee,Je,(e,o)=>Boolean(o)),Cw=S(ee,e=>e.walletConnectLogin),D_=S(ee,e=>e.ledgerLogin),R_=S(ee,e=>e.walletLogin),Dw=S(ee,e=>e.isLoginSessionInvalid),_r=S(ee,e=>e.tokenLogin),xs=S(ee,e=>e.logoutRoute),M_=S(ee,e=>e.isWalletConnectV2Initialized);n();var ys=e=>e.modals,Ow=S(ys,e=>e.txSubmittedModal),O_=S(ys,e=>e.notificationModal);n();var ie=e=>e.networkConfig,Zn=S(ie,e=>e.network.chainId),F_=S(ie,e=>e.network.roundDuration),Bw=S(ie,e=>e.network.walletConnectBridgeAddress),U_=S(ie,e=>e.network.walletConnectV2RelayAddress),B_=S(ie,e=>e.network.walletConnectV2ProjectId),W_=S(ie,e=>e.network.walletConnectV2Options),G_=S(ie,e=>e.network.walletConnectDeepLink),oe=S(ie,e=>e.network),Ss=S(oe,e=>e.apiAddress),bs=S(oe,e=>e.explorerAddress),ws=S(oe,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),H_=S(oe,e=>e.xAliasAddress),ur=S(oe,e=>e.egldLabel);n();var Yn=e=>e.signedMessageInfo,Hw=S(Yn,e=>e.isSigning),$w=S(Yn,e=>e.errorMessage),Vw=S(Yn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),qw=S(Yn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var vs=e=>e.toasts,$_=S(vs,e=>e.customToasts),As=S(vs,e=>e.transactionToasts);n();P();var Is={errorMessage:or,successMessage:nr,processingMessage:tr},ks=e=>e.transactionsInfo,V_=S(ks,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Is);n();n();var xe=require("@multiversx/sdk-core");v();n();var gr=require("@multiversx/sdk-core/out");n();n();function Jn(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Ls=e=>{let o=e!=null?e:"";return Jn(o)?gr.TransactionPayload.fromEncoded(o):new gr.TransactionPayload(o)};n();v();var Xo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Mt).some(t=>e.startsWith(t)):!1;function Qn(e){var r,c,p;let o=u({},e);Xo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new xe.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Ls(o.data),nonce:o.nonce.valueOf(),receiver:new xe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new xe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:xn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:yn,chainID:o.chainID.valueOf(),version:new xe.TransactionVersion((p=o.version)!=null?p:ja)}),o.options?{options:new xe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new xe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();v();n();n();n();var K_=require("@multiversx/sdk-core/out");n();v();n();var Zo=require("@multiversx/sdk-core");F();n();var Es=require("@multiversx/sdk-core");function X_(e){try{let o=new Es.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Qe(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&X_(e)}var Z_=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function et(e,o,t=""){if(!Qe(e))return!1;if(new Zo.Address(e).isContractAddress())return!0;let p=Ps({receiver:e,data:t});return p?new Zo.Address(p).isContractAddress()||Q_(e,o,t):!1}var Y_=e=>e.toLowerCase().match(/[0-9a-f]/g),J_=e=>e.length%2===0;function Q_(e,o,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=Z_.includes(c),_=p.every(f=>Y_(f)&&J_(f));return m&&d&&_}function Ps({receiver:e,data:o}){try{if(!o)return e;let t=Jn(o)?Zo.TransactionPayload.fromEncoded(o).toString():o,r=eu(t),c=t.split("@");return r>-1?c[r]:e}catch(t){console.log(t);return}}function eu(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var ou=require("@multiversx/sdk-core"),nu=g(require("bignumber.js"));N();n();n();n();var se="accounts";var ot="blocks",Ds="code",Rs="collections";var Ms="contracts";var Os="identities";var Fs="locked-accounts",Us="logs",Bs="miniblocks";var nt="nfts",Ws="nodes",fr="providers",Gs="roles",hr="sc-results";var eo="tokens";var ce="transactions";var ye={shard:e=>`/${ot}?shard=${e}`,receiverShard:e=>`/${ce}?receivershard=${e}`,senderShard:e=>`/${ce}?sendershard=${e}`,transactionDetails:e=>`/${ce}/${e}`,transactionDetailsScResults:e=>`/${ce}/${e}/${hr}`,transactionDetailsLogs:e=>`/${ce}/${e}/${Us}`,nodeDetails:e=>`/${Ws}/${e}`,accountDetails:e=>`/${se}/${e}`,accountDetailsContractCode:e=>`/${se}/${e}/${Ds}`,accountDetailsTokens:e=>`/${se}/${e}/${eo}`,accountDetailsNfts:e=>`/${se}/${e}/${nt}`,accountDetailsScResults:e=>`/${se}/${e}/${hr}`,accountDetailsContracts:e=>`/${se}/${e}/${Ms}`,identityDetails:e=>`/${Os}/${e}`,tokenDetails:e=>`/${eo}/${e}`,tokenDetailsAccounts:e=>`/${eo}/${e}/${se}`,tokenDetailsLockedAccounts:e=>`/${eo}/${e}/${Fs}`,tokenDetailsRoles:e=>`/${eo}/${e}/${Gs}`,collectionDetails:e=>`/${Rs}/${e}`,nftDetails:e=>`/${nt}/${e}`,providerDetails:e=>`/${fr}/${e}`,providerDetailsTransactions:e=>`/${fr}/${e}/${ce}`,miniblockDetails:e=>`/${Bs}/${e}`};n();n();n();n();Y();n();var Hs=!1;function au(e){Hs||(console.error(e),Hs=!0)}function Tr({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(au(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();Y();n();n();n();var iu=g(require("bignumber.js"));v();n();var qs=require("@multiversx/sdk-core"),Ue=g(require("bignumber.js"));v();n();var Vs=g(require("bignumber.js")),Yo=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let r=new Vs.default(t),c=o?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=c};n();function Le(e){return{if:function(o){return o?{then:t=>t instanceof Function?Le(t(e)):Le(t)}:{then:()=>Le(e)}},then:o=>o instanceof Function?Le(o(e)):Le(o),valueOf:function(){return e}}}Ue.default.config({ROUNDING_MODE:Ue.default.ROUND_FLOOR});function Se({input:e,decimals:o=q,digits:t=Ke,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!Yo(e,!1))throw new Error("Invalid input");let m=new Ue.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Le(d).then(()=>qs.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(_=>{let f=new Ue.default(_);if(f.isZero())return he;let x=f.toString(10),[y,A]=x.split("."),E=new Ue.default(A||0),W=Le(0).if(Boolean(A&&r)).then(()=>Math.max(A.length,t)).if(E.isZero()&&!r).then(0).if(Boolean(A&&!r)).then(()=>Math.min(A.length,t)).valueOf(),X=A&&t>=1&&t<=A.length&&E.isGreaterThan(0)&&new Ue.default(A.substring(0,t)).isZero(),me=f.toFormat(W);return Le(x).if(p).then(me).if(Boolean(X)).then(Re=>{let be=new Ue.default(y).isZero(),[C,co]=Re.split("."),po=new Array(t-1).fill(0),yt=[...po,0].join(""),St=[...po,1].join("");return be?c?`<${C}.${St}`:r?`${C}.${co}`:C:`${C}.${yt}`}).if(Boolean(!X&&A)).then(Re=>{let[be]=Re.split("."),C=A.substring(0,W);if(r){let co=t-C.length;if(co>0){let po=Array(co).fill(0).join("");return C=`${C}${po}`,`${be}.${C}`}return Re}return C?`${be}.${C}`:be}).valueOf()}).if(m).then(_=>`-${_}`).valueOf()}n();n();n();v();n();n();n();n();v();n();v();n();var su=require("@multiversx/sdk-core");v();n();var Jo=require("@multiversx/sdk-core"),mu=g(require("bignumber.js"));v();n();n();var cu=g(require("bignumber.js"));v();n();v();n();n();n();n();n();n();v();n();v();function ko({token:e,noValue:o,showLastNonZeroDecimal:t}){var f;let r=!o&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";r&&c&&(m=c?Se({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:t}):Number(e.value).toLocaleString("en"));let d=ye.nftDetails(String(e.identifier)),_=e.ticker===e.collection&&(f=e.identifier)!=null?f:e.ticker;return{badgeText:p,tokenFormattedAmount:r?m:null,tokenExplorerLink:d,tokenLinkText:_,token:e,noValue:o,showLastNonZeroDecimal:t}}n();v();function rt({token:e,noValue:o,showLastNonZeroDecimal:t}){var d;let r=Boolean(!o&&e.value),c=r?Se({input:e.value,decimals:(d=e.decimals)!=null?d:q,digits:2,showLastNonZeroDecimal:t,addCommas:!0}):null,p=ye.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:r,tokenLinkText:m,token:e,showLastNonZeroDecimal:t}}n();Y();var du=["reDelegateRewards","claimRewards","unBond"],lu=["wrapEgld","unwrapEgld"],_u=["unStake"],uu=["unDelegate"];n();n();n();v();n();var fu=g(require("bignumber.js"));n();n();Y();n();var Tu=g(require("bignumber.js"));n();n();n();n();var Su=g(require("bignumber.js"));F();n();n();n();n();N();n();var Au=require("@multiversx/sdk-web-wallet-provider");v();n();var wu=g(require("qs"));n();z();ho();n();ho();var d1={search:Xe()?window.location.search:"",removeParams:[]};n();n();n();V();n();Y();n();n();V();n();var Iu=g(require("linkifyjs"));n();v();n();var ku=g(require("bignumber.js"));n();F();n();n();N();n();N();n();n();n();Y();n();Y();n();var Lu=g(require("bignumber.js"));v();Y();n();Y();n();var Xs=require("react");F();n();n();Y();n();n();var Eu=require("@multiversx/sdk-core/out"),Pu=g(require("bignumber.js"));Y();n();F();n();n();F();var nE=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Zs=require("react");F();V();n();var Cu=require("react");Y();var mE=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];vo();n();var at=e=>e.transactions,Lo=S(at,e=>e.signedTransactions),Du=S(at,e=>e.signTransactionsError),Ys=S(at,e=>e.signTransactionsCancelMessage),it=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),Js=S(Lo,it(So)),Qs=S(Lo,it(bo)),ec=S(Lo,it(wo)),Ru=S(Lo,it(ar)),oc=S(at,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Qn(t)))||[]})}),Mu=S(Lo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var st=()=>k(ie);var Fu=_=>{var f=_,{page:e,text:o,className:t="dapp-explorer-link",children:r,globalStyles:c,customExplorerIcon:p,styles:m}=f,d=ae(f,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:x}}=st(),y=o!=null?o:wr.default.createElement(rc.FontAwesomeIcon,{icon:p!=null?p:tc.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),A=Tr({explorerAddress:String(x),to:e});return wr.default.createElement("a",u({href:A,target:"_blank",className:(0,ac.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},d),r!=null?r:y)},Ee=L(Fu,{ssrStyles:()=>Promise.resolve().then(()=>(br(),Sr)),clientStyles:()=>(br(),H(Sr)).default});n();n();var Be=g(require("react")),cc=g(require("classnames"));v();n();function ic(){return ur(I.getState())}var Bu=e=>{var t;let o=(t=e.styles)!=null?t:{};return Be.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Be.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},Wu=(e,o)=>{var E,W,X;let{value:t,showLastNonZeroDecimal:r=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:Ke,m=e.decimals!=null?e.decimals:q,d=(E=e.styles)!=null?E:{},_=(W=e.globalStyles)!=null?W:{},f=Se({input:t,decimals:m,digits:p,showLastNonZeroDecimal:r,addCommas:!0}),x=f.split("."),y=x.length===1,A=f!==he;if(p>0&&y&&A){let me="";for(let He=1;He<=p;He++)me=me+he;x.push(me)}return Be.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Be.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},x[0]),x.length>1&&Be.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",x[1]),c&&Be.default.createElement("span",{className:(0,cc.default)(d.symbol,e.token&&_.textMuted),"data-testid":"formatAmountSymbol"},` ${(X=e.token)!=null?X:o}`))},Gu=e=>{let{value:o}=e;return Yo(o)?Wu(e,e.egldLabel||""):Bu(e)},Hu=e=>{let o=e.egldLabel||ic(),t=w(u({},e),{egldLabel:o});return Be.default.createElement(Gu,u({},t))},oo=L(Hu,{ssrStyles:()=>Promise.resolve().then(()=>(Ar(),vr)),clientStyles:()=>(Ar(),H(vr)).default});n();n();var Xr=g(require("react")),od=g(require("classnames"));n();var B=g(require("react")),Qm=g(require("classnames"));v();n();n();var pc=require("react");n();P();n();n();n();n();n();n();n();n();var Vu=require("@multiversx/sdk-extension-provider"),qu=require("@multiversx/sdk-hw-provider"),zu=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),ju=require("@multiversx/sdk-opera-provider"),Ku=require("@multiversx/sdk-passkey-provider/out"),Xu=require("@multiversx/sdk-web-wallet-provider");v();Me();n();var Po=require("@multiversx/sdk-web-wallet-iframe-provider/out"),mc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");N();n();var pe=e=>`Unable to perform ${e}, Provider not initialized`,ct=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(pe("getAccount"))}setAccount(o){throw new Error(pe(`setAccount: ${o}`))}login(o){throw new Error(pe(`login with options: ${o}`))}logout(o){throw new Error(pe(`logout with options: ${o}`))}getAddress(){throw new Error(pe("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(pe(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(pe(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(pe(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(pe(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(pe(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(pe(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},dc=new ct;P();n();n();n();n();n();var lc=require("@lifeomic/axios-fetch"),Ir=g(require("axios")),kr=(0,lc.buildAxiosFetch)(Ir.default),Lr=(e,o)=>T(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Zu(e,o,t){return T(this,null,function*(){try{let r=yield kr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Lr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function Yu(e,o){return T(this,null,function*(){try{let t=yield kr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Lr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Ju(e,o,t){return T(this,null,function*(){try{let r=yield kr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Lr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var No=Ir.default.create();No.get=Yu;No.post=Zu;No.patch=Ju;n();n();var Qu=g(require("axios"));n();var eg=g(require("swr"));n();N();n();n();n();V();n();vo();n();n();n();var og=g(require("axios"));n();var tg=g(require("axios"));fo();n();v();n();var rg=g(require("axios"));n();var ig=g(require("axios"));n();n();var sg=g(require("axios"));n();var cg=g(require("axios"));n();n();P();N();n();n();n();n();V();n();M();F();n();P();n();var fc=require("@multiversx/sdk-core");F();z();n();vo();n();P();N();n();P();F();n();n();n();F();n();Tn();n();n();n();n();var dg=g(require("swr"));n();n();n();n();var hc=require("react");n();n();var lg=require("react"),_g=require("@multiversx/sdk-web-wallet-provider"),ug=require("@multiversx/sdk-web-wallet-provider"),gg=g(require("qs"));v();P();N();Ft();V();var fR=U();n();var $c=require("react"),Mr=require("@multiversx/sdk-core");n();v();Yt();n();n();n();n();n();n();n();n();n();n();fo();n();var xg=g(require("axios"));n();var Sg=g(require("axios"));n();fo();n();fo();n();n();n();n();var wg=require("@multiversx/sdk-opera-provider");n();var vg=require("@multiversx/sdk-extension-provider");n();Me();n();n();n();n();var Xg=g(Bc());n();var Qg=require("@multiversx/sdk-native-auth-client");n();var Hc=g(require("axios"));n();n();n();function Wc(e){return T(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Gc=(e,o,t,r=0)=>T(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Wc(o.delay)),yield Gc(e,o,t,r+1)):null}}),Dr=(e,o={retries:5,delay:500})=>(...t)=>T(void 0,null,function*(){return yield Gc(e,o,t)});var Zg=4;var F3=Dr((e,o,t)=>T(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield Hc.default.get(`${e}/${ot}?from=${Zg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();bn();n();n();V();var j3={origin:U().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var of=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var nf=require("@multiversx/sdk-passkey-provider/out");v();V();n();n();n();var pf=require("react"),mf=require("@multiversx/sdk-hw-provider");n();M();F();n();qo();xo();To();z();n();n();var Cm=require("react"),Dm=require("@multiversx/sdk-core"),YT=require("@multiversx/sdk-extension-provider"),JT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),QT=require("@multiversx/sdk-passkey-provider/out"),ex=g(Lm());v();n();n();n();n();n();n();n();n();n();n();var sn=g(require("react"));var DO=(0,sn.createContext)({}),RO=I.getState();n();var Pm=g(require("react"));n();var Br=g(require("react")),RT=g(require("axios"));n();n();Me();n();n();var WT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),GT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");M();n();M();P();F();n();n();P();n();z();n();P();F();n();n();var OT=require("@multiversx/sdk-core"),FT=g(require("bignumber.js"));v();n();var UT=g(require("bignumber.js"));v();P();N();z();V();n();var Nm=require("react"),qT=require("@multiversx/sdk-extension-provider"),zT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),jT=require("@multiversx/sdk-passkey-provider/out");Me();P();n();P();F();qo();V();n();ge();P();n();n();var nx=require("react");n();n();N();vo();n();var ht=require("react"),Rm=(e,o)=>{let[t,r]=(0,ht.useState)(e);return(0,ht.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var rx=require("react"),ax=require("@multiversx/sdk-extension-provider");ge();M();N();n();Ie();z();z();n();n();Me();F();n();var tx=require("react"),Mm=require("@multiversx/sdk-core");P();n();var ix=require("react"),sx=require("@multiversx/sdk-opera-provider");ge();M();N();Ie();z();V();n();var cx=require("react");Bt();ge();Me();M();P();N();Ie();V();n();var _x=require("react");ge();P();n();n();$t();n();n();var px=g(require("platform"));ho();n();n();n();n();n();n();Wo();N();n();n();var mx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();qo();xo();n();n();n();P();n();n();var dx=g(require("axios"));z();n();n();var lx=g(_t());Wo();var Om,Fm,Um,S4=(Um=(Fm=(Om=je.safeWindow)==null?void 0:Om.location)==null?void 0:Fm.origin)==null?void 0:Um.includes("localhost");n();V();n();n();var bx=require("react");v();n();n();v();n();n();n();var ux=g(require("bignumber.js"));n();n();n();var Ge=g(require("react")),qm=require("react"),zm=require("react"),Vr=g(require("classnames")),jm=require("react-dom");v();n();var Wm=g(require("react")),Gm=g(require("classnames"));var fx=({className:e,children:o,styles:t})=>Wm.default.createElement("div",{className:(0,Gm.default)(t==null?void 0:t.dappModalBody,e)},o),Wr=L(fx,{ssrStyles:()=>Promise.resolve().then(()=>(Ne(),Pe)),clientStyles:()=>(Ne(),H(Pe)).default});n();var Gr=g(require("react")),Hm=g(require("classnames"));var hx=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?Gr.default.createElement("div",{className:(0,Hm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Gr.default.createElement("div",null,r)):null,Hr=L(hx,{ssrStyles:()=>Promise.resolve().then(()=>(Ne(),Pe)),clientStyles:()=>(Ne(),H(Pe)).default});n();var Fo=g(require("react")),$m=require("@fortawesome/free-solid-svg-icons"),Vm=require("@fortawesome/react-fontawesome"),pn=g(require("classnames"));var Tx=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>e?t?Fo.default.createElement("div",{className:(0,pn.default)(_==null?void 0:_.dappModalHeader,r)},t):Fo.default.createElement("div",{className:(0,pn.default)(_==null?void 0:_.dappModalHeader,r)},Fo.default.createElement("div",{className:(0,pn.default)(_==null?void 0:_.dappModalHeaderText,p)},o),Fo.default.createElement("button",{onClick:m,className:(0,pn.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Fo.default.createElement(Vm.FontAwesomeIcon,{size:"lg",icon:$m.faTimes}))):null,$r=L(Tx,{ssrStyles:()=>Promise.resolve().then(()=>(Ne(),Pe)),clientStyles:()=>(Ne(),H(Pe)).default});var xx={showHeader:!0,showFooter:!1,headerText:"",footerText:""},yx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=xx,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:f})=>{let[x,y]=(0,qm.useState)(!1);if((0,zm.useEffect)(()=>{y(!0)},[]),!_)return null;let{showHeader:A,showFooter:E,headerText:W,footerText:X,modalDialogClassName:me="dapp-modal-dialog",modalContentClassName:He="dapp-modal-dialog-content",modalHeaderClassName:Re="dapp-modal-dialog-header",modalHeaderTextClassName:be="dapp-modal-dialog-header-text",modalCloseButtonClassName:C="dapp-modal-dialog-close-button",modalBodyClassName:co="dapp-modal-dialog-content-body",modalFooterClassName:po="dapp-modal-dialog-footer",customModalHeader:yt,customModalFooter:St}=c,hd=Td=>{Td.key==="Escape"&&r&&(m==null||m())};return Ge.default.createElement(Ge.default.Fragment,null,x&&(0,jm.createPortal)(Ge.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Vr.default)(me,f==null?void 0:f.dappModal,t),"data-testid":e,onKeyDown:hd},Ge.default.createElement("div",{className:(0,Vr.default)(f==null?void 0:f.dappModalContent,He)},Ge.default.createElement($r,{visible:A,headerText:W,customHeader:yt,className:Re,headerTextClassName:be,closeButtonClassName:C,onHide:m}),Ge.default.createElement(Wr,{className:co},o),Ge.default.createElement(Hr,{visible:E,customFooter:St,footerText:X,className:po}))),d!=null?d:document==null?void 0:document.body))},Sx=L(yx,{ssrStyles:()=>Promise.resolve().then(()=>(Ne(),Pe)),clientStyles:()=>(Ne(),H(Pe)).default});n();n();var Km=require("react");n();n();var Xm=require("react"),vx=require("@multiversx/sdk-hw-provider");ge();M();P();N();Ie();n();var wx=require("react");n();n();var qr=require("react");M();P();N();Ie();V();n();var Ix=require("react"),kx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ge();M();N();Ie();z();z();n();var Lx=require("react"),Ex=require("@multiversx/sdk-passkey-provider/out");ge();M();N();Ie();z();z();n();n();var Zm=require("react");n();var Cx=require("react");n();var zr=require("react"),Nx=require("socket.io-client");P();n();n();n();var Dx=require("react");F();n();n();n();var Mx=g(require("swr"));n();n();n();n();var Rx=g(require("axios"));n();var Fx=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,B.useState)(0),[d,_]=(0,B.useState)(!1),f=(0,B.useRef)(document==null?void 0:document.createElement("span")),x=(0,B.useRef)(document==null?void 0:document.createElement("span")),y=Rm(p,300),A=()=>{if(f.current&&x.current){let X=x.current.offsetWidth-f.current.offsetWidth;_(X>1)}},E=()=>{m(p+1)};return(0,B.useEffect)(()=>(window==null||window.addEventListener("resize",E),()=>{window==null||window.removeEventListener("resize",E)})),(0,B.useEffect)(()=>{A()},[y]),B.default.createElement("span",{ref:f,className:(0,Qm.default)(c==null?void 0:c.trim,r,o,{overflow:d}),"data-testid":t},B.default.createElement("span",{ref:x,className:c==null?void 0:c.hiddenTextRef},e),d?B.default.createElement(B.default.Fragment,null,B.default.createElement("span",{className:c==null?void 0:c.left},B.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),B.default.createElement("span",{className:c==null?void 0:c.ellipsis},Xa),B.default.createElement("span",{className:c==null?void 0:c.right},B.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):B.default.createElement("span",null,e))},ed=L(Fx,{ssrStyles:()=>Promise.resolve().then(()=>(Kr(),jr)),clientStyles:()=>(Kr(),H(jr)).default});var Ux=p=>{var m=p,{address:e,assets:o,color:t,globalStyles:r}=m,c=ae(m,["address","assets","color","globalStyles"]);if(o&&o.name){let d=o.name.replace(new RegExp("\\p{Emoji}","gu"),""),_=`${d} (${e})`;return Xr.default.createElement("span",w(u({className:(0,od.default)(r==null?void 0:r.textTruncate,{[`text-${t}`]:t})},c),{title:_}),d)}return Xr.default.createElement(ed,u({text:e,color:t},c))},nd=L(Ux,{});n();var td=g(require("react")),rd=require("@fortawesome/free-solid-svg-icons/faFileAlt"),ad=require("@fortawesome/react-fontawesome"),id=g(require("classnames"));v();var Bx=({initiator:e,secondInitiator:o,globalStyles:t})=>et(e)||et(o!=null?o:"")?td.default.createElement(ad.FontAwesomeIcon,{title:"Smart Contract",icon:rd.faFileAlt,className:(0,id.default)(t==null?void 0:t.mr1,t==null?void 0:t.textSecondary),"data-testid":"scIcon"}):null,sd=L(Bx,{});n();var ne=g(require("react"));n();n();var ln=g(require("react")),Tt=g(require("classnames"));var Gx=({token:e,globalStyles:o,styles:t})=>e.collection?ln.default.createElement(Ee,{page:ye.collectionDetails(e.collection),className:(0,Tt.default)(t==null?void 0:t.transactionActionCollection)},ln.default.createElement("div",{className:(0,Tt.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&ln.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,Tt.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),ln.default.createElement("span",null,e.ticker))):null,pd=L(Gx,{ssrStyles:()=>Promise.resolve().then(()=>(dn(),mn)),clientStyles:()=>(dn(),H(mn)).default});n();var Ce=g(require("react")),Uo=g(require("classnames"));v();n();var md=g(require("react")),dd=g(require("classnames"));var Hx=({text:e,className:o,"data-testid":t="nftBadge",globalStyles:r})=>md.default.createElement("div",{"data-testid":t,className:(0,dd.default)(r==null?void 0:r.badge,r==null?void 0:r.badgeSecondary,r==null?void 0:r.badgePill,r==null?void 0:r.fontWeightLight,o)},e),ld=L(Hx,{});var $x=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:t,tokenLinkText:r,token:c,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var _,f,x,y,A;return c.identifier?Ce.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&Ce.default.createElement(ld,{text:e,className:(0,Uo.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&Ce.default.createElement("div",{className:(0,Uo.default)(m==null?void 0:m.mr1,{[(_=m==null?void 0:m.textTruncate)!=null?_:""]:c.svgUrl})},Ce.default.createElement(oo,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Ce.default.createElement(Ee,{page:t,"data-testid":"nftExplorerLink",className:(0,Uo.default)(d==null?void 0:d.explorer,{[(f=m==null?void 0:m.sideLink)!=null?f:""]:c.svgUrl,[(x=m==null?void 0:m.dFlex)!=null?x:""]:c.svgUrl,[(y=m==null?void 0:m.textTruncate)!=null?y:""]:!c.svgUrl})},Ce.default.createElement("div",{className:d==null?void 0:d.data},c.svgUrl&&Ce.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,Uo.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),Ce.default.createElement("span",{className:(0,Uo.default)({[(A=d==null?void 0:d.truncate)!=null?A:""]:c.ticker===c.collection})},r)))):null},_d=L($x,{ssrStyles:()=>Promise.resolve().then(()=>(dn(),mn)),clientStyles:()=>(dn(),H(mn)).default});n();var De=g(require("react")),xt=g(require("classnames"));v();var Vx=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:t,token:r,showLastNonZeroDecimal:c,globalStyles:p})=>{var m,d;return r.token?De.default.createElement(De.default.Fragment,null,o&&De.default.createElement("div",{className:p==null?void 0:p.textTruncate},De.default.createElement(oo,{value:r.value,digits:2,showLabel:!1,decimals:(m=r.decimals)!=null?m:q,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),De.default.createElement(Ee,{page:e,"data-testid":"tokenExplorerLink",className:(0,xt.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:r.svgUrl})},De.default.createElement("div",{className:(0,xt.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},r.svgUrl&&De.default.createElement("img",{src:r.svgUrl,alt:r.name,className:(0,xt.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),De.default.createElement("span",null,t)))):null},ud=L(Vx,{});var io={Collection:pd,Nft:_d,Token:ud};var zx=({token:e,noValue:o,showLastNonZeroDecimal:t,globalStyles:r,styles:c})=>{if(["MetaESDT".toString(),"SemiFungibleESDT","NonFungibleESDT"].includes(e.type))switch(e.type){case"SemiFungibleESDT":{let m=ko({token:e,showLastNonZeroDecimal:t});return ne.default.createElement("div",{className:c==null?void 0:c.group},ne.default.createElement("span",{className:r==null?void 0:r.mr1},"SFT quantity"),ne.default.createElement(io.Nft,w(u({},m),{badgeText:null})),ne.default.createElement("span",{className:r==null?void 0:r.mr1},"of collection"),ne.default.createElement(io.Collection,{token:e}))}case"NonFungibleESDT":{let m=ko({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement("div",{className:c==null?void 0:c.group},ne.default.createElement("span",{className:r==null?void 0:r.mr1},"NFT"),ne.default.createElement(io.Nft,w(u({},m),{badgeText:null})),ne.default.createElement("span",{className:r==null?void 0:r.mr1},"of collection"),ne.default.createElement(io.Collection,{token:e}))}case"MetaESDT":{let m=ko({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement(io.Nft,w(u({},m),{badgeText:null}))}default:return null}else{let m=rt({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement(io.Token,w(u({},m),{showLastNonZeroDecimal:!0}))}},Jr=L(zx,{ssrStyles:()=>Promise.resolve().then(()=>(Yr(),Zr)),clientStyles:()=>(Yr(),H(Zr)).default});var Kx=({entry:e,transaction:o,globalStyles:t,styles:r})=>{if(typeof e=="string")return D.default.createElement("span",{className:t==null?void 0:t.mr1},e.replace("eGLD","EGLD"));if(Boolean(e.address)){let c;return e.address===o.sender&&(c=o.senderAssets),e.address===o.receiver&&(c=o.receiverAssets),Qe(e.address)?D.default.createElement("div",{className:r==null?void 0:r.address},D.default.createElement(sd,{initiator:e.address}),D.default.createElement(Ee,{page:ye.accountDetails(e.address),"data-testid":"receiverLink",className:r==null?void 0:r.explorer},D.default.createElement(nd,{address:e.address,assets:c}))):""}if(Boolean(e.token&&e.token.length>0))return e.token.map((c,p)=>{var m;return D.default.createElement("div",{key:`tx-${c.identifier}-${p}`,className:(0,so.default)(r==null?void 0:r.token,{[(m=r==null?void 0:r.spaced)!=null?m:""]:e.token.length>1})},D.default.createElement(Jr,{token:c,showLastNonZeroDecimal:!0}),p<e.token.length-1&&D.default.createElement("span",{className:r==null?void 0:r.comma},","))});if(Boolean(e.tokenNoValue&&e.tokenNoValue.length>0))return e.tokenNoValue.map((c,p)=>D.default.createElement("div",{key:`tx-${c.token}-${p}`},D.default.createElement(Jr,{token:c,noValue:!0,showLastNonZeroDecimal:!0}),p<e.tokenNoValue.length-1&&D.default.createElement("span",{className:(0,so.default)(t==null?void 0:t.mlN1,t==null?void 0:t.mr1,t==null?void 0:t.dNone,t==null?void 0:t.dSmFlex)},",")));if(Boolean(e.tokenNoLink&&e.tokenNoLink.length>0))return e.tokenNoLink.map((c,p)=>D.default.createElement("div",{key:`tx-${c.token}-${p}`},D.default.createElement("span",{className:t==null?void 0:t.mr1},c.ticker),p<e.tokenNoLink.length-1&&D.default.createElement("span",{className:(0,so.default)(t==null?void 0:t.mlN1,t==null?void 0:t.mr1,t==null?void 0:t.dNone,t==null?void 0:t.dSmFlex)},",")));if(Boolean(e.value))return D.default.createElement("span",null,D.default.createElement(oo,{value:e.value,showLabel:!1,showLastNonZeroDecimal:!0}));if(Boolean(e.egldValue))return D.default.createElement("span",null,D.default.createElement(oo,{value:e.egldValue,showLastNonZeroDecimal:!0}));if(Boolean(e.providerName)){let c=(0,so.default)(t==null?void 0:t.sideIcon,t==null?void 0:t.mr1,t==null?void 0:t.mrLg1,t==null?void 0:t.roundedCircle);return D.default.createElement("span",{className:(0,so.default)(t==null?void 0:t.dFlex,t==null?void 0:t.mr1)},D.default.createElement(Ee,{page:ye.providerDetails(o.receiver),className:(0,so.default)(t==null?void 0:t.dFlex,t==null?void 0:t.alignSelfCenter)},e.providerAvatar?D.default.createElement("img",{src:e.providerAvatar,className:c,alt:" "}):D.default.createElement(Ia,{className:c}),e.providerName))}return null},Xx=L(Kx,{ssrStyles:()=>Promise.resolve().then(()=>(ea(),Qr)),clientStyles:()=>(ea(),H(Qr)).default});0&&(module.exports={ActionText});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
