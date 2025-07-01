"use strict";var pl=Object.create;var Vo=Object.defineProperty,ml=Object.defineProperties,dl=Object.getOwnPropertyDescriptor,ll=Object.getOwnPropertyDescriptors,_l=Object.getOwnPropertyNames,wn=Object.getOwnPropertySymbols,ul=Object.getPrototypeOf,Mt=Object.prototype.hasOwnProperty,wa=Object.prototype.propertyIsEnumerable;var Sa=(e,o,t)=>o in e?Vo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))Mt.call(o,t)&&Sa(e,t,o[t]);if(wn)for(var t of wn(o))wa.call(o,t)&&Sa(e,t,o[t]);return e},w=(e,o)=>ml(e,ll(o));var Se=(e,o)=>{var t={};for(var r in e)Mt.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&wn)for(var r of wn(e))o.indexOf(r)<0&&wa.call(e,r)&&(t[r]=e[r]);return t};var T=(e,o)=>()=>(e&&(o=e(e=0)),o);var S=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),$=(e,o)=>{for(var t in o)Vo(e,t,{get:o[t],enumerable:!0})},va=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of _l(o))!Mt.call(e,c)&&c!==t&&Vo(e,c,{get:()=>o[c],enumerable:!(r=dl(o,c))||r.enumerable});return e};var f=(e,o,t)=>(t=e!=null?pl(ul(e)):{},va(o||!e||!e.__esModule?Vo(t,"default",{value:e,enumerable:!0}):t,e)),O=e=>va(Vo({},"__esModule",{value:!0}),e);var h=(e,o,t)=>new Promise((r,c)=>{var p=l=>{try{d(t.next(l))}catch(g){c(g)}},m=l=>{try{d(t.throw(l))}catch(g){c(g)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var ka=S(vn=>{"use strict";n();vn.byteLength=fl;vn.toByteArray=hl;vn.fromByteArray=bl;var le=[],te=[],gl=typeof Uint8Array!="undefined"?Uint8Array:Array,Ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(qe=0,Ia=Ot.length;qe<Ia;++qe)le[qe]=Ot[qe],te[Ot.charCodeAt(qe)]=qe;var qe,Ia;te["-".charCodeAt(0)]=62;te["_".charCodeAt(0)]=63;function Aa(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function fl(e){var o=Aa(e),t=o[0],r=o[1];return(t+r)*3/4-r}function Tl(e,o,t){return(o+t)*3/4-t}function hl(e){var o,t=Aa(e),r=t[0],c=t[1],p=new gl(Tl(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=te[e.charCodeAt(l)]<<18|te[e.charCodeAt(l+1)]<<12|te[e.charCodeAt(l+2)]<<6|te[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=te[e.charCodeAt(l)]<<2|te[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=te[e.charCodeAt(l)]<<10|te[e.charCodeAt(l+1)]<<4|te[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function xl(e){return le[e>>18&63]+le[e>>12&63]+le[e>>6&63]+le[e&63]}function yl(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(xl(r));return c.join("")}function bl(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,d=t-r;m<d;m+=p)c.push(yl(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],c.push(le[o>>2]+le[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(le[o>>10]+le[o>>4&63]+le[o<<2&63]+"=")),c.join("")}});var La=S(Ft=>{n();Ft.read=function(e,o,t,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,g=l>>1,x=-7,y=t?c-1:0,v=t?-1:1,E=e[o+y];for(y+=v,p=E&(1<<-x)-1,E>>=-x,x+=d;x>0;p=p*256+e[o+y],y+=v,x-=8);for(m=p&(1<<-x)-1,p>>=-x,x+=r;x>0;m=m*256+e[o+y],y+=v,x-=8);if(p===0)p=1-g;else{if(p===l)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-g}return(E?-1:1)*m*Math.pow(2,p-r)};Ft.write=function(e,o,t,r,c,p){var m,d,l,g=p*8-c-1,x=(1<<g)-1,y=x>>1,v=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:p-1,P=r?1:-1,G=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=x):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+y>=1?o+=v/l:o+=v*Math.pow(2,1-y),o*l>=2&&(m++,l/=2),m+y>=x?(d=0,m=x):m+y>=1?(d=(o*l-1)*Math.pow(2,c),m=m+y):(d=o*Math.pow(2,y-1)*Math.pow(2,c),m=0));c>=8;e[t+E]=d&255,E+=P,d/=256,c-=8);for(m=m<<c|d,g+=c;g>0;e[t+E]=m&255,E+=P,m/=256,g-=8);e[t+E-P]|=G*128}});var Ga=S(_o=>{"use strict";n();var Bt=ka(),lo=La(),Ea=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_o.Buffer=_;_o.SlowBuffer=kl;_o.INSPECT_MAX_BYTES=50;var In=2147483647;_o.kMaxLength=In;_.TYPED_ARRAY_SUPPORT=Sl();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Sl(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function we(e){if(e>In)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Vt(e)}return Na(e,o,t)}_.poolSize=8192;function Na(e,o,t){if(typeof e=="string")return vl(e,o);if(ArrayBuffer.isView(e))return Il(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(_e(e,ArrayBuffer)||e&&_e(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(_e(e,SharedArrayBuffer)||e&&_e(e.buffer,SharedArrayBuffer)))return Wt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,t);var c=Al(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return Na(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function Da(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function wl(e,o,t){return Da(e),e<=0?we(e):o!==void 0?typeof t=="string"?we(e).fill(o,t):we(e).fill(o):we(e)}_.alloc=function(e,o,t){return wl(e,o,t)};function Vt(e){return Da(e),we(e<0?0:Ht(e)|0)}_.allocUnsafe=function(e){return Vt(e)};_.allocUnsafeSlow=function(e){return Vt(e)};function vl(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Ra(e,o)|0,r=we(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function Ut(e){for(var o=e.length<0?0:Ht(e.length)|0,t=we(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function Il(e){if(_e(e,Uint8Array)){var o=new Uint8Array(e);return Wt(o.buffer,o.byteOffset,o.byteLength)}return Ut(e)}function Wt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,_.prototype),r}function Al(e){if(_.isBuffer(e)){var o=Ht(e.length)|0,t=we(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||$t(e.length)?we(0):Ut(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Ut(e.data)}function Ht(e){if(e>=In)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+In.toString(16)+" bytes");return e|0}function kl(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(_e(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),_e(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=_.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(_e(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function Ra(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||_e(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Gt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Wa(e).length;default:if(c)return r?-1:Gt(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=Ra;function Ll(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Bl(this,o,t);case"utf8":case"utf-8":return Oa(this,o,t);case"ascii":return Ol(this,o,t);case"latin1":case"binary":return Fl(this,o,t);case"base64":return Rl(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ul(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function je(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)je(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)je(this,t,t+3),je(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)je(this,t,t+7),je(this,t+1,t+6),je(this,t+2,t+5),je(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Oa(this,0,o):Ll.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=_o.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Ea&&(_.prototype[Ea]=_.prototype.inspect);_.prototype.compare=function(o,t,r,c,p){if(_e(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-t,l=Math.min(m,d),g=this.slice(c,p),x=o.slice(t,r),y=0;y<l;++y)if(g[y]!==x[y]){m=g[y],d=x[y];break}return m<d?-1:d<m?1:0};function Ma(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,$t(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:Ca(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ca(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function Ca(e,o,t,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(E,P){return p===1?E[P]:E.readUInt16BE(P*p)}var g;if(c){var x=-1;for(g=t;g<m;g++)if(l(e,g)===l(o,x===-1?0:g-x)){if(x===-1&&(x=g),g-x+1===d)return x*p}else x!==-1&&(g-=g-x),x=-1}else for(t+d>m&&(t=m-d),g=t;g>=0;g--){for(var y=!0,v=0;v<d;v++)if(l(e,g+v)!==l(o,v)){y=!1;break}if(y)return g}return-1}_.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};_.prototype.indexOf=function(o,t,r){return Ma(this,o,t,r,!0)};_.prototype.lastIndexOf=function(o,t,r){return Ma(this,o,t,r,!1)};function El(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if($t(d))return m;e[t+m]=d}return m}function Cl(e,o,t,r){return An(Gt(o,e.length-t),e,t,r)}function Pl(e,o,t,r){return An(Vl(o),e,t,r)}function Nl(e,o,t,r){return An(Wa(o),e,t,r)}function Dl(e,o,t,r){return An(Hl(o,e.length-t),e,t,r)}_.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return El(this,o,t,r);case"utf8":case"utf-8":return Cl(this,o,t,r);case"ascii":case"latin1":case"binary":return Pl(this,o,t,r);case"base64":return Nl(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Dl(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Rl(e,o,t){return o===0&&t===e.length?Bt.fromByteArray(e):Bt.fromByteArray(e.slice(o,t))}function Oa(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,g,x,y;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(y=(p&31)<<6|l&63,y>127&&(m=y));break;case 3:l=e[c+1],g=e[c+2],(l&192)===128&&(g&192)===128&&(y=(p&15)<<12|(l&63)<<6|g&63,y>2047&&(y<55296||y>57343)&&(m=y));break;case 4:l=e[c+1],g=e[c+2],x=e[c+3],(l&192)===128&&(g&192)===128&&(x&192)===128&&(y=(p&15)<<18|(l&63)<<12|(g&63)<<6|x&63,y>65535&&y<1114112&&(m=y))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return Ml(r)}var Pa=4096;function Ml(e){var o=e.length;if(o<=Pa)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=Pa));return t}function Ol(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function Fl(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function Bl(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=$l[e[p]];return c}function Ul(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}_.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,_.prototype),c};function V(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||V(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||V(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||V(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||V(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||V(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};_.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||V(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||V(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||V(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||V(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||V(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||V(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||V(o,4,this.length),lo.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||V(o,4,this.length),lo.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||V(o,8,this.length),lo.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||V(o,8,this.length),lo.read(this,o,!1,52,8)};function X(e,o,t,r,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;X(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;X(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);X(this,o,t,r,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);X(this,o,t,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||X(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Fa(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ba(e,o,t,r,c){return o=+o,t=t>>>0,c||Fa(e,o,t,4,34028234663852886e22,-34028234663852886e22),lo.write(e,o,t,r,23,4),t+4}_.prototype.writeFloatLE=function(o,t,r){return Ba(this,o,t,!0,r)};_.prototype.writeFloatBE=function(o,t,r){return Ba(this,o,t,!1,r)};function Ua(e,o,t,r,c){return o=+o,t=t>>>0,c||Fa(e,o,t,8,17976931348623157e292,-17976931348623157e292),lo.write(e,o,t,r,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,r){return Ua(this,o,t,!0,r)};_.prototype.writeDoubleBE=function(o,t,r){return Ua(this,o,t,!1,r)};_.prototype.copy=function(o,t,r,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};_.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%l]}return this};var Wl=/[^+/0-9A-Za-z-_]/g;function Gl(e){if(e=e.split("=")[0],e=e.trim().replace(Wl,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Gt(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Vl(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Hl(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function Wa(e){return Bt.toByteArray(Gl(e))}function An(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function _e(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function $t(e){return e!==e}var $l=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var ja=S((By,qa)=>{n();var F=qa.exports={},ue,ge;function qt(){throw new Error("setTimeout has not been defined")}function jt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?ue=setTimeout:ue=qt}catch(e){ue=qt}try{typeof clearTimeout=="function"?ge=clearTimeout:ge=jt}catch(e){ge=jt}})();function Va(e){if(ue===setTimeout)return setTimeout(e,0);if((ue===qt||!ue)&&setTimeout)return ue=setTimeout,setTimeout(e,0);try{return ue(e,0)}catch(o){try{return ue.call(null,e,0)}catch(t){return ue.call(this,e,0)}}}function ql(e){if(ge===clearTimeout)return clearTimeout(e);if((ge===jt||!ge)&&clearTimeout)return ge=clearTimeout,clearTimeout(e);try{return ge(e)}catch(o){try{return ge.call(null,e)}catch(t){return ge.call(this,e)}}}var ve=[],uo=!1,ze,kn=-1;function jl(){!uo||!ze||(uo=!1,ze.length?ve=ze.concat(ve):kn=-1,ve.length&&Ha())}function Ha(){if(!uo){var e=Va(jl);uo=!0;for(var o=ve.length;o;){for(ze=ve,ve=[];++kn<o;)ze&&ze[kn].run();kn=-1,o=ve.length}ze=null,uo=!1,ql(e)}}F.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];ve.push(new $a(e,o)),ve.length===1&&!uo&&Va(Ha)};function $a(e,o){this.fun=e,this.array=o}$a.prototype.run=function(){this.fun.apply(null,this.array)};F.title="browser";F.browser=!0;F.env={};F.argv=[];F.version="";F.versions={};function Ie(){}F.on=Ie;F.addListener=Ie;F.once=Ie;F.off=Ie;F.removeListener=Ie;F.removeAllListeners=Ie;F.emit=Ie;F.prependListener=Ie;F.prependOnceListener=Ie;F.listeners=function(e){return[]};F.binding=function(e){throw new Error("process.binding is not supported")};F.cwd=function(){return"/"};F.chdir=function(e){throw new Error("process.chdir is not supported")};F.umask=function(){return 0}});var a,s,zl,i,n=T(()=>{a=f(Ga()),s=f(ja()),zl=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=zl});var Ae,Ke=T(()=>{"use strict";n();Ae=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var zt={};$(zt,{css:()=>Ka,default:()=>Kl});var Ka,Kl,Kt=T(()=>{"use strict";n();Ka=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ka));Kl={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Za=T(()=>{"use strict";n()});var fe=T(()=>{"use strict";n()});var Ja=T(()=>{"use strict";n()});var Yt,Qa=T(()=>{"use strict";n();Yt=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(Yt||{})});var ei=T(()=>{"use strict";n()});var Zt=T(()=>{"use strict";n()});var oi=T(()=>{"use strict";n()});var Jt=T(()=>{"use strict";n()});var ni=T(()=>{"use strict";n()});var ti=T(()=>{"use strict";n()});var Xe,go,Me=T(()=>{"use strict";n();Xe=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),go=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var ri,rb,ai,ab,N=T(()=>{"use strict";n();Me();ri=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(ri||{}),rb=u(u({},go.WindowProviderRequestEnums),ri),ai=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(ai||{}),ab=u(u({},go.WindowProviderResponseEnums),ai)});var ii=T(()=>{"use strict";n()});var si=T(()=>{"use strict";n()});var Qt,Y=T(()=>{"use strict";n();Qt=(r=>(r.nft="nft",r.esdt="esdt",r.egld="egld",r))(Qt||{})});var ci=T(()=>{"use strict";n()});var pi=T(()=>{"use strict";n()});var mi=T(()=>{"use strict";n()});var B=T(()=>{"use strict";n();Jt();ni();ti();N();ii();si();Y();ci();pi();mi()});var fo,di,Sb,li,wb,_i,vb,Ib,Zl,To=T(()=>{"use strict";n();B();fo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:di,egldLabel:Sb}=fo["devnet"],{chainId:li,egldLabel:wb}=fo["testnet"],{chainId:_i,egldLabel:vb}=fo["mainnet"],Ib={["devnet"]:di,["testnet"]:li,["mainnet"]:_i},Zl={[di]:"devnet",[li]:"testnet",[_i]:"mainnet"}});var Ln=T(()=>{"use strict";n()});var Te,ui=T(()=>{"use strict";n();Te=require("@multiversx/sdk-web-wallet-provider")});var Ye,$o=T(()=>{"use strict";n();Ye=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var gi,fi,er,Pb,Nb,or=T(()=>{"use strict";n();$o();er=String((fi=(gi=Ye.safeWindow)==null?void 0:gi.navigator)==null?void 0:fi.userAgent),Pb=/^((?!chrome|android).)*safari/i.test(er),Nb=/firefox/i.test(er)&&/windows/i.test(er)});var En,Cn,H,Ze,Ti,Pn,hi,he,xi,I=T(()=>{"use strict";n();Za();fe();Ja();Qa();ei();Zt();oi();To();Ln();ui();or();En=5e4,Cn=1e9,H=18,Ze=4,Ti=1,Pn="logout",hi="login",he="0",xi="..."});var qo,Nn=T(()=>{"use strict";n();qo=()=>Date.now()/1e3});var yi=T(()=>{"use strict";n()});var bi=T(()=>{"use strict";n()});var nr=T(()=>{"use strict";n();Nn();yi();bi()});var tr={};$(tr,{clear:()=>o_,getItem:()=>Ql,localStorageKeys:()=>Oe,removeItem:()=>e_,setItem:()=>Jl});var Oe,Dn,Jl,Ql,e_,o_,ho=T(()=>{"use strict";n();nr();Oe={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Dn=typeof localStorage!="undefined",Jl=({key:e,data:o,expires:t})=>{!Dn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ql=e=>{if(!Dn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:qo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},e_=e=>{!Dn||localStorage.removeItem(String(e))},o_=()=>{!Dn||localStorage.clear()}});var rr={};$(rr,{clear:()=>Ii,getItem:()=>wi,removeItem:()=>vi,setItem:()=>Si,storage:()=>n_});var Si,wi,vi,Ii,n_,Ai=T(()=>{"use strict";n();Si=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},wi=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},vi=e=>sessionStorage.removeItem(String(e)),Ii=()=>sessionStorage.clear(),n_={setItem:Si,getItem:wi,removeItem:vi,clear:Ii}});var Je,xo=T(()=>{"use strict";n();ho();Ai();Je={session:rr,local:tr}});var ar,R,J,M=T(()=>{"use strict";n();ar=require("@reduxjs/toolkit");I();R=(0,ar.createAction)(Pn),J=(0,ar.createAction)(hi,e=>({payload:e}))});var sr,ki,Li,Rn,ir,Ei,Mn,t_,cr,pS,r_,a_,mS,dS,lS,i_,s_,On,Fn=T(()=>{"use strict";n();sr=require("@multiversx/sdk-core"),ki=require("@reduxjs/toolkit"),Li=require("redux-persist");I();xo();ho();M();Rn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:he},ir={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Rn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ei=(0,ki.createSlice)({name:"accountInfoSlice",initialState:ir,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new sr.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Rn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(Je.local.removeItem(Oe.loginExpiresAt),ir)),e.addCase(J,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new sr.Address(r).hex()}),e.addCase(Li.REHYDRATE,(o,t)=>{var g;if(!((g=t.payload)!=null&&g.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:ir.accounts,o.publicKey=d})}}),{setAccount:Mn,setAddress:t_,setAccountNonce:cr,setAccountShard:pS,setLedgerAccount:r_,updateLedgerAccount:a_,setWalletConnectAccount:mS,setIsAccountLoading:dS,setAccountLoadingError:lS,setWebsocketEvent:i_,setWebsocketBatchEvent:s_}=Ei.actions,On=Ei.reducer});function jo(){return new Date().setHours(new Date().getHours()+24)}function zo(e){Je.local.setItem({key:Oe.loginExpiresAt,data:e,expires:e})}var pr=T(()=>{"use strict";n();xo();ho()});var Pi,Ci,Ni,SS,c_,p_,Di,wS,m_,Ri,vS,IS,AS,Bn,Un=T(()=>{"use strict";n();Pi=require("@reduxjs/toolkit");pr();N();M();Ci={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Ni=(0,Pi.createSlice)({name:"loginInfoSlice",initialState:Ci,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>Ci),e.addCase(J,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,zo(jo())})}}),{setLoginMethod:SS,setWalletConnectLogin:c_,setLedgerLogin:p_,setTokenLogin:Di,setTokenLoginSignature:wS,setWalletLogin:m_,invalidateLoginSession:Ri,setLogoutRoute:vS,setIsWalletConnectV2Initialized:IS,setWebviewLogin:AS}=Ni.actions,Bn=Ni.reducer});var Oi,Mi,Fi,CS,d_,PS,l_,Wn,Gn=T(()=>{"use strict";n();Oi=require("@reduxjs/toolkit");M();Mi={},Fi=(0,Oi.createSlice)({name:"modalsSlice",initialState:Mi,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>Mi)}}),{setTxSubmittedModal:CS,setNotificationModal:d_,clearTxSubmittedModal:PS,clearNotificationModal:l_}=Fi.actions,Wn=Fi.reducer});var U,j=T(()=>{"use strict";n();Ke();U=()=>{if(!Ae())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var Bi=T(()=>{"use strict";n();j()});var Ui=T(()=>{"use strict";n();z()});var Wi=T(()=>{"use strict";n();$o()});var z=T(()=>{"use strict";n();Bi();Ui();j();Wi()});var Ko=T(()=>{"use strict";n();z()});var Vi=T(()=>{"use strict";n();Ko()});function Hi(e){return e[Math.floor(Math.random()*e.length)]}var $i=T(()=>{"use strict";n()});var mr=T(()=>{"use strict";n();Zt()});var ke=T(()=>{"use strict";n();Vi();$i();mr()});var qi,ji,zi,dr,u_,Ki,p0,m0,g_,Vn,Hn=T(()=>{"use strict";n();qi=require("@reduxjs/toolkit"),ji=f(require("lodash.omit")),zi=require("redux-persist");Ln();M();ke();dr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},u_={network:dr},Ki=(0,qi.createSlice)({name:"appConfig",initialState:u_,reducers:{initializeNetworkConfig:(e,o)=>{let t=Hi(o.payload.walletConnectV2RelayAddresses),r=(0,ji.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(u(u({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(zi.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:p0,updateNetworkConfig:m0,setCustomWalletAddress:g_}=Ki.actions,Vn=Ki.reducer});var Xi,lr,Yi,f0,T0,h0,$n,qn=T(()=>{"use strict";n();Xi=require("@reduxjs/toolkit");B();M();lr={isSigning:!1,signedSessions:{}},Yi=(0,Xi.createSlice)({name:"signedMessageInfoSliceState",initialState:lr,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>lr},extraReducers:e=>{e.addCase(R,()=>lr)}}),{setSignSession:f0,clearSignedMessageInfo:T0,setSignSessionState:h0}=Yi.actions,$n=Yi.reducer});var Ji,Qi,Zi,es,f_,T_,I0,h_,jn,zn=T(()=>{"use strict";n();Ji=require("@reduxjs/toolkit"),Qi=require("redux-persist");B();Nn();M();Zi={customToasts:[],transactionToasts:[]},es=(0,Ji.createSlice)({name:"toastsSlice",initialState:Zi,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=w(u(u({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:qo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>Zi),e.addCase(Qi.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:f_,removeCustomToast:T_,addTransactionToast:I0,removeTransactionToast:h_}=es.actions,jn=es.reducer});var os,ur,gr,fr,x_,_r,ns,E0,y_,Tr,Kn,Xn=T(()=>{"use strict";n();os=require("@reduxjs/toolkit");M();ur="Transaction failed",gr="Transaction successful",fr="Processing transaction",x_="Transaction submitted",_r={},ns=(0,os.createSlice)({name:"transactionsInfo",initialState:_r,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||ur,successMessage:(r==null?void 0:r.successMessage)||gr,processingMessage:(r==null?void 0:r.processingMessage)||fr,submittedMessage:(r==null?void 0:r.submittedMessage)||x_,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>_r},extraReducers:e=>{e.addCase(R,()=>_r)}}),{clearTransactionsInfo:E0,setTransactionsDisplayInfo:y_,clearTransactionsInfoForSessionId:Tr}=ns.actions,Kn=ns.reducer});function bo(e){return e!=null&&(C_(e)||M_(e))}function So(e){return e!=null&&(P_(e)||O_(e))}function wo(e){return e!=null&&(N_(e)||F_(e))}function ts(e){return e!=null&&(D_(e)||B_(e))}function hr(e){return e!=null&&R_(e)}function C_(e){return e!=null&&b_.includes(e)}function P_(e){return e!=null&&S_.includes(e)}function N_(e){return e!=null&&w_.includes(e)}function D_(e){return e!=null&&v_.includes(e)}function R_(e){return e!=null&&I_.includes(e)}function M_(e){return e!=null&&A_.includes(e)}function O_(e){return e!=null&&k_.includes(e)}function F_(e){return e!=null&&L_.includes(e)}function B_(e){return e!=null&&E_.includes(e)}var b_,S_,w_,v_,I_,A_,k_,L_,E_,vo=T(()=>{"use strict";n();N();b_=["sent"],S_=["success"],w_=["fail","cancelled","timedOut"],v_=["invalid"],I_=["timedOut"],A_=["pending"],k_=["success"],L_=["fail","invalid"],E_=["not executed"]});var rs,as,Xo,U_,is,ss,cs,W_,Yn,G_,V_,B0,H_,Yo,xr,U0,Zn,Jn=T(()=>{"use strict";n();rs=require("@reduxjs/toolkit"),as=require("redux-persist");N();vo();M();Xo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},U_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},is=(0,rs.createSlice)({name:"transactionsSlice",initialState:Xo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,g;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},U_),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((g=e==null?void 0:e.transactionsToSign)==null?void 0:g.sessionId)===t&&(e.transactionsToSign=Xo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var g,x,y,v,E,P,G,ne;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(x=(g=e.signedTransactions)==null?void 0:g[t])==null?void 0:x.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(D=>D.hash===p?w(u(u({},m!=null?m:{}),D),{status:r,errorMessage:c,inTransit:d}):D);let $e=(v=(y=e.signedTransactions[t])==null?void 0:y.transactions)==null?void 0:v.every(D=>So(D.status)),Re=(P=(E=e.signedTransactions[t])==null?void 0:E.transactions)==null?void 0:P.some(D=>wo(D.status)),be=(ne=(G=e.signedTransactions[t])==null?void 0:G.transactions)==null?void 0:ne.every(D=>ts(D.status));$e&&(e.signedTransactions[t].status="success"),Re&&(e.signedTransactions[t].status="fail"),be&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Xo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Xo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(R,()=>Xo),e.addCase(as.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((d,[l,g])=>{let x=new Date(l),y=new Date;return y.setHours(y.getHours()+5),y-x>0||(d[l]=g),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:ss,updateSignedTransactions:cs,setTransactionsToSign:W_,clearAllTransactionsToSign:Yn,clearAllSignedTransactions:G_,clearSignedTransaction:V_,clearTransactionToSign:B0,setSignTransactionsError:H_,setSignTransactionsCancelMessage:Yo,moveTransactionsToSignedState:xr,updateSignedTransactionsCustomTransactionInformation:U0}=is.actions,Zn=is.reducer});var ps,yr,ms,H0,$0,$_,q0,Qn,et=T(()=>{"use strict";n();ps=require("@reduxjs/toolkit");M();yr={},ms=(0,ps.createSlice)({name:"batchTransactionsSlice",initialState:yr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>yr},extraReducers:e=>{e.addCase(R,()=>yr)}}),{setBatchTransactions:H0,updateBatchTransactions:$0,clearBatchTransactions:$_,clearAllBatchTransactions:q0}=ms.actions,Qn=ms.reducer});var ls,ds,_s,X0,us,br=T(()=>{"use strict";n();ls=require("@reduxjs/toolkit");M();ds={},_s=(0,ls.createSlice)({name:"dappConfigSlice",initialState:ds,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>ds)}}),{setDappConfig:X0}=_s.actions,us=_s.reducer});var C=T(()=>{"use strict";n();Fn();Un();Gn();Hn();qn();zn();Xn();Jn();et();br()});var Sr=T(()=>{"use strict";n()});var Ts,K_,X_,Qe,tt=T(()=>{"use strict";n();Ts=require("@reduxjs/toolkit");Sr();Fn();et();br();Un();Gn();Hn();qn();zn();Xn();Jn();K_={["account"]:On,["dappConfig"]:us,["loginInfo"]:Bn,["modals"]:Wn,["networkConfig"]:Vn,["signedMessageInfo"]:$n,["toasts"]:jn,["transactionsInfo"]:Kn,["transactions"]:Zn,["batchTransactions"]:Qn},X_=(e={})=>(0,Ts.combineReducers)(u(u({},K_),e)),Qe=X_});var bs={};$(bs,{default:()=>du,sessionStorageReducers:()=>wr});function Le(e,o=[]){return{key:e,version:1,storage:xs.default,blacklist:o}}var Z,hs,xs,Y_,Zo,Z_,J_,Q_,eu,ou,nu,tu,ru,au,iu,ys,su,wr,cu,pu,mu,du,Ss=T(()=>{"use strict";n();Z=require("redux-persist"),hs=f(require("redux-persist/lib/storage")),xs=f(require("redux-persist/lib/storage/session"));tt();C();Fn();et();Un();Gn();Hn();qn();zn();Xn();Jn();Sr();Y_={persistReducersStorageType:"localStorage"},Zo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Z_=Le(Zo["account"]),J_=Le(Zo["loginInfo"]),Q_=Le(Zo["modals"]),eu=Le(Zo["networkConfig"]),ou={2:e=>w(u({},e),{networkConfig:dr})};nu=Le("sdk-dapp-transactionsInfo"),tu=Le("sdk-dapp-transactions",["transactionsToSign"]),ru=Le("sdk-dapp-batchTransactions",["batchTransactions"]),au=Le("sdk-dapp-toasts"),iu=Le("sdk-dapp-signedMessageInfo"),ys={key:"sdk-dapp-store",version:2,storage:hs.default,whitelist:Object.keys(Zo),migrate:(0,Z.createMigrate)(ou,{debug:!1})},su=w(u({},ys),{whitelist:[]}),wr={["toasts"]:(0,Z.persistReducer)(au,jn),["transactions"]:(0,Z.persistReducer)(tu,Zn),["transactionsInfo"]:(0,Z.persistReducer)(nu,Kn),["batchTransactions"]:(0,Z.persistReducer)(ru,Qn),["signedMessageInfo"]:(0,Z.persistReducer)(iu,$n)},cu=w(u({},wr),{["account"]:(0,Z.persistReducer)(Z_,On),["loginInfo"]:(0,Z.persistReducer)(J_,Bn),["modals"]:(0,Z.persistReducer)(Q_,Wn),["networkConfig"]:(0,Z.persistReducer)(eu,Vn)}),pu=Y_.persistReducersStorageType==="localStorage",mu=pu?(0,Z.persistReducer)(ys,Qe(wr)):(0,Z.persistReducer)(su,Qe(cu)),du=mu});var ws={};$(ws,{default:()=>lu});var lu,vs=T(()=>{"use strict";n();tt();lu=Qe()});var Is={};$(Is,{default:()=>uu});var re,_u,uu,As=T(()=>{"use strict";n();re=require("redux-persist"),_u=[re.FLUSH,re.REHYDRATE,re.PAUSE,re.PERSIST,re.PURGE,re.REGISTER],uu=_u});var Es={};$(Es,{default:()=>Ls});function Ls(e){return(0,ks.persistStore)(e)}var ks,Cs=T(()=>{"use strict";n();ks=require("redux-persist")});var Hr={};$(Hr,{css:()=>$c,default:()=>Ng});var $c,Ng,$r=T(()=>{"use strict";n();$c=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($c));Ng={copy:"dapp-core-component__copyButton-styles__copy"}});var jr={};$(jr,{css:()=>zc,default:()=>Rg});var zc,Rg,zr=T(()=>{"use strict";n();zc=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zc));Rg={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var cp=S((pM,sp)=>{n();var Qg=typeof i=="object"&&i&&i.Object===Object&&i;sp.exports=Qg});var sn=S((mM,pp)=>{n();var ef=cp(),of=typeof self=="object"&&self&&self.Object===Object&&self,nf=ef||of||Function("return this")();pp.exports=nf});var Yr=S((dM,mp)=>{n();var tf=sn(),rf=tf.Symbol;mp.exports=rf});var up=S((lM,_p)=>{n();var dp=Yr(),lp=Object.prototype,af=lp.hasOwnProperty,sf=lp.toString,cn=dp?dp.toStringTag:void 0;function cf(e){var o=af.call(e,cn),t=e[cn];try{e[cn]=void 0;var r=!0}catch(p){}var c=sf.call(e);return r&&(o?e[cn]=t:delete e[cn]),c}_p.exports=cf});var fp=S((_M,gp)=>{n();var pf=Object.prototype,mf=pf.toString;function df(e){return mf.call(e)}gp.exports=df});var Zr=S((uM,xp)=>{n();var Tp=Yr(),lf=up(),_f=fp(),uf="[object Null]",gf="[object Undefined]",hp=Tp?Tp.toStringTag:void 0;function ff(e){return e==null?e===void 0?gf:uf:hp&&hp in Object(e)?lf(e):_f(e)}xp.exports=ff});var bp=S((gM,yp)=>{n();var Tf=Array.isArray;yp.exports=Tf});var wp=S((fM,Sp)=>{n();function hf(e){return e!=null&&typeof e=="object"}Sp.exports=hf});var Ip=S((TM,vp)=>{n();var xf=Zr(),yf=bp(),bf=wp(),Sf="[object String]";function wf(e){return typeof e=="string"||!yf(e)&&bf(e)&&xf(e)==Sf}vp.exports=wf});var kt=S((fO,Cp)=>{n();function Vf(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Cp.exports=Vf});var Np=S((TO,Pp)=>{n();var Hf=Zr(),$f=kt(),qf="[object AsyncFunction]",jf="[object Function]",zf="[object GeneratorFunction]",Kf="[object Proxy]";function Xf(e){if(!$f(e))return!1;var o=Hf(e);return o==jf||o==zf||o==qf||o==Kf}Pp.exports=Xf});var Rp=S((hO,Dp)=>{n();var Yf=sn(),Zf=Yf["__core-js_shared__"];Dp.exports=Zf});var Fp=S((xO,Op)=>{n();var oa=Rp(),Mp=function(){var e=/[^.]+$/.exec(oa&&oa.keys&&oa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Jf(e){return!!Mp&&Mp in e}Op.exports=Jf});var Up=S((yO,Bp)=>{n();var Qf=Function.prototype,eT=Qf.toString;function oT(e){if(e!=null){try{return eT.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Bp.exports=oT});var Gp=S((bO,Wp)=>{n();var nT=Np(),tT=Fp(),rT=kt(),aT=Up(),iT=/[\\^$.*+?()[\]{}|]/g,sT=/^\[object .+?Constructor\]$/,cT=Function.prototype,pT=Object.prototype,mT=cT.toString,dT=pT.hasOwnProperty,lT=RegExp("^"+mT.call(dT).replace(iT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _T(e){if(!rT(e)||tT(e))return!1;var o=nT(e)?lT:sT;return o.test(aT(e))}Wp.exports=_T});var Hp=S((SO,Vp)=>{n();function uT(e,o){return e==null?void 0:e[o]}Vp.exports=uT});var Lt=S((wO,$p)=>{n();var gT=Gp(),fT=Hp();function TT(e,o){var t=fT(e,o);return gT(t)?t:void 0}$p.exports=TT});var pn=S((vO,qp)=>{n();var hT=Lt(),xT=hT(Object,"create");qp.exports=xT});var Kp=S((IO,zp)=>{n();var jp=pn();function yT(){this.__data__=jp?jp(null):{},this.size=0}zp.exports=yT});var Yp=S((AO,Xp)=>{n();function bT(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Xp.exports=bT});var Jp=S((kO,Zp)=>{n();var ST=pn(),wT="__lodash_hash_undefined__",vT=Object.prototype,IT=vT.hasOwnProperty;function AT(e){var o=this.__data__;if(ST){var t=o[e];return t===wT?void 0:t}return IT.call(o,e)?o[e]:void 0}Zp.exports=AT});var em=S((LO,Qp)=>{n();var kT=pn(),LT=Object.prototype,ET=LT.hasOwnProperty;function CT(e){var o=this.__data__;return kT?o[e]!==void 0:ET.call(o,e)}Qp.exports=CT});var nm=S((EO,om)=>{n();var PT=pn(),NT="__lodash_hash_undefined__";function DT(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=PT&&o===void 0?NT:o,this}om.exports=DT});var rm=S((CO,tm)=>{n();var RT=Kp(),MT=Yp(),OT=Jp(),FT=em(),BT=nm();function No(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}No.prototype.clear=RT;No.prototype.delete=MT;No.prototype.get=OT;No.prototype.has=FT;No.prototype.set=BT;tm.exports=No});var im=S((PO,am)=>{n();function UT(){this.__data__=[],this.size=0}am.exports=UT});var cm=S((NO,sm)=>{n();function WT(e,o){return e===o||e!==e&&o!==o}sm.exports=WT});var mn=S((DO,pm)=>{n();var GT=cm();function VT(e,o){for(var t=e.length;t--;)if(GT(e[t][0],o))return t;return-1}pm.exports=VT});var dm=S((RO,mm)=>{n();var HT=mn(),$T=Array.prototype,qT=$T.splice;function jT(e){var o=this.__data__,t=HT(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():qT.call(o,t,1),--this.size,!0}mm.exports=jT});var _m=S((MO,lm)=>{n();var zT=mn();function KT(e){var o=this.__data__,t=zT(o,e);return t<0?void 0:o[t][1]}lm.exports=KT});var gm=S((OO,um)=>{n();var XT=mn();function YT(e){return XT(this.__data__,e)>-1}um.exports=YT});var Tm=S((FO,fm)=>{n();var ZT=mn();function JT(e,o){var t=this.__data__,r=ZT(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}fm.exports=JT});var xm=S((BO,hm)=>{n();var QT=im(),eh=dm(),oh=_m(),nh=gm(),th=Tm();function Do(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Do.prototype.clear=QT;Do.prototype.delete=eh;Do.prototype.get=oh;Do.prototype.has=nh;Do.prototype.set=th;hm.exports=Do});var bm=S((UO,ym)=>{n();var rh=Lt(),ah=sn(),ih=rh(ah,"Map");ym.exports=ih});var vm=S((WO,wm)=>{n();var Sm=rm(),sh=xm(),ch=bm();function ph(){this.size=0,this.__data__={hash:new Sm,map:new(ch||sh),string:new Sm}}wm.exports=ph});var Am=S((GO,Im)=>{n();function mh(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Im.exports=mh});var dn=S((VO,km)=>{n();var dh=Am();function lh(e,o){var t=e.__data__;return dh(o)?t[typeof o=="string"?"string":"hash"]:t.map}km.exports=lh});var Em=S((HO,Lm)=>{n();var _h=dn();function uh(e){var o=_h(this,e).delete(e);return this.size-=o?1:0,o}Lm.exports=uh});var Pm=S(($O,Cm)=>{n();var gh=dn();function fh(e){return gh(this,e).get(e)}Cm.exports=fh});var Dm=S((qO,Nm)=>{n();var Th=dn();function hh(e){return Th(this,e).has(e)}Nm.exports=hh});var Mm=S((jO,Rm)=>{n();var xh=dn();function yh(e,o){var t=xh(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}Rm.exports=yh});var Fm=S((zO,Om)=>{n();var bh=vm(),Sh=Em(),wh=Pm(),vh=Dm(),Ih=Mm();function Ro(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Ro.prototype.clear=bh;Ro.prototype.delete=Sh;Ro.prototype.get=wh;Ro.prototype.has=vh;Ro.prototype.set=Ih;Om.exports=Ro});var Um=S((KO,Bm)=>{n();var Ah="__lodash_hash_undefined__";function kh(e){return this.__data__.set(e,Ah),this}Bm.exports=kh});var Gm=S((XO,Wm)=>{n();function Lh(e){return this.__data__.has(e)}Wm.exports=Lh});var Hm=S((YO,Vm)=>{n();var Eh=Fm(),Ch=Um(),Ph=Gm();function Et(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new Eh;++o<t;)this.add(e[o])}Et.prototype.add=Et.prototype.push=Ch;Et.prototype.has=Ph;Vm.exports=Et});var qm=S((ZO,$m)=>{n();function Nh(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}$m.exports=Nh});var zm=S((JO,jm)=>{n();function Dh(e){return e!==e}jm.exports=Dh});var Xm=S((QO,Km)=>{n();function Rh(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Km.exports=Rh});var Zm=S((e6,Ym)=>{n();var Mh=qm(),Oh=zm(),Fh=Xm();function Bh(e,o,t){return o===o?Fh(e,o,t):Mh(e,Oh,t)}Ym.exports=Bh});var Qm=S((o6,Jm)=>{n();var Uh=Zm();function Wh(e,o){var t=e==null?0:e.length;return!!t&&Uh(e,o,0)>-1}Jm.exports=Wh});var od=S((n6,ed)=>{n();function Gh(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}ed.exports=Gh});var td=S((t6,nd)=>{n();function Vh(e,o){return e.has(o)}nd.exports=Vh});var ad=S((r6,rd)=>{n();var Hh=Lt(),$h=sn(),qh=Hh($h,"Set");rd.exports=qh});var sd=S((a6,id)=>{n();function jh(){}id.exports=jh});var na=S((i6,cd)=>{n();function zh(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}cd.exports=zh});var md=S((s6,pd)=>{n();var ta=ad(),Kh=sd(),Xh=na(),Yh=1/0,Zh=ta&&1/Xh(new ta([,-0]))[1]==Yh?function(e){return new ta(e)}:Kh;pd.exports=Zh});var ld=S((c6,dd)=>{n();var Jh=Hm(),Qh=Qm(),ex=od(),ox=td(),nx=md(),tx=na(),rx=200;function ax(e,o,t){var r=-1,c=Qh,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=ex;else if(p>=rx){var g=o?null:nx(e);if(g)return tx(g);m=!1,c=ox,l=new Jh}else l=o?[]:d;e:for(;++r<p;){var x=e[r],y=o?o(x):x;if(x=t||x!==0?x:0,m&&y===y){for(var v=l.length;v--;)if(l[v]===y)continue e;o&&l.push(y),d.push(x)}else c(l,y,t)||(l!==d&&l.push(y),d.push(x))}return d}dd.exports=ax});var ud=S((p6,_d)=>{n();var ix=ld();function sx(e){return e&&e.length?ix(e):[]}_d.exports=sx});var Ce={};$(Ce,{css:()=>Ad,default:()=>Hx});var Ad,Hx,Pe=T(()=>{"use strict";n();Ad=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ad));Hx={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var la={};$(la,{css:()=>Bd,default:()=>py});var Bd,py,_a=T(()=>{"use strict";n();Bd=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bd));py={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var gn={};$(gn,{css:()=>Gd,default:()=>dy});var Gd,dy,fn=T(()=>{"use strict";n();Gd=`.dapp-core-component__transactionDetails-styles__title {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gd));dy={title:"dapp-core-component__transactionDetails-styles__title",status:"dapp-core-component__transactionDetails-styles__status",container:"dapp-core-component__transactionDetails-styles__container",icon:"dapp-core-component__transactionDetails-styles__icon",trim:"dapp-core-component__transactionDetails-styles__trim"}});var fa={};$(fa,{css:()=>$d,default:()=>fy});var $d,fy,Ta=T(()=>{"use strict";n();$d=`.dapp-core-component__formatAmountStyles__int-amount {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__decimals {
  color: inherit;
}

.dapp-core-component__formatAmountStyles__symbol {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($d));fy={"int-amount":"dapp-core-component__formatAmountStyles__int-amount",intAmount:"dapp-core-component__formatAmountStyles__int-amount",decimals:"dapp-core-component__formatAmountStyles__decimals",symbol:"dapp-core-component__formatAmountStyles__symbol"}});var Tn={};$(Tn,{css:()=>jd,default:()=>by});var jd,by,hn=T(()=>{"use strict";n();jd=`.dapp-core-component__styles__transaction-action-collection {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jd));by={"transaction-action-collection":"dapp-core-component__styles__transaction-action-collection",transactionActionCollection:"dapp-core-component__styles__transaction-action-collection","transaction-action-nft":"dapp-core-component__styles__transaction-action-nft",transactionActionNft:"dapp-core-component__styles__transaction-action-nft",explorer:"dapp-core-component__styles__explorer",data:"dapp-core-component__styles__data",truncate:"dapp-core-component__styles__truncate"}});var yn={};$(yn,{css:()=>Qd,default:()=>Ay});var Qd,Ay,bn=T(()=>{"use strict";n();Qd=`.dapp-core-component__transactionsTable-styles__transactions-table {
  border: none;
  box-shadow: 0 0.75rem 1.875rem 0 rgba(90, 97, 105, 0.05);
  border-radius: 0.75rem;
  color: #000;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__transactions-table-header {
  border-bottom: none;
  border-radius: 0.75rem;
  padding: 1.75rem 2rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__transactions-table-header h6 {
  margin-bottom: 0;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper {
  overflow-x: auto;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table {
  white-space: nowrap;
  max-height: 500px;
  width: 100%;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table tr {
  border-top: 1px solid #e2e2e2;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table th {
  white-space: nowrap;
  padding: 0.75rem;
  background-color: #fbfbfb;
  border: 0;
  vertical-align: middle;
  font-weight: 400;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table th:first-child {
  padding-left: 2rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table td {
  white-space: nowrap;
  width: 0.1%;
  white-space: nowrap;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table td:first-child {
  padding-left: 1.25rem;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell {
  padding: 0;
  margin: 0.75rem;
  font-variant-numeric: slashed-zero;
  color: #000;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell a {
  color: #1f43f4;
  font-weight: 500;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin {
  margin-left: 0;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=left] span,
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=right] span {
  font-size: 1rem;
  color: #1f43f4;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-margin [class*=ellipsis] {
  color: #1f43f4;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-overflow {
  max-width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-link {
  position: relative;
  text-decoration: none;
}
.dapp-core-component__transactionsTable-styles__transactions-table .dapp-core-component__transactionsTable-styles__table-wrapper .dapp-core-component__transactionsTable-styles__table .dapp-core-component__transactionsTable-styles__transaction-cell-font-small {
  font-size: 0.75rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qd));Ay={"transactions-table":"dapp-core-component__transactionsTable-styles__transactions-table",transactionsTable:"dapp-core-component__transactionsTable-styles__transactions-table","transactions-table-header":"dapp-core-component__transactionsTable-styles__transactions-table-header",transactionsTableHeader:"dapp-core-component__transactionsTable-styles__transactions-table-header","table-wrapper":"dapp-core-component__transactionsTable-styles__table-wrapper",tableWrapper:"dapp-core-component__transactionsTable-styles__table-wrapper",table:"dapp-core-component__transactionsTable-styles__table","transaction-cell":"dapp-core-component__transactionsTable-styles__transaction-cell",transactionCell:"dapp-core-component__transactionsTable-styles__transaction-cell","transaction-cell-margin":"dapp-core-component__transactionsTable-styles__transaction-cell-margin",transactionCellMargin:"dapp-core-component__transactionsTable-styles__transaction-cell-margin","transaction-cell-overflow":"dapp-core-component__transactionsTable-styles__transaction-cell-overflow",transactionCellOverflow:"dapp-core-component__transactionsTable-styles__transaction-cell-overflow","transaction-cell-link":"dapp-core-component__transactionsTable-styles__transaction-cell-link",transactionCellLink:"dapp-core-component__transactionsTable-styles__transaction-cell-link","transaction-cell-font-small":"dapp-core-component__transactionsTable-styles__transaction-cell-font-small",transactionCellFontSmall:"dapp-core-component__transactionsTable-styles__transaction-cell-font-small"}});var ya={};$(ya,{css:()=>rl,default:()=>Ey});var rl,Ey,ba=T(()=>{"use strict";n();rl=`.dapp-core-component__transactionToast-styles__content {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rl));Ey={content:"dapp-core-component__transactionToast-styles__content",left:"dapp-core-component__transactionToast-styles__left",warning:"dapp-core-component__transactionToast-styles__warning",danger:"dapp-core-component__transactionToast-styles__danger",success:"dapp-core-component__transactionToast-styles__success",icon:"dapp-core-component__transactionToast-styles__icon",svg:"dapp-core-component__transactionToast-styles__svg",right:"dapp-core-component__transactionToast-styles__right",heading:"dapp-core-component__transactionToast-styles__heading",title:"dapp-core-component__transactionToast-styles__title",close:"dapp-core-component__transactionToast-styles__close",footer:"dapp-core-component__transactionToast-styles__footer"}});var Dy={};$(Dy,{TransactionToastFooter:()=>Ny});module.exports=O(Dy);n();var Sn=f(require("react"));n();var Ya=f(require("react"));n();var Ho=f(require("react"));n();Ke();var za=()=>!Ae();var Xl=()=>h(void 0,null,function*(){return yield Promise.resolve().then(()=>(Kt(),zt))}),Yl=()=>(Kt(),O(zt)).default,Xt=za();function Xa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=Ho.default.useState(Xt?void 0:Yl()),[p,m]=Ho.default.useState(Xt||t==null?void 0:t()),d=()=>h(this,null,function*(){(e?e():Xl()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Ho.useEffect)(()=>{Xt&&d()},[]),{globalStyles:r,styles:p}}function L(e,o){return t=>{let{globalStyles:r,styles:c}=Xa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return Ya.default.createElement(e,w(u({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();n();var Os=require("react"),Io=require("react-redux");n();var vr=require("@reduxjs/toolkit"),Rs=require("react-redux/lib/utils/Subscription");C();n();var gs=f(require("lodash.throttle"));I();C();pr();xo();ho();var q_=[Pn],ot=!1,j_=(0,gs.default)(()=>{zo(jo())},5e3),fs=e=>o=>t=>{if(q_.includes(t.type))return o(t);let r=e.getState(),c=Je.local.getItem(Oe.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return zo(jo());let m=Date.now();return c-m<0&&!ot?setTimeout(()=>{ot=!0,e.dispatch(Ri())},1e3):(ot&&(ot=!1),j_()),o(t)};n();n();function nt(){return typeof sessionStorage!="undefined"}var Ps=nt()?(Ss(),O(bs)).default:(vs(),O(ws)).default,Ns=nt()?(As(),O(Is)).default:[],Ds=nt()?(Cs(),O(Es)).default:e=>e;tt();var A=(0,vr.configureStore)({reducer:Ps,middleware:e=>e({serializableCheck:{ignoredActions:[...Ns,cr.type,Mn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(fs)}),Ms=(0,Rs.createSubscription)(A),zw=Ds(A),Kw=(0,vr.configureStore)({reducer:Qe});var gu={store:A,subscription:Ms},Ir=(0,Os.createContext)(gu),Jw=(0,Io.createStoreHook)(Ir),K=(0,Io.createDispatchHook)(Ir),k=(0,Io.createSelectorHook)(Ir);n();n();C();n();var Fs=f(require("lodash.isequal")),rt=require("reselect"),b=(0,rt.createSelectorCreator)(rt.defaultMemoize,Fs.default);var xe=e=>e.account,eo=b(xe,e=>e.address),oo=b(xe,eo,(e,o)=>o in e.accounts?e.accounts[o]:Rn),fu=b(xe,oo,(e,o)=>{let c=e,{accounts:t}=c,r=Se(c,["accounts"]);return w(u({},r),{address:o.address,account:o})}),tv=b(oo,e=>e.balance),Tu=b(oo,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),rv=b(xe,e=>e.shard),hu=b(xe,e=>e.ledgerAccount),av=b(xe,e=>e.walletConnectAccount),iv=b(xe,e=>e.isAccountLoading),sv=b(xe,e=>e.accountLoadingError),xu=b(xe,e=>e.websocketEvent),yu=b(xe,e=>e.websocketBatchEvent);n();var Bs=e=>e.dappConfig,mv=b(Bs,e=>e.shouldUseWebViewProvider);n();var Q=e=>e.loginInfo,bu=b(Q,e=>e.loginMethod),at=b(Q,eo,(e,o)=>Boolean(o)),uv=b(Q,e=>e.walletConnectLogin),Su=b(Q,e=>e.ledgerLogin),wu=b(Q,e=>e.walletLogin),gv=b(Q,e=>e.isLoginSessionInvalid),Ar=b(Q,e=>e.tokenLogin),Us=b(Q,e=>e.logoutRoute),vu=b(Q,e=>e.isWalletConnectV2Initialized);n();var Ws=e=>e.modals,hv=b(Ws,e=>e.txSubmittedModal),Iu=b(Ws,e=>e.notificationModal);n();var se=e=>e.networkConfig,it=b(se,e=>e.network.chainId),Au=b(se,e=>e.network.roundDuration),bv=b(se,e=>e.network.walletConnectBridgeAddress),ku=b(se,e=>e.network.walletConnectV2RelayAddress),Lu=b(se,e=>e.network.walletConnectV2ProjectId),Eu=b(se,e=>e.network.walletConnectV2Options),Cu=b(se,e=>e.network.walletConnectDeepLink),ee=b(se,e=>e.network),Gs=b(ee,e=>e.apiAddress),Vs=b(ee,e=>e.explorerAddress),Hs=b(ee,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Pu=b(ee,e=>e.xAliasAddress),kr=b(ee,e=>e.egldLabel);n();var st=e=>e.signedMessageInfo,vv=b(st,e=>e.isSigning),Iv=b(st,e=>e.errorMessage),Av=b(st,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),kv=b(st,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var $s=e=>e.toasts,Nu=b($s,e=>e.customToasts),qs=b($s,e=>e.transactionToasts);n();C();var js={errorMessage:ur,successMessage:gr,processingMessage:fr},zs=e=>e.transactionsInfo,Du=b(zs,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||js);n();n();var ye=require("@multiversx/sdk-core");I();n();var Er=require("@multiversx/sdk-core/out");n();n();function Jo(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function ct(e){return Jo(e)?atob(e):e}n();n();function Lr(e){for(let o=0;o<e.length;o++)if(e.charCodeAt(o)>127)return!1;return!0}function pt(e){let o=e;try{let t=a.Buffer.from(e,"hex").toString();Lr(t)&&t.length>1&&(o=t)}catch(t){}return o}n();n();var Ks=e=>{let o=e!=null?e:"";return Jo(o)?Er.TransactionPayload.fromEncoded(o):new Er.TransactionPayload(o)};n();I();var Qo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Yt).some(t=>e.startsWith(t)):!1;function mt(e){var r,c,p;let o=u({},e);Qo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ye.Transaction(u(u(w(u(w(u({value:o.value.valueOf(),data:Ks(o.data),nonce:o.nonce.valueOf(),receiver:new ye.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ye.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:En,gasPrice:(c=o.gasPrice.valueOf())!=null?c:Cn,chainID:o.chainID.valueOf(),version:new ye.TransactionVersion((p=o.version)!=null?p:Ti)}),o.options?{options:new ye.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ye.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();I();n();n();n();var Ou=require("@multiversx/sdk-core/out");n();I();n();var en=require("@multiversx/sdk-core");B();n();var Xs=require("@multiversx/sdk-core");function Fu(e){try{let o=new Xs.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Ao(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Fu(e)}var Bu=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function Ys(e,o,t=""){if(!Ao(e))return!1;if(new en.Address(e).isContractAddress())return!0;let p=Zs({receiver:e,data:t});return p?new en.Address(p).isContractAddress()||Gu(e,o,t):!1}var Uu=e=>e.toLowerCase().match(/[0-9a-f]/g),Wu=e=>e.length%2===0;function Gu(e,o,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[c,...p]=r,m=o!=null&&e!=null&&e===o,d=Bu.includes(c),l=p.every(g=>Uu(g)&&Wu(g));return m&&d&&l}function Zs({receiver:e,data:o}){try{if(!o)return e;let t=Jo(o)?en.TransactionPayload.fromEncoded(o).toString():o,r=Vu(t),c=t.split("@");return r>-1?c[r]:e}catch(t){console.log(t);return}}function Vu(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var Pr=require("@multiversx/sdk-core"),dt=f(require("bignumber.js"));N();var Cr={tokenId:"",amount:""},Js=e=>e.split("@").map((p,m)=>[2,3].includes(m)?p:pt(p));function Nr(e){if(!e)return Cr;let o=e.startsWith("ESDTTransfer"),t=e.startsWith("ESDTNFTTransfer")&&e.includes("@"),r=e.startsWith("ESDTNFTBurn")&&e.includes("@");if(o){let[,c,p]=e.split("@");try{let m=a.Buffer.from(c,"hex").toString("ascii");if(!m)return Cr;let d=new dt.default("0x"+p.replace("0x","")).toString(10);return{tokenId:m,amount:d}}catch(m){console.error("Error getting token from transaction data",m)}}if(t)try{let[,c,p,m,d]=Js(e);if([c,p,m,d].every(l=>Boolean(l))&&Ao(new Pr.Address(d).bech32()))return{tokenId:`${c}-${p}`,amount:new dt.default(m,16).toString(10),collection:c,nonce:p,receiver:new Pr.Address(d).bech32()}}catch(c){}if(r)try{let[,c,p,m]=Js(e);if([c,p,m].every(d=>Boolean(d)))return{tokenId:`${c}-${p}`,amount:new dt.default(m,16).toString(10),collection:c,nonce:p}}catch(c){}return Cr}n();n();n();var ce="accounts";var lt="blocks",ec="code",oc="collections";var nc="contracts";var tc="identities";var rc="locked-accounts",ac="logs",ic="miniblocks";var _t="nfts",sc="nodes",Dr="providers",cc="roles",Rr="sc-results";var no="tokens";var oe="transactions";var ae={shard:e=>`/${lt}?shard=${e}`,receiverShard:e=>`/${oe}?receivershard=${e}`,senderShard:e=>`/${oe}?sendershard=${e}`,transactionDetails:e=>`/${oe}/${e}`,transactionDetailsScResults:e=>`/${oe}/${e}/${Rr}`,transactionDetailsLogs:e=>`/${oe}/${e}/${ac}`,nodeDetails:e=>`/${sc}/${e}`,accountDetails:e=>`/${ce}/${e}`,accountDetailsContractCode:e=>`/${ce}/${e}/${ec}`,accountDetailsTokens:e=>`/${ce}/${e}/${no}`,accountDetailsNfts:e=>`/${ce}/${e}/${_t}`,accountDetailsScResults:e=>`/${ce}/${e}/${Rr}`,accountDetailsContracts:e=>`/${ce}/${e}/${nc}`,identityDetails:e=>`/${tc}/${e}`,tokenDetails:e=>`/${no}/${e}`,tokenDetailsAccounts:e=>`/${no}/${e}/${ce}`,tokenDetailsLockedAccounts:e=>`/${no}/${e}/${rc}`,tokenDetailsRoles:e=>`/${no}/${e}/${cc}`,collectionDetails:e=>`/${oc}/${e}`,nftDetails:e=>`/${_t}/${e}`,providerDetails:e=>`/${Dr}/${e}`,providerDetailsTransactions:e=>`/${Dr}/${e}/${oe}`,miniblockDetails:e=>`/${ic}/${e}`};n();var ut=e=>{var o,t,r,c;if(e.action){let p=[(o=e.action.arguments)==null?void 0:o.token,(t=e.action.arguments)==null?void 0:t.token1,(r=e.action.arguments)==null?void 0:r.token2,(c=e.action.arguments)==null?void 0:c.transfers].filter(d=>d!=null);return[].concat(...p)}return[]};n();n();function gt(e){var t,r;let o=e.receiver;return(r=(t=e.action)==null?void 0:t.arguments)!=null&&r.receiver&&(o=e.action.arguments.receiver),o}function pc(e){let o=gt(e);return e.receiver===o?e.receiverAssets:void 0}n();Y();var mc=e=>{var r,c,p,m,d,l;let o="Transaction";return((r=e.action)==null?void 0:r.name)&&((c=e.action)==null?void 0:c.category)&&(((p=e.action)==null?void 0:p.category)==="esdtNft"&&((m=e.action)==null?void 0:m.name)==="transfer"?o="Transaction":e.action&&(o=e.action.name),(l=(d=e.action)==null?void 0:d.arguments)!=null&&l.functionName&&(o=e.action.arguments.functionName)),o};n();var dc=!1;function $u(e){dc||(console.error(e),dc=!0)}function Be({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||($u(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();Y();function _c(e,o,t){let r=e===o.sender,c=e===t,p=r&&c,m=(o==null?void 0:o.type)==="SmartContractResult";switch(!0){case m:return"Internal";case p:return"Self";case c:return"In";case r:default:return"Out"}}n();n();n();var qu=f(require("bignumber.js"));I();n();var gc=require("@multiversx/sdk-core"),Ue=f(require("bignumber.js"));I();n();var uc=f(require("bignumber.js")),on=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let r=new uc.default(t),c=o?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=c};n();function Ee(e){return{if:function(o){return o?{then:t=>t instanceof Function?Ee(t(e)):Ee(t)}:{then:()=>Ee(e)}},then:o=>o instanceof Function?Ee(o(e)):Ee(o),valueOf:function(){return e}}}Ue.default.config({ROUNDING_MODE:Ue.default.ROUND_FLOOR});function pe({input:e,decimals:o=H,digits:t=Ze,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:c=!1,addCommas:p=!1}){if(!on(e,!1))throw new Error("Invalid input");let m=new Ue.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Ee(d).then(()=>gc.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let g=new Ue.default(l);if(g.isZero())return he;let x=g.toString(10),[y,v]=x.split("."),E=new Ue.default(v||0),P=Ee(0).if(Boolean(v&&r)).then(()=>Math.max(v.length,t)).if(E.isZero()&&!r).then(0).if(Boolean(v&&!r)).then(()=>Math.min(v.length,t)).valueOf(),G=v&&t>=1&&t<=v.length&&E.isGreaterThan(0)&&new Ue.default(v.substring(0,t)).isZero(),ne=g.toFormat(P);return Ee(x).if(p).then(ne).if(Boolean(G)).then(Re=>{let be=new Ue.default(y).isZero(),[D,po]=Re.split("."),mo=new Array(t-1).fill(0),Dt=[...mo,0].join(""),Rt=[...mo,1].join("");return be?c?`<${D}.${Rt}`:r?`${D}.${po}`:D:`${D}.${Dt}`}).if(Boolean(!G&&v)).then(Re=>{let[be]=Re.split("."),D=v.substring(0,P);if(r){let po=t-D.length;if(po>0){let mo=Array(po).fill(0).join("");return D=`${D}${mo}`,`${be}.${D}`}return Re}return D?`${be}.${D}`:be}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}n();n();n();I();n();var nn=(r=>(r.NonFungibleESDT="NonFungibleESDT",r.SemiFungibleESDT="SemiFungibleESDT",r.MetaESDT="MetaESDT",r))(nn||{});n();n();n();I();n();I();n();var ju=require("@multiversx/sdk-core");I();n();var tn=require("@multiversx/sdk-core"),Xu=f(require("bignumber.js"));I();n();n();var zu=f(require("bignumber.js"));I();n();I();n();var Mr={isEsdt:!1,isNft:!1,isEgld:!1};function Or(e){let o=e==null?void 0:e.split("-").length;return o===2?w(u({},Mr),{isEsdt:!0}):o===3?w(u({},Mr),{isNft:!0}):w(u({},Mr),{isEgld:!0})}n();n();n();n();n();I();n();I();function Tt({token:e,noValue:o,showLastNonZeroDecimal:t}){var g;let r=!o&&e.value&&e.type!=="NonFungibleESDT",c=e.decimals!=null,p="";e.type==="NonFungibleESDT"&&(p="NFT"),e.type==="SemiFungibleESDT"&&(p="SFT"),e.type==="MetaESDT"&&(p="Meta-ESDT");let m="";r&&c&&(m=c?pe({input:e.value,decimals:e.decimals,digits:2,showLastNonZeroDecimal:t}):Number(e.value).toLocaleString("en"));let d=ae.nftDetails(String(e.identifier)),l=e.ticker===e.collection&&(g=e.identifier)!=null?g:e.ticker;return{badgeText:p,tokenFormattedAmount:r?m:null,tokenExplorerLink:d,tokenLinkText:l,token:e,noValue:o,showLastNonZeroDecimal:t}}n();I();function ht({token:e,noValue:o,showLastNonZeroDecimal:t}){var d;let r=Boolean(!o&&e.value),c=r?pe({input:e.value,decimals:(d=e.decimals)!=null?d:H,digits:2,showLastNonZeroDecimal:t,addCommas:!0}):null,p=ae.tokenDetails(String(e.token)),m=e.ticker;return{tokenExplorerLink:p,tokenFormattedAmount:c,showFormattedAmount:r,tokenLinkText:m,token:e,showLastNonZeroDecimal:t}}n();Y();var fc=["reDelegateRewards","claimRewards","unBond"],Tc=["wrapEgld","unwrapEgld"],hc=["unStake"],xc=["unDelegate"];n();n();var yc=e=>{let o=e.map(r=>{let{isNft:c}=Or(r.type);if(c){let{badgeText:x,tokenFormattedAmount:y,tokenLinkText:v}=Tt({token:r});return`${x!=null?`(${x}) `:""}${y} ${v}`}let{tokenFormattedAmount:p,tokenLinkText:m,token:d}=ht({token:r}),l=d.collection?d.identifier:d.token;return`${p} ${m} (${l})`});return decodeURI(o.join("%0A"))};n();I();var ie=e=>({egldValueData:{value:e,formattedValue:pe({input:e}),decimals:H}});n();var Sc=f(require("bignumber.js"));var bc=!1;function wc(e){var o;try{let r=ct(e.data).replace(`${(o=e.action)==null?void 0:o.name}@`,""),c=new Sc.default(r,16);if(!c.isNaN())return ie(c.toString(10))}catch(t){bc||(console.error(`Unable to extract value for txHash: ${e.txHash}`),bc=!0)}return ie(e.value)}n();n();Y();var Fr=e=>{var t,r;return(r=(t=e==null?void 0:e.operations)==null?void 0:t.filter(c=>Object.values(Qt).includes(c.type)))!=null?r:[]};var vc=!1,Ic=e=>{vc||(console.error(`Operations field missing for txHash: ${e}.
        Unable to compute value field.`),vc=!0)};function Ac(e){try{if(e.operations){let[o]=Fr(e);return ie(o==null?void 0:o.value)}else Ic(e.txHash)}catch(o){Ic(e.txHash)}return ie(e.value)}n();var Lc=f(require("bignumber.js"));var kc=!1;function Ec(e){var t,r,c,p,m;return new Lc.default((r=(t=e.action)==null?void 0:t.arguments)==null?void 0:r.value).isNaN()?(kc||(console.error(`Unable to interpret ${(m=e.action)==null?void 0:m.name} data for txHash: ${e.txHash}`),kc=!0),ie(e.value)):ie((p=(c=e.action)==null?void 0:c.arguments)==null?void 0:p.value)}var Cc=({transaction:e,hideMultipleBadge:o})=>{var t;if(e.action){if(Tc.includes(e.action.name))return ie(e.value);if(hc.includes(e.action.name))return wc(e);if(fc.includes(e.action.name))return Ac(e);if(xc.includes(e.action.name))return Ec(e);let r=ut(e);if(r.length){let c=r[0],p=Object.values(nn).includes(c.type),d=!o&&r.length>1?yc(r):"";if(p){let{badgeText:E,tokenFormattedAmount:P,tokenExplorerLink:G,tokenLinkText:ne}=Tt({token:c});return{nftValueData:{badgeText:E,tokenFormattedAmount:P,tokenExplorerLink:G,tokenLinkText:ne,transactionTokens:r,token:c,value:P!=null?c.value:null,decimals:P!=null?c.decimals:null,titleText:d}}}let{tokenExplorerLink:l,showFormattedAmount:g,tokenFormattedAmount:x,tokenLinkText:y,token:v}=ht({token:c});return{tokenValueData:{tokenExplorerLink:l,showFormattedAmount:g,tokenFormattedAmount:x,tokenLinkText:y,transactionTokens:r,token:v,value:c.value,decimals:(t=c.decimals)!=null?t:H,titleText:d}}}}return ie(e.value)};function Pc({transaction:e,address:o,explorerAddress:t}){var G;let r=(G=e.tokenIdentifier)!=null?G:Nr(e.data).tokenId,c=gt(e),p=pc(e),m=_c(o,e,c),d=mc(e),l=ut(e),g=Be({explorerAddress:t,to:ae.accountDetails(e.sender)}),x=Be({explorerAddress:t,to:ae.accountDetails(c)}),y=Be({explorerAddress:t,to:ae.senderShard(e.senderShard)}),v=Be({explorerAddress:t,to:ae.receiverShard(e.receiverShard)}),E=e.originalTxHash?`${e.originalTxHash}#${e.txHash}`:e.txHash,P=Be({explorerAddress:t,to:ae.transactionDetails(E)});return w(u({},e),{tokenIdentifier:r,receiver:c,receiverAssets:p,transactionDetails:{direction:m,method:d,transactionTokens:l,isContract:Ys(e.sender)},links:{senderLink:g,receiverLink:x,senderShardLink:y,receiverShardLink:v,transactionLink:P}})}n();n();n();n();var Yu=f(require("bignumber.js"));B();n();n();n();n();N();n();var eg=require("@multiversx/sdk-web-wallet-provider");I();n();var Ju=f(require("qs"));n();z();Ke();n();Ke();var UL={search:Ae()?window.location.search:"",removeParams:[]};n();n();n();j();n();Y();n();n();j();n();var og=f(require("linkifyjs"));n();I();n();var ng=f(require("bignumber.js"));n();B();n();n();N();n();N();n();n();n();Y();n();Y();n();var tg=f(require("bignumber.js"));I();Y();n();Y();n();var Dc=require("react");B();n();n();Y();n();n();var rg=require("@multiversx/sdk-core/out"),ag=f(require("bignumber.js"));Y();n();B();n();n();B();var CE=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Rc=require("react");B();j();n();var sg=require("react");Y();var BE=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];vo();n();var xt=e=>e.transactions,ko=b(xt,e=>e.signedTransactions),cg=b(xt,e=>e.signTransactionsError),Mc=b(xt,e=>e.signTransactionsCancelMessage),yt=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),Oc=b(ko,yt(bo)),Fc=b(ko,yt(So)),Bc=b(ko,yt(wo)),pg=b(ko,yt(hr)),Uc=b(xt,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>mt(t)))||[]})}),mg=b(ko,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var to=()=>k(oo);n();var Lo=()=>k(se);n();n();var co=f(require("react")),Uo=require("@fortawesome/free-solid-svg-icons"),Vd=require("@fortawesome/react-fontawesome"),ga=f(require("classnames"));n();n();n();var dg=f(require("axios"));n();var _g=f(require("axios"));To();n();I();n();var ug=f(require("axios"));n();var fg=f(require("axios"));n();n();var Tg=f(require("axios"));n();var hg=f(require("axios"));n();n();n();n();n();var Gc=require("@lifeomic/axios-fetch"),Ur=f(require("axios")),Wr=(0,Gc.buildAxiosFetch)(Ur.default),Gr=(e,o)=>h(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function xg(e,o,t){return h(this,null,function*(){try{let r=yield Wr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Gr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function yg(e,o){return h(this,null,function*(){try{let t=yield Wr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Gr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function bg(e,o,t){return h(this,null,function*(){try{let r=yield Wr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Gr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var Eo=Ur.default.create();Eo.get=yg;Eo.post=xg;Eo.patch=bg;n();n();var Sg=f(require("axios"));n();var wg=f(require("swr"));n();n();n();n();n();To();n();var Ag=f(require("axios"));n();var Lg=f(require("axios"));n();To();n();To();n();n();n();n();var Cg=f(require("axios"));n();I();n();n();var Co=f(require("react")),St=require("@fortawesome/free-solid-svg-icons"),qr=require("@fortawesome/react-fontawesome"),qc=f(require("classnames"));n();Ke();function Pg(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(t),o}function Hc(e){return h(this,null,function*(){if(!Ae())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):o=Pg(e),o})}var Dg=({text:e,className:o="dapp-copy-button",copyIcon:t=St.faCopy,successIcon:r=St.faCheck,styles:c})=>{let[p,m]=(0,Co.useState)({default:!0,success:!1});return Co.default.createElement("a",{href:"/#",onClick:l=>h(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let g=e&&e.trim();m({default:!1,success:yield Hc(g)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,qc.default)(c==null?void 0:c.copy,o)},p.default||!p.success?Co.default.createElement(qr.FontAwesomeIcon,{icon:t}):Co.default.createElement(qr.FontAwesomeIcon,{icon:r}))},jc=L(Dg,{ssrStyles:()=>Promise.resolve().then(()=>($r(),Hr)),clientStyles:()=>($r(),O(Hr)).default});n();n();var Kr=f(require("react")),Kc=require("@fortawesome/free-solid-svg-icons"),Xc=require("@fortawesome/react-fontawesome"),Yc=f(require("classnames"));var Mg=l=>{var g=l,{page:e,text:o,className:t="dapp-explorer-link",children:r,globalStyles:c,customExplorerIcon:p,styles:m}=g,d=Se(g,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:x}}=Lo(),y=o!=null?o:Kr.default.createElement(Xc.FontAwesomeIcon,{icon:p!=null?p:Kc.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),v=Be({explorerAddress:String(x),to:e});return Kr.default.createElement("a",u({href:v,target:"_blank",className:(0,Yc.default)(m==null?void 0:m.link,c==null?void 0:c.ml2,t),rel:"noreferrer"},d),r!=null?r:y)},We=L(Mg,{ssrStyles:()=>Promise.resolve().then(()=>(zr(),jr)),clientStyles:()=>(zr(),O(jr)).default});n();n();var W=f(require("react")),Ud=f(require("classnames"));I();n();n();var Zc=require("react");n();C();n();n();n();n();n();n();n();n();var Fg=require("@multiversx/sdk-extension-provider"),Bg=require("@multiversx/sdk-hw-provider"),Ug=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Wg=require("@multiversx/sdk-opera-provider"),Gg=require("@multiversx/sdk-passkey-provider/out"),Vg=require("@multiversx/sdk-web-wallet-provider");I();Me();n();var Po=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Jc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");N();n();var me=e=>`Unable to perform ${e}, Provider not initialized`,wt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(me("getAccount"))}setAccount(o){throw new Error(me(`setAccount: ${o}`))}login(o){throw new Error(me(`login with options: ${o}`))}logout(o){throw new Error(me(`logout with options: ${o}`))}getAddress(){throw new Error(me("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(me(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(me(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(me(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(me(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(me(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(me(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Qc=new wt;C();n();n();N();n();n();n();j();n();vo();n();C();N();n();n();n();n();j();n();M();B();n();C();n();var np=require("@multiversx/sdk-core");B();z();n();vo();n();C();N();n();C();B();n();n();n();B();n();Ln();n();n();n();n();var qg=f(require("swr"));n();n();n();n();var tp=require("react");n();n();var jg=require("react"),zg=require("@multiversx/sdk-web-wallet-provider"),Kg=require("@multiversx/sdk-web-wallet-provider"),Xg=f(require("qs"));I();C();N();Jt();j();var U3=U();n();var Ep=require("react"),ea=require("@multiversx/sdk-core");I();mr();n();n();n();n();n();n();n();n();n();n();var Zg=require("@multiversx/sdk-opera-provider");n();var Jg=require("@multiversx/sdk-extension-provider");n();Me();n();n();n();n();var vf=f(Ip());n();var Lf=require("@multiversx/sdk-native-auth-client");n();var Lp=f(require("axios"));n();n();n();function Ap(e){return h(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var kp=(e,o,t,r=0)=>h(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield Ap(o.delay)),yield kp(e,o,t,r+1)):null}}),Jr=(e,o={retries:5,delay:500})=>(...t)=>h(void 0,null,function*(){return yield kp(e,o,t)});var If=4;var EM=Jr((e,o,t)=>h(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield Lp.default.get(`${e}/${lt}?from=${If}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();Nn();n();n();j();var UM={origin:U().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Cf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Pf=require("@multiversx/sdk-passkey-provider/out");I();j();n();n();n();var Ff=require("react"),Bf=require("@multiversx/sdk-hw-provider");n();M();B();n();Ko();xo();ho();z();n();n();var hd=require("react"),xd=require("@multiversx/sdk-core"),Ix=require("@multiversx/sdk-extension-provider"),Ax=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),kx=require("@multiversx/sdk-passkey-provider/out"),Lx=f(ud());I();n();n();n();n();n();n();n();n();n();var ln=f(require("react"));var S6=(0,ln.createContext)({}),w6=A.getState();n();var fd=f(require("react"));n();var ra=f(require("react")),cx=f(require("axios"));n();n();Me();n();n();var ux=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),gx=require("@multiversx/sdk-webview-provider/out/WebviewProvider");M();n();M();C();B();n();n();C();n();z();n();C();B();n();n();var mx=require("@multiversx/sdk-core"),dx=f(require("bignumber.js"));I();n();var lx=f(require("bignumber.js"));I();C();N();z();j();n();var Td=require("react"),xx=require("@multiversx/sdk-extension-provider"),yx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),bx=require("@multiversx/sdk-passkey-provider/out");Me();C();n();C();B();Ko();j();n();fe();C();n();n();var Cx=require("react");n();n();N();vo();n();var Ct=require("react"),yd=(e,o)=>{let[t,r]=(0,Ct.useState)(e);return(0,Ct.useEffect)(()=>{let p=setTimeout(()=>r(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var Nx=require("react"),Dx=require("@multiversx/sdk-extension-provider");fe();M();N();n();ke();z();z();n();n();Me();B();n();var Px=require("react"),bd=require("@multiversx/sdk-core");C();n();var Rx=require("react"),Mx=require("@multiversx/sdk-opera-provider");fe();M();N();ke();z();j();n();var Ox=require("react");or();fe();Me();M();C();N();ke();j();n();var Gx=require("react");fe();C();n();n();nr();n();n();var Fx=f(require("platform"));Ke();n();n();n();n();n();function Sd(){return kr(A.getState())}n();n();$o();N();n();n();var Bx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Ko();xo();n();n();n();C();n();n();var Ux=f(require("axios"));z();n();n();var Wx=f(kt());$o();var wd,vd,Id,_4=(Id=(vd=(wd=Ye.safeWindow)==null?void 0:wd.location)==null?void 0:vd.origin)==null?void 0:Id.includes("localhost");n();j();n();n();var Yx=require("react");I();n();n();I();n();n();n();var Vx=f(require("bignumber.js"));n();n();n();var Ve=f(require("react")),Nd=require("react"),Dd=require("react"),pa=f(require("classnames")),Rd=require("react-dom");I();n();var kd=f(require("react")),Ld=f(require("classnames"));var $x=({className:e,children:o,styles:t})=>kd.default.createElement("div",{className:(0,Ld.default)(t==null?void 0:t.dappModalBody,e)},o),aa=L($x,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ce)),clientStyles:()=>(Pe(),O(Ce)).default});n();var ia=f(require("react")),Ed=f(require("classnames"));var qx=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?ia.default.createElement("div",{className:(0,Ed.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:ia.default.createElement("div",null,r)):null,sa=L(qx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ce)),clientStyles:()=>(Pe(),O(Ce)).default});n();var Fo=f(require("react")),Cd=require("@fortawesome/free-solid-svg-icons"),Pd=require("@fortawesome/react-fontawesome"),un=f(require("classnames"));var jx=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?Fo.default.createElement("div",{className:(0,un.default)(l==null?void 0:l.dappModalHeader,r)},t):Fo.default.createElement("div",{className:(0,un.default)(l==null?void 0:l.dappModalHeader,r)},Fo.default.createElement("div",{className:(0,un.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Fo.default.createElement("button",{onClick:m,className:(0,un.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},Fo.default.createElement(Pd.FontAwesomeIcon,{size:"lg",icon:Cd.faTimes}))):null,ca=L(jx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ce)),clientStyles:()=>(Pe(),O(Ce)).default});var zx={showHeader:!0,showFooter:!1,headerText:"",footerText:""},Kx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=zx,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:g})=>{let[x,y]=(0,Nd.useState)(!1);if((0,Dd.useEffect)(()=>{y(!0)},[]),!l)return null;let{showHeader:v,showFooter:E,headerText:P,footerText:G,modalDialogClassName:ne="dapp-modal-dialog",modalContentClassName:$e="dapp-modal-dialog-content",modalHeaderClassName:Re="dapp-modal-dialog-header",modalHeaderTextClassName:be="dapp-modal-dialog-header-text",modalCloseButtonClassName:D="dapp-modal-dialog-close-button",modalBodyClassName:po="dapp-modal-dialog-content-body",modalFooterClassName:mo="dapp-modal-dialog-footer",customModalHeader:Dt,customModalFooter:Rt}=c,sl=cl=>{cl.key==="Escape"&&r&&(m==null||m())};return Ve.default.createElement(Ve.default.Fragment,null,x&&(0,Rd.createPortal)(Ve.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,pa.default)(ne,g==null?void 0:g.dappModal,t),"data-testid":e,onKeyDown:sl},Ve.default.createElement("div",{className:(0,pa.default)(g==null?void 0:g.dappModalContent,$e)},Ve.default.createElement(ca,{visible:v,headerText:P,customHeader:Dt,className:Re,headerTextClassName:be,closeButtonClassName:D,onHide:m}),Ve.default.createElement(aa,{className:po},o),Ve.default.createElement(sa,{visible:E,customFooter:Rt,footerText:G,className:mo}))),d!=null?d:document==null?void 0:document.body))},Xx=L(Kx,{ssrStyles:()=>Promise.resolve().then(()=>(Pe(),Ce)),clientStyles:()=>(Pe(),O(Ce)).default});n();n();var Md=require("react");n();n();var Od=require("react"),Jx=require("@multiversx/sdk-hw-provider");fe();M();C();N();ke();n();var Zx=require("react");n();n();var ma=require("react");M();C();N();ke();j();n();var ey=require("react"),oy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");fe();M();N();ke();z();z();n();var ny=require("react"),ty=require("@multiversx/sdk-passkey-provider/out");fe();M();N();ke();z();z();n();n();var Fd=require("react");n();var iy=require("react");n();var da=require("react"),ay=require("socket.io-client");C();n();n();n();var sy=require("react");B();n();n();n();var cy=f(require("swr"));var my=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:r,styles:c})=>{let[p,m]=(0,W.useState)(0),[d,l]=(0,W.useState)(!1),g=(0,W.useRef)(document==null?void 0:document.createElement("span")),x=(0,W.useRef)(document==null?void 0:document.createElement("span")),y=yd(p,300),v=()=>{if(g.current&&x.current){let G=x.current.offsetWidth-g.current.offsetWidth;l(G>1)}},E=()=>{m(p+1)};return(0,W.useEffect)(()=>(window==null||window.addEventListener("resize",E),()=>{window==null||window.removeEventListener("resize",E)})),(0,W.useEffect)(()=>{v()},[y]),W.default.createElement("span",{ref:g,className:(0,Ud.default)(c==null?void 0:c.trim,r,o,{overflow:d}),"data-testid":t},W.default.createElement("span",{ref:x,className:c==null?void 0:c.hiddenTextRef},e),d?W.default.createElement(W.default.Fragment,null,W.default.createElement("span",{className:c==null?void 0:c.left},W.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),W.default.createElement("span",{className:c==null?void 0:c.ellipsis},xi),W.default.createElement("span",{className:c==null?void 0:c.right},W.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):W.default.createElement("span",null,e))},Wd=L(my,{ssrStyles:()=>Promise.resolve().then(()=>(_a(),la)),clientStyles:()=>(_a(),O(la)).default});var ly={icon:Uo.faCheck},ua={icon:Uo.faTimes},_y={icon:Uo.faCircleNotch},uy={pending:_y,success:ly,fail:ua,invalid:ua,timedOut:ua},gy=({className:e,hash:o,status:t,iconSrc:r,isTimedOut:c,globalStyles:p,styles:m})=>{var g;let d=t?uy[t]:null,l=(g=r==null?void 0:r.icon)!=null?g:d==null?void 0:d.icon;return co.default.createElement("div",{className:(0,ga.default)(m==null?void 0:m.container,e),key:o,"data-testid":"transactionDetailsToastBody"},!c&&l!=null&&co.default.createElement(Vd.FontAwesomeIcon,{icon:l,className:(0,ga.default)(m==null?void 0:m.icon,{"fa-spin slow-spin":t==="pending"})}),co.default.createElement("span",{className:m==null?void 0:m.trim},co.default.createElement(Wd,{text:o})),co.default.createElement(jc,{text:o}),co.default.createElement(We,{page:`/${oe}/${o}`,className:p==null?void 0:p.ml2}))},Hd=L(gy,{ssrStyles:()=>Promise.resolve().then(()=>(fn(),gn)),clientStyles:()=>(fn(),O(gn)).default});n();n();var de=f(require("react")),ol=require("@fortawesome/free-solid-svg-icons"),nl=require("@fortawesome/react-fontawesome"),xa=f(require("classnames"));I();n();n();var He=f(require("react")),qd=f(require("classnames"));I();var Ty=e=>{var t;let o=(t=e.styles)!=null?t:{};return He.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},He.default.createElement("span",{className:o["int-amount"],"data-testid":"formatAmountInt"},"..."))},hy=(e,o)=>{var E,P,G;let{value:t,showLastNonZeroDecimal:r=!1,showLabel:c=!0}=e,p=e.digits!=null?e.digits:Ze,m=e.decimals!=null?e.decimals:H,d=(E=e.styles)!=null?E:{},l=(P=e.globalStyles)!=null?P:{},g=pe({input:t,decimals:m,digits:p,showLastNonZeroDecimal:r,addCommas:!0}),x=g.split("."),y=x.length===1,v=g!==he;if(p>0&&y&&v){let ne="";for(let $e=1;$e<=p;$e++)ne=ne+he;x.push(ne)}return He.default.createElement("span",{"data-testid":e["data-testid"]||"formatAmountComponent",className:e.className},He.default.createElement("span",{className:d["int-amount"],"data-testid":"formatAmountInt"},x[0]),x.length>1&&He.default.createElement("span",{className:d.decimals,"data-testid":"formatAmountDecimals"},".",x[1]),c&&He.default.createElement("span",{className:(0,qd.default)(d.symbol,e.token&&l.textMuted),"data-testid":"formatAmountSymbol"},` ${(G=e.token)!=null?G:o}`))},xy=e=>{let{value:o}=e;return on(o)?hy(e,e.egldLabel||""):Ty(e)},yy=e=>{let o=e.egldLabel||Sd(),t=w(u({},e),{egldLabel:o});return He.default.createElement(xy,u({},t))},Wo=L(yy,{ssrStyles:()=>Promise.resolve().then(()=>(Ta(),fa)),clientStyles:()=>(Ta(),O(fa)).default});n();n();n();var xn=f(require("react")),Pt=f(require("classnames"));var Sy=({token:e,globalStyles:o,styles:t})=>e.collection?xn.default.createElement(We,{page:ae.collectionDetails(e.collection),className:(0,Pt.default)(t==null?void 0:t.transactionActionCollection)},xn.default.createElement("div",{className:(0,Pt.default)(o==null?void 0:o.dFlex,o==null?void 0:o.alignItemsCenter)},e.svgUrl&&xn.default.createElement("img",{src:e.svgUrl,alt:e.name,className:(0,Pt.default)(o==null?void 0:o.sideIcon,o==null?void 0:o.mr1)}),xn.default.createElement("span",null,e.ticker))):null,zd=L(Sy,{ssrStyles:()=>Promise.resolve().then(()=>(hn(),Tn)),clientStyles:()=>(hn(),O(Tn)).default});n();var Ne=f(require("react")),Go=f(require("classnames"));I();n();var Kd=f(require("react")),Xd=f(require("classnames"));var wy=({text:e,className:o,"data-testid":t="nftBadge",globalStyles:r})=>Kd.default.createElement("div",{"data-testid":t,className:(0,Xd.default)(r==null?void 0:r.badge,r==null?void 0:r.badgeSecondary,r==null?void 0:r.badgePill,r==null?void 0:r.fontWeightLight,o)},e),Yd=L(wy,{});var vy=({badgeText:e,tokenFormattedAmount:o,tokenExplorerLink:t,tokenLinkText:r,token:c,showLastNonZeroDecimal:p,globalStyles:m,styles:d})=>{var l,g,x,y,v;return c.identifier?Ne.default.createElement("div",{className:d==null?void 0:d.transactionActionNft},e!=null&&Ne.default.createElement(Yd,{text:e,className:(0,Go.default)(m==null?void 0:m.mr1,m==null?void 0:m.myAuto)}),o!=null&&Ne.default.createElement("div",{className:(0,Go.default)(m==null?void 0:m.mr1,{[(l=m==null?void 0:m.textTruncate)!=null?l:""]:c.svgUrl})},Ne.default.createElement(Wo,{value:c.value,digits:2,showLabel:!1,showLastNonZeroDecimal:p,decimals:c.decimals,"data-testid":"nftFormattedAmount"})),Ne.default.createElement(We,{page:t,"data-testid":"nftExplorerLink",className:(0,Go.default)(d==null?void 0:d.explorer,{[(g=m==null?void 0:m.sideLink)!=null?g:""]:c.svgUrl,[(x=m==null?void 0:m.dFlex)!=null?x:""]:c.svgUrl,[(y=m==null?void 0:m.textTruncate)!=null?y:""]:!c.svgUrl})},Ne.default.createElement("div",{className:d==null?void 0:d.data},c.svgUrl&&Ne.default.createElement("img",{src:c.svgUrl,alt:c.name,className:(0,Go.default)(m==null?void 0:m.sideIcon,m==null?void 0:m.mr1)}),Ne.default.createElement("span",{className:(0,Go.default)({[(v=d==null?void 0:d.truncate)!=null?v:""]:c.ticker===c.collection})},r)))):null},Zd=L(vy,{ssrStyles:()=>Promise.resolve().then(()=>(hn(),Tn)),clientStyles:()=>(hn(),O(Tn)).default});n();var De=f(require("react")),Nt=f(require("classnames"));I();var Iy=({tokenExplorerLink:e,showFormattedAmount:o,tokenLinkText:t,token:r,showLastNonZeroDecimal:c,globalStyles:p})=>{var m,d;return r.token?De.default.createElement(De.default.Fragment,null,o&&De.default.createElement("div",{className:p==null?void 0:p.textTruncate},De.default.createElement(Wo,{value:r.value,digits:2,showLabel:!1,decimals:(m=r.decimals)!=null?m:H,showLastNonZeroDecimal:c,"data-testid":"tokenFormattedAmount"})),De.default.createElement(We,{page:e,"data-testid":"tokenExplorerLink",className:(0,Nt.default)(p==null?void 0:p.dFlex,{[(d=p==null?void 0:p.sideLink)!=null?d:""]:r.svgUrl})},De.default.createElement("div",{className:(0,Nt.default)(p==null?void 0:p.dFlex,p==null?void 0:p.alignItemsCenter)},r.svgUrl&&De.default.createElement("img",{src:r.svgUrl,alt:r.name,className:(0,Nt.default)(p==null?void 0:p.sideIcon,p==null?void 0:p.mr1)}),De.default.createElement("span",null,t)))):null},Jd=L(Iy,{});var ha={Collection:zd,Nft:Zd,Token:Jd};var ky=({children:e,titleText:o,globalStyles:t})=>de.default.createElement("div",{className:(0,xa.default)(t==null?void 0:t.dFlex,t==null?void 0:t.alignItemsCenter),"data-testid":"transactionValue"},e,o&&de.default.createElement(nl.FontAwesomeIcon,{icon:ol.faLayerGroup,"data-testid":"transactionValueIcon",className:(0,xa.default)(t==null?void 0:t.ml2,t==null?void 0:t.textSecondary),title:o})),el=L(ky,{ssrStyles:()=>Promise.resolve().then(()=>(bn(),yn)),clientStyles:()=>(bn(),O(yn)).default}),Ly=({transaction:e,hideMultipleBadge:o,styles:t})=>{let{egldValueData:r,tokenValueData:c,nftValueData:p}=Cc({transaction:e,hideMultipleBadge:o});if(c)return de.default.createElement("div",{className:t==null?void 0:t.transactionCell},de.default.createElement(el,{titleText:c.titleText},de.default.createElement(ha.Token,u({},c))));if(p){let d=p.token.type==="MetaESDT"?null:p.badgeText;return de.default.createElement("div",{className:t==null?void 0:t.transactionCell},de.default.createElement(el,{titleText:p.titleText},de.default.createElement(ha.Nft,w(u({},p),{badgeText:d}))))}return r?de.default.createElement("div",{className:t==null?void 0:t.transactionCell},de.default.createElement(Wo,{value:r.value,digits:2,"data-testid":"transactionValue"})):null},tl=L(Ly,{ssrStyles:()=>Promise.resolve().then(()=>(bn(),yn)),clientStyles:()=>(bn(),O(yn)).default});n();var al=f(require("react"));var Cy=({children:e,styles:o})=>al.default.createElement("div",{className:o==null?void 0:o.footer},e),il=L(Cy,{ssrStyles:()=>Promise.resolve().then(()=>(ba(),ya)),clientStyles:()=>(ba(),O(ya)).default});var Py=e=>{var m;let{className:o,transaction:t}=e,{address:r}=to(),{network:{explorerAddress:c}}=Lo(),p=Pc({transaction:t,address:r!=null?r:"",explorerAddress:c});return Sn.default.createElement(il,null,Sn.default.createElement("div",{className:(m=e.styles)==null?void 0:m.status},Sn.default.createElement(tl,{transaction:p})),Sn.default.createElement(Hd,{className:o,hash:p.txHash,status:p.status}))},Ny=L(Py,{ssrStyles:()=>Promise.resolve().then(()=>(fn(),gn)),clientStyles:()=>(fn(),O(gn)).default});0&&(module.exports={TransactionToastFooter});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TransactionToastFooter.js.map
