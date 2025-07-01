"use strict";var Zd=Object.create;var cn=Object.defineProperty,Qd=Object.defineProperties,el=Object.getOwnPropertyDescriptor,ol=Object.getOwnPropertyDescriptors,nl=Object.getOwnPropertyNames,Bn=Object.getOwnPropertySymbols,tl=Object.getPrototypeOf,Kt=Object.prototype.hasOwnProperty,$a=Object.prototype.propertyIsEnumerable;var Ha=(e,o,t)=>o in e?cn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))Kt.call(o,t)&&Ha(e,t,o[t]);if(Bn)for(var t of Bn(o))$a.call(o,t)&&Ha(e,t,o[t]);return e},w=(e,o)=>Qd(e,ol(o));var Xe=(e,o)=>{var t={};for(var r in e)Kt.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Bn)for(var r of Bn(e))o.indexOf(r)<0&&$a.call(e,r)&&(t[r]=e[r]);return t};var y=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),_e=(e,o)=>{for(var t in o)cn(e,t,{get:o[t],enumerable:!0})},Va=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of nl(o))!Kt.call(e,c)&&c!==t&&cn(e,c,{get:()=>o[c],enumerable:!(r=el(o,c))||r.enumerable});return e};var h=(e,o,t)=>(t=e!=null?Zd(tl(e)):{},Va(o||!e||!e.__esModule?cn(t,"default",{value:e,enumerable:!0}):t,e)),te=e=>Va(cn({},"__esModule",{value:!0}),e);var T=(e,o,t)=>new Promise((r,c)=>{var p=l=>{try{d(t.next(l))}catch(u){c(u)}},m=l=>{try{d(t.throw(l))}catch(u){c(u)}},d=l=>l.done?r(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var za=b(Wn=>{"use strict";n();Wn.byteLength=al;Wn.toByteArray=sl;Wn.fromByteArray=ml;var Se=[],ue=[],rl=typeof Uint8Array!="undefined"?Uint8Array:Array,Xt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(so=0,qa=Xt.length;so<qa;++so)Se[so]=Xt[so],ue[Xt.charCodeAt(so)]=so;var so,qa;ue["-".charCodeAt(0)]=62;ue["_".charCodeAt(0)]=63;function ja(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var r=t===o?0:4-t%4;return[t,r]}function al(e){var o=ja(e),t=o[0],r=o[1];return(t+r)*3/4-r}function il(e,o,t){return(o+t)*3/4-t}function sl(e){var o,t=ja(e),r=t[0],c=t[1],p=new rl(il(e,r,c)),m=0,d=c>0?r-4:r,l;for(l=0;l<d;l+=4)o=ue[e.charCodeAt(l)]<<18|ue[e.charCodeAt(l+1)]<<12|ue[e.charCodeAt(l+2)]<<6|ue[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return c===2&&(o=ue[e.charCodeAt(l)]<<2|ue[e.charCodeAt(l+1)]>>4,p[m++]=o&255),c===1&&(o=ue[e.charCodeAt(l)]<<10|ue[e.charCodeAt(l+1)]<<4|ue[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function cl(e){return Se[e>>18&63]+Se[e>>12&63]+Se[e>>6&63]+Se[e&63]}function pl(e,o,t){for(var r,c=[],p=o;p<t;p+=3)r=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),c.push(cl(r));return c.join("")}function ml(e){for(var o,t=e.length,r=t%3,c=[],p=16383,m=0,d=t-r;m<d;m+=p)c.push(pl(e,m,m+p>d?d:m+p));return r===1?(o=e[t-1],c.push(Se[o>>2]+Se[o<<4&63]+"==")):r===2&&(o=(e[t-2]<<8)+e[t-1],c.push(Se[o>>10]+Se[o>>4&63]+Se[o<<2&63]+"=")),c.join("")}});var Ka=b(Yt=>{n();Yt.read=function(e,o,t,r,c){var p,m,d=c*8-r-1,l=(1<<d)-1,u=l>>1,f=-7,x=t?c-1:0,L=t?-1:1,k=e[o+x];for(x+=L,p=k&(1<<-f)-1,k>>=-f,f+=d;f>0;p=p*256+e[o+x],x+=L,f-=8);for(m=p&(1<<-f)-1,p>>=-f,f+=r;f>0;m=m*256+e[o+x],x+=L,f-=8);if(p===0)p=1-u;else{if(p===l)return m?NaN:(k?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-u}return(k?-1:1)*m*Math.pow(2,p-r)};Yt.write=function(e,o,t,r,c,p){var m,d,l,u=p*8-c-1,f=(1<<u)-1,x=f>>1,L=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=r?0:p-1,P=r?1:-1,$=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=f):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+x>=1?o+=L/l:o+=L*Math.pow(2,1-x),o*l>=2&&(m++,l/=2),m+x>=f?(d=0,m=f):m+x>=1?(d=(o*l-1)*Math.pow(2,c),m=m+x):(d=o*Math.pow(2,x-1)*Math.pow(2,c),m=0));c>=8;e[t+k]=d&255,k+=P,d/=256,c-=8);for(m=m<<c|d,u+=c;u>0;e[t+k]=m&255,k+=P,m/=256,u-=8);e[t+k-P]|=$*128}});var si=b(ko=>{"use strict";n();var Jt=za(),Ao=Ka(),Xa=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ko.Buffer=_;ko.SlowBuffer=fl;ko.INSPECT_MAX_BYTES=50;var Gn=2147483647;ko.kMaxLength=Gn;_.TYPED_ARRAY_SUPPORT=dl();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function dl(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function De(e){if(e>Gn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return or(e)}return Za(e,o,t)}_.poolSize=8192;function Za(e,o,t){if(typeof e=="string")return _l(e,o);if(ArrayBuffer.isView(e))return ul(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(be(e,ArrayBuffer)||e&&be(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(be(e,SharedArrayBuffer)||e&&be(e.buffer,SharedArrayBuffer)))return Qt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return _.from(r,o,t);var c=gl(e);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return Za(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function Qa(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ll(e,o,t){return Qa(e),e<=0?De(e):o!==void 0?typeof t=="string"?De(e).fill(o,t):De(e).fill(o):De(e)}_.alloc=function(e,o,t){return ll(e,o,t)};function or(e){return Qa(e),De(e<0?0:nr(e)|0)}_.allocUnsafe=function(e){return or(e)};_.allocUnsafeSlow=function(e){return or(e)};function _l(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=ei(e,o)|0,r=De(t),c=r.write(e,o);return c!==t&&(r=r.slice(0,c)),r}function Zt(e){for(var o=e.length<0?0:nr(e.length)|0,t=De(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function ul(e){if(be(e,Uint8Array)){var o=new Uint8Array(e);return Qt(o.buffer,o.byteOffset,o.byteLength)}return Zt(e)}function Qt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,_.prototype),r}function gl(e){if(_.isBuffer(e)){var o=nr(e.length)|0,t=De(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||tr(e.length)?De(0):Zt(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Zt(e.data)}function nr(e){if(e>=Gn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Gn.toString(16)+" bytes");return e|0}function fl(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(be(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),be(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var r=o.length,c=t.length,p=0,m=Math.min(r,c);p<m;++p)if(o[p]!==t[p]){r=o[p],c=t[p];break}return r<c?-1:c<r?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<o.length;++r)t+=o[r].length;var c=_.allocUnsafe(t),p=0;for(r=0;r<o.length;++r){var m=o[r];if(be(m,Uint8Array))p+m.length>c.length?_.from(m).copy(c,p):Uint8Array.prototype.set.call(c,m,p);else if(_.isBuffer(m))m.copy(c,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return c};function ei(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||be(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var c=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return er(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ii(e).length;default:if(c)return r?-1:er(e).length;o=(""+o).toLowerCase(),c=!0}}_.byteLength=ei;function Tl(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return kl(this,o,t);case"utf8":case"utf-8":return ni(this,o,t);case"ascii":return Il(this,o,t);case"latin1":case"binary":return Al(this,o,t);case"base64":return wl(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ll(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}_.prototype._isBuffer=!0;function co(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)co(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)co(this,t,t+3),co(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)co(this,t,t+7),co(this,t+1,t+6),co(this,t+2,t+5),co(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?ni(this,0,o):Tl.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=ko.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Xa&&(_.prototype[Xa]=_.prototype.inspect);_.prototype.compare=function(o,t,r,c,p){if(be(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),r===void 0&&(r=o?o.length:0),c===void 0&&(c=0),p===void 0&&(p=this.length),t<0||r>o.length||c<0||p>this.length)throw new RangeError("out of range index");if(c>=p&&t>=r)return 0;if(c>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,c>>>=0,p>>>=0,this===o)return 0;for(var m=p-c,d=r-t,l=Math.min(m,d),u=this.slice(c,p),f=o.slice(t,r),x=0;x<l;++x)if(u[x]!==f[x]){m=u[x],d=f[x];break}return m<d?-1:d<m?1:0};function oi(e,o,t,r,c){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,tr(t)&&(t=c?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(c)return-1;t=e.length-1}else if(t<0)if(c)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,r)),_.isBuffer(o))return o.length===0?-1:Ya(e,o,t,r,c);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ya(e,[o],t,r,c);throw new TypeError("val must be string, number or Buffer")}function Ya(e,o,t,r,c){var p=1,m=e.length,d=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(k,P){return p===1?k[P]:k.readUInt16BE(P*p)}var u;if(c){var f=-1;for(u=t;u<m;u++)if(l(e,u)===l(o,f===-1?0:u-f)){if(f===-1&&(f=u),u-f+1===d)return f*p}else f!==-1&&(u-=u-f),f=-1}else for(t+d>m&&(t=m-d),u=t;u>=0;u--){for(var x=!0,L=0;L<d;L++)if(l(e,u+L)!==l(o,L)){x=!1;break}if(x)return u}return-1}_.prototype.includes=function(o,t,r){return this.indexOf(o,t,r)!==-1};_.prototype.indexOf=function(o,t,r){return oi(this,o,t,r,!0)};_.prototype.lastIndexOf=function(o,t,r){return oi(this,o,t,r,!1)};function hl(e,o,t,r){t=Number(t)||0;var c=e.length-t;r?(r=Number(r),r>c&&(r=c)):r=c;var p=o.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(o.substr(m*2,2),16);if(tr(d))return m;e[t+m]=d}return m}function xl(e,o,t,r){return Hn(er(o,e.length-t),e,t,r)}function yl(e,o,t,r){return Hn(Cl(o),e,t,r)}function Sl(e,o,t,r){return Hn(ii(o),e,t,r)}function bl(e,o,t,r){return Hn(Nl(o,e.length-t),e,t,r)}_.prototype.write=function(o,t,r,c){if(t===void 0)c="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")c=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,c===void 0&&(c="utf8")):(c=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),o.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var m=!1;;)switch(c){case"hex":return hl(this,o,t,r);case"utf8":case"utf-8":return xl(this,o,t,r);case"ascii":case"latin1":case"binary":return yl(this,o,t,r);case"base64":return Sl(this,o,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return bl(this,o,t,r);default:if(m)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function wl(e,o,t){return o===0&&t===e.length?Jt.fromByteArray(e):Jt.fromByteArray(e.slice(o,t))}function ni(e,o,t){t=Math.min(e.length,t);for(var r=[],c=o;c<t;){var p=e[c],m=null,d=p>239?4:p>223?3:p>191?2:1;if(c+d<=t){var l,u,f,x;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[c+1],(l&192)===128&&(x=(p&31)<<6|l&63,x>127&&(m=x));break;case 3:l=e[c+1],u=e[c+2],(l&192)===128&&(u&192)===128&&(x=(p&15)<<12|(l&63)<<6|u&63,x>2047&&(x<55296||x>57343)&&(m=x));break;case 4:l=e[c+1],u=e[c+2],f=e[c+3],(l&192)===128&&(u&192)===128&&(f&192)===128&&(x=(p&15)<<18|(l&63)<<12|(u&63)<<6|f&63,x>65535&&x<1114112&&(m=x))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),c+=d}return vl(r)}var Ja=4096;function vl(e){var o=e.length;if(o<=Ja)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=Ja));return t}function Il(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]&127);return r}function Al(e,o,t){var r="";t=Math.min(e.length,t);for(var c=o;c<t;++c)r+=String.fromCharCode(e[c]);return r}function kl(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var c="",p=o;p<t;++p)c+=Rl[e[p]];return c}function Ll(e,o,t){for(var r=e.slice(o,t),c="",p=0;p<r.length-1;p+=2)c+=String.fromCharCode(r[p]+r[p+1]*256);return c}_.prototype.slice=function(o,t){var r=this.length;o=~~o,t=t===void 0?r:~~t,o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<o&&(t=o);var c=this.subarray(o,t);return Object.setPrototypeOf(c,_.prototype),c};function j(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||j(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return c};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||j(o,t,this.length);for(var c=this[o+--t],p=1;t>0&&(p*=256);)c+=this[o+--t]*p;return c};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||j(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||j(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||j(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||j(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||j(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,r){o=o>>>0,t=t>>>0,r||j(o,t,this.length);for(var c=this[o],p=1,m=0;++m<t&&(p*=256);)c+=this[o+m]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*t)),c};_.prototype.readIntBE=function(o,t,r){o=o>>>0,t=t>>>0,r||j(o,t,this.length);for(var c=t,p=1,m=this[o+--c];c>0&&(p*=256);)m+=this[o+--c]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||j(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||j(o,2,this.length);var r=this[o]|this[o+1]<<8;return r&32768?r|4294901760:r};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||j(o,2,this.length);var r=this[o+1]|this[o]<<8;return r&32768?r|4294901760:r};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||j(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||j(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||j(o,4,this.length),Ao.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||j(o,4,this.length),Ao.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||j(o,8,this.length),Ao.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||j(o,8,this.length),Ao.read(this,o,!1,52,8)};function re(e,o,t,r,c,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>c||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;re(this,o,t,r,p,0)}var m=1,d=0;for(this[t]=o&255;++d<r&&(m*=256);)this[t+d]=o/m&255;return t+r};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,r=r>>>0,!c){var p=Math.pow(2,8*r)-1;re(this,o,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+r};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);re(this,o,t,r,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<r&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeIntBE=function(o,t,r,c){if(o=+o,t=t>>>0,!c){var p=Math.pow(2,8*r-1);re(this,o,t,r,p-1,-p)}var m=r-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+r};_.prototype.writeInt8=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,r){return o=+o,t=t>>>0,r||re(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function ti(e,o,t,r,c,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ri(e,o,t,r,c){return o=+o,t=t>>>0,c||ti(e,o,t,4,34028234663852886e22,-34028234663852886e22),Ao.write(e,o,t,r,23,4),t+4}_.prototype.writeFloatLE=function(o,t,r){return ri(this,o,t,!0,r)};_.prototype.writeFloatBE=function(o,t,r){return ri(this,o,t,!1,r)};function ai(e,o,t,r,c){return o=+o,t=t>>>0,c||ti(e,o,t,8,17976931348623157e292,-17976931348623157e292),Ao.write(e,o,t,r,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,r){return ai(this,o,t,!0,r)};_.prototype.writeDoubleBE=function(o,t,r){return ai(this,o,t,!1,r)};_.prototype.copy=function(o,t,r,c){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(r||(r=0),!c&&c!==0&&(c=this.length),t>=o.length&&(t=o.length),t||(t=0),c>0&&c<r&&(c=r),c===r||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),o.length-t<c-r&&(c=o.length-t+r);var p=c-r;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,c):Uint8Array.prototype.set.call(o,this.subarray(r,c),t),p};_.prototype.fill=function(o,t,r,c){if(typeof o=="string"){if(typeof t=="string"?(c=t,t=0,r=this.length):typeof r=="string"&&(c=r,r=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!_.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(o.length===1){var p=o.charCodeAt(0);(c==="utf8"&&p<128||c==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<r;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,c),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%l]}return this};var Pl=/[^+/0-9A-Za-z-_]/g;function El(e){if(e=e.split("=")[0],e=e.trim().replace(Pl,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function er(e,o){o=o||1/0;for(var t,r=e.length,c=null,p=[],m=0;m<r;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!c){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(o-=3)>-1&&p.push(239,191,189);continue}c=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),c=t;continue}t=(c-55296<<10|t-56320)+65536}else c&&(o-=3)>-1&&p.push(239,191,189);if(c=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Cl(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Nl(e,o){for(var t,r,c,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),r=t>>8,c=t%256,p.push(c),p.push(r);return p}function ii(e){return Jt.toByteArray(El(e))}function Hn(e,o,t,r){for(var c=0;c<r&&!(c+t>=o.length||c>=e.length);++c)o[c+t]=e[c];return c}function be(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function tr(e){return e!==e}var Rl=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,c=0;c<16;++c)o[r+c]=e[t]+e[c];return o}()});var li=b((Vx,di)=>{n();var B=di.exports={},we,ve;function rr(){throw new Error("setTimeout has not been defined")}function ar(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?we=setTimeout:we=rr}catch(e){we=rr}try{typeof clearTimeout=="function"?ve=clearTimeout:ve=ar}catch(e){ve=ar}})();function ci(e){if(we===setTimeout)return setTimeout(e,0);if((we===rr||!we)&&setTimeout)return we=setTimeout,setTimeout(e,0);try{return we(e,0)}catch(o){try{return we.call(null,e,0)}catch(t){return we.call(this,e,0)}}}function Dl(e){if(ve===clearTimeout)return clearTimeout(e);if((ve===ar||!ve)&&clearTimeout)return ve=clearTimeout,clearTimeout(e);try{return ve(e)}catch(o){try{return ve.call(null,e)}catch(t){return ve.call(this,e)}}}var Me=[],Lo=!1,po,$n=-1;function Ml(){!Lo||!po||(Lo=!1,po.length?Me=po.concat(Me):$n=-1,Me.length&&pi())}function pi(){if(!Lo){var e=ci(Ml);Lo=!0;for(var o=Me.length;o;){for(po=Me,Me=[];++$n<o;)po&&po[$n].run();$n=-1,o=Me.length}po=null,Lo=!1,Dl(e)}}B.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];Me.push(new mi(e,o)),Me.length===1&&!Lo&&ci(pi)};function mi(e,o){this.fun=e,this.array=o}mi.prototype.run=function(){this.fun.apply(null,this.array)};B.title="browser";B.browser=!0;B.env={};B.argv=[];B.version="";B.versions={};function Oe(){}B.on=Oe;B.addListener=Oe;B.once=Oe;B.off=Oe;B.removeListener=Oe;B.removeAllListeners=Oe;B.emit=Oe;B.prependListener=Oe;B.prependOnceListener=Oe;B.listeners=function(e){return[]};B.binding=function(e){throw new Error("process.binding is not supported")};B.cwd=function(){return"/"};B.chdir=function(e){throw new Error("process.chdir is not supported")};B.umask=function(){return 0}});var a,s,Ol,i,n=y(()=>{a=h(si()),s=h(li()),Ol=function(e){function o(){var r=this||self;return delete e.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),i=Ol});var _i=y(()=>{"use strict";n()});var ui,Fe,gi,ir,fi,Ti,Vn,Ie=y(()=>{"use strict";n();ui="error when signing",Fe="Transaction canceled",gi="error signing transaction",ir="provider not initialized",fi="You need a signer/valid signer to send a transaction,use either WalletProvider, LedgerProvider or WalletConnect",Ti="Undefined transaction status",Vn="You cannot sign transactions from a different account"});var hi=y(()=>{"use strict";n()});var sr,xi=y(()=>{"use strict";n();sr=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(sr||{})});var yi=y(()=>{"use strict";n()});var cr=y(()=>{"use strict";n()});var Si=y(()=>{"use strict";n()});var pr,mr=y(()=>{"use strict";n();pr=(c=>(c.signature="signature",c.sessionId="sessionId",c.status="status",c.address="address",c))(pr||{})});var bi=y(()=>{"use strict";n()});var wi=y(()=>{"use strict";n()});var ee,Po,Ye=y(()=>{"use strict";n();ee=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Po=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var vi,ny,Ii,ty,D=y(()=>{"use strict";n();Ye();vi=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(vi||{}),ny=g(g({},Po.WindowProviderRequestEnums),vi),Ii=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(Ii||{}),ty=g(g({},Po.WindowProviderResponseEnums),Ii)});var Ai=y(()=>{"use strict";n()});var ki=y(()=>{"use strict";n()});var ae=y(()=>{"use strict";n()});var Li=y(()=>{"use strict";n()});var Pi=y(()=>{"use strict";n()});var Ei=y(()=>{"use strict";n()});var W=y(()=>{"use strict";n();mr();bi();wi();D();Ai();ki();ae();Li();Pi();Ei()});var mo,Ci,yy,Ni,Sy,Ri,by,wy,Di,Eo=y(()=>{"use strict";n();W();mo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:Ci,egldLabel:yy}=mo["devnet"],{chainId:Ni,egldLabel:Sy}=mo["testnet"],{chainId:Ri,egldLabel:by}=mo["mainnet"],wy={["devnet"]:Ci,["testnet"]:Ni,["mainnet"]:Ri},Di={[Ci]:"devnet",[Ni]:"testnet",[Ri]:"mainnet"}});var Mi,qn=y(()=>{"use strict";n();Mi="cancel-transaction-toast"});var Ae,Oi=y(()=>{"use strict";n();Ae=require("@multiversx/sdk-web-wallet-provider")});var lo,pn=y(()=>{"use strict";n();lo=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var Fi,Ui,dr,Py,Ey,lr=y(()=>{"use strict";n();pn();dr=String((Ui=(Fi=lo.safeWindow)==null?void 0:Fi.navigator)==null?void 0:Ui.userAgent),Py=/^((?!chrome|android).)*safari/i.test(dr),Ey=/firefox/i.test(dr)&&/windows/i.test(dr)});var jn,zn,Bi,Wi,ke,Kn,Xn,Gi,Co,A=y(()=>{"use strict";n();_i();Ie();hi();xi();yi();cr();Si();Eo();qn();Oi();lr();jn=5e4,zn=1e9,Bi=1,Wi="/dapp/init",ke="signSession",Kn="sdk-dapp-version",Xn="logout",Gi="login",Co="0"});var mn,Yn=y(()=>{"use strict";n();mn=()=>Date.now()/1e3});var Hi=y(()=>{"use strict";n()});var $i=y(()=>{"use strict";n()});var _r=y(()=>{"use strict";n();Yn();Hi();$i()});var ur={};_e(ur,{clear:()=>Wl,getItem:()=>Ul,localStorageKeys:()=>Je,removeItem:()=>Bl,setItem:()=>Fl});var Je,Jn,Fl,Ul,Bl,Wl,No=y(()=>{"use strict";n();_r();Je={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Jn=typeof localStorage!="undefined",Fl=({key:e,data:o,expires:t})=>{!Jn||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Ul=e=>{if(!Jn)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:mn()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},Bl=e=>{!Jn||localStorage.removeItem(String(e))},Wl=()=>{!Jn||localStorage.clear()}});var gr={};_e(gr,{clear:()=>zi,getItem:()=>qi,removeItem:()=>ji,setItem:()=>Vi,storage:()=>Gl});var Vi,qi,ji,zi,Gl,Ki=y(()=>{"use strict";n();Vi=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},qi=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},ji=e=>sessionStorage.removeItem(String(e)),zi=()=>sessionStorage.clear(),Gl={setItem:Vi,getItem:qi,removeItem:ji,clear:zi}});var _o,Ro=y(()=>{"use strict";n();No();Ki();_o={session:gr,local:ur}});var fr,M,ie,O=y(()=>{"use strict";n();fr=require("@reduxjs/toolkit");A();M=(0,fr.createAction)(Xn),ie=(0,fr.createAction)(Gi,e=>({payload:e}))});var hr,Xi,Yi,Zn,Tr,Ji,Qn,Hl,xr,sS,$l,Vl,cS,pS,mS,ql,jl,et,ot=y(()=>{"use strict";n();hr=require("@multiversx/sdk-core"),Xi=require("@reduxjs/toolkit"),Yi=require("redux-persist");A();Ro();No();O();Zn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:Co},Tr={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Zn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ji=(0,Xi.createSlice)({name:"accountInfoSlice",initialState:Tr,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new hr.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:Zn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(M,()=>(_o.local.removeItem(Je.loginExpiresAt),Tr)),e.addCase(ie,(o,t)=>{let{address:r}=t.payload;o.address=r,o.publicKey=new hr.Address(r).hex()}),e.addCase(Yi.REHYDRATE,(o,t)=>{var u;if(!((u=t.payload)!=null&&u.account))return;let{account:r}=t.payload,{address:c,shard:p,accounts:m,publicKey:d}=r;o.address=c,o.shard=p;let l=m&&c in m;o.accounts=l?m:Tr.accounts,o.publicKey=d})}}),{setAccount:Qn,setAddress:Hl,setAccountNonce:xr,setAccountShard:sS,setLedgerAccount:$l,updateLedgerAccount:Vl,setWalletConnectAccount:cS,setIsAccountLoading:pS,setAccountLoadingError:mS,setWebsocketEvent:ql,setWebsocketBatchEvent:jl}=Ji.actions,et=Ji.reducer});function dn(){return new Date().setHours(new Date().getHours()+24)}function ln(e){_o.local.setItem({key:Je.loginExpiresAt,data:e,expires:e})}var yr=y(()=>{"use strict";n();Ro();No()});var Qi,Zi,es,yS,zl,Kl,Sr,SS,Xl,os,bS,wS,vS,nt,tt=y(()=>{"use strict";n();Qi=require("@reduxjs/toolkit");yr();D();O();Zi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},es=(0,Qi.createSlice)({name:"loginInfoSlice",initialState:Zi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(M,()=>Zi),e.addCase(ie,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,ln(dn())})}}),{setLoginMethod:yS,setWalletConnectLogin:zl,setLedgerLogin:Kl,setTokenLogin:Sr,setTokenLoginSignature:SS,setWalletLogin:Xl,invalidateLoginSession:os,setLogoutRoute:bS,setIsWalletConnectV2Initialized:wS,setWebviewLogin:vS}=es.actions,nt=es.reducer});var ts,ns,rs,LS,Yl,PS,Jl,rt,at=y(()=>{"use strict";n();ts=require("@reduxjs/toolkit");O();ns={},rs=(0,ts.createSlice)({name:"modalsSlice",initialState:ns,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(M,()=>ns)}}),{setTxSubmittedModal:LS,setNotificationModal:Yl,clearTxSubmittedModal:PS,clearNotificationModal:Jl}=rs.actions,rt=rs.reducer});var Ue,Do=y(()=>{"use strict";n();Ue=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var N,Y=y(()=>{"use strict";n();Do();N=()=>{if(!Ue())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:r,href:c,search:p}}=window;return{pathname:o,hash:t,origin:r,href:c,search:p}}});var as=y(()=>{"use strict";n();Y()});var Be,is=y(()=>{"use strict";n();J();Be=()=>{let{pathname:e,search:o,hash:t}=N();return`${e!=null?e:""}${o!=null?o:""}${t!=null?t:""}`}});var ss=y(()=>{"use strict";n();pn()});var J=y(()=>{"use strict";n();as();is();Y();ss()});var _n=y(()=>{"use strict";n();J()});var ps=y(()=>{"use strict";n();_n()});function ms(e){return e[Math.floor(Math.random()*e.length)]}var ds=y(()=>{"use strict";n()});var br=y(()=>{"use strict";n();cr()});var We=y(()=>{"use strict";n();ps();ds();br()});var ls,_s,us,wr,Ql,gs,cb,pb,e_,it,st=y(()=>{"use strict";n();ls=require("@reduxjs/toolkit"),_s=h(require("lodash.omit")),us=require("redux-persist");qn();O();We();wr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Ql={network:wr},gs=(0,ls.createSlice)({name:"appConfig",initialState:Ql,reducers:{initializeNetworkConfig:(e,o)=>{let t=ms(o.payload.walletConnectV2RelayAddresses),r=(0,_s.default)(o.payload,"walletConnectV2RelayAddresses");e.network=w(g(g({},e.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=g(g({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(M,o=>{o.network.customWalletAddress=void 0}),e.addCase(us.REHYDRATE,(o,t)=>{var c,p;if(!((p=(c=t.payload)==null?void 0:c.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;o.network.customWalletAddress=r})}}),{initializeNetworkConfig:cb,updateNetworkConfig:pb,setCustomWalletAddress:e_}=gs.actions,it=gs.reducer});var fs,vr,Ts,gb,fb,Tb,ct,pt=y(()=>{"use strict";n();fs=require("@reduxjs/toolkit");W();O();vr={isSigning:!1,signedSessions:{}},Ts=(0,fs.createSlice)({name:"signedMessageInfoSliceState",initialState:vr,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:r,errorMessage:c}=o.payload;c&&(e.errorMessage=c),e.isSigning=r.status==="pending",e.signedSessions[t]=g(g({},e.signedSessions[t]),r)},setSignSessionState:(e,o)=>g(g({},e),o.payload),clearSignedMessageInfo:()=>vr},extraReducers:e=>{e.addCase(M,()=>vr)}}),{setSignSession:gb,clearSignedMessageInfo:fb,setSignSessionState:Tb}=Ts.actions,ct=Ts.reducer});var xs,ys,hs,Ss,Ir,o_,vb,n_,mt,dt=y(()=>{"use strict";n();xs=require("@reduxjs/toolkit"),ys=require("redux-persist");W();Yn();O();hs={customToasts:[],transactionToasts:[]},Ss=(0,xs.createSlice)({name:"toastsSlice",initialState:hs,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,r=e.customToasts.findIndex(c=>c.toastId===t);if(r!==-1){e.customToasts[r]=w(g(g({},e.customToasts[r]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(w(g({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:mn(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(M,()=>hs),e.addCase(ys.REHYDRATE,(o,t)=>{var c,p;let r=(p=(c=t.customToasts)==null?void 0:c.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=r})}}),{addCustomToast:Ir,removeCustomToast:o_,addTransactionToast:vb,removeTransactionToast:n_}=Ss.actions,mt=Ss.reducer});var bs,kr,Lr,Pr,t_,Ar,ws,Lb,r_,Mo,lt,_t=y(()=>{"use strict";n();bs=require("@reduxjs/toolkit");O();kr="Transaction failed",Lr="Transaction successful",Pr="Processing transaction",t_="Transaction submitted",Ar={},ws=(0,bs.createSlice)({name:"transactionsInfo",initialState:Ar,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:r}=o.payload;t!=null&&(e[t]={errorMessage:(r==null?void 0:r.errorMessage)||kr,successMessage:(r==null?void 0:r.successMessage)||Lr,processingMessage:(r==null?void 0:r.processingMessage)||Pr,submittedMessage:(r==null?void 0:r.submittedMessage)||t_,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>Ar},extraReducers:e=>{e.addCase(M,()=>Ar)}}),{clearTransactionsInfo:Lb,setTransactionsDisplayInfo:r_,clearTransactionsInfoForSessionId:Mo}=ws.actions,lt=ws.reducer});function Fo(e){return e!=null&&(u_(e)||x_(e))}function Uo(e){return e!=null&&(g_(e)||y_(e))}function Bo(e){return e!=null&&(f_(e)||S_(e))}function vs(e){return e!=null&&(T_(e)||b_(e))}function Er(e){return e!=null&&h_(e)}function u_(e){return e!=null&&a_.includes(e)}function g_(e){return e!=null&&i_.includes(e)}function f_(e){return e!=null&&s_.includes(e)}function T_(e){return e!=null&&c_.includes(e)}function h_(e){return e!=null&&p_.includes(e)}function x_(e){return e!=null&&m_.includes(e)}function y_(e){return e!=null&&d_.includes(e)}function S_(e){return e!=null&&l_.includes(e)}function b_(e){return e!=null&&__.includes(e)}var a_,i_,s_,c_,p_,m_,d_,l_,__,Wo=y(()=>{"use strict";n();D();a_=["sent"],i_=["success"],s_=["fail","cancelled","timedOut"],c_=["invalid"],p_=["timedOut"],m_=["pending"],d_=["success"],l_=["fail","invalid"],__=["not executed"]});var Is,As,un,w_,ks,Ls,Ps,v_,Qe,I_,A_,Fb,k_,Ge,eo,Ub,ut,gt=y(()=>{"use strict";n();Is=require("@reduxjs/toolkit"),As=require("redux-persist");D();Wo();O();un={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},w_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},ks=(0,Is.createSlice)({name:"transactionsSlice",initialState:un,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,u;let{sessionId:t,transactions:r,errorMessage:c,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=g(g(g({},w_),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:r,status:p,errorMessage:c,redirectRoute:m,customTransactionInformation:g(g({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((u=e==null?void 0:e.transactionsToSign)==null?void 0:u.sessionId)===t&&(e.transactionsToSign=un.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=g(g({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:r,errorMessage:c,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=r,c!=null&&(e.signedTransactions[t].errorMessage=c),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var u,f,x,L,k,P,$,R;let{sessionId:t,status:r,errorMessage:c,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(f=(u=e.signedTransactions)==null?void 0:u[t])==null?void 0:f.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(F=>F.hash===p?w(g(g({},m!=null?m:{}),F),{status:r,errorMessage:c,inTransit:d}):F);let G=(L=(x=e.signedTransactions[t])==null?void 0:x.transactions)==null?void 0:L.every(F=>Uo(F.status)),oe=(P=(k=e.signedTransactions[t])==null?void 0:k.transactions)==null?void 0:P.some(F=>Bo(F.status)),fe=(R=($=e.signedTransactions[t])==null?void 0:$.transactions)==null?void 0:R.every(F=>vs(F.status));G&&(e.signedTransactions[t].status="success"),oe&&(e.signedTransactions[t].status="fail"),fe&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:r}=o.payload;e.customTransactionInformationForSessionId[t]=r,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=un.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=un.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:r}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=g(g({},e.signedTransactions[t].customTransactionInformation),r))}},extraReducers:e=>{e.addCase(M,()=>un),e.addCase(As.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:c}=t.payload.transactions,p=Object.entries(r).reduce((d,[l,u])=>{let f=new Date(l),x=new Date;return x.setHours(x.getHours()+5),x-f>0||(d[l]=u),d},{});c!=null&&(o.customTransactionInformationForSessionId=c),r!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:Ls,updateSignedTransactions:Ps,setTransactionsToSign:v_,clearAllTransactionsToSign:Qe,clearAllSignedTransactions:I_,clearSignedTransaction:A_,clearTransactionToSign:Fb,setSignTransactionsError:k_,setSignTransactionsCancelMessage:Ge,moveTransactionsToSignedState:eo,updateSignedTransactionsCustomTransactionInformation:Ub}=ks.actions,ut=ks.reducer});var Es,Cr,Cs,Hb,$b,L_,Vb,ft,Tt=y(()=>{"use strict";n();Es=require("@reduxjs/toolkit");O();Cr={},Cs=(0,Es.createSlice)({name:"batchTransactionsSlice",initialState:Cr,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>Cr},extraReducers:e=>{e.addCase(M,()=>Cr)}}),{setBatchTransactions:Hb,updateBatchTransactions:$b,clearBatchTransactions:L_,clearAllBatchTransactions:Vb}=Cs.actions,ft=Cs.reducer});var Rs,Ns,Ds,Kb,Ms,Nr=y(()=>{"use strict";n();Rs=require("@reduxjs/toolkit");O();Ns={},Ds=(0,Rs.createSlice)({name:"dappConfigSlice",initialState:Ns,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(M,()=>Ns)}}),{setDappConfig:Kb}=Ds.actions,Ms=Ds.reducer});var E=y(()=>{"use strict";n();ot();tt();at();st();pt();dt();_t();gt();Tt();Nr()});var Rr=y(()=>{"use strict";n()});var Us,N_,R_,uo,yt=y(()=>{"use strict";n();Us=require("@reduxjs/toolkit");Rr();ot();Tt();Nr();tt();at();st();pt();dt();_t();gt();N_={["account"]:et,["dappConfig"]:Ms,["loginInfo"]:nt,["modals"]:rt,["networkConfig"]:it,["signedMessageInfo"]:ct,["toasts"]:mt,["transactionsInfo"]:lt,["transactions"]:ut,["batchTransactions"]:ft},R_=(e={})=>(0,Us.combineReducers)(g(g({},N_),e)),uo=R_});var Hs={};_e(Hs,{default:()=>X_,sessionStorageReducers:()=>Dr});function He(e,o=[]){return{key:e,version:1,storage:Ws.default,blacklist:o}}var se,Bs,Ws,D_,gn,M_,O_,F_,U_,B_,W_,G_,H_,$_,V_,Gs,q_,Dr,j_,z_,K_,X_,$s=y(()=>{"use strict";n();se=require("redux-persist"),Bs=h(require("redux-persist/lib/storage")),Ws=h(require("redux-persist/lib/storage/session"));yt();E();ot();Tt();tt();at();st();pt();dt();_t();gt();Rr();D_={persistReducersStorageType:"localStorage"},gn={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},M_=He(gn["account"]),O_=He(gn["loginInfo"]),F_=He(gn["modals"]),U_=He(gn["networkConfig"]),B_={2:e=>w(g({},e),{networkConfig:wr})};W_=He("sdk-dapp-transactionsInfo"),G_=He("sdk-dapp-transactions",["transactionsToSign"]),H_=He("sdk-dapp-batchTransactions",["batchTransactions"]),$_=He("sdk-dapp-toasts"),V_=He("sdk-dapp-signedMessageInfo"),Gs={key:"sdk-dapp-store",version:2,storage:Bs.default,whitelist:Object.keys(gn),migrate:(0,se.createMigrate)(B_,{debug:!1})},q_=w(g({},Gs),{whitelist:[]}),Dr={["toasts"]:(0,se.persistReducer)($_,mt),["transactions"]:(0,se.persistReducer)(G_,ut),["transactionsInfo"]:(0,se.persistReducer)(W_,lt),["batchTransactions"]:(0,se.persistReducer)(H_,ft),["signedMessageInfo"]:(0,se.persistReducer)(V_,ct)},j_=w(g({},Dr),{["account"]:(0,se.persistReducer)(M_,et),["loginInfo"]:(0,se.persistReducer)(O_,nt),["modals"]:(0,se.persistReducer)(F_,rt),["networkConfig"]:(0,se.persistReducer)(U_,it)}),z_=D_.persistReducersStorageType==="localStorage",K_=z_?(0,se.persistReducer)(Gs,uo(Dr)):(0,se.persistReducer)(q_,uo(j_)),X_=K_});var Vs={};_e(Vs,{default:()=>Y_});var Y_,qs=y(()=>{"use strict";n();yt();Y_=uo()});var js={};_e(js,{default:()=>Z_});var ge,J_,Z_,zs=y(()=>{"use strict";n();ge=require("redux-persist"),J_=[ge.FLUSH,ge.REHYDRATE,ge.PAUSE,ge.PERSIST,ge.PURGE,ge.REGISTER],Z_=J_});var Ys={};_e(Ys,{default:()=>Xs});function Xs(e){return(0,Ks.persistStore)(e)}var Ks,Js=y(()=>{"use strict";n();Ks=require("redux-persist")});var tp=b((F2,np)=>{n();var Rg=typeof i=="object"&&i&&i.Object===Object&&i;np.exports=Rg});var wn=b((U2,rp)=>{n();var Dg=tp(),Mg=typeof self=="object"&&self&&self.Object===Object&&self,Og=Dg||Mg||Function("return this")();rp.exports=Og});var ta=b((B2,ap)=>{n();var Fg=wn(),Ug=Fg.Symbol;ap.exports=Ug});var pp=b((W2,cp)=>{n();var ip=ta(),sp=Object.prototype,Bg=sp.hasOwnProperty,Wg=sp.toString,vn=ip?ip.toStringTag:void 0;function Gg(e){var o=Bg.call(e,vn),t=e[vn];try{e[vn]=void 0;var r=!0}catch(p){}var c=Wg.call(e);return r&&(o?e[vn]=t:delete e[vn]),c}cp.exports=Gg});var dp=b((G2,mp)=>{n();var Hg=Object.prototype,$g=Hg.toString;function Vg(e){return $g.call(e)}mp.exports=Vg});var ra=b((H2,up)=>{n();var lp=ta(),qg=pp(),jg=dp(),zg="[object Null]",Kg="[object Undefined]",_p=lp?lp.toStringTag:void 0;function Xg(e){return e==null?e===void 0?Kg:zg:_p&&_p in Object(e)?qg(e):jg(e)}up.exports=Xg});var fp=b(($2,gp)=>{n();var Yg=Array.isArray;gp.exports=Yg});var hp=b((V2,Tp)=>{n();function Jg(e){return e!=null&&typeof e=="object"}Tp.exports=Jg});var yp=b((q2,xp)=>{n();var Zg=ra(),Qg=fp(),ef=hp(),of="[object String]";function nf(e){return typeof e=="string"||!Qg(e)&&ef(e)&&Zg(e)==of}xp.exports=nf});var Wt=b(($3,Ap)=>{n();function ff(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}Ap.exports=ff});var Lp=b((V3,kp)=>{n();var Tf=ra(),hf=Wt(),xf="[object AsyncFunction]",yf="[object Function]",Sf="[object GeneratorFunction]",bf="[object Proxy]";function wf(e){if(!hf(e))return!1;var o=Tf(e);return o==yf||o==Sf||o==xf||o==bf}kp.exports=wf});var Ep=b((q3,Pp)=>{n();var vf=wn(),If=vf["__core-js_shared__"];Pp.exports=If});var Rp=b((j3,Np)=>{n();var pa=Ep(),Cp=function(){var e=/[^.]+$/.exec(pa&&pa.keys&&pa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Af(e){return!!Cp&&Cp in e}Np.exports=Af});var Mp=b((z3,Dp)=>{n();var kf=Function.prototype,Lf=kf.toString;function Pf(e){if(e!=null){try{return Lf.call(e)}catch(o){}try{return e+""}catch(o){}}return""}Dp.exports=Pf});var Fp=b((K3,Op)=>{n();var Ef=Lp(),Cf=Rp(),Nf=Wt(),Rf=Mp(),Df=/[\\^$.*+?()[\]{}|]/g,Mf=/^\[object .+?Constructor\]$/,Of=Function.prototype,Ff=Object.prototype,Uf=Of.toString,Bf=Ff.hasOwnProperty,Wf=RegExp("^"+Uf.call(Bf).replace(Df,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Gf(e){if(!Nf(e)||Cf(e))return!1;var o=Ef(e)?Wf:Mf;return o.test(Rf(e))}Op.exports=Gf});var Bp=b((X3,Up)=>{n();function Hf(e,o){return e==null?void 0:e[o]}Up.exports=Hf});var Gt=b((Y3,Wp)=>{n();var $f=Fp(),Vf=Bp();function qf(e,o){var t=Vf(e,o);return $f(t)?t:void 0}Wp.exports=qf});var An=b((J3,Gp)=>{n();var jf=Gt(),zf=jf(Object,"create");Gp.exports=zf});var Vp=b((Z3,$p)=>{n();var Hp=An();function Kf(){this.__data__=Hp?Hp(null):{},this.size=0}$p.exports=Kf});var jp=b((Q3,qp)=>{n();function Xf(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}qp.exports=Xf});var Kp=b((eO,zp)=>{n();var Yf=An(),Jf="__lodash_hash_undefined__",Zf=Object.prototype,Qf=Zf.hasOwnProperty;function eT(e){var o=this.__data__;if(Yf){var t=o[e];return t===Jf?void 0:t}return Qf.call(o,e)?o[e]:void 0}zp.exports=eT});var Yp=b((oO,Xp)=>{n();var oT=An(),nT=Object.prototype,tT=nT.hasOwnProperty;function rT(e){var o=this.__data__;return oT?o[e]!==void 0:tT.call(o,e)}Xp.exports=rT});var Zp=b((nO,Jp)=>{n();var aT=An(),iT="__lodash_hash_undefined__";function sT(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=aT&&o===void 0?iT:o,this}Jp.exports=sT});var em=b((tO,Qp)=>{n();var cT=Vp(),pT=jp(),mT=Kp(),dT=Yp(),lT=Zp();function Yo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Yo.prototype.clear=cT;Yo.prototype.delete=pT;Yo.prototype.get=mT;Yo.prototype.has=dT;Yo.prototype.set=lT;Qp.exports=Yo});var nm=b((rO,om)=>{n();function _T(){this.__data__=[],this.size=0}om.exports=_T});var rm=b((aO,tm)=>{n();function uT(e,o){return e===o||e!==e&&o!==o}tm.exports=uT});var kn=b((iO,am)=>{n();var gT=rm();function fT(e,o){for(var t=e.length;t--;)if(gT(e[t][0],o))return t;return-1}am.exports=fT});var sm=b((sO,im)=>{n();var TT=kn(),hT=Array.prototype,xT=hT.splice;function yT(e){var o=this.__data__,t=TT(o,e);if(t<0)return!1;var r=o.length-1;return t==r?o.pop():xT.call(o,t,1),--this.size,!0}im.exports=yT});var pm=b((cO,cm)=>{n();var ST=kn();function bT(e){var o=this.__data__,t=ST(o,e);return t<0?void 0:o[t][1]}cm.exports=bT});var dm=b((pO,mm)=>{n();var wT=kn();function vT(e){return wT(this.__data__,e)>-1}mm.exports=vT});var _m=b((mO,lm)=>{n();var IT=kn();function AT(e,o){var t=this.__data__,r=IT(t,e);return r<0?(++this.size,t.push([e,o])):t[r][1]=o,this}lm.exports=AT});var gm=b((dO,um)=>{n();var kT=nm(),LT=sm(),PT=pm(),ET=dm(),CT=_m();function Jo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Jo.prototype.clear=kT;Jo.prototype.delete=LT;Jo.prototype.get=PT;Jo.prototype.has=ET;Jo.prototype.set=CT;um.exports=Jo});var Tm=b((lO,fm)=>{n();var NT=Gt(),RT=wn(),DT=NT(RT,"Map");fm.exports=DT});var ym=b((_O,xm)=>{n();var hm=em(),MT=gm(),OT=Tm();function FT(){this.size=0,this.__data__={hash:new hm,map:new(OT||MT),string:new hm}}xm.exports=FT});var bm=b((uO,Sm)=>{n();function UT(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}Sm.exports=UT});var Ln=b((gO,wm)=>{n();var BT=bm();function WT(e,o){var t=e.__data__;return BT(o)?t[typeof o=="string"?"string":"hash"]:t.map}wm.exports=WT});var Im=b((fO,vm)=>{n();var GT=Ln();function HT(e){var o=GT(this,e).delete(e);return this.size-=o?1:0,o}vm.exports=HT});var km=b((TO,Am)=>{n();var $T=Ln();function VT(e){return $T(this,e).get(e)}Am.exports=VT});var Pm=b((hO,Lm)=>{n();var qT=Ln();function jT(e){return qT(this,e).has(e)}Lm.exports=jT});var Cm=b((xO,Em)=>{n();var zT=Ln();function KT(e,o){var t=zT(this,e),r=t.size;return t.set(e,o),this.size+=t.size==r?0:1,this}Em.exports=KT});var Rm=b((yO,Nm)=>{n();var XT=ym(),YT=Im(),JT=km(),ZT=Pm(),QT=Cm();function Zo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var r=e[o];this.set(r[0],r[1])}}Zo.prototype.clear=XT;Zo.prototype.delete=YT;Zo.prototype.get=JT;Zo.prototype.has=ZT;Zo.prototype.set=QT;Nm.exports=Zo});var Mm=b((SO,Dm)=>{n();var eh="__lodash_hash_undefined__";function oh(e){return this.__data__.set(e,eh),this}Dm.exports=oh});var Fm=b((bO,Om)=>{n();function nh(e){return this.__data__.has(e)}Om.exports=nh});var Bm=b((wO,Um)=>{n();var th=Rm(),rh=Mm(),ah=Fm();function Ht(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new th;++o<t;)this.add(e[o])}Ht.prototype.add=Ht.prototype.push=rh;Ht.prototype.has=ah;Um.exports=Ht});var Gm=b((vO,Wm)=>{n();function ih(e,o,t,r){for(var c=e.length,p=t+(r?1:-1);r?p--:++p<c;)if(o(e[p],p,e))return p;return-1}Wm.exports=ih});var $m=b((IO,Hm)=>{n();function sh(e){return e!==e}Hm.exports=sh});var qm=b((AO,Vm)=>{n();function ch(e,o,t){for(var r=t-1,c=e.length;++r<c;)if(e[r]===o)return r;return-1}Vm.exports=ch});var zm=b((kO,jm)=>{n();var ph=Gm(),mh=$m(),dh=qm();function lh(e,o,t){return o===o?dh(e,o,t):ph(e,mh,t)}jm.exports=lh});var Xm=b((LO,Km)=>{n();var _h=zm();function uh(e,o){var t=e==null?0:e.length;return!!t&&_h(e,o,0)>-1}Km.exports=uh});var Jm=b((PO,Ym)=>{n();function gh(e,o,t){for(var r=-1,c=e==null?0:e.length;++r<c;)if(t(o,e[r]))return!0;return!1}Ym.exports=gh});var Qm=b((EO,Zm)=>{n();function fh(e,o){return e.has(o)}Zm.exports=fh});var od=b((CO,ed)=>{n();var Th=Gt(),hh=wn(),xh=Th(hh,"Set");ed.exports=xh});var td=b((NO,nd)=>{n();function yh(){}nd.exports=yh});var ma=b((RO,rd)=>{n();function Sh(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}rd.exports=Sh});var id=b((DO,ad)=>{n();var da=od(),bh=td(),wh=ma(),vh=1/0,Ih=da&&1/wh(new da([,-0]))[1]==vh?function(e){return new da(e)}:bh;ad.exports=Ih});var cd=b((MO,sd)=>{n();var Ah=Bm(),kh=Xm(),Lh=Jm(),Ph=Qm(),Eh=id(),Ch=ma(),Nh=200;function Rh(e,o,t){var r=-1,c=kh,p=e.length,m=!0,d=[],l=d;if(t)m=!1,c=Lh;else if(p>=Nh){var u=o?null:Eh(e);if(u)return Ch(u);m=!1,c=Ph,l=new Ah}else l=o?[]:d;e:for(;++r<p;){var f=e[r],x=o?o(f):f;if(f=t||f!==0?f:0,m&&x===x){for(var L=l.length;L--;)if(l[L]===x)continue e;o&&l.push(x),d.push(f)}else c(l,x,t)||(l!==d&&l.push(x),d.push(f))}return d}sd.exports=Rh});var md=b((OO,pd)=>{n();var Dh=cd();function Mh(e){return e&&e.length?Dh(e):[]}pd.exports=Mh});var Sa={};_e(Sa,{css:()=>Id,default:()=>tx});var Id,tx,ba=y(()=>{"use strict";n();Id=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Id));tx={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var qe={};_e(qe,{css:()=>Ld,default:()=>ix});var Ld,ix,je=y(()=>{"use strict";n();Ld=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ld));ix={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Dn={};_e(Dn,{css:()=>Wd,default:()=>kx});var Wd,kx,Mn=y(()=>{"use strict";n();Wd=`.dapp-core-component__transactionStatusToastStyles__transactions-status-toast {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
}

.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: left;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.75rem;
}

.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
}
.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon .dapp-core-component__transactionStatusToastStyles__svg {
  height: auto;
  width: 40px;
}
.dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon .dapp-core-component__transactionStatusToastStyles__svg path {
  fill: #fff;
}

.dapp-core-component__transactionStatusToastStyles__toasts {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
  font-family: "Helvetica", sans-serif;
}
.dapp-core-component__transactionStatusToastStyles__toasts.dapp-core-component__transactionStatusToastStyles__toastWrapper {
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  background-color: #fff;
  position: relative;
}
@media (min-width: 768px) {
  .dapp-core-component__transactionStatusToastStyles__toasts {
    right: 2rem;
    bottom: 2rem;
    width: 22.5rem;
    left: auto;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wd));kx={"transactions-status-toast":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast",transactionsStatusToast:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast","transactions-status-toast-content":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content",transactionsStatusToastContent:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-content","transactions-status-toast-icon":"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",transactionsStatusToastIcon:"dapp-core-component__transactionStatusToastStyles__transactions-status-toast-icon",svg:"dapp-core-component__transactionStatusToastStyles__svg",toasts:"dapp-core-component__transactionStatusToastStyles__toasts",toastWrapper:"dapp-core-component__transactionStatusToastStyles__toastWrapper"}});var Oa={};_e(Oa,{css:()=>jd,default:()=>Dx});var jd,Dx,Fa=y(()=>{"use strict";n();jd=`.dapp-core-component__pageState-styles__wrapper {
  color: inherit;
}

.dapp-core-component__pageState-styles__state {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jd));Dx={wrapper:"dapp-core-component__pageState-styles__wrapper",state:"dapp-core-component__pageState-styles__state"}});var Ua={};_e(Ua,{css:()=>Xd,default:()=>Ox});var Xd,Ox,Ba=y(()=>{"use strict";n();Xd=`.dapp-core-component__signWaitingScreenModal-styles__extension-modal {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__modal-container {
  color: inherit;
}

.dapp-core-component__signWaitingScreenModal-styles__extension {
  color: inherit;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xd));Ox={"extension-modal":"dapp-core-component__signWaitingScreenModal-styles__extension-modal",extensionModal:"dapp-core-component__signWaitingScreenModal-styles__extension-modal","modal-container":"dapp-core-component__signWaitingScreenModal-styles__modal-container",modalContainer:"dapp-core-component__signWaitingScreenModal-styles__modal-container",extension:"dapp-core-component__signWaitingScreenModal-styles__extension"}});var Bx={};_e(Bx,{ConfirmationScreen:()=>Nx,DeviceConfirmationScreen:()=>Rx,SignWaitingScreenModal:()=>Ux,TransactionStatusToast:()=>On});module.exports=te(Bx);n();n();var Da=h(require("react"));n();n();n();var tc=require("react"),Go=require("react-redux");n();var Mr=require("@reduxjs/toolkit"),oc=require("react-redux/lib/utils/Subscription");E();n();var Os=h(require("lodash.throttle"));A();E();yr();Ro();No();var P_=[Xn],ht=!1,E_=(0,Os.default)(()=>{ln(dn())},5e3),Fs=e=>o=>t=>{if(P_.includes(t.type))return o(t);let r=e.getState(),c=_o.local.getItem(Je.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return o(t);if(c==null)return ln(dn());let m=Date.now();return c-m<0&&!ht?setTimeout(()=>{ht=!0,e.dispatch(os())},1e3):(ht&&(ht=!1),E_()),o(t)};n();n();function xt(){return typeof sessionStorage!="undefined"}var Zs=xt()?($s(),te(Hs)).default:(qs(),te(Vs)).default,Qs=xt()?(zs(),te(js)).default:[],ec=xt()?(Js(),te(Ys)).default:e=>e;yt();var v=(0,Mr.configureStore)({reducer:Zs,middleware:e=>e({serializableCheck:{ignoredActions:[...Qs,xr.type,Qn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Fs)}),nc=(0,oc.createSubscription)(v),j0=ec(v),z0=(0,Mr.configureStore)({reducer:uo});var Q_={store:v,subscription:nc},Or=(0,tc.createContext)(Q_),J0=(0,Go.createStoreHook)(Or),H=(0,Go.createDispatchHook)(Or),I=(0,Go.createSelectorHook)(Or);n();n();E();n();var rc=h(require("lodash.isequal")),St=require("reselect"),S=(0,St.createSelectorCreator)(St.defaultMemoize,rc.default);var Le=e=>e.account,oo=S(Le,e=>e.address),go=S(Le,oo,(e,o)=>o in e.accounts?e.accounts[o]:Zn),eu=S(Le,go,(e,o)=>{let c=e,{accounts:t}=c,r=Xe(c,["accounts"]);return w(g({},r),{address:o.address,account:o})}),nw=S(go,e=>e.balance),ac=S(go,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),tw=S(Le,e=>e.shard),ou=S(Le,e=>e.ledgerAccount),rw=S(Le,e=>e.walletConnectAccount),aw=S(Le,e=>e.isAccountLoading),iw=S(Le,e=>e.accountLoadingError),nu=S(Le,e=>e.websocketEvent),tu=S(Le,e=>e.websocketBatchEvent);n();var fn=e=>e.dappConfig,pw=S(fn,e=>e.shouldUseWebViewProvider);n();var de=e=>e.loginInfo,ru=S(de,e=>e.loginMethod),bt=S(de,oo,(e,o)=>Boolean(o)),_w=S(de,e=>e.walletConnectLogin),au=S(de,e=>e.ledgerLogin),iu=S(de,e=>e.walletLogin),uw=S(de,e=>e.isLoginSessionInvalid),Fr=S(de,e=>e.tokenLogin),ic=S(de,e=>e.logoutRoute),su=S(de,e=>e.isWalletConnectV2Initialized);n();var sc=e=>e.modals,Tw=S(sc,e=>e.txSubmittedModal),cu=S(sc,e=>e.notificationModal);n();var Pe=e=>e.networkConfig,wt=S(Pe,e=>e.network.chainId),pu=S(Pe,e=>e.network.roundDuration),yw=S(Pe,e=>e.network.walletConnectBridgeAddress),mu=S(Pe,e=>e.network.walletConnectV2RelayAddress),du=S(Pe,e=>e.network.walletConnectV2ProjectId),lu=S(Pe,e=>e.network.walletConnectV2Options),_u=S(Pe,e=>e.network.walletConnectDeepLink),ce=S(Pe,e=>e.network),Ur=S(ce,e=>e.apiAddress),cc=S(ce,e=>e.explorerAddress),Br=S(ce,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),uu=S(ce,e=>e.xAliasAddress),pc=S(ce,e=>e.egldLabel);n();var vt=e=>e.signedMessageInfo,ww=S(vt,e=>e.isSigning),vw=S(vt,e=>e.errorMessage),Iw=S(vt,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),Aw=S(vt,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var mc=e=>e.toasts,gu=S(mc,e=>e.customToasts),dc=S(mc,e=>e.transactionToasts);n();E();var lc={errorMessage:kr,successMessage:Lr,processingMessage:Pr},_c=e=>e.transactionsInfo,fu=S(_c,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||lc);n();n();var Ee=require("@multiversx/sdk-core");A();n();var Wr=require("@multiversx/sdk-core/out");n();n();function It(e){try{let o=atob(e),t=btoa(o),r=a.Buffer.from(e,"base64").toString(),c=a.Buffer.from(r).toString("base64"),p=e===t||t.startsWith(e),m=e===c||c.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}function fo(e){return It(e)?atob(e):e}n();n();n();n();var uc=e=>{let o=e!=null?e:"";return It(o)?Wr.TransactionPayload.fromEncoded(o):new Wr.TransactionPayload(o)};n();A();var Ho=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(sr).some(t=>e.startsWith(t)):!1;function Tn(e){var r,c,p;let o=g({},e);Ho({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new Ee.Transaction(g(g(w(g(w(g({value:o.value.valueOf(),data:uc(o.data),nonce:o.nonce.valueOf(),receiver:new Ee.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new Ee.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(r=o.gasLimit.valueOf())!=null?r:jn,gasPrice:(c=o.gasPrice.valueOf())!=null?c:zn,chainID:o.chainID.valueOf(),version:new Ee.TransactionVersion((p=o.version)!=null?p:Bi)}),o.options?{options:new Ee.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new Ee.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(a.Buffer.from(o.signature,"hex")),t}n();n();A();function hu(e,o){let t=new URLSearchParams(e),r=Object.fromEntries(t);return{nextUrlParams:new URLSearchParams(g(g({},r),o)).toString(),params:r}}var xu="3.1.0";function At({callbackUrl:e,urlParams:o={}}){let t=e;if(Object.entries(o).length>0)try{let{search:r,origin:c,pathname:p,hash:m}=new URL(e),d=w(g({},o),{[Kn]:xu}),{nextUrlParams:l}=hu(r,d);t=`${c}${p}?${l}${m}`}catch(r){return console.error("Unable to construct URL from: ",e,r),t}return t}n();n();n();var Su=require("@multiversx/sdk-core/out");n();A();n();var gc=require("@multiversx/sdk-core");W();n();var bu=require("@multiversx/sdk-core");n();n();n();var wu=require("@multiversx/sdk-core"),vu=h(require("bignumber.js"));D();n();n();n();var $o="accounts";var Hr="blocks";n();n();n();n();ae();n();n();ae();n();n();n();var Nu=h(require("bignumber.js"));A();n();var Cu=require("@multiversx/sdk-core"),$r=h(require("bignumber.js"));A();n();var Pu=h(require("bignumber.js"));n();$r.default.config({ROUNDING_MODE:$r.default.ROUND_FLOOR});n();n();n();A();n();n();n();n();A();n();A();n();var Ru=require("@multiversx/sdk-core");A();n();var xn=require("@multiversx/sdk-core"),Ou=h(require("bignumber.js"));A();n();n();var Du=h(require("bignumber.js"));A();n();A();n();n();n();n();n();n();A();n();A();n();A();n();ae();var Uu=["reDelegateRewards","claimRewards","unBond"],Bu=["wrapEgld","unwrapEgld"],Wu=["unStake"],Gu=["unDelegate"];n();n();n();A();n();var qu=h(require("bignumber.js"));n();n();ae();n();var zu=h(require("bignumber.js"));n();n();n();n();var Yu=h(require("bignumber.js"));W();n();n();n();n();D();function Vo(e){let t=Object.getPrototypeOf(e).toPlainObject!=null?e:Tn(e),r=w(g({},t.toPlainObject()),{hash:t.getHash().hex(),senderUsername:t.getSenderUsername().valueOf(),receiverUsername:t.getReceiverUsername().valueOf(),status:"pending"});return Ho({data:r.data,onlySetGuardian:!0})&&(delete r.senderUsername,delete r.receiverUsername),r}n();var bc=require("@multiversx/sdk-web-wallet-provider");A();n();var Sc=h(require("qs"));n();J();var Pt=e=>{let o=new URLSearchParams(e).toString(),{pathname:t,hash:r}=N(),c=o?`?${o}`:"",p=t?`${t}${c}${r}`:"./";setTimeout(()=>{window==null||window.history.replaceState({},document==null?void 0:document.title,p)})};Do();n();Do();var Ju={search:Ue()?window.location.search:"",removeParams:[]},yc=(e,o=Ju)=>{var m;let t={},r=Ue()?window.location.search:"",c=(m=o.search)!=null?m:r;if(c){let d=c?new URLSearchParams(c):[];t=Object.fromEntries(d)}let p={};return e.forEach(d=>{p[d]=t[d],delete t[d]}),o.removeParams!=null&&Object.keys(t).forEach(d=>{var u,f;let[l]=d.split("[");(((u=o.removeParams)==null?void 0:u.includes(d))||((f=o.removeParams)==null?void 0:f.includes(l)))&&delete t[d]}),{remainingParams:p,params:t,clearNavigationHistory:()=>Pt(t)}};var Et=({removeParams:e,search:o})=>{let t=Ue()?window.location.search:"",r=o!=null?o:t;if(!r)return{};let c=Sc.default.parse(r.replace("?","")),p=Object.keys(c).filter(d=>!e.includes(d)),{remainingParams:m}=yc(p,{search:o,removeParams:e});return Pt(m),m};var wc=({transaction:e,search:o})=>Et({removeParams:[...Object.keys(e),bc.WALLET_PROVIDER_CALLBACK_PARAM,ke,Kn],search:o});n();n();n();Y();n();ae();n();n();Y();n();var Zu=h(require("linkifyjs"));n();A();n();var Qu=h(require("bignumber.js"));n();W();n();n();D();n();D();n();n();n();ae();n();ae();n();var eg=h(require("bignumber.js"));A();ae();n();ae();n();var Ic=require("react");W();n();n();ae();n();n();var og=require("@multiversx/sdk-core/out"),ng=h(require("bignumber.js"));ae();n();W();n();n();W();var Y1=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var Ac=require("react");W();Y();n();var rg=require("react");ae();var rP=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Wo();n();var Ct=e=>e.transactions,qo=S(Ct,e=>e.signedTransactions),kc=S(Ct,e=>e.signTransactionsError),Nt=S(Ct,e=>e.signTransactionsCancelMessage),Rt=e=>o=>Object.entries(o).reduce((t,[r,c])=>(e(c.status)&&(t[r]=c),t),{}),Lc=S(qo,Rt(Fo)),Pc=S(qo,Rt(Uo)),Ec=S(qo,Rt(Bo)),ag=S(qo,Rt(Er)),Dt=S(Ct,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:w(g({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>Tn(t)))||[]})}),ig=S(qo,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});n();var Cc=require("react");n();E();n();n();n();n();n();n();n();n();var Rc=require("@multiversx/sdk-extension-provider"),Dc=require("@multiversx/sdk-hw-provider"),Mc=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Oc=require("@multiversx/sdk-opera-provider"),Fc=require("@multiversx/sdk-passkey-provider/out"),zr=require("@multiversx/sdk-web-wallet-provider");A();Ye();n();var he=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Nc=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");D();n();var jr=jo;var sg="/dapp/init",no=e=>{switch(e==null?void 0:e.constructor){case zr.WalletProvider:return"wallet";case jr:return"walletconnectv2";case Dc.HWProvider:return"ledger";case Rc.ExtensionProvider:return"extension";case Fc.PasskeyProvider:return"passkey";case Mc.MetamaskProvider:return"metamask";case Oc.OperaProvider:return"opera";case ee.CrossWindowProvider:return"crossWindow";case he.IframeProvider:return"iframe";case jo:return"";default:return"extra"}},Kr=e=>new zr.WalletProvider(`${e}${sg}`);var xe=e=>`Unable to perform ${e}, Provider not initialized`,jo=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(xe("getAccount"))}setAccount(o){throw new Error(xe(`setAccount: ${o}`))}login(o){throw new Error(xe(`login with options: ${o}`))}logout(o){throw new Error(xe(`logout with options: ${o}`))}getAddress(){throw new Error(xe("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(xe(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(xe(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(xe(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(xe(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(xe(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(xe(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Mt=new jo;var Bc=Mt,Uc=null;function Wc(){Uc!=null&&(Bc=Uc)}function Ce(){return Bc||Mt}E();n();n();n();n();n();var Gc=require("@lifeomic/axios-fetch"),Xr=h(require("axios")),Yr=(0,Gc.buildAxiosFetch)(Xr.default),Jr=(e,o)=>T(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=e.clone().json(),[c]=yield Promise.all([r]);return{data:c,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function cg(e,o,t){return T(this,null,function*(){try{let r=yield Yr(e,g({method:"POST",body:o?JSON.stringify(o):void 0,headers:g({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Jr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function pg(e,o){return T(this,null,function*(){try{let t=yield Yr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Jr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function mg(e,o,t){return T(this,null,function*(){try{let r=yield Yr(e,g({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return Jr(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var to=Xr.default.create();to.get=pg;to.post=cg;to.patch=mg;var Hc=e=>to.get(e).then(o=>o.data);n();var zo=e=>{let o=e!=null?e:Ur(v.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var dg=h(require("axios"));n();var $c=h(require("swr"));var Ko=({apiEndpoint:e})=>{let o=zo(),t=e?`${o}/${e}`:null;return(0,$c.default)(t,Hc)};var lg=e=>{let t=`${zo()}/${$o}/${e}?withGuardianInfo=true`;return to.get(t)},Vc=e=>T(void 0,null,function*(){if(!e)return null;try{let{data:o}=yield lg(e);return o}catch(o){console.error("error fetching configuration for ",e,o)}return null});var Xo=e=>Vc(e);n();D();n();n();n();Y();n();function Sn(e){let o=v.getState(),t=ac(o);return e?t&&!isNaN(t)?Math.max(t,e.nonce):e.nonce:t}Wo();n();n();n();var _g=h(require("axios"));n();var gg=h(require("axios"));Eo();n();A();n();var fg=h(require("axios"));n();var hg=h(require("axios"));n();n();var xg=h(require("axios"));n();var yg=h(require("axios"));n();n();E();D();n();n();n();n();Y();n();O();W();n();E();n();var Kc=require("@multiversx/sdk-core");W();J();n();Wo();n();E();D();n();E();W();n();n();n();W();n();qn();n();var Ft=()=>I(kc);n();n();n();var vg=h(require("swr"));n();n();n();n();var Xc=require("react");n();n();var Yc=require("react"),Jc=require("@multiversx/sdk-web-wallet-provider"),Zc=require("@multiversx/sdk-web-wallet-provider"),Qc=h(require("qs"));A();E();D();mr();Y();var Ig=N();function Ut(e){let o=I(ce),t=H(),{shouldFetchWalletUrlOnLoad:r}=I(fn),{search:c}=r?Ig:N();(0,Yc.useEffect)(()=>{if(c!=null){let p=Qc.default.parse(c.replace("?",""));if(p&&ke in p){let m=String(p[ke]),d=new Jc.WalletProvider(`${o.walletAddress}${Wi}`).getTransactionsFromWalletUrl(c);if(p.status==="cancelled"){t(eo({sessionId:m,status:"cancelled"})),e(),Et({removeParams:[...Object.keys(pr),Zc.WALLET_PROVIDER_CALLBACK_PARAM,ke,"address"],search:c}),t(Ge(Fe));return}if(d.length>0){t(eo({sessionId:m,status:"signed",transactions:d.map(u=>Vo(u))}));let[l]=d;wc({transaction:l,search:c})}}}},[c])}n();var Ip=require("react"),ca=require("@multiversx/sdk-core");n();var bn=e=>Ko({apiEndpoint:e?`${$o}/${e}?withGuardianInfo=true`:null});A();br();n();n();var Zr=(e,o)=>e?Array.isArray(o)?o.some(t=>e.address===t||e.activeGuardianAddress===t):e.address===o||e.activeGuardianAddress===o:!0;n();function Qr(e){let o=Dt(v.getState()),t=Object.keys(e).length===(o==null?void 0:o.transactions.length);return e&&(e&&t)}n();n();n();var ea=({accountNonce:e,transactionNonce:o})=>o&&o>e?o:e;var ep=({latestNonce:e,transactions:o})=>o.length===0?o:o.map((t,r)=>{let c=e+r,p=t.getNonce().valueOf(),m=ea({accountNonce:c,transactionNonce:p});return t.setNonce(m),t});var Bt=()=>{let e=I(oo),{data:o}=bn(e);return t=>T(void 0,null,function*(){let r=o!=null?o:yield Xo(e),c=Sn(r);return ep({latestNonce:c,transactions:t})})};n();var oa=({transactions:e,isGuarded:o})=>o?e.length===0?!1:e.every(t=>Boolean(t.getGuardianSignature().toString("hex"))):!0;n();n();n();Eo();n();var Lg=h(require("axios"));n();var Eg=h(require("axios"));n();Eo();n();Eo();function na(e){return Di[e]}n();n();n();n();var Cg=require("@multiversx/sdk-opera-provider");n();var Ng=require("@multiversx/sdk-extension-provider");n();Ye();function op(t){return T(this,arguments,function*({address:e,walletUrl:o}){try{let r=yield ee.CrossWindowProvider.getInstance().init(),c=ee.CrossWindowProvider.getInstance().setAddress(e).setWalletUrl(o);if(r)return c;console.error("Could not initialise Cross Window Wallet provider")}catch(r){console.error("Unable to login to CrossWindowWalletProvider",r)}return null})}n();n();n();n();var Sp=h(yp());var In=e=>{if(!e||!(0,Sp.default)(e))return null;let o=e.split(".");if(o.length!==4)return null;try{let[t,r,c,p]=o,m=JSON.parse(fo(p)),d=fo(t);return{ttl:Number(c),extraInfo:m,origin:d,blockHash:r}}catch(t){return console.error(`Error trying to decode ${e}:`,t),null}};n();var sf=require("@multiversx/sdk-native-auth-client");n();var vp=h(require("axios"));n();n();n();function bp(e){return T(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var wp=(e,o,t,r=0)=>T(void 0,null,function*(){try{return yield e(...t)}catch(c){return r<o.retries?((o==null?void 0:o.delay)!=null&&(yield bp(o.delay)),yield wp(e,o,t,r+1)):null}}),aa=(e,o={retries:5,delay:500})=>(...t)=>T(void 0,null,function*(){return yield wp(e,o,t)});var tf=4;var tM=aa((e,o,t)=>T(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield vp.default.get(`${e}/${Hr}?from=${tf}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[c]=r;return c}));n();n();Yn();n();function rf(e){return Object.prototype.toString.call(e)==="[object String]"}var ia=e=>{var t;if(!e||!rf(e))return null;let o=e.split(".");if(o.length!==3)return console.error("Invalid nativeAuthToken. You may be trying to decode a loginToken. Try using decodeLoginToken method instead"),null;try{let[r,c,p]=o,m=fo(r),d=fo(c),l=In(d);if(!l)return{address:m,body:d,signature:p,blockHash:"",origin:"",ttl:0};let u=w(g({},l),{address:m,body:d,signature:p});return(t=l.extraInfo)!=null&&t.timestamp||delete u.extraInfo,u}catch(r){return null}};n();Y();var _M={origin:N().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var pf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var mf=require("@multiversx/sdk-passkey-provider/out");A();Y();var sa=({transactions:e,hasGuardianScreen:o,callbackRoute:t,sessionId:r,walletAddress:c,isGuarded:p})=>{let m=oa({isGuarded:p,transactions:e}),d=e[0].getChainID().valueOf(),l=e[0].getSender().bech32().toString(),u=na(d),f=c!=null?c:mo[u].walletAddress;return{needs2FaSigning:p?!o&&!m&&r:!1,sendTransactionsToGuardian:()=>{let P=Kr(f),$={[ke]:String(r)},{origin:R}=N(),G=window!=null&&window.location?`${R}${t}`:`${t}`,oe=At({callbackUrl:G,urlParams:$});P.guardTransactions(e,{callbackUrl:encodeURIComponent(oe)})},guardTransactions:()=>T(void 0,null,function*(){let P=yield op({address:l,walletUrl:f});return P==null||P.setShouldShowConsentPopup(!0),yield P==null?void 0:P.guardTransactions(e)})}};n();n();n();var _f=require("react"),uf=require("@multiversx/sdk-hw-provider");n();O();W();n();_n();Ro();No();J();n();var ye=()=>{let e=Ce(),o=no(e);return{provider:e,providerType:o}};n();var Cn=require("react"),$t=require("@multiversx/sdk-core"),Ta=require("@multiversx/sdk-extension-provider"),ha=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),xa=require("@multiversx/sdk-passkey-provider/out"),fd=h(md());A();n();n();var Ve=()=>I(go);n();n();n();n();n();n();n();n();var Pn=h(require("react"));var ZO=(0,Pn.createContext)({}),QO=v.getState();n();var ld=h(require("react"));n();var la=h(require("react")),Oh=h(require("axios"));n();n();Ye();n();n();var ud=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),gd=require("@multiversx/sdk-webview-provider/out/WebviewProvider");O();n();O();E();W();function _d(e,o=v.dispatch){let t=ia(e);if(t==null)return;let{signature:r,address:c}=t;r&&e&&c&&(o(Sr({loginToken:e,signature:r,nativeAuthToken:e})),o(ie({address:c,loginMethod:"extra"})))}n();n();E();function _a(){v.dispatch(Qe())}n();J();n();E();W();n();n();var Uh=require("@multiversx/sdk-core"),Bh=h(require("bignumber.js"));A();n();var Wh=h(require("bignumber.js"));A();var le=class{constructor(){this.init=()=>T(this,null,function*(){return yield this._provider.init()});this.login=()=>T(this,null,function*(){var t;let o=yield this._provider.login();return{address:(t=o==null?void 0:o.address)!=null?t:""}});this.logout=()=>T(this,null,function*(){return v.dispatch(M()),yield this._provider.logout()});this.relogin=()=>T(this,null,function*(){let o=yield this._provider.relogin();return o?(_d(o),Wc(),o):(console.error("Unable to re-login. Missing accessToken."),null)});this.signTransactions=o=>T(this,null,function*(){let t=yield this._provider.signTransactions(o);return t||(_a(),this._provider.cancelAction(),null)});this.signTransaction=o=>T(this,null,function*(){return yield this._provider.signTransaction(o)});this.signMessage=o=>T(this,null,function*(){return yield this._provider.signMessage(o)});this.cancelAction=()=>T(this,null,function*(){return yield this._provider.cancelAction()});this.isInitialized=()=>this._provider.isInitialized();this.isConnected=()=>this._provider.isConnected();this.sendCustomRequest=o=>T(this,null,function*(){this._provider.sendPostMessage({type:o.request.method,payload:o.request.params})});this.getAddress=(0,ud.providerNotInitializedError)("getAddress");this._provider=gd.WebviewProvider.getInstance({resetStateCallback:()=>v.dispatch(M())})}static getInstance(){return le._instance||(le._instance=new le),le._instance}getAccount(){var t;let o=this._provider.getAccount();return{address:(t=o==null?void 0:o.address)!=null?t:""}}setAccount(o){this._provider.setAccount(o)}};E();D();J();Y();n();var Qo=require("react"),ua=require("@multiversx/sdk-extension-provider"),ga=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),fa=require("@multiversx/sdk-passkey-provider/out");Ye();E();var En=()=>{let e=H(),{provider:o}=ye(),{nonce:t}=Ve(),[r,c]=(0,Qo.useState)(null),[p,m]=(0,Qo.useState)(),[d,l]=(0,Qo.useState)([]),u=Bt(),f=I(Dt),x=I(Nt),L=()=>T(void 0,null,function*(){var oe,fe;let R=Boolean(f==null?void 0:f.transactions),G=(oe=f==null?void 0:f.transactions)!=null?oe:[];if(R){let F=(fe=f==null?void 0:f.customTransactionInformation)!=null&&fe.skipUpdateNonces?G:yield u(G);l(F)}m(R)});(0,Qo.useEffect)(()=>{L()},[f,t]);let k=()=>{c(null),e(Ge(null))},P=R=>{k(),$(R)};Ut(P);function $(R){var ze,C,U,z,V,q,Q,pe,me,Ne,ne,Re;let G=o instanceof ua.ExtensionProvider,oe=o instanceof fa.PasskeyProvider,fe=o instanceof ee.CrossWindowProvider,F=o instanceof he.IframeProvider,wo=o instanceof ga.MetamaskProvider,rn=o instanceof le;e(Qe()),e(Mo(R)),!(!G&&!fe&&!F&&!oe&&!wo)&&(k(),G&&((C=(ze=ua.ExtensionProvider.getInstance())==null?void 0:ze.cancelAction)==null||C.call(ze)),oe&&((z=(U=fa.PasskeyProvider.getInstance())==null?void 0:U.cancelAction)==null||z.call(U)),wo&&((q=(V=ga.MetamaskProvider.getInstance())==null?void 0:V.cancelAction)==null||q.call(V)),fe&&((pe=(Q=ee.CrossWindowProvider.getInstance())==null?void 0:Q.cancelAction)==null||pe.call(Q)),F&&((Ne=(me=he.IframeProvider.getInstance())==null?void 0:me.cancelAction)==null||Ne.call(me)),rn&&((Re=(ne=le.getInstance())==null?void 0:ne.cancelAction)==null||Re.call(ne)))}return{error:r,canceledTransactionsMessage:x,clearTransactionStatusMessage:k,onAbort:P,setError:c,hasTransactions:p,transactionsToSign:f&&w(g({},f),{transactions:d})}};var Td=()=>{let e=H(),o=(0,Cn.useRef)("/"),{provider:t}=ye(),r=I(Br),c=no(t),p=(0,Cn.useRef)(!1),m=Bt(),{isGuarded:d,address:l}=Ve(),u=I(Nt),{transactionsToSign:f,error:x,setError:L,hasTransactions:k,onAbort:P,clearTransactionStatusMessage:$}=En();Ut(P);let R=(0,fd.default)(f==null?void 0:f.transactions.map(C=>C.getSender().toString()).filter(C=>C)),G=R==null?void 0:R[0],{data:oe}=bn(!G||G===l?null:G),fe=C=>{var me,Ne,ne,Re,vo,an,io,K,Te,sn,Io,Un;let U=t instanceof Ta.ExtensionProvider,z=t instanceof xa.PasskeyProvider,V=t instanceof ee.CrossWindowProvider,q=t instanceof he.IframeProvider,Q=t instanceof ha.MetamaskProvider,pe=t instanceof le;e(Qe()),e(Mo(C)),p.current=!1,!(!U&&!V&&!q&&!z&&!Q)&&($(),U&&((Ne=(me=Ta.ExtensionProvider.getInstance())==null?void 0:me.cancelAction)==null||Ne.call(me)),z&&((Re=(ne=xa.PasskeyProvider.getInstance())==null?void 0:ne.cancelAction)==null||Re.call(ne)),Q&&((an=(vo=ha.MetamaskProvider.getInstance())==null?void 0:vo.cancelAction)==null||an.call(vo)),V&&((K=(io=ee.CrossWindowProvider.getInstance())==null?void 0:io.cancelAction)==null||K.call(io)),q&&((sn=(Te=he.IframeProvider.getInstance())==null?void 0:Te.cancelAction)==null||sn.call(Te)),pe&&((Un=(Io=le.getInstance())==null?void 0:Io.cancelAction)==null||Un.call(Io)))},F=(C,U)=>{c==="walletconnectv2"&&(C=Fe);let V=C.includes(Fe);if(fe(U),V){e(Ge(Fe));return}L(C)},wo=(C,U,z="")=>{let V={[ke]:U},q=z;if(window!=null&&window.location){let{search:pe,origin:me}=N(),Ne=new URLSearchParams(pe);q=`${me}${z}`,Ne.forEach((ne,Re)=>{V[Re]=ne})}let Q=At({callbackUrl:q,urlParams:V});t.signTransactions(C,{callbackUrl:encodeURIComponent(Q)})},rn=()=>T(void 0,null,function*(){var an,io;if(p.current||!f)return;let{sessionId:C,transactions:U,callbackRoute:z,customTransactionInformation:V}=f,{redirectAfterSign:q}=V,Q=Be(),pe=z||Q,me=Q.includes(pe),Ne=q&&!me;try{if(!(yield(an=t==null?void 0:t.init)==null?void 0:an.call(t)))return}catch(K){let Te=(K==null?void 0:K.message)||K||ir;console.error(Te),F(ir,C);return}let ne=!V.skipGuardian,Re=V.hasConsentPopup,vo=t instanceof ee.CrossWindowProvider;try{p.current=!0,vo&&Re&&t.setShouldShowConsentPopup(!0);let K=(io=yield t.signTransactions(d&&ne?U==null?void 0:U.map(Ke=>(Ke.setVersion($t.TransactionVersion.withTxOptions()),Ke.setOptions($t.TransactionOptions.withOptions({guarded:!0})),Ke)):U))!=null?io:[];if(p.current=!1,!Qr(K))return;let sn=Object.values(K).map(Ke=>Vo(Ke)),{needs2FaSigning:Io,guardTransactions:Un}=sa({transactions:K,sessionId:C,callbackRoute:z,isGuarded:d&&ne,walletAddress:r});if(Io){let Ke=yield Un();sn=Ke?Ke.map(Jd=>Vo(Jd)):[]}let Ga={sessionId:C,transactions:sn,status:"signed"};Ne&&(Ga.redirectRoute=pe),e(eo(Ga))}catch(K){p.current=!1;let Te=(K==null?void 0:K.message)||K||gi;console.error(Te),e(eo({sessionId:C,status:"cancelled"})),F(Te.includes("cancel")?Fe:Te,C)}}),ze=()=>T(void 0,null,function*(){if(!f)return;$();let{sessionId:C,transactions:U,callbackRoute:z,customTransactionInformation:V}=f;if(!t){console.error(fi);return}if(R.length>1)throw new Error("Multiple senders are not allowed");if(G&&G!==l&&!Zr(oe,l))return console.error(Vn),F(Vn);o.current=z||N().pathname;try{let q=c==="wallet",Q=V.skipUpdateNonces?U:yield m(U);if(q)return wo(Q,C,z);rn()}catch(q){let pe=(q==null?void 0:q.message)||ui;console.error(pe),F(pe,C),e(eo({sessionId:C,status:"cancelled"})),console.error(pe,q)}});return(0,Cn.useEffect)(()=>{k?ze():p.current=!1},[f,k,oe]),{error:x,canceledTransactionsMessage:u,onAbort:P,hasTransactions:k,callbackRoute:o.current,sessionId:f==null?void 0:f.sessionId,transactions:f==null?void 0:f.transactions}};n();E();W();_n();Y();n();Ie();E();function ya(){let e=H();return o=>{e(Qe()),e(Mo(o)),e(Ge(Fe))}}n();n();var Hh=require("react");n();n();D();Wo();n();var hd=require("react");n();n();var Vh=require("react"),qh=require("@multiversx/sdk-extension-provider");Ie();O();D();n();We();J();J();n();n();Ye();W();n();var $h=require("react"),xd=require("@multiversx/sdk-core");E();n();var jh=require("react"),zh=require("@multiversx/sdk-opera-provider");Ie();O();D();We();J();Y();n();var Kh=require("react");lr();Ie();Ye();O();E();D();We();Y();n();var ox=require("react");Ie();E();n();n();_r();n();n();var Xh=h(require("platform"));Do();n();n();n();n();n();n();n();pn();D();n();n();var Yh=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();_n();Ro();n();n();n();E();var Jh={},Zh={};var yd=e=>{if(e.component!=null){let o=e,{component:t,onClose:r}=o,c=Xe(o,["component","onClose"]),p=v.dispatch(Ir(w(g({},c),{component:null,onClose:void 0})));return Jh[p==null?void 0:p.payload.toastId]=t,r&&(Zh[p==null?void 0:p.payload.toastId]=r),p==null?void 0:p.payload}return v.dispatch(Ir(e)).payload};n();n();var Qh=h(require("axios"));J();n();n();var ex=h(Wt());pn();var Sd,bd,wd,OW=(wd=(bd=(Sd=lo.safeWindow)==null?void 0:Sd.location)==null?void 0:bd.origin)==null?void 0:wd.includes("localhost");n();Y();n();n();var _x=require("react");A();n();n();A();n();n();n();var nx=h(require("bignumber.js"));n();n();n();var ro=h(require("react")),Dd=require("react"),Md=require("react"),La=h(require("classnames")),Od=require("react-dom");A();n();var kd=h(require("react"));n();var Nn=h(require("react"));n();Do();var vd=()=>!Ue();var rx=()=>T(void 0,null,function*(){return yield Promise.resolve().then(()=>(ba(),Sa))}),ax=()=>(ba(),te(Sa)).default,wa=vd();function Ad({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[r,c]=Nn.default.useState(wa?void 0:ax()),[p,m]=Nn.default.useState(wa||t==null?void 0:t()),d=()=>T(this,null,function*(){(e?e():rx()).then(l=>c(l.default)),o==null||o().then(l=>m(l.default))});return(0,Nn.useEffect)(()=>{wa&&d()},[]),{globalStyles:r,styles:p}}function Z(e,o){return t=>{let{globalStyles:r,styles:c}=Ad({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return kd.default.createElement(e,w(g({},t),{globalStyles:r!=null?r:{},styles:c!=null?c:{}}))}}n();var Pd=h(require("react")),Ed=h(require("classnames"));var sx=({className:e,children:o,styles:t})=>Pd.default.createElement("div",{className:(0,Ed.default)(t==null?void 0:t.dappModalBody,e)},o),va=Z(sx,{ssrStyles:()=>Promise.resolve().then(()=>(je(),qe)),clientStyles:()=>(je(),te(qe)).default});n();var Ia=h(require("react")),Cd=h(require("classnames"));var cx=({visible:e,customFooter:o,className:t,footerText:r,styles:c})=>e?Ia.default.createElement("div",{className:(0,Cd.default)(c==null?void 0:c.dappModalFooter,t)},o!=null?o:Ia.default.createElement("div",null,r)):null,Aa=Z(cx,{ssrStyles:()=>Promise.resolve().then(()=>(je(),qe)),clientStyles:()=>(je(),te(qe)).default});n();var nn=h(require("react")),Nd=require("@fortawesome/free-solid-svg-icons"),Rd=require("@fortawesome/react-fontawesome"),Rn=h(require("classnames"));var px=({visible:e,headerText:o,customHeader:t,className:r,closeButtonClassName:c,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?nn.default.createElement("div",{className:(0,Rn.default)(l==null?void 0:l.dappModalHeader,r)},t):nn.default.createElement("div",{className:(0,Rn.default)(l==null?void 0:l.dappModalHeader,r)},nn.default.createElement("div",{className:(0,Rn.default)(l==null?void 0:l.dappModalHeaderText,p)},o),nn.default.createElement("button",{onClick:m,className:(0,Rn.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,c)},nn.default.createElement(Rd.FontAwesomeIcon,{size:"lg",icon:Nd.faTimes}))):null,ka=Z(px,{ssrStyles:()=>Promise.resolve().then(()=>(je(),qe)),clientStyles:()=>(je(),te(qe)).default});var dx={showHeader:!0,showFooter:!1,headerText:"",footerText:""},lx=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:c=dx,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:u})=>{let[f,x]=(0,Dd.useState)(!1);if((0,Md.useEffect)(()=>{x(!0)},[]),!l)return null;let{showHeader:L,showFooter:k,headerText:P,footerText:$,modalDialogClassName:R="dapp-modal-dialog",modalContentClassName:G="dapp-modal-dialog-content",modalHeaderClassName:oe="dapp-modal-dialog-header",modalHeaderTextClassName:fe="dapp-modal-dialog-header-text",modalCloseButtonClassName:F="dapp-modal-dialog-close-button",modalBodyClassName:wo="dapp-modal-dialog-content-body",modalFooterClassName:rn="dapp-modal-dialog-footer",customModalHeader:ze,customModalFooter:C}=c,U=z=>{z.key==="Escape"&&r&&(m==null||m())};return ro.default.createElement(ro.default.Fragment,null,f&&(0,Od.createPortal)(ro.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,La.default)(R,u==null?void 0:u.dappModal,t),"data-testid":e,onKeyDown:U},ro.default.createElement("div",{className:(0,La.default)(u==null?void 0:u.dappModalContent,G)},ro.default.createElement(ka,{visible:L,headerText:P,customHeader:ze,className:oe,headerTextClassName:fe,closeButtonClassName:F,onHide:m}),ro.default.createElement(va,{className:wo},o),ro.default.createElement(Aa,{visible:k,customFooter:C,footerText:$,className:rn}))),d!=null?d:document==null?void 0:document.body))},Pa=Z(lx,{ssrStyles:()=>Promise.resolve().then(()=>(je(),qe)),clientStyles:()=>(je(),te(qe)).default});n();n();var Vt=require("react"),Ea=e=>{let[o,t]=(0,Vt.useState)(!1),r=()=>{t(!0)},c=()=>{t(!1)};return(0,Vt.useEffect)(()=>{(e==null?void 0:e.visible)===!0?r():(e==null?void 0:e.visible)===!1&&c()},[e==null?void 0:e.visible]),{handleShowModal:r,handleHideModal:c,showModal:o}};n();n();var Fd=require("react"),gx=require("@multiversx/sdk-hw-provider");Ie();O();E();D();We();n();var ux=require("react");n();n();var Ca=require("react");O();E();D();We();Y();n();var Tx=require("react"),hx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ie();O();D();We();J();J();n();var xx=require("react"),yx=require("@multiversx/sdk-passkey-provider/out");Ie();O();D();We();J();J();n();n();var Ud=require("react");n();var wx=require("react");n();var Na=require("react"),bx=require("socket.io-client");E();n();n();n();var vx=require("react");W();n();n();n();var Ax=h(require("swr"));n();n();n();n();var Ix=h(require("axios"));n();n();var bo=h(require("react")),$d=require("@fortawesome/free-solid-svg-icons");n();var Ra=h(require("react"));n();var So=h(require("react")),tn=require("@fortawesome/free-solid-svg-icons"),qt=require("@fortawesome/react-fontawesome"),jt=h(require("classnames"));n();var Px=({type:e,globalStyles:o,styles:t})=>{switch(e){case"info":return So.default.createElement("div",{className:(0,jt.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.success)},So.default.createElement(qt.FontAwesomeIcon,{icon:tn.faInfo,className:t==null?void 0:t.svg,size:"5x"}));case"warning":return So.default.createElement("div",{className:(0,jt.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.warning,t==null?void 0:t.warningIcon)},So.default.createElement(qt.FontAwesomeIcon,{icon:tn.faWarning,className:t==null?void 0:t.svg,size:"5x"}));case"error":return So.default.createElement("div",{className:(0,jt.default)(t==null?void 0:t.transactionsStatusToastIcon,o==null?void 0:o.danger,t==null?void 0:t.errorIcon)},So.default.createElement(qt.FontAwesomeIcon,{icon:tn.faTimes,className:t==null?void 0:t.svg,size:"5x"}));default:return null}},Gd=Z(Px,{ssrStyles:()=>Promise.resolve().then(()=>(Mn(),Dn)),clientStyles:()=>(Mn(),te(Dn)).default});var Ex=({type:e,message:o,styles:t})=>Ra.default.createElement("div",{className:t==null?void 0:t.transactionsStatusToastContent},Ra.default.createElement(Gd,{type:e}),o),Hd=Z(Ex,{ssrStyles:()=>Promise.resolve().then(()=>(Mn(),Dn)),clientStyles:()=>(Mn(),te(Dn)).default});A();var On=({signError:e,canceledTransactionsMessage:o,onDelete:t})=>{let r=I(fn),c=(0,bo.useMemo)(()=>e||o||Ti,[e,o]),p=(0,bo.useMemo)(()=>e?"error":o?"warning":"info",[e,o]);return(0,bo.useEffect)(()=>{var m;yd({toastId:`${Mi}-${Date.now()}`,title:"Transaction canceled",duration:(m=r.cancelTransactionToastDuration)!=null?m:2e4,component:()=>bo.default.createElement(Hd,{type:p,message:c}),onClose:()=>t==null?void 0:t(),icon:$d.faWarning})},[]),null};var Nx=({Screen:e,verifyReceiverScam:o,className:t})=>{if(!e)return null;let{callbackRoute:r,transactions:c,error:p,sessionId:m,hasTransactions:d,onAbort:l,canceledTransactionsMessage:u}=Td(),f=Ft(),{providerType:x}=ye(),L=()=>{l(m)},k=p||f,P={handleClose:L,error:k,sessionId:m,transactions:c||[],providerType:x,callbackRoute:r,className:t,verifyReceiverScam:o},$={signError:k,canceledTransactionsMessage:u},R=Boolean(k)||Boolean(u);return!R&&!d?null:R?Da.default.createElement(On,g({},$)):Da.default.createElement(e,g({},P))};n();var Ma=h(require("react"));J();var Rx=({Screen:e,GuardianScreen:o,verifyReceiverScam:t,className:r})=>{var G;if(!e)return null;let{transactionsToSign:c,error:p,hasTransactions:m,onAbort:d,canceledTransactionsMessage:l}=En(),u=Ft(),{providerType:f}=ye(),{isGuarded:x}=Ve(),L=()=>{d(c==null?void 0:c.sessionId)},k=p||u,P={handleClose:L,GuardianScreen:o,isGuarded:x,error:k,sessionId:c==null?void 0:c.sessionId,transactions:(G=c==null?void 0:c.transactions)!=null?G:[],providerType:f,callbackRoute:(c==null?void 0:c.callbackRoute)||Be(),className:r,verifyReceiverScam:t},$={signError:k,canceledTransactionsMessage:l,onDelete:L},R=Boolean(k)||Boolean(l);return!R&&!m?null:R?Ma.default.createElement(On,g({},$)):Ma.default.createElement(e,g({},P))};n();n();n();var zt=h(require("react")),Yd=require("@fortawesome/free-solid-svg-icons"),Wa=h(require("classnames"));A();n();var Vd=h(require("react"));var qd=e=>{let{showModal:o}=Ea({visible:e.visible}),t=()=>{var r;(r=e.onClose)==null||r.call(e)};return Vd.default.createElement(Pa,{className:e.className,closeOnEscape:e.closeOnEscape,config:e.modalConfig,onHide:t,visible:o},e.children)};n();n();var ao=h(require("react")),zd=require("@fortawesome/react-fontawesome"),Fn=h(require("classnames"));var Mx=({icon:e,title:o,action:t,iconClass:r,"data-testid":c,description:p,iconBgClass:m,iconSize:d="5x",className:l="dapp-page-state",globalStyles:u,styles:f})=>{let x=(0,ao.useMemo)(()=>({wrapper:(0,Fn.default)(f==null?void 0:f.state,u==null?void 0:u.mAuto,u==null?void 0:u.p4,u==null?void 0:u.textCenter,l),iconContainer:(0,Fn.default)(u==null?void 0:u.iconState,u==null?void 0:u.mxAuto,{[m!=null?m:""]:Boolean(m)}),iconClass:(0,Fn.default)(r!=null&&r),title:(0,Fn.default)(u==null?void 0:u.h4,u==null?void 0:u.my4),description:u==null?void 0:u.mb3}),[u,f,l,m,r]);return ao.default.createElement("div",{className:x.wrapper,"data-testid":c},e&&ao.default.createElement("span",{className:x.iconContainer},ao.default.createElement(zd.FontAwesomeIcon,{icon:e,className:x.iconClass,size:d})),o&&ao.default.createElement("p",{className:x.title},o),p&&ao.default.createElement("div",{className:x.description},p),t)},Kd=Z(Mx,{ssrStyles:()=>Promise.resolve().then(()=>(Fa(),Oa)),clientStyles:()=>(Fa(),te(Oa)).default});var Fx=({handleClose:e,error:o,title:t,description:r,sessionId:c,className:p="dapp-extension-modal",modalContentClassName:m,globalStyles:d,styles:l})=>{let u=ya(),f={wrapper:(0,Wa.default)(l==null?void 0:l.modalContainer,l==null?void 0:l.extension,p),icon:d==null?void 0:d.textWhite,closeBtn:(0,Wa.default)(d==null?void 0:d.btn,d==null?void 0:d.btnCloseLink,d==null?void 0:d.btnDark,d==null?void 0:d.textWhite,d==null?void 0:d.mt2)},x=L=>{L.preventDefault(),e(),u(c)};return zt.default.createElement(qd,{onClose:e,modalConfig:{modalDialogClassName:f.wrapper},visible:!0},zt.default.createElement(Kd,{icon:o?Yd.faTimes:null,iconClass:f.icon,className:m,iconBgClass:o?d==null?void 0:d.bgDanger:d==null?void 0:d.bgWarning,iconSize:"3x",title:t,description:r,action:zt.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:x,className:f.closeBtn},"Close")}))},Ux=Z(Fx,{ssrStyles:()=>Promise.resolve().then(()=>(Ba(),Ua)),clientStyles:()=>(Ba(),te(Ua)).default});0&&(module.exports={ConfirmationScreen,DeviceConfirmationScreen,SignWaitingScreenModal,TransactionStatusToast});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
