"use strict";var Nd=Object.create;var Wo=Object.defineProperty,Pd=Object.defineProperties,Cd=Object.getOwnPropertyDescriptor,Dd=Object.getOwnPropertyDescriptors,Rd=Object.getOwnPropertyNames,un=Object.getOwnPropertySymbols,Md=Object.getPrototypeOf,wt=Object.prototype.hasOwnProperty,aa=Object.prototype.propertyIsEnumerable;var ra=(e,o,t)=>o in e?Wo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))wt.call(o,t)&&ra(e,t,o[t]);if(un)for(var t of un(o))aa.call(o,t)&&ra(e,t,o[t]);return e},w=(e,o)=>Pd(e,Dd(o));var ae=(e,o)=>{var t={};for(var r in e)wt.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&un)for(var r of un(e))o.indexOf(r)<0&&aa.call(e,r)&&(t[r]=e[r]);return t};var h=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),z=(e,o)=>{for(var t in o)Wo(e,t,{get:o[t],enumerable:!0})},ia=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Rd(o))!wt.call(e,c)&&c!==t&&Wo(e,c,{get:()=>o[c],enumerable:!(r=Cd(o,c))||r.enumerable});return e};var f=(e,o,t)=>(t=e!=null?Nd(Md(e)):{},ia(o||!e||!e.__esModule?Wo(t,"default",{value:e,enumerable:!0}):t,e)),G=e=>ia(Wo({},"__esModule",{value:!0}),e);var y=(e,o,t)=>new Promise((r,c)=>{var p=l=>{try{d(t.next(l))}catch(g){c(g)}},m=l=>{try{d(t.throw(l))}catch(g){c(g)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var pa=b(gn=>{"use strict";n();gn.byteLength=Fd;gn.toByteArray=Bd;gn.fromByteArray=Hd;var le=[],te=[],Od=typeof Uint8Array!="undefined"?Uint8Array:Array,vt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for($e=0,sa=vt.length;$e<sa;++$e)le[$e]=vt[$e],te[vt.charCodeAt($e)]=$e;var $e,sa;te["-".charCodeAt(0)]=62;te["_".charCodeAt(0)]=63;function ca(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function Fd(e){var o=ca(e),t=o[0],r=o[1];return(t+r)*3/4-r}function Ud(e,o,t){return(o+t)*3/4-t}function Bd(e){var o,t=ca(e),r=t[0],c=t[1],p=new Od(Ud(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=te[e.charCodeAt(l)]<<18|te[e.charCodeAt(l+1)]<<12|te[e.charCodeAt(l+2)]<<6|te[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=te[e.charCodeAt(l)]<<2|te[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=te[e.charCodeAt(l)]<<10|te[e.charCodeAt(l+1)]<<4|te[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function Wd(e){return le[e>>18&63]+le[e>>12&63]+le[e>>6&63]+le[e&63]}function Gd(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(Wd(r));return c.join("")}function Hd(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,d=t-r;m<d;m+=p)c.push(Gd(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],c.push(le[o>>2]+le[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(le[o>>10]+le[o>>4&63]+le[o<<2&63]+"=")),c.join("")}});var ma=b(At=>{n();At.read=function(e,o,t,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,g=l>>1,T=-7,x=t?c-1:0,v=t?-1:1,E=e[o+x];for(x+=v,p=E&(1<<-T)-1,E>>=-T,T+=d;T>0;p=p*256+e[o+x],x+=v,T-=8);for(m=p&(1<<-T)-1,p>>=-T,T+=r;T>0;m=m*256+e[o+x],x+=v,T-=8);if(p===0)p=1-g;else{if(p===l)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-g}return(E?-1:1)*m*Math.pow(2,p-r)};At.write=function(e,o,t,r,c,p){var m,d,l,g=p*8-c-1,T=(1<<g)-1,x=T>>1,v=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:p-1,U=r?1:-1,q=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=T):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+x>=1?o+=v/l:o+=v*Math.pow(2,1-x),o*l>=2&&(m++,l/=2),m+x>=T?(d=0,m=T):m+x>=1?(d=(o*l-1)*Math.pow(2,c),m=m+x):(d=o*Math.pow(2,x-1)*Math.pow(2,c),m=0));c>=8;e[t+E]=d&255,E+=U,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+E]=m&255,E+=U,m/=256,g-=8);e[t+E-U]|=q*128}});var wa=b(_o=>{"use strict";n();var It=pa(),lo=ma(),da=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_o.Buffer=_;_o.SlowBuffer=Kd;_o.INSPECT_MAX_BYTES=50;var fn=2147483647;_o.kMaxLength=fn;_.TYPED_ARRAY_SUPPORT=$d();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function $d(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function we(e){if(e>fn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Nt(e)}return ua(e,o,t)}_.poolSize=8192;function ua(e,o,t){if(typeof e=="string")return qd(e,o);if(ArrayBuffer.isView(e))return zd(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(_e(e,ArrayBuffer)||e&&_e(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(_e(e,SharedArrayBuffer)||e&&_e(e.buffer,SharedArrayBuffer)))return Lt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,t);var c=jd(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return ua(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function ga(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Vd(e,o,t){return ga(e),e<=0?we(e):o!==void 0?typeof t=="string"?we(e).fill(o,t):we(e).fill(o):we(e)}_.alloc=function(e,o,t){return Vd(e,o,t)};function Nt(e){return ga(e),we(e<0?0:Pt(e)|0)}_.allocUnsafe=function(e){return Nt(e)};_.allocUnsafeSlow=function(e){return Nt(e)};function qd(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=fa(e,o)|0,r=we(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function kt(e){for(var o=e.length<0?0:Pt(e.length)|0,t=we(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function zd(e){if(_e(e,Uint8Array)){var o=new Uint8Array(e);return Lt(o.buffer,o.byteOffset,o.byteLength)}return kt(e)}function Lt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,_.prototype),r}function jd(e){if(_.isBuffer(e)){var o=Pt(e.length)|0,t=we(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Ct(e.length)?we(0):kt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return kt(e.data)}function Pt(e){if(e>=fn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+fn.toString(16)+" bytes");return e|0}function Kd(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(_e(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),_e(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=_.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(_e(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function fa(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||_e(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Et(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ba(e).length;default:if(c)return r?-1:Et(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=fa;function Xd(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return al(this,o,t);case"utf8":case"utf-8":return Ta(this,o,t);case"ascii":return tl(this,o,t);case"latin1":case"binary":return rl(this,o,t);case"base64":return ol(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return il(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function Ve(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ve(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ve(this,t,t+3),Ve(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ve(this,t,t+7),Ve(this,t+1,t+6),Ve(this,t+2,t+5),Ve(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ta(this,0,o):Xd.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=_o.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};da&&(_.prototype[da]=_.prototype.inspect);_.prototype.compare=function(o,t,r,c,p){if(_e(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-t,l=Math.min(m,d),g=this.slice(c,p),T=o.slice(t,r),x=0;x<l;++x)if(g[x]!==T[x]){m=g[x],d=T[x];break}return m<d?-1:d<m?1:0};function ha(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Ct(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:la(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):la(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function la(e,o,t,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(E,U){return p===1?E[U]:E.readUInt16BE(U*p)}var g;if(c){var T=-1;for(g=t;g<m;g++)if(l(e,g)===l(o,T===-1?0:g-T)){if(T===-1&&(T=g),g-T+1===d)return T*p}else T!==-1&&(g-=g-T),T=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var x=!0,v=0;v<d;v++)if(l(e,g+v)!==l(o,v)){x=!1;break}if(x)return g}return-1}_.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};_.prototype.indexOf=function(o,t,r){return ha(this,o,t,r,!0)};_.prototype.lastIndexOf=function(o,t,r){return ha(this,o,t,r,!1)};function Zd(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(Ct(d))return m;e[t+m]=d}return m}function Yd(e,o,t,r){return hn(Et(o,e.length-t),e,t,r)}function Jd(e,o,t,r){return hn(pl(o),e,t,r)}function Qd(e,o,t,r){return hn(ba(o),e,t,r)}function el(e,o,t,r){return hn(ml(o,e.length-t),e,t,r)}_.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return Zd(this,o,t,r);case"utf8":case"utf-8":return Yd(this,o,t,r);case"ascii":case"latin1":case"binary":return Jd(this,o,t,r);case"base64":return Qd(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return el(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ol(e,o,t){return o===0&&t===e.length?It.fromByteArray(e):It.fromByteArray(e.slice(o,t))}function Ta(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,g,T,x;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(x=(p&31)<<6|l&63,x>127&&(m=x));break;case 3:l=e[c+1],g=e[c+2],(l&192)===128&&(g&192)===128&&(x=(p&15)<<12|(l&63)<<6|g&63,x>2047&&(x<55296||x>57343)&&(m=x));break;case 4:l=e[c+1],g=e[c+2],T=e[c+3],(l&192)===128&&(g&192)===128&&(T&192)===128&&(x=(p&15)<<18|(l&63)<<12|(g&63)<<6|T&63,x>65535&&x<1114112&&(m=x))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return nl(r)}var _a=4096;function nl(e){var o=e.length;if(o<=_a)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=_a));return t}function tl(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function rl(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function al(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=dl[e[p]];return c}function il(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}_.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,_.prototype),c};function H(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||H(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||H(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||H(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||H(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||H(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||H(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||H(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};_.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||H(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||H(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||H(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||H(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||H(o,4,this.length),lo.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||H(o,4,this.length),lo.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||H(o,8,this.length),lo.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||H(o,8,this.length),lo.read(this,o,!1,52,8)};function Z(e,o,t,r,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;Z(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;Z(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);Z(this,o,t,r,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);Z(this,o,t,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||Z(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function xa(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ya(e,o,t,r,c){return o=+o,t=t>>>0,c||xa(e,o,t,4,34028234663852886e22,-34028234663852886e22),lo.write(e,o,t,r,23,4),t+4}_.prototype.writeFloatLE=function(o,t,r){return ya(this,o,t,!0,r)};_.prototype.writeFloatBE=function(o,t,r){return ya(this,o,t,!1,r)};function Sa(e,o,t,r,c){return o=+o,t=t>>>0,c||xa(e,o,t,8,17976931348623157e292,-17976931348623157e292),lo.write(e,o,t,r,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,r){return Sa(this,o,t,!0,r)};_.prototype.writeDoubleBE=function(o,t,r){return Sa(this,o,t,!1,r)};_.prototype.copy=function(o,t,r,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};_.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%l]}return this};var sl=/[^+/0-9A-Za-z-_]/g;function cl(e){if(e=e.split("=")[0],e=e.trim().replace(sl,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Et(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function pl(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function ml(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function ba(e){return It.toByteArray(cl(e))}function hn(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function _e(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Ct(e){return e!==e}var dl=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var La=b((ly,ka)=>{n();var O=ka.exports={},ue,ge;function Dt(){throw new Error("setTimeout has not been defined")}function Rt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ue=setTimeout:ue=Dt}catch(e){ue=Dt}try{typeof clearTimeout=="function"?ge=clearTimeout:ge=Rt}catch(e){ge=Rt}})();function va(e){if(ue===setTimeout)return setTimeout(e,0);if((ue===Dt||!ue)&&setTimeout)return ue=setTimeout,setTimeout(e,0);try{return ue(e,0)}catch(o){try{return ue.call(null,e,0)}catch(t){return ue.call(this,e,0)}}}function ll(e){if(ge===clearTimeout)return clearTimeout(e);if((ge===Rt||!ge)&&clearTimeout)return ge=clearTimeout,clearTimeout(e);try{return ge(e)}catch(o){try{return ge.call(null,e)}catch(t){return ge.call(this,e)}}}var ve=[],uo=!1,qe,Tn=-1;function _l(){!uo||!qe||(uo=!1,qe.length?ve=qe.concat(ve):Tn=-1,ve.length&&Aa())}function Aa(){if(!uo){var e=va(_l);uo=!0;for(var o=ve.length;o;){for(qe=ve,ve=[];++Tn<o;)qe&&qe[Tn].run();Tn=-1,o=ve.length}qe=null,uo=!1,ll(e)}}O.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ve.push(new Ia(e,o)),ve.length===1&&!uo&&va(Aa)};function Ia(e,o){this.fun=e,this.array=o}Ia.prototype.run=function(){this.fun.apply(null,this.array)};O.title="browser";O.browser=!0;O.env={};O.argv=[];O.version="";O.versions={};function Ae(){}O.on=Ae;O.addListener=Ae;O.once=Ae;O.off=Ae;O.removeListener=Ae;O.removeAllListeners=Ae;O.emit=Ae;O.prependListener=Ae;O.prependOnceListener=Ae;O.listeners=function(e){return[]};O.binding=function(e){throw new Error("process.binding is not supported")};O.cwd=function(){return"/"};O.chdir=function(e){throw new Error("process.chdir is not supported")};O.umask=function(){return 0}});var a,s,ul,i,n=h(()=>{a=f(wa()),s=f(La()),ul=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=ul});var Ea=h(()=>{"use strict";n()});var fe=h(()=>{"use strict";n()});var Na=h(()=>{"use strict";n()});var Mt,Pa=h(()=>{"use strict";n();Mt=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(Mt||{})});var Ca=h(()=>{"use strict";n()});var Ot=h(()=>{"use strict";n()});var Da=h(()=>{"use strict";n()});var Ft=h(()=>{"use strict";n()});var Ra=h(()=>{"use strict";n()});var Ma=h(()=>{"use strict";n()});var ze,go,Me=h(()=>{"use strict";n();ze=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),go=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Oa,vy,Fa,Ay,P=h(()=>{"use strict";n();Me();Oa=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Oa||{}),vy=u(u({},go.WindowProviderRequestEnums),Oa),Fa=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Fa||{}),Ay=u(u({},go.WindowProviderResponseEnums),Fa)});var Ua=h(()=>{"use strict";n()});var Ba=h(()=>{"use strict";n()});var Y=h(()=>{"use strict";n()});var Wa=h(()=>{"use strict";n()});var Ga=h(()=>{"use strict";n()});var Ha=h(()=>{"use strict";n()});var F=h(()=>{"use strict";n();Ft();Ra();Ma();P();Ua();Ba();Y();Wa();Ga();Ha()});var fo,$a,Hy,Va,$y,qa,Vy,qy,gl,ho=h(()=>{"use strict";n();F();fo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:$a,egldLabel:Hy}=fo["devnet"],{chainId:Va,egldLabel:$y}=fo["testnet"],{chainId:qa,egldLabel:Vy}=fo["mainnet"],qy={["devnet"]:$a,["testnet"]:Va,["mainnet"]:qa},gl={[$a]:"devnet",[Va]:"testnet",[qa]:"mainnet"}});var xn=h(()=>{"use strict";n()});var he,za=h(()=>{"use strict";n();he=require("@multiversx/sdk-web-wallet-provider")});var je,Go=h(()=>{"use strict";n();je=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ja,Ka,Ut,Yy,Jy,Bt=h(()=>{"use strict";n();Go();Ut=String((Ka=(ja=je.safeWindow)==null?void 0:ja.navigator)==null?void 0:Ka.userAgent),Yy=/^((?!chrome|android).)*safari/i.test(Ut),Jy=/firefox/i.test(Ut)&&/windows/i.test(Ut)});var yn,Sn,j,Ke,Xa,bn,Za,ie,Ya,A=h(()=>{"use strict";n();Ea();fe();Na();Pa();Ca();Ot();Da();ho();xn();za();Bt();yn=5e4,Sn=1e9,j=18,Ke=4,Xa=1,bn="logout",Za="login",ie="0",Ya="..."});var Xe,To=h(()=>{"use strict";n();Xe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Wt={};z(Wt,{css:()=>Qa,default:()=>fl});var Qa,fl,Gt=h(()=>{"use strict";n();Qa=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qa));fl={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var $o,vn=h(()=>{"use strict";n();$o=()=>Date.now()/1e3});var ci=h(()=>{"use strict";n()});var pi=h(()=>{"use strict";n()});var Vt=h(()=>{"use strict";n();vn();ci();pi()});var qt={};z(qt,{clear:()=>vl,getItem:()=>bl,localStorageKeys:()=>Oe,removeItem:()=>wl,setItem:()=>Sl});var Oe,An,Sl,bl,wl,vl,xo=h(()=>{"use strict";n();Vt();Oe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},An=typeof localStorage!="undefined",Sl=({key:e,data:o,expires:t})=>{!An||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},bl=e=>{if(!An)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:$o()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},wl=e=>{!An||localStorage.removeItem(String(e))},vl=()=>{!An||localStorage.clear()}});var zt={};z(zt,{clear:()=>_i,getItem:()=>di,removeItem:()=>li,setItem:()=>mi,storage:()=>Al});var mi,di,li,_i,Al,ui=h(()=>{"use strict";n();mi=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},di=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},li=e=>sessionStorage.removeItem(String(e)),_i=()=>sessionStorage.clear(),Al={setItem:mi,getItem:di,removeItem:li,clear:_i}});var Ze,yo=h(()=>{"use strict";n();xo();ui();Ze={session:zt,local:qt}});var jt,R,Q,M=h(()=>{"use strict";n();jt=require("@reduxjs/toolkit");A();R=(0,jt.createAction)(bn),Q=(0,jt.createAction)(Za,e=>({payload:e}))});var Xt,gi,fi,In,Kt,hi,kn,Il,Zt,r0,kl,Ll,a0,i0,s0,El,Nl,Ln,En=h(()=>{"use strict";n();Xt=require("@multiversx/sdk-core"),gi=require("@reduxjs/toolkit"),fi=require("redux-persist");A();yo();xo();M();In={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ie},Kt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":In},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},hi=(0,gi.createSlice)({name:"accountInfoSlice",initialState:Kt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new Xt.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:In},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(Ze.local.removeItem(Oe.loginExpiresAt),Kt)),e.addCase(Q,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new Xt.Address(r).hex()}),e.addCase(fi.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:Kt.accounts,o.publicKey=d})}}),{setAccount:kn,setAddress:Il,setAccountNonce:Zt,setAccountShard:r0,setLedgerAccount:kl,updateLedgerAccount:Ll,setWalletConnectAccount:a0,setIsAccountLoading:i0,setAccountLoadingError:s0,setWebsocketEvent:El,setWebsocketBatchEvent:Nl}=hi.actions,Ln=hi.reducer});function Vo(){return new Date().setHours(new Date().getHours()+24)}function qo(e){Ze.local.setItem({key:Oe.loginExpiresAt,data:e,expires:e})}var Yt=h(()=>{"use strict";n();yo();xo()});var xi,Ti,yi,h0,Pl,Cl,Si,T0,Dl,bi,x0,y0,S0,Nn,Pn=h(()=>{"use strict";n();xi=require("@reduxjs/toolkit");Yt();P();M();Ti={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},yi=(0,xi.createSlice)({name:"loginInfoSlice",initialState:Ti,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>Ti),e.addCase(Q,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,qo(Vo())})}}),{setLoginMethod:h0,setWalletConnectLogin:Pl,setLedgerLogin:Cl,setTokenLogin:Si,setTokenLoginSignature:T0,setWalletLogin:Dl,invalidateLoginSession:bi,setLogoutRoute:x0,setIsWalletConnectV2Initialized:y0,setWebviewLogin:S0}=yi.actions,Nn=yi.reducer});var vi,wi,Ai,A0,Rl,I0,Ml,Cn,Dn=h(()=>{"use strict";n();vi=require("@reduxjs/toolkit");M();wi={},Ai=(0,vi.createSlice)({name:"modalsSlice",initialState:wi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>wi)}}),{setTxSubmittedModal:A0,setNotificationModal:Rl,clearTxSubmittedModal:I0,clearNotificationModal:Ml}=Ai.actions,Cn=Ai.reducer});var B,V=h(()=>{"use strict";n();To();B=()=>{if(!Xe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var Ii=h(()=>{"use strict";n();V()});var ki=h(()=>{"use strict";n();K()});var Li=h(()=>{"use strict";n();Go()});var K=h(()=>{"use strict";n();Ii();ki();V();Li()});var zo=h(()=>{"use strict";n();K()});var Ni=h(()=>{"use strict";n();zo()});function Pi(e){return e[Math.floor(Math.random()*e.length)]}var Ci=h(()=>{"use strict";n()});var Jt=h(()=>{"use strict";n();Ot()});var Ie=h(()=>{"use strict";n();Ni();Ci();Jt()});var Di,Ri,Mi,Qt,Fl,Oi,rb,ab,Ul,Rn,Mn=h(()=>{"use strict";n();Di=require("@reduxjs/toolkit"),Ri=f(require("lodash.omit")),Mi=require("redux-persist");xn();M();Ie();Qt={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Fl={network:Qt},Oi=(0,Di.createSlice)({name:"appConfig",initialState:Fl,reducers:{initializeNetworkConfig:(e,o)=>{let t=Pi(o.payload.walletConnectV2RelayAddresses),r=(0,Ri.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(Mi.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:rb,updateNetworkConfig:ab,setCustomWalletAddress:Ul}=Oi.actions,Rn=Oi.reducer});var Fi,er,Ui,db,lb,_b,On,Fn=h(()=>{"use strict";n();Fi=require("@reduxjs/toolkit");F();M();er={isSigning:!1,signedSessions:{}},Ui=(0,Fi.createSlice)({name:"signedMessageInfoSliceState",initialState:er,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>er},extraReducers:e=>{e.addCase(R,()=>er)}}),{setSignSession:db,clearSignedMessageInfo:lb,setSignSessionState:_b}=Ui.actions,On=Ui.reducer});var Wi,Gi,Bi,Hi,Bl,Wl,yb,Gl,Un,Bn=h(()=>{"use strict";n();Wi=require("@reduxjs/toolkit"),Gi=require("redux-persist");F();vn();M();Bi={customToasts:[],transactionToasts:[]},Hi=(0,Wi.createSlice)({name:"toastsSlice",initialState:Bi,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=w(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:$o(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>Bi),e.addCase(Gi.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Bl,removeCustomToast:Wl,addTransactionToast:yb,removeTransactionToast:Gl}=Hi.actions,Un=Hi.reducer});var $i,nr,tr,rr,Hl,or,Vi,vb,$l,ar,Wn,Gn=h(()=>{"use strict";n();$i=require("@reduxjs/toolkit");M();nr="Transaction failed",tr="Transaction successful",rr="Processing transaction",Hl="Transaction submitted",or={},Vi=(0,$i.createSlice)({name:"transactionsInfo",initialState:or,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||nr,successMessage:(r==null?void 0:r.successMessage)||tr,processingMessage:(r==null?void 0:r.processingMessage)||rr,submittedMessage:(r==null?void 0:r.submittedMessage)||Hl,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>or},extraReducers:e=>{e.addCase(R,()=>or)}}),{clearTransactionsInfo:vb,setTransactionsDisplayInfo:$l,clearTransactionsInfoForSessionId:ar}=Vi.actions,Wn=Vi.reducer});function bo(e){return e!=null&&(Ql(e)||r_(e))}function wo(e){return e!=null&&(e_(e)||a_(e))}function vo(e){return e!=null&&(o_(e)||i_(e))}function qi(e){return e!=null&&(n_(e)||s_(e))}function ir(e){return e!=null&&t_(e)}function Ql(e){return e!=null&&Vl.includes(e)}function e_(e){return e!=null&&ql.includes(e)}function o_(e){return e!=null&&zl.includes(e)}function n_(e){return e!=null&&jl.includes(e)}function t_(e){return e!=null&&Kl.includes(e)}function r_(e){return e!=null&&Xl.includes(e)}function a_(e){return e!=null&&Zl.includes(e)}function i_(e){return e!=null&&Yl.includes(e)}function s_(e){return e!=null&&Jl.includes(e)}var Vl,ql,zl,jl,Kl,Xl,Zl,Yl,Jl,Ao=h(()=>{"use strict";n();P();Vl=["sent"],ql=["success"],zl=["fail","cancelled","timedOut"],jl=["invalid"],Kl=["timedOut"],Xl=["pending"],Zl=["success"],Yl=["fail","invalid"],Jl=["not executed"]});var zi,ji,jo,c_,Ki,Xi,Zi,p_,Hn,m_,d_,Db,l_,Ko,sr,Rb,$n,Vn=h(()=>{"use strict";n();zi=require("@reduxjs/toolkit"),ji=require("redux-persist");P();Ao();M();jo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},c_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},Ki=(0,zi.createSlice)({name:"transactionsSlice",initialState:jo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,g;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},c_),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=jo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,T,x,v,E,U,q,de;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(T=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:T.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(C=>C.hash===p?w(u(u({},m!=null?m:{}),C),{status:r,errorMessage:c,inTransit:d}):C);let He=(v=(x=e.signedTransactions[t])==null?void 0:x.transactions)==null?void 0:v.every(C=>wo(C.status)),Re=(U=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:U.some(C=>vo(C.status)),be=(de=(q=e.signedTransactions[t])==null?void 0:q.transactions)==null?void 0:de.every(C=>qi(C.status));He&&(e.signedTransactions[t].status="success"),Re&&(e.signedTransactions[t].status="fail"),be&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=jo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=jo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(R,()=>jo),e.addCase(ji.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((d,[l,g])=>{let T=new Date(l),x=new Date;return x.setHours(x.getHours()+5),x-T>0||(d[l]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Xi,updateSignedTransactions:Zi,setTransactionsToSign:p_,clearAllTransactionsToSign:Hn,clearAllSignedTransactions:m_,clearSignedTransaction:d_,clearTransactionToSign:Db,setSignTransactionsError:l_,setSignTransactionsCancelMessage:Ko,moveTransactionsToSignedState:sr,updateSignedTransactionsCustomTransactionInformation:Rb}=Ki.actions,$n=Ki.reducer});var Yi,cr,Ji,Ub,Bb,__,Wb,qn,zn=h(()=>{"use strict";n();Yi=require("@reduxjs/toolkit");M();cr={},Ji=(0,Yi.createSlice)({name:"batchTransactionsSlice",initialState:cr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>cr},extraReducers:e=>{e.addCase(R,()=>cr)}}),{setBatchTransactions:Ub,updateBatchTransactions:Bb,clearBatchTransactions:__,clearAllBatchTransactions:Wb}=Ji.actions,qn=Ji.reducer});var es,Qi,os,Vb,ns,pr=h(()=>{"use strict";n();es=require("@reduxjs/toolkit");M();Qi={},os=(0,es.createSlice)({name:"dappConfigSlice",initialState:Qi,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>Qi)}}),{setDappConfig:Vb}=os.actions,ns=os.reducer});var N=h(()=>{"use strict";n();En();Pn();Dn();Mn();Fn();Bn();Gn();Vn();zn();pr()});var mr=h(()=>{"use strict";n()});var as,h_,T_,Ye,Xn=h(()=>{"use strict";n();as=require("@reduxjs/toolkit");mr();En();zn();pr();Pn();Dn();Mn();Fn();Bn();Gn();Vn();h_={["account"]:Ln,["dappConfig"]:ns,["loginInfo"]:Nn,["modals"]:Cn,["networkConfig"]:Rn,["signedMessageInfo"]:On,["toasts"]:Un,["transactionsInfo"]:Wn,["transactions"]:$n,["batchTransactions"]:qn},T_=(e={})=>(0,as.combineReducers)(u(u({},h_),e)),Ye=T_});var ps={};z(ps,{default:()=>R_,sessionStorageReducers:()=>dr});function ke(e,o=[]){return{key:e,version:1,storage:ss.default,blacklist:o}}var J,is,ss,x_,Xo,y_,S_,b_,w_,v_,A_,I_,k_,L_,E_,cs,N_,dr,P_,C_,D_,R_,ms=h(()=>{"use strict";n();J=require("redux-persist"),is=f(require("redux-persist/lib/storage")),ss=f(require("redux-persist/lib/storage/session"));Xn();N();En();zn();Pn();Dn();Mn();Fn();Bn();Gn();Vn();mr();x_={persistReducersStorageType:"localStorage"},Xo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},y_=ke(Xo["account"]),S_=ke(Xo["loginInfo"]),b_=ke(Xo["modals"]),w_=ke(Xo["networkConfig"]),v_={2:e=>w(u({},e),{networkConfig:Qt})};A_=ke("sdk-dapp-transactionsInfo"),I_=ke("sdk-dapp-transactions",["transactionsToSign"]),k_=ke("sdk-dapp-batchTransactions",["batchTransactions"]),L_=ke("sdk-dapp-toasts"),E_=ke("sdk-dapp-signedMessageInfo"),cs={key:"sdk-dapp-store",version:2,storage:is.default,whitelist:Object.keys(Xo),migrate:(0,J.createMigrate)(v_,{debug:!1})},N_=w(u({},cs),{whitelist:[]}),dr={["toasts"]:(0,J.persistReducer)(L_,Un),["transactions"]:(0,J.persistReducer)(I_,$n),["transactionsInfo"]:(0,J.persistReducer)(A_,Wn),["batchTransactions"]:(0,J.persistReducer)(k_,qn),["signedMessageInfo"]:(0,J.persistReducer)(E_,On)},P_=w(u({},dr),{["account"]:(0,J.persistReducer)(y_,Ln),["loginInfo"]:(0,J.persistReducer)(S_,Nn),["modals"]:(0,J.persistReducer)(b_,Cn),["networkConfig"]:(0,J.persistReducer)(w_,Rn)}),C_=x_.persistReducersStorageType==="localStorage",D_=C_?(0,J.persistReducer)(cs,Ye(dr)):(0,J.persistReducer)(N_,Ye(P_)),R_=D_});var ds={};z(ds,{default:()=>M_});var M_,ls=h(()=>{"use strict";n();Xn();M_=Ye()});var _s={};z(_s,{default:()=>F_});var re,O_,F_,us=h(()=>{"use strict";n();re=require("redux-persist"),O_=[re.FLUSH,re.REHYDRATE,re.PAUSE,re.PERSIST,re.PURGE,re.REGISTER],F_=O_});var hs={};z(hs,{default:()=>fs});function fs(e){return(0,gs.persistStore)(e)}var gs,Ts=h(()=>{"use strict";n();gs=require("redux-persist")});var br={};z(br,{css:()=>mc,default:()=>zu});var mc,zu,wr=h(()=>{"use strict";n();mc=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mc));zu={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var Ar={};z(Ar,{css:()=>gc,default:()=>Ku});var gc,Ku,Ir=h(()=>{"use strict";n();gc=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gc));Ku={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var Nc=b((A3,Ec)=>{n();var Mg=typeof i=="object"&&i&&i.Object===Object&&i;Ec.exports=Mg});var nn=b((I3,Pc)=>{n();var Og=Nc(),Fg=typeof self=="object"&&self&&self.Object===Object&&self,Ug=Og||Fg||Function("return this")();Pc.exports=Ug});var Cr=b((k3,Cc)=>{n();var Bg=nn(),Wg=Bg.Symbol;Cc.exports=Wg});var Oc=b((L3,Mc)=>{n();var Dc=Cr(),Rc=Object.prototype,Gg=Rc.hasOwnProperty,Hg=Rc.toString,tn=Dc?Dc.toStringTag:void 0;function $g(e){var o=Gg.call(e,tn),t=e[tn];try{e[tn]=void 0;var r=!0}catch(p){}var c=Hg.call(e);return r&&(o?e[tn]=t:delete e[tn]),c}Mc.exports=$g});var Uc=b((E3,Fc)=>{n();var Vg=Object.prototype,qg=Vg.toString;function zg(e){return qg.call(e)}Fc.exports=zg});var Dr=b((N3,Gc)=>{n();var Bc=Cr(),jg=Oc(),Kg=Uc(),Xg="[object Null]",Zg="[object Undefined]",Wc=Bc?Bc.toStringTag:void 0;function Yg(e){return e==null?e===void 0?Zg:Xg:Wc&&Wc in Object(e)?jg(e):Kg(e)}Gc.exports=Yg});var $c=b((P3,Hc)=>{n();var Jg=Array.isArray;Hc.exports=Jg});var qc=b((C3,Vc)=>{n();function Qg(e){return e!=null&&typeof e=="object"}Vc.exports=Qg});var jc=b((D3,zc)=>{n();var ef=Dr(),of=$c(),nf=qc(),tf="[object String]";function rf(e){return typeof e=="string"||!of(e)&&nf(e)&&ef(e)==tf}zc.exports=rf});var ut=b((C5,Jc)=>{n();function vf(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Jc.exports=vf});var ep=b((D5,Qc)=>{n();var Af=Dr(),If=ut(),kf="[object AsyncFunction]",Lf="[object Function]",Ef="[object GeneratorFunction]",Nf="[object Proxy]";function Pf(e){if(!If(e))return!1;var o=Af(e);return o==Lf||o==Ef||o==kf||o==Nf}Qc.exports=Pf});var np=b((R5,op)=>{n();var Cf=nn(),Df=Cf["__core-js_shared__"];op.exports=Df});var ap=b((M5,rp)=>{n();var Fr=np(),tp=function(){var e=/[^.]+$/.exec(Fr&&Fr.keys&&Fr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Rf(e){return!!tp&&tp in e}rp.exports=Rf});var sp=b((O5,ip)=>{n();var Mf=Function.prototype,Of=Mf.toString;function Ff(e){if(e!=null){try{return Of.call(e)}catch(o){}try{return e+""}catch(o){}}return""}ip.exports=Ff});var pp=b((F5,cp)=>{n();var Uf=ep(),Bf=ap(),Wf=ut(),Gf=sp(),Hf=/[\\^$.*+?()[\]{}|]/g,$f=/^\[object .+?Constructor\]$/,Vf=Function.prototype,qf=Object.prototype,zf=Vf.toString,jf=qf.hasOwnProperty,Kf=RegExp("^"+zf.call(jf).replace(Hf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xf(e){if(!Wf(e)||Bf(e))return!1;var o=Uf(e)?Kf:$f;return o.test(Gf(e))}cp.exports=Xf});var dp=b((U5,mp)=>{n();function Zf(e,o){return e==null?void 0:e[o]}mp.exports=Zf});var gt=b((B5,lp)=>{n();var Yf=pp(),Jf=dp();function Qf(e,o){var t=Jf(e,o);return Yf(t)?t:void 0}lp.exports=Qf});var rn=b((W5,_p)=>{n();var eh=gt(),oh=eh(Object,"create");_p.exports=oh});var fp=b((G5,gp)=>{n();var up=rn();function nh(){this.__data__=up?up(null):{},this.size=0}gp.exports=nh});var Tp=b((H5,hp)=>{n();function th(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}hp.exports=th});var yp=b(($5,xp)=>{n();var rh=rn(),ah="__lodash_hash_undefined__",ih=Object.prototype,sh=ih.hasOwnProperty;function ch(e){var o=this.__data__;if(rh){var t=o[e];return t===ah?void 0:t}return sh.call(o,e)?o[e]:void 0}xp.exports=ch});var bp=b((V5,Sp)=>{n();var ph=rn(),mh=Object.prototype,dh=mh.hasOwnProperty;function lh(e){var o=this.__data__;return ph?o[e]!==void 0:dh.call(o,e)}Sp.exports=lh});var vp=b((q5,wp)=>{n();var _h=rn(),uh="__lodash_hash_undefined__";function gh(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=_h&&o===void 0?uh:o,this}wp.exports=gh});var Ip=b((z5,Ap)=>{n();var fh=fp(),hh=Tp(),Th=yp(),xh=bp(),yh=vp();function Co(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Co.prototype.clear=fh;Co.prototype.delete=hh;Co.prototype.get=Th;Co.prototype.has=xh;Co.prototype.set=yh;Ap.exports=Co});var Lp=b((j5,kp)=>{n();function Sh(){this.__data__=[],this.size=0}kp.exports=Sh});var Np=b((K5,Ep)=>{n();function bh(e,o){return e===o||e!==e&&o!==o}Ep.exports=bh});var an=b((X5,Pp)=>{n();var wh=Np();function vh(e,o){for(var t=e.length;t--;)if(wh(e[t][0],o))return t;return-1}Pp.exports=vh});var Dp=b((Z5,Cp)=>{n();var Ah=an(),Ih=Array.prototype,kh=Ih.splice;function Lh(e){var o=this.__data__,t=Ah(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():kh.call(o,t,1),--this.size,!0}Cp.exports=Lh});var Mp=b((Y5,Rp)=>{n();var Eh=an();function Nh(e){var o=this.__data__,t=Eh(o,e);return t<0?void 0:o[t][1]}Rp.exports=Nh});var Fp=b((J5,Op)=>{n();var Ph=an();function Ch(e){return Ph(this.__data__,e)>-1}Op.exports=Ch});var Bp=b((Q5,Up)=>{n();var Dh=an();function Rh(e,o){var t=this.__data__,r=Dh(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}Up.exports=Rh});var Gp=b((eO,Wp)=>{n();var Mh=Lp(),Oh=Dp(),Fh=Mp(),Uh=Fp(),Bh=Bp();function Do(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Do.prototype.clear=Mh;Do.prototype.delete=Oh;Do.prototype.get=Fh;Do.prototype.has=Uh;Do.prototype.set=Bh;Wp.exports=Do});var $p=b((oO,Hp)=>{n();var Wh=gt(),Gh=nn(),Hh=Wh(Gh,"Map");Hp.exports=Hh});var zp=b((nO,qp)=>{n();var Vp=Ip(),$h=Gp(),Vh=$p();function qh(){this.size=0,this.__data__={hash:new Vp,map:new(Vh||$h),string:new Vp}}qp.exports=qh});var Kp=b((tO,jp)=>{n();function zh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}jp.exports=zh});var sn=b((rO,Xp)=>{n();var jh=Kp();function Kh(e,o){var t=e.__data__;return jh(o)?t[typeof o=="string"?"string":"hash"]:t.map}Xp.exports=Kh});var Yp=b((aO,Zp)=>{n();var Xh=sn();function Zh(e){var o=Xh(this,e).delete(e);return this.size-=o?1:0,o}Zp.exports=Zh});var Qp=b((iO,Jp)=>{n();var Yh=sn();function Jh(e){return Yh(this,e).get(e)}Jp.exports=Jh});var om=b((sO,em)=>{n();var Qh=sn();function eT(e){return Qh(this,e).has(e)}em.exports=eT});var tm=b((cO,nm)=>{n();var oT=sn();function nT(e,o){var t=oT(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}nm.exports=nT});var am=b((pO,rm)=>{n();var tT=zp(),rT=Yp(),aT=Qp(),iT=om(),sT=tm();function Ro(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Ro.prototype.clear=tT;Ro.prototype.delete=rT;Ro.prototype.get=aT;Ro.prototype.has=iT;Ro.prototype.set=sT;rm.exports=Ro});var sm=b((mO,im)=>{n();var cT="__lodash_hash_undefined__";function pT(e){return this.__data__.set(e,cT),this}im.exports=pT});var pm=b((dO,cm)=>{n();function mT(e){return this.__data__.has(e)}cm.exports=mT});var dm=b((lO,mm)=>{n();var dT=am(),lT=sm(),_T=pm();function ft(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new dT;++o<t;)this.add(e[o])}ft.prototype.add=ft.prototype.push=lT;ft.prototype.has=_T;mm.exports=ft});var _m=b((_O,lm)=>{n();function uT(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}lm.exports=uT});var gm=b((uO,um)=>{n();function gT(e){return e!==e}um.exports=gT});var hm=b((gO,fm)=>{n();function fT(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}fm.exports=fT});var xm=b((fO,Tm)=>{n();var hT=_m(),TT=gm(),xT=hm();function yT(e,o,t){return o===o?xT(e,o,t):hT(e,TT,t)}Tm.exports=yT});var Sm=b((hO,ym)=>{n();var ST=xm();function bT(e,o){var t=e==null?0:e.length;return!!t&&ST(e,o,0)>-1}ym.exports=bT});var wm=b((TO,bm)=>{n();function wT(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}bm.exports=wT});var Am=b((xO,vm)=>{n();function vT(e,o){return e.has(o)}vm.exports=vT});var km=b((yO,Im)=>{n();var AT=gt(),IT=nn(),kT=AT(IT,"Set");Im.exports=kT});var Em=b((SO,Lm)=>{n();function LT(){}Lm.exports=LT});var Ur=b((bO,Nm)=>{n();function ET(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}Nm.exports=ET});var Cm=b((wO,Pm)=>{n();var Br=km(),NT=Em(),PT=Ur(),CT=1/0,DT=Br&&1/PT(new Br([,-0]))[1]==CT?function(e){return new Br(e)}:NT;Pm.exports=DT});var Rm=b((vO,Dm)=>{n();var RT=dm(),MT=Sm(),OT=wm(),FT=Am(),UT=Cm(),BT=Ur(),WT=200;function GT(e,o,t){var r=-1,c=MT,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=OT;else if(p>=WT){var g=o?null:UT(e);if(g)return BT(g);m=!1,c=FT,l=new RT}else l=o?[]:d;e:for(;++r<p;){var T=e[r],x=o?o(T):T;if(T=t||T!==0?T:0,m&&x===x){for(var v=l.length;v--;)if(l[v]===x)continue e;o&&l.push(x),d.push(T)}else c(l,x,t)||(l!==d&&l.push(x),d.push(T))}return d}Dm.exports=GT});var Om=b((AO,Mm)=>{n();var HT=Rm();function $T(e){return e&&e.length?HT(e):[]}Mm.exports=$T});var Ne={};z(Ne,{css:()=>jm,default:()=>Ax});var jm,Ax,Pe=h(()=>{"use strict";n();jm=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jm));Ax={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Kr={};z(Kr,{css:()=>id,default:()=>zx});var id,zx,Xr=h(()=>{"use strict";n();id=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(id));zx={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var dn={};z(dn,{css:()=>fd,default:()=>Zx});var fd,Zx,ln=h(()=>{"use strict";n();fd=`.dapp-core-component__styles__transaction-action-collection {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fd));Zx={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var Yr={};z(Yr,{css:()=>wd,default:()=>oy});var wd,oy,Jr=h(()=>{"use strict";n();wd=`.dapp-core-component__styles__group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(wd));oy={group:"dapp-core-component__styles__group"}});var ea={};z(ea,{css:()=>vd,default:()=>ty});var vd,ty,oa=h(()=>{"use strict";n();vd=`.dapp-core-component__styles__address {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vd));ty={address:"dapp-core-component__styles__address",explorer:"dapp-core-component__styles__explorer",token:"dapp-core-component__styles__token",spaced:"dapp-core-component__styles__spaced",comma:"dapp-core-component__styles__comma"}});var na={};z(na,{css:()=>Id,default:()=>ay});var Id,ay,ta=h(()=>{"use strict";n();Id=`.dapp-core-component__styles__action {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Id));ay={action:"dapp-core-component__styles__action",result:"dapp-core-component__styles__result"}});var sy={};z(sy,{TransactionAction:()=>iy,TransactionActionComponent:()=>kd});module.exports=G(sy);n();n();var Bo=f(require("react"));A();n();var oi=f(require("react"));n();var Ho=f(require("react"));n();To();var Ja=()=>!Xe();var hl=()=>y(void 0,null,function*(){return yield Promise.resolve().then(()=>(Gt(),Wt))}),Tl=()=>(Gt(),G(Wt)).default,Ht=Ja();function ei({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=Ho.default.useState(Ht?void 0:Tl()),[p,m]=Ho.default.useState(Ht||t==null?void 0:t()),d=()=>y(this,null,function*(){(e?e():hl()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Ho.useEffect)(()=>{Ht&&d()},[]),{globalStyles:r,styles:p}}function L(e,o){return t=>{let{globalStyles:r,styles:c}=ei({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return oi.default.createElement(e,w(u({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();Y();n();Y();var ni=e=>{var o,t;switch(e.name){case"transfer":return["Transfer",{token:(o=e.arguments)==null?void 0:o.transfers},"to",{address:(t=e.arguments)==null?void 0:t.receiver}];default:return[]}};n();var ti=f(require("bignumber.js"));A();Y();var ri=e=>{var o,t,r,c,p,m,d,l,g,T,x,v;switch(e.name){case"claimLockedAssets":return["Claim locked assets"];case"enterFarm":case"enterFarmProxy":return["Enter farm with",{token:(o=e.arguments)==null?void 0:o.transfers}];case"enterFarmAndLockRewards":case"enterFarmAndLockRewardsProxy":return["Enter farm and lock rewards with",{token:(t=e.arguments)==null?void 0:t.transfers}];case"exitFarm":case"exitFarmProxy":return["Exit farm with",{token:(r=e.arguments)==null?void 0:r.transfers}];case"claimRewards":case"claimRewardsProxy":return["Claim rewards",{token:(c=e.arguments)==null?void 0:c.transfers}];case"compoundRewards":case"compoundRewardsProxy":return["Reinvest rewards",{token:(p=e.arguments)==null?void 0:p.transfers}];case"swapTokensFixedInput":case"swap":return e.description?[e.description]:[];case"swapTokensFixedOutput":return e.description?[e.description]:[];case"addLiquidity":case"addLiquidityProxy":return["Added liquidity for",{token:[(m=e.arguments)==null?void 0:m.transfers[0]]},"and",{token:[(d=e.arguments)==null?void 0:d.transfers[1]]}];case"removeLiquidity":case"removeLiquidityProxy":return["Removed liquidity with ",{token:(l=e.arguments)==null?void 0:l.transfers}];case"mergeLockedAssetTokens":let E=ie;if((g=e.arguments)!=null&&g.transfers){let U=e.arguments.transfers.map(({value:q})=>q);E=ti.default.sum.apply(null,U).toString(10)}return[`Merge ${(T=e.arguments)==null?void 0:T.transfers.length}`,{tokenNoLink:[(x=e.arguments)==null?void 0:x.transfers[0]]},"positions into a single",{tokenNoLink:[(v=e.arguments)==null?void 0:v.transfers[0]]},"position of value",{value:E}];case"wrapEgld":case"unwrapEgld":default:return e.description?[e.description]:[]}};n();Y();var ai=e=>{var o,t,r,c,p,m,d,l,g,T,x,v;switch(e.name){case"delegate":case"stake":return["Delegate",{egldValue:(o=e.arguments)==null?void 0:o.value},"to staking provider",{providerName:(t=e.arguments)==null?void 0:t.providerName,providerAvatar:(r=e.arguments)==null?void 0:r.providerAvatar}];case"unDelegate":return["Undelegate",{egldValue:(c=e.arguments)==null?void 0:c.value},"from staking provider",{providerName:(p=e.arguments)==null?void 0:p.providerName,providerAvatar:(m=e.arguments)==null?void 0:m.providerAvatar}];case"claimRewards":return["Claim rewards from staking provider",{providerName:(d=e.arguments)==null?void 0:d.providerName,providerAvatar:(l=e.arguments)==null?void 0:l.providerAvatar}];case"reDelegateRewards":return["Redelegate rewards from staking provider",{providerName:(g=e.arguments)==null?void 0:g.providerName,providerAvatar:(T=e.arguments)==null?void 0:T.providerAvatar}];case"withdraw":return["Withdraw from staking provider",{providerName:(x=e.arguments)==null?void 0:x.providerName,providerAvatar:(v=e.arguments)==null?void 0:v.providerAvatar}];default:return[]}};var ii=e=>{if(!e.arguments)return e.description?[e.description]:[e.name];switch(e.category){case"esdtNft":return ni(e);case"mex":return ri(e);case"stake":return ai(e);default:return e.description?[e.description]:[]}};n();var D=f(require("react")),co=f(require("classnames"));n();var $t=f(require("react")),yl=e=>$t.createElement("svg",u({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"globe",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",className:"svg-inline--fa fa-globe fa-w-16 fa-5x"},e),$t.createElement("path",{fill:"#6c757d",d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z",className:""})),si=yl;A();n();n();var vr=f(require("react")),dc=require("@fortawesome/free-solid-svg-icons"),lc=require("@fortawesome/react-fontawesome"),_c=f(require("classnames"));n();n();var vs=require("react"),Io=require("react-redux");n();var lr=require("@reduxjs/toolkit"),bs=require("react-redux/lib/utils/Subscription");N();n();var ts=f(require("lodash.throttle"));A();N();Yt();yo();xo();var u_=[bn],jn=!1,g_=(0,ts.default)(()=>{qo(Vo())},5e3),rs=e=>o=>t=>{if(u_.includes(t.type))return o(t);let r=e.getState(),c=Ze.local.getItem(Oe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return qo(Vo());let m=Date.now();return c-m<0&&!jn?setTimeout(()=>{jn=!0,e.dispatch(bi())},1e3):(jn&&(jn=!1),g_()),o(t)};n();n();function Kn(){return typeof sessionStorage!="undefined"}var xs=Kn()?(ms(),G(ps)).default:(ls(),G(ds)).default,ys=Kn()?(us(),G(_s)).default:[],Ss=Kn()?(Ts(),G(hs)).default:e=>e;Xn();var I=(0,lr.configureStore)({reducer:xs,middleware:e=>e({serializableCheck:{ignoredActions:[...ys,Zt.type,kn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(rs)}),ws=(0,bs.createSubscription)(I),Hw=Ss(I),$w=(0,lr.configureStore)({reducer:Ye});var U_={store:I,subscription:ws},_r=(0,vs.createContext)(U_),jw=(0,Io.createStoreHook)(_r),X=(0,Io.createDispatchHook)(_r),k=(0,Io.createSelectorHook)(_r);n();n();N();n();var As=f(require("lodash.isequal")),Zn=require("reselect"),S=(0,Zn.createSelectorCreator)(Zn.defaultMemoize,As.default);var Te=e=>e.account,Je=S(Te,e=>e.address),ko=S(Te,Je,(e,o)=>o in e.accounts?e.accounts[o]:In),B_=S(Te,ko,(e,o)=>{let c=e,{accounts:t}=c,r=ae(c,["accounts"]);return w(u({},r),{address:o.address,account:o})}),Jw=S(ko,e=>e.balance),W_=S(ko,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),Qw=S(Te,e=>e.shard),G_=S(Te,e=>e.ledgerAccount),ev=S(Te,e=>e.walletConnectAccount),ov=S(Te,e=>e.isAccountLoading),nv=S(Te,e=>e.accountLoadingError),H_=S(Te,e=>e.websocketEvent),$_=S(Te,e=>e.websocketBatchEvent);n();var Is=e=>e.dappConfig,av=S(Is,e=>e.shouldUseWebViewProvider);n();var ee=e=>e.loginInfo,V_=S(ee,e=>e.loginMethod),Yn=S(ee,Je,(e,o)=>Boolean(o)),pv=S(ee,e=>e.walletConnectLogin),q_=S(ee,e=>e.ledgerLogin),z_=S(ee,e=>e.walletLogin),mv=S(ee,e=>e.isLoginSessionInvalid),ur=S(ee,e=>e.tokenLogin),ks=S(ee,e=>e.logoutRoute),j_=S(ee,e=>e.isWalletConnectV2Initialized);n();var Ls=e=>e.modals,_v=S(Ls,e=>e.txSubmittedModal),K_=S(Ls,e=>e.notificationModal);n();var se=e=>e.networkConfig,Jn=S(se,e=>e.network.chainId),X_=S(se,e=>e.network.roundDuration),fv=S(se,e=>e.network.walletConnectBridgeAddress),Z_=S(se,e=>e.network.walletConnectV2RelayAddress),Y_=S(se,e=>e.network.walletConnectV2ProjectId),J_=S(se,e=>e.network.walletConnectV2Options),Q_=S(se,e=>e.network.walletConnectDeepLink),oe=S(se,e=>e.network),Es=S(oe,e=>e.apiAddress),Ns=S(oe,e=>e.explorerAddress),Ps=S(oe,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),eu=S(oe,e=>e.xAliasAddress),gr=S(oe,e=>e.egldLabel);n();var Qn=e=>e.signedMessageInfo,xv=S(Qn,e=>e.isSigning),yv=S(Qn,e=>e.errorMessage),Sv=S(Qn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),bv=S(Qn,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Cs=e=>e.toasts,ou=S(Cs,e=>e.customToasts),Ds=S(Cs,e=>e.transactionToasts);n();N();var Rs={errorMessage:nr,successMessage:tr,processingMessage:rr},Ms=e=>e.transactionsInfo,nu=S(Ms,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Rs);n();n();var xe=require("@multiversx/sdk-core");A();n();var fr=require("@multiversx/sdk-core/out");n();n();function et(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Os=e=>{let o=e!=null?e:"";return et(o)?fr.TransactionPayload.fromEncoded(o):new fr.TransactionPayload(o)};n();A();var Zo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Mt).some(t=>e.startsWith(t)):!1;function ot(e){var r,c,p;let o=u({},e);Zo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new xe.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Os(o.data),nonce:o.nonce.valueOf(),receiver:new xe.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new xe.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:yn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Sn,chainID:o.chainID.valueOf(),version:new xe.TransactionVersion((p=o.version)!=null?p:Xa)}),o.options?{options:new xe.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new xe.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();A();n();n();n();var iu=require("@multiversx/sdk-core/out");n();A();n();var Yo=require("@multiversx/sdk-core");F();n();var Fs=require("@multiversx/sdk-core");function su(e){try{let o=new Fs.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Qe(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&su(e)}var cu=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function nt(e,o,t=""){if(!Qe(e))return!1;if(new Yo.Address(e).isContractAddress())return!0;let p=Us({receiver:e,data:t});return p?new Yo.Address(p).isContractAddress()||du(e,o,t):!1}var pu=e=>e.toLowerCase().match(/[0-9a-f]/g),mu=e=>e.length%2===0;function du(e,o,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=cu.includes(c),l=p.every(g=>pu(g)&&mu(g));return m&&d&&l}function Us({receiver:e,data:o}){try{if(!o)return e;let t=et(o)?Yo.TransactionPayload.fromEncoded(o).toString():o,r=lu(t),c=t.split("@");return r>-1?c[r]:e}catch(t){console.log(t);return}}function lu(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var _u=require("@multiversx/sdk-core"),uu=f(require("bignumber.js"));P();n();n();n();var ce="accounts";var tt="blocks",Gs="code",Hs="collections";var $s="contracts";var Vs="identities";var qs="locked-accounts",zs="logs",js="miniblocks";var rt="nfts",Ks="nodes",hr="providers",Xs="roles",Tr="sc-results";var eo="tokens";var pe="transactions";var ye={shard:e=>`/${tt}?shard=${e}`,receiverShard:e=>`/${pe}?receivershard=${e}`,senderShard:e=>`/${pe}?sendershard=${e}`,transactionDetails:e=>`/${pe}/${e}`,transactionDetailsScResults:e=>`/${pe}/${e}/${Tr}`,transactionDetailsLogs:e=>`/${pe}/${e}/${zs}`,nodeDetails:e=>`/${Ks}/${e}`,accountDetails:e=>`/${ce}/${e}`,accountDetailsContractCode:e=>`/${ce}/${e}/${Gs}`,accountDetailsTokens:e=>`/${ce}/${e}/${eo}`,accountDetailsNfts:e=>`/${ce}/${e}/${rt}`,accountDetailsScResults:e=>`/${ce}/${e}/${Tr}`,accountDetailsContracts:e=>`/${ce}/${e}/${$s}`,identityDetails:e=>`/${Vs}/${e}`,tokenDetails:e=>`/${eo}/${e}`,tokenDetailsAccounts:e=>`/${eo}/${e}/${ce}`,tokenDetailsLockedAccounts:e=>`/${eo}/${e}/${qs}`,tokenDetailsRoles:e=>`/${eo}/${e}/${Xs}`,collectionDetails:e=>`/${Hs}/${e}`,nftDetails:e=>`/${rt}/${e}`,providerDetails:e=>`/${hr}/${e}`,providerDetailsTransactions:e=>`/${hr}/${e}/${pe}`,miniblockDetails:e=>`/${js}/${e}`};n();n();n();n();Y();n();var Zs=!1;function fu(e){Zs||(console.error(e),Zs=!0)}function xr({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(fu(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();Y();n();n();n();var hu=f(require("bignumber.js"));A();n();var Qs=require("@multiversx/sdk-core"),Ue=f(require("bignumber.js"));A();n();var Js=f(require("bignumber.js")),Jo=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let r=new Js.default(t),c=o?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=c};n();function Le(e){return{if:function(o){return o?{then:t=>t instanceof Function?Le(t(e)):Le(t)}:{then:()=>Le(e)}},then:o=>o instanceof Function?Le(o(e)):Le(o),valueOf:function(){return e}}}Ue.default.config({ROUNDING_MODE:Ue.default.ROUND_FLOOR});function Se({input:e,decimals:o=j,digits:t=Ke,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!Jo(e,!1))throw new Error("Invalid input");let m=new Ue.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Le(d).then(()=>Qs.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let g=new Ue.default(l);if(g.isZero())return ie;let T=g.toString(10),[x,v]=T.split("."),E=new Ue.default(v||0),U=Le(0).if(Boolean(v&&r)).then(()=>Math.max(v.length,t)).if(E.isZero()&&!r).then(0).if(Boolean(v&&!r)).then(()=>Math.min(v.length,t)).valueOf(),q=v&&t>=1&&t<=v.length&&E.isGreaterThan(0)&&new Ue.default(v.substring(0,t)).isZero(),de=g.toFormat(U);return Le(T).if(p).then(de).if(Boolean(q)).then(Re=>{let be=new Ue.default(x).isZero(),[C,po]=Re.split("."),mo=new Array(t-1).fill(0),St=[...mo,0].join(""),bt=[...mo,1].join("");return be?c?`<${C}.${bt}`:r?`${C}.${po}`:C:`${C}.${St}`}).if(Boolean(!q&&v)).then(Re=>{let[be]=Re.split("."),C=v.substring(0,U);if(r){let po=t-C.length;if(po>0){let mo=Array(po).fill(0).join("");return C=`${C}${mo}`,`${be}.${C}`}return Re}return C?`${be}.${C}`:be}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}n();n();n();A();n();n();n();n();A();n();A();n();var Tu=require("@multiversx/sdk-core");A();n();var Qo=require("@multiversx/sdk-core"),Su=f(require("bignumber.js"));A();n();n();var xu=f(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();function Lo({token:e,noValue:o,showLastNonZeroDecimal:t}){var g;let r=!o&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";r&&c&&(m=c?Se({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:t}):Number(e.value).toLocaleString("en"));let d=ye.nftDetails(String(e.identifier)),l=e.ticker===e.collection&&(g=e.identifier)!=null?g:e.ticker;return{badgeText:p,tokenFormattedAmount:r?m:null,tokenExplorerLink:d,tokenLinkText:l,token:e,noValue:o,showLastNonZeroDecimal:t}}n();A();function at({token:e,noValue:o,showLastNonZeroDecimal:t}){var d;let r=Boolean(!o&&e.value),c=r?Se({input:e.value,decimals:(d=e.decimals)!=null?d:j,digits:2,showLastNonZeroDecimal:t,addCommas:!0}):null,p=ye.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:r,tokenLinkText:m,token:e,showLastNonZeroDecimal:t}}n();Y();var bu=["reDelegateRewards","claimRewards","unBond"],wu=["wrapEgld","unwrapEgld"],vu=["unStake"],Au=["unDelegate"];n();n();n();A();n();var ku=f(require("bignumber.js"));n();n();Y();n();var Eu=f(require("bignumber.js"));n();n();n();n();var Cu=f(require("bignumber.js"));F();n();n();n();n();P();n();var Ou=require("@multiversx/sdk-web-wallet-provider");A();n();var Ru=f(require("qs"));n();K();To();n();To();var H1={search:Xe()?window.location.search:"",removeParams:[]};n();n();n();V();n();Y();n();n();V();n();var Fu=f(require("linkifyjs"));n();A();n();var Uu=f(require("bignumber.js"));n();F();n();n();P();n();P();n();n();n();var tc=require("react");F();n();n();Y();n();n();var Bu=require("@multiversx/sdk-core/out"),Wu=f(require("bignumber.js"));Y();n();F();n();n();F();var mE=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var rc=require("react");F();V();n();var Hu=require("react");Y();var TE=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Ao();n();var it=e=>e.transactions,Eo=S(it,e=>e.signedTransactions),$u=S(it,e=>e.signTransactionsError),ac=S(it,e=>e.signTransactionsCancelMessage),st=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),ic=S(Eo,st(bo)),sc=S(Eo,st(wo)),cc=S(Eo,st(vo)),Vu=S(Eo,st(ir)),pc=S(it,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>ot(t)))||[]})}),qu=S(Eo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var ct=()=>k(se);var ju=l=>{var g=l,{page:e,text:o,className:t="dapp-explorer-link",children:r,globalStyles:c,customExplorerIcon:p,styles:m}=g,d=ae(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:T}}=ct(),x=o!=null?o:vr.default.createElement(lc.FontAwesomeIcon,{icon:p!=null?p:dc.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),v=xr({explorerAddress:String(T),to:e});return vr.default.createElement("a",u({href:v,target:"_blank",className:(0,_c.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},d),r!=null?r:x)},Ee=L(ju,{ssrStyles:()=>Promise.resolve().then(()=>(wr(),br)),clientStyles:()=>(wr(),G(br)).default});n();n();var Be=f(require("react")),fc=f(require("classnames"));A();n();function uc(){return gr(I.getState())}var Xu=e=>{var t;let o=(t=e.styles)!=null?t:{};return Be.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Be.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},Zu=(e,o)=>{var E,U,q;let{value:t,showLastNonZeroDecimal:r=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:Ke,m=e.decimals!=null?e.decimals:j,d=(E=e.styles)!=null?E:{},l=(U=e.globalStyles)!=null?U:{},g=Se({input:t,decimals:m,digits:p,showLastNonZeroDecimal:r,addCommas:!0}),T=g.split("."),x=T.length===1,v=g!==ie;if(p>0&&x&&v){let de="";for(let He=1;He<=p;He++)de=de+ie;T.push(de)}return Be.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},Be.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},T[0]),T.length>1&&Be.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",T[1]),c&&Be.default.createElement("span",{className:(0,fc.default)(d.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(q=e.token)!=null?q:o}`))},Yu=e=>{let{value:o}=e;return Jo(o)?Zu(e,e.egldLabel||""):Xu(e)},Ju=e=>{let o=e.egldLabel||uc(),t=w(u({},e),{egldLabel:o});return Be.default.createElement(Yu,u({},t))},no=L(Ju,{ssrStyles:()=>Promise.resolve().then(()=>(Ir(),Ar)),clientStyles:()=>(Ir(),G(Ar)).default});n();n();var Zr=f(require("react")),pd=f(require("classnames"));n();var W=f(require("react")),sd=f(require("classnames"));A();n();n();var hc=require("react");n();N();n();n();n();n();n();n();n();n();var eg=require("@multiversx/sdk-extension-provider"),og=require("@multiversx/sdk-hw-provider"),ng=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),tg=require("@multiversx/sdk-opera-provider"),rg=require("@multiversx/sdk-passkey-provider/out"),ag=require("@multiversx/sdk-web-wallet-provider");A();Me();n();var No=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Tc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var me=e=>`Unable to perform ${e}, Provider not initialized`,pt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(me("getAccount"))}setAccount(o){throw new Error(me(`setAccount: ${o}`))}login(o){throw new Error(me(`login with options: ${o}`))}logout(o){throw new Error(me(`logout with options: ${o}`))}getAddress(){throw new Error(me("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(me(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(me(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(me(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(me(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(me(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(me(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},xc=new pt;N();n();n();n();n();n();var yc=require("@lifeomic/axios-fetch"),kr=f(require("axios")),Lr=(0,yc.buildAxiosFetch)(kr.default),Er=(e,o)=>y(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function ig(e,o,t){return y(this,null,function*(){try{let r=yield Lr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Er(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function sg(e,o){return y(this,null,function*(){try{let t=yield Lr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Er(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function cg(e,o,t){return y(this,null,function*(){try{let r=yield Lr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Er(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var Po=kr.default.create();Po.get=sg;Po.post=ig;Po.patch=cg;n();n();var pg=f(require("axios"));n();var mg=f(require("swr"));n();P();n();n();n();V();n();Ao();n();n();n();var dg=f(require("axios"));n();var _g=f(require("axios"));ho();n();A();n();var ug=f(require("axios"));n();var fg=f(require("axios"));n();n();var hg=f(require("axios"));n();var Tg=f(require("axios"));n();n();N();P();n();n();n();n();V();n();M();F();n();N();n();var vc=require("@multiversx/sdk-core");F();K();n();Ao();n();N();P();n();N();F();n();n();n();F();n();xn();n();n();n();n();var Sg=f(require("swr"));n();n();n();n();var Ac=require("react");n();n();var bg=require("react"),wg=require("@multiversx/sdk-web-wallet-provider"),vg=require("@multiversx/sdk-web-wallet-provider"),Ag=f(require("qs"));A();N();P();Ft();V();var vR=B();n();var Yc=require("react"),Or=require("@multiversx/sdk-core");n();A();Jt();n();n();n();n();n();n();n();n();n();n();ho();n();var Eg=f(require("axios"));n();var Pg=f(require("axios"));n();ho();n();ho();n();n();n();n();var Dg=require("@multiversx/sdk-opera-provider");n();var Rg=require("@multiversx/sdk-extension-provider");n();Me();n();n();n();n();var af=f(jc());n();var mf=require("@multiversx/sdk-native-auth-client");n();var Zc=f(require("axios"));n();n();n();function Kc(e){return y(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var Xc=(e,o,t,r=0)=>y(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Kc(o.delay)),yield Xc(e,o,t,r+1)):null}}),Rr=(e,o={retries:5,delay:500})=>(...t)=>y(void 0,null,function*(){return yield Xc(e,o,t)});var sf=4;var q3=Rr((e,o,t)=>y(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield Zc.default.get(`${e}/${tt}?from=${sf}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();vn();n();n();V();var oM={origin:B().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var lf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var _f=require("@multiversx/sdk-passkey-provider/out");A();V();n();n();n();var xf=require("react"),yf=require("@multiversx/sdk-hw-provider");n();M();F();n();zo();yo();xo();K();n();n();var Wm=require("react"),Gm=require("@multiversx/sdk-core"),sx=require("@multiversx/sdk-extension-provider"),cx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),px=require("@multiversx/sdk-passkey-provider/out"),mx=f(Om());A();n();n();n();n();n();n();n();n();n();n();var cn=f(require("react"));var GO=(0,cn.createContext)({}),HO=I.getState();n();var Um=f(require("react"));n();var Wr=f(require("react")),VT=f(require("axios"));n();n();Me();n();n();var ZT=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),YT=require("@multiversx/sdk-webview-provider/out/WebviewProvider");M();n();M();N();F();n();n();N();n();K();n();N();F();n();n();var zT=require("@multiversx/sdk-core"),jT=f(require("bignumber.js"));A();n();var KT=f(require("bignumber.js"));A();N();P();K();V();n();var Bm=require("react"),ox=require("@multiversx/sdk-extension-provider"),nx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),tx=require("@multiversx/sdk-passkey-provider/out");Me();N();n();N();F();zo();V();n();fe();N();n();n();var lx=require("react");n();n();P();Ao();n();var Tt=require("react"),Hm=(e,o)=>{let[t,r]=(0,Tt.useState)(e);return(0,Tt.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var ux=require("react"),gx=require("@multiversx/sdk-extension-provider");fe();M();P();n();Ie();K();K();n();n();Me();F();n();var _x=require("react"),$m=require("@multiversx/sdk-core");N();n();var fx=require("react"),hx=require("@multiversx/sdk-opera-provider");fe();M();P();Ie();K();V();n();var Tx=require("react");Bt();fe();Me();M();N();P();Ie();V();n();var wx=require("react");fe();N();n();n();Vt();n();n();var xx=f(require("platform"));To();n();n();n();n();n();n();Go();P();n();n();var yx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();zo();yo();n();n();n();N();n();n();var Sx=f(require("axios"));K();n();n();var bx=f(ut());Go();var Vm,qm,zm,E4=(zm=(qm=(Vm=je.safeWindow)==null?void 0:Vm.location)==null?void 0:qm.origin)==null?void 0:zm.includes("localhost");n();V();n();n();var Cx=require("react");A();n();n();A();n();n();n();var vx=f(require("bignumber.js"));n();n();n();var Ge=f(require("react")),Qm=require("react"),ed=require("react"),qr=f(require("classnames")),od=require("react-dom");A();n();var Km=f(require("react")),Xm=f(require("classnames"));var Ix=({className:e,children:o,styles:t})=>Km.default.createElement("div",{className:(0,Xm.default)(t==null?void 0:t.dappModalBody,e)},o),Gr=L(Ix,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});n();var Hr=f(require("react")),Zm=f(require("classnames"));var kx=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?Hr.default.createElement("div",{className:(0,Zm.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Hr.default.createElement("div",null,r)):null,$r=L(kx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});n();var Fo=f(require("react")),Ym=require("@fortawesome/free-solid-svg-icons"),Jm=require("@fortawesome/react-fontawesome"),mn=f(require("classnames"));var Lx=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?Fo.default.createElement("div",{className:(0,mn.default)(l==null?void 0:l.dappModalHeader,r)},t):Fo.default.createElement("div",{className:(0,mn.default)(l==null?void 0:l.dappModalHeader,r)},Fo.default.createElement("div",{className:(0,mn.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Fo.default.createElement("button",{onClick:m,className:(0,mn.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Fo.default.createElement(Jm.FontAwesomeIcon,{size:"lg",icon:Ym.faTimes}))):null,Vr=L(Lx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});var Ex={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Nx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=Ex,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:g})=>{let[T,x]=(0,Qm.useState)(!1);if((0,ed.useEffect)(()=>{x(!0)},[]),!l)return null;let{showHeader:v,showFooter:E,headerText:U,footerText:q,modalDialogClassName:de="dapp-modal-dialog",modalContentClassName:He="dapp-modal-dialog-content",modalHeaderClassName:Re="dapp-modal-dialog-header",modalHeaderTextClassName:be="dapp-modal-dialog-header-text",modalCloseButtonClassName:C="dapp-modal-dialog-close-button",modalBodyClassName:po="dapp-modal-dialog-content-body",modalFooterClassName:mo="dapp-modal-dialog-footer",customModalHeader:St,customModalFooter:bt}=c,Ld=Ed=>{Ed.key==="Escape"&&r&&(m==null||m())};return Ge.default.createElement(Ge.default.Fragment,null,T&&(0,od.createPortal)(Ge.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,qr.default)(de,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:Ld},Ge.default.createElement("div",{className:(0,qr.default)(g==null?void 0:g.dappModalContent,He)},Ge.default.createElement(Vr,{visible:v,headerText:U,customHeader:St,className:Re,headerTextClassName:be,closeButtonClassName:C,onHide:m}),Ge.default.createElement(Gr,{className:po},o),Ge.default.createElement($r,{visible:E,customFooter:bt,footerText:q,className:mo}))),d!=null?d:document==null?void 0:document.body))},Px=L(Nx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ne)),clientStyles:()=>(Pe(),G(Ne)).default});n();n();var nd=require("react");n();n();var td=require("react"),Rx=require("@multiversx/sdk-hw-provider");fe();M();N();P();Ie();n();var Dx=require("react");n();n();var zr=require("react");M();N();P();Ie();V();n();var Ox=require("react"),Fx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");fe();M();P();Ie();K();K();n();var Ux=require("react"),Bx=require("@multiversx/sdk-passkey-provider/out");fe();M();P();Ie();K();K();n();n();var rd=require("react");n();var Hx=require("react");n();var jr=require("react"),Gx=require("socket.io-client");N();n();n();n();var $x=require("react");F();n();n();n();var qx=f(require("swr"));n();n();n();n();var Vx=f(require("axios"));n();var jx=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,W.useState)(0),[d,l]=(0,W.useState)(!1),g=(0,W.useRef)(document==null?void 0:document.createElement("span")),T=(0,W.useRef)(document==null?void 0:document.createElement("span")),x=Hm(p,300),v=()=>{if(g.current&&T.current){let q=T.current.offsetWidth-g.current.offsetWidth;l(q>1)}},E=()=>{m(p+1)};return(0,W.useEffect)(()=>(window==null||window.addEventListener("resize",E),()=>{window==null||window.removeEventListener("resize",E)})),(0,W.useEffect)(()=>{v()},[x]),W.default.createElement("span",{ref:g,className:(0,sd.default)(c==null?void 0:c.trim,r,o,{overflow:d}),"data-testid":t},W.default.createElement("span",{ref:T,className:c==null?void 0:c.hiddenTextRef},e),d?W.default.createElement(W.default.Fragment,null,W.default.createElement("span",{className:c==null?void 0:c.left},W.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),W.default.createElement("span",{className:c==null?void 0:c.ellipsis},Ya),W.default.createElement("span",{className:c==null?void 0:c.right},W.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):W.default.createElement("span",null,e))},cd=L(jx,{ssrStyles:()=>Promise.resolve().then(()=>(Xr(),Kr)),clientStyles:()=>(Xr(),G(Kr)).default});var Kx=p=>{var m=p,{address:e,assets:o,color:t,globalStyles:r}=m,c=ae(m,["address","assets","color","globalStyles"]);if(o&&o.name){let d=o.name.replace(new RegExp("\\p{Emoji}","gu"),""),l=`${d} (${e})`;return Zr.default.createElement("span",w(u({className:(0,pd.default)(r==null?void 0:r.textTruncate,{[`text-${t}`]:t})},c),{title:l}),d)}return Zr.default.createElement(cd,u({text:e,color:t},c))},md=L(Kx,{});n();var dd=f(require("react")),ld=require("@fortawesome/free-solid-svg-icons/faFileAlt"),_d=require("@fortawesome/react-fontawesome"),ud=f(require("classnames"));A();var Xx=({initiator:e,secondInitiator:o,globalStyles:t})=>nt(e)||nt(o!=null?o:"")?dd.default.createElement(_d.FontAwesomeIcon,{title:"Smart Contract",icon:ld.faFileAlt,className:(0,ud.default)(t==null?void 0:t.mr1,t==null?void 0:t.textSecondary),"data-testid":"scIcon"}):null,gd=L(Xx,{});n();var ne=f(require("react"));n();n();var _n=f(require("react")),xt=f(require("classnames"));var Yx=({token:e,globalStyles:o,styles:t})=>e.collection?_n.default.createElement(Ee,{page:ye.collectionDetails(e.collection),className:(0,xt.default)(t==null?void 0:t.transactionActionCollection)},_n.default.createElement("div",{className:(0,xt.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&_n.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,xt.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),_n.default.createElement("span",null,e.ticker))):null,hd=L(Yx,{ssrStyles:()=>Promise.resolve().then(()=>(ln(),dn)),clientStyles:()=>(ln(),G(dn)).default});n();var Ce=f(require("react")),Uo=f(require("classnames"));A();n();var Td=f(require("react")),xd=f(require("classnames"));var Jx=({text:e,className:o,"data-testid":t="nftBadge",globalStyles:r})=>Td.default.createElement("div",{"data-testid":t,className:(0,xd.default)(r==null?void 0:r.badge,r==null?void 0:r.badgeSecondary,r==null?void 0:r.badgePill,r==null?void 0:r.fontWeightLight,o)},e),yd=L(Jx,{});var Qx=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:t,tokenLinkText:r,token:c,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var l,g,T,x,v;return c.identifier?Ce.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&Ce.default.createElement(yd,{text:e,className:(0,Uo.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&Ce.default.createElement("div",{className:(0,Uo.default)(m==null?void 0:m.mr1,{[(l=m==null?void 0:m.textTruncate)!=null?l:""]:c.svgUrl})},Ce.default.createElement(no,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Ce.default.createElement(Ee,{page:t,"data-testid":"nftExplorerLink",className:(0,Uo.default)(d==null?void 0:d.explorer,{[(g=m==null?void 0:m.sideLink)!=null?g:""]:c.svgUrl,[(T=m==null?void 0:m.dFlex)!=null?T:""]:c.svgUrl,[(x=m==null?void 0:m.textTruncate)!=null?x:""]:!c.svgUrl})},Ce.default.createElement("div",{className:d==null?void 0:d.data},c.svgUrl&&Ce.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,Uo.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),Ce.default.createElement("span",{className:(0,Uo.default)({[(v=d==null?void 0:d.truncate)!=null?v:""]:c.ticker===c.collection})},r)))):null},Sd=L(Qx,{ssrStyles:()=>Promise.resolve().then(()=>(ln(),dn)),clientStyles:()=>(ln(),G(dn)).default});n();var De=f(require("react")),yt=f(require("classnames"));A();var ey=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:t,token:r,showLastNonZeroDecimal:c,globalStyles:p})=>{var m,d;return r.token?De.default.createElement(De.default.Fragment,null,o&&De.default.createElement("div",{className:p==null?void 0:p.textTruncate},De.default.createElement(no,{value:r.value,digits:2,showLabel:!1,decimals:(m=r.decimals)!=null?m:j,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),De.default.createElement(Ee,{page:e,"data-testid":"tokenExplorerLink",className:(0,yt.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:r.svgUrl})},De.default.createElement("div",{className:(0,yt.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},r.svgUrl&&De.default.createElement("img",{src:r.svgUrl,alt:r.name,className:(0,yt.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),De.default.createElement("span",null,t)))):null},bd=L(ey,{});var so={Collection:hd,Nft:Sd,Token:bd};var ny=({token:e,noValue:o,showLastNonZeroDecimal:t,globalStyles:r,styles:c})=>{if(["MetaESDT".toString(),"SemiFungibleESDT","NonFungibleESDT"].includes(e.type))switch(e.type){case"SemiFungibleESDT":{let m=Lo({token:e,showLastNonZeroDecimal:t});return ne.default.createElement("div",{className:c==null?void 0:c.group},ne.default.createElement("span",{className:r==null?void 0:r.mr1},"SFT quantity"),ne.default.createElement(so.Nft,w(u({},m),{badgeText:null})),ne.default.createElement("span",{className:r==null?void 0:r.mr1},"of collection"),ne.default.createElement(so.Collection,{token:e}))}case"NonFungibleESDT":{let m=Lo({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement("div",{className:c==null?void 0:c.group},ne.default.createElement("span",{className:r==null?void 0:r.mr1},"NFT"),ne.default.createElement(so.Nft,w(u({},m),{badgeText:null})),ne.default.createElement("span",{className:r==null?void 0:r.mr1},"of collection"),ne.default.createElement(so.Collection,{token:e}))}case"MetaESDT":{let m=Lo({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement(so.Nft,w(u({},m),{badgeText:null}))}default:return null}else{let m=at({token:e,noValue:o,showLastNonZeroDecimal:t});return ne.default.createElement(so.Token,w(u({},m),{showLastNonZeroDecimal:!0}))}},Qr=L(ny,{ssrStyles:()=>Promise.resolve().then(()=>(Jr(),Yr)),clientStyles:()=>(Jr(),G(Yr)).default});var ry=({entry:e,transaction:o,globalStyles:t,styles:r})=>{if(typeof e=="string")return D.default.createElement("span",{className:t==null?void 0:t.mr1},e.replace("eGLD","EGLD"));if(Boolean(e.address)){let c;return e.address===o.sender&&(c=o.senderAssets),e.address===o.receiver&&(c=o.receiverAssets),Qe(e.address)?D.default.createElement("div",{className:r==null?void 0:r.address},D.default.createElement(gd,{initiator:e.address}),D.default.createElement(Ee,{page:ye.accountDetails(e.address),"data-testid":"receiverLink",className:r==null?void 0:r.explorer},D.default.createElement(md,{address:e.address,assets:c}))):""}if(Boolean(e.token&&e.token.length>0))return e.token.map((c,p)=>{var m;return D.default.createElement("div",{key:`tx-${c.identifier}-${p}`,className:(0,co.default)(r==null?void 0:r.token,{[(m=r==null?void 0:r.spaced)!=null?m:""]:e.token.length>1})},D.default.createElement(Qr,{token:c,showLastNonZeroDecimal:!0}),p<e.token.length-1&&D.default.createElement("span",{className:r==null?void 0:r.comma},","))});if(Boolean(e.tokenNoValue&&e.tokenNoValue.length>0))return e.tokenNoValue.map((c,p)=>D.default.createElement("div",{key:`tx-${c.token}-${p}`},D.default.createElement(Qr,{token:c,noValue:!0,showLastNonZeroDecimal:!0}),p<e.tokenNoValue.length-1&&D.default.createElement("span",{className:(0,co.default)(t==null?void 0:t.mlN1,t==null?void 0:t.mr1,t==null?void 0:t.dNone,t==null?void 0:t.dSmFlex)},",")));if(Boolean(e.tokenNoLink&&e.tokenNoLink.length>0))return e.tokenNoLink.map((c,p)=>D.default.createElement("div",{key:`tx-${c.token}-${p}`},D.default.createElement("span",{className:t==null?void 0:t.mr1},c.ticker),p<e.tokenNoLink.length-1&&D.default.createElement("span",{className:(0,co.default)(t==null?void 0:t.mlN1,t==null?void 0:t.mr1,t==null?void 0:t.dNone,t==null?void 0:t.dSmFlex)},",")));if(Boolean(e.value))return D.default.createElement("span",null,D.default.createElement(no,{value:e.value,showLabel:!1,showLastNonZeroDecimal:!0}));if(Boolean(e.egldValue))return D.default.createElement("span",null,D.default.createElement(no,{value:e.egldValue,showLastNonZeroDecimal:!0}));if(Boolean(e.providerName)){let c=(0,co.default)(t==null?void 0:t.sideIcon,t==null?void 0:t.mr1,t==null?void 0:t.mrLg1,t==null?void 0:t.roundedCircle);return D.default.createElement("span",{className:(0,co.default)(t==null?void 0:t.dFlex,t==null?void 0:t.mr1)},D.default.createElement(Ee,{page:ye.providerDetails(o.receiver),className:(0,co.default)(t==null?void 0:t.dFlex,t==null?void 0:t.alignSelfCenter)},e.providerAvatar?D.default.createElement("img",{src:e.providerAvatar,className:c,alt:" "}):D.default.createElement(si,{className:c}),e.providerName))}return null},Ad=L(ry,{ssrStyles:()=>Promise.resolve().then(()=>(oa(),ea)),clientStyles:()=>(oa(),G(ea)).default});var kd=({transaction:e,styles:o})=>{let t=(0,Bo.useMemo)(()=>e.action?ii(e.action):[],[e.action]);return Bo.default.createElement("div",{"data-testid":"transactionAction",className:o==null?void 0:o.action},t.map((r,c)=>Bo.default.createElement("div",{key:JSON.stringify(t)+c,className:o==null?void 0:o.result},Bo.default.createElement(Ad,{transaction:e,entry:r}))))},iy=L(kd,{ssrStyles:()=>Promise.resolve().then(()=>(ta(),na)),clientStyles:()=>(ta(),G(na)).default});0&&(module.exports={TransactionAction,TransactionActionComponent});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
