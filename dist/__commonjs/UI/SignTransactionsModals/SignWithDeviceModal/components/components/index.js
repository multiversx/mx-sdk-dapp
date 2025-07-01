"use strict";var ll=Object.create;var Go=Object.defineProperty,_l=Object.defineProperties,ul=Object.getOwnPropertyDescriptor,fl=Object.getOwnPropertyDescriptors,gl=Object.getOwnPropertyNames,hn=Object.getOwnPropertySymbols,hl=Object.getPrototypeOf,kt=Object.prototype.hasOwnProperty,ka=Object.prototype.propertyIsEnumerable;var Ia=(e,o,t)=>o in e?Go(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))kt.call(o,t)&&Ia(e,t,o[t]);if(hn)for(var t of hn(o))ka.call(o,t)&&Ia(e,t,o[t]);return e},I=(e,o)=>_l(e,fl(o));var pe=(e,o)=>{var t={};for(var c in e)kt.call(e,c)&&o.indexOf(c)<0&&(t[c]=e[c]);if(e!=null&&hn)for(var c of hn(e))o.indexOf(c)<0&&ka.call(e,c)&&(t[c]=e[c]);return t};var y=(e,o)=>()=>(e&&(o=e(e=0)),o);var b=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),B=(e,o)=>{for(var t in o)Go(e,t,{get:o[t],enumerable:!0})},La=(e,o,t,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of gl(o))!kt.call(e,s)&&s!==t&&Go(e,s,{get:()=>o[s],enumerable:!(c=ul(o,s))||c.enumerable});return e};var g=(e,o,t)=>(t=e!=null?ll(hl(e)):{},La(o||!e||!e.__esModule?Go(t,"default",{value:e,enumerable:!0}):t,e)),O=e=>La(Go({},"__esModule",{value:!0}),e);var T=(e,o,t)=>new Promise((c,s)=>{var p=l=>{try{d(t.next(l))}catch(f){s(f)}},m=l=>{try{d(t.throw(l))}catch(f){s(f)}},d=l=>l.done?c(l.value):Promise.resolve(l.value).then(p,m);d((t=t.apply(e,o)).next())});var Ea=b(Tn=>{"use strict";n();Tn.byteLength=xl;Tn.toByteArray=Sl;Tn.fromByteArray=vl;var ge=[],re=[],Tl=typeof Uint8Array!="undefined"?Uint8Array:Array,Lt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(je=0,Na=Lt.length;je<Na;++je)ge[je]=Lt[je],re[Lt.charCodeAt(je)]=je;var je,Na;re["-".charCodeAt(0)]=62;re["_".charCodeAt(0)]=63;function Ca(e){var o=e.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=e.indexOf("=");t===-1&&(t=o);var c=t===o?0:4-t%4;return[t,c]}function xl(e){var o=Ca(e),t=o[0],c=o[1];return(t+c)*3/4-c}function yl(e,o,t){return(o+t)*3/4-t}function Sl(e){var o,t=Ca(e),c=t[0],s=t[1],p=new Tl(yl(e,c,s)),m=0,d=s>0?c-4:c,l;for(l=0;l<d;l+=4)o=re[e.charCodeAt(l)]<<18|re[e.charCodeAt(l+1)]<<12|re[e.charCodeAt(l+2)]<<6|re[e.charCodeAt(l+3)],p[m++]=o>>16&255,p[m++]=o>>8&255,p[m++]=o&255;return s===2&&(o=re[e.charCodeAt(l)]<<2|re[e.charCodeAt(l+1)]>>4,p[m++]=o&255),s===1&&(o=re[e.charCodeAt(l)]<<10|re[e.charCodeAt(l+1)]<<4|re[e.charCodeAt(l+2)]>>2,p[m++]=o>>8&255,p[m++]=o&255),p}function bl(e){return ge[e>>18&63]+ge[e>>12&63]+ge[e>>6&63]+ge[e&63]}function wl(e,o,t){for(var c,s=[],p=o;p<t;p+=3)c=(e[p]<<16&16711680)+(e[p+1]<<8&65280)+(e[p+2]&255),s.push(bl(c));return s.join("")}function vl(e){for(var o,t=e.length,c=t%3,s=[],p=16383,m=0,d=t-c;m<d;m+=p)s.push(wl(e,m,m+p>d?d:m+p));return c===1?(o=e[t-1],s.push(ge[o>>2]+ge[o<<4&63]+"==")):c===2&&(o=(e[t-2]<<8)+e[t-1],s.push(ge[o>>10]+ge[o>>4&63]+ge[o<<2&63]+"=")),s.join("")}});var Pa=b(Nt=>{n();Nt.read=function(e,o,t,c,s){var p,m,d=s*8-c-1,l=(1<<d)-1,f=l>>1,h=-7,x=t?s-1:0,w=t?-1:1,v=e[o+x];for(x+=w,p=v&(1<<-h)-1,v>>=-h,h+=d;h>0;p=p*256+e[o+x],x+=w,h-=8);for(m=p&(1<<-h)-1,p>>=-h,h+=c;h>0;m=m*256+e[o+x],x+=w,h-=8);if(p===0)p=1-f;else{if(p===l)return m?NaN:(v?-1:1)*(1/0);m=m+Math.pow(2,c),p=p-f}return(v?-1:1)*m*Math.pow(2,p-c)};Nt.write=function(e,o,t,c,s,p){var m,d,l,f=p*8-s-1,h=(1<<f)-1,x=h>>1,w=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=c?0:p-1,A=c?1:-1,V=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(d=isNaN(o)?1:0,m=h):(m=Math.floor(Math.log(o)/Math.LN2),o*(l=Math.pow(2,-m))<1&&(m--,l*=2),m+x>=1?o+=w/l:o+=w*Math.pow(2,1-x),o*l>=2&&(m++,l/=2),m+x>=h?(d=0,m=h):m+x>=1?(d=(o*l-1)*Math.pow(2,s),m=m+x):(d=o*Math.pow(2,x-1)*Math.pow(2,s),m=0));s>=8;e[t+v]=d&255,v+=A,d/=256,s-=8);for(m=m<<s|d,f+=s;f>0;e[t+v]=m&255,v+=A,m/=256,f-=8);e[t+v-A]|=V*128}});var qa=b(_o=>{"use strict";n();var Ct=Ea(),lo=Pa(),Da=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_o.Buffer=_;_o.SlowBuffer=Cl;_o.INSPECT_MAX_BYTES=50;var xn=2147483647;_o.kMaxLength=xn;_.TYPED_ARRAY_SUPPORT=Al();!_.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Al(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.buffer}});Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(!!_.isBuffer(this))return this.byteOffset}});function Le(e){if(e>xn)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,_.prototype),o}function _(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Rt(e)}return Oa(e,o,t)}_.poolSize=8192;function Oa(e,o,t){if(typeof e=="string")return kl(e,o);if(ArrayBuffer.isView(e))return Ll(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(he(e,ArrayBuffer)||e&&he(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(he(e,SharedArrayBuffer)||e&&he(e.buffer,SharedArrayBuffer)))return Pt(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var c=e.valueOf&&e.valueOf();if(c!=null&&c!==e)return _.from(c,o,t);var s=Nl(e);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return _.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}_.from=function(e,o,t){return Oa(e,o,t)};Object.setPrototypeOf(_.prototype,Uint8Array.prototype);Object.setPrototypeOf(_,Uint8Array);function Fa(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Il(e,o,t){return Fa(e),e<=0?Le(e):o!==void 0?typeof t=="string"?Le(e).fill(o,t):Le(e).fill(o):Le(e)}_.alloc=function(e,o,t){return Il(e,o,t)};function Rt(e){return Fa(e),Le(e<0?0:Mt(e)|0)}_.allocUnsafe=function(e){return Rt(e)};_.allocUnsafeSlow=function(e){return Rt(e)};function kl(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!_.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=Wa(e,o)|0,c=Le(t),s=c.write(e,o);return s!==t&&(c=c.slice(0,s)),c}function Et(e){for(var o=e.length<0?0:Mt(e.length)|0,t=Le(o),c=0;c<o;c+=1)t[c]=e[c]&255;return t}function Ll(e){if(he(e,Uint8Array)){var o=new Uint8Array(e);return Pt(o.buffer,o.byteOffset,o.byteLength)}return Et(e)}function Pt(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var c;return o===void 0&&t===void 0?c=new Uint8Array(e):t===void 0?c=new Uint8Array(e,o):c=new Uint8Array(e,o,t),Object.setPrototypeOf(c,_.prototype),c}function Nl(e){if(_.isBuffer(e)){var o=Mt(e.length)|0,t=Le(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Ot(e.length)?Le(0):Et(e);if(e.type==="Buffer"&&Array.isArray(e.data))return Et(e.data)}function Mt(e){if(e>=xn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+xn.toString(16)+" bytes");return e|0}function Cl(e){return+e!=e&&(e=0),_.alloc(+e)}_.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==_.prototype};_.compare=function(o,t){if(he(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),he(t,Uint8Array)&&(t=_.from(t,t.offset,t.byteLength)),!_.isBuffer(o)||!_.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===t)return 0;for(var c=o.length,s=t.length,p=0,m=Math.min(c,s);p<m;++p)if(o[p]!==t[p]){c=o[p],s=t[p];break}return c<s?-1:s<c?1:0};_.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};_.concat=function(o,t){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return _.alloc(0);var c;if(t===void 0)for(t=0,c=0;c<o.length;++c)t+=o[c].length;var s=_.allocUnsafe(t),p=0;for(c=0;c<o.length;++c){var m=o[c];if(he(m,Uint8Array))p+m.length>s.length?_.from(m).copy(s,p):Uint8Array.prototype.set.call(s,m,p);else if(_.isBuffer(m))m.copy(s,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return s};function Wa(e,o){if(_.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||he(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,c=arguments.length>2&&arguments[2]===!0;if(!c&&t===0)return 0;for(var s=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Dt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return $a(e).length;default:if(s)return c?-1:Dt(e).length;o=(""+o).toLowerCase(),s=!0}}_.byteLength=Wa;function El(e,o,t){var c=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Gl(this,o,t);case"utf8":case"utf-8":return Ua(this,o,t);case"ascii":return Bl(this,o,t);case"latin1":case"binary":return Ul(this,o,t);case"base64":return Fl(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Vl(this,o,t);default:if(c)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),c=!0}}_.prototype._isBuffer=!0;function Ke(e,o,t){var c=e[o];e[o]=e[t],e[t]=c}_.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<o;t+=2)Ke(this,t,t+1);return this};_.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<o;t+=4)Ke(this,t,t+3),Ke(this,t+1,t+2);return this};_.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<o;t+=8)Ke(this,t,t+7),Ke(this,t+1,t+6),Ke(this,t+2,t+5),Ke(this,t+3,t+4);return this};_.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?Ua(this,0,o):El.apply(this,arguments)};_.prototype.toLocaleString=_.prototype.toString;_.prototype.equals=function(o){if(!_.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:_.compare(this,o)===0};_.prototype.inspect=function(){var o="",t=_o.INSPECT_MAX_BYTES;return o=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(o+=" ... "),"<Buffer "+o+">"};Da&&(_.prototype[Da]=_.prototype.inspect);_.prototype.compare=function(o,t,c,s,p){if(he(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(t===void 0&&(t=0),c===void 0&&(c=o?o.length:0),s===void 0&&(s=0),p===void 0&&(p=this.length),t<0||c>o.length||s<0||p>this.length)throw new RangeError("out of range index");if(s>=p&&t>=c)return 0;if(s>=p)return-1;if(t>=c)return 1;if(t>>>=0,c>>>=0,s>>>=0,p>>>=0,this===o)return 0;for(var m=p-s,d=c-t,l=Math.min(m,d),f=this.slice(s,p),h=o.slice(t,c),x=0;x<l;++x)if(f[x]!==h[x]){m=f[x],d=h[x];break}return m<d?-1:d<m?1:0};function Ba(e,o,t,c,s){if(e.length===0)return-1;if(typeof t=="string"?(c=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Ot(t)&&(t=s?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(s)return-1;t=e.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof o=="string"&&(o=_.from(o,c)),_.isBuffer(o))return o.length===0?-1:Ra(e,o,t,c,s);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):Ra(e,[o],t,c,s);throw new TypeError("val must be string, number or Buffer")}function Ra(e,o,t,c,s){var p=1,m=e.length,d=o.length;if(c!==void 0&&(c=String(c).toLowerCase(),c==="ucs2"||c==="ucs-2"||c==="utf16le"||c==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,m/=2,d/=2,t/=2}function l(v,A){return p===1?v[A]:v.readUInt16BE(A*p)}var f;if(s){var h=-1;for(f=t;f<m;f++)if(l(e,f)===l(o,h===-1?0:f-h)){if(h===-1&&(h=f),f-h+1===d)return h*p}else h!==-1&&(f-=f-h),h=-1}else for(t+d>m&&(t=m-d),f=t;f>=0;f--){for(var x=!0,w=0;w<d;w++)if(l(e,f+w)!==l(o,w)){x=!1;break}if(x)return f}return-1}_.prototype.includes=function(o,t,c){return this.indexOf(o,t,c)!==-1};_.prototype.indexOf=function(o,t,c){return Ba(this,o,t,c,!0)};_.prototype.lastIndexOf=function(o,t,c){return Ba(this,o,t,c,!1)};function Pl(e,o,t,c){t=Number(t)||0;var s=e.length-t;c?(c=Number(c),c>s&&(c=s)):c=s;var p=o.length;c>p/2&&(c=p/2);for(var m=0;m<c;++m){var d=parseInt(o.substr(m*2,2),16);if(Ot(d))return m;e[t+m]=d}return m}function Dl(e,o,t,c){return yn(Dt(o,e.length-t),e,t,c)}function Rl(e,o,t,c){return yn(ql(o),e,t,c)}function Ml(e,o,t,c){return yn($a(o),e,t,c)}function Ol(e,o,t,c){return yn(zl(o,e.length-t),e,t,c)}_.prototype.write=function(o,t,c,s){if(t===void 0)s="utf8",c=this.length,t=0;else if(c===void 0&&typeof t=="string")s=t,c=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(c)?(c=c>>>0,s===void 0&&(s="utf8")):(s=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((c===void 0||c>p)&&(c=p),o.length>0&&(c<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var m=!1;;)switch(s){case"hex":return Pl(this,o,t,c);case"utf8":case"utf-8":return Dl(this,o,t,c);case"ascii":case"latin1":case"binary":return Rl(this,o,t,c);case"base64":return Ml(this,o,t,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ol(this,o,t,c);default:if(m)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),m=!0}};_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Fl(e,o,t){return o===0&&t===e.length?Ct.fromByteArray(e):Ct.fromByteArray(e.slice(o,t))}function Ua(e,o,t){t=Math.min(e.length,t);for(var c=[],s=o;s<t;){var p=e[s],m=null,d=p>239?4:p>223?3:p>191?2:1;if(s+d<=t){var l,f,h,x;switch(d){case 1:p<128&&(m=p);break;case 2:l=e[s+1],(l&192)===128&&(x=(p&31)<<6|l&63,x>127&&(m=x));break;case 3:l=e[s+1],f=e[s+2],(l&192)===128&&(f&192)===128&&(x=(p&15)<<12|(l&63)<<6|f&63,x>2047&&(x<55296||x>57343)&&(m=x));break;case 4:l=e[s+1],f=e[s+2],h=e[s+3],(l&192)===128&&(f&192)===128&&(h&192)===128&&(x=(p&15)<<18|(l&63)<<12|(f&63)<<6|h&63,x>65535&&x<1114112&&(m=x))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,c.push(m>>>10&1023|55296),m=56320|m&1023),c.push(m),s+=d}return Wl(c)}var Ma=4096;function Wl(e){var o=e.length;if(o<=Ma)return String.fromCharCode.apply(String,e);for(var t="",c=0;c<o;)t+=String.fromCharCode.apply(String,e.slice(c,c+=Ma));return t}function Bl(e,o,t){var c="";t=Math.min(e.length,t);for(var s=o;s<t;++s)c+=String.fromCharCode(e[s]&127);return c}function Ul(e,o,t){var c="";t=Math.min(e.length,t);for(var s=o;s<t;++s)c+=String.fromCharCode(e[s]);return c}function Gl(e,o,t){var c=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>c)&&(t=c);for(var s="",p=o;p<t;++p)s+=jl[e[p]];return s}function Vl(e,o,t){for(var c=e.slice(o,t),s="",p=0;p<c.length-1;p+=2)s+=String.fromCharCode(c[p]+c[p+1]*256);return s}_.prototype.slice=function(o,t){var c=this.length;o=~~o,t=t===void 0?c:~~t,o<0?(o+=c,o<0&&(o=0)):o>c&&(o=c),t<0?(t+=c,t<0&&(t=0)):t>c&&(t=c),t<o&&(t=o);var s=this.subarray(o,t);return Object.setPrototypeOf(s,_.prototype),s};function H(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(o,t,c){o=o>>>0,t=t>>>0,c||H(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return s};_.prototype.readUintBE=_.prototype.readUIntBE=function(o,t,c){o=o>>>0,t=t>>>0,c||H(o,t,this.length);for(var s=this[o+--t],p=1;t>0&&(p*=256);)s+=this[o+--t]*p;return s};_.prototype.readUint8=_.prototype.readUInt8=function(o,t){return o=o>>>0,t||H(o,1,this.length),this[o]};_.prototype.readUint16LE=_.prototype.readUInt16LE=function(o,t){return o=o>>>0,t||H(o,2,this.length),this[o]|this[o+1]<<8};_.prototype.readUint16BE=_.prototype.readUInt16BE=function(o,t){return o=o>>>0,t||H(o,2,this.length),this[o]<<8|this[o+1]};_.prototype.readUint32LE=_.prototype.readUInt32LE=function(o,t){return o=o>>>0,t||H(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216};_.prototype.readUint32BE=_.prototype.readUInt32BE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])};_.prototype.readIntLE=function(o,t,c){o=o>>>0,t=t>>>0,c||H(o,t,this.length);for(var s=this[o],p=1,m=0;++m<t&&(p*=256);)s+=this[o+m]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};_.prototype.readIntBE=function(o,t,c){o=o>>>0,t=t>>>0,c||H(o,t,this.length);for(var s=t,p=1,m=this[o+--s];s>0&&(p*=256);)m+=this[o+--s]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};_.prototype.readInt8=function(o,t){return o=o>>>0,t||H(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]};_.prototype.readInt16LE=function(o,t){o=o>>>0,t||H(o,2,this.length);var c=this[o]|this[o+1]<<8;return c&32768?c|4294901760:c};_.prototype.readInt16BE=function(o,t){o=o>>>0,t||H(o,2,this.length);var c=this[o+1]|this[o]<<8;return c&32768?c|4294901760:c};_.prototype.readInt32LE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24};_.prototype.readInt32BE=function(o,t){return o=o>>>0,t||H(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]};_.prototype.readFloatLE=function(o,t){return o=o>>>0,t||H(o,4,this.length),lo.read(this,o,!0,23,4)};_.prototype.readFloatBE=function(o,t){return o=o>>>0,t||H(o,4,this.length),lo.read(this,o,!1,23,4)};_.prototype.readDoubleLE=function(o,t){return o=o>>>0,t||H(o,8,this.length),lo.read(this,o,!0,52,8)};_.prototype.readDoubleBE=function(o,t){return o=o>>>0,t||H(o,8,this.length),lo.read(this,o,!1,52,8)};function Z(e,o,t,c,s,p){if(!_.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>s||o<p)throw new RangeError('"value" argument is out of bounds');if(t+c>e.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(o,t,c,s){if(o=+o,t=t>>>0,c=c>>>0,!s){var p=Math.pow(2,8*c)-1;Z(this,o,t,c,p,0)}var m=1,d=0;for(this[t]=o&255;++d<c&&(m*=256);)this[t+d]=o/m&255;return t+c};_.prototype.writeUintBE=_.prototype.writeUIntBE=function(o,t,c,s){if(o=+o,t=t>>>0,c=c>>>0,!s){var p=Math.pow(2,8*c)-1;Z(this,o,t,c,p,0)}var m=c-1,d=1;for(this[t+m]=o&255;--m>=0&&(d*=256);)this[t+m]=o/d&255;return t+c};_.prototype.writeUint8=_.prototype.writeUInt8=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,1,255,0),this[t]=o&255,t+1};_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,2,65535,0),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,2,65535,0),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,4,4294967295,0),this[t+3]=o>>>24,this[t+2]=o>>>16,this[t+1]=o>>>8,this[t]=o&255,t+4};_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,4,4294967295,0),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};_.prototype.writeIntLE=function(o,t,c,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*c-1);Z(this,o,t,c,p-1,-p)}var m=0,d=1,l=0;for(this[t]=o&255;++m<c&&(d*=256);)o<0&&l===0&&this[t+m-1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+c};_.prototype.writeIntBE=function(o,t,c,s){if(o=+o,t=t>>>0,!s){var p=Math.pow(2,8*c-1);Z(this,o,t,c,p-1,-p)}var m=c-1,d=1,l=0;for(this[t+m]=o&255;--m>=0&&(d*=256);)o<0&&l===0&&this[t+m+1]!==0&&(l=1),this[t+m]=(o/d>>0)-l&255;return t+c};_.prototype.writeInt8=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,1,127,-128),o<0&&(o=255+o+1),this[t]=o&255,t+1};_.prototype.writeInt16LE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,2,32767,-32768),this[t]=o&255,this[t+1]=o>>>8,t+2};_.prototype.writeInt16BE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,2,32767,-32768),this[t]=o>>>8,this[t+1]=o&255,t+2};_.prototype.writeInt32LE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,4,2147483647,-2147483648),this[t]=o&255,this[t+1]=o>>>8,this[t+2]=o>>>16,this[t+3]=o>>>24,t+4};_.prototype.writeInt32BE=function(o,t,c){return o=+o,t=t>>>0,c||Z(this,o,t,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[t]=o>>>24,this[t+1]=o>>>16,this[t+2]=o>>>8,this[t+3]=o&255,t+4};function Ga(e,o,t,c,s,p){if(t+c>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Va(e,o,t,c,s){return o=+o,t=t>>>0,s||Ga(e,o,t,4,34028234663852886e22,-34028234663852886e22),lo.write(e,o,t,c,23,4),t+4}_.prototype.writeFloatLE=function(o,t,c){return Va(this,o,t,!0,c)};_.prototype.writeFloatBE=function(o,t,c){return Va(this,o,t,!1,c)};function Ha(e,o,t,c,s){return o=+o,t=t>>>0,s||Ga(e,o,t,8,17976931348623157e292,-17976931348623157e292),lo.write(e,o,t,c,52,8),t+8}_.prototype.writeDoubleLE=function(o,t,c){return Ha(this,o,t,!0,c)};_.prototype.writeDoubleBE=function(o,t,c){return Ha(this,o,t,!1,c)};_.prototype.copy=function(o,t,c,s){if(!_.isBuffer(o))throw new TypeError("argument should be a Buffer");if(c||(c=0),!s&&s!==0&&(s=this.length),t>=o.length&&(t=o.length),t||(t=0),s>0&&s<c&&(s=c),s===c||o.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),o.length-t<s-c&&(s=o.length-t+c);var p=s-c;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,c,s):Uint8Array.prototype.set.call(o,this.subarray(c,s),t),p};_.prototype.fill=function(o,t,c,s){if(typeof o=="string"){if(typeof t=="string"?(s=t,t=0,c=this.length):typeof c=="string"&&(s=c,c=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!_.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(o.length===1){var p=o.charCodeAt(0);(s==="utf8"&&p<128||s==="latin1")&&(o=p)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(t<0||this.length<t||this.length<c)throw new RangeError("Out of range index");if(c<=t)return this;t=t>>>0,c=c===void 0?this.length:c>>>0,o||(o=0);var m;if(typeof o=="number")for(m=t;m<c;++m)this[m]=o;else{var d=_.isBuffer(o)?o:_.from(o,s),l=d.length;if(l===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(m=0;m<c-t;++m)this[m+t]=d[m%l]}return this};var Hl=/[^+/0-9A-Za-z-_]/g;function $l(e){if(e=e.split("=")[0],e=e.trim().replace(Hl,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Dt(e,o){o=o||1/0;for(var t,c=e.length,s=null,p=[],m=0;m<c;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!s){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(m+1===c){(o-=3)>-1&&p.push(239,191,189);continue}s=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(o-=3)>-1&&p.push(239,191,189);if(s=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function ql(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function zl(e,o){for(var t,c,s,p=[],m=0;m<e.length&&!((o-=2)<0);++m)t=e.charCodeAt(m),c=t>>8,s=t%256,p.push(s),p.push(c);return p}function $a(e){return Ct.toByteArray($l(e))}function yn(e,o,t,c){for(var s=0;s<c&&!(s+t>=o.length||s>=e.length);++s)o[s+t]=e[s];return s}function he(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Ot(e){return e!==e}var jl=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var c=t*16,s=0;s<16;++s)o[c+s]=e[t]+e[s];return o}()});var Ya=b((jy,Xa)=>{n();var F=Xa.exports={},Te,xe;function Ft(){throw new Error("setTimeout has not been defined")}function Wt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Te=setTimeout:Te=Ft}catch(e){Te=Ft}try{typeof clearTimeout=="function"?xe=clearTimeout:xe=Wt}catch(e){xe=Wt}})();function za(e){if(Te===setTimeout)return setTimeout(e,0);if((Te===Ft||!Te)&&setTimeout)return Te=setTimeout,setTimeout(e,0);try{return Te(e,0)}catch(o){try{return Te.call(null,e,0)}catch(t){return Te.call(this,e,0)}}}function Kl(e){if(xe===clearTimeout)return clearTimeout(e);if((xe===Wt||!xe)&&clearTimeout)return xe=clearTimeout,clearTimeout(e);try{return xe(e)}catch(o){try{return xe.call(null,e)}catch(t){return xe.call(this,e)}}}var Ne=[],uo=!1,Xe,Sn=-1;function Xl(){!uo||!Xe||(uo=!1,Xe.length?Ne=Xe.concat(Ne):Sn=-1,Ne.length&&ja())}function ja(){if(!uo){var e=za(Xl);uo=!0;for(var o=Ne.length;o;){for(Xe=Ne,Ne=[];++Sn<o;)Xe&&Xe[Sn].run();Sn=-1,o=Ne.length}Xe=null,uo=!1,Kl(e)}}F.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)o[t-1]=arguments[t];Ne.push(new Ka(e,o)),Ne.length===1&&!uo&&za(ja)};function Ka(e,o){this.fun=e,this.array=o}Ka.prototype.run=function(){this.fun.apply(null,this.array)};F.title="browser";F.browser=!0;F.env={};F.argv=[];F.version="";F.versions={};function Ce(){}F.on=Ce;F.addListener=Ce;F.once=Ce;F.off=Ce;F.removeListener=Ce;F.removeAllListeners=Ce;F.emit=Ce;F.prependListener=Ce;F.prependOnceListener=Ce;F.listeners=function(e){return[]};F.binding=function(e){throw new Error("process.binding is not supported")};F.cwd=function(){return"/"};F.chdir=function(e){throw new Error("process.chdir is not supported")};F.umask=function(){return 0}});var r,i,Yl,a,n=y(()=>{r=g(qa()),i=g(Ya()),Yl=function(e){function o(){var c=this||self;return delete e.prototype.__magic__,c}if(typeof globalThis=="object")return globalThis;if(this)return o();e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:o});var t=__magic__;return t}(Object),a=Yl});var Ee,Ye=y(()=>{"use strict";n();Ee=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Bt={};B(Bt,{css:()=>Ja,default:()=>Zl});var Ja,Zl,Ut=y(()=>{"use strict";n();Ja=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ja));Zl={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var oi=y(()=>{"use strict";n()});var ye=y(()=>{"use strict";n()});var ni=y(()=>{"use strict";n()});var Vt,ti=y(()=>{"use strict";n();Vt=(c=>(c.SetGuardian="SetGuardian",c.GuardAccount="GuardAccount",c.UnGuardAccount="UnGuardAccount",c))(Vt||{})});var ri=y(()=>{"use strict";n()});var Ht=y(()=>{"use strict";n()});var ai=y(()=>{"use strict";n()});var $t=y(()=>{"use strict";n()});var ii=y(()=>{"use strict";n()});var ci=y(()=>{"use strict";n()});var Ze,fo,Be=y(()=>{"use strict";n();Ze=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),fo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var si,_S,pi,uS,P=y(()=>{"use strict";n();Be();si=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(si||{}),_S=u(u({},fo.WindowProviderRequestEnums),si),pi=(o=>(o.reloginResponse="RELOGIN_RESPONSE",o))(pi||{}),uS=u(u({},fo.WindowProviderResponseEnums),pi)});var mi=y(()=>{"use strict";n()});var di=y(()=>{"use strict";n()});var J=y(()=>{"use strict";n()});var li=y(()=>{"use strict";n()});var _i=y(()=>{"use strict";n()});var ui=y(()=>{"use strict";n()});var W=y(()=>{"use strict";n();$t();ii();ci();P();mi();di();J();li();_i();ui()});var go,fi,ES,gi,PS,hi,DS,RS,e_,ho=y(()=>{"use strict";n();W();go={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:fi,egldLabel:ES}=go["devnet"],{chainId:gi,egldLabel:PS}=go["testnet"],{chainId:hi,egldLabel:DS}=go["mainnet"],RS={["devnet"]:fi,["testnet"]:gi,["mainnet"]:hi},e_={[fi]:"devnet",[gi]:"testnet",[hi]:"mainnet"}});var bn=y(()=>{"use strict";n()});var Se,Ti=y(()=>{"use strict";n();Se=require("@multiversx/sdk-web-wallet-provider")});var be,To=y(()=>{"use strict";n();be=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var xi,yi,qt,US,GS,zt=y(()=>{"use strict";n();To();qt=String((yi=(xi=be.safeWindow)==null?void 0:xi.navigator)==null?void 0:yi.userAgent),US=/^((?!chrome|android).)*safari/i.test(qt),GS=/firefox/i.test(qt)&&/windows/i.test(qt)});var jt,wn,Ho,Kt,$o,ae,Je,Si,vn,bi,ie,wi,vi,k=y(()=>{"use strict";n();oi();ye();ni();ti();ri();Ht();ai();ho();bn();Ti();zt();jt=.01,wn=1500,Ho=5e4,Kt=5e4,$o=1e9,ae=18,Je=4,Si=1,vn="logout",bi="login",ie="0",wi="...",vi="EGLD-000000"});var qo,An=y(()=>{"use strict";n();qo=()=>Date.now()/1e3});var Ai=y(()=>{"use strict";n()});var Ii=y(()=>{"use strict";n()});var Xt=y(()=>{"use strict";n();An();Ai();Ii()});var Yt={};B(Yt,{clear:()=>r_,getItem:()=>n_,localStorageKeys:()=>Ue,removeItem:()=>t_,setItem:()=>o_});var Ue,In,o_,n_,t_,r_,xo=y(()=>{"use strict";n();Xt();Ue={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},In=typeof localStorage!="undefined",o_=({key:e,data:o,expires:t})=>{!In||localStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},n_=e=>{if(!In)return;let o=localStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:qo()>=t.expires?(localStorage.removeItem(String(e)),null):t.data},t_=e=>{!In||localStorage.removeItem(String(e))},r_=()=>{!In||localStorage.clear()}});var Zt={};B(Zt,{clear:()=>Ci,getItem:()=>Li,removeItem:()=>Ni,setItem:()=>ki,storage:()=>a_});var ki,Li,Ni,Ci,a_,Ei=y(()=>{"use strict";n();ki=({key:e,data:o,expires:t})=>{sessionStorage.setItem(String(e),JSON.stringify({expires:t,data:o}))},Li=e=>{let o=sessionStorage.getItem(String(e));if(!o)return null;let t=JSON.parse(o);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(e)),null):t.data},Ni=e=>sessionStorage.removeItem(String(e)),Ci=()=>sessionStorage.clear(),a_={setItem:ki,getItem:Li,removeItem:Ni,clear:Ci}});var Qe,yo=y(()=>{"use strict";n();xo();Ei();Qe={session:Zt,local:Yt}});var Jt,R,ne,M=y(()=>{"use strict";n();Jt=require("@reduxjs/toolkit");k();R=(0,Jt.createAction)(vn),ne=(0,Jt.createAction)(bi,e=>({payload:e}))});var er,Pi,Di,kn,Qt,Ri,Ln,i_,or,Tb,c_,s_,xb,yb,Sb,p_,m_,Nn,Cn=y(()=>{"use strict";n();er=require("@multiversx/sdk-core"),Pi=require("@reduxjs/toolkit"),Di=require("redux-persist");k();yo();xo();M();kn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:ie},Qt={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":kn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Ri=(0,Pi.createSlice)({name:"accountInfoSlice",initialState:Qt,reducers:{setAddress:(e,o)=>{let t=o.payload;e.address=t,e.publicKey=t?new er.Address(t).hex():""},setAccount:(e,o)=>{let t=e.address===o.payload.address;e.accounts={[e.address]:t?o.payload:kn},e.shard=o.payload.shard,e.isAccountLoading=!1,e.accountLoadingError=null},setAccountNonce:(e,o)=>{let{address:t}=e;e.accounts[t].nonce=o.payload},setAccountShard:(e,o)=>{e.shard=o.payload},setLedgerAccount:(e,o)=>{e.ledgerAccount=o.payload},updateLedgerAccount:(e,o)=>{e.ledgerAccount!=null&&(e.ledgerAccount.index=o.payload.index,e.ledgerAccount.address=o.payload.address)},setWalletConnectAccount:(e,o)=>{e.walletConnectAccount=o.payload},setIsAccountLoading:(e,o)=>{e.isAccountLoading=o.payload,e.accountLoadingError=null},setAccountLoadingError:(e,o)=>{e.accountLoadingError=o.payload,e.isAccountLoading=!1},setWebsocketEvent:(e,o)=>{e.websocketEvent={timestamp:Date.now(),message:o.payload}},setWebsocketBatchEvent:(e,o)=>{e.websocketBatchEvent={timestamp:Date.now(),data:o.payload}}},extraReducers:e=>{e.addCase(R,()=>(Qe.local.removeItem(Ue.loginExpiresAt),Qt)),e.addCase(ne,(o,t)=>{let{address:c}=t.payload;o.address=c,o.publicKey=new er.Address(c).hex()}),e.addCase(Di.REHYDRATE,(o,t)=>{var f;if(!((f=t.payload)!=null&&f.account))return;let{account:c}=t.payload,{address:s,shard:p,accounts:m,publicKey:d}=c;o.address=s,o.shard=p;let l=m&&s in m;o.accounts=l?m:Qt.accounts,o.publicKey=d})}}),{setAccount:Ln,setAddress:i_,setAccountNonce:or,setAccountShard:Tb,setLedgerAccount:c_,updateLedgerAccount:s_,setWalletConnectAccount:xb,setIsAccountLoading:yb,setAccountLoadingError:Sb,setWebsocketEvent:p_,setWebsocketBatchEvent:m_}=Ri.actions,Nn=Ri.reducer});function zo(){return new Date().setHours(new Date().getHours()+24)}function jo(e){Qe.local.setItem({key:Ue.loginExpiresAt,data:e,expires:e})}var nr=y(()=>{"use strict";n();yo();xo()});var Oi,Mi,Fi,Eb,d_,l_,Wi,Pb,__,Bi,Db,Rb,Mb,En,Pn=y(()=>{"use strict";n();Oi=require("@reduxjs/toolkit");nr();P();M();Mi={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Fi=(0,Oi.createSlice)({name:"loginInfoSlice",initialState:Mi,reducers:{setLoginMethod:(e,o)=>{e.loginMethod=o.payload},setTokenLogin:(e,o)=>{e.tokenLogin=o.payload},setTokenLoginSignature:(e,o)=>{(e==null?void 0:e.tokenLogin)!=null&&(e.tokenLogin.signature=o.payload)},setWalletLogin:(e,o)=>{e.walletLogin=o.payload},setWalletConnectLogin:(e,o)=>{e.walletConnectLogin=o.payload},setLedgerLogin:(e,o)=>{e.ledgerLogin=o.payload},setWebviewLogin:(e,o)=>{e.webviewLogin=o.payload},invalidateLoginSession:e=>{e.isLoginSessionInvalid=!0},setLogoutRoute:(e,o)=>{e.logoutRoute=o.payload},setIsWalletConnectV2Initialized:(e,o)=>{e.isWalletConnectV2Initialized=o.payload}},extraReducers:e=>{e.addCase(R,()=>Mi),e.addCase(ne,(o,t)=>{o.isLoginSessionInvalid=!1,o.loginMethod=t.payload.loginMethod,o.iframeLoginType=t.payload.iframeLoginType,jo(zo())})}}),{setLoginMethod:Eb,setWalletConnectLogin:d_,setLedgerLogin:l_,setTokenLogin:Wi,setTokenLoginSignature:Pb,setWalletLogin:__,invalidateLoginSession:Bi,setLogoutRoute:Db,setIsWalletConnectV2Initialized:Rb,setWebviewLogin:Mb}=Fi.actions,En=Fi.reducer});var Gi,Ui,Vi,Bb,u_,Ub,f_,Dn,Rn=y(()=>{"use strict";n();Gi=require("@reduxjs/toolkit");M();Ui={},Vi=(0,Gi.createSlice)({name:"modalsSlice",initialState:Ui,reducers:{setTxSubmittedModal:(e,o)=>{e.txSubmittedModal=o.payload},setNotificationModal:(e,o)=>{e.notificationModal=o.payload},clearTxSubmittedModal:e=>{e.txSubmittedModal=void 0},clearNotificationModal:e=>{e.notificationModal=void 0}},extraReducers:e=>{e.addCase(R,()=>Ui)}}),{setTxSubmittedModal:Bb,setNotificationModal:u_,clearTxSubmittedModal:Ub,clearNotificationModal:f_}=Vi.actions,Dn=Vi.reducer});var U,z=y(()=>{"use strict";n();Ye();U=()=>{if(!Ee())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:o,hash:t,origin:c,href:s,search:p}}=window;return{pathname:o,hash:t,origin:c,href:s,search:p}}});var Hi=y(()=>{"use strict";n();z()});var $i=y(()=>{"use strict";n();j()});var qi=y(()=>{"use strict";n();To()});var j=y(()=>{"use strict";n();Hi();$i();z();qi()});var Ko=y(()=>{"use strict";n();j()});var ji=y(()=>{"use strict";n();Ko()});function Ki(e){return e[Math.floor(Math.random()*e.length)]}var Xi=y(()=>{"use strict";n()});var tr=y(()=>{"use strict";n();Ht()});var Pe=y(()=>{"use strict";n();ji();Xi();tr()});var Yi,Zi,Ji,rr,h_,Qi,T0,x0,T_,Mn,On=y(()=>{"use strict";n();Yi=require("@reduxjs/toolkit"),Zi=g(require("lodash.omit")),Ji=require("redux-persist");bn();M();Pe();rr={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},h_={network:rr},Qi=(0,Yi.createSlice)({name:"appConfig",initialState:h_,reducers:{initializeNetworkConfig:(e,o)=>{let t=Ki(o.payload.walletConnectV2RelayAddresses),c=(0,Zi.default)(o.payload,"walletConnectV2RelayAddresses");e.network=I(u(u({},e.network),c),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(e,o)=>{e.network=u(u({},e.network),o.payload)},setCustomWalletAddress:(e,o)=>{e.network.customWalletAddress=o.payload}},extraReducers:e=>{e.addCase(R,o=>{o.network.customWalletAddress=void 0}),e.addCase(Ji.REHYDRATE,(o,t)=>{var s,p;if(!((p=(s=t.payload)==null?void 0:s.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:c}}=t.payload;o.network.customWalletAddress=c})}}),{initializeNetworkConfig:T0,updateNetworkConfig:x0,setCustomWalletAddress:T_}=Qi.actions,Mn=Qi.reducer});var ec,ar,oc,A0,I0,k0,Fn,Wn=y(()=>{"use strict";n();ec=require("@reduxjs/toolkit");W();M();ar={isSigning:!1,signedSessions:{}},oc=(0,ec.createSlice)({name:"signedMessageInfoSliceState",initialState:ar,reducers:{setSignSession:(e,o)=>{let{sessionId:t,signedSession:c,errorMessage:s}=o.payload;s&&(e.errorMessage=s),e.isSigning=c.status==="pending",e.signedSessions[t]=u(u({},e.signedSessions[t]),c)},setSignSessionState:(e,o)=>u(u({},e),o.payload),clearSignedMessageInfo:()=>ar},extraReducers:e=>{e.addCase(R,()=>ar)}}),{setSignSession:A0,clearSignedMessageInfo:I0,setSignSessionState:k0}=oc.actions,Fn=oc.reducer});var tc,rc,nc,ac,x_,y_,R0,S_,Bn,Un=y(()=>{"use strict";n();tc=require("@reduxjs/toolkit"),rc=require("redux-persist");W();An();M();nc={customToasts:[],transactionToasts:[]},ac=(0,tc.createSlice)({name:"toastsSlice",initialState:nc,reducers:{addCustomToast:(e,o)=>{let t=o.payload.toastId||`custom-toast-${e.customToasts.length+1}`,c=e.customToasts.findIndex(s=>s.toastId===t);if(c!==-1){e.customToasts[c]=I(u(u({},e.customToasts[c]),o.payload),{type:"custom",toastId:t});return}e.customToasts.push(I(u({},o.payload),{type:"custom",toastId:t}))},removeCustomToast:(e,o)=>{e.customToasts=e.customToasts.filter(t=>t.toastId!==o.payload)},addTransactionToast:(e,o)=>{e.transactionToasts.push({type:"transaction",startTimestamp:qo(),toastId:o.payload||`custom-toast-${e.transactionToasts.length+1}`})},removeTransactionToast:(e,o)=>{e.transactionToasts=e.transactionToasts.filter(t=>t.toastId!==o.payload)}},extraReducers:e=>{e.addCase(R,()=>nc),e.addCase(rc.REHYDRATE,(o,t)=>{var s,p;let c=(p=(s=t.customToasts)==null?void 0:s.filter(m=>!("component"in m)))!=null?p:[];o.customToasts=c})}}),{addCustomToast:x_,removeCustomToast:y_,addTransactionToast:R0,removeTransactionToast:S_}=ac.actions,Bn=ac.reducer});var ic,cr,sr,pr,b_,ir,cc,W0,w_,mr,Gn,Vn=y(()=>{"use strict";n();ic=require("@reduxjs/toolkit");M();cr="Transaction failed",sr="Transaction successful",pr="Processing transaction",b_="Transaction submitted",ir={},cc=(0,ic.createSlice)({name:"transactionsInfo",initialState:ir,reducers:{setTransactionsDisplayInfo(e,o){let{sessionId:t,transactionsDisplayInfo:c}=o.payload;t!=null&&(e[t]={errorMessage:(c==null?void 0:c.errorMessage)||cr,successMessage:(c==null?void 0:c.successMessage)||sr,processingMessage:(c==null?void 0:c.processingMessage)||pr,submittedMessage:(c==null?void 0:c.submittedMessage)||b_,transactionDuration:c==null?void 0:c.transactionDuration})},clearTransactionsInfoForSessionId(e,o){o.payload!=null&&delete e[o.payload]},clearTransactionsInfo:()=>ir},extraReducers:e=>{e.addCase(R,()=>ir)}}),{clearTransactionsInfo:W0,setTransactionsDisplayInfo:w_,clearTransactionsInfoForSessionId:mr}=cc.actions,Gn=cc.reducer});function bo(e){return e!=null&&(D_(e)||W_(e))}function wo(e){return e!=null&&(R_(e)||B_(e))}function vo(e){return e!=null&&(M_(e)||U_(e))}function sc(e){return e!=null&&(O_(e)||G_(e))}function dr(e){return e!=null&&F_(e)}function D_(e){return e!=null&&v_.includes(e)}function R_(e){return e!=null&&A_.includes(e)}function M_(e){return e!=null&&I_.includes(e)}function O_(e){return e!=null&&k_.includes(e)}function F_(e){return e!=null&&L_.includes(e)}function W_(e){return e!=null&&N_.includes(e)}function B_(e){return e!=null&&C_.includes(e)}function U_(e){return e!=null&&E_.includes(e)}function G_(e){return e!=null&&P_.includes(e)}var v_,A_,I_,k_,L_,N_,C_,E_,P_,Ao=y(()=>{"use strict";n();P();v_=["sent"],A_=["success"],I_=["fail","cancelled","timedOut"],k_=["invalid"],L_=["timedOut"],N_=["pending"],C_=["success"],E_=["fail","invalid"],P_=["not executed"]});var pc,mc,Xo,V_,dc,lc,_c,H_,Hn,$_,q_,j0,z_,Yo,lr,K0,$n,qn=y(()=>{"use strict";n();pc=require("@reduxjs/toolkit"),mc=require("redux-persist");P();Ao();M();Xo={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},V_={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},dc=(0,pc.createSlice)({name:"transactionsSlice",initialState:Xo,reducers:{moveTransactionsToSignedState:(e,o)=>{var l,f;let{sessionId:t,transactions:c,errorMessage:s,status:p,redirectRoute:m,customTransactionInformation:d}=o.payload;e.customTransactionInformationForSessionId[t]=u(u(u({},V_),((l=e.signedTransactions[t])==null?void 0:l.customTransactionInformation)||{}),e.customTransactionInformationForSessionId[t]||{}),e.signedTransactions[t]={transactions:c,status:p,errorMessage:s,redirectRoute:m,customTransactionInformation:u(u({},e.customTransactionInformationForSessionId[t]),d!=null?d:{})},((f=e==null?void 0:e.transactionsToSign)==null?void 0:f.sessionId)===t&&(e.transactionsToSign=Xo.transactionsToSign)},clearSignedTransaction:(e,o)=>{e.signedTransactions[o.payload]&&delete e.signedTransactions[o.payload]},clearTransactionToSign:e=>{e!=null&&e.transactionsToSign&&(e.transactionsToSign=null)},updateSignedTransaction:(e,o)=>{e.signedTransactions=u(u({},e.signedTransactions),o.payload)},updateSignedTransactions:(e,o)=>{let{sessionId:t,status:c,errorMessage:s,transactions:p}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].status=c,s!=null&&(e.signedTransactions[t].errorMessage=s),p!=null&&(e.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(e,o)=>{var f,h,x,w,v,A,V,X;let{sessionId:t,status:c,errorMessage:s,transactionHash:p,serverTransaction:m,inTransit:d}=o.payload,l=(h=(f=e.signedTransactions)==null?void 0:f[t])==null?void 0:h.transactions;if(l!=null){e.signedTransactions[t].transactions=l.map(D=>D.hash===p?I(u(u({},m!=null?m:{}),D),{status:c,errorMessage:s,inTransit:d}):D);let Y=(w=(x=e.signedTransactions[t])==null?void 0:x.transactions)==null?void 0:w.every(D=>wo(D.status)),se=(A=(v=e.signedTransactions[t])==null?void 0:v.transactions)==null?void 0:A.some(D=>vo(D.status)),ke=(X=(V=e.signedTransactions[t])==null?void 0:V.transactions)==null?void 0:X.every(D=>sc(D.status));Y&&(e.signedTransactions[t].status="success"),se&&(e.signedTransactions[t].status="fail"),ke&&(e.signedTransactions[t].status="invalid")}},setTransactionsToSign:(e,o)=>{e.transactionsToSign=o.payload;let{sessionId:t,customTransactionInformation:c}=o.payload;e.customTransactionInformationForSessionId[t]=c,e.signTransactionsError=null},clearAllTransactionsToSign:e=>{e.transactionsToSign=Xo.transactionsToSign,e.signTransactionsError=null},clearAllSignedTransactions:e=>{e.signedTransactions=Xo.signedTransactions},setSignTransactionsError:(e,o)=>{e.signTransactionsError=o.payload},setSignTransactionsCancelMessage:(e,o)=>{e.signTransactionsCancelMessage=o.payload},updateSignedTransactionsCustomTransactionInformation:(e,o)=>{let{sessionId:t,customTransactionInformationOverrides:c}=o.payload;e.signedTransactions[t]!=null&&(e.signedTransactions[t].customTransactionInformation=u(u({},e.signedTransactions[t].customTransactionInformation),c))}},extraReducers:e=>{e.addCase(R,()=>Xo),e.addCase(mc.REHYDRATE,(o,t)=>{var m;if(o.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:c,customTransactionInformationForSessionId:s}=t.payload.transactions,p=Object.entries(c).reduce((d,[l,f])=>{let h=new Date(l),x=new Date;return x.setHours(x.getHours()+5),x-h>0||(d[l]=f),d},{});s!=null&&(o.customTransactionInformationForSessionId=s),c!=null&&(o.signedTransactions=p)})}}),{updateSignedTransactionStatus:lc,updateSignedTransactions:_c,setTransactionsToSign:H_,clearAllTransactionsToSign:Hn,clearAllSignedTransactions:$_,clearSignedTransaction:q_,clearTransactionToSign:j0,setSignTransactionsError:z_,setSignTransactionsCancelMessage:Yo,moveTransactionsToSignedState:lr,updateSignedTransactionsCustomTransactionInformation:K0}=dc.actions,$n=dc.reducer});var uc,_r,fc,J0,Q0,j_,ew,zn,jn=y(()=>{"use strict";n();uc=require("@reduxjs/toolkit");M();_r={},fc=(0,uc.createSlice)({name:"batchTransactionsSlice",initialState:_r,reducers:{setBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},updateBatchTransactions:(e,o)=>{e[o.payload.id]=o.payload},clearBatchTransactions:(e,o)=>{delete e[o.payload.batchId]},clearAllBatchTransactions:()=>_r},extraReducers:e=>{e.addCase(R,()=>_r)}}),{setBatchTransactions:J0,updateBatchTransactions:Q0,clearBatchTransactions:j_,clearAllBatchTransactions:ew}=fc.actions,zn=fc.reducer});var hc,gc,Tc,rw,xc,ur=y(()=>{"use strict";n();hc=require("@reduxjs/toolkit");M();gc={},Tc=(0,hc.createSlice)({name:"dappConfigSlice",initialState:gc,reducers:{setDappConfig:(e,o)=>o.payload},extraReducers:e=>{e.addCase(R,()=>gc)}}),{setDappConfig:rw}=Tc.actions,xc=Tc.reducer});var E=y(()=>{"use strict";n();Cn();Pn();Rn();On();Wn();Un();Vn();qn();jn();ur()});var fr=y(()=>{"use strict";n()});var bc,Z_,J_,eo,Yn=y(()=>{"use strict";n();bc=require("@reduxjs/toolkit");fr();Cn();jn();ur();Pn();Rn();On();Wn();Un();Vn();qn();Z_={["account"]:Nn,["dappConfig"]:xc,["loginInfo"]:En,["modals"]:Dn,["networkConfig"]:Mn,["signedMessageInfo"]:Fn,["toasts"]:Bn,["transactionsInfo"]:Gn,["transactions"]:$n,["batchTransactions"]:zn},J_=(e={})=>(0,bc.combineReducers)(u(u({},Z_),e)),eo=J_});var Ic={};B(Ic,{default:()=>uu,sessionStorageReducers:()=>gr});function De(e,o=[]){return{key:e,version:1,storage:vc.default,blacklist:o}}var Q,wc,vc,Q_,Zo,eu,ou,nu,tu,ru,au,iu,cu,su,pu,Ac,mu,gr,du,lu,_u,uu,kc=y(()=>{"use strict";n();Q=require("redux-persist"),wc=g(require("redux-persist/lib/storage")),vc=g(require("redux-persist/lib/storage/session"));Yn();E();Cn();jn();Pn();Rn();On();Wn();Un();Vn();qn();fr();Q_={persistReducersStorageType:"localStorage"},Zo={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},eu=De(Zo["account"]),ou=De(Zo["loginInfo"]),nu=De(Zo["modals"]),tu=De(Zo["networkConfig"]),ru={2:e=>I(u({},e),{networkConfig:rr})};au=De("sdk-dapp-transactionsInfo"),iu=De("sdk-dapp-transactions",["transactionsToSign"]),cu=De("sdk-dapp-batchTransactions",["batchTransactions"]),su=De("sdk-dapp-toasts"),pu=De("sdk-dapp-signedMessageInfo"),Ac={key:"sdk-dapp-store",version:2,storage:wc.default,whitelist:Object.keys(Zo),migrate:(0,Q.createMigrate)(ru,{debug:!1})},mu=I(u({},Ac),{whitelist:[]}),gr={["toasts"]:(0,Q.persistReducer)(su,Bn),["transactions"]:(0,Q.persistReducer)(iu,$n),["transactionsInfo"]:(0,Q.persistReducer)(au,Gn),["batchTransactions"]:(0,Q.persistReducer)(cu,zn),["signedMessageInfo"]:(0,Q.persistReducer)(pu,Fn)},du=I(u({},gr),{["account"]:(0,Q.persistReducer)(eu,Nn),["loginInfo"]:(0,Q.persistReducer)(ou,En),["modals"]:(0,Q.persistReducer)(nu,Dn),["networkConfig"]:(0,Q.persistReducer)(tu,Mn)}),lu=Q_.persistReducersStorageType==="localStorage",_u=lu?(0,Q.persistReducer)(Ac,eo(gr)):(0,Q.persistReducer)(mu,eo(du)),uu=_u});var Lc={};B(Lc,{default:()=>fu});var fu,Nc=y(()=>{"use strict";n();Yn();fu=eo()});var Cc={};B(Cc,{default:()=>hu});var ce,gu,hu,Ec=y(()=>{"use strict";n();ce=require("redux-persist"),gu=[ce.FLUSH,ce.REHYDRATE,ce.PAUSE,ce.PERSIST,ce.PURGE,ce.REGISTER],hu=gu});var Rc={};B(Rc,{default:()=>Dc});function Dc(e){return(0,Pc.persistStore)(e)}var Pc,Mc=y(()=>{"use strict";n();Pc=require("redux-persist")});var zs=b((O3,qs)=>{n();var cg=typeof a=="object"&&a&&a.Object===Object&&a;qs.exports=cg});var sn=b((F3,js)=>{n();var sg=zs(),pg=typeof self=="object"&&self&&self.Object===Object&&self,mg=sg||pg||Function("return this")();js.exports=mg});var Fr=b((W3,Ks)=>{n();var dg=sn(),lg=dg.Symbol;Ks.exports=lg});var Js=b((B3,Zs)=>{n();var Xs=Fr(),Ys=Object.prototype,_g=Ys.hasOwnProperty,ug=Ys.toString,pn=Xs?Xs.toStringTag:void 0;function fg(e){var o=_g.call(e,pn),t=e[pn];try{e[pn]=void 0;var c=!0}catch(p){}var s=ug.call(e);return c&&(o?e[pn]=t:delete e[pn]),s}Zs.exports=fg});var ep=b((U3,Qs)=>{n();var gg=Object.prototype,hg=gg.toString;function Tg(e){return hg.call(e)}Qs.exports=Tg});var Wr=b((G3,tp)=>{n();var op=Fr(),xg=Js(),yg=ep(),Sg="[object Null]",bg="[object Undefined]",np=op?op.toStringTag:void 0;function wg(e){return e==null?e===void 0?bg:Sg:np&&np in Object(e)?xg(e):yg(e)}tp.exports=wg});var ap=b((V3,rp)=>{n();var vg=Array.isArray;rp.exports=vg});var cp=b((H3,ip)=>{n();function Ag(e){return e!=null&&typeof e=="object"}ip.exports=Ag});var pp=b(($3,sp)=>{n();var Ig=Wr(),kg=ap(),Lg=cp(),Ng="[object String]";function Cg(e){return typeof e=="string"||!kg(e)&&Lg(e)&&Ig(e)==Ng}sp.exports=Cg});var ft=b((H5,up)=>{n();function Xg(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}up.exports=Xg});var gp=b(($5,fp)=>{n();var Yg=Wr(),Zg=ft(),Jg="[object AsyncFunction]",Qg="[object Function]",eh="[object GeneratorFunction]",oh="[object Proxy]";function nh(e){if(!Zg(e))return!1;var o=Yg(e);return o==Qg||o==eh||o==Jg||o==oh}fp.exports=nh});var Tp=b((q5,hp)=>{n();var th=sn(),rh=th["__core-js_shared__"];hp.exports=rh});var Sp=b((z5,yp)=>{n();var Vr=Tp(),xp=function(){var e=/[^.]+$/.exec(Vr&&Vr.keys&&Vr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ah(e){return!!xp&&xp in e}yp.exports=ah});var wp=b((j5,bp)=>{n();var ih=Function.prototype,ch=ih.toString;function sh(e){if(e!=null){try{return ch.call(e)}catch(o){}try{return e+""}catch(o){}}return""}bp.exports=sh});var Ap=b((K5,vp)=>{n();var ph=gp(),mh=Sp(),dh=ft(),lh=wp(),_h=/[\\^$.*+?()[\]{}|]/g,uh=/^\[object .+?Constructor\]$/,fh=Function.prototype,gh=Object.prototype,hh=fh.toString,Th=gh.hasOwnProperty,xh=RegExp("^"+hh.call(Th).replace(_h,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function yh(e){if(!dh(e)||mh(e))return!1;var o=ph(e)?xh:uh;return o.test(lh(e))}vp.exports=yh});var kp=b((X5,Ip)=>{n();function Sh(e,o){return e==null?void 0:e[o]}Ip.exports=Sh});var gt=b((Y5,Lp)=>{n();var bh=Ap(),wh=kp();function vh(e,o){var t=wh(e,o);return bh(t)?t:void 0}Lp.exports=vh});var mn=b((Z5,Np)=>{n();var Ah=gt(),Ih=Ah(Object,"create");Np.exports=Ih});var Pp=b((J5,Ep)=>{n();var Cp=mn();function kh(){this.__data__=Cp?Cp(null):{},this.size=0}Ep.exports=kh});var Rp=b((Q5,Dp)=>{n();function Lh(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}Dp.exports=Lh});var Op=b((eO,Mp)=>{n();var Nh=mn(),Ch="__lodash_hash_undefined__",Eh=Object.prototype,Ph=Eh.hasOwnProperty;function Dh(e){var o=this.__data__;if(Nh){var t=o[e];return t===Ch?void 0:t}return Ph.call(o,e)?o[e]:void 0}Mp.exports=Dh});var Wp=b((oO,Fp)=>{n();var Rh=mn(),Mh=Object.prototype,Oh=Mh.hasOwnProperty;function Fh(e){var o=this.__data__;return Rh?o[e]!==void 0:Oh.call(o,e)}Fp.exports=Fh});var Up=b((nO,Bp)=>{n();var Wh=mn(),Bh="__lodash_hash_undefined__";function Uh(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Wh&&o===void 0?Bh:o,this}Bp.exports=Uh});var Vp=b((tO,Gp)=>{n();var Gh=Pp(),Vh=Rp(),Hh=Op(),$h=Wp(),qh=Up();function Do(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var c=e[o];this.set(c[0],c[1])}}Do.prototype.clear=Gh;Do.prototype.delete=Vh;Do.prototype.get=Hh;Do.prototype.has=$h;Do.prototype.set=qh;Gp.exports=Do});var $p=b((rO,Hp)=>{n();function zh(){this.__data__=[],this.size=0}Hp.exports=zh});var zp=b((aO,qp)=>{n();function jh(e,o){return e===o||e!==e&&o!==o}qp.exports=jh});var dn=b((iO,jp)=>{n();var Kh=zp();function Xh(e,o){for(var t=e.length;t--;)if(Kh(e[t][0],o))return t;return-1}jp.exports=Xh});var Xp=b((cO,Kp)=>{n();var Yh=dn(),Zh=Array.prototype,Jh=Zh.splice;function Qh(e){var o=this.__data__,t=Yh(o,e);if(t<0)return!1;var c=o.length-1;return t==c?o.pop():Jh.call(o,t,1),--this.size,!0}Kp.exports=Qh});var Zp=b((sO,Yp)=>{n();var eT=dn();function oT(e){var o=this.__data__,t=eT(o,e);return t<0?void 0:o[t][1]}Yp.exports=oT});var Qp=b((pO,Jp)=>{n();var nT=dn();function tT(e){return nT(this.__data__,e)>-1}Jp.exports=tT});var om=b((mO,em)=>{n();var rT=dn();function aT(e,o){var t=this.__data__,c=rT(t,e);return c<0?(++this.size,t.push([e,o])):t[c][1]=o,this}em.exports=aT});var tm=b((dO,nm)=>{n();var iT=$p(),cT=Xp(),sT=Zp(),pT=Qp(),mT=om();function Ro(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var c=e[o];this.set(c[0],c[1])}}Ro.prototype.clear=iT;Ro.prototype.delete=cT;Ro.prototype.get=sT;Ro.prototype.has=pT;Ro.prototype.set=mT;nm.exports=Ro});var am=b((lO,rm)=>{n();var dT=gt(),lT=sn(),_T=dT(lT,"Map");rm.exports=_T});var sm=b((_O,cm)=>{n();var im=Vp(),uT=tm(),fT=am();function gT(){this.size=0,this.__data__={hash:new im,map:new(fT||uT),string:new im}}cm.exports=gT});var mm=b((uO,pm)=>{n();function hT(e){var o=typeof e;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?e!=="__proto__":e===null}pm.exports=hT});var ln=b((fO,dm)=>{n();var TT=mm();function xT(e,o){var t=e.__data__;return TT(o)?t[typeof o=="string"?"string":"hash"]:t.map}dm.exports=xT});var _m=b((gO,lm)=>{n();var yT=ln();function ST(e){var o=yT(this,e).delete(e);return this.size-=o?1:0,o}lm.exports=ST});var fm=b((hO,um)=>{n();var bT=ln();function wT(e){return bT(this,e).get(e)}um.exports=wT});var hm=b((TO,gm)=>{n();var vT=ln();function AT(e){return vT(this,e).has(e)}gm.exports=AT});var xm=b((xO,Tm)=>{n();var IT=ln();function kT(e,o){var t=IT(this,e),c=t.size;return t.set(e,o),this.size+=t.size==c?0:1,this}Tm.exports=kT});var Sm=b((yO,ym)=>{n();var LT=sm(),NT=_m(),CT=fm(),ET=hm(),PT=xm();function Mo(e){var o=-1,t=e==null?0:e.length;for(this.clear();++o<t;){var c=e[o];this.set(c[0],c[1])}}Mo.prototype.clear=LT;Mo.prototype.delete=NT;Mo.prototype.get=CT;Mo.prototype.has=ET;Mo.prototype.set=PT;ym.exports=Mo});var wm=b((SO,bm)=>{n();var DT="__lodash_hash_undefined__";function RT(e){return this.__data__.set(e,DT),this}bm.exports=RT});var Am=b((bO,vm)=>{n();function MT(e){return this.__data__.has(e)}vm.exports=MT});var km=b((wO,Im)=>{n();var OT=Sm(),FT=wm(),WT=Am();function ht(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new OT;++o<t;)this.add(e[o])}ht.prototype.add=ht.prototype.push=FT;ht.prototype.has=WT;Im.exports=ht});var Nm=b((vO,Lm)=>{n();function BT(e,o,t,c){for(var s=e.length,p=t+(c?1:-1);c?p--:++p<s;)if(o(e[p],p,e))return p;return-1}Lm.exports=BT});var Em=b((AO,Cm)=>{n();function UT(e){return e!==e}Cm.exports=UT});var Dm=b((IO,Pm)=>{n();function GT(e,o,t){for(var c=t-1,s=e.length;++c<s;)if(e[c]===o)return c;return-1}Pm.exports=GT});var Mm=b((kO,Rm)=>{n();var VT=Nm(),HT=Em(),$T=Dm();function qT(e,o,t){return o===o?$T(e,o,t):VT(e,HT,t)}Rm.exports=qT});var Fm=b((LO,Om)=>{n();var zT=Mm();function jT(e,o){var t=e==null?0:e.length;return!!t&&zT(e,o,0)>-1}Om.exports=jT});var Bm=b((NO,Wm)=>{n();function KT(e,o,t){for(var c=-1,s=e==null?0:e.length;++c<s;)if(t(o,e[c]))return!0;return!1}Wm.exports=KT});var Gm=b((CO,Um)=>{n();function XT(e,o){return e.has(o)}Um.exports=XT});var Hm=b((EO,Vm)=>{n();var YT=gt(),ZT=sn(),JT=YT(ZT,"Set");Vm.exports=JT});var qm=b((PO,$m)=>{n();function QT(){}$m.exports=QT});var Hr=b((DO,zm)=>{n();function ex(e){var o=-1,t=Array(e.size);return e.forEach(function(c){t[++o]=c}),t}zm.exports=ex});var Km=b((RO,jm)=>{n();var $r=Hm(),ox=qm(),nx=Hr(),tx=1/0,rx=$r&&1/nx(new $r([,-0]))[1]==tx?function(e){return new $r(e)}:ox;jm.exports=rx});var Ym=b((MO,Xm)=>{n();var ax=km(),ix=Fm(),cx=Bm(),sx=Gm(),px=Km(),mx=Hr(),dx=200;function lx(e,o,t){var c=-1,s=ix,p=e.length,m=!0,d=[],l=d;if(t)m=!1,s=cx;else if(p>=dx){var f=o?null:px(e);if(f)return mx(f);m=!1,s=sx,l=new ax}else l=o?[]:d;e:for(;++c<p;){var h=e[c],x=o?o(h):h;if(h=t||h!==0?h:0,m&&x===x){for(var w=l.length;w--;)if(l[w]===x)continue e;o&&l.push(x),d.push(h)}else s(l,x,t)||(l!==d&&l.push(x),d.push(h))}return d}Xm.exports=lx});var Jm=b((OO,Zm)=>{n();var _x=Ym();function ux(e){return e&&e.length?_x(e):[]}Zm.exports=ux});var Oe={};B(Oe,{css:()=>md,default:()=>Xx});var md,Xx,Fe=y(()=>{"use strict";n();md=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(md));Xx={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Qr={};B(Qr,{css:()=>Ad,default:()=>uy});var Ad,uy,ea=y(()=>{"use strict";n();Ad=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ad));uy={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var na={};B(na,{css:()=>Id,default:()=>gy});var Id,gy,ta=y(()=>{"use strict";n();Id=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Id));gy={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var ra={};B(ra,{css:()=>Nd,default:()=>xy});var Nd,xy,aa=y(()=>{"use strict";n();Nd=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nd));xy={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var ca={};B(ca,{css:()=>Dd,default:()=>by});var Dd,by,sa=y(()=>{"use strict";n();Dd=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dd));by={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var pa={};B(pa,{css:()=>Wd,default:()=>vy});var Wd,vy,ma=y(()=>{"use strict";n();Wd=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wd));vy={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var da={};B(da,{css:()=>qd,default:()=>Iy});var qd,Iy,la=y(()=>{"use strict";n();qd=`.dapp-core-component__confirmAmountStyles__confirmAmount {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qd));Iy={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var ua={};B(ua,{css:()=>zd,default:()=>Ny});var zd,Ny,fa=y(()=>{"use strict";n();zd=`.dapp-core-component__confirmFeeStyles__confirmFee {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zd));Ny={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var ga={};B(ga,{css:()=>Xd,default:()=>Dy});var Xd,Dy,ha=y(()=>{"use strict";n();Xd=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xd));Dy={copy:"dapp-core-component__copyButton-styles__copy"}});var xa={};B(xa,{css:()=>Jd,default:()=>My});var Jd,My,ya=y(()=>{"use strict";n();Jd=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jd));My={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var ba={};B(ba,{css:()=>tl,default:()=>Fy});var tl,Fy,wa=y(()=>{"use strict";n();tl=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tl));Fy={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var va={};B(va,{css:()=>il,default:()=>By});var il,By,Aa=y(()=>{"use strict";n();il=`.dapp-core-component__confirmReceiverStyles__receiver {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper {
  display: flex;
  gap: 8px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabel {
  color: #a3a3a3;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabelScam {
  color: #d9534f;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  padding-left: 16px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabelScam:before {
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 10px;
  content: "";
  position: absolute;
  height: 1px;
  background-color: #a3a3a3;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverLabelWrapper .dapp-core-component__confirmReceiverStyles__receiverLabelScam .dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon {
  color: #d9534f;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper {
  display: flex;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  gap: 8px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverData {
  color: #737373;
  display: flex;
  gap: 2px;
  align-items: center;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverData .dapp-core-component__confirmReceiverStyles__receiverDataIcon {
  width: 10px;
  height: auto;
  margin-bottom: -2px;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverCopy {
  color: #737373;
  min-width: 1rem;
  max-height: 1rem;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverExternal {
  margin: 0;
  max-height: 1rem;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverExternal:hover * {
  color: #0ac2ae !important;
}
.dapp-core-component__confirmReceiverStyles__receiver .dapp-core-component__confirmReceiverStyles__receiverWrapper .dapp-core-component__confirmReceiverStyles__receiverExternal * {
  transition: all 200ms ease;
  color: #737373 !important;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(il));By={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var Vy={};B(Vy,{ConfirmAmount:()=>Ly,ConfirmFee:()=>Ey,ConfirmReceiver:()=>Gy});module.exports=O(Vy);n();n();n();var Ie=g(require("react")),_a=g(require("classnames"));n();var ei=g(require("react"));n();var Vo=g(require("react"));n();Ye();var Za=()=>!Ee();var Jl=()=>T(void 0,null,function*(){return yield Promise.resolve().then(()=>(Ut(),Bt))}),Ql=()=>(Ut(),O(Bt)).default,Gt=Za();function Qa({ssrGlobalImportCallback:e,ssrImportCallback:o,clientImportCallback:t}){let[c,s]=Vo.default.useState(Gt?void 0:Ql()),[p,m]=Vo.default.useState(Gt||t==null?void 0:t()),d=()=>T(this,null,function*(){(e?e():Jl()).then(l=>s(l.default)),o==null||o().then(l=>m(l.default))});return(0,Vo.useEffect)(()=>{Gt&&d()},[]),{globalStyles:c,styles:p}}function C(e,o){return t=>{let{globalStyles:c,styles:s}=Qa({ssrGlobalImportCallback:o.ssrGlobalStyles,ssrImportCallback:o.ssrStyles,clientImportCallback:o.clientStyles});return ei.default.createElement(e,I(u({},t),{globalStyles:c!=null?c:{},styles:s!=null?s:{}}))}}n();n();n();var Gc=require("react"),Io=require("react-redux");n();var hr=require("@reduxjs/toolkit"),Bc=require("react-redux/lib/utils/Subscription");E();n();var yc=g(require("lodash.throttle"));k();E();nr();yo();xo();var K_=[vn],Kn=!1,X_=(0,yc.default)(()=>{jo(zo())},5e3),Sc=e=>o=>t=>{if(K_.includes(t.type))return o(t);let c=e.getState(),s=Qe.local.getItem(Ue.loginExpiresAt);if(!Boolean(c==null?void 0:c.account.address))return o(t);if(s==null)return jo(zo());let m=Date.now();return s-m<0&&!Kn?setTimeout(()=>{Kn=!0,e.dispatch(Bi())},1e3):(Kn&&(Kn=!1),X_()),o(t)};n();n();function Xn(){return typeof sessionStorage!="undefined"}var Oc=Xn()?(kc(),O(Ic)).default:(Nc(),O(Lc)).default,Fc=Xn()?(Ec(),O(Cc)).default:[],Wc=Xn()?(Mc(),O(Rc)).default:e=>e;Yn();var L=(0,hr.configureStore)({reducer:Oc,middleware:e=>e({serializableCheck:{ignoredActions:[...Fc,or.type,Ln.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Sc)}),Uc=(0,Bc.createSubscription)(L),nv=Wc(L),tv=(0,hr.configureStore)({reducer:eo});var Tu={store:L,subscription:Uc},Tr=(0,Gc.createContext)(Tu),cv=(0,Io.createStoreHook)(Tr),K=(0,Io.createDispatchHook)(Tr),N=(0,Io.createSelectorHook)(Tr);n();n();E();n();var Vc=g(require("lodash.isequal")),Zn=require("reselect"),S=(0,Zn.createSelectorCreator)(Zn.defaultMemoize,Vc.default);var we=e=>e.account,oo=S(we,e=>e.address),ko=S(we,oo,(e,o)=>o in e.accounts?e.accounts[o]:kn),xu=S(we,ko,(e,o)=>{let s=e,{accounts:t}=s,c=pe(s,["accounts"]);return I(u({},c),{address:o.address,account:o})}),lv=S(ko,e=>e.balance),yu=S(ko,e=>{var o;return((o=e==null?void 0:e.nonce)==null?void 0:o.valueOf())||0}),_v=S(we,e=>e.shard),Su=S(we,e=>e.ledgerAccount),uv=S(we,e=>e.walletConnectAccount),fv=S(we,e=>e.isAccountLoading),gv=S(we,e=>e.accountLoadingError),bu=S(we,e=>e.websocketEvent),wu=S(we,e=>e.websocketBatchEvent);n();var Hc=e=>e.dappConfig,xv=S(Hc,e=>e.shouldUseWebViewProvider);n();var te=e=>e.loginInfo,vu=S(te,e=>e.loginMethod),Jn=S(te,oo,(e,o)=>Boolean(o)),wv=S(te,e=>e.walletConnectLogin),Au=S(te,e=>e.ledgerLogin),Iu=S(te,e=>e.walletLogin),vv=S(te,e=>e.isLoginSessionInvalid),xr=S(te,e=>e.tokenLogin),$c=S(te,e=>e.logoutRoute),ku=S(te,e=>e.isWalletConnectV2Initialized);n();var qc=e=>e.modals,kv=S(qc,e=>e.txSubmittedModal),Lu=S(qc,e=>e.notificationModal);n();var me=e=>e.networkConfig,Qn=S(me,e=>e.network.chainId),Nu=S(me,e=>e.network.roundDuration),Cv=S(me,e=>e.network.walletConnectBridgeAddress),Cu=S(me,e=>e.network.walletConnectV2RelayAddress),Eu=S(me,e=>e.network.walletConnectV2ProjectId),Pu=S(me,e=>e.network.walletConnectV2Options),Du=S(me,e=>e.network.walletConnectDeepLink),ee=S(me,e=>e.network),yr=S(ee,e=>e.apiAddress),zc=S(ee,e=>e.explorerAddress),jc=S(ee,e=>{var o;return(o=e.customWalletAddress)!=null?o:e.walletAddress}),Ru=S(ee,e=>e.xAliasAddress),Sr=S(ee,e=>e.egldLabel);n();var et=e=>e.signedMessageInfo,Dv=S(et,e=>e.isSigning),Rv=S(et,e=>e.errorMessage),Mv=S(et,e=>{let o=Object.keys(e.signedSessions),t=o.length;return e.signedSessions[o[t-1]]}),Ov=S(et,e=>{let o=Object.keys(e.signedSessions),t=o.length;return o.length>0?o[t-1]:""});n();var Kc=e=>e.toasts,Mu=S(Kc,e=>e.customToasts),Xc=S(Kc,e=>e.transactionToasts);n();E();var Yc={errorMessage:cr,successMessage:sr,processingMessage:pr},Zc=e=>e.transactionsInfo,Ou=S(Zc,(e,o)=>o,(e,o)=>o!=null&&(e==null?void 0:e[Number(o)])||Yc);n();n();var ve=require("@multiversx/sdk-core");k();n();var br=require("@multiversx/sdk-core/out");n();n();function ot(e){try{let o=atob(e),t=btoa(o),c=r.Buffer.from(e,"base64").toString(),s=r.Buffer.from(c).toString("base64"),p=e===t||t.startsWith(e),m=e===s||s.startsWith(e);if(p&&m)return!0}catch(o){return!1}return!1}n();n();n();n();var Jc=e=>{let o=e!=null?e:"";return ot(o)?br.TransactionPayload.fromEncoded(o):new br.TransactionPayload(o)};n();k();var Lo=({data:e,onlySetGuardian:o})=>e?o?e.startsWith("SetGuardian"):Object.values(Vt).some(t=>e.startsWith(t)):!1;function nt(e){var c,s,p;let o=u({},e);Lo({data:o.data,onlySetGuardian:!0})&&(delete o.senderUsername,delete o.receiverUsername);let t=new ve.Transaction(u(u(I(u(I(u({value:o.value.valueOf(),data:Jc(o.data),nonce:o.nonce.valueOf(),receiver:new ve.Address(o.receiver)},o.receiverUsername?{receiverUsername:o.receiverUsername}:{}),{sender:new ve.Address(o.sender)}),o.senderUsername?{senderUsername:o.senderUsername}:{}),{gasLimit:(c=o.gasLimit.valueOf())!=null?c:Ho,gasPrice:(s=o.gasPrice.valueOf())!=null?s:$o,chainID:o.chainID.valueOf(),version:new ve.TransactionVersion((p=o.version)!=null?p:Si)}),o.options?{options:new ve.TransactionOptions(o.options)}:{}),o.guardian?{guardian:new ve.Address(o.guardian)}:{}));return o.guardianSignature&&t.applyGuardianSignature(r.Buffer.from(o.guardianSignature,"hex")),o.signature&&t.applySignature(r.Buffer.from(o.signature,"hex")),t}n();n();k();n();n();n();var Uu=require("@multiversx/sdk-core/out");n();k();n();var Qo=require("@multiversx/sdk-core");W();n();var Qc=require("@multiversx/sdk-core");function Gu(e){try{let o=new Qc.Address(e);return Boolean(o.bech32())}catch(o){return!1}}function Jo(e){return(e==null?void 0:e.length)===62&&/^\w+$/.test(e)&&Gu(e)}var Vu=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function wr(e,o,t=""){if(!Jo(e))return!1;if(new Qo.Address(e).isContractAddress())return!0;let p=es({receiver:e,data:t});return p?new Qo.Address(p).isContractAddress()||qu(e,o,t):!1}var Hu=e=>e.toLowerCase().match(/[0-9a-f]/g),$u=e=>e.length%2===0;function qu(e,o,t){let c=t==null?void 0:t.split("@");if(c==null)return!1;let[s,...p]=c,m=o!=null&&e!=null&&e===o,d=Vu.includes(s),l=p.every(f=>Hu(f)&&$u(f));return m&&d&&l}function es({receiver:e,data:o}){try{if(!o)return e;let t=ot(o)?Qo.TransactionPayload.fromEncoded(o).toString():o,c=zu(t),s=t.split("@");return c>-1?s[c]:e}catch(t){console.log(t);return}}function zu(e){return e.includes("MultiESDTNFTTransfer")?1:e.includes("ESDTNFTTransfer")?4:-1}n();n();n();var ju=require("@multiversx/sdk-core"),Ku=g(require("bignumber.js"));P();n();n();n();var oe="accounts";var tt="blocks",ts="code",rs="collections";var as="contracts",en="economics",is="identities";var cs="locked-accounts",ss="logs",ps="miniblocks";var on="nfts",ms="nodes",vr="providers",ds="roles",Ar="sc-results";var Ve="tokens";var de="transactions";var nn={shard:e=>`/${tt}?shard=${e}`,receiverShard:e=>`/${de}?receivershard=${e}`,senderShard:e=>`/${de}?sendershard=${e}`,transactionDetails:e=>`/${de}/${e}`,transactionDetailsScResults:e=>`/${de}/${e}/${Ar}`,transactionDetailsLogs:e=>`/${de}/${e}/${ss}`,nodeDetails:e=>`/${ms}/${e}`,accountDetails:e=>`/${oe}/${e}`,accountDetailsContractCode:e=>`/${oe}/${e}/${ts}`,accountDetailsTokens:e=>`/${oe}/${e}/${Ve}`,accountDetailsNfts:e=>`/${oe}/${e}/${on}`,accountDetailsScResults:e=>`/${oe}/${e}/${Ar}`,accountDetailsContracts:e=>`/${oe}/${e}/${as}`,identityDetails:e=>`/${is}/${e}`,tokenDetails:e=>`/${Ve}/${e}`,tokenDetailsAccounts:e=>`/${Ve}/${e}/${oe}`,tokenDetailsLockedAccounts:e=>`/${Ve}/${e}/${cs}`,tokenDetailsRoles:e=>`/${Ve}/${e}/${ds}`,collectionDetails:e=>`/${rs}/${e}`,nftDetails:e=>`/${on}/${e}`,providerDetails:e=>`/${vr}/${e}`,providerDetailsTransactions:e=>`/${vr}/${e}/${de}`,miniblockDetails:e=>`/${ps}/${e}`};n();n();n();n();J();n();var ls=!1;function Zu(e){ls||(console.error(e),ls=!0)}function tn({explorerAddress:e,to:o}){try{return new URL(o).href}catch(t){return o.startsWith("/")||(Zu(`Link not prepended by / : ${o}`),o=`/${o}`),e?`${e}${o}`:o}}n();J();n();n();n();var Ju=g(require("bignumber.js"));k();n();var fs=require("@multiversx/sdk-core"),He=g(require("bignumber.js"));k();n();var us=g(require("bignumber.js")),at=(e,o=!0)=>{let t=String(e);if(!t.match(/^[-]?\d+$/))return!1;let c=new us.default(t),s=o?0:-1;return c.toString(10)===t&&c.comparedTo(0)>=s};n();function Re(e){return{if:function(o){return o?{then:t=>t instanceof Function?Re(t(e)):Re(t)}:{then:()=>Re(e)}},then:o=>o instanceof Function?Re(o(e)):Re(o),valueOf:function(){return e}}}He.default.config({ROUNDING_MODE:He.default.ROUND_FLOOR});function le({input:e,decimals:o=ae,digits:t=Je,showLastNonZeroDecimal:c=!0,showIsLessThanDecimalsLabel:s=!1,addCommas:p=!1}){if(!at(e,!1))throw new Error("Invalid input");let m=new He.default(e).isNegative(),d=e;return m&&(d=e.substring(1)),Re(d).then(()=>fs.TokenTransfer.fungibleFromBigInteger("",d,o).amountAsBigInteger.shiftedBy(-o).toFixed(o)).then(l=>{let f=new He.default(l);if(f.isZero())return ie;let h=f.toString(10),[x,w]=h.split("."),v=new He.default(w||0),A=Re(0).if(Boolean(w&&c)).then(()=>Math.max(w.length,t)).if(v.isZero()&&!c).then(0).if(Boolean(w&&!c)).then(()=>Math.min(w.length,t)).valueOf(),V=w&&t>=1&&t<=w.length&&v.isGreaterThan(0)&&new He.default(w.substring(0,t)).isZero(),X=f.toFormat(A);return Re(h).if(p).then(X).if(Boolean(V)).then(se=>{let ke=new He.default(x).isZero(),[D,po]=se.split("."),mo=new Array(t-1).fill(0),At=[...mo,0].join(""),It=[...mo,1].join("");return ke?s?`<${D}.${It}`:c?`${D}.${po}`:D:`${D}.${At}`}).if(Boolean(!V&&w)).then(se=>{let[ke]=se.split("."),D=w.substring(0,A);if(c){let po=t-D.length;if(po>0){let mo=Array(po).fill(0).join("");return D=`${D}${mo}`,`${ke}.${D}`}return se}return D?`${ke}.${D}`:ke}).valueOf()}).if(m).then(l=>`-${l}`).valueOf()}n();n();n();k();n();n();n();n();k();n();k();n();var Qu=require("@multiversx/sdk-core");k();n();var _e=require("@multiversx/sdk-core"),Ts=g(require("bignumber.js"));k();n();n();var Ir=g(require("bignumber.js"));k();var gs=e=>{if(isNaN(e)||e==null||String(e).includes("Infinity"))return!1;let[o,t]=e.split("."),c=Ir.default.clone();if(t){let d=t.split("").every(l=>!isNaN(parseInt(l)));for(c.set({DECIMAL_PLACES:d?t.length:Ir.default.config().DECIMAL_PLACES});t.charAt(t.length-1)===ie;)t=t.slice(0,-1)}let s=t?[o,t].join("."):o,p=c(s);return p.toString(10)===s&&p.comparedTo(0)>=0};n();k();n();var kr={isEsdt:!1,isNft:!1,isEgld:!1};function Lr(e){let o=e==null?void 0:e.split("-").length;return o===2?I(u({},kr),{isEsdt:!0}):o===3?I(u({},kr),{isNft:!0}):I(u({},kr),{isEgld:!0})}var hs={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function Nr({minGasLimit:e=String(Ho),gasLimit:o,gasPrice:t,data:c,gasPerDataByte:s,gasPriceModifier:p,defaultGasPrice:m=String($o),chainId:d}){let l=c||"",f=at(o)?o:e,h=Lo({data:l})?Kt:0,x=new Ts.default(f).plus(h).toNumber(),w=gs(t)?t:m,v=new _e.Transaction({nonce:0,value:_e.TokenPayment.egldFromAmount("0"),receiver:new _e.Address(hs.to),sender:new _e.Address(hs.to),gasPrice:parseInt(w),gasLimit:x,data:new _e.TransactionPayload(l.trim()),chainID:d,version:new _e.TransactionVersion(1)});try{return v.computeFee({GasPerDataByte:parseInt(s),MinGasLimit:parseInt(e),GasPriceModifier:parseFloat(p),ChainID:d}).toString(10)}catch(A){return console.error(A),ie}}n();var it=({amount:e,usd:o,decimals:t=2,addEqualSign:c})=>{let s=(parseFloat(e)*o).toFixed(t),p=parseFloat(s).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),m=parseFloat(e)>0?"\u2248":"=";return`${c?`${m} `:""}$${p}`};n();n();n();n();k();n();k();var xs=({feeLimit:e,egldPriceInUsd:o,hideEqualSign:t})=>{let c=le({input:e,decimals:ae,digits:Je,showLastNonZeroDecimal:!0}),s=it({amount:c,usd:o,decimals:Je});return t?s:`\u2248 ${s}`};n();k();n();J();var ef=["reDelegateRewards","claimRewards","unBond"],of=["wrapEgld","unwrapEgld"],nf=["unStake"],tf=["unDelegate"];n();n();n();k();n();var cf=g(require("bignumber.js"));n();n();J();n();var pf=g(require("bignumber.js"));n();n();n();n();var lf=g(require("bignumber.js"));W();n();n();n();n();P();n();var gf=require("@multiversx/sdk-web-wallet-provider");k();n();var uf=g(require("qs"));n();j();Ye();n();Ye();var e1={search:Ee()?window.location.search:"",removeParams:[]};n();n();n();z();n();J();n();n();z();n();var hf=g(require("linkifyjs"));n();k();n();var Tf=g(require("bignumber.js"));n();W();n();n();P();n();P();n();n();n();J();n();J();n();var xf=g(require("bignumber.js"));k();J();n();J();n();var bs=require("react");W();n();n();J();n();n();var yf=require("@multiversx/sdk-core/out"),Sf=g(require("bignumber.js"));J();n();W();n();n();W();var qN=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var ws=require("react");W();z();n();var wf=require("react");J();var QN=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Ao();n();var st=e=>e.transactions,No=S(st,e=>e.signedTransactions),vf=S(st,e=>e.signTransactionsError),vs=S(st,e=>e.signTransactionsCancelMessage),pt=e=>o=>Object.entries(o).reduce((t,[c,s])=>(e(s.status)&&(t[c]=s),t),{}),As=S(No,pt(bo)),Is=S(No,pt(wo)),ks=S(No,pt(vo)),Af=S(No,pt(dr)),Ls=S(st,e=>{var o;return(e==null?void 0:e.transactionsToSign)==null?null:I(u({},e.transactionsToSign),{transactions:((o=e==null?void 0:e.transactionsToSign)==null?void 0:o.transactions.map(t=>nt(t)))||[]})}),If=S(No,(e,o)=>o,(e,o)=>o!=null?(e==null?void 0:e[o])||{}:{});var Me=()=>N(me);n();var Ns=require("react");n();E();n();n();n();n();n();n();n();n();var Lf=require("@multiversx/sdk-extension-provider"),Nf=require("@multiversx/sdk-hw-provider"),Cf=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Ef=require("@multiversx/sdk-opera-provider"),Pf=require("@multiversx/sdk-passkey-provider/out"),Df=require("@multiversx/sdk-web-wallet-provider");k();Be();n();var Co=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Cs=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");P();n();var ue=e=>`Unable to perform ${e}, Provider not initialized`,mt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ue("getAccount"))}setAccount(o){throw new Error(ue(`setAccount: ${o}`))}login(o){throw new Error(ue(`login with options: ${o}`))}logout(o){throw new Error(ue(`logout with options: ${o}`))}getAddress(){throw new Error(ue("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(o,t){throw new Error(ue(`sendTransaction with transactions: ${o} options: ${t}`))}signTransaction(o,t){throw new Error(ue(`signTransaction with transactions: ${o} options: ${t}`))}signTransactions(o,t){throw new Error(ue(`signTransactions with transactions: ${o} options: ${t}`))}signMessage(o,t){throw new Error(ue(`signTransactions with ${o} and options ${t}`))}sendCustomMessage({method:o,params:t}){throw new Error(ue(`sendCustomMessage with method: ${o} params: ${t}`))}sendCustomRequest(o){throw new Error(ue(`sendSessionEvent with options: ${o}`))}ping(){return Promise.resolve(!1)}},Es=new mt;E();n();n();n();n();n();var Ps=require("@lifeomic/axios-fetch"),Pr=g(require("axios")),Dr=(0,Ps.buildAxiosFetch)(Pr.default),Rr=(e,o)=>T(void 0,null,function*(){if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let c=e.clone().json(),[s]=yield Promise.all([c]);return{data:s,status:e.status,statusText:e.statusText,headers:e.headers,config:o}});function Rf(e,o,t){return T(this,null,function*(){try{let c=yield Dr(e,u({method:"POST",body:o?JSON.stringify(o):void 0,headers:u({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return Rr(c,t)}catch(c){throw console.error("Fetch Error:",c),c}})}function Mf(e,o){return T(this,null,function*(){try{let t=yield Dr(e,o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return Rr(t,o)}catch(t){throw console.error("Fetch Error:",t),t}})}function Of(e,o,t){return T(this,null,function*(){try{let c=yield Dr(e,u({method:"PATCH",body:o?JSON.stringify(o):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!c.ok)throw new Error(`HTTP error! Status: ${c.status}`);return Rr(c,t)}catch(c){throw console.error("Fetch Error:",c),c}})}var qe=Pr.default.create();qe.get=Mf;qe.post=Rf;qe.patch=Of;var Ds=e=>qe.get(e).then(o=>o.data);n();var Eo=e=>{let o=e!=null?e:yr(L.getState());return o.endsWith("/")?o.slice(0,-1):o};n();var Ff=g(require("axios"));n();var Rs=g(require("swr"));var Po=({apiEndpoint:e})=>{let o=Eo(),t=e?`${o}/${e}`:null;return(0,Rs.default)(t,Ds)};n();P();n();n();n();z();n();Ao();n();n();n();var Wf=g(require("axios"));n();var Uf=g(require("axios"));ho();n();k();n();var Gf=g(require("axios"));n();var Hf=g(require("axios"));n();n();var $f=g(require("axios"));n();var qf=g(require("axios"));n();n();E();P();n();n();n();n();z();n();M();W();n();E();n();var Ws=require("@multiversx/sdk-core");W();j();n();Ao();n();E();P();n();E();W();n();n();n();W();n();bn();n();n();n();n();var Us=g(require("swr"));n();n();var _t={},Or={setItem:(e,o)=>T(void 0,null,function*(){try{_t[e]=JSON.stringify(o)}catch(t){console.error("tokenDataStorage unable to serialize",t)}}),getItem:e=>T(void 0,null,function*(){try{return JSON.parse(_t[e])}catch(o){console.error("tokenDataStorage unable to parse",o)}}),clear:()=>T(void 0,null,function*(){_t={}}),removeItem:e=>T(void 0,null,function*(){delete _t[e]})};function Bs(e){return T(this,null,function*(){let{apiAddress:o,apiTimeout:t}=ee(L.getState()),c={baseURL:o,timeout:Number(t)},s=yield Or.getItem(e);if(s)return s;let p=yield qe.get(e,c);return yield Or.setItem(e,p.data),p.data})}function Gs({tokenId:e}){var x,w,v,A;let{network:o}=Me(),{isNft:t}=Lr(e),c=e,s=t?on:Ve,{data:p,error:m,isLoading:d}=(0,Us.default)(Boolean(c)?`${o.apiAddress}/${s}/${c}`:null,Bs);if(!c)return{tokenDecimals:Number(o.decimals),tokenLabel:"",tokenAvatar:""};let l=p?p==null?void 0:p.decimals:Number(o.decimals),f=p?p==null?void 0:p.name:"",h=p?(A=(x=p==null?void 0:p.assets)==null?void 0:x.svgUrl)!=null?A:(v=(w=p==null?void 0:p.media)==null?void 0:w[0])==null?void 0:v.thumbnailUrl:"";return{isLoading:d,tokenDecimals:l,tokenLabel:f,type:p==null?void 0:p.type,tokenAvatar:h,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}n();n();var Vs=require("react");n();n();var Kf=require("react"),Xf=require("@multiversx/sdk-web-wallet-provider"),Yf=require("@multiversx/sdk-web-wallet-provider"),Zf=g(require("qs"));k();E();P();$t();z();var M2=U();n();var _p=require("react"),Gr=require("@multiversx/sdk-core");n();var cn=e=>Po({apiEndpoint:e?`${oe}/${e}?withGuardianInfo=true`:null});k();tr();n();n();n();n();n();n();n();n();n();n();ho();n();var og=g(require("axios"));n();var tg=g(require("axios"));n();ho();n();ho();n();n();n();n();var ag=require("@multiversx/sdk-opera-provider");n();var ig=require("@multiversx/sdk-extension-provider");n();Be();n();n();n();n();var Eg=g(pp());n();var Mg=require("@multiversx/sdk-native-auth-client");n();var lp=g(require("axios"));n();n();n();function mp(e){return T(this,null,function*(){return yield new Promise(o=>{setTimeout(()=>o(),e)})})}n();var dp=(e,o,t,c=0)=>T(void 0,null,function*(){try{return yield e(...t)}catch(s){return c<o.retries?((o==null?void 0:o.delay)!=null&&(yield mp(o.delay)),yield dp(e,o,t,c+1)):null}}),Br=(e,o={retries:5,delay:500})=>(...t)=>T(void 0,null,function*(){return yield dp(e,o,t)});var Pg=4;var nM=Br((e,o,t)=>T(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:c}=yield lp.default.get(`${e}/${tt}?from=${Pg}&size=1&fields=hash,timestamp${o?"&shard="+o:""}`),[s]=c;return s}));n();n();An();n();n();z();var lM={origin:U().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Fg=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Wg=require("@multiversx/sdk-passkey-provider/out");k();z();n();n();n();var $g=require("react"),qg=require("@multiversx/sdk-hw-provider");n();M();W();n();Ko();yo();xo();j();n();n();var nd=require("react"),td=require("@multiversx/sdk-core"),Ex=require("@multiversx/sdk-extension-provider"),Px=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Dx=require("@multiversx/sdk-passkey-provider/out"),Rx=g(Jm());k();n();n();n();n();n();n();n();n();n();n();var _n=g(require("react"));var JO=(0,_n.createContext)({}),QO=L.getState();n();var ed=g(require("react"));n();var qr=g(require("react")),fx=g(require("axios"));n();n();Be();n();n();var yx=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Sx=require("@multiversx/sdk-webview-provider/out/WebviewProvider");M();n();M();E();W();n();n();E();n();j();n();E();W();n();n();var gx=require("@multiversx/sdk-core"),hx=g(require("bignumber.js"));k();n();var Tx=g(require("bignumber.js"));k();E();P();j();z();n();var od=require("react"),Ax=require("@multiversx/sdk-extension-provider"),Ix=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),kx=require("@multiversx/sdk-passkey-provider/out");Be();E();n();E();W();Ko();z();n();ye();E();n();n();var Ox=require("react");n();n();P();Ao();n();var xt=require("react"),rd=(e,o)=>{let[t,c]=(0,xt.useState)(e);return(0,xt.useEffect)(()=>{let p=setTimeout(()=>c(e),o);return()=>clearTimeout(p)},[e]),t};n();n();var Wx=require("react"),Bx=require("@multiversx/sdk-extension-provider");ye();M();P();n();Pe();j();j();n();n();Be();W();n();var Fx=require("react"),ad=require("@multiversx/sdk-core");E();n();var Ux=require("react"),Gx=require("@multiversx/sdk-opera-provider");ye();M();P();Pe();j();z();n();var Vx=require("react");zt();ye();Be();M();E();P();Pe();z();n();var jx=require("react");ye();E();n();n();Xt();n();n();var Hx=g(require("platform"));Ye();n();n();n();n();n();function id(){return Sr(L.getState())}n();n();To();P();n();n();var $x=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();Ko();yo();n();n();n();E();n();n();var qx=g(require("axios"));j();n();n();var zx=g(ft());To();var cd,sd,pd,GG=(pd=(sd=(cd=be.safeWindow)==null?void 0:cd.location)==null?void 0:sd.origin)==null?void 0:pd.includes("localhost");n();z();n();n();var ny=require("react");k();n();n();k();n();n();n();var Kx=g(require("bignumber.js"));n();n();n();var ze=g(require("react")),gd=require("react"),hd=require("react"),Yr=g(require("classnames")),Td=require("react-dom");k();n();var dd=g(require("react")),ld=g(require("classnames"));var Yx=({className:e,children:o,styles:t})=>dd.default.createElement("div",{className:(0,ld.default)(t==null?void 0:t.dappModalBody,e)},o),zr=C(Yx,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),O(Oe)).default});n();var jr=g(require("react")),_d=g(require("classnames"));var Zx=({visible:e,customFooter:o,className:t,footerText:c,styles:s})=>e?jr.default.createElement("div",{className:(0,_d.default)(s==null?void 0:s.dappModalFooter,t)},o!=null?o:jr.default.createElement("div",null,c)):null,Kr=C(Zx,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),O(Oe)).default});n();var Wo=g(require("react")),ud=require("@fortawesome/free-solid-svg-icons"),fd=require("@fortawesome/react-fontawesome"),fn=g(require("classnames"));var Jx=({visible:e,headerText:o,customHeader:t,className:c,closeButtonClassName:s,headerTextClassName:p,onHide:m,globalStyles:d,styles:l})=>e?t?Wo.default.createElement("div",{className:(0,fn.default)(l==null?void 0:l.dappModalHeader,c)},t):Wo.default.createElement("div",{className:(0,fn.default)(l==null?void 0:l.dappModalHeader,c)},Wo.default.createElement("div",{className:(0,fn.default)(l==null?void 0:l.dappModalHeaderText,p)},o),Wo.default.createElement("button",{onClick:m,className:(0,fn.default)(l==null?void 0:l.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,s)},Wo.default.createElement(fd.FontAwesomeIcon,{size:"lg",icon:ud.faTimes}))):null,Xr=C(Jx,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),O(Oe)).default});var Qx={showHeader:!0,showFooter:!1,headerText:"",footerText:""},ey=({"data-testid":e="dappModal",children:o,className:t="dapp-modal-dialog-wrapper",closeOnEscape:c,config:s=Qx,id:p="dapp-modal",onHide:m,parentElement:d,visible:l,styles:f})=>{let[h,x]=(0,gd.useState)(!1);if((0,hd.useEffect)(()=>{x(!0)},[]),!l)return null;let{showHeader:w,showFooter:v,headerText:A,footerText:V,modalDialogClassName:X="dapp-modal-dialog",modalContentClassName:Y="dapp-modal-dialog-content",modalHeaderClassName:se="dapp-modal-dialog-header",modalHeaderTextClassName:ke="dapp-modal-dialog-header-text",modalCloseButtonClassName:D="dapp-modal-dialog-close-button",modalBodyClassName:po="dapp-modal-dialog-content-body",modalFooterClassName:mo="dapp-modal-dialog-footer",customModalHeader:At,customModalFooter:It}=s,ml=dl=>{dl.key==="Escape"&&c&&(m==null||m())};return ze.default.createElement(ze.default.Fragment,null,h&&(0,Td.createPortal)(ze.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Yr.default)(X,f==null?void 0:f.dappModal,t),"data-testid":e,onKeyDown:ml},ze.default.createElement("div",{className:(0,Yr.default)(f==null?void 0:f.dappModalContent,Y)},ze.default.createElement(Xr,{visible:w,headerText:A,customHeader:At,className:se,headerTextClassName:ke,closeButtonClassName:D,onHide:m}),ze.default.createElement(zr,{className:po},o),ze.default.createElement(Kr,{visible:v,customFooter:It,footerText:V,className:mo}))),d!=null?d:document==null?void 0:document.body))},oy=C(ey,{ssrStyles:()=>Promise.resolve().then(()=>(Fe(),Oe)),clientStyles:()=>(Fe(),O(Oe)).default});n();n();var xd=require("react");n();n();var yd=require("react"),ry=require("@multiversx/sdk-hw-provider");ye();M();E();P();Pe();n();var ty=require("react");n();n();var Zr=require("react");M();E();P();Pe();z();n();var iy=require("react"),cy=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");ye();M();P();Pe();j();j();n();var sy=require("react"),py=require("@multiversx/sdk-passkey-provider/out");ye();M();P();Pe();j();j();n();n();var Sd=require("react");n();var ly=require("react");n();var Jr=require("react"),dy=require("socket.io-client");E();n();n();n();var _y=require("react");W();n();n();n();var vd=g(require("swr"));n();n();n();n();var bd=g(require("axios"));function wd(e=en){let t=`${Eo()}/${e}`;return bd.default.get(t)}n();function yt(){let e=c=>wd(c).then(s=>s.data),{data:o,error:t}=(0,vd.default)(en,e);return{price:o==null?void 0:o.price,error:t}}n();n();var St=g(require("react")),oa=g(require("classnames"));var fy=({className:e,styles:o})=>St.default.createElement("div",{className:(0,oa.default)(o==null?void 0:o.loadingDots,e)},Array.from({length:3}).map((t,c)=>St.default.createElement("span",{key:`loading-dot-${c}`,className:(0,oa.default)(o==null?void 0:o.loadingDot,o==null?void 0:o[`loadingDot-${c}`])})),St.default.createElement("span",null,"Loading...")),io=C(fy,{ssrStyles:()=>Promise.resolve().then(()=>(ea(),Qr)),clientStyles:()=>(ea(),O(Qr)).default});n();n();n();var co=g(require("react")),kd=g(require("bignumber.js"));k();var hy=({amount:e,styles:o,type:t,identifier:c})=>{let s=new kd.default(e),p=s.isZero(),m=s.isEqualTo(1)?"SFT":"SFTs",d=s.toNumber().toLocaleString("en"),l=`${d} ${c}`;return p?co.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are using"):t==="NonFungibleESDT"?co.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending an NFT"):t==="SemiFungibleESDT"?co.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},co.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelText},"You are sending"),co.default.createElement("span",{className:o==null?void 0:o.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":l},d," ",m)):co.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},"You are sending")},Ld=C(hy,{ssrStyles:()=>Promise.resolve().then(()=>(ta(),na)),clientStyles:()=>(ta(),O(na)).default});n();n();var Ae=g(require("react")),Rd=require("@fortawesome/free-solid-svg-icons"),Md=require("@fortawesome/react-fontawesome"),Od=g(require("classnames"));k();n();n();var so=g(require("react")),ia=g(require("classnames"));n();var bt=g(require("react")),Ty=e=>bt.createElement("svg",u({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},e),bt.createElement("g",null,bt.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),wt=Ty;var yy=({amount:e,displayAsUsd:o,addEqualSign:t,egldIcon:c,className:s,showTokenLabel:p=!0,styles:m,tokenLabel:d,showTokenLabelSup:l,"data-testid":f})=>{let[h,x]=e.split("."),w=o&&h.indexOf("$")<0?`$${h}`:h,A=(()=>{let Y={processedMainBalance:w};return t&&o&&(Y.approximation="\u2248"),x&&(Y.decimalBalance=`.${x}`),!o&&p&&(Y.tokenLabel=` ${d}`),Y})(),X=[A.approximation,A.processedMainBalance,A.decimalBalance,A.tokenLabel].reduce((Y,se)=>se?Y.concat(se):Y,"");return so.default.createElement("div",{className:(0,ia.default)(m==null?void 0:m.balance,s),"data-testid":f,"data-value":X},c&&!o&&so.default.createElement(wt,{className:m==null?void 0:m.balanceSymbol}),A.approximation&&so.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},A.approximation),A.processedMainBalance&&so.default.createElement("span",{className:m==null?void 0:m.balanceMain},w),A.decimalBalance&&so.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},A.decimalBalance),A.tokenLabel&&so.default.createElement("sup",{className:(0,ia.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:l})},A.tokenLabel))},gn=C(yy,{ssrStyles:()=>Promise.resolve().then(()=>(aa(),ra)),clientStyles:()=>(aa(),O(ra)).default});n();n();var Cd=g(require("react")),Ed=g(require("classnames"));k();var Sy=d=>{var l=d,{amount:e,usd:o,decimals:t,addEqualSign:c,className:s,globalStyles:p}=l,m=pe(l,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let f=it({amount:e,usd:o,decimals:t,addEqualSign:c!=null?c:!0}),x=`${e}`===ie?`= $${ie}`:f;return Cd.default.createElement("small",u({className:(0,Ed.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,s!=null?s:"dapp-usd-value")},m),x)},Pd=C(Sy,{});var wy=({isEgld:e,styles:o,tokenPrice:t,isNftOrSft:c,handleReference:s,currentTransaction:p,amount:m,tokenDetails:d})=>{let{network:l}=Me(),{tokenAvatar:f,tokenDecimals:h,identifier:x}=d,w=({addCommas:X})=>le({input:e?p.transaction.getValue().toString():m,decimals:e?Number(l.decimals):h,digits:Number(l.digits),showLastNonZeroDecimal:!1,addCommas:X}),v=e||d.identifier===vi,A=w({addCommas:!0}),V=w({addCommas:!1});return Ae.default.createElement("div",{className:o==null?void 0:o.confirmAmountData},Ae.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataWrapper},!v&&f&&Ae.default.createElement("img",{src:f,className:o==null?void 0:o.confirmAmountDataIcon}),!v&&!f&&Ae.default.createElement("div",{className:(0,Od.default)(o==null?void 0:o.confirmAmountDataIcon,o==null?void 0:o.confirmAmountDataIconDefault)},Ae.default.createElement(Md.FontAwesomeIcon,{icon:Rd.faCoins,className:o==null?void 0:o.confirmAmountDataIconDefaultIcon})),Ae.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataBalanceWrapper,ref:s},Ae.default.createElement(gn,{amount:A,egldIcon:v,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:v?l.egldLabel:x,className:o==null?void 0:o.confirmAmountDataBalance}))),!c&&t&&Ae.default.createElement(Pd,{amount:V,usd:t,"data-testid":"confirmUsdValue",className:o==null?void 0:o.confirmAmountDataPrice}),!c&&!t&&Ae.default.createElement("div",{className:o==null?void 0:o.confirmAmountDataPrice},"Price Unknown"))},Fd=C(wy,{ssrStyles:()=>Promise.resolve().then(()=>(sa(),ca)),clientStyles:()=>(sa(),O(ca)).default});n();n();var fe=g(require("react")),Bd=require("@fortawesome/free-solid-svg-icons"),Ud=require("@fortawesome/react-fontawesome"),Gd=g(require("classnames"));k();To();var Ay=({styles:e,amount:o,type:t,tokenDetails:c})=>{let{network:s}=Me(),{identifier:p,tokenAvatar:m,name:d}=c,l="SemiFungibleESDT"===t,h=Array(Math.min(4,Number(o))).fill(null);return fe.default.createElement("div",{onClick:w=>{var A;if(!p)return;let v=tn({explorerAddress:s.explorerAddress,to:nn.nftDetails(p)});w.preventDefault(),w.stopPropagation(),(A=be.safeWindow)!=null&&A.open&&be.safeWindow.open(v)},className:e==null?void 0:e.confirmAmountNftSft},fe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftWrapper},m?fe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},h.map((w,v)=>fe.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${v}`,style:{opacity:1-.25*v,zIndex:h.length-v,marginLeft:(h.length-v-1)*4},className:(0,Gd.default)(e==null?void 0:e.confirmAmountNftSftIcon,{[e==null?void 0:e.confirmAmountNftSftIconRelative]:v===0})}))):fe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconWrapper},fe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftIconText},l?"SFT":"NFT")),fe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftContent},fe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftName,"data-testid":"nftLabel"},d),fe.default.createElement("div",{className:e==null?void 0:e.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),fe.default.createElement(Ud.FontAwesomeIcon,{icon:Bd.faArrowUpRightFromSquare,className:e==null?void 0:e.confirmAmountNftSftIcon}))},Vd=C(Ay,{ssrStyles:()=>Promise.resolve().then(()=>(ma(),pa)),clientStyles:()=>(ma(),O(pa)).default});n();n();var Hd=require("react"),$d=()=>{let[e,o]=(0,Hd.useState)(!0),t=p=>p.getBoundingClientRect().width,c=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:e,handleAmountReference:p=>{if(!p)return;let m=p.firstChild,d={parent:p.offsetWidth,firstChild:c(m)};if(!!m){for(;d.parent<t(m);){let l=d.firstChild-.1,f={fontSize:`${l}px`},h={firstChild:l};Object.assign(m.style,f),Object.assign(d,h)}o(!1)}}}};var ky=({styles:e,currentTransaction:o})=>{let{tokenId:t,nonce:c,amount:s}=o.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:m}=$d(),d=c&&c.length>0?`${t}-${c}`:t,l=Gs({tokenId:d}),{price:f}=yt(),{type:h,esdtPrice:x,isLoading:w,identifier:v}=l,A=!t,V=A?f:x,X=h?["SemiFungibleESDT","NonFungibleESDT"].includes(h):!1;return Ie.default.createElement("div",{className:e==null?void 0:e.confirmAmount},Ie.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},w?Ie.default.createElement(io,null):Ie.default.createElement(Ld,{amount:s,type:h,identifier:v})),Ie.default.createElement("div",{className:e==null?void 0:e.confirmAmountWrapper},Ie.default.createElement(io,{className:(0,_a.default)(e==null?void 0:e.confirmAmountLoading,{[e==null?void 0:e.confirmAmountLoadingVisible]:w||p})}),Ie.default.createElement("div",{className:(0,_a.default)(e==null?void 0:e.confirmAmountContent,{[e==null?void 0:e.confirmAmountContentHidden]:w||p})},X?Ie.default.createElement(Vd,{amount:s,type:h,tokenDetails:l}):Ie.default.createElement(Fd,{isNftOrSft:X,isEgld:A,amount:s,handleReference:m,currentTransaction:o,tokenDetails:l,tokenPrice:V}))))},Ly=C(ky,{ssrStyles:()=>Promise.resolve().then(()=>(la(),da)),clientStyles:()=>(la(),O(da)).default});n();n();var We=g(require("react"));k();var Cy=({transaction:e,styles:o})=>{let{price:t}=yt(),c=id(),s=Nr({gasPerDataByte:String(wn),gasPriceModifier:String(jt),gasLimit:e.getGasLimit().valueOf().toString(),gasPrice:e.getGasPrice().valueOf().toString(),data:e.getData().toString(),chainId:e.getChainID().valueOf()}),p=le({input:s,showLastNonZeroDecimal:!0}),m=t?xs({feeLimit:s,egldPriceInUsd:t,hideEqualSign:!0}):null;return We.default.createElement("div",{className:o==null?void 0:o.confirmFee},We.default.createElement("div",{className:o==null?void 0:o.confirmFeeLabel},"Transaction Fee"),We.default.createElement("div",{className:o==null?void 0:o.confirmFeeData},We.default.createElement(gn,{className:o==null?void 0:o.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:c,amount:p}),m?We.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},"(",We.default.createElement(gn,{amount:m,displayAsUsd:!0,addEqualSign:!0,className:o==null?void 0:o.confirmFeeDataPrice}),")"):We.default.createElement("span",{className:o==null?void 0:o.confirmFeeDataPriceWrapper},We.default.createElement(io,null))))},Ey=C(Cy,{ssrStyles:()=>Promise.resolve().then(()=>(fa(),ua)),clientStyles:()=>(fa(),O(ua)).default});n();n();var $=g(require("react")),cl=require("@fortawesome/free-solid-svg-icons"),sl=require("@fortawesome/react-fontawesome"),pl=g(require("bignumber.js"));k();n();n();var jd=e=>e?e.lastIndexOf(".elrond")>0?e.substring(0,e.lastIndexOf(".")):e:void 0;n();n();var Uo=g(require("react")),vt=require("@fortawesome/free-solid-svg-icons"),Ta=require("@fortawesome/react-fontawesome"),Yd=g(require("classnames"));n();Ye();function Py(e){let o=!1,t=document==null?void 0:document.createElement("textarea");t.value=e,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),o=!0}catch(c){console.error("Fallback: Oops, unable to copy",c)}return document==null||document.body.removeChild(t),o}function Kd(e){return T(this,null,function*(){if(!Ee())return!1;let o=!1;return navigator.clipboard?o=yield navigator.clipboard.writeText(e).then(function(){return!0},function(c){return console.error("Async: Could not copy text: ",c),!1}):o=Py(e),o})}var Ry=({text:e,className:o="dapp-copy-button",copyIcon:t=vt.faCopy,successIcon:c=vt.faCheck,styles:s})=>{let[p,m]=(0,Uo.useState)({default:!0,success:!1});return Uo.default.createElement("a",{href:"/#",onClick:l=>T(void 0,null,function*(){l.preventDefault(),l.stopPropagation();let f=e&&e.trim();m({default:!1,success:yield Kd(f)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,Yd.default)(s==null?void 0:s.copy,o)},p.default||!p.success?Uo.default.createElement(Ta.FontAwesomeIcon,{icon:t}):Uo.default.createElement(Ta.FontAwesomeIcon,{icon:c}))},Zd=C(Ry,{ssrStyles:()=>Promise.resolve().then(()=>(ha(),ga)),clientStyles:()=>(ha(),O(ga)).default});n();n();var Sa=g(require("react")),Qd=require("@fortawesome/free-solid-svg-icons"),el=require("@fortawesome/react-fontawesome"),ol=g(require("classnames"));var Oy=l=>{var f=l,{page:e,text:o,className:t="dapp-explorer-link",children:c,globalStyles:s,customExplorerIcon:p,styles:m}=f,d=pe(f,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:h}}=Me(),x=o!=null?o:Sa.default.createElement(el.FontAwesomeIcon,{icon:p!=null?p:Qd.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),w=tn({explorerAddress:String(h),to:e});return Sa.default.createElement("a",u({href:w,target:"_blank",className:(0,ol.default)(m==null?void 0:m.link,s==null?void 0:s.ml2,t),rel:"noreferrer"},d),c!=null?c:x)},nl=C(Oy,{ssrStyles:()=>Promise.resolve().then(()=>(ya(),xa)),clientStyles:()=>(ya(),O(xa)).default});n();n();var G=g(require("react")),rl=g(require("classnames"));k();var Wy=({text:e,className:o="dapp-trim","data-testid":t="trim-text-component",color:c,styles:s})=>{let[p,m]=(0,G.useState)(0),[d,l]=(0,G.useState)(!1),f=(0,G.useRef)(document==null?void 0:document.createElement("span")),h=(0,G.useRef)(document==null?void 0:document.createElement("span")),x=rd(p,300),w=()=>{if(f.current&&h.current){let V=h.current.offsetWidth-f.current.offsetWidth;l(V>1)}},v=()=>{m(p+1)};return(0,G.useEffect)(()=>(window==null||window.addEventListener("resize",v),()=>{window==null||window.removeEventListener("resize",v)})),(0,G.useEffect)(()=>{w()},[x]),G.default.createElement("span",{ref:f,className:(0,rl.default)(s==null?void 0:s.trim,c,o,{overflow:d}),"data-testid":t},G.default.createElement("span",{ref:h,className:s==null?void 0:s.hiddenTextRef},e),d?G.default.createElement(G.default.Fragment,null,G.default.createElement("span",{className:s==null?void 0:s.left},G.default.createElement("span",null,String(e).substring(0,Math.floor(e.length/2)))),G.default.createElement("span",{className:s==null?void 0:s.ellipsis},wi),G.default.createElement("span",{className:s==null?void 0:s.right},G.default.createElement("span",null,String(e).substring(Math.ceil(e.length/2))))):G.default.createElement("span",null,e))},al=C(Wy,{ssrStyles:()=>Promise.resolve().then(()=>(wa(),ba)),clientStyles:()=>(wa(),O(ba)).default});var Uy=({amount:e,label:o,receiver:t,customExplorerIcon:c,receiverUsername:s,customCopyIcon:p,scamReport:m,styles:d})=>{let l=wr(t),f=Boolean(l||s),h=new pl.default(e).isZero(),{data:x,isLoading:w,error:v}=cn(f?null:t),A=s!=null?s:x==null?void 0:x.username,V=A!=null?A:t,X=Boolean(t&&Boolean(A)&&!v),Y=h?"To interact with":"To";return $.default.createElement("div",{className:d==null?void 0:d.receiver},$.default.createElement("div",{className:d==null?void 0:d.receiverLabelWrapper},$.default.createElement("div",{className:d==null?void 0:d.receiverLabel},o!=null?o:Y),m&&$.default.createElement("div",{className:d==null?void 0:d.receiverLabelScam},$.default.createElement("span",{className:d==null?void 0:d.receiverLabelScamText,"data-testid":"confirmScamReport"},m),$.default.createElement(sl.FontAwesomeIcon,{icon:cl.faExclamationTriangle,className:d==null?void 0:d.receiverLabelScamIcon}))),w?$.default.createElement("div",{className:d==null?void 0:d.receiverWrapper},$.default.createElement(io,{className:d==null?void 0:d.receiverLoading})):$.default.createElement("div",{className:d==null?void 0:d.receiverWrapper,"data-testid":"confirmReceiver"},$.default.createElement(al,{text:t,className:d==null?void 0:d.receiverTrim}),X&&!l&&$.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",$.default.createElement(wt,{className:d==null?void 0:d.receiverDataIcon}),$.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},jd(V)),")"),l&&$.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",$.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},"Smart Contract"),")"),$.default.createElement(Zd,{text:t,className:d==null?void 0:d.receiverCopy,copyIcon:p}),$.default.createElement(nl,{page:`/${oe}/${t}`,className:d==null?void 0:d.receiverExternal,customExplorerIcon:c})))},Gy=C(Uy,{ssrStyles:()=>Promise.resolve().then(()=>(Aa(),va)),clientStyles:()=>(Aa(),O(va)).default});0&&(module.exports={ConfirmAmount,ConfirmFee,ConfirmReceiver});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
